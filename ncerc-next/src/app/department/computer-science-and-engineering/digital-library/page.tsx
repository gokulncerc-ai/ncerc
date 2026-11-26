
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { ElementType } from "react";
import {
  BookOpen,
  GraduationCap,
  ClipboardList,
  Landmark,
  FileText,
  X,
  ExternalLink,
  ArrowUpRight,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../DepartmentNav/DepartmentNavigation";

// SEO metadata (move to a separate layout.tsx if needed)
// title: "Top Engineering Colleges in Thrissur | Computer Science and Engineering - NCERC"
// description: "E-resources of the Department of Computer Science and Engineering at Nehru College of Engineering and Research Centre, Thrissur: lab manuals, course materials, university question papers and free e-books."

const BASE_PATH =
  "/department/computer-science-and-engineering/digital-library";

interface ResourceDocument {
  title: string;
  description: string;
  href: string;
}

interface ResourceCard {
  title: string;
  description: string;
  href?: string;
  type: "link" | "ebook-modal" | "lab-modal";
  icon: ElementType;
}

// E-Books PDF Documents
const ebookResources: ResourceDocument[] = [
  {
    title: "Abraham-Silberschatz-Operating-System-Concepts-10th-2018",
    description: "Free e-book access and academic reference materials.",
    href: "/documents/dept/CSE/e-resources/e-books/Operating_System_Concepts_10th_Edition.pdf",
  },
  {
    title: "data-structures-by-d-samantha",
    description: "Free e-book access and academic reference materials.",
    href: "/documents/dept/CSE/e-resources/e-books/Data_Structures_D_Samantha.pdf",
  },
  {
    title:
      "Distributed computing_Ajay D Kshemakalyanikalyani, Mukesh singhal",
    description: "Free e-book access and academic reference materials.",
    href: "/documents/dept/CSE/e-resources/e-books/Distributed_Computing_Ajay_Kshemakalyani_Mukesh_Singhal.pdf",
  },
  {
    title: "Fundamentals_of_Database Systems_6th_Edition-1",
    description: "Free e-book access and academic reference materials.",
    href: "/documents/dept/CSE/e-resources/e-books/Database_Systems_6th_Edition.pdf",
  },
  {
    title: "CSE_Free_Ebooks",
    description: "Free e-book access and academic reference materials.",
    href: "/documents/dept/CSE/e-resources/e-books/CSE_Free_Ebooks.pdf",
  },
];

// Lab Manuals PDF Documents
// Add the actual PDF details under the appropriate semester.
const labManualResources: {
  semester: string;
  resources: ResourceDocument[];
}[] = [
    {
      semester: "S3",
      resources: [
        // Example:
        {
          title: "S3 Lab Manual",
          description: "Laboratory manual for S3 students.",
          href: "/documents/dept/CSE/e-resources/lab-manuals/Data_Structures_Lab_Manual.pdf",
        },
      ],
    },
    {
      semester: "S4",
      resources: [
        // Example:
        {
          title: "S4 Lab Manual",
          description: "Laboratory manual for S4 students.",
          href: "/documents/dept/CSE/e-resources/lab-manuals/OS_Lab_Manual.pdf",
        },
      ],
    },
  ];

// Resource Categories
const resourceCards: ResourceCard[] = [
  {
    title: "COURSE MATERIALS",
    description: "Access academic notes and course-related study materials.",
    href: `${BASE_PATH}/course-materials`,
    type: "link",
    icon: BookOpen,
  },
  {
    title: "E-BOOKS",
    description: "Explore digital books and additional reading resources.",
    type: "ebook-modal",
    icon: GraduationCap,
  },
  {
    title: "LAB MANUALS",
    description: "Browse laboratory manuals and practical workbooks.",
    type: "lab-modal",
    icon: ClipboardList,
  },
  {
    title: "UNIVERSITY QUESTION PAPERS",
    description: "Find previous university examination question papers.",
    href: `${BASE_PATH}/university-question-papers`,
    type: "link",
    icon: Landmark,
  },
];

const cardClassName =
  "group relative flex min-h-[260px] flex-col items-start overflow-hidden border border-[#20235A]/10 bg-white p-7 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#D2B87C] hover:shadow-xl hover:shadow-[#20235A]/[0.06] sm:p-8";

export default function DigitalLibraryPage() {
  const [isEbookModalOpen, setIsEbookModalOpen] = useState(false);
  const [isLabModalOpen, setIsLabModalOpen] = useState(false);

  // Modal keyboard handling and background scroll lock
  useEffect(() => {
    if (!isEbookModalOpen && !isLabModalOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsEbookModalOpen(false);
        setIsLabModalOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isEbookModalOpen, isLabModalOpen]);

  return (
    <>
      <SiteHeader />

      {/* E-Resources Hero */}
      <section className="relative isolate overflow-hidden bg-[#20235A]">
        {/* Background Decoration */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-32 -top-40 h-[560px] w-[560px] rounded-full border border-[#D2B87C]/10" />
          <div className="absolute -right-16 -top-24 h-[400px] w-[400px] rounded-full border border-[#D2B87C]/15" />
          <div className="absolute -bottom-48 -left-32 h-[480px] w-[480px] rounded-full border border-white/[0.04]" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#20235A] via-[#20235A] to-[#171A46]" />
        </div>

        <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
          <div className="flex min-h-[480px] flex-col justify-center py-20 sm:py-24 lg:min-h-[540px] lg:py-28">
            {/* Department Label */}
            <div className="mb-8 flex flex-wrap items-center gap-4">
              <span className="h-px w-12 bg-[#D2B87C]" />

              <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D2B87C]">
                Computer Science and Engineering
              </span>
            </div>

            {/* Main Heading */}
            <div className="max-w-5xl">
              <h1 className="font-serif text-[46px] font-normal leading-[1.02] tracking-[-0.035em] text-white sm:text-[60px] lg:text-[72px] xl:text-[78px]">
                Digital Knowledge.
                <span className="block text-[#D2B87C]">
                  E-Resources
                </span>
              </h1>

              <p className="mt-6 max-w-2xl font-sans text-[15px] leading-8 text-white/65 sm:text-[17px]">
                Access digital learning materials, academic references and
                online resources that support knowledge sharing, research
                and continuous learning.
              </p>
            </div>

            {/* Bottom Information */}
            <div className="mt-12 flex flex-col gap-6 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#D2B87C]/40">
                  <BookOpen className="h-5 w-5 text-[#D2B87C]" />
                </div>

                <div>
                  <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                    Learning Resources
                  </p>

                  <p className="mt-1 font-sans text-sm text-white/55">
                    Explore. Learn. Research. Grow.
                  </p>
                </div>
              </div>

              {/* Breadcrumb */}
              <div className="flex flex-wrap items-center gap-2 font-sans text-xs text-white/45 sm:text-sm">
                <Link
                  href="/department/computer-science-and-engineering"
                  className="transition-colors hover:text-[#D2B87C]"
                >
                  Department
                </Link>

                <span className="text-[#D2B87C]/70">/</span>

                <span className="text-[#D2B87C]">
                  E-Resources
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Accent */}
        <div className="h-px bg-[#D2B87C]/30" />
      </section>

      {/* Page Content */}
      <main className="bg-white">
        <InnerHeader />

        {/* E-Resources Section */}
        <section className="bg-[#FAF7F2] px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
          <div className="mx-auto max-w-[1440px]">
            {/* Section Heading */}
            <div className="mb-10 border-b border-[#20235A]/10 pb-5 sm:mb-12">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#D2B87C]" />

                <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                  Digital Library
                </p>
              </div>

              <div className="mt-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
                <div>
                  <h2 className="font-serif text-3xl font-normal tracking-tight text-[#20235A] sm:text-4xl">
                    E-Resources
                  </h2>

                  <p className="mt-3 max-w-xl font-sans text-sm leading-7 text-[#1E1917]/65 sm:text-[15px]">
                    Explore academic materials, digital books, laboratory
                    manuals and university question papers.
                  </p>
                </div>

                <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                  04 Resource Categories
                </span>
              </div>
            </div>

            {/* Resource Cards Grid */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {resourceCards.map((card, index) => {
                const Icon = card.icon;

                const cardContent = (
                  <>
                    {/* Card Number */}
                    <span className="absolute right-7 top-7 font-serif text-3xl text-[#20235A]/[0.07] transition-colors group-hover:text-[#D2B87C]/40">
                      0{index + 1}
                    </span>

                    {/* Icon */}
                    <div className="flex h-14 w-14 items-center justify-center border border-[#D2B87C]/50 bg-[#FAF7F2] transition-colors duration-300 group-hover:bg-[#20235A]">
                      <Icon className="h-6 w-6 text-[#8F7746] transition-colors group-hover:text-[#D2B87C]" />
                    </div>

                    {/* Card Content */}
                    <div className="mt-8">
                      <h3 className="max-w-[220px] font-serif text-xl font-semibold leading-snug text-[#20235A] transition-colors group-hover:text-[#8F7746]">
                        {card.title}
                      </h3>

                      <p className="mt-3 font-sans text-[13px] leading-6 text-[#1E1917]/60">
                        {card.description}
                      </p>
                    </div>

                    {/* Card Action */}
                    <div className="mt-auto flex w-full items-center justify-between border-t border-[#20235A]/10 pt-5">
                      <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                        {card.type === "ebook-modal"
                          ? "Explore E-Books"
                          : card.type === "lab-modal"
                            ? "Explore Lab Manuals"
                            : "Explore Resources"}
                      </span>

                      <span className="flex h-9 w-9 items-center justify-center border border-[#D2B87C]/60 transition-all duration-300 group-hover:border-[#20235A] group-hover:bg-[#20235A]">
                        <ArrowUpRight className="h-4 w-4 text-[#20235A] transition-colors group-hover:text-white" />
                      </span>
                    </div>
                  </>
                );

                if (card.type === "ebook-modal" || card.type === "lab-modal") {
                  return (
                    <button
                      key={card.title}
                      type="button"
                      onClick={() => {
                        if (card.type === "ebook-modal") {
                          setIsEbookModalOpen(true);
                        } else {
                          setIsLabModalOpen(true);
                        }
                      }}
                      aria-haspopup="dialog"
                      className={`${cardClassName} w-full`}
                    >
                      {cardContent}
                    </button>
                  );
                }

                return (
                  <Link
                    key={card.title}
                    href={card.href!}
                    className={cardClassName}
                  >
                    {cardContent}
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <FooterSection />

      {/* E-Books Modal */}
      {isEbookModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#11142F]/75 p-4 backdrop-blur-sm sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setIsEbookModalOpen(false);
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="ebook-modal-title"
            className="relative flex max-h-[85vh] w-full max-w-2xl flex-col overflow-hidden bg-[#FAF7F2] shadow-2xl"
          >
            {/* Modal Header */}
            <div className="relative overflow-hidden bg-[#20235A] px-6 py-7 sm:px-9 sm:py-9">
              <div className="pointer-events-none absolute -right-12 -top-20 h-52 w-52 rounded-full border border-[#D2B87C]/15" />
              <div className="pointer-events-none absolute -right-4 -top-12 h-36 w-36 rounded-full border border-[#D2B87C]/15" />

              <div className="relative flex items-start justify-between gap-5">
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <span className="h-px w-8 bg-[#D2B87C]" />

                    <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                      Digital Library
                    </p>
                  </div>

                  <h2
                    id="ebook-modal-title"
                    className="font-serif text-3xl text-white sm:text-4xl"
                  >
                    E-Books Collection
                  </h2>

                  <p className="mt-2 font-sans text-sm leading-6 text-white/60">
                    Select a document to open it in a new tab.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setIsEbookModalOpen(false)}
                  aria-label="Close E-Books modal"
                  className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/20 text-white/80 transition-colors hover:border-[#D2B87C] hover:bg-[#D2B87C] hover:text-[#20235A]"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* PDF List */}
            <div className="overflow-y-auto px-5 py-6 sm:px-9 sm:py-8">
              <div className="mb-5 flex items-center justify-between">
                <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                  Available Documents
                </p>

                <span className="font-sans text-xs text-[#1E1917]/45">
                  {ebookResources.length}{" "}
                  {ebookResources.length === 1 ? "Document" : "Documents"}
                </span>
              </div>

              <div className="space-y-3">
                {ebookResources.map((ebook, index) => (
                  <div
                    key={ebook.href}
                    className="group flex items-center gap-4 border border-[#20235A]/10 bg-white p-4 transition-colors hover:border-[#D2B87C] sm:p-5"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#FAF7F2] transition-colors group-hover:bg-[#20235A]">
                      <FileText className="h-5 w-5 text-[#8F7746] transition-colors group-hover:text-[#D2B87C]" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8F7746]">
                        Document 0{index + 1}
                      </p>

                      <h3 className="mt-1 font-serif text-base font-semibold text-[#20235A] sm:text-lg">
                        {ebook.title}
                      </h3>

                      <p className="mt-1 font-sans text-xs leading-5 text-[#1E1917]/55">
                        {ebook.description}
                      </p>
                    </div>

                    <a
                      href={encodeURI(ebook.href)}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${ebook.title} in a new tab`}
                      className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#D2B87C]/60 text-[#20235A] transition-all hover:border-[#20235A] hover:bg-[#20235A] hover:text-white"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                ))}
              </div>

              {ebookResources.length === 0 && (
                <p className="py-8 text-center font-sans text-sm text-[#1E1917]/60">
                  No E-Books are currently available.
                </p>
              )}
            </div>

            {/* Modal Footer */}
            <div className="border-t border-[#20235A]/10 px-6 py-4 sm:px-9">
              <p className="font-sans text-xs leading-5 text-[#1E1917]/50">
                Select any document to view it separately in your browser.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Lab Manuals Modal */}
      {isLabModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#11142F]/75 p-4 backdrop-blur-sm sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setIsLabModalOpen(false);
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="lab-modal-title"
            className="relative flex max-h-[85vh] w-full max-w-2xl flex-col overflow-hidden bg-[#FAF7F2] shadow-2xl"
          >
            {/* Modal Header */}
            <div className="relative overflow-hidden bg-[#20235A] px-6 py-7 sm:px-9 sm:py-9">
              <div className="pointer-events-none absolute -right-12 -top-20 h-52 w-52 rounded-full border border-[#D2B87C]/15" />
              <div className="pointer-events-none absolute -right-4 -top-12 h-36 w-36 rounded-full border border-[#D2B87C]/15" />

              <div className="relative flex items-start justify-between gap-5">
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <span className="h-px w-8 bg-[#D2B87C]" />

                    <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                      Digital Library
                    </p>
                  </div>

                  <h2
                    id="lab-modal-title"
                    className="font-serif text-3xl text-white sm:text-4xl"
                  >
                    Lab Manuals
                  </h2>

                  <p className="mt-2 font-sans text-sm leading-6 text-white/60">
                    Select your semester to access the laboratory manuals.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setIsLabModalOpen(false)}
                  aria-label="Close Lab Manuals modal"
                  className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/20 text-white/80 transition-colors hover:border-[#D2B87C] hover:bg-[#D2B87C] hover:text-[#20235A]"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Semester Sections */}
            <div className="overflow-y-auto px-5 py-6 sm:px-9 sm:py-8">
              <div className="space-y-6">
                {labManualResources.map((semester) => (
                  <div
                    key={semester.semester}
                    className="border border-[#20235A]/10 bg-white p-5 sm:p-6"
                  >
                    {/* Semester Heading */}
                    <div className="mb-4 flex items-center justify-between border-b border-[#D2B87C]/40 pb-3">
                      <h3 className="font-serif text-2xl font-semibold text-[#20235A]">
                        {semester.semester}
                      </h3>

                      <span className="font-sans text-xs text-[#1E1917]/45">
                        {semester.resources.length}{" "}
                        {semester.resources.length === 1
                          ? "Document"
                          : "Documents"}
                      </span>
                    </div>

                    {/* Semester PDF Documents */}
                    {semester.resources.length > 0 ? (
                      <div className="space-y-3">
                        {semester.resources.map((resource, index) => (
                          <div
                            key={resource.href}
                            className="group flex items-center gap-4 border border-[#20235A]/10 bg-[#FAF7F2] p-4 transition-colors hover:border-[#D2B87C] sm:p-5"
                          >
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-white transition-colors group-hover:bg-[#20235A]">
                              <FileText className="h-5 w-5 text-[#8F7746] transition-colors group-hover:text-[#D2B87C]" />
                            </div>

                            <div className="min-w-0 flex-1">
                              <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8F7746]">
                                Document 0{index + 1}
                              </p>

                              <h4 className="mt-1 font-serif text-base font-semibold text-[#20235A] sm:text-lg">
                                {resource.title}
                              </h4>

                              <p className="mt-1 font-sans text-xs leading-5 text-[#1E1917]/55">
                                {resource.description}
                              </p>
                            </div>

                            <a
                              href={encodeURI(resource.href)}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Open ${resource.title} in a new tab`}
                              className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#D2B87C]/60 text-[#20235A] transition-all hover:border-[#20235A] hover:bg-[#20235A] hover:text-white"
                            >
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="py-4 font-sans text-sm text-[#1E1917]/50">
                        No lab manuals are currently available for this semester.
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="border-t border-[#20235A]/10 px-6 py-4 sm:px-9">
              <p className="font-sans text-xs leading-5 text-[#1E1917]/50">
                Select any document to view it separately in your browser.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
