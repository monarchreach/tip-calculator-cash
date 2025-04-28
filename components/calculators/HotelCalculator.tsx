'use client';

import { useState } from 'react';
import { calculateHotelServiceTip, calculateHotelStay } from '@/lib/calculations';
import { HotelService, HotelStay } from '@/lib/types';
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
import { Plus, Trash2 } from 'lucide-react';

export function HotelCalculator() {
  const [nights, setNights] = useState<number>(1);
  const [roomRate, setRoomRate] = useState<number>(0);
  const [services, setServices] = useState<HotelService[]>([]);
  const [result, setResult] = useState<HotelStay | null>(null);

  const [newService, setNewService] = useState<{
    serviceType: HotelService['serviceType'];
    duration: number;
    complexity: HotelService['complexity'];
  }>({
    serviceType: 'bellhop',
    duration: 0,
    complexity: 'simple',
  });

  const handleAddService = () => {
    const tip = calculateHotelServiceTip(
      newService.serviceType,
      newService.duration,
      newService.complexity
    );

    setServices([
      ...services,
      {
        ...newService,
        tip,
      },
    ]);

    // Reset new service form
    setNewService({
      serviceType: 'bellhop',
      duration: 0,
      complexity: 'simple',
    });
  };

  const handleRemoveService = (index: number) => {
    setServices(services.filter((_, i) => i !== index));
  };

  const handleCalculate = () => {
    const stay = calculateHotelStay(nights, roomRate, services);
    setResult(stay);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="nights">Number of Nights</Label>
          <Input
            id="nights"
            type="number"
            value={nights}
            onChange={(e) => setNights(Number(e.target.value))}
            placeholder="1"
            min="1"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="roomRate">Room Rate (per night)</Label>
          <Input
            id="roomRate"
            type="number"
            value={roomRate}
            onChange={(e) => setRoomRate(Number(e.target.value))}
            placeholder="0.00"
          />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Add Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="serviceType">Service Type</Label>
            <Select
              value={newService.serviceType}
              onValueChange={(value: HotelService['serviceType']) =>
                setNewService({ ...newService, serviceType: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select service type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bellhop">Bellhop</SelectItem>
                <SelectItem value="housekeeping">Housekeeping</SelectItem>
                <SelectItem value="concierge">Concierge</SelectItem>
                <SelectItem value="valet">Valet</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="duration">Duration (minutes)</Label>
            <Input
              id="duration"
              type="number"
              value={newService.duration}
              onChange={(e) =>
                setNewService({ ...newService, duration: Number(e.target.value) })
              }
              placeholder="0"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="complexity">Complexity</Label>
            <Select
              value={newService.complexity}
              onValueChange={(value: HotelService['complexity']) =>
                setNewService({ ...newService, complexity: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select complexity" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="simple">Simple</SelectItem>
                <SelectItem value="moderate">Moderate</SelectItem>
                <SelectItem value="complex">Complex</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button
          onClick={handleAddService}
          className="w-full"
          disabled={!newService.duration}
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Service
        </Button>
      </div>

      {services.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Added Services</h3>
          <div className="space-y-2">
            {services.map((service, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium capitalize">{service.serviceType}</p>
                      <p className="text-sm text-muted-foreground">
                        {service.duration} minutes • {service.complexity}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-medium">
                        {formatCurrency(service.tip)}
                      </span>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleRemoveService(index)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      <Button
        onClick={handleCalculate}
        className="w-full"
        disabled={services.length === 0}
      >
        Calculate Total
      </Button>

      {result && (
        <Card>
          <CardHeader>
            <CardTitle>Stay Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between">
              <span>Room Rate ({result.nights} nights):</span>
              <span>{formatCurrency(result.roomRate * result.nights)}</span>
            </div>
            <div className="flex justify-between">
              <span>Total Tips:</span>
              <span>{formatCurrency(result.totalTip)}</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total:</span>
              <span>
                {formatCurrency(result.roomRate * result.nights + result.totalTip)}
              </span>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
} 