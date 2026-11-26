import Image from "next/image";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../../DepartmentNav/DepartmentNav";

type Entry = {
  date: number;
  note?: string;
};

type MonthColumn = {
  month: string;
  entries: Entry[];
};

type CalendarBlock = {
  title: string;
  months: MonthColumn[];
};

const calendarBlocks: CalendarBlock[] = [
  {
    title:
      "Academic Calendar for S8 B.TECH – EVEN Semester – March to August 2022",
    months: [
      {
        month: "March 2022",
        entries: [
          { date: 3, note: "Commencement of Classes" },
          {
            date: 5,
            note: "Technical Talk on Recent Trends in Aerospace & Automotive Aerodynamics",
          },
          { date: 8, note: "Women’s Day Celebration" },
          {
            date: 10,
            note: "Association Inauguration & Expert Talk on Modern Electric Vehicle",
          },
          { date: 12, note: "Talk on Preparation for Placement" },
          { date: 14, note: "First CC Meeting, S8 B.Tech" },
          { date: 15, note: "Completion of Module I" },
          { date: 16, note: "Course selection/mapping begins" },
          { date: 18, note: "Course selection/mapping ends" },
          { date: 28, note: "Completion of Module II" },
        ],
      },
      {
        month: "April 2022",
        entries: [
          {
            date: 27,
            note: "Completion of Module III, Series Test-I",
          },
          { date: 28, note: "Series Test-I" },
          { date: 29, note: "Project Review" },
          {
            date: 36,
            note: "Completion of Module IV (week-crossing reference)",
          },
          { date: 39, note: "Second CC Meeting" },
          { date: 40, note: "Continued" },
        ],
      },
      {
        month: "May 2022",
        entries: [
          {
            date: 43,
            note: "Project Review (week-crossing reference)",
          },
          { date: 45, note: "Completion of Module V" },
          { date: 47, note: "Workshop on Thermal Power Plants" },
          { date: 50, note: "Continued" },
          { date: 51, note: "Exam registration begins" },
          { date: 53, note: "Project Submission" },
          { date: 54, note: "Completion of Module VI" },
          { date: 56, note: "Series Test-II" },
          { date: 57, note: "Series Test-II" },
          { date: 58, note: "International Conference" },
          { date: 59, note: "International Conference" },
        ],
      },
    ],
  },
  {
    title: "Academic Calendar – June to August 2022",
    months: [
      {
        month: "June 2022",
        entries: [
          { date: 1, note: "Third CC Meeting / Revision" },
          {
            date: 2,
            note: "Revision, Seminar on Computer Organisation",
          },
          { date: 3, note: "Publish IA marks / Revision" },
          { date: 4, note: "Class Ends, Publish attendance" },
          {
            date: 15,
            note: "Commencement of End Semester Examination",
          },
        ],
      },
      {
        month: "July 2022",
        entries: [],
      },
      {
        month: "August 2022",
        entries: [],
      },
    ],
  },
];

function pad(number: number) {
  return String(number).padStart(2, "0");
}

