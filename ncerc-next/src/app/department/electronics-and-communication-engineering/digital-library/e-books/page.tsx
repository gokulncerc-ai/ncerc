
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
    BookOpen,
    Download,
    ExternalLink,
    Search,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../../DepartmentNav/DepartmentNav";

const DEPARTMENT_PATH =
    "/department/electronics-and-communication-engineering";

const books = [
    {
        title: "Engineering Circuit Analysis",
        authors: "William H. Hayt & Jack E. Kemmerly",
        url: "https://elcom-team.com/Subjects/%D8%AF%D9%88%D8%A7%D8%A6%D8%B1%20%D9%83%D9%87%D8%B1%D8%A7%D8%A6%D9%8A%D8%A9%201/%D8%A7%D9%84%D9%83%D8%AA%D8%AA%D8%A8%20%D9%88%D8%A7%D9%84%D8%AD%D9%84%D9%88%D9%84/cct1-book(9ed).pdf",
    },
    {
        title: "Electronic Devices and Circuit Theory",
        authors: "Robert L. Boylestad & Louis Nashelsky",
        url: "https://kolegite.com/EE_library/books_and_lectures/%D0%95%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0/Electronic%20Devices%20and%20Circuit%20Theory%20-%2011th%20Edition.pdf",
    },
    {
        title: "Semiconductor Physics and Devices",
        authors: "Donald A. Neamen",
        url: "https://www.optima.ufam.edu.br/SemPhys/Downloads/Neamen.pdf",
    },
    {
        title: "Microelectronic Circuits",
        authors: "Adel S. Sedra & Kenneth C. Smith",
        url: "https://ftp.arcchurches.com/default.aspx/mLA1A2/604912/microelectronic__circuits_sedra_smith__5th__edition.pdf",
    },
    {
        title: "Digital Design",
        authors: "M. Morris Mano",
        url: "https://dn710701.ca.archive.org/0/items/DigitalLogicAndComputerDesignByM.MorrisMano2ndEdition/Digital%20Logic%20And%20Computer%20Design%20By%20M.%20Morris%20Mano%20%282nd%20Edition%29.pdf",
    },
    {
        title: "Signals and Systems",
        authors: "Alan V. Oppenheim & Alan S. Willsky",
        url: "https://materias.df.uba.ar/l5a2021c1/files/2021/05/Alan-V.-Oppenheim-Alan-S.-Willsky-with-S.-Hamid-Signals-and-Systems-Prentice-Hall-1996.pdf",
    },
    {
        title: "Digital Signal Processing",
        authors: "Alan V. Oppenheim & Ronald W. Schafer",
        url: "http://home.eps.hw.ac.uk/~pf21/pages/page3/assets/DSP.pdf",
    },
    {
        title: "Communication Systems",
        authors: "Simon Haykin",
        url: "https://koracademy.com/sites/default/files/inline-files/communication-systems-4thedition-by-simonhaykin.pdf",
    },
    {
        title: "Modern Digital and Analog Communication Systems",
        authors: "B. P. Lathi",
        url: "https://eduguide.home.blog/wp-content/uploads/2019/02/modern-digital-analog-communication-system-b.p-lathi-3e.pdf",
    },
    {
        title: "Antenna Theory",
        authors: "Constantine A. Balanis",
        url: "https://ia800501.us.archive.org/30/items/AntennaTheoryAnalysisAndDesign3rdEd/Antenna%20Theory%20Analysis%20and%20Design%203rd%20ed.pdf",
    },
    {
        title: "Microwave Engineering",
        authors: "David M. Pozar",
        url: "https://cchgeu.ru/upload/iblock/030/5jx80vlz570v5r41oay519alhspk4mtt/Pozar_Microwave_Engineering.pdf",
    },
    {
        title: "Modern Control Engineering",
        authors: "Katsuhiko Ogata",
        url: "https://plcsitemiz.wordpress.com/wp-content/uploads/2009/03/modern-control-engineering-kogata-3rd-edition.pdf",
    },
    {
        title: "The 8051 Microcontroller and Embedded Systems",
        authors: "Muhammad Ali Mazidi",
        url: "https://archive.org/download/mazidi/mazidi.pdf",
    },
    {
        title: "CMOS VLSI Design",
        authors: "Neil H. E. Weste & David Harris",
        url: "https://dl.sabzdanesh.com/Electronic/CMOS_VLSI_Design_4th_Edition(WWW.SabzElco.IR).pdf",
    },
    {
        title: "Data Communications and Networking",
        authors: "Behrouz A. Forouzan",
        url: "http://www.iimchyderabad.com/econtent/Data%20Communications%20and%20Networking%20by%20Behrouz%20A.%20Forouzan.pdf",
    },
];

