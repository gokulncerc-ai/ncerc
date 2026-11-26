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
    FlaskConical,
    BriefcaseBusiness,
    Users,
    Building2,
    Mail,
    CalendarDays,
    BadgeCheck,
    Brain,
    Presentation,
    ShieldCheck,
    Wrench,
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
    { id: "guidance", label: "Research Guidance" },
    { id: "projects", label: "Projects" },
    { id: "awards", label: "Awards" },
    { id: "memberships", label: "Memberships" },
    { id: "professional", label: "Professional Activities" },
    { id: "responsibilities", label: "Responsibilities" },
    { id: "profiles", label: "Research Profiles" },
];

const qualifications = [
    {
        degree: "M.E. / M.Tech.",
        specialization: "Thermal Science",
        institution:
            "College of Engineering, Thiruvananthapuram (University of Kerala)",
        year: "2012",
    },
    {
        degree: "B.E. / B.Tech.",
        specialization: "Mechanical Engineering",
        institution: "University of Calicut",
        year: "2009",
    },
    {
        degree: "PG Certificate Programme",
        specialization: "Artificial Intelligence and Data Science",
        institution: "IIIT Kottayam (AICTE-QIP)",
        year: "2025",
    },
];

const experience = [
    {
        designation: "Assistant Professor",
        department: "Department of Mechatronics Engineering",
        institution:
            "Nehru College of Engineering and Research Centre (NCERC), Pampady, Thrissur",
        period: "July 2026 – Present",
    },
    {
        designation: "Assistant Professor & Head of the Department",
        department: "Department of Mechanical Engineering",
        institution:
            "Mar Baselios Christian College of Engineering and Technology, Peermade, Idukki",
        period:
            "October 2020 – June 2026 (Designation period); September 2012 – September 2026 (overall period as supplied)",
    },
    {
        designation: "Guest Lecturer",
        department: "Engineering",
        institution: "College of Engineering, Thiruvananthapuram",
        period: "March 2011 – June 2012 | 1 Year",
    },
];

const specializations = [
    "Thermal Engineering and Thermal Science",
    "Automobile Engineering",
    "Material Science",
    "Artificial Intelligence and Data Science",
    "Machine Learning and Deep Learning",
    "Alternative Fuels and Renewable Energy Systems",
    "Mechatronics and Intelligent Engineering Systems",
];

const researchInterests = [
    "Thermal Engineering and Heat Transfer",
    "Computational Fluid Dynamics (CFD) and Fluid Mechanics",
    "Automobile and Automotive Engineering",
    "Artificial Intelligence, Machine Learning, and Data Science",
    "Biomechanics and Biomedical Engineering",
    "Advanced Energy Systems, Sustainable Technologies, and Material Science",
];

const undergraduateCourses = [
    "Advanced Automation Systems (MR401 – S7 Core)",
    "Thermal Engineering (S5 Core)",
    "Thermal Engineering Laboratory (S5 Practical)",
    "Thermodynamics (S3 Core)",
    "Introduction to Mechanical Engineering (S1 Common Course)",
    "Material Science and Engineering (S2 & S3 Core)",
    "Industrial Safety (S7 Professional Elective)",
    "Renewable Energy Engineering (S7 Professional Elective)",
    "Cryogenics (S7 Professional Elective)",
    "Non-Destructive Testing (MET312 – S6 Professional Elective)",
    "Engineering Ethics and Sustainable Development (S3 Humanities / Professional Course)",
    "Mechanical Workshop (Practical / Laboratory)",
];

const journalPublications = [
    {
        title: "CFD Analysis of Velocity Profiles for NACA 4412 Aerofoil",
        journal: "IJUR Journal",
    },
    {
        title: "CFD Analysis on Variation of Pressure Coefficient for NACA 4412 Aerofoil",
        journal: "IJUR Journal",
    },
];

