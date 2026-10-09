import Link from "next/link";
import {
    ArrowUpRight,
    BellRing,
    Building2,
    FileText,
    Landmark,
    Users,
    ShieldCheck,
    GraduationCap,
    Scale,
    BookOpen,
    ClipboardCheck,
    HeartHandshake,
    Home,
    WalletCards,
    UserRoundCheck,
    SearchCheck,
    CalendarCheck,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import React from "react";

const committees = [
    {
        id: "01",
        title: "Academic Council Committee",
        description:
            "Academic planning, coordination and institutional academic development.",
        icon: GraduationCap,
        href: "https://ncerc.ac.in/documents/committee/Academic%20Council.pdf",
    },
    {
        id: "02",
        title: "Admission Committee",
        description:
            "Coordinates admission-related activities and supports a transparent admission process.",
        icon: ClipboardCheck,
        href: "https://ncerc.ac.in/documents/committee/Admission%20Committee.pdf",
    },
    {
        id: "03",
        title: "Anti-ragging Committee",
        description:
            "Works towards maintaining a safe, respectful and ragging-free campus environment.",
        icon: ShieldCheck,
        href: "https://ncerc.ac.in/documents/committee/Anti-ragging%20.pdf",
    },
    {
        id: "04",
        title: "College Council Committee",
        description:
            "Supports institutional coordination and important college-level activities.",
        icon: Landmark,
        href: "https://ncerc.ac.in/documents/committee/College%20Council.pdf",
    },
    {
        id: "05",
        title: "Committee for SC/ST",
        description:
            "Supports student welfare and institutional initiatives concerning SC/ST communities.",
        icon: Users,
        href: "https://ncerc.ac.in/documents/committee/Committee%20for%20SCST.pdf",
    },
    {
        id: "06",
        title: "Examination Committee",
        description:
            "Coordinates examination-related activities and academic assessment processes.",
        icon: FileText,
        href: "https://ncerc.ac.in/documents/committee/Examination%20Committee.pdf",
    },
    {
        id: "07",
        title: "Executive Committee of Alumni Association",
        description:
            "Facilitates alumni engagement, coordination and association activities.",
        icon: UserRoundCheck,
        href: "https://ncerc.ac.in/documents/committee/Executive%20Committee%20of%20Alumni%20Association.pdf",
    },
    {
        id: "08",
        title: "Executive Committee of PTA",
        description:
            "Supports coordination between parents, teachers and the institution.",
        icon: HeartHandshake,
        href: "https://ncerc.ac.in/documents/committee/Executive%20Committee%20of%20PTA.pdf",
    },
    {
        id: "09",
        title: "Finance Committee",
        description:
            "Supports institutional financial planning, review and related activities.",
        icon: WalletCards,
        href: "https://ncerc.ac.in/documents/committee/Finance%20Committee.pdf",
    },
    {
        id: "10",
        title: "Governing Body Committee",
        description:
            "Provides institutional governance and strategic oversight.",
        icon: Building2,
        href: "https://ncerc.ac.in/documents/committee/Governing%20Body.pdf",
    },
    {
        id: "11",
        title: "Grievance Redressal Committee for Staff",
        description:
            "Provides a structured mechanism for addressing staff grievances.",
        icon: Scale,
        href: "https://ncerc.ac.in/documents/committee/Grievance%20Redressal%20Committee%20for%20%20Staff.pdf",
    },
    {
        id: "12",
        title: "Hostel Committee Men",
        description:
            "Coordinates administration and welfare-related activities for men's hostels.",
        icon: Home,
        href: "https://ncerc.ac.in/documents/committee/Hostel%20Committee%20Men.pdf",
    },
    {
        id: "13",
        title: "Hostel Committee Women",
        description:
            "Coordinates administration and welfare-related activities for women's hostels.",
        icon: Home,
        href: "https://ncerc.ac.in/documents/committee/Hostel%20Committee%20Women.pdf",
    },
    {
        id: "14",
        title: "Internal Complaint Committee",
        description:
            "Supports a safe campus environment and addresses complaints through the prescribed institutional mechanism.",
        icon: ShieldCheck,
        href: "https://ncerc.ac.in/documents/committee/Internal%20Complaint%20Committee.pdf",
    },
    {
        id: "15",
        title: "IQAC 2025-26",
        description:
            "Supports quality assurance and continuous improvement initiatives across the institution.",
        icon: SearchCheck,
        href: "https://ncerc.ac.in/documents/committee/IQAC%20%202025-26-.pdf",
    },
    {
        id: "16",
        title: "Library Committee",
        description:
            "Supports the development, coordination and effective functioning of library services.",
        icon: BookOpen,
        href: "https://ncerc.ac.in/documents/committee/Library%20Committee.pdf",
    },
    {
        id: "17",
        title: "Planning and Monitoring Committee",
        description:
            "Supports institutional planning, implementation and monitoring of development activities.",
        icon: CalendarCheck,
        href: "https://ncerc.ac.in/documents/committee/Planning%20and%20Monitoring%20Committee.pdf",
    },
    {
        id: "18",
        title: "Student Grievance Redressal Committee",
        description:
            "Provides an institutional mechanism for receiving and addressing student grievances.",
        icon: HeartHandshake,
        href: "https://ncerc.ac.in/documents/committee/Student%20Grievance%20Redressal%20Committee.pdf",
    },
];

const page = () => {
    return (
        <>
            <SiteHeader />

            <main className="overflow-hidden bg-[#FAF7F2] text-[#1E1917]">

                {/* =====================================================
                    HERO
                ===================================================== */}

                <section className="relative overflow-hidden bg-[#20235A]">

                    {/* Decorative Background */}

                    <div className="pointer-events-none absolute inset-0">

                        <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full border border-[#D2B87C]/10" />

                        <div className="absolute -right-20 -top-20 h-[360px] w-[360px] rounded-full border border-[#D2B87C]/10" />

                        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#D2B87C]/10 blur-3xl" />

                        <div className="absolute right-[25%] top-[30%] h-32 w-32 rounded-full bg-[#D2B87C]/5 blur-3xl" />

                    </div>

                    <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-24 sm:px-8 lg:px-12 lg:pb-20 lg:pt-28">

                        <div className="grid gap-12 lg:grid-cols-[1fr_0.7fr] lg:items-end">

                            {/* Hero Content */}

                            <div>

                                <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#D2B87C]">

                                    <span className="h-px w-12 bg-[#D2B87C]" />

                                    Institutional Governance

                                </div>

                                <h1 className="mt-7 max-w-4xl font-serif text-5xl leading-[1] tracking-tight text-white sm:text-6xl lg:text-8xl">

                                    Committees

                                    <span className="block text-[#D2B87C]">
                                        & Councils.
                                    </span>

                                </h1>

                                <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">

                                    Explore the institutional committees responsible
                                    for academic coordination, student welfare,
                                    governance, quality assurance and campus
                                    development at NCERC.

                                </p>

                            </div>

                            {/* Hero Side Panel */}

                            <div className="lg:pl-10">

                                <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm sm:p-9">

                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D2B87C] text-[#20235A]">

                                        <BellRing className="h-7 w-7" />

                                    </div>

                                    <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">

                                        Institutional Framework

                                    </p>

                                    <p className="mt-3 font-serif text-3xl leading-tight text-white">

                                        Structured governance for a stronger institution.

                                    </p>

                                    <div className="mt-7 border-t border-white/10 pt-6">

                                        <div className="flex items-center justify-between">

                                            <span className="text-sm text-white/60">
                                                Listed Committees
                                            </span>

                                            <span className="font-serif text-3xl text-[#D2B87C]">
                                                18
                                            </span>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    INTRODUCTION
                ===================================================== */}

                <section className="bg-[#FAF7F2]">

                    <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">

                        <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr]">

                            {/* Left */}

                            <div>

                                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8F7746]">

                                    Institutional Committees

                                </p>

                                <h2 className="mt-4 max-w-xl font-serif text-4xl leading-tight text-[#20235A] sm:text-5xl">

                                    Working together for academic and institutional excellence.

                                </h2>

                                <div className="mt-9 flex items-center gap-4">

                                    <span className="font-serif text-6xl text-[#D2B87C]">
                                        18
                                    </span>

                                    <div className="h-12 w-px bg-[#E3DED4]" />

                                    <p className="max-w-[190px] text-sm leading-6 text-[#6B6257]">

                                        Committees supporting different areas of
                                        institutional administration and development.

                                    </p>

                                </div>

                            </div>


                            {/* Right */}

                            <div className="max-w-3xl">

                                <p className="text-xl leading-9 text-[#1E1917]">

                                    NCERC has established various committees and
                                    councils to support the effective functioning of
                                    academic, administrative and student-focused
                                    activities.

                                </p>

                                <p className="mt-7 text-base leading-8 text-[#6B6257]">

                                    These committees contribute to academic planning,
                                    admissions, examinations, quality assurance,
                                    student welfare, grievance redressal, library
                                    services, hostel administration and institutional
                                    governance.

                                </p>

                                <p className="mt-6 text-base leading-8 text-[#6B6257]">

                                    The respective committee documents can be accessed
                                    below for detailed information about their
                                    composition and responsibilities.

                                </p>

                                <div className="mt-9 flex flex-wrap gap-3">

                                    {[
                                        "Academic",
                                        "Governance",
                                        "Student Welfare",
                                        "Quality Assurance",
                                        "Administration",
                                        "Grievance Redressal",
                                    ].map((item) => (

                                        <span
                                            key={item}
                                            className="rounded-full border border-[#E3DED4] bg-white px-4 py-2 text-sm font-medium text-[#6B6257]"
                                        >
                                            {item}
                                        </span>

                                    ))}

                                </div>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    COMMITTEE DIRECTORY
                ===================================================== */}
                <section className="bg-white">
                    <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">

                        {/* Section Heading */}
                        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                            <div className="max-w-3xl">
                                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                    Committee Directory
                                </p>

                                <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-[#20235A] sm:text-5xl">
                                    Explore the institutional committees.
                                </h2>

                                <p className="mt-5 max-w-2xl text-base leading-8 text-[#6B6257]">
                                    Browse the official committee documents and access detailed
                                    information about their roles, responsibilities and composition.
                                </p>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#20235A] text-[#D2B87C]">
                                    <FileText className="h-5 w-5" />
                                </div>

                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6B6257]">
                                        Documents
                                    </p>
                                    <p className="mt-1 text-sm font-medium text-[#1E1917]">
                                        Official NCERC Resources
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Committee Cards */}
                        <div className="mt-12 grid items-stretch gap-5 md:grid-cols-2 lg:mt-14 lg:grid-cols-3">
                            {committees.map((committee) => {
                                const Icon = committee.icon;

                                return (
                                    <a
                                        key={committee.id}
                                        href={committee.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-[#E3DED4] bg-[#FAF7F2] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#D2B87C] hover:shadow-xl sm:p-8"
                                    >
                                        {/* Decorative Number */}
                                        <span className="pointer-events-none absolute -right-2 -top-5 font-display text-[100px] leading-none text-[#20235A]/[0.035] transition-colors duration-300 group-hover:text-[#D2B87C]/20">
                                            {committee.id}
                                        </span>

                                        {/* Card Icon and Action */}
                                        <div className="relative flex items-start justify-between">
                                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#20235A] text-[#D2B87C] transition-colors duration-300 group-hover:bg-[#D2B87C] group-hover:text-[#20235A]">
                                                <Icon className="h-6 w-6" />
                                            </div>

                                            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E3DED4] bg-white text-[#6B6257] transition-all duration-300 group-hover:border-[#20235A] group-hover:bg-[#20235A] group-hover:text-white">
                                                <ArrowUpRight className="h-4 w-4" />
                                            </div>
                                        </div>

                                        {/* Card Content */}
                                        <div className="relative mt-8">
                                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                                Committee {committee.id}
                                            </p>

                                            <h3 className="mt-3 font-display text-2xl font-semibold leading-tight text-[#20235A]">
                                                {committee.title}
                                            </h3>

                                            <p className="mt-4 text-sm leading-7 text-[#6B6257]">
                                                {committee.description}
                                            </p>

                                            <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#20235A] transition-colors group-hover:text-[#8F7746]">
                                                View Document
                                                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                            </div>
                                        </div>
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </section>
                {/* =====================================================
                    INFORMATION STRIP
                ===================================================== */}
                <section className="bg-white">
                    <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">

                        {/* Section Heading */}
                        <div className="mb-12 max-w-3xl">
                            <div className="flex items-center gap-3">
                                <span className="h-px w-10 bg-[#D2B87C]" />
                                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746] sm:text-sm">
                                    Institutional Framework
                                </p>
                            </div>

                            <h2 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-tight text-[#20235A] sm:text-5xl lg:text-6xl">
                                Committees &amp;{" "}
                                <span className="text-[#8F7746]">Responsibilities</span>
                            </h2>

                            <div className="mt-6 h-px w-20 bg-[#D2B87C]" />

                            <p className="mt-6 max-w-2xl text-base leading-8 text-[#6B6257] sm:text-lg">
                                NCERC&apos;s institutional committees support academic
                                coordination, student welfare and effective governance,
                                contributing to a structured and supportive campus environment.
                            </p>
                        </div>

                        {/* Committee Cards */}
                        <div className="grid gap-5 md:grid-cols-3">

                            {/* Academic */}
                            <div className="rounded-3xl border border-[#E3DED4] bg-[#FAF7F2] p-7 transition-colors duration-300 hover:border-[#D2B87C]">
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#8F7746]">
                                    <GraduationCap className="h-5 w-5" />
                                </div>

                                <h3 className="mt-6 font-display text-2xl font-semibold text-[#20235A]">
                                    Academic Coordination
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-[#6B6257]">
                                    Committees support academic planning, examinations,
                                    admissions and institutional quality initiatives.
                                </p>
                            </div>

                            {/* Welfare */}
                            <div className="rounded-3xl border border-[#E3DED4] bg-[#FAF7F2] p-7 transition-colors duration-300 hover:border-[#D2B87C]">
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#8F7746]">
                                    <Users className="h-5 w-5" />
                                </div>

                                <h3 className="mt-6 font-display text-2xl font-semibold text-[#20235A]">
                                    Student Welfare
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-[#6B6257]">
                                    Welfare-focused committees contribute to student support,
                                    grievances, hostels and campus engagement.
                                </p>
                            </div>

                            {/* Governance */}
                            <div className="rounded-3xl border border-[#E3DED4] bg-[#FAF7F2] p-7 transition-colors duration-300 hover:border-[#D2B87C]">
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#8F7746]">
                                    <Landmark className="h-5 w-5" />
                                </div>

                                <h3 className="mt-6 font-display text-2xl font-semibold text-[#20235A]">
                                    Institutional Governance
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-[#6B6257]">
                                    Governance committees contribute to institutional
                                    administration, planning, finance and quality assurance.
                                </p>
                            </div>

                        </div>
                    </div>
                </section>
                {/* =====================================================
                    DARK INFORMATION SECTION
                ===================================================== */}

                <section className="bg-[#20235A]">

                    <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">

                        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

                            <div>

                                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">

                                    Institutional Framework

                                </p>

                                <h2 className="mt-4 max-w-xl font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">

                                    A collaborative approach to institutional development.

                                </h2>

                            </div>


                            <div className="grid gap-4 sm:grid-cols-3">

                                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">

                                    <GraduationCap className="h-6 w-6 text-[#D2B87C]" />

                                    <p className="mt-5 font-serif text-2xl text-white">
                                        Academic
                                    </p>

                                    <p className="mt-2 text-sm leading-6 text-white/60">
                                        Supporting academic planning and quality.
                                    </p>

                                </div>


                                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">

                                    <Users className="h-6 w-6 text-[#D2B87C]" />

                                    <p className="mt-5 font-serif text-2xl text-white">
                                        Welfare
                                    </p>

                                    <p className="mt-2 text-sm leading-6 text-white/60">
                                        Supporting students and campus communities.
                                    </p>

                                </div>


                                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">

                                    <Landmark className="h-6 w-6 text-[#D2B87C]" />

                                    <p className="mt-5 font-serif text-2xl text-white">
                                        Governance
                                    </p>

                                    <p className="mt-2 text-sm leading-6 text-white/60">
                                        Supporting institutional administration.
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    QUICK ACCESS
                ===================================================== */}

                <section className="bg-[#FAF7F2]">

                    <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">

                        <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">

                            <div>

                                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8F7746]">

                                    Institutional Information

                                </p>

                                <h2 className="mt-4 font-serif text-3xl text-[#20235A] sm:text-4xl">

                                    Explore more institutional resources.

                                </h2>

                            </div>

                            <Link
                                href="/academics/library"
                                className="inline-flex w-fit items-center gap-2 rounded-full bg-[#20235A] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#D2B87C] hover:text-[#20235A]"
                            >

                                Explore Library

                                <ArrowUpRight className="h-4 w-4" />

                            </Link>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    FOOTER
                ===================================================== */}

                <FooterSection />

            </main>
        </>
    );
};

export default page;