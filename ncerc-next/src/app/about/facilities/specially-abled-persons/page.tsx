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

const FACILITIES_BASE = "/images/aboutus/facilities/specially-abled-persons";

const speciallyAbledGallery = [
  "specially-abled.jpeg",
  "specially-abled-3.jpg",
  "specially-abled-4.jpg",
  "specially-abled-1.jpeg",
];

const supportServices = [
  "Wheelchair-accessible infrastructure and ramps",
  "Special seating arrangements and accommodations",
  "Accessible hostels and recreational facilities",
  "Counselling and guidance services",
];

export default function SpeciallyAbledPersonsPage() {
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
      return prev === 0 ? speciallyAbledGallery.length - 1 : prev - 1;
    });
  }, []);

  const handleNextImage = useCallback(() => {
    setActiveIndex((prev) => {
      if (prev === null) return null;
      return prev === speciallyAbledGallery.length - 1 ? 0 : prev + 1;
    });
  }, []);

  // Keyboard navigation support (Arrow keys + Escape)
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

  const currentFile =
    activeIndex !== null ? speciallyAbledGallery[activeIndex] : null;

  return (
    <>
      <SiteHeader />

{/* Page Title Banner */}
<section className="relative isolate overflow-hidden bg-[#20235A] py-16 sm:py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-[#20235A] via-[#20235A]/95 to-[#20235A]/80" />
        <div className="relative mx-auto max-w-7xl px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#D2B87C]">
            About Us
          </p>
          <h1 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Facilities
          </h1>
          <div className="mt-6 h-1 w-16 bg-[#D2B87C]" />
        </div>
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
                  src={`${FACILITIES_BASE}/specially-abled.jpeg`}
                  alt="Facilities for Specially Abled Persons"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Hover overlay with eye icon */}
                <div className="absolute inset-0 flex items-center justify-center bg-navy-950/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-navy-950 shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <Eye size={24} className="text-gold-600" />
                  </span>
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-navy-950 sm:text-3xl">
                  Facilities for Specially Abled Persons
                </h2>

                <div className="mt-4 h-1 w-12 bg-gold-500" />

                <p className="mt-4 text-base leading-8 text-slate-600">
                  Our college is committed to providing an inclusive
                  environment for students with disabilities. We offer a
                  range of facilities to support differently abled
                  students, including:
                </p>

                <ul className="mt-4 space-y-2">
                  {supportServices.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-base leading-7 text-slate-600"
                    >
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-4 text-base leading-8 text-slate-600">
                  We strive to create a barrier-free campus that enables
                  students with disabilities to pursue their academic
                  goals with confidence and independence.
                </p>
              </div>
            </div>

            {/* Gallery */}
            <div className="mt-16">
              <h3 className="font-display text-2xl font-semibold text-navy-950">
                Facilities for Specially Abled Persons
              </h3>
              <span className="mt-2 block h-0.5 w-10 bg-gold-500" />

              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {speciallyAbledGallery.map((file, index) => (
                  <div
                    key={`${file}-${index}`}
                    onClick={() => handleOpenImage(index)}
                    className="group cursor-pointer overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:shadow-md"
                  >
                    <div className="relative h-56 w-full overflow-hidden">
                      <Image
                        src={`${FACILITIES_BASE}/${file}`}
                        alt="Facilities for Specially Abled Persons"
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />

                      {/* Hover overlay with eye icon */}
                      <div className="absolute inset-0 flex items-center justify-center bg-navy-950/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-navy-950 shadow-lg transition-transform duration-300 group-hover:scale-110">
                          <Eye size={24} className="text-gold-600" />
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Full-Screen Lightbox Modal */}
      {activeIndex !== null && currentFile && (
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

          {/* Full-Screen Image Container */}
          <div
            className="relative flex h-[85vh] w-[85vw] flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-full w-full">
              <Image
                src={`${FACILITIES_BASE}/${currentFile}`}
                alt="Facilities for Specially Abled Persons"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Counter indicator */}
            <div className="absolute -bottom-10 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-full bg-black/60 px-5 py-1.5 text-xs text-white backdrop-blur-md">
              <span className="font-semibold text-gold-400">
                Facilities for Specially Abled Persons
              </span>
              <span>•</span>
              <span>
                {activeIndex + 1} / {speciallyAbledGallery.length}
              </span>
            </div>
          </div>
        </div>
      )}

      <FooterSection />
    </>
  );
}