import { calculatorCategories } from "@/lib/data"

// Collect all standard calculators from categories
const allCategoryCalculators = calculatorCategories.flatMap((category) =>
  category.calculators.map((calculator) => ({
    slug: calculator.slug,
    name: calculator.title,
    description: calculator.description,
    excerpt: calculator.excerpt
  }))
)

// Add any additional calculators that might not fit into a category
export const additionalCalculators = [
  { 
    slug: "digital-tipping-calculator", 
    name: "Digital Tipping Calculator",
    description: "Calculate tips for digital payments",
    excerpt: "Determine appropriate tips for digital and contactless payment services."
  },
  { 
    slug: "general-tip-calculator", 
    name: "General Tip Calculator",
    description: "All-purpose tip calculator",
    excerpt: "A versatile calculator for determining tips in any service situation."
  },
  { 
    slug: "custom-tip-calculator", 
    name: "Custom Tip Calculator",
    description: "Create your own tip calculation",
    excerpt: "Build a personalized tip calculation based on your specific needs and preferences."
  },
  { 
    slug: "international-tip-calculator", 
    name: "International Tip Calculator",
    description: "Calculate tips based on country",
    excerpt: "Determine appropriate tips based on local customs and expectations in different countries."
  },
  { 
    slug: "group-dining-tip-calculator", 
    name: "Group Dining Tip Calculator",
    description: "Calculate tips for large parties",
    excerpt: "Split bills and calculate tips fairly for large dining groups and parties."
  },
  { 
    slug: "group-dining-calculator", 
    name: "Group Dining Calculator",
    description: "Calculate tips for group meals",
    excerpt: "Easily split bills and calculate appropriate tips for group dining experiences."
  },
  { 
    slug: "wedding-vendor-tip-calculator", 
    name: "Wedding Vendor Tip Calculator",
    description: "Calculate tips for wedding service providers",
    excerpt: "Determine appropriate gratuity for wedding vendors and service professionals."
  },
  { 
    slug: "valet-parking-tip-calculator", 
    name: "Valet Parking Tip Calculator",
    description: "Calculate tips for valet service",
    excerpt: "Figure out appropriate tips for valet parking attendants."
  },
  { 
    slug: "tour-guide-tip-calculator", 
    name: "Tour Guide Tip Calculator",
    description: "Calculate tips for tour guides",
    excerpt: "Determine appropriate gratuity for tour guides and excursion leaders."
  },
  { 
    slug: "holiday-tip-calculator", 
    name: "Holiday Tip Calculator",
    description: "Calculate holiday season tips",
    excerpt: "Figure out appropriate holiday bonuses and tips for service providers."
  },
  { 
    slug: "camping-guide-tip-calculator", 
    name: "Camping Guide Tip Calculator",
    description: "Calculate tips for outdoor guides",
    excerpt: "Determine appropriate gratuity for camping and outdoor expedition guides."
  },
  { 
    slug: "golf-caddy-tip-calculator", 
    name: "Golf Caddy Tip Calculator",
    description: "Calculate tips for golf caddies",
    excerpt: "Figure out appropriate tips for golf caddies based on service and course type."
  },
  { 
    slug: "appliance-delivery-tip-calculator", 
    name: "Appliance Delivery Tip Calculator",
    description: "Calculate tips for appliance delivery",
    excerpt: "Determine gratuity for appliance delivery and installation services."
  },
  { 
    slug: "dog-groomer-tip-calculator", 
    name: "Dog Groomer Tip Calculator",
    description: "Calculate tips for pet groomers",
    excerpt: "Figure out appropriate tips for dog grooming services."
  },
  { 
    slug: "dog-walker-tip-calculator", 
    name: "Dog Walker Tip Calculator",
    description: "Calculate tips for dog walkers",
    excerpt: "Determine appropriate gratuity for dog walking services."
  },
  { 
    slug: "pet-sitter-tip-calculator", 
    name: "Pet Sitter Tip Calculator",
    description: "Calculate tips for pet sitting",
    excerpt: "Figure out how much to tip pet sitters for in-home animal care."
  },
  { 
    slug: "makeup-artist-tip-calculator", 
    name: "Makeup Artist Tip Calculator",
    description: "Calculate tips for makeup services",
    excerpt: "Determine appropriate gratuity for makeup artists for special events and services."
  },
  { 
    slug: "tailor-tip-calculator", 
    name: "Tailor Tip Calculator",
    description: "Calculate tips for tailoring services",
    excerpt: "Figure out how much to tip tailors for alterations and custom clothing."
  },
  { 
    slug: "car-wash-tip-calculator", 
    name: "Car Wash Tip Calculator",
    description: "Calculate tips for car washing services",
    excerpt: "Determine appropriate gratuity for manual and detailing car wash services."
  },
  { 
    slug: "ski-instructor-tip-calculator", 
    name: "Ski Instructor Tip Calculator",
    description: "Calculate tips for ski lessons",
    excerpt: "Figure out how much to tip ski and snowboard instructors."
  },
  { 
    slug: "fishing-guide-tip-calculator", 
    name: "Fishing Guide Tip Calculator",
    description: "Calculate tips for fishing guides",
    excerpt: "Determine appropriate gratuity for fishing expedition guides."
  },
  { 
    slug: "hunting-guide-tip-calculator", 
    name: "Hunting Guide Tip Calculator",
    description: "Calculate tips for hunting guides",
    excerpt: "Figure out how much to tip hunting guides and outfitters."
  },
  { 
    slug: "doorman-tip-calculator", 
    name: "Doorman Tip Calculator",
    description: "Calculate tips for building doormen",
    excerpt: "Determine appropriate gratuity for building doormen and concierge services."
  },
  { 
    slug: "bathroom-attendant-tip-calculator", 
    name: "Bathroom Attendant Tip Calculator",
    description: "Calculate tips for restroom attendants",
    excerpt: "Figure out how much to tip bathroom attendants at upscale venues."
  },
  { 
    slug: "coat-check-tip-calculator", 
    name: "Coat Check Tip Calculator",
    description: "Calculate tips for coat check service",
    excerpt: "Determine appropriate gratuity for coat check attendants."
  }
]

// Combine all calculators into a single list
export const allCalculators = [
  ...allCategoryCalculators,
  ...additionalCalculators
]

// Create a Map to remove duplicates - keeping only one calculator per unique slug
const uniqueCalculatorsMap = new Map()
allCalculators.forEach(calculator => {
  uniqueCalculatorsMap.set(calculator.slug, calculator)
})

// Convert back to an array
export const calculators = Array.from(uniqueCalculatorsMap.values()) 