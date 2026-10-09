"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    ArrowLeft,
    ArrowLeftCircle,
    ArrowRightCircle,
    ArrowUpRight,
    Camera,
    ChevronRight,
    Images,
    X,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";

type GalleryPhoto = {
    id: string;
    image: string;
    alt: string;
};

type PhotoCollection = {
    id: string;
    title: string;
    date: string;
    category: string;
    image: string;
    href: string;
    photos: GalleryPhoto[];
};

const photoCollections: PhotoCollection[] = [
    {
        id: "01",
        title: "GREENOVA 2026",
        date: "2026",
        category: "Campus Life",
        image: "/images/media-gallery/Greenova.webp",
        href: "/gallery/photo-gallery/greenova-2026",

        photos: [
            {
                id: "greenova-01",
                image:
                    "https://ncerc.ac.in/globalpannel/public/images/Greenova%202026%201.webp",
                alt: "GREENOVA 2026 - Photo 01",
            },
            {
                id: "greenova-02",
                image:
                    "https://ncerc.ac.in/globalpannel/public/images/Greenova%202026%202.webp",
                alt: "GREENOVA 2026 - Photo 02",
            },
            {
                id: "greenova-03",
                image:
                    "https://ncerc.ac.in/globalpannel/public/images/Greenova%202026%203.webp",
                alt: "GREENOVA 2026 - Photo 03",
            },
            {
                id: "greenova-04",
                image:
                    "https://ncerc.ac.in/globalpannel/public/images/Greenova%202026%204.webp",
                alt: "GREENOVA 2026 - Photo 04",
            },
            {
                id: "greenova-05",
                image:
                    "https://ncerc.ac.in/globalpannel/public/images/Greenova%202026%206.webp",
                alt: "GREENOVA 2026 - Photo 05",
            },
            {
                id: "greenova-06",
                image:
                    "https://ncerc.ac.in/globalpannel/public/images/Greenova%202026%207.webp",
                alt: "GREENOVA 2026 - Photo 06",
            },
        ],
    },

    {
        id: "02",
        title: "Smart India Hackathon 2026",
        date: "2026",
        category: "Innovation",
        image: "/images/media-gallery/hackathon.webp",
        href: "/gallery/photo-gallery/smart-india-hackathon-2026",

        photos: [
            {
                id: "hackathon-01",
                image:
                    "https://ncerc.ac.in/globalpannel/public/images/Smart%20India%20Hackathon%202026%201.webp",
                alt: "Smart India Hackathon 2026 - Photo 01",
            },
            {
                id: "hackathon-02",
                image:
                    "https://ncerc.ac.in/globalpannel/public/images/Smart%20India%20Hackathon%202026%202.webp",
                alt: "Smart India Hackathon 2026 - Photo 02",
            },
            {
                id: "hackathon-03",
                image:
                    "https://ncerc.ac.in/globalpannel/public/images/Smart%20India%20Hackathon%202026%203.webp",
                alt: "Smart India Hackathon 2026 - Photo 03",
            },
            {
                id: "hackathon-04",
                image:
                    "https://ncerc.ac.in/globalpannel/public/images/Smart%20India%20Hackathon%202026%204.webp",
                alt: "Smart India Hackathon 2026 - Photo 04",
            },
            {
                id: "hackathon-05",
                image:
                    "https://ncerc.ac.in/globalpannel/public/images/Smart%20India%20Hackathon%202026%205.webp",
                alt: "Smart India Hackathon 2026 - Photo 05",
            },
            {
                id: "hackathon-06",
                image:
                    "https://ncerc.ac.in/globalpannel/public/images/Smart%20India%20Hackathon%202026%206.webp",
                alt: "Smart India Hackathon 2026 - Photo 06",
            },
          
        ],
    },

    {
        id: "03",
        title: "Graduation Day Ceremony",
        date: "2026",
        category: "Celebration",
        image: "/images/media-gallery/Graduation.webp",
        href: "/gallery/photo-gallery/graduation-day-ceremony",

        photos: [
            {
                id: "graduation-01",
                image:
                    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1600&q=85",
                alt: "Graduation Day Ceremony - Photo 01",
            },
            {
                id: "graduation-02",
                image:
                    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=85",
                alt: "Graduation Day Ceremony - Photo 02",
            },
            {
                id: "graduation-03",
                image:
                    "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=1600&q=85",
                alt: "Graduation Day Ceremony - Photo 03",
            },
            {
                id: "graduation-04",
                image:
                    "https://images.unsplash.com/photo-1627556704302-624286467c65?auto=format&fit=crop&w=1600&q=85",
                alt: "Graduation Day Ceremony - Photo 04",
            },
            {
                id: "graduation-05",
                image:
                    "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1600&q=85",
                alt: "Graduation Day Ceremony - Photo 05",
            },
            {
                id: "graduation-06",
                image:
                    "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1600&q=85",
                alt: "Graduation Day Ceremony - Photo 06",
            },
        ],
    },

    {
        id: "04",
        title: "Induction Ceremony 2026",
        date: "2026",
        category: "Campus Events",
        image: "/images/media-gallery/induction.webp",
        href: "/gallery/photo-gallery/induction-ceremony-2026",

        photos: [
            {
                id: "induction-01",
                image:
                    "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1600&q=85",
                alt: "Induction Ceremony 2026 - Photo 01",
            },
            {
                id: "induction-02",
                image:
                    "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1600&q=85",
                alt: "Induction Ceremony 2026 - Photo 02",
            },
            {
                id: "induction-03",
                image:
                    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1600&q=85",
                alt: "Induction Ceremony 2026 - Photo 03",
            },
            {
                id: "induction-04",
                image:
                    "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1600&q=85",
                alt: "Induction Ceremony 2026 - Photo 04",
            },
            {
                id: "induction-05",
                image:
                    "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1600&q=85",
                alt: "Induction Ceremony 2026 - Photo 05",
            },
            {
                id: "induction-06",
                image:
                    "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1600&q=85",
                alt: "Induction Ceremony 2026 - Photo 06",
            },
        ],
    },

    {
        id: "05",
        title: "United Economic Summit 2026",
        date: "2026",
        category: "Summit",
        image: "/images/media-gallery/summit.webp",
        href: "/gallery/photo-gallery/united-economic-summit-2026",

        photos: [
            {
                id: "summit-01",
                image:
                    "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1600&q=85",
                alt: "United Economic Summit 2026 - Photo 01",
            },
            {
                id: "summit-02",
                image:
                    "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1600&q=85",
                alt: "United Economic Summit 2026 - Photo 02",
            },
            {
                id: "summit-03",
                image:
                    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1600&q=85",
                alt: "United Economic Summit 2026 - Photo 03",
            },
            {
                id: "summit-04",
                image:
                    "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?auto=format&fit=crop&w=1600&q=85",
                alt: "United Economic Summit 2026 - Photo 04",
            },
            {
                id: "summit-05",
                image:
                    "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=1600&q=85",
                alt: "United Economic Summit 2026 - Photo 05",
            },
            {
                id: "summit-06",
                image:
                    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=85",
                alt: "United Economic Summit 2026 - Photo 06",
            },
        ],
    },

    {
        id: "06",
        title: "FIFA Fever Took Over the Campus",
        date: "2026",
        category: "Sports",
        image: "/images/media-gallery/football.webp",
        href: "/gallery/photo-gallery/fifa-fever-took-over-the-campus",

        photos: [
            {
                id: "football-01",
                image:
                    "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1600&q=85",
                alt: "FIFA Fever Took Over the Campus - Photo 01",
            },
            {
                id: "football-02",
                image:
                    "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1600&q=85",
                alt: "FIFA Fever Took Over the Campus - Photo 02",
            },
            {
                id: "football-03",
                image:
                    "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?auto=format&fit=crop&w=1600&q=85",
                alt: "FIFA Fever Took Over the Campus - Photo 03",
            },
            {
                id: "football-04",
                image:
                    "https://images.unsplash.com/photo-1518604666860-9ed391f76460?auto=format&fit=crop&w=1600&q=85",
                alt: "FIFA Fever Took Over the Campus - Photo 04",
            },
            {
                id: "football-05",
                image:
                    "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=1600&q=85",
                alt: "FIFA Fever Took Over the Campus - Photo 05",
            },
            {
                id: "football-06",
                image:
                    "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?auto=format&fit=crop&w=1600&q=85",
                alt: "FIFA Fever Took Over the Campus - Photo 06",
            },
        ],
    },
];

