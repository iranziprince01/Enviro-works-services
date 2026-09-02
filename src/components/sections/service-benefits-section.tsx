import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { FramedImage } from "@/components/layout/framed-image";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";

type ServiceBenefitsSectionProps = {
  title?: string;
  benefits: string[];
  image: string;
  imageAlt: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export function ServiceBenefitsSection({
  title = "Why Choose EnviroWorks Services Inc",
  benefits,
  image,
  imageAlt,
  ctaLabel = "Get Free Quote",
  ctaHref = "/quote",
}: ServiceBenefitsSectionProps) {
  return (
    <Section>
      <Container className="split-section overflow-x-clip lg:grid-cols-[min(38%,400px)_1fr] lg:items-stretch">
        <FramedImage
          src={image}
          alt={imageAlt}
          shadowSide="right"
          fillHeight
          sizes="(max-width: 1024px) 340px, 400px"
          maxWidthClass="max-w-none"
          className="h-full lg:mx-0"
        />

        <div className="flex min-w-0 flex-col">
          <SectionHeader
            eyebrow="Benefits"
            title={title}
            align="left"
            spacing="tight"
            className="max-w-none"
          />

          <ul className="content-stack grid grid-cols-1 gap-3 sm:grid-cols-2">
            {benefits.map((item) => (
              <li key={item}>
                <div className="flex h-full items-start gap-3 rounded-lg border border-border bg-card px-4 py-4">
                  <span
                    className="mt-0.5 shrink-0 text-sm font-semibold text-forest-600"
                    aria-hidden
                  >
                    ✓
                  </span>
                  <span className="text-sm leading-relaxed text-foreground">{item}</span>
                </div>
              </li>
            ))}
            <li>
              <Link
                href={ctaHref}
                className="group flex h-full items-start gap-3 rounded-lg border border-forest-600 bg-forest-600 px-4 py-4 transition-colors hover:border-forest-700 hover:bg-forest-700"
              >
                <ArrowRight
                  className="mt-0.5 h-4 w-4 shrink-0 text-white transition-transform group-hover:translate-x-0.5"
                  aria-hidden
                />
                <span className="text-sm font-semibold leading-relaxed text-white">
                  {ctaLabel}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </Section>
  );
}
