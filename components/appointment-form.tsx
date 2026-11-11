"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowLeft, ArrowRight, Check, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input, Textarea } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioChoice, RadioGroup } from "@/components/ui/radio-group";
import { serviceOptions, services } from "@/lib/services";
import { site } from "@/lib/site";
import {
  appointmentSchema,
  type AppointmentInput,
} from "@/lib/validation";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "whd-appointment-draft-v1";

const steps = [
  { title: "About you", description: "So we know who we are welcoming." },
  { title: "Your visit", description: "Tell us what would work best." },
  { title: "Anything else", description: "A note, a question, or a worry." },
] as const;

const stepFields: (keyof AppointmentInput)[][] = [
  ["name", "email", "phone"],
  ["service", "patientType", "preferredDay", "preferredTime"],
  ["notes", "consent"],
];

const apiResponseSchema = z.object({
  ok: z.boolean(),
  message: z.string().optional(),
});

const defaultValues: AppointmentInput = {
  name: "",
  email: "",
  phone: "",
  service: "preventative-dentistry",
  patientType: "new",
  preferredDay: "Monday",
  preferredTime: "morning",
  notes: "",
  consent: false,
};

export function AppointmentForm() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const topRef = useRef<HTMLDivElement>(null);

  const form = useForm<AppointmentInput>({
    resolver: zodResolver(appointmentSchema),
    defaultValues,
    mode: "onTouched",
  });

  const {
    control,
    register,
    handleSubmit,
    trigger,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = form;

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (!stored) return;
      const parsed: unknown = JSON.parse(stored);
      if (parsed && typeof parsed === "object") {
        const restored = parsed as Partial<AppointmentInput>;
        reset({
          ...defaultValues,
          ...restored,
          consent: false,
          notes: typeof restored.notes === "string" ? restored.notes : "",
        });
      }
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  }, [reset]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/incompatible-library -- Used only to persist a local draft.
    const subscription = watch((values) => {
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(values));
      } catch {
        // Storage may be unavailable; the form still works without it.
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const values = watch();
  const selectedService = services.find((service) => service.slug === values.service);

  async function nextStep() {
    const valid = await trigger(stepFields[step] ?? [], { shouldFocus: true });
    if (!valid) return;
    setStep((current) => Math.min(current + 1, 2));
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function previousStep() {
    setStep((current) => Math.max(current - 1, 0));
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  async function submitRequest(data: AppointmentInput) {
    setServerError(null);
    try {
      const response = await fetch("/api/appointment", {
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
      window.localStorage.removeItem(STORAGE_KEY);
      setSubmitted(true);
      incrementStepForSuccess();
    } catch (error) {
      setServerError(
        error instanceof Error
          ? error.message
          : "We could not send your request. Please call us instead.",
      );
    }
  }

  function incrementStepForSuccess() {
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  if (submitted) {
    return (
      <div className="rounded-[1.75rem] border border-line bg-paper p-8 text-center sm:p-12">
        <span className="mx-auto flex size-16 items-center justify-center rounded-full bg-lime/60 text-forest">
          <CheckCircle2 className="size-8" strokeWidth={1.5} />
        </span>
        <span className="label-mono mt-6 block text-moss">Request received</span>
        <h2 className="mt-3 font-display text-4xl text-ink">Thank you, {values.name}.</h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-muted">
          Our front office will call or email you to confirm a time. If you need us sooner,
          please call{" "}
          <Link href={site.phoneHref} className="font-medium text-forest underline-offset-4 hover:underline">
            {site.phone}
          </Link>
          .
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild>
            <Link href="/">Back to home</Link>
          </Button>
          <Button
            type="button"
            variant="secondary"
            onClick={() => {
              reset({ ...defaultValues });
              setSubmitted(false);
              setStep(0);
              setServerError(null);
            }}
          >
            Send another request
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div ref={topRef} className="scroll-mt-28 rounded-[1.75rem] border border-line bg-paper p-6 sm:p-9">
      <div className="flex items-center gap-2">
        {steps.map((item, index) => (
          <div key={item.title} className="flex flex-1 items-center gap-2">
            <div className="flex items-center gap-2">
              <span
                className={cn(
                  "flex size-8 items-center justify-center rounded-full border font-mono text-[0.65rem] transition-colors",
                  index < step
                    ? "border-forest bg-forest text-cream"
                    : index === step
                      ? "border-forest bg-lime/50 text-forest"
                      : "border-line bg-cream text-muted",
                )}
              >
                {index < step ? <Check className="size-3.5" /> : String(index + 1).padStart(2, "0")}
              </span>
              <span
                className={cn(
                  "hidden text-xs font-medium sm:block",
                  index === step ? "text-forest" : "text-muted",
                )}
              >
                {item.title}
              </span>
            </div>
            {index < steps.length - 1 ? (
              <span className={cn("h-px flex-1", index < step ? "bg-forest/40" : "bg-line")} />
            ) : null}
          </div>
        ))}
      </div>

      <div className="mt-8 border-t border-line pt-7">
        <span className="label-mono text-moss">
          Step {step + 1} of {steps.length}
        </span>
        <h2 className="mt-2 font-display text-3xl text-ink">{steps[step]?.title}</h2>
        <p className="mt-1 text-sm text-muted">{steps[step]?.description}</p>
      </div>

      <form
        className="mt-7"
        noValidate
        onSubmit={(event) => {
          event.preventDefault();
          if (step < 2) {
            void nextStep();
            return;
          }
          void handleSubmit(submitRequest)();
        }}
      >
        {step === 0 ? (
          <div className="grid gap-5">
            <div className="grid gap-2">
              <Label htmlFor="appointment-name">Full name</Label>
              <Input
                id="appointment-name"
                autoComplete="name"
                placeholder="Your name"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "appointment-name-error" : undefined}
                {...register("name")}
              />
              {errors.name ? (
                <p id="appointment-name-error" className="text-xs text-copper">
                  {errors.name.message}
                </p>
              ) : null}
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="appointment-email">Email</Label>
                <Input
                  id="appointment-email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "appointment-email-error" : undefined}
                  {...register("email")}
                />
                {errors.email ? (
                  <p id="appointment-email-error" className="text-xs text-copper">
                    {errors.email.message}
                  </p>
                ) : null}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="appointment-phone">Phone</Label>
                <Input
                  id="appointment-phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="(701) 000-0000"
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? "appointment-phone-error" : undefined}
                  {...register("phone")}
                />
                {errors.phone ? (
                  <p id="appointment-phone-error" className="text-xs text-copper">
                    {errors.phone.message}
                  </p>
                ) : null}
              </div>
            </div>
            <p className="text-xs leading-6 text-muted">
              We only use these details to respond to your request. Please do not include
              medical information in this form.
            </p>
          </div>
        ) : null}

        {step === 1 ? (
          <div className="grid gap-7">
            <fieldset>
              <legend className="text-[0.8rem] font-semibold text-ink/80">
                What brings you in?
              </legend>
              <Controller
                control={control}
                name="service"
                render={({ field }) => (
                  <RadioGroup
                    value={field.value}
                    onValueChange={field.onChange}
                    className="mt-3 grid gap-2 sm:grid-cols-2"
                  >
                    {serviceOptions.map((option) => (
                      <RadioChoice key={option.value} value={option.value}>
                        {option.label}
                      </RadioChoice>
                    ))}
                  </RadioGroup>
                )}
              />
            </fieldset>

            <fieldset>
              <legend className="text-[0.8rem] font-semibold text-ink/80">
                Are you a new or returning patient?
              </legend>
              <Controller
                control={control}
                name="patientType"
                render={({ field }) => (
                  <RadioGroup
                    value={field.value}
                    onValueChange={field.onChange}
                    className="mt-3 grid grid-cols-2 gap-2"
                  >
                    <RadioChoice value="new">I am a new patient</RadioChoice>
                    <RadioChoice value="returning">I am a returning patient</RadioChoice>
                  </RadioGroup>
                )}
              />
            </fieldset>

            <div className="grid gap-6 sm:grid-cols-2">
              <fieldset>
                <legend className="text-[0.8rem] font-semibold text-ink/80">
                  Preferred day
                </legend>
                <Controller
                  control={control}
                  name="preferredDay"
                  render={({ field }) => (
                    <RadioGroup
                      value={field.value}
                      onValueChange={field.onChange}
                      className="mt-3 grid grid-cols-2 gap-2"
                    >
                      {["Monday", "Tuesday", "Wednesday", "Thursday"].map((day) => (
                        <RadioChoice key={day} value={day}>
                          {day}
                        </RadioChoice>
                      ))}
                    </RadioGroup>
                  )}
                />
              </fieldset>
              <fieldset>
                <legend className="text-[0.8rem] font-semibold text-ink/80">
                  Preferred time
                </legend>
                <Controller
                  control={control}
                  name="preferredTime"
                  render={({ field }) => (
                    <RadioGroup
                      value={field.value}
                      onValueChange={field.onChange}
                      className="mt-3 grid gap-2"
                    >
                      <RadioChoice value="morning">Morning · 7:30–11:00</RadioChoice>
                      <RadioChoice value="afternoon">Afternoon · 11:00–3:30</RadioChoice>
                    </RadioGroup>
                  )}
                />
              </fieldset>
            </div>
            <p className="text-xs leading-6 text-muted">
              This is a request, not a confirmed appointment. Our team will follow up with
              availability.
            </p>
          </div>
        ) : null}

        {step === 2 ? (
          <div className="grid gap-5">
            <div className="rounded-2xl border border-line bg-cream/60 p-4 text-sm">
              <p className="label-mono text-[0.55rem] text-moss">Your request</p>
              <p className="mt-2 text-ink">
                {selectedService?.name ?? "Dental visit"} · {values.preferredDay},{" "}
                {values.preferredTime === "morning" ? "morning" : "afternoon"}
              </p>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="appointment-notes">Anything we should know? (optional)</Label>
              <Textarea
                id="appointment-notes"
                placeholder="A question, a concern, or a detail that would help us prepare."
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
                    id="appointment-consent"
                    checked={field.value}
                    onCheckedChange={(checked) => field.onChange(checked === true)}
                    aria-invalid={Boolean(errors.consent)}
                  />
                )}
              />
              <div>
                <Label htmlFor="appointment-consent" className="cursor-pointer leading-6">
                  I understand this is an appointment request, not a confirmed booking.
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
          </div>
        ) : null}

        <div className="mt-8 flex flex-col-reverse justify-between gap-3 border-t border-line pt-6 sm:flex-row sm:items-center">
          {step > 0 ? (
            <Button type="button" variant="ghost" onClick={previousStep}>
              <ArrowLeft className="size-4" />
              Back
            </Button>
          ) : (
            <span className="hidden text-xs text-muted sm:block">
              Prefer to call?{" "}
              <Link href={site.phoneHref} className="font-medium text-forest hover:underline">
                {site.phone}
              </Link>
            </span>
          )}
          {step < 2 ? (
            <Button type="submit">
              Continue
              <ArrowRight className="size-4" />
            </Button>
          ) : (
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  Send request
                  <ArrowRight className="size-4" />
                </>
              )}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
