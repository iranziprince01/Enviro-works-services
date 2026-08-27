import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { MotionItem, MotionStagger } from "@/components/motion/motion-reveal";
import { cn } from "@/lib/utils";

type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  className?: string;
};

export function ServiceCard({
  title,
  description,
  href,
  icon: Icon,
  className,
}: ServiceCardProps) {
  return (
    <MotionItem>
      <Link href={href} className="group block h-full">
        <Card
          className={cn(
            "h-full rounded-2xl border-border/80 bg-card shadow-none transition-colors duration-300 hover:border-forest-300/80",
            className,
          )}
        >
          <CardContent className="flex h-full flex-col p-8">
            <Icon
              className="mb-6 h-6 w-6 text-forest-600 dark:text-horizon-400"
              aria-hidden
            />
            <h3 className="font-heading text-xl font-semibold tracking-tight">{title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
              {description}
            </p>
            <span className="mt-6 inline-flex items-center text-sm font-medium text-forest-600 transition-colors group-hover:text-forest-700 dark:text-horizon-400">
              Learn more
              <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
            </span>
          </CardContent>
        </Card>
      </Link>
    </MotionItem>
  );
}

export function ServiceCardGrid({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <MotionStagger className={cn("grid gap-8 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {children}
    </MotionStagger>
  );
}
