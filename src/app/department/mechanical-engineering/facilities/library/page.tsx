import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../../DepartmentNav/page";

const LIBRARY_BASE = "/images/dpt/mechanical-engineering/Library";

const libraryImages = [
  {
    file: "Library1.jpg",
    alt: "Central library view 1",
  },
  {
    file: "Library2.jpg",
    alt: "Central library view 2",
  },
  {
    file: "Library3.jpg",
    alt: "Central library view 3",
  },
];

const libraryStats = [
  {
    type: "Text Books",
    count: "28,309",
    cost: "98,32,171",
  },
  {
    type: "Reference Books",
    count: "4,576",
    cost: "24,85,642",
  },
  {
    type: "e-Books",
    count: "1,197",
    cost: "0",
  },
  {
    type: "Journals",
    count: "235",
    cost: "2,54,646",
  },
  {
    type: "e-Journals",
    count: "2",
    cost: "1,80,127",
  },
  {
    type: "CD & Video",
    count: "2,418",
    cost: "0",
  },
];

const libraryHighlights = [
  {
    number: "01",
    title: "9,000 sq.ft",
    description:
      "A spacious independent central library designed to support learning, reference and research.",
  },
  {
    number: "02",
    title: "28,309",
    description:
      "Textbooks covering engineering, technology, industry-related topics and general knowledge.",
  },
  {
    number: "03",
    title: "4,576",
    description:
      "Reference books supporting deeper academic study, technical papers and research activities.",
  },
  {
    number: "04",
    title: "64 Mbps",
    description:
      "Digital connectivity supporting e-journals, e-books and online academic resources.",
  },
];

const digitalResources = [
  "EBSCO",
  "JGate",
  "DELNET",
  "Shodhganga",
  "ShodhSindhu",
  "McGraw Hill",
  "Springer",
  "Elsevier",
];

export const metadata = {
  title: "Library | Mechanical Engineering | NCERC",
  description:
    "Central Library facilities, resources, books, journals and digital learning resources at Nehru College of Engineering and Research Centre.",
};

