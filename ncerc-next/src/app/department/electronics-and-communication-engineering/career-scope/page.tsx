
import Link from "next/link";
import type { ReactNode } from "react";
import { Briefcase } from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../DepartmentNav/DepartmentNav";

export const metadata = {
  title:
    "Top Engineering Colleges in Thrissur | Electronics and Communication Engineering - NCERC",
  description:
    "Nehru College of Engineering and Research Centre is renowned as one of the leading colleges in Kerala for Electrical and Communication Engineering, offering quality education that prepares students for successful careers in the electrical and communication technology sectors across South India.",
  keywords: [
    "engineering colleges thrissur",
    "engineering colleges in thrissur",
    "private engineering colleges in thrissur",
    "top engineering colleges in thrissur",
    "Nehru College of Engineering and Research Centre thrissur",
    "NCERC thrissur",
    "Nehru College thrissur",
    "Nehru College of Engineering thrissur",
  ],
  robots: { index: true, follow: true },
};

const DEPARTMENT_PATH =
  "/department/electronics-and-communication-engineering";

/* ---------------------------------------------
   SECTION LABEL COMPONENT
--------------------------------------------- */

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-8 bg-[#D2B87C]" />

      <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8F7746]">
        {children}
      </p>
    </div>
  );
}

/* ---------------------------------------------
   INTRODUCTION CONTENT
--------------------------------------------- */

const introParagraph =
  "Electronics and Communication Engineering (ECE) is one of the much sought after Engineering disciplines, as the modern 21st century technocrats create and assimilate several prototypes of the Electronics related and Communication related aspects for a wide variety of Industries, such as Telecommunications, Microwave, Embedded systems, VLSI, Biomedical engineering and so on.";

/* ---------------------------------------------
   CAREER PATHWAYS
--------------------------------------------- */

const CAREER_PATHS = [
  {
    number: "01",
    title: "Core Electronics & Communication",
    description:
      "The core electronics and communication field focuses on the design, development, and maintenance of electronic circuits, devices, and communication systems. It includes areas such as VLSI design, embedded systems, signal processing, and wireless communication. ECE graduates in this domain work on developing efficient hardware systems, improving communication technologies, and contributing to industries like telecommunications, semiconductor manufacturing, and consumer electronics.",
    jobTitles: [
      "Electronics Engineer",
      "Communication Engineer",
      "RF Engineer",
      "VLSI Design Engineer",
    ],
    roles: [
      "Design and analyze electronic circuits",
      "Develop wireless and satellite communication systems",
      "Work on chip design and semiconductor technologies",
      "Test and improve system performance",
    ],
  },
  {
    number: "02",
    title: "IT & Software Industry",
    description:
      "The IT and software sector offers vast opportunities for ECE graduates due to their strong analytical and programming skills. This field involves software development, system design, data analysis, and application development. ECE students can easily adapt to coding roles and work in software companies, contributing to building applications, managing systems, and solving real-world problems using computational techniques.",
    jobTitles: [
      "Software Developer",
      "System Engineer",
      "Data Analyst",
      "Full Stack Developer",
    ],
    roles: [
      "Develop and maintain software applications",
      "Write, test, and debug code",
      "Manage databases and backend systems",
      "Solve problems using algorithms and data structures",
    ],
  },
  {
    number: "03",
    title: "Government & Public Sector",
    description:
      "The government sector provides secure and prestigious career options for ECE graduates through competitive exams and recruitment processes. Opportunities exist in public sector undertakings, defense, space research, and communication departments. Organizations like DRDO and ISRO offer roles in research, development, and national projects, allowing engineers to contribute to the country’s technological growth.",
    jobTitles: [
      "PSU Engineer",
      "Scientist (DRDO)",
      "Technical Officer (ISRO)",
      "IES Officer",
    ],
    roles: [
      "Conduct research in defense and space technologies",
      "Maintain and manage communication systems",
      "Work on national-level engineering projects",
      "Implement government technical policies",
    ],
  },
  {
    number: "04",
    title: "Emerging Technologies",
    description:
      "Emerging technologies represent one of the fastest-growing areas for ECE graduates, including Artificial Intelligence, Internet of Things (IoT), robotics, and automation. This field focuses on creating smart and connected systems that improve efficiency and innovation across industries such as healthcare, agriculture, and smart cities. ECE engineers play a key role in integrating hardware and software to develop intelligent solutions.",
    jobTitles: [
      "AI/ML Engineer",
      "IoT Developer",
      "Robotics Engineer",
      "Embedded Systems Engineer",
    ],
    roles: [
      "Develop intelligent and automated systems",
      "Design IoT-based applications",
      "Integrate hardware with software systems",
      "Innovate solutions for smart technologies",
    ],
  },
  {
    number: "05",
    title: "Higher Studies & Research",
    description:
      "Higher studies provide ECE graduates with the opportunity to specialize in advanced domains like communication systems, VLSI, and signal processing. It enables careers in research, academia, and innovation. Students can pursue postgraduate and doctoral studies in reputed institutions like IITs and IISc Bangalore, leading to roles in teaching, research labs, and advanced technological development.",
    jobTitles: [
      "Research Scientist",
      "Professor / Lecturer",
      "R&D Engineer",
    ],
    roles: [
      "Conduct advanced research and innovation",
      "Publish technical papers",
      "Teach and mentor students",
      "Develop new technologies and solutions",
    ],
  },
  {
    number: "06",
    title: "Entrepreneurship",
    description:
      "Entrepreneurship offers ECE graduates the chance to create their own ventures in electronics, communication, and technology-driven solutions. With growing support for startups, engineers can develop innovative products, especially in areas like IoT, embedded systems, and automation. This field encourages creativity, risk-taking, and leadership, allowing individuals to build scalable businesses and contribute to technological advancement.",
    jobTitles: [
      "Startup Founder",
      "Product Developer",
      "Tech Consultant",
    ],
    roles: [
      "Develop and launch tech products",
      "Build IoT or embedded-based solutions",
      "Manage business operations",
      "Innovate and scale technology ventures",
    ],
  },
];

