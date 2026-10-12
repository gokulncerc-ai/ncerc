import type { ReactNode } from "react";

import Link from "next/link";
import Image from "next/image";

import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Cpu,
  GraduationCap,
  Radio,
  Target,
  Users,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "./DepartmentNav/DepartmentNav";

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

type Point = {
  label: string;
  text: string;
};

const DEPARTMENT_PATH = "/department/electronics-and-communication-engineering";

const aboutParagraphs: string[] = [
  "The Department of ECE was established in 2002 with an intake of 60 students for undergraduate (B.Tech) programme and enhanced to an intake of 120 students from 2006. The ECE department formally inaugurated the ECHOS (The ECE Association) in 2009 and under this banner many extra-academic activities have been conducted such as paper presentation, quiz competition, workshops and seminars. Department is closely associated with Institute of Electronics and Telecommunication Engineers (IETE) Palakkad Centre to organize technical events like guest lecture, seminars and conferences.",
  "The department offers one Postgraduate (M.Tech) programme, namely, \u201cVLSI\u201d from 2012 with an intake of 18.",
  "Department has well-equipped laboratories in the areas of Electronics, Communication, IoT & VLSI. The department is committed to educate students about professional and ethical responsibilities and train them to build life skills for their career development.",
  "Further, the students of the department are encouraged to take up in-plant trainings, summer internships and project work at industries and the department ensures that all students who are eligible are placed on campus.",
];

const instituteVision =
  "To mould true citizens who are millennium leaders and catalysts of change through excellence in education.";

const instituteMissionParagraphs: string[] = [
  "NCERC is committed to transform itself into a center of excellence in Learning and Research in Engineering and Frontier Technology and to impart quality education to mould technically competent citizens with moral integrity, social commitment and ethical values.",
  "We intend to facilitate our students to assimilate the latest technological know-how and to imbibe discipline, culture and spiritually, and to mould them in to technological giants, dedicated research scientists and intellectual leaders of the country who can spread the beams of light and happiness among the poor and the underprivileged.",
];
const hero = { image: "/images/dpt/electronics-and-communication-engineering/hero.jpg"};
const hod = {
  name: "Dr. Mredhula. L",
  qualification: "M.TECH, Ph.D",
  title: "Professor & Head",
  image:
    "/images/dpt/electronics-and-communication-engineering/img/faculty/DrMredhula-L-hod.png",
  messageParagraphs: [
    "I welcome you to NCERC, dedicated to ensuring great careers for our students. We are forging deeper industry linkages, creating an academic and research culture from Starting day and assuring the seamless education using the state of art technology available.",
    "We have invested a great deal of time and energy in creating strong foundations for our department and will continue to do all that it takes to ensure the bright career opportunities through placement-focused studies for our student.",
    "The excellent infrastructure, well experienced teaching faculty of the best kind of the Department ensuring quality education such as interaction among students, parents and staff, along with a Training and Placement Cell ensures a bright future to its students.",
    "I wish to appreciate the team of faculty members and the students for their brilliant and tireless efforts. Depending upon the interest of the student, he/she may choose to go for higher studies or employment and can choose to do research & development, design, production, application, testing, or management in the Information Technology industry. We strongly encourage innovation in research, in teaching and in service to the profession, the local community and industry. I wish all the students and faculty a good academic career.",
    "Sincerely, and with best wishes,",
  ],
};

const departmentVision =
  "A leading Center of Excellence in Electronics and Communication Engineering, empowering ethical professionals to apply advanced, industry-relevant knowledge for sustainable societal and industrial impact.";

const missionPoints: Point[] = [
  {
    label: "MD 1",
    text: "Provide quality education in Communication Systems, integrating technical excellence with ethical and social responsibility.",
  },
  {
    label: "MD 2",
    text: "Promote research and innovation in emerging technologies aligned with industry needs.",
  },
  {
    label: "MD 3",
    text: "Foster entrepreneurship and collaborative learning through academia-industry partnerships.",
  },
  {
    label: "MD 4",
    text: "Develop sustainable, inclusive engineering solutions that address real-world challenges and uplift communities.",
  },
];

const peoPoints: Point[] = [
  {
    label: "PEO 1",
    text: "To produce graduates with strong technical expertise and ethical responsibility who excel in professional environments or pursue higher education with a commitment to quality and integrity.",
  },
  {
    label: "PEO 2",
    text: "To produce graduates capable of engaging in research and innovation by applying emerging technologies to solve complex problems aligned with evolving industry and societal needs.",
  },
  {
    label: "PEO 3",
    text: "To produce graduates who exhibit leadership, teamwork, and entrepreneurial skills, enabling collaborative learning and partnerships with industry and academia for societal impact.",
  },
];

