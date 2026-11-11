import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
  children?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  className,
  children,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6",
        align === "center" ? "items-center text-center" : "items-start",
        className,
      )}
    >
      <span
        className={cn(
          "label-mono flex items-center gap-3",
          tone === "light" ? "text-lime/80" : "text-moss",
        )}
      >
        <span
          className={cn(
            "h-px w-8",
            tone === "light" ? "bg-lime/40" : "bg-moss/40",
          )}
        />
        {eyebrow}
      </span>
      <h2
        className={cn(
          "max-w-3xl text-balance font-display text-[clamp(2.2rem,4.8vw,4.25rem)] leading-[1.02]",
          tone === "light" ? "text-cream" : "text-ink",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "max-w-2xl text-pretty text-base leading-7",
            tone === "light" ? "text-cream/75" : "text-muted",
          )}
        >
          {description}
        </p>
      ) : null}
      {children}
    </div>
  );
}
