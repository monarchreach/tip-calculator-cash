import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@/components/analytics"
import { Suspense } from "react"
import { siteMetadata } from "@/lib/metadata"
import { WebVitals } from "@/components/WebVitals"

// Load Inter font with specific weights
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  keywords: ["tip calculator", "tipping calculator", "restaurant tip", "hotel tipping", "service gratuity calculator"],
  authors: [{ name: "Tip Calculator Tool" }],
  creator: "Tip Calculator Tool",
  publisher: "Tip Calculator Tool",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tipcalculator.cash",
    siteName: siteMetadata.siteName,
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [
      {
        url: "https://tipcalculator.cash/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tip Calculator Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: siteMetadata.twitterHandle,
    creator: siteMetadata.twitterHandle,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.json",
  themeColor: siteMetadata.themeColor,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-US" className={inter.variable} suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/icon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/icon-16x16.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content={siteMetadata.title} />
        <meta name="application-name" content={siteMetadata.title} />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content={siteMetadata.themeColor} />
        <meta name="msapplication-tap-highlight" content="no" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        {/* Skip to content link for keyboard users */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:p-4 focus:bg-background focus:border focus:border-primary focus:text-primary"
        >
          Skip to content
        </a>

        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <Suspense>
              <main id="main-content" className="flex-1" tabIndex={-1}>{children}</main>
            </Suspense>
            <Footer />
          </div>
        </ThemeProvider>
        <Analytics />
        <WebVitals />
      </body>
    </html>
  )
}
