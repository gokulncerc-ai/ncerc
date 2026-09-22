"use client";

import Image, { type StaticImageData } from "next/image";
import {
    ArrowRight,
    ChevronLeft,
    ChevronRight,
    Lightbulb,
    Microscope,
    Play,
    Settings2,
} from "lucide-react";

import Suresh from "../../../public/images/alumins/alum.webp";
import Priya from "../../../public/images/alumins/priyasharma.png";
import Aditya from "../../../public/images/alumins/images.png";

const testimonials: Array<{
    photo: StaticImageData;
    icon: typeof Microscope;
    name: string;
    role: string;
    quote: string;
}> = [
        {
            photo: Suresh,
            icon: Microscope,
            name: "Prof. K. Suresh",
            role: "Scientist, ISRO",
            quote:
                "A hub of innovation and disciplined learning. NCERC students show incredible promise. It was a pleasure to interact with them.",
        },
        {
            photo: Priya,
            icon: Settings2,
            name: "Ms. Priya Sharma",
            role: "Tech Leader, Microsoft",
            quote:
                "Impressive infrastructure and industry-focused curriculum. NCERC is grooming the leaders of tomorrow. The energy on campus is infectious.",
        },
        {
            photo: Aditya,
            icon: Lightbulb,
            name: "Mr. Aditiya Nair",
            role: "Founder & CEO, Innovatech Solns.",
            quote:
                "NCERC is a crucible of entrepreneurial spirit. The focus on practical application and industry needs is exceptional. These students are ready for the global stage.",
        },
    ];

export default function CollegeInteractionSection() {
    return (
        <section className="relative m-0 overflow-hidden bg-white p-0">
            <div className="mx-auto max-w-8xl px-6">
                {/* ====================================================
                    HEADING
                ==================================================== */}

                <div className="m-0 flex items-center gap-3">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-500">
                        Suggested
                    </span>

                    <span className="h-px w-14 bg-gold-500" />
                </div>

                <h2 className="m-0 mt-8 font-display text-4xl font-semibold leading-tight text-navy-950 sm:text-5xl">
                    What Distinguished Personalities Say About NCERC
                </h2>

                <p className="m-0 mt-8 max-w-2xl text-base leading-relaxed text-slate-600">
                    Explore the experiences and insights of leaders across various
                    fields who have visited and interacted with our institution.
                </p>

                {/* ====================================================
                    CAROUSEL ROW
                ==================================================== */}

                <div className="m-0 mt-10 flex items-center gap-4">
                    {/* Previous */}

                    <button
                        type="button"
                        aria-label="Previous testimonial"
                        className="
                            hidden
                            shrink-0
                            flex-col
                            items-center
                            gap-1
                            rounded-xl
                            border
                            border-slate-200
                            bg-white
                            px-4
                            py-4
                            text-navy-950
                            shadow-md
                            transition
                            hover:border-gold-500
                            hover:text-gold-500
                            sm:flex
                        "
                    >
                        <ChevronLeft size={20} />

                        <span className="text-[10px] font-semibold uppercase tracking-wide">
                            Previous
                        </span>
                    </button>

                    {/* ==================================================
                        TESTIMONIAL CARDS
                    ================================================== */}

                    <div
                        className="
                            grid
                            flex-1
                            grid-cols-1
                            gap-6
                            sm:grid-cols-2
                            lg:grid-cols-3
                        "
                    >
                        {testimonials.map(
                            ({ photo, icon: Icon, name, role, quote }) => (
                                <article
                                    key={name}
                                    className="
                                        m-0
                                        rounded-2xl
                                        border
                                        border-slate-100
                                        bg-white
                                        p-5
                                        shadow-lg
                                        shadow-navy-950/5
                                    "
                                >
                                    {/* Image */}

                                    <div className="relative h-52 w-full overflow-hidden rounded-xl">
                                        <Image
                                            src={photo}
                                            alt={name}
                                            fill
                                            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                                            className="object-cover"
                                        />

                                        {/* Icon */}

                                        <span
                                            className="
                                                absolute
                                                -bottom-4
                                                -right-2
                                                flex
                                                h-11
                                                w-11
                                                items-center
                                                justify-center
                                                rounded-full
                                                border-2
                                                border-white
                                                bg-white
                                                text-gold-500
                                                shadow-md
                                            "
                                        >
                                            <Icon
                                                size={20}
                                                strokeWidth={1.5}
                                            />
                                        </span>
                                    </div>

                                    {/* Name */}

                                    <h3
                                        className="
                                            m-0
                                            mt-6
                                            font-display
                                            text-xl
                                            font-semibold
                                            leading-snug
                                            text-navy-950
                                        "
                                    >
                                        {name}
                                        &nbsp;&ndash;
                                        <br />
                                        {role}
                                    </h3>

                                    {/* Quote */}

                                    <p
                                        className="
                                            m-0
                                            mt-3
                                            text-sm
                                            leading-relaxed
                                            text-slate-600
                                        "
                                    >
                                        {quote}
                                    </p>

                                    {/* Video Link */}

                                    <a
                                        href="#"
                                        className="
                                            mt-5
                                            inline-flex
                                            items-center
                                            gap-2
                                            text-sm
                                            font-semibold
                                            uppercase
                                            tracking-wide
                                            text-navy-950
                                            transition
                                            hover:text-gold-500
                                        "
                                    >
                                        <span
                                            className="
                                                flex
                                                h-6
                                                w-8
                                                items-center
                                                justify-center
                                                rounded-md
                                                bg-gold-500
                                                text-white
                                            "
                                        >
                                            <Play
                                                size={11}
                                                fill="currentColor"
                                            />
                                        </span>

                                        View Video Testimonial

                                        <ArrowRight size={15} />
                                    </a>
                                </article>
                            )
                        )}
                    </div>

                    {/* Next */}

                    <button
                        type="button"
                        aria-label="Next testimonial"
                        className="
                            hidden
                            shrink-0
                            flex-col
                            items-center
                            gap-1
                            rounded-xl
                            border
                            border-slate-200
                            bg-white
                            px-4
                            py-4
                            text-navy-950
                            shadow-md
                            transition
                            hover:border-gold-500
                            hover:text-gold-500
                            sm:flex
                        "
                    >
                        <ChevronRight size={20} />

                        <span className="text-[10px] font-semibold uppercase tracking-wide">
                            Next
                        </span>
                    </button>
                </div>

                {/* ====================================================
                    CTA
                ==================================================== */}

                <div className="m-0 flex justify-center pt-8">
                    <a
                        href="/news-events"
                        className="
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-gold-500
                            px-8
                            py-3.5
                            text-sm
                            font-semibold
                            uppercase
                            tracking-wide
                            text-gold-500
                            transition
                            hover:bg-gold-500
                            hover:text-navy-950
                        "
                    >
                        Explore More Interaction Highlights

                        <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
}