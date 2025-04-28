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

interface AirportShuttleService {
  shuttleType: 'shared' | 'private' | 'executive' | 'group' | 'custom';
  distance: number;
  passengerCount: number;
  baseRate: number;
  serviceQuality: 'poor' | 'average' | 'good' | 'excellent';
  tip: number;
  total: number;
}

export function AirportShuttleCalculator() {
  const [shuttleType, setShuttleType] = useState<AirportShuttleService['shuttleType']>('shared');
  const [distance, setDistance] = useState<number>(10);
  const [passengerCount, setPassengerCount] = useState<number>(1);
  const [baseRate, setBaseRate] = useState<number>(0);
  const [serviceQuality, setServiceQuality] = useState<AirportShuttleService['serviceQuality']>('good');
  const [result, setResult] = useState<AirportShuttleService | null>(null);

  const handleCalculate = () => {
    const shuttleTypeMultiplier = {
      'shared': 1,
      'private': 1.5,
      'executive': 2,
      'group': 1.3,
      'custom': 1.7,
    }[shuttleType];
    
    const distanceMultiplier = distance < 10 ? 1 : 
                             distance < 20 ? 1.2 :
                             distance < 30 ? 1.4 :
                             distance < 50 ? 1.7 : 2;
    
    const passengerMultiplier = passengerCount === 1 ? 1 : 
                              passengerCount < 4 ? 1.2 :
                              passengerCount < 8 ? 1.4 :
                              passengerCount < 15 ? 1.7 : 2;
    
    const qualityMultiplier = {
      'poor': 0.8,
      'average': 1,
      'good': 1.2,
      'excellent': 1.5,
    }[serviceQuality];
    
    const adjustedRate = baseRate * shuttleTypeMultiplier * distanceMultiplier * passengerMultiplier;
    const tip = adjustedRate * 0.15 * qualityMultiplier;
    const total = adjustedRate + tip;
    
    setResult({
      shuttleType,
      distance,
      passengerCount,
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
          <Label htmlFor="shuttleType">Shuttle Type</Label>
          <Select
            value={shuttleType}
            onValueChange={(value: AirportShuttleService['shuttleType']) => setShuttleType(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select shuttle type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="shared">Shared Shuttle</SelectItem>
              <SelectItem value="private">Private Shuttle</SelectItem>
              <SelectItem value="executive">Executive Shuttle</SelectItem>
              <SelectItem value="group">Group Shuttle</SelectItem>
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
            placeholder="10"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="passengerCount">Passenger Count</Label>
          <Input
            id="passengerCount"
            type="number"
            value={passengerCount}
            onChange={(e) => setPassengerCount(Number(e.target.value))}
            min="1"
            placeholder="1"
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
            onValueChange={(value: AirportShuttleService['serviceQuality']) => setServiceQuality(value)}
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
            <CardTitle>Airport Shuttle Service Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between">
              <span>Base Rate (per mile):</span>
              <span>{formatCurrency(result.baseRate)}</span>
            </div>
            <div className="flex justify-between">
              <span>Adjusted Rate (for shuttle type, distance & passengers):</span>
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
              <span>Shuttle Type:</span>
              <span className="capitalize">{result.shuttleType}</span>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Distance:</span>
              <span>{result.distance} miles</span>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Passenger Count:</span>
              <span>{result.passengerCount}</span>
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