"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import type { NavItem } from "@/data/navigation";
import { mobileNavItemClassName } from "@/lib/nav-styles";
import { cn } from "@/lib/utils";

type MobileNavSectionProps = {
  item: NavItem;
  isActive: boolean;
  onNavigate: () => void;
};

export function MobileNavSection({ item, isActive, onNavigate }: MobileNavSectionProps) {
  const hasMenu = Boolean(item.groups?.length || item.items?.length);
  const [expanded, setExpanded] = useState(false);

  if (!hasMenu) {
    return (
      <Link
        href={item.href}
        onClick={onNavigate}
        className={mobileNavItemClassName(isActive)}
        aria-current={isActive ? "page" : undefined}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className={cn("rounded-xl border", isActive ? "border-forest-200" : "border-border/60")}>
      <div className="flex items-center">
        <Link
          href={item.href}
          onClick={onNavigate}
          className={cn(
            "flex-1 rounded-l-xl px-4 py-3 text-base font-bold transition-colors",
            isActive
              ? "bg-forest-50 text-forest-600"
              : "text-black hover:bg-muted hover:text-black",
          )}
          aria-current={isActive ? "page" : undefined}
        >
          {item.label}
        </Link>
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="flex h-full items-center rounded-r-xl px-4 py-3 text-muted-foreground transition-colors hover:bg-muted"
          aria-expanded={expanded}
          aria-label={`${expanded ? "Collapse" : "Expand"} ${item.label} menu`}
        >
          <ChevronDown
            className={cn("h-5 w-5 transition-transform", expanded && "rotate-180")}
            aria-hidden
          />
        </button>
      </div>

      {expanded && (
        <div className="border-t border-border px-2 py-2">
          {item.groups?.map((group) => (
            <div key={group.label} className="mb-3 last:mb-0">
              <p className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-forest-600 dark:text-horizon-400">
                {group.label}
              </p>
              {group.items.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onNavigate}
                  className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          ))}
          {item.items?.map((link) => (
            <Link
              key={link.href + link.title}
              href={link.href}
              onClick={onNavigate}
              className={cn(
                "block rounded-lg px-3 py-2 text-sm transition-colors hover:bg-muted",
                link.title.startsWith("View") || link.title.startsWith("All")
                  ? "font-medium text-forest-600 dark:text-horizon-400"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {link.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
