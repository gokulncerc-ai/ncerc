import SiteHeader from '@/components/header/SiteHeader'
import FooterSection from '@/components/home/FooterSection'
import DepartmentNavigation from '../DepartmentsNavigation/DepartmentsNavigation'

import {
    ArrowRight,
    BookOpen,
    Building2,
    GraduationCap,
    Monitor,
    Presentation,
    Wrench,
} from 'lucide-react'
import React from 'react'

const facilities = [
    {
        number: '01',
        title: 'Laboratories',
        description:
            'Well-equipped laboratories provide students with practical exposure to mechatronics systems, engineering technologies, automation and hands-on experimentation.',
        href: '/departments/mechatronics_engineering/facilities/laboratories',
        icon: Wrench,
    },
    {
        number: '02',
        title: 'Class Rooms',
        description:
            'Spacious and well-organised classrooms provide a focused academic environment that supports effective teaching, collaborative learning and technical discussions.',
        href: '/departments/mechatronics_engineering/facilities/class_rooms',
        icon: GraduationCap,
    },
    {
        number: '03',
        title: 'Seminar Halls',
        description:
            'Dedicated seminar spaces support technical presentations, workshops, guest lectures, academic interactions and knowledge-sharing activities.',
        href: '/departments/mechatronics_engineering/facilities/seminar_halls',
        icon: Presentation,
    },
    {
        number: '04',
        title: 'Library',
        description:
            'The library provides access to academic resources and learning materials that support classroom learning, technical research and the continuous development of students.',
        href: '/departments/mechatronics_engineering/facilities/library',
        icon: BookOpen,
    },
    {
        number: '05',
        title: 'Smart Rooms',
        description:
            'Technology-enabled smart rooms create an engaging learning environment through modern digital teaching tools, multimedia resources and interactive academic experiences.',
        href: '/departments/mechatronics_engineering/facilities/smart_rooms',
        icon: Monitor,
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
                                Facilities
                            </span>
                        </div>

                        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.45fr] lg:items-end">

                            {/* Heading */}
                            <div>
                                <div className="mb-5 flex items-center gap-4">
                                    <span className="h-px w-10 bg-[#D2B87C]" />

                                    <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                        Infrastructure & Learning
                                    </span>
                                </div>

                                <h1 className="max-w-4xl font-serif text-[3rem] font-medium leading-[1.02] tracking-[-0.035em] text-white sm:text-[4.4rem] lg:text-[5.3rem] xl:text-[5.8rem]">
                                    Department
                                    <span className="block text-[#D2B87C]">
                                        Facilities
                                    </span>
                                </h1>
                            </div>

                            {/* Hero Description */}
                            <div className="lg:border-l lg:border-white/15 lg:pl-10">
                                <p className="max-w-sm text-sm leading-7 text-white/65 lg:ml-auto">
                                    Learning spaces, practical laboratories and
                                    academic facilities designed to support
                                    hands-on learning and the evolving needs of
                                    Mechatronics Engineering.
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
                    FACILITIES INTRODUCTION
                ====================================================== */}
                <section className="border-b border-[#20235A]/10 bg-white">
                    <div className="mx-auto max-w-[1400px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16">

                        <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">

                            {/* Label */}
                            <div>
                                <div className="flex items-center gap-4">
                                    <span className="h-px w-10 bg-[#D2B87C]" />

                                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                        Our Infrastructure
                                    </span>
                                </div>
                            </div>

                            {/* Introduction */}
                            <div className="max-w-4xl">
                                <h2 className="font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-[#20235A] sm:text-5xl lg:text-[3.7rem]">
                                    Spaces that support
                                    <span className="text-[#8F7746]">
                                        {' '}learning, exploration & growth.
                                    </span>
                                </h2>

                                <p className="mt-7 max-w-3xl text-[15px] leading-8 text-[#1E1917]/70 sm:text-base sm:leading-[1.95]">
                                    The Department of Mechatronics Engineering
                                    provides a range of academic and learning
                                    facilities designed to complement classroom
                                    education with practical exposure,
                                    technical interaction and independent
                                    learning. From specialised laboratories to
                                    technology-enabled learning spaces, the
                                    department encourages students to engage
                                    with engineering concepts in meaningful and
                                    practical ways.
                                </p>
                            </div>

                        </div>
                    </div>
                </section>

                {/* =====================================================
                    FACILITIES LIST
                ====================================================== */}
                <section className="bg-[#FAF7F2] py-20 sm:py-24 lg:py-32">
                    <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16">

                        <div className="grid gap-12 lg:grid-cols-[0.55fr_1.45fr] lg:gap-20">

                            {/* Section Heading */}
                            <div className="lg:sticky lg:top-28 lg:self-start">

                                <div className="flex items-center gap-4">
                                    <span className="h-px w-10 bg-[#D2B87C]" />

                                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                        Facilities
                                    </span>
                                </div>

                                <h2 className="mt-5 max-w-md font-serif text-4xl leading-[1.1] text-[#20235A] sm:text-5xl">
                                    Built around the way engineers learn.
                                </h2>

                                <p className="mt-6 max-w-md text-sm leading-7 text-[#1E1917]/60 sm:text-base">
                                    Explore the academic spaces and resources
                                    available to students of the Department of
                                    Mechatronics Engineering.
                                </p>

                                <div className="mt-10 hidden border-t border-[#20235A]/10 pt-6 lg:block">
                                    <div className="flex items-center gap-3">
                                        <Building2
                                            size={19}
                                            strokeWidth={1.4}
                                            className="text-[#8F7746]"
                                        />

                                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1E1917]/45">
                                            Mechatronics Engineering
                                        </p>
                                    </div>
                                </div>

                            </div>

                            {/* Facility Items */}
                            <div className="border-t border-[#20235A]/15">

                                {facilities.map((facility) => {
                                    const Icon = facility.icon

                                    return (
                                        <a
                                            key={facility.number}
                                            href={facility.href}
                                            className="group block border-b border-[#20235A]/15 py-8 transition-colors duration-300 hover:bg-white sm:py-9 lg:py-10"
                                        >
                                            <div className="grid gap-7 sm:grid-cols-[70px_1fr_auto] sm:items-start sm:gap-8">

                                                {/* Number */}
                                                <div>
                                                    <span className="font-serif text-xl text-[#D2B87C]">
                                                        {facility.number}
                                                    </span>
                                                </div>

                                                {/* Content */}
                                                <div>
                                                    <div className="flex items-start justify-between gap-6">

                                                        <div>
                                                            <h3 className="font-serif text-2xl leading-tight text-[#20235A] transition-colors duration-300 group-hover:text-[#8F7746] sm:text-3xl">
                                                                {facility.title}
                                                            </h3>

                                                            <p className="mt-3 max-w-2xl text-[15px] leading-8 text-[#1E1917]/65 sm:text-base sm:leading-[1.85]">
                                                                {facility.description}
                                                            </p>
                                                        </div>

                                                        {/* Mobile Icon */}
                                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#20235A]/10 bg-white sm:hidden">
                                                            <Icon
                                                                size={18}
                                                                strokeWidth={1.4}
                                                                className="text-[#8F7746]"
                                                            />
                                                        </div>

                                                    </div>

                                                    {/* Explore Link */}
                                                    <div className="mt-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                                                        <span>
                                                            Explore {facility.title}
                                                        </span>

                                                        <ArrowRight
                                                            size={16}
                                                            strokeWidth={1.5}
                                                            className="transition-transform duration-300 group-hover:translate-x-1"
                                                        />
                                                    </div>
                                                </div>

                                                {/* Desktop Icon */}
                                                <div className="hidden h-12 w-12 items-center justify-center border border-[#20235A]/10 bg-white transition-colors duration-300 group-hover:border-[#D2B87C] sm:flex">
                                                    <Icon
                                                        size={21}
                                                        strokeWidth={1.4}
                                                        className="text-[#8F7746]"
                                                    />
                                                </div>

                                            </div>
                                        </a>
                                    )
                                })}

                            </div>

                        </div>
                    </div>
                </section>

                {/* =====================================================
                    FACILITIES HIGHLIGHT
                ====================================================== */}
                <section className="border-t border-[#20235A]/10 bg-white">
                    <div className="mx-auto max-w-[1400px] px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16">

                        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-end lg:gap-20">

                            {/* Heading */}
                            <div>
                                <div className="flex items-center gap-4">
                                    <span className="h-px w-10 bg-[#D2B87C]" />

                                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                        Learning Environment
                                    </span>
                                </div>

                                <h2 className="mt-5 max-w-xl font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-[#20235A] sm:text-5xl lg:text-6xl">
                                    From theory to
                                    <span className="text-[#8F7746]">
                                        {' '}practical experience.
                                    </span>
                                </h2>
                            </div>

                            {/* Description */}
                            <div className="max-w-2xl lg:ml-auto">
                                <p className="text-[15px] leading-8 text-[#1E1917]/70 sm:text-base sm:leading-[1.95]">
                                    The facilities of the department are
                                    intended to create an environment where
                                    students can learn, experiment, collaborate
                                    and develop the skills required for a
                                    multidisciplinary engineering career.
                                    Academic spaces work alongside practical
                                    and technology-enabled facilities to
                                    encourage curiosity, creativity and
                                    continuous learning.
                                </p>
                            </div>

                        </div>

                    </div>
                </section>

                {/* =====================================================
                    CLOSING CTA
                ====================================================== */}
                <section className="bg-[#20235A]">
                    <div className="mx-auto max-w-[1400px] px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16">

                        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">

                            <div className="max-w-3xl">

                                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                    Mechatronics Engineering
                                </p>

                                <h2 className="mt-5 font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-white sm:text-5xl lg:text-6xl">
                                    Explore the learning spaces of our
                                    <span className="text-[#D2B87C]">
                                        {' '}department.
                                    </span>
                                </h2>

                                <p className="mt-6 max-w-2xl text-base leading-8 text-white/60">
                                    Discover the laboratories, classrooms,
                                    seminar halls, library and smart rooms that
                                    support academic learning at the Department
                                    of Mechatronics Engineering.
                                </p>

                            </div>

                            <a
                                href="/mechatronics-engineering/labs"
                                className="group inline-flex shrink-0 items-center gap-4 self-start border border-[#D2B87C]/50 px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:border-[#D2B87C] hover:bg-[#D2B87C] hover:text-[#20235A] lg:self-end"
                            >
                                Explore Laboratories

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