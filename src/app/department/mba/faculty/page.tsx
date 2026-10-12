
import type { Metadata } from "next";
import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  GraduationCap,
  Users,
} from "lucide-react";
import Image from "next/image";
import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../DepartmentNav/page";
import FAQ from "../FAQ.tsx/page";

export const metadata: Metadata = {
  title: "Faculty | Nehru School of Management - NCERC",
  description:
    "Meet the faculty of Nehru School of Management (NSM), NCERC. Explore faculty profiles, designations, qualifications and dates of joining.",
  keywords: [
    "Nehru School of Management faculty",
    "NSM NCERC faculty",
    "MBA faculty Kerala",
    "NCERC Thrissur",
    "MBA professors",
    "Nehru College of Engineering and Research Centre",
  ],
  robots: {
    index: true,
    follow: true,
  },
};

type Faculty = {
  name: string;
  designation: string;
  photo: string;
  qualification: string;
  dateOfJoining: string;
  nature: string;
};
const currentFaculty: Faculty[] = [
  {
    name: "Prof Dr KrishnaKumar T P",
    designation: "HOD & Professor",
    photo: `https://ncerc.ac.in/mba/img/faculty/Dr.%20Krishnakumar.jpeg`,
    qualification: "MBA, PhD, PGDIAM, PGDHM",
    dateOfJoining: "14.03.2022",
    nature: "Regular",
  },
  {
    name: "Dr K S Sreejamol",
    designation: "Associate Professor",
    photo: `https://ncerc.ac.in/mba/img/faculty/Sreejamol.jpeg`,
    qualification: "MBA, PhD",
    dateOfJoining: "15.07.2025",
    nature: "Regular",
  },
  {
    name: "Mr Alex K",
    designation: "Assistant Professor",
    photo: `https://ncerc.ac.in/mba/img/faculty/Alex.jpeg`,
    qualification:
      "BE Mechanical, MBA (Marketing & Operations), PhD (Pursuing)",
    dateOfJoining: "16.06.2014",
    nature: "Regular",
  },
  {
    name: "Ms Dhanya Nair",
    designation: "Assistant Professor",
    photo: `https://ncerc.ac.in/mba/img/faculty/Dhanya.jpeg`,
    qualification: "MBA, NET, PhD (Pursuing)",
    dateOfJoining: "01.07.2023",
    nature: "Regular",
  },
  {
    name: "Ms Reshma C K",
    designation: "Assistant Professor",
    photo: `https://ncerc.ac.in/mba/img/faculty/Reshma%20CK.jpg`,
    qualification: "MBA, PhD (Pursuing)",
    dateOfJoining: "14.08.2025",
    nature: "Regular",
  },
  {
    name: "Ms Vijishma V V",
    designation: "Assistant Professor",
    photo: `https://ncerc.ac.in/mba/img/faculty/Vijishma%20Vidyadharan%20T_Photo.jpg`,
    qualification:
      "MBA, MCom, MSc Applied Psychology, NET, PhD (Pursuing)",
    dateOfJoining: "15.12.2025",
    nature: "Regular",
  },
  {
    name: "Ms Malavika L",
    designation: "Assistant Professor",
    photo: `https://ncerc.ac.in/mba/img/faculty/Malavika.jpeg`,
    qualification: "Mcom, MBA, UGC-NET (commerce & management)",
    dateOfJoining: "02.02.2026",
    nature: "Regular",
  },
  {
    name: "Mr Boopathy C",
    designation: "Assistant Professor",
    photo: `https://ncerc.ac.in/mba/img/faculty/Mr_Boopathy_C.jpeg`,
    qualification: "M.A, M.B.A",
    dateOfJoining: "24.08.2026",
    nature: "Regular",
  },
];

const facultyStats = [
  {
    value: String(currentFaculty.length).padStart(2, "0"),
    label: "Faculty members",
    icon: Users,
  },
  {
    value: "01",
    label: "Academic leadership",
    icon: BriefcaseBusiness,
  },
  {
    value: "MBA",
    label: "Management education",
    icon: GraduationCap,
  },
];

