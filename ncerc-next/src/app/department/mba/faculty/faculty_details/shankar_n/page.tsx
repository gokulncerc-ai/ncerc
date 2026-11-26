
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

type Course = {
    number: string;
    year: string;
    stream: string;
    semester: string[];
    batch: string[];
    subjects: string[];
};

type Publication = {
    year: string;
    title: string;
    details: string;
    link?: string;
};

type Book = {
    year: string;
    date: string;
    title: string;
    publisher: string;
    edition: string;
};

/* -------------------------------------------------------
   FACULTY DATA
------------------------------------------------------- */

const qualifications = [
    "M.Sc. (Ag)",
    "MBA",
    "Ph.D.",
    "TNSLET – Management Studies",
];

const researchInterests = [
    "Entrepreneurship Development",
    "Human Resource Management",
];

const keywords = [
    "Entrepreneurship Development",
    "Human Resource Management",
];

const areasOfInterest = [
    "Human Resource Management",
    "Entrepreneurship Development",
];

const courses: Course[] = [
    {
        number: "01",
        year: "2021–22",
        stream: "MBA",
        semester: ["S2", "S3", "S4"],
        batch: ["2021", "2020", "2020"],
        subjects: [
            "Entrepreneurship Development",
            "Industry 4.0 & AI",
            "Business Analytics",
        ],
    },
    {
        number: "02",
        year: "2022–23",
        stream: "MBA",
        semester: ["S3", "S4", "S1", "S2"],
        batch: ["2021", "2021", "2022", "2022"],
        subjects: [
            "International Business",
            "Business Analytics",
            "Legal Systems for Business",
            "Entrepreneurship Development",
        ],
    },
    {
        number: "03",
        year: "2023–24",
        stream: "Not specified",
        semester: ["S4", "S3", "S1", "S2"],
        batch: ["2022", "2022", "2023", "2023"],
        subjects: [
            "Management of Sustainable Business",
            "International Business",
            "Legal Systems for Business",
            "Entrepreneurship Development",
        ],
    },
    {
        number: "04",
        year: "2024–25",
        stream: "MBA",
        semester: ["S3", "S4", "S1", "S2"],
        batch: ["2023", "2023", "2024", "2023"],
        subjects: [
            "International Business",
            "Management of Sustainable Business",
            "Legal Systems for Business",
            "Entrepreneurship Development",
        ],
    },
    {
        number: "05",
        year: "2025–26",
        stream: "MBA",
        semester: ["S1", "S2", "S3", "S3", "S4", "S4"],
        batch: ["2025", "2025", "2024", "2024", "2024", "2024"],
        subjects: [
            "Legal Framework for Business",
            "Management Information System",
            "(i) Business Analytics Foundations",
            "(ii) Strategic Management",
            "(i) Strategic Human Resource Management",
            "(ii) Total Quality Management",
        ],
    },
];

const publications: Publication[] = [
    {
        year: "2026",
        title:
            "The Effect of Attitude and Barrier towards Entrepreneurial Intention among Transgenders",
        details:
            "Prepared for Scopus Publication.",
    },
    {
        year: "2025",
        title:
            "Classroom to Boardroom: Teaching Sustainability as a Core Competency in Management Studies",
        details:
            "Conference Paper – Nehru Arts College, Coimbatore.",
    },
    {
        year: "2025",
        title:
            "The Role of Leadership in Enhancing Healthcare Quality and Patient Safety",
        details:
            "Advances in Consumer Research, Issue 6, pp. 598–602. ABDC Journal.",
    },
    {
        year: "2025",
        title:
            "Management in Supply Chains through Predictive Analytics and Big Data Techniques",
        details:
            "Indian Journal of Information Sources and Services. ISSN: 223167094. Scopus.",
    },
    {
        year: "2024",
        title:
            "The Role of Consumer Behaviour in Promoting Sustainable Products Adoption",
        details:
            "International Conference – Emborio-24.",
    },
    {
        year: "2024",
        title:
            "Global To Local Perspectives In Succession Planning Of Family Business In Unorganized Sector",
        details:
            "Scopus publication.",
        link: "https://doi.org/10.53555/kuey.v30i5.3386",
    },
    {
        year: "2023",
        title:
            "The Investor Sentiment and Stock Market Behaviour: An Analysis of India",
        details:
            "Journal of Southwest Jiaotong University. ISSN: 0258-2724. Scopus.",
        link: "https://jsju.org.cn/",
    },
    {
        year: "2022",
        title:
            "Employee Welfare Measures – A Study on Engineering College Teachers",
        details:
            "Journal of Education: Rabindrabharati University. ISSN: 0972-7175, Vol. XXIV, No. 7, 2021–108, 2022. UGC CARE.",
    },
];

