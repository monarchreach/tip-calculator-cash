"use client"

import * as React from "react"
import { Input, type InputProps } from "@/components/ui/input"
import { cn } from "@/lib/utils"

interface CurrencyInputProps extends Omit<InputProps, "onChange"> {
  currency?: string
  onChange?: (value: number) => void
  defaultValue?: number
  value?: number
}

export function CurrencyInput({
  currency = "$",
  onChange,
  className,
  defaultValue,
  value,
  ...props
}: CurrencyInputProps) {
  const [inputValue, setInputValue] = React.useState<string>(
    value !== undefined ? value.toString() : defaultValue !== undefined ? defaultValue.toString() : "",
  )

  React.useEffect(() => {
    if (value !== undefined) {
      setInputValue(value.toString())
    }
  }, [value])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value

    // Only allow numbers and decimal points
    const sanitizedValue = rawValue.replace(/[^0-9.]/g, "")

    // Ensure only one decimal point
    const parts = sanitizedValue.split(".")
    const formattedValue = parts.length > 2 ? `${parts[0]}.${parts.slice(1).join("")}` : sanitizedValue

    setInputValue(formattedValue)

    // Convert to number and call onChange
    const numericValue = Number.parseFloat(formattedValue) || 0
    onChange?.(numericValue)
  }

  return (
    <div className="relative">
      <span className="currency-symbol">{currency}</span>
      <Input
        type="text"
        inputMode="decimal"
        className={cn("currency-input", className)}
        value={inputValue}
        onChange={handleChange}
        {...props}
      />
    </div>
  )
}
