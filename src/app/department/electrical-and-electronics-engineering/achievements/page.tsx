import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Award,
  ChevronRight,
  GraduationCap,
  Medal,
  Trophy,
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
  a block of entries (SOWAFIS, Automated Portable Vertical Solar Stacker,
  Advanced PCB Printing Technology, a "NATIONAL/STATE LEVEL ACHIEVEMENTS"
  heading, and a kickboxing medal item) was wrapped in an HTML comment in
  the source and never displayed on the live page. Restore them here if
  they should actually be published.
*/

const achievements: string[] = [
  "Abhijith T.H (2018-22) has secured the First place in Power Quiz conducted by KSEB staff association.",
  "Ms. Susmitha T. M (2016-20) has secured the Second place in Power Quiz conducted by KSEB staff association.",
  "Mr. Sreenath A G & Nirmala M (2017-21) batch has secured second place in district level Energy Quiz conducted by Dr. A P J Abdul Kalam University.",
  "Sangeeth Balu K. of (2012-16) EEE participated in the national workshop on the topic “Sustainable energy management using Grid connected solar systems” conducted by KSEB engineers association Kozhikode on 12th February 2016.",
  "Lini Joys and Aishwarya Rajagopal of (2012-16) EEE got first prize in “Innovative Idea Contest” conducted by JCET Palakkad.",
  "Ms. Smrithi, Ms. Shilpa and Ms. Shincymol got first prize in N-SITE Project Presentation.",
  "Ms. Sreelakshmi of MTech Energy Systems got Runner Up prize of Rs.50000 on the project “Design of Cost Effective and Environment Friendly Compact Fluorescent Lamp Disposal System using Titanium Dioxide Photocatalyst” in Dr. Pradeep P Thevannoor Innovation Contest organized by SCMS School of Engineering and Technology supported by Dr. APJ Abdul Kalam Technological University held on 1st and 2nd February 2016.",
  "Mr. Arjun R. and Sangeeth Balu K. of S8 EEE got First Prize in KSEB Engineers’ Association 7th Seminar series on the topic “Power Augmentation in Kerala – Issues, Challenges, and Solutions,” January 2016.",
  "Ms. Smrithi of (2012-2016) EEE got First Prize in EEE Association in JCET, January 2016.",
  "Ms. Sreelakshmi of M.Tech Energy Systems got her paper “Design of Cost Effective and Environment Friendly Compact Fluorescent Lamp Disposal System using Titanium Dioxide Photocatalyst” accepted for IEEE, WIECON-ECE 2015 in Bangladesh on “Women in Engineering and Technology.”",
  "Ms. Smrithi of (2012-16) EEE got First Prize in National Level Technical Fest at Ahalya School of Engineering, Palakkad.",
  "Ms. Nirsha K.I obtained 4th rank in B.Tech EEE, Calicut University.",
  "Ms. Nirsha K.I secured a high GATE score (score = 617, rank = 1578) and is studying M.Tech with a GI scholarship.",
];

interface AchievementCardProps {
  number: string;
  achievement: string;
}

