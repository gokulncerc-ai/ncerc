
"use client";

import React from "react";
import {
    ArrowDown,
    BookOpen,
    GraduationCap,
    Lightbulb,
    Microscope,
    UserRound,
    FileText,
    ExternalLink,
    BookMarked,
    Award,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../../../DepartmentNav/DepartmentNav";

const researchInterests = [
    "Manufacturing Engineering",
    "Theory of Machines",
    "Additive Manufacturing",
];

const courses = [
    ["1", "ENGINEERING GRAPHICS AND COMPUTER AIDED DRAWING"],
    ["2", "ADVANCED MANUFACTURING ENGINEERING"],
    ["3", "MECHANICS OF MECHINERY"],
    ["4", "MECHANICS OF SOLIDS"],
    ["5", "METALLURGY AND MATERIAL SCIENCE"],
    ["6", "MANUFACTURING PROCESS"],
    ["7", "REFREGERATION AND AIR CONDITIONING"],
    ["8", "MECHANICS OF FLUIDS"],
    ["9", "ADVANCED MECHANICS OF SOLIDS"],
    ["10", "DYNAMICS OF MACHINARY"],
    ["11", "OPERATION RESEARCH"],
    ["12", "OPERATIONS MANAGEMENT"],
];

const publications = [
    {
        year: "2025",
        title:
            "An Investigation into the Effects of a Scandium Inclusion on the Mechanical and Micro-structural Characteristics of Friction Stir Weld Joint",
        publication: "Scopus",
        url:
            "https://www.taylorfrancis.com/chapters/edit/10.1201/9781003545774-37/investigation-effects-scandium-inclusion-mechanical-micro-structural-characteristics-friction-stir-weld-joint-shine-pr-ragesh-deepu-sadanandan-lakshmikhanth-sasi-satheesh",
    },
    {
        year: "2026",
        title:
            "Digital Twin–CPS Synergy in Manufacturing: A Pathway to Intelligent and Sustainable Industry 5.0",
        publication: "Scopus",
        url:
            "https://api.taylorfrancis.com/content/chapters/edit/download?identifierName=doi&identifierValue=10.1201/9781003504825-10&type=chapterpdf",
    },
    {
        year: "2026",
        title:
            "Carbon Footprint Reduction Strategies Using Digital Twin Integration Strategy",
        publication: "Scopus",
    },
    {
        year: "2025",
        title: "Biomedical Applications of Shape Memory Polymers",
        publication: "IJIRT",
    },
    {
        year: "2025",
        title: "Design and Development of Patient Transfer Aid for Hospitals",
        publication: "IJIRT",
    },
];

const researcherProfiles = [
    {
        label: "ORCID",
        url: "https://orcid.org/0009-0001-4831-5605",
        display: "0009-0001-4831-5605",
    },
    {
        label: "Google Scholar",
        url: "https://scholar.google.com/citations?hl=en&user=1iySyqQAAAAJ",
        display: "Google Scholar Profile",
    },
];

const profileSections = [
    { id: "about", label: "About Me" },
    { id: "research", label: "Research" },
    { id: "courses", label: "Courses" },
    { id: "publications", label: "Publications" },
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
                <table className="w-full min-w-[600px] border-collapse text-left">
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

export default function RageshFacultyPage() {
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
                                Department of Mechanical Engineering
                            </p>

                            <h1 className="mt-4 font-serif text-4xl font-normal leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                                Mr. Ragesh P R
                            </h1>

                            <p className="mt-3 font-serif text-lg italic text-[#D2B87C] sm:text-xl">
                                Assistant Professor
                            </p>

                            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/65">
                                Nehru College of Engineering and Research Centre,
                                Thrissur, Kerala.
                            </p>

                            <div className="mt-7 flex flex-wrap gap-3">
                                <span className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80">
                                    B.Tech
                                </span>
                                <span className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80">
                                    M.E
                                </span>
                                <span className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80">
                                    PhD
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
                                        <p className="mt-1 text-xs leading-5 text-white/90">
                                            B.Tech, M.E, PhD
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
                                            Primary Research Interest
                                        </p>
                                        <p className="mt-1 text-xs leading-5 text-white/90">
                                            Maintenance Quality Function Deployment
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <BookOpen
                                        size={19}
                                        className="shrink-0 text-[#D2B87C]"
                                        strokeWidth={1.5}
                                    />
                                    <div>
                                        <p className="text-[9px] uppercase tracking-[0.13em] text-white/45">
                                            Faculty ID
                                        </p>
                                        <p className="mt-1 text-xs text-white/90">
                                            E-2239
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
                                title="About Mr. Ragesh P R"
                                description="Faculty profile and professional information."
                            />

                            <div className="space-y-5 text-sm leading-8 text-[#55535B]">
                                <p>
                                    Mr. Ragesh P R is an Assistant Professor
                                    in the Department of Mechanical Engineering
                                    at Nehru College of Engineering and Research
                                    Centre, Thrissur, Kerala.
                                </p>

                                <p>
                                    His primary research interest is Maintenance
                                    Quality Function Deployment. His areas of
                                    interest include Manufacturing Engineering,
                                    Theory of Machines, and Additive
                                    Manufacturing.
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
                                value="Assistant Professor"
                            />
                            <DetailItem
                                label="Department"
                                value="Mechanical Engineering"
                            />
                            <DetailItem
                                label="NCERC Unique ID"
                                value="E-2239"
                            />
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
                            description="Academic qualifications, research interests, and researcher profiles."
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
                                            Doctoral Qualification
                                        </p>
                                    </div>

                                    <h3 className="mt-3 font-serif text-xl text-[#20235A]">
                                        PhD
                                    </h3>
                                </div>

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
                                        M.E
                                    </h3>
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
                                        B.Tech
                                    </h3>
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
                                        Primary Research Interest
                                    </h3>
                                </div>

                                <p className="mt-4 text-sm leading-8 text-[#55535B]">
                                    Maintenance Quality Function Deployment.
                                </p>

                                <div className="mt-6 border-t border-[#E5DED1] pt-5">
                                    <p className="text-[9px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                        Researcher Profiles
                                    </p>

                                    <div className="mt-4 space-y-4">
                                        {researcherProfiles.map((profile) => (
                                            <div
                                                key={profile.label}
                                                className="border-b border-[#E5DED1] pb-4 last:border-b-0 last:pb-0"
                                            >
                                                <p className="text-[9px] font-medium uppercase tracking-[0.13em] text-[#927B4D]">
                                                    {profile.label}
                                                </p>

                                                <a
                                                    href={profile.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="mt-2 flex items-start gap-2 break-all text-xs leading-6 text-[#20235A] underline decoration-[#D2B87C] underline-offset-4 transition-colors hover:text-[#927B4D]"
                                                >
                                                    {profile.display}
                                                    <ExternalLink
                                                        size={13}
                                                        className="mt-1 shrink-0"
                                                    />
                                                </a>
                                            </div>
                                        ))}
                                    </div>
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
                                    Areas of Interest
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
                        </div>
                    </div>
                </section>

                {/* Courses Section */}
                <section
                    id="courses"
                    className="scroll-mt-24 bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="03"
                            eyebrow="Teaching Experience"
                            title="Courses Handled"
                            description="Subjects handled in the Department of Mechanical Engineering."
                        />

                        <div className="mb-5 flex items-center gap-3">
                            <BookOpen
                                size={18}
                                className="text-[#927B4D]"
                                strokeWidth={1.5}
                            />
                            <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                12 Courses Listed
                            </p>
                        </div>

                        <DataTable
                            headers={["Sl. No.", "Subject"]}
                            rows={courses}
                        />
                    </div>
                </section>

                {/* Publications Section */}
                <section
                    id="publications"
                    className="scroll-mt-24 bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="04"
                            eyebrow="Research Contributions"
                            title="Journal & Conference Publications"
                            description="Research papers, book publication, and patent details provided in the faculty profile."
                        />

                        {/* Journal Publications */}
                        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                            <div className="flex items-center gap-3">
                                <FileText
                                    size={19}
                                    className="text-[#927B4D]"
                                    strokeWidth={1.5}
                                />
                                <h3 className="font-serif text-xl text-[#20235A]">
                                    Research Publications
                                </h3>
                            </div>

                            <span className="border border-[#D8CDB8] bg-[#FAF7F2] px-3 py-2 text-[9px] uppercase tracking-[0.13em] text-[#927B4D]">
                                5 Publications
                            </span>
                        </div>

                        <div className="space-y-4">
                            {publications.map((publication, index) => (
                                <article
                                    key={`${publication.year}-${index}`}
                                    className="border border-[#E8E1D5] bg-[#FAF7F2] p-5 transition-colors hover:border-[#D2B87C] sm:p-7"
                                >
                                    <div className="flex flex-wrap items-center justify-between gap-3">
                                        <div className="flex items-center gap-3">
                                            <span className="font-serif text-2xl text-[#B49A66]">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>
                                            <span className="h-5 w-px bg-[#D8CDB8]" />
                                            <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                                {publication.year}
                                            </span>
                                        </div>

                                        <span className="border border-[#D8CDB8] bg-white px-3 py-1.5 text-[9px] uppercase tracking-[0.12em] text-[#77747A]">
                                            {publication.publication}
                                        </span>
                                    </div>

                                    <h3 className="mt-5 font-serif text-lg leading-7 text-[#20235A]">
                                        {publication.title}
                                    </h3>

                                    {publication.url && (
                                        <a
                                            href={publication.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-5 inline-flex items-center gap-2 border-t border-[#E5DED1] pt-4 text-[10px] font-medium uppercase tracking-[0.13em] text-[#927B4D] transition-colors hover:text-[#20235A]"
                                        >
                                            View Publication
                                            <ExternalLink size={14} />
                                        </a>
                                    )}
                                </article>
                            ))}
                        </div>

                        {/* Book Publication */}
                        <div className="mt-14">
                            <div className="mb-6 flex items-center gap-3">
                                <BookMarked
                                    size={19}
                                    className="text-[#927B4D]"
                                    strokeWidth={1.5}
                                />
                                <h3 className="font-serif text-xl text-[#20235A]">
                                    Book Publication
                                </h3>
                            </div>

                            <article className="border border-[#E8E1D5] bg-[#FAF7F2] p-5 sm:p-7">
                                <div className="flex flex-wrap items-center justify-between gap-3">
                                    <span className="font-serif text-2xl text-[#B49A66]">
                                        2016
                                    </span>
                                    <span className="border border-[#D8CDB8] bg-white px-3 py-1.5 text-[9px] uppercase tracking-[0.12em] text-[#77747A]">
                                        July 2016
                                    </span>
                                </div>

                                <h4 className="mt-5 font-serif text-xl leading-7 text-[#20235A]">
                                    Engineering Graphics
                                </h4>

                                <div className="mt-5 grid gap-4 border-t border-[#E5DED1] pt-5 sm:grid-cols-2">
                                    <div>
                                        <p className="text-[9px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                            Published By
                                        </p>
                                        <p className="mt-2 text-sm leading-6 text-[#55535B]">
                                            Sreekrishna Publishers
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-[9px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                            ISBN
                                        </p>
                                        <p className="mt-2 text-sm leading-6 text-[#55535B]">
                                            978-93-85364-62-4
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </div>

                        {/* Patent Publication */}
                        <div className="mt-14">
                            <div className="mb-6 flex items-center gap-3">
                                <Award
                                    size={19}
                                    className="text-[#927B4D]"
                                    strokeWidth={1.5}
                                />
                                <h3 className="font-serif text-xl text-[#20235A]">
                                    Patent Publication
                                </h3>
                            </div>

                            <article className="border border-[#E8E1D5] bg-[#FAF7F2] p-5 sm:p-7">
                                <div className="flex flex-wrap items-center justify-between gap-3">
                                    <span className="font-serif text-2xl text-[#B49A66]">
                                        2025
                                    </span>
                                    <span className="border border-[#D8CDB8] bg-white px-3 py-1.5 text-[9px] uppercase tracking-[0.12em] text-[#77747A]">
                                        Published 09/05/2025
                                    </span>
                                </div>

                                <h4 className="mt-5 font-serif text-lg leading-7 text-[#20235A]">
                                    Analyzing and Assessing the Mechanical
                                    Properties of Polymer Matrix Composite
                                    Material Utilizing Natural and Synthetic
                                    Fibers
                                </h4>

                                <div className="mt-5 grid gap-4 border-t border-[#E5DED1] pt-5 sm:grid-cols-2">
                                    <div>
                                        <p className="text-[9px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                            Date of Submission
                                        </p>
                                        <p className="mt-2 text-sm leading-6 text-[#55535B]">
                                            15/04/2025
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-[9px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                            Application Number
                                        </p>
                                        <p className="mt-2 text-sm leading-6 text-[#55535B]">
                                            202541036218 A
                                        </p>
                                    </div>
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
