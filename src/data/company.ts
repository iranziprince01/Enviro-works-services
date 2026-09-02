import type { LucideIcon } from "lucide-react";
import {
  Briefcase,
  GraduationCap,
  HandCoins,
  HeartHandshake,
  UserCheck,
  UsersRound,
} from "lucide-react";

export const whyChooseUs = [
  "Professional and dependable team",
  "Flexible service plans tailored to your needs",
  "Affordable and transparent pricing",
  "Year-round maintenance support",
  "Residential and commercial expertise",
  "Fast response and consistent communication",
  "Commitment to quality on every project",
  "Fully insured service for your peace of mind",
] as const;

export const mission =
  "To deliver dependable, high-quality property care solutions that help businesses and homeowners maintain clean, safe, and professionally managed environments while building long-term relationships through exceptional service.";

export const vision =
  "To become one of Alberta's leading property maintenance and facility support companies recognized for professionalism, reliability, operational excellence, and exceptional customer service.";

export const coreValues = [
  {
    title: "Professionalism",
    description: "We take pride in doing every job the right way.",
  },
  {
    title: "Reliability",
    description: "Our clients trust us because we consistently deliver what we promise.",
  },
  {
    title: "Integrity",
    description: "Honesty, accountability, and respect guide how we operate every day.",
  },
  {
    title: "Excellence",
    description: "Attention to detail separates average service from exceptional service.",
  },
  {
    title: "Community",
    description:
      "We believe successful businesses should positively contribute to the communities around them.",
  },
] as const;

export type ImpactContribution = {
  text: string;
  icon: LucideIcon;
};

export const impactContributions: ImpactContribution[] = [
  {
    text: "Creating employment opportunities for newcomers and immigrant families",
    icon: HeartHandshake,
  },
  {
    text: "Providing entry-level work opportunities that build Canadian work experience",
    icon: Briefcase,
  },
  {
    text: "Offering workplace training and hands-on professional development",
    icon: GraduationCap,
  },
  {
    text: "Supporting economic inclusion through meaningful employment",
    icon: HandCoins,
  },
  {
    text: "Helping individuals gain confidence while integrating into Canadian society",
    icon: UserCheck,
  },
  {
    text: "Building diverse teams that reflect the communities we serve",
    icon: UsersRound,
  },
];

export const futurePositions = [
  "Cleaning Associates",
  "Janitorial Staff",
  "Snow Removal Operators",
  "Landscaping Technicians",
  "Property Maintenance Assistants",
  "Operations Coordinators",
  "Customer Service Representatives",
  "Field Supervisors",
] as const;

export const whyJoinEnviroWorks = [
  "Growth opportunities in a fast-growing company",
  "Professional and supportive work environment",
  "Ongoing training and skill development",
  "Flexible work opportunities",
  "Competitive compensation",
  "Grow alongside an expanding Canadian business",
] as const;

export const footerPromise =
  "We are committed to delivering dependable service, professional care, and building stronger communities through work that makes everyday spaces cleaner, safer, and better for everyone.";

export const landAcknowledgementLines = [
  "EnviroWorks Services Inc respectfully acknowledges that we operate on",
  "Treaty 6 Territory, the traditional and ancestral lands of First Nations and Métis peoples.",
] as const;

export const landAcknowledgement = landAcknowledgementLines.join(" ");
