"use client";

import React from "react";
import Link from "next/link";
import {
    ArrowUpRight,
    CheckCircle2,
    ChevronRight,
    MessageSquareHeart,
    Users,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";

const feedbackUrl =
    "https://docs.google.com/forms/u/0/d/13HMpw7aTkf-mzwk0wE1Up1SQH__o8xanzOnDBWalG8Q/viewform?ts=5e588f2b&edit_requested=true";

const page = () => {
    return (
        <>
            <SiteHeader />

            <main className="bg-[#faf7f2] text-[#1e1917]">
                {/* =========================================================
            HERO
        ========================================================= */}
                <section className="relative overflow-hidden bg-[#20235A]">
                    {/* Decorative elements */}
                    <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#D2B87C]/20" />
                    <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full border border-[#D2B87C]/15" />
                    <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full border border-white/10" />

                    <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
                        <div className="max-w-3xl">
                            <div className="mb-6 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#D2B87C]" />
                                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D2B87C]">
                                    Alumni Association
                                </span>
                            </div>

                            <h1 className="font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
                                Alumni Feedback
                            </h1>

                            <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                                Your experience, ideas and suggestions help NCERC strengthen
                                its alumni community and create better opportunities for
                                current and future students.
                            </p>

                            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-white/60">
                                <Link
                                    href="/alumni"
                                    className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-[#D2B87C]"
                                >
                                    Alumni
                                    <ChevronRight size={15} />
                                </Link>

                                <span className="text-white/30">Feedback</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================
            INTRODUCTION
        ========================================================= */}
                <section className="border-b border-black/5 bg-[#faf7f2]">
                    <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
                        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
                            {/* Left */}
                            <div>
                                <div className="mb-5 flex items-center gap-3">
                                    <span className="h-px w-8 bg-[#D2B87C]" />
                                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#20235A]/60">
                                        Stay Connected
                                    </span>
                                </div>

                                <h2 className="font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl">
                                    We value your
                                    <span className="block text-[#8d7540]">
                                        feedback and connection.
                                    </span>
                                </h2>
                            </div>

                            {/* Right */}
                            <div className="max-w-2xl">
                                <p className="text-base leading-8 text-slate-600">
                                    The NCERC Alumni Association works to maintain a strong
                                    relationship between the institution and its alumni. Your
                                    feedback gives us valuable insight into your experiences,
                                    expectations and suggestions.
                                </p>

                                <p className="mt-5 text-base leading-8 text-slate-600">
                                    Whether you are sharing your experience with NCERC,
                                    suggesting improvements, or providing ideas for alumni
                                    engagement, every response contributes to strengthening our
                                    alumni network.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================
            FEEDBACK CARD
        ========================================================= */}
                <section className="bg-white">
                    <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
                        <div className="overflow-hidden rounded-[2rem] border border-[#20235A]/10 bg-[#faf7f2] shadow-[0_20px_60px_rgba(32,35,90,0.08)]">
                            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
                                {/* Dark panel */}
                                <div className="relative overflow-hidden bg-[#20235A] p-8 sm:p-10 lg:p-12">
                                    <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full border border-[#D2B87C]/20" />
                                    <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full border border-white/10" />

                                    <div className="relative">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D2B87C]/30 bg-[#D2B87C]/10 text-[#D2B87C]">
                                            <MessageSquareHeart size={25} strokeWidth={1.6} />
                                        </div>

                                        <h3 className="mt-8 max-w-md font-serif text-3xl leading-tight text-white sm:text-4xl">
                                            Share your experience with NCERC.
                                        </h3>

                                        <p className="mt-5 max-w-lg text-sm leading-7 text-white/65 sm:text-base">
                                            We invite our alumni to share their valuable feedback
                                            with the institution. Your response helps us understand
                                            the alumni experience and identify areas for continued
                                            improvement.
                                        </p>

                                        <div className="mt-8 space-y-4">
                                            <div className="flex items-start gap-3">
                                                <CheckCircle2
                                                    size={18}
                                                    className="mt-0.5 shrink-0 text-[#D2B87C]"
                                                />
                                                <span className="text-sm leading-6 text-white/70">
                                                    Share your experience and suggestions
                                                </span>
                                            </div>

                                            <div className="flex items-start gap-3">
                                                <CheckCircle2
                                                    size={18}
                                                    className="mt-0.5 shrink-0 text-[#D2B87C]"
                                                />
                                                <span className="text-sm leading-6 text-white/70">
                                                    Help us strengthen alumni engagement
                                                </span>
                                            </div>

                                            <div className="flex items-start gap-3">
                                                <CheckCircle2
                                                    size={18}
                                                    className="mt-0.5 shrink-0 text-[#D2B87C]"
                                                />
                                                <span className="text-sm leading-6 text-white/70">
                                                    Contribute ideas for future initiatives
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Feedback action panel */}
                                <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#20235A] text-[#D2B87C]">
                                        <Users size={25} strokeWidth={1.6} />
                                    </div>

                                    <p className="mt-7 text-xs font-semibold uppercase tracking-[0.22em] text-[#20235A]/50">
                                        Alumni Feedback Form
                                    </p>

                                    <h3 className="mt-3 font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl">
                                        Tell us about your journey.
                                    </h3>

                                    <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
                                        Click below to access the official NCERC Alumni Feedback
                                        Form. The form will open securely in a new tab.
                                    </p>

                                    <div className="mt-8">
                                        <a
                                            href={feedbackUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group inline-flex items-center gap-3 rounded-full bg-[#20235A] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#151743]"
                                        >
                                            Open Alumni Feedback Form
                                            <ArrowUpRight
                                                size={18}
                                                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                            />
                                        </a>
                                    </div>

                                    <div className="mt-7 border-t border-black/10 pt-6">
                                        <p className="text-xs leading-6 text-slate-500">
                                            You will be redirected to Google Forms to complete and
                                            submit your feedback.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================
            ALUMNI CONNECTION STRIP
        ========================================================= */}
                <section className="bg-[#faf7f2]">
                    <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-12">
                        <div className="flex flex-col gap-6 border-y border-[#20235A]/10 py-8 md:flex-row md:items-center md:justify-between">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#20235A]/50">
                                    NCERC Alumni Association
                                </p>

                                <h3 className="mt-2 font-serif text-2xl text-[#20235A] sm:text-3xl">
                                    Stay connected with your alma mater.
                                </h3>
                            </div>

                            <Link
                                href="/alumni"
                                className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[#20235A]"
                            >
                                Explore Alumni Association
                                <ArrowUpRight
                                    size={17}
                                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* =========================================================
            CLOSING CTA
        ========================================================= */}
                <section className="bg-[#20235A]">
                    <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
                        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                            <div className="max-w-2xl">
                                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                    Your Voice Matters
                                </p>

                                <h2 className="mt-4 font-serif text-3xl leading-tight text-white sm:text-4xl">
                                    Help us build a stronger alumni community.
                                </h2>

                                <p className="mt-5 text-sm leading-7 text-white/60 sm:text-base">
                                    Your continued association, participation and feedback help
                                    strengthen the bond between NCERC and its alumni.
                                </p>
                            </div>

                            <a
                                href={feedbackUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full border border-[#D2B87C]/40 px-7 py-4 text-sm font-semibold text-[#D2B87C] transition-all duration-300 hover:bg-[#D2B87C] hover:text-[#20235A]"
                            >
                                Give Your Feedback
                                <ArrowUpRight
                                    size={18}
                                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                />
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <FooterSection />
        </>
    );
};

export default page;