"use client";

import React from "react";
import Link from "next/link";
import {
    ArrowRight,
    ArrowUpRight,
    HeartHandshake,
    Leaf,
    Users,
    ShieldCheck,
    BookOpen,
    HandHeart,
    ChevronRight,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";

const page = () => {
    const focusAreas = [
        {
            icon: HeartHandshake,
            title: "Community Service",
            description:
                "Encouraging students to participate in initiatives that support communities and promote social welfare.",
        },
        {
            icon: Leaf,
            title: "Environmental Conservation",
            description:
                "Promoting awareness and responsible action towards environmental protection and sustainability.",
        },
        {
            icon: Users,
            title: "Social Responsibility",
            description:
                "Developing a strong sense of responsibility, teamwork and service among student volunteers.",
        },
        {
            icon: BookOpen,
            title: "Community Development",
            description:
                "Engaging students in activities that contribute to literacy, rural development and community wellbeing.",
        },
    ];

    const values = [
        "Leadership",
        "Discipline",
        "Teamwork",
        "National Integration",
    ];

    return (
        <>
            <SiteHeader />

            <main className="min-h-screen bg-[#faf7f2] text-[#1E1917]">
                {/* HERO */}
                <section className="relative overflow-hidden bg-[#20235A]">
                    {/* Decorative elements */}
                    <div className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full border border-[#D2B87C]/20" />
                    <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full border border-[#D2B87C]/15" />
                    <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#D2B87C]/5" />

                    <div className="relative mx-auto max-w-8xl px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
                        <div className="grid items-end gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
                            {/* Hero content */}
                            <div>
                                <div className="mb-7 flex items-center gap-4">
                                    <span className="h-px w-10 bg-[#D2B87C]" />
                                    <span className="text-xs font-medium uppercase tracking-[0.28em] text-[#D2B87C]">
                                        Student Engagement • Community Service
                                    </span>
                                </div>

                                <h1 className="max-w-4xl font-serif text-4xl leading-[1.08] text-white sm:text-5xl lg:text-6xl">
                                    National Service
                                    <span className="block text-[#D2B87C]">
                                        Scheme
                                    </span>
                                </h1>

                                <p className="mt-7 max-w-2xl text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
                                    Developing responsible citizens through
                                    community service, social responsibility,
                                    teamwork and meaningful engagement with
                                    society.
                                </p>

                                <div className="mt-9 flex flex-wrap gap-3">
                                    <Link
                                        href="#about-nss"
                                        className="group inline-flex items-center gap-3 rounded-full bg-[#D2B87C] px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#20235A] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
                                    >
                                        About NSS
                                        <ArrowRight
                                            size={15}
                                            className="transition-transform duration-300 group-hover:translate-x-1"
                                        />
                                    </Link>

                                    <Link
                                        href="/student-support/nss/activities"
                                        className="inline-flex items-center gap-3 rounded-full border border-white/25 px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:border-[#D2B87C] hover:text-[#D2B87C]"
                                    >
                                        Activities
                                        <ArrowUpRight size={15} />
                                    </Link>
                                </div>
                            </div>

                            {/* Hero information panel */}
                            <div className="lg:justify-self-end">
                                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] p-7 backdrop-blur-sm sm:p-8">
                                    <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-[#D2B87C]/10" />

                                    <div className="relative">
                                        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-[#D2B87C]/30 bg-[#D2B87C]/10 text-[#D2B87C]">
                                            <HandHeart size={21} />
                                        </div>

                                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                                            NSS Philosophy
                                        </p>

                                        <h2 className="mt-4 font-serif text-2xl leading-tight text-white sm:text-3xl">
                                            Not Me,
                                            <span className="block text-[#D2B87C]">
                                                But You
                                            </span>
                                        </h2>

                                        <p className="mt-5 text-sm leading-7 text-white/60">
                                            A philosophy centred on selfless
                                            service, teamwork and a commitment
                                            to making a positive difference in
                                            society.
                                        </p>

                                        <div className="mt-7 border-t border-white/10 pt-5">
                                            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/40">
                                                National Service Scheme
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom navigation */}
                        <div className="mt-16 border-t border-white/10 pt-5">
                            <div className="flex flex-wrap items-center gap-6 sm:gap-8">
                                <Link
                                    href="/nss"
                                    className="group flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-white"
                                >
                                    <span className="h-1.5 w-1.5 rounded-full bg-[#D2B87C]" />
                                    About NSS
                                </Link>

                                <Link
                                   href="/student-support/nss/activities"
                                    className="group flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-white/45 transition-colors hover:text-[#D2B87C]"
                                >
                                    Activities
                                    <ArrowUpRight
                                        size={13}
                                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ABOUT INTRO */}
                <section
                    id="about-nss"
                    className="bg-[#faf7f2] py-20 sm:py-24 lg:py-28"
                >
                    <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-12">
                        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
                            {/* Section heading */}
                            <div>
                                <div className="flex items-center gap-3">
                                    <span className="h-px w-8 bg-[#D2B87C]" />
                                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#20235A]/60">
                                        About NSS
                                    </span>
                                </div>

                                <h2 className="mt-5 max-w-md font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                                    Service that
                                    <span className="block text-[#8F7746]">
                                        shapes character.
                                    </span>
                                </h2>

                                <p className="mt-6 max-w-sm text-sm leading-7 text-[#1E1917]/60">
                                    NSS provides students with opportunities to
                                    learn, serve and contribute meaningfully to
                                    society.
                                </p>
                            </div>

                            {/* Main content */}
                            <div className="border-l border-[#20235A]/10 pl-6 sm:pl-10">
                                <p className="text-base leading-8 text-[#1E1917]/75 sm:text-lg sm:leading-9">
                                    The National Service Scheme (
                                    <strong className="font-semibold text-[#20235A]">
                                        NSS
                                    </strong>
                                    ) is a government-sponsored public service
                                    program in India, launched in 1969 by the
                                    Ministry of Youth Affairs and Sports. It
                                    aims to develop students personality
                                    through community service and social
                                    responsibility. NSS provides young
                                    volunteers, primarily college and university
                                    students, with opportunities to engage in
                                    activities that promote social welfare,
                                    national integration, and community
                                    development.
                                </p>

                                <div className="mt-9 grid gap-5 sm:grid-cols-2">
                                    <div className="rounded-2xl border border-[#20235A]/10 bg-white p-6">
                                        <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#20235A]/5 text-[#20235A]">
                                            <ShieldCheck size={19} />
                                        </div>

                                        <h3 className="font-serif text-xl text-[#20235A]">
                                            Social Responsibility
                                        </h3>

                                        <p className="mt-3 text-sm leading-7 text-[#1E1917]/60">
                                            Encouraging young volunteers to
                                            contribute to social welfare and
                                            community development.
                                        </p>
                                    </div>

                                    <div className="rounded-2xl border border-[#20235A]/10 bg-white p-6">
                                        <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#D2B87C]/15 text-[#8F7746]">
                                            <Users size={19} />
                                        </div>

                                        <h3 className="font-serif text-xl text-[#20235A]">
                                            National Integration
                                        </h3>

                                        <p className="mt-3 text-sm leading-7 text-[#1E1917]/60">
                                            Bringing students together through
                                            service, teamwork and shared
                                            responsibility.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* PHILOSOPHY */}
                <section className="bg-white py-20 sm:py-24 lg:py-28">
                    <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-12">
                        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
                            <div>
                                <div className="flex items-center gap-3">
                                    <span className="h-px w-8 bg-[#D2B87C]" />
                                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#20235A]/60">
                                        The NSS Philosophy
                                    </span>
                                </div>

                                <h2 className="mt-5 max-w-2xl font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                                    Not Me,
                                    <span className="text-[#8F7746]">
                                        {" "}
                                        But You.
                                    </span>
                                </h2>

                                <p className="mt-7 max-w-2xl text-base leading-8 text-[#1E1917]/65 sm:text-lg sm:leading-9">
                                    The core philosophy of NSS is{" "}
                                    <strong className="font-semibold text-[#20235A]">
                                        &quot;Not Me, But You,&quot;
                                    </strong>{" "}
                                    emphasizing selfless service and teamwork.
                                    Volunteers participate in various
                                    activities such as environmental
                                    conservation, health and hygiene awareness,
                                    literacy programs, disaster relief, and
                                    rural development.
                                </p>

                                <p className="mt-5 max-w-2xl text-base leading-8 text-[#1E1917]/65 sm:text-lg sm:leading-9">
                                    Through these initiatives, NSS fosters
                                    leadership qualities, discipline, and a
                                    sense of duty toward society.
                                </p>
                            </div>

                            {/* Motto card */}
                            <div className="relative">
                                <div className="absolute -inset-3 rounded-[2rem] border border-[#D2B87C]/20" />

                                <div className="relative overflow-hidden rounded-[1.75rem] bg-[#20235A] p-8 sm:p-10 lg:p-12">
                                    <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full border border-[#D2B87C]/20" />

                                    <div className="relative">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#D2B87C]/30 bg-[#D2B87C]/10 text-[#D2B87C]">
                                            <HeartHandshake size={24} />
                                        </div>

                                        <p className="mt-10 text-xs font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                                            NSS Motto
                                        </p>

                                        <h3 className="mt-4 font-serif text-3xl leading-tight text-white sm:text-4xl">
                                            Service
                                            <span className="block text-[#D2B87C]">
                                                Before Self
                                            </span>
                                        </h3>

                                        <div className="mt-8 h-px w-full bg-white/10" />

                                        <p className="mt-6 text-sm leading-7 text-white/60">
                                            A commitment to placing service,
                                            community and collective wellbeing
                                            at the heart of student engagement.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FOCUS AREAS */}
                <section className="bg-[#faf7f2] py-20 sm:py-24 lg:py-28">
                    <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-12">
                        <div className="max-w-2xl">
                            <div className="flex items-center gap-3">
                                <span className="h-px w-8 bg-[#D2B87C]" />
                                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#20235A]/60">
                                    Areas of Engagement
                                </span>
                            </div>

                            <h2 className="mt-5 font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                                Learning through
                                <span className="block text-[#8F7746]">
                                    meaningful action.
                                </span>
                            </h2>

                            <p className="mt-5 text-sm leading-7 text-[#1E1917]/60 sm:text-base">
                                NSS volunteers engage in initiatives that
                                connect education with social welfare,
                                environmental responsibility and community
                                development.
                            </p>
                        </div>

                        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-[#20235A]/10 bg-[#20235A]/10 sm:grid-cols-2 lg:grid-cols-4">
                            {focusAreas.map((item, index) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={item.title}
                                        className="group bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-[#20235A]"
                                    >
                                        <div className="flex items-start justify-between">
                                            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#20235A]/5 text-[#20235A] transition-colors duration-300 group-hover:bg-[#D2B87C]/15 group-hover:text-[#D2B87C]">
                                                <Icon size={19} />
                                            </div>

                                            <span className="font-serif text-2xl text-[#20235A]/15 transition-colors duration-300 group-hover:text-white/15">
                                                0{index + 1}
                                            </span>
                                        </div>

                                        <h3 className="mt-8 font-serif text-xl text-[#20235A] transition-colors duration-300 group-hover:text-white">
                                            {item.title}
                                        </h3>

                                        <p className="mt-3 text-sm leading-7 text-[#1E1917]/60 transition-colors duration-300 group-hover:text-white/55">
                                            {item.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* VALUES */}
                <section className="bg-white py-20 sm:py-24">
                    <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-12">
                        <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
                            <div>
                                <div className="flex items-center gap-3">
                                    <span className="h-px w-8 bg-[#D2B87C]" />
                                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#20235A]/60">
                                        Student Development
                                    </span>
                                </div>

                                <h2 className="mt-5 font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl">
                                    Building qualities
                                    <span className="block text-[#8F7746]">
                                        beyond the classroom.
                                    </span>
                                </h2>
                            </div>

                            <div>
                                <p className="max-w-3xl text-base leading-8 text-[#1E1917]/65 sm:text-lg sm:leading-9">
                                    With its motto of{" "}
                                    <strong className="font-semibold text-[#20235A]">
                                    &quot;Service Before Self,&quot;
                                    </strong>{" "}
                                    NSS plays a vital role in shaping
                                    responsible citizens who contribute
                                    positively to the nation.
                                </p>

                                <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4">
                                    {values.map((value, index) => (
                                        <div
                                            key={value}
                                            className="rounded-2xl border border-[#20235A]/10 bg-[#faf7f2] p-5"
                                        >
                                            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#D2B87C]">
                                                0{index + 1}
                                            </span>

                                            <p className="mt-4 font-serif text-lg leading-tight text-[#20235A]">
                                                {value}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ACTIVITIES CTA */}
                <section className="bg-[#faf7f2] py-20 sm:py-24 lg:py-28">
                    <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-12">
                        <div className="relative overflow-hidden rounded-3xl bg-[#20235A] px-7 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
                            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#D2B87C]/15" />
                            <div className="pointer-events-none absolute -bottom-28 -left-20 h-64 w-64 rounded-full bg-[#D2B87C]/5" />

                            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                                <div className="max-w-2xl">
                                    <div className="flex items-center gap-3">
                                        <span className="h-px w-8 bg-[#D2B87C]" />
                                        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                                            Explore NSS
                                        </span>
                                    </div>

                                    <h2 className="mt-5 font-serif text-3xl leading-tight text-white sm:text-4xl">
                                        Discover the work of
                                        <span className="block text-[#D2B87C]">
                                            NSS volunteers.
                                        </span>
                                    </h2>

                                    <p className="mt-5 text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
                                        Explore the activities and initiatives
                                        undertaken by NSS volunteers as part
                                        of their commitment to service and
                                        community development.
                                    </p>
                                </div>

                                <Link
                                    href="/student-support/nss/activities"
                                    className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-[#D2B87C] px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#20235A] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
                                >
                                    View Activities
                                    <ChevronRight
                                        size={16}
                                        className="transition-transform duration-300 group-hover:translate-x-1"
                                    />
                                </Link>
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