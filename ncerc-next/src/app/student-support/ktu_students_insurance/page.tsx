"use client";

import React from "react";
import Link from "next/link";
import {
    ArrowUpRight,
    ChevronRight,
    CircleAlert,
    FileText,
    HeartPulse,
    ShieldCheck,
    Users,
    WalletCards,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";

const insuranceBenefits = [
    {
        number: "01",
        icon: HeartPulse,
        title: "Illness",
        amount: "₹25,000",
        description: "Reimbursement up to ₹25,000 per academic year.",
    },
    {
        number: "02",
        icon: ShieldCheck,
        title: "Accident",
        amount: "₹1,00,000",
        description:
            "Insurance claim up to ₹1,00,000 (One Lakh) per academic year.",
    },
    {
        number: "03",
        icon: Users,
        title: "Student Death Benefit",
        amount: "₹5,00,000",
        description: "Student death benefit of ₹5,00,000 (Five Lakhs).",
    },
    {
        number: "04",
        icon: WalletCards,
        title: "Parent Accident Benefit",
        amount: "₹5,00,000",
        description:
            "Death of Parent(s) due to Accident, as applicable under the current scheme.",
    },
];

const claimSteps = [
    {
        number: "01",
        title: "Report Immediately",
        text: "If any student meets with an accident or is hospitalized due to an illness, the matter should be reported immediately.",
    },
    {
        number: "02",
        title: "Complete the Claim Procedure",
        text: "The concerned department should advise the student to complete the necessary claim procedures through the KTU Portal without delay.",
    },
    {
        number: "03",
        title: "Inform the Concerned Authority",
        text: "The concerned authority should be informed so that the claim process can be monitored and facilitated.",
    },
];

const documents = [
    {
        title: "KTU User Guide",
        description:
            "User manual explaining the Suraksha claim procedure for students.",
        href: "https://ncerc.ac.in/documents/KTU%20Student%20Insurance/KTU%20User%20Manual%20Suraksha%20Claim%20for%20student%20v1.06082026.pdf",
    },
    {
        title: "Circular",
        description:
            "Official circular related to the KTU Student Insurance scheme.",
        href: "https://ncerc.ac.in/documents/KTU%20Student%20Insurance/Circular%20-%20KTU-SO_IN_CHARGE%28STUDENT_AFFAIRS%29-2583-2024.pdf",
    },
];

const Page = () => {
    return (
        <> <main className="min-h-screen bg-[#faf7f2] text-[#1E1917]"> <SiteHeader />

            ```
            {/* =========================================================
                HERO
            ========================================================= */}
            <section className="relative overflow-hidden bg-[#20235A]">
                {/* Decorative circles */}
                <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full border border-[#D2B87C]/15" />
                <div className="pointer-events-none absolute -right-20 -top-20 h-[360px] w-[360px] rounded-full border border-[#D2B87C]/10" />
                <div className="pointer-events-none absolute -bottom-48 -left-48 h-[500px] w-[500px] rounded-full border border-white/5" />

                <div className="relative mx-auto max-w-8xl px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
                    <div className="grid items-end gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
                        <div>
                            <div className="mb-7 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#D2B87C]" />

                                <span className="text-xs font-medium uppercase tracking-[0.28em] text-[#D2B87C]">
                                    Student Welfare • Protection • Support
                                </span>
                            </div>

                            <h1 className="max-w-4xl font-serif text-4xl leading-[1.08] text-white sm:text-5xl lg:text-6xl">
                                KTU Student
                                <span className="block text-[#D2B87C]">
                                    Insurance
                                </span>
                            </h1>

                            <p className="mt-7 max-w-2xl text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
                                KTU Suraksha Scheme and the procedure for claiming
                                insurance benefits for students.
                            </p>

                            <div className="mt-9 flex flex-wrap items-center gap-4">
                                <a
                                    href="#benefits"
                                    className="inline-flex items-center gap-2 rounded-full bg-[#D2B87C] px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#20235A] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#D2B87C]/10"
                                >
                                    View Benefits
                                    <ArrowUpRight
                                        size={15}
                                        strokeWidth={1.8}
                                    />
                                </a>

                                <a
                                    href="#documents"
                                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-xs font-medium uppercase tracking-[0.16em] text-white/80 transition-all duration-300 hover:border-[#D2B87C]/50 hover:text-[#D2B87C]"
                                >
                                    Claim Documents
                                    <ChevronRight
                                        size={15}
                                        strokeWidth={1.8}
                                    />
                                </a>
                            </div>
                        </div>

                        {/* Hero information card */}
                        <div className="relative">
                            <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-7 backdrop-blur-sm sm:p-8">
                                <div className="flex items-start justify-between gap-6">
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                            KTU Suraksha Scheme
                                        </p>

                                        <h2 className="mt-4 max-w-sm font-serif text-2xl leading-tight text-white sm:text-3xl">
                                            Student protection through
                                            structured insurance support.
                                        </h2>
                                    </div>

                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#D2B87C]/30 bg-[#D2B87C]/10">
                                        <ShieldCheck
                                            size={22}
                                            strokeWidth={1.5}
                                            className="text-[#D2B87C]"
                                        />
                                    </div>
                                </div>

                                <div className="mt-8 border-t border-white/10 pt-5">
                                    <p className="text-xs leading-6 text-white/50">
                                        Students are advised to report accidents
                                        or hospitalization immediately and
                                        complete the necessary claim procedure
                                        without delay.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10">
                    <div className="mx-auto flex max-w-8xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
                        <span className="text-[10px] uppercase tracking-[0.24em] text-white/40">
                            Nehru College of Engineering and Research Centre
                        </span>

                        <span className="text-[10px] uppercase tracking-[0.24em] text-[#D2B87C]/70">
                            Student Insurance
                        </span>
                    </div>
                </div>
            </section>

            {/* =========================================================
                INTRODUCTION
            ========================================================= */}
            <section className="bg-[#faf7f2]">
                <div className="mx-auto max-w-8xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
                    <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
                        <div>
                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-px w-9 bg-[#D2B87C]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#20235A]/60">
                                    Student Support
                                </span>
                            </div>

                            <h2 className="max-w-md font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl">
                                Support when
                                <span className="block text-[#20235A]/55">
                                    students need it most.
                                </span>
                            </h2>

                            <div className="mt-8 flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D2B87C]/50 bg-white">
                                    <CircleAlert
                                        size={21}
                                        strokeWidth={1.5}
                                        className="text-[#20235A]"
                                    />
                                </div>

                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#20235A]">
                                        Important
                                    </p>

                                    <p className="mt-1 text-xs text-slate-500">
                                        Report without delay
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="border-l border-[#20235A]/10 pl-0 lg:pl-12">
                            <p className="text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
                                If any student meets with an accident or is
                                hospitalized due to an illness, kindly ensure
                                that the matter is reported immediately. The
                                concerned department should advise the student
                                to complete the necessary claim procedures
                                through the KTU Portal without delay and inform
                                the undersigned so that the claim process can
                                be monitored and facilitated.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
                BENEFITS
            ========================================================= */}
            <section
                id="benefits"
                className="border-y border-[#20235A]/10 bg-white"
            >
                <div className="mx-auto max-w-8xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
                    <div className="max-w-3xl">
                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-px w-9 bg-[#D2B87C]" />

                            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#20235A]/60">
                                Coverage
                            </span>
                        </div>

                        <h2 className="font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                            Insurance benefits under
                            <span className="block text-[#20235A]/55">
                                KTU Suraksha Scheme
                            </span>
                        </h2>

                        <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                            The insurance benefits available under the KTU
                            Suraksha Scheme are as follows.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-[#20235A]/10 bg-[#20235A]/10 sm:grid-cols-2 lg:grid-cols-4">
                        {insuranceBenefits.map((benefit) => {
                            const Icon = benefit.icon;

                            return (
                                <div
                                    key={benefit.number}
                                    className="group bg-white p-7 transition-colors duration-300 hover:bg-[#faf7f2] sm:p-8"
                                >
                                    <div className="flex items-start justify-between">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D2B87C]/40 bg-[#faf7f2]">
                                            <Icon
                                                size={19}
                                                strokeWidth={1.5}
                                                className="text-[#20235A]"
                                            />
                                        </div>

                                        <span className="font-serif text-2xl text-[#20235A]/15">
                                            {benefit.number}
                                        </span>
                                    </div>

                                    <p className="mt-7 text-xs font-semibold uppercase tracking-[0.16em] text-[#20235A]/60">
                                        {benefit.title}
                                    </p>

                                    <h3 className="mt-3 font-serif text-3xl text-[#20235A]">
                                        {benefit.amount}
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-slate-500">
                                        {benefit.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* =========================================================
                CLAIM PROCEDURE
            ========================================================= */}
            <section className="bg-[#faf7f2]">
                <div className="mx-auto max-w-8xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
                    <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
                        <div className="lg:sticky lg:top-28 lg:self-start">
                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-px w-9 bg-[#D2B87C]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#20235A]/60">
                                    Claim Procedure
                                </span>
                            </div>

                            <h2 className="font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl">
                                A clear process for
                                <span className="block text-[#20235A]/55">
                                    claiming benefits.
                                </span>
                            </h2>

                            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-500">
                                Further details regarding the scheme and claim
                                procedure are provided through the official
                                KTU documents.
                            </p>

                            <div className="mt-8 hidden h-px w-24 bg-[#D2B87C] lg:block" />
                        </div>

                        <div>
                            <div className="divide-y divide-[#20235A]/10 border-y border-[#20235A]/10">
                                {claimSteps.map((step) => (
                                    <div
                                        key={step.number}
                                        className="group grid gap-5 py-7 sm:grid-cols-[54px_1fr] sm:gap-7"
                                    >
                                        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D2B87C]/50 text-xs font-semibold text-[#20235A] transition-all duration-300 group-hover:bg-[#20235A] group-hover:text-white">
                                            {step.number}
                                        </span>

                                        <div>
                                            <h3 className="font-serif text-xl text-[#20235A] sm:text-2xl">
                                                {step.title}
                                            </h3>

                                            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-[15px]">
                                                {step.text}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
                DOCUMENTS
            ========================================================= */}
            <section
                id="documents"
                className="bg-[#20235A]"
            >
                <div className="mx-auto max-w-8xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
                    <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-20">
                        <div>
                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-px w-9 bg-[#D2B87C]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                                    Official Documents
                                </span>
                            </div>

                            <h2 className="font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
                                Scheme details &
                                <span className="block text-white/55">
                                    claim resources
                                </span>
                            </h2>

                            <p className="mt-5 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
                                Access the official documents for further
                                information about the KTU Suraksha Scheme
                                and the student insurance claim procedure.
                            </p>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            {documents.map((document, index) => (
                                <a
                                    key={document.title}
                                    href={document.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D2B87C]/50 hover:bg-white/[0.07]"
                                >
                                    <div className="flex items-start justify-between gap-5">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D2B87C]/30 bg-[#D2B87C]/10">
                                            <FileText
                                                size={19}
                                                strokeWidth={1.5}
                                                className="text-[#D2B87C]"
                                            />
                                        </div>

                                        <span className="font-serif text-2xl text-white/15">
                                            0{index + 1}
                                        </span>
                                    </div>

                                    <h3 className="mt-7 font-serif text-2xl text-white">
                                        {document.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-white/50">
                                        {document.description}
                                    </p>

                                    <div className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#D2B87C]">
                                        Open Document
                                        <ArrowUpRight
                                            size={15}
                                            strokeWidth={1.8}
                                            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                        />
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
                CLOSING
            ========================================================= */}
            <section className="bg-[#faf7f2]">
                <div className="mx-auto max-w-8xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
                    <div className="rounded-3xl bg-[#20235A] px-7 py-12 sm:px-10 sm:py-14 lg:px-16">
                        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
                            <div>
                                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                                    Student Welfare
                                </span>

                                <h2 className="mt-4 max-w-2xl font-serif text-3xl leading-tight text-white sm:text-4xl">
                                    Stay informed about your insurance
                                    benefits.
                                </h2>

                                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/55">
                                    Students and concerned departments are
                                    encouraged to follow the prescribed
                                    procedure and refer to the official
                                    documents for complete details.
                                </p>
                            </div>

                            <Link
                                href="#documents"
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D2B87C] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#20235A] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#D2B87C]/10"
                            >
                                View Documents
                                <ArrowUpRight
                                    size={15}
                                    strokeWidth={1.8}
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <FooterSection />
        </main>
        </>
    );

};

export default Page;
