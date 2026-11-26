
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
    IdCard,
    FlaskConical,
    BriefcaseBusiness,
    Users,
    ShieldCheck,
    Languages,
    Building2,
    CalendarDays,
    Mail,
    Phone,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../../../DepartmentsNavigation/DepartmentsNavigation";

const researchInterests = [
    "Engineering Education",
    "Robotics",
    "Automation",
    "Emerging Technologies",
    "Academic Leadership",
    "Institutional Development",
    "Examination Administration",
];

const keywords = [
    "Communication Systems",
    "Electronics and Communication Engineering",
    "Robotics",
    "Mechatronics",
    "Sensors and Actuators",
    "PLC",
    "Control Systems",
    "Signal Processing",
    "Engineering Education",
    "Automation",
];

const undergraduateCourses = [
    ["1", "B.Tech", "Robotics and Automation"],
    ["2", "B.Tech", "Digital Image Processing"],
    ["3", "B.Tech", "Linear Integrated Circuits"],
    ["4", "B.Tech", "Analog and Digital Electronics"],
];

const postgraduateCourses = [
    ["1", "M.Tech", "Advanced Digital Signal Processing"],
];

const publicationMetrics = [
    ["International Journal Publications", "Not specified"],
    ["National Journal Publications", "4"],
    ["International Conference Publications", "1"],
    ["National Conference Publications", "2"],
    ["Books / Book Chapters", "Not specified"],
];

const patentMetrics = [
    ["Patents Granted", "1"],
    ["Patents Published", "1"],
];

const examinationExperience = [
    "UGC-NET",
    "JEE",
    "NEET",
    "CUET (UG/PG)",
    "CSIR-NET",
    "NCHM",
    "CMAT",
    "ICAR",
];

const responsibilities = [
    {
        title: "Admission Officer – Nehru Group of Institutions",
        description:
            "Serving as Admission Officer to the Nehru Group of Institutions from May 2013 onwards, contributing to student admissions, institutional coordination and student engagement.",
    },
    {
        title: "NSITE Coordinator",
        description:
            "Coordinator of NSITE, the national-level technical expo.",
    },
    {
        title: "BLOOM Coordinator",
        description:
            "Coordinator of BLOOM, the national-level cultural extravaganza.",
    },
];

const guidance = [
    ["Ph.D. Scholars Guided", "Not specified"],
    ["Ph.D. Scholars Currently Guiding", "Not specified"],
    ["PG Projects Guided", "2"],
    ["UG Projects Guided", "8"],
];

