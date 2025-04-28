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

interface ITConsultantService {
  projectType: 'strategy' | 'implementation' | 'assessment' | 'training' | 'custom';
  duration: number;
  expertiseLevel: 'junior' | 'mid' | 'senior' | 'expert';
  baseRate: number;
  serviceQuality: 'poor' | 'average' | 'good' | 'excellent';
  tip: number;
  total: number;
}

export function ITConsultantCalculator() {
  const [projectType, setProjectType] = useState<ITConsultantService['projectType']>('strategy');
  const [duration, setDuration] = useState<number>(1);
  const [expertiseLevel, setExpertiseLevel] = useState<ITConsultantService['expertiseLevel']>('mid');
  const [baseRate, setBaseRate] = useState<number>(0);
  const [serviceQuality, setServiceQuality] = useState<ITConsultantService['serviceQuality']>('good');
  const [result, setResult] = useState<ITConsultantService | null>(null);

  const handleCalculate = () => {
    const projectTypeMultiplier = {
      'strategy': 1.5,
      'implementation': 1.3,
      'assessment': 1.2,
      'training': 1.1,
      'custom': 1.8,
    }[projectType];
    
    const expertiseMultiplier = {
      'junior': 0.8,
      'mid': 1,
      'senior': 1.5,
      'expert': 2,
    }[expertiseLevel];
    
    const qualityMultiplier = {
      'poor': 0.8,
      'average': 1,
      'good': 1.2,
      'excellent': 1.5,
    }[serviceQuality];
    
    const hourlyRate = baseRate * projectTypeMultiplier * expertiseMultiplier;
    const totalRate = hourlyRate * duration;
    const tip = totalRate * 0.15 * qualityMultiplier;
    const total = totalRate + tip;
    
    setResult({
      projectType,
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
          <Label htmlFor="projectType">Project Type</Label>
          <Select
            value={projectType}
            onValueChange={(value: ITConsultantService['projectType']) => setProjectType(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select project type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="strategy">Strategy Development</SelectItem>
              <SelectItem value="implementation">Implementation</SelectItem>
              <SelectItem value="assessment">Assessment</SelectItem>
              <SelectItem value="training">Training</SelectItem>
              <SelectItem value="custom">Custom Solution</SelectItem>
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
            onValueChange={(value: ITConsultantService['expertiseLevel']) => setExpertiseLevel(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select expertise level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="junior">Junior Consultant</SelectItem>
              <SelectItem value="mid">Mid-Level Consultant</SelectItem>
              <SelectItem value="senior">Senior Consultant</SelectItem>
              <SelectItem value="expert">Expert Consultant</SelectItem>
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
            onValueChange={(value: ITConsultantService['serviceQuality']) => setServiceQuality(value)}
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
            <CardTitle>Consulting Service Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between">
              <span>Base Rate (per hour):</span>
              <span>{formatCurrency(result.baseRate)}</span>
            </div>
            <div className="flex justify-between">
              <span>Adjusted Rate (for project type & expertise):</span>
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
              <span>Project Type:</span>
              <span className="capitalize">{result.projectType}</span>
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