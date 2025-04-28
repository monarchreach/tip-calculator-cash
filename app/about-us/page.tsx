import type { Metadata } from "next"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { SchemaOrg } from "@/components/schema-org"
import { 
  ArrowRight, Globe, Calculator, Award, Users, MapPin, 
  Mail, Check, Building, BarChart, Briefcase, Scissors, 
  Hotel, Car, Utensils, DollarSign, LucideIcon, Shield, Brain
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export const metadata: Metadata = {
  title: "About TipCalculator.cash - Our Mission and Services",
  description:
    "Learn about TipCalculator.cash, our mission to make tipping easy worldwide, and our comprehensive suite of calculators and guides for every service type.",
}

interface FeatureProps {
  icon: LucideIcon
  title: string
  description: string
}

function Feature({ icon: Icon, title, description }: FeatureProps) {
  return (
    <div className="flex flex-col space-y-3 p-6 rounded-xl bg-muted/30 border border-border/30 hover-lift">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}

export default function AboutUsPage() {
  return (
    <>
      <SchemaOrg
        schema={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "About TipCalculator.cash",
          "description": "Learn about TipCalculator.cash, our mission to make tipping easy worldwide, and our comprehensive suite of calculators and guides for every service type.",
          "mainEntity": {
            "@type": "Organization",
            "name": "TipCalculator.cash",
            "url": "https://tipcalculatorhub.com",
            "description": "A platform dedicated to making tipping easy, accurate, and culturally appropriate worldwide.",
            "slogan": "Making Tipping Easy, Everywhere"
          }
        }}
      />

      <div className="container px-4 py-12 md:px-6 md:py-24">
        <div className="mx-auto max-w-4xl">
          {/* Hero Section */}
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              About TipCalculator.cash
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-muted-foreground">
              Your trusted resource for accurate, location-specific tipping guidance around the world
            </p>
          </div>

          {/* Mission Section */}
          <div className="mb-16 rounded-xl border bg-card p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Our Mission: Making Tipping Easy, Everywhere</h2>
            </div>
            <div className="prose max-w-none dark:prose-invert">
              <p className="lead">
                At TipCalculator.cash, we believe that tipping should be simple, fair, and stress-free — no matter where you are or what service you're using.
              </p>
              <p>
                Our mission is to empower travellers, diners, service users, and businesses with fast, accurate, and location-sensitive tip calculations.
              </p>
              <p>
                Whether you're splitting a restaurant bill in New York, tipping a taxi driver in Paris, or rewarding a moving company in Sydney,
                we provide the tools and knowledge you need to tip confidently and respectfully.
              </p>
            </div>
          </div>

          {/* What We Offer Section */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">What We Offer</h2>
            </div>
            <p className="mb-8 text-lg text-muted-foreground">
              At the heart of TipCalculator.cash is a specialised suite of tools and educational resources designed to make tipping easier for everyone:
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Feature 
                icon={Calculator}
                title="50+ Service-Specific Calculators"
                description="Calculate gratuities for restaurants, taxis, hotels, movers, freelancers, spas, events, and more."
              />
              <Feature 
                icon={MapPin}
                title="Location-Based Standards"
                description="Tailored recommendations based on the city or country you're in — reflecting cultural etiquette and local norms."
              />
              <Feature 
                icon={Check}
                title="Free, Ad-Light Experience"
                description="Use all calculators freely, without disruptive ads inside the tools themselves."
              />
              <Feature 
                icon={Award}
                title="Educational Resources"
                description="Learn about tipping psychology, travel customs, digital tipping trends, and service charges worldwide."
              />
              <Feature 
                icon={Globe}
                title="Mobile Optimization"
                description="Our site is built for speed, accessibility, and seamless experiences across all devices."
              />
              <Feature 
                icon={Users}
                title="Cultural Sensitivity"
                description="Respectful guidance that honors local customs and service worker expectations."
              />
            </div>
          </div>

          {/* Who We Are Section */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Who We Are</h2>
            </div>
            <div className="prose max-w-none dark:prose-invert">
              <p>
                TipCalculator.cash was created by a team passionate about global culture, hospitality, service quality, and seamless digital tools.
                We combine backgrounds in travel consultancy, hospitality training, financial literacy, and UX development to build the most user-friendly tip calculators on the internet.
              </p>
              <p>
                Our calculators are backed by real-world tipping standards, hospitality best practices, and up-to-date cultural research — not guesswork.
              </p>
              <div className="mt-6 not-prose">
                <h3 className="text-xl font-medium mb-4">We are dedicated to helping people:</h3>
                <ul className="grid gap-3 md:grid-cols-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span>Respect service workers across cultures</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span>Avoid tipping mistakes abroad</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span>Budget tips into service costs easily</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span>Support the global service economy thoughtfully</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Why Trust Us Section */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Why Trust TipCalculator.cash?</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-lg font-medium mb-3">Accuracy and Transparency First</h3>
                <p className="text-muted-foreground">
                  Every tipping recommendation is based on industry-standard percentages, regional research, and real-world expectations. We never guess — and where tipping norms vary, we tell you clearly.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-lg font-medium mb-3">Performance and Accessibility</h3>
                <p className="text-muted-foreground">
                  Built with modern Core Web Vitals standards, our site is fast, mobile-optimised, and usable for all audiences.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-lg font-medium mb-3">Educational Commitment</h3>
                <p className="text-muted-foreground">
                  Beyond tip calculations, we provide articles, FAQs, and guides to help users understand why tipping practices vary across services and countries.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-lg font-medium mb-3">Semantic Authority</h3>
                <p className="text-muted-foreground">
                  We structure every page with clean metadata, proper schema, and entity connections — ensuring search engines understand the trustworthiness of our content.
                </p>
              </div>
            </div>
          </div>

          {/* How We Help Section */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">How TipCalculator.cash Helps Different Users</h2>
            </div>
            <div className="overflow-x-auto rounded-lg border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[200px]">User Type</TableHead>
                    <TableHead>How We Help</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Travellers</TableCell>
                    <TableCell>Localised tipping calculators and etiquette guides for major cities and countries.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Diners</TableCell>
                    <TableCell>Easy restaurant tip splits, group dining calculators, buffet tipping advice.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Service Users</TableCell>
                    <TableCell>Tips for moving companies, home cleaners, personal trainers, and more.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Freelancers</TableCell>
                    <TableCell>Guides on gratuities for contractors, consultants, and digital services.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Researchers</TableCell>
                    <TableCell>Deep dives into tipping psychology, economic behaviors, and cultural customs.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>

          {/* Our Semantic Reach Section */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <BarChart className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Our Semantic Reach</h2>
            </div>
            <p className="mb-6 text-lg text-muted-foreground">
              TipCalculator.cash is recognised for coverage across key service industries:
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex items-center gap-3 rounded-lg border bg-card p-4">
                <Utensils className="h-5 w-5 text-primary" />
                <span>Food & Beverage Tipping</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg border bg-card p-4">
                <Car className="h-5 w-5 text-primary" />
                <span>Transportation Tipping</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg border bg-card p-4">
                <Hotel className="h-5 w-5 text-primary" />
                <span>Hospitality Tipping</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg border bg-card p-4">
                <Scissors className="h-5 w-5 text-primary" />
                <span>Personal Services Tipping</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg border bg-card p-4">
                <Building className="h-5 w-5 text-primary" />
                <span>Event Services Tipping</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg border bg-card p-4">
                <Briefcase className="h-5 w-5 text-primary" />
                <span>Freelance & Gig Economy Tipping</span>
              </div>
            </div>
            <p className="mt-6 text-muted-foreground">
              Across all these categories, we aim to set the gold standard for accuracy, relevance, and cultural sensitivity.
            </p>
          </div>

          {/* Our Global Scope Section */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Our Global Scope</h2>
            </div>
            <p className="mb-6 text-lg">TipCalculator.cash serves users from:</p>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              <div className="flex items-center gap-2 rounded-lg border bg-card p-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span>United States</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg border bg-card p-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Canada</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg border bg-card p-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span>United Kingdom</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg border bg-card p-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Australia</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg border bg-card p-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span>European Union</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg border bg-card p-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Middle East</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg border bg-card p-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Asia Pacific</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg border bg-card p-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span>And expanding...</span>
              </div>
            </div>
            <p className="mt-6 text-muted-foreground">
              No matter where you're travelling — or where you're tipping — we're building calculators and guides to serve you better.
            </p>
          </div>

          {/* Our Promise Section */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Our Promise to You</h2>
            </div>
            <p className="mb-6 text-lg">We are committed to:</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span>Providing free access to our calculators for all users</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span>Continuously updating tipping recommendations based on the latest cultural research</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span>Expanding our global calculator coverage with user feedback</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span>Remaining transparent about any partnerships or affiliate links we use</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span>Keeping performance, trust, and educational quality as our highest priorities</span>
              </li>
            </ul>
            <p className="mt-6 text-muted-foreground">
              We exist to make your tipping experience faster, fairer, and more informed — and we're just getting started.
            </p>
          </div>

          {/* Connect With Us Section */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Connect With TipCalculator.cash</h2>
            </div>
            <p className="mb-6 text-lg">
              Got feedback, suggestions, or tipping customs you think we should cover?
              We'd love to hear from you.
            </p>
            <div className="flex justify-center">
              <Link
                href="/contact-us"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "font-semibold"
                )}
              >
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <p className="mt-8 text-center text-muted-foreground">
              Stay tuned as we continue expanding the world's best tip calculator platform — built for travellers, locals, and global service respect.
            </p>
          </div>

          {/* Related Resources */}
          <div className="mt-12 border-t pt-12">
            <h2 className="mb-6 text-2xl font-semibold">Related Resources</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Link 
                href="/global-tipping-etiquette" 
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "justify-start"
                )}
              >
                <Globe className="mr-2 h-4 w-4" />
                Global Tipping Etiquette
              </Link>
              <Link 
                href="/us-vs-europe-vs-asia-tipping-culture" 
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "justify-start"
                )}
              >
                <MapPin className="mr-2 h-4 w-4" />
                Regional Tipping Guide
              </Link>
              <Link 
                href="/how-to-calculate-a-tip" 
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "justify-start"
                )}
              >
                <Calculator className="mr-2 h-4 w-4" />
                How to Calculate a Tip
              </Link>
              <Link 
                href="/digital-tipping-qr-code-guide" 
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "justify-start"
                )}
              >
                <DollarSign className="mr-2 h-4 w-4" />
                Digital Tipping Guide
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 