import SiteHeader from '@/components/header/SiteHeader';
import FooterSection from '@/components/home/FooterSection';
import DepartmentNavigation from '../../DepartmentsNavigation/page';
import React from 'react';
import Image from "next/image";
import {
    ArrowRight,
    ArrowUpRight,
    Award,
    Crown,
    GraduationCap,
    Medal,
    Trophy,
} from 'lucide-react'

const rankBatches = [
    {
        batch: '2017–21',
        university: 'APJ KTU',
        students: [
            {
                sno: '01',
                name: 'ANAS MOHAMMED ALI',
                regNo: 'NCE17MC002',
                university: 'APJKTU',
                rank: 'FIRST',
            },
        ],
    },
    {
        batch: '2016–20',
        university: 'APJ KTU',
        students: [
            {
                sno: '01',
                name: 'ADITH SUNDAR C',
                regNo: 'NCE16MC002',
                university: 'APJKTU',
                rank: 'FIRST',
            },
            {
                sno: '02',
                name: 'JITHIN T J',
                regNo: 'NCE16MC023',
                university: 'APJKTU',
                rank: 'SECOND',
            },
        ],
    },
    {
        batch: '2015–19',
        university: 'APJ KTU',
        students: [
            {
                sno: '01',
                name: 'MOHAMMED HANI SHERIF',
                regNo: 'NCE15MC036',
                university: 'APJKTU',
                rank: 'FIRST',
            },
            {
                sno: '02',
                name: 'DARIL SILVA',
                regNo: 'NCE15MC019',
                university: 'APJKTU',
                rank: 'SECOND',
            },
            {
                sno: '03',
                name: 'ALIND ROY',
                regNo: 'NCE15MC010',
                university: 'APJKTU',
                rank: 'THIRD',
            },
            {
                sno: '04',
                name: 'ATHIRA MENON',
                regNo: 'NCE15MC015',
                university: 'APJKTU',
                rank: 'FIFTH',
            },
            {
                sno: '05',
                name: 'ABHIJITH DINESH',
                regNo: 'NCE15MC001',
                university: 'APJKTU',
                rank: 'SIXTH',
            },
            {
                sno: '06',
                name: 'YADUKRISHNAN K',
                regNo: 'NCE15MC061',
                university: 'APJKTU',
                rank: 'SEVENTH',
            },
            {
                sno: '07',
                name: 'RESHMA S',
                regNo: 'NCE15MC046',
                university: 'APJKTU',
                rank: 'EIGTH',
            },
            {
                sno: '08',
                name: 'JUSTIN JOSE',
                regNo: 'NCE15MC032',
                university: 'APJKTU',
                rank: 'NINETH',
            },
            {
                sno: '09',
                name: 'AJAY ANAND',
                regNo: 'NCE15MC005',
                university: 'APJKTU',
                rank: 'TENTH',
            },
        ],
    },
    {
        batch: '2014–18',
        university: 'CALICUT UNIVERSITY',
        students: [
            {
                sno: '01',
                name: 'SIDHARTH N PISHORODY',
                regNo: 'NCAOEMT055',
                university: 'CALICUT UNIVERSITY',
                rank: 'FIRST',
            },
            {
                sno: '02',
                name: 'GOPIKA M S',
                regNo: 'NCAOEMT029',
                university: 'CALICUT UNIVERSITY',
                rank: 'SECOND',
            },
        ],
    },
    {
        batch: '2013–17',
        university: 'CALICUT UNIVERSITY',
        students: [
            {
                sno: '01',
                name: 'SRUTHY S NAIR',
                regNo: 'NCANEMT049',
                university: 'CALICUT UNIVERSITY',
                rank: 'FIRST',
            },
            {
                sno: '02',
                name: 'IRSHAD MOHAMMED GHANI',
                regNo: 'NCANEMT028',
                university: 'CALICUT UNIVERSITY',
                rank: 'SECOND',
            },
            {
                sno: '03',
                name: 'SREEJITH P G',
                regNo: 'NCANEMT048',
                university: 'CALICUT UNIVERSITY',
                rank: 'THIRD',
            },
        ],
    },
]

const highlightImages = [
    'https://ncerc.ac.in/images/dpt/mechatronics-engineering/department-toppers/anas.jpg',
    'https://ncerc.ac.in/content/img/seminar-mec/topper-mtr.jpg',
    'https://ncerc.ac.in/content/download/calicutTOPPERS.jpg',
    'https://ncerc.ac.in/content/download/KTUTOPPERS.jpg',
]

