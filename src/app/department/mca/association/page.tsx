"use client";

import React from "react";
import {
    BookOpen,
    BriefcaseBusiness,
    Code2,
    Lightbulb,
    Users,
    Presentation,
    Trophy,
} from "lucide-react";
import Image from "next/image";
import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import McaNavigation from "../../mca/mcanavigation/page";
import Faq from "../../mca/faq/page";

const objectives = [
    {
        id: "01",
        title: "Technical Growth",
        text: "Encourage students to strengthen their technical knowledge through coding activities, technical sessions, workshops, seminars and collaborative learning.",
        icon: Code2,
    },
    {
        id: "02",
        title: "Professional Development",
        text: "Create opportunities for students to develop communication, teamwork, leadership and professional skills required for the contemporary technology industry.",
        icon: BriefcaseBusiness,
    },
    {
        id: "03",
        title: "Knowledge Sharing",
        text: "Promote an active culture of knowledge sharing where students can exchange ideas, explore emerging technologies and learn from one another.",
        icon: BookOpen,
    },
    {
        id: "04",
        title: "Innovation & Ideas",
        text: "Provide a platform for students to explore innovative ideas, develop solutions and transform academic knowledge into practical applications.",
        icon: Lightbulb,
    },
];

const activities = [
    {
        number: "01",
        title: "Technical Events",
        text: "Coding activities, technical competitions, workshops and technology-oriented sessions designed to encourage practical learning.",
        icon: Code2,
    },
    {
        number: "02",
        title: "Seminars & Talks",
        text: "Interactive sessions that introduce students to emerging technologies, professional practices and developments in the computing industry.",
        icon: Presentation,
    },
    {
        number: "03",
        title: "Student Collaboration",
        text: "Collaborative activities that encourage teamwork, communication, peer learning and the exchange of technical ideas.",
        icon: Users,
    },
    {
        number: "04",
        title: "Competitions",
        text: "Academic and technology-focused competitions that challenge students to apply their knowledge creatively and confidently.",
        icon: Trophy,
    },
];

const focusAreas = [
    "Programming & Application Development",
    "Emerging Computing Technologies",
    "Innovation & Problem Solving",
    "Communication & Leadership",
];

