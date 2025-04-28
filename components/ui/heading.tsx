import * as React from "react"
import { cn } from "@/lib/utils"

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  children: React.ReactNode
}

export function Heading({ 
  level, 
  children, 
  className, 
  ...props 
}: HeadingProps) {
  const Comp = React.createElement(
    level,
    { className: cn(className), ...props },
    children
  )
  
  return Comp
} 