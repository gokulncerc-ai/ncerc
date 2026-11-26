
import Link from "next/link";
import {
    ArrowDown,
    ArrowUpRight,
    Award,
    BookOpen,
    BriefcaseBusiness,
    ExternalLink,
    GraduationCap,
    Lightbulb,
    Microscope,
    Network,
    ShieldCheck,
    UserRound,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../../../DepartmentNav/DepartmentNav";

const researchInterests = [
    "Mathematical models for Communication Systems",
    "Machine Learning Applications",
    "Signal Processing",
    "Game theory in Communication systems",
];

const keywords = [
    "Game Theory",
    "Wireless Communication",
    "Machine Learning",
    "Cognitive Radio",
];

const courses = [
    ["1", "2026", "M.Tech", "S2", "VLSI", "Deep Learning"],
    ["2", "2026", "B.Tech", "S2", "ECE", "Electronic Devices and Circuits"],
    ["3", "2026", "B.Tech", "S4", "ECE", "Digital Systems Design"],
    ["4", "2026", "B.Tech", "S4", "ECE", "Digital Systems Design Lab"],
    ["5", "2026", "B.Tech", "S4", "ECE", "Embedded Processors"],
    ["6", "2025", "B.Tech", "S1", "ECE", "Engineering Workshop (Electronics)"],
    [
        "7",
        "2025",
        "B.Tech",
        "S3",
        "CSE",
        "Digital Electronics & Logic System Design",
    ],
    [
        "8",
        "2025, 2024",
        "B.Tech",
        "S7",
        "ECE, Mechanical",
        "Industrial Safety Engineering",
    ],
    [
        "9",
        "2024",
        "B.Tech",
        "S4",
        "ECE",
        "Analog Circuits and Simulation Lab",
    ],
    ["10", "2024", "B.Tech", "S4", "ECE", "Digital Communication"],
    ["11", "2024", "B.Tech", "S6", "ECE", "VLSI Circuits Design"],
    ["12", "2023", "B.Tech", "S5", "ECE", "Digital Signal Processing Lab"],
    [
        "13",
        "2023, 2024, 2025",
        "B.Tech",
        "S5",
        "ECE",
        "Analog and Digital Communication",
    ],
    ["14", "2023", "B.Tech", "S7", "ECE", "Microwave and Antennas"],
];

const publications = [
    {
        year: "2026",
        title:
            "Explainable AI Based Context Aware Spectrum Management in Cognitive Radio Environments-Wiley-Scrivener Publication (Scopus indexed Book Chapter)",
    },
    {
        year: "2025",
        title:
            "Design and Implementation of a Cost-Effective IoT-Based Mini Ventilator for Emergency and Home-Care Applications, at the International Conference on Artificial Intelligence in Engineering Systems (ICAIES-2025), held at Rajeev Institute of Technology, Hassan, Karnataka, India, on 27 December 2025.(Scopus Indexed)",
    },
    {
        year: "2025",
        title:
            "Smart IoT Enabled Maintenance for Enhancing Solar Panel Efficiency” at the  2nd International Conference on Recent Trends in Electrical, Electronics and Computing Technologies (ICRTEECT)  2025 held at Vaagdevi Engineering College, Warangal on 30.10.2025,Published in IEEE Xplore Digital Library (Indexed in Scopus)",
    },
    {
        year: "2024",
        title:
            "Advanced Biosensors for various virus Detection, at Kerala Technological Congress , 16th to 18th Feb 2024 at Ahalia School of Engineering & Technology, Palakkad organized by KTU",
    },
    {
        year: "2024",
        title:
            "Analyzing the detection of COVID-19 on CORONET using various Optimizer, in the journal of systems Engineering & Electronics ISSN no: 1671-1793, Scopus & UGC Approved Journal  in Volume 34 , Issue 7, 2024",
    },
];

const patents = [
    {
        year: "2024",
        title:
            "A system and method for assisting user alarm using IOT-Granted. 41003972 A 19.01.24",
    },
    {
        year: "2024",
        title:
            "Solar panel Energy Monitoring Device “- Design no: 414290-001, date: 19.04.24",
    },
];

const books = [
    {
        year: "2025",
        date: "November 2025",
        title: "Deep Learning for Intelligent Spectrum Management",
        publisher: "Vinsa Publishing",
        edition: "1st",
    },
];

const profileSections = [
    { id: "about", label: "About" },
    { id: "research", label: "Research" },
    { id: "courses", label: "Courses" },
    { id: "publications", label: "Publications" },
    { id: "patents", label: "Patents" },
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
                <table className="w-full min-w-[700px] border-collapse text-left">
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
                                className={`border-b border-[#EEE9E0] last:border-b-0 ${rowIndex % 2 === 0 ? "bg-white" : "bg-[#FAF8F4]"
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

export default function AnoojaFacultyPage() {
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
                                Anooja B
                            </h1>

                            <p className="mt-3 font-serif text-lg italic text-[#D2B87C] sm:text-xl">
                                Assistant Professor
                            </p>

                            <div className="mt-7 flex flex-wrap gap-3">
                                <span className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80">
                                    PhD – Pursuing
                                </span>
                                <span className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80">
                                    M.E – Wireless Communication
                                </span>
                                <span className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80">
                                    B.E – Electronics & Communication Engineering
                                </span>
                            </div>

                            <div className="mt-8 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#D2B87C]" />
                                <span className="text-[10px] uppercase tracking-[0.18em] text-white/50">
                                    NCERC Unique ID: 4093
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
                                            M.E, B.E, PhD Pursuing
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
                                            Wireless Communication
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
                                            14 Listed Courses
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
                                title="About Anooja B"
                                description="Academic background, teaching approach, and professional contributions."
                            />

                            <p className="text-sm leading-8 text-[#55535B]">
                                Anooja B is a dedicated and enthusiastic academician serving as an Assistant Professor in the Department of Electronics and Communication Engineering at Nehru College of Engineering and Research Centre (NCERC), Pampady, Kerala. She holds a Master of Engineering in Wireless Communication and a Bachelor of Engineering in Electronics and Communication Engineering, and is currently pursuing her Ph.D. in the field of Wireless Communication. With a strong passion for teaching and mentoring, she adopts innovative and practical approaches to enhance student learning. Her areas of interest include wireless communication and machine learning applications. She actively contributes to academic and institutional development by holding key roles such as IEEE Circuits and Systems (CAS) Advisor, IEEE Student Branch Treasurer, Placement Department Coordinator. She has organized and conducted state-level workshops on Python programming and Machine Learning, and has participated in various national and international conferences, reflecting her commitment to continuous learning, research, and professional growth.
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
                                value="Electronics and Communication Engineering"
                            />
                            <DetailItem label="NCERC Unique ID" value="4093" />
                            <DetailItem
                                label="Area of Interest"
                                value="Design of Electronic and Communication Systems using Machine learning techniques"
                            />

                            <div className="mt-5 space-y-3">
                                <a
                                    href="https://orcid.org/0000-0001-6015-3664"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between border border-[#E5DED1] px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#20235A] transition-colors hover:border-[#D2B87C] hover:bg-[#FAF7F2]"
                                >
                                    ORCID Profile
                                    <ExternalLink size={14} />
                                </a>

                                <a
                                    href="https://scholar.google.com/citations?user=8NB1kBQAAAAJ&hl=en&oi=ao"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between border border-[#E5DED1] px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#20235A] transition-colors hover:border-[#D2B87C] hover:bg-[#FAF7F2]"
                                >
                                    Google Scholar
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
                                            0{index + 1}
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
                                    Key areas associated with her research and academic interests.
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
                            title="Courses Handled"
                            description="Courses handled across different academic years, programmes, semesters, and branches."
                        />

                        <div className="mb-5 flex items-center gap-3">
                            <BookOpen
                                size={18}
                                className="text-[#927B4D]"
                                strokeWidth={1.5}
                            />
                            <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#927B4D]">
                                14 Courses Listed
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
                            widths={["8%", "14%", "14%", "10%", "18%", "36%"]}
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
                            title="Publications – Conference / Journal"
                            description="Conference and journal contributions as provided in the academic profile."
                        />

                        <div className="space-y-4">
                            {publications.map((publication, index) => (
                                <article
                                    key={index}
                                    className="grid gap-4 border border-[#E8E1D5] bg-white p-5 transition-colors hover:border-[#D2B87C] sm:grid-cols-[85px_1fr] sm:gap-6 sm:p-6"
                                >
                                    <div className="flex items-center gap-3 sm:block">
                                        <span className="font-serif text-2xl text-[#927B4D]">
                                            {publication.year}
                                        </span>
                                        <span className="h-px w-8 bg-[#D2B87C] sm:mt-3 sm:block" />
                                    </div>

                                    <div>
                                        <p className="text-sm leading-7 text-[#4F4D55]">
                                            {publication.title}
                                        </p>
                                        <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#A18A5B]">
                                            Publication {String(index + 1).padStart(2, "0")}
                                        </p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Patents Section */}
                <section
                    id="patents"
                    className="scroll-mt-24 bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="05"
                            eyebrow="Innovation & Recognition"
                            title="Patent Details"
                            description="Patent and design registration details included in the faculty profile."
                        />

                        <div className="grid gap-5 md:grid-cols-2">
                            {patents.map((patent, index) => (
                                <article
                                    key={index}
                                    className="relative overflow-hidden border border-[#E4DCCE] bg-white p-6 sm:p-8"
                                >
                                    <div className="absolute right-0 top-0 h-20 w-20 border-b border-l border-[#D2B87C]/30" />

                                    <div className="flex items-center justify-between">
                                        <div className="flex h-11 w-11 items-center justify-center bg-[#F5F0E6] text-[#927B4D]">
                                            <Award size={21} strokeWidth={1.4} />
                                        </div>
                                        <span className="font-serif text-2xl text-[#B49A66]">
                                            {patent.year}
                                        </span>
                                    </div>

                                    <p className="mt-6 text-sm leading-7 text-[#4F4D55]">
                                        {patent.title}
                                    </p>

                                    <p className="mt-5 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#927B4D]">
                                        Patent {String(index + 1).padStart(2, "0")}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Books Section */}
                <section
                    id="books"
                    className="scroll-mt-24 bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="06"
                            eyebrow="Academic Publishing"
                            title="Books Published"
                            description="Book publication details provided in the faculty profile."
                        />

                        {books.map((book) => (
                            <article
                                key={book.title}
                                className="grid gap-7 border border-[#E5DED1] bg-[#FAF7F2] p-6 sm:p-9 md:grid-cols-[150px_1fr] md:items-center"
                            >
                                <div className="flex h-36 w-28 flex-col items-center justify-center border border-[#D2B87C]/50 bg-[#20235A] text-center">
                                    <BookOpen
                                        size={28}
                                        className="text-[#D2B87C]"
                                        strokeWidth={1.3}
                                    />
                                    <span className="mt-4 text-[8px] font-semibold uppercase tracking-[0.2em] text-white/70">
                                        Published
                                    </span>
                                    <span className="mt-1 font-serif text-xl text-[#D2B87C]">
                                        {book.year}
                                    </span>
                                </div>

                                <div>
                                    <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#927B4D]">
                                        {book.date}
                                    </p>

                                    <h3 className="mt-3 max-w-2xl font-serif text-2xl leading-snug text-[#20235A] sm:text-3xl">
                                        {book.title}
                                    </h3>

                                    <div className="mt-6 grid gap-5 border-t border-[#E0D9CC] pt-5 sm:grid-cols-3">
                                        <div>
                                            <p className="text-[9px] font-semibold uppercase tracking-[0.13em] text-[#927B4D]">
                                                Published By
                                            </p>
                                            <p className="mt-2 text-sm text-[#4F4D55]">
                                                {book.publisher}
                                            </p>
                                        </div>

                                        <div>
                                            <p className="text-[9px] font-semibold uppercase tracking-[0.13em] text-[#927B4D]">
                                                Edition
                                            </p>
                                            <p className="mt-2 text-sm text-[#4F4D55]">
                                                {book.edition}
                                            </p>
                                        </div>

                                        <div>
                                            <p className="text-[9px] font-semibold uppercase tracking-[0.13em] text-[#927B4D]">
                                                Publication Year
                                            </p>
                                            <p className="mt-2 text-sm text-[#4F4D55]">
                                                {book.year}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                {/* Profile Footer Note */}
                <section className="bg-[#20235A] px-5 py-10 sm:px-8 lg:px-12">
                    <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 sm:flex-row sm:items-center">
                        <div className="flex items-center gap-4">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#D2B87C]/40 text-[#D2B87C]">
                                <ShieldCheck size={21} strokeWidth={1.4} />
                            </div>
                            <div>
                                <p className="font-serif text-lg text-white">
                                    Faculty Academic Profile
                                </p>
                                <p className="mt-1 text-[10px] tracking-wide text-white/55">
                                    Department of Electronics and Communication Engineering
                                </p>
                            </div>
                        </div>

                        <Link
                            href="/department/electronics-and-communication-engineering/faculty-details"
                            className="inline-flex items-center gap-3 border border-[#D2B87C]/50 px-5 py-3 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#E8D8B3] transition-colors hover:bg-[#D2B87C] hover:text-[#20235A]"
                        >
                            Back to Faculty Directory
                            <ArrowUpRight size={15} />
                        </Link>
                    </div>
                </section>
            </main>

            <FooterSection />
        </>
    );
}
