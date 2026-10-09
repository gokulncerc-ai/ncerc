import SiteHeader from '@/components/header/SiteHeader'
import FooterSection from '@/components/home/FooterSection'
import DepartmentNavigation from '../../DepartmentsNavigation/page'
import React from 'react'
import {
    ArrowRight,
    MonitorPlay,
    Presentation,
    Video,
    Wifi,
    Zap,
} from 'lucide-react'

const smartRoomFeatures = [
    {
        icon: MonitorPlay,
        title: 'Smart Boards',
        description:
            'Fully functional smart boards provide an interactive and technology-enabled environment for classroom teaching and learning.',
    },
    {
        icon: Wifi,
        title: '64 Mbps Internet',
        description:
            'High-speed internet connectivity supports digital teaching, online resources and technology-assisted learning.',
    },
    {
        icon: Video,
        title: 'HD Video Recording',
        description:
            'The Mechatronics Engineering smart room is equipped with BenQ smart boards capable of high-definition video recording.',
    },
    {
        icon: Presentation,
        title: 'Digital Learning',
        description:
            'Modern presentation and multimedia facilities help faculty deliver engaging and effective academic sessions.',
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
                        <div className="mb-10 flex flex-wrap items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-white/45 sm:mb-14">
                            <span>Mechatronics Engineering</span>
                            <span className="text-[#D2B87C]">/</span>
                            <span className="text-white/75">
                                Smart Rooms
                            </span>
                        </div>

                        <div className="max-w-5xl">
                            <div className="mb-7 flex items-center gap-4">
                                <span className="h-px w-10 bg-[#D2B87C]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                    Digital Learning Environment
                                </span>
                            </div>

                            <h1 className="font-serif text-[3rem] font-medium leading-[1.02] tracking-[-0.035em] text-white sm:text-[4.4rem] lg:text-[5.3rem] xl:text-[5.8rem]">
                                Smart Rooms
                                <span className="block text-[#D2B87C]">
                                    Learning, Reimagined
                                </span>
                            </h1>

                            <p className="mt-8 max-w-2xl text-sm leading-7 text-white/65 sm:mt-10 sm:text-base sm:leading-8">
                                Technology-enabled classrooms designed to
                                create an interactive, connected and engaging
                                academic experience for Mechatronics
                                Engineering students.
                            </p>
                        </div>
                    </div>
                </section>

                {/* =========================================================
                    DEPARTMENT NAVIGATION
                ========================================================= */}
                <DepartmentNavigation />

                {/* =========================================================
                    INFORMATION STRIP
                ========================================================= */}
                <section className="border-b border-[#20235A]/10 bg-white">
                    <div className="mx-auto grid max-w-[1400px] divide-y divide-[#20235A]/10 px-6 sm:grid-cols-2 sm:divide-x sm:divide-y-0 sm:px-8 lg:grid-cols-4 lg:px-12 xl:px-16">
                        <div className="px-0 py-7 sm:px-6 lg:py-8 lg:pl-0">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                Smart Classrooms
                            </p>

                            <p className="mt-2 font-serif text-xl text-[#20235A]">
                                06 Nos.
                            </p>
                        </div>

                        <div className="px-0 py-7 sm:px-6 lg:py-8">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                Connectivity
                            </p>

                            <p className="mt-2 font-serif text-xl text-[#20235A]">
                                64 Mbps
                            </p>
                        </div>

                        <div className="px-0 py-7 sm:px-6 lg:py-8">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                Smart Technology
                            </p>

                            <p className="mt-2 font-serif text-xl text-[#20235A]">
                                BenQ Smart Boards
                            </p>
                        </div>

                        <div className="px-0 py-7 sm:px-6 lg:py-8 lg:pr-0">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                Recording
                            </p>

                            <p className="mt-2 font-serif text-xl text-[#20235A]">
                                HD Video
                            </p>
                        </div>
                    </div>
                </section>

                {/* =========================================================
                    INTRODUCTION
                ========================================================= */}
                <section className="bg-white py-20 sm:py-24 lg:py-32">
                    <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16">
                        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20 xl:gap-28">
                            <div>
                                <div className="flex items-center gap-4">
                                    <span className="h-px w-10 bg-[#D2B87C]" />

                                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                        Smart Classroom Infrastructure
                                    </span>
                                </div>

                                <h2 className="mt-6 max-w-xl font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-[#20235A] sm:text-5xl lg:text-[3.7rem]">
                                    Where technology
                                    <span className="block text-[#8F7746]">
                                        meets teaching.
                                    </span>
                                </h2>
                            </div>

                            <div className="space-y-8 text-[15px] leading-8 text-[#1E1917]/70 sm:text-base sm:leading-[1.95]">
                                <p>
                                    NCERC is equipped with 6 Smart Classrooms
                                    that are well furnished with fully
                                    functional smart boards, 64 Mbps internet
                                    facility, personal address systems and
                                    other modern academic facilities.
                                </p>

                                <p>
                                    These technology-enabled learning spaces
                                    provide an enhanced environment for
                                    interactive teaching, digital
                                    presentations and access to online
                                    academic resources.
                                </p>

                                <p>
                                    The Mechatronics Engineering programme has
                                    a well-equipped and furnished smart room
                                    facility with high-definition video
                                    recording capable BenQ smart boards,
                                    enabling a more connected and engaging
                                    learning experience.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================
                    MAIN SMART ROOM FEATURE
                ========================================================= */}
                <section className="bg-[#FAF7F2] py-20 sm:py-24 lg:py-32">
                    <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16">
                        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16 xl:gap-24">
                            {/* Image */}
                            <div className="relative">
                                <div className="absolute -left-3 -top-3 z-10 flex h-14 w-14 items-center justify-center border border-[#D2B87C] bg-[#FAF7F2] sm:-left-4 sm:-top-4 sm:h-16 sm:w-16">
                                    <span className="font-serif text-xl text-[#8F7746]">
                                        01
                                    </span>
                                </div>

                                <div className="overflow-hidden">
                                    <img
                                        src="https://ncerc.ac.in/images/dpt/mechatronics-engineering/SMART-ROOMS.jpg"
                                        alt="NCERC Smart Room"
                                        className="aspect-[16/10] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                                    />
                                </div>

                                <div className="mt-4 flex items-center justify-between border-b border-[#20235A]/10 pb-4">
                                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                        Mechatronics Engineering
                                    </span>

                                    <span className="text-[11px] text-[#1E1917]/45">
                                        Smart Learning Environment
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div>
                                <div className="flex items-center gap-4">
                                    <span className="h-px w-10 bg-[#D2B87C]" />

                                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                        Mechatronics Smart Room
                                    </span>
                                </div>

                                <h2 className="mt-6 font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-[#20235A] sm:text-5xl lg:text-[3.7rem]">
                                    A classroom built
                                    <span className="block text-[#8F7746]">
                                        for the digital age.
                                    </span>
                                </h2>

                                <p className="mt-7 text-[15px] leading-8 text-[#1E1917]/70 sm:text-base sm:leading-[1.9]">
                                    The smart room combines modern classroom
                                    infrastructure with digital teaching
                                    technologies, allowing faculty to
                                    integrate multimedia content, online
                                    resources and interactive teaching methods
                                    into everyday academic sessions.
                                </p>

                                <div className="mt-8 border-t border-[#20235A]/10 pt-7">
                                    <div className="flex items-start gap-4">
                                        <MonitorPlay className="mt-1 h-5 w-5 shrink-0 text-[#8F7746]" />

                                        <div>
                                            <p className="font-serif text-xl text-[#20235A]">
                                                BenQ Smart Board
                                            </p>

                                            <p className="mt-2 text-sm leading-7 text-[#1E1917]/60">
                                                High-definition video recording
                                                capability supports modern
                                                digital teaching and academic
                                                content creation.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================
                    FEATURES
                ========================================================= */}
                <section className="bg-white py-20 sm:py-24 lg:py-32">
                    <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16">
                        <div className="max-w-3xl">
                            <div className="flex items-center gap-4">
                                <span className="h-px w-10 bg-[#D2B87C]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                    Technology & Facilities
                                </span>
                            </div>

                            <h2 className="mt-6 font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-[#20235A] sm:text-5xl lg:text-[3.7rem]">
                                Technology that enhances
                                <span className="block">
                                    the learning experience.
                                </span>
                            </h2>

                            <p className="mt-7 text-[15px] leading-8 text-[#1E1917]/70 sm:text-base sm:leading-[1.9]">
                                Smart classrooms provide faculty and students
                                with the digital infrastructure required for
                                an engaging and contemporary approach to
                                engineering education.
                            </p>
                        </div>

                        <div className="mt-14 grid gap-px overflow-hidden border border-[#20235A]/10 bg-[#20235A]/10 sm:grid-cols-2 lg:grid-cols-4">
                            {smartRoomFeatures.map((feature) => {
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
                    </div>
                </section>

                {/* =========================================================
                    DIGITAL LEARNING
                ========================================================= */}
                <section className="bg-[#FAF7F2] py-20 sm:py-24 lg:py-32">
                    <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16">
                        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20 xl:gap-28">
                            <div>
                                <div className="flex items-center gap-4">
                                    <span className="h-px w-10 bg-[#D2B87C]" />

                                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                        Digital Teaching
                                    </span>
                                </div>

                                <h2 className="mt-6 font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-[#20235A] sm:text-5xl lg:text-[3.7rem]">
                                    A connected approach
                                    <span className="block">
                                        to engineering education.
                                    </span>
                                </h2>
                            </div>

                            <div className="space-y-8 text-[15px] leading-8 text-[#1E1917]/70 sm:text-base sm:leading-[1.95]">
                                <p>
                                    Smart classrooms allow conventional
                                    classroom teaching to be enhanced through
                                    multimedia presentations, digital
                                    resources and interactive academic
                                    content.
                                </p>

                                <p>
                                    High-speed internet connectivity helps
                                    faculty and students access online
                                    resources during academic sessions,
                                    supporting a more connected learning
                                    experience.
                                </p>

                                <p>
                                    The high-definition video recording
                                    capability of the BenQ smart boards also
                                    creates opportunities for recording and
                                    sharing academic content, presentations
                                    and learning sessions.
                                </p>

                                <div className="grid gap-5 border-t border-[#20235A]/10 pt-7 sm:grid-cols-3">
                                    <div>
                                        <p className="font-serif text-2xl text-[#20235A]">
                                            06
                                        </p>

                                        <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                                            Smart Classrooms
                                        </p>
                                    </div>

                                    <div>
                                        <p className="font-serif text-2xl text-[#20235A]">
                                            64 Mbps
                                        </p>

                                        <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                                            Internet Facility
                                        </p>
                                    </div>

                                    <div>
                                        <p className="font-serif text-2xl text-[#20235A]">
                                            HD
                                        </p>

                                        <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                                            Video Recording
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
                <section className="bg-[#20235A]">
                    <div className="mx-auto max-w-[1400px] px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16">
                        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
                            <div className="max-w-3xl">
                                <div className="flex items-center gap-4">
                                    <span className="h-px w-10 bg-[#D2B87C]" />

                                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                                        Mechatronics Engineering
                                    </span>
                                </div>

                                <h2 className="mt-6 font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-white sm:text-5xl lg:text-6xl">
                                    Learning that moves
                                    <span className="block text-[#D2B87C]">
                                        with technology.
                                    </span>
                                </h2>

                                <p className="mt-7 max-w-2xl text-base leading-8 text-white/60">
                                    Smart learning spaces at NCERC bring
                                    connectivity, digital tools and modern
                                    teaching technologies together to create a
                                    more engaging academic environment.
                                </p>
                            </div>

                            <a
                                href="/mechatronics-engineering/facilities.php"
                                className="group inline-flex w-fit items-center gap-4 border border-[#D2B87C]/50 px-6 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:border-[#D2B87C] hover:bg-[#D2B87C] hover:text-[#20235A]"
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