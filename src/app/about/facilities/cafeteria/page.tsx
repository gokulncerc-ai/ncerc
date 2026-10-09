import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";

const FACILITIES_BASE = "/images/aboutus/facilities/08-03-2025";

export default function CafeteriaPage() {
  return (
    <>
      <SiteHeader />

{/* Page Title Banner */}
<section className="relative isolate overflow-hidden bg-[#20235A] py-16 sm:py-20 lg:py-24">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#20235A] via-[#20235A]/95 to-[#15183f]/90" />

        {/* Subtle decorative circles */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-[#D2B87C]/15" />
        <div className="pointer-events-none absolute -right-8 -top-8 h-56 w-56 rounded-full border border-[#D2B87C]/20" />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#D2B87C]" />
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D2B87C] sm:text-sm">
              Campus Facilities
            </p>
          </div>

          <h1 className="mt-4 font-serif text-3xl font-normal leading-tight tracking-[-0.025em] text-white sm:text-4xl lg:text-5xl">
            Campus <span className="italic text-[#D2B87C]">Cafeteria</span>
          </h1>

          <div className="mt-6 h-px w-20 bg-[#D2B87C]" />
        </div>

        {/* Bottom accent bar */}
        <div className="absolute bottom-0 inset-x-0 h-1 bg-[#D2B87C]" />
      </section>

      {/* Page Content */}
      <main className="bg-white">
        <section className="py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6">
            <Link
              href="/about/facilities"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-950 transition hover:text-gold-600"
            >
              <ArrowLeft size={14} />
              Back to Facilities
            </Link>

            {/* Intro block */}
            <div className="mt-8 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
              <div className="relative h-64 w-full overflow-hidden rounded-2xl shadow-md sm:h-80 lg:h-96">
                <Image
                  src={encodeURI(`${FACILITIES_BASE}/1U0A9939 (1).jpg`)}
                  alt="NCERC Cafeteria"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-navy-950 sm:text-3xl">
                  Cafeteria
                </h2>

                <p className="mt-2 text-sm font-semibold italic text-gold-600 sm:text-base">
                  &ldquo;A Perfect Blend of Taste and Relaxation&rdquo;
                </p>

                <div className="mt-4 h-1 w-12 bg-gold-500" />

                <p className="mt-4 text-base leading-8 text-slate-600">
                  The cafeteria at NCERC is a lively space where students
                  can relax and enjoy a variety of snacks and beverages.
                  It serves fresh and hygienic food, catering to different
                  tastes and preferences. The ambiance is designed to
                  provide a comfortable and social environment. Quality
                  ingredients and hygiene standards are maintained to
                  ensure healthy meals. It is a perfect place for students
                  to take a break and recharge.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}