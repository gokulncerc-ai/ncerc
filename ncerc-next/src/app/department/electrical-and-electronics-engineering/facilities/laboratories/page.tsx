import Link from "next/link";
import Image from "next/image";
import {
    ArrowLeft,
    ArrowDown,
    ArrowUpRight,
    CircuitBoard,
    Cpu,
    Gauge,
    Radio,
    Zap,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../../DepartmentNav/DepartmentNav";

const laboratories = [
    {
        number: "01",
        name: "Circuits Lab",
        description:
            "A practical learning space for understanding electrical circuits, network analysis and fundamental circuit principles.",
        image:
            "/images/dpt/electrical-and-electronics-engineering/facilites/laboratories/facilities1.webp",
        alt: "Electrical circuits laboratory",
        icon: CircuitBoard,
        tag: "Circuit Analysis",
    },
    {
        number: "02",
        name: "Electrical Machines Lab",
        description:
            "Explore electrical machines and understand their operating principles through practical laboratory work.",
        image:
            "/images/dpt/electrical-and-electronics-engineering/facilites/laboratories/facilities2.webp",
        alt: "Electrical machines laboratory",
        icon: Gauge,
        tag: "Machines & Systems",
    },
    {
        number: "03",
        name: "Basic Electrical Lab",
        description:
            "Develop a strong foundation in electrical measurements, basic experiments and essential electrical concepts.",
        image:
            "/images/dpt/electrical-and-electronics-engineering/facilites/laboratories/facilities3.webp",
        alt: "Basic electrical laboratory",
        icon: Zap,
        tag: "Electrical Fundamentals",
    },
    {
        number: "04",
        name: "Power Electronics Lab",
        description:
            "Gain practical exposure to power electronic circuits, switching devices and electrical power conversion.",
        image:
            "/images/dpt/electrical-and-electronics-engineering/facilites/laboratories/facilities4.webp",
        alt: "Power electronics laboratory",
        icon: Radio,
        tag: "Power Conversion",
    },
    {
        number: "05",
        name: "Digital Electronics Lab",
        description:
            "Understand digital logic, electronic components and the fundamental principles behind digital systems.",
        image:
            "/images/dpt/electrical-and-electronics-engineering/facilites/laboratories/facilities5.webp",
        alt: "Digital electronics laboratory",
        icon: Cpu,
        tag: "Digital Systems",
    },
];

export default function LaboratoriesPage() {
    return (
        <>
            <SiteHeader />

            {/* HERO */}
            <section className="relative isolate overflow-hidden bg-[#20235A] [&_p]:text-justify">
                <div className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full border border-[#D2B87C]/20" />
                <div className="pointer-events-none absolute -right-8 -top-16 h-52 w-52 rounded-full border border-[#D2B87C]/10" />
                <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full border border-white/5" />

                <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
                    <div className="grid items-end gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
                        <div>
                            <div className="mb-6 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#D2B87C]" />

                                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D2B87C]">
                                    Electrical &amp; Electronics Engineering
                                </p>
                            </div>

                            <h1 className="max-w-4xl font-serif text-4xl leading-[1.05] text-white sm:text-5xl lg:text-6xl">
                                Laboratories for
                                <span className="block text-[#D2B87C]">
                                    practical learning.
                                </span>
                            </h1>

                            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                                Explore the specialized laboratories that provide students
                                with practical exposure, experimentation and hands-on
                                experience in Electrical and Electronics Engineering.
                            </p>

                            <div className="mt-8 flex flex-wrap items-center gap-3">
                                <a
                                    href="#laboratories"
                                    className="group inline-flex items-center gap-2 rounded-full bg-[#D2B87C] px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#20235A] transition-colors duration-300 hover:bg-white"
                                >
                                    Explore Laboratories

                                    <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
                                </a>

                                <Link
                                    href="/department/electrical-and-electronics-engineering/facilities"
                                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors duration-300 hover:border-[#D2B87C] hover:text-[#D2B87C]"
                                >
                                    <ArrowLeft className="h-4 w-4" />
                                    Facilities
                                </Link>
                            </div>
                        </div>

                        <div className="relative hidden lg:block">
                            <div className="border-l border-[#D2B87C]/30 pl-8">
                                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                    Practical Education
                                </p>

                                <h2 className="mt-4 max-w-md font-serif text-3xl leading-tight text-white">
                                    Learning through experimentation and application.
                                </h2>

                                <p className="mt-5 max-w-md text-sm leading-7 text-white/55">
                                    Laboratory experiences connect engineering theory with
                                    practical experimentation and technical problem solving.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* INFORMATION STRIP */}
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
                                Learning
                            </p>
                            <p className="mt-2 font-serif text-lg text-white">
                                Practical &amp; Experimental
                            </p>
                        </div>

                        <div className="px-6 py-5 sm:px-10 lg:px-16">
                            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                Facilities
                            </p>
                            <p className="mt-2 font-serif text-lg text-white">
                                05 Laboratories
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* DEPARTMENT NAVIGATION */}
            <InnerHeader />

            <main className="overflow-hidden bg-[#FAF7F2] [&_p]:text-justify">
                {/* INTRODUCTION */}
                <section className="px-6 pb-12 pt-16 sm:px-10 sm:pb-16 sm:pt-20 lg:px-16 lg:pb-20 lg:pt-24">
                    <div className="mx-auto max-w-[1440px]">
                        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-20">
                            <div>
                                <div className="flex items-center gap-3">
                                    <span className="h-px w-8 bg-[#8F7746]" />
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                                        Laboratory Details
                                    </p>
                                </div>

                                <h2 className="mt-5 max-w-xl font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                                    Where engineering
                                    <span className="block italic text-[#8F7746]">
                                        becomes practical.
                                    </span>
                                </h2>
                            </div>

                            <div className="lg:pb-1">
                                <p className="max-w-2xl text-sm leading-7 text-[#1E1917]/70 sm:text-base sm:leading-8">
                                    The department&apos;s laboratories provide opportunities
                                    to explore electrical and electronic systems through
                                    hands-on experimentation. Each facility supports
                                    practical learning and helps students connect
                                    engineering concepts with their applications.
                                </p>
                            </div>
                        </div>

                        <div className="mt-10 flex items-center justify-between border-y border-[#20235A]/10 py-4">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#20235A]">
                                Explore Our Facilities
                            </p>
                            <p className="text-xs text-[#1E1917]/50">
                                01 — 05
                            </p>
                        </div>
                    </div>
                </section>

                {/* LABORATORY GALLERY */}
                <section
                    id="laboratories"
                    className="scroll-mt-24 px-6 pb-20 sm:px-10 sm:pb-24 lg:px-16 lg:pb-28"
                >
                    <div className="mx-auto max-w-[1440px]">
                        <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
                            {laboratories.map((laboratory, index) => {
                                const Icon = laboratory.icon;

                                return (
                                    <article
                                        key={laboratory.number}
                                        className={`group min-w-0 ${
                                            index === 0
                                                ? "sm:col-span-2"
                                                : ""
                                        }`}
                                    >
                                        <div
                                            className={`grid h-full overflow-hidden border border-[#20235A]/10 bg-white ${
                                                index === 0
                                                    ? "lg:grid-cols-[1.2fr_0.8fr]"
                                                    : ""
                                            }`}
                                        >
                                            {/* IMAGE */}
                                            <div
                                                className={`relative overflow-hidden bg-[#20235A] ${
                                                    index === 0
                                                        ? "aspect-[16/10] lg:aspect-auto lg:min-h-[390px]"
                                                        : "aspect-[16/10]"
                                                }`}
                                            >
                                                <Image
                                                    src={laboratory.image}
                                                    alt={laboratory.alt}
                                                    fill
                                                    sizes={
                                                        index === 0
                                                            ? "(max-width: 639px) 100vw, (max-width: 1023px) 100vw, 60vw"
                                                            : "(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                                                    }
                                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                                />

                                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#20235A]/55 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

                                                <span className="absolute left-5 top-5 inline-flex h-10 min-w-10 items-center justify-center border border-white/30 bg-[#20235A]/75 px-3 text-xs font-semibold tracking-[0.12em] text-white backdrop-blur-sm">
                                                    {laboratory.number}
                                                </span>

                                                <span className="absolute bottom-5 left-5 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/90">
                                                    <span className="h-1.5 w-1.5 rounded-full bg-[#D2B87C]" />
                                                    {laboratory.tag}
                                                </span>
                                            </div>

                                            {/* CARD CONTENT */}
                                            <div
                                                className={`flex flex-col p-6 sm:p-7 lg:p-8 ${
                                                    index === 0
                                                        ? "lg:justify-center lg:p-10"
                                                        : ""
                                                }`}
                                            >
                                                <div className="flex items-center justify-between gap-4">
                                                    <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                                        Laboratory Facility
                                                    </p>

                                                    <Icon
                                                        className="h-5 w-5 shrink-0 text-[#8F7746]"
                                                        strokeWidth={1.5}
                                                    />
                                                </div>

                                                <h3
                                                    className={`mt-5 font-serif leading-tight text-[#20235A] transition-colors duration-300 group-hover:text-[#8F7746] ${
                                                        index === 0
                                                            ? "text-3xl sm:text-4xl lg:text-5xl"
                                                            : "text-2xl sm:text-3xl"
                                                    }`}
                                                >
                                                    {laboratory.name}
                                                </h3>

                                                <p className="mt-4 max-w-xl text-sm leading-7 text-[#1E1917]/65">
                                                    {laboratory.description}
                                                </p>

                                                <div className="mt-7 flex items-center justify-between gap-3 border-t border-[#1E1917]/10 pt-5">
                                                    <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#8F7746]">
                                                        Practical Learning
                                                    </span>

                                                    <ArrowUpRight className="h-4 w-4 shrink-0 text-[#8F7746] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* PRACTICAL LEARNING SECTION */}
                <section className="bg-[#F2EFE8]">
                    <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
                        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
                            <div>
                                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                                    Learning Through Practice
                                </p>

                                <h2 className="mt-4 font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                                    Observe.
                                    <span className="block italic text-[#8F7746]">
                                        Experiment. Understand.
                                    </span>
                                </h2>
                            </div>

                            <div>
                                <p className="text-sm leading-7 text-[#1E1917]/65 sm:text-base sm:leading-8">
                                    Practical laboratory sessions complement classroom
                                    learning by encouraging students to investigate
                                    electrical and electronic principles, work with
                                    technical equipment and develop an application-oriented
                                    understanding of engineering.
                                </p>

                                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                                    {[
                                        {
                                            number: "01",
                                            title: "Explore",
                                            text: "Understand electrical and electronic concepts.",
                                        },
                                        {
                                            number: "02",
                                            title: "Experiment",
                                            text: "Develop practical skills through laboratory work.",
                                        },
                                        {
                                            number: "03",
                                            title: "Apply",
                                            text: "Connect theory with engineering applications.",
                                        },
                                    ].map((item) => (
                                        <div
                                            key={item.number}
                                            className="border-t border-[#20235A]/20 pt-5"
                                        >
                                            <span className="text-xs font-semibold tracking-[0.12em] text-[#8F7746]">
                                                {item.number}
                                            </span>

                                            <h3 className="mt-3 font-serif text-xl text-[#20235A]">
                                                {item.title}
                                            </h3>

                                            <p className="mt-2 text-xs leading-6 text-[#1E1917]/60">
                                                {item.text}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

              
            </main>

            <FooterSection />
        </>
    );
}
