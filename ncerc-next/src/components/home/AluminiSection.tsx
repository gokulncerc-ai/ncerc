import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  Lightbulb,
  Play,
  Rocket,
  Users,
} from "lucide-react";

import AluminiSpotLight from "../../../public/images/alumins/alumini.png";
import AluminiVedios from "../../../public/images/alumins/vedioalumini.png";
import AluminiImage from "../../../public/images/alumins/vedioalumini_two.png";

/* ============================================================
   DATA
============================================================ */

const glanceStats = [
  {
    icon: Users,
    prefix: null,
    value: "500+",
    suffix: "Alumni\nRegistered",
  },
  {
    icon: Rocket,
    prefix: "Founders of",
    value: "30+",
    suffix: "Startups",
  },
  {
    icon: Lightbulb,
    prefix: "Innovators in",
    value: "100+",
    suffix: "Companies",
  },
];

const contributions = [
  {
    title: "Donation to new labs to New Labs in Modalment",
    date: "11 Jul, 2023",
  },
  {
    title: "Guest Lectures of founed in Nehunu Admiesion (NCERC...",
    date: "17 Jul, 2023",
  },
  {
    title: "Guest Lectures of foundetd of forent Campus in Dramm...",
    date: "May 22, 2023",
  },
];

const videoThumbnails = [
  { src: AluminiVedios, label: "Alumni experience video 1" },
  { src: AluminiImage, label: "Alumni experience video 2" },
];

const featuredQuote =
  "My gnlunl we has been the e roaching challenge in NCERC osa it strategy, and innovation in chaking fortusty.";

/* ============================================================
   SHARED STYLES
============================================================ */

const CARD =
  "relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#E9DFC6] bg-white shadow-sm";

const CARD_ACCENT = "absolute inset-x-0 top-0 z-10 h-1 bg-[#C59B27]";

function CardTitle({ children }: { children: ReactNode }) {
  return (
    <>
      <h3 className="m-0 font-display text-2xl font-semibold leading-tight text-navy-950">
        {children}
      </h3>
      <div aria-hidden="true" className="mt-3 h-0.5 w-10 bg-[#C59B27]" />
    </>
  );
}

/* ============================================================
   ALUMNI SECTION
============================================================ */

