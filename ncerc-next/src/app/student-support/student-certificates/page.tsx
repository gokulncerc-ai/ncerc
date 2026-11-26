"use client";

import React from "react";
import Link from "next/link";
import {
    ArrowUpRight,
    CheckCircle2,
    FileCheck2,
    FileText,
    GraduationCap,
    MoveUpRight,
} from "lucide-react";
import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";

const certificates = [
    {
        number: "01",
        title: "Applying Transfer Certificate (TC) / Conduct Certificate (CC)",
        shortTitle: "Transfer / Conduct Certificate",
        description:
            "Apply online for your Transfer Certificate and Conduct Certificate through the official student application form.",
        href: "https://forms.gle/e1Fk6gkEAe633RUp8",
        icon: FileCheck2,
    },
    {
        number: "02",
        title: "Applying Migration Certificate",
        shortTitle: "Migration Certificate",
        description:
            "Submit your application for a Migration Certificate through the designated online application form.",
        href: "https://forms.gle/2XMTmrHfgoZmqBDf6",
        icon: GraduationCap,
    },
    {
        number: "03",
        title: "Letter of Recommendation (LOR)",
        shortTitle: "Letter of Recommendation",
        description:
            "Use the official application form to request a Letter of Recommendation for your academic or professional requirements.",
        href: "https://forms.gle/TSoNduaoGz2TqkXq5",
        icon: FileText,
    },
    {
        number: "04",
        title: "Medium of Instructions (MOI)",
        shortTitle: "Medium of Instructions",
        description:
            "Apply for the Medium of Instructions certificate through the official online application form.",
        href: "https://forms.gle/7QfhW4tckKD5CM6p6",
        icon: CheckCircle2,
    },
];

