
import type { Metadata } from "next";
import {
  ArrowDown,
  ArrowUpRight,
  Plane,
  Presentation,
  Users,
  BriefcaseBusiness,
  TrendingUp,
  Globe2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../DepartmentNav/page";
import TourGallery from "./TourGallery/page";
import FAQ from "../FAQ.tsx/page";

export const metadata: Metadata = {
  title: "Why MBA? | Nehru School of Management - NCERC",
  description:
    "Discover the MBA experience at Nehru School of Management, NCERC, with modern classrooms, passionate professors, domestic trips, industrial visits and national study tours.",
  keywords: [
    "Nehru School of Management",
    "NCERC MBA",
    "Why study MBA",
    "MBA colleges in Kerala",
    "MBA management education",
    "MBA industrial visits",
    "MBA study tours",
    "MBA leadership development",
  ],
  robots: {
    index: true,
    follow: true,
  },
};

type Highlight = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

const highlights: Highlight[] = [
  {
    number: "01",
    title: "A/C Classrooms",
    description:
      "The fully air-conditioned classrooms provide a conducive and comfortable environment where students can focus on learning, regardless of changing weather conditions.",
    icon: Presentation,
  },
  {
    number: "02",
    title: "Passionate Professors",
    description:
      "Learn from dedicated educators who encourage professional growth and help students explore career opportunities, entrepreneurship and business incubation.",
    icon: Users,
  },
  {
    number: "03",
    title: "Domestic Trips",
    description:
      "Domestic trips across India provide intellectual and cultural experiences, helping NSM MBA students understand diverse perspectives and prepare to lead in a global economy.",
    icon: Plane,
  },
];

const learningBenefits = [
  {
    number: "01",
    title: "Business Acumen",
    description:
      "Build a broader understanding of management, business strategy and organisational decision-making.",
    icon: BriefcaseBusiness,
  },
  {
    number: "02",
    title: "Career Growth",
    description:
      "Develop the professional confidence and practical perspective needed to pursue leadership opportunities.",
    icon: TrendingUp,
  },
  {
    number: "03",
    title: "A Wider Perspective",
    description:
      "Explore different industries, cultures and business environments through experiential learning.",
    icon: Globe2,
  },
];

export default function MBAWhyMbaPage() {
  return (
    <>
      <SiteHeader />

      <main className="overflow-hidden bg-white text-[#1E1917]">
        {/* HERO SECTION */}
        <section className="relative isolate overflow-hidden bg-[#20235A]">
          {/* Background details */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#20235A] via-[#20235A] to-[#25285F]" />

            <div
              className="absolute right-0 top-0 hidden h-full w-[48%] opacity-[0.12] lg:block"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(210,184,124,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(210,184,124,0.35) 1px, transparent 1px)",
                backgroundSize: "42px 42px",
              }}
            />

            <div className="absolute -right-40 -top-48 h-[450px] w-[450px] rounded-full border border-[#D2B87C]/15 sm:h-[600px] sm:w-[600px] lg:right-[-5%] lg:top-[-45%] lg:h-[780px] lg:w-[780px]" />

            <div className="absolute -right-24 -top-32 h-[340px] w-[340px] rounded-full border border-white/[0.08] sm:h-[460px] sm:w-[460px] lg:right-[2%] lg:top-[-25%] lg:h-[600px] lg:w-[600px]" />

            <div className="absolute bottom-0 left-0 h-1 w-32 bg-[#D2B87C] sm:w-48" />
          </div>

          <div className="relative mx-auto max-w-[1440px] px-5 py-14 sm:px-10 sm:py-20 lg:px-16 lg:py-20">
            <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
              {/* Hero content */}
              <div className="relative z-10 max-w-3xl">
                <div className="flex items-center gap-3">
                  <span className="h-px w-9 bg-[#D2B87C]" />
                  <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#D2B87C] sm:text-xs">
                    Nehru School of Management
                  </p>
                </div>

                <h1 className="mt-5 font-serif text-[46px] font-normal leading-[1.04] tracking-[-0.035em] text-white sm:text-6xl lg:text-[72px]">
                  Why choose
                  <br />
                  <span className="italic text-[#D2B87C]">
                    an MBA?
                  </span>
                </h1>

                <p className="mt-6 max-w-xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
                  More than a qualification, an MBA is an opportunity
                  to develop business insight, discover new perspectives
                  and prepare for the responsibilities of leadership.
                </p>

                <a
                  href="#why-mba"
                  className="mt-8 inline-flex items-center gap-3 bg-[#D2B87C] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#20235A] transition-colors duration-300 hover:bg-white"
                >
                  Explore the experience
                  <ArrowDown size={15} strokeWidth={1.7} />
                </a>
              </div>

              {/* Decorative MBA monogram */}
              <div
                aria-hidden="true"
                className="relative mx-auto flex aspect-square w-full max-w-[410px] items-center justify-center lg:ml-auto lg:mr-0"
              >
                <div className="absolute inset-[4%] rotate-45 border border-[#D2B87C]/25" />
                <div className="absolute inset-[10%] rounded-full border border-white/10" />
                <div className="absolute inset-[18%] rounded-full border border-[#D2B87C]/35" />
                <div className="absolute inset-[27%] rounded-full border border-white/15" />

                <div className="absolute left-[7%] right-[7%] top-1/2 h-px bg-gradient-to-r from-transparent via-[#D2B87C]/60 to-transparent" />
                <div className="absolute bottom-[7%] left-1/2 top-[7%] w-px bg-gradient-to-b from-transparent via-[#D2B87C]/40 to-transparent" />

                <div className="relative flex h-[54%] w-[54%] flex-col items-center justify-center border border-[#D2B87C]/40 bg-[#20235A]/90">
                  <span className="font-serif text-6xl leading-none tracking-[-0.06em] text-white sm:text-7xl">
                    M<span className="italic text-[#D2B87C]">B</span>A
                  </span>

                  <span className="mt-4 h-px w-10 bg-[#D2B87C]" />

                  <span className="mt-3 text-center text-[8px] font-medium uppercase tracking-[0.2em] text-white/60">
                    Think
                    <br />
                    Beyond
                  </span>
                </div>

                <div className="absolute right-0 top-[14%] border border-white/10 bg-[#20235A] px-3 py-2 sm:px-4">
                  <span className="block text-[8px] uppercase tracking-[0.17em] text-[#D2B87C]">
                    Discover
                  </span>
                  <span className="mt-1 block font-serif text-sm text-white sm:text-base">
                    Your potential.
                  </span>
                </div>

                <div className="absolute bottom-[11%] left-0 border-l-2 border-[#D2B87C] bg-[#20235A] px-3 py-3 sm:px-4">
                  <span className="block text-[8px] uppercase tracking-[0.17em] text-white/45">
                    Develop
                  </span>
                  <span className="mt-1 block font-serif text-sm text-white sm:text-base">
                    Your future.
                  </span>
                </div>

                <span className="absolute left-[12%] top-[13%] h-2 w-2 bg-[#D2B87C]" />
                <span className="absolute bottom-[17%] right-[12%] h-2 w-2 bg-[#D2B87C]" />
              </div>
            </div>

            <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-5">
              <span className="text-[9px] uppercase tracking-[0.18em] text-white/40">
                Knowledge · Experience · Leadership
              </span>
              <span className="font-serif text-sm italic text-white/45">
                NSM / MBA
              </span>
            </div>
          </div>
        </section>

        {/* DEPARTMENT NAVIGATION */}
        <div className="relative z-10 border-b border-[#20235A]/10 bg-white">
          <InnerHeader />
        </div>

        {/* INTRODUCTION AND HIGHLIGHTS */}
        <section
          id="why-mba"
          className="relative overflow-hidden bg-[#FAF7F2] py-16 sm:py-20 lg:py-28"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-28 top-20 h-72 w-72 rounded-full border border-[#20235A]/[0.06] sm:h-96 sm:w-96"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 top-32 h-56 w-56 rounded-full border border-[#D2B87C]/20 sm:h-72 sm:w-72"
          />

          <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            {/* Intro heading */}
            <div className="grid items-start gap-8 lg:grid-cols-[1fr_0.75fr] lg:gap-16">
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#B99A58]" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8F7746] sm:text-xs">
                    Your Next Chapter
                  </span>
                </div>

                <h2 className="max-w-2xl font-serif text-4xl font-medium leading-[1.12] tracking-tight text-[#20235A] sm:text-5xl lg:text-6xl">
                  More than a degree.
                  <br />
                  <span className="italic text-[#B99A58]">
                    A new perspective.
                  </span>
                </h2>
              </div>

              <div className="border-l-2 border-[#D2B87C] pl-5 sm:pl-7">
                <p className="text-sm leading-7 text-[#1E1917]/75 sm:text-base sm:leading-8">
                  Deciding to study an MBA (Master of Business
                  Administration) is a big decision for aspiring global
                  managers. An MBA can offer a wealth of advantages,
                  particularly when it is offered by a reputable business
                  school.
                </p>

                <p className="mt-4 text-sm leading-7 text-[#1E1917]/65 sm:text-base sm:leading-8">
                  Higher earning potential, access to management
                  opportunities and the confidence to pursue
                  entrepreneurship are among the possibilities that
                  make management education valuable.
                </p>
              </div>
            </div>

            {/* Feature section heading */}
            <div className="mb-8 mt-16 flex flex-col justify-between gap-4 border-b border-[#20235A]/15 pb-6 sm:mt-20 sm:flex-row sm:items-end">
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#B99A58]" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8F7746] sm:text-xs">
                    The NSM Experience
                  </span>
                </div>

                <h3 className="font-serif text-3xl font-medium text-[#20235A] sm:text-4xl lg:text-5xl">
                  What makes the difference?
                </h3>
              </div>

              <p className="max-w-md text-sm leading-7 text-[#1E1917]/65 sm:text-base">
                An environment designed to support learning,
                professional development and experiences beyond
                the classroom.
              </p>
            </div>

            {/* Highlight cards */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.number}
                    className="group relative flex min-h-[310px] flex-col overflow-hidden border border-[#20235A]/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#B99A58]/60 hover:shadow-[0_16px_40px_rgba(32,35,90,0.08)] sm:p-8"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex h-14 w-14 items-center justify-center bg-[#20235A]/[0.05] text-[#20235A] transition-colors duration-300 group-hover:bg-[#20235A] group-hover:text-[#D2B87C]">
                        <Icon
                          size={25}
                          strokeWidth={1.6}
                          aria-hidden="true"
                        />
                      </div>

                      <span className="font-serif text-4xl text-[#20235A]/10 transition-colors group-hover:text-[#B99A58]/50">
                        {item.number}
                      </span>
                    </div>

                    <h4 className="mt-8 font-serif text-xl font-medium text-[#20235A] sm:text-2xl">
                      {item.title}
                    </h4>

                    <div className="mt-4 h-px w-10 bg-[#D2B87C] transition-all duration-300 group-hover:w-16" />

                    <p className="mt-5 text-sm leading-7 text-[#1E1917]/65">
                      {item.description}
                    </p>

                    <div className="mt-auto flex justify-end pt-6">
                      <ArrowUpRight
                        size={18}
                        className="text-[#B99A58] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </div>

                    <div
                      aria-hidden="true"
                      className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#D2B87C] transition-all duration-500 group-hover:w-full"
                    />
                  </article>
                );
              })}
            </div>

            {/* MBA benefits */}
            <div className="mt-16 grid gap-10 lg:mt-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#B99A58]" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8F7746] sm:text-xs">
                    The Bigger Picture
                  </span>
                </div>

                <h3 className="font-serif text-3xl font-medium leading-tight text-[#20235A] sm:text-4xl">
                  Learn today.
                  <br />
                  Lead tomorrow.
                </h3>

                <p className="mt-5 max-w-md text-sm leading-7 text-[#1E1917]/65 sm:text-base sm:leading-8">
                  Management education can help you connect classroom
                  knowledge with business challenges, professional
                  relationships and a broader understanding of the
                  world around you.
                </p>
              </div>

              <div className="divide-y divide-[#20235A]/10 border-y border-[#20235A]/10">
                {learningBenefits.map((benefit) => {
                  const Icon = benefit.icon;

                  return (
                    <article
                      key={benefit.number}
                      className="group grid grid-cols-[48px_1fr_20px] items-start gap-4 py-6 sm:grid-cols-[60px_1fr_24px] sm:gap-5"
                    >
                      <span className="flex h-11 w-11 items-center justify-center border border-[#20235A]/10 text-[#8F7746] transition-colors duration-300 group-hover:border-[#D2B87C] group-hover:bg-white sm:h-12 sm:w-12">
                        <Icon size={20} strokeWidth={1.5} />
                      </span>

                      <div>
                        <h4 className="font-serif text-lg font-medium text-[#20235A] sm:text-xl">
                          {benefit.title}
                        </h4>
                        <p className="mt-2 text-sm leading-7 text-[#1E1917]/65">
                          {benefit.description}
                        </p>
                      </div>

                      <ArrowUpRight
                        size={18}
                        className="mt-1 text-[#B99A58] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </article>
                  );
                })}
              </div>
            </div>

            {/* Study tour section */}
            <div
              id="study-tour"
              className="mt-16 scroll-mt-24 sm:mt-24"
            >
              <div className="mb-8 flex flex-col justify-between gap-5 border-b border-[#20235A]/15 pb-6 sm:flex-row sm:items-end">
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <span className="h-px w-8 bg-[#B99A58]" />
                    <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8F7746] sm:text-xs">
                      Learning Beyond Campus
                    </span>
                  </div>

                  <h3 className="font-serif text-3xl font-medium text-[#20235A] sm:text-4xl lg:text-5xl">
                    National IV & Study Tour
                  </h3>
                </div>

                <p className="max-w-md text-sm leading-7 text-[#1E1917]/65 sm:text-base">
                  Discover learning experiences, destinations and
                  memories from NSM's educational tours and visits.
                </p>
              </div>

              <TourGallery />
            </div>

            {/* Closing statement */}
            <div className="relative mt-16 overflow-hidden bg-[#20235A] px-6 py-8 sm:px-10 sm:py-10 lg:px-12">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 -top-20 h-56 w-56 rounded-full border border-white/10"
              />

              <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div className="max-w-2xl">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="h-px w-8 bg-[#D2B87C]" />
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C] sm:text-xs">
                      Your Future Starts Here
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl leading-snug text-white sm:text-3xl">
                    Build knowledge. Discover possibilities.
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-7 text-white/70">
                    Explore the learning experiences that help shape
                    confident professionals and responsible leaders.
                  </p>
                </div>

                <a
                  href="#why-mba"
                  className="inline-flex w-fit shrink-0 items-center gap-3 border border-[#D2B87C]/60 px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#D2B87C] transition-colors hover:bg-[#D2B87C] hover:text-[#20235A]"
                >
                  Back to top
                  <ArrowUpRight size={16} />
                </a>
              </div>

              <div
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-1 w-24 bg-[#D2B87C]"
              />
            </div>
          </div>
        </section>
      </main>

      <FAQ />
      <FooterSection />
    </>
  );
}