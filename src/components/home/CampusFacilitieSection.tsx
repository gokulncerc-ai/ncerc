import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    BookOpen,
    Dumbbell,
    FlaskConical,
    GraduationCap,
    Home,
    Users,
    UtensilsCrossed,
} from "lucide-react";

import CampusImage from "../../../public/images/campus_two.png";

/* ============================================================
   FACILITIES
============================================================ */

const facilities = [
    {
        icon: GraduationCap,
        label: "Academic\nFacilities",
    },
    {
        icon: FlaskConical,
        label: "Advanced\nLaboratories",
    },
    {
        icon: BookOpen,
        label: "Central\nLibrary",
    },
    {
        icon: Home,
        label: "Comfortable\nHostels",
    },
    {
        icon: Dumbbell,
        label: "Sports &\nFitness",
    },
    {
        icon: Users,
        label: "Student Activity\nSpaces",
    },
    {
        icon: UtensilsCrossed,
        label: "Campus\nAmenities",
    },
];

/* ============================================================
   CAMPUS FACILITIES SECTION
============================================================ */

export const CampusFacilitieSection = () => {
    return (
        <section
            className="
                relative
                m-0
                overflow-hidden
                bg-white
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
                    h-56
                    w-auto
                    text-gold-500/20
                    lg:block
                "
                fill="none"
            >
                <path
                    d="M40 260V90h60V60h40v30h60v40h40v40h60v100"
                    stroke="currentColor"
                    strokeWidth="1.5"
                />

                <path
                    d="M100 90h40M100 130h40M100 170h40M160 130h40M160 170h40M220 170h40"
                    stroke="currentColor"
                    strokeWidth="1.5"
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
                    grid
                    max-w-[1536px]
                    grid-cols-1
                    items-center
                    gap-12
                    px-5
                    py-0
                    sm:px-8
                    lg:grid-cols-2
                    lg:gap-16
                    lg:px-12
                    xl:px-16
                "
            >
                {/* ====================================================
                    IMAGE
                ==================================================== */}

                <div className="relative m-0 p-0">
                    {/* Dotted grid accent */}

                    <div
                        aria-hidden="true"
                        className="
                            absolute
                            -bottom-5
                            -left-5
                            hidden
                            h-24
                            w-24
                            sm:block
                        "
                        style={{
                            backgroundImage:
                                "radial-gradient(currentColor 1.5px, transparent 1.5px)",
                            backgroundSize: "10px 10px",
                            color: "#d9a441",
                        }}
                    />

                    {/* Corner brackets */}

                    <span
                        aria-hidden="true"
                        className="
                            absolute
                            -left-4
                            -top-4
                            hidden
                            h-16
                            w-16
                            rounded-tl-3xl
                            border-l-2
                            border-t-2
                            border-gold-500
                            sm:block
                        "
                    />

                    <span
                        aria-hidden="true"
                        className="
                            absolute
                            -bottom-4
                            -right-4
                            hidden
                            h-16
                            w-16
                            rounded-br-3xl
                            border-b-2
                            border-r-2
                            border-gold-500
                            sm:block
                        "
                    />

                    {/* Campus image */}

                    <div
                        className="
        relative
        m-0
        h-[360px]
        w-full
        overflow-hidden
        rounded-[28px]
        shadow-xl
        sm:h-[420px]
        lg:h-[480px]
    "
                    >
                        <Image
                            src={CampusImage}
                            alt="Students relaxing on the NCERC campus"
                            fill
                            priority
                            sizes="
            (min-width: 1280px) 45vw,
            (min-width: 1024px) 50vw,
            100vw
        "
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* ====================================================
                    CONTENT
                ==================================================== */}

                <div className="m-0 p-0">
                    {/* Section label */}

                    <div
                        className="
                            m-0
                            mb-5
                            flex
                            items-center
                            gap-3
                        "
                    >
                        <span
                            className="
                                font-sans
                                text-xs
                                font-semibold
                                uppercase
                                tracking-[0.2em]
                                text-gold-500
                            "
                        >
                            Campus Facilities
                        </span>

                        <span
                            className="
                                h-px
                                w-12
                                bg-gold-500
                            "
                        />
                    </div>

                    {/* Heading */}

                    <h2
                        className="
                            m-0
                            font-display
                            text-4xl
                            font-semibold
                            leading-tight
                            text-navy-950
                            sm:text-5xl
                        "
                    >
                        Enjoy, Learn &amp; Live
                        <br />
                        at NCERC
                    </h2>

                    {/* Decorative underline */}

                    <div
                        className="
                            my-6
                            h-1
                            w-16
                            bg-gold-500
                        "
                    />

                    {/* Description */}

                    <p
                        className="
                            m-0
                            max-w-xl
                            font-sans
                            text-base
                            leading-relaxed
                            text-slate-600
                        "
                    >
                        At NCERC, we believe that a great education goes
                        beyond the classroom. Our modern campus facilities
                        are designed to support your academic growth,
                        personal well-being and overall development &mdash;
                        helping you learn, connect and thrive.
                    </p>

                    {/* =================================================
                        FACILITIES
                    ================================================= */}

                    <div
                        className="
                            mt-8
                            grid
                            grid-cols-2
                            gap-y-7
                            sm:grid-cols-4
                        "
                    >
                        {facilities.map(
                            ({ icon: Icon, label }, index) => {
                                const isLastInRow =
                                    (index + 1) % 4 === 0;

                                const isLastItem =
                                    index === facilities.length - 1;

                                return (
                                    <div
                                        key={label}
                                        className={`
                                            px-2
                                            text-center
                                            sm:px-4
                                            ${!isLastInRow &&
                                                !isLastItem
                                                ? "sm:border-r sm:border-slate-200"
                                                : ""
                                            }
                                        `}
                                    >
                                        <Icon
                                            size={32}
                                            strokeWidth={1.5}
                                            className="
                                                mx-auto
                                                text-gold-500
                                            "
                                        />

                                        <p
                                            className="
                                                m-0
                                                mt-3
                                                whitespace-pre-line
                                                font-sans
                                                text-sm
                                                font-semibold
                                                leading-snug
                                                text-navy-950
                                            "
                                        >
                                            {label}
                                        </p>
                                    </div>
                                );
                            }
                        )}
                    </div>

                    {/* =================================================
                        CTA
                    ================================================= */}

                    <Link
                        href="/facilities"
                        className="
                            group
                            mt-7
                            inline-flex
                            items-center
                            gap-2
                            border-b-2
                            border-gold-500
                            pb-1
                            font-sans
                            text-sm
                            font-semibold
                            uppercase
                            tracking-wide
                            text-gold-500
                            transition-all
                            duration-300
                            hover:text-gold-400
                        "
                    >
                        <span>Explore Campus</span>

                        <ArrowRight
                            size={16}
                            className="
                                transition-transform
                                duration-300
                                group-hover:translate-x-1
                            "
                        />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CampusFacilitieSection;