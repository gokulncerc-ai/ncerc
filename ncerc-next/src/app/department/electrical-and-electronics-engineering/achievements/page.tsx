import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowUpRight,
  Award,
  ChevronRight,
  GraduationCap,
  Trophy,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../DepartmentNav/DepartmentNav";

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
              value="Achievements"
            />
          </div>
        </div>
      </section>

      {/* DEPARTMENT NAVIGATION */}
      <InnerHeader />

      <main className="bg-[#FAF7F2] [&_p]:text-justify">
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


        {/* Achievements */}
        <section
          id="achievements"
          className="bg-[#FAF7F2] px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28"
        >
          <div className="mx-auto max-w-[1440px]">
            {/* Section Header */}
            <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-16">
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#D2B87C]" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                    Recognition &amp; Excellence
                  </span>
                </div>

                <h2 className="font-serif text-[38px] leading-[1.08] tracking-[-0.03em] text-[#20235A] sm:text-[48px] lg:text-[58px]">
                  Department
                  <span className="block text-[#8F7746]">Achievements</span>
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
                  Featured Achievements
                </p>

                <p className="mt-2 text-[14px] leading-7 text-[#1E1917]/70">
                  Kalpa Award · AICTE National Level Chhatra Vishwakarma Awards
                </p>
              </div>
            </div>

            {/* ================================================== */}
            {/* ACHIEVEMENT 01 — KALPA AWARD */}
            {/* Image Left — Content Right */}
            {/* ================================================== */}

            <div className="mt-12 flex flex-col gap-4 border-y border-[#20235A]/15 py-6 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                  Faculty Achievement · 01
                </p>

                <h3 className="mt-2 font-serif text-[25px] text-[#20235A] sm:text-[30px]">
                  Kalpa Award
                </h3>
              </div>

              <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-[#8F7746]">
                Best Researcher Award · 2020–21
              </span>
            </div>

            <div className="mt-8 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch lg:gap-12">
              {/* Kalpa Award Image */}
              <div className="relative min-h-[300px] overflow-hidden border border-[#20235A]/10 bg-[#F2EFE8] sm:min-h-[400px] lg:min-h-[480px]">
                <Image
                  src="/images/dpt/electrical-and-electronics-engineering/achievements/achievements1.webp"
                  alt="Kalpa Award for Best Researcher Award received by Mr. Rajkumar G"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain p-4 transition-transform duration-500 hover:scale-[1.02] sm:p-6"
                />

                <div className="absolute bottom-0 left-0 right-0 border-t border-[#D2B87C]/40 bg-[#20235A] px-5 py-4 sm:px-7">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                    Award Recognition
                  </p>

                  <p className="mt-1 font-serif text-lg text-white sm:text-xl">
                    Kalpa Award · 2020–21
                  </p>
                </div>
              </div>

              {/* Kalpa Award Details */}
              <div className="flex flex-col justify-center border border-[#20235A]/10 bg-white/60 p-7 sm:p-10 lg:p-12">
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#D2B87C]" />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                    Achievement 01
                  </span>
                </div>

                <h3 className="font-serif text-[28px] leading-tight text-[#20235A] sm:text-[36px]">
                  Kalpa Award
                </h3>

                <p className="mt-3 text-[13px] font-medium uppercase tracking-[0.12em] text-[#8F7746]">
                  Best Researcher Award
                </p>

                <div className="my-7 h-px w-full bg-[#20235A]/10" />

                <p className="text-[14px] leading-7 text-[#1E1917]/75 sm:text-[15px]">
                  We are happy to Announce that our Nehru College of Engineering and Research Centre Faculty  Mr.Rajkumar G, Assistant Professor, Department  of Electrical and Electronics Engineering, have secured the Kalpa Award (Best Researcher Award) From Bharat Education Excellence Awards 2020-21
                </p>

                {/* Recipient Details */}
                <div className="mt-8 border-l-2 border-[#D2B87C] bg-[#F2EFE8] px-5 py-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                    Award Recipient
                  </p>

                  <h4 className="mt-2 font-serif text-xl text-[#20235A] sm:text-2xl">
                    Mr. Rajkumar G
                  </h4>

                  <p className="mt-2 text-[13px] leading-6 text-[#1E1917]/70">
                    Assistant Professor
                    <br />
                    Department of Electrical and Electronics Engineering
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#D2B87C]" />

                  <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#8F7746]">
                    Bharat Education Excellence Awards
                  </span>
                </div>
              </div>
            </div>

            {/* ================================================== */}
            {/* ACHIEVEMENT 02 — AICTE AWARD */}
            {/* Content Left — Image Right */}
            {/* ================================================== */}

            <div className="mt-16 flex flex-col gap-4 border-y border-[#20235A]/15 py-6 sm:mt-24 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                  Institutional Achievement · 02
                </p>

                <h3 className="mt-2 font-serif text-[25px] text-[#20235A] sm:text-[30px]">
                  AICTE Award
                </h3>
              </div>

              <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-[#8F7746]">
                Second Position · 2020
              </span>
            </div>

            <div className="mt-8 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch lg:gap-12">
              {/* AICTE Award Details — Left */}
              <div className="flex flex-col justify-center border border-[#20235A]/10 bg-white/60 p-7 sm:p-10 lg:p-12">
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#D2B87C]" />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                    Achievement 02
                  </span>
                </div>

                <h3 className="font-serif text-[28px] leading-tight text-[#20235A] sm:text-[36px]">
                  AICTE National Level
                  <span className="mt-1 block text-[#8F7746]">
                    Chhatra Vishwakarma Awards 2020
                  </span>
                </h3>

                <div className="my-7 h-px w-full bg-[#20235A]/10" />

                <p className="text-[14px] leading-7 text-[#1E1917]/75 sm:text-[15px]">
                  We are Happy to Announce that, our College have secured the Second Position in AICTE-Chhatra Vishwakarama Awards 2020.
                </p>

                {/* Award Information */}
                <div className="mt-7 divide-y divide-[#20235A]/10 border-y border-[#20235A]/10">
                  <div className="py-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                      Award Name
                    </p>

                    <p className="mt-2 text-[14px] leading-6 text-[#20235A]">
                      AICTE National Level Chhatra Vishwakarma Awards 2020
                    </p>
                  </div>

                  <div className="py-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                      Category
                    </p>

                    <p className="mt-2 text-[14px] leading-7 text-[#1E1917]/75">
                      Promote Micro, Small and Medium Enterprises to achieve the mission Atmanirrbhar Bharat .

                    </p>
                  </div>

                  <div className="grid gap-5 py-4 sm:grid-cols-2">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                        Position
                      </p>

                      <p className="mt-2 font-serif text-xl text-[#20235A]">
                        Second Position
                      </p>
                    </div>

                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                        Team Name
                      </p>

                      <p className="mt-2 font-serif text-xl text-[#20235A]">
                        SHRI CHAKRA
                      </p>
                    </div>
                  </div>
                </div>

                {/* Team Members */}
                <div className="mt-7 border-l-2 border-[#D2B87C] bg-[#F2EFE8] px-5 py-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                    Team Members
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {["Ujjwal K Menon", "Rajkumar G"].map((member) => (
                      <span
                        key={member}
                        className="border border-[#D2B87C]/60 bg-[#FAF7F2] px-3 py-2 text-[13px] font-medium text-[#20235A]"
                      >
                        {member}
                      </span>
                    ))}
                  </div>

                  <p className="mt-4 text-[12px] leading-6 text-[#1E1917]/65">
                    Department of Electrical and Electronics Engineering,
                    <br />
                    Nehru College of Engineering and Research Centre.
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#D2B87C]" />

                  <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#8F7746]">
                    National-Level Recognition
                  </span>
                </div>
              </div>

              {/* AICTE Award Image — Right */}
              <div className="relative min-h-[320px] overflow-hidden border border-[#20235A]/10 bg-[#F2EFE8] sm:min-h-[420px] lg:min-h-[560px]">
                <Image
                  src="/images/dpt/electrical-and-electronics-engineering/achievements/achievements2.webp"
                  alt="AICTE National Level Chhatra Vishwakarma Awards 2020 recognition for Team SHRI CHAKRA"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain p-4 transition-transform duration-500 hover:scale-[1.02] sm:p-6"
                />

                <div className="absolute bottom-0 left-0 right-0 border-t border-[#D2B87C]/40 bg-[#20235A] px-5 py-4 sm:px-7">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                    National-Level Achievement
                  </p>

                  <p className="mt-1 font-serif text-lg text-white sm:text-xl">
                    AICTE Award · 2020
                  </p>
                </div>
              </div>
            </div>

            {/* Section Footer */}
            <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-[#20235A]/15 pt-6 sm:mt-16">
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#8F7746]">
                Electrical &amp; Electronics Engineering · NCERC
              </p>

              <p className="text-[11px] text-[#1E1917]/55">
                Research · Innovation · Excellence · Teamwork
              </p>
            </div>
          </div>
        </section>



      </main>

      <FooterSection />
    </>
  );
}