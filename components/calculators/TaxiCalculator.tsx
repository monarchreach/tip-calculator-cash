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

interface TaxiService {
  serviceType: 'taxi' | 'rideshare' | 'luxury' | 'airport' | 'custom';
  distance: number;
  time: number;
  baseRate: number;
  serviceQuality: 'poor' | 'average' | 'good' | 'excellent';
  tip: number;
  total: number;
}

export function TaxiCalculator() {
  const [serviceType, setServiceType] = useState<TaxiService['serviceType']>('taxi');
  const [distance, setDistance] = useState<number>(5);
  const [time, setTime] = useState<number>(15);
  const [baseRate, setBaseRate] = useState<number>(0);
  const [serviceQuality, setServiceQuality] = useState<TaxiService['serviceQuality']>('good');
  const [result, setResult] = useState<TaxiService | null>(null);

  const handleCalculate = () => {
    const serviceTypeMultiplier = {
      'taxi': 1,
      'rideshare': 0.9,
      'luxury': 1.5,
      'airport': 1.3,
      'custom': 1.2,
    }[serviceType];
    
    const distanceMultiplier = distance < 5 ? 1 : 
                             distance < 10 ? 1.2 :
                             distance < 20 ? 1.4 :
                             distance < 50 ? 1.7 : 2;
    
    const timeMultiplier = time < 15 ? 1 :
                          time < 30 ? 1.2 :
                          time < 60 ? 1.4 : 1.7;
    
    const qualityMultiplier = {
      'poor': 0.8,
      'average': 1,
      'good': 1.2,
      'excellent': 1.5,
    }[serviceQuality];
    
    const adjustedRate = baseRate * serviceTypeMultiplier * distanceMultiplier * timeMultiplier;
    const tip = adjustedRate * 0.15 * qualityMultiplier;
    const total = adjustedRate + tip;
    
    setResult({
      serviceType,
      distance,
      time,
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
            onValueChange={(value: TaxiService['serviceType']) => setServiceType(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select service type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="taxi">Taxi</SelectItem>
              <SelectItem value="rideshare">Rideshare</SelectItem>
              <SelectItem value="luxury">Luxury Car</SelectItem>
              <SelectItem value="airport">Airport Service</SelectItem>
              <SelectItem value="custom">Custom Service</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="distance">Distance (miles)</Label>
          <Input
            id="distance"
            type="number"
            value={distance}
            onChange={(e) => setDistance(Number(e.target.value))}
            min="0"
            placeholder="5"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="time">Time (minutes)</Label>
          <Input
            id="time"
            type="number"
            value={time}
            onChange={(e) => setTime(Number(e.target.value))}
            min="0"
            placeholder="15"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="baseRate">Base Rate (per mile)</Label>
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
            onValueChange={(value: TaxiService['serviceQuality']) => setServiceQuality(value)}
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
            <CardTitle>Taxi/Rideshare Service Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between">
              <span>Base Rate (per mile):</span>
              <span>{formatCurrency(result.baseRate)}</span>
            </div>
            <div className="flex justify-between">
              <span>Adjusted Rate (for service type, distance & time):</span>
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
              <span>Distance:</span>
              <span>{result.distance} miles</span>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Time:</span>
              <span>{result.time} minutes</span>
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