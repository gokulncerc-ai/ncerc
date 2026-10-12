"use client";

import React from "react";
import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import {
    ArrowUpRight,
    Award,
    BrainCircuit,
    CheckCircle2,
    ChevronRight,
    Code2,
    Cpu,
    GraduationCap,
    Laptop,
    Network,
    Quote,
    Rocket,
    ShieldCheck,
    Target,
} from "lucide-react";
import McaNavigation from "../mca/mcanavigation/page";
import Faq from "../mca/faq/page";
import Image from "next/image";
const quickFacts = [
    { number: "02", label: "Years Programme" },
    { number: "04", label: "Semesters" },
    { number: "01", label: "Minor Project" },
    { number: "01", label: "General Seminar" },
];

const objectives = [
    "To impart basic understanding of concepts, strategies, tools and techniques if Information technology.",
    "To provide a strong foundation in all technical aspects of computers and their applications.",
    "To develop communication capabilities and soft skills necessary for contemporary IT professionals.",
    "To help to acquire experience in IT application in industry through projects on computer application software.",
    "To redefine the learning experience through Club Activities, team MCA Association Forums & NCERC Holistic Approach.",
];

const peos = [
    "Be successfully employed in computing profession as well as multidisciplinary domains in supportive and leadership roles.",
    "Promote Research, Design Thinking and services in the field of Computer Applications through strong Technical skills.",
    "Device Holistic approach focusing Methodical talents and Communication skills so as to be Industry-ready Expert or an Entrepreneur.",
];

const pos = [
    {
        id: "PO1",
        title: "Foundation Knowledge",
        text: "Apply knowledge of mathematics, programming logic and coding fundamentals for solution architecture and problem solving.",
    },
    {
        id: "PO2",
        title: "Problem Analysis",
        text: "Identify, review, formulate and analyse problems for primarily focusing on customer requirements using critical thinking frameworks.",
    },
    {
        id: "PO3",
        title: "Development of Solutions",
        text: "Design, develop and investigate problems with as an innovative approach for solutions incorporating ESG/SDG goals.",
    },
    {
        id: "PO4",
        title: "Modern Tool Usage",
        text: "Select, adapt and apply modern computational tools such as development of algorithms with an understanding of the limitations including human biases.",
    },
    {
        id: "PO5",
        title: "Individual and Teamwork",
        text: "Function and communicate effectively as an individual or a team leader in diverse and multidisciplinary groups. Use methodologies such as agile.",
    },
    {
        id: "PO6",
        title: "Project Management and Finance",
        text: "Use the principles of project management such as scheduling, work breakdown structure and be conversant with the principles of Finance for profitable project management.",
    },
    {
        id: "PO7",
        title: "Ethics",
        text: "Commit to professional ethics in managing software projects with financial aspects. Learn to use new technologies for cyber security and insulate customers from malware.",
    },
    {
        id: "PO8",
        title: "Life-long Learning",
        text: "Change management skills and the ability to learn, keep up with contemporary technologies and ways of working.",
    },
];

const psos = [
    "Ability to apply Sci-Tech knowledge to analyse, design and develop computing solutions by employing modern computer languages, environments and Digital platforms that can solve complex problems.",
    "Ability to anticipate the changing direction of computational technology, evaluate it and communicate the likely utility of that for building software systems that would perform tasks related to Industry, Research and Academia.",
    "Ability to inculcate the Holistic wisdom of Engineering and Management principles to accomplish projects effectively and create innovative career path.",
];

const technologyCards = [
    {
        icon: Code2,
        title: "Programming",
        text: "Build strong foundations in modern programming languages, computational thinking and software development. Develop practical coding skills through structured problem-solving, algorithm design, application development and hands-on programming exercises. Students are encouraged to understand programming concepts deeply and apply them to develop efficient, reliable and scalable software solutions for real-world requirements.",
    },
    {
        icon: BrainCircuit,
        title: "Applications",
        text: "Understand how computer applications solve real-world problems across business, education, governance and society. Explore application-oriented approaches that transform technological knowledge into practical and effective digital solutions. Students gain an understanding of how software applications are planned, designed, developed and implemented to address diverse user requirements across different domains.",
    },
    {
        icon: Network,
        title: "Industry Exposure",
        text: "Connect academic learning with organizations through projects, placements and real-time industry requirements. Gain practical exposure to professional environments while developing teamwork, communication and industry-ready technical skills. Projects, seminars and industry-oriented activities help students understand professional workflows, emerging technologies, organizational expectations and the practical challenges involved in developing technology-driven solutions.",
    },
];

