"use client";

import React, { useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    Building2,
    Globe2,
    Star,
    Trophy,
    TrendingUp,
    Users,
    BriefcaseBusiness,
} from "lucide-react";

import Amazon from "../../../public/images/placements/amazon.png";
import Infosys from "../../../public/images/placements/infosys.png";
import Bosch from "../../../public/images/placements/bosch.png";
import Cognizant from "../../../public/images/placements/cognizant.png";
import Byjus from "../../../public/images/placements/byjus.png";
import Hgs from "../../../public/images/placements/hgs.png";
import Ust from "../../../public/images/placements/ust.png";
import Shriram from "../../../public/images/placements/shriram.png";
import Wipro from "../../../public/images/placements/wipro.png";
import Students from "../../../public/images/placements/students.jpg";

/* ============================================================
   RECRUITERS
============================================================ */

const recruiters: {
    logo: StaticImageData;
    name: string;
}[] = [
        {
            logo: Amazon,
            name: "Amazon",
        },
        {
            logo: Infosys,
            name: "Infosys",
        },
        {
            logo: Cognizant,
            name: "Cognizant",
        },
        {
            logo: Ust,
            name: "UST Global",
        },
        {
            logo: Wipro,
            name: "Wipro",
        },
        {
            logo: Bosch,
            name: "Bosch",
        },
        {
            logo: Byjus,
            name: "Byju's",
        },
        {
            logo: Hgs,
            name: "HGS",
        },
        {
            logo: Shriram,
            name: "Shriram Finance",
        },
    ];

/* ============================================================
   COUNT UP COMPONENT
============================================================ */

interface CountUpProps {
    end: number;
    suffix?: string;
    prefix?: string;
    duration?: number;
}

const CountUp = ({
    end,
    suffix = "",
    prefix = "",
    duration = 1800,
}: CountUpProps) => {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const ref = useRef<HTMLSpanElement | null>(null);

    useEffect(() => {
        const element = ref.current;

        if (!element) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasStarted) {
                    setHasStarted(true);
                }
            },
            {
                threshold: 0.35,
            }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [hasStarted]);

    useEffect(() => {
        if (!hasStarted) return;

        let startTime: number | null = null;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (startTime === null) {
                startTime = timestamp;
            }

            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);

            const easedProgress = 1 - Math.pow(1 - progress, 3);

            setCount(Math.floor(easedProgress * end));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animationFrame);
        };
    }, [hasStarted, end, duration]);

    return (
        <span ref={ref}>
            {prefix}
            {count.toLocaleString("en-IN")}
            {suffix}
        </span>
    );
};

/* ============================================================
   STATISTICS
============================================================ */

const placementStats = [
    {
        icon: Users,
        value: 92,
        suffix: "%",
        title: "Placement Rate",
        subtitle: "(UG & PG Combined)",
    },
    {
        icon: Building2,
        value: 250,
        suffix: "+",
        title: "Companies Visited",
        subtitle: "(Last 3 Years)",
    },
    {
        icon: BriefcaseBusiness,
        value: 650,
        suffix: "+",
        title: "Students Placed",
        subtitle: "(So Far)",
    },
    {
        icon: Star,
        value: 6.5,
        suffix: " LPA",
        prefix: "₹",
        title: "Highest Package",
        subtitle: "(2024 Batch)",
    },
];

/* ============================================================
   PLACEMENT SECTION
============================================================ */

