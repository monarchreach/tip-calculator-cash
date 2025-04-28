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

interface SportsCoachService {
  sport: 'tennis' | 'golf' | 'swimming' | 'soccer' | 'basketball' | 'other';
  sessionType: 'private' | 'group' | 'team' | 'clinic';
  rate: number;
  duration: number;
  skillLevel: 'beginner' | 'intermediate' | 'advanced' | 'elite';
  serviceQuality: 'poor' | 'average' | 'good' | 'excellent';
  tip: number;
  total: number;
}

export function SportsCoachCalculator() {
  const [sport, setSport] = useState<SportsCoachService['sport']>('tennis');
  const [sessionType, setSessionType] = useState<SportsCoachService['sessionType']>('private');
  const [rate, setRate] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [skillLevel, setSkillLevel] = useState<SportsCoachService['skillLevel']>('intermediate');
  const [serviceQuality, setServiceQuality] = useState<SportsCoachService['serviceQuality']>('good');
  const [result, setResult] = useState<SportsCoachService | null>(null);

  const handleCalculate = () => {
    const basePrice = rate * duration;
    const skillMultiplier = {
      beginner: 1,
      intermediate: 1.2,
      advanced: 1.4,
      elite: 1.6,
    }[skillLevel];
    
    const qualityMultiplier = {
      poor: 0.8,
      average: 1,
      good: 1.2,
      excellent: 1.5,
    }[serviceQuality];
    
    const tip = basePrice * 0.15 * skillMultiplier * qualityMultiplier;
    const total = basePrice + tip;
    
    setResult({
      sport,
      sessionType,
      rate,
      duration,
      skillLevel,
      serviceQuality,
      tip,
      total,
    });
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="sport">Sport</Label>
          <Select
            value={sport}
            onValueChange={(value: SportsCoachService['sport']) => setSport(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select sport" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="tennis">Tennis</SelectItem>
              <SelectItem value="golf">Golf</SelectItem>
              <SelectItem value="swimming">Swimming</SelectItem>
              <SelectItem value="soccer">Soccer</SelectItem>
              <SelectItem value="basketball">Basketball</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="sessionType">Session Type</Label>
          <Select
            value={sessionType}
            onValueChange={(value: SportsCoachService['sessionType']) => setSessionType(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select session type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="private">Private Lesson</SelectItem>
              <SelectItem value="group">Group Lesson</SelectItem>
              <SelectItem value="team">Team Training</SelectItem>
              <SelectItem value="clinic">Clinic</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="rate">Rate per Session</Label>
          <Input
            id="rate"
            type="number"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
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
          <Label htmlFor="skillLevel">Skill Level</Label>
          <Select
            value={skillLevel}
            onValueChange={(value: SportsCoachService['skillLevel']) => setSkillLevel(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select skill level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="beginner">Beginner</SelectItem>
              <SelectItem value="intermediate">Intermediate</SelectItem>
              <SelectItem value="advanced">Advanced</SelectItem>
              <SelectItem value="elite">Elite</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="serviceQuality">Service Quality</Label>
          <Select
            value={serviceQuality}
            onValueChange={(value: SportsCoachService['serviceQuality']) => setServiceQuality(value)}
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
              <span>Base Rate:</span>
              <span>{formatCurrency(result.rate)}</span>
            </div>
            <div className="flex justify-between">
              <span>Tip (adjusted for skill level & quality):</span>
              <span>{formatCurrency(result.tip)}</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total:</span>
              <span>{formatCurrency(result.total)}</span>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Sport:</span>
              <span className="capitalize">{result.sport}</span>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Session Type:</span>
              <span className="capitalize">{result.sessionType}</span>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Skill Level:</span>
              <span className="capitalize">{result.skillLevel}</span>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Service Quality:</span>
              <span className="capitalize">{result.serviceQuality}</span>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Duration:</span>
              <span>{result.duration} minutes</span>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
} 