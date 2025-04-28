'use client';

import { useState } from 'react';
import { calculateRestaurantBill } from '@/lib/calculations';
import { RestaurantBill } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { formatCurrency } from '@/lib/utils';

export function RestaurantCalculator() {
  const [subtotal, setSubtotal] = useState<number>(0);
  const [taxRate, setTaxRate] = useState<number>(8.875);
  const [serviceCharge, setServiceCharge] = useState<number>(0);
  const [tipPercentage, setTipPercentage] = useState<number>(20);
  const [partySize, setPartySize] = useState<number>(1);
  const [serviceQuality, setServiceQuality] = useState<RestaurantBill['serviceQuality']>('good');
  const [result, setResult] = useState<RestaurantBill | null>(null);

  const handleCalculate = () => {
    const bill = calculateRestaurantBill(
      subtotal,
      taxRate,
      serviceCharge,
      tipPercentage,
      partySize,
      serviceQuality
    );
    setResult(bill);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="subtotal">Bill Subtotal</Label>
          <Input
            id="subtotal"
            type="number"
            value={subtotal}
            onChange={(e) => setSubtotal(Number(e.target.value))}
            placeholder="0.00"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="taxRate">Tax Rate (%)</Label>
          <Input
            id="taxRate"
            type="number"
            value={taxRate}
            onChange={(e) => setTaxRate(Number(e.target.value))}
            placeholder="8.875"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="serviceCharge">Service Charge (%)</Label>
          <Input
            id="serviceCharge"
            type="number"
            value={serviceCharge}
            onChange={(e) => setServiceCharge(Number(e.target.value))}
            placeholder="0"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="tipPercentage">Tip Percentage (%)</Label>
          <Input
            id="tipPercentage"
            type="number"
            value={tipPercentage}
            onChange={(e) => setTipPercentage(Number(e.target.value))}
            placeholder="20"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="partySize">Party Size</Label>
          <Input
            id="partySize"
            type="number"
            value={partySize}
            onChange={(e) => setPartySize(Number(e.target.value))}
            placeholder="1"
            min="1"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="serviceQuality">Service Quality</Label>
          <Select
            value={serviceQuality}
            onValueChange={(value: RestaurantBill['serviceQuality']) => setServiceQuality(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select service quality" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="poor">Poor</SelectItem>
              <SelectItem value="average">Average</SelectItem>
              <SelectItem value="good">Good</SelectItem>
              <SelectItem value="excellent">Excellent</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button onClick={handleCalculate} className="w-full">
        Calculate
      </Button>

      {result && (
        <Card>
          <CardHeader>
            <CardTitle>Bill Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>{formatCurrency(result.subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax:</span>
              <span>{formatCurrency(result.tax)}</span>
            </div>
            <div className="flex justify-between">
              <span>Service Charge:</span>
              <span>{formatCurrency(result.serviceCharge)}</span>
            </div>
            <div className="flex justify-between">
              <span>Tip:</span>
              <span>{formatCurrency(result.tip)}</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total:</span>
              <span>{formatCurrency(result.total)}</span>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Per Person:</span>
              <span>{formatCurrency(result.total / result.partySize)}</span>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
} 