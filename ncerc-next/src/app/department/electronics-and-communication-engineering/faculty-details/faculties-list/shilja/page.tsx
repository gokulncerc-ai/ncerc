import Link from "next/link";
import {
    ArrowDown,
    ArrowUpRight,
    BookOpen,
    GraduationCap,
    Lightbulb,
    Microscope,
    ScrollText,
    UserRound,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../../../DepartmentNav/DepartmentNav";

const courses = [
    ["1", "2026", "B.Tech.", "S6", "ECE", "Information theory & coding"],
    ["1", "2026", "B.Tech.", "S6", "ECE", "Communication lab"],
    ["2", "2026", "B.Tech.", "S4", "ECE", "Economics for engineers"],
    ["3", "2025", "B.Tech.", "S7", "ECE", "Optical fiber communication"],
    ["4", "2025", "B.Tech.", "S7", "ECE", "Electromagnetics lab"],
    ["6", "2025", "B.Tech.", "S5", "ECE", "Industrial economics & foreign trade"],
    [
        "7",
        "2025",
        "B.Tech.",
        "S2",
        "AI&ML",
        "Basic of Electrical &Electronics Engineering",
    ],
    [
        "8",
        "2025",
        "B.Tech.",
        "S2",
        "AI&ML",
        "Basic of Electrical &Electronics Engineering workshop",
    ],
];

const researchInterests = [
    "Communication Systems",
    "Signal Processing",
    "Embedded Systems",
    "IoT Applications",
    "Digital Electronics",
    "Electronic Circuit Design",
];

const areasOfInterest = [
    "Teaching and Academic Mentoring",
    "Electronics Circuit Design",
    "Embedded Systems and IoT",
    "Student Project Guidance",
];

const keywords = [
    "Communication Systems",
    "Signal Processing",
    "Embedded Systems",
    "IoT",
    "Digital Electronics",
    "Circuit Design",
];

const profileSections = [
    { id: "about", label: "About" },
    { id: "research", label: "Research" },
    { id: "courses", label: "Courses" },
    { id: "books", label: "Books" },
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

function DetailItem({
    label,
    value,
}: {
    label: string;
    value: React.ReactNode;
}) {
    return (
        <div className="border-b border-[#EAE4D9] py-4 last:border-b-0">
            <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#927B4D]">
                {label}
            </p>
            <div className="mt-2 break-words text-sm leading-6 text-[#393947]">
                {value}
            </div>
        </div>
    );
}

export default function ShiljaFacultyPage() {
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
                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C] sm:text-xs">
                            Faculty Profile
                        </p>
                    </div>

                    <div className="mt-7 grid gap-10 lg:grid-cols-[1fr_280px] lg:items-end">
                        <div>
                            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/50">
                                Department of Electronics and Communication Engineering
                            </p>

                            <h1 className="mt-4 font-serif text-4xl font-normal leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                                Shilja A S
                            </h1>

                            <p className="mt-3 font-serif text-lg italic text-[#D2B87C] sm:text-xl">
                                Assistant Professor
                            </p>

                            <div className="mt-7 flex flex-wrap gap-3">
                                <span className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80">
                                    M.Tech. - Applied Electronics and Communication Systems
                                </span>
                                <span className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80">
                                    B.Tech. - Electronics and Communication Engineering
                                </span>
                            </div>

                            <div className="mt-8 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#D2B87C]" />
                                <span className="text-[10px] uppercase tracking-[0.18em] text-white/50">
                                    NCERC Unique ID: 4442
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
                                        <p className="mt-1 text-xs leading-5 text-white/90">
                                            M.Tech. & B.Tech.
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
                                            Research Interest
                                        </p>
                                        <p className="mt-1 text-xs leading-5 text-white/90">
                                            Communication Systems & Signal Processing
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
                                            Academic Contributions
                                        </p>
                                        <p className="mt-1 text-xs text-white/90">
                                            Courses & Book Publication
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

                {/* Profile Navigation */}
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
                                title="About Shilja A S"
                                description="Academic background, teaching approach and professional profile."
                            />

                            <div className="space-y-5 text-sm leading-8 text-[#55535B]">
                                <p>
                                    Shilja A S is an academician in the field of Electronics and Communication Engineering with a strong academic background. She completed her M.Tech in Applied Electronics and Communication Systems from APJ Abdul Kalam Technological University with a CGPA of 9.14. She is currently working as an Assistant Professor in the Department of Electronics and Communication Engineering. Her areas of interest include Communication Systems, Signal Processing, Embedded Systems, and emerging technologies in Electronics. She is actively involved in teaching undergraduate students, guiding academic projects, and promoting practical-oriented learning.
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
                                value="Electronics and Communication Engineering"
                            />

                            <DetailItem
                                label="NCERC Unique ID"
                                value="4442"
                            />

                            {/* <DetailItem
                                label="Postgraduate Qualification"
                                value="M.Tech. (Applied Electronics and Communication Systems)"
                            /> */}

                            {/* <DetailItem
                                label="Undergraduate Qualification"
                                value="B.Tech. (Electronics and Communication Engineering)"
                            /> */}

                            {/* <DetailItem
                                label="University"
                                value="APJ Abdul Kalam Technological University"
                            /> */}

                            {/* <DetailItem
                                label="M.Tech CGPA"
                                value="9.14"
                            /> */}

                            <DetailItem
                                label="ORCID Profile"
                                value={
                                    <Link
                                        href="https://orcid.org/0009-0004-8151-2039"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 text-[#20235A] underline decoration-[#D2B87C] underline-offset-4 transition-colors hover:text-[#927B4D]"
                                    >
                                        View ORCID Profile
                                        <ArrowUpRight size={13} />
                                    </Link>
                                }
                            />

                            <DetailItem
                                label="Google Scholar"
                                value={
                                    <Link
                                        href="https://scholar.google.com/citations?view_op=list_works&hl=en&user=PwqdptMAAAAJ"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 text-[#20235A] underline decoration-[#D2B87C] underline-offset-4 transition-colors hover:text-[#927B4D]"
                                    >
                                        View Google Scholar
                                        <ArrowUpRight size={13} />
                                    </Link>
                                }
                            />
                        </aside>
                    </div>
                </section>

                {/* Research Section */}
                <section
                    id="research"
                    className="scroll-mt-24 bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="02"
                            eyebrow="Academic Exploration"
                            title="Research Interests"
                            description="Research areas and academic interests of Shilja A S."
                        />

                        <div className="grid gap-5 md:grid-cols-[1fr_1fr]">
                            {/* Research Interest Cards */}
                            <div className="border border-[#E8E1D5] bg-[#FAF7F2] p-6 sm:p-8">
                                <div className="flex items-center gap-3">
                                    <Microscope
                                        size={20}
                                        className="text-[#927B4D]"
                                        strokeWidth={1.5}
                                    />
                                    <h3 className="font-serif text-xl text-[#20235A]">
                                        Research Domains
                                    </h3>
                                </div>

                                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                                    {researchInterests.map((interest, index) => (
                                        <div
                                            key={interest}
                                            className="flex items-start gap-3 border-b border-[#E5DED1] pb-3 last:border-b-0"
                                        >
                                            <span className="font-serif text-sm text-[#B49A66]">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>
                                            <p className="text-sm leading-6 text-[#55535B]">
                                                {interest}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Areas of Interest */}
                            <div className="border border-[#E8E1D5] bg-[#FAF7F2] p-6 sm:p-8">
                                <div className="flex items-center gap-3">
                                    <Lightbulb
                                        size={20}
                                        className="text-[#927B4D]"
                                        strokeWidth={1.5}
                                    />
                                    <h3 className="font-serif text-xl text-[#20235A]">
                                        Areas of Interest
                                    </h3>
                                </div>

                                <div className="mt-6 space-y-4">
                                    {areasOfInterest.map((interest, index) => (
                                        <div
                                            key={interest}
                                            className="flex items-start gap-3"
                                        >
                                            <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center border border-[#D2B87C] text-[10px] font-semibold text-[#927B4D]">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>
                                            <p className="text-sm leading-6 text-[#55535B]">
                                                {interest}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Keywords */}
                        <div className="mt-8">
                            <p className="mb-4 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#927B4D]">
                                Key Words
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {keywords.map((keyword) => (
                                    <span
                                        key={keyword}
                                        className="border border-[#E5DED1] bg-[#FAF7F2] px-4 py-2 text-xs text-[#55535B]"
                                    >
                                        {keyword}
                                    </span>
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
                            description="Courses handled across different academic years, programmes, semesters and branches."
                        />

                        <div className="mb-5 flex items-center gap-3">
                            <BookOpen
                                size={18}
                                className="text-[#927B4D]"
                                strokeWidth={1.5}
                            />
                            <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#927B4D]">
                                08 Courses Listed
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

                {/* Books Section */}
                <section
                    id="books"
                    className="scroll-mt-24 bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="04"
                            eyebrow="Academic Publishing"
                            title="Books Published"
                            description="Book title and publication details included in the faculty profile."
                        />

                        <div className="space-y-5">
                            <article className="grid gap-6 border border-[#E5DED1] bg-[#FAF7F2] p-6 sm:grid-cols-[90px_1fr] sm:p-8">
                                <div className="flex h-20 w-20 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                                    <BookOpen
                                        size={29}
                                        strokeWidth={1.3}
                                    />
                                </div>

                                <div>
                                    <div className="flex flex-wrap items-center gap-3">
                                        <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#927B4D]">
                                            Book 01
                                        </span>
                                        <span className="h-px w-7 bg-[#D2B87C]" />
                                        <span className="text-[10px] text-[#8A8580]">
                                            30.8-2025
                                        </span>
                                    </div>

                                    <h3 className="mt-3 font-serif text-xl leading-snug text-[#20235A] sm:text-2xl">
                                        Transformative Innovations In Optical
                                        Communication Networks
                                    </h3>

                                    <div className="mt-4 border-t border-[#EAE4D9] pt-4">
                                        <div className="grid gap-4 sm:grid-cols-2">
                                            <div>
                                                <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#A18A5B]">
                                                    Published By
                                                </p>
                                                <p className="mt-2 text-xs leading-6 text-[#69666B]">
                                                    COSMOS Publications
                                                </p>
                                            </div>

                                            <div>
                                                <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#A18A5B]">
                                                    Edition
                                                </p>
                                                <p className="mt-2 text-xs leading-6 text-[#69666B]">
                                                    1st Edition
                                                </p>
                                            </div>
                                        </div>
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