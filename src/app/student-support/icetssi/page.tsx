"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
    ArrowUpRight,
    CalendarDays,
    ChevronRight,
    FileText,
    Globe2,
    Mail,
    MapPin,
    Users,
} from "lucide-react";
import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";

type ConferenceData = {
    year: string;
    edition: string;
    description: string;
    departments: string[];
    areas: string[];
    highlights: string[];
    importantDates: {
        label: string;
        value: string;
    }[];
    registration: {
        category: string;
        indian: string;
        international: string;
    }[];
    contact: {
        name: string;
        role: string;
        phone?: string;
        email?: string;
    }[];
    account?: {
        accountName: string;
        accountNumber: string;
        ifsc: string;
        bank: string;
        branch: string;
    };
};

const conferenceData: Record<string, ConferenceData> = {
    "2026": {
        year: "2026",
        edition: "FOURTH EDITION",
        description:
            "ICETSSI 2026 is the fourth in the series of international conferences organized under the aegis of NGI. The conference brings together researchers, academicians, industry experts and students working in various aspects of signals, systems and information. The conference provides a platform for knowledge exchange, research collaboration and innovative ideas across emerging technology domains.",
        departments: [
            "Computer Science and Engineering",
            "Electronics and Communication Engineering",
            "Electrical and Electronics Engineering",
            "Mechanical Engineering",
            "Mechatronics Engineering",
            "Master of Business Administration",
            "Master of Computer Applications",
        ],
        areas: [
            "Machine Learning / Deep Learning",
            "Artificial Intelligence & VR",
            "Data Science & Data Analytics",
            "Cyber Forensic",
            "Data Mining & Data Warehousing",
            "Cloud Computing",
            "Natural Language Processing",
            "Information & Security",
            "Image Processing & Computer Vision",
            "IoT & Cyber Security",
            "VLSI & Embedded Systems",
            "Communication Engineering",
            "Image & Signal Processing",
            "Digital & Medical Electronics",
            "Smart Grid & Renewable Energy",
            "Electric & Hybrid Electric Vehicles",
            "Microgrid & Distributed Generations",
            "Energy Storage Technologies",
            "Mechanical Design",
            "Metallurgy & Material Science",
            "Nanomaterials",
            "Manufacturing Technology",
            "Robotics & Automation",
            "Drone Technologies & Remote Sensing",
            "Operations & Supply Chain Management",
            "AI in Business",
            "Fintech & Financial Technologies",
        ],
        highlights: [
            "Keynote lectures by leading experts",
            "International research and academic collaboration",
            "Paper presentations across emerging technology domains",
            "Accepted papers published in Scopus indexed conference proceedings",
            "Opportunity for future research and industry linkages",
        ],
        importantDates: [
            {
                label: "Conference Date",
                value: "April 24 & 25, 2026",
            },
            {
                label: "Full Paper Submission",
                value: "25/03/2026",
            },
            {
                label: "Acceptance of Full Paper",
                value: "13/04/2026",
            },
            {
                label: "Final Selection",
                value: "17/04/2026",
            },
            {
                label: "Camera-ready Paper",
                value: "20/04/2026",
            },
        ],
        registration: [],
        contact: [
            {
                name: "Dr. Johnson Y",
                role: "Professor & Head, Dept. of EEE, NCERC",
                phone: "9447364016",
            },
            {
                name: "Dr. Mobi Mathew",
                role: "Assistant Professor, NCERC",
            },
        ],
        account: {
            accountName: "Nehru College of Engineering and Research Centre",
            accountNumber: "50100356277820",
            ifsc: "HDFC0001551",
            bank: "HDFC Bank",
            branch: "Thiruvilwamala, Kerala",
        },
    },

    "2023": {
        year: "2023",
        edition: "INTERNATIONAL CONFERENCE",
        description:
            "ICETSSI provides an interdisciplinary platform for researchers, academicians, industry professionals and students to present emerging research in signals, systems and information. The conference brings together multiple engineering and technology disciplines under one academic forum.",
        departments: [
            "Computer Science and Engineering",
            "Electronics and Communication Engineering",
            "Electrical and Electronics Engineering",
            "Mechanical Engineering",
            "Mechatronics Engineering",
            "Master of Computer Applications",
        ],
        areas: [
            "Artificial Intelligence",
            "Machine Learning",
            "Data Science",
            "Data Analytics",
            "Cyber Security",
            "Cloud Computing",
            "Computer Vision",
            "Image Processing",
            "IoT",
            "VLSI & Embedded Systems",
            "Communication Engineering",
            "Signal Processing",
            "Smart Grid",
            "Renewable Energy",
            "Electric Vehicles",
            "Manufacturing Technology",
            "Robotics & Automation",
            "Mechatronics",
        ],
        highlights: [
            "Interdisciplinary research presentation",
            "Academic and industry interaction",
            "Emerging technology discussions",
            "Research collaboration opportunities",
            "Conference proceedings and publication opportunities",
        ],
        importantDates: [],
        registration: [],
        contact: [
            {
                name: "ICETSSI Conference Team",
                role: "Nehru College of Engineering and Research Centre",
                email: "paper.icetssi@ncerc.ac.in",
            },
        ],
    },

    "2022": {
        year: "2022",
        edition: "INTERNATIONAL CONFERENCE",
        description:
            "ICETSSI 2022 continued the conference series with a focus on emerging trends in signals, systems and information. The event brought together academic and research communities to exchange ideas and developments across engineering and technology disciplines.",
        departments: [
            "Computer Science and Engineering",
            "Electronics and Communication Engineering",
            "Electrical and Electronics Engineering",
            "Mechanical Engineering",
            "Mechatronics Engineering",
            "Master of Computer Applications",
        ],
        areas: [
            "Artificial Intelligence",
            "Machine Learning",
            "Data Science",
            "Cyber Security",
            "Computer Vision",
            "Image & Signal Processing",
            "VLSI & Embedded Systems",
            "Communication Engineering",
            "Renewable Energy",
            "Electric Vehicles",
            "Manufacturing",
            "Robotics",
            "Automation",
            "Mechatronics",
        ],
        highlights: [
            "Research paper presentations",
            "Interdisciplinary academic discussions",
            "Emerging technology exploration",
            "Knowledge exchange between researchers",
            "Research and collaboration opportunities",
        ],
        importantDates: [],
        registration: [],
        contact: [
            {
                name: "ICETSSI Conference Team",
                role: "Nehru College of Engineering and Research Centre",
                email: "paper.icetssi@ncerc.ac.in",
            },
        ],
    },

    "2021": {
        year: "2021",
        edition: "FIRST EDITION",
        description:
            "ICETSSI 2021 was the first in the series of biennial international conferences organized under the aegis of NGI. The conference aimed to bring together researchers, academicians, industry experts and students and create opportunities for research, business relations and international linkages.",
        departments: [
            "Computer Science and Engineering",
            "Electronics and Communication Engineering",
            "Electrical and Electronics Engineering",
            "Mechanical Engineering",
            "Mechatronics Engineering",
            "Master of Computer Applications",
        ],
        areas: [
            "Computer Vision",
            "Artificial Intelligence",
            "Synthetic and Organic Computing Structure and Systems",
            "Cyber Security",
            "Advanced Network Technologies",
            "Big Data",
            "VLSI and Embedded Systems",
            "Communication Engineering",
            "Image and Signal Processing",
            "Digital and Medical Electronics",
            "Fibre Optics",
            "Radar",
            "Microwave Engineering",
            "Biomedical Engineering",
            "Smart Grid and Renewable Energy",
            "Electric and Hybrid Electric Vehicles",
            "Microgrid and Distributed Generations",
            "Energy Storage Technologies",
            "FACTS Controllers and Applications",
            "Mechanical Design",
            "Metallurgy and Material Science",
            "Mechanics of Solids and Fluids",
            "Manufacturing Technology",
            "Energy Conversion",
            "Robotics and Automation",
            "Mechatronics and Micro Mechanisms",
        ],
        highlights: [
            "Online paper presentation",
            "International academic participation",
            "Research and business networking",
            "International collaboration opportunities",
            "Publication opportunities through selected journals",
        ],
        importantDates: [
            {
                label: "Full Paper Submission",
                value: "May 5",
            },
            {
                label: "Paper Selection Intimation",
                value: "May 10",
            },
            {
                label: "Registration",
                value: "May 11 onwards",
            },
        ],
        registration: [
            {
                category: "Industry",
                indian: "INR 1000/-",
                international: "USD 15/-",
            },
            {
                category: "Staff / Researchers",
                indian: "INR 750/-",
                international: "USD 10/-",
            },
            {
                category: "Students",
                indian: "INR 500/-",
                international: "USD 7/-",
            },
        ],
        contact: [
            {
                name: "Prof. Dr. Bobby N D",
                role: "Convenor, ICETSSI 2021",
                phone: "9500690763",
                email: "paper.icetssi@ncerc.ac.in",
            },
        ],
        account: {
            accountName: "Nehru College Of Engineering And Research Centre",
            accountNumber: "10641212377",
            ifsc: "SBIN0000257",
            bank: "State Bank of India",
            branch: "Ottapalam, Kerala",
        },
    },
};

