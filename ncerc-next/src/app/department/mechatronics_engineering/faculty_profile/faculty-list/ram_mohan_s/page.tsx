
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
    CalendarDays,
    Mail,
    Phone,
    ShieldCheck,
    ClipboardList,
    Wrench,
    CheckCircle2,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../../../DepartmentsNavigation/DepartmentsNavigation";

/* -------------------------------------------------------
   FACULTY DATA
------------------------------------------------------- */

const qualifications = [
    {
        degree: "Ph.D.",
        specialization: "Control Valve Cavitation",
        institution: "IIT Madras",
        year: "2011",
    },
    {
        degree: "M.Tech.",
        specialization: "Systems & Control Engineering",
        institution: "IIT Bombay",
        year: "1988",
    },
    {
        degree: "B.Tech.",
        specialization: "Mechanical Engineering",
        institution: "Calicut University",
        year: "1986",
    },
];

const experience = [
    {
        value: "2 Years",
        label: "Teaching Experience",
    },
    {
        value: "—",
        label: "Industry Experience",
    },
    {
        value: "33 Years",
        label: "Research Experience",
    },
];

const researchInterests = [
    "Residual Life Assessment",
    "Cavitation in Valves and Pumps",
    "High-Pressure and High-Temperature Performance of Process Control Elements",
];

const specializations = [
    "Process Instrumentation",
    "Valves and Flow Measuring Instruments",
    "Active Life Assessment of Components",
    "Laboratory Automation and Test Set-up Design",
];

const courses = [
    ["01", "Undergraduate", "Sensors and Actuators"],
    ["02", "Undergraduate", "Industrial Hydraulics and Pneumatics"],
    ["03", "Undergraduate", "Mechanics of Solids"],
];

const publications = [
    {
        value: "02",
        label: "International Journal Publications",
    },
    {
        value: "06",
        label: "International Conference Publications",
    },
    {
        value: "10",
        label: "National Conference Publications",
    },
];

const researchGuidance = [
    {
        value: "Nil",
        label: "Ph.D. Scholars Guided",
    },
    {
        value: "Nil",
        label: "Ph.D. Scholars Currently Guiding",
    },
    {
        value: "04",
        label: "PG Projects Guided",
    },
    {
        value: "05",
        label: "UG Projects Guided",
    },
];

const memberships = [
    "Fellow – Institution of Engineers (India)",
    "Member – Instrument Society of India",
];

const responsibilities = [
    "Controller of Examinations (Autonomous)",
];

const profileSections = [
    { id: "about", label: "About Me" },
    { id: "qualifications", label: "Qualifications" },
    { id: "experience", label: "Experience" },
    { id: "research", label: "Research" },
    { id: "courses", label: "Courses" },
    { id: "publications", label: "Publications" },
    { id: "patent", label: "Patent" },
    { id: "guidance", label: "Guidance" },
    { id: "activities", label: "Activities" },
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
}: {
    headers: string[];
    rows: string[][];
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
    items: {
        value: string;
        label: string;
    }[];
}) {
    return (
        <div className="grid grid-cols-3 gap-3 sm:gap-5">
            {items.map((item, index) => (
                <div
                    key={index}
                    className="flex min-h-[120px] flex-col justify-center border border-[#E6DFD3] bg-white p-4 sm:min-h-[145px] sm:p-6"
                >
                    <p className="font-serif text-xl font-normal text-[#20235A] sm:text-3xl">
                        {item.value}
                    </p>

                    <p className="mt-2 text-[9px] leading-relaxed text-[#77747A] sm:text-xs">
                        {item.label}
                    </p>
                </div>
            ))}
        </div>
    );
}

