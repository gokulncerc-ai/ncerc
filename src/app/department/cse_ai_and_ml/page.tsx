"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
    ArrowDown,
    ArrowRight,
    ArrowUpRight,
    BrainCircuit,
    Check,
    ChevronRight,
    Cpu,
    GraduationCap,
    Lightbulb,
    Network,
    Quote,
    Target,
    Users,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import DepartmentNav from "./DepartmentNav/DepartmentNavigation";


const missions = [
    {
        number: "01",
        title: "Quality Education",
        description:
            "To impart Quality Education by creative Teaching Learning Process.",
    },
    {
        number: "02",
        title: "Research & Development",
        description:
            "To promote cutting-edge Research and Development Process to solve real world problems with emerging technologies.",
    },
    {
        number: "03",
        title: "Entrepreneurship",
        description: "To inculcate Entrepreneurship Skills among Students.",
    },
    {
        number: "04",
        title: "Ethical Values",
        description:
            "To cultivate Moral and Ethical Values in their Profession.",
    },
];

const peos = [
    {
        number: "PEO 01",
        description:
            "Graduates will be able to Work and Contribute in the domains of Computer Science and Engineering (AIML) through lifelong learning.",
    },
    {
        number: "PEO 02",
        description:
            "Graduates will be able to Analyze, design and development of novel Software Packages, Web Services, System Tools and Components as per needs and specifications.",
    },
    {
        number: "PEO 03",
        description:
            "Graduates will be able to demonstrate their ability to adapt to a rapidly changing environment by learning and applying new technologies.",
    },
    {
        number: "PEO 04",
        description:
            "Graduates will be able to adopt ethical attitudes, exhibit effective communication skills, Team work and leadership qualities.",
    },
];

const pos = [
    {
        number: "PO 01",
        title: "Engineering Knowledge",
        description:
            "Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.",
    },
    {
        number: "PO 02",
        title: "Problem Analysis",
        description:
            "Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.",
    },
    {
        number: "PO 03",
        title: "Design and Development of Solutions",
        description:
            "Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.",
    },
    {
        number: "PO 04",
        title: "Conduct Investigations of Complex Problems",
        description:
            "Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.",
    },
    {
        number: "PO 05",
        title: "Modern Tool Usage",
        description:
            "Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.",
    },
    {
        number: "PO 06",
        title: "The Engineer and Society",
        description:
            "Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.",
    },
    {
        number: "PO 07",
        title: "Environment and Sustainability",
        description:
            "Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.",
    },
    {
        number: "PO 08",
        title: "Ethics",
        description:
            "Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.",
    },
    {
        number: "PO 09",
        title: "Individual and Team Work",
        description:
            "Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.",
    },
    {
        number: "PO 10",
        title: "Communication",
        description:
            "Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.",
    },
    {
        number: "PO 11",
        title: "Project Management and Finance",
        description:
            "Demonstrate knowledge and understanding of the engineering and management principles and apply these to one&apos;s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.",
    },
    {
        number: "PO 12",
        title: "Life-long Learning",
        description:
            "Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.",
    },
];

const psos = [
    {
        number: "PSO 01",
        description:
            "Ability to Formulate and Simulate Innovative Ideas to provide software solutions for Real-time Problems and to investigate for its future scope.",
    },
    {
        number: "PSO 02",
        description:
            "Ability to learn and apply various methodologies for facilitating development of high quality System Software Tools and Efficient Web Design Models with a focus on performance optimization.",
    },
    {
        number: "PSO 03",
        description:
            "Ability to inculcate the Knowledge for developing Codes and integrating hardware/software products in the domains of Big Data Analytics, Web Applications and Mobile Apps to create innovative career path and for the socially relevant issues.",
    },
];

