import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Landmark, Trophy, BookOpen, type LucideIcon } from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import DepartmentNav from "../DepartmentNav/DepartmentNav";

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

type ExcellenceItem = {
  title: string;
  icon: LucideIcon;
  href: string;
};

/*
  NOTE: the PHP source also had an "Other Achievements" card here (fa-star
  icon, href="#"), but the whole thing was wrapped in an HTML comment and
  never actually rendered on the live page - left out entirely to match,
  not even as a non-clickable card. Add it back (with a real href once
  this department has its own achievements-listing page) if it should be
  shown.
*/
// const excellenceItems: ExcellenceItem[] = [
//   {
//     title: "University Rank Holders",
//     icon: Landmark,
//     href: "/department/electronics-and-communication-engineering/academic-excellence/university-rank-holders",
//   },
//   {
//     title: "Department Toppers",
//     icon: Trophy,
//     href: "/department/electronics-and-communication-engineering/academic-excellence/department-toppers",
//   },
// ];

function SectionBlock({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="border-t border-slate-200 pt-12 first:border-t-0 first:pt-0">
      <h2 className="font-display text-2xl font-bold text-navy-950 sm:text-3xl">
        {title}
      </h2>
      <div className="mt-4 h-1 w-12 bg-gold-500" />
      <div className="mt-8">{children}</div>
    </div>
  );
}

// function ExcellenceCard({ item }: { item: ExcellenceItem }) {
//   const Icon = item.icon;

//   return (
//     <Link
//       href={item.href}
//       className="flex h-full flex-col items-center rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:border-gold-500 hover:shadow-lg"
//     >
//       <span className="flex h-16 w-16 items-center justify-center rounded-full bg-navy-950">
//         <Icon size={28} strokeWidth={1.5} className="text-gold-400" />
//       </span>

//       <h3 className="mt-5 font-display text-lg font-semibold uppercase tracking-wide text-navy-950">
//         {item.title}
//       </h3>

//       <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-500">
//         View
//         <ArrowRight size={16} />
//       </span>
//     </Link>
//   );
// }

