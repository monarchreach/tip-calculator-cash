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

interface ValetService {
  venueType: 'restaurant' | 'hotel' | 'event' | 'airport' | 'custom';
  duration: number;
  vehicleType: 'standard' | 'luxury' | 'oversized' | 'exotic' | 'custom';
  baseRate: number;
  serviceQuality: 'poor' | 'average' | 'good' | 'excellent';
  tip: number;
  total: number;
}

export function ValetCalculator() {
  const [venueType, setVenueType] = useState<ValetService['venueType']>('restaurant');
  const [duration, setDuration] = useState<number>(2);
  const [vehicleType, setVehicleType] = useState<ValetService['vehicleType']>('standard');
  const [baseRate, setBaseRate] = useState<number>(0);
  const [serviceQuality, setServiceQuality] = useState<ValetService['serviceQuality']>('good');
  const [result, setResult] = useState<ValetService | null>(null);

  const handleCalculate = () => {
    const venueTypeMultiplier = {
      'restaurant': 1,
      'hotel': 1.2,
      'event': 1.3,
      'airport': 1.4,
      'custom': 1.5,
    }[venueType];
    
    const durationMultiplier = duration < 1 ? 1 : 
                             duration < 2 ? 1.2 :
                             duration < 4 ? 1.4 :
                             duration < 8 ? 1.7 : 2;
    
    const vehicleTypeMultiplier = {
      'standard': 1,
      'luxury': 1.3,
      'oversized': 1.5,
      'exotic': 1.7,
      'custom': 1.4,
    }[vehicleType];
    
    const qualityMultiplier = {
      'poor': 0.8,
      'average': 1,
      'good': 1.2,
      'excellent': 1.5,
    }[serviceQuality];
    
    const adjustedRate = baseRate * venueTypeMultiplier * durationMultiplier * vehicleTypeMultiplier;
    const tip = adjustedRate * 0.15 * qualityMultiplier;
    const total = adjustedRate + tip;
    
    setResult({
      venueType,
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
          <Label htmlFor="venueType">Venue Type</Label>
          <Select
            value={venueType}
            onValueChange={(value: ValetService['venueType']) => setVenueType(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select venue type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="restaurant">Restaurant</SelectItem>
              <SelectItem value="hotel">Hotel</SelectItem>
              <SelectItem value="event">Event Venue</SelectItem>
              <SelectItem value="airport">Airport</SelectItem>
              <SelectItem value="custom">Custom Venue</SelectItem>
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
          <Label htmlFor="vehicleType">Vehicle Type</Label>
          <Select
            value={vehicleType}
            onValueChange={(value: ValetService['vehicleType']) => setVehicleType(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select vehicle type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="standard">Standard Vehicle</SelectItem>
              <SelectItem value="luxury">Luxury Vehicle</SelectItem>
              <SelectItem value="oversized">Oversized Vehicle</SelectItem>
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
            onValueChange={(value: ValetService['serviceQuality']) => setServiceQuality(value)}
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
            <CardTitle>Valet Parking Service Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between">
              <span>Base Rate (per hour):</span>
              <span>{formatCurrency(result.baseRate)}</span>
            </div>
            <div className="flex justify-between">
              <span>Adjusted Rate (for venue type, duration & vehicle):</span>
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
              <span>Venue Type:</span>
              <span className="capitalize">{result.venueType}</span>
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