
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
    ExternalLink,
    Award,
    Briefcase,
    Network,
    BarChart3,
    BookMarked,
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

type Publication = {
    year: string;
    title: string;
};

type Book = {
    year: string;
    month: string;
    title: string;
    publisher: string;
    edition: string;
    isbn: string;
};

/* -------------------------------------------------------
   FACULTY DATA
------------------------------------------------------- */

const qualifications = [
    "PhD (Pursuing)",
    "MBA – Finance and HR",
    "UGC-NET – Management",
];

const researchInterests = [
    "Finance",
    "Investments",
    "Financial Markets",
    "Banking Services",
    "Digital Financial Technology",
    "Investment Management",
    "Financial Performance",
];

const keywords = [
    "Finance",
    "Investments",
    "Financial Performance",
];

const areasOfInterest = [
    "Finance",
    "Human Resource Management",
];

const courses: Course[] = [
    ["01", "2020–2022", "MBA", "S3", "Security Analysis and Portfolio Management"],
    ["02", "2020–2022", "MBA", "S3", "Financial Institutions and Market"],
    ["03", "2022–2024", "MBA", "S3", "Leadership Influence and Power"],
    ["04", "2022–2024", "MBA", "S3", "Security Analysis and Portfolio Management"],
    ["05", "2022–2024", "MBA", "S4", "Strategic Financial Management"],
    ["06", "2023–2025", "MBA", "S1", "Ethics and Corporate Governance"],
    ["07", "2023–2025", "MBA", "S2", "Marketing"],
    ["08", "2023–2025", "MBA", "S3", "Retail Management"],
    ["09", "2023–2025", "MBA", "S4", "Strategic Financial Management"],
    ["10", "2024–2026", "MBA", "S1", "Ethics and Corporate Governance"],
    ["11", "2024–2026", "MBA", "S2", "Marketing"],
    ["12", "2024–2026", "MBA", "S3", "Financial Institutions and Markets"],
    ["13", "2024–2026", "MBA", "S3", "Healthcare Finance and Economics"],
    ["14", "2024–2026", "MBA", "S4", "Financial Services and Risk Management"],
    ["15", "2024–2026", "MBA", "S4", "Healthcare Leadership and Change Management"],
    ["16", "2025–2027", "MBA", "S1", "Organizational Behaviour"],
    ["17", "2025–2027", "MBA", "S2", "Financial Management"],
];

const publications: Publication[] = [
    {
        year: "2026",
        title:
            "The Role of Artificial Intelligence in Shaping Personalized Marketing and Consumer Trust",
    },
    {
        year: "2025",
        title:
            "Navigating the Future: The Role of AI and Machine Learning in Financial Market Innovations",
    },
    {
        year: "2025",
        title:
            "The Influence of User-Generated Content on Brand Reputation and Trust",
    },
    {
        year: "2025",
        title:
            "The Impact of Internet of Things (IoT) on Supply Chain Optimization: A Review of Existing Literature",
    },
    {
        year: "2025",
        title:
            "Bridging Psychological Foundations: Transforming Indian Education Through NEP-2020 and NCF-2023",
    },
    {
        year: "2025",
        title:
            "The Role of Customer Trust in Adopting Digital Investment Tools",
    },
    {
        year: "2025",
        title:
            "How the User Experience of Digital Banking Platforms Affects Customer Trust in Investment Services",
    },
    {
        year: "2025",
        title:
            "A Study of Customers' Influence Regarding Digital Technology Services in Regional Rural Bank",
    },
    {
        year: "2025",
        title:
            "The Role of Leadership in Enhancing Healthcare Quality and Patient Safety",
    },
    {
        year: "2024",
        title:
            "A Study on the Influence of Digital Finance on Individual Behaviour Towards Financial Investments",
    },
    {
        year: "2024",
        title:
            "Navigating Financial Literacy in the Digital Era: Strategies for Success",
    },
    {
        year: "2024",
        title:
            "Navigating the Digital Landscape: Performance Marketing Challenges and Innovations in Kerala",
    },
    {
        year: "2024",
        title:
            "Navigating the High-Stress World of IT: Strategies for Managing Work Pressure",
    },
    {
        year: "2024",
        title:
            "Digital Age Dynamics: Evaluating Financial Literacy Among Bank Customers",
    },
    {
        year: "2024",
        title:
            "Impact of AI Techniques in the Banking Sector",
    },
    {
        year: "2023",
        title:
            "Role of AI in Restructuring the Prospect of Marketing Industry in India",
    },
];

