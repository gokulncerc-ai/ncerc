import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ChevronRight,
  GraduationCap,
  Users,
  UserRound,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../DepartmentNav/page";

// Faculty photos
const FACULTY_BASE =
  "/images/dpt/electrical-and-electronics-engineering/img/faculty";

type Member = {
  name: string;
  designation: string;
  photo?: string;
};

type FacultyGroup = {
  heading: string;
  members: Member[];
};

const facultyGroups: FacultyGroup[] = [
  {
    heading: "Teaching Faculty",
    members: [
      {
        name: "Dr. Johnson Y",
        designation: "HoD & Professor",
        photo: "https://i.pinimg.com/736x/b3/eb/4a/b3eb4a828d43924845de9685fac9174a.jpg",
      },
      {
        name: "Prof. Dr. P Rajan",
        designation: "Professor",
        photo: "https://i.pinimg.com/736x/2b/b4/5b/2bb45bf05d7fbe060e3fe0ef41e54f7a.jpg",
      },
      {
        name: "Mr Anoopkumar MV",
        designation: "Assistant Professor",
        photo: "https://ncerc.ac.in/electrical-and-computer-engineering/img/faculty/ANOOP1.jpg",
      },
      {
        name: "Mr Rajesh P",
        designation: "Assistant Professor",
        photo: "https://ncerc.ac.in/electrical-and-computer-engineering/img/faculty/Rajesh%20p.jpg",
      },
      {
        name: "Mr Maheswaran K",
        designation: "Assistant Professor",
        photo: "https://ncerc.ac.in/electrical-and-computer-engineering/img/faculty/Maheswaran.jpg",
      },
      {
        name: "Mr David E",
        designation: "Assistant Professor",
        photo: "https://ncerc.ac.in/electrical-and-computer-engineering/img/faculty/David.jpg",
      },
      {
        name: "Mr Sundaramoorthy",
        designation: "Assistant Professor",
      },
      {
        name: "Ms Saranya Nair",
        designation: "Assistant Professor",
        photo: "Saranya Nair.jpg",
      },
      {
        name: "Ms Rajeenamol PT",
        designation: "Assistant Professor",
        photo: "Rajeenamol.jpg",
      },
      {
        name: "Ms. Abeena A",
        designation: "Assistant Professor",
        photo: "/images/eee-faculties-images/img1.jpg",
      },
    ],
  },
  {
    heading: "Lab Faculty",
    members: [
      {
        name: "Mr. Anil Kumar",
        designation: "Lab Instructor",
      },
      {
        name: "Mr Ramachandran C V",
        designation: "Lab Assistant",
      },
      {
        name: "Ms. Ajitha A",
        designation: "Lab Assistant",
      },
    ],
  },
];

const totalFaculty = facultyGroups.reduce(
  (total, group) => total + group.members.length,
  0
);

const teachingFaculty =
  facultyGroups.find((group) => group.heading === "Teaching Faculty")
    ?.members.length ?? 0;

const labFaculty =
  facultyGroups.find((group) => group.heading === "Lab Faculty")?.members
    .length ?? 0;

