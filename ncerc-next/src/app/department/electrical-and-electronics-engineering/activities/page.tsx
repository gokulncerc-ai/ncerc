import type { ReactNode } from "react";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  ChevronRight,
  Clock3,
  GraduationCap,
  MapPin,
  BookOpen,
  Cpu,
  Zap,
  Ship,
  Factory,
  Leaf,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../DepartmentNav/DepartmentNav";

export const metadata = {
  title:
    "EEE Activities 2025–26 | Electrical and Electronics Engineering - NCERC",
  description:
    "Explore the academic sessions, technical talks, workshops, and industrial visits organized by the Electrical and Electronics Engineering Department at Nehru College of Engineering and Research Centre.",
  keywords: [
    "Electrical and Electronics Engineering activities",
    "EEE activities NCERC",
    "EEE workshops Kerala",
    "EEE industrial visits",
    "Electrical Engineering technical talks",
    "NCERC Electrical and Electronics Engineering",
  ],
  robots: { index: true, follow: true },
};

interface Activity {
  number: string;
  category: string;
  title: string;
  description: string;
  date?: string;
  speaker?: string;
  designation?: string;
  institution?: string;
  batch?: string;
  location?: string;
  icon: ReactNode;
  type: "academic" | "technical" | "industrial";
}

const activities: Activity[] = [
  {
    number: "01",
    category: "Research & Publication",
    title: "Research to Publication: A Practical Guide for Students",
    description:
      "On 19th September , 2025, a session was conducted for the MTech students on “Research to Publication: A practical guide for students” by Dr. Rahul Satheesh Asst.Prof.(Sr.Gr.), Amrita School of Artificial Intelligence, Amrita Vishwa Vidyapeetham Coimbatore.",
    date: "19 September 2025",
    speaker: "Dr. Rahul Satheesh",
    designation: "Assistant Professor (Sr. Gr.)",
    institution:
      "Amrita School of Artificial Intelligence, Amrita Vishwa Vidyapeetham, Coimbatore",
    icon: <BookOpen className="h-5 w-5" />,
    type: "academic",
  },
  {
    number: "02",
    category: "Two-Day Workshop",
    title: "Code to Intelligence: An Electrical Engineering Perspective",
    description:
      "Two days workshop was conducted on the topic  “Code to Intelligence: An Electrical Engineering Perspective” by Dr. Baburaj P Professor and Head, Department of EEE, Government College of Engineering Kannur.",
    speaker: "Dr. Baburaj P",
    designation: "Professor and Head, Department of EEE",
    institution: "Government College of Engineering, Kannur",
    icon: <Cpu className="h-5 w-5" />,
    type: "technical",
  },
  {
    number: "03",
    category: "Technical Talk",
    title:
      "High Power Electromagnetics — Basis for Future Directed Energy Weapons",
    description:
      "A Technical talk on “ High Power Electromagnetics-Basis for future Directed Energy Weapons” by Dr. Joy Thomas M was conducted on 6th February 2026 for EEE students.",
    date: "6 February 2026",
    speaker: "Dr. Joy Thomas M",
    icon: <Zap className="h-5 w-5" />,
    type: "technical",
  },
  {
    number: "04",
    category: "Industrial Visit",
    title: "Visit to CSIR-NIO",
    description:
      "Students of 2023-2027 Batch were taken for industrial visit to CSIR-NIO on 12th February 2026.",
    date: "12 February 2026",
    batch: "2023–2027 Batch",
    location: "CSIR-NIO",
    icon: <Ship className="h-5 w-5" />,
    type: "industrial",
  },
  {
    number: "05",
    category: "Industrial Visit",
    title: "Visit to Marine Electricals",
    description:
      "Students of 2023-2027 Batch were taken for industrial visit to Marine Electricals on 14th February 2026.",
    date: "14 February 2026",
    batch: "2023–2027 Batch",
    location: "Marine Electricals",
    icon: <Factory className="h-5 w-5" />,
    type: "industrial",
  },
  {
    number: "06",
    category: "Industrial Visit",
    title: "Visit to Kannan Devan Hills Plantation",
    description:
      "Students of 2024-2028 Batch were taken for industrial visit to Kannan Devan Hills Plantation Pvt.Ltd on 22nd February 2026",
    date: "22 February 2026",
    batch: "2024–2028 Batch",
    location: "Kannan Devan Hills Plantation Pvt. Ltd.",
    icon: <Leaf className="h-5 w-5" />,
    type: "industrial",
  },
];

interface HighlightCardProps {
  icon: ReactNode;
  label: string;
  value: string;
}

