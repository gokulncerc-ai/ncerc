
import type { Metadata } from "next";
import {
  ArrowDown,
  ArrowUpRight,
  Award,
  ChevronsRight,
  Compass,
  GraduationCap,
  Target,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../DepartmentNav/DepartmentNav";
import FAQ from "../FAQ.tsx/page";

export const metadata: Metadata = {
  title: "PEO, PO & PSO | Nehru School of Management - NCERC",
  description:
    "Explore the Program Educational Objectives, Program Outcomes and Program Specific Outcomes of the MBA programme at Nehru School of Management, NCERC.",
  keywords: [
    "MBA PEO PSO NCERC",
    "MBA program outcomes",
    "MBA educational objectives",
    "Nehru School of Management",
    "NCERC Thrissur",
    "MBA programme Kerala",
  ],
  robots: {
    index: true,
    follow: true,
  },
};

type OutcomeSection = {
  id: string;
  shortTitle: string;
  title: string;
  subtitle: string;
  description: string;
  icon: typeof Target;
  items: string[];
};

const outcomeSections: OutcomeSection[] = [
  {
    id: "peo",
    shortTitle: "PEOs",
    title: "Program Educational Objectives",
    subtitle: "The professionals our graduates aspire to become",
    description:
      "Program Educational Objectives describe the broader professional capabilities and values that the MBA programme aims to develop in its graduates.",
    icon: Target,
    items: [
      "To demonstrate the ability to apply management principles and analytical skills to address complex business challenges and contribute to organizational success.",
      "To exhibit strong leadership qualities, ethical behaviour, and a global perspective to drive innovation and sustainable business practices.",
      "To be effective communicators and collaborators who can work successfully in diverse teams to achieve organizational goals.",
      "To possess a strong foundation in business fundamentals and the ability to adapt to the evolving business environment through continuous learning.",
      "To Demonstrate a commitment to social responsibility and ethical decision-making, contributing positively to society.",
    ],
  },
  {
    id: "po",
    shortTitle: "POs",
    title: "Program Outcomes",
    subtitle: "The knowledge and capabilities developed through the programme",
    description:
      "Program Outcomes outline the knowledge, analytical abilities, leadership skills and professional competencies students are expected to develop through their MBA education.",
    icon: GraduationCap,
    items: [
      "Apply knowledge of management theories and practices to solve business problems.",
      "Foster Analytical and critical thinking abilities for data-driven decision-making.",
      "Ability to develop Value-based Leadership ability.",
      "Ability to understand, analyze and communicate global, economic, legal, and ethical aspects of business.",
      "Ability to lead themselves and others in the achievement of organizational goals, contributing effectively to a team environment.",
    ],
  },
  {
    id: "pso",
    shortTitle: "PSOs",
    title: "Program Specific Outcomes",
    subtitle: "Specialised expertise for contemporary business environments",
    description:
      "Program Specific Outcomes focus on applying specialised business knowledge, managing diverse teams and responding effectively to functional and sectoral challenges.",
    icon: Compass,
    items: [
      "Demonstrate expertise in specialized Functional and Sectorial areas of business through the application of advanced knowledge and skills.",
      "Lead and manage teams effectively and ethically, fostering collaboration and innovation within a diverse organizational environment.",
    ],
  },
];

export default function MBAPeoPsoPage() {
  return (
    <>
      <SiteHeader />

      {/* Premium hero */}
      <section className="relative isolate overflow-hidden bg-[#20235A] text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />

        <div
          aria-hidden="true"
          className="absolute -right-28 -top-24 h-[400px] w-[400px] rounded-full border border-[#D2B87C]/20 sm:h-[560px] sm:w-[560px]"
        />
        <div
          aria-hidden="true"
          className="absolute -right-12 top-0 h-[300px] w-[300px] rounded-full border border-[#D2B87C]/20 sm:h-[430px] sm:w-[430px]"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.2fr_0.8fr] lg:py-24">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#D2B87C]" />
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D2B87C] sm:text-sm">
                Nehru School of Management
              </p>
            </div>

            <h1 className="font-serif text-4xl font-medium leading-[1.12] tracking-tight sm:text-5xl lg:text-7xl">
              Defining the
              <br />
              <span className="italic text-[#D2B87C]">
                outcomes of leadership.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              Explore the educational objectives, programme outcomes and
              specialised competencies that shape the learning journey of MBA
              students at the Nehru School of Management.
            </p>

            <a
              href="#outcomes"
              className="mt-8 inline-flex items-center gap-3 border border-[#D2B87C]/60 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#D2B87C] hover:text-[#20235A]"
            >
              Explore programme outcomes
              <ArrowDown size={17} />
            </a>
          </div>

          <div className="relative hidden min-h-[320px] items-center justify-center lg:flex">
            <div className="absolute h-[290px] w-[290px] rounded-full border border-[#D2B87C]/30" />
            <div className="absolute h-[225px] w-[225px] rounded-full border border-[#D2B87C]/30" />
            <div className="absolute h-[160px] w-[160px] rounded-full bg-[#D2B87C]/10" />

            <div className="relative flex h-32 w-32 items-center justify-center border border-[#D2B87C]/60 bg-[#20235A]">
              <Award size={58} strokeWidth={1.1} className="text-[#D2B87C]" />
            </div>

            <div className="absolute right-0 top-6 max-w-[180px] border border-white/15 bg-white/[0.06] p-4 backdrop-blur-sm">
              <p className="font-serif text-2xl text-[#D2B87C]">01</p>
              <p className="mt-1 text-sm font-semibold">
                Educational objectives
              </p>
              <p className="mt-1 text-xs leading-5 text-white/60">
                Long-term professional development.
              </p>
            </div>

            <div className="absolute bottom-3 left-0 max-w-[190px] border border-white/15 bg-white/[0.06] p-4 backdrop-blur-sm">
              <p className="font-serif text-2xl text-[#D2B87C]">02 / 03</p>
              <p className="mt-1 text-sm font-semibold">
                Outcomes and competencies
              </p>
              <p className="mt-1 text-xs leading-5 text-white/60">
                Knowledge, application and specialised skills.
              </p>
            </div>
          </div>
        </div>

        <div className="relative border-t border-white/10">
          <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-white/10 px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-8">
            {outcomeSections.map((section, index) => {
              const Icon = section.icon;

              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="group flex items-center gap-4 py-5 transition-colors hover:bg-white/[0.04] sm:px-6 sm:py-6 first:sm:pl-0 last:sm:pr-0"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#D2B87C]/30 text-[#D2B87C]">
                    <Icon size={21} strokeWidth={1.5} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/50">
                      Section 0{index + 1}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      {section.shortTitle}
                    </p>
                  </div>
                  <ArrowDown
                    size={16}
                    className="shrink-0 text-[#D2B87C] transition-transform group-hover:translate-y-1"
                  />
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <main className="bg-[#FAF8F3] text-[#1E1917]">
        <InnerHeader />

        {/* Introduction */}
        <section id="outcomes" className="scroll-mt-24 px-6 py-14 sm:px-8 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8F7746]">
                Programme framework
              </p>
              <h2 className="mt-4 max-w-xl font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                From learning objectives to professional impact.
              </h2>
            </div>

            <div className="max-w-2xl lg:justify-self-end">
              <p className="text-base leading-8 text-[#5F5A52]">
                The MBA programme&apos;s outcomes establish a framework for
                developing management knowledge, critical thinking, ethical
                leadership and the ability to work effectively in changing
                business environments. Each category highlights a different
                dimension of student learning and professional growth.
              </p>
            </div>
          </div>
        </section>

        {/* Outcome categories */}
        <section className="px-6 pb-16 sm:px-8 sm:pb-20">
          <div className="mx-auto max-w-7xl space-y-8 sm:space-y-10">
            {outcomeSections.map((section, sectionIndex) => {
              const Icon = section.icon;

              return (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-28 overflow-hidden border border-[#E6E0D4] bg-white"
                >
                  <div className="grid lg:grid-cols-[300px_1fr]">
                    {/* Section identity panel */}
                    <div className="relative isolate overflow-hidden bg-[#20235A] p-6 text-white sm:p-8 lg:p-9">
                      <div
                        aria-hidden="true"
                        className="absolute -bottom-12 -right-12 -z-10 h-48 w-48 rounded-full border border-[#D2B87C]/25"
                      />
                      <div
                        aria-hidden="true"
                        className="absolute -bottom-5 -right-5 -z-10 h-32 w-32 rounded-full border border-[#D2B87C]/25"
                      />

                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D2B87C]">
                          Outcome 0{sectionIndex + 1}
                        </span>
                        <Icon
                          size={26}
                          strokeWidth={1.5}
                          className="text-[#D2B87C]"
                        />
                      </div>

                      <p className="mt-8 font-serif text-5xl text-white/15 sm:text-6xl">
                        0{sectionIndex + 1}
                      </p>

                      <h2 className="mt-3 font-serif text-2xl leading-tight sm:text-3xl">
                        {section.shortTitle}
                      </h2>

                      <div className="mt-5 h-px w-12 bg-[#D2B87C]" />

                      <p className="mt-5 text-sm leading-7 text-white/75">
                        {section.subtitle}
                      </p>
                    </div>

                    {/* Outcome statements */}
                    <div className="p-6 sm:p-8 lg:p-10">
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8F7746]">
                        {section.title}
                      </p>

                      <h3 className="mt-3 font-serif text-2xl leading-snug text-[#20235A] sm:text-3xl">
                        {section.id === "peo"
                          ? "Building long-term professional excellence"
                          : section.id === "po"
                            ? "Developing capable, responsible managers"
                            : "Applying specialised business knowledge"}
                      </h3>

                      <p className="mt-4 max-w-3xl text-sm leading-7 text-[#777066] sm:text-base">
                        {section.description}
                      </p>

                      <div className="mt-7 border-t border-[#EEE9DF]">
                        {section.items.map((item, itemIndex) => (
                          <div
                            key={`${section.id}-${itemIndex}`}
                            className="group flex items-start gap-4 border-b border-[#EEE9DF] py-5 last:border-b-0 sm:gap-5"
                          >
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#E6E0D4] bg-[#FAF8F3] font-serif text-sm text-[#8F7746] transition-colors group-hover:border-[#D2B87C] group-hover:bg-[#20235A] group-hover:text-white">
                              {String(itemIndex + 1).padStart(2, "0")}
                            </div>

                            <div className="flex-1 pt-1">
                              <p className="text-sm leading-7 text-[#4F4B45] sm:text-base">
                                {item}
                              </p>
                            </div>

                            <ChevronsRight
                              size={18}
                              aria-hidden="true"
                              className="mt-2 hidden shrink-0 text-[#B19A68] sm:block"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
              );
            })}
          </div>
        </section>

        {/* Closing banner */}
        <section className="px-6 pb-14 sm:px-8 sm:pb-20">
          <div className="relative mx-auto max-w-7xl overflow-hidden bg-[#20235A] px-7 py-10 text-white sm:px-12 sm:py-14 lg:px-16">
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-24 h-72 w-72 rounded-full border border-[#D2B87C]/25"
            />

            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D2B87C]">
                  Learning with direction
                </p>
                <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">
                  Knowledge with purpose.
                  <br />
                  <span className="italic text-[#D2B87C]">
                    Leadership with responsibility.
                  </span>
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
                  These outcomes reflect the programme&apos;s focus on
                  management understanding, ethical decision-making,
                  collaboration and professional development.
                </p>
              </div>

              <a
                href="#outcomes"
                className="inline-flex shrink-0 items-center justify-center gap-3 border border-[#D2B87C] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#D2B87C] hover:text-[#20235A]"
              >
                Review outcomes
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <FAQ />
      <FooterSection />
    </>
  );
}