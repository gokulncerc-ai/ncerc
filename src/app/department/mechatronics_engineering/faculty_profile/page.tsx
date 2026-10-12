import SiteHeader from '@/components/header/SiteHeader'
import FooterSection from '@/components/home/FooterSection'
import DepartmentNavigation from '../DepartmentsNavigation/page'
import React from 'react'
import {
    ArrowRight,
    ArrowUpRight,
    BookOpen,
    GraduationCap,
    UserRound,
    Users,
} from 'lucide-react'
import Image from 'next/image'
const teachingFaculty = [
    {
        name: 'Prof. Dr. Anto Francis Cherussery',
        designation: 'HOD and Professor',
        qualification: '-',
        joiningDate: '-',
        image:
            'https://ncerc.ac.in/mechatronics-engineering/images/faculty/DrAntoFrancisCherussery_photo.jpg',
        href: '/mechatronics-engineering/faculty-profile-prof-dr-anto-francis-cherussery.php',
        featured: true,
    },
    {
        name: 'Dr. Ram Mohan',
        designation: 'Professor',
        qualification: '-',
        joiningDate: '-',
        image:
            'https://ncerc.ac.in/mechatronics-engineering/images/faculty/RamMohanS_Photo.jpg',
        href: '/mechatronics-engineering/faculty-details#',
    },
    {
        name: 'Mr Midhunraj PK',
        designation: 'Assistant Professor',
        qualification: '-',
        joiningDate: '-',
        href: '/mechatronics-engineering/faculty-details#',
    },
    {
        name: 'Ms Neethu M',
        designation: 'Assistant Professor',
        qualification: '-',
        joiningDate: '-',
        href: '/mechatronics-engineering/faculty-details#',
    },
    {
        name: 'Mr Saneesh AS',
        designation: 'Assistant Professor',
        qualification: '-',
        joiningDate: '-',
        href: '/mechatronics-engineering/faculty-details#',
    },
    {
        name: 'Mr Rejumon',
        designation: 'Assistant Professor',
        qualification: '-',
        joiningDate: '-',
        image:
            'https://ncerc.ac.in/mechatronics-engineering/images/faculty/REJUMON%20photo.jpg',
        href: '/mechatronics-engineering/faculty-details#',
    },
    {
        name: 'Mr Vinod R',
        designation: 'Assistant Professor',
        qualification: '-',
        joiningDate: '-',
        image:
            'https://ncerc.ac.in/mechatronics-engineering/images/faculty/VINOD%20R_PHOTO.jpg',
        href: '/mechatronics-engineering/faculty-details#',
    },
    {
        name: 'Ms Manjusha P',
        designation: 'Assistant Professor',
        qualification: '-',
        joiningDate: '-',
        image:
            'https://ncerc.ac.in/mechatronics-engineering/images/faculty/ManjushaP_Photo.jpg',
        href: '/mechatronics-engineering/faculty-profile-manjusha-p.php',
    },
    {
        name: 'Mr Anshad V',
        designation: 'Assistant Professor',
        qualification: '-',
        joiningDate: '-',
        image:
            'https://ncerc.ac.in/mechatronics-engineering/images/faculty/AnshadV_Photo.jpg',
        href: '/mechatronics-engineering/faculty-details#',
    },
]

const labFaculty = [
    {
        name: 'Mr Ajay MV',
        designation: 'Lab Assistant',
        href: '/mechatronics-engineering/faculty-details#',
    },
    {
        name: 'Mr. Athul Krishna P',
        designation: 'Lab Assistant',
        href: '/mechatronics-engineering/faculty-details#',
    },
]

const getInitials = (name: string) => {
    const cleanedName = name
        .replace(/^(Prof\.|Dr\.|Mr\.|Ms)\s*/i, '')
        .trim()

    const parts = cleanedName.split(' ').filter(Boolean)

    if (parts.length === 1) {
        return parts[0].slice(0, 2).toUpperCase()
    }

    return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase()
}

