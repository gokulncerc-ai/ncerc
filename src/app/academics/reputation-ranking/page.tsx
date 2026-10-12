
"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import {
    ArrowDownRight,
    ArrowRight,
    Award,
    BookOpen,
    CheckCircle2,
    ExternalLink,
    FileText,
    GraduationCap,
    Landmark,
    Medal,
    ShieldCheck,
    TrendingUp,
    Trophy,
    Building2,
    Microscope,
} from "lucide-react";

const images = {
    hero: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=2000&q=85",
    recognition:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=85",
    academics:
        "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1200&q=85",
    research:
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=85",
    campus:
        "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1200&q=85",
    award:
        "https://images.unsplash.com/photo-1578269174936-2709b6aeb913?auto=format&fit=crop&w=1200&q=85",
};

const officialLinks = {
    kirf: "https://ncerc.ac.in/news/848",
    nirf: "https://ncerc.ac.in/nirf",
    accreditation: "https://ncerc.ac.in/accreditations.php",
    autonomy: "https://ncerc.ac.in/autonomous.php",
    nba: "https://ncerc.ac.in/news/852",
    rankHolders:
        "https://ncerc.ac.in/electrical-and-computer-engineering/university-rank-holders",
    downloads: "https://ncerc.ac.in/download",
    news: "https://ncerc.ac.in/",
};

const recognitionItems = [
    {
        number: "01",
        title: "Kerala Institutional Ranking Framework",
        description:
            "NCERC secured the 21st rank in the Kerala Institutional Ranking Framework (KIRF), instituted by the Kerala State Higher Education Council under the Department of Higher Education, Government of Kerala.",
        label: "KIRF · 2026",
        icon: Medal,
        href: officialLinks.kirf,
        linkText: "Read the announcement",
        image: images.recognition,
        imageAlt: "Students collaborating on an academic project",
    },
    {
        number: "02",
        title: "National Institutional Ranking Framework",
        description:
            "Explore NCERC's published NIRF submissions across available years and categories, including Engineering, Management, Innovation and Overall.",
        label: "NIRF REPORTS",
        icon: TrendingUp,
        href: officialLinks.nirf,
        linkText: "Explore NIRF reports",
        image: images.research,
        imageAlt: "Research equipment representing academic research",
    },
    {
        number: "03",
        title: "Accreditation and Quality Assurance",
        description:
            "Review the institution's published accreditation information, programme-level recognition and official institutional documents.",
        label: "ACCREDITATION",
        icon: ShieldCheck,
        href: officialLinks.accreditation,
        linkText: "View accreditation details",
        image: images.academics,
        imageAlt: "Students attending an academic event",
    },
];

const accreditationItems = [
    {
        number: "01",
        title: "NAAC",
        status: "A Grade",
        description:
            "NCERC reports re-accreditation with an A grade from the National Assessment and Accreditation Council.",
        icon: ShieldCheck,
    },
    {
        number: "02",
        title: "Autonomous Institution",
        status: "UGC recognition",
        description:
            "NCERC has been granted autonomous status, supporting academic flexibility and the continued development of its educational programmes.",
        icon: Landmark,
    },
    {
        number: "03",
        title: "NBA Accreditation",
        status: "Programme-level recognition",
        description:
            "The college publishes NBA recognition information for its programmes. Its March 2026 announcement reports NBA accreditation for Electronics and Communication Engineering and MCA for the 2026–2028 cycle. Refer to the official documents for current programme-specific validity.",
        icon: Award,
    },
    {
        number: "04",
        title: "ISO Certification",
        status: "ISO 9001:2015",
        description:
            "NCERC identifies itself as an ISO 9001:2015 certified institution in its official institutional information.",
        icon: CheckCircle2,
    },
];

