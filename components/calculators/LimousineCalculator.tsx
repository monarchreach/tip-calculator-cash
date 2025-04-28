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

interface LimousineService {
  vehicleType: 'sedan' | 'suv' | 'stretch' | 'party' | 'custom';
  duration: number;
  passengerCount: number;
  baseRate: number;
  serviceQuality: 'poor' | 'average' | 'good' | 'excellent';
  tip: number;
  total: number;
}

export function LimousineCalculator() {
  const [vehicleType, setVehicleType] = useState<LimousineService['vehicleType']>('sedan');
  const [duration, setDuration] = useState<number>(1);
  const [passengerCount, setPassengerCount] = useState<number>(4);
  const [baseRate, setBaseRate] = useState<number>(0);
  const [serviceQuality, setServiceQuality] = useState<LimousineService['serviceQuality']>('good');
  const [result, setResult] = useState<LimousineService | null>(null);

  const handleCalculate = () => {
    const vehicleTypeMultiplier = {
      'sedan': 1,
      'suv': 1.3,
      'stretch': 1.7,
      'party': 2,
      'custom': 2.5,
    }[vehicleType];
    
    const durationMultiplier = duration < 1 ? 1 : 
                             duration < 2 ? 1.2 :
                             duration < 4 ? 1.4 :
                             duration < 8 ? 1.7 : 2;
    
    const passengerMultiplier = passengerCount < 4 ? 1 : 
                              passengerCount < 8 ? 1.2 :
                              passengerCount < 12 ? 1.4 :
                              passengerCount < 20 ? 1.7 : 2;
    
    const qualityMultiplier = {
      'poor': 0.8,
      'average': 1,
      'good': 1.2,
      'excellent': 1.5,
    }[serviceQuality];
    
    const adjustedRate = baseRate * vehicleTypeMultiplier * durationMultiplier * passengerMultiplier;
    const tip = adjustedRate * 0.15 * qualityMultiplier;
    const total = adjustedRate + tip;
    
    setResult({
      vehicleType,
      duration,
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
          <Label htmlFor="vehicleType">Vehicle Type</Label>
          <Select
            value={vehicleType}
            onValueChange={(value: LimousineService['vehicleType']) => setVehicleType(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select vehicle type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sedan">Sedan</SelectItem>
              <SelectItem value="suv">SUV</SelectItem>
              <SelectItem value="stretch">Stretch Limo</SelectItem>
              <SelectItem value="party">Party Bus</SelectItem>
              <SelectItem value="custom">Custom Vehicle</SelectItem>
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
            placeholder="1"
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
            placeholder="4"
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
            onValueChange={(value: LimousineService['serviceQuality']) => setServiceQuality(value)}
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
            <CardTitle>Limousine Service Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between">
              <span>Base Rate (per hour):</span>
              <span>{formatCurrency(result.baseRate)}</span>
            </div>
            <div className="flex justify-between">
              <span>Adjusted Rate (for vehicle type, duration & passengers):</span>
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
              <span>Vehicle Type:</span>
              <span className="capitalize">{result.vehicleType}</span>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Duration:</span>
              <span>{result.duration} hours</span>
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