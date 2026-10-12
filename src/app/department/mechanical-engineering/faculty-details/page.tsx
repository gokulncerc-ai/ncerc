import Link from "next/link";
import { ArrowUpRight, GraduationCap, Users, Wrench } from "lucide-react";
import Image from "next/image";
import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../DepartmentNav/DepartmentNav";

type Member = {
  name: string;
  designation: string;
};

type FacultyGroup = {
  heading: string;
  members: Member[];
};

const facultyGroups: FacultyGroup[] = [
  {
    heading: "Teaching Faculty",
    members: [
      { name: "Dr. Appadurai M", designation: "Associate Professor" },
      { name: "Mr Rahul R", designation: "Assistant Professor" },
      { name: "Mr Rakesh PR", designation: "Assistant Professor" },
      { name: "Mr Manuraj K R", designation: "Assistant Professor" },
      { name: "Mr Vimal MN", designation: "Assistant Professor" },
      { name: "Mr Sanoj T", designation: "Assistant Professor" },
      { name: "Mr Baisel Paul", designation: "Assistant Professor" },
      { name: "Mr. Sudeesh S", designation: "Assistant Professor" },
    ],
  },
  {
    heading: "Lab Faculty",
    members: [
      { name: "Mr Savin Babu K S", designation: "Lab Instructor" },
      { name: "Mr Sumesh M", designation: "Lab Assistant" },
      { name: "Mr Sudheesh V K T", designation: "Lab Assistant" },
      { name: "Mr Rajeev KT", designation: "W/SP Instructor" },
      { name: "Mr Anilkumar", designation: "W/SP Instructor" },
    ],
  },
];

const totalFaculty = facultyGroups.reduce(
  (total, group) => total + group.members.length,
  0
);

function pad(number: number) {
  return String(number).padStart(2, "0");
}

export const metadata = {
  title: "Faculty Profile | Mechanical Engineering | NCERC",
  description:
    "Faculty profile of the Mechanical Engineering department at Nehru College of Engineering and Research Centre.",
};

