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

interface PrivateTutorService {
  subject: 'math' | 'science' | 'language' | 'humanities' | 'test-prep' | 'other';
  sessionType: 'individual' | 'group' | 'online' | 'in-person';
  hourlyRate: number;
  duration: number;
  complexity: 'basic' | 'intermediate' | 'advanced';
  serviceQuality: 'poor' | 'average' | 'good' | 'excellent';
  tip: number;
  total: number;
}

export function PrivateTutorCalculator() {
  const [subject, setSubject] = useState<PrivateTutorService['subject']>('math');
  const [sessionType, setSessionType] = useState<PrivateTutorService['sessionType']>('individual');
  const [hourlyRate, setHourlyRate] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [complexity, setComplexity] = useState<PrivateTutorService['complexity']>('intermediate');
  const [serviceQuality, setServiceQuality] = useState<PrivateTutorService['serviceQuality']>('good');
  const [result, setResult] = useState<PrivateTutorService | null>(null);

  const handleCalculate = () => {
    const basePrice = hourlyRate * duration;
    const complexityMultiplier = {
      basic: 1,
      intermediate: 1.2,
      advanced: 1.5,
    }[complexity];
    
    const qualityMultiplier = {
      poor: 0.8,
      average: 1,
      good: 1.2,
      excellent: 1.5,
    }[serviceQuality];
    
    const tip = basePrice * 0.15 * complexityMultiplier * qualityMultiplier;
    const total = basePrice + tip;
    
    setResult({
      subject,
      sessionType,
      hourlyRate,
      duration,
      complexity,
      serviceQuality,
      tip,
      total,
    });
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="subject">Subject</Label>
          <Select
            value={subject}
            onValueChange={(value: PrivateTutorService['subject']) => setSubject(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select subject" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="math">Mathematics</SelectItem>
              <SelectItem value="science">Science</SelectItem>
              <SelectItem value="language">Language Arts</SelectItem>
              <SelectItem value="humanities">Humanities</SelectItem>
              <SelectItem value="test-prep">Test Preparation</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="sessionType">Session Type</Label>
          <Select
            value={sessionType}
            onValueChange={(value: PrivateTutorService['sessionType']) => setSessionType(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select session type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="individual">Individual</SelectItem>
              <SelectItem value="group">Group</SelectItem>
              <SelectItem value="online">Online</SelectItem>
              <SelectItem value="in-person">In-Person</SelectItem>
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
          <Label htmlFor="duration">Duration (hours)</Label>
          <Input
            id="duration"
            type="number"
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
            placeholder="0"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="complexity">Subject Complexity</Label>
          <Select
            value={complexity}
            onValueChange={(value: PrivateTutorService['complexity']) => setComplexity(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select complexity" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="basic">Basic</SelectItem>
              <SelectItem value="intermediate">Intermediate</SelectItem>
              <SelectItem value="advanced">Advanced</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="serviceQuality">Service Quality</Label>
          <Select
            value={serviceQuality}
            onValueChange={(value: PrivateTutorService['serviceQuality']) => setServiceQuality(value)}
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
            <CardTitle>Session Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between">
              <span>Base Rate ({duration} hours):</span>
              <span>{formatCurrency(result.hourlyRate * result.duration)}</span>
            </div>
            <div className="flex justify-between">
              <span>Tip (adjusted for complexity & quality):</span>
              <span>{formatCurrency(result.tip)}</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total:</span>
              <span>{formatCurrency(result.total)}</span>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Subject:</span>
              <span className="capitalize">{result.subject}</span>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Session Type:</span>
              <span className="capitalize">{result.sessionType}</span>
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