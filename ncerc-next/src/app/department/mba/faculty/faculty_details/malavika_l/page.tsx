
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
    Award,
    Briefcase,
    Network,
    BarChart3,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import DepartmentNavigation from "../../../DepartmentNav/DepartmentNav";

/* -------------------------------------------------------
   TYPES
------------------------------------------------------- */

type SectionHeadingProps = {
    number: string;
    eyebrow: string;
    title: string;
    description?: string;
};

type DetailItemProps = {
    label: string;
    value: string;
};

type Course = string[];

type ResearchWork = {
    number: string;
    title: string;
};

/* -------------------------------------------------------
   FACULTY DATA
------------------------------------------------------- */

const qualifications = [
    "M.Com",
    "MBA",
    "NET – Commerce",
    "NET – Management",
];

const researchInterests = [
    "Management",
    "Commerce",
];

const areasOfInterest = [
    "Finance",
    "Accounting",
    "Marketing",
];

const keywords = [
    "Management",
    "Commerce",
    "Finance",
    "Accounting",
    "Marketing",
];

const courses: Course[] = [
    [
        "01",
        "2025–2026",
        "MBA",
        "S2",
        "2025",
        "Human Resource Management",
    ],
    [
        "02",
        "2025–2026",
        "MBA",
        "S4",
        "2024",
        "International Business",
    ],
    [
        "03",
        "2025–2026",
        "MBA",
        "S4",
        "2024",
        "Airline Revenue Management",
    ],
];

const researchWorks: ResearchWork[] = [
    {
        number: "01",
        title:
            "Study on the Profitability of NBFCs Operating EMI-Based Loan with Respect to HDB and Bajaj Finance Ltd",
    },
    {
        number: "02",
        title:
            "Study on the Merger and Acquisition of a Public Sector Bank",
    },
];

const profileSections = [
    { id: "about", label: "About Me" },
    { id: "research", label: "Research" },
    { id: "courses", label: "Courses" },
    { id: "publications", label: "Publications" },
    { id: "researcher-profiles", label: "Academic Profile" },
];

/* -------------------------------------------------------
   REUSABLE COMPONENTS
------------------------------------------------------- */

