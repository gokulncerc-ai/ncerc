
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import SiteHeader from "@/components/header/SiteHeader";
import DepartmentNav from "../DepartmentNav/DepartmentNavigation";
import FooterSection from "@/components/home/FooterSection";
import {
    X,
    Maximize2,
    CalendarDays,
    MapPin,
    Users,
    Clock,
    Mic2,
    Sparkles,
} from "lucide-react";

const eventImages = [
    {
        src: "/images/dpt/cse_ai_ml/association/Cse_Ai_Ml_Association_img1.webp",
        alt: "Cypher 2025 Artificial Intelligence and Deep Learning session",
    },
    {
        src: "/images/dpt/cse_ai_ml/association/Cse_Ai_Ml_Association_img2.webp",
        alt: "Participants attending the Cypher 2025 technical session",
    },
    {
        src: "/images/dpt/cse_ai_ml/association/Cse_Ai_Ml_Association_img3.webp",
        alt: "Participants attending the Cypher 2025 technical session",
    },
    {
        src: "/images/dpt/cse_ai_ml/association/Cse_Ai_Ml_Association_img4.webp",
        alt: "Participants attending the Cypher 2025 technical session",
    }, {
        src: "/images/dpt/cse_ai_ml/association/Cse_Ai_Ml_Association_img5.webp",
        alt: "Participants attending the Cypher 2025 technical session",
    }, {
        src: "/images/dpt/cse_ai_ml/association/Cse_Ai_Ml_Association_img6.webp",
        alt: "Participants attending the Cypher 2025 technical session",
    },
];

