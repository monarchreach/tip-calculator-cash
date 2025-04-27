import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { CalculatorPageTemplate } from "@/components/templates/calculator-page-template"
import { calculatorCategories } from "@/lib/data"
import { locations } from "@/lib/data"
import { getCalculatorBySlug } from "@/lib/utils"

interface LocationCalculatorPageProps {
  params: {
    slug: string
    location: string
  }
}

export async function generateMetadata({ params }: LocationCalculatorPageProps): Promise<Metadata> {
  const calculator = getCalculatorBySlug(params.slug)
  const location = locations.find((loc) => loc.slug === params.location)

  if (!calculator || !location) {
    return {
      title: "Calculator Not Found",
    }
  }

  return {
    title: `${location.name} ${calculator.title} - Local Tipping Guide`,
    description: `${calculator.excerpt} Calculate tips in ${location.name} based on local customs and expectations.`,
  }
}

export function generateStaticParams() {
  return [
    { slug: "restaurant-tip-calculator", location: "new-york" },
    { slug: "restaurant-tip-calculator", location: "london" },
    { slug: "uber-lyft-tip-calculator", location: "dubai" },
    { slug: "hotel-staff-tip-calculator", location: "las-vegas" },
    { slug: "spa-service-tip-calculator", location: "bali" },
  ]
}

export default function LocationCalculatorPage({ params }: LocationCalculatorPageProps) {
  const calculator = getCalculatorBySlug(params.slug)
  const location = locations.find((loc) => loc.slug === params.location)

  if (!calculator || !location) {
    notFound()
  }

  // Find the category this calculator belongs to
  const category = calculatorCategories.find((category) =>
    category.calculators.some((calc) => calc.slug === params.slug),
  )

  // FAQ items for this location-specific calculator
  const faqItems = [
    {
      question: `Is tipping mandatory in ${location.name}?`,
      answer: `While tipping is not legally required in ${location.name}, it is a strong social custom for many services, particularly in the hospitality and service industries. Service workers often rely on tips as part of their income.`,
    },
    {
      question: `What is the standard tip percentage in ${location.name}?`,
      answer: `In ${location.name}, the standard tip for ${calculator.title.replace("Tip Calculator", "").toLowerCase()} services is typically ${location.defaultTipPercentage}%, with a range of ${location.customaryTipRange.min}-${location.customaryTipRange.max}% depending on service quality.`,
    },
    {
      question: `What if I don't have the exact amount for a tip in ${location.name}?`,
      answer: `It's generally acceptable to round up to a convenient amount. In ${location.name}, many people simply round up the bill to an even number that provides an appropriate tip percentage.`,
    },
    {
      question: `Should I tip differently as a tourist in ${location.name}?`,
      answer: `As a visitor to ${location.name}, it's respectful to follow local tipping customs. While some tourist areas might have different expectations, following the standard local practices is usually appreciated.`,
    },
    {
      question: `Is it better to tip in cash or by card in ${location.name}?`,
      answer: `In ${location.name}, cash tips are often preferred as they go directly to the service provider. However, card tips are becoming increasingly common and acceptable, especially in tourist areas and upscale establishments.`,
    },
  ]

  return (
    <CalculatorPageTemplate
      title={calculator.title}
      description={calculator.excerpt}
      slug={params.slug}
      location={location}
      category={category ? { title: category.title, id: category.id } : undefined}
      faqItems={faqItems}
      schema={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: `${location.name} ${calculator.title}`,
        description: `${calculator.excerpt} Calculate tips in ${location.name} based on local customs and expectations.`,
        url: `https://tipcalculatorhub.com/calculators/${params.slug}/${params.location}/`,
        mainEntity: {
          "@type": "SoftwareApplication",
          name: `${location.name} ${calculator.title}`,
          applicationCategory: "CalculatorApplication",
          operatingSystem: "Any",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
          },
        },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://tipcalculatorhub.com",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Calculators",
              item: "https://tipcalculatorhub.com/calculators",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: calculator.title,
              item: `https://tipcalculatorhub.com/calculators/${params.slug}`,
            },
            {
              "@type": "ListItem",
              position: 4,
              name: location.name,
              item: `https://tipcalculatorhub.com/calculators/${params.slug}/${params.location}`,
            },
          ],
        },
      }}
    >
      {/* Nearby Locations */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-6">Nearby Locations</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {locations
            .filter((loc) => loc.slug !== params.location)
            .slice(0, 4)
            .map((nearbyLocation) => (
              <a
                key={nearbyLocation.slug}
                href={`/calculators/${params.slug}/${nearbyLocation.slug}`}
                className="flex flex-col items-center rounded-lg border bg-card p-4 text-center shadow-sm transition-all hover:shadow-md"
              >
                <span className="text-sm font-medium">{nearbyLocation.name}</span>
                <span className="mt-1 text-xs text-muted-foreground">{nearbyLocation.country}</span>
              </a>
            ))}
        </div>
      </div>
    </CalculatorPageTemplate>
  )
}
