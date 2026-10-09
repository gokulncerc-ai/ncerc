import React from "react";
import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import DepartmentNavigation from "../departmentnavigation/page";
import {
    ArrowRight,
    ArrowUpRight,
    BookOpen,
    Download,
    FileText,
    GraduationCap,
} from "lucide-react";

type SyllabusItem = {
    number: string;
    title: string;
    category: string;
    href: string;
};

const syllabusItems: SyllabusItem[] = [
    {
        number: "01",
        title: "Basic Civil & Mechanical",
        category: "Engineering Fundamentals",
        href: "https://ncerc.ac.in/downloads/dpt/applied-science/syllabus-1st-year/basic_civil_&_mechanical.pdf",
    },
    {
        number: "02",
        title: "Basics of Electrical & Electronics",
        category: "Engineering Fundamentals",
        href: "https://ncerc.ac.in/downloads/dpt/applied-science/syllabus-1st-year/basics_of_electrical_and_electronics.pdf",
    },
    {
        number: "03",
        title: "C Programming",
        category: "Programming",
        href: "https://ncerc.ac.in/downloads/dpt/applied-science/syllabus-1st-year/c_programming.pdf",
    },
    {
        number: "04",
        title: "Civil & Mech Workshop",
        category: "Workshop",
        href: "https://ncerc.ac.in/downloads/dpt/applied-science/syllabus-1st-year/civil_&_%20mech_workshop.pdf",
    },
    {
        number: "05",
        title: "Differential Equation",
        category: "Mathematics",
        href: "https://ncerc.ac.in/downloads/dpt/applied-science/syllabus-1st-year/differential_equation.pdf",
    },
    {
        number: "06",
        title: "Electrical & Electronics Workshop",
        category: "Workshop",
        href: "https://ncerc.ac.in/downloads/dpt/applied-science/syllabus-1st-year/electrical_and_electronics_workshop.pdf",
    },
    {
        number: "07",
        title: "Engineering Graphics",
        category: "Engineering Fundamentals",
        href: "https://ncerc.ac.in/downloads/dpt/applied-science/syllabus-1st-year/engg_graphics.pdf",
    },
    {
        number: "08",
        title: "Engineering Mechanics",
        category: "Engineering Fundamentals",
        href: "https://ncerc.ac.in/downloads/dpt/applied-science/syllabus-1st-year/engg_mechanics.pdf",
    },
    {
        number: "09",
        title: "Engineering Chemistry",
        category: "Applied Science",
        href: "https://ncerc.ac.in/downloads/dpt/applied-science/syllabus-1st-year/engineering_chemistry.pdf",
    },
    {
        number: "10",
        title: "Engineering Chemistry Lab",
        category: "Laboratory",
        href: "https://ncerc.ac.in/downloads/dpt/applied-science/syllabus-1st-year/engineering_chemistry_Lab.pdf",
    },
    {
        number: "11",
        title: "Engineering Physics A",
        category: "Applied Science",
        href: "https://ncerc.ac.in/downloads/dpt/applied-science/syllabus-1st-year/engineering_physics_A.pdf",
    },
    {
        number: "12",
        title: "Engineering Physics B",
        category: "Applied Science",
        href: "https://ncerc.ac.in/downloads/dpt/applied-science/syllabus-1st-year/engineering_physics_B.pdf",
    },
    {
        number: "13",
        title: "Engineering Physics Lab",
        category: "Laboratory",
        href: "https://ncerc.ac.in/downloads/dpt/applied-science/syllabus-1st-year/engineering_physics_lab.pdf",
    },
    {
        number: "14",
        title: "Life Skills",
        category: "Professional Development",
        href: "https://ncerc.ac.in/downloads/dpt/applied-science/syllabus-1st-year/life_skills.pdf",
    },
    {
        number: "15",
        title: "Linear Algebra",
        category: "Mathematics",
        href: "https://ncerc.ac.in/downloads/dpt/applied-science/syllabus-1st-year/linear_algebra.pdf",
    },
    {
        number: "16",
        title: "Professional Communication",
        category: "Professional Development",
        href: "https://ncerc.ac.in/downloads/dpt/applied-science/syllabus-1st-year/professional_communication.pdf",
    },
];

const categories = [
    "Engineering Fundamentals",
    "Programming",
    "Workshop",
    "Mathematics",
    "Applied Science",
    "Laboratory",
    "Professional Development",
];

