import { Quicksand as Font } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import { type Metadata } from 'next'

const font = Font({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
})

export const metadata: Metadata = {
  title: {
    template: '%s - SNZY',
    default: `SnazzyCat $SNZY`,
  },
  description:
    'Discover SnazzyCat (SNZY) – the meme coin sensation revolutionizing the crypto world! With its playful blend of feline charm and decentralized finance innovation, SNZY offers a vibrant community, transparent tokenomics, and exciting roadmap. Join the SNZY revolution today and explore the purr-fect blend of fun and finance!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx('h-full bg-gray-50 antialiased', font.className)}
    >
      <body className="flex h-full flex-col">
        <div className="flex min-h-full flex-col">{children}</div>
      </body>
    </html>
  )
}