export default function AluminiSection() {
  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* ====================================================
            HEADER (two balanced halves)
        ==================================================== */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-end lg:gap-12">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C59B27]">
                NCERC Alumni
              </span>
              <span aria-hidden="true" className="h-px w-16 bg-[#C59B27]/70" />
            </div>

            <h2 className="m-0 font-display text-4xl font-semibold leading-tight text-navy-950 sm:text-5xl">
              A Legacy of Excellence &amp; Innovation
            </h2>
          </div>

          <p className="m-0 text-base leading-relaxed text-slate-600">
            At NCERC, we take immense pride in our global community of alumni,
            who are driving positive change and innovation in diverse fields.
            Their achievements are a testament to our academic excellence.
          </p>
        </div>

        {/* ====================================================
            THREE EQUAL, EQUAL-HEIGHT CARDS
        ==================================================== */}
        <div className="mt-10 grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* ---------------- Spotlight ---------------- */}
          <article className={CARD}>
            <span aria-hidden="true" className={CARD_ACCENT} />

            {/* Image grows to fill whatever height the row needs */}
            <div className="relative min-h-[340px] flex-1 bg-slate-900">
              <Image
                src={AluminiSpotLight}
                alt="Rajesh Kumar, Alumnus of the Year"
                fill
                priority
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover object-top"
              />
            </div>

            <div className="p-6 sm:p-7">
              <CardTitle>Alumni Spotlight</CardTitle>

              <p className="m-0 mt-5 text-xs font-semibold uppercase tracking-[0.12em] text-navy-950">
                ALUMNUS OF THE YEAR
              </p>

              <p className="m-0 mt-2 text-sm leading-relaxed text-slate-700">
                - Rajesh Kumar, Tech Lead, Google. Awarded for pioneering work
                in AI.
              </p>

              <Link
                href="/alumni"
                className="mt-5 flex w-full items-center justify-center rounded-xl border border-[#C59B27] bg-[#FAF7F2] px-5 py-3 text-sm font-semibold uppercase tracking-wide text-[#9E7A1B] shadow-sm transition-all duration-300 hover:bg-[#C59B27] hover:text-white"
              >
                READ STORY
              </Link>
            </div>
          </article>

          {/* ---------------- Stats + Experiences ---------------- */}
          <article className={`${CARD} justify-between gap-8 p-6 sm:p-7`}>
            <span aria-hidden="true" className={CARD_ACCENT} />

            {/* Alumni at a glance */}
            <div>
              <CardTitle>Our Alumni at a Glance</CardTitle>

              <div className="mt-6 grid grid-cols-3 divide-x divide-[#E9DFC6] text-center">
                {glanceStats.map(({ icon: Icon, prefix, value, suffix }) => (
                  <div
                    key={value}
                    className="flex flex-col items-center px-2"
                  >
                    <Icon
                      size={28}
                      strokeWidth={1.3}
                      className="text-[#C59B27]"
                    />

                    {/* Reserved line keeps all three numbers on one baseline */}
                    <p className="m-0 mt-2 min-h-[1rem] text-xs font-semibold text-slate-700">
                      {prefix ?? "\u00A0"}
                    </p>

                    <p className="m-0 font-display text-2xl font-bold text-navy-950 sm:text-3xl">
                      {value}
                    </p>

                    <p className="m-0 whitespace-pre-line text-sm leading-snug text-slate-500">
                      {suffix}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div aria-hidden="true" className="h-px bg-[#E9DFC6]" />

            {/* Alumni experiences */}
            <div>
              <CardTitle>Alumni experiences</CardTitle>

              <div className="mt-5 grid grid-cols-2 gap-3">
                {videoThumbnails.map(({ src, label }) => (
                  <button
                    key={label}
                    type="button"
                    aria-label={`Play ${label}`}
                    className="group relative aspect-[16/10] overflow-hidden rounded-xl shadow-md"
                  >
                    <Image
                      src={src}
                      alt={label}
                      fill
                      sizes="(min-width: 1024px) 16vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <span
                      aria-hidden="true"
                      className="absolute inset-0 bg-navy-950/20 transition-colors duration-300 group-hover:bg-navy-950/40"
                    />

                    <span className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#C59B27] text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                      <Play
                        size={16}
                        fill="currentColor"
                        className="ml-0.5"
                      />
                    </span>

                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-1 bg-white/30"
                    >
                      <span className="block h-full w-2/3 bg-[#C59B27]" />
                    </span>
                  </button>
                ))}
              </div>

              <blockquote className="m-0 mt-5 text-center font-display text-sm italic leading-relaxed text-navy-950 sm:text-base">
                &ldquo;{featuredQuote}&rdquo;
              </blockquote>

              <div className="mt-3 text-center">
                <p className="m-0 text-xs font-semibold uppercase tracking-[0.12em] text-[#C59B27]">
                  Another Alumna
                </p>
                <p className="m-0 mt-1 text-xs text-slate-500">
                  Class 3 - Alumna
                </p>
              </div>
            </div>
          </article>

          {/* ---------------- Contributions ---------------- */}
          <article
            className={`${CARD} p-6 sm:p-7 md:col-span-2 lg:col-span-1`}
          >
            <span aria-hidden="true" className={CARD_ACCENT} />

            <CardTitle>Recent Contributions &amp; Success</CardTitle>

            {/* Each item stretches equally, so the list fills the card */}
            <ul className="m-0 mt-5 flex flex-1 list-none flex-col divide-y divide-[#E9DFC6] p-0">
              {contributions.map(({ title, date }) => (
                <li
                  key={title}
                  className="flex flex-1 flex-col justify-center py-5 first:pt-0 last:pb-0"
                >
                  <p className="m-0 cursor-pointer text-sm font-medium leading-relaxed text-navy-950 transition-colors hover:text-[#C59B27]">
                    {title}
                  </p>

                  <p className="m-0 mt-2 flex items-center gap-1.5 text-xs font-semibold text-slate-400">
                    <Calendar size={13} aria-hidden="true" />
                    {date}
                  </p>
                </li>
              ))}
            </ul>
          </article>
        </div>

        {/* ====================================================
            BOTTOM CTA
        ==================================================== */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/alumni"
            className="inline-flex items-center gap-3 rounded-xl bg-[#061A2E] px-8 py-4 text-sm font-semibold uppercase tracking-wide text-[#C59B27] shadow-xl transition-all duration-300 hover:bg-[#0A2540] hover:shadow-2xl"
          >
            <span>JOIN THE ALUMNI NETWORK</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}