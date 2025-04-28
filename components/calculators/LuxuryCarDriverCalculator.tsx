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

interface LuxuryCarService {
  serviceType: 'airport' | 'event' | 'tour' | 'business' | 'custom';
  duration: number;
  vehicleType: 'sedan' | 'suv' | 'luxury' | 'exotic' | 'custom';
  baseRate: number;
  serviceQuality: 'poor' | 'average' | 'good' | 'excellent';
  tip: number;
  total: number;
}

export function LuxuryCarDriverCalculator() {
  const [serviceType, setServiceType] = useState<LuxuryCarService['serviceType']>('airport');
  const [duration, setDuration] = useState<number>(1);
  const [vehicleType, setVehicleType] = useState<LuxuryCarService['vehicleType']>('sedan');
  const [baseRate, setBaseRate] = useState<number>(0);
  const [serviceQuality, setServiceQuality] = useState<LuxuryCarService['serviceQuality']>('good');
  const [result, setResult] = useState<LuxuryCarService | null>(null);

  const handleCalculate = () => {
    const serviceTypeMultiplier = {
      'airport': 1,
      'event': 1.3,
      'tour': 1.5,
      'business': 1.4,
      'custom': 1.8,
    }[serviceType];
    
    const vehicleTypeMultiplier = {
      'sedan': 1,
      'suv': 1.3,
      'luxury': 1.6,
      'exotic': 2,
      'custom': 2.5,
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
            onValueChange={(value: LuxuryCarService['serviceType']) => setServiceType(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select service type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="airport">Airport Transfer</SelectItem>
              <SelectItem value="event">Event Service</SelectItem>
              <SelectItem value="tour">City Tour</SelectItem>
              <SelectItem value="business">Business Service</SelectItem>
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
            onValueChange={(value: LuxuryCarService['vehicleType']) => setVehicleType(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select vehicle type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sedan">Luxury Sedan</SelectItem>
              <SelectItem value="suv">Luxury SUV</SelectItem>
              <SelectItem value="luxury">Premium Luxury</SelectItem>
              <SelectItem value="exotic">Exotic Vehicle</SelectItem>
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
            onValueChange={(value: LuxuryCarService['serviceQuality']) => setServiceQuality(value)}
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
            <CardTitle>Luxury Car Service Breakdown</CardTitle>
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