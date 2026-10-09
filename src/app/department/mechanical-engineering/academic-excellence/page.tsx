import type { ReactNode } from "react";

import Link from "next/link";

import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Landmark,
  Star,
  Trophy,
  type LucideIcon,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";

import InnerHeader from "../DepartmentNav/page";

export const metadata = {
  title:
    "Top Engineering Colleges in Thrissur | Mechanical Engineering - NCERC",

  description:
    "Automobile engineering, along with aerospace engineering and marine engineering, is a branch of vehicle engineering, incorporating elements of mechanical, electrical, electronic, software and safety engineering as applied to the design, manufacture and operation of motorcycles, automobiles and trucks and their respective engineering subsystems. It also includes modification of vehicles.",

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

  robots: {
    index: true,
    follow: true,
  },
};

type ExcellenceItem = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  href?: string;
};

const excellenceItems: ExcellenceItem[] = [
  {
    number: "01",
    title: "University Rank Holders",
    description:
      "Recognising outstanding academic performance and achievements of Mechanical Engineering students at university level.",
    icon: Landmark,
  },
  {
    number: "02",
    title: "Department Toppers",
    description:
      "Celebrating students who demonstrate exceptional academic performance and consistency within the department.",
    icon: Trophy,
    href: "/department/mechanical-engineering/department-toppers",
  },
  {
    number: "03",
    title: "Other Achievements",
    description:
      "Explore the academic, technical and extracurricular achievements accomplished by students and the department.",
    icon: Star,
    href: "/department/mechanical-engineering/achievements",
  },
];

function SectionLabel({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-10 bg-[#8f7746]" />

      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8f7746]">
        {children}
      </span>
    </div>
  );
}

function ExcellenceCard({
  item,
}: {
  item: ExcellenceItem;
}) {
  const Icon = item.icon;

  const cardContent = (
    <>
      <div className="flex items-center justify-between">
        <span className="font-serif text-[14px] text-[#8f7746]">
          {item.number}
        </span>

        <Icon
          size={24}
          strokeWidth={1.3}
          className="text-[#20235A] transition-all duration-300 group-hover:text-[#8f7746]"
        />
      </div>

      <div className="mt-10">
        <div className="flex h-14 w-14 items-center justify-center bg-[#20235A] text-[#D2B87C] transition-transform duration-300 group-hover:-translate-y-1">
          <Icon size={25} strokeWidth={1.3} />
        </div>

        <h3 className="mt-7 font-serif text-[25px] font-normal leading-tight text-[#20235A] transition-colors duration-300 group-hover:text-[#8f7746]">
          {item.title}
        </h3>

        <p className="mt-4 text-[12px] leading-[1.9] text-[#77736b] sm:text-[13px]">
          {item.description}
        </p>
      </div>

      <div className="mt-auto pt-8">
        {item.href ? (
          <span className="group/link inline-flex items-center gap-3 border-b border-[#D2B87C] pb-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#20235A]">
            Explore
            <ArrowRight
              size={15}
              className="transition-transform duration-300 group-hover/link:translate-x-1"
            />
          </span>
        ) : (
          <span className="inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#8f7746]">
            Academic Recognition
            <ArrowRight size={15} />
          </span>
        )}
      </div>

      <div className="mt-6 h-px w-10 bg-[#D2B87C] transition-all duration-300 group-hover:w-full" />
    </>
  );

  if (!item.href) {
    return (
      <article className="group flex min-h-[360px] flex-col border border-[#dfd9cd] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D2B87C] hover:shadow-[0_18px_45px_rgba(32,35,90,0.07)] sm:p-7 lg:p-8">
        {cardContent}
      </article>
    );
  }

  return (
    <Link
      href={item.href}
      className="group flex min-h-[360px] flex-col border border-[#dfd9cd] bg-white p-6 no-underline transition-all duration-300 hover:-translate-y-1 hover:border-[#D2B87C] hover:shadow-[0_18px_45px_rgba(32,35,90,0.07)] sm:p-7 lg:p-8"
    >
      {cardContent}
    </Link>
  );
}

