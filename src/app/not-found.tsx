import type { Metadata } from "next";
import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center py-20">
      <Container className="text-center">
        <p className="font-heading text-8xl font-bold text-forest-200 dark:text-forest-800">404</p>
        <h1 className="mt-4 font-heading text-3xl font-bold md:text-4xl">Page Not Found</h1>
        <p className="mx-auto mt-4 max-w-md text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild className="bg-forest-600 hover:bg-forest-700">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" aria-hidden />
              Back to Home
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/services">
              <ArrowLeft className="mr-2 h-4 w-4" aria-hidden />
              Browse Services
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
