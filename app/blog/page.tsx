import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Clock, Calendar, User, Tag } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { SchemaOrg } from "@/components/schema-org"

export const metadata: Metadata = {
  title: "Tipping Blog - Articles on Tipping Etiquette & Guides",
  description:
    "Explore our collection of articles on tipping customs, etiquette, and guides for different services and locations around the world.",
}

// Blog post data
const blogPosts = [
  {
    slug: "tipping-etiquette-around-the-world",
    title: "Tipping Etiquette Around the World: A Comprehensive Guide",
    excerpt: "Learn about tipping customs and expectations across different countries and cultures to ensure you're prepared for your next international adventure.",
    date: "2023-11-15",
    author: "Alex Morgan",
    image: "/images/blog/world-tipping.jpg",
    category: "Travel",
    readTime: "8 min read",
  },
  {
    slug: "how-much-to-tip-your-server",
    title: "How Much to Tip Your Server: A Guide to Restaurant Tipping",
    excerpt: "Understanding restaurant tipping norms, when to tip more or less, and how to handle different dining scenarios with confidence.",
    date: "2023-10-28",
    author: "Jamie Lee",
    image: "/images/blog/restaurant-tipping.jpg",
    category: "Dining",
    readTime: "6 min read",
  },
  {
    slug: "digital-tipping-trends",
    title: "Digital Tipping Trends: The Future of Gratuity",
    excerpt: "Explore how technology is changing the way we tip, from QR code tipping to peer-to-peer payment apps and what it means for service workers.",
    date: "2023-10-12",
    author: "Taylor Reese",
    image: "/images/blog/digital-tipping.jpg",
    category: "Technology",
    readTime: "7 min read",
  },
  {
    slug: "tipping-hotel-staff-guide",
    title: "A Complete Guide to Tipping Hotel Staff: Who, When, and How Much",
    excerpt: "Navigate the complexities of hotel tipping with this comprehensive guide covering everyone from bellhops to housekeeping and concierge services.",
    date: "2023-09-20",
    author: "Jordan Casey",
    image: "/images/blog/hotel-tipping.jpg",
    category: "Hospitality",
    readTime: "9 min read",
  },
  {
    slug: "tipping-psychology",
    title: "The Psychology of Tipping: Why We Tip and How It Affects Service",
    excerpt: "Delve into the psychological factors that influence our tipping behaviors and how gratuities impact service quality and worker motivation.",
    date: "2023-09-05",
    author: "Dr. Robin Park",
    image: "/images/blog/tipping-psychology.jpg",
    category: "Psychology",
    readTime: "10 min read",
  },
  {
    slug: "service-industry-perspectives",
    title: "From the Other Side: Service Industry Workers on Tipping",
    excerpt: "Hear directly from service industry professionals about how tipping affects their livelihood and what they wish customers knew about gratuity.",
    date: "2023-08-22",
    author: "Sam Rivera",
    image: "/images/blog/service-workers.jpg",
    category: "Insights",
    readTime: "8 min read",
  },
]

export default function BlogPage() {
  return (
    <>
      <SchemaOrg
        schema={{
          "@context": "https://schema.org",
          "@type": "Blog",
          headline: "Tipping Blog - Articles on Tipping Etiquette & Guides",
          description: "Explore our collection of articles on tipping customs, etiquette, and guides for different services and locations around the world.",
          author: {
            "@type": "Organization",
            name: "Tip Calculator Tool",
            url: "https://tipcalculator.cash"
          },
          inLanguage: "en-US",
          blogPost: blogPosts.map(post => ({
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            author: {
              "@type": "Person",
              name: post.author
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://tipcalculator.cash/blog/${post.slug}`
            }
          }))
        }}
      />

      <div className="container px-4 py-12 md:px-6 md:py-24">
        <div className="mx-auto max-w-5xl">
          {/* Hero Section */}
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Tipping Blog
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-muted-foreground">
              Insights, guides, and tips on tipping culture around the world
            </p>
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <div className="group relative overflow-hidden rounded-xl border shadow-sm hover-lift">
              <div className="aspect-[16/9] overflow-hidden">
                <Link href={`/blog/${blogPosts[0].slug}`}>
                  <div className="relative h-full w-full">
                    <div className="absolute inset-0 bg-black/10" />
                    <div className="h-full w-full bg-muted/30" />
                  </div>
                </Link>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {blogPosts[0].date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {blogPosts[0].readTime}
                  </span>
                  <span className="flex items-center gap-1">
                    <Tag className="h-4 w-4" />
                    {blogPosts[0].category}
                  </span>
                </div>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                  <Link href={`/blog/${blogPosts[0].slug}`} className="hover:text-primary">
                    {blogPosts[0].title}
                  </Link>
                </h2>
                <p className="mt-3 text-muted-foreground">{blogPosts[0].excerpt}</p>
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="relative h-8 w-8 overflow-hidden rounded-full bg-muted">
                      {/* Author avatar placeholder */}
                    </div>
                    <span className="text-sm font-medium">{blogPosts[0].author}</span>
                  </div>
                  <Link
                    href={`/blog/${blogPosts[0].slug}`}
                    className={cn(
                      buttonVariants({ variant: "link" }),
                      "font-semibold"
                    )}
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Post Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.slice(1).map((post) => (
              <div key={post.slug} className="group relative overflow-hidden rounded-lg border shadow-sm hover-lift">
                <div className="aspect-[16/9] overflow-hidden">
                  <Link href={`/blog/${post.slug}`}>
                    <div className="relative h-full w-full">
                      <div className="absolute inset-0 bg-black/10" />
                      <div className="h-full w-full bg-muted/30" />
                    </div>
                  </Link>
                </div>
                <div className="p-4">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Tag className="h-3 w-3" />
                      {post.category}
                    </span>
                  </div>
                  <h3 className="mt-2 text-lg font-semibold tracking-tight line-clamp-2">
                    <Link href={`/blog/${post.slug}`} className="hover:text-primary">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-sm font-medium text-primary hover:underline"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
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