function HighlightCard({ icon, label, value }: HighlightCardProps) {
  return (
    <div className="border-b border-white/10 px-6 py-5 last:border-b-0 sm:border-b-0 sm:border-r sm:px-10 sm:last:border-r-0 lg:px-16">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 text-[#D2B87C]">
          {icon}
        </div>

        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
          {label}
        </p>
      </div>

      <p className="mt-3 font-serif text-lg text-white">{value}</p>
    </div>
  );
}

function ActivityCard({ activity }: { activity: Activity }) {
  const isIndustrial = activity.type === "industrial";

  return (
    <article className="group relative grid gap-7 lg:grid-cols-[100px_minmax(0,1fr)] lg:gap-10">
      {/* Number and timeline */}
      <div className="relative flex items-start gap-4 lg:block">
        <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center border border-[#D2B87C]/50 bg-[#FAF7F2] font-serif text-xl text-[#20235A] transition-colors duration-300 group-hover:bg-[#20235A] group-hover:text-[#D2B87C]">
          {activity.number}
        </div>

        <div className="pt-2 lg:hidden">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
            {activity.category}
          </p>
          {activity.date && (
            <p className="mt-1 text-xs text-[#1E1917]/60">{activity.date}</p>
          )}
        </div>

        <div className="absolute left-7 top-14 hidden h-[calc(100%+2rem)] w-px bg-[#20235A]/10 lg:block" />
      </div>

      {/* Activity content */}
      <div className="min-w-0 border border-[#20235A]/10 bg-white/60 transition-all duration-300 group-hover:border-[#D2B87C]/70 group-hover:shadow-lg">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_220px]">
          <div className="p-6 sm:p-8 lg:p-9">
            <div className="hidden items-center gap-3 lg:flex">
              <span className="h-px w-7 bg-[#D2B87C]" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                {activity.category}
              </p>
            </div>

            <h3 className="mt-3 font-serif text-[25px] leading-tight tracking-[-0.02em] text-[#20235A] sm:text-[30px]">
              {activity.title}
            </h3>

            <p className="mt-5 text-[14px] leading-7 text-[#1E1917]/70 sm:text-[15px]">
              {activity.description}
            </p>

            {(activity.speaker ||
              activity.institution ||
              activity.batch ||
              activity.location) && (
                <div className="mt-7 border-t border-[#20235A]/10 pt-6">
                  {activity.speaker && (
                    <div className="mb-4">
                      <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                        Resource Person
                      </p>
                      <p className="mt-1 font-serif text-lg text-[#20235A]">
                        {activity.speaker}
                      </p>
                      {activity.designation && (
                        <p className="mt-1 text-[13px] leading-6 text-[#1E1917]/65">
                          {activity.designation}
                        </p>
                      )}
                      {activity.institution && (
                        <p className="mt-1 text-[13px] leading-6 text-[#1E1917]/65">
                          {activity.institution}
                        </p>
                      )}
                    </div>
                  )}

                  {activity.batch && (
                    <div className="mt-4 flex items-start gap-3">
                      <GraduationCap className="mt-1 h-4 w-4 shrink-0 text-[#8F7746]" />
                      <div>
                        <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                          Participants
                        </p>
                        <p className="mt-1 text-[13px] text-[#1E1917]/70">
                          {activity.batch}
                        </p>
                      </div>
                    </div>
                  )}

                  {activity.location && (
                    <div className="mt-4 flex items-start gap-3">
                      <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#8F7746]" />
                      <div>
                        <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                          Visit Location
                        </p>
                        <p className="mt-1 text-[13px] leading-6 text-[#1E1917]/70">
                          {activity.location}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )}

            <div className="mt-7 flex items-center gap-2 text-[#20235A]">
              <span className="text-[9px] font-semibold uppercase tracking-[0.18em]">
                Electrical & Electronics Engineering
              </span>
              <ArrowUpRight className="h-3.5 w-3.5 opacity-50 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </div>
          </div>

          {/* Activity information panel */}
          <div className="flex flex-col justify-between border-t border-[#20235A]/10 bg-[#F2EFE8] p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-7">
            <div>
              <div className="flex h-11 w-11 items-center justify-center border border-[#D2B87C]/60 bg-white/70 text-[#20235A]">
                {activity.icon}
              </div>

              <p className="mt-5 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                Activity Type
              </p>
              <p className="mt-2 font-serif text-xl leading-snug text-[#20235A]">
                {isIndustrial ? "Industry Exposure" : activity.category}
              </p>
            </div>

            <div className="mt-7 border-t border-[#20235A]/10 pt-5">
              <div className="flex items-start gap-3">
                <CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-[#8F7746]" />
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                    Date
                  </p>
                  <p className="mt-1 text-[13px] leading-6 text-[#1E1917]/75">
                    {activity.date ?? "Date not specified"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ActivitiesPage() {
  return (
    <>
      <SiteHeader />

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#20235A] [&_p]:text-justify">
        <div className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full border border-[#D2B87C]/20" />
        <div className="pointer-events-none absolute -right-8 -top-16 h-52 w-52 rounded-full border border-[#D2B87C]/10" />
        <div className="pointer-events-none absolute -bottom-28 left-[42%] h-64 w-64 rounded-full border border-[#D2B87C]/10" />

        <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          <div className="max-w-4xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#D2B87C]" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D2B87C]">
                Electrical &amp; Electronics Engineering
              </p>
            </div>

            <h1 className="max-w-3xl font-serif text-4xl leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
              Activities that
              <span className="block text-[#D2B87C]">
                connect learning &amp; practice.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-[14px] leading-7 text-white/70 sm:text-[15px] ">
              Explore the academic sessions, technical talks, workshops, and
              industrial visits organized by the Electrical and Electronics
              Engineering Department at NCERC during the 2025–26 academic year.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#activities"
                className="group inline-flex items-center gap-2 rounded-full bg-[#D2B87C] px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#20235A] transition-all duration-300 hover:bg-white"
              >
                Explore Activities
                <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <Link
                href="/department/electrical-and-electronics-engineering"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:border-[#D2B87C]/60 hover:text-[#D2B87C]"
              >
                <ArrowLeft className="h-4 w-4" />
                Department Overview
              </Link>
            </div>
          </div>
        </div>

        {/* INFORMATION STRIP */}
        <div className="border-t border-white/10 bg-white/[0.03]">
          <div className="mx-auto grid max-w-[1440px] grid-cols-1 sm:grid-cols-3">
            <HighlightCard
              icon={<GraduationCap className="h-4 w-4" />}
              label="Department"
              value="Electrical & Electronics"
            />

            <HighlightCard
              icon={<CalendarDays className="h-4 w-4" />}
              label="Academic Year"
              value="2025 — 2026"
            />

            <HighlightCard
              icon={<Clock3 className="h-4 w-4" />}
              label="Activities"
              value="06 Highlights"
            />
          </div>
        </div>
      </section>

      {/* DEPARTMENT NAVIGATION */}
      <InnerHeader />

      <main className="bg-[#FAF7F2] [&_p]:text-justify">
        {/* INTRODUCTION */}
        <section className="border-b border-[#1E1917]/10">
          <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#8F7746]" />
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                    Department Activities
                  </p>
                </div>

                <h2 className="max-w-xl font-serif text-[38px] leading-[1.08] tracking-[-0.03em] text-[#20235A] sm:text-[48px] lg:text-[58px]">
                  Learning beyond
                  <span className="block text-[#8F7746]">
                    the classroom.
                  </span>
                </h2>
              </div>

              <div>
                <p className="max-w-2xl text-[14px] leading-7 text-[#1E1917]/70 sm:text-[15px]">
                  The Electrical and Electronics Engineering Department
                  encourages students to participate in research sessions,
                  technical workshops, expert talks, and industrial visits.
                  These experiences complement classroom learning and provide
                  opportunities to explore engineering practices in academic
                  and industrial environments.
                </p>

                <p className="mt-5 max-w-2xl text-[14px] leading-7 text-[#1E1917]/60 sm:text-[15px]">
                  The activities below highlight the department&apos;s
                  engagements during the 2025–26 academic year.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ACTIVITIES TIMELINE */}
        <section
          id="activities"
          className="scroll-mt-24 px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28"
        >
          <div className="mx-auto max-w-[1440px]">
            <div className="mb-12 flex flex-col gap-5 border-b border-[#20235A]/10 pb-8 sm:flex-row sm:items-end sm:justify-between lg:mb-16">
              <div>
                <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                  2025–26 / Activity Record
                </p>
                <h2 className="font-serif text-[34px] leading-tight tracking-[-0.03em] text-[#20235A] sm:text-[42px] lg:text-[48px]">
                  The year in activity
                </h2>
              </div>

              <p className="max-w-sm text-[13px] leading-6 text-[#1E1917]/60">
                Research, technical knowledge, and industry exposure through
                department-led learning experiences.
              </p>
            </div>

            <div className="space-y-10 lg:space-y-12">
              {activities.map((activity) => (
                <ActivityCard key={activity.number} activity={activity} />
              ))}
            </div>

            {/* CLOSING NOTE */}
            <div className="mt-16 border border-[#20235A]/10 bg-[#20235A] p-7 sm:p-10 lg:mt-20 lg:p-12">
              <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-center">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                    Electrical &amp; Electronics Engineering
                  </p>
                  <h3 className="mt-3 max-w-2xl font-serif text-[27px] leading-tight text-white sm:text-[34px]">
                    Connecting engineering knowledge with practical
                    experience.
                  </h3>
                </div>

                <a
                  href="#activities"
                  className="inline-flex w-fit items-center gap-2 border border-white/20 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-white transition-colors duration-300 hover:border-[#D2B87C] hover:text-[#D2B87C]"
                >
                  Back to Activities
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}