import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import LeadCapturePopup from '@/components/lead-capture-popup'
import LiveChat from '@/components/live-chat'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Your Agency',
  description: 'Web design, development, and digital marketing services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <LeadCapturePopup />
        <LiveChat />
      </body>
    </html>
  )
}