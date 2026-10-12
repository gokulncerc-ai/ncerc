"use client";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  Cpu,
  GraduationCap,
  Lightbulb,
  Network,
  Settings2,
  ShieldCheck,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";
import React from "react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import DepartmentNavigation from "./DepartmentNav/DepartmentNav";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1800&q=90";

// =========================================================
// DATA
// =========================================================

const missions = [
  {
    number: "M1",
    text: "To offer quality education in Electrical and Computer Engineering and prepare the students for professional career and higher studies.",
  },
  {
    number: "M2",
    text: "To create research collaboration with industries for gaining knowledge about real-time problems.",
  },
  {
    number: "M3",
    text: "To prepare students with sound technical knowledge.",
  },
  {
    number: "M4",
    text: "To make students socially responsible.",
  },
];

const programObjectives = [
  {
    number: "01",
    title: "Engineering Knowledge",
    text: "Apply the knowledge of mathematics, science, engineering fundamentals and an engineering specialization for the solution of complex engineering problems.",
  },
  {
    number: "02",
    title: "Problem Analysis",
    text: "Identify, formulate, research literature and analyse complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural science and engineering sciences.",
  },
  {
    number: "03",
    title: "Design and development of solutions",
    text: "Design solutions for complex engineering problems and design system components or processes that meet the specific needs with appropriate considerations for public health safety and cultural, societal and environmental considerations.",
  },
  {
    number: "04",
    title: "Conduct investigations of complex problems",
    text: "Use research based knowledge and research methods including design of experiments, analysis and interpretation of data and synthesis of the information to provide valid conclusions.",
  },
  {
    number: "05",
    title: "Modern tool usage",
    text: "Create, select and apply appropriate techniques, resources and modern engineering and IT tools including predictions and modelling to complex engineering activities with an understanding of the limitations.",
  },
  {
    number: "06",
    title: "The Engineer and society",
    text: "Apply reasoning, informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practices.",
  },
  {
    number: "07",
    title: "Environment and sustainability",
    text: "Understand the impact of the professional engineering solutions in societal and environmental context and demonstrate the knowledge of and need for sustainable development.",
  },
  {
    number: "08",
    title: "Ethics",
    text: "Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.",
  },
  {
    number: "09",
    title: "Individual and team work",
    text: "Function effectively as an individual and as a member or leader in diverse teams and in multi disciplinary settings.",
  },
  {
    number: "10",
    title: "Communication",
    text: "Communicate effectively on complex engineering activities with the engineering community and with the society at large such as, being able to comprehend and write effective reports and design documentation, make effective presentations and give and receive clear instructions.",
  },
  {
    number: "11",
    title: "Project management and finance",
    text: "Demonstrate knowledge and understanding of the engineering and management principles and apply these to one's own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.",
  },
  {
    number: "12",
    title: "Life-long learning",
    text: "Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.",
  },
];

const programSpecificObjectives = [
  {
    number: "PSO 1",
    title: "Electrical Engineering Fundamentals",
    text: "Apply Science, Engineering, Mathematics through differential and Integral Calculus, Complex Variables to solve Electrical Engineering Problems.",
  },
  {
    number: "PSO 2",
    title: "Engineering Software & Hardware",
    text: "Demonstrate proficiency in the use of software and hardware to be required to practice electrical engineering profession.",
  },
  {
    number: "PSO 3",
    title: "Ethics & Management",
    text: "Apply the knowledge of Ethical and Management principles required to work in a team as well as to lead a team.",
  },
];

const focusAreas = [
  {
    title: "Electrical Machines",
    icon: Zap,
  },
  {
    title: "Control Systems",
    icon: Settings2,
  },
  {
    title: "Power Systems",
    icon: Network,
  },
  {
    title: "Electrical & Electronic Circuits",
    icon: Cpu,
  },
  {
    title: "Instrumentation",
    icon: ShieldCheck,
  },
  {
    title: "AI & ML Technologies",
    icon: Lightbulb,
  },
];

