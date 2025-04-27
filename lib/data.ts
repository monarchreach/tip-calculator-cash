export const calculatorCategories = [
  {
    id: "food-beverage",
    title: "Food & Beverage Calculators",
    description: "Calculate tips for restaurants, cafes, bars, and food delivery services.",
    calculators: [
      {
        slug: "restaurant-tip-calculator",
        title: "Restaurant Tip Calculator",
        description: "Calculate tips for dining out",
        excerpt:
          "Determine the appropriate tip amount for restaurant service based on bill total, service quality, and party size.",
      },
      {
        slug: "cafe-tip-calculator",
        title: "Cafe Tip Calculator",
        description: "Calculate tips for coffee shops and cafes",
        excerpt: "Figure out how much to tip at cafes and coffee shops for counter service or table service.",
      },
      {
        slug: "fine-dining-tip-calculator",
        title: "Fine Dining Tip Calculator",
        description: "Calculate tips for upscale restaurants",
        excerpt: "Calculate appropriate gratuity for fine dining experiences with premium service expectations.",
      },
      {
        slug: "fast-food-tip-calculator",
        title: "Fast Food Tip Calculator",
        description: "Calculate tips for quick service restaurants",
        excerpt: "Determine if and how much to tip at fast food and quick service restaurants.",
      },
      {
        slug: "buffet-tip-calculator",
        title: "Buffet Tip Calculator",
        description: "Calculate tips for buffet-style restaurants",
        excerpt: "Calculate appropriate tips for buffet restaurants with limited table service.",
      },
      {
        slug: "bar-bartender-tip-calculator",
        title: "Bar & Bartender Tip Calculator",
        description: "Calculate tips for drinks and bar service",
        excerpt: "Figure out how much to tip bartenders for drinks and bar service.",
      },
      {
        slug: "food-delivery-tip-calculator",
        title: "Food Delivery Tip Calculator",
        description: "Calculate tips for food delivery services",
        excerpt: "Calculate appropriate tips for food delivery drivers based on distance, weather, and order size.",
      },
      {
        slug: "catering-service-tip-calculator",
        title: "Catering Service Tip Calculator",
        description: "Calculate tips for catering staff",
        excerpt: "Determine gratuity for catering services for events and parties.",
      },
    ],
  },
  {
    id: "transportation",
    title: "Transportation & Travel Calculators",
    description: "Calculate tips for taxis, rideshares, airport shuttles, and other transportation services.",
    calculators: [
      {
        slug: "taxi-tip-calculator",
        title: "Taxi Tip Calculator",
        description: "Calculate tips for taxi drivers",
        excerpt: "Determine appropriate tips for taxi rides based on fare, distance, and service.",
      },
      {
        slug: "uber-lyft-tip-calculator",
        title: "Uber & Lyft Tip Calculator",
        description: "Calculate tips for rideshare services",
        excerpt: "Figure out how much to tip your Uber, Lyft, or other rideshare drivers.",
      },
      {
        slug: "airport-shuttle-tip-calculator",
        title: "Airport Shuttle Tip Calculator",
        description: "Calculate tips for airport transportation",
        excerpt: "Calculate tips for airport shuttle drivers and luggage handlers.",
      },
      {
        slug: "private-driver-tip-calculator",
        title: "Private Driver Tip Calculator",
        description: "Calculate tips for private car services",
        excerpt: "Determine gratuity for private drivers and car services for extended periods.",
      },
      {
        slug: "cruise-ship-staff-tip-calculator",
        title: "Cruise Ship Staff Tip Calculator",
        description: "Calculate tips for cruise staff",
        excerpt: "Calculate appropriate tips for various cruise ship staff members.",
      },
      {
        slug: "limo-service-tip-calculator",
        title: "Limo Service Tip Calculator",
        description: "Calculate tips for limousine services",
        excerpt: "Figure out gratuity for limousine drivers for special events and occasions.",
      },
    ],
  },
  {
    id: "hospitality",
    title: "Hospitality & Accommodation Calculators",
    description: "Calculate tips for hotel staff, bellhops, housekeeping, and other hospitality services.",
    calculators: [
      {
        slug: "hotel-staff-tip-calculator",
        title: "Hotel Staff Tip Calculator",
        description: "Calculate tips for various hotel employees",
        excerpt: "Determine appropriate tips for different hotel staff members during your stay.",
      },
      {
        slug: "bellhop-tip-calculator",
        title: "Bellhop Tip Calculator",
        description: "Calculate tips for luggage assistance",
        excerpt: "Figure out how much to tip bellhops and porters for luggage handling.",
      },
      {
        slug: "concierge-service-tip-calculator",
        title: "Concierge Service Tip Calculator",
        description: "Calculate tips for concierge assistance",
        excerpt: "Calculate appropriate tips for concierge services based on request complexity.",
      },
      {
        slug: "housekeeping-tip-calculator",
        title: "Housekeeping Tip Calculator",
        description: "Calculate tips for hotel housekeeping",
        excerpt: "Determine daily or end-of-stay tips for hotel housekeeping staff.",
      },
      {
        slug: "airbnb-host-tip-calculator",
        title: "Airbnb Host Tip Calculator",
        description: "Calculate tips for vacation rental hosts",
        excerpt: "Figure out if and when to tip Airbnb hosts or property managers.",
      },
      {
        slug: "resort-tip-calculator",
        title: "Resort Tip Calculator",
        description: "Calculate tips for all-inclusive resorts",
        excerpt: "Calculate tips for various staff at all-inclusive resorts and vacation packages.",
      },
    ],
  },
  {
    id: "personal-services",
    title: "Personal Services Calculators",
    description: "Calculate tips for salons, spas, barbers, and other personal service providers.",
    calculators: [
      {
        slug: "spa-service-tip-calculator",
        title: "Spa Service Tip Calculator",
        description: "Calculate tips for spa treatments",
        excerpt: "Determine appropriate tips for various spa services and treatments.",
      },
      {
        slug: "hair-salon-tip-calculator",
        title: "Hair Salon Tip Calculator",
        description: "Calculate tips for hair stylists",
        excerpt: "Figure out how much to tip hair stylists for cuts, colors, and styling.",
      },
      {
        slug: "barber-tip-calculator",
        title: "Barber Tip Calculator",
        description: "Calculate tips for barber services",
        excerpt: "Calculate appropriate tips for barbers for haircuts and grooming services.",
      },
      {
        slug: "nail-salon-tip-calculator",
        title: "Nail Salon Tip Calculator",
        description: "Calculate tips for nail technicians",
        excerpt: "Determine gratuity for manicures, pedicures, and other nail services.",
      },
      {
        slug: "tattoo-artist-tip-calculator",
        title: "Tattoo Artist Tip Calculator",
        description: "Calculate tips for tattoo services",
        excerpt: "Figure out how much to tip tattoo artists based on complexity and session length.",
      },
      {
        slug: "massage-therapist-tip-calculator",
        title: "Massage Therapist Tip Calculator",
        description: "Calculate tips for massage services",
        excerpt: "Calculate appropriate tips for massage therapists based on service type.",
      },
      {
        slug: "personal-trainer-tip-calculator",
        title: "Personal Trainer Tip Calculator",
        description: "Calculate tips for fitness professionals",
        excerpt: "Determine if and when to tip personal trainers and fitness instructors.",
      },
    ],
  },
]

