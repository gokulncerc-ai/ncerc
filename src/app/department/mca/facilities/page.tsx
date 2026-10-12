"use client";
import Image from "next/image";
import React from "react";
import {
    ArrowUpRight,
    BookOpen,
    BrainCircuit,
    Code2,
    Database,
    Globe2,
    Laptop,
    Network,
    Server,
    Users,
} from "lucide-react";
import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import McaNavigation from "../../mca/mcanavigation/page";
import Faq from "../../mca/faq/page"

const facilityHighlights = [
    {
        number: "01",
        icon: Laptop,
        title: "Computing Environment",
        text: "A technology-focused learning environment that supports programming, application development, practical exercises and hands-on computing activities.",
    },
    {
        number: "02",
        icon: Code2,
        title: "Programming & Development",
        text: "Dedicated academic spaces for developing programming skills, problem-solving abilities and software development practices through practical learning.",
    },
    {
        number: "03",
        icon: Database,
        title: "Data & Applications",
        text: "Learning resources that support database concepts, application development, information management and the practical use of computing technologies.",
    },
    {
        number: "04",
        icon: Network,
        title: "Digital Connectivity",
        text: "A connected academic environment that enables students to access digital learning resources, online platforms and technology-supported academic activities.",
    },
];

const learningAreas = [
    {
        icon: BrainCircuit,
        title: "Applied Computing",
        text: "Encouraging students to connect theoretical concepts with practical computing applications and real-world problem solving.",
    },
    {
        icon: Server,
        title: "Technical Practice",
        text: "Supporting hands-on learning through programming, software development, computational exercises and technology-oriented academic work.",
    },
    {
        icon: BookOpen,
        title: "Academic Resources",
        text: "Providing students with access to learning resources that complement classroom teaching and encourage continuous technical learning.",
    },
    {
        icon: Users,
        title: "Collaborative Learning",
        text: "Spaces and activities designed to encourage teamwork, discussion, project collaboration and peer learning.",
    },
];

const technologyAreas = [
    "Programming",
    "Application Development",
    "Database Systems",
    "Computer Networks",
    "Digital Learning",
    "Project Development",
];

