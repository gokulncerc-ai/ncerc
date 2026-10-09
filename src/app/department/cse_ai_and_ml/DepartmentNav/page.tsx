"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowUpRight,
  BookOpen,
  Building2,
  ChevronDown,
  Compass,
  FlaskConical,
  MonitorSmartphone,
  Presentation,
  X,
} from "lucide-react";

type NavigationItem = {
  label: string;
  href: string;
  active?: boolean;
};

interface InnerHeaderProps {
  activeTab?: string;
}

const BASE_PATH = "/department/ug/cse_ai_and_ml";

const navigationItems: NavigationItem[] = [
  {
    label: "About",
    href: BASE_PATH,
    active: true,
  },
  {
    label: "Career Scope",
    href: `${ BASE_PATH }/career_scope`,
  },
{
    label: "Facilities",
        href: "#",
  },
{
    label: "Faculty Profile",
        href: `${BASE_PATH}/faculty_profile`,
  },
];

const facilityItems = [
    {
        title: "Laboratories",
        description:
            "Explore the department laboratories equipped for practical learning, experimentation and advanced technical work.",
        href: `${BASE_PATH}/facilities/laboratories`,
        icon: FlaskConical,
        number: "01",
    },
    {
        title: "Class Rooms",
        description:
            "Discover modern classrooms designed to support an engaging and technology-enabled learning environment.",
        href: `${BASE_PATH}/facilities/class_rooms`,
        icon: Building2,
        number: "02",
    },
    {
        title: "Seminar Halls",
        description:
            "Dedicated spaces for seminars, workshops, technical sessions, presentations and academic events.",
        href: `${BASE_PATH}/facilities/seminar_halls`,
        icon: Presentation,
        number: "03",
    },
    {
        title: "Library",
        description:
            "Access academic resources, reference materials, digital resources and learning facilities.",
        href: `${BASE_PATH}/facilities/library`,
        icon: BookOpen,
        number: "04",
    },
    {
        title: "Smart Rooms",
        description:
            "Technology-enabled learning spaces designed for interactive teaching and collaborative learning.",
        href: `${BASE_PATH}/facilities/smart_rooms`,
        icon: MonitorSmartphone,
        number: "05",
    },
];

