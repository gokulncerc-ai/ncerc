
import SiteHeader from '@/components/header/SiteHeader'
import FooterSection from '@/components/home/FooterSection'
import DepartmentNavigation from '../DepartmentsNavigation/DepartmentsNavigation'
import {
    ArrowRight,
    Bot,
    Car,
    Cpu,
    Factory,
    Gauge,
    GraduationCap,
    Lightbulb,
    Plane,
    Rocket,
    Settings2,
    Sparkles,
    Target,
    Wifi,
    Wrench,
} from 'lucide-react'
import React from 'react'

const careerOpportunities = [
    {
        number: '01',
        title: 'Robotics Engineer',
        description:
            'Design and develop robots for industrial, medical, and service applications.',
        icon: Bot,
    },
    {
        number: '02',
        title: 'Automation Engineer',
        description:
            'Work on automated production systems, PLC programming, and industrial control systems.',
        icon: Factory,
    },
    {
        number: '03',
        title: 'Automotive Engineer',
        description:
            'Develop smart vehicle systems, electric vehicles, and autonomous driving technologies.',
        icon: Car,
        companies: 'Tata Motors · Mahindra & Mahindra',
    },
    {
        number: '04',
        title: 'Control Systems Engineer',
        description:
            'Design and manage systems that control machines and processes in industries.',
        icon: Settings2,
    },
    {
        number: '05',
        title: 'Embedded Systems Engineer',
        description:
            'Develop microcontroller-based systems used in consumer electronics and industrial devices.',
        icon: Cpu,
    },
    {
        number: '06',
        title: 'Aerospace & Defense Engineer',
        description:
            'Work on advanced systems in aviation and defense sectors with organizations like the Defence Research and Development Organisation.',
        icon: Plane,
    },
]

const growthAreas = [
    'Industrial automation',
    'Robotics and artificial intelligence',
    'Smart manufacturing (Industry 4.0)',
    'Internet of Things (IoT)',
]

const specializations = [
    'Robotics and Automation',
    'Artificial Intelligence',
    'Embedded Systems',
    'Control Engineering',
]

const futureAreas = [
    'Industrial automation and smart factories',
    'Artificial intelligence and machine learning',
    'Robotics and autonomous systems',
    'Electric and self-driving vehicles',
]

const reasons = [
    'High demand across multiple industries',
    'Opportunity to work with cutting-edge technologies',
    'Strong global career opportunities',
    'Versatile and interdisciplinary field',
]

