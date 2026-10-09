import Link from "next/link";
import {
    ArrowUpRight,
    Award,
    BadgeCheck,
    ExternalLink,
    FileCheck2,
    ShieldCheck,
    Star,
    Trophy,
} from "lucide-react";
import SiteHeader from '@/components/header/SiteHeader';
import FooterSection from '@/components/home/FooterSection';
import React from 'react';

const certifications = [
    {
        id: "01",
        title: "Audit Certificate",
        description:
            "Official audit certification documenting institutional compliance and quality standards.",
        href: "https://ncerc.ac.in/downloads/certification/Audit%20Certificate.pdf",
        icon: FileCheck2,
        category: "Institutional Certification",
    },
    {
        id: "02",
        title: "Quality Profile",
        description:
            "Institutional quality profile highlighting academic standards, facilities and quality practices.",
        href: "https://ncerc.ac.in/downloads/certification/QUALITY%20PROFILE-NAAC.pdf",
        icon: ShieldCheck,
        category: "Quality Assurance",
    },
    {
        id: "03",
        title: "NAAC Certificate",
        description:
            "National Assessment and Accreditation Council certification recognising institutional quality standards.",
        href: "https://ncerc.ac.in/downloads/certification/CERTIFICATE_NAAC%20'A'.pdf",
        icon: Award,
        category: "Accreditation",
    },
    {
        id: "04",
        title: "NCERC-ISO 9001 2015 Certificate",
        description:
            "ISO 9001:2015 certification representing the institution's commitment to quality management systems.",
        href: "https://ncerc.ac.in/downloads/certification/ISO%20CERTIFICATE_2025-NCERC.pdf",
        icon: BadgeCheck,
        category: "ISO Certification",
    },
    {
        id: "05",
        title: "Eat Right Campus",
        description:
            "Certification recognising initiatives supporting a healthy, safe and responsible campus food environment.",
        href: "https://ncerc.ac.in/downloads/certification/EAT%20RIGHT%20CAMPUS.pdf",
        icon: Star,
        category: "Campus Recognition",
    },
    {
        id: "06",
        title: "KIRF Ranking 2025",
        description:
            "Kerala Institutional Ranking Framework recognition and ranking documentation for 2025.",
        href: "https://ncerc.ac.in/downloads/certification/KIRF%202025.pdf",
        icon: Trophy,
        category: "Ranking",
    },
    {
        id: "07",
        title: "NBA Accreditation",
        description:
            "National Board of Accreditation documentation covering accredited academic programmes.",
        href: "https://ncerc.ac.in/downloads/certification/NBA%20ACCREDITATION%20STATUS.pdf",
        icon: Award,
        category: "Accreditation",
    },
];

