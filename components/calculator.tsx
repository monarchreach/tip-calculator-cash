"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalculatorIcon, DollarSign, Percent } from "lucide-react"

interface CalculatorProps {
  type: string
}

export function Calculator({ type }: CalculatorProps) {
  const [billAmount, setBillAmount] = useState<number>(0)
  const [tipPercentage, setTipPercentage] = useState<number>(15)
  const [splitCount, setSplitCount] = useState<number>(1)
  const [tipAmount, setTipAmount] = useState<number>(0)
  const [totalAmount, setTotalAmount] = useState<number>(0)
  const [perPersonAmount, setPerPersonAmount] = useState<number>(0)
  const [calculateOnPreTax, setCalculateOnPreTax] = useState<boolean>(false)
  const [preTaxAmount, setPreTaxAmount] = useState<number>(0)
  const [taxRate, setTaxRate] = useState<number>(8.875) // Default to NYC tax rate
  const [serviceQuality, setServiceQuality] = useState<string>("good")
  const [customTipPercentage, setCustomTipPercentage] = useState<number>(15)

  // Calculate tip and total when inputs change
  useEffect(() => {
    const baseAmount = calculateOnPreTax ? preTaxAmount : billAmount
    const calculatedTipAmount = baseAmount * (tipPercentage / 100)
    const calculatedTotalAmount = billAmount + calculatedTipAmount
    const calculatedPerPersonAmount = calculatedTotalAmount / splitCount

    setTipAmount(calculatedTipAmount)
    setTotalAmount(calculatedTotalAmount)
    setPerPersonAmount(calculatedPerPersonAmount)
  }, [billAmount, tipPercentage, splitCount, calculateOnPreTax, preTaxAmount])

  // Update pre-tax amount when bill amount or tax rate changes
  useEffect(() => {
    const calculatedPreTaxAmount = billAmount / (1 + taxRate / 100)
    setPreTaxAmount(calculatedPreTaxAmount)
  }, [billAmount, taxRate])

  // Set tip percentage based on service quality
  useEffect(() => {
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
    }).format(amount)
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center gap-2">
          <CalculatorIcon className="h-6 w-6" />
          <div>
            <CardTitle>Tip Calculator</CardTitle>
            <CardDescription>Calculate the perfect tip amount</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="bill-amount">Bill Amount</Label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            <Input
              id="bill-amount"
              type="number"
              min="0"
              step="0.01"
              placeholder="0.00"
              className="pl-10"
              value={billAmount || ""}
              onChange={(e) => setBillAmount(Number.parseFloat(e.target.value) || 0)}
            />
          </div>
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
                />
              </div>
              <div className="flex justify-between mt-2">
                <Button variant="outline" size="sm" onClick={() => setTipPercentage(15)}>
                  15%
                </Button>
                <Button variant="outline" size="sm" onClick={() => setTipPercentage(18)}>
                  18%
                </Button>
                <Button variant="outline" size="sm" onClick={() => setTipPercentage(20)}>
                  20%
                </Button>
                <Button variant="outline" size="sm" onClick={() => setTipPercentage(25)}>
                  25%
                </Button>
              </div>
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
            <Input
              id="split-count"
              type="number"
              min="1"
              step="1"
              value={splitCount}
              onChange={(e) => setSplitCount(Number.parseInt(e.target.value) || 1)}
              className="w-20"
            />
            <span>people</span>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Switch id="pre-tax" checked={calculateOnPreTax} onCheckedChange={setCalculateOnPreTax} />
          <Label htmlFor="pre-tax">Calculate tip on pre-tax amount</Label>
        </div>

        {calculateOnPreTax && (
          <div className="space-y-2">
            <Label htmlFor="tax-rate">Tax Rate (%)</Label>
            <div className="relative">
              <Percent className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
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
            <p className="text-sm text-gray-500">Estimated pre-tax amount: {formatCurrency(preTaxAmount)}</p>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <div className="w-full rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Tip Amount</p>
              <p className="text-2xl font-bold">{formatCurrency(tipAmount)}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total</p>
              <p className="text-2xl font-bold">{formatCurrency(totalAmount)}</p>
            </div>
            {splitCount > 1 && (
              <div className="col-span-2">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Each Person Pays</p>
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
