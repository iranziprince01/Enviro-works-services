import NextImage from "next/image";
import { cn } from "@/lib/utils";

export type FramedImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  shadowSide?: "left" | "right";
  layout?: "portrait" | "landscape";
  /** Stretch to the full height of the parent (e.g. match a sibling column). */
  fillHeight?: boolean;
  ringClassName?: string;
  className?: string;
  imageClassName?: string;
  maxWidthClass?: string;
};

const layoutAspect = {
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
} as const;

export function FramedImage({
  src,
  alt,
  priority,
  sizes = "(max-width: 1024px) 92vw, 400px",
  shadowSide = "left",
  layout = "portrait",
  fillHeight = false,
  ringClassName = "ring-forest-200/80",
  className,
  imageClassName,
  maxWidthClass = "max-w-[min(100%,380px)] sm:max-w-[340px]",
}: FramedImageProps) {
  const shadowPosition =
    shadowSide === "left"
      ? "left-[5%] right-[2%] sm:left-[10%] sm:right-[5%] lg:left-[18%] lg:right-0"
      : "right-[5%] left-[2%] sm:right-[10%] sm:left-[5%] lg:right-[18%] lg:left-0";

  return (
    <div
      className={cn(
        "relative mx-auto w-full min-w-0 lg:mx-0 lg:max-w-none",
        fillHeight && "flex h-full min-h-[280px] flex-col",
        maxWidthClass,
        className,
      )}
    >
      <div className={cn("relative w-full", fillHeight && "min-h-0 flex-1")}>
        <div
          className={cn(
            "pointer-events-none absolute top-[5%] z-0 h-[90%] rounded-[1.25rem] bg-horizon-400 sm:rounded-[1.75rem] lg:rounded-[2rem]",
            shadowPosition,
          )}
          aria-hidden
        />
        <div
          className={cn(
            "relative z-10 overflow-hidden rounded-[1.25rem] ring-2 sm:rounded-[1.75rem] lg:rounded-[2rem]",
            fillHeight
              ? "h-full min-h-[280px]"
              : layoutAspect[layout],
            ringClassName,
          )}
        >
          <NextImage
            src={src}
            alt={alt}
            fill
            priority={priority}
            className={cn("object-cover object-center", imageClassName)}
            sizes={sizes}
          />
        </div>
      </div>
    </div>
  );
}
