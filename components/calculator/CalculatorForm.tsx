'use client';

import { useState, useEffect } from 'react';
import { useLocalStorage, CalculationHistory, UserPreferences } from '@/lib/localStorage';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { v4 as uuidv4 } from 'uuid';

interface CalculatorFormProps {
  calculatorType: string;
  defaultTip?: number;
}

export function CalculatorForm({ calculatorType, defaultTip = 15 }: CalculatorFormProps) {
  const [preferences] = useLocalStorage<UserPreferences>('userPreferences', {
    darkMode: false,
    defaultTip: 15,
    splitEnabled: true,
    currency: 'USD',
    taxIncluded: false,
    fontSize: 'medium',
    highContrast: false,
  });

  const [billAmount, setBillAmount] = useState<string>('');
  const [tipPercentage, setTipPercentage] = useState<number>(defaultTip);
  const [splitCount, setSplitCount] = useState<number>(1);
  const [taxAmount, setTaxAmount] = useState<string>('');
  const [includeTax, setIncludeTax] = useState<boolean>(false);

  const [history, setHistory] = useLocalStorage<CalculationHistory[]>('calculationHistory', []);

  const calculateResults = () => {
    const bill = parseFloat(billAmount) || 0;
    const tax = parseFloat(taxAmount) || 0;
    const baseAmount = includeTax ? bill - tax : bill;
    const tipAmount = baseAmount * (tipPercentage / 100);
    const totalAmount = baseAmount + tipAmount + (includeTax ? tax : 0);

    return {
      tipAmount,
      totalAmount,
      perPerson: totalAmount / splitCount,
    };
  };

  const saveToHistory = () => {
    const { tipAmount, totalAmount } = calculateResults();
    const newEntry: CalculationHistory = {
      id: uuidv4(),
      billAmount: parseFloat(billAmount) || 0,
      tipPercentage,
      tipAmount,
      totalAmount,
      timestamp: Date.now(),
      calculatorType,
    };

    setHistory(prev => [newEntry, ...prev].slice(0, 10)); // Keep last 10 entries
  };

  const { tipAmount, totalAmount, perPerson } = calculateResults();

  return (
    <div className={`space-y-6 ${preferences.highContrast ? 'high-contrast' : ''} ${preferences.fontSize}`}>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="billAmount">Bill Amount</Label>
          <Input
            id="billAmount"
            type="number"
            value={billAmount}
            onChange={(e) => setBillAmount(e.target.value)}
            placeholder="0.00"
            min="0"
            step="0.01"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="taxAmount">Tax Amount (Optional)</Label>
          <Input
            id="taxAmount"
            type="number"
            value={taxAmount}
            onChange={(e) => setTaxAmount(e.target.value)}
            placeholder="0.00"
            min="0"
            step="0.01"
          />
        </div>

        <div className="flex items-center space-x-2">
          <Switch
            id="includeTax"
            checked={includeTax}
            onCheckedChange={setIncludeTax}
          />
          <Label htmlFor="includeTax">Include tax in tip calculation</Label>
        </div>

        <div className="space-y-2">
          <Label htmlFor="tipPercentage">Tip Percentage: {tipPercentage}%</Label>
          <Slider
            id="tipPercentage"
            value={[tipPercentage]}
            onValueChange={([value]) => setTipPercentage(value)}
            min={0}
            max={50}
            step={1}
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>0%</span>
            <span>50%</span>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="splitCount">Split Between</Label>
          <Input
            id="splitCount"
            type="number"
            value={splitCount}
            onChange={(e) => setSplitCount(parseInt(e.target.value) || 1)}
            min="1"
            step="1"
          />
        </div>
      </div>

      <div className="space-y-4 p-4 bg-muted rounded-lg">
        <div className="flex justify-between">
          <span>Tip Amount:</span>
          <span>${tipAmount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Total Amount:</span>
          <span>${totalAmount.toFixed(2)}</span>
        </div>
        {splitCount > 1 && (
          <div className="flex justify-between">
            <span>Per Person:</span>
            <span>${perPerson.toFixed(2)}</span>
          </div>
        )}
      </div>

      <Button 
        className="w-full" 
        onClick={saveToHistory}
        disabled={!billAmount || parseFloat(billAmount) <= 0}
      >
        Save Calculation
      </Button>
    </div>
  );
} 