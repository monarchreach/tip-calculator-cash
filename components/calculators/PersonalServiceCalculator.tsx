'use client';

import { useState } from 'react';
import { calculatePersonalService } from '@/lib/calculations';
import { PersonalService } from '@/lib/types';
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

export function PersonalServiceCalculator() {
  const [serviceType, setServiceType] = useState<PersonalService['serviceType']>('hair');
  const [duration, setDuration] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [tipPercentage, setTipPercentage] = useState<number>(20);
  const [serviceQuality, setServiceQuality] = useState<PersonalService['serviceQuality']>('good');
  const [result, setResult] = useState<PersonalService | null>(null);

  const handleCalculate = () => {
    const service = calculatePersonalService(
      serviceType,
      duration,
      price,
      tipPercentage,
      serviceQuality
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
            onValueChange={(value: PersonalService['serviceType']) => setServiceType(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select service type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="hair">Hair Service</SelectItem>
              <SelectItem value="nails">Nail Service</SelectItem>
              <SelectItem value="massage">Massage</SelectItem>
              <SelectItem value="spa">Spa Treatment</SelectItem>
              <SelectItem value="tattoo">Tattoo</SelectItem>
              <SelectItem value="personal-training">Personal Training</SelectItem>
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
          <Label htmlFor="price">Service Price</Label>
          <Input
            id="price"
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            placeholder="0.00"
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
            onValueChange={(value: PersonalService['serviceQuality']) => setServiceQuality(value)}
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
            <CardTitle>Service Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between">
              <span>Service Price:</span>
              <span>{formatCurrency(result.price)}</span>
            </div>
            <div className="flex justify-between">
              <span>Tip ({result.tipPercentage}%):</span>
              <span>{formatCurrency(result.tip)}</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total:</span>
              <span>{formatCurrency(result.total)}</span>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Duration:</span>
              <span>{result.duration} minutes</span>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Service Quality:</span>
              <span className="capitalize">{result.serviceQuality}</span>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
} 