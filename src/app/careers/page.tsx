import type { Metadata } from "next";
import { FramedImage } from "@/components/layout/framed-image";
import { FramedVideo } from "@/components/layout/framed-video";
import { CheckCircle2, Mail } from "lucide-react";
import { createMetadata } from "@/lib/seo";
import { futurePositions, whyJoinEnviroWorks } from "@/data/company";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { BackgroundVideo } from "@/components/sections/background-video";
import { CtaSection } from "@/components/sections/cta-section";
import { Card, CardContent } from "@/components/ui/card";
import { images } from "@/lib/images";

export const metadata: Metadata = createMetadata({
  title: "Careers",
  description:
    "Build your future with EnviroWorks Services Inc. Join our growing Edmonton team in cleaning, landscaping, snow removal, and property maintenance.",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <>
      <section className="page-hero relative overflow-hidden">
        <BackgroundVideo
          src={images.joinUsVideo}
          poster={images.career}
          overlayClassName="bg-forest-600/85"
          priority
        />
        <Container className="relative">
          <Breadcrumbs items={[{ label: "Careers" }]} variant="light" />
          <h1 className="page-title mt-4">
            Build Your Future With EnviroWorks Services Inc
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85 sm:mt-6 sm:text-lg">
            At EnviroWorks Services Inc, we believe great companies are built by great people.
          </p>
        </Container>
      </section>

      <Section>
        <Container className="split-section overflow-x-clip lg:grid-cols-[min(46%,480px)_1fr]">
          <FramedImage
            src={images.career}
            alt="EnviroWorks Services Inc team member at work"
            shadowSide="right"
            maxWidthClass="max-w-[min(100%,380px)] sm:max-w-[380px]"
            sizes="(max-width: 1024px) 380px, 480px"
            className="lg:mx-0"
          />

          <div className="flex min-w-0 flex-col justify-center">
            <SectionHeader
              eyebrow="Why work with us"
              title="Join a growing team built on reliability and excellence"
              align="left"
              spacing="tight"
              className="max-w-none"
            />
            <div className="content-stack space-y-4 leading-relaxed text-muted-foreground">
              <p>
                As we continue growing across Alberta, we are committed to building a strong team of
                dedicated professionals who share our values of reliability, professionalism, hard
                work, and service excellence.
              </p>
              <p>
                We are always interested in connecting with talented individuals who want to grow
                with a company that values both people and purpose.
              </p>
              <p>
                Whether you are experienced in property maintenance, cleaning services,
                landscaping, customer service, or looking to begin a new career journey, we would
                love to hear from you.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="muted">
        <Container>
          <SectionHeader
            eyebrow="Opportunities coming soon"
            title="We are expanding across Alberta"
            description="We are currently expanding and preparing to open new employment opportunities in several departments. Official job openings will be announced soon."
          />
          <ul className="mx-auto grid max-w-2xl gap-3 sm:grid-cols-2">
            {futurePositions.map((position) => (
              <li
                key={position}
                className="rounded-xl border border-border/80 bg-card px-4 py-3 text-sm font-medium"
              >
                {position}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container className="split-section overflow-x-clip lg:grid-cols-[minmax(0,32rem)_1fr] lg:justify-between">
          <div className="flex w-full min-w-0 max-w-md flex-col justify-center lg:max-w-lg">
            <SectionHeader
              title="Why join EnviroWorks Services Inc?"
              align="left"
              spacing="tight"
              className="max-w-none"
            />
            <ul className="content-stack flex flex-col gap-3">
              {whyJoinEnviroWorks.map((item) => (
                <li key={item}>
                  <div className="flex items-center gap-3 rounded-lg border border-border/80 bg-card px-4 py-3.5">
                    <CheckCircle2
                      className="h-4 w-4 shrink-0 text-forest-600 dark:text-horizon-400"
                      aria-hidden
                    />
                    <span className="text-sm leading-snug text-foreground">{item}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <FramedVideo
            src={images.joinUsVideo}
            poster={images.join}
            layout="portrait"
            shadowSide="left"
            maxWidthClass="max-w-[min(100%,340px)] sm:max-w-[340px] lg:max-w-[400px] xl:max-w-[440px]"
            className="lg:ml-auto"
          />
        </Container>
      </Section>

      <Section variant="muted">
        <Container>
          <Card className="mx-auto max-w-2xl overflow-hidden rounded-[1.75rem] border-forest-200/80 bg-white shadow-[0_14px_36px_rgba(20,83,45,0.08)]">
            <CardContent className="p-8 text-center md:p-10">
              <SectionHeader
                eyebrow="Get in touch"
                title="Interested in working with us?"
                description="Even if positions are not currently open, we welcome talented individuals who would like to be considered for future opportunities. Send us your resume and a short introduction."
                className="mb-0"
              />
              <div className="mx-auto mt-8 max-w-md rounded-xl border border-forest-100 bg-forest-50/60 px-5 py-5">
                <p className="text-sm font-medium text-foreground">Resume submission</p>
                <a
                  href={`mailto:${siteConfig.careersEmail}`}
                  className="mt-2 inline-flex min-w-0 max-w-full items-center justify-center gap-2 break-all text-base font-medium text-forest-600 transition-colors hover:text-forest-700 sm:text-lg sm:break-normal dark:text-horizon-400"
                >
                  <Mail className="h-5 w-5 shrink-0" aria-hidden />
                  {siteConfig.careersEmail}
                </a>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  We will keep your information on file and contact qualified candidates when
                  opportunities become available.
                </p>
              </div>
              <p className="mt-6 text-sm font-medium text-forest-600 dark:text-horizon-400">
                Your future opportunity could start here.
              </p>
            </CardContent>
          </Card>
        </Container>
      </Section>

      <CtaSection
        title="Need property care while we grow our team?"
        description="We're hiring and serving Alberta. Book reliable cleaning, maintenance, and seasonal services today."
        buttonLabel="Book Service"
      />
    </>
  );
}
