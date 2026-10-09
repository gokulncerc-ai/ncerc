import type { ReactNode } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import DepartmentNav from "../../DepartmentNav/page";
export const metadata = {
  title:
    "Top Engineering Colleges in Thrissur | Computer Science and Engineering - NCERC",
  description: "",
  keywords: [] as string[],
  robots: { index: true, follow: true },
};

const mainFeatures: string[] = [
  "The central library with all its facilities has become a center for acquiring knowledge, developing skills and getting exposure to newer fields of study and research in addition to being \u201cconnected\u201d to the outside world through internet.",
  "The college has a central independent library with plinth area of 9000 sq.ft with all modern facilities in Brahmagupta Block.",
  "The central library caters to the needs of faculty members and students with access to the books, magazines and journals.",
  "The students are encouraged to utilize the learning materials available in the library.",
  "The central library functions on all days except Sunday.",
];

// Path updated to match public/images/dpt/computer-science-and-engineering/library
const LIBRARY_IMAGE_BASE =
  "/images/dpt/computer-science-and-engineering/library";

const libraryImages: string[] = [1, 2, 3, 4, 5, 6].map(
  (n) => `${LIBRARY_IMAGE_BASE}/library${n}.jpg`
);

function SectionBlock({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="border-t border-slate-200 pt-12 first:border-t-0 first:pt-0">
      <h2 className="font-display text-2xl font-bold text-navy-950 sm:text-3xl">
        {title}
      </h2>
      <div className="mt-4 h-1 w-12 bg-gold-500" />
      <div className="mt-6">{children}</div>
    </div>
  );
}

export default function LibraryPage() {
  return (
    <>
      <SiteHeader />

{/* Page Title Banner */}
<section className="relative isolate overflow-hidden bg-[#20235A] py-16 sm:py-20 lg:py-24">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#20235A] via-[#20235A]/95 to-[#15183f]/90" />

        {/* Geometric circular overlays */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-[#D2B87C]/15" />
        <div className="pointer-events-none absolute -right-8 -top-8 h-56 w-56 rounded-full border border-[#D2B87C]/20" />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          {/* Badge / Department Tagline */}
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#D2B87C]" />
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D2B87C] sm:text-sm">
              Computer Science and Engineering
            </p>
          </div>

          {/* Heading with Serif & Italicized Accent Typography */}
          <h1 className="mt-4 font-serif text-3xl font-normal leading-tight tracking-[-0.025em] text-white sm:text-4xl lg:text-5xl">
            Central <span className="italic text-[#D2B87C]">Library</span>
          </h1>

          {/* Divider Line */}
          <div className="mt-6 h-px w-20 bg-[#D2B87C]" />
        </div>

        {/* Bottom Accent Bar */}
        <div className="absolute bottom-0 inset-x-0 h-1 bg-[#D2B87C]" />
      </section>

      {/* Page Content */}
      <main className="bg-white">
        {/* Inner Sub-Header Navigation */}
        <DepartmentNav />

        <section className="py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl space-y-12 px-6">
            {/* Overview */}
            <SectionBlock title="Central Library Overview">
              <p className="text-justify text-base leading-8 text-slate-600">
                Our Institution is well equipped with a central library which
                includes Program Specific text books, reference books, Lab
                manuals. The NCERC library is well stacked with 28309 textbooks
                related to various aspects of engineering and technology;
                industry related topics, general books and 4576 reference
                books are also available. The library is constantly updated
                with the latest Magazines, National &amp; International
                journals, Reference books and other material at regular
                periods. The library also owns its digital set up with 64 Mbps
                speed to access e-journals, e-books and other online resources
                like DELNET, Shodhganga &amp; ShodhSindhu.
              </p>
            </SectionBlock>

            {/* Main features */}
            <SectionBlock title="Main Features of Our Central Library">
              <ul className="space-y-4">
                {mainFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <ChevronRight
                      size={18}
                      strokeWidth={2.5}
                      className="mt-1.5 shrink-0 text-gold-500"
                    />
                    <p className="text-base leading-8 text-slate-600">
                      {feature}
                    </p>
                  </li>
                ))}
              </ul>
            </SectionBlock>

            {/* Gallery */}
            <SectionBlock title="Library Gallery">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {libraryImages.map((src, index) => (
                  <div
                    key={src}
                    className="group relative h-64 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-2 shadow-sm transition-all duration-300 hover:shadow-md"
                  >
                    <Image
                      src={src}
                      alt={`Central Library photo ${index + 1}`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                ))}
              </div>
            </SectionBlock>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}