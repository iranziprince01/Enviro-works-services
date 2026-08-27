"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { NavItem } from "@/data/navigation";
import { navItemClassName } from "@/lib/nav-styles";
import { cn } from "@/lib/utils";

type NavDropdownProps = {
  item: NavItem;
  isActive: boolean;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export function NavDropdown({ item, isActive, isOpen, onOpen, onClose }: NavDropdownProps) {
  const hasMenu = Boolean(item.groups?.length || item.items?.length);

  if (!hasMenu) {
    return (
      <Link
        href={item.href}
        className={navItemClassName(isActive)}
        aria-current={isActive ? "page" : undefined}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      <Link
        href={item.href}
        className={navItemClassName(isActive, "inline-flex items-center gap-1 px-3 py-2")}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-current={isActive ? "page" : undefined}
      >
        {item.label}
        <ChevronDown
          className={cn("h-4 w-4 transition-transform duration-200", isOpen && "rotate-180")}
          aria-hidden
        />
      </Link>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 top-full z-50 pt-2"
          >
            <div
              className={cn(
                "overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-forest-950/10 ring-1 ring-black/5 dark:shadow-black/40",
                item.wide ? "w-[min(36rem,calc(100vw-2rem))]" : "w-72",
              )}
            >
              {item.groups && item.groups.length > 0 && (
                <div
                  className={cn(
                    "grid gap-0 p-2",
                    item.wide ? "sm:grid-cols-3" : "grid-cols-1",
                  )}
                >
                  {item.groups.map((group) => (
                    <div key={group.label} className="p-2">
                      <p className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-forest-600 dark:text-horizon-400">
                        {group.label}
                      </p>
                      <ul className="space-y-0.5">
                        {group.items.map((link) => (
                          <li key={link.href}>
                            <Link
                              href={link.href}
                              className="block rounded-xl px-3 py-2.5 transition-colors hover:bg-forest-50 dark:hover:bg-forest-900/40"
                            >
                              <span className="block text-sm font-medium text-foreground line-clamp-2">
                                {link.title}
                              </span>
                              {link.description && (
                                <span className="mt-0.5 line-clamp-2 text-xs text-muted-foreground">
                                  {link.description}
                                </span>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {item.items && item.items.length > 0 && (
                <ul
                  className={cn(
                    "space-y-0.5 p-2",
                    item.groups?.length ? "border-t border-border" : "",
                  )}
                >
                  {item.items.map((link) => (
                    <li key={link.href + link.title}>
                      <Link
                        href={link.href}
                        className={cn(
                          "block rounded-xl px-3 py-2.5 transition-colors hover:bg-forest-50 dark:hover:bg-forest-900/40",
                          link.title.startsWith("View") || link.title.startsWith("All")
                            ? "font-medium text-forest-600 dark:text-horizon-400"
                            : "",
                        )}
                      >
                        <span className="block text-sm font-medium text-foreground line-clamp-2">
                          {link.title}
                        </span>
                        {link.description && (
                          <span className="mt-0.5 block text-xs text-muted-foreground">
                            {link.description}
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