function AchievementCard({
  number,
  achievement,
}: AchievementCardProps) {
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
              Department Achievement
            </span>
          </div>

          <p className="text-sm leading-7 text-[#1E1917]/70 sm:text-base">
            {achievement}
          </p>

          <div className="mt-6 flex items-center gap-2 text-[#20235A]">
            <Award className="h-3.5 w-3.5 text-[#8F7746]" />

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
  icon: React.ReactNode;
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

export default function AchievementsPage() {
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
              Achievements that
              <span className="block text-[#D2B87C]">
                inspire excellence.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
              Discover the academic, technical and professional achievements
              of students and faculty associated with the Electrical and
              Electronics Engineering department at NCERC.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#achievements"
                className="group inline-flex items-center gap-2 rounded-full bg-[#D2B87C] px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#20235A] transition-all duration-300 hover:bg-white"
              >
                Explore Achievements
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
              icon={<Trophy className="h-4 w-4" />}
              label="Recognition"
              value="Awards & Distinctions"
            />

            <HighlightCard
              icon={<GraduationCap className="h-4 w-4" />}
              label="Achievement Areas"
              value="Academic & Technical"
            />

            <HighlightCard
              icon={<Award className="h-4 w-4" />}
              label="Published Records"
              value={`${achievements.length} Achievements`}
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
                    Department Achievements
                  </p>
                </div>

                <h2 className="max-w-xl font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                  Excellence worth
                  <span className="block text-[#8F7746]">
                    celebrating.
                  </span>
                </h2>
              </div>

              <div>
                <p className="max-w-2xl text-sm leading-7 text-[#1E1917]/70 sm:text-base">
                  The achievements of students and faculty reflect the
                  department&apos;s commitment to academic excellence,
                  innovation, professional development and participation in
                  technical platforms.
                </p>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-[#1E1917]/60 sm:text-base">
                  From university rankings and technical competitions to
                  research presentations and industry-recognized achievements,
                  these accomplishments represent the efforts and potential of
                  the EEE community.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section id="achievements" className="bg-white">
          <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
              {/* SIDE CONTENT */}
              <div className="lg:sticky lg:top-28 lg:self-start">
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#8F7746]" />

                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                    Achievement Record
                  </p>
                </div>

                <h2 className="font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                  Recognising
                  <span className="block text-[#8F7746]">
                    student excellence.
                  </span>
                </h2>

                <p className="mt-5 max-w-md text-sm leading-7 text-[#1E1917]/65 sm:text-base">
                  A collection of academic, technical and professional
                  accomplishments recorded by the Electrical and Electronics
                  Engineering department.
                </p>

                <div className="mt-8 rounded-3xl border border-[#1E1917]/10 bg-[#F2EFE8] p-6 sm:p-7">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#20235A] text-[#D2B87C]">
                      <Trophy className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                        Published Achievements
                      </p>

                      <p className="mt-1 font-serif text-2xl text-[#20235A]">
                        {achievements.length}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 h-px w-full bg-[#1E1917]/10" />

                  <p className="mt-5 text-sm leading-6 text-[#1E1917]/60">
                    Awards, prizes, rankings, technical presentations,
                    research recognition and other notable accomplishments.
                  </p>
                </div>
              </div>

              {/* ACHIEVEMENT LIST */}
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <AchievementCard
                    key={`${index}-${achievement}`}
                    number={String(index + 1).padStart(2, "0")}
                    achievement={achievement}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ACHIEVEMENT AREAS */}
        <section className="bg-[#F2EFE8]">
          <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
            <div className="max-w-3xl">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#8F7746]" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                  Areas of Excellence
                </p>
              </div>

              <h2 className="font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                Different paths.
                <span className="text-[#8F7746]">
                  {" "}
                  One culture of excellence.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#1E1917]/65 sm:text-base">
                Department achievements span academic performance, technical
                competitions, innovation, research and professional
                participation.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              <div className="rounded-3xl border border-[#1E1917]/10 bg-white p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#20235A] text-[#D2B87C]">
                  <GraduationCap className="h-5 w-5" />
                </div>

                <h3 className="mt-6 font-serif text-xl text-[#20235A]">
                  Academic Excellence
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#1E1917]/65">
                  University ranks, academic performance and competitive
                  examinations reflect the strong academic efforts of students.
                </p>
              </div>

              <div className="rounded-3xl border border-[#1E1917]/10 bg-white p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#20235A] text-[#D2B87C]">
                  <Trophy className="h-5 w-5" />
                </div>

                <h3 className="mt-6 font-serif text-xl text-[#20235A]">
                  Competitions &amp; Awards
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#1E1917]/65">
                  Technical competitions, quizzes, project presentations and
                  innovation contests provide platforms for students to
                  demonstrate their abilities.
                </p>
              </div>

              <div className="rounded-3xl border border-[#1E1917]/10 bg-white p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#20235A] text-[#D2B87C]">
                  <Award className="h-5 w-5" />
                </div>

                <h3 className="mt-6 font-serif text-xl text-[#20235A]">
                  Research &amp; Innovation
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#1E1917]/65">
                  Research presentations, technical papers and innovative
                  projects highlight the department&apos;s culture of
                  exploration and problem solving.
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
                  Celebrating achievement.
                  <span className="block text-[#D2B87C]">
                    Inspiring what comes next.
                  </span>
                </h2>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
                  Every achievement represents a step forward in learning,
                  confidence and professional growth for the students and
                  faculty of the department.
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