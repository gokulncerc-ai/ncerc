"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
    ArrowDown,
    ArrowRight,
    ArrowUpRight,
    Beaker,
    BookOpen,
    Calculator,
    ChevronRight,
    FlaskConical,
    GraduationCap,
    Languages,
    Lightbulb,
    Microscope,
    Users,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import DepartmentNavigation from "../departmentnavigation/DepartmentNavigation";

const BASE_PATH = "/applied-science-and-humanities";
  
const disciplines = [
    {
        number: "01",
        title: "Mathematics",
        description:
            "Developing analytical thinking, logical reasoning and mathematical foundations essential for engineering and technology.",
        icon: Calculator,
    },
    {
        number: "02",
        title: "Engineering Physics",
        description:
            "Building an understanding of physical principles through theoretical learning, experiments and practical applications.",
        icon: Microscope,
    },
    {
        number: "03",
        title: "Engineering Chemistry",
        description:
            "Connecting chemical principles with engineering applications through classroom learning and laboratory practice.",
        icon: Beaker,
    },
    {
        number: "04",
        title: "Communication Skills",
        description:
            "Developing language proficiency, interpersonal communication and professional skills for academic and career growth.",
        icon: Languages,
    },
];

const learningFeatures = [
    {
        number: "01",
        title: "Strong Fundamentals",
        description:
            "A foundation in mathematics, physics, chemistry and communication skills for engineering studies.",
        icon: BookOpen,
    },
    {
        number: "02",
        title: "Practical Learning",
        description:
            "Laboratory sessions and academic activities that connect concepts with practical experience.",
        icon: FlaskConical,
    },
    {
        number: "03",
        title: "Critical Thinking",
        description:
            "Projects, assignments and learning activities that encourage reasoning and problem-solving.",
        icon: Lightbulb,
    },
    {
        number: "04",
        title: "Academic Guidance",
        description:
            "Regular assignments and counselling that support students throughout their learning journey.",
        icon: Users,
    },
];

const departmentLinks = [
    {
        title: "HOD's Desk",
        description: "Read the department head's message and vision.",
        href: `${BASE_PATH}/hod-desk.php`,
    },
    {
        title: "Facilities",
        description: "Explore laboratories and department facilities.",
        href: `${BASE_PATH}/facilities.php`,
    },
    {
        title: "Faculty Profile",
        description: "Meet the department's faculty and laboratory team.",
        href: `${BASE_PATH}/faculty-details.php`,
    },
    {
        title: "Activities",
        description: "Discover academic activities and department initiatives.",
        href: `${BASE_PATH}/activities.php`,
    },
];

