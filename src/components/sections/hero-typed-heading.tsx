"use client";

import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

type HeadingSegment = { text: string; className: string };
type HeadingLine = { segments: readonly HeadingSegment[] };

/** Each entry is one visual line; segments on the same line type in sequence. */
const HEADING_LINES: readonly HeadingLine[] = [
  { segments: [{ text: "Professional", className: "text-white" }] },
  {
    segments: [
      { text: "Property", className: "text-white" },
      { text: "Services", className: "text-horizon-300" },
    ],
  },
  { segments: [{ text: "Built Around", className: "text-white" }] },
  { segments: [{ text: "Reliability", className: "text-horizon-300" }] },
] as const;

const START_DELAY_MS = 400;
const CHAR_DELAY_MS = 52;
const SPACE_DELAY_MS = 90;
const LINE_PAUSE_MS = 320;
const CURSOR_BLINK_MS = 530;

type SegmentProgress = {
  visible: string;
  complete: boolean;
};

type LineProgress = {
  segments: SegmentProgress[];
  complete: boolean;
};

function emptyLines(): LineProgress[] {
  return HEADING_LINES.map((line) => ({
    segments: line.segments.map(() => ({ visible: "", complete: false })),
    complete: false,
  }));
}

function fullLines(): LineProgress[] {
  return HEADING_LINES.map((line) => ({
    segments: line.segments.map((segment) => ({
      visible: segment.text,
      complete: true,
    })),
    complete: true,
  }));
}

function fullTextFromLines() {
  return HEADING_LINES.map((line) =>
    line.segments.map((segment) => segment.text).join(" "),
  ).join(" ");
}

export function HeroTypedHeading() {
  const reducedMotion = usePrefersReducedMotion();
  const headingRef = useRef<HTMLHeadingElement>(null);
  const hasLeftViewRef = useRef(false);
  const hasStartedRef = useRef(false);
  const [playKey, setPlayKey] = useState(0);
  const [lines, setLines] = useState<LineProgress[]>(emptyLines);
  const [activeLine, setActiveLine] = useState(0);
  const [activeSegment, setActiveSegment] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const node = headingRef.current;
    if (!node || reducedMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;

        if (!entry.isIntersecting) {
          hasLeftViewRef.current = true;
          return;
        }

        if (!hasStartedRef.current || hasLeftViewRef.current) {
          hasStartedRef.current = true;
          hasLeftViewRef.current = false;
          setPlayKey((key) => key + 1);
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [reducedMotion]);

  useEffect(() => {
    if (reducedMotion) {
      setLines(fullLines());
      setDone(true);
      setShowCursor(false);
      return;
    }

    if (playKey === 0) return;

    let cancelled = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    setLines(emptyLines());
    setActiveLine(0);
    setActiveSegment(0);
    setDone(false);
    setShowCursor(true);

    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        timeoutId = setTimeout(resolve, ms);
      });

    const run = async () => {
      await wait(START_DELAY_MS);
      if (cancelled) return;

      for (let lineIndex = 0; lineIndex < HEADING_LINES.length; lineIndex += 1) {
        if (cancelled) return;
        setActiveLine(lineIndex);

        const line = HEADING_LINES[lineIndex];

        for (
          let segmentIndex = 0;
          segmentIndex < line.segments.length;
          segmentIndex += 1
        ) {
          if (cancelled) return;
          setActiveSegment(segmentIndex);

          const fullText = line.segments[segmentIndex].text;

          for (let charIndex = 1; charIndex <= fullText.length; charIndex += 1) {
            if (cancelled) return;
            const next = fullText.slice(0, charIndex);
            setLines((prev) =>
              prev.map((entry, i) =>
                i === lineIndex
                  ? {
                      ...entry,
                      segments: entry.segments.map((segment, j) =>
                        j === segmentIndex
                          ? { visible: next, complete: false }
                          : segment,
                      ),
                    }
                  : entry,
              ),
            );
            const typedChar = fullText[charIndex - 1];
            await wait(typedChar === " " ? SPACE_DELAY_MS : CHAR_DELAY_MS);
          }

          setLines((prev) =>
            prev.map((entry, i) =>
              i === lineIndex
                ? {
                    ...entry,
                    segments: entry.segments.map((segment, j) =>
                      j === segmentIndex ? { ...segment, complete: true } : segment,
                    ),
                  }
                : entry,
            ),
          );

          if (segmentIndex < line.segments.length - 1) {
            await wait(SPACE_DELAY_MS);
          }
        }

        setLines((prev) =>
          prev.map((entry, i) =>
            i === lineIndex ? { ...entry, complete: true } : entry,
          ),
        );

        if (lineIndex < HEADING_LINES.length - 1) {
          await wait(LINE_PAUSE_MS);
        }
      }

      if (!cancelled) {
        setDone(true);
      }
    };

    void run();

    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
    };
  }, [playKey, reducedMotion]);

  useEffect(() => {
    if (reducedMotion || done) {
      setShowCursor(false);
      return;
    }

    const id = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, CURSOR_BLINK_MS);

    return () => clearInterval(id);
  }, [reducedMotion, done]);

  const fullText = fullTextFromLines();

  return (
    <h1
      ref={headingRef}
      className="font-heading text-[1.9rem] font-black leading-[1.05] tracking-tight text-white min-[375px]:text-4xl sm:text-5xl sm:leading-[0.98] md:text-6xl lg:text-7xl xl:text-[5rem] xl:leading-[0.95]"
      aria-label={fullText}
    >
      <span aria-hidden className="flex flex-col">
        {HEADING_LINES.map((line, lineIndex) => {
          const progress = lines[lineIndex];
          const isActiveLine = !done && activeLine === lineIndex;

          return (
            <span
              key={`line-${lineIndex}`}
              className="block min-h-[1.05em] text-balance"
            >
              {line.segments.map((segment, segmentIndex) => {
                const segmentProgress = progress.segments[segmentIndex];
                const isActiveSegment =
                  isActiveLine && activeSegment === segmentIndex;
                const showLeadingSpace =
                  segmentIndex > 0 &&
                  (segmentProgress.visible.length > 0 ||
                    progress.segments[segmentIndex - 1]?.visible.length > 0);

                return (
                  <span key={`${segment.text}-${segmentIndex}`}>
                    {showLeadingSpace ? " " : null}
                    <span className={`inline-block min-w-[1ch] ${segment.className}`}>
                      {segmentProgress.visible || "\u00A0"}
                    </span>
                    {isActiveSegment ? (
                      <span
                        className={`ml-0.5 inline-block w-[0.08em] translate-y-[0.06em] bg-horizon-300 align-baseline ${
                          showCursor ? "opacity-100" : "opacity-0"
                        }`}
                        style={{ height: "0.85em" }}
                      />
                    ) : null}
                  </span>
                );
              })}
            </span>
          );
        })}
      </span>
    </h1>
  );
}
