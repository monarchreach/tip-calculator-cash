"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { CurrencyInput } from "@/components/atoms/currency-input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table"
import { Minus, Plus, Trash2, Receipt, Calculator, Save, Download, Printer } from "lucide-react"
import { cn } from "@/lib/utils"

interface GroupDiningCalculatorProps {
  formatCurrency: (amount: number) => string
}

interface Person {
  id: string
  name: string
  items: {
    id: string
    name: string
    price: number
  }[]
}

export function GroupDiningCalculator({ formatCurrency }: GroupDiningCalculatorProps) {
  const [billAmount, setBillAmount] = useState<number>(0)
  const [taxAmount, setTaxAmount] = useState<number>(0)
  const [tipPercentage, setTipPercentage] = useState<number>(18)
  const [people, setPeople] = useState<Person[]>([
    { 
      id: "1", 
      name: "Person 1", 
      items: [] 
    },
    { 
      id: "2", 
      name: "Person 2", 
      items: [] 
    }
  ])
  const [splitType, setSplitType] = useState<"equal" | "itemized">("equal")
  const [newItemName, setNewItemName] = useState<string>("")
  const [newItemPrice, setNewItemPrice] = useState<number>(0)
  const [newItemPerson, setNewItemPerson] = useState<string>("1")
  const [calculationResult, setCalculationResult] = useState<any>(null)
  const [isResultAnimating, setIsResultAnimating] = useState(false)
  
  // Calculate totals
  const subtotal = splitType === "equal" 
    ? billAmount 
    : people.reduce((sum, person) => 
        sum + person.items.reduce((itemSum, item) => itemSum + item.price, 0), 0)
  
  const tipAmount = (subtotal * tipPercentage) / 100
  const totalAmount = subtotal + taxAmount + tipAmount

  // Calculate when inputs change
  useEffect(() => {
    if (subtotal > 0) {
      calculateSplit()
    }
  }, [billAmount, taxAmount, tipPercentage, people, splitType, subtotal])

  // Calculate the split
  const calculateSplit = () => {
    setIsResultAnimating(true)
    
    let result: any = {
      subtotal: subtotal,
      tax: taxAmount,
      tip: tipAmount,
      total: totalAmount,
      tipPercentage: tipPercentage,
      perPerson: []
    }
    
    if (splitType === "equal") {
      // Equal split calculation
      const numPeople = people.length
      const perPersonSubtotal = subtotal / numPeople
      const perPersonTax = taxAmount / numPeople
      const perPersonTip = tipAmount / numPeople
      const perPersonTotal = totalAmount / numPeople
      
      result.perPerson = people.map(person => ({
        id: person.id,
        name: person.name,
        subtotal: perPersonSubtotal,
        tax: perPersonTax,
        tip: perPersonTip,
        total: perPersonTotal
      }))
    } else {
      // Itemized split calculation
      const totalItemized = people.reduce((sum, person) => 
        sum + person.items.reduce((itemSum, item) => itemSum + item.price, 0), 0)
      
      // If no items, default to equal split
      if (totalItemized === 0) {
        const numPeople = people.length
        const perPersonTotal = totalAmount / numPeople
        
        result.perPerson = people.map(person => ({
          id: person.id,
          name: person.name,
          subtotal: 0,
          tax: 0,
          tip: 0,
          total: perPersonTotal
        }))
      } else {
        result.perPerson = people.map(person => {
          const personSubtotal = person.items.reduce((sum, item) => sum + item.price, 0)
          const ratioOfTotal = personSubtotal / subtotal
          const personTax = taxAmount * ratioOfTotal
          const personTip = tipAmount * ratioOfTotal
          const personTotal = personSubtotal + personTax + personTip
          
          return {
            id: person.id,
            name: person.name,
            subtotal: personSubtotal,
            tax: personTax,
            tip: personTip,
            total: personTotal,
            items: person.items
          }
        })
      }
    }
    
    setCalculationResult(result)
    
    // Reset animation state after animation duration
    setTimeout(() => {
      setIsResultAnimating(false)
    }, 500)
  }

  // Add a new person
  const addPerson = () => {
    const newId = (people.length + 1).toString()
    setPeople([...people, { id: newId, name: `Person ${newId}`, items: [] }])
  }

  // Remove a person
  const removePerson = (id: string) => {
    if (people.length > 1) {
      setPeople(people.filter(person => person.id !== id))
    }
  }

  // Update person's name
  const updatePersonName = (id: string, name: string) => {
    setPeople(
      people.map(person => 
        person.id === id ? { ...person, name } : person
      )
    )
  }

  // Add a new item
  const addItem = () => {
    if (newItemName && newItemPrice > 0 && newItemPerson) {
      const targetPerson = people.find(p => p.id === newItemPerson)
      
      if (targetPerson) {
        const newItem = {
          id: Date.now().toString(),
          name: newItemName,
          price: newItemPrice
        }
        
        setPeople(people.map(person => 
          person.id === newItemPerson 
            ? { ...person, items: [...person.items, newItem] } 
            : person
        ))
        
        // Reset form
        setNewItemName("")
        setNewItemPrice(0)
      }
    }
  }

  // Remove an item
  const removeItem = (personId: string, itemId: string) => {
    setPeople(people.map(person => 
      person.id === personId 
        ? { ...person, items: person.items.filter(item => item.id !== itemId) } 
        : person
    ))
  }

  // Handle tip percentage button click
  const handleTipButtonClick = (percentage: number) => {
    setTipPercentage(percentage)
  }

  // Print the calculation
  const printCalculation = () => {
    window.print()
  }

  return (
    <div className="space-y-8">
      <Tabs defaultValue="equal" className="w-full" onValueChange={(value) => setSplitType(value as "equal" | "itemized")}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="equal">Equal Split</TabsTrigger>
          <TabsTrigger value="itemized">Itemized Split</TabsTrigger>
        </TabsList>
        
        <TabsContent value="equal" className="space-y-6 mt-4">
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
            
            <div className="grid gap-2">
              <Label htmlFor="tax-amount">Tax Amount</Label>
              <CurrencyInput
                id="tax-amount"
                value={taxAmount}
                onChange={(value) => setTaxAmount(value)}
                className="input-validation"
              />
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="itemized" className="space-y-6 mt-4">
          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="grid gap-2">
                <Label htmlFor="item-name">Item Description</Label>
                <Input
                  id="item-name"
                  value={newItemName}
                  onChange={(e) => setNewItemName(e.target.value)}
                  placeholder="e.g., Pizza, Soda"
                />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="item-price">Price</Label>
                <CurrencyInput
                  id="item-price"
                  value={newItemPrice}
                  onChange={(value) => setNewItemPrice(value)}
                />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="item-person">Assign To</Label>
                <select
                  id="item-person"
                  value={newItemPerson}
                  onChange={(e) => setNewItemPerson(e.target.value)}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                >
                  {people.map(person => (
                    <option key={person.id} value={person.id}>{person.name}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <Button type="button" onClick={addItem} className="w-full">
              <Plus className="mr-2 h-4 w-4" /> Add Item
            </Button>
          </div>
          
          <div className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="tax-amount-itemized">Tax Amount</Label>
              <CurrencyInput
                id="tax-amount-itemized"
                value={taxAmount}
                onChange={(value) => setTaxAmount(value)}
                className="input-validation"
              />
            </div>
          </div>
          
          {people.map(person => (
            <Card key={person.id} className="overflow-hidden">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <Input
                    value={person.name}
                    onChange={(e) => updatePersonName(person.id, e.target.value)}
                    className="font-medium text-lg p-0 h-auto border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => removePerson(person.id)}
                    disabled={people.length <= 1}
                  >
                    <Trash2 className="h-4 w-4 text-muted-foreground" />
                  </Button>
                </div>
              </CardHeader>
              
              <CardContent>
                {person.items.length > 0 ? (
                  <ul className="space-y-2">
                    {person.items.map(item => (
                      <li key={item.id} className="flex items-center justify-between py-1 border-b border-muted">
                        <span>{item.name}</span>
                        <div className="flex items-center gap-2">
                          <span>{formatCurrency(item.price)}</span>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            onClick={() => removeItem(person.id, item.id)}
                            className="h-7 w-7"
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-muted-foreground text-sm italic py-2">No items added yet</p>
                )}
                
                <div className="mt-2 text-right font-medium">
                  Subtotal: {formatCurrency(person.items.reduce((sum, item) => sum + item.price, 0))}
                </div>
              </CardContent>
            </Card>
          ))}
          
          <Button onClick={addPerson} variant="outline" className="w-full">
            <Plus className="mr-2 h-4 w-4" /> Add Person
          </Button>
        </TabsContent>
      </Tabs>
      
      <div className="space-y-4">
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
        
        <Button className="w-full" onClick={calculateSplit}>
          <Calculator className="mr-2 h-4 w-4" /> Calculate Split
        </Button>
      </div>
      
      {calculationResult && (
        <div className={`calculator-result ${isResultAnimating ? 'updated result-bounce' : ''}`}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">Bill Summary</h3>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={printCalculation}>
                <Printer className="h-4 w-4 mr-1" /> Print
              </Button>
            </div>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Subtotal</TableCell>
                    <TableCell className="text-right">{formatCurrency(calculationResult.subtotal)}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Tax</TableCell>
                    <TableCell className="text-right">{formatCurrency(calculationResult.tax)}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Tip ({calculationResult.tipPercentage}%)</TableCell>
                    <TableCell className="text-right">{formatCurrency(calculationResult.tip)}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-lg">Total</TableCell>
                    <TableCell className="text-right font-bold text-lg">{formatCurrency(calculationResult.total)}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Per Person</h4>
              <div className="space-y-3">
                {calculationResult.perPerson.map((person: any) => (
                  <div key={person.id} className="p-3 border rounded-md">
                    <div className="flex justify-between font-medium">
                      <span>{person.name}</span>
                      <span>{formatCurrency(person.total)}</span>
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      <div className="flex justify-between">
                        <span>Food & Drinks</span>
                        <span>{formatCurrency(person.subtotal)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tax</span>
                        <span>{formatCurrency(person.tax)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tip</span>
                        <span>{formatCurrency(person.tip)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 