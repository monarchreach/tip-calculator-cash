'use client';

import { useState } from 'react';
import { calculateTransportationBill } from '@/lib/calculations';
import { TransportationBill } from '@/lib/types';
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

export function TransportationCalculator() {
  const [baseFare, setBaseFare] = useState<number>(0);
  const [distance, setDistance] = useState<number>(0);
  const [waitTime, setWaitTime] = useState<number>(0);
  const [surgeMultiplier, setSurgeMultiplier] = useState<number>(1);
  const [tipPercentage, setTipPercentage] = useState<number>(20);
  const [serviceQuality, setServiceQuality] = useState<TransportationBill['serviceQuality']>('good');
  const [result, setResult] = useState<TransportationBill | null>(null);

  const handleCalculate = () => {
    const bill = calculateTransportationBill(
      baseFare,
      distance,
      waitTime,
      surgeMultiplier,
      tipPercentage,
      serviceQuality
    );
    setResult(bill);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="baseFare">Base Fare</Label>
          <Input
            id="baseFare"
            type="number"
            value={baseFare}
            onChange={(e) => setBaseFare(Number(e.target.value))}
            placeholder="0.00"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="distance">Distance (miles)</Label>
          <Input
            id="distance"
            type="number"
            value={distance}
            onChange={(e) => setDistance(Number(e.target.value))}
            placeholder="0"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="waitTime">Wait Time (minutes)</Label>
          <Input
            id="waitTime"
            type="number"
            value={waitTime}
            onChange={(e) => setWaitTime(Number(e.target.value))}
            placeholder="0"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="surgeMultiplier">Surge Multiplier</Label>
          <Input
            id="surgeMultiplier"
            type="number"
            value={surgeMultiplier}
            onChange={(e) => setSurgeMultiplier(Number(e.target.value))}
            placeholder="1.0"
            step="0.1"
            min="1"
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
          <Label htmlFor="serviceQuality">Service Quality</Label>
          <Select
            value={serviceQuality}
            onValueChange={(value: TransportationBill['serviceQuality']) => setServiceQuality(value)}
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
            <CardTitle>Fare Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between">
              <span>Base Fare:</span>
              <span>{formatCurrency(result.baseFare)}</span>
            </div>
            <div className="flex justify-between">
              <span>Distance Charge:</span>
              <span>{formatCurrency(result.distance * 0.5)}</span>
            </div>
            <div className="flex justify-between">
              <span>Wait Time Charge:</span>
              <span>{formatCurrency(result.waitTime * 0.25)}</span>
            </div>
            <div className="flex justify-between">
              <span>Surge Multiplier:</span>
              <span>{result.surgeMultiplier}x</span>
            </div>
            <div className="flex justify-between">
              <span>Tip:</span>
              <span>{formatCurrency(result.tip)}</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total:</span>
              <span>{formatCurrency(result.total)}</span>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
} 