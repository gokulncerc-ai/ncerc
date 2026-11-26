
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
    Building2,
    Bot,
    Cpu,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../../../DepartmentsNavigation/DepartmentsNavigation";

const qualifications = [
    {
        degree: "M.E. / M.Tech.",
        specialization: "Robotics",
        institution: "APJ Abdul Kalam Technological University (KTU)",
        year: "2023",
    },
    {
        degree: "B.E. / B.Tech.",
        specialization: "Electrical and Electronics Engineering",
        institution: "University of Calicut",
        year: "2009",
    },
];

const experience = [
    { label: "Teaching Experience", value: "4 Years, 2 Months, 2 Days" },
    { label: "Industry Experience", value: "0" },
    { label: "Research Experience", value: "0" },
];

const specializations = [
    "Robotics",
];

const researchInterests = [
    "Automation",
    "Control Systems",
];

const undergraduateCourses = [
    "Power Electronics",
    "Basic Electrical Engineering",
    "Electrical & Electronics Workshop",
    "Power Electronics and Drives",
    "Energy Management",
    "Industrial Safety Engineering",
    "Control Systems",
    "Introduction to Electrical & Electronics",
    "Professional Ethics",
    "Sustainable Engineering",
    "PLC and Data Acquisition Systems",
];

const publications = [
    { label: "International Journal Publications", value: "Not specified" },
    { label: "National Journal Publications", value: "Not specified" },
    { label: "International Conference Publications", value: "Not specified" },
    { label: "National Conference Publications", value: "Not specified" },
    { label: "Books / Book Chapters", value: "Not specified" },
];

const patents = [
    { label: "Patents Granted", value: "Not specified" },
    { label: "Patents Published", value: "01" },
];

const researchGuidance = [
    { label: "Ph.D. Scholars Guided", value: "Not specified" },
    { label: "Ph.D. Scholars Currently Guiding", value: "Not specified" },
    { label: "Postgraduate Projects Guided", value: "Not specified" },
    { label: "Undergraduate Projects Guided", value: "Not specified" },
];

const memberships = [
    "ISTE Life Membership",
];

const responsibilities = [
    "Faculty In-charge, Robotics Laboratory",
];

