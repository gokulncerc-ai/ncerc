import type { ReactNode } from "react";

import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  Leaf,
  Sun,
  Zap,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";

const courseContentLeft: string[] = [
  "Applied Mathematics",
  "Advanced Thermodynamics",
  "Advanced Water Power Technology",
  "Electro-Mechanical Energy Conversion",
  "Solar Energy Technology",
  "Renewable Energy Resources",
];

const courseContentRight: string[] = [
  "Environmental Consequences of Energy Production",
  "Energy Conservation Technology",
  "Power System Planning and Management",
  "Design of Integrated Energy Management Systems",
  "Seminar",
  "Project Work",
];

const quickHighlights = [
  {
    number: "01",
    title: "Energy Resources",
    description:
      "Exploiting the various energy resources to meet the growing per capita electrical energy need.",
    icon: Zap,
  },
  {
    number: "02",
    title: "Environmental Awareness",
    description:
      "Giving due consideration to the environmental consequences of energy production.",
    icon: Leaf,
  },
  {
    number: "03",
    title: "Energy Management",
    description:
      "Developing the human resources needed for energy management, research and development.",
    icon: Sun,
  },
];

const heroTopics: string[] = [
  "Solar Energy Technology",
  "Renewable Energy Resources",
  "Energy Conservation Technology",
  "Integrated Energy Management Systems",
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
}) {
  return (
    <div className="mb-10">
      <div className="mb-5 flex items-center gap-3">
        <span className="h-px w-9 bg-[#8F7746]" />

        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8F7746] sm:text-xs">
          {eyebrow}
        </p>
      </div>

      <h2 className="font-serif text-4xl font-normal leading-[1.12] tracking-[-0.025em] text-[#20235A] sm:text-5xl lg:text-[52px]">
        {title}
      </h2>

      {description && (
        <p className="mt-5 max-w-2xl text-sm leading-7 text-[#1E1917]/65 sm:text-base sm:leading-8">
          {description}
        </p>
      )}
    </div>
  );
}

function CourseList({
  items,
  startIndex,
}: {
  items: string[];
  startIndex: number;
}) {
  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <article
          key={item}
          className="group border border-[#20235A]/10 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D2B87C] sm:p-6"
        >
          <div className="flex items-center gap-4 sm:gap-5">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#20235A] text-[10px] font-semibold text-[#D2B87C]">
              {String(startIndex + index + 1).padStart(2, "0")}
            </div>

            <h3 className="min-w-0 font-serif text-lg leading-snug text-[#20235A] sm:text-xl">
              {item}
            </h3>
          </div>

          <div className="mt-5 h-px w-12 bg-[#D2B87C] transition-all duration-300 group-hover:w-full" />
        </article>
      ))}
    </div>
  );
}

