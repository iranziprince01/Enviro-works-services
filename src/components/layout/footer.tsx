import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "@/components/icons/social-icons";
import { Container } from "@/components/layout/container";
import { Logo } from "@/components/layout/logo";
import { footerPromise } from "@/data/company";
import { LandAcknowledgement } from "@/components/layout/land-acknowledgement";
import { serviceNavItems } from "@/data/services";
import { siteConfig } from "@/lib/site";

const footerLinks = {
  services: serviceNavItems,
  company: [
    { title: "About Us", href: "/about" },
    { title: "Our Impact", href: "/impact" },
    { title: "Careers", href: "/careers" },
    { title: "Blog", href: "/blog" },
  ],
  support: [
    { title: "Book a Service", href: "/quote" },
    { title: "Contact Us", href: "/contact" },
    { title: "Privacy Policy", href: "/privacy" },
    { title: "Terms of Service", href: "/terms" },
  ],
};

const socialLinks = [
  { label: "Facebook", href: siteConfig.social.facebook, icon: FacebookIcon },
  { label: "Instagram", href: siteConfig.social.instagram, icon: InstagramIcon },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-forest-700/50 bg-forest-600 text-white">
      <div className="footer-motion pointer-events-none absolute inset-0 opacity-5" aria-hidden>
        <span className="footer-orb footer-orb-a" />
        <span className="footer-orb footer-orb-b" />
        <span className="footer-orb footer-orb-c" />
        <span className="footer-ring footer-ring-a" />
        <span className="footer-ring footer-ring-b" />
        <span className="footer-beam footer-beam-a" />
        <span className="footer-beam footer-beam-b" />
        <span className="footer-dot footer-dot-a" />
        <span className="footer-dot footer-dot-b" />
        <span className="footer-dot footer-dot-c" />
      </div>

      <Container className="relative z-10 py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex transition-opacity hover:opacity-90">
              <Logo variant="footer" className="h-12 sm:h-14" />
            </Link>
            <div className="mt-6">
              <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-horizon-400">
                Our promise
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/75">
                {footerPromise}
              </p>
            </div>
            <div className="mt-6 space-y-3 text-sm text-white/80">
              <a
                href={siteConfig.phoneHref}
                className="flex flex-wrap items-center gap-2 break-all transition-colors hover:text-horizon-300 sm:break-normal"
              >
                <Phone className="h-4 w-4 shrink-0 text-horizon-400" aria-hidden />
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex flex-wrap items-center gap-2 break-all transition-colors hover:text-horizon-300"
              >
                <Mail className="h-4 w-4 shrink-0 text-horizon-400" aria-hidden />
                {siteConfig.email}
              </a>
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-horizon-400" aria-hidden />
                <span>
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.city}, {siteConfig.address.province}{" "}
                  {siteConfig.address.postalCode}
                </span>
              </p>
            </div>
            <div className="mt-6 flex gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white transition-colors hover:bg-horizon-500/30 hover:text-white"
                >
                  <Icon className="h-5 w-5" aria-hidden />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 sm:gap-10 lg:col-span-8 lg:grid-cols-3">
            <div>
              <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-horizon-400">
                Services
              </h3>
              <ul className="mt-4 space-y-2.5">
                {footerLinks.services.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 transition-colors hover:text-white"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-horizon-400">
                Company
              </h3>
              <ul className="mt-4 space-y-2.5">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 transition-colors hover:text-white"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-horizon-400">
                Support
              </h3>
              <ul className="mt-4 space-y-2.5">
                {footerLinks.support.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 transition-colors hover:text-white"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-4 border-t border-white/10 pt-4 lg:flex-row lg:items-start lg:justify-between">
          <p className="min-w-0 shrink-0 text-sm leading-snug text-white/50 lg:max-w-[min(100%,20rem)] lg:pt-px">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <LandAcknowledgement
            variant="footer"
            className="min-w-0 w-full lg:max-w-[min(100%,36rem)] lg:flex-1 lg:text-right"
          />
        </div>
      </Container>
    </footer>
  );
}
