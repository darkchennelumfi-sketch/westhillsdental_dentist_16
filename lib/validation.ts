import { z } from "zod";

export const appointmentServiceValues = [
  "preventative-dentistry",
  "restorative-dentistry",
  "cosmetic-dentistry",
  "childrens-dentistry",
  "dental-implants",
  "emergency-dentistry",
] as const;

const phonePattern = /^[+()\d\s.-]{7,20}$/;

export const appointmentSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name.")
    .max(80, "Please use 80 characters or fewer."),
  email: z.email("Please enter a valid email address."),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a phone number.")
    .max(20, "Please enter a valid phone number.")
    .regex(phonePattern, "Please enter a valid phone number."),
  service: z.enum(appointmentServiceValues),
  patientType: z.enum(["new", "returning"]),
  preferredDay: z.enum(["Monday", "Tuesday", "Wednesday", "Thursday"]),
  preferredTime: z.enum(["morning", "afternoon"]),
  notes: z
    .string()
    .trim()
    .max(1000, "Please use 1,000 characters or fewer.")
    .optional(),
  consent: z
    .boolean()
    .refine((value) => value, "Please confirm that this is an appointment request."),
});

export type AppointmentInput = z.infer<typeof appointmentSchema>;

export const paymentRequestSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name.")
    .max(80, "Please use 80 characters or fewer."),
  email: z.email("Please enter a valid email address."),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a phone number.")
    .max(20, "Please enter a valid phone number.")
    .regex(phonePattern, "Please enter a valid phone number."),
  amount: z
    .string()
    .trim()
    .max(20, "Please use 20 characters or fewer.")
    .optional(),
  notes: z
    .string()
    .trim()
    .max(500, "Please use 500 characters or fewer.")
    .optional(),
  consent: z
    .boolean()
    .refine((value) => value, "Please confirm that we may contact you about payment."),
});

export type PaymentRequestInput = z.infer<typeof paymentRequestSchema>;
