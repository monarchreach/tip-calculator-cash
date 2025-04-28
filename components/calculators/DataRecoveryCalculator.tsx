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

interface DataRecoveryService {
  recoveryType: 'logical' | 'physical' | 'corrupted' | 'formatted' | 'encrypted' | 'custom';
  dataSize: 'small' | 'medium' | 'large' | 'enterprise';
  complexity: 'simple' | 'moderate' | 'complex' | 'critical';
  baseRate: number;
  serviceQuality: 'poor' | 'average' | 'good' | 'excellent';
  tip: number;
  total: number;
}

export function DataRecoveryCalculator() {
  const [recoveryType, setRecoveryType] = useState<DataRecoveryService['recoveryType']>('logical');
  const [dataSize, setDataSize] = useState<DataRecoveryService['dataSize']>('medium');
  const [complexity, setComplexity] = useState<DataRecoveryService['complexity']>('moderate');
  const [baseRate, setBaseRate] = useState<number>(0);
  const [serviceQuality, setServiceQuality] = useState<DataRecoveryService['serviceQuality']>('good');
  const [result, setResult] = useState<DataRecoveryService | null>(null);

  const handleCalculate = () => {
    const recoveryTypeMultiplier = {
      'logical': 1,
      'physical': 1.5,
      'corrupted': 1.3,
      'formatted': 1.4,
      'encrypted': 1.8,
      'custom': 2,
    }[recoveryType];
    
    const dataSizeMultiplier = {
      'small': 0.8,
      'medium': 1,
      'large': 1.5,
      'enterprise': 2,
    }[dataSize];
    
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
    
    const hourlyRate = baseRate * recoveryTypeMultiplier * dataSizeMultiplier * complexityMultiplier;
    const tip = hourlyRate * 0.15 * qualityMultiplier;
    const total = hourlyRate + tip;
    
    setResult({
      recoveryType,
      dataSize,
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
          <Label htmlFor="recoveryType">Recovery Type</Label>
          <Select
            value={recoveryType}
            onValueChange={(value: DataRecoveryService['recoveryType']) => setRecoveryType(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select recovery type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="logical">Logical Recovery</SelectItem>
              <SelectItem value="physical">Physical Recovery</SelectItem>
              <SelectItem value="corrupted">Corrupted Data</SelectItem>
              <SelectItem value="formatted">Formatted Drive</SelectItem>
              <SelectItem value="encrypted">Encrypted Data</SelectItem>
              <SelectItem value="custom">Custom Recovery</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="dataSize">Data Size</Label>
          <Select
            value={dataSize}
            onValueChange={(value: DataRecoveryService['dataSize']) => setDataSize(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select data size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="small">Small (up to 100GB)</SelectItem>
              <SelectItem value="medium">Medium (100GB-1TB)</SelectItem>
              <SelectItem value="large">Large (1TB-10TB)</SelectItem>
              <SelectItem value="enterprise">Enterprise (10TB+)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="complexity">Complexity</Label>
          <Select
            value={complexity}
            onValueChange={(value: DataRecoveryService['complexity']) => setComplexity(value)}
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
            onValueChange={(value: DataRecoveryService['serviceQuality']) => setServiceQuality(value)}
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
            <CardTitle>Data Recovery Service Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between">
              <span>Base Rate (per hour):</span>
              <span>{formatCurrency(result.baseRate)}</span>
            </div>
            <div className="flex justify-between">
              <span>Adjusted Rate (for recovery type, size & complexity):</span>
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
              <span>Recovery Type:</span>
              <span className="capitalize">{result.recoveryType}</span>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Data Size:</span>
              <span className="capitalize">{result.dataSize}</span>
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