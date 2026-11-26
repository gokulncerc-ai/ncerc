"use client";

import Link from "next/link";
import {
    ArrowLeft,
    ArrowUpRight,
    BookOpen,
    Award,
    GraduationCap,
    ShieldCheck,
    BriefcaseBusiness,
    FileText,
    CalendarDays,
    Network,
    Cloud,
    ChevronRight,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../../../DepartmentNav/DepartmentNavigation";

const coursesHandled = [
    {
        year: "2024–25",
        semester: "S4",
        batch: "2023",
        stream: "CSE A",
        subject: "Design & Engineering",
    },
    {
        year: "2024–25",
        semester: "S4",
        batch: "2023",
        stream: "CSE B",
        subject: "Database Management System",
    },
    {
        year: "2024–25",
        semester: "S4",
        batch: "2023",
        stream: "AI & ML",
        subject: "Design & Engineering",
    },
    {
        year: "2025–26",
        semester: "S3",
        batch: "2025",
        stream: "CSE A",
        subject: "Computer Organization and Architecture",
    },
    {
        year: "2025–26",
        semester: "S3",
        batch: "2025",
        stream: "CSE B",
        subject: "Computer Organization and Architecture",
    },
    {
        year: "2025–26",
        semester: "S6",
        batch: "2023",
        stream: "—",
        subject: "Algorithm Analysis and Design",
    },
    {
        year: "2025–26",
        semester: "S6",
        batch: "2023",
        stream: "—",
        subject: "Data Analytics",
    },
    {
        year: "2025–26",
        semester: "S4",
        batch: "2024",
        stream: "—",
        subject: "Engineering Ehics and Sustainable Development",
    },
];

const fdpPrograms = [
    {
        year: "2025",
        title:
            "Empowering Innovation: Mastering R Programming and AI Development Strategies",
    },
    {
        year: "2025",
        title: "Computer Vision with Vision Transformers",
    },
];

const patentDetails = {
    year: "2026",
    date: "20.02.2026",
    title:
        "Automated Employee Stress Prediction and Intervention Recommendation Using IoT and Deep Learning",
    publisher: "IP India",
};

const profileLinks = [
    { label: "About", href: "#about" },
    { label: "Research Interests", href: "#research" },
    { label: "Courses Handled", href: "#courses" },
    { label: "FDP Attended", href: "#fdp" },
    { label: "Patent", href: "#patent" },
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
        <div className="mb-9">
            <div className="mb-3 flex items-center gap-3">
                <span className="text-[11px] font-semibold tracking-[0.18em] text-[#927B4D]">
                    {number}
                </span>
                <span className="h-px w-8 bg-[#D2B87C]" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#927B4D]">
                    {eyebrow}
                </span>
            </div>

            <h2 className="font-serif text-2xl font-normal leading-tight tracking-tight text-[#20235A] sm:text-3xl">
                {title}
            </h2>

            {description && (
                <p className="mt-3 max-w-2xl text-sm leading-7 text-[#66636A]">
                    {description}
                </p>
            )}

            <div className="mt-5 h-px w-14 bg-[#D2B87C]" />
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
        <div className="border-l border-[#D2B87C] pl-4">
            <p className="mb-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#927B4D]">
                {label}
            </p>
            <p className="text-sm leading-6 text-[#33313A]">{value}</p>
        </div>
    );
}