export default function CareerScopePage() {
    return (
        <>
            <SiteHeader />

            <main className="bg-[#FAF7F2] text-[#1E1917] [&_p]:text-justify">

                {/* =====================================================
                    SUBPAGE HERO
                ====================================================== */}

                <section className="relative overflow-hidden bg-[#20235A] text-[#FAF7F2]">
                    {/* Decorative Elements */}
                    <div className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full border border-[#D2B87C]/15" />
                    <div className="pointer-events-none absolute -right-10 -top-14 h-52 w-52 rounded-full border border-[#D2B87C]/10" />

                    <div className="relative mx-auto flex min-h-[420px] max-w-[1440px] items-center px-5 py-20 sm:px-8 lg:min-h-[480px] lg:px-16">
                        <div className="w-full max-w-5xl">

                            {/* Breadcrumb */}
                            <div className="mb-7 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.18em] text-white/50">
                                <span>Mechatronics Engineering</span>
                                <span className="text-[#D2B87C]">/</span>
                                <span className="text-[#D2B87C]">Career Scope</span>
                            </div>

                            {/* Section Label */}
                            <div className="mb-7 flex items-center gap-3">
                                <span className="h-px w-12 bg-[#D2B87C]" />
                                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                    Career & Opportunities
                                </span>
                            </div>

                            {/* Heading */}
                            <h1 className="font-serif text-4xl font-medium leading-[1.12] tracking-tight sm:text-5xl lg:text-7xl">
                                Career
                                <span className="mt-1 block text-[#D2B87C]">
                                    Scope
                                </span>
                            </h1>

                            {/* Hero Description */}
                            <p className="mt-7 max-w-2xl text-sm leading-8 text-white/75 sm:text-base sm:leading-9">
                                Discover the diverse career pathways, emerging technologies
                                and professional opportunities available to Mechatronics
                                Engineering graduates.
                            </p>

                            {/* Bottom Label */}
                            <div className="mt-10 flex items-center gap-4">
                                <span className="h-10 w-[2px] bg-[#D2B87C]" />
                                <span className="text-xs font-medium uppercase tracking-[0.18em] text-white/70">
                                    Explore · Innovate · Build
                                </span>
                            </div>

                        </div>
                    </div>

                    {/* Bottom Accent */}
                    <div className="h-[3px] w-full bg-[#D2B87C]" />
                </section>


                {/* =====================================================
                    DEPARTMENT NAVIGATION
                ====================================================== */}

                <DepartmentNavigation />


                {/* =====================================================
                    INTRODUCTION
                ====================================================== */}

                <section className="bg-[#FAF7F2] px-5 py-20 sm:px-10 lg:px-20 lg:py-28">
                    <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">

                        <div>
                            <div className="mb-6 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#927B4D]" />
                                <span className="text-xs font-medium uppercase tracking-[0.24em] text-[#927B4D]">
                                    Introduction
                                </span>
                            </div>

                            <h2 className="font-serif text-4xl font-normal leading-tight text-[#20235A] sm:text-5xl">
                                Understanding
                                <span className="block italic text-[#927B4D]">
                                    Mechatronics.
                                </span>
                            </h2>
                        </div>

                        <div className="flex flex-col justify-center">
                            <p className="text-base leading-8 text-[#625F5A] sm:text-lg sm:leading-9">
                                Mechatronics Engineering is a multidisciplinary field that combines mechanical engineering, electronics, computer science, and control systems to design and develop intelligent systems and automation solutions. It is widely used in industries such as manufacturing, robotics, automotive, and aerospace.

                            </p>

                            <div className="mt-9 grid grid-cols-2 gap-5 border-t border-[#D8D0C1] pt-7 sm:grid-cols-4">
                                {[
                                    'Mechanical',
                                    'Electronics',
                                    'Computer Science',
                                    'Control Systems',
                                ].map((item) => (
                                    <div key={item}>
                                        <span className="mb-3 block h-[2px] w-7 bg-[#D2B87C]" />
                                        <p className="text-sm font-medium text-[#20235A]">
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </section>


                {/* =====================================================
                    CAREER SCOPE
                ====================================================== */}

                <section className="bg-[#F2EFE8] px-5 py-20 sm:px-10 lg:px-20 lg:py-28">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

                            <div>
                                <div className="mb-6 flex items-center gap-3">
                                    <span className="h-px w-10 bg-[#927B4D]" />
                                    <span className="text-xs font-medium uppercase tracking-[0.24em] text-[#927B4D]">
                                        Career Scope
                                    </span>
                                </div>

                                <h2 className="font-serif text-4xl font-normal leading-tight text-[#20235A] sm:text-5xl">
                                    A World of
                                    <span className="block italic text-[#927B4D]">
                                        Opportunities.
                                    </span>
                                </h2>

                                <p className="mt-7 max-w-md text-sm leading-8 text-[#716C65] sm:text-base">
                                    Mechatronics engineers are in high demand
                                    due to the rapid growth of emerging
                                    technologies and the increasing adoption
                                    of intelligent systems across industries.
                                </p>

                                <p className="mt-5 max-w-md text-sm leading-8 text-[#716C65] sm:text-base">
                                    Graduates can work in industries ranging
                                    from automobile to healthcare and robotics.
                                </p>
                            </div>

                            <div className="border-t border-[#D4CCBD]">
                                {growthAreas.map((area, index) => (
                                    <div
                                        key={area}
                                        className="flex items-center gap-5 border-b border-[#D4CCBD] py-6 sm:py-7"
                                    >
                                        <span className="font-serif text-2xl text-[#927B4D]">
                                            0{index + 1}
                                        </span>
                                        <p className="text-base font-normal text-[#20235A] sm:text-lg">
                                            {area}
                                        </p>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </section>


                {/* =====================================================
                    TOP CAREER OPPORTUNITIES
                ====================================================== */}

                <section className="bg-[#FAF7F2] px-5 py-20 sm:px-10 lg:px-20 lg:py-28">
                    <div className="mx-auto max-w-7xl">

                        <div className="mb-14 max-w-3xl">
                            <div className="mb-6 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#927B4D]" />
                                <span className="text-xs font-medium uppercase tracking-[0.24em] text-[#927B4D]">
                                    Professional Pathways
                                </span>
                            </div>

                            <h2 className="font-serif text-4xl font-normal leading-tight text-[#20235A] sm:text-5xl">
                                Top Career
                                <span className="italic text-[#927B4D]">
                                    {' '}Opportunities.
                                </span>
                            </h2>

                            <p className="mt-5 max-w-2xl text-sm leading-8 text-[#716C65] sm:text-base">
                                The interdisciplinary nature of Mechatronics
                                opens doors to a wide range of specialised
                                engineering roles.
                            </p>
                        </div>

                        <div className="grid gap-x-12 lg:grid-cols-2">
                            {careerOpportunities.map((career) => {
                                const Icon = career.icon

                                return (
                                    <article
                                        key={career.number}
                                        className="group border-t border-[#D8D0C1] py-8 sm:py-9"
                                    >
                                        <div className="flex items-start gap-5 sm:gap-7">

                                            <span className="pt-1 font-serif text-2xl text-[#B49A68]">
                                                {career.number}
                                            </span>

                                            <div className="min-w-0 flex-1">
                                                <div className="flex items-start justify-between gap-4">
                                                    <h3 className="font-serif text-2xl font-normal text-[#20235A] sm:text-3xl">
                                                        {career.title}
                                                    </h3>

                                                    <Icon
                                                        size={24}
                                                        strokeWidth={1.3}
                                                        className="mt-1 shrink-0 text-[#927B4D] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                                                    />
                                                </div>

                                                <p className="mt-4 max-w-xl text-sm leading-7 text-[#716C65] sm:text-base">
                                                    {career.description}
                                                </p>

                                                {career.companies && (
                                                    <p className="mt-4 text-xs font-medium uppercase tracking-[0.12em] text-[#927B4D]">
                                                        Top companies: {career.companies}
                                                    </p>
                                                )}
                                            </div>

                                        </div>
                                    </article>
                                )
                            })}
                        </div>

                    </div>
                </section>


                {/* =====================================================
                    HIGHER STUDIES & SPECIALIZATIONS
                ====================================================== */}

                <section className="bg-[#20235A] px-5 py-20 text-[#FAF7F2] sm:px-10 lg:px-20 lg:py-28">
                    <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

                        <div>
                            <div className="mb-6 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#D2B87C]" />
                                <span className="text-xs font-medium uppercase tracking-[0.24em] text-[#D2B87C]">
                                    Higher Education
                                </span>
                            </div>

                            <h2 className="font-serif text-4xl font-normal leading-tight sm:text-5xl">
                                Higher Studies
                                <span className="block italic text-[#D2B87C]">
                                    & Specializations.
                                </span>
                            </h2>

                            <p className="mt-7 max-w-md text-sm leading-8 text-white/65 sm:text-base">
                                Students can pursue advanced studies to
                                specialise in emerging technologies and
                                strengthen their expertise in the
                                multidisciplinary field of Mechatronics.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-x-10 sm:grid-cols-2">
                            {specializations.map((item, index) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-5 border-b border-white/15 py-7"
                                >
                                    <span className="font-serif text-2xl text-[#D2B87C]">
                                        0{index + 1}
                                    </span>
                                    <p className="text-base text-white/85 sm:text-lg">
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>

                    </div>
                </section>


                {/* =====================================================
                    FUTURE SCOPE
                ====================================================== */}

                <section className="bg-[#F2EFE8] px-5 py-20 sm:px-10 lg:px-20 lg:py-28">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

                            <div>
                                <div className="mb-6 flex items-center gap-3">
                                    <span className="h-px w-10 bg-[#927B4D]" />
                                    <span className="text-xs font-medium uppercase tracking-[0.24em] text-[#927B4D]">
                                        Emerging Technologies
                                    </span>
                                </div>

                                <h2 className="font-serif text-4xl font-normal leading-tight text-[#20235A] sm:text-5xl">
                                    The Future of
                                    <span className="block italic text-[#927B4D]">
                                        Mechatronics.
                                    </span>
                                </h2>

                                <p className="mt-7 text-sm leading-8 text-[#716C65] sm:text-base">
                                    The future is highly promising with
                                    advancements in intelligent technologies,
                                    automation and connected systems. These
                                    developments continue to create new
                                    possibilities for Mechatronics engineers.
                                </p>
                            </div>

                            <div className="border-t border-[#D4CCBD]">
                                {futureAreas.map((area, index) => (
                                    <div
                                        key={area}
                                        className="flex items-center gap-5 border-b border-[#D4CCBD] py-6"
                                    >
                                        <Rocket
                                            size={20}
                                            strokeWidth={1.5}
                                            className="shrink-0 text-[#927B4D]"
                                        />
                                        <p className="text-sm text-[#20235A] sm:text-base">
                                            {area}
                                        </p>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </section>


                {/* =====================================================
                    WHY CHOOSE MECHATRONICS
                ====================================================== */}

                <section className="bg-[#FAF7F2] px-5 py-20 sm:px-10 lg:px-20 lg:py-28">
                    <div className="mx-auto max-w-7xl">

                        <div className="mb-12 max-w-3xl">
                            <div className="mb-6 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#927B4D]" />
                                <span className="text-xs font-medium uppercase tracking-[0.24em] text-[#927B4D]">
                                    Your Engineering Future
                                </span>
                            </div>

                            <h2 className="font-serif text-4xl font-normal leading-tight text-[#20235A] sm:text-5xl">
                                Why Choose
                                <span className="italic text-[#927B4D]">
                                    {' '}Mechatronics?
                                </span>
                            </h2>
                        </div>

                        <div className="grid gap-x-12 sm:grid-cols-2">
                            {reasons.map((reason, index) => (
                                <div
                                    key={reason}
                                    className="flex items-start gap-5 border-t border-[#D8D0C1] py-7"
                                >
                                    <Target
                                        size={21}
                                        strokeWidth={1.5}
                                        className="mt-1 shrink-0 text-[#927B4D]"
                                    />

                                    <div>
                                        <span className="mb-2 block text-xs tracking-[0.15em] text-[#927B4D]">
                                            BENEFIT 0{index + 1}
                                        </span>
                                        <p className="text-base leading-7 text-[#20235A] sm:text-lg">
                                            {reason}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </section>





                {/* =====================================================
                                     CONCLUSION
                      ====================================================== */}

                <section className="bg-[#F2EFE8] px-5 py-20 text-[#20235A] sm:px-10 lg:px-20 lg:py-24">
                    <div className="mx-auto max-w-7xl">

                        <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:items-center lg:gap-20">

                            {/* SECTION HEADING */}
                            <div>
                                <div className="mb-6 flex items-center gap-3">
                                    <span className="h-px w-10 bg-[#927B4D]" />
                                    <span className="text-xs font-medium uppercase tracking-[0.24em] text-[#927B4D]">
                                        Conclusion
                                    </span>
                                </div>

                                <h2 className="font-serif text-4xl font-normal leading-tight sm:text-5xl">
                                    Shaping the
                                    <span className="block italic text-[#927B4D]">
                                        Future.
                                    </span>
                                </h2>
                            </div>

                            {/* CONCLUSION CONTENT */}
                            <div className="border-l-2 border-[#D2B87C] pl-6 sm:pl-10">
                                <p className="text-base leading-8 text-[#625F5A] sm:text-lg sm:leading-9">
                                    Mechatronics Engineering offers a diverse and future-oriented career path. With increasing automation and technological innovation, professionals in this field will play a key role in shaping modern industries.
                                </p>
                            </div>

                        </div>

                        <div className="mx-auto mt-16 h-px max-w-7xl bg-[#D8D0C1]" />

                    </div>
                </section>







            </main>

            <FooterSection />
        </>
    )
}


