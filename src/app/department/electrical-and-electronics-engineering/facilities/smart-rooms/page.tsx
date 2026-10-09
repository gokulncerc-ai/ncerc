import Link from "next/link";
import {
    ArrowLeft,
    ArrowUpRight,
    CheckCircle2,
    ChevronRight,
    Laptop,
    Monitor,
    Presentation,
    Users,
    Wifi,
    Zap,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../../DepartmentNav/page";

interface SmartRoomCard {
    number: string;
    title: string;
    description: string;
    image: string;
    icon: React.ReactNode;
}

interface SmartRoomFeature {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const smartRoomCards: SmartRoomCard[] = [
    {
        number: "01",
        title: "Interactive Learning Spaces",
        description:
            "Technology-enabled classrooms designed to make teaching more engaging, visual and interactive.",
        image:
            "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=85",
        icon: <Presentation className="h-5 w-5" />,
    },
    {
        number: "02",
        title: "Digital Teaching Environment",
        description:
            "Modern presentation and digital learning facilities supporting multimedia-based academic delivery.",
        image:
            "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=85",
        icon: <Monitor className="h-5 w-5" />,
    },
    {
        number: "03",
        title: "Connected Learning",
        description:
            "A connected academic environment that supports collaborative learning, digital resources and communication.",
        image:
            "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=85",
        icon: <Wifi className="h-5 w-5" />,
    },
];

const smartRoomFeatures: SmartRoomFeature[] = [
    {
        icon: <Monitor className="h-5 w-5" />,
        title: "Digital Presentation",
        description:
            "Multimedia-enabled teaching environments support presentations, demonstrations and visual learning.",
    },
    {
        icon: <Laptop className="h-5 w-5" />,
        title: "Technology-Enabled Learning",
        description:
            "Technology is integrated into classroom activities to complement conventional academic instruction.",
    },
    {
        icon: <Users className="h-5 w-5" />,
        title: "Collaborative Learning",
        description:
            "Flexible academic environments encourage interaction between students and faculty.",
    },
    {
        icon: <Zap className="h-5 w-5" />,
        title: "Modern Academic Experience",
        description:
            "Smart learning spaces create a contemporary environment suited to changing educational needs.",
    },
];

export default function SmartRoomsPage() {
    return (
        <>
            <SiteHeader />

            {/* HERO */}
            <section className="relative isolate overflow-hidden bg-[#20235A]">
                <div className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full border border-[#D2B87C]/20" />
                <div className="pointer-events-none absolute -right-8 -top-16 h-52 w-52 rounded-full border border-[#D2B87C]/10" />

                <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
                    <div className="max-w-4xl">
                        <div className="mb-6 flex items-center gap-3">
                            <span className="h-px w-10 bg-[#D2B87C]" />

                            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D2B87C]">
                                Electrical &amp; Electronics Engineering
                            </p>
                        </div>

                        <h1 className="max-w-3xl font-serif text-4xl leading-[1.05] text-white sm:text-5xl lg:text-6xl">
                            Smart rooms for
                            <span className="block text-[#D2B87C]">
                                connected learning.
                            </span>
                        </h1>

                        <p className="mt-6 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                            Technology-enabled academic spaces designed to support
                            interactive teaching, digital learning and meaningful classroom
                            engagement at NCERC.
                        </p>

                        <div className="mt-8 flex flex-wrap items-center gap-3">
                            <a
                                href="#smart-rooms"
                                className="group inline-flex items-center gap-2 rounded-full bg-[#D2B87C] px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#20235A] transition-all duration-300 hover:bg-white"
                            >
                                Explore Smart Rooms
                                <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </a>

                            <Link
                                href="/departments/electrical-and-electronics-engineering/facilities"
                                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:border-[#D2B87C]/60 hover:text-[#D2B87C]"
                            >
                                <ArrowLeft className="h-4 w-4" />
                                Back to Facilities
                            </Link>
                        </div>
                    </div>
                </div>

                {/* INFO STRIP */}
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
                                Environment
                            </p>

                            <p className="mt-2 font-serif text-lg text-white">
                                Digital &amp; Interactive
                            </p>
                        </div>

                        <div className="px-6 py-5 sm:px-10 lg:px-16">
                            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                Facility
                            </p>

                            <p className="mt-2 font-serif text-lg text-white">
                                Smart Learning Spaces
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <InnerHeader />

            <main className="bg-[#FAF7F2]">
                {/* INTRO */}
                <section className="border-b border-[#1E1917]/10">
                    <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
                        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
                            <div>
                                <div className="mb-5 flex items-center gap-3">
                                    <span className="h-px w-8 bg-[#8F7746]" />

                                    <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                                        Smart Learning Environment
                                    </p>
                                </div>

                                <h2 className="max-w-xl font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                                    More than a classroom.
                                    <span className="block text-[#8F7746]">
                                        A connected experience.
                                    </span>
                                </h2>
                            </div>

                            <div>
                                <p className="max-w-2xl text-sm leading-7 text-[#1E1917]/70 sm:text-base">
                                    Smart rooms bring technology and academic teaching together
                                    to create a more engaging learning environment. These spaces
                                    support multimedia presentations, digital resources,
                                    collaborative activities and interactive classroom
                                    experiences.
                                </p>

                                <p className="mt-5 max-w-2xl text-sm leading-7 text-[#1E1917]/60 sm:text-base">
                                    Designed around the needs of modern learners, the department's
                                    smart learning spaces help students experience concepts
                                    through a combination of instruction, visual content and
                                    technology-supported activities.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FEATURED SMART ROOM */}
                <section id="smart-rooms" className="bg-white">
                    <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
                        <div className="grid overflow-hidden rounded-[2rem] border border-[#1E1917]/10 bg-[#F2EFE8] lg:grid-cols-[1.05fr_0.95fr]">
                            {/* IMAGE */}
                            <div className="group relative min-h-[360px] overflow-hidden lg:min-h-[600px]">
                                <img
                                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=2000&q=90"
                                    alt="Smart classroom and collaborative learning environment"
                                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#20235A]/60 via-transparent to-transparent" />

                                <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8">
                                    <span className="rounded-full border border-white/20 bg-[#20235A]/70 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                                        Featured Facility
                                    </span>
                                </div>
                            </div>

                            {/* CONTENT */}
                            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
                                <div className="mb-6 flex items-center gap-3">
                                    <span className="h-px w-8 bg-[#D2B87C]" />

                                    <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                                        Smart Classroom
                                    </p>
                                </div>

                                <h2 className="font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl">
                                    Technology that supports
                                    <span className="block text-[#8F7746]">
                                        better learning.
                                    </span>
                                </h2>

                                <p className="mt-6 text-sm leading-7 text-[#1E1917]/70 sm:text-base">
                                    Smart classrooms provide an enhanced academic environment
                                    where conventional teaching is supported by digital
                                    presentation tools and technology-enabled learning
                                    resources.
                                </p>

                                <div className="mt-8 space-y-4">
                                    {[
                                        "Digital and multimedia-based teaching",
                                        "Interactive academic presentations",
                                        "Technology-supported classroom activities",
                                        "Collaborative student learning",
                                    ].map((item) => (
                                        <div
                                            key={item}
                                            className="flex items-start gap-3"
                                        >
                                            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#8F7746]" />

                                            <p className="text-sm leading-6 text-[#1E1917]/70">
                                                {item}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-9">
                                    <a
                                        href="#learning"
                                        className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#20235A]"
                                    >
                                        Discover the learning experience
                                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SMART ROOM CARDS */}
                <section className="bg-[#FAF7F2]">
                    <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
                        <div className="max-w-3xl">
                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-px w-8 bg-[#8F7746]" />

                                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                                    Smart Facilities
                                </p>
                            </div>

                            <h2 className="font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                                Designed around
                                <span className="text-[#8F7746]"> modern learning.</span>
                            </h2>

                            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#1E1917]/65 sm:text-base">
                                Smart learning spaces combine academic instruction with
                                technology, creating classrooms that are flexible, engaging
                                and prepared for contemporary teaching methods.
                            </p>
                        </div>

                        <div className="mt-12 grid gap-6 md:grid-cols-3">
                            {smartRoomCards.map((card) => (
                                <article
                                    key={card.number}
                                    className="group overflow-hidden rounded-3xl border border-[#1E1917]/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                                >
                                    <div className="relative h-64 overflow-hidden">
                                        <img
                                            src={card.image}
                                            alt={card.title}
                                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-[#20235A]/70 via-transparent to-transparent" />

                                        <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-[#20235A]/80 text-white backdrop-blur-sm">
                                            {card.icon}
                                        </div>

                                        <span className="absolute bottom-5 right-5 font-serif text-3xl text-white/80">
                                            {card.number}
                                        </span>
                                    </div>

                                    <div className="p-7">
                                        <h3 className="font-serif text-xl text-[#20235A]">
                                            {card.title}
                                        </h3>

                                        <p className="mt-4 text-sm leading-7 text-[#1E1917]/65">
                                            {card.description}
                                        </p>

                                        <div className="mt-6 h-px w-10 bg-[#D2B87C] transition-all duration-300 group-hover:w-16" />
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* LEARNING EXPERIENCE */}
                <section id="learning" className="bg-white">
                    <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
                        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
                            <div>
                                <div className="mb-5 flex items-center gap-3">
                                    <span className="h-px w-8 bg-[#8F7746]" />

                                    <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                                        The Learning Experience
                                    </p>
                                </div>

                                <h2 className="font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                                    Learn.
                                    <span className="block text-[#8F7746]">Interact.</span>
                                    <span className="block">Apply.</span>
                                </h2>

                                <p className="mt-6 max-w-md text-sm leading-7 text-[#1E1917]/65 sm:text-base">
                                    Smart rooms create opportunities for students to experience
                                    academic concepts through a blend of instruction, technology
                                    and interaction.
                                </p>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                                {[
                                    {
                                        number: "01",
                                        title: "See",
                                        text: "Visual presentations and multimedia resources help make complex concepts easier to understand.",
                                    },
                                    {
                                        number: "02",
                                        title: "Interact",
                                        text: "Technology-supported classrooms encourage active participation and academic discussion.",
                                    },
                                    {
                                        number: "03",
                                        title: "Explore",
                                        text: "Digital resources allow learners to engage with information beyond conventional classroom materials.",
                                    },
                                    {
                                        number: "04",
                                        title: "Apply",
                                        text: "Students can connect classroom concepts with practical examples and real-world applications.",
                                    },
                                ].map((item) => (
                                    <div
                                        key={item.number}
                                        className="rounded-3xl border border-[#1E1917]/10 bg-[#F2EFE8] p-7"
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="font-serif text-3xl text-[#8F7746]">
                                                {item.number}
                                            </span>

                                            <Monitor className="h-5 w-5 text-[#20235A]/60" />
                                        </div>

                                        <h3 className="mt-8 font-serif text-xl text-[#20235A]">
                                            {item.title}
                                        </h3>

                                        <p className="mt-3 text-sm leading-6 text-[#1E1917]/65">
                                            {item.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* FEATURES */}
                <section className="bg-[#F2EFE8]">
                    <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
                        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
                            <div>
                                <div className="mb-5 flex items-center gap-3">
                                    <span className="h-px w-8 bg-[#8F7746]" />

                                    <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                                        Technology &amp; Teaching
                                    </p>
                                </div>

                                <h2 className="font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl">
                                    Built for a
                                    <span className="block text-[#8F7746]">
                                        modern academic environment.
                                    </span>
                                </h2>

                                <p className="mt-5 max-w-md text-sm leading-7 text-[#1E1917]/65 sm:text-base">
                                    The smart room environment complements the department's
                                    academic infrastructure by bringing technology into everyday
                                    classroom learning.
                                </p>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                                {smartRoomFeatures.map((feature) => (
                                    <div
                                        key={feature.title}
                                        className="rounded-3xl border border-[#1E1917]/10 bg-white p-7"
                                    >
                                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#20235A] text-[#D2B87C]">
                                            {feature.icon}
                                        </div>

                                        <h3 className="mt-6 font-serif text-xl text-[#20235A]">
                                            {feature.title}
                                        </h3>

                                        <p className="mt-3 text-sm leading-6 text-[#1E1917]/65">
                                            {feature.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* SUPPORT SECTION */}
                <section className="bg-white">
                    <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
                        <div className="rounded-[2rem] bg-[#20235A] p-8 sm:p-10 lg:p-14">
                            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                                <div>
                                    <div className="mb-5 flex items-center gap-3">
                                        <span className="h-px w-8 bg-[#D2B87C]" />

                                        <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                            Academic Support
                                        </p>
                                    </div>

                                    <h2 className="font-serif text-3xl leading-tight text-white sm:text-4xl">
                                        Technology that
                                        <span className="block text-[#D2B87C]">
                                            supports every lesson.
                                        </span>
                                    </h2>

                                    <p className="mt-5 max-w-lg text-sm leading-7 text-white/65 sm:text-base">
                                        Smart rooms provide faculty and students with a flexible
                                        environment where digital tools can complement teaching,
                                        discussion and academic activities.
                                    </p>
                                </div>

                                <div className="grid gap-3 sm:grid-cols-2">
                                    {[
                                        "Multimedia presentations",
                                        "Digital learning content",
                                        "Interactive classroom activities",
                                        "Collaborative discussions",
                                        "Technology-supported teaching",
                                        "Contemporary learning environment",
                                    ].map((item) => (
                                        <div
                                            key={item}
                                            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-4"
                                        >
                                            <CheckCircle2 className="h-4 w-4 shrink-0 text-[#D2B87C]" />

                                            <span className="text-sm text-white/75">
                                                {item}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CLOSING CTA */}
                <section className="bg-[#20235A]">
                    <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
                        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                            <div className="max-w-3xl">
                                <div className="mb-5 flex items-center gap-3">
                                    <span className="h-px w-8 bg-[#D2B87C]" />

                                    <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                        Electrical &amp; Electronics Engineering
                                    </p>
                                </div>

                                <h2 className="font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
                                    A smarter environment
                                    <span className="block text-[#D2B87C]">
                                        for better learning.
                                    </span>
                                </h2>

                                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
                                    Explore the complete range of facilities that support
                                    academic learning, practical education and student
                                    development at the department.
                                </p>
                            </div>

                            <Link
                                href="/departments/electrical-and-electronics-engineering/facilities"
                                className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-[#D2B87C] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#20235A] transition-all duration-300 hover:bg-white"
                            >
                                View All Facilities
                                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <FooterSection />
        </>
    );
}