export default function GracemolThankachanFacultyPage() {
    return (
        <main className="min-h-screen overflow-x-hidden bg-white">
            <SiteHeader />


            {/* HERO SECTION */}
            <section className="relative isolate overflow-hidden bg-[#20235A]">
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="absolute -right-32 -top-40 h-[440px] w-[440px] rounded-full border border-white/[0.07]" />
                    <div className="absolute -right-16 -top-24 h-[310px] w-[310px] rounded-full border border-[#D2B87C]/20" />
                    <div className="absolute -bottom-48 left-[38%] h-[400px] w-[400px] rounded-full border border-white/[0.05]" />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#20235A] via-[#20235A] to-[#171A49]" />
                </div>

                <div className="relative mx-auto max-w-7xl px-5 pb-14 pt-16 sm:px-8 sm:pb-20 sm:pt-20 lg:px-12">
                    <div className="grid items-center gap-12 lg:grid-cols-[1fr_320px]">
                        <div>
                            <div className="mb-7 flex items-center gap-3">
                                <span className="h-px w-9 bg-[#D2B87C]" />
                                <span className="text-[10px] font-semibold uppercase tracking-[0.23em] text-[#D2B87C]">
                                    Faculty Profile
                                </span>
                            </div>

                            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/55">
                                Department of Computer Science and Engineering
                            </p>

                            <h1 className="max-w-3xl font-serif text-4xl font-normal leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                                Ms. Gracemol
                                <br className="hidden sm:block" /> Thankachan
                            </h1>

                            <p className="mt-5 font-serif text-lg italic text-[#D2B87C] sm:text-xl">
                                Assistant Professor
                            </p>

                            <p className="mt-2 text-xs tracking-wide text-white/65">
                                Nehru College of Engineering and Research Centre
                            </p>

                            <div className="mt-8 flex flex-wrap gap-2">
                                <span className="border border-[#D2B87C]/40 bg-white/[0.06] px-3 py-2 text-[10px] font-medium tracking-wide text-white/90">
                                    M.Tech – Biometrics & Cyber Security
                                </span>
                                <span className="border border-white/15 bg-white/[0.05] px-3 py-2 text-[10px] font-medium tracking-wide text-white/80">
                                    Cybersecurity
                                </span>
                                <span className="border border-white/15 bg-white/[0.05] px-3 py-2 text-[10px] font-medium tracking-wide text-white/80">
                                    GRC Practitioner
                                </span>
                            </div>

                            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-white/15 pt-5">
                                <div>
                                    <p className="text-[9px] uppercase tracking-[0.16em] text-white/45">
                                        NCERC Unique ID
                                    </p>
                                    <p className="mt-1 text-xs font-medium tracking-wider text-white">
                                        4311
                                    </p>
                                </div>

                                <div className="h-7 w-px bg-white/20" />

                                <div>
                                    <p className="text-[9px] uppercase tracking-[0.16em] text-white/45">
                                        Qualification
                                    </p>
                                    <p className="mt-1 text-xs font-medium text-white">
                                        M.Tech
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* PROFILE INFORMATION CARD */}
                        <div className="relative">
                            <div className="absolute -inset-3 border border-[#D2B87C]/20" />

                            <div className="relative border border-white/10 bg-white/[0.07] p-7 backdrop-blur-sm">
                                <div className="mb-7 flex items-center justify-between">
                                    <div className="flex h-10 w-10 items-center justify-center border border-[#D2B87C]/40 text-[#D2B87C]">
                                        <GraduationCap size={19} strokeWidth={1.4} />
                                    </div>
                                    <span className="text-[9px] uppercase tracking-[0.18em] text-white/45">
                                        Academic Profile
                                    </span>
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <p className="mb-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#D2B87C]">
                                            Designation
                                        </p>
                                        <p className="text-sm text-white">
                                            Assistant Professor
                                        </p>
                                    </div>

                                    <div>
                                        <p className="mb-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#D2B87C]">
                                            Department
                                        </p>
                                        <p className="text-sm leading-6 text-white/85">
                                            Computer Science and Engineering
                                        </p>
                                    </div>

                                    <div>
                                        <p className="mb-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#D2B87C]">
                                            Specialization
                                        </p>
                                        <p className="text-sm leading-6 text-white/85">
                                            Biometrics & Cyber Security
                                        </p>
                                    </div>

                                    <div>
                                        <p className="mb-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#D2B87C]">
                                            Institution
                                        </p>
                                        <p className="text-sm leading-6 text-white/85">
                                            Nehru College of Engineering and Research Centre
                                        </p>
                                    </div>
                                </div>

                                <a
                                    href="#about"
                                    className="mt-8 flex items-center justify-between border-t border-white/15 pt-5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#D2B87C] transition-colors hover:text-white"
                                >
                                    Explore Profile
                                    <ArrowUpRight size={15} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-transparent via-[#D2B87C] to-transparent" />
            </section>
            <InnerHeader />

            {/* PROFILE NAVIGATION */}
            <nav className="sticky top-0 z-30 border-b border-[#20235A]/10 bg-white/95 backdrop-blur-md">
                <div className="mx-auto flex max-w-7xl items-center gap-7 overflow-x-auto px-5 py-4 sm:px-8 lg:px-12">
                    {profileLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="shrink-0 text-[9px] font-semibold uppercase tracking-[0.13em] text-[#55535B] transition-colors hover:text-[#927B4D]"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </nav>

            {/* MAIN CONTENT */}
            <div className="bg-white">
                <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
                    {/* ABOUT */}
                    <section
                        id="about"
                        className="scroll-mt-24 border-b border-[#20235A]/10 py-14 sm:py-20"
                    >
                        <SectionHeading
                            number="01"
                            eyebrow="Faculty Overview"
                            title="About"
                            description="Academic commitment shaped by industry experience and a focus on secure technology."
                        />

                        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr]">
                            <div>
                                <p className="text-justify text-sm leading-8 text-[#55535B]">
                                    A dedicated Cybersecurity educator and GRC practitioner who brings authentic industry
                                    experience into the classroom. Currently serving as Assistant Professor at Nehru College of
                                    Engineering, I am deeply invested in academic excellence, student development, and institutional
                                    quality — backed by hands-on expertise in Governance, Risk & Compliance and ISO 27001. I
                                    believe that great engineering education begins with mentors who have lived in the field, and I
                                    strive every day to be that bridge for my students.
                                </p>
                            </div>

                            <div className="grid gap-6 border border-[#20235A]/10 bg-[#FAF7F2] p-6 sm:grid-cols-2 lg:grid-cols-1">
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
                                    value="M.Tech – Biometrics & Cyber Security"
                                />
                                <DetailItem
                                    label="NCERC Unique ID"
                                    value="4311"
                                />
                            </div>
                        </div>
                    </section>

                    {/* RESEARCH INTERESTS */}
                    <section
                        id="research"
                        className="scroll-mt-24 border-b border-[#20235A]/10 py-14 sm:py-20"
                    >
                        <SectionHeading
                            number="02"
                            eyebrow="Academic Focus"
                            title="Area of Interest"
                            description="Research and academic interests centred on secure, connected and efficient computing systems."
                        />

                        <div className="grid gap-4 sm:grid-cols-3">
                            <div className="group border border-[#20235A]/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D2B87C] hover:shadow-lg hover:shadow-[#20235A]/[0.05]">
                                <div className="mb-5 flex h-10 w-10 items-center justify-center bg-[#20235A]/[0.05] text-[#20235A] transition-colors group-hover:bg-[#20235A] group-hover:text-[#D2B87C]">
                                    <ShieldCheck size={19} strokeWidth={1.5} />
                                </div>
                                <h3 className="font-serif text-xl font-normal text-[#20235A]">
                                    Cyber Security
                                </h3>
                                <p className="mt-3 text-xs leading-6 text-[#66636A]">
                                    Focus on developing secure and efficient systems.
                                </p>
                            </div>

                            <div className="group border border-[#20235A]/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D2B87C] hover:shadow-lg hover:shadow-[#20235A]/[0.05]">
                                <div className="mb-5 flex h-10 w-10 items-center justify-center bg-[#20235A]/[0.05] text-[#20235A] transition-colors group-hover:bg-[#20235A] group-hover:text-[#D2B87C]">
                                    <Cloud size={19} strokeWidth={1.5} />
                                </div>
                                <h3 className="font-serif text-xl font-normal text-[#20235A]">
                                    Cloud Computing
                                </h3>
                                <p className="mt-3 text-xs leading-6 text-[#66636A]">
                                    Interest in cloud technologies and efficient computing
                                    environments.
                                </p>
                            </div>

                            <div className="group border border-[#20235A]/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D2B87C] hover:shadow-lg hover:shadow-[#20235A]/[0.05]">
                                <div className="mb-5 flex h-10 w-10 items-center justify-center bg-[#20235A]/[0.05] text-[#20235A] transition-colors group-hover:bg-[#20235A] group-hover:text-[#D2B87C]">
                                    <Network size={19} strokeWidth={1.5} />
                                </div>
                                <h3 className="font-serif text-xl font-normal text-[#20235A]">
                                    Computer Networks
                                </h3>
                                <p className="mt-3 text-xs leading-6 text-[#66636A]">
                                    Focus on network technologies and secure communication
                                    systems.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* COURSES HANDLED */}
                    <section
                        id="courses"
                        className="scroll-mt-24 border-b border-[#20235A]/10 py-14 sm:py-20"
                    >
                        <SectionHeading
                            number="03"
                            eyebrow="Teaching Contributions"
                            title="Courses Handled"
                            description="Courses handled across academic years, streams and semesters."
                        />

                        <div className="overflow-hidden border border-[#20235A]/10">
                            <div className="flex items-center gap-3 border-b border-[#20235A]/10 bg-[#FAF7F2] px-5 py-4">
                                <BookOpen size={17} className="text-[#927B4D]" />
                                <h3 className="font-serif text-lg font-normal text-[#20235A]">
                                    Academic Teaching Record
                                </h3>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="w-full min-w-[760px] border-collapse text-left">
                                    <thead>
                                        <tr className="bg-[#20235A] text-white">
                                            <th className="px-4 py-4 text-[9px] font-semibold uppercase tracking-[0.12em]">
                                                S.No.
                                            </th>
                                            <th className="px-4 py-4 text-[9px] font-semibold uppercase tracking-[0.12em]">
                                                Year
                                            </th>
                                            <th className="px-4 py-4 text-[9px] font-semibold uppercase tracking-[0.12em]">
                                                Stream
                                            </th>
                                            <th className="px-4 py-4 text-[9px] font-semibold uppercase tracking-[0.12em]">
                                                Semester
                                            </th>
                                            <th className="px-4 py-4 text-[9px] font-semibold uppercase tracking-[0.12em]">
                                                Batch
                                            </th>
                                            <th className="px-4 py-4 text-[9px] font-semibold uppercase tracking-[0.12em]">
                                                Subject
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {coursesHandled.map((course, index) => (
                                            <tr
                                                key={`${course.year}-${course.subject}-${index}`}
                                                className="border-b border-[#20235A]/10 transition-colors last:border-b-0 hover:bg-[#FAF7F2]"
                                            >
                                                <td className="px-4 py-4 text-xs text-[#927B4D]">
                                                    {String(index + 1).padStart(2, "0")}
                                                </td>
                                                <td className="px-4 py-4 text-xs text-[#55535B]">
                                                    {course.year}
                                                </td>
                                                <td className="px-4 py-4 text-xs text-[#55535B]">
                                                    {course.stream}
                                                </td>
                                                <td className="px-4 py-4 text-xs text-[#55535B]">
                                                    {course.semester}
                                                </td>
                                                <td className="px-4 py-4 text-xs text-[#55535B]">
                                                    {course.batch}
                                                </td>
                                                <td className="px-4 py-4 text-xs font-medium text-[#33313A]">
                                                    {course.subject}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className="border-t border-[#20235A]/10 bg-[#FAF7F2] px-5 py-3">
                                <p className="text-[10px] leading-5 text-[#77737A]">
                                    Academic course details are presented as supplied.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* FDP ATTENDED */}
                    <section
                        id="fdp"
                        className="scroll-mt-24 border-b border-[#20235A]/10 py-14 sm:py-20"
                    >
                        <SectionHeading
                            number="04"
                            eyebrow="Professional Development"
                            title="FDP Attended"
                            description="Faculty development programmes and learning initiatives."
                        />

                        <div className="grid gap-4 sm:grid-cols-2">
                            {fdpPrograms.map((program, index) => (
                                <div
                                    key={program.title}
                                    className="group flex gap-5 border border-[#20235A]/10 bg-white p-6 transition-all duration-300 hover:border-[#D2B87C] hover:shadow-lg hover:shadow-[#20235A]/[0.05]"
                                >
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                                        <Award size={19} strokeWidth={1.5} />
                                    </div>

                                    <div>
                                        <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#927B4D]">
                                            Faculty Development Programme · {program.year}
                                        </p>
                                        <h3 className="font-serif text-lg font-normal leading-7 text-[#20235A]">
                                            {program.title}
                                        </h3>
                                        <div className="mt-4 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#927B4D]">
                                            Programme {String(index + 1).padStart(2, "0")}
                                            <ChevronRight size={12} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* PATENT */}
                    <section
                        id="patent"
                        className="scroll-mt-24 py-14 sm:py-20"
                    >
                        <SectionHeading
                            number="05"
                            eyebrow="Innovation & Intellectual Property"
                            title="Publication of Patent"
                            description="Patent publication details."
                        />

                        <div className="relative overflow-hidden border border-[#20235A]/10 bg-[#FAF7F2] p-6 sm:p-9">
                            <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full border border-[#D2B87C]/30" />
                            <div className="pointer-events-none absolute -right-2 -top-2 h-32 w-32 rounded-full border border-[#D2B87C]/20" />

                            <div className="relative">
                                <div className="mb-7 flex items-center justify-between gap-4">
                                    <div className="flex h-11 w-11 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                                        <FileText size={20} strokeWidth={1.5} />
                                    </div>

                                    <span className="border border-[#D2B87C]/60 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#927B4D]">
                                        Patent · {patentDetails.year}
                                    </span>
                                </div>

                                <h3 className="max-w-3xl font-serif text-xl font-normal leading-8 text-[#20235A] sm:text-2xl">
                                    {patentDetails.title}
                                </h3>

                                <div className="mt-8 grid gap-6 border-t border-[#20235A]/10 pt-6 sm:grid-cols-3">
                                    <div className="flex items-start gap-3">
                                        <CalendarDays
                                            size={15}
                                            className="mt-0.5 shrink-0 text-[#927B4D]"
                                        />
                                        <div>
                                            <p className="mb-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#927B4D]">
                                                Year
                                            </p>
                                            <p className="text-sm text-[#33313A]">
                                                {patentDetails.year}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <CalendarDays
                                            size={15}
                                            className="mt-0.5 shrink-0 text-[#927B4D]"
                                        />
                                        <div>
                                            <p className="mb-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#927B4D]">
                                                Date of Publication
                                            </p>
                                            <p className="text-sm text-[#33313A]">
                                                {patentDetails.date}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <BriefcaseBusiness
                                            size={15}
                                            className="mt-0.5 shrink-0 text-[#927B4D]"
                                        />
                                        <div>
                                            <p className="mb-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#927B4D]">
                                                Published By
                                            </p>
                                            <p className="text-sm text-[#33313A]">
                                                {patentDetails.publisher}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

               
                </div>
            </div>

            <FooterSection />
        </main>
    );
}