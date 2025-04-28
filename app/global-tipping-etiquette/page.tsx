import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/atoms/badge"
import { SchemaOrg } from "@/components/schema-org"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Globe, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Global Tipping Etiquette Guide - Tipping Customs Around the World",
  description:
    "Comprehensive guide to tipping customs and expectations in different countries. Learn appropriate tip amounts for restaurants, hotels, taxis, and more worldwide.",
}

export default function GlobalTippingEtiquettePage() {
  return (
    <>
      <SchemaOrg 
        schema={{
          "@context": "https://schema.org",
          "@type": "Guide",
          name: "Global Tipping Etiquette Guide",
          description:
            "Comprehensive guide to tipping customs and expectations in different countries. Learn appropriate tip amounts for restaurants, hotels, taxis, and more worldwide.",
          publisher: {
            "@type": "Organization",
            name: "Tip Calculator Tool",
            logo: {
              "@type": "ImageObject",
              url: "https://tipcalculator.cash/logo.png",
            },
          },
        }} 
      />

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                Global Tipping Etiquette Guide
              </h1>
              <p className="max-w-[600px] text-xl text-muted-foreground">
                Navigate tipping customs confidently anywhere in the world with our comprehensive country-by-country
                guide
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="#regions">
                    Explore Regions <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="#download-guide">Download Full Guide</Link>
                </Button>
              </div>
            </div>
            <div className="mx-auto w-full max-w-[500px] lg:max-w-none">
              <div className="aspect-video overflow-hidden rounded-xl bg-muted">
                <Image
                  src="/placeholder.svg?height=340&width=600"
                  alt="World map highlighting tipping customs"
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
            <h2 className="text-3xl font-semibold tracking-tight">Understanding Global Tipping Customs</h2>
            <p className="text-xl text-muted-foreground">
              Tipping practices vary dramatically around the world. What's considered generous in one country might be
              offensive in another. This guide will help you navigate these cultural differences with confidence.
            </p>
            <p className="text-muted-foreground">
              Tipping is more than just a financial transaction—it's a cultural practice that reflects local values,
              economic systems, and service expectations. In some countries like the United States, tipping is an
              essential part of service workers' income. In others, like Japan, tipping can be seen as insulting.
            </p>
            <p className="text-muted-foreground">
              Our comprehensive guide breaks down tipping expectations by region and country, covering restaurants,
              hotels, transportation, and personal services. Use this resource to show appreciation appropriately
              wherever your travels take you.
            </p>

            <div className="grid gap-6 md:grid-cols-3 mt-12">
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
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
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    <path d="M12 8v4" />
                    <path d="M12 16h.01" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Research Before You Go</h3>
                <p className="text-sm text-muted-foreground">
                  Always check local tipping customs before traveling to a new destination to avoid cultural
                  misunderstandings.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
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
                    className="h-6 w-6 text-primary"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M7 7h.01" />
                    <path d="M17 7h.01" />
                    <path d="M7 17h.01" />
                    <path d="M17 17h.01" />
                    <path d="M12 12h.01" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Carry Local Currency</h3>
                <p className="text-sm text-muted-foreground">
                  Even in increasingly cashless societies, having small denominations of local currency for tips is often
                  appreciated.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
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
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M8 3v3a2 2 0 0 1-2 2H3" />
                    <path d="M21 8h-3a2 2 0 0 1-2-2V3" />
                    <path d="M3 16h3a2 2 0 0 1 2 2v3" />
                    <path d="M16 21v-3a2 2 0 0 1 2-2h3" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Ask When Uncertain</h3>
                <p className="text-sm text-muted-foreground">
                  When in doubt, politely ask hotel concierges or local guides about appropriate tipping practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Tipping Guide */}
      <section id="regions" className="w-full py-12 md:py-24 lg:py-32 bg-muted/30 scroll-mt-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Tipping by Region</h2>
              <p className="max-w-[900px] text-xl text-muted-foreground">
                Explore tipping customs across different parts of the world
              </p>
            </div>
          </div>

          <Tabs defaultValue="north-america" className="w-full max-w-5xl mx-auto">
            <div className="overflow-auto">
              <TabsList className="w-full justify-start mb-8">
                <TabsTrigger value="north-america">North America</TabsTrigger>
                <TabsTrigger value="europe">Europe</TabsTrigger>
                <TabsTrigger value="asia">Asia</TabsTrigger>
                <TabsTrigger value="oceania">Australia & Oceania</TabsTrigger>
                <TabsTrigger value="middle-east">Middle East</TabsTrigger>
                <TabsTrigger value="latin-america">Latin America</TabsTrigger>
                <TabsTrigger value="africa">Africa</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="north-america" className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">North America</h3>
                  <p className="text-muted-foreground">United States, Canada, Mexico</p>
                </div>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h4 className="text-xl font-semibold mb-4">United States</h4>
                  <div className="space-y-4">
                    <div className="rounded-lg border bg-card p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">Restaurants</span>
                        <Badge>15-20%</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Tipping is expected and essential for servers who rely on tips as a significant portion of their
                        income. 15-20% is standard, with 20% for good service.
                      </p>
                    </div>
                    <div className="rounded-lg border bg-card p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">Hotels</span>
                        <Badge>$2-5 per day</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Housekeeping: $2-5 per day. Bellhop: $1-2 per bag. Concierge: $5-20 for special services.
                      </p>
                    </div>
                    <div className="rounded-lg border bg-card p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">Transportation</span>
                        <Badge>15-20%</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Taxis and rideshares: 15-20%. Airport shuttle drivers: $2-5 per person.
                      </p>
                    </div>
                    <div className="rounded-lg border bg-card p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">Personal Services</span>
                        <Badge>15-25%</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Hair stylists, massage therapists, and other personal service providers: 15-25% depending on
                        service quality.
                      </p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button asChild variant="outline" size="sm">
                      <Link href="/calculators/restaurant-tip-calculator/new-york">
                        New York Tip Calculator <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-4">Canada</h4>
                  <div className="space-y-4">
                    <div className="rounded-lg border bg-card p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">Restaurants</span>
                        <Badge>15-18%</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Similar to the US, tipping is expected. 15-18% is standard, with 20% for exceptional service.
                      </p>
                    </div>
                    <div className="rounded-lg border bg-card p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">Hotels</span>
                        <Badge>CAD $2-5 per day</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Housekeeping: CAD $2-5 per day. Bellhop: CAD $1-2 per bag.
                      </p>
                    </div>
                    <div className="rounded-lg border bg-card p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">Transportation</span>
                        <Badge>10-15%</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Taxis: 10-15%. Airport shuttle drivers: CAD $2-5 per person.
                      </p>
                    </div>
                    <div className="rounded-lg border bg-card p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">Personal Services</span>
                        <Badge>15-20%</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Hair stylists, massage therapists: 15-20% depending on service quality.
                      </p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button asChild variant="outline" size="sm">
                      <Link href="/calculators/restaurant-tip-calculator/toronto">
                        Toronto Tip Calculator <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-xl font-semibold mb-4">Mexico</h4>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg border bg-card p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Restaurants</span>
                      <Badge>10-15%</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      10-15% is standard in restaurants. Check if service charge (propina) is already included.
                    </p>
                  </div>
                  <div className="rounded-lg border bg-card p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Hotels</span>
                      <Badge>MXN 20-50 per day</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Housekeeping: MXN 20-50 per day. Bellhop: MXN 20-50 per service.
                    </p>
                  </div>
                  <div className="rounded-lg border bg-card p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Transportation</span>
                      <Badge>10%</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Taxis: Rounding up is common, 10% for longer trips. Tour guides: MXN 100-200 per day.
                    </p>
                  </div>
                  <div className="rounded-lg border bg-card p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Personal Services</span>
                      <Badge>10-15%</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Spa services and personal care: 10-15% is appreciated.
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <Button asChild variant="outline" size="sm">
                    <Link href="/calculators/restaurant-tip-calculator/mexico-city">
                      Mexico City Tip Calculator <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="europe" className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">Europe</h3>
                  <p className="text-muted-foreground">United Kingdom, France, Italy, Germany, Spain, and more</p>
                </div>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h4 className="text-xl font-semibold mb-4">United Kingdom</h4>
                  <div className="space-y-4">
                    <div className="rounded-lg border bg-card p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">Restaurants</span>
                        <Badge>10-15%</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Service charge of 12.5% is often included. If not, 10-15% is appropriate. Check your bill
                        carefully.
                      </p>
                    </div>
                    <div className="rounded-lg border bg-card p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">Hotels</span>
                        <Badge>£1-2 per bag/day</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Housekeeping: £1-2 per day. Bellhop: £1-2 per bag. Concierge: £5-10 for special services.
                      </p>
                    </div>
                    <div className="rounded-lg border bg-card p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">Transportation</span>
                        <Badge>10% or round up</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Taxis: 10% or round up to the nearest pound. Not always expected, especially in London.
                      </p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button asChild variant="outline" size="sm">
                      <Link href="/calculators/restaurant-tip-calculator/london">
                        London Tip Calculator <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-4">France</h4>
                  <div className="space-y-4">
                    <div className="rounded-lg border bg-card p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">Restaurants</span>
                        <Badge>Service Included</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Service charge (15%) is legally included in the price. Additional tipping is not expected but
                        rounding up or leaving a few euros for exceptional service is appreciated.
                      </p>
                    </div>
                    <div className="rounded-lg border bg-card p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">Hotels</span>
                        <Badge>€1-2 per day/bag</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Housekeeping: €1-2 per day. Bellhop: €1-2 per bag. Concierge: €5-10 for special assistance.
                      </p>
                    </div>
                    <div className="rounded-lg border bg-card p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">Transportation</span>
                        <Badge>Round up</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Taxis: Rounding up to the nearest euro is common but not expected.
                      </p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button asChild variant="outline" size="sm">
                      <Link href="/calculators/restaurant-tip-calculator/paris">
                        Paris Tip Calculator <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-xl font-semibold mb-4">Italy</h4>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg border bg-card p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Restaurants</span>
                      <Badge>Service Included</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Service charge (coperto) is usually included. Rounding up or leaving €1-2 per person for good
                      service is appreciated but not expected.
                    </p>
                  </div>
                  <div className="rounded-lg border bg-card p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Hotels</span>
                      <Badge>€1-2 per day/bag</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Housekeeping: €1-2 per day. Bellhop: €1-2 per bag.
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <Button asChild variant="outline" size="sm">
                    <Link href="/calculators/restaurant-tip-calculator/rome">
                      Rome Tip Calculator <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="asia" className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">Asia</h3>
                  <p className="text-muted-foreground">Japan, China, Thailand, India, and more</p>
                </div>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h4 className="text-xl font-semibold mb-4">Japan</h4>
                  <div className="space-y-4">
                    <div className="rounded-lg border bg-card p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">Restaurants</span>
                        <Badge variant="outline">No Tipping</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Tipping is not customary and can be considered rude or confusing. Service charge may be added at
                        high-end restaurants.
                      </p>
                    </div>
                    <div className="rounded-lg border bg-card p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">Hotels</span>
                        <Badge variant="outline">No Tipping</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Tipping is not expected. High-end ryokans may accept tips in envelopes, never handed directly.
                      </p>
                    </div>
                    <div className="rounded-lg border bg-card p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">Transportation</span>
                        <Badge variant="outline">No Tipping</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Taxi drivers do not expect tips and may refuse them or try to return your money.
                      </p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button asChild variant="outline" size="sm">
                      <Link href="/calculators/restaurant-tip-calculator/tokyo">
                        Tokyo Tip Calculator <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-4">Thailand</h4>
                  <div className="space-y-4">
                    <div className="rounded-lg border bg-card p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">Restaurants</span>
                        <Badge>5-10%</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Service charge of 10% is often added. If not, leaving small change or 5-10% is appreciated.
                      </p>
                    </div>
                    <div className="rounded-lg border bg-card p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">Hotels</span>
                        <Badge>20-100 THB</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Bellhop: 20-50 THB per bag. Housekeeping: 20-100 THB per day.
                      </p>
                    </div>
                    <div className="rounded-lg border bg-card p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">Transportation</span>
                        <Badge>Round up</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Taxis: Rounding up to the nearest 20 THB is common. Tour guides: 200-300 THB per day.
                      </p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button asChild variant="outline" size="sm">
                      <Link href="/calculators/restaurant-tip-calculator/bangkok">
                        Bangkok Tip Calculator <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-xl font-semibold mb-4">India</h4>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg border bg-card p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Restaurants</span>
                      <Badge>5-10%</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Service charge is often included. If not, 5-10% is appreciated for good service.
                    </p>
                  </div>
                  <div className="rounded-lg border bg-card p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Hotels</span>
                      <Badge>₹50-100 per service</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Bellhop: ₹50-100 per bag. Housekeeping: ₹100-200 per day.
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <Button asChild variant="outline" size="sm">
                    <Link href="/calculators/restaurant-tip-calculator/mumbai">
                      Mumbai Tip Calculator <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </TabsContent>

            {/* Additional tabs would be implemented similarly */}
            <TabsContent value="oceania" className="space-y-8">
              {/* Australia & Oceania content */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">Australia & Oceania</h3>
                  <p className="text-muted-foreground">Australia, New Zealand, and Pacific Islands</p>
                </div>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h4 className="text-xl font-semibold mb-4">Australia</h4>
                  <div className="space-y-4">
                    <div className="rounded-lg border bg-card p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">Restaurants</span>
                        <Badge>0-10%</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Tipping is not expected as service workers receive fair wages. For exceptional service, 10% is appreciated.
                      </p>
                    </div>
                    <div className="rounded-lg border bg-card p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">Hotels</span>
                        <Badge>Not Expected</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Tipping is not customary, but A$2-5 for exceptional service is appreciated.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="middle-east" className="space-y-8">
              {/* Middle East content */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">Middle East</h3>
                  <p className="text-muted-foreground">UAE, Saudi Arabia, Israel, and more</p>
                </div>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h4 className="text-xl font-semibold mb-4">United Arab Emirates</h4>
                  <div className="space-y-4">
                    <div className="rounded-lg border bg-card p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">Restaurants</span>
                        <Badge>10-15%</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Service charge is often included. If not, 10-15% is standard.
                      </p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button asChild variant="outline" size="sm">
                      <Link href="/calculators/restaurant-tip-calculator/dubai">
                        Dubai Tip Calculator <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="latin-america" className="space-y-8">
              {/* Latin America content */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">Latin America</h3>
                  <p className="text-muted-foreground">Brazil, Argentina, Colombia, and more</p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="africa" className="space-y-8">
              {/* Africa content */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">Africa</h3>
                  <p className="text-muted-foreground">South Africa, Egypt, Morocco, and more</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Download Guide Section */}
      <section id="download-guide" className="w-full py-12 md:py-24 lg:py-32 scroll-mt-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight">Download Our Complete Tipping Guide</h2>
              <p className="text-xl text-muted-foreground">
                Get our comprehensive PDF guide to tipping in over 50 countries
              </p>
              <p className="text-muted-foreground">
                Our downloadable guide includes detailed tipping information for restaurants, hotels, transportation, and
                personal services in countries around the world. Perfect for travelers who want to be prepared before
                their trip.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
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
                    className="mr-2 h-4 w-4 text-primary"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Country-specific tipping rates
                </li>
                <li className="flex items-center">
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
                    className="mr-2 h-4 w-4 text-primary"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Cultural context and expectations
                </li>
                <li className="flex items-center">
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
                    className="mr-2 h-4 w-4 text-primary"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Phrases for thanking service staff
                </li>
                <li className="flex items-center">
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
                    className="mr-2 h-4 w-4 text-primary"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Offline access - no internet needed
                </li>
              </ul>
            </div>
            <div className="mx-auto w-full max-w-md">
              <div className="rounded-lg border bg-card p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-4">Get Your Free Guide</h3>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      id="newsletter"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300"
                      defaultChecked
                    />
                    <label htmlFor="newsletter" className="text-sm text-muted-foreground">
                      Subscribe to our travel tipping newsletter
                    </label>
                  </div>
                  <Button className="w-full">Download Guide</Button>
                </form>
                <p className="mt-4 text-xs text-muted-foreground text-center">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Compare Tipping Cultures</h2>
              <p className="max-w-[900px] text-xl text-muted-foreground">
                See how tipping expectations differ across major regions
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border px-4 py-2 text-left">Service Type</th>
                  <th className="border px-4 py-2 text-left">North America</th>
                  <th className="border px-4 py-2 text-left">Western Europe</th>
                  <th className="border px-4 py-2 text-left">East Asia</th>
                  <th className="border px-4 py-2 text-left">Middle East</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2 font-medium">Restaurants</td>
                  <td className="border px-4 py-2">15-20%</td>
                  <td className="border px-4 py-2">0-10% (often included)</td>
                  <td className="border px-4 py-2">0-5% (often not expected)</td>
                  <td className="border px-4 py-2">10-15%</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Taxis</td>
                  <td className="border px-4 py-2">10-15%</td>
                  <td className="border px-4 py-2">Round up</td>
                  <td className="border px-4 py-2">Not expected</td>
                  <td className="border px-4 py-2">Round up</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Hotel Housekeeping</td>
                  <td className="border px-4 py-2">$2-5 per day</td>
                  <td className="border px-4 py-2">€1-2 per day</td>
                  <td className="border px-4 py-2">Not expected</td>
                  <td className="border px-4 py-2">$1-3 per day</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Tour Guides</td>
                  <td className="border px-4 py-2">15-20%</td>
                  <td className="border px-4 py-2">5-10%</td>
                  <td className="border px-4 py-2">Not expected to 10%</td>
                  <td className="border px-4 py-2">10-15%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-12 flex justify-center">
            <Button asChild>
              <Link href="/us-vs-europe-vs-asia-tipping-culture">
                Read Our Detailed Comparison <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
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
                Use our location-specific calculators to determine the perfect tip amount
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="/calculators">
                  Browse All Calculators <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/how-to-calculate-a-tip">Learn How to Calculate Tips</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
