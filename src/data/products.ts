// Product images - High resolution verified Unsplash images for agricultural machinery
const productImages = {
  // Super Seeder - Green tractor on brown field by Randy Fath
  superSeeder: "https://images.unsplash.com/photo-1594771804886-a933bb2d609b?w=800&q=80&auto=format&fit=crop",
  // Rotavator - Red harvester machine in grain field
  rotavator: "https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?w=800&q=80&auto=format&fit=crop",
  // Potato Grader - Agricultural sorting/vegetable processing
  potatoGrader: "https://images.unsplash.com/photo-1597916829826-02e5bb4a54e0?w=800&q=80&auto=format&fit=crop",
  // Disc Harrow - Wide farmland with tractor at golden hour
  discHarrow: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80&auto=format&fit=crop",
  // Chisel Plough - Tractor plowing agricultural field
  chiselPlough: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=800&q=80&auto=format&fit=crop",
  // Cold Storage - Industrial warehouse interior with metal shelving
  coldStorage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80&auto=format&fit=crop",
};

export interface Product {
  id: string;
  name: string;
  image: string;
  description: string;
  shortDescription: string;
  features: string[];
  benefits: string[];
  specifications: Record<string, string>;
  subsidyEligible: boolean;
  unitsManufactured: string;
  category: string;
}

