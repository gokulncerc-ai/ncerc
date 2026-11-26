import Link from "next/link";
import {
    ArrowRight,
    ArrowUpRight,
    BookOpen,
    BookMarked,
    GraduationCap,
    LibraryBig,
    Monitor,
    ScrollText,
    Search,
    Sparkles,
    Camera,
} from "lucide-react";
import Image from 'next/image';
import SiteHeader from '@/components/header/SiteHeader';
import FooterSection from '@/components/home/FooterSection';
import React from 'react';

const libraryLinks = [
    {
        title: "About",
        href: "/academics/library",
        icon: LibraryBig,
    },
    {
        title: "UG Library",
        href: "/academics/library/ug-library",
        icon: GraduationCap,
    },
    {
        title: "PG Library",
        href: "/academics/library/pg-library",
        icon: BookMarked,
    },
    {
        title: "Digital Library",
        href: "/academics/library/digital-library",
        icon: Monitor,
    },
    {
        title: "Rules & Regulations",
        href: "/academics/library/rules-and-regulations",
        icon: ScrollText,

    },
    {
        title: "Features",
        href: "/academics/library/features",
        icon: Sparkles,

    },
    {
        title: "Photo Gallery",
        href: "/academics/library/gallery",
        icon: BookOpen,
        active: true,
    },
    {
        title: "OPAC",
        href: "/academics/library/opac",
        icon: Search,
    },
];


// =====================================================
// GALLERY DATA
// =====================================================

const galleryImages = [
    {
        id: "01",
        title: "Central Library",
        category: "Library",
        image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1200&q=85",
        featured: true,
    },
    {
        id: "02",
        title: "Reading Area",
        category: "Reading Space",
        image:
            "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=85",
    },
    {
        id: "03",
        title: "Library Shelves",
        category: "Collections",
        image:
            "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1200&q=85",
    },
    {
        id: "04",
        title: "Academic Resources",
        category: "Resources",
        image:
            "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=85",
    },
    {
        id: "05",
        title: "Study Space",
        category: "Student Area",
        image:
            "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=1200&q=85",
    },
    {
        id: "06",
        title: "Books & Knowledge",
        category: "Collections",
        image:
            "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=85",
    },
    {
        id: "07",
        title: "Library Resources",
        category: "Resources",
        image:
            "https://images.unsplash.com/photo-1526243741027-444d633d7365?auto=format&fit=crop&w=1200&q=85",
    },
    {
        id: "08",
        title: "Learning Environment",
        category: "Campus",
        image:
            "https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&w=1200&q=85",
    },
    {
        id: "09",
        title: "Knowledge Centre",
        category: "Library",
        image:
            "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=1200&q=85",
    },
];


// =====================================================
// PAGE
// =====================================================


