import Link from "next/link";
import { ArrowRight, Award, Trophy, Users } from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../DepartmentNav/page";

const DEPARTMENT_PATH = "/department/computer-science-and-engineering";

const achievementCategories = [
  {
    title: "Department Events & Achievements",
    description:
      "Explore the department's technical events, student accomplishments, competitions, and other notable achievements.",
    href: `${DEPARTMENT_PATH}/achievements/dpt-achievements`,
    icon: Trophy,
    number: "01",
  },
  {
    title: "Faculty Achievements",
    description:
      "Discover the professional accomplishments, recognitions, research contributions, and achievements of our faculty members.",
    href: `${DEPARTMENT_PATH}/achievements/faculty-achievement`,
    icon: Award,
    number: "02",
  },
];

export default function AchievementsPage() {
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
            <div className="relative z-10 max-w-4xl">
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-10 bg-[#D2B87C]" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D2B87C] sm:text-xs">
                  Computer Science &amp; Engineering
                </p>
              </div>

              <h1 className="font-serif text-[42px] font-normal leading-[1.06] tracking-[-0.035em] sm:text-[56px] lg:text-[64px] xl:text-[72px]">
                Department
                <br />
                <span className="italic text-[#D2B87C]">Achievements</span>
              </h1>

              <p className="mt-7 max-w-2xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
                Celebrating excellence, innovation, and accomplishments of our
                department, faculty members, and students.
              </p>

              <div className="mt-12 flex flex-wrap items-center gap-3 text-xs text-white/50">
                <Link
                  href={DEPARTMENT_PATH}
                  className="transition-colors hover:text-white"
                >
                  Departments
                </Link>

                <span className="text-[#D2B87C]">/</span>

                <Link
                  href={DEPARTMENT_PATH}
                  className="transition-colors hover:text-white"
                >
                  Computer Science &amp; Engineering
                </Link>

                <span className="text-[#D2B87C]">/</span>

                <span className="text-white/80">Achievements</span>
              </div>
            </div>
          </div>

          <div className="h-1 w-full bg-[#D2B87C]" />
        </section>

        {/* DEPARTMENT NAVIGATION */}
        <InnerHeader activeTab="Achievements" />

        {/* ACHIEVEMENTS */}
        <section className="bg-[#FAF7F2] px-5 py-16 sm:px-8 sm:py-24 lg:px-14 lg:py-28 xl:px-20">
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-12">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-9 bg-[#8F7746]" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8F7746] sm:text-xs">
                  Excellence &amp; Recognition
                </p>
              </div>

              <h2 className="font-serif text-4xl font-normal leading-[1.12] tracking-[-0.025em] text-[#20235A] sm:text-5xl lg:text-[52px]">
                Milestones worth
                <br />
                <span className="italic">celebrating.</span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#1E1917]/65 sm:text-base sm:leading-8">
                Explore the accomplishments and recognitions that reflect the
                academic, professional, and technical excellence of the CSE
                department.
              </p>
            </div>

            {/* Achievement Cards */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {achievementCategories.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.number}
                    href={item.href}
                    className="group flex h-full flex-col border border-[#20235A]/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D2B87C] sm:p-8"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center bg-[#F2EFE8] text-[#8F7746] transition-colors duration-300 group-hover:bg-[#20235A] group-hover:text-[#D2B87C]">
                        <Icon size={24} strokeWidth={1.5} />
                      </div>

                      <span className="font-serif text-sm text-[#8F7746]">
                        {item.number}
                      </span>
                    </div>

                    <h3 className="mt-8 font-serif text-2xl leading-tight text-[#20235A] sm:text-3xl">
                      {item.title}
                    </h3>

                    <p className="mt-4 flex-1 text-sm leading-7 text-[#1E1917]/65 sm:text-[15px] sm:leading-8">
                      {item.description}
                    </p>

                    <div className="mt-7 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746] transition-colors duration-300 group-hover:text-[#20235A]">
                      Explore Achievements
                      <ArrowRight
                        size={14}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </div>

                    <div className="mt-6 h-px w-12 bg-[#D2B87C] transition-all duration-300 group-hover:w-full" />
                  </Link>
                );
              })}
            </div>

            {/* Bottom Information */}
            <div className="mt-12 flex flex-col items-start gap-5 border-l-2 border-[#D2B87C] bg-white px-5 py-6 sm:flex-row sm:items-center sm:px-8 sm:py-8">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#F2EFE8] text-[#8F7746]">
                <Users size={24} strokeWidth={1.5} />
              </div>

              <div>
                <h3 className="font-serif text-xl leading-tight text-[#20235A] sm:text-2xl">
                  Celebrating Collective Excellence
                </h3>

                <p className="mt-2 text-sm leading-7 text-[#1E1917]/65 sm:text-[15px] sm:leading-8">
                  Our department values the contributions of both students and
                  faculty members in achieving academic and professional
                  excellence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CLOSING CTA */}
        <section className="bg-[#20235A] px-5 py-14 text-white sm:px-8 sm:py-16 lg:px-14 xl:px-20">
          <div className="mx-auto flex max-w-[1200px] flex-col justify-between gap-7 md:flex-row md:items-center">
            <div>
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D2B87C] sm:text-xs">
                Explore Computer Science &amp; Engineering
              </p>

              <h2 className="max-w-2xl font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
                Discover the people, facilities and opportunities behind our
                department.
              </h2>
            </div>

            <Link
              href={DEPARTMENT_PATH}
              className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-3 border border-[#D2B87C]/60 px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:bg-[#D2B87C] hover:text-[#20235A]"
            >
              About the Department
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