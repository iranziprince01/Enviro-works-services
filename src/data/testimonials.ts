export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company?: string;
  location: string;
  quote: string;
  rating: number;
  service: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Mitchell",
    role: "Property Manager",
    company: "Northgate Commercial",
    location: "Edmonton, AB",
    quote:
      "Enviro Horizon transformed how we manage three office towers. Their janitorial team is punctual, thorough, and our tenant satisfaction scores have never been higher.",
    rating: 5,
    service: "Janitorial Services",
  },
  {
    id: "2",
    name: "David Chen",
    role: "Homeowner",
    location: "St. Albert, AB",
    quote:
      "We've used their residential cleaning for over two years. Every visit feels like walking into a brand-new home. Professional, friendly, and incredibly detail-oriented.",
    rating: 5,
    service: "Residential Cleaning",
  },
  {
    id: "3",
    name: "Amanda Torres",
    role: "Facility Director",
    company: "Riverbend Medical Centre",
    location: "Edmonton, AB",
    quote:
      "Healthcare cleaning demands precision. Enviro Horizon exceeded our infection-control expectations and adapted quickly to our scheduling needs.",
    rating: 5,
    service: "Commercial Cleaning",
  },
  {
    id: "4",
    name: "James Okonkwo",
    role: "General Contractor",
    company: "Summit Build Group",
    location: "Sherwood Park, AB",
    quote:
      "Their post-construction cleans are the fastest turnaround we've worked with. Spaces are occupancy-ready on the first walkthrough, every time.",
    rating: 5,
    service: "Post Construction Cleaning",
  },
  {
    id: "5",
    name: "Lisa Park",
    role: "Condo Board President",
    location: "Beaumont, AB",
    quote:
      "Snow removal used to be a nightmare for our residents. Enviro Horizon's 24/7 response and clear communication have made winters stress-free.",
    rating: 5,
    service: "Snow Removal",
  },
  {
    id: "6",
    name: "Michael Fraser",
    role: "Operations Manager",
    company: "Prairie Retail Group",
    location: "Leduc, AB",
    quote:
      "Bundling landscaping, pressure washing, and janitorial under one contract simplified everything. One invoice, one point of contact, excellent results.",
    rating: 5,
    service: "Property Maintenance",
  },
];

export const stats = [
  { label: "Years Serving Alberta", value: 2, suffix: "+" },
  { label: "Properties Maintained", value: 85, suffix: "+" },
  { label: "Client Satisfaction", value: 86, suffix: "%" },
  { label: "Service Calls Answered", value: 24, suffix: "/7" },
] as const;
