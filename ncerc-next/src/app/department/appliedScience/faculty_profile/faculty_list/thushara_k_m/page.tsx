
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
    ExternalLink,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import DepartmentNavigation from "../../../departmentnavigation/DepartmentNavigation";

const keywords = [
    "Graphene Oxide",
    "Reduced Graphene Oxide",
    "Advanced Electrode Materials",
];

const courses = [
    [
        "1",
        "2026",
        "B. Tech",
        "II",
        "ECE",
        "CHEMISTRY FOR ELECTRONICS ENGINEERS",
    ],
    [
        "2",
        "2026",
        "B. Tech",
        "II",
        "EEE",
        "CHEMISTRY FOR ELECTRICAL ENGINEERS",
    ],
    [
        "3",
        "2025",
        "B. Tech",
        "I",
        "MECH",
        "CHEMISTRY FOR ENGINEERS",
    ],
    [
        "4",
        "2025",
        "B. Tech",
        "I",
        "MTR",
        "CHEMISTRY FOR ENGINEERS",
    ],
    [
        "5",
        "2024",
        "B. TECH",
        "I",
        "AI&ML",
        "ENGINEERING CHEMISTRY & CHEMISTRY LAB",
    ],
    [
        "6",
        "2024",
        "B. Tech",
        "II",
        "ECE",
        "ENGINEERING CHEMISTRY & CHEMISTRY LAB",
    ],
];

