
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
    IdCard,
    Building2,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import DepartmentNavigation from "../../../departmentnavigation/DepartmentNavigation";

type DetailItemProps = {
    label: string;
    value: React.ReactNode;
};

type SectionHeadingProps = {
    number: string;
    eyebrow: string;
    title: string;
    description?: string;
};

type DataTableProps = {
    headers: string[];
    rows: React.ReactNode[][];
};

const SectionHeading = ({
    number,
    eyebrow,
    title,
    description,
}: SectionHeadingProps) => (
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

        <div className="mt-4 h-[2px] w-12 bg-[#D2B87C]" />

        {description && (
            <p className="mt-4 max-w-3xl text-sm leading-7 text-[#77747A]">
                {description}
            </p>
        )}
    </div>
);

const DetailItem = ({ label, value }: DetailItemProps) => (
    <div className="border-b border-[#EAE4D9] py-4 last:border-b-0">
        <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.16em] text-[#927B4D]">
            {label}
        </p>
        <div className="text-sm leading-6 text-[#55535B]">{value}</div>
    </div>
);

const DataTable = ({ headers, rows }: DataTableProps) => (
    <div className="overflow-hidden border border-[#E6DFD3] bg-white">
        <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] border-collapse text-left">
                <thead>
                    <tr className="bg-[#20235A]">
                        {headers.map((header, index) => (
                            <th
                                key={index}
                                className="px-4 py-4 text-[10px] font-medium uppercase tracking-[0.13em] text-[#D2B87C]"
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {rows.length > 0 ? (
                        rows.map((row, rowIndex) => (
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
                                        className={`border-b border-[#EAE4D9] px-4 py-4 text-xs leading-6 ${cellIndex === 0
                                            ? "font-medium text-[#927B4D]"
                                            : "text-[#55535B]"
                                            }`}
                                    >
                                        {cell}
                                    </td>
                                ))}
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td
                                colSpan={headers.length}
                                className="px-5 py-12 text-center"
                            >
                                <p className="font-serif text-lg font-normal text-[#20235A]">
                                    No records available
                                </p>
                                <p className="mt-2 text-xs leading-6 text-[#77747A]">
                                    Information will be updated when available.
                                </p>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    </div>
);

export default function HarithaMCFacultyPage() {
    const courses = [
        [
            "1",
            "2025",
            "B.Tech",
            "1",
            "CSE (AI&ML)",
            "Calculus And Optimization",
        ],
        [
            "2",
            "2025",
            "P G",
            "1",
            "MCA",
            "Mathematical Foundation for Computing",
        ],
        [
            "3",
            "2025",
            "P G",
            "1",
            "M. Tech",
            "Advanced Engineering Mathematics",
        ],
        [
            "4",
            "2026",
            "B.Tech",
            "2",
            "CSE (AI&ML)",
            "Linear Algebra",
        ],
        [
            "5",
            "2026",
            "B.Tech",
            "4",
            "EEE",
            "Mathematics IV for EEE",
        ],
        [
            "6",
            "2026",
            "B.Tech",
            "4",
            "ME",
            "Mathematics IV for ME",
        ],
    ];

    const researchKeywords = [
        "Graph Theory: Domination",
        "Graph Coloring",
        "Lebesgue Measure",
        "Time Series Analysis",
        "Multivariate Analysis",
    ];

    return (
        <>
            <SiteHeader />

            {/* Hero Section */}
            <section className="relative isolate overflow-hidden bg-[#20235A] text-[#FAF7F2]">
                {/* Background Decorations */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#20235A] via-[#20235A] to-[#171A43]" />

                <div className="pointer-events-none absolute -right-28 -top-32 h-[420px] w-[420px] rounded-full border border-[#D2B87C]/15" />
                <div className="pointer-events-none absolute -right-12 -top-16 h-[280px] w-[280px] rounded-full border border-[#D2B87C]/15" />
                <div className="pointer-events-none absolute -bottom-40 -left-24 h-[350px] w-[350px] rounded-full border border-[#D2B87C]/10" />

                <div className="relative mx-auto max-w-7xl px-5 pb-14 pt-16 sm:px-8 lg:px-10 lg:pb-20 lg:pt-24">
                    <div className="grid items-end gap-12 lg:grid-cols-[1fr_280px]">
                        {/* Faculty Information */}
                        <div>
                            <div className="mb-7 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#D2B87C]" />
                                <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#D2B87C]">
                                    Faculty Profile
                                </p>
                            </div>

                            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-white/55">
                                Department of Applied Science
                            </p>

                            <h1 className="max-w-4xl font-serif text-4xl font-normal leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-[68px]">
                                Haritha M C
                            </h1>

                            <p className="mt-5 font-serif text-lg italic text-[#D2B87C] sm:text-xl">
                                Assistant Professor
                            </p>

                            <div className="mt-9 flex flex-wrap gap-2">
                                {[
                                    "MSc Mathematics",
                                    "BSc Mathematics",
                                    "B.Ed in Mathematics",
                                ].map((qualification) => (
                                    <span
                                        key={qualification}
                                        className="border border-white/20 bg-white/[0.04] px-4 py-2 text-[11px] tracking-wide text-white/80"
                                    >
                                        {qualification}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-8 flex items-center gap-3">
                                <IdCard
                                    size={16}
                                    className="text-[#D2B87C]"
                                    strokeWidth={1.5}
                                />
                                <span className="text-[10px] uppercase tracking-[0.16em] text-white/45">
                                    NCERC Unique ID
                                </span>
                                <span className="text-sm text-white/90">
                                    e 4168
                                </span>
                            </div>
                        </div>

                        {/* Quick Information Panel */}
                        <div className="border border-[#D2B87C]/35 bg-white/[0.04] p-6">
                            <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.2em] text-[#D2B87C]">
                                Academic Profile
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-3">
                                    <GraduationCap
                                        size={18}
                                        className="mt-0.5 shrink-0 text-[#D2B87C]"
                                        strokeWidth={1.5}
                                    />
                                    <div>
                                        <p className="text-[10px] uppercase tracking-[0.12em] text-white/45">
                                            Qualification
                                        </p>
                                        <p className="mt-1 text-xs leading-5 text-white/85">
                                            Postgraduate in Mathematics
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Building2
                                        size={18}
                                        className="mt-0.5 shrink-0 text-[#D2B87C]"
                                        strokeWidth={1.5}
                                    />
                                    <div>
                                        <p className="text-[10px] uppercase tracking-[0.12em] text-white/45">
                                            Department
                                        </p>
                                        <p className="mt-1 text-xs leading-5 text-white/85">
                                            Applied Science
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Microscope
                                        size={18}
                                        className="mt-0.5 shrink-0 text-[#D2B87C]"
                                        strokeWidth={1.5}
                                    />
                                    <div>
                                        <p className="text-[10px] uppercase tracking-[0.12em] text-white/45">
                                            Area of Interest
                                        </p>
                                        <p className="mt-1 text-xs leading-5 text-white/85">
                                            Functional Analysis and Statistics
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <BookOpen
                                        size={18}
                                        className="mt-0.5 shrink-0 text-[#D2B87C]"
                                        strokeWidth={1.5}
                                    />
                                    <div>
                                        <p className="text-[10px] uppercase tracking-[0.12em] text-white/45">
                                            Courses
                                        </p>
                                        <p className="mt-1 text-xs leading-5 text-white/85">
                                            Mathematics
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <a
                                href="#about"
                                className="mt-8 flex items-center justify-between border-t border-white/15 pt-5 text-[10px] font-medium uppercase tracking-[0.16em] text-[#D2B87C] transition-colors hover:text-white"
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
                <div className="sticky top-0 z-30 border-b border-[#E6DFD3] bg-white/95 backdrop-blur">
                    <div className="mx-auto flex max-w-7xl gap-7 overflow-x-auto px-5 py-4 sm:px-8 lg:px-10">
                        {[
                            ["About Me", "#about"],
                            ["Research", "#research"],
                            ["Courses", "#courses"],
                            ["Publications", "#publications"],
                            ["Books", "#books"],
                            ["Researcher Profiles", "#profiles"],
                        ].map(([label, href]) => (
                            <a
                                key={href}
                                href={href}
                                className="shrink-0 text-[10px] font-medium uppercase tracking-[0.13em] text-[#77747A] transition-colors hover:text-[#927B4D]"
                            >
                                {label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* About Section */}
                <section
                    id="about"
                    className="scroll-mt-20 bg-[#FAF7F2] px-5 py-16 sm:px-8 lg:px-10 lg:py-20"
                >
                    <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_310px]">
                        <div>
                            <SectionHeading
                                number="01"
                                eyebrow="Faculty Overview"
                                title="About Me"
                                description="Academic background and professional profile"
                            />

                            <div className="max-w-3xl space-y-5 text-sm leading-8 text-[#55535B]">
                                <p>
                                    I am an Assistant Professor in Mathematics with a strong passion for teaching and research. And dedicated mathematics educator with expertise in Calculus, Linear Algebra, Numerical Methods and Statistics.

                                </p>
                            </div>
                        </div>

                        {/* Professional Details */}
                        <aside className="h-fit border border-[#E6DFD3] bg-white p-6">
                            <div className="mb-4 flex items-center gap-3">
                                <UserRound
                                    size={18}
                                    className="text-[#927B4D]"
                                    strokeWidth={1.5}
                                />
                                <h3 className="font-serif text-lg font-normal text-[#20235A]">
                                    Professional Details
                                </h3>
                            </div>

                            <DetailItem
                                label="Name"
                                value="Haritha M C"
                            />

                            <DetailItem
                                label="Designation"
                                value="Assistant Professor"
                            />

                            {/* <DetailItem
                                label="Department"
                                value="Department of Applied Science"
                            /> */}

                            {/* <DetailItem
                                label="NCERC Unique ID"
                                value="e 4168"
                            /> */}

                            <DetailItem
                                label="Area of Interest"
                                value="Functional Analysis and Statistics"
                            />
                        </aside>
                    </div>
                </section>

                {/* Research Section */}
                <section
                    id="research"
                    className="scroll-mt-20 bg-white px-5 py-16 sm:px-8 lg:px-10 lg:py-20"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="02"
                            eyebrow="Academic Exploration"
                            title="Research Interests"
                            description="Research areas and academic interests"
                        />

                        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                            <div className="border-l-2 border-[#D2B87C] pl-6">
                                <div className="mb-4 flex items-center gap-3">
                                    <Lightbulb
                                        size={19}
                                        className="text-[#927B4D]"
                                        strokeWidth={1.5}
                                    />
                                    <h3 className="font-serif text-xl font-normal text-[#20235A]">
                                        Research Focus
                                    </h3>
                                </div>

                                <p className="max-w-2xl text-sm leading-8 text-[#55535B]">
                                    My research interests include Measure
                                    Theory, Graph Theory and topics in
                                    Statistics.
                                </p>

                                <div className="mt-8">
                                    <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.18em] text-[#927B4D]">
                                        Area of Interest
                                    </p>
                                    <p className="text-sm leading-7 text-[#55535B]">
                                        Functional Analysis and Statistics
                                    </p>
                                </div>
                            </div>

                            <div className="bg-[#FAF7F2] p-7 sm:p-8">
                                <div className="mb-6 flex items-center gap-3">
                                    <BookOpen
                                        size={19}
                                        className="text-[#927B4D]"
                                        strokeWidth={1.5}
                                    />
                                    <h3 className="font-serif text-xl font-normal text-[#20235A]">
                                        Research Keywords
                                    </h3>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {researchKeywords.map((keyword) => (
                                        <span
                                            key={keyword}
                                            className="border border-[#E4DCCE] bg-white px-3 py-2 text-xs leading-5 text-[#55535B]"
                                        >
                                            {keyword}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 border border-[#E6DFD3] bg-[#FAF7F2] p-6 sm:p-8">
                            <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.18em] text-[#927B4D]">
                                Research Areas
                            </p>
                            <div className="flex flex-wrap gap-x-8 gap-y-3">
                                {[
                                    "Functional Analysis",
                                    "Graph Theory",
                                    "Measure Theory",
                                    "Statistics",
                                ].map((area) => (
                                    <div
                                        key={area}
                                        className="flex items-center gap-2"
                                    >
                                        <span className="h-1.5 w-1.5 rounded-full bg-[#D2B87C]" />
                                        <span className="text-sm text-[#55535B]">
                                            {area}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Courses Section */}
                <section
                    id="courses"
                    className="scroll-mt-20 bg-[#FAF7F2] px-5 py-16 sm:px-8 lg:px-10 lg:py-20"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="03"
                            eyebrow="Teaching Contributions"
                            title="Courses Handled"
                            description="Courses handled across undergraduate and postgraduate programmes"
                        />

                        <div className="mb-6 flex items-center gap-3">
                            <BookOpen
                                size={18}
                                className="text-[#927B4D]"
                                strokeWidth={1.5}
                            />
                            <p className="text-xs text-[#77747A]">
                                <span className="font-medium text-[#20235A]">
                                    {courses.length}
                                </span>{" "}
                                courses listed
                            </p>
                        </div>

                        <DataTable
                            headers={[
                                "S.No",
                                "Year",
                                "Stream",
                                "Semester",
                                "Branch",
                                "Subject",
                            ]}
                            rows={courses}
                        />
                    </div>
                </section>



            </main>

            <FooterSection />
        </>
    );
}