export default function LibraryPage() {
  return (
    <>
      <SiteHeader />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative isolate overflow-hidden bg-[#20235A]">
        {/* Decorative circles */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-[#D2B87C]/25" />
        <div className="pointer-events-none absolute -right-10 -top-10 h-52 w-52 rounded-full border border-[#D2B87C]/15" />
        <div className="pointer-events-none absolute bottom-[-120px] left-[8%] h-72 w-72 rounded-full border border-white/10" />

        <div className="absolute inset-0 bg-gradient-to-br from-[#20235A] via-[#20235A] to-[#15183f]" />

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-16 sm:px-8 sm:pb-24 sm:pt-20 lg:px-10 lg:pb-28 lg:pt-24">
          <div className="grid items-end gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="mb-7 flex items-center gap-4">
                <span className="h-px w-12 bg-[#D2B87C]" />
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D2B87C]">
                  Mechanical Engineering
                </p>
              </div>

              <h1 className="max-w-4xl font-display text-[43px] font-semibold leading-[0.98] tracking-[-0.03em] text-white sm:text-[58px] lg:text-[64px] xl:text-[74px]">
                Library
                <span className="block text-[#D2B87C]">for discovery.</span>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                A knowledge environment designed to connect engineering
                education with books, journals, research material and digital
                learning resources.
              </p>
            </div>

            <div className="hidden justify-end lg:flex">
              <div className="relative h-64 w-64">
                <div className="absolute inset-0 rounded-full border border-[#D2B87C]/40" />
                <div className="absolute inset-8 rounded-full border border-[#D2B87C]/20" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <span className="block font-display text-5xl font-semibold text-white">
                      9,000
                    </span>
                    <span className="mt-2 block text-xs uppercase tracking-[0.22em] text-[#D2B87C]">
                      sq.ft library
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 h-px w-full bg-white/10" />

          <div className="mt-6 flex flex-wrap items-center gap-x-10 gap-y-3 text-sm text-white/60">
            <span>Books</span>
            <span className="h-1 w-1 rounded-full bg-[#D2B87C]" />
            <span>Journals</span>
            <span className="h-1 w-1 rounded-full bg-[#D2B87C]" />
            <span>Digital Resources</span>
            <span className="h-1 w-1 rounded-full bg-[#D2B87C]" />
            <span>Research</span>
          </div>
        </div>
      </section>

      <main className="bg-[#FAF7F2]">
        <InnerHeader />

        {/* =========================================================
            INTRODUCTION
        ========================================================= */}
        <section className="px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8F7746]">
                  The Central Library
                </p>

                <h2 className="mt-5 max-w-md font-display text-4xl font-semibold leading-tight tracking-[-0.025em] text-[#20235A] sm:text-5xl">
                  A place to learn, explore and go further.
                </h2>

                <div className="mt-8 h-px w-20 bg-[#D2B87C]" />

                <p className="mt-7 max-w-md text-sm leading-7 text-[#1E1917]/60">
                  The library provides an academic environment where students
                  and faculty can access print and digital resources for
                  education, research and professional development.
                </p>
              </div>

              <div className="text-[15px] leading-8 text-[#1E1917]/70">
                <p>
                  The central library with all its facilities has become a
                  centre for acquiring knowledge developing skills and getting
                  exposure to newer fields of study and research, in addition
                  to being &ldquo;connected&rdquo; to the outside World
                  through the Internet. The college has a central independent
                  library with{" "}
                  <span className="font-semibold text-[#20235A]">
                    9000 sq.ft
                  </span>{" "}
                  with all modern facilities.
                </p>

                <p className="mt-6">
                  The library caters to the needs of faculty members and
                  students with access to books and journals. The students are
                  encouraged to utilize the learning materials available in the
                  library. The faculty and students refer the print journals to
                  publish/present technical papers.
                </p>

                <p className="mt-6">
                  The central library functions on all days except Sundays. The
                  books in the general library are categorized as Reference and
                  textbook. Frequent book exhibitions on campus facilitate
                  faculty members to select the books of their choice which is
                  needed for teaching. Students can borrow books using the ID
                  card issued by the college. Access to the library is managed
                  by using ID card.
                </p>

                <p className="mt-6">
                  Library is open for use from 8.00 am. to 8:00 pm. (except on
                  Sundays &amp; Government holidays). E-Learning Resources,
                  like EBSCO and JGate are available in the Library, which is
                  being effectively used by the Faculty and Students.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            LIBRARY IMAGE / STATEMENT
        ========================================================= */}
        <section className="bg-white px-6 py-20 sm:px-8 sm:py-24 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
              <div className="relative">
                <div className="absolute -bottom-5 -right-5 h-full w-full border border-[#D2B87C] sm:-bottom-7 sm:-right-7" />

                <div className="relative aspect-[4/3] overflow-hidden bg-[#F2EFE8]">
                  <Image
                    src={`${LIBRARY_BASE}/${libraryImages[0].file}`}
                    alt={libraryImages[0].alt}
                    fill
                    sizes="(min-width: 1024px) 55vw, 100vw"
                    className="object-cover transition duration-700 hover:scale-[1.02]"
                  />
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8F7746]">
                  A connected learning environment
                </p>

                <h2 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-[-0.025em] text-[#20235A] sm:text-5xl">
                  More than books.
                  <span className="block">A knowledge network.</span>
                </h2>

                <p className="mt-7 text-[15px] leading-8 text-[#1E1917]/65">
                  There is a well equipped Digital Library available in the
                  Institute. The entire library is fully automated by software
                  called{" "}
                  <span className="font-semibold text-[#20235A]">
                    KOHA LIBRARY SOFTWARE
                  </span>
                  .
                </p>

                <p className="mt-5 text-[15px] leading-8 text-[#1E1917]/65">
                  The library also owns its digital set up with 64Mbps speed to
                  access e-journals, e-books and other online resources like
                  DELNET, Shodhganga &amp; ShodhSindhu.
                </p>

                <div className="mt-8 flex items-center gap-4">
                  <span className="h-px w-12 bg-[#D2B87C]" />
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                    Digital access
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            HIGHLIGHTS
        ========================================================= */}
        <section className="bg-[#F2EFE8] px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8F7746]">
                Library at a glance
              </p>

              <h2 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-[-0.025em] text-[#20235A] sm:text-5xl">
                Resources that support academic ambition.
              </h2>
            </div>

            <div className="mt-14 grid gap-px overflow-hidden border border-[#20235A]/10 bg-[#20235A]/10 sm:grid-cols-2 lg:grid-cols-4">
              {libraryHighlights.map((item) => (
                <article
                  key={item.number}
                  className="group bg-[#FAF7F2] p-7 transition duration-300 hover:bg-[#20235A]"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold tracking-[0.2em] text-[#8F7746] group-hover:text-[#D2B87C]">
                      {item.number}
                    </span>

                    <span className="h-px w-8 bg-[#D2B87C]" />
                  </div>

                  <h3 className="mt-10 font-display text-3xl font-semibold text-[#20235A] group-hover:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-[#1E1917]/60 group-hover:text-white/65">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            LIBRARY RESOURCES
        ========================================================= */}
        <section className="bg-[#20235A] px-6 py-20 text-white sm:px-8 sm:py-24 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D2B87C]">
                  Digital resources
                </p>

                <h2 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-[-0.025em] sm:text-5xl">
                  Research is connected beyond the shelves.
                </h2>

                <p className="mt-7 text-sm leading-7 text-white/60">
                  Core reference collections and online resources help students
                  and faculty continue learning beyond conventional textbooks.
                </p>
              </div>

              <div>
                <div className="grid grid-cols-2 border-l border-t border-white/10 sm:grid-cols-4">
                  {digitalResources.map((resource) => (
                    <div
                      key={resource}
                      className="border-b border-r border-white/10 px-5 py-6 text-sm font-medium text-white/80 transition hover:bg-white/5 hover:text-[#D2B87C]"
                    >
                      {resource}
                    </div>
                  ))}
                </div>

                <p className="mt-8 max-w-2xl text-sm leading-7 text-white/55">
                  The library also provides study materials related to GATE and
                  competitive examinations. DELNET supports access to rare
                  books from various institutional libraries, while manuscripts
                  from various departments are available for student
                  reference.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            LIBRARY COLLECTION
        ========================================================= */}
        <section className="bg-[#FAF7F2] px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-6 border-b border-[#20235A]/10 pb-8 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8F7746]">
                  Library collection
                </p>

                <h2 className="mt-4 font-display text-4xl font-semibold text-[#20235A] sm:text-5xl">
                  Built around learning.
                </h2>
              </div>

              <p className="max-w-md text-sm leading-7 text-[#1E1917]/55">
                A broad collection of textbooks, references, journals and
                digital resources serves the academic community.
              </p>
            </div>

            {/* Desktop table */}
            <div className="mt-12 hidden overflow-hidden border border-[#20235A]/10 bg-white md:block">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="bg-[#20235A] text-white">
                    <th className="px-7 py-5 text-xs font-semibold uppercase tracking-[0.16em]">
                      Library Service Type
                    </th>
                    <th className="px-7 py-5 text-right text-xs font-semibold uppercase tracking-[0.16em]">
                      Quantity
                    </th>
                    <th className="px-7 py-5 text-right text-xs font-semibold uppercase tracking-[0.16em]">
                      Cost
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {libraryStats.map((row, index) => (
                    <tr
                      key={row.type}
                      className={`border-b border-[#20235A]/10 last:border-b-0 ${
                        index % 2 === 0 ? "bg-white" : "bg-[#FAF7F2]"
                      }`}
                    >
                      <td className="px-7 py-5 font-medium text-[#20235A]">
                        {row.type}
                      </td>

                      <td className="px-7 py-5 text-right font-display text-xl font-semibold text-[#20235A]">
                        {row.count}
                      </td>

                      <td className="px-7 py-5 text-right text-sm text-[#1E1917]/60">
                        {row.cost}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="mt-10 grid gap-3 md:hidden">
              {libraryStats.map((row) => (
                <article
                  key={row.type}
                  className="border border-[#20235A]/10 bg-white p-5"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-medium text-[#20235A]">
                      {row.type}
                    </h3>

                    <span className="font-display text-2xl font-semibold text-[#20235A]">
                      {row.count}
                    </span>
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-[#20235A]/10 pt-3 text-xs uppercase tracking-wider text-[#1E1917]/45">
                    <span>Cost</span>
                    <span>{row.cost}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            GALLERY
        ========================================================= */}
        <section className="bg-white px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8F7746]">
                  Inside the library
                </p>

                <h2 className="mt-4 font-display text-4xl font-semibold text-[#20235A] sm:text-5xl">
                  A space designed for focus.
                </h2>
              </div>

              <div className="hidden h-px w-28 bg-[#D2B87C] lg:block" />
            </div>

            <div className="mt-14 grid gap-6 lg:grid-cols-12 lg:grid-rows-[250px_250px]">
              {/* Main image */}
              <div className="group relative min-h-[350px] overflow-hidden lg:col-span-7 lg:row-span-2 lg:min-h-0">
                <Image
                  src={`${LIBRARY_BASE}/${libraryImages[0].file}`}
                  alt={libraryImages[0].alt}
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.03]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#20235A]/45 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
                    Central Library
                  </span>
                </div>
              </div>

              {/* Image 2 */}
              <div className="group relative min-h-[280px] overflow-hidden lg:col-span-5 lg:min-h-0">
                <Image
                  src={`${LIBRARY_BASE}/${libraryImages[1].file}`}
                  alt={libraryImages[1].alt}
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.03]"
                />
              </div>

              {/* Image 3 */}
              <div className="group relative min-h-[280px] overflow-hidden lg:col-span-5 lg:min-h-0">
                <Image
                  src={`${LIBRARY_BASE}/${libraryImages[2].file}`}
                  alt={libraryImages[2].alt}
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.03]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            STATEMENT
        ========================================================= */}
        <section className="relative overflow-hidden bg-[#20235A] px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border border-[#D2B87C]/20" />
          <div className="pointer-events-none absolute -right-12 -top-12 h-56 w-56 rounded-full border border-[#D2B87C]/10" />

          <div className="relative mx-auto max-w-5xl text-center">
            <span className="mx-auto block h-px w-12 bg-[#D2B87C]" />

            <p className="mt-8 font-display text-4xl font-semibold leading-tight tracking-[-0.025em] text-white sm:text-5xl lg:text-6xl">
              “A library is not only a place to find information. It is a
              place to discover what comes next.”
            </p>

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.25em] text-[#D2B87C]">
              Learning • Research • Discovery
            </p>
          </div>
        </section>

        {/* =========================================================
            FINAL CTA
        ========================================================= */}
        <section className="bg-[#FAF7F2] px-6 py-20 sm:px-8 sm:py-24 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col items-start justify-between gap-8 border-t border-[#20235A]/15 pt-10 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8F7746]">
                  Mechanical Engineering
                </p>

                <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold leading-tight text-[#20235A] sm:text-4xl">
                  Explore the facilities that support engineering education.
                </h2>
              </div>

              <Link
                href="/department/mechanical-engineering/facilities"
                className="inline-flex shrink-0 items-center gap-4 border border-[#20235A] px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#20235A] transition hover:bg-[#20235A] hover:text-white"
              >
                Back to Facilities
                <span className="text-lg leading-none">→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}