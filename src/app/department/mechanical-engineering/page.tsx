import type { ReactNode } from "react";

import Link from "next/link";
import Image from "next/image";

import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  GraduationCap,
  Lightbulb,
  Target,
  Users,
  Wrench,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "./DepartmentNav/DepartmentNav";

const HOD_IMAGE =
  "/images/department/Dr Benny Paul-hod.jpeg";

type Point = {
  label: string;
  text: string;
};

const missionPoints: Point[] = [
  {
    label: "MD 1",
    text: "Imparting high impact education by providing conductive teaching learning environment.",
  },
  {
    label: "MD 2",
    text: "Fostering effective modes of continuous learning process with moral and ethical values.",
  },
  {
    label: "MD 3",
    text: "Enhancing leadership qualities with social commitment, professional attitude, unity, team spirit and communication skill.",
  },
  {
    label: "MD 4",
    text: "Introducing present scenario in research and development through collaborative efforts blended with industry and institution.",
  },
];

const peoPoints: Point[] = [
  {
    label: "PEO 1",
    text: "Graduates shall have strong practical and technical exposures in the field of Mechanical Engineering and will contribute to the society through Innovation and Enterprise.",
  },
  {
    label: "PEO 2",
    text: "Graduates will have the demonstrated ability to analyze, formulate and solve design engineering/thermal engineering/materials and manufacturing/design issues and real life problems.",
  },
  {
    label: "PEO 3",
    text: "Graduates will be capable of pursuing Mechanical Engineering profession with good communication skills, leadership qualities, team spirit and professional ethics.",
  },
  {
    label: "PEO 4",
    text: "Graduates will sustain an appetite for continuous learning by pursuing higher education and research in the allied areas of technology.",
  },
];

const poPoints: Point[] = [
  {
    label: "Engineering Knowledge",
    text: "Apply knowledge of mathematics, science, engineering fundamentals, and specialization.",
  },
  {
    label: "Problem Analysis",
    text: "Identify, formulate, and analyze complex problems using first principles.",
  },
  {
    label: "Design/Development of Solutions",
    text: "Design solutions for complex engineering problems.",
  },
  {
    label: "Conduct Investigations of Complex Problems",
    text: "Use research-based methods to reach conclusions.",
  },
  {
    label: "Engineering Tool Usage",
    text: "Apply modern tools, techniques, and IT tools.",
  },
  {
    label: "The Engineer and Society",
    text: "Apply reasoning to address societal, health, safety, legal, and cultural issues.",
  },
  {
    label: "Environment and Sustainability",
    text: "Understand the impact of professional solutions on the environment.",
  },
  {
    label: "Ethics",
    text: "Apply ethical principles and commit to professional ethics.",
  },
  {
    label: "Individual and Teamwork",
    text: "Function effectively as an individual or in teams.",
  },
  {
    label: "Communication",
    text: "Communicate effectively on complex activities.",
  },
  {
    label: "Life-long Learning",
    text: "Engage in independent and life-long learning in the context of technological change.",
  },
];

const psoPoints: Point[] = [
  {
    label: "PSO 1",
    text: "Students will be able to apply principles of engineering, basic sciences & analytics including multi variant calculus & higher order partial differential equations.",
  },
  {
    label: "PSO 2",
    text: "Students will be able to perform modeling, analyzing, designing & simulating physical systems, components & processes.",
  },
  {
    label: "PSO 3",
    text: "Students will be able to work professionally on mechanical systems, thermal systems & production systems.",
  },
];

