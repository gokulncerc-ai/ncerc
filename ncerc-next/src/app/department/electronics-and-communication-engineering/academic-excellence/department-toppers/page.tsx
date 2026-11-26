import Image from "next/image";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import DepartmentNav from "../../DepartmentNav/DepartmentNav";

export const metadata = {
  title:
    "Top Engineering Colleges in Thrissur | Electronics and Communication Engineering - NCERC",

  description:
    "Nehru College of Engineering and Research Centre is renowned as one of the leading colleges in Kerala for Electrical and Communication Engineering, offering quality education that prepares students for successful careers in the electrical and communication technology sectors across South India.",

  keywords: [
    "engineering colleges thrissur",
    "engineering colleges in thrissur",
    "private engineering colleges in thrissur",
    "top engineering colleges in thrissur",
    "Nehru College of Engineering and Research Centre thrissur",
    "NCERC thrissur",
    "Nehru College thrissur",
    "Nehru College of Engineering thrissur",
  ],

  robots: {
    index: true,
    follow: true,
  },
};

const TOPPER_BASE =
  "/images/dpt/electronics-and-communication-engineering/academic%20excellence/department-topper";

interface Topper {
  order: number;
  name: string;
  regNumber: string;
  sgpa: string;
  photo: string;
}

interface SemesterData {
  title: string;
  toppers: Topper[];
}

const semesterData: SemesterData[] = [
  {
    title: "SEMESTER 6",
    toppers: [
      {
        order: 1,
        name: "SUDEV A",
        regNumber: "NCE18EC024",
        sgpa: "9.74",
        photo: "sudev-a.png",
      },
      {
        order: 2,
        name: "SRUTHI SAJEEV",
        regNumber: "NCE18EC022",
        sgpa: "9.04",
        photo: "sruthy-sajeev.png",
      },
      {
        order: 3,
        name: "PAVANA J",
        regNumber: "NCE18EC014",
        sgpa: "8.89",
        photo: "pavana-j.png",
      },
      {
        order: 4,
        name: "VINEETH K",
        regNumber: "NCE18EC024",
        sgpa: "8.78",
        photo: "vineeth-k.png",
      },
      {
        order: 5,
        name: "AISWARYA P B",
        regNumber: "NCE18EC001",
        sgpa: "8.57",
        photo: "aiswarya-pb.png",
      },
    ],
  },

  {
    title: "SEMESTER 3",
    toppers: [
      {
        order: 1,
        name: "GREENA SUNNY",
        regNumber: "NCE19EC015",
        sgpa: "9.82",
        photo: "greena-sunny.png",
      },
      {
        order: 2,
        name: "MALAVIKA VENUGOPAL",
        regNumber: "NCE19EC018",
        sgpa: "9.36",
        photo: "malavika-venugopal.png",
      },
      {
        order: 3,
        name: "AISWARYA P",
        regNumber: "NCE19EC002",
        sgpa: "9.32",
        photo: "aiswarya-p.png",
      },
      {
        order: 4,
        name: "ANAGHA E P",
        regNumber: "NCE19EC006",
        sgpa: "8.64",
        photo: "anagha-ep.png",
      },
      {
        order: 5,
        name: "AISWARYA R NAYANAR",
        regNumber: "NCE19EC003",
        sgpa: "8.36",
        photo: "aiswarya-r-nayanar.png",
      },
      {
        order: 6,
        name: "SARANYA C M",
        regNumber: "NCE19EC022",
        sgpa: "8.36",
        photo: "saranya-cm.png",
      },
      {
        order: 7,
        name: "AKSHAY C K",
        regNumber: "NCE19EC005",
        sgpa: "8.05",
        photo: "akshay-ck.png",
      },
    ],
  },

  {
    title: "SEMESTER 1",
    toppers: [
      {
        order: 1,
        name: "PARVATHY T P",
        regNumber: "NCE20EC014",
        sgpa: "9.74",
        photo: "parvathy-tp.png",
      },
      {
        order: 2,
        name: "ARYA V",
        regNumber: "NCE20EC005",
        sgpa: "9.35",
        photo: "arya-v.png",
      },
      {
        order: 3,
        name: "DARSANA ANAND",
        regNumber: "NCE20EC005",
        sgpa: "9.24",
        photo: "darsana-anand.png",
      },
      {
        order: 4,
        name: "AMBIKA S",
        regNumber: "NCE20EC003",
        sgpa: "8.59",
        photo: "ambika-s.png",
      },
      {
        order: 5,
        name: "VISHNU P NAIR",
        regNumber: "NCE20EC018",
        sgpa: "8.53",
        photo: "vishnu-p-nair.png",
      },
      {
        order: 6,
        name: "VIDHYA NARAYANAN",
        regNumber: "NCE20EC017",
        sgpa: "8.29",
        photo: "vidhya-narayanan.png",
      },
      {
        order: 7,
        name: "SANJANA P",
        regNumber: "NCE20EC015",
        sgpa: "8.21",
        photo: "sanjana-p.png",
      },
    ],
  },
];

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="font-display text-2xl font-bold text-navy-950 sm:text-3xl">
        {children}
      </h2>

      <div className="mt-4 h-1 w-12 bg-gold-500" />
    </div>
  );
}

