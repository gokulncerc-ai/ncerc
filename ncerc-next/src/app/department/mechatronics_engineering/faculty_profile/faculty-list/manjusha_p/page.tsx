
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
    IdCard,
    FlaskConical,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../../../DepartmentsNavigation/DepartmentsNavigation";

const researchInterests = [
    "Artificial Intelligence in Sensing Systems",
    "Terahertz Biosensing",
    "Robotics and Automation",
    "Intelligent Control Systems",
    "Embedded Systems",
    "Signal Processing",
    "Smart Sensors and Actuators",
];

const keywords = [
    "AI-enabled Sensing",
    "Terahertz Technology",
    "Biosensors",
    "Intelligent Systems",
    "Robotics",
    "Automation",
    "Machine Learning",
    "Smart Sensing",
    "Signal Processing",
    "Embedded Control",
    "Advanced Diagnostics",
];

const courses = [
    ["1", "2026", "B.Tech", "S6", "Mechatronics", "Robotics and Automation"],
    ["2", "2026", "B.Tech", "S5", "Mechatronics", "Linear Control Systems"],
    ["3", "2025", "B.Tech", "S4", "Mechatronics", "Sensors and Actuators"],
    ["4", "2026", "B.Tech", "S6", "Mechatronics", "Advanced Microprocessors and Controllers"],
    ["5", "2013", "B.Tech", "S5", "Mechatronics", "Digital Electronics"],
    ["6", "2013", "B.Tech", "S6", "Mechatronics", "Digital Signal Processing"],
];

const publications = [
    {
        year: "2026",
        title: "Automated Oil Skimmer Boat",
        details: [
            "Registration ID: IJCRT_303098",
            "Paper ID: IJCRT2603436",
        ],
        type: "Research Publication",
    },
    {
        year: "2025",
        title: "Enhanced Automated Green House System Using ESP32",
        details: [
            "Paper ID: IJCRT2503815",
            "Registration ID: 279622",
        ],
        type: "Research Publication",
    },
];

const patents = [
    [
        "2024",
        "16/05/2024",
        "ARTIFICIAL INTELLIGENCE BASED DEVICE FOR ANALYSIS OF METABOLIC DISORDERS",
        "16/07/2024",
        "417163-001",
    ],
];

