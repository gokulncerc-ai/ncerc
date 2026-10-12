import Link from "next/link";
import {
    AlertCircle,
    ArrowLeft,
    ArrowUpRight,
    Bell,
    ChevronRight,
    FileText,
    Download,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../../DepartmentNav/DepartmentNav";

type CircularItem = {
    number: string;
    title: string;
    description: string;
    href: string;
    type: "Circular" | "Notification";
    date?: string;
};

const circularItems: CircularItem[] = [
    /*
     * Add actual circulars and notifications here.
     *
     * Example:
     *
     * {
     *   number: "01",
     *   title: "Department Circular",
     *   description: "Important information regarding departmental activities.",
     *   href: "/documents/department-circular.pdf",
     *   type: "Circular",
     *   date: "2025",
     * },
     */
];

export default function DepartmentCircularPage() {
    return (
        <>
            <SiteHeader />

            {/* =========================================================
          HERO
      ========================================================= */}
            <section className="relative isolate overflow-hidden bg-[#20235A]">
                {/* Decorative circles */}
                <div className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full border border-[#D2B87C]/20" />
                <div className="pointer-events-none absolute -right-8 -top-16 h-52 w-52 rounded-full border border-[#D2B87C]/10" />

                <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
                    <div className="max-w-4xl">
                        <div className="mb-6 flex items-center gap-3">
                            <span className="h-px w-10 bg-[#D2B87C]" />

                            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D2B87C]">
                                Electrical &amp; Electronics Engineering
                            </p>
                        </div>

                        <h1 className="max-w-4xl font-serif text-4xl leading-[1.05] text-white sm:text-5xl lg:text-6xl">
                            Circulars &amp;
                            <span className="block text-[#D2B87C]">
                                notifications.
                            </span>
                        </h1>

                        <p className="mt-6 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                            Stay informed with important departmental circulars,
                            notifications and official announcements from the Electrical and
                            Electronics Engineering department at NCERC.
                        </p>

                        <div className="mt-8 flex flex-wrap items-center gap-3">
                            <a
                                href="#circulars"
                                className="group inline-flex items-center gap-2 rounded-full bg-[#D2B87C] px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#20235A] transition-all duration-300 hover:bg-white"
                            >
                                View Notifications
                                <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </a>

                            <Link
                                href="/department/electrical-and-electronics-engineering/downloads"
                                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:border-[#D2B87C]/60 hover:text-[#D2B87C]"
                            >
                                Back to Downloads
                                <ArrowLeft className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Information Strip */}
                <div className="border-t border-white/10 bg-white/[0.03]">
                    <div className="mx-auto grid max-w-[1440px] grid-cols-1 sm:grid-cols-3">
                        <div className="border-b border-white/10 px-6 py-5 sm:border-b-0 sm:border-r sm:px-10 lg:px-16">
                            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                Department
                            </p>

                            <p className="mt-2 font-serif text-lg text-white">
                                Electrical &amp; Electronics
                            </p>
                        </div>

                        <div className="border-b border-white/10 px-6 py-5 sm:border-b-0 sm:border-r sm:px-10 lg:px-16">
                            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                Resource Type
                            </p>

                            <p className="mt-2 font-serif text-lg text-white">
                                Official Documents
                            </p>
                        </div>

                        <div className="px-6 py-5 sm:px-10 lg:px-16">
                            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                Access
                            </p>

                            <p className="mt-2 font-serif text-lg text-white">
                                Circulars &amp; Notifications
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Department Navigation */}
            <InnerHeader />

            <main className="bg-[#FAF7F2]">
                {/* =========================================================
            INTRODUCTION
        ========================================================= */}
                <section className="border-b border-[#1E1917]/10">
                    <div className="mx-auto grid max-w-[1440px] gap-10 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-16 lg:py-24">
                        <div>
                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#D2B87C]" />

                                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                                    Department Communications
                                </p>
                            </div>

                            <h2 className="max-w-3xl font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                                Important information,
                                <span className="text-[#8F7746]">
                                    {" "}
                                    clearly organised.
                                </span>
                            </h2>

                            <p className="mt-6 max-w-2xl text-sm leading-7 text-[#1E1917]/70 sm:text-base">
                                This section brings together departmental circulars and
                                notifications so that students and members of the academic
                                community can easily access important official information.
                            </p>
                        </div>

                        {/* Communication Summary */}
                        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                            <div className="rounded-3xl border border-[#1E1917]/10 bg-white p-6">
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                            Official
                                        </p>

                                        <p className="mt-3 font-serif text-xl text-[#20235A]">
                                            Department Notices
                                        </p>
                                    </div>

                                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F2EFE8] text-[#20235A]">
                                        <Bell className="h-5 w-5" />
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-3xl border border-[#1E1917]/10 bg-white p-6">
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                            Documents
                                        </p>

                                        <p className="mt-3 font-serif text-xl text-[#20235A]">
                                            Circulars
                                        </p>
                                    </div>

                                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F2EFE8] text-[#20235A]">
                                        <FileText className="h-5 w-5" />
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-3xl border border-[#1E1917]/10 bg-white p-6">
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                            Access
                                        </p>

                                        <p className="mt-3 font-serif text-xl text-[#20235A]">
                                            Read &amp; Download
                                        </p>
                                    </div>

                                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F2EFE8] text-[#20235A]">
                                        <Download className="h-5 w-5" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================
            CIRCULARS / NOTIFICATIONS
        ========================================================= */}
                <section id="circulars" className="bg-white">
                    <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
                        <div className="flex flex-col gap-5 border-b border-[#1E1917]/10 pb-7 sm:flex-row sm:items-end sm:justify-between">
                            <div>
                                <div className="mb-5 flex items-center gap-3">
                                    <span className="h-px w-10 bg-[#D2B87C]" />

                                    <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                                        Official Archive
                                    </p>
                                </div>

                                <h2 className="font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                                    Circulars &amp;
                                    <span className="text-[#8F7746]">
                                        {" "}
                                        notifications.
                                    </span>
                                </h2>
                            </div>

                            {circularItems.length > 0 && (
                                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1E1917]/40">
                                    {String(circularItems.length).padStart(2, "0")} Documents
                                </p>
                            )}
                        </div>

                        {circularItems.length > 0 ? (
                            <div className="mt-12 space-y-4">
                                {circularItems.map((item) => (
                                    <CircularCard
                                        key={`${item.number}-${item.title}`}
                                        item={item}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="mt-12 rounded-[2rem] border border-[#1E1917]/10 bg-[#FAF7F2] p-8 sm:p-12 lg:p-16">
                                <div className="mx-auto max-w-2xl text-center">
                                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#20235A] text-[#D2B87C]">
                                        <AlertCircle
                                            className="h-7 w-7"
                                            strokeWidth={1.5}
                                        />
                                    </div>

                                    <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                                        Official Archive
                                    </p>

                                    <h3 className="mt-3 font-serif text-2xl text-[#20235A] sm:text-3xl">
                                        Circulars and notifications will appear here.
                                    </h3>

                                    <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#1E1917]/65 sm:text-base">
                                        Add the actual departmental circular and notification
                                        documents to the archive to make them available for
                                        viewing and download.
                                    </p>

                                    <div className="mt-7 flex flex-wrap justify-center gap-3">
                                        <Link
                                            href="/department/electrical-and-electronics-engineering/downloads"
                                            className="inline-flex items-center gap-2 rounded-full bg-[#20235A] px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-[#D2B87C] hover:text-[#20235A]"
                                        >
                                            Back to Downloads
                                            <ArrowLeft className="h-4 w-4" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </section>

                {/* =========================================================
            INFORMATION SECTION
        ========================================================= */}
                <section className="bg-[#F2EFE8]">
                    <div className="mx-auto grid max-w-[1440px] gap-10 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-[0.85fr_1.15fr] lg:px-16 lg:py-24">
                        <div>
                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#D2B87C]" />

                                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                                    Department Communication
                                </p>
                            </div>

                            <h2 className="font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl">
                                Information that keeps
                                <span className="block text-[#8F7746]">
                                    the department connected.
                                </span>
                            </h2>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="rounded-3xl border border-[#1E1917]/10 bg-white p-6 sm:p-7">
                                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#20235A] text-[#D2B87C]">
                                    <Bell className="h-5 w-5" />
                                </div>

                                <h3 className="mt-5 font-serif text-xl text-[#20235A]">
                                    Important Announcements
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-[#1E1917]/65">
                                    Departmental notifications provide access to important
                                    announcements and official information.
                                </p>
                            </div>

                            <div className="rounded-3xl border border-[#1E1917]/10 bg-white p-6 sm:p-7">
                                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#20235A] text-[#D2B87C]">
                                    <FileText className="h-5 w-5" />
                                </div>

                                <h3 className="mt-5 font-serif text-xl text-[#20235A]">
                                    Department Circulars
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-[#1E1917]/65">
                                    Circulars provide structured communication for departmental
                                    activities and academic matters.
                                </p>
                            </div>

                            <div className="rounded-3xl border border-[#1E1917]/10 bg-white p-6 sm:p-7 sm:col-span-2">
                                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#20235A] text-[#D2B87C]">
                                    <Download className="h-5 w-5" />
                                </div>

                                <h3 className="mt-5 font-serif text-xl text-[#20235A]">
                                    Easy Access to Documents
                                </h3>

                                <p className="mt-3 max-w-3xl text-sm leading-6 text-[#1E1917]/65">
                                    Keeping circulars and notifications in one dedicated
                                    location makes important departmental information easier to
                                    find, read and download whenever required.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================
            CLOSING CTA
        ========================================================= */}
                <section className="bg-[#20235A]">
                    <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
                        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
                            <div>
                                <div className="mb-5 flex items-center gap-3">
                                    <span className="h-px w-10 bg-[#D2B87C]" />

                                    <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                        Department Resources
                                    </p>
                                </div>

                                <h2 className="max-w-3xl font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
                                    Explore more departmental resources.
                                </h2>

                                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
                                    Return to the downloads section to explore newsletters,
                                    magazines and other departmental resources.
                                </p>
                            </div>

                            <Link
                                href="/department/electrical-and-electronics-engineering/downloads"
                                className="group inline-flex w-fit items-center gap-2 rounded-full bg-[#D2B87C] px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#20235A] transition-all duration-300 hover:bg-white"
                            >
                                Back to Downloads
                                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <FooterSection />
        </>
    );
}

/* =========================================================
   CIRCULAR CARD
========================================================= */

function CircularCard({
    item,
}: {
    item: CircularItem;
}) {
    return (
        <Link
            href={item.href}
            className="group flex flex-col gap-6 rounded-[2rem] border border-[#1E1917]/10 bg-[#FAF7F2] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D2B87C]/70 hover:shadow-lg sm:flex-row sm:items-center sm:p-7"
        >
            {/* Number */}
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#20235A] font-serif text-lg text-[#D2B87C]">
                {item.number}
            </div>

            {/* Content */}
            <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-3">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                        {item.type}
                    </span>

                    {item.date && (
                        <>
                            <span className="h-1 w-1 rounded-full bg-[#D2B87C]" />

                            <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#1E1917]/40">
                                {item.date}
                            </span>
                        </>
                    )}
                </div>

                <h3 className="mt-2 font-serif text-xl text-[#20235A] sm:text-2xl">
                    {item.title}
                </h3>

                <p className="mt-2 max-w-3xl text-sm leading-6 text-[#1E1917]/65">
                    {item.description}
                </p>
            </div>

            {/* Action */}
            <div className="flex shrink-0 items-center gap-3 border-t border-[#1E1917]/10 pt-5 sm:border-t-0 sm:border-l sm:pl-6 sm:pt-0">
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8F7746]">
                    Open
                </span>

                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1E1917]/10 text-[#20235A] transition-all duration-300 group-hover:border-[#D2B87C] group-hover:bg-[#D2B87C]">
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
            </div>
        </Link>
    );
}