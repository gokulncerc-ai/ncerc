import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../../DepartmentNav/DepartmentNav";

interface TopperImage {
  src: string;
  alt: string;
  number: string;
  title: string;
}

const topperImages: TopperImage[] = [
  {
    src: "https://ncerc.ac.in/images/dpt/electrical-and-electronics-engineering/department-toppers/Toppers%20S7.jpeg",
    alt: "Department Toppers S7",
    number: "01",
    title: "S7 Department Toppers",
  },
  {
    src: "https://ncerc.ac.in/images/dpt/electrical-and-electronics-engineering/department-toppers/S7_KTU_Topper.jpg",
    alt: "S7 KTU Topper",
    number: "02",
    title: "S7 KTU Topper",
  },
  {
    src: "https://ncerc.ac.in/images/dpt/electrical-and-electronics-engineering/department-toppers/S5_KTU_Topper.jpg",
    alt: "S5 KTU Topper",
    number: "03",
    title: "S5 KTU Topper",
  },
  {
    src: "https://ncerc.ac.in/images/dpt/electrical-and-electronics-engineering/department-toppers/S3_KTU_Topper.jpg",
    alt: "S3 KTU Topper",
    number: "04",
    title: "S3 KTU Topper",
  },
  {
    src: "https://ncerc.ac.in/images/dpt/electrical-and-electronics-engineering/department-toppers/complete.jpg",
    alt: "Department Toppers",
    number: "05",
    title: "Department Toppers",
  },
  {
    src: "https://ncerc.ac.in/images/dpt/electrical-and-electronics-engineering/department-toppers/poster.jpg",
    alt: "Department Toppers Poster",
    number: "06",
    title: "Department Toppers Poster",
  },
  {
    src: "https://ncerc.ac.in/images/dpt/electrical-and-electronics-engineering/department-toppers/top_light.jpg",
    alt: "Department Topper",
    number: "07",
    title: "Department Topper",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <div className="mb-5 flex items-center gap-3">
        <span className="h-px w-10 bg-[#D2B87C]" />

        <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
          {eyebrow}
        </p>
      </div>

      <h2 className="font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-sm leading-7 text-[#1E1917]/65 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

function TopperCard({ image }: { image: TopperImage }) {
  return (
    <a
      href={encodeURI(image.src)}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-[2rem] border border-[#1E1917]/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#D2B87C]/70 hover:shadow-[0_20px_50px_rgba(32,35,90,0.12)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[#F2EFE8]">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#20235A]/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#20235A]/90 text-[10px] font-semibold tracking-[0.12em] text-[#D2B87C] backdrop-blur-sm">
          {image.number}
        </div>

        <div className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#20235A] opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 px-6 py-5">
        <div>
          <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
            Academic Excellence
          </p>

          <h3 className="mt-2 font-serif text-lg leading-snug text-[#20235A]">
            {image.title}
          </h3>
        </div>

        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#20235A]/15 text-[#20235A] transition-all duration-300 group-hover:border-[#D2B87C] group-hover:bg-[#D2B87C]">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </a>
  );
}

export default function DepartmentToppersPage() {
  return (
    <>
      <SiteHeader />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[#20235A]">
        <div className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full border border-[#D2B87C]/20" />
        <div className="pointer-events-none absolute -right-8 -top-16 h-52 w-52 rounded-full border border-[#D2B87C]/10" />
        <div className="pointer-events-none absolute bottom-[-180px] left-[-120px] h-96 w-96 rounded-full border border-white/5" />

        <div className="relative mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          <div className="max-w-4xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#D2B87C]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D2B87C]">
                Academic Excellence
              </p>
            </div>

            <h1 className="max-w-4xl font-serif text-4xl leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              Department toppers,
              <span className="block text-[#D2B87C]">
                excellence worth celebrating.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
              Celebrating the academic achievements of outstanding students
              from the Electrical and Electronics Engineering department at
              NCERC.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#toppers"
                className="group inline-flex items-center gap-2 rounded-full bg-[#D2B87C] px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#20235A] transition-all duration-300 hover:bg-white"
              >
                Explore Toppers
                <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <Link
                href="/department/electrical-and-electronics-engineering/academic-excellence"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:border-[#D2B87C]/60 hover:text-[#D2B87C]"
              >
                Academic Excellence
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
                Recognition
              </p>

              <p className="mt-2 font-serif text-lg text-white">
                Department Toppers
              </p>
            </div>

            <div className="border-b border-white/10 px-6 py-5 sm:border-b-0 sm:border-r sm:px-10 lg:px-16">
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                Gallery
              </p>

              <p className="mt-2 font-serif text-lg text-white">
                07 Achievements
              </p>
            </div>

            <div className="px-6 py-5 sm:px-10 lg:px-16">
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                Department
              </p>

              <p className="mt-2 font-serif text-lg text-white">
                Electrical &amp; Electronics
              </p>
            </div>
          </div>
        </div>
      </section>

      <InnerHeader />

      <main className="bg-[#FAF7F2] [&_p]:text-justify">
        {/* Introduction */}
        <section className="border-b border-[#1E1917]/10">
          <div className="mx-auto grid max-w-[1440px] gap-10 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-[1fr_0.8fr] lg:gap-20 lg:px-16 lg:py-24">
            <SectionHeading
              eyebrow="Department Toppers"
              title="Recognising students who lead by example."
              description="Department toppers represent the commitment, discipline and academic focus of students who have distinguished themselves through their performance."
            />

            <div className="flex items-end">
              <div className="w-full rounded-[2rem] border border-[#1E1917]/10 bg-white p-7 sm:p-8">
                <div className="flex items-start gap-4">
                  <span className="mt-1 h-10 w-1 shrink-0 bg-[#D2B87C]" />

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                      Electrical &amp; Electronics Engineering
                    </p>

                    <p className="mt-4 font-serif text-2xl leading-snug text-[#20235A]">
                      Academic achievement worth celebrating.
                    </p>

                    <p className="mt-4 text-sm leading-6 text-[#1E1917]/60">
                      The department continues to encourage students to pursue
                      academic excellence and set higher standards through
                      consistent effort and dedication.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Department Toppers */}
        <section
          id="department-toppers"
          className="bg-[#FAF7F2] px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28"
        >
          <div className="mx-auto max-w-[1440px]">
            {/* Section Header */}
            <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-16">
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#D2B87C]" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                    Academic Excellence
                  </span>
                </div>

                <h2 className="font-serif text-[38px] leading-[1.08] tracking-[-0.03em] text-[#20235A] sm:text-[48px] lg:text-[58px]">
                  Department
                  <span className="block text-[#8F7746]">Toppers</span>
                </h2>
              </div>

              <div className="border-l-2 border-[#D2B87C] pl-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                  Department
                </p>
                <p className="mt-2 text-[14px] leading-7 text-[#20235A]">
                  Department of Electrical and Electronics Engineering
                </p>

                <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                  Academic Recognition
                </p>
                <p className="mt-2 text-[14px] leading-7 text-[#1E1917]/70">
                  Recognising students for their academic performance across batches.
                </p>
              </div>
            </div>

            {/* Table Introduction */}
            <div className="mt-12 flex flex-col gap-4 border-y border-[#20235A]/15 py-6 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                  Student Achievements
                </p>
                <h3 className="mt-2 font-serif text-[25px] text-[#20235A] sm:text-[30px]">
                  Academic Performance
                </h3>
              </div>

              <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-[#8F7746]">
                04 Student Records
              </span>
            </div>

            {/* Toppers Table */}
            <div className="mt-8 overflow-hidden border border-[#20235A]/10 bg-white/70">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[700px] border-collapse text-left">
                  <thead>
                    <tr className="bg-[#20235A]">
                      <th className="px-6 py-5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white sm:px-8">
                        No.
                      </th>
                      <th className="px-6 py-5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white sm:px-8">
                        Name
                      </th>
                      <th className="px-6 py-5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white sm:px-8">
                        Register Number
                      </th>
                      <th className="px-6 py-5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white sm:px-8">
                        Batch
                      </th>
                      <th className="px-6 py-5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white sm:px-8">
                        CGPA
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {[
                      {
                        number: "01",
                        name: "Asish Nair",
                        registerNumber: "NCE18EE007",
                        batch: "2018-22",
                        cgpa: "8.73",
                      },
                      {
                        number: "02",
                        name: "Sreelakshmi P",
                        registerNumber: "NCE19EE013",
                        batch: "2019-23",
                        cgpa: "8.79",
                      },
                      {
                        number: "03",
                        name: "Muhammed Badhusha S",
                        registerNumber: "NCE20EE008",
                        batch: "2020-24",
                        cgpa: "8.33",
                      },
                      {
                        number: "04",
                        name: "Alok Cheruvathur Unni",
                        registerNumber: "NCE21EE001",
                        batch: "2021-25",
                        cgpa: "8.74",
                      },
                    ].map((student, index) => (
                      <tr
                        key={student.registerNumber}
                        className={`group border-b border-[#20235A]/10 transition-colors duration-300 hover:bg-[#F2EFE8] ${index === 3 ? "border-b-0" : ""
                          }`}
                      >
                        <td className="px-6 py-6 sm:px-8">
                          <span className="font-serif text-lg text-[#B6A47B] transition-colors duration-300 group-hover:text-[#20235A]">
                            {student.number}
                          </span>
                        </td>

                        <td className="px-6 py-6 sm:px-8">
                          <span className="text-[14px] font-medium leading-6 text-[#20235A] sm:text-[15px]">
                            {student.name}
                          </span>
                        </td>

                        <td className="px-6 py-6 sm:px-8">
                          <span className="text-[13px] leading-6 text-[#1E1917]/70 sm:text-[14px]">
                            {student.registerNumber}
                          </span>
                        </td>

                        <td className="px-6 py-6 sm:px-8">
                          <span className="inline-flex border border-[#D2B87C]/60 px-3 py-1 text-[12px] font-medium text-[#8F7746]">
                            {student.batch}
                          </span>
                        </td>

                        <td className="px-6 py-6 sm:px-8">
                          <span className="font-serif text-xl font-medium text-[#20235A]">
                            {student.cgpa}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section Footer */}
            <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-[#20235A]/15 pt-6">
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#8F7746]">
                Electrical &amp; Electronics Engineering · NCERC
              </p>

              <p className="text-[11px] text-[#1E1917]/55">
                Excellence · Dedication · Achievement
              </p>
            </div>
          </div>
        </section>

      </main>

      <FooterSection />
    </>
  );
}