export const site = {
  name: "West Hills Dental",
  shortName: "West Hills",
  doctor: "Dr. Stephanie Ness",
  tagline: "Dentistry that feels like care.",
  description:
    "Full-service family dentistry in Minot, North Dakota. West Hills Dental and Dr. Stephanie Ness offer thoughtful, modern care for every smile.",
  phone: "(701) 837-1050",
  phoneHref: "tel:+17018371050",
  fax: "701-837-6350",
  email: "westhillsdental@srt.com",
  emailHref: "mailto:westhillsdental@srt.com",
  address: {
    street: "2615 Elk Drive",
    suite: "Suite 2",
    city: "Minot",
    state: "ND",
    zip: "58701",
    full: "2615 Elk Drive, Suite 2, Minot, ND 58701",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=2615+Elk+Drive+Suite+2+Minot+ND+58701",
  hours: [
    { days: "Monday – Thursday", time: "7:30 AM – 3:30 PM" },
    { days: "Friday – Sunday", time: "Closed" },
  ],
  hoursShort: "Mon–Thu · 7:30 AM – 3:30 PM",
  facebook: "https://www.facebook.com/westhillsdentalnd",
  copyrightStart: 2020,
} as const;

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Meet our Doctor", href: "/meet-our-doctor" },
  { label: "Meet our Team", href: "/meet-our-team" },
  { label: "Office Tour", href: "/office-tour" },
  { label: "Services", href: "/services", hasMenu: true },
  { label: "New Patients", href: "/new-patients" },
  { label: "FAQs", href: "/faqs" },
  { label: "Make a Payment", href: "/make-payment" },
  { label: "Contact Us", href: "/contact-us" },
] as const;

export const footerLinks = [
  {
    title: "Explore",
    links: [
      { label: "Home", href: "/" },
      { label: "Meet our Doctor", href: "/meet-our-doctor" },
      { label: "Meet our Team", href: "/meet-our-team" },
      { label: "Office Tour", href: "/office-tour" },
      { label: "New Patients", href: "/new-patients" },
    ],
  },
  {
    title: "Care",
    links: [
      { label: "Services", href: "/services" },
      { label: "Insurance & Financing", href: "/insurance-and-financing" },
      { label: "FAQs", href: "/faqs" },
      { label: "Make a Payment", href: "/make-payment" },
      { label: "Contact Us", href: "/contact-us" },
    ],
  },
] as const;

export const stats = [
  { value: 7, suffix: "", label: "Friendly team members" },
  { value: 5, suffix: "", label: "Core areas of care" },
  { value: 1, suffix: "", label: "Convenient Minot location" },
  { value: 4, suffix: " days", label: "Open every week" },
] as const;