const Page = () => {
    return (
        <main className="overflow-hidden bg-[#FAF7F2] text-[#1E1917]">
            <SiteHeader />
            {/* HERO */}
            <section className="relative overflow-hidden bg-[#20235A] text-white">
                <div className="absolute right-[-8%] top-[-25%] h-[420px] w-[420px] rounded-full border border-[#D2B87C]/10" />
                <div className="absolute bottom-[-35%] left-[-8%] h-[420px] w-[420px] rounded-full border border-white/5" />

                <div className="relative mx-auto grid min-h-[500px] max-w-[1440px] items-center gap-10 px-6 py-14 sm:px-10 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:px-16 lg:py-16 xl:min-h-[540px]">
                    <div>
                        <div className="flex items-center gap-3">
                            <span className="h-px w-8 bg-[#D2B87C]" />
                            <span className="text-[9px] font-medium uppercase tracking-[0.24em] text-[#D2B87C]">
                                MCA Department
                            </span>
                        </div>

                        <h1 className="mt-5 max-w-3xl font-serif text-[46px] leading-[0.98] tracking-[-0.035em] sm:text-[58px] lg:text-[70px] xl:text-[76px]">
                            Learn together.
                            <span className="block text-[#D2B87C]">
                                Grow together.
                            </span>
                        </h1>

                        <p className="mt-6 max-w-xl text-[14px] leading-7 text-white/70 sm:text-[16px]">
                            The MCA Association provides a platform for students
                            to connect, collaborate and participate in academic,
                            technical and professional activities beyond the
                            regular classroom.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <div className="border border-white/15 px-4 py-3">
                                <p className="font-serif text-[24px] text-[#D2B87C]">
                                    01
                                </p>
                                <p className="mt-1 text-[8px] uppercase tracking-[0.18em] text-white/50">
                                    Student Platform
                                </p>
                            </div>

                            <div className="border border-white/15 px-4 py-3">
                                <p className="font-serif text-[24px] text-[#D2B87C]">
                                    04
                                </p>
                                <p className="mt-1 text-[8px] uppercase tracking-[0.18em] text-white/50">
                                    Core Focus Areas
                                </p>
                            </div>

                            <div className="border border-white/15 px-4 py-3">
                                <p className="font-serif text-[24px] text-[#D2B87C]">
                                    MCA
                                </p>
                                <p className="mt-1 text-[8px] uppercase tracking-[0.18em] text-white/50">
                                    Academic Community
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative hidden lg:block">
                        <div className="relative ml-auto max-w-[450px] border border-white/10 bg-white/[0.03] p-5">
                            <div className="aspect-[5/4] overflow-hidden bg-[#181B4A]">
                                <Image
                                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85"
                                    alt="Students collaborating in an academic environment"
                                    fill
                                    sizes="(min-width: 1024px) 330px, 100vw"
                                    className="h-full w-full object-cover"
                                />
                            </div>

                            <div className="absolute -bottom-5 -left-5 border border-[#D2B87C]/40 bg-[#20235A] px-5 py-4">
                                <p className="font-serif text-[25px] text-[#D2B87C]">
                                    Association
                                </p>
                                <p className="mt-1 text-[8px] uppercase tracking-[0.18em] text-white/50">
                                    Connect · Create · Contribute
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <McaNavigation />

            {/* INTRODUCTION */}
            <section className="bg-white">
                <div className="mx-auto max-w-[1440px] px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
                    <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
                        <div>
                            <div className="flex items-center gap-3">
                                <span className="h-px w-8 bg-[#D2B87C]" />
                                <span className="text-[9px] font-medium uppercase tracking-[0.22em] text-[#8F7746]">
                                    About The Association
                                </span>
                            </div>

                            <h2 className="mt-4 max-w-md font-serif text-[38px] leading-[1.03] tracking-[-0.03em] text-[#20235A] sm:text-[46px] lg:text-[52px]">
                                A student community built around learning.
                            </h2>
                        </div>

                        <div className="max-w-3xl">
                            <p className="text-[15px] leading-8 text-[#1E1917]/70 sm:text-[16px]">
                                The MCA Association is envisioned as an active
                                student platform that complements academic
                                learning with technical, creative and
                                professional experiences. It encourages
                                students to participate, share ideas and work
                                together beyond the boundaries of the
                                classroom.
                            </p>

                            <p className="mt-5 text-[15px] leading-8 text-[#1E1917]/60 sm:text-[16px]">
                                Through seminars, technical activities,
                                competitions, collaborative projects and
                                student-led initiatives, the association can
                                help create an environment where curiosity,
                                confidence and practical learning grow
                                together.
                            </p>

                            <div className="mt-8 border-l-2 border-[#D2B87C] pl-5">
                                <p className="font-serif text-[21px] leading-[1.35] text-[#20235A] sm:text-[24px]">
                                    “A strong academic community is created
                                    when students learn from one another.”
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* OBJECTIVES */}
            <section className="bg-[#F2EFE8]">
                <div className="mx-auto max-w-[1440px] px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
                    <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
                        <div>
                            <div className="flex items-center gap-3">
                                <span className="h-px w-8 bg-[#D2B87C]" />
                                <span className="text-[9px] font-medium uppercase tracking-[0.22em] text-[#8F7746]">
                                    Our Objectives
                                </span>
                            </div>

                            <h2 className="mt-4 max-w-md font-serif text-[38px] leading-[1.03] tracking-[-0.03em] text-[#20235A] sm:text-[46px]">
                                Turning participation into growth.
                            </h2>

                            <p className="mt-5 max-w-md text-[14px] leading-7 text-[#1E1917]/60 sm:text-[15px]">
                                The association encourages students to take
                                initiative, collaborate with peers and
                                continuously develop their academic and
                                professional capabilities.
                            </p>

                            {/* Small supporting visual */}
                            <div className="relative mt-7 max-w-md overflow-hidden border border-[#20235A]/10 bg-white">
                                <div className="aspect-[16/7] overflow-hidden">
                                    <Image
                                        src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85"
                                        alt="Students collaborating together"
                                        fill
                                        sizes="(min-width: 1024px) 330px, 100vw"
                                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                                    />
                                </div>

                                <div className="absolute bottom-3 left-3 border border-white/20 bg-[#20235A]/90 px-3 py-2">
                                    <p className="text-[8px] font-medium uppercase tracking-[0.16em] text-[#D2B87C]">
                                        Learn · Collaborate · Grow
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-[#20235A]/10">
                            {objectives.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <article
                                        key={item.id}
                                        className="group grid gap-5 border-b border-[#20235A]/10 py-6 sm:grid-cols-[70px_1fr_auto] sm:items-start sm:gap-6"
                                    >
                                        <span className="font-serif text-[22px] text-[#D2B87C]">
                                            {item.id}
                                        </span>

                                        <div>
                                            <h3 className="font-serif text-[24px] tracking-[-0.02em] text-[#20235A]">
                                                {item.title}
                                            </h3>

                                            <p className="mt-2 max-w-2xl text-[13px] leading-7 text-[#1E1917]/60 sm:text-[14px]">
                                                {item.text}
                                            </p>
                                        </div>

                                        <div className="hidden h-10 w-10 items-center justify-center border border-[#20235A]/10 text-[#20235A]/60 transition-colors duration-300 group-hover:border-[#D2B87C] group-hover:bg-[#20235A] group-hover:text-[#D2B87C] sm:flex">
                                            <Icon
                                                size={17}
                                                strokeWidth={1.5}
                                            />
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* ACTIVITIES */}
            <section className="bg-white">
                <div className="mx-auto max-w-[1440px] px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
                    <div className="flex flex-col justify-between gap-6 border-b border-[#20235A]/10 pb-8 lg:flex-row lg:items-end">
                        <div>
                            <div className="flex items-center gap-3">
                                <span className="h-px w-8 bg-[#D2B87C]" />
                                <span className="text-[9px] font-medium uppercase tracking-[0.22em] text-[#8F7746]">
                                    Association Activities
                                </span>
                            </div>

                            <h2 className="mt-4 max-w-2xl font-serif text-[38px] leading-[1.03] tracking-[-0.03em] text-[#20235A] sm:text-[46px] lg:text-[52px]">
                                Experiences that extend beyond the syllabus.
                            </h2>
                        </div>

                        <p className="max-w-md text-[13px] leading-7 text-[#1E1917]/55 sm:text-[14px]">
                            Student activities create opportunities to apply
                            knowledge, discover interests and build confidence
                            through participation.
                        </p>
                    </div>

                    <div className="mt-8 grid gap-px border border-[#20235A]/10 bg-[#20235A]/10 sm:grid-cols-2 lg:grid-cols-4">
                        {activities.map((activity) => {
                            const Icon = activity.icon;

                            return (
                                <article
                                    key={activity.number}
                                    className="group bg-white p-6 transition-colors duration-300 hover:bg-[#20235A] sm:p-7"
                                >
                                    <div className="flex items-start justify-between">
                                        <span className="font-serif text-[18px] text-[#D2B87C]">
                                            {activity.number}
                                        </span>

                                        <Icon
                                            size={19}
                                            strokeWidth={1.5}
                                            className="text-[#20235A]/40 transition-colors duration-300 group-hover:text-[#D2B87C]"
                                        />
                                    </div>

                                    <h3 className="mt-12 font-serif text-[24px] leading-tight tracking-[-0.02em] text-[#20235A] transition-colors duration-300 group-hover:text-white">
                                        {activity.title}
                                    </h3>

                                    <p className="mt-3 text-[13px] leading-7 text-[#1E1917]/55 transition-colors duration-300 group-hover:text-white/65">
                                        {activity.text}
                                    </p>

                                    <div className="mt-7 h-px w-8 bg-[#D2B87C] transition-all duration-300 group-hover:w-14" />
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* FOCUS AREAS */}
            <section className="bg-[#20235A] text-white">
                <div className="mx-auto max-w-[1440px] px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
                    <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
                        <div>
                            <div className="flex items-center gap-3">
                                <span className="h-px w-8 bg-[#D2B87C]" />
                                <span className="text-[9px] font-medium uppercase tracking-[0.22em] text-[#D2B87C]">
                                    Areas Of Focus
                                </span>
                            </div>

                            <h2 className="mt-4 max-w-md font-serif text-[38px] leading-[1.03] tracking-[-0.03em] sm:text-[46px] lg:text-[52px]">
                                Building skills for a changing technology
                                landscape.
                            </h2>
                        </div>

                        <div className="grid border-t border-white/10 sm:grid-cols-2">
                            {focusAreas.map((area, index) => (
                                <div
                                    key={area}
                                    className="border-b border-white/10 py-6 sm:px-5 sm:py-7"
                                >
                                    <div className="flex items-start gap-4">
                                        <span className="font-serif text-[18px] text-[#D2B87C]">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                        <div>
                                            <p className="text-[14px] leading-6 text-white/80 sm:text-[15px]">
                                                {area}
                                            </p>

                                            <div className="mt-4 h-px w-6 bg-[#D2B87C]/60" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FEATURE PANEL */}
            <section className="bg-[#F2EFE8]">
                <div className="mx-auto max-w-[1440px] px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
                    <div className="grid overflow-hidden border border-[#20235A]/10 bg-white lg:grid-cols-[0.9fr_1.1fr]">
                        <div className="relative min-h-[280px] overflow-hidden bg-[#20235A] sm:min-h-[340px]">
                            <Image
                                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=85"
                                alt="Students working together"
                                fill
                                sizes="(min-width: 1024px) 330px, 100vw"
                                className="h-full w-full object-cover opacity-85"
                            />

                            <div className="absolute inset-0 bg-[#20235A]/35" />

                            <div className="absolute bottom-6 left-6 border border-white/20 bg-[#20235A]/85 px-5 py-4 backdrop-blur-sm sm:bottom-8 sm:left-8">
                                <p className="font-serif text-[24px] text-[#D2B87C]">
                                    Connect
                                </p>
                                <p className="mt-1 text-[8px] uppercase tracking-[0.18em] text-white/55">
                                    Ideas · People · Possibilities
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center p-7 sm:p-9 lg:p-12">
                            <div className="flex items-center gap-3">
                                <span className="h-px w-8 bg-[#D2B87C]" />
                                <span className="text-[9px] font-medium uppercase tracking-[0.22em] text-[#8F7746]">
                                    Student Engagement
                                </span>
                            </div>

                            <h2 className="mt-4 max-w-xl font-serif text-[34px] leading-[1.05] tracking-[-0.03em] text-[#20235A] sm:text-[42px]">
                                A place for ideas to become experiences.
                            </h2>

                            <p className="mt-5 max-w-xl text-[14px] leading-7 text-[#1E1917]/60 sm:text-[15px]">
                                An active association can help students move
                                from passive participation to meaningful
                                involvement. By taking part in activities,
                                organising events and collaborating with peers,
                                students can develop capabilities that
                                complement their academic learning.
                            </p>

                            <div className="mt-7 flex flex-wrap gap-3">
                                <span className="border border-[#20235A]/10 bg-[#FAF7F2] px-4 py-2 text-[9px] font-medium uppercase tracking-[0.14em] text-[#8F7746]">
                                    Learn
                                </span>
                                <span className="border border-[#20235A]/10 bg-[#FAF7F2] px-4 py-2 text-[9px] font-medium uppercase tracking-[0.14em] text-[#8F7746]">
                                    Collaborate
                                </span>
                                <span className="border border-[#20235A]/10 bg-[#FAF7F2] px-4 py-2 text-[9px] font-medium uppercase tracking-[0.14em] text-[#8F7746]">
                                    Create
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>            
            <Faq />
            <FooterSection />
        </main>
    );
};

export default Page;