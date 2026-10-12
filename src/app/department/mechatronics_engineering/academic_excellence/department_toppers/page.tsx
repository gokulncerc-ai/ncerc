import SiteHeader from '@/components/header/SiteHeader';
import FooterSection from '@/components/home/FooterSection';
import Image from 'next/image';
import DepartmentNavigation from '../../DepartmentsNavigation/page';
import React from 'react'
import {
    ArrowRight,
    ArrowUpRight,
    Award,
    BookOpen,
    GraduationCap,
    Medal,
    Star,
    Trophy,
} from 'lucide-react'

const topperSections = [
    {
        academicYear: '2020–21 Academic Year',
        semester: 'Semester I',
        label: 'S1',
        students: [
            {
                order: '01',
                name: 'BOAZ K MICHALE',
                regNo: 'NCE20MC008',
                sgpa: '9.26',
                image:
                    'https://ncerc.ac.in/images/dpt/mechatronics-engineering/department-toppers/boaz-k-michale.png',
            },
            {
                order: '02',
                name: 'RAHUL KRISHNA U K SATHISH',
                regNo: 'NCE20MC022',
                sgpa: '9.06',
                image:
                    'https://ncerc.ac.in/images/dpt/mechatronics-engineering/department-toppers/rahul-krishna-uk-sathish.png',
            },
        ],
    },
    {
        academicYear: '2020–21 Academic Year',
        semester: 'Semester III',
        label: 'S3',
        students: [
            {
                order: '01',
                name: 'AMRITA S NAIR',
                regNo: 'NCE19MC009',
                sgpa: '10.0',
                image:
                    'https://ncerc.ac.in/images/dpt/mechatronics-engineering/department-toppers/AMRITA-S-NAIR.jpg',
            },
            {
                order: '02',
                name: 'RISHANA MOL K I',
                regNo: 'NCE19MC026',
                sgpa: '9.91',
                image:
                    'https://ncerc.ac.in/images/dpt/mechatronics-engineering/department-toppers/RISHANA-MOL-K-I.jpg',
            },
            {
                order: '03',
                name: 'AISWARYA V',
                regNo: 'NCE19MC005',
                sgpa: '9.82',
                image:
                    'https://ncerc.ac.in/images/dpt/mechatronics-engineering/department-toppers/aiswarya-v.png',
            },
            {
                order: '04',
                name: 'JYOTHISREE SAJAN',
                regNo: 'NCE19MC019',
                sgpa: '9.73',
                image:
                    'https://ncerc.ac.in/images/dpt/mechatronics-engineering/department-toppers/jyothisree-sajan.png',
            },
            {
                order: '04',
                name: 'RUHA JOICE',
                regNo: 'NCE19MC028',
                sgpa: '9.09',
                image:
                    'https://ncerc.ac.in/images/dpt/mechatronics-engineering/department-toppers/ruha-joice.png',
            },
        ],
    },
    {
        academicYear: '2020–21 Academic Year',
        semester: 'Semester VI',
        label: 'S6',
        students: [
            {
                order: '01',
                name: 'MUNEER M',
                regNo: 'NCE18MC025',
                sgpa: '9.72',
                image:
                    'https://ncerc.ac.in/images/dpt/mechatronics-engineering/department-toppers/muneer-m.png',
            },
            {
                order: '02',
                name: 'NADIR NAZEER',
                regNo: 'NCE18MC025',
                sgpa: '9.61',
                image:
                    'https://ncerc.ac.in/images/dpt/mechatronics-engineering/department-toppers/nadier-nazeer.png',
            },
            {
                order: '03',
                name: 'RAJITH KRISHNAN',
                regNo: 'NCE18MC030',
                sgpa: '9.61',
                image:
                    'https://ncerc.ac.in/images/dpt/mechatronics-engineering/department-toppers/RAJITH-KRISHNAN.jpg',
            },
            {
                order: '04',
                name: 'ABHIMANUE K S',
                regNo: 'NCE18MC0O1',
                sgpa: '9.57',
                image:
                    'https://ncerc.ac.in/images/dpt/mechatronics-engineering/department-toppers/abhimanue-ks.png',
            },
            {
                order: '05',
                name: 'AJAY M V',
                regNo: 'NCE18MC008',
                sgpa: '9.52',
                image:
                    'https://ncerc.ac.in/images/dpt/mechatronics-engineering/department-toppers/ajay-m-v.png',
            },
            {
                order: '06',
                name: 'APARNA K',
                regNo: 'NCE18MC010',
                sgpa: '9.04',
                image:
                    'https://ncerc.ac.in/images/dpt/mechatronics-engineering/department-toppers/aparna-k.png',
            },
            {
                order: '07',
                name: 'ALEETA BOBBY',
                regNo: 'NCE18MC009',
                sgpa: '9.0',
                image:
                    'https://ncerc.ac.in/images/dpt/mechatronics-engineering/department-toppers/ALEETA-BOBBY.jpg',
            },
            {
                order: '07',
                name: 'MANIKANDAN C',
                regNo: 'NCE18MC021',
                sgpa: '9.0',
                image:
                    'https://ncerc.ac.in/images/dpt/mechatronics-engineering/department-toppers/manikandan-c.png',
            },
        ],
    },
    {
        academicYear: '2020–21 Academic Year',
        semester: 'Semester VI',
        label: 'S6',
        students: [
            {
                order: '01',
                name: 'ANAS MOHAMMED ALI',
                regNo: 'NCE17MC002',
                sgpa: '10',
                image:
                    'https://ncerc.ac.in/images/dpt/mechatronics-engineering/department-toppers/ANAS-MOHAMMED-ALI.jpg',
            },
            {
                order: '02',
                name: 'SURYAKANTH SHENOYI',
                regNo: 'NCE17MC011',
                sgpa: '9.35',
                image:
                    'https://ncerc.ac.in/images/dpt/mechatronics-engineering/department-toppers/SURYAKANTH-SHENOYI.jpg',
            },
            {
                order: '03',
                name: 'VISHNU SURESH KUMAR',
                regNo: 'NCE17MC014',
                sgpa: '8.48',
                image:
                    'https://ncerc.ac.in/images/dpt/mechatronics-engineering/department-toppers/VISHNU-SURESH-KUMAR.jpg',
            },
        ],
    },
    {
        academicYear: '2020–21 Academic Year',
        semester: 'Semester VIII',
        label: 'S8',
        students: [
            {
                order: '01',
                name: 'ADITH SUNDER C',
                regNo: 'NCE16MC002',
                sgpa: '10',
                image:
                    'https://ncerc.ac.in/images/dpt/mechatronics-engineering/department-toppers/ADITH-SUNDER--C.jpg',
            },
            {
                order: '02',
                name: 'ANIL C A',
                regNo: 'NCE16MC009',
                sgpa: '10',
                image:
                    'https://ncerc.ac.in/images/dpt/mechatronics-engineering/department-toppers/ANIL--C-A.jpg',
            },
            {
                order: '03',
                name: 'ISSAC K JOY',
                regNo: 'NCE16MC019',
                sgpa: '10',
                image:
                    'https://ncerc.ac.in/images/dpt/mechatronics-engineering/department-toppers/ISSAC--K-JOY.jpg',
            },
            {
                order: '04',
                name: 'JITHIN CHERIAN',
                regNo: 'NCE16MC021',
                sgpa: '10',
                image:
                    'https://ncerc.ac.in/images/dpt/mechatronics-engineering/department-toppers/JITHIN--CHERIAN.jpg',
            },
            {
                order: '05',
                name: 'JITHIN T J',
                regNo: 'NCE16MC023',
                sgpa: '10',
                image:
                    'https://ncerc.ac.in/images/dpt/mechatronics-engineering/department-toppers/JITHIN--T-J.jpg',
            },
            {
                order: '06',
                name: 'SMRUTHI RANJITH',
                regNo: 'NCE16MC043',
                sgpa: '10',
                image:
                    'https://ncerc.ac.in/images/dpt/mechatronics-engineering/department-toppers/SMRUTHI--RANJITH.jpg',
            },
            {
                order: '07',
                name: 'VIKAS V',
                regNo: 'NCE16MC046',
                sgpa: '10',
                image:
                    'https://ncerc.ac.in/images/dpt/mechatronics-engineering/department-toppers/VIKAS--V.jpg',
            },
        ],
    },
]

