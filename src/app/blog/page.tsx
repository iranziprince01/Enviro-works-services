import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { createMetadata } from "@/lib/seo";
import { blogPosts } from "@/data/blog";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { SectionCta } from "@/components/layout/section-cta";
import { CtaSection } from "@/components/sections/cta-section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = createMetadata({
  title: "Blog",
  description:
    "Property maintenance tips, seasonal advice, and industry insights from EnviroWorks Services Inc, Edmonton's property care experts.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <section className="page-hero bg-forest-600">
        <Container>
          <Breadcrumbs items={[{ label: "Blog" }]} />
          <h1 className="page-title mt-4">Insights &amp; Tips</h1>
          <p className="mt-4 max-w-2xl text-base text-white/80 sm:mt-4 sm:text-lg">
            Expert advice on property care, seasonal maintenance, and facility management.
          </p>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <Card className="h-full overflow-hidden border-border/60 transition-shadow hover:shadow-lg">
                  <div className="relative aspect-[16/10]">
                    <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                  <CardContent className="p-5">
                    <Badge variant="secondary" className="mb-2">{post.category}</Badge>
                    <h2 className="font-heading font-semibold group-hover:text-forest-600">{post.title}</h2>
                    <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{post.excerpt}</p>
                    <p className="mt-3 text-xs text-muted-foreground">
                      {new Date(post.publishedAt).toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" })} · {post.readTime}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <SectionCta label="Book Service" />
        </Container>
      </Section>

      <CtaSection
        title="Need help maintaining your property?"
        description="Turn expert advice into reliable service. Book EnviroWorks Services Inc for cleaning, maintenance, and seasonal care across Alberta."
        buttonLabel="Book Service"
      />
    </>
  );
}
