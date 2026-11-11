import {
  Anchor,
  Baby,
  ShieldCheck,
  Siren,
  Sparkles,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { Service } from "@/lib/services";
import { cn } from "@/lib/utils";

const icons: Record<Service["icon"], LucideIcon> = {
  shield: ShieldCheck,
  restore: Wrench,
  sparkles: Sparkles,
  child: Baby,
  implant: Anchor,
  emergency: Siren,
};

export function ServiceIcon({
  icon,
  className,
}: {
  icon: Service["icon"];
  className?: string;
}) {
  const Icon = icons[icon];
  return <Icon className={cn("size-6", className)} strokeWidth={1.5} />;
}
