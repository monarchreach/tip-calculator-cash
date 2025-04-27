/**
 * Sitemap Generator Script
 *
 * This script generates a sitemap.xml file for the Tip Calculator Hub website.
 * It includes all calculator pages, location-specific pages, and informational content.
 *
 * Usage:
 * - Run with: npx tsx scripts/gen-sitemap.ts
 * - Output: public/sitemap.xml
 */

import fs from "fs"
import path from "path"
import { calculatorCategories } from "../lib/data"

const DOMAIN = "https://tipcalculatorhub.com"

async function generateSitemap() {
  console.log("Generating sitemap.xml...")

  // Core pages
  const corePages = [
    "/",
    "/calculators/",
    "/how-to-calculate-a-tip/",
    "/global-tipping-etiquette/",
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
    "/blog/",
    "/blog/why-americans-tip-more/",
    "/blog/top-tipping-mistakes/",
    "/blog/history-of-tipping/",
    "/blog/tipping-culture-shocks/",
  ]

  // Calculator pages
  const calculatorPages = calculatorCategories.flatMap((category) =>
    category.calculators.map((calculator) => `/calculators/${calculator.slug}/`),
  )

  // Location-specific calculator pages
  const locationPages = [
    "/calculators/restaurant-tip-calculator/new-york/",
    "/calculators/restaurant-tip-calculator/london/",
    "/calculators/uber-lyft-tip-calculator/dubai/",
    "/calculators/hotel-staff-tip-calculator/las-vegas/",
    "/calculators/spa-service-tip-calculator/bali/",
  ]

  // Combine all pages
  const allPages = [...corePages, ...calculatorPages, ...locationPages]

  // Generate XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${DOMAIN}${page}</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === "/" ? "1.0" : page.includes("/calculators/") ? "0.8" : "0.6"}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`

  // Write to file
  const outputPath = path.join(process.cwd(), "public", "sitemap.xml")
  fs.writeFileSync(outputPath, sitemap)

  console.log(`Sitemap generated at: ${outputPath}`)
}

// Generate robots.txt
async function generateRobotsTxt() {
  console.log("Generating robots.txt...")

  const robotsTxt = `# robots.txt for Tip Calculator Hub
User-agent: *
Allow: /

# Sitemaps
Sitemap: ${DOMAIN}/sitemap.xml`

  const outputPath = path.join(process.cwd(), "public", "robots.txt")
  fs.writeFileSync(outputPath, robotsTxt)

  console.log(`robots.txt generated at: ${outputPath}`)
}

// Run both generators
async function main() {
  await generateSitemap()
  await generateRobotsTxt()
  console.log("All files generated successfully!")
}

main().catch(console.error)
