"use client";
import React, { useState } from "react";
import Image from "next/image";
import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import McaNavigation from "../../mca/mcanavigation/page";
import Faq from "../../mca/faq/page";
import {
    ArrowUpRight,
    CalendarDays,
    ChevronRight,
    FileText,
    GraduationCap,
    X,
} from "lucide-react";
const faculty = [
    {
        id: "01",
        name: "Dr. Sudheer S Marar",
        shortName: "Dr. Sudheer",
        designation: "Professor and HOD",
        qualification: "Not specified",
        joiningDate: "Not specified",
        image: "https://ncerc.ac.in/mca/img/faculty/Dr.%20Sudheer.png",
        profile:
            "https://ncerc.ac.in/mca/faculty-details#",
    },
    {
        id: "02",
        name: "Dr. Pramod K",
        shortName: "Dr. Promod",
        designation: "Senior Assistant Professor",
        qualification: "Not specified",
        joiningDate: "Not specified",
        image: "https://ncerc.ac.in/mca/img/faculty/Dr.%20Promod.png",
        profile:
            "https://ncerc.ac.in/mca/faculty-profile-dr-pramod-k.php",
    },
    {
        id: "03",
        name: "Ashish L",
        shortName: "Mr. Ashish",
        designation: "Assistant Professor",
        qualification: "Not specified",
        joiningDate: "Not specified",
        image: "https://ncerc.ac.in/mca/img/faculty/Mr.%20Ashish.png",
        profile:
            "https://ncerc.ac.in/mca/faculty-profile-dr-ashish-l.php",
    },
    {
        id: "04",
        name: "Ms Divya P",
        shortName: "Ms. Divya",
        designation: "Assistant Professor",
        qualification: "Not specified",
        joiningDate: "Not specified",
        image: "https://ncerc.ac.in/mca/img/faculty/Ms.%20Divya.png",
        profile:
            "https://ncerc.ac.in/mca/faculty-profile-divyap.php",
    },
    {
        id: "05",
        name: "Ms Sumi M",
        shortName: "Ms. Sumi",
        designation: "Assistant Professor",
        qualification: "Not specified",
        joiningDate: "Not specified",
        image: "https://ncerc.ac.in/mca/img/faculty/Ms.%20Sumi.png",
        profile:
            "https://ncerc.ac.in/mca/faculty-profile-sumi-m.php",
    },
    {
        id: "06",
        name: "Ms Sreeji K B",
        shortName: "Ms. Sreeji",
        designation: "Assistant Professor",
        qualification: "Not specified",
        joiningDate: "Not specified",
        image: "https://ncerc.ac.in/mca/img/faculty/Ms.%20Sreeji.png",
        profile:
            "https://ncerc.ac.in/mca/faculty-profile-sreeji-kb.php",
    },
    {
        id: "07",
        name: "Ms Aparna A",
        shortName: "Ms. Aparna",
        designation: "Assistant Professor",
        qualification: "Not specified",
        joiningDate: "Not specified",
        image: "https://ncerc.ac.in/mca/img/faculty/Ms.%20Aparna.png",
        profile:
            "https://ncerc.ac.in/mca/faculty-profile-aparna-a.php",
    },
];

