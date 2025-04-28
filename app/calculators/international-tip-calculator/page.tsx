import { Metadata } from "next"
import { createMetadata } from "@/lib/metadata"
import { InternationalTipCalculator } from "@/components/calculators/InternationalTipCalculator"
import { getCalculatorBySlug } from "@/lib/calculators"
import { getBreadcrumbsForCalculator } from "@/lib/breadcrumbs"

export const metadata: Metadata = createMetadata({
  title: "International Tip Calculator",
  description: "Calculate tips based on local customs and expectations in different countries. Find the appropriate tip amount for restaurants, hotels, taxis, and tours worldwide.",
  path: "/calculators/international-tip-calculator",
})

export default function InternationalTipCalculatorPage() {
  const calculator = getCalculatorBySlug("international-tip-calculator") || {
    title: "International Tip Calculator",
    description: "Calculate tips based on country",
    slug: "international-tip-calculator",
    category: "Travel",
  }
  
  const breadcrumbs = getBreadcrumbsForCalculator(calculator)
  
  // Format currency based on selected country
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount)
  }

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            International Tip Calculator
          </h1>
          <p className="mt-4 text-muted-foreground">
            Calculate appropriate tips based on local customs and expectations in different countries.
            Select your destination and service type to get the recommended tip amount.
          </p>
        </div>

        <InternationalTipCalculator formatCurrency={formatCurrency} />
      </div>
    </div>
  )
} 