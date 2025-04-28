'use client';

import { useLocalStorage, CalculationHistory } from '@/lib/localStorage';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { format } from 'date-fns';
import { Trash2 } from 'lucide-react';

export function CalculationHistory() {
  const [history, setHistory] = useLocalStorage<CalculationHistory[]>('calculationHistory', []);

  const clearHistory = () => {
    setHistory([]);
  };

  const deleteEntry = (id: string) => {
    setHistory(prev => prev.filter(entry => entry.id !== id));
  };

  if (history.length === 0) {
    return null;
  }

  return (
    <div className="mt-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Recent Calculations</h2>
        <Button variant="ghost" size="sm" onClick={clearHistory}>
          Clear History
        </Button>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Bill Amount</TableHead>
              <TableHead>Tip %</TableHead>
              <TableHead>Tip Amount</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Calculator</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {history.map((entry) => (
              <TableRow key={entry.id}>
                <TableCell>{format(new Date(entry.timestamp), 'MMM d, yyyy HH:mm')}</TableCell>
                <TableCell>${entry.billAmount.toFixed(2)}</TableCell>
                <TableCell>{entry.tipPercentage}%</TableCell>
                <TableCell>${entry.tipAmount.toFixed(2)}</TableCell>
                <TableCell>${entry.totalAmount.toFixed(2)}</TableCell>
                <TableCell>{entry.calculatorType}</TableCell>
                <TableCell>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => deleteEntry(entry.id)}
                    aria-label="Delete entry"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
} 