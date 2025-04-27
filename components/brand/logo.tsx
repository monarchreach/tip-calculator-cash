import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className={cn("h-6 w-6", className)} fill="none">
      <rect width="48" height="48" x="8" y="8" rx="8" fill="hsl(var(--primary))" />
      <path d="M32 16v32M16 32h32" stroke="hsl(var(--primary-foreground))" strokeWidth="4" strokeLinecap="round" />
      <circle
        cx="32"
        cy="32"
        r="16"
        stroke="hsl(var(--primary-foreground))"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray="4 6"
      />
      <path
        d="M32 20a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4"
        stroke="hsl(var(--secondary))"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="44" cy="20" r="4" fill="hsl(var(--secondary))" />
    </svg>
  )
}
