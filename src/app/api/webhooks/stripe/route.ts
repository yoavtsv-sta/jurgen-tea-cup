import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { Resend } from 'resend'

export async function POST(req: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
  const resend = new Resend(process.env.RESEND_API_KEY!)

  const body = await req.text()
  const sig = req.headers.get('stripe-signature')!

  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!)
  } catch {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session
    const customerEmail = session.customer_details?.email
    const customerName = session.customer_details?.name ?? 'Tea lover'

    if (customerEmail) {
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL ?? 'hello@jurgenteacup.com',
        to: customerEmail,
        subject: 'Your Jurgen Tea Cup is on its way ☕',
        html: orderConfirmationEmail(customerName, session.id),
      })
    }
  }

  return NextResponse.json({ received: true })
}

function orderConfirmationEmail(name: string, orderId: string): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Georgia, serif; background: #fafaf9; color: #1c1917; margin: 0; padding: 0; }
    .container { max-width: 560px; margin: 40px auto; background: white; border: 1px solid #e7e5e4; border-radius: 4px; overflow: hidden; }
    .header { background: #78350f; color: white; padding: 32px 40px; }
    .header h1 { margin: 0; font-size: 22px; font-weight: normal; letter-spacing: 0.05em; }
    .body { padding: 40px; }
    .body p { line-height: 1.7; color: #44403c; margin: 0 0 16px; }
    .order-id { font-family: monospace; font-size: 12px; color: #a8a29e; margin-top: 32px; }
    .footer { padding: 24px 40px; border-top: 1px solid #f5f5f4; text-align: center; }
    .footer p { font-size: 12px; color: #a8a29e; margin: 0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Jurgen Tea Cup Co.</h1>
    </div>
    <div class="body">
      <p>Dear ${name},</p>
      <p>
        Your order is confirmed. Thank you for choosing the Jurgen cup — we hope it becomes
        a daily companion for the next twenty years.
      </p>
      <p>
        Your cup is handcrafted in Porto. We'll send you a shipping confirmation with tracking
        once it leaves the atelier (typically within 5–7 working days).
      </p>
      <p>
        If you have any questions, reply to this email and Jurgen will get back to you personally.
      </p>
      <p>Good tea ahead,<br>Jurgen</p>
      <div class="order-id">Order reference: ${orderId}</div>
    </div>
    <div class="footer">
      <p>Jurgen Tea Cup Co. · Porto, Portugal</p>
    </div>
  </div>
</body>
</html>
`
}
