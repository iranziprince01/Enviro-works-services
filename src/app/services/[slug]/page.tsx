import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { createMetadata } from "@/lib/seo";
import { services, getServiceBySlug } from "@/data/services";
import { JsonLd } from "@/components/seo/json-ld";
import { serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/schemas";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { CtaSection } from "@/components/sections/cta-section";
import { ServiceBenefitsSection } from "@/components/sections/service-benefits-section";
import { ServiceAudienceScopeSection } from "@/components/sections/service-audience-scope-section";
import { FramedImage } from "@/components/layout/framed-image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionCta } from "@/components/layout/section-cta";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return createMetadata({
    title: service.shortTitle,
    description: service.description,
    path: `/services/${slug}`,
    keywords: service.keywords,
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <JsonLd
        data={[
          serviceSchema(service),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.shortTitle, path: `/services/${slug}` },
          ]),
          faqSchema(service.faqs),
        ]}
      />

      <section className="page-hero relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={service.heroImage}
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
          <div className="flex min-w-0 max-w-3xl flex-col gap-4 sm:gap-6">
            <h1 className="page-title font-bold">{service.shortTitle}</h1>
            <p className="text-base leading-relaxed text-white/85 sm:text-lg">{service.description}</p>
            <Button asChild size="lg" className="h-12 w-full bg-white px-8 font-semibold text-forest-600 hover:bg-white/90 sm:w-fit">
              <Link href="/quote">
                Book Service
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden />
              </Link>
            </Button>
          </div>
        </Container>
      </section>

      <Section>
        <Container className="overflow-x-clip">
          <div className="split-section lg:grid-cols-2">
            <div className="min-w-0">
              <SectionHeader
                eyebrow="Overview"
                title={`Professional ${service.shortTitle} in Alberta`}
                align="left"
                spacing="tight"
                className="max-w-none"
              />
              <div className="content-stack space-y-3.5 text-base leading-[1.75] text-muted-foreground md:space-y-4">
                {(service.overviewParagraphs ?? [service.overview]).map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <SectionCta
                label="Get Free Quote"
                align="left"
                className="mt-8 sm:mt-10"
              />
            </div>
            <FramedImage
              src={service.heroImage}
              alt={`${service.shortTitle} in Alberta`}
              layout="landscape"
              shadowSide="left"
              maxWidthClass="max-w-none"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </Container>
      </Section>

      <ServiceAudienceScopeSection
        audience={service.audience}
        included={service.included}
        ctaLabel="Book Service"
      />

      <ServiceBenefitsSection
        benefits={service.benefits}
        image={service.benefitsImage ?? service.heroImage}
        imageAlt={`${service.shortTitle} by EnviroWorks Services Inc`}
        ctaLabel="Get Free Quote"
      />

      <Section variant="muted">
        <Container>
          <SectionHeader eyebrow="Process" title="Our Process" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, i) => (
              <Card key={step.title} className="border-border/60 bg-card/80">
                <CardContent className="p-6">
                  <span className="text-sm font-bold text-forest-600 dark:text-horizon-400">
                    Step {i + 1}
                  </span>
                  <h3 className="mt-2 font-heading font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <SectionCta label="Book Service" />
        </Container>
      </Section>

      <CtaSection
        title={`Interested in ${service.shortTitle}?`}
        description="Share your property details and we'll respond within one business day with a clear proposal."
        buttonLabel="Book Service"
      />
    </>
  );
}
