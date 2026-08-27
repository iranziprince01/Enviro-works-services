"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export type FramedVideoProps = {
  src: string;
  poster?: string;
  shadowSide?: "left" | "right";
  layout?: "portrait" | "landscape";
  /** Stretch to the full height of the parent (e.g. match a sibling column). */
  fillHeight?: boolean;
  ringClassName?: string;
  className?: string;
  maxWidthClass?: string;
};

export function FramedVideo({
  src,
  poster,
  shadowSide = "left",
  layout = "landscape",
  fillHeight = false,
  ringClassName = "ring-forest-200/80",
  className,
  maxWidthClass = "max-w-none",
}: FramedVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  const shadowPosition =
    shadowSide === "left"
      ? "left-[5%] right-[2%] sm:left-[10%] sm:right-[5%] lg:left-[18%] lg:right-0"
      : "right-[5%] left-[2%] sm:right-[10%] sm:left-[5%] lg:right-[18%] lg:left-0";

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reducedMotion) return;

    video.defaultMuted = true;
    video.muted = true;
    video.playsInline = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");

    const tryPlay = () => {
      video.muted = true;
      void video.play().catch(() => {
        requestAnimationFrame(() => {
          video.muted = true;
          void video.play().catch(() => {});
        });
      });
    };

    const resumeIfNeeded = () => {
      if (document.visibilityState === "visible" && video.paused) {
        tryPlay();
      }
    };

    tryPlay();
    video.addEventListener("loadeddata", tryPlay);
    video.addEventListener("canplay", tryPlay);
    document.addEventListener("visibilitychange", resumeIfNeeded);
    window.addEventListener("pageshow", resumeIfNeeded);

    return () => {
      video.removeEventListener("loadeddata", tryPlay);
      video.removeEventListener("canplay", tryPlay);
      document.removeEventListener("visibilitychange", resumeIfNeeded);
      window.removeEventListener("pageshow", resumeIfNeeded);
    };
  }, [reducedMotion, src]);

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
              : layout === "portrait"
                ? "aspect-[3/4]"
                : "aspect-[4/3]",
            ringClassName,
          )}
        >
          {reducedMotion && poster ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={poster}
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-center"
              aria-hidden
            />
          ) : (
            <video
              ref={videoRef}
              className="absolute inset-0 h-full w-full object-cover object-center"
              src={src}
              poster={poster}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              controls={false}
              disablePictureInPicture
              disableRemotePlayback
              aria-hidden
              tabIndex={-1}
            />
          )}
        </div>
      </div>
    </div>
  );
}
