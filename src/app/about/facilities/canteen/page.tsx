import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";

const FACILITIES_BASE = "/images/aboutus/facilities/08-03-2025";

const canteenGallery = [
  { file: "CANTEEN 1.jpg", label: "Canteen" },
  { file: "CANTEEN 3.jpg", label: "Canteen" },
  { file: "CANTEEN 2.jpg", label: "Canteen" },
];

export default function CanteenPage() {
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
                  src={encodeURI(`${FACILITIES_BASE}/CANTEEN 1.jpg`)}
                  alt="NCERC Canteen"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-navy-950 sm:text-3xl">
                  Canteen
                </h2>

                <p className="mt-2 text-sm font-semibold italic text-gold-600 sm:text-base">
                  &ldquo;Nutritious Bites for Energetic Minds&rdquo;
                </p>

                <div className="mt-4 h-1 w-12 bg-gold-500" />

                <p className="mt-4 text-base leading-8 text-slate-600">
                  The NCERC canteen provides nutritious and affordable
                  meals for students and staff. It offers a diverse menu,
                  including both vegetarian and non-vegetarian options.
                  Cleanliness and hygiene are maintained to ensure a
                  healthy dining experience. The canteen serves as a
                  convenient option for students to grab a quick meal
                  between classes. It promotes a balanced diet to keep
                  students energized throughout the day.
                </p>
              </div>
            </div>

            {/* Gallery */}
            <div className="mt-16">
              <h3 className="font-display text-2xl font-semibold text-navy-950">
                Canteen
              </h3>
              <span className="mt-2 block h-0.5 w-10 bg-gold-500" />

              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {canteenGallery.map(({ file, label }) => (
                  <div
                    key={file}
                    className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:shadow-md"
                  >
                    <div className="relative h-56 w-full overflow-hidden">
                      <Image
                        src={encodeURI(`${FACILITIES_BASE}/${file}`)}
                        alt={label}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
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