function SectionHeading({
    number,
    eyebrow,
    title,
    description,
}: SectionHeadingProps) {
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

            <h2 className="font-serif text-2xl font-normal leading-tight text-[#20235A] sm:text-3xl">
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

function DetailItem({ label, value }: DetailItemProps) {
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
    rows: Course[];
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
                                key={row[0]}
                                className={
                                    "border-b border-[#EEE9E0] last:border-b-0 " +
                                    (rowIndex % 2 === 0
                                        ? "bg-white"
                                        : "bg-[#FAF8F4]")
                                }
                            >
                                {row.map((cell, cellIndex) => (
                                    <td
                                        key={cellIndex}
                                        className={
                                            "px-4 py-4 text-xs leading-6 text-[#55535B] " +
                                            (cellIndex === 0
                                                ? "text-[#927B4D]"
                                                : "")
                                        }
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

/* -------------------------------------------------------
   RESEARCH WORK LIST
------------------------------------------------------- */

function ResearchWorkList({
    items,
}: {
    items: ResearchWork[];
}) {
    return (
        <div className="border border-[#E6DFD3] bg-white">
            {items.map((item, index) => (
                <article
                    key={item.number}
                    className={
                        "grid gap-4 p-5 sm:grid-cols-[38px_1fr] sm:gap-5 sm:p-7 " +
                        (index !== items.length - 1
                            ? "border-b border-[#EEE9E0]"
                            : "")
                    }
                >
                    <div className="flex h-9 w-9 items-center justify-center bg-[#F5F0E6] text-[#927B4D]">
                        <FileText size={17} strokeWidth={1.5} />
                    </div>

                    <div>
                        <h3 className="font-serif text-lg font-normal leading-snug text-[#20235A] sm:text-xl">
                            {item.title}
                        </h3>

                        <p className="mt-3 text-[10px] uppercase tracking-[0.14em] text-[#927B4D]">
                            Research Work
                        </p>
                    </div>
                </article>
            ))}
        </div>
    );
}

/* -------------------------------------------------------
   PAGE
------------------------------------------------------- */

export default function MalavikaLFacultyPage() {
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

                        <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#D2B87C]">
                            Faculty Profile
                        </p>
                    </div>

                    <div className="mt-7 grid gap-10 lg:grid-cols-[1fr_280px] lg:items-end">
                        <div>
                            <p className="text-xs font-medium uppercase tracking-[0.22em] text-white/50">
                                Nehru School of Management
                            </p>

                            <h1 className="mt-4 font-serif text-4xl font-normal leading-[1.12] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[68px]">
                                Ms. Malavika L
                            </h1>

                            <p className="mt-4 font-serif text-xl italic text-[#D2B87C] sm:text-2xl">
                                Assistant Professor
                            </p>

                            <div className="mt-7 flex flex-wrap gap-3">
                                {qualifications.map((qualification) => (
                                    <span
                                        key={qualification}
                                        className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80"
                                    >
                                        {qualification}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-8 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#D2B87C]" />

                                <span className="text-[10px] uppercase tracking-[0.18em] text-white/50">
                                    NCERC Unique ID: 4577
                                </span>
                            </div>
                        </div>

                        {/* ACADEMIC PROFILE PANEL */}
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
                                            Qualifications
                                        </p>

                                        <p className="mt-1 text-xs leading-5 text-white/90">
                                            M.Com, MBA, NET – Commerce and Management
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
                                            Management and Commerce
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Briefcase
                                        size={19}
                                        className="shrink-0 text-[#D2B87C]"
                                        strokeWidth={1.5}
                                    />

                                    <div>
                                        <p className="text-[9px] uppercase tracking-[0.13em] text-white/45">
                                            Areas of Interest
                                        </p>

                                        <p className="mt-1 text-xs leading-5 text-white/90">
                                            Finance, Accounting and Marketing
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
                                            Teaching
                                        </p>

                                        <p className="mt-1 text-xs leading-5 text-white/90">
                                            Management Studies
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
                <DepartmentNavigation />

                {/* PROFILE NAVIGATION */}
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

                {/* ABOUT SECTION */}
                <section
                    id="about"
                    className="scroll-mt-24 bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_310px] lg:gap-16">
                        <div>
                            <SectionHeading
                                number="01"
                                eyebrow="Introduction"
                                title="About Ms. Malavika L"
                                description="Academic background, professional role and qualifications."
                            />

                            <div className="space-y-5 text-sm leading-8 text-[#55535B]">
                                <p>
                                    Ms. Malavika L is serving as Assistant
                                    Professor at Nehru School of Management,
                                    Nehru College of Engineering and Research
                                    Centre (NCERC), Pambady, Thrissur, Kerala.
                                </p>

                                <p>
                                    She holds a Master of Commerce (M.Com)
                                    and a Master of Business Administration
                                    (MBA), and has qualified the National
                                    Eligibility Test (NET) in Commerce and
                                    Management.
                                </p>

                                <p>
                                    Her academic and research interests
                                    include Management and Commerce, with
                                    particular areas of interest in Finance,
                                    Accounting and Marketing.
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

                            {/* <DetailItem
                                label="Institution"
                                value="Nehru School of Management, NCERC"
                            /> */}

                            <DetailItem
                                label="Qualifications"
                                value="M.Com, MBA, NET (Commerce & Management)"
                            />

                            <DetailItem
                                label="Research Interest"
                                value="Management and Commerce"
                            />

                            <DetailItem
                                label="NCERC Unique ID"
                                value="4577"
                            />
                        </aside>
                    </div>
                </section>

                {/* RESEARCH SECTION */}
                <section
                    id="research"
                    className="scroll-mt-24 bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="02"
                            eyebrow="Academic Exploration"
                            title="Research Interests"
                            description="Academic interests across the fields of management and commerce."
                        />

                        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                            <div className="border-l-2 border-[#D2B87C] pl-6">
                                <div className="flex items-center gap-3">
                                    <Microscope
                                        size={19}
                                        className="text-[#927B4D]"
                                        strokeWidth={1.5}
                                    />

                                    <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                        Research Specialisation
                                    </p>
                                </div>

                                <h3 className="mt-4 font-serif text-2xl font-normal leading-snug text-[#20235A] sm:text-3xl">
                                    Management and Commerce
                                </h3>

                                <p className="mt-5 text-sm leading-8 text-[#55535B]">
                                    Her research interests are centred on
                                    Management and Commerce. These fields
                                    provide the academic foundation for
                                    exploring business practices,
                                    organisational activities and
                                    commercial disciplines.
                                </p>

                                <div className="mt-7">
                                    <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                        Research Interests
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {researchInterests.map((item) => (
                                            <span
                                                key={item}
                                                className="border border-[#E6DFD3] bg-[#FAF7F2] px-3 py-2 text-xs text-[#55535B]"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="border border-[#E8E1D5] bg-[#FAF7F2] p-6 sm:p-8">
                                <div className="flex items-center gap-3">
                                    <Lightbulb
                                        size={20}
                                        className="text-[#927B4D]"
                                        strokeWidth={1.5}
                                    />

                                    <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                        Areas of Interest
                                    </p>
                                </div>

                                <div className="mt-6 space-y-0">
                                    {areasOfInterest.map((item, index) => (
                                        <div
                                            key={item}
                                            className="flex items-start gap-4 border-b border-[#E6DFD3] py-4 last:border-b-0"
                                        >
                                            <span className="pt-0.5 text-[10px] tracking-wider text-[#927B4D]">
                                                0{index + 1}
                                            </span>

                                            <p className="text-sm leading-6 text-[#55535B]">
                                                {item}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* KEYWORDS */}
                        <div className="mt-10 border-t border-[#EAE4D9] pt-7">
                            <div className="mb-4 flex items-center gap-3">
                                <Network
                                    size={17}
                                    className="text-[#927B4D]"
                                    strokeWidth={1.5}
                                />

                                <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                    Research Keywords
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-x-7 gap-y-3">
                                {keywords.map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-center gap-2"
                                    >
                                        <span className="h-1.5 w-1.5 bg-[#D2B87C]" />

                                        <span className="text-sm text-[#55535B]">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* COURSES SECTION */}
                <section
                    id="courses"
                    className="scroll-mt-24 bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="03"
                            eyebrow="Teaching Contributions"
                            title="Courses Handled"
                            description="Courses handled across different academic batches of the MBA programme during 2025–2026."
                        />

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
                    </div>
                </section>

                {/* PUBLICATIONS SECTION */}
                <section
                    id="publications"
                    className="scroll-mt-24 bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="04"
                            eyebrow="Research Contributions"
                            title="Paper Publications, Presentations & Conferences"
                            description="Research works and academic studies provided in the faculty profile."
                        />

                        <div className="mb-8 grid grid-cols-2 gap-4 sm:max-w-md">
                            <div className="border border-[#E6DFD3] bg-[#FAF7F2] p-5">
                                <p className="font-serif text-3xl font-normal text-[#20235A]">
                                    02
                                </p>

                                <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-[#927B4D]">
                                    Listed Research Works
                                </p>
                            </div>

                            <div className="border border-[#E6DFD3] bg-[#FAF7F2] p-5">
                                <p className="font-serif text-3xl font-normal text-[#20235A]">
                                    02
                                </p>

                                <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-[#927B4D]">
                                    Research Topics
                                </p>
                            </div>
                        </div>

                        <ResearchWorkList items={researchWorks} />
                    </div>
                </section>

                {/* ACADEMIC PROFILE SECTION */}
                <section
                    id="researcher-profiles"
                    className="scroll-mt-24 bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="05"
                            eyebrow="Academic Identity"
                            title="Academic Profile"
                            description="Faculty identification and academic qualifications."
                        />

                        <div className="grid gap-5 md:grid-cols-2">
                            {/* FACULTY IDENTIFICATION */}
                            <div className="border border-[#E6DFD3] bg-white p-6 sm:p-7">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-11 w-11 items-center justify-center bg-[#F5F0E6] text-[#927B4D]">
                                        <Award
                                            size={19}
                                            strokeWidth={1.5}
                                        />
                                    </div>

                                    <div>
                                        <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-[#927B4D]">
                                            NCERC Unique ID
                                        </p>

                                        <p className="mt-1 font-serif text-2xl text-[#20235A]">
                                            4577
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* QUALIFICATIONS */}
                            <div className="border border-[#E6DFD3] bg-white p-6 sm:p-7">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-11 w-11 items-center justify-center bg-[#F5F0E6] text-[#927B4D]">
                                        <GraduationCap
                                            size={19}
                                            strokeWidth={1.5}
                                        />
                                    </div>

                                    <div>
                                        <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-[#927B4D]">
                                            Academic Qualifications
                                        </p>

                                        <p className="mt-1 text-sm text-[#393947]">
                                            M.Com, MBA
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* NET QUALIFICATION */}
                            <div className="border border-[#E6DFD3] bg-white p-6 sm:p-7 md:col-span-2">
                                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#F5F0E6] text-[#927B4D]">
                                        <BookOpen
                                            size={19}
                                            strokeWidth={1.5}
                                        />
                                    </div>

                                    <div>
                                        <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-[#927B4D]">
                                            National Eligibility Test
                                        </p>

                                        <p className="mt-1 text-sm text-[#393947]">
                                            NET – Commerce and Management
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <FooterSection />
        </>
    );
}
