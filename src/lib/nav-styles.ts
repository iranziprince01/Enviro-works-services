import { cn } from "@/lib/utils";

export function navItemClassName(isActive: boolean, className?: string) {
  return cn(
    "relative rounded-lg px-4 py-2 text-sm font-bold transition-colors",
    isActive
      ? "text-forest-600 after:absolute after:right-4 after:bottom-1 after:left-4 after:h-0.5 after:rounded-full after:bg-horizon-400"
      : "text-black hover:text-forest-600",
    className,
  );
}

export function mobileNavItemClassName(isActive: boolean, className?: string) {
  return cn(
    "block rounded-xl border px-4 py-3 text-base font-bold transition-colors",
    isActive
      ? "border-forest-200 bg-forest-50 text-forest-600"
      : "border-transparent text-black hover:bg-muted hover:text-black",
    className,
  );
}
