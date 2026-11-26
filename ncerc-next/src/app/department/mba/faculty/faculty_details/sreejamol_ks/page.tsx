
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
    CalendarDays,
    Users,
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
    details: string;
    link?: string;
};

type Book = {
    year: string;
    title: string;
    publisher: string;
    isbn: string;
};

type ProfessionalActivity = {
    title: string;
    details: string;
};

/* -------------------------------------------------------
   FACULTY DATA
------------------------------------------------------- */

const qualifications = [
    "Ph.D",
    "MBA",
];

const researchInterests = [
    "Marketing",
    "Human Resource Management",
];

const keywords = [
    "Marketing",
    "Human Resource",
    "Customer Behaviour",
    "Employee Management",
    "Social Media Marketing",
    "Entrepreneurial Marketing",
];

const areasOfInterest = [
    "Marketing",
    "Human Resource",
];

const courses: Course[] = [
    [
        "01",
        "2026",
        "MBA",
        "II",
        "Research Methods & Design for Managerial Decision",
    ],
    [
        "02",
        "2026",
        "MBA",
        "VI",
        "Digital and Social Media Marketing",
    ],
    [
        "03",
        "2026",
        "MBA",
        "VI",
        "Value-Based Healthcare",
    ],
    [
        "04",
        "2026",
        "MBA",
        "III",
        "Performance & Reward Management",
    ],
    [
        "05",
        "2025",
        "MBA",
        "III",
        "Healthcare Marketing and Strategy",
    ],
    [
        "06",
        "2025",
        "MBA",
        "I",
        "Business Environment and Business Ethics",
    ],
];

