import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CalculatorCard } from "@/components/organisms/calculator-card"
import { BlogCard } from "@/components/organisms/blog-card"
import { SchemaOrg } from "@/components/schema-org"
import { Badge } from "@/components/atoms/badge"
import { ArrowRight, Globe, Utensils, Car, Hotel, Scissors, Sparkles, Clock, CheckCircle, BarChart } from "lucide-react"

export default function Home() {
  return (
    <>
      <SchemaOrg
        schema={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Tip Calculator Hub",
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
            <div className="space-y-4">
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                Find the Perfect Tip Calculator for Any Situation
              </h1>
              <p className="max-w-[600px] text-xl text-muted-foreground">
                Calculate tips quickly and accurately for restaurants, hotels, taxis, and more. Get location-specific
                recommendations based on local customs.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="/calculators">
                    Browse Calculators <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/global-tipping-etiquette">Tipping Guides</Link>
                </Button>
              </div>
            </div>
            <div className="mx-auto w-full max-w-[500px] lg:max-w-none">
              <div className="aspect-video overflow-hidden rounded-xl bg-muted">
                <div className="p-6 flex items-center justify-center h-full">
                  <div className="w-full max-w-sm p-6 bg-card rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-4">Quick Tip Calculator</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium">Bill Amount</label>
                        <div className="mt-1 relative">
                          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-muted-foreground">
                            $
                          </span>
                          <input type="number" className="w-full pl-8 pr-4 py-2 border rounded-md" placeholder="0.00" />
                        </div>
                      </div>
                      <div>
                        <label className="text-sm font-medium">Tip Percentage</label>
                        <div className="mt-1 grid grid-cols-3 gap-2">
                          <button className="py-2 border rounded-md bg-muted hover:bg-muted/80">15%</button>
                          <button className="py-2 border rounded-md bg-primary text-primary-foreground">18%</button>
                          <button className="py-2 border rounded-md bg-muted hover:bg-muted/80">20%</button>
                        </div>
                      </div>
                      <div className="pt-4 border-t">
                        <div className="flex justify-between">
                          <span>Tip Amount:</span>
                          <span className="font-semibold">$9.00</span>
                        </div>
                        <div className="flex justify-between mt-2">
                          <span>Total:</span>
                          <span className="font-semibold">$59.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Use Our Calculators Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 border-t border-border/40">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Why Use Our Calculators?</h2>
              <p className="max-w-[900px] text-xl text-muted-foreground">
                Trusted by travelers and locals alike for fast, accurate tip calculations
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Fast</h3>
              <p className="text-sm text-muted-foreground">Calculate tips in seconds with our intuitive interface</p>
            </div>
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Accurate</h3>
              <p className="text-sm text-muted-foreground">Get precise calculations based on industry standards</p>
            </div>
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Global</h3>
              <p className="text-sm text-muted-foreground">Location-specific recommendations for over 50 countries</p>
            </div>
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Always Updated</h3>
              <p className="text-sm text-muted-foreground">Current tipping customs and practices for every region</p>
            </div>
          </div>
        </div>
      </section>

      {/* Explore by Category Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Explore by Category</h2>
              <p className="max-w-[900px] text-xl text-muted-foreground">
                Find the perfect calculator for any service or situation
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/calculators#food-beverage"
              className="group relative overflow-hidden rounded-lg border bg-background p-6 text-center shadow-sm transition-all hover:shadow-md"
            >
              <Utensils className="mx-auto mb-4 h-10 w-10 text-primary" />
              <h3 className="text-xl font-semibold">Food & Drink</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Restaurants, cafes, bars, food delivery, and catering services
              </p>
              <div className="mt-4 flex items-center justify-center">
                <span className="text-sm font-medium text-primary group-hover:underline">View Calculators</span>
              </div>
            </Link>
            <Link
              href="/calculators#transportation"
              className="group relative overflow-hidden rounded-lg border bg-background p-6 text-center shadow-sm transition-all hover:shadow-md"
            >
              <Car className="mx-auto mb-4 h-10 w-10 text-primary" />
              <h3 className="text-xl font-semibold">Transport</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Taxis, rideshares, airport shuttles, and private drivers
              </p>
              <div className="mt-4 flex items-center justify-center">
                <span className="text-sm font-medium text-primary group-hover:underline">View Calculators</span>
              </div>
            </Link>
            <Link
              href="/calculators#hospitality"
              className="group relative overflow-hidden rounded-lg border bg-background p-6 text-center shadow-sm transition-all hover:shadow-md"
            >
              <Hotel className="mx-auto mb-4 h-10 w-10 text-primary" />
              <h3 className="text-xl font-semibold">Hospitality</h3>
              <p className="mt-2 text-sm text-muted-foreground">Hotels, resorts, vacation rentals, and cruise ships</p>
              <div className="mt-4 flex items-center justify-center">
                <span className="text-sm font-medium text-primary group-hover:underline">View Calculators</span>
              </div>
            </Link>
            <Link
              href="/calculators#personal-services"
              className="group relative overflow-hidden rounded-lg border bg-background p-6 text-center shadow-sm transition-all hover:shadow-md"
            >
              <Scissors className="mx-auto mb-4 h-10 w-10 text-primary" />
              <h3 className="text-xl font-semibold">Personal Services</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Salons, spas, barbers, and other personal care providers
              </p>
              <div className="mt-4 flex items-center justify-center">
                <span className="text-sm font-medium text-primary group-hover:underline">View Calculators</span>
              </div>
            </Link>
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

      {/* About Us Mini Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 border-t bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">About Tip Calculator Hub</h2>
              <p className="text-muted-foreground">
                Tip Calculator Hub was created by a team of travelers and hospitality professionals who experienced
                firsthand the confusion around tipping in different countries and situations.
              </p>
              <p className="text-muted-foreground">
                Our mission is to provide accurate, easy-to-use calculators and comprehensive guides that make tipping
                decisions simple and stress-free, whether you're at home or traveling abroad.
              </p>
              <Button variant="outline" asChild>
                <Link href="/about-us">Learn More About Us</Link>
              </Button>
            </div>
            <div className="mx-auto w-full max-w-[500px] lg:max-w-none">
              <div className="aspect-video overflow-hidden rounded-xl bg-muted">
                <Image
                  src="/placeholder.svg?height=340&width=600"
                  alt="About Tip Calculator Hub"
                  width={600}
                  height={340}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Start Calculating Your Perfect Tip Today
              </h2>
              <p className="max-w-[900px] text-xl text-primary-foreground/80">
                Fast, accurate, and tailored to your specific situation
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/calculators">
                  Browse All Calculators <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
