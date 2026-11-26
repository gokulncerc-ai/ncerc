
"use client";

import React from "react";
import {
    ArrowDown,
    GraduationCap,
    Microscope,
    UserRound,
    BriefcaseBusiness,
    BookOpen,
    Award,
    Lightbulb,
    Code2,
    Cpu,
    FileText,
    Wrench,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../../../DepartmentNav/DepartmentNavigation";

const areasOfInterest = [
    "Image Processing",
    "VLSI Design",
    "Embedded Systems",
    "Digital Electronics",
    "Analog and Mixed Signal Circuits",
    "Control Systems",
    "Computer Programming",
    "Web Development",
];

const subjectsHandled = [
    "Image Processing Technique",
    "Advanced Data Structures",
    "Programming in Solid State Devices",
    "MEMS",
    "VLSI Design",
    "Computer Programming Lab",
    "Digital Lab",
    "Electronics Lab",
    "Analog and Mixed MOS Circuits",
    "Control Systems",
    "Embedded Systems",
];

const technicalSkills = [
    {
        category: "Programming Languages",
        skills: ["C", "C++", "Java", ".NET", "SQL", "VB"],
    },
    {
        category: "Scripting",
        skills: ["JavaScript", "HTML", "XML", "Perl"],
    },
    {
        category: "Tools",
        skills: ["MATLAB", "Xilinx", "Proteus"],
    },
    {
        category: "Databases",
        skills: ["SQL Server", "Oracle"],
    },
];

const profileSections = [
    { id: "about", label: "About Me" },
    { id: "academics", label: "Academics" },
    { id: "experience", label: "Experience" },
    { id: "interests", label: "Research Interests" },
    { id: "teaching", label: "Subjects Handled" },
    { id: "skills", label: "Technical Skills" },
    { id: "publications", label: "Publications" },
    { id: "projects", label: "Projects & Certifications" },
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

export default function DennaFacultyPage() {
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
                                Department of CSE (AI & ML)
                            </p>

                            <h1 className="mt-4 font-serif text-4xl font-normal leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                                Denna Paul
                            </h1>

                            <p className="mt-3 font-serif text-lg italic text-[#D2B87C] sm:text-xl">
                                Assistant Professor
                            </p>

                            <p className="mt-2 text-sm text-white/75">
                                M.Tech (VLSI & Embedded Systems)
                            </p>

                            <div className="mt-7 flex flex-wrap gap-3">
                                <span className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80">
                                    Department of CSE (AI & ML)
                                </span>
                                <span className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80">
                                    VLSI & Embedded Systems
                                </span>
                            </div>

                            <div className="mt-8 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#D2B87C]" />
                                <span className="text-[10px] uppercase tracking-[0.18em] text-white/50">
                                    Academic & Professional Profile
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
                                        <p className="mt-1 text-xs text-white/90">
                                            M.Tech, B.Tech
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
                                            Specialization
                                        </p>
                                        <p className="mt-1 text-xs text-white/90">
                                            VLSI & Embedded Systems
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <BriefcaseBusiness
                                        size={19}
                                        className="shrink-0 text-[#D2B87C]"
                                        strokeWidth={1.5}
                                    />
                                    <div>
                                        <p className="text-[9px] uppercase tracking-[0.13em] text-white/45">
                                            Industry Experience
                                        </p>
                                        <p className="mt-1 text-xs text-white/90">
                                            Systems Engineer – Infosys
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
                                title="About Denna Paul"
                                description="Academic experience, professional background, and technical expertise in engineering and computing."
                            />

                            <div className="space-y-5 text-sm leading-8 text-[#55535B]">
                                <p>
                                    A dedicated academic professional with teaching experience in engineering institutions and strong industry background as a Systems Engineer. Possesses expertise in Electronics and Communication Engineering with specialization in VLSI and Embedded Systems.
                                </p>

                                <p>
                                    Experienced in software development, web applications, and academic instruction with strong communication and classroom management skills.
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
                                value="CSE (AI & ML)"
                            />
                            <DetailItem
                                label="Qualification"
                                value="M.Tech – VLSI & Embedded Systems"
                            />
                            <DetailItem
                                label="NCERC Unique ID"
                                value="4580"
                            />
                        </aside>
                    </div>
                </section>

                {/* Academic Background */}
                <section
                    id="academics"
                    className="scroll-mt-24 bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="02"
                            eyebrow="Academic Exploration"
                            title="Educational Qualification"
                            description="Academic qualifications and educational milestones."
                        />

                        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                            <div className="space-y-7">
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
                                        M.Tech – VLSI & Embedded Systems
                                    </h3>
                                    <p className="mt-2 text-sm leading-7 text-[#55535B]">
                                        MG University
                                    </p>
                                    <p className="mt-2 text-xs text-[#927B4D]">
                                        2014 · CGPA: 8.35
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
                                        B.Tech – Electronics and Communication Engineering
                                    </h3>
                                    <p className="mt-2 text-sm leading-7 text-[#55535B]">
                                        University of Calicut
                                    </p>
                                    <p className="mt-2 text-xs text-[#927B4D]">
                                        2007 · 72.53%
                                    </p>
                                </div>
                            </div>

                            <div className="border border-[#E8E1D5] bg-[#FAF7F2] p-6 sm:p-8">
                                <div className="flex items-center gap-3">
                                    <BookOpen
                                        size={20}
                                        className="text-[#927B4D]"
                                        strokeWidth={1.5}
                                    />
                                    <h3 className="font-serif text-xl text-[#20235A]">
                                        School Education
                                    </h3>
                                </div>

                                <div className="mt-6 border-b border-[#E5DED1] pb-5">
                                    <p className="text-[9px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                        Higher Secondary
                                    </p>
                                    <p className="mt-2 font-serif text-lg text-[#20235A]">
                                        12th – CBSE
                                    </p>
                                    <p className="mt-2 text-xs text-[#927B4D]">
                                        85.2%
                                    </p>
                                </div>

                                <div className="mt-5">
                                    <p className="text-[9px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                        Secondary Education
                                    </p>
                                    <p className="mt-2 font-serif text-lg text-[#20235A]">
                                        10th – CBSE
                                    </p>
                                    <p className="mt-2 text-xs text-[#927B4D]">
                                        82%
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Professional Experience */}
                <section
                    id="experience"
                    className="scroll-mt-24 bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="03"
                            eyebrow="Professional Journey"
                            title="Professional Experience"
                            description="Academic teaching experience and industry exposure in engineering and software development."
                        />

                        <div className="relative border-l border-[#D2B87C] pl-7 sm:pl-10">
                            <div className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-[#B49A66]" />

                            <div className="border border-[#E8E1D5] bg-white p-6 sm:p-8">
                                <p className="text-[9px] font-medium uppercase tracking-[0.16em] text-[#927B4D]">
                                    Academic Experience
                                </p>

                                <div className="mt-5 space-y-6">
                                    <div>
                                        <h3 className="font-serif text-xl text-[#20235A]">
                                            Assistant Professor (Adhoc)
                                        </h3>
                                        <p className="mt-2 text-sm leading-7 text-[#55535B]">
                                            NSS College of Engineering,
                                            Palakkad
                                        </p>
                                    </div>

                                    <div className="border-t border-[#EAE4D9] pt-5">
                                        <h3 className="font-serif text-xl text-[#20235A]">
                                            Assistant Professor (Adhoc)
                                        </h3>
                                        <p className="mt-2 text-sm leading-7 text-[#55535B]">
                                            Government Polytechnic College,
                                            Palakkad
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative mt-7">
                                <div className="absolute -left-[35px] top-7 h-2.5 w-2.5 rounded-full bg-[#B49A66] sm:-left-[43px]" />

                                <div className="border border-[#E8E1D5] bg-white p-6 sm:p-8">
                                    <div className="flex flex-wrap items-center justify-between gap-3">
                                        <span className="text-[9px] font-medium uppercase tracking-[0.16em] text-[#927B4D]">
                                            Industry Experience
                                        </span>
                                        <span className="border border-[#D8CDB8] bg-[#FAF7F2] px-3 py-1.5 text-[9px] uppercase tracking-[0.12em] text-[#77747A]">
                                            Dec 2007 – Mar 2011
                                        </span>
                                    </div>

                                    <h3 className="mt-4 font-serif text-2xl text-[#20235A]">
                                        Infosys Technologies Ltd.
                                    </h3>

                                    <p className="mt-2 text-sm leading-7 text-[#55535B]">
                                        Bangalore
                                    </p>

                                    <div className="mt-6 border-t border-[#EAE4D9] pt-5">
                                        <p className="text-[9px] font-medium uppercase tracking-[0.14em] text-[#927B4D]">
                                            Designation
                                        </p>
                                        <h4 className="mt-2 font-serif text-lg text-[#20235A]">
                                            Systems Engineer
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Areas of Interest */}
                <section
                    id="interests"
                    className="scroll-mt-24 bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="04"
                            eyebrow="Academic Exploration"
                            title="Areas of Interest"
                            description="Academic and technical interests across electronics, embedded technologies, computing and software development."
                        />

                        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                            {areasOfInterest.map((interest, index) => (
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
                </section>

                {/* Subjects Handled */}
                <section
                    id="teaching"
                    className="scroll-mt-24 bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="05"
                            eyebrow="Academic Engagement"
                            title="Subjects Handled"
                            description="Courses and laboratory subjects handled across engineering and computing disciplines."
                        />

                        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                            {subjectsHandled.map((subject, index) => (
                                <div
                                    key={subject}
                                    className="flex items-start gap-4 border border-[#E8E1D5] bg-white p-5 transition-colors hover:border-[#D2B87C]"
                                >
                                    <span className="font-serif text-lg text-[#B49A66]">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    <p className="pt-1 text-sm leading-6 text-[#393947]">
                                        {subject}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technical Skills */}
                <section
                    id="skills"
                    className="scroll-mt-24 bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="06"
                            eyebrow="Technical Expertise"
                            title="Technical Skills"
                            description="Programming languages, scripting technologies, development tools and database platforms."
                        />

                        <div className="grid gap-5 md:grid-cols-2">
                            {technicalSkills.map((group, index) => (
                                <div
                                    key={group.category}
                                    className="border border-[#E8E1D5] bg-[#FAF7F2] p-6 sm:p-7"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center bg-white text-[#927B4D]">
                                            {index === 0 && (
                                                <Code2 size={20} strokeWidth={1.5} />
                                            )}
                                            {index === 1 && (
                                                <FileText size={20} strokeWidth={1.5} />
                                            )}
                                            {index === 2 && (
                                                <Wrench size={20} strokeWidth={1.5} />
                                            )}
                                            {index === 3 && (
                                                <Cpu size={20} strokeWidth={1.5} />
                                            )}
                                        </div>

                                        <h3 className="font-serif text-xl text-[#20235A]">
                                            {group.category}
                                        </h3>
                                    </div>

                                    <div className="mt-6 flex flex-wrap gap-2">
                                        {group.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="border border-[#E4DCCE] bg-white px-3 py-2 text-[10px] tracking-wide text-[#393947]"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Publications */}
                <section
                    id="publications"
                    className="scroll-mt-24 bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="07"
                            eyebrow="Research Contributions"
                            title="Publications"
                            description="Research contributions in engineering research and electronics and communication."
                        />

                        <div className="grid gap-5 md:grid-cols-2">
                            <article className="border border-[#E8E1D5] bg-white p-6 sm:p-7">
                                <div className="flex h-11 w-11 items-center justify-center bg-[#FAF7F2] text-[#927B4D]">
                                    <FileText size={21} strokeWidth={1.5} />
                                </div>

                                <p className="mt-5 text-[9px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                    International Journal Publication
                                </p>

                                <h3 className="mt-2 font-serif text-xl leading-8 text-[#20235A]">
                                    International Journal of Engineering
                                    Research and Technology (IJERT)
                                </h3>

                                <p className="mt-4 text-xs text-[#927B4D]">
                                    February 2015
                                </p>
                            </article>

                            <article className="border border-[#E8E1D5] bg-white p-6 sm:p-7">
                                <div className="flex h-11 w-11 items-center justify-center bg-[#FAF7F2] text-[#927B4D]">
                                    <BookOpen size={21} strokeWidth={1.5} />
                                </div>

                                <p className="mt-5 text-[9px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                    Conference Publications
                                </p>

                                <h3 className="mt-2 font-serif text-xl leading-8 text-[#20235A]">
                                    National Conferences in Electronics and
                                    Communication Engineering
                                </h3>
                            </article>
                        </div>
                    </div>
                </section>

                {/* Projects & Certifications */}
                <section
                    id="projects"
                    className="scroll-mt-24 bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="08"
                            eyebrow="Technical Work"
                            title="Projects & Certifications"
                            description="Selected technical projects and professional certification."
                        />

                        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                            <div>
                                <div className="mb-6 flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center bg-[#F5F0E6] text-[#927B4D]">
                                        <Microscope size={20} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="font-serif text-xl text-[#20235A]">
                                        Projects
                                    </h3>
                                </div>

                                <div className="space-y-4">
                                    <div className="border border-[#E8E1D5] bg-[#FAF7F2] p-6">
                                        <p className="text-[9px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                            Project 01
                                        </p>
                                        <h4 className="mt-3 font-serif text-lg leading-7 text-[#20235A]">
                                            FPGA-Based Object Tracking System
                                            using MATLAB and Kalman Filter
                                        </h4>
                                    </div>

                                    <div className="border border-[#E8E1D5] bg-[#FAF7F2] p-6">
                                        <p className="text-[9px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                            Project 02
                                        </p>
                                        <h4 className="mt-3 font-serif text-lg leading-7 text-[#20235A]">
                                            Adaptive Background Subtraction
                                            for Visual Object Tracking on FPGA
                                        </h4>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="mb-6 flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center bg-[#F5F0E6] text-[#927B4D]">
                                        <Award size={20} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="font-serif text-xl text-[#20235A]">
                                        Certification
                                    </h3>
                                </div>

                                <div className="border border-[#E8E1D5] bg-[#FAF7F2] p-6 sm:p-7">
                                    <p className="text-[9px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                        Professional Certification
                                    </p>

                                    <h4 className="mt-3 font-serif text-xl leading-8 text-[#20235A]">
                                        C Programming and Assembly Language
                                    </h4>

                                    <p className="mt-4 text-sm leading-7 text-[#55535B]">
                                        Certified on C Programming and Assembly
                                        Language, conducted by NPTEL partnered
                                        by IIT Madras.
                                    </p>
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
