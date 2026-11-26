"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
    ArrowUpRight,
    ChevronRight,
    Handshake,
    GraduationCap,
    HeartHandshake,
    Lightbulb,
    Users,
    X,
} from "lucide-react";
import SiteHeader from '@/components/header/SiteHeader';
import FooterSection from '@/components/home/FooterSection';
import React from 'react';

const objectives = [
    "To facilitate interaction between Alumni and Departments of Nehru College of Engineering and Research Centre.",
    "Promote research and academic activities.",
    "Organize social and cultural activities that bring together Alumni, Current scholars and the fraternity of Nehru College of Engineering and Research Centre.",
    "To encourage and appreciate academic and other outstanding achievements of the Departments/Faculty.",
    "To establish endowments and scholarships.",
    "To award incentives/prizes for outstanding contributions of scholars.",
    "To aid in improving and updating academics, using their experience and knowledge.",
    "Aid fresh graduates and postgraduates in finding job openings and entrepreneurship opportunities by coordinating with placement cell and other academic works.",
    "To conduct health awareness and camps.",
    "The Association shall be non-profit sharing in nature and no member shall have any proprietary right or interest in the assets and liabilities of the Association.",
];

const additionalObjectives = [
    "To facilitate interaction between old students of the entire Departments of Nehru College of Engineering and Research Centre.",
    "To promote and support research and academic activities of the college teaching departments of the campus.",
    "To promote social and cultural activities of former and current students of the Departments of College Campus.",
    "To encourage and appreciate academic and other outstanding achievements of the Departments/Faculty.",
    "To establish endowments and scholarships.",
    "To award incentives/prizes for outstanding contributions of scholars.",
    "To act as a discriminating agency for transmitting knowledge, help the students to find out job opportunities through placement cell and other academic works in India and aboard. To provide service to the people.",
    "The Association shall be non-profit sharing and no member shall have any proprietary right or interest in the assets and liabilities of the Association.",
];

const galleryImages = [
    {
        src: "https://ncerc.ac.in/images/alumni/1.jpg",
        alt: "NCERC Alumni Meet",
    },
    {
        src: "https://ncerc.ac.in/images/alumni/2.jpg",
        alt: "NCERC Alumni Meet",
    },
    {
        src: "https://ncerc.ac.in/images/alumni/3.jpg",
        alt: "NCERC Alumni Meet",
    },
    {
        src: "https://ncerc.ac.in/images/alumni/alumni2022.jpeg",
        alt: "NCERC Alumni Meet 2022",
    },
];

const highlights = [
    {
        icon: Users,
        number: "01",
        title: "Alumni Network",
        text: "Strengthening lifelong connections between alumni, students, faculty and the institution.",
    },
    {
        icon: Lightbulb,
        number: "02",
        title: "Knowledge Exchange",
        text: "Supporting research, academics, professional knowledge and experience sharing.",
    },
    {
        icon: GraduationCap,
        number: "03",
        title: "Student Growth",
        text: "Creating opportunities for mentorship, placements, internships and entrepreneurship.",
    },
    {
        icon: HeartHandshake,
        number: "04",
        title: "Community",
        text: "Building meaningful social, cultural and professional relationships across generations.",
    },
];


