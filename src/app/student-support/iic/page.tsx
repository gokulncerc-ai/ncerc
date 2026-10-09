"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
    ArrowUpRight,
    ChevronRight,
    Lightbulb,
    MoveUpRight,
    Sparkles,
    Users,
} from "lucide-react";
import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";

const initiatives = [
    {
        number: "01",
        title: "VIKSIT BHARATH @ 2047",
        category: "IIC Initiative",
        image: "https://ncerc.ac.in/images/iic/poster.jpg",
        href: "https://ncerc.ac.in/iic.php#",
        description:
            "An initiative encouraging students to engage with the vision of a developed India and think about their role in shaping the nation's future.",
    },
    {
        number: "02",
        title: "IIC REGIONAL MEET",
        category: "Regional Collaboration",
        image: "https://ncerc.ac.in/images/iic/reg%20meet%2024.jpg",
        href: "https://ncerc.ac.in/iic.php#",
        description:
            "A regional platform that brings together innovation communities to exchange ideas, perspectives and experiences.",
    },
];

const page = () => {
    return (
        <>
            <SiteHeader />

            <main className="overflow-hidden bg-[#faf7f2] text-[#1E1917]">
                {/* =====================================================
                    HERO
                ====================================================== */}
                <section className="relative overflow-hidden bg-[#20235A] text-white">
                    <div className="absolute -left-32 top-20 h-80 w-80 rounded-full border border-white/[0.06]" />
                    <div className="absolute -left-16 top-36 h-56 w-56 rounded-full border border-[#D2B87C]/15" />
                    <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border border-[#D2B87C]/10" />
                    <div className="absolute right-[-60px] top-[-60px] h-72 w-72 rounded-full border border-white/[0.05]" />

                    <div className="relative mx-auto max-w-7xl px-6 pb-12 pt-20 sm:px-8 lg:px-12 lg:pb-14 lg:pt-24">
                        <div className="grid items-center gap-12 lg:grid-cols-[1fr_260px]">
                            <div className="max-w-4xl">
                                <div className="mb-6 flex items-center gap-3">
                                    <span className="h-px w-9 bg-[#D2B87C]" />

                                    <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                        Institution's Innovation Council
                                    </span>
                                </div>

                                <h1 className="font-serif text-4xl leading-[0.95] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
                                    Where ideas
                                    <span className="block text-[#D2B87C]">
                                        meet possibility.
                                    </span>
                                </h1>

                                <p className="mt-6 max-w-2xl text-sm leading-6 text-white/65 sm:text-base sm:leading-7">
                                    A platform for innovation, collaboration
                                    and future-focused thinking at NCERC.
                                </p>

                                <div className="mt-7 flex flex-wrap gap-3">
                                    <a
                                        href="#initiatives"
                                        className="group inline-flex items-center gap-2 rounded-full bg-[#D2B87C] px-5 py-3 text-xs font-semibold text-[#20235A] transition-all duration-300 hover:bg-white"
                                    >
                                        Explore IIC

                                        <ArrowUpRight
                                            size={15}
                                            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                        />
                                    </a>

                                    <a
                                        href="#identity"
                                        className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-xs font-medium text-white transition-all duration-300 hover:border-[#D2B87C] hover:text-[#D2B87C]"
                                    >
                                        Our identity
                                        <ChevronRight size={15} />
                                    </a>
                                </div>
                            </div>

                            <div className="hidden border-l border-white/15 pl-8 lg:block">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D2B87C]/40">
                                        <Lightbulb
                                            size={16}
                                            className="text-[#D2B87C]"
                                            strokeWidth={1.5}
                                        />
                                    </div>

                                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">
                                        Innovation ecosystem
                                    </span>
                                </div>

                                <p className="mt-6 font-serif text-2xl leading-[1.05] text-white sm:text-3xl">
                                    Think differently.
                                    <span className="block text-[#D2B87C]">
                                        Create meaningfully.
                                    </span>
                                </p>

                                <div className="mt-6 h-px w-10 bg-[#D2B87C]" />

                                <p className="mt-4 text-xs leading-5 text-white/45">
                                    Innovation, collaboration and
                                    future-focused thinking within the NCERC
                                    community.
                                </p>
                            </div>
                        </div>

                        <div className="mt-14 grid grid-cols-2 border-t border-white/10 pt-5 sm:grid-cols-4">
                            <div className="border-r border-white/10 pr-4">
                                <p className="font-serif text-xl text-[#D2B87C]">
                                    02
                                </p>

                                <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-white/40">
                                    Initiatives
                                </p>
                            </div>

                            <div className="border-r border-white/10 px-4">
                                <p className="font-serif text-xl text-[#D2B87C]">
                                    01
                                </p>

                                <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-white/40">
                                    National Vision
                                </p>
                            </div>

                            <div className="border-r border-white/10 px-4">
                                <p className="font-serif text-xl text-[#D2B87C]">
                                    01
                                </p>

                                <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-white/40">
                                    Regional Meet
                                </p>
                            </div>

                            <div className="pl-4">
                                <p className="font-serif text-xl text-[#D2B87C]">
                                    IIC
                                </p>

                                <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-white/40">
                                    NCERC
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    IIC HEADER IMAGE
                ====================================================== */}
                <section id="identity" className="bg-[#f2efe8]">
                    <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12 lg:py-16">
                        <div className="mb-7 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8F7746]">
                                    01 / IIC Identity
                                </span>

                                <span className="h-px w-10 bg-[#D2B87C]" />
                            </div>

                            <span className="hidden text-[9px] uppercase tracking-[0.18em] text-[#1E1917]/30 sm:block">
                                NCERC · NGI
                            </span>
                        </div>

                        {/* FULL IIC HEADER IMAGE */}
                        <div className="relative overflow-hidden rounded-[1.5rem] border border-[#20235A]/10 bg-white p-4 shadow-[0_14px_45px_rgba(32,35,90,0.07)] sm:p-6 lg:p-8">
                            <div className="absolute left-0 top-0 h-px w-20 bg-[#D2B87C]" />
                            <div className="absolute bottom-0 right-0 h-px w-20 bg-[#D2B87C]" />

                            <div className="flex items-center justify-center overflow-hidden rounded-xl bg-white px-2 py-6 sm:px-6 sm:py-8 lg:px-10 lg:py-10">
                                <Image
                                    src="https://ncerc.ac.in/images/iic/IIC_NCERC_NGI_Page_Header.png"
                                    alt="Institution's Innovation Council - NCERC"
                                    width={1000}
                                    height={173}
                                    unoptimized
                                    priority
                                    className="h-auto w-full max-w-[1100px] object-contain"
                                />
                            </div>
                        </div>

                        <div className="mt-8 grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8F7746]">
                                    Institution's Innovation Council
                                </p>
                            </div>

                            <div>
                                <h2 className="max-w-3xl font-serif text-3xl leading-[1.08] tracking-[-0.025em] text-[#20235A] sm:text-4xl lg:text-5xl">
                                    A platform where curiosity becomes
                                    <span className="text-[#8F7746]">
                                        {" "}action.
                                    </span>
                                </h2>

                                <p className="mt-6 max-w-2xl text-sm leading-7 text-[#1E1917]/60 sm:text-base">
                                    IIC initiatives provide opportunities for
                                    students to connect with innovation,
                                    collaboration and broader institutional
                                    experiences beyond the conventional
                                    classroom.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    ABOUT IIC
                ====================================================== */}
                <section className="bg-white">
                    <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
                        <div className="grid items-start gap-10 lg:grid-cols-[0.65fr_1.35fr]">
                            <div>
                                <div className="flex items-center gap-3">
                                    <Sparkles
                                        size={16}
                                        className="text-[#8F7746]"
                                    />

                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8F7746]">
                                        About IIC
                                    </span>
                                </div>
                            </div>

                            <div>
                                <h2 className="max-w-4xl font-serif text-3xl leading-[1.08] tracking-[-0.025em] text-[#20235A] sm:text-4xl lg:text-5xl">
                                    Innovation is not simply about having
                                    ideas.
                                    <span className="text-[#8F7746]">
                                        {" "}It is about giving those ideas
                                        room to move.
                                    </span>
                                </h2>

                                <div className="mt-7 grid gap-7 md:grid-cols-2">
                                    <p className="text-sm leading-7 text-[#1E1917]/60 sm:text-base">
                                        The Institution's Innovation Council
                                        creates a space for students to
                                        participate in innovation-oriented
                                        activities, connect with wider
                                        communities and experience different
                                        perspectives.
                                    </p>

                                    <p className="text-sm leading-7 text-[#1E1917]/60 sm:text-base">
                                        Through initiatives, meets and
                                        collaborative experiences, the IIC
                                        ecosystem encourages students to think
                                        beyond conventional boundaries and
                                        explore possibilities for the future.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    INITIATIVES
                ====================================================== */}
                <section
                    id="initiatives"
                    className="bg-[#faf7f2] px-6 py-16 sm:px-8 lg:px-12 lg:py-20"
                >
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-10 flex flex-col gap-4 border-b border-[#20235A]/10 pb-7 md:flex-row md:items-end md:justify-between">
                            <div>
                                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#8F7746]">
                                    02 / Featured initiatives
                                </p>

                                <h2 className="font-serif text-3xl tracking-[-0.025em] text-[#20235A] sm:text-4xl">
                                    Moments that bring
                                    <span className="text-[#8F7746]">
                                        {" "}ideas together.
                                    </span>
                                </h2>
                            </div>

                            <p className="max-w-xs text-xs leading-5 text-[#1E1917]/40">
                                Explore the initiatives featured through the
                                IIC platform at NCERC.
                            </p>
                        </div>

                        {/* FEATURED INITIATIVE */}
                        <Link
                            href={initiatives[0].href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block"
                        >
                            <article className="grid overflow-hidden rounded-[1.5rem] bg-[#20235A] lg:grid-cols-[1.3fr_0.7fr]">
                                <div className="relative aspect-[16/10] overflow-hidden sm:aspect-[16/9] lg:aspect-auto lg:min-h-[420px]">
                                    <Image
                                        src={initiatives[0].image}
                                        alt={initiatives[0].title}
                                        fill
                                        unoptimized
                                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#20235A]/80 via-transparent to-[#20235A]/10" />

                                    <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/20 bg-[#20235A]/65 px-3 py-2 backdrop-blur-md">
                                        <span className="font-serif text-sm text-[#D2B87C]">
                                            01
                                        </span>

                                        <span className="h-3 w-px bg-white/20" />

                                        <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-white/75">
                                            IIC Initiative
                                        </span>
                                    </div>

                                    <div className="absolute bottom-6 left-6 right-6">
                                        <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#D2B87C]">
                                            Featured
                                        </p>

                                        <h3 className="max-w-xl font-serif text-2xl leading-tight text-white sm:text-3xl">
                                            {initiatives[0].title}
                                        </h3>
                                    </div>
                                </div>

                                <div className="flex flex-col justify-between p-7 text-white sm:p-8 lg:p-10">
                                    <div>
                                        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D2B87C]/30">
                                            <Lightbulb
                                                size={19}
                                                strokeWidth={1.5}
                                                className="text-[#D2B87C]"
                                            />
                                        </div>

                                        <p className="mt-5 text-[9px] font-bold uppercase tracking-[0.2em] text-[#D2B87C]">
                                            Viksit Bharath @ 2047
                                        </p>

                                        <div className="mt-5 h-px w-10 bg-[#D2B87C]" />

                                        <p className="mt-6 text-sm leading-6 text-white/55">
                                            {initiatives[0].description}
                                        </p>
                                    </div>

                                    <div className="mt-9">
                                        <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
                                            <span className="text-[9px] uppercase tracking-[0.15em] text-white/40">
                                                Initiative
                                            </span>

                                            <span className="font-serif text-lg text-[#D2B87C]">
                                                01
                                            </span>
                                        </div>

                                        <div className="flex items-center justify-between text-xs font-medium">
                                            <span>
                                                View initiative details
                                            </span>

                                            <ArrowUpRight
                                                size={16}
                                                className="text-[#D2B87C] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </Link>

                        {/* SECOND INITIATIVE */}
                        <Link
                            href={initiatives[1].href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group mt-5 block"
                        >
                            <article className="grid overflow-hidden rounded-[1.5rem] border border-[#20235A]/10 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-[#D2B87C]/60 hover:shadow-[0_16px_45px_rgba(32,35,90,0.08)] md:grid-cols-[0.48fr_0.52fr]">
                                <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto md:min-h-[320px]">
                                    <Image
                                        src={initiatives[1].image}
                                        alt={initiatives[1].title}
                                        fill
                                        unoptimized
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#20235A]/65 via-transparent to-transparent" />

                                    <div className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#20235A]/85">
                                        <span className="font-serif text-sm text-[#D2B87C]">
                                            02
                                        </span>
                                    </div>
                                </div>

                                <div className="flex flex-col justify-between p-7 sm:p-8 lg:p-10">
                                    <div>
                                        <div className="flex items-center gap-3">
                                            <span className="h-px w-7 bg-[#D2B87C]" />

                                            <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#8F7746]">
                                                Regional collaboration
                                            </span>
                                        </div>

                                        <h3 className="mt-5 font-serif text-2xl leading-[1.1] tracking-[-0.02em] text-[#20235A] sm:text-3xl">
                                            {initiatives[1].title}
                                        </h3>

                                        <p className="mt-5 text-sm leading-6 text-[#1E1917]/55">
                                            {initiatives[1].description}
                                        </p>
                                    </div>

                                    <div className="mt-8 flex items-center justify-between border-t border-[#20235A]/10 pt-5">
                                        <span className="text-[9px] font-bold uppercase tracking-[0.17em] text-[#20235A]/45">
                                            Explore regional meet
                                        </span>

                                        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#20235A]/10 text-[#20235A] transition-all duration-300 group-hover:border-[#D2B87C] group-hover:bg-[#D2B87C]">
                                            <MoveUpRight size={15} />
                                        </span>
                                    </div>
                                </div>
                            </article>
                        </Link>
                    </div>
                </section>

                {/* =====================================================
                    IIC ECOSYSTEM
                ====================================================== */}
                <section className="bg-white">
                    <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
                        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
                            <div>
                                <div className="flex items-center gap-3">
                                    <Sparkles
                                        size={16}
                                        className="text-[#8F7746]"
                                    />

                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8F7746]">
                                        The IIC ecosystem
                                    </span>
                                </div>

                                <h2 className="mt-5 max-w-md font-serif text-3xl leading-[1.05] tracking-[-0.025em] text-[#20235A] sm:text-4xl">
                                    More than an event.
                                    <span className="block text-[#8F7746]">
                                        A mindset.
                                    </span>
                                </h2>
                            </div>

                            <div className="grid border-t border-[#20235A]/10 sm:grid-cols-3">
                                <div className="border-b border-[#20235A]/10 py-6 sm:border-b-0 sm:border-r sm:pr-7">
                                    <span className="font-serif text-lg text-[#D2B87C]">
                                        01
                                    </span>

                                    <h3 className="mt-7 font-serif text-xl text-[#20235A]">
                                        Explore
                                    </h3>

                                    <p className="mt-3 text-xs leading-5 text-[#1E1917]/50">
                                        Discover new ideas, perspectives and
                                        possibilities through meaningful
                                        experiences.
                                    </p>
                                </div>

                                <div className="border-b border-[#20235A]/10 py-6 sm:border-b-0 sm:border-r sm:px-7">
                                    <span className="font-serif text-lg text-[#D2B87C]">
                                        02
                                    </span>

                                    <h3 className="mt-7 font-serif text-xl text-[#20235A]">
                                        Connect
                                    </h3>

                                    <p className="mt-3 text-xs leading-5 text-[#1E1917]/50">
                                        Engage with peers, communities and
                                        innovation-focused platforms.
                                    </p>
                                </div>

                                <div className="py-6 sm:pl-7">
                                    <span className="font-serif text-lg text-[#D2B87C]">
                                        03
                                    </span>

                                    <h3 className="mt-7 font-serif text-xl text-[#20235A]">
                                        Create
                                    </h3>

                                    <p className="mt-3 text-xs leading-5 text-[#1E1917]/50">
                                        Transform curiosity into action and
                                        contribute to a culture of innovation.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    CLOSING STATEMENT
                ====================================================== */}
                <section className="bg-[#f2efe8]">
                    <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
                        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.55fr]">
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8F7746]">
                                    Innovation at NCERC
                                </p>

                                <h2 className="mt-4 max-w-3xl font-serif text-3xl leading-[1.05] tracking-[-0.03em] text-[#20235A] sm:text-4xl">
                                    The future belongs to people willing to
                                    imagine it
                                    <span className="text-[#8F7746]">
                                        {" "}first.
                                    </span>
                                </h2>
                            </div>

                            <div className="border-l border-[#20235A]/15 pl-7 lg:pl-10">
                                <Users
                                    size={22}
                                    strokeWidth={1.4}
                                    className="text-[#8F7746]"
                                />

                                <p className="mt-5 text-sm leading-6 text-[#1E1917]/55">
                                    IIC provides students with opportunities to
                                    participate, interact and experience
                                    innovation as part of their institutional
                                    journey.
                                </p>

                                <div className="mt-6 h-px w-10 bg-[#D2B87C]" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    CTA
                ====================================================== */}
                <section className="bg-[#20235A] px-6 py-16 text-white sm:px-8 lg:px-12 lg:py-20">
                    <div className="mx-auto max-w-7xl">
                        <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 px-6 py-10 sm:px-10 lg:px-12 lg:py-12">
                            <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full border border-[#D2B87C]/15" />
                            <div className="absolute -bottom-32 left-[30%] h-72 w-72 rounded-full border border-white/[0.05]" />

                            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                                <div className="max-w-2xl">
                                    <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#D2B87C]">
                                        Institution's Innovation Council
                                    </p>

                                    <h2 className="font-serif text-3xl leading-[1.05] tracking-[-0.025em] sm:text-4xl lg:text-5xl">
                                        Keep questioning.
                                        <span className="block text-[#D2B87C]">
                                            Keep creating.
                                        </span>
                                    </h2>

                                    <p className="mt-5 max-w-xl text-sm leading-6 text-white/55">
                                        Discover the initiatives and
                                        experiences that make innovation part
                                        of the NCERC journey.
                                    </p>
                                </div>

                                <a
                                    href="#initiatives"
                                    className="group inline-flex w-fit items-center gap-2 rounded-full bg-[#D2B87C] px-5 py-3 text-xs font-semibold text-[#20235A] transition-all duration-300 hover:bg-white"
                                >
                                    Explore initiatives

                                    <ArrowUpRight
                                        size={14}
                                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <FooterSection />
        </>
    );
};

export default page;