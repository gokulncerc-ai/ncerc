import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    Award,
    BookOpen,
    Quote,
    Sparkles,
} from "lucide-react";
import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
const principalImage = "/images/principal/ncercprinci.webp";

export default function Principal() {
    return (
        <div className="min-h-screen bg-white text-slate-700">
            <SiteHeader />

            <main>
                {/* Hero */}
                <section className="relative overflow-hidden bg-[#faf7f2]">
                    <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#eee8df] blur-3xl opacity-60" />
                    <div className="absolute bottom-0 left-0 h-56 w-56 rounded-full bg-[#e9e5f0] blur-3xl opacity-50" />

                    <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-16 sm:px-8 lg:px-12 lg:pb-24 lg:pt-20">
                        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
                            {/* Portrait */}
                            <div className="relative mx-auto w-full max-w-md lg:mx-0">
                                <div className="absolute -bottom-5 -left-5 h-28 w-28 border-b border-l border-[#c99a2e]/50" />
                                <div className="absolute -right-5 -top-5 h-28 w-28 border-r border-t border-[#c99a2e]/50" />

                                <div className="relative overflow-hidden bg-slate-200 shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
                                    <div className="relative aspect-[4/5]">
                                        <Image
                                            src={principalImage}
                                            alt="Dr. Anoop K J, Principal of Nehru College of Engineering and Research Centre"
                                            fill
                                            priority
                                            className="object-cover"
                                            sizes="(max-width: 1024px) 90vw, 40vw"
                                        />
                                    </div>
                                </div>

                                <div className="absolute -bottom-7 right-5 flex items-center gap-3 bg-[#11152f] px-5 py-4 text-white shadow-xl sm:right-8">
                                    <div className="flex h-10 w-10 items-center justify-center bg-[#c99a2e]">
                                        <Award
                                            className="h-5 w-5 text-white"
                                            strokeWidth={1.6}
                                        />
                                    </div>

                                    <div>
                                        <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-[#d8b45a]">
                                            Academic Leadership
                                        </p>
                                        <p className="mt-0.5 font-display text-lg text-white">
                                            Principal
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Hero Content */}
                            <div className="lg:pl-4">
                                <div className="mb-5 flex items-center gap-3">
                                    <span className="h-px w-10 bg-[#c99a2e]" />
                                    <span className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-[#a57a18]">
                                        Leadership
                                    </span>
                                </div>

                                <h1 className="max-w-2xl font-display text-5xl font-medium leading-[1.02] tracking-[-0.025em] text-[#11152f] sm:text-6xl lg:text-7xl">
                                    The Principal
                                </h1>

                                <p className="mt-7 max-w-2xl font-display text-2xl leading-relaxed text-[#45485b] sm:text-3xl">
                                    “Education is the manifestation of the perfection already in
                                    man.”
                                </p>

                                <p className="mt-5 font-sans text-sm font-medium uppercase tracking-[0.16em] text-slate-500">
                                    — Swami Vivekananda
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Introduction strip */}
                <section className="border-b border-slate-200 bg-white">
                    <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 sm:px-8 md:grid-cols-[1fr_auto] md:items-center lg:px-12">
                        <div>
                            <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#a57a18]">
                                A Message from the Principal
                            </p>

                            <h2 className="mt-2 max-w-3xl font-display text-3xl leading-tight text-[#11152f] sm:text-4xl">
                                Shaping engineers with knowledge, character and purpose.
                            </h2>
                        </div>

                        <div className="hidden h-16 w-px bg-slate-200 md:block" />

                        <div className="flex items-center gap-3 text-sm text-slate-500 md:max-w-xs">
                            <Sparkles className="h-5 w-5 shrink-0 text-[#c99a2e]" strokeWidth={1.5} />
                            <span>
                                Academic excellence, innovation and holistic development.
                            </span>
                        </div>
                    </div>
                </section>

                {/* Principal's Message */}
                <section className="bg-white">
                    <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
                        <div className="grid gap-12 lg:grid-cols-[220px_1fr] lg:gap-20">
                            {/* Side label */}
                            <aside className="lg:pt-2">
                                <div className="flex items-center gap-3 lg:block">
                                    <div className="flex h-12 w-12 items-center justify-center border border-[#d8bd78] text-[#a57a18]">
                                        <BookOpen className="h-5 w-5" strokeWidth={1.5} />
                                    </div>

                                    <div className="lg:mt-5">
                                        <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#a57a18]">
                                            From the Desk
                                        </p>
                                        <p className="mt-1 font-display text-xl text-[#11152f]">
                                            Principal&apos;s Message
                                        </p>
                                    </div>
                                </div>
                            </aside>

                            {/* Message */}
                            <article className="max-w-4xl">
                                <div className="relative">
                                    <Quote
                                        className="absolute -left-1 -top-7 h-12 w-12 text-[#c99a2e]/20"
                                        strokeWidth={1}
                                    />

                                    <div className="relative space-y-7 font-sans text-[17px] leading-8 text-slate-600 text-justify">
                                        <p className="text-xl leading-8 text-slate-700 sm:text-2xl sm:leading-9 ">
                                            Welcome to Nehru College of Engineering and Research
                                            Centre (NCERC), Pambady, established in the year 2002 by
                                            the founder chairman Late Shri P.K. Das, under the
                                            ‘Nehru College of Education and Charitable Trust.
                                        </p>

                                        <p>
                                            It is a proud institution under the Nehru Group of
                                            Institutions (NGI), committed to academic excellence,
                                            innovation, and holistic development. Since 1968, the NGI
                                            brand has been the result of the exemplary vision and
                                            meticulous efforts of our Founder Chairman, along with
                                            the dedication and commitment of all NGI stakeholders.
                                        </p>

                                        <p>
                                            As the Principal of NCERC, it is my privilege to lead a
                                            vibrant community of students, faculty, and staff who are
                                            dedicated to shaping the future through knowledge,
                                            creativity, and discipline. At NCERC, we believe that
                                            engineering education goes beyond classrooms and
                                            textbooks. It is about nurturing critical thinking,
                                            ethical values, leadership skills, and a passion for
                                            lifelong learning.
                                        </p>

                                        <p>
                                            Our college provides a dynamic learning environment
                                            supported by state-of-the-art infrastructure, experienced
                                            faculty, and a culture that encourages research,
                                            entrepreneurship, and community engagement to achieve its
                                            vision – “to mould true citizens who are millennium
                                            leaders and catalysts of change through excellence in
                                            education”.
                                        </p>

                                        <p>
                                            We strive to prepare our students not just to meet the
                                            demands of the industry, but to become responsible global
                                            citizens capable of addressing real-world challenges
                                            with integrity and innovation.
                                        </p>

                                        <p>
                                            I invite all aspiring engineers and researchers to join us
                                            in this exciting journey. Let us work together to build a
                                            future that reflects our collective potential and
                                            commitment to excellence.
                                        </p>
                                    </div>
                                </div>

                                {/* Signature */}
                                <div className="mt-12 border-t border-slate-200 pt-8 sm:mt-16">
                                    <p className="font-display text-2xl italic text-[#11152f]">
                                        Warm regards,
                                    </p>

                                    <div className="mt-6">
                                        <p className="font-display text-2xl font-medium text-[#11152f]">
                                            Dr. Anoop K J
                                        </p>

                                        <p className="mt-1 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#a57a18]">
                                            Principal
                                        </p>

                                        <p className="mt-3 max-w-md font-sans text-sm leading-6 text-slate-500">
                                            Nehru College of Engineering and Research Centre
                                            <br />
                                            Pambady, Thrissur
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </section>

                {/* Vision / closing section */}
                <section className="bg-[#11152f]">
                    <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
                        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
                            <div className="max-w-3xl">
                                <div className="mb-5 flex items-center gap-3">
                                    <span className="h-px w-10 bg-[#c99a2e]" />
                                    <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#d8b45a]">
                                        Our Vision
                                    </span>
                                </div>

                                <h2 className="font-display text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
                                    Moulding true citizens who become millennium leaders and
                                    catalysts of change.
                                </h2>
                            </div>

                            <Link
                                href="/about"
                                className="group inline-flex w-fit items-center gap-3 border border-white/20 px-6 py-3.5 font-sans text-sm font-semibold text-white transition-colors hover:border-[#c99a2e] hover:text-[#d8b45a]"
                            >
                                Discover NCERC
                                <ArrowRight
                                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                                    strokeWidth={1.7}
                                />
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <FooterSection />
        </div>
    );
}