import SiteHeader from '@/components/header/SiteHeader'
import FooterSection from '@/components/home/FooterSection'
import DepartmentNavigation from '../DepartmentsNavigation/page'
import React from 'react'
import {
    ArrowUpRight,
    Award,
    GraduationCap,
    Medal,
    Trophy,
} from 'lucide-react'

const academicSections = [
    {
        number: '01',
        icon: Medal,
        eyebrow: 'University Recognition',
        title: 'University Rank Holders',
        description:
            'Recognising students who have achieved outstanding academic performance and secured positions among the university rank holders.',
        href: '/departments/mechatronics_engineering/academic_excellence/university_rank_holders',
    },
    {
        number: '02',
        icon: Trophy,
        eyebrow: 'Academic Performance',
        title: 'Department Toppers',
        description:
            'Celebrating the academic excellence of students who have achieved the highest academic performance within the Department of Mechatronics Engineering.',
        href: '/departments/mechatronics_engineering/academic_excellence/department_toppers',
    },
    {
        number: '03',
        icon: Award,
        eyebrow: 'Beyond Academics',
        title: 'Other Achievements',
        description:
            'A collection of notable accomplishments that reflect the wider academic, professional and extracurricular achievements of our students.',
        href: '/mechatronics-engineering/academic-excellence#',
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
                                Academic Excellence
                            </span>
                        </div>

                        <div className="max-w-5xl">
                            <div className="mb-7 flex items-center gap-4">
                                <span className="h-px w-10 bg-[#D2B87C]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                    Academic Excellence
                                </span>
                            </div>

                            <h1 className="font-serif text-[3rem] font-medium leading-[1.02] tracking-[-0.035em] text-white sm:text-[4.4rem] lg:text-[5.3rem] xl:text-[5.8rem]">
                                Academic
                                <span className="block text-[#D2B87C]">
                                    Excellence
                                </span>
                            </h1>

                            <p className="mt-8 max-w-2xl text-sm leading-7 text-white/65 sm:mt-10 sm:text-base sm:leading-8">
                                Celebrating academic distinction, consistent
                                performance and the achievements of students who
                                continue to set high standards in Mechatronics
                                Engineering.
                            </p>
                        </div>
                    </div>
                </section>

                <DepartmentNavigation />

                {/* INFO STRIP */}
                <section className="border-b border-[#20235A]/10 bg-white">
                    <div className="mx-auto grid max-w-[1400px] divide-y divide-[#20235A]/10 px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-8 lg:px-12 xl:px-16">
                        <div className="px-0 py-7 sm:px-6 lg:py-8 lg:pl-0">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                Recognition
                            </p>

                            <p className="mt-2 font-serif text-xl text-[#20235A]">
                                University Ranks
                            </p>
                        </div>

                        <div className="px-0 py-7 sm:px-6 lg:py-8">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                Performance
                            </p>

                            <p className="mt-2 font-serif text-xl text-[#20235A]">
                                Department Toppers
                            </p>
                        </div>

                        <div className="px-0 py-7 sm:px-6 lg:py-8 lg:pr-0">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                Distinction
                            </p>

                            <p className="mt-2 font-serif text-xl text-[#20235A]">
                                Other Achievements
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
                                        A Culture of Excellence
                                    </span>
                                </div>

                                <h2 className="mt-6 max-w-xl font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-[#20235A] sm:text-5xl lg:text-[3.7rem]">
                                    Recognising the
                                    <span className="block text-[#8F7746]">
                                        pursuit of excellence.
                                    </span>
                                </h2>
                            </div>

                            <div className="space-y-8 text-[15px] leading-8 text-[#1E1917]/70 sm:text-base sm:leading-[1.95]">
                                <p>
                                    Academic excellence reflects the commitment,
                                    discipline and determination of students who
                                    strive to achieve their highest potential
                                    throughout their engineering education.
                                </p>

                                <p>
                                    The Department of Mechatronics Engineering
                                    recognises and celebrates outstanding
                                    academic performance through university
                                    rankings, department-level achievements and
                                    other notable accomplishments.
                                </p>

                                <p>
                                    Explore the sections below to discover the
                                    academic achievements and accomplishments of
                                    our students.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ACADEMIC EXCELLENCE DIRECTORY */}
                <section className="bg-[#FAF7F2] py-20 sm:py-24 lg:py-32">
                    <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16">
                        <div className="max-w-3xl">
                            <div className="flex items-center gap-4">
                                <GraduationCap className="h-5 w-5 text-[#8F7746]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                    Academic Recognition
                                </span>
                            </div>

                            <h2 className="mt-6 font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-[#20235A] sm:text-5xl lg:text-[3.7rem]">
                                Explore academic
                                <span className="block text-[#8F7746]">
                                    achievements.
                                </span>
                            </h2>

                            <p className="mt-7 max-w-2xl text-[15px] leading-8 text-[#1E1917]/70 sm:text-base sm:leading-[1.9]">
                                Discover the students and accomplishments that
                                represent the department's commitment to
                                academic excellence.
                            </p>
                        </div>

                        <div className="mt-16 grid gap-px overflow-hidden border border-[#20235A]/10 bg-[#20235A]/10 lg:grid-cols-3">
                            {academicSections.map((section) => {
                                const Icon = section.icon

                                return (
                                    <a
                                        key={section.number}
                                        href={section.href}
                                        className="group relative flex min-h-[430px] flex-col bg-white p-8 transition-colors duration-500 hover:bg-[#20235A] sm:p-10 lg:p-12"
                                    >
                                        {/* TOP */}
                                        <div className="flex items-start justify-between">
                                            <div className="flex h-12 w-12 items-center justify-center border border-[#D2B87C]/70 transition-colors duration-500 group-hover:border-[#D2B87C]">
                                                <Icon className="h-5 w-5 text-[#8F7746] transition-colors duration-500 group-hover:text-[#D2B87C]" />
                                            </div>

                                            <span className="font-serif text-4xl text-[#D2B87C]/70 transition-colors duration-500 group-hover:text-[#D2B87C]">
                                                {section.number}
                                            </span>
                                        </div>

                                        {/* CONTENT */}
                                        <div className="mt-auto pt-16">
                                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746] transition-colors duration-500 group-hover:text-[#D2B87C]">
                                                {section.eyebrow}
                                            </p>

                                            <h3 className="mt-4 font-serif text-3xl leading-[1.1] tracking-[-0.02em] text-[#20235A] transition-colors duration-500 group-hover:text-white sm:text-4xl">
                                                {section.title}
                                            </h3>

                                            <p className="mt-5 text-sm leading-7 text-[#1E1917]/65 transition-colors duration-500 group-hover:text-white/60">
                                                {section.description}
                                            </p>

                                            <div className="mt-8 flex items-center gap-3 text-sm font-semibold text-[#20235A] transition-colors duration-500 group-hover:text-white">
                                                Explore
                                                <span className="flex h-8 w-8 items-center justify-center border border-[#20235A]/15 transition-all duration-500 group-hover:border-[#D2B87C]/50">
                                                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* FEATURE STRIP */}
                <section className="bg-white py-20 sm:py-24 lg:py-32">
                    <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16">
                        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-20 xl:gap-28">
                            <div>
                                <div className="flex items-center gap-4">
                                    <span className="h-px w-10 bg-[#D2B87C]" />

                                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                        Student Distinction
                                    </span>
                                </div>

                                <h2 className="mt-6 font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-[#20235A] sm:text-5xl lg:text-[3.7rem]">
                                    Every achievement
                                    <span className="block text-[#8F7746]">
                                        tells a story.
                                    </span>
                                </h2>

                                <p className="mt-7 max-w-xl text-[15px] leading-8 text-[#1E1917]/70 sm:text-base sm:leading-[1.9]">
                                    Behind every rank, academic distinction and
                                    achievement is a journey of perseverance,
                                    learning and continuous improvement.
                                </p>
                            </div>

                            <div className="grid gap-px overflow-hidden border border-[#20235A]/10 bg-[#20235A]/10 sm:grid-cols-2">
                                <div className="bg-[#FAF7F2] p-8 sm:p-10">
                                    <Medal className="h-6 w-6 text-[#8F7746]" />

                                    <h3 className="mt-8 font-serif text-2xl text-[#20235A]">
                                        University Ranks
                                    </h3>

                                    <p className="mt-4 text-sm leading-7 text-[#1E1917]/65">
                                        Celebrating students who have achieved
                                        exceptional academic standing at the
                                        university level.
                                    </p>
                                </div>

                                <div className="bg-[#FAF7F2] p-8 sm:p-10">
                                    <Trophy className="h-6 w-6 text-[#8F7746]" />

                                    <h3 className="mt-8 font-serif text-2xl text-[#20235A]">
                                        Department Toppers
                                    </h3>

                                    <p className="mt-4 text-sm leading-7 text-[#1E1917]/65">
                                        Recognising students who have attained
                                        the highest academic performance within
                                        the department.
                                    </p>
                                </div>

                                <div className="bg-[#FAF7F2] p-8 sm:p-10">
                                    <Award className="h-6 w-6 text-[#8F7746]" />

                                    <h3 className="mt-8 font-serif text-2xl text-[#20235A]">
                                        Other Achievements
                                    </h3>

                                    <p className="mt-4 text-sm leading-7 text-[#1E1917]/65">
                                        Highlighting accomplishments that extend
                                        beyond conventional academic rankings.
                                    </p>
                                </div>

                                <div className="bg-[#FAF7F2] p-8 sm:p-10">
                                    <GraduationCap className="h-6 w-6 text-[#8F7746]" />

                                    <h3 className="mt-8 font-serif text-2xl text-[#20235A]">
                                        Future Ready
                                    </h3>

                                    <p className="mt-4 text-sm leading-7 text-[#1E1917]/65">
                                        Encouraging students to carry academic
                                        excellence into their professional
                                        careers.
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
                                    Excellence that
                                    <span className="block text-[#D2B87C]">
                                        inspires excellence.
                                    </span>
                                </h2>

                                <p className="mt-7 max-w-2xl text-base leading-8 text-white/60">
                                    Academic achievement is not only about
                                    recognition. It is about developing the
                                    discipline, curiosity and confidence to keep
                                    learning and achieving.
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