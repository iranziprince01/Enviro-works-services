import { services } from "@/data/services";
import { images } from "./images";
import {
  brandedLogoAbsoluteUrl,
  canonicalUrl,
  siteConfig,
  socialProfileUrls,
  toAbsoluteUrl,
} from "./site";

const businessId = `${siteConfig.url}/#business`;
const websiteId = `${siteConfig.url}/#website`;
const logoUrl = brandedLogoAbsoluteUrl();

function organizationRef() {
  return { "@id": businessId };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness"],
    "@id": businessId,
    name: siteConfig.name,
    legalName: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    image: [toAbsoluteUrl(images.og), logoUrl],
    logo: logoUrl,
    priceRange: "$$",
    currenciesAccepted: "CAD",
    paymentAccepted: "Cash, Credit Card, Invoice",
    foundingDate: String(siteConfig.foundedYear),
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.province,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "Alberta",
      },
      ...siteConfig.serviceAreas.map((area) => ({
        "@type": "City",
        name: area,
      })),
    ],
    openingHoursSpecification: siteConfig.openingHours.map((spec) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: spec.dayOfWeek,
      opens: spec.opens,
      closes: spec.closes,
    })),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phone,
      email: siteConfig.email,
      contactType: "customer service",
      areaServed: "CA",
      availableLanguage: ["English"],
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${siteConfig.brandName} services`,
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.shortTitle,
          url: canonicalUrl(`/services/${service.slug}`),
        },
      })),
    },
    knowsAbout: services.map((service) => service.shortTitle),
    sameAs: socialProfileUrls(),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    inLanguage: siteConfig.language,
    publisher: organizationRef(),
  };
}

export function siteGraph() {
  return [localBusinessSchema(), websiteSchema()];
}

export function serviceSchema(service: {
  title: string;
  description: string;
  slug: string;
  shortTitle?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.shortTitle ?? service.title,
    alternateName: service.title,
    description: service.description,
    provider: organizationRef(),
    serviceType: service.shortTitle ?? service.title,
    areaServed: {
      "@type": "State",
      name: "Alberta",
    },
    url: canonicalUrl(`/services/${service.slug}`),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: canonicalUrl(item.path),
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function reviewSchema(
  reviews: {
    name: string;
    quote: string;
    rating: number;
  }[],
) {
  const avgRating =
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

  return {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness"],
    "@id": businessId,
    name: siteConfig.name,
    url: siteConfig.url,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: avgRating.toFixed(1),
      reviewCount: reviews.length,
      bestRating: "5",
      worstRating: "1",
    },
    review: reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating,
        bestRating: "5",
      },
      reviewBody: r.quote,
    })),
  };
}

export function articleSchema(post: {
  title: string;
  excerpt: string;
  slug: string;
  publishedAt: string;
  image: string;
  author: string;
}) {
  const url = canonicalUrl(`/blog/${post.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: toAbsoluteUrl(post.image),
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    inLanguage: siteConfig.language,
    author: {
      "@type": "Organization",
      name: post.author,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: logoUrl,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
}

export function contactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact ${siteConfig.brandName}`,
    url: canonicalUrl("/contact"),
    mainEntity: organizationRef(),
  };
}

export function itemListSchema(
  name: string,
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: canonicalUrl(item.path),
    })),
  };
}
