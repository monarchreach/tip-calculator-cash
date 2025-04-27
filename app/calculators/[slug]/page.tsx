import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { CalculatorPageTemplate } from "@/components/templates/calculator-page-template"
import { calculatorCategories } from "@/lib/data"
import { getCalculatorBySlug } from "@/lib/utils"

interface CalculatorPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: CalculatorPageProps): Promise<Metadata> {
  const calculator = getCalculatorBySlug(params.slug)

  if (!calculator) {
    return {
      title: "Calculator Not Found",
    }
  }

  return {
    title: `${calculator.title} - Free Online Tip Calculator`,
    description: `${calculator.excerpt} Calculate tips easily with our free online calculator.`,
  }
}

export function generateStaticParams() {
  const calculators = calculatorCategories.flatMap((category) => category.calculators)
  return calculators.map((calculator) => ({
    slug: calculator.slug,
  }))
}

export default function CalculatorPage({ params }: CalculatorPageProps) {
  const calculator = getCalculatorBySlug(params.slug)

  if (!calculator) {
    notFound()
  }

  // Find the category this calculator belongs to
  const category = calculatorCategories.find((category) =>
    category.calculators.some((calc) => calc.slug === params.slug),
  )

  // FAQ items for this calculator
  const faqItems = [
    {
      question: `Is the ${calculator.title.toLowerCase()} calculated before or after tax?`,
      answer: `In most cases, tips are calculated based on the pre-tax amount, though many people simply tip on the total bill for convenience. Our calculator allows you to choose which method you prefer.`,
    },
    {
      question: `What is a good tip percentage for ${calculator.title.replace("Tip Calculator", "").toLowerCase()}?`,
      answer: `For ${calculator.title.replace("Tip Calculator", "").toLowerCase()} in the United States, 15-20% is standard for good service. For exceptional service, 20-25% is appropriate. In other countries, tipping customs may vary significantly.`,
    },
    {
      question: "Should I tip if service was poor?",
      answer: `For subpar service, it's common to tip a lower percentage (10-15%) rather than not tipping at all, especially in countries where service workers rely heavily on tips. Consider speaking with a manager if service was truly problematic.`,
    },
    {
      question: "Do I need to tip if a service charge is included?",
      answer: `If a service charge is already included on your bill, an additional tip is generally not expected, though you can add a small amount for exceptional service. Check your bill carefully to see if gratuity has already been added.`,
    },
    {
      question: `How much should I tip for ${calculator.title.replace("Tip Calculator", "").toLowerCase()} in a group?`,
      answer: `For large groups, many establishments automatically add a gratuity of 18-20%. If not, the standard tipping rate still applies. Our calculator can help you split the bill and calculate the appropriate tip for each person.`,
    },
  ]

  return (
    <CalculatorPageTemplate
      title={calculator.title}
      description={calculator.excerpt}
      slug={params.slug}
      category={category ? { title: category.title, id: category.id } : undefined}
      faqItems={faqItems}
      schema={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: calculator.title,
        description: calculator.excerpt,
        url: `https://tipcalculatorhub.com/calculators/${params.slug}`,
        mainEntity: {
          "@type": "SoftwareApplication",
          name: calculator.title,
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
              name: category?.title || "Calculator",
              item: `https://tipcalculatorhub.com/calculators#${category?.id || ""}`,
            },
            {
              "@type": "ListItem",
              position: 4,
              name: calculator.title,
              item: `https://tipcalculatorhub.com/calculators/${params.slug}`,
            },
          ],
        },
      }}
    >
      {/* Related Calculators */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-6">Related Calculators</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {category?.calculators
            .filter((calc) => calc.slug !== params.slug)
            .slice(0, 3)
            .map((relatedCalc) => (
              <div
                key={relatedCalc.slug}
                className="rounded-lg border bg-card p-4 shadow-sm transition-all hover:shadow-md"
              >
                <h3 className="font-medium">{relatedCalc.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{relatedCalc.excerpt}</p>
                <a
                  href={`/calculators/${relatedCalc.slug}`}
                  className="mt-3 inline-flex items-center text-sm font-medium text-primary"
                >
                  Open Calculator
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
                    className="ml-1 h-4 w-4"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              </div>
            ))}
        </div>
      </div>
    </CalculatorPageTemplate>
  )
}