function IntroSection() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-14 lg:py-28">
      <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-24">
        <div>
          <SectionLabel>Academic Excellence</SectionLabel>

          <h2 className="mt-6 max-w-[500px] font-serif text-[39px] font-normal leading-[1.12] tracking-[-0.025em] text-[#20235A] sm:text-[49px]">
            Excellence that
            <span className="block text-[#8f7746]">
              inspires achievement.
            </span>
          </h2>

          <div className="mt-9 flex items-center gap-4 border-t border-[#e7e2d8] pt-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#20235A] text-[#D2B87C]">
              <Trophy size={22} strokeWidth={1.4} />
            </div>

            <div>
              <p className="m-0 font-serif text-[17px] text-[#20235A]">
                Mechanical Engineering
              </p>

              <p className="m-0 mt-1 text-[10px] uppercase tracking-[0.12em] text-[#918b7f]">
                Learning · Performance · Recognition
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6 text-[14px] leading-[2] text-[#696761] sm:text-[15px]">
          <p>
            Academic excellence reflects the commitment of the Mechanical
            Engineering department towards quality education, continuous
            learning and student achievement.
          </p>

          <p>
            The department encourages students to develop strong technical
            knowledge, analytical thinking and professional skills through
            academic activities, projects and practical learning experiences.
          </p>

          <p>
            This section highlights the academic accomplishments of students,
            including university-level performance, department toppers and
            other achievements that demonstrate their dedication and
            capabilities.
          </p>

          <a
            href="#excellence"
            className="group mt-3 inline-flex items-center gap-3 border-b border-[#D2B87C] pb-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#20235A] no-underline transition-colors hover:text-[#8f7746]"
          >
            Explore achievements

            <ArrowDown
              size={15}
              className="transition-transform duration-300 group-hover:translate-y-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default function AcademicExcellencePage() {
  return (
    <>
      <SiteHeader />

      <main className="overflow-hidden bg-[#faf7f2] font-sans text-[#1e1917]">
        {/* =========================================================
            HERO
        ========================================================= */}
        <section className="relative overflow-hidden bg-[#20235A] px-5 pb-14 pt-10 sm:px-8 sm:pb-16 sm:pt-14 lg:px-14 lg:pb-20 lg:pt-16">
          {/* Decorative circles */}
          <div className="pointer-events-none absolute right-[-180px] top-[-180px] h-[500px] w-[500px] rounded-full border border-[#D2B87C]/10" />

          <div className="pointer-events-none absolute bottom-[-250px] left-[-180px] h-[500px] w-[500px] rounded-full border border-white/[0.04]" />

          <div className="relative z-10 mx-auto max-w-[1440px]">
            {/* Breadcrumb */}
            <div className="mb-12 flex flex-wrap items-center gap-2 text-[10px] font-medium uppercase tracking-[0.18em] text-white/50 sm:mb-14">
              <Link
                href="/"
                className="no-underline transition-colors hover:text-[#D2B87C]"
              >
                Home
              </Link>

              <ArrowRight size={12} />

              <span>Academics</span>

              <ArrowRight size={12} />

              <span className="text-[#D2B87C]">Departments</span>

              <ArrowRight size={12} />

              <span className="text-white/80">
                Mechanical Engineering
              </span>
            </div>

            <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 xl:grid-cols-[0.9fr_1.1fr] xl:gap-20">
              {/* Left */}
              <div className="relative z-20 max-w-[760px]">
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px w-12 bg-[#D2B87C]" />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                    Mechanical Engineering
                  </span>
                </div>

                <h1 className="font-serif text-[43px] font-normal leading-[1.06] tracking-[-0.035em] text-white sm:text-[58px] lg:text-[64px] xl:text-[74px]">
                  Academic
                  <span className="mt-1 block text-[#D2B87C]">
                    Excellence
                  </span>

                  <span className="mt-4 block max-w-[620px] text-[11px] font-medium uppercase tracking-[0.2em] text-white/65 sm:text-[13px] sm:tracking-[0.23em] lg:text-[14px]">
                    Mechanical Engineering · NCERC
                  </span>
                </h1>

                <p className="mt-7 max-w-[620px] text-[14px] leading-[1.9] text-white/65 sm:text-[15px] lg:text-[16px]">
                  Celebrating academic achievement, student performance and
                  the pursuit of excellence within the Mechanical Engineering
                  department.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="#excellence"
                    className="group inline-flex min-h-12 items-center gap-3 bg-[#D2B87C] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#20235A] no-underline transition-colors hover:bg-white"
                  >
                    Explore Excellence

                    <ArrowDown
                      size={15}
                      className="transition-transform group-hover:translate-y-1"
                    />
                  </a>
                </div>

                {/* Identifiers */}
                <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-4 border-t border-white/10 pt-6 sm:gap-x-7">
                  <div className="flex items-center gap-3">
                    <Trophy
                      size={20}
                      strokeWidth={1.3}
                      className="text-[#D2B87C]"
                    />

                    <span className="text-[9px] font-medium uppercase tracking-[0.16em] text-white/55">
                      Student Achievement
                    </span>
                  </div>

                  <span className="hidden h-4 w-px bg-white/15 sm:block" />

                  <span className="text-[9px] font-medium uppercase tracking-[0.16em] text-white/55">
                    Academic Performance
                  </span>

                  <span className="hidden h-4 w-px bg-white/15 sm:block" />

                  <span className="text-[9px] font-medium uppercase tracking-[0.16em] text-white/55">
                    Recognition
                  </span>
                </div>
              </div>

              {/* Right visual panel */}
              <div className="relative lg:translate-y-1">
                <div className="absolute -right-3 -top-3 hidden h-full w-full border border-[#D2B87C]/20 lg:block" />

                <div className="relative flex h-[320px] overflow-hidden border border-white/10 bg-[#292d6b] sm:h-[400px] lg:h-[470px] xl:h-[510px]">
                  {/* Decorative background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#292d6b] via-[#20235A] to-[#11152e]" />

                  <div className="pointer-events-none absolute right-[-100px] top-[-100px] h-[380px] w-[380px] rounded-full border border-[#D2B87C]/15" />

                  <div className="pointer-events-none absolute bottom-[-120px] left-[-80px] h-[300px] w-[300px] rounded-full border border-white/10" />

                  <div className="relative z-10 flex w-full flex-col justify-between p-7 sm:p-9 lg:p-10">
                    <div className="flex items-center gap-3">
                      <span className="h-px w-7 bg-[#D2B87C]" />

                      <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/80">
                        Pursuit of Excellence
                      </span>
                    </div>

                    <div>
                      <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                        Mechanical Engineering
                      </p>

                      <h2 className="max-w-[620px] font-serif text-[31px] font-normal leading-[1.1] text-white sm:text-[40px] lg:text-[48px]">
                        Achievement that
                        <span className="block">
                          drives possibilities.
                        </span>
                      </h2>

                      <a
                        href="#excellence"
                        className="mt-6 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-white no-underline transition-colors hover:text-[#D2B87C]"
                      >
                        Discover achievements

                        <ArrowDown size={15} />
                      </a>
                    </div>

                    <div className="absolute bottom-7 right-7 hidden items-center gap-3 border border-white/20 bg-[#20235A]/60 px-4 py-3 backdrop-blur-md md:flex">
                      <Trophy
                        size={21}
                        strokeWidth={1.3}
                        className="text-[#D2B87C]"
                      />

                      <span className="text-[9px] font-medium uppercase tracking-[0.15em] text-white/80">
                        Learn · Achieve · Excel
                      </span>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-7 -left-4 hidden lg:block">
                  <span className="font-serif text-[58px] leading-none text-[#D2B87C]/20">
                    01
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-14 flex items-center justify-between border-t border-white/10 pt-5 lg:mt-16">
              <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-white/35">
                NCERC · Mechanical Engineering
              </span>

              <span className="hidden text-[9px] font-medium uppercase tracking-[0.18em] text-white/35 sm:block">
                Academic · Technical · Professional
              </span>
            </div>
          </div>
        </section>

        {/* =========================================================
            DEPARTMENT NAVIGATION
        ========================================================= */}
        <InnerHeader />

        {/* =========================================================
            INTRODUCTION
        ========================================================= */}
        <IntroSection />

        {/* =========================================================
            ACADEMIC EXCELLENCE CARDS
        ========================================================= */}
        <section
          id="excellence"
          className="bg-[#f2efe8] px-5 py-20 sm:px-8 sm:py-24 lg:px-14 lg:py-28"
        >
          <div className="mx-auto max-w-[1440px]">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.65fr] lg:items-end">
              <div>
                <SectionLabel>Student Recognition</SectionLabel>

                <h2 className="mt-6 max-w-[700px] font-serif text-[38px] font-normal leading-tight text-[#20235A] sm:text-[49px]">
                  Celebrating
                  <span className="block text-[#8f7746]">
                    academic achievement.
                  </span>
                </h2>
              </div>

              <p className="max-w-[460px] text-[13px] leading-[1.9] text-[#77736b] sm:text-[14px]">
                Explore the academic accomplishments and achievements of
                Mechanical Engineering students through university rankings,
                department-level performance and other recognitions.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
              {excellenceItems.map((item) => (
                <ExcellenceCard key={item.title} item={item} />
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            FEATURE / RECOGNITION SECTION
        ========================================================= */}
        <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-14 lg:py-32">
          <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-20">
            <div className="relative">
              <div className="absolute -right-3 -top-3 hidden h-full w-full border border-[#D2B87C]/40 lg:block" />

              <div className="relative flex min-h-[360px] overflow-hidden border border-[#e7e2d8] bg-[#20235A] sm:min-h-[440px] lg:min-h-[490px]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#292d6b] via-[#20235A] to-[#11152e]" />

                <div className="pointer-events-none absolute right-[-100px] top-[-100px] h-[380px] w-[380px] rounded-full border border-[#D2B87C]/15" />

                <div className="relative z-10 flex flex-col justify-between p-7 sm:p-9 lg:p-10">
                  <div className="flex items-center gap-3">
                    <span className="h-px w-7 bg-[#D2B87C]" />

                    <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/80">
                      Performance & Recognition
                    </span>
                  </div>

                  <div>
                    <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                      Mechanical Engineering
                    </p>

                    <h3 className="max-w-[520px] font-serif text-[31px] font-normal leading-[1.1] text-white sm:text-[40px] lg:text-[46px]">
                      Every achievement
                      <span className="block text-[#D2B87C]">
                        begins with effort.
                      </span>
                    </h3>
                  </div>

                  <span className="font-serif text-[90px] leading-none text-white/[0.06] sm:text-[120px]">
                    02
                  </span>
                </div>
              </div>
            </div>

            <div>
              <SectionLabel>Why Academic Excellence Matters</SectionLabel>

              <h2 className="mt-6 font-serif text-[39px] font-normal leading-[1.12] tracking-[-0.025em] text-[#20235A] sm:text-[49px]">
                Knowledge,
                <span className="block text-[#8f7746]">
                  performance & growth.
                </span>
              </h2>

              <p className="mt-6 text-[14px] leading-[2] text-[#696761] sm:text-[15px]">
                Academic achievement represents more than examination
                performance. It reflects discipline, consistent learning,
                technical curiosity and the ability to apply knowledge
                effectively.
              </p>

              <div className="mt-8">
                <article className="grid gap-4 border-t border-[#e7e2d8] py-5 sm:grid-cols-[48px_1fr] sm:gap-5">
                  <div className="flex h-11 w-11 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                    <Trophy size={21} strokeWidth={1.4} />
                  </div>

                  <div>
                    <h3 className="font-serif text-[22px] font-normal text-[#20235A]">
                      Academic Performance
                    </h3>

                    <p className="mt-3 text-[12px] leading-[1.9] text-[#77736b] sm:text-[13px]">
                      Recognising students who demonstrate consistent
                      academic performance and dedication to their studies.
                    </p>
                  </div>
                </article>

                <article className="grid gap-4 border-t border-[#e7e2d8] py-5 sm:grid-cols-[48px_1fr] sm:gap-5">
                  <div className="flex h-11 w-11 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                    <Landmark size={21} strokeWidth={1.4} />
                  </div>

                  <div>
                    <h3 className="font-serif text-[22px] font-normal text-[#20235A]">
                      University Recognition
                    </h3>

                    <p className="mt-3 text-[12px] leading-[1.9] text-[#77736b] sm:text-[13px]">
                      Highlighting students who achieve recognition through
                      university-level academic performance.
                    </p>
                  </div>
                </article>

                <article className="grid gap-4 border-y border-[#e7e2d8] py-5 sm:grid-cols-[48px_1fr] sm:gap-5">
                  <div className="flex h-11 w-11 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                    <Star size={21} strokeWidth={1.4} />
                  </div>

                  <div>
                    <h3 className="font-serif text-[22px] font-normal text-[#20235A]">
                      Overall Development
                    </h3>

                    <p className="mt-3 text-[12px] leading-[1.9] text-[#77736b] sm:text-[13px]">
                      Encouraging students to develop technical, analytical
                      and professional capabilities alongside academics.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            CLOSING CTA
        ========================================================= */}
        <section className="bg-white px-5 pb-20 sm:px-8 sm:pb-24 lg:px-14 lg:pb-28">
          <div className="relative mx-auto max-w-[1440px] overflow-hidden bg-[#20235A] px-6 py-12 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
            <div className="pointer-events-none absolute -right-12 -top-16 h-64 w-64 rounded-full border border-white/10 sm:-right-5 sm:h-80 sm:w-80" />

            <div className="pointer-events-none absolute -right-2 -top-6 h-48 w-48 rounded-full border border-[#D2B87C]/25 sm:h-64 sm:w-64" />

            <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <SectionLabel>Mechanical Engineering</SectionLabel>

                <h2 className="mt-6 max-w-[760px] font-serif text-[36px] font-normal leading-tight text-white sm:text-[48px] lg:text-[52px]">
                  Excellence through
                  <span className="block text-[#D2B87C]">
                    knowledge & achievement.
                  </span>
                </h2>

                <p className="mt-5 max-w-[620px] text-[13px] leading-[1.9] text-white/60 sm:text-[14px]">
                  Explore the academic achievements, student performance and
                  recognitions that showcase the pursuit of excellence within
                  the Mechanical Engineering department.
                </p>
              </div>

              <Link
                href="/department/mechanical-engineering/achievements"
                className="group inline-flex min-h-14 w-fit items-center gap-4 border border-[#D2B87C]/70 px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.15em] text-white no-underline transition-colors hover:bg-[#D2B87C] hover:text-[#20235A]"
              >
                View Achievements

                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}