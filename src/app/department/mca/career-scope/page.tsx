"use client";

import React from "react";
import {
    ArrowUpRight,
    BrainCircuit,
    BriefcaseBusiness,
    CheckCircle2,
    Code2,
    GraduationCap,
    Lightbulb,
    Network,
    Users,
} from "lucide-react";
import Image from "next/image";
import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import Faq from "../../mca/faq/page";
import McaNavigation from "../mcanavigation/mcanavigation";


const careerStrengths = [
    {
        icon: BrainCircuit,
        number: "01",
        title: "Analytical Thinking",
        text: "The multidisciplinary approach and innovative teaching methods help students strengthen their analytical and problem-solving abilities.",
    },
    {
        icon: Users,
        number: "02",
        title: "Personality Development",
        text: "Personality development supports students in improving communication, confidence, time management, self-management and team spirit.",
    },
    {
        icon: Code2,
        number: "03",
        title: "Computer Applications",
        text: "The programme creates opportunities for students from related technical fields to move into the broad and evolving field of Computer Science and Applications.",
    },
    {
        icon: BriefcaseBusiness,
        number: "04",
        title: "Career Building",
        text: "Students are encouraged to develop a professional attitude, confidence and the skills required to build meaningful careers in the technology sector.",
    },
];

const careerPathways = [
    "Computer Science & Applications",
    "Software & Application Development",
    "Information Technology",
    "Business & Digital Systems",
    "Education & Governance",
    "Technology-driven Professional Careers",
];

