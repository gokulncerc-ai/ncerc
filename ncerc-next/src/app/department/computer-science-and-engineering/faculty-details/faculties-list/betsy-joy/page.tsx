
"use client";

import Link from "next/link";
import {
    ArrowDown,
    ArrowUpRight,
    BookOpen,
    ExternalLink,
    GraduationCap,
    Lightbulb,
    Microscope,
    ShieldCheck,
    UserRound,
    Award,
    BookMarked,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../../../DepartmentNav/DepartmentNavigation";

const researchInterests = [
    "Data Structures and Algorithms",
    "Artificial Intelligence / Machine Learning",
    "Natural Language Processing",
    "Cyber Security",
    "Human-Computer Interaction",
];

const keywords = [
    "Data Structures and Algorithms",
    "Artificial Intelligence",
    "Image Processing",
    "Natural Language Processing",
    "Cybersecurity",
    "Cloud & Distributed Systems",
];

const courses = [
    ["1", "B.Tech", "CSE", "Algorithm Analysis and Design"],
    ["2", "B.Tech", "CSE", "Algorithmic Thinking with Python"],
    ["3", "B.Tech", "CSE", "Programming in C"],
    ["4", "B.Tech", "CSE", "Database Management Systems"],
    ["5", "B.Tech", "CSE", "Data Structures"],
    ["6", "B.Tech", "CSE", "Security in Computing"],
    ["7", "B.Tech", "CSE", "Network Security Protocol"],
    ["8", "B.Tech", "CSE", "Distributed Computing"],
    ["9", "B.Tech", "CSE", "Computer Networks"],
    ["10", "B.Tech", "CSE", "Mobile Computing"],
    ["11", "B.Tech", "CSE", "DBMS Lab"],
    ["12", "B.Tech", "CSE", "Data Structures Lab"],
    ["13", "M.Tech", "CSE & Cyber", "Introduction to Cryptography"],
    ["14", "M.Tech", "CSE & Cyber", "Advanced Data Structures and Algorithms"],
    ["15", "M.Tech", "CSE & Cyber", "Advanced DBMS"],
];

const publications = [
    {
        title:
            "Interpretable Al for accurate lung pathology identification across CT and X-Ray modalities.",
        journal: "IJERT",
        volume: "Volume 15, Issue 02, 2026",
        year: "2026",
    },
    {
        title:
            "Federated learning - based secure energy management with FEDPROX and FEDMA for enhanced privacy and efficiency.",
        journal: "IJRAR",
        volume: "Volume 12, Issue 02, 2025",
        year: "2025",
    },
    {
        title: "Qwipboard: Clipboard AI",
        journal: "IJSREM",
        volume: "Volume 09, Issue 03, 2025",
        year: "2025",
    },
    {
        title: "Drive On Pothole And Sign Detection",
        journal: "International Journal of Creative Research Thoughts",
        volume: "Volume 12, Issue 4, 2024",
        year: "2024",
    },
    {
        title: "Hospital Pre-booking and Management System",
        journal:
            "International Journal of Scientific Research in Engineering and Management",
        volume: "Volume 8, Issue 5, May 2024",
        year: "2024",
    },
    {
        title: "AI Enhanced Smart Living",
        journal: "International Journal of Creative Research Thoughts",
        volume: "Volume, Issue 2, 2024",
        year: "2024",
    },
    {
        title: "Message encode decode using TKINTER",
        journal: "NCERC Int. J. Adv. Sci.Eng and Tech (NIJASET)",
        volume: "Vol 2, No. 2",
        year: "2023",
    },
    {
        title:
            "A Survey on Leukemia Cells (Leucocytes) Detection using Image Processing Techniques.",
        journal: "International Journal of Research and Scientific Innovation",
        volume: "Volume 6, Issue 5, 2024",
        year: "2019",
    },
];

const patents = [
    "Digital Twin Based Smart Building Performance Evaluation System with Market-Driven Maintenance Planning and Automated IOT Infrastructure",
];

const profileSections = [
    { id: "about", label: "About" },
    { id: "research", label: "Research" },
    { id: "courses", label: "Courses" },
    { id: "publications", label: "Publications" },
    { id: "patents", label: "Patent" },
    { id: "book-publication", label: "Book Publication" },
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

export default function BetsyJoyFacultyPage() {
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
                                Department of Computer Science and Engineering
                            </p>

                            <h1 className="mt-4 font-serif text-4xl font-normal leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                                Ms. Betsy Joy
                            </h1>

                            <p className="mt-3 font-serif text-lg italic text-[#D2B87C] sm:text-xl">
                                Assistant Professor
                            </p>

                            <p className="mt-2 text-xs leading-6 text-white/55">
                                Nehru College of Engineering and Research Centre,
                                Thrissur, Kerala
                            </p>

                            <div className="mt-7 flex flex-wrap gap-3">
                                <span className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80">
                                    M.Tech – Computer Science and Engineering
                                </span>
                                <span className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80">
                                    B.Tech – Computer Science and Engineering
                                </span>
                            </div>

                            <div className="mt-8 flex flex-wrap items-center gap-3">
                                <span className="h-px w-10 bg-[#D2B87C]" />
                                <span className="text-[10px] uppercase tracking-[0.18em] text-white/50">
                                    NCERC Unique ID: 3942
                                </span>
                                <span className="hidden h-1 w-1 rounded-full bg-[#D2B87C]/60 sm:block" />
                                <span className="text-[10px] uppercase tracking-[0.18em] text-white/50">
                                    Researcher ID: OUH-7206-2025
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
                                            Algorithms, AI & Cyber Security
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
                                            15 Listed Subjects
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
                                title="About Ms. Betsy Joy"
                                description="Academic background, teaching approach, and professional details."
                            />

                            <p className="text-sm leading-8 text-[#55535B]">
                                An Assistant Professor in Computer Science and Engineering with a strong commitment to
                                teaching, research, and academic excellence. I am dedicated to fostering critical thinking,
                                innovation, and technical proficiency among students while contributing to scholarly research
                                through publications and collaborative projects.
                            </p>
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
                                value="Computer Science and Engineering"
                            />
                            <DetailItem
                                label="Institution"
                                value="Nehru College of Engineering and Research Centre, Thrissur, Kerala"
                            />
                            {/* <DetailItem
                                label="Qualification"
                                value="M.Tech – CSE, B.Tech – CSE"
                            /> */}
                            {/* <DetailItem
                                label="NCERC Unique ID"
                                value="3942"
                            /> */}
                            {/* <DetailItem
                                label="Researcher ID"
                                value="OUH-7206-2025"
                            /> */}

                            <div className="mt-5 space-y-3">
                                <a
                                    href="https://orcid.org/0009-0006-0386-8026"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between border border-[#E5DED1] px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#20235A] transition-colors hover:border-[#D2B87C] hover:bg-[#FAF7F2]"
                                >
                                    ORCID Profile
                                    <ExternalLink size={14} />
                                </a>

                                <a
                                    href="https://scholar.google.com/citations?view_op=list_works&hl=en&hl=en&user=s-TQSOOAAAAJ"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between border border-[#E5DED1] px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#20235A] transition-colors hover:border-[#D2B87C] hover:bg-[#FAF7F2]"
                                >
                                    Google Scholar Profile
                                    <ExternalLink size={14} />
                                </a>
                            </div>
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
                            description="Research interests and subject areas that form the foundation of her academic work."
                        />

                        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                            <div className="grid gap-3 sm:grid-cols-2">
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

                            <div className="border border-[#E8E1D5] bg-[#20235A] p-6 sm:p-8">
                                <div className="flex items-center gap-3">
                                    <Lightbulb
                                        size={20}
                                        className="text-[#D2B87C]"
                                        strokeWidth={1.5}
                                    />
                                    <h3 className="font-serif text-xl text-white">
                                        Research Keywords
                                    </h3>
                                </div>

                                <p className="mt-3 text-xs leading-6 text-white/55">
                                    Key areas associated with her research and
                                    academic interests.
                                </p>

                                <div className="mt-6 flex flex-wrap gap-2">
                                    {keywords.map((keyword) => (
                                        <span
                                            key={keyword}
                                            className="border border-[#D2B87C]/35 px-3 py-2 text-[10px] tracking-wide text-[#E9D9B5]"
                                        >
                                            {keyword}
                                        </span>
                                    ))}
                                </div>
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
                            title="Subjects Handled"
                            description="Subjects handled across undergraduate and postgraduate programmes in Computer Science and Engineering."
                        />

                        <div className="mb-5 flex items-center gap-3">
                            <BookOpen
                                size={18}
                                className="text-[#927B4D]"
                                strokeWidth={1.5}
                            />
                            <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#927B4D]">
                                15 Subjects Listed
                            </p>
                        </div>

                        <DataTable
                            headers={[
                                "Sl. No.",
                                "Stream",
                                "Branch",
                                "Subject",
                            ]}
                            widths={[
                                "10%",
                                "18%",
                                "20%",
                                "52%",
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
                            title="Publications"
                            description="Research papers published in journals across areas of artificial intelligence, cybersecurity, image processing, and computing."
                        />

                        <div className="mb-6 border border-[#E8E1D5] bg-[#FAF7F2] p-5 sm:p-6">
                            <p className="font-serif text-2xl text-[#20235A]">
                                8 Publications
                            </p>
                            <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#927B4D]">
                                Journal Publication Details
                            </p>
                        </div>

                        <div className="space-y-4">
                            {publications.map((publication, index) => (
                                <article
                                    key={index}
                                    className="grid gap-4 border border-[#E8E1D5] bg-white p-5 transition-colors hover:border-[#D2B87C] sm:grid-cols-[85px_1fr] sm:gap-6 sm:p-6"
                                >
                                    <div className="flex items-center gap-3 sm:block">
                                        <span className="font-serif text-2xl text-[#927B4D]">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                        <span className="h-px w-8 bg-[#D2B87C] sm:mt-3 sm:block" />
                                    </div>

                                    <div>
                                        <p className="text-sm font-medium leading-7 text-[#4F4D55]">
                                            {publication.title}
                                        </p>

                                        <p className="mt-3 text-xs font-semibold text-[#20235A]">
                                            {publication.journal}
                                        </p>

                                        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2">
                                            <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[#927B4D]">
                                                {publication.volume}
                                            </span>
                                            <span className="h-1 w-1 rounded-full bg-[#D2B87C]" />
                                            <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[#927B4D]">
                                                Year: {publication.year}
                                            </span>
                                        </div>

                                        <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#A18A5B]">
                                            Author: Betsy Joy
                                        </p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Patent Section */}
                <section
                    id="patents"
                    className="scroll-mt-24 bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="05"
                            eyebrow="Innovation & Intellectual Property"
                            title="Patent"
                            description="Patent contribution in the domain of smart building technologies and digital twin systems."
                        />

                        <div className="border border-[#E8E1D5] bg-white p-6 sm:p-8">
                            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#F5F0E6] text-[#927B4D]">
                                    <ShieldCheck size={23} strokeWidth={1.5} />
                                </div>

                                <div>
                                    <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#927B4D]">
                                        Patent Contribution · 01
                                    </p>

                                    <h3 className="font-serif text-xl leading-8 text-[#20235A] sm:text-2xl">
                                        Digital Twin Based Smart Building
                                        Performance Evaluation System with
                                        Market-Driven Maintenance Planning and
                                        Automated IOT Infrastructure
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Book Publication Section */}
                <section
                    id="book-publication"
                    className="scroll-mt-24 bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="06"
                            eyebrow="Academic Contributions"
                            title="Book Publication"
                            description="Published academic book in the domain of Internet of Things."
                        />

                        <div className="grid gap-7 border border-[#E8E1D5] bg-[#FAF7F2] p-6 sm:p-8 lg:grid-cols-[110px_1fr] lg:gap-9">
                            <div className="flex h-28 w-24 items-center justify-center border border-[#D2B87C]/50 bg-[#20235A] text-[#D2B87C]">
                                <BookMarked size={38} strokeWidth={1.2} />
                            </div>

                            <div>
                                <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#927B4D]">
                                    Book Publication · 2026
                                </p>

                                <h3 className="mt-3 font-serif text-2xl leading-tight text-[#20235A] sm:text-3xl">
                                    IOT Architecture and Protocols
                                </h3>

                                <div className="mt-6 grid gap-5 border-t border-[#E5DED1] pt-5 sm:grid-cols-2">
                                    <div>
                                        <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#927B4D]">
                                            Publisher
                                        </p>
                                        <p className="mt-2 text-sm text-[#393947]">
                                            RK Publications
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#927B4D]">
                                            ISBN
                                        </p>
                                        <p className="mt-2 break-all text-sm text-[#393947]">
                                            978-93-47046-94-0
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#927B4D]">
                                            Edition
                                        </p>
                                        <p className="mt-2 text-sm text-[#393947]">
                                            1st Edition
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#927B4D]">
                                            Year of Publication
                                        </p>
                                        <p className="mt-2 text-sm text-[#393947]">
                                            2026
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Back to Faculty Directory */}
                <section className="bg-[#FAF7F2] px-5 py-10 sm:px-8 lg:px-12">
                    <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 border-t border-[#EAE4D9] pt-7 sm:flex-row sm:items-center">
                        <div>
                            <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#927B4D]">
                                Computer Science and Engineering
                            </p>
                            <p className="mt-2 font-serif text-xl text-[#20235A]">
                                Explore more faculty profiles
                            </p>
                        </div>

                        <Link
                            href="/department/computer-science-and-engineering/faculty-details"
                            className="inline-flex w-fit items-center gap-3 border border-[#20235A] px-5 py-3 text-[9px] font-semibold uppercase tracking-[0.13em] text-[#20235A] transition-colors hover:bg-[#20235A] hover:text-white"
                        >
                            Back to Faculty Directory
                            <ArrowUpRight size={14} />
                        </Link>
                    </div>
                </section>
            </main>

            <FooterSection />
        </>
    );
}
