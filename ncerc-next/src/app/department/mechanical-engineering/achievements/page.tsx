"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  Award,
  Building2,
  CalendarDays,
  GraduationCap,
  Handshake,
  Lightbulb,
  Music2,
  Wrench,
} from "lucide-react";
import SiteHeader from "@/components/header/SiteHeader";
import InnerHeader from "../DepartmentNav/DepartmentNav";
import FooterSection from "@/components/home/FooterSection";


type Achievement = {
  id: string;
  category: string;
  title: string;
  date: string;
  icon: typeof Lightbulb;
  description: string;
  imageLabel: string;
  imageHint: string;
  image?: string;
  details?: {
    label: string;
    value: string;
  }[];
  projects?: string[];
  paragraphs?: string[];
};

const achievements: Achievement[] = [
  {
    id: "01",
    category: "Research & Innovation",
    title: "IPTIF AGNI UG FELLOWSHIP",
    date: "Student Innovation Initiative",
    icon: Lightbulb,
    description:
      "IIT Palakkad has sanctioned a total grant of ₹2.4 lakhs for four selected students from S7 Mechanical Engineering",
    imageLabel: "IPTIF AGNI UG Fellowship",
    imageHint: "Fellowship and student project photograph",
    image:
      "/images/department/mechanical-engineering/achievements/iptif.webp",
    details: [
      {
        label: "Funding",
        value: "₹2.4 lakhs sanctioned",
      },
      {
        label: "Students",
        value: "Four S7 Mechanical Engineering students",
      },
      {
        label: "Project Guide",
        value: "Mr. Sudeesh S., Assistant Professor",
      },
      {
        label: "Institution",
        value: "NCERC, Pampady",
      },
    ],
    projects: [
      "Design, Development, and Testing of a Motor Test Rig for an Electric Vehicle with Continuously Variable Transmission (CVT)",
      "AI-Based Fault Detection of Automotive Gearbox Using Vibration Signature Analysis",
    ],
  },
  {
    id: "02",
    category: "Industry Collaboration",
    title: "MoU with Steel Industries Limited Kerala",
    date: "21 January 2026",
    icon: Handshake,
    description:
      "The Department of Mechanical Engineering, Nehru College of Engineering and Research Centre (NCERC), successfully signed a Memorandum of Understanding (MoU) with Steel Industries Limited Kerala (SILK) for academic and industrial collaboration.",
    imageLabel: "NCERC – SILK MoU",
    imageHint: "Add the MoU signing ceremony photograph here",
    image:
      "/images/department/mechanical-engineering/achievements/mou1.webp",
    details: [
      {
        label: "Industry Partner",
        value: "Steel Industries Limited Kerala (SILK)",
      },
      {
        label: "NCERC Representative",
        value: "Dr. Benny Paul",
      },
      {
        label: "SILK Representative",
        value: "Mr. Hareesh K. V., Senior Manager",
      },
      {
        label: "In Presence Of",
        value: "Dr. Anoop K. J., Principal, NCERC",
      },
    ],
    paragraphs: [
      "The MoU was formally signed in the presence of Dr. Anoop K J, Principal, NCERC. The Mechanical Engineering Department was represented by Dr. Benny Paul, and SILK was represented by Mr. Hareesh K V, Senior Manager.",
      "The MoU aims to strengthen industry–academia interaction through student internships, industrial training, technical support, expert talks, and collaborative projects. As part of the meeting, detailed discussions were also held regarding consultancy opportunities and joint technical activities between NCERC and SILK.",
    ],
  },
  {
    id: "03",
    category: "Industrial Experience",
    title: "Consultancy Work at SILK, Palappuram",
    date: "14 February 2026",
    icon: Wrench,
    description:
      "S2 & S4 Mechanical students have started consultancy work at Steel Industries Limited Kerala (SILK), Palappuram today as part of an Industry–Institute Collaboration.",
    imageLabel: "Industrial Consultancy at SILK",
    imageHint: "Add a photograph of students at the SILK plant here",
    image:
      "/images/department/mechanical-engineering/achievements/silk1.webp",
    paragraphs: [
      "The visit gives students real industrial exposure through hands-on involvement in plant operations, maintenance practices and teamwork in a professional environment.",
      "The work is being carried out under the joint guidance of faculty members and experts from SILK.",
    ],
  },
  {
    id: "04",
    category: "Arts & Cultural Achievement",
    title: "Second Prize at The Showdown – NAKSHATRA 2K26",
    date: "NAKSHATRA 2K26",
    icon: Music2,
    description:
      "P. V. Sivaramakrishnan, an S4 Mechanical Engineering student, secured second prize as part of a musical band team in “The Showdown” band competition.",
    imageLabel: "NAKSHATRA 2K26 Band Competition",
    imageHint: "Add the band competition or prize-winning photograph here",
    image:
      "/images/department/mechanical-engineering/achievements/Band.webp",
    details: [
      {
        label: "Event",
        value: "The Showdown – Musical Band Competition",
      },
      {
        label: "Festival",
        value: "NAKSHATRA 2K26",
      },
      {
        label: "Venue",
        value:
          "Saint GITS College of Engineering and Technology (Autonomous), Kottayam",
      },
      {
        label: "Student",
        value: "P. V. Sivaramakrishnan, S4 Mechanical Engineering",
      },
      {
        label: "Achievement",
        value: "Second Prize",
      },
    ],
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <div className="mb-5 flex items-center gap-3">
        <span
          className={`h - px w - 10 ${light ? "bg-[#D2B87C]" : "bg-[#8F7746]"
            } `}
        />
        <p
          className={`font - sans text - [10px] font - semibold uppercase tracking - [0.25em] ${light ? "text-[#D2B87C]" : "text-[#8F7746]"
            } `}
        >
          {eyebrow}
        </p>
      </div>

      <h2
        className={`font - serif text - 3xl font - medium leading - tight tracking - tight sm: text - 4xl lg: text - 5xl ${light ? "text-white" : "text-[#20235A]"
          } `}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt - 5 max - w - 2xl font - sans text - sm leading - 7 sm: text - base sm: leading - 8 ${light ? "text-white/70" : "text-[#68645E]"
            } `}
        >
          {description}
        </p>
      )}
    </div>
  );
}

function ImagePlaceholder({
  number,
  label,
  hint,
  image,
}: {
  number: string;
  label: string;
  hint: string;
  image?: string;
}) {
  return (
    <div className="group relative min-h-[250px] overflow-hidden border border-[#D8D1C7] bg-[#F2EFE8] sm:min-h-[300px] lg:min-h-full">
      {image ? (
        <div className="relative min-h-[280px] h-full w-full sm:min-h-[360px] lg:min-h-full">
          <Image
            src={image}
            alt={label}
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-contain p-4 transition-transform duration-500 group-hover:scale-[1.02] sm:p-6"
          />

          <div className="pointer-events-none absolute inset-3 border border-[#D2B87C]/50 sm:inset-5" />

          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#20235A]/90 via-[#20235A]/45 to-transparent px-6 pb-6 pt-16">
            <p className="font-sans text-[9px] font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
              Achievement {number}
            </p>
            <p className="mt-2 font-serif text-xl font-medium text-white sm:text-2xl">
              {label}
            </p>
          </div>
        </div>
      ) : (
        <div
          role="img"
          aria-label={`Image placeholder for ${label}`}
          className="relative flex min-h-[250px] flex-col items-center justify-center p-6 text-center sm:min-h-[300px]"
        >
          <div className="pointer-events-none absolute inset-3 border border-[#D2B87C]/50 sm:inset-5" />

          <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-[#D2B87C] text-[#8F7746] transition-colors duration-300 group-hover:bg-[#20235A] group-hover:text-[#D2B87C]">
            <span className="font-serif text-lg">{number}</span>
          </div>

          <p className="relative mt-5 font-serif text-xl font-medium text-[#20235A]">
            {label}
          </p>

          <p className="relative mt-2 max-w-xs font-sans text-xs leading-6 text-[#77716A]">
            {hint}
          </p>

          <span className="relative mt-5 inline-flex items-center gap-2 border border-[#D2B87C] px-4 py-2 font-sans text-[9px] font-semibold uppercase tracking-[0.16em] text-[#20235A]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#8F7746]" />
            Image placeholder
          </span>
        </div>
      )}
    </div>
  );
}

function DetailList({
  items,
}: {
  items: {
    label: string;
    value: string;
  }[];
}) {
  return (
    <div className="mt-7 border-t border-[#E3DED5]">
      {items.map((item) => (
        <div
          key={item.label}
          className="grid grid-cols-1 gap-1 border-b border-[#E3DED5] py-4 sm:grid-cols-[150px_1fr] sm:gap-5"
        >
          <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8F7746]">
            {item.label}
          </p>
          <p className="font-sans text-sm leading-6 text-[#4F4B46]">
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
}

function AchievementCard({ item }: { item: Achievement }) {
  const Icon = item.icon;

  return (
    <article
      id={`achievement - ${item.id} `}
      className="scroll-mt-28 border border-[#DED8CD] bg-white"
    >
      <div className="grid lg:grid-cols-2">
        <ImagePlaceholder
          number={item.id}
          label={item.imageLabel}
          hint={item.imageHint}
          image={item.image}
        />

        <div className="flex flex-col p-6 sm:p-9 lg:p-10">
          <div className="flex items-start justify-between gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#D2B87C]/70 bg-[#FAF7F2] text-[#8F7746]">
              <Icon size={21} strokeWidth={1.5} />
            </div>

            <span className="border border-[#E3DED5] px-3 py-2 font-sans text-[9px] font-semibold uppercase tracking-[0.14em] text-[#8F7746]">
              {item.category}
            </span>
          </div>

          <div className="mt-7 flex items-center gap-2 text-[#817A70]">
            <CalendarDays size={14} strokeWidth={1.7} />
            <span className="font-sans text-[10px] font-medium uppercase tracking-[0.15em]">
              {item.date}
            </span>
          </div>

          <h3 className="mt-4 font-serif text-2xl font-medium leading-tight text-[#20235A] sm:text-3xl">
            {item.title}
          </h3>

          <p className="mt-5 font-sans text-sm leading-7 text-[#68645E]">
            {item.description}
          </p>

          {item.details && <DetailList items={item.details} />}

          {item.projects && (
            <div className="mt-7">
              <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                Selected Projects
              </p>

              <div className="mt-4 space-y-3">
                {item.projects.map((project, index) => (
                  <div
                    key={project}
                    className="flex gap-3 border border-[#E3DED5] bg-[#FAF7F2] p-4"
                  >
                    <span className="mt-0.5 font-serif text-sm text-[#8F7746]">
                      0{index + 1}
                    </span>
                    <p className="font-sans text-sm leading-6 text-[#4F4B46]">
                      {project}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {item.paragraphs && (
            <div className="mt-6 space-y-4">
              {item.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="font-sans text-sm leading-7 text-[#68645E]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          )}

          <div className="mt-auto flex items-center gap-2 pt-8 font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8F7746]">
            <Award size={15} strokeWidth={1.7} />
            <span>Department Achievement</span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function MechanicalAchievementsPage() {
  return (
    <>
      <SiteHeader />


      <main className="overflow-hidden bg-[#FAF7F2] text-[#1E1917]">
        {/* Hero */}
        <section className="relative isolate flex min-h-[560px] items-end overflow-hidden bg-[#20235A] sm:min-h-[620px] lg:min-h-[680px]">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-24 -top-24 h-[300px] w-[300px] rounded-full border border-white/10 sm:h-[480px] sm:w-[480px]" />
            <div className="absolute -right-10 -top-10 h-[220px] w-[220px] rounded-full border border-[#D2B87C]/20 sm:h-[360px] sm:w-[360px]" />
            <div className="absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-t from-black/20 to-transparent" />
            <div className="absolute bottom-0 right-[12%] top-0 hidden w-px bg-white/10 lg:block" />
          </div>

          <div className="relative mx-auto w-full max-w-[1440px] px-6 pb-16 pt-36 sm:px-10 sm:pb-20 lg:px-16 lg:pb-24">
            <div className="max-w-4xl">
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-10 bg-[#D2B87C]" />
                <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D2B87C]">
                  Department of Mechanical Engineering
                </p>
              </div>

              <h1 className="font-serif text-5xl font-medium leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-8xl">
                Excellence
                <br />
                <span className="text-[#D2B87C]">in Action.</span>
              </h1>

              <p className="mt-7 max-w-2xl font-sans text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
                Celebrating the achievements, industry partnerships, student
                innovations, and collaborative initiatives that bring
                engineering knowledge to life.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="#achievements"
                  className="inline-flex items-center gap-3 bg-[#D2B87C] px-6 py-4 font-sans text-[10px] font-bold uppercase tracking-[0.16em] text-[#20235A] transition-colors hover:bg-white"
                >
                  Explore Achievements
                  <ArrowDown size={15} />
                </Link>

                <div className="flex items-center gap-3 border border-white/20 px-5 py-4">
                  <Award size={18} className="text-[#D2B87C]" />
                  <span className="font-sans text-[10px] font-medium uppercase tracking-[0.14em] text-white/80">
                    Innovation · Industry · Excellence
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-16 grid max-w-3xl grid-cols-2 border-t border-white/20 pt-6 sm:grid-cols-3">
              <div className="border-r border-white/20 pr-4">
                <p className="font-serif text-3xl text-white sm:text-4xl">
                  04
                </p>
                <p className="mt-2 font-sans text-[9px] uppercase tracking-[0.15em] text-white/60 sm:text-[10px]">
                  Featured Highlights
                </p>
              </div>

              <div className="border-r border-white/20 px-4 sm:px-6">
                <p className="font-serif text-3xl text-white sm:text-4xl">
                  ₹2.4L
                </p>
                <p className="mt-2 font-sans text-[9px] uppercase tracking-[0.15em] text-white/60 sm:text-[10px]">
                  Fellowship Funding
                </p>
              </div>

              <div className="col-span-2 mt-5 pl-0 sm:col-span-1 sm:mt-0 sm:pl-6">
                <p className="font-serif text-3xl text-white sm:text-4xl">
                  Industry
                </p>
                <p className="mt-2 font-sans text-[9px] uppercase tracking-[0.15em] text-white/60 sm:text-[10px]">
                  Academic Collaboration
                </p>
              </div>
            </div>
          </div>
        </section>
        <InnerHeader />

        {/* Introduction */}
        <section className="border-b border-[#E3DED5] bg-white">
          <div className="mx-auto grid max-w-[1440px] gap-10 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-16 lg:py-24">
            <SectionHeading
              eyebrow="Our Achievements"
              title="Learning beyond the classroom."
              description="Engineering education comes alive through research, industry engagement, practical experience, and student accomplishments."
            />

            <div className="flex flex-col justify-center">
              <p className="font-sans text-sm leading-8 text-[#68645E] sm:text-base">
                The Department of Mechanical Engineering at NCERC encourages
                students to explore new ideas, apply their technical knowledge,
                and develop the skills needed to address real-world challenges.
                Through research fellowships, industrial partnerships,
                consultancy initiatives, and extracurricular activities, our
                students gain valuable experiences that extend beyond academic
                learning.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="border-l-2 border-[#D2B87C] pl-4">
                  <GraduationCap
                    size={21}
                    strokeWidth={1.5}
                    className="text-[#8F7746]"
                  />
                  <p className="mt-3 font-serif text-lg text-[#20235A]">
                    Student Growth
                  </p>
                  <p className="mt-1 font-sans text-xs leading-5 text-[#77716A]">
                    Skills and confidence through experience
                  </p>
                </div>

                <div className="border-l-2 border-[#D2B87C] pl-4">
                  <Building2
                    size={21}
                    strokeWidth={1.5}
                    className="text-[#8F7746]"
                  />
                  <p className="mt-3 font-serif text-lg text-[#20235A]">
                    Industry Links
                  </p>
                  <p className="mt-1 font-sans text-xs leading-5 text-[#77716A]">
                    Connecting academics with industry
                  </p>
                </div>

                <div className="border-l-2 border-[#D2B87C] pl-4">
                  <Lightbulb
                    size={21}
                    strokeWidth={1.5}
                    className="text-[#8F7746]"
                  />
                  <p className="mt-3 font-serif text-lg text-[#20235A]">
                    Innovation
                  </p>
                  <p className="mt-1 font-sans text-xs leading-5 text-[#77716A]">
                    Turning ideas into practical solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievement cards */}
        <section
          id="achievements"
          className="scroll-mt-20 mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-28"
        >
          <div className="mb-12 flex flex-col justify-between gap-6 border-b border-[#D8D1C7] pb-8 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Highlights & Recognition"
              title="Milestones that matter."
              description="Explore the recent achievements and initiatives of our students and faculty."
            />

            <p className="shrink-0 font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8F7746]">
              2026 Highlights
            </p>
          </div>

          <div className="space-y-8 text-justify">
            {achievements.map((item) => (
              <AchievementCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        {/* Closing CTA */}
        {/* <section className="relative overflow-hidden bg-[#20235A]">
          <div className="pointer-events-none absolute -right-16 -top-28 h-[300px] w-[300px] rounded-full border border-white/10 sm:h-[420px] sm:w-[420px]" />
          <div className="pointer-events-none absolute -right-2 -top-14 h-[220px] w-[220px] rounded-full border border-[#D2B87C]/20 sm:h-[320px] sm:w-[320px]" />

          <div className="relative mx-auto flex max-w-[1440px] flex-col justify-between gap-8 px-6 py-16 sm:px-10 sm:py-20 lg:flex-row lg:items-end lg:px-16 lg:py-24">
            <div className="max-w-3xl">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#D2B87C]" />
                <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                  Building the Future
                </p>
              </div>

              <h2 className="font-serif text-3xl font-medium leading-tight text-white sm:text-4xl lg:text-5xl">
                Driven by curiosity.
                <br />
                <span className="text-[#D2B87C]">
                  Defined by achievement.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl font-sans text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
                We continue to encourage innovation, practical learning, and
                meaningful collaboration to prepare students for the
                engineering challenges of tomorrow.
              </p>
            </div>

            <Link
              href="/departments/mechanical_engineering"
              className="inline-flex w-fit shrink-0 items-center gap-3 border border-[#D2B87C] px-6 py-4 font-sans text-[10px] font-bold uppercase tracking-[0.16em] text-[#D2B87C] transition-colors hover:bg-[#D2B87C] hover:text-[#20235A]"
            >
              Explore Department
              <ArrowRight size={15} />
            </Link>
          </div>
        </section> */}
      </main>

      <FooterSection />
    </>
  );
}
