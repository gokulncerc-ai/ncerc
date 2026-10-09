"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
    ArrowUpRight,
    BriefcaseBusiness,
    CalendarDays,
    ChevronRight,
    CircleCheck,
    Compass,
    Cpu,
    Lightbulb,
    Rocket,
    ShieldCheck,
    Sparkles,
    Target,
    Users,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import Iedcnavigation from "../../student-support/iedc/Iedcnavigation/navigation"

const objectives = [
    {
        number: "01",
        title: "Guide Young Entrepreneurs",
        description:
            "Guide and encourage students who are interested in entrepreneurship and help them move their ideas towards meaningful opportunities.",
        icon: Compass,
    },
    {
        number: "02",
        title: "Support Innovative Ideas",
        description:
            "Identify students with innovative ideas and bring them under the IEDC ecosystem for mentoring, collaboration and development.",
        icon: Lightbulb,
    },
    {
        number: "03",
        title: "Coordinate Entrepreneurship",
        description:
            "Coordinate entrepreneurship-related activities across the college and create opportunities for students to explore enterprise.",
        icon: Users,
    },
    {
        number: "04",
        title: "Support IPR",
        description:
            "Encourage and support students in understanding intellectual property rights and protecting their innovative work.",
        icon: ShieldCheck,
    },
    {
        number: "05",
        title: "Create Maximum Startups",
        description:
            "Build an entrepreneurial culture that transforms promising ideas into sustainable startups and ventures.",
        icon: Rocket,
    },
];

const staffCoordinators = [
    {
        name: "Mr. Baisel Paul",
        designation: "Assistant Professor and IEDC Nodal Officer I",
        department: "Mechanical Engineering",
    },
    {
        name: "Mrs. Smita Unnikrishnan",
        designation: "Assistant Professor and IEDC Nodal Officer II",
        department: "Computer Science and Engineering",
    },
    {
        name: "Mr. Maheswaran K",
        designation: "Assistant Professor",
        department: "Electrical and Electronics Engineering",
    },
    {
        name: "Mr. Rajkumar P",
        designation: "Assistant Professor",
        department: "Electronics and Communication Engineering",
    },
    {
        name: "Mr. Ranjith PN",
        designation: "Assistant Professor",
        department: "Mechatronics Engineering",
    },
];

const executiveCommittee = [
    {
        name: "Baisel Paul",
        role: "Nodal Officer I",
        image:
            "https://ncerc.ac.in/images/dpt/iedc/about/2024/baisel_paul_nodal_officer_I.jpg",
    },
    {
        name: "Smita Unnikrishnan",
        role: "Nodal Officer II",
        image:
            "https://ncerc.ac.in/images/dpt/iedc/about/2024/smita_unnikrishnan_nodal_officer_II.jpg",
    },
    {
        name: "Abhinav Babu",
        role: "Student Lead I",
        image:
            "https://ncerc.ac.in/images/dpt/iedc/about/2024/abhinav_babu_student_lead_I.jpg",
    },
    {
        name: "Anitta Valsan",
        role: "Student Lead II",
        image:
            "https://ncerc.ac.in/images/dpt/iedc/about/2024/anitta_valsan_student_lead_II.jpg",
    },
    {
        name: "Abhijith Vinu",
        role: "Quality and Operations Lead",
        image:
            "https://ncerc.ac.in/images/dpt/iedc/about/2024/abhijith_vinu_COO.jpg",
    },
    {
        name: "Anirudh Babu",
        role: "Creative and Innovation Lead",
        image:
            "https://ncerc.ac.in/images/dpt/iedc/about/2024/anirudh_babu_creative_lead.jpg",
    },
    {
        name: "Dazzal David",
        role: "Community Lead",
        image:
            "https://ncerc.ac.in/images/dpt/iedc/about/2024/dazzal_david_cd_community_lead.jpg",
    },
    {
        name: "Abhijith K",
        role: "Technology Lead",
        image:
            "https://ncerc.ac.in/images/dpt/iedc/about/2024/abhijith_k_technology_lead.jpg",
    },
    {
        name: "Arya K R",
        role: "Finance Lead",
        image:
            "https://ncerc.ac.in/images/dpt/iedc/about/2024/arya_kr_finance_lead.jpg",
    },
    {
        name: "Ajith T U",
        role: "Branding and Marketing Lead",
        image:
            "https://ncerc.ac.in/images/dpt/iedc/about/2024/ajith_tu_branding_marketing_lead.jpg",
    },
    {
        name: "Nawal Akber",
        role: "Women Entrepreneurship Lead",
        image:
            "https://ncerc.ac.in/images/dpt/iedc/about/2024/nawal_akber_women_lead.jpg",
    },
    {
        name: "Abhinav Shaji",
        role: "IPR and Research Lead",
        image:
            "https://ncerc.ac.in/images/dpt/iedc/about/2024/abhinav_shaji_ipr_research_lead.jpg",
    },
];

