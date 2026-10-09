import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import {
    ArrowRight,
    ArrowUpRight,
    BarChart3,
    BrainCircuit,
    BriefcaseBusiness,
    Building2,
    Check,
    ChevronRight,
    Code2,
    Database,
    GraduationCap,
    LineChart,
    Network,
    Search,
    ShieldCheck,
    Sparkles,
} from "lucide-react";
import React from "react";

const page = () => {
    const disciplines = [
        "Artificial Intelligence",
        "Machine Learning",
        "Data Mining",
        "Big Data Analytics",
        "Deep Learning",
        "Natural Language Processing",
        "Data Visualization",
        "Statistical Modelling",
    ];

    const keyAreas = [
        "Mathematical Foundations for Data Science",
        "Big Data Analytics",
        "Natural Language Processing",
        "Artificial Intelligence Algorithms",
        "Data Visualization and Interpretation",
        "Research Methodology and Dissertation",
        "Machine Learning and Deep Learning",
        "Data Mining and Data Warehousing",
        "Computer Vision",
        "Optimization Techniques",
        "AI Ethics and Responsible AI",
    ];

    const advantages = [
        {
            number: "01",
            title: "Ph.D Research Opportunities",
            description:
                "NCERC is an approved Ph.D research centre under APJ Abdul Kalam Technological University, providing opportunities for advanced research and doctoral studies in emerging technologies.",
            icon: GraduationCap,
        },
        {
            number: "02",
            title: "Industry-Relevant Curriculum",
            description:
                "The programme focuses on modern technologies such as artificial intelligence, machine learning, and big data analytics that are widely used across industries.",
            icon: BriefcaseBusiness,
        },
        {
            number: "03",
            title: "Research & Innovation Culture",
            description:
                "Students can participate in research projects, innovation activities, and collaborative research initiatives with faculty members and research scholars.",
            icon: Sparkles,
        },
        {
            number: "04",
            title: "Advanced Laboratories",
            description:
                "Modern computing laboratories, AI tools, and data analytics platforms support practical and application-oriented learning.",
            icon: Database,
        },
        {
            number: "05",
            title: "Skill-Based Learning",
            description:
                "The programme emphasizes programming skills, algorithm design, data analysis techniques, and problem-solving using AI technologies.",
            icon: Code2,
        },
    ];

    const careerRoles = [
        "Data Scientist",
        "Artificial Intelligence Engineer",
        "Machine Learning Engineer",
        "Data Analyst",
        "AI Research Scientist",
        "Big Data Engineer",
        "Business Intelligence Analyst",
        "AI Software Developer",
        "Data Engineer",
        "Robotics and Automation Engineer",
    ];

    const industries = [
        "Information Technology",
        "Healthcare and Medical Research",
        "Finance and Banking",
        "E-commerce and Digital Marketing",
        "Telecommunications",
        "Automotive and Robotics",
        "Cybersecurity",
        "Smart Cities and IoT",
        "Government and Research Organizations",
    ];

    const futureAreas = [
        {
            title: "Automation & Intelligent Systems",
            icon: BrainCircuit,
        },
        {
            title: "Predictive Analytics",
            icon: LineChart,
        },
        {
            title: "Smart Digital Platforms",
            icon: Network,
        },
        {
            title: "Data-Driven Decision Making",
            icon: BarChart3,
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
                        <div className="grid min-h-[700px] items-stretch lg:grid-cols-[1fr_0.82fr]">
                            {/* Hero Content */}
                            <div className="flex flex-col justify-center py-20 lg:py-28 lg:pr-16">
                                <div className="mb-8 flex items-center gap-4">
                                    <span className="h-px w-12 bg-[#D2B87C]" />

                                    <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D2B87C]">
                                        Postgraduate Programme
                                    </span>
                                </div>

                                <h1 className="max-w-4xl font-serif text-[44px] leading-[0.98] tracking-[-0.035em] text-white sm:text-[58px] lg:text-[68px] xl:text-[76px]">
                                    M.Tech.
                                    <span className="block text-[#D2B87C]">
                                        Artificial Intelligence
                                    </span>
                                    <span className="block">& Data Science</span>
                                </h1>

                                <p className="mt-8 max-w-2xl text-[16px] leading-8 text-white/70 sm:text-[17px]">
                                    Developing intelligent systems, advanced analytical
                                    capabilities, and data-driven solutions for the rapidly
                                    evolving digital world.
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
                                        Two-Year Postgraduate Programme
                                    </div>
                                </div>
                            </div>

                            {/* Hero Image */}
                            <div className="relative min-h-[430px] overflow-hidden lg:min-h-full">
                                <img
                                    src="https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=1600&q=90"
                                    alt="Artificial intelligence and data science technology"
                                    className="absolute inset-0 h-full w-full object-cover"
                                />

                                <div className="absolute inset-0 bg-gradient-to-r from-[#20235A] via-[#20235A]/25 to-transparent" />

                                <div className="absolute bottom-8 left-8 right-8 border border-white/20 bg-[#20235A]/75 p-6 backdrop-blur-md sm:left-10 sm:right-10 sm:p-7">
                                    <div className="flex items-start justify-between gap-5">
                                        <div>
                                            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                                                Programme Focus
                                            </span>

                                            <p className="mt-3 max-w-sm font-serif text-[23px] leading-tight text-white">
                                                Intelligence, data, algorithms & innovation.
                                            </p>
                                        </div>

                                        <BrainCircuit className="mt-1 h-6 w-6 shrink-0 text-[#D2B87C]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="h-px bg-[#D2B87C]/20" />
                </section>

                {/* =========================================================
            ABOUT
        ========================================================== */}
                <section
                    id="about"
                    className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28"
                >
                    <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
                        <div>
                            <div className="flex items-center gap-3">
                                <Sparkles className="h-5 w-5 text-[#8F7746]" />

                                <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                                    About the Programme
                                </span>
                            </div>

                            <div className="mt-7 h-px w-full bg-[#20235A]/10" />

                            <div className="mt-7">
                                <span className="font-serif text-5xl text-[#20235A]">
                                    AI + Data
                                </span>

                                <p className="mt-2 max-w-[220px] text-xs uppercase leading-5 tracking-[0.14em] text-[#1E1917]/45">
                                    Intelligent technologies for a data-driven future
                                </p>
                            </div>
                        </div>

                        <div>
                            <h2 className="max-w-4xl font-serif text-[38px] leading-[1.08] tracking-[-0.025em] text-[#20235A] sm:text-[48px] lg:text-[56px]">
                                Turning data into intelligence and intelligence into
                                innovation.
                            </h2>

                            <div className="mt-8 space-y-6 text-[16px] leading-8 text-[#1E1917]/65 sm:text-[17px]">
                                <p>
                                    Artificial Intelligence and Data Science are among the
                                    fastest-growing technological domains in the modern digital
                                    world. The M.Tech in Artificial Intelligence & Data Science
                                    programme focuses on developing intelligent systems capable
                                    of learning from data, analyzing complex information, and
                                    supporting advanced decision-making processes.
                                </p>

                                <p>
                                    Offered at Nehru College of Engineering and Research Centre
                                    (NCERC), this programme is designed to equip students with
                                    advanced knowledge in artificial intelligence, machine
                                    learning, big data analytics, and computational intelligence.
                                    The course blends theoretical foundations with practical
                                    applications, enabling students to solve real-world
                                    problems using cutting-edge technologies.
                                </p>

                                <p>
                                    NCERC is also recognized as an approved Ph.D Research Centre
                                    under APJ Abdul Kalam Technological University (KTU),
                                    providing students with opportunities to pursue research and
                                    innovation in emerging technological areas.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================
            WHAT IS M.TECH AI & DATA SCIENCE
        ========================================================== */}
                <section className="bg-[#F2EFE8]">
                    <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
                        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
                            <div>
                                <div className="mb-5 flex items-center gap-3">
                                    <span className="h-px w-10 bg-[#8F7746]" />

                                    <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                                        Programme Overview
                                    </span>
                                </div>

                                <h2 className="font-serif text-[40px] leading-[1.06] tracking-[-0.025em] text-[#20235A] sm:text-[52px]">
                                    What is M.Tech Artificial Intelligence & Data Science?
                                </h2>

                                <p className="mt-7 max-w-xl text-[16px] leading-8 text-[#1E1917]/65">
                                    A two-year postgraduate engineering programme focused on
                                    building intelligent machines and extracting meaningful
                                    insights from large volumes of data.
                                </p>

                                <div className="mt-9 flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                                        <Database className="h-5 w-5" />
                                    </div>

                                    <div>
                                        <span className="block text-sm font-semibold text-[#20235A]">
                                            Data + Intelligence
                                        </span>
                                        <span className="text-xs text-[#1E1917]/50">
                                            Integrated multidisciplinary learning
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <p className="mb-7 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                    Programme Integrates
                                </p>

                                <div className="grid gap-px overflow-hidden border border-[#20235A]/10 bg-[#20235A]/10 sm:grid-cols-2">
                                    {disciplines.map((discipline, index) => (
                                        <div
                                            key={discipline}
                                            className="group flex items-center justify-between gap-5 bg-white p-6 transition hover:bg-[#20235A]"
                                        >
                                            <div className="flex items-center gap-4">
                                                <span className="font-serif text-sm text-[#8F7746] group-hover:text-[#D2B87C]">
                                                    {String(index + 1).padStart(2, "0")}
                                                </span>

                                                <span className="font-serif text-[21px] leading-tight text-[#20235A] transition-colors group-hover:text-white">
                                                    {discipline}
                                                </span>
                                            </div>

                                            <ArrowUpRight className="h-4 w-4 shrink-0 text-[#20235A]/20 transition group-hover:text-[#D2B87C]" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================
            KEY AREAS OF STUDY
        ========================================================== */}
                <section className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
                    <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
                        <div>
                            <div className="sticky top-28">
                                <div className="flex items-center gap-3">
                                    <span className="h-px w-10 bg-[#8F7746]" />

                                    <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                                        Key Areas of Study
                                    </span>
                                </div>

                                <h2 className="mt-6 font-serif text-[40px] leading-[1.05] tracking-[-0.025em] text-[#20235A] sm:text-[50px]">
                                    Learn the technologies shaping tomorrow.
                                </h2>

                                <p className="mt-6 max-w-md text-[15px] leading-8 text-[#1E1917]/60">
                                    The curriculum brings together advanced computational
                                    concepts, analytical methods, research practices, and
                                    emerging AI technologies.
                                </p>

                                <div className="mt-9 inline-flex items-center gap-3 border border-[#20235A]/15 px-5 py-3">
                                    <BrainCircuit className="h-4 w-4 text-[#8F7746]" />

                                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#20235A]">
                                        {keyAreas.length} Study Areas
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-[#20235A]/15">
                            {keyAreas.map((area, index) => (
                                <div
                                    key={area}
                                    className="group flex items-center justify-between gap-6 border-b border-[#20235A]/15 py-6 sm:py-7"
                                >
                                    <div className="flex items-center gap-6">
                                        <span className="font-serif text-sm text-[#8F7746]">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                        <h3 className="font-serif text-[21px] leading-tight text-[#20235A] transition-colors duration-300 group-hover:text-[#8F7746] sm:text-[25px]">
                                            {area}
                                        </h3>
                                    </div>

                                    <ChevronRight className="h-5 w-5 shrink-0 text-[#20235A]/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#8F7746]" />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* =========================================================
            ADVANTAGES
        ========================================================== */}
                <section className="bg-[#20235A]">
                    <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
                        <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
                            <div>
                                <div className="flex items-center gap-3">
                                    <span className="h-px w-10 bg-[#D2B87C]" />

                                    <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                        Why NCERC
                                    </span>
                                </div>

                                <h2 className="mt-7 max-w-xl font-serif text-[40px] leading-[1.06] tracking-[-0.025em] text-white sm:text-[52px]">
                                    An environment for learning, research and innovation.
                                </h2>

                                <p className="mt-7 max-w-lg text-[16px] leading-8 text-white/60">
                                    The programme combines advanced academic learning with
                                    opportunities for practical application, research, and
                                    professional development.
                                </p>
                            </div>

                            <div className="border-t border-white/10">
                                {advantages.map((advantage) => {
                                    const Icon = advantage.icon;

                                    return (
                                        <div
                                            key={advantage.number}
                                            className="group grid gap-6 border-b border-white/10 py-7 sm:grid-cols-[70px_1fr_auto] sm:items-start sm:py-8"
                                        >
                                            <span className="font-serif text-sm text-[#D2B87C]">
                                                {advantage.number}
                                            </span>

                                            <div>
                                                <h3 className="font-serif text-[27px] leading-tight text-white">
                                                    {advantage.title}
                                                </h3>

                                                <p className="mt-3 max-w-2xl text-sm leading-7 text-white/50">
                                                    {advantage.description}
                                                </p>
                                            </div>

                                            <div className="flex h-11 w-11 items-center justify-center border border-white/10 transition group-hover:border-[#D2B87C]/50">
                                                <Icon className="h-5 w-5 text-[#D2B87C]" />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================
            SKILL BASED LEARNING
        ========================================================== */}
                <section className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
                    <div className="grid overflow-hidden border border-[#20235A]/10 lg:grid-cols-[0.85fr_1.15fr]">
                        <div className="bg-[#F2EFE8] p-8 sm:p-12 lg:p-14">
                            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                Skill-Based Learning
                            </span>

                            <h2 className="mt-6 font-serif text-[38px] leading-[1.06] tracking-[-0.025em] text-[#20235A] sm:text-[48px]">
                                Skills that translate into real-world capability.
                            </h2>

                            <p className="mt-6 max-w-lg text-[15px] leading-8 text-[#1E1917]/60">
                                The programme emphasizes practical capabilities that help
                                students become industry-ready professionals in AI and data
                                science.
                            </p>
                        </div>

                        <div className="grid bg-white sm:grid-cols-2">
                            {[
                                "Programming Skills",
                                "Algorithm Design",
                                "Data Analysis Techniques",
                                "AI-Based Problem Solving",
                            ].map((skill, index) => (
                                <div
                                    key={skill}
                                    className="border-b border-[#20235A]/10 p-7 sm:p-9"
                                >
                                    <div className="flex h-10 w-10 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                                        <Check className="h-4 w-4" />
                                    </div>

                                    <span className="mt-7 block font-serif text-sm text-[#8F7746]">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <h3 className="mt-3 font-serif text-[25px] leading-tight text-[#20235A]">
                                        {skill}
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* =========================================================
            CAREER OPPORTUNITIES
        ========================================================== */}
                <section className="bg-[#F2EFE8]">
                    <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
                        <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
                            <div>
                                <div className="flex items-center gap-3">
                                    <BriefcaseBusiness className="h-5 w-5 text-[#8F7746]" />

                                    <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                                        Career Opportunities
                                    </span>
                                </div>

                                <h2 className="mt-7 font-serif text-[40px] leading-[1.06] tracking-[-0.025em] text-[#20235A] sm:text-[52px]">
                                    Where AI and data expertise can take you.
                                </h2>

                                <p className="mt-7 max-w-lg text-[16px] leading-8 text-[#1E1917]/60">
                                    Graduates can pursue professional roles across technology,
                                    analytics, research, engineering, and intelligent systems.
                                </p>
                            </div>

                            <div>
                                <p className="mb-7 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                    Popular Job Roles
                                </p>

                                <div className="grid gap-px overflow-hidden border border-[#20235A]/10 bg-[#20235A]/10 sm:grid-cols-2">
                                    {careerRoles.map((role, index) => (
                                        <div
                                            key={role}
                                            className="flex items-center gap-4 bg-white p-5 sm:p-6"
                                        >
                                            <span className="font-serif text-sm text-[#8F7746]">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>

                                            <span className="font-serif text-[20px] leading-tight text-[#20235A]">
                                                {role}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================
            INDUSTRIES
        ========================================================== */}
                <section className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
                    <div className="mb-14 max-w-3xl">
                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-px w-10 bg-[#8F7746]" />

                            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                                Industry Applications
                            </span>
                        </div>

                        <h2 className="font-serif text-[40px] leading-[1.06] tracking-[-0.025em] text-[#20235A] sm:text-[52px]">
                            AI and data science across industries.
                        </h2>

                        <p className="mt-6 text-[16px] leading-8 text-[#1E1917]/60">
                            AI and data-driven technologies are applied across a broad range
                            of industries, from healthcare and finance to robotics,
                            cybersecurity, and smart infrastructure.
                        </p>
                    </div>

                    <div className="grid gap-px overflow-hidden border border-[#20235A]/10 bg-[#20235A]/10 sm:grid-cols-2 lg:grid-cols-3">
                        {industries.map((industry, index) => (
                            <div
                                key={industry}
                                className="group flex min-h-[150px] flex-col justify-between bg-white p-7 transition-colors duration-300 hover:bg-[#20235A] sm:p-8"
                            >
                                <div className="flex items-start justify-between gap-5">
                                    <Building2 className="h-5 w-5 text-[#8F7746] transition group-hover:text-[#D2B87C]" />

                                    <span className="font-serif text-sm text-[#20235A]/25 transition group-hover:text-white/25">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                </div>

                                <h3 className="mt-8 font-serif text-[22px] leading-tight text-[#20235A] transition group-hover:text-white">
                                    {industry}
                                </h3>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 flex items-center gap-4 border-l-2 border-[#D2B87C] pl-5">
                        <p className="max-w-4xl text-sm leading-7 text-[#1E1917]/55">
                            Applications include autonomous vehicles, healthcare
                            diagnostics, financial forecasting, and personalized
                            recommendation systems.
                        </p>
                    </div>
                </section>

                {/* =========================================================
            FUTURE SCOPE
        ========================================================== */}
                <section className="bg-[#20235A]">
                    <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
                        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
                            <div>
                                <div className="flex items-center gap-3">
                                    <span className="h-px w-10 bg-[#D2B87C]" />

                                    <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                        Future Scope
                                    </span>
                                </div>

                                <h2 className="mt-7 max-w-xl font-serif text-[40px] leading-[1.06] tracking-[-0.025em] text-white sm:text-[52px]">
                                    Preparing for a world powered by intelligent technology.
                                </h2>

                                <p className="mt-7 max-w-lg text-[16px] leading-8 text-white/60">
                                    Organizations increasingly rely on data-driven insights and
                                    intelligent automation to improve efficiency and innovation.
                                    The programme prepares students to engage with these
                                    evolving technological directions.
                                </p>
                            </div>

                            <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2">
                                {futureAreas.map((area, index) => {
                                    const Icon = area.icon;

                                    return (
                                        <div
                                            key={area.title}
                                            className="group bg-[#20235A] p-8 transition hover:bg-[#292C69] sm:p-10"
                                        >
                                            <div className="flex items-start justify-between">
                                                <div className="flex h-12 w-12 items-center justify-center border border-[#D2B87C]/30">
                                                    <Icon className="h-5 w-5 text-[#D2B87C]" />
                                                </div>

                                                <span className="font-serif text-sm text-white/20">
                                                    {String(index + 1).padStart(2, "0")}
                                                </span>
                                            </div>

                                            <h3 className="mt-10 max-w-xs font-serif text-[26px] leading-tight text-white">
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
            CLOSING STATEMENT
        ========================================================== */}
                <section className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
                    <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
                        <div>
                            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                                The NCERC Advantage
                            </span>

                            <div className="mt-7 h-px w-16 bg-[#D2B87C]" />
                        </div>

                        <div>
                            <h2 className="font-serif text-[34px] leading-[1.12] tracking-[-0.02em] text-[#20235A] sm:text-[44px] lg:text-[50px]">
                                A platform for advanced computing, research and data-driven
                                innovation.
                            </h2>

                            <p className="mt-7 text-[16px] leading-8 text-[#1E1917]/65">
                                The M.Tech Artificial Intelligence & Data Science programme at
                                Nehru College of Engineering and Research Centre provides a
                                platform for students who wish to build expertise in advanced
                                computing technologies and data-driven innovation.
                            </p>

                            <p className="mt-5 text-[16px] leading-8 text-[#1E1917]/65">
                                With its research-oriented academic environment, modern
                                infrastructure, and recognition as a Ph.D research centre under
                                APJ Abdul Kalam Technological University, NCERC provides an
                                environment for students to pursue higher studies, research,
                                and careers in the rapidly evolving fields of Artificial
                                Intelligence and Data Science.
                            </p>
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
                                    Discover more about postgraduate education and research at
                                    NCERC.
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