export type Career = {
  slug: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
};

export const careers: Career[] = [
  {
    slug: "commercial-cleaning-technician",
    title: "Commercial Cleaning Technician",
    department: "Operations",
    location: "Edmonton, AB",
    type: "Full-time",
    description:
      "Join our commercial cleaning team serving offices, retail, and healthcare facilities across the Edmonton metro. Competitive wages, paid training, and career growth opportunities.",
    requirements: [
      "Reliable transportation",
      "Ability to pass background check",
      "Physical ability to stand and move for extended periods",
      "Evening and weekend availability preferred",
    ],
  },
  {
    slug: "snow-removal-operator",
    title: "Snow Removal Operator",
    department: "Winter Operations",
    location: "Edmonton, AB",
    type: "Seasonal Full-time",
    description:
      "Operate plow trucks and sidewalk equipment during Alberta winter storms. 24/7 on-call rotation with premium storm pay.",
    requirements: [
      "Valid Class 5 Alberta driver's licence (Class 3 an asset)",
      "Previous snow removal experience preferred",
      "Comfortable working in extreme weather",
      "Available November through April",
    ],
  },
  {
    slug: "landscape-crew-lead",
    title: "Landscape Crew Lead",
    department: "Grounds Care",
    location: "Edmonton, AB",
    type: "Full-time",
    description:
      "Lead a landscaping crew through mowing, planting, and seasonal property maintenance for residential and commercial clients.",
    requirements: [
      "2+ years landscaping experience",
      "Leadership and crew management skills",
      "Knowledge of Alberta turf and plant care",
      "Valid driver's licence",
    ],
  },
  {
    slug: "client-success-coordinator",
    title: "Client Success Coordinator",
    department: "Administration",
    location: "Edmonton, AB (Hybrid)",
    type: "Full-time",
    description:
      "Be the voice of EnviroWorks Services Inc for property managers and facility directors. Manage accounts, scheduling, and client communications.",
    requirements: [
      "Excellent written and verbal communication",
      "Customer service or account management experience",
      "Proficiency with scheduling software",
      "Property management industry knowledge an asset",
    ],
  },
];
