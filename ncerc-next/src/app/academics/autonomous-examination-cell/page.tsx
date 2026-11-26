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

            <main className="overflow-hidden bg-[#FAF7F2] text-[#1E1917]">

                {/* =====================================================
                    HERO
                ====================================================== */}
                <section className="relative overflow-hidden bg-[#20235A]">

                    {/* Decorative Elements */}
                    <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full border border-[#D2B87C]/20" />

                    <div className="pointer-events-none absolute -right-16 -top-16 h-[350px] w-[350px] rounded-full border border-[#D2B87C]/10" />

                    <div className="pointer-events-none absolute bottom-[-180px] left-[-180px] h-[420px] w-[420px] rounded-full border border-white/5" />

                    {/* Decorative Line */}
                    <div className="pointer-events-none absolute left-[8%] top-[30%] hidden h-32 w-px rotate-[25deg] bg-[#D2B87C]/20 lg:block" />

                    <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8 lg:pb-24 lg:pt-36">

                        <div className="max-w-4xl">

                            <div className="mb-7 flex items-center gap-4">

                                <span className="h-px w-10 bg-[#D2B87C] sm:w-12" />

                                <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C] sm:text-xs sm:tracking-[0.28em]">
                                    Autonomous Academics
                                </span>

                            </div>


                            <h1 className="font-display text-5xl leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl lg:text-8xl">

                                Autonomous

                                <span className="block text-[#D2B87C]">
                                    Examination Cell
                                </span>

                            </h1>


                            <p className="mt-7 max-w-2xl text-[15px] leading-7 text-white/65 sm:mt-8 sm:text-lg sm:leading-8">
                                An academic examination framework dedicated to maintaining
                                transparency, efficiency and integrity throughout the
                                examination process at NCERC.
                            </p>

                        </div>


                        <div className="mt-10 flex flex-col gap-4 sm:mt-14 sm:flex-row sm:flex-wrap sm:items-center">

                            <a
                                href="https://ncerc.ac.in/controller-of-examination.php"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex w-fit items-center gap-3 bg-[#D2B87C] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-[#20235A] transition hover:bg-[#D2B87C]/90"
                            >
                                Controller of Examination

                                <ArrowUpRight className="h-4 w-4" />
                            </a>


                            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-white/50">

                                <ShieldCheck className="h-4 w-4 text-[#D2B87C]" />

                                Academic Administration

                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    INTRODUCTION
                ====================================================== */}
                <section className="border-b border-[#20235A]/10 bg-[#FAF7F2]">

                    <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-6 sm:py-16 lg:grid-cols-[0.8fr_1.2fr] lg:px-8 lg:py-24">

                        <div>

                            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                                Examination Cell
                            </span>


                            <h2 className="mt-4 max-w-xl font-display text-4xl leading-tight tracking-tight text-[#20235A] sm:text-5xl">
                                Ensuring a structured and transparent examination process.
                            </h2>

                        </div>


                        <div className="max-w-2xl lg:pt-7">

                            <p className="text-base leading-8 text-[#1E1917]/65">
                                The Autonomous Examination Cell supports the academic
                                examination system of NCERC by facilitating an organised,
                                transparent and efficient examination process for students
                                and academic departments.
                            </p>


                            <p className="mt-5 text-base leading-8 text-[#1E1917]/65">
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
                <section className="bg-white py-16 sm:py-20 lg:py-28">

                    <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

                        <div className="max-w-2xl">

                            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                                Academic Administration
                            </span>


                            <h2 className="mt-4 font-display text-4xl leading-tight text-[#20235A] sm:text-5xl">
                                Supporting academic excellence through examination.
                            </h2>

                        </div>


                        <div className="mt-14 grid gap-px border border-[#20235A]/10 bg-[#20235A]/10 md:grid-cols-3">

                            {/* =================================================
                                CARD 01
                            ================================================== */}
                            <div className="bg-white p-8 transition hover:bg-[#FAF7F2] lg:p-10">

                                <div className="flex h-12 w-12 items-center justify-center border border-[#D2B87C]/60 text-[#8F7746]">

                                    <ClipboardCheck className="h-5 w-5" />

                                </div>


                                <span className="mt-8 block text-xs font-bold tracking-[0.16em] text-[#8F7746]">
                                    01
                                </span>


                                <h3 className="mt-3 font-display text-2xl text-[#20235A]">
                                    Examination Management
                                </h3>


                                <p className="mt-4 text-sm leading-7 text-[#1E1917]/65">
                                    A structured examination framework supporting the smooth
                                    administration of academic assessments.
                                </p>

                            </div>


                            {/* =================================================
                                CARD 02
                            ================================================== */}
                            <div className="bg-white p-8 transition hover:bg-[#FAF7F2] lg:p-10">

                                <div className="flex h-12 w-12 items-center justify-center border border-[#D2B87C]/60 text-[#8F7746]">

                                    <ShieldCheck className="h-5 w-5" />

                                </div>


                                <span className="mt-8 block text-xs font-bold tracking-[0.16em] text-[#8F7746]">
                                    02
                                </span>


                                <h3 className="mt-3 font-display text-2xl text-[#20235A]">
                                    Transparency
                                </h3>


                                <p className="mt-4 text-sm leading-7 text-[#1E1917]/65">
                                    Examination procedures are supported by an organised
                                    academic system focused on fairness and accountability.
                                </p>

                            </div>


                            {/* =================================================
                                CARD 03
                            ================================================== */}
                            <div className="bg-white p-8 transition hover:bg-[#FAF7F2] lg:p-10">

                                <div className="flex h-12 w-12 items-center justify-center border border-[#D2B87C]/60 text-[#8F7746]">

                                    <GraduationCap className="h-5 w-5" />

                                </div>


                                <span className="mt-8 block text-xs font-bold tracking-[0.16em] text-[#8F7746]">
                                    03
                                </span>


                                <h3 className="mt-3 font-display text-2xl text-[#20235A]">
                                    Student Support
                                </h3>


                                <p className="mt-4 text-sm leading-7 text-[#1E1917]/65">
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
                <section className="border-y border-[#20235A]/10 bg-[#F2EFE8]">

                    <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">

                        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

                            {/* Left */}
                            <div>

                                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                                    Official Resource
                                </span>


                                <h2 className="mt-4 font-display text-4xl leading-tight text-[#20235A] sm:text-5xl">
                                    Controller of Examination
                                </h2>

                            </div>


                            {/* Right */}
                            <div className="border border-[#20235A]/10 bg-white p-7 sm:p-9 lg:p-10">

                                <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">

                                    <div className="flex items-start gap-5">

                                        <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-[#20235A] text-[#D2B87C]">

                                            <FileText className="h-6 w-6" />

                                        </div>


                                        <div>

                                            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8F7746]">
                                                Official Information
                                            </span>


                                            <h3 className="mt-2 font-display text-2xl text-[#20235A]">
                                                Controller of Examination
                                            </h3>


                                            <p className="mt-2 max-w-xl text-sm leading-7 text-[#1E1917]/65">
                                                Access the official Controller of Examination section
                                                for examination-related information and updates.
                                            </p>

                                        </div>

                                    </div>


                                    <a
                                        href="https://ncerc.ac.in/controller-of-examination.php"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex shrink-0 items-center justify-center gap-2 border border-[#20235A] px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-[#20235A] transition hover:bg-[#20235A] hover:text-white"
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
                <section className="bg-[#20235A]">

                    <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

                        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

                            <div className="max-w-3xl">

                                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                    Examination Services
                                </span>


                                <h2 className="mt-4 font-display text-4xl leading-tight text-white sm:text-5xl">

                                    Access official examination

                                    <span className="text-[#D2B87C]">
                                        {" "}information.
                                    </span>

                                </h2>


                                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/55">
                                    Visit the Controller of Examination section for the latest
                                    examination-related information and academic procedures.
                                </p>

                            </div>


                            <a
                                href="https://ncerc.ac.in/controller-of-examination.php"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex w-fit shrink-0 items-center gap-3 border border-[#D2B87C] px-6 py-4 text-xs font-bold uppercase tracking-[0.12em] text-[#D2B87C] transition hover:bg-[#D2B87C] hover:text-[#20235A]"
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
