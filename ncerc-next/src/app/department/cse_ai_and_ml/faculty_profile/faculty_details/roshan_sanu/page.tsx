
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
    FileText,
    ShieldCheck,
    Smartphone,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../../../DepartmentNav/DepartmentNavigation";

const areasOfInterest = [
    {
        title: "Machine Learning",
        description:
            "An area of interest focused on intelligent systems, learning algorithms and data-driven approaches.",
        icon: Lightbulb,
    },
    {
        title: "Cyber Security",
        description:
            "An area of interest focused on digital security and the protection of information systems.",
        icon: ShieldCheck,
    },
    {
        title: "Mobile Computing",
        description:
            "An area of interest focused on mobile technologies and modern computing environments.",
        icon: Smartphone,
    },
];

const profileSections = [
    { id: "about", label: "About Me" },
    { id: "academics", label: "Academics" },
    { id: "experience", label: "Experience" },
    { id: "interests", label: "Research Interests" },
    { id: "research", label: "Research & Publications" },
];

type SectionHeadingProps = {
    number: string;
    eyebrow: string;
    title: string;
    description?: string;
};

type DetailItemProps = {
    label: string;
    value: React.ReactNode;
};

const SectionHeading = ({
    number,
    eyebrow,
    title,
    description,
}: SectionHeadingProps) => {
    return (
        <div className="mb-10">
            <div className="mb-4 flex items-center gap-3">
                <span className="font-sans text-[11px] tracking-[0.18em] text-[#927B4D]">
                    {number}
                </span>

                <span className="h-px w-10 bg-[#D2B87C]" />

                <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#927B4D]">
                    {eyebrow}
                </span>
            </div>

            <h2 className="font-serif text-2xl font-normal leading-tight text-[#20235A] sm:text-3xl">
                {title}
            </h2>

            {description && (
                <p className="mt-3 max-w-2xl text-sm font-normal leading-7 text-[#69666B]">
                    {description}
                </p>
            )}

            <div className="mt-6 h-[2px] w-12 bg-[#D2B87C]" />
        </div>
    );
};

const DetailItem = ({ label, value }: DetailItemProps) => {
    return (
        <div className="border-b border-[#EAE4D9] py-4 last:border-b-0">
            <p className="mb-1 font-sans text-[10px] uppercase tracking-[0.16em] text-[#927B4D]">
                {label}
            </p>

            <div className="text-sm font-normal leading-6 text-[#393947]">
                {value}
            </div>
        </div>
    );
};

