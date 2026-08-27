import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { Container } from "@/components/layout/container";
import { FramedVideo } from "@/components/layout/framed-video";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { SectionCta } from "@/components/layout/section-cta";
import { BackgroundVideo } from "@/components/sections/background-video";
import { CtaSection } from "@/components/sections/cta-section";
import { ImpactContributionCards } from "@/components/sections/impact-contribution-cards";
import { images } from "@/lib/images";

export const metadata: Metadata = createMetadata({
  title: "Impact",
  description:
    "Enviro Horizon Solutions Ltd is committed to building stronger communities through employment opportunities, newcomer support, and meaningful contribution across Alberta.",
  path: "/impact",
});

export default function ImpactPage() {
  return (
    <>
      <section className="page-hero relative overflow-hidden">
        <BackgroundVideo
          src={images.impactCanadaVideo}
          poster={images.impactCanadaPoster}
          overlayClassName="bg-forest-600/85"
          priority
        />
        <Container className="relative">
          <Breadcrumbs items={[{ label: "Impact" }]} variant="light" />
          <h1 className="page-title mt-4">
            Building Business While Building Community
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85 sm:mt-6 sm:text-lg">
            At Enviro Horizon Solutions Ltd, we believe business should do more than generate revenue.
            A business should create opportunity.
          </p>
        </Container>
      </section>

      <Section>
        <Container className="split-section overflow-x-clip lg:grid-cols-[1fr_min(42%,440px)]">
          <div className="flex min-w-0 flex-col justify-center">
            <SectionHeader
              eyebrow="Newcomer support"
              title="Creating pathways to meaningful work in Canada"
              align="left"
              spacing="tight"
              className="max-w-none"
            />
            <div className="content-stack space-y-5 leading-relaxed text-muted-foreground sm:space-y-6">
              <p>
                As a proudly Canadian company, we are committed to supporting newcomers to Canada
                by helping create pathways toward employment, work experience, and successful
                integration into Canadian society.
              </p>
              <p>
                Many talented newcomers arrive with skills and ambition but struggle because they
                lack Canadian work experience. We understand that challenge. That is why our
                company intentionally works to help people build meaningful opportunities while
                contributing to their long-term success.
              </p>
            </div>
            <SectionCta
              label="Book Service"
              align="left"
              className="mt-8 sm:mt-10"
            />
          </div>

          <FramedVideo
          src={images.impactCanadaVideo}
          poster={images.impactCanadaPoster}
          layout="portrait"
            shadowSide="left"
            maxWidthClass="max-w-[min(100%,340px)] sm:max-w-[340px] lg:max-w-[440px]"
            className="lg:mx-0"
          />
        </Container>
      </Section>

      <Section className="relative overflow-hidden !bg-transparent">
        <BackgroundVideo
          src={images.impactVideo}
          poster={images.impactPoster}
          baseClassName="bg-forest-100"
          overlayClassName="bg-forest-100/85"
        />
        <Container className="relative">
          <SectionHeader
            title="How we contribute"
            description="Our growth should create opportunities for others to grow as well. We believe when businesses create opportunity, communities become stronger."
          />
          <ImpactContributionCards />
          <SectionCta label="Book Service" />
        </Container>
      </Section>

      <CtaSection
        title="Partner with a company that invests in community"
        description="Whether you need property services or want to join our team, we'd be glad to connect."
        buttonLabel="Book Service"
      />
    </>
  );
}
