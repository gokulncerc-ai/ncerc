"use client";
import Image from "next/image";
import React from "react";
import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import DepartmentNavigation from "../DepartmentsNavigation/DepartmentsNavigation";
import {
    ArrowUpRight,
    BookOpen,
    Check,
    ChevronRight,
    Factory,
    GraduationCap,
    Lightbulb,
    MonitorPlay,
    Settings2,
    Users,
} from "lucide-react";

const page = () => {
    const visualizationImages = [
        {
            src: "https://ncerc.ac.in/images/dpt/mechatronics-engineering/TLP/TLP_img_1.png",
            alt: "ICT enabled classroom learning",
        },
        {
            src: "https://ncerc.ac.in/images/dpt/mechatronics-engineering/TLP/TLP_img_2.png",
            alt: "Digital teaching materials",
        },
        {
            src: "https://ncerc.ac.in/images/dpt/mechatronics-engineering/TLP/TLP_img_3.png",
            alt: "Technology enabled learning",
        },
    ];

    const softwareImages = [
        {
            src: "https://ncerc.ac.in/images/dpt/mechatronics-engineering/TLP/TLP_img_4.png",
            alt: "Icampuz campus management system",
        },
        {
            src: "https://ncerc.ac.in/images/dpt/mechatronics-engineering/TLP/TLP_img_5.png",
            alt: "NGI online examination portal",
        },
    ];

    const projectImages = [
        {
            src: "https://ncerc.ac.in/images/dpt/mechatronics-engineering/TLP/TLP_img_6.png",
            alt: "Student project activity",
        },
        {
            src: "https://ncerc.ac.in/images/dpt/mechatronics-engineering/TLP/TLP_img_7.png",
            alt: "Student project development",
        },
        {
            src: "https://ncerc.ac.in/images/dpt/mechatronics-engineering/TLP/TLP_img_8.png",
            alt: "Project exhibition and prototype",
        },
    ];

    const industrialImages = [
        {
            src: "https://ncerc.ac.in/images/dpt/mechatronics-engineering/TLP/IV%201.png",
            alt: "Industrial visit",
        },
        {
            src: "https://ncerc.ac.in/images/dpt/mechatronics-engineering/TLP/IV%202.png",
            alt: "Industrial training",
        },
    ];

    const outcomeImages = [
        {
            src: "https://ncerc.ac.in/images/dpt/mechatronics-engineering/TLP/TLP_img_13.png",
            alt: "Outcome based education mapping",
        },
        {
            src: "https://ncerc.ac.in/images/dpt/mechatronics-engineering/TLP/TLP_img_14.png",
            alt: "Self learning activities",
        },
        {
            src: "https://ncerc.ac.in/images/dpt/mechatronics-engineering/TLP/TLP_img_15.png",
            alt: "Peer tutoring",
        },
    ];

    const technicalImages = [
        {
            src: "https://ncerc.ac.in/images/dpt/mechatronics-engineering/TLP/TLP_img_16.png",
            alt: "Technical workshop",
        },
        {
            src: "https://ncerc.ac.in/images/dpt/mechatronics-engineering/TLP/TLP_img_17.png",
            alt: "Technical advancement programme",
        },
        {
            src: "https://ncerc.ac.in/images/dpt/mechatronics-engineering/TLP/TLP_img_18.png",
            alt: "Technical talk",
        },
    ];

    const projectSteps = [
        {
            number: "01",
            title: "Project Registration",
            description:
                "Students are informed to form their batches and register with the project coordinators. Each project batch consists of a minimum of two and a maximum of four students.",
        },
        {
            number: "02",
            title: "Idea Identification",
            description:
                "Based on their area of interest and competency, students explore reputed citation journals and identify innovative project ideas.",
        },
        {
            number: "03",
            title: "Synopsis Presentation",
            description:
                "Students prepare a project synopsis and present their proposed work before the Head of the Department and project coordinator.",
        },
        {
            number: "04",
            title: "Guide Allocation",
            description:
                "The HoD and project coordinators allocate faculty guides according to the project domain, student interest and faculty expertise.",
        },
        {
            number: "05",
            title: "Detailed Discussion",
            description:
                "Students approach their faculty guides, discuss their ideas and submit a detailed synopsis for evaluation before the project panel.",
        },
        {
            number: "06",
            title: "Final Approval",
            description:
                "Suggestions and modifications from the evaluation panel are incorporated before the finalized synopsis is signed by the concerned guide and submitted to the coordinators.",
        },
    ];

    const finalEvaluation = [
        "Literature survey",
        "Formulation of objectives",
        "Formulation of hypothesis, design and methodology",
        "Formulation of work plan",
        "Preparation of preliminary report",
    ];

    const learningMethods = [
        {
            icon: MonitorPlay,
            title: "ICT Enabled Learning",
            description:
                "LCD projectors, presentations, digital documents and video resources are integrated into classroom teaching.",
        },
        {
            icon: Lightbulb,
            title: "Project Based Learning",
            description:
                "Students convert theoretical knowledge into practical solutions through mini projects and main projects.",
        },
        {
            icon: Users,
            title: "Collaborative Learning",
            description:
                "Peer tutoring, group discussions and team-based activities encourage knowledge sharing and collaborative problem solving.",
        },
        {
            icon: Factory,
            title: "Industry Exposure",
            description:
                "Industrial visits and training provide students with exposure to real-world practices, processes and organisational environments.",
        },
    ];

    return (
        <>
            <SiteHeader />

            <main className="bg-[#FAF7F2] text-[#1E1917]">
                {/* =====================================================
                    HERO
                ====================================================== */}
                <section className="bg-[#20235A]">
                    <div className="mx-auto max-w-[1400px] px-6 pb-14 pt-20 sm:px-8 sm:pb-16 sm:pt-24 lg:px-12 lg:pb-20 lg:pt-28 xl:px-16">
                        <div className="mb-12 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-white/45 sm:mb-16">
                            <span>Mechatronics Engineering</span>

                            <ChevronRight className="h-3 w-3 text-[#D2B87C]" />

                            <span className="text-[#D2B87C]">
                                Teaching & Learning Process
                            </span>
                        </div>

                        <div className="mb-6 flex items-center gap-4">
                            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                Academic Excellence
                            </span>

                            <span className="h-px w-10 bg-[#D2B87C]" />
                        </div>

                        <h1 className="max-w-6xl font-serif text-[3rem] font-medium leading-[1.02] tracking-[-0.035em] text-white sm:text-[4.2rem] lg:text-[5.2rem] xl:text-[5.7rem]">
                            Teaching &
                            <br />
                            <span className="text-[#D2B87C]">
                                Learning Process
                            </span>
                        </h1>

                        <p className="mt-8 max-w-3xl text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
                            Innovative, outcome-oriented and technology-enabled
                            learning practices designed to make education more
                            engaging, practical and relevant to the evolving
                            field of Mechatronics Engineering.
                        </p>
                    </div>
                </section>

                <DepartmentNavigation />

                {/* =====================================================
                    INFO STRIP
                ====================================================== */}
                <section className="border-b border-[#20235A]/10 bg-white">
                    <div className="mx-auto grid max-w-[1400px] grid-cols-2 lg:grid-cols-4">
                        <div className="border-r border-[#20235A]/10 px-6 py-7 sm:px-8 lg:px-10 xl:px-14">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                Approach
                            </p>

                            <p className="mt-2 font-serif text-xl text-[#20235A]">
                                Innovative
                            </p>
                        </div>

                        <div className="border-r border-[#20235A]/10 px-6 py-7 sm:px-8 lg:px-10 xl:px-14">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                Learning
                            </p>

                            <p className="mt-2 font-serif text-xl text-[#20235A]">
                                Outcome Based
                            </p>
                        </div>

                        <div className="border-r border-[#20235A]/10 px-6 py-7 sm:px-8 lg:px-10 xl:px-14">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                Exposure
                            </p>

                            <p className="mt-2 font-serif text-xl text-[#20235A]">
                                Industry Linked
                            </p>
                        </div>

                        <div className="px-6 py-7 sm:px-8 lg:px-10 xl:px-14">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                Development
                            </p>

                            <p className="mt-2 font-serif text-xl text-[#20235A]">
                                Student Centric
                            </p>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    INTRO
                ====================================================== */}
                <section className="bg-[#FAF7F2] py-20 sm:py-24 lg:py-32">
                    <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16">
                        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
                            <div>
                                <div className="flex items-center gap-4">
                                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                        Teaching Philosophy
                                    </span>

                                    <span className="h-px w-10 bg-[#D2B87C]" />
                                </div>

                                <h2 className="mt-6 max-w-xl font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-[#20235A] sm:text-5xl lg:text-[3.7rem]">
                                    Learning that moves
                                    <br />
                                    <span className="text-[#8F7746]">
                                        beyond the classroom.
                                    </span>
                                </h2>
                            </div>

                            <div className="space-y-7">
                                <p className="text-[15px] leading-8 text-[#1E1917]/70 sm:text-base sm:leading-[1.95]">
                                    The Department of Mechatronics has ensured
                                    academic excellence through different
                                    innovative learning methods. As technology
                                    improves day by day, the department adopts
                                    new techniques to make the learning
                                    process easier, engaging and effortless.
                                </p>

                                <p className="text-[15px] leading-8 text-[#1E1917]/70 sm:text-base sm:leading-[1.95]">
                                    The teaching-learning process combines
                                    digital technologies, project-based
                                    learning, outcome-based education,
                                    industrial exposure, technical
                                    advancement programmes and self-learning
                                    practices to develop both academic
                                    competence and practical capability.
                                </p>
                            </div>
                        </div>

                        {/* Learning methods */}
                        <div className="mt-20 grid gap-px border border-[#20235A]/10 bg-[#20235A]/10 sm:grid-cols-2 lg:grid-cols-4">
                            {learningMethods.map((method) => {
                                const Icon = method.icon;

                                return (
                                    <div
                                        key={method.title}
                                        className="bg-white p-7 sm:p-8 lg:p-9"
                                    >
                                        <Icon className="h-6 w-6 text-[#8F7746]" />

                                        <h3 className="mt-6 font-serif text-2xl text-[#20235A]">
                                            {method.title}
                                        </h3>

                                        <p className="mt-3 text-sm leading-7 text-[#1E1917]/60">
                                            {method.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    ENHANCEMENT OF VISUALIZATION
                ====================================================== */}
                <section className="bg-white py-20 sm:py-24 lg:py-32">
                    <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16">
                        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                    01 / Innovative Learning
                                </p>

                                <h2 className="mt-5 font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-[#20235A] sm:text-5xl lg:text-[3.6rem]">
                                    Enhancement of
                                    <br />
                                    <span className="text-[#8F7746]">
                                        Visualization
                                    </span>
                                </h2>

                                <div className="mt-8 space-y-6 text-[15px] leading-8 text-[#1E1917]/70 sm:text-base">
                                    <p>
                                        ICT enabled classes are provided in
                                        which faculty use LCD projectors in
                                        the classroom for visualizing and
                                        demonstrating various concepts,
                                        theories and procedures in addition to
                                        conventional blackboard teaching.
                                    </p>

                                    <p>
                                        Faculty use Microsoft PowerPoint
                                        presentations, Google Slides, PDF and
                                        Word documents prepared by faculty,
                                        along with video lectures available
                                        from NPTEL and other reliable sources.
                                    </p>

                                    <p>
                                        These materials are made available to
                                        students to improve their learning
                                        process. Faculty also handle classes
                                        in smart classrooms.
                                    </p>
                                </div>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="overflow-hidden sm:row-span-2">
                                    <Image
                                        src={visualizationImages[0].src}
                                        alt={visualizationImages[0].alt}
                                        fill
                                        sizes="(min-width: 1024px) 330px, 100vw"
                                        className="h-full min-h-[360px] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                                    />
                                </div>

                                <div className="overflow-hidden">
                                    <Image
                                        src={visualizationImages[1].src}
                                        alt={visualizationImages[1].alt}
                                        fill
                                        sizes="(min-width: 1024px) 330px, 100vw"
                                        className="h-[260px] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                                    />
                                </div>

                                <div className="overflow-hidden">
                                    <Image
                                        src={visualizationImages[2].src}
                                        alt={visualizationImages[2].alt}
                                        fill
                                        sizes="(min-width: 1024px) 330px, 100vw"
                                        className="h-[260px] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mt-16 grid gap-px border border-[#20235A]/10 bg-[#20235A]/10 sm:grid-cols-3">
                            <div className="bg-[#FAF7F2] p-7 sm:p-8">
                                <MonitorPlay className="h-5 w-5 text-[#8F7746]" />
                                <p className="mt-5 text-sm leading-7 text-[#1E1917]/65">
                                    Smart classroom teaching supports visual
                                    and interactive understanding.
                                </p>
                            </div>

                            <div className="bg-[#FAF7F2] p-7 sm:p-8">
                                <BookOpen className="h-5 w-5 text-[#8F7746]" />
                                <p className="mt-5 text-sm leading-7 text-[#1E1917]/65">
                                    Students are encouraged to attend MOOC
                                    courses including NPTEL and Stanford
                                    courses.
                                </p>
                            </div>

                            <div className="bg-[#FAF7F2] p-7 sm:p-8">
                                <GraduationCap className="h-5 w-5 text-[#8F7746]" />
                                <p className="mt-5 text-sm leading-7 text-[#1E1917]/65">
                                    Platforms such as Coursera, Udacity and
                                    Udemy support additional learning.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    SOFTWARE SUPPORT
                ====================================================== */}
                <section className="bg-[#FAF7F2] py-20 sm:py-24 lg:py-32">
                    <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16">
                        <div className="mb-14 max-w-3xl lg:mb-20">
                            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                02 / Digital Infrastructure
                            </p>

                            <h2 className="mt-5 font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-[#20235A] sm:text-5xl lg:text-[3.7rem]">
                                Software
                                <span className="text-[#8F7746]">
                                    {" "}Support
                                </span>
                            </h2>

                            <p className="mt-7 text-[15px] leading-8 text-[#1E1917]/70 sm:text-base sm:leading-[1.95]">
                                Digital platforms support academic
                                administration, course delivery, assessment
                                and communication, giving students and
                                faculty convenient access to essential
                                academic resources.
                            </p>
                        </div>

                        <div className="space-y-20">
                            {/* ICAMPUZ */}
                            <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
                                <div className="overflow-hidden">
                                    <Image
                                        src={softwareImages[0].src}
                                        alt={softwareImages[0].alt}
                                        fill
                                        sizes="(min-width: 1024px) 330px, 100vw"
                                        className="h-[360px] w-full object-cover transition-transform duration-700 hover:scale-[1.03] sm:h-[430px]"
                                    />
                                </div>

                                <div>
                                    <div className="flex items-center gap-4">
                                        <span className="font-serif text-xl text-[#D2B87C]">
                                            01
                                        </span>

                                        <span className="h-px w-10 bg-[#D2B87C]" />
                                    </div>

                                    <h3 className="mt-5 font-serif text-3xl tracking-[-0.02em] text-[#20235A] sm:text-4xl">
                                        ICAMPUZ
                                    </h3>

                                    <p className="mt-6 text-[15px] leading-8 text-[#1E1917]/70 sm:text-base sm:leading-[1.95]">
                                        Icampuz is an advanced web-based campus
                                        management system offering attendance
                                        management, daily message facilities
                                        for parents regarding student
                                        attendance, student and faculty
                                        information, academic details and
                                        course materials.
                                    </p>

                                    <p className="mt-5 text-[15px] leading-8 text-[#1E1917]/70 sm:text-base sm:leading-[1.95]">
                                        Students can easily access Icampuz
                                        through their individual logins,
                                        helping them remain connected with
                                        their academic information.
                                    </p>
                                </div>
                            </div>

                            {/* ONLINE EXAM */}
                            <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
                                <div className="order-2 lg:order-1">
                                    <div className="flex items-center gap-4">
                                        <span className="font-serif text-xl text-[#D2B87C]">
                                            02
                                        </span>

                                        <span className="h-px w-10 bg-[#D2B87C]" />
                                    </div>

                                    <h3 className="mt-5 font-serif text-3xl tracking-[-0.02em] text-[#20235A] sm:text-4xl">
                                        NGI Online Exam Portal
                                    </h3>

                                    <p className="mt-6 text-[15px] leading-8 text-[#1E1917]/70 sm:text-base sm:leading-[1.95]">
                                        The NGI Online Exam Portal is a
                                        web-based examination platform through
                                        which teachers can conduct and evaluate
                                        examinations for subjects, laboratories
                                        and GATE model examinations.
                                    </p>

                                    <a
                                        href="http://www.ngientranceexam.in/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-7 inline-flex items-center gap-3 border border-[#20235A]/15 px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#20235A] transition-colors hover:border-[#20235A] hover:bg-[#20235A] hover:text-white"
                                    >
                                        Visit Examination Portal
                                        <ArrowUpRight className="h-4 w-4" />
                                    </a>
                                </div>

                                <div className="order-1 overflow-hidden lg:order-2">
                                    <Image
                                        src={softwareImages[1].src}
                                        alt={softwareImages[1].alt}
                                        fill
                                        sizes="(min-width: 1024px) 330px, 100vw"
                                        className="h-[360px] w-full object-cover transition-transform duration-700 hover:scale-[1.03] sm:h-[430px]"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    CONCEPTUAL IMPLEMENTATION
                ====================================================== */}
                <section className="bg-[#20235A] py-20 text-white sm:py-24 lg:py-32">
                    <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16">
                        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                                    03 / Practical Learning
                                </p>

                                <h2 className="mt-5 font-serif text-4xl leading-[1.08] tracking-[-0.025em] sm:text-5xl lg:text-[3.7rem]">
                                    Conceptual
                                    <br />
                                    <span className="text-[#D2B87C]">
                                        Implementation
                                    </span>
                                </h2>
                            </div>

                            <div>
                                <p className="text-[15px] leading-8 text-white/65 sm:text-base sm:leading-[1.95]">
                                    Students are encouraged to implement mini
                                    and main projects during their last two
                                    years. Faculty members are chosen as
                                    project guides based on their area of
                                    specialization, while students are
                                    encouraged to participate in project
                                    exhibitions and showcase their work.
                                </p>

                                <p className="mt-6 text-[15px] leading-8 text-white/65 sm:text-base sm:leading-[1.95]">
                                    Project coordinators appointed by the Head
                                    of the Department are responsible for
                                    planning, scheduling and executing
                                    activities related to student project work.
                                </p>
                            </div>
                        </div>

                        <div className="mt-16 grid gap-4 sm:grid-cols-3">
                            {projectImages.map((image) => (
                                <div
                                    key={image.src}
                                    className="overflow-hidden"
                                >
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        sizes="(min-width: 1024px) 330px, 100vw"
                                        className="h-[280px] w-full object-cover transition-transform duration-700 hover:scale-[1.04] sm:h-[330px]"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    PROJECT IDENTIFICATION METHODOLOGY
                ====================================================== */}
                <section className="bg-white py-20 sm:py-24 lg:py-32">
                    <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16">
                        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                    Project Development
                                </p>

                                <h2 className="mt-5 font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-[#20235A] sm:text-5xl lg:text-[3.5rem]">
                                    Identification &
                                    <br />
                                    <span className="text-[#8F7746]">
                                        Allocation
                                    </span>
                                </h2>

                                <p className="mt-7 text-sm leading-7 text-[#1E1917]/60 sm:text-base sm:leading-8">
                                    A structured process ensures that every
                                    project is aligned with student interests,
                                    faculty expertise and practical
                                    engineering outcomes.
                                </p>
                            </div>

                            <div className="border-t border-[#20235A]/10">
                                {projectSteps.map((step) => (
                                    <div
                                        key={step.number}
                                        className="grid gap-5 border-b border-[#20235A]/10 py-7 sm:grid-cols-[70px_0.65fr_1.35fr] sm:items-start sm:gap-8"
                                    >
                                        <span className="font-serif text-xl text-[#D2B87C]">
                                            {step.number}
                                        </span>

                                        <h3 className="font-serif text-2xl text-[#20235A]">
                                            {step.title}
                                        </h3>

                                        <p className="text-sm leading-7 text-[#1E1917]/60">
                                            {step.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    INITIATIVES
                ====================================================== */}
                <section className="bg-[#F2EFE8] py-20 sm:py-24 lg:py-28">
                    <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16">
                        <div className="mb-12">
                            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                Student Project Initiatives
                            </p>

                            <h2 className="mt-5 font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-[#20235A] sm:text-5xl">
                                From ideas to
                                <span className="text-[#8F7746]">
                                    {" "}impact.
                                </span>
                            </h2>
                        </div>

                        <div className="grid gap-px border border-[#20235A]/10 bg-[#20235A]/10 sm:grid-cols-2 lg:grid-cols-4">
                            {[
                                "Faculty mentorship and essential resources for in-house projects",
                                "Participation in project exhibitions, conferences and journals",
                                "Encouragement to apply for external project funding schemes",
                                "Guide allocation based on domain and faculty expertise",
                            ].map((item, index) => (
                                <div
                                    key={item}
                                    className="bg-white p-7 sm:p-8"
                                >
                                    <span className="font-serif text-xl text-[#D2B87C]">
                                        0{index + 1}
                                    </span>

                                    <p className="mt-6 text-sm leading-7 text-[#1E1917]/65">
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    PROJECT EVALUATION
                ====================================================== */}
                <section className="bg-[#FAF7F2] py-20 sm:py-24 lg:py-32">
                    <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16">
                        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
                            {/* Final Project Evaluation */}
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                    04 / Evaluation
                                </p>

                                <h2 className="mt-5 font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-[#20235A] sm:text-5xl">
                                    Final Project
                                    <br />
                                    <span className="text-[#8F7746]">
                                        Evaluation
                                    </span>
                                </h2>

                                <p className="mt-7 text-[15px] leading-8 text-[#1E1917]/70 sm:text-base sm:leading-[1.95]">
                                    Students carry out project preliminary
                                    work during the seventh semester as
                                    prescribed by the university curriculum.
                                    The major preliminary activities include:
                                </p>

                                <div className="mt-8 space-y-3">
                                    {finalEvaluation.map((item) => (
                                        <div
                                            key={item}
                                            className="flex items-start gap-4 border-b border-[#20235A]/10 py-4"
                                        >
                                            <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center bg-[#20235A] text-white">
                                                <Check className="h-3 w-3" />
                                            </span>

                                            <span className="text-sm leading-7 text-[#1E1917]/65">
                                                {item}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Report Evaluation */}
                            <div className="lg:pt-12">
                                <div className="border-l border-[#D2B87C] pl-7 sm:pl-9">
                                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                        Report Evaluation
                                    </p>

                                    <h3 className="mt-4 font-serif text-3xl text-[#20235A] sm:text-4xl">
                                        Documentation &
                                        <span className="text-[#8F7746]">
                                            {" "}Review
                                        </span>
                                    </h3>

                                    <p className="mt-6 text-[15px] leading-8 text-[#1E1917]/70 sm:text-base sm:leading-[1.95]">
                                        The final draft copy of the report is
                                        submitted immediately after the final
                                        presentation and review to the
                                        respective guides. Guides review the
                                        report according to the prescribed
                                        format and communicate discrepancies
                                        to the students.
                                    </p>

                                    <p className="mt-5 text-[15px] leading-8 text-[#1E1917]/70 sm:text-base sm:leading-[1.95]">
                                        Students incorporate the suggestions
                                        before preparing the final approved
                                        report. The final report approved by
                                        the guide is submitted in hardbound
                                        format as prescribed by NCERC.
                                    </p>
                                </div>

                                <div className="mt-10 bg-white p-7 sm:p-9">
                                    <Settings2 className="h-6 w-6 text-[#8F7746]" />

                                    <h4 className="mt-5 font-serif text-2xl text-[#20235A]">
                                        Project Quality
                                    </h4>

                                    <div className="mt-5 space-y-3 text-sm leading-7 text-[#1E1917]/65">
                                        <p>
                                            01. Final project demonstration
                                            and report are evaluated by a
                                            panel.
                                        </p>

                                        <p>
                                            02. Best projects are identified
                                            through project exhibitions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    COMPUTATIONAL SOFTWARE
                ====================================================== */}
                <section className="bg-white py-20 sm:py-24 lg:py-32">
                    <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16">
                        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                    Practical Application
                                </p>

                                <h2 className="mt-5 font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-[#20235A] sm:text-5xl lg:text-[3.6rem]">
                                    Computational &
                                    <br />
                                    <span className="text-[#8F7746]">
                                        Analytical Tools
                                    </span>
                                </h2>

                                <p className="mt-7 text-[15px] leading-8 text-[#1E1917]/70 sm:text-base sm:leading-[1.95]">
                                    Practical implementation helps students
                                    better understand the significance of
                                    subjects taught in the curriculum. Faculty
                                    demonstrate modern computational and
                                    analytical software tools during regular
                                    classes to make the learning process more
                                    effective.
                                </p>
                            </div>

                            <div className="relative">
                                <div className="absolute -left-4 -top-4 h-20 w-20 border-l border-t border-[#D2B87C]" />

                                <Image
                                    src="https://ncerc.ac.in/images/dpt/mechatronics-engineering/TLP/TLP_img_9.png"
                                    alt="Computational software learning"
                                    fill
                                    sizes="(min-width: 1024px) 330px, 100vw"
                                    className="relative h-[340px] w-full object-cover sm:h-[430px]"
                                />

                                <div className="absolute -bottom-5 -right-4 hidden h-20 w-20 border-b border-r border-[#D2B87C] sm:block" />
                            </div>
                        </div>

                        <div className="mt-10 ml-auto max-w-2xl overflow-hidden">
                            <Image
                                src="https://ncerc.ac.in/images/dpt/mechatronics-engineering/TLP/TLP_img_10.png"
                                alt="Analytical software demonstration"
                                fill
                                sizes="(min-width: 1024px) 330px, 100vw"
                                className="h-[260px] w-full object-cover sm:h-[330px]"
                            />
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    INDUSTRIAL VISITS
                ====================================================== */}
                <section className="bg-[#20235A] py-20 text-white sm:py-24 lg:py-32">
                    <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16">
                        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                                    05 / Industry Exposure
                                </p>

                                <h2 className="mt-5 font-serif text-4xl leading-[1.08] tracking-[-0.025em] sm:text-5xl lg:text-[3.7rem]">
                                    Learning from the
                                    <br />
                                    <span className="text-[#D2B87C]">
                                        real world.
                                    </span>
                                </h2>
                            </div>

                            <div>
                                <p className="text-[15px] leading-8 text-white/65 sm:text-base sm:leading-[1.95]">
                                    Industrial visits and training are
                                    organized to bridge the gap between
                                    theoretical knowledge and practical
                                    training in real-life environments.
                                    Students gain exposure to industrial
                                    practices and organizational hierarchy
                                    through these experiences.
                                </p>

                                <p className="mt-6 text-[15px] leading-8 text-white/65 sm:text-base sm:leading-[1.95]">
                                    Industrial visits also provide
                                    opportunities for active and interactive
                                    learning outside the classroom in addition
                                    to conventional academic learning.
                                </p>
                            </div>
                        </div>

                        <div className="mt-16 grid gap-4 sm:grid-cols-2">
                            {industrialImages.map((image) => (
                                <div
                                    key={image.src}
                                    className="overflow-hidden"
                                >
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        sizes="(min-width: 1024px) 330px, 100vw"
                                        className="h-[300px] w-full object-cover transition-transform duration-700 hover:scale-[1.03] sm:h-[420px]"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    OUTCOME BASED LEARNING
                ====================================================== */}
                <section className="bg-[#FAF7F2] py-20 sm:py-24 lg:py-32">
                    <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16">
                        <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                    06 / Academic Framework
                                </p>

                                <h2 className="mt-5 font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-[#20235A] sm:text-5xl lg:text-[3.7rem]">
                                    Outcome Based
                                    <br />
                                    <span className="text-[#8F7746]">
                                        Learning
                                    </span>
                                </h2>
                            </div>

                            <div className="space-y-7 text-[15px] leading-8 text-[#1E1917]/70 sm:text-base sm:leading-[1.95]">
                                <p>
                                    Teaching-learning is a crucial part of
                                    outcome-based education. It employs a set
                                    of activities engaging students to enable
                                    them to acquire knowledge, skills and
                                    attitudes.
                                </p>

                                <p>
                                    Curriculum compliance is systematically
                                    analysed to identify the degree of
                                    competency of the prescribed syllabus and
                                    its contents for attaining the Program
                                    Outcomes and Program Specific Outcomes.
                                </p>

                                <p>
                                    For each course, the knowledge level of
                                    course contents is identified using the
                                    revised Bloom&apos;s taxonomy and
                                    corresponding course outcomes are
                                    formulated. Curriculum compliance can be
                                    verified through a course-PO matrix
                                    mapping each element to the other.
                                </p>

                                <p>
                                    Such mapping provides information about
                                    whether the curriculum meets academic and
                                    professional benchmark requirements and
                                    demonstrates the possible level of
                                    attainment of the Program Outcomes.
                                </p>
                            </div>
                        </div>

                        <div className="mt-16 grid gap-4 sm:grid-cols-3">
                            {outcomeImages.map((image) => (
                                <div
                                    key={image.src}
                                    className="overflow-hidden"
                                >
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        sizes="(min-width: 1024px) 330px, 100vw"
                                        className="h-[270px] w-full object-cover transition-transform duration-700 hover:scale-[1.03] sm:h-[320px]"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Self Learning / Peer Tutoring */}
                        <div className="mt-16 grid gap-px border border-[#20235A]/10 bg-[#20235A]/10 lg:grid-cols-2">
                            <div className="bg-white p-8 sm:p-10 lg:p-12">
                                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                    Self-Learning
                                </span>

                                <h3 className="mt-5 font-serif text-3xl text-[#20235A]">
                                    Learning independently.
                                </h3>

                                <p className="mt-5 text-sm leading-7 text-[#1E1917]/65 sm:text-base sm:leading-8">
                                    Assignments and tutorials are provided by
                                    the department according to the syllabus.
                                    Students are expected to gain knowledge
                                    independently while preparing assignments
                                    using various resources for particular
                                    topics.
                                </p>
                            </div>

                            <div className="bg-white p-8 sm:p-10 lg:p-12">
                                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                    Peer Tutoring
                                </span>

                                <h3 className="mt-5 font-serif text-3xl text-[#20235A]">
                                    Learning together.
                                </h3>

                                <p className="mt-5 text-sm leading-7 text-[#1E1917]/65 sm:text-base sm:leading-8">
                                    Tutorial classes are facilitated by
                                    selecting small groups of students,
                                    generally with a maximum of 30 students.
                                    Tutorials enable group discussion,
                                    assessment and collaborative problem
                                    solving.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    TECHNICAL ADVANCEMENT
                ====================================================== */}
                <section className="bg-white py-20 sm:py-24 lg:py-32">
                    <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16">
                        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                    07 / Continuous Development
                                </p>

                                <h2 className="mt-5 font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-[#20235A] sm:text-5xl lg:text-[3.6rem]">
                                    Technical
                                    <br />
                                    <span className="text-[#8F7746]">
                                        Advancement
                                    </span>
                                </h2>

                                <p className="mt-7 text-[15px] leading-8 text-[#1E1917]/70 sm:text-base sm:leading-[1.95]">
                                    Outcome-based education is strengthened
                                    through workshops and technical talks
                                    focused on recent technological
                                    advancements in the field of Mechatronics
                                    Engineering.
                                </p>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-3">
                                {technicalImages.map((image, index) => (
                                    <div
                                        key={image.src}
                                        className={`overflow-hidden ${index === 0
                                                ? "sm:mt-10"
                                                : index === 2
                                                    ? "sm:mt-20"
                                                    : ""
                                            }`}
                                    >
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            fill
                                            sizes="(min-width: 1024px) 330px, 100vw"
                                            className="h-[280px] w-full object-cover transition-transform duration-700 hover:scale-[1.04] sm:h-[360px]"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    COURSE MATERIALS / VALUE ADDED COURSES
                ====================================================== */}
                <section className="bg-[#F2EFE8] py-20 sm:py-24 lg:py-32">
                    <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16">
                        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                    08 / Enrichment
                                </p>

                                <h2 className="mt-5 font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-[#20235A] sm:text-5xl lg:text-[3.6rem]">
                                    Course Materials &
                                    <br />
                                    <span className="text-[#8F7746]">
                                        Value Added Courses
                                    </span>
                                </h2>
                            </div>

                            <div className="space-y-7 text-[15px] leading-8 text-[#1E1917]/70 sm:text-base sm:leading-[1.95]">
                                <p>
                                    The Mechatronics Department conducts Value
                                    Added Courses during each semester to
                                    improve students&apos; knowledge of new
                                    technologies and content beyond the
                                    prescribed syllabus.
                                </p>

                                <p>
                                    A minimum of 30 hours of classes are
                                    conducted, with certificates provided
                                    according to performance in the
                                    examination.
                                </p>

                                <p>
                                    Remedial teaching identifies slow learners
                                    and provides them with the necessary help
                                    and guidance to overcome learning
                                    difficulties after identifying their areas
                                    of concern.
                                </p>

                                <p>
                                    Course materials are prepared and
                                    distributed through Google Classroom,
                                    Icampuz, websites and other digital
                                    platforms.
                                </p>
                            </div>
                        </div>

                        <div className="mt-16 grid gap-px border border-[#20235A]/10 bg-[#20235A]/10 sm:grid-cols-2 lg:grid-cols-3">
                            {[
                                {
                                    title: "Lecture Notes",
                                    text: "Faculty-prepared notes supporting structured classroom learning.",
                                },
                                {
                                    title: "Question Banks",
                                    text: "Practice resources and previous examination materials for preparation.",
                                },
                                {
                                    title: "PPTs & Videos",
                                    text: "Digital presentations and lecture videos supporting visual learning.",
                                },
                                {
                                    title: "Lab Manuals",
                                    text: "Structured practical resources for laboratory-based learning.",
                                },
                                {
                                    title: "Previous Questions",
                                    text: "Previous year question papers for examination preparation.",
                                },
                                {
                                    title: "Digital Platforms",
                                    text: "Google Classroom, Icampuz and websites provide easy access to materials.",
                                },
                            ].map((resource) => (
                                <div
                                    key={resource.title}
                                    className="bg-white p-7 sm:p-8"
                                >
                                    <BookOpen className="h-5 w-5 text-[#8F7746]" />

                                    <h3 className="mt-5 font-serif text-2xl text-[#20235A]">
                                        {resource.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-[#1E1917]/60">
                                        {resource.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    FINAL CTA
                ====================================================== */}
                <section className="bg-[#20235A]">
                    <div className="mx-auto max-w-[1400px] px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16">
                        <div className="max-w-5xl">
                            <div className="flex items-center gap-4">
                                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                                    Mechatronics Engineering
                                </span>

                                <span className="h-px w-10 bg-[#D2B87C]" />
                            </div>

                            <h2 className="mt-6 font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-white sm:text-5xl lg:text-6xl">
                                Building engineers through
                                <span className="text-[#D2B87C]">
                                    {" "}knowledge, practice & innovation.
                                </span>
                            </h2>

                            <p className="mt-7 max-w-2xl text-base leading-8 text-white/60">
                                The teaching and learning process at the
                                Department of Mechatronics connects academic
                                knowledge with technology, practical
                                implementation, industry exposure and
                                continuous learning.
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            <FooterSection />
        </>
    );
};

export default page;