function CalendarTable({ block }: { block: CalendarBlock }) {
  return (
    <section className="mb-20 last:mb-0 sm:mb-24">
      {/* Block Heading */}
      <div className="border-b border-[#DDD7CE] pb-8">
        <div className="flex items-start gap-5">
          <span className="font-display text-4xl font-semibold text-[#D2B87C]">
            {block.title.includes("June") ? "02" : "01"}
          </span>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
              Academic Schedule
            </p>

            <h2 className="mt-2 max-w-4xl font-display text-2xl font-semibold leading-tight text-[#20235A] sm:text-3xl lg:text-4xl">
              {block.title}
            </h2>

            <div className="mt-5 h-px w-16 bg-[#D2B87C]" />
          </div>
        </div>
      </div>

      {/* Month Columns */}
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {block.months.map((col, monthIndex) => (
          <article
            key={col.month}
            className="group overflow-hidden border border-[#D8D1C7] bg-[#FAF7F2] transition-colors duration-300 hover:border-[#20235A]"
          >
            {/* Month Header */}
            <div className="flex items-center justify-between bg-[#20235A] px-5 py-5">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                  Month {pad(monthIndex + 1)}
                </p>

                <h3 className="mt-1 font-display text-xl font-semibold text-white">
                  {col.month}
                </h3>
              </div>

              <div className="flex h-10 w-10 items-center justify-center border border-[#D2B87C]/50 font-display text-sm font-semibold text-[#D2B87C]">
                {pad(col.entries.length)}
              </div>
            </div>

            {/* Month Content */}
            {col.entries.length === 0 ? (
              <div className="flex min-h-[150px] items-center justify-center px-6 py-8">
                <div className="text-center">
                  <p className="font-display text-lg font-semibold text-[#20235A]">
                    No recorded events
                  </p>

                  <div className="mx-auto mt-4 h-px w-10 bg-[#D2B87C]" />

                  <p className="mt-4 text-xs uppercase tracking-[0.12em] text-[#8A847D]">
                    Academic schedule unavailable
                  </p>
                </div>
              </div>
            ) : (
              <ul className="divide-y divide-[#E2DDD5]">
                {col.entries.map((entry, index) => (
                  <li
                    key={`${col.month}-${entry.date}-${index}`}
                    className="group/entry flex items-start gap-4 px-5 py-4 transition-colors duration-300 hover:bg-white"
                  >
                    {/* Date */}
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#D2B87C] font-display text-sm font-semibold text-[#8F7746] transition-colors duration-300 group-hover/entry:bg-[#20235A] group-hover/entry:text-white">
                      {entry.date}
                    </span>

                    {/* Event */}
                    <span className="pt-1 text-sm leading-6 text-[#5F5A55] transition-colors duration-300 group-hover/entry:text-[#20235A]">
                      {entry.note ?? "—"}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

export const metadata = {
  title: "Academic Calendar 2021-22 | Mechanical Engineering | NCERC",
  description:
    "Academic Calendar 2021-22 for the Mechanical Engineering department at Nehru College of Engineering and Research Centre.",
};

export default function AcademicCalendar2122Page() {
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
            alt="Mechanical Engineering Academic Calendar"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-20 filter contrast-125 grayscale"
          />
        </div>

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#20235A]/95 via-[#20235A]/90 to-[#15183f]/95" />

        {/* Decorative Circles */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-[460px] w-[460px] rounded-full border border-[#D2B87C]/20" />

        <div className="pointer-events-none absolute right-10 top-24 h-[270px] w-[270px] rounded-full border border-[#D2B87C]/15" />

        <div className="pointer-events-none absolute -bottom-48 -left-24 h-[430px] w-[430px] rounded-full border border-white/5" />

        {/* Hero Content */}
        <div className="relative mx-auto max-w-[1400px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16">
          <div className="grid items-end gap-12 lg:grid-cols-[1fr_auto] lg:gap-20">
            <div className="max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D2B87C] sm:text-sm">
                Mechanical Engineering · Academics
              </p>

              <h1 className="mt-5 max-w-4xl font-display text-[43px] font-semibold leading-[1.03] tracking-[-0.025em] text-white sm:text-[58px] lg:text-[64px] xl:text-[74px]">
                Academic
                <span className="block text-[#D2B87C]">Calendar.</span>
              </h1>

              <div className="mt-7 h-px w-20 bg-[#D2B87C]" />

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                Academic schedule, important dates, examinations, meetings,
                reviews, and activities for the Mechanical Engineering
                department during the 2021–22 academic year.
              </p>
            </div>

            {/* Academic Year */}
            <div className="hidden lg:block">
              <div className="border-l border-[#D2B87C] pl-6">
                <p className="font-display text-5xl font-semibold text-white">
                  21–22
                </p>

                <p className="mt-2 max-w-[150px] text-xs font-medium uppercase leading-5 tracking-[0.16em] text-white/55">
                  Academic Year
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="bg-[#FAF7F2]">
        {/* Department Navigation */}
        <InnerHeader />

        {/* =========================================================
            INTRODUCTION
        ========================================================= */}
        <section className="border-b border-[#E0D9CF] bg-[#FAF7F2] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746] sm:text-sm">
                  Department Academics
                </p>

                <h2 className="mt-4 max-w-md font-display text-3xl font-semibold leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                  A clear academic roadmap for every stage of the semester.
                </h2>

                <div className="mt-6 h-px w-16 bg-[#D2B87C]" />
              </div>

              <div className="max-w-2xl lg:pt-8">
                <p className="text-base leading-8 text-[#5F5A55] sm:text-lg">
                  The academic calendar brings together important academic
                  milestones, examinations, meetings, project reviews,
                  seminars, workshops, and other departmental activities
                  scheduled throughout the academic year.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            CALENDAR CONTENT
        ========================================================= */}
        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
            {/* Section Header */}
            <div className="flex flex-col gap-6 border-b border-[#DDD7CE] pb-8 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746] sm:text-sm">
                  Academic Schedule
                </p>

                <h2 className="mt-3 font-display text-3xl font-semibold text-[#20235A] sm:text-4xl lg:text-5xl">
                  2021–22 Calendar
                </h2>

                <div className="mt-5 h-px w-16 bg-[#D2B87C]" />
              </div>

              <p className="max-w-xs text-sm leading-6 text-[#77716A]">
                Important dates and departmental activities arranged by month.
              </p>
            </div>

            {/* Calendar Blocks */}
            <div className="mt-12 sm:mt-16">
              {calendarBlocks.map((block) => (
                <CalendarTable key={block.title} block={block} />
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            STATEMENT
        ========================================================= */}
        <section className="relative isolate overflow-hidden bg-[#20235A] py-20 sm:py-24 lg:py-28">
          {/* Decorative Circles */}
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
                Planned academics. Meaningful activities. A structured
                learning experience.
              </h2>
            </div>
          </div>
        </section>

        {/* =========================================================
            BOTTOM CTA
        ========================================================= */}
        <section className="bg-[#FAF7F2] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
            <div className="border-t border-[#D8D1C7] pt-8">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                    Mechanical Engineering
                  </p>

                  <h2 className="mt-3 max-w-2xl font-display text-2xl font-semibold text-[#20235A] sm:text-3xl">
                    Return to the department and explore more academic
                    resources.
                  </h2>
                </div>

                <a
                  href="/department/mechanical-engineering/syllabus"
                  className="inline-flex h-12 items-center justify-center border border-[#20235A] px-7 text-xs font-semibold uppercase tracking-[0.16em] text-[#20235A] transition-colors duration-300 hover:bg-[#20235A] hover:text-white"
                >
                  Syllabus

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="ml-3 h-4 w-4"
                  >
                    <path d="M7 17 17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}