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

interface PetTrainingService {
  trainingType: 'basic' | 'advanced' | 'behavioral' | 'specialized' | 'group';
  sessionDuration: number;
  baseRate: number;
  serviceQuality: 'poor' | 'average' | 'good' | 'excellent';
  tip: number;
  total: number;
}

export function PetTrainerCalculator() {
  const [trainingType, setTrainingType] = useState<PetTrainingService['trainingType']>('basic');
  const [sessionDuration, setSessionDuration] = useState<number>(1);
  const [baseRate, setBaseRate] = useState<number>(0);
  const [serviceQuality, setServiceQuality] = useState<PetTrainingService['serviceQuality']>('good');
  const [result, setResult] = useState<PetTrainingService | null>(null);

  const handleCalculate = () => {
    const trainingTypeMultiplier = {
      'basic': 1,
      'advanced': 1.3,
      'behavioral': 1.5,
      'specialized': 1.8,
      'group': 0.8,
    }[trainingType];
    
    const durationMultiplier = Math.min(1 + (sessionDuration - 1) * 0.1, 2);
    
    const qualityMultiplier = {
      'poor': 0.8,
      'average': 1,
      'good': 1.2,
      'excellent': 1.5,
    }[serviceQuality];
    
    const hourlyRate = baseRate * trainingTypeMultiplier;
    const sessionRate = hourlyRate * sessionDuration;
    const tip = sessionRate * 0.15 * qualityMultiplier;
    const total = sessionRate + tip;
    
    setResult({
      trainingType,
      sessionDuration,
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
          <Label htmlFor="trainingType">Training Type</Label>
          <Select
            value={trainingType}
            onValueChange={(value: PetTrainingService['trainingType']) => setTrainingType(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select training type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="basic">Basic Obedience</SelectItem>
              <SelectItem value="advanced">Advanced Training</SelectItem>
              <SelectItem value="behavioral">Behavioral Training</SelectItem>
              <SelectItem value="specialized">Specialized Training</SelectItem>
              <SelectItem value="group">Group Training</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="sessionDuration">Session Duration (hours)</Label>
          <Input
            id="sessionDuration"
            type="number"
            min="1"
            value={sessionDuration}
            onChange={(e) => setSessionDuration(Number(e.target.value))}
            placeholder="1"
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
            onValueChange={(value: PetTrainingService['serviceQuality']) => setServiceQuality(value)}
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
            <CardTitle>Training Session Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between">
              <span>Base Rate (per hour):</span>
              <span>{formatCurrency(result.baseRate)}</span>
            </div>
            <div className="flex justify-between">
              <span>Session Rate ({result.sessionDuration} hours):</span>
              <span>{formatCurrency(result.baseRate * result.sessionDuration)}</span>
            </div>
            <div className="flex justify-between">
              <span>Tip (adjusted for training type & quality):</span>
              <span>{formatCurrency(result.tip)}</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total:</span>
              <span>{formatCurrency(result.total)}</span>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Training Type:</span>
              <span className="capitalize">{result.trainingType}</span>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Session Duration:</span>
              <span>{result.sessionDuration} hours</span>
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