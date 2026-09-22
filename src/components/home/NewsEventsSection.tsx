import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, GraduationCap, Megaphone } from "lucide-react";

import LivingLegecy from "../../../public/images/events/livinglegecy.webp";
import Graduation from "../../../public/images/events/graduation_day.webp";
import Inducation from "../../../public/images/events/induction_ceremony.webp";

const news = [
    {
        image: LivingLegecy,
        day: "03",
        month: "Jul",
        year: "2026",
        category: "Event",
        icon: Calendar,
        title: "Living the Legacy",
        description:
            "A grand ceremony celebrating the legacy and contributions of our founders and visionaries.",
        href: "/news-events/living-the-legacy",
        accent: "bg-navy-950",
    },
    {
        image: Graduation,
        day: "24",
        month: "Jul",
        year: "2026",
        category: "Academics",
        icon: GraduationCap,
        title: "Graduation Day Ceremony 2026",
        description:
            "Honoring the achievements of our graduates as they step into a bright and promising future.",
        href: "/news-events/graduation-day-2026",
        accent: "bg-gold-500",
    },
    {
        image: Inducation,
        day: "22",
        month: "Jul",
        year: "2026",
        category: "Announcement",
        icon: Megaphone,
        title: "NCERC (Autonomous) Proudly...",
        description:
            "A proud moment as NCERC (Autonomous) continues to achieve new milestones in education.",
        href: "/news-events/ncerc-autonomous",
        accent: "bg-navy-950",
    },
];

const NewsEventsSection = () => {
    return (
        <section className="relative -mt-10 overflow-hidden bg-[#faf7f2] pb-24 pt-0 sm:-mt-14 lg:-mt-20">
            {/* Dotted grid accent, top-left */}
            <div
                aria-hidden
                className="absolute left-10 top-16 hidden h-32 w-32 lg:block"
                style={{
                    backgroundImage: "radial-gradient(currentColor 1.5px, transparent 1.5px)",
                    backgroundSize: "14px 14px",
                    color: "#d9a441",
                    opacity: 0.5,
                }}
            />

            {/* Faint building line-art, right side */}
            <svg
                aria-hidden
                viewBox="0 0 400 400"
                className="pointer-events-none absolute -right-10 top-1/3 hidden h-64 w-auto text-gold-500/10 lg:block"
                fill="none"
            >
                <path d="M40 400V150h60v-40h40v40h60v40h40v40h60v170" stroke="currentColor" strokeWidth="1.5" />
            </svg>

            <div className="relative mx-auto max-w-8xl px-6">
                {/* Heading */}
                <div className="mx-auto max-w-2xl text-center">
                    <div className="flex items-center justify-center gap-3">
                        <span className="h-px w-10 bg-gold-500" />
                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-500">
                            News &amp; Events
                        </span>
                        <span className="h-px w-10 bg-gold-500" />
                    </div>

                    <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-navy-950 sm:text-5xl">
                        Latest News &amp; Events
                    </h2>

                    <div className="mx-auto my-6 h-1 w-16 bg-gold-500" />

                    <p className="text-base leading-relaxed text-slate-600">
                        Stay updated with the latest happenings, achievements and milestone
                        at Nehru College of Engineering &amp; Research Centre.
                    </p>
                </div>

                {/* Left to Right Horizontal Swipable Cards */}
                <div className="mt-14 flex overflow-x-auto gap-6 pb-6 pt-2 snap-x snap-mandatory scrollbar-none sm:scrollbar-thin">
                    {news.map(({ image, day, month, year, category, icon: Icon, title, description, href, accent }) => (
                        <article
                            key={title}
                            className="flex w-[85%] min-w-[85%] sm:w-[350px] sm:min-w-[350px] lg:w-[calc(33.333%-16px)] lg:min-w-[calc(33.333%-16px)] shrink-0 snap-center flex-col overflow-hidden rounded-xl bg-white shadow-lg shadow-navy-950/5"
                        >
                            {/* Photo */}
                            <div className="relative h-56 w-full">
                                <Image
                                    src={image}
                                    alt={title}
                                    fill
                                    sizes="(min-width: 768px) 33vw, 85vw"
                                    className="object-cover"
                                />

                                {/* Date badge */}
                                <div className="absolute bottom-4 left-4 flex w-16 flex-col items-center rounded-md bg-navy-950 py-2 text-white shadow-md">
                                    <span className="text-2xl font-bold leading-none">{day}</span>
                                    <span className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-gold-400">
                                        {month}
                                    </span>
                                    <span className="text-[11px] text-white/70">{year}</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex flex-1 flex-col px-6 pb-6 pt-5">
                                <div className="flex items-center gap-2.5">
                                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold-500/15">
                                        <Icon size={16} className="text-gold-500" />
                                    </span>
                                    <span className="text-xs font-semibold uppercase tracking-wide text-gold-500">
                                        {category}
                                    </span>
                                </div>

                                <h3 className="mt-3 text-lg font-bold text-navy-950">{title}</h3>

                                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                                    {description}
                                </p>

                                <Link
                                    href={href}
                                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-navy-950 transition hover:text-gold-500"
                                >
                                    Read More
                                    <ArrowRight size={15} className="text-gold-500" />
                                </Link>
                            </div>

                            {/* Accent bar */}
                            <span aria-hidden className={`h-1.5 w-full ${accent}`} />
                        </article>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-12 flex justify-center">
                    <Link
                        href="/news-events"
                        className="inline-flex items-center gap-2 rounded-md bg-navy-950 px-8 py-3 text-sm font-semibold text-white transition hover:bg-navy-900"
                    >
                        View All News &amp; Events
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default NewsEventsSection;