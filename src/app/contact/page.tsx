import type { Metadata } from "next";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { images } from "@/lib/images";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { SectionCta } from "@/components/layout/section-cta";
import { ContactForm } from "@/components/forms/contact-form";
import { ContactMap } from "@/components/sections/contact-map";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description:
    "Contact Enviro Horizon Solutions Ltd in Edmonton for commercial cleaning, residential cleaning, snow removal, and property maintenance. Call, email, or send a message.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="page-hero relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={images.contactBanner}
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
            aria-hidden
          />
          <div className="absolute inset-0 bg-forest-600/85" aria-hidden />
        </div>
        <Container className="relative">
          <Breadcrumbs items={[{ label: "Contact" }]} variant="light" />
          <h1 className="page-title mt-4">Let&apos;s Work Together</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85 sm:mt-6 sm:text-lg">
            Whether you need one-time support or long-term property maintenance solutions, our
            team is ready to help. We look forward to serving you.
          </p>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-12">
            <div className="min-w-0">
              <div className="space-y-4">
                <div className="surface-card p-6">
                  <h2 className="font-heading text-lg font-bold">Office Location</h2>
                  <p className="mt-3 flex items-start gap-3 text-muted-foreground">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-forest-600 dark:text-horizon-400" aria-hidden />
                    <span>
                      {siteConfig.address.street}
                      <br />
                      {siteConfig.address.city}, {siteConfig.address.province}{" "}
                      {siteConfig.address.postalCode}
                    </span>
                  </p>
                </div>

                <div className="surface-card p-6">
                  <h2 className="font-heading text-lg font-bold">Contact Information</h2>
                  <div className="mt-4 space-y-4">
                    <div>
                      <p className="text-sm font-medium">Office Phone</p>
                      <a
                        href={siteConfig.phoneHref}
                        className="mt-1 flex items-center gap-2 text-muted-foreground hover:text-forest-600"
                      >
                        <Phone className="h-4 w-4 shrink-0" aria-hidden />
                        {siteConfig.phone}
                      </a>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Email</p>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="mt-1 flex min-w-0 items-center gap-2 break-all text-muted-foreground hover:text-forest-600 sm:break-normal"
                      >
                        <Mail className="h-4 w-4 shrink-0" aria-hidden />
                        {siteConfig.email}
                      </a>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Careers</p>
                      <a
                        href={`mailto:${siteConfig.careersEmail}`}
                        className="mt-1 flex min-w-0 items-center gap-2 break-all text-muted-foreground hover:text-forest-600 sm:break-normal"
                      >
                        <Mail className="h-4 w-4 shrink-0" aria-hidden />
                        {siteConfig.careersEmail}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="surface-card mt-6 ring-0">
                <CardContent className="p-6">
                  <h2 className="flex items-center gap-2 font-heading text-lg font-bold">
                    <Clock className="h-5 w-5 text-forest-600" aria-hidden />
                    Business Hours
                  </h2>
                  <ul className="mt-4 space-y-2">
                    {siteConfig.hours.map((h) => (
                      <li key={h.days} className="flex flex-col gap-0.5 text-sm sm:flex-row sm:justify-between sm:gap-4">
                        <span className="font-medium">{h.days}</span>
                        <span className="text-muted-foreground sm:text-right">{h.hours}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="surface-card mt-6 ring-0">
                <CardContent className="p-6">
                  <h2 className="font-heading text-lg font-bold">Service Area</h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Serving Edmonton, St. Albert, Sherwood Park, Beaumont, and Leduc.
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {siteConfig.serviceAreas.map((area) => (
                      <li
                        key={area}
                        className="rounded-full bg-forest-50 px-3 py-1 text-xs font-medium text-forest-700 dark:bg-forest-900/50 dark:text-horizon-300"
                      >
                        {area}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="flex min-h-0 min-w-0 flex-col gap-6">
              <Card className="surface-card h-fit w-full shrink-0 ring-0">
                <CardContent className="p-6 md:p-8">
                  <h2 className="font-heading text-xl font-bold">Send a Message</h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    We typically respond within one business day.
                  </p>
                  <div className="mt-6">
                    <ContactForm />
                  </div>
                </CardContent>
              </Card>

              <ContactMap className="min-h-0" />
            </div>
          </div>
          <SectionCta
            label="Book Service"
            secondaryLabel="Call Us"
            secondaryHref={siteConfig.phoneHref}
          />
        </Container>
      </Section>
    </>
  );
}
