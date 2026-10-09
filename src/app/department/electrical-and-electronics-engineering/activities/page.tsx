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
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../DepartmentNav/page";

export const metadata = {
  title:
    "Top Engineering Colleges in Thrissur | Electrical and Computer Engineering - NCERC",
  description:
    "Nehru College of Engineering and Research Centre is renowned as one of the leading colleges in Kerala for Electrical and Communication Engineering, offering quality education that prepares students for successful careers in the electrical and communication technology sectors across South India.",
  keywords: [
    "Electrical and Communication Engineering colleges in Kerala",
    "Best Electrical and Communication Engineering colleges in Kerala",
    "Electrical and Communication Engineering in Thrissur",
    "Top Electrical and Communication Engineering colleges in Kerala",
    "Electrical and Communication Engineering admission Kerala",
    "Electrical and Communication Engineering in Palakkad",
    "Electrical and Communication Engineering colleges in South India",
    "Best college for Electrical and Communication Engineering in Kerala",
    "Electrical and Communication",
  ],
  robots: { index: true, follow: true },
};

/*
  Only the items that actually rendered in the original PHP are kept here -
  several <li> entries near the bottom (SOWAFIS, Automated Portable
  Vertical Solar Stacker, Advanced PCB Printing Technology, and a National/
  State Level Achievements item) were wrapped in an HTML comment in the
  source and never displayed, so they're intentionally left out. Restore
  them here if they should actually be published.
*/

const activities: string[] = [
  "Conducted a session for the House Keeping staff of NCERC on “Tips on Energy Conservation and Safety in Electrical Appliances” by EEE Association on 7th March, 2025. The session was handled by Mr. Arjun A, student of EEE Department, NCERC.",
  "Conducted a session for the students of EEE Department on “Accelerate Action” by EEE Association on 4th March, 2025. The session was handled by Dr. Anjana Warrier, Faculty, SAHS Jain.",
  "Conducted one day workshop on “Trouble Shooting of Home Electrical Appliances” by EEE Association on 1st March, 2025. The workshop was conducted by Dr. Anto Francis, HoD of Mechatronics Department, NCERC.",
  "EEE Department organized a 5 days FDP on “Challenges and Future Directions on AI in Energy Systems” from 09/12/2024 - 13/12/2024.",
  "Conducted Alumni Voice on 11th November, 2024 by Mr. Sreenath Chilambath (2009-2013 Batch).",
  "Students of EEE Department were taken to Meenvallom Small Hydro Electric Project on 30th October, 2024.",
  "Conducted a session on “Highlights on SEEM” by EEE Association on 22nd October, 2024. The session was handled by Mr. Azeem K, Director, Alenso Energy Pvt Ltd and Former Secretary, SEEM Kerala Chapter.",
  "Students of 2022-2026 Batch were taken for industrial visit to Panduranga Coffee Works on 14th October, 2024.",
  "On 22nd October, 2024, IMPERIUM, Association of EEE Department conducted a session on “Recent Trends in Energy Scenario” by Ms. R Gayathri Nair, Former Chief Engineer, KSEB.",
  "One week internship program on IoT using LoRaWAN Technology from 22/07/2024 - 26/07/2024.",
  "Students of 2021-2025 Batch were taken for industrial visit to Gurucharan Industries and KIOCL Limited on 6th March 2024.",
  "On 30th September, 2023, IMPERIUM, Association of EEE Department conducted a session on “Awareness on Electrical Safety” by Mr. Noufal P, Assistant Electrical Inspector, KSEB and Alumni of EEE Department.",
  "Conducted an Employability Enhancement Program for the students of EEE Department on 22nd August, 2023.",
  "EEE Department conducted a KTU sponsored FDP on “IoT application in smart grid” from 17/01/2023 - 21/01/2023.",
  "One day National Seminar on “Role and Reach of National Education Policy in Technical Education” on 14th December, 2022.",
  "On 29th November, 2022, a Technical Session was conducted on “Issues and Challenges in Power Sector.” The session was handled by Dr. P Rajan, Retired Director T & SO, KSEBL.",
  "EEE Department conducted 3 slots of 6 days AICTE-ISTE Refresher course on “High Impact Teaching and Learning Skills” in November and December, 2020.",
];

