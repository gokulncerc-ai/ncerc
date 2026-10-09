import Image from "next/image";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../DepartmentNav/page";

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
  robots: { index: true, follow: true },
};

// Adjust these bases to wherever the files live inside /public
const FACULTY_PHOTO_BASE =
  "/images/dpt/electronics-and-communication-engineering/img/faculty";
const FACULTY_PROFILE_BASE =
  "/downloads/dpt/electronics-and-communication-engineering/faculty-profiles";

interface FacultyMember {
  name: string;
  degree: string;
  specialization: string;
  designation: string;
  joiningDate: string;
  association: string;
  photo?: string;
  profile: string;
}

const faculty: FacultyMember[] = [
  {
    name: "Dr. Mredhula L",
    degree: "PhD",
    specialization: "Medical Image Processing",
    designation: "Professor & HOD",
    joiningDate: "29-05-2023",
    association: "Regular",
    photo: "Mredhula_photo.jpg",
    profile: "mredhula_.pdf",
  },
  {
    name: "Dr. Rajkumar S",
    degree: "PhD",
    specialization: "VLSI",
    designation: "Professor",
    joiningDate: "07-01-2012",
    association: "Regular",
    photo: "Rajkumar S photo.jpg",
    profile: "Dr S Rajkumar-.pdf",
  },
  {
    name: "Dr. Sreejith Rajan",
    degree: "PhD",
    specialization: "Biomedical",
    designation: "Associate Professor",
    joiningDate: "01-07-2025",
    association: "Regular",
    photo: "Sreejith_PHOTO.JPG",
    profile: "SREEJITH RAJAN.pdf",
  },
  {
    name: "Mr. Rajkumar P",
    degree: "M.E.",
    specialization: "Communication Systems",
    designation: "Assistant Professor",
    joiningDate: "03-06-2013",
    association: "Regular",
    photo: "rajkumar p photo.jpg",
    profile: "P.Rajkumar.pdf",
  },
  {
    name: "Mr. Nithin Joe",
    degree: "M.Tech",
    specialization: "Sensor Systems",
    designation: "Assistant Professor",
    joiningDate: "04-07-2011",
    association: "Regular",
    photo: "NithinJoe_Photo.jpg",
    profile: "Nithin Joe.pdf",
  },
  {
    name: "Mr. Vysak Valsan",
    degree: "M.E.",
    specialization: "Communication Systems",
    designation: "Assistant Professor",
    joiningDate: "20-03-2023",
    association: "Regular",
    photo: "Vysak Valsan_photo.jpg",
    profile: "Vysak Valsan.pdf",
  },
  {
    name: "Ms. Anooja B",
    degree: "M.E.",
    specialization: "Wireless Communication",
    designation: "Assistant Professor",
    joiningDate: "04-09-2023",
    association: "Regular",
    photo: "Anooja Photo.jpg",
    profile: "Anooja.pdf",
  },
  {
    name: "Mr. Suresh P",
    degree: "M.Tech",
    specialization: "Communication Engineering",
    designation: "Assistant Professor",
    joiningDate: "20-03-2025",
    association: "Regular",
    photo: "Sureshp_Photo.jpg",
    profile: "SURESH.pdf",
  },
  {
    name: "Ms. Saranya Nair",
    degree: "M.Tech",
    specialization: "Power System",
    designation: "Assistant Professor",
    joiningDate: "01-07-2021",
    association: "Regular",
    profile: "SARANYA NAIR.pdf",
  },
  {
    name: "Ms. Shilja A S",
    degree: "M.Tech",
    specialization: "Applied Electronics and Communication System",
    designation: "Assistant Professor",
    joiningDate: "07-07-2025",
    association: "Regular",
    photo: "ShiljaAS_Photo.jpg",
    profile: "shilja profile.pdf",
  },
  {
    name: "Dr. Aswani K",
    degree: "M.E.",
    specialization: "Communication Systems",
    designation: "Assistant Professor",
    joiningDate: "11-07-2025",
    association: "Regular",
    photo: "Dr Aswani K_Photo.jpg",
    profile: "Dr.Aswani K.pdf",
  },
  {
    name: "Ms. Jisha K V",
    degree: "M.E.",
    specialization: "Applied Electronics and Communication System",
    designation: "Assistant Professor",
    joiningDate: "11-07-2025",
    association: "Regular",
    photo: "JishaKV_photo.jpg",
    profile: "JISHA.pdf",
  },
  {
    name: "Mr. SreeSankar J",
    degree: "M.E.",
    specialization: "Communication Systems",
    designation: "Assistant Professor",
    joiningDate: "11-07-2025",
    association: "Regular",
    photo: "SreesankarJ_Photo.jpg",
    profile: "sresankar profile.pdf",
  },
  {
    name: "Ms. Niji Kuriakose",
    degree: "M.E.",
    specialization: "Communication Systems",
    designation: "Assistant Professor",
    joiningDate: "01-07-2025",
    association: "Regular",
    profile: "niji kuriakose.pdf",
  },
];

