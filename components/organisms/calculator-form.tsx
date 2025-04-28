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
import { CalculatorIcon, Percent, Users, Printer, Download, Share2, RotateCcw, DollarSign, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { GroupDiningCalculator } from "../calculators/group-dining-calculator"
import { DigitalTippingCalculator } from "../calculators/digital-tipping-calculator"

interface CalculatorFormProps {
  type: string
  locations?: Array<{ value: string; label: string; country: string }>
  defaultLocation?: string
  className?: string
}

// Currency options for the calculator
const CURRENCY_OPTIONS = [
  { value: "USD", label: "USD ($)", symbol: "$" },
  { value: "EUR", label: "EUR (€)", symbol: "€" },
  { value: "GBP", label: "GBP (£)", symbol: "£" },
  { value: "CAD", label: "CAD ($)", symbol: "$" },
  { value: "AUD", label: "AUD ($)", symbol: "$" },
  { value: "JPY", label: "JPY (¥)", symbol: "¥" },
]

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
  const [currency, setCurrency] = React.useState<string>("USD")
  const [showAdvancedOptions, setShowAdvancedOptions] = React.useState<boolean>(false)

  // State for results
  const [tipAmount, setTipAmount] = React.useState<number>(0)
  const [totalAmount, setTotalAmount] = React.useState<number>(0)
  const [perPersonAmount, setPerPersonAmount] = React.useState<number>(0)
  const [resultUpdated, setResultUpdated] = React.useState<boolean>(false)

  // State for saving calculation history
  const [calculationHistory, setCalculationHistory] = React.useState<Array<{
    id: string;
    timestamp: Date;
    billAmount: number;
    tipAmount: number;
    totalAmount: number;
    tipPercentage: number;
    splitCount: number;
    currency: string;
  }>>([])

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

  // Format currency based on selected currency
  const formatCurrency = (amount: number) => {
    const currencyObj = CURRENCY_OPTIONS.find(c => c.value === currency) || CURRENCY_OPTIONS[0];
    
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currencyObj.value,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount)
  }

  // Save current calculation to history
  const saveCalculation = () => {
    if (billAmount <= 0) return;
    
    const newCalculation = {
      id: Date.now().toString(),
      timestamp: new Date(),
      billAmount,
      tipAmount,
      totalAmount,
      tipPercentage,
      splitCount,
      currency
    };
    
    setCalculationHistory(prev => [newCalculation, ...prev].slice(0, 5)); // Keep only the 5 most recent
    
    // Also save to localStorage for persistence
    try {
      const existingHistory = JSON.parse(localStorage.getItem('calculationHistory') || '[]');
      const updatedHistory = [newCalculation, ...existingHistory].slice(0, 5);
      localStorage.setItem('calculationHistory', JSON.stringify(updatedHistory));
    } catch (e) {
      console.error("Failed to save to localStorage:", e);
    }
  };

  // Print the current calculation
  const printCalculation = () => {
    const printContent = `
      <html>
        <head>
          <title>Tip Calculation</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; line-height: 1.6; }
            .container { max-width: 500px; margin: 0 auto; padding: 20px; border: 1px solid #ccc; border-radius: 8px; }
            h1 { font-size: 24px; margin-bottom: 20px; }
            .result-row { display: flex; justify-content: space-between; margin-bottom: 10px; }
            .result-value { font-weight: bold; }
            .footer { margin-top: 30px; font-size: 12px; text-align: center; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>Tip Calculation Receipt</h1>
            <div class="result-row">
              <span>Date:</span>
              <span class="result-value">${new Date().toLocaleDateString()}, ${new Date().toLocaleTimeString()}</span>
            </div>
            <div class="result-row">
              <span>Bill Amount:</span>
              <span class="result-value">${formatCurrency(billAmount)}</span>
            </div>
            <div class="result-row">
              <span>Tip Percentage:</span>
              <span class="result-value">${tipPercentage}%</span>
            </div>
            <div class="result-row">
              <span>Tip Amount:</span>
              <span class="result-value">${formatCurrency(tipAmount)}</span>
            </div>
            <div class="result-row">
              <span>Total Amount:</span>
              <span class="result-value">${formatCurrency(totalAmount)}</span>
            </div>
            ${splitCount > 1 ? `
            <div class="result-row">
              <span>Split Between:</span>
              <span class="result-value">${splitCount} people</span>
            </div>
            <div class="result-row">
              <span>Amount Per Person:</span>
              <span class="result-value">${formatCurrency(perPersonAmount)}</span>
            </div>
            ` : ''}
            <div class="footer">
              Generated by TipCalculator.cash | For accurate tipping anywhere in the world
            </div>
          </div>
        </body>
      </html>
    `;
    
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(printContent);
      printWindow.document.close();
      printWindow.focus();
      
      // Save calculation to history
      saveCalculation();
      
      // Print after a short delay to ensure content is rendered
      setTimeout(() => {
        printWindow.print();
        printWindow.close();
      }, 250);
    }
  };

  // Reset the calculator to default values
  const resetCalculator = () => {
    setBillAmount(0);
    setTipPercentage(18);
    setSplitCount(1);
    setCalculateOnPreTax(false);
    setServiceQuality("good");
    setCurrency("USD");
    setShowAdvancedOptions(false);
  };

  // Add support for group dining and digital tipping calculators
  if (type === "group-dining-tip-calculator") {
    return <GroupDiningCalculator formatCurrency={formatCurrency} />
  }
  
  if (type === "digital-tipping-calculator") {
    return <DigitalTippingCalculator formatCurrency={formatCurrency} />
  }

  return (
    <Card className={cn("w-full hover-lift shadow-sm", className)}>
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
        <div className="flex flex-wrap gap-2 sm:flex-nowrap">
          {locations.length > 0 && (
            <div className="space-y-2 w-full">
              <Label htmlFor="location">Location</Label>
              <LocationSelector value={location} onChange={setLocation} locations={locations} />
            </div>
          )}
          
          <div className="space-y-2 w-full sm:w-1/3">
            <Label htmlFor="currency">Currency</Label>
            <Select value={currency} onValueChange={setCurrency}>
              <SelectTrigger id="currency">
                <SelectValue placeholder="Select currency" />
              </SelectTrigger>
              <SelectContent>
                {CURRENCY_OPTIONS.map(option => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="bill-amount">Bill Amount</Label>
          <CurrencyInput 
            id="bill-amount" 
            placeholder="0.00" 
            onChange={setBillAmount} 
            value={billAmount} 
            className={cn(
              "input-validation",
              billAmount > 0 ? "valid" : billAmount < 0 ? "invalid" : ""
            )}
            currencySymbol={CURRENCY_OPTIONS.find(c => c.value === currency)?.symbol || "$"}
          />
          {billAmount < 0 && (
            <p className="mt-1 text-xs text-amber-600">Bill amount cannot be negative</p>
          )}
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

        {/* Split Bill Section - Now more prominent */}
        <div className="space-y-4 p-4 rounded-lg border bg-muted/40">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <Label htmlFor="split-count" className="font-medium">Split the Bill</Label>
            </div>
            <div className="flex items-center gap-2">
              <Button 
                variant="outline" 
                size="icon" 
                className="h-7 w-7"
                onClick={() => setSplitCount(Math.max(1, splitCount - 1))}
                disabled={splitCount <= 1}
                aria-label="Decrease person count"
              >
                <span>-</span>
              </Button>
              <Input
                id="split-count"
                type="number"
                min="1"
                step="1"
                value={splitCount}
                onChange={(e) => setSplitCount(Number.parseInt(e.target.value) || 1)}
                className="w-16 h-8 text-center"
                aria-label="Number of people"
                aria-valuemin={1}
                aria-valuenow={splitCount}
              />
              <Button 
                variant="outline" 
                size="icon" 
                className="h-7 w-7"
                onClick={() => setSplitCount(splitCount + 1)}
                aria-label="Increase person count"
              >
                <span>+</span>
              </Button>
            </div>
          </div>
          {splitCount > 1 && (
            <p className="text-sm text-muted-foreground">
              Total will be divided evenly between {splitCount} people
            </p>
          )}
        </div>

        {/* Advanced Options Accordion */}
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="advanced-options">
            <AccordionTrigger className="py-2">
              <div className="flex items-center gap-2">
                <ChevronsUpDown className="h-4 w-4" />
                <span>Advanced Options</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 pt-2">
                <div className="flex items-center justify-between space-x-2 rounded-md border p-3">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                    <Label htmlFor="pre-tax" className="font-medium">
                      Calculate tip on pre-tax amount
                    </Label>
                  </div>
                  <Switch 
                    id="pre-tax" 
                    checked={calculateOnPreTax} 
                    onCheckedChange={setCalculateOnPreTax}
                    aria-label="Calculate tip on pre-tax amount"
                    aria-checked={calculateOnPreTax}
                  />
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
                        className={cn(
                          "pl-10 input-validation",
                          taxRate >= 0 ? "valid" : "invalid"
                        )}
                        value={taxRate}
                        onChange={(e) => setTaxRate(Number.parseFloat(e.target.value) || 0)}
                      />
                    </div>
                    <p className="text-sm text-muted-foreground">Estimated pre-tax amount: {formatCurrency(preTaxAmount)}</p>
                  </div>
                )}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <div
          className={cn(
            "w-full rounded-lg p-4 transition-all duration-300",
            resultUpdated ? "calculator-result updated result-bounce" : "calculator-result"
          )}
          aria-live="polite"
          aria-atomic="true"
        >
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Tip Amount</p>
              <p className="text-2xl font-bold">{formatCurrency(tipAmount)}</p>
              {tipPercentage > 0 && billAmount > 0 && (
                <p className="text-xs text-muted-foreground mt-1">
                  {tipPercentage}% of {calculateOnPreTax ? 'pre-tax amount' : 'bill'}
                </p>
              )}
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total</p>
              <p className="text-2xl font-bold">{formatCurrency(totalAmount)}</p>
            </div>
            {splitCount > 1 && (
              <div className="col-span-2 border-t pt-2 mt-2">
                <p className="text-sm font-medium text-muted-foreground">Per Person</p>
                <p className="text-2xl font-bold">{formatCurrency(perPersonAmount)}</p>
                <p className="text-xs text-muted-foreground mt-1">Split between {splitCount} people</p>
              </div>
            )}
          </div>
        </div>

        {/* Actions Section */}
        <div className="grid gap-2 sm:grid-cols-4">
          <Button 
            className="gap-1" 
            variant="outline" 
            onClick={printCalculation}
            disabled={billAmount <= 0}
            aria-label="Print calculation results"
          >
            <Printer className="h-4 w-4" />
            <span className="sm:inline hidden">Print</span>
          </Button>
          <Button 
            className="gap-1" 
            variant="outline"
            onClick={saveCalculation}
            disabled={billAmount <= 0}
            aria-label="Save calculation"
          >
            <Download className="h-4 w-4" />
            <span className="sm:inline hidden">Save</span>
          </Button>
          <Button 
            className="gap-1" 
            variant="outline"
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: 'Tip Calculation',
                  text: `Bill: ${formatCurrency(billAmount)}, Tip: ${formatCurrency(tipAmount)} (${tipPercentage}%), Total: ${formatCurrency(totalAmount)}${splitCount > 1 ? `, Per Person: ${formatCurrency(perPersonAmount)}` : ''}`,
                  url: window.location.href,
                })
              }
            }}
            disabled={billAmount <= 0 || !navigator.canShare}
            aria-label="Share calculation"
          >
            <Share2 className="h-4 w-4" />
            <span className="sm:inline hidden">Share</span>
          </Button>
          <Button 
            className="gap-1" 
            variant="destructive" 
            onClick={resetCalculator}
            aria-label="Reset calculator"
          >
            <RotateCcw className="h-4 w-4" />
            <span className="sm:inline hidden">Reset</span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
