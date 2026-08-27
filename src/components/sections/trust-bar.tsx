import { CheckCircle2, Clock3, MapPin, ShieldCheck } from "lucide-react";
import { Container } from "@/components/layout/container";

const trustItems = [
  {
    icon: CheckCircle2,
    title: "Free quotes",
    description: "Clear pricing, no obligation",
  },
  {
    icon: Clock3,
    title: "Fast response",
    description: "Reply within one business day",
  },
  {
    icon: ShieldCheck,
    title: "Fully insured",
    description: "WCB & liability coverage",
  },
  {
    icon: MapPin,
    title: "Alberta-wide care",
    description: "Edmonton & surrounding cities",
  },
] as const;

export function TrustBar() {
  return (
    <section
      className="bg-white py-6 sm:py-8"
      aria-label="Why book with Enviro Horizon"
    >
      <Container>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {trustItems.map(({ icon: Icon, title, description }) => (
            <li
              key={title}
              className="flex items-start gap-3 rounded-xl border border-forest-100 bg-forest-50/40 px-4 py-3.5 sm:px-5"
            >
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-forest-600 text-white shadow-sm">
                <Icon className="h-4 w-4" strokeWidth={2} aria-hidden />
              </span>
              <div className="min-w-0">
                <p className="font-heading text-sm font-bold tracking-tight text-forest-700 sm:text-base">
                  {title}
                </p>
                <p className="mt-0.5 text-xs leading-snug text-muted-foreground sm:text-sm">
                  {description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
