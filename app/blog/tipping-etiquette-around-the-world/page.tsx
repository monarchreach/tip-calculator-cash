import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Clock, User, Tag, Share2, Twitter, Facebook, Linkedin } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { SchemaOrg } from "@/components/schema-org"

export const metadata: Metadata = {
  title: "Tipping Etiquette Around the World: A Comprehensive Guide",
  description:
    "Learn about tipping customs and expectations across different countries and cultures to ensure you're prepared for your next international adventure.",
  openGraph: {
    title: "Tipping Etiquette Around the World: A Comprehensive Guide",
    description: "Learn about tipping customs and expectations across different countries and cultures to ensure you're prepared for your next international adventure.",
    type: "article",
    publishedTime: "2023-11-15T00:00:00Z",
    authors: ["Alex Morgan"],
  },
}

const blogPost = {
  slug: "tipping-etiquette-around-the-world",
  title: "Tipping Etiquette Around the World: A Comprehensive Guide",
  excerpt: "Learn about tipping customs and expectations across different countries and cultures to ensure you're prepared for your next international adventure.",
  date: "November 15, 2023",
  author: "Alex Morgan",
  image: "/images/blog/world-tipping.jpg",
  category: "Travel",
  readTime: "8 min read",
  content: `
    <p class="lead">Whether you're a seasoned traveler or planning your first international trip, understanding tipping customs is essential to navigating different cultures with confidence and respect.</p>
    
    <p>Tipping practices vary dramatically around the world — what's expected in the United States might be considered excessive or even offensive in other countries. This comprehensive guide will help you understand when, how, and how much to tip across different regions and services.</p>
    
    <h2>North America</h2>
    
    <h3>United States</h3>
    
    <p>In the U.S., tipping is not just customary but often vital to service workers' income:</p>
    
    <ul>
      <li><strong>Restaurants:</strong> 15-20% of the pre-tax bill is standard, with 20% for excellent service.</li>
      <li><strong>Bartenders:</strong> $1-2 per drink or 15-20% of the tab.</li>
      <li><strong>Hotel Staff:</strong> $2-5 per day for housekeeping (left daily), $1-2 per bag for bellhops.</li>
      <li><strong>Taxis and Rideshares:</strong> 15-20% of the fare.</li>
      <li><strong>Food Delivery:</strong> 10-15% of the order total, minimum $2-5.</li>
      <li><strong>Tour Guides:</strong> 15-20% of the tour cost for a group tour; $10-20 per person for a day tour.</li>
    </ul>
    
    <h3>Canada</h3>
    
    <p>Canadian tipping customs are similar to the United States, though sometimes slightly lower:</p>
    
    <ul>
      <li><strong>Restaurants:</strong> 15-18% of the total bill.</li>
      <li><strong>Taxis:</strong> 10-15% of the fare.</li>
      <li><strong>Hotel Staff:</strong> Similar to U.S. practices.</li>
    </ul>
    
    <h3>Mexico</h3>
    
    <p>Tipping in Mexico is common but generally at lower rates than the U.S.:</p>
    
    <ul>
      <li><strong>Restaurants:</strong> 10-15% of the bill.</li>
      <li><strong>Bars:</strong> 10-15% of the total tab.</li>
      <li><strong>Hotels:</strong> 20-50 pesos per day for housekeeping, 20-50 pesos per bag for bellhops.</li>
      <li><strong>Taxis:</strong> Typically not expected, but rounding up the fare is appreciated.</li>
    </ul>
    
    <h2>Europe</h2>
    
    <p>Tipping customs vary significantly across European countries:</p>
    
    <h3>United Kingdom</h3>
    
    <ul>
      <li><strong>Restaurants:</strong> 10-15% if service charge isn't included. Check the bill carefully; many establishments add a 12.5% service charge automatically.</li>
      <li><strong>Taxis:</strong> 10% or rounding up to the nearest pound.</li>
      <li><strong>Hotel Staff:</strong> Not always expected, but £1-2 per bag for porters and £1-2 per day for housekeeping is appreciated.</li>
    </ul>
    
    <h3>France</h3>
    
    <p>"Service compris" on your bill means the service charge is included, but additional tips for exceptional service are welcomed:</p>
    
    <ul>
      <li><strong>Restaurants:</strong> Service is typically included by law, but leaving an additional 5-10% for exceptional service is common.</li>
      <li><strong>Taxis:</strong> Rounding up to the nearest euro or 5-10%.</li>
      <li><strong>Hotel Staff:</strong> €1-2 per bag and per day for housekeeping.</li>
    </ul>
    
    <h3>Italy</h3>
    
    <ul>
      <li><strong>Restaurants:</strong> Service (coperto) is often included; if not, 10% is generous. Look for "servizio incluso" on the bill.</li>
      <li><strong>Taxis:</strong> Rounding up is sufficient.</li>
    </ul>
    
    <h3>Germany</h3>
    
    <ul>
      <li><strong>Restaurants:</strong> 5-10% is typical, usually by rounding up the bill and telling the server the total amount when paying.</li>
      <li><strong>Taxis:</strong> Round up to the nearest euro or add 5-10%.</li>
    </ul>
    
    <h3>Spain</h3>
    
    <ul>
      <li><strong>Restaurants:</strong> 5-10% for good service, though locals often leave less or just small change.</li>
      <li><strong>Taxis:</strong> Rounding up is common.</li>
    </ul>
    
    <h2>Asia</h2>
    
    <p>Tipping traditions in Asia vary significantly, with some countries where tipping is uncommon or even considered offensive:</p>
    
    <h3>Japan</h3>
    
    <p>Tipping is not customary and can sometimes be considered rude. Japanese service culture is built on the concept of hospitality (omotenashi) without the expectation of tips:</p>
    
    <ul>
      <li><strong>Restaurants:</strong> No tipping. A service charge may be added at high-end establishments.</li>
      <li><strong>Taxis:</strong> No tipping. Drivers will return change to the last yen.</li>
      <li><strong>Hotels:</strong> No tipping for standard service. For exceptional personal service, present a small gift instead of cash.</li>
    </ul>
    
    <h3>China</h3>
    
    <ul>
      <li><strong>Restaurants:</strong> Tipping is not customary except in high-end or Western-style establishments, which may add a 10-15% service charge.</li>
      <li><strong>Taxis:</strong> No tipping expected.</li>
      <li><strong>Hotels:</strong> In international hotels, ¥10-20 for bellhops is becoming more common.</li>
    </ul>
    
    <h3>Thailand</h3>
    
    <ul>
      <li><strong>Restaurants:</strong> Upscale restaurants may add a 10% service charge; otherwise, rounding up or leaving small change is appreciated.</li>
      <li><strong>Taxis:</strong> Rounding up to the nearest 20 baht.</li>
      <li><strong>Hotels:</strong> 20-50 baht for bellhops.</li>
    </ul>
    
    <h3>India</h3>
    
    <ul>
      <li><strong>Restaurants:</strong> 5-10% if no service charge is included.</li>
      <li><strong>Taxis:</strong> Rounding up the fare.</li>
      <li><strong>Hotels:</strong> ₹20-50 for bellhops and ₹50-100 per day for housekeeping.</li>
    </ul>
    
    <h2>Middle East</h2>
    
    <h3>United Arab Emirates</h3>
    
    <ul>
      <li><strong>Restaurants:</strong> Many add a 10% service charge, but an additional 5-10% for good service is appreciated.</li>
      <li><strong>Taxis:</strong> Rounding up to the nearest 5 AED.</li>
      <li><strong>Hotels:</strong> 5-10 AED per bag for porters and 10-20 AED per day for housekeeping.</li>
    </ul>
    
    <h3>Turkey</h3>
    
    <ul>
      <li><strong>Restaurants:</strong> 5-10% is customary if no service charge is included.</li>
      <li><strong>Taxis:</strong> Rounding up the fare.</li>
      <li><strong>Hotels:</strong> 5-10 TL for porters.</li>
    </ul>
    
    <h2>Oceania</h2>
    
    <h3>Australia</h3>
    
    <p>Tipping is not customary in Australia, as minimum wage laws ensure service workers receive fair compensation:</p>
    
    <ul>
      <li><strong>Restaurants:</strong> Not expected, but 10% for exceptional service is appreciated.</li>
      <li><strong>Taxis:</strong> Rounding up to the nearest dollar is common but not expected.</li>
    </ul>
    
    <h3>New Zealand</h3>
    
    <ul>
      <li><strong>Restaurants:</strong> Not expected, but 10% for exceptional service.</li>
      <li><strong>Taxis:</strong> Similar to Australia, rounding up is optional.</li>
    </ul>
    
    <h2>South America</h2>
    
    <h3>Brazil</h3>
    
    <ul>
      <li><strong>Restaurants:</strong> A 10% service charge (serviço) is typically included in the bill.</li>
      <li><strong>Taxis:</strong> Not customary, but rounding up is appreciated.</li>
    </ul>
    
    <h3>Argentina</h3>
    
    <ul>
      <li><strong>Restaurants:</strong> 10% is standard.</li>
      <li><strong>Taxis:</strong> Rounding up to the nearest 10 pesos.</li>
    </ul>
    
    <h2>Africa</h2>
    
    <h3>South Africa</h3>
    
    <ul>
      <li><strong>Restaurants:</strong> 10-15% is standard if no service charge is included.</li>
      <li><strong>Taxis:</strong> 10% of the fare.</li>
      <li><strong>Safari Guides and Trackers:</strong> R100-200 per day per guest.</li>
    </ul>
    
    <h3>Egypt</h3>
    
    <ul>
      <li><strong>Restaurants:</strong> 5-10% is appreciated, even if a service charge is included.</li>
      <li><strong>Taxis:</strong> 10% or rounding up.</li>
      <li><strong>Hotel Staff:</strong> £E5-10 for porters.</li>
      <li><strong>Tour Guides:</strong> £E50-100 per day.</li>
    </ul>
    
    <h2>General Tips for International Tipping</h2>
    
    <ul>
      <li><strong>Always carry small denominations</strong> of local currency for tipping.</li>
      <li><strong>Be discreet</strong> when tipping in cultures where it's less common.</li>
      <li><strong>Learn key phrases</strong> in the local language to thank service providers.</li>
      <li><strong>Research before you travel</strong> to understand local customs and expectations.</li>
      <li><strong>When in doubt, ask locals</strong> or hotel staff about appropriate tipping practices.</li>
    </ul>
    
    <h2>Final Thoughts</h2>
    
    <p>Remember that tipping is about showing appreciation for good service. While this guide provides general guidelines, service expectations and tipping practices can vary even within countries. The best approach is to research specific destinations before traveling and be prepared to adapt to local customs.</p>
    
    <p>By understanding these diverse tipping practices, you'll navigate your international adventures with confidence and respect for local customs.</p>
  `,
  related: [
    "how-much-to-tip-your-server",
    "digital-tipping-trends",
    "tipping-hotel-staff-guide",
  ],
};

