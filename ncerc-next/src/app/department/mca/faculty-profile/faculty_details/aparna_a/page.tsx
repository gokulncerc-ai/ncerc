
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
    Atom,
    Brain,
    Network,
    Award,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import DepartmentNavigation from "../../../mcanavigation/mcanavigation";

/* -------------------------------------------------------
   FACULTY DATA
------------------------------------------------------- */

const keywords = [
    "Deep Learning",
    "Artificial Intelligence",
    "Hybrid Machine Learning Models",
    "Algorithms",
];

const researchInterests = [
    "Data Mining",
    "Artificial Intelligence",
    "Machine Learning",
    "Deep Learning",
    "Computer Networks",
    "Hardware and Software Designing",
];

const areasOfInterest = [
    "Computer Architecture",
    "Computer Networks",
    "Database Management Systems",
    "Foundations of Computing",
    "Algorithm Analysis",
];

const courses = [
    ["01", "MCA", "MCA", "1", "Digital Fundamentals and Computer Architecture"],
    ["02", "MCA", "MCA", "1", "Advanced Data Structures Lab"],
    ["03", "Pharmacy", "B.Pharm", "1", "Basics of Web Design Lab"],
    ["04", "MCA", "MCA", "2", "Advanced Computer Networks"],
    ["05", "MCA", "MCA", "2", "OOPS Lab"],
    ["06", "B.Tech", "ECE", "2", "Foundations of Computing from Hardware Essential to Web Design"],
    ["07", "MCA", "MCA", "2", "Advanced Database Management Systems"],
    ["08", "MCA", "MCA", "3", "Design and Analysis of Algorithm"],
    ["09", "MCA", "MCA", "3", "Mini Project"],
    ["10", "MCA", "MCA", "4", "Main Project"],
    ["11", "MCA", "MCA", "4", "Seminar"],
];

const publications2026 = [
    {
        title: "AI Agents And Agentic AI: A Comparative Study Of Autonomous Intelligence Architectures",
        details:
            "IJET, International Journal of Engineering and Techniques (IJET), Volume 12, Issue 2, March 2026.",
    },
    {
        title: "Server-less Computing and Future of Cloud Architecture",
        details:
            "IJRASET, Paper ID: IJRASET77785, Published on 01 March 2026. ISSN: 2321-9653.",
        url: "https://doi.org/10.22214/ijraset.2026.77785",
    },
    {
        title: "Xenotransplantation: A Comprehensive Review of Scientific Advances, Clinical Progress And Ethical Challenges",
        details:
            "International Journal of Research and Analytical Reviews (IJRAR), E-ISSN 2348-1269, P-ISSN 2349-5138, Volume 13, Issue 1, pp. 581–585, March 2026.",
        url: "https://ijrar.org/papers/IJRAR26A2729.pdf",
    },
    {
        title: "Cognition-Driven Connectivity: Artificial General Intelligence (AGI) And Internet of Things (IoT)",
        details:
            "International Journal of Creative Research Thoughts (IJCRT), ISSN 2320-2882, Volume 14, Issue 3, pp. a189–a196, March 2026.",
        url: "https://www.ijcrt.org/papers/IJCRT2603024.pdf",
    },
    {
        title: "Ransomware Evolution And Defense Strategies: Building Adaptive And Autonomous Cyber Resilience For The Modern Threat Era",
        details:
            "International Journal of All Research Education and Scientific Methods (IJARESM), ISSN 2455-6211, Volume 14, Issue 3, March 2026.",
        url: "https://www.ijaresm.com/uploaded_files/document_file/Sujith_ProUX.pdf",
    },
    {
        title: "Sparse And Efficient Models For Low Power Devices",
        details: "IJFMR, Volume 8, Issue 2, March–April 2026.",
        url: "https://www.ijfmr.com/papers/2026/2/70415.pdf",
    },
    {
        title: "Federated Learning: A Privacy Preserving Approach For Decentralized Machine Learning",
        details:
            "International Journal of Innovative Science and Research Technology (IJISRT), IJISRT26MAR171, pp. 580–584. DOI: 10.38124/ijisrt/26mar171.",
    },
    {
        title: "The Rise of Web 3.0: Decentralization and its Impact on Web Development",
        details:
            "International Journal of Novel Research and Development (IJNRD), Volume 11, Issue 3, pp. a798–a802.",
        url: "https://ijnrd.org/papers/IJNRD2603093.pdf",
    },
];

