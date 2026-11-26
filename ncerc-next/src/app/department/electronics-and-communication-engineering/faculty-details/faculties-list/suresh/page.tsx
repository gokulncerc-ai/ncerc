import {
    ArrowDown,
    ArrowUpRight,
    Award,
    BookOpen,
    Cpu,
    GraduationCap,
    Lightbulb,
    Microscope,
    UserRound,
    Wifi,
    Wrench,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../../../DepartmentNav/DepartmentNav";

const researchInterests = [
    {
        title: "Medical Image Processing",
        description:
            "Exploring image-processing techniques and their applications in medical and healthcare-related technologies.",
        icon: Microscope,
    },
    {
        title: "Internet of Things (IoT)",
        description:
            "Developing connected systems and practical IoT-based solutions for real-world applications.",
        icon: Wifi,
    },
    {
        title: "LoRaWAN Systems",
        description:
            "Working with low-power, long-range wireless communication technologies and connected devices.",
        icon: Cpu,
    },
    {
        title: "Smart City Applications",
        description:
            "Exploring technology-driven solutions for connected infrastructure and smart city development.",
        icon: Lightbulb,
    },
    {
        title: "Python-Based Embedded Applications",
        description:
            "Applying Python programming to embedded platforms, automation, and practical engineering projects.",
        icon: Cpu,
    },
    {
        title: "Electronic Circuit Design",
        description:
            "Designing and developing electronic circuits for practical and application-oriented systems.",
        icon: Wrench,
    },
    {
        title: "Applied Electronics Technologies",
        description:
            "Exploring applied electronics technologies through prototyping, experimentation, and product development.",
        icon: GraduationCap,
    },
];

const keywords = [
    "IoT",
    "Embedded Systems",
    "LoRaWAN",
    "Smart Cities",
    "Python Programming",
    "Raspberry Pi",
    "Electronics Design",
];

const courses = [
    ["1", "2026", "B.Tech.", "S8", "ECE", "IoT"],
    ["1", "2026", "B.Tech.", "S8", "ECE", "Projects"],
    ["2", "2026", "B.Tech.", "S6", "ECE", "VLSI Circuits"],
    ["3", "2026", "B.Tech.", "S4", "ECE", "LIC LAB"],
    ["4", "2025", "B.Tech.", "S5", "ECE", "Control System"],
    ["6", "2025", "B.Tech.", "S3", "ECE", "Electronics Circuits And Devices"],
    ["7", "2025", "B.Tech.", "S3", "ECE", "Circuits Lab"],
    ["8", "2025", "B.Tech.", "S6", "ECE", "VLSI Circuits"],
    ["9", "2025", "B.Tech.", "S3", "AI&ML", "DSP"],
];

const publications = [
    {
        year: "2025",
        title:
            "Guardian Wheel – An Advanced Wheelchair for Disabled People",
        details:
            "Presented at the International Conference on Recent Advancements in Artificial Intelligence, Computational Intelligence and Inclusive Technologies (ICRAIC2IT), May 02–03, 2025, NRI Institute of Technology, Vijayawada. The paper will appear in Scopus indexed proceedings published by Taylor & Francis Publishers, UK.",
    },
    {
        year: "2025",
        title:
            "Design and Implementation of Arduino Based Automatic Railway Crossing Control",
        details:
            "International Journal of Science and Innovation Engineering, ISSN –, Volume 2, Issue 8.",
    },
    {
        year: "2025",
        title:
            "Design and Development of Multi-Sensor Robotic System for Search and Rescue Mission",
        details:
            "International Journal of Novel Research and Development, Volume 8.",
    },
    {
        year: "2025",
        title: "Product Design Patent",
        details:
            "Awarded 1 Product Design Patent. Design Patent Applied (currently under process).",
    },
];

const books = [
    {
        year: "2025",
        date: "30.8-2025",
        title:
            "Transformative Innovations In Optical Communication Networks",
        publisher: "COSMOS",
        edition: "1st",
    },
];

const profileSections = [
    { label: "About", href: "#about" },
    { label: "Research", href: "#research" },
    { label: "Courses", href: "#courses" },
    { label: "Publications", href: "#publications" },
    { label: "Books", href: "#books" },
];

function SectionHeading({
    eyebrow,
    title,
    description,
}: {
    eyebrow: string;
    title: string;
    description?: string;
}) {
    return (
        <div className="mb-10">
            <div className="mb-3 flex items-center gap-3">
                <span className="h-px w-8 bg-[#B99B5F]" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#927B4D]">
                    {eyebrow}
                </p>
            </div>

            <h2 className="font-serif text-3xl font-medium leading-tight text-[#20235A] sm:text-4xl">
                {title}
            </h2>

            {description && (
                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#66636A]">
                    {description}
                </p>
            )}
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
        <div className="border-b border-[#E8E1D4] py-4 last:border-b-0">
            <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#927B4D]">
                {label}
            </p>
            <p className="text-sm leading-6 text-[#373746]">{value}</p>
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
        <div className="overflow-hidden border border-[#E8E1D4] bg-white">
            <div className="overflow-x-auto">
                <table className="w-full min-w-[760px] border-collapse text-left">
                    <thead>
                        <tr className="bg-[#20235A]">
                            {headers.map((header) => (
                                <th
                                    key={header}
                                    className="whitespace-nowrap px-5 py-4 text-[10px] font-semibold uppercase tracking-[0.13em] text-white"
                                >
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                        {rows.map((row, rowIndex) => (
                            <tr
                                key={`${rowIndex}-${row.join("-")}`}
                                className={`border-b border-[#EEE9DF] last:border-b-0 ${rowIndex % 2 === 0 ? "bg-white" : "bg-[#FAF7F2]"
                                    }`}
                            >
                                {row.map((cell, cellIndex) => (
                                    <td
                                        key={`${rowIndex}-${cellIndex}`}
                                        className="px-5 py-4 text-sm leading-6 text-[#55545A]"
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

export default function SureshPPage() {
    return (
        <>
            <SiteHeader />

            {/* HERO SECTION */}
            <section className="relative isolate overflow-hidden bg-[#20235A] text-white">
                {/* Background decoration */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-white/[0.07]" />
                    <div className="absolute -right-20 -top-20 h-[340px] w-[340px] rounded-full border border-white/[0.07]" />
                    <div className="absolute -bottom-56 -left-40 h-[480px] w-[480px] rounded-full border border-[#D2B87C]/10" />
                    <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_40%,rgba(210,184,124,0.07)_100%)]" />
                </div>

                <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-36 lg:grid-cols-[1.35fr_0.65fr] lg:items-center lg:px-10 lg:py-28">
                    {/* Faculty details */}
                    <div>
                        <div className="mb-7 flex items-center gap-3">
                            <span className="h-px w-10 bg-[#D2B87C]" />
                            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D2B87C]">
                                Faculty Profile
                            </p>
                        </div>

                        <p className="mb-4 text-xs font-medium uppercase tracking-[0.17em] text-white/65">
                            Department of Electronics and Communication Engineering
                        </p>

                        <h1 className="max-w-3xl font-serif text-4xl font-medium leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl">
                            Mr. Suresh P
                        </h1>

                        <p className="mt-5 text-sm font-medium tracking-wide text-[#D2B87C] sm:text-base">
                            Assistant Professor
                        </p>

                        <div className="mt-8 flex flex-wrap gap-2">
                            {[
                                "Ph.D. (Pursuing)",
                                "M.Tech – Electronics & Telecommunication Engineering",
                                "M.Tech – Embedded Systems",
                                "MBA – Information Systems",
                                "B.Tech – Electronics & Telecommunication Engineering",
                            ].map((qualification) => (
                                <span
                                    key={qualification}
                                    className="border border-white/15 bg-white/[0.06] px-3 py-2 text-[10px] leading-5 text-white/80 sm:text-xs"
                                >
                                    {qualification}
                                </span>
                            ))}
                        </div>

                        <div className="mt-9 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/15 pt-6">
                            <div>
                                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/45">
                                    NCERC Unique ID
                                </p>
                                <p className="mt-1 text-sm font-medium text-white">
                                    4371
                                </p>
                            </div>

                            <div>
                                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/45">
                                    Researcher ID
                                </p>
                                <p className="mt-1 text-sm font-medium text-white">
                                    25RPKBM
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Academic profile card */}
                    <div className="relative">
                        <div className="absolute -inset-3 border border-[#D2B87C]/20" />

                        <div className="relative border border-white/10 bg-white/[0.07] p-7 backdrop-blur-sm sm:p-8">
                            <div className="mb-8 flex items-center justify-between">
                                <div>
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                                        Academic Profile
                                    </p>
                                    <h2 className="mt-2 font-serif text-2xl text-white">
                                        Professional Overview
                                    </h2>
                                </div>
                                <div className="flex h-12 w-12 items-center justify-center border border-[#D2B87C]/30 text-[#D2B87C]">
                                    <GraduationCap size={23} strokeWidth={1.4} />
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#D2B87C]/10 text-[#D2B87C]">
                                        <GraduationCap size={19} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <p className="text-[9px] font-semibold uppercase tracking-[0.17em] text-white/45">
                                            Qualifications
                                        </p>
                                        <p className="mt-1 text-sm leading-6 text-white/90">
                                            Ph.D. (Pursuing), Dual M.Tech, MBA, B.Tech
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#D2B87C]/10 text-[#D2B87C]">
                                        <Microscope size={19} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <p className="text-[9px] font-semibold uppercase tracking-[0.17em] text-white/45">
                                            Research Focus
                                        </p>
                                        <p className="mt-1 text-sm leading-6 text-white/90">
                                            Embedded Systems, IoT & Smart City Applications
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#D2B87C]/10 text-[#D2B87C]">
                                        <BookOpen size={19} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <p className="text-[9px] font-semibold uppercase tracking-[0.17em] text-white/45">
                                            Research Publications
                                        </p>
                                        <p className="mt-1 text-sm leading-6 text-white/90">
                                            3 Publications & 1 Product Design Patent
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <a
                                href="#about"
                                className="mt-9 flex items-center justify-between border-t border-white/15 pt-5 text-xs font-semibold uppercase tracking-[0.15em] text-[#D2B87C] transition-colors hover:text-white"
                            >
                                Explore Profile
                                <ArrowDown size={17} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <main className="bg-white [&_p]:text-justify">
                <InnerHeader />

                {/* PROFILE NAVIGATION */}
                <div className="sticky top-0 z-30 border-b border-[#EAE5DC] bg-white/95 backdrop-blur-md">
                    <div className="mx-auto flex max-w-7xl gap-7 overflow-x-auto px-5 sm:px-8 lg:px-10">
                        {profileSections.map((section) => (
                            <a
                                key={section.href}
                                href={section.href}
                                className="shrink-0 border-b-2 border-transparent py-5 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#696873] transition-colors hover:border-[#B99B5F] hover:text-[#20235A]"
                            >
                                {section.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* ABOUT SECTION */}
                <section
                    id="about"
                    className="scroll-mt-24 bg-[#FAF7F2] px-5 py-16 sm:px-8 sm:py-20 lg:px-10"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            eyebrow="01 — Faculty Overview"
                            title="About Suresh P"
                            description="Academic background, professional experience, and contributions to Electronics and Communication Engineering."
                        />

                        <div className="grid gap-10 lg:grid-cols-[1.45fr_0.75fr] lg:gap-14">
                            <div>
                                <div className="border-l-2 border-[#B99B5F] pl-6">
                                    <p className="text-[15px] leading-8 text-[#55545A]">
                                        Suresh P is an academician and electronics professional with extensive experience in teaching, training, and research in the field of Electronics and Communication Engineering. He is currently working as an Assistant Professor in the Department of Electronics and Communication Engineering at Nehru College of Engineering and Research Centre (NCERC), Pampady, Kerala.
                                    </p>

                                    <p className="mt-6 text-[15px] leading-8 text-[#55545A]">
                                        He holds dual M.Tech degrees in Electronics and Telecommunication Engineering and Embedded Systems, along with an MBA in Information Systems. His academic interests include Embedded Systems, Internet of Things (IoT), Python-based applications, electronic circuit design, and applied electronics technologies. With more than a decade of experience in academics and technical training, he has organized seminars, workshops, and national conferences. He has conducted over 85 hands-on workshops in engineering colleges focusing on IoT, Raspberry Pi, and Python programming. He has been actively associated with the Institute of Electronics and Telecommunication Engineers (IETE), serving as Centre Manager (2011–2020) and currently as Honorary Treasurer. He has contributed to academic coordination, skill development programs, and mentoring students in project development. He has received recognitions including Best Paper Awards, Idea Grant Winner (Kerala Startup Mission, 2022), and IETE Scholarship Award (2020).

                                    </p>
                                </div>

                                {/* Experience highlights */}
                                <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
                                    {[
                                        {
                                            value: "10+",
                                            label: "Years of Academic & Technical Training Experience",
                                        },
                                        {
                                            value: "85+",
                                            label: "Hands-on Workshops Conducted",
                                        },
                                        {
                                            value: "2011–2020",
                                            label: "IETE Centre Manager",
                                        },
                                    ].map((item) => (
                                        <div
                                            key={item.label}
                                            className="border border-[#E8E1D4] bg-white p-5"
                                        >
                                            <p className="font-serif text-2xl text-[#20235A]">
                                                {item.value}
                                            </p>
                                            <p className="mt-2 text-[10px] leading-5 text-[#77737A]">
                                                {item.label}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* PROFESSIONAL DETAILS */}
                            <aside className="h-fit border border-[#E6DFD2] bg-white p-6 sm:p-8">
                                <div className="mb-5 flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                                        <UserRound size={19} />
                                    </div>
                                    <div>
                                        <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#927B4D]">
                                            Faculty Information
                                        </p>
                                        <h3 className="font-serif text-xl text-[#20235A]">
                                            Professional Details
                                        </h3>
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
                                <DetailItem
                                    label="NCERC Unique ID"
                                    value="4371"
                                />
                                <DetailItem
                                    label="Researcher ID"
                                    value="25RPKBM"
                                />
                                <DetailItem
                                    label="Qualification"
                                    value="Ph.D. (Pursuing), M.Tech, M.Tech, MBA, B.Tech"
                                />

                                <div className="mt-6 border-t border-[#E8E1D4] pt-5">
                                    <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.17em] text-[#927B4D]">
                                        Researcher Profiles
                                    </p>

                                    <a
                                        href="https://orcid.org/0009-0005-8902-7086"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mb-3 flex items-center justify-between gap-3 text-sm text-[#20235A] transition-colors hover:text-[#927B4D]"
                                    >
                                        ORCID Profile
                                        <ArrowUpRight size={16} />
                                    </a>

                                    <a
                                        href="https://scholar.google.com/citations?hl=en&user=OzVc19AAAAAJ"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-between gap-3 text-sm text-[#20235A] transition-colors hover:text-[#927B4D]"
                                    >
                                        Google Scholar Profile
                                        <ArrowUpRight size={16} />
                                    </a>
                                </div>
                            </aside>
                        </div>
                    </div>
                </section>

                {/* RESEARCH SECTION */}
                <section
                    id="research"
                    className="scroll-mt-24 bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            eyebrow="02 — Research & Expertise"
                            title="Research Interests"
                            description="Areas of academic and technical interest focusing on embedded technologies, connected systems, and applied electronics."
                        />

                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {researchInterests.map((interest, index) => {
                                const Icon = interest.icon;

                                return (
                                    <div
                                        key={interest.title}
                                        className="group border border-[#EAE5DC] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#C7AE7C] hover:shadow-[0_12px_35px_rgba(32,35,90,0.07)]"
                                    >
                                        <div className="mb-6 flex items-center justify-between">
                                            <div className="flex h-11 w-11 items-center justify-center bg-[#F2EFE8] text-[#927B4D] transition-colors group-hover:bg-[#20235A] group-hover:text-[#D2B87C]">
                                                <Icon size={21} strokeWidth={1.5} />
                                            </div>
                                            <span className="font-serif text-sm text-[#C1B69F]">
                                                0{index + 1}
                                            </span>
                                        </div>

                                        <h3 className="font-serif text-xl text-[#20235A]">
                                            {interest.title}
                                        </h3>

                                        {/* <p className="mt-3 text-sm leading-7 text-[#77737A]">
                                            {interest.description}
                                        </p> */}
                                    </div>
                                );
                            })}
                        </div>

                        {/* KEYWORDS */}
                        <div className="mt-12 grid gap-8 bg-[#20235A] p-7 text-white sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                            <div>
                                <div className="mb-4 flex items-center gap-3">
                                    <span className="h-px w-8 bg-[#D2B87C]" />
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                        Research Keywords
                                    </p>
                                </div>
                                <h3 className="font-serif text-2xl leading-snug sm:text-3xl">
                                    Areas of Technical Focus
                                </h3>
                                <p className="mt-3 text-sm leading-7 text-white/60">
                                    Key technical domains associated with academic and research
                                    interests.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {keywords.map((keyword) => (
                                    <span
                                        key={keyword}
                                        className="border border-white/20 bg-white/[0.06] px-4 py-3 text-xs text-white/85 transition-colors hover:border-[#D2B87C]/60 hover:text-[#D2B87C]"
                                    >
                                        {keyword}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* AREA OF INTEREST */}
                        <div className="mt-8 border border-[#E8E1D4] bg-[#FAF7F2] p-7 sm:p-9">
                            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                                    <Lightbulb size={21} strokeWidth={1.5} />
                                </div>

                                <div>
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#927B4D]">
                                        Area of Interest
                                    </p>
                                    <p className="mt-3 text-sm leading-8 text-[#55545A]">
                                        Embedded System Design, IoT-based Product Development,
                                        Skill-based Technical Training, Electronics Prototyping
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* COURSES SECTION */}
                <section
                    id="courses"
                    className="scroll-mt-24 bg-[#FAF7F2] px-5 py-16 sm:px-8 sm:py-20 lg:px-10"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            eyebrow="03 — Teaching Contributions"
                            title="Courses Handled"
                            description="Academic courses handled by the faculty member across undergraduate programmes and semesters."
                        />

                        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                            <div>
                                <p className="font-serif text-2xl text-[#20235A]">
                                    Academic Teaching Record
                                </p>
                                <p className="mt-1 text-xs text-[#77737A]">
                                    Course details as provided
                                </p>
                            </div>

                            <span className="border border-[#D9CFBD] bg-white px-4 py-2 text-xs font-medium text-[#927B4D]">
                                09 Course Entries
                            </span>
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
                            rows={courses}
                        />
                    </div>
                </section>

                {/* PUBLICATIONS SECTION */}
                <section
                    id="publications"
                    className="scroll-mt-24 bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            eyebrow="04 — Research Output"
                            title="Publications & Patent"
                            description="Conference presentations, journal publications, and product design patent details."
                        />

                        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
                            <div>
                                <p className="font-serif text-2xl text-[#20235A]">
                                    Conference / Journal Details
                                </p>
                                <p className="mt-1 text-xs text-[#77737A]">
                                    Research contributions listed for 2025
                                </p>
                            </div>

                            <span className="border border-[#E8E1D4] bg-[#FAF7F2] px-4 py-2 text-xs font-medium text-[#927B4D]">
                                04 Entries
                            </span>
                        </div>

                        <div className="space-y-4">
                            {publications.map((publication, index) => (
                                <article
                                    key={publication.title}
                                    className="group grid gap-5 border border-[#EAE5DC] bg-white p-6 transition-all duration-300 hover:border-[#C7AE7C] hover:shadow-[0_10px_30px_rgba(32,35,90,0.05)] sm:grid-cols-[100px_1fr] sm:p-8"
                                >
                                    <div className="flex items-start gap-3 sm:block">
                                        <span className="font-serif text-3xl text-[#B7A47E]">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                        <div className="mt-1 inline-flex border border-[#E8E1D4] bg-[#FAF7F2] px-3 py-1 text-[10px] font-semibold tracking-wider text-[#927B4D] sm:mt-4">
                                            {publication.year}
                                        </div>
                                    </div>

                                    <div>
                                        <div className="mb-3 flex items-center gap-2">
                                            <span className="h-px w-6 bg-[#B99B5F]" />
                                            <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#927B4D]">
                                                {index === 3
                                                    ? "Patent & Design"
                                                    : "Conference / Journal"}
                                            </p>
                                        </div>

                                        <h3 className="font-serif text-xl leading-snug text-[#20235A] transition-colors group-hover:text-[#927B4D] sm:text-2xl">
                                            {publication.title}
                                        </h3>

                                        <p className="mt-3 text-sm leading-7 text-[#77737A]">
                                            {publication.details}
                                        </p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* BOOKS SECTION */}
                <section
                    id="books"
                    className="scroll-mt-24 bg-[#FAF7F2] px-5 py-16 sm:px-8 sm:py-20 lg:px-10"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            eyebrow="05 — Academic Contributions"
                            title="Books Published"
                            description="Book publication details and associated publishing information."
                        />

                        <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
                            <div>
                                <p className="font-serif text-2xl text-[#20235A]">
                                    Book Publication Details
                                </p>
                                <p className="mt-1 text-xs text-[#77737A]">
                                    Published academic work
                                </p>
                            </div>

                            <span className="border border-[#D9CFBD] bg-white px-4 py-2 text-xs font-medium text-[#927B4D]">
                                01 Book
                            </span>
                        </div>

                        <div className="grid gap-5">
                            {books.map((book) => (
                                <article
                                    key={book.title}
                                    className="grid gap-6 border border-[#E8E1D4] bg-white p-6 sm:grid-cols-[100px_1fr] sm:p-8"
                                >
                                    <div className="flex h-24 w-20 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                                        <BookOpen size={34} strokeWidth={1.2} />
                                    </div>

                                    <div>
                                        <div className="mb-3 flex flex-wrap items-center gap-2">
                                            <span className="bg-[#F2EFE8] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#927B4D]">
                                                {book.year}
                                            </span>
                                            <span className="text-xs text-[#88838A]">
                                                {book.date}
                                            </span>
                                        </div>

                                        <h3 className="font-serif text-2xl leading-snug text-[#20235A]">
                                            {book.title}
                                        </h3>

                                        <div className="mt-5 grid gap-4 border-t border-[#EEE9DF] pt-5 sm:grid-cols-2">
                                            <div>
                                                <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#927B4D]">
                                                    Published By
                                                </p>
                                                <p className="mt-1 text-sm text-[#55545A]">
                                                    {book.publisher}
                                                </p>
                                            </div>

                                            <div>
                                                <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#927B4D]">
                                                    Edition
                                                </p>
                                                <p className="mt-1 text-sm text-[#55545A]">
                                                    {book.edition}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <FooterSection />
        </>
    );
}