export default function EnergySystemPage() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-[#FAF7F2] text-[#1E1917]">
        {/* HERO */}
        <section className="relative overflow-hidden bg-[#20235A] text-white">
          {/* Decorative circles */}
          <div className="pointer-events-none absolute -right-32 -top-36 h-[500px] w-[500px] rounded-full border border-[#D2B87C]/10" />
          <div className="pointer-events-none absolute -right-12 -top-20 h-[340px] w-[340px] rounded-full border border-[#D2B87C]/15" />
          <div className="pointer-events-none absolute bottom-[-180px] left-[-140px] h-[400px] w-[400px] rounded-full border border-white/5" />

          <div className="relative mx-auto max-w-[1440px] px-5 py-14 sm:px-8 sm:py-20 lg:px-14 lg:py-24 xl:px-20">
            <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
              {/* Hero Content */}
              <div className="relative z-10">
                <div className="mb-7 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#D2B87C]" />

                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D2B87C] sm:text-xs">
                    Departments
                  </p>
                </div>

                <h1 className="max-w-4xl font-serif text-[42px] font-normal leading-[1.06] tracking-[-0.035em] sm:text-[56px] lg:text-[64px] xl:text-[72px]">
                  M.Tech.
                  <br />
                  <span className="italic text-[#D2B87C]">Energy Systems</span>
                </h1>

                <p className="mt-7 max-w-2xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
                  A post graduate programme developing the human resources
                  needed for studies, research and development in the
                  important field of energy.
                </p>

                <div className="mt-9 flex flex-wrap gap-4">
                  <a
                    href="#about"
                    className="group inline-flex min-h-12 items-center gap-3 bg-[#D2B87C] px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#20235A] transition-colors duration-300 hover:bg-white"
                  >
                    Explore Programme

                    <ArrowRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>

                  <a
                    href="#course-content"
                    className="inline-flex min-h-12 items-center gap-3 border border-white/25 px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:border-[#D2B87C] hover:text-[#D2B87C]"
                  >
                    Course Content
                  </a>
                </div>

                <div className="mt-12 flex items-center gap-3 text-xs text-white/50">
                  <span>Departments</span>

                  <span className="text-[#D2B87C]">/</span>

                  <span className="text-white/80">M.Tech. Energy Systems</span>
                </div>
              </div>

              {/* Hero Panel */}
              <div className="relative mx-auto w-full max-w-[470px] lg:ml-auto">
                <div className="absolute -bottom-4 -left-4 right-4 top-4 border border-[#D2B87C]/60 sm:-bottom-5 sm:-left-5 sm:right-5 sm:top-5" />

                <div className="relative overflow-hidden bg-[#30336B] p-8 sm:p-10">
                  <div className="flex h-14 w-14 items-center justify-center border border-[#D2B87C]/40 text-[#D2B87C]">
                    <Zap size={24} strokeWidth={1.5} />
                  </div>

                  <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C] sm:text-xs">
                    Programme Focus
                  </p>

                  <h2 className="mt-3 font-serif text-3xl leading-tight text-white sm:text-4xl">
                    Energy for a sustainable future.
                  </h2>

                  <ul className="mt-8 space-y-4 border-t border-white/10 pt-7">
                    {heroTopics.map((topic) => (
                      <li key={topic} className="flex items-center gap-3">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#D2B87C]" />

                        <span className="text-sm text-white/75">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Floating badge */}
                <div className="absolute -right-2 top-8 hidden border border-[#D2B87C]/60 bg-[#20235A] px-4 py-3 sm:-right-4 sm:block sm:px-5 sm:py-4">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-[#D2B87C]">
                    M.Tech.
                  </p>

                  <p className="mt-1 font-serif text-lg text-white">
                    Energy Systems
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-1 w-full bg-[#D2B87C]" />
        </section>

        {/* QUICK HIGHLIGHTS */}
        <section className="border-b border-[#20235A]/10 bg-white">
          <div className="mx-auto grid max-w-[1440px] grid-cols-1 px-5 sm:px-8 md:grid-cols-3 lg:px-14 xl:px-20">
            {quickHighlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className={`flex items-start gap-4 py-7 md:py-8 ${
                    index !== quickHighlights.length - 1
                      ? "border-b border-[#20235A]/10 md:border-b-0 md:border-r"
                      : ""
                  } ${
                    index === 1
                      ? "md:px-8"
                      : index === 2
                        ? "md:pl-8"
                        : "md:pr-8"
                  }`}
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#F2EFE8] text-[#8F7746]">
                    <Icon size={21} strokeWidth={1.5} />
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                      {item.number}
                    </p>

                    <p className="mt-1 font-serif text-lg text-[#20235A]">
                      {item.title}
                    </p>

                    <p className="mt-1 text-xs leading-5 text-[#1E1917]/55">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ABOUT */}
        <section
          id="about"
          className="scroll-mt-24 bg-[#FAF7F2] px-5 py-16 sm:px-8 sm:py-24 lg:px-14 lg:py-28 xl:px-20"
        >
          <div className="mx-auto max-w-[1200px]">
            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
                <SectionHeading
                  eyebrow="About"
                  title={
                    <>
                      Powering
                      <br />
                      <span className="italic">tomorrow.</span>
                    </>
                  }
                />
              </div>

              <div className="relative">
                <div className="mb-7 flex items-center gap-3">
                  <BookOpen
                    size={20}
                    strokeWidth={1.5}
                    className="text-[#8F7746]"
                  />

                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                    M.Tech. Energy Systems
                  </p>
                </div>

                <p className="text-justify text-[15px] leading-[2] text-[#1E1917]/75 sm:text-base sm:leading-[2.05]">
                  The Standards of living of a country is related to the
                  percapita electrical energy consumption. There is a growing
                  need to increase this figure in our country. The various
                  energy resources have to be exploited and also consideration
                  is to be given to the environmental consequences of energy
                  production. Energy management also is an important
                  criterion. This post graduate programme will concentrate on
                  the development of human resources needed in this very
                  important field of studies, research and development.
                </p>

                <div className="mt-9 border-l-2 border-[#D2B87C] bg-white px-5 py-5 sm:px-6">
                  <p className="font-serif text-xl leading-8 text-[#20235A] sm:text-2xl">
                    Developing the human resources for studies, research and
                    development in energy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COURSE CONTENT */}
        <section
          id="course-content"
          className="scroll-mt-24 bg-[#F2EFE8] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24 xl:px-20"
        >
          <div className="mx-auto max-w-[1200px]">
            <SectionHeading
              eyebrow="Course Content"
              title={
                <>
                  What you will
                  <br />
                  <span className="italic">study.</span>
                </>
              }
            />

            <div className="mb-8 flex items-center gap-3 border-b border-[#20235A]/10 pb-5">
              <GraduationCap
                size={20}
                strokeWidth={1.5}
                className="text-[#8F7746]"
              />

              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                Subjects, Seminar &amp; Project Work
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <CourseList items={courseContentLeft} startIndex={0} />

              <CourseList
                items={courseContentRight}
                startIndex={courseContentLeft.length}
              />
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}