import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
    ArrowRight,
    BriefcaseBusiness,
    Clock3,
    GraduationCap,
    Leaf,
    MapPin,
    Settings2,
    Trophy,
    Users,
} from "lucide-react";

import FutureSkill from "../../../public/images/events/upcomingeventone.jpg";
import OnamCelebration from "../../../public/images/events/onamceleb.webp";
import SportsMeet from "../../../public/images/events/sportsmeet.webp";
import WebDev from "../../../public/images/events/webdev.webp";
import Placement from "../../../public/images/events/placementdrive.webp";
import TreePlantation from "../../../public/images/events/treeplantation.webp";

/* ============================================================
   EVENTS
============================================================ */

const events = [
    {
        id: 1,
        day: "15",
        month: "SEP",
        category: "SEMINAR",
        title: "Future Skills for Next-Gen Engineers",
        time: "10:00 AM – 12:00 PM",
        location: "Main Auditorium",
        image: FutureSkill,
        icon: GraduationCap,
    },
    {
        id: 2,
        day: "18",
        month: "SEP",
        category: "CULTURAL",
        title: "Onam Celebration & Cultural Fest",
        time: "4:00 PM – 8:00 PM",
        location: "College Ground",
        image: OnamCelebration,
        icon: Users,
    },
    {
        id: 3,
        day: "22",
        month: "SEP",
        category: "SPORTS",
        title: "Inter-Department Sports Meet",
        time: "9:00 AM – 5:00 PM",
        location: "Sports Complex",
        image: SportsMeet,
        icon: Trophy,
    },
    {
        id: 4,
        day: "25",
        month: "SEP",
        category: "WORKSHOP",
        title: "Hands-on Web Development Workshop",
        time: "10:00 AM – 1:00 PM",
        location: "Computer Lab",
        image: WebDev,
        icon: Settings2,
    },
    {
        id: 5,
        day: "28",
        month: "SEP",
        category: "CAREER",
        title: "Placement Drive & Career Guidance",
        time: "9:00 AM – 4:00 PM",
        location: "Seminar Hall",
        image: Placement,
        icon: BriefcaseBusiness,
    },
    {
        id: 6,
        day: "30",
        month: "SEP",
        category: "SOCIAL",
        title: "Tree Plantation Drive",
        time: "8:00 AM – 11:00 AM",
        location: "Campus Garden",
        image: TreePlantation,
        icon: Leaf,
    },
];

/* ============================================================
   UPCOMING EVENTS SECTION
============================================================ */