export default function FacultyDetailsPage() {
  return (
    <>
      <SiteHeader />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative isolate overflow-hidden bg-[#20235A]">
        {/* Decorative circles */}
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

            <h1 className="max-w-4xl font-serif text-4xl leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              Faculty shaping
              <span className="block text-[#D2B87C]">
                learning &amp; excellence.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
              Meet the teaching and laboratory faculty who support academic
              learning, practical education and the overall development of
              students in the Electrical and Electronics Engineering
              department at NCERC.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#faculty"
                className="group inline-flex items-center gap-2 rounded-full bg-[#D2B87C] px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#20235A] transition-all duration-300 hover:bg-white"
              >
                Explore Faculty
                <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <Link
                href="/department/electrical-and-electronics-engineering"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:border-[#D2B87C]/60 hover:text-[#D2B87C]"
              >
                Department Overview
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
                Faculty
              </p>

              <p className="mt-2 font-serif text-lg text-white">
                {totalFaculty} Members
              </p>
            </div>

            <div className="px-6 py-5 sm:px-10 lg:px-16">
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                Academic Team
              </p>

              <p className="mt-2 font-serif text-lg text-white">
                Teaching &amp; Laboratory
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Department Navigation */}
      <InnerHeader />

      <main className="bg-[#FAF7F2]">
        {/* =========================================================
            INTRO
        ========================================================= */}
        <section className="border-b border-[#1E1917]/10">
          <div className="mx-auto grid max-w-[1440px] gap-10 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-16 lg:py-24">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#D2B87C]" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                  Faculty Profile
                </p>
              </div>

              <h2 className="max-w-3xl font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                Expertise that strengthens the
                <span className="text-[#8F7746]">
                  {" "}
                  academic experience.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-[#1E1917]/70 sm:text-base">
                The Electrical and Electronics Engineering department is
                supported by a dedicated academic team with expertise across
                teaching, laboratory instruction and practical learning.
                Together, the faculty contribute to an environment that
                encourages knowledge, application and continuous learning.
              </p>
            </div>

            {/* Faculty Snapshot */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1">
              <div className="rounded-3xl border border-[#1E1917]/10 bg-white p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                      Total Faculty
                    </p>

                    <p className="mt-3 font-serif text-4xl text-[#20235A]">
                      {totalFaculty}
                    </p>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F2EFE8] text-[#20235A]">
                    <Users className="h-5 w-5" />
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-[#1E1917]/10 bg-white p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                      Teaching Faculty
                    </p>

                    <p className="mt-3 font-serif text-4xl text-[#20235A]">
                      {teachingFaculty}
                    </p>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F2EFE8] text-[#20235A]">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-[#1E1917]/10 bg-white p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                      Lab Faculty
                    </p>

                    <p className="mt-3 font-serif text-4xl text-[#20235A]">
                      {labFaculty}
                    </p>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F2EFE8] text-[#20235A]">
                    <UserRound className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            FACULTY
        ========================================================= */}
        <section id="faculty" className="bg-white">
          <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
            <div className="max-w-3xl">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#D2B87C]" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                  Academic Team
                </p>
              </div>

              <h2 className="font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                Meet the people behind
                <span className="text-[#8F7746]"> the learning.</span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#1E1917]/70 sm:text-base">
                Explore the faculty members responsible for teaching,
                mentoring, laboratory learning and academic support within the
                department.
              </p>
            </div>

            <div className="mt-12 space-y-16">
              {facultyGroups.map((group) => (
                <FacultyGroupSection
                  key={group.heading}
                  group={group}
                />
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            FACULTY EXPERIENCE
        ========================================================= */}
        <section className="bg-[#F2EFE8]">
          <div className="mx-auto grid max-w-[1440px] gap-10 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-[0.85fr_1.15fr] lg:px-16 lg:py-24">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#D2B87C]" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                  Academic Environment
                </p>
              </div>

              <h2 className="font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl">
                More than teaching.
                <span className="block text-[#8F7746]">
                  A culture of guidance.
                </span>
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-[#1E1917]/10 bg-white p-6 sm:p-7">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                  01
                </p>

                <h3 className="mt-4 font-serif text-xl text-[#20235A]">
                  Academic Guidance
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#1E1917]/65">
                  Faculty members support students through classroom learning,
                  academic discussions and continuous mentoring.
                </p>
              </div>

              <div className="rounded-3xl border border-[#1E1917]/10 bg-white p-6 sm:p-7">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                  02
                </p>

                <h3 className="mt-4 font-serif text-xl text-[#20235A]">
                  Practical Learning
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#1E1917]/65">
                  Laboratory faculty help students connect academic concepts
                  with hands-on experimentation and practical applications.
                </p>
              </div>

              <div className="rounded-3xl border border-[#1E1917]/10 bg-white p-6 sm:p-7">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                  03
                </p>

                <h3 className="mt-4 font-serif text-xl text-[#20235A]">
                  Student Support
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#1E1917]/65">
                  A supportive academic environment encourages students to
                  develop confidence, curiosity and professional skills.
                </p>
              </div>

              <div className="rounded-3xl border border-[#1E1917]/10 bg-white p-6 sm:p-7">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                  04
                </p>

                <h3 className="mt-4 font-serif text-xl text-[#20235A]">
                  Departmental Growth
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#1E1917]/65">
                  Faculty participation contributes to the continued academic
                  growth and development of the department.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            CLOSING CTA
        ========================================================= */}
        <section className="bg-[#20235A]">
          <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#D2B87C]" />

                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                    Electrical &amp; Electronics Engineering
                  </p>
                </div>

                <h2 className="max-w-3xl font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
                  Discover the academic environment at NCERC.
                </h2>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
                  Explore the department, its facilities, activities and
                  academic opportunities.
                </p>
              </div>

              <Link
                href="/department/electrical-and-electronics-engineering"
                className="group inline-flex w-fit items-center gap-2 rounded-full bg-[#D2B87C] px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#20235A] transition-all duration-300 hover:bg-white"
              >
                Explore Department
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

/* =========================================================
   FACULTY GROUP
========================================================= */

function FacultyGroupSection({
  group,
}: {
  group: FacultyGroup;
}) {
  return (
    <section>
      <div className="mb-7 flex items-end justify-between gap-6 border-b border-[#1E1917]/10 pb-5">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
            Faculty Category
          </p>

          <h3 className="mt-2 font-serif text-2xl text-[#20235A] sm:text-3xl">
            {group.heading}
          </h3>
        </div>

        <p className="hidden text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1E1917]/40 sm:block">
          {String(group.members.length).padStart(2, "0")} Members
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {group.members.map((member, index) => (
          <FacultyCard
            key={`${group.heading}-${member.name}`}
            member={member}
            number={index + 1}
          />
        ))}
      </div>
    </section>
  );
}

/* =========================================================
   FACULTY CARD
========================================================= */

function FacultyCard({
  member,
  number,
}: {
  member: Member;
  number: number;
}) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-[#1E1917]/10 bg-[#FAF7F2] transition-all duration-300 hover:-translate-y-1 hover:border-[#D2B87C]/70 hover:shadow-xl">
      {/* Photo */}
      <div className="relative aspect-[4/4.2] overflow-hidden bg-[#F2EFE8]">
        {member.photo ? (
          <Image
            src={encodeURI(`${FACULTY_BASE}/${member.photo}`)}
            alt={member.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full border border-[#D2B87C]/50 bg-white text-[#8F7746]">
              <UserRound className="h-10 w-10" strokeWidth={1.3} />
            </div>
          </div>
        )}

        {/* Image overlay */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#20235A]/50 to-transparent opacity-70" />

        {/* Number */}
        <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#20235A]/90 text-[10px] font-semibold tracking-[0.12em] text-[#D2B87C] backdrop-blur-sm">
          {String(number).padStart(2, "0")}
        </div>
      </div>

      {/* Details */}
      <div className="p-5 sm:p-6">
        <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
          {member.designation}
        </p>

        <h4 className="mt-2 font-serif text-xl leading-snug text-[#20235A]">
          {member.name}
        </h4>

        <div className="mt-5 flex items-center gap-2 border-t border-[#1E1917]/10 pt-4">
          <span className="h-px w-7 bg-[#D2B87C]" />

          <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#1E1917]/40">
            NCERC Faculty
          </span>
        </div>
      </div>
    </article>
  );
}