
"use client";

import React from "react";
import {
    ArrowDown,
    BookOpen,
    GraduationCap,
    Lightbulb,
    Microscope,
    UserRound,
    Award,
    FileText,
    ExternalLink,
    IdCard,
    FlaskConical,
    BriefcaseBusiness,
    Users,
    ShieldCheck,
    Presentation,
    Mail,
    CalendarDays,
    BadgeCheck,
    Phone,
    Building2,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../../../DepartmentsNavigation/DepartmentsNavigation";

const profileSections = [
    { id: "about", label: "About Me" },
    { id: "qualifications", label: "Qualifications" },
    { id: "experience", label: "Experience" },
    { id: "research", label: "Research" },
    { id: "courses", label: "Courses" },
    { id: "publications", label: "Publications" },
    { id: "patents", label: "Patents" },
    { id: "guidance", label: "Research Guidance" },
    { id: "projects", label: "Projects" },
    { id: "awards", label: "Awards" },
    { id: "professional", label: "Professional Activities" },
    { id: "profiles", label: "Researcher Profiles" },
];

const qualifications = [
    {
        degree: "Ph.D.",
        specialization: "Mechanical Engineering",
        institution:
            "Noorul Islam Centre for Higher Education, Kumaracoil",
        year: "2025",
    },
    {
        degree: "M.Tech.",
        specialization: "Production Engineering",
        institution: "Government Engineering College, Thrissur",
        year: "2002",
    },
    {
        degree: "B.Tech.",
        specialization: "Mechanical Engineering",
        institution: "Government Engineering College, Thrissur",
        year: "2007",
    },
];

const experience = [
    { label: "Teaching Experience", value: "22 Years" },
    { label: "Industry Experience", value: "Nil" },
    { label: "Research Experience", value: "1 Year" },
];

const specializations = [
    "Supply Chain Management and Operations Management",
    "Lean Six Sigma",
    "Artificial Neural Networks",
    "Predictive Analytics",
];

const researchInterests = [
    "Automotive Supply Chain Optimization and Sustainable Supply Chains",
    "Reverse Logistics",
    "End-of-Life Vehicle Management",
    "Machine Learning",
];

const courses = [
    {
        category: "Undergraduate",
        subjects:
            "Engineering Mechanics, Manufacturing Processes, Mechanics of Machinery, Engineering Graphics, Fluid Mechanics, Fluid Machinery, Industrial Hydraulics and Pneumatics",
    },
];

const publications = [
    { label: "International Journal Publications", value: "04" },
    { label: "National Journal Publications", value: "01" },
    { label: "International Conference Publications", value: "01" },
    { label: "National Conference Publications", value: "Not specified" },
    { label: "Books / Book Chapters", value: "Nil" },
];

const internationalPublications = [
    {
        title:
            "Supply Chain Management Efficiency Improvement in the Automobile Industry Using Lean Six Sigma and Neural Network",
        journal: "IEEE Transactions on Engineering Management",
        details: "Volume 71, Issue 3, pp. 3278–3294 (2024)",
        doi: "10.1109/TEM.2023.3332147",
    },
    {
        title:
            "Supply Chain Management Performance Improvement in Automotive Industry: A Comprehensive Review",
        journal: "Journal of Management World",
        details: "2024(4), pp. 362–379 (2024)",
        doi: "10.53935/jomw.v2024i4.400",
    },
    {
        title:
            "Coupling Coordination and Data Management for Additive Manufacturing Systems Based on Smart Logistics",
        journal: "Publication details as provided",
        details: "2024",
        doi: "10.30638/eemj.2023.018",
    },
    {
        title:
            "End-Of-Life Vehicles Assessment Of The Automobile Industry Using Reverse Logistics Supply Chain And Machine Learning Algorithms",
        journal: "Environmental Engineering and Management Journal",
        details: "Volume 22, Issue 2, pp. 209–237 (2023)",
        doi: "",
    },
];

const researchGuidance = [
    { label: "Ph.D. Scholars Guided", value: "Not specified" },
    { label: "Ph.D. Scholars Currently Guiding", value: "Not specified" },
    { label: "Postgraduate Projects Guided", value: "Not specified" },
    { label: "Undergraduate Projects Guided", value: "Not specified" },
];

const patents = [
    { label: "Patents Granted", value: "Not specified" },
    { label: "Patents Published", value: "01" },
];

const memberships = ["ISTE Life Member", "IEEE Member"];

const responsibilities = [
    "TBI Coordinator",
    "Academic and Institutional Quality Assurance Activities (IQAC) Member",
    "Exam Cell Member",
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
    value: React.ReactNode;
}) {
    return (
        <div className="border-b border-[#EAE4D9] py-4 last:border-b-0">
            <p className="text-[9px] font-medium uppercase tracking-[0.16em] text-[#927B4D]">
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
}: {
    headers: string[];
    rows: string[][];
}) {
    return (
        <div className="overflow-hidden border border-[#E6DFD3] bg-white">
            <div className="overflow-x-auto">
                <table className="w-full min-w-[650px] border-collapse text-left">
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

function MetricGrid({
    items,
}: {
    items: { label: string; value: string }[];
}) {
    return (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
                <div
                    key={item.label}
                    className="border border-[#E8E1D5] bg-white p-5"
                >
                    <p className="font-serif text-3xl text-[#20235A]">
                        {item.value}
                    </p>

                    <p className="mt-2 text-[10px] font-medium uppercase leading-5 tracking-[0.12em] text-[#927B4D]">
                        {item.label}
                    </p>
                </div>
            ))}
        </div>
    );
}