const quickHighlights = [
  {
    number: "01",
    title: "Industry Integrated",
    description:
      "A learning environment designed around practical exposure, industry interaction and professional readiness.",
    icon: Wrench,
  },
  {
    number: "02",
    title: "Innovation & Research",
    description:
      "Encouraging students to explore research, development, design and emerging engineering technologies.",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Professional Growth",
    description:
      "Developing communication, leadership, teamwork and ethical values alongside technical competence.",
    icon: Users,
  },
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

function ObjectiveList({
  points,
  numbered = false,
}: {
  points: Point[];
  numbered?: boolean;
}) {
  return (
    <div className="space-y-3">
      {points.map((point, index) => (
        <article
          key={point.label}
          className="group border border-[#20235A]/10 bg-[#FAF7F2] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D2B87C] sm:p-6"
        >
          <div className="flex items-start gap-4 sm:gap-5">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#20235A] text-[10px] font-semibold text-[#D2B87C]">
              {numbered
                ? String(index + 1).padStart(2, "0")
                : point.label.split(" ")[0]}
            </div>

            <div className="min-w-0">
              <h3 className="font-serif text-lg leading-tight text-[#20235A] sm:text-xl">
                {point.label}
              </h3>

              <p className="mt-2 text-sm leading-7 text-[#1E1917]/65 sm:text-[15px] sm:leading-8">
                {point.text}
              </p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

function EditorialSection({
  eyebrow,
  title,
  description,
  children,
  tone = "light",
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  children: ReactNode;
  tone?: "light" | "warm";
}) {
  const background =
    tone === "warm" ? "bg-[#F2EFE8]" : "bg-[#FAF7F2]";

  return (
    <section className={`${background} px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24 xl:px-20`}>
      <div className="mx-auto max-w-[1200px]">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        {children}
      </div>
    </section>
  );
}

export default function MechanicalEngineeringIndustryIntegratedPage() {
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
                    Department of Mechanical Engineering
                  </p>
                </div>

                <h1 className="max-w-4xl font-serif text-[42px] font-normal leading-[1.06] tracking-[-0.035em] sm:text-[56px] lg:text-[64px] xl:text-[72px]">
                  Mechanical
                  <br />
                  Engineering
                  <br />
                  <span className="italic text-[#D2B87C]">
                    Industry Integrated
                  </span>
                </h1>

                <p className="mt-7 max-w-2xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
                  Building technically capable, innovative and socially
                  responsible mechanical engineers through industry-oriented
                  education, research and professional exposure.
                </p>

                <div className="mt-9 flex flex-wrap gap-4">
                  <a
                    href="#about"
                    className="group inline-flex min-h-12 items-center gap-3 bg-[#D2B87C] px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#20235A] transition-colors duration-300 hover:bg-white"
                  >
                    Explore Department

                    <ArrowRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>

                  <Link
                    href="/department/mechanical-engineering/hod"
                    className="inline-flex min-h-12 items-center gap-3 border border-white/25 px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:border-[#D2B87C] hover:text-[#D2B87C]"
                  >
                    HOD&apos;s Desk
                  </Link>
                </div>

                <div className="mt-12 flex items-center gap-3 text-xs text-white/50">
                  <Link
                    href="/department/mechanical-engineering"
                    className="transition-colors hover:text-white"
                  >
                    Departments
                  </Link>

                  <span className="text-[#D2B87C]">/</span>

                  <span className="text-white/80">
                    Mechanical Engineering
                  </span>
                </div>
              </div>

              {/* HOD Image */}
              <div className="relative mx-auto w-full max-w-[470px] lg:ml-auto">
                <div className="absolute -bottom-4 -left-4 right-4 top-4 border border-[#D2B87C]/60 sm:-bottom-5 sm:-left-5 sm:right-5 sm:top-5" />

                <div className="relative aspect-[4/4.7] overflow-hidden bg-[#30336B]">
                  <Image
                    src={encodeURI(HOD_IMAGE)}
                    alt="Dr. Benny Paul, Head of the Department of Mechanical Engineering"
                    fill
                    priority
                    sizes="(min-width: 1024px) 470px, 100vw"
                    className="object-cover object-top"
                  />

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#151638]/95 via-[#151638]/50 to-transparent px-6 pb-7 pt-28 sm:px-8 sm:pb-9">
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C] sm:text-xs">
                      Head of the Department
                    </p>

                    <h2 className="font-serif text-3xl leading-tight text-white sm:text-4xl">
                      Dr. Benny Paul
                    </h2>

                    <p className="mt-2 text-sm text-white/75">
                      Professor &amp; HoD
                    </p>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -right-2 top-8 hidden border border-[#D2B87C]/60 bg-[#20235A] px-4 py-3 sm:-right-4 sm:block sm:px-5 sm:py-4">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-[#D2B87C]">
                    Mechanical Engineering
                  </p>

                  <p className="mt-1 font-serif text-lg text-white">
                    Innovation &amp; Excellence
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-1 w-full bg-[#D2B87C]" />
        </section>

        {/* DEPARTMENT NAVIGATION */}
        <InnerHeader activeTab="About" />

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
                  eyebrow="About the Department"
                  title={
                    <>
                      Engineering
                      <br />
                      <span className="italic">with purpose.</span>
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
                    Mechanical Engineering
                  </p>
                </div>

                <p className="text-justify text-[15px] leading-[2] text-[#1E1917]/75 sm:text-base sm:leading-[2.05]">
                  The department of Mechanical Engineering (Industry
                  Integrated) is equipped with state-of-the-art workshops,
                  laboratories and computing facilities. The department has
                  highly qualified and experienced faculty members. Approved by
                  AICTE- New Delhi and Accredited by NAAC, Affiliated to the
                  University of A P J Abdul Kalam Technological University,
                  Kerala. The faculty members actively engage in research and
                  constantly publish papers in International and National
                  Journals. Guest lectures and industrial visits are
                  periodically arranged for the students to enhance their
                  curriculum. It strives for all round excellence in students,
                  encouraging them in all extra-curricular activities. In
                  alignment with the vision of NCERC, the department also
                  fosters creative thought process and provides opportunities
                  to our students to think out of box in order to mould world
                  class professionals, capable of contributing to the welfare
                  of the society.
                </p>

                <div className="mt-9 border-l-2 border-[#D2B87C] bg-white px-5 py-5 sm:px-6">
                  <p className="font-serif text-xl leading-8 text-[#20235A] sm:text-2xl">
                    A practical, research-oriented environment for the
                    mechanical engineers of tomorrow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VISION */}
        <section className="bg-[#20235A] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-14 lg:py-24 xl:px-20">
          <div className="mx-auto max-w-[1200px]">
            <div className="grid items-center gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-9 bg-[#D2B87C]" />

                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D2B87C] sm:text-xs">
                    Department Vision
                  </p>
                </div>

                <h2 className="font-serif text-4xl font-normal leading-tight sm:text-5xl lg:text-[54px]">
                  Shaping
                  <br />
                  <span className="italic text-[#D2B87C]">
                    global engineers.
                  </span>
                </h2>
              </div>

              <div className="border-l border-[#D2B87C]/40 pl-6 sm:pl-8">
                <p className="font-serif text-2xl leading-[1.55] text-white/90 sm:text-3xl">
                  &ldquo;Producing internationally competitive Mechanical
                  Engineers with social responsibilities and sustainable
                  employability through viable strategies as well as competent
                  exposure oriented quality education.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* MISSION */}
        <EditorialSection
          eyebrow="Mission"
          title={
            <>
              Building the
              <br />
              <span className="italic">right foundations.</span>
            </>
          }
          description="Our mission focuses on creating a strong academic environment while developing technical competence, leadership, ethics and social responsibility."
        >
          <div className="grid gap-4 md:grid-cols-2">
            {missionPoints.map((point) => (
              <article
                key={point.label}
                className="group border border-[#20235A]/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D2B87C] sm:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-serif text-sm text-[#8F7746]">
                    {point.label}
                  </span>

                  <Target
                    size={22}
                    strokeWidth={1.4}
                    className="text-[#8F7746] transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <p className="mt-7 text-sm leading-7 text-[#1E1917]/70 sm:text-[15px] sm:leading-8">
                  {point.text}
                </p>

                <div className="mt-7 h-px w-12 bg-[#D2B87C] transition-all duration-300 group-hover:w-full" />
              </article>
            ))}
          </div>
        </EditorialSection>

        {/* PEO */}
        <EditorialSection
          eyebrow="Academic Objectives"
          title={
            <>
              Preparing students
              <br />
              <span className="italic">for professional life.</span>
            </>
          }
          description="The Program Educational Objectives describe the professional capabilities and continuous development expected from Mechanical Engineering graduates."
          tone="warm"
        >
          <ObjectiveList points={peoPoints} />
        </EditorialSection>

        {/* PO */}
        <section className="bg-[#FAF7F2] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24 xl:px-20">
          <div className="mx-auto max-w-[1200px]">
            <SectionHeading
              eyebrow="Program Outcomes"
              title={
                <>
                  What our graduates
                  <br />
                  <span className="italic">will be able to do.</span>
                </>
              }
              description="Engineering graduates will be able to apply technical knowledge, solve complex problems, communicate effectively and contribute responsibly to society."
            />

            <div className="mb-8 flex items-center gap-3 border-b border-[#20235A]/10 pb-5">
              <GraduationCap
                size={20}
                strokeWidth={1.5}
                className="text-[#8F7746]"
              />

              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                Engineering Graduate Capabilities
              </p>
            </div>

            <ObjectiveList points={poPoints} numbered />
          </div>
        </section>

        {/* PSO */}
        <EditorialSection
          eyebrow="Program Specific Outcomes"
          title={
            <>
              Mechanical expertise
              <br />
              <span className="italic">in practice.</span>
            </>
          }
          description="Program Specific Outcomes connect the academic foundation of Mechanical Engineering with modelling, analysis, simulation and professional practice."
          tone="warm"
        >
          <div className="grid gap-5 md:grid-cols-3">
            {psoPoints.map((point, index) => (
              <article
                key={point.label}
                className="group flex h-full flex-col border border-[#20235A]/10 bg-[#FAF7F2] p-6 sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif text-sm text-[#8F7746]">
                    {point.label}
                  </span>

                  <CheckCircle2
                    size={22}
                    strokeWidth={1.4}
                    className="text-[#8F7746] transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <h3 className="mt-8 font-serif text-2xl leading-tight text-[#20235A]">
                  {index === 0
                    ? "Engineering Foundations"
                    : index === 1
                      ? "Modelling & Simulation"
                      : "Professional Practice"}
                </h3>

                <p className="mt-4 flex-1 text-sm leading-7 text-[#1E1917]/65">
                  {point.text}
                </p>

                <div className="mt-7 h-px w-12 bg-[#D2B87C] transition-all duration-300 group-hover:w-full" />
              </article>
            ))}
          </div>
        </EditorialSection>

        {/* CLOSING CTA */}
        <section className="bg-[#20235A] px-5 py-14 text-white sm:px-8 sm:py-16 lg:px-14 xl:px-20">
          <div className="mx-auto flex max-w-[1200px] flex-col justify-between gap-7 md:flex-row md:items-center">
            <div>
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D2B87C] sm:text-xs">
                Explore Mechanical Engineering
              </p>

              <h2 className="max-w-2xl font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
                Discover the people, facilities and opportunities behind our
                department.
              </h2>
            </div>

            <Link
              href="/department/mechanical-engineering/hod"
              className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-3 border border-[#D2B87C]/60 px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:bg-[#D2B87C] hover:text-[#20235A]"
            >
              Meet the HOD

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