const poPoints: Point[] = [
  {
    label: "Engineering Knowledge",
    text: "Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.",
  },
  {
    label: "Problem Analysis",
    text: "Identify, formulate, research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.",
  },
  {
    label: "Design/Development of Solutions",
    text: "Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.",
  },
  {
    label: "Conduct Investigations of Complex Problems",
    text: "Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.",
  },
  {
    label: "Modern Tool Usage",
    text: "Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.",
  },
  {
    label: "The Engineer and Society",
    text: "Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal, and cultural issues and the consequent responsibilities relevant to the professional engineering practice.",
  },
  {
    label: "Environment and Sustainability",
    text: "Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.",
  },
  {
    label: "Ethics",
    text: "Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.",
  },
  {
    label: "Individual and Team Work",
    text: "Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.",
  },
  {
    label: "Communication",
    text: "Communicate effectively on complex engineering activities with the engineering community and with society at large, such as being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.",
  },
  {
    label: "Project Management and Finance",
    text: "Demonstrate knowledge and understanding of the engineering and management principles and apply these to one\u2019s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.",
  },
  {
    label: "Life-long Learning",
    text: "Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.",
  },
];

const psoPoints: (Point & { title: string })[] = [
  {
    label: "PSO 1",
    title: "Design & Implementation",
    text: "Apply the concepts of Electronics, Communications, Signal Processing, VLSI, Control Systems etc., in the design and implementation of Engineering Systems.",
  },
  {
    label: "PSO 2",
    title: "Problem Solving with Modern Tools",
    text: "Solve complex Electronics and Communication Engineering problems, using latest hardware and software tools, either independently or in team.",
  },
];

const quickHighlights = [
  {
    number: "01",
    title: "Established 2002",
    description:
      "Over two decades of B.Tech education, with the M.Tech VLSI programme running since 2012.",
    icon: Radio,
  },
  {
    number: "02",
    title: "Labs in Electronics, IoT & VLSI",
    description:
      "Well-equipped laboratories covering Electronics, Communication, IoT and VLSI.",
    icon: Cpu,
  },
  {
    number: "03",
    title: "Training & Placement",
    description:
      "In-plant training, summer internships and project work with a placement-focused approach.",
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
  id,
  eyebrow,
  title,
  description,
  children,
  tone = "light",
}: {
  id?: string;
  eyebrow: string;
  title: ReactNode;
  description?: string;
  children: ReactNode;
  tone?: "light" | "warm";
}) {
  const background = tone === "warm" ? "bg-[#F2EFE8]" : "bg-[#FAF7F2]";

  return (
    <section
      id={id}
      className={`${background} scroll-mt-24 px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24 xl:px-20`}
    >
      <div className="mx-auto max-w-[1200px]">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
        />
        {children}
      </div>
    </section>
  );
}

