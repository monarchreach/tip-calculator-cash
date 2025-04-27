"use client"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface TipPercentageButtonsProps {
  value: number
  onChange: (value: number) => void
  percentages?: number[]
  className?: string
}

export function TipPercentageButtons({
  value,
  onChange,
  percentages = [15, 18, 20, 25],
  className,
}: TipPercentageButtonsProps) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {percentages.map((percentage) => (
        <Button
          key={percentage}
          type="button"
          variant="outline"
          size="sm"
          className={cn("tip-btn", value === percentage && "active")}
          onClick={() => onChange(percentage)}
        >
          {percentage}%
        </Button>
      ))}
      <Button
        type="button"
        variant="outline"
        size="sm"
        className={cn("tip-btn", !percentages.includes(value) && "active")}
        onClick={() => onChange(value === 0 ? 10 : value)}
      >
        Custom
      </Button>
    </div>
  )
}
