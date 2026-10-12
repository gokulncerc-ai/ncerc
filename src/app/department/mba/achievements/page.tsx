import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Award,
  BadgeCheck,
  BookOpen,
  CheckCircle2,
  GraduationCap,
  Landmark,
  Medal,
  ShieldCheck,
  Sparkles,
  Trophy,
} from "lucide-react";
import Image from "next/image";
import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import DepartmentNavigation from "../DepartmentNav/page";
import AchievementsGrid from "./AchievementsGrid/page";
import type { Achievement } from "./AchievementsGrid/page";
import FAQ from "../FAQ.tsx/page";

export const metadata: Metadata = {
  title: "Achievements | Nehru School of Management - NCERC",
  description:
    "Rankings and recognitions of Nehru School of Management (NSM), including NBA accreditation for 2026–2028 and rankings by OPEN Magazine, Fortune India, The Week and Business Today.",
  keywords: [
    "MBA Colleges in Kerala",
    "MBA College in Palakkad",
    "MBA College in Thrissur",
    "Best MBA Colleges in Kerala",
    "Nehru School of Management",
    "Top MBA College in Kerala",
    "Best MBA in Kerala",
    "MBA in Palakkad",
    "MBA in Kerala",
    "Best college for MBA in Kerala",
  ],
  robots: {
    index: true,
    follow: true,
  },
};

const HERO_IMAGE =
  "https://i.pinimg.com/736x/e3/e6/86/e3e6865960303a2cf4db914d31736811.jpg";

const achievements: Achievement[] = [
  {
    number: "01",
    text: "MBA program accredited by NBA for 2026–2028, adding another milestone to our journey of academic excellence. Shaping future leaders with quality education, innovation, and industry-focused learning.",
    image: `https://ncerc.ac.in/mba/img/achievements/Proud-moment.webp`,
alt: "MBA program accredited by NBA for 2026–2028",
  },
{
  number: "02",
    text: "Nehru School of Management has been recognized in the 2025 TOP B-Schools Survey by OPEN Magazine, securing 124th rank in the All-India category and 29th rank in the South Zone.",
      image: `https://ncerc.ac.in/images/dpt/mba/achievements/b-school-servey.jpeg`,
        alt: "OPEN Magazine Top B-Schools Survey 2025",
  },
{
  number: "03",
    text: "Nehru School of Management@NCERC achieved a very prominent ranking in Fortune India Magazine 2025. | All India Ranking 142.",
      image: `https://ncerc.ac.in/images/dpt/mba/achievements/Fortune.png`,
        alt: "Fortune India Magazine 2025 ranking",
  },
{
  number: "04",
    text: "Nehru School of Management@NCERC achieved a very prominent ranking in The Week Survey 2024. | All India Ranking 73.",
      image: `https://ncerc.ac.in/images/dpt/mba/achievements/Week-Survey-2024.png`,
        alt: "The Week Survey 2024 ranking",
  },
{
  number: "05",
    text: "Nehru School of Management@NCERC achieved a very prominent ranking in Business Today | All India Ranking 68.",
      image: `https://ncerc.ac.in/images/dpt/mba/achievements/business.png`,
        alt: "Business Today ranking",
  },
{
  number: "06",
    title: "Fortune India - India’s best B-schools 2024",
      text: "Nehru School of Management@NCERC achieved a very prominent ranking in Fortune India - India’s best B-schools 2024. | All India Ranking 712.",
        image: `https://ncerc.ac.in/images/dpt/mba/achievements/Fortune_india.png`,
          alt: "Fortune India - India's best B-schools 2024",
  },
{
  number: "07",
    title: "Week- Hansa Research Survey 2024",
      text: "Nehru School of Management@NCERC achieved a very prominent ranking in The Week - Hansa Research Survey 2024 Best B-Schools | All India Ranking 214 | Private All India Ranking 192 | 78th in South Zone | 73rd in Private South Zone.",
        image: `https://ncerc.ac.in/images/dpt/mba/achievements/WEEK-HANSA-RESEARCH-SURVEY-2024.jpg`,
          alt: "The Week - Hansa Research Survey 2024",
  },
];

const rankingHighlights = [
  {
    number: "68",
    label: "Business Today",
    detail: "All India Ranking",
    icon: Trophy,
  },
  {
    number: "73",
    label: "The Week Survey 2024",
    detail: "All India Ranking",
    icon: Medal,
  },
  {
    number: "124",
    label: "OPEN Magazine 2025",
    detail: "All India Ranking",
    icon: Award,
  },
  {
    number: "142",
    label: "Fortune India 2025",
    detail: "All India Ranking",
    icon: GraduationCap,
  },
];