const nirfReports = [
    {
        year: "2026",
        categories: ["Engineering", "Innovation", "Management", "Overall", "SDG"],
    },
    {
        year: "2025",
        categories: ["Engineering", "Innovation", "Management", "Overall", "SDG"],
    },
    {
        year: "2024",
        categories: ["Engineering", "Innovation", "Management", "Overall"],
    },
    {
        year: "2023",
        categories: ["Engineering", "Management", "Overall"],
    },
    {
        year: "2022",
        categories: ["Engineering", "Management", "Overall"],
    },
    {
        year: "2021",
        categories: ["Engineering", "Management", "Overall"],
    },
    {
        year: "2020",
        categories: ["Institutional submission"],
    },
];

const recognitionPrinciples = [
    {
        number: "01",
        title: "Academic quality",
        description:
            "A commitment to academic standards, structured learning and continuous improvement in teaching and evaluation.",
        icon: BookOpen,
    },
    {
        number: "02",
        title: "Research and innovation",
        description:
            "An academic environment that supports research activities, technical exploration and the development of practical solutions.",
        icon: Microscope,
    },
    {
        number: "03",
        title: "Student achievement",
        description:
            "Recognising university rank holders, academic accomplishments and student contributions across programmes.",
        icon: GraduationCap,
    },
];

const achievementHighlights = [
    {
        title: "University rank holders",
        description:
            "Explore published university rank-holder records and academic accomplishments across departments and batches.",
        image: images.award,
        imageAlt: "Academic awards and achievement",
        href: officialLinks.rankHolders,
        linkText: "Explore rank holders",
        icon: Trophy,
    },
    {
        title: "Institutional milestones",
        description:
            "Discover official college announcements covering academic events, graduation ceremonies, recognitions and institutional developments.",
        image: images.campus,
        imageAlt: "University campus and academic environment",
        href: officialLinks.news,
        linkText: "Explore college announcements",
        icon: Building2,
    },
];

