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

interface MassageService {
  massageType: 'swedish' | 'deep' | 'sports' | 'prenatal' | 'custom';
  duration: number;
  expertiseLevel: 'beginner' | 'intermediate' | 'advanced' | 'master' | 'custom';
  baseRate: number;
  serviceQuality: 'poor' | 'average' | 'good' | 'excellent';
  tip: number;
  total: number;
}

export function MassageTherapistCalculator() {
  const [massageType, setMassageType] = useState<MassageService['massageType']>('swedish');
  const [duration, setDuration] = useState<number>(1);
  const [expertiseLevel, setExpertiseLevel] = useState<MassageService['expertiseLevel']>('intermediate');
  const [baseRate, setBaseRate] = useState<number>(0);
  const [serviceQuality, setServiceQuality] = useState<MassageService['serviceQuality']>('good');
  const [result, setResult] = useState<MassageService | null>(null);

  const handleCalculate = () => {
    const massageTypeMultiplier = {
      'swedish': 1,
      'deep': 1.2,
      'sports': 1.3,
      'prenatal': 1.4,
      'custom': 1.8,
    }[massageType];
    
    const expertiseMultiplier = {
      'beginner': 1,
      'intermediate': 1.2,
      'advanced': 1.4,
      'master': 1.8,
      'custom': 2,
    }[expertiseLevel];
    
    const qualityMultiplier = {
      'poor': 0.8,
      'average': 1,
      'good': 1.2,
      'excellent': 1.5,
    }[serviceQuality];
    
    const hourlyRate = baseRate * massageTypeMultiplier * expertiseMultiplier;
    const totalRate = hourlyRate * duration;
    const tip = totalRate * 0.15 * qualityMultiplier;
    const total = totalRate + tip;
    
    setResult({
      massageType,
      duration,
      expertiseLevel,
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
          <Label htmlFor="massageType">Massage Type</Label>
          <Select
            value={massageType}
            onValueChange={(value: MassageService['massageType']) => setMassageType(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select massage type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="swedish">Swedish Massage</SelectItem>
              <SelectItem value="deep">Deep Tissue</SelectItem>
              <SelectItem value="sports">Sports Massage</SelectItem>
              <SelectItem value="prenatal">Prenatal Massage</SelectItem>
              <SelectItem value="custom">Custom Massage</SelectItem>
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
          <Label htmlFor="expertiseLevel">Expertise Level</Label>
          <Select
            value={expertiseLevel}
            onValueChange={(value: MassageService['expertiseLevel']) => setExpertiseLevel(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select expertise level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="beginner">Beginner</SelectItem>
              <SelectItem value="intermediate">Intermediate</SelectItem>
              <SelectItem value="advanced">Advanced</SelectItem>
              <SelectItem value="master">Master</SelectItem>
              <SelectItem value="custom">Custom</SelectItem>
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
            onValueChange={(value: MassageService['serviceQuality']) => setServiceQuality(value)}
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
            <CardTitle>Massage Service Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between">
              <span>Base Rate (per hour):</span>
              <span>{formatCurrency(result.baseRate)}</span>
            </div>
            <div className="flex justify-between">
              <span>Adjusted Rate (for massage type & expertise):</span>
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
              <span>Massage Type:</span>
              <span className="capitalize">{result.massageType}</span>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Duration:</span>
              <span>{result.duration} hours</span>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Expertise Level:</span>
              <span className="capitalize">{result.expertiseLevel}</span>
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