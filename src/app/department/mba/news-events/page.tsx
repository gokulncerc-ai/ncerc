
import type { Metadata } from "next";
import {
  ArrowDown,
  ArrowUpRight,
  Award,
  CalendarDays,
  CheckCircle2,
  Newspaper,
} from "lucide-react";
import Image from "next/image";
import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../DepartmentNav/page";
import FAQ from "../FAQ.tsx/page";

export const metadata: Metadata = {
  title: "News and Events | Nehru School of Management - NCERC",
  description:
    "Latest news and events from Nehru School of Management (NSM), including the NBA accreditation of the MBA programme for 2026–2028.",
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

type NewsItem = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};
const newsItems: NewsItem[] = [
  {
    title: "Proud Moment for NCERC!",
    description:
      "NCERCs MBA program has been accredited by the National Board of Accreditation (NBA) for the period 2026–2028, marking another significant milestone in its pursuit of academic excellence. This achievement reflects the institutions commitment to delivering quality management education, fostering innovation, and preparing future leaders through industry-oriented learning.",
    image: `https://ncerc.ac.in/mba/img/news-events/Proud-moment.webp`,
    imageAlt: "Proud Moment NCERC",
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
    <div className="mb-10 flex flex-col gap-4 border-b border-[#20235A]/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.23em] text-[#8F7746]">
          {eyebrow}
        </p>
        <h2 className="font-serif text-3xl font-medium tracking-tight text-[#20235A] sm:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="mt-3 max-w-2xl text-sm leading-7 text-[#625F5B] sm:text-base">
            {description}
          </p>
        )}
      </div>
      <Newspaper
        aria-hidden="true"
        size={30}
        strokeWidth={1.25}
        className="hidden shrink-0 text-[#8F7746]/70 sm:block"
      />
    </div>
  );
}