const publications: Publication[] = [
    {
        year: "2025",
        title:
            "A Study on Factors that Cause Stress Among IT Employees with Special Reference to IT Industry Bangalore",
        details:
            "Journal of Information Systems Engineering and Management, 2025, 10(59s), e-ISSN: 2468-4376.",
        link: "https://www.jisem-journal.com",
    },
    {
        year: "2025",
        title:
            "A Study on The Factors Influencing Customer Retention And Growth At Pricol Precision Products Pvt Ltd, Hosur",
        details:
            "IJSART – ISSN [ONLINE]: 2395-1052, Volume 11 Issue 4 – April 2025.",
    },
    {
        year: "2025",
        title:
            "Analysing The Influence Of Customer Reviews On Tourism Marketing With Special Reference To Plumeria Holidays, Kochi",
        details:
            "IJSART – ISSN [ONLINE]: 2395-1052, Volume 11 Issue 4 – April 2025.",
    },
    {
        year: "2025",
        title:
            "Talent Acquisition Practices At Atmios Technologies, Kalamasserry",
        details:
            "IJSART – ISSN [ONLINE]: 2395-1052, Volume 11 Issue 4 – April 2025.",
    },
    {
        year: "2025",
        title:
            "The Impact Of Brand Awareness On Investor Behavior: A Study On Hedge Equities",
        details:
            "IJSART – ISSN [ONLINE]: 2395-1052, Volume 11 Issue 4 – April 2025.",
    },
    {
        year: "2025",
        title:
            "A Study On The Effectiveness Of Compensation Management At Anand Water Meter Mfg Co. Pvt. Ltd, Kochi",
        details:
            "IJSART – ISSN [ONLINE]: 2395-1052, Volume 11 Issue 4 – April 2025.",
    },
    {
        year: "2025",
        title:
            "Impact Of Employment Training and Development in Employees Day to Day Work in Indo Shell Cast Private Limited Coimbatore",
        details:
            "IJSART – ISSN [ONLINE]: 2395-1052, Volume 11 Issue 4 – April 2025.",
    },
    {
        year: "2025",
        title:
            "Impact of Workplace Culture on Employee Behavior At Reshmi Industries (India) Pvt Ltd, Coimbatore",
        details:
            "IJSART – ISSN [ONLINE]: 2395-1052, Volume 11 Issue 4 – April 2025.",
    },
    {
        year: "2025",
        title:
            "Employee Satisfaction Level Towards Welfare Measures Provided By V4C Solutions Pvt Ltd Kochi",
        details:
            "IJSART – ISSN [ONLINE]: 2395-1052, Volume 11 Issue 4 – April 2025.",
    },
    {
        year: "2025",
        title:
            "Assessing The Effectiveness Of Social Media Marketing (SMM) In Customer Acquisition of Oho Solutions, Kochi",
        details:
            "International Research Journal of Multidisciplinary Science & Technology, ISSN: 2455-930X, Volume 08, Issue 03 – April 2025.",
    },
    {
        year: "2024",
        title:
            "A Study on Effectiveness of Employee Welfare At Variety Pharmaceuticals Pvt Ltd, Kulapully",
        details:
            "IJSART – ISSN: 2395-1052, Vol. 10, Issue 545413, May 2024.",
    },
    {
        year: "2024",
        title:
            "Assessing Integrated Marketing Communication (IMC) Tools In Trinity Super Specialty Eye Hospital, Manali Jn, Palakkad",
        details:
            "IJSART – ISSN: 2395-1052, Vol. 10, Issue 545413, May 2024.",
    },
    {
        year: "2024",
        title:
            "A Study On Work Life Balance Of Employees At Sevana Hospital And Research Centre Pvt Ltd, Pattambi",
        details:
            "IJSART – ISSN: 2395-1052, Vol. 10, Issue 545413, May 2024.",
    },
    {
        year: "2024",
        title:
            "A Study On Employee Retention Strategies At Paragon Steels Pvt Limited, Kanjikode",
        details:
            "IJSART – ISSN: 2395-1052, Vol. 10, Issue 645413, May 2024.",
    },
    {
        year: "2024",
        title:
            "A Study On Employee Compensation At Sun Elevators Trading And Maintenance L.L.C Koduvayur",
        details:
            "IJSART – ISSN: 2395-1052, Vol. 10, Issue 545413, May 2024.",
    },
    {
        year: "2024",
        title:
            "A Study On The Employee Training Programs In Precot Ltd, Kanjikode, Palakkad",
        details:
            "IJSART – ISSN: 2395-1052, Vol. 10, Issue 545413, May 2024.",
    },
    {
        year: "2024",
        title:
            "A Study On Impact Of Motivation With Reference To Maslow's Theory Of Motivation At Sdf Industries Ltd., Pampady",
        details:
            "IJSART – ISSN: 2395-1052, Vol. 10, Issue 545413, May 2024.",
    },
    {
        year: "2024",
        title:
            "A Study on Dealers Satisfaction of Universal Implements, Shoranur, Palakkad",
        details:
            "IJSART – ISSN: 2395-1052, Vol. 10, Issue 545413, May 2024.",
    },
    {
        year: "2024",
        title:
            "A Study on Dealer’s Satisfaction With Special Reference To Silk Industries Kayarampara",
        details:
            "IJSART – ISSN: 2395-1052, Vol. 10, Issue 545413, May 2024.",
    },
    {
        year: "2023",
        title:
            "The Study on The Perception of The Students About The Course Provided In Inker Robotics",
        details:
            "IJSART, ISSN [ONLINE]: 2395-1052, Volume 9 Issue 8 – August 2023.",
    },
    {
        year: "2023",
        title:
            "Effectiveness of Recruitment Process in Inker Robotics",
        details:
            "IJSART, ISSN [ONLINE]: 2395-1052, Volume 9 Issue 8 – August 2023.",
    },
    {
        year: "2023",
        title:
            "Study on Factors Affecting Retailers Performance to Evolve A Strategy For Increasing Market Share Of Kingston Industries LLP In Thrissur Region",
        details:
            "IJSART, ISSN [ONLINE]: 2395-1052, Volume 9 Issue 8 – August 2023.",
    },
    {
        year: "2023",
        title:
            "A Study on The Effect of Change in Management At Bismi Hypermarket With Reference To Thrissur",
        details:
            "IJSART, ISSN [ONLINE]: 2395-1052, Volume 9 Issue 7 – July 2023.",
    },
    {
        year: "2023",
        title:
            "An Empirical Study on Mapping Digital Humanities with Skill Development of Youth in India",
        details:
            "Journal For Basic Sciences, ISSN No: 1006-8341, Volume 23, Issue 1, 2023.",
    },
    {
        year: "2023",
        title:
            "Approach of Digital Humanities in New Normal – with reference to Daily Consumption pattern",
        details:
            "Journal For Basic Sciences, ISSN No: 1006-8341, Volume 23, Issue 1, 2023.",
    },
];