function TopperTable({ semester }: { semester: SemesterData }) {
  return (
    <div className="mb-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      {/* Semester Header */}
      <div className="bg-[#244061] px-5 py-5 sm:px-7">
        <h3 className="text-center text-lg font-bold uppercase tracking-wide text-white sm:text-xl">
          {semester.title}
        </h3>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] border-collapse">
          <thead>
            <tr className="bg-slate-100">
              <th className="border-b border-slate-200 px-4 py-4 text-center text-xs font-bold uppercase tracking-wide text-slate-700 sm:px-6">
                Order
              </th>

              <th className="border-b border-slate-200 px-4 py-4 text-left text-xs font-bold uppercase tracking-wide text-slate-700 sm:px-6">
                Name
              </th>

              <th className="border-b border-slate-200 px-4 py-4 text-left text-xs font-bold uppercase tracking-wide text-slate-700 sm:px-6">
                Reg Number
              </th>

              <th className="border-b border-slate-200 px-4 py-4 text-center text-xs font-bold uppercase tracking-wide text-slate-700 sm:px-6">
                SGPA Out of 10
              </th>

              <th className="border-b border-slate-200 px-4 py-4 text-center text-xs font-bold uppercase tracking-wide text-slate-700 sm:px-6">
                Photograph
              </th>
            </tr>
          </thead>

          <tbody>
            {semester.toppers.map((topper) => (
              <tr
                key={`${semester.title}-${topper.order}-${topper.name}`}
                className="transition-colors hover:bg-[#fcfbf8]"
              >
                <td className="border-b border-slate-200 px-4 py-5 text-center text-sm font-semibold text-slate-700 sm:px-6">
                  {topper.order}
                </td>

                <td className="border-b border-slate-200 px-4 py-5 text-sm font-semibold text-navy-950 sm:px-6">
                  {topper.name}
                </td>

                <td className="border-b border-slate-200 px-4 py-5 text-sm text-slate-600 sm:px-6">
                  {topper.regNumber}
                </td>

                <td className="border-b border-slate-200 px-4 py-5 text-center sm:px-6">
                  <span className="inline-flex min-w-[70px] items-center justify-center rounded-full bg-gold-500/10 px-3 py-1.5 text-sm font-bold text-gold-600">
                    {topper.sgpa}
                  </span>
                </td>

                <td className="border-b border-slate-200 px-4 py-4 sm:px-6">
                  <div className="flex justify-center">
                    <div className="relative h-20 w-20 overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-sm">
                      <Image
                        src={`${TOPPER_BASE}/${topper.photo}`}
                        alt={`${topper.name} - Department Topper`}
                        fill
                        sizes="80px"
                        className="object-contain p-1"
                      />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function DepartmentToppersPage() {
  return (
    <>
      <SiteHeader />

{/* Page Title Banner */}
<section className="relative isolate overflow-hidden bg-[#20235A] py-16 sm:py-20 lg:py-24">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#20235A] via-[#20235A]/95 to-[#15183f]/90" />

        {/* Decorative circular accents */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-[#D2B87C]/15" />
        <div className="pointer-events-none absolute -right-8 -top-8 h-56 w-56 rounded-full border border-[#D2B87C]/20" />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#D2B87C]" />
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D2B87C] sm:text-sm">
              NBA Accredited
            </p>
          </div>

          <h1 className="mt-4 font-serif text-3xl font-normal leading-tight tracking-[-0.025em] text-white sm:text-4xl lg:text-5xl">
            Electronics & <span className="italic text-[#D2B87C]">Communication Engineering</span>
          </h1>

          <div className="mt-6 h-px w-20 bg-[#D2B87C]" />
        </div>

        {/* Bottom accent bar */}
        <div className="absolute bottom-0 inset-x-0 h-1 bg-[#D2B87C]" />
      </section>

      <main className="bg-white">
        {/* Department Navigation */}
        <DepartmentNav />

        {/* Page Content */}
        <section className="py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading>Department Toppers</SectionHeading>

            {/* Department Toppers Main Image */}
            <div className="mb-12 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-3 shadow-sm sm:p-5">
              <div className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-xl bg-white">
                <Image
                  src={`${TOPPER_BASE}/Toppers_S7.jpeg`}
                  alt="ECE Department Toppers"
                  width={1600}
                  height={900}
                  priority
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>

            {/* Academic Year */}
            <div className="mb-8">
              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-6 shadow-sm sm:px-7">
                <p className="text-center font-display text-lg font-bold uppercase tracking-wide text-navy-950 sm:text-xl">
                  2020-21 Academic Year - S1, S3, S6 Semester
                </p>

                <div className="mx-auto mt-3 h-1 w-16 bg-gold-500" />
              </div>
            </div>

            {/* Semester Tables */}
            <div>
              {semesterData.map((semester) => (
                <TopperTable
                  key={semester.title}
                  semester={semester}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}