import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/atoms/badge"
import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"

interface CalculatorCardProps {
  title: string
  description: string
  excerpt: string
  slug: string
  icon?: LucideIcon
  isNew?: boolean
  isTrending?: boolean
  className?: string
}

export function CalculatorCard({
  title,
  description,
  excerpt,
  slug,
  icon: Icon,
  isNew = false,
  isTrending = false,
  className,
}: CalculatorCardProps) {
  return (
    <Card className={cn("hover-lift", className)}>
      <CardHeader className="flex flex-row items-center gap-4">
        {Icon && <Icon className="h-8 w-8 text-primary" />}
        <div className="grid gap-1">
          <div className="flex items-center gap-2">
            <CardTitle>{title}</CardTitle>
            {isNew && <Badge variant="new">New</Badge>}
            {isTrending && <Badge variant="trending">Trending</Badge>}
          </div>
          <CardDescription>{description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="grid gap-2">
        <p className="text-sm text-muted-foreground">{excerpt}</p>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/calculators/${slug}`}>Open Calculator</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
