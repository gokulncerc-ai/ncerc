
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
    BookMarked,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../../../DepartmentNav/DepartmentNav";

const researchInterests = [
    "Assembly Job Shop Scheduling",
    "Multi-Criteria Decision Making (MCDM)",
    "Supply Chain Management",
    "Production Planning and Control",
    "Discrete Event Simulation",
    "Decision Support Systems",
    "Manufacturing Systems Optimization",
];

const primaryResearchInterests = [
    "Operations Management",
    "Industrial Scheduling and Optimization",
    "Multi-Criteria Decision Making (MCDM)",
    "Supply Chain Management",
    "Production Planning and Control",
    "Assembly Job Shop Scheduling",
    "Simulation Modeling (Discrete Event Simulation)",
    "Decision Support Systems",
    "Manufacturing Systems Optimization",
];

const keywords = [
    "Industrial Scheduling",
    "Job Shop Scheduling",
    "Assembly Job Shop",
    "Artificial Intelligence in Scheduling",
    "Data-Driven Optimization",
    "Hybrid MCDM Techniques",
];

const courses = [
    ["1", "2026", "B.Tech", "S8", "ME", "Quality Management"],
    ["2", "2026", "B.Tech", "S6", "ME & MTR", "Management for Engineers"],
    [
        "3",
        "2026",
        "B.Tech",
        "S4",
        "ME",
        "Engineering Ethics and Sustainable Development",
    ],
    ["4", "2026", "B.Tech", "S4", "ME", "Manufacturing Technology Lab"],
    ["5", "2025", "B.Tech", "S7", "ME", "Industrial Safety Engineering"],
    ["6", "2025", "B.Tech", "S5", "ME", "Industrial Systems Engineering"],
    ["7", "2025", "B.Tech", "S3", "ME", "Economics for Engineers"],
];

const additionalCourses = [
    ["1", "Mechanics of Fluids"],
    ["2", "Machine Tools"],
    ["3", "Mechanics of Machinery"],
    ["4", "Fluid Machinery"],
    ["5", "Metallurgy & Material Science"],
    ["6", "Refrigeration & Air Conditioning"],
    ["7", "Industrial Engineering"],
    ["8", "Heat and Mass Transfer"],
    ["9", "Mechatronics"],
    ["10", "Operation Research"],
    ["11", "Dynamics of Machinery"],
    ["12", "Basics of Mechanical Engineering"],
    ["13", "IC Engines and Gas Turbines"],
    ["14", "Supply Chain Management"],
];

const publications = [
    {
        year: "2025",
        title:
            "Performance modelling and development of priority dispatching rules for job prioritization using TOPSIS in a multilevel large-scale assembly job shop",
        authors:
            "Sudeesh, S., Rameshkumar, K., Thenarasu, M., & McDermott, O.",
        publication:
            "International Journal of Management Science and Engineering Management, 1–24.",
        status: "Published",
        url: "https://doi.org/10.1080/17509653.2025.2577911",
    },
    {
        year: "2024",
        title:
            "Simulation analysis and development of priority dispatching rules for a partial flexible job shop",
        authors:
            "Sudeesh, S., Rameshkumar, K., Anbuudayasankar, S. P., & Thenarasu, M.",
        publication:
            "International Journal of Services and Operations Management, 48(4), 576–601.",
        status: "Published",
    },
    {
        year: "2025",
        title:
            "Multi-Criteria Scheduling in Assembly Job Shops through Integration of MCDM and Simulation",
        authors:
            "Sudeesh, S., Rameshkumar, K., Thenarasu, M., Ponnambalam, S. G.",
        publication:
            "International Conference on Smart Manufacturing, Advanced Materials, and Intelligent Automation (SMAMIA 2025), 18–20 December. To be published in Flexible Services and Manufacturing Journal.",
        status: "Conference / To be Published",
    },
    {
        year: "2026",
        title:
            "An Integrated MCDM-Simulation approach to study the effect of lot-splitting in a large-scale assembly job shop: A case study",
        authors:
            "Sudeesh, S., Rameshkumar, K., Thenarasu, M., & McDermott, O.",
        publication:
            "The International Journal of Advanced Manufacturing Technology.",
        status: "Under Review",
    },
    {
        year: "2026",
        title:
            "Simulation-Based Decision-Making Framework for Optimal Scheduling in an Assembly Job Shop Environment: An Industrial Case Study",
        authors:
            "Sudeesh, S., Rameshkumar, K., Thenarasu, M., & Erfan Babaee, T.",
        publication:
            "Applied Computational Intelligence and Soft Computing.",
        status: "Under Review",
    },
    {
        year: "2021",
        title:
            "Development of an Efficient Framework for the Distribution of Essential Relief Materials during Floods by Clustering Technique",
        authors:
            "Sudeesh, S., Rameshkumar, K., & Anbuudayasankar, S. P.",
        publication:
            "IOP Conference Series: Materials Science and Engineering, 1132(1), 012013. IOP Publishing.",
        status: "Published",
    },
    {
        year: "2018",
        title:
            "Application of Taguchi method for optimization of process parameters in spur gear milling operation",
        authors:
            "Sudeesh, S., Jyothish, W., Kiran, J., Sajul, U., & Sreeprasanth, M.",
        publication:
            "International Research Journal of Engineering and Technology, 5.",
        status: "Published",
    },
    {
        year: "2016",
        title: "Virtual analysis of composite material leaf spring",
        authors: "Sudeesh, S.",
        publication:
            "International Research Journal of Engineering and Technology, 3(6).",
        status: "Published",
    },
    {
        year: "2016",
        title:
            "Performance test and exhaust gas analysis on diesel engine using sunflower oil as biodiesel",
        authors: "Sudeesh, S.",
        publication:
            "International Research Journal of Engineering and Technology, 3(4).",
        status: "Published",
    },
];

