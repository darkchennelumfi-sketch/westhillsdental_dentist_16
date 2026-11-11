import * as React from "react";
import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-13 w-full rounded-2xl border border-line bg-paper px-4 py-3 text-base text-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] transition-colors duration-200 outline-none placeholder:text-muted focus-visible:border-moss focus-visible:ring-2 focus-visible:ring-moss/20 aria-[invalid=true]:border-copper aria-[invalid=true]:ring-copper/15 md:text-sm",
        className,
      )}
      {...props}
    />
  );
}

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-32 w-full resize-y rounded-2xl border border-line bg-paper px-4 py-3 text-base text-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] transition-colors duration-200 outline-none placeholder:text-muted focus-visible:border-moss focus-visible:ring-2 focus-visible:ring-moss/20 aria-[invalid=true]:border-copper aria-[invalid=true]:ring-copper/15 md:text-sm",
        className,
      )}
      {...props}
    />
  );
}

export { Input, Textarea };
