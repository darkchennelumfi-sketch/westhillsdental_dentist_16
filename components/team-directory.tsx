"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, ArrowUpRight, Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import type { TeamMember } from "@/lib/team";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";
import { cn } from "@/lib/utils";

const filters = ["All", "Front Office", "Hygienists", "Assistants"] as const;

export function TeamDirectory({ members }: { members: readonly TeamMember[] }) {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [selected, setSelected] = useState<TeamMember | null>(null);
  const reduced = usePrefersReducedMotion();

  const filtered = useMemo(
    () => (filter === "All" ? members : members.filter((member) => member.group === filter)),
    [filter, members],
  );

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter team">
        {filters.map((item) => {
          const count =
            item === "All"
              ? members.length
              : members.filter((member) => member.group === item).length;
          return (
            <button
              key={item}
              type="button"
              aria-pressed={filter === item}
              onClick={() => setFilter(item)}
              className={cn(
                "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper",
                filter === item
                  ? "border-forest bg-forest text-cream"
                  : "border-line bg-paper text-ink/75 hover:border-forest/30 hover:text-forest",
              )}
            >
              {item}
              <span
                className={cn(
                  "font-mono text-[0.55rem]",
                  filter === item ? "text-cream/70" : "text-muted",
                )}
              >
                {String(count).padStart(2, "0")}
              </span>
            </button>
          );
        })}
      </div>

      <motion.div layout className="mt-8 grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((member) => (
            <motion.article
              key={member.slug}
              layout
              initial={reduced ? false : { opacity: 0, y: 24 }}
              animate={reduced ? undefined : { opacity: 1, y: 0 }}
              exit={reduced ? undefined : { opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <button
                type="button"
                onClick={() => setSelected(member)}
                aria-haspopup="dialog"
                className="group block w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-4 focus-visible:ring-offset-cream"
              >
                <div className="arch-frame relative aspect-[4/5] w-full bg-sand">
                  <Image
                    src={member.image}
                    alt={member.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
                    <div>
                      <p className="font-mono text-[0.55rem] tracking-[0.18em] text-lime/80 uppercase">
                        {member.role}
                      </p>
                      <h3 className="mt-1 font-display text-3xl text-cream">{member.name}</h3>
                    </div>
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-cream/30 bg-cream/10 text-cream backdrop-blur-md transition-all duration-300 group-hover:bg-lime group-hover:text-ink">
                      <Plus className="size-4 transition-transform duration-300 group-hover:rotate-45" />
                    </span>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted transition-colors group-hover:text-forest">
                  {member.tagline}
                </p>
                <span className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-forest">
                  Read {member.name}&apos;s story
                  <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </button>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      <Dialog open={Boolean(selected)} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent
          title={selected ? `${selected.name}, ${selected.role}` : "Team member"}
          description={selected?.tagline}
          className="max-w-3xl"
        >
          {selected ? (
            <div className="grid gap-6 sm:grid-cols-[13rem_1fr] sm:gap-8">
              <div>
                <div className="arch-frame relative aspect-[4/5] w-full bg-sand">
                  <Image
                    src={selected.image}
                    alt={selected.imageAlt}
                    fill
                    sizes="(max-width: 640px) 80vw, 220px"
                    className="object-cover"
                  />
                </div>
                <Badge className="mt-4" variant="default">
                  {selected.role}
                </Badge>
              </div>
              <div className="sm:pt-2">
                <span className="label-mono text-moss">Meet the team</span>
                <h2 className="mt-2 font-display text-4xl text-ink">{selected.name}</h2>
                <p className="mt-2 font-display text-lg text-copper italic">
                  {selected.tagline}
                </p>
                <div className="mt-5 space-y-3 text-sm leading-7 text-muted">
                  {selected.bio.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <ul className="mt-6 grid gap-2 border-t border-line pt-5 text-xs text-ink/80">
                  {selected.facts.map((fact) => (
                    <li key={fact} className="flex items-start gap-2">
                      <span className="mt-1.5 size-1 shrink-0 rounded-full bg-copper" />
                      {fact}
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-6">
                  <Link href="/contact-us">
                    Request a visit
                    <ArrowUpRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </div>
  );
}