export default function MBANewsEventsPage() {
  return (
    <>
      <SiteHeader />

      {/* Hero */}
      <section
        aria-labelledby="news-events-title"
        className="relative isolate overflow-hidden bg-[#20235A] text-white"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:52px_52px]" />
          <div className="absolute -right-40 -top-48 h-[500px] w-[500px] rounded-full border border-white/[0.08]" />
          <div className="absolute -right-20 -top-28 h-[350px] w-[350px] rounded-full border border-[#D2B87C]/25" />
          <div className="absolute right-16 top-16 h-32 w-32 rounded-full border border-white/[0.08]" />
          <div className="absolute bottom-0 left-0 h-1 w-36 bg-[#D2B87C]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-16 sm:pb-20 sm:pt-24 lg:px-8 lg:pb-24 lg:pt-28">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-10 bg-[#D2B87C]" />
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D2B87C] sm:text-sm">
                  Nehru School of Management · NCERC
                </p>
              </div>

              <h1
                id="news-events-title"
                className="max-w-3xl font-serif text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
              >
                News, milestones
                <br />
                <span className="italic text-[#D2B87C]">
                  &amp; achievements.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                Discover the milestones and achievements that reflect the
                commitment of Nehru School of Management to quality management
                education and academic excellence.
              </p>

              <a
                href="#latest-news"
                className="group mt-9 inline-flex items-center gap-3 border border-[#D2B87C]/70 px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#D2B87C] hover:text-[#20235A]"
              >
                Explore the latest news
                <ArrowDown
                  size={17}
                  className="transition-transform group-hover:translate-y-1"
                />
              </a>
            </div>

            <div className="relative border-l border-[#D2B87C]/50 py-2 pl-6 sm:pl-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center border border-[#D2B87C]/50 text-[#D2B87C]">
                <Award size={25} strokeWidth={1.5} />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                Featured milestone
              </p>
              <h2 className="mt-3 font-serif text-3xl leading-tight text-white sm:text-4xl">
                MBA programme
                <br />
                <span className="italic">NBA accreditation</span>
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/65">
                Accreditation for the period 2026–2028 marks an important
                milestone for the MBA programme at NCERC.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#D2B87C]">
                <CalendarDays size={16} />
                <span>2026–2028</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department navigation */}
      <div className="border-b border-[#20235A]/10 bg-[#FAF8F3]">
        <InnerHeader />
      </div>

      <main className="overflow-hidden bg-white text-[#1E1917]">
        {/* News listing */}
        <section
          id="latest-news"
          className="scroll-mt-24 py-16 sm:py-20 lg:py-24"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeading
              eyebrow="Inside NSM"
              title="News and events"
              description="Updates, institutional milestones and achievements from Nehru School of Management."
            />

            <div className="mb-8 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 bg-[#20235A] px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-white">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D2B87C]" />
                Featured news
              </span>

              <span className="text-sm text-[#625F5B]">
                Institutional achievement
              </span>
            </div>

            <div className="space-y-10">
              {newsItems.map((item) => (
                <article
                  key={item.title}
                  className="group grid overflow-hidden border border-[#20235A]/10 bg-white lg:grid-cols-[1.02fr_0.98fr]"
                >
                  {/* Image */}
                  <div className="relative flex min-h-[260px] items-center justify-center overflow-hidden bg-[#FAF8F3] p-4 sm:min-h-[380px] sm:p-6 lg:min-h-[510px]">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      loading="lazy"
                      fill
                      sizes="(min-width: 1024px) 330px, 100vw"
                      className="block h-auto max-h-[220px] w-full max-w-full object-contain transition-transform duration-500 group-hover:scale-[1.02] sm:max-h-[320px] lg:max-h-[430px]"
                    />

                    <div className="absolute left-5 top-5 inline-flex items-center gap-2 border border-white/30 bg-[#20235A]/90 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm sm:left-7 sm:top-7">
                      <Award size={15} className="text-[#D2B87C]" />
                      Institutional milestone
                    </div>
                  </div>

                  {/* Article content */}
                  <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-12 xl:p-14">
                    <div className="mb-6 flex items-center gap-3">
                      <span className="h-px w-8 bg-[#D2B87C]" />

                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8F7746]">
                        Academic achievement
                      </p>
                    </div>

                    <h3 className="font-serif text-3xl font-medium leading-tight tracking-tight text-[#20235A] sm:text-4xl lg:text-[2.7rem]">
                      {item.title}
                    </h3>

                    <p className="mt-6 text-justify text-sm leading-8 text-[#625F5B] sm:text-base sm:leading-8">
                      {item.description}
                    </p>

                    <div className="mt-8 border-t border-[#20235A]/10 pt-6">
                      <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#D2B87C]/20 text-[#8F7746]">
                          <CheckCircle2 size={21} />
                        </div>

                        <div>
                          <p className="font-semibold text-[#20235A]">
                            National Board of Accreditation
                          </p>

                          <p className="mt-1 text-sm leading-6 text-[#625F5B]">
                            MBA programme accreditation period: 2026–2028.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                      <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#8F7746]">
                        <CalendarDays size={15} />
                        2026–2028
                      </span>

                      <a
                        href="#news-events-title"
                        aria-label="Return to the News and Events page heading"
                        className="inline-flex items-center gap-2 border border-[#20235A]/20 px-4 py-3 text-sm font-semibold text-[#20235A] transition-colors hover:border-[#20235A] hover:bg-[#20235A] hover:text-white"
                      >
                        Back to top
                        <ArrowUpRight size={16} />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>


        {/* Accreditation highlight */}
        <section className="bg-[#FAF8F3] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="relative overflow-hidden border border-[#20235A]/10 bg-white">
              <div className="grid lg:grid-cols-[1fr_auto] lg:items-center">
                <div className="p-7 sm:p-10 lg:p-12">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8F7746]">
                    A milestone worth celebrating
                  </p>
                  <h2 className="mt-4 max-w-2xl font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl">
                    Commitment to quality management education.
                  </h2>
                  <p className="mt-5 max-w-2xl text-sm leading-7 text-[#625F5B] sm:text-base">
                    The MBA programme&apos;s NBA accreditation for 2026–2028
                    recognises an important step in NSM&apos;s ongoing pursuit
                    of academic quality, innovation and industry-oriented
                    learning.
                  </p>
                </div>

                <div className="relative flex min-h-48 items-center justify-center overflow-hidden bg-[#20235A] p-8 sm:min-h-56 lg:min-h-full lg:w-72">
                  <div
                    aria-hidden="true"
                    className="absolute h-48 w-48 rounded-full border border-white/10"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute h-36 w-36 rounded-full border border-[#D2B87C]/30"
                  />
                  <div className="relative text-center">
                    <Award
                      size={38}
                      strokeWidth={1.2}
                      className="mx-auto text-[#D2B87C]"
                    />
                    <p className="mt-4 font-serif text-4xl text-white">
                      2026–28
                    </p>
                    <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
                      Accreditation period
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Closing callout */}
        <section className="bg-white px-6 py-14 sm:py-20">
          <div className="relative mx-auto max-w-7xl overflow-hidden bg-[#20235A] px-6 py-10 sm:px-10 sm:py-14 lg:px-14">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full border border-white/10"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-2 -top-10 h-44 w-44 rounded-full border border-[#D2B87C]/25"
            />

            <div className="relative flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                  Nehru School of Management
                </p>
                <h2 className="mt-4 font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
                  Every milestone tells
                  <br />
                  <span className="italic text-[#D2B87C]">
                    a story of progress.
                  </span>
                </h2>
                <p className="mt-5 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
                  Follow the achievements and developments shaping the NSM
                  learning community.
                </p>
              </div>

              <a
                href="#latest-news"
                className="group inline-flex w-fit shrink-0 items-center gap-3 border border-[#D2B87C] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#D2B87C] hover:text-[#20235A]"
              >
                View latest news
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>
        </section>
      </main>

      <FAQ />
      <FooterSection />
    </>
  );
}