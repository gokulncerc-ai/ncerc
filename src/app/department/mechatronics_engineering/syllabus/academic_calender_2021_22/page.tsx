import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import DepartmentNavigation from "../../DepartmentsNavigation/DepartmentsNavigation";
import React from "react";
import {
    ArrowUpRight,
    CalendarDays,
    Clock3,
} from "lucide-react";

type CalendarEvent = {
    date: number;
    event: string;
};

type MonthColumn = {
    name: string;
    year: number;
    days: number;
    events: CalendarEvent[];
};

const march: MonthColumn = {
    name: "March",
    year: 2022,
    days: 31,
    events: [
        { date: 3, event: "Commencement of Classes" },
        { date: 14, event: "First CC Meeting S8 B.Tech" },
        { date: 15, event: "Completion of Module I" },
        { date: 16, event: "Course selection/mapping begins" },
        { date: 18, event: "Course selection/mapping ends" },
        { date: 28, event: "Completion of Module II" },
    ],
};

const april: MonthColumn = {
    name: "April",
    year: 2022,
    days: 30,
    events: [
        { date: 5, event: "Seminar on Role of automation in industries" },
        {
            date: 9,
            event: "Technical talk on Recent trends in wireless networks",
        },
        { date: 26, event: "Project Review" },
        { date: 27, event: "Completion of Module III Series Test-I" },
        { date: 28, event: "Series Test-I" },
        { date: 29, event: "Project Review" },
    ],
};

const may: MonthColumn = {
    name: "May",
    year: 2022,
    days: 31,
    events: [
        { date: 16, event: "Workshop on CAD/CAMM" },
        { date: 17, event: "Exam registration begins" },
        { date: 19, event: "Project Submission" },
        { date: 20, event: "Completion of Module VI" },
        { date: 21, event: "Exam registration ends" },
        { date: 23, event: "Completion of Module IV" },
        { date: 25, event: "Series Test-II" },
        { date: 26, event: "International Conference" },
        { date: 27, event: "International Conference" },
        { date: 28, event: "Second CC Meeting" },
        { date: 30, event: "Revision" },
        { date: 31, event: "Revision" },
    ],
};

const june: MonthColumn = {
    name: "June",
    year: 2022,
    days: 30,
    events: [
        { date: 1, event: "Third CC meeting / Revision" },
        {
            date: 2,
            event: "Revision, Seminar on Computer Organisation",
        },
        { date: 3, event: "Publish IA marks / Revision" },
        { date: 4, event: "Class Ends. Publish attendance" },
        {
            date: 15,
            event: "Commencement of End semester Examination",
        },
    ],
};

const july: MonthColumn = {
    name: "July",
    year: 2022,
    days: 31,
    events: [],
};

const august: MonthColumn = {
    name: "August",
    year: 2022,
    days: 31,
    events: [],
};

const getEvent = (
    month: MonthColumn,
    date: number
): string | undefined => {
    return month.events.find((event) => event.date === date)?.event;
};

const getDayName = (
    date: number,
    month: number,
    year: number
) => {
    return new Date(year, month, date).toLocaleDateString("en-US", {
        weekday: "short",
    });
};

