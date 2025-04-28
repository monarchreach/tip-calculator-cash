import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/atoms/badge"
import { CalculatorCard } from "@/components/organisms/calculator-card"
import { SchemaOrg } from "@/components/schema-org"
import { calculatorCategories } from "@/lib/data"
import { Search, MapPin, Utensils, Car, Hotel, Scissors } from "lucide-react"

export const metadata: Metadata = {
  title: "Tip Calculators Directory - Find the Perfect Calculator for Any Service",
  description:
    "Browse our complete collection of tip calculators for restaurants, hotels, transportation, personal services, and more.",
}

export default function CalculatorsPage() {
  return (
    <>
      <SchemaOrg
        schema={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Tip Calculators Directory",
          description:
            "Browse our complete collection of tip calculators for restaurants, hotels, transportation, personal services, and more.",
          url: "https://tipcalculator.cash/calculators",
          mainEntity: {
            "@type": "ItemList",
            itemListElement: calculatorCategories.map((category, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: category.title,
              description: category.description,
              url: `https://tipcalculator.cash/calculators#${category.id}`,
            })),
          },
        }}
      />

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                All Tip Calculators In One Place
              </h1>
              <p className="max-w-[900px] text-xl text-muted-foreground">
                Find the perfect calculator for any service or location
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="w-full py-8 border-b">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-[1fr_300px]">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search calculators (e.g., 'restaurant', 'hotel')"
                className="pl-10"
                type="search"
                aria-label="Search calculators"
              />
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" className="flex-1">
                <MapPin className="mr-2 h-4 w-4" /> Filter by Location
              </Button>
              <Button variant="outline">
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
                  className="h-4 w-4"
                >
                  <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
                </svg>
                <span className="sr-only">Filter</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="w-full py-8">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="all" className="w-full">
            <div className="overflow-auto">
              <TabsList className="w-full justify-start">
                <TabsTrigger value="all">All Categories</TabsTrigger>
                <TabsTrigger value="food-beverage">
                  <Utensils className="mr-2 h-4 w-4" />
                  Food & Drink
                </TabsTrigger>
                <TabsTrigger value="transportation">
                  <Car className="mr-2 h-4 w-4" />
                  Transport
                </TabsTrigger>
                <TabsTrigger value="hospitality">
                  <Hotel className="mr-2 h-4 w-4" />
                  Hospitality
                </TabsTrigger>
                <TabsTrigger value="personal-services">
                  <Scissors className="mr-2 h-4 w-4" />
                  Personal Services
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-6">
              {/* Featured New Calculators */}
              <div className="mb-12">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-semibold tracking-tight">Featured New Calculators</h2>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <CalculatorCard
                    title="Digital Tipping"
                    description="QR code and app-based tipping"
                    excerpt="Calculate appropriate tips for digital and contactless payment systems."
                    slug="digital-tipping-calculator"
                    isNew
                  />
                  <CalculatorCard
                    title="Group Dining"
                    description="Split bills and calculate tips"
                    excerpt="Easily split the bill and calculate tips for large groups and parties."
                    slug="group-dining-calculator"
                    isNew
                  />
                </div>
              </div>

              {/* All Categories */}
              {calculatorCategories.map((category) => (
                <div key={category.id} id={category.id} className="mt-16 scroll-mt-24">
                  <h2 className="text-2xl font-bold tracking-tight mb-6">{category.title}</h2>
                  <p className="max-w-[900px] text-muted-foreground mb-8">{category.description}</p>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {category.calculators.map((calculator) => (
                      <CalculatorCard
                        key={calculator.slug}
                        title={calculator.title.replace(" Tip Calculator", "")}
                        description={calculator.description}
                        excerpt={calculator.excerpt}
                        slug={calculator.slug}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </TabsContent>

            {calculatorCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-6">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight mb-6">{category.title}</h2>
                  <p className="max-w-[900px] text-muted-foreground mb-8">{category.description}</p>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {category.calculators.map((calculator) => (
                      <CalculatorCard
                        key={calculator.slug}
                        title={calculator.title.replace(" Tip Calculator", "")}
                        description={calculator.description}
                        excerpt={calculator.excerpt}
                        slug={calculator.slug}
                      />
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Popular Locations */}
      <section className="w-full py-12 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Popular Locations</h2>
              <p className="max-w-[900px] text-xl text-muted-foreground">
                Find location-specific tipping advice for popular destinations
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 py-12 md:grid-cols-3 lg:grid-cols-5">
            <Link
              href="/calculators/restaurant-tip-calculator/new-york"
              className="flex flex-col items-center justify-center rounded-lg border bg-background p-4 shadow-sm transition-colors hover:bg-muted/50"
            >
              <Badge variant="location" className="mb-2">
                USA
              </Badge>
              <span className="text-sm font-medium">New York</span>
            </Link>
            <Link
              href="/calculators/restaurant-tip-calculator/london"
              className="flex flex-col items-center justify-center rounded-lg border bg-background p-4 shadow-sm transition-colors hover:bg-muted/50"
            >
              <Badge variant="location" className="mb-2">
                UK
              </Badge>
              <span className="text-sm font-medium">London</span>
            </Link>
            <Link
              href="/calculators/restaurant-tip-calculator/paris"
              className="flex flex-col items-center justify-center rounded-lg border bg-background p-4 shadow-sm transition-colors hover:bg-muted/50"
            >
              <Badge variant="location" className="mb-2">
                France
              </Badge>
              <span className="text-sm font-medium">Paris</span>
            </Link>
            <Link
              href="/calculators/restaurant-tip-calculator/tokyo"
              className="flex flex-col items-center justify-center rounded-lg border bg-background p-4 shadow-sm transition-colors hover:bg-muted/50"
            >
              <Badge variant="location" className="mb-2">
                Japan
              </Badge>
              <span className="text-sm font-medium">Tokyo</span>
            </Link>
            <Link
              href="/calculators/restaurant-tip-calculator/dubai"
              className="flex flex-col items-center justify-center rounded-lg border bg-background p-4 shadow-sm transition-colors hover:bg-muted/50"
            >
              <Badge variant="location" className="mb-2">
                UAE
              </Badge>
              <span className="text-sm font-medium">Dubai</span>
            </Link>
            <Link
              href="/calculators/restaurant-tip-calculator/sydney"
              className="flex flex-col items-center justify-center rounded-lg border bg-background p-4 shadow-sm transition-colors hover:bg-muted/50"
            >
              <Badge variant="location" className="mb-2">
                Australia
              </Badge>
              <span className="text-sm font-medium">Sydney</span>
            </Link>
            <Link
              href="/calculators/restaurant-tip-calculator/rome"
              className="flex flex-col items-center justify-center rounded-lg border bg-background p-4 shadow-sm transition-colors hover:bg-muted/50"
            >
              <Badge variant="location" className="mb-2">
                Italy
              </Badge>
              <span className="text-sm font-medium">Rome</span>
            </Link>
            <Link
              href="/calculators/restaurant-tip-calculator/barcelona"
              className="flex flex-col items-center justify-center rounded-lg border bg-background p-4 shadow-sm transition-colors hover:bg-muted/50"
            >
              <Badge variant="location" className="mb-2">
                Spain
              </Badge>
              <span className="text-sm font-medium">Barcelona</span>
            </Link>
            <Link
              href="/calculators/restaurant-tip-calculator/berlin"
              className="flex flex-col items-center justify-center rounded-lg border bg-background p-4 shadow-sm transition-colors hover:bg-muted/50"
            >
              <Badge variant="location" className="mb-2">
                Germany
              </Badge>
              <span className="text-sm font-medium">Berlin</span>
            </Link>
            <Link
              href="/calculators/restaurant-tip-calculator/hong-kong"
              className="flex flex-col items-center justify-center rounded-lg border bg-background p-4 shadow-sm transition-colors hover:bg-muted/50"
            >
              <Badge variant="location" className="mb-2">
                China
              </Badge>
              <span className="text-sm font-medium">Hong Kong</span>
            </Link>
          </div>
          <div className="flex justify-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/global-tipping-etiquette">View Global Tipping Guide</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
