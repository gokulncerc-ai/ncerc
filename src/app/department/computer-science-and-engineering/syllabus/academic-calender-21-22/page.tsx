import { Fragment } from "react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../../DepartmentNav/page";

export const metadata = {
  title:
    "Top Engineering Colleges in Thrissur | Computer Science and Engineering - NCERC",
  description:
    "Academic calendar 2021-22 for the S8 B.Tech even semester (March - August 2022) of the Department of Computer Science and Engineering at Nehru College of Engineering and Research Centre, Thrissur.",
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

/**
 * One month's pair of columns for a day:
 * [date, note (working-day number / event), off (weekend or holiday shading)]
 */
type Cell = [date: string, note?: string, off?: boolean];

/** [weekday, first month, second month, third month] */
type Row = [day: string, first: Cell, second: Cell, third: Cell];

const marchToMay: Row[] = [
  ["Tue", ["1"], [""], [""]],
  ["Wed", ["2"], [""], [""]],
  ["Thu", ["3", "1.Commencement of Classes"], [""], [""]],
  ["Fri", ["4", "2"], ["1", "22"], [""]],
  ["Sat", ["5", "", true], ["2", "", true], [""]],
  ["Sun", ["6", "", true], ["3", "", true], ["1", "", true]],
  ["Mon", ["7", "3"], ["4", "23"], ["2", "", true]],
  ["Tue", ["8", "4"], ["5", "24"], ["3", "41"]],
  ["Wed", ["9", "5"], ["6", "25"], ["4", "42"]],
  ["Thu", ["10", "6"], ["7", "26"], ["5", "43 Project Review"]],
  [
    "Fri",
    ["11", "7"],
    ["8", "27 Completion of Module III Series Test-I"],
    ["6", "44"],
  ],
  ["Sat", ["12", "", true], ["9", "", true], ["7", "", true]],
  ["Sun", ["13", "", true], ["10", "", true], ["8", "", true]],
  [
    "Mon",
    ["14", "8 First CC Meeting S8 B.Tech"],
    ["11", "28 Series Test-I"],
    ["9", "45 Completion of Module V"],
  ],
  [
    "Tue",
    ["15", "9 Completion of Module I"],
    ["12", "29 Project Review"],
    ["10", "46"],
  ],
  [
    "Wed",
    ["16", "10 Course selection/mapping begins"],
    ["13", "30"],
    ["11", "47"],
  ],
  ["Thu", ["17", "11"], ["14", "", true], ["12", "48"]],
  [
    "Fri",
    ["18", "12 Course selection/mapping ends"],
    ["15", "", true],
    ["13", "49"],
  ],
  ["Sat", ["19", "", true], ["16", "", true], ["14", "", true]],
  ["Sun", ["20", "", true], ["17", "", true], ["15", "", true]],
  ["Mon", ["21", "13"], ["18", "31"], ["16", "50"]],
  [
    "Tue",
    ["22", "14"],
    ["19", "32 Workshop on Latex"],
    ["17", "51 Exam registration begins, Technical Talk"],
  ],
  ["Wed", ["23", "15"], ["20", "33"], ["18", "52"]],
  ["Thu", ["24", "16"], ["21", "34"], ["19", "53 Project Submission"]],
  [
    "Fri",
    ["25", "17"],
    ["22", "35"],
    ["20", "54 Completion of Module VI"],
  ],
  [
    "Sat",
    ["26", "", true],
    ["23", "", true],
    ["21", "Exam registration ends", true],
  ],
  ["Sun", ["27", "", true], ["24", "", true], ["22", "", true]],
  [
    "Mon",
    ["28", "18 Completion of Module II"],
    ["25", "36 Completion of Module IV"],
    ["23", "55"],
  ],
  ["Tue", ["29", "19"], ["26", "37"], ["24", "56 Series Test-II"]],
  ["Wed", ["30", "20"], ["27", "38"], ["25", "57 Series Test-II"]],
  [
    "Thu",
    ["31", "21"],
    ["28", "39 Second CC Meeting"],
    ["26", "58 International Conference"],
  ],
  ["Fri", [""], ["29", "40"], ["27", "59 International Conference"]],
  ["Sat", ["", "", true], ["30", "", true], ["28", "", true]],
  ["Sun", [""], [""], ["29", "", true]],
  ["Mon", [""], [""], ["30", "60 Revision"]],
  ["Tue", [""], [""], ["31", "61 Revision"]],
];

const juneToAugust: Row[] = [
  ["Wed", ["1", "62 Third CC meeting/Revision"], [""], [""]],
  ["Thu", ["2", "63"], [""], [""]],
  [
    "Fri",
    ["3", "64 Publish IA marks/Revision, Technical Talk."],
    ["1"],
    [""],
  ],
  [
    "Sat",
    ["4", "65.Class Ends.Publish attendance", true],
    ["2", "", true],
    [""],
  ],
  ["Sun", ["5", "", true], ["3", "", true], [""]],
  ["Mon", ["6"], ["4"], [""]],
  ["Tue", ["7"], ["5"], [""]],
  ["Wed", ["8"], ["6"], [""]],
  ["Thu", ["9"], ["7"], [""]],
  ["Fri", ["10"], ["8"], [""]],
  ["Sat", ["11", "", true], ["9", "", true], [""]],
  ["Sun", ["12", "", true], ["10", "", true], [""]],
  ["Mon", ["13"], ["11"], [""]],
  ["Tue", ["14"], ["12"], [""]],
  [
    "Wed",
    ["15", "Commencement of End semester Examination"],
    ["13"],
    [""],
  ],
  ["Thu", ["16"], ["14"], [""]],
  ["Fri", ["17"], ["15"], [""]],
  ["Sat", ["18", "", true], ["16", "", true], [""]],
  ["Sun", ["19", "", true], ["17", "", true], [""]],
  ["Mon", ["20"], ["18"], [""]],
  ["Tue", ["21"], ["19"], [""]],
  ["Wed", ["22"], ["20"], [""]],
  ["Thu", ["23"], ["21"], [""]],
  ["Fri", ["24"], ["22"], [""]],
  ["Sat", ["25", "", true], ["23", "", true], [""]],
  ["Sun", ["26", "", true], ["24", "", true], [""]],
  ["Mon", ["27"], ["25"], [""]],
  ["Tue", ["28"], ["26"], [""]],
  ["Wed", ["29"], ["27"], [""]],
  ["Thu", ["30"], ["28"], [""]],
  ["Fri", [""], ["29"], [""]],
  ["", [""], ["30"], [""]],
  ["", [""], ["31"], [""]],
];

const OFF_CLASS = "bg-gold-500/20";
const CELL_BASE = "border-t border-slate-200 px-3 py-2.5 align-middle";

function CalendarTable({
  label,
  months,
  rows,
}: {
  label: string;
  months: [string, string, string];
  rows: Row[];
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
      <table className="w-full min-w-[960px] border-collapse text-sm">
        <caption className="sr-only">{label}</caption>
        <thead>
          <tr className="bg-navy-950 text-white">
            <th className="w-16 px-3 py-3 text-left font-semibold">Day</th>
            {months.map((month) => (
              <th
                key={month}
                colSpan={2}
                className="border-l border-white/20 px-3 py-3 text-center font-semibold"
              >
                {month}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(([day, ...cells], rowIndex) => {
            const isWeekend = day === "Sat" || day === "Sun";

            return (
              <tr key={rowIndex} className="bg-white">
                <td
                  className={`${CELL_BASE} w-16 text-center font-semibold text-navy-950 ${
                    isWeekend ? OFF_CLASS : ""
                  }`}
                >
                  {day}
                </td>
                {cells.map(([date, note = "", off = false], cellIndex) => (
                  <Fragment key={cellIndex}>
                    <td
                      className={`${CELL_BASE} w-16 border-l border-slate-300 text-center text-slate-700 ${
                        off ? OFF_CLASS : ""
                      }`}
                    >
                      {date}
                    </td>
                    <td
                      className={`${CELL_BASE} text-center text-slate-700 ${
                        off ? OFF_CLASS : ""
                      }`}
                    >
                      {note}
                    </td>
                  </Fragment>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default function AcademicCalendarPage() {
  return (
    <>
      <SiteHeader />

      {/* Page Title Banner */}
      <section className="relative isolate overflow-hidden bg-navy-950 py-16 sm:py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/95 to-navy-950/80" />
        <div className="relative mx-auto max-w-7xl px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-400">
            Computer Science and Engineering
          </p>
          <h1 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Academic Calendar 2021-22
          </h1>
          <div className="mt-6 h-1 w-16 bg-gold-500" />
        </div>
      </section>

      {/* Page Content */}
      <main className="bg-white">
        {/* Inner Sub-Header Navigation */}
        <InnerHeader />

        <section className="py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-10 border-b border-slate-200 pb-4">
              <h2 className="font-display text-2xl font-bold uppercase text-navy-950 sm:text-3xl">
                Academic Calendar 2021-22
              </h2>
              <div className="mt-3 h-1 w-12 bg-gold-500" />
            </div>

            <p className="mb-6 text-center font-display text-lg font-bold italic text-navy-950">
              Academic Calendar for S8 B.TECH - EVEN Semester - March - August
              2022.
            </p>

            <div className="space-y-10">
              <CalendarTable
                label="Academic calendar, March to May 2022"
                months={["March 2022", "April 2022", "May 2022"]}
                rows={marchToMay}
              />

              <CalendarTable
                label="Academic calendar, June to August 2022"
                months={["June 2022", "July 2022", "August 2022"]}
                rows={juneToAugust}
              />
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}