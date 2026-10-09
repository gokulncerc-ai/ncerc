import SiteHeader from '@/components/header/SiteHeader'
import FooterSection from '@/components/home/FooterSection'
import DepartmentNavigation from '../DepartmentsNavigation/page'
import React from 'react'
import {
    ArrowUpRight,
    CalendarDays,
    Mic2,
    Presentation,
    Wrench,
} from 'lucide-react'

const activities = [
    {
        number: '01',
        category: 'Alumni Interaction',
        date: '29.09.2023',
        title: 'Alumni Interaction held at NCERC',
        description:
            'Talk on IMPACT OF AUTOMATION IN THE DEFENCE SECTOR by Mr. Ranjith Krishnan, Project Trainee in BOSCH, B.Tech, MTR (2018–22) Batch.',
        additional:
            'Organised by Students Association Dept. of Mechatronics Engineering.',
        image:
            'https://ncerc.ac.in/images/dpt/mechatronics-engineering/activities/alumni_interaction.png',
        icon: Mic2,
    },
    {
        number: '02',
        category: 'Association Inauguration',
        date: '20.10.2023',
        title: 'AZIMOS Association Inauguration',
        description:
            "On October 20, 2023, the Mechatronics department association AZIMOS was inaugurated. Mr. Pramod Menon, Director of HP Inc.'s Finance Analytics, AI, and Automation Division, was the main Guest.",
        additional:
            'All of the students found his AI lesson to be highly informative. The department also planned the association events throughout the 2023–24 Academic Year.',
        image:
            'https://ncerc.ac.in/images/dpt/mechatronics-engineering/activities/azimos.png',
        icon: Presentation,
        link: 'https://ncerc.ac.in/news/657',
    },
    {
        number: '03',
        category: 'Hands-on Workshop',
        date: 'Workshop',
        title: 'Prototype Development Using ARDUINO Microcontroller',
        description:
            'A 2 Days Hands on Workshop on Prototype development using ARDUINO Microcontroller, providing students with practical exposure to embedded systems and prototype development.',
        image:
            'https://ncerc.ac.in/images/dpt/mechatronics-engineering/activities/prototype_development_using_aeduino_microcontroller.png',
        icon: Wrench,
    },
    {
        number: '04',
        category: 'Hands-on Workshop',
        date: 'Workshop',
        title: 'Robot Operating System',
        description:
            'A 2 Days Hands on Workshop on Robot Operating System, giving students an opportunity to explore robotics software, automation concepts and practical robotic applications.',
        image:
            'https://ncerc.ac.in/images/dpt/mechatronics-engineering/activities/robot_operating_system.png',
        icon: Presentation,
        link: 'https://ncerc.ac.in/news/521',
    },
]

