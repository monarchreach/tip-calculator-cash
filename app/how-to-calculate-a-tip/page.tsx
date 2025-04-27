import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FAQAccordion } from "@/components/organisms/faq-accordion"
import { SchemaOrg } from "@/components/schema-org"
import { ArrowRight, Calculator, Percent, Users, DollarSign } from "lucide-react"

export const metadata: Metadata = {
  title: "How to Calculate a Tip - Step-by-Step Guide",
  description:
    "Learn different methods for calculating tips accurately. Step-by-step instructions for calculating tips at restaurants, hotels, and other services.",
}

export default function HowToCalculateTipPage() {
  return (
    <>
      <SchemaOrg
        schema={{
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "How to Calculate a Tip",
          description:
            "Learn different methods for calculating tips accurately. Step-by-step instructions for calculating tips at restaurants, hotels, and other services.",
          step: [
            {
              "@type": "HowToStep",
              name: "Determine the bill amount",
              text: "Start with the total bill amount before tax if possible.",
            },
            {
              "@type": "HowToStep",
              name: "Choose a tip percentage",
              text: "Select an appropriate percentage based on service quality and local customs.",
            },
            {
              "@type": "HowToStep",
              name: "Calculate the tip amount",
              text: "Multiply the bill amount by the tip percentage (converted to a decimal).",
            },
            {
              "@type": "HowToStep",
              name: "Calculate the total amount",
              text: "Add the tip amount to the original bill to get the total amount.",
            },
          ],
        }}
      />

      <div className="container px-4 py-12 md:px-6 md:py-24">
        <div className="mx-auto max-w-4xl">
          {/* Hero Section */}
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              How to Calculate a Tip
            </h1>
            <p className="mb-8 text-xl text-muted-foreground">
              Step-by-step methods for calculating tips accurately in any situation
            </p>
          </div>

          {/* Table of Contents */}
          <div className="mb-12 rounded-lg border bg-card p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold">Table of Contents</h2>
            <nav>
              <ul className="space-y-2">
                <li>
                  <a href="#basic-method" className="text-primary hover:underline">
                    Basic Method for Calculating Tips
                  </a>
                </li>
                <li>
                  <a href="#percentage-method" className="text-primary hover:underline">
                    Percentage Method
                  </a>
                </li>
                <li>
                  <a href="#mental-math" className="text-primary hover:underline">
                    Mental Math Shortcuts
                  </a>
                </li>
                <li>
                  <a href="#splitting-tips" className="text-primary hover:underline">
                    Splitting Tips in a Group
                  </a>
                </li>
                <li>
                  <a href="#pre-tax-vs-post-tax" className="text-primary hover:underline">
                    Pre-Tax vs. Post-Tax Tipping
                  </a>
                </li>
                <li>
                  <a href="#service-charges" className="text-primary hover:underline">
                    Handling Service Charges
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-primary hover:underline">
                    Frequently Asked Questions
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Introduction */}
          <div className="prose max-w-none dark:prose-invert">
            <p className="lead">
              Calculating the right tip can sometimes feel like a math test at the end of a meal or service. But it
              doesn't have to be complicated. This guide will walk you through simple methods to calculate tips
              accurately and confidently in any situation.
            </p>

            <p>
              Whether you're dining at a restaurant, staying at a hotel, or using various services while traveling,
              knowing how to calculate an appropriate tip is an essential skill. We'll cover several methods, from basic
              calculations to quick mental math tricks.
            </p>

            {/* Basic Method */}
            <h2 id="basic-method" className="scroll-mt-24">
              Basic Method for Calculating Tips
            </h2>

            <p>The most straightforward way to calculate a tip follows these simple steps:</p>

            <div className="my-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">Step 1: Determine the Bill Amount</h3>
                <p className="text-muted-foreground">
                  Start with the total bill amount before tax if possible. This is the cost of the services or goods
                  you've received.
                </p>
              </div>

              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Percent className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">Step 2: Choose a Tip Percentage</h3>
                <p className="text-muted-foreground">
                  Select an appropriate percentage based on service quality and local customs (typically 15-20% in the
                  US).
                </p>
              </div>

              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Calculator className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">Step 3: Calculate the Tip Amount</h3>
                <p className="text-muted-foreground">
                  Multiply the bill amount by the tip percentage (converted to a decimal). For example, for a 15% tip,
                  multiply by 0.15.
                </p>
              </div>

              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
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
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M12 2v20" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-semibold">Step 4: Calculate the Total Amount</h3>
                <p className="text-muted-foreground">
                  Add the tip amount to the original bill to get the total amount you'll pay.
                </p>
              </div>
            </div>

            <div className="my-8 rounded-lg bg-primary/5 p-6">
              <h3 className="mb-4 text-lg font-semibold">Example Calculation</h3>
              <p>
                <strong>Bill amount:</strong> $50.00
                <br />
                <strong>Tip percentage:</strong> 18%
                <br />
                <strong>Tip calculation:</strong> $50.00 × 0.18 = $9.00
                <br />
                <strong>Total amount:</strong> $50.00 + $9.00 = $59.00
              </p>
            </div>

            <div className="my-8 flex justify-center">
              <Button asChild>
                <Link href="/calculators/restaurant-tip-calculator">
                  Use Our Tip Calculator <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Percentage Method */}
            <h2 id="percentage-method" className="scroll-mt-24">
              Percentage Method
            </h2>

            <p>
              Understanding how to calculate percentages is key to determining tips. Here's a breakdown of common tip
              percentages and what they mean:
            </p>

            <div className="my-8 overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="border px-4 py-2 text-left">Percentage</th>
                    <th className="border px-4 py-2 text-left">Service Quality</th>
                    <th className="border px-4 py-2 text-left">On a $50 Bill</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">15%</td>
                    <td className="border px-4 py-2">Standard/Average Service</td>
                    <td className="border px-4 py-2">$7.50</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">18%</td>
                    <td className="border px-4 py-2">Good Service</td>
                    <td className="border px-4 py-2">$9.00</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">20%</td>
                    <td className="border px-4 py-2">Great Service</td>
                    <td className="border px-4 py-2">$10.00</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">25%</td>
                    <td className="border px-4 py-2">Exceptional Service</td>
                    <td className="border px-4 py-2">$12.50</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>To calculate these percentages, you can use these formulas:</p>

            <ul>
              <li>15% = Bill amount × 0.15</li>
              <li>18% = Bill amount × 0.18</li>
              <li>20% = Bill amount × 0.20</li>
              <li>25% = Bill amount × 0.25</li>
            </ul>

            {/* Mental Math Shortcuts */}
            <h2 id="mental-math" className="scroll-mt-24">
              Mental Math Shortcuts
            </h2>

            <p>If you want to calculate tips without a calculator, here are some helpful shortcuts:</p>

            <div className="my-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="mb-2 text-lg font-semibold">10% Shortcut</h3>
                <p className="text-muted-foreground">
                  To find 10%, simply move the decimal point one place to the left. For example, 10% of $50.00 is $5.00.
                </p>
              </div>

              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="mb-2 text-lg font-semibold">20% Shortcut</h3>
                <p className="text-muted-foreground">
                  Calculate 10% and then double it. For example, 20% of $50.00 is $5.00 × 2 = $10.00.
                </p>
              </div>

              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="mb-2 text-lg font-semibold">15% Shortcut</h3>
                <p className="text-muted-foreground">
                  Calculate 10%, then add half of that amount. For example, 15% of $50.00 is $5.00 + $2.50 = $7.50.
                </p>
              </div>

              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="mb-2 text-lg font-semibold">18% Shortcut</h3>
                <p className="text-muted-foreground">
                  Calculate 20% and subtract 10% of that amount. For example, 18% of $50.00 is $10.00 - $1.00 = $9.00.
                </p>
              </div>
            </div>

            <div className="my-8 rounded-lg bg-primary/5 p-6">
              <h3 className="mb-4 text-lg font-semibold">Tax Doubling Method (US Only)</h3>
              <p>
                In many US states, the sales tax is around 8-10%. A quick way to estimate a 16-20% tip is to simply
                double the tax amount shown on your bill. This isn't precise but works as a quick approximation.
              </p>
            </div>

            {/* Splitting Tips */}
            <h2 id="splitting-tips" className="scroll-mt-24">
              Splitting Tips in a Group
            </h2>

            <p>When dining or sharing services with a group, you'll need to split the tip. Here are two approaches:</p>

            <div className="my-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">Method 1: Calculate Total Tip First</h3>
                <ol className="ml-5 list-decimal space-y-2 text-muted-foreground">
                  <li>Calculate the tip on the entire bill</li>
                  <li>Divide the total tip by the number of people</li>
                  <li>Each person adds their share of the tip to their portion of the bill</li>
                </ol>
              </div>

              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">Method 2: Individual Calculations</h3>
                <ol className="ml-5 list-decimal space-y-2 text-muted-foreground">
                  <li>Each person calculates their portion of the bill</li>
                  <li>Each person calculates the tip on their portion</li>
                  <li>Each person pays their portion plus their calculated tip</li>
                </ol>
              </div>
            </div>

            <div className="my-8 rounded-lg bg-primary/5 p-6">
              <h3 className="mb-4 text-lg font-semibold">Example: Splitting a Bill Among 4 People</h3>
              <p>
                <strong>Total bill:</strong> $100.00
                <br />
                <strong>Tip percentage:</strong> 20%
                <br />
                <strong>Total tip:</strong> $100.00 × 0.20 = $20.00
                <br />
                <strong>Tip per person:</strong> $20.00 ÷ 4 = $5.00
                <br />
                <strong>Bill per person:</strong> $100.00 ÷ 4 = $25.00
                <br />
                <strong>Total per person:</strong> $25.00 + $5.00 = $30.00
              </p>
            </div>

            <div className="my-8 flex justify-center">
              <Button asChild>
                <Link href="/calculators/group-dining-calculator">
                  Try Our Group Tip Calculator <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Pre-Tax vs. Post-Tax */}
            <h2 id="pre-tax-vs-post-tax" className="scroll-mt-24">
              Pre-Tax vs. Post-Tax Tipping
            </h2>

            <p>There's often debate about whether to calculate tips based on the pre-tax or post-tax amount:</p>

            <div className="my-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="mb-2 text-lg font-semibold">Pre-Tax Tipping</h3>
                <p className="text-muted-foreground">
                  Technically, the traditional etiquette is to tip on the pre-tax amount, as the tax is a fee going to
                  the government, not for the service provided.
                </p>
              </div>

              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="mb-2 text-lg font-semibold">Post-Tax Tipping</h3>
                <p className="text-muted-foreground">
                  Many people find it simpler to calculate the tip based on the total bill amount including tax, which
                  results in a slightly higher tip.
                </p>
              </div>
            </div>

            <p>
              Both approaches are acceptable. Pre-tax tipping is more traditional, while post-tax tipping is simpler and
              more generous.
            </p>

            {/* Service Charges */}
            <h2 id="service-charges" className="scroll-mt-24">
              Handling Service Charges
            </h2>

            <p>Sometimes, restaurants and services automatically add a service charge or gratuity to your bill:</p>

            <div className="my-8 rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="mb-2 text-lg font-semibold">When a Service Charge is Included</h3>
              <p className="text-muted-foreground">
                If your bill includes a service charge (often 15-20%), this is generally considered to be the tip. You
                don't need to leave an additional tip unless:
              </p>
              <ul className="ml-5 list-disc space-y-2 text-muted-foreground">
                <li>The service was exceptional and you want to add a bit extra</li>
                <li>The service charge is less than the standard tipping rate in that location</li>
                <li>
                  You're in a country where service charges don't go to the staff (in which case, ask the staff
                  directly)
                </li>
              </ul>
            </div>

            <p>
              Always check your bill carefully to see if a service charge or gratuity has already been added, especially
              for large groups where it's often automatic.
            </p>

            {/* FAQ Section */}
            <h2 id="faq" className="scroll-mt-24 mb-6">
              Frequently Asked Questions
            </h2>

            <FAQAccordion
              items={[
                {
                  question: "Should I tip on the tax?",
                  answer:
                    "Traditionally, tips are calculated on the pre-tax amount, but many people find it simpler to tip on the total bill. Either approach is acceptable, though tipping on the pre-tax amount is technically the standard etiquette.",
                },
                {
                  question: "What if the service was terrible?",
                  answer:
                    "For poor service, it's still customary to leave some tip (10% or less in the US), as servers often rely on tips for their income. For truly problematic service, it's better to speak with a manager rather than leaving no tip at all.",
                },
                {
                  question: "Do I need to tip if there's a service charge?",
                  answer:
                    "If a service charge is included (often labeled as 'gratuity' or 'service charge'), you generally don't need to leave an additional tip. However, if the service was exceptional, you can add a small additional amount.",
                },
                {
                  question: "How much should I tip for delivery?",
                  answer:
                    "For food delivery, 10-15% of the bill or a minimum of $2-5 (whichever is higher) is standard. Consider tipping more for large orders, bad weather, or difficult delivery locations.",
                },
                {
                  question: "Should I tip differently in other countries?",
                  answer:
                    "Yes, tipping customs vary significantly by country. In some countries like Japan, tipping is not customary and may even be considered rude. In others, like the US, it's expected. Always research local tipping customs before traveling.",
                },
              ]}
              className="mb-12"
            />

            <div className="my-8 flex justify-center">
              <Button asChild size="lg">
                <Link href="/calculators">
                  Explore All Our Tip Calculators <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
