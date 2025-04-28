import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CalculatorCard } from "@/components/organisms/calculator-card"
import { BlogCard } from "@/components/organisms/blog-card"
import { SchemaOrg } from "@/components/schema-org"
import { Badge } from "@/components/atoms/badge"
import { 
  ArrowRight, Check, Github, HelpCircle, MessageSquare, Newspaper, School, Sparkles, Sprout, X, BarChart, Globe,
  Utensils, Car, Hotel, Scissors, Clock, CheckCircle, Calculator, MapPin,
  Briefcase, PartyPopper, DollarSign, Award, ShieldCheck
} from "lucide-react"
import { Seo } from "@/components/seo"
import { FAQAccordion } from "@/components/organisms/faq-accordion"
import { getBreadcrumbs } from "@/lib/metadata-helper"
import { Metadata } from "next"
import { generateCompleteSchema } from "@/lib/schema"

// Generate static metadata
export const metadata: Metadata = {
  title: "Tip Calculator Tool | Free, Accurate Tip Calculators by Service and Location",
  description: "Calculate restaurant, taxi, hotel, and service tips accurately for any city. 50+ calculators optimised for local customs, mobile-first, and Core Web Vitals ready.",
  openGraph: {
    title: "Tip Calculator Tool | Free, Accurate Tip Calculators by Service and Location",
    description: "Calculate restaurant, taxi, hotel, and service tips accurately for any city. 50+ calculators optimised for local customs, mobile-first, and Core Web Vitals ready.",
    url: "https://tipcalculatorhub.com",
    siteName: "Tip Calculator Tool",
    images: [
      {
        url: "https://tipcalculatorhub.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tip Calculator Tool",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tip Calculator Tool | Free, Accurate Tip Calculators",
    description: "Calculate restaurant, taxi, hotel, and service tips accurately for any city. 50+ calculators optimised for local customs.",
    creator: "@tipcalchub",
    site: "@tipcalchub",
    images: ["https://tipcalculatorhub.com/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://tipcalculatorhub.com",
  },
}

export default function Home() {
  // Get breadcrumbs for structured data
  const breadcrumbs = getBreadcrumbs('/')
  
  // Generate schema for homepage
  const schema = generateCompleteSchema({
    type: 'home',
    title: metadata.title as string,
    description: metadata.description as string,
    url: metadata.alternates?.canonical as string,
    breadcrumbs: breadcrumbs,
  })

  // FAQ items for the homepage
  const faqItems = [
    {
      question: "How accurate are the Tip Calculator Tool recommendations?",
      answer: "Our calculators use industry-standard percentages and adjust for regional norms when available."
    },
    {
      question: "Can I use Tip Calculator Tool offline?",
      answer: "You can preload the calculators while online, but live updates require an internet connection."
    },
    {
      question: "Are there tipping calculators for other countries?",
      answer: "Yes — we offer location-specific calculators for cities like New York, Paris, London, Dubai, and more."
    },
    {
      question: "Is Tip Calculator Tool free to use?",
      answer: "100% free — no ads inside calculators, no hidden charges."
    },
    {
      question: "How do I choose the right tip percentage?",
      answer: "Our calculators recommend the most culturally appropriate tip based on the service and location you select."
    }
  ];
  
  return (
    <>
      <Seo pageType="home" schema={schema} />

      <SchemaOrg
        schema={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Tip Calculator Tool",
          url: "https://tipcalculatorhub.com",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://tipcalculatorhub.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        }}
      />

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/30">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                Instantly Calculate the Right Tip for Every Service and City
              </h1>
              <p className="max-w-[600px] text-xl text-muted-foreground">
                Trusted, accurate tip calculators built for restaurants, taxis, hotels, movers, salons, and more — across the world.
              </p>
              <div className="flex flex-col gap-3 min-[400px]:flex-row">
                <Button asChild size="lg" className="font-semibold">
                  <Link href="/calculators" className="flex items-center">
                    Browse All Tip Calculators <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="font-medium">
                  <Link href="/global-tipping-etiquette">Global Tipping Guides</Link>
                </Button>
              </div>
            </div>
            <div className="mx-auto w-full max-w-[500px] lg:max-w-none">
              <div className="aspect-video overflow-hidden rounded-xl bg-muted">
                <div className="p-6 flex items-center justify-center h-full">
                  <div className="w-full max-w-sm p-6 bg-card rounded-lg shadow-lg hover-lift">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Calculator className="h-5 w-5 text-primary" />
                      Quick Tip Calculator
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium">Bill Amount</label>
                        <div className="mt-1 relative">
                          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-muted-foreground">
                            $
                          </span>
                          <input 
                            type="number" 
                            className="w-full pl-8 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-primary transition-colors input-validation" 
                            placeholder="0.00" 
                          />
                        </div>
                      </div>
                      <div>
                        <label className="text-sm font-medium">Tip Percentage</label>
                        <div className="mt-1 grid grid-cols-3 gap-2">
                          <button className="py-2 border rounded-md bg-muted hover:bg-muted/80 transition-colors">15%</button>
                          <button className="py-2 border rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">18%</button>
                          <button className="py-2 border rounded-md bg-muted hover:bg-muted/80 transition-colors">20%</button>
                        </div>
                      </div>
                      <div className="pt-4 border-t calculator-result">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Tip Amount:</span>
                          <span className="font-semibold">$9.00</span>
                        </div>
                        <div className="flex justify-between mt-2">
                          <span className="text-muted-foreground">Total:</span>
                          <span className="font-semibold">$59.00</span>
                        </div>
                      </div>
                      <Link href="/calculators/restaurant-tip-calculator" className="w-full mt-2 py-2 px-4 block text-center bg-secondary hover:bg-secondary/90 text-secondary-foreground font-medium rounded-md transition-colors">
                        Try Full Calculator
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Differentiation Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 border-t border-border/40">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2 max-w-[800px]">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Why Tip Calculator Tool is the Trusted Authority for Smart Tipping</h2>
              <p className="text-xl text-muted-foreground mt-4">
                Tipping standards vary by service, country, and even city.<br />
                Tip Calculator Tool simplifies tipping by delivering:
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col space-y-3 p-6 rounded-xl bg-muted/30 border border-border/30 hover-lift">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Accurate Recommendations</h3>
              <p className="text-muted-foreground">Real-world tipping recommendations based on industry standards and regional customs</p>
            </div>
            <div className="flex flex-col space-y-3 p-6 rounded-xl bg-muted/30 border border-border/30 hover-lift">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Global Coverage</h3>
              <p className="text-muted-foreground">50+ specialized calculators across services and locations, aligned with cultural customs</p>
            </div>
            <div className="flex flex-col space-y-3 p-6 rounded-xl bg-muted/30 border border-border/30 hover-lift">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Mobile-First Design</h3>
              <p className="text-muted-foreground">Optimized performance for travelers and locals, ready when you need it most</p>
            </div>
            <div className="flex flex-col space-y-3 p-6 rounded-xl bg-muted/30 border border-border/30 hover-lift">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Always Updated</h3>
              <p className="text-muted-foreground">Current tipping customs and expectations for every region and service type</p>
            </div>
            <div className="flex flex-col space-y-3 p-6 rounded-xl bg-muted/30 border border-border/30 hover-lift">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Transparent & Ad-Free</h3>
              <p className="text-muted-foreground">Clean, ad-free calculation experiences with no hidden charges or distractions</p>
            </div>
            <div className="flex flex-col space-y-3 p-6 rounded-xl bg-muted/30 border border-border/30 hover-lift">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Expert Guidance</h3>
              <p className="text-muted-foreground">Built by travel experts who understand global tipping nuances in every location</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-lg text-muted-foreground max-w-[700px] mx-auto">
              Whether you're dining in New York, catching a taxi in Paris, or staying at a hotel in Dubai — you're covered.
            </p>
          </div>
        </div>
      </section>

      {/* Explore Tip Calculators by Category */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Choose the Right Calculator for Your Service Type</h2>
              <p className="max-w-[700px] mx-auto mt-4 text-xl text-muted-foreground">
                Find specialized calculators designed for every service situation
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            <Link
              href="/calculators#food-beverage"
              className="group relative overflow-hidden rounded-lg border bg-card p-6 text-center shadow-sm transition-all hover:shadow-md hover-lift"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4 mx-auto">
                <Utensils className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Food & Dining</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Restaurants, cafes, bars, delivery, and catering
              </p>
              <div className="mt-4 flex items-center justify-center">
                <span className="text-sm font-medium text-primary group-hover:underline flex items-center">
                  View Calculators <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
            <Link
              href="/calculators#transportation"
              className="group relative overflow-hidden rounded-lg border bg-card p-6 text-center shadow-sm transition-all hover:shadow-md hover-lift"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4 mx-auto">
                <Car className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Transport</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Taxis, rideshares, shuttles, and private drivers
              </p>
              <div className="mt-4 flex items-center justify-center">
                <span className="text-sm font-medium text-primary group-hover:underline flex items-center">
                  View Calculators <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
            <Link
              href="/calculators#hospitality"
              className="group relative overflow-hidden rounded-lg border bg-card p-6 text-center shadow-sm transition-all hover:shadow-md hover-lift"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4 mx-auto">
                <Hotel className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Hospitality</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Hotels, resorts, vacation rentals, and cruise ships
              </p>
              <div className="mt-4 flex items-center justify-center">
                <span className="text-sm font-medium text-primary group-hover:underline flex items-center">
                  View Calculators <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
            <Link
              href="/calculators#events-entertainment"
              className="group relative overflow-hidden rounded-lg border bg-card p-6 text-center shadow-sm transition-all hover:shadow-md hover-lift"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4 mx-auto">
                <PartyPopper className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Events & Parties</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Weddings, events, photographers, and entertainment
              </p>
              <div className="mt-4 flex items-center justify-center">
                <span className="text-sm font-medium text-primary group-hover:underline flex items-center">
                  View Calculators <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
            <Link
              href="/calculators#personal-services"
              className="group relative overflow-hidden rounded-lg border bg-card p-6 text-center shadow-sm transition-all hover:shadow-md hover-lift"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4 mx-auto">
                <Scissors className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Personal Services</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Salons, spas, barbers, and personal care
              </p>
              <div className="mt-4 flex items-center justify-center">
                <span className="text-sm font-medium text-primary group-hover:underline flex items-center">
                  View Calculators <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
            <Link
              href="/calculators#professional-services"
              className="group relative overflow-hidden rounded-lg border bg-card p-6 text-center shadow-sm transition-all hover:shadow-md hover-lift"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4 mx-auto">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Professional Services</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Freelancers, contractors, and virtual assistants
              </p>
              <div className="mt-4 flex items-center justify-center">
                <span className="text-sm font-medium text-primary group-hover:underline flex items-center">
                  View Calculators <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </div>
          <div className="flex justify-center mt-12">
            <Button asChild size="lg">
              <Link href="/calculators" className="flex items-center gap-2 font-semibold">
                Explore All 50+ Calculators <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Popular Calculators Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2">
                <Badge variant="secondary" className="px-3 py-1">
                  <BarChart className="mr-1 h-3 w-3" />
                  Trending
                </Badge>
              </div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Popular Calculators</h2>
              <p className="max-w-[900px] text-xl text-muted-foreground">
                Our most-used calculators for quick and accurate tipping
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <CalculatorCard
              title="Restaurant"
              description="Dining out tip calculator"
              excerpt="Calculate tips for restaurants based on service quality and party size."
              slug="restaurant-tip-calculator"
              icon={Utensils}
              isTrending
            />
            <CalculatorCard
              title="Taxi & Rideshare"
              description="Uber, Lyft, and taxi tips"
              excerpt="Calculate appropriate tips for taxi drivers and rideshare services."
              slug="taxi-tip-calculator"
              icon={Car}
            />
            <CalculatorCard
              title="Hotel Staff"
              description="Bellhop, concierge, housekeeping"
              excerpt="Calculate tips for various hotel staff based on service type and duration."
              slug="hotel-staff-tip-calculator"
              icon={Hotel}
            />
          </div>
          <div className="flex justify-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/calculators">
                View All Calculators <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Travel Spotlight Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Travel Spotlight</h2>
              <p className="max-w-[900px] text-xl text-muted-foreground">
                Location-specific calculators for popular destinations
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/calculators/restaurant-tip-calculator/new-york"
              className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="New York City"
                  width={400}
                  height={300}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <Badge variant="location" className="mb-2">
                  United States
                </Badge>
                <h3 className="text-xl font-semibold">Tipping in New York</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Learn about New York's 20% standard tip and local customs
                </p>
                <div className="mt-4 flex items-center text-sm font-medium text-primary">
                  View Calculator <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </div>
            </Link>
            <Link
              href="/calculators/restaurant-tip-calculator/london"
              className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="London"
                  width={400}
                  height={300}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <Badge variant="location" className="mb-2">
                  United Kingdom
                </Badge>
                <h3 className="text-xl font-semibold">Tipping in London</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Navigate service charges and tipping expectations in the UK
                </p>
                <div className="mt-4 flex items-center text-sm font-medium text-primary">
                  View Calculator <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </div>
            </Link>
            <Link
              href="/calculators/restaurant-tip-calculator/tokyo"
              className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Tokyo"
                  width={400}
                  height={300}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <Badge variant="location" className="mb-2">
                  Japan
                </Badge>
                <h3 className="text-xl font-semibold">Tipping in Tokyo</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Understand Japan's no-tipping culture and service expectations
                </p>
                <div className="mt-4 flex items-center text-sm font-medium text-primary">
                  View Calculator <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </div>
            </Link>
          </div>
          <div className="flex justify-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/global-tipping-etiquette">
                Explore Global Tipping Guides <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Global Tipping Cultures Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge variant="secondary" className="px-3 py-1">
                <Globe className="mr-1 h-3 w-3" />
                Global Insights
              </Badge>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Compare Tipping Cultures</h2>
              <p className="max-w-[900px] text-xl text-muted-foreground">
                Understand how tipping varies across regions and continents
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2">
            <Link
              href="/us-vs-europe-vs-asia-tipping-culture"
              className="group relative overflow-hidden rounded-xl border bg-background shadow-sm transition-all hover:shadow-md hover-lift"
            >
              <div className="flex">
                <div className="hidden md:block md:w-2/5">
                  <div className="relative h-full">
                    <Image
                      src="/placeholder.svg?height=400&width=300"
                      alt="Global Tipping Comparison"
                      width={300}
                      height={400}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background opacity-50"></div>
                  </div>
                </div>
                <div className="p-6 md:p-8 w-full md:w-3/5">
                  <div className="flex items-center mb-4">
                    <Globe className="h-5 w-5 text-primary mr-2" />
                    <Badge variant="outline" className="px-3 py-1 font-medium">Featured Guide</Badge>
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">US vs. Europe vs. Asia: Tipping Culture Compared</h3>
                  <p className="text-muted-foreground mb-4">
                    Explore the stark differences in tipping expectations across three major regions. From America's generous 20% standard to Asia's no-tipping policies.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">United States</Badge>
                    <Badge variant="secondary">Europe</Badge>
                    <Badge variant="secondary">Asia</Badge>
                    <Badge variant="secondary">Dining</Badge>
                    <Badge variant="secondary">Hotels</Badge>
                  </div>
                  <div className="flex items-center text-sm font-medium text-primary">
                    Read Comparison Guide <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
            <div className="grid grid-cols-1 gap-6">
              <Link
                href="/global-tipping-etiquette"
                className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md hover-lift"
              >
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary">Global Tipping Etiquette Guide</h3>
                <p className="text-muted-foreground mb-3">
                  Region-by-region tipping expectations, customs, and cultural nuances.
                </p>
                <div className="flex items-center text-sm font-medium text-primary">
                  View Complete Guide <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
              <Link
                href="/digital-tipping-qr-code-guide"
                className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md hover-lift"
              >
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary">Digital Tipping & QR Codes</h3>
                <p className="text-muted-foreground mb-3">
                  How modern technology is changing tipping practices globally.
                </p>
                <div className="flex items-center text-sm font-medium text-primary">
                  Explore Digital Tipping <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
              <Link
                href="/how-to-calculate-a-tip"
                className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md hover-lift"
              >
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary">How to Calculate a Tip</h3>
                <p className="text-muted-foreground mb-3">
                  Step-by-step guide for calculating tips in any situation.
                </p>
                <div className="flex items-center text-sm font-medium text-primary">
                  View Tutorial <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Highlights Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Latest from Our Blog</h2>
              <p className="max-w-[900px] text-xl text-muted-foreground">
                Insights and guides on tipping etiquette around the world
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <BlogCard
              title="Why Do Americans Tip So Much?"
              description="Explore the cultural and historical reasons behind America's generous tipping culture."
              slug="why-americans-tip-more"
              date="April 15, 2023"
              category="Cultural Insights"
              image="/placeholder.svg?height=340&width=600"
              author={{
                name: "Sarah Johnson",
                avatar: "/placeholder.svg?height=32&width=32",
              }}
            />
            <BlogCard
              title="Top 5 Tipping Mistakes (And How to Avoid Them)"
              description="Common tipping errors travelers make and how to navigate tipping etiquette confidently."
              slug="top-tipping-mistakes"
              date="March 22, 2023"
              category="Travel Tips"
              image="/placeholder.svg?height=340&width=600"
              author={{
                name: "Michael Chen",
                avatar: "/placeholder.svg?height=32&width=32",
              }}
            />
            <BlogCard
              title="The History of Tipping in Restaurants"
              description="From 17th century coffeehouses to modern dining - the fascinating evolution of tipping."
              slug="history-of-tipping"
              date="February 8, 2023"
              category="History"
              image="/placeholder.svg?height=340&width=600"
              author={{
                name: "Alex Rivera",
                avatar: "/placeholder.svg?height=32&width=32",
              }}
            />
          </div>
          <div className="flex justify-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/blog">
                Read More Articles <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Tip Calculator Tool */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">About Tip Calculator Tool: Built for Travellers, Diners, and Service Seekers</h2>
            <div className="mt-6 space-y-4 text-base md:text-lg text-muted-foreground">
              <p>
                Tip Calculator Tool is a specialist platform dedicated to making tipping effortless and accurate. 
                Our calculators are informed by real-world data, cultural etiquette research, and global travel 
                standards — ensuring your tips are fair, respectful, and expected.
              </p>
              <p>
                We stand for accuracy, transparency, and user empowerment.
              </p>
              <div className="flex justify-center mt-6">
                <Button variant="outline" asChild>
                  <Link href="/about-us">
                    Learn More About Our Mission
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Footer Section */}
      <section className="w-full py-20 border-t border-border/40 bg-gradient-to-b from-background to-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Ready to Tip Smart and Fair?</h2>
            <p className="text-xl text-muted-foreground max-w-[600px]">
              Use Tip Calculator Tool to make confident, accurate tipping decisions — anywhere, anytime.
            </p>
            <div className="mt-8">
              <Button size="lg" asChild className="text-lg px-8 py-6 font-semibold">
                <Link href="/calculators">
                  BROWSE ALL TIP CALCULATORS <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 border-t border-border/40">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-center mb-12">
              Frequently Asked Questions About Tip Calculators
            </h2>
            
            <FAQAccordion items={faqItems} />
            
            <SchemaOrg
              schema={{
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": faqItems.map((item, index) => ({
                  "@type": "Question",
                  "name": item.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": item.answer
                  },
                  "position": index + 1
                }))
              }}
            />
          </div>
        </div>
      </section>
    </>
  )
}


