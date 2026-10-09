"use client";

import { useState } from "react";
import {
    ArrowRight,
    ChevronLeft,
    ChevronRight,
    Lightbulb,
    Microscope,
    Play,
    Settings2,
    Users,
    Building2,
    Rocket,
} from "lucide-react";

interface Testimonial {
    photo: string;
    icon: typeof Microscope;
    name: string;
    role: string;
    quote: string;
}

const testimonials: Testimonial[] = [
    {
        photo: "/images/home/Rajesh.jpg",
        icon: Microscope,
        name: "Dr. Rajesh Menon",
        role: "Senior Scientist, ISRO",
        quote:
            "NCERC provides an inspiring environment where innovation, research and disciplined learning come together. The students demonstrate remarkable potential.",
    },
    {
        photo: "/images/home/Priya.jpg",
        icon: Settings2,
        name: "Ms. Priya Sharma",
        role: "Technology Leader, Microsoft",
        quote:
            "The infrastructure and industry-oriented approach at NCERC are impressive. The institution is preparing students to confidently meet the demands of the technology industry.",
    },
    {
        photo: "/images/home/Aditya.jpg",
        icon: Lightbulb,
        name: "Mr. Aditya Nair",
        role: "Founder & CEO, Innovatech",
        quote:
            "NCERC encourages students to think beyond textbooks and focus on practical solutions. The entrepreneurial spirit visible on campus is truly encouraging.",
    },
    {
        photo: "https://randomuser.me/api/portraits/women/68.jpg",
        icon: Users,
        name: "Dr. Anitha Krishnan",
        role: "Academic Director, IIT",
        quote:
            "The academic culture at NCERC reflects a strong commitment to student development, technical excellence and meaningful industry exposure.",
    },
    {
        photo: "https://randomuser.me/api/portraits/men/52.jpg",
        icon: Building2,
        name: "Mr. Vivek Kumar",
        role: "Vice President, Tech Solutions",
        quote:
            "It was wonderful to interact with the students and faculty. Their enthusiasm for emerging technologies and engineering innovation is clearly visible.",
    },
    {
        photo: "https://randomuser.me/api/portraits/women/32.jpg",
        icon: Rocket,
        name: "Ms. Neha Thomas",
        role: "Innovation Consultant",
        quote:
            "NCERC is creating opportunities for students to experiment, collaborate and build solutions. The focus on innovation makes the campus stand out.",
    },
    {
        photo: "https://randomuser.me/api/portraits/men/65.jpg",
        icon: Microscope,
        name: "Dr. Arun Varma",
        role: "Research Scientist",
        quote:
            "The research initiatives and technical activities at NCERC demonstrate a strong academic foundation. Students are being encouraged to explore meaningful problems.",
    },
    {
        photo: "https://randomuser.me/api/portraits/women/50.jpg",
        icon: Settings2,
        name: "Ms. Kavya Iyer",
        role: "Engineering Manager",
        quote:
            "The combination of technical education, practical exposure and student activities creates a well-rounded learning experience for future engineers.",
    },
    {
        photo: "https://randomuser.me/api/portraits/men/75.jpg",
        icon: Lightbulb,
        name: "Mr. Rahul Krishnan",
        role: "Entrepreneur & Mentor",
        quote:
            "NCERC provides students with the confidence to transform ideas into practical solutions. The campus has a strong culture of learning and experimentation.",
    },
];

const CARDS_PER_PAGE = 3;

