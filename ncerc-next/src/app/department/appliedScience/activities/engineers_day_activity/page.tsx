
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import DepartmentNavigation from "../../departmentnavigation/DepartmentNavigation";
import {
    ArrowRight,
    CalendarDays,
    Lightbulb,
    Brain,
    Code2,
    Trophy,
    X,
    ChevronLeft,
    ChevronRight,
    Maximize2,
} from "lucide-react";

export default function EngineersDayPage() {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    const eventImages = [
        {
            src: "/images/dpt/applied_science_and_humanities/activities/Ash_Activities_img19.webp",
            alt: "Engineer's Day celebration at NCERC - Photograph 1",
        },
        {
            src: "/images/dpt/applied_science_and_humanities/activities/Ash_Activities_img20.webp",
            alt: "Engineer's Day celebration at NCERC - Photograph 2",
        },
        {
            src: "/images/dpt/applied_science_and_humanities/activities/Ash_Activities_img21.webp",
            alt: "Engineer's Day celebration at NCERC - Photograph 3",
        },
        {
            src: "/images/dpt/applied_science_and_humanities/activities/Ash_Activities_img22.webp",
            alt: "Engineer's Day celebration at NCERC - Photograph 4",
        },
        {
            src: "/images/dpt/applied_science_and_humanities/activities/Ash_Activities_img23.webp",
            alt: "Engineer's Day celebration at NCERC - Photograph 5",
        },
        {
            src: "/images/dpt/applied_science_and_humanities/activities/Ash_Activities_img24.webp",
            alt: "Engineer's Day celebration at NCERC - Photograph 6",
        },
        {
            src: "/images/dpt/applied_science_and_humanities/activities/Ash_Activities_img25.webp",
            alt: "Engineer's Day celebration at NCERC - Photograph 7",
        },
        {
            src: "/images/dpt/applied_science_and_humanities/activities/Ash_Activities_img26.webp",
            alt: "Engineer's Day celebration at NCERC - Photograph 8",
        },
    ];

    const competitions = [
        {
            number: "01",
            title: "Make the Bridge",
            description:
                "A creative challenge encouraging students to apply engineering concepts, practical thinking and teamwork.",
            icon: Lightbulb,
        },
        {
            number: "02",
            title: "Ideathon",
            description:
                "A platform for students to present innovative ideas and explore creative solutions to real-world challenges.",
            icon: Brain,
        },
        {
            number: "03",
            title: "Quiz Competition",
            description:
                "An opportunity for first-year students to demonstrate their knowledge, curiosity and scientific thinking.",
            icon: Trophy,
        },
        {
            number: "04",
            title: "Poster Making",
            description:
                "A creative competition that allowed students to communicate ideas through visual expression and design.",
            icon: Code2,
        },
    ];

    const closeLightbox = () => setSelectedImage(null);

    const showPreviousImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();

        setSelectedImage((current) =>
            current === null
                ? null
                : (current - 1 + eventImages.length) % eventImages.length
        );
    };

    const showNextImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();

        setSelectedImage((current) =>
            current === null
                ? null
                : (current + 1) % eventImages.length
        );
    };

    useEffect(() => {
        if (selectedImage === null) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                closeLightbox();
            }

            if (event.key === "ArrowLeft") {
                setSelectedImage((current) =>
                    current === null
                        ? null
                        : (current - 1 + eventImages.length) % eventImages.length
                );
            }

            if (event.key === "ArrowRight") {
                setSelectedImage((current) =>
                    current === null
                        ? null
                        : (current + 1) % eventImages.length
                );
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [selectedImage, eventImages.length]);

    return (
        <>
            <SiteHeader />

            <main className="min-h-screen bg-[#FAF9F6] [&_p]:text-justify">

                {/* HERO SECTION */}
                <section className="relative overflow-hidden bg-[#20235A] text-[#FAF7F2]">
                    <div className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full border border-[#D2B87C]/15" />
                    <div className="pointer-events-none absolute -right-10 -top-14 h-52 w-52 rounded-full border border-[#D2B87C]/20" />
                    <div className="pointer-events-none absolute -bottom-32 left-[42%] h-64 w-64 rounded-full border border-[#D2B87C]/10" />

                    <div className="relative mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
                        <div className="max-w-4xl">
                            <p className="mb-5 text-xs font-medium uppercase tracking-[0.24em] text-[#D2B87C]">
                                Applied Science & Humanities · 2026
                            </p>

                            <h1 className="font-serif text-4xl font-normal leading-tight sm:text-5xl lg:text-6xl">
                                Engineer’s Day
                                <span className="mt-2 block text-[#D2B87C]">
                                    Celebration
                                </span>
                            </h1>

                            <p className="mt-7 max-w-2xl text-base leading-8 text-[#FAF7F2]/75 sm:text-lg">
                                Celebrating engineering excellence,
                                innovation and the spirit of creativity
                                through student activities and competitions.
                            </p>

                            <div className="mt-9 flex flex-wrap items-center gap-3 text-sm text-[#FAF7F2]/75">
                                <CalendarDays
                                    size={17}
                                    className="text-[#D2B87C]"
                                    strokeWidth={1.5}
                                />
                                16 September 2026
                            </div>

                            <div className="mt-9 h-px w-24 bg-[#D2B87C]" />
                        </div>
                    </div>
                </section>

                <DepartmentNavigation />

                {/* ABOUT THE CELEBRATION */}
                <section
                    id="engineers-day-overview"
                    className="bg-[#FAF9F6] px-6 py-14 sm:px-8 lg:px-10 lg:py-20"
                >
                    <div className="mx-auto max-w-[1440px]">
                        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                            <div>
                                <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-[#927B4D]">
                                    16 September 2026
                                </p>

                                <h2 className="font-serif text-3xl font-normal leading-tight text-[#20235A] sm:text-4xl lg:text-[42px]">
                                    Honouring Engineering,
                                    <span className="block text-[#927B4D]">
                                        Inspiring Innovation
                                    </span>
                                </h2>

                                <div className="mt-8 h-px w-20 bg-[#D2B87C]" />

                                <p className="mt-5 text-sm leading-7 text-[#777780]">
                                    Department of Applied Science and
                                    Humanities
                                    <span className="mt-1 block text-[#20235A]">
                                        Nehru College of Engineering and
                                        Research Centre
                                    </span>
                                </p>
                            </div>

                            <div className="space-y-6 text-[15px] leading-8 text-[#62626B]">
                                <p>
                                    The Department of Applied Science and
                                    Humanities, NCERC, celebrated
                                    <span className="text-[#20235A]">
                                        {" "}Engineer’s Day on 16th September
                                        2026.
                                    </span>{" "}
                                    The programme was organized to commemorate the contributions of Engineers to society and to encourage innovation, creativity, scientific thinking and problem solving among students.  The celebration also marked the inauguration of the Science, Mathematics, Literature and Coding clubs.
                                </p>


                                <p>
                                    As a part of the celebration, various competitions were organized to provide first year students with opportunities to showcase their knowledge, creativity, teamwork and innovative ideas. The major events included the make the bridge competition, Ideathon, Quiz competition and poster making competition.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

              
          
                {/* EVENT GALLERY */}
                <section
                    id="engineers-day-gallery"
                    className="bg-[#FAF9F6] px-6 py-14 sm:px-8 lg:px-10 lg:py-20"
                >
                    <div className="mx-auto max-w-[1440px]">
                        <div className="mb-9 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                            <div>
                                <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-[#927B4D]">
                                    Event Gallery · 16 September 2026
                                </p>

                                <h2 className="font-serif text-3xl font-normal leading-tight text-[#20235A] sm:text-4xl lg:text-[42px]">
                                    Glimpses of Engineer’s Day
                                </h2>
                            </div>

                            <p className="max-w-sm text-sm leading-7 text-[#777780]">
                                Moments from the celebration and student
                                competitions at NCERC.
                            </p>
                        </div>

                        {/* IMAGE GRID */}
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                            {eventImages.map((image, index) => (
                                <button
                                    key={image.src}
                                    type="button"
                                    onClick={() => setSelectedImage(index)}
                                    aria-label={`View full-screen image ${index + 1}`}
                                    className="group relative aspect-[4/3] w-full cursor-zoom-in overflow-hidden bg-[#F2EFE8] text-left"
                                >
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                        className="object-contain "
                                    />

                                    <div className="absolute inset-0 bg-[#20235A]/0 transition-colors duration-300 group-hover:bg-[#20235A]/20" />

                                    <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center bg-[#20235A]/75 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                        <Maximize2 size={16} />
                                    </div>

                                    <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-[#20235A]/75 to-transparent px-4 pb-4 pt-12">
                                        <span className="text-xs uppercase tracking-[0.12em] text-white">
                                            Engineer’s Day
                                        </span>

                                        <span className="text-xs text-white/80">
                                            {String(index + 1).padStart(2, "0")} / 08
                                        </span>
                                    </div>
                                </button>
                            ))}
                        </div>

                        <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-[#D2B87C]/50 pt-4">
                            <p className="text-xs uppercase tracking-[0.16em] text-[#927B4D]">
                                Applied Science & Humanities
                            </p>

                            <p className="text-xs text-[#777780]">
                                Engineer’s Day · 2026
                            </p>
                        </div>
                    </div>
                </section>

                {/* BACK TO ACTIVITIES */}
                {/* <section className="bg-[#F2EFE8] px-6 py-10 sm:px-8 lg:px-10">
                    <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-5">
                        <div>
                            <p className="font-serif text-xl text-[#20235A]">
                                Explore more department activities
                            </p>
                            <p className="mt-1 text-sm text-[#777780]">
                                Discover more events and initiatives at NCERC.
                            </p>
                        </div>

                        <Link
                            href="/department/applied-science-and-humanities/activities"
                            className="inline-flex items-center gap-3 border border-[#20235A]/20 px-5 py-3 text-sm text-[#20235A] transition-colors hover:border-[#20235A] hover:bg-[#20235A] hover:text-white"
                        >
                            All Activities
                            <ArrowRight size={16} />
                        </Link>
                    </div>
                </section> */}
            </main>

            <FooterSection />

            {/* FULL-SCREEN IMAGE LIGHTBOX */}
            {selectedImage !== null && (
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#10101A]/95 px-4 py-16 backdrop-blur-sm sm:px-10"
                    onClick={closeLightbox}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Full-screen event image viewer"
                >
                    {/* CLOSE BUTTON */}
                    <button
                        type="button"
                        onClick={closeLightbox}
                        aria-label="Close image viewer"
                        className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-8 sm:top-7"
                    >
                        <X size={22} />
                    </button>

                    {/* IMAGE COUNTER */}
                    <div className="absolute left-5 top-7 z-20 text-xs tracking-[0.18em] text-white/70 sm:left-10">
                        {String(selectedImage + 1).padStart(2, "0")}
                        <span className="mx-2 text-[#D2B87C]">/</span>
                        {String(eventImages.length).padStart(2, "0")}
                    </div>

                    {/* PREVIOUS BUTTON */}
                    <button
                        type="button"
                        onClick={showPreviousImage}
                        aria-label="Previous image"
                        className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-8 sm:h-14 sm:w-14"
                    >
                        <ChevronLeft size={27} strokeWidth={1.5} />
                    </button>

                    {/* SELECTED IMAGE */}
                    <div
                        className="relative h-full max-h-[78vh] w-full max-w-[1200px]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={eventImages[selectedImage].src}
                            alt={eventImages[selectedImage].alt}
                            fill
                            priority
                            sizes="100vw"
                            className="object-contain"
                        />
                    </div>

                    {/* NEXT BUTTON */}
                    <button
                        type="button"
                        onClick={showNextImage}
                        aria-label="Next image"
                        className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-8 sm:h-14 sm:w-14"
                    >
                        <ChevronRight size={27} strokeWidth={1.5} />
                    </button>

                    {/* IMAGE CAPTION */}
                    <div className="absolute bottom-5 left-0 right-0 px-16 text-center sm:bottom-7">
                        <p className="text-xs uppercase tracking-[0.18em] text-white/80">
                            {eventImages[selectedImage].alt}
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}
