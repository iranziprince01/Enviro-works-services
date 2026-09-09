import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  const iconQuery = `?v=${siteConfig.faviconVersion}`;
  return {
    name: siteConfig.name,
    short_name: "EnviroWorks",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2a5a3c",
    lang: siteConfig.language,
    icons: [
      {
        src: `/icon-192.png${iconQuery}`,
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: `${siteConfig.assets.faviconPng}${iconQuery}`,
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/logo_color.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
