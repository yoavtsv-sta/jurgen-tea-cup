import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jurgen Tea Cup Co. — The Perfect Tea Cup',
  description: 'A handcrafted tea cup designed for those who take their tea seriously. Minimal, durable, beautiful.',
  openGraph: {
    title: 'Jurgen Tea Cup Co.',
    description: 'The perfect tea cup — crafted with care.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-stone-50 text-stone-900 antialiased">{children}</body>
    </html>
  )
}
