import SiteHeader from '@/components/header/SiteHeader'
import FooterSection from '@/components/home/FooterSection'
import {
    ArrowUpRight,
    BookOpen,
    GraduationCap,
    Layers3,
    CheckCircle2,
    Clock3,
} from "lucide-react";


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
];

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
];

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
        href: "http://nehrubschools.com/nsm.php",
        accredited: true,
        description:
            "A postgraduate management programme that develops strong foundations in business concepts while building leadership, communication, motivation and negotiation skills.",
        eligibility: [
            "Candidate should have passed a qualifying entrance examination such as KMAT, CMAT or CAT.",
            "Any Degree with 50% marks.",
        ],
    },
];

const page = () => {
    return (
        <>
            <SiteHeader />
            <main className="bg-white text-slate-700">
                {/* =====================================================
            HERO
        ====================================================== */}
                <section className="relative overflow-hidden bg-slate-950">
                    {/* Decorative elements */}
                    <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full border border-gold-500/20" />
                    <div className="pointer-events-none absolute -right-16 -top-16 h-[350px] w-[350px] rounded-full border border-gold-500/10" />

                    <div className="mx-auto max-w-7xl px-6 pb-24 pt-32 sm:pb-28 lg:px-8 lg:pb-36 lg:pt-40">
                        <div className="max-w-5xl">
                            <div className="mb-7 flex items-center gap-4">
                                <span className="h-px w-12 bg-gold-500" />

                                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-500">
                                    Academic Programmes
                                </span>
                            </div>

                            <h1 className="font-display text-6xl leading-[0.94] tracking-[-0.05em] text-white sm:text-7xl lg:text-8xl">
                                Courses
                                <span className="block text-gold-500">& Programmes</span>
                            </h1>

                            <p className="mt-8 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                                Explore undergraduate, postgraduate and professional programmes
                                designed to build strong academic foundations, practical
                                expertise and industry-ready skills.
                            </p>
                        </div>

                        <div className="mt-16 flex flex-wrap gap-3">
                            <a
                                href="#ug-courses"
                                className="inline-flex items-center gap-2 border border-gold-500 bg-gold-500 px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-950 transition hover:bg-gold-400"
                            >
                                Explore Courses
                                <ArrowUpRight className="h-4 w-4" />
                            </a>

                            <div className="flex items-center gap-2 border border-white/15 px-5 py-3 text-xs font-medium uppercase tracking-[0.12em] text-slate-400">
                                <GraduationCap className="h-4 w-4 text-gold-500" />
                                UG · PG · Professional
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
            OVERVIEW
        ====================================================== */}
                <section className="border-b border-slate-200 bg-[#faf7f2]">
                    <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.75fr_1.25fr] lg:px-8 lg:py-24">
                        <div>
                            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-500">
                                Academic Journey
                            </span>

                            <h2 className="mt-4 max-w-lg font-display text-4xl leading-tight tracking-tight text-slate-950 sm:text-5xl">
                                Education built around knowledge and opportunity.
                            </h2>
                        </div>

                        <div className="max-w-3xl lg:pt-8">
                            <p className="text-base leading-8 text-slate-600">
                                NCERC offers a diverse range of engineering, technology,
                                computer applications and management programmes. Each
                                programme is designed to combine academic knowledge with
                                practical exposure and professional development.
                            </p>

                            <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-4">
                                {[
                                    ["01", "UG Courses"],
                                    ["02", "PG Courses"],
                                    ["03", "MCA"],
                                    ["04", "MBA"],
                                ].map(([number, label]) => (
                                    <div key={number} className="bg-white p-5">
                                        <span className="text-xs font-bold tracking-[0.12em] text-gold-500">
                                            {number}
                                        </span>

                                        <p className="mt-2 text-sm font-semibold text-slate-800">
                                            {label}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
            UG COURSES
        ====================================================== */}
                <section id="ug-courses" className="bg-white py-20 lg:py-28">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
                            {/* Left information */}
                            <div>
                                <div className="flex h-12 w-12 items-center justify-center border border-gold-500/60 text-gold-500">
                                    <GraduationCap className="h-5 w-5" />
                                </div>

                                <div className="mt-7">
                                    <span className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-500">
                                        01 — Undergraduate
                                    </span>

                                    <h2 className="mt-4 font-display text-4xl leading-tight text-slate-950 sm:text-5xl">
                                        B.Tech
                                        <span className="block text-slate-400">
                                            Engineering Programmes
                                        </span>
                                    </h2>

                                    <p className="mt-6 text-[15px] leading-8 text-slate-600">
                                        Bachelor of Technology is a professional undergraduate
                                        engineering degree programme awarded after four years of
                                        study. It provides students with a strong foundation for
                                        careers in engineering and technology.
                                    </p>
                                </div>

                                {/* Eligibility */}
                                <div className="mt-9 border-l-2 border-gold-500 bg-[#faf7f2] p-6">
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-gold-500" />

                                        <span className="text-xs font-bold uppercase tracking-[0.14em] text-slate-900">
                                            Eligibility
                                        </span>
                                    </div>

                                    <p className="mt-3 text-sm leading-7 text-slate-600">
                                        +2 pass with 50% in MPC &amp; qualify in KEAM / JEE.
                                        <br />
                                        For NRI quota: 50% in +2 with MPC.
                                    </p>
                                </div>
                            </div>

                            {/* Course list */}
                            <div className="border-t border-slate-200">
                                {ugCourses.map((course, index) => (
                                    <a
                                        key={course.name}
                                        href={course.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group grid grid-cols-[48px_1fr_auto] items-center gap-4 border-b border-slate-200 py-6 transition hover:bg-[#faf7f2] sm:grid-cols-[60px_1fr_auto]"
                                    >
                                        <span className="text-xs font-semibold tracking-[0.12em] text-gold-500">
                                            0{index + 1}
                                        </span>

                                        <div>
                                            <h3 className="font-display text-xl leading-snug text-slate-900 transition group-hover:text-slate-950 sm:text-2xl">
                                                {course.name}
                                            </h3>

                                            {course.accredited && (
                                                <span className="mt-2 inline-block text-[10px] font-bold uppercase tracking-[0.12em] text-gold-600">
                                                    NBA Accredited
                                                </span>
                                            )}
                                        </div>

                                        <span className="flex h-10 w-10 items-center justify-center border border-slate-200 text-slate-500 transition group-hover:border-gold-500 group-hover:text-gold-500">
                                            <ArrowUpRight className="h-4 w-4" />
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
            PG COURSES
        ====================================================== */}
                <section className="bg-[#faf7f2] py-20 lg:py-28">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
                            {/* Course list first */}
                            <div className="order-2 lg:order-1">
                                <div className="grid gap-4 sm:grid-cols-2">
                                    {pgCourses.map((course, index) => (
                                        <a
                                            key={course.name}
                                            href={course.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group relative min-h-[190px] border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-gold-500/60 hover:shadow-[0_20px_50px_rgba(15,23,42,0.07)]"
                                        >
                                            <span className="text-xs font-bold tracking-[0.12em] text-gold-500">
                                                0{index + 1}
                                            </span>

                                            <h3 className="mt-8 max-w-xs font-display text-2xl leading-tight text-slate-900">
                                                {course.name}
                                            </h3>

                                            <span className="absolute bottom-6 right-6 flex h-9 w-9 items-center justify-center border border-slate-200 text-slate-500 transition group-hover:border-gold-500 group-hover:text-gold-500">
                                                <ArrowUpRight className="h-4 w-4" />
                                            </span>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Information */}
                            <div className="order-1 lg:order-2">
                                <div className="flex h-12 w-12 items-center justify-center border border-gold-500/60 text-gold-500">
                                    <Layers3 className="h-5 w-5" />
                                </div>

                                <div className="mt-7">
                                    <span className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-500">
                                        02 — Postgraduate
                                    </span>

                                    <h2 className="mt-4 font-display text-4xl leading-tight text-slate-950 sm:text-5xl">
                                        M.Tech
                                        <span className="block text-slate-400">
                                            Advanced Engineering
                                        </span>
                                    </h2>

                                    <p className="mt-6 text-[15px] leading-8 text-slate-600">
                                        M.Tech is a professional postgraduate engineering degree
                                        designed around specialised technical knowledge, practical
                                        exposure and research-oriented learning.
                                    </p>

                                    <div className="mt-8 border-l-2 border-gold-500 bg-white p-6">
                                        <div className="flex items-center gap-2">
                                            <CheckCircle2 className="h-4 w-4 text-gold-500" />

                                            <span className="text-xs font-bold uppercase tracking-[0.14em] text-slate-900">
                                                Eligibility
                                            </span>
                                        </div>

                                        <p className="mt-3 text-sm leading-7 text-slate-600">
                                            B.Tech with 60%.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
            MCA + MBA
        ====================================================== */}
                <section className="bg-white py-20 lg:py-28">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mb-14 max-w-2xl">
                            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-500">
                                03 — Professional Programmes
                            </span>

                            <h2 className="mt-4 font-display text-4xl leading-tight text-slate-950 sm:text-5xl">
                                Beyond engineering,
                                <span className="block text-slate-400">
                                    broader career pathways.
                                </span>
                            </h2>
                        </div>

                        <div className="grid gap-6 lg:grid-cols-2">
                            {additionalCourses.map((course) => (
                                <article
                                    key={course.type}
                                    className="group relative overflow-hidden border border-slate-200 bg-[#faf7f2]"
                                >
                                    {/* Large background number */}
                                    <span className="pointer-events-none absolute -right-3 -top-10 font-display text-[180px] leading-none text-slate-200/60">
                                        {course.number}
                                    </span>

                                    <div className="relative p-8 sm:p-10 lg:p-12">
                                        <div className="flex items-start justify-between gap-5">
                                            <div>
                                                <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-500">
                                                    {course.type}
                                                </span>

                                                <h3 className="mt-4 max-w-md font-display text-3xl leading-tight text-slate-950 sm:text-4xl">
                                                    {course.title}
                                                </h3>
                                            </div>

                                            <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-gold-500/60 text-gold-500">
                                                <BookOpen className="h-5 w-5" />
                                            </div>
                                        </div>

                                        <div className="mt-7 h-px bg-slate-200" />

                                        <p className="mt-7 max-w-xl text-sm leading-7 text-slate-600">
                                            {course.description}
                                        </p>

                                        <div className="mt-8">
                                            <div className="mb-4 flex items-center gap-2">
                                                <CheckCircle2 className="h-4 w-4 text-gold-500" />

                                                <span className="text-xs font-bold uppercase tracking-[0.14em] text-slate-900">
                                                    Eligibility
                                                </span>
                                            </div>

                                            <ul className="space-y-3">
                                                {course.eligibility.map((item) => (
                                                    <li
                                                        key={item}
                                                        className="flex gap-3 text-sm leading-6 text-slate-600"
                                                    >
                                                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <a
                                            href={course.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-9 inline-flex items-center gap-3 border-b border-gold-500 pb-2 text-xs font-bold uppercase tracking-[0.12em] text-slate-900"
                                        >
                                            Explore Programme
                                            <ArrowUpRight className="h-4 w-4 text-gold-500" />
                                        </a>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* =====================================================
            QUICK ELIGIBILITY
        ====================================================== */}
                <section className="border-y border-slate-800 bg-slate-950">
                    <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:px-8 lg:py-20">
                        <div>
                            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-500">
                                Admission Snapshot
                            </span>

                            <h2 className="mt-4 font-display text-3xl leading-tight text-white sm:text-4xl">
                                Choose the programme
                                <span className="text-gold-500"> that fits your goals.</span>
                            </h2>
                        </div>

                        <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-3">
                            <div className="bg-slate-950 p-6">
                                <GraduationCap className="h-5 w-5 text-gold-500" />

                                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                                    Undergraduate
                                </p>

                                <p className="mt-2 font-display text-2xl text-white">
                                    B.Tech
                                </p>
                            </div>

                            <div className="bg-slate-950 p-6">
                                <Clock3 className="h-5 w-5 text-gold-500" />

                                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                                    Postgraduate
                                </p>

                                <p className="mt-2 font-display text-2xl text-white">
                                    M.Tech
                                </p>
                            </div>

                            <div className="bg-slate-950 p-6">
                                <BookOpen className="h-5 w-5 text-gold-500" />

                                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                                    Professional
                                </p>

                                <p className="mt-2 font-display text-2xl text-white">
                                    MCA / MBA
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
            FINAL CTA
        ====================================================== */}
                <section className="bg-[#faf7f2]">
                    <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
                        <div className="flex flex-col justify-between gap-8 border-t border-slate-200 pt-8 md:flex-row md:items-end">
                            <div>
                                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-500">
                                    Start Your Journey
                                </span>

                                <h2 className="mt-3 max-w-2xl font-display text-4xl leading-tight text-slate-950 sm:text-5xl">
                                    Find the programme that can shape your future.
                                </h2>
                            </div>

                            <a
                                href="/admissions"
                                className="inline-flex w-fit shrink-0 items-center gap-3 bg-slate-950 px-6 py-4 text-xs font-bold uppercase tracking-[0.12em] text-white transition hover:bg-gold-500 hover:text-slate-950"
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
