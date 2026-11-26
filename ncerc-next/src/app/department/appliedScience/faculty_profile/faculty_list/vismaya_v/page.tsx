
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
            <span className="h-px w-10 bg-[#D2B87C]" />
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
        <div className="text-sm leading-6 text-[#55535B]">
            {value}
        </div>
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
                                key={`${header}-${index}`}
                                className="px-4 py-4 text-[10px] font-medium uppercase tracking-[0.13em] text-[#D2B87C]"
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
                                    className={`border-b border-[#EAE4D9] px-4 py-4 text-xs leading-6 ${cellIndex === 0
                                        ? "font-medium text-[#927B4D]"
                                        : "text-[#55535B]"
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

const courses = [
    ["1", "2025-26", "B.Tech", "S2", "MTR", "Vector Calculus, Differential Equations and Transforms"],
    ["2", "2025-26", "B.Tech", "S4", "ECE", "Mathematics IV for ECE"],
    ["3", "2025-26", "M.Tech", "S2", "EEE", "Design of experiments"],
    ["3", "2025-26", "B.Tech", "S3", "CSE", "Mathematics III for CSE"],
    ["4", "2025-26", "M.Tech", "S1", "EEE", "Computational methods for engineers"],
    ["5", "2024-25", "B.Tech", "S4", "MTR", "Statistics, Probability and Numerical Methods"],
    ["6", "2024-25", "B.Tech", "S4", "CSE", "Graph Theory"],
    ["7", "2024-25", "M.Tech", "S2", "EEE", "Design of experiments"],
    ["8", "2024-25", "B.Tech", "S3", "CSE", "Discrete mathematics"],
    ["9", "2024-25", "B.Tech", "S3", "ECE", "PDE and Complex analysis"],
    ["10", "2024-25", "B.Tech", "S3", "MTR", "PDE and Complex analysis"],
    ["11", "2023-24", "B.Tech", "S2", "AI&ML", "Vector Calculus, Differential Equations and Transforms"],
    ["12", "2023-24", "M.Tech", "S2", "EEE", "Design of experiments"],
    ["13", "2023-24", "B.Tech", "S3", "EEE", "PDE and Complex analysis"],
    ["14", "2023-24", "B.Tech", "S3", "ME", "PDE and Complex analysis"],
    ["15", "2023-24", "B.Tech", "S3", "MTR", "PDE and Complex analysis"],
    ["16", "2023-24", "MCA", "S1", "MCA", "Mathematical foundation for computing"],
];

const courseRows: React.ReactNode[][] = courses.map((course) => [
    course[0],
    course[1],
    course[2],
    course[3],
    course[4],
    course[5],
]);

const researchKeywords = [
    "Calculus",
    "Linear Algebra",
    "Graph Theory",
    "Statistical Methods",
];

export default function VismayaVFacultyPage() {
    return (
        <>
            <SiteHeader />

            {/* Hero Section */}
            <section className="relative isolate overflow-hidden bg-[#20235A] text-[#FAF7F2]">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#20235A] via-[#20235A] to-[#171A43]" />

                <div className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full border border-[#D2B87C]/15" />
                <div className="pointer-events-none absolute -right-10 -top-14 h-52 w-52 rounded-full border border-[#D2B87C]/20" />
                <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full border border-[#D2B87C]/10" />

                <div className="relative mx-auto max-w-7xl px-5 pb-14 pt-16 sm:px-8 lg:px-10 lg:pb-20 lg:pt-24">
                    <div className="mb-8 flex items-center gap-3">
                        <span className="h-px w-10 bg-[#D2B87C]" />
                        <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#D2B87C]">
                            Faculty Profile
                        </p>
                    </div>

                    <div className="grid gap-12 lg:grid-cols-[1fr_280px] lg:items-end">
                        <div>
                            <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-[#D2B87C]">
                                Department of Applied Science & Humanities
                            </p>

                            <h1 className="max-w-4xl font-serif text-4xl font-normal leading-[1.12] tracking-tight sm:text-5xl lg:text-[68px]">
                                Ms. Vismaya V
                            </h1>

                            <p className="mt-5 font-serif text-xl italic text-[#D2B87C] sm:text-2xl">
                                Assistant Professor
                            </p>

                            <div className="mt-8 flex flex-wrap gap-2">
                                <span className="border border-white/20 bg-white/[0.04] px-4 py-2 text-xs text-[#FAF7F2]">
                                    MSc Mathematics
                                </span>
                            </div>
                        </div>

                        <div className="border border-[#D2B87C]/35 bg-white/[0.04] p-6">
                            <div className="mb-6 flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center border border-[#D2B87C]/40 text-[#D2B87C]">
                                    <IdCard size={19} strokeWidth={1.4} />
                                </div>
                                <div>
                                    <p className="text-[9px] uppercase tracking-[0.18em] text-[#D2B87C]">
                                        Faculty Identification
                                    </p>
                                    <p className="mt-1 text-sm text-white">
                                        NCERC ID: 4061
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-5">
                                <div className="flex items-start gap-3">
                                    <Building2
                                        size={17}
                                        className="mt-0.5 shrink-0 text-[#D2B87C]"
                                        strokeWidth={1.4}
                                    />
                                    <div>
                                        <p className="text-[9px] uppercase tracking-[0.16em] text-white/50">
                                            Department
                                        </p>
                                        <p className="mt-1 text-xs leading-5 text-white/85">
                                            Applied Science & Humanities
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <GraduationCap
                                        size={17}
                                        className="mt-0.5 shrink-0 text-[#D2B87C]"
                                        strokeWidth={1.4}
                                    />
                                    <div>
                                        <p className="text-[9px] uppercase tracking-[0.16em] text-white/50">
                                            Qualification
                                        </p>
                                        <p className="mt-1 text-xs leading-5 text-white/85">
                                            MSc Mathematics
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Microscope
                                        size={17}
                                        className="mt-0.5 shrink-0 text-[#D2B87C]"
                                        strokeWidth={1.4}
                                    />
                                    <div>
                                        <p className="text-[9px] uppercase tracking-[0.16em] text-white/50">
                                            Area of Interest
                                        </p>
                                        <p className="mt-1 text-xs leading-5 text-white/85">
                                            Linear Algebra, Calculus and Complex Analysis
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <a
                                href="#about"
                                className="mt-7 flex items-center justify-between border-t border-white/15 pt-5 text-xs text-[#D2B87C] transition-colors hover:text-white"
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
                                eyebrow="Introduction"
                                title="About Me"
                                description="Academic profile and teaching experience"
                            />

                            <div className="max-w-3xl space-y-5 text-sm leading-8 text-[#55535B]">
                                <p>
                                    Dedicated Assistant professor with 6 years of teaching experience in pure and applied mathematics. Possesses strong expertise in calculus, linear algebra and complex analysis.
                                </p>

                                <p>
                                    Committed to academic excellence, effective teaching practices and fostering student understanding through innovative methodologies.
                                </p>
                            </div>
                        </div>

                        <aside className="h-fit border border-[#E6DFD3] bg-white p-6">
                            <div className="mb-5 flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center bg-[#FAF7F2] text-[#927B4D]">
                                    <UserRound size={19} strokeWidth={1.4} />
                                </div>
                                <div>
                                    <p className="text-[9px] uppercase tracking-[0.18em] text-[#927B4D]">
                                        Faculty Information
                                    </p>
                                    <h3 className="font-serif text-lg font-normal text-[#20235A]">
                                        Profile Details
                                    </h3>
                                </div>
                            </div>

                            <DetailItem
                                label="Name"
                                value="Ms. Vismaya V"
                            />
                            {/* <DetailItem
                                label="Designation"
                                value="Assistant Professor"
                            /> */}
                            {/* <DetailItem
                                label="Department"
                                value="Applied Science & Humanities"
                            /> */}
                            <DetailItem
                                label="Qualification"
                                value="MSc Mathematics"
                            />
                            <DetailItem
                                label="NCERC Unique ID"
                                value="4061"
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
                            description="Areas of academic interest and mathematical exploration."
                        />

                        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                            <div className="border-l-2 border-[#D2B87C] pl-6">
                                <div className="mb-6 flex items-center gap-3">
                                    <Lightbulb
                                        size={20}
                                        className="text-[#927B4D]"
                                        strokeWidth={1.4}
                                    />
                                    <h3 className="font-serif text-xl font-normal text-[#20235A]">
                                        Areas of Research
                                    </h3>
                                </div>

                                <div className="space-y-4">
                                    <div className="border-b border-[#EAE4D9] pb-4">
                                        <p className="text-sm leading-7 text-[#55535B]">
                                            Graph Theory
                                        </p>
                                    </div>

                                    <div className="border-b border-[#EAE4D9] pb-4">
                                        <p className="text-sm leading-7 text-[#55535B]">
                                            Statistics
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.17em] text-[#927B4D]">
                                        Area of Interest
                                    </p>
                                    <p className="text-sm leading-7 text-[#55535B]">
                                        Linear algebra and calculus, Complex analysis
                                    </p>
                                </div>
                            </div>

                            <div className="bg-[#FAF7F2] p-7 sm:p-8">
                                <div className="mb-6 flex items-center gap-3">
                                    <BookOpen
                                        size={19}
                                        className="text-[#927B4D]"
                                        strokeWidth={1.4}
                                    />
                                    <h3 className="font-serif text-xl font-normal text-[#20235A]">
                                        Research Keywords
                                    </h3>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {researchKeywords.map((keyword) => (
                                        <span
                                            key={keyword}
                                            className="border border-[#D8CEBB] bg-white px-3 py-2 text-xs text-[#55535B]"
                                        >
                                            {keyword}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-8 border-t border-[#E4DCCE] pt-5">
                                    <p className="text-xs leading-7 text-[#77747A]">
                                        Academic interests encompass
                                        mathematical concepts and their
                                        theoretical and applied dimensions.
                                    </p>
                                </div>
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
                        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                            <SectionHeading
                                number="03"
                                eyebrow="Teaching Contributions"
                                title="Courses Handled"
                                description="Courses handled across undergraduate and postgraduate programmes."
                            />

                            <div className="mb-8 flex items-center gap-3 border border-[#E6DFD3] bg-white px-5 py-3">
                                <BookOpen
                                    size={19}
                                    className="text-[#927B4D]"
                                    strokeWidth={1.4}
                                />
                                <div>
                                    <p className="font-serif text-xl text-[#20235A]">
                                        {courses.length}
                                    </p>
                                    <p className="text-[9px] uppercase tracking-[0.14em] text-[#77747A]">
                                        Course Entries
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