const page = () => {
    const totalStudents = topperSections.reduce(
        (total, section) => total + section.students.length,
        0
    )

    const perfectScores = topperSections.reduce(
        (total, section) =>
            total +
            section.students.filter((student) => student.sgpa === '10' || student.sgpa === '10.0')
                .length,
        0
    )

    return (
        <>
            <SiteHeader />

            <main className="bg-[#FAF7F2] text-[#1E1917]">

                {/* =====================================================
                    HERO
                ===================================================== */}
                <section className="bg-[#20235A]">
                    <div className="mx-auto max-w-[1400px] px-6 pb-14 pt-20 sm:px-8 sm:pb-16 sm:pt-24 lg:px-12 lg:pb-20 lg:pt-28 xl:px-16">

                        <div className="mb-12 flex flex-wrap items-center gap-3 text-[11px] font-medium uppercase tracking-[0.18em] text-white/45">
                            <span>Mechatronics Engineering</span>
                            <span className="text-[#D2B87C]">/</span>
                            <span>Academic Excellence</span>
                            <span className="text-[#D2B87C]">/</span>
                            <span className="text-[#D2B87C]">
                                Department Toppers
                            </span>
                        </div>

                        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">

                            <div>
                                <div className="mb-7 flex items-center gap-3">
                                    <span className="h-px w-10 bg-[#D2B87C]" />

                                    <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                        Academic Excellence
                                    </span>
                                </div>

                                <h1 className="font-serif text-[3rem] font-medium leading-[1.02] tracking-[-0.035em] text-white sm:text-[4.4rem] lg:text-[5.3rem] xl:text-[5.8rem]">
                                    Department
                                    <br />
                                    <span className="text-[#D2B87C]">
                                        Toppers
                                    </span>
                                </h1>
                            </div>

                            <div className="lg:pb-2">
                                <p className="max-w-xl text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
                                    Celebrating students who have demonstrated
                                    exceptional academic performance across
                                    different semesters of the B.Tech
                                    Mechatronics Engineering programme.
                                </p>
                            </div>

                        </div>
                    </div>
                </section>

                {/* =====================================================
                    DEPARTMENT NAVIGATION
                ===================================================== */}
                <DepartmentNavigation />

                {/* =====================================================
                    INFORMATION STRIP
                ===================================================== */}
                <section className="border-b border-[#20235A]/10 bg-white">
                    <div className="mx-auto grid max-w-[1400px] divide-y divide-[#20235A]/10 px-6 sm:px-8 md:grid-cols-4 md:divide-x md:divide-y-0 lg:px-12 xl:px-16">

                        <div className="px-0 py-7 md:px-7 lg:px-8">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                Programme
                            </p>

                            <p className="mt-2 font-serif text-xl text-[#20235A]">
                                B.Tech Mechatronics
                            </p>
                        </div>

                        <div className="px-0 py-7 md:px-7 lg:px-8">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                Academic Year
                            </p>

                            <p className="mt-2 font-serif text-xl text-[#20235A]">
                                2020 – 21
                            </p>
                        </div>

                        <div className="px-0 py-7 md:px-7 lg:px-8">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                Student Records
                            </p>

                            <p className="mt-2 font-serif text-xl text-[#20235A]">
                                {totalStudents} Toppers
                            </p>
                        </div>

                        <div className="px-0 py-7 md:px-7 lg:px-8">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                Perfect SGPA
                            </p>

                            <p className="mt-2 font-serif text-xl text-[#20235A]">
                                {perfectScores} Students
                            </p>
                        </div>

                    </div>
                </section>

                {/* =====================================================
                    INTRO
                ===================================================== */}
                <section className="bg-[#FAF7F2] py-20 sm:py-24 lg:py-32">
                    <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16">

                        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">

                            <div>
                                <div className="mb-6 flex items-center gap-3">
                                    <span className="h-px w-10 bg-[#D2B87C]" />

                                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                        Academic Achievement
                                    </span>
                                </div>

                                <h2 className="max-w-xl font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-[#20235A] sm:text-5xl lg:text-[3.7rem]">
                                    Excellence measured
                                    <br />
                                    <span className="text-[#8F7746]">
                                        semester by semester.
                                    </span>
                                </h2>
                            </div>

                            <div className="max-w-3xl space-y-8 text-[15px] leading-8 text-[#1E1917]/70 sm:text-base sm:leading-[1.95]">
                                <p>
                                    Academic performance is an important part of
                                    the learning journey at the Department of
                                    Mechatronics Engineering. The department
                                    recognises students who achieve outstanding
                                    Semester Grade Point Averages across their
                                    academic progression.
                                </p>

                                <p>
                                    The following records highlight the
                                    department toppers for the academic
                                    year 2020–21, arranged according to
                                    semester and academic performance.
                                </p>
                            </div>

                        </div>
                    </div>
                </section>

                {/* =====================================================
                    FEATURED IMAGE
                ===================================================== */}
                <section className="bg-white py-16 sm:py-20 lg:py-24">
                    <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16">

                        <div className="grid overflow-hidden bg-[#20235A] lg:grid-cols-[1.05fr_0.95fr]">

                            <div className="relative min-h-[360px] sm:min-h-[450px] lg:min-h-[570px]">
                                <Image
                                    src="https://ncerc.ac.in/images/dpt/mechatronics-engineering/department-toppers/Mechatronics%20Toppers%20S7.jpeg"
                                    alt="Mechatronics Engineering Department Toppers"
                                    fill
                                    sizes="(min-width: 1024px) 330px, 100vw"
                                    className="absolute inset-0 h-full w-full object-cover"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#20235A]/75 via-transparent to-transparent" />

                                <div className="absolute bottom-7 left-7 sm:bottom-10 sm:left-10">
                                    <div className="flex items-center gap-3">
                                        <span className="flex h-11 w-11 items-center justify-center border border-[#D2B87C]/60 text-[#D2B87C]">
                                            <Trophy size={19} />
                                        </span>

                                        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
                                            Department Toppers
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16 xl:p-20">

                                <p className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                                    B.Tech Mechatronics
                                </p>

                                <h2 className="font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-white sm:text-5xl lg:text-6xl">
                                    A culture of
                                    <br />
                                    <span className="text-[#D2B87C]">
                                        academic excellence.
                                    </span>
                                </h2>

                                <p className="mt-7 max-w-xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
                                    Every strong academic performance represents
                                    dedication, consistency and a commitment to
                                    learning. These students stand among the
                                    academic toppers of their respective
                                    semesters.
                                </p>

                                <div className="mt-10 grid grid-cols-2 gap-px border border-white/10 bg-white/10 sm:grid-cols-3">

                                    <div className="bg-[#20235A] p-5">
                                        <p className="font-serif text-3xl text-[#D2B87C]">
                                            {totalStudents}
                                        </p>

                                        <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-white/45">
                                            Student Records
                                        </p>
                                    </div>

                                    <div className="bg-[#20235A] p-5">
                                        <p className="font-serif text-3xl text-[#D2B87C]">
                                            5
                                        </p>

                                        <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-white/45">
                                            Semester Groups
                                        </p>
                                    </div>

                                    <div className="bg-[#20235A] p-5">
                                        <p className="font-serif text-3xl text-[#D2B87C]">
                                            10
                                        </p>

                                        <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-white/45">
                                            Highest SGPA
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>
                </section>

                {/* =====================================================
                    TOPPER DIRECTORY
                ===================================================== */}
                <section className="bg-[#FAF7F2] py-20 sm:py-24 lg:py-32">
                    <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16">

                        <div className="mb-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

                            <div>
                                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                    Topper Directory
                                </p>

                                <h2 className="font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-[#20235A] sm:text-5xl lg:text-[3.7rem]">
                                    Semester-wise
                                    <br />
                                    <span className="text-[#8F7746]">
                                        achievers.
                                    </span>
                                </h2>
                            </div>

                            <p className="max-w-2xl text-sm leading-7 text-[#1E1917]/65 sm:text-base sm:leading-8">
                                Explore the department toppers across the
                                different semesters, including their
                                registration numbers, SGPA and individual
                                photographs.
                            </p>

                        </div>

                        <div className="space-y-16">

                            {topperSections.map((section, sectionIndex) => (
                                <section key={`${section.semester}-${sectionIndex}`}>

                                    {/* Section heading */}
                                    <div className="mb-7 flex flex-col justify-between gap-5 border-b border-[#20235A]/10 pb-5 sm:flex-row sm:items-end">

                                        <div className="flex items-center gap-5">

                                            <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                                                <BookOpen
                                                    size={20}
                                                    strokeWidth={1.5}
                                                />
                                            </div>

                                            <div>
                                                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                                    {section.academicYear}
                                                </p>

                                                <h3 className="mt-1 font-serif text-2xl text-[#20235A] sm:text-3xl">
                                                    {section.semester}
                                                </h3>
                                            </div>

                                        </div>

                                        <div className="flex items-center gap-3 pl-[68px] sm:pl-0">
                                            <span className="h-px w-8 bg-[#D2B87C]" />

                                            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                                                {section.label}
                                            </span>
                                        </div>

                                    </div>

                                    {/* Student cards */}
                                    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">

                                        {section.students.map((student) => (
                                            <article
                                                key={`${section.semester}-${student.regNo}-${student.name}`}
                                                className="group overflow-hidden border border-[#20235A]/10 bg-white transition duration-500 hover:-translate-y-1 hover:border-[#D2B87C]/60 hover:shadow-[0_20px_50px_rgba(32,35,90,0.08)]"
                                            >

                                                {/* Image */}
                                                <div className="relative aspect-[4/3] overflow-hidden bg-[#F2EFE8]">

                                                    <Image
                                                        src={student.image}
                                                        alt={student.name}
                                                        fill
                                                        sizes="(min-width: 1024px) 330px, 100vw"
                                                        className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.04]"
                                                    />

                                                    <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center bg-[#20235A] font-serif text-sm text-[#D2B87C]">
                                                        {student.order}
                                                    </div>

                                                    <div className="absolute right-4 top-4 flex items-center gap-2 border border-white/30 bg-[#20235A]/85 px-3 py-2 backdrop-blur-sm">
                                                        <Star
                                                            size={12}
                                                            className="text-[#D2B87C]"
                                                        />

                                                        <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white">
                                                            Topper
                                                        </span>
                                                    </div>

                                                </div>

                                                {/* Content */}
                                                <div className="p-6">

                                                    <div className="mb-5 flex items-start justify-between gap-4">

                                                        <div>
                                                            <h4 className="font-serif text-xl leading-tight text-[#20235A] transition group-hover:text-[#8F7746]">
                                                                {student.name}
                                                            </h4>

                                                            <p className="mt-2 text-[11px] uppercase tracking-[0.12em] text-[#1E1917]/45">
                                                                {student.regNo}
                                                            </p>
                                                        </div>

                                                        <div className="shrink-0 text-right">
                                                            <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#8F7746]">
                                                                SGPA
                                                            </p>

                                                            <p className="mt-1 font-serif text-3xl leading-none text-[#20235A]">
                                                                {student.sgpa}
                                                            </p>
                                                        </div>

                                                    </div>

                                                    <div className="flex items-center justify-between border-t border-[#20235A]/10 pt-4">

                                                        <div className="flex items-center gap-2">
                                                            <Medal
                                                                size={15}
                                                                className="text-[#8F7746]"
                                                            />

                                                            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1E1917]/50">
                                                                Department Topper
                                                            </span>
                                                        </div>

                                                        <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#8F7746]">
                                                            {section.label}
                                                        </span>

                                                    </div>

                                                </div>

                                            </article>
                                        ))}

                                    </div>

                                </section>
                            ))}

                        </div>

                    </div>
                </section>

                {/* =====================================================
                    PERFORMANCE HIGHLIGHT
                ===================================================== */}
                <section className="bg-white py-20 sm:py-24 lg:py-28">
                    <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16">

                        <div className="grid gap-8 lg:grid-cols-3">

                            <div className="border border-[#20235A]/10 bg-[#FAF7F2] p-8 sm:p-10">

                                <div className="mb-8 flex h-12 w-12 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                                    <Trophy size={21} strokeWidth={1.5} />
                                </div>

                                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                    Highest Recorded
                                </p>

                                <p className="mt-3 font-serif text-5xl tracking-[-0.03em] text-[#20235A]">
                                    10.0
                                </p>

                                <p className="mt-3 text-sm leading-7 text-[#1E1917]/60">
                                    Perfect SGPA records appear across multiple
                                    semester topper entries.
                                </p>

                            </div>

                            <div className="border border-[#20235A]/10 bg-[#FAF7F2] p-8 sm:p-10">

                                <div className="mb-8 flex h-12 w-12 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                                    <GraduationCap size={21} strokeWidth={1.5} />
                                </div>

                                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                    Programme
                                </p>

                                <p className="mt-3 font-serif text-3xl tracking-[-0.03em] text-[#20235A]">
                                    B.Tech
                                    <br />
                                    Mechatronics
                                </p>

                                <p className="mt-3 text-sm leading-7 text-[#1E1917]/60">
                                    Academic performance from the Department
                                    of Mechatronics Engineering.
                                </p>

                            </div>

                            <div className="border border-[#20235A]/10 bg-[#FAF7F2] p-8 sm:p-10">

                                <div className="mb-8 flex h-12 w-12 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                                    <Award size={21} strokeWidth={1.5} />
                                </div>

                                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                    Recognition
                                </p>

                                <p className="mt-3 font-serif text-3xl tracking-[-0.03em] text-[#20235A]">
                                    Academic
                                    <br />
                                    Excellence
                                </p>

                                <p className="mt-3 text-sm leading-7 text-[#1E1917]/60">
                                    Recognising students who lead their
                                    respective semesters academically.
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
                                <div className="mb-7 flex items-center gap-3">
                                    <span className="h-px w-10 bg-[#D2B87C]" />

                                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                                        Academic Excellence
                                    </span>
                                </div>

                                <h2 className="max-w-4xl font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-white sm:text-5xl lg:text-6xl">
                                    Recognising achievement.
                                    <br />
                                    <span className="text-[#D2B87C]">
                                        Inspiring the next generation.
                                    </span>
                                </h2>

                                <p className="mt-7 max-w-2xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
                                    Explore the wider academic achievements
                                    and recognitions of the Department of
                                    Mechatronics Engineering.
                                </p>
                            </div>

                            <a
                                href="/mechatronics-engineering/academic-excellence"
                                className="group inline-flex w-fit items-center gap-3 border border-[#D2B87C]/50 px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#D2B87C] hover:text-[#20235A]"
                            >
                                <span>Academic Excellence</span>

                                <ArrowRight
                                    size={17}
                                    className="transition-transform group-hover:translate-x-1"
                                />
                            </a>

                        </div>

                    </div>
                </section>

                {/* =====================================================
                    BOTTOM NAVIGATION
                ===================================================== */}
                <section className="bg-[#FAF7F2] py-16 sm:py-20">
                    <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16">

                        <div className="flex flex-col justify-between gap-6 border-t border-[#20235A]/10 pt-8 sm:flex-row sm:items-center">

                            <div>
                                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                    Academic Excellence
                                </p>

                                <p className="mt-2 font-serif text-2xl text-[#20235A]">
                                    Explore more achievements
                                </p>
                            </div>

                            <a
                                href="/mechatronics-engineering/academic-excellence"
                                className="group inline-flex items-center gap-3 text-sm font-semibold text-[#20235A]"
                            >
                                <span>Back to Academic Excellence</span>

                                <span className="flex h-10 w-10 items-center justify-center border border-[#20235A]/15 transition group-hover:border-[#20235A] group-hover:bg-[#20235A] group-hover:text-white">
                                    <ArrowUpRight size={16} />
                                </span>
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