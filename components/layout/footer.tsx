import Link from "next/link"
import { Logo } from "@/components/brand/logo"
import { Calculator, Map, BookOpen, Search, Mail, ExternalLink, Globe, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

export function Footer() {
  return (
    <footer className="border-t bg-background/50">
      <div className="container py-10 md:py-16">
        {/* Email Capture Section */}
        <div className="mb-12 rounded-xl border bg-muted/30 p-6 md:p-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-3 text-xl font-semibold md:text-2xl">Get Tipping Updates</h2>
            <p className="mb-6 text-muted-foreground">
              Stay updated with the latest tipping guides and calculator improvements.
            </p>
            <form className="mx-auto flex max-w-md flex-col gap-2 sm:flex-row">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="h-10 border-muted-foreground/20 bg-background" 
                required
              />
              <Button className="h-10 whitespace-nowrap font-medium">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        
        {/* Main Footer Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Logo className="h-8 w-auto" />
              <span className="font-semibold">Tip Calculator Tool</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your trusted resource for accurate tip calculations and tipping etiquette worldwide.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <Link href="/calculators" className="inline-flex">
                <Button variant="outline" size="sm" className="h-9 gap-1.5 text-xs font-medium">
                  <Search className="h-3.5 w-3.5" />
                  Find Your Tip
                </Button>
              </Link>
              <Link href="/contact-us" className="inline-flex">
                <Button variant="ghost" size="sm" className="h-9 gap-1.5 text-xs font-medium">
                  <Mail className="h-3.5 w-3.5" />
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
          
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Calculator className="h-4 w-4 text-primary" />
              <h3 className="text-sm font-semibold">Calculate Tips</h3>
            </div>
            <ul className="grid gap-2.5">
              <li>
                <Link href="/calculators" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  All Calculators
                </Link>
              </li>
              <li>
                <Link
                  href="/calculators/restaurant-tip-calculator"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Restaurant Tips
                </Link>
              </li>
              <li>
                <Link
                  href="/calculators/hotel-staff-tip-calculator"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Hotel Services
                </Link>
              </li>
              <li>
                <Link
                  href="/calculators/taxi-tip-calculator"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Transportation
                </Link>
              </li>
              <li>
                <Link
                  href="/calculators/hair-salon-tip-calculator"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Personal Services
                </Link>
              </li>
              <li>
                <Link
                  href="/calculators/group-dining-tip-calculator"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Group Dining
                </Link>
              </li>
              <li>
                <Link
                  href="/calculators/international-tip-calculator"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  International Travel
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Map className="h-4 w-4 text-primary" />
              <h3 className="text-sm font-semibold">Tipping Guides</h3>
            </div>
            <ul className="grid gap-2.5">
              <li>
                <Link 
                  href="/global-tipping-etiquette" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Global Tipping Map
                </Link>
              </li>
              <li>
                <Link 
                  href="/us-vs-europe-vs-asia-tipping-culture" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Compare Regions
                </Link>
              </li>
              <li>
                <Link 
                  href="/how-to-calculate-a-tip" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  How to Calculate Tips
                </Link>
              </li>
              <li>
                <Link 
                  href="/digital-tipping-qr-code-guide" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Digital Tipping Guide
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <div className="mb-4 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-primary" />
              <h3 className="text-sm font-semibold">Resources</h3>
            </div>
            <ul className="grid gap-2.5">
              <li>
                <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Sitemap
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                <Globe className="h-4 w-4 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Tip Calculator Tool. All rights reserved.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 md:justify-end">
              <Link href="/privacy-policy" className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors">
                <Info className="h-3 w-3" />
                Privacy
              </Link>
              <Link href="/terms-of-service" className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors">
                <Info className="h-3 w-3" />
                Terms
              </Link>
              <Link href="/sitemap" className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors">
                <ExternalLink className="h-3 w-3" />
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