const page = () => {
    return (
        <>
            <SiteHeader />

            <main className="bg-[#FAF7F2] text-[#1E1917]">
                {/* HERO */}
                <section className="bg-[#20235A]">
                    <div className="mx-auto max-w-[1400px] px-6 pb-14 pt-20 sm:px-8 sm:pb-16 sm:pt-24 lg:px-12 lg:pb-20 lg:pt-28 xl:px-16">
                        <div className="mb-10 flex flex-wrap items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-white/45 sm:mb-14">
                            <span>Mechatronics Engineering</span>
                            <span className="text-[#D2B87C]">/</span>
                            <span className="text-white/75">Activities</span>
                        </div>

                        <div className="max-w-5xl">
                            <div className="mb-7 flex items-center gap-4">
                                <span className="h-px w-10 bg-[#D2B87C]" />
                                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                    Department Activities
                                </span>
                            </div>

                            <h1 className="font-serif text-[3rem] font-medium leading-[1.02] tracking-[-0.035em] text-white sm:text-[4.4rem] lg:text-[5.3rem] xl:text-[5.8rem]">
                                Activities
                                <span className="block text-[#D2B87C]">
                                    Beyond the Classroom
                                </span>
                            </h1>

                            <p className="mt-8 max-w-2xl text-sm leading-7 text-white/65 sm:mt-10 sm:text-base sm:leading-8">
                                A dynamic range of interactions, workshops,
                                association activities and hands-on learning
                                experiences that connect Mechatronics Engineering
                                students with industry, technology and the wider
                                professional community.
                            </p>
                        </div>
                    </div>
                </section>

                <DepartmentNavigation />

                {/* INTRO / STATS */}
                <section className="border-b border-[#20235A]/10 bg-white">
                    <div className="mx-auto grid max-w-[1400px] divide-y divide-[#20235A]/10 px-6 sm:grid-cols-2 sm:divide-x sm:divide-y-0 sm:px-8 lg:grid-cols-4 lg:px-12 xl:px-16">
                        <div className="px-0 py-7 sm:px-6 lg:py-8 lg:pl-0">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                Activities
                            </p>
                            <p className="mt-2 font-serif text-xl text-[#20235A]">
                                04 Featured
                            </p>
                        </div>

                        <div className="px-0 py-7 sm:px-6 lg:py-8">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                Learning
                            </p>
                            <p className="mt-2 font-serif text-xl text-[#20235A]">
                                Hands-on
                            </p>
                        </div>

                        <div className="px-0 py-7 sm:px-6 lg:py-8">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                Engagement
                            </p>
                            <p className="mt-2 font-serif text-xl text-[#20235A]">
                                Industry & Alumni
                            </p>
                        </div>

                        <div className="px-0 py-7 sm:px-6 lg:py-8 lg:pr-0">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                Focus
                            </p>
                            <p className="mt-2 font-serif text-xl text-[#20235A]">
                                Innovation
                            </p>
                        </div>
                    </div>
                </section>

                {/* INTRODUCTION */}
                <section className="bg-white py-20 sm:py-24 lg:py-32">
                    <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16">
                        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-20 xl:gap-28">
                            <div>
                                <div className="flex items-center gap-4">
                                    <span className="h-px w-10 bg-[#D2B87C]" />
                                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                        Learning Through Experience
                                    </span>
                                </div>

                                <h2 className="mt-6 max-w-xl font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-[#20235A] sm:text-5xl lg:text-[3.7rem]">
                                    Engineering education
                                    <span className="block text-[#8F7746]">
                                        in action.
                                    </span>
                                </h2>
                            </div>

                            <div className="space-y-8 text-[15px] leading-8 text-[#1E1917]/70 sm:text-base sm:leading-[1.95]">
                                <p>
                                    The Department of Mechatronics Engineering
                                    encourages students to learn beyond
                                    conventional classroom instruction through
                                    technical workshops, alumni interactions,
                                    association programmes and practical
                                    activities.
                                </p>

                                <p>
                                    These activities provide opportunities to
                                    interact with experienced professionals,
                                    understand emerging technologies and apply
                                    engineering concepts through practical
                                    learning.
                                </p>

                                <p>
                                    From automation and artificial intelligence
                                    to Arduino-based prototyping and robotics,
                                    department activities are designed to
                                    strengthen technical curiosity, teamwork,
                                    innovation and professional awareness.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ACTIVITIES */}
                <section className="bg-[#FAF7F2] py-20 sm:py-24 lg:py-32">
                    <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16">
                        <div className="max-w-3xl">
                            <div className="flex items-center gap-4">
                                <span className="h-px w-10 bg-[#D2B87C]" />
                                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                    Featured Activities
                                </span>
                            </div>

                            <h2 className="mt-6 font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-[#20235A] sm:text-5xl lg:text-[3.7rem]">
                                Experiences that
                                <span className="block">
                                    shape future engineers.
                                </span>
                            </h2>
                        </div>

                        <div className="mt-16 space-y-20 sm:mt-20 lg:space-y-28">
                            {activities.map((activity, index) => {
                                const Icon = activity.icon
                                const reversed = index % 2 !== 0

                                return (
                                    <article
                                        key={activity.number}
                                        className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16 xl:gap-24"
                                    >
                                        {/* IMAGE */}
                                        <div
                                            className={
                                                reversed
                                                    ? 'lg:order-2'
                                                    : 'lg:order-1'
                                            }
                                        >
                                            <div className="relative">
                                                <div className="absolute -left-3 -top-3 z-10 flex h-14 w-14 items-center justify-center border border-[#D2B87C] bg-[#FAF7F2] sm:-left-4 sm:-top-4 sm:h-16 sm:w-16">
                                                    <span className="font-serif text-xl text-[#8F7746]">
                                                        {activity.number}
                                                    </span>
                                                </div>

                                                <div className="overflow-hidden bg-[#EAE6DD]">
                                                    <img
                                                        src={activity.image}
                                                        alt={activity.title}
                                                        className="aspect-[16/10] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                                                    />
                                                </div>

                                                <div className="mt-4 flex items-center justify-between border-b border-[#20235A]/10 pb-4">
                                                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                                        {activity.category}
                                                    </span>

                                                    <span className="text-[11px] text-[#1E1917]/45">
                                                        Mechatronics Engineering
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* CONTENT */}
                                        <div
                                            className={
                                                reversed
                                                    ? 'lg:order-1'
                                                    : 'lg:order-2'
                                            }
                                        >
                                            <div className="flex items-center gap-4">
                                                <Icon className="h-5 w-5 text-[#8F7746]" />

                                                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                                    {activity.category}
                                                </span>
                                            </div>

                                            <h3 className="mt-6 font-serif text-3xl leading-[1.1] tracking-[-0.02em] text-[#20235A] sm:text-4xl lg:text-[3rem]">
                                                {activity.title}
                                            </h3>

                                            <div className="mt-5 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1E1917]/45">
                                                <CalendarDays className="h-4 w-4 text-[#8F7746]" />
                                                {activity.date}
                                            </div>

                                            <div className="mt-7 space-y-5 text-[15px] leading-8 text-[#1E1917]/70 sm:text-base sm:leading-[1.9]">
                                                <p>{activity.description}</p>

                                                {activity.additional && (
                                                    <p>
                                                        {activity.additional}
                                                    </p>
                                                )}
                                            </div>

                                            {activity.link && (
                                                <div className="mt-8">
                                                    <a
                                                        href={activity.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="group inline-flex items-center gap-3 border-b border-[#20235A]/20 pb-2 text-sm font-semibold text-[#20235A] transition-colors duration-300 hover:border-[#8F7746] hover:text-[#8F7746]"
                                                    >
                                                        View Details
                                                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                                    </a>
                                                </div>
                                            )}
                                        </div>
                                    </article>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* WORKSHOP HIGHLIGHT */}
                <section className="bg-white py-20 sm:py-24 lg:py-32">
                    <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16">
                        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-20 xl:gap-28">
                            <div>
                                <div className="flex items-center gap-4">
                                    <span className="h-px w-10 bg-[#D2B87C]" />

                                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                        Practical Exposure
                                    </span>
                                </div>

                                <h2 className="mt-6 font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-[#20235A] sm:text-5xl lg:text-[3.7rem]">
                                    From concepts
                                    <span className="block text-[#8F7746]">
                                        to working prototypes.
                                    </span>
                                </h2>

                                <p className="mt-7 max-w-xl text-[15px] leading-8 text-[#1E1917]/70 sm:text-base sm:leading-[1.9]">
                                    Hands-on workshops allow students to move
                                    from theoretical understanding to practical
                                    experimentation. Activities involving
                                    Arduino microcontrollers and Robot Operating
                                    System introduce students to technologies
                                    directly relevant to modern automation and
                                    robotics.
                                </p>
                            </div>

                            <div className="grid gap-px overflow-hidden border border-[#20235A]/10 bg-[#20235A]/10 sm:grid-cols-2">
                                <div className="bg-[#FAF7F2] p-8 sm:p-10">
                                    <Wrench className="h-6 w-6 text-[#8F7746]" />

                                    <p className="mt-8 font-serif text-3xl text-[#20235A]">
                                        ARDUINO
                                    </p>

                                    <p className="mt-4 text-sm leading-7 text-[#1E1917]/65">
                                        Prototype development and embedded
                                        systems experimentation through
                                        hands-on learning.
                                    </p>
                                </div>

                                <div className="bg-[#FAF7F2] p-8 sm:p-10">
                                    <Presentation className="h-6 w-6 text-[#8F7746]" />

                                    <p className="mt-8 font-serif text-3xl text-[#20235A]">
                                        ROS
                                    </p>

                                    <p className="mt-4 text-sm leading-7 text-[#1E1917]/65">
                                        Practical exposure to Robot Operating
                                        System concepts and robotics
                                        applications.
                                    </p>
                                </div>

                                <div className="bg-[#FAF7F2] p-8 sm:p-10">
                                    <Mic2 className="h-6 w-6 text-[#8F7746]" />

                                    <p className="mt-8 font-serif text-3xl text-[#20235A]">
                                        ALUMNI
                                    </p>

                                    <p className="mt-4 text-sm leading-7 text-[#1E1917]/65">
                                        Direct interaction with professionals
                                        helps students understand industry
                                        expectations and career opportunities.
                                    </p>
                                </div>

                                <div className="bg-[#FAF7F2] p-8 sm:p-10">
                                    <CalendarDays className="h-6 w-6 text-[#8F7746]" />

                                    <p className="mt-8 font-serif text-3xl text-[#20235A]">
                                        AZIMOS
                                    </p>

                                    <p className="mt-4 text-sm leading-7 text-[#1E1917]/65">
                                        Department association activities create
                                        a platform for technical interaction,
                                        leadership and student engagement.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CLOSING CTA */}
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
                                    Learn.
                                    <span className="block text-[#D2B87C]">
                                        Explore. Build.
                                    </span>
                                </h2>

                                <p className="mt-7 max-w-2xl text-base leading-8 text-white/60">
                                    Department activities at NCERC create
                                    opportunities for students to connect
                                    academic knowledge with technology,
                                    industry interaction and practical
                                    engineering experiences.
                                </p>
                            </div>

                            <a
                                href="/mechatronics-engineering"
                                className="group inline-flex w-fit items-center gap-4 border border-[#D2B87C]/50 px-6 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:border-[#D2B87C] hover:bg-[#D2B87C] hover:text-[#20235A]"
                            >
                                Explore Department
                                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
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