const publications: React.ReactNode[][] = [
    [
        "2024",
        <>
            <p className="text-xs leading-6 text-[#393947]">
                van der Waals gap modulation of graphene oxide through
                mono-Boc ethylenediamine anchoring for superior Li-ion
                batteries†
            </p>
            <p className="mt-2 text-[11px] leading-5 text-[#77747A]">
                Energy Advances, Royal Society of Chemistry
            </p>
        </>,
    ],
    [
        "2023",
        <>
            <a
                href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=UrEVFaoAAAAJ&citation_for_view=UrEVFaoAAAAJ:9yKSN-GCB0IC"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs leading-6 text-[#393947] transition-colors hover:text-[#927B4D]"
            >
                Interlayer, gallery-engineered graphene oxide using selective
                protection of mono-Boc-ethylenediamine as anode for sodium
                ion batteries
            </a>
            <p className="mt-2 text-[11px] leading-5 text-[#77747A]">
                Journal of Energy Storage 73, 109237
            </p>
        </>,
    ],
    [
        "2023",
        <>
            <a
                href="https://link.springer.com/chapter/10.1007/978-3-031-35395-6_14"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs leading-6 text-[#393947] transition-colors hover:text-[#927B4D]"
            >
                Nanostructured Materials–Enabled Biosensors for Drug Delivery
                and Medical Diagnosis
            </a>
            <p className="mt-2 text-[11px] leading-5 text-[#77747A]">
                Springer International Publishing
            </p>
        </>,
    ],
    [
        "2022",
        <>
            <a
                href="https://www.sciencedirect.com/science/article/pii/S2214785322002577"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs leading-6 text-[#393947] transition-colors hover:text-[#927B4D]"
            >
                Design and synthesis of imino alcohol decorated graphene oxide
                nanosheets as an electrode material for sensor applications
            </a>
            <p className="mt-2 text-[11px] leading-5 text-[#77747A]">
                Materials Today: Proceedings
            </p>
        </>,
    ],
];

const profileSections = [
    { id: "about", label: "About Me" },
    { id: "research", label: "Research" },
    { id: "courses", label: "Courses" },
    { id: "publications", label: "Publications" },
    { id: "books", label: "Books" },
    { id: "researcher-profiles", label: "Researcher Profiles" },
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
    emptyMessage,
}: {
    headers: string[];
    rows: React.ReactNode[][];
    emptyMessage?: string;
}) {
    return (
        <div className="overflow-hidden border border-[#E6DFD3] bg-white">
            <div className="overflow-x-auto">
                <table className="w-full min-w-[700px] border-collapse text-left">
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
                        {rows.length > 0 ? (
                            rows.map((row, rowIndex) => (
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
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan={headers.length}
                                    className="px-5 py-10 text-center text-sm leading-7 text-[#77747A]"
                                >
                                    {emptyMessage ||
                                        "No details have been provided."}
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default function ThusharaKMFacultyPage() {
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
                                Department of Applied Sciences
                            </p>

                            <h1 className="mt-4 font-serif text-4xl font-normal leading-[1.12] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[68px]">
                                Ms. Thushara K M
                            </h1>

                            <p className="mt-4 font-serif text-xl italic text-[#D2B87C] sm:text-2xl">
                                Assistant Professor
                            </p>

                            <div className="mt-7 flex flex-wrap gap-3">
                                <span className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80">
                                    MSc – Chemistry
                                </span>
                                <span className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80">
                                    M.Phil – Physical Chemistry
                                </span>
                                <span className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80">
                                    B.Ed – Physical Science
                                </span>
                                <span className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80">
                                    Ph.D – Pursuing
                                </span>
                            </div>

                            <div className="mt-8 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#D2B87C]" />
                                <span className="text-[10px] uppercase tracking-[0.18em] text-white/50">
                                    NCERC Unique ID: 1882
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
                                            MSc, M.Phil, B.Ed
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
                                            Graphene-based Nanostructured Materials
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Building2
                                        size={19}
                                        className="shrink-0 text-[#D2B87C]"
                                        strokeWidth={1.5}
                                    />
                                    <div>
                                        <p className="text-[9px] uppercase tracking-[0.13em] text-white/45">
                                            Area of Interest
                                        </p>
                                        <p className="mt-1 text-xs leading-5 text-white/90">
                                            Material Chemistry & Nanotechnology
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
                                            Teaching Experience
                                        </p>
                                        <p className="mt-1 text-xs leading-5 text-white/90">
                                            Over 17 Years
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
                                title="About Ms. Thushara K M"
                                description="An overview of her academic background, professional experience, and teaching expertise."
                            />

                            <div className="space-y-5 text-sm leading-8 text-[#55535B]">
                                <p>
                                    Specializes in a particular area of chemistry, such as materials science, physical chemistry and nanotechnology. Experienced chemistry teacher with 17+ years of teaching experience. Solid background in chemical concepts and Laboratory techniques.
                                </p>

                                <p>
                                    well-versed in classroom instruction and curriculum Development.

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
                                value="Applied Sciences"
                            />
                            <DetailItem
                                label="Qualification"
                                value="MSc Chemistry, M.Phil Physical Chemistry, B.Ed Physical Science"
                            />
                            <DetailItem
                                label="Doctoral Studies"
                                value="Ph.D – Pursuing in Material Science"
                            />
                            {/* <DetailItem
                                label="Teaching Experience"
                                value="Over 17 Years"
                            /> */}
                            {/* <DetailItem
                                label="NCERC Unique ID"
                                value="1882"
                            /> */}
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
                            description="Research interests focused on graphene-based nanostructured materials, advanced electrode materials, and sustainable energy technologies."
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
                                    Graphene-based Materials &amp; Advanced
                                    Electrode Technologies
                                </h3>

                                <p className="mt-5 text-sm leading-8 text-[#55535B]">
                                    An active researcher with demonstrated expertise in Graphene-based nanostructured materials, Heteroatom-doped carbons and advanced electrode materials for high-performance supercapacitors and sustainable energy technologies.

                                </p>
                            </div>

                            <div className="border border-[#E8E1D5] bg-[#FAF7F2] p-6 sm:p-8">
                                <div className="flex items-center gap-3">
                                    <Lightbulb
                                        size={20}
                                        className="text-[#927B4D]"
                                        strokeWidth={1.5}
                                    />
                                    <h3 className="font-serif text-xl font-normal text-[#20235A]">
                                        Key Research Areas
                                    </h3>
                                </div>

                                <p className="mt-4 text-sm leading-8 text-[#55535B]">
                                    Research areas include graphene oxide,
                                    reduced graphene oxide, and advanced
                                    electrode materials.
                                </p>

                                <div className="mt-6 border-t border-[#E5DED1] pt-5">
                                    <p className="text-[9px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                        Research Keywords
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

                        {/* AREA OF INTEREST */}
                        <div className="mt-12 border-l-2 border-[#D2B87C] bg-[#FAF7F2] px-6 py-6 sm:px-8">
                            <p className="text-[9px] font-medium uppercase tracking-[0.17em] text-[#927B4D]">
                                Area of Interest
                            </p>
                            <p className="mt-3 text-sm leading-7 text-[#55535B]">
                                Material Chemistry, Nanotechnology, Physical
                                Chemistry
                            </p>
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
                            eyebrow="Teaching Experience"
                            title="Courses Handled"
                            description="Courses undertaken across different academic years, semesters, and engineering branches."
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
                                "Semester",
                                "Branch",
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
                            title="Conference & Journal Publications"
                            description="Published research papers and journal contributions."
                        />

                        <div className="mb-5 flex items-center gap-3">
                            <FileText
                                size={18}
                                className="text-[#927B4D]"
                                strokeWidth={1.5}
                            />
                            <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                4 Publication Entries Listed
                            </p>
                        </div>

                        <DataTable
                            headers={[
                                "Year",
                                "Title of Paper",
                            ]}
                            rows={publications}
                        />
                    </div>
                </section>

             
             

                {/* RESEARCHER PROFILES SECTION */}
                <section
                    id="researcher-profiles"
                    className="scroll-mt-24 bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="06"
                            eyebrow="Academic Identity"
                            title="Researcher Profiles"
                            description="External academic profiles and researcher identifiers."
                        />

                        <div className="grid gap-5 sm:grid-cols-2">
                            <a
                                href="https://orcid.org/0000-0001-5881-3360"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group border border-[#E6DFD3] bg-white p-6 transition-colors hover:border-[#D2B87C]"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center bg-[#F5F0E6] text-[#927B4D]">
                                            <IdCard
                                                size={19}
                                                strokeWidth={1.5}
                                            />
                                        </div>
                                        <div>
                                            <p className="text-[9px] uppercase tracking-[0.15em] text-[#927B4D]">
                                                ORCID Profile
                                            </p>
                                            <p className="mt-1 text-sm text-[#20235A]">
                                                0000-0001-5881-3360
                                            </p>
                                        </div>
                                    </div>
                                    <ExternalLink
                                        size={15}
                                        className="text-[#927B4D] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                    />
                                </div>
                            </a>

                            <a
                                href="https://scholar.google.com/citations?user=UrEVFaoAAAAJ&hl=en"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group border border-[#E6DFD3] bg-white p-6 transition-colors hover:border-[#D2B87C]"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center bg-[#F5F0E6] text-[#927B4D]">
                                            <GraduationCap
                                                size={19}
                                                strokeWidth={1.5}
                                            />
                                        </div>
                                        <div>
                                            <p className="text-[9px] uppercase tracking-[0.15em] text-[#927B4D]">
                                                Google Scholar
                                            </p>
                                            <p className="mt-1 text-sm text-[#20235A]">
                                                Research Profile
                                            </p>
                                        </div>
                                    </div>
                                    <ExternalLink
                                        size={15}
                                        className="text-[#927B4D] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                    />
                                </div>
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <FooterSection />
        </>
    );
}
