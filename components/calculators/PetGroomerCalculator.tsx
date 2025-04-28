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

interface PetGroomingService {
  serviceType: 'basic' | 'full' | 'special' | 'spa' | 'medical';
  petSize: 'small' | 'medium' | 'large' | 'extra-large';
  basePrice: number;
  serviceQuality: 'poor' | 'average' | 'good' | 'excellent';
  tip: number;
  total: number;
}

export function PetGroomerCalculator() {
  const [serviceType, setServiceType] = useState<PetGroomingService['serviceType']>('basic');
  const [petSize, setPetSize] = useState<PetGroomingService['petSize']>('medium');
  const [basePrice, setBasePrice] = useState<number>(0);
  const [serviceQuality, setServiceQuality] = useState<PetGroomingService['serviceQuality']>('good');
  const [result, setResult] = useState<PetGroomingService | null>(null);

  const handleCalculate = () => {
    const serviceTypeMultiplier = {
      'basic': 1,
      'full': 1.3,
      'special': 1.5,
      'spa': 1.8,
      'medical': 2,
    }[serviceType];
    
    const sizeMultiplier = {
      'small': 0.8,
      'medium': 1,
      'large': 1.3,
      'extra-large': 1.6,
    }[petSize];
    
    const qualityMultiplier = {
      'poor': 0.8,
      'average': 1,
      'good': 1.2,
      'excellent': 1.5,
    }[serviceQuality];
    
    const adjustedPrice = basePrice * serviceTypeMultiplier * sizeMultiplier;
    const tip = adjustedPrice * 0.15 * qualityMultiplier;
    const total = adjustedPrice + tip;
    
    setResult({
      serviceType,
      petSize,
      basePrice,
      serviceQuality,
      tip,
      total,
    });
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="serviceType">Service Type</Label>
          <Select
            value={serviceType}
            onValueChange={(value: PetGroomingService['serviceType']) => setServiceType(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select service type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="basic">Basic Grooming</SelectItem>
              <SelectItem value="full">Full Grooming</SelectItem>
              <SelectItem value="special">Special Treatment</SelectItem>
              <SelectItem value="spa">Spa Package</SelectItem>
              <SelectItem value="medical">Medical Grooming</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="petSize">Pet Size</Label>
          <Select
            value={petSize}
            onValueChange={(value: PetGroomingService['petSize']) => setPetSize(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select pet size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="small">Small (under 20 lbs)</SelectItem>
              <SelectItem value="medium">Medium (20-50 lbs)</SelectItem>
              <SelectItem value="large">Large (50-90 lbs)</SelectItem>
              <SelectItem value="extra-large">Extra Large (90+ lbs)</SelectItem>
            </SelectContent>
          </Select>
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

        <div className="space-y-2">
          <Label htmlFor="serviceQuality">Service Quality</Label>
          <Select
            value={serviceQuality}
            onValueChange={(value: PetGroomingService['serviceQuality']) => setServiceQuality(value)}
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
            <CardTitle>Grooming Service Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between">
              <span>Base Price:</span>
              <span>{formatCurrency(result.basePrice)}</span>
            </div>
            <div className="flex justify-between">
              <span>Adjusted Price (for service type & size):</span>
              <span>{formatCurrency(result.total - result.tip)}</span>
            </div>
            <div className="flex justify-between">
              <span>Tip (adjusted for service quality):</span>
              <span>{formatCurrency(result.tip)}</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total:</span>
              <span>{formatCurrency(result.total)}</span>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Service Type:</span>
              <span className="capitalize">{result.serviceType}</span>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Pet Size:</span>
              <span className="capitalize">{result.petSize.replace('-', ' ')}</span>
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