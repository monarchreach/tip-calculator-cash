import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/atoms/badge"
import { cn } from "@/lib/utils"
import { ArrowRight, Calculator } from "lucide-react"
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
  // Use Calculator icon as default if none provided
  const IconComponent = Icon || Calculator;

  return (
    <Card className={cn("overflow-hidden transition-all duration-300 hover-lift border-muted/60 group", className)}>
      <CardHeader className="flex flex-row items-start gap-4 pb-2">
        <div className="h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center transition-colors group-hover:bg-primary/20">
          <IconComponent className="h-5 w-5 text-primary" />
        </div>
        <div className="grid gap-1">
          <div className="flex items-center gap-2 flex-wrap">
            <CardTitle className="text-lg font-semibold">{title}</CardTitle>
            {isNew && (
              <Badge variant="new" className="animate-pulse">
                New
              </Badge>
            )}
            {isTrending && <Badge variant="trending">Trending</Badge>}
          </div>
          <CardDescription>{description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="pb-4">
        <p className="text-sm text-muted-foreground line-clamp-2">{excerpt}</p>
      </CardContent>
      <CardFooter className="pt-0 pb-4">
        <Button 
          asChild 
          className="w-full group-hover:bg-primary/90 transition-all"
          variant="default"
        >
          <Link href={`/calculators/${slug}`} className="flex items-center justify-center">
            <span>Open Calculator</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
      <div className="h-1 w-full bg-gradient-to-r from-primary/20 to-secondary/20 transition-all duration-300 group-hover:from-primary group-hover:to-secondary" />
    </Card>
  )
}