const CalendarGroup = ({
    months,
}: {
    months: MonthColumn[];
}) => {
    const maxDays = Math.max(...months.map((month) => month.days));

    return (
        <div className="overflow-hidden border border-[#20235A]/10 bg-white">
            {/* Group Header */}
            <div className="flex flex-col justify-between gap-3 border-b border-[#20235A]/10 bg-[#20235A] px-6 py-5 sm:flex-row sm:items-end sm:px-8">
                <div>
                    <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                        Academic Calendar
                    </p>

                    <h3 className="font-serif text-2xl text-white sm:text-3xl">
                        {months.map((month) => month.name).join("  /  ")}
                    </h3>
                </div>

                <span className="text-xs uppercase tracking-[0.16em] text-white/40">
                    {months[0].year}
                </span>
            </div>

            {/* Horizontal Scroll Container */}
            <div className="overflow-x-auto">
                <table className="w-full min-w-[1250px] border-collapse">
                    <thead>
                        {/* Month names */}
                        <tr className="border-b border-[#20235A]/10 bg-[#F2EFE8]">
                            <th
                                rowSpan={2}
                                className="sticky left-0 z-20 w-[115px] min-w-[115px] border-r border-[#20235A]/10 bg-[#F2EFE8] px-5 py-4 text-left text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]"
                            >
                                Day
                            </th>

                            {months.map((month) => (
                                <th
                                    key={month.name}
                                    colSpan={2}
                                    className="border-r border-[#20235A]/10 px-5 py-4 text-center last:border-r-0"
                                >
                                    <span className="font-serif text-xl text-[#20235A]">
                                        {month.name}
                                    </span>

                                    <span className="ml-2 text-[10px] uppercase tracking-[0.15em] text-[#8F7746]">
                                        {month.year}
                                    </span>
                                </th>
                            ))}
                        </tr>

                        {/* Column labels */}
                        <tr className="border-b border-[#20235A]/10 bg-white">
                            {months.map((month) => (
                                <React.Fragment key={`${month.name}-headers`}>
                                    <th className="w-[80px] min-w-[80px] border-r border-[#20235A]/10 px-3 py-3 text-center text-[9px] font-semibold uppercase tracking-[0.16em] text-[#8F7746]">
                                        Date
                                    </th>

                                    <th className="min-w-[260px] border-r border-[#20235A]/10 px-4 py-3 text-left text-[9px] font-semibold uppercase tracking-[0.16em] text-[#8F7746] last:border-r-0">
                                        Academic Activity
                                    </th>
                                </React.Fragment>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                        {Array.from({ length: maxDays }, (_, index) => {
                            const date = index + 1;

                            return (
                                <tr
                                    key={date}
                                    className="border-b border-[#20235A]/[0.07] last:border-b-0 hover:bg-[#FAF7F2]"
                                >
                                    {/* Day */}
                                    <td className="sticky left-0 z-10 border-r border-[#20235A]/10 bg-white px-5 py-4 align-top">
                                        {months.map((month) => {
                                            if (date > month.days) return null;

                                            return (
                                                <div
                                                    key={month.name}
                                                    className="flex items-center gap-2"
                                                >
                                                    <span className="font-serif text-base text-[#20235A]">
                                                        {getDayName(
                                                            date,
                                                            months.indexOf(month) +
                                                            (month.name === "March"
                                                                ? 2
                                                                : month.name === "April"
                                                                    ? 3
                                                                    : month.name === "May"
                                                                        ? 4
                                                                        : month.name === "June"
                                                                            ? 5
                                                                            : month.name === "July"
                                                                                ? 6
                                                                                : 7),
                                                            month.year
                                                        )}
                                                    </span>
                                                </div>
                                            );
                                        })}
                                    </td>

                                    {/* Month columns */}
                                    {months.map((month) => {
                                        if (date > month.days) {
                                            return (
                                                <React.Fragment key={month.name}>
                                                    <td className="border-r border-[#20235A]/10 bg-[#FAF7F2]/40 px-3 py-4">
                                                        <span className="text-sm text-[#1E1917]/10">
                                                            —
                                                        </span>
                                                    </td>

                                                    <td className="border-r border-[#20235A]/10 bg-[#FAF7F2]/40 px-4 py-4 last:border-r-0">
                                                        <span className="text-sm text-[#1E1917]/10">
                                                            —
                                                        </span>
                                                    </td>
                                                </React.Fragment>
                                            );
                                        }

                                        const event = getEvent(month, date);

                                        const monthNumber =
                                            month.name === "March"
                                                ? 2
                                                : month.name === "April"
                                                    ? 3
                                                    : month.name === "May"
                                                        ? 4
                                                        : month.name === "June"
                                                            ? 5
                                                            : month.name === "July"
                                                                ? 6
                                                                : 7;

                                        const dayName = getDayName(
                                            date,
                                            monthNumber,
                                            month.year
                                        );

                                        const isSunday = dayName === "Sun";

                                        return (
                                            <React.Fragment key={month.name}>
                                                {/* Date */}
                                                <td
                                                    className={`border-r border-[#20235A]/10 px-3 py-4 text-center align-top ${isSunday
                                                            ? "bg-[#FAF7F2]"
                                                            : "bg-white"
                                                        }`}
                                                >
                                                    <span
                                                        className={`font-serif text-base ${isSunday
                                                                ? "text-[#8F7746]"
                                                                : "text-[#20235A]"
                                                            }`}
                                                    >
                                                        {String(date).padStart(2, "0")}
                                                    </span>
                                                </td>

                                                {/* Activity */}
                                                <td
                                                    className={`border-r border-[#20235A]/10 px-4 py-4 align-top last:border-r-0 ${event
                                                            ? "bg-[#FAF7F2]/80"
                                                            : isSunday
                                                                ? "bg-[#FAF7F2]"
                                                                : "bg-white"
                                                        }`}
                                                >
                                                    {event ? (
                                                        <div className="flex items-start gap-3">
                                                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D2B87C]" />

                                                            <span className="text-[13px] leading-6 text-[#20235A]">
                                                                {event}
                                                            </span>
                                                        </div>
                                                    ) : (
                                                        <span className="text-sm text-[#1E1917]/15">
                                                            —
                                                        </span>
                                                    )}
                                                </td>
                                            </React.Fragment>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const page = () => {
    return (
        <>
            <SiteHeader />

            <main className="bg-[#FAF7F2] text-[#1E1917]">
                {/* =========================================================
            HERO
        ========================================================= */}
                <section className="relative overflow-hidden bg-[#20235A]">
                    <div className="pointer-events-none absolute inset-0">
                        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-[#D2B87C]/10" />

                        <div className="absolute -right-16 -top-16 h-[320px] w-[320px] rounded-full border border-[#D2B87C]/10" />

                        <div className="absolute bottom-[-180px] left-[-140px] h-[400px] w-[400px] rounded-full border border-white/5" />
                    </div>

                    <div className="relative mx-auto max-w-[1400px] px-6 pb-16 pt-20 sm:px-8 sm:pb-20 sm:pt-24 lg:px-12 lg:pb-24 lg:pt-28 xl:px-16">
                        <div className="mb-14 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.18em] text-white/45 sm:mb-16">
                            <span>Mechatronics Engineering</span>

                            <span className="text-[#D2B87C]">/</span>

                            <span className="text-white/75">
                                Academic Calendar
                            </span>
                        </div>

                        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
                            <div>
                                <div className="mb-7 flex items-center gap-3">
                                    <span className="h-px w-10 bg-[#D2B87C]" />

                                    <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                        Academic Schedule
                                    </span>
                                </div>

                                <h1 className="font-serif text-[3.1rem] font-medium leading-[1.02] tracking-[-0.035em] text-white sm:text-[4.5rem] lg:text-[5.3rem] xl:text-[5.8rem]">
                                    Academic
                                    <br />
                                    <span className="text-[#D2B87C]">
                                        Calendar.
                                    </span>
                                </h1>
                            </div>

                            <div className="max-w-md lg:ml-auto">
                                <div className="mb-5 flex h-12 w-12 items-center justify-center border border-[#D2B87C]/30 text-[#D2B87C]">
                                    <CalendarDays
                                        size={21}
                                        strokeWidth={1.5}
                                    />
                                </div>

                                <p className="text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
                                    Academic Calendar for S8 B.Tech — Even Semester,
                                    March to August 2022.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================
            DEPARTMENT NAVIGATION
        ========================================================= */}
                <DepartmentNavigation />

                {/* =========================================================
            INFO STRIP
        ========================================================= */}
                <section className="border-b border-[#20235A]/10 bg-white">
                    <div className="mx-auto grid max-w-[1400px] sm:grid-cols-3">
                        <div className="border-b border-[#20235A]/10 px-6 py-7 sm:border-b-0 sm:border-r sm:px-8 lg:px-12 xl:px-16">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                Semester
                            </p>

                            <p className="mt-2 font-serif text-xl text-[#20235A]">
                                S8 B.Tech
                            </p>
                        </div>

                        <div className="border-b border-[#20235A]/10 px-6 py-7 sm:border-b-0 sm:border-r sm:px-8 lg:px-12 xl:px-16">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                Semester Type
                            </p>

                            <p className="mt-2 font-serif text-xl text-[#20235A]">
                                Even Semester
                            </p>
                        </div>

                        <div className="px-6 py-7 sm:px-8 lg:px-12 xl:px-16">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                Academic Period
                            </p>

                            <p className="mt-2 font-serif text-xl text-[#20235A]">
                                March — August 2022
                            </p>
                        </div>
                    </div>
                </section>

                {/* =========================================================
            INTRO
        ========================================================= */}
                <section className="bg-[#FAF7F2] py-20 sm:py-24 lg:py-32">
                    <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16">
                        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
                            <div>
                                <div className="flex items-center gap-3">
                                    <span className="h-px w-10 bg-[#D2B87C]" />

                                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                        Academic Planning
                                    </span>
                                </div>
                            </div>

                            <div>
                                <h2 className="max-w-4xl font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-[#20235A] sm:text-5xl lg:text-[3.7rem]">
                                    A structured academic journey,
                                    <br />
                                    <span className="text-[#8F7746]">
                                        month by month.
                                    </span>
                                </h2>

                                <div className="mt-8 max-w-3xl space-y-6 text-[15px] leading-8 text-[#1E1917]/70 sm:text-base sm:leading-[1.95]">
                                    <p>
                                        The Academic Calendar provides the schedule of
                                        academic activities for the S8 B.Tech Even Semester
                                        of the Mechatronics Engineering programme.
                                    </p>

                                    <p>
                                        Students can use this calendar to keep track of
                                        classes, module completion, series tests, project
                                        reviews, academic meetings, registration deadlines,
                                        seminars, conferences and semester examinations.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================
            FULL WIDTH CALENDAR
        ========================================================= */}
                <section className="border-t border-[#20235A]/10 bg-white py-20 sm:py-24 lg:py-32">
                    <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-10 xl:px-12">
                        <div className="mb-12 flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
                            <div>
                                <div className="mb-5 flex items-center gap-3">
                                    <span className="h-px w-10 bg-[#D2B87C]" />

                                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                        S8 B.Tech — Even Semester
                                    </span>
                                </div>

                                <h2 className="font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-[#20235A] sm:text-5xl lg:text-[3.7rem]">
                                    March — August
                                    <br />
                                    <span className="text-[#8F7746]">
                                        2022.
                                    </span>
                                </h2>
                            </div>

                            <div className="max-w-md border-l border-[#20235A]/15 pl-6 sm:pl-8">
                                <p className="text-sm leading-7 text-[#1E1917]/60 sm:text-base">
                                    The calendar is presented as a wide academic schedule.
                                    Scroll horizontally on smaller screens to view all
                                    columns.
                                </p>
                            </div>
                        </div>

                        {/* Legend */}
                        <div className="mb-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-y border-[#20235A]/10 py-5">
                            <div className="flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-[#D2B87C]" />

                                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                                    Scheduled Activity
                                </span>
                            </div>

                            <div className="flex items-center gap-2">
                                <Clock3
                                    size={14}
                                    strokeWidth={1.5}
                                    className="text-[#8F7746]"
                                />

                                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                                    Academic Event
                                </span>
                            </div>
                        </div>

                        {/* =====================================================
                MARCH - MAY
            ===================================================== */}
                        <div className="mb-16">
                            <div className="mb-6 flex items-end justify-between gap-6">
                                <div>
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                        Part I
                                    </p>

                                    <h3 className="mt-2 font-serif text-2xl text-[#20235A] sm:text-3xl">
                                        March — May
                                    </h3>
                                </div>

                                <span className="hidden text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1E1917]/35 sm:block">
                                    03 Months
                                </span>
                            </div>

                            <CalendarGroup
                                months={[march, april, may]}
                            />
                        </div>

                        {/* =====================================================
                JUNE - AUGUST
            ===================================================== */}
                        <div>
                            <div className="mb-6 flex items-end justify-between gap-6">
                                <div>
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                        Part II
                                    </p>

                                    <h3 className="mt-2 font-serif text-2xl text-[#20235A] sm:text-3xl">
                                        June — August
                                    </h3>
                                </div>

                                <span className="hidden text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1E1917]/35 sm:block">
                                    03 Months
                                </span>
                            </div>

                            <CalendarGroup
                                months={[june, july, august]}
                            />
                        </div>
                    </div>
                </section>

                {/* =========================================================
            ACADEMIC HIGHLIGHTS
        ========================================================= */}
                <section className="bg-[#F2EFE8] py-20 sm:py-24 lg:py-28">
                    <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16">
                        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
                            <div>
                                <div className="mb-5 flex items-center gap-3">
                                    <span className="h-px w-10 bg-[#D2B87C]" />

                                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                        Academic Highlights
                                    </span>
                                </div>

                                <h2 className="font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-[#20235A] sm:text-5xl">
                                    Key academic
                                    <br />
                                    <span className="text-[#8F7746]">
                                        milestones.
                                    </span>
                                </h2>
                            </div>

                            <div className="grid gap-px border border-[#20235A]/10 bg-[#20235A]/10 sm:grid-cols-2">
                                <div className="bg-white p-7 sm:p-8">
                                    <p className="font-serif text-3xl text-[#D2B87C]">
                                        01
                                    </p>

                                    <h3 className="mt-5 font-serif text-xl text-[#20235A]">
                                        Course Planning
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-[#1E1917]/60">
                                        Course selection and mapping are included in the
                                        scheduled academic activities.
                                    </p>
                                </div>

                                <div className="bg-white p-7 sm:p-8">
                                    <p className="font-serif text-3xl text-[#D2B87C]">
                                        02
                                    </p>

                                    <h3 className="mt-5 font-serif text-xl text-[#20235A]">
                                        Series Tests
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-[#1E1917]/60">
                                        Series tests and academic evaluations form part of
                                        the semester schedule.
                                    </p>
                                </div>

                                <div className="bg-white p-7 sm:p-8">
                                    <p className="font-serif text-3xl text-[#D2B87C]">
                                        03
                                    </p>

                                    <h3 className="mt-5 font-serif text-xl text-[#20235A]">
                                        Project Work
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-[#1E1917]/60">
                                        Project reviews and submission are incorporated into
                                        the final semester academic plan.
                                    </p>
                                </div>

                                <div className="bg-white p-7 sm:p-8">
                                    <p className="font-serif text-3xl text-[#D2B87C]">
                                        04
                                    </p>

                                    <h3 className="mt-5 font-serif text-xl text-[#20235A]">
                                        End Semester Examination
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-[#1E1917]/60">
                                        The end semester examination commences according to
                                        the academic schedule.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================
            CTA
        ========================================================= */}
                <section className="bg-[#20235A]">
                    <div className="mx-auto max-w-[1400px] px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16">
                        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
                            <div>
                                <div className="mb-6 flex items-center gap-3">
                                    <span className="h-px w-10 bg-[#D2B87C]" />

                                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                                        Academic Resources
                                    </span>
                                </div>

                                <h2 className="max-w-3xl font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-white sm:text-5xl lg:text-6xl">
                                    Plan your semester
                                    <br />
                                    <span className="text-[#D2B87C]">
                                        with clarity.
                                    </span>
                                </h2>

                                <p className="mt-6 max-w-2xl text-base leading-8 text-white/60">
                                    Use the academic calendar together with the syllabus
                                    handbook to understand the academic structure and
                                    schedule of the Mechatronics Engineering programme.
                                </p>
                            </div>

                            <a
                                href="/mechatronics-engineering/syllabus-hand-book"
                                className="group inline-flex w-fit items-center gap-3 border border-[#D2B87C]/50 px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#D2B87C] hover:text-[#20235A]"
                            >
                                View Syllabus Handbook

                                <ArrowUpRight
                                    size={17}
                                    strokeWidth={1.5}
                                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                />
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <FooterSection />
        </>
    );
};

export default page;