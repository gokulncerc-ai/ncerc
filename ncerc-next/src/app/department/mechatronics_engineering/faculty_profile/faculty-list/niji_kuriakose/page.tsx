
"use client";

import React from "react";
import {
    ArrowDown,
    BookOpen,
    GraduationCap,
    Lightbulb,
    Microscope,
    UserRound,
    Award,
    FileText,
    ExternalLink,
    FlaskConical,
    BriefcaseBusiness,
    Users,
    Mail,
    CalendarDays,
    BadgeCheck,
    Brain,
    Presentation,
    Radio,
    Cpu,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../../../DepartmentsNavigation/DepartmentsNavigation";

const profileSections = [
    { id: "about", label: "About Me" },
    { id: "qualifications", label: "Qualifications" },
    { id: "experience", label: "Experience" },
    { id: "research", label: "Research" },
    { id: "courses", label: "Courses" },
    { id: "publications", label: "Publications" },
    { id: "patents", label: "Patents" },
    { id: "guidance", label: "Guidance" },
    { id: "awards", label: "Awards" },
    { id: "memberships", label: "Memberships" },
    { id: "professional", label: "Professional Activities" },
    { id: "responsibilities", label: "Responsibilities" },
    { id: "profiles", label: "Research Profiles" },
];

const qualifications = [
    {
        degree: "M.E.",
        specialization: "Communication Systems",
        institution:
            "Nehru Institute of Engineering & Technology, Anna University, Chennai",
        year: "2015",
    },
    {
        degree: "B.E.",
        specialization: "Electronics and Communication Engineering",
        institution:
            "SNS College of Engineering, Anna University, Chennai",
        year: "2012",
    },
];

const experience = [
    {
        designation: "Assistant Professor",
        department: "Department of Mechatronics Engineering",
        institution:
            "Nehru College of Engineering and Research Centre, Kerala",
        period: "December 2025 – Present",
    },
    {
        designation: "Teaching Experience",
        department: "Higher Education",
        institution: "Academic and teaching experience in engineering education",
        period: "Over 7 Years",
    },
    {
        designation: "IT Industry Experience",
        department: "Software Testing and Mobile Communication Protocols",
        institution: "IT Industry",
        period: "1 Year",
    },
];

const specializations = [
    "Communication Systems",
];

const researchInterests = [
    "Communication Systems",
    "Embedded Systems",
    "Biomedical Engineering",
];

const undergraduateCourses = [
    "Analog Electronics",
    "Digital Electronics",
    "Power Electronics",
    "Embedded Systems",
    "Digital Signal Processing",
    "Analog and Digital Communication",
    "Biomedical Engineering",
    "Bio Mechatronics",
    "Renewable Energy",
    "Electric Circuits and Networks",
];

const publicationMetrics = [
    { label: "International Journal Publications", value: "0" },
    { label: "National Journal Publications", value: "04" },
    { label: "International Conference Publications", value: "01" },
    { label: "National Conference Publications", value: "03" },
    { label: "Books / Book Chapters", value: "0" },
];

const patentMetrics = [
    { label: "Patents Granted", value: "0" },
    { label: "Patents Published", value: "02" },
];

const administrativeResponsibilities = [
    {
        title: "Class Advisor",
        description:
            "Academic coordination, student mentoring, and class-related responsibilities.",
    },
    {
        title: "Robotics Club Coordinator",
        description:
            "Coordination of robotics club activities and student engagement in robotics-related learning.",
    },
    {
        title: "Department Library Coordinator",
        description:
            "Coordination of departmental library activities and academic learning resources.",
    },
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

function DataTable({
    headers,
    rows,
}: {
    headers: string[];
    rows: string[][];
}) {
    return (
        <div className="overflow-hidden border border-[#E6DFD3] bg-white">
            <div className="overflow-x-auto">
                <table className="w-full min-w-[650px] border-collapse text-left">
                    <thead>
                        <tr className="bg-[#20235A]">
                            {headers.map((header) => (
                                <th
                                    key={header}
                                    className="px-4 py-4 text-[9px] font-medium uppercase tracking-[0.13em] text-[#E5D4A9]"
                                >
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                        {rows.map((row, rowIndex) => (
                            <tr
                                key={rowIndex}
                                className={`border-b border-[#EEE9E0] last:border-b-0 ${rowIndex % 2 === 0
                                    ? "bg-white"
                                    : "bg-[#FAF8F4]"
                                    }`}
                            >
                                {row.map((cell, cellIndex) => (
                                    <td
                                        key={cellIndex}
                                        className={`px-4 py-4 text-xs leading-6 text-[#55535B] ${cellIndex === 0
                                            ? "text-[#927B4D]"
                                            : ""
                                            }`}
                                    >
                                        {cell}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

function MetricGrid({
    items,
}: {
    items: { label: string; value: string }[];
}) {
    return (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
                <div
                    key={item.label}
                    className="border border-[#E8E1D5] bg-white p-5"
                >
                    <p className="font-serif text-3xl text-[#20235A]">
                        {item.value}
                    </p>

                    <p className="mt-2 text-[10px] font-medium uppercase leading-5 tracking-[0.12em] text-[#927B4D]">
                        {item.label}
                    </p>
                </div>
            ))}
        </div>
    );
}

function ProfileLink({
    label,
    value,
    href,
}: {
    label: string;
    value: string;
    href: string;
}) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-4 border-b border-[#EAE4D9] py-4 last:border-b-0"
        >
            <div className="min-w-0">
                <p className="text-[9px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                    {label}
                </p>

                <p className="mt-2 break-all text-sm leading-6 text-[#393947] transition-colors group-hover:text-[#927B4D]">
                    {value}
                </p>
            </div>

            <ExternalLink
                size={15}
                className="shrink-0 text-[#927B4D] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
        </a>
    );
}

function NumberedList({ items }: { items: string[] }) {
    return (
        <div className="mt-6 space-y-4">
            {items.map((item, index) => (
                <div
                    key={item}
                    className="flex items-start gap-4 border-b border-[#E5DED1] pb-4 last:border-b-0 last:pb-0"
                >
                    <span className="font-serif text-lg text-[#B49A66]">
                        {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="pt-1 text-sm leading-6 text-[#393947]">
                        {item}
                    </p>
                </div>
            ))}
        </div>
    );
}

export default function NijiKuriakoseFacultyPage() {
    return (
        <>
            <SiteHeader />

            {/* PROFILE HERO */}
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
                                Department of Mechatronics Engineering
                            </p>

                            <h1 className="mt-4 max-w-4xl font-serif text-4xl font-normal leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                                Niji Kuriakose
                            </h1>

                            <p className="mt-3 font-serif text-lg italic text-[#D2B87C] sm:text-xl">
                                Assistant Professor
                            </p>

                            <div className="mt-7 flex flex-wrap gap-3">
                                <span className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80">
                                    M.E. – Communication Systems
                                </span>

                                <span className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80">
                                    B.E. – Electronics and Communication Engineering
                                </span>
                            </div>

                            <div className="mt-8 flex flex-wrap items-center gap-5">
                                <div className="flex items-center gap-3">
                                    <span className="h-px w-10 bg-[#D2B87C]" />

                                    <span className="text-[10px] uppercase tracking-[0.18em] text-white/50">
                                        Assistant Professor
                                    </span>
                                </div>

                                <div className="flex items-center gap-2 text-[10px] text-white/55">
                                    <CalendarDays
                                        size={14}
                                        className="text-[#D2B87C]"
                                    />
                                    Joined: 02.12.2025
                                </div>
                            </div>
                        </div>

                        {/* ACADEMIC PROFILE SUMMARY */}
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
                                            Teaching Experience
                                        </p>

                                        <p className="mt-1 text-xs leading-5 text-white/90">
                                            7+ Years
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
                                            National Journal Publications
                                        </p>

                                        <p className="mt-1 text-xs leading-5 text-white/90">
                                            4 Publications
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Radio
                                        size={19}
                                        className="shrink-0 text-[#D2B87C]"
                                        strokeWidth={1.5}
                                    />

                                    <div>
                                        <p className="text-[9px] uppercase tracking-[0.13em] text-white/45">
                                            Research Focus
                                        </p>

                                        <p className="mt-1 text-xs leading-5 text-white/90">
                                            Communication & Embedded Systems
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

                {/* PROFILE NAVIGATION */}
                {/* <div className="border-b border-[#EAE4D9] bg-white">
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
                </div> */}

                {/* 01 - ABOUT ME */}
                <section
                    id="about"
                    className="scroll-mt-24 bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_310px] lg:gap-16">
                        <div>
                            <SectionHeading
                                number="01"
                                eyebrow="Introduction"
                                title="About Niji Kuriakose"
                                description="An overview of her academic background, professional experience, and research interests."
                            />

                            <div className="space-y-5 text-sm leading-8 text-[#55535B]">
                                <p>
                                    Niji Kuriakose is an academic professional in the field of Electronics and
                                    Communication Engineering, with over seven years of teaching experience in higher
                                    education. She is currently serving as an Assistant Professor in the Department of
                                    Mechatronics Engineering at Nehru College of Engineering and Research Centre,
                                    Kerala, since December 2, 2025.

                                </p>

                                <p>
                                    She holds an M.E. in Communication Systems from Nehru Institute of Engineering and
                                    Technology, Anna University and a B.E. in Electronics and Communication
                                    Engineering. Her academic and professional expertise encompasses communication
                                    system, digital electronics, embedded systems, communication networks, automation,
                                    machine learning and biomedical engineering applications.
                                </p>

                                <p>
                                    Her professional experience includes teaching, academic coordination, curriculum
                                    development, student mentoring, and project supervision. She also possesses IT
                                    industry experience in software testing and mobile communication protocols, providing
                                    her with a blend of academic and technical expertise.
                                </p>

                                <p>
                                    She has published research papers and presented technical work at national and
                                    international conferences, with research contributions in OFDM systems, PAPR
                                    reduction techniques, and antenna design.
                                </p>

                                <p>
                                    Her academic interests include emerging communication technologies, embedded
                                    systems, robotics, automation, and interdisciplinary engineering. She is committed to
                                    academic excellence, innovative teaching practices, research advancement, and
                                    nurturing industry-relevant technical skills among students.
                                </p>
                            </div>
                        </div>

                        {/* PERSONAL DETAILS */}
                        <aside className="h-fit border border-[#E4DCCE] bg-white p-6">
                            <div className="mb-4 flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center bg-[#F5F0E6] text-[#927B4D]">
                                    <UserRound size={19} strokeWidth={1.5} />
                                </div>

                                <div>
                                    <p className="font-serif text-lg text-[#20235A]">
                                        Personal Details
                                    </p>

                                    <p className="text-[9px] uppercase tracking-[0.13em] text-[#927B4D]">
                                        Faculty Information
                                    </p>
                                </div>
                            </div>

                            <DetailItem
                                label="Designation"
                                value="Assistant Professor"
                            />

                            <DetailItem
                                label="Department"
                                value="Mechatronics Engineering"
                            />

                            <DetailItem
                                label="Date of Joining"
                                value="02 December 2025"
                            />

                            <DetailItem
                                label="Email Address"
                                value="nijikuriakose.4530@ncerc.ac.in"
                            />

                            {/* <DetailItem
                                label="Contact Number"
                                value="Not provided"
                            /> */}

                            <DetailItem
                                label="Teaching Experience"
                                value="Over 7 Years"
                            />

                            <DetailItem
                                label="Industry Experience"
                                value="1 Year"
                            />

                            {/* <DetailItem
                                label="Research Experience"
                                value="Nil"
                            /> */}
                        </aside>
                    </div>
                </section>

                {/* 02 - QUALIFICATIONS */}
                <section
                    id="qualifications"
                    className="scroll-mt-24 bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="02"
                            eyebrow="Academic Background"
                            title="Academic Qualifications"
                            description="Her academic qualifications in communication systems and electronics engineering."
                        />

                        <DataTable
                            headers={[
                                "Degree",
                                "Specialization",
                                "Institution / University",
                                "Year of Passing",
                            ]}
                            rows={qualifications.map((item) => [
                                item.degree,
                                item.specialization,
                                item.institution,
                                item.year,
                            ])}
                        />
                    </div>
                </section>

                {/* 03 - EXPERIENCE */}
                <section
                    id="experience"
                    className="scroll-mt-24 bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="03"
                            eyebrow="Professional Journey"
                            title="Teaching & Professional Experience"
                            description="Academic teaching experience and professional exposure in the IT industry."
                        />

                        <div className="mb-6 flex items-center gap-3">
                            <BriefcaseBusiness
                                size={19}
                                className="text-[#927B4D]"
                                strokeWidth={1.5}
                            />

                            <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                Experience Overview
                            </p>
                        </div>

                        <MetricGrid
                            items={[
                                {
                                    label: "Teaching Experience",
                                    value: "7+ Years",
                                },
                                {
                                    label: "Industry Experience",
                                    value: "1 Year",
                                },
                                {
                                    label: "Research Experience",
                                    value: "Nil",
                                },
                            ]}
                        />

                        <div className="mt-8 space-y-5">
                            {experience.map((item, index) => (
                                <div
                                    key={`${item.institution}-${index}`}
                                    className="grid gap-4 border border-[#E8E1D5] bg-white p-6 sm:grid-cols-[65px_1fr] sm:p-7"
                                >
                                    <div className="font-serif text-3xl text-[#B49A66]">
                                        {String(index + 1).padStart(2, "0")}
                                    </div>

                                    <div>
                                        <h3 className="font-serif text-lg text-[#20235A]">
                                            {item.designation}
                                        </h3>

                                        <p className="mt-1 text-xs font-medium uppercase tracking-[0.1em] text-[#927B4D]">
                                            {item.department}
                                        </p>

                                        <p className="mt-3 text-sm leading-6 text-[#55535B]">
                                            {item.institution}
                                        </p>

                                        <p className="mt-3 flex items-start gap-2 text-xs leading-6 text-[#77747A]">
                                            <CalendarDays
                                                size={14}
                                                className="mt-1 shrink-0 text-[#927B4D]"
                                            />
                                            {item.period}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 04 - RESEARCH AND SPECIALIZATION */}
                <section
                    id="research"
                    className="scroll-mt-24 bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="04"
                            eyebrow="Academic Exploration"
                            title="Research & Areas of Specialization"
                            description="Her academic interests in communication systems, embedded technologies, and biomedical engineering."
                        />

                        <div className="grid gap-8 lg:grid-cols-2">
                            <div className="border border-[#E8E1D5] bg-[#FAF7F2] p-6 sm:p-8">
                                <div className="flex items-center gap-3">
                                    <FlaskConical
                                        size={20}
                                        className="text-[#927B4D]"
                                        strokeWidth={1.5}
                                    />

                                    <h3 className="font-serif text-xl text-[#20235A]">
                                        Areas of Specialization
                                    </h3>
                                </div>

                                <NumberedList items={specializations} />
                            </div>

                            <div className="border border-[#E8E1D5] bg-[#FAF7F2] p-6 sm:p-8">
                                <div className="flex items-center gap-3">
                                    <Lightbulb
                                        size={20}
                                        className="text-[#927B4D]"
                                        strokeWidth={1.5}
                                    />

                                    <h3 className="font-serif text-xl text-[#20235A]">
                                        Research Interests
                                    </h3>
                                </div>

                                <NumberedList items={researchInterests} />
                            </div>
                        </div>
                    </div>
                </section>

                {/* 05 - COURSES HANDLED */}
                <section
                    id="courses"
                    className="scroll-mt-24 bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="05"
                            eyebrow="Teaching Experience"
                            title="Courses / Subjects Handled"
                            description="Undergraduate courses handled across electronics, communication, embedded systems, and interdisciplinary engineering."
                        />

                        <div className="mb-5 flex items-center gap-3">
                            <BookOpen
                                size={18}
                                className="text-[#927B4D]"
                                strokeWidth={1.5}
                            />

                            <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                Undergraduate Teaching Portfolio
                            </p>
                        </div>

                        <div className="border border-[#E8E1D5] bg-white p-6 sm:p-8">
                            <NumberedList items={undergraduateCourses} />
                        </div>
                    </div>
                </section>

                {/* 06 - PUBLICATIONS */}
                <section
                    id="publications"
                    className="scroll-mt-24 bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="06"
                            eyebrow="Research Contributions"
                            title="Research Publications"
                            description="Her research contributions through journal publications and national and international conference presentations."
                        />

                        <div className="mb-6 flex items-center gap-3">
                            <FileText
                                size={19}
                                className="text-[#927B4D]"
                                strokeWidth={1.5}
                            />

                            <h3 className="font-serif text-xl text-[#20235A]">
                                Publication Overview
                            </h3>
                        </div>

                        <MetricGrid items={publicationMetrics} />

                        <div className="mt-8 border border-[#E8E1D5] bg-[#FAF7F2] p-6 sm:p-8">
                            <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                Research Contribution Areas
                            </p>

                            <NumberedList
                                items={[
                                    "OFDM Systems",
                                    "PAPR Reduction Techniques",
                                    "Antenna Design",
                                ]}
                            />
                        </div>
                    </div>
                </section>

                {/* 07 - PATENTS */}
                <section
                    id="patents"
                    className="scroll-mt-24 bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="07"
                            eyebrow="Innovation & Intellectual Property"
                            title="Patents"
                            description="Patent publication and grant details."
                        />

                        <MetricGrid items={patentMetrics} />
                    </div>
                </section>

                {/* 08 - RESEARCH GUIDANCE */}
                <section
                    id="guidance"
                    className="scroll-mt-24 bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="08"
                            eyebrow="Research Mentorship"
                            title="Research Guidance"
                            description="Project supervision and academic mentoring."
                        />

                        <MetricGrid
                            items={[
                                {
                                    label: "Undergraduate Projects Guided",
                                    value: "02",
                                },
                            ]}
                        />

                        <div className="mt-6 border border-[#E8E1D5] bg-[#FAF7F2] p-6 sm:p-8">
                            <div className="flex items-center gap-3">
                                <Users
                                    size={20}
                                    className="text-[#927B4D]"
                                    strokeWidth={1.5}
                                />

                                <h3 className="font-serif text-xl text-[#20235A]">
                                    Project Guidance
                                </h3>
                            </div>

                            <p className="mt-4 text-sm leading-7 text-[#55535B]">
                                She has guided 2 undergraduate projects.
                                Further project titles and details were not
                                provided.
                            </p>
                        </div>
                    </div>
                </section>

             
          
               
              

              
                {/* 12 - PROFESSIONAL ACTIVITIES */}
                <section
                    id="professional"
                    className="scroll-mt-24 bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="12"
                            eyebrow="Continuous Learning"
                            title="Faculty Development & Professional Activities"
                            description="Faculty development programmes, workshops, and invited academic activities."
                        />

                        <MetricGrid
                            items={[
                                {
                                    label: "FDPs / Workshops Attended",
                                    value: "05",
                                },
                                {
                                    label: "Invited Talks / Guest Lectures",
                                    value: "0",
                                },
                            ]}
                        />

                        <div className="mt-7 border border-[#E8E1D5] bg-[#FAF7F2] p-6 sm:p-8">
                            <div className="flex items-center gap-3">
                                <Presentation
                                    size={20}
                                    className="text-[#927B4D]"
                                    strokeWidth={1.5}
                                />

                                <h3 className="font-serif text-xl text-[#20235A]">
                                    Professional Development
                                </h3>
                            </div>

                            <p className="mt-4 text-sm leading-7 text-[#69666B]">
                                She has attended 5 faculty development
                                programmes and workshops. Individual programme
                                titles and details were not provided.
                            </p>

                            <p className="mt-3 text-sm leading-7 text-[#69666B]">
                                Invited Talks / Guest Lectures Delivered: 0.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 13 - ADMINISTRATIVE RESPONSIBILITIES */}
                <section
                    id="responsibilities"
                    className="scroll-mt-24 bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="13"
                            eyebrow="Institutional Contributions"
                            title="Administrative & Institutional Responsibilities"
                            description="Academic coordination, student mentoring, and departmental responsibilities."
                        />

                        <div className="space-y-4">
                            {administrativeResponsibilities.map(
                                (item, index) => (
                                    <div
                                        key={item.title}
                                        className="grid gap-4 border-b border-[#E8E1D5] py-5 last:border-b-0 sm:grid-cols-[65px_1fr]"
                                    >
                                        <span className="font-serif text-2xl text-[#B49A66]">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                        <div>
                                            <h3 className="font-serif text-lg text-[#20235A]">
                                                {item.title}
                                            </h3>

                                            <p className="mt-2 text-sm leading-7 text-[#55535B]">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </section>

                {/* 14 - RESEARCHER PROFILES */}
                <section
                    id="profiles"
                    className="scroll-mt-24 bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="14"
                            eyebrow="Academic Presence"
                            title="Professional Research Profiles"
                            description="Access her academic research profiles and scholarly information."
                        />

                        <div className="grid gap-8 lg:grid-cols-2">
                            <div className="border border-[#E8E1D5] bg-[#FAF7F2] p-6 sm:p-8">
                                <div className="flex items-center gap-3">
                                    <Microscope
                                        size={21}
                                        className="text-[#927B4D]"
                                        strokeWidth={1.5}
                                    />

                                    <h3 className="font-serif text-xl text-[#20235A]">
                                        Research Platforms
                                    </h3>
                                </div>

                                <div className="mt-5">
                                    <ProfileLink
                                        label="Google Scholar"
                                        value="View Google Scholar Profile"
                                        href="https://scholar.google.com/citations?user=9MisgRMAAAAJ&hl=en&citsig=AIsL8XqoFP3s394Gm5LQsRYybWNr"
                                    />

                                    <ProfileLink
                                        label="ORCID"
                                        value="0009-0003-0838-4782"
                                        href="https://orcid.org/0009-0003-0838-4782"
                                    />
                                </div>
                            </div>

                            <div className="border border-[#E8E1D5] bg-[#FAF7F2] p-6 sm:p-8">
                                <div className="flex items-center gap-3">
                                    <UserRound
                                        size={21}
                                        className="text-[#927B4D]"
                                        strokeWidth={1.5}
                                    />

                                    <h3 className="font-serif text-xl text-[#20235A]">
                                        Faculty Information
                                    </h3>
                                </div>

                                <div className="mt-5">
                                    <DetailItem
                                        label="Faculty Name"
                                        value="Niji Kuriakose"
                                    />

                                    <DetailItem
                                        label="Designation"
                                        value="Assistant Professor"
                                    />

                                    <DetailItem
                                        label="Department"
                                        value="Mechatronics Engineering"
                                    />

                                    <DetailItem
                                        label="Institution"
                                        value="Nehru College of Engineering and Research Centre"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* CONTACT DETAILS */}
                        <div className="mt-8 border border-[#E8E1D5] bg-[#FAF7F2] p-6 sm:p-8">
                            <div className="flex items-center gap-3">
                                <Mail
                                    size={20}
                                    className="text-[#927B4D]"
                                    strokeWidth={1.5}
                                />

                                <h3 className="font-serif text-xl text-[#20235A]">
                                    Contact Information
                                </h3>
                            </div>

                            <div className="mt-5">
                                <a
                                    href="mailto:nijikuriakose.4530@ncerc.ac.in"
                                    className="flex items-center gap-3 border border-[#E8E1D5] bg-white p-4 transition-colors hover:border-[#D2B87C]"
                                >
                                    <Mail
                                        size={17}
                                        className="shrink-0 text-[#927B4D]"
                                    />

                                    <div className="min-w-0">
                                        <p className="text-[9px] uppercase tracking-[0.14em] text-[#927B4D]">
                                            Faculty Email
                                        </p>

                                        <p className="mt-1 break-all text-sm text-[#393947]">
                                            nijikuriakose.4530@ncerc.ac.in
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <FooterSection />
        </>
    );
}
