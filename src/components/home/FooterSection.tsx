import Image from "next/image";
import Link from "next/link";
import {
    ChevronRight,
    Download,
    Facebook,
    FileText,
    Instagram,
    Mail,
    MapPin,
    Phone,
    Youtube,
} from "lucide-react";
import collegeImage from "../../../public/images/footerlogo.webp";

const navigations = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-ncerc" },
    { label: "Admission", href: "/admission-procedure" },
    { label: "Placements", href: "/placement-status" },
    { label: "Alumni", href: "/alumni" },
    { label: "Alumni Feedback", href: "https://docs.google.com/forms/d/13HMpw7aTkf-mzwk0wE1Up1SQH__o8xanzOnDBWalG8/", external: true },
    { label: "Contact Us", href: "/contact" },
    { label: "Personality & Career", href: "/careers-new" },
    { label: "Profiling Assessment", href: "/certification" },
];

const quickLinks = [
    { label: "Apply Online", href: "/contact" },
    { label: "Downloads", href: "/download" },
    { label: "Approvals & Affiliations", href: "/approvals" },
    { label: "Institutional Values", href: "/holistic" },
    { label: "Terms and Conditions", href: "/terms-and-conditions" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Cancellation/Refund Policy", href: "/cancellation-refund-policy" },
];

const socialLinks = [
    { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/nehrucollege.pampady/" },
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/nehrugroup_kerala" },
    { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@nehrucollegeofengineeringa1480" },
];

const courses = ["MEDICAL", "PARAMEDICAL", "PHARMACY", "NURSING", "LAW", "AVIATION", "ARTS & SCIENCE", "AND MORE..."];

const bottomLinks = [
    { label: "Sitemap", href: "/sitemap" },
    { label: "Disclaimer", href: "/disclaimer" },
    { label: "Accessibility", href: "/accessibility" },
    { label: "Feedback", href: "/feedback" },
];

function FooterLink({ label, href, external }: { label: string; href: string; external?: boolean }) {
    const content = (
        <span className="group flex items-center gap-1.5 text-xs text-white/80 transition hover:text-gold-400">
            <ChevronRight size={13} className="shrink-0 text-gold-500 transition group-hover:translate-x-0.5" />
            {label}
        </span>
    );

    if (external) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer">
                {content}
            </a>
        );
    }

    return <Link href={href}>{content}</Link>;
}

export default function FooterSection() {
    return (
        <footer className="relative overflow-hidden bg-navy-950 pt-12 pb-6">
            <div className="relative mx-auto max-w-8xl px-6">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr_1fr_300px]">
                    {/* Brand column */}
                    <div>
                        <Image
                            src={collegeImage}
                            alt="NCERC crest"
                            width={110}
                            height={110}
                            className="h-20 w-20 object-contain"
                        />
                        <h2 className="mt-3 font-display text-xl font-semibold leading-tight text-white">
                            Nehru College
                        </h2>
                        <p className="text-xs font-bold uppercase tracking-wide text-gold-500">
                            of Engineering &amp; Research Centre
                        </p>

                        <p className="mt-2 text-[11px] leading-relaxed text-white/60">
                            An autonomous institution affiliated to APJAKTU | Approved by AICTE
                            <br />
                            Re-accredited by NAAC &ldquo;A&rdquo; | NBA Accredited
                            <br />
                            22<sup>nd</sup> in Kerala Institutional Ranking Framework (KIRF)
                            <br />
                            ISO 9001 : 2015 Certified Institution
                        </p>

                        <span className="mt-4 block h-0.5 w-10 bg-gold-500" />

                        <h3 className="mt-4 text-xs font-bold uppercase tracking-wide text-gold-500">
                            Contact Us
                        </h3>

                        <ul className="mt-2.5 space-y-2.5 text-xs text-white/80">
                            <li className="flex items-start gap-2">
                                <MapPin size={15} className="mt-0.5 shrink-0 text-gold-500" />
                                <span>Nila Gardens, Pampady, Thiruvilwamala, Thrissur, Kerala - 680 588</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone size={15} className="shrink-0 text-gold-500" />
                                <a href="tel:+919656000005" className="hover:text-white transition">
                                    +91 - 9656000005
                                </a>
                            </li>
                            <li className="flex items-start gap-2">
                                <Mail size={15} className="mt-0.5 shrink-0 text-gold-500" />
                                <span className="flex flex-col">
                                    <a href="mailto:office@ncerc.ac.in" className="hover:text-white transition">
                                        office@ncerc.ac.in
                                    </a>
                                    <a href="mailto:admissions@ncerc.ac.in" className="hover:text-white transition">
                                        admissions@ncerc.ac.in
                                    </a>
                                </span>
                            </li>
                        </ul>

                        <h3 className="mt-5 text-xs font-bold uppercase tracking-wide text-gold-500">
                            Follow Us
                        </h3>

                        <div className="mt-2.5 flex items-center gap-2.5">
                            {socialLinks.map(({ icon: Icon, label, href }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="flex h-8 w-8 items-center justify-center rounded-full border border-gold-500/80 text-gold-500 transition hover:bg-gold-500 hover:text-navy-950"
                                >
                                    <Icon size={14} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigations */}
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-wide text-gold-500">
                            Navigations
                        </h3>
                        <span className="mt-1 block h-0.5 w-6 bg-gold-500" />

                        <ul className="mt-3.5 space-y-2.5">
                            {navigations.map((item) => (
                                <li key={item.label}>
                                    <FooterLink {...item} />
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-wide text-gold-500">
                            Quick Links
                        </h3>
                        <span className="mt-1 block h-0.5 w-6 bg-gold-500" />

                        <ul className="mt-3.5 space-y-2.5">
                            {quickLinks.map((item) => (
                                <li key={item.label}>
                                    <FooterLink {...item} />
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Brochure + Courses Card */}
                    <div className="flex flex-col rounded-xl border border-white/15 bg-white/[0.02]">
                        {/* Compacted Brochure Section */}
                        <div className="border-b border-white/10 px-5 py-4">
                            <div className="flex items-center justify-between gap-3">
                                <div className="flex items-center gap-2">
                                    <FileText size={18} className="shrink-0 text-gold-500" />
                                    <h3 className="text-xs font-bold uppercase tracking-wide text-white">
                                        NGI Brochure
                                    </h3>
                                </div>

                                <a
                                    href="/downloads/Brochure/NGI_Brochure.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex shrink-0 items-center gap-1.5 rounded border border-gold-500 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-gold-500 transition hover:bg-gold-500 hover:text-navy-950"
                                >
                                    Download
                                    <Download size={12} />
                                </a>
                            </div>

                            <p className="mt-2 text-[11px] leading-relaxed text-white/70">
                                Explore our programs, facilities, and academic opportunities.
                            </p>
                        </div>

                        {/* Compacted Courses Section */}
                        <div className="px-5 py-4">
                            <div className="flex items-center gap-2">
                                <h3 className="text-xs font-bold uppercase tracking-wide text-gold-500">
                                    Courses Offered
                                </h3>
                                <span className="h-0.5 w-6 bg-gold-500" />
                            </div>

                            <p className="mt-2.5 flex flex-wrap gap-x-2 gap-y-1.5 text-[11px] leading-relaxed text-white/80">
                                {courses.map((course, index) => (
                                    <span key={course} className="flex items-center gap-2">
                                        {course}
                                        {index < courses.length - 1 && (
                                            <span className="text-white/20">|</span>
                                        )}
                                    </span>
                                ))}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="relative mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-5 text-[11px] text-white/60 sm:flex-row">
                    <p>
                        &copy; {new Date().getFullYear()} Nehru College of Engineering &amp; Research Centre. All Rights Reserved.
                    </p>

                    <div className="flex flex-wrap items-center gap-3">
                        {bottomLinks.map((link, index) => (
                            <span key={link.label} className="flex items-center gap-3">
                                <Link href={link.href} className="hover:text-white transition">
                                    {link.label}
                                </Link>
                                {index < bottomLinks.length - 1 && <span className="text-white/20">|</span>}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}