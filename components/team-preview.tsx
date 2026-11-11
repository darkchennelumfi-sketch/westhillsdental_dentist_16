import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { teamMembers } from "@/lib/team";
import { cn } from "@/lib/utils";

const featured = ["brenda", "emily", "melinda"];

export function TeamPreview() {
  const members = featured
    .map((slug) => teamMembers.find((member) => member.slug === slug))
    .filter((member): member is (typeof teamMembers)[number] => Boolean(member));

  return (
    <div>
      <div className="grid gap-6 sm:grid-cols-3">
        {members.map((member, index) => (
          <Link
            key={member.slug}
            href="/meet-our-team"
            className={cn(
              "group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-4 focus-visible:ring-offset-cream",
              index === 1 ? "sm:translate-y-10" : "",
            )}
          >
            <div className="arch-frame relative aspect-[3/4] w-full bg-sand">
              <Image
                src={member.image}
                alt={member.imageAlt}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/5 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <p className="font-mono text-[0.55rem] tracking-[0.18em] text-lime/80 uppercase">
                  {member.role}
                </p>
                <h3 className="mt-1 font-display text-3xl text-cream">{member.name}</h3>
              </div>
            </div>
            <p className="mt-3 text-sm text-muted transition-colors group-hover:text-forest">
              {member.tagline}
            </p>
          </Link>
        ))}
      </div>
      <div className="mt-20 flex justify-center sm:mt-24">
        <Link
          href="/meet-our-team"
          className="group inline-flex items-center gap-2 text-sm font-medium text-forest"
        >
          Meet the whole team
          <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
