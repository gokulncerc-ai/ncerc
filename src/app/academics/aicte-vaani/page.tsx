"use client";

import React, { useEffect, useState } from "react";
import {
    ArrowUpRight,
    CalendarDays,
    MapPin,
    X,
    ChevronLeft,
    ChevronRight,
    Sparkles,
    Mic2,
    Newspaper,
    Images,
    Languages,
    BookOpen,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";

// =========================================================
// IMAGE DATA
// =========================================================

type GalleryImage = {
    src: string;
    alt: string;
    title: string;
};

const inauguralImages: GalleryImage[] = [
    {
        src: "https://ncerc.ac.in/images/aictevaani/Inaugural%20copy.webp",
        alt: "AICTE VAANI inaugural session at NCERC",
        title: "Inaugural Session",
    },
];

const resourceImages: GalleryImage[] = [
    {
        src: "https://ncerc.ac.in/images/aictevaani/S1.jpg",
        alt: "AICTE VAANI opening forum resource persons",
        title: "Opening Forum",
    },
    {
        src: "https://ncerc.ac.in/images/aictevaani/S2.jpg",
        alt: "AICTE VAANI speakers and plenary session experts",
        title: "Resource Persons",
    },
];

const expertImages: GalleryImage[] = [
    {
        src: "https://ncerc.ac.in/images/aictevaani/R1%20copy.webp",
        alt: "AICTE VAANI expert speaker",
        title: "Expert Talk",
    },
    {
        src: "https://ncerc.ac.in/images/aictevaani/R2%20copy.webp",
        alt: "AICTE VAANI seminar speaker",
        title: "Knowledge Session",
    },
    {
        src: "https://ncerc.ac.in/images/aictevaani/R3%20copy.webp",
        alt: "AICTE VAANI expert interaction",
        title: "Expert Interaction",
    },
    {
        src: "https://ncerc.ac.in/images/aictevaani/R4%20copy.webp",
        alt: "AICTE VAANI speaker session",
        title: "Illuminative Insights",
    },
    {
        src: "https://ncerc.ac.in/images/aictevaani/R5%20copy.webp",
        alt: "AICTE VAANI audience and speaker session",
        title: "Knowledge Exchange",
    },
    {
        src: "https://ncerc.ac.in/images/aictevaani/R6%20copy.webp",
        alt: "AICTE VAANI presentation session",
        title: "Presentation Session",
    },
    {
        src: "https://ncerc.ac.in/images/aictevaani/R7%20copy.webp",
        alt: "AICTE VAANI expert speaking",
        title: "Expert Address",
    },
    {
        src: "https://ncerc.ac.in/images/aictevaani/R8%20copy.webp",
        alt: "AICTE VAANI speaker at podium",
        title: "Technical Session",
    },
    {
        src: "https://ncerc.ac.in/images/aictevaani/R9%20copy.webp",
        alt: "AICTE VAANI discussion",
        title: "Discussion",
    },
    {
        src: "https://ncerc.ac.in/images/aictevaani/R10%20copy.webp",
        alt: "AICTE VAANI keynote session",
        title: "Keynote Session",
    },
    {
        src: "https://ncerc.ac.in/images/aictevaani/R11%20copy.webp",
        alt: "AICTE VAANI knowledge session",
        title: "Knowledge Sharing",
    },
    {
        src: "https://ncerc.ac.in/images/aictevaani/R12%20copy.webp",
        alt: "AICTE VAANI presentation",
        title: "Interactive Session",
    },
];

const audienceImages: GalleryImage[] = [
    {
        src: "https://ncerc.ac.in/images/aictevaani/A1%20copy.webp",
        alt: "AICTE VAANI participants group photograph",
        title: "Vaani Community",
    },
    {
        src: "https://ncerc.ac.in/images/aictevaani/A2%20copy.webp",
        alt: "AICTE VAANI group photograph",
        title: "Together at Vaani",
    },
    {
        src: "https://ncerc.ac.in/images/aictevaani/A3%20copy.webp",
        alt: "AICTE VAANI audience interaction",
        title: "Active Audience",
    },
    {
        src: "https://ncerc.ac.in/images/aictevaani/A4%20copy.webp",
        alt: "AICTE VAANI appreciation ceremony",
        title: "Moments of Appreciation",
    },
];

const mediaImages: GalleryImage[] = [
    {
        src: "https://ncerc.ac.in/images/aictevaani/1000723993%20copy.webp",
        alt: "AICTE VAANI media coverage",
        title: "Media Coverage",
    },
    {
        src: "https://ncerc.ac.in/images/aictevaani/1000636082%20copy.webp",
        alt: "AICTE VAANI newspaper coverage",
        title: "Press Coverage",
    },
];

const allImages: GalleryImage[] = [
    ...inauguralImages,
    ...resourceImages,
    ...expertImages,
    ...audienceImages,
    ...mediaImages,
];

// =========================================================
// PAGE
// =========================================================

export default function Page() {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    const openImage = (image: GalleryImage) => {
        const index = allImages.findIndex((item) => item.src === image.src);

        if (index !== -1) {
            setSelectedImage(index);
        }
    };

    const closeImage = () => setSelectedImage(null);

    const nextImage = () => {
        setSelectedImage((current) =>
            current === null ? null : (current + 1) % allImages.length
        );
    };

    const previousImage = () => {
        setSelectedImage((current) =>
            current === null
                ? null
                : (current - 1 + allImages.length) % allImages.length
        );
    };

    useEffect(() => {
        if (selectedImage === null) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") closeImage();
            if (event.key === "ArrowRight") nextImage();
            if (event.key === "ArrowLeft") previousImage();
        };

        document.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [selectedImage]);

    return (
        <>
            <SiteHeader />

            <main className="overflow-hidden bg-[#FAF8F3] text-[#1E1917]">
                {/* =====================================================
                    HERO
                ===================================================== */}
                <section className="relative overflow-hidden bg-[#20235A]">
                    <div className="pointer-events-none absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full border border-[#D2B87C]/15 sm:h-[560px] sm:w-[560px]" />
                    <div className="pointer-events-none absolute -right-16 -top-16 h-[300px] w-[300px] rounded-full border border-white/[0.07] sm:h-[400px] sm:w-[400px]" />
                    <div className="pointer-events-none absolute -bottom-48 -left-36 h-[380px] w-[380px] rounded-full border border-[#D2B87C]/10" />

                    <div className="relative mx-auto max-w-[1400px] px-5 pb-9 pt-6 sm:px-8 sm:pb-12 sm:pt-7 lg:px-10">
                        <div className="flex flex-col gap-3 border-b border-white/10 pb-4 sm:flex-row sm:items-center sm:justify-between">
                            <div className="flex items-center gap-3">
                                <span className="h-2 w-2 shrink-0 rounded-full bg-[#D2B87C]" />
                                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/55 sm:text-xs sm:tracking-[0.18em]">
                                    Nehru College of Engineering &amp; Research Centre
                                </p>
                            </div>

                            <span className="w-fit rounded-full border border-[#D2B87C]/30 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#D2B87C] sm:text-[10px]">
                                AICTE Sponsored Event
                            </span>
                        </div>

                        <div className="grid items-center gap-8 py-9 sm:py-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:py-14">
                            <div className="relative z-10">
                                <div className="mb-5 flex items-center gap-3">
                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#D2B87C]/40 text-[#D2B87C]">
                                        <Sparkles size={17} />
                                    </span>

                                    <div>
                                        <p className="text-[9px] uppercase tracking-[0.18em] text-white/40">
                                            Three-day seminar
                                        </p>
                                        <p className="mt-1 text-sm font-medium text-white/75">
                                            05 — 07 November 2025
                                        </p>
                                    </div>
                                </div>

                                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D2B87C] sm:text-xs">
                                    Indian Knowledge Systems
                                </p>

                                <h1 className="font-serif text-[3.5rem] leading-[0.92] tracking-[-0.045em] text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]">
                                    AICTE
                                    <span className="mt-1 block pl-4 text-[#D2B87C] sm:pl-7">
                                        VAANI<span className="text-white/30">.</span>
                                    </span>
                                </h1>

                                <div className="mt-6 flex items-center gap-3">
                                    <span className="h-px w-12 bg-[#D2B87C]" />
                                    <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-white/45 sm:text-[10px] sm:tracking-[0.2em]">
                                        Language · Heritage · Innovation
                                    </span>
                                </div>

                                <p className="mt-5 max-w-lg font-serif text-lg leading-relaxed text-white/75 sm:text-xl lg:text-2xl">
                                    Nurturing Indian Languages with Indian
                                    Knowledge Systems to explore Engineering
                                    Management Models.
                                </p>

                                <div className="mt-7 flex flex-wrap items-center gap-4">
                                    <a
                                        href="#about-event"
                                        className="inline-flex items-center gap-2.5 rounded-full bg-[#D2B87C] px-5 py-3 text-xs font-semibold text-[#20235A] transition hover:bg-white sm:text-sm"
                                    >
                                        Explore the event
                                        <ArrowUpRight size={16} />
                                    </a>

                                    <span className="text-[11px] text-white/40">
                                        A visual story from NCERC
                                    </span>
                                </div>
                            </div>

                            <button
                                onClick={() => openImage(inauguralImages[0])}
                                className="group relative block w-full text-left"
                                aria-label="View inaugural session photograph"
                            >
                                <div className="absolute -inset-2.5 rounded-[1.8rem] border border-[#D2B87C]/20 sm:-inset-3 sm:rounded-[2rem]" />

                                <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 p-1.5 sm:rounded-[1.8rem]">
                                    <div className="relative overflow-hidden rounded-[1.1rem] sm:rounded-[1.4rem]">
                                        <img
                                            src={inauguralImages[0].src}
                                            alt={inauguralImages[0].alt}
                                            className="h-[280px] w-full object-cover transition duration-700 group-hover:scale-[1.035] sm:h-[380px] lg:h-[450px]"
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-[#15183E]/95 via-[#20235A]/10 to-transparent" />

                                        <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/20 bg-[#20235A]/40 px-3 py-1.5 backdrop-blur-md sm:left-5 sm:top-5">
                                            <span className="h-1.5 w-1.5 rounded-full bg-[#D2B87C]" />
                                            <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white">
                                                NCERC · 2025
                                            </span>
                                        </div>

                                        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                                            <div className="flex items-end justify-between gap-3">
                                                <div>
                                                    <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#D2B87C]">
                                                        A gathering of ideas
                                                    </p>
                                                    <h2 className="mt-2 max-w-sm font-serif text-xl leading-tight text-white sm:text-2xl lg:text-3xl">
                                                        Celebrating language,
                                                        knowledge and innovation.
                                                    </h2>
                                                </div>

                                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#D2B87C] text-[#20235A] transition group-hover:rotate-45 sm:h-12 sm:w-12">
                                                    <ArrowUpRight size={19} />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    EVENT DETAILS
                ===================================================== */}
                <section className="border-b border-[#20235A]/10 bg-white">
                    <div className="mx-auto grid max-w-[1400px] divide-y divide-[#20235A]/10 px-5 sm:px-8 md:grid-cols-3 md:divide-x md:divide-y-0 lg:px-10">
                        <InfoItem
                            icon={<CalendarDays size={18} />}
                            label="Event dates"
                            value="05 — 07 November 2025"
                        />

                        <InfoItem
                            icon={<MapPin size={18} />}
                            label="Venue"
                            value="Aryabhatta Seminar Hall"
                        />

                        <InfoItem
                            icon={<Sparkles size={18} />}
                            label="Focus area"
                            value="Advanced Computing"
                        />
                    </div>
                </section>

                {/* =====================================================
                    INTRODUCTION
                ===================================================== */}
                <section
                    id="about-event"
                    className="scroll-mt-24 px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-16"
                >
                    <div className="mx-auto max-w-[1400px]">
                        <SectionEyebrow number="01" label="About the event" />

                        <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
                            <h2 className="max-w-3xl font-serif text-3xl leading-[1.12] tracking-[-0.035em] text-[#20235A] sm:text-4xl lg:text-[2.8rem]">
                                A platform where
                                <span className="text-[#B89A55]">
                                    {" "}language meets innovation.
                                </span>
                            </h2>

                            <div>
                                <p className="text-sm leading-7 text-[#1E1917]/70 sm:text-base">
                                    AICTE VAANI brought together educators,
                                    researchers, professionals and students
                                    for an engaging exploration of Indian
                                    languages, knowledge systems and their
                                    relevance to contemporary engineering
                                    and management education.
                                </p>

                                <p className="mt-3 text-sm leading-7 text-[#1E1917]/70 sm:text-base">
                                    Hosted by Nehru College of Engineering &amp;
                                    Research Centre, the three-day seminar
                                    created a forum for sharing knowledge,
                                    experiences, ideas and emerging
                                    perspectives.
                                </p>
                            </div>
                        </div>

                        <div className="mt-7 grid gap-4 border-t border-[#20235A]/10 pt-6 sm:grid-cols-3">
                            <FocusCard
                                icon={<Languages size={18} />}
                                number="01"
                                title="Indian languages"
                                description="Exploring language as a living carrier of culture, ideas and knowledge."
                            />

                            <FocusCard
                                icon={<BookOpen size={18} />}
                                number="02"
                                title="Knowledge systems"
                                description="Connecting Indian knowledge traditions with contemporary learning."
                            />

                            <FocusCard
                                icon={<Sparkles size={18} />}
                                number="03"
                                title="Emerging technology"
                                description="Discussing advanced computing, AI and quantum computing perspectives."
                            />
                        </div>

                        <div className="mt-5 rounded-xl border border-[#D2B87C]/40 bg-[#F1EBDD]/50 p-5 sm:p-6">
                            <p className="max-w-5xl font-serif text-lg leading-relaxed text-[#20235A] sm:text-xl">
                                The programme focused on advanced computing
                                domains including supercomputing, artificial
                                intelligence and quantum computing while
                                connecting these emerging areas with Indian
                                languages and knowledge traditions.
                            </p>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    INAUGURAL SESSION
                ===================================================== */}
                <section className="border-y border-[#20235A]/[0.07] bg-white px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-16">
                    <div className="mx-auto max-w-[1400px]">
                        <SectionHeading
                            number="02"
                            eyebrow="The opening"
                            title="Inaugural Session"
                            description="Opening official forums that set the tone for three days of conversations and knowledge exchange."
                        />

                        <div className="mt-6 grid gap-4 lg:grid-cols-[1.4fr_0.75fr]">
                            <ImageCard
                                image={inauguralImages[0]}
                                onOpen={openImage}
                                className="min-h-[280px] sm:min-h-[360px] lg:min-h-[430px]"
                                imageClassName="h-[280px] sm:h-[360px] lg:h-[430px]"
                                category="AICTE VAANI"
                                titleSize="large"
                            />

                            <div className="flex flex-col justify-between rounded-[1.3rem] bg-[#20235A] p-5 sm:rounded-[1.5rem] sm:p-7">
                                <div>
                                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D2B87C]/40 text-[#D2B87C]">
                                        <Mic2 size={18} />
                                    </span>

                                    <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                        The beginning
                                    </p>

                                    <h3 className="mt-2 font-serif text-2xl leading-tight text-white sm:text-3xl">
                                        Beginning the
                                        <span className="block text-[#D2B87C]">
                                            Vaani journey.
                                        </span>
                                    </h3>

                                    <p className="mt-4 text-sm leading-7 text-white/65">
                                        The inaugural session marked the
                                        beginning of three days of discussions,
                                        presentations and knowledge exchange
                                        centred around Indian languages and
                                        knowledge systems.
                                    </p>
                                </div>

                                <div className="mt-7 border-t border-white/10 pt-5">
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
                                        Hosted at
                                    </p>
                                    <p className="mt-2 font-serif text-lg leading-relaxed text-white">
                                        Nehru College of Engineering &amp;
                                        Research Centre
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    RESOURCE PERSONS
                ===================================================== */}
                <section className="px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-16">
                    <div className="mx-auto max-w-[1400px]">
                        <SectionHeading
                            number="03"
                            eyebrow="Voices and perspectives"
                            title="Resource Persons"
                            description="Educators, professionals and experts contributing perspectives to the opening forums of AICTE VAANI."
                        />

                        <div className="mt-6 grid gap-4 sm:grid-cols-2">
                            {resourceImages.map((image) => (
                                <ImageCard
                                    key={image.src}
                                    image={image}
                                    onOpen={openImage}
                                    imageClassName="h-[280px] sm:h-[340px] lg:h-[390px]"
                                    category="Forum"
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    EXPERT TALKS
                ===================================================== */}
                <section className="bg-[#20235A] px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-16">
                    <div className="mx-auto max-w-[1400px]">
                        <div className="grid gap-7 lg:grid-cols-[0.7fr_1.3fr] lg:gap-10">
                            <div className="lg:sticky lg:top-28 lg:self-start">
                                <SectionEyebrow
                                    number="04"
                                    label="Knowledge exchange"
                                    light
                                />

                                <h2 className="mt-5 font-serif text-3xl leading-[1.1] tracking-[-0.035em] text-white sm:text-4xl lg:text-[2.8rem]">
                                    Expert Talk
                                    <span className="block text-[#D2B87C]">
                                        Sessions
                                    </span>
                                </h2>

                                <p className="mt-4 max-w-md text-sm leading-7 text-white/60 sm:text-base">
                                    Initiating illuminative insights through
                                    expert talks, technical sessions and
                                    knowledge sharing.
                                </p>

                                <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-4">
                                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.06] text-[#D2B87C]">
                                        <Mic2 size={17} />
                                    </span>

                                    <div>
                                        <p className="text-sm font-medium text-white">
                                            12 Knowledge Sessions
                                        </p>
                                        <p className="mt-0.5 text-xs text-white/40">
                                            Talks, presentations and discussions
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                                {expertImages.map((image, index) => (
                                    <ImageCard
                                        key={image.src}
                                        image={image}
                                        onOpen={openImage}
                                        dark
                                        imageClassName={
                                            index % 4 === 0
                                                ? "h-[280px] sm:h-[330px]"
                                                : "h-[250px] sm:h-[290px]"
                                        }
                                        category={`Session ${ String(index + 1).padStart(2, "0") } `}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    AUDIENCE GALLERY
                ===================================================== */}
                <section className="px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-16">
                    <div className="mx-auto max-w-[1400px]">
                        <SectionHeading
                            number="05"
                            eyebrow="Community"
                            title="Audience Clicks"
                            description="Active Audience added colors to Vaani Accolades"
                        />

                        <div className="mt-6 grid gap-4 lg:grid-cols-12">
                            <div className="lg:col-span-7">
                                <ImageCard
                                    image={audienceImages[0]}
                                    onOpen={openImage}
                                    imageClassName="h-[300px] sm:h-[390px] lg:h-[490px]"
                                    category="Audience"
                                />
                            </div>

                            <div className="grid gap-4 lg:col-span-5">
                                <ImageCard
                                    image={audienceImages[1]}
                                    onOpen={openImage}
                                    imageClassName="h-[240px] sm:h-[290px] lg:h-[285px]"
                                    category="Community"
                                />

                                <div className="grid grid-cols-2 gap-4">
                                    {audienceImages.slice(2).map((image) => (
                                        <ImageCard
                                            key={image.src}
                                            image={image}
                                            onOpen={openImage}
                                            imageClassName="h-[190px] sm:h-[220px] lg:h-[190px]"
                                            category="Audience"
                                            compact
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    MEDIA COVERAGE
                ===================================================== */}
                <section className="border-y border-[#20235A]/[0.07] bg-white px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-16">
                    <div className="mx-auto max-w-[1400px]">
                        <SectionHeading
                            number="06"
                            eyebrow="In the news"
                            title="Media Coverage"
                            description="Headlines, stories and press moments capturing the spirit of AICTE VAANI at NCERC."
                        />

                        <div className="mt-6 grid gap-4 md:grid-cols-2">
                            {mediaImages.map((image, index) => (
                                <button
                                    key={image.src}
                                    onClick={() => openImage(image)}
                                    className="group overflow-hidden rounded-[1.3rem] border border-[#20235A]/10 bg-[#FAF8F3] text-left transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#20235A]/10 sm:rounded-[1.5rem]"
                                >
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={image.src}
                                            alt={image.alt}
                                            loading="lazy"
                                            className="h-[280px] w-full object-cover object-top transition duration-700 group-hover:scale-[1.035] sm:h-[340px] lg:h-[380px]"
                                        />

                                        <span className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-[#FAF8F3]/90 text-[#20235A]">
                                            <Newspaper size={16} />
                                        </span>

                                        <span className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#D2B87C] text-[#20235A] transition group-hover:rotate-45">
                                            <ArrowUpRight size={17} />
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-between gap-4 p-4 sm:p-5">
                                        <div>
                                            <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#20235A]/45">
                                                Press &amp; media
                                            </p>
                                            <h3 className="mt-1.5 font-serif text-xl text-[#20235A] sm:text-2xl">
                                                {image.title}
                                            </h3>
                                        </div>

                                        <span className="text-xs text-[#20235A]/35">
                                            0{index + 1}
                                        </span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    CLOSING
                ===================================================== */}
                {/* <section className="relative overflow-hidden bg-[#20235A] px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
                    <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D2B87C]/15 sm:h-[440px] sm:w-[440px]" />
                    <div className="pointer-events-none absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.07] sm:h-[320px] sm:w-[320px]" />

                    <div className="relative z-10 mx-auto max-w-[900px] text-center">
                        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#D2B87C]/40 text-[#D2B87C] sm:h-14 sm:w-14">
                            <Mic2 size={21} />
                        </span>

                        <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C] sm:text-xs">
                            AICTE VAANI · NCERC
                        </p>

                        <h2 className="mt-5 font-serif text-3xl leading-[1.12] tracking-[-0.035em] text-white sm:text-4xl lg:text-6xl">
                            Ideas become meaningful
                            <span className="mt-1 block text-[#D2B87C]">
                                when people come together.
                            </span>
                        </h2>

                        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
                            A visual journey through the conversations,
                            expertise, participation and moments that shaped
                            AICTE VAANI at NCERC.
                        </p>

                        <button
                            onClick={() => openImage(inauguralImages[0])}
                            className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-[#D2B87C]/40 px-5 py-3 text-xs font-semibold text-[#D2B87C] transition hover:bg-[#D2B87C] hover:text-[#20235A] sm:text-sm"
                        >
                            <Images size={16} />
                            Explore the gallery
                            <ArrowUpRight size={16} />
                        </button>
                    </div>
                </section> */}
            </main>

            <FooterSection />

            {/* =====================================================
                IMAGE LIGHTBOX
            ===================================================== */}
            {selectedImage !== null && (
                <div
                    className="fixed inset-0 z-[999] flex items-center justify-center bg-[#11132F]/95 p-4 backdrop-blur-md sm:p-8"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Image preview"
                    onClick={closeImage}
                >
                    <button
                        onClick={closeImage}
                        className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-[#D2B87C] hover:text-[#20235A] sm:right-6 sm:top-6 sm:h-12 sm:w-12"
                        aria-label="Close image"
                    >
                        <X size={20} />
                    </button>

                    <button
                        onClick={(event) => {
                            event.stopPropagation();
                            previousImage();
                        }}
                        className="absolute left-3 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-[#D2B87C] hover:text-[#20235A] sm:flex"
                        aria-label="Previous image"
                    >
                        <ChevronLeft size={22} />
                    </button>

                    <div
                        className="flex max-h-[90vh] max-w-[92vw] flex-col items-center"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <img
                            src={allImages[selectedImage].src}
                            alt={allImages[selectedImage].alt}
                            className="max-h-[70vh] max-w-[92vw] rounded-xl object-contain shadow-2xl sm:max-h-[76vh] sm:rounded-2xl"
                        />

                        <div className="mt-4 text-center">
                            <p className="font-serif text-lg text-white sm:text-2xl">
                                {allImages[selectedImage].title}
                            </p>

                            <p className="mt-1 text-xs text-white/45">
                                {selectedImage + 1} / {allImages.length}
                            </p>
                        </div>

                        <div className="mt-4 flex gap-3 sm:hidden">
                            <button
                                onClick={previousImage}
                                className="flex h-9 items-center gap-1.5 rounded-full border border-white/15 px-3 text-xs text-white"
                            >
                                <ChevronLeft size={16} />
                                Previous
                            </button>

                            <button
                                onClick={nextImage}
                                className="flex h-9 items-center gap-1.5 rounded-full border border-white/15 px-3 text-xs text-white"
                            >
                                Next
                                <ChevronRight size={16} />
                            </button>
                        </div>
                    </div>

                    <button
                        onClick={(event) => {
                            event.stopPropagation();
                            nextImage();
                        }}
                        className="absolute right-3 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-[#D2B87C] hover:text-[#20235A] sm:flex"
                        aria-label="Next image"
                    >
                        <ChevronRight size={22} />
                    </button>
                </div>
            )}
        </>
    );
}

// =========================================================
// EVENT INFO ITEM
// =========================================================

function InfoItem({
    icon,
    label,
    value,
}: {
    icon: React.ReactNode;
    label: string;
    value: string;
}) {
    return (
        <div className="flex items-center gap-3 px-1 py-4 sm:gap-4 sm:py-5 md:px-5 lg:py-6">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F1EBDD] text-[#20235A] sm:h-11 sm:w-11">
                {icon}
            </span>

            <div className="min-w-0">
                <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#20235A]/45 sm:text-[10px]">
                    {label}
                </p>

                <p className="mt-1 font-serif text-base leading-snug text-[#20235A] sm:text-lg">
                    {value}
                </p>
            </div>
        </div>
    );
}

// =========================================================
// SECTION EYEBROW
// =========================================================

function SectionEyebrow({
    number,
    label,
    light = false,
}: {
    number: string;
    label: string;
    light?: boolean;
}) {
    return (
        <div className="flex items-center gap-3">
            <span
                className={`font - serif text - 3xl leading - none tracking - [-0.04em] sm: text - 4xl ${
    light ? "text-white/20" : "text-[#20235A]/20"
} `}
            >
                {number}
            </span>

            <span
                className={`h - px w - 8 ${
    light ? "bg-[#D2B87C]" : "bg-[#B89A55]"
} `}
            />

            <p
                className={`text - [9px] font - semibold uppercase tracking - [0.16em] sm: text - [10px] sm: tracking - [0.2em] ${
    light ? "text-white/50" : "text-[#20235A]/55"
} `}
            >
                {label}
            </p>
        </div>
    );
}

// =========================================================
// SECTION HEADING
// =========================================================

function SectionHeading({
    number,
    eyebrow,
    title,
    description,
}: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
}) {
    return (
        <div className="flex flex-col gap-3 border-b border-[#20235A]/10 pb-5 sm:gap-4 sm:pb-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
                <SectionEyebrow number={number} label={eyebrow} />

                <h2 className="mt-4 font-serif text-3xl leading-[1.12] tracking-[-0.035em] text-[#20235A] sm:text-4xl lg:text-[2.8rem]">
                    {title}
                </h2>
            </div>

            <p className="max-w-lg text-sm leading-6 text-[#1E1917]/60 sm:leading-7 lg:text-right">
                {description}
            </p>
        </div>
    );
}

// =========================================================
// FOCUS CARD
// =========================================================

function FocusCard({
    icon,
    number,
    title,
    description,
}: {
    icon: React.ReactNode;
    number: string;
    title: string;
    description: string;
}) {
    return (
        <div className="group rounded-xl border border-[#20235A]/10 bg-white/70 p-4 transition duration-300 hover:-translate-y-1 hover:border-[#D2B87C]/70 hover:shadow-md hover:shadow-[#20235A]/[0.05] sm:p-5">
            <div className="flex items-center justify-between">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F1EBDD] text-[#20235A] transition group-hover:bg-[#20235A] group-hover:text-[#D2B87C]">
                    {icon}
                </span>

                <span className="font-serif text-xs text-[#20235A]/30">
                    {number}
                </span>
            </div>

            <h3 className="mt-4 font-serif text-lg text-[#20235A] sm:text-xl">
                {title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-[#1E1917]/60">
                {description}
            </p>
        </div>
    );
}

// =========================================================
// REUSABLE GALLERY IMAGE CARD
// =========================================================

function ImageCard({
    image,
    onOpen,
    className = "",
    imageClassName = "",
    category,
    dark = false,
    compact = false,
    titleSize = "normal",
}: {
    image: GalleryImage;
    onOpen: (image: GalleryImage) => void;
    className?: string;
    imageClassName?: string;
    category?: string;
    dark?: boolean;
    compact?: boolean;
    titleSize?: "normal" | "large";
}) {
    return (
        <button
            onClick={() => onOpen(image)}
            aria-label={`View ${ image.title } `}
            className={`group relative block w - full overflow - hidden rounded - [1.2rem] text - left sm: rounded - [1.5rem] ${
    dark ? "bg-white/[0.04] ring-1 ring-white/10" : "bg-[#E8E1D5]"
} ${ className } `}
        >
            <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className={`w - full object - cover transition duration - 700 group - hover: scale - [1.04] ${ imageClassName } `}
            />

            <div
                className={`absolute inset - 0 ${
    dark
        ? "bg-gradient-to-t from-[#171A43]/95 via-[#20235A]/10 to-transparent"
        : "bg-gradient-to-t from-[#171A43]/90 via-[#20235A]/5 to-transparent"
} `}
            />

            {!compact && (
                <span className="absolute left-3 top-3 rounded-full border border-white/25 bg-[#20235A]/35 px-2.5 py-1.5 text-[8px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-md sm:left-4 sm:top-4 sm:text-[9px]">
                    {category ?? "AICTE VAANI"}
                </span>
            )}

            <div
                className={`absolute bottom - 0 left - 0 right - 0 ${
    compact ? "p-3" : "p-4 sm:p-5"
} `}
            >
                <div className="flex items-end justify-between gap-2.5">
                    <div className="min-w-0">
                        {compact && (
                            <p className="text-[8px] font-semibold uppercase tracking-[0.12em] text-[#D2B87C] sm:text-[9px]">
                                {category ?? "Gallery"}
                            </p>
                        )}

                        <h3
                            className={`font - serif leading - tight text - white ${
    titleSize === "large"
        ? "text-xl sm:text-2xl lg:text-3xl"
        : compact
            ? "mt-1 text-sm sm:text-base"
            : "mt-1.5 text-lg sm:text-xl"
} `}
                        >
                            {image.title}
                        </h3>
                    </div>

                    <span
                        className={`flex shrink - 0 items - center justify - center rounded - full transition duration - 300 group - hover: rotate - 45 ${
    compact
        ? "h-7 w-7 bg-white/15 text-white"
        : "h-9 w-9 bg-white/15 text-white backdrop-blur-md group-hover:bg-[#D2B87C] group-hover:text-[#20235A] sm:h-10 sm:w-10"
} `}
                    >
                        <ArrowUpRight size={compact ? 14 : 17} />
                    </span>
                </div>
            </div>
        </button>
    );
}