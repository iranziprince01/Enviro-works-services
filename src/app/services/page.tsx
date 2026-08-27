import type { Metadata } from "next";
import Image from "next/image";
import { createMetadata } from "@/lib/seo";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { SectionCta } from "@/components/layout/section-cta";
import { ServicesPageCard } from "@/components/sections/services-page-card";
import { CtaSection } from "@/components/sections/cta-section";
import { serviceListingCards } from "@/data/services";
import { images } from "@/lib/images";

export const metadata: Metadata = createMetadata({
  title: "Services",
  description:
    "Explore commercial cleaning, residential cleaning, snow removal, landscaping, pressure washing, property maintenance, and post construction cleanup in Edmonton, Alberta.",
  path: "/services",
  keywords: ["Property Services Edmonton", "Cleaning Company Edmonton"],
});

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={images.servicesBanner}
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-600/85 via-forest-600/85 to-forest-700/85" />
        </div>

        <Container className="relative">
          <Breadcrumbs items={[{ label: "Services" }]} variant="light" />
          <h1 className="page-title">
            Complete Property Solutions For Homes And Businesses
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85 sm:mt-6 sm:text-lg">
            Enviro Horizon Solutions offers year-round professional property care solutions designed
            to simplify property management and maintain high-quality spaces.
          </p>
          <div className="mt-8">
            <SectionCta
              label="Book Service"
              variant="light"
              className="mt-0 sm:mt-0 sm:justify-start"
              align="left"
            />
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="grid items-stretch gap-8 md:grid-cols-2 xl:grid-cols-3">
            {serviceListingCards.map((card) => (
              <ServicesPageCard key={card.slug} card={card} />
            ))}
          </div>
        </Container>
      </Section>

      <CtaSection
        variant="muted"
        title="Ready to simplify your property care?"
        description="Choose a service above or request a free quote. We'll recommend the right plan for your property."
        buttonLabel="Get Free Quote"
      />
    </>
  );
}