const profileSections = [
    { id: "about", label: "About Me" },
    { id: "research", label: "Research" },
    { id: "courses", label: "Courses" },
    { id: "publications", label: "Publications" },
    { id: "patent", label: "Patent" },
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
}: {
    headers: string[];
    rows: string[][];
}) {
    return (
        <div className="overflow-hidden border border-[#E6DFD3] bg-white">
            <div className="overflow-x-auto">
                <table className="w-full min-w-[600px] border-collapse text-left">
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

function MetricBlock({
    value,
    label,
}: {
    value: string;
    label: string;
}) {
    return (
        <div className="border border-[#E8E1D5] bg-white p-5">
            <p className="font-serif text-2xl text-[#20235A]">{value}</p>
            <p className="mt-2 text-[9px] font-medium uppercase leading-5 tracking-[0.13em] text-[#927B4D]">
                {label}
            </p>
        </div>
    );
}

export default function AnshadFacultyPage() {
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

                    <div className="mt-7 grid gap-10 lg:grid-cols-[1fr_280px] lg:items-end">
                        <div>
                            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/50">
                                Department of Mechatronics Engineering
                            </p>

                            <h1 className="mt-4 font-serif text-4xl font-normal leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                                Mr. Anshad V
                            </h1>

                            <p className="mt-3 font-serif text-lg italic text-[#D2B87C] sm:text-xl">
                                Assistant Professor
                            </p>

                            <div className="mt-7 flex flex-wrap gap-3">
                                <span className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80">
                                    M.E – Communication Systems
                                </span>
                                <span className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80">
                                    B.E – Electronics and Communication Engineering
                                </span>
                            </div>
                        </div>

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
                                        <p className="mt-1 text-xs leading-5 text-white/90">
                                            Robotics, Automation and Communication Systems
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
                                            Academic Experience
                                        </p>
                                        <p className="mt-1 text-xs text-white/90">
                                            11 Years of Teaching
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
                                title="About Mr. Anshad V"
                                description="An overview of his academic background, teaching experience, institutional contributions and professional journey."
                            />

                            <div className="space-y-5 text-sm leading-8 text-[#55535B]">
                                <p>
                                    Mr. Anshad.V. is an accomplished academician and education professional with over
                                    10 years of teaching experience in Engineering Education. He is currently serving as an
                                    Assistant Professor in the Department of Mechatronics Engineering at Nehru College of
                                    Engineering and Research Centre (NCERC), Thrissur, Kerala.
                                </p>

                                <p>
                                    He holds a postgraduate degree in Engineering, with a strong academic background in
                                    Electronics and Communication Engineering and related technological disciplines. His
                                    teaching experience spans both B.Tech and M.Tech programmes, with expertise in areas such
                                    as Mechatronics, Sensors and Actuators, Robotics, PLC, Control Systems, Signal Processing
                                    and emerging technologies
                                </p>

                                <p>
                                    In addition to his academic responsibilities, he has been associated with the Nehru Group of
                                    Institutions as an Admission Officer for over 13 years, contributing significantly to student
                                    admissions, institutional coordination, and student engagement.

                                </p>

                                <p>
                                    He is also an experienced National Testing Agency (NTA) and EdCIL Examination Observer
                                    and City Coordinator, having been associated with national-level competitive examinations
                                    since 2018. He has handled responsibilities in more than 100 online and offline examination
                                    assignments, including UGC-NET, JEE, NEET, CUET (UG/PG), CSIR-NET, NCHM,
                                    CMAT, ICAR and other national-level examinations. His responsibilities have included
                                    examination centre supervision, coordination, monitoring examination procedures, ensuring
                                    compliance with examination guidelines and maintaining the integrity of examination
                                    processes.

                                </p>

                                <p>
                                    He has also actively participated in examination-related orientations and coordination
                                    activities, gaining extensive experience in managing large-scale computer-based and penand-paper examinations.
                                </p>

                                <p>
                                    His professional interests include engineering education, robotics, automation, emerging
                                    technologies, academic leadership, institutional development and examination administration.
                                    He is proficient in English, Malayalam, Hindi and Tamil, enabling him to communicate
                                    effectively with students, parents, academic professionals and institutional stakeholders.
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
                                value="Mechatronics Engineering"
                            />

                            <DetailItem
                                label="Date of Joining"
                                value="25 September 2023"
                            />

                            <DetailItem
                                label="Teaching Experience"
                                value="11 Years"
                            />

                            <DetailItem
                                label="Email Address"
                                value="anshad4105.mtr@ncerc.ac.in"
                            />

                            {/* <DetailItem
                                label="Contact Number"
                                value="9037156909"
                            /> */}
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
                            description="Academic qualifications, areas of specialisation, research interests and professional contributions."
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
                                            Postgraduate Qualification
                                        </p>
                                    </div>

                                    <h3 className="mt-3 font-serif text-xl text-[#20235A]">
                                        M.E. – Communication Systems
                                    </h3>

                                    <p className="mt-2 text-sm leading-7 text-[#55535B]">
                                        Anna University, 2015.
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
                                        B.E. – Electronics and Communication Engineering
                                    </h3>

                                    <p className="mt-2 text-sm leading-7 text-[#55535B]">
                                        University of Calicut, 2013.
                                    </p>
                                </div>

                                <div className="border-l-2 border-[#D2B87C] pl-6">
                                    <div className="flex items-center gap-3">
                                        <BriefcaseBusiness
                                            size={19}
                                            className="text-[#927B4D]"
                                            strokeWidth={1.5}
                                        />
                                        <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                            Professional Experience
                                        </p>
                                    </div>

                                    <h3 className="mt-3 font-serif text-xl text-[#20235A]">
                                        Engineering Education and Institutional Administration
                                    </h3>

                                    <p className="mt-2 text-sm leading-7 text-[#55535B]">
                                        11 years of teaching experience and over 13 years of association with the Nehru Group of Institutions as an Admission Officer.
                                    </p>
                                </div>
                            </div>

                            <div className="border border-[#E8E1D5] bg-[#FAF7F2] p-6 sm:p-8">
                                <div className="flex items-center gap-3">
                                    <FlaskConical
                                        size={20}
                                        className="text-[#927B4D]"
                                        strokeWidth={1.5}
                                    />
                                    <h3 className="font-serif text-xl text-[#20235A]">
                                        Academic and Professional Focus
                                    </h3>
                                </div>

                                <p className="mt-4 text-sm leading-8 text-[#55535B]">
                                    His academic and professional interests span engineering education, communication systems, mechatronics, robotics, automation and emerging technologies. His experience also includes examination administration and institutional coordination.
                                </p>

                                <div className="mt-6 border-t border-[#E5DED1] pt-5">
                                    <p className="text-[9px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                        Key Academic Areas
                                    </p>

                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {keywords.map((keyword) => (
                                            <span
                                                key={keyword}
                                                className="border border-[#D8CDB8] bg-white px-3 py-2 text-[10px] tracking-wide text-[#55535B]"
                                            >
                                                {keyword}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Research Interests */}
                        <div className="mt-14">
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

                        {/* Professional Experience */}
                        <div className="mt-12">
                            <div className="mb-6 flex items-center gap-3">
                                <ShieldCheck
                                    size={19}
                                    className="text-[#927B4D]"
                                    strokeWidth={1.5}
                                />
                                <h3 className="font-serif text-xl text-[#20235A]">
                                    National-Level Examination Experience
                                </h3>
                            </div>

                            <div className="border border-[#E8E1D5] bg-[#FAF7F2] p-6 sm:p-8">
                                <p className="text-sm leading-8 text-[#55535B]">
                                    An experienced National Testing Agency (NTA) and EdCIL Examination Observer and City Coordinator, associated with national-level competitive examinations since 2018. He has handled more than 100 online and offline examination assignments, with responsibilities involving examination centre supervision, coordination, monitoring and compliance with examination guidelines.
                                </p>

                                <div className="mt-6 border-t border-[#E5DED1] pt-5">
                                    <p className="text-[9px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                        Examinations Associated With
                                    </p>

                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {examinationExperience.map((exam) => (
                                            <span
                                                key={exam}
                                                className="border border-[#D8CDB8] bg-white px-3 py-2 text-[10px] tracking-wide text-[#55535B]"
                                            >
                                                {exam}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Areas of Specialization */}
                        <div className="mt-12 border-l-2 border-[#D2B87C] bg-[#FAF7F2] px-6 py-6 sm:px-8">
                            <p className="text-[9px] font-medium uppercase tracking-[0.17em] text-[#927B4D]">
                                Area of Specialization
                            </p>
                            <p className="mt-3 text-sm leading-7 text-[#55535B]">
                                Communication Systems Engineering.
                            </p>

                            <div className="mt-5 border-t border-[#E5DED1] pt-5">
                                <p className="text-[9px] font-medium uppercase tracking-[0.17em] text-[#927B4D]">
                                    Faculty Development
                                </p>
                                <p className="mt-3 text-sm leading-7 text-[#55535B]">
                                    4 FDPs / Workshops attended. Details of invited talks and guest lectures have not been provided.
                                </p>
                            </div>
                        </div>

                        {/* Research Guidance */}
                        <div className="mt-12">
                            <div className="mb-6 flex items-center gap-3">
                                <Users
                                    size={19}
                                    className="text-[#927B4D]"
                                    strokeWidth={1.5}
                                />
                                <h3 className="font-serif text-xl text-[#20235A]">
                                    Research Guidance
                                </h3>
                            </div>

                            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                                {guidance.map(([label, value]) => (
                                    <MetricBlock
                                        key={label}
                                        label={label}
                                        value={value}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Award and Recognition */}
                        <div className="mt-12 border border-[#E8E1D5] bg-white p-6 sm:p-8">
                            <div className="flex items-center gap-3">
                                <Award
                                    size={20}
                                    className="text-[#927B4D]"
                                    strokeWidth={1.5}
                                />
                                <h3 className="font-serif text-xl text-[#20235A]">
                                    Awards and Recognitions
                                </h3>
                            </div>

                            <div className="mt-5 border-l-2 border-[#D2B87C] bg-[#FAF7F2] px-5 py-5">
                                <p className="font-serif text-lg text-[#20235A]">
                                    NGI Edupreneur Award 2023
                                </p>
                                <p className="mt-2 text-[9px] uppercase tracking-[0.13em] text-[#927B4D]">
                                    2023
                                </p>
                            </div>
                        </div>

                        {/* Administrative Responsibilities */}
                        <div className="mt-12">
                            <div className="mb-6 flex items-center gap-3">
                                <Building2
                                    size={19}
                                    className="text-[#927B4D]"
                                    strokeWidth={1.5}
                                />
                                <h3 className="font-serif text-xl text-[#20235A]">
                                    Administrative and Institutional Responsibilities
                                </h3>
                            </div>

                            <div className="space-y-3">
                                {responsibilities.map((item, index) => (
                                    <div
                                        key={item.title}
                                        className="flex gap-5 border border-[#E8E1D5] bg-[#FAF7F2] p-5 sm:p-6"
                                    >
                                        <span className="font-serif text-xl text-[#B49A66]">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                        <div>
                                            <h4 className="font-serif text-lg text-[#20235A]">
                                                {item.title}
                                            </h4>
                                            <p className="mt-2 text-sm leading-7 text-[#55535B]">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
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
                            description="Undergraduate and postgraduate courses handled across engineering programmes."
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
                                "Programme",
                                "Subject",
                            ]}
                            rows={undergraduateCourses}
                        />

                        <div className="mb-5 mt-10 flex items-center gap-3">
                            <GraduationCap
                                size={18}
                                className="text-[#927B4D]"
                                strokeWidth={1.5}
                            />
                            <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                Postgraduate Courses
                            </p>
                        </div>

                        <DataTable
                            headers={[
                                "Sl. No.",
                                "Programme",
                                "Subject",
                            ]}
                            rows={postgraduateCourses}
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
                            title="Research Publications"
                            description="Publication contributions across journals, conferences and academic books."
                        />

                        <div className="mb-6 flex items-center gap-3">
                            <FileText
                                size={19}
                                className="text-[#927B4D]"
                                strokeWidth={1.5}
                            />
                            <h3 className="font-serif text-xl text-[#20235A]">
                                Publication Details
                            </h3>
                        </div>

                        <DataTable
                            headers={[
                                "Publication Category",
                                "Number of Publications",
                            ]}
                            rows={publicationMetrics}
                        />

                        <div className="mt-8 border-l-2 border-[#D2B87C] bg-[#FAF7F2] px-6 py-6 sm:px-8">
                            <p className="text-[9px] font-medium uppercase tracking-[0.17em] text-[#927B4D]">
                                Publication Summary
                            </p>

                            <p className="mt-3 text-sm leading-7 text-[#55535B]">
                                The provided profile lists 4 national journal publications, 1 international conference publication and 2 national conference publications. Individual publication titles and bibliographic details have not been provided.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Patent Section */}
                <section
                    id="patent"
                    className="scroll-mt-24 bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="05"
                            eyebrow="Intellectual Property"
                            title="Patents"
                            description="Patent grants and published intellectual property contributions."
                        />

                        <div className="mb-5 flex items-center gap-3">
                            <Award
                                size={19}
                                className="text-[#927B4D]"
                                strokeWidth={1.5}
                            />
                            <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                Patent Overview
                            </p>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            {patentMetrics.map(([label, value]) => (
                                <div
                                    key={label}
                                    className="flex items-center gap-5 border border-[#E8E1D5] bg-white p-6"
                                >
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#F5F0E6] text-[#927B4D]">
                                        <IdCard
                                            size={20}
                                            strokeWidth={1.5}
                                        />
                                    </div>

                                    <div>
                                        <p className="font-serif text-3xl text-[#20235A]">
                                            {value}
                                        </p>
                                        <p className="mt-1 text-[9px] font-medium uppercase tracking-[0.13em] text-[#927B4D]">
                                            {label}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 border-l-2 border-[#D2B87C] bg-white px-6 py-6 sm:px-8">
                            <div className="flex items-center gap-3">
                                <FlaskConical
                                    size={19}
                                    className="text-[#927B4D]"
                                    strokeWidth={1.5}
                                />
                                <h3 className="font-serif text-xl text-[#20235A]">
                                    Patent Information
                                </h3>
                            </div>

                            <p className="mt-4 text-sm leading-8 text-[#55535B]">
                                The faculty profile records one granted patent and one published patent. Patent titles, application numbers and publication details have not been provided.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Contact and Languages */}
                <section className="bg-white px-5 py-14 sm:px-8 sm:py-16 lg:px-12">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
                            <div>
                                <SectionHeading
                                    number="06"
                                    eyebrow="Communication"
                                    title="Contact Information"
                                    description="Contact details for academic and professional communication."
                                />

                                <div className="space-y-5">
                                    <a
                                        href="mailto:anshad4105.mtr@ncerc.ac.in"
                                        className="flex items-center gap-4 border-b border-[#EAE4D9] pb-5 text-sm text-[#393947] transition-colors hover:text-[#927B4D]"
                                    >
                                        <Mail
                                            size={19}
                                            className="shrink-0 text-[#927B4D]"
                                            strokeWidth={1.5}
                                        />
                                        anshad4105.mtr@ncerc.ac.in
                                    </a>

                                    <a
                                        href="tel:9037156909"
                                        className="flex items-center gap-4 text-sm text-[#393947] transition-colors hover:text-[#927B4D]"
                                    >
                                        <Phone
                                            size={19}
                                            className="shrink-0 text-[#927B4D]"
                                            strokeWidth={1.5}
                                        />
                                        9037156909
                                    </a>
                                </div>
                            </div>

                            <div className="border border-[#E8E1D5] bg-[#FAF7F2] p-6 sm:p-8">
                                <div className="flex items-center gap-3">
                                    <Languages
                                        size={20}
                                        className="text-[#927B4D]"
                                        strokeWidth={1.5}
                                    />
                                    <h3 className="font-serif text-xl text-[#20235A]">
                                        Languages Known
                                    </h3>
                                </div>

                                <div className="mt-6 flex flex-wrap gap-2">
                                    {[
                                        "English",
                                        "Malayalam",
                                        "Hindi",
                                        "Tamil",
                                    ].map((language) => (
                                        <span
                                            key={language}
                                            className="border border-[#D8CDB8] bg-white px-4 py-2 text-[10px] tracking-wide text-[#55535B]"
                                        >
                                            {language}
                                        </span>
                                    ))}
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
