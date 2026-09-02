import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { blogPosts, getBlogPost } from "@/data/blog";
import { JsonLd } from "@/components/seo/json-ld";
import { articleSchema, breadcrumbSchema } from "@/lib/schemas";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return createMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${slug}`,
    ogImage: post.image,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd
        data={[
          articleSchema(post),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${slug}` },
          ]),
        ]}
      />

      <article>
        <section className="page-hero bg-forest-600">
          <Container size="narrow">
            <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: post.title }]} />
            <Badge className="mt-4 mb-4 bg-forest-50 text-forest-700">{post.category}</Badge>
            <h1 className="page-title text-[1.65rem] sm:text-3xl md:text-4xl">{post.title}</h1>
            <p className="mt-4 text-white/70">
              {new Date(post.publishedAt).toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" })} · {post.readTime}
            </p>
          </Container>
        </section>

        <Section>
          <Container size="narrow">
            <div className="relative mb-8 aspect-[16/9] overflow-hidden rounded-2xl sm:mb-10 sm:rounded-3xl">
              <Image src={post.image} alt={post.title} fill className="object-cover" sizes="(max-width: 896px) 100vw, 896px" priority />
            </div>
            <div className="prose prose-lg max-w-none text-muted-foreground dark:prose-invert">
              <p className="text-lg leading-relaxed">{post.content}</p>
              <p className="leading-relaxed">
                At EnviroWorks Services Inc, we help Edmonton property owners and facility managers
                maintain exceptional standards year-round. Whether you need commercial cleaning,
                residential care, landscaping, or snow removal, our team delivers results you can trust.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
              <Button asChild className="w-full bg-forest-600 font-semibold hover:bg-forest-700 sm:w-auto">
                <Link href="/quote">Book Service</Link>
              </Button>
              <Button asChild variant="outline" className="w-full sm:w-auto">
                <Link href="/blog">Back to Blog</Link>
              </Button>
            </div>
          </Container>
        </Section>
      </article>
    </>
  );
}
