import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    Download,
    Facebook,
    Instagram,
    Mail,
    MapPin,
    Phone,
    Youtube,
} from "lucide-react";

import collegeImage from "../../../public/images/footerlogo.webp";

const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-ncerc" },
    { label: "Admission", href: "/admission-procedure" },
    { label: "Placements", href: "/placement-status" },
    { label: "Alumni", href: "/alumni" },
    { label: "Contact Us", href: "/contact" },
    { label: "Personality & Career", href: "/careers-new" },
    { label: "Profiling Assessment", href: "/certification" },
];

const academicLinks = [
    { label: "Apply Online", href: "/contact" },
    { label: "Downloads", href: "/download" },
    { label: "Approvals & Affiliations", href: "/approvals" },
    { label: "Institutional Values", href: "/holistic" },
    { label: "Terms and Conditions", href: "/terms-and-conditions" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    {
        label: "Cancellation / Refund Policy",
        href: "/cancellation-refund-policy",
    },
];

const socialLinks = [
    {
        icon: Facebook,
        label: "Facebook",
        href: "https://www.facebook.com/nehrucollege.pampady/",
    },
    {
        icon: Instagram,
        label: "Instagram",
        href: "https://www.instagram.com/nehrugroup_kerala",
    },
    {
        icon: Youtube,
        label: "YouTube",
        href: "https://www.youtube.com/@nehrucollegeofengineeringa1480",
    },
];

const courses = [
    "MEDICAL",
    "PARAMEDICAL",
    "PHARMACY",
    "NURSING",
    "LAW",
    "AVIATION",
    "ARTS & SCIENCE",
];

const bottomLinks = [
    { label: "Sitemap", href: "/sitemap" },
    { label: "Disclaimer", href: "/disclaimer" },
    { label: "Accessibility", href: "/accessibility" },
    { label: "Feedback", href: "/feedback" },
];

export default function FooterSection() {
    return (
        <footer className="bg-[#20235A] text-white">

            {/* =====================================================
                CTA STRIP
            ====================================================== */}
            <div className="border-b border-white/10 bg-[#D2B87C]">
                <div className="mx-auto flex max-w-[1500px] flex-col gap-5 px-6 py-7 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-8 xl:px-12">

                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#20235A]/65">
                            Begin Your Journey
                        </p>

                        <h2 className="mt-1 font-display text-xl font-semibold leading-tight text-[#20235A] sm:text-2xl">
                            Build your future with NCERC
                        </h2>
                    </div>

                    <Link
                        href="/contact"
                        className="group inline-flex w-fit items-center gap-2 border border-[#20235A] bg-[#20235A] px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:bg-transparent hover:text-[#20235A]"
                    >
                        Apply Now

                        <ArrowRight
                            size={15}
                            strokeWidth={1.8}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </Link>
                </div>
            </div>

            {/* =====================================================
                MAIN FOOTER
            ====================================================== */}
            <div className="relative overflow-hidden">

                {/* Subtle background grid */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-[0.025]"
                >
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />
                </div>

                <div className="relative mx-auto max-w-[1500px] px-6 sm:px-8 lg:px-10 xl:px-12">

                    {/* =================================================
                        FOOTER MAIN GRID
                    ================================================== */}
                    <div className="grid grid-cols-1 gap-12 py-12 sm:py-14 lg:grid-cols-[1.45fr_0.8fr_0.9fr_1.15fr] lg:gap-10 lg:py-16 xl:gap-16">

                        {/* =================================================
                            COLLEGE INFORMATION
                        ================================================== */}
                        <div>

                            {/* =================================================
                                LARGE LOGO + COLLEGE NAME
                            ================================================== */}
                            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">

                                <Image
                                    src={collegeImage}
                                    alt="Nehru College of Engineering and Research Centre"
                                    width={180}
                                    height={180}
                                    priority
                                    className="h-[150px] w-[150px] object-contain sm:h-[165px] sm:w-[165px]"
                                />

                                <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                                    Nehru Group of Institutions
                                </p>

                                <h3 className="mt-2 font-display text-xl font-semibold leading-tight text-white sm:text-2xl">
                                    Nehru College of Engineering
                                </h3>
                                <h3 className="mt-2 font-display text-xl font-semibold leading-tight text-white sm:text-2xl">
                                    &amp; Research Centre
                                </h3>
                            </div>

                            {/* Description */}
                            <p className="mt-7 max-w-md text-sm leading-7 text-white/50">
                                An autonomous institution affiliated to APJ
                                Abdul Kalam Technological University, approved
                                by AICTE, re-accredited by NAAC &ldquo;A&rdquo;
                                and NBA Accredited.
                            </p>

                            {/* Address */}
                            <div className="mt-6 flex items-start gap-3">
                                <MapPin
                                    size={16}
                                    strokeWidth={1.6}
                                    className="mt-1 shrink-0 text-[#D2B87C]"
                                />

                                <p className="max-w-sm text-sm leading-6 text-white/55">
                                    Nila Gardens, Pampady, Thiruvilwamala,
                                    Thrissur, Kerala - 680 588
                                </p>
                            </div>

                            {/* Phone */}
                            <div className="mt-4 flex items-center gap-3">
                                <Phone
                                    size={16}
                                    strokeWidth={1.6}
                                    className="shrink-0 text-[#D2B87C]"
                                />

                                <a
                                    href="tel:+919656000005"
                                    className="text-sm text-white/55 transition hover:text-[#D2B87C]"
                                >
                                    +91 - 9656000005
                                </a>
                            </div>

                            {/* Social */}
                            <div className="mt-7 flex items-center gap-2">
                                {socialLinks.map(
                                    ({ icon: Icon, label, href }) => (
                                        <a
                                            key={label}
                                            href={href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={label}
                                            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all duration-300 hover:border-[#D2B87C] hover:bg-[#D2B87C] hover:text-[#20235A]"
                                        >
                                            <Icon
                                                size={15}
                                                strokeWidth={1.7}
                                            />
                                        </a>
                                    )
                                )}
                            </div>
                        </div>

                        {/* =================================================
                            QUICK LINKS
                        ================================================== */}
                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-[#D2B87C]">
                                Quick Links
                            </h4>

                            <div className="mt-4 h-px w-8 bg-[#D2B87C]/60" />

                            <ul className="mt-6 space-y-3">
                                {quickLinks.map((item) => (
                                    <li key={item.label}>
                                        <Link
                                            href={item.href}
                                            className="group inline-flex items-center gap-2 text-sm text-white/50 transition duration-300 hover:text-white"
                                        >
                                            <span className="h-px w-0 bg-[#D2B87C] transition-all duration-300 group-hover:w-3" />

                                            <span>{item.label}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* =================================================
                            RESOURCES
                        ================================================== */}
                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-[#D2B87C]">
                                Resources
                            </h4>

                            <div className="mt-4 h-px w-8 bg-[#D2B87C]/60" />

                            <ul className="mt-6 space-y-3">
                                {academicLinks.map((item) => (
                                    <li key={item.label}>
                                        <Link
                                            href={item.href}
                                            className="group inline-flex items-center gap-2 text-sm text-white/50 transition duration-300 hover:text-white"
                                        >
                                            <span className="h-px w-0 bg-[#D2B87C] transition-all duration-300 group-hover:w-3" />

                                            <span>{item.label}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* =================================================
                            GET IN TOUCH / BROCHURE
                        ================================================== */}
                        <div>

                            <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-[#D2B87C]">
                                Get In Touch
                            </h4>

                            <div className="mt-4 h-px w-8 bg-[#D2B87C]/60" />

                            {/* Email */}
                            <div className="mt-6 flex items-start gap-3">
                                <Mail
                                    size={16}
                                    strokeWidth={1.6}
                                    className="mt-1 shrink-0 text-[#D2B87C]"
                                />

                                <div className="space-y-1">
                                    <a
                                        href="mailto:office@ncerc.ac.in"
                                        className="block text-sm text-white/55 transition hover:text-[#D2B87C]"
                                    >
                                        office@ncerc.ac.in
                                    </a>

                                    <a
                                        href="mailto:admissions@ncerc.ac.in"
                                        className="block text-sm text-white/55 transition hover:text-[#D2B87C]"
                                    >
                                        admissions@ncerc.ac.in
                                    </a>
                                </div>
                            </div>

                            {/* Brochure */}
                            <div className="mt-7 border-t border-white/10 pt-6">
                                <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-white/30">
                                    College Brochure
                                </p>

                                <p className="mt-2 font-display text-lg font-semibold text-white">
                                    Explore NCERC
                                </p>

                                <a
                                    href="/images/NGI-brochure-2026.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group mt-4 inline-flex items-center gap-2 border-b border-[#D2B87C] pb-1 text-xs font-bold uppercase tracking-[0.1em] text-[#D2B87C] transition hover:text-white"
                                >
                                    Download Brochure
                                    <Download
                                        size={14}
                                        strokeWidth={1.7}
                                        className="transition-transform duration-300 group-hover:translate-y-0.5"
                                    />
                                </a>
                            </div>

                            {/* Courses */}
                            <div className="mt-7 border-t border-white/10 pt-6">
                                <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-white/30">
                                    Courses Offered
                                </p>

                                <div className="mt-3 flex flex-wrap gap-x-3 gap-y-2">
                                    {courses.map((course) => (
                                        <span
                                            key={course}
                                            className="text-[10px] text-white/40"
                                        >
                                            {course}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* =================================================
                        ACCREDITATIONS
                    ================================================== */}
                    <div className="border-t border-white/10 py-6">
                        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/30">
                                Approvals &amp; Accreditations
                            </p>

                            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                                <span className="text-[10px] font-medium text-white/45">
                                    AICTE Approved
                                </span>

                                <span className="h-1 w-1 rounded-full bg-[#D2B87C]/60" />

                                <span className="text-[10px] font-medium text-white/45">
                                    NAAC &ldquo;A&rdquo; Accredited
                                </span>

                                <span className="h-1 w-1 rounded-full bg-[#D2B87C]/60" />

                                <span className="text-[10px] font-medium text-white/45">
                                    NBA Accredited
                                </span>

                                <span className="h-1 w-1 rounded-full bg-[#D2B87C]/60" />

                                <span className="text-[10px] font-medium text-white/45">
                                    ISO 9001 : 2015
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* =================================================
                        COPYRIGHT
                    ================================================== */}
                    <div className="border-t border-white/10 py-5">
                        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                            <p className="m-0 text-xs text-white/30">
                                &copy; {new Date().getFullYear()} Nehru College
                                of Engineering &amp; Research Centre. All
                                Rights Reserved.
                            </p>

                            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                                {bottomLinks.map((link, index) => (
                                    <div
                                        key={link.label}
                                        className="flex items-center gap-4"
                                    >
                                        <Link
                                            href={link.href}
                                            className="text-xs text-white/35 transition hover:text-[#D2B87C]"
                                        >
                                            {link.label}
                                        </Link>

                                        {index < bottomLinks.length - 1 && (
                                            <span className="h-1 w-1 rounded-full bg-white/15" />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}