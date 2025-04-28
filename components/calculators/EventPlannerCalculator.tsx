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

interface EventPlannerService {
  eventType: 'wedding' | 'corporate' | 'social' | 'charity' | 'custom';
  guestCount: number;
  complexity: 'simple' | 'moderate' | 'complex' | 'luxury' | 'custom';
  baseRate: number;
  serviceQuality: 'poor' | 'average' | 'good' | 'excellent';
  tip: number;
  total: number;
}

export function EventPlannerCalculator() {
  const [eventType, setEventType] = useState<EventPlannerService['eventType']>('wedding');
  const [guestCount, setGuestCount] = useState<number>(50);
  const [complexity, setComplexity] = useState<EventPlannerService['complexity']>('moderate');
  const [baseRate, setBaseRate] = useState<number>(0);
  const [serviceQuality, setServiceQuality] = useState<EventPlannerService['serviceQuality']>('good');
  const [result, setResult] = useState<EventPlannerService | null>(null);

  const handleCalculate = () => {
    const eventTypeMultiplier = {
      'wedding': 1.5,
      'corporate': 1.3,
      'social': 1,
      'charity': 1.2,
      'custom': 1.4,
    }[eventType];
    
    const guestCountMultiplier = guestCount < 50 ? 1 : 
                                guestCount < 100 ? 1.2 :
                                guestCount < 200 ? 1.4 :
                                guestCount < 500 ? 1.7 : 2;
    
    const complexityMultiplier = {
      'simple': 1,
      'moderate': 1.3,
      'complex': 1.7,
      'luxury': 2.2,
      'custom': 2.5,
    }[complexity];
    
    const qualityMultiplier = {
      'poor': 0.8,
      'average': 1,
      'good': 1.2,
      'excellent': 1.5,
    }[serviceQuality];
    
    const adjustedRate = baseRate * eventTypeMultiplier * guestCountMultiplier * complexityMultiplier;
    const tip = adjustedRate * 0.15 * qualityMultiplier;
    const total = adjustedRate + tip;
    
    setResult({
      eventType,
      guestCount,
      complexity,
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
            onValueChange={(value: EventPlannerService['eventType']) => setEventType(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select event type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="wedding">Wedding</SelectItem>
              <SelectItem value="corporate">Corporate Event</SelectItem>
              <SelectItem value="social">Social Event</SelectItem>
              <SelectItem value="charity">Charity Event</SelectItem>
              <SelectItem value="custom">Custom Event</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="guestCount">Guest Count</Label>
          <Input
            id="guestCount"
            type="number"
            value={guestCount}
            onChange={(e) => setGuestCount(Number(e.target.value))}
            min="1"
            placeholder="50"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="complexity">Event Complexity</Label>
          <Select
            value={complexity}
            onValueChange={(value: EventPlannerService['complexity']) => setComplexity(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select complexity" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="simple">Simple</SelectItem>
              <SelectItem value="moderate">Moderate</SelectItem>
              <SelectItem value="complex">Complex</SelectItem>
              <SelectItem value="luxury">Luxury</SelectItem>
              <SelectItem value="custom">Custom</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="baseRate">Base Rate</Label>
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
            onValueChange={(value: EventPlannerService['serviceQuality']) => setServiceQuality(value)}
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
            <CardTitle>Event Planning Service Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between">
              <span>Base Rate:</span>
              <span>{formatCurrency(result.baseRate)}</span>
            </div>
            <div className="flex justify-between">
              <span>Adjusted Rate (for event type, guests & complexity):</span>
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
              <span>Guest Count:</span>
              <span>{result.guestCount}</span>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Event Complexity:</span>
              <span className="capitalize">{result.complexity}</span>
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