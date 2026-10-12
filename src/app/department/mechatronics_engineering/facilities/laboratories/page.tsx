import SiteHeader from '@/components/header/SiteHeader'
import FooterSection from '@/components/home/FooterSection'
import DepartmentNavigation from '../../DepartmentsNavigation/DepartmentsNavigation'
import Image from 'next/image'
import {
    ArrowRight,
    BookOpen,
    Cpu,
    Gauge,
    Layers3,
    Microscope,
    Settings2,
    Zap,
} from 'lucide-react'
import React from 'react'

/* =========================================================
   LABORATORY DATA
========================================================= */

const laboratories = [
    {
        number: '01',
        semester: 'S3 MTR',
        title: 'Electrical Technology Lab',
        icon: Zap,
        description: [
            'This is the main lab where experiments like load test on various machines, speed control tests, open circuit tests, short circuit tests, etc. are carried out and also wide variety of practical experiments are performed here with combination of different rotating machines.',
            'The laboratory is also used for research activities in machines and to carry out project works on energy conversion.',
        ],
        images: [
            'https://ncerc.ac.in/images/dpt/mechatronics-engineering/lab1.jpg',
        ],
    },

    {
        number: '02',
        semester: 'S3 MTR',
        title: 'Electronic Devices and Circuits Lab',
        icon: Cpu,
        description: [
            'The Electronic Circuits Lab is a series of breadboard stations where students build various electronic circuits to study the theory behind the fundamental building blocks of electronic systems, such as resistors, capacitors, inductors, etc.',
            'The basic objective is to give hands-on experience in the design and implementation of analog and mixed-signal circuits.',
        ],
        images: [
            'https://ncerc.ac.in/images/dpt/mechatronics-engineering/lab2.jpg',
        ],
    },

    {
        number: '03',
        semester: 'S4 MTR',
        title: 'Fluid Mechanics and Machinery Lab',
        icon: Gauge,
        description: [
            'The main objectives of this lab is to demonstrate the applications of theories of basic fluid mechanics and hydraulic machines and to provide a more intuitive and physical understanding of the theory.',
        ],
        outcomes: [
            'Discuss physical basis of Bernoulli\'s equation, and apply it in flow measurement (orifice, Nozzle and Venturi meter), and to a variety of problems.',
            'Determine the efficiency and plot the characteristic curves of different types of pumps and turbines.',
        ],
        images: [
            'https://ncerc.ac.in/images/dpt/mechatronics-engineering/lab3.jpg',
        ],
    },

    {
        number: '04',
        semester: 'S4 MTR',
        title: 'Linear Integrated Circuit and Digital Electronics Lab',
        icon: Layers3,
        description: [
            'In this laboratory, students deal with digital circuits. A digital circuit is a circuit where the signal must be one of two discrete levels. Each level is interpreted as one of two different states (for example, on/off, 0/1, true/false).',
            'Digital circuits use transistors to create logic gates in order to perform Boolean logic. This logic is the foundation of digital electronics and computer processing.',
            'Digital circuits are less susceptible to noise or degradation in quality than analog circuits. It is also easier to perform error detection and correction with digital signals.',
        ],
        images: [
            'https://ncerc.ac.in/images/dpt/mechatronics-engineering/lab4.jpg',
            'https://ncerc.ac.in/images/dpt/mechatronics-engineering/lab5.jpg',
        ],
    },

    {
        number: '05',
        semester: 'S5 MTR',
        title: 'Micro Processors and Micro Controllers Lab',
        icon: Cpu,
        description: [
            'Microprocessor & Micro controller lab helps the students enhance their knowledge about various processors such as 8085, 8086, microcontrollers and also the interfacing of these processors with other equipment’s.',
            'Students will get practical tips for building circuits and programming the microcontroller in the C programming language.',
            'The features and facilities available in this lab will help the students do their projects and enhance their knowledge about the latest trends and technologies.',
        ],
        images: [
            'https://ncerc.ac.in/images/dpt/mechatronics-engineering/lab6.jpg',
        ],
    },

    {
        number: '06',
        semester: 'S5 MTR',
        title: 'Measurements and PLC Lab',
        icon: Settings2,
        description: [
            'The sole purpose of this lab is to provide hands on experience to students on measuring instruments and PLC.',
            'After the successive completion of this lab, students get an overall idea about the wiring, programming and testing of industrial grade PLC.',
            'Along with this, practical sessions in the various measuring devices like LVDT, RTD, LDR, load cell and AD590 gives an edge to their successful industrial career.',
        ],
        images: [
            'https://ncerc.ac.in/images/dpt/mechatronics-engineering/lab7.jpg',
        ],
    },

    {
        number: '07',
        semester: 'S6 MTR',
        title: 'Manufacturing Engineering Lab',
        icon: Settings2,
        description: [
            'This lab emphasizes the use of different types of machines used in production field and makes the students apt for the industry.',
            'To study the principle of operation, work holding and different operations of reciprocating machines like slotter and shaper.',
            'This lab acknowledges the scope of Computers in production technology and different expert systems used in manufacturing.',
        ],
        images: [
            'https://ncerc.ac.in/images/dpt/mechatronics-engineering/lab8.jpg',
        ],
    },

    {
        number: '08',
        semester: 'S6 MTR',
        title: 'Advanced Instrumentation Lab',
        icon: Microscope,
        description: [
            'To make students familiar with the technique of measuring product parameters like pressure, temperature, vibration, rotational speed, torque and force, along with various techniques in metrology.',
            'After the success completion of this lab, students understand the practical concepts of the various measuring terminologies.',
        ],
        images: [
            'https://ncerc.ac.in/images/dpt/mechatronics-engineering/lab9.jpg',
            'https://ncerc.ac.in/images/dpt/mechatronics-engineering/lab10.jpg',
        ],
    },

    {
        number: '09',
        semester: 'S7 MTR',
        title: 'Mechatronics Lab',
        icon: BookOpen,
        description: [
            'To provide hands on experience on the working of hydraulic and pneumatic controls, speed control and PLC controllers and also helps the students to impart knowledge on programming of robots.',
        ],
        images: [
            'https://ncerc.ac.in/images/dpt/mechatronics-engineering/lab11.jpg',
            'https://ncerc.ac.in/images/dpt/mechatronics-engineering/lab12.jpg',
        ],
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
                                Laboratories
                            </span>
                        </div>

                        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.45fr] lg:items-end">

                            {/* Heading */}
                            <div>
                                <div className="mb-5 flex items-center gap-4">
                                    <span className="h-px w-10 bg-[#D2B87C]" />

                                    <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                        Practical Learning
                                    </span>
                                </div>

                                <h1 className="max-w-4xl font-serif text-[3rem] font-medium leading-[1.02] tracking-[-0.035em] text-white sm:text-[4.4rem] lg:text-[5.3rem] xl:text-[5.8rem]">
                                    Laboratories
                                    <span className="block text-[#D2B87C]">
                                        & Practical Learning
                                    </span>
                                </h1>
                            </div>

                            {/* Description */}
                            <div className="lg:border-l lg:border-white/15 lg:pl-10">
                                <p className="max-w-sm text-sm leading-7 text-white/65 lg:ml-auto">
                                    Practical learning environments that help
                                    students translate engineering theory into
                                    experimentation, analysis, design and
                                    real-world applications.
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
                <section className="border-b border-[#20235A]/10 bg-white">
                    <div className="mx-auto max-w-[1400px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16">

                        <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">

                            {/* Label */}
                            <div>
                                <div className="flex items-center gap-4">
                                    <span className="h-px w-10 bg-[#D2B87C]" />

                                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                        Laboratory Facilities
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="max-w-4xl">

                                <h2 className="font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-[#20235A] sm:text-5xl lg:text-[3.7rem]">
                                    Learning through
                                    <span className="text-[#8F7746]">
                                        {' '}experimentation.
                                    </span>
                                </h2>

                                <p className="mt-7 max-w-3xl text-[15px] leading-8 text-[#1E1917]/70 sm:text-base sm:leading-[1.95]">
                                    The Department of Mechatronics Engineering
                                    provides a comprehensive range of
                                    laboratories that support students
                                    throughout their academic journey. These
                                    facilities offer opportunities to work with
                                    electrical machines, electronic circuits,
                                    fluid systems, digital electronics,
                                    microcontrollers, PLCs, manufacturing
                                    systems, instrumentation and integrated
                                    mechatronic technologies.
                                </p>

                                <p className="mt-5 max-w-3xl text-[15px] leading-8 text-[#1E1917]/70 sm:text-base sm:leading-[1.95]">
                                    Through practical sessions, project work,
                                    experimentation and research-oriented
                                    activities, students develop the technical
                                    understanding and hands-on skills required
                                    to approach complex engineering problems
                                    with confidence.
                                </p>

                            </div>

                        </div>
                    </div>
                </section>

                {/* =====================================================
                    LABORATORY DIRECTORY
                ====================================================== */}
                <section className="bg-[#FAF7F2] py-20 sm:py-24 lg:py-32">
                    <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16">

                        {/* Section Header */}
                        <div className="mb-14 grid gap-8 lg:mb-20 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">

                            <div>
                                <div className="flex items-center gap-4">
                                    <span className="h-px w-10 bg-[#D2B87C]" />

                                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                        Laboratory Directory
                                    </span>
                                </div>

                                <h2 className="mt-5 max-w-md font-serif text-4xl leading-[1.1] text-[#20235A] sm:text-5xl">
                                    Spaces designed for
                                    engineering practice.
                                </h2>
                            </div>

                            <div className="max-w-2xl lg:ml-auto lg:pt-8">
                                <p className="text-[15px] leading-8 text-[#1E1917]/65 sm:text-base sm:leading-[1.95]">
                                    Explore the laboratories available across
                                    the different semesters of the Mechatronics
                                    Engineering programme and discover the
                                    practical learning opportunities they offer.
                                </p>
                            </div>

                        </div>

                        {/* =================================================
                            LABORATORY ITEMS
                        ================================================== */}
                        <div className="space-y-20 sm:space-y-24 lg:space-y-32">

                            {laboratories.map((lab, index) => {
                                const Icon = lab.icon
                                const isReversed = index % 2 !== 0

                                return (
                                    <article
                                        key={lab.number}
                                        className="group"
                                    >

                                        <div
                                            className={`grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16 xl:gap-20 ${isReversed
                                                ? 'lg:[&>*:first-child]:order-2'
                                                : ''
                                                }`}
                                        >

                                            {/* =================================================
                                                IMAGE AREA
                                            ================================================= */}
                                            <div className="relative">

                                                {/* Number */}
                                                <div className="absolute -top-5 left-0 z-10 flex h-12 w-12 items-center justify-center border border-[#D2B87C] bg-[#FAF7F2]">
                                                    <span className="font-serif text-lg text-[#20235A]">
                                                        {lab.number}
                                                    </span>
                                                </div>

                                                {lab.images.length === 1 ? (
                                                    <div className="overflow-hidden bg-[#F2EFE8]">
                                                        <Image
                                                            src={lab.images[0]}
                                                            alt={`${lab.title} - Mechatronics Engineering`}
                                                            fill
                                                            sizes="(min-width: 1024px) 330px, 100vw"
                                                            className="aspect-[16/10] h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                                                        />
                                                    </div>
                                                ) : (
                                                    <div className="grid grid-cols-2 gap-3">
                                                        {lab.images.map(
                                                            (
                                                                image,
                                                                imageIndex
                                                            ) => (
                                                                <div
                                                                    key={image}
                                                                    className={`overflow-hidden bg-[#F2EFE8] ${imageIndex ===
                                                                        0
                                                                        ? 'aspect-[4/5]'
                                                                        : 'mt-8 aspect-[4/5]'
                                                                        }`}
                                                                >
                                                                    <Image
                                                                        src={
                                                                            image
                                                                        }
                                                                        alt={`${lab.title} ${imageIndex + 1}`}
                                                                        fill
                                                                        sizes="(min-width: 1024px) 330px, 100vw"
                                                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                                                                    />
                                                                </div>
                                                            )
                                                        )}
                                                    </div>
                                                )}

                                                {/* Image Caption */}
                                                <div className="mt-4 flex items-center justify-between border-t border-[#20235A]/10 pt-4">

                                                    <div className="flex items-center gap-3">
                                                        <Icon
                                                            size={17}
                                                            strokeWidth={1.4}
                                                            className="text-[#8F7746]"
                                                        />

                                                        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1E1917]/45">
                                                            Mechatronics
                                                            Laboratory
                                                        </span>
                                                    </div>

                                                    <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8F7746]">
                                                        {lab.semester}
                                                    </span>

                                                </div>

                                            </div>

                                            {/* =================================================
                                                CONTENT AREA
                                            ================================================= */}
                                            <div className="max-w-2xl">

                                                {/* Semester */}
                                                <div className="flex items-center gap-4">
                                                    <span className="h-px w-8 bg-[#D2B87C]" />

                                                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                                        {lab.semester}
                                                    </span>
                                                </div>

                                                {/* Title */}
                                                <h3 className="mt-5 font-serif text-3xl leading-[1.08] tracking-[-0.02em] text-[#20235A] sm:text-4xl lg:text-[2.7rem]">
                                                    {lab.title}
                                                </h3>

                                                {/* Description */}
                                                <div className="mt-6 space-y-5 text-[15px] leading-8 text-[#1E1917]/70 sm:text-base sm:leading-[1.9]">
                                                    {lab.description.map(
                                                        (
                                                            paragraph,
                                                            paragraphIndex
                                                        ) => (
                                                            <p
                                                                key={
                                                                    paragraphIndex
                                                                }
                                                            >
                                                                {paragraph}
                                                            </p>
                                                        )
                                                    )}
                                                </div>

                                                {/* Learning Outcomes */}
                                                {lab.outcomes && (
                                                    <div className="mt-8 border-t border-[#20235A]/10 pt-7">

                                                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                                            Students will be
                                                            able to
                                                        </p>

                                                        <div className="mt-4 space-y-4">
                                                            {lab.outcomes.map(
                                                                (
                                                                    outcome,
                                                                    outcomeIndex
                                                                ) => (
                                                                    <div
                                                                        key={
                                                                            outcomeIndex
                                                                        }
                                                                        className="flex gap-4"
                                                                    >
                                                                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D2B87C]" />

                                                                        <p className="text-sm leading-7 text-[#1E1917]/65 sm:text-[15px]">
                                                                            {
                                                                                outcome
                                                                            }
                                                                        </p>
                                                                    </div>
                                                                )
                                                            )}
                                                        </div>

                                                    </div>
                                                )}

                                                {/* Bottom Meta */}
                                                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[#20235A]/10 pt-6">

                                                    <div className="flex items-center gap-3">
                                                        <span className="font-serif text-xl text-[#D2B87C]">
                                                            {lab.number}
                                                        </span>

                                                        <span className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[#1E1917]/45">
                                                            Laboratory
                                                        </span>
                                                    </div>

                                                    <span className="hidden h-4 w-px bg-[#20235A]/15 sm:block" />

                                                    <span className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[#1E1917]/45">
                                                        {lab.semester}
                                                    </span>

                                                </div>

                                            </div>

                                        </div>
                                    </article>
                                )
                            })}

                        </div>
                    </div>
                </section>

                {/* =====================================================
                    PRACTICAL LEARNING SECTION
                ====================================================== */}
                <section className="border-t border-[#20235A]/10 bg-white">
                    <div className="mx-auto max-w-[1400px] px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16">

                        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">

                            {/* Heading */}
                            <div>

                                <div className="flex items-center gap-4">
                                    <span className="h-px w-10 bg-[#D2B87C]" />

                                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                        Hands-on Learning
                                    </span>
                                </div>

                                <h2 className="mt-5 max-w-md font-serif text-4xl leading-[1.1] text-[#20235A] sm:text-5xl">
                                    Engineering knowledge,
                                    experienced in practice.
                                </h2>

                            </div>

                            {/* Content */}
                            <div className="max-w-3xl lg:ml-auto">

                                <p className="text-[15px] leading-8 text-[#1E1917]/70 sm:text-base sm:leading-[1.95]">
                                    Practical laboratory work forms an
                                    important part of Mechatronics Engineering
                                    education. By working directly with
                                    machines, circuits, controllers,
                                    measurement systems and manufacturing
                                    equipment, students gain a deeper
                                    understanding of engineering principles and
                                    their real-world applications.
                                </p>

                                <div className="mt-10 grid border-t border-[#20235A]/10 sm:grid-cols-3">

                                    <div className="border-b border-[#20235A]/10 py-6 sm:border-b-0 sm:border-r sm:pr-8">
                                        <p className="font-serif text-3xl text-[#20235A]">
                                            09
                                        </p>

                                        <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                                            Laboratories
                                        </p>
                                    </div>

                                    <div className="border-b border-[#20235A]/10 py-6 sm:border-b-0 sm:border-r sm:px-8">
                                        <p className="font-serif text-3xl text-[#20235A]">
                                            S3–S7
                                        </p>

                                        <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                                            Academic Levels
                                        </p>
                                    </div>

                                    <div className="py-6 sm:pl-8">
                                        <p className="font-serif text-3xl text-[#20235A]">
                                            01
                                        </p>

                                        <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                                            Practical Focus
                                        </p>
                                    </div>

                                </div>

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
                                    Discover the spaces where
                                    <span className="text-[#D2B87C]">
                                        {' '}engineering comes alive.
                                    </span>
                                </h2>

                                <p className="mt-6 max-w-2xl text-base leading-8 text-white/60">
                                    Explore the department&apos;s laboratories
                                    and discover the practical learning
                                    opportunities available to Mechatronics
                                    Engineering students.
                                </p>

                            </div>

                            <a
                                href="/mechatronics-engineering/facilities.php"
                                className="group inline-flex shrink-0 items-center gap-4 self-start border border-[#D2B87C]/50 px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:border-[#D2B87C] hover:bg-[#D2B87C] hover:text-[#20235A] lg:self-end"
                            >
                                All Facilities

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