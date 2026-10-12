import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Clock3,
  Mail,
  MapPin,
  Phone,
  Smartphone,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
export const metadata: Metadata = {
  title: "Contact Us | MBA | NCERC",
  description:
    "Contact Nehru College of Engineering and Research Centre, Thiruvilwamala, Thrissur, Kerala.",
};

const contactDetails = [
  {
    icon: MapPin,
    label: "Reach Us",
    value: (
      <>
        Nila Gardens, Pampady,
        <br />
        Thiruvilwamala, Thrissur,
        <br />
        Kerala, India – 680 588
      </>
    ),
  },
  {
    icon: Phone,
    label: "Land Line",
    value: <>04884-284000 (100 lines)</>,
  },
  {
    icon: Smartphone,
    label: "Mobile Number",
    value: (
      <>
        +91 9656000005
        <br />
        +91 7510224777
      </>
    ),
  },
  {
    icon: Mail,
    label: "E-mail",
    value: (
      <>
        <a
          href="mailto:office@ncerc.ac.in"
          className="transition-colors hover:text-[#8F7746]"
        >
          office@ncerc.ac.in
        </a>
        <br />
        <a
          href="mailto:admissions@ncerc.ac.in"
          className="transition-colors hover:text-[#8F7746]"
        >
          admissions@ncerc.ac.in
        </a>
      </>
    ),
  },
];

const enquiryContacts = [
  {
    role: "Office Superintendent",
    phone: "+91 7510660777",
  },
  {
    role: "Campus Manager",
    phone: "+91 8606334777",
  },
  {
    role: "Administrative Officer",
    phone: "+91 86065 59777",
  },
  {
    role: "Accounts (Fees)",
    phone: "+91 7510332777",
  },
  {
    role: "Principal",
    phone: "+91 7510882777",
  },
];

const MAP_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62714.99339095788!2d76.3758872699026!3d10.758581680438127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7df6b161af2af%3A0x633062db5a6a8236!2sNehru+College+of+Engineering+%26+Research+Centre!5e0!3m2!1sen!2sin!4v1545322235929";

function SectionLabel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className="h-px w-9 bg-[#8F7746]" />

      <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8F7746] sm:text-xs">
        {children}
      </p>
    </div>
  );
}

