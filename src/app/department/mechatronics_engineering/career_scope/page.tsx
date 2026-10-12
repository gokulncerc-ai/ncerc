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
        icon: Bot,
        title: 'Robotics Engineer',
        description:
            'Design and develop robots for industrial, medical, and service applications.',
    },
    {
        number: '02',
        icon: Settings2,
        title: 'Automation Engineer',
        description:
            'Work on automated production systems, PLC programming, and industrial control systems.',
    },
    {
        number: '03',
        icon: Car,
        title: 'Automotive Engineer',
        description:
            'Develop smart vehicle systems, electric vehicles, and autonomous driving technologies.',
        companies: 'Tata Motors · Mahindra & Mahindra',
    },
    {
        number: '04',
        icon: Gauge,
        title: 'Control Systems Engineer',
        description:
            'Design and manage systems that control machines and processes in industries.',
    },
    {
        number: '05',
        icon: Cpu,
        title: 'Embedded Systems Engineer',
        description:
            'Develop microcontroller-based systems used in consumer electronics and industrial devices.',
    },
    {
        number: '06',
        icon: Plane,
        title: 'Aerospace & Defense Engineer',
        description:
            'Work on advanced systems in aviation and defense sectors with organizations like Defence Research and Development Organisation.',
    },
]

const growthAreas = [
    {
        icon: Factory,
        title: 'Industrial Automation',
        text: 'Smart factories and increasingly automated production environments.',
    },
    {
        icon: Bot,
        title: 'Robotics & AI',
        text: 'Intelligent machines, autonomous systems, and advanced robotic applications.',
    },
    {
        icon: Wifi,
        title: 'Internet of Things',
        text: 'Connected devices and intelligent systems transforming industries.',
    },
    {
        icon: Lightbulb,
        title: 'Industry 4.0',
        text: 'Digital manufacturing driven by data, automation, and intelligent technologies.',
    },
]

const specializationAreas = [
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
    {
        icon: Target,
        title: 'High Industry Demand',
        text: 'Mechatronics professionals are needed across multiple technology-driven industries.',
    },
    {
        icon: Rocket,
        title: 'Cutting-Edge Technologies',
        text: 'Build expertise around robotics, automation, AI, IoT, and intelligent systems.',
    },
    {
        icon: Sparkles,
        title: 'Global Opportunities',
        text: 'The interdisciplinary nature of the field creates strong global career opportunities.',
    },
    {
        icon: Wrench,
        title: 'Versatile Engineering',
        text: 'Combine multiple engineering disciplines to solve complex real-world problems.',
    },
]