const getRankStyle = (rank: string) => {
    switch (rank) {
        case 'FIRST':
            return {
                wrapper: 'bg-[#D2B87C]/15 border-[#D2B87C]/40',
                text: 'text-[#8F7746]',
                icon: Crown,
            }
        case 'SECOND':
            return {
                wrapper: 'bg-[#20235A]/5 border-[#20235A]/15',
                text: 'text-[#20235A]',
                icon: Medal,
            }
        case 'THIRD':
            return {
                wrapper: 'bg-[#8F7746]/10 border-[#8F7746]/20',
                text: 'text-[#8F7746]',
                icon: Award,
            }
        default:
            return {
                wrapper: 'bg-[#FAF7F2] border-[#20235A]/10',
                text: 'text-[#20235A]/65',
                icon: Award,
            }
    }
}

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

                        <div className="mb-12 flex flex-wrap items-center gap-3 text-[11px] font-medium uppercase tracking-[0.18em] text-white/45">
                            <span>Mechatronics Engineering</span>
                            <span className="text-[#D2B87C]">/</span>
                            <span>Academic Excellence</span>
                            <span className="text-[#D2B87C]">/</span>
                            <span className="text-[#D2B87C]">University Rank Holders</span>
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
                                    University
                                    <br />
                                    <span className="text-[#D2B87C]">
                                        Rank Holders
                                    </span>
                                </h1>
                            </div>

                            <div className="lg:pb-2">
                                <p className="max-w-xl text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
                                    Celebrating the academic excellence of students
                                    from the Department of Mechatronics Engineering
                                    who have secured university ranks across
                                    successive graduating batches.
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
                    QUICK INFORMATION STRIP
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
                                Batches
                            </p>
                            <p className="mt-2 font-serif text-xl text-[#20235A]">
                                2013 – 2021
                            </p>
                        </div>

                        <div className="px-0 py-7 md:px-7 lg:px-8">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                Universities
                            </p>
                            <p className="mt-2 font-serif text-xl text-[#20235A]">
                                KTU & Calicut
                            </p>
                        </div>

                        <div className="px-0 py-7 md:px-7 lg:px-8">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                Recognition
                            </p>
                            <p className="mt-2 font-serif text-xl text-[#20235A]">
                                University Ranks
                            </p>
                        </div>

                    </div>
                </section>

                {/* =====================================================
                    INTRODUCTION
                ===================================================== */}
                <section className="bg-[#FAF7F2] py-20 sm:py-24 lg:py-32">
                    <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16">

                        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">

                            <div>
                                <div className="mb-6 flex items-center gap-3">
                                    <span className="h-px w-10 bg-[#D2B87C]" />
                                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                        A Record of Excellence
                                    </span>
                                </div>

                                <h2 className="max-w-xl font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-[#20235A] sm:text-5xl lg:text-[3.7rem]">
                                    Academic distinction,
                                    <br />
                                    <span className="text-[#8F7746]">
                                        batch after batch.
                                    </span>
                                </h2>
                            </div>

                            <div className="max-w-3xl space-y-8 text-[15px] leading-8 text-[#1E1917]/70 sm:text-base sm:leading-[1.95]">
                                <p>
                                    The Department of Mechatronics Engineering
                                    takes pride in the academic achievements of
                                    its students. Several graduates have secured
                                    distinguished positions in university
                                    examinations under APJ Abdul Kalam
                                    Technological University and the University
                                    of Calicut.
                                </p>

                                <p>
                                    The rank holders listed below represent the
                                    department&apos;s commitment to academic
                                    excellence, consistent learning and
                                    achievement across different graduating
                                    batches.
                                </p>
                            </div>

                        </div>
                    </div>
                </section>

                {/* =====================================================
                    IMAGE HIGHLIGHTS
                ===================================================== */}
                <section className="bg-white py-16 sm:py-20 lg:py-24">
                    <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16">

                        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                            <div>
                                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                    Celebrating Achievement
                                </p>

                                <h2 className="font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-[#20235A] sm:text-5xl">
                                    University
                                    <br />
                                    <span className="text-[#8F7746]">
                                        achievers.
                                    </span>
                                </h2>
                            </div>

                            <p className="max-w-md text-sm leading-7 text-[#1E1917]/60">
                                A visual record of students who have brought
                                academic recognition to the Department of
                                Mechatronics Engineering.
                            </p>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            {highlightImages.map((image, index) => (
                                <div
                                    key={image}
                                    className={`group relative overflow-hidden bg-[#F2EFE8] ${index === 0
                                        ? 'sm:row-span-2 lg:h-[620px]'
                                        : 'h-[300px]'
                                        }`}
                                >
                                    <Image
                                        src={image}
                                        alt={`Mechatronics university rank holder ${index + 1}`}
                                        fill
                                        sizes="(min-width: 1024px) 330px, 100vw"
                                        className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                                    />

                                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#20235A]/80 via-[#20235A]/20 to-transparent p-5 pt-16">
                                        <div className="flex items-center gap-3">
                                            <span className="flex h-8 w-8 items-center justify-center border border-[#D2B87C]/50 text-[#D2B87C]">
                                                <Medal size={15} />
                                            </span>

                                            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/80">
                                                Rank Holder
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </section>

                {/* =====================================================
                    RANK HOLDERS
                ===================================================== */}
                <section className="bg-[#FAF7F2] py-20 sm:py-24 lg:py-32">
                    <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16">

                        <div className="mb-14 grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
                            <div>
                                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                    University Recognition
                                </p>

                                <h2 className="font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-[#20235A] sm:text-5xl lg:text-[3.7rem]">
                                    B.Tech
                                    <br />
                                    <span className="text-[#8F7746]">
                                        Mechatronics.
                                    </span>
                                </h2>
                            </div>

                            <p className="max-w-2xl text-sm leading-7 text-[#1E1917]/65 sm:text-base sm:leading-8">
                                University rank holders from the B.Tech
                                Mechatronics Engineering programme, presented
                                batch-wise with their registration details,
                                university and rank secured.
                            </p>
                        </div>

                        <div className="space-y-8">

                            {rankBatches.map((batch) => (
                                <article
                                    key={batch.batch}
                                    className="overflow-hidden border border-[#20235A]/10 bg-white"
                                >

                                    {/* Batch header */}
                                    <div className="flex flex-col justify-between gap-5 border-b border-[#20235A]/10 px-6 py-6 sm:px-8 md:flex-row md:items-center lg:px-10">

                                        <div className="flex items-center gap-5">
                                            <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                                                <GraduationCap size={21} strokeWidth={1.5} />
                                            </div>

                                            <div>
                                                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                                    Graduating Batch
                                                </p>

                                                <h3 className="mt-1 font-serif text-2xl text-[#20235A] sm:text-3xl">
                                                    {batch.batch} Batch
                                                </h3>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <span className="h-px w-8 bg-[#D2B87C]" />
                                            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                                                {batch.university}
                                            </span>
                                        </div>

                                    </div>

                                    {/* Desktop table */}
                                    <div className="hidden overflow-x-auto md:block">
                                        <table className="w-full border-collapse">
                                            <thead>
                                                <tr className="border-b border-[#20235A]/10 bg-[#FAF7F2] text-left">
                                                    <th className="w-20 px-8 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                                                        S No.
                                                    </th>

                                                    <th className="px-5 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                                                        Name
                                                    </th>

                                                    <th className="px-5 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                                                        Reg. Number
                                                    </th>

                                                    <th className="px-5 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                                                        University
                                                    </th>

                                                    <th className="w-48 px-8 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                                                        Rank
                                                    </th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {batch.students.map((student) => {
                                                    const rankStyle = getRankStyle(student.rank)
                                                    const RankIcon = rankStyle.icon

                                                    return (
                                                        <tr
                                                            key={`${batch.batch}-${student.regNo}`}
                                                            className="group border-b border-[#20235A]/10 last:border-b-0"
                                                        >
                                                            <td className="px-8 py-6">
                                                                <span className="font-serif text-lg text-[#20235A]/45">
                                                                    {student.sno}
                                                                </span>
                                                            </td>

                                                            <td className="px-5 py-6">
                                                                <span className="font-serif text-lg text-[#20235A] transition group-hover:text-[#8F7746]">
                                                                    {student.name}
                                                                </span>
                                                            </td>

                                                            <td className="px-5 py-6">
                                                                <span className="text-sm tracking-wide text-[#1E1917]/55">
                                                                    {student.regNo}
                                                                </span>
                                                            </td>

                                                            <td className="px-5 py-6">
                                                                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1E1917]/55">
                                                                    {student.university}
                                                                </span>
                                                            </td>

                                                            <td className="px-8 py-6">
                                                                <span
                                                                    className={`inline-flex items-center gap-2 border px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] ${rankStyle.wrapper} ${rankStyle.text}`}
                                                                >
                                                                    <RankIcon size={13} />
                                                                    {student.rank}
                                                                </span>
                                                            </td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </table>
                                    </div>

                                    {/* Mobile cards */}
                                    <div className="divide-y divide-[#20235A]/10 md:hidden">
                                        {batch.students.map((student) => {
                                            const rankStyle = getRankStyle(student.rank)
                                            const RankIcon = rankStyle.icon

                                            return (
                                                <div
                                                    key={`${batch.batch}-${student.regNo}-mobile`}
                                                    className="p-6"
                                                >
                                                    <div className="mb-5 flex items-start justify-between gap-4">
                                                        <div>
                                                            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                                                                {student.sno}
                                                            </p>

                                                            <h4 className="font-serif text-xl leading-tight text-[#20235A]">
                                                                {student.name}
                                                            </h4>
                                                        </div>

                                                        <span
                                                            className={`inline-flex shrink-0 items-center gap-2 border px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.12em] ${rankStyle.wrapper} ${rankStyle.text}`}
                                                        >
                                                            <RankIcon size={12} />
                                                            {student.rank}
                                                        </span>
                                                    </div>

                                                    <div className="grid grid-cols-2 gap-4 border-t border-[#20235A]/10 pt-4">
                                                        <div>
                                                            <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#8F7746]">
                                                                Reg. Number
                                                            </p>
                                                            <p className="mt-1 text-sm text-[#1E1917]/65">
                                                                {student.regNo}
                                                            </p>
                                                        </div>

                                                        <div>
                                                            <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#8F7746]">
                                                                University
                                                            </p>
                                                            <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-[#1E1917]/60">
                                                                {student.university}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>

                                </article>
                            ))}

                        </div>

                    </div>
                </section>

                {/* =====================================================
                    RECOGNITION HIGHLIGHT
                ===================================================== */}
                <section className="bg-white py-20 sm:py-24 lg:py-28">
                    <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16">

                        <div className="grid overflow-hidden bg-[#20235A] lg:grid-cols-[0.85fr_1.15fr]">

                            <div className="relative min-h-[360px] overflow-hidden lg:min-h-[500px]">
                                <Image
                                    src="https://ncerc.ac.in/images/dpt/mechatronics-engineering/department-toppers/anas.jpg"
                                    alt="Mechatronics Engineering university rank holder"
                                    fill
                                    sizes="(min-width: 1024px) 330px, 100vw"
                                    className="absolute inset-0 h-full w-full object-cover"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#20235A]/80 via-transparent to-transparent" />

                                <div className="absolute bottom-7 left-7 flex items-center gap-3 sm:bottom-10 sm:left-10">
                                    <span className="flex h-11 w-11 items-center justify-center border border-[#D2B87C]/60 text-[#D2B87C]">
                                        <Trophy size={19} />
                                    </span>

                                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
                                        University Recognition
                                    </span>
                                </div>
                            </div>

                            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16 xl:p-20">

                                <p className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                                    A Culture of Achievement
                                </p>

                                <h2 className="max-w-xl font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-white sm:text-5xl lg:text-6xl">
                                    Excellence that
                                    <br />
                                    <span className="text-[#D2B87C]">
                                        inspires the next.
                                    </span>
                                </h2>

                                <p className="mt-7 max-w-xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
                                    University ranks are more than individual
                                    distinctions. They reflect a culture of
                                    focused learning, academic discipline and
                                    continuous pursuit of excellence within the
                                    department.
                                </p>

                                <div className="mt-10 flex flex-wrap gap-4">
                                    <a
                                        href="/mechatronics-engineering/academic-excellence"
                                        className="group inline-flex items-center gap-3 border border-[#D2B87C]/50 px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#D2B87C] hover:text-[#20235A]"
                                    >
                                        <span>Academic Excellence</span>
                                        <ArrowRight
                                            size={17}
                                            className="transition-transform group-hover:translate-x-1"
                                        />
                                    </a>
                                </div>

                            </div>

                        </div>

                    </div>
                </section>

                {/* =====================================================
                    FOOTER CTA
                ===================================================== */}
                <section className="bg-[#FAF7F2] py-20 sm:py-24 lg:py-28">
                    <div className="mx-auto max-w-[1400px] px-6 text-center sm:px-8 lg:px-12 xl:px-16">

                        <div className="mx-auto max-w-3xl">

                            <div className="mx-auto mb-7 flex w-fit items-center gap-3">
                                <span className="h-px w-10 bg-[#D2B87C]" />
                                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                    Academic Excellence
                                </span>
                                <span className="h-px w-10 bg-[#D2B87C]" />
                            </div>

                            <h2 className="font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-[#20235A] sm:text-5xl lg:text-6xl">
                                Recognising achievement.
                                <br />
                                <span className="text-[#8F7746]">
                                    Inspiring excellence.
                                </span>
                            </h2>

                            <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-[#1E1917]/60 sm:text-base sm:leading-8">
                                Explore the wider academic achievements and
                                recognitions of the Department of Mechatronics
                                Engineering.
                            </p>

                            <a
                                href="/mechatronics-engineering/academic-excellence"
                                className="group mt-9 inline-flex items-center gap-3 border border-[#20235A]/20 px-6 py-4 text-sm font-semibold text-[#20235A] transition hover:border-[#20235A] hover:bg-[#20235A] hover:text-white"
                            >
                                <span>Back to Academic Excellence</span>
                                <ArrowUpRight
                                    size={17}
                                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
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