export default function NewsEventsPage() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-[#FAF7F2] text-[#1E1917]">
        {/* =========================================================
            HERO
        ========================================================= */}
        <section className="relative overflow-hidden bg-[#20235A] text-white">
          {/* Decorative circles */}
          <div className="pointer-events-none absolute -right-32 -top-36 h-[500px] w-[500px] rounded-full border border-[#D2B87C]/10" />

          <div className="pointer-events-none absolute -right-12 -top-20 h-[340px] w-[340px] rounded-full border border-[#D2B87C]/15" />

          <div className="pointer-events-none absolute bottom-[-180px] left-[-140px] h-[400px] w-[400px] rounded-full border border-white/5" />

          <div className="relative mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24 xl:px-20">
            <div className="max-w-4xl">
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-10 bg-[#D2B87C]" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D2B87C] sm:text-xs">
                  Nehru College of Engineering &amp; Research Centre
                </p>
              </div>

              <h1 className="font-serif text-[46px] font-normal leading-[1.05] tracking-[-0.035em] sm:text-[60px] lg:text-[72px]">
                Get in
                <br />
                <span className="italic text-[#D2B87C]">Touch.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
                Have a question about admissions, academics or the campus?
                Reach out to the NCERC team and we will be happy to assist
                you.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-3 text-xs text-white/50">
                <Link
                  href="/department/mba"
                  className="transition-colors hover:text-white"
                >
                  MBA
                </Link>

                <span className="text-[#D2B87C]">/</span>

                <span className="text-white/80">Contact Us</span>
              </div>
            </div>
          </div>

          <div className="h-1 w-full bg-[#D2B87C]" />
        </section>

        {/* =========================================================
            INTRO / CONTACT OVERVIEW
        ========================================================= */}
        <section className="bg-[#FAF7F2] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24 xl:px-20">
          <div className="mx-auto max-w-[1200px]">
            <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
              {/* Left */}
              <div>
                <SectionLabel>Contact NCERC</SectionLabel>

                <h2 className="font-serif text-4xl font-normal leading-[1.12] tracking-[-0.025em] text-[#20235A] sm:text-5xl lg:text-[54px]">
                  Feel free
                  <br />
                  <span className="italic">to contact us.</span>
                </h2>

                <div className="mt-8 h-px w-20 bg-[#D2B87C]" />

                <p className="mt-6 max-w-sm text-sm leading-7 text-[#1E1917]/65">
                  Whether you are looking for admission information, campus
                  assistance or general enquiries, our team is available to
                  help.
                </p>
              </div>

              {/* Right */}
              <div>
                <div className="grid gap-px border border-[#20235A]/10 bg-[#20235A]/10 sm:grid-cols-2">
                  {contactDetails.map((item) => {
                    const Icon = item.icon;

                    return (
                      <article
                        key={item.label}
                        className="group bg-white p-6 transition-colors duration-300 hover:bg-[#F2EFE8] sm:p-7"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#F2EFE8] text-[#8F7746] transition-colors duration-300 group-hover:bg-[#20235A] group-hover:text-[#D2B87C]">
                            <Icon size={21} strokeWidth={1.5} />
                          </div>

                          <div className="min-w-0">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                              {item.label}
                            </p>

                            <div className="mt-3 text-sm leading-7 text-[#1E1917]/70">
                              {item.value}
                            </div>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            QUICK CONTACT STRIP
        ========================================================= */}
        <section className="border-y border-[#20235A]/10 bg-white">
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 sm:grid-cols-3">
            <a
              href="tel:+914884284000"
              className="group flex items-center gap-4 border-b border-[#20235A]/10 px-5 py-6 transition-colors hover:bg-[#F2EFE8] sm:border-b-0 sm:border-r sm:px-7"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#F2EFE8] text-[#8F7746]">
                <Phone size={20} strokeWidth={1.5} />
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                  Call Us
                </p>

                <p className="mt-1 text-sm text-[#20235A]">
                  04884-284000
                </p>
              </div>
            </a>

            <a
              href="mailto:admissions@ncerc.ac.in"
              className="group flex items-center gap-4 border-b border-[#20235A]/10 px-5 py-6 transition-colors hover:bg-[#F2EFE8] sm:border-b-0 sm:border-r sm:px-7"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#F2EFE8] text-[#8F7746]">
                <Mail size={20} strokeWidth={1.5} />
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                  Admissions
                </p>

                <p className="mt-1 text-sm text-[#20235A]">
                  admissions@ncerc.ac.in
                </p>
              </div>
            </a>

            <div className="flex items-center gap-4 px-5 py-6 sm:px-7">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#F2EFE8] text-[#8F7746]">
                <Clock3 size={20} strokeWidth={1.5} />
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                  Assistance
                </p>

                <p className="mt-1 text-sm text-[#20235A]">
                  Admissions &amp; General Enquiries
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            QUERIES
        ========================================================= */}
        <section className="bg-[#F2EFE8] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24 xl:px-20">
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <SectionLabel>For Queries Reach</SectionLabel>

                <h2 className="font-serif text-4xl font-normal leading-[1.12] tracking-[-0.025em] text-[#20235A] sm:text-5xl lg:text-[52px]">
                  Speak with
                  <br />
                  <span className="italic">our team.</span>
                </h2>
              </div>

              <p className="max-w-md text-sm leading-7 text-[#1E1917]/65">
                For specific administrative, campus, accounts or academic
                enquiries, contact the appropriate office directly.
              </p>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              {enquiryContacts.map((contact, index) => (
                <article
                  key={contact.role}
                  className="group flex items-center justify-between border border-[#20235A]/10 bg-[#FAF7F2] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D2B87C] sm:p-6"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#20235A] text-xs font-semibold text-[#D2B87C]">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div>
                      <p className="font-serif text-lg text-[#20235A]">
                        {contact.role}
                      </p>

                      <a
                        href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                        className="mt-1 inline-block text-sm text-[#8F7746] transition-colors hover:text-[#20235A]"
                      >
                        {contact.phone}
                      </a>
                    </div>
                  </div>

                  <ArrowRight
                    size={18}
                    strokeWidth={1.5}
                    className="shrink-0 text-[#8F7746] transition-transform duration-300 group-hover:translate-x-1"
                  />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            LOCATION / MAP
        ========================================================= */}
        <section className="bg-[#FAF7F2] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24 xl:px-20">
          <div className="mx-auto max-w-[1200px]">
            <div className="grid gap-10 lg:grid-cols-[0.55fr_1.45fr] lg:gap-14">
              {/* Location text */}
              <div>
                <SectionLabel>Find Us</SectionLabel>

                <h2 className="font-serif text-4xl font-normal leading-[1.12] tracking-[-0.025em] text-[#20235A] sm:text-5xl">
                  Visit our
                  <br />
                  <span className="italic">campus.</span>
                </h2>

                <div className="mt-8 h-px w-20 bg-[#D2B87C]" />

                <div className="mt-7 flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#F2EFE8] text-[#8F7746]">
                    <MapPin size={21} strokeWidth={1.5} />
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                      Campus Address
                    </p>

                    <p className="mt-3 text-sm leading-7 text-[#1E1917]/70">
                      Nehru College of Engineering &amp; Research Centre
                      <br />
                      Nila Gardens, Pampady
                      <br />
                      Thiruvilwamala, Thrissur
                      <br />
                      Kerala, India – 680 588
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Nehru+College+of+Engineering+%26+Research+Centre"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex min-h-12 items-center gap-3 border border-[#20235A]/20 px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#20235A] transition-colors duration-300 hover:border-[#D2B87C] hover:bg-[#D2B87C]"
                  >
                    Open in Maps

                    <ArrowRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="relative">
                <div className="absolute -bottom-3 -left-3 right-3 top-3 border border-[#D2B87C]/60" />

                <div className="relative overflow-hidden bg-white p-2">
                  <iframe
                    src={MAP_URL}
                    title="Nehru College of Engineering and Research Centre location map"
                    width="100%"
                    height="420"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="block min-h-[320px] w-full border-0 sm:min-h-[420px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            CLOSING CTA
        ========================================================= */}
        <section className="bg-[#20235A] px-5 py-14 text-white sm:px-8 sm:py-16 lg:px-14 xl:px-20">
          <div className="mx-auto flex max-w-[1200px] flex-col justify-between gap-7 md:flex-row md:items-center">
            <div>
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D2B87C] sm:text-xs">
                Nehru College of Engineering &amp; Research Centre
              </p>

              <h2 className="max-w-2xl font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
                We are here to help you take the next step.
              </h2>
            </div>

            <Link
              href="/department/mba"
              className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-3 border border-[#D2B87C]/60 px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:bg-[#D2B87C] hover:text-[#20235A]"
            >
              Explore MBA

              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}