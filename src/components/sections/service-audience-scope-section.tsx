import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionCta } from "@/components/layout/section-cta";

type ServiceAudienceScopeCardsProps = {
  audience: string[];
  included: string[];
  ctaLabel?: string;
};

function AudienceCard({
  title,
  items,
  variant = "solid",
}: {
  title: string;
  items: string[];
  variant?: "solid" | "gradient";
}) {
  const headerClassName =
    variant === "gradient"
      ? "relative overflow-hidden bg-gradient-to-br from-forest-700 via-forest-600 to-forest-600 px-5 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12"
      : "relative overflow-hidden bg-forest-600 px-5 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12";

  const bodyClassName =
    variant === "gradient"
      ? "flex flex-1 flex-col border-t border-forest-100 bg-forest-50/60 px-5 py-6 sm:px-8 sm:py-8 md:px-10 md:py-10"
      : "flex flex-1 flex-col border-t border-forest-100 bg-white px-5 py-6 sm:px-8 sm:py-8 md:px-10 md:py-10";

  return (
    <article className="group flex flex-col overflow-hidden rounded-[1.75rem] border border-forest-200/80 bg-white shadow-[0_16px_40px_rgba(20,83,45,0.08)] transition-[transform,box-shadow] hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(20,83,45,0.12)]">
      <div className={headerClassName}>
        <div
          className={
            variant === "gradient"
              ? "absolute -bottom-12 -left-8 h-36 w-36 rounded-full bg-horizon-400/15 blur-2xl"
              : "absolute -top-10 -right-10 h-32 w-32 rounded-full bg-horizon-400/20 blur-2xl"
          }
          aria-hidden
        />
        <div className="absolute right-8 bottom-0 h-px w-16 bg-horizon-400/80" aria-hidden />
        <div className="relative">
          <h2 className="font-heading text-xl font-bold tracking-[0.1em] text-white uppercase sm:text-2xl md:text-[1.75rem] md:leading-tight md:tracking-[0.12em]">
            {title}
          </h2>
        </div>
      </div>
      <ul className={`${bodyClassName} gap-3`}>
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground md:text-base"
          >
            <CheckCircle2
              className="mt-0.5 h-4 w-4 shrink-0 text-forest-600"
              aria-hidden
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export function ServiceAudienceScopeCards({
  audience,
  included,
}: ServiceAudienceScopeCardsProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
      <AudienceCard title="Ideal For" items={audience} variant="solid" />
      <AudienceCard title="What's Included" items={included} variant="gradient" />
    </div>
  );
}

export function ServiceAudienceScopeSection({
  audience,
  included,
  ctaLabel = "Book Service",
}: ServiceAudienceScopeCardsProps) {
  return (
    <Section variant="muted">
      <Container>
        <ServiceAudienceScopeCards audience={audience} included={included} />
        <SectionCta label={ctaLabel} />
      </Container>
    </Section>
  );
}
