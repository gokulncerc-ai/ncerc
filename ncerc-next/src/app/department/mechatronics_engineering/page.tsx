
import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import DepartmentNavigation from "./DepartmentsNavigation/DepartmentsNavigation";
import Image from "next/image";
import {
    ArrowRight,
    ArrowUpRight,
    Award,
    Bot,
    BrainCircuit,
    Cpu,
    Factory,
    GraduationCap,
    Lightbulb,
    Microscope,
    Network,
    Radio,
    Settings,
    ShieldCheck,
    Sparkles,
    Target,
    Wrench,
} from "lucide-react";
import React from "react";

export default function MechatronicsPage() {
    const disciplines = [
        {
            number: "01",
            title: "Mechanical Engineering",
            description:
                "Design, development, and integration of mechanical components and systems.",
            icon: Settings,
        },
        {
            number: "02",
            title: "Electronics & Electrical Engineering",
            description:
                "Electronic circuits, electrical systems, sensors, and intelligent control technologies.",
            icon: Cpu,
        },
        {
            number: "03",
            title: "Robotics & Instrumentation",
            description:
                "Robotic systems, measurement technologies, automation, and precision control.",
            icon: Bot,
        },
        {
            number: "04",
            title: "Computer Science & Control Systems",
            description:
                "Intelligent software, embedded computing, programming, and system control.",
            icon: BrainCircuit,
        },
    ];

    const academicStrengths = [
        {
            number: "01",
            title: "Strong Engineering Fundamentals",
            description:
                "Building a solid foundation in core engineering principles through structured academic learning.",
            icon: GraduationCap,
        },
        {
            number: "02",
            title: "Hands-on Laboratory Training",
            description:
                "Developing practical skills through modern laboratories, experimentation, and technical exploration.",
            icon: Microscope,
        },
        {
            number: "03",
            title: "Interdisciplinary Project-Based Learning",
            description:
                "Encouraging students to integrate multiple engineering disciplines through collaborative projects.",
            icon: Network,
        },
        {
            number: "04",
            title: "Research & Innovation",
            description:
                "Supporting innovative thinking, research activities, and faculty-guided engineering projects.",
            icon: Lightbulb,
        },
        {
            number: "05",
            title: "Industry Certification Programmes",
            description:
                "Providing industry-oriented training and certification opportunities in PLC, robotics, and embedded systems.",
            icon: Award,
        },
    ];

    const researchAreas = [
        "Robotics and Automation",
        "Industrial Automation and PLC",
        "Embedded Systems and IoT",
        "Artificial Intelligence Applications",
        "Control Systems Engineering",
        "Mechatronic System Design",
    ];

    return (
        <>
            <SiteHeader />

            <main className="bg-[#FAF7F2] text-[#1E1917] [&_p]:text-justify">
                {/* =========================================================
                    HERO
                ========================================================== */}
                <section className="relative overflow-hidden bg-[#20235A]">
                    <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
                        <div className="grid min-h-[720px] items-stretch lg:grid-cols-[1fr_0.82fr]">
                            {/* Hero Content */}
                            <div className="flex flex-col justify-center py-20 lg:py-28 lg:pr-16">
                                <div className="mb-8 flex flex-wrap items-center gap-4">
                                    <span className="h-px w-12 bg-[#D2B87C]" />

                                    <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D2B87C]">
                                        Department of Engineering
                                    </span>
                                </div>

                                <h1 className="max-w-4xl font-serif text-[46px] leading-[0.97] tracking-[-0.035em] text-white sm:text-[60px] lg:text-[70px] xl:text-[78px]">
                                    Mechatronics
                                    <span className="block text-[#D2B87C]">Engineering</span>
                                </h1>

                                <p className="mt-5 max-w-xl text-[14px] font-semibold uppercase tracking-[0.14em] text-white/50">
                                    Multidisciplinary Engineering • Robotics • Automation
                                </p>

                                <p className="mt-8 max-w-2xl text-[16px] leading-8 text-white/70 sm:text-[17px]">
                                    A multidisciplinary engineering programme integrating
                                    mechanical systems, electronics, electrical engineering,
                                    robotics, instrumentation, computer science, and control
                                    systems to create intelligent technologies.
                                </p>

                                <div className="mt-10 flex flex-wrap items-center gap-5">
                                    <a
                                        href="#about"
                                        className="group inline-flex items-center gap-3 bg-[#D2B87C] px-6 py-4 text-sm font-semibold text-[#20235A] transition hover:bg-white"
                                    >
                                        Explore Department
                                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                    </a>

                                    <div className="flex items-center gap-3 text-sm text-white/55">
                                        <span className="h-2 w-2 rounded-full bg-[#D2B87C]" />
                                        Established in 2013
                                    </div>
                                </div>

                                {/* Accreditation */}
                                <div className="mt-12 flex items-center gap-4 border-t border-white/10 pt-7">
                                    <div className="flex h-12 w-12 items-center justify-center border border-[#D2B87C]/40">
                                        <Award className="h-5 w-5 text-[#D2B87C]" />
                                    </div>

                                    <div>
                                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                            NBA Accredited
                                        </p>

                                        <p className="mt-1 text-sm text-white/55">
                                            Reaccreditation granted in July 2025
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Hero Image */}
                            <div className="relative min-h-[450px] overflow-hidden lg:min-h-full">
                                <Image
                                    src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1600&q=90"
                                    alt="Robotics and mechatronics engineering"
                                    fill
                                    sizes="(min-width: 1024px) 330px, 100vw"
                                    className="absolute inset-0 h-full w-full object-cover"
                                />

                                <div className="absolute inset-0 bg-gradient-to-r from-[#20235A] via-[#20235A]/20 to-transparent" />

                                <div className="absolute bottom-8 left-8 right-8 border border-white/20 bg-[#20235A]/75 p-6 backdrop-blur-md sm:left-10 sm:right-10 sm:p-7">
                                    <div className="flex items-start justify-between gap-5">
                                        <div>
                                            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                                                Engineering at the Intersection
                                            </span>

                                            <p className="mt-3 max-w-sm font-serif text-[23px] leading-tight text-white">
                                                Mechanical systems meet electronics, software and
                                                intelligence.
                                            </p>
                                        </div>

                                        <Bot className="mt-1 h-6 w-6 shrink-0 text-[#D2B87C]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="h-px bg-[#D2B87C]/20" />
                </section>

                <DepartmentNavigation />

                {/* =========================================================
                    QUICK FACTS
                ========================================================== */}
                <section className="border-b border-[#20235A]/10 bg-white">
                    <div className="mx-auto grid max-w-[1440px] sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            {
                                number: "2013",
                                label: "Department Established",
                            },
                            {
                                number: "60",
                                label: "Annual Intake",
                            },
                            {
                                number: "2022",
                                label: "NBA Accreditation",
                            },
                            {
                                number: "2025",
                                label: "Reaccreditation",
                            },
                        ].map((item, index) => (
                            <div
                                key={item.label}
                                className={`border-[#20235A]/10 px-6 py-8 sm:px-10 lg:px-12 lg:py-10 ${index !== 0
                                    ? "border-t sm:border-l sm:border-t-0"
                                    : ""
                                    }`}
                            >
                                <span className="font-serif text-[36px] text-[#20235A] sm:text-[42px]">
                                    {item.number}
                                </span>

                                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                                    {item.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* =========================================================
                    ABOUT THE DEPARTMENT
                ========================================================== */}
                <section
                    id="about"
                    className="scroll-mt-24 px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
                >
                    <div className="mx-auto max-w-[1440px]">
                        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
                            <div>
                                <div className="mb-6 flex items-center gap-4">
                                    <span className="h-px w-12 bg-[#8F7746]" />
                                    <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8F7746]">
                                        About the Department
                                    </span>
                                </div>

                                <h2 className="max-w-lg font-serif text-[36px] leading-[1.15] text-[#20235A] sm:text-[44px]">
                                    A Convergence of
                                    <span className="block text-[#927B4D]">
                                        Engineering Disciplines
                                    </span>
                                </h2>

                                <p className="mt-7 text-[14px] leading-8 text-[#777]">
                                    Established in 2013, the Department of
                                    Mechatronics Engineering at Nehru College
                                    of Engineering and Research Centre brings
                                    together diverse engineering disciplines
                                    to create an integrated learning and
                                    innovation environment.
                                </p>

                                <div className="mt-10 flex items-center gap-4 border-t border-[#20235A]/10 pt-7">
                                    <div className="flex h-12 w-12 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                                        <Bot size={23} strokeWidth={1.3} />
                                    </div>

                                    <div>
                                        <p className="font-serif text-lg text-[#20235A]">
                                            Integrated Engineering
                                        </p>
                                        <p className="mt-1 text-xs text-[#888]">
                                            Knowledge across multiple disciplines
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:pt-8">
                                <p className="text-[16px] leading-9 text-[#4F4F4F]">
                                    The B.Tech. programme in Mechatronics
                                    Engineering was introduced to meet the
                                    growing demand for skilled professionals
                                    in automation, robotics, intelligent system
                                    design, and Industry 4.0 technologies.
                                </p>

                                <p className="mt-6 text-[14px] leading-8 text-[#777]">
                                    Since its inception, the department has
                                    steadily grown in academic strength,
                                    infrastructure, and industry collaboration,
                                    emerging as a dynamic hub of innovation
                                    that seamlessly merges core engineering
                                    disciplines to design and develop smart
                                    systems combining mechanical components
                                    with electronic control and intelligent
                                    software.
                                </p>

                                <p className="mt-6 text-[14px] leading-8 text-[#777]">
                                    The department is committed to delivering
                                    high-quality technical education supported
                                    by modern, state-of-the-art laboratories,
                                    experienced and distinguished faculty with
                                    strong industry and academic expertise,
                                    and comprehensive industry-oriented
                                    training.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================
                    MULTIDISCIPLINARY ENGINEERING
                ========================================================== */}
                <section className="bg-white px-6 py-24 sm:px-10 lg:px-16 lg:py-28">
                    <div className="mx-auto max-w-[1440px]">
                        <div className="max-w-3xl">
                            <div className="mb-6 flex items-center gap-4">
                                <span className="font-serif text-sm text-[#927B4D]">
                                    01
                                </span>
                                <span className="h-px w-10 bg-[#D2B87C]" />
                                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8F7746]">
                                    Multidisciplinary Foundation
                                </span>
                            </div>

                            <h2 className="font-serif text-[34px] leading-tight text-[#20235A] sm:text-[42px]">
                                Where Multiple Disciplines
                                <span className="block text-[#927B4D]">
                                    Work as One
                                </span>
                            </h2>

                            <p className="mt-6 max-w-2xl text-[14px] leading-8 text-[#777]">
                                Mechatronics integrates multiple engineering
                                fields to develop smart systems that combine
                                mechanical components, electronic control,
                                and intelligent software.
                            </p>
                        </div>

                        <div className="mt-16 grid gap-px bg-[#20235A]/10 sm:grid-cols-2 lg:grid-cols-4">
                            {disciplines.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={item.number}
                                        className="group bg-[#FAF7F2] p-8 transition-colors duration-300 hover:bg-white lg:p-9"
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="font-serif text-sm text-[#927B4D]">
                                                {item.number}
                                            </span>
                                            <Icon
                                                size={25}
                                                strokeWidth={1.3}
                                                className="text-[#927B4D] transition-transform duration-300 group-hover:scale-110"
                                            />
                                        </div>

                                        <h3 className="mt-10 font-serif text-[21px] leading-snug text-[#20235A]">
                                            {item.title}
                                        </h3>

                                        <p className="mt-4 text-[13px] leading-7 text-[#777]">
                                            {item.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* =========================================================
                    PROGRAMME & ACCREDITATION
                ========================================================== */}
                <section className="bg-[#20235A] px-6 py-24 sm:px-10 lg:px-16 lg:py-28">
                    <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-24">
                        <div>
                            <div className="mb-6 flex items-center gap-4">
                                <span className="h-px w-12 bg-[#D2B87C]" />
                                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D2B87C]">
                                    Academic Recognition
                                </span>
                            </div>

                            <h2 className="max-w-xl font-serif text-[36px] leading-tight text-white sm:text-[44px]">
                                A Programme Built for
                                <span className="block text-[#D2B87C]">
                                    Emerging Technologies
                                </span>
                            </h2>

                            <p className="mt-7 max-w-2xl text-[14px] leading-8 text-white/65">
                                The B.Tech. programme in Mechatronics
                                Engineering has an annual intake of 60
                                students. It is approved by the All India
                                Council for Technical Education (AICTE),
                                affiliated to APJ Abdul Kalam Technological
                                University, and accredited by the National
                                Board of Accreditation (NBA).
                            </p>

                            <div className="mt-10 flex items-start gap-5 border-t border-white/15 pt-8">
                                <ShieldCheck
                                    size={29}
                                    strokeWidth={1.3}
                                    className="shrink-0 text-[#D2B87C]"
                                />

                                <div>
                                    <p className="font-serif text-xl text-white">
                                        NBA Accreditation
                                    </p>
                                    <p className="mt-2 text-[13px] leading-7 text-white/55">
                                        Accredited since 2022, with
                                        reaccreditation granted in July 2025.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="border border-white/15 bg-white/[0.04] p-8 sm:p-10 lg:p-11">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                                Programme Overview
                            </p>

                            <div className="mt-9 space-y-7">
                                <div className="border-b border-white/15 pb-6">
                                    <p className="text-xs text-white/45">
                                        Programme
                                    </p>
                                    <p className="mt-2 font-serif text-xl text-white">
                                        B.Tech. Mechatronics Engineering
                                    </p>
                                </div>

                                <div className="border-b border-white/15 pb-6">
                                    <p className="text-xs text-white/45">
                                        Annual Intake
                                    </p>
                                    <p className="mt-2 font-serif text-[34px] text-[#D2B87C]">
                                        60 Students
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs text-white/45">
                                        Academic Affiliation
                                    </p>
                                    <p className="mt-2 font-serif text-lg leading-relaxed text-white">
                                        APJ Abdul Kalam Technological
                                        University
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8 flex items-center gap-3 border-t border-white/15 pt-6">
                                <Award
                                    size={20}
                                    className="text-[#D2B87C]"
                                />
                                <span className="text-xs text-white/65">
                                    AICTE Approved • NBA Accredited
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================
                    ACADEMIC STRENGTHS
                ========================================================== */}
                <section className="px-6 py-24 sm:px-10 lg:px-16 lg:py-28">
                    <div className="mx-auto max-w-[1440px]">
                        <div className="max-w-3xl">
                            <div className="mb-6 flex items-center gap-4">
                                <span className="font-serif text-sm text-[#927B4D]">
                                    02
                                </span>
                                <span className="h-px w-10 bg-[#D2B87C]" />
                                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8F7746]">
                                    Our Academic Approach
                                </span>
                            </div>

                            <h2 className="font-serif text-[34px] leading-tight text-[#20235A] sm:text-[42px]">
                                Learning Through Knowledge,
                                <span className="block text-[#927B4D]">
                                    Practice & Innovation
                                </span>
                            </h2>

                            <p className="mt-6 max-w-2xl text-[14px] leading-8 text-[#777]">
                                The department emphasizes strong fundamentals,
                                practical learning, interdisciplinary
                                collaboration, research, and industry-oriented
                                training to prepare students for evolving
                                technological landscapes.
                            </p>
                        </div>

                        <div className="mt-16 grid gap-x-16 md:grid-cols-2">
                            {academicStrengths.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={item.number}
                                        className="flex gap-6 border-t border-[#20235A]/15 py-8"
                                    >
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#F2EFE8] text-[#927B4D]">
                                            <Icon
                                                size={22}
                                                strokeWidth={1.3}
                                            />
                                        </div>

                                        <div>
                                            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#927B4D]">
                                                {item.number}
                                            </span>

                                            <h3 className="mt-2 font-serif text-[21px] text-[#20235A]">
                                                {item.title}
                                            </h3>

                                            <p className="mt-3 text-[13px] leading-7 text-[#777]">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* =========================================================
                    RESEARCH & INNOVATION
                ========================================================== */}
                <section className="bg-[#F2EFE8] px-6 py-24 sm:px-10 lg:px-16 lg:py-28">
                    <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
                        <div>
                            <div className="mb-6 flex items-center gap-4">
                                <span className="font-serif text-sm text-[#927B4D]">
                                    03
                                </span>
                                <span className="h-px w-10 bg-[#D2B87C]" />
                                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8F7746]">
                                    Research & Innovation
                                </span>
                            </div>

                            <h2 className="font-serif text-[34px] leading-tight text-[#20235A] sm:text-[42px]">
                                Exploring the Technologies
                                <span className="block text-[#927B4D]">
                                    of Tomorrow
                                </span>
                            </h2>

                            <p className="mt-7 text-[14px] leading-8 text-[#777]">
                                Students are encouraged to actively engage
                                in research, collaborate with industry
                                partners, participate in national and
                                international competitions, and work closely
                                with faculty on innovative projects.
                            </p>

                            <div className="mt-9 flex items-center gap-4 border-t border-[#20235A]/15 pt-7">
                                <div className="flex h-12 w-12 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                                    <Sparkles
                                        size={22}
                                        strokeWidth={1.3}
                                    />
                                </div>

                                <div>
                                    <p className="font-serif text-lg text-[#20235A]">
                                        Ideas into Innovation
                                    </p>
                                    <p className="mt-1 text-xs text-[#888]">
                                        Research • Collaboration • Creation
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="border-b border-[#20235A]/15 pb-6">
                                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#927B4D]">
                                    Areas of Exploration
                                </p>
                                <h3 className="mt-3 font-serif text-[26px] text-[#20235A]">
                                    Core Research Areas
                                </h3>
                            </div>

                            <div className="grid gap-x-8 sm:grid-cols-2">
                                {researchAreas.map((area, index) => (
                                    <div
                                        key={area}
                                        className="flex items-center gap-4 border-b border-[#20235A]/10 py-7"
                                    >
                                        <span className="font-serif text-sm text-[#927B4D]">
                                            0{index + 1}
                                        </span>

                                        <p className="text-[13px] leading-6 text-[#414141]">
                                            {area}
                                        </p>

                                        <ArrowUpRight
                                            size={16}
                                            className="ml-auto shrink-0 text-[#927B4D]"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================
                    INDUSTRY EXPOSURE & DEGREE OPTIONS
                ========================================================== */}
                <section className="bg-white px-6 py-24 sm:px-10 lg:px-16 lg:py-28">
                    <div className="mx-auto max-w-[1440px]">
                        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
                            <div>
                                <div className="mb-6 flex items-center gap-4">
                                    <span className="h-px w-12 bg-[#8F7746]" />
                                    <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8F7746]">
                                        Beyond the Curriculum
                                    </span>
                                </div>

                                <h2 className="font-serif text-[36px] leading-tight text-[#20235A] sm:text-[44px]">
                                    Opportunities to
                                    <span className="block text-[#927B4D]">
                                        Shape Your Future
                                    </span>
                                </h2>

                                <p className="mt-7 text-[14px] leading-8 text-[#777]">
                                    The department offers minor and honours
                                    degree options that empower students to
                                    shape their academic journey and develop
                                    into innovative professionals.
                                </p>

                                <div className="mt-9 flex flex-wrap gap-3">
                                    <span className="border border-[#D2B87C] px-5 py-3 text-xs text-[#20235A]">
                                        Minor Degree
                                    </span>
                                    <span className="border border-[#D2B87C] px-5 py-3 text-xs text-[#20235A]">
                                        Honours Degree
                                    </span>
                                </div>
                            </div>

                            <div className="relative overflow-hidden bg-[#20235A] p-8 sm:p-11">
                                <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full border border-white/10" />

                                <div className="relative">
                                    <Factory
                                        size={31}
                                        className="text-[#D2B87C]"
                                        strokeWidth={1.2}
                                    />

                                    <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                                        Industry Collaboration
                                    </p>

                                    <h3 className="mt-3 font-serif text-[27px] leading-snug text-white">
                                        Connecting Education with Industry
                                    </h3>

                                    <p className="mt-5 text-[14px] leading-8 text-white/60">
                                        Industry-oriented training,
                                        collaborative projects, certification
                                        programmes, and exposure to emerging
                                        technologies help students prepare
                                        for rapidly evolving engineering
                                        environments.
                                    </p>

                                    <div className="mt-8 flex items-center gap-3 border-t border-white/15 pt-6">
                                        <Radio
                                            size={18}
                                            className="text-[#D2B87C]"
                                        />
                                        <span className="text-xs text-white/65">
                                            Industry 4.0 Technologies
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================
                    ALUMNI & PROFESSIONAL DEVELOPMENT
                ========================================================== */}
                <section className="px-6 py-24 sm:px-10 lg:px-16 lg:py-28">
                    <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
                        <div>
                            <div className="mb-6 flex items-center gap-4">
                                <span className="h-px w-12 bg-[#8F7746]" />
                                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8F7746]">
                                    Our Community
                                </span>
                            </div>

                            <h2 className="font-serif text-[36px] leading-tight text-[#20235A] sm:text-[44px]">
                                A Legacy of Learning
                                <span className="block text-[#927B4D]">
                                    & Professional Growth
                                </span>
                            </h2>
                        </div>

                        <div className="lg:pt-5">
                            <p className="text-[16px] leading-9 text-[#4F4F4F]">
                                Supported by a strong and widespread alumni
                                network, the department maintains connections
                                with graduates holding prominent positions in
                                academia and industry at national and
                                international levels.
                            </p>

                            <p className="mt-6 text-[14px] leading-8 text-[#777]">
                                Through a holistic and forward-thinking
                                approach, the department nurtures creativity,
                                critical thinking, and problem-solving skills,
                                empowering graduates to become leaders who
                                contribute meaningfully to technological
                                advancements that shape the future.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ----------Hod desk Starts-------- */}

                {/* HOD DESK */}
                <section
                    id="hod-desk"
                    className="relative overflow-hidden bg-[#F2EFE8] px-5 py-20 sm:px-10 lg:px-20 lg:py-28"
                >
                    <div className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full border border-[#D2B87C]/20" />
                    <div className="pointer-events-none absolute -right-12 top-24 h-56 w-56 rounded-full border border-[#D2B87C]/20" />

                    <div className="relative mx-auto max-w-7xl">
                        {/* SECTION HEADER */}
                        <div className="mb-12">
                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#B99A5B]" />
                                <span className="text-xs font-medium uppercase tracking-[0.28em] text-[#927B4D]">
                                    Leadership & Vision
                                </span>
                            </div>

                            <h2 className="font-serif text-4xl font-normal leading-tight text-[#20235A] sm:text-5xl lg:text-6xl">
                                Message from the
                                <span className="block italic text-[#927B4D]">
                                    Head of the Department
                                </span>
                            </h2>
                        </div>

                        {/* MESSAGE CONTENT */}
                        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.32fr_1fr] lg:gap-20 ">
                            {/* LEFT PANEL */}
                            <div className="relative [&_p]:!text-left">
                                <div className="sticky top-28">
                                    <div className="flex h-20 w-20 items-center justify-center border border-[#D2B87C]/60 text-5xl font-serif text-[#B99A5B] ">
                                        “
                                    </div>

                                    <p className="mt-7 max-w-xs font-serif text-2xl font-normal  leading-relaxed text-[#20235A]">
                                        Shaping future-ready engineers through innovation,
                                        interdisciplinary learning and technological excellence.
                                    </p>

                                    <div className="mt-8 h-px w-16 bg-[#B99A5B]" />

                                    <p className="mt-4 text-xs uppercase tracking-[0.2em] text-[#927B4D]">
                                        Department of Mechatronics Engineering
                                    </p>
                                </div>
                            </div>

                            {/* RIGHT PANEL */}
                            <div className="border-l border-[#D2B87C]/50 pl-6 sm:pl-10">
                                <div className="space-y-7 text-[15px] font-normal leading-[2] text-[#55515A] sm:text-base">
                                    <p>
                                        Welcome to the Department of Mechatronics Engineering at Nehru College of Engineering and Research Centre, where innovation, interdisciplinary learning, and technological excellence converge to shape future-ready engineers. It is both an honour and a privilege to lead a vibrant community of passionate educators and aspiring engineers who are committed to pushing the boundaries of knowledge and creativity.

                                    </p>

                                    <p>
                                        Mechatronics is an exciting and rapidly advancing multidisciplinary domain that harmoniously integrates Mechanical, Electronics, Electrical, Robotics, Instrumentation, and Computer Engineering to develop intelligent machines, automated systems, and smart products. At its heart, mechatronics is about synergy—bringing together diverse engineering principles to design efficient, adaptive, and intelligent solutions for real-world challenges. Our academic framework is carefully structured to balance strong theoretical foundations with immersive practical training, enabling students to gain both conceptual clarity and applied expertise.

                                    </p>

                                    <p>
                                        The department is driven by a learner-centric approach that encourages critical thinking, innovation, and problem-solving. Through project-based learning, research initiatives, technical workshops, internships, industry collaborations, and participation in national and international competitions, our students are empowered to explore emerging technologies such as robotics, automation, embedded systems, IoT, artificial intelligence, and smart manufacturing. We strive to cultivate not only technical proficiency but also leadership, teamwork, and ethical responsibility.
                                    </p>

                                    <p>
                                        Our accomplished faculty members bring a rich blend of scholarly insight and industry experience, mentoring students to achieve academic excellence and professional growth. Their dedication ensures that the curriculum remains aligned with the latest technological advancements and industry requirements. Complementing this academic strength are our state-of-the-art laboratories and modern infrastructure, designed to provide hands-on exposure in designing, analysing, and implementing advanced mechatronic systems.

                                    </p>

                                    <p>
                                        As we continue to evolve with the dynamic technological landscape, our department remains steadfast in its mission to nurture competent engineers who can contribute meaningfully to society and industry. We invite you to explore the opportunities within our department and join us in this forward-looking journey at the forefront of Mechatronics Engineering.
                                    </p>
                                </div>

                                {/* SIGNATURE */}
                                <div className="mt-12 border-t border-[#D2B87C]/50 pt-8">
                                    <p className="mb-5 text-sm italic text-[#77717A]">
                                        Best Regards,
                                    </p>

                                    <h3 className="font-serif text-2xl font-medium text-[#20235A] sm:text-3xl">
                                        Dr. Anto Francis Cherussery
                                    </h3>

                                    <p className="mt-2 text-sm font-medium text-[#927B4D]">
                                        Head of the Department
                                    </p>

                                    <p className="mt-1 text-sm text-[#77717A]">
                                        Department of Mechatronics Engineering
                                    </p>

                                    <p className="mt-1 text-sm text-[#77717A]">
                                        Nehru College of Engineering and Research Centre
                                    </p>

                                    <div className="mt-7 flex items-center gap-3">
                                        <span className="h-px w-10 bg-[#B99A5B]" />
                                        <span className="text-[10px] uppercase tracking-[0.24em] text-[#927B4D]">
                                            Academic Leadership
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --mission-- */}

                {/* MISSION OF THE DEPARTMENT */}
                <section
                    id="department-mission"
                    className="relative overflow-hidden bg-[#20235A] px-5 py-20 sm:px-10 lg:px-20 lg:py-28"
                >
                    <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full border border-[#D2B87C]/20" />
                    <div className="pointer-events-none absolute -right-10 -top-10 h-60 w-60 rounded-full border border-[#D2B87C]/20" />

                    <div className="relative mx-auto max-w-7xl">
                        {/* HEADER */}
                        <div className="mb-14 max-w-3xl">
                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#D2B87C]" />
                                <span className="text-xs font-medium uppercase tracking-[0.28em] text-[#D2B87C]">
                                    Our Purpose & Direction
                                </span>
                            </div>

                            <h2 className="font-serif text-4xl font-normal leading-tight text-[#FAF7F2] sm:text-5xl lg:text-6xl">
                                Mission of the
                                <span className="block italic text-[#D2B87C]">
                                    Department
                                </span>
                            </h2>

                            <p className="mt-6 text-sm leading-7 text-white/65 sm:text-base">
                                Department of Mechatronics Engineering
                                <span className="mx-2 text-[#D2B87C]">•</span>
                                Nehru College of Engineering and Research Centre
                            </p>
                        </div>

                        {/* INSTITUTION DETAILS */}
                        <div className="mb-12 grid gap-6 border-y border-white/15 py-7 sm:grid-cols-2">
                            <div>
                                <p className="text-xs uppercase tracking-[0.2em] text-[#D2B87C]">
                                    Institution
                                </p>
                                <h3 className="mt-3 font-serif text-xl font-normal leading-relaxed text-[#FAF7F2] sm:text-2xl">
                                    Nehru College of Engineering and Research Centre
                                </h3>
                                <p className="mt-2 text-sm text-white/60">
                                    Accredited by NAAC
                                </p>
                            </div>

                            <div className="sm:border-l sm:border-white/15 sm:pl-8">
                                <p className="text-xs uppercase tracking-[0.2em] text-[#D2B87C]">
                                    Location
                                </p>
                                <p className="mt-3 max-w-sm text-base leading-7 text-white/80">
                                    Pampady, Thiruvilwamala,
                                    <br />
                                    Thrissur, Kerala – 680588
                                </p>
                            </div>
                        </div>

                        {/* MISSION STATEMENTS */}
                        <div>
                            <div className="mb-8">
                                <p className="text-xs uppercase tracking-[0.2em] text-[#D2B87C]">
                                    What We Strive For
                                </p>
                                <h3 className="mt-3 font-serif text-2xl font-normal text-[#FAF7F2] sm:text-3xl">
                                    Our Department Mission
                                </h3>
                            </div>

                            <div className="grid gap-5">
                                <div className="group grid gap-5 border border-white/15 bg-white/[0.04] p-6 transition-colors duration-300 hover:border-[#D2B87C]/60 sm:grid-cols-[90px_1fr] sm:items-start sm:p-9">
                                    <span className="font-serif text-4xl font-normal text-[#D2B87C]">
                                        M3
                                    </span>

                                    <div>
                                        <span className="mb-4 block h-px w-12 bg-[#D2B87C]/70" />
                                        <p className="text-base font-normal leading-8 text-white/85 sm:text-lg">
                                            Establish state-of-the-art laboratories to promote
                                            practical knowledge of mechatronics to meet the needs
                                            of the society.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                {/* VISION OF THE DEPARTMENT */}

                {/* VISION OF THE DEPARTMENT */}
                <section
                    id="department-vision"
                    className="bg-[#F2EFE8] px-5 py-20 sm:px-10 lg:px-20 lg:py-24"
                >
                    <div className="mx-auto max-w-7xl">

                        {/* SECTION LABEL */}
                        <div className="mb-10 flex items-center gap-4">
                            <span className="h-px w-12 bg-[#927B4D]" />
                            <span className="text-xs font-medium uppercase tracking-[0.28em] text-[#927B4D]">
                                Department of Mechatronics Engineering
                            </span>
                        </div>

                        {/* VISION CONTENT */}
                        <div className="grid gap-10 lg:grid-cols-[0.35fr_0.65fr] lg:gap-20">

                            {/* LEFT HEADING */}
                            <div>
                                <h2 className="font-serif text-4xl font-normal leading-tight text-[#20235A] sm:text-5xl lg:text-6xl">
                                    Our
                                    <span className="block italic text-[#927B4D]">
                                        Vision.
                                    </span>
                                </h2>

                                <div className="mt-7 h-1 w-16 bg-[#D2B87C]" />

                                <p className="mt-5 text-sm leading-7 text-[#77717A]">
                                    A commitment to quality education, professional ethics
                                    and social responsibility.
                                </p>
                            </div>

                            {/* RIGHT VISION STATEMENT */}
                            <div className="flex flex-col justify-center border-l-2 border-[#D2B87C] pl-6 sm:pl-10 lg:pl-12">
                                <span className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-[#927B4D]">
                                    Vision of the Department
                                </span>

                                <p className="text-left font-serif text-2xl font-normal leading-[1.65] text-[#20235A] sm:text-3xl lg:text-[38px]">
                                    To develop professionally ethical and socially responsible
                                    <span className="italic text-[#927B4D]">
                                        {" "}Mechatronics engineers
                                    </span>
                                    {" "}to serve the humanity through quality professional
                                    education.
                                </p>

                                <div className="mt-9">
                                    <p className="text-sm font-medium text-[#20235A]">
                                        Nehru College of Engineering and Research Centre
                                    </p>
                                    <p className="mt-1 text-xs text-[#77717A]">
                                        Accredited by NAAC
                                    </p>
                                    <p className="mt-3 text-xs leading-6 text-[#77717A]">
                                        Pampady, Thiruvilwamala, Thrissur, Kerala – 680588
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>




                {/* --------Program Outcomes Starts------- */}

                {/* PROGRAM OUTCOMES & PROGRAM SPECIFIC OUTCOMES */}
                <section
                    id="programme-outcomes"
                    className="bg-[#FAF7F2] px-5 py-20 sm:px-10 lg:px-20 lg:py-28"
                >
                    <div className="mx-auto max-w-7xl">

                        {/* SECTION HEADER */}
                        <div className="mb-14 max-w-3xl">
                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#B99A5B]" />
                                <span className="text-xs font-medium uppercase tracking-[0.28em] text-[#927B4D]">
                                    Academic Framework
                                </span>
                            </div>

                            <h2 className="font-serif text-4xl font-normal leading-tight text-[#20235A] sm:text-5xl lg:text-6xl">
                                Programme Outcomes
                                <span className="block italic text-[#927B4D]">
                                    & Specific Outcomes
                                </span>
                            </h2>

                            <p className="mt-6 text-base leading-8 text-[#69636A]">
                                The Department of Mechatronics Engineering focuses on
                                developing graduates with the knowledge, technical
                                competencies, professional values, and multidisciplinary
                                skills required to address complex engineering challenges.
                            </p>
                        </div>

                        {/* PROGRAM OUTCOMES */}
                        <div className="mb-20">
                            <div className="mb-8 flex flex-col gap-3 border-b border-[#D2B87C]/50 pb-6 sm:flex-row sm:items-end sm:justify-between">
                                <div>
                                    <p className="text-xs uppercase tracking-[0.22em] text-[#927B4D]">
                                        PO 01 — PO 12
                                    </p>
                                    <h3 className="mt-3 font-serif text-3xl font-normal text-[#20235A] sm:text-4xl">
                                        Programme Outcomes (POs)
                                    </h3>
                                </div>

                                <p className="max-w-sm text-sm leading-7 text-[#77717A]">
                                    Engineering Graduates will be able to:
                                </p>
                            </div>

                            <div className="divide-y divide-[#D2B87C]/40">
                                {[
                                    {
                                        number: "01",
                                        title: "Engineering Knowledge",
                                        description:
                                            "Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.",
                                    },
                                    {
                                        number: "02",
                                        title: "Problem Analysis",
                                        description:
                                            "Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.",
                                    },
                                    {
                                        number: "03",
                                        title: "Design / Development of Solutions",
                                        description:
                                            "Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.",
                                    },
                                    {
                                        number: "04",
                                        title: "Conduct Investigations of Complex Problems",
                                        description:
                                            "Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.",
                                    },
                                    {
                                        number: "05",
                                        title: "Modern Tool Usage",
                                        description:
                                            "Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.",
                                    },
                                    {
                                        number: "06",
                                        title: "The Engineer and Society",
                                        description:
                                            "Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.",
                                    },
                                    {
                                        number: "07",
                                        title: "Environment and Sustainability",
                                        description:
                                            "Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.",
                                    },
                                    {
                                        number: "08",
                                        title: "Ethics",
                                        description:
                                            "Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.",
                                    },
                                    {
                                        number: "09",
                                        title: "Individual and Team Work",
                                        description:
                                            "Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.",
                                    },
                                    {
                                        number: "10",
                                        title: "Communication",
                                        description:
                                            "Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.",
                                    },
                                    {
                                        number: "11",
                                        title: "Project Management and Finance",
                                        description:
                                            "Demonstrate knowledge and understanding of the engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.",
                                    },
                                    {
                                        number: "12",
                                        title: "Life-long Learning",
                                        description:
                                            "Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.",
                                    },
                                ].map((outcome) => (
                                    <div
                                        key={outcome.number}
                                        className="group grid grid-cols-1 gap-4 py-7 transition-all duration-300 sm:grid-cols-[75px_1fr] sm:gap-7"
                                    >
                                        <div className="font-serif text-3xl font-normal text-[#B99A5B] transition-colors duration-300 group-hover:text-[#20235A]">
                                            {outcome.number}
                                        </div>

                                        <div>
                                            <h4 className="mb-3 font-serif text-xl font-normal text-[#20235A] sm:text-2xl">
                                                {outcome.title}
                                            </h4>

                                            <p className="text-left text-sm font-normal leading-8 text-[#69636A] sm:text-base">
                                                {outcome.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* PROGRAM SPECIFIC OUTCOMES */}
                        <div className="relative overflow-hidden bg-[#20235A] px-6 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
                            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border border-[#D2B87C]/20" />
                            <div className="pointer-events-none absolute -right-8 -top-8 h-48 w-48 rounded-full border border-[#D2B87C]/20" />

                            <div className="relative">
                                <div className="mb-10 max-w-2xl">
                                    <div className="mb-5 flex items-center gap-3">
                                        <span className="h-px w-10 bg-[#D2B87C]" />
                                        <span className="text-xs uppercase tracking-[0.25em] text-[#D2B87C]">
                                            Departmental Competencies
                                        </span>
                                    </div>

                                    <h3 className="font-serif text-3xl font-normal text-[#FAF7F2] sm:text-4xl">
                                        Programme Specific Outcomes
                                        <span className="block italic text-[#D2B87C]">
                                            (PSOs)
                                        </span>
                                    </h3>

                                    <p className="mt-4 text-sm leading-7 text-white/65 sm:text-base">
                                        The programme-specific outcomes define the
                                        specialised knowledge and practical capabilities
                                        expected from Mechatronics Engineering graduates.
                                    </p>
                                </div>

                                <div className="grid gap-6 md:grid-cols-2">
                                    {/* PSO 1 */}
                                    <div className="border border-white/15 bg-white/[0.04] p-7 transition-colors duration-300 hover:border-[#D2B87C]/60 sm:p-9">
                                        <span className="font-serif text-4xl font-normal text-[#D2B87C]">
                                            PSO 01
                                        </span>

                                        <div className="mb-5 mt-5 h-px w-12 bg-[#D2B87C]" />

                                        <p className="text-left text-base font-normal leading-8 text-white/85">
                                            Design and develop Mechatronics systems to solve the complex engineering problem by integrating electronics, mechanical and control systems.

                                        </p>
                                    </div>

                                    {/* PSO 2 */}
                                    <div className="border border-white/15 bg-white/[0.04] p-7 transition-colors duration-300 hover:border-[#D2B87C]/60 sm:p-9">
                                        <span className="font-serif text-4xl font-normal text-[#D2B87C]">
                                            PSO 02
                                        </span>

                                        <div className="mb-5 mt-5 h-px w-12 bg-[#D2B87C]" />

                                        <p className="text-left text-base font-normal leading-8 text-white/85">
                                            Apply the engineering knowledge to conduct investigations of complex engineering problem related to instrumentation, control, automation, robotics and provide solutions.

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* PROGRAM SPECIFIC OUTCOMES */}
                <section
                    id="programme-specific-outcomes"
                    className="relative overflow-hidden bg-[#F2EFE8] px-5 py-20 sm:px-10 lg:px-20 lg:py-28"
                >
                    <div className="mx-auto max-w-7xl">

                        {/* SECTION INTRO */}
                        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
                            <div>
                                <div className="mb-5 flex items-center gap-3">
                                    <span className="h-px w-10 bg-[#927B4D]" />
                                    <span className="text-xs font-medium uppercase tracking-[0.28em] text-[#927B4D]">
                                        Academic Framework
                                    </span>
                                </div>

                                <h2 className="font-serif text-4xl font-normal leading-tight text-[#20235A] sm:text-5xl lg:text-6xl">
                                    Beyond
                                    <span className="block italic text-[#927B4D]">
                                        Engineering
                                    </span>
                                </h2>
                            </div>

                            <div className="lg:pb-2">
                                <p className="max-w-2xl text-left text-base font-normal leading-8 text-[#69636A]">
                                    Programme Specific Outcomes establish the specialised
                                    knowledge and capabilities that students develop through
                                    the Mechatronics Engineering programme. They reflect the
                                    ability to integrate engineering disciplines and apply
                                    technical knowledge to real-world challenges.
                                </p>
                            </div>
                        </div>

                        {/* PSO CONTENT */}
                        <div className="mt-16 border-t border-[#C9B88F]/60">

                            {/* PSO 01 */}
                            <div className="group grid gap-6 border-b border-[#C9B88F]/60 py-10 transition-all duration-300 lg:grid-cols-[0.25fr_0.75fr] lg:gap-12 lg:py-14">
                                <div className="flex items-start gap-5">
                                    <span className="font-serif text-6xl font-normal leading-none text-[#B99A5B] transition-colors duration-300 group-hover:text-[#20235A] sm:text-7xl">
                                        01
                                    </span>

                                    <div className="pt-2">
                                        <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#927B4D]">
                                            Programme Specific Outcome
                                        </span>
                                        <div className="mt-3 h-px w-10 bg-[#B99A5B] transition-all duration-300 group-hover:w-16" />
                                    </div>
                                </div>

                                <div className="max-w-3xl">
                                    <h3 className="font-serif text-2xl font-normal leading-snug text-[#20235A] sm:text-3xl lg:text-4xl">
                                        Mechatronics System Design & Integration
                                    </h3>

                                    <p className="mt-5 max-w-2xl text-left text-base font-normal leading-8 text-[#69636A] ">
                                        Design and develop Mechatronics systems to solve the
                                        complex engineering problem by integrating electronics,
                                        mechanical and control systems.
                                    </p>

                                    <div className="mt-7 flex flex-wrap gap-2">
                                        {["Electronics", "Mechanical Systems", "Control Systems"].map(
                                            (item) => (
                                                <span
                                                    key={item}
                                                    className="border border-[#C9B88F]/70 px-4 py-2 text-xs font-medium tracking-wide text-[#74613E]"
                                                >
                                                    {item}
                                                </span>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* PSO 02 */}
                            <div className="group grid gap-6 border-b border-[#C9B88F]/60 py-10 transition-all duration-300 lg:grid-cols-[0.25fr_0.75fr] lg:gap-12 lg:py-14">
                                <div className="flex items-start gap-5">
                                    <span className="font-serif text-6xl font-normal leading-none text-[#B99A5B] transition-colors duration-300 group-hover:text-[#20235A] sm:text-7xl">
                                        02
                                    </span>

                                    <div className="pt-2">
                                        <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#927B4D]">
                                            Programme Specific Outcome
                                        </span>
                                        <div className="mt-3 h-px w-10 bg-[#B99A5B] transition-all duration-300 group-hover:w-16" />
                                    </div>
                                </div>

                                <div className="max-w-3xl">
                                    <h3 className="font-serif text-2xl font-normal leading-snug text-[#20235A] sm:text-3xl lg:text-4xl">
                                        Investigation & Engineering Solutions
                                    </h3>

                                    <p className="mt-5 text-left text-base font-normal max-w-2xl leading-8 text-[#69636A] ">
                                        Apply the engineering knowledge to conduct investigations
                                        of complex engineering problem related to instrumentation,
                                        control, automation, robotics and provide solutions.
                                    </p>

                                    <div className="mt-7 flex flex-wrap gap-2">
                                        {["Instrumentation", "Control", "Automation", "Robotics"].map(
                                            (item) => (
                                                <span
                                                    key={item}
                                                    className="border border-[#C9B88F]/70 px-4 py-2 text-xs font-medium tracking-wide text-[#74613E]"
                                                >
                                                    {item}
                                                </span>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CLOSING STATEMENT */}
                        <div className="mt-12 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                            <p className="max-w-xl font-serif text-xl font-normal italic leading-relaxed text-[#20235A] sm:text-2xl">
                                Integrating disciplines. Developing intelligent solutions.
                            </p>

                            <span className="text-xs uppercase tracking-[0.2em] text-[#927B4D]">
                                Mechatronics Engineering
                            </span>
                        </div>
                    </div>
                </section>






            </main>

            <FooterSection />
        </>
    );
};


