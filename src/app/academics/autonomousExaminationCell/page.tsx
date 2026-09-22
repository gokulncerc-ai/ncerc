import SiteHeader from '@/components/header/SiteHeader'
import FooterSection from '@/components/home/FooterSection'
import {
    ArrowUpRight,
    ClipboardCheck,
    FileText,
    GraduationCap,
    ShieldCheck,
} from "lucide-react";

const page = () => {
    return (
        <>
            <SiteHeader />
            <main className="bg-white text-slate-700">
                {/* =====================================================
            HERO
        ====================================================== */}
                <section className="relative overflow-hidden bg-slate-950">
                    {/* Decorative Elements */}
                    <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full border border-gold-500/20" />
                    <div className="pointer-events-none absolute -right-16 -top-16 h-[350px] w-[350px] rounded-full border border-gold-500/10" />

                    <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-32 sm:pb-28 lg:px-8 lg:pb-36 lg:pt-40">
                        <div className="max-w-4xl">
                            <div className="mb-7 flex items-center gap-4">
                                <span className="h-px w-12 bg-gold-500" />

                                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-500">
                                    Autonomous Academics
                                </span>
                            </div>

                            <h1 className="font-display text-5xl leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl lg:text-8xl">
                                Autonomous
                                <span className="block text-gold-500">
                                    Examination Cell
                                </span>
                            </h1>

                            <p className="mt-8 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                                An academic examination framework dedicated to maintaining
                                transparency, efficiency and integrity throughout the
                                examination process at NCERC.
                            </p>
                        </div>

                        <div className="mt-14 flex flex-wrap items-center gap-4">
                            <a
                                href="https://ncerc.ac.in/controller-of-examination.php"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-gold-500 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-slate-950 transition hover:bg-gold-400"
                            >
                                Controller of Examination
                                <ArrowUpRight className="h-4 w-4" />
                            </a>

                            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
                                <ShieldCheck className="h-4 w-4 text-gold-500" />
                                Academic Administration
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
            INTRODUCTION
        ====================================================== */}
                <section className="border-b border-slate-200 bg-[#faf7f2]">
                    <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:px-8 lg:py-24">
                        <div>
                            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-500">
                                Examination Cell
                            </span>

                            <h2 className="mt-4 max-w-xl font-display text-4xl leading-tight tracking-tight text-slate-950 sm:text-5xl">
                                Ensuring a structured and transparent examination process.
                            </h2>
                        </div>

                        <div className="max-w-2xl lg:pt-7">
                            <p className="text-base leading-8 text-slate-600">
                                The Autonomous Examination Cell supports the academic
                                examination system of NCERC by facilitating an organised,
                                transparent and efficient examination process for students
                                and academic departments.
                            </p>

                            <p className="mt-5 text-base leading-8 text-slate-600">
                                Students can access the Controller of Examination section for
                                examination-related information, academic procedures and
                                official updates.
                            </p>
                        </div>
                    </div>
                </section>

                {/* =====================================================
            EXAMINATION FEATURES
        ====================================================== */}
                <section className="bg-white py-20 lg:py-28">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="max-w-2xl">
                            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-500">
                                Academic Administration
                            </span>

                            <h2 className="mt-4 font-display text-4xl leading-tight text-slate-950 sm:text-5xl">
                                Supporting academic excellence through examination.
                            </h2>
                        </div>

                        <div className="mt-14 grid gap-px border border-slate-200 bg-slate-200 md:grid-cols-3">
                            {/* Card 01 */}
                            <div className="bg-white p-8 transition hover:bg-[#faf7f2] lg:p-10">
                                <div className="flex h-12 w-12 items-center justify-center border border-gold-500/60 text-gold-500">
                                    <ClipboardCheck className="h-5 w-5" />
                                </div>

                                <span className="mt-8 block text-xs font-bold tracking-[0.16em] text-gold-500">
                                    01
                                </span>

                                <h3 className="mt-3 font-display text-2xl text-slate-950">
                                    Examination Management
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-slate-600">
                                    A structured examination framework supporting the smooth
                                    administration of academic assessments.
                                </p>
                            </div>

                            {/* Card 02 */}
                            <div className="bg-white p-8 transition hover:bg-[#faf7f2] lg:p-10">
                                <div className="flex h-12 w-12 items-center justify-center border border-gold-500/60 text-gold-500">
                                    <ShieldCheck className="h-5 w-5" />
                                </div>

                                <span className="mt-8 block text-xs font-bold tracking-[0.16em] text-gold-500">
                                    02
                                </span>

                                <h3 className="mt-3 font-display text-2xl text-slate-950">
                                    Transparency
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-slate-600">
                                    Examination procedures are supported by an organised
                                    academic system focused on fairness and accountability.
                                </p>
                            </div>

                            {/* Card 03 */}
                            <div className="bg-white p-8 transition hover:bg-[#faf7f2] lg:p-10">
                                <div className="flex h-12 w-12 items-center justify-center border border-gold-500/60 text-gold-500">
                                    <GraduationCap className="h-5 w-5" />
                                </div>

                                <span className="mt-8 block text-xs font-bold tracking-[0.16em] text-gold-500">
                                    03
                                </span>

                                <h3 className="mt-3 font-display text-2xl text-slate-950">
                                    Student Support
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-slate-600">
                                    Providing students with access to official examination
                                    information and academic procedures.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
            CONTROLLER OF EXAMINATION
        ====================================================== */}
                <section className="border-y border-slate-200 bg-[#faf7f2]">
                    <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
                        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                            {/* Left */}
                            <div>
                                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-500">
                                    Official Resource
                                </span>

                                <h2 className="mt-4 font-display text-4xl leading-tight text-slate-950 sm:text-5xl">
                                    Controller of Examination
                                </h2>
                            </div>

                            {/* Right */}
                            <div className="border border-slate-200 bg-white p-7 sm:p-9 lg:p-10">
                                <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
                                    <div className="flex items-start gap-5">
                                        <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-slate-950 text-gold-500">
                                            <FileText className="h-6 w-6" />
                                        </div>

                                        <div>
                                            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-gold-500">
                                                Official Information
                                            </span>

                                            <h3 className="mt-2 font-display text-2xl text-slate-950">
                                                Controller of Examination
                                            </h3>

                                            <p className="mt-2 max-w-xl text-sm leading-7 text-slate-600">
                                                Access the official Controller of Examination section
                                                for examination-related information and updates.
                                            </p>
                                        </div>
                                    </div>

                                    <a
                                        href="https://ncerc.ac.in/controller-of-examination.php"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex shrink-0 items-center justify-center gap-2 border border-slate-950 px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-slate-950 transition hover:bg-slate-950 hover:text-white"
                                    >
                                        Visit Page
                                        <ArrowUpRight className="h-4 w-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
            CTA
        ====================================================== */}
                <section className="bg-slate-950">
                    <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
                        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
                            <div className="max-w-3xl">
                                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-500">
                                    Examination Services
                                </span>

                                <h2 className="mt-4 font-display text-4xl leading-tight text-white sm:text-5xl">
                                    Access official examination
                                    <span className="text-gold-500"> information.</span>
                                </h2>

                                <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400">
                                    Visit the Controller of Examination section for the latest
                                    examination-related information and academic procedures.
                                </p>
                            </div>

                            <a
                                href="https://ncerc.ac.in/controller-of-examination.php"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex w-fit shrink-0 items-center gap-3 border border-gold-500 px-6 py-4 text-xs font-bold uppercase tracking-[0.12em] text-gold-500 transition hover:bg-gold-500 hover:text-slate-950"
                            >
                                Open Examination Cell
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
