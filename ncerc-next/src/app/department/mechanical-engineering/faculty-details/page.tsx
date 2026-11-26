import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../DepartmentNav/DepartmentNav";
import { ArrowUpRight, Users } from "lucide-react";



const FACULTY_BASE =
  "/department/mechanical-engineering/faculty-details/faculty-list";

const facultyMembers = [
  {
    id: 1,
    name: "Benny Paul",
    designation: "Professor & Head",
    image:
      "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
    href: `${FACULTY_BASE}/benny-paul`,
  },
  {
    id: 2,
    name: "Deepu T",
    designation: "Assistant Professor",
    image: "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
    href: `${FACULTY_BASE}/deepu-t`,
  },
  {
    id: 3,
    name: "Appadurai M",
    designation: "Assistant Professor",
    image: "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
    href: `${FACULTY_BASE}/appadurai-m`,
  },
  {
    id: 4,
    name: "Sanoj T",
    designation: "Assistant Professor",
    image: "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
    href: `${FACULTY_BASE}/sanoj-t`,
  },
  {
    id: 5,
    name: "Manuraj K R",
    designation: "Assistant Professor",
    image: "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
    href: `${FACULTY_BASE}/manuraj-kr`,
  },
  {
    id: 6,
    name: "Ragesh P R",
    designation: "Assistant Professor",
    image: "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
    href: `${FACULTY_BASE}/ragesh-pr`,
  },
  {
    id: 7,
    name: "Rahul R",
    designation: "Assistant Professor",
    image: "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
    href: `${FACULTY_BASE}/rahul-r`,
  },
  {
    id: 8,
    name: "Sudeesh S",
    designation: "Assistant Professor",
    image: "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
    href: `${FACULTY_BASE}/sudeesh-s`,
  },

];

export default function FacultyDetailsPage() {
  return (
    <>
      <SiteHeader />

      {/* Page Title Banner */}
      <section className="relative isolate overflow-hidden bg-[#20235A]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#20235A] via-[#20235A] to-[#171A43]" />

        <div className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full border border-[#D2B87C]/15" />
        <div className="pointer-events-none absolute -right-5 -top-16 h-56 w-56 rounded-full border border-[#D2B87C]/20" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#D2B87C]" />
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#D2B87C]">
              Mechanical  Engineering
            </p>
          </div>

          <h1 className="mt-6 max-w-3xl font-serif text-4xl font-normal leading-[1.12] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[68px]">
            The People Behind
            <br />
            <span className="italic text-[#D2B87C]">
              Our Excellence.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
            Meet the dedicated educators and professionals who inspire
            learning, encourage innovation, and shape the next generation
            of engineers.
          </p>

          <div className="mt-9 flex items-center gap-3">
            <span className="h-px w-12 bg-[#D2B87C]" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/55">
              Academic Team
            </span>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-[3px] bg-[#D2B87C]" />
      </section>

      {/* Page Content */}
      <main className="bg-white">
        {/* Inner Sub-Header Navigation */}
        <InnerHeader />

        {/* Faculty Directory */}
        <section className="bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-18 lg:px-12 lg:py-20">
          <div className="mx-auto max-w-7xl">

            {/* Section Introduction */}
            <div className="mb-10 grid gap-8 border-b border-[#DED7C9] pb-8 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <div className="mb-3 flex items-center gap-3">
                  <span className="text-[11px] font-semibold tracking-[0.2em] text-[#927B4D]">
                    01
                  </span>
                  <span className="h-px w-8 bg-[#D2B87C]" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#927B4D]">
                    Our Academic Team
                  </span>
                </div>

                <h2 className="font-serif text-3xl text-[#20235A] sm:text-4xl">
                  Meet Our Faculty
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#69666B]">
                  Our faculty members combine academic knowledge, research
                  experience, and industry insights to create a meaningful
                  learning environment for every student.
                </p>
              </div>

              <div className="flex items-center gap-4 md:pb-1">
                <div className="flex h-12 w-12 items-center justify-center border border-[#D2B87C] text-[#927B4D]">
                  <Users size={21} strokeWidth={1.4} />
                </div>

                <div>
                  <p className="font-serif text-3xl leading-none text-[#20235A]">
                    {String(facultyMembers.length).padStart(2, "0")}
                  </p>
                  <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.17em] text-[#827B70]">
                    Faculty Members
                  </p>
                </div>
              </div>
            </div>

            {/* Faculty Grid */}
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2">

              {facultyMembers.map((faculty, index) => (
                <Link
                  key={faculty.id}
                  href={faculty.href}
                  aria-label={`View profile of ${faculty.name}`}
                  className="group block h-full"
                >
                  <article className="relative flex h-full min-h-[172px] items-center gap-4 overflow-hidden border border-[#E5DED1] bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#C9AD70] hover:shadow-[0_12px_30px_rgba(32,35,90,0.09)] sm:gap-5 sm:p-5">

                    {/* Faculty Image */}
                    <div className="relative h-[124px] w-[100px] shrink-0 overflow-hidden bg-[#F0ECE3] sm:h-[132px] sm:w-[108px]">
                      <Image
                        src={faculty.image}
                        alt={faculty.name}
                        fill
                        sizes="(max-width: 640px) 100px, 108px"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />

                      <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-[#20235A]/35 to-transparent" />
                    </div>

                    {/* Faculty Details */}
                    <div className="flex min-w-0 flex-1 flex-col justify-center py-1">

                      <div className="mb-3 flex items-center gap-2">
                        <span className="text-[9px] font-semibold tracking-[0.16em] text-[#A18A5B]">
                          FACULTY
                        </span>
                        <span className="h-px w-5 bg-[#D2B87C]" />
                        <span className="text-[9px] tracking-[0.12em] text-[#A5A09A]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <h3 className="break-words font-serif text-lg leading-snug text-[#20235A] transition-colors duration-300 group-hover:text-[#927B4D] sm:text-xl">
                        {faculty.name}
                      </h3>

                      <p className="mt-2 text-[9px] font-semibold uppercase leading-5 tracking-[0.12em] text-[#927B4D] sm:text-[10px]">
                        {faculty.designation}
                      </p>

                      <div className="mt-4 flex items-center justify-between border-t border-[#EEE9E0] pt-3">
                        <span className="text-[9px] font-medium uppercase tracking-[0.13em] text-[#77747A]">
                          View Profile
                        </span>

                        <span className="flex h-7 w-7 items-center justify-center border border-[#E5DED1] text-[#927B4D] transition-all duration-300 group-hover:border-[#20235A] group-hover:bg-[#20235A] group-hover:text-white">
                          <ArrowUpRight
                            size={15}
                            strokeWidth={1.5}
                            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          />
                        </span>
                      </div>
                    </div>

                    {/* Hover Accent */}
                    <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#D2B87C] transition-all duration-500 group-hover:w-full" />
                  </article>
                </Link>
              ))}

            </div>

            {/* Bottom Note */}
            <div className="mt-10 flex flex-col justify-between gap-3 border-t border-[#DED7C9] pt-6 sm:flex-row sm:items-center">
              <p className="text-xs leading-6 text-[#77747A]">
                Explore individual faculty profiles to learn more about
                their academic and professional backgrounds.
              </p>

              <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#927B4D]">
                Department of ECE
              </span>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}