export default function ElectronicsAndCommunicationEngineeringPage() {
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
                    NBA Accredited Department
                  </p>
                </div>

                <h1 className="max-w-4xl font-serif text-[42px] font-normal leading-[1.06] tracking-[-0.035em] sm:text-[56px] lg:text-[64px] xl:text-[72px]">
                  Electronics &amp;
                  <br />
                  Communication
                  <br />
                  <span className="italic text-[#D2B87C]">Engineering</span>
                </h1>

                <p className="mt-7 max-w-2xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
                  Producing technically strong, ethical and innovative
                  electronics and communication engineers through quality
                  education, research and industry-relevant training.
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

                  <a
                    href="#hod-message"
                    className="inline-flex min-h-12 items-center gap-3 border border-white/25 px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:border-[#D2B87C] hover:text-[#D2B87C]"
                  >
                    HOD&apos;s Message
                  </a>
                </div>

                <div className="mt-12 flex items-center gap-3 text-xs text-white/50">
                  <Link
                    href={DEPARTMENT_PATH}
                    className="transition-colors hover:text-white"
                  >
                    Departments
                  </Link>

                  <span className="text-[#D2B87C]">/</span>

                  <span className="text-white/80">
                    Electronics &amp; Communication Engineering
                  </span>
                </div>
              </div>

              {/* HOD Image */}
              <div className="relative mx-auto w-full max-w-[470px] lg:ml-auto">
                <div className="absolute -bottom-4 -left-4 right-4 top-4 border border-[#D2B87C]/60 sm:-bottom-5 sm:-left-5 sm:right-5 sm:top-5" />

                <div className="relative aspect-[4/4.7] overflow-hidden bg-[#30336B]">
                  <Image
                    src={hero.image}
                    alt="Head of the Department"
                    fill
                    priority
                    sizes="(min-width: 1024px) 470px, 100vw"
                    className="object-cover object-top"
                  />
                </div>

                {/* Floating badge */}
                <div className="absolute -right-2 top-8 hidden border border-[#D2B87C]/60 bg-[#20235A] px-4 py-3 sm:-right-4 sm:block sm:px-5 sm:py-4">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-[#D2B87C]">
                    Electronics &amp; Communication
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
                      Connecting
                      <br />
                      <span className="italic">ideas to signals.</span>
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
                    Electronics &amp; Communication Engineering
                  </p>
                </div>

                <div className="space-y-5">
                  {aboutParagraphs.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-justify text-[15px] leading-[2] text-[#1E1917]/75 sm:text-base sm:leading-[2.05]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="mt-9 border-l-2 border-[#D2B87C] bg-white px-5 py-5 sm:px-6">
                  <p className="font-serif text-xl leading-8 text-[#20235A] sm:text-2xl">
                    A committed, placement-focused environment for the
                    electronics and communication engineers of tomorrow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INSTITUTE VISION & MISSION */}
        <EditorialSection
          eyebrow="The Institute"
          title={
            <>
              Vision &amp; mission
              <br />
              <span className="italic">of NCERC.</span>
            </>
          }
          tone="warm"
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <article className="border border-[#20235A]/10 bg-white p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                Vision of the Institute
              </p>

              <p className="mt-6 font-serif text-xl leading-8 text-[#20235A] sm:text-2xl sm:leading-9">
                &ldquo;{instituteVision}&rdquo;
              </p>
            </article>

            <article className="border border-[#20235A]/10 bg-white p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                Mission of the Institute
              </p>

              <div className="mt-6 space-y-4">
                {instituteMissionParagraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-justify text-sm leading-7 text-[#1E1917]/70 sm:text-[15px] sm:leading-8"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          </div>
        </EditorialSection>

        {/* HOD MESSAGE */}
        <EditorialSection
          id="hod-message"
          eyebrow="HoD's Message"
          title={
            <>
              A word from
              <br />
              <span className="italic">our Head.</span>
            </>
          }
        >
          <div className="grid gap-10 md:grid-cols-[320px_1fr] md:items-start lg:gap-14">
            <div className="mx-auto w-full max-w-[320px]">
              <div className="relative">
                <div className="absolute -bottom-3 -left-3 right-3 top-3 border border-[#D2B87C]/70" />

                <div className="relative aspect-[3/4] overflow-hidden bg-[#30336B]">
                  <Image
                    src={hod.image}
                    alt={hod.name}
                    fill
                    sizes="320px"
                    className="object-cover object-top"
                  />
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-serif text-2xl leading-tight text-[#20235A]">
                  {hod.name}
                </h3>

                <p className="mt-1 text-xs font-medium text-[#1E1917]/55">
                  {hod.qualification}
                </p>

                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                  {hod.title}
                </p>
              </div>
            </div>

            <div className="border-l-2 border-[#D2B87C] bg-white px-6 py-7 sm:px-8 sm:py-9">
              <div className="space-y-4">
                {hod.messageParagraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-justify text-sm leading-7 text-[#1E1917]/70 sm:text-[15px] sm:leading-8"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </EditorialSection>

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
                  Empowering
                  <br />
                  <span className="italic text-[#D2B87C]">
                    ethical engineers.
                  </span>
                </h2>
              </div>

              <div className="border-l border-[#D2B87C]/40 pl-6 sm:pl-8">
                <p className="font-serif text-2xl leading-[1.55] text-white/90 sm:text-3xl">
                  &ldquo;{departmentVision}&rdquo;
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
          description="Our mission focuses on quality education, research and innovation, entrepreneurship and sustainable solutions that serve society."
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
          description="The Program Educational Objectives describe the professional capabilities and continuous development expected from Electronics and Communication Engineering graduates."
          tone="warm"
        >
          <ObjectiveList points={peoPoints} />

          <div className="mt-14">
            <h3 className="font-serif text-2xl leading-tight text-[#20235A] sm:text-3xl">
              Mapping of PEOs with the Program Outcomes (POs)
            </h3>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-[#1E1917]/65 sm:text-base sm:leading-8">
              The Electronics and Communication Engineering Program outcomes
              leading to the achievement of the objectives can be summarized in
              the following table.
            </p>

            <div className="relative mt-6 h-64 w-full overflow-hidden border border-[#20235A]/10 bg-white sm:h-96">
              <Image
                src="/images/dpt/electronics-and-communication-engineering/pso.jpg"
                alt="Mapping of PEOs with Program Outcomes"
                fill
                sizes="(min-width: 1200px) 1200px, 100vw"
                className="object-contain"
              />
            </div>
          </div>
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
              Electronics expertise
              <br />
              <span className="italic">in practice.</span>
            </>
          }
          description="Program Specific Outcomes connect the academic foundation of Electronics and Communication Engineering with design, implementation and modern tools."
          tone="warm"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {psoPoints.map((point) => (
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
                  {point.title}
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
                Explore Electronics &amp; Communication
              </p>

              <h2 className="max-w-2xl font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
                Discover the people, facilities and opportunities behind our
                department.
              </h2>
            </div>

            <a
              href="#hod-message"
              className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-3 border border-[#D2B87C]/60 px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:bg-[#D2B87C] hover:text-[#20235A]"
            >
              Meet the HOD
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}