const page = () => {
    return (
        <>
            <SiteHeader />

            <main className="overflow-hidden bg-[#FAF7F2] text-[#1E1917]">

                {/* =====================================================
                    HERO
                ===================================================== */}
                <section className="relative bg-[#20235A]">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full border border-[#D2B87C]/10" />

                        <div className="absolute -right-20 -top-20 h-[360px] w-[360px] rounded-full border border-[#D2B87C]/10" />

                        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#D2B87C]/10 blur-3xl" />

                        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D2B87C]/[0.03] blur-3xl" />
                    </div>

                    <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-24 sm:px-8 lg:px-12 lg:pb-20 lg:pt-28">

                        <div className="grid gap-12 lg:grid-cols-[1fr_0.7fr] lg:items-end">

                            {/* Hero Content */}
                            <div>

                                <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#D2B87C]">
                                    <span className="h-px w-12 bg-[#D2B87C]" />
                                    Recognition & Excellence
                                </div>

                                <h1 className="mt-7 max-w-4xl font-serif text-5xl leading-[1] tracking-tight text-white sm:text-6xl lg:text-8xl">
                                    Certifications
                                    <span className="block text-[#D2B87C]">
                                        & Accreditations.
                                    </span>
                                </h1>

                                <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                                    Explore the certifications, accreditations and
                                    recognitions that reflect NCERC's commitment to
                                    quality, academic excellence and continuous
                                    institutional development.
                                </p>

                            </div>


                            {/* Hero Side Panel */}
                            <div className="lg:pl-10">

                                <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm sm:p-9">

                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D2B87C] text-[#20235A]">
                                        <Award className="h-7 w-7" />
                                    </div>

                                    <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                                        Institutional Recognition
                                    </p>

                                    <p className="mt-3 font-serif text-3xl leading-tight text-white">
                                        A commitment to recognised standards.
                                    </p>

                                    <div className="mt-7 border-t border-white/10 pt-6">
                                        <p className="text-sm leading-7 text-white/60">
                                            Certifications and accreditations that
                                            document the institution's academic,
                                            administrative and quality initiatives.
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>
                </section>


                {/* =====================================================
                    INTRODUCTION
                ===================================================== */}
                <section className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">

                    <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">

                        {/* Left */}
                        <div>

                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                Quality & Excellence
                            </p>

                            <h2 className="mt-5 max-w-lg font-serif text-4xl leading-tight text-[#20235A] sm:text-5xl lg:text-6xl">
                                Recognising a culture of quality.
                            </h2>

                            <div className="mt-8 flex items-center gap-4">

                                <span className="font-serif text-6xl text-[#D2B87C]">
                                    07
                                </span>

                                <div className="h-12 w-px bg-[#E3DED4]" />

                                <p className="max-w-[180px] text-sm leading-6 text-[#6B6257]">
                                    Certifications, accreditations and institutional
                                    recognitions
                                </p>

                            </div>

                        </div>


                        {/* Right */}
                        <div className="max-w-3xl">

                            <p className="text-xl leading-9 text-[#1E1917]">
                                NCERC's certifications and accreditations represent
                                its continued efforts towards maintaining recognised
                                standards in education, administration, quality
                                management and campus development.
                            </p>

                            <p className="mt-7 text-base leading-8 text-[#6B6257]">
                                The collection includes institutional certifications,
                                accreditation documents, quality profiles and
                                recognitions associated with the academic and
                                operational practices of the institution.
                            </p>

                            <div className="mt-9 flex flex-wrap gap-3">

                                {[
                                    "Accreditation",
                                    "Quality Assurance",
                                    "ISO",
                                    "Institutional Recognition",
                                    "Ranking",
                                    "Campus Initiatives",
                                ].map((item) => (
                                    <span
                                        key={item}
                                        className="rounded-full border border-[#E3DED4] bg-white px-4 py-2 text-sm font-medium text-[#6B6257]"
                                    >
                                        {item}
                                    </span>
                                ))}

                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    CERTIFICATION GRID
                ===================================================== */}
                <section className="bg-[#20235A]">

                    <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-28">

                        <div className="max-w-3xl">

                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                Official Documents
                            </p>

                            <h2 className="mt-4 font-serif text-4xl leading-tight text-white sm:text-5xl">
                                Certifications & recognitions.
                            </h2>

                            <p className="mt-5 text-base leading-8 text-white/60">
                                Access the official certification and accreditation
                                documents provided by NCERC.
                            </p>

                        </div>


                        {/* Cards */}
                        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

                            {certifications.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={item.id}
                                        className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#D2B87C]/30 hover:bg-white/[0.07] sm:p-8"
                                    >

                                        {/* Background decoration */}
                                        <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#D2B87C]/[0.04] blur-2xl transition duration-500 group-hover:bg-[#D2B87C]/[0.08]" />

                                        <div className="relative">

                                            {/* Top */}
                                            <div className="flex items-start justify-between">

                                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D2B87C] text-[#20235A]">
                                                    <Icon className="h-6 w-6" />
                                                </div>

                                                <span className="font-serif text-sm text-white/40">
                                                    {item.id}
                                                </span>

                                            </div>


                                            {/* Category */}
                                            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-[#D2B87C]">
                                                {item.category}
                                            </p>


                                            {/* Title */}
                                            <h3 className="mt-3 min-h-[64px] font-serif text-2xl leading-tight text-white">
                                                {item.title}
                                            </h3>


                                            {/* Description */}
                                            <p className="mt-4 min-h-[96px] text-sm leading-7 text-white/60">
                                                {item.description}
                                            </p>


                                            {/* Button */}
                                            <div className="mt-8 border-t border-white/10 pt-6">

                                                <Link
                                                    href={item.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-[#D2B87C]"
                                                >
                                                    View Certificate

                                                    <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                                </Link>

                                            </div>

                                        </div>

                                    </div>
                                );
                            })}

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    FEATURED ACCREDITATIONS
                ===================================================== */}