// Helper function to get formatted publish date for schema
function getFormattedPublishDate(dateString: string): string {
  return new Date(dateString).toISOString();
}

export default function BlogPostPage() {
  return (
    <>
      <SchemaOrg
        schema={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: blogPost.title,
          description: blogPost.excerpt,
          image: `https://tipcalculator.cash${blogPost.image}`,
          datePublished: getFormattedPublishDate("2023-11-15"),
          dateModified: getFormattedPublishDate("2023-11-15"),
          author: {
            "@type": "Person",
            name: blogPost.author
          },
          publisher: {
            "@type": "Organization",
            name: "Tip Calculator Tool",
            logo: {
              "@type": "ImageObject",
              url: "https://tipcalculator.cash/logo.png"
            }
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://tipcalculator.cash/blog/${blogPost.slug}`
          }
        }}
      />

      <div className="container px-4 py-12 md:px-6 md:py-24">
        <div className="mx-auto max-w-4xl">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-1 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-foreground">
              Blog
            </Link>
            <span>/</span>
            <span className="text-foreground">Tipping Etiquette Around the World</span>
          </div>
          
          {/* Header */}
          <div className="mb-10">
            <Link
              href="/blog"
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),
                "mb-6"
              )}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
            
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {blogPost.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {blogPost.readTime}
                </span>
                <span className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  {blogPost.author}
                </span>
                <span className="flex items-center gap-1">
                  <Tag className="h-4 w-4" />
                  {blogPost.category}
                </span>
              </div>
              
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                {blogPost.title}
              </h1>
              
              <p className="text-xl text-muted-foreground">
                {blogPost.excerpt}
              </p>
            </div>
          </div>
          
          {/* Featured Image */}
          <div className="mb-10 overflow-hidden rounded-xl border shadow-sm">
            <div className="aspect-[16/9] overflow-hidden">
              <div className="relative h-full w-full">
                <div className="absolute inset-0 bg-black/10" />
                <div className="h-full w-full bg-muted/50" />
              </div>
            </div>
          </div>
          
          {/* Article Content */}
          <article className="prose max-w-none prose-headings:font-semibold prose-a:text-primary dark:prose-invert">
            <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
          </article>
          
          {/* Author and Share Section */}
          <div className="mt-16 flex flex-col gap-6 rounded-xl border bg-muted/30 p-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16 overflow-hidden rounded-full bg-muted/50">
                {/* Author avatar placeholder */}
              </div>
              <div>
                <h3 className="font-semibold">Written by {blogPost.author}</h3>
                <p className="text-sm text-muted-foreground">
                  Travel writer specializing in global customs and etiquette
                </p>
              </div>
            </div>
            
            <div>
              <p className="mb-2 font-medium">Share this article</p>
              <div className="flex gap-2">
                <button aria-label="Share on Twitter" className="rounded-full bg-primary/10 p-2 text-primary hover:bg-primary/20">
                  <Twitter className="h-5 w-5" />
                </button>
                <button aria-label="Share on Facebook" className="rounded-full bg-primary/10 p-2 text-primary hover:bg-primary/20">
                  <Facebook className="h-5 w-5" />
                </button>
                <button aria-label="Share on LinkedIn" className="rounded-full bg-primary/10 p-2 text-primary hover:bg-primary/20">
                  <Linkedin className="h-5 w-5" />
                </button>
                <button aria-label="Share via other channels" className="rounded-full bg-primary/10 p-2 text-primary hover:bg-primary/20">
                  <Share2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Related Articles */}
          <div className="mt-16">
            <h2 className="mb-6 text-2xl font-semibold">Related Articles</h2>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              {blogPost.related.map((slug) => (
                <div key={slug} className="group rounded-lg border shadow-sm hover-lift">
                  <div className="aspect-[16/9] overflow-hidden rounded-t-lg">
                    <Link href={`/blog/${slug}`}>
                      <div className="relative h-full w-full">
                        <div className="absolute inset-0 bg-black/10" />
                        <div className="h-full w-full bg-muted/30" />
                      </div>
                    </Link>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold line-clamp-2">
                      <Link href={`/blog/${slug}`} className="hover:text-primary">
                        {slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                      Learn more about tipping etiquette for this specific situation.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Newsletter Section */}
          <div className="mt-16 rounded-xl border bg-muted/30 p-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-semibold">Subscribe to Our Newsletter</h2>
              <p className="mt-2 text-muted-foreground">
                Get the latest tips, guides, and insights delivered directly to your inbox.
              </p>
              <form className="mt-6 flex flex-col gap-2 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-md border bg-background px-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  required
                />
                <button
                  type="submit"
                  className={cn(
                    buttonVariants({ size: "default" }),
                    "whitespace-nowrap font-medium"
                  )}
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 