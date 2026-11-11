import { z } from "zod";

const serviceSchema = z.object({
  slug: z.string(),
  name: z.string(),
  shortName: z.string(),
  icon: z.enum(["shield", "restore", "sparkles", "child", "implant", "emergency"]),
  tone: z.enum(["lime", "sage", "copper", "sand", "moss", "rose"]),
  tagline: z.string(),
  summary: z.string(),
  heroDescription: z.string(),
  overview: z.array(z.string()).min(1),
  highlights: z.array(z.string()),
  goodFor: z.array(z.string()),
  process: z.array(z.object({ title: z.string(), description: z.string() })),
  faqs: z.array(z.object({ question: z.string(), answer: z.string() })),
});

export const services = z.array(serviceSchema).parse([
  {
    slug: "preventative-dentistry",
    name: "Preventative Dentistry",
    shortName: "Preventative",
    icon: "shield",
    tone: "lime",
    tagline: "Keep small things small.",
    summary:
      "Routine exams, gentle cleanings, and practical guidance that protect your smile for the long run.",
    heroDescription:
      "The best dental care is often the care that keeps problems from starting. Our preventative visits are thorough, unhurried, and built around your real life.",
    overview: [
      "Preventative dentistry is the foundation of a healthy mouth. At West Hills Dental, we focus on understanding what is happening between visits, not just polishing teeth. Regular exams and professional cleanings help us catch changes early, keep gums healthy, and give you practical ways to care for your smile at home.",
      "We look at the whole picture: your health history, how your bite feels, what you eat, and the habits that fit your day. Then we make a simple plan together. No lectures, no pressure, and no unnecessary treatment.",
    ],
    highlights: [
      "Comprehensive exams and professional cleanings",
      "Fluoride and sealants when they are appropriate",
      "Oral hygiene coaching that fits your routine",
      "Early detection of decay, gum changes, and wear",
      "Clear next steps, explained in plain language",
    ],
    goodFor: [
      "Anyone due for a check-up",
      "Families looking for one dental home",
      "Patients who want to prevent problems before they start",
    ],
    process: [
      {
        title: "Get to know you",
        description:
          "We review your health history, talk about any concerns, and listen to what you want from your care.",
      },
      {
        title: "Clean and check",
        description:
          "A gentle cleaning and a careful exam help us see what is healthy and what may need attention.",
      },
      {
        title: "Make a simple plan",
        description:
          "You leave with a clear picture of your oral health and the next step that makes sense for you.",
      },
    ],
    faqs: [
      {
        question: "How often should I have a cleaning?",
        answer:
          "Most patients benefit from a check-up and cleaning every six months, but some need a different schedule. We will recommend what fits your gums and health history.",
      },
      {
        question: "Will a cleaning hurt?",
        answer:
          "We aim to make every visit comfortable. Tell us if you are sensitive or anxious and we will adjust our approach and pace.",
      },
      {
        question: "Do you take X-rays every time?",
        answer:
          "No. We take imaging when it is needed to answer a clinical question, and we explain why before we begin.",
      },
    ],
  },
  {
    slug: "restorative-dentistry",
    name: "Restorative Dentistry",
    shortName: "Restorative",
    icon: "restore",
    tone: "sand",
    tagline: "Bring back comfort and function.",
    summary:
      "Thoughtful repairs for cavities, worn teeth, and missing structure, with results that feel like you.",
    heroDescription:
      "When a tooth needs help, the goal is simple: restore comfort, function, and confidence without making the solution feel bigger than it needs to be.",
    overview: [
      "Restorative dentistry repairs teeth that have been affected by decay, cracks, wear, or injury. We start with a careful assessment and explain every option, including the most conservative one that will solve the problem.",
      "From tooth-colored fillings to crowns and bridges, our approach is to preserve as much natural tooth structure as possible and create a result that fits your bite and your smile.",
    ],
    highlights: [
      "Tooth-colored fillings",
      "Crowns and bridges",
      "Dentures and partials",
      "Repair of cracked, chipped, or worn teeth",
      "Treatment planned around your health and goals",
    ],
    goodFor: [
      "New cavities or old failing fillings",
      "Teeth that are cracked, sensitive, or worn",
      "Missing teeth that need replacement",
    ],
    process: [
      {
        title: "Assess",
        description:
          "We examine the tooth, your bite, and your history to understand what is really going on.",
      },
      {
        title: "Explain",
        description:
          "You see the options, the trade-offs, and the expected timeline before anything begins.",
      },
      {
        title: "Restore",
        description:
          "We complete the treatment with care, then check that your bite feels comfortable and natural.",
      },
    ],
    faqs: [
      {
        question: "How long does a restoration last?",
        answer:
          "It depends on the material, the tooth, and your habits. We will talk through realistic expectations and how to make your restoration last.",
      },
      {
        question: "Will it look natural?",
        answer:
          "We choose materials and shapes that blend with your other teeth. The goal is a repair that looks like it belongs.",
      },
      {
        question: "Can I eat normally afterwards?",
        answer:
          "Often yes, though some treatments need a little time or temporary care. We will give you clear instructions before you leave.",
      },
    ],
  },
  {
    slug: "cosmetic-dentistry",
    name: "Cosmetic Dentistry",
    shortName: "Cosmetic",
    icon: "sparkles",
    tone: "rose",
    tagline: "Enhance what is already yours.",
    summary:
      "Considered improvements for stain, shape, and symmetry, designed to still look like you.",
    heroDescription:
      "A smile you feel at home in. Our cosmetic care is about subtle, thoughtful changes, not a one-size-fits-all new look.",
    overview: [
      "Cosmetic dentistry can brighten, reshape, and balance a smile. We begin with what you notice and what you would like to change, then show you the least invasive way to get there.",
      "Whether you are curious about whitening before a big event or considering veneers, we will be honest about what each option can and cannot do. A beautiful result should still feel like your face.",
    ],
    highlights: [
      "Professional whitening",
      "Veneers and bonding",
      "Reshaping and smile planning",
      "Conservative options first",
      "A design process built around your features",
    ],
    goodFor: [
      "Stains that do not respond to whitening toothpaste",
      "Chips, gaps, or uneven edges",
      "Patients considering a smile refresh",
    ],
    process: [
      {
        title: "Listen",
        description:
          "We talk about what you see in the mirror and what you want to feel when you smile.",
      },
      {
        title: "Preview",
        description:
          "We explain the realistic options and, where appropriate, plan a preview before treatment.",
      },
      {
        title: "Refine",
        description:
          "We complete the work in careful stages and check the result in natural light and with your bite.",
      },
    ],
    faqs: [
      {
        question: "Will whitening make my teeth sensitive?",
        answer:
          "Some people feel temporary sensitivity. We can adjust the strength and timing to keep you comfortable.",
      },
      {
        question: "Are veneers permanent?",
        answer:
          "Veneers typically require some enamel change, so they are a long-term commitment. We will always discuss conservative alternatives first.",
      },
      {
        question: "Can cosmetic care fix a bite problem?",
        answer:
          "Sometimes cosmetics and bite care overlap. If function needs attention, we will address that before or alongside the aesthetic plan.",
      },
    ],
  },
  {
    slug: "childrens-dentistry",
    name: "Children's Dentistry",
    shortName: "Children's",
    icon: "child",
    tone: "lime",
    tagline: "A warm welcome for little smiles.",
    summary:
      "Calm, friendly visits that help children build a positive relationship with dental care.",
    heroDescription:
      "Children remember how a place felt. We keep visits gentle, explain things at their level, and give them room to ask questions.",
    overview: [
      "Our children's dentistry focuses on comfort, education, and prevention. We welcome parents into the conversation and help kids understand what is happening before it happens.",
      "From a first check-up to sealants and fluoride, we meet each child where they are. The goal is a healthy smile and a confident, unafraid relationship with the dentist.",
    ],
    highlights: [
      "First visits and growing smiles",
      "Gentle cleanings and exams",
      "Fluoride and sealants when appropriate",
      "Age-appropriate brushing and flossing coaching",
      "Parents welcome in the conversation",
    ],
    goodFor: [
      "A child's first dental visit",
      "School-age check-ups",
      "Families who want a calm, consistent dental home",
    ],
    process: [
      {
        title: "Say hello",
        description:
          "We introduce the space, the tools, and ourselves before anything begins.",
      },
      {
        title: "Look and learn",
        description:
          "A gentle exam and cleaning help us check growth, gums, and any early changes.",
      },
      {
        title: "Practice at home",
        description:
          "We give kids and parents simple, realistic habits to keep the smile healthy between visits.",
      },
    ],
    faqs: [
      {
        question: "When should a child have their first visit?",
        answer:
          "A good rule of thumb is by their first birthday or when the first tooth appears. Call us if you are unsure.",
      },
      {
        question: "Can I stay with my child?",
        answer:
          "Yes. We welcome parents in the room and will guide you on when a child may do best with a little independence.",
      },
      {
        question: "Are sealants safe?",
        answer:
          "Sealants are a well-established way to protect the grooves of back teeth. We will recommend them only when they make sense for your child.",
      },
    ],
  },
  {
    slug: "dental-implants",
    name: "Dental Implants",
    shortName: "Implants",
    icon: "implant",
    tone: "moss",
    tagline: "A lasting answer for missing teeth.",
    summary:
      "A stable, natural-looking option for replacing a missing tooth or supporting a larger restoration.",
    heroDescription:
      "Missing teeth can affect more than your smile. Implants offer a stable foundation for chewing, speaking, and feeling like yourself again.",
    overview: [
      "A dental implant is a small, biocompatible post that takes the place of a tooth root. Once healed, it can support a crown, bridge, or denture. The result is a restoration that feels stable and works with your natural bite.",
      "Implant care starts with a thorough consultation. We review your health history, bone support, and goals, then explain whether an implant is the right choice or whether another option would serve you better.",
    ],
    highlights: [
      "Implant consultations and planning",
      "Implant-supported crowns and bridges",
      "Support for dentures and partials",
      "Coordination with trusted specialists when needed",
      "Clear aftercare and long-term follow-up",
    ],
    goodFor: [
      "A single missing tooth",
      "Several missing teeth",
      "Patients exploring an alternative to dentures",
    ],
    process: [
      {
        title: "Consult",
        description:
          "We assess your health, bone support, and expectations, and answer every question you bring.",
      },
      {
        title: "Plan",
        description:
          "We map out the sequence, timeline, and costs so there are no surprises along the way.",
      },
      {
        title: "Restore",
        description:
          "After the implant is ready, we create the final restoration and fine-tune your bite and comfort.",
      },
    ],
    faqs: [
      {
        question: "Does getting an implant hurt?",
        answer:
          "The procedure is done with local anesthesia, and most patients compare recovery to a routine extraction. We will give you detailed aftercare instructions.",
      },
      {
        question: "How long do implants last?",
        answer:
          "Many implants last for decades with good oral hygiene and regular check-ups. Your habits and health play a big role.",
      },
      {
        question: "Am I a candidate?",
        answer:
          "Most healthy adults are. We will review your medical history and bone support during a consultation and discuss alternatives if an implant is not ideal.",
      },
    ],
  },
  {
    slug: "emergency-dentistry",
    name: "Emergency Dentistry",
    shortName: "Emergency",
    icon: "emergency",
    tone: "copper",
    tagline: "A clear next step when something hurts.",
    summary:
      "When pain or damage happens, call us first. We will help you understand what to do next.",
    heroDescription:
      "Dental problems rarely wait for a convenient moment. If something hurts or does not look right, call our Minot office and we will guide you through the next step.",
    overview: [
      "Dental emergencies can include a toothache, a chipped or broken tooth, a lost filling or crown, or swelling around the gums. Some situations need to be seen promptly; others can be managed comfortably until your visit.",
      "Call us at (701) 837-1050. Our team will ask a few questions, give you immediate guidance, and do our best to see you as soon as possible.",
    ],
    highlights: [
      "Toothache and sensitivity",
      "Chipped or broken teeth",
      "Lost fillings or crowns",
      "Swelling or gum pain",
      "Call-first guidance from our front office",
    ],
    goodFor: [
      "Sudden tooth pain",
      "A tooth that has been knocked or cracked",
      "A restoration that has come loose",
    ],
    process: [
      {
        title: "Call us",
        description:
          "Tell us what happened and how you are feeling. We will give you immediate guidance.",
      },
      {
        title: "Get comfortable",
        description:
          "We will explain what to do while you wait and how soon you should be seen.",
      },
      {
        title: "Stabilize and plan",
        description:
          "Once you are here, we focus on relief first, then a clear plan for the longer-term repair.",
      },
    ],
    faqs: [
      {
        question: "What counts as a dental emergency?",
        answer:
          "Severe pain, swelling, bleeding that will not stop, or a tooth that has been knocked out or badly broken should be addressed promptly. Call us for guidance.",
      },
      {
        question: "What if the office is closed?",
        answer:
          "Leave a message or call back when we open. If you have facial swelling, trouble breathing, or uncontrolled bleeding, seek urgent medical care or call 911.",
      },
      {
        question: "Can I take pain medicine before my visit?",
        answer:
          "You can take your usual over-the-counter pain reliever if it is safe for you. Tell us what you took and when. Do not place aspirin directly on the gum.",
      },
    ],
  },
]);

export type Service = z.infer<typeof serviceSchema>;

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export const serviceOptions = services.map((service) => ({
  value: service.slug,
  label: service.name,
}));

export type ServiceSlug = Service["slug"];
