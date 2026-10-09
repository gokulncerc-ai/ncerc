"use client";

import React from "react";
import Link from "next/link";
import {
    ArrowRight,
    ArrowUpRight,
    BrainCircuit,
    ChevronRight,
    Database,
    ShieldCheck,
    Sparkles,
    Target,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import DepartmentNav from "../DepartmentNav/page";

const careerOptions = [
    {
        number: "01",
        title: "Software Developer",
        description:
            "Design, develop and maintain software applications and systems for real-world requirements.",
    },
    {
        number: "02",
        title: "Database Administrator",
        description:
            "Manage, secure and optimize databases while ensuring reliable access to critical information.",
    },
    {
        number: "03",
        title: "Data Scientist",
        description:
            "Transform complex datasets into meaningful insights using statistics, analytics and computational techniques.",
    },
    {
        number: "04",
        title: "AI Developer",
        description:
            "Build intelligent applications and systems using artificial intelligence and machine learning technologies.",
    },
    {
        number: "05",
        title: "Computer Hardware Engineer",
        description:
            "Design, develop and test computer hardware components and integrated systems.",
    },
    {
        number: "06",
        title: "Computer Network Architect",
        description:
            "Plan and develop communication networks that support secure and reliable digital infrastructure.",
    },
    {
        number: "07",
        title: "IT Consultant",
        description:
            "Help organizations use information technology effectively to solve business and operational challenges.",
    },
    {
        number: "08",
        title: "Cyber-security Consultant",
        description:
            "Assist organizations in protecting their digital systems, applications and infrastructure from security threats.",
    },
    {
        number: "09",
        title: "Information Security Analyst",
        description:
            "Monitor and protect information systems while identifying vulnerabilities and responding to security risks.",
    },
    {
        number: "10",
        title: "Multimedia Programmer",
        description:
            "Develop interactive digital experiences by combining programming, media and creative technologies.",
    },
    {
        number: "11",
        title: "Web Developer",
        description:
            "Create modern websites and web applications that deliver engaging and functional digital experiences.",
    },
    {
        number: "12",
        title: "Computer & Information Research Scientist",
        description:
            "Explore advanced computing concepts and develop innovative solutions through research and experimentation.",
    },
    {
        number: "13",
        title: "Computer Systems Analyst",
        description:
            "Analyze organizational systems and recommend technology solutions that improve efficiency and performance.",
    },
    {
        number: "14",
        title: "Computer & Information Systems Manager",
        description:
            "Lead technology teams and oversee information systems, digital infrastructure and IT operations.",
    },
    {
        number: "15",
        title: "Games / App Developer",
        description:
            "Develop interactive games and applications for mobile, desktop and other digital platforms.",
    },
    {
        number: "16",
        title: "IT Project Manager",
        description:
            "Plan, coordinate and manage technology projects while balancing scope, resources, schedules and outcomes.",
    },
    {
        number: "17",
        title: "Technical Writer",
        description:
            "Translate complex technical concepts into clear documentation, guides and instructional content.",
    },
];

const page = () => {
    return (
        <>
            <SiteHeader />

            <main className="overflow-hidden bg-[#faf7f2] text-[#1e1917]">

                {/* =========================================================
                    HERO
                ========================================================= */}
                <section className="relative overflow-hidden bg-[#20235A] px-5 pb-16 pt-10 sm:px-8 sm:pb-20 sm:pt-14 lg:px-14 lg:pb-24 lg:pt-16">

                    {/* Decorative background elements */}
                    <div className="pointer-events-none absolute right-[-180px] top-[-180px] h-[500px] w-[500px] rounded-full border border-[#D2B87C]/10" />

                    <div className="pointer-events-none absolute bottom-[-220px] left-[-160px] h-[460px] w-[460px] rounded-full border border-white/[0.04]" />

                    <div className="relative z-10 mx-auto max-w-[1440px]">

                        {/* Breadcrumb */}
                        <div className="mb-14 flex flex-wrap items-center gap-2 font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-white/50">

                            <Link
                                href="/"
                                className="transition-colors hover:text-[#D2B87C]"
                            >
                                Home
                            </Link>

                            <ChevronRight size={12} />

                            <Link
                                href="/cse-aiml"
                                className="transition-colors hover:text-[#D2B87C]"
                            >
                                CSE & AI/ML
                            </Link>

                            <ChevronRight size={12} />

                            <span className="text-[#D2B87C]">
                                Career Scope
                            </span>
                        </div>

                        {/* Hero content */}
                        <div className="grid items-end gap-12 lg:grid-cols-[1fr_0.55fr] lg:gap-20">

                            <div className="max-w-[850px]">

                                <div className="mb-7 flex items-center gap-3">
                                    <span className="h-px w-12 bg-[#D2B87C]" />

                                    <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                        Professional Pathways
                                    </span>
                                </div>

                                <h1 className="font-serif text-[48px] font-normal leading-[1.05] tracking-[-0.035em] text-white sm:text-[62px] lg:text-[78px]">
                                    Career
                                    <span className="block text-[#D2B87C]">
                                        Scope
                                    </span>
                                </h1>

                                <p className="mt-7 max-w-[680px] font-sans text-[14px] leading-[1.9] text-white/65 sm:text-[16px]">
                                    Discover the diverse professional opportunities available
                                    to students of Computer Science and Engineering with
                                    Artificial Intelligence & Machine Learning.
                                </p>
                            </div>

                            {/* Hero side statement */}
                            <div className="hidden border-l border-white/15 pb-2 pl-8 lg:block">

                                <BrainCircuit
                                    size={34}
                                    strokeWidth={1.1}
                                    className="mb-6 text-[#D2B87C]"
                                />

                                <p className="font-serif text-[25px] leading-[1.2] text-white">
                                    Build skills.
                                    <span className="block text-[#D2B87C]">
                                        Shape possibilities.
                                    </span>
                                </p>

                                <p className="mt-4 max-w-[270px] font-sans text-[11px] leading-[1.8] text-white/45">
                                    Software · AI · Data · Security · Networks · Research
                                </p>
                            </div>
                        </div>

                        {/* Hero bottom metadata */}
                        <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/10 pt-6">

                            <div className="flex items-center gap-3">
                                <Sparkles
                                    size={17}
                                    strokeWidth={1.3}
                                    className="text-[#D2B87C]"
                                />

                                <span className="font-sans text-[9px] font-medium uppercase tracking-[0.18em] text-white/45">
                                    Emerging Technologies
                                </span>
                            </div>

                            <span className="hidden h-4 w-px bg-white/15 sm:block" />

                            <span className="font-sans text-[9px] font-medium uppercase tracking-[0.18em] text-white/45">
                                Industry Opportunities
                            </span>

                            <span className="hidden h-4 w-px bg-white/15 sm:block" />

                            <span className="font-sans text-[9px] font-medium uppercase tracking-[0.18em] text-white/45">
                                Lifelong Learning
                            </span>
                        </div>
                    </div>
                </section>
                <DepartmentNav />

                {/* =========================================================
                    INTRODUCTION
                ========================================================= */}
                <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-14 lg:py-32">
                    <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">

                        {/* Left heading */}
                        <div>

                            <div className="flex items-center gap-3">
                                <span className="h-px w-10 bg-[#8f7746]" />

                                <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8f7746]">
                                    Career Scope
                                </span>
                            </div>

                            <h2 className="mt-6 max-w-[460px] font-serif text-[40px] font-normal leading-[1.12] tracking-[-0.025em] text-[#20235A] sm:text-[50px]">
                                A degree with
                                <span className="block text-[#8f7746]">
                                    limitless
                                </span>
                                possibilities.
                            </h2>

                            <div className="mt-9 flex items-center gap-4 border-t border-[#e7e2d8] pt-6">

                                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                                    <Target
                                        size={22}
                                        strokeWidth={1.4}
                                    />
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

                        {/* Content */}
                        <div className="space-y-6 font-sans text-[14px] leading-[2] text-[#696761] sm:text-[15px]">

                            <p>
                                Computer science is inseparable in the day to day life of
                                all people living in this world. The field of computer
                                science is typically associated with the development of
                                computer programs. Computer programs enable companies to
                                conduct their business efficiently and easily. Program
                                improvements can have a very important influence over the
                                ability of businesses to be efficient and successful.
                            </p>

                            <p>
                                However, the field of computer science is not limited to
                                programming. Networks, security protocols, AI, Data Analysis
                                etc., are all created by computer science professionals.
                                Furthermore, individuals with advanced computer science
                                degrees may also go on to instruct the next generation of
                                degree majors. In essence, individuals who earn computer
                                science degrees can develop skills that enable them to
                                develop new products capable of revolutionizing the world.
                            </p>

                            <p>
                                The economic significance of computer science is illustrated
                                by the wide range of career opportunities. B Tech Computer
                                science is a very versatile degree. Individuals with computer
                                science degrees can be found working in both the public and
                                the private sectors. They work in a wide range of industries,
                                such as technology, finance and security.
                            </p>

                            <p>
                                In addition, the government is an important employer of
                                individuals with computer science degrees. DRDO, DST, NIC
                                and other high profile agencies like ISRO also have
                                opportunities for CS and IT professionals.
                            </p>

                        </div>
                    </div>
                </section>

                {/* =========================================================
                    CAREER OPPORTUNITIES INTRO
                ========================================================= */}
                <section className="bg-[#f2efe8] px-5 py-20 sm:px-8 sm:py-24 lg:px-14 lg:py-28">
                    <div className="mx-auto max-w-[1440px]">

                        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end lg:gap-20">

                            <div>

                                <div className="flex items-center gap-3">
                                    <span className="h-px w-10 bg-[#8f7746]" />

                                    <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8f7746]">
                                        Professional Opportunities
                                    </span>
                                </div>

                                <h2 className="mt-6 font-serif text-[39px] font-normal leading-[1.1] text-[#20235A] sm:text-[49px]">
                                    Choose a path
                                    <span className="block text-[#8f7746]">
                                        that inspires you.
                                    </span>
                                </h2>
                            </div>

                            <div className="max-w-[600px]">

                                <p className="font-sans text-[14px] leading-[1.95] text-[#696761] sm:text-[15px]">
                                    Students who are studying Computer Science and
                                    Engineering (AIML) can take a career path according
                                    to their interests. The field opens opportunities
                                    across software development, artificial intelligence,
                                    data, cybersecurity, networking, research, management
                                    and many other areas.
                                </p>

                            </div>
                        </div>

                        {/* Divider */}
                        <div className="mt-12 h-px bg-[#ded8cc]" />
                    </div>
                </section>

                {/* =========================================================
                    CAREER CARDS
                ========================================================= */}
                <section className="bg-[#f2efe8] px-5 pb-20 sm:px-8 sm:pb-24 lg:px-14 lg:pb-32">

                    <div className="mx-auto max-w-[1440px]">

                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

                            {careerOptions.map((career) => (
                                <article
                                    key={career.number}
                                    className="group relative flex min-h-[245px] flex-col justify-between overflow-hidden border border-[#ded8cc] bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#D2B87C] hover:shadow-[0_20px_55px_rgba(32,35,90,0.08)] sm:p-7 lg:p-8"
                                >

                                    {/* Number */}
                                    <div className="flex items-start justify-between">

                                        <span className="font-serif text-[15px] text-[#8f7746] transition-colors group-hover:text-[#20235A]">
                                            {career.number}
                                        </span>

                                        <span className="flex h-9 w-9 items-center justify-center border border-[#e5e0d6] text-[#20235A] transition-all duration-300 group-hover:border-[#20235A] group-hover:bg-[#20235A] group-hover:text-[#D2B87C]">
                                            <ArrowUpRight size={16} />
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <div className="mt-10">

                                        <h3 className="max-w-[330px] font-serif text-[24px] font-normal leading-[1.15] text-[#20235A]">
                                            {career.title}
                                        </h3>

                                        <p className="mt-4 font-sans text-[12px] leading-[1.9] text-[#77736b] sm:text-[13px]">
                                            {career.description}
                                        </p>
                                    </div>

                                    {/* Hover line */}
                                    <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#D2B87C] transition-all duration-500 group-hover:w-full" />

                                </article>
                            ))}

                        </div>
                    </div>
                </section>

                {/* =========================================================
                    CAREER ECOSYSTEM
                ========================================================= */}
                <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-14 lg:py-28">

                    <div className="mx-auto max-w-[1440px]">

                        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">

                            <div>

                                <div className="flex items-center gap-3">
                                    <span className="h-px w-10 bg-[#8f7746]" />

                                    <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8f7746]">
                                        Career Ecosystem
                                    </span>
                                </div>

                                <h2 className="mt-6 font-serif text-[39px] font-normal leading-[1.12] text-[#20235A] sm:text-[48px]">
                                    From learning
                                    <span className="block text-[#8f7746]">
                                        to impact.
                                    </span>
                                </h2>

                            </div>

                            <div className="grid gap-4 sm:grid-cols-3">

                                <article className="border border-[#e5e0d6] p-6 sm:p-7">
                                    <Database
                                        size={26}
                                        strokeWidth={1.3}
                                        className="text-[#8f7746]"
                                    />

                                    <h3 className="mt-7 font-serif text-[22px] font-normal text-[#20235A]">
                                        Technology
                                    </h3>

                                    <p className="mt-3 font-sans text-[12px] leading-[1.9] text-[#77736b]">
                                        Build solutions across software, web, mobile,
                                        cloud and emerging technology platforms.
                                    </p>
                                </article>

                                <article className="border border-[#e5e0d6] p-6 sm:p-7">
                                    <ShieldCheck
                                        size={26}
                                        strokeWidth={1.3}
                                        className="text-[#8f7746]"
                                    />

                                    <h3 className="mt-7 font-serif text-[22px] font-normal text-[#20235A]">
                                        Security
                                    </h3>

                                    <p className="mt-3 font-sans text-[12px] leading-[1.9] text-[#77736b]">
                                        Work with cybersecurity, information security,
                                        networks and digital infrastructure.
                                    </p>
                                </article>

                                <article className="border border-[#e5e0d6] p-6 sm:p-7">
                                    <BrainCircuit
                                        size={26}
                                        strokeWidth={1.3}
                                        className="text-[#8f7746]"
                                    />

                                    <h3 className="mt-7 font-serif text-[22px] font-normal text-[#20235A]">
                                        Intelligence
                                    </h3>

                                    <p className="mt-3 font-sans text-[12px] leading-[1.9] text-[#77736b]">
                                        Explore AI, machine learning, data science,
                                        analytics and intelligent systems.
                                    </p>
                                </article>

                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================
                    CTA
                ========================================================= */}
                <section className="bg-[#20235A] px-5 py-20 sm:px-8 sm:py-24 lg:px-14 lg:py-28">

                    <div className="mx-auto max-w-[1440px]">

                        <div className="grid items-end gap-10 lg:grid-cols-[1fr_0.55fr] lg:gap-20">

                            <div>

                                <div className="flex items-center gap-3">
                                    <span className="h-px w-10 bg-[#D2B87C]" />

                                    <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                        Explore the Department
                                    </span>
                                </div>

                                <h2 className="mt-6 max-w-[760px] font-serif text-[39px] font-normal leading-[1.12] text-white sm:text-[50px]">
                                    Your journey in
                                    <span className="block text-[#D2B87C]">
                                        computing starts here.
                                    </span>
                                </h2>

                                <p className="mt-5 max-w-[650px] font-sans text-[13px] leading-[1.9] text-white/55 sm:text-[14px]">
                                    Discover the facilities, faculty and academic
                                    opportunities available within the Computer Science
                                    and Engineering (AI & ML) department.
                                </p>

                            </div>

                            <div className="lg:justify-self-end">

                                <Link
                                    href="/cse-aiml"
                                    className="group inline-flex items-center gap-4 border border-[#D2B87C]/60 px-6 py-4 font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-[#D2B87C] no-underline transition-all duration-300 hover:bg-[#D2B87C] hover:text-[#20235A] sm:px-8 sm:py-5"
                                >
                                    Back to Department

                                    <ArrowRight
                                        size={16}
                                        className="transition-transform group-hover:translate-x-1"
                                    />
                                </Link>

                            </div>
                        </div>

                        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">

                            <div className="flex items-center gap-3">
                                <Target
                                    size={18}
                                    strokeWidth={1.3}
                                    className="text-[#D2B87C]"
                                />

                                <p className="m-0 font-sans text-[10px] uppercase tracking-[0.15em] text-white/40">
                                    Computer Science & Engineering — AI & ML
                                </p>
                            </div>

                            <span className="font-sans text-[9px] uppercase tracking-[0.16em] text-white/30">
                                NCERC
                            </span>

                        </div>
                    </div>
                </section>

            </main>

            <FooterSection />
        </>
    );
};

export default page;
