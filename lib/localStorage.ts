import { useState, useEffect } from 'react';

export const useLocalStorage = <T>(key: string, initialValue: T) => {
  // State to store our value
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') return initialValue;
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that persists the new value to localStorage
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error('Error writing to localStorage:', error);
    }
  };

  return [storedValue, setValue] as const;
};

// Types for calculator history
export interface CalculationHistory {
  id: string;
  billAmount: number;
  tipPercentage: number;
  tipAmount: number;
  totalAmount: number;
  timestamp: number;
  calculatorType: string;
}

// Types for user preferences
export interface UserPreferences {
  darkMode: boolean;
  defaultTip: number;
  splitEnabled: boolean;
  currency: string;
  taxIncluded: boolean;
  fontSize: 'small' | 'medium' | 'large';
  highContrast: boolean;
} 