const researcherProfiles = [
    {
        label: "ORCID Profile",
        url: "https://orcid.org/0009-0005-5162-4897",
        display: "0009-0005-5162-4897",
    },
    {
        label: "Google Scholar",
        url: "https://scholar.google.com/citations?user=ya5xp84AAAAJ&hl=en",
        display: "Google Scholar Profile",
    },
];

const profileSections = [
    { id: "about", label: "About Me" },
    { id: "research", label: "Research" },
    { id: "courses", label: "Courses" },
    { id: "publications", label: "Publications" },
    { id: "books", label: "Book Chapter" },
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
    minWidth = "600px",
}: {
    headers: string[];
    rows: string[][];
    minWidth?: string;
}) {
    return (
        <div className="overflow-hidden border border-[#E6DFD3] bg-white">
            <div className="overflow-x-auto">
                <table
                    className="w-full border-collapse text-left"
                    style={{ minWidth }}
                >
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
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default function SudeeshSFacultyPage() {
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
                        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#D2B87C] sm:text-xs">
                            Faculty Profile
                        </p>
                    </div>

                    <div className="mt-7 grid gap-10 lg:grid-cols-[1fr_300px] lg:items-end">
                        <div>
                            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/50">
                                Department of Mechanical Engineering
                            </p>

                            <h1 className="mt-4 font-serif text-4xl font-normal leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                                Mr. Sudeesh S
                            </h1>

                            <p className="mt-3 font-serif text-lg italic text-[#D2B87C] sm:text-xl">
                                Assistant Professor
                            </p>

                            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/65">
                                Department of Mechanical Engineering,
                                Nehru College of Engineering and Research
                                Centre.
                            </p>

                            <div className="mt-7 flex flex-wrap gap-3">
                                <span className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80">
                                    PhD – Thesis Submitted
                                </span>
                                <span className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80">
                                    M.Tech
                                </span>
                                <span className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80">
                                    B.Tech
                                </span>
                            </div>
                        </div>

                        <div className="border border-[#D2B87C]/35 bg-white/[0.04] p-6 backdrop-blur-sm">
                            <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#D2B87C]">
                                Academic Profile
                            </p>

                            <div className="mt-5 space-y-5">
                                <div className="flex items-start gap-3">
                                    <GraduationCap
                                        size={19}
                                        className="mt-1 shrink-0 text-[#D2B87C]"
                                        strokeWidth={1.5}
                                    />
                                    <div>
                                        <p className="text-[9px] uppercase tracking-[0.13em] text-white/45">
                                            Qualification
                                        </p>
                                        <p className="mt-1 text-xs leading-5 text-white/90">
                                            PhD Thesis Submitted, M.Tech,
                                            B.Tech
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Microscope
                                        size={19}
                                        className="mt-1 shrink-0 text-[#D2B87C]"
                                        strokeWidth={1.5}
                                    />
                                    <div>
                                        <p className="text-[9px] font-medium uppercase tracking-[0.13em] text-white/45">
                                            Primary Research Interest
                                        </p>
                                        <p className="mt-1 text-xs leading-5 text-white/90">
                                            Operations Management, Industrial
                                            Scheduling, MCDM, Supply Chain
                                            Management
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
                                            Faculty ID
                                        </p>
                                        <p className="mt-1 text-xs text-white/90">
                                            4163
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
                <InnerHeader />

                {/* Profile Navigation */}
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
                                title="About Mr. Sudeesh S"
                                description="Academic profile and professional information."
                            />

                            <div className="space-y-5 text-sm leading-8 text-[#55535B]">
                                <p>
                                    Mr. Sudeesh S is an Assistant Professor
                                    in the Department of Mechanical
                                    Engineering. He has submitted his PhD
                                    thesis at Amrita Vishwa Vidyapeetham,
                                    Coimbatore.
                                </p>

                                <p>
                                    He holds an M.Tech in Production and
                                    Industrial Engineering and a B.Tech in
                                    Mechanical Engineering.
                                </p>

                                <p>
                                    His academic and research interests
                                    include Operations Management, Industrial
                                    Scheduling and Optimization,
                                    Multi-Criteria Decision Making, Supply
                                    Chain Management, Production Planning
                                    and Control, and Manufacturing Systems
                                    Optimization.
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
                                value="Mechanical Engineering"
                            />
                            {/* <DetailItem
                                label="PhD Status"
                                value="Thesis Submitted"
                            /> */}
                            {/* <DetailItem
                                label="Research Institution"
                                value="Amrita Vishwa Vidyapeetham, Coimbatore"
                            /> */}
                            <DetailItem
                                label="NCERC Unique ID"
                                value="4163"
                            />
                            <DetailItem
                                label="Scopus Author ID"
                                value="60227175000"
                            />
                        </aside>
                    </div>
                </section>

                {/* Research & Academic Background */}
                <section
                    id="research"
                    className="scroll-mt-24 bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="02"
                            eyebrow="Academic Exploration"
                            title="Research & Academic Background"
                            description="Academic qualifications, research interests, keywords, and researcher profiles."
                        />

                        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                            <div className="space-y-6">
                                <div className="border-l-2 border-[#D2B87C] pl-6">
                                    <div className="flex items-center gap-3">
                                        <GraduationCap
                                            size={19}
                                            className="text-[#927B4D]"
                                            strokeWidth={1.5}
                                        />
                                        <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                            Doctoral Qualification
                                        </p>
                                    </div>

                                    <h3 className="mt-3 font-serif text-xl text-[#20235A]">
                                        PhD – Thesis Submitted
                                    </h3>
                                    <p className="mt-2 text-xs leading-6 text-[#77747A]">
                                        Amrita Vishwa Vidyapeetham,
                                        Coimbatore
                                    </p>
                                </div>

                                <div className="border-l-2 border-[#D2B87C] pl-6">
                                    <div className="flex items-center gap-3">
                                        <GraduationCap
                                            size={19}
                                            className="text-[#927B4D]"
                                            strokeWidth={1.5}
                                        />
                                        <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                            Postgraduate Qualification
                                        </p>
                                    </div>

                                    <h3 className="mt-3 font-serif text-xl text-[#20235A]">
                                        M.Tech
                                    </h3>
                                    <p className="mt-2 text-xs leading-6 text-[#77747A]">
                                        Production and Industrial Engineering
                                    </p>
                                </div>

                                <div className="border-l-2 border-[#D2B87C] pl-6">
                                    <div className="flex items-center gap-3">
                                        <GraduationCap
                                            size={19}
                                            className="text-[#927B4D]"
                                            strokeWidth={1.5}
                                        />
                                        <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                            Undergraduate Qualification
                                        </p>
                                    </div>

                                    <h3 className="mt-3 font-serif text-xl text-[#20235A]">
                                        B.Tech
                                    </h3>
                                    <p className="mt-2 text-xs leading-6 text-[#77747A]">
                                        Mechanical Engineering
                                    </p>
                                </div>
                            </div>

                            <div className="border border-[#E8E1D5] bg-[#FAF7F2] p-6 sm:p-8">
                                <div className="flex items-center gap-3">
                                    <Microscope
                                        size={20}
                                        className="text-[#927B4D]"
                                        strokeWidth={1.5}
                                    />
                                    <h3 className="font-serif text-xl text-[#20235A]">
                                        Research Interests
                                    </h3>
                                </div>

                                <div className="mt-4 space-y-3">
                                    {primaryResearchInterests.map((interest) => (
                                        <p
                                            key={interest}
                                            className="border-b border-[#E5DED1] pb-3 text-sm leading-7 text-[#55535B] last:border-b-0 last:pb-0"
                                        >
                                            {interest}
                                        </p>
                                    ))}
                                </div>

                                <div className="mt-6 border-t border-[#E5DED1] pt-5">
                                    <p className="text-[9px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                        Researcher Profiles
                                    </p>

                                    <div className="mt-4 space-y-4">
                                        {researcherProfiles.map((profile) => (
                                            <div
                                                key={profile.label}
                                                className="border-b border-[#E5DED1] pb-4 last:border-b-0 last:pb-0"
                                            >
                                                <p className="text-[9px] font-medium uppercase tracking-[0.13em] text-[#927B4D]">
                                                    {profile.label}
                                                </p>

                                                <a
                                                    href={profile.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="mt-2 flex items-start gap-2 break-all text-xs leading-6 text-[#20235A] underline decoration-[#D2B87C] underline-offset-4 transition-colors hover:text-[#927B4D]"
                                                >
                                                    {profile.display}
                                                    <ExternalLink
                                                        size={13}
                                                        className="mt-1 shrink-0"
                                                    />
                                                </a>
                                            </div>
                                        ))}

                                        <div className="border-b border-[#E5DED1] pb-4">
                                            <p className="text-[9px] font-medium uppercase tracking-[0.13em] text-[#927B4D]">
                                                Scopus Author ID
                                            </p>
                                            <p className="mt-2 text-xs leading-6 text-[#20235A]">
                                                60227175000
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Areas of Interest */}
                        <div className="mt-14">
                            <div className="mb-6 flex items-center gap-3">
                                <Lightbulb
                                    size={19}
                                    className="text-[#927B4D]"
                                    strokeWidth={1.5}
                                />
                                <h3 className="font-serif text-xl text-[#20235A]">
                                    Areas of Interest
                                </h3>
                            </div>

                            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
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
                        </div>

                        {/* Research Keywords */}
                        <div className="mt-12 border-l-2 border-[#D2B87C] bg-[#FAF7F2] px-6 py-6 sm:px-8">
                            <p className="text-[9px] font-medium uppercase tracking-[0.17em] text-[#927B4D]">
                                Research Keywords
                            </p>

                            <div className="mt-4 flex flex-wrap gap-2">
                                {keywords.map((keyword) => (
                                    <span
                                        key={keyword}
                                        className="border border-[#E3D9C8] bg-white px-3 py-2 text-xs leading-5 text-[#55535B]"
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
                            description="Courses handled across academic years, programmes, semesters, and branches."
                        />

                        <div className="mb-5 flex items-center gap-3">
                            <BookOpen
                                size={18}
                                className="text-[#927B4D]"
                                strokeWidth={1.5}
                            />
                            <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                7 Courses Listed
                            </p>
                        </div>

                        <DataTable
                            headers={[
                                "Sl. No.",
                                "Year",
                                "Programme",
                                "Semester",
                                "Branch",
                                "Subject",
                            ]}
                            rows={courses}
                            minWidth="850px"
                        />

                        {/* Additional Courses */}
                        <div className="mt-14">
                            <SectionHeading
                                number="03.1"
                                eyebrow="Additional Teaching"
                                title="Additional Courses Handled"
                                description="Other subjects handled as part of the academic teaching experience."
                            />

                            <div className="mb-5 flex items-center gap-3">
                                <BookOpen
                                    size={18}
                                    className="text-[#927B4D]"
                                    strokeWidth={1.5}
                                />
                                <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                    14 Additional Courses
                                </p>
                            </div>

                            <DataTable
                                headers={["Sl. No.", "Subject"]}
                                rows={additionalCourses}
                            />
                        </div>
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
                            title="Journal & Conference Publications"
                            description="Research papers, conference contributions, and publication details."
                        />

                        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                            <div className="flex items-center gap-3">
                                <FileText
                                    size={19}
                                    className="text-[#927B4D]"
                                    strokeWidth={1.5}
                                />
                                <h3 className="font-serif text-xl text-[#20235A]">
                                    Research Publications
                                </h3>
                            </div>

                            <span className="border border-[#D8CDB8] bg-[#FAF7F2] px-3 py-2 text-[9px] uppercase tracking-[0.13em] text-[#927B4D]">
                                9 Publications
                            </span>
                        </div>

                        <div className="space-y-4">
                            {publications.map((publication, index) => (
                                <article
                                    key={`${publication.year}-${index}`}
                                    className="border border-[#E8E1D5] bg-[#FAF7F2] p-5 transition-colors hover:border-[#D2B87C] sm:p-7"
                                >
                                    <div className="flex flex-wrap items-center justify-between gap-3">
                                        <div className="flex items-center gap-3">
                                            <span className="font-serif text-2xl text-[#B49A66]">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>
                                            <span className="h-5 w-px bg-[#D8CDB8]" />
                                            <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                                {publication.year}
                                            </span>
                                        </div>

                                        <span className="border border-[#D8CDB8] bg-white px-3 py-1.5 text-[9px] uppercase tracking-[0.12em] text-[#77747A]">
                                            {publication.status}
                                        </span>
                                    </div>

                                    <h3 className="mt-5 font-serif text-lg leading-7 text-[#20235A]">
                                        {publication.title}
                                    </h3>

                                    <p className="mt-3 text-xs leading-6 text-[#77747A]">
                                        {publication.authors}
                                    </p>

                                    <p className="mt-3 text-sm leading-7 text-[#55535B]">
                                        {publication.publication}
                                    </p>

                                    {publication.url && (
                                        <a
                                            href={publication.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-5 inline-flex items-center gap-2 border-t border-[#E5DED1] pt-4 text-[10px] font-medium uppercase tracking-[0.13em] text-[#927B4D] transition-colors hover:text-[#20235A]"
                                        >
                                            View Publication
                                            <ExternalLink size={14} />
                                        </a>
                                    )}
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Book Publication */}
                <section
                    id="books"
                    className="scroll-mt-24 bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="05"
                            eyebrow="Book Contributions"
                            title="Book Publication"
                            description="Published book chapter and bibliographic details."
                        />

                        <article className="border border-[#E8E1D5] bg-white p-6 sm:p-9">
                            <div className="flex flex-wrap items-center justify-between gap-4">
                                <div className="flex items-center gap-3">
                                    <BookMarked
                                        size={21}
                                        className="text-[#927B4D]"
                                        strokeWidth={1.5}
                                    />
                                    <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#927B4D]">
                                        Book Chapter
                                    </p>
                                </div>

                                <span className="border border-[#D8CDB8] bg-[#FAF7F2] px-3 py-2 text-[9px] uppercase tracking-[0.13em] text-[#927B4D]">
                                    2026
                                </span>
                            </div>

                            <h3 className="mt-6 font-serif text-xl leading-8 text-[#20235A] sm:text-2xl">
                                Predictive Maintenance, Lifecycle Management,
                                and Supply Chain Optimization
                            </h3>

                            <p className="mt-2 text-sm text-[#77747A]">
                                Chapter 3
                            </p>

                            <p className="mt-5 text-sm leading-7 text-[#55535B]">
                                Sudeesh, S., & Happy, A. (2026). “Predictive
                                Maintenance, Lifecycle Management, and
                                Supply Chain Optimization” (Chapter 3) in
                                <span className="italic">
                                    {" "}Manufacturing Process Optimization
                                    for Sustainable Development Using Digital
                                    Twin Applications.
                                </span>
                            </p>

                            <div className="mt-7 grid gap-5 border-t border-[#E8E1D5] pt-6 sm:grid-cols-2">
                                <div>
                                    <p className="text-[9px] font-medium uppercase tracking-[0.14em] text-[#927B4D]">
                                        Date of Publication
                                    </p>
                                    <p className="mt-2 text-sm text-[#393947]">
                                        12-03-2026
                                    </p>
                                </div>

                                <div>
                                    <p className="text-[9px] font-medium uppercase tracking-[0.14em] text-[#927B4D]">
                                        Published By
                                    </p>
                                    <p className="mt-2 text-sm leading-6 text-[#393947]">
                                        CRC Press (Taylor & Francis Group),
                                        Boca Raton, USA
                                    </p>
                                </div>

                                <div>
                                    <p className="text-[9px] font-medium uppercase tracking-[0.14em] text-[#927B4D]">
                                        Edition
                                    </p>
                                    <p className="mt-2 text-sm text-[#393947]">
                                        1st Edition
                                    </p>
                                </div>

                                <div>
                                    <p className="text-[9px] font-medium uppercase tracking-[0.14em] text-[#927B4D]">
                                        ISBN
                                    </p>
                                    <div className="mt-2 space-y-1 text-sm leading-6 text-[#393947]">
                                        <p>978-1-032-82229-7 (Hardback)</p>
                                        <p>978-1-032-84502-9 (Paperback)</p>
                                        <p>978-1-003-50482-5 (eBook)</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>
            </main>

            <FooterSection />
        </>
    );
}
