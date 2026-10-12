import Image from "next/image";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../DepartmentNav/DepartmentNavigation";

export const metadata = {
  title:
    "Top Engineering Colleges in Thrissur | Computer Science and Engineering - NCERC",
  description:
    "Faculty profile of the Department of Computer Science and Engineering at Nehru College of Engineering and Research Centre, Thrissur.",
  keywords: [
    "engineering colleges thrissur",
    "engineering colleges in thrissur",
    "private engineering colleges in thrissur",
    "top engineering colleges in thrissur",
    "computer science engineering thrissur",
    "Nehru College of Engineering and Research Centre thrissur",
    "NCERC thrissur",
  ],
  robots: { index: true, follow: true },
};

// Adjust this base to wherever the faculty photos live inside /public
const FACULTY_BASE =
  "/images/dpt/computer-science-and-engineering/img/faculty";

interface FacultyMember {
  name: string;
  qualification: string;
  photo?: string;
}

interface LabStaff {
  name: string;
  designation: string;
}

const faculty: FacultyMember[] = [
  { name: "Dr. Justin Jose", qualification: "PHD" },
  {
    name: "Ms. Silja Varghese",
    qualification: "MTECH CSE",
    photo: "SILJA VARGHESE.jpg",
  },
  { name: "Ms. Linta A T", qualification: "MTECH CSE" },
  {
    name: "Ms. Praveena K",
    qualification: "MTECH CSE",
    photo: "Praveena K.jpg",
  },
  {
    name: "Ms. Betsy Joy",
    qualification: "MTECH CSE",
    photo: "betsy joy.jpg",
  },
  {
    name: "Ms. Swathy C S",
    qualification: "MTECH CSE",
    photo: "Swathy C S.jpg",
  },
  {
    name: "Ms. Minu Augustine",
    qualification: "MTECH CSE",
    photo: "Minu Augustine photo.jpg",
  },
  { name: "Dr. B Shaji", qualification: "PHD" },
  {
    name: "Ms. Soumya T",
    qualification: "MTECH CSE",
    photo: "SoumyaT_Photo.jpg",
  },
  {
    name: "Ms. Parvathy P",
    qualification: "MTECH CSE",
    photo: "parvathip_photo.jpg",
  },
  {
    name: "Mr. Vinish A",
    qualification: "MTECH CSE",
    photo: "VinishA_Photo.jpg",
  },
  {
    name: "Ms. Anjana Asokan",
    qualification: "MTECH CSE",
    photo: "AnjanaAsokan_photo.jpg",
  },
  {
    name: "Ms. Sreeji Sreenivasan",
    qualification: "MTECH CSE",
    photo: "Sreeji Photo.jpg",
  },
  {
    name: "Ms. Sruthi A",
    qualification: "MTECH APPLIED ELECTRONICS",
    photo: "SruthiA_photo.jpg",
  },
  {
    name: "Ms. Rejitha R",
    qualification: "MTECH CSE",
    photo: "RejithaR_Photo.jpg",
  },
  { name: "Dr. Anju Asokan", qualification: "PHD" },
  {
    name: "Ms. Gracemol",
    qualification: "MTECH CSE",
    photo: "Gracemol_Photo.jpg",
  },
  { name: "Ms. Sajitha A S", qualification: "MTECH CSE" },
  {
    name: "Ms. Baby V",
    qualification: "MTECH CSE",
    photo: "BABY V.jpg",
  },
  {
    name: "Ms. Leya M S",
    qualification: "MTECH CSE",
    photo: "Leya M S.jpg",
  },
  {
    name: "Ms. Shinu Jacob",
    qualification: "MTECH CSE",
    photo: "Shinu Jacob.jpg",
  },
  {
    name: "Ms. Savitha C S",
    qualification: "MTECH CSE",
    photo: "savitha_photo.jpg",
  },
];