const Page = () => {
    return (
        <main className="min-h-screen overflow-x-hidden bg-[#FAF7F2] text-[#1E1917]">
            <SiteHeader />

            {/* =====================================================
                HERO
            ===================================================== */}
            <section className="overflow-hidden bg-[#20235A]">
                <div className="mx-auto grid max-w-[1440px] lg:min-h-[650px] lg:grid-cols-[1fr_0.82fr]">
                    <div className="flex items-center px-5 py-14 sm:px-8 md:px-10 lg:px-16 lg:py-16 xl:px-20">
                        <div className="w-full max-w-[760px]">
                            <div className="mb-6 flex items-center gap-3">
                                <span className="h-px w-8 shrink-0 bg-[#D2B87C]" />

                                <p className="text-[9px] font-medium uppercase tracking-[0.22em] text-[#D2B87C] sm:text-[10px] sm:tracking-[0.3em]">
                                    Department of Computer Applications
                                </p>
                            </div>

                            <h1 className="max-w-[760px] font-serif text-[43px] leading-[0.98] tracking-[-0.025em] text-white sm:text-[55px] lg:text-[67px] xl:text-[75px]">
                                Master of
                                <span className="block text-[#D2B87C]">
                                    Computer Applications
                                </span>
                            </h1>

                            <p className="mt-6 max-w-[650px] text-[14px] leading-7 text-white/70 sm:text-[16px]">
                                A two-year postgraduate programme combining intensive
                                theory, practical learning, software development,
                                contemporary computing technologies and
                                industry-oriented applications.
                            </p>

                            <div className="mt-8 flex flex-col gap-3 min-[420px]:flex-row">
                                <a
                                    href="#about"
                                    className="group inline-flex items-center justify-center gap-3 bg-[#D2B87C] px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#20235A] transition-colors hover:bg-white"
                                >
                                    Explore MCA
                                    <ArrowUpRight
                                        size={15}
                                        className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                                    />
                                </a>

                                <a
                                    href="#eligibility"
                                    className="inline-flex items-center justify-center gap-3 border border-white/25 px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:border-[#D2B87C] hover:text-[#D2B87C]"
                                >
                                    Admission Eligibility
                                </a>
                            </div>

                            <div className="mt-9 flex items-center gap-4 border-t border-white/10 pt-5">
                                <Award
                                    size={24}
                                    className="shrink-0 text-[#D2B87C]"
                                />

                                <div>
                                    <p className="text-[9px] uppercase tracking-[0.2em] text-[#D2B87C]">
                                        Accreditation
                                    </p>

                                    <p className="mt-1 text-sm text-white/75">
                                        NBA Accredited Programme
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative min-h-[390px] sm:min-h-[450px] lg:min-h-full">
                        <Image
                            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=90"
                            alt="Students working with computers"
                            fill
                            sizes="(min-width: 1024px) 330px, 100vw"
                            className="absolute inset-0 h-full w-full object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-[#20235A]/80 via-[#20235A]/15 to-transparent lg:bg-gradient-to-r lg:from-[#20235A]/55 lg:via-transparent" />

                        <div className="absolute bottom-6 left-5 right-5 border border-white/20 bg-[#20235A]/80 p-5 backdrop-blur-sm sm:left-8 sm:right-8">
                            <div className="flex items-center gap-4">
                                <Laptop
                                    size={26}
                                    className="shrink-0 text-[#D2B87C]"
                                />

                                <div>
                                    <p className="text-[9px] uppercase tracking-[0.2em] text-[#D2B87C]">
                                        Computing Education
                                    </p>

                                    <p className="mt-1 text-sm text-white/80">
                                        Theory • Practice • Projects • Industry
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =====================================================
                DEPARTMENT NAVIGATION
            ===================================================== */}
            {/* <section className="border-b border-[#1E1917]/10 bg-white">
                <div className="mx-auto max-w-[1440px] overflow-x-auto px-4 py-3">
                    <nav className="flex min-w-max gap-1">
                        {departmentLinks.map((item, index) => (
                            <a
                                key={`${item.label}-${index}`}
                                href={item.href}
                                className={`whitespace-nowrap px-3 py-2 text-[9px] font-medium uppercase tracking-[0.1em] transition-colors ${index === 0
                                        ? "bg-[#20235A] text-white"
                                        : "text-[#1E1917]/65 hover:bg-[#F2EFE8] hover:text-[#20235A]"
                                    }`}
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>
                </div>
            </section> */}

            {/* =====================================================
                QUICK FACTS
            ===================================================== */}
            <section className="border-b border-[#1E1917]/10 bg-white">
                <div className="mx-auto grid max-w-[1440px] grid-cols-2 md:grid-cols-4">
                    {quickFacts.map((fact, index) => (
                        <div
                            key={fact.label}
                            className={`px-5 py-6 sm:px-8 lg:px-10 ${index !== quickFacts.length - 1
                                ? "border-r border-[#1E1917]/10"
                                : ""
                                }`}
                        >
                            <p className="font-serif text-[32px] leading-none tracking-[-0.025em] text-[#20235A] sm:text-[38px]">
                                {fact.number}
                            </p>

                            <p className="mt-2 text-[8px] font-semibold uppercase tracking-[0.16em] text-[#1E1917]/55 sm:text-[9px]">
                                {fact.label}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <McaNavigation />

            {/* =====================================================
                ABOUT
            ===================================================== */}
            <section id="about" className="bg-[#FAF7F2]">
                <div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 md:px-10 lg:px-16 lg:py-16 xl:px-20">
                    <div className="grid gap-9 lg:grid-cols-[0.62fr_1.38fr]">
                        <div className="flex flex-col">
                            <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                About the Programme
                            </p>

                            <h2 className="mt-4 max-w-[480px] font-serif text-[36px] leading-[1.05] tracking-[-0.025em] text-[#20235A] sm:text-[44px] lg:text-[49px]">
                                Computing knowledge shaped for application.
                            </h2>

                            <div className="mt-5 h-px w-14 bg-[#D2B87C]" />

                            <div className="mt-7 overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1000&q=90"
                                    alt="Software development and programming"
                                    fill
                                    sizes="(min-width: 1024px) 330px, 100vw"
                                    className="h-[190px] w-full object-cover sm:h-[220px] lg:h-[205px]"
                                />
                            </div>

                            <div className="mt-3 grid grid-cols-2 gap-3">
                                <div className="bg-white p-4 sm:p-5">
                                    <Code2
                                        size={21}
                                        strokeWidth={1.5}
                                        className="text-[#8F7746]"
                                    />

                                    <p className="mt-4 font-serif text-[20px] text-[#20235A]">
                                        Theory
                                    </p>

                                    <p className="mt-1 text-[10px] leading-5 text-[#1E1917]/50">
                                        Strong computational foundations.
                                    </p>
                                </div>

                                <div className="bg-[#20235A] p-4 sm:p-5">
                                    <Cpu
                                        size={21}
                                        strokeWidth={1.5}
                                        className="text-[#D2B87C]"
                                    />

                                    <p className="mt-4 font-serif text-[20px] text-white">
                                        Practice
                                    </p>

                                    <p className="mt-1 text-[10px] leading-5 text-white/50">
                                        Application-oriented learning.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <div className="w-full">
                                <div className="grid gap-7 lg:grid-cols-[1.25fr_0.75fr]">
                                    <div>
                                        <p className="text-[14px] leading-7 text-[#1E1917]/75 sm:text-[15px] sm:leading-8">
                                            Master of Computer Applications programme is a
                                            TWO-YEAR course of intensive theory and practical
                                            work. It is spread over a period of four semesters
                                            which enables the students to get familiar with the
                                            usage of Computer using latest programming languages
                                            and large number of Applications.
                                        </p>

                                        <p className="mt-4 text-[14px] leading-7 text-[#1E1917]/75 sm:text-[15px] sm:leading-8">
                                            The course also develops the capabilities of the
                                            students in preparation of System software. The
                                            students undergo at least one minor project to
                                            familiarize with software development processes.
                                        </p>

                                        <p className="mt-4 text-[14px] leading-7 text-[#1E1917]/75 sm:text-[15px] sm:leading-8">
                                            They also present at least One General Seminar to
                                            embrace with novel technological patterns. The
                                            placement cell helps students in finding suitable
                                            placements.
                                        </p>

                                        <p className="mt-4 text-[14px] leading-7 text-[#1E1917]/75 sm:text-[15px] sm:leading-8">
                                            During the 4th semester, students generally network
                                            with the industries and implement a real time project
                                            which is directly useful to the organization
                                            concerned.
                                        </p>
                                    </div>

                                    <div className="relative overflow-hidden">
                                        <Image
                                            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=90"
                                            alt="Computer programming workspace"
                                            fill
                                            sizes="(min-width: 1024px) 330px, 100vw"
                                            className="h-[300px] w-full object-cover sm:h-[350px] lg:h-full"
                                        />

                                        <div className="absolute bottom-0 left-0 right-0 bg-[#20235A]/90 px-5 py-4">
                                            <p className="text-[9px] uppercase tracking-[0.18em] text-[#D2B87C]">
                                                Learn • Build • Apply
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =====================================================
                OBJECTIVES
            ===================================================== */}
            <section className="bg-[#F2EFE8]">
                <div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 md:px-10 lg:px-16 lg:py-16 xl:px-20">
                    <div className="grid gap-8 lg:grid-cols-[0.62fr_1.38fr]">
                        <div>
                            <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                Programme Objectives
                            </p>

                            <h2 className="mt-4 max-w-[450px] font-serif text-[36px] leading-[1.05] tracking-[-0.025em] text-[#20235A] sm:text-[45px]">
                                Preparing professionals for the digital world.
                            </h2>

                            <div className="mt-5 h-px w-14 bg-[#D2B87C]" />

                            <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                                <div className="overflow-hidden">
                                    <Image
                                        src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=90"
                                        alt="Students collaborating on technology"
                                        fill
                                        sizes="(min-width: 1024px) 330px, 100vw"
                                        className="h-[180px] w-full object-cover"
                                    />
                                </div>

                                <div className="border-l-2 border-[#D2B87C] pl-5">
                                    <p className="font-serif text-[21px] leading-tight text-[#20235A]">
                                        Knowledge.
                                        <br />
                                        Skills.
                                        <br />
                                        Application.
                                    </p>

                                    <p className="mt-3 max-w-[300px] text-[10px] leading-5 text-[#1E1917]/50">
                                        A balanced postgraduate learning experience
                                        connecting academic capability with professional
                                        practice.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="grid gap-3 sm:grid-cols-2">
                            {objectives.map((objective, index) => (
                                <div
                                    key={index}
                                    className={`group border border-[#20235A]/10 bg-white p-5 sm:p-6 transition-all duration-300 hover:bg-[#20235A] ${index === objectives.length - 1
                                        ? "sm:col-span-2"
                                        : ""
                                        }`}
                                >
                                    <div className="flex gap-4">
                                        <span className="shrink-0 font-serif text-xl text-[#D2B87C]">
                                            0{index + 1}
                                        </span>

                                        <p className="text-[13px] leading-6 text-[#1E1917]/70 transition-colors group-hover:text-white/75">
                                            {objective}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* =====================================================
                HOD MESSAGE
            ===================================================== */}
            <section className="bg-white">
                <div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 md:px-10 lg:px-16 lg:py-16 xl:px-20">
                    <div className="grid gap-9 lg:grid-cols-[0.58fr_1.42fr]">
                        <div>
                            <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                HOD&apos;S Message
                            </p>

                            <div className="mt-5 overflow-hidden bg-[#F2EFE8]">
                                <Image
                                    src="https://ncerc.ac.in/images/dpt/mca/faculty/SSM.jpg"
                                    alt="Dr. Sudheer Sankara Marar"
                                    fill
                                    sizes="(min-width: 1024px) 330px, 100vw"
                                    className="aspect-[4/4.5] w-full object-cover object-top"
                                />
                            </div>

                            <div className="border border-t-0 border-[#20235A]/10 bg-[#20235A] p-5">
                                <p className="font-serif text-[21px] text-white">
                                    Dr. Sudheer Sankara Marar
                                </p>

                                <p className="mt-1 text-[9px] uppercase tracking-[0.14em] text-[#D2B87C]">
                                    Professor & HOD - MCA
                                </p>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-start gap-4">
                                <Quote
                                    size={34}
                                    className="mt-1 shrink-0 text-[#D2B87C]"
                                />

                                <p className="max-w-[850px] font-serif text-[23px] leading-[1.28] tracking-[-0.015em] text-[#20235A] sm:text-[29px]">
                                    Coaching students to apply knowledge and skills is one
                                    exceptionally high impact method to foster their
                                    capabilities across all scholarly disciplines.
                                </p>
                            </div>

                            <div className="mt-5 border-y border-[#1E1917]/10 py-5">
                                <p className="font-serif text-[20px] leading-8 text-[#20235A] sm:text-[21px]">
                                    “ Knowledge is the Potential.
                                    <br />
                                    Applying that knowledge is Power.
                                    <br />
                                    Understanding situations of Applications is the real
                                    wisdom..!”
                                </p>

                                <p className="mt-3 text-[9px] uppercase tracking-[0.14em] text-[#8F7746]">
                                    Takeda Shingen, Japanese Military leader and Warlord
                                </p>
                            </div>

                            <div className="mt-6 space-y-4 text-[14px] leading-7 text-[#1E1917]/72 sm:text-[15px] sm:leading-8">
                                <p>
                                    Applications play a vital role in all Computer
                                    domains as it is an end-user program that enables the
                                    users to do many things in an Information system.
                                    These applications form the core of any Computer
                                    based modus operandi systems.
                                </p>

                                <p>
                                    Today in digital era, We live in a world of diversified
                                    apps..! Lifestyle apps, Social apps, Entertainment
                                    apps, Communication apps, Governance apps.. At this
                                    point, applications are an integral part of our daily
                                    lives; even businesses that never would’ve needed apps
                                    in the past, are now rapidly getting into the game.
                                    Applications which allow performing explicit tasks are
                                    available for PCs, Mobile devices & Media platforms.
                                </p>

                                <p>
                                    The notion that ‘technology is the application of
                                    science’, reasons the precise selection of appropriate
                                    knowledge, the adoption of various criteria and the
                                    re-shaping of knowledge to make it acquiescent to the
                                    technologist.
                                </p>

                                <p>
                                    In this context, Application oriented PG programs
                                    like MCA becomes more significant and practical.
                                    Master of Computer Applications programme is a perfect
                                    blend of intensive theory and practical work, which
                                    enables the students to get familiar with the updated
                                    Computational conventions using latest programming
                                    methodologies and large number of Applications.
                                </p>

                                <p>
                                    Recently during the Covid19 period, we have been
                                    witnessing the prominent role that the IT is providing
                                    to almost all domains, be it business, education or
                                    governance.. This has undoubtfully boosted the very
                                    demand of Computer Application Professionals; and
                                    NCERC-MCA is all set to deliver that breed of
                                    specialists.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =====================================================
                MCA EXPERIENCE / IMAGE FEATURE
            ===================================================== */}
            <section className="bg-[#20235A]">
                <div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 md:px-10 lg:px-16 lg:py-16 xl:px-20">
                    <div className="grid gap-8 lg:grid-cols-[0.55fr_1.45fr]">
                        <div>
                            <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                                MCA Experience
                            </p>

                            <h2 className="mt-4 max-w-[430px] font-serif text-[37px] leading-[1.04] tracking-[-0.025em] text-white sm:text-[46px]">
                                From computational concepts to real-world applications.
                            </h2>

                            <p className="mt-5 max-w-[430px] text-[13px] leading-7 text-white/55">
                                The programme connects foundational computing knowledge
                                with practical software development, applications and
                                industry-oriented learning.
                            </p>

                            <div className="mt-7 overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1200&q=90"
                                    alt="Modern technology and computing workspace"
                                    fill
                                    sizes="(min-width: 1024px) 330px, 100vw"
                                    className="h-[210px] w-full object-cover"
                                />
                            </div>
                        </div>

                        <div className="grid gap-3 sm:grid-cols-3">
                            {technologyCards.map((card) => {
                                const Icon = card.icon;

                                return (
                                    <div
                                        key={card.title}
                                        className="flex flex-col border border-white/10 bg-white/[0.045] p-6"
                                    >
                                        <Icon
                                            size={28}
                                            strokeWidth={1.4}
                                            className="text-[#D2B87C]"
                                        />

                                        <h3 className="mt-7 font-serif text-[22px] text-white">
                                            {card.title}
                                        </h3>

                                        <p className="mt-3 text-[12px] leading-6 text-white/55">
                                            {card.text}
                                        </p>

                                        <div className="mt-auto pt-8">
                                            <span className="block h-px w-8 bg-[#D2B87C]" />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* =====================================================
                VISION / MISSION
            ===================================================== */}
            <section className="bg-[#F2EFE8]">
                <div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 md:px-10 lg:px-16 lg:py-16 xl:px-20">
                    <div className="grid gap-8 lg:grid-cols-[0.62fr_1.38fr]">
                        <div>
                            <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                Direction
                            </p>

                            <h2 className="mt-4 font-serif text-[39px] leading-[1.03] tracking-[-0.025em] text-[#20235A] sm:text-[48px]">
                                Vision
                                <br />
                                & Mission
                            </h2>

                            <div className="mt-5 h-px w-14 bg-[#D2B87C]" />

                            <div className="mt-7 overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=90"
                                    alt="Students collaborating and learning"
                                    fill
                                    sizes="(min-width: 1024px) 330px, 100vw"
                                    className="h-[190px] w-full object-cover sm:h-[220px]"
                                />
                            </div>

                            <p className="mt-4 max-w-[320px] text-[11px] leading-5 text-[#1E1917]/50">
                                Building capable professionals through academics,
                                applications, research, values and continuous
                                development.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <article className="bg-white p-6 sm:p-8">
                                <div className="flex items-center gap-3">
                                    <Target
                                        size={21}
                                        className="text-[#8F7746]"
                                    />

                                    <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                        Vision
                                    </p>
                                </div>

                                <p className="mt-5 max-w-[900px] font-serif text-[22px] leading-[1.45] text-[#20235A] sm:text-[28px]">
                                    To create a school of distinction for the PG students,
                                    prepare them to be industry- ready, and achieve
                                    Academic excellence by continuous endorsement of the
                                    Faculty team in terms of Academics, Applications &
                                    Research.
                                </p>
                            </article>

                            <article className="bg-[#20235A] p-6 text-white sm:p-8">
                                <div className="flex items-center gap-3">
                                    <Rocket
                                        size={21}
                                        className="text-[#D2B87C]"
                                    />

                                    <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                        Mission
                                    </p>
                                </div>

                                <p className="mt-5 text-[13px] leading-7 text-white/70 sm:text-[14px]">
                                    The Department of Computer Applications strives to
                                    provide quality and competency- based education and
                                    fine-tune the younger generation through Curricular,
                                    Co-Curricular and Extra-curricular activities so as
                                    to encounter the Professional and Personnel challenges
                                    ahead with Pragmatic skills & courage , thereby
                                    ‘Creating the True Citizens’.
                                </p>

                                <p className="mt-4 text-[13px] leading-7 text-white/70 sm:text-[14px]">
                                    We intend to facilitate our students to assimilate the
                                    latest technological know-how and to imbibe discipline,
                                    culture and spiritually, and to mould them into
                                    technological giants, dedicated research scientists
                                    and intellectual leaders of the country who can spread
                                    the beams of light and happiness among the poor and the
                                    underprivileged.
                                </p>

                                <div className="mt-6 grid gap-3">
                                    {[
                                        "To provide quality and competency- based Education",
                                        "To fine-tune the younger generation through Curricular, Co-Curricular and Extra-curricular activities",
                                        "To encounter the Professional and Personnel challenges ahead with Pragmatic skills & courage, thereby ‘Creating the True Citizens’.",
                                    ].map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex gap-3 border-t border-white/10 pt-3"
                                        >
                                            <CheckCircle2
                                                size={16}
                                                className="mt-1 shrink-0 text-[#D2B87C]"
                                            />

                                            <p className="text-[12px] leading-6 text-white/65">
                                                {item}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            {/* =====================================================
                PEO
            ===================================================== */}
            <section className="bg-white">
                <div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 md:px-10 lg:px-16 lg:py-16 xl:px-20">
                    <div className="grid gap-8 lg:grid-cols-[0.62fr_1.38fr]">
                        <div>
                            <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                Academic Framework
                            </p>

                            <h2 className="mt-4 font-serif text-[37px] leading-[1.04] tracking-[-0.025em] text-[#20235A] sm:text-[47px]">
                                Programme Educational Objectives
                            </h2>

                            <p className="mt-5 max-w-[400px] text-[13px] leading-6 text-[#1E1917]/55">
                                The programme is designed to develop technically capable,
                                adaptable and professionally responsible computing
                                professionals.
                            </p>

                            <div className="mt-7 grid grid-cols-2 gap-3">
                                <div className="overflow-hidden">
                                    <Image
                                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=90"
                                        alt="Professional teamwork"
                                        fill
                                        sizes="(min-width: 1024px) 330px, 100vw"
                                        className="h-[160px] w-full object-cover"
                                    />
                                </div>

                                <div className="flex flex-col justify-end border-l-2 border-[#D2B87C] pl-4">
                                    <p className="font-serif text-[20px] leading-tight text-[#20235A]">
                                        Professional
                                        <br />
                                        readiness
                                    </p>

                                    <p className="mt-2 text-[10px] leading-5 text-[#1E1917]/50">
                                        Technical competence with leadership and
                                        entrepreneurial thinking.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3">
                            {peos.map((peo, index) => (
                                <article
                                    key={index}
                                    className="group flex gap-5 border border-[#20235A]/10 bg-[#FAF7F2] p-6 transition-all duration-300 hover:bg-[#20235A]"
                                >
                                    <span className="shrink-0 font-serif text-[27px] leading-none text-[#D2B87C]">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <p className="text-[13px] leading-7 text-[#1E1917]/70 transition-colors group-hover:text-white/75">
                                        {peo}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* =====================================================
                PROGRAMME OUTCOMES
                MOBILE SAFE CENTRE DIVIDER
            ===================================================== */}
            <section className="bg-[#F2EFE8]">
                <div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 md:px-10 lg:px-16 lg:py-16 xl:px-20">
                    <div className="grid gap-6 border-b border-[#20235A]/10 pb-7 lg:grid-cols-[1fr_1px_0.7fr] lg:items-end">
                        <div>
                            <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                Learning Outcomes
                            </p>

                            <h2 className="mt-3 max-w-[650px] font-serif text-[39px] leading-[1.03] tracking-[-0.025em] text-[#20235A] sm:text-[49px]">
                                Programme Outcomes
                            </h2>
                        </div>

                        {/* DESKTOP CENTRE DIVIDER */}
                        <div className="hidden h-[85px] w-px bg-[#20235A]/20 lg:block" />

                        <div className="lg:pl-3">
                            <p className="max-w-[390px] text-[13px] leading-6 text-[#1E1917]/55">
                                Eight outcome areas guide the development of technical,
                                analytical, professional and ethical capabilities.
                            </p>
                        </div>

                        {/* MOBILE DIVIDER */}
                        <div className="block h-px w-16 bg-[#D2B87C] lg:hidden" />
                    </div>

                    <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                        {pos.map((po) => (
                            <article
                                key={po.id}
                                className="group flex min-h-[250px] flex-col justify-between border border-[#20235A]/10 bg-white p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-[#20235A]"
                            >
                                <div>
                                    <div className="flex items-center justify-between">
                                        <span className="font-serif text-[27px] text-[#D2B87C]">
                                            {po.id}
                                        </span>

                                        <ArrowUpRight
                                            size={16}
                                            className="text-[#20235A]/30 transition-colors group-hover:text-[#D2B87C]"
                                        />
                                    </div>

                                    <h3 className="mt-7 font-serif text-[20px] leading-tight text-[#20235A] transition-colors group-hover:text-white">
                                        {po.title}
                                    </h3>
                                </div>

                                <p className="mt-5 text-[11px] leading-6 text-[#1E1917]/60 transition-colors group-hover:text-white/60">
                                    {po.text}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* =====================================================
                PSO
            ===================================================== */}
            <section className="bg-[#20235A]">
                <div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 md:px-10 lg:px-16 lg:py-16 xl:px-20">
                    <div className="grid gap-8 lg:grid-cols-[0.62fr_1.38fr]">
                        <div>
                            <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                                Specialised Outcomes
                            </p>

                            <h2 className="mt-4 font-serif text-[38px] leading-[1.04] tracking-[-0.025em] text-white sm:text-[48px]">
                                Programme Specific Outcomes
                            </h2>

                            <p className="mt-5 max-w-[400px] text-[13px] leading-7 text-white/50">
                                The MCA programme develops the ability to apply computing
                                knowledge to complex professional, research and industry
                                contexts.
                            </p>

                            <div className="mt-7 overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=90"
                                    alt="Computer technology and hardware"
                                    fill
                                    sizes="(min-width: 1024px) 330px, 100vw"
                                    className="h-[190px] w-full object-cover opacity-85"
                                />
                            </div>
                        </div>

                        <div className="grid gap-3">
                            {psos.map((pso, index) => (
                                <article
                                    key={index}
                                    className="grid gap-5 border border-white/10 bg-white/[0.045] p-6 sm:grid-cols-[80px_1fr] sm:p-7"
                                >
                                    <div className="font-serif text-[34px] text-[#D2B87C]">
                                        0{index + 1}
                                    </div>

                                    <p className="text-[13px] leading-7 text-white/65">
                                        {pso}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* =====================================================
                ELIGIBILITY
            ===================================================== */}
            <section id="eligibility" className="bg-white">
                <div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 md:px-10 lg:px-16 lg:py-16 xl:px-20">
                    <div className="grid gap-8 lg:grid-cols-[0.62fr_1.38fr]">
                        <div>
                            <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                Admissions
                            </p>

                            <h2 className="mt-4 font-serif text-[39px] leading-[1.03] tracking-[-0.025em] text-[#20235A] sm:text-[49px]">
                                Eligibility
                            </h2>

                            <div className="mt-6 flex items-center gap-4">
                                <GraduationCap
                                    size={33}
                                    strokeWidth={1.3}
                                    className="shrink-0 text-[#D2B87C]"
                                />

                                <div>
                                    <p className="text-[9px] uppercase tracking-[0.17em] text-[#8F7746]">
                                        Programme
                                    </p>

                                    <p className="mt-1 font-serif text-xl text-[#20235A]">
                                        2 Year MCA
                                    </p>
                                </div>
                            </div>

                            <div className="mt-7 overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1000&q=90"
                                    alt="Students in an academic environment"
                                    fill
                                    sizes="(min-width: 1024px) 330px, 100vw"
                                    className="h-[200px] w-full object-cover"
                                />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <article className="border border-[#20235A]/10 bg-[#FAF7F2] p-6 sm:p-8">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#20235A] text-white">
                                        <CheckCircle2 size={18} />
                                    </div>

                                    <div>
                                        <h3 className="font-serif text-[22px] leading-tight text-[#20235A] sm:text-[23px]">
                                            Eligibility Criteria For 2 Year MCA Program
                                        </h3>

                                        <p className="mt-5 text-[13px] leading-7 text-[#1E1917]/70">
                                            Candidates should have Passed BCA / Bachelor
                                            Degree in Computer Science Engineering or
                                            equivalent Degree OR Passed B.Sc. /B.Com
                                            /B.A with Mathematics at 10+2 Level or at
                                            Graduation Level. The candidate should have
                                            secured a minimum aggregate of 50% marks in
                                            their qualifying Exam but, it is 45% for
                                            candidates belonging to reserved category.
                                        </p>

                                        <p className="mt-4 text-[13px] leading-7 text-[#1E1917]/70">
                                            For SC/ST candidates, a minimum pass in the
                                            degree exam is sufficient; no rounding off of
                                            percentage of marks to the nearest higher
                                            integer is permitted.
                                        </p>
                                    </div>
                                </div>
                            </article>

                            <article className="border border-[#20235A]/10 bg-[#20235A] p-6 sm:p-8">
                                <div className="flex items-start gap-4">
                                    <ShieldCheck
                                        size={27}
                                        className="mt-1 shrink-0 text-[#D2B87C]"
                                    />

                                    <div>
                                        <p className="text-[9px] uppercase tracking-[0.2em] text-[#D2B87C]">
                                            Entrance Requirement
                                        </p>

                                        <p className="mt-3 text-[14px] leading-7 text-white/70">
                                            The candidate should be eligible in the Kerala
                                            MCA Entrance exam, being conducted by LBS
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            {/* =====================================================
                CTA
            ===================================================== */}
            <section className="bg-[#F2EFE8]">
                <div className="mx-auto max-w-[1440px] px-5 py-10 sm:px-8 md:px-10 lg:px-16 lg:py-14 xl:px-20">
                    <div className="relative overflow-hidden bg-[#20235A] px-6 py-9 sm:px-10 lg:px-14 lg:py-11">
                        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-[#D2B87C]/15" />
                        <div className="absolute -bottom-32 right-20 h-72 w-72 rounded-full border border-[#D2B87C]/10" />

                        <div className="relative z-10 grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
                            <div>
                                <p className="text-[9px] font-semibold uppercase tracking-[0.23em] text-[#D2B87C]">
                                    Master of Computer Applications
                                </p>

                                <h2 className="mt-3 max-w-[750px] font-serif text-[32px] leading-[1.06] tracking-[-0.025em] text-white sm:text-[43px]">
                                    Learn computing. Build applications. Create impact.
                                </h2>

                                <p className="mt-3 max-w-[680px] text-[13px] leading-6 text-white/55">
                                    A postgraduate learning environment designed to connect
                                    academic knowledge, practical software development,
                                    professional skills and industry applications.
                                </p>
                            </div>

                            <a
                                href="#about"
                                className="group inline-flex w-fit items-center gap-3 bg-[#D2B87C] px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#20235A] transition-colors hover:bg-white"
                            >
                                Explore Programme

                                <ChevronRight
                                    size={16}
                                    className="transition-transform group-hover:translate-x-1"
                                />
                            </a>
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