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

interface VeterinaryService {
  serviceType: 'consultation' | 'routine' | 'emergency' | 'surgery' | 'specialty';
  complexity: 'simple' | 'moderate' | 'complex' | 'critical';
  basePrice: number;
  serviceQuality: 'poor' | 'average' | 'good' | 'excellent';
  tip: number;
  total: number;
}

export function VeterinaryStaffCalculator() {
  const [serviceType, setServiceType] = useState<VeterinaryService['serviceType']>('consultation');
  const [complexity, setComplexity] = useState<VeterinaryService['complexity']>('simple');
  const [basePrice, setBasePrice] = useState<number>(0);
  const [serviceQuality, setServiceQuality] = useState<VeterinaryService['serviceQuality']>('good');
  const [result, setResult] = useState<VeterinaryService | null>(null);

  const handleCalculate = () => {
    const serviceTypeMultiplier = {
      'consultation': 1,
      'routine': 1.2,
      'emergency': 1.5,
      'surgery': 1.8,
      'specialty': 2,
    }[serviceType];
    
    const complexityMultiplier = {
      'simple': 1,
      'moderate': 1.3,
      'complex': 1.6,
      'critical': 2,
    }[complexity];
    
    const qualityMultiplier = {
      'poor': 0.8,
      'average': 1,
      'good': 1.2,
      'excellent': 1.5,
    }[serviceQuality];
    
    const tip = basePrice * 0.15 * serviceTypeMultiplier * complexityMultiplier * qualityMultiplier;
    const total = basePrice + tip;
    
    setResult({
      serviceType,
      complexity,
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
            onValueChange={(value: VeterinaryService['serviceType']) => setServiceType(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select service type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="consultation">Consultation</SelectItem>
              <SelectItem value="routine">Routine Care</SelectItem>
              <SelectItem value="emergency">Emergency Care</SelectItem>
              <SelectItem value="surgery">Surgery</SelectItem>
              <SelectItem value="specialty">Specialty Care</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="complexity">Complexity</Label>
          <Select
            value={complexity}
            onValueChange={(value: VeterinaryService['complexity']) => setComplexity(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select complexity" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="simple">Simple</SelectItem>
              <SelectItem value="moderate">Moderate</SelectItem>
              <SelectItem value="complex">Complex</SelectItem>
              <SelectItem value="critical">Critical</SelectItem>
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
            onValueChange={(value: VeterinaryService['serviceQuality']) => setServiceQuality(value)}
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
              <span>Base Price:</span>
              <span>{formatCurrency(result.basePrice)}</span>
            </div>
            <div className="flex justify-between">
              <span>Tip (adjusted for service type, complexity & quality):</span>
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
              <span>Complexity:</span>
              <span className="capitalize">{result.complexity}</span>
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