interface ActivityCardProps {
  number: string;
  activity: string;
}

function ActivityCard({ number, activity }: ActivityCardProps) {
  return (
    <article className="group rounded-3xl border border-[#1E1917]/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7">
      <div className="flex items-start gap-5">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#20235A] font-serif text-sm text-[#D2B87C] transition-colors duration-300 group-hover:bg-[#D2B87C] group-hover:text-[#20235A]">
          {number}
        </div>

        <div className="min-w-0 flex-1">
          <div className="mb-4 flex items-center gap-2">
            <span className="h-px w-6 bg-[#D2B87C]" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
              Department Activity
            </span>
          </div>

          <p className="text-sm leading-7 text-[#1E1917]/70 sm:text-base">
            {activity}
          </p>

          <div className="mt-6 flex items-center gap-2 text-[#20235A]">
            <span className="text-[9px] font-semibold uppercase tracking-[0.18em]">
              EEE Department
            </span>

            <ArrowUpRight className="h-3.5 w-3.5 opacity-50 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </div>
        </div>
      </div>
    </article>
  );
}

interface HighlightCardProps {
  icon: ReactNode;
  label: string;
  value: string;
}

function HighlightCard({
  icon,
  label,
  value,
}: HighlightCardProps) {
  return (
    <div className="border-b border-white/10 px-6 py-5 last:border-b-0 sm:border-b-0 sm:border-r sm:px-10 sm:last:border-r-0 lg:px-16">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 text-[#D2B87C]">
          {icon}
        </div>

        <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
          {label}
        </p>
      </div>

      <p className="mt-3 font-serif text-lg text-white">{value}</p>
    </div>
  );
}

export default function ActivitiesPage() {
  return (
    <>
      <SiteHeader />

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#20235A]">
        <div className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full border border-[#D2B87C]/20" />
        <div className="pointer-events-none absolute -right-8 -top-16 h-52 w-52 rounded-full border border-[#D2B87C]/10" />

        <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          <div className="max-w-4xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#D2B87C]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D2B87C]">
                Electrical &amp; Electronics Engineering
              </p>
            </div>

            <h1 className="max-w-3xl font-serif text-4xl leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              Activities that
              <span className="block text-[#D2B87C]">
                connect learning &amp; practice.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
              Explore the academic, technical, professional and experiential
              activities organized by the Electrical and Electronics
              Engineering department at NCERC.
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
                href="/departments/electrical-and-electronics-engineering"
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
              label="Activities"
              value="Academic & Professional"
            />

            <HighlightCard
              icon={<Clock3 className="h-4 w-4" />}
              label="Coverage"
              value="2020 — 2025"
            />
          </div>
        </div>
      </section>

      {/* DEPARTMENT NAVIGATION */}
      <InnerHeader />

      <main className="bg-[#FAF7F2]">
        {/* INTRO */}
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

                <h2 className="max-w-xl font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                  Learning beyond
                  <span className="block text-[#8F7746]">
                    the classroom.
                  </span>
                </h2>
              </div>

              <div>
                <p className="max-w-2xl text-sm leading-7 text-[#1E1917]/70 sm:text-base">
                  The Electrical and Electronics Engineering department
                  encourages students and faculty to participate in workshops,
                  technical sessions, industrial visits, internships,
                  seminars, faculty development programmes and professional
                  activities.
                </p>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-[#1E1917]/60 sm:text-base">
                  These activities complement classroom learning by providing
                  opportunities to interact with professionals, explore
                  emerging technologies and gain exposure to real-world
                  engineering practices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ACTIVITY LIST */}
        <section id="activities" className="bg-white">
          <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
              {/* SIDE CONTENT */}
              <div className="lg:sticky lg:top-28 lg:self-start">
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#8F7746]" />

                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                    Activity Record
                  </p>
                </div>

                <h2 className="font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                  Academic
                  <span className="block text-[#8F7746]">
                    engagement in action.
                  </span>
                </h2>

                <p className="mt-5 max-w-md text-sm leading-7 text-[#1E1917]/65 sm:text-base">
                  A record of activities conducted by the department covering
                  technical learning, industry exposure, professional
                  development and student engagement.
                </p>

                <div className="mt-8 rounded-3xl border border-[#1E1917]/10 bg-[#F2EFE8] p-6 sm:p-7">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#20235A] text-[#D2B87C]">
                      <CalendarDays className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                        Published Activities
                      </p>

                      <p className="mt-1 font-serif text-2xl text-[#20235A]">
                        {activities.length}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 h-px w-full bg-[#1E1917]/10" />

                  <p className="mt-5 text-sm leading-6 text-[#1E1917]/60">
                    Workshops, seminars, internships, industrial visits,
                    technical sessions and professional development activities
                    conducted by the department.
                  </p>
                </div>
              </div>

              {/* ACTIVITIES */}
              <div className="space-y-4">
                {activities.map((activity, index) => (
                  <ActivityCard
                    key={`${index}-${activity}`}
                    number={String(index + 1).padStart(2, "0")}
                    activity={activity}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ACTIVITY TYPES */}
        <section className="bg-[#F2EFE8]">
          <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
            <div className="max-w-3xl">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#8F7746]" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                  Learning Through Experience
                </p>
              </div>

              <h2 className="font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                Experiences that
                <span className="text-[#8F7746]">
                  {" "}
                  build confidence.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#1E1917]/65 sm:text-base">
                Department activities provide students with opportunities to
                move beyond theoretical concepts and engage with practical
                situations, industry professionals and emerging areas of
                engineering.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              <div className="rounded-3xl border border-[#1E1917]/10 bg-white p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#20235A] text-[#D2B87C]">
                  <GraduationCap className="h-5 w-5" />
                </div>

                <h3 className="mt-6 font-serif text-xl text-[#20235A]">
                  Technical Learning
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#1E1917]/65">
                  Workshops, technical sessions, seminars and faculty
                  development programmes help learners explore concepts beyond
                  regular coursework.
                </p>
              </div>

              <div className="rounded-3xl border border-[#1E1917]/10 bg-white p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#20235A] text-[#D2B87C]">
                  <MapPin className="h-5 w-5" />
                </div>

                <h3 className="mt-6 font-serif text-xl text-[#20235A]">
                  Industry Exposure
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#1E1917]/65">
                  Industrial visits, internships and field exposure allow
                  students to understand engineering applications in real
                  working environments.
                </p>
              </div>

              <div className="rounded-3xl border border-[#1E1917]/10 bg-white p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#20235A] text-[#D2B87C]">
                  <ArrowUpRight className="h-5 w-5" />
                </div>

                <h3 className="mt-6 font-serif text-xl text-[#20235A]">
                  Professional Growth
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#1E1917]/65">
                  Alumni interactions, employability programmes and
                  professional sessions help students prepare for future
                  careers and industry expectations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CLOSING CTA */}
        <section className="bg-[#20235A]">
          <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#D2B87C]" />

                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                    Electrical &amp; Electronics Engineering
                  </p>
                </div>

                <h2 className="font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
                  Learn through
                  <span className="block text-[#D2B87C]">
                    experience &amp; engagement.
                  </span>
                </h2>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
                  From technical workshops to industry visits and professional
                  development programmes, departmental activities help connect
                  academic learning with the engineering world.
                </p>
              </div>

              <Link
                href="/departments/electrical-and-electronics-engineering"
                className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-[#D2B87C] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#20235A] transition-all duration-300 hover:bg-white"
              >
                Department Overview
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}