export default function SyllabusPage() {
    return (
        <>
            <SiteHeader />

            <main className="overflow-hidden bg-[#FAF9F6] text-[#1E1917]">
                {/* =========================================================
                    HERO
                ========================================================== */}
                <section className="relative isolate overflow-hidden bg-[#20235A]">
                    <div className="pointer-events-none absolute inset-0 -z-10">
                        <div className="absolute -right-32 -top-36 h-[520px] w-[520px] rounded-full border border-white/10" />

                        <div className="absolute right-[-10px] top-[-40px] h-[350px] w-[350px] rounded-full border border-[#D2B87C]/20" />

                        <div className="absolute bottom-[-170px] left-[42%] h-[400px] w-[400px] rounded-full bg-[#D2B87C]/10 blur-3xl" />

                        <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_52%,rgba(210,184,124,0.055)_52%,transparent_76%)]" />
                    </div>

                    <div className="mx-auto grid min-h-[470px] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.2fr_0.8fr] md:py-24 lg:px-12">
                        {/* Hero copy */}
                        <div className="max-w-3xl">
                            <div className="mb-7 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#D2B87C]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                    Applied Science & Humanities
                                </span>
                            </div>

                            <h1 className="font-serif text-4xl font-medium leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[68px]">
                                First Year
                                <br />
                                <span className="italic text-[#D2B87C]">
                                    Syllabus.
                                </span>
                            </h1>

                            <p className="mt-7 max-w-2xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
                                Access the first-year syllabus documents
                                covering engineering fundamentals, applied
                                sciences, mathematics, programming, workshops,
                                and professional development.
                            </p>

                            <div className="mt-9 flex flex-wrap items-center gap-5">
                                <a
                                    href="#syllabus"
                                    className="inline-flex items-center gap-3 rounded-sm bg-[#D2B87C] px-6 py-3.5 text-sm font-semibold text-[#20235A] transition-colors duration-300 hover:bg-white"
                                >
                                    Browse Syllabus
                                    <ArrowRight size={17} />
                                </a>

                                <span className="text-xs tracking-wide text-white/50">
                                    Study · Learn · Progress
                                </span>
                            </div>
                        </div>

                        {/* Hero panel */}
                        <div className="relative mx-auto w-full max-w-[420px]">
                            <div className="absolute -inset-4 rounded-sm border border-[#D2B87C]/20" />

                            <div className="relative border border-white/10 bg-white/[0.055] p-6 sm:p-8">
                                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                                    <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                                        Academic Resources
                                    </span>

                                    <BookOpen
                                        size={20}
                                        strokeWidth={1.35}
                                        className="text-[#D2B87C]"
                                    />
                                </div>

                                <div className="mt-7 flex items-end gap-4">
                                    <span className="font-serif text-6xl leading-none text-white">
                                        16
                                    </span>

                                    <div className="pb-1">
                                        <p className="font-serif text-xl text-white">
                                            Syllabus
                                        </p>

                                        <p className="mt-1 text-xs leading-5 text-white/45">
                                            First year academic documents
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-8 space-y-3">
                                    <div className="flex items-center gap-3 border border-white/10 bg-white/[0.035] p-3.5">
                                        <span className="flex h-9 w-9 items-center justify-center border border-[#D2B87C]/30">
                                            <GraduationCap
                                                size={17}
                                                className="text-[#D2B87C]"
                                            />
                                        </span>

                                        <span className="text-xs text-white/60">
                                            Engineering foundation
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-3 border border-white/10 bg-white/[0.035] p-3.5">
                                        <span className="flex h-9 w-9 items-center justify-center border border-[#D2B87C]/30">
                                            <FileText
                                                size={17}
                                                className="text-[#D2B87C]"
                                            />
                                        </span>

                                        <span className="text-xs text-white/60">
                                            PDF syllabus documents
                                        </span>
                                    </div>
                                </div>

                                <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
                                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                                        NCERC · Academic Resources
                                    </span>

                                    <span className="h-1.5 w-1.5 rounded-full bg-[#D2B87C]" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#D2B87C]/70 to-transparent" />
                </section>

                {/* --------navigations-------- */}
                <DepartmentNavigation />

                {/* =========================================================
                    INTRODUCTION
                ========================================================== */}
                <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
                    <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.72fr_1.28fr] md:gap-16">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                First Year Academics
                            </p>

                            <h2 className="mt-5 max-w-md font-serif text-3xl font-medium leading-tight text-[#20235A] sm:text-4xl lg:text-[46px]">
                                A strong foundation for engineering education.
                            </h2>
                        </div>

                        <div className="flex flex-col justify-center">
                            <p className="text-base leading-8 text-[#625D57]">
                                The first year curriculum brings together
                                fundamental engineering subjects, applied
                                sciences, mathematics, programming, practical
                                workshops, laboratory learning, and
                                professional development.
                            </p>

                            <div className="mt-7 h-px w-full bg-[#DDD7CB]" />

                            <div className="mt-5 flex items-center gap-3 text-sm font-medium text-[#20235A]">
                                <span className="h-2 w-2 rounded-full bg-[#D2B87C]" />

                                {syllabusItems.length} academic documents
                                available
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================
                    SYLLABUS DIRECTORY
                ========================================================== */}
                <section
                    id="syllabus"
                    className="scroll-mt-24 border-y border-[#E7E1D6] bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
                >
                    <div className="mx-auto max-w-7xl">
                        {/* Header */}
                        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                    Syllabus Directory
                                </p>

                                <h2 className="mt-4 font-serif text-3xl font-medium text-[#20235A] sm:text-4xl lg:text-5xl">
                                    First year subjects.
                                </h2>
                            </div>

                            <div className="flex items-center gap-3">
                                <span className="font-serif text-3xl text-[#20235A]">
                                    {syllabusItems.length}
                                </span>

                                <span className="max-w-[110px] text-[10px] font-semibold uppercase leading-4 tracking-[0.14em] text-[#8F7746]">
                                    Documents
                                    <br />
                                    Available
                                </span>
                            </div>
                        </div>

                        {/* Subject cards */}
                        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {syllabusItems.map((item) => (
                                <article
                                    key={item.number}
                                    className="group flex min-h-[270px] flex-col border border-[#E2DDD3] bg-[#FAF9F6] transition-all duration-300 hover:-translate-y-1 hover:border-[#D2B87C] hover:shadow-[0_18px_45px_rgba(32,35,90,0.08)]"
                                >
                                    {/* Top */}
                                    <div className="flex items-center justify-between border-b border-[#E2DDD3] px-5 py-4">
                                        <span className="font-serif text-sm text-[#A08A5D]">
                                            {item.number}
                                        </span>

                                        <FileText
                                            size={18}
                                            strokeWidth={1.35}
                                            className="text-[#8F7746]"
                                        />
                                    </div>

                                    {/* Main */}
                                    <div className="flex flex-1 flex-col p-5 sm:p-6">
                                        <span className="text-[9px] font-semibold uppercase tracking-[0.17em] text-[#8F7746]">
                                            {item.category}
                                        </span>

                                        <h3 className="mt-4 font-serif text-xl font-medium leading-tight text-[#20235A]">
                                            {item.title}
                                        </h3>

                                        <div className="mt-auto pt-7">
                                            <a
                                                href={item.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex w-full items-center justify-between border border-[#D8D1C5] px-4 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-[#20235A] transition-all duration-300 hover:border-[#20235A] hover:bg-[#20235A] hover:text-white"
                                            >
                                                <span className="flex items-center gap-2">
                                                    <Download size={14} />
                                                    Open PDF
                                                </span>

                                                <ArrowUpRight size={15} />
                                            </a>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* =========================================================
                    SUBJECT AREAS
                ========================================================== */}
                <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                    Curriculum Areas
                                </p>

                                <h2 className="mt-4 font-serif text-3xl font-medium leading-tight text-[#20235A] sm:text-4xl">
                                    A curriculum with breadth.
                                </h2>

                                <p className="mt-5 max-w-sm text-sm leading-7 text-[#706A63]">
                                    First-year learning combines technical
                                    foundations with practical exposure and
                                    professional skills.
                                </p>
                            </div>

                            <div className="border-t border-[#DDD7CB]">
                                {categories.map((category, index) => {
                                    const subjectCount =
                                        syllabusItems.filter(
                                            (item) => item.category === category
                                        ).length;

                                    return (
                                        <div
                                            key={category}
                                            className="group flex items-center gap-5 border-b border-[#DDD7CB] py-5 sm:px-4"
                                        >
                                            <span className="font-serif text-sm text-[#A08A5D]">
                                                {String(index + 1).padStart(
                                                    2,
                                                    "0"
                                                )}
                                            </span>

                                            <span className="flex-1 font-serif text-lg text-[#20235A] transition-colors group-hover:text-[#8F7746] sm:text-xl">
                                                {category}
                                            </span>

                                            <span className="text-[10px] font-semibold uppercase tracking-[0.13em] text-[#999189]">
                                                {subjectCount}{" "}
                                                {subjectCount === 1
                                                    ? "Subject"
                                                    : "Subjects"}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================
                    RESOURCE CTA
                ========================================================== */}
                <section className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
                    <div className="relative mx-auto max-w-7xl overflow-hidden bg-[#20235A] px-6 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-16">
                        <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full border border-white/10" />

                        <div className="pointer-events-none absolute -right-2 -top-10 h-36 w-36 rounded-full border border-[#D2B87C]/30" />

                        <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-center">
                            <div className="max-w-2xl">
                                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                                    Academic Resources
                                </p>

                                <h2 className="mt-4 font-serif text-3xl font-medium leading-tight text-white sm:text-4xl">
                                    Explore the learning environment.
                                </h2>

                                <p className="mt-4 max-w-xl text-sm leading-7 text-white/60">
                                    Discover the department's facilities and
                                    academic activities supporting first-year
                                    learning at NCERC.
                                </p>
                            </div>

                            <a
                                href="/departments/applied_science_and_humanities/facilities"
                                className="inline-flex shrink-0 items-center justify-center gap-3 self-start border border-[#D2B87C]/60 px-6 py-4 text-sm font-semibold text-[#D2B87C] transition-colors duration-300 hover:bg-[#D2B87C] hover:text-[#20235A] md:self-center"
                            >
                                Explore Facilities
                                <ArrowRight size={17} />
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <FooterSection />
        </>
    );
}