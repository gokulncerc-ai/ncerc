import type { Metadata } from "next";
import {
  ArrowRight,
  ClipboardList,
  MessageSquareText,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";

export const metadata: Metadata = {
  title: "Institutional Feedback | Nehru College of Engineering and Research Centre",
  description:
    "Access curriculum feedback forms for students, faculty, alumni, and employers, along with previous institutional feedback reports from NCERC.",
  keywords: [
    "NCERC feedback forms",
    "student curriculum feedback",
    "faculty curriculum feedback",
    "alumni feedback",
    "employer feedback",
    "NCERC feedback reports",
    "Nehru College of Engineering and Research Centre",
  ],
  robots: {
    index: true,
    follow: true,
  },
};

const feedbackForms = [
  {
    label: "Students Feedback on Curriculum",
    description:
      "Share your experience and suggestions about the curriculum.",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfY9GR8Kv6S3aI4ZTiOGFH3-hmsbEnuhxlkqPpZm55BMItysQ/viewform",
    audience: "For Students",
  },
  {
    label: "Faculty Feedback on Curriculum",
    description:
      "Provide feedback on curriculum content and academic delivery.",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSdhIG6lCEYdDr9cr57BfG_nT9TnqLjmfrJTYoNqBh8ir-xwiA/viewform",
    audience: "For Faculty",
  },
  {
    label: "Alumni Feedback on Curriculum",
    description:
      "Share your perspective on the curriculum and its relevance.",
    href: "https://docs.google.com/forms/d/e/1FAIpQLScg4eNg2C1Anh7ODjDzVd9lrM6HKIjPqllcvcS-IOulgxfndg/viewform",
    audience: "For Alumni",
  },
  {
    label: "Employer Feedback on Curriculum",
    description:
      "Provide an employer perspective on curriculum relevance.",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSdfnPRL0KxwBUmK48aNg_txMuSzqeHdOJeV315oCYbya0Nemw/viewform",
    audience: "For Employers",
  },
];

export default function FeedbackPage() {
  return (
    <>
      <SiteHeader />

      <main>
        {/* Hero Section */}
        <section className="relative isolate overflow-hidden bg-[#20235A]">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#20235A] via-[#20235A] to-[#15183F]" />

          <div className="pointer-events-none absolute -right-24 -top-28 h-96 w-96 rounded-full border border-[#D2B87C]/15" />
          <div className="pointer-events-none absolute -right-4 -top-8 h-64 w-64 rounded-full border border-[#D2B87C]/20" />
          <div className="pointer-events-none absolute -bottom-40 left-[38%] h-80 w-80 rounded-full border border-white/5" />

          <div className="relative mx-auto max-w-[1280px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#D2B87C]" />
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D2B87C] sm:text-sm">
                About Us / Quality Assurance
              </p>
            </div>

            <h1 className="mt-5 max-w-4xl font-display text-4xl font-semibold leading-[1.08] tracking-[-0.025em] text-white sm:text-5xl lg:text-7xl">
              Institutional
              <span className="block text-[#D2B87C]">Feedback.</span>
            </h1>

            <div className="mt-7 h-px w-20 bg-[#D2B87C]" />

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              Feedback from students, faculty, alumni, and employers helps
              the institution gather perspectives on curriculum and academic
              relevance. Access the available feedback forms and previous
              feedback reports below.
            </p>
          </div>

          <div className="absolute inset-x-0 bottom-0 h-1 bg-[#D2B87C]" />
        </section>

        {/* Feedback Forms */}
        <section className="bg-[#FAF7F2]">
          <div className="mx-auto max-w-[1280px] px-6 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#8F7746]" />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                  Share Your Perspective
                </p>
              </div>

              <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-[#20235A] sm:text-4xl">
                Curriculum Feedback Forms
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-8 text-[#6A645D]">
                Choose the form that matches your role to share your
                feedback on the curriculum. Each button opens its respective
                Google Form in a new tab.
              </p>
            </div>

            <div className="mt-9 grid grid-cols-1 gap-4 md:grid-cols-2">
              {feedbackForms.map((form) => (
                <a
                  key={form.label}
                  href={form.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${form.label} Google Form in a new tab`}
                  className="group flex min-h-[150px] flex-col justify-between border border-[#D8D1C7] bg-white p-5 transition-all duration-300 hover:border-[#8F7746] hover:bg-[#FFFEFC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8F7746] focus-visible:ring-offset-2 sm:p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#E0D9CF] bg-[#FAF7F2] text-[#20235A] transition-colors duration-300 group-hover:border-[#D2B87C] group-hover:bg-[#F2EFE8]">
                      <ClipboardList
                        size={22}
                        strokeWidth={1.6}
                        aria-hidden="true"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                        {form.audience}
                      </p>

                      <h3 className="mt-1.5 text-base font-semibold leading-6 text-[#20235A] transition-colors duration-300 group-hover:text-[#8F7746] sm:text-lg">
                        {form.label}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-[#77716A]">
                        {form.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-[#E0D9CF] pt-4">
                    <span className="text-sm font-semibold text-[#20235A] transition-colors duration-300 group-hover:text-[#8F7746]">
                      Open Feedback Form
                    </span>

                    <span className="flex h-9 w-9 items-center justify-center border border-[#D8D1C7] text-[#20235A] transition-all duration-300 group-hover:border-[#20235A] group-hover:bg-[#20235A] group-hover:text-white">
                      <ArrowRight
                        size={17}
                        className="transition-transform duration-300 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-6 flex items-start gap-3 border-l-2 border-[#D2B87C] bg-white px-5 py-4">
              <MessageSquareText
                size={20}
                className="mt-0.5 shrink-0 text-[#8F7746]"
                aria-hidden="true"
              />
              <p className="text-sm leading-6 text-[#6A645D]">
                Please select the appropriate form and submit your responses
                through the linked Google Forms page.
              </p>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}