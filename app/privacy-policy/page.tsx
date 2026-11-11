import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  FileText,
  LockKeyhole,
  Mail,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How West Hills Dental in Minot, ND handles information submitted through this website, including appointment requests and payment inquiries.",
  alternates: { canonical: "/privacy-policy" },
};

const sections = [
  { id: "overview", title: "Overview" },
  { id: "information-we-collect", title: "Information we collect" },
  { id: "how-we-use-it", title: "How we use information" },
  { id: "how-we-share-it", title: "How we share information" },
  { id: "health-information", title: "Health information" },
  { id: "retention", title: "How long we keep it" },
  { id: "security", title: "Security" },
  { id: "your-choices", title: "Your choices" },
  { id: "children", title: "Children's privacy" },
  { id: "third-party-links", title: "Third-party links" },
  { id: "changes", title: "Changes to this policy" },
  { id: "contact", title: "Contact us" },
] as const;

const shortVersion = [
  "We collect only the information you choose to send us.",
  "Website forms are not for medical details or card numbers.",
  "We do not sell your personal information.",
  "Questions? Our front office will help.",
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy policy"
        title={
          <>
            Your privacy,
            <br />
            in plain <span className="text-lime italic">language</span>.
          </>
        }
        description="This policy explains what information this website collects, why we collect it, and how to reach us with a question. It applies to westhillsdentalnd.com."
        aside={
          <div className="rounded-[1.75rem] border border-cream/15 bg-cream/[0.06] p-6 backdrop-blur-xl">
            <span className="label-mono text-lime/70">The short version</span>
            <ul className="mt-5 space-y-3">
              {shortVersion.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-6 text-cream/70">
                  <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-lime/15 text-lime">
                    <ShieldCheck className="size-2.5" strokeWidth={2.5} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-5 border-t border-cream/10 pt-4">
              <p className="font-mono text-[0.55rem] tracking-[0.16em] text-cream/70 uppercase">
                Effective
              </p>
              <p className="mt-1 text-xs text-cream/70">November 10, 2026</p>
            </div>
            <Button asChild variant="light" className="mt-5 w-full">
              <Link href="#contact">
                Contact the office
                <ArrowUpRight className="size-4" />
              </Link>
            </Button>
          </div>
        }
      >
        <div className="flex flex-wrap items-center gap-4">
          <span className="flex items-center gap-2 text-xs text-cream/70">
            <LockKeyhole className="size-4 text-lime" />
            No advertising trackers on this site
          </span>
          <span className="hidden h-3 w-px bg-cream/20 sm:block" />
          <Link
            href={site.emailHref}
            className="flex items-center gap-2 text-xs text-cream/70 transition-colors hover:text-lime"
          >
            <Mail className="size-4 text-lime" />
            {site.email}
          </Link>
        </div>
      </PageHero>

      <section className="relative overflow-hidden bg-cream py-20 sm:py-24 lg:py-28">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-20">
            <aside className="lg:sticky lg:top-32 lg:self-start">
              <div className="rounded-[1.5rem] border border-line bg-paper p-5">
                <p className="label-mono text-moss">On this page</p>
                <nav aria-label="Privacy policy sections" className="mt-4">
                  <ol className="space-y-1.5">
                    {sections.map((section, index) => (
                      <li key={section.id}>
                        <Link
                          href={`#${section.id}`}
                          className="group flex items-baseline gap-2.5 rounded-lg px-2 py-1.5 text-xs text-muted transition-colors hover:bg-lime/25 hover:text-forest"
                        >
                          <span className="font-mono text-[0.52rem] text-copper">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          {section.title}
                        </Link>
                      </li>
                    ))}
                  </ol>
                </nav>
              </div>

              <div className="mt-4 rounded-[1.5rem] border border-forest/10 bg-lime/25 p-5">
                <FileText className="size-5 text-forest" />
                <p className="mt-3 font-display text-xl text-forest">Need a hand?</p>
                <p className="mt-1.5 text-xs leading-5 text-forest/80">
                  Call our front office with any privacy or records question.
                </p>
                <Link
                  href={site.phoneHref}
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-forest underline-offset-4 hover:underline"
                >
                  <Phone className="size-3.5" />
                  {site.phone}
                </Link>
              </div>
            </aside>

            <div className="max-w-3xl">
              <Reveal>
                <p className="border-l-2 border-copper/50 pl-5 text-lg leading-8 text-ink/75">
                  West Hills Dental respects your privacy. We keep website data collection
                  limited, use it only to respond to you and operate this site, and handle
                  patient records separately from website forms.
                </p>
              </Reveal>

              <div className="mt-12 space-y-12">
                <Reveal>
                  <PolicySection id="overview" number="01" title="Overview">
                    <p>
                      This privacy policy describes how West Hills Dental (&ldquo;we,&rdquo;
                      &ldquo;us,&rdquo; or &ldquo;our&rdquo;) handles information collected
                      through this website. It does not describe the privacy practices for
                      clinical records maintained at our office, which are handled separately
                      under applicable law.
                    </p>
                    <p>
                      By using this website, you agree to the practices described here. If you
                      do not agree, please contact us by phone instead of using the website
                      forms.
                    </p>
                  </PolicySection>
                </Reveal>

                <Reveal>
                  <PolicySection
                    id="information-we-collect"
                    number="02"
                    title="Information we collect"
                  >
                    <p>
                      <strong className="font-semibold text-ink">
                        Information you choose to share.
                      </strong>{" "}
                      When you submit an appointment request, we collect your name, email
                      address, phone number, the service you are interested in, whether you
                      are a new or returning patient, your preferred day and time, and any
                      optional note you include.
                    </p>
                    <p>
                      When you request a payment link, we collect your name, email address,
                      phone number, an optional amount or account note, and any optional
                      message. These forms do not ask for card numbers, bank account numbers,
                      or medical history, and you should not include that information in them.
                    </p>
                    <p>
                      <strong className="font-semibold text-ink">
                        Information collected automatically.
                      </strong>{" "}
                      Like most websites, our hosting provider may record basic technical
                      information such as your IP address, browser type, device type, the
                      pages you visit, and the date and time of your visit. This information
                      is used for security, troubleshooting, and understanding overall site
                      performance.
                    </p>
                    <p>
                      This website does not use advertising cookies or third-party advertising
                      trackers. If we add analytics or similar tools in the future, we will
                      update this policy.
                    </p>
                  </PolicySection>
                </Reveal>

                <Reveal>
                  <PolicySection id="how-we-use-it" number="03" title="How we use information">
                    <p>We use the information described above to:</p>
                    <ul>
                      <li>Respond to appointment requests and payment inquiries;</li>
                      <li>Confirm, schedule, reschedule, or follow up on a visit;</li>
                      <li>Answer questions you send through the site;</li>
                      <li>Maintain the security and reliability of the website;</li>
                      <li>Comply with legal obligations and enforce our rights; and</li>
                      <li>Improve how the website works and how we communicate.</li>
                    </ul>
                    <p>
                      We do not use information submitted through this website for automated
                      decision-making or targeted advertising.
                    </p>
                  </PolicySection>
                </Reveal>

                <Reveal>
                  <PolicySection
                    id="how-we-share-it"
                    number="04"
                    title="How we share information"
                  >
                    <p>
                      We do not sell your personal information. We may share information with
                      service providers who help us operate the website and communicate with
                      you&mdash;for example, hosting, email, or scheduling providers&mdash;but
                      only as needed to provide those services. We may also disclose
                      information when required by law, to protect the safety of our patients
                      or staff, or in connection with a change in ownership of the practice.
                    </p>
                    <p>
                      Our website forms send information to our office through a server
                      operated for this site. Email is not a fully secure channel, so please do
                      not use it for sensitive medical or financial details.
                    </p>
                  </PolicySection>
                </Reveal>

                <Reveal>
                  <PolicySection id="health-information" number="05" title="Health information">
                    <p>
                      This website is designed for general inquiries and appointment requests,
                      not for sharing protected health information. Please do not include
                      symptoms, diagnoses, treatment history, insurance member IDs, or other
                      sensitive medical details in a website form.
                    </p>
                    <p>
                      Clinical records and health information are maintained by West Hills
                      Dental under the privacy safeguards that apply to our practice. If you
                      need to discuss a health matter, call our office at{" "}
                      <Link href={site.phoneHref} className="policy-link">
                        {site.phone}
                      </Link>
                      .
                    </p>
                  </PolicySection>
                </Reveal>

                <Reveal>
                  <PolicySection id="retention" number="06" title="How long we keep it">
                    <p>
                      We keep information submitted through the website only as long as needed
                      to respond to your request, maintain appropriate business records, and
                      meet legal or operational requirements. When it is no longer needed, we
                      take reasonable steps to delete or de-identify it.
                    </p>
                  </PolicySection>
                </Reveal>

                <Reveal>
                  <PolicySection id="security" number="07" title="Security">
                    <p>
                      We use reasonable administrative and technical safeguards to protect the
                      information we collect. However, no website or electronic transmission
                      is completely secure. By using the website forms, you understand that
                      information is transmitted at your own risk.
                    </p>
                    <p>
                      If you believe you have discovered a security issue, please contact our
                      office so we can look into it.
                    </p>
                  </PolicySection>
                </Reveal>

                <Reveal>
                  <PolicySection id="your-choices" number="08" title="Your choices">
                    <p>
                      You can choose not to submit information through the website and call or
                      visit our office instead. If you have submitted information and would
                      like to ask about it, correct it, or request that we delete it, contact
                      us using the details below. We may need to verify your identity before
                      acting on a request, and some records may need to be retained by law.
                    </p>
                  </PolicySection>
                </Reveal>

                <Reveal>
                  <PolicySection id="children" number="09" title="Children's privacy">
                    <p>
                      This website is not directed to children under 13, and we do not knowingly
                      collect personal information from children through the site. If a parent
                      or guardian believes a child has submitted information, please contact us
                      and we will review the request.
                    </p>
                  </PolicySection>
                </Reveal>

                <Reveal>
                  <PolicySection id="third-party-links" number="10" title="Third-party links">
                    <p>
                      This website links to third-party services such as Facebook and Google
                      Maps. Those services have their own privacy policies, and we are not
                      responsible for how they collect or use information. We encourage you to
                      review their policies before sharing information with them.
                    </p>
                  </PolicySection>
                </Reveal>

                <Reveal>
                  <PolicySection id="changes" number="11" title="Changes to this policy">
                    <p>
                      We may update this policy from time to time. When we do, we will revise
                      the effective date at the top of this page. Material changes will apply
                      only after they are posted, unless the law requires otherwise.
                    </p>
                  </PolicySection>
                </Reveal>

                <Reveal>
                  <PolicySection id="contact" number="12" title="Contact us">
                    <p>
                      If you have a question about this policy, the information you submitted,
                      or privacy at West Hills Dental, please contact our front office.
                    </p>
                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      <Link
                        href={site.phoneHref}
                        className="group flex items-start gap-3 rounded-2xl border border-line bg-paper p-4 transition-colors hover:border-forest/20 hover:bg-lime/15"
                      >
                        <Phone className="mt-0.5 size-4 shrink-0 text-forest" />
                        <span>
                          <span className="block font-mono text-[0.55rem] tracking-[0.16em] text-muted uppercase">
                            Phone
                          </span>
                          <span className="mt-1 block text-sm text-ink/80">{site.phone}</span>
                        </span>
                      </Link>
                      <Link
                        href={site.emailHref}
                        className="group flex items-start gap-3 rounded-2xl border border-line bg-paper p-4 transition-colors hover:border-forest/20 hover:bg-lime/15"
                      >
                        <Mail className="mt-0.5 size-4 shrink-0 text-forest" />
                        <span className="min-w-0">
                          <span className="block font-mono text-[0.55rem] tracking-[0.16em] text-muted uppercase">
                            Email
                          </span>
                          <span className="mt-1 block truncate text-sm text-ink/80">
                            {site.email}
                          </span>
                        </span>
                      </Link>
                    </div>
                    <p className="mt-4 text-sm text-muted">
                      {site.name}
                      <br />
                      {site.address.street}, {site.address.suite}
                      <br />
                      {site.address.city}, {site.address.state} {site.address.zip}
                    </p>
                  </PolicySection>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

type PolicySectionProps = {
  id: string;
  number: string;
  title: string;
  children: React.ReactNode;
};

function PolicySection({ id, number, title, children }: PolicySectionProps) {
  return (
    <section id={id} className="scroll-mt-28">
      <div className="flex items-baseline gap-3 border-t border-forest/15 pt-5">
        <span className="font-mono text-[0.58rem] tracking-[0.2em] text-copper">{number}</span>
        <h2 className="font-display text-3xl text-ink sm:text-4xl">{title}</h2>
      </div>
      <div className="policy-prose mt-4 space-y-4 text-sm leading-7 text-muted">{children}</div>
    </section>
  );
}
