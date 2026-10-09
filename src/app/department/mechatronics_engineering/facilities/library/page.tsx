import SiteHeader from '@/components/header/SiteHeader'
import FooterSection from '@/components/home/FooterSection'
import DepartmentNavigation from '../../DepartmentsNavigation/page'
import React from 'react'
import {
    ArrowRight,
    BookOpen,
    Clock3,
    Database,
    ExternalLink,
    LibraryBig,
    MonitorPlay,
    Search,
    Wifi,
} from 'lucide-react'

const libraryStats = [
    {
        value: '28,309',
        label: 'Textbooks',
    },
    {
        value: '4,576',
        label: 'Reference Books',
    },
    {
        value: '9,000',
        label: 'Sq. Ft. Library',
    },
    {
        value: '64 Mbps',
        label: 'Digital Connectivity',
    },
]

const departmentLibraryStats = [
    {
        number: '3,755',
        label: 'Total Number of Books',
    },
    {
        number: '1,425',
        label: 'Total Number of Titles',
    },
    {
        number: '55',
        label: 'Total Number of Periodicals',
    },
    {
        number: '127',
        label: 'Total Number of Collections',
    },
]

const libraryFeatures = [
    {
        icon: LibraryBig,
        title: 'Independent Central Library',
        description:
            'The central library occupies a 9,000 sq.ft plinth area in the Brahmagupta Block and provides modern facilities for students and faculty.',
    },
    {
        icon: BookOpen,
        title: 'Extensive Collections',
        description:
            'Program-specific textbooks, reference books, laboratory manuals, magazines, journals and other learning materials support academic requirements.',
    },
    {
        icon: Wifi,
        title: 'Digital Access',
        description:
            'High-speed internet connectivity enables access to e-journals, e-books and online learning resources through the digital library.',
    },
    {
        icon: Database,
        title: 'Automated Library',
        description:
            'The library is fully automated using KOHA Library Software, supporting efficient access and management of library resources.',
    },
]

const digitalResources = [
    'DELNET',
    'Shodhganga',
    'ShodhSindhu',
    'EBSCO',
    'J-Gate',
    'McGraw Hill',
    'Springer',
    'Elsevier',
    'Cengage Learning',
]

const libraryImages = [
    {
        src: 'https://ncerc.ac.in/images/dpt/mechatronics-engineering/library1.jpg',
        alt: 'NCERC Central Library',
    },
    {
        src: 'https://ncerc.ac.in/images/dpt/mechatronics-engineering/library2.jpg',
        alt: 'NCERC Library Reading Space',
    },
    {
        src: 'https://ncerc.ac.in/images/dpt/mechatronics-engineering/library3.jpg',
        alt: 'NCERC Library Resources',
    },
    {
        src: 'https://ncerc.ac.in/images/dpt/mechatronics-engineering/library4.jpg',
        alt: 'NCERC Digital Library',
    },
    {
        src: 'https://ncerc.ac.in/images/dpt/mechatronics-engineering/library5.jpg',
        alt: 'NCERC Library Collection',
    },
    {
        src: 'https://ncerc.ac.in/images/dpt/mechatronics-engineering/library6.jpg',
        alt: 'NCERC Library Facility',
    },
]

