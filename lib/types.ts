// Group Dining Types
export interface Item {
  id: string;
  name: string;
  price: number;
  shared: boolean;
  category: 'food' | 'drink' | 'other';
  dietaryRestrictions: string[];
  assignedTo: string[];
}

export interface Person {
  id: string;
  name: string;
  tipPercentage: number;
  items: string[]; // item IDs
  dietaryRestrictions: string[];
}

export interface GroupDiningState {
  items: Item[];
  people: Person[];
  sharedItems: string[]; // item IDs
  taxRate: number;
  serviceCharge: number;
}

export interface GroupDiningResult {
  personId: string;
  subtotal: number;
  tax: number;
  serviceCharge: number;
  tip: number;
  total: number;
}

// Restaurant Staff Types
export interface StaffRole {
  id: string;
  name: string;
  tipOutPercentage: number;
  basePay: number;
}

export interface ShiftEntry {
  id: string;
  date: string;
  hours: number;
  tips: number;
  role: string;
  deductions: number;
}

// Delivery Service Types
export interface DeliveryFactors {
  distance: number;
  orderSize: number;
  weatherCondition: 'good' | 'fair' | 'poor';
  stops: number;
  waitTime: number;
}

// Personal Service Types
export interface ServiceFactors {
  duration: number;
  skillLevel: 'basic' | 'intermediate' | 'advanced';
  materialCost: number;
  isRecurring: boolean;
  frequency: 'weekly' | 'biweekly' | 'monthly';
}

// Restaurant & Food Service Types
export interface RestaurantBill {
  subtotal: number;
  tax: number;
  serviceCharge: number;
  tip: number;
  total: number;
  partySize: number;
  serviceQuality: 'poor' | 'average' | 'good' | 'excellent';
}

// Transportation Types
export interface TransportationBill {
  baseFare: number;
  distance: number;
  waitTime: number;
  surgeMultiplier: number;
  tip: number;
  total: number;
  serviceQuality: 'poor' | 'average' | 'good' | 'excellent';
}

// Hospitality Types
export interface HotelService {
  serviceType: 'bellhop' | 'housekeeping' | 'concierge' | 'valet';
  duration: number;
  complexity: 'simple' | 'moderate' | 'complex';
  tip: number;
}

export interface HotelStay {
  nights: number;
  roomRate: number;
  services: HotelService[];
  totalTip: number;
}

// Personal Services Types
export interface PersonalService {
  serviceType: 'hair' | 'nails' | 'massage' | 'spa' | 'tattoo' | 'personal-training';
  duration: number;
  price: number;
  tip: number;
  total: number;
  serviceQuality: 'poor' | 'average' | 'good' | 'excellent';
  tipPercentage: number;
}

// Home Services Types
export interface HomeService {
  serviceType: 'moving' | 'cleaning' | 'handyman' | 'delivery';
  duration: number;
  complexity: 'simple' | 'moderate' | 'complex';
  distance: number;
  tip: number;
  total: number;
}

// Event Services Types
export interface EventService {
  serviceType: 'wedding' | 'photography' | 'planning' | 'entertainment';
  duration: number;
  price: number;
  tip: number;
  total: number;
  serviceQuality: 'poor' | 'average' | 'good' | 'excellent';
}

// Digital Tipping Types
export interface DigitalTip {
  amount: number;
  percentage: number;
  message: string;
  timestamp: string;
} 