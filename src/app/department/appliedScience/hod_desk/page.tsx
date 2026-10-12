"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
    ArrowDown,
    ArrowRight,
    BookOpen,
    GraduationCap,
    Microscope,
    Quote,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import DepartmentNavigation from "../departmentnavigation/page";


const BASE_PATH = "/applied-science-and-humanities";

const HOD_IMAGE =
    "https://ncerc.ac.in/images/dpt/applied-science/applied_hod.jpeg";

const departmentMessage =
    "The department of Applied Science and Humanities is one of the first established departments in NCERC. The department involves teaching Engineering Mathematics, Calculus, Engineering Physics A&B, Engineering Chemistry, Professional Communication and Lifeskills connected with all the programmes offered by all other departments. The department maintains three well equipped laboratories for Engineering Physics, Engineering Chemistry and Language lab which is used by students of all branches to fulfill their B.Tech degree requirement. The Language lab aims to maintain good linguistic proficiency through accuracy in grammar, pronunciation and vocabulary. The department is well equipped with all modern teaching aids and offers remedial and reinforcement sessions. The department explores the interdisciplinary strengths in the fundamental Sciences and emerging areas and enhances application based research.";

const highlights = [
    {
        number: "01",
        title: "Strong Foundations",
        description:
            "Engineering Mathematics, Physics, Chemistry, and professional communication form the foundation of learning across programmes.",
        icon: BookOpen,
    },
    {
        number: "02",
        title: "Practical Learning",
        description:
            "Well-equipped Physics, Chemistry, and Language laboratories support practical learning across departments.",
        icon: Microscope,
    },
    {
        number: "03",
        title: "Academic Development",
        description:
            "Modern teaching aids, remedial sessions, and reinforcement activities support students throughout their learning journey.",
        icon: GraduationCap,
    },
];

