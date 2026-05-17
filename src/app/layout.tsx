import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Jurgen Tea Cup Co.',
  description: 'The perfect tea cup for Jurgen',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