export const products: Product[] = [
  {
    id: "super-seeder",
    name: "Super Seeder",
    image: productImages.superSeeder,
    description: "Advanced seeding technology for wheat and other crops. Over 1,600 units manufactured, including 800 supplied under government programs. This eco-friendly technology saves money by reducing field operation time, fuel, and labor costs.",
    shortDescription: "Advanced seeding technology for wheat and other crops. Over 1,600 units manufactured, including 800 supplied under government programs.",
    category: "Planting Equipment",
    features: [
      "Precision Seeding",
      "Multi-Crop Support",
      "Government Approved",
      "Eco-Friendly Technology",
      "Reduced Soil Disturbance",
      "Aluminum Fluted Roller Type Seed Mechanism"
    ],
    benefits: [
      "This technology is eco-friendly",
      "Saves money as less time is needed to carry out field operation which in turn reduces fuel and labor costs",
      "Super Seeder direct sowing also reduces soil disturbance",
      "We can stop burning of straw",
      "Less weed growth",
      "Improve soil health",
      "Farmer has no need to buy a rotary tiller separately"
    ],
    specifications: {
      "Model": "RK-SS-05",
      "Tractor Power (HP)": "65",
      "Working Width (mm)": "2000",
      "No. of Blades": "54",
      "Type of Blade": "LJF Types",
      "Thickness of Blade (mm)": "7mm",
      "Gear Box": "Multispeed 13/25",
      "Side Driver": "Gear Driver 23/25/26",
      "Seed & Fertilizer Mechanism": "Aluminum Fluted Roller Type",
      "Press Roller": "Available",
      "No. of Tynes": "11",
      "Weight (Kg. Approx.)": "1025",
      "Length (mm)": "2530",
      "Width (mm)": "1780",
      "Height (mm)": "1530"
    },
    subsidyEligible: true,
    unitsManufactured: "1,600+"
  },
  {
    id: "rotavator",
    name: "Rotavator",
    image: productImages.rotavator,
    description: "High-performance land preparation equipment for efficient tillage operations. 300+ units manufactured and deployed across Pakistan. Perfect for preparing seedbeds and mixing soil.",
    shortDescription: "High-performance land preparation equipment for efficient tillage operations. 300+ units manufactured and deployed.",
    category: "Tillage Equipment",
    features: [
      "Efficient Tillage",
      "Durable Design",
      "Versatile Application",
      "Heavy Duty Construction",
      "Adjustable Depth",
      "High Speed Operation"
    ],
    benefits: [
      "Efficient soil preparation",
      "Reduces multiple passes",
      "Saves time and fuel",
      "Improves soil structure",
      "Suitable for various soil types",
      "Long-lasting construction"
    ],
    specifications: {
      "Model": "RK-RT-07",
      "Tractor Power (HP)": "50-75",
      "Working Width (ft)": "5-7",
      "No. of Blades": "32-48",
      "Rotor Speed (RPM)": "180-220",
      "Working Depth (inches)": "4-8",
      "Weight (Kg)": "450-650",
      "Gear Box": "Heavy Duty",
      "Type": "Heavy Duty Rotavator"
    },
    subsidyEligible: true,
    unitsManufactured: "300+"
  },
  {
    id: "potato-grader",
    name: "Potato Grader",
    image: productImages.potatoGrader,
    description: "Specialized grading equipment for post-harvest potato processing. 200+ units ensuring quality sorting and grading. Helps farmers maximize their returns by proper size classification.",
    shortDescription: "Specialized grading equipment for post-harvest potato processing. 200+ units ensuring quality sorting and grading.",
    category: "Post-Harvest Equipment",
    features: [
      "Precision Grading",
      "High Capacity",
      "Quality Assurance",
      "Multiple Size Categories",
      "Easy Operation",
      "Durable Construction"
    ],
    benefits: [
      "Accurate size classification",
      "Increases market value",
      "Reduces manual labor",
      "Fast processing",
      "Minimizes damage",
      "Improves product quality"
    ],
    specifications: {
      "Model": "RK-PG-10",
      "Capacity (Kg/hour)": "2000-3000",
      "Power Required (HP)": "5-7",
      "Grading Categories": "4-6",
      "Size Range (mm)": "25-100",
      "Weight (Kg)": "350",
      "Dimensions (LxWxH)": "3000x1200x1500 mm",
      "Material": "Food Grade Stainless Steel"
    },
    subsidyEligible: true,
    unitsManufactured: "200+"
  },
  {
    id: "disc-harrow",
    name: "Disc Harrow",
    image: productImages.discHarrow,
    description: "Robust disc harrows for effective land preparation and soil management. 50+ units manufactured. Ideal for breaking up soil, cutting weeds, and mixing crop residues.",
    shortDescription: "Robust disc harrows for effective land preparation and soil management. 50+ units manufactured.",
    category: "Tillage Equipment",
    features: [
      "Heavy Duty",
      "Deep Tillage",
      "Durable Construction",
      "Adjustable Angle",
      "Multiple Discs",
      "Corrosion Resistant"
    ],
    benefits: [
      "Effective soil breaking",
      "Weed control",
      "Crop residue mixing",
      "Deep tillage capability",
      "Suitable for hard soils",
      "Long service life"
    ],
    specifications: {
      "Model": "RK-DH-12",
      "Tractor Power (HP)": "45-65",
      "Working Width (ft)": "6-8",
      "No. of Discs": "16-24",
      "Disc Diameter (inches)": "20-24",
      "Working Depth (inches)": "4-6",
      "Weight (Kg)": "400-600",
      "Gang Angle": "Adjustable"
    },
    subsidyEligible: true,
    unitsManufactured: "50+"
  },
  {
    id: "chisel-plough",
    name: "Chisel Plough",
    image: productImages.chiselPlough,
    description: "Advanced chisel ploughs for deep tillage and soil aeration. 50+ units supporting sustainable farming practices. Helps improve soil structure and water infiltration.",
    shortDescription: "Advanced chisel ploughs for deep tillage and soil aeration. 50+ units supporting sustainable farming practices.",
    category: "Tillage Equipment",
    features: [
      "Deep Tillage",
      "Soil Aeration",
      "Eco-Friendly",
      "Conservation Tillage",
      "Adjustable Depth",
      "Heavy Duty Tines"
    ],
    benefits: [
      "Improves soil structure",
      "Better water infiltration",
      "Reduces soil compaction",
      "Conservation tillage",
      "Maintains soil moisture",
      "Environmentally friendly"
    ],
    specifications: {
      "Model": "RK-CP-15",
      "Tractor Power (HP)": "50-70",
      "Working Width (ft)": "7-9",
      "No. of Tines": "5-7",
      "Working Depth (inches)": "8-12",
      "Tine Spacing (inches)": "12-16",
      "Weight (Kg)": "350-500",
      "Type": "Heavy Duty Chisel"
    },
    subsidyEligible: true,
    unitsManufactured: "50+"
  },
  {
    id: "cold-storage",
    name: "Cold Storage Units",
    image: productImages.coldStorage,
    description: "Complete cold storage infrastructure solutions for post-harvest preservation. 40 units installed across Pakistan. Ensures optimal storage conditions for agricultural produce.",
    shortDescription: "Complete cold storage infrastructure solutions for post-harvest preservation. 40 units installed across Pakistan.",
    category: "Post-Harvest Infrastructure",
    features: [
      "Temperature Control",
      "Energy Efficient",
      "Complete Solutions",
      "Automated Systems",
      "Customizable Capacity",
      "Professional Installation"
    ],
    benefits: [
      "Extended shelf life",
      "Reduces post-harvest losses",
      "Maintains product quality",
      "Energy efficient operation",
      "Year-round storage",
      "Increases profitability"
    ],
    specifications: {
      "Capacity Range": "10-100 Tons",
      "Temperature Range": "-5°C to +15°C",
      "Power Supply": "3-Phase",
      "Refrigeration System": "Ammonia/CFC Free",
      "Insulation": "PUF Panel",
      "Control System": "Automated",
      "Installation": "Complete Turnkey"
    },
    subsidyEligible: true,
    unitsManufactured: "40+"
  }
];

export default products;