const page = () => {
    return (
        <>
            <SiteHeader />

            <main className="bg-[#FAF7F2] text-[#1E1917]">
                {/* =========================================================
                    HERO
                ========================================================= */}
                <section className="bg-[#20235A]">
                    <div className="mx-auto max-w-[1400px] px-6 pb-14 pt-20 sm:px-8 sm:pb-16 sm:pt-24 lg:px-12 lg:pb-20 lg:pt-28 xl:px-16">
                        {/* Breadcrumb */}
                        <div className="mb-10 flex flex-wrap items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-white/45 sm:mb-14">
                            <span>Mechatronics Engineering</span>
                            <span className="text-[#D2B87C]">/</span>
                            <span className="text-white/75">
                                Central Library
                            </span>
                        </div>

                        <div className="max-w-5xl">
                            <div className="mb-7 flex items-center gap-4">
                                <span className="h-px w-10 bg-[#D2B87C]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                    Knowledge & Resources
                                </span>
                            </div>

                            <h1 className="font-serif text-[3rem] font-medium leading-[1.02] tracking-[-0.035em] text-white sm:text-[4.4rem] lg:text-[5.3rem] xl:text-[5.8rem]">
                                Central Library
                                <span className="block text-[#D2B87C]">
                                    Knowledge Without Limits
                                </span>
                            </h1>

                            <p className="mt-8 max-w-2xl text-sm leading-7 text-white/65 sm:mt-10 sm:text-base sm:leading-8">
                                A comprehensive academic and digital learning
                                environment supporting students, faculty,
                                research, self-learning and continuous
                                knowledge development.
                            </p>
                        </div>
                    </div>
                </section>

                {/* =========================================================
                    DEPARTMENT NAVIGATION
                ========================================================= */}
                <DepartmentNavigation />

                {/* =========================================================
                    LIBRARY STATISTICS
                ========================================================= */}
                <section className="border-b border-[#20235A]/10 bg-white">
                    <div className="mx-auto grid max-w-[1400px] divide-y divide-[#20235A]/10 px-6 sm:grid-cols-2 sm:divide-x sm:divide-y-0 sm:px-8 lg:grid-cols-4 lg:px-12 xl:px-16">
                        {libraryStats.map((stat, index) => (
                            <div
                                key={stat.label}
                                className={`px-0 py-7 sm:px-6 lg:py-8 ${index === 0 ? 'lg:pl-0' : ''
                                    } ${index === libraryStats.length - 1
                                        ? 'lg:pr-0'
                                        : ''
                                    }`}
                            >
                                <p className="font-serif text-2xl text-[#20235A] sm:text-3xl">
                                    {stat.value}
                                </p>

                                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* =========================================================
                    LIBRARY OVERVIEW
                ========================================================= */}
                <section className="bg-white py-20 sm:py-24 lg:py-32">
                    <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16">
                        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 xl:gap-28">
                            <div>
                                <div className="flex items-center gap-4">
                                    <span className="h-px w-10 bg-[#D2B87C]" />

                                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                        Central Library Overview
                                    </span>
                                </div>

                                <h2 className="mt-6 max-w-xl font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-[#20235A] sm:text-5xl lg:text-[3.7rem]">
                                    A foundation for
                                    <span className="block text-[#8F7746]">
                                        lifelong learning.
                                    </span>
                                </h2>
                            </div>

                            <div className="space-y-8 text-[15px] leading-8 text-[#1E1917]/70 sm:text-base sm:leading-[1.95]">
                                <p>
                                    Our Institution is well equipped with a
                                    central library which includes
                                    program-specific textbooks, reference
                                    books and laboratory manuals. The NCERC
                                    library is well stacked with 28,309
                                    textbooks related to various aspects of
                                    engineering and technology, industry
                                    related topics and general subjects.
                                </p>

                                <p>
                                    A collection of 4,576 reference books is
                                    also available to support deeper academic
                                    study and research. The library is
                                    continuously updated with the latest
                                    magazines, National and International
                                    journals, reference books and other
                                    learning materials at regular intervals.
                                </p>

                                <p>
                                    The library also has a digital setup with
                                    high-speed connectivity to provide access
                                    to e-journals, e-books and online resources
                                    such as DELNET, Shodhganga and ShodhSindhu.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================
                    MAIN FEATURES
                ========================================================= */}
                <section className="bg-[#FAF7F2] py-20 sm:py-24 lg:py-32">
                    <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16">
                        <div className="max-w-3xl">
                            <div className="flex items-center gap-4">
                                <span className="h-px w-10 bg-[#D2B87C]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                    Main Features
                                </span>
                            </div>

                            <h2 className="mt-6 font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-[#20235A] sm:text-5xl lg:text-[3.7rem]">
                                More than a library.
                                <span className="block">
                                    A space for discovery.
                                </span>
                            </h2>

                            <p className="mt-7 text-[15px] leading-8 text-[#1E1917]/70 sm:text-base sm:leading-[1.9]">
                                The central library serves as a knowledge hub
                                where students and faculty can access
                                resources, develop skills, explore newer fields
                                of study and connect with the wider academic
                                world.
                            </p>
                        </div>

                        <div className="mt-14 grid gap-px overflow-hidden border border-[#20235A]/10 bg-[#20235A]/10 sm:grid-cols-2 lg:grid-cols-4">
                            {libraryFeatures.map((feature) => {
                                const Icon = feature.icon

                                return (
                                    <div
                                        key={feature.title}
                                        className="bg-white p-7 sm:p-8"
                                    >
                                        <Icon className="h-6 w-6 text-[#8F7746]" />

                                        <h3 className="mt-7 font-serif text-2xl text-[#20235A]">
                                            {feature.title}
                                        </h3>

                                        <p className="mt-4 text-sm leading-7 text-[#1E1917]/65">
                                            {feature.description}
                                        </p>
                                    </div>
                                )
                            })}
                        </div>

                        <div className="mt-10 border border-[#20235A]/10 bg-white p-7 sm:p-8">
                            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                                <div>
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                        Library Schedule
                                    </p>

                                    <h3 className="mt-3 font-serif text-2xl text-[#20235A]">
                                        Open throughout the academic week
                                    </h3>
                                </div>

                                <div className="flex items-center gap-4">
                                    <Clock3 className="h-6 w-6 text-[#8F7746]" />

                                    <div>
                                        <p className="font-serif text-lg text-[#20235A]">
                                            8:00 AM — 8:00 PM
                                        </p>

                                        <p className="mt-1 text-xs text-[#1E1917]/50">
                                            Except Sundays & Government
                                            holidays
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================
                    DEPARTMENT BOOK DETAILS
                ========================================================= */}
                <section className="bg-white py-20 sm:py-24 lg:py-32">
                    <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16">
                        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20 xl:gap-28">
                            <div>
                                <div className="flex items-center gap-4">
                                    <span className="h-px w-10 bg-[#D2B87C]" />

                                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                        Mechatronics Engineering
                                    </span>
                                </div>

                                <h2 className="mt-6 font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-[#20235A] sm:text-5xl lg:text-[3.7rem]">
                                    Department
                                    <span className="block text-[#8F7746]">
                                        Library Collection.
                                    </span>
                                </h2>

                                <p className="mt-7 text-[15px] leading-8 text-[#1E1917]/65 sm:text-base sm:leading-[1.9]">
                                    Dedicated resources are available to support
                                    the academic requirements of the
                                    Mechatronics Engineering programme.
                                </p>
                            </div>

                            <div className="border-y border-[#20235A]/10">
                                {departmentLibraryStats.map((item, index) => (
                                    <div
                                        key={item.label}
                                        className={`grid grid-cols-[100px_1fr] items-center gap-6 py-6 sm:grid-cols-[150px_1fr] sm:gap-8 ${index !==
                                                departmentLibraryStats.length - 1
                                                ? 'border-b border-[#20235A]/10'
                                                : ''
                                            }`}
                                    >
                                        <span className="font-serif text-3xl text-[#20235A] sm:text-4xl">
                                            {item.number}
                                        </span>

                                        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8F7746] sm:text-sm">
                                            {item.label}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================
                    ACCESSIBILITY
                ========================================================= */}
                <section className="bg-[#FAF7F2] py-20 sm:py-24 lg:py-32">
                    <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16">
                        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20 xl:gap-28">
                            <div>
                                <div className="flex items-center gap-4">
                                    <span className="h-px w-10 bg-[#D2B87C]" />

                                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                        Accessibility to Students
                                    </span>
                                </div>

                                <h2 className="mt-6 font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-[#20235A] sm:text-5xl lg:text-[3.7rem]">
                                    Easy access to
                                    <span className="block">
                                        essential resources.
                                    </span>
                                </h2>
                            </div>

                            <div className="space-y-8 text-[15px] leading-8 text-[#1E1917]/70 sm:text-base sm:leading-[1.95]">
                                <p>
                                    Students can borrow books using the ID card
                                    issued by the college. Access to the
                                    library is managed through the student ID
                                    card, providing a structured and convenient
                                    borrowing system.
                                </p>

                                <p>
                                    Students can borrow books for a period of
                                    15 days and renew the same book for an
                                    additional 15 days when required.
                                </p>

                                <div className="grid gap-5 sm:grid-cols-2">
                                    <div className="border border-[#20235A]/10 bg-white p-6">
                                        <p className="font-serif text-3xl text-[#20235A]">
                                            15 Days
                                        </p>

                                        <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                                            Standard Borrowing Period
                                        </p>
                                    </div>

                                    <div className="border border-[#20235A]/10 bg-white p-6">
                                        <p className="font-serif text-3xl text-[#20235A]">
                                            +15 Days
                                        </p>

                                        <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                                            Renewal Period
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 border-t border-[#20235A]/10 pt-6">
                                    <Clock3 className="mt-1 h-5 w-5 shrink-0 text-[#8F7746]" />

                                    <div>
                                        <p className="font-serif text-xl text-[#20235A]">
                                            8:00 AM — 8:00 PM
                                        </p>

                                        <p className="mt-1 text-sm text-[#1E1917]/55">
                                            Library usage hours, except Sundays
                                            and Government holidays.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================
                    E-RESOURCES
                ========================================================= */}
                <section className="bg-white py-20 sm:py-24 lg:py-32">
                    <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16">
                        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 xl:gap-28">
                            <div>
                                <div className="flex items-center gap-4">
                                    <span className="h-px w-10 bg-[#D2B87C]" />

                                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                        Digital Knowledge
                                    </span>
                                </div>

                                <h2 className="mt-6 font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-[#20235A] sm:text-5xl lg:text-[3.7rem]">
                                    Learning resources
                                    <span className="block text-[#8F7746]">
                                        beyond the shelves.
                                    </span>
                                </h2>
                            </div>

                            <div>
                                <div className="space-y-8 text-[15px] leading-8 text-[#1E1917]/70 sm:text-base sm:leading-[1.95]">
                                    <p>
                                        E-Learning resources such as EBSCO and
                                        J-Gate are available in the Library and
                                        are effectively used by faculty and
                                        students. A well-equipped Digital
                                        Library further extends access to
                                        online academic resources.
                                    </p>

                                    <p>
                                        The entire library is fully automated
                                        using KOHA Library Software. Students
                                        and faculty can access a wide range of
                                        academic resources including core
                                        reference collections from McGraw Hill,
                                        Springer and Elsevier, along with
                                        Cengage Learning.
                                    </p>

                                    <p>
                                        Resources related to GATE and
                                        competitive examinations are also
                                        available to encourage students to
                                        strengthen their knowledge and prepare
                                        for future academic and professional
                                        opportunities.
                                    </p>

                                    <p>
                                        DELNET provides access to rare books
                                        from various institutional libraries,
                                        while manuscripts from different
                                        departments are available for student
                                        reference. The Digital Library also
                                        provides access to 2,415 educational
                                        videos.
                                    </p>
                                </div>

                                <div className="mt-10 flex flex-wrap gap-3 border-t border-[#20235A]/10 pt-8">
                                    {digitalResources.map((resource) => (
                                        <span
                                            key={resource}
                                            className="border border-[#20235A]/10 bg-[#FAF7F2] px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8F7746]"
                                        >
                                            {resource}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================
                    SELF LEARNING
                ========================================================= */}
                <section className="bg-[#FAF7F2] py-20 sm:py-24 lg:py-32">
                    <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16">
                        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20 xl:gap-28">
                            <div>
                                <div className="flex items-center gap-4">
                                    <span className="h-px w-10 bg-[#D2B87C]" />

                                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                        Self-Learning Activities
                                    </span>
                                </div>

                                <h2 className="mt-6 font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-[#20235A] sm:text-5xl lg:text-[3.7rem]">
                                    Supporting students
                                    <span className="block">
                                        beyond the curriculum.
                                    </span>
                                </h2>
                            </div>

                            <div className="space-y-8 text-[15px] leading-8 text-[#1E1917]/70 sm:text-base sm:leading-[1.95]">
                                <p>
                                    The library provides learning resources
                                    that enable students to pursue
                                    self-learning activities and explore
                                    subjects beyond their regular academic
                                    requirements.
                                </p>

                                <p>
                                    High-speed internet connectivity of up to
                                    65 Mbps (1:1) is available on campus.
                                    Students can log in and utilize the
                                    available e-resources for self-learning,
                                    research and knowledge development.
                                </p>

                                <p>
                                    The Digital Library is effectively utilized
                                    by students to access online resources and
                                    strengthen their independent learning
                                    experience.
                                </p>

                                <div className="border-l-2 border-[#D2B87C] pl-6">
                                    <p className="font-serif text-xl leading-9 text-[#20235A] sm:text-2xl sm:leading-10">
                                        “A learning environment designed to
                                        encourage curiosity, independent study
                                        and continuous discovery.”
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================
                    LIBRARY GALLERY
                ========================================================= */}
                <section className="bg-white py-20 sm:py-24 lg:py-32">
                    <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16">
                        <div className="mb-14 flex flex-col justify-between gap-8 sm:mb-16 lg:flex-row lg:items-end">
                            <div className="max-w-3xl">
                                <div className="flex items-center gap-4">
                                    <span className="h-px w-10 bg-[#D2B87C]" />

                                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                        Library Gallery
                                    </span>
                                </div>

                                <h2 className="mt-6 font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-[#20235A] sm:text-5xl lg:text-[3.7rem]">
                                    A closer look at
                                    <span className="block text-[#8F7746]">
                                        the learning space.
                                    </span>
                                </h2>
                            </div>

                            <p className="max-w-md text-sm leading-7 text-[#1E1917]/60 sm:text-base">
                                Explore the central library environment and the
                                spaces designed to support reading, research,
                                digital learning and academic discovery.
                            </p>
                        </div>

                        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            {libraryImages.map((image, index) => (
                                <div
                                    key={image.src}
                                    className={`group relative overflow-hidden ${index === 0 || index === 5
                                            ? 'sm:row-span-1 lg:col-span-1'
                                            : ''
                                        }`}
                                >
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                                    />

                                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#20235A]/75 to-transparent p-5 pt-16">
                                        <div className="flex items-center justify-between gap-4">
                                            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/80">
                                                Library /{' '}
                                                {String(index + 1).padStart(
                                                    2,
                                                    '0'
                                                )}
                                            </span>

                                            <ExternalLink className="h-4 w-4 text-[#D2B87C]" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* =========================================================
                    DIGITAL LIBRARY HIGHLIGHT
                ========================================================= */}
                <section className="bg-[#20235A]">
                    <div className="mx-auto max-w-[1400px] px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16">
                        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
                            <div>
                                <div className="flex items-center gap-4">
                                    <span className="h-px w-10 bg-[#D2B87C]" />

                                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                                        Digital Library
                                    </span>
                                </div>

                                <h2 className="mt-6 font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-white sm:text-5xl lg:text-6xl">
                                    Connected to a
                                    <span className="block text-[#D2B87C]">
                                        world of knowledge.
                                    </span>
                                </h2>
                            </div>

                            <div>
                                <p className="text-base leading-8 text-white/60">
                                    With high-speed connectivity, digital
                                    resources, automated library services and
                                    access to national and international
                                    academic platforms, the library extends
                                    learning beyond its physical collection.
                                </p>

                                <div className="mt-8 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-3">
                                    <div className="bg-[#20235A] p-6">
                                        <Search className="h-5 w-5 text-[#D2B87C]" />

                                        <p className="mt-5 font-serif text-xl text-white">
                                            KOHA
                                        </p>

                                        <p className="mt-2 text-xs leading-5 text-white/45">
                                            Automated Library Software
                                        </p>
                                    </div>

                                    <div className="bg-[#20235A] p-6">
                                        <Wifi className="h-5 w-5 text-[#D2B87C]" />

                                        <p className="mt-5 font-serif text-xl text-white">
                                            64 Mbps
                                        </p>

                                        <p className="mt-2 text-xs leading-5 text-white/45">
                                            Digital Connectivity
                                        </p>
                                    </div>

                                    <div className="bg-[#20235A] p-6">
                                        <MonitorPlay className="h-5 w-5 text-[#D2B87C]" />

                                        <p className="mt-5 font-serif text-xl text-white">
                                            2,415
                                        </p>

                                        <p className="mt-2 text-xs leading-5 text-white/45">
                                            Educational Videos
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================
                    CLOSING CTA
                ========================================================= */}
                <section className="bg-white">
                    <div className="mx-auto max-w-[1400px] px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16">
                        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
                            <div className="max-w-3xl">
                                <div className="flex items-center gap-4">
                                    <span className="h-px w-10 bg-[#D2B87C]" />

                                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                        Mechatronics Engineering
                                    </span>
                                </div>

                                <h2 className="mt-6 font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-[#20235A] sm:text-5xl lg:text-6xl">
                                    Learn. Explore.
                                    <span className="block text-[#8F7746]">
                                        Discover more.
                                    </span>
                                </h2>

                                <p className="mt-7 max-w-2xl text-base leading-8 text-[#1E1917]/60">
                                    The Central Library provides the academic,
                                    digital and research resources students
                                    need to build knowledge and continue
                                    learning throughout their journey.
                                </p>
                            </div>

                            <a
                                href="/mechatronics-engineering/facilities.php"
                                className="group inline-flex w-fit items-center gap-4 border border-[#20235A]/20 px-6 py-4 text-sm font-semibold text-[#20235A] transition-colors duration-300 hover:border-[#20235A] hover:bg-[#20235A] hover:text-white"
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
    )
}

export default page