const page = () => {
    return (
        <>
            <SiteHeader />

            <main className="overflow-hidden bg-[#faf7f2] text-[#1e1917]">

                {/* =========================================================
                    PREMIUM HERO
                ========================================================= */}
                <section className="relative overflow-hidden bg-[#20235A] px-5 pb-14 pt-10 sm:px-8 sm:pb-16 sm:pt-14 lg:px-14 lg:pb-20 lg:pt-16">

                    {/* Subtle background detail */}
                    <div className="pointer-events-none absolute right-[-180px] top-[-180px] h-[500px] w-[500px] rounded-full border border-[#D2B87C]/10" />
                    <div className="pointer-events-none absolute bottom-[-250px] left-[-180px] h-[500px] w-[500px] rounded-full border border-white/[0.04]" />

                    <div className="relative z-10 mx-auto max-w-[1440px]">

                        {/* Breadcrumb */}
                        <div className="mb-12 flex flex-wrap items-center gap-2 font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-white/50 sm:mb-14">
                            <Link
                                href="/"
                                className="transition-colors hover:text-[#D2B87C]"
                            >
                                Home
                            </Link>

                            <ChevronRight size={12} />

                            <span>Academics</span>

                            <ChevronRight size={12} />

                            <span className="text-[#D2B87C]">
                                Departments
                            </span>
                        </div>

                        {/* Main Hero Layout */}
                        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 xl:grid-cols-[0.9fr_1.1fr] xl:gap-20">

                            {/* LEFT CONTENT */}
                            <div className="relative z-20 max-w-[760px]">

                                <div className="mb-6 flex items-center gap-3">
                                    <span className="h-px w-12 bg-[#D2B87C]" />

                                    <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                        Department of Engineering
                                    </span>
                                </div>

                                <h1 className="font-serif text-[43px] font-normal leading-[1.06] tracking-[-0.035em] text-white sm:text-[58px] lg:text-[64px] xl:text-[74px]">
                                    Computer Science
                                    <span className="mt-1 block text-[#D2B87C]">
                                        & Engineering
                                    </span>

                                    <span className="mt-4 block max-w-[620px] font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-white/65 sm:text-[13px] sm:tracking-[0.23em] lg:text-[14px]">
                                        Artificial Intelligence & Machine Learning
                                    </span>
                                </h1>

                                <p className="mt-7 max-w-[620px] font-sans text-[14px] leading-[1.9] text-white/65 sm:text-[15px] lg:text-[16px]">
                                    Explore the world of intelligent computing, machine
                                    learning, research and emerging technologies through the
                                    Computer Science and Engineering (AI & ML) department at
                                    NCERC.
                                </p>

                                {/* Hero mini information */}
                                <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-white/10 pt-6">

                                    <div className="flex items-center gap-3">
                                        <BrainCircuit
                                            size={21}
                                            strokeWidth={1.2}
                                            className="text-[#D2B87C]"
                                        />

                                        <span className="font-sans text-[9px] font-medium uppercase tracking-[0.16em] text-white/55">
                                            Artificial Intelligence
                                        </span>
                                    </div>

                                    <span className="hidden h-4 w-px bg-white/15 sm:block" />

                                    <span className="font-sans text-[9px] font-medium uppercase tracking-[0.16em] text-white/55">
                                        Machine Learning
                                    </span>

                                    <span className="hidden h-4 w-px bg-white/15 sm:block" />

                                    <span className="font-sans text-[9px] font-medium uppercase tracking-[0.16em] text-white/55">
                                        Innovation
                                    </span>
                                </div>
                            </div>

                            {/* RIGHT IMAGE */}
                            <div className="relative lg:translate-y-1">

                                {/* Decorative frame */}
                                <div className="absolute -right-3 -top-3 hidden h-full w-full border border-[#D2B87C]/20 lg:block" />

                                <div className="relative h-[360px] overflow-hidden border border-white/10 sm:h-[450px] lg:h-[500px] xl:h-[540px]">

                                    <Image
                                        src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=2200&q=85"
                                        alt="Artificial intelligence and machine learning technology"
                                        fill
                                        sizes="(min-width: 768px) 40vw, 100vw"
                                        className="absolute inset-0 h-full w-full object-cover object-center"
                                    />

                                    {/* Image overlays */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#11152e]/75 via-[#11152e]/20 to-transparent" />

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#11152e]/70 via-transparent to-transparent" />

                                    {/* Top image label */}
                                    <div className="absolute left-6 top-6 flex items-center gap-3 sm:left-8 sm:top-8 lg:left-10 lg:top-10">
                                        <span className="h-px w-7 bg-[#D2B87C]" />

                                        <span className="font-sans text-[9px] font-semibold uppercase tracking-[0.22em] text-white/80">
                                            Computing the Future
                                        </span>
                                    </div>

                                    {/* Image content */}
                                    <div className="absolute bottom-7 left-6 right-6 sm:bottom-9 sm:left-8 sm:right-8 lg:bottom-10 lg:left-10 lg:right-10">

                                        <p className="mb-3 font-sans text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                            Computer Science & Engineering
                                        </p>

                                        <h2 className="max-w-[620px] font-serif text-[31px] font-normal leading-[1.1] text-white sm:text-[40px] lg:text-[48px]">
                                            Intelligence that
                                            <span className="block">
                                                shapes tomorrow.
                                            </span>
                                        </h2>

                                        <a
                                            href="#department-about"
                                            className="mt-6 inline-flex items-center gap-3 font-sans text-[10px] font-semibold uppercase tracking-[0.15em] text-white no-underline transition-colors hover:text-[#D2B87C]"
                                        >
                                            Discover the department
                                            <ArrowDown size={15} />
                                        </a>
                                    </div>

                                    {/* Floating AI badge */}
                                    <div className="absolute bottom-7 right-7 hidden items-center gap-3 border border-white/20 bg-[#20235A]/60 px-4 py-3 backdrop-blur-md md:flex">

                                        <BrainCircuit
                                            size={21}
                                            strokeWidth={1.3}
                                            className="text-[#D2B87C]"
                                        />

                                        <span className="font-sans text-[9px] font-medium uppercase tracking-[0.15em] text-white/80">
                                            Artificial Intelligence & ML
                                        </span>
                                    </div>

                                </div>

                                {/* Small image index */}
                                <div className="absolute -bottom-7 -left-4 hidden lg:block">
                                    <span className="font-serif text-[58px] leading-none text-[#D2B87C]/20">
                                        01
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Hero bottom line */}
                        <div className="mt-14 flex items-center justify-between border-t border-white/10 pt-5 lg:mt-16">

                            <span className="font-sans text-[9px] font-medium uppercase tracking-[0.18em] text-white/35">
                                NCERC · Department of Engineering
                            </span>

                            <span className="hidden font-sans text-[9px] font-medium uppercase tracking-[0.18em] text-white/35 sm:block">
                                AI · ML · Computing · Research
                            </span>
                        </div>
                    </div>
                </section>

                {/* =========================================================
                    DEPARTMENT NAVIGATION
                ========================================================= */}
                <section className="sticky top-0 z-40 border-b border-[#e5e0d6] bg-white/95 backdrop-blur-md">
                    <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
                        <nav
                            aria-label="Department navigation"
                            className="flex gap-7 overflow-x-auto sm:gap-10"
                        >
                            <DepartmentNav activeTab="About" />
                        </nav>
                    </div>
                </section>

                {/* =========================================================
                    ABOUT THE DEPARTMENT
                ========================================================= */}
                <section
                    id="department-about"
                    className="scroll-mt-20 bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-14 lg:py-32"
                >
                    <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-24">
                        <div>
                            <div className="flex items-center gap-3">
                                <span className="h-px w-10 bg-[#8f7746]" />
                                <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8f7746]">
                                    About the Department
                                </span>
                            </div>

                            <h2 className="mt-6 max-w-[460px] font-serif text-[39px] font-normal leading-[1.12] tracking-[-0.025em] text-[#20235A] sm:text-[49px]">
                                Building the
                                <span className="block text-[#8f7746]">
                                    intelligence
                                </span>
                                of tomorrow.
                            </h2>

                            <div className="mt-9 flex items-center gap-4 border-t border-[#e7e2d8] pt-6">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                                    <Cpu size={22} strokeWidth={1.4} />
                                </div>

                                <div>
                                    <p className="m-0 font-serif text-[17px] text-[#20235A]">
                                        Computer Science & Engineering
                                    </p>

                                    <p className="m-0 mt-1 font-sans text-[10px] uppercase tracking-[0.12em] text-[#918b7f]">
                                        Artificial Intelligence & Machine Learning
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6 font-sans text-[14px] leading-[2] text-[#696761] sm:text-[15px]">
                            <p>
                                Artificial intelligence (AI) is a technology that allows
                                machines to simulate human behavior and Machine learning (ML)
                                is a subdomain of AI that allows machines to automatically
                                learn from past data without explicit programming, meaning
                                the machine would automatically learn from the past
                                activities. Together, AI and ML create human-like intelligent
                                computer systems to solve complex problems.
                            </p>

                            <p>
                                The field of artificial intelligence and machine learning
                                harbors a wide range of opportunities all around the world.
                                Numerous advancements are shaping the world and there are
                                still many innovations that are yet to come forth in this
                                particular field. As Artificial Intelligence is taking over
                                manual work all around the world the career scope in this
                                sector is expanding day by day.
                            </p>

                            <p>
                                This trend has encouraged a lot of students to join the B.Tech
                                Artificial Intelligence & Machine Learning colleges in India.
                                B.Tech Artificial Intelligence & Machine Learning (AI & ML)
                                has become one of the most sought-after programs in the modern
                                world owing to its promising and remunerative scope. Since
                                this degree has applications across fields and industries,
                                the opportunities expand manifold.
                            </p>

                            <p>
                                With this B.Tech Artificial Intelligence and Machine Learning
                                degree, the students can gain theoretical and practical
                                knowledge and can utilize this knowledge to shape various
                                career opportunities.
                            </p>

                            {/* <Link
                                href="/cse-aiml/career-scope"
                                className="group mt-3 inline-flex items-center gap-3 border-b border-[#D2B87C] pb-2 font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-[#20235A] no-underline transition-colors hover:text-[#8f7746]"
                            >
                                Explore career opportunities

                                <ArrowRight
                                    size={15}
                                    className="transition-transform group-hover:translate-x-1"
                                />
                            </Link> */}
                        </div>
                    </div>
                </section>

                {/* =========================================================
                    HOD MESSAGE
                ========================================================= */}
                <section className="bg-[#f2efe8] px-5 py-20 sm:px-8 sm:py-24 lg:px-14 lg:py-28">
                    <div className="mx-auto max-w-[1440px]">
                        <div className="mb-12 flex items-center gap-3">
                            <span className="h-px w-10 bg-[#8f7746]" />
                            <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8f7746]">
                                From the Head of Department
                            </span>
                        </div>

                        <div className="grid overflow-hidden bg-white shadow-[0_20px_70px_rgba(32,35,90,0.06)] lg:grid-cols-[0.72fr_1.28fr]">
                            <div className="relative min-h-[380px] overflow-hidden bg-[#20235A] sm:min-h-[480px]">
                                <Image
                                    src="/images/principal/ncercprinci.webp"
                                    alt="Dr. Anoop B K, Professor and Head of Department"
                                    fill
                                    sizes="(min-width: 768px) 40vw, 100vw"
                                    className="absolute inset-0 h-full w-full object-cover object-top"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#11152e]/90 via-transparent to-transparent" />

                                <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
                                    <span className="mb-3 block font-sans text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                        Professor & HoD
                                    </span>

                                    <h3 className="font-serif text-[30px] font-normal leading-tight text-white sm:text-[36px]">
                                        Dr. Anoop B K
                                    </h3>

                                    <p className="mt-2 font-sans text-[11px] text-white/65">
                                        Computer Science & Engineering (AI & ML)
                                    </p>
                                </div>
                            </div>

                            <div className="relative px-6 py-9 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
                                <Quote
                                    size={38}
                                    strokeWidth={1}
                                    className="mb-6 text-[#D2B87C]"
                                />

                                <h2 className="mb-7 font-serif text-[31px] font-normal leading-tight text-[#20235A] sm:text-[38px]">
                                    A message to our
                                    <span className="block text-[#8f7746]">
                                        future innovators.
                                    </span>
                                </h2>

                                <div className="space-y-5 font-sans text-[13px] leading-[1.95] text-[#696761] sm:text-[14px]">
                                    <p>
                                        I welcome you to NCERC, dedicated to ensuring great
                                        careers for our students. We are forging deeper industry
                                        linkages, creating an academic and research culture from
                                        starting day and assuring seamless education using the
                                        state-of-the-art technology available.
                                    </p>

                                    <p>
                                        We have invested a great deal of time and energy in
                                        creating strong foundations for our department and will
                                        continue to do all that it takes to ensure bright career
                                        opportunities through placement-focused studies for our
                                        students.
                                    </p>

                                    <p>
                                        The excellent infrastructure, well-experienced teaching
                                        faculty of the best kind of the department ensure quality
                                        education through interaction among students, parents and
                                        staff, along with a Training and Placement Cell that
                                        supports students futures.
                                    </p>

                                    <p>
                                        I wish to appreciate the team of faculty members and the
                                        students for their brilliant and tireless efforts.
                                        Depending upon the interest of the student, he/she may
                                        choose to go for higher studies or employment and can
                                        choose to do research and development, design, production,
                                        application, testing, or management in the Information
                                        Technology industry.
                                    </p>

                                    <p>
                                        We strongly encourage innovation in research, in teaching
                                        and in service to the profession, the local community and
                                        industry. I wish all the students and faculty a good
                                        academic career.
                                    </p>
                                </div>

                                <div className="mt-8 border-t border-[#e7e2d8] pt-6">
                                    <p className="font-serif text-[19px] text-[#20235A]">
                                        Sincerely, and with best wishes,
                                    </p>

                                    <p className="mt-2 font-sans text-[10px] font-semibold uppercase tracking-[0.13em] text-[#8f7746]">
                                        Dr. Anoop B K · Professor & HoD
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================
                    VISION
                ========================================================= */}
                <section className="bg-[#20235A] px-5 py-20 sm:px-8 sm:py-24 lg:px-14 lg:py-28">
                    <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
                        <div>
                            <div className="flex items-center gap-3">
                                <span className="h-px w-10 bg-[#D2B87C]" />
                                <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                    Our Vision
                                </span>
                            </div>

                            <div className="mt-7 flex h-14 w-14 items-center justify-center border border-[#D2B87C]/40 text-[#D2B87C]">
                                <Lightbulb size={27} strokeWidth={1.2} />
                            </div>
                        </div>

                        <div>
                            <h2 className="font-serif text-[33px] font-normal leading-[1.25] text-white sm:text-[43px] lg:text-[52px]">
                                Producing highly competent, innovative and ethical Computer
                                Science and Engineering (AIML) professionals to facilitate
                                continuous technological advancement.
                            </h2>

                            <div className="mt-9 h-px w-24 bg-[#D2B87C]" />

                            <p className="mt-5 font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45">
                                The vision that guides our department
                            </p>
                        </div>
                    </div>
                </section>

                {/* =========================================================
                    MISSION
                ========================================================= */}
                <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-14 lg:py-28">
                    <div className="mx-auto max-w-[1440px]">
                        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
                            <div>
                                <div className="flex items-center gap-3">
                                    <span className="h-px w-10 bg-[#8f7746]" />
                                    <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8f7746]">
                                        Our Mission
                                    </span>
                                </div>

                                <h2 className="mt-6 font-serif text-[39px] font-normal leading-tight text-[#20235A] sm:text-[48px]">
                                    Purpose in
                                    <span className="block text-[#8f7746]">
                                        every step.
                                    </span>
                                </h2>

                                <p className="mt-5 max-w-[360px] font-sans text-[13px] leading-[1.9] text-[#77736b]">
                                    Our mission is shaped by education, research, innovation
                                    and professional responsibility.
                                </p>
                            </div>

                            <div className="grid gap-px border border-[#e7e2d8] bg-[#e7e2d8] sm:grid-cols-2">
                                {missions.map((mission) => (
                                    <article
                                        key={mission.number}
                                        className="group bg-[#faf7f2] p-6 transition-colors duration-300 hover:bg-[#20235A] sm:p-8 lg:p-9"
                                    >
                                        <div className="mb-7 flex items-center justify-between">
                                            <span className="font-serif text-[14px] text-[#8f7746] transition-colors group-hover:text-[#D2B87C]">
                                                {mission.number}
                                            </span>

                                            <ArrowUpRight
                                                size={18}
                                                className="text-[#aaa396] transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#D2B87C]"
                                            />
                                        </div>

                                        <h3 className="font-serif text-[24px] font-normal text-[#20235A] transition-colors group-hover:text-white">
                                            {mission.title}
                                        </h3>

                                        <p className="mt-4 font-sans text-[12px] leading-[1.9] text-[#77736b] transition-colors group-hover:text-white/65 sm:text-[13px]">
                                            {mission.description}
                                        </p>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================
                    PROGRAM EDUCATIONAL OBJECTIVES
                ========================================================= */}
                <section className="bg-[#f2efe8] px-5 py-20 sm:px-8 sm:py-24 lg:px-14 lg:py-28">
                    <div className="mx-auto max-w-[1440px]">
                        <div className="mb-12 grid gap-6 lg:grid-cols-[1fr_0.65fr] lg:items-end">
                            <div>
                                <div className="flex items-center gap-3">
                                    <span className="h-px w-10 bg-[#8f7746]" />
                                    <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8f7746]">
                                        Academic Framework
                                    </span>
                                </div>

                                <h2 className="mt-5 font-serif text-[36px] font-normal leading-tight text-[#20235A] sm:text-[48px]">
                                    Program Educational
                                    <span className="block text-[#8f7746]">
                                        Objectives
                                    </span>
                                </h2>
                            </div>

                            <p className="max-w-[450px] font-sans text-[13px] leading-[1.9] text-[#77736b]">
                                The Program Educational Objectives (PEOs) outline the
                                capabilities and professional qualities expected of our
                                graduates.
                            </p>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            {peos.map((peo) => (
                                <article
                                    key={peo.number}
                                    className="flex min-h-[260px] flex-col border border-[#dfd9cd] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D2B87C] hover:shadow-[0_18px_45px_rgba(32,35,90,0.07)] sm:p-7"
                                >
                                    <span className="flex h-10 w-10 items-center justify-center bg-[#20235A] font-sans text-[10px] font-semibold text-[#D2B87C]">
                                        {peo.number.replace("PEO ", "")}
                                    </span>

                                    <h3 className="mt-6 font-serif text-[22px] font-normal text-[#20235A]">
                                        {peo.number}
                                    </h3>

                                    <p className="mt-4 font-sans text-[12px] leading-[1.9] text-[#77736b]">
                                        {peo.description}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* =========================================================
                    PROGRAM OUTCOMES
                ========================================================= */}
                <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-14 lg:py-28">
                    <div className="mx-auto max-w-[1440px]">
                        <div className="mb-12 grid gap-6 lg:grid-cols-[1fr_0.65fr] lg:items-end">
                            <div>
                                <div className="flex items-center gap-3">
                                    <span className="h-px w-10 bg-[#8f7746]" />
                                    <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8f7746]">
                                        Graduate Attributes
                                    </span>
                                </div>

                                <h2 className="mt-5 font-serif text-[38px] font-normal leading-tight text-[#20235A] sm:text-[49px]">
                                    Program Outcomes
                                </h2>
                            </div>

                            <p className="max-w-[460px] font-sans text-[13px] leading-[1.9] text-[#77736b]">
                                Engineering graduates will be able to demonstrate the
                                following knowledge, professional skills and competencies.
                            </p>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {pos.map((po) => (
                                <article
                                    key={po.number}
                                    className="group border border-[#e5e0d6] p-6 transition-all duration-300 hover:border-[#20235A] hover:bg-[#faf7f2] sm:p-7"
                                >
                                    <div className="mb-6 flex items-center justify-between">
                                        <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.15em] text-[#8f7746]">
                                            {po.number}
                                        </span>

                                        <span className="flex h-8 w-8 items-center justify-center border border-[#e5e0d6] text-[#20235A] transition-colors group-hover:border-[#20235A] group-hover:bg-[#20235A] group-hover:text-[#D2B87C]">
                                            <Check size={15} />
                                        </span>
                                    </div>

                                    <h3 className="font-serif text-[23px] font-normal leading-tight text-[#20235A]">
                                        {po.title}
                                    </h3>

                                    <p className="mt-4 font-sans text-[12px] leading-[1.9] text-[#77736b] sm:text-[13px]">
                                        {po.description}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* =========================================================
                    PROGRAM SPECIFIC OUTCOMES
                ========================================================= */}
                <section className="bg-[#faf7f2] px-5 py-20 sm:px-8 sm:py-24 lg:px-14 lg:py-28">
                    <div className="mx-auto max-w-[1440px]">
                        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
                            <div>
                                <div className="flex items-center gap-3">
                                    <span className="h-px w-10 bg-[#8f7746]" />
                                    <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8f7746]">
                                        Specialized Competencies
                                    </span>
                                </div>

                                <h2 className="mt-6 font-serif text-[38px] font-normal leading-[1.15] text-[#20235A] sm:text-[48px]">
                                    Program Specific
                                    <span className="block text-[#8f7746]">
                                        Outcomes
                                    </span>
                                </h2>

                                <p className="mt-5 max-w-[390px] font-sans text-[13px] leading-[1.9] text-[#77736b]">
                                    The program-specific outcomes focus on practical software
                                    development, emerging technologies and the application of
                                    computing to real-world challenges.
                                </p>
                            </div>

                            <div className="space-y-4">
                                {psos.map((pso) => (
                                    <article
                                        key={pso.number}
                                        className="grid gap-5 border border-[#e2ddd3] bg-white p-6 transition-all duration-300 hover:border-[#D2B87C] sm:grid-cols-[80px_1fr] sm:gap-7 sm:p-8"
                                    >
                                        <div className="flex h-12 w-12 items-center justify-center bg-[#20235A] font-sans text-[10px] font-semibold text-[#D2B87C]">
                                            {pso.number.replace("PSO ", "")}
                                        </div>

                                        <div>
                                            <h3 className="font-serif text-[22px] font-normal text-[#20235A]">
                                                {pso.number}
                                            </h3>

                                            <p className="mt-3 font-sans text-[12px] leading-[1.9] text-[#77736b] sm:text-[13px]">
                                                {pso.description}
                                            </p>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================
                    DEPARTMENT QUICK LINKS
                ========================================================= */}
                <section className="bg-[#20235A] px-5 py-20 sm:px-8 sm:py-24 lg:px-14 lg:py-28">
                    <div className="mx-auto max-w-[1440px]">

                        <div className="mb-12 max-w-[720px]">
                            <div className="flex items-center gap-3">
                                <span className="h-px w-10 bg-[#D2B87C]" />

                                <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                    Explore More
                                </span>
                            </div>

                            <h2 className="mt-6 font-serif text-[38px] font-normal leading-tight text-white sm:text-[49px]">
                                Continue exploring
                                <span className="block text-[#D2B87C]">
                                    our department.
                                </span>
                            </h2>

                            <p className="mt-5 font-sans text-[13px] leading-[1.9] text-white/60">
                                Discover department facilities, faculty profiles and career
                                opportunities associated with Computer Science and
                                Engineering (AI & ML).
                            </p>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

                            <Link
                                href="/cse-aiml/career-scope"
                                className="group flex min-h-[180px] flex-col justify-between border border-white/15 p-6 no-underline transition-all duration-300 hover:border-[#D2B87C] hover:bg-white/[0.04] sm:p-8"
                            >
                                <GraduationCap
                                    size={27}
                                    strokeWidth={1.3}
                                    className="text-[#D2B87C]"
                                />

                                <div className="flex items-end justify-between gap-4">
                                    <div>
                                        <h3 className="font-serif text-[25px] font-normal text-white">
                                            Career Scope
                                        </h3>

                                        <p className="mt-2 font-sans text-[11px] text-white/50">
                                            Explore professional pathways
                                        </p>
                                    </div>

                                    <ArrowUpRight
                                        size={20}
                                        className="shrink-0 text-[#D2B87C] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                                    />
                                </div>
                            </Link>

                            <Link
                                href="/cse-aiml/facilities"
                                className="group flex min-h-[180px] flex-col justify-between border border-white/15 p-6 no-underline transition-all duration-300 hover:border-[#D2B87C] hover:bg-white/[0.04] sm:p-8"
                            >
                                <Network
                                    size={27}
                                    strokeWidth={1.3}
                                    className="text-[#D2B87C]"
                                />

                                <div className="flex items-end justify-between gap-4">
                                    <div>
                                        <h3 className="font-serif text-[25px] font-normal text-white">
                                            Facilities
                                        </h3>

                                        <p className="mt-2 font-sans text-[11px] text-white/50">
                                            Discover learning resources
                                        </p>
                                    </div>

                                    <ArrowUpRight
                                        size={20}
                                        className="shrink-0 text-[#D2B87C] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                                    />
                                </div>
                            </Link>

                            <Link
                                href="/cse-aiml/faculty-details"
                                className="group flex min-h-[180px] flex-col justify-between border border-white/15 p-6 no-underline transition-all duration-300 hover:border-[#D2B87C] hover:bg-white/[0.04] sm:p-8"
                            >
                                <Users
                                    size={27}
                                    strokeWidth={1.3}
                                    className="text-[#D2B87C]"
                                />

                                <div className="flex items-end justify-between gap-4">
                                    <div>
                                        <h3 className="font-serif text-[25px] font-normal text-white">
                                            Faculty Profile
                                        </h3>

                                        <p className="mt-2 font-sans text-[11px] text-white/50">
                                            Meet our academic team
                                        </p>
                                    </div>

                                    <ArrowUpRight
                                        size={20}
                                        className="shrink-0 text-[#D2B87C] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                                    />
                                </div>
                            </Link>
                        </div>

                        <div className="mt-12 flex flex-col gap-4 border-t border-white/15 pt-7 sm:flex-row sm:items-center sm:justify-between">

                            <div className="flex items-center gap-3">
                                <Target
                                    size={19}
                                    strokeWidth={1.4}
                                    className="text-[#D2B87C]"
                                />

                                <p className="m-0 font-sans text-[11px] leading-[1.8] text-white/55">
                                    Computer Science & Engineering — Artificial Intelligence
                                    & Machine Learning
                                </p>
                            </div>

                            <Link
                                href="/"
                                className="inline-flex items-center gap-3 font-sans text-[10px] font-semibold uppercase tracking-[0.15em] text-[#D2B87C] no-underline transition-colors hover:text-white"
                            >
                                NCERC Home
                                <ArrowRight size={15} />
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <FooterSection />
        </>
    );
};

export default page;
