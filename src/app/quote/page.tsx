import type { Metadata } from "next";
import Image from "next/image";
import { createMetadata } from "@/lib/seo";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { QuoteForm } from "@/components/forms/quote-form";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/lib/site";
import { images } from "@/lib/images";
import { Phone, Mail, Clock } from "lucide-react";

export const metadata: Metadata = createMetadata({
  title: "Book Service",
  description:
    "Request professional property services from EnviroWorks Services Inc in Edmonton. Book cleaning, maintenance, landscaping, or snow removal in minutes.",
  path: "/quote",
  keywords: ["Cleaning Company Edmonton", "Property Services Edmonton"],
});

export default function QuotePage() {
  return (
    <>
      <section className="page-hero relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={images.bookingBanner}
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
          <Breadcrumbs items={[{ label: "Book a Service" }]} variant="light" />
          <h1 className="page-title mt-4">
            Request Professional Service In Minutes
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85 sm:mt-6 sm:text-lg">
            Need help maintaining your property? Our team is ready to assist. Fill out our
            booking request form and we will contact you shortly.
          </p>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
            <div className="min-w-0 lg:col-span-2">
              <Card className="surface-card ring-0">
                <CardContent className="p-6 md:p-10">
                  <h2 className="font-heading text-xl font-semibold">Booking Form</h2>
                  <div className="mt-6">
                    <QuoteForm />
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="min-w-0 space-y-6">
              <Card className="surface-card ring-0">
                <CardContent className="p-6">
                  <h2 className="font-heading text-lg font-semibold">Prefer to talk?</h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Our team is ready to discuss your property needs.
                  </p>
                  <div className="mt-4 space-y-3">
                    <a href={siteConfig.phoneHref} className="flex items-center gap-2 text-sm font-medium text-forest-600 hover:text-forest-700 dark:text-horizon-400">
                      <Phone className="h-4 w-4" aria-hidden />
                      {siteConfig.phone}
                    </a>
                    <a href={`mailto:${siteConfig.email}`} className="flex min-w-0 items-center gap-2 break-all text-sm font-medium text-forest-600 hover:text-forest-700 sm:break-normal dark:text-horizon-400">
                      <Mail className="h-4 w-4" aria-hidden />
                      {siteConfig.email}
                    </a>
                  </div>
                </CardContent>
              </Card>
              <Card className="surface-card ring-0">
                <CardContent className="p-6">
                  <h2 className="font-heading text-lg font-semibold">Business Hours</h2>
                  <ul className="mt-4 space-y-2">
                    {siteConfig.hours.map((h) => (
                      <li key={h.days} className="flex items-start gap-2 text-sm">
                        <Clock className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" aria-hidden />
                        <span>
                          <span className="font-medium">{h.days}:</span>{" "}
                          <span className="text-muted-foreground">{h.hours}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