const books: Book[] = [
    {
        year: "2025",
        date: "07.06.2025",
        title: "Aligning HRM and Business Strategy",
        publisher: "Rest Publishers",
        edition: "ISBN: 978-81-988098-7-2",
    },
    {
        year: "2025",
        date: "11.07.2025",
        title: "Introduction to Recursive Macroeconomic Theory",
        publisher: "Rest Publishers",
        edition: "ISBN: 978-81985202-1-0",
    },
];

const profileSections = [
    { id: "about", label: "About" },
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

/* -------------------------------------------------------
   COURSES TABLE
------------------------------------------------------- */

function DataTable({ rows }: { rows: Course[] }) {
    return (
        <div className="overflow-hidden border border-[#E6DFD3] bg-white">
            <div className="overflow-x-auto">
                <table className="w-full min-w-[1000px] border-collapse text-left">
                    <thead>
                        <tr className="bg-[#20235A]">
                            {[
                                "Sl. No.",
                                "Academic Year",
                                "Stream",
                                "Semester",
                                "Batch",
                                "Subject",
                            ].map((header) => (
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
                                key={row.number}
                                className={
                                    "border-b border-[#EEE9E0] last:border-b-0 " +
                                    (rowIndex % 2 === 0
                                        ? "bg-white"
                                        : "bg-[#FAF8F4]")
                                }
                            >
                                <td className="px-4 py-5 align-top text-xs text-[#927B4D]">
                                    {row.number}
                                </td>

                                <td className="px-4 py-5 align-top text-xs leading-6 text-[#55535B]">
                                    {row.year}
                                </td>

                                <td className="px-4 py-5 align-top text-xs leading-6 text-[#55535B]">
                                    {row.stream}
                                </td>

                                <td className="px-4 py-5 align-top">
                                    <div className="space-y-2">
                                        {row.semester.map((item, index) => (
                                            <p
                                                key={`${row.number}-sem-${index}`}
                                                className="text-xs leading-6 text-[#55535B]"
                                            >
                                                {item}
                                            </p>
                                        ))}
                                    </div>
                                </td>

                                <td className="px-4 py-5 align-top">
                                    <div className="space-y-2">
                                        {row.batch.map((item, index) => (
                                            <p
                                                key={`${row.number}-batch-${index}`}
                                                className="text-xs leading-6 text-[#55535B]"
                                            >
                                                {item}
                                            </p>
                                        ))}
                                    </div>
                                </td>

                                <td className="px-4 py-5 align-top">
                                    <div className="space-y-2">
                                        {row.subjects.map((item, index) => (
                                            <p
                                                key={`${row.number}-subject-${index}`}
                                                className="max-w-md text-xs leading-6 text-[#55535B]"
                                            >
                                                {item}
                                            </p>
                                        ))}
                                    </div>
                                </td>
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

                                        <p className="mt-3 text-sm leading-7 text-[#69666B]">
                                            {publication.details}
                                        </p>

                                        {publication.link && (
                                            <a
                                                href={publication.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="mt-3 inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.13em] text-[#927B4D] transition-colors hover:text-[#20235A]"
                                            >
                                                View Publication
                                                <ExternalLink size={13} />
                                            </a>
                                        )}

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
                        {book.year} · {book.date}
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
                            label="Edition / ISBN"
                            value={book.edition}
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

export default function ShankarFacultyPage() {
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
                                Dr. N. Shankar
                            </h1>

                            <p className="mt-4 font-serif text-xl italic text-[#D2B87C] sm:text-2xl">
                                Professor
                            </p>

                            <p className="mt-3 text-sm leading-7 text-white/65">
                                Nehru College of Engineering and Research Centre,
                                Thrissur, Kerala.
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
                                    NCERC Unique ID: E-4601
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
                                            M.Sc. (Ag), MBA, Ph.D.
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
                                            Primary Research Interest
                                        </p>

                                        <p className="mt-1 text-xs leading-5 text-white/90">
                                            Entrepreneurship Development
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
                                            Designation
                                        </p>

                                        <p className="mt-1 text-xs leading-5 text-white/90">
                                            Professor
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
                                            Teaching Qualification
                                        </p>

                                        <p className="mt-1 text-xs leading-5 text-white/90">
                                            TNSLET – Management Studies
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
                                title="About Dr. N. Shankar"
                                description="Academic qualifications, professional designation and areas of academic interest."
                            />

                            <div className="space-y-5 text-sm leading-8 text-[#55535B]">
                                <p>
                                    Dr. N. Shankar is a Professor at Nehru School
                                    of Management, Nehru College of Engineering
                                    and Research Centre, Thrissur, Kerala. His
                                    academic qualifications include M.Sc. (Ag),
                                    MBA and Ph.D.
                                </p>

                                <p>
                                    He has qualified TNSLET in Management
                                    Studies. His primary research interest is
                                    Entrepreneurship Development, with additional
                                    areas of interest in Human Resource Management
                                    and Entrepreneurship Development.
                                </p>

                                <p>
                                    His academic contributions include teaching
                                    across various MBA semesters and publishing
                                    research papers, conference contributions and
                                    books in the areas of management, finance,
                                    sustainability, entrepreneurship and related
                                    disciplines.
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
                                value="Professor"
                            />

                            <DetailItem
                                label="Institution"
                                value="Nehru School of Management, NCERC"
                            />

                            <DetailItem
                                label="Qualifications"
                                value="M.Sc. (Ag), MBA, Ph.D."
                            />

                            <DetailItem
                                label="Teaching Qualification"
                                value="TNSLET – Management Studies"
                            />

                            <DetailItem
                                label="NCERC Unique ID"
                                value="E-4601"
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
                            description="Research focus on entrepreneurship development and human resource management."
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
                                    Entrepreneurship Development
                                </h3>

                                <p className="mt-5 text-sm leading-8 text-[#55535B]">
                                    Entrepreneurship Development is the primary
                                    research interest of Dr. N. Shankar. His
                                    academic and research interests also extend
                                    to Human Resource Management, reflecting
                                    the areas identified in his faculty profile.
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
                            description="MBA courses handled across different academic years, semesters and batches."
                        />

                        <DataTable rows={courses} />
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
                            title="Journal Publications"
                            description="Research papers, journal contributions and conference papers listed in the faculty academic profile."
                        />

                        <div className="mb-8 grid grid-cols-2 gap-4 sm:max-w-md">
                            <div className="border border-[#E6DFD3] bg-[#FAF7F2] p-5">
                                <p className="font-serif text-3xl font-normal text-[#20235A]">
                                    {publications.length}
                                </p>

                                <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-[#927B4D]">
                                    Listed Publications
                                </p>
                            </div>

                            <div className="border border-[#E6DFD3] bg-[#FAF7F2] p-5">
                                <p className="font-serif text-3xl font-normal text-[#20235A]">
                                    2022–26
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
                            description="Books published as part of academic and scholarly contributions."
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
                            description="Research identifiers and academic profiles associated with Dr. N. Shankar."
                        />

                        <div className="grid gap-5 md:grid-cols-2">
                            {/* ORCID */}

                            <div className="border border-[#E6DFD3] bg-[#FAF7F2] p-6 sm:p-7">
                                <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-white text-[#927B4D]">
                                            <Award
                                                size={19}
                                                strokeWidth={1.5}
                                            />
                                        </div>

                                        <div>
                                            <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-[#927B4D]">
                                                ORCID Profile
                                            </p>

                                            <p className="mt-1 break-all text-sm text-[#393947]">
                                                0009-0005-4331-9868
                                            </p>
                                        </div>
                                    </div>

                                    <a
                                        href="https://orcid.org/0009-0005-4331-9868"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex shrink-0 items-center gap-2 border border-[#D2B87C] px-4 py-3 text-[9px] font-medium uppercase tracking-[0.14em] text-[#927B4D] transition-colors hover:bg-[#20235A] hover:text-white"
                                    >
                                        View ORCID
                                        <ExternalLink size={13} />
                                    </a>
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
                                            E-4601
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
                                                N. Shankar – Google Scholar
                                            </p>
                                        </div>
                                    </div>

                                    <a
                                        href="https://scholar.google.com/citations?hl=en&authuser=1&user=r5j5L34AAAAJ"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 border border-[#D2B87C] px-5 py-3 text-[9px] font-medium uppercase tracking-[0.14em] text-[#927B4D] transition-colors hover:bg-[#20235A] hover:text-white"
                                    >
                                        View Google Scholar
                                        <ExternalLink size={13} />
                                    </a>
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