<section className="bg-white">
    <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-28">

        {/* Section Heading */}
        <div className="mb-12 max-w-3xl">
            <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#D2B87C]" />
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746] sm:text-sm">
                    Institutional Standards
                </p>
            </div>

            <h2 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-tight text-[#20235A] sm:text-5xl lg:text-6xl">
                Accreditations &amp;{" "}
                <span className="text-[#8F7746]">Certifications</span>
            </h2>

            <div className="mt-6 h-px w-20 bg-[#D2B87C]" />

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#6B6257] sm:text-lg">
                Explore NCERC&apos;s institutional accreditation and quality
                management certifications. Access the official documents
                below for details about their scope and validity.
            </p>
        </div>

        {/* Certificate Cards */}
        <div className="grid gap-5 md:grid-cols-2">

            {/* NAAC */}
            <div className="relative overflow-hidden rounded-3xl bg-[#20235A] p-8 sm:p-10">
                <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-[#D2B87C]/10 blur-3xl" />

                <div className="relative">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D2B87C] text-[#20235A]">
                        <Award className="h-6 w-6" />
                    </div>

                    <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                        Accreditation
                    </p>

                    <h3 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
                        NAAC Certificate
                    </h3>

                    <p className="mt-5 text-sm leading-7 text-white/70">
                        Access the official NAAC certificate as part of
                        NCERC&apos;s institutional accreditation documentation.
                        Refer to the certificate for the applicable details.
                    </p>

                    <Link
                        href="https://ncerc.ac.in/downloads/certification/CERTIFICATE_NAAC%20'A'.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#D2B87C] px-5 py-3 text-sm font-semibold text-[#20235A] transition-colors duration-200 hover:bg-[#C4A96F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D2B87C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#20235A]"
                    >
                        View Certificate
                        <ArrowUpRight className="h-4 w-4" />
                    </Link>
                </div>
            </div>

            {/* ISO */}
            <div className="rounded-3xl border border-[#E3DED4] bg-[#FAF7F2] p-8 sm:p-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#20235A] text-[#D2B87C]">
                    <BadgeCheck className="h-6 w-6" />
                </div>

                <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                    Quality Management
                </p>

                <h3 className="mt-3 font-display text-3xl font-semibold text-[#20235A] sm:text-4xl">
                    ISO 9001:2015
                </h3>

                <p className="mt-5 text-sm leading-7 text-[#6B6257]">
                    Review the ISO 9001:2015 certificate for information about
                    NCERC&apos;s quality management certification, its scope,
                    and the validity stated in the official document.
                </p>

                <Link
                    href="https://ncerc.ac.in/downloads/certification/ISO%20CERTIFICATE_2025-NCERC.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#E3DED4] bg-white px-5 py-3 text-sm font-semibold text-[#20235A] transition-colors duration-200 hover:border-[#D2B87C] hover:text-[#8F7746] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D2B87C] focus-visible:ring-offset-2"
                >
                    View Certificate
                    <ArrowUpRight className="h-4 w-4" />
                </Link>
            </div>

        </div>
    </div>
</section>


                {/* =====================================================
                    SUMMARY
                ===================================================== */}
                <section className="bg-[#FAF7F2]">

                    <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-28">

                        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">

                            <div>

                                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                    Institutional Milestones
                                </p>

                                <h2 className="mt-4 font-serif text-4xl leading-tight text-[#20235A] sm:text-5xl">
                                    Standards that support continuous growth.
                                </h2>

                            </div>

                            <p className="max-w-xl text-base leading-8 text-[#6B6257]">
                                Certifications and recognitions provide documented
                                milestones in the institution's continuing journey
                                towards quality education, academic development and
                                responsible campus practices.
                            </p>

                        </div>


                        {/* Stats */}
                        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

                            {[
                                {
                                    value: "07",
                                    label: "Documents",
                                    icon: FileCheck2,
                                },
                                {
                                    value: "02",
                                    label: "Accreditation Areas",
                                    icon: Award,
                                },
                                {
                                    value: "01",
                                    label: "ISO Standard",
                                    icon: BadgeCheck,
                                },
                                {
                                    value: "01",
                                    label: "2025 Ranking",
                                    icon: Trophy,
                                },
                            ].map((item) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={item.label}
                                        className="rounded-3xl border border-[#E3DED4] bg-white p-7"
                                    >

                                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F2EFE8] text-[#8F7746]">
                                            <Icon className="h-5 w-5" />
                                        </div>

                                        <p className="mt-8 font-serif text-4xl text-[#20235A]">
                                            {item.value}
                                        </p>

                                        <p className="mt-2 text-sm text-[#6B6257]">
                                            {item.label}
                                        </p>

                                    </div>
                                );
                            })}

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    DOCUMENT ACCESS CTA
                ===================================================== */}
                <section className="bg-[#20235A]">

                    <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">

                        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

                            <div>

                                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                    Official Documentation
                                </p>

                                <h2 className="mt-4 max-w-2xl font-serif text-3xl leading-tight text-white sm:text-4xl">
                                    Explore the complete certification records.
                                </h2>

                                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/60">
                                    Select any certification above to view its official
                                    document in PDF format.
                                </p>

                            </div>


                            <div className="flex shrink-0 items-center gap-3">

                                <Link
                                    href="#certifications"
                                    className="inline-flex items-center gap-2 rounded-full bg-[#D2B87C] px-6 py-3 text-sm font-semibold text-[#20235A] transition hover:bg-[#C4A96F]"
                                >
                                    Explore Documents
                                    <ArrowUpRight className="h-4 w-4" />
                                </Link>

                            </div>

                        </div>

                    </div>

                </section>

            </main>


            <FooterSection />

        </>
    )
}

export default page