const Page = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null)
    return (
        <>
            <main className="min-h-screen bg-[#faf7f2] text-slate-900">
                <SiteHeader />

                {/* =========================================================
          HERO
      ========================================================= */}
                <section className="relative overflow-hidden bg-[#20235A]">
                    {/* Decorative elements */}
                    <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full border border-[#D2B87C]/15" />
                    <div className="pointer-events-none absolute -right-20 -top-20 h-[360px] w-[360px] rounded-full border border-[#D2B87C]/10" />
                    <div className="pointer-events-none absolute bottom-[-180px] left-[-180px] h-[420px] w-[420px] rounded-full border border-white/5" />

                    <div className="relative mx-auto max-w-8xl px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
                        <div className="max-w-4xl">
                            <div className="mb-7 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#D2B87C]" />

                                <span className="text-xs font-medium uppercase tracking-[0.28em] text-[#D2B87C]">
                                    Community • Connection • Legacy
                                </span>
                            </div>

                            <h1 className="max-w-4xl font-serif text-4xl leading-[1.08] text-white sm:text-5xl lg:text-6xl">
                                Alumni
                                <span className="block text-[#D2B87C]">
                                    Association
                                </span>
                            </h1>

                            <p className="mt-7 max-w-2xl text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
                                Connecting the past, present and future of Nehru College
                                of Engineering and Research Centre through fellowship,
                                knowledge, professional association and institutional
                                affiliation.
                            </p>

                            <div className="mt-9 flex flex-wrap items-center gap-4">
                                <Link
                                    href="#objectives"
                                    className="
                  inline-flex items-center gap-2
                  rounded-full
                  bg-[#D2B87C]
                  px-5 py-3
                  text-xs font-semibold
                  uppercase tracking-[0.16em]
                  text-[#20235A]
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:shadow-lg
                  hover:shadow-[#D2B87C]/10
                "
                                >
                                    Explore Association
                                    <ArrowUpRight size={15} strokeWidth={1.8} />
                                </Link>

                                <Link
                                    href="#gallery"
                                    className="
                  inline-flex items-center gap-2
                  rounded-full
                  border border-white/15
                  px-5 py-3
                  text-xs font-medium
                  uppercase tracking-[0.16em]
                  text-white/80
                  transition-all duration-300
                  hover:border-[#D2B87C]/50
                  hover:text-[#D2B87C]
                "
                                >
                                    Alumni Meet
                                    <ChevronRight size={15} strokeWidth={1.8} />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Bottom label */}
                    <div className="border-t border-white/10">
                        <div className="mx-auto flex max-w-8xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
                            <span className="text-[10px] uppercase tracking-[0.24em] text-white/40">
                                Nehru College of Engineering and Research Centre
                            </span>

                            <span className="text-[10px] uppercase tracking-[0.24em] text-[#D2B87C]/70">
                                Alumni Association
                            </span>
                        </div>
                    </div>
                </section>

                {/* =========================================================
          INTRO / MOTO
      ========================================================= */}
                <section className="bg-[#faf7f2]">
                    <div className="mx-auto max-w-8xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
                        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
                            {/* Left */}
                            <div>
                                <div className="mb-5 flex items-center gap-3">
                                    <span className="h-px w-9 bg-[#D2B87C]" />

                                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#20235A]/60">
                                        Our Moto
                                    </span>
                                </div>

                                <h2 className="max-w-md font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl">
                                    Building a stronger
                                    <span className="block text-[#20235A]/55">
                                        alumni community.
                                    </span>
                                </h2>

                                <div className="mt-8 flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D2B87C]/50 bg-white">
                                        <Handshake
                                            size={21}
                                            strokeWidth={1.5}
                                            className="text-[#20235A]"
                                        />
                                    </div>

                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#20235A]">
                                            Fellowship
                                        </p>
                                        <p className="mt-1 text-xs text-slate-500">
                                            Connecting generations
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Right */}
                            <div className="border-l border-[#20235A]/10 pl-0 lg:pl-12">
                                <p className="text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
                                    NCERC Alumni Association to coordinate and support the
                                    alumni activities to promote Institution’s academic,
                                    soft skill of the student, industry interface,
                                    placement/internship, research, and outreach programs
                                    to facilitate communication with alumni and to
                                    strengthen alumni bonds of fellowship, professional
                                    association, and institutional affiliation.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================
          HIGHLIGHTS
      ========================================================= */}
                <section className="border-y border-[#20235A]/10 bg-white">
                    <div className="mx-auto max-w-8xl px-6 py-14 sm:px-8 lg:px-12">
                        <div className="grid gap-px overflow-hidden rounded-2xl border border-[#20235A]/10 bg-[#20235A]/10 sm:grid-cols-2 lg:grid-cols-4">
                            {highlights.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={item.number}
                                        className="
                    group
                    bg-white
                    p-7
                    transition-colors duration-300
                    hover:bg-[#faf7f2]
                  "
                                    >
                                        <div className="flex items-start justify-between">
                                            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D2B87C]/40 bg-[#faf7f2]">
                                                <Icon
                                                    size={19}
                                                    strokeWidth={1.5}
                                                    className="text-[#20235A]"
                                                />
                                            </div>

                                            <span className="font-serif text-2xl text-[#20235A]/15">
                                                {item.number}
                                            </span>
                                        </div>

                                        <h3 className="mt-7 font-serif text-xl text-[#20235A]">
                                            {item.title}
                                        </h3>

                                        <p className="mt-3 text-sm leading-6 text-slate-500">
                                            {item.text}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* =========================================================
          OBJECTIVES
      ========================================================= */}
                <section
                    id="objectives"
                    className="bg-white"
                >
                    <div className="mx-auto max-w-8xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
                        <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
                            {/* Section heading */}
                            <div className="lg:sticky lg:top-28 lg:self-start">
                                <div className="mb-5 flex items-center gap-3">
                                    <span className="h-px w-9 bg-[#D2B87C]" />

                                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#20235A]/60">
                                        Association
                                    </span>
                                </div>

                                <h2 className="font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl">
                                    Objectives of the
                                    <span className="block text-[#20235A]/55">
                                        NCERC Alumni Association
                                    </span>
                                </h2>

                                <p className="mt-6 max-w-sm text-sm leading-7 text-slate-500">
                                    The following shall be the aims and objectives of the
                                    Association.
                                </p>

                                <div className="mt-8 hidden h-px w-24 bg-[#D2B87C] lg:block" />
                            </div>

                            {/* Objectives */}
                            <div>
                                <div className="divide-y divide-[#20235A]/10 border-y border-[#20235A]/10">
                                    {objectives.map((objective, index) => (
                                        <div
                                            key={index}
                                            className="
                      group
                      grid
                      gap-4
                      py-6
                      sm:grid-cols-[48px_1fr]
                      sm:gap-6
                    "
                                        >
                                            <span
                                                className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#D2B87C]/40
                        text-xs
                        font-semibold
                        text-[#20235A]
                        transition-all duration-300
                        group-hover:bg-[#20235A]
                        group-hover:text-white
                      "
                                            >
                                                {String(index + 1).padStart(2, "0")}
                                            </span>

                                            <p className="text-sm leading-7 text-slate-600 sm:text-[15px]">
                                                {objective}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================
          ADDITIONAL OBJECTIVES
      ========================================================= */}
                <section className="bg-[#faf7f2]">
                    <div className="mx-auto max-w-8xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
                        <div className="max-w-3xl">
                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-px w-9 bg-[#D2B87C]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#20235A]/60">
                                    Continuing Purpose
                                </span>
                            </div>

                            <h2 className="font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl">
                                Strengthening institutional
                                <span className="block text-[#20235A]/55">
                                    relationships
                                </span>
                            </h2>
                        </div>

                        <div className="mt-12 grid gap-5 md:grid-cols-2">
                            {additionalObjectives.map((objective, index) => (
                                <div
                                    key={index}
                                    className="
                  group
                  rounded-2xl
                  border border-[#20235A]/10
                  bg-white
                  p-6
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-[#D2B87C]/50
                  hover:shadow-xl
                  hover:shadow-[#20235A]/5
                "
                                >
                                    <div className="flex gap-5">
                                        <span className="font-serif text-2xl text-[#D2B87C]">
                                            {String(index + 11).padStart(2, "0")}
                                        </span>

                                        <p className="text-sm leading-7 text-slate-600">
                                            {objective}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* =========================================================
          GALLERY INTRO
      ========================================================= */}
                <section
                    id="gallery"
                    className="bg-[#20235A]"
                >
                    <div className="mx-auto max-w-8xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
                        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
                            <div>
                                <div className="mb-5 flex items-center gap-3">
                                    <span className="h-px w-9 bg-[#D2B87C]" />

                                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                                        Memories
                                    </span>
                                </div>

                                <h2 className="font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
                                    THIRIKE
                                </h2>

                                <p className="mt-4 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
                                    Alumni Meet Photos
                                </p>
                            </div>

                            <a
                                href="https://ncerc.ac.in/gallerydetails.php?id=63"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                inline-flex
                items-center
                gap-2
                self-start
                rounded-full
                border
                border-white/15
                px-5
                py-3
                text-xs
                font-semibold
                uppercase
                tracking-[0.16em]
                text-white/75
                transition-all duration-300
                hover:border-[#D2B87C]/50
                hover:text-[#D2B87C]
                lg:self-auto
              "
                            >
                                View Gallery
                                <ArrowUpRight size={15} strokeWidth={1.8} />
                            </a>
                        </div>
                    </div>
                </section>

                {/* =========================================================
          GALLERY
      ========================================================= */}
                <section className="bg-[#20235A] pb-20 sm:pb-24 lg:pb-28">
                    <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-12">
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            {galleryImages.map((image) => (
                                <button
                                    key={image.src}
                                    type="button"
                                    onClick={() => setSelectedImage(image.src)}
                                    className="
                  group
                  relative
                  aspect-[4/5]
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  text-left
                "
                                >
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        unoptimized
                                        className="
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    />

                                    <div
                                        className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#20235A]/80
                    via-transparent
                    to-transparent
                    opacity-80
                  "
                                    />

                                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
                                        <span className="text-xs font-medium uppercase tracking-[0.18em] text-white/75">
                                            Alumni Meet
                                        </span>

                                        <span
                                            className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/20
                      bg-white/10
                      text-white
                      backdrop-blur-sm
                      transition-all duration-300
                      group-hover:border-[#D2B87C]/60
                      group-hover:text-[#D2B87C]
                    "
                                        >
                                            <ArrowUpRight size={15} strokeWidth={1.7} />
                                        </span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* =========================================================
          CLOSING SECTION
      ========================================================= */}
                <section className="bg-[#faf7f2]">
                    <div className="mx-auto max-w-8xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
                        <div className="rounded-3xl bg-[#20235A] px-7 py-12 sm:px-10 sm:py-14 lg:px-16">
                            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
                                <div>
                                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                                        Stay Connected
                                    </span>

                                    <h2 className="mt-4 max-w-2xl font-serif text-3xl leading-tight text-white sm:text-4xl">
                                        A lifelong connection with NCERC.
                                    </h2>

                                    <p className="mt-5 max-w-2xl text-sm leading-7 text-white/55">
                                        The Alumni Association brings together former and
                                        current students, faculty and the wider institution
                                        to continue building meaningful academic,
                                        professional and social connections.
                                    </p>
                                </div>

                                <Link
                                    href="/contact"
                                    className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-[#D2B87C]
                  px-6
                  py-3.5
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-[#20235A]
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:shadow-lg
                  hover:shadow-[#D2B87C]/10
                "
                                >
                                    Get in Touch
                                    <ArrowUpRight size={15} strokeWidth={1.8} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================
          IMAGE LIGHTBOX
      ========================================================= */}
                {selectedImage && (
                    <div
                        className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-[#0b0d1f]/95
            p-5
            backdrop-blur-md
          "
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            type="button"
                            aria-label="Close image"
                            onClick={() => setSelectedImage(null)}
                            className="
              absolute
              right-5
              top-5
              z-10
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-white/15
              bg-white/10
              text-white
              transition-all duration-200
              hover:border-[#D2B87C]/50
              hover:text-[#D2B87C]
            "
                        >
                            <X size={21} strokeWidth={1.7} />
                        </button>

                        <div
                            className="
              relative
              max-h-[88vh]
              w-full
              max-w-5xl
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              bg-black
              shadow-2xl
            "
                            onClick={(event) => event.stopPropagation()}
                        >
                            <Image
                                src={selectedImage}
                                width={1000}
                                height={750}
                                sizes="(max-width: 1024px) 100vw, 400px"
                                alt="NCERC Alumni Meet"
                                className="
                mx-auto
                max-h-[88vh]
                w-auto
                max-w-full
                object-contain
              "
                            />
                        </div>
                    </div>
                )}

                <FooterSection />
            </main>

        </>
    )
}

export default Page;