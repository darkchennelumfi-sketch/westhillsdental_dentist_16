"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogClose = DialogPrimitive.Close;
const DialogTitle = DialogPrimitive.Title;
const DialogDescription = DialogPrimitive.Description;

type DialogContentProps = React.ComponentProps<typeof DialogPrimitive.Content> & {
  hideClose?: boolean;
  title: string;
  description?: string;
  titleHidden?: boolean;
};

function DialogContent({
  className,
  children,
  hideClose = false,
  title,
  description,
  titleHidden = true,
  ...props
}: DialogContentProps) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="dialog-overlay" />
      <div className="pointer-events-none fixed inset-0 z-[90] grid place-items-center p-4">
        <DialogPrimitive.Content
          className={cn(
            "dialog-content pointer-events-auto relative max-h-[90dvh] w-full max-w-lg overflow-y-auto rounded-[1.75rem] border border-cream/60 bg-paper p-6 shadow-[0_40px_100px_-30px_rgba(16,39,28,0.65)] outline-none sm:p-8",
            className,
          )}
          {...props}
        >
          {titleHidden ? (
            <VisuallyHidden>
              <DialogPrimitive.Title>{title}</DialogPrimitive.Title>
              {description ? (
                <DialogPrimitive.Description>{description}</DialogPrimitive.Description>
              ) : null}
            </VisuallyHidden>
          ) : (
            <>
              <DialogPrimitive.Title>{title}</DialogPrimitive.Title>
              {description ? (
                <DialogPrimitive.Description>{description}</DialogPrimitive.Description>
              ) : null}
            </>
          )}
          {children}
          {hideClose ? null : (
            <DialogPrimitive.Close className="absolute top-4 right-4 inline-flex size-10 items-center justify-center rounded-full border border-forest/10 bg-cream/80 text-forest transition-colors hover:bg-forest hover:text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper">
              <X className="size-4" />
              <span className="sr-only">Close</span>
            </DialogPrimitive.Close>
          )}
        </DialogPrimitive.Content>
      </div>
    </DialogPrimitive.Portal>
  );
}

export {
  Dialog,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogDescription,
};