const labStaff: LabStaff[] = [
  { name: "Mr Sajesh D", designation: "System Admin" },
  { name: "Mr Vimoj MV", designation: "Lab Assistant" },
  { name: "Ms Monica", designation: "Lab Assistant" },
  { name: "Mr Ajith P", designation: "Lab Assistant" },
  { name: "Ms Ranjusha TR", designation: "Lab Assistant" },
  { name: "Mr Sujith KP", designation: "Lab Assistant" },
  { name: "Shakeena P S", designation: "Lab Assistant" },
  { name: "Mr. Devan M P", designation: "Lab Assistant" },
  { name: "Ms. Keerthi K", designation: "Lab Assistant" },
];

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function SectionHeading({ title }: { title: string }) {
  return (
    <div className="mb-10 border-b border-slate-200 pb-4">
      <h2 className="font-display text-2xl font-bold uppercase text-navy-950 sm:text-3xl">
        {title}
      </h2>
      <div className="mt-3 h-1 w-12 bg-gold-500" />
    </div>
  );
}

export default function FacultyDetailsPage() {
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
            Faculty <span className="italic text-[#D2B87C]">Profile</span>
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
        <InnerHeader />

        <section className="py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl space-y-16 px-6">
            {/* Faculty Profile */}
            <div>
              <SectionHeading title="Faculty Profile" />

              <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                <table className="w-full min-w-[640px] border-collapse text-left text-sm sm:text-base">
                  <thead>
                    <tr className="bg-navy-950 text-white">
                      <th className="w-20 px-4 py-3 font-semibold">SI No</th>
                      <th className="px-4 py-3 font-semibold">Name</th>
                      <th className="px-4 py-3 font-semibold">
                        Qualification
                      </th>
                      <th className="w-28 px-4 py-3 font-semibold">Photo</th>
                    </tr>
                  </thead>
                  <tbody>
                    {faculty.map((member, index) => (
                      <tr
                        key={member.name}
                        className={
                          index % 2 === 0 ? "bg-white" : "bg-slate-50"
                        }
                      >
                        <td className="border-t border-slate-200 px-4 py-3 align-middle font-semibold text-navy-950">
                          {pad(index + 1)}
                        </td>
                        <td className="border-t border-slate-200 px-4 py-3 align-middle text-slate-700">
                          {member.name}
                        </td>
                        <td className="border-t border-slate-200 px-4 py-3 align-middle text-slate-700">
                          {member.qualification}
                        </td>
                        <td className="border-t border-slate-200 px-4 py-3 align-middle">
                          {member.photo ? (
                            <div className="relative h-16 w-16 overflow-hidden rounded-lg bg-slate-100">
                              <Image
                                src={encodeURI(
                                  `${FACULTY_BASE}/${member.photo}`
                                )}
                                alt={member.name}
                                fill
                                sizes="64px"
                                className="object-cover"
                              />
                            </div>
                          ) : (
                            <span className="text-slate-400">&ndash;</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Lab Faculty */}
            <div>
              <SectionHeading title="Lab Faculty" />

              <div className="max-w-4xl overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                <table className="w-full min-w-[480px] border-collapse text-left text-sm sm:text-base">
                  <thead>
                    <tr className="bg-navy-950 text-white">
                      <th className="w-24 px-4 py-3 font-semibold">SI No</th>
                      <th className="px-4 py-3 font-semibold">Name</th>
                      <th className="px-4 py-3 font-semibold">Designation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {labStaff.map((member, index) => (
                      <tr
                        key={member.name}
                        className={
                          index % 2 === 0 ? "bg-white" : "bg-slate-50"
                        }
                      >
                        <td className="border-t border-slate-200 px-4 py-3 align-middle font-semibold text-navy-950">
                          {pad(index + 1)}
                        </td>
                        <td className="border-t border-slate-200 px-4 py-3 align-middle text-slate-700">
                          {member.name}
                        </td>
                        <td className="border-t border-slate-200 px-4 py-3 align-middle text-slate-700">
                          {member.designation}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}