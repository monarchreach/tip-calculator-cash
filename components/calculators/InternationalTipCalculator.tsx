import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calculator, Globe, Info } from "lucide-react"
import { locations } from "@/lib/data"

interface InternationalTipCalculatorProps {
  formatCurrency: (amount: number) => string
}

export function InternationalTipCalculator({ formatCurrency }: InternationalTipCalculatorProps) {
  const [billAmount, setBillAmount] = useState<number>(0)
  const [selectedCountry, setSelectedCountry] = useState<string>("")
  const [serviceType, setServiceType] = useState<string>("restaurant")
  const [serviceQuality, setServiceQuality] = useState<string>("good")
  const [tipAmount, setTipAmount] = useState<number>(0)
  const [totalAmount, setTotalAmount] = useState<number>(0)
  const [showResult, setShowResult] = useState<boolean>(false)

  // Get selected location details
  const selectedLocation = locations.find(loc => loc.slug === selectedCountry)

  // Calculate tip based on country and service type
  const calculateTip = () => {
    if (!selectedLocation || billAmount <= 0) return

    let baseTipPercentage = selectedLocation.defaultTipPercentage

    // Adjust tip based on service type
    switch (serviceType) {
      case "restaurant":
        baseTipPercentage = selectedLocation.defaultTipPercentage
        break
      case "hotel":
        baseTipPercentage = selectedLocation.defaultTipPercentage * 0.8 // Hotels typically have lower tip percentages
        break
      case "taxi":
        baseTipPercentage = selectedLocation.defaultTipPercentage * 0.7 // Taxis typically have lower tip percentages
        break
      case "tour":
        baseTipPercentage = selectedLocation.defaultTipPercentage * 1.2 // Tours typically have higher tip percentages
        break
    }

    // Adjust tip based on service quality
    let qualityMultiplier = 1
    switch (serviceQuality) {
      case "excellent":
        qualityMultiplier = 1.2
        break
      case "good":
        qualityMultiplier = 1
        break
      case "average":
        qualityMultiplier = 0.8
        break
      case "poor":
        qualityMultiplier = 0.5
        break
    }

    const calculatedTip = (billAmount * baseTipPercentage * qualityMultiplier) / 100
    setTipAmount(calculatedTip)
    setTotalAmount(billAmount + calculatedTip)
    setShowResult(true)
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="country">Select Country</Label>
          <Select value={selectedCountry} onValueChange={setSelectedCountry}>
            <SelectTrigger>
              <SelectValue placeholder="Choose a country" />
            </SelectTrigger>
            <SelectContent>
              {locations.map((location) => (
                <SelectItem key={location.slug} value={location.slug}>
                  {location.name}, {location.country}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="service-type">Service Type</Label>
          <Select value={serviceType} onValueChange={setServiceType}>
            <SelectTrigger>
              <SelectValue placeholder="Select service type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="restaurant">Restaurant</SelectItem>
              <SelectItem value="hotel">Hotel Service</SelectItem>
              <SelectItem value="taxi">Taxi/Rideshare</SelectItem>
              <SelectItem value="tour">Tour Guide</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="bill-amount">Bill Amount ({selectedLocation?.currency || "USD"})</Label>
          <Input
            id="bill-amount"
            type="number"
            value={billAmount}
            onChange={(e) => setBillAmount(parseFloat(e.target.value) || 0)}
            placeholder="Enter bill amount"
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="service-quality">Service Quality</Label>
          <Select value={serviceQuality} onValueChange={setServiceQuality}>
            <SelectTrigger>
              <SelectValue placeholder="Select service quality" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="excellent">Excellent</SelectItem>
              <SelectItem value="good">Good</SelectItem>
              <SelectItem value="average">Average</SelectItem>
              <SelectItem value="poor">Poor</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button onClick={calculateTip} className="w-full">
          <Calculator className="mr-2 h-4 w-4" />
          Calculate Tip
        </Button>
      </div>

      {showResult && selectedLocation && (
        <Card>
          <CardHeader>
            <CardTitle>Tip Calculation</CardTitle>
            <CardDescription>
              Based on {selectedLocation.name} customs for {serviceType} service
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <span>Bill Amount:</span>
              <span>{formatCurrency(billAmount)}</span>
            </div>
            <div className="flex justify-between">
              <span>Tip Amount:</span>
              <span>{formatCurrency(tipAmount)}</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total Amount:</span>
              <span>{formatCurrency(totalAmount)}</span>
            </div>
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <div className="flex items-start gap-2">
                <Info className="h-4 w-4 mt-1 text-primary" />
                <div>
                  <p className="text-sm font-medium">Local Tipping Notes:</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {selectedLocation.tippingNotes}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
} 