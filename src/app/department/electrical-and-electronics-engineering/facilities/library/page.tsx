import Link from "next/link";
import {
    ArrowLeft,
    ArrowUpRight,
    BookOpen,
    CheckCircle2,
    Database,
    LibraryBig,
    Monitor,
    Search,
    Users,
} from "lucide-react";
import Image from "next/image";
import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../../DepartmentNav/page";

interface LibraryFeature {
    number: string;
    title: string;
    description: string;
    image: string;
    alt: string;
    icon: React.ReactNode;
}

const libraryFeatures: LibraryFeature[] = [
    {
        number: "01",
        title: "Central Library",
        description:
            "A dedicated academic resource centre providing access to books, reference materials, journals and learning resources that support students and faculty.",
        image:
            "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1800&q=85",
        alt: "Modern academic library with bookshelves and reading spaces",
        icon: <LibraryBig className="h-6 w-6" />,
    },
    {
        number: "02",
        title: "Reading & Reference Area",
        description:
            "Quiet and comfortable spaces that support focused reading, individual study, reference work and academic preparation.",
        image:
            "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1800&q=85",
        alt: "Students studying and reading in a library",
        icon: <BookOpen className="h-6 w-6" />,
    },
    {
        number: "03",
        title: "Digital Learning Resources",
        description:
            "Access to digital academic resources and online learning materials that complement conventional library collections.",
        image:
            "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=1800&q=85",
        alt: "Digital and academic library resources",
        icon: <Monitor className="h-6 w-6" />,
    },
    {
        number: "04",
        title: "Reference & Research Support",
        description:
            "Academic resources that help students and faculty locate information, explore technical subjects and support research activities.",
        image:
            "https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&w=1800&q=85",
        alt: "Academic reference books and library resources",
        icon: <Search className="h-6 w-6" />,
    },
];

