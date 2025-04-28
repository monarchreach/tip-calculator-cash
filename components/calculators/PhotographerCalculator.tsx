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

interface PhotographerService {
  eventType: 'wedding' | 'corporate' | 'portrait' | 'event' | 'custom';
  duration: number;
  packageLevel: 'basic' | 'standard' | 'premium' | 'luxury' | 'custom';
  baseRate: number;
  serviceQuality: 'poor' | 'average' | 'good' | 'excellent';
  tip: number;
  total: number;
}

export function PhotographerCalculator() {
  const [eventType, setEventType] = useState<PhotographerService['eventType']>('wedding');
  const [duration, setDuration] = useState<number>(4);
  const [packageLevel, setPackageLevel] = useState<PhotographerService['packageLevel']>('standard');
  const [baseRate, setBaseRate] = useState<number>(0);
  const [serviceQuality, setServiceQuality] = useState<PhotographerService['serviceQuality']>('good');
  const [result, setResult] = useState<PhotographerService | null>(null);

  const handleCalculate = () => {
    const eventTypeMultiplier = {
      'wedding': 1.5,
      'corporate': 1.3,
      'portrait': 1,
      'event': 1.2,
      'custom': 1.4,
    }[eventType];
    
    const packageMultiplier = {
      'basic': 1,
      'standard': 1.4,
      'premium': 1.8,
      'luxury': 2.3,
      'custom': 2.7,
    }[packageLevel];
    
    const qualityMultiplier = {
      'poor': 0.8,
      'average': 1,
      'good': 1.2,
      'excellent': 1.5,
    }[serviceQuality];
    
    const hourlyRate = baseRate * eventTypeMultiplier * packageMultiplier;
    const totalRate = hourlyRate * duration;
    const tip = totalRate * 0.15 * qualityMultiplier;
    const total = totalRate + tip;
    
    setResult({
      eventType,
      duration,
      packageLevel,
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
          <Label htmlFor="eventType">Event Type</Label>
          <Select
            value={eventType}
            onValueChange={(value: PhotographerService['eventType']) => setEventType(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select event type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="wedding">Wedding</SelectItem>
              <SelectItem value="corporate">Corporate Event</SelectItem>
              <SelectItem value="portrait">Portrait Session</SelectItem>
              <SelectItem value="event">Special Event</SelectItem>
              <SelectItem value="custom">Custom Session</SelectItem>
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
            min="1"
            placeholder="4"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="packageLevel">Package Level</Label>
          <Select
            value={packageLevel}
            onValueChange={(value: PhotographerService['packageLevel']) => setPackageLevel(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select package level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="basic">Basic Package</SelectItem>
              <SelectItem value="standard">Standard Package</SelectItem>
              <SelectItem value="premium">Premium Package</SelectItem>
              <SelectItem value="luxury">Luxury Package</SelectItem>
              <SelectItem value="custom">Custom Package</SelectItem>
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
            onValueChange={(value: PhotographerService['serviceQuality']) => setServiceQuality(value)}
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
            <CardTitle>Photography Service Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between">
              <span>Base Rate (per hour):</span>
              <span>{formatCurrency(result.baseRate)}</span>
            </div>
            <div className="flex justify-between">
              <span>Adjusted Rate (for event type & package):</span>
              <span>{formatCurrency((result.total - result.tip) / result.duration)}</span>
            </div>
            <div className="flex justify-between">
              <span>Total Rate (for {result.duration} hours):</span>
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
              <span>Event Type:</span>
              <span className="capitalize">{result.eventType}</span>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Package Level:</span>
              <span className="capitalize">{result.packageLevel}</span>
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