const profileSections = [
    { id: "about", label: "About Me" },
    { id: "qualifications", label: "Qualifications" },
    { id: "experience", label: "Experience" },
    { id: "research", label: "Research" },
    { id: "courses", label: "Courses" },
    { id: "publications", label: "Publications" },
    { id: "patents", label: "Patents" },
    { id: "guidance", label: "Research Guidance" },
    { id: "awards", label: "Awards" },
    { id: "professional", label: "Professional Activities" },
    { id: "responsibilities", label: "Responsibilities" },
    { id: "profiles", label: "Researcher Profiles" },
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
                    <p className="font-serif text-2xl text-[#20235A] sm:text-3xl">
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

export default function PriyaKpFacultyPage() {
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
                                Priya K. P.
                            </h1>

                            <p className="mt-3 font-serif text-lg italic text-[#D2B87C] sm:text-xl">
                                Assistant Professor
                            </p>

                            <div className="mt-7 flex flex-wrap gap-3">
                                <span className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80">
                                    M.E. – Robotics
                                </span>

                                <span className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80">
                                    B.E. – Electrical & Electronics Engineering
                                </span>
                            </div>

                            <div className="mt-8 flex flex-wrap items-center gap-5">
                                <div className="flex items-center gap-3">
                                    <span className="h-px w-10 bg-[#D2B87C]" />

                                    <span className="text-[10px] uppercase tracking-[0.18em] text-white/50">
                                        Assistant Professor
                                    </span>
                                </div>

                                <div className="flex items-center gap-2 text-[10px] text-white/55">
                                    <CalendarDays
                                        size={14}
                                        className="text-[#D2B87C]"
                                    />
                                    Joined: 15.06.2026
                                </div>
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
                                            Teaching Experience
                                        </p>

                                        <p className="mt-1 text-xs leading-5 text-white/90">
                                            4 Years, 2 Months, 2 Days
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Bot
                                        size={19}
                                        className="shrink-0 text-[#D2B87C]"
                                        strokeWidth={1.5}
                                    />

                                    <div>
                                        <p className="text-[9px] uppercase tracking-[0.13em] text-white/45">
                                            Academic Focus
                                        </p>

                                        <p className="mt-1 text-xs leading-5 text-white/90">
                                            Robotics & Automation
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
                                title="About Priya K. P."
                                description="An overview of her academic background, professional interests, and contributions to teaching and research."
                            />

                            <div className="space-y-5 text-sm leading-8 text-[#55535B]">
                                <p>
                                    Priya K. P serves as an Assistant Professor in the Department of Mechatronics Engineering
                                    at Nehru College of Engineering and Research Centre (NCERC), Pampady, Thrissur. She is
                                    also the Faculty In-charge of the Robotic Laboratory.
                                </p>

                                <p>
                                    Her academic and research interests
                                    include Robotics, Mechatronics, Industrial Automation, Control Systems, Sensors, and
                                    Instrumentation.
                                </p>

                                <p>
                                    She is passionate about innovative teaching, practical learning, and
                                    advancing research in robotics and automation.
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
                                value="Assistant Professor"
                            />

                            <DetailItem
                                label="Department"
                                value="Mechatronics Engineering"
                            />

                            <DetailItem
                                label="Date of Joining"
                                value="15 June 2026"
                            />

                            <DetailItem
                                label="Email Address"
                                value={
                                    <a
                                        href="mailto:priyakp.4646@ncerc.ac.in"
                                        className="hover:text-[#927B4D]"
                                    >
                                        priyakp.4646@ncerc.ac.in
                                    </a>
                                }
                            />

                            {/* <DetailItem
                                label="Teaching Experience"
                                value="4 Years, 2 Months, 2 Days"
                            /> */}
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
                            description="Her academic qualifications and educational background."
                        />

                        <DataTable
                            headers={[
                                "Degree",
                                "Specialization",
                                "Institution / University",
                                "Year of Passing",
                            ]}
                            rows={[
                                [
                                    "M.E. / M.Tech.",
                                    "Robotics",
                                    "APJ Abdul Kalam Technological University (KTU)",
                                    "2023",
                                ],
                                [
                                    "B.E. / B.Tech.",
                                    "Electrical and Electronics Engineering",
                                    "University of Calicut",
                                    "2009",
                                ],
                            ]}
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
                            description="An overview of her experience across teaching, industry, and research."
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
                            description="Her areas of specialization and research interests in robotics, automation, and control systems."
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

                        <div className="mt-8 border border-[#E8E1D5] bg-[#FAF7F2] p-6 sm:p-8">
                            <div className="flex items-center gap-3">
                                <Cpu
                                    size={20}
                                    className="text-[#927B4D]"
                                    strokeWidth={1.5}
                                />

                                <h3 className="font-serif text-xl text-[#20235A]">
                                    Academic & Professional Interests
                                </h3>
                            </div>

                            <p className="mt-4 text-sm leading-8 text-[#55535B]">
                                Robotics, Mechatronics, Industrial Automation,
                                Control Systems, Sensors, and Instrumentation.
                            </p>
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
                            description="Subjects handled at the undergraduate level."
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

                        <div className="border border-[#E6DFD3] bg-white p-6 sm:p-8">
                            <div className="flex items-center gap-3 border-b border-[#EAE4D9] pb-5">
                                <GraduationCap
                                    size={21}
                                    className="text-[#927B4D]"
                                    strokeWidth={1.5}
                                />

                                <h3 className="font-serif text-xl text-[#20235A]">
                                    Undergraduate Courses
                                </h3>
                            </div>

                            <NumberedList items={undergraduateCourses} />
                        </div>

                        <p className="mt-5 text-xs leading-6 text-[#77747A]">
                            Postgraduate subjects: Details not provided.
                        </p>
                    </div>
                </section>

                {/* =====================================================
                    06 - PUBLICATIONS
                ====================================================== */}
                {/* <section
                    id="publications"
                    className="scroll-mt-24 bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="06"
                            eyebrow="Research Contributions"
                            title="Research Publications"
                            description="Publication details across journals, conferences, and academic books."
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

                        <div className="mt-8 border-l-2 border-[#D2B87C] bg-[#FAF7F2] px-6 py-5 sm:px-8">
                            <p className="text-sm leading-7 text-[#55535B]">
                                Individual publication titles and publication
                                details have not been provided.
                            </p>
                        </div>
                    </div>
                </section> */}

                {/* =====================================================
                    07 - PATENTS
                ====================================================== */}
                {/* <section
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

                        <div className="mt-8 border border-dashed border-[#CFC3AA] bg-white p-8 sm:p-10">
                            <div className="flex flex-col items-center text-center">
                                <div className="flex h-12 w-12 items-center justify-center bg-[#F5F0E6] text-[#927B4D]">
                                    <ShieldCheck
                                        size={22}
                                        strokeWidth={1.5}
                                    />
                                </div>

                                <h3 className="mt-5 font-serif text-xl text-[#20235A]">
                                    Patent Details
                                </h3>

                                <p className="mt-3 max-w-lg text-sm leading-7 text-[#69666B]">
                                    One patent has been published. The patent
                                    title, application number, and publication
                                    details have not been provided.
                                </p>
                            </div>
                        </div>
                    </div>
                </section> */}

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
                    09 - AWARDS AND RECOGNITIONS
                ====================================================== */}
                {/* <section
                    id="awards"
                    className="scroll-mt-24 bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="09"
                            eyebrow="Achievements"
                            title="Awards & Recognitions"
                            description="Academic and professional recognitions."
                        />

                        <div className="border border-dashed border-[#CFC3AA] bg-white p-8 sm:p-10">
                            <div className="flex flex-col items-center text-center">
                                <div className="flex h-12 w-12 items-center justify-center bg-[#F5F0E6] text-[#927B4D]">
                                    <Award
                                        size={22}
                                        strokeWidth={1.5}
                                    />
                                </div>

                                <h3 className="mt-5 font-serif text-xl text-[#20235A]">
                                    Awards & Recognitions
                                </h3>

                                <p className="mt-3 max-w-lg text-sm leading-7 text-[#69666B]">
                                    Award and recognition details have not
                                    been provided.
                                </p>
                            </div>
                        </div>
                    </div>
                </section> */}

                {/* =====================================================
                    10 - PROFESSIONAL MEMBERSHIPS
                ====================================================== */}
                <section className="bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="10"
                            eyebrow="Professional Associations"
                            title="Professional Memberships"
                            description="Professional memberships and associations."
                        />

                        <div className="grid gap-4 sm:grid-cols-2">
                            {memberships.map((membership, index) => (
                                <div
                                    key={membership}
                                    className="flex items-center gap-5 border border-[#E8E1D5] bg-[#FAF7F2] p-6"
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
                    11 - FACULTY DEVELOPMENT AND PROFESSIONAL ACTIVITIES
                ====================================================== */}
                <section
                    id="professional"
                    className="scroll-mt-24 bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="11"
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
                            <div className="border border-[#E8E1D5] bg-white p-5">
                                <p className="font-serif text-3xl text-[#20235A]">
                                    03
                                </p>

                                <p className="mt-2 text-[10px] font-medium uppercase leading-5 tracking-[0.12em] text-[#927B4D]">
                                    FDPs / Workshops Attended
                                </p>
                            </div>

                            <div className="border border-[#E8E1D5] bg-white p-5">
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
                    12 - ADMINISTRATIVE RESPONSIBILITIES
                ====================================================== */}
                <section
                    id="responsibilities"
                    className="bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="12"
                            eyebrow="Academic Leadership"
                            title="Administrative & Institutional Responsibilities"
                            description="Academic and institutional responsibilities."
                        />

                        <div className="grid gap-3 sm:grid-cols-2">
                            {responsibilities.map((item, index) => (
                                <div
                                    key={item}
                                    className="flex items-start gap-4 border border-[#E8E1D5] bg-[#FAF7F2] p-5"
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
                    13 - RESEARCHER PROFILES
                ====================================================== */}
                {/* <section
                    id="profiles"
                    className="scroll-mt-24 bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="13"
                            eyebrow="Academic Identity"
                            title="Professional Research Profiles"
                            description="Research identifiers and academic profile links."
                        />

                        <div className="border border-dashed border-[#CFC3AA] bg-white p-8 sm:p-10">
                            <div className="flex flex-col items-center text-center">
                                <div className="flex h-12 w-12 items-center justify-center bg-[#F5F0E6] text-[#927B4D]">
                                    <IdCard
                                        size={22}
                                        strokeWidth={1.5}
                                    />
                                </div>

                                <h3 className="mt-5 font-serif text-xl text-[#20235A]">
                                    Research Profile Information
                                </h3>

                                <p className="mt-3 max-w-lg text-sm leading-7 text-[#69666B]">
                                    Google Scholar, ORCID, Scopus, ResearchGate,
                                    and LinkedIn profile details have not been
                                    provided.
                                </p>
                            </div>
                        </div>

                        
                        <div className="mt-8 border border-[#E8E1D5] bg-white p-6 sm:p-8">
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

                            <div className="mt-5">
                                <a
                                    href="mailto:priyakp.4646@ncerc.ac.in"
                                    className="flex items-center gap-3 border border-[#E8E1D5] bg-[#FAF7F2] p-4 transition-colors hover:border-[#D2B87C]"
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
                                            priyakp.4646@ncerc.ac.in
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        
                        <div className="mt-10 border-l-2 border-[#D2B87C] bg-white px-6 py-6 sm:px-8">
                            <p className="font-serif text-xl italic leading-relaxed text-[#20235A] sm:text-2xl">
                                Inspiring practical learning and innovation
                                through robotics, mechatronics, and automation.
                            </p>
                        </div>
                    </div>
                </section> */}
            </main>

            <FooterSection />
        </>
    );
}
