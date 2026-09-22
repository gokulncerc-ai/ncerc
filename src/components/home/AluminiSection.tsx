import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    Lightbulb,
    Play,
    Rocket,
    Users,
} from "lucide-react";

import AluminiSpotLight from "../../../public/images/alumins/alumini.png";
import AluminiVedios from "../../../public/images/alumins/vedioalumini.png";
import AluminiImage from "../../../public/images/alumins/vedioalumini_two.png";

/* ============================================================
   ALUMNI STATS
============================================================ */

const glanceStats = [
    {
        icon: Users,
        prefix: null,
        value: "500+",
        suffix: "Alumni\nRegistered",
    },
    {
        icon: Rocket,
        prefix: "Founders of",
        value: "30+",
        suffix: "Startups",
    },
    {
        icon: Lightbulb,
        prefix: "Innovators in",
        value: "100+",
        suffix: "Companies",
    },
];

/* ============================================================
   CONTRIBUTIONS
============================================================ */

const contributions = [
    {
        title: "Donation to new labs to New Labs in Modalment",
        date: "11 Jul, 2023",
    },
    {
        title: "Guest Lectures of founed in Nehunu Admiesion (NCERC...",
        date: "17 Jul, 2023",
    },
    {
        title: "Guest Lectures of foundetd of forent Campus in Dramm...",
        date: "May 22, 2023",
    },
];

/* ============================================================
   ALUMNI SECTION
============================================================ */

