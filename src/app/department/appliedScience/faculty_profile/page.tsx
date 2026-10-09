"use client";

import React, { useState } from "react";
import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import DepartmentNavigation from "../departmentnavigation/page";

import {
    ArrowRight,
    ArrowUpRight,
    BookOpen,
    BriefcaseBusiness,
    ChevronLeft,
    ChevronRight,
    GraduationCap,
    X,
} from "lucide-react";

type Faculty = {
    number: string;
    name: string;
    designation: string;
    image?: string;
    category: "Teaching Faculty" | "Lab Faculty";
};

const teachingFaculty: Faculty[] = [
    {
        number: "01",
        name: "Dr Jalaja K",
        designation: "HOD in charge",
        image: "https://ncerc.ac.in/applied-science-and-humanities/img/faculty/DR%20JALAJ%20PHOTO.jpg",
        category: "Teaching Faculty",
    },
    {
        number: "02",
        name: "Prof. Dr Jojo George",
        designation: "Professor",
        image: "https://ncerc.ac.in/applied-science-and-humanities/img/faculty/Dr%20Jojo%20George.jpg",
        category: "Teaching Faculty",
    },
    {
        number: "03",
        name: "Ms Deepamol MS",
        designation: "Assistant Professor",
        image: "https://ncerc.ac.in/applied-science-and-humanities/img/faculty/Deepamol.jpg",
        category: "Teaching Faculty",
    },
    {
        number: "04",
        name: "Ms Thushara K M",
        designation: "Assistant Professor",
        image: "https://ncerc.ac.in/applied-science-and-humanities/img/faculty/Thushara%20K%20M.jpg",
        category: "Teaching Faculty",
    },
    {
        number: "05",
        name: "Mr Jithin Mohandas",
        designation: "Assistant Professor",
        category: "Teaching Faculty",
    },
    {
        number: "06",
        name: "Ms Anitha P",
        designation: "Assistant Professor",
        image: "https://ncerc.ac.in/applied-science-and-humanities/img/faculty/Anitha%20P.jpg",
        category: "Teaching Faculty",
    },
    {
        number: "07",
        name: "Ms Sreelekha TG",
        designation: "Assistant Professor",
        image: "https://ncerc.ac.in/applied-science-and-humanities/img/faculty/Sreelekha%20T%20G.jpg",
        category: "Teaching Faculty",
    },
    {
        number: "08",
        name: "Ms Aiswrya Ramesh",
        designation: "Assistant Professor",
        image: "https://ncerc.ac.in/applied-science-and-humanities/img/faculty/Aiswarya%20Ramesh.jpg",
        category: "Teaching Faculty",
    },
    {
        number: "09",
        name: "Ms Vismaya V",
        designation: "Assistant Professor",
        image: "https://ncerc.ac.in/applied-science-and-humanities/img/faculty/VismayaV_Photo.jpg",
        category: "Teaching Faculty",
    },
    {
        number: "10",
        name: "Rugma C H",
        designation: "Assistant Professor",
        category: "Teaching Faculty",
    },
    {
        number: "11",
        name: "Mrs. Ajitha Jimmy",
        designation: "Assistant Professor",
        image: "https://ncerc.ac.in/applied-science-and-humanities/img/faculty/AjithaJimmy_photo.jpg",
        category: "Teaching Faculty",
    },
    {
        number: "12",
        name: "Mrs.Krishnaveni K R",
        designation: "Assistant Professor",
        category: "Teaching Faculty",
    },
    {
        number: "13",
        name: "Ms. Haritha M C",
        designation: "Assistant Professor",
        image: "https://ncerc.ac.in/applied-science-and-humanities/img/faculty/harithamc_photo.jpg",
        category: "Teaching Faculty",
    },
    {
        number: "14",
        name: "Ms.Haritha P H",
        designation: "Assistant Professor",
        image: "https://ncerc.ac.in/applied-science-and-humanities/img/faculty/HarithaPH_Photo.jpg",
        category: "Teaching Faculty",
    },
    {
        number: "15",
        name: "Ms.Madhunisha M",
        designation: "Assistant Professor(Maths )",
        image: "https://ncerc.ac.in/applied-science-and-humanities/img/faculty/MadhunishaM_Photo.jpg",
        category: "Teaching Faculty",
    },
    {
        number: "16",
        name: "Mr Lohithakshan",
        designation: "Gym Instructor",
        category: "Teaching Faculty",
    },
];

