import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Metadata } from "next"

import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { Seo } from "@/components/seo"
import { SchemaOrg } from "@/components/schema-org"
import { FAQAccordion } from "@/components/organisms/faq-accordion"

export const metadata: Metadata = {
  title: "Frequently Asked Questions About Tipping | Tip Calculator Hub",
  description: "Find answers to common questions about tipping etiquette, percentages, and customs across different services and countries.",
  alternates: {
    canonical: "https://tipcalculatorhub.com/faq",
  },
}

export default function FaqPage() {
  const generalFaqs = [
    {
      question: "What is the standard tipping percentage in the US?",
      answer: "The standard tipping percentage in the US typically ranges from 15% to 20% for restaurant service. For exceptional service, 20% to 25% is appreciated. For other services like hair styling, taxis, or food delivery, 15% to 20% is also customary."
    },
    {
      question: "Do I need to tip if there's already a service charge?",
      answer: "If a service charge is included (typically 15-20%), additional tipping is not necessary but still appreciated for outstanding service. Always check your bill to see if gratuity has been automatically added, especially for large groups."
    },
    {
      question: "Should I tip before or after tax?",
      answer: "While either is acceptable, most people calculate tips based on the pre-tax amount. However, in practice, many people simply tip on the total bill amount for convenience."
    },
    {
      question: "Is it better to tip in cash or on a card?",
      answer: "Cash tips are often preferred by service workers as they receive them immediately and may have more control over reporting them for tax purposes. However, tipping on a card is perfectly acceptable when cash isn't available."
    },
  ]

  const restaurantFaqs = [
    {
      question: "How much should I tip for takeout orders?",
      answer: "For takeout orders, tipping 5-10% or a flat $1-5 is appreciated but not strictly expected. If your order was complex or required special handling, consider tipping on the higher end."
    },
    {
      question: "Should I tip differently for breakfast, lunch, and dinner?",
      answer: "The standard tipping percentage generally remains the same regardless of meal time. What matters more is the quality of service and the type of establishment rather than the time of day."
    },
    {
      question: "How should I tip at a buffet restaurant?",
      answer: "At buffet restaurants, where service is limited, 5-10% is appropriate. If servers bring drinks, clear plates, or provide exceptional service, consider increasing to 10-15%."
    },
    {
      question: "What's the tipping etiquette for large groups?",
      answer: "Many restaurants automatically add a gratuity of 18-20% for large groups (typically 6-8 or more people). If not, a 20% tip is appropriate, considering the extra effort required to serve a large party."
    },
  ]

  const travelFaqs = [
    {
      question: "How much should I tip hotel housekeeping?",
      answer: "For hotel housekeeping, $2-5 per day is customary. Leave the tip daily (not just at the end of your stay) to ensure it goes to the person who cleaned your room that day."
    },
    {
      question: "Should I tip Uber or Lyft drivers?",
      answer: "While not required, tipping rideshare drivers 15-20% is appreciated. Most rideshare apps allow in-app tipping after your ride, or you can tip in cash if preferred."
    },
    {
      question: "What's the proper tip for airport shuttle drivers?",
      answer: "For airport shuttle drivers, $1-2 per bag if they help with luggage, plus $1-2 per person is appropriate. For a free hotel shuttle, $2-5 per person is a nice gesture."
    },
    {
      question: "How much should I tip tour guides?",
      answer: "For tour guides, 15-20% of the tour cost for a group tour is standard. For private tours, $10-20 per person per day is appropriate. For multiday tours, tipping at the end of the tour is customary."
    },
  ]

  const internationalFaqs = [
    {
      question: "Do I need to tip in Europe?",
      answer: "Tipping practices vary across Europe. In many European countries, service charges are often included in the bill, and additional tipping is less expected than in the US. In restaurants, rounding up the bill or leaving 5-10% for good service is generally sufficient."
    },
    {
      question: "Is tipping expected in Japan?",
      answer: "Tipping is not customary in Japan and may even be considered rude or confusing. The Japanese culture emphasizes that good service is provided without expectation of additional payment. Instead of tipping, showing appreciation verbally is more appropriate."
    },
    {
      question: "How does tipping work in Australia?",
      answer: "Tipping is not obligatory in Australia as service workers receive higher minimum wages. However, it's becoming more common to round up the bill or leave 10% for exceptional service, particularly in upscale restaurants in major cities."
    },
    {
      question: "What's the tipping culture in South America?",
      answer: "Tipping practices vary widely across South American countries. In Brazil, a 10% service charge is often included in bills. In Argentina, 10-15% is customary for good service. In general, 10% is appropriate throughout most of South America for restaurants and taxis."
    },
  ]

  // Prepare FAQ schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      ...generalFaqs,
      ...restaurantFaqs,
      ...travelFaqs,
      ...internationalFaqs,
    ].map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  }

  return (
    <>
      <Seo 
        schema={faqSchema}
      />
      <div className="container py-12 md:py-16">
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span>FAQ</span>
        </div>

        <div className="mx-auto max-w-3xl space-y-8 py-8">
          <div className="space-y-4 text-center">
            <Heading level="h1" className="text-3xl md:text-4xl">
              Frequently Asked Questions
            </Heading>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about tipping across different services and countries
            </p>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <Heading level="h2" className="text-2xl">
                General Tipping Questions
              </Heading>
              <FAQAccordion items={generalFaqs} />
            </div>

            <div className="space-y-4">
              <Heading level="h2" className="text-2xl">
                Restaurant Tipping
              </Heading>
              <FAQAccordion items={restaurantFaqs} />
            </div>

            <div className="space-y-4">
              <Heading level="h2" className="text-2xl">
                Travel & Hospitality
              </Heading>
              <FAQAccordion items={travelFaqs} />
            </div>

            <div className="space-y-4">
              <Heading level="h2" className="text-2xl">
                International Tipping
              </Heading>
              <FAQAccordion items={internationalFaqs} />
            </div>
          </div>

          <div className="mt-12 space-y-6 rounded-lg border bg-card p-6 text-center">
            <div className="space-y-2">
              <Heading level="h2" className="text-xl">
                Need to calculate a tip?
              </Heading>
              <p className="text-muted-foreground">
                Use our calculators to quickly determine the appropriate tip amount for any situation
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="min-w-[150px]">
                <Link href="/calculators/restaurant-tip-calculator">Restaurant Tips</Link>
              </Button>
              <Button asChild variant="outline" className="min-w-[150px]">
                <Link href="/calculators">View All Calculators</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 