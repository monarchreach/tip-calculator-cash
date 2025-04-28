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

interface MusicTeacherService {
  instrument: 'piano' | 'guitar' | 'violin' | 'voice' | 'drums' | 'other';
  lessonType: 'private' | 'group' | 'masterclass' | 'workshop';
  rate: number;
  duration: number;
  skillLevel: 'beginner' | 'intermediate' | 'advanced';
  serviceQuality: 'poor' | 'average' | 'good' | 'excellent';
  tip: number;
  total: number;
}

export function MusicTeacherCalculator() {
  const [instrument, setInstrument] = useState<MusicTeacherService['instrument']>('piano');
  const [lessonType, setLessonType] = useState<MusicTeacherService['lessonType']>('private');
  const [rate, setRate] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [skillLevel, setSkillLevel] = useState<MusicTeacherService['skillLevel']>('intermediate');
  const [serviceQuality, setServiceQuality] = useState<MusicTeacherService['serviceQuality']>('good');
  const [result, setResult] = useState<MusicTeacherService | null>(null);

  const handleCalculate = () => {
    const basePrice = rate * duration;
    const skillMultiplier = {
      beginner: 1,
      intermediate: 1.2,
      advanced: 1.5,
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
      instrument,
      lessonType,
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
          <Label htmlFor="instrument">Instrument</Label>
          <Select
            value={instrument}
            onValueChange={(value: MusicTeacherService['instrument']) => setInstrument(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select instrument" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="piano">Piano</SelectItem>
              <SelectItem value="guitar">Guitar</SelectItem>
              <SelectItem value="violin">Violin</SelectItem>
              <SelectItem value="voice">Voice</SelectItem>
              <SelectItem value="drums">Drums</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="lessonType">Lesson Type</Label>
          <Select
            value={lessonType}
            onValueChange={(value: MusicTeacherService['lessonType']) => setLessonType(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select lesson type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="private">Private Lesson</SelectItem>
              <SelectItem value="group">Group Lesson</SelectItem>
              <SelectItem value="masterclass">Masterclass</SelectItem>
              <SelectItem value="workshop">Workshop</SelectItem>
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
            onValueChange={(value: MusicTeacherService['skillLevel']) => setSkillLevel(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select skill level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="beginner">Beginner</SelectItem>
              <SelectItem value="intermediate">Intermediate</SelectItem>
              <SelectItem value="advanced">Advanced</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="serviceQuality">Service Quality</Label>
          <Select
            value={serviceQuality}
            onValueChange={(value: MusicTeacherService['serviceQuality']) => setServiceQuality(value)}
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
            <CardTitle>Lesson Breakdown</CardTitle>
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
              <span>Instrument:</span>
              <span className="capitalize">{result.instrument}</span>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Lesson Type:</span>
              <span className="capitalize">{result.lessonType}</span>
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