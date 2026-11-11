import { Sparkle } from "lucide-react";
import { services } from "@/lib/services";

export function ServiceMarquee() {
  const items = services.map((service) => service.shortName);
  const row = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-forest/10 bg-lime/35 py-4">
      <div className="flex w-max animate-marquee items-center gap-8 whitespace-nowrap motion-reduce:animate-none">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            className="flex items-center gap-8"
            aria-hidden={copy === 1 ? "true" : undefined}
          >
            {row.map((item, index) => (
              <div key={`${copy}-${item}-${index}`} className="flex items-center gap-8">
                <span className="font-display text-xl text-forest sm:text-2xl">{item}</span>
                <Sparkle className="size-3.5 text-copper" strokeWidth={1.5} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