function NumberedList({
    items,
}: {
    items: string[];
}) {
    return (
        <div className="space-y-3">
            {items.map((item, index) => (
                <div
                    key={item}
                    className="flex items-start gap-4 border-b border-[#EAE4D9] pb-3 last:border-b-0"
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

/* -------------------------------------------------------
   MAIN FACULTY PROFILE
------------------------------------------------------- */

export default function RamMohanFacultyPage() {
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

                        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#D2B87C] sm:text-xs">
                            Faculty Profile
                        </p>
                    </div>

                    <div className="mt-7 grid gap-10 lg:grid-cols-[1fr_280px] lg:items-end">
                        <div>
                            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/50">
                                Department of Mechatronics Engineering
                            </p>

                            <h1 className="mt-4 font-serif text-4xl font-normal leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                                Dr. Ram Mohan S
                            </h1>

                            <p className="mt-3 font-serif text-lg italic text-[#D2B87C] sm:text-xl">
                                Professor
                            </p>

                            <div className="mt-7 flex flex-wrap gap-3">
                                <span className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80">
                                    Ph.D. – Control Valve Cavitation
                                </span>

                                <span className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80">
                                    M.Tech. – Systems & Control Engineering
                                </span>

                                <span className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80">
                                    B.Tech. – Mechanical Engineering
                                </span>
                            </div>

                            <div className="mt-7 flex flex-wrap gap-5 text-xs text-white/65">
                                {/* <div className="flex items-center gap-2">
                                    <CalendarDays
                                        size={15}
                                        className="text-[#D2B87C]"
                                        strokeWidth={1.5}
                                    />
                                    <span>Joined 03 July 2024</span>
                                </div> */}

                                <a
                                    href="mailto:rammoahn4238.mtr@ncerc.ac.in"
                                    className="flex items-center gap-2 transition-colors hover:text-[#D2B87C]"
                                >
                                    <Mail
                                        size={15}
                                        className="text-[#D2B87C]"
                                        strokeWidth={1.5}
                                    />
                                    <span>rammoahn4238.mtr@ncerc.ac.in</span>
                                </a>
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
                                            Qualification
                                        </p>

                                        <p className="mt-1 text-xs leading-5 text-white/90">
                                            Ph.D., M.Tech., B.Tech.
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
                                            Process Instrumentation & Flow Measurement
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
                                            Research Experience
                                        </p>

                                        <p className="mt-1 text-xs text-white/90">
                                            33 Years
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
                                title="About Dr. Ram Mohan S"
                                description="An accomplished academician and engineering professional with extensive experience in industrial research, process instrumentation, and engineering education."
                            />

                            <div className="space-y-5 text-sm leading-8 text-[#55535B]">
                                <p>
                                    Doctorate in Control Valves from Indian Institute of Technology (2011), Madras, Post-Graduation
                                    (M.Tech) from Indian Institute of Technology, Bombay (1988) and Graduation in Mechanical
                                    Engineering from N S S College of Engineering, Palakkad (1986)

                                </p>

                                <p>
                                    Started Career as Engineer in Fluid Control Research institute, (FCRI) Palakkad in 1988 and has been
                                    functioning in different capacities in various departments of FCRI since then. Undergone three
                                    months UNIDO fellowship training in Flow measurement at National Research Laboratory for
                                    Metrology, Tokyo, Japan. Successfully completed Six sigma Back Belt certification Program from
                                    Indian Statistical Institute, Coimbatore.
                                </p>

                                <p>
                                    Presently working as professor in Mechatronics Engineering Department of Nehru College of
                                    Engineering and Research Centre, Pampadi, Trissur. Apart from the academic activities, functions as
                                    Controller of Examinations of the Autonomous batches.
                                </p>

                                <p>
                                    Superannuated as Director in charge of Fluid Control Research Institute. Leading a team of engineers for design, assembly and performing specialized testing of various types of flow elements used in different fields of Industry as per specific standards / protocols
                                </p>

                                <p>
                                    Successfully completed various projects in the field of experimental hydraulic simulation of PFBR
                                    reactor components of DAE, special valves for NPCIL and BARC, special flow control devices for
                                    different sectors of industry. . Successfully completed several research projects funded by BARC/
                                    IGCAR/ Indian Navy /DRDO / ISRO in the field of performance evaluation and life assessment of
                                    critical components in Nuclear field and Process Control Engineering area.

                                </p>

                                <p>
                                    Research publications were presented in conferences related flow measurement in India and
                                    abroad.
                                    Technical expert for NABL in Fluid Flow and Metrology field, member of two sectional committees of
                                    Bureau of Indian Standards and Advisory Board member of three Technical Institutions in Kerala and
                                    Tamilnadu.
                                </p>
                            </div>
                        </div>

                        {/* PROFESSIONAL DETAILS */}

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
                                label="Department"
                                value="Mechatronics Engineering"
                            />

                            <DetailItem
                                label="Date of Joining"
                                value="03 July 2024"
                            />

                            <DetailItem
                                label="Email Address"
                                value="rammoahn4238.mtr@ncerc.ac.in"
                            />

                            <DetailItem
                                label="Contact Number"
                                value="9446346850"
                            />

                            {/* <div className="mt-5 space-y-3">
                                <a
                                    href="mailto:rammoahn4238.mtr@ncerc.ac.in"
                                    className="flex items-center justify-center gap-2 bg-[#20235A] px-5 py-3 text-[10px] uppercase tracking-[0.13em] text-white transition-colors hover:bg-[#303675]"
                                >
                                    <Mail size={14} />
                                    Send Email
                                </a>

                                <a
                                    href="tel:9446346850"
                                    className="flex items-center justify-center gap-2 border border-[#D2B87C] px-5 py-3 text-[10px] uppercase tracking-[0.13em] text-[#20235A] transition-colors hover:bg-[#F5F0E6]"
                                >
                                    <Phone size={14} />
                                    Contact Faculty
                                </a>
                            </div> */}
                        </aside>
                    </div>
                </section>

                {/* ACADEMIC QUALIFICATIONS */}

                <section
                    id="qualifications"
                    className="scroll-mt-24 bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="02"
                            eyebrow="Academic Exploration"
                            title="Academic Qualifications"
                            description="Academic qualifications in mechanical engineering, systems and control engineering, and control valve research."
                        />

                        <div className="mb-5 flex items-center gap-3">
                            <GraduationCap
                                size={18}
                                className="text-[#927B4D]"
                                strokeWidth={1.5}
                            />

                            <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                Educational Background
                            </p>
                        </div>

                        <DataTable
                            headers={[
                                "Degree",
                                "Specialization",
                                "University / Institute",
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

                {/* EXPERIENCE SECTION */}

                <section
                    id="experience"
                    className="scroll-mt-24 bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="03"
                            eyebrow="Professional Journey"
                            title="Teaching & Professional Experience"
                            description="An overview of his academic, industrial, and research experience."
                        />

                        <div className="mb-5 flex items-center gap-3">
                            <BriefcaseBusiness
                                size={18}
                                className="text-[#927B4D]"
                                strokeWidth={1.5}
                            />

                            <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                Experience Overview
                            </p>
                        </div>

                        <MetricGrid items={experience} />

                        <div className="mt-10 grid gap-5 lg:grid-cols-2">
                            <div className="border border-[#E6DFD3] bg-white p-6 sm:p-8">
                                <p className="text-[9px] font-medium uppercase tracking-[0.17em] text-[#927B4D]">
                                    Industrial Career
                                </p>

                                <h3 className="mt-3 font-serif text-xl text-[#20235A]">
                                    Fluid Control Research Institute
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-[#55535B]">
                                    Began his career as an Engineer at FCRI, Palakkad, in 1988, and served in different capacities before superannuating as Director-in-Charge.
                                </p>
                            </div>

                            <div className="border border-[#E6DFD3] bg-white p-6 sm:p-8">
                                <p className="text-[9px] font-medium uppercase tracking-[0.17em] text-[#927B4D]">
                                    International Training
                                </p>

                                <h3 className="mt-3 font-serif text-xl text-[#20235A]">
                                    UNIDO Fellowship – Japan
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-[#55535B]">
                                    Completed a three-month fellowship training programme in Flow Measurement at the National Research Laboratory for Metrology, Tokyo, Japan.
                                </p>
                            </div>
                        </div>

                        <div className="mt-5 border border-[#E6DFD3] bg-white p-6 sm:p-8">
                            <div className="flex items-center gap-3">
                                <CheckCircle2
                                    size={19}
                                    className="text-[#927B4D]"
                                    strokeWidth={1.5}
                                />

                                <h3 className="font-serif text-xl text-[#20235A]">
                                    Professional Certification
                                </h3>
                            </div>

                            <p className="mt-4 text-sm leading-7 text-[#55535B]">
                                Successfully completed the Six Sigma Black Belt Certification Programme from the Indian Statistical Institute, Coimbatore.
                            </p>
                        </div>
                    </div>
                </section>

                {/* RESEARCH SECTION */}

                <section
                    id="research"
                    className="scroll-mt-24 bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="04"
                            eyebrow="Academic Exploration"
                            title="Research & Areas of Specialization"
                            description="Technical expertise and research interests across process instrumentation, flow measurement, and engineering systems."
                        />

                        <div className="grid gap-8 lg:grid-cols-2">
                            <div>
                                <div className="mb-6 flex items-center gap-3">
                                    <Wrench
                                        size={19}
                                        className="text-[#927B4D]"
                                        strokeWidth={1.5}
                                    />

                                    <h3 className="font-serif text-xl text-[#20235A]">
                                        Areas of Specialization
                                    </h3>
                                </div>

                                <div className="space-y-3">
                                    {specializations.map((item, index) => (
                                        <div
                                            key={item}
                                            className="flex items-start gap-4 border border-[#E8E1D5] bg-[#FAF7F2] p-5"
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
                            </div>

                            <div>
                                <div className="mb-6 flex items-center gap-3">
                                    <Lightbulb
                                        size={19}
                                        className="text-[#927B4D]"
                                        strokeWidth={1.5}
                                    />

                                    <h3 className="font-serif text-xl text-[#20235A]">
                                        Research Interests
                                    </h3>
                                </div>

                                <div className="space-y-3">
                                    {researchInterests.map((item, index) => (
                                        <div
                                            key={item}
                                            className="flex items-start gap-4 border border-[#E8E1D5] bg-[#FAF7F2] p-5"
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
                            </div>
                        </div>

                        <div className="mt-12 border-l-2 border-[#D2B87C] bg-[#FAF7F2] px-6 py-6 sm:px-8">
                            <div className="flex items-center gap-3">
                                <FlaskConical
                                    size={19}
                                    className="text-[#927B4D]"
                                    strokeWidth={1.5}
                                />

                                <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                    Research Focus
                                </p>
                            </div>

                            <p className="mt-4 text-sm leading-8 text-[#55535B]">
                                His research and professional expertise encompass residual life assessment, cavitation in valves and pumps, and the high-pressure and high-temperature performance of process-control elements. His work also involves specialized testing, flow measurement, and performance evaluation of critical engineering components.
                            </p>
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
                            number="05"
                            eyebrow="Teaching Experience"
                            title="Courses Handled"
                            description="Undergraduate subjects handled in the areas of mechatronics, instrumentation, and mechanical engineering."
                        />

                        <div className="mb-5 flex items-center gap-3">
                            <BookOpen
                                size={18}
                                className="text-[#927B4D]"
                                strokeWidth={1.5}
                            />

                            <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                Undergraduate Courses
                            </p>
                        </div>

                        <DataTable
                            headers={[
                                "Sl. No.",
                                "Course Level",
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
                            number="06"
                            eyebrow="Research Contributions"
                            title="Research Publications"
                            description="Research contributions through international and national journals and conference proceedings."
                        />

                        <div className="mb-5 flex items-center gap-3">
                            <FileText
                                size={19}
                                className="text-[#927B4D]"
                                strokeWidth={1.5}
                            />

                            <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                Publication Overview
                            </p>
                        </div>

                        <MetricGrid items={publications} />

                        <div className="mt-8 border border-[#E6DFD3] bg-[#FAF7F2] p-6 sm:p-8">
                            <p className="text-[9px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                Research Communication
                            </p>

                            <p className="mt-3 text-sm leading-7 text-[#55535B]">
                                Research publications have been presented at conferences related to flow measurement in India and abroad, contributing to technical discussions and knowledge sharing in the field.
                            </p>
                        </div>
                    </div>
                </section>

             

                {/* RESEARCH GUIDANCE */}

                <section
                    id="guidance"
                    className="scroll-mt-24 bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="08"
                            eyebrow="Academic Mentorship"
                            title="Research Guidance"
                            description="Details of doctoral supervision and undergraduate and postgraduate project guidance."
                        />

                        <div className="mb-5 flex items-center gap-3">
                            <GraduationCap
                                size={19}
                                className="text-[#927B4D]"
                                strokeWidth={1.5}
                            />

                            <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                Research Supervision
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-5">
                            {researchGuidance.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex min-h-[125px] flex-col justify-center border border-[#E6DFD3] bg-[#FAF7F2] p-4 sm:min-h-[145px] sm:p-6"
                                >
                                    <p className="font-serif text-xl font-normal text-[#20235A] sm:text-3xl">
                                        {item.value}
                                    </p>

                                    <p className="mt-2 text-[9px] leading-relaxed text-[#77747A] sm:text-xs">
                                        {item.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* PROFESSIONAL ACTIVITIES */}

                <section
                    id="activities"
                    className="scroll-mt-24 bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="09"
                            eyebrow="Professional Engagement"
                            title="Memberships & Institutional Responsibilities"
                            description="Professional affiliations, technical contributions, and administrative responsibilities."
                        />

                        <div className="grid gap-8 lg:grid-cols-2">
                            <div>
                                <div className="mb-6 flex items-center gap-3">
                                    <Award
                                        size={19}
                                        className="text-[#927B4D]"
                                        strokeWidth={1.5}
                                    />

                                    <h3 className="font-serif text-xl text-[#20235A]">
                                        Professional Memberships
                                    </h3>
                                </div>

                                <div className="border border-[#E6DFD3] bg-white p-6">
                                    {memberships.map((item, index) => (
                                        <div
                                            key={item}
                                            className="flex items-start gap-4 border-b border-[#EAE4D9] py-4 first:pt-0 last:border-b-0 last:pb-0"
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
                            </div>

                            <div>
                                <div className="mb-6 flex items-center gap-3">
                                    <ClipboardList
                                        size={19}
                                        className="text-[#927B4D]"
                                        strokeWidth={1.5}
                                    />

                                    <h3 className="font-serif text-xl text-[#20235A]">
                                        Administrative Responsibilities
                                    </h3>
                                </div>

                                <div className="border border-[#E6DFD3] bg-white p-6">
                                    <NumberedList items={responsibilities} />
                                </div>
                            </div>
                        </div>

                        {/* TECHNICAL CONTRIBUTIONS */}

                        <div className="mt-12">
                            <div className="mb-6 flex items-center gap-3">
                                <BriefcaseBusiness
                                    size={19}
                                    className="text-[#927B4D]"
                                    strokeWidth={1.5}
                                />

                                <h3 className="font-serif text-xl text-[#20235A]">
                                    Technical & Professional Contributions
                                </h3>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                <div className="border border-[#E6DFD3] bg-white p-6">
                                    <p className="font-serif text-lg text-[#20235A]">
                                        NABL
                                    </p>

                                    <p className="mt-3 text-sm leading-7 text-[#55535B]">
                                        Technical Expert in Fluid Flow and Metrology.
                                    </p>
                                </div>

                                <div className="border border-[#E6DFD3] bg-white p-6">
                                    <p className="font-serif text-lg text-[#20235A]">
                                        Bureau of Indian Standards
                                    </p>

                                    <p className="mt-3 text-sm leading-7 text-[#55535B]">
                                        Member of two sectional committees.
                                    </p>
                                </div>

                                <div className="border border-[#E6DFD3] bg-white p-6">
                                    <p className="font-serif text-lg text-[#20235A]">
                                        Academic Advisory
                                    </p>

                                    <p className="mt-3 text-sm leading-7 text-[#55535B]">
                                        Advisory Board member of three technical institutions in Kerala and Tamil Nadu.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* PROFESSIONAL TRAINING */}

                        <div className="mt-12 border-l-2 border-[#D2B87C] bg-white px-6 py-6 sm:px-8">
                            <div className="flex items-center gap-3">
                                <GraduationCap
                                    size={19}
                                    className="text-[#927B4D]"
                                    strokeWidth={1.5}
                                />

                                <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                    Professional Development
                                </p>
                            </div>

                            <p className="mt-4 text-sm leading-7 text-[#55535B]">
                                Completed a UNIDO fellowship training programme in Flow Measurement at the National Research Laboratory for Metrology, Tokyo, Japan, and the Six Sigma Black Belt Certification Programme from the Indian Statistical Institute, Coimbatore.
                            </p>
                        </div>
                    </div>
                </section>

              

              
            </main>

            <FooterSection />
        </>
    );
}