const books: Book[] = [
    {
        year: "2025",
        month: "June",
        title: "Entrepreneurship and Small Business",
        publisher: "Kripa Drishti Publications",
        edition: "1st Edition",
        isbn: "978-81-989440-6-1",
    },
    {
        year: "2025",
        month: "July",
        title: "Marketing Management 4.0: Unleashing Success in Digital Age",
        publisher: "National Press Associates",
        edition: "ISBN: 978-81-989671-6-9",
        isbn: "978-81-989671-6-9",
    },
];

const profileSections = [
    { id: "about", label: "About Me" },
    { id: "research", label: "Research" },
    { id: "courses", label: "Courses" },
    { id: "publications", label: "Publications" },
    { id: "books", label: "Books" },
    { id: "researcher-profiles", label: "Researcher Profiles" },
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
   PUBLICATION LIST
------------------------------------------------------- */

function PublicationList({
    items,
}: {
    items: Publication[];
}) {
    const years = Array.from(
        new Set(items.map((item) => item.year))
    ).sort((a, b) => Number(b) - Number(a));

    return (
        <div>
            {years.map((year) => {
                const yearItems = items.filter(
                    (item) => item.year === year
                );

                return (
                    <div key={year} className="mb-12 last:mb-0">
                        <div className="mb-5 flex items-center gap-4">
                            <h3 className="font-serif text-2xl font-normal text-[#20235A]">
                                {year}
                            </h3>

                            <span className="h-px flex-1 bg-[#D2B87C]" />

                            <span className="text-[9px] uppercase tracking-[0.15em] text-[#927B4D]">
                                {yearItems.length} Publication
                                {yearItems.length !== 1 ? "s" : ""}
                            </span>
                        </div>

                        <div className="border border-[#E6DFD3] bg-white">
                            {yearItems.map((publication, index) => (
                                <article
                                    key={publication.title}
                                    className={
                                        "grid gap-4 p-5 sm:grid-cols-[38px_1fr] sm:gap-5 sm:p-6 " +
                                        (index !== yearItems.length - 1
                                            ? "border-b border-[#EEE9E0]"
                                            : "")
                                    }
                                >
                                    <div className="flex h-9 w-9 items-center justify-center bg-[#F5F0E6] text-[#927B4D]">
                                        <FileText
                                            size={17}
                                            strokeWidth={1.5}
                                        />
                                    </div>

                                    <div>
                                        <h4 className="font-serif text-lg font-normal leading-snug text-[#20235A] sm:text-xl">
                                            {publication.title}
                                        </h4>

                                        <p className="mt-3 text-[10px] uppercase tracking-[0.14em] text-[#927B4D]">
                                            Research Publication · {year}
                                        </p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

/* -------------------------------------------------------
   BOOKS LIST
------------------------------------------------------- */

function BooksList({ items }: { items: Book[] }) {
    return (
        <div className="grid gap-5 lg:grid-cols-2">
            {items.map((book, index) => (
                <article
                    key={book.title}
                    className="border border-[#E6DFD3] bg-white p-6 sm:p-8"
                >
                    <div className="flex items-start justify-between gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#F5F0E6] text-[#927B4D]">
                            <BookMarked size={20} strokeWidth={1.5} />
                        </div>

                        <span className="text-[10px] uppercase tracking-[0.16em] text-[#927B4D]">
                            Book 0{index + 1}
                        </span>
                    </div>

                    <p className="mt-6 text-[10px] font-medium uppercase tracking-[0.17em] text-[#927B4D]">
                        {book.year} · {book.month}
                    </p>

                    <h3 className="mt-3 font-serif text-xl font-normal leading-snug text-[#20235A] sm:text-2xl">
                        {book.title}
                    </h3>

                    <div className="mt-6 border-t border-[#EAE4D9] pt-4">
                        <DetailItem
                            label="Publisher"
                            value={book.publisher}
                        />

                        <DetailItem
                            label="Edition"
                            value={book.edition}
                        />

                        <DetailItem
                            label="ISBN"
                            value={book.isbn}
                        />
                    </div>
                </article>
            ))}
        </div>
    );
}

/* -------------------------------------------------------
   PAGE
------------------------------------------------------- */

export default function DhanyaNairFacultyPage() {
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
                                Mrs. Dhanya Nair
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
                                    NCERC Unique ID: 4071
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
                                            PhD Pursuing, MBA – Finance and HR, UGC-NET
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
                                            Finance and Investment Management
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
                                            Experience
                                        </p>

                                        <p className="mt-1 text-xs leading-5 text-white/90">
                                            8+ Years of Academic and Industrial Experience
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
                                title="About Mrs. Dhanya Nair"
                                description="Academic background, professional experience and scholarly contributions."
                            />

                            <div className="space-y-5 text-sm leading-8 text-[#55535B]">
                                <p>
                                    Ms Dhanya Nair is currently serving as Assistant Professor in Nehru College of Engineering and Research Centre, Kerala. She holds MBA degree in Finance & HR and has qualified UGC-NET examination in management. She is presently pursuing PhD in the area of Finance.
                                </p>

                                <p>
                                    With a total academic and industrial experience spanning over 8 years, she has been actively involved in teaching, research, academic & industrial development. She has published approximately 16 research articles in reputed national and international journals, reflecting her commitment to academic excellence and scholarly contribution.
                                </p>

                                <p>
                                    In addition, she has participated in around 10 national and international conferences. She continues to pursue rigorous academic inquiry while contributing to the academic and professional growth of my students.

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
                                label="Institution"
                                value="Nehru School of Management, NCERC"
                            />

                            {/* <DetailItem
                                label="Qualifications"
                                value="PhD (Pursuing), MBA (Finance and HR), UGC-NET (Management)"
                            /> */}

                            <DetailItem
                                label="Experience"
                                value="8+ Years"
                            />

                            <DetailItem
                                label="NCERC Unique ID"
                                value="4071"
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
                            description="Research focus in finance, financial markets, investment decisions and emerging financial technologies."
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
                                    Finance and Investment Management
                                </h3>

                                <p className="mt-5 text-sm leading-8 text-[#55535B]">
                                    Finance has always been an area of great interest to me because it plays a crucial role in managing money, investments, and economic growth. She is  particularly interested in understanding how financial markets operate and how individuals and institutions make investment decisions. The study of finance helps in analyzing risks, forecasting financial performance, and making strategic decisions that can improve financial stability.
                                </p>

                                <p className="mt-4 text-sm leading-8 text-[#55535B]">
                                    She is also interested in areas such as banking services, digital financial technology, and investment management, which are rapidly transforming the financial sector. Developing knowledge in finance will help her to build strong analytical skills and enable me to contribute effectively to the financial services industry. Therefore, she is motivated to continuously learn and explore new concepts in finance to enhance her academic and professional growth.
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
                            description="Courses handled across different academic batches of the MBA programme."
                        />

                        <DataTable
                            headers={[
                                "Sl. No.",
                                "Academic Year",
                                "Stream",
                                "Semester",
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
                            title="Publications"
                            description="Research articles and scholarly publications listed in the faculty academic profile."
                        />

                        <div className="mb-8 grid grid-cols-2 gap-4 sm:max-w-md">
                            <div className="border border-[#E6DFD3] bg-[#FAF7F2] p-5">
                                <p className="font-serif text-3xl font-normal text-[#20235A]">
                                    16
                                </p>

                                <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-[#927B4D]">
                                    Listed Publications
                                </p>
                            </div>

                            <div className="border border-[#E6DFD3] bg-[#FAF7F2] p-5">
                                <p className="font-serif text-3xl font-normal text-[#20235A]">
                                    2023–26
                                </p>

                                <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-[#927B4D]">
                                    Publication Period
                                </p>
                            </div>
                        </div>

                        <PublicationList items={publications} />
                    </div>
                </section>

                {/* BOOKS SECTION */}
                <section
                    id="books"
                    className="scroll-mt-24 bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="05"
                            eyebrow="Scholarly Contributions"
                            title="Books Published"
                            description="Books authored and published as part of academic and scholarly contributions."
                        />

                        <BooksList items={books} />
                    </div>
                </section>

                {/* RESEARCHER PROFILES */}
                <section
                    id="researcher-profiles"
                    className="scroll-mt-24 bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="06"
                            eyebrow="Academic Identity"
                            title="Researcher Profiles"
                            description="Research identifiers and academic profiles associated with Mrs. Dhanya Nair."
                        />

                        <div className="grid gap-5 md:grid-cols-2">
                            {/* RESEARCH GATE */}
                            <div className="border border-[#E6DFD3] bg-[#FAF7F2] p-6 sm:p-7">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-11 w-11 items-center justify-center bg-white text-[#927B4D]">
                                        <Award
                                            size={19}
                                            strokeWidth={1.5}
                                        />
                                    </div>

                                    <div>
                                        <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-[#927B4D]">
                                            ResearchGate ID
                                        </p>

                                        <p className="mt-1 text-sm text-[#393947]">
                                            Dhanya-Nair-15
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* NCERC ID */}
                            <div className="border border-[#E6DFD3] bg-[#FAF7F2] p-6 sm:p-7">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-11 w-11 items-center justify-center bg-white text-[#927B4D]">
                                        <BarChart3
                                            size={19}
                                            strokeWidth={1.5}
                                        />
                                    </div>

                                    <div>
                                        <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-[#927B4D]">
                                            NCERC Unique ID
                                        </p>

                                        <p className="mt-1 text-sm text-[#393947]">
                                            4071
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* GOOGLE SCHOLAR */}
                            <div className="border border-[#E6DFD3] bg-[#FAF7F2] p-6 sm:p-7 md:col-span-2">
                                <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-white text-[#927B4D]">
                                            <BookOpen
                                                size={19}
                                                strokeWidth={1.5}
                                            />
                                        </div>

                                        <div>
                                            <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-[#927B4D]">
                                                Google Scholar Profile
                                            </p>

                                            <p className="mt-1 text-sm text-[#393947]">
                                                Academic Research Profile
                                            </p>
                                        </div>
                                    </div>

                                    <a
                                        href="https://scholar.google.com/citations?hl=en&authuser=1&user=MHn4rhMAAAAJ"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 border border-[#D2B87C] px-5 py-3 text-[9px] font-medium uppercase tracking-[0.14em] text-[#927B4D] transition-colors hover:bg-[#20235A] hover:text-white"
                                    >
                                        View Google Scholar
                                        <ExternalLink size={13} />
                                    </a>
                                </div>
                            </div>

                            {/* ORCID */}
                            {/* <div className="border border-[#E6DFD3] bg-[#FAF7F2] p-6 sm:p-7 md:col-span-2">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-11 w-11 items-center justify-center bg-white text-[#927B4D]">
                                        <GraduationCap
                                            size={19}
                                            strokeWidth={1.5}
                                        />
                                    </div>

                                    <div>
                                        <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-[#927B4D]">
                                            ORCID Profile
                                        </p>

                                        <p className="mt-1 text-sm text-[#393947]">
                                            Not Provided
                                        </p>
                                    </div>
                                </div> 
                            </div> */}
                        </div>
                    </div>
                </section>
            </main>

            <FooterSection />
        </>
    );
}
