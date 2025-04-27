/**
 * Affiliate Link Management
 *
 * This module provides utilities for managing affiliate links across the site.
 * It handles link generation, tracking, and attribution.
 */

// Define affiliate program types
type AffiliateProgram = "amazon" | "booking" | "uber" | "doordash" | "custom"

// Interface for affiliate link parameters
interface AffiliateLinkParams {
  program: AffiliateProgram
  targetUrl: string
  campaignId?: string
  subId?: string
}

// Interface for affiliate tracking data
interface AffiliateTrackingData {
  program: AffiliateProgram
  timestamp: number
  referrer: string
  path: string
}

// Generate affiliate links with proper tracking parameters
export function generateAffiliateLink({
  program,
  targetUrl,
  campaignId = "default",
  subId = "",
}: AffiliateLinkParams): string {
  // Base affiliate IDs (these would be your actual affiliate IDs in production)
  const affiliateIds = {
    amazon: "tipcalchub-20",
    booking: "tipcalchub",
    uber: "tipcalchub",
    doordash: "tipcalchub",
    custom: "tipcalchub",
  }

  // Get the affiliate ID for the specified program
  const affiliateId = affiliateIds[program]

  // Build the URL with appropriate tracking parameters based on the program
  switch (program) {
    case "amazon":
      return `${targetUrl}?tag=${affiliateId}&camp=${campaignId}${subId ? `&sub=${subId}` : ""}`

    case "booking":
      return `${targetUrl}?aid=${affiliateId}&label=${campaignId}${subId ? `&sid=${subId}` : ""}`

    case "uber":
      return `${targetUrl}?client=${affiliateId}&campaign=${campaignId}${subId ? `&sub=${subId}` : ""}`

    case "doordash":
      return `${targetUrl}?affiliate=${affiliateId}&campaign=${campaignId}${subId ? `&sub=${subId}` : ""}`

    case "custom":
      return `${targetUrl}?ref=${affiliateId}&camp=${campaignId}${subId ? `&sub=${subId}` : ""}`

    default:
      return targetUrl
  }
}

// Track affiliate link clicks (client-side)
export function trackAffiliateLinkClick(program: AffiliateProgram): void {
  if (typeof window === "undefined") return

  // Create tracking data
  const trackingData: AffiliateTrackingData = {
    program,
    timestamp: Date.now(),
    referrer: document.referrer,
    path: window.location.pathname,
  }

  // In a real implementation, you would send this data to your analytics endpoint
  console.log("Affiliate link click tracked:", trackingData)

  // Example implementation (commented out)
  /*
  fetch('/api/track-affiliate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(trackingData),
  }).catch(error => {
    console.error('Error tracking affiliate link:', error);
  });
  */
}

// Get recommended affiliate products for a specific calculator type
export function getRecommendedProducts(calculatorType: string) {
  // This would be expanded with actual product recommendations
  // For now, we'll return placeholder data
  const recommendations = {
    "restaurant-tip-calculator": [
      {
        title: "Tip Calculator App Premium",
        description: "Never worry about splitting the bill again",
        link: generateAffiliateLink({
          program: "amazon",
          targetUrl: "https://amazon.com/tip-calculator-app",
          campaignId: "restaurant",
        }),
      },
    ],
    "hotel-staff-tip-calculator": [
      {
        title: "Travel Tip Guide 2023",
        description: "The complete guide to tipping while traveling",
        link: generateAffiliateLink({
          program: "amazon",
          targetUrl: "https://amazon.com/travel-tip-guide",
          campaignId: "hotel",
        }),
      },
    ],
    // Add more calculator types as needed
  }

  // Return recommendations for the specified calculator type, or empty array if none exist
  return recommendations[calculatorType as keyof typeof recommendations] || []
}
