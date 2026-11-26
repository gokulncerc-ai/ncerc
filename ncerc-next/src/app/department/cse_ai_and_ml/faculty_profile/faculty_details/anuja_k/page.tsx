
"use client";

import React from "react";
import {
    ArrowDown,
    GraduationCap,
    Microscope,
    UserRound,
    BriefcaseBusiness,
    BookOpen,
    Award,
    Lightbulb,
    Trophy,
    Users,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../../../DepartmentNav/DepartmentNavigation";

const researchInterests = [
    "Natural Language Processing (NLP)",
    "Emotion Detection & Sentiment Analysis",
    "Deep Learning & Transformer Architectures",
    "Low-Resource Language Processing (Malayalam)",
    "Machine Learning",
];

const keywords = [
    "Natural Language Processing",
    "Emotion Detection",
    "Sentiment Analysis",
    "Deep Learning",
    "Transformer Models",
    "Malayalam Language Processing",
    "Machine Learning",
];

const profileSections = [
    { id: "about", label: "About Me" },
    { id: "research", label: "Research & Academics" },
    { id: "experience", label: "Experience" },
    { id: "teaching", label: "Teaching & Outreach" },
    { id: "achievements", label: "Achievements" },
];

function SectionHeading({
    number,
    eyebrow,
    title,
    description,
}: {
    number: string;
    eyebrow: string;
    title: string;
    description?: string;
}) {
    return (
        <div className="mb-8">
            <div className="mb-3 flex items-center gap-3">
                <span className="text-[11px] font-medium tracking-[0.18em] text-[#927B4D]">
                    {number}
                </span>
                <span className="h-px w-8 bg-[#D2B87C]" />
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#927B4D]">
                    {eyebrow}
                </span>
            </div>

            <h2 className="font-serif text-2xl leading-tight text-[#20235A] sm:text-3xl">
                {title}
            </h2>

            {description && (
                <p className="mt-3 max-w-2xl text-sm leading-7 text-[#69666B]">
                    {description}
                </p>
            )}

            <div className="mt-5 h-[2px] w-12 bg-[#D2B87C]" />
        </div>
    );
}

function DetailItem({
    label,
    value,
}: {
    label: string;
    value: string;
}) {
    return (
        <div className="border-b border-[#EAE4D9] py-4 last:border-b-0">
            <p className="text-[9px] font-medium uppercase tracking-[0.16em] text-[#927B4D]">
                {label}
            </p>
            <p className="mt-2 break-words text-sm leading-6 text-[#393947]">
                {value}
            </p>
        </div>
    );
}

export default function AnujaFacultyPage() {
    return (
        <>
            <SiteHeader />

            {/* Profile Hero */}
            <section className="relative isolate overflow-hidden bg-[#20235A]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#20235A] via-[#20235A] to-[#171A43]" />

                <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-[#D2B87C]/15" />
                <div className="pointer-events-none absolute -right-6 -top-6 h-52 w-52 rounded-full border border-[#D2B87C]/15" />
                <div className="pointer-events-none absolute -bottom-40 left-1/3 h-80 w-80 rounded-full border border-white/5" />

                <div className="relative mx-auto max-w-7xl px-5 pb-14 pt-16 sm:px-8 sm:pb-16 sm:pt-20 lg:px-12 lg:pb-20 lg:pt-24">
                    <div className="flex items-center gap-3">
                        <span className="h-px w-10 bg-[#D2B87C]" />
                        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#D2B87C] sm:text-xs">
                            Faculty Profile
                        </p>
                    </div>

                    <div className="mt-7 grid gap-10 lg:grid-cols-[1fr_280px] lg:items-end">
                        <div>
                            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/50">
                                Department of CSE (AI & ML)
                            </p>

                            <h1 className="mt-4 font-serif text-4xl font-normal leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                                Ms. Anuja K
                            </h1>

                            <p className="mt-3 font-serif text-lg italic text-[#D2B87C] sm:text-xl">
                                Head of Department (In-Charge)
                            </p>

                            <div className="mt-7 flex flex-wrap gap-3">
                                <span className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80">
                                    Department of CSE (AI & ML)
                                </span>
                                <span className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80">
                                    Research & Industry Experience
                                </span>
                            </div>

                            <div className="mt-8 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#D2B87C]" />
                                <span className="text-[10px] uppercase tracking-[0.18em] text-white/50">
                                    Academic & Professional Profile
                                </span>
                            </div>
                        </div>

                        <div className="border border-[#D2B87C]/35 bg-white/[0.04] p-6 backdrop-blur-sm">
                            <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#D2B87C]">
                                Academic Profile
                            </p>

                            <div className="mt-5 space-y-5">
                                <div className="flex items-center gap-3">
                                    <GraduationCap
                                        size={19}
                                        className="shrink-0 text-[#D2B87C]"
                                        strokeWidth={1.5}
                                    />
                                    <div>
                                        <p className="text-[9px] uppercase tracking-[0.13em] text-white/45">
                                            Qualification
                                        </p>
                                        <p className="mt-1 text-xs text-white/90">
                                            ME, B.Tech
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Microscope
                                        size={19}
                                        className="shrink-0 text-[#D2B87C]"
                                        strokeWidth={1.5}
                                    />
                                    <div>
                                        <p className="text-[9px] uppercase tracking-[0.13em] text-white/45">
                                            Research Focus
                                        </p>
                                        <p className="mt-1 text-xs text-white/90">
                                            NLP & Emotion Detection
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <BriefcaseBusiness
                                        size={19}
                                        className="shrink-0 text-[#D2B87C]"
                                        strokeWidth={1.5}
                                    />
                                    <div>
                                        <p className="text-[9px] uppercase tracking-[0.13em] text-white/45">
                                            Industry Experience
                                        </p>
                                        <p className="mt-1 text-xs text-white/90">
                                            7+ Years
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <a
                                href="#about"
                                className="mt-7 flex items-center justify-between border-t border-white/15 pt-4 text-[9px] font-medium uppercase tracking-[0.16em] text-[#D2B87C] transition-colors hover:text-white"
                            >
                                Explore Profile
                                <ArrowDown size={15} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 h-[3px] bg-[#D2B87C]" />
            </section>

            <main className="bg-white [&_p]:text-justify">
                <InnerHeader />

                {/* Profile Navigation */}
                <div className="border-b border-[#EAE4D9] bg-white">
                    <div className="mx-auto flex max-w-7xl gap-6 overflow-x-auto px-5 py-4 sm:px-8 lg:px-12">
                        {profileSections.map((section) => (
                            <a
                                key={section.id}
                                href={`#${section.id}`}
                                className="shrink-0 text-[9px] font-medium uppercase tracking-[0.13em] text-[#77747A] transition-colors hover:text-[#927B4D]"
                            >
                                {section.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* About Section */}
                <section
                    id="about"
                    className="scroll-mt-24 bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_310px] lg:gap-16">
                        <div>
                            <SectionHeading
                                number="01"
                                eyebrow="Introduction"
                                title="About Ms. Anuja K"
                                description="Academic journey, professional experience, and leadership in the field of Computer Science and Artificial Intelligence."
                            />

                            <div className="space-y-5 text-sm leading-8 text-[#55535B]">
                                <p>
                                    I am Ms. Anuja K, Head of Department (In-Charge) of the CSE (AI & ML) department at Nehru
                                    College o . Engineering and Research Centre, Thrissur — an NBA & NAAC accredited
                                    autonomous institution affiliated to APJ Abdul Kalam Technological University (KTU) and
                                    approved by AICTE.
                                </p>

                                <p>
                                    My academic and professional journey spans research, teaching, and over
                                    seven years of industry experience, and I am deeply passionate about advancing the field of
                                    Natural Language Processing, particularly for low-resource Indian languages.
                                </p>
                            </div>
                        </div>

                        <aside className="h-fit border border-[#E4DCCE] bg-white p-6">
                            <div className="mb-4 flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center bg-[#F5F0E6] text-[#927B4D]">
                                    <UserRound size={19} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <p className="font-serif text-lg text-[#20235A]">
                                        Professional Details
                                    </p>
                                    <p className="text-[9px] uppercase tracking-[0.13em] text-[#927B4D]">
                                        Faculty Information
                                    </p>
                                </div>
                            </div>

                            <DetailItem
                                label="Designation"
                                value="Head of Department (In-Charge)"
                            />
                            <DetailItem
                                label="Department"
                                value="CSE (AI & ML)"
                            />
                            <DetailItem
                                label="Postgraduate Qualification"
                                value="ME – Computer Science and Engineering"
                            />
                            <DetailItem
                                label="Undergraduate Qualification"
                                value="B.Tech – Information Technology"
                            />
                            {/* <DetailItem
                                label="Industry Experience"
                                value="Over 7 Years"
                            /> */}
                        </aside>
                    </div>
                </section>

                {/* Research & Academic Background */}
                <section
                    id="research"
                    className="scroll-mt-24 bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="02"
                            eyebrow="Academic Exploration"
                            title="Research & Academic Background"
                            description="Academic qualifications and doctoral research focused on Natural Language Processing and low-resource Indian languages."
                        />

                        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                            <div className="space-y-6">
                                <div className="border-l-2 border-[#D2B87C] pl-6">
                                    <div className="flex items-center gap-3">
                                        <GraduationCap
                                            size={19}
                                            className="text-[#927B4D]"
                                            strokeWidth={1.5}
                                        />
                                        <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                            Postgraduate Qualification
                                        </p>
                                    </div>

                                    <h3 className="mt-3 font-serif text-xl text-[#20235A]">
                                        ME – Computer Science and Engineering
                                    </h3>
                                    <p className="mt-2 text-sm leading-7 text-[#55535B]">
                                        Christian College of Engineering,
                                        Oddanchathram, affiliated to Anna
                                        University.
                                    </p>
                                    <p className="mt-2 text-xs text-[#927B4D]">
                                        CGPA: 8.39
                                    </p>
                                </div>

                                <div className="border-l-2 border-[#D2B87C] pl-6">
                                    <div className="flex items-center gap-3">
                                        <GraduationCap
                                            size={19}
                                            className="text-[#927B4D]"
                                            strokeWidth={1.5}
                                        />
                                        <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                            Undergraduate Qualification
                                        </p>
                                    </div>

                                    <h3 className="mt-3 font-serif text-xl text-[#20235A]">
                                        B.Tech – Information Technology
                                    </h3>
                                    <p className="mt-2 text-sm leading-7 text-[#55535B]">
                                        Nehru College of Engineering and
                                        Research Centre, affiliated to
                                        Calicut University.
                                    </p>
                                    <p className="mt-2 text-xs text-[#927B4D]">
                                        Third University Rank
                                    </p>
                                </div>
                            </div>

                            <div className="border border-[#E8E1D5] bg-[#FAF7F2] p-6 sm:p-8">
                                <div className="flex items-center gap-3">
                                    <Microscope
                                        size={20}
                                        className="text-[#927B4D]"
                                        strokeWidth={1.5}
                                    />
                                    <h3 className="font-serif text-xl text-[#20235A]">
                                        Doctoral Research
                                    </h3>
                                </div>

                                <p className="mt-4 text-sm leading-8 text-[#55535B]">
                                    My doctoral research focuses on building an Emotion Detection System for Malayalam Text
                                    using Deep Learning and Transformer models  an area I consider both technically challenging
                                    and socially meaningful, given the need to represent underrepresented languages in AI systems.
                                </p>

                                {/* <p className="mt-4 text-sm leading-8 text-[#55535B]">
                                    an area I consider both technically challenging
                                    and socially meaningful, given the need to represent underrepresented languages in AI systems.
                                </p> */}

                                <div className="mt-6 border-t border-[#E5DED1] pt-5">
                                    <p className="text-[9px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                        Research Domain
                                    </p>
                                    <p className="mt-2 font-serif text-lg text-[#20235A]">
                                        Emotion Detection in Malayalam Text
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Research Interests */}
                        <div className="mt-14">
                            <div className="mb-6 flex items-center gap-3">
                                <Lightbulb
                                    size={19}
                                    className="text-[#927B4D]"
                                    strokeWidth={1.5}
                                />
                                <h3 className="font-serif text-xl text-[#20235A]">
                                    Research Interests
                                </h3>
                            </div>

                            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                                {researchInterests.map((interest, index) => (
                                    <div
                                        key={interest}
                                        className="flex items-start gap-4 border border-[#E8E1D5] bg-[#FAF7F2] p-5 transition-colors hover:border-[#D2B87C]"
                                    >
                                        <span className="font-serif text-lg text-[#B49A66]">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                        <p className="pt-1 text-sm leading-6 text-[#393947]">
                                            {interest}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 border border-[#E8E1D5] bg-[#20235A] p-6 sm:p-8">
                                <div className="flex items-center gap-3">
                                    <Lightbulb
                                        size={20}
                                        className="text-[#D2B87C]"
                                        strokeWidth={1.5}
                                    />
                                    <h3 className="font-serif text-xl text-white">
                                        Research Keywords
                                    </h3>
                                </div>

                                <div className="mt-6 flex flex-wrap gap-2">
                                    {keywords.map((keyword) => (
                                        <span
                                            key={keyword}
                                            className="border border-[#D2B87C]/35 px-3 py-2 text-[10px] tracking-wide text-[#E9D9B5]"
                                        >
                                            {keyword}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Industry Experience */}
                <section
                    id="experience"
                    className="scroll-mt-24 bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="03"
                            eyebrow="Professional Journey"
                            title="Industry Experience"
                            description="Over seven years of industry experience contributing to software development and real-world problem-solving."
                        />

                        <div className="relative border-l border-[#D2B87C] pl-7 sm:pl-10">
                            <div className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-[#B49A66]" />

                            <div className="border border-[#E8E1D5] bg-white p-6 sm:p-8">
                                <div className="flex flex-wrap items-center justify-between gap-3">
                                    <span className="text-[9px] font-medium uppercase tracking-[0.16em] text-[#927B4D]">
                                        Professional Experience
                                    </span>
                                    <span className="border border-[#D8CDB8] bg-[#FAF7F2] px-3 py-1.5 text-[9px] uppercase tracking-[0.12em] text-[#77747A]">
                                        7+ Years
                                    </span>
                                </div>

                                <h3 className="mt-4 font-serif text-2xl text-[#20235A]">
                                    Wipro Infotech
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-[#55535B]">
                                    Before entering academia, she worked for
                                    over seven years at Wipro Infotech,
                                    gaining hands-on exposure to real-world
                                    software systems and developing a
                                    problem-solving mindset that continues
                                    to inform her teaching and research.
                                </p>

                                <div className="mt-7 grid gap-5 border-t border-[#EAE4D9] pt-6 sm:grid-cols-2">
                                    <div>
                                        <p className="text-[9px] font-medium uppercase tracking-[0.14em] text-[#927B4D]">
                                            Role
                                        </p>
                                        <h4 className="mt-2 font-serif text-lg text-[#20235A]">
                                            Analyst Programmer
                                        </h4>
                                        <p className="mt-1 text-xs leading-6 text-[#69666B]">
                                            Hyderabad
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-[9px] font-medium uppercase tracking-[0.14em] text-[#927B4D]">
                                            Role
                                        </p>
                                        <h4 className="mt-2 font-serif text-lg text-[#20235A]">
                                            Senior Software Engineer
                                        </h4>
                                        <p className="mt-1 text-xs leading-6 text-[#69666B]">
                                            Infopark, Ernakulam
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Teaching & Outreach */}
                <section
                    id="teaching"
                    className="scroll-mt-24 bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="04"
                            eyebrow="Academic Engagement"
                            title="Teaching & Outreach"
                            description="Teaching, academic guidance, and knowledge-sharing initiatives beyond the classroom."
                        />

                        <div className="grid gap-5 md:grid-cols-2">
                            <article className="border border-[#E8E1D5] bg-[#FAF7F2] p-6 sm:p-7">
                                <div className="flex h-11 w-11 items-center justify-center bg-white text-[#927B4D]">
                                    <Users size={21} strokeWidth={1.5} />
                                </div>

                                <p className="mt-5 text-[9px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                    Academic Guidance
                                </p>

                                <h3 className="mt-2 font-serif text-xl text-[#20235A]">
                                    BrightNET Coaching Centre
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-[#55535B]">
                                    Serves as a faculty member at BrightNET
                                    Coaching Centre, Palakkad, guiding
                                    students preparing for GATE, UGC-NET,
                                    and JRF examinations.
                                </p>
                            </article>

                            <article className="border border-[#E8E1D5] bg-[#FAF7F2] p-6 sm:p-7">
                                <div className="flex h-11 w-11 items-center justify-center bg-white text-[#927B4D]">
                                    <BookOpen size={21} strokeWidth={1.5} />
                                </div>

                                <p className="mt-5 text-[9px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                    Add-on Programme
                                </p>

                                <h3 className="mt-2 font-serif text-xl text-[#20235A]">
                                    Machine Learning
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-[#55535B]">
                                    Delivered a 100-hour Add-on Programme
                                    on Machine Learning, covering theory
                                    and implementation, at Sadanam Kumaran
                                    College, Kerala.
                                </p>
                            </article>

                            <article className="border border-[#E8E1D5] bg-[#FAF7F2] p-6 sm:p-7 md:col-span-2">
                                <div className="flex h-11 w-11 items-center justify-center bg-white text-[#927B4D]">
                                    <Lightbulb size={21} strokeWidth={1.5} />
                                </div>

                                <p className="mt-5 text-[9px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                    Technical Sessions
                                </p>

                                <h3 className="mt-2 font-serif text-xl text-[#20235A]">
                                    NLP Tools & Overleaf
                                </h3>

                                <p className="mt-3 max-w-3xl text-sm leading-7 text-[#55535B]">
                                    Conducted sessions on NLP tools and
                                    Overleaf at GEC Palakkad, sharing
                                    practical knowledge and supporting
                                    students in exploring technical tools
                                    and academic resources.
                                </p>
                            </article>
                        </div>
                    </div>
                </section>

                {/* Achievements & Honours */}
                <section
                    id="achievements"
                    className="scroll-mt-24 bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="05"
                            eyebrow="Professional Recognition"
                            title="Achievements & Honours"
                            description="Academic distinctions, competitive examination achievements, research contributions, and professional recognition."
                        />

                        <div className="space-y-4">
                            <article className="grid gap-4 border border-[#E8E1D5] bg-white p-5 transition-colors hover:border-[#D2B87C] sm:grid-cols-[65px_1fr] sm:gap-6 sm:p-6">
                                <div className="flex items-center gap-3 sm:block">
                                    <Award
                                        size={22}
                                        className="text-[#927B4D]"
                                        strokeWidth={1.5}
                                    />
                                    <span className="font-serif text-2xl text-[#B49A66] sm:mt-3 sm:block">
                                        01
                                    </span>
                                </div>
                                <div>
                                    <p className="text-[9px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                        National Qualification
                                    </p>
                                    <h3 className="mt-2 font-serif text-lg text-[#20235A]">
                                        UGC-NET & JRF – Computer Science
                                    </h3>
                                    <p className="mt-2 text-sm leading-7 text-[#55535B]">
                                        Qualified UGC-NET and JRF in Computer
                                        Science with 99.88 percentile in
                                        June 2019.
                                    </p>
                                </div>
                            </article>

                            <article className="grid gap-4 border border-[#E8E1D5] bg-white p-5 transition-colors hover:border-[#D2B87C] sm:grid-cols-[65px_1fr] sm:gap-6 sm:p-6">
                                <div className="flex items-center gap-3 sm:block">
                                    <GraduationCap
                                        size={22}
                                        className="text-[#927B4D]"
                                        strokeWidth={1.5}
                                    />
                                    <span className="font-serif text-2xl text-[#B49A66] sm:mt-3 sm:block">
                                        02
                                    </span>
                                </div>
                                <div>
                                    <p className="text-[9px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                        University Recognition
                                    </p>
                                    <h3 className="mt-2 font-serif text-lg text-[#20235A]">
                                        Third University Rank
                                    </h3>
                                    <p className="mt-2 text-sm leading-7 text-[#55535B]">
                                        Secured Third Rank in B.Tech
                                        Information Technology from
                                        Calicut University.
                                    </p>
                                </div>
                            </article>

                            <article className="grid gap-4 border border-[#E8E1D5] bg-white p-5 transition-colors hover:border-[#D2B87C] sm:grid-cols-[65px_1fr] sm:gap-6 sm:p-6">
                                <div className="flex items-center gap-3 sm:block">
                                    <Trophy
                                        size={22}
                                        className="text-[#927B4D]"
                                        strokeWidth={1.5}
                                    />
                                    <span className="font-serif text-2xl text-[#B49A66] sm:mt-3 sm:block">
                                        03
                                    </span>
                                </div>
                                <div>
                                    <p className="text-[9px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                        Institutional Honour
                                    </p>
                                    <h3 className="mt-2 font-serif text-lg text-[#20235A]">
                                        Best Outgoing Student
                                    </h3>
                                    <p className="mt-2 text-sm leading-7 text-[#55535B]">
                                        Recognised as Best Outgoing Student
                                        at NCERC, 2008.
                                    </p>
                                </div>
                            </article>

                            <article className="grid gap-4 border border-[#E8E1D5] bg-white p-5 transition-colors hover:border-[#D2B87C] sm:grid-cols-[65px_1fr] sm:gap-6 sm:p-6">
                                <div className="flex items-center gap-3 sm:block">
                                    <Award
                                        size={22}
                                        className="text-[#927B4D]"
                                        strokeWidth={1.5}
                                    />
                                    <span className="font-serif text-2xl text-[#B49A66] sm:mt-3 sm:block">
                                        04
                                    </span>
                                </div>
                                <div>
                                    <p className="text-[9px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                        Academic Achievement
                                    </p>
                                    <h3 className="mt-2 font-serif text-lg text-[#20235A]">
                                        Higher Secondary School Topper
                                    </h3>
                                    <p className="mt-2 text-sm leading-7 text-[#55535B]">
                                        Secured School Topper recognition
                                        in Higher Secondary Science and
                                        received the SBI Scholarship.
                                    </p>
                                </div>
                            </article>

                            <article className="grid gap-4 border border-[#E8E1D5] bg-white p-5 transition-colors hover:border-[#D2B87C] sm:grid-cols-[65px_1fr] sm:gap-6 sm:p-6">
                                <div className="flex items-center gap-3 sm:block">
                                    <BriefcaseBusiness
                                        size={22}
                                        className="text-[#927B4D]"
                                        strokeWidth={1.5}
                                    />
                                    <span className="font-serif text-2xl text-[#B49A66] sm:mt-3 sm:block">
                                        05
                                    </span>
                                </div>
                                <div>
                                    <p className="text-[9px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                        Industry Recognition
                                    </p>
                                    <h3 className="mt-2 font-serif text-lg text-[#20235A]">
                                        Spot Awards at Wipro Infotech
                                    </h3>
                                    <p className="mt-2 text-sm leading-7 text-[#55535B]">
                                        Received multiple Spot Awards for
                                        project excellence during her
                                        professional tenure at Wipro
                                        Infotech.
                                    </p>
                                </div>
                            </article>

                            <article className="grid gap-4 border border-[#E8E1D5] bg-white p-5 transition-colors hover:border-[#D2B87C] sm:grid-cols-[65px_1fr] sm:gap-6 sm:p-6">
                                <div className="flex items-center gap-3 sm:block">
                                    <Microscope
                                        size={22}
                                        className="text-[#927B4D]"
                                        strokeWidth={1.5}
                                    />
                                    <span className="font-serif text-2xl text-[#B49A66] sm:mt-3 sm:block">
                                        06
                                    </span>
                                </div>
                                <div>
                                    <p className="text-[9px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                        Research Contributions
                                    </p>
                                    <h3 className="mt-2 font-serif text-lg text-[#20235A]">
                                        Research Publications
                                    </h3>
                                    <p className="mt-2 text-sm leading-7 text-[#55535B]">
                                        Published research in ACM
                                        Transactions, Language Resources
                                        and Evaluation (LRE), globally
                                        recognised Q1 research journals,
                                        and several IEEE conferences.
                                    </p>
                                </div>
                            </article>
                        </div>
                    </div>
                </section>
            </main>

            <FooterSection />
        </>
    );
}
