
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Trophy,
  ArrowDownToLine,
  ArrowUpRight,
  Award,
  FileText,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../DepartmentNav/DepartmentNav";

const achievementImages = [
  {
    src: "/images/dpt/electronics-and-communication-engineering/achievements/eceachi1.webp",
    alt: "Department achievement 1",
    title: "Achievement Highlight",
    category: "Department Achievement",
  },
  {
    src: "/images/dpt/electronics-and-communication-engineering/achievements/eceachi2.webp",
    alt: "Department achievement 2",
    title: "Student Achievement",
    category: "Student Recognition",
  },
  {
    src: "/images/dpt/electronics-and-communication-engineering/achievements/eceachi3.webp",
    alt: "Department achievement 3",
    title: "Academic Recognition",
    category: "Academic Excellence",
  },
  {
    src: "/images/dpt/electronics-and-communication-engineering/achievements/eceachi4.webp",
    alt: "Department achievement 4",
    title: "Technical Achievement",
    category: "Innovation & Technology",
  },
  {
    src: "/images/dpt/electronics-and-communication-engineering/achievements/eceachi5.webp",
    alt: "Department achievement 5",
    title: "Department Milestone",
    category: "Department Recognition",
  },
];

export default function AchievementsPage() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const selectedImage =
    selectedImageIndex !== null
      ? achievementImages[selectedImageIndex]
      : null;

  const openImage = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeImage = () => {
    setSelectedImageIndex(null);
  };

  const showPreviousImage = () => {
    setSelectedImageIndex((current) =>
      current === null
        ? null
        : (current - 1 + achievementImages.length) %
        achievementImages.length
    );
  };

  const showNextImage = () => {
    setSelectedImageIndex((current) =>
      current === null
        ? null
        : (current + 1) % achievementImages.length
    );
  };

  // Keyboard navigation and background scroll control
  useEffect(() => {
    if (selectedImageIndex === null) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeImage();
      }

      if (event.key === "ArrowLeft") {
        showPreviousImage();
      }

      if (event.key === "ArrowRight") {
        showNextImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImageIndex]);

  return (
    <>
      <SiteHeader />

      {/* Page Title Banner */}
      <section className="relative overflow-hidden bg-[#20235A] [&_p]:text-justify">
        {/* Decorative circles */}
        <div className="pointer-events-none absolute -right-32 -top-36 h-[500px] w-[500px] rounded-full border border-[#D2B87C]/10" />
        <div className="pointer-events-none absolute -right-12 -top-20 h-[340px] w-[340px] rounded-full border border-[#D2B87C]/15" />
        <div className="pointer-events-none absolute bottom-[-180px] left-[-140px] h-[400px] w-[400px] rounded-full border border-white/5" />

        <div className="relative mx-auto max-w-[1440px] px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28">
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <div className="mb-8 flex flex-wrap items-center gap-4">
              <span className="h-px w-12 bg-[#D2B87C]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D2B87C]">
                Electronics &amp; Communication Engineering
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-serif text-[46px] leading-[0.97] tracking-[-0.035em] text-white sm:text-[60px] lg:text-[70px] xl:text-[78px]">
              <span className="block text-[#D2B87C]">Achievements</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-5 max-w-xl text-[14px] font-semibold uppercase tracking-[0.14em] text-white/50">
              Excellence • Innovation • Recognition
            </p>

            {/* Description */}
            <p className="mt-8 max-w-2xl text-[16px] leading-8 text-white/70 sm:text-[17px] ">
              Celebrating the accomplishments, recognitions and milestones of
              the Department of Electronics and Communication Engineering,
              reflecting the dedication and excellence of its students and
              faculty.
            </p>

            {/* Department Highlight */}
            <div className="mt-12 flex items-center gap-4 border-t border-white/10 pt-7">
              <div className="flex h-12 w-12 items-center justify-center border border-[#D2B87C]/40">
                <Trophy className="h-5 w-5 text-[#D2B87C]" />
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                  Department Highlights
                </p>
                <p className="mt-1 text-sm text-white/55">
                  Achievements, awards and academic accomplishments
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-px bg-[#D2B87C]/20" />
      </section>

      {/* Page Content */}
      <main className="bg-white [&_p]:text-justify">
        {/* Inner Department Navigation */}
        <InnerHeader />

        <section className="bg-[#FAF7F2] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-[1440px]">
            {/* Section Heading */}
            <div className="mb-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-12">
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#8F7746]" />
                  <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8F7746]">
                    Excellence & Recognition
                  </p>
                </div>

                <h2 className="font-serif text-4xl leading-[1.05] tracking-tight text-[#20235A] sm:text-5xl lg:text-6xl">
                  Celebrating
                  <span className="block italic text-[#8F7746]">
                    Achievements.
                  </span>
                </h2>
              </div>

              <div className="max-w-2xl lg:justify-self-end">
                <p className="text-sm leading-7 text-[#1e1917]/70 sm:text-base sm:leading-8">
                  A showcase of the accomplishments, recognitions and
                  milestones that reflect the commitment of our students and
                  faculty towards academic excellence, innovation and
                  professional growth.
                </p>
              </div>
            </div>

            {/* Featured Achievement */}
            <div className="group relative mb-6 overflow-hidden bg-[#20235A]">
              <div className="relative aspect-[16/9] w-full sm:aspect-[16/7]">
                <button
                  type="button"
                  onClick={() => openImage(0)}
                  aria-label="View featured achievement image in full screen"
                  className="absolute inset-0 z-10 h-full w-full cursor-zoom-in"
                >
                  <Image
                    src={achievementImages[0].src}
                    alt={achievementImages[0].alt}
                    fill
                    priority
                    sizes="100vw"
                    className="object-contain transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </button>

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#20235A]/90 via-[#20235A]/15 to-transparent" />

                <div className="pointer-events-none absolute bottom-0 left-0 right-0 flex flex-col justify-between gap-5 p-6 sm:flex-row sm:items-end sm:p-10 lg:p-12">
                  <div>
                    <span className="mb-4 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                      <Award className="h-4 w-4" />
                      Featured Achievement
                    </span>

                    <h3 className="font-serif text-2xl leading-tight text-white sm:text-3xl lg:text-4xl">
                      {achievementImages[0].title}
                    </h3>

                    <p className="mt-2 text-sm text-white/65">
                      {achievementImages[0].category}
                    </p>
                  </div>

                  <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/40 text-white transition-colors group-hover:border-[#D2B87C] group-hover:bg-[#D2B87C] group-hover:text-[#20235A]">
                    <Maximize2 className="h-5 w-5" />
                  </span>
                </div>
              </div>
            </div>

            {/* Remaining Four Achievements */}
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {achievementImages.slice(1).map((item, index) => (
                <div key={item.src} className="group">
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#F2EFE8]">
                    <button
                      type="button"
                      onClick={() => openImage(index + 1)}
                      aria-label={`View ${item.title} image in full screen`}
                      className="absolute inset-0 z-10 h-full w-full cursor-zoom-in"
                    >
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                        className="object-contain transition-transform duration-700 group-hover:scale-105"
                      />
                    </button>

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#20235A]/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    <span className="pointer-events-none absolute left-4 top-4 z-20 flex h-9 w-9 items-center justify-center bg-[#20235A] font-serif text-sm text-[#D2B87C]">
                      0{index + 2}
                    </span>

                    <span className="pointer-events-none absolute bottom-4 right-4 z-20 flex h-9 w-9 items-center justify-center bg-white text-[#20235A] opacity-0 transition-all duration-300 group-hover:opacity-100">
                      <Maximize2 className="h-4 w-4" />
                    </span>
                  </div>

                  <div className="border-b border-[#20235A]/10 py-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                      {item.category}
                    </p>

                    <h3 className="mt-2 font-serif text-xl text-[#20235A]">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Achievement PDF */}
            <div className="mt-16 border border-[#20235A]/10 bg-[#F2EFE8] p-6 sm:p-9 lg:mt-20 lg:p-12">
              <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-start gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-[#20235A] text-[#D2B87C] sm:h-16 sm:w-16">
                    <FileText className="h-7 w-7" />
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                      Document & Records
                    </p>

                    <h3 className="mt-2 font-serif text-2xl text-[#20235A] sm:text-3xl">
                      Achievement Report
                    </h3>

                    <p className="mt-2 max-w-xl text-sm leading-6 text-[#1e1917]/65">
                      Explore the detailed record of achievements and
                      recognitions of the Department of Electronics and
                      Communication Engineering.
                    </p>
                  </div>
                </div>

                <Link
                  href="/documents/dept/ECE/achievements/eeeachipdf.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex shrink-0 items-center justify-center gap-3 bg-[#20235A] px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#8F7746]"
                >
                  View PDF
                  <ArrowDownToLine className="h-4 w-4 transition-transform group-hover:translate-y-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Full-Screen Image Lightbox */}
      {selectedImage && selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Achievement image viewer"
          onClick={closeImage}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={closeImage}
            aria-label="Close image viewer"
            className="absolute right-4 top-4 z-[110] flex h-11 w-11 items-center justify-center border border-white/20 bg-white/10 text-white transition-colors hover:bg-white hover:text-[#20235A] sm:right-8 sm:top-8"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Previous Image */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPreviousImage();
            }}
            aria-label="Previous image"
            className="absolute left-2 top-1/2 z-[110] flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/20 bg-white/10 text-white transition-colors hover:bg-white hover:text-[#20235A] sm:left-6 sm:h-14 sm:w-14"
          >
            <ChevronLeft className="h-6 w-6 sm:h-7 sm:w-7" />
          </button>

          {/* Full-Screen Image and Caption */}
          <div
            className="relative flex h-full w-full max-w-[1500px] flex-col items-center justify-center gap-4"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative min-h-0 w-full flex-1">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                priority
                sizes="100vw"
                className="object-contain"
              />
            </div>

            <div className="flex w-full shrink-0 flex-col items-center justify-center pb-2 text-center">
              <p className="font-serif text-lg text-white sm:text-xl">
                {selectedImage.title}
              </p>

              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#D2B87C]">
                {selectedImage.category}
              </p>

              <p className="mt-2 text-[11px] text-white/45">
                {selectedImageIndex + 1} / {achievementImages.length}
              </p>
            </div>
          </div>

          {/* Next Image */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNextImage();
            }}
            aria-label="Next image"
            className="absolute right-2 top-1/2 z-[110] flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/20 bg-white/10 text-white transition-colors hover:bg-white hover:text-[#20235A] sm:right-6 sm:h-14 sm:w-14"
          >
            <ChevronRight className="h-6 w-6 sm:h-7 sm:w-7" />
          </button>
        </div>
      )}

      <FooterSection />
    </>
  );
}
