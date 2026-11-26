import Link from "next/link";
import {
    ArrowUpRight,
    BookOpen,
    BookMarked,
    Globe2,
    GraduationCap,
    LibraryBig,
    Monitor,
    Network,
    ScrollText,
    Search,
    Sparkles,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";

const libraryLinks = [
    {
        title: "About",
        href: "/pages/library",
        icon: LibraryBig,
        active: true,
    },
    {
        title: "UG Library",
        href: "/academics/library/ug-library",
        icon: GraduationCap,
        active: false,
    },
    {
        title: "PG Library",
        href: "/academics/library/pg-library",
        icon: BookMarked,
        active: false,
    },
    {
        title: "Digital Library",
        href: "/academics/library/digital-library",
        icon: Monitor,
        active: false,
    },
    {
        title: "Rules & Regulations",
        href: "/academics/library/rules-and-regulations",
        icon: ScrollText,
        active: false,
    },
    {
        title: "Features",
        href: "/academics/library/features",
        icon: Sparkles,
        active: false,
    },
    {
        title: "Photo Gallery",
        href: "/academics/library/gallery",
        icon: BookOpen,
        active: false,
    },
    {
        title: "OPAC",
        href: "/academics/library/opac",
        icon: Search,
        active: false,
    },
];

const libraryStats = [
    {
        value: "01",
        label: "Central Library",
        description: "Located in the Brahmagupta Block",
    },
    {
        value: "02",
        label: "Print Resources",
        description: "Books, journals and periodicals",
    },
    {
        value: "03",
        label: "Digital Access",
        description: "Electronic information services",
    },
    {
        value: "04",
        label: "Internet Access",
        description: "Fast connectivity for learning",
    },
];

const resourceItems = [
    {
        number: "01",
        title: "Books & Reference Materials",
        description:
            "A rich collection of books covering diverse domains of Science, Technology and Engineering.",
        icon: BookOpen,
    },
    {
        number: "02",
        title: "Journals & Periodicals",
        description:
            "Academic journals, periodicals and printed materials supporting continuous learning and research.",
        icon: ScrollText,
    },
    {
        number: "03",
        title: "Electronic Information",
        description:
            "Digital and electronic information services designed for modern academic requirements.",
        icon: Monitor,
    },
    {
        number: "04",
        title: "Audio & Visual Resources",
        description:
            "Audio-visual resources and media services that complement traditional academic learning.",
        icon: Network,
    },
];

export default function LibraryPage() {
    return (
        <>
            <SiteHeader />

            <main className="overflow-hidden bg-[#FAF7F2] text-[#1E1917]">

                {/* =========================================================
                    HERO
                ========================================================= */}
                <section className="relative bg-[#20235A]">

                    <div className="absolute inset-0 overflow-hidden">

                        {/* Decorative circles */}
                        <div className="absolute -right-32 -top-40 h-[500px] w-[500px] rounded-full border border-[#D2B87C]/15" />

                        <div className="absolute -right-20 -top-28 h-[350px] w-[350px] rounded-full border border-[#D2B87C]/10" />

                        <div className="absolute -bottom-48 -left-32 h-[450px] w-[450px] rounded-full bg-white/[0.03] blur-3xl" />

                    </div>


                    <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28 lg:px-8 lg:pb-24 lg:pt-36">

                        <div className="grid items-end gap-12 lg:grid-cols-[1.15fr_0.85fr]">

                            {/* =================================================
                                HERO CONTENT
                            ================================================= */}
                            <div>

                                <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D2B87C] sm:text-sm">

                                    <span className="h-px w-10 bg-[#D2B87C] sm:w-12" />

                                    NCERC Library

                                </div>


                                <h1 className="mt-7 max-w-4xl font-display text-5xl leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-8xl">

                                    A place where

                                    <span className="block text-[#D2B87C]">
                                        knowledge lives.
                                    </span>

                                </h1>


                                <p className="mt-8 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
                                    The NCERC Central Library is a dedicated academic
                                    environment supporting learning, research, discovery
                                    and access to knowledge for the entire campus community.
                                </p>

                            </div>


                            {/* =================================================
                                HERO SIDE PANEL
                            ================================================= */}
                            <div className="lg:pl-10">

                                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm sm:p-9">

                                    <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-[#D2B87C]/10 blur-2xl" />

                                    <div className="relative">

                                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D2B87C] text-[#20235A]">

                                            <LibraryBig className="h-7 w-7" />

                                        </div>


                                        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
                                            Central Library
                                        </p>


                                        <p className="mt-3 font-display text-3xl leading-tight text-white">
                                            Learning beyond the classroom.
                                        </p>


                                        <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">

                                            <div>

                                                <p className="text-xs text-white/35">
                                                    Location
                                                </p>

                                                <p className="mt-1 text-sm font-medium text-white/75">
                                                    Brahmagupta Block
                                                </p>

                                            </div>


                                            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-[#D2B87C]">

                                                <ArrowUpRight className="h-4 w-4" />

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =========================================================
                    LIBRARY NAVIGATION
                ========================================================= */}
                <section className="sticky top-0 z-30 border-b border-[#20235A]/10 bg-white/95 backdrop-blur-md">

                    <div className="mx-auto max-w-7xl overflow-x-auto px-5 sm:px-6 lg:px-8">

                        <div className="flex min-w-max items-center gap-1 py-3">

                            {libraryLinks.map((item) => {

                                const Icon = item.icon;

                                return (
                                    <Link
                                        key={item.title}
                                        href={item.href}
                                        className={`group flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition ${item.active
                                                ? "bg-[#20235A] text-white"
                                                : "text-[#1E1917]/60 hover:bg-[#F2EFE8] hover:text-[#20235A]"
                                            }`}
                                    >

                                        <Icon
                                            className={`h-4 w-4 ${item.active
                                                    ? "text-[#D2B87C]"
                                                    : "text-[#1E1917]/35 group-hover:text-[#8F7746]"
                                                }`}
                                        />

                                        {item.title}

                                    </Link>
                                );

                            })}

                        </div>

                    </div>

                </section>


                {/* =========================================================
                    ABOUT INTRO
                ========================================================= */}
                <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">

                    <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">

                        <div>

                            <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746] sm:text-sm">

                                <span className="h-px w-8 bg-[#D2B87C] sm:w-10" />

                                About the Library

                            </div>


                            <h2 className="mt-6 max-w-lg font-display text-4xl leading-tight text-[#20235A] sm:text-5xl lg:text-6xl">
                                More than a collection of books.
                            </h2>


                            <div className="mt-8 h-px w-20 bg-[#D2B87C]" />

                        </div>


                        <div className="max-w-3xl">

                            <p className="text-xl leading-9 text-[#1E1917]/80">
                                NCERC Central Library is located on the ground floor
                                of the Brahmagupta Block and is a real centre of
                                learning for students and faculty.
                            </p>


                            <p className="mt-7 text-base leading-8 text-[#1E1917]/60">
                                The library has a rich collection of books covering
                                different domains of Science and Technology, along
                                with journals, periodicals and other printed
                                materials. It also provides audio, visual and
                                electronic information services to support academic
                                activities.
                            </p>


                            <p className="mt-6 text-base leading-8 text-[#1E1917]/60">
                                The library has been digitalized to meet advanced
                                information requirements and is fully automated,
                                providing convenient access to information and
                                resources through modern technology and internet
                                connectivity.
                            </p>

                        </div>

                    </div>

                </section>


                {/* =========================================================
                    VISUAL BREAK / QUOTE
                ========================================================= */}
                <section className="bg-[#20235A]">

                    <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

                        <div className="grid gap-10 lg:grid-cols-[1fr_0.65fr] lg:items-center">

                            <div>

                                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D2B87C] sm:text-sm">
                                    The Learning Environment
                                </p>


                                <h2 className="mt-5 max-w-4xl font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
                                    Designed to connect students with the information,
                                    resources and knowledge they need.
                                </h2>

                            </div>


                            <div className="lg:border-l lg:border-white/10 lg:pl-10">

                                <p className="text-base leading-8 text-white/55">
                                    From traditional print collections to electronic
                                    information services, the library brings together
                                    multiple forms of learning resources in one
                                    academic environment.
                                </p>


                                <div className="mt-8 flex items-center gap-3 text-sm font-semibold text-[#D2B87C]">

                                    <span className="h-px w-8 bg-[#D2B87C]" />

                                    Learn. Explore. Discover.

                                </div>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =========================================================
                    LIBRARY AT A GLANCE
                ========================================================= */}
                <section className="border-b border-[#20235A]/10 bg-white">

                    <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">

                        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">

                            <div>

                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8F7746] sm:text-sm">
                                    At a Glance
                                </p>


                                <h2 className="mt-4 font-display text-4xl leading-tight text-[#20235A] sm:text-5xl">
                                    A library built around modern learning.
                                </h2>

                            </div>


                            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[#20235A]/10 bg-[#20235A]/10">

                                {libraryStats.map((item) => (

                                    <div
                                        key={item.value}
                                        className="bg-white p-7 sm:p-9"
                                    >

                                        <span className="font-display text-4xl text-[#8F7746]">
                                            {item.value}
                                        </span>


                                        <h3 className="mt-5 text-lg font-semibold text-[#20235A]">
                                            {item.label}
                                        </h3>


                                        <p className="mt-2 text-sm leading-6 text-[#1E1917]/50">
                                            {item.description}
                                        </p>

                                    </div>

                                ))}

                            </div>

                        </div>

                    </div>

                </section>


                {/* =========================================================
                    RESOURCES
                ========================================================= */}
                <section className="bg-[#FAF7F2]">

                    <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">

                        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

                            <div className="max-w-2xl">

                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8F7746] sm:text-sm">
                                    What the Library Offers
                                </p>


                                <h2 className="mt-4 font-display text-4xl leading-tight text-[#20235A] sm:text-5xl">
                                    Resources for every stage of discovery.
                                </h2>

                            </div>


                            <p className="max-w-md text-sm leading-7 text-[#1E1917]/60">
                                A combination of physical collections, digital
                                services and supporting facilities creates a
                                comprehensive academic resource centre.
                            </p>

                        </div>


                        <div className="mt-14 divide-y divide-[#20235A]/10 border-y border-[#20235A]/10">

                            {resourceItems.map((item) => {

                                const Icon = item.icon;

                                return (

                                    <div
                                        key={item.number}
                                        className="group grid gap-6 py-9 transition lg:grid-cols-[100px_0.8fr_1fr] lg:items-center"
                                    >

                                        <div className="flex items-center gap-5">

                                            <span className="text-sm font-semibold tracking-widest text-[#1E1917]/30">
                                                {item.number}
                                            </span>


                                            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#20235A]/10 bg-white text-[#20235A] transition group-hover:border-[#D2B87C] group-hover:bg-[#D2B87C] group-hover:text-[#20235A]">

                                                <Icon className="h-5 w-5" />

                                            </div>

                                        </div>


                                        <h3 className="font-display text-2xl text-[#20235A] sm:text-3xl">
                                            {item.title}
                                        </h3>


                                        <p className="max-w-xl text-sm leading-7 text-[#1E1917]/60">
                                            {item.description}
                                        </p>

                                    </div>

                                );

                            })}

                        </div>

                    </div>

                </section>


                {/* =========================================================
                    DIGITAL LIBRARY / NDLI
                ========================================================= */}
                <section className="bg-[#20235A]">

                    <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">

                        <div className="grid gap-12 lg:grid-cols-[1fr_0.75fr] lg:items-center">

                            <div>

                                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#D2B87C] sm:text-sm">

                                    <Globe2 className="h-4 w-4" />

                                    National Digital Library

                                </div>


                                <h2 className="mt-6 max-w-3xl font-display text-4xl leading-tight text-white sm:text-5xl">
                                    Take your learning beyond the physical library.
                                </h2>


                                <p className="mt-6 max-w-2xl text-base leading-8 text-white/55">
                                    NCERC students can also explore the National
                                    Digital Library of India and access a wider
                                    ecosystem of digital learning resources.
                                </p>

                            </div>


                            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 sm:p-9">

                                <div className="flex items-start justify-between">

                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D2B87C] text-[#20235A]">

                                        <Globe2 className="h-6 w-6" />

                                    </div>


                                    <ArrowUpRight className="h-5 w-5 text-white/30" />

                                </div>


                                <p className="mt-10 text-xs font-semibold uppercase tracking-[0.18em] text-white/35">
                                    NDLI Club Registration
                                </p>


                                <p className="mt-2 font-mono text-lg text-[#D2B87C]">
                                    INKLNC4VBV4KWWM
                                </p>


                                <a
                                    href="https://ndl.iitkgp.ac.in/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#20235A] transition hover:bg-[#D2B87C]"
                                >
                                    Visit National Digital Library

                                    <ArrowUpRight className="h-4 w-4" />

                                </a>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =========================================================
                    OPAC / QUICK ACCESS
                ========================================================= */}
                <section className="bg-white">

                    <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

                        <div className="rounded-[2rem] bg-[#F2EFE8] p-8 sm:p-12 lg:p-16">

                            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">

                                <div>

                                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8F7746] sm:text-sm">
                                        Quick Access
                                    </p>


                                    <h2 className="mt-4 font-display text-3xl leading-tight text-[#20235A] sm:text-4xl">
                                        Looking for a particular resource?
                                    </h2>


                                    <p className="mt-4 max-w-2xl text-sm leading-7 text-[#1E1917]/60">
                                        Use the library catalogue to search for
                                        available resources and discover what the
                                        Central Library has to offer.
                                    </p>

                                </div>


                                <Link
                                    href="/pages/library/opac"
                                    className="inline-flex w-fit items-center gap-2 rounded-full bg-[#20235A] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#D2B87C] hover:text-[#20235A]"
                                >
                                    Open OPAC

                                    <Search className="h-4 w-4" />

                                </Link>

                            </div>

                        </div>

                    </div>

                </section>

            </main>


            <FooterSection />

        </>
    );
}
