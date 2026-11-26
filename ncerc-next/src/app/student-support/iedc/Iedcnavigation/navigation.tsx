"use client";

import Link from "next/link";

type NavigationItem = {
    label: string;
    href: string;
    active?: boolean;
};

interface InnerHeaderProps {
    activeTab?: string;
}

const BASE_PATH = "/student-support/iedc";

const navigationItems: NavigationItem[] = [
    {
        label: "About",
        href: `${BASE_PATH}`,
    },
    {
        label: "Achievements",
        href: `${BASE_PATH}/achievements`,
    },
    {
        label: "Lab Facilities",
        href: `${BASE_PATH}/lab_facilities`,
    },
    {
        label: "Programs Conducted",
        href: `${BASE_PATH}/programs-conducted`,
    },
    {
        label: "Startups",
        href: `${BASE_PATH}/startups`,
    },

];

export default function InnerHeader({
    activeTab = "About",
}: InnerHeaderProps) {
    return (
        <>
            {/* INNER NAVIGATION */}
            <div className="w-full border-b border-slate-200 bg-slate-50 py-3">
                <div className="mx-auto max-w-7xl px-4 sm:px-6">
                    <nav className="w-full">
                        <ul className="flex flex-wrap items-center justify-center gap-1 sm:gap-2">
                            {navigationItems.map((item) => {
                                const isActive =
                                    item.label.toLowerCase() ===
                                    activeTab.toLowerCase();

                                return (
                                    <li
                                        key={item.label}
                                        className="shrink-0"
                                    >
                                        <Link
                                            href={item.href}
                                            aria-current={
                                                isActive ? "page" : undefined
                                            }
                                            className={`inline-block rounded-lg px-3.5 py-2 text-xs font-semibold transition-all duration-200 sm:text-sm ${isActive
                                                ? "bg-[#20235A] text-white shadow-sm"
                                                : "text-slate-700 hover:bg-slate-200/70 hover:text-[#20235A]"
                                                }`}
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
}
