import type { ReactNode } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  ChevronRight,
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
      "Recognizing students who have demonstrated outstanding academic performance at the university level.",
    icon: Landmark,
    href: "/departments/electrical-and-electronics-engineering/academic-excellence/university-rank-holders",
  },
  {
    number: "02",
    title: "Department Toppers",
    description:
      "Celebrating exceptional academic achievers who have secured the highest positions within the department.",
    icon: Trophy,
    href: "/departments/electrical-and-electronics-engineering/academic-excellence/department-toppers",
  },
  {
    number: "03",
    title: "Placement",
    description:
      "Supporting students with career opportunities, industry exposure and pathways towards professional success.",
    icon: Briefcase,
    href: "/departments/electrical-and-electronics-engineering/academic-excellence/placement",
  },
  {
    number: "04",
    title: "Other Achievements",
    description:
      "Highlighting accomplishments that reflect the broader academic and professional excellence of our students.",
    icon: Star,
    href: "/departments/electrical-and-electronics-engineering/academic-excellence/other-achievements",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <div className="mb-5 flex items-center gap-3">
        <span className="h-px w-10 bg-[#D2B87C]" />
        <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
          {eyebrow}
        </p>
      </div>

      <h2 className="font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-sm leading-7 text-[#1E1917]/65 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

function ExcellenceCard({ item }: { item: ExcellenceItem }) {
  const Icon = item.icon;

  const cardContent = (
    <>
      <div className="flex items-start justify-between">
        <span className="text-[10px] font-semibold tracking-[0.2em] text-[#8F7746]">
          {item.number}
        </span>

        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#20235A] text-[#D2B87C] transition-all duration-300 group-hover:bg-[#D2B87C] group-hover:text-[#20235A]">
          <Icon className="h-5 w-5" strokeWidth={1.6} />
        </span>
      </div>

      <div className="mt-8">
        <h3 className="max-w-xs font-serif text-xl leading-snug text-[#20235A] sm:text-2xl">
          {item.title}
        </h3>

        <p className="mt-4 text-sm leading-6 text-[#1E1917]/60">
          {item.description}
        </p>
      </div>

      {item.href && (
        <div className="mt-7 flex items-center justify-between border-t border-[#1E1917]/10 pt-5">
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
            Explore
          </span>

          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#20235A]/15 text-[#20235A] transition-all duration-300 group-hover:border-[#D2B87C] group-hover:bg-[#D2B87C]">
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </span>
        </div>
      )}
    </>
  );

  const cardClasses =
    "group flex h-full flex-col rounded-[2rem] border border-[#1E1917]/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#D2B87C]/70 hover:shadow-[0_20px_50px_rgba(32,35,90,0.10)] sm:p-8";

  if (!item.href) {
    return <div className={cardClasses}>{cardContent}</div>;
  }

  return (
    <Link href={item.href} className={cardClasses}>
      {cardContent}
    </Link>
  );
}

function ExcellenceStat({
  label,
  value,
  icon: Icon,
}: {
  label: string;
  value: string;
  icon: LucideIcon;
}) {
  return (
    <div className="group rounded-3xl border border-[#1E1917]/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D2B87C]/70 hover:shadow-[0_16px_40px_rgba(32,35,90,0.08)]">
      <div className="flex items-center justify-between">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#20235A] text-[#D2B87C]">
          <Icon className="h-5 w-5" strokeWidth={1.6} />
        </span>

        <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
          NCERC
        </span>
      </div>

      <p className="mt-6 font-serif text-2xl text-[#20235A]">{value}</p>

      <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1E1917]/55">
        {label}
      </p>
    </div>
  );
}