const recognitionFeatures = [
  {
    icon: ShieldCheck,
    title: "National Accreditation",
    description:
      "NBA accreditation recognises the MBA programme for the 2026–2028 period.",
  },
  {
    icon: Trophy,
    title: "Industry Recognition",
    description:
      "Featured in national B-school surveys and management education rankings.",
  },
  {
    icon: Sparkles,
    title: "Academic Excellence",
    description:
      "Committed to quality management education, innovation and industry-focused learning.",
  },
];

export default function MBAAchievementsPage() {
  return (
    <>
      <SiteHeader />

      <main className="overflow-hidden bg-[#FAF8F3] text-[#1E1917]">
        {/* HERO */}
        <section
          id="news-events-title"
          className="relative isolate overflow-hidden bg-[#20235A] text-white"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
          >
            <div className="absolute -right-32 -top-32 h-[440px] w-[440px] rounded-full border border-[#D2B87C]/15 sm:h-[600px] sm:w-[600px]" />
            <div className="absolute -right-16 -top-16 h-[310px] w-[310px] rounded-full border border-[#D2B87C]/10 sm:h-[450px] sm:w-[450px]" />
            <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#D2B87C]/40 to-transparent" />
            <div className="absolute inset-y-0 right-0 hidden w-[36%] bg-white/[0.025] lg:block" />
          </div>

          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
            <div className="grid min-h-[600px] items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-24">
              {/* Hero copy */}
              <div className="relative z-10">
                <div className="mb-8 inline-flex items-center gap-3">
                  <span className="h-px w-10 bg-[#D2B87C]" />
                  <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#D2B87C] sm:text-[11px]">
                    Nehru School of Management
                  </span>
                </div>

                <h1 className="max-w-3xl font-serif text-[clamp(3rem,6.2vw,5.8rem)] font-normal leading-[1.04] tracking-[-0.035em] text-white">
                  A record of
                  <span className="mt-1 block font-normal italic text-[#D2B87C]">
                    achievement.
                  </span>
                </h1>

                <p className="mt-6 text-[11px] font-normal uppercase tracking-[0.19em] text-white/55 sm:text-xs">
                  Accreditation <span className="mx-2 text-[#D2B87C]">/</span>
                  Rankings <span className="mx-2 text-[#D2B87C]">/</span>
                  Recognition
                </p>

                <p className="mt-7 max-w-xl text-sm font-normal leading-7 text-white/70 sm:text-[15px] sm:leading-8">
                  Recognising the milestones, rankings and accomplishments
                  that reflect Nehru School of Management’s commitment to
                  quality management education and future-ready leadership.
                </p>

                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <a
                    href="#recognition"
                    className="group inline-flex min-h-12 items-center gap-3 bg-[#D2B87C] px-6 py-3.5 text-sm font-medium text-[#20235A] transition-colors duration-300 hover:bg-white"
                  >
                    Explore achievements
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>

                  <a
                    href="#rankings"
                    className="inline-flex min-h-12 items-center gap-2 border border-white/20 px-5 py-3.5 text-sm font-normal text-white/75 transition-colors hover:border-[#D2B87C]/60 hover:text-[#D2B87C]"
                  >
                    View rankings
                    <ArrowDownRight className="h-4 w-4" />
                  </a>
                </div>

                <div className="mt-12 flex max-w-lg items-center gap-4 border-t border-white/15 pt-7 sm:mt-14">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#D2B87C]/40 bg-[#D2B87C]/[0.06]">
                    <BadgeCheck className="h-5 w-5 text-[#D2B87C]" />
                  </div>

                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.19em] text-[#D2B87C]">
                      NBA Accreditation
                    </p>
                    <p className="mt-1.5 text-sm font-normal leading-6 text-white/60">
                      MBA programme · 2026–2028
                    </p>
                  </div>

                  <span className="ml-auto hidden font-serif text-3xl font-normal text-white/15 sm:block">
                    01
                  </span>
                </div>
              </div>

              {/* Hero image */}
              <div className="relative mx-auto w-full max-w-[620px] lg:ml-auto">
                <div className="absolute -right-3 -top-3 h-24 w-24 border-r border-t border-[#D2B87C]/60 sm:-right-5 sm:-top-5 sm:h-32 sm:w-32" />
                <div className="absolute -bottom-3 -left-3 h-24 w-24 border-b border-l border-[#D2B87C]/40 sm:-bottom-5 sm:-left-5 sm:h-32 sm:w-32" />

                <div className="relative overflow-hidden border border-white/10 bg-[#171946] p-2 sm:p-3">
                  <div className="relative flex min-h-[290px] items-center justify-center overflow-hidden bg-[#F7F4ED] sm:min-h-[390px] lg:min-h-[480px]">
                    <Image
                      src={HERO_IMAGE}
                      alt="Nehru School of Management achievement"
                      loading="eager"
                      fill
                      sizes="(min-width: 1024px) 330px, 100vw"
                      fetchPriority="high"
                      className="block h-auto max-h-[270px] w-full object-contain sm:max-h-[360px] lg:max-h-[440px]"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-4 px-3 py-4 sm:px-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#D2B87C]/15">
                        <Award className="h-4 w-4 text-[#D2B87C]" />
                      </div>

                      <div>
                        <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#D2B87C]">
                          Institutional milestone
                        </p>
                        <p className="mt-1 text-xs font-normal text-white/60 sm:text-sm">
                          A commitment to excellence
                        </p>
                      </div>
                    </div>

                    <span className="shrink-0 font-serif text-2xl font-normal text-white/40">
                      2026
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-px bg-[#D2B87C]/30" />
        </section>

        <DepartmentNavigation />

        {/* RANKINGS AT A GLANCE */}
        <section
          id="rankings"
          className="scroll-mt-24 border-b border-[#20235A]/10 bg-white"
        >
          <div className="mx-auto max-w-[1440px] px-6 pb-8 pt-12 sm:px-10 sm:pb-10 lg:px-16">
            <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#8F7746]">
                  Rankings at a glance
                </p>
                <h2 className="mt-2 font-serif text-2xl font-normal tracking-tight text-[#20235A] sm:text-3xl">
                  National recognition
                </h2>
              </div>

              <span className="text-xs font-normal text-[#625F5B]">
                Selected published rankings
              </span>
            </div>

            <div className="grid overflow-hidden border border-[#20235A]/10 sm:grid-cols-2 lg:grid-cols-4">
              {rankingHighlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className={`group relative flex min-h-[175px] flex-col justify-between p-6 transition-colors duration-300 hover:bg-[#FAF8F3] sm:p-7 ${index !== 0
                        ? "border-t border-[#20235A]/10 sm:border-l sm:border-t-0"
                        : ""
                      } ${index >= 2 ? "lg:border-l" : ""}`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#8F7746]">
                        {String(index + 1).padStart(2, "0")} / Recognition
                      </span>

                      <Icon className="h-5 w-5 text-[#D2B87C] transition-transform duration-300 group-hover:-translate-y-1" />
                    </div>

                    <div className="mt-6">
                      <p className="font-serif text-5xl font-normal leading-none tracking-tight text-[#20235A] sm:text-[54px]">
                        {item.number}
                      </p>

                      <p className="mt-4 text-xs font-medium uppercase tracking-[0.07em] text-[#20235A]">
                        {item.label}
                      </p>

                      <p className="mt-1.5 text-xs font-normal leading-5 text-[#625F5B]">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="mt-4 max-w-3xl text-xs font-normal leading-6 text-[#625F5B]">
              Rankings shown are reproduced from the supplied institutional
              content. Ranking categories and survey years differ by
              publication.
            </p>
          </div>
        </section>

        {/* RECOGNITION PILLARS */}
        <section className="bg-[#FAF8F3]">
          <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
            <div className="mb-10 max-w-2xl">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-9 bg-[#8F7746]" />
                <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#8F7746]">
                  What we value
                </span>
              </div>

              <h2 className="font-serif text-3xl font-normal leading-tight tracking-tight text-[#20235A] sm:text-4xl">
                Progress built on purpose.
              </h2>

              <p className="mt-4 max-w-xl text-sm font-normal leading-7 text-[#625F5B] sm:text-base sm:leading-8">
                Every milestone represents a continued commitment to
                academic standards, meaningful learning and professional
                development.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {recognitionFeatures.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <article
                    key={feature.title}
                    className="group relative border border-[#20235A]/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D2B87C]/80 hover:shadow-[0_16px_40px_rgba(32,35,90,0.06)] sm:p-8"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-3xl font-normal text-[#20235A]/15">
                        0{index + 1}
                      </span>

                      <div className="flex h-12 w-12 items-center justify-center bg-[#D2B87C]/15 text-[#8F7746] transition-colors group-hover:bg-[#20235A] group-hover:text-[#D2B87C]">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>

                    <h3 className="mt-8 font-serif text-2xl font-normal text-[#20235A]">
                      {feature.title}
                    </h3>

                    <p className="mt-3 text-sm font-normal leading-7 text-[#625F5B]">
                      {feature.description}
                    </p>

                    <div className="mt-7 h-px w-12 bg-[#D2B87C] transition-all duration-300 group-hover:w-20" />
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ACHIEVEMENTS GRID */}
        <section
          id="recognition"
          className="scroll-mt-24 border-y border-[#20235A]/[0.06] bg-[#F0EDE5]"
        >
          <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-28">
            <div className="mb-12 grid gap-7 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-3xl">
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#8F7746]" />
                  <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#8F7746]">
                    Our achievements
                  </span>
                </div>

                <h2 className="font-serif text-[clamp(2.4rem,5vw,4.3rem)] font-normal leading-[1.06] tracking-[-0.035em] text-[#20235A]">
                  Recognition that reflects
                  <span className="block">
                    our commitment to excellence.
                  </span>
                </h2>

                <p className="mt-6 max-w-2xl text-sm font-normal leading-7 text-[#625F5B] sm:text-base sm:leading-8">
                  Explore the milestones and survey recognitions received by
                  Nehru School of Management across national management
                  education publications.
                </p>
              </div>

              <div className="flex items-center gap-3 border-l-2 border-[#D2B87C] pl-4 lg:mb-1">
                <div>
                  <p className="font-serif text-3xl font-normal text-[#20235A]">
                    07
                  </p>
                  <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.15em] text-[#8F7746]">
                    Recognition entries
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-8 flex flex-wrap items-center justify-between gap-3 border-y border-[#20235A]/10 py-4">
              <div className="flex items-center gap-3">
                <BookOpen className="h-4 w-4 text-[#8F7746]" />
                <span className="text-xs font-medium uppercase tracking-[0.1em] text-[#20235A]">
                  Institutional honours and rankings
                </span>
              </div>

              <span className="text-xs font-normal text-[#625F5B]">
                Select an image to view it in full size
              </span>
            </div>

            <AchievementsGrid items={achievements} />
          </div>
        </section>

        {/* ACCREDITATION FEATURE */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
            <div className="relative overflow-hidden bg-[#20235A]">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full border border-[#D2B87C]/20 sm:h-96 sm:w-96"
              />

              <div className="relative grid gap-8 p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12 lg:p-14">
                <div className="max-w-3xl">
                  <div className="mb-5 inline-flex items-center gap-2 border border-[#D2B87C]/30 px-3 py-2 text-[10px] font-medium uppercase tracking-[0.16em] text-[#D2B87C]">
                    <CheckCircle2 className="h-4 w-4" />
                    Accreditation milestone
                  </div>

                  <h2 className="font-serif text-3xl font-normal leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                    Building confidence through quality education.
                  </h2>

                  <p className="mt-5 max-w-2xl text-sm font-normal leading-7 text-white/65 sm:text-base sm:leading-8">
                    The MBA programme&apos;s NBA accreditation for 2026–2028
                    represents an important milestone in NSM&apos;s continuing
                    commitment to academic quality, industry relevance and
                    management education.
                  </p>
                </div>

                <div className="flex items-center gap-4 border-t border-white/15 pt-6 lg:min-w-[210px] lg:flex-col lg:items-start lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                  <div className="flex h-14 w-14 items-center justify-center border border-[#D2B87C]/40">
                    <Landmark className="h-7 w-7 text-[#D2B87C]" />
                  </div>

                  <div>
                    <p className="font-serif text-3xl font-normal text-[#D2B87C]">
                      2026–2028
                    </p>
                    <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.15em] text-white/55">
                      MBA accreditation period
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EXPLORE FACILITIES CTA */}
        <section className="bg-[#FAF8F3]">
          <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
            <div className="relative overflow-hidden border border-[#20235A]/10 bg-white p-7 sm:p-10 lg:p-14">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full border border-[#D2B87C]/30 sm:h-64 sm:w-64"
              />

              <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <span className="h-px w-9 bg-[#8F7746]" />
                    <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#8F7746]">
                      Explore NSM
                    </span>
                  </div>

                  <h2 className="max-w-3xl font-serif text-3xl font-normal leading-tight tracking-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                    Discover the facilities and opportunities behind the
                    school.
                  </h2>

                  <p className="mt-5 max-w-2xl text-sm font-normal leading-7 text-[#625F5B] sm:text-base sm:leading-8">
                    Explore the learning environment and facilities that
                    support students throughout their management education
                    journey.
                  </p>
                </div>

                <Link
                  href="/department/mba/facilities"
                  className="group inline-flex w-fit items-center gap-4 bg-[#20235A] px-6 py-4 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#171946]"
                >
                  Explore facilities
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FAQ />
      <FooterSection />
    </>
  );
}
