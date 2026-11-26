
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
    Building2,
    Mail,
    CalendarDays,
    BadgeCheck,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../../../DepartmentsNavigation/DepartmentsNavigation";

const BASE_PATH = "/departments/mechatronics_engineering";

const researchInterests = [
    "Renewable Energy",
    "Design and Performance Optimization of Electrical Systems",
    "Artificial Intelligence Techniques in Electrical Engineering",
];

const specializations = [
    "High Voltage Engineering",
    "Electrical Machine Design",
];

const courses = [
    {
        category: "Undergraduate",
        subjects:
            "Electrical Machines, Design of Machines, Power System Economics, Control Systems, Measurements and Instrumentation",
    },
    {
        category: "Postgraduate",
        subjects:
            "Generalized Theory of Electrical Machines, Analysis of Inverters",
    },
    {
        category: "Laboratory",
        subjects: "Electrical Machines",
    },
];

const qualifications = [
    {
        degree: "Ph.D.",
        specialization: "Research on Induction Motor Design, Optimization and Control Using Soft Computing Techniques",
        institution: "College of Engineering, Guindy, Anna University, Chennai",
        year: "To be updated",
    },
    {
        degree: "M.E. / M.Tech.",
        specialization: "High Voltage Engineering",
        institution: "To be updated",
        year: "To be updated",
    },
    {
        degree: "B.E. / B.Tech.",
        specialization: "Electrical Engineering",
        institution: "NSS College of Engineering, Palakkad",
        year: "To be updated",
    },
];

const experience = [
    { label: "Teaching Experience", value: "32 Years" },
    { label: "Industry Experience", value: "2 Years" },
    { label: "Research Experience", value: "4 Years" },
];

const researchGuidance = [
    { label: "Ph.D. Scholars Guided", value: "7" },
    { label: "Ph.D. Scholars Currently Guiding", value: "2" },
    { label: "Postgraduate Projects Guided", value: "25" },
    { label: "Undergraduate Projects Guided", value: "40" },
];

const publications = [
    { label: "International Journal Publications", value: "36" },
    { label: "National Journal Publications", value: "Not specified" },
    { label: "International Conference Publications", value: "15" },
    { label: "National Conference Publications", value: "4" },
    { label: "Books / Book Chapters", value: "Not specified" },
];

const patents = [
    { label: "Patents Granted", value: "7" },
    { label: "Patents Published", value: "9" },
];

const professionalActivities = [
    { label: "FDPs / Workshops Attended", value: "35" },
    { label: "Invited Talks / Guest Lectures Delivered", value: "12" },
];

const awards = [
    "Best Faculty Advisor Award from IEI",
    "Best M.Tech. Thesis Award in Engineering for the thesis titled “IoT & RFID Based Wireless Vehicle Charging Using Arduino”.",
];

const memberships = ["ISTE", "IEI"];

const responsibilities = [
    "Head of the Department",
    "NBA Coordinator for the College",
    "Research Coordinator for the College",
    "Ladies Hostel Coordinator",
];

