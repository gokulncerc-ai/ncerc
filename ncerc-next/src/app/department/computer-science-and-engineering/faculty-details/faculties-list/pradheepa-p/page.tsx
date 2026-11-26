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
    Cloud,
    Network,
    FileText,
    Award,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../../../DepartmentNav/DepartmentNavigation";

const researchInterests = [
    "Artificial Intelligence",
    "Machine Learning",
    "Cloud Computing",
    "Cyber Security",
    "Data Mining",
    "IoT",
];

const keywords = [
    "AI",
    "ML",
    "Cloud Computing",
    "Cyber Security",
    "IoT",
    "Data Mining",
];

const courses = [
    [
        "01",
        "Computer Programming",
        "C, C++, OOP, Java, Python, Linux and associated laboratory courses",
    ],
    [
        "02",
        "Core Subjects",
        "Operating Systems, DBMS, Computer Networks, Artificial Intelligence, TOC, Compiler Design, Network Security, Graph Theory and Computational Geometry",
    ],
    [
        "03",
        "Non-Technical Subjects",
        "Software Engineering and Testing, Industrial Economics and Foreign Trade, Ethics and Sustainability Engineering",
    ],
];

const journalPublications = [
    {
        title:
            "Spoofing Recognition for Face with Masks: An Analysis",
        journal:
            "International Research Journal of Engineering and Technology (IRJET)",
        details: "Vol. 2, Issue 3, June 2015",
        issn: "ISSN: 2359-0072",
    },
    {
        title: "Achieving Cost Efficiency Using CaaS Model in the Cloud",
        journal: "IEEE Xplore",
        details: "January 2013",
        issn: "ISSN: 2377-6927",
    },
    {
        title:
            "Decision Making Scheme to Ensure Power and Resource Usage for Service Providers",
        journal:
            "International Journal of Advanced and Innovative Research (IJAIR)",
        details: "Vol. 2, Issue 5, 2013",
        issn: "ISSN: 2278-7844",
    },
    {
        title:
            "Certain Investigations in Text Mining with Respect to Abnormal User Behaviour Using Sequential Topic Patterns",
        journal:
            "International Journal of Science & Advanced Research in Technology (IJSART)",
        details: "Vol. 3, Issue 6, June 2017",
        issn: "ISSN: 2395-1052",
    },
    {
        title:
            "Identification Approach for Biometric Systems Using the ABM Procedure with the Low Frequency Eye Tracker",
        journal:
            "International Journal of Scientific Research in Engineering and Management",
        details: "Vol. 4, Issue 4, April 2020",
        issn: "ISSN: 2582-3930",
    },
    {
        title: "IoT Based Industrial Fault Monitoring System",
        journal:
            "Conference Proceedings – 8th International Conference on Science, Engineering & Technology (ICSET-2023), Thailand",
        details: "2023",
        issn: "ISBN: 978-93-5737-739-3",
    },
    {
        title:
            "An Improved Mixed Convolutional and Adaptive Residual Network Based Esophageal Cancer Detection and Classification",
        journal: "Grenze International Journal of Engineering and Technology",
        details: "Vol. 10, Issue 1, January 2024",
        issn: "ISSN: 2395-5295 (Online); 2395-5287 (Print)",
    },
];

const patents = [
    {
        title:
            "Automatic Recommendation System to Overcome Depression in Dysfunctional Behavior Using Machine Learning Techniques",
    },
    {
        title:
            "Prediction of Intelligent Level (IQ) of Children Below the Normal Level Results in Retardation Using AI & ML Techniques",
    },
];

const bookChapters = [
    {
        number: "01",
        title:
            "Machine Learning Techniques for Soil Health Assessment and Crop Suitability Prediction",
        book:
            "AI in Smart Agriculture for Sustainable Crop Management and Precision Farming",
    },
    {
        number: "02",
        title:
            "AI Enabled Decision Support Systems for Real Time Industrial Process Automation and Optimization",
        book: "Book chapter",
    },
];