/* =========================================================
   SMALL FACULTY CARD
========================================================= */
const hod = teachingFaculty[0];
const FacultyCard = ({
    faculty,
}: {
    faculty: {
        name: string
        designation: string
        qualification: string
        joiningDate: string
        image?: string
        href: string
    }
}) => {
    return (
        <article className="group grid overflow-hidden border border-[#20235A]/10 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-[#D2B87C]/60 hover:shadow-[0_18px_45px_rgba(32,35,90,0.08)] sm:grid-cols-[220px_1fr]">

            {/* PHOTO */}

            <div className="relative h-[250px] overflow-hidden bg-[#F2EFE8] sm:h-full sm:min-h-[260px]">

                {faculty.image ? (
                    <Image
                        src={faculty.image}
                        alt={faculty.name}
                        fill
                        sizes="(min-width: 1024px) 330px, 100vw"
                        className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.035]"
                    />
                ) : (
                    <div className="flex h-full min-h-[250px] items-center justify-center bg-[#F2EFE8]">
                        <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-[#D2B87C]/70 bg-white font-serif text-2xl text-[#20235A]">
                            {getInitials(faculty.name)}

                            <div className="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                                <UserRound size={14} />
                            </div>
                        </div>
                    </div>
                )}

                {/* IMAGE LABEL */}

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#20235A]/80 to-transparent px-5 pb-4 pt-12">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/75">
                        Mechatronics Engineering
                    </span>
                </div>
            </div>

            {/* CONTENT */}

            <div className="flex flex-col justify-between p-6 sm:p-7">

                <div>

                    <div className="mb-5 flex items-center gap-3">
                        <span className="h-px w-7 bg-[#D2B87C]" />

                        <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                            {faculty.designation}
                        </span>
                    </div>

                    <h3 className="max-w-md font-serif text-2xl leading-[1.12] tracking-[-0.02em] text-[#20235A] transition-colors group-hover:text-[#8F7746] sm:text-[1.75rem]">
                        {faculty.name}
                    </h3>

                    <div className="mt-7 space-y-3 border-t border-[#20235A]/10 pt-5">

                        <div className="flex items-start justify-between gap-5">
                            <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#8F7746]">
                                Qualification
                            </span>

                            <span className="text-right text-xs text-[#1E1917]/55">
                                {faculty.qualification}
                            </span>
                        </div>

                        <div className="flex items-start justify-between gap-5">
                            <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#8F7746]">
                                Joining
                            </span>

                            <span className="text-right text-xs text-[#1E1917]/55">
                                {faculty.joiningDate}
                            </span>
                        </div>

                    </div>

                </div>

                <a
                    href={faculty.href}
                    className="group/link mt-8 flex w-fit items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#20235A]"
                >
                    <span className="border-b border-[#20235A]/20 pb-1 transition group-hover/link:border-[#D2B87C]">
                        View Profile
                    </span>

                    <span className="flex h-7 w-7 items-center justify-center border border-[#20235A]/15 transition group-hover/link:border-[#20235A] group-hover/link:bg-[#20235A] group-hover/link:text-white">
                        <ArrowUpRight size={13} />
                    </span>
                </a>

            </div>

        </article>
    )
}

/* =========================================================
   PAGE
========================================================= */

