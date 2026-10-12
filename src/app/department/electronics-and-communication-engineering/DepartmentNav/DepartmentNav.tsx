"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import {
    ChevronDown,
    ChevronRight,
    Compass,
    Menu,
    X,
} from "lucide-react";

type NavigationItem = {
    label: string;
    href: string;
};

interface InnerHeaderProps {
    activeTab?: string;
}

const BASE = "/department/electronics-and-communication-engineering";

const navigationItems: NavigationItem[] = [
    { label: "About", href: BASE },
    { label: "Career Scope", href: `${BASE}/career-scope` },
    { label: "Facilities", href: `${BASE}/facilities` },
    { label: "Activities", href: `${BASE}/activities` },
    { label: "Achievements", href: `${BASE}/achievements` },
    { label: "Academic Excellence", href: `${BASE}/academic-excellence` },
    { label: "Downloads", href: `${BASE}/downloads` },
    { label: "Faculty Profile", href: `${BASE}/faculty-details` },
    { label: "E-Resources", href: `${BASE}/digital-library` },
    { label: "Syllabus", href: `${BASE}/syllabus` },
    { label: "TLP", href: `${BASE}/#` },
];

export default function DepartmentNav({
    activeTab = "About",
}: InnerHeaderProps) {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);
    const navigationRef = useRef<HTMLElement>(null);

    const normalizePath = (path: string) =>
        path.replace(/\/+$/, "") || "/";

    const isActive = (item: NavigationItem) => {
        const itemPath = normalizePath(item.href);
        const currentPath = normalizePath(pathname);

        if (item.label.toLowerCase() === activeTab.toLowerCase()) {
            return currentPath === itemPath;
        }

        return currentPath === itemPath;
    };

    const activeItem =
        navigationItems.find((item) => isActive(item)) ??
        navigationItems.find(
            (item) => item.label.toLowerCase() === activeTab.toLowerCase()
        ) ??
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
                event.target instanceof Node &&
                !navigationRef.current.contains(event.target)
            ) {
                setMobileOpen(false);
            }
        };

        document.addEventListener("keydown", handleEscape);
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        setMobileOpen(false);
    }, [pathname]);

    const linkClass = (active: boolean) =>
        `group relative flex min-h-10 shrink-0 items-center whitespace-nowrap border px-3 py-2 text-[9px] font-medium uppercase leading-none tracking-[0.07em] transition-colors duration-200 xl:px-3.5 ${
            active
                ? "border-[#20235A] bg-[#20235A] text-white"
                : "border-[#20235A]/10 bg-white text-[#1E1917]/70 hover:border-[#D2B87C] hover:bg-[#20235A] hover:text-white"
        }`;

    return (
        <section
            ref={navigationRef}
            className="relative z-40 border-b border-[#20235A]/10 bg-[#FAF7F2]"
        >
            <div className="mx-auto max-w-[1440px] px-4 py-4 sm:px-6 sm:py-5 lg:px-10 xl:px-16">

                {/* Navigation Heading */}
                <div className="mb-4 flex items-end justify-between gap-4 sm:mb-5">
                    <div className="min-w-0">
                        <div className="mb-2 flex items-center gap-2">
                            <span className="h-px w-7 bg-[#D2B87C]" />
                            <span className="text-[8px] font-medium uppercase tracking-[0.2em] text-[#8F7746]">
                                Department Navigation
                            </span>
                        </div>

                        <h2 className="font-display text-[23px] leading-tight tracking-[-0.02em] text-[#20235A] sm:text-[26px]">
                            Explore Electronics &amp; Communication
                        </h2>

                        <p className="mt-1 text-[11px] leading-5 text-[#1E1917]/55 sm:text-xs">
                            Navigate academic information, department activities and resources.
                        </p>
                    </div>

                    <div className="hidden shrink-0 items-center gap-2 pb-1 text-[9px] font-medium uppercase tracking-[0.12em] text-[#1E1917]/45 sm:flex">
                        <span className="h-1.5 w-1.5 bg-[#D2B87C]" />
                        {navigationItems.length} Sections
                    </div>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex lg:items-center lg:gap-4">
                    <div className="flex shrink-0 items-center gap-3 border-r border-[#20235A]/10 pr-4">
                        <div className="flex h-10 w-10 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                            <Compass size={18} strokeWidth={1.5} />
                        </div>

                        <div className="leading-none">
                            <p className="font-display text-[17px] text-[#20235A]">
                                ECE
                            </p>
                            <p className="mt-1 text-[8px] font-medium uppercase tracking-[0.17em] text-[#1E1917]/50">
                                Department
                            </p>
                        </div>
                    </div>

                    <nav
                        aria-label="ECE department navigation"
                        className="min-w-0 flex-1 overflow-x-auto pb-1"
                    >
                        <div className="flex min-w-max items-center gap-1.5">
                            {navigationItems.map((item) => {
                                const active = isActive(item);

                                return (
                                    <div key={item.label} className="shrink-0">
                                        <Link
                                            href={item.href}
                                            aria-current={active ? "page" : undefined}
                                            className={linkClass(active)}
                                        >
                                            {item.label}

                                            {active && (
                                                <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#D2B87C]" />
                                            )}
                                        </Link>
                                    </div>
                                );
                            })}
                        </div>
                    </nav>
                </div>

                {/* Tablet and Mobile Navigation */}
                <div className="lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileOpen((previous) => !previous)}
                        aria-expanded={mobileOpen}
                        aria-controls="ece-mobile-navigation"
                        className={`flex w-full items-center justify-between border px-3.5 py-3 transition-colors duration-200 sm:px-5 ${
                            mobileOpen
                                ? "border-[#20235A] bg-[#20235A] text-white"
                                : "border-[#20235A]/15 bg-white text-[#20235A] hover:border-[#D2B87C]"
                        }`}
                    >
                        <span className="flex min-w-0 items-center gap-3">
                            <span
                                className={`flex h-9 w-9 shrink-0 items-center justify-center ${
                                    mobileOpen
                                        ? "bg-[#D2B87C] text-[#20235A]"
                                        : "bg-[#20235A] text-[#D2B87C]"
                                }`}
                            >
                                {mobileOpen ? (
                                    <X size={18} strokeWidth={1.5} />
                                ) : (
                                    <Menu size={18} strokeWidth={1.5} />
                                )}
                            </span>

                            <span className="min-w-0 text-left">
                                <span className="block font-display text-lg leading-none">
                                    ECE
                                </span>
                                <span
                                    className={`mt-1 block text-[8px] font-medium uppercase tracking-[0.16em] ${
                                        mobileOpen
                                            ? "text-white/65"
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
                                className={`transition-transform duration-200 ${
                                    mobileOpen ? "rotate-180" : ""
                                }`}
                            />
                        </span>
                    </button>

                    {/* Mobile Menu */}
                    <div
                        id="ece-mobile-navigation"
                        aria-hidden={!mobileOpen}
                        className={`grid transition-[grid-template-rows,opacity] duration-300 ${
                            mobileOpen
                                ? "grid-rows-[1fr] opacity-100"
                                : "grid-rows-[0fr] opacity-0"
                        }`}
                    >
                        <div className="min-h-0 overflow-hidden">
                            <div className="mt-2 border border-[#20235A]/10 bg-white p-2 shadow-[0_12px_30px_rgba(32,35,90,0.08)]">

                                {/* Current Section */}
                                <div className="mb-2 flex items-center justify-between border-b border-[#20235A]/10 px-3 py-3">
                                    <div>
                                        <p className="text-[8px] font-medium uppercase tracking-[0.17em] text-[#1E1917]/45">
                                            Current Section
                                        </p>
                                        <p className="mt-1 font-display text-[17px] leading-tight text-[#20235A]">
                                            {activeItem.label}
                                        </p>
                                    </div>

                                    <span className="h-2 w-2 bg-[#D2B87C]" />
                                </div>

                                {/* Navigation Links */}
                                <nav
                                    aria-label="ECE mobile department navigation"
                                    className="grid grid-cols-1 gap-1 sm:grid-cols-2"
                                >
                                    {navigationItems.map((item, index) => {
                                        const active = isActive(item);

                                        const itemClass = `group flex min-h-[46px] items-center justify-between gap-3 border px-3 py-2.5 transition-colors duration-200 ${
                                            active
                                                ? "border-[#20235A] bg-[#20235A] text-white"
                                                : "border-transparent bg-[#FAF7F2] text-[#1E1917]/70 hover:border-[#D2B87C] hover:bg-white hover:text-[#20235A]"
                                        }`;

                                        return (
                                            <Link
                                                key={item.label}
                                                href={item.href}
                                                onClick={() => setMobileOpen(false)}
                                                aria-current={active ? "page" : undefined}
                                                className={itemClass}
                                            >
                                                <span className="flex min-w-0 items-center gap-3">
                                                    <span
                                                        className={`text-[9px] font-medium ${
                                                            active
                                                                ? "text-[#D2B87C]"
                                                                : "text-[#1E1917]/35"
                                                        }`}
                                                    >
                                                        {String(index + 1).padStart(2, "0")}
                                                    </span>

                                                    <span className="text-[10px] font-medium uppercase leading-relaxed tracking-[0.06em]">
                                                        {item.label}
                                                    </span>
                                                </span>

                                                <ChevronRight
                                                    size={14}
                                                    strokeWidth={1.5}
                                                    className={`shrink-0 transition-transform group-hover:translate-x-1 ${
                                                        active
                                                            ? "text-[#D2B87C]"
                                                            : "text-[#1E1917]/35"
                                                    }`}
                                                />
                                            </Link>
                                        );
                                    })}
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}