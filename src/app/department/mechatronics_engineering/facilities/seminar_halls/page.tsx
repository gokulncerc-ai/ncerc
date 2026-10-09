import SiteHeader from '@/components/header/SiteHeader'
import FooterSection from '@/components/home/FooterSection'
import DepartmentNavigation from '../../DepartmentsNavigation/page'
import React from 'react'
import {
    ArrowRight,
    CalendarDays,
    MonitorPlay,
    Presentation,
    Wifi,
} from 'lucide-react'

const seminarHalls = [
    {
        number: '01',
        image:
            'https://ncerc.ac.in/images/dpt/mechatronics-engineering/seminarhall/IMG_20220409_104430.jpg',
        title: 'Seminar Hall',
        description:
            'A well-equipped academic space designed to support conferences, seminars, presentations, workshops and other institutional activities.',
    },
    {
        number: '02',
        image:
            'https://ncerc.ac.in/images/dpt/mechatronics-engineering/seminarhall/IMG_20220409_104442.jpg',
        title: 'Conference & Presentation Space',
        description:
            'The seminar facilities provide a professional environment for knowledge sharing, academic interaction and events involving students, faculty and external participants.',
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
                                Seminar Halls
                            </span>
                        </div>

                        {/* Hero Content */}
                        <div className="max-w-5xl">
                            <div className="mb-7 flex items-center gap-4">
                                <span className="h-px w-10 bg-[#D2B87C]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                    Academic Infrastructure
                                </span>
                            </div>

                            <h1 className="font-serif text-[3rem] font-medium leading-[1.02] tracking-[-0.035em] text-white sm:text-[4.4rem] lg:text-[5.3rem] xl:text-[5.8rem]">
                                Seminar Halls
                                <span className="block text-[#D2B87C]">
                                    Ideas in Motion
                                </span>
                            </h1>

                            <p className="mt-8 max-w-2xl text-sm leading-7 text-white/65 sm:mt-10 sm:text-base sm:leading-8">
                                Professional spaces equipped to support
                                conferences, seminars, presentations, workshops
                                and academic activities that extend learning
                                beyond the classroom.
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
                        <div className="px-0 py-7 sm:px-6 lg:py-8 lg:first:pl-0">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                Seminar Halls
                            </p>

                            <p className="mt-2 font-serif text-xl text-[#20235A]">
                                06 Nos.
                            </p>
                        </div>

                        <div className="px-0 py-7 sm:px-6 lg:py-8">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                Internet
                            </p>

                            <p className="mt-2 font-serif text-xl text-[#20235A]">
                                150 Mbps
                            </p>
                        </div>

                        <div className="px-0 py-7 sm:px-6 lg:py-8">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                Connectivity
                            </p>

                            <p className="mt-2 font-serif text-xl text-[#20235A]">
                                Wi-Fi Enabled
                            </p>
                        </div>

                        <div className="px-0 py-7 sm:px-6 lg:py-8 lg:last:pr-0">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                Facilities
                            </p>

                            <p className="mt-2 font-serif text-xl text-[#20235A]">
                                AV + PA System
                            </p>
                        </div>
                    </div>
                </section>

                {/* =========================================================
                    INTRODUCTION
                ========================================================= */}
                <section className="bg-white py-20 sm:py-24 lg:py-32">
                    <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16">
                        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 xl:gap-28">
                            {/* Heading */}
                            <div>
                                <div className="flex items-center gap-4">
                                    <span className="h-px w-10 bg-[#D2B87C]" />

                                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                        Seminar Infrastructure
                                    </span>
                                </div>

                                <h2 className="mt-6 max-w-xl font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-[#20235A] sm:text-5xl lg:text-[3.7rem]">
                                    Spaces for
                                    <span className="block text-[#8F7746]">
                                        meaningful exchange.
                                    </span>
                                </h2>
                            </div>

                            {/* Content */}
                            <div className="space-y-8 text-[15px] leading-8 text-[#1E1917]/70 sm:text-base sm:leading-[1.95]">
                                <p>
                                    The Institute has sufficient seminar halls
                                    to support a wide range of academic,
                                    professional and institutional activities.
                                    These spaces are designed to provide an
                                    effective environment for knowledge sharing,
                                    interaction and presentation.
                                </p>

                                <p>
                                    The seminar halls are equipped with
                                    internet connectivity including Wi-Fi,
                                    public address systems, projectors and
                                    other essential facilities required for
                                    conducting International and National
                                    conferences, seminars and related
                                    activities.
                                </p>

                                <p>
                                    These infrastructure facilities are
                                    provided with a vision to help students
                                    strengthen their academic exposure,
                                    communication abilities and career
                                    progression skills.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================
                    FACILITY HIGHLIGHTS
                ========================================================= */}
                <section className="bg-[#FAF7F2] py-20 sm:py-24 lg:py-32">
                    <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16">
                        <div className="max-w-3xl">
                            <div className="flex items-center gap-4">
                                <span className="h-px w-10 bg-[#D2B87C]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                    Equipped for Engagement
                                </span>
                            </div>

                            <h2 className="mt-6 font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-[#20235A] sm:text-5xl lg:text-[3.7rem]">
                                Everything needed for
                                <span className="block">
                                    impactful events.
                                </span>
                            </h2>

                            <p className="mt-7 text-[15px] leading-8 text-[#1E1917]/70 sm:text-base sm:leading-[1.9]">
                                From digital presentations to large-scale
                                academic events, the seminar halls provide the
                                essential infrastructure required to create a
                                seamless and professional experience.
                            </p>
                        </div>

                        {/* Feature Grid */}
                        <div className="mt-14 grid gap-px overflow-hidden border border-[#20235A]/10 bg-[#20235A]/10 sm:grid-cols-2 lg:grid-cols-4">
                            <div className="bg-white p-7 sm:p-8">
                                <Wifi className="h-6 w-6 text-[#8F7746]" />

                                <h3 className="mt-7 font-serif text-2xl text-[#20235A]">
                                    150 Mbps
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-[#1E1917]/65">
                                    High-speed internet connectivity with Wi-Fi
                                    supports modern academic and professional
                                    events.
                                </p>
                            </div>

                            <div className="bg-white p-7 sm:p-8">
                                <MonitorPlay className="h-6 w-6 text-[#8F7746]" />

                                <h3 className="mt-7 font-serif text-2xl text-[#20235A]">
                                    Projector
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-[#1E1917]/65">
                                    Presentation facilities support lectures,
                                    seminars, conferences and multimedia
                                    sessions.
                                </p>
                            </div>

                            <div className="bg-white p-7 sm:p-8">
                                <Presentation className="h-6 w-6 text-[#8F7746]" />

                                <h3 className="mt-7 font-serif text-2xl text-[#20235A]">
                                    PA System
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-[#1E1917]/65">
                                    Public address facilities support clear
                                    communication during presentations and
                                    institutional events.
                                </p>
                            </div>

                            <div className="bg-white p-7 sm:p-8">
                                <CalendarDays className="h-6 w-6 text-[#8F7746]" />

                                <h3 className="mt-7 font-serif text-2xl text-[#20235A]">
                                    Events
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-[#1E1917]/65">
                                    Suitable spaces for conferences, seminars,
                                    workshops and other academic activities.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================
                    SEMINAR HALL GALLERY
                ========================================================= */}
                <section className="bg-[#FAF7F2] pb-20 sm:pb-24 lg:pb-32">
                    <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16">
                        <div className="mb-14 flex flex-col justify-between gap-8 sm:mb-16 lg:flex-row lg:items-end">
                            <div className="max-w-3xl">
                                <div className="flex items-center gap-4">
                                    <span className="h-px w-10 bg-[#D2B87C]" />

                                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                        Campus Spaces
                                    </span>
                                </div>

                                <h2 className="mt-6 font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-[#20235A] sm:text-5xl lg:text-[3.7rem]">
                                    Seminar spaces built
                                    <span className="block text-[#8F7746]">
                                        for connection.
                                    </span>
                                </h2>
                            </div>

                            <p className="max-w-md text-sm leading-7 text-[#1E1917]/60 sm:text-base">
                                Flexible academic environments that bring
                                students, faculty, experts and institutions
                                together for meaningful exchange.
                            </p>
                        </div>

                        {/* Gallery */}
                        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
                            {seminarHalls.map((hall, index) => (
                                <article key={hall.number}>
                                    <div className="relative">
                                        {/* Number */}
                                        <div className="absolute -left-3 -top-3 z-10 flex h-14 w-14 items-center justify-center border border-[#D2B87C] bg-[#FAF7F2] sm:-left-4 sm:-top-4 sm:h-16 sm:w-16">
                                            <span className="font-serif text-xl text-[#8F7746]">
                                                {hall.number}
                                            </span>
                                        </div>

                                        {/* Image */}
                                        <div className="overflow-hidden">
                                            <img
                                                src={hall.image}
                                                alt={hall.title}
                                                className="aspect-[16/10] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                                            />
                                        </div>

                                        {/* Caption */}
                                        <div className="mt-5 border-b border-[#20235A]/10 pb-5">
                                            <div className="flex items-center justify-between gap-4">
                                                <div>
                                                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                                        Seminar Hall
                                                    </p>

                                                    <h3 className="mt-2 font-serif text-2xl text-[#20235A] sm:text-3xl">
                                                        {hall.title}
                                                    </h3>
                                                </div>

                                                <ArrowRight className="h-5 w-5 shrink-0 text-[#8F7746]" />
                                            </div>

                                            <p className="mt-4 max-w-xl text-sm leading-7 text-[#1E1917]/60 sm:text-base">
                                                {hall.description}
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* =========================================================
                    EVENT ENVIRONMENT
                ========================================================= */}
                <section className="bg-white py-20 sm:py-24 lg:py-32">
                    <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16">
                        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20 xl:gap-28">
                            <div>
                                <div className="flex items-center gap-4">
                                    <span className="h-px w-10 bg-[#D2B87C]" />

                                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                        Beyond the Classroom
                                    </span>
                                </div>

                                <h2 className="mt-6 font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-[#20235A] sm:text-5xl lg:text-[3.7rem]">
                                    An environment where
                                    <span className="block">
                                        ideas take shape.
                                    </span>
                                </h2>
                            </div>

                            <div className="space-y-8 text-[15px] leading-8 text-[#1E1917]/70 sm:text-base sm:leading-[1.95]">
                                <p>
                                    Seminar halls play an important role in
                                    extending academic learning beyond regular
                                    classroom teaching. They create
                                    opportunities for students to engage with
                                    experts, participate in conferences and
                                    present their ideas in a professional
                                    environment.
                                </p>

                                <p>
                                    The available infrastructure enables NCERC
                                    to conduct International and National
                                    conferences, seminars and other academic
                                    and institutional activities with the
                                    required technological and communication
                                    facilities.
                                </p>

                                <div className="grid gap-6 border-t border-[#20235A]/10 pt-7 sm:grid-cols-3">
                                    <div>
                                        <p className="font-serif text-2xl text-[#20235A]">
                                            06
                                        </p>

                                        <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                                            Seminar Halls
                                        </p>
                                    </div>

                                    <div>
                                        <p className="font-serif text-2xl text-[#20235A]">
                                            150
                                        </p>

                                        <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                                            Mbps Internet
                                        </p>
                                    </div>

                                    <div>
                                        <p className="font-serif text-2xl text-[#20235A]">
                                            Wi-Fi
                                        </p>

                                        <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                                            Connected Spaces
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
                                    Spaces that bring
                                    <span className="block text-[#D2B87C]">
                                        ideas together.
                                    </span>
                                </h2>

                                <p className="mt-7 max-w-2xl text-base leading-8 text-white/60">
                                    Well-equipped seminar facilities provide
                                    the setting for academic interaction,
                                    professional events, conferences and
                                    knowledge sharing.
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