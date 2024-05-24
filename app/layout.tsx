import type { Metadata } from 'next'

import { ReactNode } from 'react'

import './globals.css'

export const metadata: Metadata = {
  description: 'Oleksii Rozhko personal website',
  icons: {
    icon: [
      {
        rel: 'icon', // optional, 'icon' is the default value
        sizes: '32x32',
        type: 'image/png',
        // media: '(prefers-color-scheme: light)',
        url: '/favicon-32x32.png',
      },
      {
        rel: 'icon', // optional, 'icon' is the default value
        sizes: '16x16',
        type: 'image/png',
        // media: '(prefers-color-scheme: dark)',
        url: '/favicon-16x16.png',
      },
    ],
  },
  manifest: '/site.webmanifest',
  title: 'Oleksii Rozhko',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <>
      <html lang={'en'}>
        <body>{children}</body>
      </html>
    </>
  )
}
