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

interface DJService {
  eventType: 'wedding' | 'corporate' | 'party' | 'club' | 'custom';
  duration: number;
  equipmentLevel: 'basic' | 'standard' | 'premium' | 'luxury' | 'custom';
  baseRate: number;
  serviceQuality: 'poor' | 'average' | 'good' | 'excellent';
  tip: number;
  total: number;
}

export function DJCalculator() {
  const [eventType, setEventType] = useState<DJService['eventType']>('wedding');
  const [duration, setDuration] = useState<number>(4);
  const [equipmentLevel, setEquipmentLevel] = useState<DJService['equipmentLevel']>('standard');
  const [baseRate, setBaseRate] = useState<number>(0);
  const [serviceQuality, setServiceQuality] = useState<DJService['serviceQuality']>('good');
  const [result, setResult] = useState<DJService | null>(null);

  const handleCalculate = () => {
    const eventTypeMultiplier = {
      'wedding': 1.5,
      'corporate': 1.3,
      'party': 1,
      'club': 1.2,
      'custom': 1.4,
    }[eventType];
    
    const equipmentMultiplier = {
      'basic': 1,
      'standard': 1.3,
      'premium': 1.7,
      'luxury': 2.2,
      'custom': 2.5,
    }[equipmentLevel];
    
    const qualityMultiplier = {
      'poor': 0.8,
      'average': 1,
      'good': 1.2,
      'excellent': 1.5,
    }[serviceQuality];
    
    const hourlyRate = baseRate * eventTypeMultiplier * equipmentMultiplier;
    const totalRate = hourlyRate * duration;
    const tip = totalRate * 0.15 * qualityMultiplier;
    const total = totalRate + tip;
    
    setResult({
      eventType,
      duration,
      equipmentLevel,
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
            onValueChange={(value: DJService['eventType']) => setEventType(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select event type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="wedding">Wedding</SelectItem>
              <SelectItem value="corporate">Corporate Event</SelectItem>
              <SelectItem value="party">Private Party</SelectItem>
              <SelectItem value="club">Club/Nightlife</SelectItem>
              <SelectItem value="custom">Custom Event</SelectItem>
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
          <Label htmlFor="equipmentLevel">Equipment Level</Label>
          <Select
            value={equipmentLevel}
            onValueChange={(value: DJService['equipmentLevel']) => setEquipmentLevel(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select equipment level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="basic">Basic Setup</SelectItem>
              <SelectItem value="standard">Standard Setup</SelectItem>
              <SelectItem value="premium">Premium Setup</SelectItem>
              <SelectItem value="luxury">Luxury Setup</SelectItem>
              <SelectItem value="custom">Custom Setup</SelectItem>
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
            onValueChange={(value: DJService['serviceQuality']) => setServiceQuality(value)}
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
            <CardTitle>DJ Service Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between">
              <span>Base Rate (per hour):</span>
              <span>{formatCurrency(result.baseRate)}</span>
            </div>
            <div className="flex justify-between">
              <span>Adjusted Rate (for event type & equipment):</span>
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
              <span>Equipment Level:</span>
              <span className="capitalize">{result.equipmentLevel}</span>
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