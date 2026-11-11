import { z } from "zod";

const faqSchema = z.object({
  category: z.enum([
    "Appointments",
    "New patients",
    "Insurance & payment",
    "Comfort & care",
    "Location",
  ]),
  question: z.string(),
  answer: z.string(),
  featured: z.boolean().optional(),
});

export const faqs = z.array(faqSchema).parse([
  {
    category: "Appointments",
    question: "How do I schedule a visit?",
    answer:
      "Call our front office at (701) 837-1050 or send an appointment request through our contact page. We will follow up to confirm a time that works for you.",
    featured: true,
  },
  {
    category: "Appointments",
    question: "What are your office hours?",
    answer:
      "West Hills Dental is open Monday through Thursday, 7:30 AM to 3:30 PM. We are closed Friday through Sunday.",
    featured: true,
  },
  {
    category: "Appointments",
    question: "What if I need to reschedule?",
    answer:
      "Call us as soon as you know. We will help you find another time and offer your original slot to another patient who may be waiting.",
  },
  {
    category: "Appointments",
    question: "Do you see patients with dental emergencies?",
    answer:
      "Yes. Call us first at (701) 837-1050. We will ask a few questions, give you guidance, and do our best to see you promptly.",
  },
  {
    category: "New patients",
    question: "Are you accepting new patients?",
    answer:
      "Yes. New patients are welcome at West Hills Dental. Call our front office or send a request through the contact page and we will help you get started.",
    featured: true,
  },
  {
    category: "New patients",
    question: "What should I bring to my first visit?",
    answer:
      "Please bring a photo ID, your dental insurance card, a list of medications and allergies, and any recent dental records or X-rays if you have them.",
  },
  {
    category: "New patients",
    question: "What happens at a first visit?",
    answer:
      "We review your health history, listen to your concerns, take any imaging that is needed, and complete an exam. Then we talk through what we found and a plan that makes sense for you. A cleaning may happen at the same visit or be scheduled separately depending on your needs.",
  },
  {
    category: "New patients",
    question: "Do you see children?",
    answer:
      "Yes. Our children's dentistry visits are gentle, friendly, and paced for kids. We welcome parents into the conversation and help children feel at home.",
  },
  {
    category: "Insurance & payment",
    question: "Do you accept dental insurance?",
    answer:
      "We work with dental insurance benefits and help our patients understand their claims. Coverage varies by plan, so call us with your carrier and plan details and we will review your benefits with you.",
    featured: true,
  },
  {
    category: "Insurance & payment",
    question: "How do I make a payment?",
    answer:
      "Call our front office at (701) 837-1050 to pay by phone. You can also request a secure payment link through our Make a Payment page.",
  },
  {
    category: "Insurance & payment",
    question: "Do you offer payment plans?",
    answer:
      "Ask our front office about flexible payment options for larger treatment plans. We will explain what is available and what to expect before treatment begins.",
  },
  {
    category: "Comfort & care",
    question: "I'm nervous about dental visits. Can you help?",
    answer:
      "Tell us when you call. We will explain each step, agree on a signal to pause, and go at a pace you are comfortable with. You are never alone in the process.",
    featured: true,
  },
  {
    category: "Comfort & care",
    question: "Can I bring headphones or something to hold?",
    answer:
      "Absolutely. Many patients bring headphones, a playlist, or a small comfort item. If there is something that helps you relax, let us know.",
  },
  {
    category: "Comfort & care",
    question: "How do you keep treatment comfortable?",
    answer:
      "We use gentle technique, local anesthesia when it is needed, and frequent check-ins during treatment. If something does not feel right, we stop and adjust.",
  },
  {
    category: "Location",
    question: "Where is West Hills Dental located?",
    answer:
      "Our office is at 2615 Elk Drive, Suite 2, Minot, ND 58701. You can find directions on our Contact Us page.",
    featured: true,
  },
  {
    category: "Location",
    question: "How do I contact the office?",
    answer:
      "Call (701) 837-1050, fax (701) 837-6350, or email westhillsdental@srt.com. Our team is happy to help with scheduling, billing, and general questions.",
  },
]);

export type Faq = z.infer<typeof faqSchema>;

export const faqCategories = [
  "All",
  "Appointments",
  "New patients",
  "Insurance & payment",
  "Comfort & care",
  "Location",
] as const;