const page = () => {
    return (
        <>
            <SiteHeader />

            <main className="overflow-hidden bg-[#FAF7F2] text-[#1E1917]">

                {/* =================================================
                    HERO
                ================================================= */}

                <section className="relative overflow-hidden bg-[#20235A] text-white">

                    {/* Decorative Elements */}
                    <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border border-[#D2B87C]/20" />
                    <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-[#D2B87C]/10" />
                    <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#D2B87C]/5 blur-3xl" />

                    <div className="relative mx-auto grid min-h-[620px] max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-[1.05fr_.95fr] lg:px-8">

                        {/* Hero Content */}
                        <div>

                            <div className="mb-7 flex items-center gap-3">
                                <span className="h-px w-12 bg-[#D2B87C]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D2B87C]">
                                    NCERC Library
                                </span>
                            </div>

                            <h1 className="max-w-3xl font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                                Library
                                <span className="block text-[#D2B87C]">
                                    Photo Gallery.
                                </span>
                            </h1>

                            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70">
                                Explore moments, spaces and resources from the
                                Central Library of Nehru College of Engineering
                                and Research Centre.
                            </p>

                            <div className="mt-10 flex flex-wrap gap-4">

                                <Link
                                    href="#gallery"
                                    className="inline-flex items-center gap-3 rounded-full bg-[#D2B87C] px-6 py-3.5 text-sm font-semibold text-[#20235A] transition hover:bg-[#C4A96F]"
                                >
                                    Explore Gallery
                                    <ArrowRight size={17} />
                                </Link>

                                <Link
                                    href="/academics/library"
                                    className="inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-[#D2B87C]/50 hover:text-[#D2B87C]"
                                >
                                    Library Overview
                                    <ArrowUpRight size={17} />
                                </Link>

                            </div>

                        </div>


                        {/* Featured Image */}
                        <div className="relative">

                            <div className="absolute -inset-5 rounded-[2rem] border border-[#D2B87C]/10" />

                            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-2 shadow-2xl">

                                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">


                                    <Image
                                        src="https://images.unsplash.com/photo-1526243741027-444d633d7365?auto=format&fit=crop&w=1200&q=85"
                                        alt="NCERC Central Library"
                                        width={100}
                                        height={100}
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        className="h-full w-full object-cover"
                                    />


                                    <div className="absolute inset-0 bg-gradient-to-t from-[#20235A]/80 via-transparent to-transparent" />

                                    <div className="absolute bottom-0 left-0 right-0 p-7">

                                        <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                            <Camera size={15} />
                                            Featured
                                        </div>

                                        <h2 className="font-serif text-3xl">
                                            Central Library
                                        </h2>

                                        <p className="mt-2 text-sm text-white/70">
                                            A space designed for learning,
                                            discovery and academic exploration.
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =================================================
                    LIBRARY NAVIGATION
                ================================================= */}

                <section className="sticky top-0 z-30 border-b border-[#E3DED4]/80 bg-[#FAF7F2]/95 backdrop-blur-xl">

                    <div className="mx-auto max-w-7xl overflow-x-auto px-6 py-4 lg:px-8">

                        <div className="flex min-w-max items-center gap-2">

                            {libraryLinks.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <Link
                                        key={item.title}
                                        href={item.href}
                                        className={`group inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition ${item.active
                                            ? "bg-[#20235A] text-white shadow-lg"
                                            : "text-[#6B6257] hover:bg-white hover:text-[#20235A]"
                                            }`}
                                    >
                                        <Icon
                                            size={15}
                                            className={
                                                item.active
                                                    ? "text-[#D2B87C]"
                                                    : "text-[#6B6257] group-hover:text-[#D2B87C]"
                                            }
                                        />

                                        {item.title}
                                    </Link>
                                );
                            })}

                        </div>

                    </div>

                </section>


                {/* =================================================
                    INTRO
                ================================================= */}

                {/* <section className="px-6 py-24 lg:px-8 lg:py-32">

                    <div className="mx-auto max-w-7xl">

                        <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:items-end"> */}

                            {/* <div>

                                <div className="mb-5 flex items-center gap-3">
                                    <span className="h-px w-10 bg-[#D2B87C]" />

                                    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8F7746]">
                                        Visual Archive
                                    </span>
                                </div>

                                <h2 className="font-serif text-4xl leading-tight text-[#20235A] sm:text-5xl">
                                    A glimpse into
                                    <span className="block text-[#6B6257]">
                                        our library.
                                    </span>
                                </h2>

                            </div> */}

                            {/* <div className="max-w-2xl lg:ml-auto">

                                <p className="text-lg leading-8 text-[#6B6257]">
                                    Take a visual journey through the library
                                    environment, reading spaces, collections
                                    and facilities that support the academic
                                    community at NCERC.
                                </p>

                                <div className="mt-7 flex items-center gap-3 text-sm font-semibold text-[#1E1917]">
                                    <Images
                                        size={18}
                                        className="text-[#D2B87C]"
                                        width={1200}
                                        height={800}
                                    />
                                    Explore our library spaces and resources
                                </div>

                            </div> */}

                        {/* </div>

                    </div>

                </section> */}


                {/* =================================================
                    GALLERY
                ================================================= */}

                <section
                    id="gallery"
                    className="px-6 p-24  lg:px-8 lg:pb-32"
                >

                    <div className="mx-auto max-w-7xl">

                        {/* Section Header */}

                        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">

                            <div>

                                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8F7746]">
                                    Library Moments
                                </p>

                                <h2 className="mt-3 font-serif text-4xl text-[#20235A] sm:text-5xl">
                                    Explore the Gallery
                                </h2>

                            </div>

                            <p className="max-w-md text-sm leading-6 text-[#6B6257]">
                                A collection of photographs representing the
                                spaces, resources and academic environment of
                                the NCERC Library.
                            </p>

                        </div>


                        {/* Masonry-style Gallery */}

                        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

                            {galleryImages.map((item, index) => (

                                <div
                                    key={item.id}
                                    className={`group relative overflow-hidden rounded-[1.75rem] bg-[#20235A] ${index === 0
                                        ? "md:row-span-2 lg:row-span-2"
                                        : ""
                                        }`}
                                >

                                    <div
                                        className={`relative ${index === 0
                                            ? "aspect-[4/5] md:h-full"
                                            : index === 3 ||
                                                index === 6
                                                ? "aspect-[16/10]"
                                                : "aspect-[4/3]"
                                            }`}
                                    >

                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            width={1200}
                                            height={800}                                         
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                            className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                                        />

                                        {/* Overlay */}

                                        <div className="absolute inset-0 bg-gradient-to-t from-[#20235A]/90 via-[#20235A]/10 to-transparent opacity-70 transition duration-500 group-hover:opacity-90" />

                                        {/* Number */}

                                        <div className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-[#20235A]/40 text-xs font-semibold text-white backdrop-blur-md">
                                            {item.id}
                                        </div>

                                        {/* Arrow */}

                                        <div className="absolute right-5 top-5 flex h-10 w-10 translate-y-[-5px] items-center justify-center rounded-full bg-white/10 text-white opacity-0 backdrop-blur-md transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                                            <ArrowUpRight size={17} />
                                        </div>

                                        {/* Content */}

                                        <div className="absolute bottom-0 left-0 right-0 p-6">

                                            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                                {item.category}
                                            </p>

                                            <h3 className="font-serif text-2xl text-white">
                                                {item.title}
                                            </h3>

                                        </div>

                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>

                </section>


                {/* =================================================
                    DARK VISUAL SECTION
                ================================================= */}

                <section className="relative overflow-hidden bg-[#20235A] px-6 py-24 text-white lg:px-8 lg:py-28">

                    <div className="absolute -right-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full border border-[#D2B87C]/10" />

                    <div className="relative mx-auto max-w-7xl">

                        <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-center">

                            <div className="max-w-3xl">

                                <div className="mb-5 flex items-center gap-3">
                                    <span className="h-px w-10 bg-[#D2B87C]" />

                                    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D2B87C]">
                                        Knowledge • Space • Community
                                    </span>
                                </div>

                                <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
                                    More than a collection of books.
                                </h2>

                                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
                                    The NCERC Library provides an environment
                                    where students and faculty can discover
                                    information, focus on their studies and
                                    engage with a growing academic resource
                                    ecosystem.
                                </p>

                            </div>

                            <Link
                                href="/pages/library/digital-library"
                                className="inline-flex w-fit items-center gap-3 rounded-full bg-[#D2B87C] px-7 py-4 text-sm font-semibold text-[#20235A] transition hover:bg-[#C4A96F]"
                            >
                                Explore Digital Library
                                <ArrowRight size={17} />
                            </Link>

                        </div>

                    </div>

                </section>


                {/* =================================================
                    QUICK ACCESS
                ================================================= */}

                <section className="px-6 py-24 lg:px-8 lg:py-32">

                    <div className="mx-auto max-w-7xl">

                        <div className="mb-12">

                            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8F7746]">
                                Continue Exploring
                            </p>

                            <h2 className="mt-3 font-serif text-4xl text-[#20235A] sm:text-5xl">
                                Library Resources
                            </h2>

                        </div>


                        <div className="grid gap-5 md:grid-cols-2">

                            <Link
                                href="/pages/library/digital-library"
                                className="group rounded-[1.75rem] bg-[#20235A] p-8 text-white transition duration-500 hover:-translate-y-1"
                            >

                                <div className="flex items-start justify-between">

                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D2B87C] text-[#20235A]">
                                        <Monitor size={21} />
                                    </div>

                                    <ArrowUpRight
                                        size={21}
                                        className="text-white/50 transition group-hover:text-[#D2B87C]"
                                    />

                                </div>

                                <h3 className="mt-8 font-serif text-3xl">
                                    Digital Library
                                </h3>

                                <p className="mt-3 max-w-md text-sm leading-6 text-white/60">
                                    Access digital resources, e-books,
                                    e-journals and online academic services.
                                </p>

                            </Link>


                            <Link
                                href="/pages/library/opac"
                                className="group rounded-[1.75rem] border border-[#E3DED4] bg-white p-8 transition duration-500 hover:-translate-y-1 hover:shadow-xl"
                            >

                                <div className="flex items-start justify-between">

                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#20235A] text-[#D2B87C]">
                                        <Search size={21} />
                                    </div>

                                    <ArrowUpRight
                                        size={21}
                                        className="text-[#6B6257] transition group-hover:text-[#20235A]"
                                    />

                                </div>

                                <h3 className="mt-8 font-serif text-3xl text-[#20235A]">
                                    OPAC
                                </h3>

                                <p className="mt-3 max-w-md text-sm leading-6 text-[#6B6257]">
                                    Search books, journals, periodicals and
                                    other library resources through the
                                    Online Public Access Catalogue.
                                </p>

                            </Link>

                        </div>

                    </div>

                </section>

            </main>

            <FooterSection />

        </>
    )
}

export default page