export default function LibraryPage() {
    const featuredLibrary = libraryFeatures[0];

    return (
        <>
            <SiteHeader />

            {/* =========================================================
          HERO
      ========================================================= */}
            <section className="relative isolate overflow-hidden bg-[#20235A]">
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
                                A library built
                                <span className="block text-[#D2B87C]">
                                    for lifelong learning.
                                </span>
                            </h1>

                            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                                Explore the library resources and learning spaces that support
                                academic study, technical knowledge, reference work and
                                continuous learning at NCERC.
                            </p>

                            <div className="mt-8 flex flex-wrap items-center gap-3">
                                <a
                                    href="#library"
                                    className="group inline-flex items-center gap-2 rounded-full bg-[#D2B87C] px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#20235A] transition-all duration-300 hover:bg-white"
                                >
                                    Explore Library

                                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </a>

                                <Link
                                    href="/department/electrical-and-electronics-engineering/facilities"
                                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:border-[#D2B87C]/60 hover:text-[#D2B87C]"
                                >
                                    <ArrowLeft className="h-4 w-4" />
                                    Facilities
                                </Link>
                            </div>
                        </div>

                        <div className="relative hidden lg:block">
                            <div className="border-l border-[#D2B87C]/30 pl-8">
                                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                    Academic Resource Centre
                                </p>

                                <h2 className="mt-4 max-w-md font-serif text-3xl leading-tight text-white">
                                    Knowledge, resources and quiet spaces for focused study.
                                </h2>

                                <p className="mt-5 max-w-md text-sm leading-7 text-white/55">
                                    A strong academic library connects students and faculty with
                                    the resources they need to learn, explore and research.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* =======================================================
            HERO INFORMATION STRIP
        ======================================================= */}
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
                                Resource
                            </p>

                            <p className="mt-2 font-serif text-lg text-white">
                                Books &amp; Digital Resources
                            </p>
                        </div>

                        <div className="px-6 py-5 sm:px-10 lg:px-16">
                            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                Environment
                            </p>

                            <p className="mt-2 font-serif text-lg text-white">
                                Quiet &amp; Academic
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
          DEPARTMENT NAVIGATION
      ========================================================= */}
            <InnerHeader />

            <main className="bg-[#FAF7F2]">
                {/* =======================================================
            INTRODUCTION
        ======================================================= */}
                <section className="border-b border-[#1E1917]/10">
                    <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
                        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
                            <div>
                                <div className="flex items-center gap-3">
                                    <span className="h-px w-8 bg-[#D2B87C]" />

                                    <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                                        Library Facilities
                                    </span>
                                </div>

                                <div className="mt-8 hidden lg:block">
                                    <LibraryBig className="h-8 w-8 text-[#D2B87C]" />
                                </div>
                            </div>

                            <div>
                                <h2 className="max-w-3xl font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                                    More than books.
                                    <span className="text-[#8F7746]">
                                        {" "}
                                        A foundation for learning.
                                    </span>
                                </h2>

                                <p className="mt-6 max-w-2xl text-sm leading-7 text-[#1E1917]/65 sm:text-base">
                                    The library provides students and faculty with access to
                                    academic resources, reference materials, reading spaces and
                                    digital learning opportunities. It serves as an important
                                    support system for classroom learning, independent study and
                                    research.
                                </p>

                                <div className="mt-8 flex items-center gap-3">
                                    <div className="h-px w-12 bg-[#D2B87C]" />

                                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                                        Read • Explore • Research
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =======================================================
            LIBRARY FEATURE
        ======================================================= */}
                <section id="library" className="bg-white">
                    <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
                        <div className="mb-12 flex flex-col justify-between gap-6 border-b border-[#1E1917]/10 pb-8 sm:flex-row sm:items-end">
                            <div>
                                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                                    Academic Resources
                                </p>

                                <h2 className="font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                                    A space for knowledge and discovery.
                                </h2>
                            </div>

                            <p className="max-w-sm text-sm leading-6 text-[#1E1917]/55">
                                Resources and environments that support reading, study,
                                reference work and academic exploration.
                            </p>
                        </div>

                        {/* ===================================================
                FEATURED LIBRARY
            =================================================== */}
                        <div className="mb-8 overflow-hidden rounded-[2rem] bg-[#20235A]">
                            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
                                {/* Image */}
                                <div className="relative min-h-[340px] overflow-hidden lg:min-h-[480px]">
                                    <Image
                                        src={featuredLibrary.image}
                                        alt={featuredLibrary.alt}
                                        fill
                                        sizes="(min-width: 1024px) 330px, 100vw"
                                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#20235A]/80 via-[#20235A]/10 to-transparent" />

                                    <div className="absolute left-8 top-8 sm:left-10 sm:top-10 lg:left-12 lg:top-12">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-[#20235A]/60 text-[#D2B87C] backdrop-blur-sm">
                                            {featuredLibrary.icon}
                                        </div>
                                    </div>

                                    <div className="absolute bottom-8 left-8 sm:bottom-10 sm:left-10 lg:bottom-12 lg:left-12">
                                        <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                            01 / Core Resource
                                        </p>

                                        <h3 className="mt-3 max-w-lg font-serif text-3xl text-white sm:text-4xl">
                                            {featuredLibrary.title}
                                        </h3>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex flex-col justify-between bg-[#F2EFE8] p-8 sm:p-10 lg:p-12">
                                    <div>
                                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                            Academic Knowledge Centre
                                        </p>

                                        <h4 className="mt-4 max-w-xl font-serif text-2xl leading-snug text-[#20235A] sm:text-3xl">
                                            A quiet environment for learning, reading and academic
                                            exploration.
                                        </h4>

                                        <p className="mt-5 max-w-xl text-sm leading-7 text-[#1E1917]/60">
                                            {featuredLibrary.description}
                                        </p>

                                        <p className="mt-5 max-w-xl text-sm leading-7 text-[#1E1917]/60">
                                            Library resources complement classroom learning by
                                            helping students explore subjects in greater depth,
                                            strengthen their technical knowledge and develop
                                            independent learning habits.
                                        </p>

                                        <div className="mt-7 grid gap-3 sm:grid-cols-2">
                                            <div className="flex items-center gap-3">
                                                <CheckCircle2 className="h-4 w-4 shrink-0 text-[#8F7746]" />

                                                <span className="text-xs text-[#1E1917]/60">
                                                    Academic books
                                                </span>
                                            </div>

                                            <div className="flex items-center gap-3">
                                                <CheckCircle2 className="h-4 w-4 shrink-0 text-[#8F7746]" />

                                                <span className="text-xs text-[#1E1917]/60">
                                                    Reference resources
                                                </span>
                                            </div>

                                            <div className="flex items-center gap-3">
                                                <CheckCircle2 className="h-4 w-4 shrink-0 text-[#8F7746]" />

                                                <span className="text-xs text-[#1E1917]/60">
                                                    Reading facilities
                                                </span>
                                            </div>

                                            <div className="flex items-center gap-3">
                                                <CheckCircle2 className="h-4 w-4 shrink-0 text-[#8F7746]" />

                                                <span className="text-xs text-[#1E1917]/60">
                                                    Digital resources
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-10 flex flex-wrap items-center justify-between gap-5 border-t border-[#20235A]/10 pt-6">
                                        <span className="text-xs text-[#1E1917]/55">
                                            Electrical &amp; Electronics Engineering
                                        </span>

                                        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#20235A]">
                                            Academic Resource

                                            <ArrowUpRight className="h-4 w-4" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ===================================================
                LIBRARY FEATURE CARDS
            =================================================== */}
                        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                            {libraryFeatures.slice(1).map((feature) => (
                                <article
                                    key={feature.number}
                                    className="group overflow-hidden rounded-3xl border border-[#1E1917]/10 bg-[#FAF7F2] transition-all duration-300 hover:-translate-y-1 hover:border-[#D2B87C]/70 hover:shadow-[0_18px_45px_rgba(32,35,90,0.08)]"
                                >
                                    {/* Image */}
                                    <div className="relative aspect-[16/10] overflow-hidden bg-[#20235A]">
                                        <Image
                                            src={feature.image}
                                            alt={feature.alt}
                                            fill
                                            sizes="(min-width: 1024px) 330px, 100vw"
                                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-[#20235A]/70 via-transparent to-transparent" />

                                        <div className="absolute left-5 top-5">
                                            <span className="font-serif text-3xl text-white/80">
                                                {feature.number}
                                            </span>
                                        </div>

                                        <div className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-[#20235A]/70 text-[#D2B87C] backdrop-blur-sm transition-all duration-300 group-hover:bg-[#D2B87C] group-hover:text-[#20235A]">
                                            {feature.icon}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-7">
                                        <h3 className="font-serif text-xl leading-snug text-[#20235A]">
                                            {feature.title}
                                        </h3>

                                        <p className="mt-3 text-sm leading-6 text-[#1E1917]/55">
                                            {feature.description}
                                        </p>

                                        <div className="mt-7 flex items-center gap-2 border-t border-[#1E1917]/10 pt-5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8F7746]">
                                            Library Resource

                                            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* =======================================================
            LIBRARY EXPERIENCE
        ======================================================= */}
                <section className="bg-[#F2EFE8]">
                    <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
                        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
                            <div>
                                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                                    Learning Beyond Lectures
                                </p>

                                <h2 className="mt-4 font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl">
                                    A place to read, explore and grow.
                                </h2>
                            </div>

                            <div>
                                <p className="max-w-3xl text-sm leading-7 text-[#1E1917]/65 sm:text-base">
                                    An effective academic library is more than a collection of
                                    books. It provides students with an environment where they
                                    can study independently, discover new ideas, access
                                    information and deepen their understanding beyond the
                                    classroom.
                                </p>

                                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                                    <div className="rounded-2xl border border-[#20235A]/10 bg-white p-6">
                                        <BookOpen className="h-5 w-5 text-[#8F7746]" />

                                        <h3 className="mt-5 font-serif text-lg text-[#20235A]">
                                            Read
                                        </h3>

                                        <p className="mt-2 text-xs leading-5 text-[#1E1917]/55">
                                            Access academic books, reference materials and technical
                                            resources for focused study.
                                        </p>
                                    </div>

                                    <div className="rounded-2xl border border-[#20235A]/10 bg-white p-6">
                                        <Database className="h-5 w-5 text-[#8F7746]" />

                                        <h3 className="mt-5 font-serif text-lg text-[#20235A]">
                                            Explore
                                        </h3>

                                        <p className="mt-2 text-xs leading-5 text-[#1E1917]/55">
                                            Discover digital resources and information that expand
                                            learning beyond prescribed coursework.
                                        </p>
                                    </div>

                                    <div className="rounded-2xl border border-[#20235A]/10 bg-white p-6">
                                        <Users className="h-5 w-5 text-[#8F7746]" />

                                        <h3 className="mt-5 font-serif text-lg text-[#20235A]">
                                            Learn
                                        </h3>

                                        <p className="mt-2 text-xs leading-5 text-[#1E1917]/55">
                                            Develop independent learning habits and strengthen
                                            academic and technical knowledge.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =======================================================
            RESOURCE HIGHLIGHTS
        ======================================================= */}
                <section className="bg-white">
                    <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
                        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
                            <div>
                                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                                    Resource Support
                                </p>

                                <h2 className="mt-4 max-w-xl font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl">
                                    Supporting every stage of academic learning.
                                </h2>

                                <p className="mt-5 max-w-xl text-sm leading-7 text-[#1E1917]/60 sm:text-base">
                                    Library resources support students throughout their academic
                                    journey, from understanding fundamental concepts to exploring
                                    advanced technical subjects and research areas.
                                </p>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="rounded-3xl border border-[#1E1917]/10 bg-[#FAF7F2] p-7">
                                    <BookOpen className="h-6 w-6 text-[#8F7746]" />

                                    <h3 className="mt-6 font-serif text-xl text-[#20235A]">
                                        Textbooks &amp; Reference
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-[#1E1917]/55">
                                        Academic materials supporting coursework, assignments and
                                        examination preparation.
                                    </p>
                                </div>

                                <div className="rounded-3xl border border-[#1E1917]/10 bg-[#FAF7F2] p-7">
                                    <Database className="h-6 w-6 text-[#8F7746]" />

                                    <h3 className="mt-6 font-serif text-xl text-[#20235A]">
                                        Digital Resources
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-[#1E1917]/55">
                                        Digital information resources that provide broader access
                                        to academic and technical knowledge.
                                    </p>
                                </div>

                                <div className="rounded-3xl border border-[#1E1917]/10 bg-[#FAF7F2] p-7">
                                    <Search className="h-6 w-6 text-[#8F7746]" />

                                    <h3 className="mt-6 font-serif text-xl text-[#20235A]">
                                        Reference Support
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-[#1E1917]/55">
                                        Resources that help students locate information and
                                        investigate technical subjects.
                                    </p>
                                </div>

                                <div className="rounded-3xl border border-[#1E1917]/10 bg-[#FAF7F2] p-7">
                                    <Monitor className="h-6 w-6 text-[#8F7746]" />

                                    <h3 className="mt-6 font-serif text-xl text-[#20235A]">
                                        Digital Learning
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-[#1E1917]/55">
                                        Technology-supported learning opportunities that complement
                                        physical library resources.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =======================================================
            CLOSING CTA
        ======================================================= */}
                <section className="bg-[#20235A]">
                    <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
                        <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
                            <div>
                                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                    Electrical &amp; Electronics Engineering
                                </p>

                                <h2 className="mt-4 max-w-3xl font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
                                    Knowledge begins with the resources we make accessible.
                                </h2>

                                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
                                    Discover the library environment that supports independent
                                    learning, academic exploration and technical development.
                                </p>
                            </div>

                            <Link
                                href="/department/electrical-and-electronics-engineering/facilities"
                                className="group inline-flex w-fit items-center gap-3 rounded-full bg-[#D2B87C] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#20235A] transition-all duration-300 hover:bg-white"
                            >
                                Back to Facilities

                                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <FooterSection />
        </>
    );
}