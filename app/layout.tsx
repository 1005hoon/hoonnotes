import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'

import './globals.css'

import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { MainFooter } from '@/components/main-footer'
import { MainNav } from '@/components/main-nav'
import { ThemeProvider } from '@/components/theme-provider'

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    'Next.js',
    'React',
    'Tailwind CSS',
    'Server Components',
    'Product Engineer',
    'Marketer'
  ],
  authors: [
    {
      name: '1005hoon',
      url: 'https://hoonnotes.io'
    }
  ],
  creator: '1005hoon',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@1005hoon'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'flex min-h-screen flex-col font-sans antialiased',
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <MainNav />
          <main className="container flex-1">{children}</main>
          <MainFooter />
        </ThemeProvider>
      </body>
    </html>
  )
}
