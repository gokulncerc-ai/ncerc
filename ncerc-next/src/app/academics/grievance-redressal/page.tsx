"use client";

import Link from "next/link";
import React, { FormEvent, useState } from "react";
import {
    ArrowUpRight,
    ShieldCheck,
    MessageSquareText,
    LockKeyhole,
    Users,
    FileText,
    CheckCircle2,
    HeartHandshake,
    Send,
    ChevronDown,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";

const Page = () => {

    const [isSubmitting, setIsSubmitting] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        course: "",
        role: "",
        grievance: "",
    });

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
    ) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setIsSubmitting(true);

        try {
            /*
             * Connect your backend/API here.
             *
             * Example:
             *
             * const response = await fetch("/api/grievance", {
             *     method: "POST",
             *     headers: {
             *         "Content-Type": "application/json",
             *     },
             *     body: JSON.stringify(formData),
             * });
             *
             * if (!response.ok) {
             *     throw new Error("Submission failed");
             * }
             */

            console.log("Grievance submitted:", formData);

            alert(
                "Your grievance has been submitted successfully."
            );

            setFormData({
                name: "",
                phone: "",
                email: "",
                course: "",
                role: "",
                grievance: "",
            });
        } catch (error) {
            console.error("Grievance submission error:", error);

            alert(
                "Something went wrong while submitting your grievance. Please try again."
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <SiteHeader />

            <main className="overflow-hidden bg-[#FAF7F2] text-[#1E1917]">

                {/* =====================================================
                    HERO
                ===================================================== */}

                <section className="relative overflow-hidden bg-[#20235A]">

                    {/* Decorative Background */}

                    <div className="pointer-events-none absolute inset-0">

                        <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full border border-[#D2B87C]/10" />

                        <div className="absolute -right-20 -top-20 h-[360px] w-[360px] rounded-full border border-[#D2B87C]/10" />

                        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#D2B87C]/10 blur-3xl" />

                        <div className="absolute right-[25%] top-[30%] h-32 w-32 rounded-full bg-[#D2B87C]/5 blur-3xl" />

                    </div>


                    <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-24 sm:px-8 lg:px-12 lg:pb-20 lg:pt-28">

                        <div className="grid gap-12 lg:grid-cols-[1fr_0.7fr] lg:items-end">

                            {/* Hero Content */}

                            <div>

                                <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#D2B87C]">

                                    <span className="h-px w-12 bg-[#D2B87C]" />

                                    Student Support

                                </div>


                                <h1 className="mt-7 max-w-4xl font-serif text-5xl leading-[1] tracking-tight text-white sm:text-6xl lg:text-8xl">

                                    Grievance

                                    <span className="block text-[#D2B87C]">
                                        Redressal Cell.
                                    </span>

                                </h1>


                                <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">

                                    A dedicated institutional mechanism for
                                    addressing genuine concerns and complaints
                                    from students, faculty and parents.

                                </p>

                            </div>


                            {/* Hero Side Panel */}

                            <div className="lg:pl-10">

                                <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm sm:p-9">

                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D2B87C] text-[#20235A]">

                                        <ShieldCheck className="h-7 w-7" />

                                    </div>


                                    <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">

                                        Institutional Support

                                    </p>


                                    <p className="mt-3 font-serif text-3xl leading-tight text-white">

                                        A responsible and confidential space for concerns.

                                    </p>


                                    <div className="mt-7 border-t border-white/10 pt-6">

                                        <div className="flex items-center gap-3">

                                            <LockKeyhole className="h-4 w-4 text-[#D2B87C]" />

                                            <span className="text-sm text-white/60">
                                                Complaints treated with sensitivity and confidentiality.
                                            </span>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    INTRODUCTION
                ===================================================== */}

                <section className="bg-[#FAF7F2]">

                    <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">

                        <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr]">

                            {/* Left */}

                            <div>

                                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8F7746]">

                                    Grievance Redressal

                                </p>


                                <h2 className="mt-4 max-w-xl font-serif text-4xl leading-tight text-[#20235A] sm:text-5xl lg:text-6xl">

                                    Your concerns deserve to be heard.

                                </h2>


                                <div className="mt-9 flex items-center gap-4">

                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#20235A] text-[#D2B87C]">

                                        <MessageSquareText className="h-6 w-6" />

                                    </div>


                                    <p className="max-w-[220px] text-sm leading-6 text-[#6B6257]">

                                        A formal channel for genuine problems
                                        and complaints within the NCERC community.

                                    </p>

                                </div>

                            </div>


                            {/* Right */}

                            <div className="max-w-3xl">

                                <p className="text-xl leading-9 text-[#1E1917]">

                                    The NCERC Grievance Redressal Cell attempts
                                    to address genuine problems and complaints
                                    of students, faculty and parents whatever
                                    be the nature of the problem.

                                </p>


                                <p className="mt-7 text-base leading-8 text-[#6B6257]">

                                    The cell provides an institutional mechanism
                                    through which concerns can be brought to the
                                    attention of the college and addressed through
                                    the appropriate process.

                                </p>


                                <div className="mt-9">

                                    <Link
                                        href="#submit-grievance"
                                        className="group inline-flex items-center gap-3 rounded-full bg-[#20235A] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#D2B87C] hover:text-[#20235A]"
                                    >

                                        Submit a Grievance

                                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />

                                    </Link>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    SUBMIT GRIEVANCE FORM
                ===================================================== */}

                <section
                    id="submit-grievance"
                    className="bg-white"
                >

                    <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">

                        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">

                            {/* LEFT INFORMATION PANEL */}

                            <div className="rounded-[2rem] bg-[#20235A] p-8 sm:p-10">

                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D2B87C] text-[#20235A]">

                                    <FileText className="h-6 w-6" />

                                </div>


                                <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">

                                    Grievance Submission

                                </p>


                                <h2 className="mt-4 font-serif text-4xl leading-tight text-white sm:text-5xl">

                                    Submit your concern.

                                </h2>


                                <p className="mt-6 text-base leading-8 text-white/60">

                                    Students, faculty and parents can use the
                                    grievance redressal mechanism to communicate
                                    genuine problems and concerns to the institution.

                                </p>


                                <div className="mt-8 space-y-4 border-t border-white/10 pt-7">

                                    <div className="flex items-start gap-3">

                                        <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#D2B87C]" />

                                        <p className="text-sm leading-6 text-white/60">
                                            Provide accurate and constructive information.
                                        </p>

                                    </div>


                                    <div className="flex items-start gap-3">

                                        <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#D2B87C]" />

                                        <p className="text-sm leading-6 text-white/60">
                                            Use the grievance mechanism responsibly.
                                        </p>

                                    </div>


                                    <div className="flex items-start gap-3">

                                        <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#D2B87C]" />

                                        <p className="text-sm leading-6 text-white/60">
                                            Genuine complaints will be treated with sensitivity.
                                        </p>

                                    </div>

                                </div>


                                {/* Confidentiality */}

                                <div className="mt-9 rounded-2xl border border-white/10 bg-white/[0.04] p-5">

                                    <div className="flex items-center gap-3">

                                        <LockKeyhole className="h-5 w-5 text-[#D2B87C]" />

                                        <p className="text-sm font-semibold text-white">
                                            Confidentiality
                                        </p>

                                    </div>

                                    <p className="mt-3 text-sm leading-6 text-white/60">

                                        Your grievance will be handled with
                                        sensitivity and confidentiality.

                                    </p>

                                </div>

                            </div>


                            {/* FORM */}

                            <div className="rounded-[2rem] border border-[#E3DED4] bg-[#FAF7F2] p-7 sm:p-10 lg:p-12">

                                <div className="mb-9">

                                    <div className="flex items-center gap-4">

                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#8F7746]">

                                            <MessageSquareText className="h-5 w-5" />

                                        </div>

                                        <div>

                                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6B6257]">

                                                Official Form

                                            </p>

                                            <p className="mt-1 text-sm font-medium text-[#1E1917]">

                                                Grievance Redressal Cell

                                            </p>

                                        </div>

                                    </div>


                                    <h3 className="mt-7 font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl">

                                        Tell us about your concern.

                                    </h3>


                                    <p className="mt-4 text-sm leading-7 text-[#6B6257]">

                                        Please provide the required information
                                        below so that your concern can be reviewed
                                        appropriately.

                                    </p>

                                </div>


                                <form
                                    onSubmit={handleSubmit}
                                    className="space-y-6"
                                >

                                    {/* NAME */}

                                    <div>

                                        <label
                                            htmlFor="name"
                                            className="mb-2 block text-sm font-semibold text-[#1E1917]"
                                        >
                                            Name
                                            <span className="ml-1 text-[#8F7746]">
                                                *
                                            </span>
                                        </label>

                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Enter your name"
                                            className="w-full rounded-xl border border-[#E3DED4] bg-white px-4 py-3.5 text-sm text-[#1E1917] outline-none transition placeholder:text-[#6B6257] focus:border-[#D2B87C] focus:ring-2 focus:ring-[#D2B87C]/10"
                                        />

                                    </div>


                                    {/* PHONE + EMAIL */}

                                    <div className="grid gap-6 md:grid-cols-2">

                                        <div>

                                            <label
                                                htmlFor="phone"
                                                className="mb-2 block text-sm font-semibold text-[#1E1917]"
                                            >
                                                Phone Number
                                                <span className="ml-1 text-[#8F7746]">
                                                    *
                                                </span>
                                            </label>

                                            <input
                                                id="phone"
                                                name="phone"
                                                type="tel"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                                placeholder="Enter phone number"
                                                pattern="[0-9+\-\s()]{7,20}"
                                                className="w-full rounded-xl border border-[#E3DED4] bg-white px-4 py-3.5 text-sm text-[#1E1917] outline-none transition placeholder:text-[#6B6257] focus:border-[#D2B87C] focus:ring-2 focus:ring-[#D2B87C]/10"
                                            />

                                        </div>


                                        <div>

                                            <label
                                                htmlFor="email"
                                                className="mb-2 block text-sm font-semibold text-[#1E1917]"
                                            >
                                                Email Address
                                                <span className="ml-1 text-[#8F7746]">
                                                    *
                                                </span>
                                            </label>

                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                placeholder="Enter email address"
                                                className="w-full rounded-xl border border-[#E3DED4] bg-white px-4 py-3.5 text-sm text-[#1E1917] outline-none transition placeholder:text-[#6B6257] focus:border-[#D2B87C] focus:ring-2 focus:ring-[#D2B87C]/10"
                                            />

                                        </div>

                                    </div>


                                    {/* COURSE + YOU ARE */}

                                    <div className="grid gap-6 md:grid-cols-2">

                                        <div>

                                            <label
                                                htmlFor="course"
                                                className="mb-2 block text-sm font-semibold text-[#1E1917]"
                                            >
                                                Course
                                                <span className="ml-1 text-[#8F7746]">
                                                    *
                                                </span>
                                            </label>

                                            <input
                                                id="course"
                                                name="course"
                                                type="text"
                                                value={formData.course}
                                                onChange={handleChange}
                                                required
                                                placeholder="Enter your course"
                                                className="w-full rounded-xl border border-[#E3DED4] bg-white px-4 py-3.5 text-sm text-[#1E1917] outline-none transition placeholder:text-[#6B6257] focus:border-[#D2B87C] focus:ring-2 focus:ring-[#D2B87C]/10"
                                            />

                                        </div>


                                        <div>

                                            <label
                                                htmlFor="role"
                                                className="mb-2 block text-sm font-semibold text-[#1E1917]"
                                            >
                                                You are?
                                                <span className="ml-1 text-[#8F7746]">
                                                    *
                                                </span>
                                            </label>

                                            <div className="relative">

                                                <select
                                                    id="role"
                                                    name="role"
                                                    value={formData.role}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full appearance-none rounded-xl border border-[#E3DED4] bg-white px-4 py-3.5 pr-11 text-sm text-[#1E1917] outline-none transition focus:border-[#D2B87C] focus:ring-2 focus:ring-[#D2B87C]/10"
                                                >

                                                    <option value="">
                                                        Select an option
                                                    </option>

                                                    <option value="student">
                                                        Student
                                                    </option>

                                                    <option value="staff">
                                                        Staff
                                                    </option>

                                                    <option value="parent">
                                                        Parent
                                                    </option>

                                                </select>


                                                <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6B6257]" />

                                            </div>

                                        </div>

                                    </div>


                                    {/* GRIEVANCE */}

                                    <div>

                                        <label
                                            htmlFor="grievance"
                                            className="mb-2 block text-sm font-semibold text-[#1E1917]"
                                        >
                                            Grievance / Concern
                                            <span className="ml-1 text-[#8F7746]">
                                                *
                                            </span>
                                        </label>

                                        <textarea
                                            id="grievance"
                                            name="grievance"
                                            value={formData.grievance}
                                            onChange={handleChange}
                                            required
                                            rows={6}
                                            placeholder="Please describe your grievance or concern..."
                                            className="w-full resize-none rounded-xl border border-[#E3DED4] bg-white px-4 py-3.5 text-sm leading-7 text-[#1E1917] outline-none transition placeholder:text-[#6B6257] focus:border-[#D2B87C] focus:ring-2 focus:ring-[#D2B87C]/10"
                                        />

                                    </div>


                                    {/* RESPONSIBILITY NOTE */}

                                    <div className="rounded-xl border border-[#D2B87C]/10 bg-[#D2B87C]/10 p-4">

                                        <div className="flex items-start gap-3">

                                            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#8F7746]" />

                                            <p className="text-xs leading-6 text-[#6B6257]">

                                                Please ensure that the information
                                                provided is genuine, accurate and
                                                constructive. Complaints are expected
                                                to be submitted responsibly.

                                            </p>

                                        </div>

                                    </div>


                                    {/* SUBMIT BUTTON */}

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#20235A] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#D2B87C] hover:text-[#20235A] disabled:cursor-not-allowed disabled:opacity-60"
                                    >

                                        {isSubmitting ? (
                                            <>
                                                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                                                Submitting...
                                            </>
                                        ) : (
                                            <>
                                                Submit Grievance
                                                <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                                            </>
                                        )}

                                    </button>

                                </form>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    NOTE / CONFIDENTIALITY
                ===================================================== */}

                <section className="bg-[#FAF7F2]">

                    <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">

                        <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:items-start">

                            {/* Left */}

                            <div>

                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#20235A] text-[#D2B87C]">

                                    <LockKeyhole className="h-6 w-6" />

                                </div>


                                <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-[#8F7746]">

                                    Important Note

                                </p>


                                <h2 className="mt-4 font-serif text-4xl leading-tight text-[#20235A] sm:text-5xl">

                                    Responsibility & confidentiality.

                                </h2>

                            </div>


                            {/* Right */}

                            <div className="max-w-4xl">

                                <div className="rounded-[2rem] border border-[#E3DED4] bg-white p-8 sm:p-10 lg:p-12">

                                    <p className="text-xl leading-9 text-[#1E1917]">

                                        Students are encouraged to use the
                                        suggestion boxes placed on different
                                        sections of the campus to express
                                        constructive suggestions and grievances.

                                    </p>


                                    <p className="mt-7 text-base leading-8 text-[#6B6257]">

                                        They are requested to note that making
                                        a complaint is serious and therefore
                                        they expect to utilize in a responsible
                                        manner.

                                    </p>


                                    <div className="my-8 h-px bg-[#E3DED4]" />


                                    <div className="flex items-start gap-4">

                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#D2B87C]/10 text-[#8F7746]">

                                            <ShieldCheck className="h-5 w-5" />

                                        </div>


                                        <p className="text-base leading-8 text-[#6B6257]">

                                            At the same time, the college assures
                                            students that once a complaint is made,
                                            it will be treated with sensitivity and
                                            confidentiality.

                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    SUPPORT STRIP
                ===================================================== */}

                <section className="bg-white">

                    <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">

                        <div className="grid gap-5 md:grid-cols-3">

                            {/* Students */}

                            <div className="rounded-3xl border border-[#E3DED4] bg-[#FAF7F2] p-7">

                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#8F7746]">

                                    <Users className="h-5 w-5" />

                                </div>


                                <h3 className="mt-6 font-serif text-2xl text-[#20235A]">

                                    Students

                                </h3>


                                <p className="mt-3 text-sm leading-7 text-[#6B6257]">

                                    Share genuine concerns and constructive
                                    suggestions through the designated channels.

                                </p>

                            </div>


                            {/* Faculty */}

                            <div className="rounded-3xl border border-[#E3DED4] bg-[#FAF7F2] p-7">

                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#8F7746]">

                                    <MessageSquareText className="h-5 w-5" />

                                </div>


                                <h3 className="mt-6 font-serif text-2xl text-[#20235A]">

                                    Faculty

                                </h3>


                                <p className="mt-3 text-sm leading-7 text-[#6B6257]">

                                    A formal mechanism for communicating
                                    genuine workplace-related concerns.

                                </p>

                            </div>


                            {/* Parents */}

                            <div className="rounded-3xl border border-[#E3DED4] bg-[#FAF7F2] p-7">

                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#8F7746]">

                                    <HeartHandshake className="h-5 w-5" />

                                </div>


                                <h3 className="mt-6 font-serif text-2xl text-[#20235A]">

                                    Parents

                                </h3>


                                <p className="mt-3 text-sm leading-7 text-[#6B6257]">

                                    An institutional channel for raising
                                    genuine concerns regarding the college.

                                </p>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    DARK CLOSING SECTION
                ===================================================== */}

                <section className="bg-[#20235A]">

                    <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">

                        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

                            <div>

                                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">

                                    NCERC Grievance Redressal Cell

                                </p>


                                <h2 className="mt-4 max-w-xl font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">

                                    Building a more responsive institutional community.

                                </h2>

                            </div>


                            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 sm:p-10">

                                <ShieldCheck className="h-7 w-7 text-[#D2B87C]" />


                                <p className="mt-6 text-base leading-8 text-white/60">

                                    NCERC encourages responsible communication
                                    of genuine concerns while assuring that
                                    complaints are treated with sensitivity
                                    and confidentiality.

                                </p>


                                <Link
                                    href="#submit-grievance"
                                    className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-[#D2B87C]"
                                >

                                    Submit a Grievance

                                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />

                                </Link>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    FOOTER
                ===================================================== */}

                <FooterSection />

            </main>

        </>
    );
};

export default Page;