const professionalActivities: ProfessionalActivity[] = [
    {
        title:
            "6 days – ATAL Faculty Development Program (FDP) on Building Predictive AI Models for Route Optimization and Emerging Technology practices in smart manufacturing",
        details:
            "SCMS Cochin School of Business, from 03/12/2025 to 09/12/2025.",
    },
    {
        title:
            "One-day workshop on “AI Application on Management Research & Publication”",
        details:
            "Organized by Jawaharlal College of Engineering & Technology on 5th August 2025.",
    },
    {
        title:
            "Empowering Half the Sky – The Role of Social Inclusion in Women’s Economic Advancement",
        details:
            "ISBN No.: 978-81-982191-0-7. National Conference Proceeding on “Rural Women Empowerment Through Entrepreneurial Marketing”, 8th February 2025.",
    },
    {
        title:
            "ICSSR Sponsored National Conference on Rural Women Empowerment Through Entrepreneurial Marketing",
        details:
            "Organized by School of Commerce, SVKM's NMIMS (Deemed to be) University, Hyderabad, 8th February 2025.",
    },
    {
        title:
            "6 days – ATAL Faculty Development Program (FDP) on Sustainable Development Goals (SDGs)",
        details:
            "16th – 21st December 2024.",
    },
    {
        title:
            "Leveraging the Demographic Dividend: A Roadmap for the Automobile Sector",
        details:
            "Indian Council of Social Science Research (ICSSR) Sponsored National Seminar on Demographic Dividend in India – Challenges and Opportunities, held at Jawaharlal College of Engineering & Technology, Lakkidi, during 18–20 October 2023.",
    },
    {
        title:
            "Exploring Digital Humanities: Challenges and Opportunities",
        details:
            "1st International Conference on English Language, Literature and Culture, 10th & 11th December 2022, organized by The Achievers Foundation for English Studies (TAFFES), Bhadohi, UP, in collaboration with Madan Mohan Malaviya University of Technology, UP & Government College, UP.",
    },
];

const books: Book[] = [
    {
        year: "2025",
        title: "Business Research Methods",
        publisher: "Surya Publication",
        isbn: "978-81-989791-1-7",
    },
    {
        year: "2025",
        title: "Family Business",
        publisher: "Surya Publication",
        isbn: "978-81-989791-0-0",
    },
];

