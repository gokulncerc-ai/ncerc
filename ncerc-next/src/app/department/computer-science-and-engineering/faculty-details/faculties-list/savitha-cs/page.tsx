"use client";

import Link from "next/link";
import {
    ArrowDown,
    Award,
    BookOpen,
    GraduationCap,
    Lightbulb,
    Microscope,
    ShieldCheck,
    UserRound,
    Presentation,
    Network,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../../../DepartmentNav/DepartmentNavigation";

/* =========================================
   FACULTY PROFILE DATA
========================================= */

const researchInterests = [
    "Computer Networks",
    "Network Security",
    "Cyber Security",
    "Cryptography",
];

const areasOfInterest = [
    "Computer Networks",
    "Network Security",
    "Cyber Security",
    "Cloud Computing",
    "Internet of Things (IoT)",
];

const courses = [
    // Academic Year 2024-25
    [
        "1",
        "2024-25",
        "CSE A",
        "S2",
        "2024",
        "Foundations of Computing: From Hardware Essentials to Web Design",
    ],
    [
        "2",
        "2024-25",
        "CSE B",
        "S2",
        "2024",
        "Foundations of Computing: From Hardware Essentials to Web Design",
    ],
    [
        "3",
        "2024-25",
        "AI & ML",
        "S2",
        "2024",
        "Foundations of Computing: From Hardware Essentials to Web Design",
    ],
    [
        "4",
        "2024-25",
        "CSE A",
        "S2",
        "2024",
        "IT Workshop",
    ],
    [
        "5",
        "2024-25",
        "CSE B",
        "S2",
        "2024",
        "IT Workshop",
    ],
    [
        "6",
        "2024-25",
        "AI & ML",
        "S2",
        "2024",
        "IT Workshop",
    ],

    // Academic Year 2025-26
    [
        "7",
        "2025-26",
        "CSE A",
        "S1",
        "2025",
        "Algorithmic Thinking with Python",
    ],
    [
        "8",
        "2025-26",
        "CSE B",
        "S1",
        "2025",
        "Algorithmic Thinking with Python",
    ],
    [
        "9",
        "2025-26",
        "ME",
        "S1",
        "2025",
        "Algorithmic Thinking with Python",
    ],

    [
        "10",
        "2025-26",
        "CSE",
        "S2",
        "2025",
        "Foundations of Computing: From Hardware Essentials to Web Design",
    ],
    [
        "11",
        "2025-26",
        "CSE",
        "S8",
        "2022",
        "Client Server Architecture",
    ],
    [
        "12",
        "2025-26",
        "CSE",
        "S6",
        "2023",
        "Networking Lab",
    ],
    [
        "13",
        "2025-26",
        "CSE",
        "S2",
        "2025",
        "IT Workshop",
    ],
    [
        "14",
        "2025-26",
        "CSE",
        "S2",
        "2025",
        "IT Workshop",
    ],
    [
        "15",
        "2025-26",
        "CSE",
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
    { id: "academic-contributions", label: "Other Contributions" },
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

export default function SavithaFacultyPage() {
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
                                Ms. Savitha C S
                            </h1>

                            <p className="mt-3 font-serif text-lg italic text-[#D2B87C] sm:text-xl">
                                Assistant Professor
                            </p>

                            <div className="mt-7 flex flex-wrap gap-3">
                                <span className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80">
                                    M.Tech – Network Engineering
                                </span>

                                <span className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80">
                                    B.Tech – University of Calicut
                                </span>
                            </div>

                            <div className="mt-8 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#D2B87C]" />

                                <span className="text-[10px] uppercase tracking-[0.18em] text-white/50">
                                    NCERC Unique ID: 4354
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
                                            M.Tech, B.Tech
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
                                            Networks & Cyber Security
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
                                            15 Course Records
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
                                title="About Ms. Savitha C S"
                                description="Academic background, professional experience, and teaching interests."
                            />

                            <div className="space-y-5 text-sm leading-8 text-[#55535B]">
                                <p>
                                    A dedicated and motivated academic professional with a Master of Technology (M.Tech) in Network Engineering from Government Engineering College, Barton Hill, under APJ Abdul Kalam Technological University (CGPA: 8.3/10). Holds a Bachelor of Technology (B.Tech) degree from the University of Calicut.
                                </p>

                                <p>
                                    Possesses industry experience as an IT Support Engineer at Kalyan Silks Pvt. Ltd., Thrissur, with strong technical and problem-solving skills. Skilled in programming languages such as C and Java, database management using MySQL, and familiar with tools like NetBeans, LaTeX, and MS Office.
                                </p>

                                <p>
                                    Demonstrates good communication skills, effective classroom management, and the ability to present concepts clearly. Passionate about teaching, continuous learning, and contributing to the academic growth and development of students.
                                </p>
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
                                label="Postgraduate Qualification"
                                value="M.Tech in Network Engineering"
                            /> */}

                            {/* <DetailItem
                                label="Postgraduate Institution"
                                value="Government Engineering College, Barton Hill"
                            /> */}

                            {/* <DetailItem
                                label="University"
                                value="APJ Abdul Kalam Technological University"
                            /> */}

                            {/* <DetailItem
                                label="M.Tech CGPA"
                                value="8.3 / 10"
                            /> */}

                            {/* <DetailItem
                                label="Undergraduate Qualification"
                                value="B.Tech – University of Calicut"
                            /> */}

                            <DetailItem
                                label="Industry Experience"
                                value="IT Support Engineer – Kalyan Silks Pvt. Ltd., Thrissur"
                            />

                            <DetailItem
                                label="NCERC Unique ID"
                                value="4354"
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
                            description="Research interests and technical areas that form the foundation of her academic work."
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
                                        My research interests include Computer Networks and Network Security, with a focus on improving secure communication systems. I am interested in Cyber Security and Cryptography for protecting data and preventing cyber threats.

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
                                            Technical Focus
                                        </p>
                                    </div>

                                    <p className="mt-3 text-sm leading-7 text-white/75">
                                        Developing secure and efficient
                                        systems through networking,
                                        cybersecurity, cloud computing,
                                        and connected technologies.
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
                            description="Subjects handled across different academic years, programmes, semesters, and batches."
                        />

                        <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <BookOpen
                                    size={18}
                                    className="text-[#927B4D]"
                                    strokeWidth={1.5}
                                />

                                <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#927B4D]">
                                    15 Teaching Records
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
                            Note: The course records are presented according
                            to the academic year, stream, semester, batch,
                            and subject information provided.
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

                {/* =====================================
                    06 - OTHER ACADEMIC CONTRIBUTIONS
                ===================================== */}

                <section
                    id="academic-contributions"
                    className="scroll-mt-24 bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">

                        <SectionHeading
                            number="06"
                            eyebrow="Additional Learning"
                            title="Workshops & Certifications"
                            description="Professional learning activities and technical workshops attended."
                        />

                        <div className="grid gap-5 md:grid-cols-2">

                            {/* NPTEL Certification */}
                            <article className="border border-[#E8E1D5] bg-[#FAF7F2] p-6 sm:p-8">
                                <div className="flex h-11 w-11 items-center justify-center bg-white text-[#927B4D]">
                                    <GraduationCap
                                        size={21}
                                        strokeWidth={1.5}
                                    />
                                </div>

                                <p className="mt-6 text-[9px] font-semibold uppercase tracking-[0.17em] text-[#927B4D]">
                                    NPTEL Certification
                                </p>

                                <h3 className="mt-3 font-serif text-xl leading-snug text-[#20235A]">
                                    Computer Architecture and Theory of Computation
                                </h3>

                                <p className="mt-4 text-xs leading-7 text-[#69666B]">
                                    Certified in Computer Architecture and
                                    Theory of Computation, conducted by
                                    NPTEL in partnership with IIT Kanpur.
                                </p>

                                <div className="mt-6 h-[2px] w-10 bg-[#D2B87C]" />
                            </article>

                            {/* National Workshop */}
                            <article className="border border-[#E8E1D5] bg-[#FAF7F2] p-6 sm:p-8">
                                <div className="flex h-11 w-11 items-center justify-center bg-white text-[#927B4D]">
                                    <Award
                                        size={21}
                                        strokeWidth={1.5}
                                    />
                                </div>

                                <p className="mt-6 text-[9px] font-semibold uppercase tracking-[0.17em] text-[#927B4D]">
                                    National Level Workshop
                                </p>

                                <h3 className="mt-3 font-serif text-xl leading-snug text-[#20235A]">
                                    Hands-on Experience in PIC Microcontroller
                                </h3>

                                <p className="mt-4 text-xs leading-7 text-[#69666B]">
                                    Attended a two-day national-level
                                    workshop on hands-on experience in
                                    PIC Microcontroller.
                                </p>

                                <div className="mt-6 h-[2px] w-10 bg-[#D2B87C]" />
                            </article>

                        </div>

                    </div>
                </section>





            </main>

            <FooterSection />
        </>
    );
}