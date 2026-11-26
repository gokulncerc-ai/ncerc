
"use client";

import React from "react";
import {
    ArrowDown,
    BookOpen,
    GraduationCap,
    Lightbulb,
    Microscope,
    ShieldCheck,
    UserRound,
    Award,
    FileText,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../../../DepartmentNav/DepartmentNavigation";

const researchInterests = [
    "Machine Learning",
    "Deep Learning",
    "Natural Language Processing (NLP)",
    "Graph Neural Networks (GNN)",
    "Cybersecurity & Ethical Hacking",
];

const keywords = [
    "Machine Learning",
    "Deep Learning",
    "Natural Language Processing",
    "Graph Neural Networks",
    "Cybersecurity",
];

const courses = [
    ["1", "2026", "B.Tech", "IV", "CSE (AI/ML)", "Database Management System"],
    ["2", "2026", "B.Tech", "IV", "CSE (AI/ML)", "Database Management System Lab"],
    ["3", "2026", "B.Tech", "II", "CSE (AI/ML)", "Introduction to Artificial Intelligence"],
    ["4", "2026", "B.Tech", "II", "CSE (AI/ML)", "IT Workshop"],
    ["5", "2025", "B.Tech", "I", "CSE (AI/ML)", "Algorithmic Thinking with Python"],
    ["6", "2025", "B.Tech", "I", "MTR", "Algorithmic Thinking with Python"],
    ["7", "2025", "B.Tech", "I", "ECE", "Algorithmic Thinking with Python"],
    ["8", "2025", "B.Tech", "I", "ECE", "Web and Graphic Design"],
    ["9", "—", "B.Tech", "I", "CSE-B", "Web and Graphic Design"],
];

const profileSections = [
    { id: "about", label: "About Me" },
    { id: "research", label: "Research" },
    { id: "courses", label: "Courses" },
    { id: "publications", label: "Publications & Patent" },
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

export default function AneeshaFacultyPage() {
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
                                Ms. Aneesha M H
                            </h1>

                            <p className="mt-3 font-serif text-lg italic text-[#D2B87C] sm:text-xl">
                                Assistant Professor
                            </p>

                            <div className="mt-7 flex flex-wrap gap-3">
                                <span className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80">
                                    M.Tech – Computer Science and Engineering
                                </span>
                            </div>

                            <div className="mt-8 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#D2B87C]" />
                                <span className="text-[10px] uppercase tracking-[0.18em] text-white/50">
                                    NCERC Unique ID: 4451
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
                                            M.Tech, B.E
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
                                            Machine Learning & Graph Neural Networks
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
                                            Courses Handled
                                        </p>
                                        <p className="mt-1 text-xs text-white/90">
                                            9 Course Entries
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
                                title="About Ms. Aneesha M H"
                                description="An introduction to her academic background, teaching approach, and professional interests."
                            />

                            <div className="space-y-5 text-sm leading-8 text-[#55535B]">
                                <p>
                                    I am Ms. Aneesha M H, an Assistant Professor in the Department of CSE (AI & ML) at Nehru
                                    College of Engineering, Pampady. I hold an M.Tech in Computer Science and Engineering
                                    from APJ Abdul Kalam Technological University with a strong academic record.
                                </p>

                                <p>
                                    I am passionate about teaching, research, and applying emerging technologies to solve realworld problems. My areas of interest include Machine Learning, Deep Learning and Natural
                                    Language Processing. I strive to create an engaging learning environment that bridges
                                    theoretical concepts with practical implementation.

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
                                value="CSE (AI & ML)"
                            />
                            <DetailItem
                                label="Qualification"
                                value="M.Tech – Computer Science and Engineering"
                            />
                            <DetailItem
                                label="NCERC Unique ID"
                                value="4451"
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
                            description="Academic qualifications and research work supporting her teaching and research interests."
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
                                        M.Tech – Computer Science and Engineering
                                    </h3>
                                    <p className="mt-2 text-sm leading-7 text-[#55535B]">
                                        NSS College of Engineering, under APJ
                                        Abdul Kalam Technological University.
                                    </p>
                                    <p className="mt-2 text-xs text-[#927B4D]">
                                        CGPA: 8.84
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
                                        B.E – Computer Science and Engineering
                                    </h3>
                                    <p className="mt-2 text-sm leading-7 text-[#55535B]">
                                        Anna University.
                                    </p>
                                    <p className="mt-2 text-xs text-[#927B4D]">
                                        CGPA: 8.30
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
                                        Research Focus
                                    </h3>
                                </div>

                                <p className="mt-4 text-sm leading-8 text-[#55535B]">
                                    Her academic work focuses on advanced machine learning techniques, particularly Graph
                                    Neural Networks (GNNs), and their applications in healthcare and predictive analytics.
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
                            description="Courses handled across different academic years, programmes, semesters, and branches."
                        />

                        <div className="mb-5 flex items-center gap-3">
                            <BookOpen
                                size={18}
                                className="text-[#927B4D]"
                                strokeWidth={1.5}
                            />
                            <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                9 Course Entries Listed
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

                {/* Publications & Patent Section */}
                <section
                    id="publications"
                    className="scroll-mt-24 bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="04"
                            eyebrow="Research Contributions"
                            title="Publications & Patent"
                            description="Patent publication and conference research contribution."
                        />

                        {/* Patent */}
                        <div className="mb-12">
                            <div className="mb-5 flex items-center gap-3">
                                <ShieldCheck
                                    size={19}
                                    className="text-[#927B4D]"
                                    strokeWidth={1.5}
                                />
                                <h3 className="font-serif text-xl text-[#20235A]">
                                    Patent Publication
                                </h3>
                            </div>

                            <div className="border border-[#E8E1D5] bg-[#FAF7F2] p-6 sm:p-8">
                                <div className="flex flex-wrap items-center justify-between gap-3">
                                    <span className="text-[9px] font-medium uppercase tracking-[0.16em] text-[#927B4D]">
                                        Patent · 2026
                                    </span>
                                    <span className="border border-[#D8CDB8] bg-white px-3 py-1.5 text-[9px] uppercase tracking-[0.12em] text-[#77747A]">
                                        IP India
                                    </span>
                                </div>

                                <h4 className="mt-5 font-serif text-xl leading-relaxed text-[#20235A] sm:text-2xl">
                                    Automated Employee Stress Prediction and
                                    Intervention Recommendation Using IoT and
                                    Deep Learning
                                </h4>

                                <div className="mt-6 grid gap-5 border-t border-[#E5DED1] pt-5 sm:grid-cols-2">
                                    <div>
                                        <p className="text-[9px] font-medium uppercase tracking-[0.14em] text-[#927B4D]">
                                            Publication Date
                                        </p>
                                        <p className="mt-2 text-sm text-[#55535B]">
                                            20.02.2026
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-[9px] font-medium uppercase tracking-[0.14em] text-[#927B4D]">
                                            Published By
                                        </p>
                                        <p className="mt-2 text-sm text-[#55535B]">
                                            IP India
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Conference Publication */}
                        <div>
                            <div className="mb-5 flex items-center gap-3">
                                <FileText
                                    size={19}
                                    className="text-[#927B4D]"
                                    strokeWidth={1.5}
                                />
                                <h3 className="font-serif text-xl text-[#20235A]">
                                    Conference Publication
                                </h3>
                            </div>

                            <DataTable
                                headers={[
                                    "Sl. No.",
                                    "Title",
                                    "Conference",
                                    "Publisher",
                                    "Type",
                                    "Year",
                                ]}
                                rows={[
                                    [
                                        "1",
                                        "Predictive Analysis of Drug Impact Using GNN Models",
                                        "SocProS 2025",
                                        "Indian Institute of Technology Roorkee",
                                        "Book of Abstract",
                                        "2025",
                                    ],
                                ]}
                            />
                        </div>
                    </div>
                </section>

                {/* Achievements & Certifications */}
                <section
                    id="achievements"
                    className="scroll-mt-24 bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="05"
                            eyebrow="Professional Recognition"
                            title="Achievements & Certifications"
                            description="Academic presentations and professional certifications."
                        />

                        <div className="grid gap-5 md:grid-cols-2">
                            <article className="flex gap-5 border border-[#E8E1D5] bg-white p-6 transition-colors hover:border-[#D2B87C] sm:p-7">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#F5F0E6] text-[#927B4D]">
                                    <Award
                                        size={21}
                                        strokeWidth={1.5}
                                    />
                                </div>

                                <div>
                                    <p className="text-[9px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                        Research Presentation
                                    </p>
                                    <h3 className="mt-2 font-serif text-lg leading-relaxed text-[#20235A]">
                                        13th International Conference on Soft
                                        Computing for Problem Solving
                                    </h3>
                                    <p className="mt-2 text-sm leading-7 text-[#69666B]">
                                        Presented research at SocProS 2025,
                                        Indian Institute of Technology
                                        Roorkee.
                                    </p>
                                </div>
                            </article>

                            <article className="flex gap-5 border border-[#E8E1D5] bg-white p-6 transition-colors hover:border-[#D2B87C] sm:p-7">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#F5F0E6] text-[#927B4D]">
                                    <GraduationCap
                                        size={21}
                                        strokeWidth={1.5}
                                    />
                                </div>

                                <div>
                                    <p className="text-[9px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                        Professional Certifications
                                    </p>
                                    <h3 className="mt-2 font-serif text-lg leading-relaxed text-[#20235A]">
                                        NPTEL Certifications
                                    </h3>
                                    <ul className="mt-3 space-y-2 text-sm leading-7 text-[#69666B]">
                                        <li className="flex items-start gap-2">
                                            <span className="mt-3 h-1 w-1 shrink-0 rounded-full bg-[#B49A66]" />
                                            Ethical Hacking
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="mt-3 h-1 w-1 shrink-0 rounded-full bg-[#B49A66]" />
                                            Big Data Computing
                                        </li>
                                    </ul>
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
