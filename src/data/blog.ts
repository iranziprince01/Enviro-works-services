import { images } from "@/lib/images";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  image: string;
  category: string;
  readTime: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "winter-property-maintenance-checklist-edmonton",
    title: "Winter Property Maintenance Checklist for Edmonton Businesses",
    excerpt:
      "Prepare your commercial property for Alberta winters with this essential maintenance checklist from EnviroWorks Services Inc.",
    content:
      "Alberta winters test every property. From ice management to HVAC-adjacent cleaning, proactive preparation reduces liability and keeps tenants safe. Start with a comprehensive snow removal contract, inspect drainage before freeze-up, and schedule pre-winter pressure washing to remove salt and grime buildup.",
    author: "EnviroWorks Services Inc Team",
    publishedAt: "2026-01-15",
    image: images.snowPlow,
    category: "Seasonal Tips",
    readTime: "5 min read",
  },
  {
    slug: "commercial-cleaning-frequency-guide",
    title: "How Often Should Your Edmonton Office Be Professionally Cleaned?",
    excerpt:
      "Traffic patterns, industry type, and tenant expectations all influence the right cleaning frequency. Here's how to decide.",
    content:
      "High-traffic lobbies and restrooms may need daily attention, while private offices benefit from two to three visits per week. Healthcare and food-adjacent spaces require enhanced protocols. EnviroWorks Services Inc recommends a site walkthrough to establish the optimal schedule for your building.",
    author: "EnviroWorks Services Inc Team",
    publishedAt: "2025-11-22",
    image: images.commercialMeeting,
    category: "Commercial Cleaning",
    readTime: "4 min read",
  },
  {
    slug: "spring-landscaping-tips-alberta",
    title: "Spring Landscaping Tips for Alberta Homeowners",
    excerpt:
      "Get your lawn and garden ready for the growing season with expert advice tailored to Edmonton's climate.",
    content:
      "Aeration, early weed control, and proper mulching set the foundation for a healthy summer lawn. Remove winter debris, inspect irrigation, and book landscaping early. Edmonton's short growing season rewards those who plan ahead.",
    author: "EnviroWorks Services Inc Team",
    publishedAt: "2025-03-08",
    image: images.garden,
    category: "Landscaping",
    readTime: "6 min read",
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