export default function MBAFacultyPage() {
  return (
    <>
      <SiteHeader />

      {/* Premium faculty hero */}
      <section className="relative isolate overflow-hidden bg-[#20235A] text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "54px 54px",
          }}
        />

        <div
          aria-hidden="true"
          className="absolute -right-24 top-0 h-[420px] w-[420px] rounded-full border border-[#D2B87C]/20 sm:h-[560px] sm:w-[560px]"
        />
        <div
          aria-hidden="true"
          className="absolute -right-10 top-12 h-[340px] w-[340px] rounded-full border border-[#D2B87C]/20 sm:h-[450px] sm:w-[450px]"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 h-1 w-2/3 bg-gradient-to-r from-[#D2B87C] to-transparent"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 lg:py-24">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#D2B87C]" />
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D2B87C] sm:text-sm">
                Nehru School of Management
              </p>
            </div>

            <h1 className="font-serif text-4xl font-medium leading-[1.12] tracking-tight sm:text-5xl lg:text-7xl">
              Meet the minds
              <br />
              <span className="italic text-[#D2B87C]">
                shaping future leaders.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              Discover the faculty behind our management learning experience.
              Our academic team brings knowledge, guidance and diverse
              perspectives to the journey of developing tomorrow’s business
              leaders.
            </p>

            <a
              href="#faculty"
              className="mt-8 inline-flex items-center gap-3 border border-[#D2B87C]/60 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#D2B87C] hover:text-[#20235A]"
            >
              Explore our faculty
              <ArrowDown size={17} />
            </a>
          </div>

          <div className="relative hidden min-h-[330px] items-center justify-center lg:flex">
            <div className="absolute h-[300px] w-[300px] rounded-full border border-[#D2B87C]/30" />
            <div className="absolute h-[240px] w-[240px] rounded-full border border-[#D2B87C]/30" />
            <div className="absolute h-[180px] w-[180px] rounded-full bg-[#D2B87C]/10" />

            <div className="relative flex h-36 w-36 items-center justify-center border border-[#D2B87C]/60 bg-[#20235A]">
              <span className="font-serif text-6xl text-[#D2B87C]">NSM</span>
            </div>

            <div className="absolute right-0 top-8 max-w-[175px] border border-white/15 bg-white/[0.06] p-4 backdrop-blur-sm">
              <GraduationCap className="mb-3 text-[#D2B87C]" size={25} />
              <p className="text-sm font-semibold">Knowledge that inspires</p>
              <p className="mt-1 text-xs leading-5 text-white/60">
                Education with purpose and perspective.
              </p>
            </div>

            <div className="absolute bottom-8 left-0 max-w-[185px] border border-white/15 bg-white/[0.06] p-4 backdrop-blur-sm">
              <BriefcaseBusiness className="mb-3 text-[#D2B87C]" size={23} />
              <p className="text-sm font-semibold">Leadership in practice</p>
              <p className="mt-1 text-xs leading-5 text-white/60">
                Connecting management theory with the real world.
              </p>
            </div>
          </div>
        </div>

        <div className="relative border-t border-white/10">
          <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-white/10 px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-8">
            {facultyStats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className="flex items-center gap-4 py-5 sm:px-6 sm:py-6 first:sm:pl-0 last:sm:pr-0"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#D2B87C]/30 text-[#D2B87C]">
                    <Icon size={21} strokeWidth={1.6} />
                  </div>
                  <div>
                    <p className="font-serif text-2xl text-white">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-[0.14em] text-white/55">
                      {stat.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <main className="bg-[#FAF8F3] text-[#1E1917]">
        <InnerHeader />

        {/* Introduction */}
        <section className="px-6 py-14 sm:px-8 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8F7746]">
                The people behind the programme
              </p>
              <h2 className="mt-4 max-w-xl font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                Experience, insight and a commitment to learning.
              </h2>
            </div>

            <div className="max-w-2xl lg:justify-self-end">
              <p className="text-base leading-8 text-[#5F5A52]">
                At the Nehru School of Management, faculty members contribute
                to an academic environment that encourages critical thinking,
                professional development and an understanding of contemporary
                business. Explore the profiles below to learn more about our
                current faculty team.
              </p>
              <div className="mt-6 flex items-center gap-3 text-sm font-semibold text-[#20235A]">
                <span className="h-px w-9 bg-[#D2B87C]" />
                Current faculty directory
              </div>
            </div>
          </div>
        </section>

        {/* Faculty cards */}
        <section id="faculty" className="scroll-mt-24 px-6 pb-16 sm:px-8 sm:pb-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-9 flex flex-col justify-between gap-4 border-b border-[#20235A]/15 pb-6 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8F7746]">
                  Our academic team
                </p>
                <h2 className="mt-2 font-serif text-3xl text-[#20235A] sm:text-4xl">
                  Current Faculty
                </h2>
              </div>
              <p className="text-sm text-[#777066]">
                Faculty profiles · {currentFaculty.length} members
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {currentFaculty.map((faculty, index) => (
                <article
                  key={faculty.name}
                  className="group flex h-full flex-col overflow-hidden border border-[#E6E0D4] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#D2B87C] hover:shadow-[0_18px_45px_rgba(32,35,90,0.09)]"
                >
                  <div className="relative flex h-[280px] items-center justify-center overflow-hidden bg-[#EEEAE1] sm:h-[300px]">
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 opacity-40"
                      style={{
                        backgroundImage:
                          "linear-gradient(135deg, transparent 49.5%, rgba(32,35,90,.08) 50%, transparent 50.5%)",
                        backgroundSize: "28px 28px",
                      }}
                    />

                    <Image
                      src={encodeURI(faculty.photo)}
                      alt={`Portrait of ${faculty.name}`}
                      loading={index < 4 ? "eager" : "lazy"}
                      fill
                      sizes="(min-width: 1024px) 330px, 100vw"
                      className="relative z-10 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    />

                    <span className="absolute left-4 top-4 z-20 bg-[#20235A] px-3 py-1.5 text-[10px] font-bold tracking-[0.16em] text-white">
                      FACULTY {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <div className="mb-3 h-px w-10 bg-[#D2B87C] transition-all duration-300 group-hover:w-16" />

                    <h3 className="font-serif text-xl leading-snug text-[#20235A]">
                      {faculty.name}
                    </h3>

                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.12em] text-[#8F7746]">
                      {faculty.designation}
                    </p>

                    <div className="mt-5 border-t border-[#EEE9DF] pt-4">
                      <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#8B857A]">
                        Qualifications
                      </p>
                      <p className="mt-2 text-sm leading-6 text-[#5F5A52]">
                        {faculty.qualification}
                      </p>
                    </div>

                    <div className="mt-auto flex items-center gap-2 border-t border-[#EEE9DF] pt-4 mt-5 text-xs text-[#777066]">
                      <CalendarDays size={15} className="shrink-0 text-[#8F7746]" />
                      <span>Joined {faculty.dateOfJoining}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed directory */}
        <section className="border-y border-[#E7E0D4] bg-white px-6 py-14 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8F7746]">
                  Faculty information
                </p>
                <h2 className="mt-2 font-serif text-3xl text-[#20235A] sm:text-4xl">
                  Faculty Directory
                </h2>
              </div>

              <a
                href="#faculty"
                className="inline-flex items-center gap-2 self-start text-sm font-semibold text-[#20235A] transition-colors hover:text-[#8F7746] sm:self-auto"
              >
                View profiles
                <ArrowUpRight size={17} />
              </a>
            </div>

            <div className="overflow-hidden border border-[#E7E0D4]">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[850px] border-collapse text-left">
                  <thead>
                    <tr className="bg-[#20235A] text-[11px] font-bold uppercase tracking-[0.13em] text-white">
                      <th scope="col" className="px-5 py-5 text-center">
                        SI No.
                      </th>
                      <th scope="col" className="px-5 py-5">
                        Faculty name
                      </th>
                      <th scope="col" className="px-5 py-5">
                        Designation
                      </th>
                      <th scope="col" className="px-5 py-5">
                        Qualification
                      </th>
                      <th scope="col" className="px-5 py-5">
                        Date of joining
                      </th>
                      <th scope="col" className="px-5 py-5">
                        Nature
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-[#EEE9DF] text-sm text-[#5F5A52]">
                    {currentFaculty.map((faculty, index) => (
                      <tr
                        key={faculty.name}
                        className="transition-colors hover:bg-[#FAF8F3]"
                      >
                        <td className="px-5 py-5 text-center font-semibold text-[#8F7746]">
                          {String(index + 1).padStart(2, "0")}
                        </td>
                        <td className="px-5 py-5 font-semibold text-[#20235A]">
                          {faculty.name}
                        </td>
                        <td className="px-5 py-5">{faculty.designation}</td>
                        <td className="max-w-xs px-5 py-5 leading-6">
                          {faculty.qualification}
                        </td>
                        <td className="whitespace-nowrap px-5 py-5">
                          {faculty.dateOfJoining}
                        </td>
                        <td className="px-5 py-5">
                          <span className="inline-flex items-center border border-[#D8E4D5] bg-[#F3F7F1] px-3 py-1 text-xs font-medium text-[#466441]">
                            {faculty.nature}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="mt-4 text-xs leading-6 text-[#888175]">
              Faculty details are presented as provided. Please contact the
              institution for the latest updates or corrections.
            </p>
          </div>
        </section>

        {/* Closing callout */}
        <section className="px-6 py-14 sm:px-8 sm:py-20">
          <div className="relative mx-auto max-w-7xl overflow-hidden bg-[#20235A] px-7 py-10 text-white sm:px-12 sm:py-14 lg:px-16">
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-24 h-72 w-72 rounded-full border border-[#D2B87C]/25"
            />
            <div
              aria-hidden="true"
              className="absolute -right-5 -top-12 h-52 w-52 rounded-full border border-[#D2B87C]/25"
            />

            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D2B87C]">
                  Nehru School of Management
                </p>
                <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">
                  Learn with purpose.
                  <br />
                  <span className="italic text-[#D2B87C]">
                    Grow into leadership.
                  </span>
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
                  Explore the MBA programme and discover an academic
                  environment focused on developing management knowledge and
                  professional capability.
                </p>
              </div>

              <a
                href="#faculty"
                className="inline-flex shrink-0 items-center justify-center gap-3 border border-[#D2B87C] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#D2B87C] hover:text-[#20235A]"
              >
                Explore faculty
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <FAQ />
      <FooterSection />
    </>
  );
}