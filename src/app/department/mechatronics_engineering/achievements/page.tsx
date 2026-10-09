import SiteHeader from '@/components/header/SiteHeader'
import FooterSection from '@/components/home/FooterSection'
import DepartmentNavigation from '../DepartmentsNavigation/page'
import React from 'react'
import {
    ArrowUpRight,
    Award,
    BookOpen,
    Lightbulb,
    Medal,
    Rocket,
    Sparkles,
} from 'lucide-react'

const startupProjects = [
    {
        number: '01',
        image: 'https://ncerc.ac.in/content/img/seminar-mec/23.png',
        title: 'SOWAFIS',
        subtitle: 'Soap Water Filtration System',
        description:
            'Soap Water Filtration System (SOWAFIS) provides a unique way of filtration by clustering modern and traditional filtration processes in a reasonable low cost with easy implementation. The filtration methods help to recycle soapy waste water by removing contaminating elements and obtaining water with sufficient quality to be used to wash utensils, reuse swimming pool water and for irrigation purposes.',
        founders: 'Shahrooque Shahjahan, Midhun Headly Lawrance',
        company: 'Orbcrux',
        funding: '₹2.5 Lakhs',
    },
    {
        number: '02',
        image: 'https://ncerc.ac.in/content/img/seminar-mec/24.png',
        title: 'Automated Portable Vertical Solar Stacker',
        subtitle: 'APVSS',
        description:
            'Automated and Portable Vertical Solar Stacker (APVSS) is a mechanical design developed to increase space efficiency in installing solar panels. Solar energy has become an important source of renewable energy, while large areas of land are required for high-scale solar energy production. The system works on the principle of reflection by mirrors.',
        founders:
            'Anas Mohammed Ali, Mrudul Mohandas A, Rahul K R, Mohammed Asarudheen S',
        company: 'Furitech Innovations',
    },
    {
        number: '03',
        image: 'https://ncerc.ac.in/content/img/seminar-mec/25.png',
        title: 'Advanced PCB Printing Technology without Etching',
        subtitle: 'Sustainable PCB Manufacturing',
        description:
            'PCB is one of the base factors of electronics. Conventionally, PCBs are printed using marking and etching methods. This method is costly, causes pollution, takes more time to print a single piece and creates material wastage. This technology avoids the etching process and makes printing faster and cheaper, while reducing pollution and material wastage.',
        founders: 'Akshay M S, Suryakanth Shenoi R',
        company: 'Lewenholk Technologies',
    },
]

