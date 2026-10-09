"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
    ArrowUpRight,
    Award,
    ChevronRight,
    ExternalLink,
    FileBadge,
    Lightbulb,
    Medal,
    Rocket,
    ShieldCheck,
    Sparkles,
    Trophy,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import Iedcnavigation from "../../../student-support/iedc/Iedcnavigation/navigation"


const studentAchievements = [
    {
        number: "01",
        title: "Yuva Mastermind Selection",
        description:
            "Mr. Sreejith S and Mr. Sudharsan of S7 Mechatronics got selected for Yuva Mastermind and received a grant of Rs.10,000 to complete their prototype.",
        category: "Grant & Prototype",
    },
    {
        number: "02",
        title: "Student Startup Funded by KSUM",
        description:
            'Mr. Vishnu, Alumni, CSE Department, NCERC, Pampady, started a company named "QUARD PROSO" and received a fund of 12 lakhs from KSUM.',
        category: "Startup",
    },
    {
        number: "03",
        title: "IEDC Summit 2018",
        description:
            "A student team from Nehru College of Engineering and Research Centre attended the IEDC Summit on 3rd November 2018 held at Amal Jyothi College, Kanjirapally, Kottayam.",
        category: "Summit",
    },
    {
        number: "04",
        title: "CIFT Incubation",
        description:
            "Mr. Govind, Mr. Jithin T.J, Mr. Melvin Johnson, and Mr. Sreerag of final year Mechatronics got incubation at Central Institute of Fisheries Technology (ICAR-CIFT), Kochi.",
        category: "Incubation",
    },
    {
        number: "05",
        title: "CONCLAVE-2019",
        description:
            'Students from NCERC attended the project innovation competition "CONCLAVE-2019", conducted by the District Industries Center, Thrissur from 25th to 26th February 2019.',
        category: "Innovation Competition",
    },
    {
        number: "06",
        title: "UDYAM SAMAAGAM-2019",
        description:
            'A group of students across various disciplines attended the project innovation and startup competition "UDYAM SAMAAGAM-2019", conducted by MSME Thrissur from 19th to 20th March 2019.',
        category: "Startup Competition",
    },
    {
        number: "07",
        title: "SAMRAMBHAK MITHRA",
        description:
            'Mr. Prasanth K.R and Mr. Sarath Krishna E, first year Mechanical Engineering students of NCERC, attended the idea presentation camp "SAMRAMBHAK MITHRA", conducted by Mar Ivanios College, Thiruvananthapuram on 16th March 2019.',
        category: "Idea Presentation",
    },
    {
        number: "08",
        title: "Idea Pitching-2019 — Rajagiri",
        description:
            'Students of final year Mechatronics Engineering bagged first prize of Rs.20,000/- in the event "IDEA PITCHING-2019" conducted by Rajagiri College of Engineering, Ernakulam on 15th March 2019.',
        category: "First Prize",
    },
    {
        number: "09",
        title: "Idea Pitching-2019 — AIST",
        description:
            'Students of final year Mechatronics Engineering bagged first prize of Rs.25,000/- in the event "IDEA PITCHING-2019" conducted by Albertian Institute of Science and Technology, Ernakulam.',
        category: "First Prize",
    },
    {
        number: "10",
        title: "Presentation Skill & Idea Pitching",
        description:
            'Mr. Cyril Joseph and Mr. Sreejith S of EEE Department participated in the 2-day workshop "PRESENTATION SKILL AND Idea Pitching-2019" organized by ICT Academy of Kerala in association with Kerala Startup Mission.',
        category: "Workshop",
    },
    {
        number: "11",
        title: "Python Programming Workshop",
        description:
            'Seven students of CSE Department participated in the 2-day workshop "Python Programming" organized by ICT Academy of Kerala in association with Kerala Startup Mission from 25th to 26th April 2019.',
        category: "Technical Workshop",
    },
];

const patents = [
    "Weather Based Automatic Roof Top Control",
    "Lightning Arrester For Domestic Appliances (LADA)",
];

