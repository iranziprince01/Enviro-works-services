"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { SectionCta } from "@/components/layout/section-cta";
import { FramedImage } from "@/components/layout/framed-image";
import { images } from "@/lib/images";
import { siteConfig } from "@/lib/site";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function IntroSection() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="bg-background py-16 sm:py-20 md:py-28 lg:py-32">
      <Container className="split-section overflow-x-clip lg:grid-cols-[min(38%,400px)_1fr] lg:items-stretch">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="min-w-0"
        >
          <FramedImage
            src={images.intro}
            alt="Professional property care by EnviroWorks Services Inc"
            priority
            shadowSide="right"
            sizes="(max-width: 1024px) 340px, 400px"
            className="lg:mx-0"
          />
        </motion.div>

        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex min-w-0 flex-col justify-center gap-5 text-left sm:gap-6"
        >
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            At{" "}
            <span className="font-bold text-forest-600">{siteConfig.name}</span>, we understand
            that maintaining a clean, safe, and well-managed property is not just about
            appearance, it is about creating spaces where people can live, work, and thrive
            with confidence.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            We are an Edmonton-based company providing professional cleaning, property
            maintenance, landscaping, snow removal, facility support, and exterior care
            solutions for residential and commercial clients across Alberta.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            Whether you are a homeowner, property manager, business owner, or organization
            looking for dependable service, our team is committed to delivering
            high-quality work with professionalism, consistency, and attention to detail.
          </p>
          <div className="flex gap-3 pt-1 sm:gap-4 md:gap-5">
            <span
              className="shrink-0 font-heading text-5xl font-black leading-none text-horizon-400 sm:text-6xl md:text-7xl lg:text-8xl"
              aria-hidden
            >
              &lsquo;
            </span>
            <div className="min-w-0 pt-1 md:pt-2">
              <p className="text-base font-medium leading-relaxed text-foreground sm:text-lg md:text-xl">
                We do not simply provide services.
              </p>
              <p className="mt-2 font-heading text-lg font-semibold text-forest-600 sm:text-xl md:text-2xl">
                We create peace of mind.
              </p>
            </div>
          </div>
          <SectionCta
            label="Book Service"
            secondaryLabel="View Services"
            secondaryHref="/services"
            align="left"
            className="mt-2 sm:mt-2"
          />
        </motion.div>
      </Container>
    </section>
  );
}
