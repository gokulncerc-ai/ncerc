
"use client";

import React from "react";
import {
    ArrowDown,
    BookOpen,
    GraduationCap,
    Lightbulb,
    Microscope,
    UserRound,
    IdCard,
    Building2,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import DepartmentNavigation from "../../../departmentnavigation/DepartmentNavigation";

type Course = {
    slNo: number;
    year: string;
    stream: string;
    sem: string;
    branch: string;
    subject: string;
};

const courses: Course[] = [
    {
        slNo: 1,
        year: "2026",
        stream: "B.Tech",
        sem: "S2",
        branch: "ME",
        subject: "Vector Calculus, Differential Equations and Transforms",
    },
    {
        slNo: 2,
        year: "2026",
        stream: "B.Tech",
        sem: "S4",
        branch: "CSE",
        subject: "Mathematics IV for CSE",
    },
    {
        slNo: 3,
        year: "2025",
        stream: "B.Tech",
        sem: "S3",
        branch: "AIML",
        subject: "Mathematics III for AIML",
    },
    {
        slNo: 4,
        year: "2025",
        stream: "B.Tech",
        sem: "S3",
        branch: "MTR",
        subject: "Mathematics III for MTR",
    },
    {
        slNo: 5,
        year: "2025",
        stream: "B.Tech",
        sem: "S3",
        branch: "ME",
        subject: "Mathematics III for ME",
    },
];

const researchInterests = [
    "Calculus",
    "Abstract Algebra",
];

const keywords = [
    "Mathematical Modelling",
    "Numerical Methods",
    "Applied Mathematics",
    "Data Analysis",
    "Optimization",
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
                <span className="font-serif text-sm text-[#927B4D]">
                    {number}
                </span>
                <span className="h-px w-9 bg-[#D2B87C]" />
                <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#927B4D]">
                    {eyebrow}
                </span>
            </div>

            <h2 className="font-serif text-2xl font-normal leading-tight text-[#20235A] sm:text-3xl">
                {title}
            </h2>

            {description && (
                <p className="mt-3 max-w-2xl text-sm leading-7 text-[#77747A]">
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
    value: React.ReactNode;
}) {
    return (
        <div className="border-b border-[#EAE4D9] py-4 last:border-b-0">
            <p className="mb-1.5 text-[9px] font-medium uppercase tracking-[0.18em] text-[#927B4D]">
                {label}
            </p>
            <div className="text-sm leading-6 text-[#55535B]">
                {value}
            </div>
        </div>
    );
}

function DataTable({
    headers,
    rows,
}: {
    headers: string[];
    rows: React.ReactNode[][];
}) {
    return (
        <div className="overflow-hidden border border-[#E6DFD3] bg-white">
            <div className="overflow-x-auto">
                <table className="w-full min-w-[700px] border-collapse text-left">
                    <thead>
                        <tr className="bg-[#20235A]">
                            {headers.map((header, index) => (
                                <th
                                    key={index}
                                    className="px-4 py-4 text-[9px] font-medium uppercase tracking-[0.15em] text-[#D2B87C]"
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
                                className={
                                    rowIndex % 2 === 0
                                        ? "bg-white"
                                        : "bg-[#FAF7F2]"
                                }
                            >
                                {row.map((cell, cellIndex) => (
                                    <td
                                        key={cellIndex}
                                        className={`border-b border-[#EAE4D9] px-4 py-4 text-xs leading-6 text-[#55535B] ${cellIndex === 0
                                            ? "font-medium text-[#927B4D]"
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

export default function GreeshmaKPFacultyPage() {
    const courseRows = courses.map((course) => [
        course.slNo,
        course.year,
        course.stream,
        course.sem,
        course.branch,
        course.subject,
    ]);

    return (
        <>
            <SiteHeader />

            {/* Hero Section */}
            <section className="relative isolate overflow-hidden bg-[#20235A] text-[#FAF7F2]">
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#20235A] via-[#20235A] to-[#171A43]" />

                <div className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full border border-[#D2B87C]/15" />
                <div className="pointer-events-none absolute -right-12 -top-20 h-72 w-72 rounded-full border border-[#D2B87C]/10" />
                <div className="pointer-events-none absolute -bottom-36 -left-24 h-80 w-80 rounded-full border border-[#D2B87C]/10" />

                <div className="mx-auto max-w-7xl px-5 pb-14 pt-16 sm:px-8 lg:px-10 lg:pb-20 lg:pt-24">
                    <div className="mb-8 flex items-center gap-3">
                        <span className="h-px w-10 bg-[#D2B87C]" />
                        <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#D2B87C]">
                            Faculty Profile
                        </p>
                    </div>

                    <div className="grid gap-12 lg:grid-cols-[1fr_280px] lg:items-end">
                        <div>
                            <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-white/55">
                                Department of Mathematics
                            </p>

                            <h1 className="max-w-4xl font-serif text-4xl font-normal leading-[1.12] tracking-tight text-[#FAF7F2] sm:text-5xl lg:text-[68px]">
                                Ms. Greeshma K P
                            </h1>

                            <p className="mt-5 font-serif text-xl italic text-[#D2B87C] sm:text-2xl">
                                Assistant Professor
                            </p>

                            <div className="mt-8 flex flex-wrap gap-2">
                                {["M.Sc Mathematics", "B.Ed"].map(
                                    (qualification) => (
                                        <span
                                            key={qualification}
                                            className="border border-white/20 bg-white/[0.04] px-4 py-2 text-[10px] tracking-wide text-white/80"
                                        >
                                            {qualification}
                                        </span>
                                    )
                                )}
                            </div>

                            <div className="mt-8 flex items-center gap-3">
                                <IdCard
                                    size={17}
                                    className="text-[#D2B87C]"
                                    strokeWidth={1.4}
                                />
                                <span className="text-[10px] uppercase tracking-[0.16em] text-white/50">
                                    NCERC Unique ID
                                </span>
                                <span className="text-sm text-[#FAF7F2]">
                                    4423
                                </span>
                            </div>
                        </div>

                        <div className="border border-[#D2B87C]/35 bg-white/[0.04] p-6">
                            <p className="mb-6 text-[9px] font-medium uppercase tracking-[0.2em] text-[#D2B87C]">
                                Academic Overview
                            </p>

                            <div className="space-y-5">
                                <div className="flex items-start gap-3">
                                    <GraduationCap
                                        size={18}
                                        className="mt-0.5 shrink-0 text-[#D2B87C]"
                                        strokeWidth={1.4}
                                    />
                                    <div>
                                        <p className="text-[9px] uppercase tracking-[0.15em] text-white/45">
                                            Qualification
                                        </p>
                                        <p className="mt-1 text-sm text-white/85">
                                            M.Sc Mathematics, B.Ed
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Building2
                                        size={18}
                                        className="mt-0.5 shrink-0 text-[#D2B87C]"
                                        strokeWidth={1.4}
                                    />
                                    <div>
                                        <p className="text-[9px] uppercase tracking-[0.15em] text-white/45">
                                            Department
                                        </p>
                                        <p className="mt-1 text-sm leading-6 text-white/85">
                                            Department of Mathematics
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <BookOpen
                                        size={18}
                                        className="mt-0.5 shrink-0 text-[#D2B87C]"
                                        strokeWidth={1.4}
                                    />
                                    <div>
                                        <p className="text-[9px] uppercase tracking-[0.15em] text-white/45">
                                            Teaching Background
                                        </p>
                                        <p className="mt-1 text-sm leading-6 text-white/85">
                                            High School, Higher Secondary and Collegiate
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Lightbulb
                                        size={18}
                                        className="mt-0.5 shrink-0 text-[#D2B87C]"
                                        strokeWidth={1.4}
                                    />
                                    <div>
                                        <p className="text-[9px] uppercase tracking-[0.15em] text-white/45">
                                            Area of Interest
                                        </p>
                                        <p className="mt-1 text-sm leading-6 text-white/85">
                                            Logic and Calculus
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <a
                                href="#about"
                                className="mt-7 flex items-center justify-between border-t border-white/15 pt-5 text-[10px] uppercase tracking-[0.17em] text-[#D2B87C] transition-colors hover:text-white"
                            >
                                Explore Profile
                                <ArrowDown size={15} strokeWidth={1.5} />
                            </a>
                        </div>
                    </div>

                    <div className="mt-14 h-px w-full bg-gradient-to-r from-[#D2B87C]/70 via-[#D2B87C]/20 to-transparent" />
                </div>
            </section>

            <main className="bg-white [&_p]:text-justify">
                <DepartmentNavigation />

                {/* Profile Navigation */}
                <div className="sticky top-0 z-30 border-b border-[#E6DFD3] bg-white/95 backdrop-blur-md">
                    <div className="mx-auto flex max-w-7xl gap-7 overflow-x-auto px-5 py-4 sm:px-8 lg:px-10">
                        {[
                            ["About Me", "#about"],
                            ["Research", "#research"],
                            ["Courses", "#courses"],
                        ].map(([label, href]) => (
                            <a
                                key={href}
                                href={href}
                                className="shrink-0 text-[9px] font-medium uppercase tracking-[0.15em] text-[#77747A] transition-colors hover:text-[#927B4D]"
                            >
                                {label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* About Section */}
                <section
                    id="about"
                    className="scroll-mt-16 bg-[#FAF7F2] px-5 py-16 sm:px-8 lg:px-10 lg:py-20"
                >
                    <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_310px] lg:gap-20">
                        <div>
                            <SectionHeading
                                number="01"
                                eyebrow="Introduction"
                                title="About Me"
                                description="Academic experience, teaching background and professional approach."
                            />

                            <div className="space-y-5 text-sm leading-8 text-[#55535B]">
                                <p>
                                    Dedicated and result-oriented Assistant Professor in Mathematics with  teaching experience across high school, higher secondary and collegiate levels.
                                </p>

                                <p>
                                    Began academic career as a HSST teacher in Bhavans Vidhya Mandir Manjapra. Currently serving in the institution since last year, demonstrating strong commitment to academic excellence, student development, and effective teaching methodologies.
                                </p>
                            </div>

                            <div className="mt-10 border-l-2 border-[#D2B87C] bg-white px-6 py-6">
                                <p className="font-serif text-lg font-normal italic leading-8 text-[#20235A]">
                                    &ldquo;Committed to academic excellence,
                                    student development and effective
                                    mathematics education.&rdquo;
                                </p>
                                <p className="mt-4 text-[9px] uppercase tracking-[0.17em] text-[#927B4D]">
                                    Teaching Philosophy
                                </p>
                            </div>
                        </div>

                        <aside className="h-fit border border-[#E6DFD3] bg-white p-6">
                            <div className="mb-5 flex items-center gap-3">
                                <UserRound
                                    size={19}
                                    className="text-[#927B4D]"
                                    strokeWidth={1.4}
                                />
                                <h3 className="font-serif text-lg font-normal text-[#20235A]">
                                    Professional Details
                                </h3>
                            </div>

                            <DetailItem
                                label="Faculty Name"
                                value="Ms. Greeshma K P"
                            />

                            <DetailItem
                                label="Designation"
                                value="Assistant Professor"
                            />

                            <DetailItem
                                label="Department"
                                value="Mathematics"
                            />

                            <DetailItem
                                label="Qualifications"
                                value="M.Sc Mathematics, B.Ed"
                            />

                            <DetailItem
                                label="Teaching Experience"
                                value="High School, Higher Secondary and Collegiate Levels"
                            />

                            {/* <DetailItem
                                label="Previous Institution"
                                value="Bhavans Vidya Mandir, Manjapra"
                            /> */}

                            {/* <DetailItem
                                label="NCERC Unique ID"
                                value="4423"
                            /> */}
                        </aside>
                    </div>
                </section>

                {/* Research Section */}
                <section
                    id="research"
                    className="scroll-mt-16 bg-white px-5 py-16 sm:px-8 lg:px-10 lg:py-20"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="02"
                            eyebrow="Academic Exploration"
                            title="Research Interests"
                            description="Research interests in fundamental and advanced areas of Mathematics."
                        />

                        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                            <div className="border-l-2 border-[#D2B87C] py-2 pl-6 sm:pl-8">
                                <div className="mb-5 flex items-center gap-3">
                                    <Microscope
                                        size={20}
                                        className="text-[#927B4D]"
                                        strokeWidth={1.4}
                                    />
                                    <h3 className="font-serif text-xl font-normal text-[#20235A]">
                                        Research Focus
                                    </h3>
                                </div>

                                <p className="text-sm leading-8 text-[#55535B]">
                                    The primary research interests of Ms.
                                    Greeshma K P are in Calculus and Abstract
                                    Algebra, with an academic focus on
                                    mathematical concepts and their
                                    applications.
                                </p>

                                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                                    {researchInterests.map(
                                        (interest, index) => (
                                            <div
                                                key={interest}
                                                className="flex items-center gap-3 border-b border-[#EAE4D9] py-3"
                                            >
                                                <span className="font-serif text-xs text-[#927B4D]">
                                                    0{index + 1}
                                                </span>
                                                <span className="text-xs leading-5 text-[#55535B]">
                                                    {interest}
                                                </span>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>

                            <div className="bg-[#FAF7F2] p-7 sm:p-9">
                                <div className="mb-6 flex items-center gap-3">
                                    <Lightbulb
                                        size={20}
                                        className="text-[#927B4D]"
                                        strokeWidth={1.4}
                                    />
                                    <h3 className="font-serif text-xl font-normal text-[#20235A]">
                                        Research Keywords
                                    </h3>
                                </div>

                                <p className="mb-6 text-xs leading-7 text-[#77747A]">
                                    Key areas associated with mathematical
                                    research and academic interests.
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {keywords.map((keyword) => (
                                        <span
                                            key={keyword}
                                            className="border border-[#D2B87C]/50 bg-white px-3 py-2 text-[10px] tracking-wide text-[#55535B]"
                                        >
                                            {keyword}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-9 border-t border-[#E4DCCE] pt-6">
                                    <p className="mb-2 text-[9px] font-medium uppercase tracking-[0.18em] text-[#927B4D]">
                                        Area of Interest
                                    </p>
                                    <p className="font-serif text-lg font-normal leading-7 text-[#20235A]">
                                        Logic and Calculus
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Courses Section */}
                <section
                    id="courses"
                    className="scroll-mt-16 bg-[#FAF7F2] px-5 py-16 sm:px-8 lg:px-10 lg:py-20"
                >
                    <div className="mx-auto max-w-7xl">
                        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                            <SectionHeading
                                number="03"
                                eyebrow="Teaching Portfolio"
                                title="Courses Handled"
                                description="Courses handled across different academic years, semesters and engineering branches."
                            />

                            <div className="mb-8 flex items-center gap-3 border border-[#E6DFD3] bg-white px-5 py-3">
                                <BookOpen
                                    size={19}
                                    className="text-[#927B4D]"
                                    strokeWidth={1.4}
                                />
                                <div>
                                    <p className="font-serif text-2xl text-[#20235A]">
                                        {courses.length}
                                    </p>
                                    <p className="text-[9px] uppercase tracking-[0.15em] text-[#927B4D]">
                                        Courses
                                    </p>
                                </div>
                            </div>
                        </div>

                        <DataTable
                            headers={[
                                "Sl. No.",
                                "Year",
                                "Stream",
                                "Semester",
                                "Branch",
                                "Subject",
                            ]}
                            rows={courseRows}
                        />
                    </div>
                </section>
            </main>

            <FooterSection />
        </>
    );
}
