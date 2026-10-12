import SiteHeader from '@/components/header/SiteHeader';
import FooterSection from '@/components/home/FooterSection';
import DepartmentNavigation from '../../DepartmentsNavigation/DepartmentsNavigation';
import React from 'react';
import {
    ArrowRight,
    Building2,
    GraduationCap,
    Wifi,
    Zap,
} from 'lucide-react';
import Image from 'next/image';
const classrooms = [
    {
        number: '01',
        title: 'Aryabhatta Block',
        image:
            'https://ncerc.ac.in/images/dpt/mechatronics-engineering/CLASS-ROOMS1.jpg',
        description:
            'The Aryabhatta Block forms one of the key academic spaces of NCERC, providing a structured environment for lectures, tutorials, faculty interaction and academic activities.',
    },
    {
        number: '02',
        title: 'Bhaskara Block',
        image:
            'https://ncerc.ac.in/images/dpt/mechatronics-engineering/CLASS-ROOMS2.jpg',
        description:
            'The Bhaskara Block provides well-organized academic spaces designed to support classroom teaching, tutorials, faculty activities and the day-to-day learning requirements of students.',
    },
    {
        number: '03',
        title: 'Class Rooms',
        image:
            'https://ncerc.ac.in/images/dpt/mechatronics-engineering/CLASS-ROOMS3.jpg',
        description:
            'The classrooms of the Mechatronics Engineering programme provide a comfortable and focused setting for effective teaching, interaction, discussion and collaborative learning.',
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
                            <span className="text-white/75">Class Rooms</span>
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
                                Class Rooms
                                <span className="block text-[#D2B87C]">
                                    Learning Spaces
                                </span>
                            </h1>

                            <p className="mt-8 max-w-2xl text-sm leading-7 text-white/65 sm:mt-10 sm:text-base sm:leading-8">
                                Well-planned academic spaces designed to support
                                effective teaching, focused learning,
                                interaction and the overall academic growth of
                                Mechatronics Engineering students.
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
                                Classrooms
                            </p>
                            <p className="mt-2 font-serif text-xl text-[#20235A]">
                                04 Nos.
                            </p>
                        </div>

                        <div className="px-0 py-7 sm:px-6 lg:py-8">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                Seminar Hall
                            </p>
                            <p className="mt-2 font-serif text-xl text-[#20235A]">
                                01 No.
                            </p>
                        </div>

                        <div className="px-0 py-7 sm:px-6 lg:py-8">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                Internet Facility
                            </p>
                            <p className="mt-2 font-serif text-xl text-[#20235A]">
                                64 Mbps + Wi-Fi
                            </p>
                        </div>

                        <div className="px-0 py-7 sm:px-6 lg:py-8 lg:last:pr-0">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                Institution Area
                            </p>
                            <p className="mt-2 font-serif text-xl text-[#20235A]">
                                26,228 Sq. Mts.
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
                            <div>
                                <div className="flex items-center gap-4">
                                    <span className="h-px w-10 bg-[#D2B87C]" />
                                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                        Academic Environment
                                    </span>
                                </div>

                                <h2 className="mt-6 max-w-xl font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-[#20235A] sm:text-5xl lg:text-[3.7rem]">
                                    Spaces created for
                                    <span className="block text-[#8F7746]">
                                        meaningful learning.
                                    </span>
                                </h2>
                            </div>

                            <div className="space-y-8 text-[15px] leading-8 text-[#1E1917]/70 sm:text-base sm:leading-[1.95]">
                                <p>
                                    Nehru College of Engineering and Research
                                    Centre follows the norms laid down by AICTE
                                    and APJ Abdul Kalam Technological University
                                    for creating and enhancing infrastructure
                                    facilities that support effective teaching
                                    and learning.
                                </p>

                                <p>
                                    The Mechatronics Engineering programme has
                                    sufficient classrooms, seminar halls,
                                    laboratories, library facilities with ILMS,
                                    and internet connectivity including Wi-Fi.
                                    The entire academic environment is
                                    maintained to provide students with a clean,
                                    fresh and focused atmosphere for their
                                    academic and career progression.
                                </p>

                                <p>
                                    The institute follows a policy of optimum
                                    utilization of available spaces and
                                    infrastructure to achieve the best possible
                                    academic outcomes. These facilities are
                                    utilized beyond regular college hours for
                                    certificate courses, co-curricular and
                                    extra-curricular activities, parent-teacher
                                    meetings, campus recruitment training,
                                    recruitment drives, seminars and
                                    conferences.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================
                    ACADEMIC BLOCKS
                ========================================================= */}
                <section className="bg-[#FAF7F2] py-20 sm:py-24 lg:py-32">
                    <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16">
                        <div className="max-w-3xl">
                            <div className="flex items-center gap-4">
                                <span className="h-px w-10 bg-[#D2B87C]" />
                                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                    Academic Blocks
                                </span>
                            </div>

                            <h2 className="mt-6 font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-[#20235A] sm:text-5xl lg:text-[3.7rem]">
                                Built around the
                                <span className="block">
                                    academic experience.
                                </span>
                            </h2>

                            <p className="mt-7 text-[15px] leading-8 text-[#1E1917]/70 sm:text-base sm:leading-[1.9]">
                                The Academic Blocks — Aryabhatta and Bhaskara —
                                provide the essential academic infrastructure
                                required for lecture rooms, tutorial rooms,
                                staff offices and offices for Heads of
                                Departments. The blocks include lecture
                                theatres, tutorial rooms and separate cabins
                                for faculty members.
                            </p>
                        </div>

                        {/* Feature cards */}
                        <div className="mt-14 grid gap-px overflow-hidden border border-[#20235A]/10 bg-[#20235A]/10 sm:grid-cols-2 lg:grid-cols-4">
                            <div className="bg-white p-7 sm:p-8">
                                <Building2 className="h-6 w-6 text-[#8F7746]" />

                                <h3 className="mt-7 font-serif text-2xl text-[#20235A]">
                                    Academic Blocks
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-[#1E1917]/65">
                                    Aryabhatta and Bhaskara blocks provide
                                    dedicated spaces for teaching and academic
                                    activities.
                                </p>
                            </div>

                            <div className="bg-white p-7 sm:p-8">
                                <GraduationCap className="h-6 w-6 text-[#8F7746]" />

                                <h3 className="mt-7 font-serif text-2xl text-[#20235A]">
                                    Learning Spaces
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-[#1E1917]/65">
                                    Lecture theatres and tutorial rooms support
                                    focused classroom learning and interaction.
                                </p>
                            </div>

                            <div className="bg-white p-7 sm:p-8">
                                <Wifi className="h-6 w-6 text-[#8F7746]" />

                                <h3 className="mt-7 font-serif text-2xl text-[#20235A]">
                                    Connectivity
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-[#1E1917]/65">
                                    Internet connectivity and Wi-Fi support
                                    modern academic activities and digital
                                    learning.
                                </p>
                            </div>

                            <div className="bg-white p-7 sm:p-8">
                                <Zap className="h-6 w-6 text-[#8F7746]" />

                                <h3 className="mt-7 font-serif text-2xl text-[#20235A]">
                                    Power Backup
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-[#1E1917]/65">
                                    An additional 200 KVA generator supports
                                    uninterrupted power supply across the
                                    institute.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================
                    CLASSROOM GALLERY
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
                                    Explore our
                                    <span className="block text-[#8F7746]">
                                        classroom spaces.
                                    </span>
                                </h2>
                            </div>

                            <p className="max-w-md text-sm leading-7 text-[#1E1917]/60 sm:text-base">
                                Academic spaces designed to provide students
                                and faculty with a comfortable and productive
                                environment throughout the learning journey.
                            </p>
                        </div>

                        <div className="space-y-20 sm:space-y-24 lg:space-y-32">
                            {classrooms.map((classroom, index) => (
                                <article
                                    key={classroom.number}
                                    className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16 xl:gap-20"
                                >
                                    {/* Image */}
                                    <div
                                        className={
                                            index % 2 === 1
                                                ? 'lg:order-2'
                                                : ''
                                        }
                                    >
                                        <div className="relative">
                                            <div className="absolute -left-3 -top-3 z-10 flex h-14 w-14 items-center justify-center border border-[#D2B87C] bg-[#FAF7F2] sm:-left-4 sm:-top-4 sm:h-16 sm:w-16">
                                                <span className="font-serif text-xl text-[#8F7746]">
                                                    {classroom.number}
                                                </span>
                                            </div>

                                            <div className="overflow-hidden">
                                                <Image
                                                    src={classroom.image}
                                                    alt={classroom.title}
                                                    fill
                                                    sizes="(min-width: 1024px) 330px, 100vw"
                                                    className="aspect-[16/10] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                                                />
                                            </div>

                                            <div className="mt-4 flex items-center justify-between border-b border-[#20235A]/10 pb-4">
                                                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                                    NCERC Campus
                                                </span>

                                                <span className="text-[11px] text-[#1E1917]/45">
                                                    Academic Infrastructure
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div
                                        className={
                                            index % 2 === 1
                                                ? 'lg:order-1'
                                                : ''
                                        }
                                    >
                                        <div className="flex items-center gap-4">
                                            <span className="h-px w-10 bg-[#D2B87C]" />
                                            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                                {classroom.number} / Academic
                                                Space
                                            </span>
                                        </div>

                                        <h3 className="mt-6 font-serif text-3xl leading-[1.08] tracking-[-0.025em] text-[#20235A] sm:text-4xl lg:text-[2.7rem]">
                                            {classroom.title}
                                        </h3>

                                        <p className="mt-7 text-[15px] leading-8 text-[#1E1917]/70 sm:text-base sm:leading-[1.9]">
                                            {classroom.description}
                                        </p>

                                        <div className="mt-8 border-t border-[#20235A]/10 pt-6">
                                            <div className="flex items-center justify-between">
                                                <span className="font-serif text-lg text-[#20235A]">
                                                    Learning Environment
                                                </span>

                                                <ArrowRight className="h-5 w-5 text-[#8F7746]" />
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* =========================================================
                    INFRASTRUCTURE NOTE
                ========================================================= */}
                <section className="bg-white py-20 sm:py-24 lg:py-32">
                    <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16">
                        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20 xl:gap-28">
                            <div>
                                <div className="flex items-center gap-4">
                                    <span className="h-px w-10 bg-[#D2B87C]" />
                                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                        Infrastructure & Utilisation
                                    </span>
                                </div>

                                <h2 className="mt-6 font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-[#20235A] sm:text-5xl lg:text-[3.7rem]">
                                    Infrastructure that
                                    <span className="block">
                                        works beyond the classroom.
                                    </span>
                                </h2>
                            </div>

                            <div className="space-y-8 text-[15px] leading-8 text-[#1E1917]/70 sm:text-base sm:leading-[1.95]">
                                <p>
                                    The available physical infrastructure of
                                    the institution is optimally utilized
                                    beyond regular college hours. The spaces
                                    support a wide range of academic,
                                    professional and student-focused
                                    activities.
                                </p>

                                <p>
                                    These include certificate courses,
                                    co-curricular and extra-curricular
                                    activities, parent-teacher meetings,
                                    campus recruitment training classes,
                                    recruitment drives, seminars, conferences
                                    and other institutional programmes.
                                </p>

                                <div className="grid gap-6 border-t border-[#20235A]/10 pt-7 sm:grid-cols-3">
                                    <div>
                                        <p className="font-serif text-2xl text-[#20235A]">
                                            26,228
                                        </p>
                                        <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                                            Sq. Mts. Campus Area
                                        </p>
                                    </div>

                                    <div>
                                        <p className="font-serif text-2xl text-[#20235A]">
                                            200 KVA
                                        </p>
                                        <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                                            Additional Generator
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
                                    An environment designed
                                    <span className="block text-[#D2B87C]">
                                        for progress.
                                    </span>
                                </h2>

                                <p className="mt-7 max-w-2xl text-base leading-8 text-white/60">
                                    From classrooms and laboratories to
                                    academic blocks and digital
                                    infrastructure, NCERC provides spaces that
                                    support students throughout their academic
                                    journey.
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