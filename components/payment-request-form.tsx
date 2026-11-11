"use client";

import { useState } from "react";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input, Textarea } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { site } from "@/lib/site";
import { paymentRequestSchema, type PaymentRequestInput } from "@/lib/validation";

const apiResponseSchema = z.object({
  ok: z.boolean(),
  message: z.string().optional(),
});

const defaultValues: PaymentRequestInput = {
  name: "",
  email: "",
  phone: "",
  amount: "",
  notes: "",
  consent: false,
};

export function PaymentRequestForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<PaymentRequestInput>({
    resolver: zodResolver(paymentRequestSchema),
    defaultValues,
    mode: "onTouched",
  });

  async function submitRequest(data: PaymentRequestInput) {
    setServerError(null);
    try {
      const response = await fetch("/api/payment-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const payload: unknown = await response.json();
      const parsed = apiResponseSchema.safeParse(payload);
      if (!response.ok || !parsed.success || !parsed.data.ok) {
        throw new Error(
          parsed.success && parsed.data.message
            ? parsed.data.message
            : "We could not send your request. Please call us instead.",
        );
      }
      setSubmitted(true);
    } catch (error) {
      setServerError(
        error instanceof Error
          ? error.message
          : "We could not send your request. Please call us instead.",
      );
    }
  }

  if (submitted) {
    return (
      <div className="rounded-[1.75rem] border border-line bg-paper p-8 text-center sm:p-10">
        <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-lime/60 text-forest">
          <CheckCircle2 className="size-7" strokeWidth={1.5} />
        </span>
        <h3 className="mt-5 font-display text-3xl text-ink">Request received.</h3>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-7 text-muted">
          Our front office will contact you with the next step for a secure payment. For
          same-day help, call {site.phone}.
        </p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild>
            <Link href={site.phoneHref}>Call the office</Link>
          </Button>
          <Button
            type="button"
            variant="secondary"
            onClick={() => {
              reset(defaultValues);
              setSubmitted(false);
            }}
          >
            Send another request
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={(event) => {
        event.preventDefault();
        void handleSubmit(submitRequest)();
      }}
      className="rounded-[1.75rem] border border-line bg-paper p-6 sm:p-8"
    >
      <span className="label-mono text-moss">Secure payment request</span>
      <h3 className="mt-2 font-display text-3xl text-ink">Ask for a payment link</h3>
      <p className="mt-2 text-sm leading-6 text-muted">
        Share a few details and our front office will follow up with the next step. Please do
        not include card or bank numbers in this form.
      </p>

      <div className="mt-6 grid gap-5">
        <div className="grid gap-2">
          <Label htmlFor="payment-name">Full name</Label>
          <Input
            id="payment-name"
            autoComplete="name"
            placeholder="Your name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "payment-name-error" : undefined}
            {...register("name")}
          />
          {errors.name ? (
            <p id="payment-name-error" className="text-xs text-copper">
              {errors.name.message}
            </p>
          ) : null}
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="payment-email">Email</Label>
            <Input
              id="payment-email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "payment-email-error" : undefined}
              {...register("email")}
            />
            {errors.email ? (
              <p id="payment-email-error" className="text-xs text-copper">
                {errors.email.message}
              </p>
            ) : null}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="payment-phone">Phone</Label>
            <Input
              id="payment-phone"
              type="tel"
              autoComplete="tel"
              placeholder="(701) 000-0000"
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? "payment-phone-error" : undefined}
              {...register("phone")}
            />
            {errors.phone ? (
              <p id="payment-phone-error" className="text-xs text-copper">
                {errors.phone.message}
              </p>
            ) : null}
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="payment-amount">Amount or account note (optional)</Label>
          <Input
            id="payment-amount"
            placeholder="e.g. $120 or “balance question”"
            aria-invalid={Boolean(errors.amount)}
            {...register("amount")}
          />
          {errors.amount ? <p className="text-xs text-copper">{errors.amount.message}</p> : null}
        </div>
        <div className="grid gap-2">
          <Label htmlFor="payment-notes">Anything else? (optional)</Label>
          <Textarea
            id="payment-notes"
            placeholder="Let us know the best time to reach you."
            aria-invalid={Boolean(errors.notes)}
            {...register("notes")}
          />
          {errors.notes ? <p className="text-xs text-copper">{errors.notes.message}</p> : null}
        </div>
        <div className="flex items-start gap-3 rounded-2xl border border-line bg-cream/50 p-4">
          <Controller
            control={control}
            name="consent"
            render={({ field }) => (
              <Checkbox
                id="payment-consent"
                checked={field.value}
                onCheckedChange={(checked) => field.onChange(checked === true)}
                aria-invalid={Boolean(errors.consent)}
              />
            )}
          />
          <div>
            <Label htmlFor="payment-consent" className="cursor-pointer leading-6">
              I agree to be contacted by West Hills Dental about this payment request.
            </Label>
            {errors.consent ? (
              <p className="mt-1 text-xs text-copper">{errors.consent.message}</p>
            ) : null}
          </div>
        </div>
        {serverError ? (
          <p role="alert" className="rounded-2xl bg-copper/10 px-4 py-3 text-sm text-copper">
            {serverError}
          </p>
        ) : null}
        <Button type="submit" disabled={isSubmitting} className="w-full">
          {isSubmitting ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Sending…
            </>
          ) : (
            <>
              Send request
              <Send className="size-4" />
            </>
          )}
        </Button>
        <p className="text-center text-[0.7rem] leading-5 text-muted">
          This form does not process payments. It only asks our office to contact you.
        </p>
      </div>
    </form>
  );
}