const profileSections = [
    { id: "about", label: "About" },
    { id: "research", label: "Research" },
    { id: "courses", label: "Courses" },
    { id: "publications", label: "Publications" },
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

export default function PradheebaPFacultyPage() {
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
                                Ms. Pradheeba P
                            </h1>

                            <p className="mt-3 font-serif text-lg italic text-[#D2B87C] sm:text-xl">
                                Assistant Professor
                            </p>

                            <div className="mt-7 flex flex-wrap gap-3">
                                <span className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80">
                                    M.E – Computer Science and Engineering
                                </span>
                                <span className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80">
                                    B.E – Computer Science and Engineering
                                </span>
                            </div>

                            <div className="mt-8 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#D2B87C]" />
                                <span className="text-[10px] uppercase tracking-[0.18em] text-white/50">
                                    NCERC Unique ID: E 5916
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
                                        <p className="mt-1 text-xs text-white/90">
                                            M.E, B.E
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
                                            AI, Machine Learning & Healthcare
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
                                        <p className="mt-1 text-xs text-white/90">
                                            13+ Years
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
                                title="About Ms. Pradheeba P"
                                description="Academic background, professional experience, research contributions, and areas of expertise."
                            />

                            <p className="text-sm leading-8 text-[#55535B]">
                                Pradheeba P. is an accomplished academic and researcher with over 13 years of experience in Computer Science and Engineering. An honors graduate of Anna University (M.E.), she has served as an Assistant Professor at prestigious institutions across Kerala and Tamil Nadu. Her research focuses on Machine Learning and AI applications in healthcare, resulting in three Indian patents, two book chapters, and numerous IEEE-published papers. Specializing in Cloud Computing and Cyber Security, she is a member of IAENG and CSTA. Beyond research, she has spearheaded over 30 academic events, demonstrating a deep commitment to fostering innovation in engineering.
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
                                label="Postgraduate Qualification"
                                value="M.E – Computer Science and Engineering"
                            />
                            {/* <DetailItem
                                label="Undergraduate Qualification"
                                value="B.E – Computer Science and Engineering"
                            /> */}
                            {/* <DetailItem
                                label="Experience"
                                value="13+ Years"
                            /> */}
                            {/* <DetailItem
                                label="NCERC Unique ID"
                                value="E 5916"
                            /> */}
                            {/* <DetailItem
                                label="Professional Memberships"
                                value="IAENG and CSTA"
                            /> */}
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

                        {/* Research Focus */}
                        <div className="mt-8 grid gap-4 sm:grid-cols-3">
                            <div className="border border-[#E8E1D5] p-5">
                                <ShieldCheck
                                    size={20}
                                    className="mb-4 text-[#927B4D]"
                                    strokeWidth={1.5}
                                />
                                <h3 className="font-serif text-lg text-[#20235A]">
                                    Cyber Security
                                </h3>
                                <p className="mt-2 text-xs leading-6 text-[#69666B]">
                                    Research interest in security-focused
                                    computing and technologies.
                                </p>
                            </div>

                            <div className="border border-[#E8E1D5] p-5">
                                <Cloud
                                    size={20}
                                    className="mb-4 text-[#927B4D]"
                                    strokeWidth={1.5}
                                />
                                <h3 className="font-serif text-lg text-[#20235A]">
                                    Cloud Computing
                                </h3>
                                <p className="mt-2 text-xs leading-6 text-[#69666B]">
                                    Academic focus on cloud computing
                                    technologies and applications.
                                </p>
                            </div>

                            <div className="border border-[#E8E1D5] p-5">
                                <Network
                                    size={20}
                                    className="mb-4 text-[#927B4D]"
                                    strokeWidth={1.5}
                                />
                                <h3 className="font-serif text-lg text-[#20235A]">
                                    AI & Machine Learning
                                </h3>
                                <p className="mt-2 text-xs leading-6 text-[#69666B]">
                                    Research applications of AI and Machine
                                    Learning, including healthcare.
                                </p>
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
                            description="Courses and subject areas handled across programming, core computer science, and non-technical disciplines."
                        />

                        <div className="mb-5 flex items-center gap-3">
                            <BookOpen
                                size={18}
                                className="text-[#927B4D]"
                                strokeWidth={1.5}
                            />
                            <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#927B4D]">
                                3 Subject Categories
                            </p>
                        </div>

                        <DataTable
                            headers={[
                                "Sl. No.",
                                "Course Category",
                                "Subjects / Areas",
                            ]}
                            widths={["10%", "25%", "65%"]}
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
                            title="Publications & Patents"
                            description="Journal and conference publications, patent contributions, and academic book chapters."
                        />

                        {/* Journal Publications */}
                        <div className="mb-12">
                            <div className="mb-6 flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center bg-[#F5F0E6] text-[#927B4D]">
                                    <BookOpen size={19} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h3 className="font-serif text-xl text-[#20235A]">
                                        Journal & Conference Publications
                                    </h3>
                                    <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#927B4D]">
                                        7 Listed Publications
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                {journalPublications.map(
                                    (publication, index) => (
                                        <article
                                            key={publication.title}
                                            className="grid gap-4 border border-[#E8E1D5] bg-white p-5 transition-colors hover:border-[#D2B87C] sm:grid-cols-[65px_1fr] sm:gap-6 sm:p-6"
                                        >
                                            <div className="flex items-center gap-3 sm:block">
                                                <span className="font-serif text-2xl text-[#927B4D]">
                                                    {String(index + 1).padStart(
                                                        2,
                                                        "0"
                                                    )}
                                                </span>
                                                <span className="h-px w-8 bg-[#D2B87C] sm:mt-3 sm:block" />
                                            </div>

                                            <div>
                                                <h4 className="font-serif text-lg leading-7 text-[#20235A]">
                                                    {publication.title}
                                                </h4>

                                                <p className="mt-2 text-xs leading-6 text-[#55535B]">
                                                    {publication.journal}
                                                </p>

                                                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                                                    <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[#927B4D]">
                                                        {publication.details}
                                                    </span>
                                                    <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[#927B4D]">
                                                        {publication.issn}
                                                    </span>
                                                </div>
                                            </div>
                                        </article>
                                    )
                                )}
                            </div>
                        </div>

                        {/* Patent Contributions */}
                        <div className="mb-12">
                            <div className="mb-6 flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center bg-[#F5F0E6] text-[#927B4D]">
                                    <ShieldCheck
                                        size={19}
                                        strokeWidth={1.5}
                                    />
                                </div>
                                <div>
                                    <h3 className="font-serif text-xl text-[#20235A]">
                                        Patent Contributions
                                    </h3>
                                    <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#927B4D]">
                                        Patent Titles Provided
                                    </p>
                                </div>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                                {patents.map((patent, index) => (
                                    <article
                                        key={patent.title}
                                        className="border border-[#E8E1D5] bg-[#FAF7F2] p-6 transition-colors hover:border-[#D2B87C]"
                                    >
                                        <div className="mb-5 flex items-center justify-between">
                                            <span className="font-serif text-2xl text-[#B49A66]">
                                                {String(index + 1).padStart(
                                                    2,
                                                    "0"
                                                )}
                                            </span>
                                            <Award
                                                size={19}
                                                className="text-[#927B4D]"
                                                strokeWidth={1.5}
                                            />
                                        </div>

                                        <h4 className="font-serif text-lg leading-7 text-[#20235A]">
                                            {patent.title}
                                        </h4>

                                        <p className="mt-4 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#927B4D]">
                                            Patent
                                        </p>
                                    </article>
                                ))}
                            </div>
                        </div>

                        {/* Book Chapters */}
                        <div>
                            <div className="mb-6 flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center bg-[#F5F0E6] text-[#927B4D]">
                                    <GraduationCap
                                        size={19}
                                        strokeWidth={1.5}
                                    />
                                </div>
                                <div>
                                    <h3 className="font-serif text-xl text-[#20235A]">
                                        Books & Chapters
                                    </h3>
                                    <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#927B4D]">
                                        2 Listed Book Chapters
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                {bookChapters.map((chapter) => (
                                    <article
                                        key={chapter.number}
                                        className="grid gap-4 border border-[#E8E1D5] p-5 sm:grid-cols-[65px_1fr] sm:gap-6 sm:p-6"
                                    >
                                        <span className="font-serif text-2xl text-[#927B4D]">
                                            {chapter.number}
                                        </span>

                                        <div>
                                            <h4 className="font-serif text-lg leading-7 text-[#20235A]">
                                                {chapter.title}
                                            </h4>

                                            <p className="mt-3 text-xs leading-6 text-[#69666B]">
                                                {chapter.book}
                                            </p>

                                            <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#927B4D]">
                                                Book Chapter
                                            </p>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Back to Faculty Directory */}
                {/* <div className="border-t border-[#EAE4D9] bg-[#FAF7F2] px-5 py-8 sm:px-8 lg:px-12">
                    <div className="mx-auto max-w-7xl">
                        <Link
                            href="/department/computer-science-and-engineering/faculty-details/faculties-list"
                            className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#20235A] transition-colors hover:text-[#927B4D]"
                        >
                            <ArrowUpRight
                                size={14}
                                className="rotate-[-135deg]"
                            />
                            Back to Faculty Directory
                        </Link>
                    </div>
                </div> */}
            </main>

            <FooterSection />
        </>
    );
}