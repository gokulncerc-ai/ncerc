import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import DepartmentNavigation from "./DepartmentsNavigation/page";
import Image from "next/image";
import {
    ArrowRight,
    ArrowUpRight,
    Award,
    Bot,
    BrainCircuit,
    Check,
    ChevronRight,
    Cpu,
    Factory,
    GraduationCap,
    Lightbulb,
    Network,
    Settings2,
    ShieldCheck,
    Sparkles,
    Target,
    Wrench,
} from "lucide-react";
import React from "react";

const page = () => {
    const missions = [
        {
            number: "M1",
            text: "The department is committed to impart the right blend of knowledge and quality education to create professionally ethical and socially responsible graduates.",
        },
        {
            number: "M2",
            text: "The department is committed to impart the awareness to meet the current challenges in technology.",
        },
        {
            number: "M3",
            text: "Establish state-of-the-art laboratories to promote practical knowledge of mechatronics to meet the needs of the society.",
        },
    ];

    const peos = [
        {
            number: "PEO 1",
            text: "Graduates shall have the ability to work in multidisciplinary environment with good professional and commitment.",
        },
        {
            number: "PEO 2",
            text: "Graduates shall have the ability to solve the complex engineering problems by applying electrical, mechanical, electronics and computer knowledge and engage in lifelong learning in their profession.",
        },
        {
            number: "PEO 3",
            text: "Graduates shall have the ability to lead and contribute in a team with entrepreneur skills, professional, social and ethical responsibilities.",
        },
        {
            number: "PEO 4",
            text: "Graduates shall have ability to acquire scientific and engineering fundamentals necessary for higher studies and research.",
        },
    ];

    const pos = [
        {
            number: "01",
            title: "Engineering knowledge",
            text: "Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.",
        },
        {
            number: "02",
            title: "Problem analysis",
            text: "Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.",
        },
        {
            number: "03",
            title: "Design & development of solutions",
            text: "Design solutions for complex engineering problems and design system components or processes that meet specified needs with appropriate consideration for public health, safety, cultural, societal, and environmental considerations.",
        },
        {
            number: "04",
            title: "Conduct investigations of complex problems",
            text: "Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of information to provide valid conclusions.",
        },
        {
            number: "05",
            title: "Modern tool usage",
            text: "Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of their limitations.",
        },
        {
            number: "06",
            title: "The engineer and society",
            text: "Apply reasoning informed by contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to professional engineering practice.",
        },
        {
            number: "07",
            title: "Environment & sustainability",
            text: "Understand the impact of professional engineering solutions in societal and environmental contexts, and demonstrate knowledge of and need for sustainable development.",
        },
        {
            number: "08",
            title: "Ethics",
            text: "Apply ethical principles and commit to professional ethics and responsibilities and norms of engineering practice.",
        },
        {
            number: "09",
            title: "Individual & team work",
            text: "Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.",
        },
        {
            number: "10",
            title: "Communication",
            text: "Communicate effectively on complex engineering activities with the engineering community and with society at large through reports, documentation, presentations, and clear instructions.",
        },
        {
            number: "11",
            title: "Project management & finance",
            text: "Demonstrate knowledge and understanding of engineering and management principles and apply these to one's own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.",
        },
        {
            number: "12",
            title: "Life-long learning",
            text: "Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.",
        },
    ];

    const psos = [
        {
            number: "PSO 1",
            title: "Integrated Mechatronic Systems",
            text: "Design and develop Mechatronics systems to solve complex engineering problems by integrating electronics, mechanical and control systems.",
        },
        {
            number: "PSO 2",
            title: "Automation & Robotics",
            text: "Apply engineering knowledge to conduct investigations of complex engineering problems related to instrumentation, control, automation, robotics and provide solutions.",
        },
    ];

    const focusAreas = [
        {
            title: "Robotics & Automation",
            icon: Bot,
        },
        {
            title: "Industrial Automation & PLC",
            icon: Factory,
        },
        {
            title: "Embedded Systems & IoT",
            icon: Cpu,
        },
        {
            title: "AI Applications",
            icon: BrainCircuit,
        },
        {
            title: "Control Systems",
            icon: Settings2,
        },
        {
            title: "Mechatronic System Design",
            icon: Wrench,
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
                        <div className="grid min-h-[720px] items-stretch lg:grid-cols-[1fr_0.82fr]">
                            {/* Hero Content */}
                            <div className="flex flex-col justify-center py-20 lg:py-28 lg:pr-16">
                                <div className="mb-8 flex flex-wrap items-center gap-4">
                                    <span className="h-px w-12 bg-[#D2B87C]" />

                                    <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D2B87C]">
                                        Department of Engineering
                                    </span>
                                </div>

                                <h1 className="max-w-4xl font-serif text-[46px] leading-[0.97] tracking-[-0.035em] text-white sm:text-[60px] lg:text-[70px] xl:text-[78px]">
                                    Mechatronics
                                    <span className="block text-[#D2B87C]">Engineering</span>
                                </h1>

                                <p className="mt-5 max-w-xl text-[14px] font-semibold uppercase tracking-[0.14em] text-white/50">
                                    Multidisciplinary Engineering • Robotics • Automation
                                </p>

                                <p className="mt-8 max-w-2xl text-[16px] leading-8 text-white/70 sm:text-[17px]">
                                    A multidisciplinary engineering programme integrating
                                    mechanical systems, electronics, electrical engineering,
                                    robotics, instrumentation, computer science, and control
                                    systems to create intelligent technologies.
                                </p>

                                <div className="mt-10 flex flex-wrap items-center gap-5">
                                    <a
                                        href="#about"
                                        className="group inline-flex items-center gap-3 bg-[#D2B87C] px-6 py-4 text-sm font-semibold text-[#20235A] transition hover:bg-white"
                                    >
                                        Explore Department
                                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                    </a>

                                    <div className="flex items-center gap-3 text-sm text-white/55">
                                        <span className="h-2 w-2 rounded-full bg-[#D2B87C]" />
                                        Established in 2013
                                    </div>
                                </div>

                                {/* Accreditation */}
                                <div className="mt-12 flex items-center gap-4 border-t border-white/10 pt-7">
                                    <div className="flex h-12 w-12 items-center justify-center border border-[#D2B87C]/40">
                                        <Award className="h-5 w-5 text-[#D2B87C]" />
                                    </div>

                                    <div>
                                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                            NBA Accredited
                                        </p>

                                        <p className="mt-1 text-sm text-white/55">
                                            Reaccreditation granted in July 2025
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Hero Image */}
                            <div className="relative min-h-[450px] overflow-hidden lg:min-h-full">
                                <Image
                                    src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1600&q=90"
                                    alt="Robotics and mechatronics engineering"
                                    fill
                                    sizes="(min-width: 1024px) 330px, 100vw"
                                    className="absolute inset-0 h-full w-full object-cover"
                                />

                                <div className="absolute inset-0 bg-gradient-to-r from-[#20235A] via-[#20235A]/20 to-transparent" />

                                <div className="absolute bottom-8 left-8 right-8 border border-white/20 bg-[#20235A]/75 p-6 backdrop-blur-md sm:left-10 sm:right-10 sm:p-7">
                                    <div className="flex items-start justify-between gap-5">
                                        <div>
                                            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                                                Engineering at the Intersection
                                            </span>

                                            <p className="mt-3 max-w-sm font-serif text-[23px] leading-tight text-white">
                                                Mechanical systems meet electronics, software and
                                                intelligence.
                                            </p>
                                        </div>

                                        <Bot className="mt-1 h-6 w-6 shrink-0 text-[#D2B87C]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="h-px bg-[#D2B87C]/20" />
                </section>
                <DepartmentNavigation />
                {/* =========================================================
            QUICK FACTS
        ========================================================== */}
                <section className="border-b border-[#20235A]/10 bg-white">
                    <div className="mx-auto grid max-w-[1440px] sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            {
                                number: "2013",
                                label: "Department Established",
                            },
                            {
                                number: "60",
                                label: "Annual Intake",
                            },
                            {
                                number: "2022",
                                label: "NBA Accreditation",
                            },
                            {
                                number: "2025",
                                label: "Reaccreditation",
                            },
                        ].map((item, index) => (
                            <div
                                key={item.label}
                                className={`px-6 py-8 sm:px-10 lg:px-12 lg:py-10 ${index !== 0 ? "border-t sm:border-l sm:border-t-0" : ""
                                    } border-[#20235A]/10`}
                            >
                                <span className="font-serif text-[36px] text-[#20235A] sm:text-[42px]">
                                    {item.number}
                                </span>

                                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                                    {item.label}
                                </p>
                            </div>
                        ))}
                    </div>
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
                                    About the Department
                                </span>
                            </div>

                            <div className="mt-7 h-px w-full bg-[#20235A]/10" />

                            <div className="mt-7">
                                <span className="font-serif text-5xl text-[#20235A]">
                                    Since 2013
                                </span>

                                <p className="mt-2 max-w-[230px] text-xs uppercase leading-5 tracking-[0.14em] text-[#1E1917]/45">
                                    Building multidisciplinary engineering capabilities
                                </p>
                            </div>
                        </div>

                        <div>
                            <h2 className="max-w-4xl font-serif text-[38px] leading-[1.08] tracking-[-0.025em] text-[#20235A] sm:text-[48px] lg:text-[56px]">
                                Engineering the connection between machines, intelligence and
                                the real world.
                            </h2>

                            <div className="mt-8 space-y-6 text-[16px] leading-8 text-[#1E1917]/65 sm:text-[17px]">
                                <p>
                                    The Nehru College of Engineering and Research Centre (NCERC)
                                    established its Department of Mechatronics Engineering in
                                    2013 with the objective of offering a multidisciplinary
                                    engineering program that integrates mechanical engineering,
                                    electronics, electrical engineering, robotics,
                                    instrumentation, computer science, and control systems.
                                </p>

                                <p>
                                    The B.Tech. programme in Mechatronics Engineering was
                                    introduced to meet the growing demand for skilled
                                    professionals in automation, robotics, intelligent system
                                    design, and Industry 4.0 technologies, with an annual intake
                                    of 60 students.
                                </p>

                                <p>
                                    The programme is approved by All India Council for Technical
                                    Education (AICTE), affiliated to APJ Abdul Kalam
                                    Technological University, and has been accredited by the
                                    National Board of Accreditation (NBA) since 2022, with
                                    reaccreditation granted in July 2025.
                                </p>

                                <p>
                                    Since its inception, the department has steadily grown in
                                    academic strength, infrastructure, and industry
                                    collaboration, emerging as a dynamic hub of innovation that
                                    merges core engineering disciplines to design and develop
                                    smart systems combining mechanical components with
                                    electronic control and intelligent software.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================
            DEPARTMENT STRENGTH
        ========================================================== */}
                <section className="bg-[#F2EFE8]">
                    <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
                        <div className="mb-14 max-w-3xl">
                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#8F7746]" />

                                <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                                    Department Strength
                                </span>
                            </div>

                            <h2 className="font-serif text-[40px] leading-[1.06] tracking-[-0.025em] text-[#20235A] sm:text-[52px]">
                                Learning across engineering disciplines.
                            </h2>

                            <p className="mt-6 text-[16px] leading-8 text-[#1E1917]/60">
                                The department combines strong engineering fundamentals with
                                practical exposure, interdisciplinary projects, research,
                                industry certifications, and emerging technology applications.
                            </p>
                        </div>

                        <div className="grid gap-px overflow-hidden border border-[#20235A]/10 bg-[#20235A]/10 sm:grid-cols-2 lg:grid-cols-3">
                            {focusAreas.map((area, index) => {
                                const Icon = area.icon;

                                return (
                                    <div
                                        key={area.title}
                                        className="group bg-white p-8 transition-colors duration-300 hover:bg-[#20235A] sm:p-9"
                                    >
                                        <div className="flex items-start justify-between">
                                            <div className="flex h-12 w-12 items-center justify-center border border-[#20235A]/10 transition group-hover:border-[#D2B87C]/40">
                                                <Icon className="h-5 w-5 text-[#8F7746] transition group-hover:text-[#D2B87C]" />
                                            </div>

                                            <span className="font-serif text-sm text-[#20235A]/20 transition group-hover:text-white/20">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>
                                        </div>

                                        <h3 className="mt-10 font-serif text-[26px] leading-tight text-[#20235A] transition group-hover:text-white">
                                            {area.title}
                                        </h3>

                                        <div className="mt-7 h-px w-8 bg-[#D2B87C]/50 transition-all duration-300 group-hover:w-14" />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* =========================================================
            DEPARTMENT COMMITMENT
        ========================================================== */}
                <section className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
                    <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
                        <div>
                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#8F7746]" />

                                <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                                    Academic Approach
                                </span>
                            </div>

                            <h2 className="max-w-3xl font-serif text-[40px] leading-[1.06] tracking-[-0.025em] text-[#20235A] sm:text-[52px]">
                                Preparing engineers for rapidly evolving technologies.
                            </h2>

                            <div className="mt-8 space-y-5 text-[16px] leading-8 text-[#1E1917]/65">
                                <p>
                                    The department is committed to delivering high-quality
                                    technical education supported by modern, state-of-the-art
                                    laboratories and experienced faculty with industry and
                                    academic expertise.
                                </p>

                                <p>
                                    Students are encouraged to participate in research,
                                    collaborate with industry partners, engage in national and
                                    international competitions, and work closely with faculty on
                                    innovative projects.
                                </p>

                                <p>
                                    The department also offers minor and honours degree options
                                    that empower students to shape themselves into innovative
                                    professionals.
                                </p>
                            </div>
                        </div>

                        <div className="border border-[#20235A]/10 bg-[#F2EFE8] p-8 sm:p-10 lg:p-12">
                            <div className="flex h-14 w-14 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                                <Lightbulb className="h-6 w-6" />
                            </div>

                            <h3 className="mt-8 font-serif text-[30px] leading-tight text-[#20235A]">
                                From fundamentals to innovation.
                            </h3>

                            <div className="mt-8 space-y-5">
                                {[
                                    "Core engineering fundamentals",
                                    "Hands-on laboratory training",
                                    "Interdisciplinary project-based learning",
                                    "Research and innovation activities",
                                    "Industry certification programmes",
                                    "Industry collaboration",
                                ].map((item) => (
                                    <div key={item} className="flex items-start gap-3">
                                        <Check className="mt-1 h-4 w-4 shrink-0 text-[#8F7746]" />

                                        <span className="text-sm leading-6 text-[#1E1917]/65">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================
            VISION & MISSION
        ========================================================== */}
                <section className="bg-[#20235A]">
                    <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
                        <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
                            {/* Vision */}
                            <div>
                                <div className="flex items-center gap-3">
                                    <Target className="h-5 w-5 text-[#D2B87C]" />

                                    <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                        Vision
                                    </span>
                                </div>

                                <h2 className="mt-7 font-serif text-[40px] leading-[1.06] tracking-[-0.025em] text-white sm:text-[52px]">
                                    Engineering with purpose.
                                </h2>

                                <div className="mt-8 border-l border-[#D2B87C]/50 pl-6">
                                    <p className="font-serif text-[25px] leading-[1.35] text-white/80">
                                        To develop professionally ethical and socially responsible
                                        Mechatronics engineers to serve the humanity through
                                        quality professional education.
                                    </p>
                                </div>
                            </div>

                            {/* Mission */}
                            <div>
                                <div className="mb-8 flex items-center gap-3">
                                    <span className="h-px w-10 bg-[#D2B87C]" />

                                    <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                        Mission
                                    </span>
                                </div>

                                <div className="border-t border-white/10">
                                    {missions.map((mission) => (
                                        <div
                                            key={mission.number}
                                            className="grid gap-5 border-b border-white/10 py-7 sm:grid-cols-[70px_1fr] sm:py-8"
                                        >
                                            <span className="font-serif text-sm text-[#D2B87C]">
                                                {mission.number}
                                            </span>

                                            <p className="text-[15px] leading-8 text-white/60">
                                                {mission.text}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================
            PEOS
        ========================================================== */}
                <section className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
                    <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
                        <div>
                            <div className="sticky top-28">
                                <div className="flex items-center gap-3">
                                    <GraduationCap className="h-5 w-5 text-[#8F7746]" />

                                    <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                                        Programme Educational Objectives
                                    </span>
                                </div>

                                <h2 className="mt-6 font-serif text-[40px] leading-[1.05] tracking-[-0.025em] text-[#20235A] sm:text-[50px]">
                                    What graduates are prepared to become.
                                </h2>

                                <p className="mt-6 max-w-md text-[15px] leading-8 text-[#1E1917]/60">
                                    The PEOs define the broader professional and academic
                                    capabilities expected from graduates of the programme.
                                </p>
                            </div>
                        </div>

                        <div className="grid gap-px overflow-hidden border border-[#20235A]/10 bg-[#20235A]/10">
                            {peos.map((peo) => (
                                <div
                                    key={peo.number}
                                    className="group bg-white p-7 transition-colors duration-300 hover:bg-[#20235A] sm:p-9"
                                >
                                    <div className="flex items-start justify-between gap-6">
                                        <span className="font-serif text-sm text-[#8F7746] group-hover:text-[#D2B87C]">
                                            {peo.number}
                                        </span>

                                        <ArrowUpRight className="h-4 w-4 text-[#20235A]/20 transition group-hover:text-[#D2B87C]" />
                                    </div>

                                    <p className="mt-7 max-w-3xl text-[15px] leading-8 text-[#1E1917]/65 transition group-hover:text-white/65">
                                        {peo.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* =========================================================
            POS
        ========================================================== */}
                <section className="bg-[#F2EFE8]">
                    <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
                        <div className="mb-14 max-w-4xl">
                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#8F7746]" />

                                <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                                    Programme Outcomes
                                </span>
                            </div>

                            <h2 className="font-serif text-[40px] leading-[1.06] tracking-[-0.025em] text-[#20235A] sm:text-[52px]">
                                Engineering graduates equipped to think, design and deliver.
                            </h2>

                            <p className="mt-6 max-w-3xl text-[16px] leading-8 text-[#1E1917]/60">
                                Engineering Graduates will be able to apply knowledge,
                                investigate complex problems, design solutions, use modern
                                tools, communicate effectively, work in teams, and continue
                                learning throughout their professional lives.
                            </p>
                        </div>

                        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                            {pos.map((po) => (
                                <article
                                    key={po.number}
                                    className="group border border-[#20235A]/10 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#20235A]/20 sm:p-8"
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="font-serif text-sm text-[#8F7746]">
                                            {po.number}
                                        </span>

                                        <ChevronRight className="h-4 w-4 text-[#20235A]/20 transition group-hover:translate-x-1 group-hover:text-[#8F7746]" />
                                    </div>

                                    <h3 className="mt-7 font-serif text-[25px] leading-tight text-[#20235A]">
                                        {po.title}
                                    </h3>

                                    <p className="mt-5 text-sm leading-7 text-[#1E1917]/55">
                                        {po.text}
                                    </p>

                                    <div className="mt-7 h-px w-8 bg-[#D2B87C] transition-all duration-300 group-hover:w-14" />
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* =========================================================
            PSOS
        ========================================================== */}
                <section className="bg-[#20235A]">
                    <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
                        <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
                            <div>
                                <div className="flex items-center gap-3">
                                    <Network className="h-5 w-5 text-[#D2B87C]" />

                                    <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                        Programme Specific Outcomes
                                    </span>
                                </div>

                                <h2 className="mt-7 font-serif text-[40px] leading-[1.06] tracking-[-0.025em] text-white sm:text-[52px]">
                                    The distinctive capabilities of a Mechatronics engineer.
                                </h2>

                                <p className="mt-7 max-w-lg text-[16px] leading-8 text-white/60">
                                    The PSOs focus on the ability to integrate engineering
                                    disciplines and apply them to instrumentation, control,
                                    automation, and robotics.
                                </p>
                            </div>

                            <div className="space-y-px border border-white/10 bg-white/10">
                                {psos.map((pso) => (
                                    <div
                                        key={pso.number}
                                        className="bg-[#20235A] p-8 sm:p-10"
                                    >
                                        <div className="flex items-start gap-6">
                                            <span className="font-serif text-sm text-[#D2B87C]">
                                                {pso.number}
                                            </span>

                                            <div>
                                                <h3 className="font-serif text-[28px] leading-tight text-white">
                                                    {pso.title}
                                                </h3>

                                                <p className="mt-5 max-w-2xl text-[15px] leading-8 text-white/55">
                                                    {pso.text}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
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
                            <div className="flex h-14 w-14 items-center justify-center border border-[#20235A]/15">
                                <ShieldCheck className="h-6 w-6 text-[#8F7746]" />
                            </div>

                            <span className="mt-6 block text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                                Department Outlook
                            </span>
                        </div>

                        <div>
                            <h2 className="font-serif text-[36px] leading-[1.1] tracking-[-0.025em] text-[#20235A] sm:text-[46px] lg:text-[52px]">
                                Nurturing engineers who can connect disciplines, solve complex
                                problems and contribute to technological advancement.
                            </h2>

                            <p className="mt-7 max-w-4xl text-[16px] leading-8 text-[#1E1917]/65">
                                Supported by a strong and widespread alumni network holding
                                prominent positions in academia and industry at national and
                                international levels, the department adopts a holistic and
                                forward-thinking approach to nurture creativity, critical
                                thinking, and problem-solving skills.
                            </p>

                            <p className="mt-5 max-w-4xl text-[16px] leading-8 text-[#1E1917]/65">
                                Through its academic environment, infrastructure, research
                                activities, industry collaboration, and multidisciplinary
                                approach, the department seeks to empower graduates to
                                contribute meaningfully to technological advancements that
                                shape the future.
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
                                    Explore Mechatronics
                                </span>

                                <h2 className="mt-5 max-w-3xl font-serif text-[36px] leading-tight tracking-[-0.025em] text-[#20235A] sm:text-[46px]">
                                    Discover the people, facilities and opportunities behind the
                                    department.
                                </h2>
                            </div>

                            <a
                                href="/mechatronics-engineering/facilities.php"
                                className="group flex w-fit items-center gap-4 bg-[#20235A] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#171946]"
                            >
                                Explore Facilities
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