/* ---------------------------------------------
   CAREER SCOPE PAGE
--------------------------------------------- */

export default function CareerScopePage() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-[#FAF7F2] text-[#1E1917]">
        {/* =========================================
            HERO SECTION
        ========================================= */}

        <section className="relative isolate overflow-hidden bg-[#20235A] text-white">
          {/* Decorative Elements */}
          <div className="pointer-events-none absolute -right-32 -top-36 h-[500px] w-[500px] rounded-full border border-[#D2B87C]/10" />

          <div className="pointer-events-none absolute -right-12 -top-20 h-[340px] w-[340px] rounded-full border border-[#D2B87C]/15" />

          <div className="pointer-events-none absolute -bottom-44 -left-32 h-[400px] w-[400px] rounded-full border border-white/5" />

          {/* Hero Content */}
          <div className="relative mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24 xl:px-20">
            <div className="relative z-10 max-w-4xl">
              {/* Department Label */}
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-10 bg-[#D2B87C]" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D2B87C] sm:text-xs">
                  Electronics &amp; Communication Engineering &middot; NBA
                  Accredited
                </p>
              </div>

              {/* Main Heading */}
              <h1 className="font-serif text-[42px] font-normal leading-[1.06] tracking-[-0.035em] sm:text-[56px] lg:text-[64px] xl:text-[72px]">
                Career
                <br />
                <span className="italic text-[#D2B87C]">Scope</span>
              </h1>

              {/* Description */}
              <p className="mt-7 max-w-2xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
                Explore the industries and career paths open to Electronics
                and Communication Engineering graduates, from VLSI and
                telecommunications to embedded systems and biomedical
                engineering.
              </p>

              {/* Breadcrumb Navigation */}
              <div className="mt-12 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-white/50">
                <Link
                  href={DEPARTMENT_PATH}
                  className="transition-colors duration-300 hover:text-white"
                >
                  Departments
                </Link>

                <span className="text-[#D2B87C]">/</span>

                <Link
                  href={DEPARTMENT_PATH}
                  className="transition-colors duration-300 hover:text-white"
                >
                  Electronics &amp; Communication Engineering
                </Link>

                <span className="text-[#D2B87C]">/</span>

                <span className="text-white/80">Career Scope</span>
              </div>
            </div>
          </div>

          {/* Gold Bottom Accent */}
          <div className="relative h-1 w-full bg-[#D2B87C]" />
        </section>

        {/* =========================================
            DEPARTMENT NAVIGATION
        ========================================= */}

        <InnerHeader activeTab="Career Scope" />

        {/* =========================================
            INTRODUCTION SECTION
        ========================================= */}

        <section className="scroll-mt-24 bg-[#FAF7F2] px-5 py-16 sm:px-8 sm:py-24 lg:px-14 lg:py-28 xl:px-20">
          <div className="mx-auto max-w-[1200px]">
            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              {/* Introduction Heading */}
              <div>
                <div className="mb-10">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="h-px w-9 bg-[#8F7746]" />

                    <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8F7746] sm:text-xs">
                      Career Scope
                    </p>
                  </div>

                  <h2 className="font-serif text-4xl font-normal leading-[1.12] tracking-[-0.025em] text-[#20235A] sm:text-5xl lg:text-[52px]">
                    Where ECE
                    <br />
                    <span className="italic">can take you.</span>
                  </h2>
                </div>
              </div>

              {/* Introduction Content */}
              <div className="relative">
                <div className="mb-7 flex items-center gap-3">
                  <Briefcase
                    size={20}
                    strokeWidth={1.5}
                    className="text-[#8F7746]"
                  />

                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                    Electronics &amp; Communication Engineering
                  </p>
                </div>

                <p className="text-justify text-[15px] leading-[2] text-[#1E1917]/75 sm:text-base sm:leading-[2.05]">
                  {introParagraph}
                </p>

                <div className="mt-9 border-l-2 border-[#D2B87C] bg-white px-5 py-5 sm:px-6">
                  <p className="font-serif text-xl leading-8 text-[#20235A] sm:text-2xl">
                    A discipline that powers telecommunications, embedded
                    systems, VLSI and biomedical technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            CAREER OPPORTUNITIES SECTION
        ========================================= */}

        <section className="bg-[#FAF7F2] px-5 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-[1440px]">
            {/* Section Introduction */}
            <div className="mb-12 max-w-3xl lg:mb-16 ">
              <SectionLabel >
                CAREER OPPORTUNITIES
              </SectionLabel>

              <h2 className="mt-4 font-serif text-3xl font-medium leading-tight text-[#20235A] sm:text-4xl lg:text-[42px]">
                Career Scope of Electronics and Communication Engineering
              </h2>

              <p className="mt-6 text-justify text-[15px] leading-8 text-[#55545A]">
                Electronics and Communication Engineering (ECE) is a dynamic and versatile field that blends electronics, communication, and modern digital technologies. With rapid advancements in areas like automation, wireless systems, and smart devices, ECE graduates have a wide range of career opportunities across multiple sectors.
              </p>
            </div>

            {/* Career Pathway Cards */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {CAREER_PATHS.map((career) => (
                <article
                  key={career.number}
                  className="group flex h-full flex-col border border-[#D2B87C]/40 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D2B87C] hover:shadow-[0_12px_35px_rgba(32,35,90,0.07)] sm:p-7"
                >
                  {/* Number and Accent */}
                  <div className="mb-6 flex items-center justify-between">
                    <span className="font-serif text-3xl text-[#D2B87C]">
                      {career.number}
                    </span>

                    <span className="h-px w-12 bg-[#D2B87C] transition-all duration-300 group-hover:w-20" />
                  </div>

                  {/* Career Title */}
                  <h3 className="font-serif text-2xl font-medium leading-snug text-[#20235A]">
                    {career.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 text-justify text-[15px] leading-8 text-[#55545A]">
                    {career.description}
                  </p>

                  {/* Job Titles */}
                  <div className="mt-7 border-t border-[#D2B87C]/40 pt-5">
                    <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                      Job Titles
                    </h4>

                    <ul className="mt-4 space-y-3">
                      {career.jobTitles.map((job, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-[14px] leading-6 text-[#55545A]"
                        >
                          <span className="mt-[9px] h-1.5 w-1.5 shrink-0 bg-[#D2B87C]" />

                          <span>{job}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Roles and Responsibilities */}
                  <div className="mt-7 border-t border-[#D2B87C]/40 pt-5">
                    <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                      Roles &amp; Responsibilities
                    </h4>

                    <ul className="mt-4 space-y-3">
                      {career.roles.map((role, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-[14px] leading-6 text-[#55545A]"
                        >
                          <span className="mt-[9px] h-1.5 w-1.5 shrink-0 bg-[#D2B87C]" />

                          <span>{role}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}
