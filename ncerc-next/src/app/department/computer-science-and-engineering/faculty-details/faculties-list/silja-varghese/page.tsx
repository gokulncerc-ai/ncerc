
"use client";

import Link from "next/link";
import {
    ArrowDown,
    BookOpen,
    ExternalLink,
    GraduationCap,
    Lightbulb,
    Microscope,
    ShieldCheck,
    UserRound,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../../../DepartmentNav/DepartmentNavigation";

const researchInterests = [
    "Deep Learning",
    "Machine Learning",
    "Mental Health Analytics",
    "Affective Computing",
    "Natural Language Processing",
    "Time-Series Analysis",
    "Healthcare Data Mining",
    "Artificial Intelligence in Healthcare",
];

const keywords = [
    "Data Mining",
    "Web Development",
    "Machine Learning (ML)",
    "Deep Learning",
    "Mental Health Prediction",
    "Depression Detection",
    "Behavioural Analytics",
    "Psychological Data Analysis",
];

const areasOfInterest = [
    "Machine Learning & Artificial Intelligence",
    "IoT-based Edge Computing Systems",
    "Network Security & Cryptography",
    "Data Structures",
    "Computer Networks",
];

const courses = [
    ["1", "B.Tech", "CSE / AI & ML", "Data Structures"],
    ["2", "B.Tech", "CSE / AI & ML", "Operating Systems"],
    ["3", "B.Tech", "CSE / AI & ML", "Database Management Systems"],
    ["4", "B.Tech", "CSE / AI & ML", "Computer Networks"],
    ["5", "B.Tech", "CSE / AI & ML", "Programming Languages – C, Java"],
    ["6", "B.Tech", "CSE / AI & ML", "Data Communication"],
    ["7", "B.Tech", "CSE / AI & ML", "System Software"],
    ["8", "B.Tech", "CSE / AI & ML", "Software Architecture"],
    ["9", "B.Tech", "CSE / AI & ML", "Software Engineering"],
    [
        "10",
        "B.Tech",
        "CSE / AI & ML",
        "Computer Organization and Architecture",
    ],
    [
        "11",
        "B.Tech",
        "CSE / AI & ML",
        "Data Mining and Data Warehousing",
    ],
    ["12", "B.Tech", "CSE / AI & ML", "Compiler Design"],
    ["13", "M.Tech", "CSE", "Database Security"],
    ["14", "M.Tech", "CSE", "Advanced Data Structures"],
    ["15", "M.Tech", "CSE", "Advanced Operating Systems"],
    ["16", "M.Tech", "CSE", "Advanced DBMS"],
    ["17", "M.Tech", "CSE", "Project Management"],
];

const patents = [
    {
        number: "01",
        title:
            "Digital Twin Based Smart Building Performance Evaluation System with Market-Driven Maintenance Planning and Automated IOT Infrastructure",
    },
    {
        number: "02",
        title: "Deep Learning based Drug Delivery for Kidney Related Ailments",
    },
];

const profileSections = [
    { id: "about", label: "About" },
    { id: "research", label: "Research" },
    { id: "courses", label: "Courses" },
    { id: "publications", label: "Publications" },
    { id: "academic-contributions", label: "Patents" },
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

function DataTable({
    headers,
    rows,
    widths,
}: {
    headers: string[];
    rows: string[][];
    widths?: string[];
}) {
    return (
        <div className="overflow-hidden border border-[#E6DFD3] bg-white">
            <div className="overflow-x-auto">
                <table className="w-full min-w-[650px] border-collapse text-left">
                    {widths && (
                        <colgroup>
                            {widths.map((width, index) => (
                                <col key={index} style={{ width }} />
                            ))}
                        </colgroup>
                    )}

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

export default function SiljaVargheseFacultyPage() {
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
                                Department of Computer Applications
                            </p>

                            <h1 className="mt-4 font-serif text-4xl font-normal leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                                Ms. Silja Varghese
                            </h1>

                            <p className="mt-3 font-serif text-lg italic text-[#D2B87C] sm:text-xl">
                                Assistant Professor
                            </p>

                            <div className="mt-7 flex flex-wrap gap-3">
                                <span className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80">
                                    Ph.D Pursuing
                                </span>
                                <span className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80">
                                    M.Tech CSE
                                </span>
                            </div>

                            <div className="mt-8 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#D2B87C]" />
                                <span className="text-[10px] uppercase tracking-[0.18em] text-white/50">
                                    NCERC Unique ID: 3753
                                </span>
                            </div>
                        </div>

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
                                            Ph.D Pursuing, M.Tech CSE
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
                                            Machine Learning & Healthcare AI
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
                                            17 Listed Courses
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
                                title="About Ms. Silja Varghese"
                                description="Academic background, teaching experience, and professional details."
                            />

                            <p className="text-sm leading-8 text-[#55535B]">
                                Highly motivated researcher and educator with over 15 years of experience in academic teaching and
                                research, focusing on applied Machine Learning and IoT security. Dedicated to fostering an interactive
                                learning environment and developing innovative, sustainable technology solutions.
                            </p>

                            <div className="mt-8 grid gap-3 sm:grid-cols-2">
                                <a
                                    href="https://orcid.org/0009-0009-5006-1366"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between border border-[#E5DED1] bg-white px-4 py-4 transition-colors hover:border-[#D2B87C]"
                                >
                                    <div>
                                        <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#927B4D]">
                                            ORCID Profile
                                        </p>
                                        <p className="mt-1 text-xs font-medium text-[#20235A]">
                                            View Researcher Profile
                                        </p>
                                    </div>
                                    <ExternalLink
                                        size={15}
                                        className="text-[#927B4D]"
                                    />
                                </a>

                                <a
                                    href="https://scholar.google.com/citations?user=BambrrEAAAAJ&hl=en"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between border border-[#E5DED1] bg-white px-4 py-4 transition-colors hover:border-[#D2B87C]"
                                >
                                    <div>
                                        <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#927B4D]">
                                            Google Scholar
                                        </p>
                                        <p className="mt-1 text-xs font-medium text-[#20235A]">
                                            View Scholar Profile
                                        </p>
                                    </div>
                                    <ExternalLink
                                        size={15}
                                        className="text-[#927B4D]"
                                    />
                                </a>
                            </div>
                        </div>

                        <aside className="h-fit border border-[#E4DCCE] bg-white p-6">
                            <div className="mb-4 flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center bg-[#F5F0E6] text-[#927B4D]">
                                    <UserRound
                                        size={19}
                                        strokeWidth={1.5}
                                    />
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
                                value="Computer Applications"
                            />
                            {/* <DetailItem
                                label="Qualification"
                                value="Ph.D Pursuing, M.Tech CSE"
                            /> */}
                            {/* <DetailItem
                                label="Experience"
                                value="Over 15 Years"
                            /> */}
                            <DetailItem
                                label="NCERC Unique ID"
                                value="3753"
                            />
                            <DetailItem
                                label="Scopus Researcher ID"
                                value="59971803000"
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
                            title="Research & Areas of Interest"
                            description="Research interests and subject areas focusing on intelligent computing, healthcare analytics, and emerging technologies."
                        />

                        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
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
                                                className="flex items-start gap-4 border border-[#E8E1D5] bg-[#FAF7F2] p-5 transition-colors hover:border-[#D2B87C]"
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
                            </div>

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
                                    Core academic and technical areas of
                                    specialisation.
                                </p>

                                <div className="mt-5 space-y-0">
                                    {areasOfInterest.map((area, index) => (
                                        <div
                                            key={area}
                                            className="flex items-start gap-4 border-b border-white/15 py-4 last:border-b-0"
                                        >
                                            <span className="font-serif text-lg text-[#D2B87C]">
                                                {String(index + 1).padStart(
                                                    2,
                                                    "0"
                                                )}
                                            </span>
                                            <p className="pt-1 text-sm leading-6 text-white/85">
                                                {area}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Research Keywords */}
                        <div className="mt-8 border border-[#E8E1D5] bg-[#FAF7F2] p-6 sm:p-8">
                            <div className="flex items-center gap-3">
                                <ShieldCheck
                                    size={20}
                                    className="text-[#927B4D]"
                                    strokeWidth={1.5}
                                />
                                <h3 className="font-serif text-xl text-[#20235A]">
                                    Research Keywords
                                </h3>
                            </div>

                            <p className="mt-3 text-xs leading-6 text-[#69666B]">
                                Key terms associated with research activities
                                and academic interests.
                            </p>

                            <div className="mt-5 flex flex-wrap gap-2">
                                {keywords.map((keyword) => (
                                    <span
                                        key={keyword}
                                        className="border border-[#DCD4C5] bg-white px-3 py-2 text-[10px] tracking-wide text-[#55535B]"
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
                            description="Subjects handled across undergraduate and postgraduate programmes."
                        />

                        <div className="mb-5 flex flex-wrap items-center gap-5">
                            <div className="flex items-center gap-3">
                                <BookOpen
                                    size={18}
                                    className="text-[#927B4D]"
                                    strokeWidth={1.5}
                                />
                                <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#927B4D]">
                                    17 Subjects Listed
                                </p>
                            </div>

                            <span className="h-4 w-px bg-[#DCD4C5]" />

                            <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#77747A]">
                                B.Tech · 12 Subjects
                            </p>

                            <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#77747A]">
                                M.Tech · 5 Subjects
                            </p>
                        </div>

                        <DataTable
                            headers={[
                                "Sl. No.",
                                "Programme",
                                "Branch",
                                "Subject",
                            ]}
                            widths={["12%", "18%", "22%", "48%"]}
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
                            title="Publications"
                            description="Conference and journal publication details."
                        />

                        <div className="grid gap-8 lg:grid-cols-[1fr_310px]">
                            <div className="border border-[#E8E1D5] bg-[#FAF7F2] p-6 sm:p-8">
                                <div className="flex items-center gap-3">
                                    <BookOpen
                                        size={20}
                                        className="text-[#927B4D]"
                                        strokeWidth={1.5}
                                    />
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#927B4D]">
                                        Conference / Journal Details
                                    </p>
                                </div>

                                <h3 className="mt-5 font-serif text-2xl text-[#20235A]">
                                    Research Publications
                                </h3>

                                <p className="mt-3 max-w-2xl text-sm leading-7 text-[#69666B]">
                                    Explore the conference and journal
                                    publication details through the academic
                                    resource folder.
                                </p>
                            </div>

                            <div className="flex flex-col justify-between border border-[#E8E1D5] bg-[#20235A] p-6 sm:p-8">
                                <div>
                                    <p className="text-[9px] font-semibold uppercase tracking-[0.17em] text-[#D2B87C]">
                                        Publication Archive
                                    </p>
                                    <h3 className="mt-3 font-serif text-xl leading-snug text-white">
                                        View Research Documents
                                    </h3>
                                    <p className="mt-3 text-xs leading-6 text-white/60">
                                        Access the shared folder containing
                                        publication-related documents.
                                    </p>
                                </div>

                                <a
                                    href="https://drive.google.com/drive/folders/1CQoL7x_F3hcJAfwQE6zxK38kx6PDLjfj?usp=drive_link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-8 inline-flex items-center justify-between border border-[#D2B87C]/50 px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#E9D9B5] transition-colors hover:border-[#D2B87C] hover:bg-white/10"
                                >
                                    View Publications
                                    <ExternalLink size={14} />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Academic Contributions / Patents */}
                <section
                    id="academic-contributions"
                    className="scroll-mt-24 bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="05"
                            eyebrow="Intellectual Property"
                            title="Patents"
                            description="Patent contributions in emerging technology and applied research."
                        />

                        <div className="grid gap-5 md:grid-cols-2">
                            {patents.map((patent) => (
                                <article
                                    key={patent.number}
                                    className="border border-[#E8E1D5] bg-white p-6 sm:p-8"
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex h-10 w-10 items-center justify-center bg-[#F5F0E6] text-[#927B4D]">
                                            <ShieldCheck
                                                size={19}
                                                strokeWidth={1.5}
                                            />
                                        </div>

                                        <span className="font-serif text-2xl text-[#B49A66]">
                                            {patent.number}
                                        </span>
                                    </div>

                                    <p className="mt-6 text-[9px] font-semibold uppercase tracking-[0.17em] text-[#927B4D]">
                                        Patent {patent.number}
                                    </p>

                                    <h3 className="mt-3 font-serif text-xl leading-relaxed text-[#20235A]">
                                        {patent.title}
                                    </h3>

                                    <div className="mt-6 h-[2px] w-10 bg-[#D2B87C]" />
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

             
            </main>

            <FooterSection />
        </>
    );
}
