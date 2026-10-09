import Image from "next/image";
import { ChevronRight } from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../../DepartmentNav/page";

// Adjust this base to wherever the library images live inside /public
const LIBRARY_BASE =
  "/images/dpt/electronics-and-communication-engineering/facilities/library";

const libraryImages = [
  "library-pic-1.png",
  "library-pic-2.png",
  "library-pic-3.png",
  "library-pic-4.png",
  "library-pic-5.png",
  "library-pic-6.png",
];

const mainFeatures = [
  "The central library with all its facilities has become a center for acquiring knowledge developing skills and getting exposure to newer fields of study and research in addition to being \u201cconnected\u201d to the outside world through internet.",
  "The college has a central independent library with plinth area of 9000 sq.ft with all modern facilities in Brahmagupta Block.",
  "The central library caters to the needs of faculty members and students with access to the books, magazines and journals.",
  "The students are encouraged to utilize the learning materials available in the library.",
  "The central library functions on all days except Sunday.",
];

const centralLibraryStats = [
  { label: "Total Number Of Books", value: "33153" },
  { label: "Total Number Of Titles", value: "13856" },
  { label: "Total Number Of Periodicals", value: "246" },
  { label: "Total Number Of Collections", value: "1393" },
];

const eceLibraryStats = [
  { label: "Total Number Of Books", value: "6060" },
  { label: "Total Number Of Titles", value: "3326" },
  { label: "Total Number Of Periodicals", value: "25" },
  { label: "Total Number Of Collections", value: "184" },
];

function StatsTable({
  rows,
}: {
  rows: { label: string; value: string }[];
}) {
  return (
    <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
      <table className="w-full min-w-[480px] border-collapse text-left text-sm sm:text-base">
        <thead>
          <tr className="bg-navy-950 text-white">
            <th className="w-20 px-4 py-3 font-semibold">SI No</th>
            <th className="px-4 py-3 font-semibold">Particulars</th>
            <th className="w-32 px-4 py-3 font-semibold">Number</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={row.label}
              className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
            >
              <td className="border-t border-slate-200 px-4 py-3 font-semibold text-navy-950">
                {index + 1}
              </td>
              <td className="border-t border-slate-200 px-4 py-3 text-slate-700">
                {row.label}
              </td>
              <td className="border-t border-slate-200 px-4 py-3 text-slate-700">
                {row.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mt-10 font-display text-xl font-semibold text-navy-950">
      {children}
    </h3>
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
      <main className="bg-white">
        {/* Inner Sub-Header Navigation */}
        <InnerHeader />

        <section className="py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-10 border-b border-slate-200 pb-4">
              <h2 className="font-display text-2xl font-bold uppercase text-navy-950 sm:text-3xl">
                Central Library Overview
              </h2>
              <div className="mt-3 h-1 w-12 bg-gold-500" />
            </div>

            <p className="text-justify text-base leading-8 text-slate-600">
              Our Institution is well equipped with a central library which
              includes Program Specific text books, reference books, Lab
              manuals. The NCERC library is well stacked with 28309 textbooks
              related to various aspects of engineering and technology;
              industry related topics, general books and 4576 reference
              books are also available. The library is constantly updated
              with the latest Magazines, National &amp; International
              journals, Reference books and other material at regular
              periods. The library also owns its digital set up with 64Mbps
              speed to access e-journals, e-books and other online resources
              like DELNET, Shodhganga &amp; ShodhSindhu.
            </p>

            <SubHeading>Main Features of Our Central Library</SubHeading>
            <ul className="mt-5 space-y-4">
              {mainFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
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

            <SubHeading>
              Details of Library Books in Central Library
            </SubHeading>
            <StatsTable rows={centralLibraryStats} />

            <SubHeading>
              Details of Library Books &ndash; Department of Electronics
              &amp; Communication Engineering
            </SubHeading>
            <StatsTable rows={eceLibraryStats} />

            <SubHeading>Accessibility to Students</SubHeading>
            <p className="mt-4 text-justify text-base leading-8 text-slate-600">
              Students can borrow books using the ID card issued by the
              college. Access to the library is managed by using ID card.
              The students can borrow books for a period of 15 days and then
              renew the same book for 15 more days on need. Library is open
              for use from 8.00 am to 8:00 pm (except on Sundays &amp;
              Government holidays).
            </p>

            <SubHeading>
              Relevance of Available Learning Resources Including
              E-Resources
            </SubHeading>
            <p className="mt-4 text-justify text-base leading-8 text-slate-600">
              E-Learning Resources, like EBSCO and J-Gate are available in
              the Library, which is being effectively used by the Faculty
              and Students. There is a well-equipped Digital Library
              available in the Institute. The entire library is fully
              automated by software called KOHA LIBRARY SOFTWARE. The NCERC
              library is well stacked with 28309 textbooks related to
              various aspects of engineering and technology; industry
              related topics, general books and 4576 reference books are
              also available. The library is constantly updated with the
              latest Magazines, National &amp; International journals,
              Reference books and other material at regular periods. The
              library also owns its digital set up with 64Mbps speed to
              access e-journals, e-books and other online resources like
              DELNET, Shodhganga &amp; ShodhSindhu. The library has core
              reference collection of McGraw Hill, Springer and Elsevier,
              chronicle, cengage learning is also available for all students
              to upgrade their knowledge. To inspire the significance among
              the students concerning current affairs and general
              knowledge, study materials related to GATE and competitive
              examinations is available in the college library. DELNET is
              very helpful to access rare books from various institutions
              libraries. Manuscripts from various departments are available
              in our library for student reference. 2415 educational videos
              are available in the digital library.
            </p>

            <SubHeading>
              Support to Students for Self-Learning Activities
            </SubHeading>
            <p className="mt-4 text-justify text-base leading-8 text-slate-600">
              The following learning resources are available in the library
              to enable students in imparting self-learning activities. High
              Speed internet connectivity of specification 65 MBPS (1:1) is
              available in the college campus. Students login and utilize
              the e-resources for self-learning. Digital Library is
              effectively utilized by students for self-learning activities.
            </p>

            {/* Gallery */}
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {libraryImages.map((file) => (
                <div
                  key={file}
                  className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm"
                >
                  <div className="relative h-56 w-full bg-slate-100">
                    <Image
                      src={`${LIBRARY_BASE}/${file}`}
                      alt="Library"
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}