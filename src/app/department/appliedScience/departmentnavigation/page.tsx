"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, ChevronDown, Compass, X } from "lucide-react";

type NavigationItem = {
    label: string;
    href: string;
    active?: boolean;
};

interface InnerHeaderProps {
    activeTab?: string;
}

const BASE_PATH = "/department/appliedScience";

const navigationItems: NavigationItem[] = [
    {
        label: "About",
        href: `${ BASE_PATH }/about`,
    },
{
    label: "HOD Desk",
        href: `${BASE_PATH}/hod_desk`,
    },
{
    label: "Facilities",
        href: `${BASE_PATH}/facilities`,
    },
{
    label: "Faculty Profile",
        href: `${BASE_PATH}/faculty_profile`,
    },
{
    label: "Activities",
        href: `${BASE_PATH}/activities`,
    },
{
    label: "Syllabus",
        href: `${BASE_PATH}/syllabus`,
    },
{
    label: "Achievements",
        href: `${BASE_PATH}/achievements`,
    },
];

export default function InnerHeader({
    activeTab = "About",
}: InnerHeaderProps) {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <section className="relative z-20 w-full bg-[#FAF7F2] text-[#1E1917]">
            {/* Department introduction */}
            <div className="mx-auto max-w-7xl px-5 pb-5 pt-8 sm:px-8 lg:px-10 lg:pb-7 lg:pt-10">
                <div className="mb-3 flex items-center gap-3">
                    <span className="h-px w-8 bg-[#D2B87C]" />
                    <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8F7746] sm:text-[11px]">
                        Department Navigation
                    </span>
                </div>

                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
                    <div>
                        <h2 className="font-serif text-2xl font-medium tracking-tight text-[#20235A] sm:text-3xl">
                            Applied Science &amp; Humanities
                        </h2>

                        <p className="mt-2 max-w-2xl text-xs leading-6 text-[#625E58] sm:text-sm">
                            Building strong foundations through science,
                            mathematics, communication and interdisciplinary
                            learning.
                        </p>
                    </div>

                    <div className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.16em] text-[#8F7746]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#D2B87C]" />
                        <span>
                            {String(navigationItems.length).padStart(2, "0")}{" "}
                            Sections
                        </span>
                    </div>
                </div>
            </div>

            {/* Navigation bar */}
            <div className="border-y border-[#20235A]/10">
                <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                    <div className="relative flex min-h-[76px] w-full items-center justify-between">
                        {/* Department identity */}
                        <Link
                            href={`${BASE_PATH}/about`}
                            aria-label="Applied Science and Humanities home"
                            className="relative z-10 flex shrink-0 items-center gap-3 py-4"
                        >
                            <span className="flex h-10 w-10 items-center justify-center border border-[#20235A]/15 bg-white text-[#20235A]">
                                <Compass size={19} strokeWidth={1.5} />
                            </span>

                            <span className="hidden min-w-0 sm:block">
                                <span className="block text-[10px] font-bold uppercase tracking-[0.13em] text-[#20235A]">
                                    ASH
                                </span>
                                <span className="mt-1 block text-[9px] uppercase tracking-[0.1em] text-[#8F7746]">
                                    NCERC
                                </span>
                            </span>
                        </Link>

                        {/* Desktop navigation centered on the page */}
                        <nav
                            aria-label="Department navigation"
                            className="absolute left-1/2 hidden -translate-x-1/2 items-center justify-center gap-0.5 xl:flex"
                        >
                            {navigationItems.map((item) => {
                                const isActive =
                                    item.label.toLowerCase() ===
                                    activeTab.toLowerCase();

                                return (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        aria-current={
                                            isActive ? "page" : undefined
                                        }
                                        className={`relative flex h-11 items-center whitespace-nowrap border px-3 text-[9px] font-semibold uppercase tracking-[0.08em] transition-all duration-200 2xl:px-4 2xl:text-[10px] ${isActive
                                                ? "border-[#20235A] bg-[#20235A] text-[#FAF7F2]"
                                                : "border-transparent text-[#625E58] hover:border-[#20235A]/15 hover:bg-white hover:text-[#20235A]"
                                            }`}
                                    >
                                        {item.label}

                                        {isActive && (
                                            <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#D2B87C]" />
                                        )}
                                    </Link>
                                );
                            })}
                        </nav>

                        {/* Right-side label */}
                        <div className="relative z-10 ml-auto hidden shrink-0 items-center gap-2 text-[9px] font-medium uppercase tracking-[0.13em] text-[#8F7746] xl:flex">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#D2B87C]" />
                            Academic Department
                        </div>

                        {/* Mobile and tablet toggle */}
                        <button
                            type="button"
                            onClick={() =>
                                setMobileOpen((previous) => !previous)
                            }
                            aria-expanded={mobileOpen}
                            aria-label={
                                mobileOpen
                                    ? "Close department navigation"
                                    : "Open department navigation"
                            }
                            className="ml-auto flex h-10 items-center gap-3 border border-[#20235A]/15 px-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#20235A] transition-colors hover:bg-white xl:hidden"
                        >
                            <span>Navigation</span>
                            {mobileOpen ? (
                                <X size={16} />
                            ) : (
                                <ChevronDown size={16} />
                            )}
                        </button>
                    </div>

                    {/* Mobile and tablet navigation panel */}
                    {mobileOpen && (
                        <nav
                            aria-label="Mobile department navigation"
                            className="border-t border-[#20235A]/10 py-3 xl:hidden"
                        >
                            {navigationItems.map((item, index) => {
                                const isActive =
                                    item.label.toLowerCase() ===
                                    activeTab.toLowerCase();

                                return (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        onClick={() => setMobileOpen(false)}
                                        aria-current={
                                            isActive ? "page" : undefined
                                        }
                                        className={`flex items-center gap-4 border-b border-[#20235A]/10 px-3 py-4 transition-colors ${isActive
                                                ? "bg-[#20235A] text-[#FAF7F2]"
                                                : "text-[#625E58] hover:bg-white hover:text-[#20235A]"
                                            }`}
                                    >
                                        <span className="font-serif text-sm text-[#8F7746]">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                        <span className="flex-1 text-[10px] font-semibold uppercase tracking-[0.14em]">
                                            {item.label}
                                        </span>

                                        <ArrowUpRight size={15} />
                                    </Link>
                                );
                            })}
                        </nav>
                    )}
                </div>
            </div>
        </section>
    );
}