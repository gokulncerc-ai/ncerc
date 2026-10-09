"use client";

import React, { useEffect, useState } from "react";
import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import DepartmentNavigation from "../departmentnavigation/page";

import {
    ArrowRight,
    ArrowUpRight,
    Award,
    ChevronLeft,
    ChevronRight,
    GraduationCap,
    Medal,
    Sparkles,
    Trophy,
    X,
} from "lucide-react";

type Achievement = {
    id: number;
    title: string;
    caption: string;
    image: string;
    featured?: boolean;
    description?: string;
};

const achievements: Achievement[] = [
    {
        id: 1,
        title: "Achievements - Toppers",
        caption: "Academic Excellence",
        image:
            "https://ncerc.ac.in/applied-science-and-humanities/img/achievements/Toppers%20ASH%201%20copy.webp",
        featured: true,
    },
    {
        id: 2,
        title: "Achievements - Toppers",
        caption: "Academic Excellence",
        image:
            "https://ncerc.ac.in/applied-science-and-humanities/img/achievements/Toppers%20ASH%202%20copy.webp",
    },
    {
        id: 3,
        title: "Achievements - Toppers",
        caption: "Academic Excellence",
        image:
            "https://ncerc.ac.in/applied-science-and-humanities/img/achievements/Toppers%20ASH%203%20copy.webp",
    },
    {
        id: 4,
        title: "Achievements - Toppers",
        caption: "Academic Excellence",
        image:
            "https://ncerc.ac.in/applied-science-and-humanities/img/achievements/Toppers%20ASH%204%20copy.webp",
    },
    {
        id: 5,
        title: "Achievements - Toppers",
        caption: "Academic Excellence",
        image:
            "https://ncerc.ac.in/applied-science-and-humanities/img/achievements/Toppers%20ASH%205%20copy.webp",
    },
    {
        id: 6,
        title: "Achievements - Toppers",
        caption: "Academic Excellence",
        image:
            "https://ncerc.ac.in/applied-science-and-humanities/img/achievements/Toppers%20ASH%206%20copy.webp",
    },
    {
        id: 7,
        title: "Achievements - Toppers",
        caption: "Academic Excellence",
        image:
            "https://ncerc.ac.in/applied-science-and-humanities/img/achievements/Toppers%20ASH%207%20copy.webp",
    },
    {
        id: 8,
        title: "Congratulations to our S2 ECE Toppers!",
        caption: "S2 ECE Academic Achievement",
        image:
            "https://ncerc.ac.in/applied-science-and-humanities/img/achievements/Topper-S2-ASH-ECE.webp",
        description:
            "Congratulations to our S2 ECE Toppers! Your outstanding academic performance is a reflection of hard work, dedication, and excellence. We are proud of your remarkable achievement and wish you continued success in all your future endeavors.",
    },
    {
        id: 9,
        title: "Perfect SGPA 10 Achievement",
        caption: "S2 Results — CSE",
        image:
            "https://ncerc.ac.in/applied-science-and-humanities/img/achievements/Topper-S2-ASH.webp",
        description:
            "Congratulations to M Shreya (CSE) on achieving a perfect SGPA 10 in the S2 Results! Your hard work and dedication have truly paid off. Wishing you continued success in all your future endeavors.",
        featured: true,
    },
    {
        id: 10,
        title: "Electrical & Computer Engineering S1 Results",
        caption: "Academic Achievement",
        image:
            "https://ncerc.ac.in/applied-science-and-humanities/img/achievements/Achievments-Electrical-Comp-Engineering-S1-Results.jpg",
    },
];