export default function AcademicExcellencePage() {
  return (
    <>
      <SiteHeader />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[#20235A]">
        <div className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full border border-[#D2B87C]/20" />
        <div className="pointer-events-none absolute -right-8 -top-16 h-52 w-52 rounded-full border border-[#D2B87C]/10" />
        <div className="pointer-events-none absolute bottom-[-180px] left-[-120px] h-96 w-96 rounded-full border border-white/5" />

        <div className="relative mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          <div className="max-w-4xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#D2B87C]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D2B87C]">
                Electrical &amp; Electronics Engineering
              </p>
            </div>

            <h1 className="max-w-4xl font-serif text-4xl leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              Academic excellence,
              <span className="block text-[#D2B87C]">
                recognised &amp; celebrated.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
              Explore the academic achievements, student accomplishments and
              career outcomes that reflect the pursuit of excellence within
              the Electrical and Electronics Engineering department at NCERC.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#excellence"
                className="group inline-flex items-center gap-2 rounded-full bg-[#D2B87C] px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#20235A] transition-all duration-300 hover:bg-white"
              >
                Explore Excellence
                <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <Link
                href="/departments/electrical-and-electronics-engineering"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:border-[#D2B87C]/60 hover:text-[#D2B87C]"
              >
                Department Overview
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Hero Information Strip */}
        <div className="border-t border-white/10 bg-white/[0.03]">
          <div className="mx-auto grid max-w-[1440px] grid-cols-1 sm:grid-cols-3">
            <div className="border-b border-white/10 px-6 py-5 sm:border-b-0 sm:border-r sm:px-10 lg:px-16">
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                Focus
              </p>
              <p className="mt-2 font-serif text-lg text-white">
                Academic Achievement
              </p>
            </div>

            <div className="border-b border-white/10 px-6 py-5 sm:border-b-0 sm:border-r sm:px-10 lg:px-16">
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                Recognition
              </p>
              <p className="mt-2 font-serif text-lg text-white">
                Student Excellence
              </p>
            </div>

            <div className="px-6 py-5 sm:px-10 lg:px-16">
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                Areas
              </p>
              <p className="mt-2 font-serif text-lg text-white">
                04 Key Areas
              </p>
            </div>
          </div>
        </div>
      </section>

      <InnerHeader />

      <main className="bg-[#FAF7F2]">
        {/* Introduction */}
        <section className="border-b border-[#1E1917]/10">
          <div className="mx-auto grid max-w-[1440px] gap-10 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-[1fr_0.8fr] lg:gap-20 lg:px-16 lg:py-24">
            <SectionHeading
              eyebrow="Academic Excellence"
              title="A culture of achievement, recognition and growth."
              description="Academic excellence at NCERC is reflected through the accomplishments of students, their performance at university level, departmental achievements and their transition into professional careers."
            />

            <div className="flex items-end">
              <div className="w-full rounded-[2rem] border border-[#1E1917]/10 bg-white p-7 sm:p-8">
                <div className="flex items-start gap-4">
                  <span className="mt-1 h-10 w-1 shrink-0 bg-[#D2B87C]" />

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                      Our Approach
                    </p>

                    <p className="mt-4 font-serif text-2xl leading-snug text-[#20235A]">
                      Encouraging students to aim higher and achieve more.
                    </p>

                    <p className="mt-4 text-sm leading-6 text-[#1E1917]/60">
                      From academic rankings to placements and wider
                      accomplishments, every achievement contributes to the
                      department&apos;s culture of excellence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Excellence Areas */}
        <section id="excellence" className="bg-white">
          <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <SectionHeading
                eyebrow="Recognition & Outcomes"
                title="Explore our areas of excellence."
                description="Discover the achievements and outcomes that showcase the academic and professional journey of Electrical and Electronics Engineering students."
              />

              <div className="hidden shrink-0 lg:block">
                <p className="text-right text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                  04 Areas
                </p>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {excellenceItems.map((item) => (
                <ExcellenceCard key={item.title} item={item} />
              ))}
            </div>
          </div>
        </section>

        {/* Excellence Snapshot */}
        <section className="bg-[#F2EFE8]">
          <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
              <SectionHeading
                eyebrow="Beyond Academics"
                title="Excellence extends beyond the classroom."
                description="Academic success is strengthened by opportunities to demonstrate knowledge, develop professional capabilities and participate in a competitive environment."
              />

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <ExcellenceStat
                  label="University Recognition"
                  value="Ranks"
                  icon={Landmark}
                />

                <ExcellenceStat
                  label="Department Performance"
                  value="Toppers"
                  icon={Trophy}
                />

                <ExcellenceStat
                  label="Career Outcomes"
                  value="Placements"
                  icon={Briefcase}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="bg-[#20235A]">
          <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="max-w-3xl">
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#D2B87C]" />

                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                    Electrical &amp; Electronics Engineering
                  </p>
                </div>

                <h2 className="font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
                  Celebrating achievement.
                  <span className="block text-[#D2B87C]">
                    Inspiring the next milestone.
                  </span>
                </h2>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
                  Explore the achievements and academic journey of students
                  who continue to contribute to the culture of excellence at
                  NCERC.
                </p>
              </div>

              <Link
                href="/departments/electrical-and-electronics-engineering/achievements"
                className="group inline-flex w-fit items-center gap-3 rounded-full bg-[#D2B87C] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#20235A] transition-all duration-300 hover:bg-white"
              >
                View Achievements
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}