const publications2025 = [
    {
        title: "Leveraging block chain for securing digital forensic evidence in IoT systems",
        details:
            "International Journal of Emerging Technologies and Innovative Research (JETIR), ISSN 2349-5162, Volume 12, Issue 3, pp. b458–b465, March 2025.",
        url: "https://www.jetir.org/papers/JETIR2503151.pdf",
    },
    {
        title: "Enhancing Optical Remote Sensing with GANS: A Review of Super Resolution Approaches",
        details:
            "International Journal of All Research Education and Scientific Methods (IJARESM), ISSN 2455-6211, Volume 13, Issue 4, April 2025.",
    },
    {
        title: "Artificial Intelligence In E-Learning: Trends, Challenges and Opportunities",
        details:
            "IJSREM, Volume 09, Issue 04, April 2025. SJIF Rating: 8.586. ISSN: 2582-3930.",
    },
    {
        title: "An Organized Analysis of Cloud Computing Environment Anomaly Detection",
        details:
            "International Journal of Creative Research Thoughts (IJCRT), ISSN 2320-2882, Volume 13, Issue 3, pp. b568–b575, March 2025.",
        url: "https://www.ijcrt.org/papers/IJCRT2503185.pdf",
    },
    {
        title: "Airborne Internet Revolutionizing In-Flight Connectivity",
        details:
            "International Journal of Research and Analytical Reviews (IJRAR), E-ISSN 2348-1269, P-ISSN 2349-5138, Volume 12, Issue 1, pp. 884–890, March 2025.",
        url: "https://ijrar.org/papers/IJRAR25A3499.pdf",
    },
    {
        title: "AI-Powered Procedural Content Generation",
        details: "International Journal of Novel Research and Development (IJNRD).",
        url: "https://ijnrd.org/papers/IJNRD2503070.pdf",
    },
    {
        title: "Neural Network-Driven Image Encryption with Optimized SSIM",
        details:
            "International Journal of Current Science (IJCSPUB), ISSN 2250-1770, Volume 15, Issue 2, pp. 143–148, April 2025.",
        url: "https://rjpn.org/ijcspub/papers/IJCSP25B1017.pdf",
    },
    {
        title: "Next Generation API Security: Integrating API Gateway With Machine Learning",
        details:
            "International Journal of Research and Analytical Reviews (IJRAR), March 2025, Volume 12, Issue 1. E-ISSN 2348-1269, P-ISSN 2349-5138.",
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
    rows: string[][];
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
                                    {emptyMessage || "No details have been provided."}
                                </td>
                            </tr>
                        )}
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
    year,
    items,
}: {
    year: string;
    items: {
        title: string;
        details: string;
        url?: string;
    }[];
}) {
    return (
        <div className="mb-12 last:mb-0">
            <div className="mb-5 flex items-center gap-4">
                <h3 className="font-serif text-2xl font-normal text-[#20235A]">
                    {year}
                </h3>
                <span className="h-px flex-1 bg-[#D2B87C]" />
                <span className="text-[9px] uppercase tracking-[0.15em] text-[#927B4D]">
                    {items.length} Publications
                </span>
            </div>

            <div className="border border-[#E6DFD3] bg-white">
                {items.map((publication, index) => (
                    <article
                        key={publication.title}
                        className={`grid gap-4 p-5 sm:grid-cols-[38px_1fr] sm:gap-5 sm:p-6 ${index !== items.length - 1
                                ? "border-b border-[#EEE9E0]"
                                : ""
                            }`}
                    >
                        <div className="flex h-9 w-9 items-center justify-center bg-[#F5F0E6] text-[#927B4D]">
                            <FileText size={17} strokeWidth={1.5} />
                        </div>

                        <div>
                            <h4 className="font-serif text-lg font-normal leading-snug text-[#20235A] sm:text-xl">
                                {publication.title}
                            </h4>

                            <p className="mt-3 text-xs leading-6 text-[#69666B] sm:text-sm">
                                {publication.details}
                            </p>

                            {publication.url && (
                                <a
                                    href={publication.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 inline-flex items-center gap-2 text-[9px] font-medium uppercase tracking-[0.15em] text-[#927B4D] transition-colors hover:text-[#20235A]"
                                >
                                    View Publication
                                    <ExternalLink size={13} />
                                </a>
                            )}
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}

/* -------------------------------------------------------
   PAGE
------------------------------------------------------- */

export default function AparnaAFacultyPage() {
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
                                Department of Computer Applications
                            </p>

                            <h1 className="mt-4 font-serif text-4xl font-normal leading-[1.12] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[68px]">
                                Ms. Aparna A
                            </h1>

                            <p className="mt-4 font-serif text-xl italic text-[#D2B87C] sm:text-2xl">
                                Assistant Professor
                            </p>

                            <div className="mt-7 flex flex-wrap gap-3">
                                <span className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80">
                                    MCA
                                </span>
                                <span className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80">
                                    BCA
                                </span>
                                <span className="border border-[#D2B87C]/40 px-4 py-2 text-[10px] tracking-wide text-[#D2B87C]">
                                    Ph.D. Pursuing
                                </span>
                            </div>

                            <div className="mt-8 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#D2B87C]" />
                                <span className="text-[10px] uppercase tracking-[0.18em] text-white/50">
                                    NCERC Unique ID: E5693
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
                                            MCA, BCA
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
                                            AI, Machine Learning & Data Mining
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Brain
                                        size={19}
                                        className="shrink-0 text-[#D2B87C]"
                                        strokeWidth={1.5}
                                    />
                                    <div>
                                        <p className="text-[9px] uppercase tracking-[0.13em] text-white/45">
                                            Doctoral Status
                                        </p>
                                        <p className="mt-1 text-xs leading-5 text-white/90">
                                            Ph.D. Pursuing
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
                                            Computer Applications
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
                                title="About Ms. Aparna A"
                                description="An introduction to her academic background, teaching approach and professional experience."
                            />

                            <div className="space-y-5 text-sm leading-8 text-[#55535B]">
                                <p>
                                   Aparna A is currently serving as an Assistant Professor with two years of academic experience in higher education, presently pursuing Doctor of Philosophy (Ph.D.) at Bharathiar University, reflecting strong commitment to advancing knowledge and research in the field of computer science.
                                </p>

                                <p>
                                    She actively conducts laboratory sessions, fostering practical understanding and hands-on skills among students, demonstrates a student-centred teaching approach, emphasizing conceptual clarity, analytical thinking, and real-world application of computing principles.
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
                                value="Computer Applications"
                            />
                            <DetailItem
                                label="Qualification"
                                value="MCA, BCA"
                            />
                            <DetailItem
                                label="Doctoral Status"
                                value="Ph.D. Pursuing – Bharathiar University"
                            />
                            {/* <DetailItem
                                label="NCERC Unique ID"
                                value="E5693"
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
                            description="Research focus and areas of specialisation in computing, intelligent systems and emerging technologies."
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
                                    Data Mining, Artificial Intelligence and Machine Learning
                                </h3>

                                <p className="mt-5 text-sm leading-8 text-[#55535B]">
                                    Her research interests include data mining,
                                    artificial intelligence, machine learning,
                                    deep learning and computer networks, with
                                    an emphasis on computing applications and
                                    emerging technological approaches.
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
                            description="Courses and laboratory subjects handled across MCA and other academic programmes."
                        />

                        <DataTable
                            headers={[
                                "Sl. No.",
                                "Stream",
                                "Branch",
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
                            title="Publications – Conference / Journal Details"
                            description="Research papers and journal contributions listed in the faculty academic profile."
                        />

                        <div className="mb-8 grid grid-cols-2 gap-4 sm:max-w-md">
                            <div className="border border-[#E6DFD3] bg-[#FAF7F2] p-5">
                                <p className="font-serif text-3xl font-normal text-[#20235A]">
                                    08
                                </p>
                                <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-[#927B4D]">
                                    Publications · 2026
                                </p>
                            </div>

                            <div className="border border-[#E6DFD3] bg-[#FAF7F2] p-5">
                                <p className="font-serif text-3xl font-normal text-[#20235A]">
                                    08
                                </p>
                                <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-[#927B4D]">
                                    Publications · 2025
                                </p>
                            </div>
                        </div>

                        <PublicationList
                            year="2026"
                            items={publications2026}
                        />

                        <PublicationList
                            year="2025"
                            items={publications2025}
                        />
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
                            description="Research identifiers and academic profiles associated with Ms. Aparna A."
                        />

                        <div className="grid gap-5 md:grid-cols-2">
                            <div className="border border-[#E6DFD3] bg-[#FAF7F2] p-6 sm:p-7">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-11 w-11 items-center justify-center bg-white text-[#927B4D]">
                                        <Award size={19} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-[#927B4D]">
                                            Researcher ID
                                        </p>
                                        <p className="mt-1 text-sm text-[#393947]">
                                            OUH-5268-2025
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="border border-[#E6DFD3] bg-[#FAF7F2] p-6 sm:p-7">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-11 w-11 items-center justify-center bg-white text-[#927B4D]">
                                        <Atom size={19} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-[#927B4D]">
                                            NCERC Unique ID
                                        </p>
                                        <p className="mt-1 text-sm text-[#393947]">
                                            E5693
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <a
                                href="https://orcid.org/0009-0001-8711-6342"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group border border-[#E6DFD3] bg-[#FAF7F2] p-6 transition-colors hover:border-[#D2B87C] sm:p-7"
                            >
                                <div className="flex items-center justify-between gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-11 w-11 items-center justify-center bg-white text-[#927B4D]">
                                            <GraduationCap size={19} strokeWidth={1.5} />
                                        </div>
                                        <div>
                                            <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-[#927B4D]">
                                                ORCID Profile
                                            </p>
                                            <p className="mt-1 break-all text-sm text-[#393947]">
                                                0009-0001-8711-6342
                                            </p>
                                        </div>
                                    </div>
                                    <ExternalLink
                                        size={16}
                                        className="shrink-0 text-[#927B4D] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                    />
                                </div>
                            </a>

                            <a
                                href="https://scholar.google.co.in/citations?view_op=new_profile&hl=en"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group border border-[#E6DFD3] bg-[#FAF7F2] p-6 transition-colors hover:border-[#D2B87C] sm:p-7"
                            >
                                <div className="flex items-center justify-between gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-11 w-11 items-center justify-center bg-white text-[#927B4D]">
                                            <Brain size={19} strokeWidth={1.5} />
                                        </div>
                                        <div>
                                            <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-[#927B4D]">
                                                Google Scholar Profile
                                            </p>
                                            <p className="mt-1 text-sm text-[#393947]">
                                                View Google Scholar Profile
                                            </p>
                                        </div>
                                    </div>
                                    <ExternalLink
                                        size={16}
                                        className="shrink-0 text-[#927B4D] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
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
