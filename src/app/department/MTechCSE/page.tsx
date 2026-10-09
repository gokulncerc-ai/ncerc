import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import {
    ArrowRight,
    ArrowUpRight,
    Binary,
    BookOpen,
    BrainCircuit,
    Cpu,
    Database,
    Network,
    Search,
} from "lucide-react";
import React from "react";

const page = () => {
    const curriculumAreas = [
        "Advances in Operating Systems",
        "Advances in DBMS",
        "Computer Systems Performance Analysis",
        "Formal Models in Computer Science",
        "Advanced Algorithms",
        "Advances in Computer Architecture",
        "Computer Networks",
        "Optical Networks",
    ];

    const researchAreas = [
        {
            title: "Natural Language Processing",
            icon: BrainCircuit,
        },
        {
            title: "Data Mining & Business Intelligence",
            icon: Database,
        },
        {
            title: "Image Processing",
            icon: Search,
        },
        {
            title: "Clustering",
            icon: Binary,
        },
        {
            title: "Multi-core Processing",
            icon: Cpu,
        },
        {
            title: "High Performance Computing",
            icon: Network,
        },
    ];

    return (
        <>
            <SiteHeader />

            <main className="bg-[#FAF7F2] text-[#1E1917]">
                {/* =========================================================
            HERO
        ========================================================== */}
                <section className="relative overflow-hidden bg-[#20235A]">
                    <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
                        <div className="grid min-h-[680px] items-stretch lg:grid-cols-[1fr_0.82fr]">
                            {/* Hero Content */}
                            <div className="flex flex-col justify-center py-20 lg:py-28 lg:pr-16">
                                <div className="mb-8 flex items-center gap-4">
                                    <span className="h-px w-12 bg-[#D2B87C]" />

                                    <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D2B87C]">
                                        Postgraduate Programme
                                    </span>
                                </div>

                                <h1 className="max-w-4xl font-serif text-[46px] leading-[0.98] tracking-[-0.035em] text-white sm:text-[60px] lg:text-[70px] xl:text-[78px]">
                                    M.Tech.
                                    <span className="block text-[#D2B87C]">
                                        Computer Science
                                    </span>
                                    <span className="block">& Engineering</span>
                                </h1>

                                <p className="mt-8 max-w-2xl text-[16px] leading-8 text-white/70 sm:text-[17px]">
                                    An advanced postgraduate programme focused on efficient
                                    computing, resource optimisation, emerging technologies,
                                    advanced systems, and research-driven problem solving.
                                </p>

                                <div className="mt-10 flex flex-wrap items-center gap-5">
                                    <a
                                        href="#about"
                                        className="group inline-flex items-center gap-3 bg-[#D2B87C] px-6 py-4 text-sm font-semibold text-[#20235A] transition hover:bg-white"
                                    >
                                        Explore Programme
                                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                    </a>

                                    <div className="flex items-center gap-3 text-sm text-white/55">
                                        <span className="h-2 w-2 rounded-full bg-[#D2B87C]" />
                                        Established in 2011
                                    </div>
                                </div>
                            </div>

                            {/* Hero Image */}
                            <div className="relative min-h-[430px] overflow-hidden lg:min-h-full">
                                <img
                                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=90"
                                    alt="Advanced computer science and technology"
                                    className="absolute inset-0 h-full w-full object-cover"
                                />

                                <div className="absolute inset-0 bg-gradient-to-r from-[#20235A] via-[#20235A]/30 to-transparent lg:from-[#20235A] lg:via-[#20235A]/10 lg:to-transparent" />

                                <div className="absolute bottom-8 left-8 right-8 border border-white/20 bg-[#20235A]/70 p-6 backdrop-blur-md sm:left-10 sm:right-10 sm:p-7">
                                    <div className="flex items-start justify-between gap-5">
                                        <div>
                                            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                                                Programme Focus
                                            </span>

                                            <p className="mt-3 max-w-sm font-serif text-[23px] leading-tight text-white">
                                                Advanced computing, systems, algorithms & research.
                                            </p>
                                        </div>

                                        <Cpu className="mt-1 h-6 w-6 shrink-0 text-[#D2B87C]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="h-px bg-[#D2B87C]/20" />
                </section>

                {/* =========================================================
            PROGRAMME INTRO
        ========================================================== */}
                <section
                    id="about"
                    className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28"
                >
                    <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
                        <div>
                            <div className="flex items-center gap-3">
                                <BookOpen className="h-5 w-5 text-[#8F7746]" />

                                <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                                    About the Programme
                                </span>
                            </div>

                            <div className="mt-7 h-px w-full bg-[#20235A]/10" />

                            <div className="mt-7 flex items-center gap-3">
                                <span className="font-serif text-5xl text-[#20235A]">
                                    2011
                                </span>

                                <span className="max-w-[100px] text-[10px] font-semibold uppercase leading-4 tracking-[0.16em] text-[#1E1917]/45">
                                    Programme Established
                                </span>
                            </div>
                        </div>

                        <div>
                            <h2 className="max-w-4xl font-serif text-[38px] leading-[1.08] tracking-[-0.025em] text-[#20235A] sm:text-[48px] lg:text-[56px]">
                                Building deeper expertise for the next generation of computing.
                            </h2>

                            <div className="mt-8 space-y-6 text-[16px] leading-8 text-[#1E1917]/65 sm:text-[17px]">
                                <p>
                                    Department of Computer Science and Engineering has started
                                    this PG Programme from the year 2011. In the current scenario
                                    of various computing devices, the importance of efficient
                                    computing with resource optimization is becoming more and
                                    more relevant.
                                </p>

                                <p>
                                    The need for advancements in architecture and integrating
                                    computer hardware, software, algorithms, data management,
                                    simulation etc., is being increasingly felt. It is in this
                                    context that this programme assumes relevance.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================
            PROGRAMME PERSPECTIVE
        ========================================================== */}
                <section className="bg-[#F2EFE8]">
                    <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
                        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-24">
                            <div>
                                <div className="mb-5 flex items-center gap-3">
                                    <span className="h-px w-10 bg-[#8F7746]" />

                                    <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                                        Academic Direction
                                    </span>
                                </div>

                                <h2 className="max-w-2xl font-serif text-[40px] leading-[1.06] tracking-[-0.025em] text-[#20235A] sm:text-[52px]">
                                    From computing fundamentals to advanced systems.
                                </h2>

                                <p className="mt-7 max-w-xl text-[16px] leading-8 text-[#1E1917]/65">
                                    The curriculum is designed to develop advanced understanding
                                    across operating systems, databases, algorithms,
                                    architectures, networks, and computer systems performance.
                                </p>
                            </div>

                            <div className="grid gap-px overflow-hidden border border-[#20235A]/10 bg-[#20235A]/10 sm:grid-cols-2">
                                {[
                                    {
                                        number: "01",
                                        title: "Advanced Systems",
                                        text: "Understanding computing architectures, operating systems and system performance.",
                                    },
                                    {
                                        number: "02",
                                        title: "Algorithms",
                                        text: "Developing deeper expertise in advanced algorithms and formal computational models.",
                                    },
                                    {
                                        number: "03",
                                        title: "Data & Intelligence",
                                        text: "Exploring databases, data management and emerging computational applications.",
                                    },
                                    {
                                        number: "04",
                                        title: "Networks",
                                        text: "Building knowledge across computer and optical networking technologies.",
                                    },
                                ].map((item) => (
                                    <div
                                        key={item.number}
                                        className="bg-white p-7 sm:p-8"
                                    >
                                        <span className="font-serif text-sm text-[#8F7746]">
                                            {item.number}
                                        </span>

                                        <h3 className="mt-5 font-serif text-[25px] leading-tight text-[#20235A]">
                                            {item.title}
                                        </h3>

                                        <p className="mt-4 text-sm leading-7 text-[#1E1917]/55">
                                            {item.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================
            CURRICULUM
        ========================================================== */}
                <section className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
                    <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
                        <div>
                            <div className="sticky top-28">
                                <div className="flex items-center gap-3">
                                    <span className="h-px w-10 bg-[#8F7746]" />

                                    <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                                        Curriculum Focus
                                    </span>
                                </div>

                                <h2 className="mt-6 font-serif text-[40px] leading-[1.05] tracking-[-0.025em] text-[#20235A] sm:text-[50px]">
                                    Areas of advanced study.
                                </h2>

                                <p className="mt-6 max-w-md text-[15px] leading-8 text-[#1E1917]/60">
                                    The programme brings together theoretical foundations and
                                    hands-on learning across key areas of modern computer
                                    science.
                                </p>

                                <div className="mt-9 inline-flex items-center gap-3 border border-[#20235A]/15 px-5 py-3">
                                    <Cpu className="h-4 w-4 text-[#8F7746]" />

                                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#20235A]">
                                        {curriculumAreas.length} Core Areas
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-[#20235A]/15">
                            {curriculumAreas.map((area, index) => (
                                <div
                                    key={area}
                                    className="group flex items-center justify-between gap-6 border-b border-[#20235A]/15 py-6 sm:py-7"
                                >
                                    <div className="flex items-center gap-6">
                                        <span className="font-serif text-sm text-[#8F7746]">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                        <h3 className="font-serif text-[22px] leading-tight text-[#20235A] transition-colors duration-300 group-hover:text-[#8F7746] sm:text-[26px]">
                                            {area}
                                        </h3>
                                    </div>

                                    <ArrowUpRight className="h-5 w-5 shrink-0 text-[#20235A]/25 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#8F7746]" />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* =========================================================
            RESEARCH
        ========================================================== */}
                <section className="bg-[#20235A]">
                    <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
                        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
                            <div>
                                <div className="flex items-center gap-3">
                                    <span className="h-px w-10 bg-[#D2B87C]" />

                                    <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                        Areas of Research
                                    </span>
                                </div>

                                <h2 className="mt-7 max-w-xl font-serif text-[40px] leading-[1.06] tracking-[-0.025em] text-white sm:text-[52px]">
                                    Research that explores what computing can become.
                                </h2>

                                <p className="mt-7 max-w-lg text-[16px] leading-8 text-white/60">
                                    Students will get an opportunity to participate in projects
                                    related to emerging and advanced areas of computer science,
                                    creating opportunities to explore research-driven
                                    applications and technologies.
                                </p>
                            </div>

                            <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2">
                                {researchAreas.map((area, index) => {
                                    const Icon = area.icon;

                                    return (
                                        <div
                                            key={area.title}
                                            className="group bg-[#20235A] p-7 transition-colors duration-300 hover:bg-[#292c69] sm:p-8"
                                        >
                                            <div className="flex items-start justify-between gap-4">
                                                <div className="flex h-11 w-11 items-center justify-center border border-[#D2B87C]/30">
                                                    <Icon className="h-5 w-5 text-[#D2B87C]" />
                                                </div>

                                                <span className="font-serif text-sm text-white/25">
                                                    {String(index + 1).padStart(2, "0")}
                                                </span>
                                            </div>

                                            <h3 className="mt-9 max-w-xs font-serif text-[25px] leading-tight text-white">
                                                {area.title}
                                            </h3>

                                            <div className="mt-7 h-px w-8 bg-[#D2B87C]/50 transition-all duration-300 group-hover:w-14" />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================
            RESEARCH STATEMENT
        ========================================================== */}
                <section className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
                    <div className="border-t border-[#20235A]/15 pt-12 lg:pt-16">
                        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start lg:gap-24">
                            <div>
                                <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                                    The M.Tech. Perspective
                                </span>
                            </div>

                            <div>
                                <blockquote className="max-w-5xl font-serif text-[32px] leading-[1.16] tracking-[-0.02em] text-[#20235A] sm:text-[42px] lg:text-[50px]">
                                    “Efficient computing begins where advanced knowledge meets
                                    the ability to solve complex problems.”
                                </blockquote>

                                <div className="mt-8 flex items-center gap-4">
                                    <span className="h-px w-12 bg-[#D2B87C]" />
                                    <span className="text-sm text-[#1E1917]/50">
                                        Advanced Computer Science & Engineering
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================
            CTA
        ========================================================== */}
                <section className="bg-[#F2EFE8]">
                    <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
                        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
                            <div>
                                <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                                    Explore NCERC
                                </span>

                                <h2 className="mt-5 max-w-3xl font-serif text-[36px] leading-tight tracking-[-0.025em] text-[#20235A] sm:text-[46px]">
                                    Discover more about postgraduate education at NCERC.
                                </h2>
                            </div>

                            <a
                                href="/"
                                className="group flex w-fit items-center gap-4 bg-[#20235A] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#171946]"
                            >
                                Explore NCERC
                                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <FooterSection />
        </>
    );
};

export default page;