import { Metadata } from "next"
import { calculatorMetadata } from "@/lib/metadata"
import { CalculatorPageTemplate } from "@/components/templates/calculator-page-template"
import { Seo } from "@/components/seo"
import { SchemaOrg } from "@/components/schema-org"
import { getBreadcrumbsForCalculator } from "@/lib/navigation"
import { getCalculatorBySlug } from "@/lib/data"

export const metadata: Metadata = calculatorMetadata["group-dining-tip-calculator"] || {
  title: "Group Dining Tip Calculator | Split Bills Easily",
  description: "Split the bill and calculate tips fairly with our Group Dining Tip Calculator. Perfect for restaurants, group meals, and sharing expenses.",
}

export default function GroupDiningCalculatorPage() {
  const calculator = getCalculatorBySlug("group-dining-tip-calculator") || {
    title: "Group Dining Tip Calculator",
    description: "Split restaurant bills and calculate tips for group dining experiences",
    slug: "group-dining-tip-calculator",
    category: "Restaurant",
  }
  
  const breadcrumbs = getBreadcrumbsForCalculator(calculator)
  
  // FAQ items for schema
  const faqItems = [
    {
      question: "How should we split a restaurant bill in a group?",
      answer: "You can split a restaurant bill either equally among all diners, or have each person pay for their own items. For equal splits, divide the total bill by the number of people. For individual payments, keep track of what each person ordered and calculate accordingly. Add the tip to each person's share."
    },
    {
      question: "What percentage should we tip for group dining?",
      answer: "For group dining in the US, a tip of 18-20% is standard, especially for groups of 6 or more. Many restaurants automatically add a gratuity of 18% for large groups, so check your bill first. For exceptional service, consider 20-22%."
    },
    {
      question: "How do I handle splitting the bill when people ordered different items?",
      answer: "When diners ordered items of varying costs, it's fairest to have each person pay for their own food and drinks, plus their share of the tip. Use our calculator to track individual orders and then calculate each person's fair share of the tip based on their portion of the bill."
    },
    {
      question: "Should tax be included before calculating the tip?",
      answer: "Typically, tips are calculated on the pre-tax amount, though many people find it simpler to tip on the total including tax. Our calculator allows you to choose whether to calculate the tip based on the pre-tax or post-tax amount."
    }
  ]
  
  // Generate schema for the calculator
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": calculator.title,
    "description": calculator.description,
    "applicationCategory": "CalculatorApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "256"
    }
  }

  return (
    <>
      <Seo schema={schema} />
      
      <CalculatorPageTemplate
        title={calculator.title}
        description={calculator.description}
        slug={calculator.slug}
        faqItems={faqItems}
        schema={schema}
        category={{
          title: calculator.category,
          id: calculator.category.toLowerCase().replace(/\s+/g, "-")
        }}
      />
    </>
  )
} 