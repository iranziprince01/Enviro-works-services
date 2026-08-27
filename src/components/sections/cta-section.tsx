import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { siteConfig } from "@/lib/site";

type CtaSectionProps = {
  title?: string;
  description?: string;
  buttonLabel?: string;
  variant?: "default" | "muted";
};

export function CtaSection({
  title = "Ready for property care you can count on?",
  description = "Book your free quote today. Enviro Horizon delivers reliable cleaning, maintenance, landscaping, and snow removal across Edmonton and Alberta, with clear pricing and service you can trust.",
  buttonLabel = "Get Free Quote",
  variant = "default",
}: CtaSectionProps) {
  return (
    <Section variant={variant} className="!py-16 sm:!py-20 md:!py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[1.75rem] bg-forest-600 px-6 py-12 text-center shadow-[0_20px_48px_rgba(20,83,45,0.18)] sm:px-10 sm:py-14 md:px-14 lg:rounded-[2rem]">
          <div
            className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-fresh-400/20 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-20 -left-12 h-52 w-52 rounded-full bg-fresh-400/10 blur-3xl"
            aria-hidden
          />

          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-heading text-[1.65rem] font-bold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl md:leading-[1.15]">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
              {description}
            </p>

            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:mt-10 md:flex-row md:items-center md:justify-center">
              <Button
                asChild
                size="lg"
                className="h-12 w-full bg-white px-8 text-base font-semibold text-forest-600 hover:bg-white/90 md:w-auto"
              >
                <Link href="/quote">
                  {buttonLabel}
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 w-full border-white/40 bg-transparent px-8 text-base font-semibold text-white hover:bg-white/10 hover:text-white md:w-auto"
              >
                <a href={siteConfig.phoneHref} className="break-all sm:break-normal">
                  <Phone className="mr-2 h-4 w-4" aria-hidden />
                  {siteConfig.phone}
                </a>
              </Button>
            </div>

            <p className="mt-6 text-sm font-medium text-white/70">
              Free quotes · No obligation · Response within one business day
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
