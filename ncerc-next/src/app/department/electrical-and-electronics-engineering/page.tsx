"use client";

import Image from "next/image";
import {
  ArrowRight,
  Cpu,
  Zap,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import DepartmentNavigation from "./DepartmentNav/DepartmentNav";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1800&q=90";

const Page = () => {
  return (
    <>
      <SiteHeader />

      <main className="bg-[#FAF7F2] text-[#1E1917] [&_p]:text-justify">
        {/* =========================================================
            HERO SECTION
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

                {/* Department Highlight */}
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
                  sizes="(min-width: 1024px) 45vw, 100vw"
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
                        Power, systems, computing and technology working
                        together.
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

        {/* ABOUT THE DEPARTMENT */}
        <section
          id="about"
          className="bg-[#FAF7F2] px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28"
        >
          <div className="mx-auto max-w-[1440px]">
            {/* Section Heading */}
            <div className="mb-12 grid gap-6 lg:mb-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-16">
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#D2B87C]" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                    Discover Our Department
                  </span>
                </div>

                <h2 className="max-w-xl font-serif text-[38px] leading-[1.08] tracking-[-0.03em] text-[#20235A] sm:text-[48px] lg:text-[56px]">
                  About the
                  <span className="block text-[#8F7746]">
                    Department
                  </span>
                </h2>
              </div>
            </div>

            {/* Department Introduction */}
            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
              {/* Main Content */}
              <div className="space-y-6">
                <p className="text-[15px] leading-8 text-[#1E1917]/75 sm:text-[16px]">
                  Electrical Engineering is at the forefront of the newest technology. The discipline has moved beyond wires and circuits into cutting-edge technology. The Department of Electrical & Electronics Engineering was established in 2004. Department offers B.Tech. Electrical and Electronics Engineering with an intake of 60 plus and M.Tech in Power Electronics and M.Tech in Energy system with an intake of 18 each . The department head has a vast industrial and teaching experience and is ably supported by well qualified vibrant faculties and non-teaching staffs.
                </p>

                <p className="text-[15px] leading-8 text-[#1E1917]/75 sm:text-[16px]">
                  The academic offering is focused on the theoretical and practical aspects of Electrical Machines, Control Systems, Power Systems, Electrical and Electronic devices & circuits, Instrumentation etc. Electrical & Electronics Engineering Department conducts career developing, interpersonal and intrapersonal skills of students. It organizes Seminars, Quiz Programmes, Industrial Visits, Paper Contests, Group Discussions, Guest Lectures, Games etc under its auspices.
                </p>

                <p className="text-[15px] leading-8 text-[#1E1917]/75 sm:text-[16px]">
                  The students are encouraged to present papers and to participate in seminars conducted in other engineering colleges. Industrial tours are arranged for students to obtain an exposure to industries.
                </p>

              </div>

              {/* Department Overview Card */}
              <div className="relative">
                <div className="relative h-full overflow-hidden bg-[#20235A] p-7 sm:p-10 lg:p-11">
                  {/* Decorative Elements */}
                  <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full border border-[#D2B87C]/20" />
                  <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full border border-[#D2B87C]/20" />

                  <div className="relative">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                      Department at a Glance
                    </span>

                    <h3 className="mt-5 max-w-sm font-serif text-[29px] leading-tight text-white sm:text-[34px]">
                      Building strong foundations for tomorrow’s technologies.
                    </h3>

                    <div className="my-8 h-px bg-white/15" />

                    <div className="grid grid-cols-2 gap-x-6 gap-y-8">
                      <div>
                        <p className="font-serif text-[42px] leading-none text-[#D2B87C] sm:text-[48px]">
                          2004
                        </p>
                        <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.14em] text-white/60">
                          Year Established
                        </p>
                      </div>

                      <div>
                        <p className="font-serif text-[42px] leading-none text-[#D2B87C] sm:text-[48px]">
                          60+
                        </p>
                        <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.14em] text-white/60">
                          B.Tech. Intake
                        </p>
                      </div>

                      <div className="col-span-2 border-t border-white/15 pt-6">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                          Areas of Learning
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">
                          {[
                            "Electrical Machines",
                            "Control Systems",
                            "Power Systems",
                            "Instrumentation",
                            "Electronic Circuits",
                          ].map((area) => (
                            <span
                              key={area}
                              className="border border-white/15 px-3 py-2 text-[11px] text-white/75"
                            >
                              {area}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Programmes Offered */}
            <div className="mt-16 border-t border-[#20235A]/15 pt-10 sm:mt-20 sm:pt-12">
              <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <span className="h-px w-8 bg-[#D2B87C]" />
                    <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                      Academic Programmes
                    </span>
                  </div>

                  <h3 className="font-serif text-[30px] leading-tight text-[#20235A] sm:text-[38px]">
                    Programmes Offered
                  </h3>
                </div>

                <p className="max-w-md text-[14px] leading-7 text-[#1E1917]/65">
                  Explore the programmes listed by the Department of Electrical
                  &amp; Electronics Engineering.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {[
                  {
                    level: "Undergraduate Programme",
                    title: "B.Tech. in Electrical and Electronics Engineering",
                    number: "01",
                  },
                  {
                    level: "Postgraduate Programme",
                    title: "M.Tech. in Energy Systems",
                    number: "02",
                  },
                ].map((programme) => (
                  <div
                    key={programme.number}
                    className="group flex min-h-[150px] items-start gap-5 border border-[#20235A]/10 bg-white/60 p-6 transition-colors duration-300 hover:border-[#D2B87C] hover:bg-white sm:gap-7 sm:p-8"
                  >
                    <span className="font-serif text-[25px] text-[#B6A47B] transition-colors duration-300 group-hover:text-[#20235A]">
                      {programme.number}
                    </span>

                    <div className="flex-1">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                        {programme.level}
                      </p>

                      <h4 className="mt-3 font-serif text-[21px] leading-snug text-[#20235A] sm:text-[24px]">
                        {programme.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* HEAD OF DEPARTMENT MESSAGE */}
        <section
          id="hod-message"
          className="bg-[#F2EFE8] px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28"
        >
          <div className="mx-auto max-w-[1440px]">
            {/* Section Heading */}
            <div className="mb-12 flex items-center gap-4 sm:mb-16">
              <span className="h-px w-10 shrink-0 bg-[#D2B87C]" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                Leadership &amp; Vision
              </p>
            </div>

            <div className="grid items-start gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
              {/* HOD Profile */}
              <aside className="h-fit bg-[#20235A] p-6 text-white sm:p-9 lg:sticky lg:top-28">
                {/* HOD Photograph */}
                <div className="relative mx-auto aspect-[4/5] w-full max-w-[360px] overflow-hidden border border-[#D2B87C]/30 bg-white/5">
                  <Image
                    src="\images\dpt\electrical-and-electronics-engineering\img\faculty\drjohnson.webp"
                    alt="Dr. Johnson Y, Professor and Head of the Department of Electrical and Electronics Engineering"
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 60vw, 90vw"
                    className="object-cover object-top"
                  />

                  {/* Subtle Image Overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#20235A]/50 to-transparent" />
                </div>

                {/* Profile Details */}
                <div className="mt-8">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                    Head of Department
                  </p>

                  <h2 className="mt-3 font-serif text-[32px] leading-tight tracking-[-0.02em] sm:text-[38px]">
                    Dr. Johnson Y
                  </h2>

                  <p className="mt-3 text-sm font-medium text-white/75">
                    Professor and Head
                  </p>

                  <div className="my-6 h-px bg-white/15" />

                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                    Qualifications
                  </p>

                  <p className="mt-3 text-[14px] leading-7 text-white/75">
                    Postdoc, PhD, M. Tech, B. Tech, DIM, MCP, MIE
                  </p>
                </div>

                {/* Highlighted Quote */}
                <div className="mt-8 border-l-2 border-[#D2B87C] pl-5">
                  <p className="font-serif text-[20px] italic leading-relaxed text-white/90">
                    “We strongly encourage innovation in research and in teaching.”
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-3 border-t border-white/15 pt-6">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[#D2B87C]" />
                  <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-white/50">
                    Electrical &amp; Electronics Engineering
                  </span>
                </div>
              </aside>

              {/* HOD Message */}
              <div className="min-w-0">
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                  A Message to Our Students
                </span>

                <h3 className="mt-5 max-w-3xl font-serif text-[32px] leading-[1.15] tracking-[-0.025em] text-[#20235A] sm:text-[42px] lg:text-[48px]">
                  Welcome to the Department of Electrical and Electronics Engineering
                  <span className="text-[#8F7746]">, NCERC.</span>
                </h3>

                <div className="mt-8 h-px w-20 bg-[#D2B87C]" />

                <div className="mt-8 space-y-6">
                  <p className="text-[15px] leading-8 text-[#1E1917]/75 sm:text-[16px]">
                    Our department is committed to nurturing talented engineers by providing a strong academic foundation in electrical engineering.  From the very beginning, we strive to create a dynamic learning environment that encourages innovation, research and technical excellence while maintaining strong collaborations with industry. The department is equipped with excellent infrastructure, modern laboratories, and a team of highly qualified and dedicated faculty members. Our faculty members actively guide and mentor students, ensuring a supportive learning environment through regular interaction among students, parents, and staff. With the assistance of our Training and Placement Cell, we work continuously to enhance the employability and career prospects of our students.
                  </p>

                  <p className="text-[15px] leading-8 text-[#1E1917]/75 sm:text-[16px]">
                    I wish to appreciate the team of faculty members and the students for their brilliant and tireless efforts. Students in the Electrical and Electronics Engineering program are exposed to a wide range of areas such as Power Systems, Electrical Machines, Control Systems etc. We give special focus to the link between electrical technologies and the AI &amp; ML related technologies by conducting appropriate workshops, seminars etc so that the student can enter the modern industrial world with more confidence. Depending on their interests, students may pursue higher studies or explore career opportunities in research and development, software and hardware design, system development, automation, data-driven technologies, and advanced computing applications. We strongly encourage innovation in research and in teaching.

                  </p>

                  <p className="text-[15px] leading-8 text-[#1E1917]/75 sm:text-[16px]">
                    I extend my sincere wishes to all students and faculty members for a successful and enriching academic journey.
                  </p>
                </div>

                {/* Closing Signature */}
                <div className="mt-10 flex items-center gap-4 border-t border-[#20235A]/15 pt-7">
                  <div className="h-12 w-1 shrink-0 bg-[#D2B87C]" />
                  <div>
                    <p className="font-serif text-[20px] text-[#20235A]">
                      Dr. Johnson Y
                    </p>
                    <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.15em] text-[#8F7746]">
                      Professor and Head · EEE
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DEPARTMENT MISSION */}
        <section
          id="mission"
          className="bg-[#FAF7F2] px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28"
        >
          <div className="mx-auto max-w-[1440px]">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
              {/* Section Heading Panel */}
              <div className="relative overflow-hidden bg-[#20235A] p-8 sm:p-10 lg:min-h-[420px] lg:p-12">
                <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border border-[#D2B87C]/20" />
                <div className="pointer-events-none absolute -right-8 -top-8 h-48 w-48 rounded-full border border-[#D2B87C]/20" />

                <div className="relative flex h-full flex-col">
                  <div className="flex items-center gap-3">
                    <span className="h-px w-9 bg-[#D2B87C]" />
                    <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                      Our Purpose
                    </span>
                  </div>

                  <h2 className="mt-8 font-serif text-[42px] leading-[1.05] tracking-[-0.03em] text-white sm:text-[52px] lg:text-[60px]">
                    Department
                    <span className="mt-2 block text-[#D2B87C]">Mission</span>
                  </h2>

                  <p className="mt-7 max-w-md text-[15px] leading-8 text-white/70">
                    Our mission is to deliver quality education, develop technical
                    expertise, encourage industry collaboration, and nurture socially
                    responsible engineers.
                  </p>

                  <div className="mt-auto border-t border-white/15 pt-6 sm:mt-12">
                    <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/45">
                      Electrical &amp; Electronics Engineering · NCERC
                    </p>
                  </div>
                </div>
              </div>

              {/* Mission Statements */}
              <div className="grid content-start gap-4 sm:grid-cols-2">
                {[
                  {
                    number: "01",
                    title: "Quality Education",
                    description:
                      "To offer quality education in Electrical and Electronics Engineering and prepare the students for professional career and higher studies.",
                  },
                  {
                    number: "02",
                    title: "Industry Collaboration",
                    description:
                      "To create research collaboration with industries for gaining knowledge about real-time problems.",
                  },
                  {
                    number: "03",
                    title: "Technical Excellence",
                    description:
                      "  To prepare students with sound technical knowledge.",
                  },
                  {
                    number: "04",
                    title: "Social Responsibility",
                    description:
                      "To make students socially responsible",
                  },
                ].map((mission) => (
                  <article
                    key={mission.number}
                    className="group flex min-h-[205px] flex-col border border-[#20235A]/10 bg-white/60 p-6 transition-colors duration-300 hover:border-[#D2B87C] hover:bg-white sm:p-7 lg:p-8"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-[27px] text-[#B6A47B] transition-colors duration-300 group-hover:text-[#20235A]">
                        {mission.number}
                      </span>
                      <span className="h-px w-10 bg-[#D2B87C] transition-all duration-300 group-hover:w-16" />
                    </div>

                    <h3 className="mt-7 font-serif text-[22px] leading-snug text-[#20235A] sm:text-[24px]">
                      {mission.title}
                    </h3>

                    <p className="mt-3 text-[14px] leading-7 text-[#1E1917]/70">
                      {mission.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Department Vision */}
        <section
          id="department-vision"
          className="bg-[#F2EFE8] px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28"
        >
          <div className="mx-auto max-w-[1440px]">
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start lg:gap-20">
              {/* Section Heading */}
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#D2B87C]" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                    Our Direction
                  </span>
                </div>

                <h2 className="font-serif text-[38px] leading-[1.08] tracking-[-0.03em] text-[#20235A] sm:text-[48px] lg:text-[58px]">
                  Department
                  <span className="block text-[#8F7746]">Vision</span>
                </h2>

                <p className="mt-6 max-w-sm text-[14px] leading-7 text-[#1E1917]/70">
                  A commitment to technical excellence, innovative learning, and
                  meaningful contributions to society.
                </p>
              </div>

              {/* Vision Statement */}
              <div className="relative border border-[#20235A]/10 bg-[#FAF7F2] p-7 sm:p-10 lg:p-12">
                <span
                  aria-hidden="true"
                  className="absolute right-7 top-4 font-serif text-[80px] leading-none text-[#D2B87C]/40 sm:right-10 sm:top-6 sm:text-[100px]"
                >
                  “
                </span>

                <div className="relative">
                  <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                    Our Vision Statement
                  </p>

                  <p className="font-serif text-[24px] leading-[1.55] text-[#20235A] sm:text-[28px] lg:text-[32px]">
                    To excel in technical education and research in the field of
                    Electrical &amp; Electronics Engineering by imparting innovative
                    engineering theories, concepts and practices to improve the
                    production and utilization of power and energy for the betterment
                    of the Nation.
                  </p>

                  <div className="mt-9 flex items-center gap-3">
                    <span className="h-px w-10 bg-[#D2B87C]" />
                    <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#8F7746]">
                      Electrical &amp; Electronics Engineering · NCERC
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROGRAMME EDUCATIONAL OBJECTIVES */}
        <section
          id="program-educational-objectives"
          className="bg-[#F2EFE8] px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28"
        >
          <div className="mx-auto max-w-[1440px]">
            {/* Section Header */}
            <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-16">
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#D2B87C]" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                    Academic Framework
                  </span>
                </div>

                <h2 className="max-w-3xl font-serif text-[36px] leading-[1.1] tracking-[-0.03em] text-[#20235A] sm:text-[46px] lg:text-[54px]">
                  Programme Educational
                  <span className="block text-[#8F7746]">Objectives</span>
                </h2>
              </div>

              <div className="border-l-2 border-[#D2B87C] pl-5 lg:justify-self-end">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                  Department
                </p>
                <p className="mt-2 text-[15px] font-medium leading-7 text-[#20235A]">
                  Department of Electrical and Electronics Engineering
                </p>
                <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                  Programme
                </p>
                <p className="mt-2 text-[14px] leading-6 text-[#1E1917]/75">
                  Electrical and Computer Science Engineering
                </p>
              </div>
            </div>

            {/* PEO Cards */}
            <div className="mt-12 grid gap-5 lg:mt-16">
              {[
                {
                  number: "01",
                  title: "Engineering Foundations",
                  description:
                    "Graduates shall have a good foundation in the fundamental and practical aspects of Mathematics and Engineering Sciences so as to build successful and enriching careers in the field of Electrical Engineering and Computer Science Domains. ",
                },
                {
                  number: "02",
                  title: "Technological Advancement",
                  description:
                    "Graduates shall learn and adapt themselves to the latest technological developments in the field of Electrical & Computer Engineering which will in turn motivate them to excel in their domains and shall pursue higher education and research.",
                },
                {
                  number: "03",
                  title: "Professional and Leadership Skills",
                  description:
                    "Graduates shall have professional ethics and good communication ability along with entrepreneurial skills and leadership skills, so that they can succeed in multidisciplinary and diverse fields.",
                },
              ].map((objective) => (
                <article
                  key={objective.number}
                  className="group grid gap-5 border border-[#20235A]/10 bg-[#FAF7F2] p-6 transition-colors duration-300 hover:border-[#D2B87C] sm:p-8 lg:grid-cols-[100px_0.65fr_1.35fr] lg:items-start lg:gap-8 lg:p-10"
                >
                  {/* Objective Number */}
                  <div className="flex items-center gap-4 lg:block">
                    <span className="font-serif text-[36px] leading-none text-[#B6A47B] transition-colors duration-300 group-hover:text-[#20235A] sm:text-[42px]">
                      {objective.number}
                    </span>
                    <span className="h-px flex-1 bg-[#D2B87C]/60 lg:mt-5 lg:block lg:w-10" />
                  </div>

                  {/* Objective Title */}
                  <div>
                    <h3 className="font-serif text-[23px] leading-snug text-[#20235A] sm:text-[27px]">
                      {objective.title}
                    </h3>
                  </div>

                  {/* Objective Description */}
                  <p className="text-[14px] leading-7 text-[#1E1917]/75 sm:text-[15px] sm:leading-8">
                    {objective.description}
                  </p>
                </article>
              ))}
            </div>

            {/* Footer Label */}
            <div className="mt-8 flex items-center gap-3">
              <span className="h-2 w-2 bg-[#D2B87C]" />
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#8F7746]">
                Electrical &amp; Electronics Engineering · NCERC
              </p>
            </div>
          </div>
        </section>

        {/* PROGRAM EDUCATIONAL OBJECTIVES */}
        <section
          id="peos"
          className="bg-[#FAF7F2] px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28"
        >
          <div className="mx-auto max-w-[1440px]">
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
              {/* Left Heading Panel */}
              <div className="relative flex flex-col justify-between overflow-hidden bg-[#20235A] p-8 sm:p-10 lg:min-h-[520px] lg:p-12">
                <div className="pointer-events-none absolute -right-20 -top-16 h-64 w-64 rounded-full border border-[#D2B87C]/20" />
                <div className="pointer-events-none absolute -right-10 -top-6 h-44 w-44 rounded-full border border-[#D2B87C]/20" />

                <div className="relative">
                  <div className="flex items-center gap-3">
                    <span className="h-px w-9 bg-[#D2B87C]" />
                    <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                      Academic Framework
                    </span>
                  </div>

                  <h2 className="mt-8 font-serif text-[38px] leading-[1.08] tracking-[-0.03em] text-white sm:text-[46px] lg:text-[52px]">
                    Programme
                    <span className="mt-2 block text-[#D2B87C]">
                      Educational
                    </span>
                    <span className="mt-2 block">Objectives</span>
                  </h2>

                  <p className="mt-7 max-w-sm text-[14px] leading-7 text-white/70 sm:text-[15px] sm:leading-8">
                    Preparing graduates with strong engineering foundations,
                    adaptability, professional ethics, and the skills to succeed
                    in diverse career paths.
                  </p>
                </div>

                <div className="relative mt-12 border-t border-white/15 pt-6">
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/45">
                    Electrical &amp; Electronics Engineering
                  </p>
                  <p className="mt-2 text-[12px] text-white/65">
                    NCERC · Academic Excellence
                  </p>
                </div>
              </div>

              {/* Objectives List */}
              <div className="flex flex-col">
                {[
                  {
                    number: "01",
                    title: "Engineering Foundations",
                    description:
                      "Graduates shall have a good foundation in the fundamental and practical aspects of Mathematics and Engineering Sciences so as to build successful and enriching careers in the field of Electrical Engineering and allied areas.",
                  },
                  {
                    number: "02",
                    title: "Technological Adaptability",
                    description:
                      "Graduates shall learn and adapt themselves to the latest technological developments in the field of Electrical & Electronics Engineering which will in turn motivate them to excel in their domains and shall pursue higher education and research.",
                  },
                  {
                    number: "03",
                    title: "Professional and Leadership Skills",
                    description:
                      "Graduates shall have professional ethics and good communication ability along with entrepreneurial skills and leadership skills, so that they can succeed in multidisciplinary and diverse fields.",
                  },
                ].map((objective) => (
                  <article
                    key={objective.number}
                    className="group border-b border-[#20235A]/15 py-8 first:pt-0 last:pb-0 sm:py-10"
                  >
                    <div className="flex items-start gap-5 sm:gap-7">
                      <span className="shrink-0 font-serif text-[32px] leading-none text-[#B6A47B] transition-colors duration-300 group-hover:text-[#20235A] sm:text-[38px]">
                        {objective.number}
                      </span>

                      <div className="min-w-0">
                        <h3 className="font-serif text-[23px] leading-snug text-[#20235A] sm:text-[27px]">
                          {objective.title}
                        </h3>

                        <p className="mt-4 text-[14px] leading-7 text-[#1E1917]/75 sm:text-[15px] sm:leading-8">
                          {objective.description}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROGRAM OUTCOMES */}
        <section
          id="program-outcomes"
          className="bg-[#F2EFE8] px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28"
        >
          <div className="mx-auto max-w-[1440px]">
            {/* Section Header */}
            <div className="grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-end lg:gap-16">
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#D2B87C]" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                    Academic Framework
                  </span>
                </div>

                <h2 className="font-serif text-[40px] leading-[1.08] tracking-[-0.03em] text-[#20235A] sm:text-[50px] lg:text-[60px]">
                  Programme
                  <span className="block text-[#8F7746]">Outcomes</span>
                </h2>
              </div>

              <div className="border-l-2 border-[#D2B87C] pl-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                  Expected Graduate Attributes
                </p>
                <p className="mt-3 text-[15px] leading-7 text-[#1E1917]/75">
                  Engineering graduates will be able to apply technical knowledge,
                  solve complex problems, work ethically, communicate effectively,
                  and continue learning throughout their professional careers.
                </p>
              </div>
            </div>

            {/* Outcomes Introduction */}
            <div className="mt-12 flex items-center gap-4 border-y border-[#20235A]/15 py-5 sm:mt-16">
              <span className="h-2 w-2 shrink-0 bg-[#D2B87C]" />
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#20235A] sm:text-xs">
                Engineering Graduates Will Be Able To
              </h3>
              <span className="ml-auto hidden text-[11px] font-medium tracking-[0.12em] text-[#8F7746] sm:block">
                12 Programme Outcomes
              </span>
            </div>

            {/* Programme Outcomes Grid */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Engineering Knowledge",
                  description:
                    "Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.",
                },
                {
                  number: "02",
                  title: "Problem Analysis",
                  description:
                    "Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.",
                },
                {
                  number: "03",
                  title: "Design / Development of Solutions",
                  description:
                    "Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.",
                },
                {
                  number: "04",
                  title: "Conduct Investigations of Complex Problems",
                  description:
                    "Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.",
                },
                {
                  number: "05",
                  title: "Modern Tool Usage",
                  description:
                    "Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.",
                },
                {
                  number: "06",
                  title: "The Engineer and Society",
                  description:
                    " Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.",
                },
                {
                  number: "07",
                  title: "Environment and Sustainability",
                  description:
                    "Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.",
                },
                {
                  number: "08",
                  title: "Ethics",
                  description:
                    "Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.",
                },
                {
                  number: "09",
                  title: "Individual and Team Work",
                  description:
                    "Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.",
                },
                {
                  number: "10",
                  title: "Communication",
                  description:
                    "Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.",
                },
                {
                  number: "11",
                  title: "Project Management and Finance",
                  description:
                    "Demonstrate knowledge and understanding of the engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.",
                },
                {
                  number: "12",
                  title: "Life-long Learning",
                  description:
                    "Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.",
                },
              ].map((outcome) => (
                <article
                  key={outcome.number}
                  className="group flex h-full flex-col border border-[#20235A]/10 bg-[#FAF7F2] p-6 transition-colors duration-300 hover:border-[#D2B87C] sm:p-7"
                >
                  {/* Number and Accent */}
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-[30px] leading-none text-[#B6A47B] transition-colors duration-300 group-hover:text-[#20235A]">
                      {outcome.number}
                    </span>
                    <span className="h-px w-10 bg-[#D2B87C] transition-all duration-300 group-hover:w-16" />
                  </div>

                  {/* Outcome Title */}
                  <h3 className="mt-7 font-serif text-[22px] leading-snug text-[#20235A]">
                    {outcome.title}
                  </h3>

                  {/* Outcome Description */}
                  <p className="mt-4 text-[14px] leading-7 text-[#1E1917]/75">
                    {outcome.description}
                  </p>

                  {/* Bottom Accent */}
                  <div className="mt-auto pt-7">
                    <div className="h-px w-8 bg-[#D2B87C]/70 transition-all duration-300 group-hover:w-full" />
                  </div>
                </article>
              ))}
            </div>

            {/* Section Footer */}
            <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-[#20235A]/15 pt-6">
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#8F7746]">
                Electrical &amp; Electronics Engineering · NCERC
              </p>
              <p className="text-[11px] text-[#1E1917]/55">
                Knowledge · Innovation · Professional Excellence
              </p>
            </div>
          </div>
        </section>

        {/* PROGRAMME SPECIFIC OUTCOMES */}
        <section
          id="program-specific-outcomes"
          className="bg-[#FAF7F2] px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28"
        >
          <div className="mx-auto max-w-[1440px]">
            {/* Section Header */}
            <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-16">
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#D2B87C]" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                    Academic Framework
                  </span>
                </div>

                <h2 className="font-serif text-[38px] leading-[1.08] tracking-[-0.03em] text-[#20235A] sm:text-[48px] lg:text-[58px]">
                  Programme Specific
                  <span className="block text-[#8F7746]">Outcomes</span>
                </h2>
              </div>

              <div className="border-l-2 border-[#D2B87C] pl-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                  Department
                </p>
                <p className="mt-2 text-[14px] leading-7 text-[#20235A]">
                  Department of Electrical and Electronics Engineering
                </p>

                <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                  Programme
                </p>
                <p className="mt-2 text-[14px] leading-7 text-[#1E1917]/70">
                  Electrical and Computer Science Engineering
                </p>
              </div>
            </div>

            {/* Introduction */}
            <div className="mt-12 flex flex-col gap-4 border-y border-[#20235A]/15 py-6 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                  Graduate Competencies
                </p>
                <h3 className="mt-2 font-serif text-[25px] text-[#20235A] sm:text-[30px]">
                  Programme Specific Outcomes
                </h3>
              </div>

              <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-[#8F7746]">
                03 Core Outcomes
              </span>
            </div>

            {/* PSO Cards */}
            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Engineering and Mathematical Applications",
                  description:
                    "Apply Science, Engineering, Mathematics through differential and Integral Calculus, Complex Variables to solve Electrical and Computer Engineering Problems.",
                },
                {
                  number: "02",
                  title: "Software and Hardware Proficiency",
                  description:
                    "Demonstrate proficiency in the use of software and hardware to be required to practice electrical and computer engineering profession.",
                },
                {
                  number: "03",
                  title: "Ethics, Management and Teamwork",
                  description:
                    "Apply the knowledge of Ethical and Management principles required to work in a team as well as to lead a team",
                },
              ].map((outcome) => (
                <article
                  key={outcome.number}
                  className="group flex h-full flex-col border border-[#20235A]/10 bg-white/60 p-7 transition-colors duration-300 hover:border-[#D2B87C] hover:bg-white sm:p-8 lg:min-h-[330px] lg:p-9"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-[36px] leading-none text-[#B6A47B] transition-colors duration-300 group-hover:text-[#20235A]">
                      {outcome.number}
                    </span>

                    <span className="h-px w-10 bg-[#D2B87C] transition-all duration-300 group-hover:w-16" />
                  </div>

                  <h3 className="mt-8 font-serif text-[24px] leading-snug text-[#20235A] sm:text-[27px]">
                    {outcome.title}
                  </h3>

                  <p className="mt-4 text-[14px] leading-7 text-[#1E1917]/75 sm:text-[15px]">
                    {outcome.description}
                  </p>

                  <div className="mt-auto pt-8">
                    <div className="h-px w-8 bg-[#D2B87C]/70 transition-all duration-300 group-hover:w-full" />
                  </div>
                </article>
              ))}
            </div>

            {/* Section Footer */}
            <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-[#20235A]/15 pt-6">
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#8F7746]">
                Electrical &amp; Electronics Engineering · NCERC
              </p>

              <p className="text-[11px] text-[#1E1917]/55">
                Technical Knowledge · Practical Skills · Professional Ethics
              </p>
            </div>
          </div>
        </section>



        {/* Programme Specific Outcomes */}
        <section
          id="program-specific-outcomes"
          className="bg-[#FAF7F2] px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28"
        >
          <div className="mx-auto max-w-[1440px]">
            {/* Section Header */}
            <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-16">
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#D2B87C]" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                    Academic Framework
                  </span>
                </div>

                <h2 className="font-serif text-[38px] leading-[1.08] tracking-[-0.03em] text-[#20235A] sm:text-[48px] lg:text-[58px]">
                  Programme Specific
                  <span className="block text-[#8F7746]">Outcomes</span>
                </h2>
              </div>

              <div className="border-l-2 border-[#D2B87C] pl-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                  Department
                </p>
                <p className="mt-2 text-[14px] leading-7 text-[#20235A]">
                  Department of Electrical and Electronics Engineering
                </p>

                <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                  Programme
                </p>
                <p className="mt-2 text-[14px] leading-7 text-[#1E1917]/70">
                  Electrical Engineering
                </p>
              </div>
            </div>

            {/* Introduction */}
            <div className="mt-12 flex flex-col gap-4 border-y border-[#20235A]/15 py-6 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                  Graduate Competencies
                </p>
                <h3 className="mt-2 font-serif text-[25px] text-[#20235A] sm:text-[30px]">
                  Programme Specific Outcomes
                </h3>
              </div>

              <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-[#8F7746]">
                03 Core Outcomes
              </span>
            </div>

            {/* PSO Cards */}
            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Engineering and Mathematical Applications",
                  description:
                    "Apply Science, Engineering, Mathematics through differential and Integral Calculus, Complex Variables to solve Electrical Engineering Problems.",
                },
                {
                  number: "02",
                  title: "Software and Hardware Proficiency",
                  description:
                    "Demonstrate proficiency in the use of software and hardware to be required to practice electrical engineering profession.",
                },
                {
                  number: "03",
                  title: "Ethics, Management and Teamwork",
                  description:
                    "Apply the knowledge of Ethical and Management principles required to work in a team as well as to lead a team ",
                },
              ].map((outcome) => (
                <article
                  key={outcome.number}
                  className="group flex h-full flex-col border border-[#20235A]/10 bg-white/60 p-7 transition-colors duration-300 hover:border-[#D2B87C] hover:bg-white sm:p-8 lg:min-h-[330px] lg:p-9"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-[36px] leading-none text-[#B6A47B] transition-colors duration-300 group-hover:text-[#20235A]">
                      {outcome.number}
                    </span>

                    <span className="h-px w-10 bg-[#D2B87C] transition-all duration-300 group-hover:w-16" />
                  </div>

                  <h3 className="mt-8 font-serif text-[24px] leading-snug text-[#20235A] sm:text-[27px]">
                    {outcome.title}
                  </h3>

                  <p className="mt-4 text-[14px] leading-7 text-[#1E1917]/75 sm:text-[15px]">
                    {outcome.description}
                  </p>

                  <div className="mt-auto pt-8">
                    <div className="h-px w-8 bg-[#D2B87C]/70 transition-all duration-300 group-hover:w-full" />
                  </div>
                </article>
              ))}
            </div>

            {/* Section Footer */}
            <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-[#20235A]/15 pt-6">
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#8F7746]">
                Electrical &amp; Electronics Engineering · NCERC
              </p>

              <p className="text-[11px] text-[#1E1917]/55">
                Technical Knowledge · Practical Skills · Professional Ethics
              </p>
            </div>
          </div>
        </section>









      </main>
      <FooterSection />
    </>
  );
};

export default Page;