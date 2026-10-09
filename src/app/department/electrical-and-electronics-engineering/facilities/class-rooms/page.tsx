import Link from "next/link";
import {
    ArrowLeft,
    ArrowUpRight,
    BookOpen,
    CheckCircle2,
    Monitor,
    Users,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../../DepartmentNav/page";

interface Classroom {
    number: string;
    title: string;
    description: string;
    image: string;
    alt: string;
    icon: React.ReactNode;
}

const classrooms: Classroom[] = [
    {
        number: "01",
        title: "Smart Classrooms",
        description:
            "Technology-enabled classrooms that support interactive teaching, digital learning resources and engaging academic sessions.",
        image:
            "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1800&q=85",
        alt: "Modern smart classroom with desks and presentation display",
        icon: <Monitor className="h-6 w-6" />,
    },
    {
        number: "02",
        title: "Interactive Learning Spaces",
        description:
            "Well-organized academic spaces designed to encourage interaction between students and faculty during classroom sessions.",
        image:
            "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1800&q=85",
        alt: "Students attending a classroom session",
        icon: <Users className="h-6 w-6" />,
    },
    {
        number: "03",
        title: "Technology-Enabled Classrooms",
        description:
            "Classrooms supported by modern teaching technology to complement conventional instruction with digital resources.",
        image:
            "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1800&q=85",
        alt: "Academic classroom and learning environment",
        icon: <Monitor className="h-6 w-6" />,
    },
    {
        number: "04",
        title: "Collaborative Learning Areas",
        description:
            "Flexible learning environments that encourage discussion, teamwork, presentations and collaborative academic activities.",
        image:
            "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1800&q=85",
        alt: "Students collaborating in an academic classroom",
        icon: <Users className="h-6 w-6" />,
    },
];

export default function ClassRoomsPage() {
    const featuredClassroom = classrooms[0];

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
                                Classrooms designed
                                <span className="block text-[#D2B87C]">
                                    for focused learning.
                                </span>
                            </h1>

                            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                                Explore the academic spaces that support classroom teaching,
                                interactive learning and collaborative activities within the
                                Electrical and Electronics Engineering department.
                            </p>

                            <div className="mt-8 flex flex-wrap items-center gap-3">
                                <a
                                    href="#classrooms"
                                    className="group inline-flex items-center gap-2 rounded-full bg-[#D2B87C] px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#20235A] transition-all duration-300 hover:bg-white"
                                >
                                    Explore Classrooms

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
                                    Academic Environment
                                </p>

                                <h2 className="mt-4 max-w-md font-serif text-3xl leading-tight text-white">
                                    Spaces that support teaching, interaction and learning.
                                </h2>

                                <p className="mt-5 max-w-md text-sm leading-7 text-white/55">
                                    Purpose-oriented classrooms provide a comfortable environment
                                    for lectures, discussions, presentations and collaborative
                                    academic activities.
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
                                Environment
                            </p>

                            <p className="mt-2 font-serif text-lg text-white">
                                Academic &amp; Interactive
                            </p>
                        </div>

                        <div className="px-6 py-5 sm:px-10 lg:px-16">
                            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                Learning Spaces
                            </p>

                            <p className="mt-2 font-serif text-lg text-white">
                                Smart &amp; Collaborative
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
                                        Classroom Facilities
                                    </span>
                                </div>

                                <div className="mt-8 hidden lg:block">
                                    <BookOpen className="h-8 w-8 text-[#D2B87C]" />
                                </div>
                            </div>

                            <div>
                                <h2 className="max-w-3xl font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                                    A learning environment
                                    <span className="text-[#8F7746]">
                                        {" "}
                                        built around students.
                                    </span>
                                </h2>

                                <p className="mt-6 max-w-2xl text-sm leading-7 text-[#1E1917]/65 sm:text-base">
                                    The classrooms of the Electrical and Electronics Engineering
                                    department are designed to provide a focused and comfortable
                                    environment for academic instruction. They support lectures,
                                    presentations, discussions and technology-assisted teaching.
                                </p>

                                <div className="mt-8 flex items-center gap-3">
                                    <div className="h-px w-12 bg-[#D2B87C]" />

                                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                                        Focused • Connected • Interactive
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =======================================================
            FEATURED CLASSROOM
        ======================================================= */}
                <section id="classrooms" className="bg-white">
                    <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
                        <div className="mb-12 flex flex-col justify-between gap-6 border-b border-[#1E1917]/10 pb-8 sm:flex-row sm:items-end">
                            <div>
                                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                                    Academic Infrastructure
                                </p>

                                <h2 className="font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                                    Classrooms for modern learning.
                                </h2>
                            </div>

                            <p className="max-w-sm text-sm leading-6 text-[#1E1917]/55">
                                Comfortable and technology-supported spaces for lectures,
                                interaction and academic engagement.
                            </p>
                        </div>

                        {/* ===================================================
                FEATURED CLASSROOM
            =================================================== */}
                        <div className="mb-8 overflow-hidden rounded-[2rem] bg-[#20235A]">
                            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
                                {/* Image */}
                                <div className="relative min-h-[340px] overflow-hidden lg:min-h-[480px]">
                                    <img
                                        src={featuredClassroom.image}
                                        alt={featuredClassroom.alt}
                                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#20235A]/80 via-[#20235A]/10 to-transparent" />

                                    <div className="absolute left-8 top-8 sm:left-10 sm:top-10 lg:left-12 lg:top-12">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-[#20235A]/60 text-[#D2B87C] backdrop-blur-sm">
                                            {featuredClassroom.icon}
                                        </div>
                                    </div>

                                    <div className="absolute bottom-8 left-8 sm:bottom-10 sm:left-10 lg:bottom-12 lg:left-12">
                                        <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                            01 / Featured Space
                                        </p>

                                        <h3 className="mt-3 max-w-lg font-serif text-3xl text-white sm:text-4xl">
                                            {featuredClassroom.title}
                                        </h3>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex flex-col justify-between bg-[#F2EFE8] p-8 sm:p-10 lg:p-12">
                                    <div>
                                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                            Smart Academic Environment
                                        </p>

                                        <h4 className="mt-4 max-w-xl font-serif text-2xl leading-snug text-[#20235A] sm:text-3xl">
                                            Supporting engaging and technology-assisted classroom
                                            learning.
                                        </h4>

                                        <p className="mt-5 max-w-xl text-sm leading-7 text-[#1E1917]/60">
                                            {featuredClassroom.description}
                                        </p>

                                        <p className="mt-5 max-w-xl text-sm leading-7 text-[#1E1917]/60">
                                            The learning environment is intended to complement
                                            conventional teaching with digital resources,
                                            presentations and interactive academic activities.
                                        </p>

                                        <div className="mt-7 grid gap-3 sm:grid-cols-2">
                                            <div className="flex items-center gap-3">
                                                <CheckCircle2 className="h-4 w-4 shrink-0 text-[#8F7746]" />

                                                <span className="text-xs text-[#1E1917]/60">
                                                    Digital learning support
                                                </span>
                                            </div>

                                            <div className="flex items-center gap-3">
                                                <CheckCircle2 className="h-4 w-4 shrink-0 text-[#8F7746]" />

                                                <span className="text-xs text-[#1E1917]/60">
                                                    Presentation facilities
                                                </span>
                                            </div>

                                            <div className="flex items-center gap-3">
                                                <CheckCircle2 className="h-4 w-4 shrink-0 text-[#8F7746]" />

                                                <span className="text-xs text-[#1E1917]/60">
                                                    Student interaction
                                                </span>
                                            </div>

                                            <div className="flex items-center gap-3">
                                                <CheckCircle2 className="h-4 w-4 shrink-0 text-[#8F7746]" />

                                                <span className="text-xs text-[#1E1917]/60">
                                                    Comfortable learning
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-10 flex flex-wrap items-center justify-between gap-5 border-t border-[#20235A]/10 pt-6">
                                        <span className="text-xs text-[#1E1917]/55">
                                            Electrical &amp; Electronics Engineering
                                        </span>

                                        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#20235A]">
                                            Academic Space

                                            <ArrowUpRight className="h-4 w-4" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ===================================================
                CLASSROOM CARDS
            =================================================== */}
                        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                            {classrooms.slice(1).map((classroom) => (
                                <article
                                    key={classroom.number}
                                    className="group overflow-hidden rounded-3xl border border-[#1E1917]/10 bg-[#FAF7F2] transition-all duration-300 hover:-translate-y-1 hover:border-[#D2B87C]/70 hover:shadow-[0_18px_45px_rgba(32,35,90,0.08)]"
                                >
                                    {/* Image */}
                                    <div className="relative aspect-[16/10] overflow-hidden bg-[#20235A]">
                                        <img
                                            src={classroom.image}
                                            alt={classroom.alt}
                                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-[#20235A]/70 via-transparent to-transparent" />

                                        <div className="absolute left-5 top-5">
                                            <span className="font-serif text-3xl text-white/80">
                                                {classroom.number}
                                            </span>
                                        </div>

                                        <div className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-[#20235A]/70 text-[#D2B87C] backdrop-blur-sm transition-all duration-300 group-hover:bg-[#D2B87C] group-hover:text-[#20235A]">
                                            {classroom.icon}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-7">
                                        <h3 className="font-serif text-xl leading-snug text-[#20235A]">
                                            {classroom.title}
                                        </h3>

                                        <p className="mt-3 text-sm leading-6 text-[#1E1917]/55">
                                            {classroom.description}
                                        </p>

                                        <div className="mt-7 flex items-center gap-2 border-t border-[#1E1917]/10 pt-5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8F7746]">
                                            Classroom Facility

                                            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* =======================================================
            CLASSROOM EXPERIENCE
        ======================================================= */}
                <section className="bg-[#F2EFE8]">
                    <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
                        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
                            <div>
                                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                                    Learning Experience
                                </p>

                                <h2 className="mt-4 font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl">
                                    More than a classroom.
                                </h2>
                            </div>

                            <div>
                                <p className="max-w-3xl text-sm leading-7 text-[#1E1917]/65 sm:text-base">
                                    Effective engineering education requires an environment that
                                    encourages students to listen, question, collaborate and
                                    apply what they learn. The department's classrooms are
                                    intended to support these different dimensions of academic
                                    learning.
                                </p>

                                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                                    <div className="rounded-2xl border border-[#20235A]/10 bg-white p-6">
                                        <BookOpen className="h-5 w-5 text-[#8F7746]" />

                                        <h3 className="mt-5 font-serif text-lg text-[#20235A]">
                                            Focused
                                        </h3>

                                        <p className="mt-2 text-xs leading-5 text-[#1E1917]/55">
                                            Spaces designed for attentive lectures and structured
                                            academic sessions.
                                        </p>
                                    </div>

                                    <div className="rounded-2xl border border-[#20235A]/10 bg-white p-6">
                                        <Users className="h-5 w-5 text-[#8F7746]" />

                                        <h3 className="mt-5 font-serif text-lg text-[#20235A]">
                                            Interactive
                                        </h3>

                                        <p className="mt-2 text-xs leading-5 text-[#1E1917]/55">
                                            Environments that encourage communication, discussion and
                                            student participation.
                                        </p>
                                    </div>

                                    <div className="rounded-2xl border border-[#20235A]/10 bg-white p-6">
                                        <Monitor className="h-5 w-5 text-[#8F7746]" />

                                        <h3 className="mt-5 font-serif text-lg text-[#20235A]">
                                            Connected
                                        </h3>

                                        <p className="mt-2 text-xs leading-5 text-[#1E1917]/55">
                                            Technology-supported learning that complements
                                            conventional classroom teaching.
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
                                    Learning begins with the right environment.
                                </h2>

                                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
                                    Explore the academic spaces that support teaching,
                                    interaction and learning within the department.
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