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

interface TourGuideService {
  tourType: 'walking' | 'bus' | 'private' | 'group' | 'custom';
  duration: number;
  groupSize: number;
  baseRate: number;
  serviceQuality: 'poor' | 'average' | 'good' | 'excellent';
  tip: number;
  total: number;
}

export function TourGuideCalculator() {
  const [tourType, setTourType] = useState<TourGuideService['tourType']>('walking');
  const [duration, setDuration] = useState<number>(2);
  const [groupSize, setGroupSize] = useState<number>(10);
  const [baseRate, setBaseRate] = useState<number>(0);
  const [serviceQuality, setServiceQuality] = useState<TourGuideService['serviceQuality']>('good');
  const [result, setResult] = useState<TourGuideService | null>(null);

  const handleCalculate = () => {
    const tourTypeMultiplier = {
      'walking': 1,
      'bus': 1.3,
      'private': 1.7,
      'group': 1.2,
      'custom': 1.5,
    }[tourType];
    
    const durationMultiplier = duration < 1 ? 1 : 
                             duration < 2 ? 1.2 :
                             duration < 4 ? 1.4 :
                             duration < 8 ? 1.7 : 2;
    
    const groupSizeMultiplier = groupSize === 1 ? 1.5 : 
                              groupSize < 5 ? 1.3 :
                              groupSize < 10 ? 1.2 :
                              groupSize < 20 ? 1.1 : 1;
    
    const qualityMultiplier = {
      'poor': 0.8,
      'average': 1,
      'good': 1.2,
      'excellent': 1.5,
    }[serviceQuality];
    
    const adjustedRate = baseRate * tourTypeMultiplier * durationMultiplier * groupSizeMultiplier;
    const tip = adjustedRate * 0.15 * qualityMultiplier;
    const total = adjustedRate + tip;
    
    setResult({
      tourType,
      duration,
      groupSize,
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
          <Label htmlFor="tourType">Tour Type</Label>
          <Select
            value={tourType}
            onValueChange={(value: TourGuideService['tourType']) => setTourType(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select tour type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="walking">Walking Tour</SelectItem>
              <SelectItem value="bus">Bus Tour</SelectItem>
              <SelectItem value="private">Private Tour</SelectItem>
              <SelectItem value="group">Group Tour</SelectItem>
              <SelectItem value="custom">Custom Tour</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="duration">Duration (hours)</Label>
          <Input
            id="duration"
            type="number"
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
            min="0.5"
            step="0.5"
            placeholder="2"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="groupSize">Group Size</Label>
          <Input
            id="groupSize"
            type="number"
            value={groupSize}
            onChange={(e) => setGroupSize(Number(e.target.value))}
            min="1"
            placeholder="10"
          />
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
            onValueChange={(value: TourGuideService['serviceQuality']) => setServiceQuality(value)}
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
            <CardTitle>Tour Guide Service Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between">
              <span>Base Rate (per hour):</span>
              <span>{formatCurrency(result.baseRate)}</span>
            </div>
            <div className="flex justify-between">
              <span>Adjusted Rate (for tour type, duration & group size):</span>
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
              <span>Tour Type:</span>
              <span className="capitalize">{result.tourType}</span>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Duration:</span>
              <span>{result.duration} hours</span>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Group Size:</span>
              <span>{result.groupSize} people</span>
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