const page = () => {
    const [selectedAchievement, setSelectedAchievement] =
        useState<Achievement | null>(null);

    const [selectedIndex, setSelectedIndex] = useState(0);

    const openAchievement = (achievement: Achievement, index: number) => {
        setSelectedAchievement(achievement);
        setSelectedIndex(index);
    };

    const closeAchievement = () => {
        setSelectedAchievement(null);
    };

    const showPrevious = () => {
        const previousIndex =
            (selectedIndex - 1 + achievements.length) % achievements.length;

        setSelectedIndex(previousIndex);
        setSelectedAchievement(achievements[previousIndex]);
    };

    const showNext = () => {
        const nextIndex = (selectedIndex + 1) % achievements.length;

        setSelectedIndex(nextIndex);
        setSelectedAchievement(achievements[nextIndex]);
    };

    useEffect(() => {
        if (!selectedAchievement) {
            document.body.style.overflow = "";
            return;
        }

        document.body.style.overflow = "hidden";

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                closeAchievement();
            }

            if (event.key === "ArrowLeft") {
                showPrevious();
            }

            if (event.key === "ArrowRight") {
                showNext();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [selectedAchievement, selectedIndex]);

    return (
        <>
            <SiteHeader />

            <main className="bg-[#FAF7F2] text-[#1E1917]">
                {/* =========================================================
            HERO
        ========================================================== */}
                <section className="relative overflow-hidden bg-[#20235A]">
                    <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border border-[#D2B87C]/20" />
                    <div className="absolute -right-10 -top-10 h-52 w-52 rounded-full border border-[#D2B87C]/10" />

                    <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
                        <div className="grid items-end gap-14 lg:grid-cols-[1.25fr_0.75fr]">
                            <div>
                                <div className="mb-8 flex items-center gap-4">
                                    <span className="h-px w-12 bg-[#D2B87C]" />
                                    <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D2B87C]">
                                        Applied Science & Humanities
                                    </span>
                                </div>

                                <h1 className="max-w-4xl font-serif text-[46px] leading-[0.98] tracking-[-0.035em] text-white sm:text-[60px] lg:text-[72px] xl:text-[80px]">
                                    Celebrating
                                    <span className="block text-[#D2B87C]">Academic Excellence.</span>
                                </h1>

                                <p className="mt-8 max-w-2xl text-[16px] leading-8 text-white/70 sm:text-[17px]">
                                    A collection of achievements that reflects the dedication,
                                    perseverance, and academic excellence of our students.
                                </p>
                            </div>

                            <div className="lg:pb-2">
                                <div className="border-l border-[#D2B87C]/40 pl-7">
                                    <div className="mb-4 flex items-center gap-3">
                                        <Trophy className="h-5 w-5 text-[#D2B87C]" />
                                        <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                                            Achievement Archive
                                        </span>
                                    </div>

                                    <p className="font-serif text-[25px] leading-tight text-white sm:text-[29px]">
                                        Recognising students who turn commitment into
                                        accomplishment.
                                    </p>

                                    <div className="mt-8 grid grid-cols-2 gap-8 border-t border-white/10 pt-7">
                                        <div>
                                            <div className="font-serif text-4xl text-white">
                                                {achievements.length}
                                            </div>
                                            <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/50">
                                                Highlights
                                            </p>
                                        </div>

                                        <div>
                                            <div className="font-serif text-4xl text-white">
                                                10
                                            </div>
                                            <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/50">
                                                SGPA Highlight
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="h-px bg-[#D2B87C]/20" />
                </section>


                {/* --------navigations-------- */}
                <DepartmentNavigation />

                {/* =========================================================
            INTRODUCTION
        ========================================================== */}
                <section className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
                    <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
                        <div>
                            <div className="flex items-center gap-3">
                                <Award className="h-5 w-5 text-[#8F7746]" />
                                <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                                    Our Achievements
                                </span>
                            </div>

                            <div className="mt-7 h-px w-full bg-[#20235A]/10" />
                        </div>

                        <div>
                            <h2 className="max-w-4xl font-serif text-[38px] leading-[1.08] tracking-[-0.025em] text-[#20235A] sm:text-[48px] lg:text-[56px]">
                                Excellence is built one achievement at a time.
                            </h2>

                            <p className="mt-7 max-w-3xl text-[16px] leading-8 text-[#1E1917]/65 sm:text-[17px]">
                                The Department of Applied Science & Humanities celebrates
                                students who demonstrate exceptional commitment to their
                                studies. These achievements represent the academic spirit,
                                consistency, and determination that continue to shape the
                                learning community at NCERC.
                            </p>
                        </div>
                    </div>
                </section>

                {/* =========================================================
            FEATURED ACHIEVEMENT
        ========================================================== */}
                <section className="bg-[#F2EFE8]">
                    <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
                        <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
                            <div>
                                <div className="mb-4 flex items-center gap-3">
                                    <Sparkles className="h-5 w-5 text-[#8F7746]" />
                                    <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                                        Featured Recognition
                                    </span>
                                </div>

                                <h2 className="font-serif text-[38px] leading-tight tracking-[-0.025em] text-[#20235A] sm:text-[48px]">
                                    Moments worth celebrating.
                                </h2>
                            </div>

                            <p className="max-w-md text-sm leading-7 text-[#1E1917]/55">
                                Academic achievement is more than a result — it represents
                                discipline, curiosity, and the pursuit of continuous growth.
                            </p>
                        </div>

                        <div className="grid overflow-hidden border border-[#20235A]/10 bg-white lg:grid-cols-[1.15fr_0.85fr]">
                            <button
                                type="button"
                                onClick={() => openAchievement(achievements[8], 8)}
                                className="group relative min-h-[380px] overflow-hidden text-left sm:min-h-[500px] lg:min-h-[620px]"
                            >
                                <img
                                    src={achievements[8].image}
                                    alt={achievements[8].title}
                                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.025]"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#20235A]/90 via-[#20235A]/15 to-transparent" />

                                <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-10">
                                    <div className="mb-4 flex items-center gap-2 text-[#D2B87C]">
                                        <Medal className="h-4 w-4" />
                                        <span className="text-[10px] font-semibold uppercase tracking-[0.24em]">
                                            Featured Achievement
                                        </span>
                                    </div>

                                    <h3 className="max-w-2xl font-serif text-[30px] leading-tight text-white sm:text-[40px]">
                                        {achievements[8].title}
                                    </h3>

                                    <div className="mt-6 flex items-center gap-2 text-sm font-medium text-white">
                                        View Achievement
                                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                                    </div>
                                </div>
                            </button>

                            <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-12">
                                <div>
                                    <div className="mb-7 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#20235A] text-[#D2B87C]">
                                        <GraduationCap className="h-6 w-6" />
                                    </div>

                                    <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                        S2 Results
                                    </span>

                                    <h3 className="mt-4 font-serif text-[32px] leading-tight text-[#20235A] sm:text-[38px]">
                                        A perfect SGPA 10 achievement.
                                    </h3>

                                    <p className="mt-6 text-[15px] leading-8 text-[#1E1917]/65">
                                        Congratulations to M Shreya (CSE) on achieving a perfect
                                        SGPA 10 in the S2 Results. The achievement reflects her
                                        hard work and dedication.
                                    </p>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => openAchievement(achievements[8], 8)}
                                    className="mt-10 flex w-fit items-center gap-3 border-b border-[#20235A] pb-2 text-sm font-semibold text-[#20235A] transition hover:gap-5"
                                >
                                    Explore Recognition
                                    <ArrowRight className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================
            ACHIEVEMENT GALLERY
        ========================================================== */}
                <section className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
                    <div className="mb-14 flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
                        <div>
                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#8F7746]" />
                                <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                                    Achievement Gallery
                                </span>
                            </div>

                            <h2 className="font-serif text-[40px] leading-tight tracking-[-0.025em] text-[#20235A] sm:text-[52px]">
                                Our toppers.
                                <span className="block text-[#8F7746]">Our pride.</span>
                            </h2>
                        </div>

                        <div className="max-w-md text-sm leading-7 text-[#1E1917]/55">
                            Browse the academic achievements and topper recognitions of
                            students from the Department of Applied Science & Humanities.
                        </div>
                    </div>

                    <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                        {achievements.map((achievement, index) => (
                            <article key={achievement.id} className="group">
                                <button
                                    type="button"
                                    onClick={() => openAchievement(achievement, index)}
                                    className="block w-full text-left"
                                    aria-label={`View ${achievement.title}`}
                                >
                                    <div className="relative aspect-[4/3] overflow-hidden bg-[#F2EFE8]">
                                        <img
                                            src={achievement.image}
                                            alt={achievement.title}
                                            loading={index > 2 ? "lazy" : "eager"}
                                            className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]"
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-[#20235A]/70 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                                        <div className="absolute right-5 top-5 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full bg-white/95 text-[#20235A] opacity-0 shadow-lg transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                                            <ArrowUpRight className="h-4 w-4" />
                                        </div>

                                        <div className="absolute bottom-5 left-5 translate-y-3 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                                            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                                                View Achievement
                                            </span>
                                        </div>
                                    </div>

                                    <div className="border-b border-[#20235A]/10 pb-6 pt-5">
                                        <div className="mb-3 flex items-center justify-between gap-4">
                                            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                                {achievement.caption}
                                            </span>

                                            <span className="font-serif text-sm text-[#20235A]/35">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>
                                        </div>

                                        <h3 className="font-serif text-[24px] leading-tight text-[#20235A] transition-colors duration-300 group-hover:text-[#8F7746]">
                                            {achievement.title}
                                        </h3>
                                    </div>
                                </button>
                            </article>
                        ))}
                    </div>
                </section>

                {/* =========================================================
            ACHIEVEMENT STATEMENT
        ========================================================== */}
                <section className="bg-[#20235A]">
                    <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
                        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-24">
                            <div>
                                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#D2B87C]/40">
                                    <Trophy className="h-7 w-7 text-[#D2B87C]" />
                                </div>

                                <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                    Beyond the Results
                                </p>
                            </div>

                            <div>
                                <h2 className="font-serif text-[38px] leading-[1.08] tracking-[-0.025em] text-white sm:text-[48px] lg:text-[56px]">
                                    Every achievement begins with the courage to learn,
                                    challenge, and grow.
                                </h2>

                                <p className="mt-7 max-w-2xl text-[16px] leading-8 text-white/65">
                                    The Department continues to encourage students to pursue
                                    academic excellence while developing the discipline,
                                    confidence, and curiosity needed for their future.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================
            CLOSING CTA
        ========================================================== */}
                <section className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
                    <div className="grid gap-10 border-t border-[#20235A]/15 pt-12 lg:grid-cols-[1fr_auto] lg:items-end">
                        <div>
                            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                                Explore More
                            </span>

                            <h2 className="mt-4 max-w-3xl font-serif text-[34px] leading-tight tracking-[-0.025em] text-[#20235A] sm:text-[44px]">
                                Discover the learning environment behind these achievements.
                            </h2>
                        </div>

                        <a
                            href="/departments/applied_science_and_humanities/facilities"
                            className="group flex w-fit items-center gap-4 bg-[#20235A] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#171946]"
                        >
                            Explore Facilities
                            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </a>
                    </div>
                </section>
            </main>

            <FooterSection />

            {/* =========================================================
          IMAGE LIGHTBOX
      ========================================================== */}
            {selectedAchievement && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-[#111327]/95 px-4 py-6 sm:px-8"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Achievement preview"
                    onClick={closeAchievement}
                >
                    <button
                        type="button"
                        onClick={closeAchievement}
                        className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 sm:right-8 sm:top-8"
                        aria-label="Close preview"
                    >
                        <X className="h-5 w-5" />
                    </button>

                    <button
                        type="button"
                        onClick={(event) => {
                            event.stopPropagation();
                            showPrevious();
                        }}
                        className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 sm:left-7"
                        aria-label="Previous achievement"
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </button>

                    <button
                        type="button"
                        onClick={(event) => {
                            event.stopPropagation();
                            showNext();
                        }}
                        className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 sm:right-7"
                        aria-label="Next achievement"
                    >
                        <ChevronRight className="h-5 w-5" />
                    </button>

                    <div
                        className="relative flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden bg-[#FAF7F2] shadow-2xl lg:flex-row"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="relative flex min-h-[300px] items-center justify-center bg-[#171946] lg:min-h-[650px] lg:w-[68%]">
                            <img
                                src={selectedAchievement.image}
                                alt={selectedAchievement.title}
                                className="max-h-[60vh] w-full object-contain lg:max-h-[82vh]"
                            />

                            <div className="absolute bottom-4 left-4 rounded-full bg-black/40 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
                                {selectedIndex + 1} / {achievements.length}
                            </div>
                        </div>

                        <div className="flex max-h-[38vh] flex-col justify-between overflow-y-auto p-7 sm:p-9 lg:max-h-none lg:w-[32%] lg:p-10">
                            <div>
                                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                    {selectedAchievement.caption}
                                </span>

                                <h3 className="mt-4 font-serif text-[30px] leading-tight text-[#20235A] sm:text-[36px]">
                                    {selectedAchievement.title}
                                </h3>

                                <div className="mt-7 h-px w-16 bg-[#D2B87C]" />

                                {selectedAchievement.description ? (
                                    <p className="mt-7 text-[15px] leading-8 text-[#1E1917]/65">
                                        {selectedAchievement.description}
                                    </p>
                                ) : (
                                    <p className="mt-7 text-[15px] leading-8 text-[#1E1917]/65">
                                        Celebrating the academic achievements of students from the
                                        Department of Applied Science & Humanities at NCERC.
                                    </p>
                                )}
                            </div>

                            <div className="mt-8 flex items-center justify-between border-t border-[#20235A]/10 pt-6">
                                <button
                                    type="button"
                                    onClick={showPrevious}
                                    className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#20235A] transition hover:text-[#8F7746]"
                                >
                                    <ChevronLeft className="h-4 w-4" />
                                    Previous
                                </button>

                                <button
                                    type="button"
                                    onClick={showNext}
                                    className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#20235A] transition hover:text-[#8F7746]"
                                >
                                    Next
                                    <ChevronRight className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default page;