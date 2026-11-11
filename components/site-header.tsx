"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Clock, Facebook, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/logo";
import { MobileNav } from "@/components/mobile-nav";
import { SearchDialog } from "@/components/search-dialog";
import { Button } from "@/components/ui/button";
import { navItems, site } from "@/lib/site";
import { services } from "@/lib/services";
import { cn } from "@/lib/utils";

const desktopNav = navItems.filter((item) => item.label !== "Home");

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div
        className={cn(
          "overflow-hidden bg-forest text-cream transition-all duration-500",
          scrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100",
        )}
      >
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-5 text-[0.68rem] sm:px-8">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-cream/70">
              <MapPin className="size-3 text-lime" />
              Minot, North Dakota
            </span>
            <span className="hidden text-cream/75 sm:inline">/</span>
            <span className="hidden text-cream/70 sm:inline">New patients welcome</span>
          </div>
          <div className="flex items-center gap-5">
            <span className="hidden items-center gap-1.5 text-cream/75 sm:flex">
              <Clock className="size-3 text-lime" />
              {site.hoursShort}
            </span>
            <Link
              href={site.phoneHref}
              className="flex items-center gap-1.5 text-cream/80 transition-colors hover:text-lime"
            >
              <Phone className="size-3" />
              {site.phone}
            </Link>
            <Link
              href={site.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="West Hills Dental on Facebook"
              className="hidden text-cream/75 transition-colors hover:text-lime sm:block"
            >
              <Facebook className="size-3.5" />
            </Link>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "border-b border-forest/10 bg-cream/85 backdrop-blur-xl transition-all duration-300",
          scrolled
            ? "bg-cream/95 shadow-[0_10px_40px_-24px_rgba(16,39,28,0.45)]"
            : "bg-cream/75",
        )}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center gap-5 px-5 sm:px-8">
          <Logo className="shrink-0" />

          <nav
            aria-label="Primary navigation"
            className="ml-auto hidden items-center gap-0.5 lg:flex"
          >
            {desktopNav.map((item) => {
              const active = isActive(pathname, item.href);
              if ("hasMenu" in item && item.hasMenu) {
                return (
                  <div key={item.href} className="group relative">
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "relative inline-flex items-center gap-1 rounded-full px-2.5 py-2 text-[0.76rem] font-medium whitespace-nowrap transition-colors xl:px-3 xl:text-[0.8rem]",
                        active
                          ? "text-forest"
                          : "text-ink/75 hover:bg-forest/5 hover:text-forest",
                      )}
                    >
                      Services
                      <ChevronDown className="size-3.5 transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180" />
                      {active ? (
                        <span className="absolute inset-x-3 -bottom-0.5 h-px bg-forest" />
                      ) : null}
                    </Link>
                    <div className="invisible absolute top-full left-1/2 z-50 w-[27rem] -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                      <div className="overflow-hidden rounded-[1.4rem] border border-forest/10 bg-paper/95 p-2 shadow-[0_30px_70px_-30px_rgba(16,39,28,0.45)] backdrop-blur-xl">
                        <div className="grid gap-0.5">
                          {services.map((service, index) => (
                            <Link
                              key={service.slug}
                              href={`/services/${service.slug}`}
                              className="group/item flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-lime/35 focus-visible:bg-lime/35 focus-visible:outline-none"
                            >
                              <span className="font-mono text-[0.58rem] text-moss">
                                {String(index + 1).padStart(2, "0")}
                              </span>
                              <span>
                                <span className="block text-sm font-medium text-ink">
                                  {service.name}
                                </span>
                                <span className="block text-[0.7rem] text-muted">
                                  {service.tagline}
                                </span>
                              </span>
                            </Link>
                          ))}
                        </div>
                        <Link
                          href="/services"
                          className="mt-1 flex items-center justify-between rounded-xl border-t border-line/70 px-3 py-2.5 text-xs font-medium text-forest transition-colors hover:bg-cream"
                        >
                          Explore all services
                          <span aria-hidden="true">→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative rounded-full px-2.5 py-2 text-[0.76rem] font-medium whitespace-nowrap transition-colors xl:px-3 xl:text-[0.8rem]",
                    active
                      ? "text-forest"
                      : "text-ink/75 hover:bg-forest/5 hover:text-forest",
                  )}
                >
                  {item.label}
                  {active ? (
                    <span className="absolute inset-x-3 -bottom-0.5 h-px bg-forest" />
                  ) : null}
                </Link>
              );
            })}
          </nav>

          <div className="ml-auto flex items-center gap-2 lg:ml-3">
            <SearchDialog />
            <Link
              href={site.phoneHref}
              aria-label={`Call West Hills Dental at ${site.phone}`}
              className="hidden size-10 items-center justify-center rounded-full border border-forest/15 bg-paper/60 text-forest transition-colors hover:border-forest/30 hover:bg-paper xl:inline-flex"
            >
              <Phone className="size-4" />
            </Link>
            <Button asChild size="sm" className="hidden sm:inline-flex">
              <Link href="/contact-us">Book a visit</Link>
            </Button>
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