const PlacementSection = () => {
    return (
        <section
            className="
                relative
                m-0
                overflow-hidden
                bg-[#fcfbf8]
                p-0
            "
        >
            {/* ========================================================
                MAIN CONTAINER
            ======================================================== */}

            <div
                className="
                    relative
                    z-10
                    m-0
                    mx-auto
                    max-w-[1450px]
                    px-5
                    sm:px-8
                    lg:px-10
                    xl:px-12
                "
            >
                {/* ====================================================
                    TOP CONTENT AREA
                ==================================================== */}

                <div
                    className="
                        m-0
                        grid
                        grid-cols-1
                        gap-8
                        lg:grid-cols-[1.08fr_0.78fr_0.98fr]
                        lg:items-center
                        lg:gap-6
                        xl:grid-cols-[1.08fr_0.78fr_0.98fr]
                        xl:gap-8
                    "
                >
                    {/* =================================================
                        LEFT: HEADING + DESCRIPTION
                    ================================================= */}

                    <div className="relative m-0">
                        {/* Section label */}
                        <div
                            className="
                                m-0
                                mb-5
                                flex
                                items-center
                                gap-4
                            "
                        >
                            <span className="h-[2px] w-12 bg-[#c9932f]" />

                            <span
                                className="
                                    m-0
                                    inline-block
                                    font-sans
                                    text-[14px]
                                    font-medium
                                    uppercase
                                    tracking-[0.15em]
                                    text-[#b47a15]
                                    sm:text-[15px]
                                "
                            >
                                Our Students – Placement &amp; Career Success
                            </span>

                            <span
                                className="
                                    hidden
                                    h-[2px]
                                    w-20
                                    bg-[#c9932f]
                                    xl:block
                                "
                            />
                        </div>

                        {/* Main heading */}
                        <h2
                            className="
                                m-0
                                max-w-[650px]
                                font-serif
                                text-[48px]
                                font-medium
                                leading-[1.08]
                                tracking-[-0.035em]
                                text-[#10213b]
                                sm:text-[58px]
                                lg:text-[49px]
                                xl:text-[61px]
                            "
                        >
                            Our Students Are
                            <br />
                            Making Their Mark
                        </h2>

                        {/* Gold underline */}
                        <div className="my-6 flex items-center">
                            <span className="h-[3px] w-12 bg-[#c9932f]" />
                            <span className="h-[3px] w-8 bg-transparent" />
                        </div>

                        {/* Description */}
                        <p
                            className="
                                m-0
                                max-w-[580px]
                                font-sans
                                text-[16px]
                                leading-[1.85]
                                text-[#29415f]
                                sm:text-[17px]
                                xl:text-[18px]
                            "
                        >
                            At NCERC, we believe in turning potential into
                            progress. Our students have been placed in reputed
                            companies across diverse industries, carrying
                            forward the values and excellence of our
                            institution.
                        </p>

                        {/* CTA */}
                        <Link
                            href="/placements"
                            className="
                                group
                                mt-6
                                inline-flex
                                items-center
                                gap-6
                                rounded-full
                                border
                                border-[#c9932f]
                                bg-transparent
                                px-6
                                py-4
                                font-sans
                                text-[15px]
                                font-medium
                                text-[#b47a15]
                                transition-all
                                duration-300
                                hover:bg-[#c9932f]
                                hover:text-white
                                sm:px-7
                                sm:text-[16px]
                            "
                        >
                            <span>View Placement Details</span>

                            <ArrowRight
                                size={21}
                                strokeWidth={1.6}
                                className="
                                    transition-transform
                                    duration-300
                                    group-hover:translate-x-1
                                "
                            />
                        </Link>
                    </div>

                    {/* =================================================
                        MIDDLE: STATISTICS
                    ================================================= */}

                    <div
                        className="
                            m-0
                            rounded-[16px]
                            border
                            border-[#eee9df]
                            bg-white/90
                            px-6
                            py-5
                            shadow-[0_8px_30px_rgba(18,33,59,0.06)]
                            backdrop-blur-sm
                            sm:px-7
                            lg:px-5
                            xl:px-7
                        "
                    >
                        {placementStats.map((stat, index) => {
                            const Icon = stat.icon;

                            return (
                                <div
                                    key={stat.title}
                                    className={`
                                        flex
                                        items-center
                                        gap-4
                                        py-4
                                        ${index !==
                                            placementStats.length - 1
                                            ? "border-b border-[#e8e4dc]"
                                            : ""
                                        }
                                    `}
                                >
                                    {/* Icon */}
                                    <div
                                        className="
                                            flex
                                            h-[58px]
                                            w-[58px]
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-[#fbf4e5]
                                            text-[#c38b25]
                                        "
                                    >
                                        <Icon
                                            size={29}
                                            strokeWidth={1.45}
                                        />
                                    </div>

                                    {/* Value + label */}
                                    <div className="min-w-0">
                                        <div
                                            className="
                                                font-sans
                                                text-[29px]
                                                font-medium
                                                leading-none
                                                tracking-[-0.02em]
                                                text-[#10213b]
                                                sm:text-[30px]
                                            "
                                        >
                                            <CountUp
                                                end={stat.value}
                                                prefix={stat.prefix}
                                                suffix={stat.suffix}
                                            />
                                        </div>

                                        <p
                                            className="
                                                m-0
                                                mt-1
                                                font-sans
                                                text-[15px]
                                                leading-tight
                                                text-[#29415f]
                                            "
                                        >
                                            {stat.title}
                                        </p>

                                        <p
                                            className="
                                                m-0
                                                mt-1
                                                font-sans
                                                text-[12px]
                                                leading-tight
                                                text-[#536783]
                                            "
                                        >
                                            {stat.subtitle}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* =================================================
                        RIGHT: STUDENT IMAGE
                    ================================================= */}

                    <div className="relative m-0">
                        {/* Gold decorative line */}
                        <div
                            aria-hidden="true"
                            className="
                                pointer-events-none
                                absolute
                                -bottom-5
                                -right-5
                                h-40
                                w-24
                                rounded-br-[28px]
                                border-b
                                border-r
                                border-[#c9932f]
                                sm:-right-6
                            "
                        />

                        <div
                            className="
                                relative
                                m-0
                                h-[390px]
                                overflow-hidden
                                rounded-[15px]
                                sm:h-[440px]
                                lg:h-[405px]
                                xl:h-[440px]
                            "
                        >
                            <Image
                                src={Students}
                                alt="NCERC students"
                                fill
                                priority
                                sizes="
                                    (max-width: 640px) 100vw,
                                    (max-width: 1024px) 50vw,
                                    33vw
                                "
                                className="object-cover"
                            />

                            {/* Image subtle overlay */}
                            <div
                                className="
                                    absolute
                                    inset-0
                                    bg-gradient-to-t
                                    from-[#07182b]/25
                                    via-transparent
                                    to-transparent
                                "
                            />

                            {/* Handwritten-style message */}
                            <div
                                className="
                                    absolute
                                    right-6
                                    top-5
                                    max-w-[100px]
                                    text-right
                                    font-serif
                                    text-[25px]
                                    italic
                                    leading-[0.95]
                                    text-white
                                    drop-shadow-[0_2px_3px_rgba(0,0,0,0.25)]
                                    sm:right-7
                                    sm:top-6
                                    sm:text-[28px]
                                "
                            >
                                Dream
                                <br />
                                Learn
                                <br />
                                Grow

                                <span className="mt-1 block text-[23px]">
                                    ~
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ====================================================
                    TOP RECRUITERS
                ==================================================== */}

                <div className="relative m-0 mt-8 sm:mt-10">
                    <div className="mb-4 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <span className="h-[2px] w-11 bg-[#c9932f]" />

                            <span
                                className="
                                    font-sans
                                    text-[14px]
                                    font-medium
                                    uppercase
                                    tracking-[0.15em]
                                    text-[#b47a15]
                                "
                            >
                                Top Recruiters
                            </span>
                        </div>

                        <span
                            className="
                                hidden
                                font-sans
                                text-[12px]
                                font-medium
                                uppercase
                                tracking-[0.12em]
                                text-[#b47a15]
                                sm:block
                            "
                        >
                            And Many More →
                        </span>
                    </div>

                    {/* Recruiter logos */}
                    <div
                        className="
                            grid
                            grid-cols-2
                            gap-2
                            sm:grid-cols-3
                            md:grid-cols-5
                            lg:grid-cols-9
                            lg:gap-2
                            xl:gap-3
                        "
                    >
                        {recruiters.map((recruiter) => (
                            <div
                                key={recruiter.name}
                                className="
                                    flex
                                    h-[92px]
                                    items-center
                                    justify-center
                                    rounded-[9px]
                                    border
                                    border-[#e8e5df]
                                    bg-white
                                    px-4
                                    shadow-[0_3px_12px_rgba(18,33,59,0.035)]
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                    hover:shadow-[0_8px_20px_rgba(18,33,59,0.08)]
                                "
                            >
                                <Image
                                    src={recruiter.logo}
                                    alt={recruiter.name}
                                    width={145}
                                    height={60}
                                    className="
                                        max-h-[53px]
                                        w-auto
                                        max-w-[90%]
                                        object-contain
                                    "
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* ====================================================
                    KEY PLACEMENT HIGHLIGHTS
                ==================================================== */}

                <div
                    className="
                        relative
                        m-0
                        mt-5
                        overflow-hidden
                        rounded-[15px]
                        border
                        border-[#f0eadf]
                        bg-[#faf7f0]
                        px-5
                        py-7
                        sm:px-7
                        lg:px-9
                        xl:px-10
                    "
                >
                    {/* Very subtle background */}
                    <div
                        aria-hidden="true"
                        className="
                            pointer-events-none
                            absolute
                            right-0
                            top-0
                            h-full
                            w-[30%]
                            opacity-20
                        "
                    >
                        <svg
                            viewBox="0 0 300 180"
                            fill="none"
                            className="h-full w-full"
                        >
                            <path
                                d="M20 160L100 100L145 130L215 60L280 20"
                                stroke="#c9932f"
                                strokeWidth="1"
                            />

                            <path
                                d="M20 175L100 115L145 145L215 75L280 35"
                                stroke="#c9932f"
                                strokeWidth="1"
                            />
                        </svg>
                    </div>

                    <div
                        className="
                            relative
                            grid
                            grid-cols-1
                            lg:grid-cols-[0.95fr_1.05fr]
                        "
                    >
                        {/* Heading block */}
                        <div
                            className="
                                flex
                                items-center
                                gap-5
                                border-b
                                border-[#e2d9c9]
                                pb-6
                                lg:border-b-0
                                lg:border-r
                                lg:pb-0
                                lg:pr-8
                                xl:pr-12
                            "
                        >
                            <div
                                className="
                                    flex
                                    h-[78px]
                                    w-[78px]
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-white
                                    text-[#c38b25]
                                    shadow-[0_4px_15px_rgba(18,33,59,0.04)]
                                "
                            >
                                <Trophy
                                    size={43}
                                    strokeWidth={1.35}
                                />
                            </div>

                            <div>
                                <h3
                                    className="
                                        m-0
                                        font-serif
                                        text-[28px]
                                        font-medium
                                        leading-[1.15]
                                        text-[#10213b]
                                        sm:text-[31px]
                                    "
                                >
                                    Key Placement
                                    <br />
                                    Highlights
                                </h3>
                            </div>
                        </div>

                        {/* Highlights */}
                        <div
                            className="
                                grid
                                grid-cols-1
                                divide-y
                                divide-[#e2d9c9]
                                pt-6
                                sm:grid-cols-2
                                sm:divide-x
                                sm:divide-y-0
                                lg:grid-cols-4
                                lg:pt-0
                            "
                        >
                            {/* Highlight 1 */}
                            <div
                                className="
                                    flex
                                    gap-4
                                    px-0
                                    py-5
                                    sm:px-6
                                    sm:py-0
                                    lg:px-6
                                    xl:px-8
                                "
                            >
                                <Building2
                                    size={32}
                                    strokeWidth={1.35}
                                    className="shrink-0 text-[#c38b25]"
                                />

                                <div>
                                    <p
                                        className="
                                            m-0
                                            font-sans
                                            text-[14px]
                                            leading-[1.55]
                                            text-[#10213b]
                                        "
                                    >
                                        Students Placed in
                                        <br />
                                        Top MNCs &amp; Fortune 500
                                        <br />
                                        Companies
                                    </p>
                                </div>
                            </div>

                            {/* Highlight 2 */}
                            <div
                                className="
                                    flex
                                    gap-4
                                    px-0
                                    py-5
                                    sm:px-6
                                    sm:py-0
                                    lg:px-6
                                    xl:px-8
                                "
                            >
                                <Users
                                    size={32}
                                    strokeWidth={1.35}
                                    className="shrink-0 text-[#c38b25]"
                                />

                                <div>
                                    <p
                                        className="
                                            m-0
                                            font-sans
                                            text-[14px]
                                            leading-[1.55]
                                            text-[#10213b]
                                        "
                                    >
                                        Strong Industry Ties
                                        <br />
                                        &amp; Regular Recruitment
                                        <br />
                                        Drives
                                    </p>
                                </div>
                            </div>

                            {/* Highlight 3 */}
                            <div
                                className="
                                    flex
                                    gap-4
                                    px-0
                                    py-5
                                    sm:px-6
                                    sm:py-0
                                    lg:px-6
                                    xl:px-8
                                "
                            >
                                <TrendingUp
                                    size={32}
                                    strokeWidth={1.35}
                                    className="shrink-0 text-[#c38b25]"
                                />

                                <div>
                                    <p
                                        className="
                                            m-0
                                            font-sans
                                            text-[14px]
                                            leading-[1.55]
                                            text-[#10213b]
                                        "
                                    >
                                        Growing Packages
                                        <br />
                                        &amp; Career Opportunities
                                        <br />
                                        Every Year
                                    </p>
                                </div>
                            </div>

                            {/* Highlight 4 */}
                            <div
                                className="
                                    flex
                                    gap-4
                                    px-0
                                    py-5
                                    sm:px-6
                                    sm:py-0
                                    lg:px-6
                                    xl:px-8
                                "
                            >
                                <Globe2
                                    size={32}
                                    strokeWidth={1.35}
                                    className="shrink-0 text-[#c38b25]"
                                />

                                <div>
                                    <p
                                        className="
                                            m-0
                                            font-sans
                                            text-[14px]
                                            leading-[1.55]
                                            text-[#10213b]
                                        "
                                    >
                                        Alumni Network Across
                                        <br />
                                        India &amp; Abroad
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlacementSection;