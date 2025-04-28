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

interface DogGroomerService {
  serviceType: 'basic' | 'full' | 'specialty' | 'emergency';
  petSize: 'small' | 'medium' | 'large' | 'extra-large';
  price: number;
  serviceQuality: 'poor' | 'average' | 'good' | 'excellent';
  tip: number;
  total: number;
}

export function DogGroomerCalculator() {
  const [serviceType, setServiceType] = useState<DogGroomerService['serviceType']>('basic');
  const [petSize, setPetSize] = useState<DogGroomerService['petSize']>('medium');
  const [price, setPrice] = useState<number>(0);
  const [serviceQuality, setServiceQuality] = useState<DogGroomerService['serviceQuality']>('good');
  const [result, setResult] = useState<DogGroomerService | null>(null);

  const handleCalculate = () => {
    const sizeMultiplier = {
      'small': 1,
      'medium': 1.2,
      'large': 1.4,
      'extra-large': 1.6,
    }[petSize];
    
    const serviceMultiplier = {
      'basic': 1,
      'full': 1.3,
      'specialty': 1.5,
      'emergency': 1.8,
    }[serviceType];
    
    const qualityMultiplier = {
      'poor': 0.8,
      'average': 1,
      'good': 1.2,
      'excellent': 1.5,
    }[serviceQuality];
    
    const tip = price * 0.15 * sizeMultiplier * serviceMultiplier * qualityMultiplier;
    const total = price + tip;
    
    setResult({
      serviceType,
      petSize,
      price,
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
            onValueChange={(value: DogGroomerService['serviceType']) => setServiceType(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select service type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="basic">Basic Grooming</SelectItem>
              <SelectItem value="full">Full Service</SelectItem>
              <SelectItem value="specialty">Specialty Treatment</SelectItem>
              <SelectItem value="emergency">Emergency Grooming</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="petSize">Pet Size</Label>
          <Select
            value={petSize}
            onValueChange={(value: DogGroomerService['petSize']) => setPetSize(value)}
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
          <Label htmlFor="serviceQuality">Service Quality</Label>
          <Select
            value={serviceQuality}
            onValueChange={(value: DogGroomerService['serviceQuality']) => setServiceQuality(value)}
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
              <span>Tip (adjusted for size, service & quality):</span>
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
              <span className="capitalize">{result.petSize}</span>
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