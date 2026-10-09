"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Eye,
  X,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";

const FACILITIES_BASE = "/images/aboutus/facilities/08-03-2025";

const computerLabGallery = [
  { file: "6J1A9737.jpg", label: "Computer Lab" },
  { file: "6J1A9749.JPG", label: "Computer Lab" },
];

export default function ComputerLabPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleOpenImage = (index: number) => {
    setActiveIndex(index);
  };

  const handleCloseImage = () => {
    setActiveIndex(null);
  };

  const handlePrevImage = useCallback(() => {
    setActiveIndex((prev) => {
      if (prev === null) return null;
      return prev === 0 ? computerLabGallery.length - 1 : prev - 1;
    });
  }, []);

  const handleNextImage = useCallback(() => {
    setActiveIndex((prev) => {
      if (prev === null) return null;
      return prev === computerLabGallery.length - 1 ? 0 : prev + 1;
    });
  }, []);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeIndex === null) return;
      if (e.key === "ArrowLeft") handlePrevImage();
      if (e.key === "ArrowRight") handleNextImage();
      if (e.key === "Escape") handleCloseImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, handlePrevImage, handleNextImage]);

  const currentItem =
    activeIndex !== null ? computerLabGallery[activeIndex] : null;

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
              <div
                onClick={() => handleOpenImage(0)}
                className="group relative h-64 w-full cursor-pointer overflow-hidden rounded-2xl shadow-md sm:h-80 lg:h-96"
              >
                <Image
                  src={`${FACILITIES_BASE}/6J1A9737.jpg`}
                  alt="NCERC Computer Lab"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Eye icon overlay on hover */}
                <div className="absolute inset-0 flex items-center justify-center bg-navy-950/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-navy-950 shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <Eye size={24} className="text-gold-600" />
                  </span>
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-navy-950 sm:text-3xl">
                  Computer Lab
                </h2>

                <p className="mt-2 text-sm font-semibold italic text-gold-600 sm:text-base">
                  &ldquo;Forums For Cultivating Team Spirit. Empowering
                  Innovation Through Technology&rdquo;
                </p>

                <div className="mt-4 h-1 w-12 bg-gold-500" />

                <p className="mt-4 text-base leading-8 text-slate-600">
                  The NCERC Computer Lab is equipped with high-speed
                  computers and the latest software to support advanced
                  learning. Students can work on programming, simulations,
                  and research projects in a well-connected digital
                  environment. The lab provides uninterrupted internet
                  access to facilitate seamless learning and innovation.
                  Experienced faculty and lab assistants are available to
                  guide students. It is designed to enhance technical
                  skills and prepare students for industry challenges.
                </p>
              </div>
            </div>

            {/* Gallery */}
            <div className="mt-16">
              <h3 className="font-display text-2xl font-semibold text-navy-950">
                Gallery
              </h3>
              <span className="mt-2 block h-0.5 w-10 bg-gold-500" />

              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {computerLabGallery.map(({ file, label }, index) => (
                  <div
                    key={file}
                    onClick={() => handleOpenImage(index)}
                    className="group cursor-pointer overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:shadow-md"
                  >
                    <div className="relative h-56 w-full overflow-hidden">
                      <Image
                        src={`${FACILITIES_BASE}/${file}`}
                        alt={label}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />

                      {/* Eye icon overlay on hover */}
                      <div className="absolute inset-0 flex items-center justify-center bg-navy-950/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-navy-950 shadow-lg transition-transform duration-300 group-hover:scale-110">
                          <Eye size={24} className="text-gold-600" />
                        </span>
                      </div>
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

      {/* Full-Screen Lightbox Modal with Next/Previous Controls */}
      {activeIndex !== null && currentItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={handleCloseImage}
        >
          {/* Close button */}
          <button
            onClick={handleCloseImage}
            aria-label="Close full screen view"
            className="absolute top-6 right-6 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 hover:text-gold-400"
          >
            <X size={28} />
          </button>

          {/* Left Arrow Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrevImage();
            }}
            aria-label="Previous image"
            className="absolute left-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 hover:text-gold-400 sm:left-8"
          >
            <ChevronLeft size={32} />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNextImage();
            }}
            aria-label="Next image"
            className="absolute right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 hover:text-gold-400 sm:right-8"
          >
            <ChevronRight size={32} />
          </button>

          {/* Full-Screen Image & Caption Display */}
          <div
            className="relative flex h-[85vh] w-[85vw] flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-full w-full">
              <Image
                src={`${FACILITIES_BASE}/${currentItem.file}`}
                alt={currentItem.label}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Bottom Caption & Counter */}
            <div className="absolute -bottom-10 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-full bg-black/60 px-5 py-1.5 text-xs text-white backdrop-blur-md">
              <span className="font-semibold text-gold-400">
                {currentItem.label}
              </span>
              <span>•</span>
              <span>
                {activeIndex + 1} / {computerLabGallery.length}
              </span>
            </div>
          </div>
        </div>
      )}

      <FooterSection />
    </>
  );
}