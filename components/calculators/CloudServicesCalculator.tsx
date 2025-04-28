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

interface CloudService {
  serviceType: 'migration' | 'architecture' | 'optimization' | 'security' | 'support' | 'custom';
  scale: 'small' | 'medium' | 'large' | 'enterprise';
  complexity: 'simple' | 'moderate' | 'complex' | 'critical';
  baseRate: number;
  serviceQuality: 'poor' | 'average' | 'good' | 'excellent';
  tip: number;
  total: number;
}

export function CloudServicesCalculator() {
  const [serviceType, setServiceType] = useState<CloudService['serviceType']>('migration');
  const [scale, setScale] = useState<CloudService['scale']>('medium');
  const [complexity, setComplexity] = useState<CloudService['complexity']>('moderate');
  const [baseRate, setBaseRate] = useState<number>(0);
  const [serviceQuality, setServiceQuality] = useState<CloudService['serviceQuality']>('good');
  const [result, setResult] = useState<CloudService | null>(null);

  const handleCalculate = () => {
    const serviceTypeMultiplier = {
      'migration': 1.2,
      'architecture': 1.5,
      'optimization': 1.3,
      'security': 1.4,
      'support': 1,
      'custom': 1.8,
    }[serviceType];
    
    const scaleMultiplier = {
      'small': 0.8,
      'medium': 1,
      'large': 1.5,
      'enterprise': 2,
    }[scale];
    
    const complexityMultiplier = {
      'simple': 1,
      'moderate': 1.3,
      'complex': 1.6,
      'critical': 2,
    }[complexity];
    
    const qualityMultiplier = {
      'poor': 0.8,
      'average': 1,
      'good': 1.2,
      'excellent': 1.5,
    }[serviceQuality];
    
    const hourlyRate = baseRate * serviceTypeMultiplier * scaleMultiplier * complexityMultiplier;
    const tip = hourlyRate * 0.15 * qualityMultiplier;
    const total = hourlyRate + tip;
    
    setResult({
      serviceType,
      scale,
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
          <Label htmlFor="serviceType">Service Type</Label>
          <Select
            value={serviceType}
            onValueChange={(value: CloudService['serviceType']) => setServiceType(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select service type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="migration">Cloud Migration</SelectItem>
              <SelectItem value="architecture">Cloud Architecture</SelectItem>
              <SelectItem value="optimization">Cloud Optimization</SelectItem>
              <SelectItem value="security">Cloud Security</SelectItem>
              <SelectItem value="support">Cloud Support</SelectItem>
              <SelectItem value="custom">Custom Service</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="scale">Scale</Label>
          <Select
            value={scale}
            onValueChange={(value: CloudService['scale']) => setScale(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select scale" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="small">Small (1-10 resources)</SelectItem>
              <SelectItem value="medium">Medium (11-50 resources)</SelectItem>
              <SelectItem value="large">Large (51-200 resources)</SelectItem>
              <SelectItem value="enterprise">Enterprise (200+ resources)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="complexity">Complexity</Label>
          <Select
            value={complexity}
            onValueChange={(value: CloudService['complexity']) => setComplexity(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select complexity" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="simple">Simple</SelectItem>
              <SelectItem value="moderate">Moderate</SelectItem>
              <SelectItem value="complex">Complex</SelectItem>
              <SelectItem value="critical">Critical</SelectItem>
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
            onValueChange={(value: CloudService['serviceQuality']) => setServiceQuality(value)}
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
            <CardTitle>Cloud Service Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between">
              <span>Base Rate (per hour):</span>
              <span>{formatCurrency(result.baseRate)}</span>
            </div>
            <div className="flex justify-between">
              <span>Adjusted Rate (for service type, scale & complexity):</span>
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
              <span>Service Type:</span>
              <span className="capitalize">{result.serviceType}</span>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Scale:</span>
              <span className="capitalize">{result.scale}</span>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Complexity:</span>
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