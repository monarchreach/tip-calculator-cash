import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@/components/analytics"
import { Suspense } from "react"

// Load Inter font with specific weights
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: {
    template: "%s | Tip Calculator Hub",
    default: "Tip Calculator Hub - Calculate Tips for Any Service",
  },
  description:
    "Free online tip calculators for restaurants, hotels, taxis, and more. Calculate the perfect tip amount based on service quality and local customs.",
  keywords: ["tip calculator", "tipping calculator", "restaurant tip", "hotel tipping", "service gratuity calculator"],
  authors: [{ name: "Tip Calculator Hub" }],
  creator: "Tip Calculator Hub",
  publisher: "Tip Calculator Hub",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tipcalculatorhub.com",
    siteName: "Tip Calculator Hub",
    title: "Tip Calculator Hub - Calculate Tips for Any Service",
    description: "Free online tip calculators for restaurants, hotels, taxis, and more.",
    images: [
      {
        url: "https://tipcalculatorhub.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tip Calculator Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tip Calculator Hub - Calculate Tips for Any Service",
    description: "Free online tip calculators for restaurants, hotels, taxis, and more.",
    images: ["https://tipcalculatorhub.com/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-US" className={inter.variable} suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <Suspense>
              <main className="flex-1">{children}</main>
            </Suspense>
            <Footer />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
