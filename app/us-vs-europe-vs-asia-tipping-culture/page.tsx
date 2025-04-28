import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";
import { ChevronRight, DollarSign, Euro, Flag, Plane, MapPin, Info, Users, CalendarDays, Sparkles, ScrollText, ThumbsUp, Languages, Award, Calculator, Globe, QrCode, RefreshCw } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { SchemaOrg } from "@/components/schema-org";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "US vs Europe vs Asia Tipping Culture: A Comparative Guide",
  description: "Explore the differences in tipping customs across the US, Europe, and Asia. Learn how much to tip, when to tip, and cultural expectations for travelers.",
};

export default function RegionalTippingCulturePage() {
  return (
    <>
      <SchemaOrg
        schema={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "US vs Europe vs Asia Tipping Culture: A Comparative Guide",
          "description": "Explore the differences in tipping customs across the US, Europe, and Asia. Learn how much to tip, when to tip, and cultural expectations for travelers.",
          "image": "https://tipcalculatorhub.com/images/regional-tipping-guide.jpg",
          "author": {
            "@type": "Organization",
            "name": "Tip Calculator Tool",
            "url": "https://tipcalculatorhub.com"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Tip Calculator Tool",
            "logo": {
              "@type": "ImageObject",
              "url": "https://tipcalculatorhub.com/logo.png"
            }
          },
          "datePublished": "2023-06-01",
          "dateModified": "2023-12-15"
        }}
      />

      <section className="container max-w-4xl py-8 md:py-12">
        <div className="flex flex-col items-start gap-4 md:gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
                Home
              </Link>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">Tipping Culture</span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              US vs Europe vs Asia Tipping Culture
            </h1>
            <p className="text-xl text-muted-foreground">
              A comprehensive guide to navigating tipping expectations across three major regions
            </p>
          </div>
          <div className="relative w-full overflow-hidden rounded-lg border">
            <div className="aspect-video w-full bg-muted">
              <Image
                src="/images/regional-tipping-guide.jpg"
                alt="Regional tipping guide showing US, Europe and Asia"
                width={800}
                height={450}
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute bottom-4 left-4">
              <Badge className="bg-primary text-primary-foreground">
                <CalendarDays className="mr-1 h-3 w-3" />
                Updated for 2023
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <section className="container max-w-4xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <div className="prose prose-stone max-w-none">
              <h2 className="flex items-center gap-2 text-2xl font-bold">
                <Info className="h-6 w-6 text-primary" />
                Why Tipping Customs Vary Around the World
              </h2>
              <p>
                Tipping practices are deeply rooted in cultural norms, economic systems, and historical contexts. 
                Understanding these differences is essential for travelers to navigate social expectations and 
                avoid awkward situations. This guide compares tipping cultures across three major regions—the 
                United States, Europe, and Asia—helping you understand when, how much, and whether to tip at all.
              </p>

              <div className="my-8 rounded-lg border bg-muted/50 p-4">
                <h3 className="flex items-center text-lg font-medium">
                  <ScrollText className="mr-2 h-5 w-5 text-primary" />
                  Table of Contents
                </h3>
                <ul className="mt-4 space-y-2">
                  <li>
                    <a href="#us-tipping-culture" className="text-primary hover:underline">
                      US Tipping Culture: Service Included in the Price?
                    </a>
                  </li>
                  <li>
                    <a href="#european-tipping-culture" className="text-primary hover:underline">
                      European Tipping Culture: Service Charge vs. Gratuity
                    </a>
                  </li>
                  <li>
                    <a href="#asian-tipping-culture" className="text-primary hover:underline">
                      Asian Tipping Culture: From Unnecessary to Offensive
                    </a>
                  </li>
                  <li>
                    <a href="#comparison-table" className="text-primary hover:underline">
                      Side-by-Side Comparison Table
                    </a>
                  </li>
                  <li>
                    <a href="#travelers-guide" className="text-primary hover:underline">
                      Traveler's Guide to Navigating Tipping Cultures
                    </a>
                  </li>
                </ul>
              </div>

              <h2 id="us-tipping-culture" className="flex items-center gap-2 text-2xl font-bold scroll-mt-20">
                <DollarSign className="h-6 w-6 text-primary" />
                US Tipping Culture: Service Included in the Price?
              </h2>
              <p>
                In the United States, tipping is not just customary—it's practically mandatory. This stems from the 
                country's wage structure for service workers, who often earn below the standard minimum wage with 
                the expectation that tips will make up the difference.
              </p>
              <h3>Key Features of US Tipping Culture:</h3>
              <ul>
                <li>
                  <strong>Restaurants:</strong> 15-20% is standard, with 20% being increasingly expected in urban areas
                  and higher-end establishments. Anything less than 15% can be interpreted as dissatisfaction with 
                  the service.
                </li>
                <li>
                  <strong>Bars:</strong> $1-2 per drink or 15-20% of the total tab is customary.
                </li>
                <li>
                  <strong>Hotels:</strong> $2-5 per day for housekeeping, $1-2 per bag for bellhops, and $2-5 for valet.
                </li>
                <li>
                  <strong>Taxis/Rideshares:</strong> 15-20% of the fare is expected.
                </li>
                <li>
                  <strong>Hair/Nail Salons:</strong> 15-20% for the service provider.
                </li>
              </ul>
              <p>
                The US tipping culture is driven by the fact that many service workers receive a "tipped minimum wage" 
                (as low as $2.13 per hour in some states) with the expectation that tips will bring their earnings up 
                to or beyond the standard minimum wage. As a result, tips are not seen as optional bonuses but as essential 
                parts of a service worker's income.
              </p>

              <h2 id="european-tipping-culture" className="flex items-center gap-2 text-2xl font-bold scroll-mt-20">
                <Euro className="h-6 w-6 text-primary" />
                European Tipping Culture: Service Charge vs. Gratuity
              </h2>
              <p>
                Europe presents a more complex tipping landscape that varies significantly by country. Unlike the US, 
                most European nations ensure service workers receive a living wage, making tipping more of a gesture 
                of appreciation than a necessity.
              </p>
              <h3>Western Europe vs. Eastern Europe:</h3>
              <ul>
                <li>
                  <strong>Western Europe (UK, France, Germany, etc.):</strong> A service charge of 10-15% is often included 
                  in the bill, particularly in restaurants. Additional tipping is appreciated but not expected, with 5-10% 
                  being common for exceptional service.
                </li>
                <li>
                  <strong>Eastern Europe:</strong> Tipping expectations are generally higher, with 10-15% being more common,
                  especially in tourist areas.
                </li>
              </ul>
              <h3>Country-Specific Notes:</h3>
              <ul>
                <li>
                  <strong>UK:</strong> A 10-15% service charge is often added to restaurant bills. If not, a tip of similar 
                  amount is appreciated.
                </li>
                <li>
                  <strong>France:</strong> "Service compris" means the service charge is included. An extra 5-10% for exceptional 
                  service is appreciated.
                </li>
                <li>
                  <strong>Italy:</strong> "Coperto" (cover charge) is common, with additional small tips (5-10%) for good service.
                </li>
                <li>
                  <strong>Spain:</strong> Tipping is not expected but rounding up or leaving 5-10% shows appreciation.
                </li>
                <li>
                  <strong>Germany:</strong> "Service" is included in the bill, but rounding up or adding 5-10% is common.
                </li>
              </ul>
              <p>
                In most European countries, service charges are often included in bills, particularly in restaurants. 
                It's always worth checking your bill to see if "service," "service compris," or similar wording appears, 
                indicating that gratuity has already been added.
              </p>

              <h2 id="asian-tipping-culture" className="flex items-center gap-2 text-2xl font-bold scroll-mt-20">
                <MapPin className="h-6 w-6 text-primary" />
                Asian Tipping Culture: From Unnecessary to Offensive
              </h2>
              <p>
                Asia represents perhaps the most diverse range of tipping practices, from countries where tipping 
                is considered inappropriate to those where it has become more common due to Western influence.
              </p>
              <h3>Regional Breakdown:</h3>
              <h4>East Asia</h4>
              <ul>
                <li>
                  <strong>Japan:</strong> Tipping is generally considered inappropriate and can even be offensive. 
                  High-quality service is expected as standard without additional payment.
                </li>
                <li>
                  <strong>China:</strong> Traditionally no tipping, though it's becoming more acceptable in high-end 
                  establishments in major cities that cater to international tourists.
                </li>
                <li>
                  <strong>South Korea:</strong> Tipping is not customary and may cause confusion, though 
                  international hotels might add a service charge.
                </li>
              </ul>
              <h4>Southeast Asia</h4>
              <ul>
                <li>
                  <strong>Thailand:</strong> A 10% service charge is often added to bills in tourist areas. Additional 
                  small tips are appreciated but not expected.
                </li>
                <li>
                  <strong>Vietnam:</strong> Tipping is not traditional but is increasingly common in tourist areas. 
                  5-10% for good service is appreciated.
                </li>
                <li>
                  <strong>Indonesia:</strong> 5-10% service charge is often added to bills. Additional tipping is not expected.
                </li>
              </ul>
              <h4>South Asia</h4>
              <ul>
                <li>
                  <strong>India:</strong> Service charges are increasingly common in urban areas. Otherwise, 5-10% for good 
                  service is appreciated.
                </li>
              </ul>
              <p>
                In many Asian countries, the concept of tipping conflicts with cultural values that emphasize humility, 
                respect, and the importance of doing one's job well as a matter of personal pride rather than for 
                additional compensation. 
              </p>
              <p>
                The tipping culture in Asia is evolving, particularly in areas with high tourism, but it remains much 
                less emphasized than in the US and even Europe. When in doubt, researching specific country customs 
                before traveling is advisable.
              </p>

              <h2 id="comparison-table" className="flex items-center gap-2 text-2xl font-bold scroll-mt-20">
                <Flag className="h-6 w-6 text-primary" />
                Side-by-Side Comparison Table
              </h2>
            </div>

            <div className="my-8 overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Service Category</TableHead>
                    <TableHead>United States</TableHead>
                    <TableHead>Europe</TableHead>
                    <TableHead>Asia</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Restaurants</TableCell>
                    <TableCell>15-20% expected</TableCell>
                    <TableCell>0-10% (often service included)</TableCell>
                    <TableCell>0-10% (varies widely by country)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Taxis</TableCell>
                    <TableCell>15-20% expected</TableCell>
                    <TableCell>5-10% or round up</TableCell>
                    <TableCell>Usually not expected</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Hotels (Housekeeping)</TableCell>
                    <TableCell>$2-5 per day</TableCell>
                    <TableCell>€1-2 per day (optional)</TableCell>
                    <TableCell>Usually not expected</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Tour Guides</TableCell>
                    <TableCell>15-20% of tour cost</TableCell>
                    <TableCell>10-15% for full-day tour</TableCell>
                    <TableCell>5-10% in tourist areas</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Bartenders</TableCell>
                    <TableCell>$1-2 per drink</TableCell>
                    <TableCell>Round up or small change</TableCell>
                    <TableCell>Not expected</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Hair/Nail Salons</TableCell>
                    <TableCell>15-20% expected</TableCell>
                    <TableCell>5-10% appreciated</TableCell>
                    <TableCell>Usually not expected</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Food Delivery</TableCell>
                    <TableCell>15-20% of order</TableCell>
                    <TableCell>€1-3 flat amount</TableCell>
                    <TableCell>Small change or nothing</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div className="prose prose-stone max-w-none">
              <h2 id="travelers-guide" className="flex items-center gap-2 text-2xl font-bold scroll-mt-20">
                <Plane className="h-6 w-6 text-primary" />
                Traveler's Guide to Navigating Tipping Cultures
              </h2>
              <p>
                Traveling between regions with different tipping expectations can be challenging. Here are some 
                practical tips to help you navigate these cultural differences:
              </p>
              <h3>Universal Etiquette Tips</h3>
              <ul>
                <li>
                  <strong>Research before you travel:</strong> Familiarize yourself with the tipping customs of your 
                  destination country.
                </li>
                <li>
                  <strong>Carry appropriate currency:</strong> Have small denominations available for tipping.
                </li>
                <li>
                  <strong>Check your bill carefully:</strong> Look for service charges before adding additional tips.
                </li>
                <li>
                  <strong>When in doubt, ask locally:</strong> Hotel concierges or local guides can provide current advice.
                </li>
                <li>
                  <strong>Respect local customs:</strong> In countries where tipping is not customary, forcing a tip may 
                  cause discomfort.
                </li>
              </ul>
              <h3>Common Cultural Faux Pas to Avoid</h3>
              <ul>
                <li>
                  <strong>In Japan:</strong> Avoid tipping directly; it can be seen as insulting.
                </li>
                <li>
                  <strong>In the US:</strong> Never leave without tipping in restaurants (unless service was truly terrible).
                </li>
                <li>
                  <strong>In Europe:</strong> Don't over-tip; it can be seen as showing off.
                </li>
                <li>
                  <strong>Across Asia:</strong> Don't assume tipping practices are the same across countries; they vary widely.
                </li>
              </ul>
              <p>
                Understanding tipping cultures is more than just knowing when to leave extra money—it's about respecting 
                local customs and acknowledging the value of service in culturally appropriate ways. By approaching 
                tipping with cultural sensitivity, you can avoid awkward situations and ensure your appreciation is 
                expressed in ways that are meaningful to the recipient.
              </p>

              <div className="my-8 rounded-lg border bg-primary/5 p-6">
                <h3 className="flex items-center text-xl font-bold">
                  <ThumbsUp className="mr-2 h-5 w-5 text-primary" />
                  Key Takeaways
                </h3>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-start">
                    <Sparkles className="mr-2 mt-1 h-4 w-4 text-primary" />
                    <span>
                      <strong>US tipping</strong> is practically mandatory, with service workers relying on tips for their income.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Sparkles className="mr-2 mt-1 h-4 w-4 text-primary" />
                    <span>
                      <strong>European tipping</strong> is more moderate, with service charges often included and additional tips being optional.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Sparkles className="mr-2 mt-1 h-4 w-4 text-primary" />
                    <span>
                      <strong>Asian tipping</strong> ranges from unnecessary to inappropriate, with significant variations by country.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Sparkles className="mr-2 mt-1 h-4 w-4 text-primary" />
                    <span>
                      Always check your bill for included service charges before adding additional tips.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Sparkles className="mr-2 mt-1 h-4 w-4 text-primary" />
                    <span>
                      Research specific country customs before traveling to navigate tipping expectations appropriately.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10 border-t pt-10">
              <h2 className="text-2xl font-bold">Related Resources</h2>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Link 
                  href="/global-tipping-etiquette" 
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "justify-start"
                  )}
                >
                  <Globe className="mr-2 h-4 w-4" />
                  Global Tipping Etiquette
                </Link>
                <Link 
                  href="/how-to-calculate-a-tip" 
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "justify-start"
                  )}
                >
                  <Calculator className="mr-2 h-4 w-4" />
                  How to Calculate a Tip
                </Link>
                <Link 
                  href="/digital-tipping-qr-code-guide" 
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "justify-start"
                  )}
                >
                  <QrCode className="mr-2 h-4 w-4" />
                  Digital Tipping Guide
                </Link>
                <Link 
                  href="/calculators/tip-calculator" 
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "justify-start"
                  )}
                >
                  <Calculator className="mr-2 h-4 w-4" />
                  Tip Calculator
                </Link>
              </div>
            </div>
          </div>

          <div className="md:col-span-1">
            <div className="rounded-lg border bg-background p-6">
              <h3 className="mb-4 font-bold">Useful Tipping Tools</h3>
              <div className="space-y-4">
                <Link
                  href="/calculators/tip-calculator"
                  className={cn(
                    buttonVariants({ variant: "default", size: "sm" }),
                    "w-full justify-start"
                  )}
                >
                  <Calculator className="mr-2 h-4 w-4" />
                  Tip Calculator
                </Link>
                <Link
                  href="/calculators/international-tip-calculator"
                  className={cn(
                    buttonVariants({ variant: "default", size: "sm" }),
                    "w-full justify-start"
                  )}
                >
                  <Globe className="mr-2 h-4 w-4" />
                  International Tip Calculator
                </Link>
                <Link
                  href="/calculators/currency-converter"
                  className={cn(
                    buttonVariants({ variant: "default", size: "sm" }),
                    "w-full justify-start"
                  )}
                >
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Currency Converter
                </Link>
              </div>
            </div>

            <div className="mt-6 rounded-lg border bg-background p-6">
              <h3 className="mb-4 font-bold">Popular Destinations</h3>
              <div className="grid grid-cols-2 gap-2">
                <Link
                  href="/calculators/us-tip-calculator"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "sm" }),
                    "justify-start"
                  )}
                >
                  <MapPin className="mr-1 h-3 w-3" />
                  USA
                </Link>
                <Link
                  href="/calculators/uk-tip-calculator"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "sm" }),
                    "justify-start"
                  )}
                >
                  <MapPin className="mr-1 h-3 w-3" />
                  UK
                </Link>
                <Link
                  href="/calculators/france-tip-calculator"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "sm" }),
                    "justify-start"
                  )}
                >
                  <MapPin className="mr-1 h-3 w-3" />
                  France
                </Link>
                <Link
                  href="/calculators/italy-tip-calculator"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "sm" }),
                    "justify-start"
                  )}
                >
                  <MapPin className="mr-1 h-3 w-3" />
                  Italy
                </Link>
                <Link
                  href="/calculators/japan-tip-calculator"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "sm" }),
                    "justify-start"
                  )}
                >
                  <MapPin className="mr-1 h-3 w-3" />
                  Japan
                </Link>
                <Link
                  href="/calculators/china-tip-calculator"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "sm" }),
                    "justify-start"
                  )}
                >
                  <MapPin className="mr-1 h-3 w-3" />
                  China
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 