export default function Page() {
    return (
        <>
            <SiteHeader />

            <main className="overflow-hidden bg-[#faf7f2] font-sans text-[#1e1917]">
                {/* =========================================================
            HERO — MATCHED TO THE CSE REFERENCE
        ========================================================= */}
                <section className="relative overflow-hidden bg-[#20235A] px-5 pb-14 pt-10 sm:px-8 sm:pb-16 sm:pt-14 lg:px-14 lg:pb-20 lg:pt-16">
                    {/* Subtle decorative details */}
                    <div className="pointer-events-none absolute right-[-180px] top-[-180px] h-[500px] w-[500px] rounded-full border border-[#D2B87C]/10" />
                    <div className="pointer-events-none absolute bottom-[-250px] left-[-180px] h-[500px] w-[500px] rounded-full border border-white/[0.04]" />

                    <div className="relative z-10 mx-auto max-w-[1440px]">
                        {/* Breadcrumb */}
                        <div className="mb-12 flex flex-wrap items-center gap-2 text-[10px] font-medium uppercase tracking-[0.18em] text-white/50 sm:mb-14">
                            <Link
                                href="/"
                                className="transition-colors hover:text-[#D2B87C]"
                            >
                                Home
                            </Link>
                            <ChevronRight size={12} />
                            <span>Academics</span>
                            <ChevronRight size={12} />
                            <span className="text-[#D2B87C]">Departments</span>
                            <ChevronRight size={12} />
                            <span className="text-white/80">Applied Science & Humanities</span>
                        </div>

                        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 xl:grid-cols-[0.9fr_1.1fr] xl:gap-20">
                            {/* LEFT CONTENT */}
                            <div className="relative z-20 max-w-[760px]">
                                <div className="mb-6 flex items-center gap-3">
                                    <span className="h-px w-12 bg-[#D2B87C]" />
                                    <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                        Department of Engineering
                                    </span>
                                </div>

                                <h1 className="font-serif text-[43px] font-normal leading-[1.06] tracking-[-0.035em] text-white sm:text-[58px] lg:text-[64px] xl:text-[74px]">
                                    Applied Science
                                    <span className="mt-1 block text-[#D2B87C]">
                                        & Humanities
                                    </span>
                                    <span className="mt-4 block max-w-[620px] text-[11px] font-medium uppercase tracking-[0.2em] text-white/65 sm:text-[13px] sm:tracking-[0.23em] lg:text-[14px]">
                                        Science · Mathematics · Communication
                                    </span>
                                </h1>

                                <p className="mt-7 max-w-[620px] text-[14px] leading-[1.9] text-white/65 sm:text-[15px] lg:text-[16px]">
                                    Building strong foundations for future engineers through
                                    scientific understanding, mathematical reasoning, effective
                                    communication and practical learning.
                                </p>

                                <div className="mt-8 flex flex-wrap items-center gap-4">
                                    <a
                                        href="#department-about"
                                        className="group inline-flex min-h-12 items-center gap-3 bg-[#D2B87C] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#20235A] transition-colors hover:bg-white"
                                    >
                                        Explore Department
                                        <ArrowDown
                                            size={15}
                                            className="transition-transform group-hover:translate-y-1"
                                        />
                                    </a>

                                    {/* <Link
                                        href={`${BASE_PATH}/faculty-details.php`}
                                        className="inline-flex min-h-12 items-center gap-3 border border-white/20 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-white no-underline transition-colors hover:border-[#D2B87C] hover:text-[#D2B87C]"
                                    >
                                        Faculty Profile
                                        <ArrowRight size={15} />
                                    </Link> */}
                                </div>

                                {/* Subject identifiers */}
                                <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-4 border-t border-white/10 pt-6 sm:gap-x-7">
                                    <div className="flex items-center gap-3">
                                        <Calculator
                                            size={20}
                                            strokeWidth={1.3}
                                            className="text-[#D2B87C]"
                                        />
                                        <span className="text-[9px] font-medium uppercase tracking-[0.16em] text-white/55">
                                            Mathematics
                                        </span>
                                    </div>

                                    <span className="hidden h-4 w-px bg-white/15 sm:block" />

                                    <span className="text-[9px] font-medium uppercase tracking-[0.16em] text-white/55">
                                        Physical Sciences
                                    </span>

                                    <span className="hidden h-4 w-px bg-white/15 sm:block" />

                                    <span className="text-[9px] font-medium uppercase tracking-[0.16em] text-white/55">
                                        Communication Skills
                                    </span>
                                </div>
                            </div>

                            {/* RIGHT IMAGE — CONTAINED, NOT FULL-WIDTH */}
                            <div className="relative lg:translate-y-1">
                                <div className="absolute -right-3 -top-3 hidden h-full w-full border border-[#D2B87C]/20 lg:block" />

                                <div className="relative h-[360px] overflow-hidden border border-white/10 sm:h-[450px] lg:h-[500px] xl:h-[540px]">
                                    <Image
                                        src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=2200&q=85"
                                        alt="Scientific research and laboratory learning"
                                        fill
                                        sizes="100vw"
                                        className="object-cover object-center"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#11152e]/75 via-[#11152e]/20 to-transparent" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#11152e]/80 via-transparent to-transparent" />

                                    <div className="absolute left-6 top-6 flex items-center gap-3 sm:left-8 sm:top-8 lg:left-10 lg:top-10">
                                        <span className="h-px w-7 bg-[#D2B87C]" />
                                        <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/80">
                                            The Science of Discovery
                                        </span>
                                    </div>

                                    <div className="absolute bottom-7 left-6 right-6 sm:bottom-9 sm:left-8 sm:right-8 lg:bottom-10 lg:left-10 lg:right-10">
                                        <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                            Applied Science & Humanities
                                        </p>

                                        <h2 className="max-w-[620px] font-serif text-[31px] font-normal leading-[1.1] text-white sm:text-[40px] lg:text-[48px]">
                                            Knowledge that
                                            <span className="block">builds possibilities.</span>
                                        </h2>

                                        <a
                                            href="#disciplines"
                                            className="mt-6 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-white no-underline transition-colors hover:text-[#D2B87C]"
                                        >
                                            Discover our disciplines
                                            <ArrowDown size={15} />
                                        </a>
                                    </div>

                                    <div className="absolute bottom-7 right-7 hidden items-center gap-3 border border-white/20 bg-[#20235A]/60 px-4 py-3 backdrop-blur-md md:flex">
                                        <FlaskConical
                                            size={21}
                                            strokeWidth={1.3}
                                            className="text-[#D2B87C]"
                                        />
                                        <span className="text-[9px] font-medium uppercase tracking-[0.15em] text-white/80">
                                            Explore · Experiment · Learn
                                        </span>
                                    </div>
                                </div>

                                <div className="absolute -bottom-7 -left-4 hidden lg:block">
                                    <span className="font-serif text-[58px] leading-none text-[#D2B87C]/20">
                                        01
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-14 flex items-center justify-between border-t border-white/10 pt-5 lg:mt-16">
                            <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-white/35">
                                NCERC · Applied Science & Humanities
                            </span>
                            <span className="hidden text-[9px] font-medium uppercase tracking-[0.18em] text-white/35 sm:block">
                                Mathematics · Physics · Chemistry · Communication
                            </span>
                        </div>
                    </div>
                </section>

                {/* =========================================================
            DEPARTMENT NAVIGATION
        ========================================================= */}
                {/* <section className="sticky top-0 z-40 border-b border-[#e5e0d6] bg-white/95 backdrop-blur-md">
                    <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
                        <nav
                            aria-label="Department navigation"
                            className="flex gap-7 overflow-x-auto sm:gap-10"
                        >
                            {navigationItems.map((item, index) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className={`relative flex shrink-0 items-center py-5 text-[9px] font-semibold uppercase tracking-[0.15em] no-underline transition-colors sm:text-[10px] ${index === 0
                                        ? "text-[#20235A]"
                                        : "text-[#77736b] hover:text-[#20235A]"
                                        }`}
                                >
                                    {item.label}
                                    {index === 0 && (
                                        <span className="absolute inset-x-0 bottom-0 h-[2px] bg-[#D2B87C]" />
                                    )}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </section> */}

                <DepartmentNavigation />

                {/* =========================================================
            ABOUT THE DEPARTMENT
        ========================================================= */}
                <section
                    id="department-about"
                    className="scroll-mt-20 bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-14 lg:py-32"
                >
                    <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-24">
                        <div>
                            <div className="flex items-center gap-3">
                                <span className="h-px w-10 bg-[#8f7746]" />
                                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8f7746]">
                                    About the Department
                                </span>
                            </div>

                            <h2 className="mt-6 max-w-[460px] font-serif text-[39px] font-normal leading-[1.12] tracking-[-0.025em] text-[#20235A] sm:text-[49px]">
                                Building the
                                <span className="block text-[#8f7746]">foundations</span>
                                of tomorrow.
                            </h2>

                            <div className="mt-9 flex items-center gap-4 border-t border-[#e7e2d8] pt-6">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                                    <BookOpen size={22} strokeWidth={1.4} />
                                </div>
                                <div>
                                    <p className="m-0 font-serif text-[17px] text-[#20235A]">
                                        Applied Science & Humanities
                                    </p>
                                    <p className="m-0 mt-1 text-[10px] uppercase tracking-[0.12em] text-[#918b7f]">
                                        Learning · Discovery · Development
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6 text-[14px] leading-[2] text-[#696761] sm:text-[15px]">
                            <p>
                                The Department of Applied Science and Humanities works to lay a
                                strong foundation in Mathematics, Engineering Physics,
                                Engineering Chemistry and life skills, including Communication
                                Skills. These subjects provide students with the essential
                                knowledge and abilities needed to progress in their chosen
                                engineering disciplines.
                            </p>

                            <p>
                                With qualified and experienced faculty members, the department
                                encourages analytical ability, critical thinking and
                                problem-solving through projects, assignments and academic
                                activities. Teaching combines comprehensive lectures with
                                practical learning and innovative instructional strategies.
                            </p>

                            <p>
                                Well-equipped Engineering Physics and Chemistry laboratories,
                                together with an English Language Laboratory, support a
                                balanced approach to theoretical knowledge and practical
                                experience. Regular assignments and counselling further
                                support students in their academic development.
                            </p>

                            <a
                                href="#disciplines"
                                className="group mt-3 inline-flex items-center gap-3 border-b border-[#D2B87C] pb-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#20235A] no-underline transition-colors hover:text-[#8f7746]"
                            >
                                Explore our disciplines
                                <ArrowRight
                                    size={15}
                                    className="transition-transform group-hover:translate-x-1"
                                />
                            </a>
                        </div>
                    </div>
                </section>

                {/* =========================================================
            ACADEMIC DISCIPLINES
        ========================================================= */}
                <section
                    id="disciplines"
                    className="bg-[#20235A] px-5 py-20 sm:px-8 sm:py-24 lg:px-14 lg:py-28"
                >
                    <div className="mx-auto max-w-[1440px]">
                        <div className="grid gap-8 lg:grid-cols-[1fr_0.65fr] lg:items-end">
                            <div>
                                <div className="flex items-center gap-3">
                                    <span className="h-px w-10 bg-[#D2B87C]" />
                                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                        Academic Disciplines
                                    </span>
                                </div>

                                <h2 className="mt-6 font-serif text-[38px] font-normal leading-tight text-white sm:text-[49px]">
                                    Four pillars of
                                    <span className="block text-[#D2B87C]">understanding.</span>
                                </h2>
                            </div>

                            <p className="max-w-[460px] text-[13px] leading-[1.9] text-white/60 sm:text-[14px]">
                                Each discipline contributes to the scientific, analytical and
                                communication skills that students draw upon throughout their
                                engineering education.
                            </p>
                        </div>

                        <div className="mt-12 grid gap-px border border-white/15 bg-white/15 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
                            {disciplines.map((discipline) => {
                                const Icon = discipline.icon;

                                return (
                                    <article
                                        key={discipline.number}
                                        className="group flex min-h-[270px] flex-col bg-[#20235A] p-6 transition-colors duration-300 hover:bg-[#292d6b] sm:p-7 lg:p-6 xl:p-7"
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="font-serif text-[14px] text-[#D2B87C]">
                                                {discipline.number}
                                            </span>
                                            <Icon
                                                size={25}
                                                strokeWidth={1.3}
                                                className="text-[#D2B87C] transition-transform duration-300 group-hover:-translate-y-1"
                                            />
                                        </div>

                                        <h3 className="mt-10 font-serif text-[24px] font-normal leading-tight text-white">
                                            {discipline.title}
                                        </h3>

                                        <p className="mt-4 flex-1 text-[12px] leading-[1.9] text-white/60 sm:text-[13px]">
                                            {discipline.description}
                                        </p>

                                        <div className="mt-6 h-px w-10 bg-[#D2B87C] transition-all duration-300 group-hover:w-full" />
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* =========================================================
            LABORATORIES & PRACTICAL LEARNING
        ========================================================= */}
                <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-14 lg:py-32">
                    <div className="mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-20">
                        <div className="relative">
                            <div className="absolute -right-3 -top-3 hidden h-full w-full border border-[#D2B87C]/40 lg:block" />

                            <div className="relative h-[320px] overflow-hidden border border-[#e7e2d8] sm:h-[420px] lg:h-[490px]">
                            <Image
                                src="https://i.pinimg.com/1200x/90/55/0a/90550a05f85e1e092ce5b2f61eade42b.jpg"
                                alt="Laboratory environment for practical science education"
                                fill
                                sizes="(min-width: 1024px) 50vw, 100vw"
                                className="object-cover object-center"
                            />
                                <div className="absolute inset-0 bg-gradient-to-r from-[#11152e]/45 via-transparent to-transparent" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#11152e]/85 via-transparent to-transparent" />
                                <div className="absolute left-6 top-6 flex items-center gap-3 sm:left-8 sm:top-8 lg:left-10 lg:top-10">
                                    <span className="h-px w-7 bg-[#D2B87C]" />
                                    <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/80">
                                        Learning by Doing
                                    </span>
                                </div>
                                <div className="absolute bottom-7 left-6 right-6 sm:bottom-9 sm:left-8 sm:right-8 lg:bottom-10 lg:left-10 lg:right-10">
                                    <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                        Practical Education
                                    </p>
                                    <h3 className="max-w-[500px] font-serif text-[31px] font-normal leading-[1.1] text-white sm:text-[40px] lg:text-[44px]">
                                        Theory brought
                                        <span className="block">to life.</span>
                                    </h3>
                                </div>
                            </div>

                            <div className="absolute -bottom-7 -left-4 hidden lg:block">
                                <span className="font-serif text-[58px] leading-none text-[#D2B87C]/30">
                                    02
                                </span>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center gap-3">
                                <span className="h-px w-10 bg-[#8f7746]" />
                                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8f7746]">
                                    Practical Learning
                                </span>
                            </div>

                            <h2 className="mt-6 font-serif text-[39px] font-normal leading-[1.12] tracking-[-0.025em] text-[#20235A] sm:text-[49px]">
                                Learning beyond
                                <span className="block text-[#8f7746]">the classroom.</span>
                            </h2>

                            <p className="mt-6 text-[14px] leading-[2] text-[#696761] sm:text-[15px]">
                                Practical learning helps students understand scientific
                                concepts and relate them to real applications. The department
                                combines classroom instruction with laboratory sessions and
                                guided academic activities.
                            </p>

                            <div className="mt-8">
                                <article className="grid gap-4 border-t border-[#e7e2d8] py-5 sm:grid-cols-[48px_1fr] sm:gap-5">
                                    <div className="flex h-11 w-11 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                                        <FlaskConical size={21} strokeWidth={1.4} />
                                    </div>
                                    <div>
                                        <h3 className="font-serif text-[22px] font-normal text-[#20235A]">
                                            Physics & Chemistry Laboratories
                                        </h3>
                                        <p className="mt-3 text-[12px] leading-[1.9] text-[#77736b] sm:text-[13px]">
                                            Laboratory sessions complement theoretical concepts
                                            through observation, experimentation and practical
                                            exercises.
                                        </p>
                                    </div>
                                </article>

                                <article className="grid gap-4 border-t border-[#e7e2d8] py-5 sm:grid-cols-[48px_1fr] sm:gap-5">
                                    <div className="flex h-11 w-11 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                                        <Languages size={21} strokeWidth={1.4} />
                                    </div>
                                    <div>
                                        <h3 className="font-serif text-[22px] font-normal text-[#20235A]">
                                            English Language Laboratory
                                        </h3>
                                        <p className="mt-3 text-[12px] leading-[1.9] text-[#77736b] sm:text-[13px]">
                                            Language learning supports communication, confidence and
                                            the development of professional skills.
                                        </p>
                                    </div>
                                </article>

                                <article className="grid gap-4 border-y border-[#e7e2d8] py-5 sm:grid-cols-[48px_1fr] sm:gap-5">
                                    <div className="flex h-11 w-11 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                                        <GraduationCap size={22} strokeWidth={1.4} />
                                    </div>
                                    <div>
                                        <h3 className="font-serif text-[22px] font-normal text-[#20235A]">
                                            Academic Development
                                        </h3>
                                        <p className="mt-3 text-[12px] leading-[1.9] text-[#77736b] sm:text-[13px]">
                                            Assignments, projects and academic guidance help students
                                            strengthen their understanding and study practices.
                                        </p>
                                    </div>
                                </article>
                            </div>

                            {/* <Link
                                href={`${BASE_PATH}/facilities.php`}
                                className="group mt-8 inline-flex items-center gap-3 border-b border-[#D2B87C] pb-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#20235A] no-underline transition-colors hover:text-[#8f7746]"
                            >
                                Explore Department Facilities
                                <ArrowRight
                                    size={15}
                                    className="transition-transform group-hover:translate-x-1"
                                />
                            </Link> */}
                        </div>
                    </div>
                </section>

                {/* =========================================================
            TEACHING APPROACH
        ========================================================= */}
                <section className="bg-[#f2efe8] px-5 py-20 sm:px-8 sm:py-24 lg:px-14 lg:py-28">
                    <div className="mx-auto max-w-[1440px]">
                        <div className="grid gap-8 lg:grid-cols-[1fr_0.65fr] lg:items-end">
                            <div>
                                <div className="flex items-center gap-3">
                                    <span className="h-px w-10 bg-[#8f7746]" />
                                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8f7746]">
                                        Our Approach
                                    </span>
                                </div>

                                <h2 className="mt-6 max-w-[650px] font-serif text-[38px] font-normal leading-tight text-[#20235A] sm:text-[49px]">
                                    Learning designed to
                                    <span className="block text-[#8f7746]">
                                        build confidence.
                                    </span>
                                </h2>
                            </div>

                            <p className="max-w-[460px] text-[13px] leading-[1.9] text-[#77736b] sm:text-[14px]">
                                A balanced approach brings together clear instruction,
                                practical application and academic support to strengthen the
                                student learning experience.
                            </p>
                        </div>

                        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
                            {learningFeatures.map((feature) => {
                                const Icon = feature.icon;

                                return (
                                    <article
                                        key={feature.number}
                                        className="group flex min-h-[245px] flex-col border border-[#dfd9cd] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D2B87C] hover:shadow-[0_18px_45px_rgba(32,35,90,0.07)] sm:p-7"
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="font-serif text-[14px] text-[#8f7746]">
                                                {feature.number}
                                            </span>
                                            <Icon
                                                size={23}
                                                strokeWidth={1.3}
                                                className="text-[#20235A] transition-colors group-hover:text-[#8f7746]"
                                            />
                                        </div>

                                        <h3 className="mt-8 font-serif text-[22px] font-normal text-[#20235A]">
                                            {feature.title}
                                        </h3>

                                        <p className="mt-3 flex-1 text-[12px] leading-[1.9] text-[#77736b] sm:text-[13px]">
                                            {feature.description}
                                        </p>

                                        <div className="mt-6 h-px w-9 bg-[#D2B87C] transition-all duration-300 group-hover:w-full" />
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* =========================================================
            DEPARTMENT QUICK LINKS
        ========================================================= */}
                <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-14 lg:py-28">
                    <div className="mx-auto max-w-[1440px]">
                        <div className="mb-12 grid gap-6 lg:grid-cols-[1fr_0.65fr] lg:items-end">
                            <div>
                                <div className="flex items-center gap-3">
                                    <span className="h-px w-10 bg-[#8f7746]" />
                                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8f7746]">
                                        Explore More
                                    </span>
                                </div>

                                <h2 className="mt-6 font-serif text-[38px] font-normal leading-tight text-[#20235A] sm:text-[49px]">
                                    Discover our
                                    <span className="block text-[#8f7746]">department.</span>
                                </h2>
                            </div>

                            <p className="max-w-[460px] text-[13px] leading-[1.9] text-[#77736b]">
                                Explore the people, facilities and activities that support
                                teaching and learning within Applied Science & Humanities.
                            </p>
                        </div>

                        <div className="grid border-t border-[#e5e0d6] sm:grid-cols-2">
                            {departmentLinks.map((item, index) => (
                                <Link
                                    key={item.title}
                                    href={item.href}
                                    className={`group flex min-h-[145px] items-center justify-between gap-5 border-b border-[#e5e0d6] py-7 no-underline transition-colors hover:bg-[#faf7f2] sm:px-5 ${index % 2 === 0
                                        ? "sm:border-r sm:pl-0"
                                        : "sm:pr-0"
                                        }`}
                                >
                                    <div className="flex items-start gap-5">
                                        <span className="mt-1 font-serif text-[14px] text-[#8f7746]">
                                            0{index + 1}
                                        </span>

                                        <div>
                                            <h3 className="font-serif text-[25px] font-normal text-[#20235A] transition-colors group-hover:text-[#8f7746]">
                                                {item.title}
                                            </h3>
                                            <p className="mt-2 text-[12px] leading-[1.9] text-[#77736b] sm:text-[13px]">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>

                                    <ArrowUpRight
                                        size={19}
                                        className="shrink-0 text-[#8f7746] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* =========================================================
            CLOSING CTA
        ========================================================= */}
                <section className="bg-white px-5 pb-20 sm:px-8 sm:pb-24 lg:px-14 lg:pb-28">
                    <div className="relative mx-auto max-w-[1440px] overflow-hidden bg-[#20235A] px-6 py-12 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
                        <div className="pointer-events-none absolute -right-12 -top-16 h-64 w-64 rounded-full border border-white/10 sm:-right-5 sm:h-80 sm:w-80" />
                        <div className="pointer-events-none absolute -right-2 -top-6 h-48 w-48 rounded-full border border-[#D2B87C]/25 sm:h-64 sm:w-64" />

                        <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                            <div>
                                <div className="flex items-center gap-3">
                                    <span className="h-px w-10 bg-[#D2B87C]" />
                                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                        Applied Science & Humanities
                                    </span>
                                </div>

                                <h2 className="mt-6 max-w-[760px] font-serif text-[36px] font-normal leading-tight text-white sm:text-[48px] lg:text-[52px]">
                                    Strong foundations.
                                    <span className="block text-[#D2B87C]">
                                        New possibilities.
                                    </span>
                                </h2>

                                <p className="mt-5 max-w-[620px] text-[13px] leading-[1.9] text-white/60 sm:text-[14px]">
                                    Explore the academic resources, faculty and facilities that
                                    contribute to the student learning experience.
                                </p>
                            </div>

                            {/* <Link
                                href={`${BASE_PATH}/facilities.php`}
                                className="group inline-flex min-h-14 w-fit items-center gap-4 border border-[#D2B87C]/70 px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.15em] text-white no-underline transition-colors hover:bg-[#D2B87C] hover:text-[#20235A]"
                            >
                                Explore Facilities
                                <ArrowRight
                                    size={16}
                                    className="transition-transform group-hover:translate-x-1"
                                />
                            </Link> */}
                        </div>
                    </div>
                </section>
            </main>
            <FooterSection />
        </>
    );
}