
"use client";

import Link from "next/link";
import {
    ArrowDown,
    ArrowUpRight,
    ExternalLink,
    GraduationCap,
    Lightbulb,
    Microscope,
    ShieldCheck,
    UserRound, Award,
    BriefcaseBusiness,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../../../DepartmentNav/DepartmentNavigation";

const qualifications = [
    "Ph.D. – Computer Science and Engineering",
    "M.Tech. – Computer Science and Engineering",
    "B.E. – Computer Science and Engineering",
];

const professionalExperience = [
    {
        period: "1998",
        role: "Lecturer",
        institution: "College of Engineering, Adoor",
        duration: "2 Years",
        description:
            "Started her professional career as a Lecturer and served at the institution for 2 years.",
    },
    {
        period: "After 2000",
        role: "Lecturer and Assistant Professor",
        institution: "Noorul Islam College of Engineering",
        duration: "4 Years 10 Months",
        description:
            "Joined Noorul Islam College of Engineering, where she completed her graduation, as a Lecturer and was subsequently promoted as Assistant Professor.",
    },
    {
        period: "2006",
        role: "Head of the Department – CSE",
        institution: "Narayanaguru College of Engineering, Manjalumoodu",
        duration: "3 Years 3 Months",
        description:
            "Invited to become the Head of the Department of Computer Science and Engineering.",
    },
    {
        period: "2009",
        role: "Associate Professor and HOD – CSE",
        institution: "UKF College of Engineering and Technology, Parippally",
        duration: "13 Years 4 Months",
        description:
            "Served as Associate Professor and Head of the Department of Computer Science and Engineering.",
    },
    {
        period: "2022",
        role: "Principal",
        institution: "Rajadhani Institute of Science & Technology, Palakkad",
        duration: "2 Years 10 Months",
        description:
            "Joined the institution as Principal and contributed to academic and institutional administration.",
    },
    {
        period: "Present",
        role: "Professor and Dean",
        institution: "Nehru College of Engineering and Research Centre",
        duration: "Present",
        description:
            "Continuing her academic and leadership contributions at NCERC.",
    },
];

const profileSections = [
    { id: "about", label: "About" },
    { id: "research", label: "Research" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
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
    value: React.ReactNode;
}) {
    return (
        <div className="border-b border-[#EAE4D9] py-4 last:border-b-0">
            <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#927B4D]">
                {label}
            </p>
            <div className="mt-2 break-words text-sm leading-6 text-[#393947]">
                {value}
            </div>
        </div>
    );
}

export default function RamaniKFacultyPage() {
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
                                Dr. Ramani K
                            </h1>

                            <p className="mt-3 font-serif text-lg italic text-[#D2B87C] sm:text-xl">
                                Professor and Dean
                            </p>

                            <p className="mt-2 text-xs leading-6 text-white/55">
                                Nehru College of Engineering and Research Centre,
                                Thrissur, Kerala
                            </p>

                            <div className="mt-7 flex flex-wrap gap-3">
                                {qualifications.map((qualification) => (
                                    <span
                                        key={qualification}
                                        className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80"
                                    >
                                        {qualification}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-8 flex flex-wrap items-center gap-3">
                                <span className="h-px w-10 bg-[#D2B87C]" />
                                <span className="text-[10px] uppercase tracking-[0.18em] text-white/50">
                                    NCERC Unique ID: 4521
                                </span>
                            </div>
                        </div>

                        {/* Academic Profile Card */}
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
                                            Ph.D., M.Tech., B.E.
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
                                            Socio-Technical Projects
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
                                            Professional Experience
                                        </p>
                                        <p className="mt-1 text-xs text-white/90">
                                            27+ Years
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
                                title="About Dr. Ramani K"
                                description="Academic background, professional journey, and contributions to academic leadership."
                            />

                            <div className="space-y-5 text-sm leading-8 text-[#55535B]">
                                <p>
                                    Dr. Ramani K is the Professor and Dean of CSE Dept at NCERC. She has completed her B.E. (CSE) from Noorul Islam College of Engineering, Kumaracoil, Tamilnadu during 1994 -1998. She obtained her M.Tech. (CSE) from National Institute of Technology, Tiruchirappalli, Tamilnadu during 2002 - 2004. She is awarded with Ph.D (CSE) on 24th Jan 2020 by MS University, Tirunelveli, Tamilnadu.
                                </p>

                                <p>
                                    She started her professional career as Lecturer at College of Engineering, Adoor during 1998 and served there for 2 years. She joined Noorul Islam College of Engineering where she completed her graduation to offer her service as Lecturer and got promoted as Assistant Professor & served there for a period of 4 years 10 months.
                                </p>

                                <p>
                                    During 2006, she was invited to become the HOD of CSE Department of Narayanaguru College of Engineering, Manjalumoodu where she contributed her services for 3 years 3 months. During 2009, she moved to UKF College of Engineering and Technology, Parippally, Kollam District and dedicated her services as Associate Professor and HOD of CSE Department for 13 years 4 months.
                                </p>

                                <p>
                                    During 2022, she joined Rajadhani Institute of Science & Technology, Palakkad as Principal and achieved her excellence in administration role for 2 years 10 months.   She is continuing her excellence at NCERC with an overall experience of 27+ years in various Engineering Colleges.

                                </p>

                                <p>
                                    She possesses a multifaceted skill set that blends deep technical expertise in the field of CSE with strategic academic leadership, high-level academic administration, departmental roadmap planning and implementation and mentorship quality for tailoring strategies for both gifted students and slow learners.
                                </p>
                            </div>
                        </div>

                        {/* Professional Details */}
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
                                value="Professor and Dean"
                            />
                            <DetailItem
                                label="Department"
                                value="Computer Science and Engineering"
                            />
                            <DetailItem
                                label="Institution"
                                value="Nehru College of Engineering and Research Centre, Thrissur, Kerala"
                            />
                            <DetailItem
                                label="Qualification"
                                value="Ph.D. – CSE, M.Tech. – CSE, B.E. – CSE"
                            />
                            <DetailItem
                                label="NCERC Unique ID"
                                value="4521"
                            />
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
                            description="Exploring computer science-related socio-technical projects through real-world challenges and community perspectives."
                        />

                        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                            <div className="border border-[#E8E1D5] bg-[#FAF7F2] p-6 sm:p-8">
                                <div className="flex items-center gap-3">
                                    <Microscope
                                        size={20}
                                        className="text-[#927B4D]"
                                        strokeWidth={1.5}
                                    />
                                    <h3 className="font-serif text-xl text-[#20235A]">
                                        Research Interests
                                    </h3>
                                </div>

                                <p className="mt-5 text-sm leading-8 text-[#55535B]">
                                    Interested in taking up computer
                                    science-related socio-technical projects
                                    which can view real-world problems through
                                    the lens of both community behaviour and
                                    project development.
                                </p>

                                <div className="mt-6 flex items-center gap-3 border-t border-[#E5DED1] pt-5">
                                    <Lightbulb
                                        size={18}
                                        className="shrink-0 text-[#927B4D]"
                                        strokeWidth={1.5}
                                    />
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.13em] text-[#927B4D]">
                                        Research Direction
                                    </p>
                                </div>
                            </div>

                            <div className="border border-[#E8E1D5] bg-[#20235A] p-6 sm:p-8">
                                <div className="flex items-center gap-3">
                                    <Lightbulb
                                        size={20}
                                        className="text-[#D2B87C]"
                                        strokeWidth={1.5}
                                    />
                                    <h3 className="font-serif text-xl text-white">
                                        Key Focus Areas
                                    </h3>
                                </div>

                                <p className="mt-3 text-xs leading-6 text-white/55">
                                    Core themes reflected in her stated
                                    research interests.
                                </p>

                                <div className="mt-6 flex flex-wrap gap-2">
                                    {[
                                        "Computer Science",
                                        "Socio-Technical Projects",
                                        "Real-World Problems",
                                        "Community Behaviour",
                                        "Project Development",
                                    ].map((keyword) => (
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

                {/* Professional Experience */}
                <section
                    id="experience"
                    className="scroll-mt-24 bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="03"
                            eyebrow="Career Journey"
                            title="Professional Experience"
                            description="A professional journey spanning teaching, departmental leadership, and institutional administration."
                        />

                        <div className="mb-8 grid gap-4 sm:grid-cols-2">
                            <div className="border border-[#E8E1D5] bg-white p-6">
                                <div className="flex items-center gap-3">
                                    <BriefcaseBusiness
                                        size={20}
                                        className="text-[#927B4D]"
                                        strokeWidth={1.5}
                                    />
                                    <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#927B4D]">
                                        Overall Experience
                                    </p>
                                </div>
                                <p className="mt-4 font-serif text-4xl text-[#20235A]">
                                    27+ Years
                                </p>
                                <p className="mt-2 text-xs leading-6 text-[#69666B]">
                                    Experience in various engineering colleges.
                                </p>
                            </div>

                            <div className="border border-[#E8E1D5] bg-white p-6">
                                <div className="flex items-center gap-3">
                                    <Award
                                        size={20}
                                        className="text-[#927B4D]"
                                        strokeWidth={1.5}
                                    />
                                    <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#927B4D]">
                                        Current Position
                                    </p>
                                </div>
                                <p className="mt-4 font-serif text-2xl text-[#20235A]">
                                    Professor and Dean
                                </p>
                                <p className="mt-2 text-xs leading-6 text-[#69666B]">
                                    Department of Computer Science and Engineering, NCERC.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {professionalExperience.map((item, index) => (
                                <article
                                    key={`${item.period}-${item.institution}`}
                                    className="grid gap-4 border border-[#E8E1D5] bg-white p-5 transition-colors hover:border-[#D2B87C] sm:grid-cols-[100px_1fr] sm:gap-6 sm:p-6"
                                >
                                    <div className="flex items-center gap-3 sm:block">
                                        <span className="font-serif text-2xl text-[#927B4D]">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                        <span className="h-px w-8 bg-[#D2B87C] sm:mt-3 sm:block" />
                                        <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[#927B4D] sm:mt-3">
                                            {item.period}
                                        </p>
                                    </div>

                                    <div>
                                        <div className="flex flex-wrap items-start justify-between gap-3">
                                            <div>
                                                <h3 className="font-serif text-xl leading-7 text-[#20235A]">
                                                    {item.role}
                                                </h3>
                                                <p className="mt-2 text-xs font-semibold leading-6 text-[#927B4D]">
                                                    {item.institution}
                                                </p>
                                            </div>

                                            <span className="border border-[#E8E1D5] bg-[#FAF7F2] px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.1em] text-[#927B4D]">
                                                {item.duration}
                                            </span>
                                        </div>

                                        <p className="mt-4 text-xs leading-7 text-[#69666B]">
                                            {item.description}
                                        </p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Educational Qualifications */}
                <section
                    id="education"
                    className="scroll-mt-24 bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="04"
                            eyebrow="Academic Background"
                            title="Educational Qualifications"
                            description="Academic qualifications in Computer Science and Engineering."
                        />

                        <div className="grid gap-4 md:grid-cols-3">
                            {[
                                {
                                    degree: "Ph.D.",
                                    field: "Computer Science and Engineering",
                                    institution: "MS University, Tirunelveli, Tamilnadu",
                                    detail: "Awarded · 24 January 2020",
                                },
                                {
                                    degree: "M.Tech.",
                                    field: "Computer Science and Engineering",
                                    institution: "National Institute of Technology, Tiruchirappalli, Tamilnadu",
                                    detail: "2002–2004",
                                },
                                {
                                    degree: "B.E.",
                                    field: "Computer Science and Engineering",
                                    institution: "Noorul Islam College of Engineering, Kumaracoil, Tamilnadu",
                                    detail: "1994–1998",
                                },
                            ].map((item) => (
                                <div
                                    key={item.degree}
                                    className="group border border-[#E8E1D5] bg-[#FAF7F2] p-6 transition-colors hover:border-[#D2B87C] sm:p-7"
                                >
                                    <div className="mb-6 flex h-11 w-11 items-center justify-center bg-[#F5F0E6] text-[#927B4D] transition-colors group-hover:bg-[#20235A] group-hover:text-[#D2B87C]">
                                        <GraduationCap
                                            size={21}
                                            strokeWidth={1.5}
                                        />
                                    </div>

                                    <p className="font-serif text-3xl text-[#20235A]">
                                        {item.degree}
                                    </p>

                                    <h3 className="mt-3 text-sm font-semibold leading-6 text-[#393947]">
                                        {item.field}
                                    </h3>

                                    <p className="mt-4 text-xs leading-6 text-[#69666B]">
                                        {item.institution}
                                    </p>

                                    <div className="mt-6 border-t border-[#E5DED1] pt-4">
                                        <p className="text-[9px] font-semibold uppercase tracking-[0.13em] text-[#927B4D]">
                                            {item.detail}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Back to Faculty Directory */}
                <section className="bg-[#FAF7F2] px-5 py-10 sm:px-8 lg:px-12">
                    <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 border-t border-[#EAE4D9] pt-7 sm:flex-row sm:items-center">
                        <div>
                            <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#927B4D]">
                                Computer Science and Engineering
                            </p>
                            <p className="mt-2 font-serif text-xl text-[#20235A]">
                                Explore more faculty profiles
                            </p>
                        </div>

                        <Link
                            href="/department/computer-science-and-engineering/faculty-details"
                            className="inline-flex w-fit items-center gap-3 border border-[#20235A] px-5 py-3 text-[9px] font-semibold uppercase tracking-[0.13em] text-[#20235A] transition-colors hover:bg-[#20235A] hover:text-white"
                        >
                            Back to Faculty Directory
                            <ArrowUpRight size={14} />
                        </Link>
                    </div>
                </section>
            </main>

            <FooterSection />
        </>
    );
}