export default function InnerHeader({
    activeTab = "About",
}: InnerHeaderProps) {
    const [isFacilitiesOpen, setIsFacilitiesOpen] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    const isActive = (item: NavigationItem) =>
        item.label === activeTab ||
        (item.label === "About" && activeTab === "About");

    return (
        <>
            <section className="relative z-30 w-full bg-[#FAF7F2] text-[#1E1917]">
                {/* Introductory heading */}
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
                                Computer Science &amp; Engineering
                            </h2>
                            <p className="mt-2 max-w-2xl text-xs leading-6 text-[#625E58] sm:text-sm">
                                Artificial Intelligence &amp; Machine Learning
                            </p>
                        </div>

                        <div className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.16em] text-[#8F7746]">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#D2B87C]" />
                            <span>04 Sections</span>
                        </div>
                    </div>
                </div>

                {/* Navigation bar */}
                <div className="border-y border-[#20235A]/10">
                    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                        <div className="relative flex min-h-[76px] w-full items-center justify-between">
                            {/* Department identity */}
                            <Link
                                href={BASE_PATH}
                                aria-label="CSE Artificial Intelligence and Machine Learning home"
                                className="relative z-10 flex shrink-0 items-center gap-3 py-4"
                            >
                                <span className="flex h-10 w-10 items-center justify-center border border-[#20235A]/15 bg-white text-[#20235A]">
                                    <Compass size={19} strokeWidth={1.5} />
                                </span>

                                <span className="hidden min-w-0 sm:block">
                                    <span className="block text-[10px] font-bold uppercase tracking-[0.15em] text-[#20235A]">
                                        CSE
                                    </span>
                                    <span className="mt-1 block text-[9px] uppercase tracking-[0.12em] text-[#8F7746]">
                                        AI &amp; ML
                                    </span>
                                </span>
                            </Link>

                            {/* Desktop navigation — centered relative to the full page */}
                            <nav
                                aria-label="Department navigation"
                                className="absolute left-1/2 hidden -translate-x-1/2 items-center justify-center gap-1 lg:flex"
                            >
                                {navigationItems.map((item) => {
                                    const active = isActive(item);

                                    if (item.label === "Facilities") {
                                        return (
                                            <button
                                                key={item.label}
                                                type="button"
                                                onClick={() => setIsFacilitiesOpen(true)}
                                                aria-haspopup="dialog"
                                                aria-expanded={isFacilitiesOpen}
                                                className={`group relative flex h-11 items-center gap-2 border px-4 text-[10px] font-semibold uppercase tracking-[0.12em] transition-all duration-200 xl:px-5 ${isFacilitiesOpen
                                                        ? "border-[#20235A] bg-[#20235A] text-[#FAF7F2]"
                                                        : "border-transparent text-[#625E58] hover:border-[#20235A]/15 hover:bg-white hover:text-[#20235A]"
                                                    }`}
                                            >
                                                {item.label}
                                                <ChevronDown
                                                    size={13}
                                                    className="transition-transform duration-200 group-hover:translate-y-0.5"
                                                />

                                                {isFacilitiesOpen && (
                                                    <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#D2B87C]" />
                                                )}
                                            </button>
                                        );
                                    }

                                    return (
                                        <Link
                                            key={item.label}
                                            href={item.href}
                                            aria-current={active ? "page" : undefined}
                                            className={`relative flex h-11 items-center border px-4 text-[10px] font-semibold uppercase tracking-[0.12em] transition-all duration-200 xl:px-5 ${active
                                                    ? "border-[#20235A] bg-[#20235A] text-[#FAF7F2]"
                                                    : "border-transparent text-[#625E58] hover:border-[#20235A]/15 hover:bg-white hover:text-[#20235A]"
                                                }`}
                                        >
                                            {item.label}

                                            {active && (
                                                <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#D2B87C]" />
                                            )}
                                        </Link>
                                    );
                                })}
                            </nav>

                            {/* Right-side desktop label */}
                            <div className="relative z-10 ml-auto hidden shrink-0 items-center gap-2 text-[9px] font-medium uppercase tracking-[0.16em] text-[#8F7746] lg:flex">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#D2B87C]" />
                                Department
                            </div>

                            {/* Mobile / tablet menu toggle */}
                            <button
                                type="button"
                                onClick={() => setMobileOpen((previous) => !previous)}
                                aria-expanded={mobileOpen}
                                aria-label={
                                    mobileOpen
                                        ? "Close department navigation"
                                        : "Open department navigation"
                                }
                                className="ml-auto flex h-10 items-center gap-3 border border-[#20235A]/15 px-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#20235A] transition-colors hover:bg-white lg:hidden"
                            >
                                <span>Navigation</span>
                                {mobileOpen ? <X size={16} /> : <ChevronDown size={16} />}
                            </button>
                        </div>

                        {/* Mobile navigation panel */}
                        {mobileOpen && (
                            <nav
                                aria-label="Mobile department navigation"
                                className="border-t border-[#20235A]/10 py-3 lg:hidden"
                            >
                                {navigationItems.map((item, index) => {
                                    const active = isActive(item);

                                    if (item.label === "Facilities") {
                                        return (
                                            <button
                                                key={item.label}
                                                type="button"
                                                onClick={() => {
                                                    setMobileOpen(false);
                                                    setIsFacilitiesOpen(true);
                                                }}
                                                aria-haspopup="dialog"
                                                className={`flex w-full items-center gap-4 border-b border-[#20235A]/10 px-3 py-4 text-left transition-colors ${isFacilitiesOpen
                                                        ? "bg-[#20235A] text-[#FAF7F2]"
                                                        : "text-[#625E58] hover:bg-white hover:text-[#20235A]"
                                                    }`}
                                            >
                                                <span className="font-serif text-sm text-[#8F7746]">
                                                    0{index + 1}
                                                </span>
                                                <span className="flex-1 text-[10px] font-semibold uppercase tracking-[0.14em]">
                                                    {item.label}
                                                </span>
                                                <ArrowUpRight size={15} />
                                            </button>
                                        );
                                    }

                                    return (
                                        <Link
                                            key={item.label}
                                            href={item.href}
                                            onClick={() => setMobileOpen(false)}
                                            aria-current={active ? "page" : undefined}
                                            className={`flex items-center gap-4 border-b border-[#20235A]/10 px-3 py-4 transition-colors ${active
                                                    ? "bg-[#20235A] text-[#FAF7F2]"
                                                    : "text-[#625E58] hover:bg-white hover:text-[#20235A]"
                                                }`}
                                        >
                                            <span className="font-serif text-sm text-[#8F7746]">
                                                0{index + 1}
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

            {/* Facilities modal — content and facility destinations preserved */}
            {isFacilitiesOpen && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-[#111326]/75 p-4 backdrop-blur-sm sm:p-6"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="facilities-modal-title"
                    onClick={(event) => {
                        if (event.target === event.currentTarget) {
                            setIsFacilitiesOpen(false);
                        }
                    }}
                >
                    <div className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto bg-[#FAF7F2] shadow-2xl">
                        {/* Modal header */}
                        <div className="relative overflow-hidden bg-[#20235A] px-6 py-8 text-[#FAF7F2] sm:px-10 sm:py-10">
                            <div className="absolute -right-10 -top-20 h-64 w-64 rounded-full border border-white/10" />
                            <div className="absolute -right-2 -top-12 h-48 w-48 rounded-full border border-white/10" />

                            <button
                                type="button"
                                onClick={() => setIsFacilitiesOpen(false)}
                                aria-label="Close facilities"
                                className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center border border-white/20 text-white transition-colors hover:bg-white hover:text-[#20235A]"
                            >
                                <X size={18} />
                            </button>

                            <div className="relative">
                                <div className="mb-4 flex items-center gap-3">
                                    <span className="h-px w-8 bg-[#D2B87C]" />
                                    <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                        Department Infrastructure
                                    </span>
                                </div>

                                <h2
                                    id="facilities-modal-title"
                                    className="max-w-2xl font-serif text-3xl font-medium tracking-tight sm:text-4xl"
                                >
                                    Facilities
                                    <span className="text-[#D2B87C]">.</span>
                                </h2>

                                <p className="mt-3 max-w-xl text-sm leading-6 text-white/70">
                                    Explore the learning spaces and academic infrastructure
                                    supporting the department.
                                </p>

                                <div className="mt-6 flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.16em] text-white/60">
                                    <span className="h-1.5 w-1.5 rounded-full bg-[#D2B87C]" />
                                    {facilityItems.length} Facilities
                                </div>
                            </div>
                        </div>

                        {/* Facility cards */}
                        <div className="grid grid-cols-1 gap-px bg-[#20235A]/10 sm:grid-cols-2 lg:grid-cols-3">
                            {facilityItems.map((facility) => {
                                const Icon = facility.icon;

                                return (
                                    <Link
                                        key={facility.number}
                                        href={facility.href}
                                        onClick={() => setIsFacilitiesOpen(false)}
                                        className="group flex min-h-[225px] flex-col bg-[#FAF7F2] p-6 transition-colors duration-300 hover:bg-white sm:p-7"
                                    >
                                        <div className="flex items-start justify-between">
                                            <span className="font-serif text-sm text-[#8F7746]">
                                                {facility.number}
                                            </span>

                                            <span className="flex h-10 w-10 items-center justify-center border border-[#20235A]/15 text-[#20235A] transition-all duration-300 group-hover:border-[#20235A] group-hover:bg-[#20235A] group-hover:text-[#FAF7F2]">
                                                <Icon size={18} strokeWidth={1.5} />
                                            </span>
                                        </div>

                                        <div className="mt-7">
                                            <h3 className="font-serif text-xl font-medium text-[#20235A]">
                                                {facility.title}
                                            </h3>

                                            <p className="mt-3 text-xs leading-6 text-[#625E58]">
                                                {facility.description}
                                            </p>
                                        </div>

                                        <div className="mt-auto flex items-center gap-2 pt-6 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#8F7746]">
                                            Explore Facility
                                            <ArrowUpRight
                                                size={13}
                                                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                            />
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Modal footer */}
                        <div className="flex flex-col justify-between gap-3 border-t border-[#20235A]/10 px-6 py-5 sm:flex-row sm:items-center sm:px-10">
                            <p className="text-[10px] uppercase tracking-[0.12em] text-[#625E58]">
                                CSE — Artificial Intelligence &amp; Machine Learning
                            </p>

                            <button
                                type="button"
                                onClick={() => setIsFacilitiesOpen(false)}
                                className="inline-flex items-center justify-center gap-2 self-start border border-[#20235A]/20 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#20235A] transition-colors hover:bg-[#20235A] hover:text-[#FAF7F2] sm:self-auto"
                            >
                                Close
                                <X size={13} />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}