const Page = () => {
    return (
        <>
            <SiteHeader />

            <main className="min-h-screen overflow-hidden bg-[#FAF7F2] text-[#1E1917]">
                {/* HERO */}
                <section className="relative overflow-hidden bg-[#20235A] text-white">
                    <div className="absolute inset-0">
                        <Image
                            src={images.hero}
                            alt="University campus architecture"
                            fill
                            sizes="(min-width: 1024px) 330px, 100vw"
                            className="h-full w-full object-cover opacity-20"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#20235A] via-[#20235A]/95 to-[#20235A]/70" />
                    </div>

                    <div className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full border border-white/10 sm:h-[28rem] sm:w-[28rem]" />
                    <div className="pointer-events-none absolute -right-8 -top-12 h-56 w-56 rounded-full border border-[#D2B87C]/30 sm:h-80 sm:w-80" />

                    <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16 lg:px-12 lg:py-28">
                        <div>
                            <div className="mb-8 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#D2B87C]" />
                                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D2B87C] sm:tracking-[0.2em]">
                                    Nehru College of Engineering and Research Centre
                                </p>
                            </div>

                            <h1 className="max-w-3xl font-serif text-4xl font-medium leading-[1.12] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                                Reputation
                                <br />
                                <span className="text-[#D2B87C]">
                                    &amp; Rankings
                                </span>
                            </h1>

                            <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
                                Discover the recognitions, accreditation
                                records, ranking submissions and academic
                                achievements that form part of NCERC&apos;s
                                institutional journey.
                            </p>

                            <div className="mt-9 flex flex-wrap gap-3">
                                <a
                                    href="#recognition"
                                    className="inline-flex items-center gap-3 bg-[#D2B87C] px-6 py-3.5 text-sm font-semibold text-[#20235A] transition-colors hover:bg-white"
                                >
                                    Explore recognition
                                    <ArrowRight size={17} />
                                </a>

                                <a
                                    href="#official-records"
                                    className="inline-flex items-center gap-3 border border-white/30 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:border-[#D2B87C] hover:text-[#D2B87C]"
                                >
                                    Official records
                                    <ArrowDownRight size={17} />
                                </a>
                            </div>
                        </div>

                        <div className="border-l border-white/25 pl-6 sm:pl-8 lg:ml-auto lg:max-w-sm">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                Institutional recognition
                            </p>

                            <div className="mt-5 flex items-end gap-4">
                                <span className="font-serif text-7xl leading-none text-white sm:text-8xl">
                                    21
                                </span>
                                <span className="max-w-[150px] pb-1 text-sm leading-6 text-white/75">
                                    in the Kerala Institutional Ranking Framework
                                </span>
                            </div>

                            <div className="mt-6 h-px w-full bg-white/20" />

                            <p className="mt-4 text-sm leading-6 text-white/65">
                                KIRF ranking announcement published on
                                3 March 2026.
                            </p>

                            <a
                                href={officialLinks.kirf}
                                target="_blank"
                                rel="noreferrer"
                                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#D2B87C] hover:text-white"
                            >
                                Read the official announcement
                                <ArrowRight size={15} />
                            </a>
                        </div>
                    </div>

                    <div className="relative h-1 w-full bg-[#D2B87C]" />
                </section>

                {/* INTRODUCTION */}
                <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
                    <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8F7746]">
                                Our commitment
                            </p>

                            <h2 className="mt-4 max-w-md font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                                Progress measured through purpose.
                            </h2>

                            <p className="mt-6 text-base leading-8 text-[#5D5A55]">
                                At Nehru College of Engineering and Research
                                Centre, institutional progress is shaped by
                                academic practices, student development,
                                research and a commitment to continuous
                                improvement.
                            </p>
                        </div>

                        <div className="relative">
                            <div className="aspect-[5/3] overflow-hidden">
                                <Image
                                    src={images.recognition}
                                    alt="Students collaborating on an academic project"
                                    fill
                                    sizes="(min-width: 1024px) 330px, 100vw"
                                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                                />
                            </div>

                            <div className="absolute -bottom-5 left-4 max-w-[85%] border-l-4 border-[#D2B87C] bg-white p-4 shadow-sm sm:left-8 sm:p-6">
                                <p className="font-serif text-lg text-[#20235A] sm:text-xl">
                                    A culture of learning and continuous improvement
                                </p>
                                <p className="mt-2 text-xs leading-5 text-[#6D6962]">
                                    Replace this image with an original NCERC
                                    campus or student achievement photograph.
                                </p>
                            </div>
                        </div>
                    </div>

                    <p className="mt-14 max-w-4xl text-base leading-8 text-[#5D5A55] sm:mt-16">
                        Rankings, accreditation records and academic
                        achievements help students, parents and other
                        stakeholders understand an institution&apos;s progress.
                        Explore the official records below for details and
                        supporting documents.
                    </p>
                </section>

                {/* RECOGNITION */}
                <section
                    id="recognition"
                    className="scroll-mt-24 border-y border-[#E5DFD3] bg-[#F2EFE8] py-16 sm:py-20 lg:py-24"
                >
                    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
                        <div className="mb-10 flex flex-col justify-between gap-5 sm:mb-12 sm:flex-row sm:items-end">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8F7746]">
                                    Recognition &amp; records
                                </p>
                                <h2 className="mt-3 font-serif text-3xl text-[#20235A] sm:text-4xl lg:text-5xl">
                                    Explore our credentials
                                </h2>
                            </div>

                            {/* <p className="max-w-md text-sm leading-7 text-[#6D6962]">
                                Explore ranking announcements, published
                                submissions and accreditation information
                                through the college&apos;s official resources.
                            </p> */}
                        </div>

                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {recognitionItems.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <article
                                        key={item.number}
                                        className="group flex h-full flex-col border border-[#E0D9CB] bg-[#FAF7F2] transition-colors duration-300 hover:border-[#20235A]/40"
                                    >
                                        <div className="h-44 overflow-hidden bg-[#E5E0D5]">
                                            <Image
                                                src={item.image}
                                                alt={item.imageAlt}
                                                fill
                                                sizes="(min-width: 1024px) 330px, 100vw"
                                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                        </div>

                                        <div className="flex flex-1 flex-col p-6 sm:p-8">
                                            <div className="flex items-start justify-between gap-4">
                                                <div className="flex h-11 w-11 items-center justify-center border border-[#D2B87C]/60 text-[#20235A]">
                                                    <Icon size={22} strokeWidth={1.5} />
                                                </div>

                                                <span className="font-serif text-2xl text-[#C9C0B0]">
                                                    {item.number}
                                                </span>
                                            </div>

                                            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.2em] text-[#8F7746]">
                                                {item.label}
                                            </p>

                                            <h3 className="mt-3 font-serif text-2xl leading-snug text-[#20235A]">
                                                {item.title}
                                            </h3>

                                            <p className="mt-4 flex-1 text-sm leading-7 text-[#6D6962]">
                                                {item.description}
                                            </p>

                                            <a
                                                href={item.href}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="mt-7 inline-flex items-center justify-between gap-3 border-t border-[#E5DFD3] pt-5 text-sm font-semibold text-[#20235A] transition-colors group-hover:text-[#8F7746]"
                                            >
                                                {item.linkText}
                                                <ArrowRight
                                                    size={17}
                                                    className="shrink-0 transition-transform group-hover:translate-x-1"
                                                />
                                            </a>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* ACCREDITATION */}
                <section
                    id="accreditation"
                    className="scroll-mt-24 mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
                >
                    <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8F7746]">
                                Quality &amp; recognition
                            </p>

                            <h2 className="mt-4 font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                                Accreditation and approvals
                            </h2>

                            <p className="mt-6 text-base leading-8 text-[#6D6962]">
                                Institutional accreditation and programme
                                recognition provide important information
                                about academic standards and quality
                                assurance. Explore the official records for
                                the relevant details and validity periods.
                            </p>

                            <a
                                href={officialLinks.accreditation}
                                target="_blank"
                                rel="noreferrer"
                                className="mt-7 inline-flex items-center gap-3 border-b border-[#D2B87C] pb-2 text-sm font-semibold text-[#20235A] hover:text-[#8F7746]"
                            >
                                View official accreditation records
                                <ExternalLink size={16} />
                            </a>

                            <div className="mt-9 aspect-[4/3] overflow-hidden">
                                <Image
                                    src={images.campus}
                                    alt="University learning environment"
                                    fill
                                    sizes="(min-width: 1024px) 330px, 100vw"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>

                        <div className="divide-y divide-[#E5DFD3] border-y border-[#E5DFD3]">
                            {accreditationItems.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <article
                                        key={item.number}
                                        className="grid gap-4 py-7 sm:grid-cols-[56px_1fr] sm:gap-6 sm:py-8"
                                    >
                                        <div className="flex h-12 w-12 items-center justify-center bg-[#F2EFE8] text-[#20235A]">
                                            <Icon size={23} strokeWidth={1.5} />
                                        </div>

                                        <div>
                                            <div className="flex flex-wrap items-center justify-between gap-3">
                                                <h3 className="font-serif text-2xl text-[#20235A]">
                                                    {item.title}
                                                </h3>
                                                <span className="border border-[#D2B87C]/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#8F7746]">
                                                    {item.status}
                                                </span>
                                            </div>

                                            <p className="mt-3 text-sm leading-7 text-[#6D6962]">
                                                {item.description}
                                            </p>
                                        </div>
                                    </article>
                                );
                            })}

                            <div className="flex flex-wrap gap-4 py-6">
                                <a
                                    href={officialLinks.autonomy}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#20235A] hover:text-[#8F7746]"
                                >
                                    Autonomous status
                                    <ArrowRight size={16} />
                                </a>

                                <a
                                    href={officialLinks.nba}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#20235A] hover:text-[#8F7746]"
                                >
                                    NBA announcement
                                    <ArrowRight size={16} />
                                </a>

                                <a
                                    href={officialLinks.downloads}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#20235A] hover:text-[#8F7746]"
                                >
                                    Official downloads
                                    <ArrowRight size={16} />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* NIRF REPORTS */}
                <section
                    id="nirf-reports"
                    className="scroll-mt-24 border-y border-[#E5DFD3] bg-[#F2EFE8] py-16 sm:py-20 lg:py-24"
                >
                    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
                        <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8F7746]">
                                    Published submissions
                                </p>
                                <h2 className="mt-4 font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                                    NIRF reports, year by year.
                                </h2>
                            </div>

                            <p className="text-sm leading-7 text-[#6D6962]">
                                Access the college&apos;s NIRF submissions for
                                available years and categories. These links
                                lead to submitted reports; they do not imply
                                that NCERC received a particular national rank.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {nirfReports.map((report) => (
                                <article
                                    key={report.year}
                                    className="flex flex-col border border-[#DED7C9] bg-[#FAF7F2] p-6 transition-colors hover:border-[#20235A]/40 sm:p-7"
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="font-serif text-4xl text-[#20235A]">
                                            {report.year}
                                        </span>
                                        <FileText
                                            size={25}
                                            strokeWidth={1.4}
                                            className="text-[#A08B61]"
                                        />
                                    </div>

                                    <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#8F7746]">
                                        NIRF submission
                                    </p>

                                    <div className="mt-5 flex flex-wrap gap-2">
                                        {report.categories.map((category) => (
                                            <span
                                                key={category}
                                                className="border border-[#E5DFD3] px-2.5 py-1.5 text-[11px] text-[#6D6962]"
                                            >
                                                {category}
                                            </span>
                                        ))}
                                    </div>

                                    <a
                                        href={officialLinks.nirf}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="mt-6 inline-flex items-center justify-between gap-3 border-t border-[#E5DFD3] pt-5 text-sm font-semibold text-[#20235A] hover:text-[#8F7746]"
                                    >
                                        View available reports
                                        <ArrowRight size={16} />
                                    </a>
                                </article>
                            ))}
                        </div>

                        <p className="mt-6 text-xs leading-6 text-[#777168]">
                            Report availability and categories vary by year.
                            Visit the official NIRF page to open the relevant
                            submission documents.
                        </p>
                    </div>
                </section>

                {/* UNIVERSITY RANK HOLDERS */}
                <section
                    id="rank-holders"
                    className="scroll-mt-24 mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
                >
                    <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
                        <div className="relative">
                            <div className="aspect-[4/3] overflow-hidden">
                                <Image
                                    src={images.award}
                                    alt="Academic award and student achievement"
                                    fill
                                    sizes="(min-width: 1024px) 330px, 100vw"
                                    className="h-full w-full object-cover"
                                />
                            </div>

                            <div className="absolute bottom-4 left-4 flex items-center gap-3 bg-[#FAF7F2] px-5 py-4 sm:bottom-7 sm:left-7">
                                <Trophy
                                    size={26}
                                    className="shrink-0 text-[#8F7746]"
                                />
                                <div>
                                    <p className="font-serif text-lg text-[#20235A]">
                                        Academic achievement
                                    </p>
                                    <p className="mt-1 text-xs text-[#6D6962]">
                                        Student milestones and university ranks
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8F7746]">
                                Student achievements
                            </p>

                            <h2 className="mt-4 font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                                Celebrating academic excellence.
                            </h2>

                            <p className="mt-6 text-base leading-8 text-[#6D6962]">
                                University rank holders represent an important
                                part of NCERC&apos;s academic history. Explore
                                the college&apos;s published department records
                                for student names, university ranks and
                                graduating batches.
                            </p>

                            <p className="mt-4 text-base leading-8 text-[#6D6962]">
                                This section can be expanded with verified
                                student photographs, award ceremonies and
                                achievement records from additional
                                departments.
                            </p>

                            <a
                                href={officialLinks.rankHolders}
                                target="_blank"
                                rel="noreferrer"
                                className="mt-7 inline-flex items-center gap-3 bg-[#20235A] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#303579]"
                            >
                                View university rank holders
                                <ArrowRight size={17} />
                            </a>

                            <p className="mt-4 text-xs leading-6 text-[#777168]">
                                The linked page contains department-specific
                                rank-holder records. Add other departments
                                only after confirming their official records.
                            </p>
                        </div>
                    </div>
                </section>

                {/* AWARDS AND INSTITUTIONAL ACHIEVEMENTS */}
                <section className="border-y border-[#E5DFD3] bg-[#F2EFE8] py-16 sm:py-20 lg:py-24">
                    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
                        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8F7746]">
                                    Milestones &amp; achievements
                                </p>
                                <h2 className="mt-4 font-serif text-3xl text-[#20235A] sm:text-4xl lg:text-5xl">
                                    Progress worth celebrating.
                                </h2>
                            </div>

                            <p className="max-w-md text-sm leading-7 text-[#6D6962]">
                                Explore official college announcements
                                documenting academic events, student
                                achievements and institutional milestones.
                            </p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                            {achievementHighlights.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <article
                                        key={item.title}
                                        className="group grid overflow-hidden border border-[#DED7C9] bg-[#FAF7F2] sm:grid-cols-[0.85fr_1.15fr]"
                                    >
                                        <div className="min-h-56 overflow-hidden sm:min-h-full">
                                            <Image
                                                src={item.image}
                                                alt={item.imageAlt}
                                                fill
                                                sizes="(min-width: 1024px) 330px, 100vw"
                                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                        </div>

                                        <div className="flex flex-col p-6 sm:p-8">
                                            <Icon
                                                size={26}
                                                strokeWidth={1.5}
                                                className="text-[#8F7746]"
                                            />

                                            <h3 className="mt-5 font-serif text-2xl text-[#20235A]">
                                                {item.title}
                                            </h3>

                                            <p className="mt-4 flex-1 text-sm leading-7 text-[#6D6962]">
                                                {item.description}
                                            </p>

                                            <a
                                                href={item.href}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#20235A] hover:text-[#8F7746]"
                                            >
                                                {item.linkText}
                                                <ArrowRight size={16} />
                                            </a>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* ACADEMIC EXCELLENCE */}
                <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
                    <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
                        <div className="relative">
                            <div className="aspect-[4/3] overflow-hidden">
                                <Image
                                    src={images.research}
                                    alt="Research and scientific learning"
                                    fill
                                    sizes="(min-width: 1024px) 330px, 100vw"
                                    className="h-full w-full object-cover"
                                />
                            </div>

                            <div className="absolute -bottom-4 right-4 flex items-center gap-3 bg-[#D2B87C] px-5 py-4 text-[#20235A] sm:right-8">
                                <Award size={27} strokeWidth={1.5} />
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-[0.14em]">
                                        Academic development
                                    </p>
                                    <p className="mt-1 text-sm">
                                        A continuing journey
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:pl-4">
                            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8F7746]">
                                Beyond the rankings
                            </p>

                            <h2 className="mt-4 font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                                The values behind every milestone.
                            </h2>

                            <p className="mt-6 text-base leading-8 text-[#6D6962]">
                                Recognition is one part of an institution&apos;s
                                journey. Academic quality, research,
                                innovation and student achievement are
                                important areas through which educational
                                progress can be understood.
                            </p>

                            <div className="mt-8 divide-y divide-[#E5DFD3] border-y border-[#E5DFD3]">
                                {recognitionPrinciples.map((item) => {
                                    const Icon = item.icon;

                                    return (
                                        <div
                                            key={item.number}
                                            className="grid gap-4 py-6 sm:grid-cols-[48px_1fr] sm:gap-5"
                                        >
                                            <div className="flex h-11 w-11 items-center justify-center bg-[#F2EFE8] text-[#20235A]">
                                                <Icon
                                                    size={21}
                                                    strokeWidth={1.5}
                                                />
                                            </div>

                                            <div>
                                                <div className="flex flex-wrap items-center gap-3">
                                                    <span className="text-xs font-semibold tracking-[0.16em] text-[#A08B61]">
                                                        {item.number}
                                                    </span>
                                                    <h3 className="font-serif text-xl text-[#20235A]">
                                                        {item.title}
                                                    </h3>
                                                </div>

                                                <p className="mt-3 text-sm leading-7 text-[#6D6962]">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                {/* OFFICIAL RECORDS */}
                <section
                    id="official-records"
                    className="scroll-mt-24 bg-[#20235A] text-white"
                >
                    <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:gap-20 lg:px-12 lg:py-24">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#D2B87C]">
                                Official information
                            </p>

                            <h2 className="mt-4 max-w-2xl font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
                                Explore the records. Discover the progress.
                            </h2>

                            <p className="mt-6 max-w-2xl text-base leading-8 text-white/70">
                                Visit NCERC&apos;s official resources for
                                ranking submissions, accreditation
                                information, institutional approvals and
                                academic achievements. Check the relevant
                                documents for year-specific details and
                                validity periods.
                            </p>
                        </div>

                        <div className="space-y-3">
                            {[
                                {
                                    title: "NIRF submissions",
                                    description:
                                        "Published reports and year-wise documents",
                                    href: officialLinks.nirf,
                                    icon: FileText,
                                },
                                {
                                    title: "Accreditations",
                                    description:
                                        "Institutional and programme-level details",
                                    href: officialLinks.accreditation,
                                    icon: Award,
                                },
                                {
                                    title: "Autonomous status",
                                    description:
                                        "Institutional status and information",
                                    href: officialLinks.autonomy,
                                    icon: Landmark,
                                },
                                {
                                    title: "University rank holders",
                                    description:
                                        "Published student achievement records",
                                    href: officialLinks.rankHolders,
                                    icon: GraduationCap,
                                },
                            ].map((item) => {
                                const Icon = item.icon;

                                return (
                                    <a
                                        key={item.title}
                                        href={item.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-4 border border-white/20 p-5 transition-colors hover:border-[#D2B87C]/70 hover:bg-white/5"
                                    >
                                        <Icon
                                            size={22}
                                            className="shrink-0 text-[#D2B87C]"
                                        />

                                        <span className="flex-1">
                                            <span className="block font-medium">
                                                {item.title}
                                            </span>
                                            <span className="mt-1 block text-xs leading-5 text-white/60">
                                                {item.description}
                                            </span>
                                        </span>

                                        <ArrowRight
                                            size={18}
                                            className="shrink-0 text-[#D2B87C]"
                                        />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* CLOSING CTA */}
                <section className="bg-[#F2EFE8] px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
                    <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 sm:flex-row sm:items-center">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8F7746]">
                                Nehru College of Engineering and Research Centre
                            </p>
                            <h2 className="mt-3 font-serif text-2xl text-[#20235A] sm:text-3xl">
                                Building progress through education.
                            </h2>
                        </div>

                        <Link
                            href="/"
                            className="inline-flex w-fit items-center gap-3 border border-[#20235A]/25 px-5 py-3 text-sm font-semibold text-[#20235A] transition-colors hover:border-[#20235A] hover:bg-[#20235A] hover:text-white"
                        >
                            Explore NCERC
                            <ArrowRight size={17} />
                        </Link>
                    </div>
                </section>
            </main>

            <FooterSection />
        </>
    );
};

export default Page;