const recognitionItems = [
    {
        number: "01",
        image: "https://ncerc.ac.in/images/dpt/iedc/achivement/1.jpg",
        title:
            "Mr. Rajkumar G become a member in Technical Evaluation Panel in the Competition and Received an award",
        href: "https://ncerc.ac.in/iedc/achivement-news1",
    },
    {
        number: "02",
        image: "https://ncerc.ac.in/images/dpt/iedc/achivement/2.jpg",
        title: "IICDC 2019 : TECHNICAL EVAUATION PANEL",
        href: "https://ncerc.ac.in/iedc/achivement-news2",
    },
    {
        number: "03",
        image: "https://ncerc.ac.in/images/dpt/iedc/achivement/3.jpg",
        title: "Certificate of Appreciation",
        href: "https://ncerc.ac.in/iedc/achivement-news3",
    },
    {
        number: "04",
        image: "https://ncerc.ac.in/images/dpt/iedc/achivement/4.jpg",
        title:
            "Ashish D - His project Mask & Gloves Incinerator is selected by KSUM (Kerala Start-Up Mission).",
        href: "https://ncerc.ac.in/iedc/achivement-news4",
    },
    {
        number: "05",
        image: "https://ncerc.ac.in/images/dpt/iedc/achivement/5.jpg",
        title: "Manufacturing and marketing 11 Automatic Hand sanitizer Dispenser",
        href: "https://ncerc.ac.in/iedc/achivement-news5",
    },
    {
        number: "06",
        image: "https://ncerc.ac.in/images/dpt/iedc/achivement/6.jpg",
        title: "Team Plasma for manufaturing waste incinerator box",
        href: "https://ncerc.ac.in/iedc/achivement-news6",
    },
    {
        number: "07",
        image: "https://ncerc.ac.in/images/dpt/iedc/achivement/7.jpg",
        title: "Young Entrepreneurs for starting your own Company",
        href: "https://ncerc.ac.in/iedc/achivement-news7",
    },
    {
        number: "08",
        image: "https://ncerc.ac.in/images/dpt/iedc/achivement/8.jpg",
        title: "Automatic Hand Sanitizer",
        href: "https://ncerc.ac.in/iedc/achivement-news8",
    },
    {
        number: "09",
        image: "https://ncerc.ac.in/images/dpt/iedc/achivement/9.jpg",
        title:
            "Team Shri Chakra received second place in AICTE Chattra Viswakarma Award by AICTE",
        href: "https://ncerc.ac.in/iedc/achivement-news9",
    },
    {
        number: "10",
        image: "https://ncerc.ac.in/images/dpt/iedc/achivement/10.jpg",
        title: "Second Position in AICTE - Chhatra Vishwakarama Awards 2020",
        href: "https://ncerc.ac.in/iedc/achivement-news10",
    },
    {
        number: "11",
        image: "https://ncerc.ac.in/images/dpt/iedc/achivement/11.jpg",
        title:
            "Kalpa Award (Best Researcher Award) From Bharat Education Excellence Awards",
        href: "https://ncerc.ac.in/iedc/achivement-news11",
    },
];

