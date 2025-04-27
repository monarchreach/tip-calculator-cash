import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { calculatorCategories } from "./data"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getCalculatorBySlug(slug: string) {
  for (const category of calculatorCategories) {
    const calculator = category.calculators.find((calc) => calc.slug === slug)
    if (calculator) {
      return calculator
    }
  }
  return null
}

export function generateStaticPaths() {
  // Generate paths for all calculators
  const calculatorPaths = calculatorCategories.flatMap((category) =>
    category.calculators.map((calculator) => ({
      params: { slug: calculator.slug },
    })),
  )

  // Add paths for location-specific calculators
  // This would be expanded based on your actual location data
  const locationPaths = [
    { params: { slug: "restaurant-tip-calculator", location: "new-york" } },
    { params: { slug: "restaurant-tip-calculator", location: "london" } },
    { params: { slug: "uber-lyft-tip-calculator", location: "dubai" } },
    { params: { slug: "hotel-staff-tip-calculator", location: "las-vegas" } },
    { params: { slug: "spa-service-tip-calculator", location: "bali" } },
  ]

  return {
    calculatorPaths,
    locationPaths,
  }
}

export function formatSEOTitle(title: string) {
  return `${title} - Free Online Tip Calculator | Tip Calculator Hub`
}

export function formatSEODescription(description: string) {
  return `${description}. Calculate tips easily with our free online calculator. Get accurate tip amounts based on bill total and service quality.`
}