const profileSections = [
    { id: "about", label: "About Me" },
    { id: "qualifications", label: "Qualifications" },
    { id: "research", label: "Research" },
    { id: "courses", label: "Courses" },
    { id: "publications", label: "Publications" },
    { id: "patents", label: "Patents" },
    { id: "guidance", label: "Research Guidance" },
    { id: "professional", label: "Professional Activities" },
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
        <div className="grid gap-3 sm:grid-cols-2">
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

export default function GeethaRamadasFacultyPage() {
    return (
        <>
            <SiteHeader />

            {/* =====================================================
                PROFILE HERO
            ====================================================== */}
            <section className="relative isolate overflow-hidden bg-[#20235A]">

                <div className="absolute inset-0 bg-gradient-to-br from-[#20235A] via-[#20235A] to-[#171A43]" />

                {/* Decorative circles */}
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
                                Dr. Geetha Ramadas
                            </h1>

                            <p className="mt-3 font-serif text-lg italic text-[#D2B87C] sm:text-xl">
                                Professor &amp; Head
                            </p>

                            <div className="mt-7 flex flex-wrap gap-3">
                                <span className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80">
                                    Ph.D. – Electrical Engineering
                                </span>

                                <span className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80">
                                    M.E. – High Voltage Engineering
                                </span>

                                <span className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80">
                                    B.Tech. – Electrical Engineering
                                </span>
                            </div>

                            <div className="mt-8 flex flex-wrap items-center gap-5">
                                <div className="flex items-center gap-3">
                                    <span className="h-px w-10 bg-[#D2B87C]" />

                                    <span className="text-[10px] uppercase tracking-[0.18em] text-white/50">
                                        Professor &amp; Head
                                    </span>
                                </div>

                                <div className="flex items-center gap-2 text-[10px] text-white/55">
                                    <CalendarDays
                                        size={14}
                                        className="text-[#D2B87C]"
                                    />
                                    Joined: 17.06.2026
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
                                            Experience
                                        </p>

                                        <p className="mt-1 text-xs leading-5 text-white/90">
                                            32 Years in Teaching
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
                                            36 International Journal Publications
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
                                            Patents
                                        </p>

                                        <p className="mt-1 text-xs leading-5 text-white/90">
                                            7 Granted · 9 Published
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
                                title="About Dr. Geetha Ramadas"
                                description="An overview of her academic journey, research contributions, and professional experience."
                            />

                            <div className="space-y-5 text-sm leading-8 text-[#55535B]">

                                <p>
                                    Dr. Geetha Ramadas is a distinguished academician, researcher, and academic leader with
                                    over 32 years of experience in engineering education, marked by sustained contributions to
                                    teaching, research, innovation, and academic administration. Her professional journey
                                    reflects a deep commitment to advancing engineering knowledge, fostering research
                                    excellence, and nurturing the next generation of engineering professionals and researchers.
                                </p>

                                <p>
                                    She completed her B.Tech. in Electrical Engineering from NSS College of Engineering,
                                    Palakkad, followed by an M.E. in High Voltage Engineering. She earned her Ph.D. from the
                                    College of Engineering, Guindy, Anna University, Chennai, for her research on Induction
                                    Motor Design, Optimization and Control Using Soft Computing Techniques.
                                </p>

                                <p>
                                    Her academic and research interests encompass Electrical Machines, High Voltage
                                    Engineering, Induction Motor Design and Optimization, Soft Computing Techniques,
                                    Electrical Drives, and advanced engineering applications. With a strong interdisciplinary
                                    outlook, she actively encourages the integration of emerging technologies, innovative
                                    methodologies, and practical engineering solutions into teaching and research.

                                </p>

                                <p>
                                    A committed research mentor, Dr. Geetha Ramadas has successfully guided 25 postgraduate
                                    students and 8 Ph.D. scholars, contributing significantly to the development of research
                                    capabilities and technical expertise among young engineers. Her scholarly contributions
                                    include more than 50 research publications in journals and conference proceedings,
                                    reflecting her sustained engagement with the academic and research community.

                                </p>

                                <p>
                                    Her commitment to innovation and intellectual property development is particularly
                                    noteworthy. She holds 7 granted patents and has 9 additional published patents,
                                    demonstrating her dedication to translating research ideas into innovative solutions and
                                    promoting a culture of invention and technology development.

                                </p>

                                <p>
                                    Beyond teaching and research, Dr. Geetha Ramadas has been actively involved in academic
                                    leadership, institutional development, curriculum enhancement, quality assurance, and
                                    student-centred educational initiatives. She strongly advocates industry-academia
                                    collaboration, interdisciplinary research, experiential learning, and outcome-based education
                                    to ensure that engineering graduates are equipped to meet evolving technological and societal
                                    needs.
                                </p>

                                <p>
                                    As an academic leader, she envisions an educational environment that encourages critical
                                    thinking, creativity, innovation, entrepreneurship, and lifelong learning. Her professional
                                    philosophy is rooted in the belief that engineering education must extend beyond knowledge
                                    acquisition to inspire meaningful research, technological advancement, and societal
                                    transformation.

                                </p>

                                <p>
                                    With an accomplished record in teaching, research supervision, scholarly publications, and
                                    patented innovations, Dr. Geetha Ramadas continues to contribute to engineering education
                                    through academic leadership, research mentoring, and the pursuit of excellence in higher
                                    education

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
                                value="Professor & Head"
                            />

                            <DetailItem
                                label="Department"
                                value="Mechatronics Engineering"
                            />

                            <DetailItem
                                label="Date of Joining"
                                value="17 June 2026"
                            />

                            <DetailItem
                                label="Email Address"
                                value="hodmt@ncerc.ac.in"
                            />

                            <DetailItem
                                label="Additional Email"
                                value="drgeetharamdas.4650@ncerc.ac.in"
                            />

                            <DetailItem
                                label="Teaching Experience"
                                value="32 Years"
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
                            description="Her academic qualifications and educational background."
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
                <section className="bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-20 lg:px-12 ">
                    <div className="mx-auto max-w-7xl ">

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
                            description="Her research interests and areas of specialization across electrical engineering and emerging technologies."
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

                                <div className="mt-6 space-y-4">
                                    {specializations.map((item, index) => (
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

                                <div className="mt-6 space-y-4">
                                    {researchInterests.map((item, index) => (
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
                            description="Subjects handled at undergraduate, postgraduate, and laboratory levels."
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
                            description="A summary of her scholarly contributions through international journals and conference proceedings."
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

                        <div className="mt-6 border-l-2 border-[#D2B87C] bg-[#FAF7F2] px-6 py-5 sm:px-8">
                            <p className="text-sm leading-7 text-[#55535B]">
                                Her scholarly contributions include more
                                than 50 research publications in journals
                                and conference proceedings. The category-wise
                                figures above are presented as supplied in
                                the faculty information.
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
                            description="Her contributions to innovation, intellectual property development, and technology advancement."
                        />

                        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">

                            <div className="flex flex-col justify-center border border-[#E8E1D5] bg-white p-7 sm:p-9">
                                <div className="flex h-12 w-12 items-center justify-center bg-[#F5F0E6] text-[#927B4D]">
                                    <Award size={23} strokeWidth={1.5} />
                                </div>

                                <p className="mt-6 font-serif text-5xl text-[#20235A]">
                                    16
                                </p>

                                <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                    Total Granted & Published Patents
                                </p>
                            </div>

                            <div>
                                <MetricGrid items={patents} />
                            </div>
                        </div>
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
                            description="Her contribution to postgraduate and doctoral research supervision and student project guidance."
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

                        <div className="mt-7 border-l-2 border-[#D2B87C] bg-[#FAF7F2] px-6 py-5 sm:px-8">
                            <p className="text-sm leading-7 text-[#55535B]">
                                Dr. Geetha Ramadas is committed to mentoring
                                young researchers and developing their
                                research capabilities, technical expertise,
                                and academic potential.
                            </p>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    09 - SPONSORED PROJECTS AND CONSULTANCY
                ====================================================== */}
                {/* <section className="bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
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
                                    Sponsored project and consultancy
                                    information has not been provided.
                                    This section can be updated when the
                                    project details are available.
                                </p>
                            </div>
                        </div>
                    </div>
                </section> */}

                {/* =====================================================
                    10 - AWARDS AND RECOGNITIONS
                ====================================================== */}
                <section className="bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
                    <div className="mx-auto max-w-7xl">

                        <SectionHeading
                            number="10"
                            eyebrow="Achievements"
                            title="Awards & Recognitions"
                            description="Recognition for academic guidance and contributions to engineering education."
                        />

                        <div className="space-y-4">
                            {awards.map((item, index) => (
                                <div
                                    key={item}
                                    className="flex items-start gap-5 border border-[#E8E1D5] bg-[#FAF7F2] p-5 sm:p-7"
                                >
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#F0E8D8] text-[#927B4D]">
                                        <Award
                                            size={20}
                                            strokeWidth={1.5}
                                        />
                                    </div>

                                    <div>
                                        <p className="text-[9px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                            Recognition {String(index + 1).padStart(2, "0")}
                                        </p>

                                        <p className="mt-2 text-sm leading-7 text-[#393947]">
                                            {item}
                                        </p>
                                    </div>
                                </div>
                            ))}
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
                                            Membership {String(index + 1).padStart(2, "0")}
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

                        <MetricGrid items={professionalActivities} />
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
                            description="Institutional responsibilities and academic leadership roles."
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
                            description="Research identifiers and academic profile links for accessing her scholarly work."
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
                                        value="0000-0001-6487-1057"
                                    />

                                    <DetailItem
                                        label="Scopus Author ID"
                                        value="56801742600"
                                    />

                                    <DetailItem
                                        label="NCERC Unique ID"
                                        value="Not provided"
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
                                        href="https://scholar.google.co.in/citations?user=0bjgLNwAAAAJ"
                                    />

                                    <ProfileLink
                                        label="ORCID"
                                        value="View ORCID Profile"
                                        href="https://orcid.org/0000-0001-6487-1057"
                                    />

                                    <ProfileLink
                                        label="ResearchGate"
                                        value="View ResearchGate Profile"
                                        href="https://www.researchgate.net/profile/Geetha-Ramadas"
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
                                    href="mailto:hodmt@ncerc.ac.in"
                                    className="flex items-center gap-3 border border-[#E8E1D5] bg-white p-4 transition-colors hover:border-[#D2B87C]"
                                >
                                    <Mail
                                        size={17}
                                        className="shrink-0 text-[#927B4D]"
                                    />

                                    <div className="min-w-0">
                                        <p className="text-[9px] uppercase tracking-[0.14em] text-[#927B4D]">
                                            Department Email
                                        </p>

                                        <p className="mt-1 break-all text-sm text-[#393947]">
                                            hodmt@ncerc.ac.in
                                        </p>
                                    </div>
                                </a>

                                <a
                                    href="mailto:drgeetharamdas.4650@ncerc.ac.in"
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
                                            drgeetharamdas.4650@ncerc.ac.in
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Closing Note */}
                        <div className="mt-10 border-l-2 border-[#D2B87C] bg-[#FAF7F2] px-6 py-6 sm:px-8">
                            <p className="font-serif text-xl italic leading-relaxed text-[#20235A] sm:text-2xl">
                                Advancing engineering education through
                                research, innovation, academic leadership,
                                and a commitment to excellence.
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            <FooterSection />
        </>
    );
}