const achievementHighlights = [
    {
        icon: BookOpen,
        label: 'Publication',
        value: '01',
        title: 'Book Publication',
        description:
            'A book titled “DIGITAL ELECTRONICS” was published by Mechatronics faculty members Mr. Midhunraj P K and Ms. Neethu M along with ECE faculty Ms. Sajitha.',
    },
    {
        icon: Rocket,
        label: 'Innovation',
        value: '03',
        title: 'Startup Projects',
        description:
            'Student-led innovations have been developed into startup initiatives through the support of NGI New-Gen IEDC.',
    },
    {
        icon: Award,
        label: 'Recognition',
        value: '01',
        title: 'National Achievement',
        description:
            'Students have represented the department at national-level competitions and sporting championships.',
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
                            <span className="text-white/75">
                                Achievements
                            </span>
                        </div>

                        <div className="max-w-5xl">
                            <div className="mb-7 flex items-center gap-4">
                                <span className="h-px w-10 bg-[#D2B87C]" />
                                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                    Department Achievements
                                </span>
                            </div>

                            <h1 className="font-serif text-[3rem] font-medium leading-[1.02] tracking-[-0.035em] text-white sm:text-[4.4rem] lg:text-[5.3rem] xl:text-[5.8rem]">
                                Achievements
                                <span className="block text-[#D2B87C]">
                                    Ideas into Impact
                                </span>
                            </h1>

                            <p className="mt-8 max-w-2xl text-sm leading-7 text-white/65 sm:mt-10 sm:text-base sm:leading-8">
                                Celebrating academic contributions, student
                                innovations, entrepreneurship and achievements
                                that reflect the creative and technical spirit of
                                Mechatronics Engineering at NCERC.
                            </p>
                        </div>
                    </div>
                </section>

                <DepartmentNavigation />

                {/* STATS */}
                <section className="border-b border-[#20235A]/10 bg-white">
                    <div className="mx-auto grid max-w-[1400px] divide-y divide-[#20235A]/10 px-6 sm:grid-cols-2 sm:divide-x sm:divide-y-0 sm:px-8 lg:grid-cols-4 lg:px-12 xl:px-16">
                        <div className="px-0 py-7 sm:px-6 lg:py-8 lg:pl-0">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                Book Publication
                            </p>
                            <p className="mt-2 font-serif text-xl text-[#20235A]">
                                Digital Electronics
                            </p>
                        </div>

                        <div className="px-0 py-7 sm:px-6 lg:py-8">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                Startup Projects
                            </p>
                            <p className="mt-2 font-serif text-xl text-[#20235A]">
                                03 Innovations
                            </p>
                        </div>

                        <div className="px-0 py-7 sm:px-6 lg:py-8">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                Innovation Support
                            </p>
                            <p className="mt-2 font-serif text-xl text-[#20235A]">
                                New-Gen IEDC
                            </p>
                        </div>

                        <div className="px-0 py-7 sm:px-6 lg:py-8 lg:pr-0">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                National Achievement
                            </p>
                            <p className="mt-2 font-serif text-xl text-[#20235A]">
                                Gold Medal
                            </p>
                        </div>
                    </div>
                </section>

                {/* INTRO */}
                <section className="bg-white py-20 sm:py-24 lg:py-32">
                    <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16">
                        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-20 xl:gap-28">
                            <div>
                                <div className="flex items-center gap-4">
                                    <span className="h-px w-10 bg-[#D2B87C]" />
                                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                        A Culture of Achievement
                                    </span>
                                </div>

                                <h2 className="mt-6 max-w-xl font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-[#20235A] sm:text-5xl lg:text-[3.7rem]">
                                    Creating ideas that
                                    <span className="block text-[#8F7746]">
                                        make a difference.
                                    </span>
                                </h2>
                            </div>

                            <div className="space-y-8 text-[15px] leading-8 text-[#1E1917]/70 sm:text-base sm:leading-[1.95]">
                                <p>
                                    The Department of Mechatronics Engineering at
                                    NCERC encourages students and faculty to
                                    transform engineering knowledge into
                                    meaningful innovations, research outputs and
                                    entrepreneurial opportunities.
                                </p>

                                <p>
                                    From publishing technical knowledge to
                                    developing startup ideas under New-Gen IEDC,
                                    the department provides a platform where
                                    students can experiment, prototype and
                                    explore solutions to real-world problems.
                                </p>

                                <p>
                                    These achievements represent the department's
                                    commitment to innovation, practical learning,
                                    entrepreneurship and the overall development
                                    of its students.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* HIGHLIGHTS */}
                <section className="bg-[#FAF7F2] py-20 sm:py-24 lg:py-32">
                    <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16">
                        <div className="max-w-3xl">
                            <div className="flex items-center gap-4">
                                <span className="h-px w-10 bg-[#D2B87C]" />
                                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                    Achievement Highlights
                                </span>
                            </div>

                            <h2 className="mt-6 font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-[#20235A] sm:text-5xl lg:text-[3.7rem]">
                                Knowledge, innovation
                                <span className="block">
                                    and recognition.
                                </span>
                            </h2>
                        </div>

                        <div className="mt-14 grid gap-px overflow-hidden border border-[#20235A]/10 bg-[#20235A]/10 md:grid-cols-3">
                            {achievementHighlights.map((item) => {
                                const Icon = item.icon

                                return (
                                    <div
                                        key={item.title}
                                        className="bg-white p-8 sm:p-10 lg:p-12"
                                    >
                                        <div className="flex items-start justify-between">
                                            <Icon className="h-6 w-6 text-[#8F7746]" />

                                            <span className="font-serif text-4xl text-[#D2B87C]">
                                                {item.value}
                                            </span>
                                        </div>

                                        <p className="mt-10 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                            {item.label}
                                        </p>

                                        <h3 className="mt-3 font-serif text-2xl text-[#20235A]">
                                            {item.title}
                                        </h3>

                                        <p className="mt-4 text-sm leading-7 text-[#1E1917]/65">
                                            {item.description}
                                        </p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* BOOK PUBLICATION */}
                <section className="bg-white py-20 sm:py-24 lg:py-32">
                    <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16">
                        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-20 xl:gap-28">
                            <div className="relative overflow-hidden bg-[#EAE6DD]">
                                <img
                                    src="https://ncerc.ac.in/content/img/seminar-mec/digital_electronics.png"
                                    alt="Digital Electronics book published by Mechatronics faculty"
                                    className="aspect-[16/10] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                                />

                                <div className="absolute bottom-0 left-0 right-0 bg-[#20235A]/95 p-6 sm:p-8">
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                        Faculty Publication
                                    </p>

                                    <p className="mt-2 font-serif text-2xl text-white sm:text-3xl">
                                        Digital Electronics
                                    </p>
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center gap-4">
                                    <BookOpen className="h-5 w-5 text-[#8F7746]" />

                                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                        Academic Publication
                                    </span>
                                </div>

                                <h2 className="mt-6 font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-[#20235A] sm:text-5xl lg:text-[3.7rem]">
                                    Digital
                                    <span className="block text-[#8F7746]">
                                        Electronics.
                                    </span>
                                </h2>

                                <p className="mt-7 text-[15px] leading-8 text-[#1E1917]/70 sm:text-base sm:leading-[1.9]">
                                    A book titled{' '}
                                    <span className="font-semibold text-[#20235A]">
                                        “DIGITAL ELECTRONICS”
                                    </span>{' '}
                                    was published by our Mechatronics faculty
                                    members Mr. Midhunraj P K and Ms. Neethu M,
                                    together with ECE faculty Ms. Sajitha.
                                </p>

                                <div className="mt-8 border-t border-[#20235A]/10 pt-7">
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                        Contributors
                                    </p>

                                    <p className="mt-3 font-serif text-xl leading-8 text-[#20235A]">
                                        Mr. Midhunraj P K · Ms. Neethu M · Ms.
                                        Sajitha
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* STARTUP DESIGN */}
                <section className="bg-[#20235A] py-20 sm:py-24 lg:py-32">
                    <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16">
                        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-end lg:gap-20 xl:gap-28">
                            <div>
                                <div className="flex items-center gap-4">
                                    <span className="h-px w-10 bg-[#D2B87C]" />

                                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                                        Startup Design
                                    </span>
                                </div>

                                <h2 className="mt-6 font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-white sm:text-5xl lg:text-[3.7rem]">
                                    From student ideas
                                    <span className="block text-[#D2B87C]">
                                        to startups.
                                    </span>
                                </h2>
                            </div>

                            <div>
                                <p className="max-w-2xl text-[15px] leading-8 text-white/65 sm:text-base sm:leading-[1.9]">
                                    The Department of Mechatronics at NCERC is
                                    successful in providing students with
                                    high-quality education and opportunities. One
                                    of the best opportunities provided is support
                                    to help students start a company under{' '}
                                    <span className="text-white">
                                        NGI New-Gen IEDC
                                    </span>
                                    .
                                </p>

                                <a
                                    href="https://ncerc.ac.in/content/download/STARTUP-DETAILS.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group mt-8 inline-flex items-center gap-3 border-b border-[#D2B87C]/50 pb-2 text-sm font-semibold text-white transition-colors duration-300 hover:border-[#D2B87C] hover:text-[#D2B87C]"
                                >
                                    View Startup Rankers
                                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* STARTUP PROJECTS */}
                <section className="bg-[#FAF7F2] py-20 sm:py-24 lg:py-32">
                    <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16">
                        <div className="max-w-3xl">
                            <div className="flex items-center gap-4">
                                <Rocket className="h-5 w-5 text-[#8F7746]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                    Student Innovation
                                </span>
                            </div>

                            <h2 className="mt-6 font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-[#20235A] sm:text-5xl lg:text-[3.7rem]">
                                Three ideas.
                                <span className="block text-[#8F7746]">
                                    Three paths to innovation.
                                </span>
                            </h2>
                        </div>

                        <div className="mt-16 space-y-20 sm:mt-20 lg:space-y-28">
                            {startupProjects.map((project, index) => {
                                const reversed = index % 2 !== 0

                                return (
                                    <article
                                        key={project.number}
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
                                                        {project.number}
                                                    </span>
                                                </div>

                                                <div className="overflow-hidden bg-[#EAE6DD]">
                                                    <img
                                                        src={project.image}
                                                        alt={project.title}
                                                        className="aspect-[16/10] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                                                    />
                                                </div>

                                                <div className="mt-4 flex items-center justify-between border-b border-[#20235A]/10 pb-4">
                                                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                                        Startup Project
                                                    </span>

                                                    <span className="text-[11px] text-[#1E1917]/45">
                                                        New-Gen IEDC
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
                                                <Lightbulb className="h-5 w-5 text-[#8F7746]" />

                                                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                                    {project.subtitle}
                                                </span>
                                            </div>

                                            <h3 className="mt-6 font-serif text-3xl leading-[1.1] tracking-[-0.02em] text-[#20235A] sm:text-4xl lg:text-[3rem]">
                                                {project.title}
                                            </h3>

                                            <p className="mt-7 text-[15px] leading-8 text-[#1E1917]/70 sm:text-base sm:leading-[1.9]">
                                                {project.description}
                                            </p>

                                            <div className="mt-8 grid gap-6 border-t border-[#20235A]/10 pt-7 sm:grid-cols-2">
                                                <div>
                                                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                                        Founder(s)
                                                    </p>

                                                    <p className="mt-2 text-sm leading-7 text-[#1E1917]/70">
                                                        {project.founders}
                                                    </p>
                                                </div>

                                                <div>
                                                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                                        Company
                                                    </p>

                                                    <p className="mt-2 font-serif text-xl text-[#20235A]">
                                                        {project.company}
                                                    </p>
                                                </div>
                                            </div>

                                            {project.funding && (
                                                <div className="mt-6 inline-flex items-center gap-3 border border-[#D2B87C]/60 bg-white px-5 py-4">
                                                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                                                        Fund Granted
                                                    </span>

                                                    <span className="font-serif text-xl text-[#20235A]">
                                                        {project.funding}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    </article>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* NATIONAL / STATE LEVEL ACHIEVEMENTS */}
                <section className="bg-white py-20 sm:py-24 lg:py-32">
                    <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16">
                        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-20 xl:gap-28">
                            <div>
                                <div className="flex items-center gap-4">
                                    <Medal className="h-5 w-5 text-[#8F7746]" />

                                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                        National / State Level Achievements
                                    </span>
                                </div>

                                <h2 className="mt-6 font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-[#20235A] sm:text-5xl lg:text-[3.7rem]">
                                    Excellence beyond
                                    <span className="block text-[#8F7746]">
                                        engineering.
                                    </span>
                                </h2>

                                <p className="mt-7 max-w-xl text-[15px] leading-8 text-[#1E1917]/70 sm:text-base sm:leading-[1.9]">
                                    The department also celebrates achievements
                                    that demonstrate discipline, determination
                                    and excellence outside the conventional
                                    academic environment.
                                </p>
                            </div>

                            <div className="relative overflow-hidden bg-[#EAE6DD]">
                                <img
                                    src="https://ncerc.ac.in/content/img/seminar-mec/11.png"
                                    alt="Mohammed Favas M Gold Medal achievement"
                                    className="aspect-[16/10] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                                />

                                <div className="absolute inset-x-0 bottom-0 bg-[#20235A]/95 p-7 sm:p-9">
                                    <div className="flex items-start gap-4">
                                        <Medal className="mt-1 h-6 w-6 shrink-0 text-[#D2B87C]" />

                                        <div>
                                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                                National Achievement
                                            </p>

                                            <h3 className="mt-2 font-serif text-2xl leading-tight text-white sm:text-3xl">
                                                Gold Medal in Kick Boxing
                                            </h3>

                                            <p className="mt-3 text-sm leading-7 text-white/60">
                                                Mohammed Favas M, 2nd Year,
                                                won Gold Medal in the National
                                                South West Kick Boxing
                                                Championship 2020 held at
                                                Maharashtra.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FINAL ACHIEVEMENT STRIP */}
                <section className="bg-[#FAF7F2] py-20 sm:py-24 lg:py-28">
                    <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16">
                        <div className="grid gap-px overflow-hidden border border-[#20235A]/10 bg-[#20235A]/10 sm:grid-cols-3">
                            <div className="bg-white p-8 sm:p-10">
                                <Sparkles className="h-6 w-6 text-[#8F7746]" />

                                <p className="mt-7 font-serif text-3xl text-[#20235A]">
                                    Knowledge
                                </p>

                                <p className="mt-3 text-sm leading-7 text-[#1E1917]/65">
                                    Faculty contributions strengthen the
                                    academic and technical knowledge base of the
                                    department.
                                </p>
                            </div>

                            <div className="bg-white p-8 sm:p-10">
                                <Rocket className="h-6 w-6 text-[#8F7746]" />

                                <p className="mt-7 font-serif text-3xl text-[#20235A]">
                                    Innovation
                                </p>

                                <p className="mt-3 text-sm leading-7 text-[#1E1917]/65">
                                    Student projects demonstrate the ability to
                                    transform engineering concepts into practical
                                    solutions.
                                </p>
                            </div>

                            <div className="bg-white p-8 sm:p-10">
                                <Award className="h-6 w-6 text-[#8F7746]" />

                                <p className="mt-7 font-serif text-3xl text-[#20235A]">
                                    Excellence
                                </p>

                                <p className="mt-3 text-sm leading-7 text-[#1E1917]/65">
                                    Achievements across academic, entrepreneurial
                                    and competitive platforms reflect the
                                    diverse capabilities of NCERC students.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
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
                                    Think.
                                    <span className="block text-[#D2B87C]">
                                        Innovate. Achieve.
                                    </span>
                                </h2>

                                <p className="mt-7 max-w-2xl text-base leading-8 text-white/60">
                                    A culture of innovation and achievement
                                    encourages every student to explore
                                    possibilities, develop solutions and create
                                    meaningful impact.
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