const tableHeaders: string[] = [
  "Sl. No",
  "Name",
  "University Degree",
  "Area of Specialization",
  "Current Designation",
  "Initial Date of Joining",
  "Nature of Association",
  "Photo",
  "Profile",
];

function pad(n: number) {
  return String(n).padStart(2, "0");
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
              Electronics and Communication Engineering (NBA Accredited)
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
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-10 border-b border-slate-200 pb-4">
              <h2 className="font-display text-2xl font-bold uppercase text-navy-950 sm:text-3xl">
                Faculty Profile
              </h2>
              <div className="mt-3 h-1 w-12 bg-gold-500" />
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full min-w-[1100px] border-collapse text-left text-sm sm:text-base">
                <thead>
                  <tr className="bg-navy-950 text-white">
                    {tableHeaders.map((header) => (
                      <th
                        key={header}
                        className="px-4 py-3 text-sm font-semibold"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {faculty.map((member, index) => (
                    <tr
                      key={member.name}
                      className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                    >
                      <td className="border-t border-slate-200 px-4 py-3 align-middle font-semibold text-navy-950">
                        {pad(index + 1)}
                      </td>
                      <td className="border-t border-slate-200 px-4 py-3 align-middle font-medium text-navy-950">
                        {member.name}
                      </td>
                      <td className="border-t border-slate-200 px-4 py-3 align-middle text-slate-700">
                        {member.degree}
                      </td>
                      <td className="border-t border-slate-200 px-4 py-3 align-middle text-slate-700">
                        {member.specialization}
                      </td>
                      <td className="border-t border-slate-200 px-4 py-3 align-middle text-slate-700">
                        {member.designation}
                      </td>
                      <td className="whitespace-nowrap border-t border-slate-200 px-4 py-3 align-middle text-slate-700">
                        {member.joiningDate}
                      </td>
                      <td className="border-t border-slate-200 px-4 py-3 align-middle text-slate-700">
                        {member.association}
                      </td>
                      <td className="border-t border-slate-200 px-4 py-3 align-middle">
                        {member.photo ? (
                          <div className="relative h-20 w-20 overflow-hidden rounded-lg bg-slate-100">
                            <Image
                              src={encodeURI(
                                `${FACULTY_PHOTO_BASE}/${member.photo}`
                              )}
                              alt={member.name}
                              fill
                              sizes="80px"
                              className="object-cover"
                            />
                          </div>
                        ) : (
                          <span className="text-slate-400">&ndash;</span>
                        )}
                      </td>
                      <td className="border-t border-slate-200 px-4 py-3 align-middle">
                        <a
                          href={encodeURI(
                            `${FACULTY_PROFILE_BASE}/${member.profile}`
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-gold-600 transition-colors hover:text-gold-500 hover:underline"
                        >
                          View
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}