'use client'

const PAYMENT_LINK = process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK_URL || '#'

type Variant = 'primary' | 'nav' | 'light'

const styles: Record<Variant, string> = {
  primary:
    'inline-flex items-center justify-center px-8 py-3 rounded-full bg-amber-700 text-white font-semibold hover:bg-amber-800 transition-colors shadow-sm',
  nav: 'inline-flex items-center justify-center px-5 py-2 rounded-full bg-amber-700 text-white text-sm font-medium hover:bg-amber-800 transition-colors',
  light:
    'inline-flex items-center justify-center px-10 py-4 rounded-full bg-white text-stone-900 font-semibold text-lg hover:bg-stone-100 transition-colors shadow',
}

export default function OrderButton({ variant = 'primary' }: { variant?: Variant }) {
  return (
    <a href={PAYMENT_LINK} className={styles[variant]} target="_blank" rel="noopener noreferrer">
      Order Now — €48
    </a>
  )
}
