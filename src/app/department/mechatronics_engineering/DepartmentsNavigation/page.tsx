"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
    ChevronDown,
    ChevronRight,
    Menu,
    X,
    Compass,
} from "lucide-react";

type NavigationItem = {
    label: string;
    href: string;
    active?: boolean;
};

interface InnerHeaderProps {
    activeTab?: string;
}

const BASE_PATH = "/department/mechatronics_engineering";

const navigationItems: NavigationItem[] = [
    {
        label: "About",
        href: `${BASE_PATH} `,
    },
    {
        label: "HOD Desk",
        href: `${BASE_PATH}/hod_desk`,
    },
    {
        label: "Career Scope",
        href: `${BASE_PATH}/career_scope`,
    },
    {
        label: "Facilities",
        href: `${BASE_PATH}/facilities`,
    },
    {
        label: "Activities",
        href: `${BASE_PATH}/activities`,
    },
    {
        label: "Achievements",
        href: `${BASE_PATH}/achievements`,
    },
    {
        label: "Academic Excellence",
        href: `${BASE_PATH}/academic_excellence`,
    },
    {
        label: "Association",
        href: `${BASE_PATH}/achievements`,
    },
    {
        label: "E-bulletin",
        href: `${BASE_PATH}/achievements`,
    },
    {
        label: "Faculty Profile",
        href: `${BASE_PATH}/faculty_profile`,
    },
    {
        label: "E-Resources",
        href: `${BASE_PATH}/achievements`,
    },
    {
        label: "Teaching & Learning Process",
        href: `${BASE_PATH}/tlp`,
    },
    {
        label: "Syllabus",
        href: `${BASE_PATH}/syllabus`,
    },
    {
        label: "Placement",
        href: `${BASE_PATH}/achievements`,
    },
    {
        label: "Industry Connect",
        href: `${BASE_PATH}/achievements`,
    },
];

