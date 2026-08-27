"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { FramedVideo } from "@/components/layout/framed-video";
import { HeroBackgroundVideo } from "@/components/sections/hero-background-video";
import { HeroTypedHeading } from "@/components/sections/hero-typed-heading";
import { siteConfig } from "@/lib/site";
import { images } from "@/lib/images";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function HeroSection() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="relative flex min-h-[calc(100dvh-4rem)] items-center sm:min-h-[calc(100dvh-4.5rem)] lg:min-h-[calc(100dvh-5rem)]">
      <HeroBackgroundVideo />

      <Container className="relative w-full overflow-x-clip py-8 sm:py-10 lg:py-12">
        <div className="grid w-full items-center gap-10 sm:gap-12 lg:grid-cols-[1fr_min(36%,400px)] lg:gap-8 xl:gap-10">
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex min-w-0 max-w-5xl flex-col items-center justify-center gap-10 text-center sm:gap-14 md:gap-16 lg:items-start lg:justify-between lg:text-left"
          >
            <div>
              <HeroTypedHeading />
              <p className="mt-6 max-w-xl text-balance text-[0.65rem] font-medium uppercase tracking-[0.12em] text-horizon-300 sm:mt-8 sm:text-xs sm:tracking-[0.18em] md:text-sm">
                {siteConfig.tagline}
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 md:flex-row md:items-center md:justify-center md:gap-4 lg:justify-start">
              <Button
                asChild
                size="lg"
                className="h-12 w-full bg-white px-8 text-base font-semibold text-forest-600 hover:bg-white/90 md:w-auto"
              >
                <Link href="/quote">
                  Get Free Quote
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 w-full border-white/40 bg-transparent px-8 text-base font-semibold text-white hover:bg-white/10 hover:text-white md:w-auto"
              >
                  <Link href="/services">View Services</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden w-full min-w-0 lg:flex lg:items-stretch lg:justify-end"
          >
            <FramedVideo
              src={images.heroRightVideo}
              poster={images.heroRightPoster}
              layout="portrait"
              shadowSide="left"
              ringClassName="ring-white/25"
              maxWidthClass="w-full max-w-[min(100%,380px)] xl:max-w-[min(100%,400px)]"
              className="lg:ml-auto"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
