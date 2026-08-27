import { landAcknowledgement, landAcknowledgementLines } from "@/data/company";
import { cn } from "@/lib/utils";

type LandAcknowledgementProps = {
  variant?: "footer" | "section";
  className?: string;
};

export function LandAcknowledgement({
  variant = "section",
  className,
}: LandAcknowledgementProps) {
  if (variant === "footer") {
    return (
      <div className={cn("w-full", className)}>
        <p className="font-heading text-[0.6875rem] font-bold uppercase tracking-wider text-horizon-400 sm:text-xs">
          Land Acknowledgement
        </p>
        <p className="mt-2 text-[0.6875rem] leading-snug italic text-white/60 sm:text-xs">
          {landAcknowledgementLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>
      </div>
    );
  }

  return (
    <p
      className={cn(
        "max-w-2xl min-w-0 border-l-2 border-forest-300 pl-4 text-sm leading-relaxed text-pretty text-muted-foreground",
        className,
      )}
    >
      {landAcknowledgement}
    </p>
  );
}
