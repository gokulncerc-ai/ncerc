import SiteHeader from '@/components/header/SiteHeader'
import FooterSection from '@/components/home/FooterSection'
import {
    ArrowUpRight,
    BookOpen,
    GraduationCap,
    Layers3,
    CheckCircle2,
    Clock3,
} from "lucide-react"
import Image from 'next/image'

const ugCourses = [
    {
        name: "B.Tech Mechatronics Engineering",
        href: "https://ncerc.ac.in/mechatronics-engineering/",
        accredited: true,
    },
    {
        name: "B.Tech Computer Science Engineering",
        href: "https://ncerc.ac.in/computer-science-and-engineering/",
        accredited: true,
    },
    {
        name: "B.Tech Electronics and Communication Engineering",
        href: "https://ncerc.ac.in/electronics-and-communication-engineering/",
        accredited: true,
    },
    {
        name: "B.Tech Electrical and Computer Engineering",
        href: "https://ncerc.ac.in/electrical-and-computer-engineering/",
        accredited: false,
    },
    {
        name: "B.Tech Mechanical Engineering (Industry Integrated)",
        href: "https://ncerc.ac.in/mechanical-engineering-industry-integrated/",
        accredited: false,
    },
    {
        name: "B.Tech Computer Science Engineering (Artificial Intelligence & Machine Learning)",
        href: "https://ncerc.ac.in/cse-aiml",
        accredited: false,
    },
]


const pgCourses = [
    {
        name: "M.Tech Computer Science and Engineering",
        href: "https://ncerc.ac.in/m-tech-computer-science-and-engineering",
    },
    {
        name: "M.Tech Artificial Intelligence & Data Science",
        href: "https://ncerc.ac.in/ai-and-data-science.php",
    },
    {
        name: "M.Tech Energy Systems",
        href: "https://ncerc.ac.in/energy-system",
    },
    {
        name: "M.Tech VLSI Design",
        href: "https://ncerc.ac.in/visi-design",
    },
]


const additionalCourses = [
    {
        type: "MCA",
        number: "03",
        title: "Master of Computer Applications",
        href: "https://ncerc.ac.in/mca/",
        accredited: true,
        description:
            "A professional postgraduate programme designed to provide strong theoretical foundations and practical exposure in applied computer science and information technology.",
        eligibility: [
            "Bachelor's Degree with Mathematics at 10+2 level / Graduate Level with minimum 50% marks.",
            "Candidate should have passed the qualifying entrance examination.",
        ],
    },
    {
        type: "MBA",
        number: "04",
        title: "Master of Business Administration",
        href: "http://nehrusgroups.com/nsm.php",
        accredited: true,
        description:
            "A postgraduate management programme that develops strong foundations in business concepts while building leadership, communication, motivation and negotiation skills.",
        eligibility: [
            "Candidate should have passed a qualifying entrance examination such as KMAT, CMAT or CAT.",
            "Any Degree with 50% marks.",
        ],
    },
]


