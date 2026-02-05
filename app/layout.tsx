import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kenya Digital Boost - Web Design & Digital Solutions in Mombasa',
  description: 'Professional web design, e-commerce platforms, and custom digital systems for Kenyan businesses. Based in Mombasa, serving all of Kenya.',
  keywords: 'web design Kenya, Mombasa web developer, Kenya digital agency, e-commerce Kenya, mobile app development Kenya',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
