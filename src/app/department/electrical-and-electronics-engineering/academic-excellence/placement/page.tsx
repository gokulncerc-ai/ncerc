import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  ChevronRight,
  GraduationCap,
  Users,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../../DepartmentNav/page";

interface PlacementRecord {
  slNo: number;
  name: string;
  company: string;
  year: number;
  photo?: string;
}

interface PlacementImage {
  src: string;
  alt: string;
}

const placementImages: PlacementImage[] = [
  {
    src: "https://ncerc.ac.in/images/dpt/electrical-and-electronics-engineering/placement/patents.jpg",
    alt: "Electrical and Electronics Engineering placement activities",
  },
  {
    src: "https://ncerc.ac.in/images/dpt/electrical-and-electronics-engineering/placement/placement1.jpg",
    alt: "Electrical and Electronics Engineering placement activities",
  },
  {
    src: "https://ncerc.ac.in/images/dpt/electrical-and-electronics-engineering/placement/placement2.jpg",
    alt: "Electrical and Electronics Engineering placement activities",
  },
];

const placementData: PlacementRecord[] = [
  {
    slNo: 1,
    name: "ABHIJIT KRISHNAN A",
    company: "ACCENTA EDUCAION (JUNIOR TRAINER)",
    year: 2019,
    photo:
      "https://ncerc.ac.in/images/dpt/electrical-and-electronics-engineering/placement/ABHIJIT.jpg",
  },
  {
    slNo: 2,
    name: "ARJUN A",
    company: "ACCENTA EDUCAION (JUNIOR TRAINER)",
    year: 2019,
    photo:
      "https://ncerc.ac.in/images/dpt/electrical-and-electronics-engineering/placement/ARJUN.jpg",
  },
  {
    slNo: 3,
    name: "ARJUN A",
    company: "ACCENTA EDUCAION (JUNIOR TRAINER)",
    year: 2019,
    photo:
      "https://ncerc.ac.in/images/dpt/electrical-and-electronics-engineering/placement/DIYA.jpg",
  },
  {
    slNo: 4,
    name: "HIMA M",
    company: "ACCENTA EDUCAION (JUNIOR TRAINER)",
    year: 2019,
    photo:
      "https://ncerc.ac.in/images/dpt/electrical-and-electronics-engineering/placement/DIYA.jpg",
  },
  {
    slNo: 5,
    name: "LESLY CATHERINE",
    company: "ACCENTA EDUCAION (JUNIOR TRAINER)",
    year: 2019,
    photo:
      "/images/dpt/electrical-and-electronics-engineering/LESLY.jpg",
  },
  {
    slNo: 6,
    name: "PAVAN KRISHNAN K A",
    company:
      "ACCENTA EDUCAION (JUNIOR TRAINER), IDBI FEDERAL LIFE INSURANCE (AGENCY LEADER)",
    year: 2019,
    photo:
      "/images/dpt/electrical-and-electronics-engineering/PAVAN.jpg",
  },
  {
    slNo: 7,
    name: "VISHNU MENON P",
    company: "ACCENTA EDUCAION (JUNIOR TRAINER)",
    year: 2019,
    photo:
      "/images/dpt/electrical-and-electronics-engineering/VISHNU.jpg",
  },
  {
    slNo: 8,
    name: "ANAND P MENON",
    company: "AMAZON",
    year: 2018,
  },
  {
    slNo: 9,
    name: "JIJITHA MOL",
    company: "ACCENTA EDUCATION, AMAZON, HINDUJA GLOBAL",
    year: 2018,
  },
  {
    slNo: 10,
    name: "JUSTIN D JAMES",
    company: "AMAZON",
    year: 2018,
  },
  {
    slNo: 11,
    name: "NIKHIL BABU",
    company: "GALORE NETWORKS",
    year: 2018,
  },
  {
    slNo: 12,
    name: "SIVA PRASAD SIVADASAN",
    company: "ACCENTA EDUCATION",
    year: 2018,
  },
  {
    slNo: 13,
    name: "ALISHA DAVIS",
    company: "AMAZON",
    year: 2018,
  },
  {
    slNo: 14,
    name: "CHANDNI A SHAJI",
    company: "AMAZON",
    year: 2018,
  },
  {
    slNo: 15,
    name: "SHYAM JANAN",
    company: "AMAZON",
    year: 2018,
  },
  {
    slNo: 16,
    name: "SIDDARTH KRISHNAN",
    company: "AMAZON",
    year: 2018,
  },
  {
    slNo: 17,
    name: "PRAVEEN N M",
    company: "AMAZON",
    year: 2018,
  },
  {
    slNo: 18,
    name: "KIRAN M K",
    company: "AMAZON",
    year: 2018,
  },
  {
    slNo: 19,
    name: "AJEESH C G",
    company: "AMAZON, HINDUJA GLOBAL",
    year: 2018,
  },
  {
    slNo: 20,
    name: "ARAVIDN R PISHARODY",
    company: "AMAZON",
    year: 2018,
  },
  {
    slNo: 21,
    name: "SUNAINA J",
    company: "HINDUJA GLOBAL",
    year: 2018,
  },
  {
    slNo: 22,
    name: "PREETHY RAMADOSS",
    company: "HINDUJA GLOBAL, V DART & FACE",
    year: 2018,
  },
  {
    slNo: 23,
    name: "SARANGI M V",
    company: "HINDUJA GLOBAL",
    year: 2018,
  },
  {
    slNo: 24,
    name: "MARIYA PAUL",
    company: "HINDUJA GLOBAL",
    year: 2018,
  },
  {
    slNo: 25,
    name: "KEERTHI U P",
    company: "HINDUJA GLOBAL",
    year: 2018,
  },
  {
    slNo: 26,
    name: "ROSNA S",
    company: "V DART & FACE",
    year: 2018,
  },
  {
    slNo: 26,
    name: "KAILAS A P",
    company: "ACCENTA TRAINING SOLUTIONS",
    year: 2017,
  },
  {
    slNo: 27,
    name: "SARATH SYAM GOPAL",
    company: "ACCENTA TRAINING SOLUTIONS",
    year: 2017,
  },
  {
    slNo: 28,
    name: "AISWARYA MS",
    company: "VEE TECHNOLOGIES",
    year: 2017,
  },
  {
    slNo: 29,
    name: "AISWARYA U",
    company: "SOLVERS INDIA",
    year: 2017,
  },
  {
    slNo: 30,
    name: "AKSHAY KUMAR",
    company: "SOLVERS INDIA",
    year: 2017,
  },
  {
    slNo: 31,
    name: "AINA THERESA PEREEIRA",
    company: "INFOSYS",
    year: 2016,
  },
  {
    slNo: 32,
    name: "ANEESH A",
    company: "INFOSYS",
    year: 2016,
  },
  {
    slNo: 33,
    name: "APARNA R",
    company: "INFOSYS",
    year: 2016,
  },
  {
    slNo: 34,
    name: "ARJUN R",
    company: "INFOSYS",
    year: 2016,
  },
  {
    slNo: 35,
    name: "ASWATHI S",
    company: "INFOSYS",
    year: 2016,
  },
  {
    slNo: 36,
    name: "HANAN C A",
    company: "INFOSYS",
    year: 2016,
  },
  {
    slNo: 37,
    name: "JITHIRA A K",
    company: "INFOSYS",
    year: 2016,
  },
  {
    slNo: 38,
    name: "NABEEL KOCHUBAVA T",
    company: "INFOSYS",
    year: 2016,
  },
  {
    slNo: 39,
    name: "PRASUTHA T PRASADH",
    company: "INFOSYS",
    year: 2016,
  },
  {
    slNo: 40,
    name: "RESHMI KRISHNA V",
    company: "INFOSYS",
    year: 2016,
  },
  {
    slNo: 41,
    name: "SANGEETH BALU K",
    company: "INFOSYS",
    year: 2016,
  },
  {
    slNo: 42,
    name: "SAROJA P",
    company: "INFOSYS",
    year: 2016,
  },
  {
    slNo: 43,
    name: "SREELAKSHMI S",
    company: "INFOSYS",
    year: 2016,
  },
  {
    slNo: 44,
    name: "SMRITI V",
    company: "FACE",
    year: 2016,
  },
  {
    slNo: 45,
    name: "ARUN P. S",
    company: "FACE, SRIRAM TRANSPORT FINANCE LTD",
    year: 2016,
  },
  {
    slNo: 46,
    name: "MOHAMMED RAFEEQ UMMER",
    company: "FACE, SUTHERLAND- BPO",
    year: 2016,
  },
  {
    slNo: 47,
    name: "AISHWARYA RAJA GOPALAN",
    company: "FACE",
    year: 2016,
  },
  {
    slNo: 48,
    name: "DHANA LAKSHMI",
    company: "FACE",
    year: 2016,
  },
  {
    slNo: 49,
    name: "ASWIN A NAIR",
    company: "ADITHYA BIRLA- BPO, TECH MAHINDRA- BPO",
    year: 2016,
  },
  {
    slNo: 50,
    name: "VISHNUPRIYA P",
    company: "SUTHERLAND- BPO",
    year: 2016,
  },
  {
    slNo: 51,
    name: "NIDHI MOHANDAS",
    company: "SUTHERLAND- BPO",
    year: 2016,
  },
  {
    slNo: 52,
    name: "LINI JOYS",
    company: "THINK& LEARN, SYNTEL",
    year: 2016,
  },
  {
    slNo: 53,
    name: "M S PRADEEP",
    company: "INFOSYS",
    year: 2015,
  },
  {
    slNo: 54,
    name: "SHILPA SETHUMADAVAN",
    company: "FACE",
    year: 2015,
  },
  {
    slNo: 55,
    name: "AMBIKA ASOK",
    company: "SUTHERLAND",
    year: 2015,
  },
  {
    slNo: 56,
    name: "KARTHIKA MENON K",
    company: "INFOSYS",
    year: 2015,
  },
  {
    slNo: 57,
    name: "SHINU ISMAIL S",
    company: "INFOSYS",
    year: 2015,
  },
  {
    slNo: 58,
    name: "SRUTHY MUKUNDAN",
    company: "INFOSYS",
    year: 2015,
  },
  {
    slNo: 59,
    name: "RESHMA B",
    company: "INFOSYS",
    year: 2015,
  },
];

