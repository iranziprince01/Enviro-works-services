import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import { HeroSection } from "@/components/sections/hero-section";
import { ServicesMarquee } from "@/components/sections/services-marquee";
import { TrustedBySection } from "@/components/sections/trusted-by-section";
import { TrustBar } from "@/components/sections/trust-bar";
import { IntroSection } from "@/components/sections/intro-section";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us-section";
import { CtaSection } from "@/components/sections/cta-section";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Card, CardContent } from "@/components/ui/card";
import { SectionCta } from "@/components/layout/section-cta";
import { testimonials, stats } from "@/data/testimonials";
import { images } from "@/lib/images";

const processSteps = [
  {
    step: "01",
    title: "We listen",
    description: "A short consultation to understand your property, priorities, and schedule.",
    image: images.processSteps[0],
    imageAlt: "Consultation to understand property needs",
  },
  {
    step: "02",
    title: "We propose",
    description: "A clear scope and transparent pricing with no hidden fees or vague line items.",
    image: images.processSteps[1],
    imageAlt: "Clear proposal and transparent pricing",
  },
  {
    step: "03",
    title: "We onboard",
    description: "Crews briefed on your site, access, and standards before the first visit.",
    image: images.processSteps[2],
    imageAlt: "Team onboarding and site briefing",
  },
  {
    step: "04",
    title: "We deliver",
    description: "Consistent execution with regular check-ins and proactive communication.",
    image: images.processSteps[3],
    imageAlt: "Consistent property service delivery",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <ServicesMarquee />

      <TrustBar />

      <TrustedBySection />

      <IntroSection />

      <WhyChooseUsSection />

      <Section>
        <Container>
          <SectionHeader
            eyebrow="What we do"
            title="Complete property solutions for homes and businesses across Alberta"
            description="From Edmonton offices to residential homes, EnviroWorks Services Inc is the one team for cleaning, seasonal care, and year-round property maintenance so you can book with confidence."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Commercial",
                description:
                  "Offices, retail, healthcare, and multi-tenant buildings that need consistent standards.",
                href: "/services/commercial-cleaning",
              },
              {
                title: "Residential",
                description:
                  "Home cleaning and exterior care for Edmonton homeowners who value their time.",
                href: "/services/residential-cleaning",
              },
              {
                title: "Seasonal",
                description:
                  "Snow removal, ice management, and winter property protection when Alberta demands it.",
                href: "/services/snow-removal",
              },
              {
                title: "Maintenance",
                description:
                  "Landscaping, lawn care, pressure washing, and year-round property upkeep.",
                href: "/services/property-maintenance",
              },
            ].map((category) => (
              <Link
                key={category.title}
                href={category.href}
                className="group flex flex-col rounded-2xl border border-forest-500/40 bg-forest-600 p-6 shadow-sm shadow-forest-950/15 transition-[border-color,background-color,box-shadow,transform] hover:-translate-y-1 hover:border-forest-400 hover:bg-forest-700 hover:shadow-md hover:shadow-forest-950/20 sm:p-8"
              >
                <h3 className="font-heading text-xl font-bold tracking-tight text-white">
                  {category.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-white/80">
                  {category.description}
                </p>
                <span className="mt-6 inline-flex items-center text-sm font-semibold text-horizon-300">
                  View Services
                  <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                </span>
              </Link>
            ))}
          </div>
          <SectionCta
            label="Explore All Services"
            href="/services"
            secondaryLabel="Book Service"
            secondaryHref="/quote"
          />
        </Container>
      </Section>

      <Section className="bg-forest-600 py-16 text-white sm:py-20 md:py-28 lg:py-32">
        <Container>
          <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-horizon-300">
              Results that speak for themselves
            </p>
            <h2 className="mt-3 font-heading text-[1.65rem] font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
              Alberta property owners choose EnviroWorks Services Inc
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4 lg:gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
          <SectionCta label="Book Service" variant="light" />
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader
            eyebrow="How we work"
            title="Book in minutes. Results you can see."
            description="No lengthy sales cycles. We learn your needs, propose clearly, and get to work so Alberta clients get dependable service without the hassle."
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <Card
                key={step.step}
                className="gap-0 overflow-hidden rounded-2xl border border-forest-200/80 bg-white p-0 shadow-sm shadow-forest-950/[0.05] ring-0 transition-[border-color,box-shadow,transform] hover:-translate-y-1 hover:border-forest-300/80 hover:shadow-md hover:shadow-forest-950/[0.08] dark:bg-card"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={step.image}
                    alt={step.imageAlt}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <CardContent className="p-6">
                  <span className="font-heading text-sm font-bold text-forest-600 dark:text-horizon-400">
                    {step.step}
                  </span>
                  <h3 className="mt-2 font-heading text-xl font-bold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <SectionCta label="Get Free Quote" />
        </Container>
      </Section>

      <Section variant="muted">
        <Container>
          <SectionHeader
            eyebrow="Client reviews"
            title="Property owners across Alberta trust EnviroWorks Services Inc"
            description="Feedback from facility managers, business owners, and homeowners in Edmonton, St. Albert, Sherwood Park, and beyond."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {testimonials.slice(0, 3).map((t) => (
              <Card
                key={t.id}
                className="rounded-2xl border-forest-200/80 bg-white shadow-[0_8px_24px_rgba(20,83,45,0.06)] ring-0 transition-[box-shadow,transform] hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(20,83,45,0.1)]"
              >
                <CardContent className="p-7 sm:p-8">
                  <div className="mb-4 flex gap-0.5" aria-label={`${t.rating} out of 5 stars`}>
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-horizon-500 text-horizon-500" aria-hidden />
                    ))}
                  </div>
                  <blockquote className="text-sm leading-relaxed text-foreground/80">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="mt-6 border-t border-forest-100 pt-5">
                    <p className="font-heading font-bold text-foreground">{t.name}</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {t.role}
                      {t.company ? `, ${t.company}` : ""} · {t.location}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <SectionCta
            label="Book Service"
            secondaryLabel="Read Reviews"
            secondaryHref="/testimonials"
          />
        </Container>
      </Section>

      <CtaSection buttonLabel="Book Service" />
    </>
  );
}
