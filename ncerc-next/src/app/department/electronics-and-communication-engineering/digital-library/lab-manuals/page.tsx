
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
    ArrowLeft,
    ArrowRight,
    BookOpen,
    Download,
    ExternalLink,
    FileText,
    X,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../../DepartmentNav/DepartmentNav";

type ManualPDF = {
    id: string;
    title: string;
    description: string;
    file: string;
};

type Semester = {
    id: string;
    title: string;
    manuals: ManualPDF[];
};

type Scheme = {
    id: string;
    number: string;
    title: string;
    description: string;
    manuals?: ManualPDF[];
    semesters?: Semester[];
};

const DEPARTMENT_PATH =
    "/department/electronics-and-communication-engineering";

// KTU 2019 Scheme - Semester-wise manuals
const ktu2019Semesters: Semester[] = [
    {
        id: "s3",
        title: "S3",
        manuals: [
            {
                id: "2019-s3-1",
                title: "S3 Laboratory Manual",
                description: "KTU 2019 Scheme - Semester 3",
                file: "/documents/dept/ECE/digital-library/S3_AUTONOMOUS_LAB_ MANUAL_FINAL.pdf",
            },
        ],
    },
    {
        id: "s4",
        title: "S4",
        manuals: [
            {
                id: "2019-s4-1",
                title: "ECL 202 ANALOG CIRCUITS AND SIMULATION LAB",
                description: "KTU 2019 Scheme - Semester 4",
                file: "/documents/dept/ECE/digital-library/ECL-202-lab-manual-final.pdf",
            },
            {
                id: "2019-s4-2",
                title: "ECL 204 MICROCONTROLLERS AND SIMULATION LAB",
                description: "KTU 2019 Scheme - Semester 4",
                file: "/documents/dept/ECE/digital-library/ECL-204- MICROCON-TROLLERS-  LAB-MANUAL.pdf",
            },
        ],
    },
    {
        id: "s5",
        title: "S5",
        manuals: [
            {
                id: "2019-s5-1",
                title: "ECL 333 DIGITAL SIGNAL PROCESSING LABORATORY",
                description: "KTU 2019 Scheme - Semester 5",
                file: "/documents/dept/ECE/digital-library/ECL-333-DSP-LAB- MANUAL-FINAL.pdf",
            },
        ],
    },
    {
        id: "s6",
        title: "S6",
        manuals: [],
    },
    {
        id: "s7",
        title: "S7",
        manuals: [],
    },
];

// Scheme data
const schemes: Scheme[] = [
    {
        id: "2024",
        number: "01",
        title: "2024 Regulation",
        description:
            "Laboratory manuals and practical learning resources under the 2024 regulation.",
        manuals: [
            {
                id: "2024-1",
                title: "LINEAR INTEGRATED CIRCUITS AND SIMULATION LAB MANUAL",
                description: "Laboratory manual and practical experiments.",
                file: "/documents/dept/ECE/digital-library/ECLIL408_LIC.pdf",
            },
            {
                id: "2024-2",
                title: "ECL307 - ELECTRONIC CIRCUITS AND SIMULATION LAB",
                description: "Digital electronics experiments and procedures.",
                file: "/documents/dept/ECE/digital-library/S3_AUTONOMOUS_LAB_ MANUAL_FINAL.pdf",
            },
        ],
    },
    {
        id: "2019",
        number: "02",
        title: "KTU 2019 Scheme",
        description:
            "Laboratory manuals and practical resources following the KTU 2019 scheme.",
        semesters: ktu2019Semesters,
    },
];

