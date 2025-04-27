import Link from "next/link"
import { Logo } from "@/components/brand/logo"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Logo className="h-8 w-auto" />
              <span className="font-semibold">Tip Calculator Hub</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Free online tip calculators for restaurants, hotels, taxis, and more.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Calculators</h3>
            <ul className="grid gap-3">
              <li>
                <Link href="/calculators" className="text-sm text-muted-foreground hover:text-foreground">
                  All Calculators
                </Link>
              </li>
              <li>
                <Link
                  href="/calculators/restaurant-tip-calculator"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Restaurant
                </Link>
              </li>
              <li>
                <Link
                  href="/calculators/hotel-staff-tip-calculator"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Hotel
                </Link>
              </li>
              <li>
                <Link
                  href="/calculators/taxi-tip-calculator"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Transportation
                </Link>
              </li>
              <li>
                <Link
                  href="/calculators/hair-salon-tip-calculator"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Personal Services
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Resources</h3>
            <ul className="grid gap-3">
              <li>
                <Link href="/global-tipping-etiquette" className="text-sm text-muted-foreground hover:text-foreground">
                  Global Tipping Etiquette
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/how-to-calculate-a-tip" className="text-sm text-muted-foreground hover:text-foreground">
                  How to Calculate a Tip
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-muted-foreground hover:text-foreground">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Company</h3>
            <ul className="grid gap-3">
              <li>
                <Link href="/about-us" className="text-sm text-muted-foreground hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-sm text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-sm text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="text-sm text-muted-foreground hover:text-foreground">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-muted-foreground md:text-left">
              © {new Date().getFullYear()} Tip Calculator Hub. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy
              </Link>
              <Link href="/terms-of-service" className="text-sm text-muted-foreground hover:text-foreground">
                Terms
              </Link>
              <Link href="/contact-us" className="text-sm text-muted-foreground hover:text-foreground">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
