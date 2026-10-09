import SiteHeader from '@/components/header/SiteHeader';
import FooterSection from '@/components/home/FooterSection';
import DepartmentNavigation from "../DepartmentsNavigation/page";

import {
    ArrowRight,
    Award,
    Cpu,
    GraduationCap,
    Quote,
    Sparkles,
} from 'lucide-react'
import React from 'react'

/* =========================================================
   HOD PHOTO
   Replace this value with the actual HOD photo later.
   Example:
   const hodImage = '/images/mechatronics/hod.jpg'
========================================================= */
const hodImage = '/images/alumins/alumini.png'

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
                                HOD&apos;s Desk
                            </span>
                        </div>

                        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.45fr] lg:items-end">

                            {/* Heading */}
                            <div>
                                <div className="mb-5 flex items-center gap-4">
                                    <span className="h-px w-10 bg-[#D2B87C]" />

                                    <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                        From the Head of Department
                                    </span>
                                </div>

                                <h1 className="max-w-4xl font-serif text-[3rem] font-medium leading-[1.02] tracking-[-0.035em] text-white sm:text-[4.4rem] lg:text-[5.3rem] xl:text-[5.8rem]">
                                    HOD&apos;s
                                    <span className="block text-[#D2B87C]">
                                        Message
                                    </span>
                                </h1>
                            </div>

                            {/* Hero Description */}
                            <div className="lg:border-l lg:border-white/15 lg:pl-10">
                                <p className="max-w-sm text-sm leading-7 text-white/65 lg:ml-auto">
                                    A message on innovation, interdisciplinary
                                    learning and the journey towards creating
                                    future-ready Mechatronics engineers.
                                </p>
                            </div>

                        </div>
                    </div>
                </section>

                {/* ------navigations-------- */}
                <DepartmentNavigation />
                {/* =====================================================
                    DEPARTMENT INFORMATION STRIP
                ====================================================== */}
                <section className="border-b border-[#20235A]/10 bg-white">
                    <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16">

                        <div className="grid sm:grid-cols-3">

                            {/* Department */}
                            <div className="border-b border-[#20235A]/10 py-7 sm:border-b-0 sm:border-r sm:pr-8 lg:py-9">
                                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                    Department
                                </p>

                                <p className="mt-2 font-serif text-xl text-[#20235A]">
                                    Mechatronics Engineering
                                </p>
                            </div>

                            {/* HOD */}
                            <div className="border-b border-[#20235A]/10 py-7 sm:border-b-0 sm:border-r sm:px-8 lg:py-9">
                                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                    Head of Department
                                </p>

                                <p className="mt-2 font-serif text-xl text-[#20235A]">
                                    Dr. Anto Francis Cherussery
                                </p>
                            </div>

                            {/* Institution */}
                            <div className="py-7 sm:pl-8 lg:py-9">
                                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                    Institution
                                </p>

                                <p className="mt-2 font-serif text-xl text-[#20235A]">
                                    NCERC
                                </p>
                            </div>

                        </div>
                    </div>
                </section>

                {/* =====================================================
                    HOD MESSAGE
                ====================================================== */}
                <section className="bg-[#FAF7F2] py-20 sm:py-24 lg:py-32">
                    <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16">

                        <div className="grid gap-14 lg:grid-cols-[0.55fr_1.45fr] lg:gap-20">

                            {/* =================================================
                                LEFT HOD PROFILE
                            ================================================= */}
                            <aside className="lg:sticky lg:top-28 lg:self-start">

                                {/* HOD PHOTO PLACEHOLDER */}
                                <div className="overflow-hidden border border-[#20235A]/10 bg-[#F2EFE8]">

                                    <div className="relative aspect-[4/5] w-full">

                                        {hodImage ? (
                                            <img
                                                src={hodImage}
                                                alt="Dr. Anto Francis Cherussery"
                                                className="h-full w-full object-cover"
                                            />
                                        ) : (
                                            <div className="flex h-full w-full flex-col items-center justify-center px-8 text-center">

                                                {/* <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#D2B87C] bg-[#20235A]">
                                                    <GraduationCap
                                                        size={32}
                                                        strokeWidth={1.2}
                                                        className="text-[#D2B87C]"
                                                    />
                                                </div> */}

                                                {/* <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                                    HOD Photograph
                                                </p> */}

                                                {/* <p className="mt-2 max-w-[220px] text-xs leading-6 text-[#1E1917]/45">
                                                    Photo placeholder
                                                    <br />
                                                    Replace with the official
                                                    HOD photograph
                                                </p> */}

                                            </div>
                                        )}

                                    </div>

                                    {/* HOD Details */}
                                    <div className="border-t border-[#20235A]/10 bg-white p-6 sm:p-7">

                                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                            Head of the Department
                                        </p>

                                        <h3 className="mt-3 font-serif text-2xl leading-tight text-[#20235A]">
                                            Dr. Anto Francis Cherussery
                                        </h3>

                                        <p className="mt-2 text-sm leading-6 text-[#1E1917]/55">
                                            Department of Mechatronics
                                            Engineering
                                        </p>

                                    </div>

                                </div>

                                {/* Small Info */}
                                <div className="mt-6 grid grid-cols-2 border-t border-[#20235A]/10">

                                    <div className="py-5 pr-4">
                                        <Award
                                            size={19}
                                            strokeWidth={1.4}
                                            className="text-[#8F7746]"
                                        />

                                        <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1E1917]/45">
                                            Academic
                                        </p>

                                        <p className="mt-1 text-sm font-medium text-[#20235A]">
                                            Excellence
                                        </p>
                                    </div>

                                    <div className="border-l border-[#20235A]/10 py-5 pl-5">
                                        <Cpu
                                            size={19}
                                            strokeWidth={1.4}
                                            className="text-[#8F7746]"
                                        />

                                        <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1E1917]/45">
                                            Focus
                                        </p>

                                        <p className="mt-1 text-sm font-medium text-[#20235A]">
                                            Innovation
                                        </p>
                                    </div>

                                </div>

                            </aside>

                            {/* =================================================
                                MESSAGE CONTENT
                            ================================================= */}
                            <article className="max-w-4xl">

                                {/* Section Label */}
                                <div className="mb-10">
                                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                                        From the HOD&apos;s Desk
                                    </p>

                                    <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-[#20235A] sm:text-5xl lg:text-[3.7rem]">
                                        Innovation, learning &
                                        technological excellence.
                                    </h2>
                                </div>

                                {/* Quote */}
                                <div className="relative mb-12 border-y border-[#20235A]/15 py-9 sm:py-10">

                                    <Quote
                                        size={38}
                                        strokeWidth={1}
                                        className="absolute left-0 top-7 text-[#D2B87C]"
                                    />

                                    <p className="pl-14 font-serif text-xl leading-9 text-[#20235A] sm:text-2xl sm:leading-10">
                                        &ldquo;Mechatronics is about synergy —
                                        bringing together diverse engineering
                                        principles to design efficient,
                                        adaptive, and intelligent solutions for
                                        real-world challenges.&rdquo;
                                    </p>

                                </div>

                                {/* Full Message */}
                                <div className="space-y-8 text-[15px] leading-8 text-[#1E1917]/70 sm:text-base sm:leading-[1.95]">

                                    <p>
                                        Welcome to the Department of Mechatronics
                                        Engineering at Nehru College of
                                        Engineering and Research Centre, where
                                        innovation, interdisciplinary learning,
                                        and technological excellence converge to
                                        shape future-ready engineers. It is both
                                        an honour and a privilege to lead a
                                        vibrant community of passionate
                                        educators and aspiring engineers who are
                                        committed to pushing the boundaries of
                                        knowledge and creativity.
                                    </p>

                                    <p>
                                        Mechatronics is an exciting and rapidly
                                        advancing multidisciplinary domain that
                                        harmoniously integrates Mechanical,
                                        Electronics, Electrical, Robotics,
                                        Instrumentation, and Computer Engineering
                                        to develop intelligent machines,
                                        automated systems, and smart products.
                                        At its heart, mechatronics is about
                                        synergy—bringing together diverse
                                        engineering principles to design
                                        efficient, adaptive, and intelligent
                                        solutions for real-world challenges. Our
                                        academic framework is carefully
                                        structured to balance strong theoretical
                                        foundations with immersive practical
                                        training, enabling students to gain both
                                        conceptual clarity and applied
                                        expertise.
                                    </p>

                                    <p>
                                        The department is driven by a
                                        learner-centric approach that encourages
                                        critical thinking, innovation, and
                                        problem-solving. Through project-based
                                        learning, research initiatives,
                                        technical workshops, internships,
                                        industry collaborations, and
                                        participation in national and
                                        international competitions, our students
                                        are empowered to explore emerging
                                        technologies such as robotics,
                                        automation, embedded systems, IoT,
                                        artificial intelligence, and smart
                                        manufacturing. We strive to cultivate
                                        not only technical proficiency but also
                                        leadership, teamwork, and ethical
                                        responsibility.
                                    </p>

                                    <p>
                                        Our accomplished faculty members bring a
                                        rich blend of scholarly insight and
                                        industry experience, mentoring students
                                        to achieve academic excellence and
                                        professional growth. Their dedication
                                        ensures that the curriculum remains
                                        aligned with the latest technological
                                        advancements and industry requirements.
                                        Complementing this academic strength are
                                        our state-of-the-art laboratories and
                                        modern infrastructure, designed to
                                        provide hands-on exposure in designing,
                                        analysing, and implementing advanced
                                        mechatronic systems.
                                    </p>

                                    <p>
                                        As we continue to evolve with the dynamic
                                        technological landscape, our department
                                        remains steadfast in its mission to
                                        nurture competent engineers who can
                                        contribute meaningfully to society and
                                        industry. We invite you to explore the
                                        opportunities within our department and
                                        join us in this forward-looking journey
                                        at the forefront of Mechatronics
                                        Engineering.
                                    </p>

                                </div>

                                {/* =================================================
                                    SIGNATURE
                                ================================================= */}
                                <div className="mt-14 border-t border-[#20235A]/10 pt-9">

                                    <p className="text-sm text-[#1E1917]/50">
                                        Best Regards,
                                    </p>

                                    <p className="mt-4 font-serif text-2xl text-[#20235A] sm:text-3xl">
                                        Dr. Anto Francis Cherussery
                                    </p>

                                    <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[#1E1917]/55">

                                        <span>
                                            Head of the Department
                                        </span>

                                        <span className="hidden text-[#D2B87C] sm:inline">
                                            •
                                        </span>

                                        <span>
                                            Department of Mechatronics
                                            Engineering
                                        </span>

                                    </div>

                                    <p className="mt-1 text-sm text-[#1E1917]/45">
                                        Nehru College of Engineering and
                                        Research Centre
                                    </p>

                                </div>

                            </article>

                        </div>
                    </div>
                </section>

                {/* =====================================================
                    ACADEMIC FOCUS
                ====================================================== */}
                <section className="border-t border-[#20235A]/10 bg-white py-20 sm:py-24 lg:py-28">
                    <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16">

                        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">

                            {/* Heading */}
                            <div>

                                <div className="flex items-center gap-4">
                                    <span className="h-px w-10 bg-[#D2B87C]" />

                                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                        Academic Focus
                                    </span>
                                </div>

                                <h2 className="mt-5 max-w-md font-serif text-4xl leading-[1.1] text-[#20235A] sm:text-5xl">
                                    Where disciplines meet to create
                                    intelligent systems.
                                </h2>

                                <p className="mt-6 max-w-md text-sm leading-7 text-[#1E1917]/60 sm:text-base">
                                    Mechatronics brings together multiple
                                    engineering disciplines to address the
                                    challenges of automation, intelligent
                                    machines and emerging technologies.
                                </p>

                            </div>

                            {/* Focus Items */}
                            <div className="grid sm:grid-cols-2">

                                {/* Robotics */}
                                <div className="border-t border-[#20235A]/15 py-7 sm:pr-10">

                                    <div className="flex items-center justify-between">
                                        <span className="font-serif text-xl text-[#D2B87C]">
                                            01
                                        </span>

                                        <Cpu
                                            size={20}
                                            strokeWidth={1.4}
                                            className="text-[#8F7746]"
                                        />
                                    </div>

                                    <h3 className="mt-5 font-serif text-2xl text-[#20235A]">
                                        Robotics & Automation
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-[#1E1917]/55">
                                        Exploring intelligent machines,
                                        automation technologies and robotic
                                        systems.
                                    </p>

                                </div>

                                {/* IoT */}
                                <div className="border-t border-[#20235A]/15 py-7 sm:border-l sm:pl-10">

                                    <div className="flex items-center justify-between">
                                        <span className="font-serif text-xl text-[#D2B87C]">
                                            02
                                        </span>

                                        <Sparkles
                                            size={20}
                                            strokeWidth={1.4}
                                            className="text-[#8F7746]"
                                        />
                                    </div>

                                    <h3 className="mt-5 font-serif text-2xl text-[#20235A]">
                                        Embedded Systems & IoT
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-[#1E1917]/55">
                                        Developing connected and intelligent
                                        systems through embedded technologies
                                        and IoT.
                                    </p>

                                </div>

                                {/* AI */}
                                <div className="border-t border-[#20235A]/15 py-7 sm:pr-10">

                                    <div className="flex items-center justify-between">
                                        <span className="font-serif text-xl text-[#D2B87C]">
                                            03
                                        </span>

                                        <Award
                                            size={20}
                                            strokeWidth={1.4}
                                            className="text-[#8F7746]"
                                        />
                                    </div>

                                    <h3 className="mt-5 font-serif text-2xl text-[#20235A]">
                                        Artificial Intelligence
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-[#1E1917]/55">
                                        Exploring AI-driven applications and
                                        intelligent solutions for emerging
                                        engineering challenges.
                                    </p>

                                </div>

                                {/* Manufacturing */}
                                <div className="border-t border-[#20235A]/15 py-7 sm:border-l sm:pl-10">

                                    <div className="flex items-center justify-between">
                                        <span className="font-serif text-xl text-[#D2B87C]">
                                            04
                                        </span>

                                        <GraduationCap
                                            size={20}
                                            strokeWidth={1.4}
                                            className="text-[#8F7746]"
                                        />
                                    </div>

                                    <h3 className="mt-5 font-serif text-2xl text-[#20235A]">
                                        Smart Manufacturing
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-[#1E1917]/55">
                                        Connecting engineering fundamentals with
                                        modern industrial and smart
                                        manufacturing practices.
                                    </p>

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
                                    Explore the opportunities within our
                                    <span className="text-[#D2B87C]">
                                        {' '}department.
                                    </span>
                                </h2>

                                <p className="mt-6 max-w-2xl text-base leading-8 text-white/60">
                                    Discover the academic programmes,
                                    facilities, activities and opportunities
                                    offered by the Department of Mechatronics
                                    Engineering.
                                </p>

                            </div>

                            <a
                                href="/mechatronics-engineering/facilities.php"
                                className="group inline-flex shrink-0 items-center gap-4 self-start border border-[#D2B87C]/50 px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:border-[#D2B87C] hover:bg-[#D2B87C] hover:text-[#20235A] lg:self-end"
                            >
                                Explore Facilities

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