import { Metadata } from "next"
import { calculatorMetadata } from "@/lib/metadata"
import { CalculatorPageTemplate } from "@/components/templates/calculator-page-template"
import { Seo } from "@/components/seo"
import { SchemaOrg } from "@/components/schema-org"
import { getBreadcrumbsForCalculator } from "@/lib/navigation"
import { getCalculatorBySlug } from "@/lib/data"

export const metadata: Metadata = calculatorMetadata["digital-tipping-calculator"] || {
  title: "Digital Tipping Calculator | QR Codes & Payment Apps",
  description: "Generate digital tip payment links, QR codes, and text messages for popular payment apps like Venmo, Cash App, PayPal, and Zelle.",
}

export default function DigitalTippingCalculatorPage() {
  const calculator = getCalculatorBySlug("digital-tipping-calculator") || {
    title: "Digital Tipping Calculator",
    description: "Generate digital payment links, QR codes, and messages for tipping using mobile payment apps",
    slug: "digital-tipping-calculator",
    category: "Technology",
  }
  
  const breadcrumbs = getBreadcrumbsForCalculator(calculator)
  
  // FAQ items for schema
  const faqItems = [
    {
      question: "How do I send a digital tip via payment apps?",
      answer: "To send a digital tip via payment apps, you'll need the recipient's username. Enter the bill amount and desired tip percentage in our calculator, then choose your preferred payment app (Venmo, Cash App, PayPal, or Zelle). The calculator will generate a payment link, QR code, or message template that you can share with the recipient."
    },
    {
      question: "What are the advantages of digital tipping?",
      answer: "Digital tipping offers several advantages: it's contactless and hygienic, convenient when you don't have cash, provides a digital record of your payment, allows for precise amounts, and is often faster than ATM withdrawals. Many service workers now prefer digital tips as they're immediately accessible."
    },
    {
      question: "Do payment apps charge fees for sending tips?",
      answer: "Fee structures vary by payment app. Venmo and Cash App generally don't charge fees for sending money from a linked bank account or debit card, but may charge for credit card transactions (typically 3%). PayPal doesn't charge for sending money to friends and family from a bank account, but fees apply for credit/debit cards or international transfers. Zelle typically has no fees."
    },
    {
      question: "Is it safe to tip through digital payment apps?",
      answer: "Digital payment apps are generally secure when used properly. Always verify the recipient's username before sending money, use the app's built-in security features like two-factor authentication, avoid public Wi-Fi for transactions, keep your app updated, and only use reputable payment services. Never share your password or PIN with anyone."
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
      "ratingValue": "4.7",
      "ratingCount": "185"
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