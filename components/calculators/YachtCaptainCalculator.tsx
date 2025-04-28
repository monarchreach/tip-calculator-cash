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

interface YachtService {
  charterType: 'day' | 'weekend' | 'weekly' | 'monthly' | 'custom';
  duration: number;
  yachtSize: 'small' | 'medium' | 'large' | 'mega' | 'custom';
  baseRate: number;
  serviceQuality: 'poor' | 'average' | 'good' | 'excellent';
  tip: number;
  total: number;
}

export function YachtCaptainCalculator() {
  const [charterType, setCharterType] = useState<YachtService['charterType']>('day');
  const [duration, setDuration] = useState<number>(1);
  const [yachtSize, setYachtSize] = useState<YachtService['yachtSize']>('medium');
  const [baseRate, setBaseRate] = useState<number>(0);
  const [serviceQuality, setServiceQuality] = useState<YachtService['serviceQuality']>('good');
  const [result, setResult] = useState<YachtService | null>(null);

  const handleCalculate = () => {
    const charterTypeMultiplier = {
      'day': 1,
      'weekend': 1.3,
      'weekly': 1.5,
      'monthly': 1.8,
      'custom': 2,
    }[charterType];
    
    const yachtSizeMultiplier = {
      'small': 1,
      'medium': 1.5,
      'large': 2,
      'mega': 3,
      'custom': 4,
    }[yachtSize];
    
    const qualityMultiplier = {
      'poor': 0.8,
      'average': 1,
      'good': 1.2,
      'excellent': 1.5,
    }[serviceQuality];
    
    const dailyRate = baseRate * charterTypeMultiplier * yachtSizeMultiplier;
    const totalRate = dailyRate * duration;
    const tip = totalRate * 0.15 * qualityMultiplier;
    const total = totalRate + tip;
    
    setResult({
      charterType,
      duration,
      yachtSize,
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
          <Label htmlFor="charterType">Charter Type</Label>
          <Select
            value={charterType}
            onValueChange={(value: YachtService['charterType']) => setCharterType(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select charter type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="day">Day Charter</SelectItem>
              <SelectItem value="weekend">Weekend Charter</SelectItem>
              <SelectItem value="weekly">Weekly Charter</SelectItem>
              <SelectItem value="monthly">Monthly Charter</SelectItem>
              <SelectItem value="custom">Custom Charter</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="duration">Duration (days)</Label>
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
          <Label htmlFor="yachtSize">Yacht Size</Label>
          <Select
            value={yachtSize}
            onValueChange={(value: YachtService['yachtSize']) => setYachtSize(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select yacht size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="small">Small (30-50ft)</SelectItem>
              <SelectItem value="medium">Medium (50-100ft)</SelectItem>
              <SelectItem value="large">Large (100-200ft)</SelectItem>
              <SelectItem value="mega">Mega Yacht (200ft+)</SelectItem>
              <SelectItem value="custom">Custom Size</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="baseRate">Base Rate (per day)</Label>
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
            onValueChange={(value: YachtService['serviceQuality']) => setServiceQuality(value)}
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
            <CardTitle>Yacht Charter Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between">
              <span>Base Rate (per day):</span>
              <span>{formatCurrency(result.baseRate)}</span>
            </div>
            <div className="flex justify-between">
              <span>Adjusted Rate (for charter type & yacht size):</span>
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
              <span>Charter Type:</span>
              <span className="capitalize">{result.charterType}</span>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Duration:</span>
              <span>{result.duration} days</span>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Yacht Size:</span>
              <span className="capitalize">{result.yachtSize}</span>
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