export default function AcademicExcellencePage() {
  return (
    <>
      <SiteHeader />

      {/* Page Title Banner */}
      <section className="relative overflow-hidden bg-[#20235A]">
        {/* Decorative Circles */}
        <div className="pointer-events-none absolute -right-32 -top-36 h-[500px] w-[500px] rounded-full border border-[#D2B87C]/10" />
        <div className="pointer-events-none absolute -right-12 -top-20 h-[340px] w-[340px] rounded-full border border-[#D2B87C]/15" />
        <div className="pointer-events-none absolute bottom-[-180px] left-[-140px] h-[400px] w-[400px] rounded-full border border-white/5" />

        <div className="relative mx-auto max-w-[1440px] px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28">

          {/* Hero Content */}
          <div className="max-w-4xl">

            <div className="mb-8 flex flex-wrap items-center gap-4">
              <span className="h-px w-12 bg-[#D2B87C]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D2B87C]">
                Electronics &amp; Communication Engineering
              </span>
            </div>

            <h1 className="font-serif text-[46px] leading-[0.97] tracking-[-0.035em] text-white sm:text-[60px] lg:text-[70px] xl:text-[78px]">
              Academic
              <span className="block text-[#D2B87C]">
                Excellence
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-[14px] font-semibold uppercase tracking-[0.14em] text-white/50">
              Learning • Innovation • Academic Achievement
            </p>

            <p className="mt-8 max-w-2xl text-[16px] leading-8 text-white/70 sm:text-[17px]">
              Explore the academic achievements, learning initiatives and
              educational excellence of the Department of Electronics and
              Communication Engineering.
            </p>

            {/* Bottom Department Highlight */}
            <div className="mt-12 flex items-center gap-4 border-t border-white/10 pt-7">
              <div className="flex h-12 w-12 items-center justify-center border border-[#D2B87C]/40">
                <BookOpen className="h-5 w-5 text-[#D2B87C]" />
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                  Academic Focus
                </p>

                <p className="mt-1 text-sm text-white/55">
                  Knowledge, technical competence and continuous learning
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Accent */}
        <div className="h-px bg-[#D2B87C]/20" />
      </section>

      {/* Page Content */}
      <main className="bg-white">
        {/* Inner Sub-Header Navigation */}
        <DepartmentNav />

        {/* <section className="py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl space-y-12 px-6">
            <SectionBlock title="Academic Excellence">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {excellenceItems.map((item) => (
                  <ExcellenceCard key={item.title} item={item} />
                ))}
              </div>
            </SectionBlock>
          </div>
        </section> */}

        <section className="bg-[#FAF7F2] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-[1440px]">

            {/* Section Heading */}
            <div className="mb-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-12">
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#D2B87C]" />
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                    Department Highlights
                  </p>
                </div>

                <h2 className="font-serif text-[38px] leading-[1.08] tracking-[-0.03em] text-[#20235A] sm:text-[48px] lg:text-[56px]">
                  Academic
                  <span className="block italic">Excellence.</span>
                </h2>
              </div>

              <div className="lg:pb-2">
                <p className="max-w-2xl text-[14px] leading-7 text-[#1E1917]/70 sm:text-[15px]">
                  A glimpse into the academic initiatives, achievements and
                  learning experiences that reflect the department's commitment
                  to quality education and continuous development.
                </p>
              </div>
            </div>

            {/* Two Image Showcase */}
            <div className="grid gap-8 md:grid-cols-2 lg:gap-10">

              {/* Image 01 */}
              <div className="group">
                <div className="relative overflow-hidden bg-[#F2EFE8]">
                  <div className="relative aspect-[5/4] overflow-hidden">
                    <Image
                      src="/images/dpt/electronics-and-communication-engineering/academic excellence/eceAcademiEx1.webp"
                      alt="Academic excellence in Electronics and Communication Engineering"
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-contain transition-transform duration-700 group-hover:scale-[1.03]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#20235A]/50 via-transparent to-transparent" />

                    <div className="absolute bottom-5 left-5 flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center border border-[#D2B87C]/70 bg-[#20235A]/80 font-serif text-sm text-[#D2B87C]">
                        01
                      </span>

                      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                        Academic Excellence
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex items-start justify-between gap-4 border-b border-[#20235A]/15 pb-5">
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                      Department Highlight
                    </p>

                    <h3 className="mt-2 font-serif text-2xl text-[#20235A] sm:text-[28px]">
                      Academic Achievement
                    </h3>
                  </div>

                  <span className="mt-2 h-px w-12 shrink-0 bg-[#D2B87C]" />
                </div>
              </div>

              {/* Image 02 */}
              <div className="group md:mt-12">
                <div className="relative overflow-hidden bg-[#F2EFE8]">
                  <div className="relative aspect-[5/4] overflow-hidden">
                    <Image
                      src="/images/dpt/electronics-and-communication-engineering/academic excellence/eceAcademiEx2.webp"
                      alt="Academic learning initiatives in Electronics and Communication Engineering"
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-contain transition-transform duration-700 group-hover:scale-[1.03]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#20235A]/50 via-transparent to-transparent" />

                    <div className="absolute bottom-5 left-5 flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center border border-[#D2B87C]/70 bg-[#20235A]/80 font-serif text-sm text-[#D2B87C]">
                        02
                      </span>

                      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                        Learning &amp; Development
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex items-start justify-between gap-4 border-b border-[#20235A]/15 pb-5">
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                      Department Highlight
                    </p>

                    <h3 className="mt-2 font-serif text-2xl text-[#20235A] sm:text-[28px]">
                      Learning Initiatives
                    </h3>
                  </div>

                  <span className="mt-2 h-px w-12 shrink-0 bg-[#D2B87C]" />
                </div>
              </div>
              {/* Image 02 */}
              <div className="group md:mt-12">
                <div className="relative overflow-hidden bg-[#F2EFE8]">
                  <div className="relative aspect-[5/4] overflow-hidden">
                    <Image
                      src="/images/dpt/electronics-and-communication-engineering/academic excellence/eceAcademiEx3.webp"
                      alt="Academic learning initiatives in Electronics and Communication Engineering"
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-contain transition-transform duration-700 group-hover:scale-[1.03]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#20235A]/50 via-transparent to-transparent" />

                    <div className="absolute bottom-5 left-5 flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center border border-[#D2B87C]/70 bg-[#20235A]/80 font-serif text-sm text-[#D2B87C]">
                        02
                      </span>

                      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                        Learning &amp; Development
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex items-start justify-between gap-4 border-b border-[#20235A]/15 pb-5">
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                      Department Highlight
                    </p>

                    <h3 className="mt-2 font-serif text-2xl text-[#20235A] sm:text-[28px]">
                      Learning Initiatives
                    </h3>
                  </div>

                  <span className="mt-2 h-px w-12 shrink-0 bg-[#D2B87C]" />
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      <FooterSection />
    </>
  );
}