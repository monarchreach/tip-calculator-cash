'use client';

import { useState } from 'react';
import { calculateHomeService } from '@/lib/calculations';
import { HomeService } from '@/lib/types';
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

export function HomeServiceCalculator() {
  const [serviceType, setServiceType] = useState<HomeService['serviceType']>('moving');
  const [duration, setDuration] = useState<number>(0);
  const [complexity, setComplexity] = useState<HomeService['complexity']>('simple');
  const [distance, setDistance] = useState<number>(0);
  const [basePrice, setBasePrice] = useState<number>(0);
  const [result, setResult] = useState<HomeService | null>(null);

  const handleCalculate = () => {
    const service = calculateHomeService(
      serviceType,
      duration,
      complexity,
      distance,
      basePrice
    );
    setResult(service);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="serviceType">Service Type</Label>
          <Select
            value={serviceType}
            onValueChange={(value: HomeService['serviceType']) => setServiceType(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select service type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="moving">Moving Service</SelectItem>
              <SelectItem value="cleaning">Cleaning Service</SelectItem>
              <SelectItem value="handyman">Handyman Service</SelectItem>
              <SelectItem value="delivery">Home Delivery</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="duration">Duration (minutes)</Label>
          <Input
            id="duration"
            type="number"
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
            placeholder="0"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="complexity">Complexity</Label>
          <Select
            value={complexity}
            onValueChange={(value: HomeService['complexity']) => setComplexity(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select complexity" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="simple">Simple</SelectItem>
              <SelectItem value="moderate">Moderate</SelectItem>
              <SelectItem value="complex">Complex</SelectItem>
            </SelectContent>
          </Select>
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
          <Label htmlFor="basePrice">Base Price</Label>
          <Input
            id="basePrice"
            type="number"
            value={basePrice}
            onChange={(e) => setBasePrice(Number(e.target.value))}
            placeholder="0.00"
          />
        </div>
      </div>

      <Button onClick={handleCalculate} className="w-full">
        Calculate
      </Button>

      {result && (
        <Card>
          <CardHeader>
            <CardTitle>Service Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between">
              <span>Base Price:</span>
              <span>{formatCurrency(basePrice)}</span>
            </div>
            <div className="flex justify-between">
              <span>Distance Charge:</span>
              <span>{formatCurrency(distance * 0.5)}</span>
            </div>
            <div className="flex justify-between">
              <span>Duration Charge:</span>
              <span>{formatCurrency(duration * 0.5)}</span>
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
              <span>Complexity:</span>
              <span className="capitalize">{result.complexity}</span>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
} 