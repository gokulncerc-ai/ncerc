import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  ChevronRight,
  Landmark,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../../../DepartmentNav/page";

// Adjust this base to wherever the PDFs live inside /public
const PDF_BASE =
  "/images/dpt/electrical-and-electronics-engineering/syllabus";

type ApjktuCard = {
  title: string;
} & (
    | { kind: "external"; file: string }
    | { kind: "placeholder" }
  );

const apjktuCards: ApjktuCard[] = [
  {
    title: "2015 REG APJKTU",
    kind: "external",
    file: "/2015regulation.pdf",
  },
  {
    title: "2015 REG APJKTU COURSE OUTCOMES",
    kind: "external",
    file: "/format.pdf",
  },
  {
    title: "2019 REG APJKTU",
    kind: "placeholder",
  },
];

export default function SyllabusApjktuPage() {
  const availableDocuments = apjktuCards.filter(
    (card) => card.kind === "external"
  ).length;

  return (
    <>
      <SiteHeader />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[#20235A]">
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

            <h1 className="max-w-3xl font-serif text-4xl leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              APJKTU syllabus for
              <span className="block text-[#D2B87C]">
                academic reference.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
              Access the APJKTU syllabus resources and course outcome
              documents available for the Electrical and Electronics
              Engineering department.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#apjktu-documents"
                className="group inline-flex items-center gap-2 rounded-full bg-[#D2B87C] px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#20235A] transition-all duration-300 hover:bg-white"
              >
                Explore Documents
                <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <Link
                href="/departments/electrical-and-electronics-engineering"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:border-[#D2B87C]/60 hover:text-[#D2B87C]"
              >
                Back to Hand Books
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Information Strip */}
        <div className="border-t border-white/10 bg-white/[0.03]">
          <div className="mx-auto grid max-w-[1440px] grid-cols-1 sm:grid-cols-3">
            <div className="border-b border-white/10 px-6 py-5 sm:border-b-0 sm:border-r sm:px-10 lg:px-16">
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                University
              </p>

              <p className="mt-2 font-serif text-lg text-white">
                APJKTU
              </p>
            </div>

            <div className="border-b border-white/10 px-6 py-5 sm:border-b-0 sm:border-r sm:px-10 lg:px-16">
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                Resource
              </p>

              <p className="mt-2 font-serif text-lg text-white">
                Syllabus &amp; Course Outcomes
              </p>
            </div>

            <div className="px-6 py-5 sm:px-10 lg:px-16">
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                Documents
              </p>

              <p className="mt-2 font-serif text-lg text-white">
                {availableDocuments} Available
              </p>
            </div>
          </div>
        </div>
      </section>

      <InnerHeader />

      <main className="bg-[#FAF7F2]">
        {/* Introduction */}
        <section className="border-b border-[#1E1917]/10">
          <div className="mx-auto grid max-w-[1440px] gap-10 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-16 lg:py-24">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#D2B87C]" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                  APJKTU
                </p>
              </div>

              <h2 className="max-w-3xl font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                Curriculum resources for a
                <span className="block text-[#8F7746]">
                  structured academic journey.
                </span>
              </h2>
            </div>

            <div className="lg:pt-8">
              <p className="text-sm leading-7 text-[#1E1917]/65 sm:text-base">
                This section provides access to APJKTU syllabus resources
                associated with the Electrical and Electronics Engineering
                department. Use the available documents for academic
                reference, curriculum planning and course outcome review.
              </p>

              <div className="mt-7 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#20235A] text-white">
                  <BookOpen className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                    Academic Resource
                  </p>

                  <p className="mt-1 font-serif text-lg text-[#20235A]">
                    APJKTU Curriculum
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Documents */}
        <section id="apjktu-documents" className="bg-white">
          <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
            <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                  Academic Documents
                </p>

                <h2 className="mt-3 font-serif text-3xl text-[#20235A] sm:text-4xl">
                  APJKTU syllabus resources.
                </h2>
              </div>

              <p className="max-w-md text-sm leading-6 text-[#1E1917]/60">
                Select a document below to open the corresponding academic
                resource in a new tab.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {apjktuCards.map((card, index) => {
                if (card.kind === "external") {
                  return (
                    <a
                      key={card.title}
                      href={encodeURI(`${PDF_BASE}/${card.file}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative overflow-hidden rounded-3xl border border-[#1E1917]/10 bg-[#FAF7F2] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#D2B87C]/70 hover:shadow-[0_18px_45px_rgba(32,35,90,0.10)] sm:p-8"
                    >
                      <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[3rem] bg-[#20235A]/[0.04]" />

                      <div className="relative flex items-start justify-between">
                        <span className="text-[10px] font-semibold tracking-[0.2em] text-[#8F7746]">
                          0{index + 1}
                        </span>

                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#20235A] text-[#D2B87C] transition-all duration-300 group-hover:bg-[#D2B87C] group-hover:text-[#20235A]">
                          <Landmark className="h-5 w-5" />
                        </div>
                      </div>

                      <div className="relative mt-10">
                        <h3 className="max-w-xs font-serif text-xl leading-snug text-[#20235A] transition-colors duration-300 group-hover:text-[#8F7746]">
                          {card.title}
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-[#1E1917]/55">
                          Open the academic document for detailed syllabus
                          reference.
                        </p>
                      </div>

                      <div className="relative mt-8 flex items-center justify-between border-t border-[#1E1917]/10 pt-5">
                        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                          View Document
                        </span>

                        <ArrowUpRight className="h-4 w-4 text-[#20235A] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </div>
                    </a>
                  );
                }

                return (
                  <div
                    key={card.title}
                    className="relative overflow-hidden rounded-3xl border border-dashed border-[#1E1917]/15 bg-[#F2EFE8] p-7 sm:p-8"
                  >
                    <div className="flex items-start justify-between">
                      <span className="text-[10px] font-semibold tracking-[0.2em] text-[#8F7746]/60">
                        0{index + 1}
                      </span>

                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#8F7746]/40">
                        <Landmark className="h-5 w-5" />
                      </div>
                    </div>

                    <div className="mt-10">
                      <h3 className="font-serif text-xl leading-snug text-[#20235A]/55">
                        {card.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-[#1E1917]/45">
                        This syllabus resource will be made available here.
                      </p>
                    </div>

                    <div className="mt-8 border-t border-[#1E1917]/10 pt-5">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]/60">
                        Coming Soon
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Academic Reference */}
        <section className="bg-[#F2EFE8]">
          <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                  Academic Reference
                </p>

                <h2 className="mt-3 font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl">
                  Supporting clear curriculum understanding.
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-[#1E1917]/60 sm:text-base">
                  Syllabus documents help students and faculty understand
                  academic expectations, course structures and learning
                  outcomes throughout the programme.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-[#1E1917]/10 bg-white p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#20235A] text-[#D2B87C]">
                    <Landmark className="h-5 w-5" />
                  </div>

                  <h3 className="mt-6 font-serif text-xl text-[#20235A]">
                    University Curriculum
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#1E1917]/55">
                    Access APJKTU syllabus material for curriculum and
                    academic reference.
                  </p>
                </div>

                <div className="rounded-3xl border border-[#1E1917]/10 bg-white p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#D2B87C] text-[#20235A]">
                    <BookOpen className="h-5 w-5" />
                  </div>

                  <h3 className="mt-6 font-serif text-xl text-[#20235A]">
                    Course Outcomes
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#1E1917]/55">
                    Review course outcome information alongside the
                    applicable academic regulation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="bg-[#20235A]">
          <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#D2B87C]" />

                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                    Syllabus Hand Books
                  </p>
                </div>

                <h2 className="font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
                  Continue exploring the
                  <span className="block text-[#D2B87C]">
                    academic resources.
                  </span>
                </h2>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
                  Return to the syllabus hand books section to explore other
                  curriculum resources available for the department.
                </p>
              </div>

              <Link
                href="/departments/electrical-and-electronics-engineering"
                className="group inline-flex w-fit items-center gap-2 rounded-full bg-[#D2B87C] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#20235A] transition-all duration-300 hover:bg-white"
              >
                Back to Hand Books
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}