'use client';

import { useState } from 'react';
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

interface ChiropractorMassageService {
  serviceType: 'chiropractic' | 'massage' | 'combined';
  price: number;
  duration: number;
  tipPercentage: number;
  serviceQuality: 'poor' | 'average' | 'good' | 'excellent';
  tip: number;
  total: number;
  therapistType: 'chiropractor' | 'massage-therapist' | 'both';
}

export function ChiropractorMassageCalculator() {
  const [serviceType, setServiceType] = useState<ChiropractorMassageService['serviceType']>('massage');
  const [therapistType, setTherapistType] = useState<ChiropractorMassageService['therapistType']>('massage-therapist');
  const [price, setPrice] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [tipPercentage, setTipPercentage] = useState<number>(15);
  const [serviceQuality, setServiceQuality] = useState<ChiropractorMassageService['serviceQuality']>('good');
  const [result, setResult] = useState<ChiropractorMassageService | null>(null);

  const handleCalculate = () => {
    const tip = price * (tipPercentage / 100);
    const total = price + tip;
    
    setResult({
      serviceType,
      therapistType,
      price,
      duration,
      tipPercentage,
      serviceQuality,
      tip,
      total,
    });
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="therapistType">Therapist Type</Label>
          <Select
            value={therapistType}
            onValueChange={(value: ChiropractorMassageService['therapistType']) => setTherapistType(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select therapist type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="chiropractor">Chiropractor</SelectItem>
              <SelectItem value="massage-therapist">Massage Therapist</SelectItem>
              <SelectItem value="both">Both</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="serviceType">Service Type</Label>
          <Select
            value={serviceType}
            onValueChange={(value: ChiropractorMassageService['serviceType']) => setServiceType(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select service type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="chiropractic">Chiropractic Adjustment</SelectItem>
              <SelectItem value="massage">Massage Therapy</SelectItem>
              <SelectItem value="combined">Combined Treatment</SelectItem>
            </SelectContent>
          </Select>
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
          <Label htmlFor="tipPercentage">Tip Percentage (%)</Label>
          <Input
            id="tipPercentage"
            type="number"
            value={tipPercentage}
            onChange={(e) => setTipPercentage(Number(e.target.value))}
            placeholder="15"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="serviceQuality">Service Quality</Label>
          <Select
            value={serviceQuality}
            onValueChange={(value: ChiropractorMassageService['serviceQuality']) => setServiceQuality(value)}
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
              <span>Tip ({tipPercentage}%):</span>
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
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Therapist Type:</span>
              <span className="capitalize">{result.therapistType.replace('-', ' ')}</span>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
} 