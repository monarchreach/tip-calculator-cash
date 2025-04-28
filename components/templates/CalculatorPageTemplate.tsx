'use client';

import { CalculatorForm } from '@/components/calculator/CalculatorForm';
import { CalculationHistory } from '@/components/calculator/CalculationHistory';
import { AccessibilityMenu } from '@/components/accessibility/AccessibilityMenu';
import { useLocalStorage, UserPreferences } from '@/lib/localStorage';
import { useEffect } from 'react';

interface CalculatorPageTemplateProps {
  calculator: {
    title: string;
    description: string;
    defaultTip?: number;
  };
}

export function CalculatorPageTemplate({ calculator }: CalculatorPageTemplateProps) {
  const [preferences] = useLocalStorage<UserPreferences>('userPreferences', {
    darkMode: false,
    defaultTip: 15,
    splitEnabled: true,
    currency: 'USD',
    taxIncluded: false,
    fontSize: 'medium',
    highContrast: false,
  });

  useEffect(() => {
    // Apply accessibility preferences
    document.documentElement.classList.toggle('dark', preferences.darkMode);
    document.documentElement.classList.toggle('high-contrast', preferences.highContrast);
    document.documentElement.style.fontSize = 
      preferences.fontSize === 'small' ? '14px' :
      preferences.fontSize === 'large' ? '18px' : '16px';
  }, [preferences]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">{calculator.title}</h1>
          <p className="text-muted-foreground">{calculator.description}</p>
        </div>
        <AccessibilityMenu />
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <CalculatorForm 
            calculatorType={calculator.title}
            defaultTip={calculator.defaultTip}
          />
        </div>
        <div>
          <CalculationHistory />
        </div>
      </div>
    </div>
  );
} 