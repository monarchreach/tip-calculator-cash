"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { CurrencyInput } from "@/components/atoms/currency-input"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table"
import { QrCode, Smartphone, CreditCard, Receipt, Calculator, Printer, CopyIcon, Download } from "lucide-react"
import { cn } from "@/lib/utils"

interface DigitalTippingCalculatorProps {
  formatCurrency: (amount: number) => string
}

const PAYMENT_APPS = [
  { id: "venmo", name: "Venmo", handle: "@" },
  { id: "cashapp", name: "Cash App", handle: "$" },
  { id: "paypal", name: "PayPal", handle: "@" },
  { id: "zelle", name: "Zelle", handle: "" },
]

export function DigitalTippingCalculator({ formatCurrency }: DigitalTippingCalculatorProps) {
  const [billAmount, setBillAmount] = useState<number>(0)
  const [tipPercentage, setTipPercentage] = useState<number>(18)
  const [paymentApp, setPaymentApp] = useState<string>("venmo")
  const [username, setUsername] = useState<string>("")
  const [includeMessage, setIncludeMessage] = useState<boolean>(true)
  const [tipMessage, setTipMessage] = useState<string>("Thank you for the great service!")
  const [calculationResult, setCalculationResult] = useState<any>(null)
  const [paymentMethod, setPaymentMethod] = useState<"qrcode" | "link" | "message">("qrcode")
  const [isResultAnimating, setIsResultAnimating] = useState(false)
  
  // Calculate tip and total
  const tipAmount = (billAmount * tipPercentage) / 100
  const totalAmount = billAmount + tipAmount

  // Generate payment link
  const getPaymentLink = () => {
    if (!username) return "";
    
    const appConfig = PAYMENT_APPS.find(app => app.id === paymentApp);
    
    if (!appConfig) return "";
    
    const handle = appConfig.handle + username;
    const message = includeMessage ? encodeURIComponent(tipMessage) : "";
    
    switch (paymentApp) {
      case "venmo":
        return `https://venmo.com/${username}?txn=pay&amount=${totalAmount.toFixed(2)}&note=${message}`;
      case "cashapp":
        return `https://cash.app/${handle}/${totalAmount.toFixed(2)}`;
      case "paypal":
        return `https://paypal.me/${username}/${totalAmount.toFixed(2)}`;
      case "zelle":
        // Zelle doesn't have direct links, but we'll return instructions
        return `Open your Zelle app and send $${totalAmount.toFixed(2)} to ${username}`;
      default:
        return "";
    }
  };

  // Calculate when inputs change
  useEffect(() => {
    if (billAmount > 0) {
      calculateTip();
    }
  }, [billAmount, tipPercentage, paymentApp, username, includeMessage, tipMessage]);

  // Calculate the tip
  const calculateTip = () => {
    setIsResultAnimating(true);
    
    setCalculationResult({
      subtotal: billAmount,
      tipPercentage: tipPercentage,
      tipAmount: tipAmount,
      totalAmount: totalAmount,
      paymentApp: PAYMENT_APPS.find(app => app.id === paymentApp)?.name || "",
      username: username,
      paymentLink: getPaymentLink(),
      qrCodeContent: getPaymentLink(),
      message: includeMessage ? tipMessage : ""
    });

    // Reset animation state after animation duration
    setTimeout(() => {
      setIsResultAnimating(false);
    }, 500);
  };

  // Handle tip percentage button click
  const handleTipButtonClick = (percentage: number) => {
    setTipPercentage(percentage);
  };

  // Copy payment link to clipboard
  const copyPaymentLink = () => {
    if (calculationResult?.paymentLink) {
      navigator.clipboard.writeText(calculationResult.paymentLink);
      // Could add toast notification here
    }
  };

  // Print the calculation
  const printCalculation = () => {
    window.print();
  };

  return (
    <div className="space-y-8">
      <div className="grid gap-6">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="bill-amount">Bill Amount</Label>
            <CurrencyInput
              id="bill-amount"
              value={billAmount}
              onChange={(value) => setBillAmount(value)}
              className="input-validation"
            />
          </div>
          
          <div>
            <Label>Tip Percentage</Label>
            <div className="flex flex-wrap gap-2 mt-2">
              {[15, 18, 20, 22, 25].map((percentage) => (
                <Button
                  key={percentage}
                  type="button"
                  variant="outline"
                  className={cn(
                    "tip-btn",
                    tipPercentage === percentage && "active"
                  )}
                  onClick={() => handleTipButtonClick(percentage)}
                >
                  {percentage}%
                </Button>
              ))}
              
              <div className="flex items-center gap-1 ml-2">
                <Input
                  type="number"
                  value={tipPercentage}
                  onChange={(e) => setTipPercentage(parseFloat(e.target.value) || 0)}
                  className="w-20 h-10"
                  min="0"
                  max="100"
                />
                <span>%</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="payment-app">Payment App</Label>
            <Select
              value={paymentApp}
              onValueChange={(value) => setPaymentApp(value)}
            >
              <SelectTrigger id="payment-app">
                <SelectValue placeholder="Select a payment app" />
              </SelectTrigger>
              <SelectContent>
                {PAYMENT_APPS.map((app) => (
                  <SelectItem key={app.id} value={app.id}>
                    {app.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="username">
              {PAYMENT_APPS.find(app => app.id === paymentApp)?.name || "App"} Username
            </Label>
            <div className="flex">
              <div className="flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted">
                {PAYMENT_APPS.find(app => app.id === paymentApp)?.handle || ""}
              </div>
              <Input
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="rounded-l-none"
                placeholder="username"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Switch
              id="include-message"
              checked={includeMessage}
              onCheckedChange={setIncludeMessage}
            />
            <Label htmlFor="include-message">Include a message</Label>
          </div>
          
          {includeMessage && (
            <div className="grid gap-2">
              <Label htmlFor="tip-message">Message</Label>
              <Input
                id="tip-message"
                value={tipMessage}
                onChange={(e) => setTipMessage(e.target.value)}
                placeholder="Thank you for the great service!"
              />
            </div>
          )}
        </div>
        
        <div className="grid gap-2">
          <Label>Payment Method</Label>
          <Tabs defaultValue="qrcode" onValueChange={(value) => setPaymentMethod(value as "qrcode" | "link" | "message")}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="qrcode">
                <QrCode className="h-4 w-4 mr-2" />
                QR Code
              </TabsTrigger>
              <TabsTrigger value="link">
                <CreditCard className="h-4 w-4 mr-2" />
                Payment Link
              </TabsTrigger>
              <TabsTrigger value="message">
                <Smartphone className="h-4 w-4 mr-2" />
                Text Message
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        <Button className="w-full" onClick={calculateTip}>
          <Calculator className="mr-2 h-4 w-4" /> Calculate Digital Tip
        </Button>
      </div>
      
      {calculationResult && (
        <div className={`calculator-result ${isResultAnimating ? 'updated result-bounce' : ''}`}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">Digital Tip Summary</h3>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={printCalculation}>
                <Printer className="h-4 w-4 mr-1" /> Print
              </Button>
            </div>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Bill Amount</TableCell>
                    <TableCell className="text-right">{formatCurrency(calculationResult.subtotal)}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Tip ({calculationResult.tipPercentage}%)</TableCell>
                    <TableCell className="text-right">{formatCurrency(calculationResult.tipAmount)}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-lg">Total</TableCell>
                    <TableCell className="text-right font-bold text-lg">{formatCurrency(calculationResult.totalAmount)}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              
              <div className="mt-6 space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">Payment Method</h4>
                  <p className="font-medium">{calculationResult.paymentApp}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">Username</h4>
                  <p className="font-medium">
                    {PAYMENT_APPS.find(app => app.id === paymentApp)?.handle || ""}
                    {calculationResult.username}
                  </p>
                </div>
                
                {calculationResult.message && (
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">Message</h4>
                    <p className="italic">{calculationResult.message}</p>
                  </div>
                )}
              </div>
            </div>
            
            <div className="space-y-4">
              {paymentMethod === "qrcode" && (
                <Card>
                  <CardHeader className="py-3">
                    <CardTitle className="text-center text-sm">Scan to Pay</CardTitle>
                  </CardHeader>
                  <CardContent className="flex justify-center py-3">
                    <div className="relative bg-white p-4 rounded-lg shadow-sm">
                      <div className="w-48 h-48 bg-muted flex items-center justify-center">
                        {/* This is where a real QR code would go */}
                        <QrCode className="h-24 w-24 text-muted-foreground" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
              
              {paymentMethod === "link" && (
                <Card>
                  <CardHeader className="py-3">
                    <CardTitle className="text-center text-sm">Payment Link</CardTitle>
                  </CardHeader>
                  <CardContent className="py-3">
                    <div className="flex">
                      <Input 
                        value={calculationResult.paymentLink}
                        readOnly
                        className="rounded-r-none"
                      />
                      <Button 
                        variant="secondary" 
                        className="rounded-l-none"
                        onClick={copyPaymentLink}
                      >
                        <CopyIcon className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      Copy this link and send it to the recipient via email, text message, or any messaging app.
                    </p>
                  </CardContent>
                </Card>
              )}
              
              {paymentMethod === "message" && (
                <Card>
                  <CardHeader className="py-3">
                    <CardTitle className="text-center text-sm">Text Message</CardTitle>
                  </CardHeader>
                  <CardContent className="py-3">
                    <div className="bg-muted rounded-lg p-4">
                      <p className="text-sm">
                        Hi, I'd like to send you a tip of {formatCurrency(calculationResult.tipAmount)} for your service.
                        {calculationResult.message ? ` ${calculationResult.message}` : ''}
                        {calculationResult.paymentApp === "Venmo" || calculationResult.paymentApp === "PayPal" || calculationResult.paymentApp === "Cash App" ? 
                          ` My ${calculationResult.paymentApp} username is ${PAYMENT_APPS.find(app => app.name === calculationResult.paymentApp)?.handle || ""}${calculationResult.username}.` : 
                          ` I can send it via ${calculationResult.paymentApp}.`}
                      </p>
                    </div>
                    <div className="flex justify-end mt-3">
                      <Button 
                        variant="secondary" 
                        className="text-xs"
                        onClick={() => {
                          const text = `Hi, I'd like to send you a tip of ${formatCurrency(calculationResult.tipAmount)} for your service.${calculationResult.message ? ` ${calculationResult.message}` : ''} ${calculationResult.paymentApp === "Venmo" || calculationResult.paymentApp === "PayPal" || calculationResult.paymentApp === "Cash App" ? `My ${calculationResult.paymentApp} username is ${PAYMENT_APPS.find(app => app.name === calculationResult.paymentApp)?.handle || ""}${calculationResult.username}.` : `I can send it via ${calculationResult.paymentApp}.`}`;
                          navigator.clipboard.writeText(text);
                        }}
                      >
                        <CopyIcon className="h-3 w-3 mr-1" /> Copy to Clipboard
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
              
              <div className="rounded-lg border bg-muted/30 p-4">
                <h4 className="text-sm font-medium mb-2">Digital Tipping Tips</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-0.5">•</span>
                    <span>Always confirm the username before sending money</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-0.5">•</span>
                    <span>Include a specific reference to the service in your message</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-0.5">•</span>
                    <span>Some payment apps charge fees for certain payment methods</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 