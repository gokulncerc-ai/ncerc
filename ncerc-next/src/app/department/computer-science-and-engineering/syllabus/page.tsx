
"use client";

import { useEffect, useState } from "react";
import {
  CalendarDays,
  FileText,
  BookOpen,
  GraduationCap,
  X,
  Download,
  ExternalLink,
  ArrowLeft,
  ChevronRight,
  FolderOpen,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../DepartmentNav/DepartmentNavigation";

type PdfItem = {
  id: string;
  title: string;
  file: string;
};

type DocumentCategory = {
  id: string;
  title: string;
  description: string;
  icon: typeof CalendarDays;
  pdfs: PdfItem[];
};

// Each category can contain multiple individual PDF files.
const documents: DocumentCategory[] = [
  {
    id: "academic-calendar",
    title: "Academic Calendar",
    description: "Academic calendars and important academic dates.",
    icon: CalendarDays,
    pdfs: [
      {
        id: "calendar-2024-25",
        title: "Academic Calendar 2024 - 2025",
        file: "/documents/dept/CSE/syllabus/academic-calendar-semester-4-2024-scheme.pdf",
      },
      {
        id: "calendar-2025-26",
        title: "Btech-Academic-Calender-Odd-Even-Semesters-2025-26",
        file: "/documents/dept/CSE/syllabus/btech-academic-calendar-odd-even-semesters-2025-26.pdf",
      },

    ],
  },
  {
    id: "auto-2024",
    title: "Auto - 2024",
    description: "Academic documents and syllabus for Auto - 2024.",
    icon: FileText,
    pdfs: [
      {
        id: "auto-2024-semester-1",
        title: "Minor and Honor Courses",
        file: "/documents/dept/CSE/syllabus/minor-and-honor-courses.pdf",
      },
      {
        id: "auto-2024-semester-2",
        title: "Semester 3",
        file: "/documents/dept/CSE/syllabus/semester-3.pdf",
      },
      {
        id: "auto-2024-semester-3",
        title: "Semester 4",
        file: "/documents/dept/CSE/syllabus/semester-4.pdf",
      },
     
    ],
  },
  {
    id: "auto-2025",
    title: "Auto - 2025",
    description: "Academic documents and syllabus for Auto - 2025.",
    icon: FileText,
    pdfs: [
      {
        id: "auto-2025-semester-1",
        title: "Semester 1",
        file: "/documents/cse/syllabus/auto-2025/semester-1.pdf",
      },
      {
        id: "auto-2025-semester-2",
        title: "Semester 2",
        file: "/documents/cse/syllabus/auto-2025/semester-2.pdf",
      },
      {
        id: "auto-2025-semester-3",
        title: "Semester 3",
        file: "/documents/cse/syllabus/auto-2025/semester-3.pdf",
      },
      {
        id: "auto-2025-semester-4",
        title: "Semester 4",
        file: "/documents/cse/syllabus/auto-2025/semester-4.pdf",
      },
    ],
  },
  {
    id: "ktu",
    title: "KTU",
    description: "KTU syllabus, regulations and academic documents.",
    icon: GraduationCap,
    pdfs: [
      {
        id: "ktu-regulations",
        title: "KTU Regulations",
        file: "/documents/cse/syllabus/ktu/ktu-regulations.pdf",
      },
      {
        id: "ktu-syllabus",
        title: "KTU Syllabus",
        file: "/documents/cse/syllabus/ktu/ktu-syllabus.pdf",
      },
      {
        id: "ktu-curriculum",
        title: "KTU Curriculum",
        file: "/documents/cse/syllabus/ktu/ktu-curriculum.pdf",
      },
    ],
  },
  {
    id: "syllabus-book",
    title: "Syllabus Book",
    description: "Department syllabus books and academic handbooks.",
    icon: BookOpen,
    pdfs: [
      {
        id: "syllabus-book-2024",
        title: "Syllabus Book 2024",
        file: "/documents/cse/syllabus/syllabus-book/syllabus-book-2024.pdf",
      },
      {
        id: "syllabus-book-2025",
        title: "Syllabus Book 2025",
        file: "/documents/cse/syllabus/syllabus-book/syllabus-book-2025.pdf",
      },
    ],
  },
];

export default function SyllabusPage() {
  const [selectedCategory, setSelectedCategory] =
    useState<DocumentCategory | null>(null);

  const [selectedPdf, setSelectedPdf] = useState<PdfItem | null>(null);

  // Close the topmost modal with Escape.
  useEffect(() => {
    if (!selectedCategory && !selectedPdf) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (selectedPdf) {
          setSelectedPdf(null);
        } else {
          setSelectedCategory(null);
        }
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedCategory, selectedPdf]);

  const closeAllModals = () => {
    setSelectedPdf(null);
    setSelectedCategory(null);
  };

  return (
    <>
      <SiteHeader />

      {/* Page Title Banner */}
      <section className="relative isolate overflow-hidden bg-[#20235A]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#20235A] via-[#20235A] to-[#171A43]" />

        {/* Geometric Decorations */}
        <div className="pointer-events-none absolute -right-24 top-12 h-[430px] w-[430px] rounded-full border border-[#D2B87C]/15" />
        <div className="pointer-events-none absolute -right-10 top-28 h-[290px] w-[290px] rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -left-28 bottom-[-180px] h-[360px] w-[360px] rounded-full border border-[#D2B87C]/10" />

        <div className="relative mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-24 xl:px-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#D2B87C]" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D2B87C] sm:text-xs">
                Department of Computer Science and Engineering
              </p>
            </div>

            <h1 className="mt-7 font-serif text-[42px] font-normal leading-[1.06] tracking-[-0.035em] text-white sm:text-[56px] lg:text-[64px] xl:text-[72px]">
              <span className="italic text-[#D2B87C]">Syllabus</span>
            </h1>

            <div className="mt-7 h-px w-20 bg-[#D2B87C]" />
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[#D2B87C] to-transparent" />
      </section>

      {/* Main Content */}
      <main className="min-h-screen bg-[#FAF7F2]">
        <InnerHeader />

        <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-[1440px]">

            {/* Section Heading */}
            <div className="mb-10 max-w-2xl">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#D2B87C]" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8B7445] sm:text-xs">
                  Academic Resources
                </p>
              </div>

              <h2 className="font-serif text-3xl font-normal tracking-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                Academic Documents
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-[#686868] sm:text-base">
                Access the academic calendars, syllabus documents and
                curriculum resources of the Computer Science and Engineering
                department.
              </p>
            </div>

            {/* Main Category Cards */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {documents.map((category, index) => {
                const Icon = category.icon;

                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    aria-haspopup="dialog"
                    className="group relative flex min-h-[230px] flex-col overflow-hidden border border-[#E8E2D6] bg-white p-7 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#D2B87C] hover:shadow-[0_18px_45px_rgba(32,35,90,0.09)] sm:p-8"
                  >
                    {/* Number */}
                    <div className="absolute right-7 top-7 font-serif text-4xl font-normal text-[#20235A]/[0.06] transition-colors duration-300 group-hover:text-[#D2B87C]/30">
                      0{index + 1}
                    </div>

                    {/* Icon */}
                    <div className="flex h-12 w-12 items-center justify-center bg-[#20235A] text-[#D2B87C] transition-colors duration-300 group-hover:bg-[#D2B87C] group-hover:text-[#20235A]">
                      <Icon size={22} strokeWidth={1.6} />
                    </div>

                    {/* Content */}
                    <div className="mt-7">
                      <h3 className="font-serif text-xl font-medium text-[#20235A] transition-colors duration-300 group-hover:text-[#8B7445] sm:text-2xl">
                        {category.title}
                      </h3>

                      <p className="mt-3 max-w-xs text-sm leading-6 text-[#777777]">
                        {category.description}
                      </p>
                    </div>

                    {/* PDF Count */}
                    <div className="mt-auto flex items-center justify-between pt-7">
                      <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#20235A]">
                        {category.pdfs.length} Documents
                      </span>

                      <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#8B7445]">
                        View All
                        <ChevronRight
                          size={15}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </span>
                    </div>

                    {/* Bottom Accent */}
                    <div className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-[#D2B87C] transition-transform duration-300 group-hover:scale-x-100" />
                  </button>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <FooterSection />

      {/* LEVEL 1: Category Modal - Displays Multiple PDFs */}
      {selectedCategory && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#101225]/80 p-3 backdrop-blur-sm sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedCategory(null);
            }
          }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="category-modal-title"
        >
          <div className="flex max-h-[88vh] w-full max-w-3xl flex-col overflow-hidden bg-white shadow-2xl">

            {/* Category Modal Header */}
            <div className="flex shrink-0 items-center justify-between gap-4 border-b border-[#EAE6DD] px-5 py-5 sm:px-8">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                  <FolderOpen size={21} />
                </div>

                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#9A855A] sm:text-[10px]">
                    Academic Resources
                  </p>

                  <h2
                    id="category-modal-title"
                    className="font-serif text-xl font-medium text-[#20235A] sm:text-2xl"
                  >
                    {selectedCategory.title}
                  </h2>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedCategory(null)}
                className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#20235A] text-white transition-colors hover:bg-[#D2B87C] hover:text-[#20235A]"
                aria-label="Close category modal"
              >
                <X size={19} />
              </button>
            </div>

            {/* PDF List */}
            <div className="flex-1 overflow-y-auto bg-[#FAF7F2] p-5 sm:p-8">
              <div className="mb-6">
                <p className="text-sm leading-6 text-[#777777]">
                  Select a document below to view its PDF.
                </p>
              </div>

              <div className="space-y-3">
                {selectedCategory.pdfs.map((pdf, index) => (
                  <button
                    key={pdf.id}
                    type="button"
                    onClick={() => setSelectedPdf(pdf)}
                    className="group flex w-full items-center gap-4 border border-[#E8E2D6] bg-white p-4 text-left transition-all duration-300 hover:border-[#D2B87C] hover:shadow-md sm:p-5"
                  >
                    {/* PDF Icon */}
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#20235A]/[0.06] text-[#20235A] transition-colors group-hover:bg-[#20235A] group-hover:text-[#D2B87C]">
                      <FileText size={20} strokeWidth={1.6} />
                    </div>

                    {/* PDF Title */}
                    <div className="min-w-0 flex-1">
                      <p className="mb-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#9A855A]">
                        Document {String(index + 1).padStart(2, "0")}
                      </p>

                      <h3 className="font-serif text-base font-medium text-[#20235A] sm:text-lg">
                        {pdf.title}
                      </h3>

                      <p className="mt-1 text-xs text-[#888888]">
                        PDF Document
                      </p>
                    </div>

                    {/* View Icon */}
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#E8E2D6] text-[#20235A] transition-all group-hover:border-[#D2B87C] group-hover:bg-[#D2B87C]">
                      <ChevronRight size={18} />
                    </div>
                  </button>
                ))}
              </div>

              {selectedCategory.pdfs.length === 0 && (
                <p className="py-10 text-center text-sm text-[#777777]">
                  No PDF documents have been added to this category yet.
                </p>
              )}
            </div>

            {/* Category Modal Footer */}
            <div className="flex shrink-0 items-center justify-between border-t border-[#EAE6DD] bg-white px-5 py-4 sm:px-8">
              <p className="text-xs text-[#777777]">
                {selectedCategory.pdfs.length} PDF Documents
              </p>

              <button
                type="button"
                onClick={() => setSelectedCategory(null)}
                className="text-xs font-semibold uppercase tracking-[0.12em] text-[#20235A] transition-colors hover:text-[#9A855A]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* LEVEL 2: Individual PDF Viewer Modal */}
      {selectedPdf && (
        <div
          className="fixed inset-0 z-[110] flex items-center justify-center bg-[#101225]/90 p-2 backdrop-blur-sm sm:p-5"
          role="dialog"
          aria-modal="true"
          aria-labelledby="pdf-modal-title"
        >
          <div className="flex h-[94vh] w-full max-w-7xl flex-col overflow-hidden bg-white shadow-2xl sm:h-[90vh]">

            {/* PDF Viewer Header */}
            <div className="flex shrink-0 items-center justify-between gap-3 border-b border-[#EAE6DD] bg-white px-3 py-3 sm:px-6 sm:py-4">

              <div className="flex min-w-0 items-center gap-3">
                {/* Back to PDF List */}
                <button
                  type="button"
                  onClick={() => setSelectedPdf(null)}
                  className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#E8E2D6] text-[#20235A] transition-colors hover:border-[#D2B87C] hover:bg-[#FAF7F2]"
                  aria-label="Back to document list"
                  title="Back to document list"
                >
                  <ArrowLeft size={19} />
                </button>

                <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                  <FileText size={19} />
                </div>

                <div className="min-w-0">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#9A855A] sm:text-[10px]">
                    PDF Document
                  </p>

                  <h2
                    id="pdf-modal-title"
                    className="truncate font-serif text-base font-medium text-[#20235A] sm:text-xl"
                  >
                    {selectedPdf.title}
                  </h2>
                </div>
              </div>

              {/* PDF Actions */}
              <div className="flex shrink-0 items-center gap-2">
                <a
                  href={selectedPdf.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden h-10 items-center gap-2 border border-[#E8E2D6] px-3 text-xs font-semibold text-[#20235A] transition-colors hover:border-[#D2B87C] hover:bg-[#FAF7F2] sm:flex"
                >
                  <ExternalLink size={15} />
                  Open PDF
                </a>

                <a
                  href={selectedPdf.file}
                  download
                  className="flex h-10 w-10 items-center justify-center border border-[#E8E2D6] text-[#20235A] transition-colors hover:border-[#D2B87C] hover:bg-[#FAF7F2] sm:w-auto sm:gap-2 sm:px-3"
                  aria-label={`Download ${selectedPdf.title}`}
                >
                  <Download size={16} />
                  <span className="hidden text-xs font-semibold sm:inline">
                    Download
                  </span>
                </a>

                <button
                  type="button"
                  onClick={closeAllModals}
                  className="flex h-10 w-10 items-center justify-center bg-[#20235A] text-white transition-colors hover:bg-[#D2B87C] hover:text-[#20235A]"
                  aria-label="Close PDF viewer"
                >
                  <X size={19} />
                </button>
              </div>
            </div>

            {/* Individual PDF Embed */}
            <div className="min-h-0 flex-1 bg-[#E9E9E9]">
              <iframe
                key={selectedPdf.id}
                src={`${selectedPdf.file}#toolbar=1&navpanes=0&view=FitH`}
                title={selectedPdf.title}
                className="h-full w-full border-0"
              />
            </div>

            {/* PDF Viewer Footer */}
            <div className="flex shrink-0 items-center justify-between gap-3 border-t border-[#EAE6DD] bg-white px-4 py-3 sm:px-6">
              <p className="text-[10px] text-[#777777] sm:text-xs">
                NCERC · Department of Computer Science and Engineering
              </p>

              <button
                type="button"
                onClick={() => setSelectedPdf(null)}
                className="text-xs font-semibold uppercase tracking-[0.12em] text-[#20235A] transition-colors hover:text-[#9A855A]"
              >
                Back to Documents
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
