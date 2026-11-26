
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../DepartmentNav/DepartmentNavigation";

const DEPARTMENT_PATH = "/department/computer-science-and-engineering";

const achievementImages = [
  "/images/dpt/computer-science-and-engineering/achievements/achievements/achievements_img1.webp",
  "/images/dpt/computer-science-and-engineering/achievements/achievements/achievements_img2.webp",
  "/images/dpt/computer-science-and-engineering/achievements/achievements/achievements_img3.webp",
  "/images/dpt/computer-science-and-engineering/achievements/achievements/achievements_img4.webp",
  "/images/dpt/computer-science-and-engineering/achievements/achievements/achievements_img5.webp",
  "/images/dpt/computer-science-and-engineering/achievements/achievements/achievements_img6.webp",
  "/images/dpt/computer-science-and-engineering/achievements/achievements/achievements_img7.webp",
  "/images/dpt/computer-science-and-engineering/achievements/achievements/achievements_img8.webp",
  "/images/dpt/computer-science-and-engineering/achievements/achievements/achievements_img9.webp",
  "/images/dpt/computer-science-and-engineering/achievements/achievements/achievements_img10.webp",
  "/images/dpt/computer-science-and-engineering/achievements/achievements/achievements_img11.webp",
];

export default function AchievementsPage() {
  const [selectedAchievement, setSelectedAchievement] = useState<number | null>(
    null
  );

  const showPreviousAchievement = () => {
    setSelectedAchievement((current) =>
      current === null
        ? null
        : (current - 1 + achievementImages.length) % achievementImages.length
    );
  };

  const showNextAchievement = () => {
    setSelectedAchievement((current) =>
      current === null
        ? null
        : (current + 1) % achievementImages.length
    );
  };

  // Keyboard navigation and background scroll control
  useEffect(() => {
    if (selectedAchievement === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedAchievement(null);
      }

      if (event.key === "ArrowLeft") {
        setSelectedAchievement((current) =>
          current === null
            ? null
            : (current - 1 + achievementImages.length) %
            achievementImages.length
        );
      }

      if (event.key === "ArrowRight") {
        setSelectedAchievement((current) =>
          current === null
            ? null
            : (current + 1) % achievementImages.length
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedAchievement]);

  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-[#FAF7F2] font-sans text-[#1E1917]">
        {/* HERO */}
        <section className="relative overflow-hidden bg-[#20235A] font-sans text-white">
          {/* Decorative circles */}
          <div className="pointer-events-none absolute -right-32 -top-36 h-[500px] w-[500px] rounded-full border border-[#D2B87C]/10" />
          <div className="pointer-events-none absolute -right-12 -top-20 h-[340px] w-[340px] rounded-full border border-[#D2B87C]/15" />
          <div className="pointer-events-none absolute bottom-[-180px] left-[-140px] h-[400px] w-[400px] rounded-full border border-white/5" />

          <div className="relative mx-auto max-w-[1440px] px-5 py-14 sm:px-8 sm:py-20 lg:px-14 lg:py-24 xl:px-20">
            <div className="relative z-10 max-w-4xl">
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-10 bg-[#D2B87C]" />

                <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D2B87C] sm:text-xs">
                  Computer Science &amp; Engineering
                </p>
              </div>

              <h1 className="font-serif text-[42px] font-normal leading-[1.06] tracking-[-0.035em] text-white sm:text-[56px] lg:text-[64px] xl:text-[72px]">
                Department
                <br />
                <span className="italic text-[#D2B87C]">
                  Achievements
                </span>
              </h1>

              <p className="mt-7 max-w-2xl font-sans text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
                Celebrating excellence, innovation, and accomplishments of our
                department, faculty members, and students.
              </p>

              <div className="mt-12 flex flex-wrap items-center gap-3 font-sans text-xs text-white/50">
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

        {/* ACHIEVEMENTS SECTION */}
        <section className="relative overflow-hidden bg-[#FAF7F2] px-5 py-16 font-sans sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-7xl">
            {/* Section Heading */}
            <div className="mb-10 flex flex-col justify-between gap-5 border-b border-[#D2B87C]/50 pb-6 sm:flex-row sm:items-end lg:mb-12">
              <div>
                <span className="mb-3 block font-sans text-xs font-semibold uppercase tracking-[0.25em] text-[#8F7746]">
                  Department Highlights
                </span>

                <h2 className="max-w-xl font-serif text-[38px] leading-[1.08] tracking-[-0.03em] text-[#20235A] sm:text-[48px] lg:text-[56px]">
                  Achievements
                </h2>
              </div>

              <div className="flex items-center gap-3 font-sans">
                <span className="h-px w-10 bg-[#D2B87C]" />

                <span className="text-sm font-medium tracking-wide text-[#66636A]">
                  11 Photographs
                </span>
              </div>
            </div>

            {/* Image Gallery */}
            <div className="grid auto-rows-[145px] grid-cols-2 gap-3 sm:auto-rows-[180px] sm:gap-4 lg:auto-rows-[190px] lg:grid-cols-4 lg:gap-5">
              {achievementImages.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setSelectedAchievement(index)}
                  aria-label={`View achievement photograph ${index + 1}`}
                  className={`group relative block h-full w-full overflow-hidden bg-[#EAE5D9] text-left ${index === 0 ? "col-span-2 row-span-2" : ""
                    }`}
                >
                  <Image
                    src={image}
                    alt={`Computer Science and Engineering department achievement ${index + 1}`}
                    fill
                    sizes={
                      index === 0
                        ? "(max-width: 768px) 100vw, 50vw"
                        : "(max-width: 768px) 50vw, 25vw"
                    }
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Subtle Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#10152F]/45 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Image Number */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-2 sm:bottom-5 sm:left-5">
                    <span className="flex h-8 w-8 items-center justify-center border border-white/50 bg-[#20235A]/50 font-sans text-xs font-medium text-white backdrop-blur-sm">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* View Icon */}
                  <div className="absolute right-3 top-3 flex h-9 w-9 translate-y-2 items-center justify-center border border-white/50 bg-[#20235A]/40 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:right-5 sm:top-5">
                    <Maximize2 size={16} />
                  </div>
                </button>
              ))}
            </div>

            {/* Bottom Accent */}
            <div className="mt-8 flex items-center justify-between border-t border-[#D2B87C]/40 pt-5 font-sans">
              <span className="text-xs uppercase tracking-[0.2em] text-[#8F7746]">
                Computer Science &amp; Engineering
              </span>

              <span className="text-xs font-medium text-[#66636A]">
                NCERC
              </span>
            </div>
          </div>

          {/* FULLSCREEN IMAGE VIEWER */}
          {selectedAchievement !== null && (
            <div
              className="fixed inset-0 z-[100] flex items-center justify-center bg-[#101322]/95 p-4 font-sans backdrop-blur-md sm:p-8"
              onClick={() => setSelectedAchievement(null)}
              role="dialog"
              aria-modal="true"
              aria-label="Achievement image viewer"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedAchievement(null)}
                aria-label="Close image viewer"
                className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-8 sm:top-8"
              >
                <X size={22} />
              </button>

              {/* Previous Button */}
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showPreviousAchievement();
                }}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-8 sm:h-12 sm:w-12"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Selected Image */}
              <div
                className="relative h-[70vh] w-full max-w-6xl"
                onClick={(event) => event.stopPropagation()}
              >
                <Image
                  src={achievementImages[selectedAchievement]}
                  alt={`Achievement photograph ${selectedAchievement + 1}`}
                  fill
                  sizes="100vw"
                  priority
                  className="object-contain"
                />
              </div>

              {/* Next Button */}
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showNextAchievement();
                }}
                aria-label="Next image"
                className="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-8 sm:h-12 sm:w-12"
              >
                <ChevronRight size={24} />
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 font-sans text-sm tracking-[0.2em] text-white/80">
                {String(selectedAchievement + 1).padStart(2, "0")}

                <span className="mx-2 text-white/40">/</span>

                {String(achievementImages.length).padStart(2, "0")}
              </div>
            </div>
          )}
        </section>
      </main>

      <FooterSection />
    </>
  );
}
