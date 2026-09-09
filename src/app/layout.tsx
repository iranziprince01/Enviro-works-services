import type { Metadata, Viewport } from "next";
import { Lato, Nunito } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { BackToTop } from "@/components/layout/back-to-top";
import { JsonLd } from "@/components/seo/json-ld";
import { Toaster } from "@/components/ui/sonner";
import { createRootMetadata } from "@/lib/seo";
import { siteGraph } from "@/lib/schemas";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700", "800"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = createRootMetadata();

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#2a5a3c" },
    { media: "(prefers-color-scheme: dark)", color: "#163224" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const faviconQuery = `?v=${siteConfig.faviconVersion}`;

  return (
    <html
      lang="en-CA"
      className={`${nunito.variable} ${lato.variable} h-full`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <link
          rel="icon"
          href={`${siteConfig.assets.favicon}${faviconQuery}`}
          sizes="any"
        />
        <link
          rel="icon"
          href={`${siteConfig.assets.icon}${faviconQuery}`}
          type="image/png"
          sizes="32x32"
        />
        <link
          rel="icon"
          href={`${siteConfig.assets.faviconPng}${faviconQuery}`}
          type="image/png"
          sizes="512x512"
        />
        <link
          rel="apple-touch-icon"
          href={`${siteConfig.assets.appleIcon}${faviconQuery}`}
          sizes="180x180"
        />
      </head>
      <body
        className="min-h-full flex flex-col font-sans antialiased"
        suppressHydrationWarning
      >
        <ThemeProvider>
          <JsonLd data={siteGraph()} />
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-forest-600 focus:px-4 focus:py-2 focus:text-white"
          >
            Skip to main content
          </a>
          <Header />
          <main id="main-content" className="min-w-0 flex-1 pt-16 sm:pt-[4.5rem] lg:pt-20">
            {children}
          </main>
          <Footer />
          <BackToTop />
          <Toaster position="top-right" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
