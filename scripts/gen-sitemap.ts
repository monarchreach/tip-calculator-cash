/**
 * Sitemap and Robots.txt Generator Script
 *
 * This script generates sitemap.xml and robots.txt files for the Tip Calculator Tool website.
 * It includes all calculator pages, location-specific pages, and informational content with
 * proper priorities and change frequencies.
 *
 * Usage:
 * - Run with: npx tsx scripts/gen-sitemap.ts
 * - Output: public/sitemap.xml and public/robots.txt
 */

import fs from "fs"
import path from "path"
import { calculatorCategories, locations } from "../lib/data"

const DOMAIN = "https://tipcalculator.cash"

// Types for sitemap
interface SitemapEntry {
  url: string
  lastmod: string
  changefreq: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never"
  priority: number
}

async function generateSitemap() {
  console.log("Generating sitemap.xml...")
  const today = new Date().toISOString().split("T")[0]
  const entries: SitemapEntry[] = []

  // Core pages with high priority
  const corePages = [
    { url: "/", priority: 1.0, changefreq: "weekly" as const },
    { url: "/calculators/", priority: 0.9, changefreq: "weekly" as const },
    { url: "/how-to-calculate-a-tip/", priority: 0.8, changefreq: "monthly" as const },
    { url: "/global-tipping-etiquette/", priority: 0.8, changefreq: "monthly" as const },
  ]

  // Add core pages to entries
  corePages.forEach((page) => {
    entries.push({
      url: page.url,
      lastmod: today,
      changefreq: page.changefreq,
      priority: page.priority,
    })
  })

  // Informational pages with medium priority
  const infoPages = [
    "/us-vs-europe-vs-asia-tipping-culture/",
    "/currency-exchange-and-tipping/",
    "/mandatory-service-charges-vs-tips/",
    "/digital-tipping-qr-code-guide/",
    "/future-of-tipping-digital/",
    "/psychology-of-tipping-behavior/",
    "/common-tipping-mistakes/",
    "/cash-vs-digital-tipping/",
    "/developer/api-access/",
    "/developer/embed-tip-calculator/",
    "/developer/localization-guide/",
    "/about-us/",
    "/contact-us/",
    "/privacy-policy/",
    "/terms-of-service/",
    "/faq/",
  ]

  // Add informational pages to entries
  infoPages.forEach((url) => {
    entries.push({
      url,
      lastmod: today,
      changefreq: "monthly",
      priority: 0.7,
    })
  })

  // Blog pages with medium-low priority
  const blogPages = [
    "/blog/",
    "/blog/why-americans-tip-more/",
    "/blog/top-tipping-mistakes/",
    "/blog/history-of-tipping/",
    "/blog/tipping-culture-shocks/",
  ]

  // Add blog pages to entries
  blogPages.forEach((url) => {
    entries.push({
      url,
      lastmod: today,
      changefreq: "monthly",
      priority: 0.6,
    })
  })

  // Calculator pages with higher priority (users actively looking for these)
  calculatorCategories.forEach((category) => {
    category.calculators.forEach((calculator) => {
      const calculatorUrl = `/calculators/${calculator.slug}/`
      entries.push({
        url: calculatorUrl,
        lastmod: today,
        changefreq: "weekly",
        priority: 0.8,
      })
    })
  })

  // Location-specific calculator pages (highest search volume pages)
  locations.forEach((location) => {
    // Only add high-value location pages for the most popular calculators to avoid thin content
    const popularCalculators = [
      "restaurant-tip-calculator",
      "hotel-staff-tip-calculator",
      "taxi-tip-calculator",
      "spa-service-tip-calculator",
      "uber-lyft-tip-calculator",
    ]

    popularCalculators.forEach((calculatorSlug) => {
      const locationUrl = `/calculators/${calculatorSlug}/${location.slug}/`
      entries.push({
        url: locationUrl,
        lastmod: today,
        changefreq: "weekly",
        priority: 0.8,
      })
    })
  })

  // Generate XML with proper formatting
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (entry) => `  <url>
    <loc>${DOMAIN}${entry.url}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority.toFixed(1)}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`

  // Write to file
  const outputPath = path.join(process.cwd(), "public", "sitemap.xml")
  fs.writeFileSync(outputPath, sitemap)

  console.log(`Sitemap generated at: ${outputPath}`)
  return entries.length // Return count for reporting
}

// Generate robots.txt with improved SEO directives
async function generateRobotsTxt() {
  console.log("Generating robots.txt...")

  const robotsTxt = `# robots.txt for Tip Calculator Tool
# https://tipcalculator.cash

User-agent: *
Allow: /

# Prevent crawling of admin or development pages
Disallow: /admin/
Disallow: /dev/
Disallow: /draft/

# Optimize crawl budget by excluding unnecessary resources
Disallow: /*.json$
Disallow: /*.js.map$
Disallow: /*.css.map$

# Sitemaps
Sitemap: ${DOMAIN}/sitemap.xml

# Crawl delay recommendation (in seconds)
# Helps prevent server overload during peak times
Crawl-delay: 1`

  const outputPath = path.join(process.cwd(), "public", "robots.txt")
  fs.writeFileSync(outputPath, robotsTxt)

  console.log(`robots.txt generated at: ${outputPath}`)
}

// Make public directory if it doesn't exist
function ensurePublicDirectory() {
  const publicDir = path.join(process.cwd(), "public")
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true })
    console.log("Created public directory")
  }
}

// Run both generators
async function main() {
  try {
    ensurePublicDirectory()
    const urlCount = await generateSitemap()
    await generateRobotsTxt()
    console.log(`All files generated successfully! Sitemap contains ${urlCount} URLs.`)
  } catch (error) {
    console.error("Error generating files:", error)
    process.exit(1)
  }
}

// Execute if run directly
if (require.main === module) {
  main().catch(console.error)
}

// Export for programmatic use
export { generateSitemap, generateRobotsTxt }