const page = () => {
    return (
        <>
            <SiteHeader />

            <main className="bg-[#FAF7F2] text-[#1E1917]">

                {/* =====================================================
                    HERO
                ===================================================== */}

                <section className="bg-[#20235A]">

                    <div className="mx-auto max-w-[1400px] px-6 pb-14 pt-20 sm:px-8 sm:pb-16 sm:pt-24 lg:px-12 lg:pb-20 lg:pt-28 xl:px-16">

                        <div className="mb-12 flex flex-wrap items-center gap-3 text-[11px] font-medium uppercase tracking-[0.18em] text-white/40">
                            <span>Mechatronics Engineering</span>

                            <span className="text-[#D2B87C]">
                                /
                            </span>

                            <span className="text-[#D2B87C]">
                                Faculty Profile
                            </span>
                        </div>

                        <div className="grid gap-12 lg:grid-cols-[1fr_0.65fr] lg:items-end">

                            <div>

                                <div className="mb-7 flex items-center gap-3">
                                    <span className="h-px w-10 bg-[#D2B87C]" />

                                    <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                        People & Expertise
                                    </span>
                                </div>

                                <h1 className="font-serif text-[3rem] font-medium leading-[1.02] tracking-[-0.035em] text-white sm:text-[4.4rem] lg:text-[5.3rem] xl:text-[5.8rem]">
                                    Faculty
                                    <br />
                                    <span className="text-[#D2B87C]">
                                        Profile
                                    </span>
                                </h1>

                            </div>

                            <p className="max-w-xl pb-2 text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
                                Meet the faculty members who contribute to
                                teaching, mentoring, practical learning and
                                academic development in the Department of
                                Mechatronics Engineering.
                            </p>

                        </div>

                    </div>

                </section>

                {/* =====================================================
                    NAVIGATION
                ===================================================== */}

                <DepartmentNavigation />

                {/* =====================================================
                    QUICK INFO
                ===================================================== */}

                <section className="border-b border-[#20235A]/10 bg-white">

                    <div className="mx-auto grid max-w-[1400px] divide-y divide-[#20235A]/10 px-6 sm:px-8 md:grid-cols-4 md:divide-x md:divide-y-0 lg:px-12 xl:px-16">

                        <div className="py-6 md:px-7 lg:px-8">
                            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                Teaching Faculty
                            </p>

                            <p className="mt-2 font-serif text-xl text-[#20235A]">
                                09
                            </p>
                        </div>

                        <div className="py-6 md:px-7 lg:px-8">
                            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                Laboratory Faculty
                            </p>

                            <p className="mt-2 font-serif text-xl text-[#20235A]">
                                02
                            </p>
                        </div>

                        <div className="py-6 md:px-7 lg:px-8">
                            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                Faculty Leadership
                            </p>

                            <p className="mt-2 font-serif text-xl text-[#20235A]">
                                HOD & Professor
                            </p>
                        </div>

                        <div className="py-6 md:px-7 lg:px-8">
                            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                Department
                            </p>

                            <p className="mt-2 font-serif text-xl text-[#20235A]">
                                Mechatronics
                            </p>
                        </div>

                    </div>

                </section>

                {/* =====================================================
                    INTRO
                ===================================================== */}

                <section className="bg-[#FAF7F2] py-20 sm:py-24 lg:py-28">

                    <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16">

                        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">

                            <div>

                                <div className="mb-6 flex items-center gap-3">
                                    <span className="h-px w-10 bg-[#D2B87C]" />

                                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                        Our People
                                    </span>
                                </div>

                                <h2 className="font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-[#20235A] sm:text-5xl lg:text-[3.6rem]">
                                    Expertise behind
                                    <br />
                                    <span className="text-[#8F7746]">
                                        every classroom.
                                    </span>
                                </h2>

                            </div>

                            <p className="max-w-2xl text-[15px] leading-8 text-[#1E1917]/65 sm:text-base sm:leading-[1.9]">
                                The Department of Mechatronics Engineering
                                brings together teaching faculty and laboratory
                                professionals who support students across
                                academic learning and practical experiences.
                                Their contribution forms an important part of
                                the department&apos;s learning environment.
                            </p>

                        </div>

                    </div>

                </section>

                {/* =====================================================
                    HOD FEATURE
                ===================================================== */}

                <section className="bg-white pb-20 sm:pb-24 lg:pb-28">

                    <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16">

                        <div className="mb-8 flex items-end justify-between gap-8">

                            <div>
                                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                    Department Leadership
                                </p>

                                <h2 className="font-serif text-3xl text-[#20235A] sm:text-4xl">
                                    Head of Department
                                </h2>
                            </div>

                            <span className="hidden text-[10px] font-semibold uppercase tracking-[0.2em] text-[#20235A]/30 sm:block">
                                01 / Leadership
                            </span>

                        </div>

                        <div className="grid overflow-hidden bg-[#20235A] lg:grid-cols-[280px_1fr]">

                            {/* HOD IMAGE */}
                            <div className="relative h-[320px] overflow-hidden bg-[#F2EFE8] lg:h-[360px]">
                            {hod.image ? (
                                <Image
                                src={hod.image}
                                alt={hod.name}
                                fill
                                sizes="(min-width: 1024px) 330px, 100vw"
                                className="h-full w-full object-cover object-center"
                                />
                            ) : (
                                <div className="flex h-full items-center justify-center">
                                <span className="font-serif text-3xl text-[#20235A]">
                                    {getInitials(hod.name)}
                                </span>
                                </div>
                            )}
                            {/* existing gradient overlay */}
                            </div>

                            {/* HOD CONTENT */}

                            <div className="flex flex-col justify-between p-7 sm:p-9 lg:p-12">

                                <div>

                                    <div className="mb-5 flex items-center gap-3">
                                        <span className="h-px w-8 bg-[#D2B87C]" />

                                        <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                            HOD and Professor
                                        </span>
                                    </div>

                                    <h3 className="max-w-3xl font-serif text-3xl leading-[1.08] tracking-[-0.025em] text-white sm:text-4xl lg:text-5xl">
                                        Prof. Dr. Anto Francis
                                        <br className="hidden sm:block" />
                                        Cherussery
                                    </h3>

                                    <p className="mt-6 max-w-2xl text-sm leading-7 text-white/55">
                                        Head of the Department of Mechatronics
                                        Engineering and part of the academic
                                        leadership supporting the department&apos;s
                                        teaching and learning environment.
                                    </p>

                                </div>

                                <a
                                    href={teachingFaculty[0].href}
                                    className="group mt-9 flex w-fit items-center gap-3 border border-[#D2B87C]/40 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.17em] text-white transition hover:bg-[#D2B87C] hover:text-[#20235A]"
                                >
                                    View Full Profile

                                    <ArrowUpRight
                                        size={14}
                                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                    />
                                </a>

                            </div>

                        </div>

                    </div>

                </section>

                {/* =====================================================
                    TEACHING FACULTY
                ===================================================== */}

                <section className="bg-[#FAF7F2] py-20 sm:py-24 lg:py-28">

                    <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16">

                        <div className="mb-12 grid gap-6 sm:grid-cols-[1fr_auto] sm:items-end">

                            <div>

                                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                    Teaching Faculty
                                </p>

                                <h2 className="font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-[#20235A] sm:text-5xl">
                                    Faculty
                                    <span className="text-[#8F7746]">
                                        {' '}team
                                    </span>
                                </h2>

                            </div>

                            <p className="max-w-md text-sm leading-7 text-[#1E1917]/50 sm:text-right">
                                Teaching professionals supporting the academic
                                journey of Mechatronics Engineering students.
                            </p>

                        </div>

                        <div className="grid gap-5 lg:grid-cols-2">

                            {teachingFaculty.slice(1).map((faculty) => (
                                <FacultyCard
                                    key={faculty.name}
                                    faculty={faculty}
                                />
                            ))}

                        </div>

                    </div>

                </section>

                {/* =====================================================
                    FACULTY STATEMENT
                ===================================================== */}

                <section className="bg-[#20235A]">

                    <div className="mx-auto max-w-[1400px] px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16">

                        <div className="grid gap-10 lg:grid-cols-[180px_1fr] lg:items-center">

                            <div className="flex h-20 w-20 items-center justify-center border border-[#D2B87C]/40 text-[#D2B87C]">
                                <GraduationCap
                                    size={30}
                                    strokeWidth={1.2}
                                />
                            </div>

                            <div>

                                <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                                    Teaching & Mentoring
                                </p>

                                <h2 className="max-w-5xl font-serif text-3xl leading-[1.18] tracking-[-0.02em] text-white sm:text-4xl lg:text-5xl">
                                    A strong academic environment begins
                                    with people who make knowledge
                                    accessible, practical and meaningful.
                                </h2>

                            </div>

                        </div>

                    </div>

                </section>

                {/* =====================================================
                    LAB FACULTY
                ===================================================== */}

                <section className="bg-white py-20 sm:py-24 lg:py-28">

                    <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16">

                        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">

                            <div>

                                <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                    Laboratory Team
                                </p>

                                <h2 className="font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-[#20235A] sm:text-5xl">
                                    Practical
                                    <br />
                                    <span className="text-[#8F7746]">
                                        learning support.
                                    </span>
                                </h2>

                                <p className="mt-6 max-w-md text-sm leading-7 text-[#1E1917]/55">
                                    Laboratory staff contribute to the smooth
                                    functioning of practical learning spaces
                                    within the department.
                                </p>

                            </div>

                            <div className="border-t border-[#20235A]/10">

                                {labFaculty.map((faculty, index) => (
                                    <a
                                        key={faculty.name}
                                        href={faculty.href}
                                        className="group flex items-center justify-between border-b border-[#20235A]/10 py-6 transition hover:px-3"
                                    >

                                        <div className="flex items-center gap-5">

                                            <span className="font-serif text-sm text-[#D2B87C]">
                                                0{index + 1}
                                            </span>

                                            <div>

                                                <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                                                    {faculty.designation}
                                                </p>

                                                <h3 className="mt-1 font-serif text-xl text-[#20235A] sm:text-2xl">
                                                    {faculty.name}
                                                </h3>

                                            </div>

                                        </div>

                                        <span className="flex h-9 w-9 items-center justify-center border border-[#20235A]/10 text-[#20235A] transition group-hover:border-[#20235A] group-hover:bg-[#20235A] group-hover:text-white">
                                            <ArrowUpRight size={14} />
                                        </span>

                                    </a>
                                ))}

                            </div>

                        </div>

                    </div>

                </section>

                {/* =====================================================
                    SUMMARY
                ===================================================== */}

                <section className="bg-[#FAF7F2] py-16 sm:py-20">

                    <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16">

                        <div className="grid gap-4 md:grid-cols-3">

                            <div className="border border-[#20235A]/10 bg-white p-7">
                                <Users
                                    size={21}
                                    strokeWidth={1.4}
                                    className="text-[#8F7746]"
                                />

                                <p className="mt-6 font-serif text-4xl text-[#20235A]">
                                    09
                                </p>

                                <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                                    Teaching Faculty
                                </p>
                            </div>

                            <div className="border border-[#20235A]/10 bg-white p-7">
                                <BookOpen
                                    size={21}
                                    strokeWidth={1.4}
                                    className="text-[#8F7746]"
                                />

                                <p className="mt-6 font-serif text-4xl text-[#20235A]">
                                    02
                                </p>

                                <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                                    Lab Assistants
                                </p>
                            </div>

                            <div className="border border-[#20235A]/10 bg-white p-7">
                                <GraduationCap
                                    size={21}
                                    strokeWidth={1.4}
                                    className="text-[#8F7746]"
                                />

                                <p className="mt-6 font-serif text-4xl text-[#20235A]">
                                    11
                                </p>

                                <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                                    Faculty & Lab Team
                                </p>
                            </div>

                        </div>

                    </div>

                </section>

                {/* =====================================================
                    CTA
                ===================================================== */}

                <section className="bg-[#20235A]">

                    <div className="mx-auto max-w-[1400px] px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16">

                        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">

                            <div>

                                <div className="mb-6 flex items-center gap-3">
                                    <span className="h-px w-10 bg-[#D2B87C]" />

                                    <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                                        Explore the Department
                                    </span>
                                </div>

                                <h2 className="max-w-4xl font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-white sm:text-5xl lg:text-6xl">
                                    Spaces designed for
                                    <br />
                                    <span className="text-[#D2B87C]">
                                        practical learning.
                                    </span>
                                </h2>

                            </div>

                            <a
                                href="/mechatronics-engineering/facilities.php"
                                className="group inline-flex w-fit items-center gap-3 border border-[#D2B87C]/50 px-6 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#D2B87C] hover:text-[#20235A]"
                            >
                                Explore Facilities

                                <ArrowRight
                                    size={16}
                                    className="transition-transform group-hover:translate-x-1"
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

export default page