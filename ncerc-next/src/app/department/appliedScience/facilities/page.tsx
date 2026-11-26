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
                    {/* Decorative Background Elements */}
                    <div className="pointer-events-none absolute inset-0 -z-10">
                        <div className="absolute -right-24 -top-32 h-[440px] w-[440px] rounded-full border border-white/10" />
                        <div className="absolute -right-8 -top-16 h-[310px] w-[310px] rounded-full border border-white/10" />
                        <div className="absolute bottom-0 left-[48%] h-64 w-64 rounded-full bg-[#D2B87C]/10 blur-3xl" />
                        <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_55%,rgba(210,184,124,0.07)_55%,transparent_75%)]" />
                    </div>

                    <div className="mx-auto grid min-h-[440px] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.2fr_0.8fr] md:py-24 lg:px-12">
                        {/* Hero Content */}
                        <div className="max-w-2xl">
                            <div className="mb-7 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#D2B87C]" />
                                <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#D2B87C]">
                                    Applied Science &amp; Humanities
                                </span>
                            </div>

                            <h1 className="font-serif text-4xl font-normal leading-[1.12] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[68px]">
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
                                    className="inline-flex items-center gap-3 rounded-sm bg-[#D2B87C] px-6 py-3.5 text-sm font-medium text-[#20235A] transition-colors duration-300 hover:bg-white"
                                >
                                    Explore Facilities
                                    <ArrowDownRight size={17} />
                                </Link>

                                <span className="text-xs tracking-wide text-white/55">
                                    Learn · Experiment · Grow
                                </span>
                            </div>
                        </div>

                        {/* Learning Environment Panel */}
                        <div className="relative mx-auto w-full max-w-[420px]">
                            <div className="absolute -inset-4 rounded-sm border border-[#D2B87C]/25" />

                            <div className="relative overflow-hidden rounded-sm border border-white/10 bg-white/[0.06] p-6 sm:p-8">
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#D2B87C]">
                                        Our Learning Environment
                                    </span>
                                    <Sparkles
                                        size={19}
                                        className="text-[#D2B87C]"
                                        strokeWidth={1.4}
                                    />
                                </div>

                                <div className="mt-8 grid grid-cols-2 gap-3">
                                    {/* Explore */}
                                    <div className="flex min-h-[142px] flex-col justify-between border border-white/10 bg-white/[0.04] p-4">
                                        <Atom
                                            size={29}
                                            strokeWidth={1.3}
                                            className="text-[#D2B87C]"
                                        />
                                        <div>
                                            <p className="font-serif text-lg font-normal text-white">
                                                Explore
                                            </p>
                                            <p className="mt-1 text-xs leading-5 text-white/55">
                                                Scientific concepts
                                            </p>
                                        </div>
                                    </div>

                                    {/* Experiment */}
                                    <div className="flex min-h-[142px] flex-col justify-between border border-white/10 bg-white/[0.04] p-4">
                                        <FlaskConical
                                            size={29}
                                            strokeWidth={1.3}
                                            className="text-[#D2B87C]"
                                        />
                                        <div>
                                            <p className="font-serif text-lg font-normal text-white">
                                                Experiment
                                            </p>
                                            <p className="mt-1 text-xs leading-5 text-white/55">
                                                Practical knowledge
                                            </p>
                                        </div>
                                    </div>

                                    {/* Communicate */}
                                    <div className="col-span-2 flex items-center gap-4 border border-[#D2B87C]/25 bg-[#D2B87C]/[0.08] p-5">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#D2B87C]/30">
                                            <Languages
                                                size={23}
                                                className="text-[#D2B87C]"
                                                strokeWidth={1.4}
                                            />
                                        </div>

                                        <div>
                                            <p className="font-serif text-lg font-normal text-white">
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

                    {/* Bottom Accent */}
                    <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#D2B87C]/70 to-transparent" />
                </section>
                {/* --------navigations-------- */}
                <DepartmentNavigation />



                {/* FACILITIES SECTION */}
                <section
                    id="our-facilities"
                    className="bg-[#FAF9F6] px-6 py-16 sm:px-8 lg:px-10 lg:py-24"
                >
                    <div className="mx-auto max-w-7xl">
                        {/* Section Heading */}
                        <div className="mb-12 max-w-3xl lg:mb-16">
                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-px w-9 bg-[#927B4D]" />
                                <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#927B4D]">
                                    Learning Infrastructure
                                </p>
                            </div>

                            <h2 className="font-serif text-3xl font-normal leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                                Facilities That Shape
                                <span className="italic text-[#927B4D]"> Learning.</span>
                            </h2>

                            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#666670] sm:text-base sm:leading-8">
                                Discover the academic spaces and resources that encourage
                                curiosity, support practical learning, and enrich the
                                educational experience at NCERC.
                            </p>
                        </div>

                        {/* Facility Cards */}
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">

                            {/* LABS */}
                            <Link
                                href="\department\appliedScience\facilities\labs"
                                className="group relative flex flex-col overflow-hidden border border-[#20235A]/10 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-[#D2B87C] hover:shadow-[0_18px_45px_rgba(32,35,90,0.10)]"
                            >
                                <div className="relative aspect-[5/4] overflow-hidden bg-[#F2EFE8]">
                                    <Image
                                        src="https://i.pinimg.com/736x/35/08/a6/3508a6f97e2c2f7a71eb8ab671e62e0a.jpg"
                                        alt="Laboratory facilities at NCERC"
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#20235A]/45 via-transparent to-transparent opacity-70" />

                                    <span className="absolute left-5 top-5 text-xs font-medium uppercase tracking-[0.2em] text-white">
                                        01
                                    </span>
                                </div>

                                <div className="flex flex-1 flex-col p-6 sm:p-7">
                                    <div className="mb-4 flex items-center justify-between">
                                        <h3 className="font-serif text-2xl font-normal text-[#20235A]">
                                            Labs
                                        </h3>

                                        <span className="flex h-10 w-10 items-center justify-center border border-[#D2B87C]/60 text-[#927B4D] transition-all duration-300 group-hover:border-[#20235A] group-hover:bg-[#20235A] group-hover:text-white">
                                            <ArrowUpRight size={19} />
                                        </span>
                                    </div>

                                    <p className="text-sm leading-7 text-[#73737B]">
                                        Explore the laboratory spaces that encourage
                                        experimentation, scientific exploration, and
                                        hands-on learning.
                                    </p>

                                    <div className="mt-6 flex items-center gap-3 border-t border-[#20235A]/10 pt-4">
                                        <span className="h-px w-7 bg-[#D2B87C] transition-all duration-300 group-hover:w-12" />
                                        <span className="text-[11px] font-medium uppercase tracking-[0.17em] text-[#927B4D]">
                                            Explore Laboratories
                                        </span>
                                    </div>
                                </div>
                            </Link>

                            {/* LIBRARY */}
                            <div className="group relative flex flex-col overflow-hidden border border-[#20235A]/10 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-[#D2B87C] hover:shadow-[0_18px_45px_rgba(32,35,90,0.10)]">
                                <div className="relative aspect-[5/4] overflow-hidden bg-[#F2EFE8]">
                                    <Image
                                        src="https://i.pinimg.com/736x/90/2b/99/902b99f2d416142988afbd25ef0da95d.jpg"
                                        alt="Library facilities at NCERC"
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#20235A]/45 via-transparent to-transparent opacity-70" />

                                    <span className="absolute left-5 top-5 text-xs font-medium uppercase tracking-[0.2em] text-white">
                                        02
                                    </span>
                                </div>

                                <div className="flex flex-1 flex-col p-6 sm:p-7">
                                    <div className="mb-4 flex items-center justify-between">
                                        <h3 className="font-serif text-2xl font-normal text-[#20235A]">
                                            Library
                                        </h3>

                                        <span className="flex h-10 w-10 items-center justify-center border border-[#D2B87C]/60 text-[#927B4D] transition-all duration-300 group-hover:border-[#20235A] group-hover:bg-[#20235A] group-hover:text-white">
                                            <ArrowUpRight size={19} />
                                        </span>
                                    </div>

                                    <p className="text-sm leading-7 text-[#73737B]">
                                        Discover a knowledge resource that supports
                                        academic study, independent research, and
                                        continuous learning.
                                    </p>

                                    <div className="mt-6 flex items-center gap-3 border-t border-[#20235A]/10 pt-4">
                                        <span className="h-px w-7 bg-[#D2B87C] transition-all duration-300 group-hover:w-12" />
                                        <span className="text-[11px] font-medium uppercase tracking-[0.17em] text-[#927B4D]">
                                            Explore Library
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* SMART CLASSROOMS */}
                            <div className="group relative flex flex-col overflow-hidden border border-[#20235A]/10 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-[#D2B87C] hover:shadow-[0_18px_45px_rgba(32,35,90,0.10)]">
                                <div className="relative aspect-[5/4] overflow-hidden bg-[#F2EFE8]">
                                    <Image
                                        src="https://i.pinimg.com/736x/7c/61/95/7c61954ad7e66bcdcffed09f51ce4adc.jpg"
                                        alt="Smart classrooms at NCERC"
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#20235A]/45 via-transparent to-transparent opacity-70" />

                                    <span className="absolute left-5 top-5 text-xs font-medium uppercase tracking-[0.2em] text-white">
                                        03
                                    </span>
                                </div>

                                <div className="flex flex-1 flex-col p-6 sm:p-7">
                                    <div className="mb-4 flex items-center justify-between">
                                        <h3 className="font-serif text-2xl font-normal text-[#20235A]">
                                            Smart Classrooms
                                        </h3>

                                        <span className="flex h-10 w-10 items-center justify-center border border-[#D2B87C]/60 text-[#927B4D] transition-all duration-300 group-hover:border-[#20235A] group-hover:bg-[#20235A] group-hover:text-white">
                                            <ArrowUpRight size={19} />
                                        </span>
                                    </div>

                                    <p className="text-sm leading-7 text-[#73737B]">
                                        Experience technology-enabled learning spaces
                                        designed to make classroom teaching more
                                        interactive and engaging.
                                    </p>

                                    <div className="mt-6 flex items-center gap-3 border-t border-[#20235A]/10 pt-4">
                                        <span className="h-px w-7 bg-[#D2B87C] transition-all duration-300 group-hover:w-12" />
                                        <span className="text-[11px] font-medium uppercase tracking-[0.17em] text-[#927B4D]">
                                            Explore Classrooms
                                        </span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>









            </main>

            <FooterSection />




        </>
    );
}
