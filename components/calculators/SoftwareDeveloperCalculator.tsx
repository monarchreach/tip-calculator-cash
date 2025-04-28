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

interface SoftwareDeveloperService {
  projectType: 'web' | 'mobile' | 'desktop' | 'api' | 'database' | 'custom';
  complexity: 'simple' | 'moderate' | 'complex' | 'enterprise';
  duration: number;
  baseRate: number;
  serviceQuality: 'poor' | 'average' | 'good' | 'excellent';
  tip: number;
  total: number;
}

export function SoftwareDeveloperCalculator() {
  const [projectType, setProjectType] = useState<SoftwareDeveloperService['projectType']>('web');
  const [complexity, setComplexity] = useState<SoftwareDeveloperService['complexity']>('moderate');
  const [duration, setDuration] = useState<number>(1);
  const [baseRate, setBaseRate] = useState<number>(0);
  const [serviceQuality, setServiceQuality] = useState<SoftwareDeveloperService['serviceQuality']>('good');
  const [result, setResult] = useState<SoftwareDeveloperService | null>(null);

  const handleCalculate = () => {
    const projectTypeMultiplier = {
      'web': 1,
      'mobile': 1.2,
      'desktop': 1.3,
      'api': 1.4,
      'database': 1.5,
      'custom': 1.8,
    }[projectType];
    
    const complexityMultiplier = {
      'simple': 1,
      'moderate': 1.3,
      'complex': 1.6,
      'enterprise': 2,
    }[complexity];
    
    const qualityMultiplier = {
      'poor': 0.8,
      'average': 1,
      'good': 1.2,
      'excellent': 1.5,
    }[serviceQuality];
    
    const hourlyRate = baseRate * projectTypeMultiplier * complexityMultiplier;
    const totalRate = hourlyRate * duration;
    const tip = totalRate * 0.15 * qualityMultiplier;
    const total = totalRate + tip;
    
    setResult({
      projectType,
      complexity,
      duration,
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
            onValueChange={(value: SoftwareDeveloperService['projectType']) => setProjectType(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select project type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="web">Web Application</SelectItem>
              <SelectItem value="mobile">Mobile Application</SelectItem>
              <SelectItem value="desktop">Desktop Application</SelectItem>
              <SelectItem value="api">API Development</SelectItem>
              <SelectItem value="database">Database Development</SelectItem>
              <SelectItem value="custom">Custom Solution</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="complexity">Complexity</Label>
          <Select
            value={complexity}
            onValueChange={(value: SoftwareDeveloperService['complexity']) => setComplexity(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select complexity" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="simple">Simple</SelectItem>
              <SelectItem value="moderate">Moderate</SelectItem>
              <SelectItem value="complex">Complex</SelectItem>
              <SelectItem value="enterprise">Enterprise</SelectItem>
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
            onValueChange={(value: SoftwareDeveloperService['serviceQuality']) => setServiceQuality(value)}
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
            <CardTitle>Development Service Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between">
              <span>Base Rate (per hour):</span>
              <span>{formatCurrency(result.baseRate)}</span>
            </div>
            <div className="flex justify-between">
              <span>Adjusted Rate (for project type & complexity):</span>
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
              <span>Complexity:</span>
              <span className="capitalize">{result.complexity}</span>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Duration:</span>
              <span>{result.duration} hours</span>
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