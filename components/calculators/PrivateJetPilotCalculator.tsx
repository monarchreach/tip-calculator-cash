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

interface PrivateJetService {
  flightType: 'domestic' | 'international' | 'charter' | 'emergency' | 'custom';
  duration: number;
  aircraftType: 'light' | 'midsize' | 'heavy' | 'ultra' | 'custom';
  baseRate: number;
  serviceQuality: 'poor' | 'average' | 'good' | 'excellent';
  tip: number;
  total: number;
}

export function PrivateJetPilotCalculator() {
  const [flightType, setFlightType] = useState<PrivateJetService['flightType']>('domestic');
  const [duration, setDuration] = useState<number>(1);
  const [aircraftType, setAircraftType] = useState<PrivateJetService['aircraftType']>('midsize');
  const [baseRate, setBaseRate] = useState<number>(0);
  const [serviceQuality, setServiceQuality] = useState<PrivateJetService['serviceQuality']>('good');
  const [result, setResult] = useState<PrivateJetService | null>(null);

  const handleCalculate = () => {
    const flightTypeMultiplier = {
      'domestic': 1,
      'international': 1.5,
      'charter': 1.3,
      'emergency': 1.8,
      'custom': 2,
    }[flightType];
    
    const aircraftTypeMultiplier = {
      'light': 1,
      'midsize': 1.3,
      'heavy': 1.6,
      'ultra': 2,
      'custom': 2.5,
    }[aircraftType];
    
    const qualityMultiplier = {
      'poor': 0.8,
      'average': 1,
      'good': 1.2,
      'excellent': 1.5,
    }[serviceQuality];
    
    const hourlyRate = baseRate * flightTypeMultiplier * aircraftTypeMultiplier;
    const totalRate = hourlyRate * duration;
    const tip = totalRate * 0.15 * qualityMultiplier;
    const total = totalRate + tip;
    
    setResult({
      flightType,
      duration,
      aircraftType,
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
          <Label htmlFor="flightType">Flight Type</Label>
          <Select
            value={flightType}
            onValueChange={(value: PrivateJetService['flightType']) => setFlightType(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select flight type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="domestic">Domestic Flight</SelectItem>
              <SelectItem value="international">International Flight</SelectItem>
              <SelectItem value="charter">Charter Flight</SelectItem>
              <SelectItem value="emergency">Emergency Flight</SelectItem>
              <SelectItem value="custom">Custom Flight</SelectItem>
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
          <Label htmlFor="aircraftType">Aircraft Type</Label>
          <Select
            value={aircraftType}
            onValueChange={(value: PrivateJetService['aircraftType']) => setAircraftType(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select aircraft type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light Jet</SelectItem>
              <SelectItem value="midsize">Midsize Jet</SelectItem>
              <SelectItem value="heavy">Heavy Jet</SelectItem>
              <SelectItem value="ultra">Ultra Long Range</SelectItem>
              <SelectItem value="custom">Custom Aircraft</SelectItem>
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
            onValueChange={(value: PrivateJetService['serviceQuality']) => setServiceQuality(value)}
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
            <CardTitle>Private Jet Service Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between">
              <span>Base Rate (per hour):</span>
              <span>{formatCurrency(result.baseRate)}</span>
            </div>
            <div className="flex justify-between">
              <span>Adjusted Rate (for flight type & aircraft):</span>
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
              <span>Flight Type:</span>
              <span className="capitalize">{result.flightType}</span>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Duration:</span>
              <span>{result.duration} hours</span>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Aircraft Type:</span>
              <span className="capitalize">{result.aircraftType}</span>
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