const page = () => {
    return (
        <>
            <SiteHeader />

            <main className="overflow-hidden bg-[#FAF7F2] text-[#1E1917]">

                {/* =========================================================
                    HERO
                ========================================================= */}
                <section className="relative overflow-hidden bg-[#20235A]">

                    {/* Decorative Background Elements */}
                    <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full border border-[#D2B87C]/20" />

                    <div className="pointer-events-none absolute -right-16 -top-16 h-[350px] w-[350px] rounded-full border border-[#D2B87C]/10" />

                    <div className="pointer-events-none absolute bottom-[-180px] left-[-180px] h-[420px] w-[420px] rounded-full border border-white/5" />

                    {/* Small Decorative Line */}
                    <div className="pointer-events-none absolute left-[8%] top-[30%] hidden h-32 w-px rotate-[25deg] bg-[#D2B87C]/20 lg:block" />

                    <div className="relative mx-auto max-w-7xl px-5 pb-12 pt-24 sm:px-6 sm:pb-16 sm:pt-28 lg:px-8 lg:pb-20 lg:pt-32 xl:pb-24 xl:pt-36">

                        <div className="grid items-center gap-10 md:gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14 xl:gap-16">

                            {/* =================================================
                                HERO CONTENT
                            ================================================= */}
                            <div className="relative z-10">

                                <div className="mb-6 flex items-center gap-3 sm:mb-7 sm:gap-4">
                                    <span className="h-px w-8 bg-[#D2B87C] sm:w-12" />

                                    <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D2B87C] sm:text-xs sm:tracking-[0.28em]">
                                        Academic Programmes
                                    </span>
                                </div>

                                <h1 className="font-display text-[3.25rem] leading-[0.92] tracking-[-0.055em] text-white sm:text-6xl md:text-7xl lg:text-6xl xl:text-[74px]">

                                    Courses

                                    <span className="block text-[#D2B87C]">
                                        &amp; Programmes
                                    </span>

                                </h1>

                                <p className="mt-6 max-w-xl text-[15px] leading-7 text-white/65 sm:mt-8 sm:text-base sm:leading-8 lg:text-lg">
                                    Explore undergraduate, postgraduate and professional programmes
                                    designed to build strong academic foundations, practical
                                    expertise and industry-ready skills.
                                </p>

                                <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap">

                                    <a
                                        href="#ug-courses"
                                        className="inline-flex w-fit items-center justify-center gap-2 border border-[#D2B87C] bg-[#D2B87C] px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#20235A] transition hover:bg-[#D2B87C]/90"
                                    >
                                        Explore Courses

                                        <ArrowUpRight className="h-4 w-4" />
                                    </a>

                                    <div className="inline-flex w-fit items-center gap-2 border border-white/15 px-5 py-3 text-xs font-medium uppercase tracking-[0.12em] text-white/55">
                                        <GraduationCap className="h-4 w-4 text-[#D2B87C]" />

                                        UG · PG · Professional
                                    </div>

                                </div>

                            </div>


                            {/* =================================================
                                HERO IMAGE
                            ================================================= */}
                            <div className="relative w-full min-w-0">

                                {/* Image Frame */}
                                <div className="relative w-full overflow-hidden border border-white/10 bg-white/5 p-2 sm:p-3">

                                    {/* Image */}
                                    <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/10] lg:aspect-[4/3]">

                                        <Image
                                            src="https://presidencyuniversity.in/uploads/department/64f868c0dc9cf1694001344.webp"
                                            alt="Students engaged in academic and engineering learning"
                                            fill
                                            sizes="(min-width: 1024px) 330px, 100vw"
                                            className="absolute inset-0 h-full w-full object-cover object-[50%_42%] sm:object-[50%_45%] lg:object-center"
                                            loading="eager"
                                        />

                                        {/* Subtle Overlay */}
                                        <div className="pointer-events-none absolute inset-0 bg-[#20235A]/10" />

                                        {/* Gold Inner Frame */}
                                        <div className="pointer-events-none absolute inset-3 border border-[#D2B87C]/35 sm:inset-5 lg:inset-6" />

                                        {/* Bottom Gradient */}
                                        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#20235A]/35 to-transparent" />

                                    </div>

                                </div>


                                {/* Image Caption */}
                                <div className="mt-3 flex items-center gap-3 sm:mt-4 sm:gap-4">

                                    <span className="shrink-0 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/40 sm:text-[10px] sm:tracking-[0.2em]">
                                        Academic Excellence
                                    </span>

                                    <span className="h-px min-w-0 flex-1 bg-white/10" />

                                    <span className="shrink-0 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#D2B87C]/70 sm:text-[10px] sm:tracking-[0.2em]">
                                        NCERC
                                    </span>

                                </div>

                            </div>

                        </div>

                    </div>
                </section>


                {/* =========================================================
                    OVERVIEW
                ========================================================= */}
                <section className="border-b border-[#20235A]/10 bg-[#FAF7F2]">

                    <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-6 sm:py-16 lg:grid-cols-[0.75fr_1.25fr] lg:px-8 lg:py-24">

                        <div>

                            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                                Academic Journey
                            </span>

                            <h2 className="mt-4 max-w-lg font-display text-4xl leading-tight tracking-tight text-[#20235A] sm:text-5xl">
                                Education built around knowledge and opportunity.
                            </h2>

                        </div>

                        <div className="max-w-3xl lg:pt-8">

                            <p className="text-base leading-8 text-[#1E1917]/65">
                                NCERC offers a diverse range of engineering, technology,
                                computer applications and management programmes. Each
                                programme is designed to combine academic knowledge with
                                practical exposure and professional development.
                            </p>

                            <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden border border-[#20235A]/10 bg-[#20235A]/10 sm:grid-cols-4">

                                {[
                                    ["01", "UG Courses"],
                                    ["02", "PG Courses"],
                                    ["03", "MCA"],
                                    ["04", "MBA"],
                                ].map(([number, label]) => (

                                    <div
                                        key={number}
                                        className="bg-white p-5"
                                    >
                                        <span className="text-xs font-bold tracking-[0.12em] text-[#8F7746]">
                                            {number}
                                        </span>

                                        <p className="mt-2 text-sm font-semibold text-[#20235A]">
                                            {label}
                                        </p>
                                    </div>

                                ))}

                            </div>

                        </div>

                    </div>

                </section>


                {/* =========================================================
                    UG COURSES
                ========================================================= */}
                <section
                    id="ug-courses"
                    className="bg-white py-16 sm:py-20 lg:py-28"
                >

                    <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

                        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">

                            <div>

                                <div className="flex h-12 w-12 items-center justify-center border border-[#D2B87C]/60 text-[#8F7746]">
                                    <GraduationCap className="h-5 w-5" />
                                </div>

                                <div className="mt-7">

                                    <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                                        01 — Undergraduate
                                    </span>

                                    <h2 className="mt-4 font-display text-4xl leading-tight text-[#20235A] sm:text-5xl">

                                        B.Tech

                                        <span className="block text-[#8F7746]/70">
                                            Engineering Programmes
                                        </span>

                                    </h2>

                                    <p className="mt-6 text-[15px] leading-8 text-[#1E1917]/65">
                                        Bachelor of Technology is a professional undergraduate
                                        engineering degree programme awarded after four years of
                                        study. It provides students with a strong foundation for
                                        careers in engineering and technology.
                                    </p>

                                </div>

                                <div className="mt-9 border-l-2 border-[#D2B87C] bg-[#FAF7F2] p-6">

                                    <div className="flex items-center gap-2">

                                        <CheckCircle2 className="h-4 w-4 text-[#8F7746]" />

                                        <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#20235A]">
                                            Eligibility
                                        </span>

                                    </div>

                                    <p className="mt-3 text-sm leading-7 text-[#1E1917]/65">
                                        +2 pass with 50% in MPC &amp; qualify in KEAM / JEE.
                                        <br />
                                        For NRI quota: 50% in +2 with MPC.
                                    </p>

                                </div>

                            </div>


                            <div className="border-t border-[#20235A]/10">

                                {ugCourses.map((course, index) => (

                                    <a
                                        key={course.name}
                                        href={course.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group grid grid-cols-[40px_1fr_auto] items-center gap-3 border-b border-[#20235A]/10 py-6 transition hover:bg-[#FAF7F2] sm:grid-cols-[60px_1fr_auto] sm:gap-4"
                                    >

                                        <span className="text-xs font-semibold tracking-[0.12em] text-[#8F7746]">
                                            0{index + 1}
                                        </span>

                                        <div>

                                            <h3 className="font-display text-xl leading-snug text-[#20235A] transition group-hover:text-[#8F7746] sm:text-2xl">
                                                {course.name}
                                            </h3>

                                            {course.accredited && (
                                                <span className="mt-2 inline-block text-[10px] font-bold uppercase tracking-[0.12em] text-[#8F7746]">
                                                    NBA Accredited
                                                </span>
                                            )}

                                        </div>

                                        <span className="flex h-9 w-9 items-center justify-center border border-[#20235A]/10 text-[#1E1917]/50 transition group-hover:border-[#D2B87C] group-hover:text-[#8F7746] sm:h-10 sm:w-10">

                                            <ArrowUpRight className="h-4 w-4" />

                                        </span>

                                    </a>

                                ))}

                            </div>

                        </div>

                    </div>

                </section>


                {/* =========================================================
                    PG COURSES
                ========================================================= */}
                <section className="bg-[#FAF7F2] py-16 sm:py-20 lg:py-28">

                    <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

                        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">

                            <div className="order-2 lg:order-1">

                                <div className="grid gap-4 sm:grid-cols-2">

                                    {pgCourses.map((course, index) => (

                                        <a
                                            key={course.name}
                                            href={course.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group relative min-h-[190px] border border-[#20235A]/10 bg-white p-7 transition hover:-translate-y-1 hover:border-[#D2B87C]/60 hover:shadow-[0_20px_50px_rgba(32,35,90,0.08)]"
                                        >

                                            <span className="text-xs font-bold tracking-[0.12em] text-[#8F7746]">
                                                0{index + 1}
                                            </span>

                                            <h3 className="mt-8 max-w-xs font-display text-2xl leading-tight text-[#20235A]">
                                                {course.name}
                                            </h3>

                                            <span className="absolute bottom-6 right-6 flex h-9 w-9 items-center justify-center border border-[#20235A]/10 text-[#1E1917]/50 transition group-hover:border-[#D2B87C] group-hover:text-[#8F7746]">

                                                <ArrowUpRight className="h-4 w-4" />

                                            </span>

                                        </a>

                                    ))}

                                </div>

                            </div>


                            <div className="order-1 lg:order-2">

                                <div className="flex h-12 w-12 items-center justify-center border border-[#D2B87C]/60 text-[#8F7746]">
                                    <Layers3 className="h-5 w-5" />
                                </div>

                                <div className="mt-7">

                                    <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                                        02 — Postgraduate
                                    </span>

                                    <h2 className="mt-4 font-display text-4xl leading-tight text-[#20235A] sm:text-5xl">

                                        M.Tech

                                        <span className="block text-[#8F7746]/70">
                                            Advanced Engineering
                                        </span>

                                    </h2>

                                    <p className="mt-6 text-[15px] leading-8 text-[#1E1917]/65">
                                        M.Tech is a professional postgraduate engineering degree
                                        designed around specialised technical knowledge, practical
                                        exposure and research-oriented learning.
                                    </p>

                                    <div className="mt-8 border-l-2 border-[#D2B87C] bg-white p-6">

                                        <div className="flex items-center gap-2">

                                            <CheckCircle2 className="h-4 w-4 text-[#8F7746]" />

                                            <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#20235A]">
                                                Eligibility
                                            </span>

                                        </div>

                                        <p className="mt-3 text-sm leading-7 text-[#1E1917]/65">
                                            B.Tech with 60%.
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =========================================================
                    MCA + MBA
                ========================================================= */}
                <section className="bg-white py-16 sm:py-20 lg:py-28">

                    <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

                        <div className="mb-14 max-w-2xl">

                            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                                03 — Professional Programmes
                            </span>

                            <h2 className="mt-4 font-display text-4xl leading-tight text-[#20235A] sm:text-5xl">

                                Beyond engineering,

                                <span className="block text-[#8F7746]/70">
                                    broader career pathways.
                                </span>

                            </h2>

                        </div>


                        <div className="grid gap-6 lg:grid-cols-2">

                            {additionalCourses.map((course) => (

                                <article
                                    key={course.type}
                                    className="group relative overflow-hidden border border-[#20235A]/10 bg-[#FAF7F2]"
                                >

                                    <span className="pointer-events-none absolute -right-3 -top-10 font-display text-[180px] leading-none text-[#20235A]/[0.04]">
                                        {course.number}
                                    </span>

                                    <div className="relative p-8 sm:p-10 lg:p-12">

                                        <div className="flex items-start justify-between gap-5">

                                            <div>

                                                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8F7746]">
                                                    {course.type}
                                                </span>

                                                <h3 className="mt-4 max-w-md font-display text-3xl leading-tight text-[#20235A] sm:text-4xl">
                                                    {course.title}
                                                </h3>

                                            </div>

                                            <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#D2B87C]/60 text-[#8F7746]">

                                                <BookOpen className="h-5 w-5" />

                                            </div>

                                        </div>

                                        <div className="mt-7 h-px bg-[#20235A]/10" />

                                        <p className="mt-7 max-w-xl text-sm leading-7 text-[#1E1917]/65">
                                            {course.description}
                                        </p>

                                        <div className="mt-8">

                                            <div className="mb-4 flex items-center gap-2">

                                                <CheckCircle2 className="h-4 w-4 text-[#8F7746]" />

                                                <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#20235A]">
                                                    Eligibility
                                                </span>

                                            </div>

                                            <ul className="space-y-3">

                                                {course.eligibility.map((item) => (

                                                    <li
                                                        key={item}
                                                        className="flex gap-3 text-sm leading-6 text-[#1E1917]/65"
                                                    >

                                                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D2B87C]" />

                                                        <span>
                                                            {item}
                                                        </span>

                                                    </li>

                                                ))}

                                            </ul>

                                        </div>

                                        <a
                                            href={course.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-9 inline-flex items-center gap-3 border-b border-[#D2B87C] pb-2 text-xs font-bold uppercase tracking-[0.12em] text-[#20235A]"
                                        >

                                            Explore Programme

                                            <ArrowUpRight className="h-4 w-4 text-[#8F7746]" />

                                        </a>

                                    </div>

                                </article>

                            ))}

                        </div>

                    </div>

                </section>


                {/* =========================================================
                    QUICK ELIGIBILITY
                ========================================================= */}
                <section className="border-y border-[#20235A]/30 bg-[#20235A]">

                    <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-6 sm:py-16 lg:grid-cols-[0.8fr_1.2fr] lg:px-8 lg:py-20">

                        <div>

                            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                Admission Snapshot
                            </span>

                            <h2 className="mt-4 font-display text-3xl leading-tight text-white sm:text-4xl">

                                Choose the programme

                                <span className="text-[#D2B87C]">
                                    {" "}that fits your goals.
                                </span>

                            </h2>

                        </div>


                        <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-3">

                            <div className="bg-[#20235A] p-6">

                                <GraduationCap className="h-5 w-5 text-[#D2B87C]" />

                                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.12em] text-white/50">
                                    Undergraduate
                                </p>

                                <p className="mt-2 font-display text-2xl text-white">
                                    B.Tech
                                </p>

                            </div>


                            <div className="bg-[#20235A] p-6">

                                <Clock3 className="h-5 w-5 text-[#D2B87C]" />

                                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.12em] text-white/50">
                                    Postgraduate
                                </p>

                                <p className="mt-2 font-display text-2xl text-white">
                                    M.Tech
                                </p>

                            </div>


                            <div className="bg-[#20235A] p-6">

                                <BookOpen className="h-5 w-5 text-[#D2B87C]" />

                                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.12em] text-white/50">
                                    Professional
                                </p>

                                <p className="mt-2 font-display text-2xl text-white">
                                    MCA / MBA
                                </p>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =========================================================
                    FINAL CTA
                ========================================================= */}
                <section className="bg-[#FAF7F2]">

                    <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

                        <div className="flex flex-col justify-between gap-8 border-t border-[#20235A]/10 pt-8 md:flex-row md:items-end">

                            <div>

                                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                                    Start Your Journey
                                </span>

                                <h2 className="mt-3 max-w-2xl font-display text-4xl leading-tight text-[#20235A] sm:text-5xl">
                                    Find the programme that can shape your future.
                                </h2>

                            </div>

                            <a
                                href="/admissions"
                                className="inline-flex w-fit shrink-0 items-center gap-3 bg-[#20235A] px-6 py-4 text-xs font-bold uppercase tracking-[0.12em] text-white transition hover:bg-[#D2B87C] hover:text-[#20235A]"
                            >

                                Admissions

                                <ArrowUpRight className="h-4 w-4" />

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