const conferencePublications = [
    {
        title: "Hybrid YOLO-CNN Architectures for High-Performance Real-Time Waste Classification in Smart Waste-Management System",
        details:
            "2026 International Conference on AI-Driven Solutions for Sustainable Smart Cities: Challenges and Opportunities (ADSSSC), p. 560",
        doi: "10.1109/ADSSSC67751.2024.11581951",
        indexing: "IEEE Xplore / Scopus Indexed",
    },
    {
        title: "Experimental and Numerical Flow Field Analysis on Hybrid Dryer",
        details: "International / Technical Conference",
        doi: "",
        indexing: "",
    },
];

const guidedProjects = [
    "Urine-Powered Internal Combustion Engine",
    "Automatic Cleaning of Bull Gears",
    "Numerical Analysis of Stent Grafts on AAA Model Using CFD",
    "Experimental Setup on Hybrid Solar Dryer",
    "Biofuel Production from Ethanol",
    "CFD Analysis of Aerofoil",
    "Biodiesel Production from Neem Oil",
];

const sponsoredProjects = [
    {
        title: "Smart Waste Segregation – Research Project",
        agency: "CEEE, Infosys CSR Grant",
        role: "Project Team Member / Researcher",
        amount: "₹50,000",
        status: "Completed (2025) – Research and prototype development",
    },
    {
        title: "Explainable AI Framework for Smart Waste Segregation",
        agency: "AICTE-QIP / IIIT Kottayam Academic Programme",
        role: "Project Researcher",
        amount: "Institutional / Academic Programme Support",
        status:
            "Completed (2025) – AI-based waste classification using deep learning",
    },
];

const awards = [
    {
        title: "State-Level Best YIP Facilitator Award",
        year: "2025",
        description:
            "Awarded by Kerala Development and Innovation Strategic Council (K-DISC), Government of Kerala, in recognition of outstanding contribution to student innovation and mentoring under the Young Innovators Programme.",
    },
];

const memberships = [
    "The Institution of Engineers (India) – IEI: Member (MIE)",
    "Kerala Knowledge Economy Mission (KKEM): Registered Member",
];

const professionalActivities = [
    {
        title: "Chalkboard to Chatbot – Faculty Voyage in AI",
        details: "6-Month Faculty Development Programme, IIT Ropar / MCEP (2025)",
    },
    {
        title: "AI in Education",
        details:
            "6-Day National AICTE-ATAL FDP, Abdul Razzak Kalsekar Polytechnic (13-10-2025 to 18-10-2025)",
    },
    {
        title: "Futuristic Manufacturing with 3D Printing and Digital Fabrication",
        details:
            "6-Day AICTE-ATAL FDP, Adhi College of Engineering and Technology (15-09-2025 to 20-09-2025)",
    },
    {
        title: "Artificial Intelligence as a Copilot in Bridging the Gap between Academia and Industry",
        details:
            "6-Day National AICTE-ATAL FDP, Surana College Autonomous (25-11-2024 to 30-11-2024)",
    },
    {
        title: "Electric Vehicles",
        details: "5-Day Online FDP, AICTE Training and Learning (ATAL) Academy, Manipal University Jaipur (2021)",
    },
];