export default function HODDeskPage() {
    return (
        <>
            <SiteHeader />

            <main className="min-h-screen bg-[#FAF7F2] text-[#1E1917]">
                {/* HERO */}
                <section className="relative overflow-hidden bg-[#20235A] text-white">
                    <div className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full border border-[#D2B87C]/15" />
                    <div className="pointer-events-none absolute -right-8 -top-16 h-72 w-72 rounded-full border border-[#D2B87C]/20" />

                    <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 sm:py-20 lg:px-14 lg:py-24 xl:px-20">
                        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
                            <div className="relative z-10">
                                <div className="mb-7 flex items-center gap-3">
                                    <span className="h-px w-10 bg-[#D2B87C]" />
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D2B87C] sm:text-xs">
                                        Applied Science & Humanities
                                    </p>
                                </div>

                                <h1 className="max-w-3xl font-serif text-[43px] font-normal leading-[1.08] tracking-[-0.035em] sm:text-[58px] lg:text-[64px] xl:text-[74px]">
                                    A Message
                                    <br />
                                    from the{" "}
                                    <span className="italic text-[#D2B87C]">HOD</span>
                                </h1>

                                <p className="mt-7 max-w-xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
                                    Building strong academic foundations through scientific
                                    understanding, practical learning, and the development of
                                    essential professional skills.
                                </p>

                                <div className="mt-9 flex flex-wrap items-center gap-5">
                                    <a
                                        href="#hod-message"
                                        className="group inline-flex min-h-12 items-center gap-3 bg-[#D2B87C] px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#20235A] transition-colors duration-300 hover:bg-white"
                                    >
                                        Read the Message
                                        <ArrowDown
                                            size={15}
                                            className="transition-transform duration-300 group-hover:translate-y-1"
                                        />
                                    </a>

                                    {/* <Link
                                        href={`${BASE_PATH}/faculty-details.php`}
                                        className="inline-flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-[#D2B87C]"
                                    >
                                        Meet Our Faculty
                                        < ArrowUpRight size={16} />
                                    </Link > */}
                                </div >

                                <div className="mt-12 flex items-center gap-3 text-xs text-white/55">
                                    <Link href={BASE_PATH} className="transition-colors hover:text-white">
                                        Department
                                    </Link>
                                    <span className="text-[#D2B87C]">/</span>
                                    <span className="text-white/85">HOD&apos;s Desk</span>
                                </div>
                            </div >

                            {/* HOD PORTRAIT */}
                            < div className="relative mx-auto w-full max-w-[480px] lg:ml-auto" >
                                <div className="absolute -bottom-4 -left-4 right-4 top-4 border border-[#D2B87C]/60 sm:-bottom-5 sm:-left-5 sm:right-5 sm:top-5" />

                                <div className="relative aspect-[4/4.5] overflow-hidden bg-[#30336B]">
                                    <Image
                                        src={HOD_IMAGE}
                                        alt="Dr. Jalaja K, Associate Professor and Head of the Department of Applied Science and Humanities"
                                        fill
                                        sizes="(min-width: 1024px) 330px, 100vw"
                                        className="h-full w-full object-cover object-top"
                                        loading="eager"
                                    />

                                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#151638]/95 via-[#151638]/45 to-transparent px-6 pb-7 pt-24 sm:px-8 sm:pb-9">
                                        <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C] sm:text-xs">
                                            Head of the Department
                                        </p>
                                        <h2 className="font-serif text-3xl leading-tight text-white sm:text-4xl">
                                            Dr. Jalaja K
                                        </h2>
                                        <p className="mt-2 text-sm text-white/80">
                                            Associate Professor &amp; HoD
                                        </p>
                                    </div>
                                </div>

                                <div className="absolute -right-2 top-8 hidden border border-[#D2B87C]/60 bg-[#20235A] px-4 py-3 sm:-right-4 sm:block sm:px-5 sm:py-4">
                                    <p className="text-[9px] uppercase tracking-[0.2em] text-[#D2B87C]">
                                        Academic Leadership
                                    </p>
                                    <p className="mt-1 font-serif text-lg text-white">
                                        Knowledge &amp; Discovery
                                    </p>
                                </div>
                            </div >
                        </div >
                    </div >

                    <div className="h-1 w-full bg-[#D2B87C]" />
                </section >

                {/* --------navigations-------- */}
                <DepartmentNavigation />

                {/* CREDENTIALS STRIP */}
                < section className="border-b border-[#20235A]/10 bg-white" >
                    <div className="mx-auto grid max-w-[1440px] grid-cols-1 px-5 sm:px-8 md:grid-cols-3 lg:px-14 xl:px-20">
                        <div className="flex items-start gap-4 border-b border-[#20235A]/10 py-6 md:border-b-0 md:border-r md:py-8 md:pr-8">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#F2EFE8] text-[#8F7746]">
                                <GraduationCap size={21} strokeWidth={1.5} />
                            </div>
                            <div>
                                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                                    Qualifications
                                </p>
                                <p className="mt-2 text-sm leading-6 text-[#1E1917]">
                                    Ph.D, MPhil, MSc (Physics), B.Ed
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 border-b border-[#20235A]/10 py-6 md:border-b-0 md:border-r md:px-8 md:py-8">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#F2EFE8] text-[#8F7746]">
                                <BookOpen size={21} strokeWidth={1.5} />
                            </div>
                            <div>
                                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                                    Academic Role
                                </p>
                                <p className="mt-2 text-sm leading-6 text-[#1E1917]">
                                    Associate Professor &amp; Head of Department
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 py-6 md:pl-8 md:py-8">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#F2EFE8] text-[#8F7746]">
                                <Microscope size={21} strokeWidth={1.5} />
                            </div>
                            <div>
                                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                                    Department
                                </p>
                                <p className="mt-2 text-sm leading-6 text-[#1E1917]">
                                    Applied Science &amp; Humanities
                                </p>
                            </div>
                        </div>
                    </div>
                </section >

                {/* HOD MESSAGE */}
                < section
                    id="hod-message"
                    className="scroll-mt-24 px-5 py-16 sm:px-8 sm:py-24 lg:px-14 lg:py-28 xl:px-20"
                >
                    <div className="mx-auto max-w-[1200px]">
                        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
                            <div>
                                <div className="mb-6 flex items-center gap-3">
                                    <span className="h-px w-9 bg-[#8F7746]" />
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8F7746] sm:text-xs">
                                        From the HOD&apos;s Desk
                                    </p>
                                </div>

                                <h2 className="max-w-md font-serif text-4xl font-normal leading-[1.13] tracking-[-0.025em] text-[#20235A] sm:text-5xl lg:text-[54px]">
                                    Learning to
                                    <br />
                                    <span className="italic">think,</span>
                                    <br />
                                    discover &amp; grow.
                                </h2>

                                <div className="mt-8 h-px w-20 bg-[#D2B87C]" />

                                <p className="mt-6 max-w-sm text-sm leading-7 text-[#1E1917]/65">
                                    A foundation in fundamental sciences helps students build
                                    analytical understanding and connect classroom learning
                                    with practical applications.
                                </p>
                            </div>

                            <div className="relative">
                                <Quote
                                    size={43}
                                    strokeWidth={1}
                                    className="mb-5 text-[#D2B87C]"
                                />

                                <blockquote className="font-serif text-2xl leading-[1.55] text-[#20235A] sm:text-3xl sm:leading-[1.5]">
                                    &ldquo;Education is not the learning of facts but training
                                    of the mind to think.&rdquo;
                                </blockquote>

                                <div className="mt-7 flex items-center gap-4">
                                    <span className="h-px w-10 bg-[#8F7746]" />
                                    <p className="text-xs font-semibold uppercase tracking-[0.17em] text-[#8F7746]">
                                        Albert Einstein
                                    </p>
                                </div>

                                <div className="my-10 h-px w-full bg-[#20235A]/10" />

                                <div className="space-y-5 text-[14px] leading-8 text-[#1E1917]/75 sm:text-[15px] sm:leading-[2.05]">
                                    <p>{departmentMessage}</p>
                                </div>

                                <div className="mt-9 flex flex-wrap items-center gap-3 border-l-2 border-[#D2B87C] bg-white px-5 py-5 sm:px-6">
                                    <div>
                                        <p className="font-serif text-xl text-[#20235A]">
                                            Dr. Jalaja K
                                        </p>
                                        <p className="mt-1 text-xs leading-5 text-[#1E1917]/60">
                                            Associate Professor &amp; Head of the Department
                                            <br />
                                            Applied Science &amp; Humanities, NCERC
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >

                {/* DEPARTMENT HIGHLIGHTS */}
                < section className="bg-[#F2EFE8] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24 xl:px-20" >
                    <div className="mx-auto max-w-[1200px]">
                        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
                            <div>
                                <div className="mb-5 flex items-center gap-3">
                                    <span className="h-px w-9 bg-[#8F7746]" />
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8F7746] sm:text-xs">
                                        Our Academic Approach
                                    </p>
                                </div>

                                <h2 className="max-w-2xl font-serif text-4xl font-normal leading-tight tracking-[-0.03em] text-[#20235A] sm:text-5xl lg:text-[54px]">
                                    Foundations that
                                    <br className="hidden sm:block" /> shape futures.
                                </h2>
                            </div>

                            <p className="max-w-md text-sm leading-7 text-[#1E1917]/65">
                                Supporting students through fundamental sciences, practical
                                facilities, and academic guidance across programmes.
                            </p>
                        </div>

                        <div className="grid gap-5 md:grid-cols-3">
                            {highlights.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <article
                                        key={item.number}
                                        className="group flex h-full flex-col border border-[#20235A]/10 bg-[#FAF7F2] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D2B87C] sm:p-8"
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="font-serif text-sm text-[#8F7746]">
                                                {item.number}
                                            </span>
                                            <Icon
                                                size={24}
                                                strokeWidth={1.4}
                                                className="text-[#8F7746] transition-transform duration-300 group-hover:scale-110"
                                            />
                                        </div>

                                        <h3 className="mt-9 font-serif text-2xl leading-tight text-[#20235A]">
                                            {item.title}
                                        </h3>

                                        <p className="mt-4 flex-1 text-sm leading-7 text-[#1E1917]/65">
                                            {item.description}
                                        </p>

                                        <div className="mt-7 h-px w-12 bg-[#D2B87C] transition-all duration-300 group-hover:w-full" />
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </section >

                {/* CLOSING CTA */}
                < section className="bg-[#20235A] px-5 py-14 text-white sm:px-8 sm:py-16 lg:px-14 xl:px-20" >
                    <div className="mx-auto flex max-w-[1200px] flex-col justify-between gap-7 md:flex-row md:items-center">
                        <div>
                            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D2B87C] sm:text-xs">
                                Explore the Department
                            </p>
                            <h2 className="max-w-2xl font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
                                Discover the people and facilities behind our learning.
                            </h2>
                        </div>

                        <Link
                            href={`${BASE_PATH}/faculty-details.php`}
                            className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-3 border border-[#D2B87C]/60 px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:bg-[#D2B87C] hover:text-[#20235A]"
                        >
                            Explore Faculty
                            <ArrowRight
                                size={16}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </Link>
                    </div>
                </section >
            </main >

            <FooterSection />
        </>
    );
}
