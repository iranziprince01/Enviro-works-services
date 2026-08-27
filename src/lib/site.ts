/**
 * Root URL of the Vercel Blob store that hosts large media (videos + photos)
 * instead of committing them to the repo. Override per-environment with
 * NEXT_PUBLIC_MEDIA_BASE_URL; the fallback points at the production store so
 * builds work without extra env. Videos live under /videos, images under /images.
 */
const blobBase =
  process.env.NEXT_PUBLIC_MEDIA_BASE_URL ??
  "https://exqtua0v7kdbdrpj.public.blob.vercel-storage.com";
const videoBase = `${blobBase}/videos`;

export const siteConfig = {
  mediaBaseUrl: blobBase,
  name: "Enviro Horizon Solutions Ltd",
  brandName: "Enviro Horizon Solutions",
  shortName: "Enviro Horizon",
  tagline: "Reliable Property Care · Trusted Service · Stronger Communities",
  homeTitleTagline: "Reliable Property Care",
  description:
    "Book trusted property care in Edmonton and across Alberta. Enviro Horizon Solutions delivers commercial cleaning, residential cleaning, snow removal, landscaping, and facility maintenance with free quotes and reliable service.",
  url: "https://www.envirohsl.ca",
  locale: "en_CA",
  phone: "+1 (587) 501-4324",
  phoneHref: "tel:+15875014324",
  email: "info@envirohsl.ca",
  careersEmail: "info@envirohsl.ca",
  address: {
    street: "10180 101 Street NW, Suite 3400",
    city: "Edmonton",
    province: "Alberta",
    postalCode: "T5J 3S4",
    country: "Canada",
    countryCode: "CA",
  },
  geo: {
    latitude: 53.5419,
    longitude: -113.4938,
  },
  hours: [
    { days: "Monday – Friday", hours: "8:00 AM – 6:00 PM" },
    { days: "Saturday", hours: "9:00 AM – 4:00 PM" },
    { days: "Sunday", hours: "Closed" },
  ],
  social: {
    facebook:
      "https://www.facebook.com/share/1C4EXDFLdJ/?mibextid=wwXIfr",
    instagram:
      "https://www.instagram.com/freshedgesservicesltd?igsh=MWdhOXVlN3NqZ2F6OQ%3D%3D&utm_source=qr",
  },
  foundedYear: 2014,
  serviceAreas: [
    "Edmonton",
    "St. Albert",
    "Sherwood Park",
    "Beaumont",
    "Leduc",
  ],
  extendedServiceAreas: [
    "Edmonton",
    "St. Albert",
    "Sherwood Park",
    "Beaumont",
    "Leduc",
    "Spruce Grove",
    "Stony Plain",
    "Fort Saskatchewan",
  ],
  /** Official cities in Alberta (municipal status: city). */
  albertaCities: [
    "Airdrie",
    "Beaumont",
    "Brooks",
    "Calgary",
    "Camrose",
    "Chestermere",
    "Cold Lake",
    "Edmonton",
    "Fort Saskatchewan",
    "Grande Prairie",
    "Lacombe",
    "Leduc",
    "Lethbridge",
    "Lloydminster",
    "Medicine Hat",
    "Red Deer",
    "Spruce Grove",
    "St. Albert",
    "Wetaskiwin",
  ],
  assets: {
    logo: "/logo_color.svg",
    logoFooter: "/logo_white.svg",
    favicon: "/favicon.ico",
    icon: "/icon.png",
    appleIcon: "/apple-icon.png",
    faviconPng: "/favicon.png",
    story: `${blobBase}/images/story.jpg`,
    heroVideo: `${videoBase}/hero.mp4`,
    cityVideo: `${videoBase}/city.mp4`,
    aboutBannerVideo: `${videoBase}/about_banner.mp4`,
    impactVideo: `${videoBase}/impact.mp4`,
    heroRightVideo: `${videoBase}/hero_right.mp4`,
    joinUsVideo: `${videoBase}/join_us.mp4`,
    impactCanadaVideo: `${videoBase}/impact_canada.mp4`,
    chooseVideo: `${videoBase}/choose.mp4`,
  },
  logoVersion: "6",
  faviconVersion: "3",
  storyVersion: "3",
  heroVideoVersion: "2",
  cityVideoVersion: "1",
  aboutBannerVideoVersion: "1",
  impactVideoVersion: "1",
  heroRightVideoVersion: "1",
  joinUsVideoVersion: "1",
  impactCanadaVideoVersion: "1",
  chooseVideoVersion: "1",
  keywords: [
    "Commercial Cleaning Edmonton",
    "Residential Cleaning Edmonton",
    "Property Maintenance Edmonton",
    "Snow Removal Edmonton",
    "Janitorial Services Edmonton",
    "Pressure Washing Edmonton",
    "Landscaping Edmonton",
    "Facility Maintenance Alberta",
    "Cleaning Company Edmonton",
    "Property Services Edmonton",
  ],
} as const;

export type SiteConfig = typeof siteConfig;

export function brandedLogoUrl(variant: "default" | "footer" = "default") {
  const path =
    variant === "footer" ? siteConfig.assets.logoFooter : siteConfig.assets.logo;
  return `${path}?v=${siteConfig.logoVersion}`;
}