function ProfileLink({
    label,
    value,
    href,
}: {
    label: string;
    value: string;
    href: string;
}) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-4 border-b border-[#EAE4D9] py-4 last:border-b-0"
        >
            <div className="min-w-0">
                <p className="text-[9px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                    {label}
                </p>

                <p className="mt-2 break-all text-sm leading-6 text-[#393947] transition-colors group-hover:text-[#927B4D]">
                    {value}
                </p>
            </div>

            <ExternalLink
                size={15}
                className="shrink-0 text-[#927B4D] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
        </a>
    );
}

function NumberedList({ items }: { items: string[] }) {
    return (
        <div className="mt-6 space-y-4">
            {items.map((item, index) => (
                <div
                    key={item}
                    className="flex items-start gap-4 border-b border-[#E5DED1] pb-4 last:border-b-0 last:pb-0"
                >
                    <span className="font-serif text-lg text-[#B49A66]">
                        {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="pt-1 text-sm leading-6 text-[#393947]">
                        {item}
                    </p>
                </div>
            ))}
        </div>
    );
}

export default function VinodFacultyPage() {
    return (
        <>
            <SiteHeader />

            {/* =====================================================
                PROFILE HERO
            ====================================================== */}
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

                    <div className="mt-7 grid gap-10 lg:grid-cols-[1fr_280px] lg:items-end">
                        {/* Faculty Introduction */}
                        <div>
                            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/50">
                                Department of Mechatronics Engineering
                            </p>

                            <h1 className="mt-4 max-w-4xl font-serif text-4xl font-normal leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                                Dr. Vinod R.
                            </h1>

                            <p className="mt-3 font-serif text-lg italic text-[#D2B87C] sm:text-xl">
                                Associate Professor
                            </p>

                            <div className="mt-7 flex flex-wrap gap-3">
                                <span className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80">
                                    Ph.D. – Mechanical Engineering
                                </span>

                                <span className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80">
                                    M.Tech. – Production Engineering
                                </span>

                                <span className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80">
                                    B.Tech. – Mechanical Engineering
                                </span>
                            </div>

                            <div className="mt-8 flex flex-wrap items-center gap-5">
                                <div className="flex items-center gap-3">
                                    <span className="h-px w-10 bg-[#D2B87C]" />

                                    <span className="text-[10px] uppercase tracking-[0.18em] text-white/50">
                                        Associate Professor
                                    </span>
                                </div>

                                {/* <div className="flex items-center gap-2 text-[10px] text-white/55">
                                    <CalendarDays
                                        size={14}
                                        className="text-[#D2B87C]"
                                    />
                                    Joined: 01.04.2023
                                </div> */}
                            </div>
                        </div>

                        {/* Academic Profile Summary */}
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
                                            Experience
                                        </p>

                                        <p className="mt-1 text-xs leading-5 text-white/90">
                                            22 Years in Teaching
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
                                            Research Publications
                                        </p>

                                        <p className="mt-1 text-xs leading-5 text-white/90">
                                            4 International Journal Publications
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Award
                                        size={19}
                                        className="shrink-0 text-[#D2B87C]"
                                        strokeWidth={1.5}
                                    />

                                    <div>
                                        <p className="text-[9px] uppercase tracking-[0.13em] text-white/45">
                                            Patent
                                        </p>

                                        <p className="mt-1 text-xs leading-5 text-white/90">
                                            1 Published Patent
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

                {/* =====================================================
                    PROFILE NAVIGATION
                ====================================================== */}
                {/* <div className="border-b border-[#EAE4D9] bg-white">
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
                </div> */}

                {/* =====================================================
                    01 - ABOUT ME
                ====================================================== */}
                <section
                    id="about"
                    className="scroll-mt-24 bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_310px] lg:gap-16">
                        <div>
                            <SectionHeading
                                number="01"
                                eyebrow="Introduction"
                                title="About Dr. Vinod R."
                                description="An overview of his academic journey, research interests, and professional contributions."
                            />

                            <div className="space-y-5 text-sm leading-8 text-[#55535B]">
                                <p>
                                    Dr. Vinod R. is an Associate Professor in
                                    the Department of Mechatronics Engineering.
                                    He holds a Ph.D. in Mechanical Engineering
                                    from Noorul Islam Centre for Higher
                                    Education.
                                </p>

                                <p>
                                    His research focuses on improving automotive supply chain performance using
                                    Lean Six Sigma, artificial neural networks, and data-driven optimization. His scholarly
                                    interests include reverse logistics, sustainable supply chains, machine learning, and
                                    industrial operations.
                                </p>

                                <p>
                                    He has contributed research articles to international journals in
                                    engineering and management.
                                </p>
                            </div>
                        </div>

                        {/* Personal Details */}
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
                                        Personal Details
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
                                label="Department"
                                value="Mechatronics Engineering"
                            />

                            <DetailItem
                                label="Date of Joining"
                                value="01 April 2023"
                            />

                            {/* <DetailItem
                                label="Email Address"
                                value={
                                    <a
                                        href="mailto:vinod4031.mtr@ncerc.ac.in"
                                        className="hover:text-[#927B4D]"
                                    >
                                        vinod4031.mtr@ncerc.ac.in
                                    </a>
                                }
                            /> */}

                            {/* <DetailItem
                                label="Contact Number"
                                value={
                                    <a
                                        href="tel:9447621238"
                                        className="hover:text-[#927B4D]"
                                    >
                                        9447621238
                                    </a>
                                }
                            /> */}

                            <DetailItem
                                label="Teaching Experience"
                                value="22 Years"
                            />
                        </aside>
                    </div>
                </section>

                {/* =====================================================
                    02 - ACADEMIC QUALIFICATIONS
                ====================================================== */}
                <section
                    id="qualifications"
                    className="scroll-mt-24 bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="02"
                            eyebrow="Academic Background"
                            title="Academic Qualifications"
                            description="His academic qualifications and educational background."
                        />

                        <DataTable
                            headers={[
                                "Degree",
                                "Specialization",
                                "Institution / University",
                                "Year of Passing",
                            ]}
                            rows={qualifications.map((item) => [
                                item.degree,
                                item.specialization,
                                item.institution,
                                item.year,
                            ])}
                        />
                    </div>
                </section>

                {/* =====================================================
                    03 - EXPERIENCE
                ====================================================== */}
                <section
                    id="experience"
                    className="scroll-mt-24 bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="03"
                            eyebrow="Professional Journey"
                            title="Teaching & Professional Experience"
                            description="An overview of his experience across teaching, industry, and research."
                        />

                        <div className="mb-6 flex items-center gap-3">
                            <BriefcaseBusiness
                                size={19}
                                className="text-[#927B4D]"
                                strokeWidth={1.5}
                            />

                            <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                Experience Overview
                            </p>
                        </div>

                        <MetricGrid items={experience} />
                    </div>
                </section>

                {/* =====================================================
                    04 - RESEARCH AND SPECIALIZATION
                ====================================================== */}
                <section
                    id="research"
                    className="scroll-mt-24 bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="04"
                            eyebrow="Academic Exploration"
                            title="Research & Areas of Specialization"
                            description="His research interests and areas of specialization across supply chain management, operations, and data-driven optimization."
                        />

                        <div className="grid gap-8 lg:grid-cols-2">
                            {/* Specialization */}
                            <div className="border border-[#E8E1D5] bg-[#FAF7F2] p-6 sm:p-8">
                                <div className="flex items-center gap-3">
                                    <FlaskConical
                                        size={20}
                                        className="text-[#927B4D]"
                                        strokeWidth={1.5}
                                    />

                                    <h3 className="font-serif text-xl text-[#20235A]">
                                        Areas of Specialization
                                    </h3>
                                </div>

                                <NumberedList items={specializations} />
                            </div>

                            {/* Research Interests */}
                            <div className="border border-[#E8E1D5] bg-[#FAF7F2] p-6 sm:p-8">
                                <div className="flex items-center gap-3">
                                    <Lightbulb
                                        size={20}
                                        className="text-[#927B4D]"
                                        strokeWidth={1.5}
                                    />

                                    <h3 className="font-serif text-xl text-[#20235A]">
                                        Research Interests
                                    </h3>
                                </div>

                                <NumberedList items={researchInterests} />
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    05 - COURSES HANDLED
                ====================================================== */}
                <section
                    id="courses"
                    className="scroll-mt-24 bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="05"
                            eyebrow="Teaching Experience"
                            title="Courses / Subjects Handled"
                            description="Subjects handled at undergraduate level."
                        />

                        <div className="mb-5 flex items-center gap-3">
                            <BookOpen
                                size={18}
                                className="text-[#927B4D]"
                                strokeWidth={1.5}
                            />

                            <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                Teaching Portfolio
                            </p>
                        </div>

                        <DataTable
                            headers={["Academic Level", "Courses / Subjects"]}
                            rows={courses.map((item) => [
                                item.category,
                                item.subjects,
                            ])}
                        />

                        <p className="mt-5 text-xs leading-6 text-[#77747A]">
                            Postgraduate subjects: Details not provided.
                        </p>
                    </div>
                </section>

                {/* =====================================================
                    06 - PUBLICATIONS
                ====================================================== */}
                <section
                    id="publications"
                    className="scroll-mt-24 bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="06"
                            eyebrow="Research Contributions"
                            title="Research Publications"
                            description="A summary of his scholarly contributions through international journals and conference proceedings."
                        />

                        <div className="mb-6 flex items-center gap-3">
                            <FileText
                                size={19}
                                className="text-[#927B4D]"
                                strokeWidth={1.5}
                            />

                            <h3 className="font-serif text-xl text-[#20235A]">
                                Publication Statistics
                            </h3>
                        </div>

                        <MetricGrid items={publications} />

                        {/* International Journal Publications */}
                        <div className="mt-12">
                            <h3 className="mb-6 font-serif text-2xl text-[#20235A]">
                                International Journal Publications
                            </h3>

                            <div className="space-y-4">
                                {internationalPublications.map(
                                    (publication, index) => (
                                        <article
                                            key={publication.title}
                                            className="border border-[#E8E1D5] bg-[#FAF7F2] p-6 sm:p-7"
                                        >
                                            <div className="flex items-start gap-5">
                                                <span className="font-serif text-xl text-[#B49A66]">
                                                    {String(index + 1).padStart(
                                                        2,
                                                        "0"
                                                    )}
                                                </span>

                                                <div className="min-w-0 flex-1">
                                                    <p className="text-[9px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                                        International Journal
                                                        Publication
                                                    </p>

                                                    <h4 className="mt-2 font-serif text-lg leading-7 text-[#20235A]">
                                                        {publication.title}
                                                    </h4>

                                                    <p className="mt-3 text-sm leading-6 text-[#55535B]">
                                                        {publication.journal}
                                                    </p>

                                                    <p className="mt-1 text-xs leading-6 text-[#77747A]">
                                                        {publication.details}
                                                    </p>

                                                    {publication.doi && (
                                                        <p className="mt-3 break-all text-xs text-[#77747A]">
                                                            DOI:{" "}
                                                            <a
                                                                href={`https://doi.org/${publication.doi}`}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="text-[#927B4D] underline decoration-[#D2B87C] underline-offset-4 hover:text-[#20235A]"
                                                            >
                                                                {
                                                                    publication.doi
                                                                }
                                                            </a>
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        </article>
                                    )
                                )}
                            </div>
                        </div>

                        {/* National Journal Publication */}
                        <div className="mt-12">
                            <h3 className="mb-6 font-serif text-2xl text-[#20235A]">
                                National Journal Publication
                            </h3>

                            <article className="border border-[#E8E1D5] bg-[#FAF7F2] p-6 sm:p-7">
                                <div className="flex items-start gap-5">
                                    <span className="font-serif text-xl text-[#B49A66]">
                                        01
                                    </span>

                                    <div>
                                        <p className="text-[9px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                            National Journal Publication
                                        </p>

                                        <h4 className="mt-2 font-serif text-lg leading-7 text-[#20235A]">
                                            Water Quality Monitoring System
                                        </h4>

                                        <p className="mt-3 text-sm leading-7 text-[#55535B]">
                                            Published in Volume 14, Issue 1,
                                            March 2026. Publication date:
                                            30-03-2026.
                                        </p>

                                        <div className="mt-3 flex flex-wrap gap-x-8 gap-y-2 text-xs text-[#77747A]">
                                            <span>
                                                Impact Factor: 9.37 by Google
                                                Scholar
                                            </span>
                                            <span>
                                                Paper ID: IJEDR26A1202
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>

                        {/* International Conference Publication */}
                        <div className="mt-12">
                            <h3 className="mb-6 font-serif text-2xl text-[#20235A]">
                                International Conference Publication
                            </h3>

                            <article className="border border-[#E8E1D5] bg-[#FAF7F2] p-6 sm:p-7">
                                <div className="flex items-start gap-5">
                                    <span className="font-serif text-xl text-[#B49A66]">
                                        01
                                    </span>

                                    <div>
                                        <p className="text-[9px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                            International Conference
                                            Publication
                                        </p>

                                        <h4 className="mt-2 font-serif text-lg leading-7 text-[#20235A]">
                                            Economic Optimization of Shell and
                                            Tube Heat Exchanger using Adaptive
                                            Mutation Strategy Jaya Algorithm
                                        </h4>

                                        <p className="mt-3 text-sm leading-7 text-[#55535B]">
                                            Vinod R. (2020), 6th International
                                            Conference on Advanced Computing
                                            and Communication Systems
                                            (ICACCS).
                                        </p>

                                        <p className="mt-2 break-all text-xs text-[#77747A]">
                                            978-1-7281-5197-7/20-2020 IEEE
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </div>

                        <div className="mt-8 border-l-2 border-[#D2B87C] bg-[#FAF7F2] px-6 py-5 sm:px-8">
                            <p className="text-sm leading-7 text-[#55535B]">
                                National conference publication details have
                                not been provided. Books and book chapters are
                                listed as Nil.
                            </p>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    07 - PATENTS
                ====================================================== */}
                <section
                    id="patents"
                    className="scroll-mt-24 bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="07"
                            eyebrow="Innovation & Intellectual Property"
                            title="Patents"
                            description="Patent publication details and intellectual property contributions."
                        />

                        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
                            <div className="flex flex-col justify-center border border-[#E8E1D5] bg-white p-7 sm:p-9">
                                <div className="flex h-12 w-12 items-center justify-center bg-[#F5F0E6] text-[#927B4D]">
                                    <Award size={23} strokeWidth={1.5} />
                                </div>

                                <p className="mt-6 font-serif text-5xl text-[#20235A]">
                                    01
                                </p>

                                <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                    Published Patent
                                </p>
                            </div>

                            <div>
                                <MetricGrid items={patents} />
                            </div>
                        </div>

                        <article className="mt-8 border border-[#E8E1D5] bg-white p-6 sm:p-8">
                            <div className="flex items-start gap-5">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#F5F0E6] text-[#927B4D]">
                                    <ShieldCheck
                                        size={21}
                                        strokeWidth={1.5}
                                    />
                                </div>

                                <div>
                                    <p className="text-[9px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                        Published Patent
                                    </p>

                                    <h3 className="mt-2 font-serif text-xl leading-7 text-[#20235A]">
                                        SmartSonar System for Ponds, Pools and
                                        Sea
                                    </h3>

                                    <div className="mt-5 grid gap-4 sm:grid-cols-2">
                                        <DetailItem
                                            label="Journal Number"
                                            value="22/2026"
                                        />

                                        <DetailItem
                                            label="Application Number"
                                            value="202641062572A"
                                        />
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>

                {/* =====================================================
                    08 - RESEARCH GUIDANCE
                ====================================================== */}
                <section
                    id="guidance"
                    className="scroll-mt-24 bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="08"
                            eyebrow="Research Mentorship"
                            title="Research Guidance"
                            description="Details of doctoral research supervision and student project guidance."
                        />

                        <div className="mb-6 flex items-center gap-3">
                            <Users
                                size={19}
                                className="text-[#927B4D]"
                                strokeWidth={1.5}
                            />

                            <h3 className="font-serif text-xl text-[#20235A]">
                                Research Supervision
                            </h3>
                        </div>

                        <MetricGrid items={researchGuidance} />
                    </div>
                </section>

                {/* =====================================================
                    09 - SPONSORED PROJECTS AND CONSULTANCY
                ====================================================== */}
                {/* <section
                    id="projects"
                    className="scroll-mt-24 bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="09"
                            eyebrow="Research & Development"
                            title="Sponsored Projects and Consultancy"
                            description="Information about sponsored research projects and consultancy activities."
                        />

                        <div className="border border-dashed border-[#CFC3AA] bg-white p-8 sm:p-10">
                            <div className="flex flex-col items-center text-center">
                                <div className="flex h-12 w-12 items-center justify-center bg-[#F5F0E6] text-[#927B4D]">
                                    <Building2
                                        size={22}
                                        strokeWidth={1.5}
                                    />
                                </div>

                                <h3 className="mt-5 font-serif text-xl text-[#20235A]">
                                    Project Details
                                </h3>

                                <p className="mt-3 max-w-lg text-sm leading-7 text-[#69666B]">
                                    Sponsored project and consultancy details,
                                    including project title, funding agency,
                                    project amount, and status, have not been
                                    provided.
                                </p>
                            </div>
                        </div>
                    </div>
                </section> */}

                {/* =====================================================
                    10 - AWARDS AND RECOGNITIONS
                ====================================================== */}
                <section
                    id="awards"
                    className="scroll-mt-24 bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="10"
                            eyebrow="Achievements"
                            title="Awards & Recognitions"
                            description="Recognition for academic and professional contributions."
                        />

                        <div className="border border-[#E8E1D5] bg-[#FAF7F2] p-6 sm:p-8">
                            <div className="flex items-start gap-5">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#F0E8D8] text-[#927B4D]">
                                    <Award
                                        size={21}
                                        strokeWidth={1.5}
                                    />
                                </div>

                                <div>
                                    <p className="text-[9px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                        Academic Year 2024–25
                                    </p>

                                    <h3 className="mt-2 font-serif text-xl text-[#20235A]">
                                        Best Faculty Award
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-[#55535B]">
                                        Best Faculty Award for the academic
                                        year 2024–25, awarded by Environmental
                                        Solutions, Chennai, Tamil Nadu.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    11 - PROFESSIONAL MEMBERSHIPS
                ====================================================== */}
                <section className="bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="11"
                            eyebrow="Professional Associations"
                            title="Professional Memberships"
                            description="Professional memberships and associations."
                        />

                        <div className="grid gap-4 sm:grid-cols-2">
                            {memberships.map((membership, index) => (
                                <div
                                    key={membership}
                                    className="flex items-center gap-5 border border-[#E8E1D5] bg-white p-6"
                                >
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#F5F0E6] text-[#927B4D]">
                                        <BadgeCheck
                                            size={21}
                                            strokeWidth={1.5}
                                        />
                                    </div>

                                    <div>
                                        <p className="text-[9px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                            Membership{" "}
                                            {String(index + 1).padStart(2, "0")}
                                        </p>

                                        <h3 className="mt-1 font-serif text-xl text-[#20235A]">
                                            {membership}
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    12 - FACULTY DEVELOPMENT AND PROFESSIONAL ACTIVITIES
                ====================================================== */}
                <section
                    id="professional"
                    className="scroll-mt-24 bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="12"
                            eyebrow="Continuous Professional Development"
                            title="Faculty Development & Professional Activities"
                            description="Participation in faculty development programmes, workshops, and academic knowledge-sharing activities."
                        />

                        <div className="mb-6 flex items-center gap-3">
                            <Presentation
                                size={19}
                                className="text-[#927B4D]"
                                strokeWidth={1.5}
                            />

                            <h3 className="font-serif text-xl text-[#20235A]">
                                Professional Activities
                            </h3>
                        </div>

                        <div className="grid gap-3 sm:grid-cols-2">
                            <div className="border border-[#E8E1D5] bg-[#FAF7F2] p-5">
                                <p className="font-serif text-2xl text-[#20235A]">
                                    Not specified
                                </p>
                                <p className="mt-2 text-[10px] font-medium uppercase leading-5 tracking-[0.12em] text-[#927B4D]">
                                    FDPs / Workshops Attended
                                </p>
                            </div>

                            <div className="border border-[#E8E1D5] bg-[#FAF7F2] p-5">
                                <p className="font-serif text-2xl text-[#20235A]">
                                    Not specified
                                </p>
                                <p className="mt-2 text-[10px] font-medium uppercase leading-5 tracking-[0.12em] text-[#927B4D]">
                                    Invited Talks / Guest Lectures Delivered
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    13 - ADMINISTRATIVE RESPONSIBILITIES
                ====================================================== */}
                <section className="bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="13"
                            eyebrow="Academic Leadership"
                            title="Administrative & Institutional Responsibilities"
                            description="Institutional responsibilities and academic roles."
                        />

                        <div className="grid gap-3 sm:grid-cols-2">
                            {responsibilities.map((item, index) => (
                                <div
                                    key={item}
                                    className="flex items-start gap-4 border border-[#E8E1D5] bg-white p-5"
                                >
                                    <span className="font-serif text-lg text-[#B49A66]">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <div className="flex items-start gap-3">
                                        <ShieldCheck
                                            size={17}
                                            className="mt-1 shrink-0 text-[#927B4D]"
                                            strokeWidth={1.5}
                                        />

                                        <p className="text-sm leading-7 text-[#393947]">
                                            {item}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    14 - RESEARCHER PROFILES
                ====================================================== */}
                <section
                    id="profiles"
                    className="scroll-mt-24 bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="14"
                            eyebrow="Academic Identity"
                            title="Professional Research Profiles"
                            description="Research identifiers and academic profile links for accessing his scholarly work."
                        />

                        <div className="grid gap-8 lg:grid-cols-2">
                            {/* Researcher Identification */}
                            <div className="border border-[#E8E1D5] bg-[#FAF7F2] p-6 sm:p-8">
                                <div className="flex items-center gap-3">
                                    <IdCard
                                        size={21}
                                        className="text-[#927B4D]"
                                        strokeWidth={1.5}
                                    />

                                    <h3 className="font-serif text-xl text-[#20235A]">
                                        Researcher Identification
                                    </h3>
                                </div>

                                <div className="mt-5">
                                    <DetailItem
                                        label="ORCID ID"
                                        value="0000-0001-8896-7408"
                                    />

                                    <DetailItem
                                        label="Scopus Author ID"
                                        value="57224008735"
                                    />
                                </div>
                            </div>

                            {/* Research Profile Links */}
                            <div className="border border-[#E8E1D5] bg-white p-6 sm:p-8">
                                <div className="flex items-center gap-3">
                                    <Microscope
                                        size={21}
                                        className="text-[#927B4D]"
                                        strokeWidth={1.5}
                                    />

                                    <h3 className="font-serif text-xl text-[#20235A]">
                                        Research Platforms
                                    </h3>
                                </div>

                                <div className="mt-5">
                                    <ProfileLink
                                        label="Google Scholar"
                                        value="View Google Scholar Profile"
                                        href="https://scholar.google.com/citations?user=d6dQZF0AAAAJ&hl=en"
                                    />

                                    <ProfileLink
                                        label="ORCID"
                                        value="View ORCID Profile"
                                        href="https://orcid.org/0000-0001-8896-7408"
                                    />

                                    <ProfileLink
                                        label="Scopus"
                                        value="View Scopus Author Profile"
                                        href="https://www.scopus.com/authid/detail.uri?authorId=57224008735"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Contact Details */}
                        <div className="mt-8 border border-[#E8E1D5] bg-[#FAF7F2] p-6 sm:p-8">
                            <div className="flex items-center gap-3">
                                <Mail
                                    size={20}
                                    className="text-[#927B4D]"
                                    strokeWidth={1.5}
                                />

                                <h3 className="font-serif text-xl text-[#20235A]">
                                    Contact Information
                                </h3>
                            </div>

                            <div className="mt-5 grid gap-4 sm:grid-cols-2">
                                <a
                                    href="mailto:vinod4031.mtr@ncerc.ac.in"
                                    className="flex items-center gap-3 border border-[#E8E1D5] bg-white p-4 transition-colors hover:border-[#D2B87C]"
                                >
                                    <Mail
                                        size={17}
                                        className="shrink-0 text-[#927B4D]"
                                    />

                                    <div className="min-w-0">
                                        <p className="text-[9px] uppercase tracking-[0.14em] text-[#927B4D]">
                                            Faculty Email
                                        </p>

                                        <p className="mt-1 break-all text-sm text-[#393947]">
                                            vinod4031.mtr@ncerc.ac.in
                                        </p>
                                    </div>
                                </a>

                                <a
                                    href="tel:9447621238"
                                    className="flex items-center gap-3 border border-[#E8E1D5] bg-white p-4 transition-colors hover:border-[#D2B87C]"
                                >
                                    <Phone
                                        size={17}
                                        className="shrink-0 text-[#927B4D]"
                                    />

                                    <div className="min-w-0">
                                        <p className="text-[9px] uppercase tracking-[0.14em] text-[#927B4D]">
                                            Contact Number
                                        </p>

                                        <p className="mt-1 text-sm text-[#393947]">
                                            9447621238
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Closing Note */}
                        <div className="mt-10 border-l-2 border-[#D2B87C] bg-[#FAF7F2] px-6 py-6 sm:px-8">
                            <p className="font-serif text-xl italic leading-relaxed text-[#20235A] sm:text-2xl">
                                Advancing industrial and academic excellence
                                through supply chain innovation, analytical
                                research, and data-driven optimization.
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            <FooterSection />
        </>
    );
}
