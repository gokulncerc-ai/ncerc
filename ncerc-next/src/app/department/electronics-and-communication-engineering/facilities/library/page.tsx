import Image from "next/image";
import {
  ArrowUpRight,
  BookOpen,
  Library,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../../DepartmentNav/DepartmentNav";


export default function LibraryPage() {
  return (
    <>
      <SiteHeader />

      {/* Page Title Banner */}
      <section className="relative isolate overflow-hidden bg-[#20235A] py-16 sm:py-20 lg:py-24">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#20235A] via-[#20235A]/95 to-[#15183f]/90" />

        {/* Subtle decorative circles */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-[#D2B87C]/15" />
        <div className="pointer-events-none absolute -right-8 -top-8 h-56 w-56 rounded-full border border-[#D2B87C]/20" />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#D2B87C]" />
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D2B87C] sm:text-sm">
              Electronics and Communication Engineering (NBA Accredited)
            </p>
          </div>

          <h1 className="mt-4 font-serif text-3xl font-normal leading-tight tracking-[-0.025em] text-white sm:text-4xl lg:text-5xl">
            <span className="italic text-[#D2B87C]">Library</span>
          </h1>

          <div className="mt-6 h-px w-20 bg-[#D2B87C]" />
        </div>

        {/* Bottom accent bar */}
        <div className="absolute bottom-0 inset-x-0 h-1 bg-[#D2B87C]" />
      </section>

      {/* Page Content */}
      <main className="bg-white [&_p]:text-justify">
        {/* Inner Sub-Header Navigation */}
        <InnerHeader />
        <section className="bg-[#F2EFE8] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24 xl:px-20">
          <div className="mx-auto max-w-[1440px]">
            <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">

              {/* Image */}
              <div className="order-2 lg:order-1">
                <div className="relative">
                  <div className="absolute -left-3 -top-3 h-full w-full border border-[#D2B87C]" />

                  <div className="relative aspect-[4/3] overflow-hidden bg-[#E9E5DC]">
                    <Image
                      src="\images\dpt\electronics-and-communication-engineering\facilities\Facilities_Dept_Library.webp"
                      alt="Department Library"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />

                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#20235A]/90 to-transparent px-6 pb-6 pt-16">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                        Academic Resources
                      </p>
                      <h3 className="mt-2 font-serif text-2xl text-white">
                        Department Library
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="order-1 lg:order-2">
                <div className="mb-7 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                    <Library size={23} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                      08 / KNOWLEDGE CENTRE
                    </p>
                    <p className="mt-1 text-xs tracking-wide text-[#77747A]">
                      Learning & Research Resources
                    </p>
                  </div>
                </div>

                <h2 className="font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl lg:text-[46px]">
                  Department Library
                </h2>

                <div className="my-7 h-[2px] w-16 bg-[#D2B87C]" />

                <div className="space-y-5 text-[15px] leading-8 text-[#55545A]">
                  <p>
                    The Department Library serves as a vital academic resource for
                    students and faculty. It houses a rich collection of textbooks,
                    reference books, project reports, seminar documents, journals,
                    and previous year question papers related to core ECE subjects.
                  </p>

                  <p>
                    The collection covers areas such as Communication Systems, VLSI,
                    Embedded Systems, Signal Processing, Microprocessors, and more,
                    supporting students in their academic learning and research.
                  </p>

                  <p>
                    The Department Library is well stocked with 133 books.
                  </p>
                </div>

                {/* Book Count */}
                <div className="mt-8 flex items-center gap-4 border-l-2 border-[#D2B87C] pl-4">
                  <BookOpen
                    size={22}
                    className="text-[#8F7746]"
                    strokeWidth={1.5}
                  />
                  <div>
                    <p className="font-serif text-2xl text-[#20235A]">133</p>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#77747A]">
                      Books in the Department Library
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      <FooterSection />
    </>
  );
}