export default function CollegeInteractionSection() {
    const [currentPage, setCurrentPage] = useState(0);

    const totalPages = Math.ceil(testimonials.length / CARDS_PER_PAGE);

    const startIndex = currentPage * CARDS_PER_PAGE;

    const visibleTestimonials = testimonials.slice(
        startIndex,
        startIndex + CARDS_PER_PAGE
    );

    const goToPrevious = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 0));
    };

    const goToNext = () => {
        setCurrentPage((prev) =>
            Math.min(prev + 1, totalPages - 1)
        );
    };

    const goToPage = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <section
            className="
                relative
                m-0
                overflow-hidden
                bg-white
                px-0
                py-16
                sm:py-20
                lg:py-24
            "
        >
            <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">

                {/* ====================================================
                    HEADING
                ==================================================== */}

                <div className="m-0 flex items-center gap-3">
                    <span
                        className="
                            text-[10px]
                            font-semibold
                            uppercase
                            tracking-[0.24em]
                            text-[#8F7746]
                        "
                    >
                        Suggested
                    </span>

                    <span className="h-px w-14 bg-[#D2B87C]" />
                </div>

                <h2
                    className="
                        m-0
                        mt-6
                        max-w-4xl
                        font-display
                        text-3xl
                        font-semibold
                        leading-[1.08]
                        text-[#20235A]
                        sm:text-4xl
                        lg:text-5xl
                    "
                >
                    What Distinguished Personalities Say About NCERC
                </h2>

                <p
                    className="
                        m-0
                        mt-6
                        max-w-2xl
                        text-sm
                        leading-7
                        text-slate-600
                        sm:text-base
                    "
                >
                    Explore the experiences and insights of leaders across
                    various fields who have visited and interacted with our
                    institution.
                </p>

                {/* ====================================================
                    CAROUSEL
                ==================================================== */}

                <div className="mt-10 flex items-center gap-4">

                    {/* ==================================================
                        PREVIOUS BUTTON
                    ================================================== */}

                    <button
                        type="button"
                        aria-label="Previous testimonials"
                        onClick={goToPrevious}
                        disabled={currentPage === 0}
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
                            text-[#20235A]
                            shadow-md
                            transition-all
                            duration-300
                            hover:border-[#D2B87C]
                            hover:text-[#8F7746]
                            disabled:cursor-not-allowed
                            disabled:opacity-30
                            sm:flex
                        "
                    >
                        <ChevronLeft size={20} />

                        <span
                            className="
                                text-[9px]
                                font-semibold
                                uppercase
                                tracking-[0.14em]
                            "
                        >
                            Previous
                        </span>
                    </button>

                    {/* ==================================================
                        TESTIMONIAL CARDS
                    ================================================== */}

                    <div className="min-w-0 flex-1">
                        <div
                            key={currentPage}
                            className="
                                grid
                                grid-cols-1
                                gap-6
                                sm:grid-cols-2
                                lg:grid-cols-3
                            "
                        >
                            {visibleTestimonials.map(
                                ({
                                    photo,
                                    icon: Icon,
                                    name,
                                    role,
                                    quote,
                                }) => (
                                    <article
                                        key={name}
                                        className="
                                            group
                                            overflow-hidden
                                            rounded-3xl
                                            border
                                            border-slate-200
                                            bg-white
                                            p-5
                                            shadow-[0_12px_40px_rgba(32,35,90,0.06)]
                                            transition-all
                                            duration-500
                                            hover:-translate-y-1
                                            hover:border-[#D2B87C]
                                            hover:shadow-[0_20px_50px_rgba(32,35,90,0.10)]
                                        "
                                    >
                                        {/* ==========================
                                            IMAGE
                                        ========================== */}

                                        <div
                                            className="
                                                relative
                                                h-52
                                                w-full
                                                overflow-hidden
                                                rounded-2xl
                                                bg-[#F2EFE8]
                                            "
                                        >
                                            <img
                                                src={photo}
                                                alt={name}
                                                loading="lazy"
                                                className="
                                                    h-full
                                                    w-full
                                                    object-cover
                                                    transition-transform
                                                    duration-700
                                                    group-hover:scale-105
                                                "
                                            />

                                            {/* Image Overlay */}

                                            <div
                                                className="
                                                    absolute
                                                    inset-0
                                                    bg-gradient-to-t
                                                    from-[#20235A]/20
                                                    via-transparent
                                                    to-transparent
                                                "
                                            />

                                            {/* Icon */}

                                            <span
                                                className="
                                                    absolute
                                                    -bottom-4
                                                    right-4
                                                    flex
                                                    h-12
                                                    w-12
                                                    items-center
                                                    justify-center
                                                    rounded-full
                                                    border-2
                                                    border-white
                                                    bg-white
                                                    text-[#8F7746]
                                                    shadow-lg
                                                "
                                            >
                                                <Icon
                                                    size={20}
                                                    strokeWidth={1.5}
                                                />
                                            </span>
                                        </div>

                                        {/* ==========================
                                            CONTENT
                                        ========================== */}

                                        <div className="pt-6">

                                            {/* Name */}

                                            <h3
                                                className="
                                                    m-0
                                                    font-display
                                                    text-xl
                                                    font-semibold
                                                    leading-snug
                                                    text-[#20235A]
                                                "
                                            >
                                                {name}
                                            </h3>

                                            {/* Role */}

                                            <p
                                                className="
                                                    m-0
                                                    mt-1.5
                                                    text-[10px]
                                                    font-semibold
                                                    uppercase
                                                    tracking-[0.16em]
                                                    text-[#8F7746]
                                                "
                                            >
                                                {role}
                                            </p>

                                            {/* Divider */}

                                            <div className="mt-4 h-px w-10 bg-[#D2B87C]" />

                                            {/* Quote */}

                                            <p
                                                className="
                                                    m-0
                                                    mt-4
                                                    min-h-[100px]
                                                    text-sm
                                                    leading-6
                                                    text-slate-600
                                                "
                                            >
                                                {quote}
                                            </p>

                                            {/* Video Link */}

                                            <a
                                                href="#"
                                                onClick={(event) =>
                                                    event.preventDefault()
                                                }
                                                className="
                                                    mt-5
                                                    inline-flex
                                                    items-center
                                                    gap-2
                                                    text-[10px]
                                                    font-semibold
                                                    uppercase
                                                    tracking-[0.16em]
                                                    text-[#20235A]
                                                    transition-colors
                                                    duration-300
                                                    hover:text-[#8F7746]
                                                "
                                            >
                                                <span
                                                    className="
                                                        flex
                                                        h-7
                                                        w-9
                                                        items-center
                                                        justify-center
                                                        rounded-md
                                                        bg-[#D2B87C]
                                                        text-[#20235A]
                                                        transition-colors
                                                        duration-300
                                                        group-hover:bg-[#20235A]
                                                        group-hover:text-white
                                                    "
                                                >
                                                    <Play
                                                        size={11}
                                                        fill="currentColor"
                                                    />
                                                </span>

                                                View Video Testimonial

                                                <ArrowRight size={14} />
                                            </a>
                                        </div>
                                    </article>
                                )
                            )}
                        </div>
                    </div>

                    {/* ==================================================
                        NEXT BUTTON
                    ================================================== */}

                    <button
                        type="button"
                        aria-label="Next testimonials"
                        onClick={goToNext}
                        disabled={currentPage === totalPages - 1}
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
                            text-[#20235A]
                            shadow-md
                            transition-all
                            duration-300
                            hover:border-[#D2B87C]
                            hover:text-[#8F7746]
                            disabled:cursor-not-allowed
                            disabled:opacity-30
                            sm:flex
                        "
                    >
                        <ChevronRight size={20} />

                        <span
                            className="
                                text-[9px]
                                font-semibold
                                uppercase
                                tracking-[0.14em]
                            "
                        >
                            Next
                        </span>
                    </button>
                </div>

                {/* ====================================================
                    MOBILE CONTROLS
                ==================================================== */}

                <div className="mt-6 flex items-center justify-center gap-3 sm:hidden">

                    <button
                        type="button"
                        aria-label="Previous testimonials"
                        onClick={goToPrevious}
                        disabled={currentPage === 0}
                        className="
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-slate-200
                            bg-white
                            text-[#20235A]
                            shadow-sm
                            transition-all
                            disabled:cursor-not-allowed
                            disabled:opacity-30
                        "
                    >
                        <ChevronLeft size={18} />
                    </button>

                    {/* Indicators */}

                    <div className="flex items-center gap-2">
                        {Array.from({ length: totalPages }).map(
                            (_, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    aria-label={`Go to testimonial group ${index + 1
                                        }`}
                                    onClick={() => goToPage(index)}
                                    className={`
                                        h-1.5
                                        rounded-full
                                        transition-all
                                        duration-300
                                        ${currentPage === index
                                            ? "w-8 bg-[#D2B87C]"
                                            : "w-1.5 bg-slate-300"
                                        }
                                    `}
                                />
                            )
                        )}
                    </div>

                    <button
                        type="button"
                        aria-label="Next testimonials"
                        onClick={goToNext}
                        disabled={currentPage === totalPages - 1}
                        className="
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-slate-200
                            bg-white
                            text-[#20235A]
                            shadow-sm
                            transition-all
                            disabled:cursor-not-allowed
                            disabled:opacity-30
                        "
                    >
                        <ChevronRight size={18} />
                    </button>
                </div>
                {/* ====================================================
                    DESKTOP INDICATORS
                ==================================================== */}
                <div className="mt-7 hidden items-center justify-center gap-2 sm:flex">
                    {Array.from({ length: totalPages }).map(
                        (_, index) => (
                            <button
                                key={index}
                                type="button"
                                aria-label={`Go to testimonial group ${index + 1
                                    }`}
                                onClick={() => goToPage(index)}
                                className={`
                                    h-1.5
                                    rounded-full
                                    transition-all
                                    duration-300
                                    ${currentPage === index
                                        ? "w-10 bg-[#D2B87C]"
                                        : "w-1.5 bg-slate-300 hover:bg-[#D2B87C]/60"
                                    }
                                `}
                            />
                        )
                    )}
                </div>

                {/* ====================================================
                    CTA
                ==================================================== */}

                <div className="m-0 flex justify-center pt-8">

                    <a
                        href="/media_gallery/news_and_events"
                        className="
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-[#D2B87C]
                            px-7
                            py-3.5
                            text-xs
                            font-semibold
                            uppercase
                            tracking-[0.12em]
                            text-[#8F7746]
                            transition-all
                            duration-300
                            hover:bg-[#D2B87C]
                            hover:text-[#20235A]
                            sm:px-8
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