"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, Search } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { searchIndex } from "@/lib/pages";
import { cn } from "@/lib/utils";

export function SearchDialog({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((current) => !current);
        setQuery("");
        setActiveIndex(0);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    const pool = normalized
      ? searchIndex.filter((entry) =>
          [entry.title, entry.description, entry.group, ...entry.keywords]
            .join(" ")
            .toLowerCase()
            .includes(normalized),
        )
      : searchIndex;

    return pool.slice(0, 9);
  }, [query]);

  function handleOpenChange(nextOpen: boolean) {
    setOpen(nextOpen);
    if (!nextOpen) {
      setQuery("");
      setActiveIndex(0);
    }
  }

  function openResult(index: number) {
    const entry = results[index];
    if (!entry) return;
    handleOpenChange(false);
    router.push(entry.href);
  }

  function onInputKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((current) => (results.length ? (current + 1) % results.length : 0));
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((current) =>
        results.length ? (current - 1 + results.length) % results.length : 0,
      );
    }
    if (event.key === "Enter") {
      event.preventDefault();
      openResult(activeIndex);
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <button
          type="button"
          aria-label="Search the website"
          className={cn(
            "group inline-flex h-10 items-center gap-2 rounded-full border border-forest/15 bg-paper/60 px-3 text-xs font-medium text-forest transition-colors hover:border-forest/30 hover:bg-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper",
            className,
          )}
        >
          <Search className="size-4" />
          <span className="hidden xl:inline">Search</span>
          <span
            aria-hidden="true"
            className="kbd-hint hidden rounded border border-forest/15 bg-cream px-1.5 py-0.5 font-mono text-[0.55rem] tracking-widest text-muted xl:inline"
          />
        </button>
      </DialogTrigger>
      <DialogContent
        title="Search West Hills Dental"
        description="Find a page, service, or answer."
        hideClose
        className="max-w-2xl overflow-hidden p-0"
      >
        <div className="flex items-center gap-3 border-b border-line bg-cream/60 px-5 py-4">
          <Search className="size-5 shrink-0 text-moss" />
          <input
            autoFocus
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setActiveIndex(0);
            }}
            onKeyDown={onInputKeyDown}
            placeholder="Search services, visits, payments…"
            aria-label="Search"
            aria-controls="search-results"
            aria-activedescendant={
              results[activeIndex] ? `search-result-${activeIndex}` : undefined
            }
            className="h-9 w-full bg-transparent text-base text-ink outline-none placeholder:text-muted"
          />
          <kbd className="hidden rounded border border-forest/15 bg-paper px-2 py-1 font-mono text-[0.58rem] tracking-widest text-muted sm:inline">
            ESC
          </kbd>
        </div>
        <div className="max-h-[58dvh] overflow-y-auto p-2">
          {results.length ? (
            <div id="search-results" role="listbox" aria-label="Search results">
              {results.map((entry, index) => (
                <Link
                  key={entry.href}
                  id={`search-result-${index}`}
                  href={entry.href}
                  role="option"
                  aria-selected={index === activeIndex}
                  onClick={() => handleOpenChange(false)}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={cn(
                    "flex items-center gap-4 rounded-2xl px-4 py-3.5 transition-colors",
                    index === activeIndex ? "bg-lime/45" : "hover:bg-cream",
                  )}
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-forest/12 bg-paper font-mono text-[0.6rem] text-moss">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-baseline gap-2">
                      <span className="truncate font-display text-lg text-ink">
                        {entry.title}
                      </span>
                      <span className="label-mono shrink-0 text-[0.52rem] text-muted">
                        {entry.group}
                      </span>
                    </span>
                    <span className="mt-0.5 block truncate text-xs text-muted">
                      {entry.description}
                    </span>
                  </span>
                  <ArrowRight className="size-4 shrink-0 text-moss" />
                </Link>
              ))}
            </div>
          ) : (
            <div className="px-5 py-12 text-center">
              <p className="font-display text-xl text-ink">No results for “{query}”</p>
              <p className="mt-2 text-sm text-muted">
                Try a service name, or call us at (701) 837-1050.
              </p>
            </div>
          )}
        </div>
        <div className="flex items-center justify-between border-t border-line bg-cream/50 px-5 py-3 text-[0.65rem] text-muted">
          <span>Use ↑ ↓ to move, Enter to open</span>
          <span className="font-mono tracking-widest uppercase">West Hills Dental</span>
        </div>
      </DialogContent>
    </Dialog>
  );
}
