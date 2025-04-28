import { calculators } from "@/lib/calculators"
import { locations } from "@/lib/data"

// Define which calculator slugs should have location-specific variants
const localizableCalculators = [
  "restaurant-tip-calculator",
  "cafe-tip-calculator",
  "hotel-staff-tip-calculator",
  "uber-lyft-tip-calculator",
  "taxi-tip-calculator",
  "spa-service-tip-calculator",
  "hair-salon-tip-calculator",
  "bar-bartender-tip-calculator",
  "food-delivery-tip-calculator",
  "bellhop-tip-calculator",
  "concierge-service-tip-calculator",
  "housekeeping-tip-calculator"
]

// Generate all valid combinations of calculator slugs and locations
export const locationCalculatorPaths = localizableCalculators.flatMap(calculatorSlug => 
  locations.map(location => ({
    slug: calculatorSlug,
    location: location.slug
  }))
)

// Function to check if a calculator has location variants
export function hasLocationVariants(slug: string) {
  return localizableCalculators.includes(slug)
}

// Function to get all locations for a specific calculator
export function getLocationsForCalculator(slug: string) {
  if (!hasLocationVariants(slug)) {
    return []
  }
  return locations
} 