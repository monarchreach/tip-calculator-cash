import type React from "react"
import Link from "next/link"
import { CalculatorForm } from "@/components/organisms/calculator-form"
import { FAQAccordion } from "@/components/organisms/faq-accordion"
import { SchemaOrg } from "@/components/schema-org"
import { Badge } from "@/components/atoms/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface CalculatorPageTemplateProps {
  title: string
  description: string
  slug: string
  location?: {
    name: string
    slug: string
    tippingNotes: string
    defaultTipPercentage: number
    customaryTipRange: { min: number; max: number }
    currency: string
  }
  category?: {
    title: string
    id: string
  }
  faqItems: Array<{
    question: string
    answer: React.ReactNode
  }>
  schema: Record<string, any>
  children?: React.ReactNode
}

export function CalculatorPageTemplate({
  title,
  description,
  slug,
  location,
  category,
  faqItems,
  schema,
  children,
}: CalculatorPageTemplateProps) {
  return (
    <>
      <SchemaOrg schema={schema} />

      <div className="container px-4 py-12 md:px-6 md:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink as={Link} href="/">
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink as={Link} href="/calculators">
                    Calculators
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {category && (
                  <>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbLink as={Link} href={`/calculators#${category.id}`}>
                        {category.title}
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                  </>
                )}
                <BreadcrumbSeparator />
                {location ? (
                  <>
                    <BreadcrumbItem>
                      <BreadcrumbLink as={Link} href={`/calculators/${slug}`}>
                        {title}
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbLink aria-current="page">{location.name}</BreadcrumbLink>
                    </BreadcrumbItem>
                  </>
                ) : (
                  <BreadcrumbItem>
                    <BreadcrumbLink aria-current="page">{title}</BreadcrumbLink>
                  </BreadcrumbItem>
                )}
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="mb-8">
            <h1 className="mb-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              {location ? `${location.name} ${title}` : title}
            </h1>

            <p className="mb-4 text-xl text-muted-foreground">{description}</p>

            {location && (
              <div className="mb-8 rounded-lg bg-primary/5 p-4 dark:bg-primary/10">
                <h2 className="mb-2 text-lg font-semibold">Tipping in {location.name}</h2>
                <p className="text-muted-foreground">{location.tippingNotes}</p>
                <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium">Standard Tip:</span> {location.defaultTipPercentage}%
                  </div>
                  <div>
                    <span className="font-medium">Typical Range:</span> {location.customaryTipRange.min}-
                    {location.customaryTipRange.max}%
                  </div>
                  <div>
                    <span className="font-medium">Currency:</span> {location.currency}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="grid gap-8 md:grid-cols-[1fr_300px] lg:grid-cols-[1fr_350px]">
            <div>
              <CalculatorForm
                type={slug}
                locations={
                  location
                    ? undefined
                    : [
                        { value: "new-york", label: "New York", country: "United States" },
                        { value: "london", label: "London", country: "United Kingdom" },
                        { value: "dubai", label: "Dubai", country: "UAE" },
                        { value: "las-vegas", label: "Las Vegas", country: "United States" },
                        { value: "bali", label: "Bali", country: "Indonesia" },
                      ]
                }
              />
            </div>

            <div className="space-y-6">
              <div className="rounded-lg border bg-card p-4 shadow-sm">
                <h3 className="mb-3 text-lg font-semibold">Quick Tips</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-0.5 shrink-0">
                      Tip
                    </Badge>
                    <span>Double the tax for a quick ~16-18% tip estimate (in the US)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-0.5 shrink-0">
                      Tip
                    </Badge>
                    <span>Round up for exceptional service</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-0.5 shrink-0">
                      Tip
                    </Badge>
                    <span>Check if gratuity is already included</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-0.5 shrink-0">
                      Tip
                    </Badge>
                    <span>Tip on the pre-tax amount to save money</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border bg-card p-4 shadow-sm">
                <h3 className="mb-3 text-lg font-semibold">Standard Percentages</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Exceptional Service:</span>
                    <span className="font-medium">20-25%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Good Service:</span>
                    <span className="font-medium">18-20%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Average Service:</span>
                    <span className="font-medium">15-18%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Poor Service:</span>
                    <span className="font-medium">10-15%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 space-y-8">
            <Tabs defaultValue="about">
              <TabsList className="w-full justify-start">
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="faq">FAQ</TabsTrigger>
                {location && <TabsTrigger value="local">Local Guide</TabsTrigger>}
              </TabsList>

              <TabsContent value="about" className="mt-6 space-y-4">
                <h2 className="text-2xl font-semibold">About {title}</h2>
                <div className="prose max-w-none dark:prose-invert">
                  <p>
                    Our {title.toLowerCase()} helps you determine the appropriate amount to tip based on industry
                    standards, service quality, and local customs. Whether you're dining out, getting a haircut, or
                    taking a taxi, knowing how much to tip can make your experience smoother and ensure service
                    providers are fairly compensated.
                  </p>

                  <h3>How to Use This Calculator</h3>
                  <ol>
                    <li>Enter your bill amount</li>
                    <li>Select a tip percentage based on service quality</li>
                    <li>Adjust for any special circumstances</li>
                    <li>View the calculated tip amount and total bill</li>
                  </ol>

                  <h3>Tipping Etiquette</h3>
                  <p>
                    Tipping practices vary by location and service type. For
                    {title.replace("Tip Calculator", "").toLowerCase()} services, the standard tip ranges from 15-20% in
                    the United States, while other countries may have different customs. Always consider the quality of
                    service, local customs, and your personal satisfaction when deciding how much to tip.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="faq" className="mt-6">
                <h2 className="mb-6 text-2xl font-semibold">Frequently Asked Questions</h2>
                <FAQAccordion items={faqItems} />
              </TabsContent>

              {location && (
                <TabsContent value="local" className="mt-6 space-y-4">
                  <h2 className="text-2xl font-semibold">Tipping Guide for {location.name}</h2>
                  <div className="prose max-w-none dark:prose-invert">
                    <p>
                      When visiting {location.name}, understanding local tipping customs can help you navigate social
                      expectations and ensure service providers are compensated appropriately. This guide provides
                      specific information about tipping practices for{" "}
                      {title.replace("Tip Calculator", "").toLowerCase()} in {location.name}.
                    </p>

                    <h3>Local Tipping Customs</h3>
                    <p>
                      In {location.name}, the standard tip for {title.replace("Tip Calculator", "").toLowerCase()}{" "}
                      services is typically {location.defaultTipPercentage}%, with a range of{" "}
                      {location.customaryTipRange.min}-{location.customaryTipRange.max}% depending on service quality.{" "}
                      {location.tippingNotes}
                    </p>

                    <h3>When to Tip More or Less</h3>
                    <p>
                      Consider tipping at the higher end of the range ({location.customaryTipRange.max}%) for
                      exceptional service, during holidays, for complex requests, or when service providers go above and
                      beyond. Tipping at the lower end ({location.customaryTipRange.min}%) may be appropriate for basic
                      service or when service doesn't fully meet expectations.
                    </p>

                    <h3>Currency Considerations</h3>
                    <p>
                      Tips in {location.name} are typically given in {location.currency}. If you're a visitor, it's
                      generally appreciated to tip in local currency rather than foreign currency. Many establishments
                      now accept card payments for tips, but it's always good to have some cash on hand for tipping
                      situations.
                    </p>
                  </div>
                </TabsContent>
              )}
            </Tabs>
          </div>

          {children}
        </div>
      </div>
    </>
  )
}
