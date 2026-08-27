import type { LucideIcon } from "lucide-react";
import {
  Building2,
  Droplets,
  Flower2,
  Hammer,
  Home,
  Leaf,
  Shovel,
  Sparkles,
  SprayCan,
  Trees,
  Wrench,
} from "lucide-react";
import { images } from "@/lib/images";

export type ServiceCategory = "commercial" | "residential" | "seasonal" | "maintenance";

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  category: ServiceCategory;
  icon: LucideIcon;
  heroImage: string;
  benefitsImage?: string;
  description: string;
  overview: string;
  overviewParagraphs?: string[];
  benefits: string[];
  audience: string[];
  included: string[];
  process: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  relatedSlugs: string[];
  keywords: string[];
};

export const services: Service[] = [
  {
    slug: "commercial-cleaning",
    title: "Commercial Cleaning Edmonton",
    shortTitle: "Commercial Cleaning",
    category: "commercial",
    icon: Building2,
    heroImage: images.commercial,
    benefitsImage: images.commercialLobby,
    description:
      "Professional commercial cleaning for corporate offices, retail, healthcare, schools, warehouses, and multi-tenant buildings across Alberta.",
    overview:
      "We provide professional cleaning services with customized daily, weekly, and contract-based cleaning plans. Our dependable teams help businesses maintain clean, safe, and professionally managed environments.",
    overviewParagraphs: [
      "A clean workplace supports employee health, productivity, and the impression you leave on clients and visitors. Offices, retail spaces, and shared commercial buildings need consistent care for restrooms, floors, and high-touch surfaces.",
      "Enviro Horizon provides commercial cleaning across Edmonton and surrounding Alberta for offices, retail, restaurants, clinics, schools, warehouses, and multi-tenant buildings. We offer daily, weekly, and contract-based plans built around your layout and hours.",
      "Our teams follow structured checklists for restrooms, workstations, floors, break rooms, and common areas. After-hours scheduling, healthcare and food-service protocols, and clear site communication help keep every visit consistent.",
    ],
    benefits: [
      "Consistent results with documented quality checks",
      "Flexible scheduling including after-hours service",
      "Bonded, insured, and WHMIS-trained teams",
      "Customized scope for high-traffic and sensitive areas",
      "Single provider for cleaning and facility support",
    ],
    audience: [
      "Corporate offices",
      "Retail stores",
      "Restaurants and hospitality businesses",
      "Medical clinics and healthcare facilities",
      "Schools and educational institutions",
      "Warehouses and industrial facilities",
      "Apartment buildings and common areas",
    ],
    included: [
      "Restroom sanitization and restocking",
      "Floor care: vacuum, mop, and spot treatment",
      "Desk and workstation dusting",
      "Kitchen and break room cleaning",
      "Entrance, lobby, and glass touch-ups",
      "Trash removal and recycling management",
    ],
    process: [
      {
        title: "Site walkthrough",
        description:
          "We assess square footage, traffic patterns, and compliance needs to build an accurate scope.",
      },
      {
        title: "Custom cleaning plan",
        description:
          "Frequency, checkpoints, and product preferences are documented in your service agreement.",
      },
      {
        title: "Dedicated crew assignment",
        description:
          "The same trained team learns your building layout for consistency and accountability.",
      },
      {
        title: "Ongoing quality reviews",
        description:
          "Supervisors conduct regular inspections and adjust protocols as your needs evolve.",
      },
    ],
    faqs: [
      {
        question: "Do you provide after-hours commercial cleaning in Edmonton?",
        answer:
          "Yes. We routinely service offices and retail spaces before opening or after closing to minimize disruption to your operations.",
      },
      {
        question: "Can you meet healthcare or food-service cleaning standards?",
        answer:
          "We customize protocols for clinics, dental offices, and food-handling areas with enhanced disinfection procedures.",
      },
    ],
    relatedSlugs: [
      "janitorial-services",
      "post-construction-cleaning",
      "property-maintenance",
    ],
    keywords: ["Commercial Cleaning Edmonton", "Office Cleaning Edmonton"],
  },
  {
    slug: "residential-cleaning",
    title: "Residential Cleaning Edmonton",
    shortTitle: "Residential Cleaning",
    category: "residential",
    icon: Home,
    heroImage: images.residentialCleaning,
    benefitsImage: images.residentialBefore,
    description:
      "Helping homeowners maintain healthier and stress-free living spaces with deep cleaning, recurring plans, and move-in or move-out services.",
    overview:
      "Because every home deserves exceptional care. We provide residential cleaning services that help homeowners maintain healthier, stress-free living spaces with flexible plans tailored to your needs.",
    overviewParagraphs: [
      "A clean home supports your family's health, comfort, and peace of mind. Kitchens, bathrooms, bedrooms, and living areas need regular attention to stay fresh, hygienic, and welcoming for everyone who walks through the door.",
      "Enviro Horizon provides residential cleaning across Edmonton and surrounding Alberta for homeowners, busy professionals, families, and rental property owners. We offer deep cleans, recurring house cleaning, move-in and move-out service, and flexible schedules built around your routine.",
      "Our teams follow detailed room-by-room checklists with background-checked, uniformed cleaners. Eco-friendly product options, same-day availability, and a satisfaction guarantee on every visit help keep your home consistently guest-ready.",
    ],
    benefits: [
      "Background-checked, uniformed cleaners",
      "Eco-friendly product options available",
      "Same-day and recurring schedules",
      "Detailed room-by-room checklists",
      "Satisfaction guarantee on every visit",
    ],
    audience: [
      "Homeowners",
      "Busy professionals",
      "Families",
      "Rental property owners",
      "Move-in and move-out clients",
    ],
    included: [
      "Deep cleaning",
      "Regular house cleaning",
      "Move-in and move-out cleaning",
      "Apartment cleaning",
      "Kitchen and bathroom sanitation",
      "Post-renovation cleaning",
      "Recurring cleaning plans",
    ],
    process: [
      {
        title: "Consultation",
        description:
          "Tell us about your home size, priorities, and any areas needing special attention.",
      },
      {
        title: "Personalized quote",
        description:
          "Transparent pricing based on scope with no hidden fees or surprise add-ons.",
      },
      {
        title: "First clean",
        description:
          "We establish your baseline standard and note preferences for future visits.",
      },
      {
        title: "Recurring care",
        description:
          "Weekly, bi-weekly, or monthly plans keep your home consistently guest-ready.",
      },
    ],
    faqs: [
      {
        question: "Do I need to be home during the cleaning?",
        answer:
          "Not at all. Many clients provide entry instructions. We are fully insured and treat your home with complete respect.",
      },
      {
        question: "Do you bring your own supplies?",
        answer:
          "Yes. We arrive with professional-grade equipment and can use your preferred products upon request.",
      },
    ],
    relatedSlugs: ["pressure-washing", "lawn-care", "property-maintenance"],
    keywords: ["Residential Cleaning Edmonton", "House Cleaning Edmonton"],
  },
  {
    slug: "janitorial-services",
    title: "Janitorial Services Edmonton",
    shortTitle: "Janitorial Services",
    category: "commercial",
    icon: Sparkles,
    heroImage: images.janitorial,
    benefitsImage: images.commercialLobby,
    description:
      "Reliable janitorial services for schools, offices, and multi-site portfolios across the Edmonton metro area.",
    overview:
      "Our janitorial programs combine nightly maintenance, day porter support, and rapid response for spills and emergencies. Property managers trust Enviro Horizon for dependable coverage, clear reporting, and crews who represent your brand professionally.",
    overviewParagraphs: [
      "Well-maintained facilities reflect your organization's standards and keep occupants safe. Schools, offices, and multi-tenant buildings need reliable daily care for restrooms, common areas, and high-traffic zones throughout operating hours.",
      "Enviro Horizon provides janitorial services across Edmonton and surrounding Alberta for schools, corporate campuses, apartment complexes, municipal facilities, and shopping centres. We offer nightly cleaning, day porter support, and scalable programs for single or multi-site portfolios.",
      "Our crews handle disinfection, supply restocking, elevator and stairwell care, and emergency spill response with clear incident reporting. Dedicated staffing plans, supervised launch weeks, and monthly performance reviews keep every site consistently maintained.",
    ],
    benefits: [
      "Scalable programs for single or multi-site portfolios",
      "Day porter and night crew options",
      "Supply management and restocking",
      "Incident reporting and rapid response",
      "Competitive pricing with transparent contracts",
    ],
    audience: [
      "Schools and universities",
      "Corporate campuses",
      "Apartment complexes",
      "Municipal facilities",
      "Shopping centres",
    ],
    included: [
      "Nightly cleaning and disinfection",
      "Day porter services",
      "Common area maintenance",
      "Elevator and stairwell care",
      "Seasonal floor treatments",
      "Emergency spill response",
    ],
    process: [
      {
        title: "Facility assessment",
        description: "We map zones, traffic flow, and compliance requirements.",
      },
      {
        title: "Staffing plan",
        description: "Crew size and shift timing aligned to your operating hours.",
      },
      {
        title: "Launch week",
        description: "Supervised onboarding ensures every checklist is executed correctly.",
      },
      {
        title: "Performance reporting",
        description: "Monthly reviews and open communication with your account manager.",
      },
    ],
    faqs: [
      {
        question: "Can you service multiple buildings under one contract?",
        answer:
          "Yes. We specialize in multi-site janitorial programs with centralized billing and consistent standards.",
      },
      {
        question: "Do you provide day porters?",
        answer:
          "Absolutely. Day porters handle restrooms, lobbies, and touchpoints throughout business hours.",
      },
    ],
    relatedSlugs: ["commercial-cleaning", "property-maintenance"],
    keywords: ["Janitorial Services Edmonton", "Day Porter Edmonton"],
  },
  {
    slug: "snow-removal",
    title: "Snow Removal Edmonton",
    shortTitle: "Snow Removal",
    category: "seasonal",
    icon: Shovel,
    heroImage: images.snowRemoval,
    benefitsImage: images.snowRemovalBenefits,
    description:
      "Reliable winter service when Alberta weather becomes unpredictable, keeping properties safe all winter long.",
    overview:
      "We provide dependable snow removal and winter maintenance when Alberta weather becomes unpredictable. Our teams help keep residential and commercial properties safe and accessible throughout the winter season.",
    overviewParagraphs: [
      "Winter weather in Alberta creates safety risks, access problems, and liability concerns for property owners. Driveways, parking lots, sidewalks, and entrances must be cleared promptly to protect visitors, tenants, and staff throughout the season.",
      "Enviro Horizon provides snow removal and winter maintenance across Edmonton and surrounding Alberta for retail and office properties, condo boards, homeowners, industrial sites, and schools. We offer residential clearing, commercial plowing, and seasonal contracts with priority response.",
      "Our teams monitor storms around the clock and dispatch based on agreed trigger depths. Ice control, sanding, parking lot clearing, and completion verification help keep your property safe and accessible after every snowfall.",
    ],
    benefits: [
      "24/7 storm monitoring and dispatch",
      "Commercial plowing and residential driveways",
      "Ice control and sanding",
      "Liability-focused documentation",
      "Seasonal contracts with priority response",
    ],
    audience: [
      "Retail and office properties",
      "Condo and apartment boards",
      "Homeowners",
      "Industrial sites",
      "Schools and churches",
    ],
    included: [
      "Residential snow clearing",
      "Commercial snow removal",
      "Parking lot clearing",
      "Sidewalk snow clearing",
      "Ice management and de-icing",
      "Winter hazard prevention services",
    ],
    process: [
      {
        title: "Property mapping",
        description: "We document priority zones, obstacles, and access points.",
      },
      {
        title: "Trigger depth agreement",
        description: "Service levels defined by snowfall thresholds and response times.",
      },
      {
        title: "Storm dispatch",
        description: "Crews mobilize automatically based on weather alerts.",
      },
      {
        title: "Completion verification",
        description: "Site checks ensure safety standards are met before handoff.",
      },
    ],
    faqs: [
      {
        question: "How quickly do you respond after a snowfall?",
        answer:
          "Commercial clients on priority contracts are typically serviced within 2–4 hours of trigger depth. Residential routes follow based on storm severity.",
      },
      {
        question: "Do you offer seasonal contracts?",
        answer:
          "Yes. Seasonal agreements provide predictable pricing and guaranteed priority during peak winter events.",
      },
    ],
    relatedSlugs: ["property-maintenance", "landscaping"],
    keywords: ["Snow Removal Edmonton", "Commercial Snow Plowing Edmonton"],
  },
  {
    slug: "landscaping",
    title: "Landscaping Edmonton",
    shortTitle: "Landscaping",
    category: "maintenance",
    icon: Trees,
    heroImage: images.landscaping,
    benefitsImage: images.landscapingBenefits,
    description:
      "Helping outdoor spaces remain beautiful and professionally maintained because first impressions begin outside.",
    overview:
      "We provide landscaping and lawn care services that help outdoor spaces remain beautiful and professionally maintained throughout the year.",
    overviewParagraphs: [
      "Your property's exterior is the first thing visitors, tenants, and customers notice. Well-kept lawns, garden beds, and green spaces signal professionalism and care while protecting the long-term value of your investment.",
      "Enviro Horizon provides landscaping services across Edmonton and surrounding Alberta for homeowners, HOAs, office parks, retail centres, and new developments. We offer design consultation, seasonal planting, bed maintenance, and year-round landscape management.",
      "Our crews handle mowing, edging, mulching, weed control, and spring and fall cleanups with plans tailored to Alberta's growing seasons. Integrated programs that combine landscaping with snow and lawn care simplify property management under one trusted provider.",
    ],
    benefits: [
      "Design consultation and installation",
      "Seasonal planting and bed maintenance",
      "Mulching, edging, and weed control",
      "Commercial landscape management",
      "Integrated snow and lawn programs",
    ],
    audience: [
      "Homeowners",
      "HOAs and condo boards",
      "Office parks",
      "Retail centres",
      "New developments",
    ],
    included: [
      "Lawn mowing",
      "Yard maintenance",
      "Seasonal landscaping",
      "Garden care",
      "Weed management",
      "Spring and fall cleanup",
      "Property beautification solutions",
    ],
    process: [
      {
        title: "Landscape consultation",
        description: "We evaluate soil, sun exposure, and your aesthetic goals.",
      },
      {
        title: "Design proposal",
        description: "Clear visuals and phased options for budget flexibility.",
      },
      {
        title: "Professional installation",
        description: "Experienced crews handle planting, edging, and finishing.",
      },
      {
        title: "Maintenance program",
        description: "Ongoing care keeps your investment thriving season after season.",
      },
    ],
    faqs: [
      {
        question: "Do you handle both residential and commercial landscaping?",
        answer:
          "Yes. From backyard retreats to retail plaza grounds, we scale our team to your property size.",
      },
      {
        question: "When is the best time to start a landscaping project in Edmonton?",
        answer:
          "Spring through early fall is ideal for planting, though we plan year-round and book early for peak season.",
      },
    ],
    relatedSlugs: ["lawn-care", "pressure-washing", "property-maintenance"],
    keywords: ["Landscaping Edmonton", "Commercial Landscaping Alberta"],
  },
  {
    slug: "lawn-care",
    title: "Lawn Care Edmonton",
    shortTitle: "Lawn Care",
    category: "maintenance",
    icon: Leaf,
    heroImage: images.lawn,
    benefitsImage: images.garden,
    description:
      "Expert lawn mowing, fertilization, and seasonal turf care for lush, healthy lawns across the Edmonton region.",
    overview:
      "A well-maintained lawn signals professionalism and pride. Our lawn care teams deliver precise mowing, edging, aeration, and fertilization schedules calibrated for Alberta's climate, keeping grass thick, green, and weed-free.",
    overviewParagraphs: [
      "A healthy lawn improves curb appeal, supports property value, and creates an inviting outdoor space for families and businesses. Turf needs consistent mowing, edging, and seasonal care to thrive in Alberta's climate.",
      "Enviro Horizon provides lawn care across Edmonton and surrounding Alberta for residential homeowners, rental properties, commercial office parks, schools, and strata communities. We offer weekly or bi-weekly mowing, fertilization, and weed management on fixed schedules.",
      "Our crews evaluate turf health, build seasonal care calendars, and adjust programs for spring growth, summer stress, and fall preparation. Aeration, overseeding, and bundled landscaping savings help keep your lawn thick, green, and weed-free year after year.",
    ],
    benefits: [
      "Consistent mowing schedules",
      "Fertilization and weed management",
      "Spring and fall cleanups",
      "Aeration and overseeding",
      "Bundled landscaping savings",
    ],
    audience: [
      "Residential homeowners",
      "Rental properties",
      "Commercial office parks",
      "Schools",
      "Strata communities",
    ],
    included: [
      "Weekly or bi-weekly mowing",
      "Trimming and edging",
      "Clipping removal",
      "Seasonal fertilization",
      "Weed treatment programs",
      "Spring and fall cleanup",
    ],
    process: [
      {
        title: "Lawn evaluation",
        description: "We assess turf health, drainage, and problem areas.",
      },
      {
        title: "Care calendar",
        description: "A seasonal schedule tailored to Alberta growing conditions.",
      },
      {
        title: "Regular service",
        description: "Reliable crews maintain your lawn on a fixed schedule.",
      },
      {
        title: "Seasonal adjustments",
        description: "Programs adapt for spring growth, summer stress, and fall prep.",
      },
    ],
    faqs: [
      {
        question: "How often should I mow my lawn in Edmonton?",
        answer:
          "During peak growth (May–July), weekly mowing is ideal. We adjust frequency as seasons change.",
      },
      {
        question: "Do you offer one-time lawn cleanup?",
        answer:
          "Yes. Spring and fall cleanups are available as standalone services or part of a maintenance plan.",
      },
    ],
    relatedSlugs: ["landscaping", "pressure-washing"],
    keywords: ["Lawn Care Edmonton", "Lawn Mowing Edmonton"],
  },
  {
    slug: "pressure-washing",
    title: "Pressure Washing Edmonton",
    shortTitle: "Pressure Washing",
    category: "maintenance",
    icon: SprayCan,
    heroImage: images.pressureWashingService,
    benefitsImage: images.pressureWashingBenefits,
    description:
      "Professional exterior cleaning that brings your property back to life.",
    overview:
      "We provide professional pressure washing for driveways, sidewalks, building exteriors, decks, patios, parking lots, and commercial storefronts affected by dirt buildup.",
    overviewParagraphs: [
      "Built-up dirt, mould, and grime on exterior surfaces make properties look neglected and can accelerate wear over time. Driveways, sidewalks, building facades, and decks benefit from periodic deep cleaning to restore appearance and protect materials.",
      "Enviro Horizon provides pressure washing across Edmonton and surrounding Alberta for homeowners, property managers, restaurants, storefronts, parkade operators, and construction companies. We clean driveways, sidewalks, exteriors, decks, patios, and parking lots.",
      "Our teams inspect each surface, select the right pressure and method, and use soft-wash techniques on delicate materials. Eco-conscious solutions, area preparation, and before-and-after documentation ensure thorough results without damage to your property.",
    ],
    benefits: [
      "Residential and commercial capability",
      "Soft-wash options for delicate surfaces",
      "Eco-conscious cleaning solutions",
      "Before-and-after documentation",
      "Ideal prep for painting or sealing",
    ],
    audience: [
      "Homeowners",
      "Property managers",
      "Restaurants and storefronts",
      "Parkade operators",
      "Construction companies",
    ],
    included: [
      "Driveways",
      "Sidewalks",
      "Building exteriors",
      "Decks and patios",
      "Parking lots",
      "Commercial storefronts",
      "Exterior surfaces affected by dirt buildup",
    ],
    process: [
      {
        title: "Surface inspection",
        description: "We identify material type and select the right pressure and method.",
      },
      {
        title: "Area preparation",
        description: "Plants and fixtures are protected before work begins.",
      },
      {
        title: "Deep clean",
        description: "Systematic passes remove built-up dirt, mould, and stains.",
      },
      {
        title: "Final walkthrough",
        description: "We verify even coverage and your complete satisfaction.",
      },
    ],
    faqs: [
      {
        question: "Will pressure washing damage my siding?",
        answer:
          "We use soft-wash techniques on delicate surfaces and adjust pressure for each material to prevent damage.",
      },
      {
        question: "How often should commercial exteriors be washed?",
        answer:
          "Most Edmonton commercial properties benefit from annual washing, with high-traffic storefronts twice yearly.",
      },
    ],
    relatedSlugs: ["post-construction-cleaning", "property-maintenance"],
    keywords: ["Pressure Washing Edmonton", "Driveway Cleaning Edmonton"],
  },
  {
    slug: "post-construction-cleaning",
    title: "Post Construction Cleaning Edmonton",
    shortTitle: "Post Construction Cleaning",
    category: "commercial",
    icon: Hammer,
    heroImage: images.postConstructionCleanup,
    benefitsImage: images.postConstructionCleanupBenefits,
    description:
      "Final construction cleanup that makes new spaces ready for use.",
    overview:
      "Construction projects leave behind dust and debris. We handle final construction cleanup, debris removal, and occupancy-ready finishing so new spaces are ready for use.",
    overviewParagraphs: [
      "Construction and renovation projects leave behind dust, debris, and fine particles that standard cleaning cannot address. New and renovated spaces need a thorough final clean before occupancy, inspection, or handover to tenants and owners.",
      "Enviro Horizon provides post-construction cleaning across Edmonton and surrounding Alberta for general contractors, developers, renovation contractors, property managers, and homeowners. We handle debris removal, dust control, and occupancy-ready finishing.",
      "Our teams follow multi-phase protocols from rough clean through detail and touch-up passes. Window, fixture, and floor finishing, safety-focused debris handling, and fast turnaround align with your project timeline and sign-off requirements.",
    ],
    benefits: [
      "Multi-phase cleaning protocols",
      "Experience with builders and GCs",
      "Window, fixture, and floor finishing",
      "Fast turnaround for occupancy deadlines",
      "Safety-focused debris handling",
    ],
    audience: [
      "General contractors",
      "Developers",
      "Renovation contractors",
      "Property managers",
      "Homeowners post-renovation",
    ],
    included: [
      "Final construction cleanup",
      "Debris removal",
      "Dust and surface cleaning",
      "Floor cleaning",
      "Occupancy-ready finishing cleaning",
    ],
    process: [
      {
        title: "Rough clean",
        description: "Bulk debris removal and initial dust pass after trades complete.",
      },
      {
        title: "Detail clean",
        description: "Fine dust, fixtures, and surfaces prepared for inspection.",
      },
      {
        title: "Touch-up clean",
        description: "Final polish after punch-list items are resolved.",
      },
      {
        title: "Client walkthrough",
        description: "We align with your occupancy timeline and sign-off requirements.",
      },
    ],
    faqs: [
      {
        question: "Do you work directly with general contractors?",
        answer:
          "Yes. We partner with builders across Edmonton on recurring project cleans and one-off turnovers.",
      },
      {
        question: "Can you meet tight move-in deadlines?",
        answer:
          "We staff flexibly for deadline-driven projects and communicate daily progress to your site supervisor.",
      },
    ],
    relatedSlugs: ["commercial-cleaning", "pressure-washing"],
    keywords: ["Post Construction Cleaning Edmonton", "Builder Clean Edmonton"],
  },
  {
    slug: "property-maintenance",
    title: "Property Maintenance Edmonton",
    shortTitle: "Property Maintenance",
    category: "maintenance",
    icon: Wrench,
    heroImage: images.propertyMaintenance,
    benefitsImage: images.commercialLobby,
    description:
      "Long-term maintenance solutions that protect property value while reducing operational stress.",
    overview:
      "We provide property maintenance services for residential and commercial properties, protecting property value while reducing operational stress through dependable, year-round support.",
    overviewParagraphs: [
      "Managing a property means coordinating cleaning, grounds care, snow removal, and facility upkeep across every season. Gaps in maintenance lead to higher costs, tenant complaints, and preventable wear on your building and grounds.",
      "Enviro Horizon provides property maintenance across Edmonton and surrounding Alberta for property management companies, facility managers, landlords, commercial building owners, and strata councils. We bundle exterior care, facility upkeep, and seasonal support under one provider.",
      "Our account managers audit each property, build integrated service plans, and coordinate year-round execution from summer grounds care to winter snow operations. Simplified billing, proactive scheduling, and reduced vendor overhead protect your property value long term.",
    ],
    benefits: [
      "One provider for all seasons",
      "Simplified billing and communication",
      "Dedicated account management",
      "Proactive maintenance scheduling",
      "Reduced vendor coordination overhead",
    ],
    audience: [
      "Property management companies",
      "Facility managers",
      "Landlords",
      "Commercial building owners",
      "Strata councils",
    ],
    included: [
      "Exterior property maintenance",
      "General facility upkeep",
      "Seasonal maintenance support",
      "Property inspections",
      "Building support services",
      "Long-term maintenance contracts",
    ],
    process: [
      {
        title: "Portfolio review",
        description: "We audit each property's needs across seasons and service lines.",
      },
      {
        title: "Integrated service plan",
        description: "Bundled programs maximize efficiency and reduce total cost.",
      },
      {
        title: "Centralized coordination",
        description: "One account manager handles scheduling, billing, and requests.",
      },
      {
        title: "Year-round execution",
        description: "Seamless transitions between summer grounds care and winter snow ops.",
      },
    ],
    faqs: [
      {
        question: "Can you maintain both residential rentals and commercial buildings?",
        answer:
          "Yes. We support mixed portfolios with tailored scopes for each property type.",
      },
      {
        question: "How does bundling services save money?",
        answer:
          "Shared crews, route efficiency, and single-contract administration reduce overhead, and we pass those savings to you.",
      },
    ],
    relatedSlugs: [
      "commercial-cleaning",
      "snow-removal",
      "landscaping",
      "janitorial-services",
    ],
    keywords: [
      "Property Maintenance Edmonton",
      "Facility Maintenance Alberta",
      "Property Services Edmonton",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(slugs: string[]): Service[] {
  return slugs
    .map((slug) => getServiceBySlug(slug))
    .filter((s): s is Service => Boolean(s));
}

export type ServiceListingCard = {
  slug: string;
  title: string;
};

export const serviceListingCards: ServiceListingCard[] = [
  { slug: "commercial-cleaning", title: "Commercial Cleaning Services" },
  { slug: "residential-cleaning", title: "Residential Cleaning Services" },
  { slug: "snow-removal", title: "Snow Removal & Winter Maintenance" },
  { slug: "landscaping", title: "Landscaping & Lawn Care" },
  { slug: "pressure-washing", title: "Pressure Washing Services" },
  { slug: "property-maintenance", title: "Property Maintenance Services" },
  { slug: "post-construction-cleaning", title: "Post Construction Cleanup" },
];

export const serviceNavItems = services.map((s) => ({
  title: s.shortTitle,
  href: `/services/${s.slug}`,
}));
