"use client";

import Link from "next/link";
import {
    ArrowDown,
    Award,
    BookOpen,
    ExternalLink,
    GraduationCap,
    Lightbulb,
    Microscope,
    Presentation,
    ShieldCheck,
    UserRound,
    Network,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../../../DepartmentNav/DepartmentNavigation";

/* =========================================
   FACULTY PROFILE DATA
========================================= */

const researcherProfiles = [
    {
        name: "ORCID",
        url: "https://orcid.org/0009-0007-4126-1468",
        description: "Researcher identification profile",
    },
    {
        name: "Google Scholar",
        url: "https://scholar.google.com/citations?view_op=new_profile&hl=en",
        description: "Google Scholar researcher profile",
    },
];

const researchInterests = [
    "Cyber Security",
    "Data Science",
    "Artificial Intelligence",
];

const areasOfInterest = [
    "Machine Learning",
    "Data Science",
    "Artificial Intelligence",
];

const courses = [
    // Academic Year 2024-25
    [
        "1",
        "2024-25",
        "CSE AI & ML",
        "S2",
        "2024",
        "Foundations of Computing: From Hardware Essentials to Web Design",
    ],
    [
        "2",
        "2024-25",
        "ECE",
        "S4",
        "2024",
        "Computer Architecture and Microcontrollers",
    ],

    // Academic Year 2025-26
    [
        "3",
        "2025-26",
        "CSE A",
        "S5",
        "2023",
        "Management of Software Systems",
    ],
    [
        "4",
        "2025-26",
        "CSE B",
        "S5",
        "2023",
        "Management of Software Systems",
    ],
    [
        "5",
        "2025-26",
        "CSE A",
        "S3",
        "2024",
        "OOPS Concepts in Java Lab",
    ],
    [
        "6",
        "2025-26",
        "CSE A",
        "S7",
        "2022",
        "Project Phase 1",
    ],
    [
        "7",
        "2025-26",
        "CSE",
        "S2",
        "2025",
        "Foundations of Computing: From Hardware Essentials to Web Design",
    ],
    [
        "8",
        "2025-26",
        "CSE C / CSE A",
        "S6",
        "2023",
        "Data Analytics",
    ],
    [
        "9",
        "2025-26",
        "CSE A",
        "S4",
        "2024",
        "Software Engineering",
    ],
    [
        "10",
        "2025-26",
        "CSE A",
        "S2",
        "2025",
        "IT Workshop",
    ],
    [
        "11",
        "2025-26",
        "CSE A",
        "S4",
        "2024",
        "CTSD",
    ],
];

const fdpPrograms = [
    {
        year: "2025",
        title:
            "Empowering Innovation: Mastering R Programming and AI Development Strategies",
    },
    {
        year: "2025",
        title: "Computer Vision with Vision Transformers",
    },
];

const profileSections = [
    { id: "about", label: "About" },
    { id: "research", label: "Research" },
    { id: "courses", label: "Courses" },
    { id: "fdp", label: "FDP Attended" },
    { id: "patent", label: "Patent" },
];

/* =========================================
   REUSABLE SECTION HEADING
========================================= */

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
                <span className="text-[11px] font-semibold tracking-[0.18em] text-[#927B4D]">
                    {number}
                </span>

                <span className="h-px w-8 bg-[#D2B87C]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#927B4D]">
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

/* =========================================
   REUSABLE DETAIL ITEM
========================================= */

function DetailItem({
    label,
    value,
}: {
    label: string;
    value: string;
}) {
    return (
        <div className="border-b border-[#EAE4D9] py-4 last:border-b-0">
            <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#927B4D]">
                {label}
            </p>

            <p className="mt-2 break-words text-sm leading-6 text-[#393947]">
                {value}
            </p>
        </div>
    );
}

/* =========================================
   REUSABLE DATA TABLE
========================================= */

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
                <table className="w-full min-w-[850px] border-collapse text-left">
                    <thead>
                        <tr className="bg-[#20235A]">
                            {headers.map((header) => (
                                <th
                                    key={header}
                                    className="px-4 py-4 text-[9px] font-semibold uppercase tracking-[0.13em] text-[#E5D4A9]"
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
                                            ? "font-semibold text-[#927B4D]"
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

/* =========================================
   MAIN FACULTY PROFILE PAGE
========================================= */

export default function ShinuJacobFacultyPage() {
    return (
        <>
            <SiteHeader />

            {/* =====================================
                PROFILE HERO
            ===================================== */}

            <section className="relative isolate overflow-hidden bg-[#20235A]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#20235A] via-[#20235A] to-[#171A43]" />

                {/* Decorative Elements */}
                <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-[#D2B87C]/15" />

                <div className="pointer-events-none absolute -right-6 -top-6 h-52 w-52 rounded-full border border-[#D2B87C]/15" />

                <div className="pointer-events-none absolute -bottom-40 left-1/3 h-80 w-80 rounded-full border border-white/5" />

                <div className="relative mx-auto max-w-7xl px-5 pb-14 pt-16 sm:px-8 sm:pb-16 sm:pt-20 lg:px-12 lg:pb-20 lg:pt-24">

                    <div className="flex items-center gap-3">
                        <span className="h-px w-10 bg-[#D2B87C]" />

                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C] sm:text-xs">
                            Faculty Profile
                        </p>
                    </div>

                    <div className="mt-7 grid gap-10 lg:grid-cols-[1fr_280px] lg:items-end">

                        {/* Faculty Information */}
                        <div>
                            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/50">
                                Department of Computer Science and Engineering
                            </p>

                            <h1 className="mt-4 font-serif text-4xl font-normal leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                                Mr. Shinu Jacob
                            </h1>

                            <p className="mt-3 font-serif text-lg italic text-[#D2B87C] sm:text-xl">
                                Assistant Professor
                            </p>

                            <div className="mt-7 flex flex-wrap gap-3">
                                <span className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80">
                                    M.E
                                </span>

                                <span className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80">
                                    B.E
                                </span>
                            </div>

                            <div className="mt-8 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#D2B87C]" />

                                <span className="text-[10px] uppercase tracking-[0.18em] text-white/50">
                                    NCERC Unique ID: 4317
                                </span>
                            </div>
                        </div>

                        {/* Academic Profile Card */}
                        <div className="border border-[#D2B87C]/35 bg-white/[0.04] p-6 backdrop-blur-sm">
                            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
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
                                            M.E, B.E
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

                                        <p className="mt-1 text-xs text-white/90">
                                            Artificial Intelligence
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
                                            Teaching Records
                                        </p>

                                        <p className="mt-1 text-xs text-white/90">
                                            11 Course Records
                                        </p>
                                    </div>
                                </div>

                            </div>

                            <a
                                href="#about"
                                className="mt-7 flex items-center justify-between border-t border-white/15 pt-4 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#D2B87C] transition-colors hover:text-white"
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

                {/* =====================================
                    PROFILE NAVIGATION
                ===================================== */}

                <div className="border-b border-[#EAE4D9] bg-white">
                    <div className="mx-auto flex max-w-7xl gap-6 overflow-x-auto px-5 py-4 sm:px-8 lg:px-12">
                        {profileSections.map((section) => (
                            <a
                                key={section.id}
                                href={`#${section.id}`}
                                className="shrink-0 text-[9px] font-semibold uppercase tracking-[0.13em] text-[#77747A] transition-colors hover:text-[#927B4D]"
                            >
                                {section.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* =====================================
                    01 - ABOUT SECTION
                ===================================== */}

                <section
                    id="about"
                    className="scroll-mt-24 bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_310px] lg:gap-16">

                        <div>
                            <SectionHeading
                                number="01"
                                eyebrow="Introduction"
                                title="About Mr. Shinu Jacob"
                                description="Academic background, teaching experience, and professional profile."
                            />

                            <div className="space-y-5 text-sm leading-8 text-[#55535B]">
                                <p>
                                    A dedicated and passionate Computer Science educator with a strong academic background and extensive teaching experience in schools, colleges, and technical institutions. With expertise in computer science subjects, ICT, database management, web design, and programming concepts, am committed to delivering quality education and inspiring students to achieve academic excellence.
                                </p>

                                <p>
                                    Over the years, I have successfully guided students through innovative teaching methods, interactive classroom activities, and technology-driven learning approaches. Known for excellent communication, mentoring abilities, and strong subject knowledge, I strive to create a positive and engaging learning environment that encourages creativity, critical thinking, and problem-solving skills.
                                </p>
                            </div>

                            {/* Researcher Profiles */}
                            <div className="mt-9">
                                <h3 className="mb-4 font-serif text-xl text-[#20235A]">
                                    Researcher Profiles
                                </h3>

                                <div className="grid gap-3 sm:grid-cols-2">
                                    {researcherProfiles.map((profile) => (
                                        <a
                                            key={profile.name}
                                            href={profile.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-between gap-3 border border-[#E5DED1] bg-white p-4 transition-colors hover:border-[#D2B87C] hover:bg-[#FAF7F2]"
                                        >
                                            <div className="min-w-0">
                                                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#20235A]">
                                                    {profile.name}
                                                </p>

                                                <p className="mt-1 text-[10px] leading-5 text-[#77747A]">
                                                    {profile.description}
                                                </p>
                                            </div>

                                            <ExternalLink
                                                size={15}
                                                className="shrink-0 text-[#927B4D]"
                                            />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Professional Details */}
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
                                value="Computer Science and Engineering"
                            />

                            {/* <DetailItem
                                label="Institution"
                                value="Nehru College of Engineering and Research Centre"
                            /> */}

                            {/* <DetailItem
                                label="Location"
                                value="Thrissur, Kerala"
                            /> */}

                            {/* <DetailItem
                                label="Qualification"
                                value="M.E, B.E"
                            /> */}

                            <DetailItem
                                label="Primary Research Interest"
                                value="Artificial Intelligence"
                            />

                            <DetailItem
                                label="NCERC Unique ID"
                                value="4317"
                            />
                        </aside>

                    </div>
                </section>

                {/* =====================================
                    02 - RESEARCH SECTION
                ===================================== */}

                <section
                    id="research"
                    className="scroll-mt-24 bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">

                        <SectionHeading
                            number="02"
                            eyebrow="Academic Exploration"
                            title="Research & Areas of Interest"
                            description="Research interests and technical domains that form the foundation of his academic work."
                        />

                        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">

                            {/* Research Interests */}
                            <div>
                                <div className="mb-5 flex items-center gap-3">
                                    <Microscope
                                        size={19}
                                        className="text-[#927B4D]"
                                        strokeWidth={1.5}
                                    />

                                    <h3 className="font-serif text-xl text-[#20235A]">
                                        Research Interests
                                    </h3>
                                </div>

                                <div className="grid gap-3 sm:grid-cols-2">
                                    {researchInterests.map(
                                        (interest, index) => (
                                            <div
                                                key={interest}
                                                className="flex items-start gap-4 border border-[#E8E1D5] bg-[#FAF7F2] p-5"
                                            >
                                                <span className="font-serif text-lg text-[#B49A66]">
                                                    {String(index + 1).padStart(
                                                        2,
                                                        "0"
                                                    )}
                                                </span>

                                                <p className="pt-1 text-sm leading-6 text-[#393947]">
                                                    {interest}
                                                </p>
                                            </div>
                                        )
                                    )}
                                </div>

                                <div className="mt-7 border-l-2 border-[#D2B87C] bg-[#FAF7F2] px-5 py-5">
                                    <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#927B4D]">
                                        Research Overview
                                    </p>

                                    <p className="mt-3 text-sm leading-7 text-[#55535B]">
                                        My research interests include Cyber Security and Data Science. I am interested in developing secure systems, protecting digital information, identifying cyber threats, and using data-driven techniques to solve complex problems. My focus also includes data analysis, predictive modeling, anomaly detection, and applying intelligent methods to enhance security and decision-making.
                                    </p>
                                </div>
                            </div>

                            {/* Areas of Interest */}
                            <div className="border border-[#E8E1D5] bg-[#20235A] p-6 sm:p-8">
                                <div className="flex items-center gap-3">
                                    <Lightbulb
                                        size={20}
                                        className="text-[#D2B87C]"
                                        strokeWidth={1.5}
                                    />

                                    <h3 className="font-serif text-xl text-white">
                                        Areas of Interest
                                    </h3>
                                </div>

                                <p className="mt-3 text-xs leading-6 text-white/55">
                                    Key technical domains associated with
                                    teaching, research, and academic interests.
                                </p>

                                <div className="mt-6 flex flex-wrap gap-2">
                                    {areasOfInterest.map((area) => (
                                        <span
                                            key={area}
                                            className="border border-[#D2B87C]/35 px-3 py-2 text-[10px] tracking-wide text-[#E9D9B5]"
                                        >
                                            {area}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-8 border-t border-white/15 pt-6">
                                    <div className="flex items-center gap-3">
                                        <Network
                                            size={19}
                                            className="text-[#D2B87C]"
                                            strokeWidth={1.5}
                                        />

                                        <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#D2B87C]">
                                            Primary Research Focus
                                        </p>
                                    </div>

                                    <p className="mt-3 font-serif text-2xl text-white">
                                        Artificial Intelligence
                                    </p>

                                    <p className="mt-2 text-sm leading-7 text-white/65">
                                        Exploring intelligent methods and
                                        data-driven approaches to address
                                        emerging computing challenges.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* =====================================
                    03 - COURSES HANDLED
                ===================================== */}

                <section
                    id="courses"
                    className="scroll-mt-24 bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">

                        <SectionHeading
                            number="03"
                            eyebrow="Teaching Experience"
                            title="Courses Handled"
                            description="Subjects handled across different academic years, streams, semesters, and batches."
                        />

                        <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <BookOpen
                                    size={18}
                                    className="text-[#927B4D]"
                                    strokeWidth={1.5}
                                />

                                <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#927B4D]">
                                    11 Course Records
                                </p>
                            </div>

                            <span className="border border-[#E5DED1] bg-white px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#77747A]">
                                Academic Years 2024–2026
                            </span>
                        </div>

                        <DataTable
                            headers={[
                                "Sl. No.",
                                "Academic Year",
                                "Stream",
                                "Semester",
                                "Batch",
                                "Subject",
                            ]}
                            rows={courses}
                        />

                        <p className="mt-4 text-[10px] leading-6 text-[#858078]">
                            Note: Course entries are arranged using the
                            available stream, semester, batch, and subject
                            details provided.
                        </p>

                    </div>
                </section>

                {/* =====================================
                    04 - FDP ATTENDED
                ===================================== */}

                <section
                    id="fdp"
                    className="scroll-mt-24 bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">

                        <SectionHeading
                            number="04"
                            eyebrow="Professional Development"
                            title="FDP Attended"
                            description="Faculty development programmes attended to strengthen academic and technical knowledge."
                        />

                        <div className="grid gap-5 md:grid-cols-2">
                            {fdpPrograms.map((program, index) => (
                                <article
                                    key={program.title}
                                    className="group border border-[#E8E1D5] bg-[#FAF7F2] p-6 transition-colors hover:border-[#D2B87C] sm:p-8"
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex h-11 w-11 items-center justify-center bg-white text-[#927B4D]">
                                            <Presentation
                                                size={20}
                                                strokeWidth={1.5}
                                            />
                                        </div>

                                        <span className="font-serif text-3xl text-[#D2B87C]">
                                            0{index + 1}
                                        </span>
                                    </div>

                                    <p className="mt-6 text-[9px] font-semibold uppercase tracking-[0.17em] text-[#927B4D]">
                                        Faculty Development Programme · {program.year}
                                    </p>

                                    <h3 className="mt-3 font-serif text-xl leading-snug text-[#20235A]">
                                        {program.title}
                                    </h3>

                                    <div className="mt-6 h-[2px] w-10 bg-[#D2B87C]" />
                                </article>
                            ))}
                        </div>

                    </div>
                </section>

                {/* =====================================
                    05 - PATENT PUBLICATION
                ===================================== */}

                <section
                    id="patent"
                    className="scroll-mt-24 bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">

                        <SectionHeading
                            number="05"
                            eyebrow="Research Contributions"
                            title="Patent Publication"
                            description="Published intellectual property contribution."
                        />

                        <article className="relative overflow-hidden border border-[#D2B87C]/35 bg-[#20235A] p-7 sm:p-10">

                            {/* Decorative Elements */}
                            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border border-[#D2B87C]/15" />

                            <div className="pointer-events-none absolute -right-5 -top-5 h-40 w-40 rounded-full border border-[#D2B87C]/15" />

                            <div className="relative">

                                <div className="flex flex-wrap items-center justify-between gap-5">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-12 w-12 items-center justify-center border border-[#D2B87C]/35 bg-white/[0.05] text-[#D2B87C]">
                                            <ShieldCheck
                                                size={23}
                                                strokeWidth={1.5}
                                            />
                                        </div>

                                        <div>
                                            <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#D2B87C]">
                                                Published Patent
                                            </p>

                                            <p className="mt-1 text-xs text-white/55">
                                                Intellectual Property Contribution
                                            </p>
                                        </div>
                                    </div>

                                    <span className="border border-[#D2B87C]/35 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#E9D9B5]">
                                        2026
                                    </span>
                                </div>

                                <div className="mt-8 max-w-4xl">
                                    <h3 className="font-serif text-2xl leading-snug text-white sm:text-3xl">
                                        Automated Employee Stress Prediction
                                        and Intervention Recommendation Using
                                        IoT and Deep Learning
                                    </h3>
                                </div>

                                <div className="mt-8 grid gap-6 border-t border-white/15 pt-6 sm:grid-cols-2">

                                    <div>
                                        <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#D2B87C]">
                                            Publication Date
                                        </p>

                                        <p className="mt-2 text-sm text-white/85">
                                            20 February 2026
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#D2B87C]">
                                            Published By
                                        </p>

                                        <p className="mt-2 text-sm text-white/85">
                                            IP India
                                        </p>
                                    </div>

                                </div>

                            </div>
                        </article>

                    </div>
                </section>

          

               

            </main>

            <FooterSection />
        </>
    );
}