const profileSections = [
    { id: "about", label: "About Me" },
    { id: "research", label: "Research" },
    { id: "courses", label: "Courses" },
    { id: "publications", label: "Publications" },
    { id: "patent", label: "Patent" },
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
                <table className="w-full min-w-[760px] border-collapse text-left">
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

export default function ManjushaFacultyPage() {
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
                                Department of Mechatronics Engineering
                            </p>

                            <h1 className="mt-4 font-serif text-4xl font-normal leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                                Ms. Manjusha P
                            </h1>

                            <p className="mt-3 font-serif text-lg italic text-[#D2B87C] sm:text-xl">
                                Assistant Professor
                            </p>

                            <div className="mt-7 flex flex-wrap gap-3">
                                <span className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80">
                                    Ph.D. – Pursuing
                                </span>
                                <span className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80">
                                    M.E – VLSI Design
                                </span>
                                <span className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80">
                                    B.E – Electronics and Communication Engineering
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
                                            Ph.D. Pursuing, M.E, B.E
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
                                        <p className="mt-1 text-xs leading-5 text-white/90">
                                            AI-enabled Terahertz Biosensing
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
                                            Academic Experience
                                        </p>
                                        <p className="mt-1 text-xs text-white/90">
                                            8+ Years of Teaching
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
                                title="About Ms. Manjusha P"
                                description="An overview of her academic background, teaching experience, and research interests."
                            />

                            <div className="space-y-5 text-sm leading-8 text-[#55535B]">
                                <p>
                                    Ms. Manjusha P is an Assistant Professor in the Department of Mechatronics Engineering at Nehru College of Engineering and Research Centre (NCERC), with over 8 years of teaching experience. She is actively involved in undergraduate teaching, student mentoring, and academic development activities.
                                </p>

                                <p>
                                    She has contributed to organizing and coordinating workshops, technical events, and academic programs in emerging interdisciplinary domains such as robotics, automation, and intelligent systems.
                                </p>

                                <p>
                                    She is currently pursuing her Ph.D. at MGR Educational and Research Institute, Chennai. Her research focuses on AI-enabled high-performance terahertz biosensing, aiming to develop advanced sensing technologies by integrating artificial intelligence with next-generation terahertz systems for biomedical and diagnostic applications.
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
                                value="Mechatronics Engineering"
                            />
                            <DetailItem
                                label="Teaching Experience"
                                value="Over 8 Years"
                            />
                            <DetailItem
                                label="Doctoral Institution"
                                value="MGR Educational and Research Institute, Chennai"
                            />
                            <DetailItem
                                label="Research Domain"
                                value="AI-enabled High-performance Terahertz Biosensing"
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
                            description="Academic qualifications, doctoral research, and areas of specialisation."
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
                                        Ph.D. – Pursuing
                                    </h3>
                                    <p className="mt-2 text-sm leading-7 text-[#55535B]">
                                        MGR Educational and Research Institute,
                                        Chennai.
                                    </p>
                                    <p className="mt-2 text-sm leading-7 text-[#55535B]">
                                        Research focus: AI-enabled
                                        high-performance terahertz biosensing.
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
                                            Postgraduate Qualification
                                        </p>
                                    </div>

                                    <h3 className="mt-3 font-serif text-xl text-[#20235A]">
                                        M.E – VLSI Design
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
                                        B.E – Electronics and Communication
                                        Engineering
                                    </h3>
                                </div>
                            </div>

                            <div className="border border-[#E8E1D5] bg-[#FAF7F2] p-6 sm:p-8">
                                <div className="flex items-center gap-3">
                                    <FlaskConical
                                        size={20}
                                        className="text-[#927B4D]"
                                        strokeWidth={1.5}
                                    />
                                    <h3 className="font-serif text-xl text-[#20235A]">
                                        Research Focus
                                    </h3>
                                </div>

                                <p className="mt-4 text-sm leading-8 text-[#55535B]">
                                    Her research focuses on AI-enabled
                                    high-performance terahertz biosensing,
                                    integrating artificial intelligence with
                                    next-generation terahertz systems for
                                    biomedical and diagnostic applications.
                                </p>

                                <div className="mt-6 border-t border-[#E5DED1] pt-5">
                                    <p className="text-[9px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                        Key Research Areas
                                    </p>

                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {keywords.map((keyword) => (
                                            <span
                                                key={keyword}
                                                className="border border-[#D8CDB8] bg-white px-3 py-2 text-[10px] tracking-wide text-[#55535B]"
                                            >
                                                {keyword}
                                            </span>
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
                        </div>

                        {/* Area of Interest */}
                        <div className="mt-12 border-l-2 border-[#D2B87C] bg-[#FAF7F2] px-6 py-6 sm:px-8">
                            <p className="text-[9px] font-medium uppercase tracking-[0.17em] text-[#927B4D]">
                                Area of Interest
                            </p>
                            <p className="mt-3 text-sm leading-7 text-[#55535B]">
                                AI-enabled Terahertz Biosensing, Intelligent
                                Sensing Systems, Signal Processing, Embedded
                                Systems, Robotics and Automation.
                            </p>

                            <div className="mt-5 border-t border-[#E5DED1] pt-5">
                                <p className="text-[9px] font-medium uppercase tracking-[0.17em] text-[#927B4D]">
                                    Additional Areas
                                </p>
                                <p className="mt-3 text-sm leading-7 text-[#55535B]">
                                    AI-based Biosensing, Robotics and
                                    Automation, Sensors and Actuators, Control
                                    Systems, Advanced Microprocessors and
                                    Controllers, Digital Signal Processing.
                                </p>
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
                            description="Courses handled across different academic years, semesters, and engineering subjects."
                        />

                        <div className="mb-5 flex items-center gap-3">
                            <BookOpen
                                size={18}
                                className="text-[#927B4D]"
                                strokeWidth={1.5}
                            />
                            <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                6 Course Entries Listed
                            </p>
                        </div>

                        <DataTable
                            headers={[
                                "Sl. No.",
                                "Year",
                                "Stream",
                                "Sem",
                                "Branch",
                                "Subject",
                            ]}
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
                            title="Publications – Conference & Journal"
                            description="Research papers and technical contributions in automation, intelligent systems, and embedded applications."
                        />

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
                                2 Publications
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
                                            {publication.type}
                                        </span>
                                    </div>

                                    <h3 className="mt-5 font-serif text-lg leading-7 text-[#20235A]">
                                        {publication.title}
                                    </h3>

                                    <div className="mt-4 space-y-2">
                                        {publication.details.map((detail) => (
                                            <p
                                                key={detail}
                                                className="text-sm leading-7 text-[#55535B]"
                                            >
                                                {detail}
                                            </p>
                                        ))}
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Patent Section */}
                <section
                    id="patent"
                    className="scroll-mt-24 bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="05"
                            eyebrow="Intellectual Property"
                            title="Publication of Patent"
                            description="Patent publication details and the associated invention."
                        />

                        <div className="mb-5 flex items-center gap-3">
                            <Award
                                size={19}
                                className="text-[#927B4D]"
                                strokeWidth={1.5}
                            />
                            <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                Patent Details
                            </p>
                        </div>

                        <DataTable
                            headers={[
                                "Year",
                                "Date of Submission",
                                "Title of the Invention",
                                "Published On",
                                "Application No.",
                            ]}
                            rows={patents}
                        />

                        <div className="mt-10 border-l-2 border-[#D2B87C] bg-white px-6 py-6 sm:px-8">
                            <div className="flex items-center gap-3">
                                <IdCard
                                    size={19}
                                    className="text-[#927B4D]"
                                    strokeWidth={1.5}
                                />
                                <h3 className="font-serif text-xl text-[#20235A]">
                                    Patent Research Area
                                </h3>
                            </div>

                            <p className="mt-4 text-sm leading-8 text-[#55535B]">
                                Artificial Intelligence Based Device for
                                Analysis of Metabolic Disorders.
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            <FooterSection />
        </>
    );
}
