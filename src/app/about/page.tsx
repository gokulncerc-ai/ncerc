import Image from "next/image";
import {
    Award,
    BadgeCheck,
    CalendarDays,
    CheckCircle2,
    GraduationCap,
    HandCoins,
    Settings2,
    ShieldCheck,
    Star,
    Users,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import collegeImage from "../../../public/images/collegeone.jpg";
import FooterSection from "@/components/home/FooterSection";

const accreditations = [
    {
        icon: Star,
        title: "NBA Accredited",
        description:
            "Recognized for maintaining the highest quality standards in engineering education.",
    },
    {
        icon: Award,
        title: "UGC Approved",
        description: "One of the top UGC approved colleges in Kerala.",
    },
    {
        icon: BadgeCheck,
        title: "NAAC ‘A’ Accredited",
        description:
            "A reflection of our dedication to academic excellence and continuous improvement.",
    },
    {
        icon: Settings2,
        title: "AICTE Approved",
        description:
            "Ensures our programs meet the rigorous standards set by AICTE.",
    },
];

const achievements = [
    { icon: CalendarDays, label: "Since", value: "2002" },
    { icon: Users, label: "Students", value: "3000+" },
    { icon: GraduationCap, label: "Alumni", value: "8500+" },
    { icon: HandCoins, label: "Scholarship", value: "10000+" },
];

const evaluationAreas = [
    "Teaching-learning process",
    "Research and innovation",
    "Infrastructure and facilities",
    "Governance and management practices",
];

const affiliations = [
    {
        icon: ShieldCheck,
        title: "Autonomous Institution Affiliated to APJAKTU",
        description:
            "Our autonomy grants us the freedom to design innovative programs and adapt to the evolving needs of the industry, while our affiliation ensures high academic standards and quality assurance.",
    },
    {
        icon: Settings2,
        title: "AICTE Approval",
        description:
            "Signifies that we have met the minimum standards and guidelines set by the council for offering technical education programs. It ensures quality education and the production of competent engineers.",
    },
    {
        icon: BadgeCheck,
        title: "NBA Accreditation",
        description:
            "An autonomous body established by the Government of India to assess and accredit engineering programs. NBA accreditation signifies the highest standards of quality and rigor in engineering education.",
    },
];

export default function About() {
    return (
        <main className="w-full max-w-[100vw] overflow-x-hidden bg-white">
            <SiteHeader />

            {/* About intro */}
            <section className="w-full overflow-hidden bg-[#faf7f2] py-20">
                <div className="mx-auto grid w-full max-w-8xl min-w-0 grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
                    <div className="min-w-0">
                        <div className="flex items-center gap-3">
                            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-500">
                                About Us
                            </span>

                            <span className="h-px w-12 shrink-0 bg-gold-500" />
                        </div>

                        <h1 className="mt-4 font-display text-3xl font-semibold leading-tight text-navy-950 sm:text-4xl lg:text-[2.75rem]">
                            Nehru College of
                            <br />
                            Engineering &amp;
                            <br />
                            Research Centre
                        </h1>

                        <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-600 sm:text-base">
                            NCERC is a leading engineering college in Kerala, renowned for
                            its academic excellence, industry-focused education, and
                            commitment to student success. We are affiliated with the
                            Kerala State APJ Abdul Kalam Technological University and are
                            proud to have been conferred with autonomous status by the UGC.
                        </p>

                        <span className="mt-6 block h-0.5 w-10 bg-gold-500" />

                        <div className="mt-4 flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-wide text-navy-950">
                            <span>Learn</span>
                            <span className="text-gold-500">|</span>
                            <span>Innovate</span>
                            <span className="text-gold-500">|</span>
                            <span>Build Your Future</span>
                        </div>
                    </div>

                    {/* Diagonal-cut photo frame */}
                    <div className="relative h-64 min-w-0 w-full overflow-hidden sm:h-80 lg:h-96">
                        <div
                            aria-hidden
                            className="absolute inset-0 bg-gold-500"
                            style={{
                                clipPath: "polygon(0 0, 13% 0, 0 13%)",
                            }}
                        />

                        <div
                            aria-hidden
                            className="absolute inset-0 bg-navy-950"
                            style={{
                                clipPath:
                                    "polygon(100% 100%, 87% 100%, 100% 87%)",
                            }}
                        />

                        <div
                            className="absolute inset-0 overflow-hidden"
                            style={{
                                clipPath:
                                    "polygon(13% 0, 100% 0, 100% 87%, 87% 100%, 0 100%, 0 13%)",
                            }}
                        >
                            <Image
                                src={collegeImage}
                                alt="NCERC campus building"
                                fill
                                sizes="(min-width: 1024px) 45vw, 100vw"
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Journey */}
            <section className="w-full overflow-hidden bg-white py-20">
                <div className="mx-auto grid w-full max-w-8xl min-w-0 grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:gap-16">
                    <div className="min-w-0">
                        <div className="flex items-center gap-3">
                            <span className="h-px w-10 shrink-0 bg-gold-500" />

                            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-500">
                                Our Journey
                            </span>
                        </div>

                        <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-navy-950 sm:text-4xl">
                            Academic Excellence
                            <br />
                            and a Brighter Future
                        </h2>

                        <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-600 sm:text-base">
                            At NCERC, we take pride in our academic curriculum, which is
                            carefully crafted to meet the highest standards and is
                            constantly updated to keep pace with the latest developments
                            in the field of engineering. Our institution is committed to
                            providing an excellent teaching pedagogy and innovative
                            evaluation methods, ensuring that our students receive a
                            world-class education that prepares them for successful
                            careers in engineering.
                        </p>
                    </div>

                    <div className="min-w-0 w-full rounded-2xl bg-slate-50 p-6 sm:p-8">
                        <ul className="divide-y divide-slate-200">
                            {accreditations.map(
                                ({ icon: Icon, title, description }) => (
                                    <li
                                        key={title}
                                        className="flex min-w-0 items-start gap-4 py-5 first:pt-0 last:pb-0"
                                    >
                                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy-950">
                                            <Icon
                                                size={20}
                                                strokeWidth={1.5}
                                                className="text-gold-500"
                                            />
                                        </span>

                                        <div className="min-w-0">
                                            <p className="break-words font-display text-lg font-semibold text-navy-950">
                                                {title}
                                            </p>

                                            <p className="mt-1 break-words text-sm leading-relaxed text-slate-600">
                                                {description}
                                            </p>
                                        </div>
                                    </li>
                                ),
                            )}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Achievements band */}
            <section className="w-full overflow-hidden bg-navy-950 py-16">
                <div className="mx-auto w-full max-w-8xl px-6 text-center">
                    <div className="flex items-center justify-center gap-3">
                        <span className="h-px w-10 shrink-0 bg-gold-500" />

                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-500">
                            Our Achievements
                        </span>

                        <span className="h-px w-10 shrink-0 bg-gold-500" />
                    </div>

                    <h2 className="mt-3 font-display text-2xl font-semibold text-white sm:text-3xl">
                        Building a Legacy of Excellence
                    </h2>

                    <div className="mt-10 grid grid-cols-2 gap-y-10 sm:grid-cols-4 sm:divide-x sm:divide-white/15">
                        {achievements.map(
                            ({ icon: Icon, label, value }) => (
                                <div key={label} className="min-w-0 px-4">
                                    <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold-500">
                                        <Icon
                                            size={24}
                                            strokeWidth={1.5}
                                            className="text-navy-950"
                                        />
                                    </span>

                                    <p className="mt-3 text-sm font-medium text-white/80">
                                        {label}
                                    </p>

                                    <p className="mt-1 break-words font-display text-4xl font-bold text-white">
                                        {value}
                                    </p>
                                </div>
                            ),
                        )}
                    </div>
                </div>
            </section>

            {/* NAAC accreditation */}
            <section className="w-full overflow-hidden bg-[#faf7f2] py-20">
                <div className="mx-auto grid w-full max-w-8xl min-w-0 grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
                    {/* Diagonal-cut NAAC badge card */}
                    <div className="relative h-72 min-w-0 w-full overflow-hidden sm:h-80">
                        <div
                            aria-hidden
                            className="absolute inset-0 bg-gold-500"
                            style={{
                                clipPath:
                                    "polygon(100% 100%, 87% 100%, 100% 87%)",
                            }}
                        />

                        <div
                            className="absolute inset-0 flex flex-col items-center justify-center gap-4 overflow-hidden bg-navy-950"
                            style={{
                                clipPath:
                                    "polygon(0 0, 100% 0, 100% 87%, 87% 100%, 0 100%)",
                            }}
                        >
                            <span className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full border-4 border-gold-500 font-display text-5xl font-bold text-gold-500">
                                A
                            </span>

                            <p className="text-sm font-bold uppercase tracking-[0.2em] text-white">
                                NAAC
                                <br />
                                <span className="text-gold-500">
                                    Accreditation
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-3">
                            <span className="h-px w-10 shrink-0 bg-gold-500" />

                            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-500">
                                NAAC &lsquo;A&rsquo; Accreditation
                            </span>

                            <span className="h-px w-10 shrink-0 bg-gold-500" />
                        </div>

                        <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-navy-950 sm:text-4xl">
                            A Mark of Quality and Excellence
                        </h2>

                        <p className="mt-5 text-sm leading-relaxed text-slate-600 sm:text-base">
                            The National Assessment and Accreditation Council (NAAC) is an
                            autonomous body established by the University Grants
                            Commission (UGC) to assess and accredit higher education
                            institutions in India. NCERC&rsquo;s NAAC &lsquo;A&rsquo;
                            accreditation is a reflection of our dedication to academic
                            excellence, student support, and continuous improvement.
                        </p>

                        <p className="mt-6 text-sm font-bold text-navy-950">
                            Key areas of evaluation include:
                        </p>

                        <ul className="mt-4 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                            {evaluationAreas.map((area) => (
                                <li
                                    key={area}
                                    className="flex min-w-0 items-start gap-2 text-sm text-slate-700"
                                >
                                    <CheckCircle2
                                        size={18}
                                        className="mt-0.5 shrink-0 text-gold-500"
                                    />

                                    <span className="break-words">
                                        {area}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Affiliations & approvals */}
            <section className="w-full overflow-hidden bg-slate-100 py-20">
                <div className="mx-auto w-full max-w-8xl px-6 text-center">
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <span className="h-px w-10 shrink-0 bg-gold-500" />

                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-500">
                            Our Affiliations &amp; Approvals
                        </span>

                        <span className="h-px w-10 shrink-0 bg-gold-500" />
                    </div>

                    <h2 className="mt-3 font-display text-2xl font-semibold text-navy-950 sm:text-3xl">
                        A Strong Foundation for Your Future
                    </h2>

                    <div className="mt-12 grid min-w-0 grid-cols-1 gap-6 text-left sm:grid-cols-3">
                        {affiliations.map(
                            ({ icon: Icon, title, description }) => (
                                <div
                                    key={title}
                                    className="min-w-0 rounded-xl bg-white p-6 shadow-sm"
                                >
                                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-navy-950/5">
                                        <Icon
                                            size={22}
                                            strokeWidth={1.5}
                                            className="text-navy-950"
                                        />
                                    </span>

                                    <p className="mt-4 break-words font-display text-base font-semibold leading-snug text-navy-950">
                                        {title}
                                    </p>

                                    <p className="mt-2 break-words text-sm leading-relaxed text-slate-600">
                                        {description}
                                    </p>
                                </div>
                            ),
                        )}
                    </div>
                </div>
            </section>
            <FooterSection />
        </main>
    );
}