const UpcomingEventsSection = () => {
    return (
        <section
            className="
                relative
                m-0
                overflow-hidden
                bg-[#fbfaf7]
                p-0
            "
        >
            {/* ========================================================
                SUBTLE CAMPUS LINE ART
            ======================================================== */}

            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    bottom-0
                    left-0
                    hidden
                    w-[43%]
                    max-w-[650px]
                    opacity-[0.16]
                    lg:block
                "
            >
                <svg
                    viewBox="0 0 700 360"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-auto w-full"
                >
                    <path
                        d="M20 330H650"
                        stroke="#c9922e"
                        strokeWidth="1"
                    />

                    <path
                        d="M60 330V190L145 135L230 190V330"
                        stroke="#c9922e"
                        strokeWidth="1"
                    />

                    <path
                        d="M95 330V205H195V330"
                        stroke="#c9922e"
                        strokeWidth="1"
                    />

                    <path
                        d="M270 330V160L355 105L440 160V330"
                        stroke="#c9922e"
                        strokeWidth="1"
                    />

                    <path
                        d="M305 330V180H405V330"
                        stroke="#c9922e"
                        strokeWidth="1"
                    />

                    <path
                        d="M470 330V200L530 155L590 200V330"
                        stroke="#c9922e"
                        strokeWidth="1"
                    />

                    <path
                        d="M495 330V215H565V330"
                        stroke="#c9922e"
                        strokeWidth="1"
                    />

                    <path
                        d="M110 190H180M320 160H390M500 200H560"
                        stroke="#c9922e"
                        strokeWidth="1"
                    />

                    <path
                        d="M40 330C65 305 80 300 105 330M205 330C225 305 245 300 265 330M430 330C450 305 465 300 485 330"
                        stroke="#c9922e"
                        strokeWidth="1"
                    />

                    <path
                        d="M15 345C120 325 205 325 300 345M300 345C400 325 500 325 680 345"
                        stroke="#c9922e"
                        strokeWidth="1"
                    />
                </svg>
            </div>

            {/* ========================================================
                MAIN CONTAINER
            ======================================================== */}

            <div
                className="
                    relative
                    z-10
                    m-0
                    mx-auto
                    max-w-[1500px]
                    px-5
                    py-0
                    sm:px-8
                    lg:px-12
                    xl:px-16
                "
            >
                <div
                    className="
                        grid
                        grid-cols-1
                        gap-12
                        lg:grid-cols-[0.88fr_1.62fr]
                        lg:items-center
                        lg:gap-14
                        xl:gap-20
                    "
                >
                    {/* =================================================
                        LEFT CONTENT
                    ================================================= */}

                    <div
                        className="
                            relative
                            m-0
                            p-0
                            lg:pr-4
                            xl:pr-8
                        "
                    >
                        {/* Section label */}

                        <div
                            className="
                                mb-6
                                flex
                                items-center
                                gap-4
                            "
                        >
                            <span
                                className="
                                    font-sans
                                    text-[15px]
                                    font-medium
                                    uppercase
                                    tracking-[0.16em]
                                    text-[#b67b17]
                                    sm:text-[17px]
                                "
                            >
                                Upcoming Events
                            </span>

                            <span
                                className="
                                    h-px
                                    w-20
                                    bg-[#c9922e]
                                    sm:w-24
                                "
                            />
                        </div>

                        {/* Main heading */}

                        <h2
                            className="
                                m-0
                                max-w-[520px]
                                font-serif
                                text-[43px]
                                font-medium
                                leading-[1.08]
                                tracking-[-0.025em]
                                text-[#10213b]
                                sm:text-[52px]
                                lg:text-[48px]
                                xl:text-[57px]
                            "
                        >
                            Mark Your Calendar
                            <br />
                            for Upcoming Campus
                            <br />
                            Happenings!
                        </h2>

                        {/* Decorative underline */}

                        <div
                            className="
                                my-7
                                h-[3px]
                                w-16
                                bg-[#c9922e]
                            "
                        />

                        {/* Description */}

                        <p
                            className="
                                m-0
                                max-w-[490px]
                                font-sans
                                text-[16px]
                                leading-[1.95]
                                text-[#26364c]
                                sm:text-[17px]
                            "
                        >
                            From academic seminars to cultural festivals,
                            sports events to workshops, there&apos;s always
                            something happening at NCERC. Stay informed
                            and be a part of our vibrant campus life.
                        </p>

                        {/* CTA */}

                        <Link
                            href="/events"
                            className="
                                group
                                mt-6
                                inline-flex
                                items-center
                                gap-7
                                rounded-full
                                border
                                border-[#c9922e]
                                bg-transparent
                                px-7
                                py-4
                                font-sans
                                text-[16px]
                                font-medium
                                text-[#b67b17]
                                transition-all
                                duration-300
                                hover:bg-[#c9922e]
                                hover:text-white
                                sm:px-8
                            "
                        >
                            <span>View All Events</span>

                            <ArrowRight
                                size={22}
                                strokeWidth={1.5}
                                className="
                                    transition-transform
                                    duration-300
                                    group-hover:translate-x-1
                                "
                            />
                        </Link>
                    </div>

                    {/* =================================================
                        EVENTS
                    ================================================= */}

                    <div className="min-w-0">
                        {/* ==================================================
                            MOBILE:
                            HORIZONTAL SCROLL

                            DESKTOP:
                            NORMAL GRID
                        ================================================== */}

                        <div
                            className="
                                flex
                                gap-5
                                overflow-x-auto
                                overflow-y-hidden
                                overscroll-x-contain
                                pb-2
                                snap-x
                                snap-mandatory
                                [-ms-overflow-style:none]
                                [scrollbar-width:none]
                                [&::-webkit-scrollbar]:hidden

                                sm:grid
                                sm:grid-cols-2
                                sm:gap-5
                                sm:overflow-visible
                                sm:pb-0
                                sm:snap-none

                                xl:grid-cols-3
                            "
                        >
                            {events.map((event) => {
                                const EventIcon = event.icon;

                                return (
                                    <article
                                        key={event.id}
                                        className="
                                            group
                                            min-w-[84%]
                                            shrink-0
                                            snap-start
                                            overflow-hidden
                                            rounded-[18px]
                                            border
                                            border-[#eeeae1]
                                            bg-white
                                            shadow-[0_5px_25px_rgba(18,33,59,0.06)]
                                            transition-all
                                            duration-500
                                            hover:-translate-y-1
                                            hover:shadow-[0_15px_40px_rgba(18,33,59,0.12)]

                                            sm:min-w-0
                                            sm:shrink
                                        "
                                    >
                                        {/* ==================================
                                            EVENT IMAGE
                                        ================================== */}

                                        <div
                                            className="
                                                relative
                                                mx-2
                                                mt-2
                                                h-[178px]
                                                overflow-hidden
                                                rounded-[13px]
                                                sm:h-[165px]
                                                xl:h-[178px]
                                            "
                                        >
                                            <Image
                                                src={event.image}
                                                alt={event.title}
                                                fill
                                                sizes="
                                                    (max-width: 639px) 84vw,
                                                    (max-width: 1279px) 50vw,
                                                    33vw
                                                "
                                                className="
                                                    object-cover
                                                    transition-transform
                                                    duration-700
                                                    group-hover:scale-[1.045]
                                                "
                                            />

                                            {/* Image overlay */}

                                            <div
                                                className="
                                                    absolute
                                                    inset-0
                                                    bg-gradient-to-t
                                                    from-[#07182b]/20
                                                    via-transparent
                                                    to-transparent
                                                "
                                            />

                                            {/* Date badge */}

                                            <div
                                                className="
                                                    absolute
                                                    bottom-[-1px]
                                                    left-3
                                                    flex
                                                    h-[70px]
                                                    w-[66px]
                                                    flex-col
                                                    items-center
                                                    justify-center
                                                    rounded-t-[14px]
                                                    border
                                                    border-[#d6a143]
                                                    bg-white
                                                    shadow-[0_4px_12px_rgba(0,0,0,0.08)]
                                                "
                                            >
                                                <span
                                                    className="
                                                        font-serif
                                                        text-[29px]
                                                        leading-none
                                                        text-[#b67b17]
                                                    "
                                                >
                                                    {event.day}
                                                </span>

                                                <span
                                                    className="
                                                        mt-1
                                                        font-sans
                                                        text-[11px]
                                                        font-semibold
                                                        tracking-[0.12em]
                                                        text-[#b67b17]
                                                    "
                                                >
                                                    {event.month}
                                                </span>
                                            </div>
                                        </div>

                                        {/* ==================================
                                            EVENT CONTENT
                                        ================================== */}

                                        <div
                                            className="
                                                px-5
                                                pb-5
                                                pt-5
                                                xl:px-5
                                                xl:pb-6
                                            "
                                        >
                                            {/* Category */}

                                            <div
                                                className="
                                                    mb-3
                                                    flex
                                                    items-center
                                                    gap-3
                                                "
                                            >
                                                <EventIcon
                                                    size={21}
                                                    strokeWidth={1.5}
                                                    className="text-[#c28a22]"
                                                />

                                                <span
                                                    className="
                                                        font-sans
                                                        text-[13px]
                                                        font-medium
                                                        uppercase
                                                        tracking-[0.12em]
                                                        text-[#b67b17]
                                                    "
                                                >
                                                    {event.category}
                                                </span>
                                            </div>

                                            {/* Title */}

                                            <h3
                                                className="
                                                    m-0
                                                    min-h-[58px]
                                                    font-serif
                                                    text-[22px]
                                                    font-medium
                                                    leading-[1.12]
                                                    tracking-[-0.015em]
                                                    text-[#10213b]
                                                    sm:text-[21px]
                                                    xl:text-[22px]
                                                "
                                            >
                                                {event.title}
                                            </h3>

                                            {/* Details */}

                                            <div
                                                className="
                                                    mt-5
                                                    space-y-3
                                                "
                                            >
                                                {/* Time */}

                                                <div
                                                    className="
                                                        flex
                                                        items-center
                                                        gap-3
                                                    "
                                                >
                                                    <Clock3
                                                        size={19}
                                                        strokeWidth={1.7}
                                                        className="
                                                            shrink-0
                                                            text-[#c28a22]
                                                        "
                                                    />

                                                    <span
                                                        className="
                                                            font-sans
                                                            text-[14px]
                                                            text-[#29415f]
                                                        "
                                                    >
                                                        {event.time}
                                                    </span>
                                                </div>

                                                {/* Location */}

                                                <div
                                                    className="
                                                        flex
                                                        items-center
                                                        gap-3
                                                    "
                                                >
                                                    <MapPin
                                                        size={20}
                                                        strokeWidth={1.7}
                                                        className="
                                                            shrink-0
                                                            text-[#c28a22]
                                                        "
                                                    />

                                                    <span
                                                        className="
                                                            font-sans
                                                            text-[14px]
                                                            text-[#29415f]
                                                        "
                                                    >
                                                        {event.location}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UpcomingEventsSection;