export const locations = [
  {
    slug: "new-york",
    name: "New York",
    country: "United States",
    defaultTipPercentage: 20,
    customaryTipRange: { min: 18, max: 25 },
    currency: "USD",
    tippingNotes:
      "Tipping is customary and expected in New York. Restaurant servers typically receive 18-25% tips, while taxi drivers expect 15-20%.",
  },
  {
    slug: "london",
    name: "London",
    country: "United Kingdom",
    defaultTipPercentage: 12.5,
    customaryTipRange: { min: 10, max: 15 },
    currency: "GBP",
    tippingNotes:
      "Service charges are often included in London restaurants (10-15%). Additional tipping is appreciated but not mandatory.",
  },
  {
    slug: "dubai",
    name: "Dubai",
    country: "United Arab Emirates",
    defaultTipPercentage: 10,
    customaryTipRange: { min: 5, max: 15 },
    currency: "AED",
    tippingNotes:
      "Tipping is becoming more common in Dubai but isn't traditionally expected. 5-15% is appreciated for good service.",
  },
  {
    slug: "las-vegas",
    name: "Las Vegas",
    country: "United States",
    defaultTipPercentage: 20,
    customaryTipRange: { min: 15, max: 25 },
    currency: "USD",
    tippingNotes:
      "Tipping is expected throughout Las Vegas. Casino dealers, hotel staff, and restaurant servers all rely on tips.",
  },
  {
    slug: "bali",
    name: "Bali",
    country: "Indonesia",
    defaultTipPercentage: 10,
    customaryTipRange: { min: 5, max: 10 },
    currency: "IDR",
    tippingNotes:
      "Tipping isn't traditionally expected in Bali, but is increasingly common in tourist areas. 5-10% is appreciated.",
  },
]
