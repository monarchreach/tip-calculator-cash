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

interface PersonalChefService {
  serviceType: 'dinner' | 'brunch' | 'party' | 'catering' | 'custom';
  guests: number;
  mealComplexity: 'simple' | 'moderate' | 'complex' | 'gourmet' | 'custom';
  baseRate: number;
  serviceQuality: 'poor' | 'average' | 'good' | 'excellent';
  tip: number;
  total: number;
}

export function PersonalChefCalculator() {
  const [serviceType, setServiceType] = useState<PersonalChefService['serviceType']>('dinner');
  const [guests, setGuests] = useState<number>(1);
  const [mealComplexity, setMealComplexity] = useState<PersonalChefService['mealComplexity']>('moderate');
  const [baseRate, setBaseRate] = useState<number>(0);
  const [serviceQuality, setServiceQuality] = useState<PersonalChefService['serviceQuality']>('good');
  const [result, setResult] = useState<PersonalChefService | null>(null);

  const handleCalculate = () => {
    const serviceTypeMultiplier = {
      'dinner': 1,
      'brunch': 1.2,
      'party': 1.5,
      'catering': 1.8,
      'custom': 2,
    }[serviceType];
    
    const complexityMultiplier = {
      'simple': 1,
      'moderate': 1.3,
      'complex': 1.6,
      'gourmet': 2,
      'custom': 2.5,
    }[mealComplexity];
    
    const qualityMultiplier = {
      'poor': 0.8,
      'average': 1,
      'good': 1.2,
      'excellent': 1.5,
    }[serviceQuality];
    
    const guestMultiplier = Math.max(1, guests / 4);
    const adjustedRate = baseRate * serviceTypeMultiplier * complexityMultiplier * guestMultiplier;
    const tip = adjustedRate * 0.15 * qualityMultiplier;
    const total = adjustedRate + tip;
    
    setResult({
      serviceType,
      guests,
      mealComplexity,
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
            onValueChange={(value: PersonalChefService['serviceType']) => setServiceType(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select service type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="dinner">Dinner Service</SelectItem>
              <SelectItem value="brunch">Brunch Service</SelectItem>
              <SelectItem value="party">Party Service</SelectItem>
              <SelectItem value="catering">Catering Service</SelectItem>
              <SelectItem value="custom">Custom Service</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="guests">Number of Guests</Label>
          <Input
            id="guests"
            type="number"
            min="1"
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            placeholder="1"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="mealComplexity">Meal Complexity</Label>
          <Select
            value={mealComplexity}
            onValueChange={(value: PersonalChefService['mealComplexity']) => setMealComplexity(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select meal complexity" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="simple">Simple Menu</SelectItem>
              <SelectItem value="moderate">Moderate Menu</SelectItem>
              <SelectItem value="complex">Complex Menu</SelectItem>
              <SelectItem value="gourmet">Gourmet Menu</SelectItem>
              <SelectItem value="custom">Custom Menu</SelectItem>
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
            onValueChange={(value: PersonalChefService['serviceQuality']) => setServiceQuality(value)}
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
            <CardTitle>Personal Chef Service Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between">
              <span>Base Rate (per service):</span>
              <span>{formatCurrency(result.baseRate)}</span>
            </div>
            <div className="flex justify-between">
              <span>Adjusted Rate (for service type, complexity & guests):</span>
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
              <span>Number of Guests:</span>
              <span>{result.guests}</span>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Meal Complexity:</span>
              <span className="capitalize">{result.mealComplexity}</span>
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