
"use client";

import Link from "next/link";
import {
    ArrowDown,
    ArrowUpRight,
    BookOpen,
    BriefcaseBusiness,
    Code2,
    ExternalLink,
    GraduationCap,
    Lightbulb,
    Microscope,
    ShieldCheck,
    UserRound,
    Wrench,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../../../DepartmentNav/DepartmentNavigation";

const researchInterests = [
    "Internet of Things (IoT)",
    "Artificial Intelligence",
    "Data Science",
    "Web Technologies",
];

const keywords = [
    "Internet of Things",
    "IoT Architecture",
    "IoT Protocols",
    "Artificial Intelligence",
    "Data Science",
    "Web Technologies",
    "Machine Learning",
    "Software Engineering",
    "E-Learning Systems",
];

const courses = [
    ["1", "2025", "B. Tech", "Mechatronics", "Soft Computing Techniques"],
    ["2", "2025", "B. Tech", "CSE", "OOPS Lab"],
    ["3", "2025", "B. Tech", "CSE", "Foundations of Computing"],
    ["4", "2026", "B. Tech", "CSE", "Software Engineering"],
    ["5", "2025", "B. Tech", "CSE", "Android Programming"],
    ["6", "2025", "B. Tech", "CSE", "Operating Systems"],
    ["7", "2025", "M. Tech", "CSE", "Social Network Analysis"],
];

const publications = [
    {
        year: "2025",
        title: "IoT Architecture and Protocols",
        type: "Book Publication",
    },
];

const professionalExperience = [
    {
        role: "Assistant Professor",
        duration: "Present",
        description: "Present academic position.",
    },
    {
        role: "Online Tutor",
        duration: "5 Years",
        description: "Experience in online teaching and academic mentoring.",
    },
    {
        role: "B.Tech Tuition Faculty",
        duration: "17 Years",
        description: "Teaching and academic support for B.Tech students.",
    },
    {
        role: "Faculty at Keltron Knowledge Centre",
        duration: "",
        description: "Academic and teaching experience.",
    },
    {
        role: "Faculty at CBSE School",
        duration: "",
        description: "School-level teaching experience.",
    },
];

const technicalSkills = [
    {
        category: "Programming Languages",
        skills: ["C", "C++", "Java", "Python", "PHP", "SQL"],
    },
    {
        category: "Web Technologies",
        skills: ["HTML", "CSS", "JavaScript"],
    },
    {
        category: "Other Skills",
        skills: [
            "Curriculum Design",
            "Online Teaching Tools",
            "Academic Mentoring",
        ],
    },
];

const profileSections = [
    { id: "about", label: "About" },
    { id: "research", label: "Research" },
    { id: "courses", label: "Courses" },
    { id: "publications", label: "Publications" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Technical Skills" },
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

export default function AshithaFacultyPage() {
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
                                Ms. Ashitha A
                            </h1>

                            <p className="mt-3 font-serif text-lg italic text-[#D2B87C] sm:text-xl">
                                Assistant Professor
                            </p>

                            <div className="mt-7 flex flex-wrap gap-3">
                                <span className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80">
                                    Ph.D. – Pursuing
                                </span>
                                <span className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80">
                                    M.E. – Computer Science and Engineering
                                </span>
                                <span className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80">
                                    M.Sc. – Software Engineering
                                </span>
                            </div>

                            <div className="mt-8 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#D2B87C]" />
                                <span className="text-[10px] uppercase tracking-[0.18em] text-white/50">
                                    Department of CSE
                                </span>
                            </div>
                        </div>

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
                                            Ph.D. Pursuing, M.E., M.Sc.
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
                                            IoT, Artificial Intelligence & Data Science
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
                                            Courses Handled
                                        </p>
                                        <p className="mt-1 text-xs text-white/90">
                                            7 Listed Courses
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
                                title="About Ms. Ashitha A"
                                description="Academic background, teaching experience, and professional contributions."
                            />

                            <p className="text-sm leading-8 text-[#55535B]">
                                Ms. Ashitha A is an experienced academician with a strong foundation in Computer Science and Engineering. She is currently pursuing her Ph.D. and has significant expertise in teaching, mentoring, and curriculum development. She has also contributed to academia through her published book in the domain of Internet of Things, reflecting her commitment to emerging technologies and innovative learning.
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
                                label="Qualification"
                                value="Ph.D. (Pursuing), M.E. – Computer Science and Engineering, M.Sc. – Software Engineering"
                            />
                            {/* <DetailItem
                                label="Area of Interest"
                                value="IoT-based Smart Systems, AI-driven Applications, Data Analytics in Education, Web Application Development, Software Engineering Practices"
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
                            description="Research interests focusing on intelligent systems, emerging technologies, and data-driven approaches in education and software development."
                        />

                        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                            <div className="grid gap-3 sm:grid-cols-2">
                                {researchInterests.map((interest, index) => (
                                    <div
                                        key={interest}
                                        className="flex items-start gap-4 border border-[#E8E1D5] bg-[#FAF7F2] p-5 transition-colors hover:border-[#D2B87C]"
                                    >
                                        <span className="font-serif text-lg text-[#B49A66]">
                                            0{index + 1}
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
                            description="Courses handled across different academic years, programmes, and branches."
                        />

                        <div className="mb-5 flex items-center gap-3">
                            <BookOpen
                                size={18}
                                className="text-[#927B4D]"
                                strokeWidth={1.5}
                            />
                            <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#927B4D]">
                                7 Courses Listed
                            </p>
                        </div>

                        <DataTable
                            headers={[
                                "Sl. No.",
                                "Year",
                                "Stream",
                                "Branch",
                                "Subject",
                            ]}
                            widths={[
                                "10%",
                                "14%",
                                "16%",
                                "20%",
                                "40%",
                            ]}
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
                            title="Publications & Books"
                            description="Book publication and academic contributions."
                        />

                        <div className="space-y-4">
                            {publications.map((publication, index) => (
                                <article
                                    key={publication.title}
                                    className="grid gap-4 border border-[#E8E1D5] bg-white p-5 transition-colors hover:border-[#D2B87C] sm:grid-cols-[85px_1fr] sm:gap-6 sm:p-6"
                                >
                                    <div className="flex items-center gap-3 sm:block">
                                        <span className="font-serif text-2xl text-[#927B4D]">
                                            {publication.year}
                                        </span>
                                        <span className="h-px w-8 bg-[#D2B87C] sm:mt-3 sm:block" />
                                    </div>

                                    <div>
                                        <p className="text-sm leading-7 text-[#4F4D55]">
                                            {publication.title}
                                        </p>
                                        <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#A18A5B]">
                                            {publication.type}
                                        </p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Professional Experience Section */}
                <section
                    id="experience"
                    className="scroll-mt-24 bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="05"
                            eyebrow="Career & Experience"
                            title="Professional Experience"
                            description="Academic, teaching, and mentoring experience."
                        />

                        <div className="grid gap-4 md:grid-cols-2">
                            {professionalExperience.map((experience, index) => (
                                <article
                                    key={experience.role}
                                    className="relative overflow-hidden border border-[#E4DCCE] bg-white p-6 transition-colors hover:border-[#D2B87C] sm:p-7"
                                >
                                    <div className="absolute right-0 top-0 h-16 w-16 border-b border-l border-[#D2B87C]/30" />

                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#F5F0E6] text-[#927B4D]">
                                            <BriefcaseBusiness
                                                size={20}
                                                strokeWidth={1.4}
                                            />
                                        </div>

                                        {experience.duration && (
                                            <span className="border border-[#D2B87C]/50 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#927B4D]">
                                                {experience.duration}
                                            </span>
                                        )}
                                    </div>

                                    <h3 className="mt-6 font-serif text-xl leading-snug text-[#20235A]">
                                        {experience.role}
                                    </h3>

                                    <p className="mt-3 text-xs leading-6 text-[#69666B]">
                                        {experience.description}
                                    </p>

                                    <p className="mt-5 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#A18A5B]">
                                        Experience {String(index + 1).padStart(2, "0")}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technical Skills Section */}
                <section
                    id="skills"
                    className="scroll-mt-24 bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="06"
                            eyebrow="Technical Expertise"
                            title="Technical Skills"
                            description="Programming, web technologies, and academic skills."
                        />

                        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                            {technicalSkills.map((group, index) => (
                                <article
                                    key={group.category}
                                    className="border border-[#E8E1D5] bg-[#FAF7F2] p-6 transition-colors hover:border-[#D2B87C] sm:p-7"
                                >
                                    <div className="flex h-11 w-11 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                                        {index === 0 ? (
                                            <Code2 size={21} strokeWidth={1.5} />
                                        ) : index === 1 ? (
                                            <Wrench size={21} strokeWidth={1.5} />
                                        ) : (
                                            <GraduationCap size={21} strokeWidth={1.5} />
                                        )}
                                    </div>

                                    <h3 className="mt-5 font-serif text-xl text-[#20235A]">
                                        {group.category}
                                    </h3>

                                    <div className="mt-5 flex flex-wrap gap-2">
                                        {group.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="border border-[#D2B87C]/50 bg-white px-3 py-2 text-[10px] tracking-wide text-[#55535B]"
                                            >
                                                {skill}
                                            </span>
                                        ))}
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