const profileSections = [
    { id: "about", label: "About Me" },
    { id: "experience", label: "Experience" },
    { id: "research", label: "Research" },
    { id: "courses", label: "Courses" },
    { id: "publications", label: "Publications" },
    { id: "activities", label: "Conferences & FDPs" },
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

                                        <p className="mt-3 text-xs leading-6 text-[#77747A]">
                                            {publication.details}
                                        </p>

                                        {publication.link && (
                                            <a
                                                href={publication.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="mt-3 inline-flex items-center gap-2 text-[9px] font-medium uppercase tracking-[0.14em] text-[#927B4D] transition-colors hover:text-[#20235A]"
                                            >
                                                Visit Journal
                                                <ExternalLink size={13} />
                                            </a>
                                        )}
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
                        {book.year}
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
   PROFESSIONAL ACTIVITIES LIST
------------------------------------------------------- */

function ActivitiesList({
    items,
}: {
    items: ProfessionalActivity[];
}) {
    return (
        <div className="border border-[#E6DFD3] bg-white">
            {items.map((activity, index) => (
                <article
                    key={index}
                    className={
                        "grid gap-4 p-5 sm:grid-cols-[38px_1fr] sm:gap-5 sm:p-6 " +
                        (index !== items.length - 1
                            ? "border-b border-[#EEE9E0]"
                            : "")
                    }
                >
                    <div className="flex h-9 w-9 items-center justify-center bg-[#F5F0E6] text-[#927B4D]">
                        <CalendarDays size={17} strokeWidth={1.5} />
                    </div>

                    <div>
                        <h4 className="font-serif text-lg font-normal leading-snug text-[#20235A] sm:text-xl">
                            {activity.title}
                        </h4>

                        <p className="mt-3 text-xs leading-6 text-[#77747A]">
                            {activity.details}
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

export default function SreejamolFacultyPage() {
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
                                Dr. K.S. Sreejamol
                            </h1>

                            <p className="mt-4 font-serif text-xl italic text-[#D2B87C] sm:text-2xl">
                                Associate Professor
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
                                    NCERC Unique ID: 3665
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
                                            Ph.D, MBA
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
                                            Marketing and Human Resource
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
                                            16.6 Years of Experience
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
                                            Department
                                        </p>

                                        <p className="mt-1 text-xs leading-5 text-white/90">
                                            Master of Business Administration
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
                                title="About Dr. K.S. Sreejamol"
                                description="Academic background, professional experience and scholarly contributions."
                            />

                            <div className="space-y-5 text-sm leading-8 text-[#55535B]">
                                <p>
                                    Dr. K.S. Sreejamol is currently serving as Associate Professor in the Department of Master of Business Administration at Nehru College of Engineering & Research Centre. She holds a Ph.D. and MBA and has a total professional experience of 16.6 years, including 11.6 years of teaching experience and 5 years of industry experience.
                                </p>

                                <p>
                                    Her areas of interest include Marketing and Human Resource Management. Her research contributions cover topics such as customer retention, tourism marketing, social media marketing, employee welfare, talent acquisition, workplace culture, compensation management and employee development.
                                </p>

                                <p>
                                    She has contributed to research publications across various journals and has participated in faculty development programmes, workshops, national conferences and international academic events. She has also authored books in Business Research Methods and Family Business.
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
                                value="Associate Professor"
                            />

                            <DetailItem
                                label="Institution"
                                value="Nehru College of Engineering & Research Centre"
                            />

                            <DetailItem
                                label="Department"
                                value="Master of Business Administration (MBA)"
                            />

                            {/* <DetailItem
                                label="Qualifications"
                                value="Ph.D, MBA"
                            /> */}

                            <DetailItem
                                label="Email"
                                value="drsreejamol3665.nsm@ncerc.ac.in"
                            />

                            <DetailItem
                                label="NCERC Unique ID"
                                value="3665"
                            />
                        </aside>
                    </div>
                </section>

                {/* PROFESSIONAL EXPERIENCE */}
                <section
                    id="experience"
                    className="scroll-mt-24 bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="02"
                            eyebrow="Professional Background"
                            title="Professional Experience"
                            description="Teaching, industry and overall professional experience."
                        />

                        <div className="grid gap-5 md:grid-cols-3">
                            <div className="border border-[#E6DFD3] bg-[#FAF7F2] p-6 sm:p-8">
                                <div className="flex h-11 w-11 items-center justify-center bg-white text-[#927B4D]">
                                    <GraduationCap size={20} strokeWidth={1.5} />
                                </div>

                                <p className="mt-7 font-serif text-4xl font-normal text-[#20235A]">
                                    11.6
                                </p>

                                <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.16em] text-[#927B4D]">
                                    Teaching Experience
                                </p>

                                <p className="mt-2 text-xs text-[#77747A]">
                                    Years
                                </p>
                            </div>

                            <div className="border border-[#E6DFD3] bg-[#FAF7F2] p-6 sm:p-8">
                                <div className="flex h-11 w-11 items-center justify-center bg-white text-[#927B4D]">
                                    <Briefcase size={20} strokeWidth={1.5} />
                                </div>

                                <p className="mt-7 font-serif text-4xl font-normal text-[#20235A]">
                                    5
                                </p>

                                <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.16em] text-[#927B4D]">
                                    Industry Experience
                                </p>

                                <p className="mt-2 text-xs text-[#77747A]">
                                    Years
                                </p>
                            </div>

                            <div className="border border-[#E6DFD3] bg-[#FAF7F2] p-6 sm:p-8">
                                <div className="flex h-11 w-11 items-center justify-center bg-white text-[#927B4D]">
                                    <Award size={20} strokeWidth={1.5} />
                                </div>

                                <p className="mt-7 font-serif text-4xl font-normal text-[#20235A]">
                                    16.6
                                </p>

                                <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.16em] text-[#927B4D]">
                                    Total Experience
                                </p>

                                <p className="mt-2 text-xs text-[#77747A]">
                                    Years
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* RESEARCH SECTION */}
                <section
                    id="research"
                    className="scroll-mt-24 bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="03"
                            eyebrow="Academic Exploration"
                            title="Research Interests"
                            description="Academic interests in marketing and human resource management."
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
                                    Marketing and Human Resource Management
                                </h3>

                                <p className="mt-5 text-sm leading-8 text-[#55535B]">
                                    Her research interests include Marketing and Human Resource Management, with research contributions addressing customer retention, customer reviews, tourism marketing, social media marketing, brand awareness and customer acquisition.
                                </p>

                                <p className="mt-4 text-sm leading-8 text-[#55535B]">
                                    Her research also covers employee welfare, employee satisfaction, talent acquisition, workplace culture, compensation management, employee training and development, employee retention and work-life balance.
                                </p>

                                <div className="mt-7">
                                    <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                        Research Interests
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {researchInterests.map((item) => (
                                            <span
                                                key={item}
                                                className="border border-[#E6DFD3] bg-white px-3 py-2 text-xs text-[#55535B]"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="border border-[#E8E1D5] bg-white p-6 sm:p-8">
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
                    className="scroll-mt-24 bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="04"
                            eyebrow="Teaching Contributions"
                            title="Courses Handled"
                            description="Courses handled across the academic years 2025 and 2026."
                        />

                        <DataTable
                            headers={[
                                "Sl. No.",
                                "Year",
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
                    className="scroll-mt-24 bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="05"
                            eyebrow="Research Contributions"
                            title="Publications"
                            description="Research articles and scholarly publications listed in the faculty academic profile."
                        />

                        <div className="mb-8 grid grid-cols-2 gap-4 sm:max-w-md">
                            <div className="border border-[#E6DFD3] bg-white p-5">
                                <p className="font-serif text-3xl font-normal text-[#20235A]">
                                    {publications.length}
                                </p>

                                <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-[#927B4D]">
                                    Listed Publications
                                </p>
                            </div>

                            <div className="border border-[#E6DFD3] bg-white p-5">
                                <p className="font-serif text-3xl font-normal text-[#20235A]">
                                    2023–25
                                </p>

                                <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-[#927B4D]">
                                    Publication Period
                                </p>
                            </div>
                        </div>

                        <PublicationList items={publications} />
                    </div>
                </section>

                {/* CONFERENCES / FDPs / WORKSHOPS */}
                <section
                    id="activities"
                    className="scroll-mt-24 bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="06"
                            eyebrow="Professional Development"
                            title="Conferences, FDPs & Workshops"
                            description="Faculty development programmes, workshops, conferences and academic activities."
                        />

                        <div className="mb-8 grid grid-cols-2 gap-4 sm:max-w-md">
                            <div className="border border-[#E6DFD3] bg-[#FAF7F2] p-5">
                                <p className="font-serif text-3xl font-normal text-[#20235A]">
                                    {professionalActivities.length}
                                </p>

                                <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-[#927B4D]">
                                    Activities Listed
                                </p>
                            </div>

                            <div className="border border-[#E6DFD3] bg-[#FAF7F2] p-5">
                                <p className="font-serif text-3xl font-normal text-[#20235A]">
                                    2022–25
                                </p>

                                <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-[#927B4D]">
                                    Activity Period
                                </p>
                            </div>
                        </div>

                        <ActivitiesList items={professionalActivities} />
                    </div>
                </section>

                {/* BOOKS SECTION */}
                <section
                    id="books"
                    className="scroll-mt-24 bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="07"
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
                            number="08"
                            eyebrow="Academic Identity"
                            title="Researcher Profiles"
                            description="Research identifiers and academic profiles associated with Dr. K.S. Sreejamol."
                        />

                        <div className="grid gap-5 md:grid-cols-2">
                            {/* ORCID */}
                            <a
                                href="https://orcid.org/0009-0005-4577-3861"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group border border-[#E6DFD3] bg-[#FAF7F2] p-6 transition-colors hover:border-[#D2B87C] sm:p-7"
                            >
                                <div className="flex items-center justify-between gap-4">
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
                                                0009-0005-4577-3861
                                            </p>
                                        </div>
                                    </div>

                                    <ExternalLink
                                        size={16}
                                        className="shrink-0 text-[#927B4D] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                                    />
                                </div>
                            </a>

                            {/* GOOGLE SCHOLAR */}
                            <a
                                href="https://scholar.google.com/citations?user=Qd8D2joAAAAJ&hl=en"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group border border-[#E6DFD3] bg-[#FAF7F2] p-6 transition-colors hover:border-[#D2B87C] sm:p-7"
                            >
                                <div className="flex items-center justify-between gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-11 w-11 items-center justify-center bg-white text-[#927B4D]">
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

                                    <ExternalLink
                                        size={16}
                                        className="shrink-0 text-[#927B4D] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                                    />
                                </div>
                            </a>

                            {/* NCERC ID */}
                            <div className="border border-[#E6DFD3] bg-[#FAF7F2] p-6 sm:p-7 md:col-span-2">
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
                                            3665
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
