"use client";

import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { FaqAccordion } from "@/components/faq-accordion";
import { faqCategories, type Faq } from "@/lib/faqs";
import { cn } from "@/lib/utils";

export function FaqExplorer({ items }: { items: readonly Faq[] }) {
  const [category, setCategory] = useState<(typeof faqCategories)[number]>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return items.filter((item) => {
      const inCategory = category === "All" || item.category === category;
      const inSearch =
        !normalized ||
        `${item.question} ${item.answer} ${item.category}`.toLowerCase().includes(normalized);
      return inCategory && inSearch;
    });
  }, [category, items, query]);

  return (
    <div>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter questions">
          {faqCategories.map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={category === item}
              onClick={() => setCategory(item)}
              className={cn(
                "rounded-full border px-3.5 py-2 text-xs font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper",
                category === item
                  ? "border-forest bg-forest text-cream"
                  : "border-line bg-paper text-ink/75 hover:border-forest/30 hover:text-forest",
              )}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="relative w-full lg:w-72">
          <Search className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-muted" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search questions…"
            aria-label="Search questions"
            className="h-11 w-full rounded-full border border-line bg-paper pr-10 pl-10 text-sm text-ink outline-none transition-colors placeholder:text-muted focus-visible:border-moss focus-visible:ring-2 focus-visible:ring-moss/15"
          />
          {query ? (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="absolute top-1/2 right-3 inline-flex size-7 -translate-y-1/2 items-center justify-center rounded-full text-muted transition-colors hover:bg-cream hover:text-forest"
            >
              <X className="size-3.5" />
            </button>
          ) : null}
        </div>
      </div>

      <div className="mt-8 rounded-[1.75rem] border border-line/80 bg-paper px-5 py-2 sm:px-7 sm:py-3">
        {filtered.length ? (
          <FaqAccordion items={filtered} />
        ) : (
          <div className="py-14 text-center">
            <p className="font-display text-2xl text-ink">No matching questions</p>
            <p className="mt-2 text-sm text-muted">
              Try another search, or call us at (701) 837-1050.
            </p>
          </div>
        )}
      </div>
      <p className="mt-4 text-xs text-muted">
        Showing {filtered.length} of {items.length} questions
      </p>
    </div>
  );
}
