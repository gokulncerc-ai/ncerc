import Link from "next/link";
import {
    ArrowLeft,
    ArrowUpRight,
    CheckCircle2,
    Landmark,
    Mic2,
    Monitor,
    Presentation,
    Users,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../../DepartmentNav/page";

interface SeminarHall {
    number: string;
    title: string;
    description: string;
    image: string;
    alt: string;
    icon: React.ReactNode;
}

const seminarHalls: SeminarHall[] = [
    {
        number: "01",
        title: "Main Seminar Hall",
        description:
            "A dedicated academic venue for seminars, technical presentations, expert sessions, workshops and departmental programmes.",
        image:
            "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1800&q=85",
        alt: "Large seminar hall prepared for an academic presentation",
        icon: <Presentation className="h-6 w-6" />,
    },
    {
        number: "02",
        title: "Technical Presentation Hall",
        description:
            "A presentation-oriented space supporting technical talks, project presentations, demonstrations and knowledge-sharing sessions.",
        image:
            "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1800&q=85",
        alt: "Technical presentation hall with audience seating",
        icon: <Monitor className="h-6 w-6" />,
    },
    {
        number: "03",
        title: "Auditorium & Programme Space",
        description:
            "A spacious venue suitable for academic programmes, guest lectures, department events, awareness sessions and institutional activities.",
        image:
            "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1800&q=85",
        alt: "Large event and programme venue",
        icon: <Landmark className="h-6 w-6" />,
    },
    {
        number: "04",
        title: "Interactive Discussion Space",
        description:
            "A flexible environment for discussions, faculty interactions, student activities, group sessions and collaborative learning.",
        image:
            "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1800&q=85",
        alt: "Interactive discussion and meeting space",
        icon: <Users className="h-6 w-6" />,
    },
];

export default function SeminarHallsPage() {
    const featuredHall = seminarHalls[0];

    return (
        <>
            <SiteHeader />

            {/* =========================================================
          HERO
      ========================================================= */}
            <section className="relative isolate overflow-hidden bg-[#20235A]">
                <div className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full border border-[#D2B87C]/20" />

                <div className="pointer-events-none absolute -right-8 -top-16 h-52 w-52 rounded-full border border-[#D2B87C]/10" />

                <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full border border-white/5" />

                <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
                    <div className="grid items-end gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
                        <div>
                            <div className="mb-6 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#D2B87C]" />

                                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D2B87C]">
                                    Electrical &amp; Electronics Engineering
                                </p>
                            </div>

                            <h1 className="max-w-4xl font-serif text-4xl leading-[1.05] text-white sm:text-5xl lg:text-6xl">
                                Seminar halls for
                                <span className="block text-[#D2B87C]">
                                    ideas &amp; interaction.
                                </span>
                            </h1>

                            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                                Explore the dedicated spaces that support technical
                                presentations, seminars, expert sessions, workshops and
                                academic programmes at the department.
                            </p>

                            <div className="mt-8 flex flex-wrap items-center gap-3">
                                <a
                                    href="#seminar-halls"
                                    className="group inline-flex items-center gap-2 rounded-full bg-[#D2B87C] px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#20235A] transition-all duration-300 hover:bg-white"
                                >
                                    Explore Seminar Halls

                                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </a>

                                <Link
                                    href="/departments/electrical-and-electronics-engineering/facilities"
                                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:border-[#D2B87C]/60 hover:text-[#D2B87C]"
                                >
                                    <ArrowLeft className="h-4 w-4" />
                                    Facilities
                                </Link>
                            </div>
                        </div>

                        <div className="relative hidden lg:block">
                            <div className="border-l border-[#D2B87C]/30 pl-8">
                                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                    Academic &amp; Professional Events
                                </p>

                                <h2 className="mt-4 max-w-md font-serif text-3xl leading-tight text-white">
                                    Spaces where knowledge is shared and ideas take shape.
                                </h2>

                                <p className="mt-5 max-w-md text-sm leading-7 text-white/55">
                                    Seminar halls provide an environment for presentations,
                                    discussions, expert interactions and academic engagement.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* =======================================================
            HERO INFORMATION STRIP
        ======================================================= */}
                <div className="border-t border-white/10 bg-white/[0.03]">
                    <div className="mx-auto grid max-w-[1440px] grid-cols-1 sm:grid-cols-3">
                        <div className="border-b border-white/10 px-6 py-5 sm:border-b-0 sm:border-r sm:px-10 lg:px-16">
                            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                Department
                            </p>

                            <p className="mt-2 font-serif text-lg text-white">
                                Electrical &amp; Electronics
                            </p>
                        </div>

                        <div className="border-b border-white/10 px-6 py-5 sm:border-b-0 sm:border-r sm:px-10 lg:px-16">
                            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                Purpose
                            </p>

                            <p className="mt-2 font-serif text-lg text-white">
                                Seminars &amp; Presentations
                            </p>
                        </div>

                        <div className="px-6 py-5 sm:px-10 lg:px-16">
                            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                Environment
                            </p>

                            <p className="mt-2 font-serif text-lg text-white">
                                Academic &amp; Interactive
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
          DEPARTMENT NAVIGATION
      ========================================================= */}
            <InnerHeader />

            <main className="bg-[#FAF7F2]">
                {/* =======================================================
            INTRODUCTION
        ======================================================= */}
                <section className="border-b border-[#1E1917]/10">
                    <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
                        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
                            <div>
                                <div className="flex items-center gap-3">
                                    <span className="h-px w-8 bg-[#D2B87C]" />

                                    <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                                        Seminar Hall Facilities
                                    </span>
                                </div>

                                <div className="mt-8 hidden lg:block">
                                    <Mic2 className="h-8 w-8 text-[#D2B87C]" />
                                </div>
                            </div>

                            <div>
                                <h2 className="max-w-3xl font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                                    Spaces for
                                    <span className="text-[#8F7746]">
                                        {" "}
                                        communication &amp; collaboration.
                                    </span>
                                </h2>

                                <p className="mt-6 max-w-2xl text-sm leading-7 text-[#1E1917]/65 sm:text-base">
                                    Seminar halls provide dedicated spaces for academic
                                    presentations, technical discussions, guest lectures,
                                    workshops and other departmental activities. They extend
                                    learning beyond the conventional classroom environment.
                                </p>

                                <div className="mt-8 flex items-center gap-3">
                                    <div className="h-px w-12 bg-[#D2B87C]" />

                                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                                        Present • Discuss • Connect
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =======================================================
            SEMINAR HALLS
        ======================================================= */}
                <section id="seminar-halls" className="bg-white">
                    <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
                        <div className="mb-12 flex flex-col justify-between gap-6 border-b border-[#1E1917]/10 pb-8 sm:flex-row sm:items-end">
                            <div>
                                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                                    Academic Infrastructure
                                </p>

                                <h2 className="font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                                    Spaces built for academic exchange.
                                </h2>
                            </div>

                            <p className="max-w-sm text-sm leading-6 text-[#1E1917]/55">
                                Venues for technical presentations, expert sessions,
                                discussions, workshops and institutional programmes.
                            </p>
                        </div>

                        {/* ===================================================
                FEATURED SEMINAR HALL
            =================================================== */}
                        <div className="mb-8 overflow-hidden rounded-[2rem] bg-[#20235A]">
                            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
                                {/* Image */}
                                <div className="relative min-h-[340px] overflow-hidden lg:min-h-[480px]">
                                    <img
                                        src={featuredHall.image}
                                        alt={featuredHall.alt}
                                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#20235A]/80 via-[#20235A]/10 to-transparent" />

                                    <div className="absolute left-8 top-8 sm:left-10 sm:top-10 lg:left-12 lg:top-12">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-[#20235A]/60 text-[#D2B87C] backdrop-blur-sm">
                                            {featuredHall.icon}
                                        </div>
                                    </div>

                                    <div className="absolute bottom-8 left-8 sm:bottom-10 sm:left-10 lg:bottom-12 lg:left-12">
                                        <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                            01 / Featured Venue
                                        </p>

                                        <h3 className="mt-3 max-w-lg font-serif text-3xl text-white sm:text-4xl">
                                            {featuredHall.title}
                                        </h3>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex flex-col justify-between bg-[#F2EFE8] p-8 sm:p-10 lg:p-12">
                                    <div>
                                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                            Presentation &amp; Engagement
                                        </p>

                                        <h4 className="mt-4 max-w-xl font-serif text-2xl leading-snug text-[#20235A] sm:text-3xl">
                                            A dedicated setting for ideas, presentations and
                                            meaningful interaction.
                                        </h4>

                                        <p className="mt-5 max-w-xl text-sm leading-7 text-[#1E1917]/60">
                                            {featuredHall.description}
                                        </p>

                                        <div className="mt-7 grid gap-3 sm:grid-cols-2">
                                            <div className="flex items-center gap-3">
                                                <CheckCircle2 className="h-4 w-4 shrink-0 text-[#8F7746]" />

                                                <span className="text-xs text-[#1E1917]/60">
                                                    Technical presentations
                                                </span>
                                            </div>

                                            <div className="flex items-center gap-3">
                                                <CheckCircle2 className="h-4 w-4 shrink-0 text-[#8F7746]" />

                                                <span className="text-xs text-[#1E1917]/60">
                                                    Guest lectures
                                                </span>
                                            </div>

                                            <div className="flex items-center gap-3">
                                                <CheckCircle2 className="h-4 w-4 shrink-0 text-[#8F7746]" />

                                                <span className="text-xs text-[#1E1917]/60">
                                                    Academic workshops
                                                </span>
                                            </div>

                                            <div className="flex items-center gap-3">
                                                <CheckCircle2 className="h-4 w-4 shrink-0 text-[#8F7746]" />

                                                <span className="text-xs text-[#1E1917]/60">
                                                    Department programmes
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-10 flex flex-wrap items-center justify-between gap-5 border-t border-[#20235A]/10 pt-6">
                                        <span className="text-xs text-[#1E1917]/55">
                                            Electrical &amp; Electronics Engineering
                                        </span>

                                        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#20235A]">
                                            Academic Venue

                                            <ArrowUpRight className="h-4 w-4" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ===================================================
                SEMINAR HALL CARDS
            =================================================== */}
                        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                            {seminarHalls.slice(1).map((hall) => (
                                <article
                                    key={hall.number}
                                    className="group overflow-hidden rounded-3xl border border-[#1E1917]/10 bg-[#FAF7F2] transition-all duration-300 hover:-translate-y-1 hover:border-[#D2B87C]/70 hover:shadow-[0_18px_45px_rgba(32,35,90,0.08)]"
                                >
                                    {/* Image */}
                                    <div className="relative aspect-[16/10] overflow-hidden bg-[#20235A]">
                                        <img
                                            src={hall.image}
                                            alt={hall.alt}
                                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-[#20235A]/70 via-transparent to-transparent" />

                                        <div className="absolute left-5 top-5">
                                            <span className="font-serif text-3xl text-white/80">
                                                {hall.number}
                                            </span>
                                        </div>

                                        <div className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-[#20235A]/70 text-[#D2B87C] backdrop-blur-sm transition-all duration-300 group-hover:bg-[#D2B87C] group-hover:text-[#20235A]">
                                            {hall.icon}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-7">
                                        <h3 className="font-serif text-xl leading-snug text-[#20235A]">
                                            {hall.title}
                                        </h3>

                                        <p className="mt-3 text-sm leading-6 text-[#1E1917]/55">
                                            {hall.description}
                                        </p>

                                        <div className="mt-7 flex items-center gap-2 border-t border-[#1E1917]/10 pt-5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8F7746]">
                                            Seminar Hall Facility

                                            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* =======================================================
            USE CASES
        ======================================================= */}
                <section className="bg-[#F2EFE8]">
                    <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
                        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
                            <div>
                                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                                    Beyond the Classroom
                                </p>

                                <h2 className="mt-4 font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl">
                                    A platform for academic exchange.
                                </h2>
                            </div>

                            <div>
                                <p className="max-w-3xl text-sm leading-7 text-[#1E1917]/65 sm:text-base">
                                    Seminar halls extend the academic experience by creating
                                    opportunities for students and faculty to engage with
                                    technical experts, present ideas, participate in discussions
                                    and learn through events beyond regular classroom sessions.
                                </p>

                                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                                    <div className="rounded-2xl border border-[#20235A]/10 bg-white p-6">
                                        <Presentation className="h-5 w-5 text-[#8F7746]" />

                                        <h3 className="mt-5 font-serif text-lg text-[#20235A]">
                                            Present
                                        </h3>

                                        <p className="mt-2 text-xs leading-5 text-[#1E1917]/55">
                                            Spaces for technical presentations, project showcases
                                            and academic communication.
                                        </p>
                                    </div>

                                    <div className="rounded-2xl border border-[#20235A]/10 bg-white p-6">
                                        <Mic2 className="h-5 w-5 text-[#8F7746]" />

                                        <h3 className="mt-5 font-serif text-lg text-[#20235A]">
                                            Engage
                                        </h3>

                                        <p className="mt-2 text-xs leading-5 text-[#1E1917]/55">
                                            Opportunities to interact with experts, faculty members
                                            and fellow students.
                                        </p>
                                    </div>

                                    <div className="rounded-2xl border border-[#20235A]/10 bg-white p-6">
                                        <Users className="h-5 w-5 text-[#8F7746]" />

                                        <h3 className="mt-5 font-serif text-lg text-[#20235A]">
                                            Collaborate
                                        </h3>

                                        <p className="mt-2 text-xs leading-5 text-[#1E1917]/55">
                                            Environments that encourage discussion, teamwork and
                                            knowledge sharing.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =======================================================
            CLOSING CTA
        ======================================================= */}
                <section className="bg-[#20235A]">
                    <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
                        <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
                            <div>
                                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                    Electrical &amp; Electronics Engineering
                                </p>

                                <h2 className="mt-4 max-w-3xl font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
                                    Spaces that bring people, knowledge and ideas together.
                                </h2>

                                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
                                    Discover the seminar and presentation spaces that support
                                    academic engagement and professional interaction.
                                </p>
                            </div>

                            <Link
                                href="/departments/electrical-and-electronics-engineering/facilities"
                                className="group inline-flex w-fit items-center gap-3 rounded-full bg-[#D2B87C] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#20235A] transition-all duration-300 hover:bg-white"
                            >
                                Back to Facilities

                                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <FooterSection />
        </>
    );
}