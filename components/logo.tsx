import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  tone?: "dark" | "light";
  href?: string;
  compact?: boolean;
};

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className={cn("size-10", className)}
    >
      <path
        d="M4.5 30.5c0-9.4 3.9-16.5 9.5-16.5s9.5 7.1 9.5 16.5c0-9.4 3.9-16.5 9.5-16.5S42.5 21.1 42.5 30.5"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M9 37.5h30"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.5"
      />
      <circle cx="24" cy="9" r="2.2" fill="currentColor" opacity="0.75" />
    </svg>
  );
}

export function Logo({ className, tone = "dark", href = "/", compact = false }: LogoProps) {
  const content = (
    <>
      <LogoMark
        className={cn(
          "size-10 shrink-0 transition-transform duration-500 group-hover:rotate-6",
          tone === "light" ? "text-lime" : "text-forest",
        )}
      />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[1.35rem] tracking-[-0.03em]",
            tone === "light" ? "text-cream" : "text-ink",
          )}
        >
          West Hills
        </span>
        {compact ? null : (
          <span
            className={cn(
              "mt-1 font-mono text-[0.55rem] font-medium tracking-[0.34em] uppercase",
              tone === "light" ? "text-cream/70" : "text-muted",
            )}
          >
            Dental · Minot
          </span>
        )}
      </span>
    </>
  );

  if (!href) {
    return <span className={cn("group inline-flex items-center gap-3", className)}>{content}</span>;
  }

  return (
    <Link href={href} className={cn("group inline-flex items-center gap-3", className)}>
      {content}
      <span className="sr-only"> — Home</span>
    </Link>
  );
}