export default function RoshanSanuFacultyPage() {
    return (
        <>
            <SiteHeader />

            {/* HERO SECTION */}
            <section className="relative overflow-hidden bg-gradient-to-br from-[#20235A] via-[#25295F] to-[#171A48] px-5 pb-16 pt-32 text-white sm:px-8 sm:pb-20 lg:px-12">
                <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-white/10" />
                <div className="pointer-events-none absolute -right-10 -top-10 h-52 w-52 rounded-full border border-white/10" />
                <div className="pointer-events-none absolute -bottom-32 left-[35%] h-72 w-72 rounded-full border border-white/10" />

                <div className="relative mx-auto max-w-7xl">
                    <div className="grid items-center gap-12 lg:grid-cols-[1fr_280px]">
                        <div>
                            <div className="mb-7 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#D2B87C]" />
                                <p className="text-[11px] uppercase tracking-[0.24em] text-[#D2B87C]">
                                    Faculty Profile
                                </p>
                            </div>

                            <h1 className="max-w-3xl font-serif text-4xl font-normal leading-[1.15] sm:text-5xl lg:text-6xl">
                                Roshan Sanu Y
                            </h1>

                            <p className="mt-5 text-base font-normal tracking-wide text-white/85 sm:text-lg">
                                Assistant Professor
                            </p>

                            <p className="mt-2 max-w-xl text-sm leading-7 text-white/65">
                                Department of Computer Science and Engineering
                                <span className="block">
                                    (Artificial Intelligence and Machine Learning)
                                </span>
                            </p>

                            <div className="mt-8 flex flex-wrap gap-3">
                                <span className="border border-white/20 px-4 py-2 text-[11px] tracking-wide text-white/85">
                                    Department of CSE (AI &amp; ML)
                                </span>

                                <span className="border border-[#D2B87C]/50 px-4 py-2 text-[11px] tracking-wide text-[#E7D5AC]">
                                    14 Years of Teaching Experience
                                </span>
                            </div>

                            <a
                                href="#about"
                                className="mt-10 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-[#D2B87C] transition-colors hover:text-white"
                            >
                                Explore Profile
                                <ArrowDown size={15} strokeWidth={1.5} />
                            </a>
                        </div>

                        {/* ACADEMIC PROFILE PANEL */}
                        <div className="border border-white/15 bg-white/[0.05] p-6 backdrop-blur-sm">
                            <p className="mb-6 text-[10px] uppercase tracking-[0.2em] text-[#D2B87C]">
                                Academic Profile
                            </p>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <GraduationCap
                                        size={20}
                                        strokeWidth={1.3}
                                        className="shrink-0 text-[#D2B87C]"
                                    />
                                    <div>
                                        <p className="text-xs text-white/50">
                                            Doctoral Studies
                                        </p>
                                        <p className="mt-1 text-sm leading-6 text-white/90">
                                            Anna University
                                        </p>
                                        <p className="text-xs leading-5 text-white/55">
                                            Currently Pursuing
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <BookOpen
                                        size={19}
                                        strokeWidth={1.3}
                                        className="shrink-0 text-[#D2B87C]"
                                    />
                                    <div>
                                        <p className="text-xs text-white/50">
                                            Postgraduate
                                        </p>
                                        <p className="mt-1 text-sm leading-6 text-white/90">
                                            M.Tech – Information Technology
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <BriefcaseBusiness
                                        size={19}
                                        strokeWidth={1.3}
                                        className="shrink-0 text-[#D2B87C]"
                                    />
                                    <div>
                                        <p className="text-xs text-white/50">
                                            Professional Experience
                                        </p>
                                        <p className="mt-1 text-sm leading-6 text-white/90">
                                            14 Years
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <Award
                                        size={19}
                                        strokeWidth={1.3}
                                        className="shrink-0 text-[#D2B87C]"
                                    />
                                    <div>
                                        <p className="text-xs text-white/50">
                                            Research Contributions
                                        </p>
                                        <p className="mt-1 text-sm leading-6 text-white/90">
                                            Publications &amp; 2 Patents
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 h-[3px] w-full bg-[#D2B87C]" />
            </section>

            <main className="bg-white [&_p]:text-justify">
                <InnerHeader />

                {/* PROFILE NAVIGATION */}
                <nav className="sticky top-0 z-30 border-b border-[#EAE4D9] bg-white/95 backdrop-blur-md">
                    <div className="mx-auto flex max-w-7xl gap-7 overflow-x-auto px-5 py-5 sm:px-8 lg:px-12">
                        {profileSections.map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                className="shrink-0 text-[10px] uppercase tracking-[0.13em] text-[#69666B] transition-colors hover:text-[#927B4D]"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </nav>

                {/* ABOUT SECTION */}
                <section
                    id="about"
                    className="scroll-mt-20 px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="01"
                            eyebrow="Introduction"
                            title="About Roshan Sanu Y"
                            description="An overview of academic background, professional experience and areas of expertise."
                        />

                        <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
                            <div>
                                <p className="text-[14px] font-normal leading-8 text-[#55535A]">
                                    Mr. Roshan Sanu Y is working as an Assistant
                                    Professor in the Department of Computer
                                    Science and Engineering (Artificial
                                    Intelligence and Machine Learning), Nehru
                                    College of Engineering and Research Centre,
                                    Kerala.
                                </p>

                                <p className="mt-5 text-[14px] font-normal leading-8 text-[#55535A]">
                                    He is currently pursuing Ph. D from Anna University in the Faculty of Computer Science and Information Engineering. He has completed Post Graduate, M.Tech in Information Technology from Anna University.
                                </p>

                                <p className="mt-5 text-[14px] font-normal leading-8 text-[#55535A]">
                                    He has 14 years of teaching experience which includes 2 years in Poly Technic College and 12 years in various reputed Institutions from Kerala, Hyderabad and Bangalore.
                                </p>

                                <p className="mt-5 text-[14px] font-normal leading-8 text-[#55535A]">
                                    He has published Scopus-indexed articles in reputed international journals and presented at IEEE and AIP conferences and published 2 patents. His areas of interest include Machine Learning, Cyber Security Mobile Computing.

                                </p>
                            </div>

                            <aside className="h-fit border border-[#EAE4D9] bg-[#FAF7F2] px-6 py-2">
                                <DetailItem
                                    label="Designation"
                                    value="Assistant Professor"
                                />

                                <DetailItem
                                    label="Department"
                                    value="Computer Science and Engineering (AI & ML)"
                                />

                                <DetailItem
                                    label="Institution"
                                    value="Nehru College of Engineering and Research Centre"
                                />

                                <DetailItem
                                    label="Qualification"
                                    value="Ph.D. Pursuing, M.Tech, B.Tech"
                                />

                                <DetailItem
                                    label="Teaching Experience"
                                    value="14 Years"
                                />
                            </aside>
                        </div>
                    </div>
                </section>

                {/* ACADEMIC QUALIFICATION SECTION */}
                <section
                    id="academics"
                    className="scroll-mt-20 bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="02"
                            eyebrow="Academic Background"
                            title="Educational Qualifications"
                            description="Academic qualifications and ongoing doctoral studies."
                        />

                        <div className="grid gap-5 md:grid-cols-3">
                            <div className="border border-[#EAE4D9] bg-white p-6 sm:p-7">
                                <div className="mb-8 flex h-11 w-11 items-center justify-center border border-[#D2B87C]/60 text-[#927B4D]">
                                    <GraduationCap
                                        size={21}
                                        strokeWidth={1.4}
                                    />
                                </div>

                                <p className="text-[10px] uppercase tracking-[0.16em] text-[#927B4D]">
                                    Doctoral Degree
                                </p>

                                <h3 className="mt-3 font-serif text-xl font-normal text-[#20235A]">
                                    Ph.D.
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-[#69666B]">
                                    Faculty of Computer Science and Information
                                    Engineering
                                </p>

                                <div className="mt-6 border-t border-[#EAE4D9] pt-4">
                                    <p className="text-xs text-[#393947]">
                                        Anna University
                                    </p>
                                    <p className="mt-2 text-[11px] text-[#927B4D]">
                                        Currently Pursuing
                                    </p>
                                </div>
                            </div>

                            <div className="border border-[#EAE4D9] bg-white p-6 sm:p-7">
                                <div className="mb-8 flex h-11 w-11 items-center justify-center border border-[#D2B87C]/60 text-[#927B4D]">
                                    <BookOpen
                                        size={20}
                                        strokeWidth={1.4}
                                    />
                                </div>

                                <p className="text-[10px] uppercase tracking-[0.16em] text-[#927B4D]">
                                    Postgraduate
                                </p>

                                <h3 className="mt-3 font-serif text-xl font-normal text-[#20235A]">
                                    M.Tech
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-[#69666B]">
                                    Information Technology
                                </p>

                                <div className="mt-6 border-t border-[#EAE4D9] pt-4">
                                    <p className="text-xs text-[#393947]">
                                        Anna University
                                    </p>
                                </div>
                            </div>

                            <div className="border border-[#EAE4D9] bg-white p-6 sm:p-7">
                                <div className="mb-8 flex h-11 w-11 items-center justify-center border border-[#D2B87C]/60 text-[#927B4D]">
                                    <Award
                                        size={20}
                                        strokeWidth={1.4}
                                    />
                                </div>

                                <p className="text-[10px] uppercase tracking-[0.16em] text-[#927B4D]">
                                    Undergraduate
                                </p>

                                <h3 className="mt-3 font-serif text-xl font-normal text-[#20235A]">
                                    B.Tech
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-[#69666B]">
                                    Information Technology
                                </p>

                                <div className="mt-6 border-t border-[#EAE4D9] pt-4">
                                    <p className="text-xs text-[#393947]">
                                        Nehru College of Engineering and
                                        Research Centre
                                    </p>
                                    <p className="mt-2 text-[11px] text-[#927B4D]">
                                        Affiliated to Calicut University
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* EXPERIENCE SECTION */}
                <section
                    id="experience"
                    className="scroll-mt-20 px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="03"
                            eyebrow="Professional Journey"
                            title="Teaching Experience"
                            description="Fourteen years of teaching experience across different educational institutions."
                        />

                        <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
                            <div className="border border-[#EAE4D9] bg-[#FAF7F2] p-7">
                                <p className="text-[10px] uppercase tracking-[0.17em] text-[#927B4D]">
                                    Total Experience
                                </p>

                                <p className="mt-4 font-serif text-6xl font-normal text-[#20235A]">
                                    14
                                </p>

                                <p className="mt-2 text-sm text-[#69666B]">
                                    Years of Teaching Experience
                                </p>

                                <div className="mt-7 h-px bg-[#D2B87C]" />

                                <div className="mt-6 flex items-center gap-3">
                                    <BriefcaseBusiness
                                        size={18}
                                        strokeWidth={1.4}
                                        className="text-[#927B4D]"
                                    />
                                    <span className="text-xs text-[#393947]">
                                        Academic Professional
                                    </span>
                                </div>
                            </div>

                            <div className="space-y-0">
                                <div className="border-b border-[#EAE4D9] py-7 first:pt-0">
                                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#D2B87C]/60 text-[#927B4D]">
                                            <BookOpen
                                                size={18}
                                                strokeWidth={1.4}
                                            />
                                        </div>

                                        <div>
                                            <p className="text-[10px] uppercase tracking-[0.16em] text-[#927B4D]">
                                                2 Years
                                            </p>

                                            <h3 className="mt-2 font-serif text-xl font-normal text-[#20235A]">
                                                Polytechnic College
                                            </h3>

                                            <p className="mt-2 text-sm leading-7 text-[#69666B]">
                                                Teaching experience in a
                                                Polytechnic College.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-b border-[#EAE4D9] py-7">
                                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#D2B87C]/60 text-[#927B4D]">
                                            <BriefcaseBusiness
                                                size={18}
                                                strokeWidth={1.4}
                                            />
                                        </div>

                                        <div>
                                            <p className="text-[10px] uppercase tracking-[0.16em] text-[#927B4D]">
                                                12 Years
                                            </p>

                                            <h3 className="mt-2 font-serif text-xl font-normal text-[#20235A]">
                                                Various Reputed Institutions
                                            </h3>

                                            <p className="mt-2 text-sm leading-7 text-[#69666B]">
                                                Teaching experience in various
                                                reputed institutions across
                                                Kerala, Hyderabad and
                                                Bangalore.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* RESEARCH INTERESTS SECTION */}
                <section
                    id="interests"
                    className="scroll-mt-20 bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="04"
                            eyebrow="Areas of Expertise"
                            title="Research Interests"
                            description="Key areas of academic and research interest."
                        />

                        <div className="grid gap-5 md:grid-cols-3">
                            {areasOfInterest.map((item, index) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={item.title}
                                        className="group border border-[#EAE4D9] bg-white p-7 transition-colors duration-300 hover:border-[#D2B87C]"
                                    >
                                        <div className="mb-8 flex items-center justify-between">
                                            <div className="flex h-11 w-11 items-center justify-center border border-[#D2B87C]/60 text-[#927B4D] transition-colors group-hover:bg-[#20235A] group-hover:text-white">
                                                <Icon
                                                    size={20}
                                                    strokeWidth={1.4}
                                                />
                                            </div>

                                            <span className="font-serif text-sm text-[#B5A27D]">
                                                0{index + 1}
                                            </span>
                                        </div>

                                        <h3 className="font-serif text-xl font-normal text-[#20235A]">
                                            {item.title}
                                        </h3>

                                        <p className="mt-3 text-sm leading-7 text-[#69666B]">
                                            {item.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* RESEARCH AND PUBLICATIONS SECTION */}
                <section
                    id="research"
                    className="scroll-mt-20 px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="05"
                            eyebrow="Research Contributions"
                            title="Publications, Conferences & Patents"
                            description="Research publications, conference presentations and patent contributions."
                        />

                        <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
                            <div className="space-y-0">
                                <div className="flex gap-5 border-b border-[#EAE4D9] py-6 first:pt-0">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#D2B87C]/60 text-[#927B4D]">
                                        <FileText
                                            size={20}
                                            strokeWidth={1.4}
                                        />
                                    </div>

                                    <div>
                                        <h3 className="font-serif text-xl font-normal text-[#20235A]">
                                            International Journal Publications
                                        </h3>

                                        <p className="mt-2 text-sm leading-7 text-[#69666B]">
                                            Published Scopus-indexed articles
                                            in reputed international journals.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-5 border-b border-[#EAE4D9] py-6">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#D2B87C]/60 text-[#927B4D]">
                                        <Microscope
                                            size={20}
                                            strokeWidth={1.4}
                                        />
                                    </div>

                                    <div>
                                        <h3 className="font-serif text-xl font-normal text-[#20235A]">
                                            Conference Presentations
                                        </h3>

                                        <p className="mt-2 text-sm leading-7 text-[#69666B]">
                                            Presented research papers at IEEE
                                            and AIP conferences.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-5 border-b border-[#EAE4D9] py-6">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#D2B87C]/60 text-[#927B4D]">
                                        <Award
                                            size={20}
                                            strokeWidth={1.4}
                                        />
                                    </div>

                                    <div>
                                        <h3 className="font-serif text-xl font-normal text-[#20235A]">
                                            Patents
                                        </h3>

                                        <p className="mt-2 text-sm leading-7 text-[#69666B]">
                                            Published 2 patents.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <aside className="h-fit bg-[#20235A] p-7 text-white">
                                <p className="text-[10px] uppercase tracking-[0.2em] text-[#D2B87C]">
                                    Research Snapshot
                                </p>

                                <div className="mt-8 border-b border-white/15 pb-6">
                                    <p className="font-serif text-4xl font-normal text-white">
                                        Scopus
                                    </p>
                                    <p className="mt-2 text-xs text-white/60">
                                        Indexed Journal Articles
                                    </p>
                                </div>

                                <div className="border-b border-white/15 py-6">
                                    <p className="font-serif text-4xl font-normal text-white">
                                        IEEE &amp; AIP
                                    </p>
                                    <p className="mt-2 text-xs text-white/60">
                                        Conference Presentations
                                    </p>
                                </div>

                                <div className="pt-6">
                                    <p className="font-serif text-4xl font-normal text-white">
                                        02
                                    </p>
                                    <p className="mt-2 text-xs text-white/60">
                                        Published Patents
                                    </p>
                                </div>
                            </aside>
                        </div>
                    </div>
                </section>

               
            </main>

            <FooterSection />
        </>
    );
}
