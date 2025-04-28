import { 
  RestaurantBill, 
  TransportationBill, 
  HotelService, 
  HotelStay, 
  PersonalService, 
  HomeService, 
  EventService,
  DigitalTip,
  Item, 
  Person, 
  GroupDiningResult 
} from './types';

export function calculateGroupDiningResults(
  items: Item[],
  people: Person[],
  taxRate: number,
  serviceCharge: number
): GroupDiningResult[] {
  return people.map(person => {
    // Calculate subtotal for person's items
    const subtotal = items.reduce((total, item) => {
      if (item.assignedTo.includes(person.id)) {
        return total + item.price;
      }
      return total;
    }, 0);

    // Calculate shared items portion
    const sharedItemsTotal = items.reduce((total, item) => {
      if (item.shared && !item.assignedTo.includes(person.id)) {
        return total + (item.price / people.length);
      }
      return total;
    }, 0);

    const totalSubtotal = subtotal + sharedItemsTotal;
    const tax = totalSubtotal * (taxRate / 100);
    const serviceFee = totalSubtotal * (serviceCharge / 100);
    const tip = totalSubtotal * (person.tipPercentage / 100);
    const total = totalSubtotal + tax + serviceFee + tip;

    return {
      personId: person.id,
      subtotal: totalSubtotal,
      tax,
      serviceCharge: serviceFee,
      tip,
      total
    };
  });
}

export function calculateTotalBill(results: GroupDiningResult[]): number {
  return results.reduce((total, result) => total + result.total, 0);
}

export function calculateAverageTip(results: GroupDiningResult[]): number {
  const totalTip = results.reduce((total, result) => total + result.tip, 0);
  return totalTip / results.length;
}

// Restaurant & Food Service Calculations
export function calculateRestaurantBill(
  subtotal: number,
  taxRate: number,
  serviceCharge: number,
  tipPercentage: number,
  partySize: number,
  serviceQuality: RestaurantBill['serviceQuality']
): RestaurantBill {
  const tax = subtotal * (taxRate / 100);
  const serviceFee = subtotal * (serviceCharge / 100);
  
  // Adjust tip based on service quality
  const qualityMultiplier = {
    poor: 0.8,
    average: 1,
    good: 1.2,
    excellent: 1.5
  };
  
  const baseTip = subtotal * (tipPercentage / 100);
  const tip = baseTip * qualityMultiplier[serviceQuality];
  
  const total = subtotal + tax + serviceFee + tip;
  
  return {
    subtotal,
    tax,
    serviceCharge: serviceFee,
    tip,
    total,
    partySize,
    serviceQuality
  };
}

// Transportation Calculations
export function calculateTransportationBill(
  baseFare: number,
  distance: number,
  waitTime: number,
  surgeMultiplier: number,
  tipPercentage: number,
  serviceQuality: TransportationBill['serviceQuality']
): TransportationBill {
  const distanceCharge = distance * 0.5; // $0.50 per mile
  const waitCharge = waitTime * 0.25; // $0.25 per minute
  
  const subtotal = (baseFare + distanceCharge + waitCharge) * surgeMultiplier;
  
  // Adjust tip based on service quality
  const qualityMultiplier = {
    poor: 0.8,
    average: 1,
    good: 1.2,
    excellent: 1.5
  };
  
  const baseTip = subtotal * (tipPercentage / 100);
  const tip = baseTip * qualityMultiplier[serviceQuality];
  
  const total = subtotal + tip;
  
  return {
    baseFare,
    distance,
    waitTime,
    surgeMultiplier,
    tip,
    total,
    serviceQuality
  };
}

// Hotel Service Calculations
export function calculateHotelServiceTip(
  serviceType: HotelService['serviceType'],
  duration: number,
  complexity: HotelService['complexity']
): number {
  const baseRates = {
    bellhop: 2,
    housekeeping: 5,
    concierge: 5,
    valet: 2
  };
  
  const complexityMultiplier = {
    simple: 1,
    moderate: 1.5,
    complex: 2
  };
  
  const durationMultiplier = Math.ceil(duration / 30); // Every 30 minutes
  
  return baseRates[serviceType] * complexityMultiplier[complexity] * durationMultiplier;
}

export function calculateHotelStay(
  nights: number,
  roomRate: number,
  services: HotelService[]
): HotelStay {
  const totalTip = services.reduce((sum, service) => sum + service.tip, 0);
  
  return {
    nights,
    roomRate,
    services,
    totalTip
  };
}

// Personal Services Calculations
export function calculatePersonalService(
  serviceType: PersonalService['serviceType'],
  duration: number,
  price: number,
  tipPercentage: number,
  serviceQuality: PersonalService['serviceQuality']
): PersonalService {
  // Adjust tip based on service quality
  const qualityMultiplier = {
    poor: 0.8,
    average: 1,
    good: 1.2,
    excellent: 1.5
  };
  
  const baseTip = price * (tipPercentage / 100);
  const tip = baseTip * qualityMultiplier[serviceQuality];
  
  const total = price + tip;
  
  return {
    serviceType,
    duration,
    price,
    tip,
    total,
    serviceQuality
  };
}

// Home Services Calculations
export function calculateHomeService(
  serviceType: HomeService['serviceType'],
  duration: number,
  complexity: HomeService['complexity'],
  distance: number,
  basePrice: number
): HomeService {
  const complexityMultiplier = {
    simple: 1,
    moderate: 1.5,
    complex: 2
  };
  
  const distanceCharge = distance * 0.5; // $0.50 per mile
  const durationCharge = duration * 0.5; // $0.50 per minute
  
  const subtotal = basePrice + distanceCharge + durationCharge;
  const tip = subtotal * complexityMultiplier[complexity] * 0.15; // 15% base tip
  
  const total = subtotal + tip;
  
  return {
    serviceType,
    duration,
    complexity,
    distance,
    tip,
    total
  };
}

// Event Services Calculations
export function calculateEventService(
  serviceType: EventService['serviceType'],
  duration: number,
  price: number,
  tipPercentage: number,
  serviceQuality: EventService['serviceQuality']
): EventService {
  // Adjust tip based on service quality
  const qualityMultiplier = {
    poor: 0.8,
    average: 1,
    good: 1.2,
    excellent: 1.5
  };
  
  const baseTip = price * (tipPercentage / 100);
  const tip = baseTip * qualityMultiplier[serviceQuality];
  
  const total = price + tip;
  
  return {
    serviceType,
    duration,
    price,
    tip,
    total,
    serviceQuality
  };
}

// Digital Tipping Calculations
export function calculateDigitalTip(
  amount: number,
  percentage: number,
  message: string = ''
): DigitalTip {
  const tip = amount * (percentage / 100);
  
  return {
    amount: tip,
    percentage,
    message,
    timestamp: new Date().toISOString()
  };
} 