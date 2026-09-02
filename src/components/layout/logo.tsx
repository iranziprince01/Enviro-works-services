import Image from "next/image";
import { brandedLogoUrl, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  priority?: boolean;
  variant?: "default" | "footer";
};

export function Logo({ className, priority, variant = "default" }: LogoProps) {
  return (
    <Image
      src={brandedLogoUrl(variant)}
      alt={siteConfig.name}
      width={1500}
      height={608}
      unoptimized
      className={cn("h-10 w-auto max-w-[min(100%,200px)] object-contain object-left sm:h-12 sm:max-w-[260px] md:h-14 md:max-w-[300px]", className)}
      priority={priority}
    />
  );
}
