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

interface PetSittingService {
  serviceType: 'drop-in' | 'overnight' | 'extended' | 'special-needs';
  duration: number;
  numberOfPets: number;
  baseRate: number;
  serviceQuality: 'poor' | 'average' | 'good' | 'excellent';
  tip: number;
  total: number;
}

export function PetSitterCalculator() {
  const [serviceType, setServiceType] = useState<PetSittingService['serviceType']>('drop-in');
  const [duration, setDuration] = useState<number>(1);
  const [numberOfPets, setNumberOfPets] = useState<number>(1);
  const [baseRate, setBaseRate] = useState<number>(0);
  const [serviceQuality, setServiceQuality] = useState<PetSittingService['serviceQuality']>('good');
  const [result, setResult] = useState<PetSittingService | null>(null);

  const handleCalculate = () => {
    const serviceTypeMultiplier = {
      'drop-in': 1,
      'overnight': 1.5,
      'extended': 2,
      'special-needs': 2.5,
    }[serviceType];
    
    const petMultiplier = Math.min(1 + (numberOfPets - 1) * 0.3, 3);
    
    const qualityMultiplier = {
      'poor': 0.8,
      'average': 1,
      'good': 1.2,
      'excellent': 1.5,
    }[serviceQuality];
    
    const dailyRate = baseRate * serviceTypeMultiplier * petMultiplier;
    const totalRate = dailyRate * duration;
    const tip = totalRate * 0.15 * qualityMultiplier;
    const total = totalRate + tip;
    
    setResult({
      serviceType,
      duration,
      numberOfPets,
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
            onValueChange={(value: PetSittingService['serviceType']) => setServiceType(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select service type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="drop-in">Drop-in Visit</SelectItem>
              <SelectItem value="overnight">Overnight Stay</SelectItem>
              <SelectItem value="extended">Extended Stay</SelectItem>
              <SelectItem value="special-needs">Special Needs Care</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="duration">Duration (days)</Label>
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
          <Label htmlFor="numberOfPets">Number of Pets</Label>
          <Input
            id="numberOfPets"
            type="number"
            min="1"
            value={numberOfPets}
            onChange={(e) => setNumberOfPets(Number(e.target.value))}
            placeholder="1"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="baseRate">Base Rate (per day)</Label>
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
            onValueChange={(value: PetSittingService['serviceQuality']) => setServiceQuality(value)}
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
            <CardTitle>Pet Sitting Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between">
              <span>Base Rate (per day):</span>
              <span>{formatCurrency(result.baseRate)}</span>
            </div>
            <div className="flex justify-between">
              <span>Total Rate ({result.duration} days):</span>
              <span>{formatCurrency(result.baseRate * result.duration)}</span>
            </div>
            <div className="flex justify-between">
              <span>Tip (adjusted for service type, pets & quality):</span>
              <span>{formatCurrency(result.tip)}</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total:</span>
              <span>{formatCurrency(result.total)}</span>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Service Type:</span>
              <span className="capitalize">{result.serviceType.replace('-', ' ')}</span>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Number of Pets:</span>
              <span>{result.numberOfPets}</span>
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