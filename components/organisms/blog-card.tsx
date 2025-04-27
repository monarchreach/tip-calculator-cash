import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/atoms/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface BlogCardProps {
  title: string
  description: string
  slug: string
  date: string
  category: string
  image?: string
  author?: {
    name: string
    avatar?: string
  }
  className?: string
}

export function BlogCard({ title, description, slug, date, category, image, author, className }: BlogCardProps) {
  return (
    <Card className={cn("overflow-hidden hover-lift", className)}>
      {image && (
        <div className="aspect-video w-full overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={600}
            height={340}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}
      <CardHeader>
        <div className="flex items-center justify-between">
          <Badge variant="outline">{category}</Badge>
          <span className="text-xs text-muted-foreground">{date}</span>
        </div>
        <CardTitle className="line-clamp-2">{title}</CardTitle>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {author && (
          <div className="flex items-center gap-2">
            {author.avatar ? (
              <Image
                src={author.avatar || "/placeholder.svg"}
                alt={author.name}
                width={24}
                height={24}
                className="rounded-full"
              />
            ) : (
              <div className="h-6 w-6 rounded-full bg-primary/10" />
            )}
            <span className="text-sm text-muted-foreground">{author.name}</span>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full">
          <Link href={`/blog/${slug}`}>Read Article</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