export default function AluminiSection() {
    return (
        <section
            className="
                relative
                m-0
                overflow-hidden
                bg-[#FAF7F2]
                p-0
            "
        >
            {/* ========================================================
                FAINT BUILDING LINE ART
            ======================================================== */}

            <svg
                aria-hidden="true"
                viewBox="0 0 400 260"
                className="
                    pointer-events-none
                    absolute
                    bottom-0
                    right-0
                    hidden
                    h-64
                    w-auto
                    text-[#C59B27]/20
                    lg:block
                "
                fill="none"
            >
                <path
                    d="M40 260V90h60V60h40v30h60v40h40v40h60v100"
                    stroke="currentColor"
                    strokeWidth="1.2"
                />

                <path
                    d="M100 90h40M100 130h40M100 170h40M160 130h40M160 170h40M220 170h40"
                    stroke="currentColor"
                    strokeWidth="1.2"
                />
            </svg>

            {/* ========================================================
                MAIN CONTAINER
            ======================================================== */}

            <div
                className="
                    relative
                    z-10
                    m-0
                    mx-auto
                    max-w-7xl
                    px-5
                    py-0
                    sm:px-8
                    lg:px-8
                "
            >
                {/* ====================================================
                    HEADER
                ==================================================== */}

                <div className="m-0 max-w-3xl">
                    {/* Section label */}

                    <div
                        className="
                            m-0
                            mb-4
                            flex
                            items-center
                            gap-3
                        "
                    >
                        <span
                            className="
                                font-sans
                                text-xs
                                font-bold
                                uppercase
                                tracking-[0.2em]
                                text-[#C59B27]
                            "
                        >
                            NCERC Alumni
                        </span>

                        <span
                            className="
                                h-px
                                w-16
                                bg-[#C59B27]/70
                            "
                        />
                    </div>

                    {/* Heading */}

                    <h2
                        className="
                            m-0
                            font-serif
                            text-4xl
                            font-normal
                            leading-tight
                            tracking-tight
                            text-navy-950
                            sm:text-5xl
                            lg:text-[2.75rem]
                        "
                    >
                        A Legacy of Excellence &amp; Innovation
                    </h2>

                    {/* Description */}

                    <p
                        className="
                            m-0
                            mt-3
                            max-w-md
                            font-sans
                            text-xs
                            leading-relaxed
                            text-slate-600
                            sm:text-sm
                        "
                    >
                        At NCERC, we take immense pride in our global
                        community of alumni, who are driving positive change
                        and innovation in diverse fields. Their achievements
                        are a testament to our academic excellence.
                    </p>
                </div>

                {/* ====================================================
                    MAIN CONTENT
                ==================================================== */}

                <div
                    className="
                        m-0
                        mt-10
                        grid
                        grid-cols-1
                        gap-10
                        lg:grid-cols-12
                        lg:gap-8
                    "
                >
                    {/* =================================================
                        LEFT COLUMN
                    ================================================= */}

                    <div
                        className="
                            relative
                            m-0
                            flex
                            flex-col
                            justify-between
                            lg:col-span-5
                        "
                    >
                        {/* Top-left gold accent */}

                        <div
                            aria-hidden="true"
                            className="
                                absolute
                                -left-4
                                -top-4
                                z-10
                                hidden
                                h-16
                                w-16
                                rounded-tl-3xl
                                border-l-2
                                border-t-2
                                border-[#C59B27]
                                sm:block
                            "
                        />

                        {/* Bottom-right gold frame */}

                        <div
                            aria-hidden="true"
                            className="
                                absolute
                                -bottom-4
                                -right-2
                                z-0
                                hidden
                                h-48
                                w-48
                                rounded-br-3xl
                                border-b-2
                                border-r-2
                                border-[#C59B27]/70
                                sm:block
                            "
                        />

                        {/* Top-right dotted accent */}

                        <div
                            aria-hidden="true"
                            className="
                                pointer-events-none
                                absolute
                                right-4
                                top-2
                                hidden
                                h-16
                                w-24
                                sm:block
                            "
                            style={{
                                backgroundImage:
                                    "radial-gradient(#C59B27 1.5px, transparent 1.5px)",
                                backgroundSize: "10px 10px",
                                opacity: 0.45,
                            }}
                        />

                        {/* Bottom-left dotted accent */}

                        <div
                            aria-hidden="true"
                            className="
                                pointer-events-none
                                absolute
                                -bottom-8
                                -left-6
                                hidden
                                h-16
                                w-24
                                sm:block
                            "
                            style={{
                                backgroundImage:
                                    "radial-gradient(#C59B27 1.5px, transparent 1.5px)",
                                backgroundSize: "10px 10px",
                                opacity: 0.45,
                            }}
                        />

                        {/* Spotlight content */}

                        <div
                            className="
                                relative
                                z-10
                                grid
                                grid-cols-1
                                gap-6
                                sm:grid-cols-12
                                sm:items-center
                            "
                        >
                            {/* Spotlight image */}

                            <div
                                className="
                                    relative
                                    overflow-hidden
                                    rounded-2xl
                                    bg-slate-900
                                    shadow-xl
                                    sm:col-span-6
                                "
                            >
                                <div
                                    className="
                                        relative
                                        aspect-[3/4]
                                        w-full
                                    "
                                >
                                    <Image
                                        src={AluminiSpotLight}
                                        alt="Rajesh Kumar, Alumnus of the Year"
                                        fill
                                        priority
                                        sizes="
                                            (max-width: 640px) 100vw,
                                            300px
                                        "
                                        className="
                                            object-cover
                                            object-top
                                        "
                                    />
                                </div>
                            </div>

                            {/* Spotlight information */}

                            <div
                                className="
                                    flex
                                    flex-col
                                    justify-center
                                    sm:col-span-6
                                    sm:pl-2
                                "
                            >
                                <h3
                                    className="
                                        m-0
                                        font-serif
                                        text-2xl
                                        font-semibold
                                        leading-tight
                                        text-navy-950
                                        sm:text-3xl
                                    "
                                >
                                    Alumni
                                    <br />
                                    Spotlight
                                </h3>

                                <div
                                    className="
                                        mt-4
                                        font-sans
                                        text-sm
                                        leading-relaxed
                                        text-slate-800
                                    "
                                >
                                    <p
                                        className="
                                            m-0
                                            font-bold
                                            uppercase
                                            tracking-wide
                                            text-navy-950
                                        "
                                    >
                                        ALUMNUS OF THE YEAR
                                    </p>

                                    <p
                                        className="
                                            m-0
                                            mt-1
                                            text-slate-700
                                        "
                                    >
                                        - Rajesh Kumar, Tech Lead, Google.
                                        Awarded for pioneering work in AI.
                                    </p>
                                </div>

                                <div className="mt-5">
                                    <Link
                                        href="/alumni"
                                        className="
                                            inline-flex
                                            items-center
                                            rounded-xl
                                            border
                                            border-[#C59B27]
                                            bg-[#FAF7F2]
                                            px-5
                                            py-2.5
                                            font-sans
                                            text-xs
                                            font-bold
                                            uppercase
                                            tracking-wider
                                            text-[#9E7A1B]
                                            shadow-sm
                                            transition-all
                                            duration-300
                                            hover:bg-[#C59B27]
                                            hover:text-white
                                        "
                                    >
                                        READ STORY
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* =================================================
                        MIDDLE COLUMN
                    ================================================= */}

                    <div
                        className="
                            m-0
                            flex
                            flex-col
                            justify-between
                            lg:col-span-4
                            lg:pl-2
                        "
                    >
                        {/* Alumni at a glance */}

                        <div className="m-0">
                            <h3
                                className="
                                    m-0
                                    font-serif
                                    text-2xl
                                    font-semibold
                                    text-navy-950
                                "
                            >
                                Our Alumni at a Glance
                            </h3>

                            <div
                                className="
                                    mt-4
                                    grid
                                    grid-cols-3
                                    divide-x
                                    divide-slate-300/80
                                    text-center
                                "
                            >
                                {glanceStats.map(
                                    ({
                                        icon: Icon,
                                        prefix,
                                        value,
                                        suffix,
                                    }) => (
                                        <div
                                            key={value}
                                            className="
                                                flex
                                                flex-col
                                                items-center
                                                px-2
                                                first:pl-0
                                                last:pr-0
                                            "
                                        >
                                            <Icon
                                                size={28}
                                                strokeWidth={1.3}
                                                className="text-[#C59B27]"
                                            />

                                            {prefix && (
                                                <p
                                                    className="
                                                        m-0
                                                        mt-1
                                                        font-sans
                                                        text-xs
                                                        font-medium
                                                        text-slate-700
                                                    "
                                                >
                                                    {prefix}
                                                </p>
                                            )}

                                            <p
                                                className={`
                                                    m-0
                                                    font-display
                                                    font-extrabold
                                                    text-navy-950
                                                    ${prefix
                                                        ? "text-xl sm:text-2xl"
                                                        : "mt-1 text-2xl sm:text-3xl"
                                                    }
                                                `}
                                            >
                                                {value}
                                            </p>

                                            <p
                                                className="
                                                    m-0
                                                    whitespace-pre-line
                                                    font-sans
                                                    text-xs
                                                    font-medium
                                                    leading-snug
                                                    text-slate-700
                                                "
                                            >
                                                {suffix}
                                            </p>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>

                        {/* =================================================
                            ALUMNI EXPERIENCES
                        ================================================= */}

                        <div
                            className="
                                relative
                                m-0
                                mt-8
                            "
                        >
                            {/* Gold bracket accents */}

                            <div
                                aria-hidden="true"
                                className="
                                    absolute
                                    -left-3
                                    -top-3
                                    h-8
                                    w-12
                                    rounded-tl-xl
                                    border-l-2
                                    border-t-2
                                    border-[#C59B27]
                                "
                            />

                            <div
                                aria-hidden="true"
                                className="
                                    absolute
                                    -bottom-3
                                    -right-2
                                    h-16
                                    w-16
                                    rounded-br-2xl
                                    border-b-2
                                    border-r-2
                                    border-[#C59B27]
                                "
                            />

                            <h3
                                className="
                                    m-0
                                    font-serif
                                    text-2xl
                                    font-semibold
                                    text-navy-950
                                "
                            >
                                Alumni experiences
                            </h3>

                            {/* Video thumbnails */}

                            <div
                                className="
                                    relative
                                    mt-4
                                    grid
                                    grid-cols-2
                                    gap-3
                                "
                            >
                                {[AluminiVedios, AluminiImage].map(
                                    (src, index) => (
                                        <div
                                            key={index}
                                            className="
                                                relative
                                                aspect-[16/10]
                                                overflow-hidden
                                                rounded-xl
                                                shadow-md
                                            "
                                        >
                                            <Image
                                                src={src}
                                                alt="Alumni video experience thumbnail"
                                                fill
                                                sizes="200px"
                                                className="object-cover"
                                            />

                                            {/* Progress bar */}

                                            <div
                                                className="
                                                    absolute
                                                    inset-x-0
                                                    bottom-0
                                                    h-1
                                                    bg-white/30
                                                "
                                            >
                                                <div
                                                    className="
                                                        h-full
                                                        w-2/3
                                                        bg-[#C59B27]
                                                    "
                                                />
                                            </div>
                                        </div>
                                    )
                                )}

                                {/* Play button */}

                                <button
                                    type="button"
                                    aria-label="Play alumni experience video"
                                    className="
                                        absolute
                                        left-1/2
                                        top-1/2
                                        flex
                                        h-12
                                        w-12
                                        -translate-x-1/2
                                        -translate-y-1/2
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-[#C59B27]
                                        text-white
                                        shadow-lg
                                        transition-transform
                                        duration-300
                                        hover:scale-110
                                    "
                                >
                                    <Play
                                        size={18}
                                        fill="currentColor"
                                        className="ml-0.5"
                                    />
                                </button>
                            </div>

                            {/* Quote */}

                            <blockquote
                                className="
                                    m-0
                                    mt-5
                                    text-center
                                    font-serif
                                    text-sm
                                    italic
                                    leading-relaxed
                                    text-navy-950
                                    sm:text-base
                                "
                            >
                                &ldquo;My gnlunl we has been the e roaching
                                challenge in NCERC osa it strategy, and
                                innovation in chaking fortusty.&rdquo;
                            </blockquote>

                            <div className="mt-2 text-center">
                                <p
                                    className="
                                        m-0
                                        font-sans
                                        text-xs
                                        font-bold
                                        text-[#C59B27]
                                    "
                                >
                                    Another Alumna
                                </p>

                                <p
                                    className="
                                        m-0
                                        font-sans
                                        text-xs
                                        text-slate-500
                                    "
                                >
                                    Class 3 - Alumna
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* =================================================
                        RIGHT COLUMN
                    ================================================= */}

                    <div
                        className="
                            m-0
                            flex
                            flex-col
                            self-start
                            border-slate-200/80
                            lg:col-span-3
                            lg:border-l
                            lg:pl-8
                        "
                    >
                        <h3
                            className="
                                m-0
                                font-serif
                                text-2xl
                                font-semibold
                                leading-snug
                                text-navy-950
                            "
                        >
                            Recent
                            <br />
                            Contributions
                            <br />
                            &amp; Success
                        </h3>

                        <ul
                            className="
                                m-0
                                mt-4
                                flex
                                list-none
                                flex-col
                                justify-start
                                divide-y
                                divide-slate-200/80
                                p-0
                            "
                        >
                            {contributions.map(({ title, date }) => (
                                <li
                                    key={title}
                                    className="
                                        py-3
                                        first:pt-0
                                        last:pb-0
                                    "
                                >
                                    <p
                                        className="
                                            m-0
                                            cursor-pointer
                                            font-sans
                                            text-sm
                                            font-medium
                                            leading-snug
                                            text-navy-950
                                            transition-colors
                                            hover:text-[#C59B27]
                                        "
                                    >
                                        {title}
                                    </p>

                                    <p
                                        className="
                                            m-0
                                            mt-1
                                            font-sans
                                            text-xs
                                            font-semibold
                                            text-slate-400
                                        "
                                    >
                                        {date}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* ====================================================
                    BOTTOM CTA
                ==================================================== */}
                <div
                    className="m-0 flex justify-center pt-16"
                >
                    <Link
                        href="/alumni"
                        className="inline-flex items-center gap-3 rounded-xl bg-[#061A2E] px-8
                        py-4 font-sans text-xs font-bold uppercase
                        tracking-wider text-[#C59B27] shadow-xl
                        transition-all duration-300 hover:bg-[#0A2540] hover:shadow-2xl"
                    >
                        <span>JOIN THE ALUMNI NETWORK</span>
                        <ArrowRight size={16} />
                    </Link>
                </div>

            </div>
        </section>
    );
}