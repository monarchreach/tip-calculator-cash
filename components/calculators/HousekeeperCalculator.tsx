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

interface HousekeeperService {
  serviceType: 'regular' | 'deep' | 'move' | 'special' | 'custom';
  homeSize: 'small' | 'medium' | 'large' | 'mansion' | 'custom';
  complexity: 'simple' | 'moderate' | 'complex' | 'luxury' | 'custom';
  baseRate: number;
  serviceQuality: 'poor' | 'average' | 'good' | 'excellent';
  tip: number;
  total: number;
}

export function HousekeeperCalculator() {
  const [serviceType, setServiceType] = useState<HousekeeperService['serviceType']>('regular');
  const [homeSize, setHomeSize] = useState<HousekeeperService['homeSize']>('medium');
  const [complexity, setComplexity] = useState<HousekeeperService['complexity']>('moderate');
  const [baseRate, setBaseRate] = useState<number>(0);
  const [serviceQuality, setServiceQuality] = useState<HousekeeperService['serviceQuality']>('good');
  const [result, setResult] = useState<HousekeeperService | null>(null);

  const handleCalculate = () => {
    const serviceTypeMultiplier = {
      'regular': 1,
      'deep': 1.5,
      'move': 2,
      'special': 1.8,
      'custom': 2.5,
    }[serviceType];
    
    const homeSizeMultiplier = {
      'small': 1,
      'medium': 1.3,
      'large': 1.6,
      'mansion': 2,
      'custom': 2.5,
    }[homeSize];
    
    const complexityMultiplier = {
      'simple': 1,
      'moderate': 1.2,
      'complex': 1.5,
      'luxury': 2,
      'custom': 2.5,
    }[complexity];
    
    const qualityMultiplier = {
      'poor': 0.8,
      'average': 1,
      'good': 1.2,
      'excellent': 1.5,
    }[serviceQuality];
    
    const adjustedRate = baseRate * serviceTypeMultiplier * homeSizeMultiplier * complexityMultiplier;
    const tip = adjustedRate * 0.15 * qualityMultiplier;
    const total = adjustedRate + tip;
    
    setResult({
      serviceType,
      homeSize,
      complexity,
      baseRate,
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
            onValueChange={(value: HousekeeperService['serviceType']) => setServiceType(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select service type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="regular">Regular Cleaning</SelectItem>
              <SelectItem value="deep">Deep Cleaning</SelectItem>
              <SelectItem value="move">Move In/Out</SelectItem>
              <SelectItem value="special">Special Event</SelectItem>
              <SelectItem value="custom">Custom Service</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="homeSize">Home Size</Label>
          <Select
            value={homeSize}
            onValueChange={(value: HousekeeperService['homeSize']) => setHomeSize(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select home size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="small">Small (1-2 bedrooms)</SelectItem>
              <SelectItem value="medium">Medium (3-4 bedrooms)</SelectItem>
              <SelectItem value="large">Large (5+ bedrooms)</SelectItem>
              <SelectItem value="mansion">Mansion</SelectItem>
              <SelectItem value="custom">Custom Size</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="complexity">Complexity</Label>
          <Select
            value={complexity}
            onValueChange={(value: HousekeeperService['complexity']) => setComplexity(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select complexity" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="simple">Simple</SelectItem>
              <SelectItem value="moderate">Moderate</SelectItem>
              <SelectItem value="complex">Complex</SelectItem>
              <SelectItem value="luxury">Luxury</SelectItem>
              <SelectItem value="custom">Custom</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="baseRate">Base Rate (per service)</Label>
          <Input
            id="baseRate"
            type="number"
            value={baseRate}
            onChange={(e) => setBaseRate(Number(e.target.value))}
            placeholder="0.00"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="serviceQuality">Service Quality</Label>
          <Select
            value={serviceQuality}
            onValueChange={(value: HousekeeperService['serviceQuality']) => setServiceQuality(value)}
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
            <CardTitle>Housekeeping Service Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between">
              <span>Base Rate (per service):</span>
              <span>{formatCurrency(result.baseRate)}</span>
            </div>
            <div className="flex justify-between">
              <span>Adjusted Rate (for service type, size & complexity):</span>
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
              <span>Home Size:</span>
              <span className="capitalize">{result.homeSize}</span>
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