const years = ["2026", "2023", "2022", "2021"];

const page = () => {
    const [activeYear, setActiveYear] = useState("2026");

    const activeConference = conferenceData[activeYear];

    return (
        <>
            <SiteHeader />

            <main className="overflow-hidden bg-[#faf7f2] text-[#1E1917]">
                {/* =====================================================
                    HERO
                ====================================================== */}
                <section className="relative overflow-hidden bg-[#20235A] text-white">
                    <div className="absolute -left-40 top-20 h-96 w-96 rounded-full border border-white/[0.05]" />
                    <div className="absolute -left-20 top-40 h-64 w-64 rounded-full border border-[#D2B87C]/10" />
                    <div className="absolute -right-36 -top-32 h-[430px] w-[430px] rounded-full border border-[#D2B87C]/10" />

                    <div className="relative mx-auto max-w-7xl px-6 pb-14 pt-20 sm:px-8 lg:px-12 lg:pb-16 lg:pt-24">
                        <div className="grid gap-12 lg:grid-cols-[1fr_280px] lg:items-end">
                            <div className="max-w-4xl">
                                <div className="mb-6 flex items-center gap-3">
                                    <span className="h-px w-9 bg-[#D2B87C]" />

                                    <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                        International Conference
                                    </span>
                                </div>

                                <h1 className="font-serif text-4xl leading-[0.95] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
                                    ICETSSI
                                    <span className="text-[#D2B87C]">
                                        {" "}2026
                                    </span>
                                </h1>

                                <p className="mt-5 max-w-2xl text-sm leading-6 text-white/65 sm:text-base sm:leading-7">
                                    International Conference on Emerging
                                    Trends in Signals, Systems & Information.
                                </p>

                                <div className="mt-7 flex flex-wrap gap-3">
                                    <a
                                        href="#conference"
                                        className="inline-flex items-center gap-2 rounded-full bg-[#D2B87C] px-5 py-3 text-xs font-semibold text-[#20235A] transition-all duration-300 hover:bg-white"
                                    >
                                        Explore conference
                                        <ArrowUpRight size={15} />
                                    </a>

                                    <a
                                        href="#years"
                                        className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-xs font-medium text-white transition-all duration-300 hover:border-[#D2B87C] hover:text-[#D2B87C]"
                                    >
                                        Other editions
                                        <ChevronRight size={15} />
                                    </a>
                                </div>
                            </div>

                            <div className="border-l border-white/15 pl-7">
                                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/40">
                                    Current edition
                                </p>

                                <p className="mt-4 font-serif text-4xl text-[#D2B87C]">
                                    {activeYear}
                                </p>

                                <p className="mt-2 text-xs leading-5 text-white/45">
                                    Emerging trends in signals, systems and
                                    information.
                                </p>

                                <div className="mt-5 h-px w-9 bg-[#D2B87C]" />
                            </div>
                        </div>

                        <div className="mt-14 border-t border-white/10 pt-5">
                            <div className="grid gap-5 sm:grid-cols-3">
                                <div>
                                    <p className="font-serif text-xl text-[#D2B87C]">
                                        04
                                    </p>
                                    <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-white/40">
                                        Conference editions
                                    </p>
                                </div>

                                <div>
                                    <p className="font-serif text-xl text-[#D2B87C]">
                                        2021–26
                                    </p>
                                    <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-white/40">
                                        Conference journey
                                    </p>
                                </div>

                                <div>
                                    <p className="font-serif text-xl text-[#D2B87C]">
                                        NGI
                                    </p>
                                    <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-white/40">
                                        Organising institution
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    YEAR SELECTOR
                ====================================================== */}
                <section id="years" className="bg-white">
                    <div className="mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-12">
                        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8F7746]">
                                    Conference archive
                                </p>

                                <p className="mt-1 text-sm text-[#1E1917]/50">
                                    Select an edition to explore its conference
                                    details.
                                </p>
                            </div>

                            <div className="grid grid-cols-4 rounded-2xl border border-[#20235A]/10 bg-[#faf7f2] p-1">
                                {years.map((year) => {
                                    const isActive = activeYear === year;

                                    return (
                                        <button
                                            key={year}
                                            type="button"
                                            onClick={() => {
                                                setActiveYear(year);

                                                setTimeout(() => {
                                                    document
                                                        .getElementById(
                                                            "conference"
                                                        )
                                                        ?.scrollIntoView({
                                                            behavior: "smooth",
                                                            block: "start",
                                                        });
                                                }, 50);
                                            }}
                                            className={`rounded-xl px-4 py-3 text-xs font-semibold transition-all duration-300 sm:px-7 ${isActive
                                                    ? "bg-[#20235A] text-white shadow-sm"
                                                    : "text-[#20235A]/55 hover:bg-white hover:text-[#20235A]"
                                                }`}
                                        >
                                            ICETSSI {year}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    CONFERENCE INTRO
                ====================================================== */}
                <section id="conference" className="bg-[#faf7f2]">
                    <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
                        <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">
                            <div>
                                <div className="flex items-center gap-3">
                                    <span className="font-serif text-2xl text-[#D2B87C]">
                                        {activeConference.year}
                                    </span>

                                    <span className="h-px w-8 bg-[#20235A]/15" />
                                </div>

                                <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#8F7746]">
                                    {activeConference.edition}
                                </p>
                            </div>

                            <div>
                                <h2 className="font-serif text-3xl leading-[1.08] tracking-[-0.025em] text-[#20235A] sm:text-4xl lg:text-5xl">
                                    A platform for research,
                                    <span className="text-[#8F7746]">
                                        {" "}ideas and collaboration.
                                    </span>
                                </h2>

                                <p className="mt-6 max-w-3xl text-sm leading-7 text-[#1E1917]/60 sm:text-base">
                                    {activeConference.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    HIGHLIGHTS
                ====================================================== */}
                <section className="bg-white">
                    <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
                        <div className="mb-10">
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8F7746]">
                                Conference focus
                            </p>

                            <h2 className="mt-2 font-serif text-3xl tracking-[-0.025em] text-[#20235A] sm:text-4xl">
                                What the conference brings together
                            </h2>
                        </div>

                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {activeConference.highlights.map(
                                (highlight, index) => (
                                    <div
                                        key={highlight}
                                        className="group rounded-2xl border border-[#20235A]/10 bg-[#faf7f2] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D2B87C]/60"
                                    >
                                        <div className="flex items-start justify-between">
                                            <span className="font-serif text-lg text-[#D2B87C]">
                                                {String(index + 1).padStart(
                                                    2,
                                                    "0"
                                                )}
                                            </span>

                                            <ArrowUpRight
                                                size={16}
                                                className="text-[#20235A]/25 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                                            />
                                        </div>

                                        <p className="mt-8 font-serif text-xl leading-tight text-[#20235A]">
                                            {highlight}
                                        </p>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    ORGANISING DEPARTMENTS
                ====================================================== */}
                <section className="bg-[#f2efe8]">
                    <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
                        <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">
                            <div>
                                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D2B87C]">
                                    <Users
                                        size={18}
                                        strokeWidth={1.5}
                                        className="text-[#8F7746]"
                                    />
                                </div>

                                <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.2em] text-[#8F7746]">
                                    Academic network
                                </p>

                                <h2 className="mt-2 font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl">
                                    Organising departments
                                </h2>
                            </div>

                            <div className="grid gap-0 border-t border-[#20235A]/10 sm:grid-cols-2">
                                {activeConference.departments.map(
                                    (department, index) => (
                                        <div
                                            key={department}
                                            className="flex items-start gap-4 border-b border-[#20235A]/10 py-5 sm:nth-[odd]:border-r sm:nth-[odd]:pr-7 sm:nth-[even]:pl-7"
                                        >
                                            <span className="font-serif text-sm text-[#D2B87C]">
                                                {String(index + 1).padStart(
                                                    2,
                                                    "0"
                                                )}
                                            </span>

                                            <p className="text-sm leading-5 text-[#20235A]">
                                                {department}
                                            </p>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    SCOPE
                ====================================================== */}
                <section className="bg-white">
                    <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
                        <div className="flex flex-col gap-4 border-b border-[#20235A]/10 pb-7 md:flex-row md:items-end md:justify-between">
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8F7746]">
                                    Scope of the conference
                                </p>

                                <h2 className="mt-2 font-serif text-3xl tracking-[-0.025em] text-[#20235A] sm:text-4xl">
                                    Research areas
                                </h2>
                            </div>

                            <p className="max-w-sm text-xs leading-5 text-[#1E1917]/45">
                                The conference covers a broad range of emerging
                                areas across computing, electronics, energy,
                                mechanical systems and management.
                            </p>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-2.5">
                            {activeConference.areas.map((area) => (
                                <span
                                    key={area}
                                    className="rounded-full border border-[#20235A]/10 bg-[#faf7f2] px-4 py-2.5 text-[11px] leading-4 text-[#20235A]/70 transition-colors duration-300 hover:border-[#D2B87C] hover:text-[#20235A]"
                                >
                                    {area}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    DATES + REGISTRATION
                ====================================================== */}
                <section className="bg-[#faf7f2]">
                    <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
                        <div className="grid gap-6 lg:grid-cols-2">
                            {/* DATES */}
                            <div className="rounded-[1.5rem] bg-[#20235A] p-7 text-white sm:p-8">
                                <div className="flex items-center gap-3">
                                    <CalendarDays
                                        size={18}
                                        className="text-[#D2B87C]"
                                    />

                                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D2B87C]">
                                        Important dates
                                    </p>
                                </div>

                                {activeConference.importantDates.length > 0 ? (
                                    <div className="mt-7 divide-y divide-white/10">
                                        {activeConference.importantDates.map(
                                            (item) => (
                                                <div
                                                    key={item.label}
                                                    className="flex items-center justify-between gap-5 py-4"
                                                >
                                                    <span className="text-xs text-white/50">
                                                        {item.label}
                                                    </span>

                                                    <span className="text-right font-serif text-sm text-white">
                                                        {item.value}
                                                    </span>
                                                </div>
                                            )
                                        )}
                                    </div>
                                ) : (
                                    <div className="mt-8 border-t border-white/10 pt-6">
                                        <p className="text-sm leading-6 text-white/55">
                                            Refer to the respective conference
                                            edition for its complete schedule,
                                            submission deadlines and event
                                            information.
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* REGISTRATION */}
                            <div className="rounded-[1.5rem] border border-[#20235A]/10 bg-white p-7 sm:p-8">
                                <div className="flex items-center gap-3">
                                    <FileText
                                        size={18}
                                        className="text-[#8F7746]"
                                    />

                                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8F7746]">
                                        Registration
                                    </p>
                                </div>

                                {activeConference.registration.length > 0 ? (
                                    <div className="mt-7 overflow-hidden rounded-xl border border-[#20235A]/10">
                                        <div className="grid grid-cols-3 bg-[#20235A] px-4 py-3 text-[9px] font-bold uppercase tracking-[0.12em] text-white/70">
                                            <span>Category</span>
                                            <span>Indian</span>
                                            <span>International</span>
                                        </div>

                                        {activeConference.registration.map(
                                            (item) => (
                                                <div
                                                    key={item.category}
                                                    className="grid grid-cols-3 border-t border-[#20235A]/10 px-4 py-4 text-xs"
                                                >
                                                    <span className="text-[#20235A]">
                                                        {item.category}
                                                    </span>

                                                    <span className="text-[#1E1917]/55">
                                                        {item.indian}
                                                    </span>

                                                    <span className="text-[#1E1917]/55">
                                                        {item.international}
                                                    </span>
                                                </div>
                                            )
                                        )}
                                    </div>
                                ) : (
                                    <div className="mt-7 rounded-xl bg-[#faf7f2] p-5">
                                        <p className="text-sm leading-6 text-[#1E1917]/55">
                                            Registration details vary by
                                            conference edition. Please refer
                                            to the official edition page for
                                            current registration information.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    ACCOUNT DETAILS
                ====================================================== */}
                {activeConference.account && (
                    <section className="bg-white">
                        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
                            <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr]">
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8F7746]">
                                        Payment details
                                    </p>

                                    <h2 className="mt-2 font-serif text-3xl text-[#20235A] sm:text-4xl">
                                        Registration account
                                    </h2>
                                </div>

                                <div className="grid gap-3 sm:grid-cols-2">
                                    <div className="rounded-xl border border-[#20235A]/10 bg-[#faf7f2] p-5 sm:col-span-2">
                                        <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#8F7746]">
                                            Account name
                                        </p>

                                        <p className="mt-2 text-sm text-[#20235A]">
                                            {
                                                activeConference.account
                                                    .accountName
                                            }
                                        </p>
                                    </div>

                                    <div className="rounded-xl border border-[#20235A]/10 bg-[#faf7f2] p-5">
                                        <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#8F7746]">
                                            Account number
                                        </p>

                                        <p className="mt-2 font-serif text-lg text-[#20235A]">
                                            {
                                                activeConference.account
                                                    .accountNumber
                                            }
                                        </p>
                                    </div>

                                    <div className="rounded-xl border border-[#20235A]/10 bg-[#faf7f2] p-5">
                                        <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#8F7746]">
                                            IFSC
                                        </p>

                                        <p className="mt-2 font-serif text-lg text-[#20235A]">
                                            {activeConference.account.ifsc}
                                        </p>
                                    </div>

                                    <div className="rounded-xl border border-[#20235A]/10 bg-[#faf7f2] p-5">
                                        <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#8F7746]">
                                            Bank
                                        </p>

                                        <p className="mt-2 text-sm text-[#20235A]">
                                            {activeConference.account.bank}
                                        </p>
                                    </div>

                                    <div className="rounded-xl border border-[#20235A]/10 bg-[#faf7f2] p-5">
                                        <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#8F7746]">
                                            Branch
                                        </p>

                                        <p className="mt-2 text-sm text-[#20235A]">
                                            {activeConference.account.branch}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* =====================================================
                    CONTACT
                ====================================================== */}
                <section className="bg-[#f2efe8]">
                    <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
                        <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8F7746]">
                                    Get in touch
                                </p>

                                <h2 className="mt-2 font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl">
                                    Conference contacts
                                </h2>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                                {activeConference.contact.map((person) => (
                                    <div
                                        key={person.name}
                                        className="rounded-2xl border border-[#20235A]/10 bg-white p-6"
                                    >
                                        <p className="font-serif text-xl text-[#20235A]">
                                            {person.name}
                                        </p>

                                        <p className="mt-2 text-xs leading-5 text-[#1E1917]/50">
                                            {person.role}
                                        </p>

                                        {person.phone && (
                                            <div className="mt-5 flex items-center gap-2 text-xs text-[#20235A]/70">
                                                <span className="h-1.5 w-1.5 rounded-full bg-[#D2B87C]" />
                                                {person.phone}
                                            </div>
                                        )}

                                        {person.email && (
                                            <div className="mt-2 flex items-center gap-2 text-xs text-[#20235A]/70">
                                                <Mail
                                                    size={13}
                                                    className="text-[#8F7746]"
                                                />
                                                {person.email}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    OFFICIAL EDITION LINK
                ====================================================== */}
                {/* <section className="bg-[#20235A] px-6 py-16 text-white sm:px-8 lg:px-12 lg:py-20">
                    <div className="mx-auto max-w-7xl">
                        <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 px-6 py-10 sm:px-10 lg:px-12 lg:py-12">
                            <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full border border-[#D2B87C]/15" />

                            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                                <div className="max-w-2xl">
                                    <div className="flex items-center gap-3">
                                        <Globe2
                                            size={17}
                                            className="text-[#D2B87C]"
                                        />

                                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D2B87C]">
                                            Official conference page
                                        </p>
                                    </div>

                                    <h2 className="mt-4 font-serif text-3xl leading-[1.05] tracking-[-0.025em] sm:text-4xl">
                                        Explore ICETSSI {activeYear}
                                    </h2>

                                    <p className="mt-4 text-sm leading-6 text-white/50">
                                        Visit the official NCERC conference
                                        page for the complete edition-specific
                                        information.
                                    </p>
                                </div>

                                <Link
                                    href={
                                        activeYear === "2026"
                                            ? "https://ncerc.ac.in/icetssi-2026.php"
                                            : activeYear === "2023"
                                                ? "https://ncerc.ac.in/icetssi"
                                                : activeYear === "2022"
                                                    ? "https://ncerc.ac.in/icetssi-2022.php"
                                                    : "https://ncerc.ac.in/icetssi-2021.php"
                                    }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex w-fit items-center gap-2 rounded-full bg-[#D2B87C] px-5 py-3 text-xs font-semibold text-[#20235A] transition-all duration-300 hover:bg-white"
                                >
                                    Open official page
                                    <ArrowUpRight
                                        size={14}
                                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section> */}
            </main>

            <FooterSection />
        </>
    );
};

export default page;