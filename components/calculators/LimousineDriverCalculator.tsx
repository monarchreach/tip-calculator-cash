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
  serviceType: 'airport' | 'wedding' | 'corporate' | 'special' | 'hourly' | 'custom';
  duration: number;
  vehicleType: 'sedan' | 'stretch' | 'suv' | 'luxury' | 'party' | 'custom';
  baseRate: number;
  serviceQuality: 'poor' | 'average' | 'good' | 'excellent';
  tip: number;
  total: number;
}

export function LimousineDriverCalculator() {
  const [serviceType, setServiceType] = useState<LimousineService['serviceType']>('airport');
  const [duration, setDuration] = useState<number>(1);
  const [vehicleType, setVehicleType] = useState<LimousineService['vehicleType']>('sedan');
  const [baseRate, setBaseRate] = useState<number>(0);
  const [serviceQuality, setServiceQuality] = useState<LimousineService['serviceQuality']>('good');
  const [result, setResult] = useState<LimousineService | null>(null);

  const handleCalculate = () => {
    const serviceTypeMultiplier = {
      'airport': 1,
      'wedding': 1.5,
      'corporate': 1.3,
      'special': 1.4,
      'hourly': 1.2,
      'custom': 1.8,
    }[serviceType];
    
    const vehicleTypeMultiplier = {
      'sedan': 1,
      'stretch': 1.5,
      'suv': 1.3,
      'luxury': 1.8,
      'party': 1.6,
      'custom': 2,
    }[vehicleType];
    
    const qualityMultiplier = {
      'poor': 0.8,
      'average': 1,
      'good': 1.2,
      'excellent': 1.5,
    }[serviceQuality];
    
    const hourlyRate = baseRate * serviceTypeMultiplier * vehicleTypeMultiplier;
    const totalRate = hourlyRate * duration;
    const tip = totalRate * 0.15 * qualityMultiplier;
    const total = totalRate + tip;
    
    setResult({
      serviceType,
      duration,
      vehicleType,
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
            onValueChange={(value: LimousineService['serviceType']) => setServiceType(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select service type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="airport">Airport Transfer</SelectItem>
              <SelectItem value="wedding">Wedding Service</SelectItem>
              <SelectItem value="corporate">Corporate Event</SelectItem>
              <SelectItem value="special">Special Occasion</SelectItem>
              <SelectItem value="hourly">Hourly Service</SelectItem>
              <SelectItem value="custom">Custom Service</SelectItem>
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
          <Label htmlFor="vehicleType">Vehicle Type</Label>
          <Select
            value={vehicleType}
            onValueChange={(value: LimousineService['vehicleType']) => setVehicleType(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select vehicle type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sedan">Luxury Sedan</SelectItem>
              <SelectItem value="stretch">Stretch Limousine</SelectItem>
              <SelectItem value="suv">Luxury SUV</SelectItem>
              <SelectItem value="luxury">Luxury Vehicle</SelectItem>
              <SelectItem value="party">Party Bus</SelectItem>
              <SelectItem value="custom">Custom Vehicle</SelectItem>
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
              <span>Adjusted Rate (for service type & vehicle):</span>
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
              <span>Duration:</span>
              <span>{result.duration} hours</span>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Vehicle Type:</span>
              <span className="capitalize">{result.vehicleType}</span>
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