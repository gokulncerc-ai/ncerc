"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
    ArrowUpRight,
    BookOpen,
    CalendarDays,
    ChevronRight,
    ExternalLink,
    Mail,
    Microscope,
    Users,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";

const tracks = [
    {
        number: "01",
        title: "Frontiers in Engineering and Technology",
    },
    {
        number: "02",
        title: "Applications of Basic Sciences in Engineering and Technology",
    },
    {
        number: "03",
        title: "Business Innovations and Digital Transformation",
    },
    {
        number: "04",
        title: "Next-Generation Computing and Applications",
    },
    {
        number: "05",
        title: "Smart Systems and Automation",
    },
    {
        number: "06",
        title: "Health Care and Biotechnology Innovations",
    },
    {
        number: "07",
        title: "Future Innovators: School Edition",
        label: "Special Track for School Students",
    },
];

const Page = () => {
    return (
        <>
            <SiteHeader />

            <main className="bg-[#faf7f2] text-[#20235A]">

                {/* =====================================================
                    HERO
                ===================================================== */}
                <section className="relative overflow-hidden bg-[#20235A]">

                    <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-[#D2B87C]/10" />

                    <div className="pointer-events-none absolute -bottom-48 -left-40 h-[450px] w-[450px] rounded-full border border-white/5" />

                    <div className="mx-auto max-w-[1400px] px-6 pb-16 pt-10 sm:px-10 lg:px-14 lg:pb-24 lg:pt-14">

                        {/* Breadcrumb */}
                        <div className="mb-12 flex items-center gap-2 text-xs">

                            <Link
                                href="/"
                                className="text-white/40 transition-colors hover:text-[#D2B87C]"
                            >
                                Home
                            </Link>

                            <ChevronRight
                                size={13}
                                className="text-white/20"
                            />

                            <span className="text-[#D2B87C]">
                                Conference
                            </span>

                        </div>


                        <div className="grid gap-12 lg:grid-cols-[1fr_420px] lg:items-end">

                            {/* Hero content */}
                            <div>

                                <div className="mb-6 flex items-center gap-3">

                                    <span className="h-px w-10 bg-[#D2B87C]" />

                                    <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D2B87C]">
                                        NCERC Conference
                                    </span>

                                </div>


                                <h1 className="max-w-5xl font-serif text-4xl leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">

                                    National Conference on

                                    <span className="block text-[#D2B87C]">
                                        Emerging Trends in Science
                                    </span>

                                    <span className="block text-white/80">
                                        and Engineering
                                    </span>

                                </h1>


                                <p className="mt-6 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
                                    NCETSE-2025 brings together academicians,
                                    researchers, students and industry
                                    professionals to explore emerging ideas,
                                    technologies and transformative trends in
                                    science and engineering.
                                </p>


                                {/* Date */}
                                <div className="mt-8 flex flex-wrap items-center gap-4">

                                    <div className="flex items-center gap-3 border border-white/10 bg-white/5 px-4 py-3">

                                        <CalendarDays
                                            size={17}
                                            className="text-[#D2B87C]"
                                        />

                                        <div>
                                            <span className="block text-[9px] uppercase tracking-[0.2em] text-white/35">
                                                Conference Date
                                            </span>

                                            <span className="mt-1 block text-sm text-white">
                                                16 & 17 January 2025
                                            </span>
                                        </div>

                                    </div>


                                    <div className="flex items-center gap-3 border border-white/10 bg-white/5 px-4 py-3">

                                        <Microscope
                                            size={17}
                                            className="text-[#D2B87C]"
                                        />

                                        <div>
                                            <span className="block text-[9px] uppercase tracking-[0.2em] text-white/35">
                                                Mode
                                            </span>

                                            <span className="mt-1 block text-sm text-white">
                                                Hybrid Conference
                                            </span>
                                        </div>

                                    </div>

                                </div>

                            </div>


                            {/* Conference image */}
                            <div className="relative">

                                <div className="relative overflow-hidden border border-white/10 bg-white/5">

                                    <div className="aspect-[4/3] relative">

                                        <Image
                                            src="https://ncerc.ac.in/content/img/ncetse/NCETSE-Front.png"
                                            alt="NCETSE 2025"
                                            fill
                                            priority
                                            className="object-cover"
                                            sizes="(max-width: 1024px) 100vw, 420px"
                                        />

                                    </div>

                                </div>


                                <div className="absolute -bottom-5 -left-5 hidden border border-[#D2B87C]/30 bg-[#20235A] px-5 py-4 sm:block">

                                    <span className="block text-[9px] uppercase tracking-[0.2em] text-[#D2B87C]">
                                        NCETSE
                                    </span>

                                    <span className="mt-1 block font-serif text-xl text-white">
                                        2025
                                    </span>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    INTRODUCTION
                ===================================================== */}
                <section className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10 lg:px-14 lg:py-24">

                    <div className="grid gap-12 lg:grid-cols-[280px_1fr]">

                        {/* Section label */}
                        <div>

                            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                01 / About NCETSE
                            </span>

                            <div className="mt-5 h-px w-12 bg-[#20235A]/15" />

                        </div>


                        {/* Content */}
                        <div className="max-w-4xl">

                            <h2 className="font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
                                An intellectual forum for emerging ideas,
                                research and innovation.
                            </h2>


                            <div className="mt-8 space-y-5 text-sm leading-8 text-[#20235A]/60 sm:text-base">

                                <p>
                                    It is with great pleasure that we present
                                    the proceedings of the{" "}
                                    <strong className="font-semibold text-[#20235A]">
                                        National Conference on Emerging Trends
                                        in Science and Engineering (NCETSE-2025)
                                    </strong>
                                    , hosted by{" "}
                                    <strong className="font-semibold text-[#20235A]">
                                        Nehru College of Engineering and
                                        Research Centre (NCERC)
                                    </strong>{" "}
                                    in association with the{" "}
                                    <strong className="font-semibold text-[#20235A]">
                                        Institute of Electronics &
                                        Telecommunication Engineers (IETE)
                                    </strong>{" "}
                                    Palakkad Centre & Kozhikode Sub-Centre.
                                </p>


                                <p>
                                    This prestigious conference, conducted in
                                    hybrid mode on the 16th and 17th of
                                    January 2025, forms an integral part of the
                                    Nehru Science Innovation and Technology
                                    Expo (NSITE 2025).
                                </p>


                                <p>
                                    NCETSE-2025 is dedicated to fostering an
                                    intellectual forum where academicians,
                                    researchers, students, and industry
                                    professionals converge to deliberate on
                                    the latest advancements and transformative
                                    trends in engineering and basic sciences.
                                </p>


                                <p>
                                    The conference aims to bridge the gap
                                    between theoretical research and practical
                                    applications, encouraging multidisciplinary
                                    collaborations to address contemporary
                                    challenges and future possibilities.
                                </p>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    CONFERENCE HIGHLIGHTS
                ===================================================== */}
                <section className="border-y border-[#20235A]/10 bg-white">

                    <div className="mx-auto max-w-[1400px] px-6 py-14 sm:px-10 lg:px-14 lg:py-20">

                        <div className="grid gap-0 md:grid-cols-3">

                            <div className="border-b border-[#20235A]/10 p-6 md:border-b-0 md:border-r md:p-8">

                                <CalendarDays
                                    size={20}
                                    strokeWidth={1.5}
                                    className="text-[#D2B87C]"
                                />

                                <span className="mt-6 block text-[9px] font-semibold uppercase tracking-[0.2em] text-[#20235A]/40">
                                    Dates
                                </span>

                                <h3 className="mt-2 font-serif text-xl">
                                    16 & 17 January 2025
                                </h3>

                            </div>


                            <div className="border-b border-[#20235A]/10 p-6 md:border-b-0 md:border-r md:p-8">

                                <Users
                                    size={20}
                                    strokeWidth={1.5}
                                    className="text-[#D2B87C]"
                                />

                                <span className="mt-6 block text-[9px] font-semibold uppercase tracking-[0.2em] text-[#20235A]/40">
                                    Participants
                                </span>

                                <h3 className="mt-2 font-serif text-xl">
                                    Researchers & Academicians
                                </h3>

                            </div>


                            <div className="p-6 md:p-8">

                                <BookOpen
                                    size={20}
                                    strokeWidth={1.5}
                                    className="text-[#D2B87C]"
                                />

                                <span className="mt-6 block text-[9px] font-semibold uppercase tracking-[0.2em] text-[#20235A]/40">
                                    Proceedings
                                </span>

                                <h3 className="mt-2 font-serif text-xl">
                                    NCETSE-2025
                                </h3>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    TRACKS
                ===================================================== */}
                <section className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10 lg:px-14 lg:py-24">

                    <div className="grid gap-12 lg:grid-cols-[280px_1fr]">

                        <div>

                            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                02 / Conference Tracks
                            </span>

                            <div className="mt-5 h-px w-12 bg-[#20235A]/15" />

                            <p className="mt-6 max-w-xs text-sm leading-7 text-[#20235A]/45">
                                The conference covers a diverse range of
                                topics across engineering, basic sciences,
                                technology, business and innovation.
                            </p>

                        </div>


                        <div className="border-t border-[#20235A]/10">

                            {tracks.map((track) => (

                                <div
                                    key={track.number}
                                    className="group grid gap-4 border-b border-[#20235A]/10 py-6 sm:grid-cols-[70px_1fr_auto] sm:items-center"
                                >

                                    <span className="font-serif text-lg text-[#D2B87C]">
                                        {track.number}
                                    </span>


                                    <div>

                                        {track.label && (
                                            <span className="mb-1 block text-[9px] font-semibold uppercase tracking-[0.18em] text-[#D2B87C]">
                                                {track.label}
                                            </span>
                                        )}

                                        <h3 className="font-serif text-xl text-[#20235A] sm:text-2xl">
                                            {track.title}
                                        </h3>

                                    </div>


                                    <ArrowUpRight
                                        size={17}
                                        className="text-[#20235A]/25 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#D2B87C]"
                                    />

                                </div>

                            ))}

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    PROCEEDINGS
                ===================================================== */}
                <section className="bg-[#20235A]">

                    <div className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10 lg:px-14 lg:py-24">

                        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

                            <div>

                                <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                    03 / Proceedings
                                </span>

                                <h2 className="mt-5 max-w-xl font-serif text-3xl leading-tight text-white sm:text-4xl">
                                    A reference for research,
                                    innovation and knowledge exchange.
                                </h2>

                            </div>


                            <div className="text-sm leading-8 text-white/55 sm:text-base">

                                <p>
                                    The proceedings of NCETSE-2025 contain the
                                    abstracts of all presented papers,
                                    providing valuable insights into emerging
                                    research areas and innovative solutions.
                                </p>

                                <p className="mt-5">
                                    Full access to the complete papers is
                                    available through the corresponding
                                    authors listed in this volume.
                                </p>


                                <div className="mt-8 border-t border-white/10 pt-7">

                                    <span className="block text-[9px] uppercase tracking-[0.2em] text-white/35">
                                        ISBN
                                    </span>

                                    <span className="mt-2 block font-serif text-xl text-white">
                                        978-81-966538-1-1
                                    </span>


                                    <a
                                        href="https://shorturl.at/t9PQb"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#D2B87C]"
                                    >
                                        View Proceedings

                                        <ExternalLink
                                            size={14}
                                            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                        />

                                    </a>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    ACKNOWLEDGEMENT
                ===================================================== */}
                <section className="bg-white">

                    <div className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10 lg:px-14 lg:py-24">

                        <div className="grid gap-12 lg:grid-cols-[280px_1fr]">

                            <div>

                                <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                    04 / Acknowledgement
                                </span>

                                <div className="mt-5 h-px w-12 bg-[#20235A]/15" />

                            </div>


                            <div className="max-w-4xl text-sm leading-8 text-[#20235A]/60 sm:text-base">

                                <p>
                                    We extend our sincere gratitude to the
                                    organizing committee, session chairs,
                                    reviewers, and contributors whose
                                    collective efforts have made this
                                    conference a success.
                                </p>

                                <p className="mt-5">
                                    We also appreciate the unwavering support
                                    from Nehru College of Engineering and
                                    Research Centre and IETE Palakkad &
                                    Kozhikode Sub-Centres for their commitment
                                    to fostering scientific inquiry and
                                    technological innovation.
                                </p>

                                <p className="mt-5">
                                    We express our heartfelt thanks to{" "}
                                    <strong className="text-[#20235A]">
                                        Dr. P. Krishnadas
                                    </strong>{" "}
                                    (Honorary Trade Commissioner of Mauritius –
                                    India & Chairman and Managing Trustee,
                                    Nehru Group of Institutions) and{" "}
                                    <strong className="text-[#20235A]">
                                        Dr. P. Krishnakumar
                                    </strong>{" "}
                                    (CEO and Secretary, Nehru Group of
                                    Institutions) for their valuable support.
                                </p>

                                <p className="mt-5">
                                    We also extend our gratitude to{" "}
                                    <strong className="text-[#20235A]">
                                        Dr. K. G. Viswanadhan
                                    </strong>{" "}
                                    (Principal, NCERC) and Advisory Committee
                                    members for their guidance and
                                    contributions.
                                </p>

                                <p className="mt-5">
                                    We hope that these proceedings will serve
                                    as a valuable reference for researchers,
                                    academicians, and professionals and inspire
                                    further exploration in science and
                                    engineering.
                                </p>

                                <p className="mt-5">
                                    We look forward to continued collaboration
                                    and knowledge exchange in future editions
                                    of NCETSE.
                                </p>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    CONFERENCE TEAM
                ===================================================== */}
                <section className="border-t border-[#20235A]/10 bg-[#faf7f2]">

                    <div className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10 lg:px-14 lg:py-24">

                        <div className="mb-10">

                            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                05 / Conference Team
                            </span>

                            <h2 className="mt-4 font-serif text-3xl sm:text-4xl">
                                Conference coordinators
                            </h2>

                        </div>


                        <div className="grid border-t border-[#20235A]/10 md:grid-cols-3">

                            {/* Convenor */}
                            <div className="border-b border-[#20235A]/10 py-7 md:border-b-0 md:border-r md:pr-8">

                                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                    Convenor
                                </span>

                                <h3 className="mt-4 font-serif text-xl">
                                    Dr. Mredhula L
                                </h3>

                                <p className="mt-2 text-xs leading-6 text-[#20235A]/45">
                                    Convenor - NCETSE
                                </p>

                            </div>


                            {/* Media Chair */}
                            <div className="border-b border-[#20235A]/10 py-7 md:border-b-0 md:border-r md:px-8">

                                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                    Media Chair
                                </span>

                                <h3 className="mt-4 font-serif text-xl">
                                    Dr. Sudheer S Marar
                                </h3>

                                <p className="mt-2 text-xs leading-6 text-[#20235A]/45">
                                    Media Chair - NCESTE
                                </p>

                            </div>


                            {/* Coordinator */}
                            <div className="py-7 md:pl-8">

                                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                    Coordinator
                                </span>

                                <h3 className="mt-4 font-serif text-xl">
                                    Mr. Vysak Valsan
                                </h3>

                                <p className="mt-2 text-xs leading-6 text-[#20235A]/45">
                                    Coordinator - NCESTE
                                </p>

                            </div>

                        </div>


                        {/* Email */}
                        <div className="mt-10 flex flex-col gap-5 border-t border-[#20235A]/10 pt-7 sm:flex-row sm:items-center sm:justify-between">

                            <div className="flex items-center gap-3">

                                <Mail
                                    size={17}
                                    className="text-[#D2B87C]"
                                />

                                <span className="text-sm text-[#20235A]/60">
                                    ncetse@nehrucolleges.com
                                </span>

                            </div>


                            <a
                                href="mailto:ncetse@nehrucolleges.com"
                                className="group inline-flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#20235A]"
                            >
                                Contact Conference Team

                                <ArrowUpRight
                                    size={15}
                                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                />

                            </a>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    FINAL CTA
                ===================================================== */}
                {/* <section className="bg-[#20235A]">

                    <div className="mx-auto max-w-[1400px] px-6 py-14 sm:px-10 lg:px-14 lg:py-20">

                        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">

                            <div>

                                <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                    NCETSE-2025
                                </span>

                                <h2 className="mt-3 max-w-2xl font-serif text-3xl text-white sm:text-4xl">
                                    Advancing knowledge through science,
                                    engineering and collaboration.
                                </h2>

                            </div>


                            <a
                                href="https://shorturl.at/t9PQb"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex w-fit shrink-0 items-center gap-3 border border-white/15 px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:border-[#D2B87C] hover:bg-[#D2B87C] hover:text-[#20235A]"
                            >
                                Proceedings

                                <ArrowUpRight
                                    size={15}
                                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                />

                            </a>

                        </div>

                    </div>

                </section> */}

            </main>

            <FooterSection />
        </>
    );
};

export default Page;
