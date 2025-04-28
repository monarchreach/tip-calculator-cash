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

interface HomeHealthcareService {
  providerType: 'nurse' | 'caregiver' | 'therapist' | 'aide';
  visitType: 'regular' | 'emergency' | 'overnight' | 'extended';
  hourlyRate: number;
  hours: number;
  tipPercentage: number;
  serviceQuality: 'poor' | 'average' | 'good' | 'excellent';
  tip: number;
  total: number;
}

export function HomeHealthcareCalculator() {
  const [providerType, setProviderType] = useState<HomeHealthcareService['providerType']>('caregiver');
  const [visitType, setVisitType] = useState<HomeHealthcareService['visitType']>('regular');
  const [hourlyRate, setHourlyRate] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [tipPercentage, setTipPercentage] = useState<number>(10);
  const [serviceQuality, setServiceQuality] = useState<HomeHealthcareService['serviceQuality']>('good');
  const [result, setResult] = useState<HomeHealthcareService | null>(null);

  const handleCalculate = () => {
    const basePrice = hourlyRate * hours;
    const tip = basePrice * (tipPercentage / 100);
    const total = basePrice + tip;
    
    setResult({
      providerType,
      visitType,
      hourlyRate,
      hours,
      tipPercentage,
      serviceQuality,
      tip,
      total,
    });
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="providerType">Provider Type</Label>
          <Select
            value={providerType}
            onValueChange={(value: HomeHealthcareService['providerType']) => setProviderType(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select provider type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="nurse">Registered Nurse</SelectItem>
              <SelectItem value="caregiver">Caregiver</SelectItem>
              <SelectItem value="therapist">Therapist</SelectItem>
              <SelectItem value="aide">Home Health Aide</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="visitType">Visit Type</Label>
          <Select
            value={visitType}
            onValueChange={(value: HomeHealthcareService['visitType']) => setVisitType(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select visit type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="regular">Regular Visit</SelectItem>
              <SelectItem value="emergency">Emergency Visit</SelectItem>
              <SelectItem value="overnight">Overnight Care</SelectItem>
              <SelectItem value="extended">Extended Care</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="hourlyRate">Hourly Rate</Label>
          <Input
            id="hourlyRate"
            type="number"
            value={hourlyRate}
            onChange={(e) => setHourlyRate(Number(e.target.value))}
            placeholder="0.00"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="hours">Hours of Service</Label>
          <Input
            id="hours"
            type="number"
            value={hours}
            onChange={(e) => setHours(Number(e.target.value))}
            placeholder="0"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="tipPercentage">Tip Percentage (%)</Label>
          <Input
            id="tipPercentage"
            type="number"
            value={tipPercentage}
            onChange={(e) => setTipPercentage(Number(e.target.value))}
            placeholder="10"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="serviceQuality">Service Quality</Label>
          <Select
            value={serviceQuality}
            onValueChange={(value: HomeHealthcareService['serviceQuality']) => setServiceQuality(value)}
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
            <CardTitle>Service Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between">
              <span>Base Rate ({hours} hours):</span>
              <span>{formatCurrency(result.hourlyRate * result.hours)}</span>
            </div>
            <div className="flex justify-between">
              <span>Tip ({tipPercentage}%):</span>
              <span>{formatCurrency(result.tip)}</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total:</span>
              <span>{formatCurrency(result.total)}</span>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Provider Type:</span>
              <span className="capitalize">{result.providerType}</span>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Visit Type:</span>
              <span className="capitalize">{result.visitType}</span>
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