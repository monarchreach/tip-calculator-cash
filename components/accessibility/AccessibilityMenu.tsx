'use client';

import { useLocalStorage, UserPreferences } from '@/lib/localStorage';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Settings } from 'lucide-react';

export function AccessibilityMenu() {
  const [preferences, setPreferences] = useLocalStorage<UserPreferences>('userPreferences', {
    darkMode: false,
    defaultTip: 15,
    splitEnabled: true,
    currency: 'USD',
    taxIncluded: false,
    fontSize: 'medium',
    highContrast: false,
  });

  const updatePreference = (key: keyof UserPreferences, value: any) => {
    setPreferences(prev => ({ ...prev, [key]: value }));
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Accessibility settings">
          <Settings className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => updatePreference('darkMode', !preferences.darkMode)}
        >
          {preferences.darkMode ? 'Light Mode' : 'Dark Mode'}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => updatePreference('highContrast', !preferences.highContrast)}
        >
          {preferences.highContrast ? 'Normal Contrast' : 'High Contrast'}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => updatePreference('fontSize', 
            preferences.fontSize === 'small' ? 'medium' : 
            preferences.fontSize === 'medium' ? 'large' : 'small'
          )}
        >
          Font Size: {preferences.fontSize.charAt(0).toUpperCase() + preferences.fontSize.slice(1)}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
} 