export default function FacultyDetailsPage() {
  return (
    <>
      <SiteHeader />

{/* =========================================================
    HERO
========================================================= */}
<section className="relative isolate overflow-hidden bg-[#20235A]">
  {/* Hero Background Image */}
  <div className="absolute inset-0 -z-20">
    <Image
      src="/images/dpt/mechanical-engineering/heroone.jpeg"
      alt="Mechanical Engineering Faculty & Department"
      fill
      priority
      sizes="100vw"
      className="object-cover object-center opacity-20 filter contrast-125 grayscale"
    />
  </div>

  {/* Dark Gradient Overlay for Crisp Text Contrast */}
  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#20235A]/95 via-[#20235A]/90 to-[#15183f]/95" />

  {/* Decorative Circles */}
  <div className="pointer-events-none absolute -right-32 -top-32 h-[460px] w-[460px] rounded-full border border-[#D2B87C]/20" />
  <div className="pointer-events-none absolute right-10 top-24 h-[270px] w-[270px] rounded-full border border-[#D2B87C]/15" />
  <div className="pointer-events-none absolute -bottom-48 -left-24 h-[430px] w-[430px] rounded-full border border-white/5" />

  <div className="relative mx-auto max-w-[1400px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16">
    <div className="grid items-end gap-12 lg:grid-cols-[1fr_auto] lg:gap-20">
      <div className="max-w-4xl">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D2B87C] sm:text-sm">
          Mechanical Engineering · Faculty
        </p>

        <h1 className="mt-5 max-w-4xl font-display text-[43px] font-semibold leading-[1.03] tracking-[-0.025em] text-white sm:text-[58px] lg:text-[64px] xl:text-[74px]">
          Faculty
          <span className="block text-[#D2B87C]">Profile.</span>
        </h1>

        <div className="mt-7 h-px w-20 bg-[#D2B87C]" />

        <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
          Meet the teaching and laboratory faculty supporting academic
          learning and practical engineering education in the Mechanical
          Engineering department.
        </p>
      </div>

      <div className="hidden lg:block">
        <div className="border-l border-[#D2B87C] pl-6">
          <p className="font-display text-5xl font-semibold text-white">
            {pad(totalFaculty)}
          </p>

          <p className="mt-2 max-w-[150px] text-xs font-medium uppercase leading-5 tracking-[0.16em] text-white/55">
            Faculty members
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      <main className="bg-[#FAF7F2]">
        <InnerHeader />

        {/* Introduction */}
        <section className="border-b border-[#E0D9CF] bg-[#FAF7F2] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746] sm:text-sm">
                  Department Directory
                </p>

                <h2 className="mt-4 max-w-md font-display text-3xl font-semibold leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                  People behind the engineering experience.
                </h2>

                <div className="mt-6 h-px w-16 bg-[#D2B87C]" />
              </div>

              <div className="max-w-2xl lg:pt-8">
                <p className="text-base leading-8 text-[#5F5A55] sm:text-lg">
                  The Mechanical Engineering department brings together
                  teaching and laboratory faculty to support classroom
                  learning, practical sessions, and the broader academic
                  experience of students.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Faculty Statistics */}
        <section className="bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
            <div className="grid border border-[#D8D1C7] sm:grid-cols-3">
              <FacultyStat
                icon={<Users className="h-6 w-6" strokeWidth={1.5} />}
                number={pad(totalFaculty)}
                label="Total Faculty"
                border
              />

              <FacultyStat
                icon={
                  <GraduationCap className="h-6 w-6" strokeWidth={1.5} />
                }
                number={pad(facultyGroups[0].members.length)}
                label="Teaching Faculty"
                border
              />

              <FacultyStat
                icon={<Wrench className="h-6 w-6" strokeWidth={1.5} />}
                number={pad(facultyGroups[1].members.length)}
                label="Lab Faculty"
              />
            </div>
          </div>
        </section>

        {/* Faculty Directory */}
        <section className="bg-white pb-20 sm:pb-24 lg:pb-28">
          <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
            <div className="flex flex-col gap-6 border-b border-[#DDD7CE] pb-8 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746] sm:text-sm">
                  Faculty Directory
                </p>

                <h2 className="mt-3 font-display text-3xl font-semibold text-[#20235A] sm:text-4xl lg:text-5xl">
                  Our Faculty
                </h2>

                <div className="mt-5 h-px w-16 bg-[#D2B87C]" />
              </div>

              <p className="max-w-xs text-sm leading-6 text-[#77716A]">
                Teaching and laboratory professionals supporting Mechanical
                Engineering education.
              </p>
            </div>

            <div className="mt-12 space-y-16 sm:mt-16">
              {facultyGroups.map((group, groupIndex) => (
                <section key={group.heading}>
                  {/* Group Heading */}
                  <div className="mb-7 flex items-center gap-5">
                    <span className="font-display text-4xl font-semibold text-[#D2B87C]">
                      {pad(groupIndex + 1)}
                    </span>

                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                        Faculty Group
                      </p>

                      <h3 className="mt-1 font-display text-2xl font-semibold text-[#20235A] sm:text-3xl">
                        {group.heading}
                      </h3>
                    </div>
                  </div>

                  {/* Desktop Table */}
                  <div className="hidden overflow-hidden border border-[#D8D1C7] md:block">
                    <div className="grid grid-cols-[100px_1fr_1fr] bg-[#20235A] text-xs font-semibold uppercase tracking-[0.16em] text-white">
                      <div className="px-6 py-5 text-[#D2B87C]">No.</div>
                      <div className="px-6 py-5">Name</div>
                      <div className="px-6 py-5">Designation</div>
                    </div>

                    {group.members.map((member, index) => (
                      <div
                        key={`${group.heading}-${member.name}`}
                        className="group grid grid-cols-[100px_1fr_1fr] border-t border-[#E2DDD5] bg-[#FAF7F2] transition-colors duration-300 hover:bg-[#F2EFE8]"
                      >
                        <div className="flex items-center px-6 py-6 font-display text-xl font-semibold text-[#8F7746]">
                          {pad(index + 1)}
                        </div>

                        <div className="flex items-center px-6 py-6">
                          <div className="h-2 w-2 rounded-full bg-[#D2B87C] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                          <span className="ml-0 font-medium text-[#20235A] transition-all duration-300 group-hover:ml-3">
                            {member.name}
                          </span>
                        </div>

                        <div className="flex items-center px-6 py-6 text-[#6A645D]">
                          {member.designation}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Mobile Cards */}
                  <div className="space-y-3 md:hidden">
                    {group.members.map((member, index) => (
                      <article
                        key={`${group.heading}-${member.name}`}
                        className="border border-[#D8D1C7] bg-[#FAF7F2] p-5"
                      >
                        <div className="flex items-start gap-4">
                          <span className="font-display text-2xl font-semibold text-[#D2B87C]">
                            {pad(index + 1)}
                          </span>

                          <div>
                            <h4 className="font-display text-xl font-semibold text-[#20235A]">
                              {member.name}
                            </h4>

                            <p className="mt-2 text-sm leading-6 text-[#6A645D]">
                              {member.designation}
                            </p>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>

        {/* Statement */}
        <section className="relative isolate overflow-hidden bg-[#20235A] py-20 sm:py-24 lg:py-28">
          <div className="pointer-events-none absolute -right-24 -top-24 h-[380px] w-[380px] rounded-full border border-[#D2B87C]/15" />

          <div className="pointer-events-none absolute right-10 top-12 h-[220px] w-[220px] rounded-full border border-[#D2B87C]/10" />

          <div className="relative mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                  Mechanical Engineering
                </p>

                <div className="mt-6 h-px w-16 bg-[#D2B87C]" />
              </div>

              <h2 className="max-w-4xl font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                Experienced people. Practical knowledge. An engineering
                education built around learning.
              </h2>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-[#FAF7F2] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
            <div className="border-t border-[#D8D1C7] pt-8">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                    Mechanical Engineering
                  </p>

                  <h2 className="mt-3 max-w-2xl font-display text-2xl font-semibold text-[#20235A] sm:text-3xl">
                    Explore the department and its academic environment.
                  </h2>
                </div>

                <Link
                  href="/department/mechanical-engineering"
                  className="inline-flex h-12 items-center justify-center border border-[#20235A] px-7 text-xs font-semibold uppercase tracking-[0.16em] text-[#20235A] transition-colors duration-300 hover:bg-[#20235A] hover:text-white"
                >
                  Department Overview
                  <ArrowUpRight
                    className="ml-3 h-4 w-4"
                    strokeWidth={1.5}
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}

function FacultyStat({
  icon,
  number,
  label,
  border = false,
}: {
  icon: React.ReactNode;
  number: string;
  label: string;
  border?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-5 px-6 py-7 sm:px-8 ${
        border ? "border-b border-[#D8D1C7] sm:border-b-0 sm:border-r" : ""
      }`}
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#D2B87C] text-[#20235A]">
        {icon}
      </div>

      <div>
        <p className="font-display text-3xl font-semibold text-[#20235A]">
          {number}
        </p>

        <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8F7746]">
          {label}
        </p>
      </div>
    </div>
  );
}