export default function AssociationPage() {
    const [activeImage, setActiveImage] = useState<string | null>(null);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setActiveImage(null);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <>
            <SiteHeader />


            <main className="overflow-hidden bg-[#FAF7F2] [&_p]:text-justify">
                {/* HERO SECTION */}
                <section className="relative flex min-h-[390px] items-center overflow-hidden bg-[#20235A] px-5 py-24 sm:px-10 lg:min-h-[440px] lg:px-20 ">
                    <div className="pointer-events-none absolute -right-24 -top-36 h-[420px] w-[420px] rounded-full border border-[#D2B87C]/15" />
                    <div className="pointer-events-none absolute -right-10 -top-20 h-[300px] w-[300px] rounded-full border border-[#D2B87C]/20" />
                    <div className="pointer-events-none absolute -bottom-40 left-[40%] h-[350px] w-[350px] rounded-full border border-white/10" />

                    <div className="relative z-10 mx-auto w-full max-w-7xl">
                        <div className="mb-7 flex items-center gap-3">
                            <span className="h-px w-10 bg-[#D2B87C]" />
                            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D2B87C]">
                                Department of CSE (AI & ML)
                            </p>
                        </div>

                        <p className="mb-2 font-serif text-2xl italic text-white/65 sm:text-3xl">
                            Innovation. Collaboration. Excellence.
                        </p>

                        <h1 className="font-serif text-5xl font-medium tracking-tight text-white sm:text-6xl lg:text-7xl">
                            Cypher
                            <span className="ml-3 font-serif italic text-[#D2B87C]">
                                Association
                            </span>
                        </h1>

                        <p className="mt-7 max-w-2xl text-sm leading-8 text-white/70 sm:text-base sm:leading-9">
                            A platform for exploring emerging technologies, sharing
                            knowledge, and bringing together students and faculty through
                            meaningful technical experiences.
                        </p>

                        <div className="mt-9 flex items-center gap-3">
                            <span className="h-1 w-12 bg-[#D2B87C]" />
                            <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/60">
                                Academic Year 2025
                            </span>
                        </div>
                    </div>
                </section>

                <DepartmentNav />

                {/* FEATURED EVENT INTRODUCTION */}
                <section className="px-5 py-20 sm:px-10 lg:px-20 lg:py-28">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-20">
                            <div>
                                <div className="mb-5 flex items-center gap-3">
                                    <span className="h-px w-8 bg-[#927B4D]" />
                                    <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#927B4D]">
                                        Association Highlights / 2025
                                    </p>
                                </div>

                                <h2 className="font-serif text-4xl leading-tight text-[#20235A] sm:text-5xl lg:text-[58px]">
                                    CYPHER
                                    <span className="block font-serif italic text-[#927B4D]">
                                        Event Report
                                    </span>
                                </h2>

                                <div className="mt-7 h-px w-24 bg-[#D2B87C]" />
                            </div>

                            <div className="lg:pb-1">
                                <p className="text-sm leading-8 text-[#55545B] sm:text-base sm:leading-9">
                                    The Cypher Association of the Department of Computer Science
                                    and Engineering (Artificial Intelligence & Machine Learning)
                                    successfully organized a technical session on{" "}
                                    <span className="font-semibold text-[#20235A]">
                                        Artificial Intelligence and Deep Learning
                                    </span>{" "}
                                    on 26 August 2025. The programme brought together students,
                                    faculty members, and an expert speaker to explore the
                                    evolving possibilities of artificial intelligence.
                                </p>
                            </div>
                        </div>

                        {/* EVENT DETAILS */}
                        <div className="mt-14 grid overflow-hidden border-y border-[#D2B87C]/50 sm:grid-cols-2 lg:grid-cols-4">
                            <div className="border-b border-[#D2B87C]/40 px-5 py-7 sm:border-r lg:border-b-0">
                                <CalendarDays className="mb-4 h-5 w-5 text-[#927B4D]" />
                                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#927B4D]">
                                    Date
                                </p>
                                <p className="mt-2 font-serif text-xl text-[#20235A]">
                                    26 August 2025
                                </p>
                            </div>

                            <div className="border-b border-[#D2B87C]/40 px-5 py-7 lg:border-b-0 lg:border-r">
                                <MapPin className="mb-4 h-5 w-5 text-[#927B4D]" />
                                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#927B4D]">
                                    Venue
                                </p>
                                <p className="mt-2 font-serif text-xl text-[#20235A]">
                                    Aryabhata Seminar Hall
                                </p>
                                <p className="mt-1 text-xs leading-6 text-[#77747A]">
                                    NCERC, Pampady
                                </p>
                            </div>

                            <div className="border-b border-[#D2B87C]/40 px-5 py-7 sm:border-b-0 sm:border-r">
                                <Clock className="mb-4 h-5 w-5 text-[#927B4D]" />
                                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#927B4D]">
                                    Time
                                </p>
                                <p className="mt-2 font-serif text-xl text-[#20235A]">
                                    09:30 AM – 12:00 PM
                                </p>
                            </div>

                            <div className="px-5 py-7">
                                <Users className="mb-4 h-5 w-5 text-[#927B4D]" />
                                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#927B4D]">
                                    Audience
                                </p>
                                <p className="mt-2 font-serif text-xl text-[#20235A]">
                                    Faculty & Students
                                </p>
                                <p className="mt-1 text-xs leading-6 text-[#77747A]">
                                    Distinguished Guests
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FEATURED TOPIC */}
                <section className="bg-[#F2EFE8] px-5 py-20 sm:px-10 lg:px-20 lg:py-24">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:gap-20">
                            <div>
                                <div className="mb-5 flex items-center gap-3">
                                    <Mic2 className="h-4 w-4 text-[#927B4D]" />
                                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#927B4D]">
                                        Technical Session
                                    </p>
                                </div>

                                <h2 className="font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                                    Talk Session on
                                    <span className="mt-1 block font-serif italic text-[#927B4D]">
                                        Artificial Intelligence
                                    </span>
                                    <span className="block font-serif italic text-[#927B4D]">
                                        and Deep Learning
                                    </span>
                                </h2>

                                <div className="mt-7 h-px w-16 bg-[#D2B87C]" />

                                <p className="mt-7 text-sm leading-8 text-[#55545B] sm:text-base sm:leading-9">
                                    The session was delivered by{" "}
                                    <strong className="font-semibold text-[#20235A]">
                                        Gayathri Padmanabhan
                                    </strong>
                                    , a TEDx Speaker and Assistant Professor, who shared her
                                    expertise and practical insights into the rapidly evolving
                                    field of Artificial Intelligence and Deep Learning.
                                </p>

                                <p className="mt-5 text-sm leading-8 text-[#55545B] sm:text-base sm:leading-9">
                                    The talk focused on building a strong foundational
                                    understanding, exploring real-world applications, and
                                    discussing emerging opportunities and future trends in AI
                                    and Deep Learning.
                                </p>
                            </div>

                            <div className="relative">
                                <div className="absolute -right-3 -top-3 h-full w-full border border-[#D2B87C]/70 sm:-right-5 sm:-top-5" />

                                <div className="relative flex min-h-[300px] flex-col justify-between overflow-hidden bg-[#20235A] p-8 sm:min-h-[360px] sm:p-10">
                                    <Sparkles className="h-7 w-7 text-[#D2B87C]" />

                                    <div className="relative z-10">
                                        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D2B87C]">
                                            Guest Speaker
                                        </p>

                                        <h3 className="mt-4 font-serif text-3xl leading-tight text-white sm:text-4xl">
                                            Gayathri
                                            <span className="block italic text-[#D2B87C]">
                                                Padmanabhan
                                            </span>
                                        </h3>

                                        <div className="mt-6 h-px w-14 bg-[#D2B87C]" />

                                        <p className="mt-5 text-sm leading-7 text-white/75">
                                            TEDx Speaker
                                            <br />
                                            Assistant Professor
                                        </p>
                                    </div>

                                    <div className="pointer-events-none absolute -bottom-20 -right-16 h-64 w-64 rounded-full border border-white/10" />
                                    <div className="pointer-events-none absolute -bottom-12 -right-8 h-48 w-48 rounded-full border border-white/10" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* EVENT REPORT */}
                <section className="px-5 py-20 sm:px-10 lg:px-20 lg:py-28">
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-12 max-w-3xl">
                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-px w-8 bg-[#927B4D]" />
                                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#927B4D]">
                                    Programme Overview
                                </p>
                            </div>

                            <h2 className="font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                                Learning Beyond
                                <span className="ml-2 font-serif italic text-[#927B4D]">
                                    the Classroom
                                </span>
                            </h2>
                        </div>

                        <div className="grid gap-8 lg:grid-cols-[100px_1fr] lg:gap-14">
                            <div className="hidden lg:block">
                                <p className="font-serif text-5xl text-[#D2B87C]">01</p>
                                <div className="ml-3 mt-5 h-32 w-px bg-[#D2B87C]/60" />
                            </div>

                            <div className="max-w-4xl space-y-6 text-sm leading-8 text-[#55545B] sm:text-base sm:leading-9">
                                <p>
                                    During the session, the speaker explained key concepts in an engaging and structured manner, making complex topics accessible to students. Practical examples and use cases were highlighted to demonstrate how AI and Deep Learning are transforming industries such as healthcare, finance, education, and automation.
                                </p>

                                <p>
                                    The session also emphasized the importance of skill
                                    development, ethical considerations, and continuous learning
                                    in this dynamic domain.
                                </p>

                                <p>
                                    The event witnessed enthusiastic participation from students and faculty members of the CSE (AI & ML) department. An interactive question-and-answer session allowed participants to clarify their doubts and gain deeper insights into career paths and research opportunities in AI and Deep Learning.
                                </p>

                                <p>
                                    Overall, the program was highly informative and motivating. The Cypher Association successfully achieved its objective of enhancing technical awareness and inspiring students to explore advanced technologies that are shaping the future.
                                </p>

                                <p>
                                    The session concluded with a vote of thanks, expressing gratitude to the speaker, faculty coordinators, and all participants for making the event a grand success.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* EVENT IMAGE GALLERY */}
                <section className="bg-[#20235A] px-5 py-20 sm:px-10 lg:px-20 lg:py-24">
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                            <div>
                                <div className="mb-5 flex items-center gap-3">
                                    <span className="h-px w-8 bg-[#D2B87C]" />
                                    <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#D2B87C]">
                                        Moments from the Event
                                    </p>
                                </div>

                                <h2 className="font-serif text-4xl text-white sm:text-5xl">
                                    Event
                                    <span className="ml-3 font-serif italic text-[#D2B87C]">
                                        Gallery
                                    </span>
                                </h2>
                            </div>

                            <p className="max-w-sm text-sm leading-7 text-white/60">
                                A glimpse into the Cypher Association's technical session on
                                Artificial Intelligence and Deep Learning.
                            </p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                            {eventImages.map((image, index) => (
                                <button
                                    key={image.src}
                                    type="button"
                                    onClick={() => setActiveImage(image.src)}
                                    className="group relative block w-full overflow-hidden bg-white/5 text-left"
                                    aria-label={`View event image ${index + 1} in full screen`}
                                >
                                    <div className="relative aspect-[4/3] overflow-hidden">
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="object-contain "
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-[#101225]/55 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

                                        <div className="absolute bottom-5 left-5 flex items-center gap-3">
                                            <span className="font-serif text-3xl text-white">
                                                0{index + 1}
                                            </span>
                                            <span className="h-px w-8 bg-[#D2B87C]" />
                                            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                                                Cypher 2025
                                            </span>
                                        </div>

                                        <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center border border-white/60 bg-[#20235A]/40 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                                            <Maximize2 className="h-4 w-4" />
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </section>


                {/* CYPHER 2025 INAUGURATION */}
                <section
                    id="cypher-inauguration-2025"
                    className="bg-[#FAF7F2] px-5 py-20 sm:px-10 lg:px-20 lg:py-28"
                >
                    <div className="mx-auto max-w-7xl">
                        {/* SECTION HEADING */}
                        <div className="mb-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-16">
                            <div>
                                <div className="mb-5 flex items-center gap-3">
                                    <span className="h-px w-8 bg-[#927B4D]" />
                                    <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#927B4D]">
                                        Association Activities / 2025
                                    </p>
                                </div>

                                <h2 className="font-serif text-4xl leading-tight text-[#20235A] sm:text-5xl lg:text-[58px]">
                                    CYPHER
                                    <span className="block font-serif italic text-[#927B4D]">
                                        Inauguration 2025
                                    </span>
                                </h2>

                                <div className="mt-7 h-px w-20 bg-[#D2B87C]" />
                            </div>

                            <div>
                                <p className="text-sm leading-8 text-[#55545B] sm:text-base sm:leading-9">
                                    The Department of Computer Science and Engineering (AI & ML),
                                    NCERC, organized the inauguration of CYPHER 2025, bringing
                                    together faculty members, students, and dignitaries to celebrate
                                    academic achievements and introduce the upcoming executive team
                                    of the association.
                                </p>
                            </div>
                        </div>

                        {/* EVENT DETAILS */}
                        <div className="grid overflow-hidden border-y border-[#D2B87C]/50 sm:grid-cols-3">
                            <div className="border-b border-[#D2B87C]/40 px-5 py-7 sm:border-b-0 sm:border-r">
                                <CalendarDays className="mb-4 h-5 w-5 text-[#927B4D]" />
                                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#927B4D]">
                                    Date
                                </p>
                                <p className="mt-2 font-serif text-xl text-[#20235A]">
                                    18 September 2025
                                </p>
                            </div>

                            <div className="border-b border-[#D2B87C]/40 px-5 py-7 sm:border-b-0 sm:border-r">
                                <MapPin className="mb-4 h-5 w-5 text-[#927B4D]" />
                                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#927B4D]">
                                    Venue
                                </p>
                                <p className="mt-2 font-serif text-xl text-[#20235A]">
                                    NCERC, Pampady
                                </p>
                                <p className="mt-1 text-xs leading-6 text-[#77747A]">
                                    Nehru College of Engineering and Research Centre
                                </p>
                            </div>

                            <div className="px-5 py-7">
                                <Users className="mb-4 h-5 w-5 text-[#927B4D]" />
                                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#927B4D]">
                                    Audience
                                </p>
                                <p className="mt-2 font-serif text-xl text-[#20235A]">
                                    Faculty & Students
                                </p>
                                <p className="mt-1 text-xs leading-6 text-[#77747A]">
                                    Distinguished Guests
                                </p>
                            </div>
                        </div>

                        {/* INAUGURATION REPORT */}
                        <div className="mt-16 grid gap-10 lg:grid-cols-[100px_1fr] lg:gap-14">
                            <div className="hidden lg:block">
                                <p className="font-serif text-5xl text-[#D2B87C]">01</p>
                                <div className="ml-3 mt-5 h-32 w-px bg-[#D2B87C]/60" />
                            </div>

                            <div className="max-w-4xl">
                                <div className="mb-7 flex items-center gap-3">
                                    <span className="h-px w-8 bg-[#927B4D]" />
                                    <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#927B4D]">
                                        Event Report
                                    </p>
                                </div>

                                <h3 className="mb-6 font-serif text-2xl leading-snug text-[#20235A] sm:text-3xl">
                                    Report of CYPHER Inauguration 2025
                                </h3>

                                <p className="text-sm leading-8 text-[#55545B] sm:text-base sm:leading-9">
                                    The Department of Computer Science and Engineering (AI & ML), NCERC, organized the Inauguration of CYPHER 2025. The event brought together faculty members, students, and dignitaries to celebrate academic achievements and introduce the upcoming executive team of CYPHER 2025.
                                </p>

                                <p className="mt-6 text-sm leading-8 text-[#55545B] sm:text-base sm:leading-9">
                                    The program began with the Universal Prayer: One Minute Silent Prayer in fond memory of our Founder Chairman Late Shri. P. K. Das followed by Universal Prayer. The event proceeded with a Welcome Address delivered by Dr. Sajitha A.S., Assistant Professor and Program Coordinator, CSE (AI & ML), and the traditional Lighting of the Lamp Ceremony by dignitaries.
                                </p>

                                {/* KEY ADDRESSES */}
                                <div className="mt-12 border-l-2 border-[#D2B87C] pl-6 sm:pl-8">
                                    <p className="mb-7 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#927B4D]">
                                        Key Addresses
                                    </p>

                                    <div className="space-y-7">
                                        <div>
                                            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#927B4D]">
                                                Presidential Address
                                            </p>
                                            <h4 className="mt-2 font-serif text-xl text-[#20235A]">
                                                Dr. Justin Jose
                                            </h4>
                                            <p className="mt-1 text-sm leading-7 text-[#77747A]">
                                                HoD, CSE, NCERC
                                            </p>
                                        </div>

                                        <div>
                                            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#927B4D]">
                                                Inaugural Address · Chief Guest
                                            </p>
                                            <h4 className="mt-2 font-serif text-xl text-[#20235A]">
                                                Mr. Fasalu Rahman M.
                                            </h4>
                                            <p className="mt-1 text-sm leading-7 text-[#77747A]">
                                                Co-Founder and Managing Director, Exouzia, Kerala
                                            </p>
                                        </div>

                                        <div>
                                            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#927B4D]">
                                                Felicitation Address
                                            </p>
                                            <h4 className="mt-2 font-serif text-xl text-[#20235A]">
                                                Dr. Anoop B K
                                            </h4>
                                            <p className="mt-1 text-sm leading-7 text-[#77747A]">
                                                HoD, CSE (AI & ML), NCERC
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* INAUGURATION IMAGE GALLERY */}
                        <div className="mt-20">
                            <div className="mb-9 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                                <div>
                                    <div className="mb-4 flex items-center gap-3">
                                        <span className="h-px w-8 bg-[#927B4D]" />
                                        <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#927B4D]">
                                            Event Highlights
                                        </p>
                                    </div>

                                    <h3 className="font-serif text-3xl text-[#20235A] sm:text-4xl">
                                        Inauguration
                                        <span className="ml-2 font-serif italic text-[#927B4D]">
                                            Gallery
                                        </span>
                                    </h3>
                                </div>

                                <p className="max-w-sm text-sm leading-7 text-[#77747A]">
                                    Glimpses from the CYPHER 2025 inauguration ceremony.
                                </p>
                            </div>

                            <div className="grid gap-6 md:grid-cols-2">
                                {[
                                    {
                                        src: "/images/dpt/cse_ai_ml/association/Cse_Ai_Ml_Association_img7.webp",
                                        alt: "CYPHER 2025 inauguration ceremony",
                                    },
                                    {
                                        src: "/images/dpt/cse_ai_ml/association/Cse_Ai_Ml_Association_img8.webp",
                                        alt: "CYPHER 2025 inauguration event at NCERC",
                                    },
                                ].map((image, index) => (
                                    <button
                                        key={image.src}
                                        type="button"
                                        onClick={() => setActiveImage(image.src)}
                                        aria-label={`View inauguration image ${index + 1}`}
                                        className="group relative block w-full overflow-hidden bg-[#F2EFE8] text-left"
                                    >
                                        <div className="relative aspect-[4/3] overflow-hidden">
                                            <Image
                                                src={image.src}
                                                alt={image.alt}
                                                fill
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                                className="object-contain"
                                            />

                                            <div className="absolute inset-0 bg-gradient-to-t from-[#101225]/60 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

                                            <div className="absolute bottom-5 left-5 flex items-center gap-3">
                                                <span className="font-serif text-3xl text-white">
                                                    0{index + 1}
                                                </span>
                                                <span className="h-px w-8 bg-[#D2B87C]" />
                                                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                                                    CYPHER 2025
                                                </span>
                                            </div>

                                            <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center border border-white/60 bg-[#20235A]/40 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                                                <Maximize2 className="h-4 w-4" />
                                            </div>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>


                {/* MOU SIGNING HIGHLIGHT */}
                <section
                    id="cypher-mou-signing"
                    className="bg-[#F2EFE8] px-5 py-20 sm:px-10 lg:px-20 lg:py-28"
                >
                    <div className="mx-auto max-w-7xl">
                        {/* SECTION INTRODUCTION */}
                        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20">
                            <div>
                                <div className="mb-5 flex items-center gap-3">
                                    <span className="h-px w-8 bg-[#927B4D]" />
                                    <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#927B4D]">
                                        CYPHER 2025 / Highlights
                                    </p>
                                </div>

                                <p className="mb-3 font-serif text-xl italic text-[#927B4D]">
                                    Building Industry Connections
                                </p>

                                <h2 className="font-serif text-4xl leading-tight text-[#20235A] sm:text-5xl lg:text-[58px]">
                                    MoU
                                    <span className="block font-serif italic text-[#927B4D]">
                                        Signing
                                    </span>
                                </h2>

                                <div className="mt-7 h-px w-20 bg-[#D2B87C]" />
                            </div>

                            <div>
                                <p className="text-sm leading-8 text-[#55545B] sm:text-base sm:leading-9">
                                    A Memorandum of Understanding (MoU) was signed between{" "}
                                    <strong className="font-semibold text-[#20235A]">Exouzia</strong>{" "}
                                    and{" "}
                                    <strong className="font-semibold text-[#20235A]">NCERC</strong>{" "}
                                    as part of the CSE (AI & ML) Inauguration Programme. The
                                    agreement marks a step towards strengthening industry–academia
                                    collaboration and creating meaningful learning opportunities
                                    for students.
                                </p>
                            </div>
                        </div>

                        {/* MOU DETAILS */}
                        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-16">
                            <div className="border-l-2 border-[#D2B87C] py-2 pl-6 sm:pl-8">
                                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#927B4D]">
                                    Collaboration Focus
                                </p>

                                <h3 className="mt-4 font-serif text-2xl leading-snug text-[#20235A] sm:text-3xl">
                                    Connecting Academic Learning with Industry Practice
                                </h3>

                                <p className="mt-5 text-sm leading-8 text-[#55545B] sm:text-base sm:leading-9">
                                    The MoU aims to strengthen industry–academia collaboration by promoting skill development, technical training, workshops, internships, and project mentoring for students.
                                </p>
                            </div>

                            <div className="relative overflow-hidden bg-[#20235A] px-7 py-9 sm:px-10 sm:py-10">
                                <div className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full border border-white/10" />
                                <div className="pointer-events-none absolute -right-8 -top-12 h-40 w-40 rounded-full border border-white/10" />

                                <div className="relative z-10">
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                        Key Areas of Collaboration
                                    </p>

                                    <div className="mt-7 grid grid-cols-2 gap-x-6 gap-y-7">
                                        {[
                                            "Skill Development",
                                            "Technical Training",
                                            "Workshops",
                                            "Internships",
                                            "Project Mentoring",
                                        ].map((item, index) => (
                                            <div key={item} className="flex items-start gap-3">
                                                <span className="mt-1 font-serif text-sm text-[#D2B87C]">
                                                    0{index + 1}
                                                </span>
                                                <p className="text-sm leading-6 text-white/85">{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* COLLABORATION STATEMENT */}
                        <div className="mt-14 border-y border-[#D2B87C]/50 py-8">
                            <p className="mx-auto max-w-4xl text-center font-serif text-xl leading-relaxed text-[#20235A] sm:text-2xl">
                                "A shared commitment to enhancing industry-relevant learning and
                                preparing students for real-world technological challenges."
                            </p>
                        </div>

                        {/* MOU IMAGE GALLERY */}
                        <div className="mt-16">
                            <div className="mb-9 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                                <div>
                                    <div className="mb-4 flex items-center gap-3">
                                        <span className="h-px w-8 bg-[#927B4D]" />
                                        <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#927B4D]">
                                            Partnership Moments
                                        </p>
                                    </div>

                                    <h3 className="font-serif text-3xl text-[#20235A] sm:text-4xl">
                                        MoU Signing
                                        <span className="ml-2 font-serif italic text-[#927B4D]">
                                            Gallery
                                        </span>
                                    </h3>
                                </div>

                                <p className="max-w-sm text-sm leading-7 text-[#77747A]">
                                    Glimpses from the collaboration between Exouzia and NCERC.
                                </p>
                            </div>

                            <div className="grid gap-6 md:grid-cols-2">
                                {[
                                    {
                                        src: "/images/dpt/cse_ai_ml/association/Cse_Ai_Ml_Association_img8.webp",
                                        alt: "MoU signing between Exouzia and NCERC",
                                    },
                                    {
                                        src: "/images/dpt/cse_ai_ml/association/Cse_Ai_Ml_Association_img9.webp",
                                        alt: "Exouzia and NCERC representatives during the MoU signing",
                                    },
                                ].map((image, index) => (
                                    <button
                                        key={image.src}
                                        type="button"
                                        onClick={() => setActiveImage(image.src)}
                                        aria-label={`View MoU signing image ${index + 1}`}
                                        className="group relative block w-full overflow-hidden bg-white/50 text-left"
                                    >
                                        <div className="relative aspect-[4/3] overflow-hidden">
                                            <Image
                                                src={image.src}
                                                alt={image.alt}
                                                fill
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                                className="object-contain "
                                            />

                                            <div className="absolute inset-0 bg-gradient-to-t from-[#101225]/60 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

                                            <div className="absolute bottom-5 left-5 flex items-center gap-3">
                                                <span className="font-serif text-3xl text-white">
                                                    0{index + 1}
                                                </span>
                                                <span className="h-px w-8 bg-[#D2B87C]" />
                                                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                                                    Exouzia × NCERC
                                                </span>
                                            </div>

                                            <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center border border-white/60 bg-[#20235A]/40 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                                                <Maximize2 className="h-4 w-4" />
                                            </div>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>


                {/* INAUGURAL CEREMONY IMAGE GALLERY */}

                <section
                    id="inaugural-ceremony"
                    className="bg-[#FAF7F2] px-5 py-20 sm:px-10 lg:px-20 lg:py-24"
                >
                    <div className="mx-auto max-w-7xl">
                        {/* SECTION HEADING */}
                        <div className="mb-14 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                            <div>
                                <div className="mb-5 flex items-center gap-3">
                                    <span className="h-px w-8 bg-[#927B4D]" />
                                    <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#927B4D]">
                                        CYPHER 2025 / Event Highlights
                                    </p>
                                </div>

                                <h2 className="font-serif text-4xl leading-tight text-[#20235A] sm:text-5xl lg:text-6xl">
                                    Inaugural
                                    <span className="ml-3 font-serif italic text-[#927B4D]">
                                        Ceremony
                                    </span>
                                </h2>

                                <div className="mt-6 h-px w-20 bg-[#D2B87C]" />
                            </div>

                            <p className="max-w-sm text-sm leading-7 text-[#77747A]">
                                Glimpses from the CYPHER 2025 inauguration ceremony at NCERC.
                            </p>
                        </div>

                        {/* ZIGZAG IMAGE GALLERY */}
                        <div className="space-y-6 md:space-y-8">

                            {/* ROW 1 - LARGE LEFT / SMALL RIGHT */}
                            <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-[7fr_3fr] md:gap-8">

                                {/* IMAGE 1 - LARGE */}
                                <button
                                    type="button"
                                    onClick={() =>
                                        setActiveImage(
                                            "/images/dpt/cse_ai_ml/association/Cse_Ai_Ml_Association_img12.webp"
                                        )
                                    }
                                    aria-label="View inaugural ceremony image 1"
                                    className="group relative block w-full overflow-hidden bg-[#F2EFE8] text-left"
                                >
                                    <div className="relative aspect-[16/9] overflow-hidden">
                                        <Image
                                            src="/images/dpt/cse_ai_ml/association/Cse_Ai_Ml_Association_img12.webp"
                                            alt="CYPHER 2025 inaugural ceremony - Photograph 1"
                                            fill
                                            sizes="(max-width: 768px) 100vw, 70vw"
                                            className="object-cover"
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-[#101225]/60 via-transparent to-transparent" />

                                        <div className="absolute bottom-5 left-5 flex items-center gap-3">
                                            <span className="font-serif text-3xl text-white">01</span>
                                            <span className="h-px w-8 bg-[#D2B87C]" />
                                            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                                                Inaugural Ceremony
                                            </span>
                                        </div>

                                        <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center border border-white/60 bg-[#20235A]/40 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                                            <Maximize2 className="h-4 w-4" />
                                        </div>
                                    </div>
                                </button>

                                {/* IMAGE 2 - SMALL */}
                                <button
                                    type="button"
                                    onClick={() =>
                                        setActiveImage(
                                            "/images/dpt/cse_ai_ml/association/Cse_Ai_Ml_Association_img14.webp"
                                        )
                                    }
                                    aria-label="View inaugural ceremony image 2"
                                    className="group relative block w-full overflow-hidden bg-[#F2EFE8] text-left"
                                >
                                    <div className="relative h-full min-h-[230px] aspect-[4/3] md:aspect-auto">
                                        <Image
                                            src="/images/dpt/cse_ai_ml/association/Cse_Ai_Ml_Association_img14.webp"
                                            alt="CYPHER 2025 inaugural ceremony - Photograph 2"
                                            fill
                                            sizes="(max-width: 768px) 100vw, 30vw"
                                            className="object-contain "
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-[#101225]/60 via-transparent to-transparent" />

                                        <div className="absolute bottom-5 left-5 flex items-center gap-3">
                                            <span className="font-serif text-3xl text-white">02</span>
                                            <span className="h-px w-6 bg-[#D2B87C]" />
                                        </div>

                                        <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center border border-white/60 bg-[#20235A]/40 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                                            <Maximize2 className="h-4 w-4" />
                                        </div>
                                    </div>
                                </button>
                            </div>

                            {/* ROW 2 - SMALL LEFT / LARGE RIGHT */}
                            <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-[3fr_7fr] md:gap-8">

                                {/* IMAGE 3 - SMALL */}
                                <button
                                    type="button"
                                    onClick={() =>
                                        setActiveImage(
                                            "/images/dpt/cse_ai_ml/association/Cse_Ai_Ml_Association_img11.webp"
                                        )
                                    }
                                    aria-label="View inaugural ceremony image 3"
                                    className="group relative block w-full overflow-hidden bg-[#F2EFE8] text-left"
                                >
                                    <div className="relative h-full min-h-[230px] aspect-[4/3] md:aspect-auto">
                                        <Image
                                            src="/images/dpt/cse_ai_ml/association/Cse_Ai_Ml_Association_img11.webp"
                                            alt="CYPHER 2025 inaugural ceremony - Photograph 3"
                                            fill
                                            sizes="(max-width: 768px) 100vw, 30vw"
                                            className="object-contain "
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-[#101225]/60 via-transparent to-transparent" />

                                        <div className="absolute bottom-5 left-5 flex items-center gap-3">
                                            <span className="font-serif text-3xl text-white">03</span>
                                            <span className="h-px w-6 bg-[#D2B87C]" />
                                        </div>

                                        <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center border border-white/60 bg-[#20235A]/40 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                                            <Maximize2 className="h-4 w-4" />
                                        </div>
                                    </div>
                                </button>

                                {/* IMAGE 4 - LARGE */}
                                <button
                                    type="button"
                                    onClick={() =>
                                        setActiveImage(
                                            "/images/dpt/cse_ai_ml/association/Cse_Ai_Ml_Association_img13.webp"
                                        )
                                    }
                                    aria-label="View inaugural ceremony image 4"
                                    className="group relative block w-full overflow-hidden bg-[#F2EFE8] text-left"
                                >
                                    <div className="relative aspect-[16/9] overflow-hidden">
                                        <Image
                                            src="/images/dpt/cse_ai_ml/association/Cse_Ai_Ml_Association_img13.webp"
                                            alt="CYPHER 2025 inaugural ceremony - Photograph 4"
                                            fill
                                            sizes="(max-width: 768px) 100vw, 70vw"
                                            className="object-cover "
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-[#101225]/60 via-transparent to-transparent" />

                                        <div className="absolute bottom-5 left-5 flex items-center gap-3">
                                            <span className="font-serif text-3xl text-white">04</span>
                                            <span className="h-px w-8 bg-[#D2B87C]" />
                                            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                                                Inaugural Ceremony
                                            </span>
                                        </div>

                                        <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center border border-white/60 bg-[#20235A]/40 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                                            <Maximize2 className="h-4 w-4" />
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* INTRODUCTION OF NEW EXE-COM MEMBERS & AI WORKSHOP */}
                <section
                    id="ai-tools-workshop"
                    className="bg-[#FAF7F2] px-5 py-20 sm:px-10 lg:px-20 lg:py-24"
                >
                    <div className="mx-auto max-w-7xl">

                        {/* SECTION HEADING */}
                        <div className="mb-14 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                            <div>
                                <div className="mb-5 flex items-center gap-3">
                                    <span className="h-px w-8 bg-[#927B4D]" />
                                    <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#927B4D]">
                                        CYPHER 2025 / Event Highlights
                                    </p>
                                </div>

                                <h2 className="font-serif text-4xl leading-tight text-[#20235A] sm:text-5xl lg:text-6xl">
                                    Introduction to New
                                    <span className="ml-3 font-serif italic text-[#927B4D]">
                                        EXE-COM Members
                                    </span>
                                </h2>

                                <div className="mt-6 h-px w-20 bg-[#D2B87C]" />

                                <h3 className="mt-8 font-serif text-2xl leading-tight text-[#20235A] sm:text-3xl">
                                    Workshop Session – Artificial Intelligence Tools
                                </h3>
                            </div>

                            <p className="max-w-sm text-sm leading-7 text-[#77747A]">
                                A hands-on workshop exploring the practical applications
                                of artificial intelligence tools and their role in modern
                                technological practices.
                            </p>
                        </div>

                        {/* WORKSHOP REPORT */}
                        <div className="mb-16  space-y-6 text-justify text-sm leading-8 text-[#66636A] sm:text-[15px]">

                            <p>
                                As part of the CSE (AI&ML) Inauguration Program, a comprehensive
                                workshop titled “Artificial Intelligence Tools: A Comprehensive
                                Workshop” was conducted by Mr. Muhammed Irfan M, Co-Founder &
                                Chief Executive Officer of Exouzia. The session aimed to provide
                                students with a deeper understanding of the role of artificial
                                intelligence tools in modern technological practices and their
                                growing importance in industry-oriented learning.
                            </p>

                            <p>
                                Mr. Irfan began the workshop by highlighting how artificial
                                intelligence is rapidly transforming various domains and
                                reshaping the way academic knowledge is applied in real-world
                                scenarios. He emphasized that while strong fundamentals in
                                programming and computer science remain essential, the effective
                                adoption of AI-powered tools has become equally important for
                                improving efficiency, creativity, problem-solving capabilities,
                                and innovation. He encouraged students to leverage these tools
                                as intelligent assistants that can support learning, development,
                                and experimentation.
                            </p>

                            <p>
                                The workshop included live demonstrations of several contemporary
                                AI applications and platforms, showcasing their practical usage
                                in areas such as software development, project implementation,
                                research activities, data analysis, and routine technical tasks.
                                Mr. Irfan explained how students can integrate AI tools into
                                their academic projects to enhance quality, accuracy, and
                                productivity, while also gaining exposure to industry-relevant
                                workflows.
                            </p>

                            <p>
                                A key focus of the session was the importance of hands-on
                                experience with AI environments. Mr. Irfan stressed that
                                practical exposure to AI tools and frameworks provides learners
                                with valuable real-world experience and prepares them to meet
                                evolving industry expectations. He also discussed emerging
                                trends in artificial intelligence and urged students to stay
                                updated by continuously exploring new technologies, platforms,
                                and frameworks.
                            </p>

                            <p>
                                Concluding the session, Mr. Irfan advised students to actively
                                incorporate artificial intelligence into their skill development
                                journey and to focus on building meaningful, impactful solutions
                                that address real-world challenges. The workshop was highly
                                interactive and engaging, enabling students to gain valuable
                                insights into the effective use of artificial intelligence tools
                                and their significance in shaping a successful professional future.
                            </p>

                            {/* CLOSING NOTE */}
                            <div className="mt-8 border-l-2 border-[#D2B87C] bg-[#F2EFE8] px-6 py-5">
                                <p className="text-sm font-medium leading-7 text-[#20235A]">
                                    The session concluded with refreshments and lunch.
                                </p>
                            </div>
                        </div>

                        {/* IMAGE GALLERY */}
                        <div className="space-y-6 md:space-y-8">

                            {/* IMAGE 1 - FULL WIDTH */}
                            <button
                                type="button"
                                onClick={() =>
                                    setActiveImage(
                                        "/images/dpt/cse_ai_ml/association/Cse_Ai_Ml_Association_img15.webp"
                                    )
                                }
                                aria-label="View workshop image 1"
                                className="group relative block w-full overflow-hidden bg-[#F2EFE8] text-left"
                            >
                                <div className="relative aspect-[16/8] overflow-hidden sm:aspect-[16/7]">
                                    <Image
                                        src="/images/dpt/cse_ai_ml/association/Cse_Ai_Ml_Association_img15.webp"
                                        alt="Introduction of new EXE-COM members"
                                        fill
                                        sizes="100vw"
                                        className="object-cover "
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#101225]/60 via-transparent to-transparent" />

                                    <div className="absolute bottom-5 left-5 flex items-center gap-3">
                                        <span className="font-serif text-3xl text-white">01</span>
                                        <span className="h-px w-8 bg-[#D2B87C]" />
                                        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                                            EXE-COM Members
                                        </span>
                                    </div>

                                    <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center border border-white/60 bg-[#20235A]/40 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                                        <Maximize2 className="h-4 w-4" />
                                    </div>
                                </div>
                            </button>

                            {/* IMAGE 2 - FULL WIDTH */}
                            <button
                                type="button"
                                onClick={() =>
                                    setActiveImage(
                                        "/images/dpt/cse_ai_ml/association/Cse_Ai_Ml_Association_img16.webp"
                                    )
                                }
                                aria-label="View workshop image 2"
                                className="group relative block w-full overflow-hidden bg-[#F2EFE8] text-left"
                            >
                                <div className="relative aspect-[16/8] overflow-hidden sm:aspect-[16/7]">
                                    <Image
                                        src="/images/dpt/cse_ai_ml/association/Cse_Ai_Ml_Association_img16.webp"
                                        alt="Artificial Intelligence Tools workshop session"
                                        fill
                                        sizes="100vw"
                                        className="object-cover "
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#101225]/60 via-transparent to-transparent" />

                                    <div className="absolute bottom-5 left-5 flex items-center gap-3">
                                        <span className="font-serif text-3xl text-white">02</span>
                                        <span className="h-px w-8 bg-[#D2B87C]" />
                                        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                                            AI Tools Workshop
                                        </span>
                                    </div>

                                    <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center border border-white/60 bg-[#20235A]/40 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                                        <Maximize2 className="h-4 w-4" />
                                    </div>
                                </div>
                            </button>

                            {/* ROW 3 - LARGE LEFT / SMALL RIGHT */}
                            <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-[7fr_3fr] md:gap-8">

                                {/* IMAGE 3 - 70% WIDTH */}
                                <button
                                    type="button"
                                    onClick={() =>
                                        setActiveImage(
                                            "/images/dpt/cse_ai_ml/association/Cse_Ai_Ml_Association_img17.webp"
                                        )
                                    }
                                    aria-label="View workshop image 3"
                                    className="group relative block w-full overflow-hidden bg-[#F2EFE8] text-left"
                                >
                                    <div className="relative aspect-[16/9] overflow-hidden">
                                        <Image
                                            src="/images/dpt/cse_ai_ml/association/Cse_Ai_Ml_Association_img17.webp"
                                            alt="Students attending the Artificial Intelligence Tools workshop"
                                            fill
                                            sizes="(max-width: 768px) 100vw, 70vw"
                                            className="object-cover "
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-[#101225]/60 via-transparent to-transparent" />

                                        <div className="absolute bottom-5 left-5 flex items-center gap-3">
                                            <span className="font-serif text-3xl text-white">03</span>
                                            <span className="h-px w-8 bg-[#D2B87C]" />
                                            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                                                Practical Learning
                                            </span>
                                        </div>

                                        <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center border border-white/60 bg-[#20235A]/40 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                                            <Maximize2 className="h-4 w-4" />
                                        </div>
                                    </div>
                                </button>

                                {/* IMAGE 4 - 30% WIDTH */}
                                <button
                                    type="button"
                                    onClick={() =>
                                        setActiveImage(
                                            "/images/dpt/cse_ai_ml/association/Cse_Ai_Ml_Association_img18.webp"
                                        )
                                    }
                                    aria-label="View workshop image 4"
                                    className="group relative block w-full overflow-hidden bg-[#F2EFE8] text-left"
                                >
                                    <div className="relative h-full min-h-[230px] aspect-[4/3] md:aspect-auto">
                                        <Image
                                            src="/images/dpt/cse_ai_ml/association/Cse_Ai_Ml_Association_img18.webp"
                                            alt="Workshop participants and resource person"
                                            fill
                                            sizes="(max-width: 768px) 100vw, 30vw"
                                            className="object-cover "
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-[#101225]/60 via-transparent to-transparent" />

                                        <div className="absolute bottom-5 left-5 flex items-center gap-3">
                                            <span className="font-serif text-3xl text-white">04</span>
                                            <span className="h-px w-6 bg-[#D2B87C]" />
                                        </div>

                                        <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center border border-white/60 bg-[#20235A]/40 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                                            <Maximize2 className="h-4 w-4" />
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>



            </main>

            {/* FULL-SCREEN IMAGE MODAL */}
            {activeImage && (
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#101225]/95 p-4 backdrop-blur-sm sm:p-8"
                    onClick={() => setActiveImage(null)}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Event image preview"
                >
                    <button
                        type="button"
                        onClick={() => setActiveImage(null)}
                        className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center border border-white/30 text-white transition-colors hover:bg-white hover:text-[#20235A]"
                        aria-label="Close image preview"
                    >
                        <X className="h-5 w-5" />
                    </button>

                    <div
                        className="relative h-[80vh] w-full max-w-6xl"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <Image
                            src={activeImage}
                            alt="Cypher 2025 event photograph"
                            fill
                            sizes="100vw"
                            className="object-contain"
                        />
                    </div>
                </div>
            )}

            <FooterSection />
        </>
    );
}
