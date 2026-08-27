import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { createMetadata } from "@/lib/seo";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { CtaSection } from "@/components/sections/cta-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = createMetadata({
  title: "Pricing",
  description:
    "Transparent, customized pricing for commercial cleaning, residential cleaning, snow removal, and property maintenance in Edmonton. Request your free quote today.",
  path: "/pricing",
});

const pricingFactors = [
  "Property size and layout",
  "Service frequency and scope",
  "Number of locations",
  "Seasonal requirements",
  "Specialized cleaning protocols",
  "Access and scheduling preferences",
];

export default function PricingPage() {
  return (
    <>
      <section className="page-hero bg-forest-600">
        <Container>
          <Breadcrumbs items={[{ label: "Pricing" }]} />
          <h1 className="page-title mt-4">Custom Pricing for Every Property</h1>
          <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
            Every property is unique. We provide transparent, customized quotes, never one-size-fits-all pricing.
          </p>
          <Button asChild size="lg" className="mt-6 w-full bg-horizon-500 text-forest-950 hover:bg-horizon-400 sm:mt-8 sm:w-auto">
            <Link href="/quote">Get Free Quote</Link>
          </Button>
        </Container>
      </section>

      <Section>
        <Container>
          <SectionHeader
            title="How We Price"
            description="Our quotes are based on a detailed assessment of your property and service requirements."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pricingFactors.map((factor) => (
              <div key={factor} className="flex gap-3 rounded-2xl border border-border/60 p-5">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-forest-600 dark:text-horizon-400" aria-hidden />
                <p className="text-sm">{factor}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="muted">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: "Residential", description: "Homes, townhouses, and condos with recurring or one-time cleans tailored to your space.", cta: "Get Free Quote" },
              { title: "Commercial", description: "Offices, retail, and facilities with scalable programs and flexible scheduling.", cta: "Get Free Quote" },
              { title: "Seasonal", description: "Snow contracts, landscaping packages, and bundled year-round maintenance.", cta: "Get Free Quote" },
            ].map((tier) => (
              <Card key={tier.title} className="border-border/60">
                <CardContent className="flex h-full flex-col p-6">
                  <h2 className="font-heading text-xl font-semibold">{tier.title}</h2>
                  <p className="mt-3 flex-1 text-sm text-muted-foreground">{tier.description}</p>
                  <Button asChild className="mt-6 bg-forest-600 hover:bg-forest-700">
                    <Link href="/quote">{tier.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <CtaSection
        title="Ready for transparent pricing on your property?"
        description="Request a free custom quote tailored to your space, schedule, and service needs."
        buttonLabel="Get Free Quote"
      />
    </>
  );
}