const Page = () => {
    const [selectedCollection, setSelectedCollection] =
        useState<PhotoCollection | null>(null);

    const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(
        null
    );

    const openCollection = (collection: PhotoCollection) => {
        setSelectedCollection(collection);
        setSelectedPhotoIndex(null);
    };

    const closeCollection = () => {
        setSelectedCollection(null);
        setSelectedPhotoIndex(null);
    };

    const openPhoto = (index: number) => {
        setSelectedPhotoIndex(index);
    };

    const closeLightbox = () => {
        setSelectedPhotoIndex(null);
    };

    const showNextPhoto = () => {
        if (!selectedCollection || selectedPhotoIndex === null) return;

        setSelectedPhotoIndex(
            (selectedPhotoIndex + 1) % selectedCollection.photos.length
        );
    };

    const showPreviousPhoto = () => {
        if (!selectedCollection || selectedPhotoIndex === null) return;

        setSelectedPhotoIndex(
            selectedPhotoIndex === 0
                ? selectedCollection.photos.length - 1
                : selectedPhotoIndex - 1
        );
    };

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (selectedPhotoIndex === null) return;

            if (event.key === "Escape") {
                closeLightbox();
            }

            if (event.key === "ArrowRight") {
                showNextPhoto();
            }

            if (event.key === "ArrowLeft") {
                showPreviousPhoto();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [selectedPhotoIndex, selectedCollection]);

    useEffect(() => {
        if (selectedCollection) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [selectedCollection]);

    return (
        <>
            <SiteHeader />

            <main className="bg-[#faf7f2] text-[#20235A]">

                {/* =====================================================
                    HERO
                ===================================================== */}

                <section className="border-b border-[#20235A]/10 bg-[#faf7f2]">

                    <div className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10 lg:px-14 lg:py-20">

                        {/* Breadcrumb */}

                        <div className="mb-12 flex items-center gap-2 text-xs text-[#20235A]/45">

                            <Link
                                href="/"
                                className="transition-colors hover:text-[#D2B87C]"
                            >
                                Home
                            </Link>

                            <ChevronRight size={13} />

                            <Link
                                href="/gallery"
                                className="transition-colors hover:text-[#D2B87C]"
                            >
                                Media Gallery
                            </Link>

                            <ChevronRight size={13} />

                            <span className="text-[#20235A]/70">
                                Photo Gallery
                            </span>

                        </div>


                        <div className="grid gap-10 lg:grid-cols-[1fr_0.55fr] lg:items-end">

                            <div>

                                <div className="mb-5 flex items-center gap-3">

                                    <span className="h-px w-8 bg-[#D2B87C]" />

                                    <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#20235A]/50">
                                        NCERC Photo Gallery
                                    </span>

                                </div>

                                <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                                    Moments from
                                    <span className="text-[#D2B87C]">
                                        {" "}our journey.
                                    </span>
                                </h1>

                            </div>


                            <div className="lg:border-l lg:border-[#20235A]/10 lg:pl-8">

                                <p className="text-sm leading-7 text-[#20235A]/55">
                                    A curated collection of campus events,
                                    celebrations, achievements and experiences
                                    from the NCERC community.
                                </p>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    FEATURED
                ===================================================== */}

                <section className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10 lg:px-14 lg:py-20">

                    <div className="mb-8 flex items-end justify-between">

                        <div>

                            <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                                Featured Collection
                            </span>

                            <h2 className="font-serif text-2xl sm:text-3xl">
                                GREENOVA 2026
                            </h2>

                        </div>

                        <span className="hidden text-xs text-[#20235A]/35 sm:block">
                            01 / 06
                        </span>

                    </div>


                    <button
                        type="button"
                        onClick={() => openCollection(photoCollections[0])}
                        className="group block w-full text-left"
                    >

                        <div className="grid overflow-hidden rounded-2xl border border-[#20235A]/10 bg-white lg:grid-cols-[1.55fr_0.45fr]">

                            {/* Image */}

                            <div className="relative aspect-[16/9] overflow-hidden">

                                <Image
                                    src={photoCollections[0].image}
                                    alt={photoCollections[0].title}
                                    fill
                                    priority
                                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                                    sizes="(max-width: 1024px) 100vw, 70vw"
                                />

                            </div>


                            {/* Content */}

                            <div className="flex flex-col justify-between p-6 sm:p-8">

                                <div>

                                    <div className="mb-6 flex items-center justify-between">

                                        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#D2B87C]">
                                            {photoCollections[0].category}
                                        </span>

                                        <Camera
                                            size={17}
                                            strokeWidth={1.5}
                                            className="text-[#20235A]/30"
                                        />

                                    </div>

                                    <h3 className="font-serif text-2xl leading-tight text-[#20235A]">
                                        {photoCollections[0].title}
                                    </h3>

                                    <p className="mt-4 text-sm leading-6 text-[#20235A]/50">
                                        Explore photographs capturing the
                                        energy and spirit of GREENOVA 2026.
                                    </p>

                                </div>


                                <div className="mt-8 flex items-center justify-between border-t border-[#20235A]/10 pt-5">

                                    <span className="text-xs text-[#20235A]/40">
                                        {photoCollections[0].photos.length} Photos
                                    </span>

                                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#20235A]/15 text-[#20235A] transition-all duration-300 group-hover:border-[#D2B87C] group-hover:bg-[#D2B87C]">
                                        <ArrowUpRight size={16} />
                                    </span>

                                </div>

                            </div>

                        </div>

                    </button>

                </section>


                {/* =====================================================
                    COLLECTIONS
                ===================================================== */}

                <section className="border-y border-[#20235A]/10 bg-white">

                    <div className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10 lg:px-14 lg:py-20">

                        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

                            <div>

                                <div className="mb-3 flex items-center gap-2">

                                    <Images
                                        size={16}
                                        strokeWidth={1.5}
                                        className="text-[#D2B87C]"
                                    />

                                    <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#20235A]/45">
                                        Collections
                                    </span>

                                </div>

                                <h2 className="font-serif text-2xl sm:text-3xl">
                                    Explore the archive
                                </h2>

                            </div>

                            <p className="max-w-sm text-xs leading-6 text-[#20235A]/45">
                                Select a collection to view all photographs
                                from the event.
                            </p>

                        </div>


                        {/* Grid */}

                        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">

                            {photoCollections.slice(1).map((collection) => (

                                <button
                                    key={collection.id}
                                    type="button"
                                    onClick={() => openCollection(collection)}
                                    className="group text-left"
                                >

                                    <article>

                                        {/* Image */}

                                        <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[#20235A]/5">

                                            <Image
                                                src={collection.image}
                                                alt={collection.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            />

                                            {/* Hover overlay */}

                                            <div className="absolute inset-0 bg-[#20235A]/0 transition-colors duration-500 group-hover:bg-[#20235A]/15" />

                                            {/* Number */}

                                            <span className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 font-serif text-xs text-[#20235A]">
                                                {collection.id}
                                            </span>

                                            {/* Arrow */}

                                            <span className="absolute bottom-4 right-4 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-white text-[#20235A] opacity-0 shadow-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                                <ArrowUpRight size={15} />
                                            </span>

                                        </div>


                                        {/* Text */}

                                        <div className="pt-4">

                                            <div className="mb-2 flex items-center justify-between">

                                                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                                    {collection.category}
                                                </span>

                                                <span className="text-[11px] text-[#20235A]/35">
                                                    {collection.photos.length} Photos
                                                </span>

                                            </div>

                                            <h3 className="font-serif text-xl leading-snug text-[#20235A] transition-colors duration-300 group-hover:text-[#D2B87C]">
                                                {collection.title}
                                            </h3>

                                            <div className="mt-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#20235A]/40 transition-colors group-hover:text-[#20235A]">

                                                View photos

                                                <ArrowUpRight size={12} />

                                            </div>

                                        </div>

                                    </article>

                                </button>

                            ))}

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    SMALL CTA
                ===================================================== */}

                <section className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10 lg:px-14 lg:py-20">

                    <div className="flex flex-col gap-6 rounded-2xl bg-[#20235A] px-7 py-10 sm:px-10 lg:flex-row lg:items-center lg:justify-between">

                        <div>

                            <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                                NCERC Media
                            </span>

                            <h2 className="font-serif text-2xl text-white sm:text-3xl">
                                More stories are waiting to be explored.
                            </h2>

                        </div>


                        <Link
                            href="/media_gallery/gallery"
                            className="group flex w-fit items-center gap-3 rounded-full border border-white/20 px-5 py-2.5 text-xs font-medium text-white transition-all duration-300 hover:border-[#D2B87C] hover:bg-[#D2B87C] hover:text-[#20235A]"
                        >
                            Back to Media Gallery

                            <ArrowUpRight
                                size={15}
                                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            />

                        </Link>

                    </div>

                </section>

            </main>


            {/* =========================================================
                COLLECTION OVERLAY
            ========================================================= */}

            {selectedCollection && (
                <div className="fixed inset-0 z-[1000] overflow-y-auto bg-[#faf7f2]">

                    {/* Header */}

                    <div className="sticky top-0 z-20 border-b border-[#20235A]/10 bg-[#faf7f2]/95 backdrop-blur-md">

                        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 sm:px-10 lg:px-14">

                            <div className="flex items-center gap-4">

                                <button
                                    type="button"
                                    onClick={closeCollection}
                                    aria-label="Close photo collection"
                                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[#20235A]/15 transition-all hover:border-[#D2B87C] hover:bg-[#D2B87C]"
                                >
                                    <ArrowLeft size={16} />
                                </button>

                                <div>

                                    <span className="block text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                        {selectedCollection.category}
                                    </span>

                                    <h2 className="font-serif text-xl text-[#20235A] sm:text-2xl">
                                        {selectedCollection.title}
                                    </h2>

                                </div>

                            </div>


                            <button
                                type="button"
                                onClick={closeCollection}
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#20235A]/15 transition-all hover:border-[#D2B87C] hover:bg-[#D2B87C]"
                                aria-label="Close gallery"
                            >
                                <X size={17} />
                            </button>

                        </div>

                    </div>


                    {/* Gallery */}

                    <div className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10 lg:px-14 lg:py-14">

                        <div className="mb-8 flex items-end justify-between">

                            <div>

                                <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                                    Photo Collection
                                </span>

                                <p className="text-sm text-[#20235A]/50">
                                    {selectedCollection.photos.length} photographs
                                    {" "}·{" "}
                                    {selectedCollection.date}
                                </p>

                            </div>

                        </div>


                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

                            {selectedCollection.photos.map((photo, index) => (

                                <button
                                    key={photo.id}
                                    type="button"
                                    onClick={() => openPhoto(index)}
                                    className="group relative overflow-hidden rounded-xl bg-[#20235A]/5 text-left"
                                >

                                    <div className="relative aspect-[4/3]">

                                        <Image
                                            src={photo.image}
                                            alt={photo.alt}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        />

                                        <div className="absolute inset-0 bg-[#20235A]/0 transition-colors duration-300 group-hover:bg-[#20235A]/20" />

                                        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between opacity-0 transition-opacity duration-300 group-hover:opacity-100">

                                            <span className="rounded-full bg-white/95 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#20235A]">
                                                {photo.id}
                                            </span>

                                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#20235A]">
                                                <ArrowUpRight size={14} />
                                            </span>

                                        </div>

                                    </div>

                                </button>

                            ))}

                        </div>

                    </div>

                </div>
            )}


            {/* =========================================================
                LIGHTBOX
            ========================================================= */}

            {selectedCollection && selectedPhotoIndex !== null && (

                <div className="fixed inset-0 z-[1100] flex items-center justify-center bg-[#11121c]/95 px-4 py-6">

                    {/* Close */}

                    <button
                        type="button"
                        onClick={closeLightbox}
                        aria-label="Close photo"
                        className="absolute right-5 top-5 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all hover:border-[#D2B87C] hover:bg-[#D2B87C] hover:text-[#20235A]"
                    >
                        <X size={18} />
                    </button>


                    {/* Previous */}

                    <button
                        type="button"
                        onClick={showPreviousPhoto}
                        aria-label="Previous photo"
                        className="absolute left-4 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all hover:border-[#D2B87C] hover:bg-[#D2B87C] hover:text-[#20235A] sm:left-7"
                    >
                        <ArrowLeftCircle size={23} strokeWidth={1.5} />
                    </button>


                    {/* Next */}

                    <button
                        type="button"
                        onClick={showNextPhoto}
                        aria-label="Next photo"
                        className="absolute right-4 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all hover:border-[#D2B87C] hover:bg-[#D2B87C] hover:text-[#20235A] sm:right-7"
                    >
                        <ArrowRightCircle size={23} strokeWidth={1.5} />
                    </button>


                    {/* Image */}

                    <div className="relative flex h-full w-full max-w-6xl items-center justify-center">

                        <div className="relative h-[75vh] w-full">

                            <Image
                                src={
                                    selectedCollection.photos[selectedPhotoIndex]
                                        .image
                                }
                                alt={
                                    selectedCollection.photos[selectedPhotoIndex]
                                        .alt
                                }
                                fill
                                priority
                                className="object-contain"
                                sizes="100vw"
                            />

                        </div>

                    </div>


                    {/* Bottom information */}

                    <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 items-center gap-4 whitespace-nowrap rounded-full border border-white/10 bg-white/10 px-5 py-2.5 text-white backdrop-blur-md">

                        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#D2B87C]">
                            {selectedCollection.photos[selectedPhotoIndex].id}
                        </span>

                        <span className="h-3 w-px bg-white/20" />

                        <span className="text-xs text-white/70">
                            {selectedPhotoIndex + 1} /{" "}
                            {selectedCollection.photos.length}
                        </span>

                    </div>

                </div>
            )}


            <FooterSection />
        </>
    );
};

export default Page;