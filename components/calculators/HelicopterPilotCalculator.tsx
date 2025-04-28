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

interface HelicopterService {
  flightType: 'scenic' | 'transport' | 'rescue' | 'tour' | 'custom';
  duration: number;
  helicopterType: 'light' | 'medium' | 'heavy' | 'luxury' | 'custom';
  baseRate: number;
  serviceQuality: 'poor' | 'average' | 'good' | 'excellent';
  tip: number;
  total: number;
}

export function HelicopterPilotCalculator() {
  const [flightType, setFlightType] = useState<HelicopterService['flightType']>('scenic');
  const [duration, setDuration] = useState<number>(1);
  const [helicopterType, setHelicopterType] = useState<HelicopterService['helicopterType']>('medium');
  const [baseRate, setBaseRate] = useState<number>(0);
  const [serviceQuality, setServiceQuality] = useState<HelicopterService['serviceQuality']>('good');
  const [result, setResult] = useState<HelicopterService | null>(null);

  const handleCalculate = () => {
    const flightTypeMultiplier = {
      'scenic': 1,
      'transport': 1.3,
      'rescue': 1.8,
      'tour': 1.5,
      'custom': 2,
    }[flightType];
    
    const helicopterTypeMultiplier = {
      'light': 1,
      'medium': 1.3,
      'heavy': 1.6,
      'luxury': 2,
      'custom': 2.5,
    }[helicopterType];
    
    const qualityMultiplier = {
      'poor': 0.8,
      'average': 1,
      'good': 1.2,
      'excellent': 1.5,
    }[serviceQuality];
    
    const hourlyRate = baseRate * flightTypeMultiplier * helicopterTypeMultiplier;
    const totalRate = hourlyRate * duration;
    const tip = totalRate * 0.15 * qualityMultiplier;
    const total = totalRate + tip;
    
    setResult({
      flightType,
      duration,
      helicopterType,
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
          <Label htmlFor="flightType">Flight Type</Label>
          <Select
            value={flightType}
            onValueChange={(value: HelicopterService['flightType']) => setFlightType(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select flight type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="scenic">Scenic Flight</SelectItem>
              <SelectItem value="transport">Transport Flight</SelectItem>
              <SelectItem value="rescue">Rescue Mission</SelectItem>
              <SelectItem value="tour">Tour Flight</SelectItem>
              <SelectItem value="custom">Custom Flight</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="duration">Duration (hours)</Label>
          <Input
            id="duration"
            type="number"
            min="1"
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
            placeholder="1"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="helicopterType">Helicopter Type</Label>
          <Select
            value={helicopterType}
            onValueChange={(value: HelicopterService['helicopterType']) => setHelicopterType(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select helicopter type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light Helicopter</SelectItem>
              <SelectItem value="medium">Medium Helicopter</SelectItem>
              <SelectItem value="heavy">Heavy Helicopter</SelectItem>
              <SelectItem value="luxury">Luxury Helicopter</SelectItem>
              <SelectItem value="custom">Custom Helicopter</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="baseRate">Base Rate (per hour)</Label>
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
            onValueChange={(value: HelicopterService['serviceQuality']) => setServiceQuality(value)}
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
            <CardTitle>Helicopter Service Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between">
              <span>Base Rate (per hour):</span>
              <span>{formatCurrency(result.baseRate)}</span>
            </div>
            <div className="flex justify-between">
              <span>Adjusted Rate (for flight type & helicopter):</span>
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
              <span>Flight Type:</span>
              <span className="capitalize">{result.flightType}</span>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Duration:</span>
              <span>{result.duration} hours</span>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Helicopter Type:</span>
              <span className="capitalize">{result.helicopterType}</span>
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