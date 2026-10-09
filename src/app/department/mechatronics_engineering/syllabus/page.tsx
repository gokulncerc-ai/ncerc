import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import DepartmentNavigation from "../DepartmentsNavigation/page";
import React from "react";
import {
    ArrowUpRight,
    BookOpen,
    CalendarDays,
    Download,
    GraduationCap,
} from "lucide-react";

const academicResources = [
    {
        number: "01",
        title: "Academic Calendar",
        shortTitle: "Academic",
        description:
            "Access the academic calendar of the Department of Mechatronics Engineering to stay informed about the academic schedule, important dates and institutional activities.",
        meta: "Academic Schedule",
        icon: CalendarDays,
        href: "/departments/mechatronics_engineering/syllabus/academic_calender_2021_22",
    },
    {
        number: "02",
        title: "Syllabus Handbook",
        shortTitle: "Syllabus",
        description:
            "Explore the syllabus handbook of the Mechatronics Engineering programme covering the academic structure and curriculum followed by the department.",
        meta: "Curriculum & Courses",
        icon: BookOpen,
        href: "/departments/mechatronics_engineering/syllabus/syllabus_handbook",
    },
];

const Page = () => {
    return (
        <>
            <SiteHeader />

            <main className="bg-[#FAF7F2] text-[#1E1917]">
                {/* =========================================================
            HERO
        ========================================================= */}
                <section className="relative overflow-hidden bg-[#20235A]">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full border border-[#D2B87C]/10" />
                        <div className="absolute -right-16 -top-16 h-[280px] w-[280px] rounded-full border border-[#D2B87C]/10" />
                        <div className="absolute bottom-[-180px] left-[-120px] h-[360px] w-[360px] rounded-full border border-white/5" />
                    </div>

                    <div className="relative mx-auto max-w-[1400px] px-6 pb-16 pt-20 sm:px-8 sm:pb-20 sm:pt-24 lg:px-12 lg:pb-24 lg:pt-28 xl:px-16">
                        {/* Breadcrumb */}
                        <div className="mb-14 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.18em] text-white/45 sm:mb-16">
                            <span>Mechatronics Engineering</span>
                            <span className="text-[#D2B87C]">/</span>
                            <span className="text-white/75">Syllabus</span>
                        </div>

                        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
                            <div>
                                <div className="mb-7 flex items-center gap-3">
                                    <span className="h-px w-10 bg-[#D2B87C]" />
                                    <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                        Academic Resources
                                    </span>
                                </div>

                                <h1 className="max-w-4xl font-serif text-[3.2rem] font-medium leading-[1.02] tracking-[-0.035em] text-white sm:text-[4.5rem] lg:text-[5.4rem] xl:text-[5.9rem]">
                                    Academic
                                    <br />
                                    <span className="text-[#D2B87C]">Resources.</span>
                                </h1>
                            </div>

                            <div className="max-w-md lg:ml-auto">
                                <div className="mb-5 flex h-12 w-12 items-center justify-center border border-[#D2B87C]/30 text-[#D2B87C]">
                                    <GraduationCap size={21} strokeWidth={1.5} />
                                </div>

                                <p className="text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
                                    Explore the academic resources of the Department of
                                    Mechatronics Engineering, including the academic calendar and
                                    syllabus handbook.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================
            DEPARTMENT NAVIGATION
        ========================================================= */}
                <DepartmentNavigation />

                {/* =========================================================
            INTRO / INFO STRIP
        ========================================================= */}
                <section className="border-b border-[#20235A]/10 bg-white">
                    <div className="mx-auto grid max-w-[1400px] sm:grid-cols-3">
                        <div className="border-b border-[#20235A]/10 px-6 py-7 sm:border-b-0 sm:border-r sm:px-8 lg:px-12 xl:px-16">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                Section
                            </p>
                            <p className="mt-2 font-serif text-xl text-[#20235A]">
                                Syllabus
                            </p>
                        </div>

                        <div className="border-b border-[#20235A]/10 px-6 py-7 sm:border-b-0 sm:border-r sm:px-8 lg:px-12 xl:px-16">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                Resources
                            </p>
                            <p className="mt-2 font-serif text-xl text-[#20235A]">
                                02 Academic Documents
                            </p>
                        </div>

                        <div className="px-6 py-7 sm:px-8 lg:px-12 xl:px-16">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                Programme
                            </p>
                            <p className="mt-2 font-serif text-xl text-[#20235A]">
                                B.Tech Mechatronics
                            </p>
                        </div>
                    </div>
                </section>

                {/* =========================================================
            INTRODUCTION
        ========================================================= */}
                <section className="bg-[#FAF7F2] py-20 sm:py-24 lg:py-32">
                    <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16">
                        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                            <div>
                                <div className="flex items-center gap-3">
                                    <span className="h-px w-10 bg-[#D2B87C]" />
                                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                        Study Resources
                                    </span>
                                </div>
                            </div>

                            <div>
                                <h2 className="max-w-4xl font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-[#20235A] sm:text-5xl lg:text-[3.7rem]">
                                    Everything students need to navigate their{" "}
                                    <span className="text-[#8F7746]">academic journey.</span>
                                </h2>

                                <div className="mt-8 max-w-3xl space-y-6 text-[15px] leading-8 text-[#1E1917]/70 sm:text-base sm:leading-[1.95]">
                                    <p>
                                        The Department of Mechatronics Engineering provides
                                        essential academic resources to help students understand
                                        their programme structure, academic schedule and
                                        curriculum.
                                    </p>

                                    <p>
                                        Use the resources below to access the academic calendar and
                                        syllabus handbook of the programme.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================
            RESOURCE DIRECTORY
        ========================================================= */}
                <section className="border-t border-[#20235A]/10 bg-white py-20 sm:py-24 lg:py-32">
                    <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16">
                        <div className="mb-14 flex flex-col justify-between gap-6 sm:mb-16 lg:flex-row lg:items-end">
                            <div>
                                <div className="mb-5 flex items-center gap-3">
                                    <span className="h-px w-10 bg-[#D2B87C]" />
                                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                        Academic Directory
                                    </span>
                                </div>

                                <h2 className="font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-[#20235A] sm:text-5xl lg:text-[3.7rem]">
                                    Programme
                                    <br />
                                    <span className="text-[#8F7746]">Documents.</span>
                                </h2>
                            </div>

                            <p className="max-w-md text-sm leading-7 text-[#1E1917]/60 sm:text-base">
                                Select a resource to view the corresponding academic
                                information provided by the department.
                            </p>
                        </div>

                        {/* Resource list */}
                        <div className="border-t border-[#20235A]/10">
                            {academicResources.map((resource) => {
                                const Icon = resource.icon;

                                return (
                                    <a
                                        key={resource.number}
                                        href={resource.href}
                                      
                                        rel="noopener noreferrer"
                                        className="group block border-b border-[#20235A]/10 transition-colors duration-300 hover:bg-[#FAF7F2]"
                                    >
                                        <div className="grid gap-8 px-0 py-10 sm:grid-cols-[80px_1fr_auto] sm:items-center sm:gap-10 sm:py-12 lg:grid-cols-[100px_1fr_280px_80px] lg:gap-12">
                                            {/* Number */}
                                            <div className="font-serif text-3xl text-[#D2B87C] sm:text-4xl">
                                                {resource.number}
                                            </div>

                                            {/* Title */}
                                            <div>
                                                <div className="mb-4 flex items-center gap-3">
                                                    <Icon
                                                        size={19}
                                                        strokeWidth={1.5}
                                                        className="text-[#8F7746]"
                                                    />

                                                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                                        {resource.meta}
                                                    </span>
                                                </div>

                                                <h3 className="font-serif text-3xl leading-tight tracking-[-0.02em] text-[#20235A] transition-colors duration-300 group-hover:text-[#8F7746] sm:text-4xl">
                                                    {resource.title}
                                                </h3>
                                            </div>

                                            {/* Description */}
                                            <p className="max-w-md text-sm leading-7 text-[#1E1917]/60">
                                                {resource.description}
                                            </p>

                                            {/* Arrow */}
                                            <div className="flex h-12 w-12 items-center justify-center border border-[#20235A]/15 text-[#20235A] transition-all duration-300 group-hover:border-[#D2B87C] group-hover:bg-[#D2B87C]">
                                                <ArrowUpRight
                                                    size={19}
                                                    strokeWidth={1.5}
                                                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                                />
                                            </div>
                                        </div>
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* =========================================================
            FEATURE / DOWNLOAD SECTION
        ========================================================= */}
                <section className="bg-[#F2EFE8] py-20 sm:py-24 lg:py-28">
                    <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16">
                        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
                            <div>
                                <div className="mb-6 flex items-center gap-3">
                                    <span className="h-px w-10 bg-[#D2B87C]" />
                                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                        Easy Access
                                    </span>
                                </div>

                                <h2 className="font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-[#20235A] sm:text-5xl lg:text-[3.6rem]">
                                    Academic information,
                                    <br />
                                    <span className="text-[#8F7746]">within reach.</span>
                                </h2>
                            </div>

                            <div className="border-l border-[#20235A]/15 pl-7 sm:pl-10">
                                <p className="text-[15px] leading-8 text-[#1E1917]/65 sm:text-base sm:leading-8">
                                    The academic resources are provided as direct links so that
                                    students can quickly access the relevant documents whenever
                                    they need information about their academic schedule or
                                    curriculum.
                                </p>

                                <div className="mt-8 flex flex-wrap gap-3">
                                    <div className="inline-flex items-center gap-2 border border-[#20235A]/15 bg-white px-4 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#20235A]">
                                        <Download size={15} strokeWidth={1.5} />
                                        Academic Documents
                                    </div>

                                    <div className="inline-flex items-center gap-2 border border-[#20235A]/15 bg-white px-4 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#20235A]">
                                        <BookOpen size={15} strokeWidth={1.5} />
                                        Curriculum
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================
            CLOSING CTA
        ========================================================= */}
                <section className="bg-[#20235A]">
                    <div className="mx-auto max-w-[1400px] px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16">
                        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
                            <div>
                                <div className="mb-6 flex items-center gap-3">
                                    <span className="h-px w-10 bg-[#D2B87C]" />
                                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                                        Mechatronics Engineering
                                    </span>
                                </div>

                                <h2 className="max-w-3xl font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-white sm:text-5xl lg:text-6xl">
                                    Build your academic journey with{" "}
                                    <span className="text-[#D2B87C]">clarity.</span>
                                </h2>

                                <p className="mt-6 max-w-2xl text-base leading-8 text-white/60">
                                    Explore the department's academic resources and stay
                                    connected with the curriculum, schedule and learning
                                    structure of the programme.
                                </p>
                            </div>

                            <a
                                href="/mechatronics-engineering"
                                className="group inline-flex w-fit items-center gap-3 border border-[#D2B87C]/50 px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#D2B87C] hover:text-[#20235A]"
                            >
                                Explore Department
                                <ArrowUpRight
                                    size={17}
                                    strokeWidth={1.5}
                                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                />
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <FooterSection />
        </>
    );
};

export default Page;