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

interface PetWalkingService {
  walkType: 'regular' | 'extended' | 'group' | 'special-needs';
  duration: number;
  numberOfPets: number;
  baseRate: number;
  serviceQuality: 'poor' | 'average' | 'good' | 'excellent';
  tip: number;
  total: number;
}

export function PetWalkerCalculator() {
  const [walkType, setWalkType] = useState<PetWalkingService['walkType']>('regular');
  const [duration, setDuration] = useState<number>(30);
  const [numberOfPets, setNumberOfPets] = useState<number>(1);
  const [baseRate, setBaseRate] = useState<number>(0);
  const [serviceQuality, setServiceQuality] = useState<PetWalkingService['serviceQuality']>('good');
  const [result, setResult] = useState<PetWalkingService | null>(null);

  const handleCalculate = () => {
    const walkTypeMultiplier = {
      'regular': 1,
      'extended': 1.5,
      'group': 0.8,
      'special-needs': 2,
    }[walkType];
    
    const durationMultiplier = Math.min(1 + (duration - 30) * 0.02, 2);
    
    const petMultiplier = Math.min(1 + (numberOfPets - 1) * 0.3, 3);
    
    const qualityMultiplier = {
      'poor': 0.8,
      'average': 1,
      'good': 1.2,
      'excellent': 1.5,
    }[serviceQuality];
    
    const walkRate = baseRate * walkTypeMultiplier * durationMultiplier * petMultiplier;
    const tip = walkRate * 0.15 * qualityMultiplier;
    const total = walkRate + tip;
    
    setResult({
      walkType,
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
          <Label htmlFor="walkType">Walk Type</Label>
          <Select
            value={walkType}
            onValueChange={(value: PetWalkingService['walkType']) => setWalkType(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select walk type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="regular">Regular Walk</SelectItem>
              <SelectItem value="extended">Extended Walk</SelectItem>
              <SelectItem value="group">Group Walk</SelectItem>
              <SelectItem value="special-needs">Special Needs Walk</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="duration">Duration (minutes)</Label>
          <Input
            id="duration"
            type="number"
            min="15"
            step="15"
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
            placeholder="30"
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
          <Label htmlFor="baseRate">Base Rate (per walk)</Label>
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
            onValueChange={(value: PetWalkingService['serviceQuality']) => setServiceQuality(value)}
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
            <CardTitle>Pet Walking Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between">
              <span>Base Rate:</span>
              <span>{formatCurrency(result.baseRate)}</span>
            </div>
            <div className="flex justify-between">
              <span>Adjusted Rate (for duration, pets & walk type):</span>
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
              <span>Walk Type:</span>
              <span className="capitalize">{result.walkType.replace('-', ' ')}</span>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Duration:</span>
              <span>{result.duration} minutes</span>
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