import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

function getMapEmbedUrl() {
  const { street, city, province, postalCode } = siteConfig.address;
  const query = encodeURIComponent(
    `${street}, ${city}, ${province} ${postalCode}, Canada`,
  );
  return `https://www.google.com/maps?q=${query}&z=16&output=embed`;
}

export function ContactMap({ className }: { className?: string }) {
  const { street, city, province, postalCode } = siteConfig.address;

  return (
    <div
      className={cn(
        "surface-card flex min-h-[220px] flex-col overflow-hidden sm:min-h-[280px] lg:min-h-0 lg:flex-1",
        className,
      )}
    >
      <iframe
        title={`EnviroWorks Services Inc office map, ${street}, ${city}`}
        src={getMapEmbedUrl()}
        className="min-h-0 w-full flex-1 border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      <p className="shrink-0 border-t border-forest-100 bg-forest-50/50 px-4 py-3 text-center text-sm text-muted-foreground">
        {street}, {city}, {province} {postalCode}
      </p>
    </div>
  );
}