const labFaculty: Faculty[] = [
    {
        number: "01",
        name: "Ms Anila M",
        designation: "Lab Assistant",
        image: "https://ncerc.ac.in/applied-science-and-humanities/img/faculty/Anila%20M.jpg",
        category: "Lab Faculty",
    },
    {
        number: "02",
        name: "Mr. Arun Raj C R",
        designation: "Lab Assistant(Physics)",
        category: "Lab Faculty",
    },
    {
        number: "03",
        name: "Ms.Renjini K P",
        designation: "Lab Assistant(Physics)",
        category: "Lab Faculty",
    },
];

const allFaculty = [...teachingFaculty, ...labFaculty];

export default function FacultyProfilePage() {
    const [selectedFaculty, setSelectedFaculty] =
        useState<Faculty | null>(null);

    const [activeSection, setActiveSection] = useState<
        "all" | "teaching" | "lab"
    >("all");

    const filteredFaculty =
        activeSection === "teaching"
            ? teachingFaculty
            : activeSection === "lab"
                ? labFaculty
                : allFaculty;

    const selectedIndex = selectedFaculty
        ? filteredFaculty.findIndex(
            (faculty) => faculty.number === selectedFaculty.number
        )
        : -1;

    const showPrevious = () => {
        if (selectedIndex <= 0) return;
        setSelectedFaculty(filteredFaculty[selectedIndex - 1]);
    };

    const showNext = () => {
        if (
            selectedIndex === -1 ||
            selectedIndex >= filteredFaculty.length - 1
        ) {
            return;
        }

        setSelectedFaculty(filteredFaculty[selectedIndex + 1]);
    };

    return (
        <>
            <SiteHeader />

            <main className="overflow-hidden bg-[#FAF9F6] text-[#1E1917]">
                {/* =========================================================
                    HERO
                ========================================================== */}
                <section className="relative isolate overflow-hidden bg-[#20235A]">
                    <div className="pointer-events-none absolute inset-0 -z-10">
                        <div className="absolute -right-32 -top-32 h-[520px] w-[520px] rounded-full border border-white/10" />

                        <div className="absolute -right-4 -top-12 h-[340px] w-[340px] rounded-full border border-[#D2B87C]/20" />

                        <div className="absolute bottom-[-180px] left-[42%] h-[420px] w-[420px] rounded-full bg-[#D2B87C]/10 blur-3xl" />

                        <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_52%,rgba(210,184,124,0.055)_52%,transparent_76%)]" />
                    </div>

                    <div className="mx-auto grid min-h-[470px] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.25fr_0.75fr] md:py-24 lg:px-12">
                        <div className="max-w-3xl">
                            <div className="mb-7 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#D2B87C]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                    Applied Science & Humanities
                                </span>
                            </div>

                            <h1 className="font-serif text-4xl font-medium leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[68px]">
                                The People Behind
                                <br />
                                <span className="italic text-[#D2B87C]">
                                    the Learning.
                                </span>
                            </h1>

                            <p className="mt-7 max-w-2xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
                                Meet the faculty members who guide, mentor,
                                and inspire students across science,
                                mathematics, communication, and practical
                                learning.
                            </p>

                            <div className="mt-9 flex flex-wrap items-center gap-5">
                                <a
                                    href="#faculty-directory"
                                    className="inline-flex items-center gap-3 rounded-sm bg-[#D2B87C] px-6 py-3.5 text-sm font-semibold text-[#20235A] transition-colors duration-300 hover:bg-white"
                                >
                                    View Faculty
                                    <ArrowRight size={17} />
                                </a>

                                <span className="text-xs tracking-wide text-white/50">
                                    Teach · Mentor · Inspire
                                </span>
                            </div>
                        </div>

                        {/* Hero information panel */}
                        <div className="relative mx-auto w-full max-w-[410px]">
                            <div className="absolute -inset-4 rounded-sm border border-[#D2B87C]/20" />

                            <div className="relative border border-white/10 bg-white/[0.055] p-6 sm:p-8">
                                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                                    <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                                        Faculty Directory
                                    </span>

                                    <GraduationCap
                                        size={21}
                                        strokeWidth={1.35}
                                        className="text-[#D2B87C]"
                                    />
                                </div>

                                <div className="mt-7 grid grid-cols-2 gap-px border border-white/10 bg-white/10">
                                    <div className="bg-[#20235A] p-5">
                                        <span className="font-serif text-4xl text-white">
                                            {teachingFaculty.length}
                                        </span>

                                        <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.17em] text-white/45">
                                            Teaching Faculty
                                        </p>
                                    </div>

                                    <div className="bg-[#20235A] p-5">
                                        <span className="font-serif text-4xl text-white">
                                            {labFaculty.length}
                                        </span>

                                        <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.17em] text-white/45">
                                            Lab Faculty
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-6 flex items-start gap-4 border-l border-[#D2B87C]/50 pl-4">
                                    <BookOpen
                                        size={21}
                                        strokeWidth={1.3}
                                        className="mt-0.5 shrink-0 text-[#D2B87C]"
                                    />

                                    <p className="text-sm leading-6 text-white/60">
                                        A dedicated academic team supporting
                                        foundational learning and practical
                                        education.
                                    </p>
                                </div>

                                <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
                                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                                        NCERC · Faculty Profile
                                    </span>

                                    <span className="h-1.5 w-1.5 rounded-full bg-[#D2B87C]" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#D2B87C]/70 to-transparent" />
                </section>

                {/* --------navigations-------- */}
                <DepartmentNavigation />
                {/* =========================================================
                    INTRODUCTION
                ========================================================== */}
                <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
                    <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.72fr_1.28fr] md:gap-16">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                Faculty Profile
                            </p>

                            <h2 className="mt-5 max-w-md font-serif text-3xl font-medium leading-tight text-[#20235A] sm:text-4xl lg:text-[46px]">
                                Experience that shapes learning.
                            </h2>
                        </div>

                        <div className="flex flex-col justify-center">
                            <p className="text-base leading-8 text-[#625D57]">
                                The Department of Applied Science & Humanities
                                brings together faculty members who contribute
                                to mathematics, physics, chemistry,
                                communication, and foundational academic
                                learning across the institution.
                            </p>

                            <div className="mt-7 grid gap-4 sm:grid-cols-2">
                                <div className="border border-[#E2DDD3] bg-white p-5">
                                    <div className="flex items-center gap-3">
                                        <span className="flex h-9 w-9 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                                            <GraduationCap size={18} />
                                        </span>

                                        <div>
                                            <p className="font-serif text-lg text-[#20235A]">
                                                {teachingFaculty.length}
                                            </p>

                                            <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#8F7746]">
                                                Teaching Faculty
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="border border-[#E2DDD3] bg-white p-5">
                                    <div className="flex items-center gap-3">
                                        <span className="flex h-9 w-9 items-center justify-center bg-[#D2B87C]/20 text-[#8F7746]">
                                            <BriefcaseBusiness size={18} />
                                        </span>

                                        <div>
                                            <p className="font-serif text-lg text-[#20235A]">
                                                {labFaculty.length}
                                            </p>

                                            <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#8F7746]">
                                                Lab Faculty
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================
                    FACULTY DIRECTORY
                ========================================================== */}
                <section
                    id="faculty-directory"
                    className="scroll-mt-24 border-y border-[#E7E1D6] bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
                >
                    <div className="mx-auto max-w-7xl">
                        {/* Section heading */}
                        <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                    Our Faculty
                                </p>

                                <h2 className="mt-4 font-serif text-3xl font-medium text-[#20235A] sm:text-4xl lg:text-5xl">
                                    Meet the academic team.
                                </h2>
                            </div>

                            <p className="max-w-md text-sm leading-7 text-[#706A63]">
                                Explore the teaching and laboratory faculty
                                contributing to the academic environment of
                                Applied Science & Humanities.
                            </p>
                        </div>

                        {/* Filter */}
                        <div className="mt-10 flex flex-wrap items-center gap-2 border-b border-[#E3DED4] pb-5">
                            <button
                                type="button"
                                onClick={() => setActiveSection("all")}
                                className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] transition-all ${activeSection === "all"
                                    ? "bg-[#20235A] text-white"
                                    : "border border-[#DDD7CB] bg-[#FAF9F6] text-[#625D57] hover:border-[#20235A] hover:text-[#20235A]"
                                    }`}
                            >
                                All Faculty
                            </button>

                            <button
                                type="button"
                                onClick={() => setActiveSection("teaching")}
                                className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] transition-all ${activeSection === "teaching"
                                    ? "bg-[#20235A] text-white"
                                    : "border border-[#DDD7CB] bg-[#FAF9F6] text-[#625D57] hover:border-[#20235A] hover:text-[#20235A]"
                                    }`}
                            >
                                Teaching Faculty
                            </button>

                            <button
                                type="button"
                                onClick={() => setActiveSection("lab")}
                                className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] transition-all ${activeSection === "lab"
                                    ? "bg-[#20235A] text-white"
                                    : "border border-[#DDD7CB] bg-[#FAF9F6] text-[#625D57] hover:border-[#20235A] hover:text-[#20235A]"
                                    }`}
                            >
                                Lab Faculty
                            </button>
                        </div>

                        {/* Faculty cards */}
                        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {filteredFaculty.map((faculty, index) => (
                                <article
                                    key={`${faculty.category}-${faculty.number}-${faculty.name}`}
                                    className="group relative flex min-h-[430px] flex-col overflow-hidden border border-[#E5E0D7] bg-[#FAF9F6] transition-all duration-500 hover:-translate-y-1 hover:border-[#D2B87C] hover:shadow-[0_20px_50px_rgba(32,35,90,0.09)]"
                                >
                                    {/* Photo */}
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setSelectedFaculty(faculty)
                                        }
                                        className="relative block h-[285px] w-full overflow-hidden bg-[#EAE5DB] text-left"
                                        aria-label={`View profile of ${faculty.name}`}
                                    >
                                        {faculty.image ? (
                                            <img
                                                src={faculty.image}
                                                alt={faculty.name}
                                                className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.045]"
                                            />
                                        ) : (
                                            <div className="flex h-full w-full flex-col items-center justify-center bg-[#20235A]">
                                                <div className="flex h-24 w-24 items-center justify-center rounded-full border border-[#D2B87C]/40 bg-white/[0.06]">
                                                    <span className="font-serif text-3xl text-[#D2B87C]">
                                                        {faculty.name
                                                            .replace(
                                                                /[^A-Za-z ]/g,
                                                                ""
                                                            )
                                                            .split(" ")
                                                            .filter(Boolean)
                                                            .slice(0, 2)
                                                            .map(
                                                                (word) =>
                                                                    word[0]
                                                            )
                                                            .join("")}
                                                    </span>
                                                </div>

                                                <span className="mt-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
                                                    Photo unavailable
                                                </span>
                                            </div>
                                        )}

                                        {/* Image overlay */}
                                        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#20235A]/70 to-transparent opacity-80" />

                                        <span className="absolute left-5 top-5 flex h-9 min-w-9 items-center justify-center border border-white/30 bg-[#20235A]/80 px-2 text-[10px] font-semibold tracking-[0.15em] text-white backdrop-blur-sm">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                        <span className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-[#20235A]/70 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                                            <ArrowUpRight size={16} />
                                        </span>

                                        <span className="absolute bottom-5 left-5 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/80">
                                            {faculty.category}
                                        </span>
                                    </button>

                                    {/* Information */}
                                    <div className="flex flex-1 flex-col p-5 sm:p-6">
                                        <div className="flex-1">
                                            <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[#8F7746]">
                                                {faculty.designation}
                                            </p>

                                            <h3 className="mt-3 font-serif text-[22px] font-medium leading-tight text-[#20235A]">
                                                {faculty.name}
                                            </h3>
                                        </div>

                                        <div className="mt-6 flex items-center justify-between border-t border-[#E2DDD3] pt-4">
                                            <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#8A837B]">
                                                {faculty.category ===
                                                    "Teaching Faculty"
                                                    ? "Academic Team"
                                                    : "Laboratory Team"}
                                            </span>

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setSelectedFaculty(faculty)
                                                }
                                                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D8D1C5] text-[#20235A] transition-all duration-300 hover:border-[#20235A] hover:bg-[#20235A] hover:text-white"
                                                aria-label={`Open ${faculty.name} profile`}
                                            >
                                                <ArrowRight size={15} />
                                            </button>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* =========================================================
                    FACULTY STRUCTURE
                ========================================================== */}
                <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid overflow-hidden border border-[#DDD7CB] bg-[#20235A] md:grid-cols-[0.7fr_1.3fr]">
                            <div className="relative overflow-hidden border-b border-white/10 p-7 sm:p-9 md:border-b-0 md:border-r lg:p-12">
                                <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full border border-[#D2B87C]/15" />

                                <p className="relative text-xs font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                                    Faculty Structure
                                </p>

                                <h2 className="relative mt-5 max-w-sm font-serif text-3xl font-medium leading-tight text-white sm:text-4xl">
                                    A team built around student growth.
                                </h2>
                            </div>

                            <div className="grid sm:grid-cols-2">
                                <div className="border-b border-white/10 p-7 sm:border-r sm:p-9 lg:p-12">
                                    <span className="font-serif text-5xl text-[#D2B87C]">
                                        {teachingFaculty.length}
                                    </span>

                                    <h3 className="mt-5 font-serif text-xl text-white">
                                        Teaching Faculty
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-white/55">
                                        Faculty members supporting core
                                        academic disciplines and foundational
                                        learning across engineering
                                        programmes.
                                    </p>
                                </div>

                                <div className="p-7 sm:p-9 lg:p-12">
                                    <span className="font-serif text-5xl text-[#D2B87C]">
                                        {labFaculty.length}
                                    </span>

                                    <h3 className="mt-5 font-serif text-xl text-white">
                                        Lab Faculty
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-white/55">
                                        Laboratory support staff helping
                                        students translate classroom concepts
                                        into practical experiences.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================
                    CLOSING CTA
                ========================================================== */}
                <section className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
                    <div className="relative mx-auto max-w-7xl overflow-hidden border border-[#DDD7CB] bg-[#F2EFE8] px-6 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-16">
                        <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full border border-[#20235A]/10" />

                        <div className="pointer-events-none absolute -right-2 -top-10 h-36 w-36 rounded-full border border-[#D2B87C]/50" />

                        <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-center">
                            <div className="max-w-2xl">
                                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                    Applied Science & Humanities
                                </p>

                                <h2 className="mt-4 font-serif text-3xl font-medium leading-tight text-[#20235A] sm:text-4xl">
                                    Discover the department beyond the
                                    classroom.
                                </h2>

                                <p className="mt-4 max-w-xl text-sm leading-7 text-[#706A63]">
                                    Explore the facilities, activities, and
                                    academic environment that support the
                                    department's learning experience.
                                </p>
                            </div>

                            <a
                                href="/departments/applied_science_and_humanities/facilities"
                                className="inline-flex shrink-0 items-center justify-center gap-3 self-start border border-[#20235A] px-6 py-4 text-sm font-semibold text-[#20235A] transition-colors duration-300 hover:bg-[#20235A] hover:text-white md:self-center"
                            >
                                Explore Facilities
                                <ArrowRight size={17} />
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            {/* =============================================================
                FACULTY MODAL
            ============================================================= */}
            {selectedFaculty && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-[#111321]/85 px-4 py-6 backdrop-blur-md sm:px-6"
                    onClick={() => setSelectedFaculty(null)}
                >
                    <div
                        className="relative flex max-h-[92vh] w-full max-w-4xl overflow-hidden bg-[#FAF9F6] shadow-2xl"
                        onClick={(event) => event.stopPropagation()}
                    >
                        {/* Close */}
                        <button
                            type="button"
                            onClick={() => setSelectedFaculty(null)}
                            className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center border border-white/30 bg-[#20235A]/80 text-white backdrop-blur-sm transition-colors hover:bg-[#D2B87C] hover:text-[#20235A]"
                            aria-label="Close faculty profile"
                        >
                            <X size={18} />
                        </button>

                        {/* Previous */}
                        <button
                            type="button"
                            onClick={showPrevious}
                            disabled={selectedIndex <= 0}
                            className="absolute left-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-[#20235A]/80 text-white backdrop-blur-sm transition-all hover:bg-[#D2B87C] hover:text-[#20235A] disabled:pointer-events-none disabled:opacity-30"
                            aria-label="Previous faculty"
                        >
                            <ChevronLeft size={19} />
                        </button>

                        {/* Next */}
                        <button
                            type="button"
                            onClick={showNext}
                            disabled={
                                selectedIndex === -1 ||
                                selectedIndex >= filteredFaculty.length - 1
                            }
                            className="absolute right-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-[#20235A]/80 text-white backdrop-blur-sm transition-all hover:bg-[#D2B87C] hover:text-[#20235A] disabled:pointer-events-none disabled:opacity-30"
                            aria-label="Next faculty"
                        >
                            <ChevronRight size={19} />
                        </button>

                        <div className="grid w-full md:grid-cols-[0.85fr_1.15fr]">
                            {/* Modal image */}
                            <div className="relative min-h-[340px] bg-[#20235A] sm:min-h-[440px]">
                                {selectedFaculty.image ? (
                                    <img
                                        src={selectedFaculty.image}
                                        alt={selectedFaculty.name}
                                        className="h-full min-h-[340px] w-full object-cover object-top sm:min-h-[440px]"
                                    />
                                ) : (
                                    <div className="flex h-full min-h-[340px] items-center justify-center bg-[#20235A] sm:min-h-[440px]">
                                        <div className="flex h-32 w-32 items-center justify-center rounded-full border border-[#D2B87C]/40">
                                            <span className="font-serif text-4xl text-[#D2B87C]">
                                                {selectedFaculty.name
                                                    .replace(
                                                        /[^A-Za-z ]/g,
                                                        ""
                                                    )
                                                    .split(" ")
                                                    .filter(Boolean)
                                                    .slice(0, 2)
                                                    .map(
                                                        (word) => word[0]
                                                    )
                                                    .join("")}
                                            </span>
                                        </div>
                                    </div>
                                )}

                                <div className="absolute inset-0 bg-gradient-to-t from-[#20235A]/75 via-transparent to-transparent" />

                                <div className="absolute bottom-6 left-6 right-6">
                                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                        {selectedFaculty.category}
                                    </span>

                                    <p className="mt-2 text-xs text-white/55">
                                        {selectedIndex + 1} /{" "}
                                        {filteredFaculty.length}
                                    </p>
                                </div>
                            </div>

                            {/* Modal content */}
                            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                    Faculty Profile
                                </p>

                                <h2 className="mt-4 font-serif text-3xl font-medium leading-tight text-[#20235A] sm:text-4xl">
                                    {selectedFaculty.name}
                                </h2>

                                <div className="mt-5 h-px w-14 bg-[#D2B87C]" />

                                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.12em] text-[#625D57]">
                                    {selectedFaculty.designation}
                                </p>

                                <p className="mt-7 max-w-md text-sm leading-7 text-[#706A63]">
                                    Faculty member of the Department of Applied
                                    Science & Humanities at NCERC, contributing
                                    to the department's academic and practical
                                    learning environment.
                                </p>

                                <div className="mt-9 border-t border-[#E0DAD0] pt-6">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[#8F7746]">
                                            Department
                                        </span>

                                        <span className="text-right text-xs font-medium text-[#20235A]">
                                            Applied Science & Humanities
                                        </span>
                                    </div>

                                    <div className="mt-5 flex items-center justify-between">
                                        <span className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[#8F7746]">
                                            Role
                                        </span>

                                        <span className="text-right text-xs font-medium text-[#20235A]">
                                            {selectedFaculty.designation}
                                        </span>
                                    </div>
                                </div>

                                <div className="mt-8 flex items-center gap-3">
                                    <button
                                        type="button"
                                        onClick={showPrevious}
                                        disabled={selectedIndex <= 0}
                                        className="flex h-10 items-center gap-2 border border-[#D8D1C5] px-4 text-xs font-semibold uppercase tracking-[0.1em] text-[#20235A] transition-all hover:border-[#20235A] disabled:pointer-events-none disabled:opacity-30"
                                    >
                                        <ChevronLeft size={15} />
                                        Previous
                                    </button>

                                    <button
                                        type="button"
                                        onClick={showNext}
                                        disabled={
                                            selectedIndex === -1 ||
                                            selectedIndex >=
                                            filteredFaculty.length - 1
                                        }
                                        className="flex h-10 items-center gap-2 border border-[#D8D1C5] px-4 text-xs font-semibold uppercase tracking-[0.1em] text-[#20235A] transition-all hover:border-[#20235A] disabled:pointer-events-none disabled:opacity-30"
                                    >
                                        Next
                                        <ChevronRight size={15} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <FooterSection />
        </>
    );
}