const Page = () => {
    return (
        <main className="overflow-hidden bg-[#FAF7F2] text-[#1E1917]">
            <SiteHeader />

            {/* =====================================================
                HERO
            ====================================================== */}
            <section className="relative bg-[#20235A] text-white">
                <div className="mx-auto grid min-h-[620px] max-w-[1440px] lg:grid-cols-[1fr_0.82fr]">

                    {/* Hero Content */}
                    <div className="flex flex-col justify-center px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28">
                        <div className="flex items-center gap-3">
                            <span className="h-px w-10 bg-[#D2B87C]" />

                            <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#D2B87C]">
                                MCA • Career Scope
                            </span>
                        </div>

                        <h1 className="mt-7 max-w-3xl font-serif text-[46px] leading-[0.98] tracking-[-0.035em] sm:text-[58px] lg:text-[70px] xl:text-[76px]">
                            From learning
                            <span className="block text-[#D2B87C]">
                                to professional growth.
                            </span>
                        </h1>

                        <p className="mt-7 max-w-2xl text-[15px] leading-7 text-white/70 sm:text-[16px] sm:leading-8">
                            The MCA programme provides students with an
                            opportunity to enter the vast field of Computer
                            Science and Applications while developing the
                            analytical, problem-solving and professional skills
                            required for a technology-driven career.
                        </p>

                        <div className="mt-10 flex flex-wrap items-center gap-6">
                            <div className="border-l border-[#D2B87C] pl-4">
                                <span className="block font-serif text-[28px] leading-none text-white">
                                    02
                                </span>

                                <span className="mt-2 block text-[9px] font-medium uppercase tracking-[0.18em] text-white/50">
                                    Year MCA Programme
                                </span>
                            </div>

                            <div className="border-l border-white/15 pl-4">
                                <span className="block font-serif text-[28px] leading-none text-white">
                                    IT
                                </span>

                                <span className="mt-2 block text-[9px] font-medium uppercase tracking-[0.18em] text-white/50">
                                    Professional Domain
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Hero Visual */}
                    <div className="relative min-h-[360px] lg:min-h-full">
                        <Image
                            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=90"
                            alt="Computer technology and digital systems"
                            fill
                            sizes="(min-width: 1024px) 330px, 100vw"
                            className="absolute inset-0 h-full w-full object-cover"
                        />

                        <div className="absolute inset-0 bg-[#20235A]/35" />

                        <div className="absolute bottom-0 left-0 right-0 border-t border-white/15 bg-[#20235A]/85 p-6 backdrop-blur-sm sm:p-8">
                            <div className="flex items-start justify-between gap-6">
                                <div>
                                    <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#D2B87C]">
                                        Career Direction
                                    </span>

                                    <p className="mt-2 max-w-sm font-serif text-[21px] leading-[1.2] text-white sm:text-[24px]">
                                        Developing specialists for an
                                        evolving digital world.
                                    </p>
                                </div>

                                <ArrowUpRight
                                    size={22}
                                    strokeWidth={1.4}
                                    className="shrink-0 text-[#D2B87C]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <McaNavigation />

            {/* =====================================================
                INTRODUCTION
            ====================================================== */}
            <section className="bg-white">
                <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
                    <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">

                        <div>
                            <div className="flex items-center gap-2">
                                <span className="h-px w-8 bg-[#D2B87C]" />

                                <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#8F7746]">
                                    Career Scope
                                </span>
                            </div>

                            <h2 className="mt-4 max-w-md font-serif text-[38px] leading-[1.02] tracking-[-0.03em] text-[#20235A] sm:text-[46px] lg:text-[54px]">
                                Expanding possibilities through computing.
                            </h2>
                        </div>

                        <div className="max-w-4xl">
                            <p className="text-[15px] leading-8 text-[#1E1917]/70 sm:text-[16px] sm:leading-8">
                                The course offers an opportunity to the
                                students of related technical fields to switch
                                over to the vast field of Computer science and
                                Applications. Meanwhile, the integrated
                                multidisciplinary approach with innovative
                                teaching methods enhances the analytical and
                                problem solving skills which are inevitable
                                for a computer professional.
                            </p>

                            <div className="mt-8 border-l-2 border-[#D2B87C] pl-5 sm:pl-6">
                                <p className="font-serif text-[22px] leading-[1.4] text-[#20235A] sm:text-[26px]">
                                    Personality development, professional
                                    confidence and practical skills together
                                    create a stronger foundation for career
                                    building.
                                </p>
                            </div>

                            <p className="mt-8 text-[15px] leading-8 text-[#1E1917]/65 sm:text-[16px] sm:leading-8">
                                Personality development module facilitates to
                                tap the full potential of students by improving
                                time and self management, communication skills,
                                team spirit, confidence and career building
                                attitude.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* =====================================================
                CAREER STRENGTHS
            ====================================================== */}
            <section className="bg-[#F2EFE8]">
                <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">

                    <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">

                        <div>
                            <div className="flex items-center gap-2">
                                <span className="h-px w-8 bg-[#D2B87C]" />

                                <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#8F7746]">
                                    Professional Development
                                </span>
                            </div>

                            <h2 className="mt-4 max-w-md font-serif text-[38px] leading-[1.02] tracking-[-0.03em] text-[#20235A] sm:text-[46px]">
                                Skills that strengthen the professional journey.
                            </h2>

                            <p className="mt-5 max-w-md text-[14px] leading-7 text-[#1E1917]/60 sm:text-[15px]">
                                The programme combines technical learning with
                                personal and professional development to help
                                students prepare for the demands of the
                                computing profession.
                            </p>

                            {/* Supporting Image */}
                            <div className="mt-7 max-w-md overflow-hidden border border-[#20235A]/10 bg-white">
                                <Image
                                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=85"
                                    alt="Students working with computer technology"
                                    fill
                                    sizes="(min-width: 1024px) 330px, 100vw"
                                    className="h-36 w-full object-cover transition-transform duration-500 hover:scale-[1.02] sm:h-40"
                                />
                            </div>
                        </div>

                        <div className="border-t border-[#20235A]/10">
                            {careerStrengths.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={item.number}
                                        className="group grid gap-5 border-b border-[#20235A]/10 py-7 sm:grid-cols-[56px_1fr_1.4fr] sm:items-start sm:gap-6"
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
            {/* =====================================================
                AICTE / PROGRAMME EVOLUTION
            ====================================================== */}
            <section className="bg-[#20235A] text-white">
                <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">

                    <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">

                        <div>
                            <div className="flex items-center gap-2">
                                <span className="h-px w-8 bg-[#D2B87C]" />

                                <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#D2B87C]">
                                    Programme Evolution
                                </span>
                            </div>

                            <h2 className="mt-5 max-w-lg font-serif text-[38px] leading-[1.02] tracking-[-0.03em] sm:text-[48px] lg:text-[54px]">
                                A focused pathway into the professional world.
                            </h2>
                        </div>

                        <div>
                            <p className="text-[15px] leading-8 text-white/70 sm:text-[16px] sm:leading-8">
                                The All India Council for Technical Education
                                recently announced that the duration of Master
                                of Computer Applications (MCA) degree program
                                has been reduced from the current three years
                                to two years. The new course duration will come
                                into effect from the academic session 2020-21,
                                and is sure to attract more aspirants to this
                                wonderful PG program which holds a Professional
                                status.
                            </p>

                            <div className="mt-10 grid gap-6 sm:grid-cols-2">
                                <div className="border-t border-white/15 pt-5">
                                    <GraduationCap
                                        size={22}
                                        strokeWidth={1.4}
                                        className="text-[#D2B87C]"
                                    />

                                    <h3 className="mt-4 font-serif text-[23px] text-white">
                                        Professional Education
                                    </h3>

                                    <p className="mt-2 text-[13px] leading-7 text-white/55">
                                        A focused postgraduate pathway designed
                                        around computing, applications and
                                        professional development.
                                    </p>
                                </div>

                                <div className="border-t border-white/15 pt-5">
                                    <Lightbulb
                                        size={22}
                                        strokeWidth={1.4}
                                        className="text-[#D2B87C]"
                                    />

                                    <h3 className="mt-4 font-serif text-[23px] text-white">
                                        Emerging Opportunities
                                    </h3>

                                    <p className="mt-2 text-[13px] leading-7 text-white/55">
                                        A programme positioned within a rapidly
                                        evolving technology and applications
                                        landscape.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =====================================================
                IT DEMAND
            ====================================================== */}
            <section className="bg-white">
                <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">

                    <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">

                        <div>
                            <div className="flex items-center gap-2">
                                <span className="h-px w-8 bg-[#D2B87C]" />

                                <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#8F7746]">
                                    Technology & Society
                                </span>
                            </div>

                            <h2 className="mt-5 max-w-2xl font-serif text-[38px] leading-[1.02] tracking-[-0.03em] text-[#20235A] sm:text-[48px] lg:text-[56px]">
                                Computing skills are increasingly connected to every domain.
                            </h2>

                            <p className="mt-7 max-w-2xl text-[15px] leading-8 text-[#1E1917]/65 sm:text-[16px]">
                                Recently during the Covid19 period, we have
                                been witnessing the prominent role that the IT
                                is providing to almost all domains, be it
                                business, education or governance.. This has
                                undoubtfully boosted the very demand of
                                Computer Application Professionals; and
                                NCERC-MCA is all set to deliver that breed of
                                specialists.
                            </p>
                        </div>

                        <div className="relative overflow-hidden border border-[#20235A]/10 bg-[#FAF7F2]">
                            <Image
                                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=90"
                                alt="Technology professionals working together"
                                fill
                                sizes="(min-width: 1024px) 330px, 100vw"
                                className="h-[320px] w-full object-cover sm:h-[380px]"
                            />

                            <div className="absolute inset-x-0 bottom-0 bg-[#20235A]/90 p-6 sm:p-7">
                                <div className="flex items-start gap-4">
                                    <Network
                                        size={22}
                                        strokeWidth={1.4}
                                        className="mt-1 shrink-0 text-[#D2B87C]"
                                    />

                                    <div>
                                        <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-[#D2B87C]">
                                            Multidisciplinary Perspective
                                        </span>

                                        <p className="mt-2 font-serif text-[20px] leading-[1.25] text-white sm:text-[23px]">
                                            Technology connects knowledge,
                                            applications and professional
                                            opportunity.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =====================================================
                CAREER DOMAINS
            ====================================================== */}
            <section className="bg-[#F2EFE8]">
                <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">

                    <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="h-px w-8 bg-[#D2B87C]" />

                                <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#8F7746]">
                                    Career Directions
                                </span>
                            </div>

                            <h2 className="mt-4 font-serif text-[38px] leading-[1.02] tracking-[-0.03em] text-[#20235A] sm:text-[48px]">
                                A broad field of opportunities.
                            </h2>
                        </div>

                        <p className="max-w-md text-[13px] leading-7 text-[#1E1917]/55">
                            The multidisciplinary nature of Computer
                            Applications opens pathways across technology,
                            organizations and application-driven professional
                            environments.
                        </p>
                    </div>

                    <div className="mt-12 grid border-l border-t border-[#20235A]/10 sm:grid-cols-2 lg:grid-cols-3">
                        {careerPathways.map((pathway, index) => (
                            <div
                                key={pathway}
                                className="group min-h-[150px] border-b border-r border-[#20235A]/10 bg-white p-6 transition-colors duration-300 hover:bg-[#20235A] sm:p-7 lg:p-8"
                            >
                                <div className="flex items-start justify-between gap-5">
                                    <span className="font-serif text-[20px] text-[#D2B87C]">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <ArrowUpRight
                                        size={18}
                                        strokeWidth={1.4}
                                        className="text-[#20235A]/30 transition-colors duration-300 group-hover:text-[#D2B87C]"
                                    />
                                </div>

                                <h3 className="mt-10 max-w-xs font-serif text-[22px] leading-[1.15] text-[#20235A] transition-colors duration-300 group-hover:text-white">
                                    {pathway}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* =====================================================
                CLOSING STATEMENT
            ====================================================== */}
            <section className="bg-white">
                <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">

                    <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="h-px w-8 bg-[#D2B87C]" />

                                <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#8F7746]">
                                    MCA Career Scope
                                </span>
                            </div>

                            <h2 className="mt-4 max-w-md font-serif text-[38px] leading-[1.02] tracking-[-0.03em] text-[#20235A] sm:text-[48px]">
                                Preparing students for what comes next.
                            </h2>
                        </div>

                        <div className="border-t border-[#20235A]/10 pt-7">
                            <div className="flex items-start gap-5">
                                <CheckCircle2
                                    size={22}
                                    strokeWidth={1.4}
                                    className="mt-1 shrink-0 text-[#D2B87C]"
                                />

                                <div>
                                    <p className="font-serif text-[24px] leading-[1.35] text-[#20235A] sm:text-[28px]">
                                        Technical knowledge becomes more
                                        valuable when it is combined with
                                        analytical ability, communication,
                                        confidence and professional purpose.
                                    </p>

                                    <p className="mt-6 max-w-3xl text-[14px] leading-7 text-[#1E1917]/60 sm:text-[15px]">
                                        The MCA programme at NCERC is positioned
                                        to develop computer application
                                        professionals with the capabilities to
                                        participate in an increasingly
                                        technology-driven professional
                                        environment.
                                    </p>
                                </div>
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
