"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import DepartmentNavigation from "../departmentnavigation/DepartmentNavigation";

import {
    ArrowDownRight,
    ArrowRight,
    ArrowUpRight,
    Atom,
    BookOpen,
    FlaskConical,
    Languages,
    Lightbulb,
    Microscope,
    Sparkles,
    X,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

const facilities = [
    {
        number: "01",
        title: "Physics Laboratory",
        category: "EXPERIMENTAL LEARNING",
        description:
            "A practical learning environment where students explore physics concepts through experiments, observation, and application-based learning.",
        icon: Atom,
        accent: "from-[#20235A] to-[#343A83]",
        tag: "Science & Discovery",

        // Main image displayed on the facility card
        image:
            "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=85",

        // Images displayed inside the Physics Laboratory modal
        gallery: [
            "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1600&q=90",
            "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=1600&q=90",
            "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&w=1600&q=90",
            "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=90",
        ],
    },

    {
        number: "02",
        title: "Chemistry Laboratory",
        category: "PRACTICAL EDUCATION",
        description:
            "A space for students to connect theoretical chemistry concepts with laboratory-based learning and scientific investigation.",
        icon: FlaskConical,
        accent: "from-[#8F7746] to-[#C0A46A]",
        tag: "Analysis & Exploration",

        // Main image displayed on the facility card
        image:
            "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?auto=format&fit=crop&w=1200&q=85",

        // Images displayed inside the Chemistry Laboratory modal
        gallery: [
            "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?auto=format&fit=crop&w=1600&q=90",
            "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?auto=format&fit=crop&w=1600&q=90",
            "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1600&q=90",
            "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=1600&q=90",
        ],
    },

    {
        number: "03",
        title: "Language Laboratory",
        category: "COMMUNICATION SKILLS",
        description:
            "A dedicated learning environment that helps students strengthen grammar, pronunciation, vocabulary, and professional communication.",
        icon: Languages,
        accent: "from-[#30365F] to-[#646A9A]",
        tag: "Language & Communication",

        // Main image displayed on the facility card
        image:
            "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=85",

        // Images displayed inside the Language Laboratory modal
        gallery: [
            "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1600&q=90",
            "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=90",
            "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=90",
            "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=90",
        ],
    },
];

const learningHighlights = [
    {
        icon: BookOpen,
        title: "Conceptual Learning",
        description:
            "Build a strong foundation in mathematics and fundamental sciences through structured academic learning.",
    },
    {
        icon: Lightbulb,
        title: "Application-Based Learning",
        description:
            "Connect classroom concepts with practical applications, scientific thinking, and interdisciplinary learning.",
    },
    {
        icon: Microscope,
        title: "Academic Reinforcement",
        description:
            "Support student progress through remedial and reinforcement sessions tailored to learning needs.",
    },
];

export default function FacilitiesPage() {
    const [selectedFacility, setSelectedFacility] = useState<
        (typeof facilities)[number] | null
    >(null);

    const [activeImage, setActiveImage] = useState(0);

    const openGallery = (facility: (typeof facilities)[number]) => {
        setSelectedFacility(facility);
        setActiveImage(0);
        document.body.style.overflow = "hidden";
    };

    const closeGallery = () => {
        setSelectedFacility(null);
        setActiveImage(0);
        document.body.style.overflow = "";
    };

    const showPreviousImage = () => {
        if (!selectedFacility) return;

        setActiveImage((current) =>
            current === 0
                ? selectedFacility.gallery.length - 1
                : current - 1
        );
    };

    const showNextImage = () => {
        if (!selectedFacility) return;

        setActiveImage((current) =>
            current === selectedFacility.gallery.length - 1
                ? 0
                : current + 1
        );
    };

    return (
        <>
            <SiteHeader />

            <main className="overflow-hidden bg-[#FAF9F6] text-[#1E1917]">
                {/* HERO */}
                <section className="relative isolate overflow-hidden bg-[#20235A]">
                    <div className="pointer-events-none absolute inset-0 -z-10">
                        <div className="absolute -right-24 -top-32 h-[440px] w-[440px] rounded-full border border-white/10" />
                        <div className="absolute -right-8 -top-16 h-[310px] w-[310px] rounded-full border border-white/10" />
                        <div className="absolute bottom-0 left-[48%] h-64 w-64 rounded-full bg-[#D2B87C]/10 blur-3xl" />
                        <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_55%,rgba(210,184,124,0.07)_55%,transparent_75%)]" />
                    </div>

                    <div className="mx-auto grid min-h-[440px] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.2fr_0.8fr] md:py-24 lg:px-12">
                        <div className="max-w-2xl">
                            <div className="mb-7 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#D2B87C]" />
                                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D2B87C]">
                                    Applied Science & Humanities
                                </span>
                            </div>

                            <h1 className="font-serif text-4xl font-medium leading-[1.12] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[68px]">
                                Spaces That
                                <br />
                                <span className="italic text-[#D2B87C]">
                                    Inspire Discovery.
                                </span>
                            </h1>

                            <p className="mt-7 max-w-xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
                                Explore the learning facilities that support
                                scientific exploration, practical education,
                                and the development of essential communication
                                skills at NCERC.
                            </p>

                            <div className="mt-9 flex flex-wrap items-center gap-5">
                                <Link
                                    href="#our-facilities"
                                    className="inline-flex items-center gap-3 rounded-sm bg-[#D2B87C] px-6 py-3.5 text-sm font-semibold text-[#20235A] transition-colors duration-300 hover:bg-white"
                                >
                                    Explore Facilities
                                    <ArrowDownRight size={17} />
                                </Link>

                                <span className="text-xs tracking-wide text-white/55">
                                    Learn · Experiment · Grow
                                </span>
                            </div>
                        </div>

                        <div className="relative mx-auto w-full max-w-[420px]">
                            <div className="absolute -inset-4 rounded-sm border border-[#D2B87C]/25" />

                            <div className="relative overflow-hidden rounded-sm border border-white/10 bg-white/[0.06] p-6 sm:p-8">
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                                        Our Learning Environment
                                    </span>
                                    <Sparkles
                                        size={19}
                                        className="text-[#D2B87C]"
                                        strokeWidth={1.4}
                                    />
                                </div>

                                <div className="mt-8 grid grid-cols-2 gap-3">
                                    <div className="flex min-h-[142px] flex-col justify-between border border-white/10 bg-white/[0.04] p-4">
                                        <Atom
                                            size={29}
                                            strokeWidth={1.3}
                                            className="text-[#D2B87C]"
                                        />
                                        <div>
                                            <p className="font-serif text-lg text-white">
                                                Explore
                                            </p>
                                            <p className="mt-1 text-xs leading-5 text-white/55">
                                                Scientific concepts
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex min-h-[142px] flex-col justify-between border border-white/10 bg-white/[0.04] p-4">
                                        <FlaskConical
                                            size={29}
                                            strokeWidth={1.3}
                                            className="text-[#D2B87C]"
                                        />
                                        <div>
                                            <p className="font-serif text-lg text-white">
                                                Experiment
                                            </p>
                                            <p className="mt-1 text-xs leading-5 text-white/55">
                                                Practical knowledge
                                            </p>
                                        </div>
                                    </div>

                                    <div className="col-span-2 flex items-center gap-4 border border-[#D2B87C]/25 bg-[#D2B87C]/[0.08] p-5">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#D2B87C]/30">
                                            <Languages
                                                size={23}
                                                className="text-[#D2B87C]"
                                                strokeWidth={1.4}
                                            />
                                        </div>

                                        <div>
                                            <p className="font-serif text-lg text-white">
                                                Communicate
                                            </p>
                                            <p className="mt-1 text-xs leading-5 text-white/60">
                                                Build confidence and language
                                                proficiency
                                            </p>
                                        </div>

                                        <ArrowUpRight
                                            size={18}
                                            className="ml-auto shrink-0 text-[#D2B87C]"
                                        />
                                    </div>
                                </div>

                                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/45">
                                        NCERC · Academic Facilities
                                    </span>
                                    <span className="h-1.5 w-1.5 rounded-full bg-[#D2B87C]" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#D2B87C]/70 to-transparent" />
                </section>

                {/* --------navigations-------- */}
                <DepartmentNavigation />

                {/* INTRODUCTION */}
                <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
                    <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.75fr_1.25fr] md:gap-16">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                Learning Beyond the Classroom
                            </p>

                            <h2 className="mt-5 max-w-md font-serif text-3xl font-medium leading-tight text-[#20235A] sm:text-4xl lg:text-[46px]">
                                Where knowledge meets practice.
                            </h2>
                        </div>

                        <div className="flex flex-col justify-center">
                            <p className="text-base leading-8 text-[#625D57]">
                                The Department of Applied Science &
                                Humanities provides the academic foundation
                                that supports engineering education. Its
                                laboratories and learning initiatives help
                                students connect fundamental concepts with
                                practical understanding.
                            </p>

                            <div className="mt-6 h-px w-full bg-[#DDD7CB]" />

                            <div className="mt-5 flex items-center gap-3 text-sm font-medium text-[#20235A]">
                                <span className="h-2 w-2 rounded-full bg-[#D2B87C]" />
                                Science, communication and academic growth
                            </div>
                        </div>
                    </div>
                </section>

                {/* FACILITIES */}
                <section
                    id="our-facilities"
                    className="scroll-mt-24 border-y border-[#E7E1D6] bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
                >
                    <div className="mx-auto max-w-7xl">
                        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                    Our Facilities
                                </p>

                                <h2 className="mt-4 font-serif text-3xl font-medium text-[#20235A] sm:text-4xl lg:text-5xl">
                                    Designed for discovery.
                                </h2>
                            </div>

                            <p className="max-w-md text-sm leading-7 text-[#706A63]">
                                Dedicated environments for scientific
                                experimentation, language development, and
                                foundational learning.
                            </p>
                        </div>

                        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {facilities.map((facility) => {
                                const Icon = facility.icon;

                                return (
                                    <article
                                        key={facility.number}
                                        className="group flex h-full flex-col border border-[#E8E3D9] bg-[#FAF9F6] transition-all duration-300 hover:-translate-y-1 hover:border-[#D2B87C] hover:shadow-[0_18px_45px_rgba(32,35,90,0.08)]"
                                    >
                                        {/* IMAGE AREA */}
                                        <button
                                            type="button"
                                            onClick={() =>
                                                openGallery(facility)
                                            }
                                            className="relative block h-56 w-full cursor-pointer overflow-hidden text-left"
                                            aria-label={`View ${facility.title} gallery`}
                                        >
                                            <Image
                                                src={facility.image}
                                                alt={facility.title}
                                                fill
                                                sizes="(min-width: 1024px) 330px, 100vw"
                                                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            />

                                            {/* Image overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#20235A]/85 via-[#20235A]/25 to-transparent" />

                                            {/* Decorative overlay */}
                                            <div className="absolute -right-8 -top-12 h-48 w-48 rounded-full border border-white/15" />
                                            <div className="absolute -right-1 -top-5 h-32 w-32 rounded-full border border-white/15" />
                                            <div className="absolute bottom-0 left-0 h-24 w-24 rounded-full border border-white/10" />

                                            {/* Center icon */}
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/40 bg-[#20235A]/30 backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-[#20235A]/50">
                                                    <Icon
                                                        size={38}
                                                        strokeWidth={1.15}
                                                        className="text-white"
                                                    />
                                                </div>
                                            </div>

                                            {/* Facility number */}
                                            <span className="absolute bottom-5 left-5 text-[10px] font-semibold tracking-[0.18em] text-white/80">
                                                FACILITY {facility.number}
                                            </span>

                                            {/* View gallery */}
                                            <span className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/10 text-white backdrop-blur-sm transition-all duration-300 group-hover:bg-white group-hover:text-[#20235A]">
                                                <ArrowUpRight size={17} />
                                            </span>

                                            <span className="absolute bottom-5 right-5 rounded-full border border-white/25 bg-black/10 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                                View Gallery
                                            </span>
                                        </button>

                                        {/* CONTENT */}
                                        <div className="flex flex-1 flex-col p-6 sm:p-7">
                                            <p className="text-[10px] font-semibold uppercase tracking-[0.19em] text-[#8F7746]">
                                                {facility.category}
                                            </p>

                                            <h3 className="mt-4 font-serif text-2xl font-medium text-[#20235A]">
                                                {facility.title}
                                            </h3>

                                            <p className="mt-4 flex-1 text-sm leading-7 text-[#706A63]">
                                                {facility.description}
                                            </p>

                                            <div className="mt-7 flex items-center justify-between border-t border-[#E5DFD4] pt-5">
                                                <span className="text-xs font-medium text-[#625D57]">
                                                    {facility.tag}
                                                </span>

                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        openGallery(facility)
                                                    }
                                                    aria-label={`Open ${facility.title} gallery`}
                                                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D9D1C2] text-[#20235A] transition-all duration-300 hover:border-[#20235A] hover:bg-[#20235A] hover:text-white"
                                                >
                                                    <ArrowRight size={16} />
                                                </button>
                                            </div>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* LEARNING APPROACH */}
                <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
                    <div className="mx-auto max-w-7xl">
                        <div className="mx-auto max-w-2xl text-center">
                            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                Our Approach
                            </span>

                            <h2 className="mt-4 font-serif text-3xl font-medium leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                                Building strong foundations for the future.
                            </h2>

                            <p className="mt-5 text-sm leading-7 text-[#706A63] sm:text-base">
                                Facilities are part of a wider learning
                                approach that encourages understanding,
                                practice, and continuous improvement.
                            </p>
                        </div>

                        <div className="mt-12 grid gap-0 border-y border-[#DDD7CB] md:grid-cols-3 md:divide-x md:divide-[#DDD7CB]">
                            {learningHighlights.map((item, index) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={item.title}
                                        className="group px-6 py-8 sm:px-8 md:py-10 lg:px-10"
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="font-serif text-sm text-[#A08A5D]">
                                                0{index + 1}
                                            </span>

                                            <Icon
                                                size={27}
                                                strokeWidth={1.3}
                                                className="text-[#8F7746] transition-transform duration-300 group-hover:-translate-y-1"
                                            />
                                        </div>

                                        <h3 className="mt-7 font-serif text-xl font-medium text-[#20235A] sm:text-2xl">
                                            {item.title}
                                        </h3>

                                        <p className="mt-4 text-sm leading-7 text-[#706A63]">
                                            {item.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* CLOSING CTA */}
                <section className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
                    <div className="relative mx-auto max-w-7xl overflow-hidden bg-[#20235A] px-6 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-16">
                        <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full border border-white/10" />
                        <div className="pointer-events-none absolute -right-2 -top-10 h-36 w-36 rounded-full border border-[#D2B87C]/30" />

                        <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-center">
                            <div className="max-w-2xl">
                                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                                    Applied Science & Humanities
                                </p>

                                <h2 className="mt-4 font-serif text-3xl font-medium leading-tight text-white sm:text-4xl">
                                    Discover the people behind the learning.
                                </h2>

                                <p className="mt-4 max-w-xl text-sm leading-7 text-white/65">
                                    Get to know the department and its faculty,
                                    academic activities, and commitment to
                                    foundational education.
                                </p>
                            </div>

                            <Link
                                href="/departments/applied_science_and_humanities/faculty_profile"
                                className="inline-flex shrink-0 items-center justify-center gap-3 self-start border border-[#D2B87C]/60 px-6 py-4 text-sm font-semibold text-[#D2B87C] transition-colors duration-300 hover:bg-[#D2B87C] hover:text-[#20235A] md:self-center"
                            >
                                Meet Our Faculty
                                <ArrowRight size={17} />
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <FooterSection />

            {/* ========================================================= */}
            {/* FACILITY IMAGE GALLERY MODAL */}
            {/* ========================================================= */}

            {selectedFacility && (
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#10122D]/90 p-4 backdrop-blur-md sm:p-6"
                    onClick={closeGallery}
                >
                    <div
                        className="relative flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden bg-[#FAF9F6] shadow-[0_25px_100px_rgba(0,0,0,0.35)]"
                        onClick={(event) => event.stopPropagation()}
                    >
                        {/* MODAL HEADER */}
                        <div className="flex shrink-0 items-center justify-between border-b border-[#DDD7CB] bg-white px-5 py-4 sm:px-7">
                            <div>
                                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                    Facility {selectedFacility.number}
                                </p>

                                <h2 className="mt-1 font-serif text-2xl font-medium text-[#20235A] sm:text-3xl">
                                    {selectedFacility.title}
                                </h2>
                            </div>

                            <button
                                type="button"
                                onClick={closeGallery}
                                aria-label="Close gallery"
                                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#D9D1C2] text-[#20235A] transition-all duration-300 hover:border-[#20235A] hover:bg-[#20235A] hover:text-white"
                            >
                                <X size={19} />
                            </button>
                        </div>

                        {/* MAIN IMAGE */}
                        <div className="relative flex min-h-0 flex-1 items-center justify-center bg-[#171936] p-4 sm:p-7">
                            <Image
                                src={selectedFacility.gallery[activeImage]}
                                alt={`${selectedFacility.title} - Image ${activeImage + 1
                                    } `}
                                fill
                                sizes="(min-width: 1024px) 330px, 100vw"
                                className="max-h-[55vh] w-full object-contain sm:max-h-[58vh]"
                            />

                            {/* PREVIOUS */}
                            <button
                                type="button"
                                onClick={showPreviousImage}
                                aria-label="Previous image"
                                className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-[#20235A] sm:left-6"
                            >
                                <ChevronLeft size={22} />
                            </button>

                            {/* NEXT */}
                            <button
                                type="button"
                                onClick={showNextImage}
                                aria-label="Next image"
                                className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-[#20235A] sm:right-6"
                            >
                                <ChevronRight size={22} />
                            </button>

                            {/* IMAGE COUNTER */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-[10px] font-semibold tracking-[0.15em] text-white backdrop-blur-sm">
                                {String(activeImage + 1).padStart(2, "0")} /{" "}
                                {String(
                                    selectedFacility.gallery.length
                                ).padStart(2, "0")}
                            </div>
                        </div>

                        {/* THUMBNAILS */}
                        <div className="shrink-0 border-t border-[#DDD7CB] bg-white px-4 py-4 sm:px-6">
                            <div className="flex gap-3 overflow-x-auto pb-1">
                                {selectedFacility.gallery.map(
                                    (image, index) => (
                                        <button
                                            type="button"
                                            key={image}
                                            onClick={() =>
                                                setActiveImage(index)
                                            }
                                            className={`relative h - 16 w - 24 shrink - 0 overflow - hidden border - 2 transition - all duration - 300 sm: h - 20 sm: w - 28 ${activeImage === index
                                                ? "border-[#D2B87C]"
                                                : "border-transparent opacity-60 hover:opacity-100"
                                                } `}
                                            aria-label={`View image ${index + 1
                                                } `}
                                        >
                                            <Image
                                                src={image}
                                                alt={`${selectedFacility.title} thumbnail ${index + 1
                                                    } `}
                                                    fill
                                                    sizes="(min-width: 1024px) 330px, 100vw"
                                                className="h-full w-full object-cover"
                                            />

                                            {activeImage === index && (
                                                <div className="absolute inset-0 bg-[#D2B87C]/10" />
                                            )}
                                        </button>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