const Page = () => {
    return (
        <main className="overflow-hidden bg-[#FAF7F2] text-[#1E1917]">
            <SiteHeader />

            {/* =========================================================
                HERO
            ========================================================== */}
            <section className="relative bg-[#20235A] text-white">
                <div className="mx-auto grid min-h-[620px] max-w-[1440px] lg:grid-cols-[0.9fr_1.1fr]">

                    {/* Hero Content */}
                    <div className="flex flex-col justify-center px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">

                        <div className="flex items-center gap-3">
                            <span className="h-px w-9 bg-[#D2B87C]" />

                            <span className="text-[9px] font-medium uppercase tracking-[0.24em] text-[#D2B87C]">
                                MCA Department
                            </span>
                        </div>

                        <h1 className="mt-6 max-w-xl font-serif text-[46px] leading-[0.98] tracking-[-0.035em] sm:text-[60px] lg:text-[70px] xl:text-[76px]">
                            Learning spaces
                            <span className="block text-[#D2B87C]">
                                built for technology.
                            </span>
                        </h1>

                        <p className="mt-7 max-w-xl text-[14px] leading-7 text-white/70 sm:text-[16px] sm:leading-8">
                            The MCA learning environment brings together
                            computing, practical learning, digital resources
                            and collaborative academic experiences to support
                            students throughout their postgraduate journey.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-x-10 gap-y-5 border-t border-white/15 pt-6">

                            <div>
                                <p className="font-serif text-[32px] leading-none text-white sm:text-[38px]">
                                    01
                                </p>
                                <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-white/45">
                                    Technology Focus
                                </p>
                            </div>

                            <div>
                                <p className="font-serif text-[32px] leading-none text-white sm:text-[38px]">
                                    02
                                </p>
                                <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-white/45">
                                    Practical Learning
                                </p>
                            </div>

                            <div>
                                <p className="font-serif text-[32px] leading-none text-white sm:text-[38px]">
                                    03
                                </p>
                                <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-white/45">
                                    Digital Resources
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* Hero Visual */}
                    <div className="relative min-h-[360px] overflow-hidden lg:min-h-full">
                        <Image
                            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=90"
                            alt="Modern technology learning environment"
                            fill
                            sizes="(min-width: 1024px) 330px, 100vw"
                            className="absolute inset-0 h-full w-full object-cover"
                        />

                        <div className="absolute inset-0 bg-[#20235A]/30" />

                        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 lg:p-12">
                            <div className="max-w-sm border-l-2 border-[#D2B87C] pl-5">
                                <p className="text-[10px] uppercase tracking-[0.2em] text-[#D2B87C]">
                                    MCA Facilities
                                </p>

                                <p className="mt-3 font-serif text-[22px] leading-tight text-white sm:text-[26px]">
                                    Supporting practical learning,
                                    collaboration and technological growth.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <McaNavigation />
            {/* =========================================================
                INTRODUCTION
            ========================================================== */}
            <section className="bg-white">
                <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">

                    <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">

                        <div>
                            <div className="flex items-center gap-2">
                                <span className="h-px w-8 bg-[#D2B87C]" />

                                <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#8F7746]">
                                    Department Facilities
                                </span>
                            </div>

                            <h2 className="mt-4 max-w-md font-serif text-[38px] leading-[1.02] tracking-[-0.03em] text-[#20235A] sm:text-[46px] lg:text-[52px]">
                                An environment designed around learning.
                            </h2>
                        </div>

                        <div className="max-w-3xl">
                            <p className="text-[15px] leading-8 text-[#1E1917]/70 sm:text-[17px]">
                                Facilities play an important role in transforming
                                academic knowledge into practical understanding.
                                The MCA department&apos;s learning environment
                                supports students through computing activities,
                                programming practice, project development,
                                digital learning and collaborative academic work.
                            </p>

                            <p className="mt-6 text-[15px] leading-8 text-[#1E1917]/60 sm:text-[16px]">
                                The focus is on creating an environment where
                                students can explore technology, strengthen
                                technical skills and apply their knowledge to
                                practical challenges.
                            </p>

                            <div className="mt-8 flex items-center gap-3">
                                <span className="h-2 w-2 bg-[#D2B87C]" />

                                <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-[#8F7746]">
                                    Learn · Practice · Apply
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
                FACILITY HIGHLIGHTS
            ========================================================== */}
            <section className="bg-[#F2EFE8]">
                <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">

                    <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">

                        <div>
                            <div className="flex items-center gap-2">
                                <span className="h-px w-8 bg-[#D2B87C]" />

                                <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#8F7746]">
                                    Facility Highlights
                                </span>
                            </div>

                            <h2 className="mt-4 max-w-md font-serif text-[38px] leading-[1.02] tracking-[-0.03em] text-[#20235A] sm:text-[46px]">
                                Technology meets practical education.
                            </h2>

                            <p className="mt-5 max-w-md text-[14px] leading-7 text-[#1E1917]/60 sm:text-[15px]">
                                Academic facilities are structured to complement
                                classroom learning with practical exposure,
                                technical exploration and collaborative work.
                            </p>

                            <div className="mt-8 overflow-hidden border border-[#20235A]/10 bg-white">
                                <Image
                                    src="https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=900&q=85"
                                    alt="Students collaborating with technology"
                                    fill
                                    sizes="(min-width: 1024px) 330px, 100vw"
                                    className="h-44 w-full object-cover sm:h-52"
                                />
                            </div>
                        </div>

                        <div className="border-t border-[#20235A]/10">
                            {facilityHighlights.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={item.number}
                                        className="group grid gap-5 border-b border-[#20235A]/10 py-7 sm:grid-cols-[56px_1fr_1.35fr] sm:items-start sm:gap-6"
                                    >
                                        <span className="font-serif text-[22px] text-[#D2B87C]">
                                            {item.number}
                                        </span>

                                        <div className="flex items-center gap-3">
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#20235A]/10 bg-white text-[#20235A] transition-colors duration-300 group-hover:border-[#20235A] group-hover:bg-[#20235A] group-hover:text-[#D2B87C]">
                                                <Icon
                                                    size={18}
                                                    strokeWidth={1.5}
                                                />
                                            </div>

                                            <h3 className="font-serif text-[21px] leading-tight text-[#20235A]">
                                                {item.title}
                                            </h3>
                                        </div>

                                        <p className="text-[13px] leading-7 text-[#1E1917]/60 sm:pt-1">
                                            {item.text}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
                TECHNOLOGY AREAS
            ========================================================== */}
            <section className="bg-[#20235A] text-white">
                <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">

                    <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">

                        <div>
                            <div className="flex items-center gap-2">
                                <span className="h-px w-8 bg-[#D2B87C]" />

                                <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#D2B87C]">
                                    Technology Areas
                                </span>
                            </div>

                            <h2 className="mt-4 max-w-md font-serif text-[38px] leading-[1.02] tracking-[-0.03em] sm:text-[46px]">
                                Areas of
                                <span className="block text-[#D2B87C]">
                                    practical exploration.
                                </span>
                            </h2>

                            <p className="mt-6 max-w-md text-[14px] leading-7 text-white/60 sm:text-[15px]">
                                The learning environment supports a broad range
                                of computing activities that help students
                                connect concepts with practical application.
                            </p>
                        </div>

                        <div className="grid border-t border-white/15 sm:grid-cols-2">
                            {technologyAreas.map((item, index) => (
                                <div
                                    key={item}
                                    className="group flex min-h-[120px] items-center justify-between border-b border-white/15 py-7 sm:px-5 lg:min-h-[140px]"
                                >
                                    <div className="flex items-center gap-5">
                                        <span className="font-serif text-[18px] text-[#D2B87C]">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                        <span className="font-serif text-[20px] text-white transition-colors duration-300 group-hover:text-[#D2B87C] sm:text-[22px]">
                                            {item}
                                        </span>
                                    </div>

                                    <ArrowUpRight
                                        size={18}
                                        strokeWidth={1.4}
                                        className="text-white/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#D2B87C]"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
                LEARNING ENVIRONMENT
            ========================================================== */}
            <section className="bg-white">
                <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">

                    <div className="mb-12 max-w-2xl">
                        <div className="flex items-center gap-2">
                            <span className="h-px w-8 bg-[#D2B87C]" />

                            <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#8F7746]">
                                Learning Environment
                            </span>
                        </div>

                        <h2 className="mt-4 font-serif text-[38px] leading-[1.02] tracking-[-0.03em] text-[#20235A] sm:text-[46px] lg:text-[52px]">
                            More than infrastructure.
                        </h2>

                        <p className="mt-5 max-w-xl text-[14px] leading-7 text-[#1E1917]/60 sm:text-[15px]">
                            A strong academic environment is built around the
                            way students learn, collaborate, experiment and
                            develop their professional capabilities.
                        </p>
                    </div>

                    <div className="grid border-t border-[#20235A]/10 sm:grid-cols-2 lg:grid-cols-4">
                        {learningAreas.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className="group border-b border-[#20235A]/10 p-6 sm:border-r sm:p-7 lg:min-h-[280px] lg:p-8"
                                >
                                    <div className="flex items-start justify-between">
                                        <div className="flex h-11 w-11 items-center justify-center border border-[#20235A]/10 bg-[#FAF7F2] text-[#20235A] transition-colors duration-300 group-hover:border-[#20235A] group-hover:bg-[#20235A] group-hover:text-[#D2B87C]">
                                            <Icon
                                                size={19}
                                                strokeWidth={1.5}
                                            />
                                        </div>

                                        <span className="font-serif text-[18px] text-[#D2B87C]">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                    </div>

                                    <h3 className="mt-10 font-serif text-[23px] leading-tight text-[#20235A]">
                                        {item.title}
                                    </h3>

                                    <p className="mt-4 text-[13px] leading-7 text-[#1E1917]/60">
                                        {item.text}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* =========================================================
                FEATURE PANEL
            ========================================================== */}
            <section className="bg-[#F2EFE8]">
                <div className="mx-auto max-w-[1440px] px-6 py-14 sm:px-10 sm:py-18 lg:px-16 lg:py-20">

                    <div className="grid overflow-hidden bg-[#20235A] lg:grid-cols-[1.1fr_0.9fr]">

                        <div className="p-7 sm:p-10 lg:p-14">
                            <div className="flex items-center gap-2">
                                <span className="h-px w-8 bg-[#D2B87C]" />

                                <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#D2B87C]">
                                    MCA Facilities
                                </span>
                            </div>

                            <h2 className="mt-5 max-w-xl font-serif text-[34px] leading-[1.04] tracking-[-0.025em] text-white sm:text-[42px] lg:text-[48px]">
                                Creating space for curiosity, practice and
                                professional growth.
                            </h2>

                            <p className="mt-6 max-w-xl text-[14px] leading-7 text-white/60 sm:text-[15px]">
                                The facilities and learning environment are
                                intended to help students move beyond
                                theoretical understanding and develop the
                                confidence to explore, build and apply
                                computing knowledge.
                            </p>

                            <div className="mt-8 flex items-center gap-3">
                                <Globe2
                                    size={18}
                                    strokeWidth={1.4}
                                    className="text-[#D2B87C]"
                                />

                                <span className="text-[9px] uppercase tracking-[0.18em] text-white/50">
                                    Technology · Learning · Collaboration
                                </span>
                            </div>
                        </div>

                        <div className="relative min-h-[300px] overflow-hidden lg:min-h-full">
                            <Image
                                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=90"
                                alt="Collaborative technology learning"
                                fill
                                sizes="(min-width: 1024px) 330px, 100vw"
                                className="absolute inset-0 h-full w-full object-cover"
                            />

                            <div className="absolute inset-0 bg-[#20235A]/20" />
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
                CLOSING
            ========================================================== */}
            {/* <section className="bg-white">
                <div className="mx-auto max-w-[1440px] px-6 py-14 sm:px-10 sm:py-18 lg:px-16 lg:py-20">

                    <div className="grid items-end gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">

                        <div>
                            <div className="flex items-center gap-2">
                                <span className="h-px w-8 bg-[#D2B87C]" />

                                <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#8F7746]">
                                    MCA Department
                                </span>
                            </div>

                            <h2 className="mt-4 max-w-md font-serif text-[36px] leading-[1.03] tracking-[-0.03em] text-[#20235A] sm:text-[44px]">
                                Learn with purpose.
                            </h2>
                        </div>

                        <div className="border-l-2 border-[#D2B87C] pl-6 sm:pl-8">
                            <p className="max-w-2xl text-[16px] leading-8 text-[#1E1917]/65 sm:text-[18px]">
                                A technology-oriented academic environment
                                provides the foundation for students to
                                experiment with ideas, strengthen their
                                technical abilities and prepare for the
                                professional world.
                            </p>
                        </div>
                    </div>
                </div>
            </section> */}
            <Faq />
            <FooterSection />

        </main>
    );
};

export default Page;