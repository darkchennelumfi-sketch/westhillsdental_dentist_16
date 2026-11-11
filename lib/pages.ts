import { services } from "@/lib/services";

export type SearchEntry = {
  title: string;
  description: string;
  href: string;
  group: "Pages" | "Services" | "Support";
  keywords: string[];
};

const staticPages: SearchEntry[] = [
  {
    title: "Home",
    description: "Full-service family dentistry in Minot, North Dakota.",
    href: "/",
    group: "Pages",
    keywords: ["west hills", "dentist", "minot", "home"],
  },
  {
    title: "Meet our Doctor",
    description: "Get to know Dr. Stephanie Ness and the West Hills approach.",
    href: "/meet-our-doctor",
    group: "Pages",
    keywords: ["doctor", "stephanie ness", "dentist"],
  },
  {
    title: "Meet our Team",
    description: "Seven friendly faces, one caring team.",
    href: "/meet-our-team",
    group: "Pages",
    keywords: ["team", "hygienist", "assistant", "front office"],
  },
  {
    title: "Office Tour",
    description: "What to expect when you visit our Minot office.",
    href: "/office-tour",
    group: "Pages",
    keywords: ["office", "tour", "location", "visit"],
  },
  {
    title: "Services",
    description: "Preventative, restorative, cosmetic, children's, implant, and emergency care.",
    href: "/services",
    group: "Services",
    keywords: ["services", "dentistry", "care"],
  },
  {
    title: "New Patients",
    description: "A simple, welcoming start at West Hills Dental.",
    href: "/new-patients",
    group: "Pages",
    keywords: ["new patient", "first visit", "forms"],
  },
  {
    title: "Insurance & Financing",
    description: "Help understanding benefits, claims, and payment options.",
    href: "/insurance-and-financing",
    group: "Support",
    keywords: ["insurance", "financing", "benefits", "claims"],
  },
  {
    title: "FAQs",
    description: "Answers to common questions about visits, insurance, and comfort.",
    href: "/faqs",
    group: "Support",
    keywords: ["faq", "questions", "answers"],
  },
  {
    title: "Make a Payment",
    description: "Pay by phone or request a secure payment link.",
    href: "/make-payment",
    group: "Support",
    keywords: ["payment", "billing", "pay"],
  },
  {
    title: "Contact Us",
    description: "Call, email, or request an appointment online.",
    href: "/contact-us",
    group: "Pages",
    keywords: ["contact", "appointment", "phone", "address"],
  },
  {
    title: "Privacy Policy",
    description: "How West Hills Dental handles website information.",
    href: "/privacy-policy",
    group: "Support",
    keywords: ["privacy", "policy", "data"],
  },
];

const servicePages: SearchEntry[] = services.map((service) => ({
  title: service.name,
  description: service.summary,
  href: `/services/${service.slug}`,
  group: "Services",
  keywords: [service.name, service.shortName, service.tagline, ...service.goodFor],
}));

export const searchIndex: SearchEntry[] = [...staticPages, ...servicePages];
