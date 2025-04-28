import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Suspense } from "react"
import { CalculatorPageTemplate } from "@/components/templates/calculator-page-template"
import { calculatorCategories } from "@/lib/data"
import { getCalculatorBySlug } from "@/lib/utils"
import { Seo } from "@/components/seo"
import { calculatorMetadata } from "@/lib/metadata"
import { getBreadcrumbs, generateMetadata as getPageMetadata } from "@/lib/metadata-helper"
import { generateCompleteSchema } from "@/lib/schema"
import { calculators } from "@/lib/calculators"

// Define types for calculator objects
interface Calculator {
  slug: string;
  title: string;
  excerpt: string;
  description?: string;
  [key: string]: any;
}

interface Category {
  id: string;
  title: string;
  calculators: Calculator[];
  [key: string]: any;
}

interface CalculatorPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: CalculatorPageProps): Promise<Metadata> {
  return getPageMetadata({
    path: `/calculators/[slug]`,
    dynamicParams: { slug: params.slug }
  })
}

export async function generateStaticParams() {
  // Use the centralized calculators list to avoid missing params errors
  return calculators.map(calculator => ({
    slug: calculator.slug
  }))
}

// Create a new CalculatorPageContent component to encapsulate any client side logic
// that might need useSearchParams() in the future
function CalculatorPageContent({ 
  calculator, 
  category, 
  params,
  breadcrumbs,
  schema,
  faqData 
}: {
  calculator: Calculator;
  category: Category | undefined;
  params: { slug: string };
  breadcrumbs: any;
  schema: any;
  faqData: { questions: any[] };
}) {
  return (
    <CalculatorPageTemplate
      title={calculator.title}
      description={calculator.excerpt}
      slug={params.slug}
      category={category ? { title: category.title, id: category.id } : undefined}
      faqItems={faqData.questions.map(item => ({
        question: item.question,
        answer: item.answer
      }))}
      schema={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: calculator.title,
        description: calculator.excerpt,
        url: `https://tipcalculator.cash/calculators/${params.slug}`,
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
              item: "https://tipcalculator.cash",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Calculators",
              item: "https://tipcalculator.cash/calculators",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: category?.title || "Calculator",
              item: `https://tipcalculator.cash/calculators#${category?.id || ""}`,
            },
            {
              "@type": "ListItem",
              position: 4,
              name: calculator.title,
              item: `https://tipcalculator.cash/calculators/${params.slug}`,
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
            .filter((calc: Calculator) => calc.slug !== params.slug)
            .slice(0, 3)
            .map((relatedCalc: Calculator) => (
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
  );
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

  // Generate breadcrumbs for this page
  const breadcrumbs = getBreadcrumbs(`/calculators/${params.slug}`)

  // FAQ data for schema
  const faqData = {
    questions: [
      {
        question: `How does the ${calculator.title.toLowerCase()} work?`,
        answer: `The ${calculator.title.toLowerCase()} helps you determine the appropriate tip amount based on your bill total, service quality, and local customs. Simply enter your bill amount, select your desired tip percentage or service quality, and view the calculated tip and total amount.`
      },
      {
        question: `What is a typical tip for ${calculator.excerpt.toLowerCase()}?`,
        answer: `Typical tip amounts for ${calculator.excerpt.toLowerCase()} range from 15-20% for good service, though this can vary by location and specific circumstances.`
      },
      {
        question: `Can I split the bill between multiple people?`,
        answer: `Yes, our calculator allows you to split the bill and tip between any number of people, showing each person's share.`
      }
    ]
  }

  // Generate schema
  const schema = generateCompleteSchema({
    type: 'calculator',
    title: calculator.title,
    description: calculator.excerpt,
    url: `/calculators/${calculator.slug}/`,
    breadcrumbs: breadcrumbs,
    calculatorProps: {
      name: calculator.title,
      description: calculator.excerpt,
      url: `/calculators/${calculator.slug}/`,
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web",
    },
    faqProps: faqData
  })

  return (
    <>
      <Seo pageType="calculator" schema={schema} />
      
      <Suspense fallback={<div>Loading calculator...</div>}>
        <CalculatorPageContent 
          calculator={calculator} 
          category={category} 
          params={params} 
          breadcrumbs={breadcrumbs}
          schema={schema}
          faqData={faqData}
        />
      </Suspense>
    </>
  )
}
