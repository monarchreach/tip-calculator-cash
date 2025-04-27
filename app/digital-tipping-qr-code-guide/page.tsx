import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SchemaOrg } from "@/components/schema-org"
import { FAQAccordion } from "@/components/organisms/faq-accordion"
import { ArrowRight, QrCode, Smartphone, CreditCard, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Digital Tipping & QR Code Guide - Modern Cashless Gratuity",
  description:
    "Learn how to use QR codes, apps, and digital payment methods for tipping. Comprehensive guide to modern cashless gratuity options and etiquette.",
}

export default function DigitalTippingGuidePage() {
  return (
    <>
      <SchemaOrg
        schema={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Digital Tipping & QR Code Guide",
          description:
            "Learn how to use QR codes, apps, and digital payment methods for tipping. Comprehensive guide to modern cashless gratuity options and etiquette.",
          author: {
            "@type": "Organization",
            name: "Tip Calculator Hub",
          },
          publisher: {
            "@type": "Organization",
            name: "Tip Calculator Hub",
            logo: {
              "@type": "ImageObject",
              url: "https://tipcalculatorhub.com/logo.png",
            },
          },
          datePublished: "2023-04-15",
          dateModified: "2023-04-15",
        }}
      />

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                Digital Tipping & QR Code Guide
              </h1>
              <p className="max-w-[600px] text-xl text-muted-foreground">
                Navigate the modern world of cashless gratuity with confidence
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="#qr-code-tipping">
                    Learn QR Tipping <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="#digital-tipping-apps">Explore Tipping Apps</Link>
                </Button>
              </div>
            </div>
            <div className="mx-auto w-full max-w-[500px] lg:max-w-none">
              <div className="aspect-video overflow-hidden rounded-xl bg-muted">
                <Image
                  src="/placeholder.svg?height=340&width=600"
                  alt="Digital tipping with smartphone and QR code"
                  width={600}
                  height={340}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight">The Rise of Digital Tipping</h2>
            <p className="text-xl text-muted-foreground">
              As our world becomes increasingly cashless, the way we tip service providers is evolving rapidly.
            </p>
            <p className="text-muted-foreground">
              Digital tipping—using QR codes, apps, and contactless payment methods—is becoming the new norm in many
              industries. From restaurants and hotels to rideshares and delivery services, cashless gratuity options
              offer convenience, transparency, and hygiene benefits.
            </p>
            <p className="text-muted-foreground">
              This guide will help you navigate the modern tipping landscape, understand the technology behind digital
              tipping, and learn how to use these tools confidently in various service settings.
            </p>

            <div className="grid gap-6 md:grid-cols-3 mt-12">
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <QrCode className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">QR Code Tipping</h3>
                <p className="text-sm text-muted-foreground">
                  Scan and pay tips directly from your smartphone without physical cash or cards.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Tipping Apps</h3>
                <p className="text-sm text-muted-foreground">
                  Dedicated applications that streamline the tipping process for various services.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <CreditCard className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Contactless Payments</h3>
                <p className="text-sm text-muted-foreground">
                  Tap-to-pay options that include gratuity selection during the transaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QR Code Tipping Section */}
      <section id="qr-code-tipping" className="w-full py-12 md:py-24 lg:py-32 bg-muted/30 scroll-mt-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <QrCode className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-3xl font-semibold">QR Code Tipping</h2>
                <p className="text-muted-foreground">The contactless way to show appreciation</p>
              </div>
            </div>

            <div className="space-y-6">
              <p>
                QR code tipping has gained significant popularity, especially since the COVID-19 pandemic increased
                demand for contactless interactions. These square barcodes can be scanned with your smartphone camera to
                instantly open a tipping page or payment app.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4">How QR Code Tipping Works</h3>

              <div className="space-y-4">
                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <h4 className="font-semibold mb-2">Step 1: Encounter the QR Code</h4>
                  <p className="text-sm text-muted-foreground">
                    You'll find QR codes on receipts, table tents, digital terminals, name badges, or even business
                    cards.
                  </p>
                </div>

                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <h4 className="font-semibold mb-2">Step 2: Scan the Code</h4>
                  <p className="text-sm text-muted-foreground">
                    Open your smartphone camera and point it at the QR code. Most modern phones automatically detect QR
                    codes without needing a special app.
                  </p>
                </div>

                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <h4 className="font-semibold mb-2">Step 3: Follow the Link</h4>
                  <p className="text-sm text-muted-foreground">
                    Tap the notification that appears on your screen. This will open a webpage or app for the tipping
                    transaction.
                  </p>
                </div>

                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <h4 className="font-semibold mb-2">Step 4: Select Tip Amount</h4>
                  <p className="text-sm text-muted-foreground">
                    Choose from suggested tip percentages or enter a custom amount. Some systems allow you to add a
                    personal message.
                  </p>
                </div>

                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <h4 className="font-semibold mb-2">Step 5: Complete Payment</h4>
                  <p className="text-sm text-muted-foreground">
                    Enter your payment details or use a stored payment method to complete the transaction.
                  </p>
                </div>
              </div>

              <div className="mt-8 rounded-lg bg-primary/5 p-6">
                <h4 className="text-lg font-semibold mb-4">Popular QR Tipping Platforms</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-primary shrink-0 mt-0.5"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <div>
                      <span className="font-medium">TipYo</span> - Specializes in hospitality industry tipping
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-primary shrink-0 mt-0.5"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <div>
                      <span className="font-medium">eTip</span> - Used by hotels, restaurants, and valet services
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-primary shrink-0 mt-0.5"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <div>
                      <span className="font-medium">Venmo</span> - Person-to-person payment app with QR code
                      functionality
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-primary shrink-0 mt-0.5"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <div>
                      <span className="font-medium">Cash App</span> - Offers QR code scanning for direct payments
                    </div>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-8 mb-4">Benefits of QR Code Tipping</h3>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border bg-card p-4">
                  <h4 className="font-medium mb-2">Contactless</h4>
                  <p className="text-sm text-muted-foreground">
                    No need to handle cash or touch payment terminals, providing a more hygienic experience.
                  </p>
                </div>
                <div className="rounded-lg border bg-card p-4">
                  <h4 className="font-medium mb-2">Convenient</h4>
                  <p className="text-sm text-muted-foreground">
                    Tip directly from your phone without needing to carry cash or calculate percentages manually.
                  </p>
                </div>
                <div className="rounded-lg border bg-card p-4">
                  <h4 className="font-medium mb-2">Transparent</h4>
                  <p className="text-sm text-muted-foreground">
                    Digital receipts provide clear records of your tips for expense tracking and budgeting.
                  </p>
                </div>
                <div className="rounded-lg border bg-card p-4">
                  <h4 className="font-medium mb-2">Direct</h4>
                  <p className="text-sm text-muted-foreground">
                    Many QR systems ensure tips go directly to the specific service provider rather than a general pool.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Tipping Apps Section */}
      <section id="digital-tipping-apps" className="w-full py-12 md:py-24 lg:py-32 scroll-mt-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Smartphone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-3xl font-semibold">Digital Tipping Apps</h2>
                <p className="text-muted-foreground">Specialized applications for modern gratuity</p>
              </div>
            </div>

            <div className="space-y-6">
              <p>
                Beyond simple QR code scanning, dedicated tipping apps offer more comprehensive features for both
                service providers and customers. These apps are designed to streamline the tipping process and often
                include additional functionality like service ratings, personalized messages, and tip splitting.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4">Popular Tipping Apps by Industry</h3>

              <div className="space-y-6">
                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <h4 className="font-semibold mb-2">Hospitality Industry</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-primary shrink-0 mt-0.5"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <div>
                        <span className="font-medium">TipYo</span> - Allows hotel guests to tip housekeeping, bellhops,
                        and other staff directly
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-primary shrink-0 mt-0.5"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <div>
                        <span className="font-medium">Grata</span> - Focuses on hotel staff tipping with features for
                        delayed tipping after checkout
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <h4 className="font-semibold mb-2">Food Service</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-primary shrink-0 mt-0.5"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <div>
                        <span className="font-medium">Toast</span> - Restaurant POS system with integrated digital
                        tipping
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-primary shrink-0 mt-0.5"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <div>
                        <span className="font-medium">Square</span> - Payment processing with customizable tipping
                        options
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <h4 className="font-semibold mb-2">Transportation</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-primary shrink-0 mt-0.5"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <div>
                        <span className="font-medium">Uber</span> - Built-in tipping functionality for rideshare drivers
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-primary shrink-0 mt-0.5"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <div>
                        <span className="font-medium">Lyft</span> - Allows tipping during or after your ride
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <h4 className="font-semibold mb-2">Personal Services</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-primary shrink-0 mt-0.5"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <div>
                        <span className="font-medium">StyleSeat</span> - Appointment booking app for beauty
                        professionals with integrated tipping
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-primary shrink-0 mt-0.5"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <div>
                        <span className="font-medium">Vagaro</span> - Salon and spa booking platform with digital
                        tipping options
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-semibold mt-8 mb-4">How to Use Digital Tipping Apps</h3>

              <div className="space-y-4">
                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <h4 className="font-semibold mb-2">Step 1: Download the App</h4>
                  <p className="text-sm text-muted-foreground">
                    Install the relevant tipping app from your device's app store. Some services may use their own
                    proprietary apps.
                  </p>
                </div>

                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <h4 className="font-semibold mb-2">Step 2: Create an Account</h4>
                  <p className="text-sm text-muted-foreground">
                    Set up your profile and add your preferred payment method(s).
                  </p>
                </div>

                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <h4 className="font-semibold mb-2">Step 3: Identify the Service Provider</h4>
                  <p className="text-sm text-muted-foreground">
                    Scan a QR code, enter a code, or search for the service provider by name within the app.
                  </p>
                </div>

                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <h4 className="font-semibold mb-2">Step 4: Select Tip Amount</h4>
                  <p className="text-sm text-muted-foreground">
                    Choose from suggested percentages or enter a custom amount. Some apps allow you to add a note or
                    rating.
                  </p>
                </div>

                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <h4 className="font-semibold mb-2">Step 5: Confirm and Send</h4>
                  <p className="text-sm text-muted-foreground">
                    Review the details and confirm the transaction. You'll typically receive a digital receipt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Considerations Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-3xl font-semibold">Security Considerations</h2>
                <p className="text-muted-foreground">Staying safe while tipping digitally</p>
              </div>
            </div>

            <div className="space-y-6">
              <p>
                While digital tipping offers many conveniences, it's important to be mindful of security. Here are some
                best practices to protect yourself when using digital tipping methods:
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <h4 className="font-semibold mb-2">Verify QR Codes</h4>
                  <p className="text-sm text-muted-foreground">
                    Only scan QR codes from official sources. Be wary of codes that appear to be tampered with or placed
                    in unusual locations.
                  </p>
                </div>

                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <h4 className="font-semibold mb-2">Check URLs</h4>
                  <p className="text-sm text-muted-foreground">
                    Before entering payment information, verify that the URL is legitimate and secure (https://).
                  </p>
                </div>

                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <h4 className="font-semibold mb-2">Use Trusted Apps</h4>
                  <p className="text-sm text-muted-foreground">
                    Only download tipping apps from official app stores and check reviews before installing.
                  </p>
                </div>

                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <h4 className="font-semibold mb-2">Enable Security Features</h4>
                  <p className="text-sm text-muted-foreground">
                    Use biometric authentication or PIN protection for payment apps, and enable transaction
                    notifications.
                  </p>
                </div>
              </div>

              <div className="mt-8 rounded-lg bg-primary/5 p-6">
                <h4 className="text-lg font-semibold mb-4">Red Flags to Watch For</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-destructive shrink-0 mt-0.5"
                    >
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                    <div>QR codes that redirect to unfamiliar or suspicious websites</div>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-destructive shrink-0 mt-0.5"
                    >
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                    <div>Requests for unnecessary personal information beyond what's needed for the transaction</div>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-destructive shrink-0 mt-0.5"
                    >
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                    <div>Pressure to use a specific payment method or app you're unfamiliar with</div>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-destructive shrink-0 mt-0.5"
                    >
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                    <div>Unusually high minimum tip suggestions that seem out of proportion to the service</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Tipping Etiquette */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-semibold mb-8">Digital Tipping Etiquette</h2>

            <div className="space-y-6">
              <p>
                As digital tipping becomes more common, new etiquette questions arise. Here are some guidelines to help
                you navigate this evolving landscape:
              </p>

              <div className="space-y-4">
                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <h4 className="font-semibold mb-2">Timing Matters</h4>
                  <p className="text-muted-foreground">
                    With digital options, you can often tip after the service is complete. However, it's best to tip
                    promptly—within 24 hours for most services, or before checking out for hotel stays.
                  </p>
                </div>

                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <h4 className="font-semibold mb-2">Default Suggestions</h4>
                  <p className="text-muted-foreground">
                    Digital platforms often suggest tip percentages. These are just guidelines—you can adjust based on
                    service quality and local customs. Don't feel pressured by high default suggestions.
                  </p>
                </div>

                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <h4 className="font-semibold mb-2">Acknowledge the Transaction</h4>
                  <p className="text-muted-foreground">
                    Since digital tipping lacks the personal touch of handing over cash, it's nice to verbally
                    acknowledge when you've sent a digital tip: "I've just sent you a tip through the app. Thank you for
                    your service!"
                  </p>
                </div>

                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <h4 className="font-semibold mb-2">Have a Backup Plan</h4>
                  <p className="text-muted-foreground">
                    Technology isn't always reliable. Consider carrying some cash as a backup in case of connectivity
                    issues or app problems.
                  </p>
                </div>
              </div>

              <div className="mt-8 rounded-lg bg-primary/5 p-6">
                <h4 className="text-lg font-semibold mb-4">Regional Considerations</h4>
                <p className="mb-4">
                  Digital tipping adoption varies significantly by region. Here's what to expect in different parts of
                  the world:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-primary shrink-0 mt-0.5"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                    <div>
                      <span className="font-medium">North America:</span> High adoption of digital tipping, especially
                      in urban areas and among younger demographics
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-primary shrink-0 mt-0.5"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                    <div>
                      <span className="font-medium">Europe:</span> Mixed adoption, with Northern European countries
                      leading in cashless payments but traditional tipping still common in Southern Europe
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-primary shrink-0 mt-0.5"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                    <div>
                      <span className="font-medium">Asia:</span> High adoption in China and parts of Southeast Asia
                      where QR payments are already mainstream; less common in Japan where tipping itself is rare
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-primary shrink-0 mt-0.5"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                    <div>
                      <span className="font-medium">Middle East:</span> Growing adoption in tourist areas and luxury
                      establishments, but cash still predominates in many countries
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-semibold mb-8">Frequently Asked Questions</h2>

            <FAQAccordion
              items={[
                {
                  question: "Are digital tips taxable?",
                  answer:
                    "Yes, digital tips are taxable income in most countries. Unlike cash tips, which can sometimes go unreported, digital tips create an electronic record that makes them easier to track for tax purposes. Service providers should report all tip income, regardless of how it's received.",
                },
                {
                  question: "Do digital tips go directly to the service provider?",
                  answer:
                    "It depends on the platform. Some digital tipping apps are designed specifically to ensure tips go directly to individual service providers. Others may distribute tips according to company policy, which could mean pooling and sharing among staff. If you want to ensure your tip goes to a specific person, check the app's policies or ask the service provider directly.",
                },
                {
                  question: "Is it safe to scan QR codes for tipping?",
                  answer:
                    "Generally yes, if you're scanning QR codes from reputable businesses. However, it's important to verify that the QR code is legitimate before entering payment information. Check that the URL it directs you to matches the business name and has https:// security. Be wary of QR codes that appear to be tampered with or placed in unusual locations.",
                },
                {
                  question: "Should I tip differently when using digital methods?",
                  answer:
                    "The standard tipping percentages generally remain the same whether you're tipping digitally or with cash. However, some digital platforms may suggest higher default tip percentages. Always feel free to adjust to an amount you're comfortable with based on service quality and local customs.",
                },
                {
                  question: "What if I don't have a smartphone or digital payment methods?",
                  answer:
                    "Cash remains an acceptable form of tipping in most places. While digital tipping is growing in popularity, service providers understand that not everyone has access to or is comfortable with digital payment methods. Carrying some cash for tipping purposes is still a good practice, especially when traveling.",
                },
                {
                  question: "Do digital tipping platforms charge fees?",
                  answer:
                    "Some do. Platforms may charge the business, the service provider, or even the customer a small percentage fee for processing the transaction. These fees can vary widely, from less than 1% to over 3% of the transaction amount. Some apps clearly disclose these fees, while others build them into their business model in less obvious ways.",
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Ready to Calculate Your Tip?</h2>
              <p className="max-w-[900px] text-xl text-muted-foreground">
                Use our digital-friendly calculators to determine the perfect tip amount
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="/calculators/digital-tipping-calculator">
                  Try Our Digital Tipping Calculator <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/future-of-tipping-digital">Learn About the Future of Tipping</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
