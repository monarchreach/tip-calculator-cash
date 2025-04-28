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

interface MedicalAestheticianService {
  treatmentType: 'facial' | 'peel' | 'microdermabrasion' | 'laser' | 'injectables' | 'other';
  price: number;
  duration: number;
  tipPercentage: number;
  serviceQuality: 'poor' | 'average' | 'good' | 'excellent';
  tip: number;
  total: number;
  treatmentArea: 'face' | 'body' | 'both';
}

export function MedicalAestheticianCalculator() {
  const [treatmentType, setTreatmentType] = useState<MedicalAestheticianService['treatmentType']>('facial');
  const [treatmentArea, setTreatmentArea] = useState<MedicalAestheticianService['treatmentArea']>('face');
  const [price, setPrice] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [tipPercentage, setTipPercentage] = useState<number>(15);
  const [serviceQuality, setServiceQuality] = useState<MedicalAestheticianService['serviceQuality']>('good');
  const [result, setResult] = useState<MedicalAestheticianService | null>(null);

  const handleCalculate = () => {
    const tip = price * (tipPercentage / 100);
    const total = price + tip;
    
    setResult({
      treatmentType,
      treatmentArea,
      price,
      duration,
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
          <Label htmlFor="treatmentType">Treatment Type</Label>
          <Select
            value={treatmentType}
            onValueChange={(value: MedicalAestheticianService['treatmentType']) => setTreatmentType(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select treatment type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="facial">Facial Treatment</SelectItem>
              <SelectItem value="peel">Chemical Peel</SelectItem>
              <SelectItem value="microdermabrasion">Microdermabrasion</SelectItem>
              <SelectItem value="laser">Laser Treatment</SelectItem>
              <SelectItem value="injectables">Injectables</SelectItem>
              <SelectItem value="other">Other Treatment</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="treatmentArea">Treatment Area</Label>
          <Select
            value={treatmentArea}
            onValueChange={(value: MedicalAestheticianService['treatmentArea']) => setTreatmentArea(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select treatment area" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="face">Face</SelectItem>
              <SelectItem value="body">Body</SelectItem>
              <SelectItem value="both">Face & Body</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="price">Treatment Price</Label>
          <Input
            id="price"
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            placeholder="0.00"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="duration">Duration (minutes)</Label>
          <Input
            id="duration"
            type="number"
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
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
            placeholder="15"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="serviceQuality">Service Quality</Label>
          <Select
            value={serviceQuality}
            onValueChange={(value: MedicalAestheticianService['serviceQuality']) => setServiceQuality(value)}
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
              <span>Treatment Price:</span>
              <span>{formatCurrency(result.price)}</span>
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
              <span>Duration:</span>
              <span>{result.duration} minutes</span>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Treatment Type:</span>
              <span className="capitalize">{result.treatmentType}</span>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Treatment Area:</span>
              <span className="capitalize">{result.treatmentArea}</span>
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