import type { Metadata } from "next";
import {
  bingSiteVerification,
  canonicalUrl,
  googleSiteVerification,
  siteConfig,
} from "./site";
import { images } from "./images";

const faviconQuery = `?v=${siteConfig.faviconVersion}`;

type PageSeo = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  noIndex?: boolean;
  ogImage?: string;
  ogType?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
};

function iconEntries(): Metadata["icons"] {
  return {
    icon: [
      {
        url: `${siteConfig.assets.favicon}${faviconQuery}`,
        sizes: "any",
      },
      {
        url: `${siteConfig.assets.faviconPng}${faviconQuery}`,
        type: "image/png",
        sizes: "512x512",
      },
      {
        url: `${siteConfig.assets.icon}${faviconQuery}`,
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: `/icon-192.png${faviconQuery}`,
        type: "image/png",
        sizes: "192x192",
      },
    ],
    apple: [
      {
        url: `${siteConfig.assets.appleIcon}${faviconQuery}`,
        type: "image/png",
        sizes: "180x180",
      },
    ],
    shortcut: `${siteConfig.assets.favicon}${faviconQuery}`,
  };
}

function robots(noIndex: boolean): Metadata["robots"] {
  if (noIndex) {
    return { index: false, follow: false };
  }
  return {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  };
}

export function createRootMetadata(): Metadata {
  const url = canonicalUrl("/");
  const title = `${siteConfig.brandName} | ${siteConfig.homeTitleTagline}`;
  const google = googleSiteVerification();
  const bing = bingSiteVerification();
  const verification =
    google || bing
      ? {
          ...(google ? { google } : {}),
          ...(bing ? { other: { "msvalidate.01": bing } } : {}),
        }
      : undefined;

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: title,
      template: `%s | ${siteConfig.brandName}`,
    },
    description: siteConfig.description,
    keywords: [...siteConfig.keywords],
    applicationName: siteConfig.brandName,
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    category: "Property maintenance",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    robots: robots(false),
    icons: iconEntries(),
    manifest: "/manifest.webmanifest",
    alternates: {
      canonical: url,
      types: {
        "application/rss+xml": `${siteConfig.url}/feed.xml`,
      },
      languages: {
        "en-CA": url,
        "x-default": url,
      },
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.name,
      title,
      description: siteConfig.description,
      images: [
        {
          url: images.og,
          width: 1200,
          height: 630,
          alt: `${siteConfig.brandName} property care in Edmonton`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: siteConfig.description,
      images: [images.og],
    },
    verification,
    other: {
      "geo.region": "CA-AB",
      "geo.placename": siteConfig.address.city,
      "geo.position": `${siteConfig.geo.latitude};${siteConfig.geo.longitude}`,
      ICBM: `${siteConfig.geo.latitude}, ${siteConfig.geo.longitude}`,
    },
  };
}

export function createMetadata({
  title,
  description,
  path = "",
  keywords = [],
  noIndex = false,
  ogImage = images.og,
  ogType = "website",
  publishedTime,
  modifiedTime,
  authors,
}: PageSeo): Metadata {
  const url = canonicalUrl(path);
  const isHome = path === "" || path === "/";
  const fullTitle = isHome
    ? `${siteConfig.brandName} | ${siteConfig.homeTitleTagline}`
    : `${title} | ${siteConfig.brandName}`;

  return {
    title: isHome ? { absolute: fullTitle } : title,
    description,
    keywords: keywords.length ? [...siteConfig.keywords, ...keywords] : undefined,
    robots: robots(noIndex),
    alternates: {
      canonical: url,
      languages: {
        "en-CA": url,
        "x-default": url,
      },
    },
    openGraph: {
      type: ogType,
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.name,
      title: fullTitle,
      description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      ...(ogType === "article"
        ? {
            publishedTime,
            modifiedTime: modifiedTime ?? publishedTime,
            authors: authors ?? [siteConfig.name],
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}