export default function LabManualsPage() {
    const [activeScheme, setActiveScheme] = useState<Scheme | null>(null);
    const [activePDF, setActivePDF] = useState<ManualPDF | null>(null);

    useEffect(() => {
        const isModalOpen = Boolean(activeScheme || activePDF);

        document.body.style.overflow = isModalOpen ? "hidden" : "";

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                if (activePDF) {
                    setActivePDF(null);
                } else {
                    setActiveScheme(null);
                }
            }
        };

        window.addEventListener("keydown", handleEscape);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleEscape);
        };
    }, [activeScheme, activePDF]);

    const closeAllModals = () => {
        setActivePDF(null);
        setActiveScheme(null);
    };

    return (
        <>
            <SiteHeader />

            <main className="min-h-screen bg-[#FAF7F2]">
                {/* Hero Section */}
                <section className="relative isolate overflow-hidden bg-[#20235A] text-white">
                    <div className="pointer-events-none absolute -right-32 -top-36 h-[500px] w-[500px] rounded-full border border-[#D2B87C]/10" />
                    <div className="pointer-events-none absolute -right-12 -top-20 h-[340px] w-[340px] rounded-full border border-[#D2B87C]/15" />
                    <div className="pointer-events-none absolute -bottom-44 -left-32 h-[400px] w-[400px] rounded-full border border-white/5" />

                    <div className="relative mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24 xl:px-20">
                        <div className="max-w-3xl">
                            <div className="mb-6 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#D2B87C]" />
                                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#D2B87C]">
                                    Electronics & Communication Engineering
                                </p>
                            </div>

                            <h1 className="font-serif text-4xl font-medium leading-tight sm:text-5xl lg:text-6xl">
                                Lab Manuals
                            </h1>

                            <p className="mt-6 max-w-2xl text-sm leading-8 text-white/70 sm:text-base">
                                Access laboratory manuals, practical instructions and
                                academic resources organised according to the applicable
                                university regulations and schemes.
                            </p>
                        </div>

                        <div className="mt-10 flex flex-wrap items-center gap-3 text-xs text-white/60">
                            <Link
                                href="/"
                                className="transition-colors hover:text-[#D2B87C]"
                            >
                                Home
                            </Link>
                            <span>/</span>
                            <Link
                                href={DEPARTMENT_PATH}
                                className="transition-colors hover:text-[#D2B87C]"
                            >
                                Department
                            </Link>
                            <span>/</span>
                            <Link
                                href={`${DEPARTMENT_PATH}/digital-library`}
                                className="transition-colors hover:text-[#D2B87C]"
                            >
                                Digital Library
                            </Link>
                            <span>/</span>
                            <span className="text-[#D2B87C]">Lab Manuals</span>
                        </div>
                    </div>

                    <div className="relative h-1 w-full bg-[#D2B87C]" />
                </section>

                <InnerHeader />

                {/* Introduction */}
                <section className="px-5 py-16 sm:px-8 lg:px-14 lg:py-20 xl:px-20">
                    <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                        <div>
                            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8F7746]">
                                Academic Resources
                            </p>

                            <h2 className="mt-4 max-w-2xl font-serif text-3xl font-medium leading-tight text-[#20235A] sm:text-4xl">
                                Practical Learning, Organised for Easy Access
                            </h2>

                            <p className="mt-6 max-w-2xl text-[15px] leading-8 text-[#55545A]">
                                Explore the laboratory manuals available for different
                                academic schemes. Select a regulation to view its collection
                                of individual laboratory manuals and open the required PDF.
                            </p>
                        </div>

                        <div className="relative overflow-hidden bg-[#20235A] p-8 sm:p-10">
                            <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full border border-[#D2B87C]/20" />
                            <div className="relative">
                                <BookOpen className="h-8 w-8 text-[#D2B87C]" />

                                <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                                    Digital Library
                                </p>

                                <h3 className="mt-3 font-serif text-2xl text-white">
                                    Laboratory Manual Collection
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-white/65">
                                    Browse the available manuals by regulation and access each
                                    document individually.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Scheme Cards */}
                <section className="border-t border-[#D9D2C5] bg-[#F2EFE8] px-5 py-16 sm:px-8 lg:px-14 lg:py-20 xl:px-20">
                    <div className="mx-auto max-w-[1280px]">
                        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                            <div>
                                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8F7746]">
                                    Browse by Scheme
                                </p>

                                <h2 className="mt-3 font-serif text-3xl font-medium text-[#20235A] sm:text-4xl">
                                    Select Your Regulation
                                </h2>
                            </div>

                            <p className="max-w-md text-sm leading-7 text-[#68666A]">
                                Choose the applicable academic scheme to view its individual
                                laboratory manuals.
                            </p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                            {schemes.map((scheme) => {
                                const manualCount =
                                    scheme.manuals?.length ??
                                    scheme.semesters?.reduce(
                                        (total, semester) =>
                                            total + semester.manuals.length,
                                        0
                                    ) ??
                                    0;

                                return (
                                    <button
                                        key={scheme.id}
                                        type="button"
                                        onClick={() => setActiveScheme(scheme)}
                                        className="group relative overflow-hidden border border-[#D8D0C2] bg-[#FAF7F2] p-7 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#20235A]/40 hover:shadow-xl sm:p-9"
                                    >
                                        <div className="pointer-events-none absolute -right-8 -top-10 font-serif text-[150px] leading-none text-[#20235A]/[0.035] transition-colors group-hover:text-[#D2B87C]/20">
                                            {scheme.number}
                                        </div>

                                        <div className="relative">
                                            <div className="flex items-start justify-between gap-4">
                                                <div className="flex h-12 w-12 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                                                    <BookOpen className="h-5 w-5" />
                                                </div>

                                                <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                                                    <span className="h-1.5 w-1.5 rounded-full bg-[#D2B87C]" />
                                                    {manualCount} Manuals
                                                </span>
                                            </div>

                                            <h3 className="mt-8 font-serif text-2xl font-medium text-[#20235A] sm:text-3xl">
                                                {scheme.title}
                                            </h3>

                                            <p className="mt-4 max-w-md text-sm leading-7 text-[#68666A]">
                                                {scheme.description}
                                            </p>

                                            <div className="mt-8 flex items-center justify-between border-t border-[#D9D2C5] pt-5">
                                                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#20235A]">
                                                    View Lab Manuals
                                                </span>

                                                <span className="flex h-10 w-10 items-center justify-center bg-[#20235A] text-white transition-all group-hover:bg-[#D2B87C] group-hover:text-[#20235A]">
                                                    <ArrowRight className="h-4 w-4" />
                                                </span>
                                            </div>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Closing Section */}
                <section className="px-5 py-16 sm:px-8 lg:px-14 lg:py-20 xl:px-20">
                    <div className="mx-auto max-w-[1280px] border-l-2 border-[#D2B87C] pl-6 sm:pl-10">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8F7746]">
                            Learn · Practise · Explore
                        </p>

                        <h2 className="mt-3 font-serif text-2xl font-medium text-[#20235A] sm:text-3xl">
                            Supporting Hands-on Engineering Education
                        </h2>

                        <p className="mt-4 max-w-3xl text-sm leading-8 text-[#68666A]">
                            Laboratory manuals provide structured guidance for practical
                            sessions and help students connect theoretical concepts with
                            hands-on engineering applications.
                        </p>
                    </div>
                </section>
            </main>

            <FooterSection />

            {/* Scheme Modal */}
            {activeScheme && !activePDF && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-[#101326]/75 p-3 backdrop-blur-sm sm:p-6"
                    onMouseDown={(event) => {
                        if (event.target === event.currentTarget) {
                            setActiveScheme(null);
                        }
                    }}
                >
                    <div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="scheme-modal-title"
                        className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden bg-[#FAF7F2] shadow-2xl"
                    >
                        <div className="flex items-start justify-between gap-5 bg-[#20235A] px-6 py-6 text-white sm:px-8">
                            <div>
                                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                                    Laboratory Resources
                                </p>

                                <h2
                                    id="scheme-modal-title"
                                    className="mt-2 font-serif text-2xl font-medium sm:text-3xl"
                                >
                                    {activeScheme.title}
                                </h2>

                                <p className="mt-2 text-xs text-white/60">
                                    {activeScheme.id === "2019"
                                        ? `${activeScheme.semesters?.length ?? 0} semesters`
                                        : `${activeScheme.manuals?.length ?? 0} individual laboratory manuals`}
                                </p>
                            </div>

                            <button
                                type="button"
                                onClick={() => setActiveScheme(null)}
                                aria-label="Close manuals list"
                                className="flex h-9 w-9 shrink-0 items-center justify-center border border-white/20 text-white transition-colors hover:bg-white hover:text-[#20235A]"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        </div>

                        <div className="min-h-0 flex-1 overflow-y-auto px-5 py-6 sm:px-8 sm:py-8">
                            {activeScheme.id === "2019" ? (
                                /* KTU 2019 - Semester-wise PDF List */
                                <>
                                    <div className="mb-6">
                                        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                            Semester-wise Documents
                                        </p>

                                        <p className="mt-2 text-sm leading-7 text-[#68666A]">
                                            Select a semester to access its available laboratory
                                            manuals.
                                        </p>
                                    </div>

                                    <div className="space-y-5">
                                        {activeScheme.semesters?.map((semester) => (
                                            <div
                                                key={semester.id}
                                                className="border border-[#DED7CA] bg-white"
                                            >
                                                {/* Semester Heading */}
                                                <div className="flex items-center justify-between gap-3 border-b border-[#E8E2D8] bg-[#F2EFE8] px-5 py-4">
                                                    <div>
                                                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                                                            KTU 2019 Scheme
                                                        </p>

                                                        <h3 className="mt-1 font-serif text-xl font-medium text-[#20235A]">
                                                            {semester.title}
                                                        </h3>
                                                    </div>

                                                    <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#77747A]">
                                                        {semester.manuals.length}{" "}
                                                        {semester.manuals.length === 1
                                                            ? "PDF"
                                                            : "PDFs"}
                                                    </span>
                                                </div>

                                                {/* Semester PDF List */}
                                                <div className="p-4 sm:p-5">
                                                    {semester.manuals.length > 0 ? (
                                                        <div className="space-y-3">
                                                            {semester.manuals.map(
                                                                (manual, index) => (
                                                                    <div
                                                                        key={manual.id}
                                                                        className="flex flex-col gap-4 border border-[#E8E2D8] p-4 sm:flex-row sm:items-center sm:justify-between"
                                                                    >
                                                                        <div className="flex min-w-0 items-center gap-4">
                                                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#F2EFE8] text-[#20235A]">
                                                                                <FileText className="h-5 w-5" />
                                                                            </div>

                                                                            <div className="min-w-0">
                                                                                <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#9A8968]">
                                                                                    Document{" "}
                                                                                    {String(
                                                                                        index + 1
                                                                                    ).padStart(2, "0")}
                                                                                </p>

                                                                                <h4 className="mt-1 text-sm font-semibold text-[#20235A]">
                                                                                    {manual.title}
                                                                                </h4>

                                                                                <p className="mt-1 text-xs text-[#77747A]">
                                                                                    {manual.description}
                                                                                </p>
                                                                            </div>
                                                                        </div>

                                                                        <button
                                                                            type="button"
                                                                            onClick={() =>
                                                                                setActivePDF(manual)
                                                                            }
                                                                            className="flex shrink-0 items-center justify-center gap-2 bg-[#20235A] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#D2B87C] hover:text-[#20235A]"
                                                                        >
                                                                            <FileText className="h-4 w-4" />
                                                                            View PDF
                                                                            <ArrowRight className="h-3.5 w-3.5" />
                                                                        </button>
                                                                    </div>
                                                                )
                                                            )}
                                                        </div>
                                                    ) : (
                                                        /* Empty Semester Placeholder */
                                                        <div className="flex items-center gap-4 border border-dashed border-[#D8D0C2] bg-[#FAF7F2] px-5 py-6">
                                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#F2EFE8] text-[#9A8968]">
                                                                <FileText className="h-5 w-5" />
                                                            </div>

                                                            <div>
                                                                <h4 className="text-sm font-semibold text-[#20235A]">
                                                                    No Manuals Available
                                                                </h4>

                                                                <p className="mt-1 text-xs leading-6 text-[#77747A]">
                                                                    Laboratory manuals for{" "}
                                                                    {semester.title} will be added here.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            ) : (
                                /* 2024 Regulation - Individual PDF List */
                                <>
                                    <div className="mb-6">
                                        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                            Available Documents
                                        </p>

                                        <p className="mt-2 text-sm leading-7 text-[#68666A]">
                                            Select a laboratory manual below to open and view its PDF.
                                        </p>
                                    </div>

                                    <div className="space-y-3">
                                        {activeScheme.manuals?.map((manual, index) => (
                                            <div
                                                key={manual.id}
                                                className="flex flex-col gap-4 border border-[#DED7CA] bg-white p-4 transition-colors hover:border-[#D2B87C] sm:flex-row sm:items-center sm:justify-between sm:p-5"
                                            >
                                                <div className="flex min-w-0 items-start gap-4">
                                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#F2EFE8] text-[#20235A]">
                                                        <FileText className="h-5 w-5" />
                                                    </div>

                                                    <div className="min-w-0">
                                                        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#9A8968]">
                                                            Manual{" "}
                                                            {String(index + 1).padStart(2, "0")}
                                                        </p>

                                                        <h3 className="mt-1 text-sm font-semibold leading-6 text-[#20235A]">
                                                            {manual.title}
                                                        </h3>

                                                        <p className="mt-1 text-xs leading-6 text-[#77747A]">
                                                            {manual.description}
                                                        </p>
                                                    </div>
                                                </div>

                                                <button
                                                    type="button"
                                                    onClick={() => setActivePDF(manual)}
                                                    className="flex shrink-0 items-center justify-center gap-2 bg-[#20235A] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#D2B87C] hover:text-[#20235A]"
                                                >
                                                    <FileText className="h-4 w-4" />
                                                    View PDF
                                                    <ArrowRight className="h-3.5 w-3.5" />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>

                        <div className="flex items-center justify-between border-t border-[#DED7CA] bg-[#F2EFE8] px-6 py-4 sm:px-8">
                            <span className="text-xs text-[#77747A]">
                                NCERC · Digital Library
                            </span>

                            <button
                                type="button"
                                onClick={() => setActiveScheme(null)}
                                className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#20235A] hover:text-[#8F7746]"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Individual PDF Viewer Modal */}
            {activePDF && (
                <div
                    className="fixed inset-0 z-[110] flex items-center justify-center bg-[#101326]/85 p-2 backdrop-blur-sm sm:p-5"
                    onMouseDown={(event) => {
                        if (event.target === event.currentTarget) {
                            setActivePDF(null);
                        }
                    }}
                >
                    <div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="pdf-modal-title"
                        className="flex h-[94vh] w-full max-w-6xl flex-col overflow-hidden bg-[#FAF7F2] shadow-2xl"
                    >
                        <div className="flex flex-wrap items-center justify-between gap-4 bg-[#20235A] px-4 py-4 text-white sm:px-6">
                            <div className="flex min-w-0 items-center gap-3">
                                <button
                                    type="button"
                                    onClick={() => setActivePDF(null)}
                                    aria-label="Back to manuals list"
                                    className="flex h-9 w-9 shrink-0 items-center justify-center border border-white/20 transition-colors hover:bg-white hover:text-[#20235A]"
                                >
                                    <ArrowLeft className="h-4 w-4" />
                                </button>

                                <div className="min-w-0">
                                    <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                        PDF Document
                                    </p>

                                    <h2
                                        id="pdf-modal-title"
                                        className="mt-1 truncate text-sm font-semibold sm:text-base"
                                    >
                                        {activePDF.title}
                                    </h2>
                                </div>
                            </div>

                            <div className="flex shrink-0 items-center gap-2">
                                <a
                                    href={activePDF.file}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-9 items-center gap-2 border border-white/25 px-3 text-[10px] font-semibold uppercase tracking-[0.1em] transition-colors hover:bg-white hover:text-[#20235A]"
                                >
                                    <ExternalLink className="h-3.5 w-3.5" />
                                    <span className="hidden sm:inline">Open PDF</span>
                                </a>

                                <a
                                    href={activePDF.file}
                                    download
                                    className="flex h-9 items-center gap-2 bg-[#D2B87C] px-3 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#20235A] transition-colors hover:bg-white"
                                >
                                    <Download className="h-3.5 w-3.5" />
                                    <span className="hidden sm:inline">Download</span>
                                </a>

                                <button
                                    type="button"
                                    onClick={closeAllModals}
                                    aria-label="Close PDF viewer"
                                    className="flex h-9 w-9 items-center justify-center border border-white/20 transition-colors hover:bg-white hover:text-[#20235A]"
                                >
                                    <X className="h-4 w-4" />
                                </button>
                            </div>
                        </div>

                        <div className="relative min-h-0 flex-1 bg-[#E5E2DC]">
                            <iframe
                                key={activePDF.id}
                                src={`${activePDF.file}#toolbar=1&navpanes=0`}
                                title={activePDF.title}
                                className="h-full w-full border-0"
                            />
                        </div>

                        <div className="flex items-center justify-between gap-3 border-t border-[#DED7CA] bg-[#F2EFE8] px-4 py-3 sm:px-6">
                            <p className="truncate text-[10px] text-[#77747A]">
                                {activePDF.title}
                            </p>

                            <button
                                type="button"
                                onClick={() => setActivePDF(null)}
                                className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#20235A] hover:text-[#8F7746]"
                            >
                                Back to List
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
