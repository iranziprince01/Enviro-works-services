import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";
import { services } from "@/data/services";
import { canonicalUrl } from "@/lib/site";

const STATIC_PAGES: {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
  lastModified: Date;
}[] = [
  { path: "/", changeFrequency: "weekly", priority: 1, lastModified: new Date("2026-09-09") },
  { path: "/services", changeFrequency: "weekly", priority: 0.9, lastModified: new Date("2026-09-09") },
  { path: "/quote", changeFrequency: "monthly", priority: 0.9, lastModified: new Date("2026-09-09") },
  { path: "/about", changeFrequency: "monthly", priority: 0.8, lastModified: new Date("2026-09-09") },
  { path: "/contact", changeFrequency: "monthly", priority: 0.8, lastModified: new Date("2026-09-09") },
  { path: "/pricing", changeFrequency: "monthly", priority: 0.7, lastModified: new Date("2026-09-09") },
  { path: "/industries", changeFrequency: "monthly", priority: 0.7, lastModified: new Date("2026-09-09") },
  { path: "/impact", changeFrequency: "monthly", priority: 0.6, lastModified: new Date("2026-09-09") },
  { path: "/testimonials", changeFrequency: "monthly", priority: 0.6, lastModified: new Date("2026-09-09") },
  { path: "/blog", changeFrequency: "weekly", priority: 0.7, lastModified: new Date("2026-01-15") },
  { path: "/careers", changeFrequency: "monthly", priority: 0.6, lastModified: new Date("2026-09-09") },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3, lastModified: new Date("2026-09-09") },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3, lastModified: new Date("2026-09-09") },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const servicePages = services.map((service) => ({
    url: canonicalUrl(`/services/${service.slug}`),
    lastModified: new Date("2026-09-09"),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const blogPages = blogPosts.map((post) => ({
    url: canonicalUrl(`/blog/${post.slug}`),
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.55,
  }));

  const staticPages = STATIC_PAGES.map((page) => ({
    url: canonicalUrl(page.path),
    lastModified: page.lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  return [...staticPages, ...servicePages, ...blogPages];
}
