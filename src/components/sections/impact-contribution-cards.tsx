import { impactContributions } from "@/data/company";

export function ImpactContributionCards() {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {impactContributions.map(({ text, icon: Icon }, index) => (
        <li key={text}>
          <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-forest-200/80 bg-white p-6 shadow-[0_14px_36px_rgba(20,83,45,0.08)] transition-[transform,box-shadow,border-color] hover:-translate-y-1 hover:border-forest-300/80 hover:shadow-[0_22px_48px_rgba(20,83,45,0.12)] md:p-7">
            <div
              className={`relative mb-5 flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-md ${
                index % 2 === 0
                  ? "bg-forest-600 shadow-forest-600/25"
                  : "bg-gradient-to-br from-forest-700 via-forest-600 to-forest-600 shadow-forest-700/25"
              }`}
            >
              <div
                className="absolute -top-1.5 -right-1.5 h-6 w-6 rounded-full bg-horizon-400/30 blur-md"
                aria-hidden
              />
              <Icon className="relative h-6 w-6" strokeWidth={1.75} aria-hidden />
            </div>
            <p className="text-sm leading-relaxed text-foreground/85 md:text-base md:leading-relaxed">
              {text}
            </p>
          </article>
        </li>
      ))}
    </ul>
  );
}