const programmes = [
  {
    title: "B.Tech. in Electrical and Computer Engineering",
    type: "Undergraduate Programme",
    icon: Cpu,
  },
  {
    title: "M.Tech. in Energy Systems",
    type: "Postgraduate Programme",
    icon: Zap,
  },
];

// =========================================================
// PAGE
// =========================================================

const page = () => {
  return (
    <>
      <SiteHeader />

      <main className="bg-[#FAF7F2] text-[#1E1917]">

        {/* =========================================================
                    HERO
                ========================================================== */}

        <section className="relative overflow-hidden bg-[#20235A]">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
            <div className="grid min-h-[720px] items-stretch lg:grid-cols-[1fr_0.82fr]">

              {/* Hero Content */}
              <div className="flex flex-col justify-center py-20 lg:py-28 lg:pr-16">

                <div className="mb-8 flex flex-wrap items-center gap-4">
                  <span className="h-px w-12 bg-[#D2B87C]" />

                  <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D2B87C]">
                    Department of Engineering
                  </span>
                </div>

                <h1 className="max-w-4xl font-serif text-[46px] leading-[0.97] tracking-[-0.035em] text-white sm:text-[60px] lg:text-[70px] xl:text-[78px]">
                  Electrical &
                  <span className="block text-[#D2B87C]">
                    Electronics Engineering
                  </span>
                </h1>

                <p className="mt-5 max-w-xl text-[14px] font-semibold uppercase tracking-[0.14em] text-white/50">
                  Electrical Engineering • Computing • Intelligent Technologies
                </p>

                <p className="mt-8 max-w-2xl text-[16px] leading-8 text-white/70 sm:text-[17px]">
                  A department focused on quality education in Electrical and
                  Computer Engineering, combining strong technical foundations,
                  practical learning, research exposure and preparation for
                  professional careers and higher studies.
                </p>

                <div className="mt-10 flex flex-wrap items-center gap-5">
                  <a
                    href="#about"
                    className="group inline-flex items-center gap-3 bg-[#D2B87C] px-6 py-4 text-sm font-semibold text-[#20235A] transition hover:bg-white"
                  >
                    Explore Department

                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>

                  <div className="flex items-center gap-3 text-sm text-white/55">
                    <span className="h-2 w-2 rounded-full bg-[#D2B87C]" />
                    Established in 2004
                  </div>
                </div>

                {/* Department highlight */}
                <div className="mt-12 flex items-center gap-4 border-t border-white/10 pt-7">
                  <div className="flex h-12 w-12 items-center justify-center border border-[#D2B87C]/40">
                    <Cpu className="h-5 w-5 text-[#D2B87C]" />
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                      Department Focus
                    </p>

                    <p className="mt-1 text-sm text-white/55">
                      Electrical systems, computing and modern technology
                    </p>
                  </div>
                </div>
              </div>

              {/* Hero Image */}
              <div className="relative min-h-[450px] overflow-hidden lg:min-h-full">

                <Image
                  src={HERO_IMAGE}
                  alt="Electrical engineering power infrastructure"
                  fill
                  sizes="(min-width: 1024px) 330px, 100vw"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-[#20235A] via-[#20235A]/20 to-transparent" />

                <div className="absolute inset-0 bg-gradient-to-t from-[#20235A]/80 via-transparent to-transparent" />

                <div className="absolute bottom-8 left-8 right-8 border border-white/20 bg-[#20235A]/75 p-6 backdrop-blur-md sm:left-10 sm:right-10 sm:p-7">
                  <div className="flex items-start justify-between gap-5">

                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                        Electrical + Computing
                      </span>

                      <p className="mt-3 max-w-sm font-serif text-[23px] leading-tight text-white">
                        Power, systems, computing and technology
                        working together.
                      </p>
                    </div>

                    <Zap className="mt-1 h-6 w-6 shrink-0 text-[#D2B87C]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-px bg-[#D2B87C]/20" />
        </section>

        {/* =========================================================
                    DEPARTMENT NAVIGATION
                ========================================================== */}

        <DepartmentNavigation />

        {/* =========================================================
                    QUICK FACTS
                ========================================================== */}

        <section className="border-b border-[#20235A]/10 bg-white">
          <div className="mx-auto grid max-w-[1440px] sm:grid-cols-2 lg:grid-cols-4">

            {[
              {
                number: "2004",
                label: "Department Established",
              },
              {
                number: "60+",
                label: "B.Tech. Intake",
              },
              {
                number: "18",
                label: "M.Tech. Intake",
              },
              {
                number: "02",
                label: "Programmes Offered",
              },
            ].map((item, index) => (
              <div
                key={item.label}
                className={`px-6 py-8 sm:px-10 lg:px-12 lg:py-10 ${index !== 0
                  ? "border-t sm:border-l sm:border-t-0"
                  : ""
                  } border-[#20235A]/10`}
              >
                <span className="font-serif text-[36px] text-[#20235A] sm:text-[42px]">
                  {item.number}
                </span>

                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================
                    ABOUT
                ========================================================== */}

        <section
          id="about"
          className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28"
        >
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">

            <div>
              <div className="flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-[#8F7746]" />

                <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                  About the Department
                </span>
              </div>

              <div className="mt-7 h-px w-full bg-[#20235A]/10" />

              <div className="mt-7">
                <span className="font-serif text-5xl text-[#20235A]">
                  Since 2004
                </span>

                <p className="mt-2 max-w-[250px] text-xs uppercase leading-5 tracking-[0.14em] text-[#1E1917]/45">
                  Building knowledge across electrical engineering and
                  computing
                </p>
              </div>
            </div>

            <div>
              <h2 className="max-w-4xl font-serif text-[38px] leading-[1.08] tracking-[-0.025em] text-[#20235A] sm:text-[48px] lg:text-[56px]">
                Moving beyond wires and circuits into modern engineering.
              </h2>

              <div className="mt-8 space-y-6 text-[16px] leading-8 text-[#1E1917]/65 sm:text-[17px]">

                <p>
                  Electrical and Computer Engineering is at the forefront of
                  the newest technology. The discipline has moved beyond wires
                  and circuits into cutting-edge technology. The Department of
                  Electrical &amp; Computer Engineering was established in
                  2004.
                </p>

                <p>
                  The department offers B.Tech. Electrical and Computer
                  Engineering with an intake of 60 plus and M.Tech in Power
                  Electronics and M.Tech in Energy System with an intake of
                  18 each. The department head has a vast industrial and
                  teaching experience and is ably supported by well qualified
                  vibrant faculties and non-teaching staffs.
                </p>

                <p>
                  The academic offering is focused on the theoretical and
                  practical aspects of Electrical Machines, Control Systems,
                  Power Systems, Electrical and Electronic devices &amp;
                  circuits, Instrumentation etc.
                </p>

                <p>
                  The department conducts career developing, interpersonal
                  and intrapersonal skills of students. It organizes
                  Seminars, Quiz Programmes, Industrial Visits, Paper
                  Contests, Group Discussions, Guest Lectures, Games etc
                  under its auspices.
                </p>

                <p>
                  The students are encouraged to present papers and to
                  participate in seminars conducted in other engineering
                  colleges. Industrial tours are arranged for students to
                  obtain an exposure to industries.
                </p>
              </div>

              {/* Programmes */}
              <div className="mt-10 grid gap-px overflow-hidden border border-[#20235A]/10 bg-[#20235A]/10 sm:grid-cols-2">

                {programmes.map((programme, index) => {
                  const Icon = programme.icon;

                  return (
                    <div
                      key={programme.title}
                      className="group bg-white p-7 transition-colors duration-300 hover:bg-[#20235A] sm:p-8"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex h-11 w-11 items-center justify-center border border-[#20235A]/10 transition group-hover:border-[#D2B87C]/40">
                          <Icon className="h-5 w-5 text-[#8F7746] transition group-hover:text-[#D2B87C]" />
                        </div>

                        <span className="font-serif text-sm text-[#20235A]/20 group-hover:text-white/20">
                          0{index + 1}
                        </span>
                      </div>

                      <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746] group-hover:text-[#D2B87C]">
                        {programme.type}
                      </p>

                      <h3 className="mt-3 font-serif text-[23px] leading-tight text-[#20235A] transition group-hover:text-white">
                        {programme.title}
                      </h3>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
                    DEPARTMENT STRENGTH
                ========================================================== */}

        <section className="bg-[#F2EFE8]">
          <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">

            <div className="mb-14 max-w-3xl">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#8F7746]" />

                <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                  Academic Areas
                </span>
              </div>

              <h2 className="font-serif text-[40px] leading-[1.06] tracking-[-0.025em] text-[#20235A] sm:text-[52px]">
                Learning across electrical and computer engineering.
              </h2>

              <p className="mt-6 text-[16px] leading-8 text-[#1E1917]/60">
                The department&apos;s academic offering brings together core
                electrical engineering subjects with computing and emerging
                technology applications.
              </p>
            </div>

            <div className="grid gap-px overflow-hidden border border-[#20235A]/10 bg-[#20235A]/10 sm:grid-cols-2 lg:grid-cols-3">

              {focusAreas.map((area, index) => {
                const Icon = area.icon;

                return (
                  <div
                    key={area.title}
                    className="group bg-white p-8 transition-colors duration-300 hover:bg-[#20235A] sm:p-9"
                  >
                    <div className="flex items-start justify-between">

                      <div className="flex h-12 w-12 items-center justify-center border border-[#20235A]/10 transition group-hover:border-[#D2B87C]/40">
                        <Icon className="h-5 w-5 text-[#8F7746] transition group-hover:text-[#D2B87C]" />
                      </div>

                      <span className="font-serif text-sm text-[#20235A]/20 transition group-hover:text-white/20">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="mt-10 font-serif text-[26px] leading-tight text-[#20235A] transition group-hover:text-white">
                      {area.title}
                    </h3>

                    <div className="mt-7 h-px w-8 bg-[#D2B87C]/50 transition-all duration-300 group-hover:w-14" />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================
                    HOD MESSAGE
                ========================================================== */}

        <section className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">

          <div className="mb-12">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#8F7746]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                Department Leadership
              </span>
            </div>

            <h2 className="font-serif text-[40px] leading-[1.06] tracking-[-0.025em] text-[#20235A] sm:text-[52px]">
              HoD&apos;s Message
            </h2>
          </div>

          <div className="grid overflow-hidden border border-[#20235A]/10 bg-white lg:grid-cols-[330px_1fr]">

            {/* HOD */}
            <div className="bg-[#20235A] p-7 sm:p-9">

              <div className="overflow-hidden border border-white/10 bg-[#151843]">

                <div className="relative aspect-[4/5]">
                  <Image
                    src="https://ncerc.ac.in/electrical-and-computer-engineering/img/faculty/Dr.%20Johnson%20Y.jpeg"
                    alt="Dr. Johnson Y"
                    fill
                    sizes="(min-width: 1024px) 330px, 100vw"
                    className="object-cover"
                  />
                </div>

                <div className="border-t border-white/10 p-5">
                  <h3 className="font-serif text-xl text-white">
                    Dr. Johnson Y
                  </h3>

                  <p className="mt-1 text-sm text-[#D2B87C]">
                    Professor and HoD
                  </p>

                  <p className="mt-2 text-xs leading-5 text-white/45">
                    Postdoc, PhD, M.Tech, B.Tech, DIM, MCP, MIE
                  </p>
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="p-7 sm:p-10 lg:p-12">

              <div className="mb-8 flex h-14 w-14 items-center justify-center border border-[#20235A]/10">
                <Sparkles className="h-6 w-6 text-[#8F7746]" />
              </div>

              <div className="max-w-4xl space-y-5 text-[16px] leading-8 text-[#1E1917]/65">

                <p>
                  Welcome you to EEE, NCERC, dedicated to ensuring great
                  careers for our students. We are forging deeper industry
                  linkages, creating an academic and research culture from
                  the starting day and assuring the seamless education using
                  the state of art technology available.
                </p>

                <p>
                  We have invested a great deal of time and energy in
                  creating strong foundations for our department and will
                  continue to do all that it takes to ensure the bright career
                  opportunities through placement-focused studies for our
                  student.
                </p>

                <p>
                  The excellent infrastructure, well experienced teaching
                  faculty of the best kind of the Department ensuring quality
                  education such as interaction among students, parents and
                  staff, along with a Training and Placement Cell ensures a
                  bright future to its students.
                </p>

                <p>
                  I wish to appreciate the team of faculty members and the
                  students for their brilliant and tireless efforts.
                  Depending upon the interest of the student, he/she may
                  choose to go for higher studies or employment and can
                  choose to do research &amp; development, design,
                  production, application, testing, or management in the
                  Electrical and its allied technologies.
                </p>

                <p>
                  We give special focus to the link between electrical
                  technologies and the AI &amp; ML related technologies by
                  conducting appropriate workshops, seminars etc so that the
                  student can enter the modern industrial world with more
                  confidence.
                </p>

                <p>
                  We strongly encourage innovation in research, in teaching
                  and in service to the profession, the local community and
                  industry. I wish all the students and faculty a good
                  academic career.
                </p>

                <div className="border-t border-[#20235A]/10 pt-5">
                  <p className="font-serif text-lg text-[#20235A]">
                    Sincerely, and with best wishes,
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
                    VISION & MISSION
                ========================================================== */}

        <section className="bg-[#20235A]">
          <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">

            <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">

              {/* Vision */}
              <div>

                <div className="flex items-center gap-3">
                  <Target className="h-5 w-5 text-[#D2B87C]" />

                  <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                    Vision
                  </span>
                </div>

                <h2 className="mt-7 font-serif text-[40px] leading-[1.06] tracking-[-0.025em] text-white sm:text-[52px]">
                  Engineering knowledge for a better future.
                </h2>

                <div className="mt-8 border-l border-[#D2B87C]/50 pl-6">
                  <p className="font-serif text-[25px] leading-[1.35] text-white/80">
                    To excel in technical education and research in the field
                    of Electrical &amp; Computer Engineering by imparting
                    innovative engineering theories, concepts and practices
                    to improve the production and utilization of power and
                    energy for the betterment of the Nation.
                  </p>
                </div>
              </div>

              {/* Mission */}
              <div>

                <div className="mb-8 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#D2B87C]" />

                  <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                    Mission
                  </span>
                </div>

                <div className="border-t border-white/10">
                  {missions.map((mission) => (
                    <div
                      key={mission.number}
                      className="grid gap-5 border-b border-white/10 py-7 sm:grid-cols-[70px_1fr] sm:py-8"
                    >
                      <span className="font-serif text-sm text-[#D2B87C]">
                        {mission.number}
                      </span>

                      <p className="text-[15px] leading-8 text-white/60">
                        {mission.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
                    PROGRAM OBJECTIVES
                ========================================================== */}

        <section className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">

          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">

            <div>
              <div className="sticky top-28">

                <div className="flex items-center gap-3">
                  <GraduationCap className="h-5 w-5 text-[#8F7746]" />

                  <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                    Programme Objectives
                  </span>
                </div>

                <h2 className="mt-6 font-serif text-[40px] leading-[1.05] tracking-[-0.025em] text-[#20235A] sm:text-[50px]">
                  Engineers prepared to think, solve and lead.
                </h2>

                <p className="mt-6 max-w-md text-[15px] leading-8 text-[#1E1917]/60">
                  The programme objectives establish the technical,
                  professional, ethical and lifelong learning capabilities
                  expected from engineering graduates.
                </p>

                <div className="mt-8 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                    <GraduationCap className="h-4 w-4" />
                  </div>

                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                      Total Objectives
                    </p>

                    <p className="font-serif text-lg text-[#20235A]">
                      {programObjectives.length}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-px overflow-hidden border border-[#20235A]/10 bg-[#20235A]/10">

              {programObjectives.map((objective) => (
                <article
                  key={objective.number}
                  className="group bg-white p-7 transition-colors duration-300 hover:bg-[#20235A] sm:p-9"
                >
                  <div className="flex items-start justify-between gap-6">

                    <span className="font-serif text-sm text-[#8F7746] group-hover:text-[#D2B87C]">
                      {objective.number}
                    </span>

                    <ArrowUpRight className="h-4 w-4 text-[#20235A]/20 transition group-hover:text-[#D2B87C]" />
                  </div>

                  <h3 className="mt-6 font-serif text-[25px] leading-tight text-[#20235A] transition group-hover:text-white">
                    {objective.title}
                  </h3>

                  <p className="mt-4 max-w-3xl text-[15px] leading-8 text-[#1E1917]/60 transition group-hover:text-white/60">
                    {objective.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
                    PROGRAM SPECIFIC OBJECTIVES
                ========================================================== */}

        <section className="bg-[#F2EFE8]">
          <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">

            <div className="mb-14 max-w-4xl">

              <div className="mb-5 flex items-center gap-3">
                <Network className="h-5 w-5 text-[#8F7746]" />

                <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                  Programme Specific Objectives
                </span>
              </div>

              <h2 className="font-serif text-[40px] leading-[1.06] tracking-[-0.025em] text-[#20235A] sm:text-[52px]">
                Applying engineering knowledge to real-world practice.
              </h2>

              <p className="mt-6 max-w-3xl text-[16px] leading-8 text-[#1E1917]/60">
                The programme-specific objectives focus on applying scientific,
                engineering, computing, ethical and management knowledge within
                professional Electrical Engineering practice.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">

              {programSpecificObjectives.map((objective) => (
                <article
                  key={objective.number}
                  className="group border border-[#20235A]/10 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#20235A]/20 sm:p-8"
                >
                  <div className="flex items-center justify-between">

                    <span className="font-serif text-sm text-[#8F7746]">
                      {objective.number}
                    </span>

                    <ChevronRight className="h-4 w-4 text-[#20235A]/20 transition group-hover:translate-x-1 group-hover:text-[#8F7746]" />
                  </div>

                  <h3 className="mt-7 font-serif text-[25px] leading-tight text-[#20235A]">
                    {objective.title}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-[#1E1917]/55">
                    {objective.text}
                  </p>

                  <div className="mt-7 h-px w-8 bg-[#D2B87C] transition-all duration-300 group-hover:w-14" />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
                    CLOSING STATEMENT
                ========================================================== */}

        <section className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">

          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">

            <div>
              <div className="flex h-14 w-14 items-center justify-center border border-[#20235A]/15">
                <ShieldCheck className="h-6 w-6 text-[#8F7746]" />
              </div>

              <span className="mt-6 block text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                Department Outlook
              </span>
            </div>

            <div>

              <h2 className="font-serif text-[36px] leading-[1.1] tracking-[-0.025em] text-[#20235A] sm:text-[46px] lg:text-[52px]">
                Preparing students for higher studies, professional careers and
                the evolving world of electrical technology.
              </h2>

              <p className="mt-7 max-w-4xl text-[16px] leading-8 text-[#1E1917]/65">
                Depending upon the interest of the student, he/she may choose
                to go for higher studies or employment and can choose to do
                research &amp; development, design, production, application,
                testing, or management in Electrical and its allied
                technologies.
              </p>

              <p className="mt-5 max-w-4xl text-[16px] leading-8 text-[#1E1917]/65">
                The department gives special focus to the link between
                electrical technologies and AI &amp; ML related technologies
                through appropriate workshops and seminars, helping students
                approach the modern industrial world with greater confidence.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================
                    CTA
                ========================================================== */}

        <section className="bg-[#F2EFE8]">
          <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-24">

            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">

              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                  Electrical &amp; Computer Engineering
                </span>

                <h2 className="mt-5 max-w-3xl font-serif text-[36px] leading-tight tracking-[-0.025em] text-[#20235A] sm:text-[46px]">
                  Explore the department, its academic direction and
                  opportunities.
                </h2>
              </div>

              <a
                href="#about"
                className="group flex w-fit items-center gap-4 bg-[#20235A] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#171946]"
              >
                Explore Department

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
};

export default page;