export default function EBooksPage() {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredBooks = useMemo(() => {
        const query = searchQuery.trim().toLowerCase();

        if (!query) return books;

        return books.filter(
            (book) =>
                book.title.toLowerCase().includes(query) ||
                book.authors.toLowerCase().includes(query)
        );
    }, [searchQuery]);

    return (
        <>
            <SiteHeader />

            <main className="min-h-screen bg-[#FAF7F2] text-[#1E1917]">
                {/* Hero Section */}
                <section className="relative isolate overflow-hidden bg-[#20235A] text-white">
                    {/* Decorative Elements */}
                    <div className="pointer-events-none absolute -right-32 -top-36 h-[500px] w-[500px] rounded-full border border-[#D2B87C]/10" />
                    <div className="pointer-events-none absolute -right-12 -top-20 h-[340px] w-[340px] rounded-full border border-[#D2B87C]/15" />
                    <div className="pointer-events-none absolute -bottom-44 -left-32 h-[400px] w-[400px] rounded-full border border-white/5" />

                    <div className="relative mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24 xl:px-20">
                        <div className="relative z-10 max-w-4xl">
                            {/* Department Label */}
                            <div className="mb-7 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#D2B87C]" />
                                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D2B87C] sm:text-xs">
                                    Electronics &amp; Communication Engineering · NBA Accredited
                                </p>
                            </div>

                            {/* Heading */}
                            <h1 className="font-serif text-[42px] font-normal leading-[1.06] tracking-[-0.035em] sm:text-[56px] lg:text-[64px] xl:text-[72px]">
                                E-<span className="italic text-[#D2B87C]">Books</span>
                            </h1>

                            <p className="mt-7 max-w-2xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
                                Explore a collection of standard textbooks covering
                                electronics, communication systems, digital design, signal
                                processing, VLSI and other core areas of engineering.
                            </p>

                            {/* Breadcrumb */}
                            <div className="mt-12 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-white/50">
                                <Link
                                    href={DEPARTMENT_PATH}
                                    className="transition-colors duration-300 hover:text-white"
                                >
                                    Departments
                                </Link>
                                <span className="text-[#D2B87C]">/</span>
                                <Link
                                    href={DEPARTMENT_PATH}
                                    className="transition-colors duration-300 hover:text-white"
                                >
                                    Electronics &amp; Communication Engineering
                                </Link>
                                <span className="text-[#D2B87C]">/</span>
                                <Link
                                    href={`${DEPARTMENT_PATH}/digital-library`}
                                    className="transition-colors duration-300 hover:text-white"
                                >
                                    Digital Library
                                </Link>
                                <span className="text-[#D2B87C]">/</span>
                                <span className="text-white/80">E-Books</span>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Accent */}
                    <div className="relative h-1 w-full bg-[#D2B87C]" />
                </section>

                {/* Department Navigation */}
                <InnerHeader />

                {/* Introduction */}
                <section className="bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-16 lg:px-14 lg:py-20 xl:px-20">
                    <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-center lg:gap-16">
                        <div>
                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-px w-8 bg-[#D2B87C]" />
                                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8F7746]">
                                    Digital Reading Collection
                                </p>
                            </div>

                            <h2 className="max-w-2xl font-serif text-3xl font-medium leading-tight text-[#20235A] sm:text-4xl lg:text-[42px]">
                                Essential textbooks for
                                <span className="italic text-[#8F7746]">
                                    {" "}engineering learning.
                                </span>
                            </h2>

                            <p className="mt-6 max-w-2xl text-[15px] leading-8 text-[#55545A]">
                                Access a selection of standard textbooks recommended for
                                various areas of Electronics and Communication Engineering.
                                These resources cover fundamental concepts and specialised
                                subjects to support academic study and technical understanding.
                            </p>
                        </div>

                        {/* Collection Highlight */}
                        <div className="relative overflow-hidden bg-[#20235A] p-8 text-white sm:p-10">
                            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full border border-[#D2B87C]/20" />
                            <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full border border-[#D2B87C]/15" />

                            <div className="relative">
                                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-full border border-[#D2B87C]/40 bg-white/5">
                                    <BookOpen className="h-7 w-7 text-[#D2B87C]" />
                                </div>

                                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#D2B87C]">
                                    ECE E-Books
                                </p>

                                <p className="mt-4 font-serif text-5xl font-medium text-white">
                                    15
                                </p>

                                <h3 className="mt-2 font-serif text-2xl font-medium">
                                    Standard Textbooks
                                </h3>

                                <div className="mt-7 h-px w-16 bg-[#D2B87C]" />

                                <p className="mt-5 text-sm leading-7 text-white/65">
                                    A collection of academic references across core engineering
                                    subjects.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Books Listing */}
                <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24 xl:px-20">
                    <div className="mx-auto max-w-[1280px]">
                        {/* Section Heading */}
                        <div className="mb-10 border-b border-[#E8E2D8] pb-7">
                            <div className="mb-4 flex items-center gap-3">
                                <span className="h-px w-8 bg-[#D2B87C]" />
                                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8F7746]">
                                    Academic Resources
                                </p>
                            </div>

                            <h2 className="font-serif text-3xl font-medium text-[#20235A] sm:text-4xl">
                                Standard Textbooks
                            </h2>

                            <p className="mt-4 max-w-2xl text-[15px] leading-8 text-[#55545A]">
                                Browse the available textbooks and use the access links to
                                view the corresponding resources.
                            </p>
                        </div>

                        {/* Search and Count */}
                        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <div className="relative w-full sm:max-w-md">
                                <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8F7746]" />
                                <input
                                    type="search"
                                    value={searchQuery}
                                    onChange={(event) => setSearchQuery(event.target.value)}
                                    placeholder="Search by book title or author..."
                                    aria-label="Search books by title or author"
                                    className="h-12 w-full border border-[#E8E2D8] bg-[#FAF7F2] pl-11 pr-4 text-sm text-[#20235A] outline-none transition-colors placeholder:text-[#929096] focus:border-[#D2B87C]"
                                />
                            </div>

                            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8F7746]">
                                Showing {filteredBooks.length} of {books.length} Books
                            </p>
                        </div>

                        {/* Book List */}
                        <div className="overflow-hidden border border-[#E8E2D8]">
                            {/* Table Header */}
                            <div className="hidden grid-cols-[70px_minmax(0,1.5fr)_minmax(0,1fr)_150px] items-center gap-5 bg-[#20235A] px-6 py-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C] md:grid lg:px-8">
                                <span>Sl. No.</span>
                                <span>Standard Textbook</span>
                                <span>Author(s)</span>
                                <span className="text-right">Access</span>
                            </div>

                            {filteredBooks.length > 0 ? (
                                <div>
                                    {filteredBooks.map((book) => {
                                        const originalIndex = books.indexOf(book);

                                        return (
                                            <article
                                                key={book.title}
                                                className="group grid gap-4 border-b border-[#E8E2D8] bg-white px-5 py-6 transition-colors duration-300 last:border-b-0 hover:bg-[#FAF7F2] sm:px-7 md:grid-cols-[70px_minmax(0,1.5fr)_minmax(0,1fr)_150px] md:items-center md:gap-5 lg:px-8"
                                            >
                                                {/* Serial Number */}
                                                <div className="flex items-center gap-3 md:block">
                                                    <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#8F7746] md:hidden">
                                                        Sl. No.
                                                    </span>
                                                    <span className="font-serif text-2xl font-medium text-[#D2B87C]">
                                                        {String(originalIndex + 1).padStart(2, "0")}
                                                    </span>
                                                </div>

                                                {/* Book Title */}
                                                <div>
                                                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8F7746] md:hidden">
                                                        Standard Textbook
                                                    </p>

                                                    <h3 className="font-serif text-lg font-medium leading-snug text-[#20235A] transition-colors group-hover:text-[#8F7746] sm:text-xl">
                                                        {book.title}
                                                    </h3>
                                                </div>

                                                {/* Author */}
                                                <div>
                                                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8F7746] md:hidden">
                                                        Author(s)
                                                    </p>

                                                    <p className="text-sm leading-7 text-[#68666A]">
                                                        {book.authors}
                                                    </p>
                                                </div>

                                                {/* Access Link */}
                                                <div className="md:text-right">
                                                    <a
                                                        href={book.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        aria-label={`Open ${book.title}`}
                                                        className="inline-flex items-center justify-center gap-2 border border-[#20235A] bg-[#20235A] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:border-[#D2B87C] hover:bg-[#D2B87C] hover:text-[#20235A]"
                                                    >
                                                        <Download className="h-4 w-4" />
                                                        View Book
                                                        <ExternalLink className="h-3 w-3" />
                                                    </a>
                                                </div>
                                            </article>
                                        );
                                    })}
                                </div>
                            ) : (
                                <div className="px-6 py-16 text-center">
                                    <BookOpen className="mx-auto h-10 w-10 text-[#D2B87C]" />
                                    <h3 className="mt-5 font-serif text-xl font-medium text-[#20235A]">
                                        No books found
                                    </h3>
                                    <p className="mt-2 text-sm leading-7 text-[#68666A]">
                                        Try searching with a different book title or author name.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* Closing Section */}
                <section className="bg-[#F2EFE8] px-5 py-12 sm:px-8 lg:px-14 xl:px-20">
                    <div className="mx-auto flex max-w-[1280px] flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8F7746]">
                                ECE Digital Library
                            </p>

                            <h2 className="mt-2 font-serif text-2xl font-medium text-[#20235A] sm:text-3xl">
                                Explore knowledge. Build understanding.
                            </h2>
                        </div>

                        <div className="hidden h-px flex-1 bg-[#D2B87C]/60 sm:mx-8 sm:block" />

                        <BookOpen className="h-9 w-9 shrink-0 text-[#8F7746]" />
                    </div>
                </section>
            </main>

            <FooterSection />
        </>
    );
}