const Page = () => {
    return (
        <>
            <SiteHeader />

            <main className="bg-[#FAF7F2] text-[#1E1917]">

                {/* =====================================================
                    SUBPAGE HERO
                ====================================================== */}
                <section className="bg-[#20235A]">
                    <div className="mx-auto max-w-[1400px] px-6 pb-14 pt-20 sm:px-8 sm:pb-16 sm:pt-24 lg:px-12 lg:pb-20 lg:pt-28 xl:px-16">

                        {/* Breadcrumb */}
                        <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.18em] text-white/45">
                            <span>
                                Mechatronics Engineering
                            </span>

                            <span className="text-[#D2B87C]">
                                /
                            </span>

                            <span className="text-[#D2B87C]">
                                Career Scope
                            </span>
                        </div>

                        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.45fr] lg:items-end">

                            {/* Heading */}
                            <div>
                                <div className="mb-5 flex items-center gap-4">
                                    <span className="h-px w-10 bg-[#D2B87C]" />

                                    <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                        Career & Opportunities
                                    </span>
                                </div>

                                <h1 className="max-w-4xl font-serif text-[3rem] font-medium leading-[1.02] tracking-[-0.035em] text-white sm:text-[4.4rem] lg:text-[5.3rem] xl:text-[5.8rem]">
                                    Career
                                    <span className="block text-[#D2B87C]">
                                        Scope
                                    </span>
                                </h1>
                            </div>

                            {/* Hero Description */}
                            <div className="lg:border-l lg:border-white/15 lg:pl-10">
                                <p className="max-w-sm text-sm leading-7 text-white/65 lg:ml-auto">
                                    Discover the diverse career pathways,
                                    emerging technologies and professional
                                    opportunities available to Mechatronics
                                    Engineering graduates.
                                </p>
                            </div>

                        </div>
                    </div>
                </section>

                {/* =====================================================
                    DEPARTMENT NAVIGATION
                ====================================================== */}
                <DepartmentNavigation />

                {/* =====================================================
                    INTRODUCTION
                ====================================================== */}
                <section className="bg-white">
                    <div className="mx-auto max-w-[1400px] px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32 xl:px-16">

                        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">

                            {/* Heading */}
                            <div>
                                <div className="flex items-center gap-4">
                                    <span className="h-px w-10 bg-[#D2B87C]" />

                                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                        01 / Introduction
                                    </span>
                                </div>

                                <h2 className="mt-5 max-w-md font-serif text-4xl leading-[1.1] text-[#20235A] sm:text-5xl">
                                    Engineering the
                                    <span className="block italic">
                                        intelligent future.
                                    </span>
                                </h2>
                            </div>

                            {/* Content */}
                            <div className="max-w-4xl">
                                <p className="text-[15px] leading-8 text-[#1E1917]/70 sm:text-base sm:leading-[1.95]">
                                    Mechatronics Engineering is a
                                    multidisciplinary field that combines
                                    mechanical engineering, electronics,
                                    computer science, and control systems to
                                    design and develop intelligent systems and
                                    automation solutions.
                                </p>

                                <p className="mt-7 text-[15px] leading-8 text-[#1E1917]/70 sm:text-base sm:leading-[1.95]">
                                    It is widely used in industries such as
                                    manufacturing, robotics, automotive, and
                                    aerospace. This multidisciplinary nature
                                    allows graduates to work across a broad
                                    range of technology-driven industries.
                                </p>
                            </div>

                        </div>
                    </div>
                </section>

                {/* =====================================================
                    CAREER LANDSCAPE
                ====================================================== */}
                <section className="border-t border-[#20235A]/10 bg-[#FAF7F2]">
                    <div className="mx-auto max-w-[1400px] px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32 xl:px-16">

                        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">

                            {/* Heading */}
                            <div>
                                <div className="flex items-center gap-4">
                                    <span className="h-px w-10 bg-[#D2B87C]" />

                                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                        02 / Career Scope
                                    </span>
                                </div>

                                <h2 className="mt-5 max-w-md font-serif text-4xl leading-[1.1] text-[#20235A] sm:text-5xl">
                                    A career shaped by
                                    <span className="block italic">
                                        technological growth.
                                    </span>
                                </h2>

                                <p className="mt-6 max-w-md text-sm leading-7 text-[#1E1917]/60 sm:text-base">
                                    Mechatronics engineers are in high demand
                                    due to the rapid growth of automation,
                                    robotics, intelligent systems and
                                    connected technologies.
                                </p>
                            </div>

                            {/* Growth Areas */}
                            <div className="grid sm:grid-cols-2">

                                {growthAreas.map((item, index) => {
                                    const Icon = item.icon

                                    return (
                                        <article
                                            key={item.title}
                                            className="group border-t border-[#20235A]/15 py-7 sm:px-6 sm:first:pr-10 sm:nth-[2]:pl-10"
                                        >
                                            <div className="flex items-center justify-between">
                                                <span className="font-serif text-xl text-[#D2B87C]">
                                                    0{index + 1}
                                                </span>

                                                <Icon
                                                    size={20}
                                                    strokeWidth={1.4}
                                                    className="text-[#8F7746]"
                                                />
                                            </div>

                                            <h3 className="mt-5 font-serif text-2xl text-[#20235A]">
                                                {item.title}
                                            </h3>

                                            <p className="mt-3 text-sm leading-7 text-[#1E1917]/55">
                                                {item.text}
                                            </p>
                                        </article>
                                    )
                                })}

                            </div>

                        </div>
                    </div>
                </section>

                {/* =====================================================
                    TOP CAREER OPPORTUNITIES
                ====================================================== */}
                <section className="bg-white">
                    <div className="mx-auto max-w-[1400px] px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32 xl:px-16">

                        <div className="grid gap-14 lg:grid-cols-[0.55fr_1.45fr] lg:gap-20">

                            {/* Intro */}
                            <div className="lg:sticky lg:top-28 lg:self-start">

                                <div className="flex items-center gap-4">
                                    <span className="h-px w-10 bg-[#D2B87C]" />

                                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                        03 / Career Opportunities
                                    </span>
                                </div>

                                <h2 className="mt-5 font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-[#20235A] sm:text-5xl lg:text-[3.7rem]">
                                    Where can
                                    <span className="block italic">
                                        Mechatronics take you?
                                    </span>
                                </h2>

                                <p className="mt-6 max-w-md text-sm leading-7 text-[#1E1917]/60 sm:text-base">
                                    Graduates can work across industries
                                    ranging from automobile and manufacturing
                                    to healthcare, robotics, aerospace and
                                    advanced technology.
                                </p>

                            </div>

                            {/* Career Cards */}
                            <div className="grid gap-4 sm:grid-cols-2">
                                {careerOpportunities.map((career) => {
                                    const Icon = career.icon

                                    return (
                                        <article
                                            key={career.title}
                                            className="group relative overflow-hidden border border-[#20235A]/10 bg-[#FAF7F2] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#20235A] hover:bg-[#20235A] sm:p-8"
                                        >
                                            <div className="absolute right-5 top-4 font-serif text-5xl text-[#20235A]/[0.06] transition-colors group-hover:text-white/[0.05]">
                                                {career.number}
                                            </div>

                                            <div className="flex h-11 w-11 items-center justify-center border border-[#D2B87C]/70 text-[#8F7746] transition-colors group-hover:border-[#D2B87C] group-hover:text-[#D2B87C]">
                                                <Icon
                                                    size={20}
                                                    strokeWidth={1.5}
                                                />
                                            </div>

                                            <h3 className="mt-8 font-serif text-2xl leading-tight text-[#20235A] transition-colors group-hover:text-white">
                                                {career.title}
                                            </h3>

                                            <p className="mt-4 text-sm leading-7 text-[#1E1917]/60 transition-colors group-hover:text-white/60">
                                                {career.description}
                                            </p>

                                            {career.companies && (
                                                <div className="mt-6 border-t border-[#1E1917]/10 pt-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#8F7746] transition-colors group-hover:border-white/10 group-hover:text-[#D2B87C]">
                                                    {career.companies}
                                                </div>
                                            )}
                                        </article>
                                    )
                                })}
                            </div>

                        </div>
                    </div>
                </section>

                {/* =====================================================
                    HIGHER STUDIES
                ====================================================== */}
                <section className="bg-[#20235A]">
                    <div className="mx-auto max-w-[1400px] px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16">

                        <div className="grid items-start gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">

                            <div>
                                <div className="flex items-center gap-4">
                                    <span className="h-px w-10 bg-[#D2B87C]" />

                                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                                        Higher Studies
                                    </span>
                                </div>

                                <h2 className="mt-5 max-w-md font-serif text-4xl leading-[1.1] text-white sm:text-5xl">
                                    Keep learning.
                                    <span className="block text-[#D2B87C]">
                                        Keep evolving.
                                    </span>
                                </h2>

                                <p className="mt-6 max-w-md text-sm leading-7 text-white/60 sm:text-base">
                                    Students can pursue advanced studies and
                                    specialization in emerging areas that
                                    combine engineering with intelligent
                                    technologies.
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2">
                                {specializationAreas.map((area, index) => (
                                    <div
                                        key={area}
                                        className="border-t border-white/15 py-7 sm:px-6 sm:py-8"
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="font-serif text-xl text-[#D2B87C]">
                                                0{index + 1}
                                            </span>

                                            <GraduationCap
                                                size={20}
                                                strokeWidth={1.4}
                                                className="text-[#D2B87C]"
                                            />
                                        </div>

                                        <h3 className="mt-5 font-serif text-2xl text-white">
                                            {area}
                                        </h3>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </section>

                {/* =====================================================
                    FUTURE SCOPE
                ====================================================== */}
                <section className="bg-[#FAF7F2]">
                    <div className="mx-auto max-w-[1400px] px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32 xl:px-16">

                        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">

                            <div>
                                <div className="flex items-center gap-4">
                                    <span className="h-px w-10 bg-[#D2B87C]" />

                                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                        04 / Future Scope
                                    </span>
                                </div>

                                <h2 className="mt-5 max-w-md font-serif text-4xl leading-[1.1] text-[#20235A] sm:text-5xl">
                                    The future belongs to
                                    <span className="block italic">
                                        intelligent systems.
                                    </span>
                                </h2>

                                <p className="mt-6 max-w-md text-sm leading-7 text-[#1E1917]/60 sm:text-base">
                                    The future of Mechatronics Engineering is
                                    closely connected with automation,
                                    artificial intelligence, robotics and
                                    next-generation mobility.
                                </p>
                            </div>

                            <div className="border-t border-[#20235A]/15">

                                {futureAreas.map((area, index) => (
                                    <div
                                        key={area}
                                        className="group flex items-center gap-5 border-b border-[#20235A]/15 py-6 sm:gap-6"
                                    >
                                        <span className="w-8 shrink-0 font-serif text-xl text-[#D2B87C]">
                                            0{index + 1}
                                        </span>

                                        <div className="h-px w-8 shrink-0 bg-[#D2B87C] transition-all duration-300 group-hover:w-14" />

                                        <p className="font-serif text-xl leading-7 text-[#20235A] sm:text-2xl">
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
                <section className="border-t border-[#20235A]/10 bg-white">
                    <div className="mx-auto max-w-[1400px] px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16">

                        <div className="text-center">

                            <div className="flex items-center justify-center gap-4">
                                <span className="h-px w-10 bg-[#D2B87C]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                    05 / Why Choose Mechatronics
                                </span>

                                <span className="h-px w-10 bg-[#D2B87C]" />
                            </div>

                            <h2 className="mx-auto mt-5 max-w-3xl font-serif text-4xl leading-[1.1] text-[#20235A] sm:text-5xl">
                                One discipline.
                                <span className="block italic">
                                    Multiple possibilities.
                                </span>
                            </h2>

                        </div>

                        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4">

                            {reasons.map((reason, index) => {
                                const Icon = reason.icon

                                return (
                                    <article
                                        key={reason.title}
                                        className="border-t border-[#20235A]/15 px-0 py-7 sm:px-6 sm:py-8 lg:first:pl-0 lg:last:pr-0"
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="flex h-11 w-11 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                                                <Icon
                                                    size={20}
                                                    strokeWidth={1.5}
                                                />
                                            </div>

                                            <span className="font-serif text-xl text-[#D2B87C]">
                                                0{index + 1}
                                            </span>
                                        </div>

                                        <h3 className="mt-8 font-serif text-2xl leading-tight text-[#20235A]">
                                            {reason.title}
                                        </h3>

                                        <p className="mt-3 text-sm leading-7 text-[#1E1917]/55">
                                            {reason.text}
                                        </p>
                                    </article>
                                )
                            })}

                        </div>
                    </div>
                </section>

                {/* =====================================================
                    CONCLUSION
                ====================================================== */}
                <section className="bg-[#20235A]">
                    <div className="mx-auto max-w-[1400px] px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16">

                        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">

                            <div className="max-w-3xl">

                                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                    Mechatronics Engineering
                                </p>

                                <h2 className="mt-5 font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-white sm:text-5xl lg:text-6xl">
                                    Build a career at the intersection of
                                    <span className="text-[#D2B87C]">
                                        {' '}engineering and intelligence.
                                    </span>
                                </h2>

                                <p className="mt-6 max-w-2xl text-base leading-8 text-white/60">
                                    Mechatronics Engineering offers a diverse
                                    and future-oriented career path. With
                                    increasing automation and technological
                                    innovation, professionals in this field
                                    will play a key role in shaping modern
                                    industries.
                                </p>

                            </div>

                            <a
                                href="/mechatronics-engineering"
                                className="group inline-flex shrink-0 items-center gap-4 self-start border border-[#D2B87C]/50 px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:border-[#D2B87C] hover:bg-[#D2B87C] hover:text-[#20235A] lg:self-end"
                            >
                                Explore Department

                                <ArrowRight
                                    size={18}
                                    strokeWidth={1.5}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </a>

                        </div>
                    </div>
                </section>

            </main>

            <FooterSection />
        </>
    )
}

export default Page