import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";

const FACILITIES_BASE = "/images/aboutus/facilities";

const gymGallery = [
  { file: "gym.jpg", label: "Gym" },
  { file: "gym2.jpg", label: "Gym" },
];

export default function GymPage() {
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
              About Us
            </p>
          </div>

          <h1 className="mt-4 font-serif text-3xl font-normal leading-tight tracking-[-0.025em] text-white sm:text-4xl lg:text-5xl">
            Campus <span className="italic text-[#D2B87C]">Facilities</span>
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
                  src={`${FACILITIES_BASE}/gym.jpg`}
                  alt="NCERC Gym"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-navy-950 sm:text-3xl">
                  Gym
                </h2>

                <p className="mt-2 text-sm font-semibold italic text-gold-600 sm:text-base">
                  &ldquo;Stay Fit, Stay Focused&rdquo;
                </p>

                <div className="mt-4 h-1 w-12 bg-gold-500" />

                <p className="mt-4 text-base leading-8 text-slate-600">
                  The NCERC gym is well-equipped with modern fitness
                  machines and training equipment. It provides students
                  with the opportunity to maintain their health and
                  wellness. Professional guidance is available to help
                  students follow structured workout routines. The gym
                  promotes an active lifestyle and helps students manage
                  stress. It is a great facility for those who prioritize
                  fitness alongside academics.
                </p>
              </div>
            </div>

            {/* Gallery */}
            <div className="mt-16">
              <h3 className="font-display text-2xl font-semibold text-navy-950">
                Gym
              </h3>
              <span className="mt-2 block h-0.5 w-10 bg-gold-500" />

              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {gymGallery.map(({ file, label }) => (
                  <div
                    key={file}
                    className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:shadow-md"
                  >
                    <div className="relative h-56 w-full overflow-hidden">
                      <Image
                        src={`${FACILITIES_BASE}/${file}`}
                        alt={label}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                    <p className="py-3 text-center text-sm font-semibold uppercase tracking-wide text-navy-950">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}