export default function InnerHeader({
    activeTab = "About",
}: InnerHeaderProps) {
    const [mobileOpen, setMobileOpen] = useState(false);
    const navigationRef = useRef<HTMLDivElement>(null);

    const isActive = (item: NavigationItem) =>
        item.label.toLowerCase() === activeTab.toLowerCase();

    const activeItem =
        navigationItems.find((item) => isActive(item)) ??
        navigationItems[0];

    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setMobileOpen(false);
            }
        };

        const handleClickOutside = (event: MouseEvent) => {
            if (
                navigationRef.current &&
                !navigationRef.current.contains(event.target as Node)
            ) {
                setMobileOpen(false);
            }
        };

        document.addEventListener("keydown", handleEscape);
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );
        };
    }, []);

    useEffect(() => {
        setMobileOpen(false);
    }, [activeTab]);

    return (
        <section
            ref={navigationRef}
            className="relative z-40 border-b border-[#20235A]/10 bg-[#FAF7F2]"
        >
            <div className="mx-auto max-w-[1440px] px-4 py-5 sm:px-6 sm:py-6 lg:px-10 xl:px-16">
                {/* INTRODUCTION */}
                <div className="mb-4 flex items-end justify-between gap-6 sm:mb-5">
                    <div className="min-w-0">
                        <div className="mb-2 flex items-center gap-2">
                            <span className="h-px w-7 shrink-0 bg-[#D2B87C]" />

                            <span className="text-[8px] font-medium uppercase tracking-[0.2em] text-[#8F7746] sm:text-[9px]">
                                Department Navigation
                            </span>
                        </div>

                        <h2 className="font-serif text-[23px] leading-tight tracking-[-0.02em] text-[#20235A] sm:text-[26px]">
                            Explore Mechatronics Engineering
                        </h2>

                        <p className="mt-1.5 max-w-2xl text-[11px] leading-6 text-[#1E1917]/55 sm:text-[12px]">
                            Explore department information, academic
                            resources, facilities, activities, and
                            student achievements.
                        </p>
                    </div>

                    <div className="hidden shrink-0 items-center gap-2 pb-1 text-[9px] font-medium uppercase tracking-[0.14em] text-[#1E1917]/40 sm:flex">
                        <span className="h-1.5 w-1.5 bg-[#D2B87C]" />
                        {navigationItems.length} Sections
                    </div>
                </div>

                {/* DESKTOP NAVIGATION */}
                <div className="hidden lg:block">
                    <div className="flex items-center gap-5">
                        {/* NAVIGATION IDENTITY */}
                        <div className="flex shrink-0 items-center gap-3 pr-3">
                            <div className="flex h-10 w-10 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                                <Compass
                                    size={18}
                                    strokeWidth={1.5}
                                />
                            </div>

                            <div className="leading-none">
                                <p className="font-serif text-[17px] text-[#20235A]">
                                    Mechatronics
                                </p>

                                <p className="mt-1 text-[8px] font-medium uppercase tracking-[0.18em] text-[#1E1917]/50">
                                    Engineering
                                </p>
                            </div>
                        </div>

                        {/* NAVIGATION BUTTONS */}
                        <div className="min-w-0 flex-1 overflow-x-auto">
                            <nav aria-label="Department navigation">
                                <ul className="flex min-w-max items-center gap-2">
                                    {navigationItems.map((item) => {
                                        const active = isActive(item);

                                        return (
                                            <li key={item.label}>
                                                <Link
                                                    href={item.href}
                                                    aria-current={
                                                        active
                                                            ? "page"
                                                            : undefined
                                                    }
                                                    className={`group relative flex min-h-10 items-center whitespace-nowrap border px-3.5 py-2 text-[9px] font-medium uppercase leading-none tracking-[0.08em] transition-all duration-300 xl:px-4 ${active
                                                        ? "border-[#20235A] bg-[#20235A] text-white"
                                                        : "border-[#20235A]/10 bg-white text-[#1E1917]/65 hover:border-[#D2B87C] hover:bg-[#20235A] hover:text-white"
                                                        }`}
                                                >
                                                    {item.label}

                                                    {active && (
                                                        <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#D2B87C]" />
                                                    )}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>

                {/* TABLET / MOBILE NAVIGATION */}
                <div className="lg:hidden">
                    <button
                        type="button"
                        onClick={() =>
                            setMobileOpen((previous) => !previous)
                        }
                        aria-expanded={mobileOpen}
                        aria-controls="mechatronics-mobile-navigation"
                        className={`flex w-full items-center justify-between border px-4 py-3.5 text-left transition-all duration-300 sm:px-5 ${mobileOpen
                            ? "border-[#20235A] bg-[#20235A] text-white"
                            : "border-[#20235A]/15 bg-white text-[#20235A] hover:border-[#D2B87C]"
                            }`}
                    >
                        <span className="flex min-w-0 items-center gap-3">
                            <span
                                className={`flex h-9 w-9 shrink-0 items-center justify-center ${mobileOpen
                                    ? "bg-[#D2B87C] text-[#20235A]"
                                    : "bg-[#20235A] text-[#D2B87C]"
                                    }`}
                            >
                                {mobileOpen ? (
                                    <X size={18} strokeWidth={1.5} />
                                ) : (
                                    <Menu
                                        size={18}
                                        strokeWidth={1.5}
                                    />
                                )}
                            </span>

                            <span className="min-w-0">
                                <span className="block font-serif text-[18px] leading-tight sm:text-[19px]">
                                    Mechatronics Engineering
                                </span>

                                <span
                                    className={`mt-1 block text-[8px] font-medium uppercase tracking-[0.17em] ${mobileOpen
                                        ? "text-white/60"
                                        : "text-[#1E1917]/50"
                                        }`}
                                >
                                    Department Navigation
                                </span>
                            </span>
                        </span>

                        <span className="ml-3 flex shrink-0 items-center gap-2">
                            <span className="hidden text-[9px] font-medium uppercase tracking-[0.12em] sm:block">
                                {mobileOpen ? "Close" : "Browse"}
                            </span>

                            <ChevronDown
                                size={17}
                                strokeWidth={1.5}
                                className={`transition-transform duration-300 ${mobileOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </span>
                    </button>

                    {/* MOBILE MENU */}
                    <div
                        id="mechatronics-mobile-navigation"
                        className={`grid transition-all duration-300 ${mobileOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                            }`}
                    >
                        <div className="min-h-0 overflow-hidden">
                            <div className="mt-2 border border-[#20235A]/10 bg-white p-2 shadow-[0_12px_35px_rgba(32,35,90,0.08)]">
                                {/* CURRENT SECTION */}
                                <div className="mb-2 flex items-center justify-between border-b border-[#20235A]/10 px-3 py-3">
                                    <div>
                                        <p className="text-[8px] font-medium uppercase tracking-[0.18em] text-[#1E1917]/45">
                                            Current Section
                                        </p>

                                        <p className="mt-1 font-serif text-[17px] leading-tight text-[#20235A]">
                                            {activeItem.label}
                                        </p>
                                    </div>

                                    <span className="h-2 w-2 bg-[#D2B87C]" />
                                </div>

                                {/* MOBILE NAVIGATION ITEMS */}
                                <nav aria-label="Mobile department navigation">
                                    <ul className="grid grid-cols-1 gap-1 sm:grid-cols-2">
                                        {navigationItems.map(
                                            (item, index) => {
                                                const active = isActive(item);

                                                return (
                                                    <li key={item.label}>
                                                        <Link
                                                            href={item.href}
                                                            onClick={() =>
                                                                setMobileOpen(
                                                                    false
                                                                )
                                                            }
                                                            aria-current={
                                                                active
                                                                    ? "page"
                                                                    : undefined
                                                            }
                                                            className={`group flex min-h-[48px] items-center justify-between gap-3 border px-3.5 py-3 transition-all duration-200 ${active
                                                                ? "border-[#20235A] bg-[#20235A] text-white"
                                                                : "border-transparent bg-[#FAF7F2] text-[#1E1917]/70 hover:border-[#D2B87C] hover:bg-white hover:text-[#20235A]"
                                                                }`}
                                                        >
                                                            <span className="flex min-w-0 items-center gap-3">
                                                                <span
                                                                    className={`shrink-0 text-[9px] font-medium ${active
                                                                        ? "text-[#D2B87C]"
                                                                        : "text-[#1E1917]/30"
                                                                        }`}
                                                                >
                                                                    {String(
                                                                        index + 1
                                                                    ).padStart(
                                                                        2,
                                                                        "0"
                                                                    )}
                                                                </span>

                                                                <span className="text-[10px] font-medium uppercase leading-relaxed tracking-[0.07em]">
                                                                    {item.label}
                                                                </span>
                                                            </span>

                                                            <ChevronRight
                                                                size={14}
                                                                strokeWidth={1.5}
                                                                className={`shrink-0 transition-transform duration-200 group-hover:translate-x-1 ${active
                                                                    ? "text-[#D2B87C]"
                                                                    : "text-[#1E1917]/30"
                                                                    }`}
                                                            />
                                                        </Link>
                                                    </li>
                                                );
                                            }
                                        )}
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}