const page = () => {
    return (
        <main className="min-h-screen bg-[#faf7f2] text-[#1E1917]">
            <SiteHeader />

            {/* HERO */}
            <section className="relative overflow-hidden bg-[#20235A]">
                <div className="absolute -right-24 -top-28 h-72 w-72 rounded-full border border-[#D2B87C]/20" />
                <div className="absolute -right-10 -top-14 h-44 w-44 rounded-full border border-[#D2B87C]/15" />
                <div className="absolute -bottom-32 -left-24 h-72 w-72 rounded-full border border-white/10" />

                <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
                    <div className="max-w-3xl">
                        <div className="mb-6 flex items-center gap-3">
                            <span className="h-px w-10 bg-[#D2B87C]" />
                            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D2B87C]">
                                Student Services
                            </span>
                        </div>

                        <h1 className="font-serif text-4xl leading-[1.05] text-white sm:text-5xl lg:text-6xl">
                            Student
                            <span className="block text-[#D2B87C]">
                                Certificates
                            </span>
                        </h1>

                        <p className="mt-6 max-w-2xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
                            Access the official online application forms for
                            certificates and academic documents required by
                            students and graduates of NCERC.
                        </p>
                    </div>

                    <div className="mt-12 flex flex-wrap gap-3">
                        <a
                            href="#certificates"
                            className="inline-flex items-center gap-2 rounded-full bg-[#D2B87C] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#20235A] transition hover:bg-white"
                        >
                            View Certificates
                            <ArrowUpRight size={14} />
                        </a>

                        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-[10px] font-medium uppercase tracking-[0.16em] text-white/70">
                            <FileCheck2 size={14} />
                            04 Online Applications
                        </div>
                    </div>
                </div>

                <div className="relative border-t border-white/10">
                    <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
                        <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/40">
                            NCERC • Student Services
                        </p>

                        <p className="text-[10px] text-white/50">
                            Official certificate application portal
                        </p>
                    </div>
                </div>
            </section>

            {/* INTRO */}
            <section className="bg-white">
                <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
                    <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
                        <div>
                            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-[#8F7746]">
                                Certificate Applications
                            </p>

                            <h2 className="max-w-xl font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                                Important documents,
                                <span className="block">
                                    made easier to request.
                                </span>
                            </h2>
                        </div>

                        <div className="max-w-2xl lg:ml-auto">
                            <p className="text-sm leading-7 text-[#1E1917]/65 sm:text-base sm:leading-8">
                                Students can select the required certificate
                                below and proceed directly to the corresponding
                                online application form. Each application opens
                                through the official form provided by NCERC.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CERTIFICATE LIST */}
            <section
                id="certificates"
                className="scroll-mt-20 bg-[#f2efe8]"
            >
                <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
                    <div className="mb-10 flex flex-col gap-4 border-b border-[#20235A]/10 pb-7 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#8F7746]">
                                Available Services
                            </p>

                            <h2 className="font-serif text-3xl text-[#20235A] sm:text-4xl">
                                Select a certificate
                            </h2>
                        </div>

                        <p className="max-w-sm text-sm leading-6 text-[#1E1917]/55">
                            Choose the document you require and continue to the
                            relevant application form.
                        </p>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2">
                        {certificates.map((certificate) => {
                            const Icon = certificate.icon;

                            return (
                                <article
                                    key={certificate.number}
                                    className="group relative overflow-hidden rounded-3xl border border-[#20235A]/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#D2B87C]/70 hover:shadow-[0_18px_45px_rgba(32,35,90,0.08)] sm:p-8"
                                >
                                    <div className="absolute right-0 top-0 h-28 w-28 translate-x-12 -translate-y-12 rounded-full border border-[#D2B87C]/20 transition duration-500 group-hover:scale-125" />

                                    <div className="relative">
                                        <div className="mb-8 flex items-start justify-between">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#20235A] text-[#D2B87C]">
                                                <Icon size={21} strokeWidth={1.7} />
                                            </div>

                                            <span className="font-serif text-3xl text-[#20235A]/10">
                                                {certificate.number}
                                            </span>
                                        </div>

                                        <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.2em] text-[#8F7746]">
                                            Certificate {certificate.number}
                                        </p>

                                        <h3 className="max-w-lg font-serif text-xl leading-snug text-[#20235A] sm:text-2xl">
                                            {certificate.title}
                                        </h3>

                                        <p className="mt-4 max-w-xl text-sm leading-7 text-[#1E1917]/60">
                                            {certificate.description}
                                        </p>

                                        <div className="mt-8 border-t border-[#20235A]/10 pt-5">
                                            <a
                                                href={certificate.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#20235A] transition group-hover:text-[#8F7746]"
                                            >
                                                Apply Now
                                                <ArrowUpRight
                                                    size={14}
                                                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* PROCESS / NOTE */}
            <section className="bg-white">
                <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
                    <div className="grid overflow-hidden rounded-3xl bg-[#20235A] lg:grid-cols-[1fr_1.4fr]">
                        <div className="relative overflow-hidden p-7 sm:p-10 lg:p-12">
                            <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full border border-[#D2B87C]/20" />
                            <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full border border-white/10" />

                            <div className="relative">
                                <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#D2B87C]/30 text-[#D2B87C]">
                                    <FileCheck2 size={20} />
                                </div>

                                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.24em] text-[#D2B87C]">
                                    How to Apply
                                </p>

                                <h2 className="font-serif text-3xl leading-tight text-white sm:text-4xl">
                                    Choose.
                                    <br />
                                    Apply.
                                    <br />
                                    Complete.
                                </h2>
                            </div>
                        </div>

                        <div className="border-t border-white/10 p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
                            <div className="space-y-7">
                                <div className="flex gap-4">
                                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#D2B87C] font-serif text-sm text-[#20235A]">
                                        01
                                    </span>

                                    <div>
                                        <h3 className="font-serif text-xl text-white">
                                            Select your document
                                        </h3>
                                        <p className="mt-2 text-sm leading-6 text-white/60">
                                            Identify the certificate or letter
                                            you need from the available
                                            services.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#D2B87C] font-serif text-sm text-[#20235A]">
                                        02
                                    </span>

                                    <div>
                                        <h3 className="font-serif text-xl text-white">
                                            Open the application form
                                        </h3>
                                        <p className="mt-2 text-sm leading-6 text-white/60">
                                            Click the application button to
                                            open the corresponding online
                                            form.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#D2B87C] font-serif text-sm text-[#20235A]">
                                        03
                                    </span>

                                    <div>
                                        <h3 className="font-serif text-xl text-white">
                                            Submit your details
                                        </h3>
                                        <p className="mt-2 text-sm leading-6 text-white/60">
                                            Complete the requested information
                                            and submit the form as instructed.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* QUICK ACCESS */}
            <section className="border-t border-[#20235A]/10 bg-[#faf7f2]">
                <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12">
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#8F7746]">
                                Student Portal
                            </p>

                            <h3 className="mt-2 font-serif text-2xl text-[#20235A]">
                                Access your required certificate application.
                            </h3>
                        </div>

                        <Link
                            href="#certificates"
                            className="inline-flex w-fit items-center gap-2 rounded-full border border-[#20235A]/15 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#20235A] transition hover:border-[#20235A] hover:bg-[#20235A] hover:text-white"
                        >
                            View Applications
                            <MoveUpRight size={14} />
                        </Link>
                    </div>
                </div>
            </section>

            <FooterSection />
        </main>
    );
};

export default page;