export default function Page() {
    const [activeFaculty, setActiveFaculty] =
        useState<number | null>(null);
    const selectedFaculty =
        activeFaculty !== null ? faculty[activeFaculty] : null;

    return (
        <>
            <SiteHeader />

            <main className="bg-[#FAF7F2] text-[#1E1917]">
                {/* =====================================================
                    HERO
                ====================================================== */}
                <section className="relative overflow-hidden bg-[#20235A] text-white">
                    <div className="mx-auto grid min-h-[560px] max-w-[1440px] items-center gap-12 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-16 lg:py-24">
                        {/* Hero Content */}
                        <div className="relative z-10">
                            <div className="flex items-center gap-3">
                                <span className="h-px w-9 bg-[#D2B87C]" />

                                <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#D2B87C]">
                                    Department of Computer Applications
                                </span>
                            </div>

                            <h1 className="mt-6 max-w-3xl font-serif text-[48px] leading-[0.97] tracking-[-0.035em] sm:text-[62px] lg:text-[72px] xl:text-[78px]">
                                Faculty
                                <br />
                                <span className="text-[#D2B87C]">
                                    Profile.
                                </span>
                            </h1>

                            <p className="mt-7 max-w-xl text-[15px] leading-7 text-white/70 sm:text-[16px]">
                                Meet the faculty members of the Department of
                                Computer Applications, bringing together
                                academic guidance, technical knowledge and
                                professional experience.
                            </p>

                            <div className="mt-10 flex flex-wrap items-center gap-6">
                                <div className="border-l border-[#D2B87C]/60 pl-4">
                                    <p className="font-serif text-[34px] leading-none text-[#D2B87C]">
                                        07
                                    </p>

                                    <p className="mt-2 text-[8px] uppercase tracking-[0.2em] text-white/45">
                                        Faculty Members
                                    </p>
                                </div>

                                <div className="border-l border-white/15 pl-4">
                                    <p className="font-serif text-[34px] leading-none text-white">
                                        MCA
                                    </p>

                                    <p className="mt-2 text-[8px] uppercase tracking-[0.2em] text-white/45">
                                        Department
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Hero Editorial Panel */}
                        <div className="relative lg:justify-self-end">
                            <div className="relative ml-auto max-w-[500px]">
                                <div className="aspect-[4/3] overflow-hidden border border-white/10 bg-white/5">
                                    <Image
                                        src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=85"
                                        alt="Academic faculty and students"
                                        fill
                                        sizes="(min-width: 1024px) 330px, 100vw"
                                        className="h-full w-full object-cover object-center grayscale-[10%] transition-transform duration-700 hover:scale-[1.02]"
                                    />
                                </div>

                                <div className="absolute -bottom-5 left-5 border border-white/10 bg-[#20235A] px-5 py-4 sm:left-8">
                                    <p className="font-serif text-[24px] text-[#D2B87C]">
                                        Academic Leadership
                                    </p>

                                    <p className="mt-1 text-[8px] uppercase tracking-[0.18em] text-white/50">
                                        Professor & HOD
                                    </p>
                                </div>

                                <div className="absolute -right-3 -top-3 hidden h-20 w-20 border-r border-t border-[#D2B87C]/50 sm:block" />
                            </div>
                        </div>
                    </div>
                </section>

                <McaNavigation />

                {/* =====================================================
                    INTRO
                ====================================================== */}
                <section className="bg-white">
                    <div className="mx-auto max-w-[1440px] px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
                        <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
                            <div>
                                <div className="flex items-center gap-3">
                                    <span className="h-px w-8 bg-[#D2B87C]" />

                                    <span className="text-[9px] font-medium uppercase tracking-[0.22em] text-[#8F7746]">
                                        Faculty Profile
                                    </span>
                                </div>

                                <h2 className="mt-5 max-w-sm font-serif text-[38px] leading-[1.03] tracking-[-0.03em] text-[#20235A] sm:text-[48px]">
                                    The people behind
                                    <span className="text-[#8F7746]">
                                        {" "}
                                        the learning.
                                    </span>
                                </h2>
                            </div>

                            <div className="max-w-3xl">
                                <p className="text-[15px] leading-8 text-[#1E1917]/65 sm:text-[16px]">
                                    The Department of Computer Applications is
                                    supported by a dedicated faculty team
                                    committed to academic guidance, student
                                    development and professional learning.
                                </p>

                                <p className="mt-5 text-[15px] leading-8 text-[#1E1917]/65 sm:text-[16px]">
                                    Explore the faculty profiles below to learn
                                    more about the academic team and their
                                    roles within the MCA department.
                                </p>

                                <div className="mt-8 flex items-center gap-3">
                                    <span className="h-px w-8 bg-[#D2B87C]" />

                                    <span className="text-[8px] uppercase tracking-[0.2em] text-[#1E1917]/40">
                                        Department of Computer Applications
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    FACULTY LIST
                ====================================================== */}
                <section className="bg-[#F2EFE8]">
                    <div className="mx-auto max-w-[1440px] px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
                        {/* Section Heading */}
                        <div className="flex flex-col justify-between gap-6 border-b border-[#20235A]/10 pb-7 sm:flex-row sm:items-end">
                            <div>
                                <div className="flex items-center gap-3">
                                    <span className="h-px w-8 bg-[#D2B87C]" />

                                    <span className="text-[9px] font-medium uppercase tracking-[0.22em] text-[#8F7746]">
                                        Academic Team
                                    </span>
                                </div>

                                <h2 className="mt-4 font-serif text-[38px] leading-[1.03] tracking-[-0.03em] text-[#20235A] sm:text-[48px]">
                                    Our faculty.
                                </h2>
                            </div>

                            {/* <p className="max-w-sm text-[11px] leading-5 text-[#1E1917]/45 sm:text-right">
                                Academic leadership, teaching and guidance
                                supporting the MCA learning experience.
                            </p> */}
                        </div>

                        {/* Faculty Grid */}
                        <div className="mt-10 grid gap-px border border-[#20235A]/10 bg-[#20235A]/10 sm:grid-cols-2 lg:grid-cols-3">
                            {faculty.map((member, index) => (
                                <article
                                    key={member.id}
                                    className="group bg-white"
                                >
                                    {/* Image */}
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setActiveFaculty(index)
                                        }
                                        className="relative block aspect-[4/3] w-full overflow-hidden bg-[#F7F5F0] text-left focus:outline-none"
                                    >
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            sizes="(min-width: 1024px) 330px, 100vw"
                                            className="h-full w-full object-contain p-5 transition-transform duration-700 group-hover:scale-[1.025] sm:p-6"
                                        />

                                        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#20235A]/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                                        <div className="absolute left-4 top-4 border border-white/30 bg-[#20235A]/90 px-3 py-2">
                                            <span className="font-serif text-[15px] text-[#D2B87C]">
                                                {member.id}
                                            </span>
                                        </div>

                                        <div className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center border border-white/30 bg-[#20235A]/90 text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                                            <ArrowUpRight
                                                size={15}
                                                strokeWidth={1.5}
                                            />
                                        </div>
                                    </button>

                                    {/* Details */}
                                    <div className="p-6 sm:p-7">
                                        <p className="text-[8px] font-medium uppercase tracking-[0.2em] text-[#8F7746]">
                                            {member.designation}
                                        </p>

                                        <h3 className="mt-3 font-serif text-[27px] leading-[1.05] tracking-[-0.02em] text-[#20235A]">
                                            {member.name}
                                        </h3>

                                        <div className="mt-6 grid grid-cols-2 border-y border-[#20235A]/10">
                                            <div className="border-r border-[#20235A]/10 py-4 pr-3">
                                                <div className="flex items-center gap-2">
                                                    <GraduationCap
                                                        size={13}
                                                        strokeWidth={1.4}
                                                        className="text-[#8F7746]"
                                                    />

                                                    <span className="text-[8px] font-medium uppercase tracking-[0.12em] text-[#1E1917]/40">
                                                        Qualification
                                                    </span>
                                                </div>

                                                <p className="mt-2 text-[10px] leading-4 text-[#1E1917]/55">
                                                    {member.qualification}
                                                </p>
                                            </div>

                                            <div className="py-4 pl-4">
                                                <div className="flex items-center gap-2">
                                                    <CalendarDays
                                                        size={13}
                                                        strokeWidth={1.4}
                                                        className="text-[#8F7746]"
                                                    />

                                                    <span className="text-[8px] font-medium uppercase tracking-[0.12em] text-[#1E1917]/40">
                                                        Date of Joining
                                                    </span>
                                                </div>

                                                <p className="mt-2 text-[10px] leading-4 text-[#1E1917]/55">
                                                    {member.joiningDate}
                                                </p>
                                            </div>
                                        </div>

                                        <a
                                            href={member.profile}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="mt-5 flex w-fit items-center gap-2 text-[9px] font-medium uppercase tracking-[0.16em] text-[#20235A] transition-colors duration-300 hover:text-[#8F7746]"
                                        >
                                            View profile
                                            <ChevronRight
                                                size={14}
                                                strokeWidth={1.5}
                                            />
                                        </a>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    FACULTY RECORD
                ====================================================== */}
                <section className="bg-[#20235A] text-white">
                    <div className="mx-auto max-w-[1440px] px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
                        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
                            <div>
                                <div className="flex items-center gap-3">
                                    <span className="h-px w-8 bg-[#D2B87C]" />

                                    <span className="text-[9px] font-medium uppercase tracking-[0.22em] text-[#D2B87C]">
                                        Academic Record
                                    </span>
                                </div>

                                <h2 className="mt-5 max-w-sm font-serif text-[38px] leading-[1.03] tracking-[-0.03em] sm:text-[48px]">
                                    A documented
                                    <span className="text-[#D2B87C]">
                                        {" "}
                                        faculty record.
                                    </span>
                                </h2>
                            </div>

                            <div className="max-w-3xl">
                                <p className="text-[15px] leading-8 text-white/65 sm:text-[16px]">
                                    The department also maintains a faculty
                                    record covering the past three years in
                                    accordance with NBA requirements.
                                </p>

                                <a
                                    href="https://ncerc.ac.in/documents/faculty-list/mca/Faculty-List-of-past-3-years.pdf"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group mt-8 flex max-w-xl items-center justify-between border border-white/15 bg-white/[0.04] px-5 py-5 transition-colors duration-300 hover:border-[#D2B87C]/60 hover:bg-white/[0.07]"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#D2B87C]/30 text-[#D2B87C]">
                                            <FileText
                                                size={18}
                                                strokeWidth={1.4}
                                            />
                                        </div>

                                        <div>
                                            <p className="font-serif text-[20px] text-white">
                                                Faculty List of Past 3 Years
                                            </p>

                                            <p className="mt-1 text-[8px] uppercase tracking-[0.16em] text-white/40">
                                                As per NBA requirements
                                            </p>
                                        </div>
                                    </div>

                                    <ArrowUpRight
                                        size={18}
                                        strokeWidth={1.4}
                                        className="shrink-0 text-[#D2B87C] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    CLOSING
                ====================================================== */}
                {/* <section className="bg-white">
                    <div className="mx-auto max-w-[1440px] px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
                        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end lg:gap-20">
                            <div>
                                <span className="text-[9px] font-medium uppercase tracking-[0.22em] text-[#8F7746]">
                                    Department of Computer Applications
                                </span>

                                <div className="mt-5 h-px w-16 bg-[#D2B87C]" />
                            </div>

                            <div>
                                <h2 className="max-w-3xl font-serif text-[34px] leading-[1.06] tracking-[-0.03em] text-[#20235A] sm:text-[44px]">
                                    Guided by knowledge.
                                    <br />
                                    <span className="text-[#8F7746]">
                                        Shaped for the future.
                                    </span>
                                </h2>

                                <p className="mt-5 max-w-2xl text-[14px] leading-7 text-[#1E1917]/55 sm:text-[15px]">
                                    The MCA faculty team supports students
                                    throughout their academic journey,
                                    encouraging learning, professional growth
                                    and meaningful engagement with the field
                                    of computer applications.
                                </p>
                            </div>
                        </div>
                    </div>
                </section> */}
            </main>

            {/* =========================================================
                FACULTY MODAL
            ========================================================== */}
            {selectedFaculty && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-[#20235A]/90 p-4 backdrop-blur-sm sm:p-6"
                    onClick={() => setActiveFaculty(null)}
                >
                    <div
                        className="relative grid max-h-[90vh] w-full max-w-5xl overflow-hidden bg-[#FAF7F2] lg:grid-cols-[0.9fr_1.1fr]"
                        onClick={(event) => event.stopPropagation()}
                    >
                        {/* Close */}
                        <button
                            type="button"
                            onClick={() => setActiveFaculty(null)}
                            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center border border-white/20 bg-[#20235A] text-white transition-colors hover:bg-[#D2B87C] hover:text-[#20235A]"
                            aria-label="Close faculty profile"
                        >
                            <X size={17} strokeWidth={1.5} />
                        </button>

                        {/* Modal Image */}
                        <div className="flex min-h-[300px] items-center justify-center bg-[#F2EFE8] p-6 sm:min-h-[400px] lg:min-h-[560px]">
                            <Image
                                src={selectedFaculty.image}
                                alt={selectedFaculty.name}
                                fill
                                sizes="(min-width: 1024px) 330px, 100vw"
                                className="h-full max-h-[500px] w-full object-contain"
                            />
                        </div>

                        {/* Modal Content */}
                        <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                            <span className="text-[9px] font-medium uppercase tracking-[0.22em] text-[#8F7746]">
                                Faculty Profile · {selectedFaculty.id}
                            </span>

                            <h2 className="mt-4 font-serif text-[36px] leading-[1.03] tracking-[-0.03em] text-[#20235A] sm:text-[48px]">
                                {selectedFaculty.name}
                            </h2>

                            <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.18em] text-[#8F7746]">
                                {selectedFaculty.designation}
                            </p>

                            <div className="mt-8 border-y border-[#20235A]/10">
                                <div className="grid grid-cols-2 border-b border-[#20235A]/10 py-5">
                                    <div>
                                        <p className="text-[8px] uppercase tracking-[0.15em] text-[#1E1917]/40">
                                            Qualification
                                        </p>

                                        <p className="mt-2 text-[13px] text-[#1E1917]/65">
                                            {selectedFaculty.qualification}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-[8px] uppercase tracking-[0.15em] text-[#1E1917]/40">
                                            Date of Joining
                                        </p>

                                        <p className="mt-2 text-[13px] text-[#1E1917]/65">
                                            {selectedFaculty.joiningDate}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <a
                                href={selectedFaculty.profile}
                                target="_blank"
                                rel="noreferrer"
                                className="mt-7 flex w-fit items-center gap-3 bg-[#20235A] px-5 py-3 text-[9px] font-medium uppercase tracking-[0.16em] text-white transition-colors duration-300 hover:bg-[#D2B87C] hover:text-[#20235A]"
                            >
                                Open Full Profile
                                <ArrowUpRight
                                    size={14}
                                    strokeWidth={1.5}
                                />
                            </a>
                        </div>
                    </div>
                </div>
            )}

            <Faq />
            <FooterSection />
        </>
    );
};