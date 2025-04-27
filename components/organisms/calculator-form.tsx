"use client"

import * as React from "react"
import { useDebounce } from "@/hooks/use-debounce"
import { CurrencyInput } from "@/components/atoms/currency-input"
import { TipPercentageButtons } from "@/components/molecules/tip-percentage-buttons"
import { LocationSelector } from "@/components/molecules/location-selector"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalculatorIcon, Percent, Users } from "lucide-react"
import { cn } from "@/lib/utils"

interface CalculatorFormProps {
  type: string
  locations?: Array<{ value: string; label: string; country: string }>
  defaultLocation?: string
  className?: string
}

export function CalculatorForm({ type, locations = [], defaultLocation = "", className }: CalculatorFormProps) {
  // State for form inputs
  const [billAmount, setBillAmount] = React.useState<number>(0)
  const [tipPercentage, setTipPercentage] = React.useState<number>(18)
  const [splitCount, setSplitCount] = React.useState<number>(1)
  const [calculateOnPreTax, setCalculateOnPreTax] = React.useState<boolean>(false)
  const [preTaxAmount, setPreTaxAmount] = React.useState<number>(0)
  const [taxRate, setTaxRate] = React.useState<number>(8.875) // Default to NYC tax rate
  const [serviceQuality, setServiceQuality] = React.useState<string>("good")
  const [customTipPercentage, setCustomTipPercentage] = React.useState<number>(15)
  const [location, setLocation] = React.useState<string>(defaultLocation)

  // State for results
  const [tipAmount, setTipAmount] = React.useState<number>(0)
  const [totalAmount, setTotalAmount] = React.useState<number>(0)
  const [perPersonAmount, setPerPersonAmount] = React.useState<number>(0)
  const [resultUpdated, setResultUpdated] = React.useState<boolean>(false)

  // Debounce bill amount to prevent excessive calculations
  const debouncedBillAmount = useDebounce(billAmount, 200)

  // Calculate tip and total when inputs change
  React.useEffect(() => {
    const baseAmount = calculateOnPreTax ? preTaxAmount : debouncedBillAmount
    const calculatedTipAmount = baseAmount * (tipPercentage / 100)
    const calculatedTotalAmount = debouncedBillAmount + calculatedTipAmount
    const calculatedPerPersonAmount = calculatedTotalAmount / splitCount

    setTipAmount(calculatedTipAmount)
    setTotalAmount(calculatedTotalAmount)
    setPerPersonAmount(calculatedPerPersonAmount)

    // Trigger the result updated animation
    setResultUpdated(true)
    const timer = setTimeout(() => setResultUpdated(false), 300)

    return () => clearTimeout(timer)
  }, [debouncedBillAmount, tipPercentage, splitCount, calculateOnPreTax, preTaxAmount])

  // Update pre-tax amount when bill amount or tax rate changes
  React.useEffect(() => {
    const calculatedPreTaxAmount = debouncedBillAmount / (1 + taxRate / 100)
    setPreTaxAmount(calculatedPreTaxAmount)
  }, [debouncedBillAmount, taxRate])

  // Set tip percentage based on service quality
  React.useEffect(() => {
    switch (serviceQuality) {
      case "exceptional":
        setTipPercentage(25)
        break
      case "good":
        setTipPercentage(18)
        break
      case "average":
        setTipPercentage(15)
        break
      case "poor":
        setTipPercentage(10)
        break
      case "custom":
        setTipPercentage(customTipPercentage)
        break
      default:
        setTipPercentage(18)
    }
  }, [serviceQuality, customTipPercentage])

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount)
  }

  return (
    <Card className={cn("w-full", className)}>
      <CardHeader>
        <div className="flex items-center gap-2">
          <CalculatorIcon className="h-6 w-6 text-primary" />
          <div>
            <CardTitle>Tip Calculator</CardTitle>
            <CardDescription>Calculate the perfect tip amount</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {locations.length > 0 && (
          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <LocationSelector value={location} onChange={setLocation} locations={locations} />
          </div>
        )}

        <div className="space-y-2">
          <Label htmlFor="bill-amount">Bill Amount</Label>
          <CurrencyInput id="bill-amount" placeholder="0.00" onChange={setBillAmount} value={billAmount} />
        </div>

        <Tabs defaultValue="percentage" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="percentage">Tip Percentage</TabsTrigger>
            <TabsTrigger value="service">Service Quality</TabsTrigger>
          </TabsList>
          <TabsContent value="percentage" className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="tip-percentage">Tip Percentage: {tipPercentage}%</Label>
              </div>
              <div className="flex items-center gap-2">
                <Slider
                  id="tip-percentage"
                  min={0}
                  max={30}
                  step={1}
                  value={[tipPercentage]}
                  onValueChange={(value) => setTipPercentage(value[0])}
                  className="py-2"
                />
              </div>
              <TipPercentageButtons value={tipPercentage} onChange={setTipPercentage} className="mt-2" />
            </div>
          </TabsContent>
          <TabsContent value="service" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="service-quality">Service Quality</Label>
              <Select value={serviceQuality} onValueChange={setServiceQuality}>
                <SelectTrigger id="service-quality">
                  <SelectValue placeholder="Select service quality" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="exceptional">Exceptional (25%)</SelectItem>
                  <SelectItem value="good">Good (18%)</SelectItem>
                  <SelectItem value="average">Average (15%)</SelectItem>
                  <SelectItem value="poor">Poor (10%)</SelectItem>
                  <SelectItem value="custom">Custom</SelectItem>
                </SelectContent>
              </Select>

              {serviceQuality === "custom" && (
                <div className="mt-4 space-y-2">
                  <Label htmlFor="custom-percentage">Custom Percentage: {customTipPercentage}%</Label>
                  <div className="flex items-center gap-2">
                    <Slider
                      id="custom-percentage"
                      min={0}
                      max={30}
                      step={1}
                      value={[customTipPercentage]}
                      onValueChange={(value) => setCustomTipPercentage(value[0])}
                      className="py-2"
                    />
                  </div>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>

        <div className="space-y-2">
          <Label htmlFor="split-count">Split Between</Label>
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <Users className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="split-count"
                type="number"
                min="1"
                step="1"
                value={splitCount}
                onChange={(e) => setSplitCount(Number.parseInt(e.target.value) || 1)}
                className="pl-10"
              />
            </div>
            <span className="text-sm text-muted-foreground">people</span>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Switch id="pre-tax" checked={calculateOnPreTax} onCheckedChange={setCalculateOnPreTax} />
          <Label htmlFor="pre-tax" className="text-sm">
            Calculate tip on pre-tax amount
          </Label>
        </div>

        {calculateOnPreTax && (
          <div className="space-y-2">
            <Label htmlFor="tax-rate">Tax Rate (%)</Label>
            <div className="relative">
              <Percent className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="tax-rate"
                type="number"
                min="0"
                step="0.1"
                className="pl-10"
                value={taxRate}
                onChange={(e) => setTaxRate(Number.parseFloat(e.target.value) || 0)}
              />
            </div>
            <p className="text-sm text-muted-foreground">Estimated pre-tax amount: {formatCurrency(preTaxAmount)}</p>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <div
          className={cn(
            "w-full rounded-lg bg-primary/5 p-4 transition-all duration-300",
            resultUpdated && "bg-primary/10",
          )}
        >
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Tip Amount</p>
              <p className="text-2xl font-bold">{formatCurrency(tipAmount)}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total</p>
              <p className="text-2xl font-bold">{formatCurrency(totalAmount)}</p>
            </div>
            {splitCount > 1 && (
              <div className="col-span-2">
                <p className="text-sm font-medium text-muted-foreground">Each Person Pays</p>
                <p className="text-2xl font-bold">{formatCurrency(perPersonAmount)}</p>
              </div>
            )}
          </div>
        </div>
        <Button className="w-full" onClick={() => window.print()}>
          Save / Print Results
        </Button>
      </CardFooter>
    </Card>
  )
}