const page = () => {
    return (
        <>
            <SiteHeader />

            <main className="bg-[#faf7f2] text-[#1E1917]">
                {/* HERO */}
                <section className="relative overflow-hidden bg-[#20235A]">
                    <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border border-[#D2B87C]/20" />
                    <div className="absolute -right-10 top-10 h-52 w-52 rounded-full border border-[#D2B87C]/10" />
                    <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full border border-white/10" />

                    <div className="relative mx-auto max-w-[1440px] px-6 pb-16 pt-24 sm:px-10 lg:px-16 lg:pb-20 lg:pt-32">
                        <div className="grid items-end gap-12 lg:grid-cols-[1.35fr_0.65fr]">
                            <div className="max-w-4xl">
                                <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#D2B87C]/30 bg-white/[0.04] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                    <Sparkles className="h-3.5 w-3.5" />
                                    Innovation & Entrepreneurship
                                </div>

                                <h1 className="font-serif text-5xl font-medium leading-[0.98] tracking-[-0.035em] text-white sm:text-6xl lg:text-7xl xl:text-[82px]">
                                    IEDC
                                </h1>

                                <p className="mt-7 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
                                    Building an entrepreneurial ecosystem where
                                    innovative ideas are nurtured, developed and
                                    transformed into meaningful ventures.
                                </p>

                                <div className="mt-9 flex flex-wrap gap-3">
                                    <Link
                                        href="#objectives"
                                        className="group inline-flex items-center gap-3 rounded-full bg-[#D2B87C] px-5 py-3 text-sm font-semibold text-[#20235A] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
                                    >
                                        Explore IEDC
                                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                    </Link>

                                    <Link
                                        href="#committee"
                                        className="inline-flex items-center gap-3 rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-[#D2B87C]/60 hover:bg-white/5"
                                    >
                                        Meet the Team
                                        <ChevronRight className="h-4 w-4" />
                                    </Link>
                                </div>
                            </div>

                            <div className="lg:pb-2">
                                <div className="border-l border-[#D2B87C]/40 pl-6 lg:pl-8">
                                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                        IEDC • NCERC
                                    </p>

                                    <p className="mt-4 font-serif text-2xl leading-tight text-white sm:text-3xl">
                                        From ideas to innovation.
                                        <span className="block text-white/50">
                                            From innovation to enterprise.
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-white/10">
                        <div className="mx-auto grid max-w-[1440px] divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                            <div className="px-6 py-5 sm:px-10 lg:px-16">
                                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
                                    Established
                                </p>
                                <p className="mt-1 text-sm font-medium text-white">
                                    ED Club · 2016
                                </p>
                            </div>

                            <div className="px-6 py-5 sm:px-10 lg:px-16">
                                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
                                    TBI Sanction
                                </p>
                                <p className="mt-1 text-sm font-medium text-white">
                                    January 01 · 2019
                                </p>
                            </div>

                            <div className="px-6 py-5 sm:px-10 lg:px-16">
                                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
                                    Focus
                                </p>
                                <p className="mt-1 text-sm font-medium text-white">
                                    Innovation · Startups · IPR
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* -----navigation starts------ */}
                <Iedcnavigation />
                {/* INTRODUCTION */}
                <section className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
                    <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                About IEDC
                            </p>

                            <h2 className="mt-4 max-w-lg font-serif text-4xl leading-[1.05] tracking-[-0.025em] text-[#20235A] sm:text-5xl">
                                Creating space for ideas to become real.
                            </h2>
                        </div>

                        <div className="max-w-3xl">
                            <p className="text-lg leading-8 text-[#1E1917]/75 sm:text-xl sm:leading-9">
                                The IEDC at NCERC is designed to nurture an
                                entrepreneurial mindset among students by
                                connecting innovative thinking with guidance,
                                collaboration and practical opportunities.
                            </p>

                            <p className="mt-6 text-base leading-8 text-[#1E1917]/60">
                                Students with promising ideas are brought under
                                the IEDC ecosystem, where they can explore
                                entrepreneurship, intellectual property,
                                innovation and startup development. The
                                initiative also coordinates entrepreneurship
                                activities across the institution and works
                                towards creating a strong culture of enterprise.
                            </p>
                        </div>
                    </div>
                </section>

                {/* OBJECTIVES */}
                <section
                    id="objectives"
                    className="border-y border-[#1E1917]/10 bg-white"
                >
                    <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
                        <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
                            <div className="max-w-2xl">
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                    Our Objectives
                                </p>

                                <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-0.025em] text-[#20235A] sm:text-5xl">
                                    Five directions. One entrepreneurial vision.
                                </h2>
                            </div>

                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#20235A]/15 text-[#20235A]">
                                <Target className="h-5 w-5" />
                            </div>
                        </div>

                        <div className="grid gap-px overflow-hidden rounded-3xl border border-[#1E1917]/10 bg-[#1E1917]/10 sm:grid-cols-2 lg:grid-cols-5">
                            {objectives.map((objective) => {
                                const Icon = objective.icon;

                                return (
                                    <article
                                        key={objective.number}
                                        className="group bg-white p-7 transition-all duration-300 hover:bg-[#faf7f2] sm:p-8"
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs font-semibold tracking-[0.15em] text-[#8F7746]">
                                                {objective.number}
                                            </span>

                                            <Icon className="h-5 w-5 text-[#20235A]/60 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#20235A]" />
                                        </div>

                                        <h3 className="mt-12 font-serif text-2xl leading-tight text-[#20235A]">
                                            {objective.title}
                                        </h3>

                                        <p className="mt-4 text-sm leading-7 text-[#1E1917]/60">
                                            {objective.description}
                                        </p>
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* REGISTRATION / MILESTONES */}
                <section className="bg-[#f2efe8]">
                    <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
                        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                    Registration & Recognition
                                </p>

                                <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-0.025em] text-[#20235A] sm:text-5xl">
                                    A foundation built for entrepreneurship.
                                </h2>

                                <p className="mt-6 max-w-xl text-base leading-8 text-[#1E1917]/65">
                                    The IEDC journey at NCERC is supported by
                                    institutional and government initiatives
                                    aimed at strengthening entrepreneurship and
                                    innovation.
                                </p>
                            </div>

                            <div className="space-y-5">
                                <article className="rounded-3xl border border-[#1E1917]/10 bg-white p-7 sm:p-9">
                                    <div className="flex gap-5">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#20235A] text-[#D2B87C]">
                                            <CalendarDays className="h-5 w-5" />
                                        </div>

                                        <div>
                                            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8F7746]">
                                                2016
                                            </p>

                                            <h3 className="mt-2 font-serif text-2xl text-[#20235A]">
                                                ED Club Registration
                                            </h3>

                                            <p className="mt-3 text-sm leading-7 text-[#1E1917]/60">
                                                ED Club of NCERC was registered
                                                with the Directorate of
                                                Industries & Commerce under the
                                                ED Club programme of the
                                                Department of Industries &
                                                Commerce, Government of Kerala.
                                            </p>
                                        </div>
                                    </div>
                                </article>

                                <article className="rounded-3xl border border-[#1E1917]/10 bg-[#20235A] p-7 text-white sm:p-9">
                                    <div className="flex gap-5">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#D2B87C] text-[#20235A]">
                                            <Rocket className="h-5 w-5" />
                                        </div>

                                        <div>
                                            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D2B87C]">
                                                January 01 · 2019
                                            </p>

                                            <h3 className="mt-2 font-serif text-2xl">
                                                TBI Sanction
                                            </h3>

                                            <p className="mt-3 text-sm leading-7 text-white/65">
                                                NCERC received sanction for
                                                starting TBI at NGI from
                                                NSTEDP, Government of India,
                                                strengthening the institutional
                                                focus on technology,
                                                entrepreneurship and
                                                incubation.
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </section>

                {/* STAFF COORDINATORS */}
                <section className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
                    <div className="mb-12 max-w-3xl">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                            Staff Coordinators
                        </p>

                        <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-0.025em] text-[#20235A] sm:text-5xl">
                            Faculty leadership behind the IEDC.
                        </h2>
                    </div>

                    <div className="overflow-hidden rounded-3xl border border-[#1E1917]/10 bg-white">
                        <div className="hidden grid-cols-[70px_1.1fr_1.3fr_1fr] border-b border-[#1E1917]/10 bg-[#f2efe8] px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#8F7746] sm:grid lg:px-8">
                            <span>No.</span>
                            <span>Staff Name</span>
                            <span>Designation</span>
                            <span>Department</span>
                        </div>

                        {staffCoordinators.map((member, index) => (
                            <div
                                key={member.name}
                                className="grid gap-3 border-b border-[#1E1917]/10 px-6 py-6 last:border-b-0 sm:grid-cols-[70px_1.1fr_1.3fr_1fr] sm:items-center sm:gap-0 lg:px-8"
                            >
                                <div className="text-xs font-semibold text-[#8F7746]">
                                    {String(index + 1).padStart(2, "0")}
                                </div>

                                <div>
                                    <p className="font-serif text-xl text-[#20235A]">
                                        {member.name}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-sm leading-6 text-[#1E1917]/65">
                                        {member.designation}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-sm leading-6 text-[#1E1917]/60">
                                        {member.department}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* EXECUTIVE COMMITTEE DIRECTORY */}
                <section className="bg-[#f2efe8]">
                    <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
                        <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
                            <div className="max-w-3xl">
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                    Executive Committee
                                </p>

                                <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-0.025em] text-[#20235A] sm:text-5xl">
                                    Committee structure and responsibilities.
                                </h2>

                                <p className="mt-5 max-w-2xl text-base leading-8 text-[#1E1917]/60">
                                    The IEDC Executive Committee brings together faculty and
                                    student leaders across different areas of innovation,
                                    operations, technology, community and entrepreneurship.
                                </p>
                            </div>

                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#20235A] text-[#D2B87C]">
                                <Users className="h-6 w-6" />
                            </div>
                        </div>

                        <div className="overflow-hidden rounded-3xl border border-[#1E1917]/10 bg-white">
                            {/* Desktop Header */}
                            <div className="hidden grid-cols-[80px_1.25fr_1fr] border-b border-[#1E1917]/10 bg-[#20235A] px-6 py-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#D2B87C] sm:grid lg:px-8">
                                <span>Sl. No.</span>
                                <span>Designation</span>
                                <span>Name</span>
                            </div>

                            {[
                                {
                                    number: "01",
                                    designation: "Nodal Officer I",
                                    name: "Baisel Paul",
                                },
                                {
                                    number: "02",
                                    designation: "Nodal Officer II",
                                    name: "Smita Unnikrishnan",
                                },
                                {
                                    number: "03",
                                    designation: "Student Lead I",
                                    name: "Abhinav Babu",
                                },
                                {
                                    number: "04",
                                    designation: "Student Lead II",
                                    name: "Anitta Valsan",
                                },
                                {
                                    number: "05",
                                    designation: "Quality and Operations Lead",
                                    name: "Abhijith Vinu",
                                },
                                {
                                    number: "06",
                                    designation: "Creative and Innovation Lead",
                                    name: "Anirudh Babu",
                                },
                                {
                                    number: "07",
                                    designation: "Community Lead",
                                    name: "Dazzal David",
                                },
                                {
                                    number: "08",
                                    designation: "Technology Lead",
                                    name: "Abhijith K",
                                },
                                {
                                    number: "09",
                                    designation: "Finance Lead",
                                    name: "Arya K R",
                                },
                                {
                                    number: "10",
                                    designation: "Branding and Marketing Lead",
                                    name: "Ajith T U",
                                },
                                {
                                    number: "11",
                                    designation: "Women Entrepreneurship Lead",
                                    name: "Nawal Akber",
                                },
                                {
                                    number: "12",
                                    designation: "IPR and Research Lead",
                                    name: "Abhinav Shaji",
                                },
                            ].map((member, index) => (
                                <div
                                    key={member.name}
                                    className={`group grid gap-4 px-6 py-6 transition-colors duration-300 hover:bg-[#faf7f2] sm:grid-cols-[80px_1.25fr_1fr] sm:items-center lg:px-8 ${index !== 11
                                        ? "border-b border-[#1E1917]/10"
                                        : ""
                                        }`}
                                >
                                    {/* Number */}
                                    <div>
                                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#f2efe8] text-[10px] font-semibold tracking-[0.1em] text-[#8F7746] transition-colors duration-300 group-hover:bg-[#D2B87C] group-hover:text-[#20235A]">
                                            {member.number}
                                        </span>
                                    </div>

                                    {/* Designation */}
                                    <div>
                                        <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8F7746] sm:hidden">
                                            Designation
                                        </p>

                                        <p className="text-sm font-medium leading-6 text-[#1E1917]/75">
                                            {member.designation}
                                        </p>
                                    </div>

                                    {/* Name */}
                                    <div>
                                        <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8F7746] sm:hidden">
                                            Name
                                        </p>

                                        <p className="font-serif text-xl text-[#20235A]">
                                            {member.name}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* EXECUTIVE COMMITTEE */}
                <section
                    id="committee"
                    className="border-y border-[#1E1917]/10 bg-white"
                >
                    <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
                        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
                            <div className="lg:sticky lg:top-28 lg:self-start">
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                    Executive Committee
                                </p>

                                <h2 className="mt-4 font-serif text-4xl leading-[1.05] tracking-[-0.025em] text-[#20235A] sm:text-5xl">
                                    The people moving ideas forward.
                                </h2>

                                <p className="mt-6 text-base leading-8 text-[#1E1917]/60">
                                    A multidisciplinary team bringing together
                                    leadership, innovation, technology,
                                    operations, community and entrepreneurship.
                                </p>

                                <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#20235A]/10 bg-[#faf7f2] px-4 py-2.5">
                                    <Users className="h-4 w-4 text-[#8F7746]" />
                                    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#20235A]">
                                        12 Committee Members
                                    </span>
                                </div>
                            </div>

                            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                                {executiveCommittee.map((member, index) => (
                                    <article
                                        key={member.name}
                                        className="group overflow-hidden rounded-3xl border border-[#1E1917]/10 bg-[#faf7f2] transition-all duration-300 hover:-translate-y-1 hover:border-[#D2B87C]/60 hover:shadow-[0_20px_50px_rgba(32,35,90,0.08)]"
                                    >
                                        <div className="relative aspect-[4/4.5] overflow-hidden bg-[#e8e4dc]">
                                            <Image
                                                src={member.image}
                                                alt={`${member.name} - ${member.role}`}
                                                fill
                                                unoptimized
                                                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                                className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                                            />

                                            <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#20235A]/90 text-[10px] font-semibold text-[#D2B87C] backdrop-blur-sm">
                                                {String(index + 1).padStart(
                                                    2,
                                                    "0"
                                                )}
                                            </div>
                                        </div>

                                        <div className="p-5 sm:p-6">
                                            <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#8F7746]">
                                                {member.role}
                                            </p>

                                            <h3 className="mt-2 font-serif text-xl leading-tight text-[#20235A]">
                                                {member.name}
                                            </h3>

                                            <div className="mt-4 h-px w-10 bg-[#D2B87C] transition-all duration-300 group-hover:w-16" />
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* IEDC ECOSYSTEM */}
                <section className="bg-[#20235A]">
                    <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
                        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                    The IEDC Ecosystem
                                </p>

                                <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-[1.05] tracking-[-0.025em] text-white sm:text-5xl lg:text-6xl">
                                    Innovation needs more than an idea.
                                </h2>

                                <p className="mt-6 max-w-xl text-base leading-8 text-white/60">
                                    Through guidance, collaboration,
                                    intellectual property support and startup
                                    development, IEDC creates an environment
                                    where students can take their ideas beyond
                                    the classroom.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10">
                                <div className="bg-white/[0.04] p-6 sm:p-8">
                                    <Lightbulb className="h-6 w-6 text-[#D2B87C]" />
                                    <p className="mt-12 font-serif text-2xl text-white">
                                        Ideas
                                    </p>
                                    <p className="mt-2 text-sm leading-6 text-white/45">
                                        Discovering possibilities.
                                    </p>
                                </div>

                                <div className="bg-white/[0.04] p-6 sm:p-8">
                                    <Cpu className="h-6 w-6 text-[#D2B87C]" />
                                    <p className="mt-12 font-serif text-2xl text-white">
                                        Innovation
                                    </p>
                                    <p className="mt-2 text-sm leading-6 text-white/45">
                                        Building practical solutions.
                                    </p>
                                </div>

                                <div className="bg-white/[0.04] p-6 sm:p-8">
                                    <BriefcaseBusiness className="h-6 w-6 text-[#D2B87C]" />
                                    <p className="mt-12 font-serif text-2xl text-white">
                                        Enterprise
                                    </p>
                                    <p className="mt-2 text-sm leading-6 text-white/45">
                                        Creating opportunities.
                                    </p>
                                </div>

                                <div className="bg-white/[0.04] p-6 sm:p-8">
                                    <Rocket className="h-6 w-6 text-[#D2B87C]" />
                                    <p className="mt-12 font-serif text-2xl text-white">
                                        Startups
                                    </p>
                                    <p className="mt-2 text-sm leading-6 text-white/45">
                                        Turning vision into ventures.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* BOTTOM NAVIGATION */}
                <section className="bg-[#faf7f2]">
                    <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
                        <div className="flex flex-col justify-between gap-8 border-t border-[#1E1917]/10 pt-10 sm:flex-row sm:items-end">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                    IEDC · NCERC
                                </p>

                                <h2 className="mt-3 max-w-xl font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl">
                                    Explore the wider IEDC ecosystem.
                                </h2>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                <Link
                                    href="/student-support/iedc/achievements"
                                    className="group inline-flex items-center gap-2 rounded-full border border-[#20235A]/15 bg-white px-5 py-3 text-sm font-semibold text-[#20235A] transition-all duration-300 hover:border-[#20235A] hover:bg-[#20235A] hover:text-white"
                                >
                                    Achievements
                                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </Link>

                                <Link
                                    href="/student-support/iedc/startups"
                                    className="group inline-flex items-center gap-2 rounded-full bg-[#20235A] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#171a48]"
                                >
                                    Startups
                                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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