const page = () => {
    return (
        <>
            <SiteHeader />

            <main className="bg-[#faf7f2] text-[#1E1917]">
                {/* HERO */}
                <section className="relative overflow-hidden bg-[#20235A]">
                    <div className="absolute -right-28 -top-28 h-96 w-96 rounded-full border border-[#D2B87C]/15" />
                    <div className="absolute -right-4 top-20 h-64 w-64 rounded-full border border-[#D2B87C]/10" />
                    <div className="absolute -bottom-40 -left-24 h-80 w-80 rounded-full border border-white/10" />

                    <div className="relative mx-auto max-w-[1440px] px-6 pb-20 pt-24 sm:px-10 lg:px-16 lg:pb-24 lg:pt-32">
                        <div className="grid gap-14 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
                            <div>
                                <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#D2B87C]/30 bg-white/[0.04] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                    <Trophy className="h-3.5 w-3.5" />
                                    IEDC · Achievements
                                </div>

                                <h1 className="max-w-4xl font-serif text-5xl font-medium leading-[0.98] tracking-[-0.035em] text-white sm:text-6xl lg:text-7xl xl:text-[78px]">
                                    Ideas that made
                                    <span className="block text-[#D2B87C]">
                                        an impact.
                                    </span>
                                </h1>

                                <p className="mt-7 max-w-2xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
                                    A collection of student achievements,
                                    innovation milestones, patents,
                                    competitions and recognitions from the IEDC
                                    ecosystem at NCERC.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10">
                                <div className="bg-white/[0.04] p-6 sm:p-7">
                                    <p className="text-3xl font-medium text-white sm:text-4xl">
                                        11
                                    </p>
                                    <p className="mt-2 text-xs uppercase tracking-[0.15em] text-white/45">
                                        Student milestones
                                    </p>
                                </div>

                                <div className="bg-white/[0.04] p-6 sm:p-7">
                                    <p className="text-3xl font-medium text-white sm:text-4xl">
                                        11
                                    </p>
                                    <p className="mt-2 text-xs uppercase tracking-[0.15em] text-white/45">
                                        Recognitions
                                    </p>
                                </div>

                                <div className="col-span-2 bg-[#D2B87C] p-6 sm:p-7">
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#20235A]/60">
                                        Innovation through
                                    </p>
                                    <p className="mt-2 font-serif text-2xl text-[#20235A]">
                                        Competition · Research · Startups
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-white/10">
                        <div className="mx-auto max-w-[1440px] px-6 py-5 sm:px-10 lg:px-16">
                            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
                                <span>Student Achievements</span>
                                <span>Patents</span>
                                <span>Innovation Challenges</span>
                                <span>Recognition</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* -----navigation starts------ */}
                <Iedcnavigation />

                {/* STUDENT ACHIEVEMENTS INTRO */}
                <section className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
                    <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                Student Achievements
                            </p>

                            <h2 className="mt-4 font-serif text-4xl leading-[1.05] tracking-[-0.025em] text-[#20235A] sm:text-5xl">
                                Where student potential meets opportunity.
                            </h2>
                        </div>

                        <div>
                            <p className="text-lg leading-8 text-[#1E1917]/70 sm:text-xl sm:leading-9">
                                IEDC provides students with opportunities to
                                participate in innovation competitions,
                                entrepreneurship programmes, workshops,
                                incubation initiatives and startup activities.
                            </p>

                            <div className="mt-8 grid gap-4 sm:grid-cols-3">
                                <div className="rounded-2xl border border-[#1E1917]/10 bg-white p-5">
                                    <Rocket className="h-5 w-5 text-[#8F7746]" />
                                    <p className="mt-6 font-serif text-xl text-[#20235A]">
                                        Startups
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-[#1E1917]/10 bg-white p-5">
                                    <Lightbulb className="h-5 w-5 text-[#8F7746]" />
                                    <p className="mt-6 font-serif text-xl text-[#20235A]">
                                        Innovation
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-[#1E1917]/10 bg-white p-5">
                                    <Award className="h-5 w-5 text-[#8F7746]" />
                                    <p className="mt-6 font-serif text-xl text-[#20235A]">
                                        Recognition
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* STUDENT ACHIEVEMENT LIST */}
                <section className="border-y border-[#1E1917]/10 bg-white">
                    <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
                        <div className="mb-12 flex items-end justify-between gap-6">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                    Milestones
                                </p>

                                <h2 className="mt-4 font-serif text-4xl leading-tight text-[#20235A] sm:text-5xl">
                                    Student achievements
                                </h2>
                            </div>

                            <div className="hidden h-12 w-12 items-center justify-center rounded-full border border-[#20235A]/15 text-[#20235A] sm:flex">
                                <Medal className="h-5 w-5" />
                            </div>
                        </div>

                        <div className="grid gap-px overflow-hidden rounded-3xl border border-[#1E1917]/10 bg-[#1E1917]/10 lg:grid-cols-2">
                            {studentAchievements.map((achievement, index) => (
                                <article
                                    key={achievement.number}
                                    className={`group relative bg-white p-7 transition-colors duration-300 hover:bg-[#faf7f2] sm:p-9 ${index === 0
                                        ? "lg:row-span-2 lg:flex lg:flex-col lg:justify-between"
                                        : ""
                                        }`}
                                >
                                    <div>
                                        <div className="flex items-center justify-between gap-4">
                                            <span className="inline-flex h-9 min-w-9 items-center justify-center rounded-full bg-[#f2efe8] px-2 text-[10px] font-semibold tracking-[0.1em] text-[#8F7746]">
                                                {achievement.number}
                                            </span>

                                            <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#8F7746]">
                                                {achievement.category}
                                            </span>
                                        </div>

                                        <h3
                                            className={`mt-8 font-serif leading-tight text-[#20235A] ${index === 0
                                                ? "text-3xl sm:text-4xl"
                                                : "text-2xl"
                                                }`}
                                        >
                                            {achievement.title}
                                        </h3>

                                        <p className="mt-4 text-sm leading-7 text-[#1E1917]/60 sm:text-[15px]">
                                            {achievement.description}
                                        </p>
                                    </div>

                                    <div className="mt-7 h-px w-10 bg-[#D2B87C] transition-all duration-300 group-hover:w-20" />
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* PATENTS */}
                <section className="bg-[#f2efe8]">
                    <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
                        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-24">
                            <div>
                                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#20235A] text-[#D2B87C]">
                                    <ShieldCheck className="h-6 w-6" />
                                </div>

                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                    Intellectual Property
                                </p>

                                <h2 className="mt-4 font-serif text-4xl leading-[1.05] tracking-[-0.025em] text-[#20235A] sm:text-5xl">
                                    Patents that protect innovation.
                                </h2>

                                <p className="mt-6 max-w-xl text-base leading-8 text-[#1E1917]/60">
                                    Two student projects from the EEE
                                    Department were filed under Intellectual
                                    Property India.
                                </p>
                            </div>

                            <div className="space-y-4">
                                {patents.map((patent, index) => (
                                    <div
                                        key={patent}
                                        className="group flex items-center gap-5 rounded-3xl border border-[#1E1917]/10 bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D2B87C]"
                                    >
                                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#20235A] font-semibold text-[#D2B87C]">
                                            0{index + 1}
                                        </span>

                                        <div className="flex-1">
                                            <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#8F7746]">
                                                EEE Department
                                            </p>

                                            <h3 className="mt-1 font-serif text-xl leading-tight text-[#20235A] sm:text-2xl">
                                                {patent}
                                            </h3>
                                        </div>

                                        <FileBadge className="hidden h-5 w-5 text-[#8F7746] sm:block" />
                                    </div>
                                ))}

                                <div className="rounded-3xl bg-[#20235A] p-7 text-white sm:p-8">
                                    <div className="flex gap-5">
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#D2B87C] text-[#20235A]">
                                            <Sparkles className="h-5 w-5" />
                                        </div>

                                        <div>
                                            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D2B87C]">
                                                India Innovation Challenge
                                            </p>

                                            <p className="mt-3 text-sm leading-7 text-white/65">
                                                NCERC students participated in
                                                the India Innovation Challenge
                                                Contest conducted by DST, MHRD,
                                                MyGov and IIM Bangalore.
                                            </p>

                                            <p className="mt-4 font-serif text-2xl text-white">
                                                300+ students participated
                                            </p>

                                            <p className="mt-1 text-sm text-white/50">
                                                NCERC ranked among the top 200
                                                colleges in India.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* RECOGNITION GALLERY */}
                <section className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
                    <div className="mb-12 max-w-3xl">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                            Recognition & Highlights
                        </p>

                        <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-0.025em] text-[#20235A] sm:text-5xl">
                            Moments that document the journey.
                        </h2>

                        <p className="mt-5 text-base leading-8 text-[#1E1917]/60">
                            Selected recognitions, competitions, projects and
                            achievements from the IEDC journey at NCERC.
                        </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {recognitionItems.map((item, index) => (
                            <Link
                                key={item.number}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`group overflow-hidden rounded-3xl border border-[#1E1917]/10 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-[#D2B87C]/60 hover:shadow-[0_20px_50px_rgba(32,35,90,0.10)] ${index === 0
                                    ? "sm:col-span-2 lg:col-span-2"
                                    : ""
                                    }`}
                            >
                                <div
                                    className={`relative overflow-hidden bg-[#e8e4dc] ${index === 0
                                        ? "aspect-[16/9]"
                                        : "aspect-[4/3]"
                                        }`}
                                >
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        unoptimized
                                        sizes={
                                            index === 0
                                                ? "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 66vw"
                                                : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        }
                                        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                                    />

                                    <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#20235A]/90 text-[10px] font-semibold text-[#D2B87C] backdrop-blur-sm">
                                        {item.number}
                                    </div>

                                    <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#20235A] opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                                        <ExternalLink className="h-4 w-4" />
                                    </div>
                                </div>

                                <div className="p-6 sm:p-7">
                                    <div className="flex items-start justify-between gap-4">
                                        <h3 className="font-serif text-xl leading-tight text-[#20235A] sm:text-2xl">
                                            {item.title}
                                        </h3>

                                        <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-[#8F7746] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                    </div>

                                    <div className="mt-5 h-px w-10 bg-[#D2B87C] transition-all duration-300 group-hover:w-16" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* CLOSING */}
                <section className="border-t border-[#1E1917]/10 bg-white">
                    <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
                        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-center">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                    IEDC · NCERC
                                </p>

                                <h2 className="mt-3 font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl">
                                    Explore more of the IEDC ecosystem.
                                </h2>
                            </div>

                            <Link
                                 href="/student-support/iedc/startups"
                                className="group inline-flex w-fit items-center gap-3 rounded-full bg-[#20235A] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#171a48]"
                            >
                                Explore Startups
                                <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <FooterSection />
        </>
    );
};

export default page;