"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/data/services";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function ServiceHighlights() {
  const reducedMotion = usePrefersReducedMotion();
  const items = [...services, ...services];

  return (
    <div className="relative mt-12 overflow-hidden" aria-label="Service highlights">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-forest-950/90 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-forest-950/90 to-transparent" />
      <motion.div
        className="flex w-max gap-3"
        animate={reducedMotion ? undefined : { x: ["0%", "-50%"] }}
        transition={
          reducedMotion
            ? undefined
            : { duration: 40, repeat: Infinity, ease: "linear" }
        }
      >
        {items.map((service, index) => {
          const Icon = service.icon;
          return (
            <Link
              key={`${service.slug}-${index}`}
              href={`/services/${service.slug}`}
              className="group flex shrink-0 items-center gap-3 rounded-full border border-white/15 bg-white/10 px-5 py-2.5 backdrop-blur-md transition-colors hover:border-horizon-400/40 hover:bg-white/15"
            >
              <Icon
                className="h-4 w-4 text-horizon-400 transition-transform group-hover:scale-110"
                aria-hidden
              />
              <span className="whitespace-nowrap text-sm font-medium text-white/90">
                {service.shortTitle}
              </span>
            </Link>
          );
        })}
      </motion.div>
    </div>
  );
}