const responsibilities = [
    {
        title: "Head of the Department – Mechanical Engineering",
        description:
            "Academic and administrative leadership, departmental coordination, and student mentoring at Mar Baselios Christian College of Engineering and Technology (October 2020 – June 2026).",
    },
    {
        title: "NAAC Criteria Coordinator",
        description:
            "Coordination of accreditation documentation, institutional quality assurance activities, and departmental data compilation.",
    },
    {
        title: "NBA Coordinator",
        description:
            "Contribution to NBA accreditation, Self-Assessment Report (SAR) preparation, Outcome-Based Education (OBE) implementation, and programme assessment.",
    },
    {
        title: "Young Innovators Programme (YIP) College Facilitator & State Evaluator",
        description:
            "Mentoring student innovators, coordinating institutional innovation activities, and evaluating state-level student innovation proposals and projects.",
    },
    {
        title: "Physical Education Director / Professor-in-Charge & KTU Zonal Games Coordinator",
        description:
            "Coordination and organization of university-level sports tournaments and student sports development.",
    },
    {
        title: "Virtual Labs Nodal Coordinator",
        description: "Academic coordination and promotion of IIT Delhi Virtual Labs.",
    },
    {
        title: "Placement & Alumni Interaction Coordinator",
        description:
            "Student placement support, industry interaction, and departmental alumni engagement.",
    },
    {
        title: "Mechanical Engineering Association Staff Coordinator & C-RISE Mentor",
        description:
            "Coordination of technical workshops, student association programmes, and student innovation mentoring.",
    },
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

export default function ManikandanFacultyPage() {
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

                            <h1 className="mt-4 max-w-4xl font-serif text-4xl font-normal leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                                Manikandan S
                            </h1>

                            <p className="mt-3 font-serif text-lg italic text-[#D2B87C] sm:text-xl">
                                Assistant Professor
                            </p>

                            <div className="mt-7 flex flex-wrap gap-3">
                                <span className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80">
                                    M.Tech. – Thermal Science
                                </span>

                                <span className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80">
                                    B.Tech. – Mechanical Engineering
                                </span>

                                <span className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80">
                                    AI & Data Science – PG Certificate
                                </span>
                            </div>

                            <div className="mt-8 flex flex-wrap items-center gap-5">
                                <div className="flex items-center gap-3">
                                    <span className="h-px w-10 bg-[#D2B87C]" />

                                    <span className="text-[10px] uppercase tracking-[0.18em] text-white/50">
                                        Assistant Professor
                                    </span>
                                </div>

                                {/* <div className="flex items-center gap-2 text-[10px] text-white/55">
                                    <CalendarDays
                                        size={14}
                                        className="text-[#D2B87C]"
                                    />
                                    Joined: 09.07.2026
                                </div> */}
                            </div>
                        </div>

                        {/* ACADEMIC PROFILE SUMMARY */}
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
                                            15 Years
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
                                            Journal Publications
                                        </p>

                                        <p className="mt-1 text-xs leading-5 text-white/90">
                                            2 International Journal Papers
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
                                            Research Projects
                                        </p>

                                        <p className="mt-1 text-xs leading-5 text-white/90">
                                            2 Sponsored / Academic Projects
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

                {/* 01 - ABOUT ME */}
                <section
                    id="about"
                    className="scroll-mt-24 bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_310px] lg:gap-16">
                        <div>
                            <SectionHeading
                                number="01"
                                eyebrow="Introduction"
                                title="About Manikandan S"
                                description="An overview of his academic background, teaching experience, research interests, and professional journey."
                            />

                            <div className="space-y-5 text-sm leading-8 text-[#55535B]">
                                <p>
                                    Manikandan S is an Assistant Professor in the Department of Mechatronics Engineering at
                                    Nehru College of Engineering and Research Centre (NCERC), Pampady, Kerala. He holds a
                                    B.Tech. in Mechanical Engineering from Calicut University and an M.Tech. in Thermal
                                    Science from the College of Engineering, Thiruvananthapuram (University of Kerala).
                                </p>

                                <p>
                                    He has approximately 15 years of academic and teaching experience in engineering education,
                                    with expertise in teaching mechanical and interdisciplinary engineering subjects. He has also
                                    completed the AICTE-QIP Postgraduate Certificate Programme in Artificial Intelligence and
                                    Data Science at IIIT Kottayam, strengthening his expertise in emerging digital technologies.
                                </p>

                                <p>
                                    His areas of academic and research interest include Automobile Engineering, Artificial
                                    Intelligence, Data Science, Machine Learning, Deep Learning, Explainable AI,
                                    Computational Fluid Dynamics (CFD), Thermal Energy Systems, Biomechanics, and
                                    Alternative Fuels.
                                </p>

                                <p>
                                    He is passionate about integrating AI and machine learning with
                                    mechanical, automotive, and mechatronics engineering applications to develop innovative
                                    and sustainable solutions
                                </p>
                            </div>
                        </div>

                        {/* PERSONAL DETAILS */}
                        <aside className="h-fit border border-[#E4DCCE] bg-white p-6">
                            <div className="mb-4 flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center bg-[#F5F0E6] text-[#927B4D]">
                                    <UserRound size={19} strokeWidth={1.5} />
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
                                value="09 July 2026"
                            />

                            <DetailItem
                                label="Email Address"
                                value="manikandan.4700@ncerc.ac.in"
                            />
{/* 
                            <DetailItem
                                label="Contact Number"
                                value="+91 9496338507"
                            /> */}

                            <DetailItem
                                label="Teaching Experience"
                                value="15 Years"
                            />
                        </aside>
                    </div>
                </section>

                {/* 02 - QUALIFICATIONS */}
                <section
                    id="qualifications"
                    className="scroll-mt-24 bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="02"
                            eyebrow="Academic Background"
                            title="Academic Qualifications"
                            description="His academic qualifications and professional certification."
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

                {/* 03 - EXPERIENCE */}
                <section
                    id="experience"
                    className="scroll-mt-24 bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="03"
                            eyebrow="Professional Journey"
                            title="Teaching & Professional Experience"
                            description="An overview of his academic appointments and teaching experience."
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

                        <MetricGrid
                            items={[
                                {
                                    label: "Total Teaching Experience",
                                    value: "15 Years",
                                },
                            ]}
                        />

                        <div className="mt-8 space-y-5">
                            {experience.map((item, index) => (
                                <div
                                    key={`${item.institution}-${index}`}
                                    className="grid gap-4 border border-[#E8E1D5] bg-white p-6 sm:grid-cols-[65px_1fr] sm:p-7"
                                >
                                    <div className="font-serif text-3xl text-[#B49A66]">
                                        {String(index + 1).padStart(2, "0")}
                                    </div>

                                    <div>
                                        <h3 className="font-serif text-lg text-[#20235A]">
                                            {item.designation}
                                        </h3>

                                        <p className="mt-1 text-xs font-medium uppercase tracking-[0.1em] text-[#927B4D]">
                                            {item.department}
                                        </p>

                                        <p className="mt-3 text-sm leading-6 text-[#55535B]">
                                            {item.institution}
                                        </p>

                                        <p className="mt-3 flex items-start gap-2 text-xs leading-6 text-[#77747A]">
                                            <CalendarDays
                                                size={14}
                                                className="mt-1 shrink-0 text-[#927B4D]"
                                            />
                                            {item.period}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 04 - RESEARCH AND SPECIALIZATION */}
                <section
                    id="research"
                    className="scroll-mt-24 bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="04"
                            eyebrow="Academic Exploration"
                            title="Research & Areas of Specialization"
                            description="His areas of specialization and research interests across mechanical engineering, thermal science, and emerging technologies."
                        />

                        <div className="grid gap-8 lg:grid-cols-2">
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

                {/* 05 - COURSES HANDLED */}
                <section
                    id="courses"
                    className="scroll-mt-24 bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="05"
                            eyebrow="Teaching Experience"
                            title="Courses / Subjects Handled"
                            description="Undergraduate courses and subjects handled in mechanical and mechatronics engineering."
                        />

                        <div className="mb-5 flex items-center gap-3">
                            <BookOpen
                                size={18}
                                className="text-[#927B4D]"
                                strokeWidth={1.5}
                            />

                            <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                Undergraduate Teaching Portfolio
                            </p>
                        </div>

                        <div className="border border-[#E8E1D5] bg-white p-6 sm:p-8">
                            <NumberedList items={undergraduateCourses} />
                        </div>
                    </div>
                </section>

                {/* 06 - PUBLICATIONS */}
                <section
                    id="publications"
                    className="scroll-mt-24 bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="06"
                            eyebrow="Research Contributions"
                            title="Research Publications"
                            description="His scholarly contributions through international journal and conference publications."
                        />

                        <div className="mb-6 flex items-center gap-3">
                            <FileText
                                size={19}
                                className="text-[#927B4D]"
                                strokeWidth={1.5}
                            />

                            <h3 className="font-serif text-xl text-[#20235A]">
                                Publication Overview
                            </h3>
                        </div>

                        <MetricGrid
                            items={[
                                {
                                    label: "International Journal Publications",
                                    value: "02",
                                },
                                {
                                    label: "International Conference Publications",
                                    value: "02",
                                },
                            ]}
                        />

                        <div className="mt-10">
                            <h3 className="mb-5 font-serif text-xl text-[#20235A]">
                                International Journal Publications
                            </h3>

                            <div className="space-y-4">
                                {journalPublications.map((item, index) => (
                                    <div
                                        key={item.title}
                                        className="flex gap-5 border border-[#E8E1D5] bg-[#FAF7F2] p-5 sm:p-7"
                                    >
                                        <span className="font-serif text-2xl text-[#B49A66]">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                        <div>
                                            <h4 className="font-serif text-base leading-7 text-[#20235A]">
                                                {item.title}
                                            </h4>

                                            <p className="mt-2 text-xs uppercase tracking-[0.12em] text-[#927B4D]">
                                                {item.journal}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-10">
                            <h3 className="mb-5 font-serif text-xl text-[#20235A]">
                                International Conference Publications
                            </h3>

                            <div className="space-y-4">
                                {conferencePublications.map((item, index) => (
                                    <div
                                        key={item.title}
                                        className="border border-[#E8E1D5] bg-white p-5 sm:p-7"
                                    >
                                        <div className="flex items-start gap-5">
                                            <span className="font-serif text-2xl text-[#B49A66]">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>

                                            <div className="min-w-0">
                                                <h4 className="font-serif text-base leading-7 text-[#20235A]">
                                                    {item.title}
                                                </h4>

                                                <p className="mt-3 text-sm leading-7 text-[#55535B]">
                                                    {item.details}
                                                </p>

                                                {item.doi && (
                                                    <p className="mt-3 break-all text-xs leading-6 text-[#927B4D]">
                                                        DOI: {item.doi}
                                                    </p>
                                                )}

                                                {item.indexing && (
                                                    <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.12em] text-[#927B4D]">
                                                        {item.indexing}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 07 - RESEARCH GUIDANCE */}
                <section
                    id="guidance"
                    className="scroll-mt-24 bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="07"
                            eyebrow="Research Mentorship"
                            title="Research Guidance"
                            description="Undergraduate project guidance and mentoring across mechanical, automotive, and interdisciplinary engineering applications."
                        />

                        <div className="mb-6 flex items-center gap-3">
                            <Users
                                size={19}
                                className="text-[#927B4D]"
                                strokeWidth={1.5}
                            />

                            <h3 className="font-serif text-xl text-[#20235A]">
                                Undergraduate Projects Guided
                            </h3>
                        </div>

                        <MetricGrid
                            items={[
                                {
                                    label: "UG Projects Guided",
                                    value: "7+",
                                },
                            ]}
                        />

                        <div className="mt-7 border border-[#E8E1D5] bg-white p-6 sm:p-8">
                            <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                Selected Project Areas
                            </p>

                            <NumberedList items={guidedProjects} />
                        </div>
                    </div>
                </section>

                {/* 08 - SPONSORED PROJECTS */}
                <section
                    id="projects"
                    className="scroll-mt-24 bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="08"
                            eyebrow="Research & Development"
                            title="Sponsored Projects and Consultancy"
                            description="Research and academic project contributions in smart waste management and explainable artificial intelligence."
                        />

                        <div className="space-y-5">
                            {sponsoredProjects.map((project, index) => (
                                <div
                                    key={project.title}
                                    className="grid gap-5 border border-[#E8E1D5] bg-[#FAF7F2] p-6 sm:grid-cols-[65px_1fr] sm:p-8"
                                >
                                    <div className="font-serif text-3xl text-[#B49A66]">
                                        {String(index + 1).padStart(2, "0")}
                                    </div>

                                    <div>
                                        <h3 className="font-serif text-lg leading-7 text-[#20235A]">
                                            {project.title}
                                        </h3>

                                        <div className="mt-5 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                                            <div>
                                                <p className="text-[9px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                                    Funding Agency
                                                </p>

                                                <p className="mt-2 text-sm leading-6 text-[#55535B]">
                                                    {project.agency}
                                                </p>
                                            </div>

                                            <div>
                                                <p className="text-[9px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                                    Role
                                                </p>

                                                <p className="mt-2 text-sm leading-6 text-[#55535B]">
                                                    {project.role}
                                                </p>
                                            </div>

                                            <div>
                                                <p className="text-[9px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                                    Project Amount
                                                </p>

                                                <p className="mt-2 text-sm leading-6 text-[#55535B]">
                                                    {project.amount}
                                                </p>
                                            </div>

                                            <div>
                                                <p className="text-[9px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                                    Status
                                                </p>

                                                <p className="mt-2 text-sm leading-6 text-[#55535B]">
                                                    {project.status}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 09 - AWARDS */}
                <section
                    id="awards"
                    className="scroll-mt-24 bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="09"
                            eyebrow="Achievements"
                            title="Awards & Recognitions"
                            description="Recognition for contributions to student innovation, mentoring, and academic activities."
                        />

                        <div className="space-y-4">
                            {awards.map((item) => (
                                <div
                                    key={item.title}
                                    className="flex items-start gap-5 border border-[#E8E1D5] bg-white p-6 sm:p-8"
                                >
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#F0E8D8] text-[#927B4D]">
                                        <Award size={21} strokeWidth={1.5} />
                                    </div>

                                    <div>
                                        <div className="flex flex-wrap items-center gap-3">
                                            <h3 className="font-serif text-lg text-[#20235A]">
                                                {item.title}
                                            </h3>

                                            <span className="border border-[#D2B87C]/60 px-3 py-1 text-[9px] uppercase tracking-[0.12em] text-[#927B4D]">
                                                {item.year}
                                            </span>
                                        </div>

                                        <p className="mt-3 text-sm leading-7 text-[#55535B]">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 10 - PROFESSIONAL MEMBERSHIPS */}
                <section
                    id="memberships"
                    className="scroll-mt-24 bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="10"
                            eyebrow="Professional Associations"
                            title="Professional Memberships"
                            description="Professional memberships and institutional associations."
                        />

                        <div className="grid gap-4 md:grid-cols-2">
                            {memberships.map((item, index) => (
                                <div
                                    key={item}
                                    className="flex items-start gap-4 border border-[#E8E1D5] bg-[#FAF7F2] p-6"
                                >
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#F0E8D8] text-[#927B4D]">
                                        <BadgeCheck
                                            size={20}
                                            strokeWidth={1.5}
                                        />
                                    </div>

                                    <div>
                                        <p className="text-[9px] uppercase tracking-[0.15em] text-[#927B4D]">
                                            Membership {String(index + 1).padStart(2, "0")}
                                        </p>

                                        <p className="mt-2 text-sm leading-6 text-[#393947]">
                                            {item}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 11 - PROFESSIONAL ACTIVITIES */}
                <section
                    id="professional"
                    className="scroll-mt-24 bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="11"
                            eyebrow="Continuous Learning"
                            title="Faculty Development & Professional Activities"
                            description="Faculty development programmes and workshops attended to strengthen academic practice and emerging technology expertise."
                        />

                        <div className="mb-6 flex items-center gap-3">
                            <Presentation
                                size={19}
                                className="text-[#927B4D]"
                                strokeWidth={1.5}
                            />

                            <h3 className="font-serif text-xl text-[#20235A]">
                                FDPs / Workshops Attended
                            </h3>
                        </div>

                        <div className="space-y-4">
                            {professionalActivities.map((item, index) => (
                                <div
                                    key={item.title}
                                    className="flex gap-5 border border-[#E8E1D5] bg-white p-5 sm:p-7"
                                >
                                    <span className="font-serif text-2xl text-[#B49A66]">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <div>
                                        <h4 className="font-serif text-base leading-7 text-[#20235A]">
                                            {item.title}
                                        </h4>

                                        <p className="mt-2 text-sm leading-6 text-[#69666B]">
                                            {item.details}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 12 - ADMINISTRATIVE RESPONSIBILITIES */}
                <section
                    id="responsibilities"
                    className="scroll-mt-24 bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="12"
                            eyebrow="Institutional Contributions"
                            title="Administrative & Institutional Responsibilities"
                            description="Academic leadership, institutional coordination, student mentoring, and quality assurance responsibilities."
                        />

                        <div className="space-y-4">
                            {responsibilities.map((item, index) => (
                                <div
                                    key={item.title}
                                    className="grid gap-4 border-b border-[#E8E1D5] py-5 last:border-b-0 sm:grid-cols-[65px_1fr]"
                                >
                                    <span className="font-serif text-2xl text-[#B49A66]">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <div>
                                        <h3 className="font-serif text-lg text-[#20235A]">
                                            {item.title}
                                        </h3>

                                        <p className="mt-2 text-sm leading-7 text-[#55535B]">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 13 - RESEARCHER PROFILES */}
                <section
                    id="profiles"
                    className="scroll-mt-24 bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="13"
                            eyebrow="Academic Presence"
                            title="Professional Research Profiles"
                            description="Access his academic research profiles and scholarly information."
                        />

                        <div className="grid gap-8 lg:grid-cols-2">
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
                                        href="https://scholar.google.com/citations?view_op=new_profile&hl=en"
                                    />

                                    <ProfileLink
                                        label="ORCID"
                                        value="0009-0002-0711-6594"
                                        href="https://orcid.org/0009-0002-0711-6594"
                                    />
                                </div>
                            </div>

                            <div className="border border-[#E8E1D5] bg-white p-6 sm:p-8">
                                <div className="flex items-center gap-3">
                                    <UserRound
                                        size={21}
                                        className="text-[#927B4D]"
                                        strokeWidth={1.5}
                                    />

                                    <h3 className="font-serif text-xl text-[#20235A]">
                                        Faculty Information
                                    </h3>
                                </div>

                                <div className="mt-5">
                                    <DetailItem
                                        label="Faculty Name"
                                        value="Manikandan S"
                                    />

                                    <DetailItem
                                        label="Designation"
                                        value="Assistant Professor"
                                    />

                                    <DetailItem
                                        label="Department"
                                        value="Mechatronics Engineering"
                                    />

                                    <DetailItem
                                        label="Institution"
                                        value="Nehru College of Engineering and Research Centre"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* CONTACT DETAILS */}
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

                            <div className="mt-5 grid gap-4 sm:grid-cols-2">
                                <a
                                    href="mailto:manikandan.4700@ncerc.ac.in"
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
                                            manikandan.4700@ncerc.ac.in
                                        </p>
                                    </div>
                                </a>

                                <a
                                    href="tel:+919496338507"
                                    className="flex items-center gap-3 border border-[#E8E1D5] bg-[#FAF7F2] p-4 transition-colors hover:border-[#D2B87C]"
                                >
                                    <Mail
                                        size={17}
                                        className="shrink-0 text-[#927B4D]"
                                    />

                                    <div className="min-w-0">
                                        <p className="text-[9px] uppercase tracking-[0.14em] text-[#927B4D]">
                                            Contact Number
                                        </p>

                                        <p className="mt-1 text-sm text-[#393947]">
                                            +91 9496338507
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <FooterSection />
        </>
    );
}