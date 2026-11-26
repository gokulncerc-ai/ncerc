import Link from "next/link";
import {
    ArrowUpRight,
    Award,
    ChevronRight,
    GraduationCap,
    Medal,
    Sparkles,
    Trophy,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../../DepartmentNav/DepartmentNav";


interface AchievementCard {
    number: string;
    title: string;
    description: string;
    icon: React.ReactNode;
}

const achievementCards: AchievementCard[] = [
    {
        number: "01",
        title: "Academic Recognition",
        description:
            "Recognition received by students and members of the department for their academic performance and contribution to engineering education.",
        icon: <GraduationCap className="h-6 w-6" />,
    },
    {
        number: "02",
        title: "Technical Excellence",
        description:
            "Achievements that reflect technical knowledge, engineering skills, innovation and the practical application of classroom learning.",
        icon: <Sparkles className="h-6 w-6" />,
    },
    {
        number: "03",
        title: "Competitions & Events",
        description:
            "Participation and recognition in technical competitions, academic events and activities that encourage students to demonstrate their abilities.",
        icon: <Trophy className="h-6 w-6" />,
    },
    {
        number: "04",
        title: "Student Achievements",
        description:
            "A platform to highlight individual student accomplishments beyond regular academic performance.",
        icon: <Medal className="h-6 w-6" />,
    },
    {
        number: "05",
        title: "Department Recognition",
        description:
            "Milestones and recognitions that contribute to the department's culture of continuous learning, achievement and excellence.",
        icon: <Award className="h-6 w-6" />,
    },
];

export default function OtherAchievementsPage() {
    return (
        <>
            <SiteHeader />

            {/* Hero */}
            <section className="relative isolate overflow-hidden bg-[#20235A]">
                <div className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full border border-[#D2B87C]/20" />
                <div className="pointer-events-none absolute -right-8 -top-16 h-52 w-52 rounded-full border border-[#D2B87C]/10" />
                <div className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full border border-white/5" />

                <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
                    <div className="max-w-4xl">
                        <div className="mb-6 flex items-center gap-3">
                            <span className="h-px w-10 bg-[#D2B87C]" />

                            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D2B87C]">
                                Academic Excellence
                            </p>
                        </div>

                        <h1 className="max-w-4xl font-serif text-4xl leading-[1.05] text-white sm:text-5xl lg:text-6xl">
                            Achievements that
                            <span className="block text-[#D2B87C]">
                                inspire excellence.
                            </span>
                        </h1>

                        <p className="mt-6 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                            Discover achievements beyond the regular academic record and
                            celebrate the accomplishments that reflect talent, dedication,
                            innovation and participation.
                        </p>

                        <div className="mt-8 flex flex-wrap items-center gap-3">
                            <a
                                href="#achievements"
                                className="group inline-flex items-center gap-2 rounded-full bg-[#D2B87C] px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#20235A] transition-all duration-300 hover:bg-white"
                            >
                                Explore Achievements
                                <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </a>

                            <Link
                                href="/department/electrical-and-electronics-engineering/academic-excellence"
                                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:border-[#D2B87C]/60 hover:text-[#D2B87C]"
                            >
                                Academic Excellence
                                <ArrowUpRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Information Strip */}
                <div className="border-t border-white/10 bg-white/[0.03]">
                    <div className="mx-auto grid max-w-[1440px] grid-cols-1 sm:grid-cols-3">
                        <div className="border-b border-white/10 px-6 py-5 sm:border-b-0 sm:border-r sm:px-10 lg:px-16">
                            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                Department
                            </p>

                            <p className="mt-2 font-serif text-lg text-white">
                                Electrical &amp; Electronics
                            </p>
                        </div>

                        <div className="border-b border-white/10 px-6 py-5 sm:border-b-0 sm:border-r sm:px-10 lg:px-16">
                            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                Section
                            </p>

                            <p className="mt-2 font-serif text-lg text-white">
                                Other Achievements
                            </p>
                        </div>

                        <div className="px-6 py-5 sm:px-10 lg:px-16">
                            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                Focus
                            </p>

                            <p className="mt-2 font-serif text-lg text-white">
                                Beyond Academics
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <InnerHeader />

            <main className="bg-[#FAF7F2]">
                {/* Introduction */}
                <section className="border-b border-[#1E1917]/10">
                    <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
                        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-20">
                            <div>
                                <div className="flex items-center gap-3">
                                    <span className="h-px w-10 bg-[#D2B87C]" />

                                    <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                                        Other Achievements
                                    </p>
                                </div>

                                <h2 className="mt-5 max-w-xl font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                                    Excellence extends beyond the classroom.
                                </h2>
                            </div>

                            <div className="max-w-2xl lg:ml-auto">
                                <p className="text-sm leading-7 text-[#1E1917]/65 sm:text-base">
                                    Academic excellence is shaped by more than examination
                                    results. This section provides a space to recognise
                                    accomplishments that demonstrate technical ability,
                                    participation, creativity, leadership and a commitment to
                                    continuous development.
                                </p>

                                <p className="mt-5 text-sm leading-7 text-[#1E1917]/65 sm:text-base">
                                    These achievements complement the department&apos;s academic
                                    record and reflect the diverse ways in which students engage
                                    with engineering education.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Achievement Overview */}
                <section id="achievements" className="bg-white">
                    <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
                        <div className="mb-12 max-w-3xl">
                            <div className="flex items-center gap-3">
                                <span className="h-px w-10 bg-[#D2B87C]" />

                                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                                    Areas of Excellence
                                </p>
                            </div>

                            <h2 className="mt-5 font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                                Recognising achievement in many forms.
                            </h2>

                            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#1E1917]/65 sm:text-base">
                                Explore the different areas in which students and the
                                department can demonstrate achievement, initiative and
                                excellence.
                            </p>
                        </div>

                        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                            {achievementCards.map((card, index) => (
                                <article
                                    key={card.number}
                                    className={`group rounded-[2rem] border border-[#1E1917]/10 bg-[#FAF7F2] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#D2B87C]/60 hover:shadow-xl ${index === 0
                                        ? "lg:col-span-2 lg:flex lg:items-end lg:justify-between lg:gap-10"
                                        : ""
                                        }`}
                                >
                                    <div>
                                        <div className="flex items-center justify-between">
                                            <span className="font-serif text-3xl text-[#D2B87C]">
                                                {card.number}
                                            </span>

                                            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#20235A] text-[#D2B87C] transition-transform duration-300 group-hover:scale-105">
                                                {card.icon}
                                            </div>
                                        </div>

                                        <h3 className="mt-8 font-serif text-2xl text-[#20235A] sm:text-3xl">
                                            {card.title}
                                        </h3>

                                        <p className="mt-4 max-w-xl text-sm leading-7 text-[#1E1917]/60 sm:text-base">
                                            {card.description}
                                        </p>
                                    </div>

                                    <div className="mt-8 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746] lg:mt-10">
                                        <span>Excellence</span>
                                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Achievement Philosophy */}
                <section className="bg-[#F2EFE8]">
                    <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
                        <div className="grid overflow-hidden rounded-[2rem] bg-[#20235A] lg:grid-cols-[1.1fr_0.9fr]">
                            <div className="p-8 sm:p-10 lg:p-14">
                                <div className="flex items-center gap-3">
                                    <span className="h-px w-10 bg-[#D2B87C]" />

                                    <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                        Beyond Academics
                                    </p>
                                </div>

                                <h2 className="mt-5 max-w-2xl font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
                                    Every achievement reflects a journey of learning.
                                </h2>

                                <p className="mt-6 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
                                    Engineering education encourages students to learn through
                                    experience, participation and application. Achievements
                                    gained through these experiences become an important part of
                                    their overall development.
                                </p>
                            </div>

                            <div className="border-t border-white/10 bg-white/[0.04] p-8 sm:p-10 lg:border-l lg:border-t-0 lg:p-14">
                                <Award className="h-8 w-8 text-[#D2B87C]" />

                                <p className="mt-6 font-serif text-2xl text-white sm:text-3xl">
                                    Talent. Initiative. Recognition.
                                </p>

                                <p className="mt-4 text-sm leading-7 text-white/60">
                                    From technical accomplishments to participation and
                                    leadership, every experience contributes to the development
                                    of confident and capable engineering professionals.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Recognition Areas */}
                <section className="bg-white">
                    <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
                        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                            <div>
                                <div className="flex items-center gap-3">
                                    <span className="h-px w-10 bg-[#D2B87C]" />

                                    <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                                        Student Development
                                    </p>
                                </div>

                                <h2 className="mt-5 font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                                    Building confidence beyond the curriculum.
                                </h2>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="rounded-3xl border border-[#1E1917]/10 bg-[#FAF7F2] p-7">
                                    <Sparkles className="h-6 w-6 text-[#8F7746]" />

                                    <h3 className="mt-6 font-serif text-xl text-[#20235A]">
                                        Innovation
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-[#1E1917]/60">
                                        Encouraging students to explore ideas, technologies and
                                        engineering solutions.
                                    </p>
                                </div>

                                <div className="rounded-3xl border border-[#1E1917]/10 bg-[#FAF7F2] p-7">
                                    <Trophy className="h-6 w-6 text-[#8F7746]" />

                                    <h3 className="mt-6 font-serif text-xl text-[#20235A]">
                                        Competition
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-[#1E1917]/60">
                                        Creating opportunities to demonstrate knowledge, skill and
                                        problem-solving ability.
                                    </p>
                                </div>

                                <div className="rounded-3xl border border-[#1E1917]/10 bg-[#FAF7F2] p-7">
                                    <GraduationCap className="h-6 w-6 text-[#8F7746]" />

                                    <h3 className="mt-6 font-serif text-xl text-[#20235A]">
                                        Learning
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-[#1E1917]/60">
                                        Connecting academic knowledge with practical and
                                        experiential learning.
                                    </p>
                                </div>

                                <div className="rounded-3xl border border-[#1E1917]/10 bg-[#FAF7F2] p-7">
                                    <Medal className="h-6 w-6 text-[#8F7746]" />

                                    <h3 className="mt-6 font-serif text-xl text-[#20235A]">
                                        Recognition
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-[#1E1917]/60">
                                        Celebrating accomplishments that reflect commitment and
                                        excellence.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Closing CTA */}
                <section className="bg-[#20235A]">
                    <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
                        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                            <div className="max-w-3xl">
                                <div className="flex items-center gap-3">
                                    <span className="h-px w-10 bg-[#D2B87C]" />

                                    <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                        Electrical &amp; Electronics Engineering
                                    </p>
                                </div>

                                <h2 className="mt-5 font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
                                    Celebrating the achievements that shape a culture of
                                    excellence.
                                </h2>

                                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
                                    Explore the wider academic excellence portfolio of the
                                    Electrical and Electronics Engineering department.
                                </p>
                            </div>

                            <Link
                                href="/department/electrical-and-electronics-engineering/academic-excellence"
                                className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-[#D2B87C] px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#20235A] transition-all duration-300 hover:bg-white"
                            >
                                Academic Excellence
                                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <FooterSection />
        </>
    );
}