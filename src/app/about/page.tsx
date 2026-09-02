import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FramedImage } from "@/components/layout/framed-image";
import { FramedVideo } from "@/components/layout/framed-video";
import { MapPin } from "lucide-react";
import { createMetadata } from "@/lib/seo";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { SectionCta } from "@/components/layout/section-cta";
import { LandAcknowledgement } from "@/components/layout/land-acknowledgement";
import { BackgroundVideo } from "@/components/sections/background-video";
import { CtaSection } from "@/components/sections/cta-section";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import {
  coreValues,
  mission,
  vision,
} from "@/data/company";
import { faqs } from "@/data/faq";
import { siteConfig } from "@/lib/site";
import { images } from "@/lib/images";

export const metadata: Metadata = createMetadata({
  title: "About",
  description:
    "Learn about EnviroWorks Services Inc, an Edmonton-based property care company built on service, reliability, and excellence across Alberta.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <section className="page-hero relative overflow-hidden">
        <BackgroundVideo
          src={images.aboutBannerVideo}
          poster={images.story}
          overlayClassName="bg-forest-600/85"
          priority
        />
        <Container className="relative">
          <Breadcrumbs items={[{ label: "About" }]} variant="light" />
          <h1 className="page-title mt-4">
            Built On Service, Driven By Excellence.
          </h1>
        </Container>
      </section>

      <Section>
        <Container className="split-section overflow-x-clip lg:grid-cols-[1fr_min(48%,500px)] lg:items-stretch">
          <div className="flex min-w-0 flex-col justify-center lg:justify-start">
            <div className="max-w-lg">
              <SectionHeader
                eyebrow="Our story"
                title="One trusted team for complete property care"
                align="left"
                spacing="tight"
                className="max-w-none"
              />
              <div className="content-stack space-y-3.5 text-base leading-[1.75] text-muted-foreground md:space-y-4">
                <p className="text-lg font-bold italic leading-relaxed text-forest-600 md:text-xl md:leading-relaxed">
                  &ldquo;{siteConfig.name} was founded with a simple purpose: to make property care
                  easier, more reliable, and more professional for homes and businesses across
                  Alberta.&rdquo;
                </p>
                <p>
                  Managing a property often means working with multiple contractors for
                  cleaning, landscaping, maintenance, snow removal, and facility support. We
                  saw an opportunity to do things differently.
                </p>
                <p>
                  Instead of forcing clients to manage several service providers, we built a
                  company that offers complete integrated property services under one trusted
                  team.
                </p>
                <p>
                  Today, we proudly serve homeowners, commercial businesses, office spaces,
                  apartment buildings, government institutions, construction companies,
                  healthcare facilities, retail businesses, and organizations looking for
                  dependable property care solutions.
                </p>
                <p>
                  At EnviroWorks Services Inc, we believe trust is earned through consistency,
                  professionalism, and delivering results that exceed expectations.{" "}
                  <span className="box-decoration-clone bg-forest-50 font-bold text-forest-600">
                    Every client matters. Every project counts. And every service we provide
                    reflects our commitment to excellence.
                  </span>
                </p>
              </div>
              <SectionCta
                label="Book Service"
                align="left"
                className="mt-8 sm:mt-10"
              />
            </div>
          </div>

          <FramedImage
            src={images.story}
            alt="EnviroWorks Services Inc team delivering professional property care"
            priority
            shadowSide="left"
            sizes="(max-width: 1024px) 340px, 500px"
            className="self-stretch lg:mx-0"
          />
        </Container>
      </Section>

      <Section variant="muted">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
            <article className="group flex flex-col overflow-hidden rounded-[1.75rem] border border-forest-200/80 bg-white shadow-[0_16px_40px_rgba(20,83,45,0.08)] transition-[transform,box-shadow] hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(20,83,45,0.12)]">
              <div className="relative overflow-hidden bg-forest-600 px-8 py-10 md:px-10 md:py-12">
                <div
                  className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-horizon-400/20 blur-2xl"
                  aria-hidden
                />
                <div
                  className="absolute right-8 bottom-0 h-px w-16 bg-horizon-400/80"
                  aria-hidden
                />
                <div className="relative">
                    <h3 className="font-heading text-2xl font-bold tracking-[0.12em] text-white uppercase md:text-[1.75rem] md:leading-tight">
                      Our Mission
                    </h3>
                  </div>
              </div>
              <div className="flex flex-1 flex-col border-t border-forest-100 bg-white px-8 py-8 md:px-10 md:py-10">
                <p className="text-base leading-[1.8] text-muted-foreground">{mission}</p>
              </div>
            </article>

            <article className="group flex flex-col overflow-hidden rounded-[1.75rem] border border-forest-200/80 bg-white shadow-[0_16px_40px_rgba(20,83,45,0.08)] transition-[transform,box-shadow] hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(20,83,45,0.12)]">
              <div className="relative overflow-hidden bg-gradient-to-br from-forest-700 via-forest-600 to-forest-600 px-8 py-10 md:px-10 md:py-12">
                <div
                  className="absolute -bottom-12 -left-8 h-36 w-36 rounded-full bg-horizon-400/15 blur-2xl"
                  aria-hidden
                />
                <div
                  className="absolute right-8 bottom-0 h-px w-16 bg-horizon-400/80"
                  aria-hidden
                />
                <div className="relative">
                    <h3 className="font-heading text-2xl font-bold tracking-[0.12em] text-white uppercase md:text-[1.75rem] md:leading-tight">
                      Our Vision
                    </h3>
                  </div>
              </div>
              <div className="flex flex-1 flex-col border-t border-forest-100 bg-forest-50/60 px-8 py-8 md:px-10 md:py-10">
                <p className="text-base leading-[1.8] text-muted-foreground">{vision}</p>
              </div>
            </article>
          </div>
          <SectionCta label="Book Service" />
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader
            title="Our core values"
            description="The principles that guide how we serve every client, on every project, every day."
          />
          <div className="grid items-stretch gap-8 md:grid-cols-2 xl:grid-cols-3">
            {coreValues.map((value, index) => (
              <article
                key={value.title}
                className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-forest-200/80 bg-white shadow-[0_14px_36px_rgba(20,83,45,0.08)] transition-[transform,box-shadow] hover:-translate-y-1 hover:shadow-[0_22px_48px_rgba(20,83,45,0.12)]"
              >
                <div
                  className={`relative overflow-hidden px-7 py-7 md:px-8 md:py-8 ${
                    index % 2 === 0
                      ? "bg-forest-600"
                      : "bg-gradient-to-br from-forest-700 via-forest-600 to-forest-600"
                  }`}
                >
                  <div
                    className="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-horizon-400/20 blur-2xl"
                    aria-hidden
                  />
                  <div
                    className="absolute right-7 bottom-0 h-px w-12 bg-horizon-400/80 md:right-8"
                    aria-hidden
                  />
                  <h3 className="relative font-heading text-xl font-bold tracking-tight text-horizon-300 md:text-2xl">
                    {value.title}
                  </h3>
                </div>
                <div className="flex flex-1 border-t border-forest-100 bg-forest-50/70 px-7 py-7 md:px-8 md:py-8">
                  <p className="text-base leading-[1.75] text-foreground/80">
                    {value.description}
                  </p>
                </div>
              </article>
            ))}
            <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-forest-200/80 bg-white shadow-[0_14px_36px_rgba(20,83,45,0.08)] transition-[transform,box-shadow] hover:-translate-y-1 hover:shadow-[0_22px_48px_rgba(20,83,45,0.12)]">
              <div className="relative min-h-0 flex-1 overflow-hidden">
                <Image
                  src={images.coreValue}
                  alt="EnviroWorks Services Inc team demonstrating our core values in action"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
              </div>
            </article>
          </div>
          <SectionCta label="Book Service" />
        </Container>
      </Section>

      <Section variant="muted">
        <Container>
          <div className="grid min-w-0 items-stretch gap-12 lg:grid-cols-[1fr_min(42%,440px)] lg:gap-16">
            <div className="min-w-0">
              <SectionHeader
                eyebrow="Service areas"
                title="Serving cities across Alberta"
                description="From Edmonton and Calgary to communities province-wide, EnviroWorks Services Inc delivers consistent property care for homes and businesses in every city in Alberta."
                align="left"
                spacing="tight"
                className="max-w-none"
              />
              <ul className="mt-8 grid min-w-0 grid-cols-2 gap-2 sm:gap-2.5 sm:grid-cols-3 md:grid-cols-4">
                {siteConfig.albertaCities.map((area) => (
                  <li key={area}>
                    <span className="inline-flex w-full min-w-0 items-center gap-1.5 rounded-lg border border-forest-200/80 bg-white px-2 py-2 text-xs font-medium text-foreground shadow-[0_2px_8px_rgba(20,83,45,0.04)] sm:gap-2 sm:px-3 sm:py-2.5 sm:text-sm">
                      <MapPin className="h-3.5 w-3.5 shrink-0 text-forest-600" aria-hidden />
                      {area}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm text-muted-foreground">
                Plus surrounding towns and communities across Alberta. Not sure if we serve your area?{" "}
                <Link href="/contact" className="font-medium text-forest-600 hover:text-forest-700">
                  Contact us
                </Link>
                .
              </p>
              <LandAcknowledgement variant="section" className="mt-8" />
              <SectionCta
                label="Book Service"
                align="left"
                className="mt-8 sm:mt-10"
              />
            </div>
            <div className="min-h-[280px] lg:min-h-0">
              <FramedVideo
                src={images.cityVideo}
                poster={images.edmontonSkyline}
                fillHeight
                shadowSide="left"
                maxWidthClass="max-w-none"
                className="h-full"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader
            eyebrow="FAQ"
            title="Common questions"
            description="Straight answers about our services, coverage, and how to get started."
          />
          <div className="mx-auto max-w-3xl">
            <FaqAccordion items={faqs} />
          </div>
          <SectionCta label="Get Free Quote" />
        </Container>
      </Section>

      <CtaSection
        variant="muted"
        buttonLabel="Book Service"
        title="Ready to experience EnviroWorks Services Inc excellence?"
        description="Join homeowners and businesses across Alberta who trust us for reliable, professional property care."
      />
    </>
  );
}
