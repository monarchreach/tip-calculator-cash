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

interface LanguageInstructorService {
  language: 'english' | 'spanish' | 'french' | 'german' | 'chinese' | 'japanese' | 'other';
  lessonType: 'private' | 'group' | 'conversation' | 'business';
  rate: number;
  duration: number;
  proficiencyLevel: 'beginner' | 'intermediate' | 'advanced' | 'fluent';
  serviceQuality: 'poor' | 'average' | 'good' | 'excellent';
  tip: number;
  total: number;
}

export function LanguageInstructorCalculator() {
  const [language, setLanguage] = useState<LanguageInstructorService['language']>('english');
  const [lessonType, setLessonType] = useState<LanguageInstructorService['lessonType']>('private');
  const [rate, setRate] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [proficiencyLevel, setProficiencyLevel] = useState<LanguageInstructorService['proficiencyLevel']>('intermediate');
  const [serviceQuality, setServiceQuality] = useState<LanguageInstructorService['serviceQuality']>('good');
  const [result, setResult] = useState<LanguageInstructorService | null>(null);

  const handleCalculate = () => {
    const basePrice = rate * duration;
    const proficiencyMultiplier = {
      beginner: 1,
      intermediate: 1.2,
      advanced: 1.4,
      fluent: 1.6,
    }[proficiencyLevel];
    
    const qualityMultiplier = {
      poor: 0.8,
      average: 1,
      good: 1.2,
      excellent: 1.5,
    }[serviceQuality];
    
    const tip = basePrice * 0.15 * proficiencyMultiplier * qualityMultiplier;
    const total = basePrice + tip;
    
    setResult({
      language,
      lessonType,
      rate,
      duration,
      proficiencyLevel,
      serviceQuality,
      tip,
      total,
    });
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="language">Language</Label>
          <Select
            value={language}
            onValueChange={(value: LanguageInstructorService['language']) => setLanguage(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="english">English</SelectItem>
              <SelectItem value="spanish">Spanish</SelectItem>
              <SelectItem value="french">French</SelectItem>
              <SelectItem value="german">German</SelectItem>
              <SelectItem value="chinese">Chinese</SelectItem>
              <SelectItem value="japanese">Japanese</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="lessonType">Lesson Type</Label>
          <Select
            value={lessonType}
            onValueChange={(value: LanguageInstructorService['lessonType']) => setLessonType(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select lesson type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="private">Private Lesson</SelectItem>
              <SelectItem value="group">Group Lesson</SelectItem>
              <SelectItem value="conversation">Conversation Practice</SelectItem>
              <SelectItem value="business">Business Language</SelectItem>
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
          <Label htmlFor="proficiencyLevel">Proficiency Level</Label>
          <Select
            value={proficiencyLevel}
            onValueChange={(value: LanguageInstructorService['proficiencyLevel']) => setProficiencyLevel(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select proficiency level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="beginner">Beginner</SelectItem>
              <SelectItem value="intermediate">Intermediate</SelectItem>
              <SelectItem value="advanced">Advanced</SelectItem>
              <SelectItem value="fluent">Fluent</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="serviceQuality">Service Quality</Label>
          <Select
            value={serviceQuality}
            onValueChange={(value: LanguageInstructorService['serviceQuality']) => setServiceQuality(value)}
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
              <span>Tip (adjusted for proficiency & quality):</span>
              <span>{formatCurrency(result.tip)}</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total:</span>
              <span>{formatCurrency(result.total)}</span>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Language:</span>
              <span className="capitalize">{result.language}</span>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Lesson Type:</span>
              <span className="capitalize">{result.lessonType}</span>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Proficiency Level:</span>
              <span className="capitalize">{result.proficiencyLevel}</span>
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