export default function PlacementPage() {
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
                Academic Excellence
              </p>
            </div>

            <h1 className="max-w-4xl font-serif text-4xl leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              Placement pathways that
              <span className="block text-[#D2B87C]">
                connect learning &amp; careers.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
              Explore the placement records of Electrical and Electronics
              Engineering students and the organisations where graduates have
              built their professional careers.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#placement-records"
                className="group inline-flex items-center gap-2 rounded-full bg-[#D2B87C] px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#20235A] transition-all duration-300 hover:bg-white"
              >
                Explore Placements
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
                Department
              </p>

              <p className="mt-2 font-serif text-lg text-white">
                Electrical &amp; Electronics
              </p>
            </div>

            <div className="border-b border-white/10 px-6 py-5 sm:border-b-0 sm:border-r sm:px-10 lg:px-16">
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                Placement Record
              </p>

              <p className="mt-2 font-serif text-lg text-white">
                2015 — 2019
              </p>
            </div>

            <div className="px-6 py-5 sm:px-10 lg:px-16">
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                Recorded Entries
              </p>

              <p className="mt-2 font-serif text-lg text-white">
                {placementData.length} Records
              </p>
            </div>
          </div>
        </div>
      </section>

      <InnerHeader />

      <main className="bg-[#FAF7F2]">
        {/* Introduction */}
        <section className="border-b border-[#1E1917]/10">
          <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-20">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-10 bg-[#D2B87C]" />

                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                    Placement
                  </p>
                </div>

                <h2 className="mt-5 max-w-xl font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                  From academic preparation to professional opportunity.
                </h2>
              </div>

              <div className="max-w-2xl lg:ml-auto">
                <p className="text-sm leading-7 text-[#1E1917]/65 sm:text-base">
                  Placement opportunities form an important part of the
                  department&apos;s academic journey. The following records
                  present students placed across different organisations and
                  professional roles between 2015 and 2019.
                </p>

                <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-[#1E1917]/10 bg-white p-5">
                    <BriefcaseBusiness className="h-5 w-5 text-[#8F7746]" />

                    <p className="mt-4 font-serif text-2xl text-[#20235A]">
                      05
                    </p>

                    <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#1E1917]/50">
                      Recorded Years
                    </p>
                  </div>

                  <div className="rounded-2xl border border-[#1E1917]/10 bg-white p-5">
                    <Users className="h-5 w-5 text-[#8F7746]" />

                    <p className="mt-4 font-serif text-2xl text-[#20235A]">
                      59
                    </p>

                    <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#1E1917]/50">
                      Listed Records
                    </p>
                  </div>

                  <div className="rounded-2xl border border-[#1E1917]/10 bg-white p-5">
                    <Building2 className="h-5 w-5 text-[#8F7746]" />

                    <p className="mt-4 font-serif text-2xl text-[#20235A]">
                      2019
                    </p>

                    <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#1E1917]/50">
                      Latest Record
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Placement Gallery */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
            <div className="mb-10 max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#D2B87C]" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                  Placement Highlights
                </p>
              </div>

              <h2 className="mt-5 font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                A visual record of placement activities.
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#1E1917]/65 sm:text-base">
                Highlights from the department&apos;s placement and
                professional development activities.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {placementImages.map((image, index) => (
                <a
                  key={image.src}
                  href={encodeURI(image.src)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group overflow-hidden rounded-[2rem] border border-[#1E1917]/10 bg-[#F2EFE8]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#20235A]/80 via-[#20235A]/20 to-transparent p-5 pt-16">
                      <div className="flex items-end justify-between gap-4">
                        <div>
                          <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                            0{index + 1}
                          </p>

                          <p className="mt-1 font-serif text-lg text-white">
                            Placement Highlight
                          </p>
                        </div>

                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/30 text-white transition-colors duration-300 group-hover:border-[#D2B87C] group-hover:text-[#D2B87C]">
                          <ArrowUpRight className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Placement Records */}
        <section id="placement-records" className="bg-[#F2EFE8]">
          <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
            <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-10 bg-[#D2B87C]" />

                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                    Placement Records
                  </p>
                </div>

                <h2 className="mt-5 font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                  Students &amp; organisations.
                </h2>
              </div>

              <div className="flex items-center gap-3">
                <span className="rounded-full border border-[#1E1917]/10 bg-white px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8F7746]">
                  2015 — 2019
                </span>

                <span className="rounded-full bg-[#20235A] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white">
                  {placementData.length} Records
                </span>
              </div>
            </div>

            {/* Desktop / Tablet Table */}
            <div className="hidden overflow-hidden rounded-[2rem] border border-[#1E1917]/10 bg-white shadow-sm md:block">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-left">
                  <thead>
                    <tr className="bg-[#20235A]">
                      <th
                        scope="col"
                        className="w-24 whitespace-nowrap px-5 py-5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#D2B87C]"
                      >
                        SL NO.
                      </th>

                      <th
                        scope="col"
                        className="min-w-[220px] px-5 py-5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#D2B87C]"
                      >
                        Name
                      </th>

                      <th
                        scope="col"
                        className="min-w-[360px] px-5 py-5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#D2B87C]"
                      >
                        Company
                      </th>

                      <th
                        scope="col"
                        className="w-28 whitespace-nowrap px-5 py-5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#D2B87C]"
                      >
                        Year
                      </th>

                      <th
                        scope="col"
                        className="w-28 whitespace-nowrap px-5 py-5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#D2B87C]"
                      >
                        Photo
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {placementData.map((item, index) => (
                      <tr
                        key={`${item.slNo}-${item.name}-${item.year}-${index}`}
                        className="border-t border-[#1E1917]/10 transition-colors duration-300 hover:bg-[#D2B87C]/[0.06]"
                      >
                        <td className="px-5 py-5 align-top">
                          <span className="font-serif text-lg text-[#20235A]">
                            {String(item.slNo).padStart(2, "0")}
                          </span>
                        </td>

                        <td className="px-5 py-5 align-top">
                          <p className="text-sm font-semibold uppercase tracking-[0.02em] text-[#20235A]">
                            {item.name}
                          </p>
                        </td>

                        <td className="px-5 py-5 align-top">
                          <p className="max-w-2xl text-sm leading-6 text-[#1E1917]/65">
                            {item.company}
                          </p>
                        </td>

                        <td className="px-5 py-5 align-top">
                          <span className="inline-flex rounded-full bg-[#F2EFE8] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#8F7746]">
                            {item.year}
                          </span>
                        </td>

                        <td className="px-5 py-5 align-top">
                          {item.photo ? (
                            <a
                              href={encodeURI(item.photo)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group block w-fit"
                            >
                              <div className="relative h-16 w-16 overflow-hidden rounded-xl border border-[#1E1917]/10 bg-[#F2EFE8]">
                                <Image
                                  src={item.photo}
                                  alt={`${item.name} placement`}
                                  fill
                                  sizes="64px"
                                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                              </div>
                            </a>
                          ) : (
                            <span className="text-sm text-[#1E1917]/30">
                              —
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Mobile Cards */}
            <div className="space-y-4 md:hidden">
              {placementData.map((item, index) => (
                <article
                  key={`${item.slNo}-${item.name}-${item.year}-${index}`}
                  className="rounded-3xl border border-[#1E1917]/10 bg-white p-5 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                        Placement Record
                      </p>

                      <p className="mt-1 font-serif text-lg text-[#20235A]">
                        {String(item.slNo).padStart(2, "0")}
                      </p>
                    </div>

                    <span className="rounded-full bg-[#20235A] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white">
                      {item.year}
                    </span>
                  </div>

                  <div className="mt-5 flex items-start gap-4">
                    {item.photo ? (
                      <a
                        href={encodeURI(item.photo)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group shrink-0"
                      >
                        <div className="relative h-20 w-20 overflow-hidden rounded-2xl border border-[#1E1917]/10 bg-[#F2EFE8]">
                          <Image
                            src={item.photo}
                            alt={`${item.name} placement`}
                            fill
                            sizes="80px"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      </a>
                    ) : (
                      <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-[#F2EFE8] text-[9px] font-semibold uppercase tracking-[0.12em] text-[#1E1917]/35">
                        No Photo
                      </div>
                    )}

                    <div className="min-w-0 flex-1">
                      <h3 className="font-serif text-xl leading-tight text-[#20235A]">
                        {item.name}
                      </h3>

                      <div className="mt-3 flex items-start gap-2">
                        <Building2 className="mt-0.5 h-4 w-4 shrink-0 text-[#8F7746]" />

                        <p className="text-sm leading-6 text-[#1E1917]/65">
                          {item.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Career Connection */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
            <div className="grid overflow-hidden rounded-[2rem] bg-[#20235A] lg:grid-cols-[1fr_0.8fr]">
              <div className="p-8 sm:p-10 lg:p-14">
                <div className="flex items-center gap-3">
                  <span className="h-px w-10 bg-[#D2B87C]" />

                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                    Career Connection
                  </p>
                </div>

                <h2 className="mt-5 max-w-2xl font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
                  Preparing students for the world beyond the classroom.
                </h2>

                <p className="mt-6 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
                  Placement experiences connect academic knowledge with
                  professional environments, giving students opportunities to
                  apply their learning and begin meaningful careers.
                </p>
              </div>

              <div className="border-t border-white/10 bg-white/[0.04] p-8 sm:p-10 lg:border-l lg:border-t-0 lg:p-14">
                <GraduationCap className="h-8 w-8 text-[#D2B87C]" />

                <p className="mt-6 font-serif text-2xl text-white sm:text-3xl">
                  Learning that moves forward.
                </p>

                <p className="mt-4 text-sm leading-7 text-white/60">
                  Academic preparation, professional exposure and placement
                  opportunities work together to support the transition from
                  engineering education to employment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="bg-[#20235A]">
          <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3">
                  <span className="h-px w-10 bg-[#D2B87C]" />

                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                    Electrical &amp; Electronics Engineering
                  </p>
                </div>

                <h2 className="mt-5 font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
                  Academic excellence with a clear path toward professional
                  opportunity.
                </h2>
              </div>

              <Link
                href="/department/electrical-and-electronics-engineering/academic-excellence"
                className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-[#D2B87C] px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#20235A] transition-all duration-300 hover:bg-white"
              >
                View Academic Excellence
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