'use client';

import { useState } from 'react';
import { GroupDiningState, Item, Person } from '@/lib/types';
import { calculateGroupDining } from '@/lib/calculations';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus, Trash2, Share2 } from 'lucide-react';

export function GroupDiningCalculator() {
  const [state, setState] = useState<GroupDiningState>({
    items: [],
    people: [],
    sharedItems: [],
    taxRate: 8.875,
    serviceCharge: 0
  });

  const [newItem, setNewItem] = useState<Partial<Item>>({
    name: '',
    price: 0,
    shared: false,
    category: 'food',
    dietaryRestrictions: []
  });

  const [newPerson, setNewPerson] = useState<Partial<Person>>({
    name: '',
    tipPercentage: 20,
    items: [],
    dietaryRestrictions: []
  });

  const results = calculateGroupDining(state);

  const addItem = () => {
    if (!newItem.name || !newItem.price) return;
    
    const item: Item = {
      id: Date.now().toString(),
      name: newItem.name,
      price: Number(newItem.price),
      shared: newItem.shared || false,
      category: newItem.category || 'food',
      dietaryRestrictions: newItem.dietaryRestrictions || [],
      assignedTo: []
    };

    setState(prev => ({
      ...prev,
      items: [...prev.items, item]
    }));

    setNewItem({
      name: '',
      price: 0,
      shared: false,
      category: 'food',
      dietaryRestrictions: []
    });
  };

  const addPerson = () => {
    if (!newPerson.name) return;
    
    const person: Person = {
      id: Date.now().toString(),
      name: newPerson.name,
      tipPercentage: Number(newPerson.tipPercentage),
      items: [],
      dietaryRestrictions: newPerson.dietaryRestrictions || []
    };

    setState(prev => ({
      ...prev,
      people: [...prev.people, person]
    }));

    setNewPerson({
      name: '',
      tipPercentage: 20,
      items: [],
      dietaryRestrictions: []
    });
  };

  const assignItem = (itemId: string, personId: string) => {
    setState(prev => ({
      ...prev,
      items: prev.items.map(item => {
        if (item.id === itemId) {
          const assignedTo = item.assignedTo.includes(personId)
            ? item.assignedTo.filter(id => id !== personId)
            : [...item.assignedTo, personId];
          return { ...item, assignedTo };
        }
        return item;
      })
    }));
  };

  return (
    <div className="space-y-6">
      <Tabs defaultValue="items">
        <TabsList>
          <TabsTrigger value="items">Items</TabsTrigger>
          <TabsTrigger value="people">People</TabsTrigger>
          <TabsTrigger value="results">Results</TabsTrigger>
        </TabsList>

        <TabsContent value="items">
          <Card>
            <CardHeader>
              <CardTitle>Add Items</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="itemName">Item Name</Label>
                  <Input
                    id="itemName"
                    value={newItem.name}
                    onChange={e => setNewItem(prev => ({ ...prev, name: e.target.value }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="itemPrice">Price ($)</Label>
                  <Input
                    id="itemPrice"
                    type="number"
                    value={newItem.price}
                    onChange={e => setNewItem(prev => ({ ...prev, price: Number(e.target.value) }))}
                  />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="sharedItem"
                  checked={newItem.shared}
                  onChange={e => setNewItem(prev => ({ ...prev, shared: e.target.checked }))}
                />
                <Label htmlFor="sharedItem">Shared Item</Label>
              </div>
              <Button onClick={addItem}>
                <Plus className="w-4 h-4 mr-2" />
                Add Item
              </Button>
            </CardContent>
          </Card>

          <div className="mt-4 space-y-4">
            {state.items.map(item => (
              <Card key={item.id}>
                <CardContent className="pt-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      {item.shared && <Share2 className="w-4 h-4 text-gray-500" />}
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setState(prev => ({
                          ...prev,
                          items: prev.items.filter(i => i.id !== item.id)
                        }))}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="people">
          <Card>
            <CardHeader>
              <CardTitle>Add People</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="personName">Name</Label>
                  <Input
                    id="personName"
                    value={newPerson.name}
                    onChange={e => setNewPerson(prev => ({ ...prev, name: e.target.value }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tipPercentage">Tip Percentage</Label>
                  <Input
                    id="tipPercentage"
                    type="number"
                    value={newPerson.tipPercentage}
                    onChange={e => setNewPerson(prev => ({ ...prev, tipPercentage: Number(e.target.value) }))}
                  />
                </div>
              </div>
              <Button onClick={addPerson}>
                <Plus className="w-4 h-4 mr-2" />
                Add Person
              </Button>
            </CardContent>
          </Card>

          <div className="mt-4 space-y-4">
            {state.people.map(person => (
              <Card key={person.id}>
                <CardContent className="pt-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">{person.name}</h3>
                      <p className="text-sm text-gray-500">{person.tipPercentage}% tip</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setState(prev => ({
                        ...prev,
                        people: prev.people.filter(p => p.id !== person.id)
                      }))}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="results">
          <div className="space-y-4">
            {results.map(result => {
              const person = state.people.find(p => p.id === result.personId);
              if (!person) return null;

              return (
                <Card key={result.personId}>
                  <CardHeader>
                    <CardTitle>{person.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Subtotal:</span>
                        <span>${result.subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tax ({state.taxRate}%):</span>
                        <span>${result.tax.toFixed(2)}</span>
                      </div>
                      {state.serviceCharge > 0 && (
                        <div className="flex justify-between">
                          <span>Service Charge ({state.serviceCharge}%):</span>
                          <span>${result.serviceCharge.toFixed(2)}</span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span>Tip ({person.tipPercentage}%):</span>
                        <span>${result.tip.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between font-bold">
                        <span>Total:</span>
                        <span>${result.total.toFixed(2)}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
} 