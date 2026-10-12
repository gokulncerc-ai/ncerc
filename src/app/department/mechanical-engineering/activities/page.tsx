import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../DepartmentNav/page";

const LOCAL_ACTIVITY_BASE = "/images/dpt/mechanical-engineering/activities";
const ROOT_ACTIVITY_BASE = "/images/dpt/mechanical-engineering/activities";

type Activity = {
  title: string;
  subtitle?: string;
  image: string;
  alt: string;
};

const activities: Activity[] = [
  {
    title: "Industrial Visit 17/02/2026",
    subtitle: "Amana Toyota, Mundoor",
    image: `${ROOT_ACTIVITY_BASE}/IV_Visited_Amana_Toyota.png`,
    alt: "Industrial visit to Amana Toyota, Mundoor",
  },
  {
    title: "Industrial Visit for S1 ME student on 19/11/25",
    subtitle: "Steel Industrials Kerala Limited (SILK) Palappuram",
    image: `${ROOT_ACTIVITY_BASE}/IV_Steel_Industrials_Kerala_Ltd.png`,
    alt: "Industrial visit to Steel Industrials Kerala Limited, Palappuram",
  },
  {
    title: "INDUSTRIA MECH SUMMIT 2026",
    image: `${LOCAL_ACTIVITY_BASE}/IMS-2026.jpeg`,
    alt: "Industria Mech Summit 2026",
  },
  {
    title: "WEBINAR ON GERMAN LANGUAGE",
    image: `${LOCAL_ACTIVITY_BASE}/Webinar on German Language.jpeg`,
    alt: "Webinar on German Language",
  },
  {
    title: "TECHNICAL TALK ON THERMAL POWERPLANT",
    image: `${LOCAL_ACTIVITY_BASE}/Technical Talk on Thermal Powerplant.jpeg`,
    alt: "Technical talk on thermal powerplant",
  },
  {
    title: "TECHNICAL TALK ON AERODYNAMICS",
    image: `${LOCAL_ACTIVITY_BASE}/Technical Talk on Aerodynamics.jpeg`,
    alt: "Technical talk on aerodynamics",
  },
  {
    title: "SEMINAR ON LEADERSHIP",
    image: `${LOCAL_ACTIVITY_BASE}/Seminar on Leadership.jpeg`,
    alt: "Seminar on leadership",
  },
  {
    title: "WOMEN’S DAY CELEBRATION 2021-2022",
    image: `${LOCAL_ACTIVITY_BASE}/womens-day-celebration-pic-1.png`,
    alt: "Women's Day celebration 2021-2022, photo 1",
  },
  {
    title: "WOMEN’S DAY CELEBRATION 2021-2022",
    image: `${LOCAL_ACTIVITY_BASE}/womens-day-celebration-pic-2.png`,
    alt: "Women's Day celebration 2021-2022, photo 2",
  },
  {
    title: "WOMEN’S DAY CELEBRATION 2021-2022",
    image: `${LOCAL_ACTIVITY_BASE}/womens-day-celebration-pic-3.png`,
    alt: "Women's Day celebration 2021-2022, photo 3",
  },
];

export const metadata = {
  title: "Department Activities | Mechanical Engineering | NCERC",
  description:
    "Department activities, industrial visits, technical talks, seminars, webinars and events conducted by the Mechanical Engineering department at NCERC.",
};

export default function ActivitiesPage() {
  return (
    <>
      <SiteHeader />
      <section className="relative isolate overflow-hidden bg-[#20235A]">
        {/* Hero Background Image */}
        <div className="absolute inset-0 -z-20">
          <Image
            src="/images/dpt/mechanical-engineering/hero-bg.jpg" // Ensure your image is located at public/images/dpt/mechanical-engineering/hero-bg.jpg
            alt="Mechanical Engineering Industrial Operations"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-20 filter contrast-125 grayscale"
          />
        </div>

        {/* Gradient Overlay for Readability */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#20235A]/95 via-[#20235A]/90 to-[#15183f]/95" />

        {/* Decorative circles */}
        <div className="pointer-events-none absolute -right-28 -top-28 h-96 w-96 rounded-full border border-[#D2B87C]/25" />
        <div className="pointer-events-none absolute -right-8 -top-8 h-64 w-64 rounded-full border border-[#D2B87C]/15" />
        <div className="pointer-events-none absolute bottom-[-140px] left-[10%] h-80 w-80 rounded-full border border-white/10" />

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-16 sm:px-8 sm:pb-24 sm:pt-20 lg:px-10 lg:pb-28 lg:pt-24">
          <div className="grid items-end gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="mb-7 flex items-center gap-4">
                <span className="h-px w-12 bg-[#D2B87C]" />

                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D2B87C]">
                  Mechanical Engineering
                </p>
              </div>

              <h1 className="max-w-4xl font-display text-[43px] font-semibold leading-[0.98] tracking-[-0.03em] text-white sm:text-[58px] lg:text-[64px] xl:text-[74px]">
                Department
                <span className="block text-[#D2B87C]">Activities.</span>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                A record of industrial visits, technical sessions, seminars,
                webinars and student-focused activities across the department.
              </p>
            </div>

            {/* Hero visual */}
            <div className="hidden justify-end lg:flex">
              <div className="relative h-64 w-64">
                <div className="absolute inset-0 rounded-full border border-[#D2B87C]/40" />
                <div className="absolute inset-8 rounded-full border border-[#D2B87C]/20" />

                <div className="absolute inset-0 flex items-center justify-center text-center">
                  <div>
                    <span className="block font-display text-6xl font-semibold text-white">
                      {activities.length}
                    </span>

                    <span className="mt-2 block text-xs font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                      Activities
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 h-px w-full bg-white/10" />

          <div className="mt-6 flex flex-wrap items-center gap-x-10 gap-y-3 text-sm text-white/60">
            <span>Industrial Visits</span>
            <span className="h-1 w-1 rounded-full bg-[#D2B87C]" />
            <span>Technical Talks</span>
            <span className="h-1 w-1 rounded-full bg-[#D2B87C]" />
            <span>Seminars</span>
            <span className="h-1 w-1 rounded-full bg-[#D2B87C]" />
            <span>Webinars</span>
          </div>
        </div>
      </section>

      <main className="bg-[#FAF7F2]">
        <InnerHeader />

        {/* =========================================================
            INTRODUCTION
        ========================================================= */}
        <section className="px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8F7746]">
                  Department Activities
                </p>

                <h2 className="mt-5 max-w-md font-display text-4xl font-semibold leading-tight tracking-[-0.025em] text-[#20235A] sm:text-5xl">
                  Learning beyond the classroom.
                </h2>

                <div className="mt-8 h-px w-20 bg-[#D2B87C]" />

                <p className="mt-7 max-w-md text-sm leading-7 text-[#1E1917]/60">
                  Department activities provide opportunities for students to
                  connect academic learning with industry exposure, technical
                  discussions and professional development.
                </p>
              </div>

              <div className="text-[15px] leading-8 text-[#1E1917]/70">
                <div className="flex gap-6">
                  <span className="shrink-0 pt-1 font-display text-xl font-semibold text-[#8F7746]">
                    01
                  </span>

                  <p>
                    Industrial visits expose students to real-world
                    engineering environments and help connect classroom
                    concepts with industrial practices.
                  </p>
                </div>

                <div className="mt-8 flex gap-6 border-t border-[#20235A]/10 pt-8">
                  <span className="shrink-0 pt-1 font-display text-xl font-semibold text-[#8F7746]">
                    02
                  </span>

                  <p>
                    Technical talks, seminars and webinars provide additional
                    opportunities for students to explore specialized subjects
                    and current areas of interest.
                  </p>
                </div>

                <div className="mt-8 flex gap-6 border-t border-[#20235A]/10 pt-8">
                  <span className="shrink-0 pt-1 font-display text-xl font-semibold text-[#8F7746]">
                    03
                  </span>

                  <p>
                    Department events also create spaces for communication,
                    interaction and broader student participation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            FEATURED ACTIVITIES
        ========================================================= */}
        <section className="bg-white px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-7 border-b border-[#20235A]/10 pb-8 lg:flex-row lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8F7746]">
                  Recent activities
                </p>

                <h2 className="mt-4 font-display text-4xl font-semibold text-[#20235A] sm:text-5xl">
                  From industry to insight.
                </h2>
              </div>

              <p className="max-w-md text-sm leading-7 text-[#1E1917]/55">
                Explore selected activities conducted by the Mechanical
                Engineering department.
              </p>
            </div>

            {/* Featured first two activities */}
            <div className="mt-14 grid gap-8 lg:grid-cols-2">
              {activities.slice(0, 2).map((activity, index) => (
                <article key={`${activity.image}-${index}`} className="group">
                  <div className="relative">
                    <div className="absolute -bottom-4 -right-4 h-full w-full border border-[#D2B87C] transition duration-500 group-hover:-bottom-5 group-hover:-right-5" />

                    <div className="relative aspect-[16/10] overflow-hidden bg-[#F2EFE8]">
                      <Image
                        src={encodeURI(activity.image)}
                        alt={activity.alt}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover transition duration-700 group-hover:scale-[1.03]"
                      />

                      <div className="absolute left-5 top-5 bg-[#20235A] px-4 py-2">
                        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D2B87C]">
                          Industrial Visit
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-8">
                    <span className="text-xs font-semibold tracking-[0.18em] text-[#8F7746]">
                      0{index + 1}
                    </span>

                    <h3 className="mt-3 max-w-xl font-display text-2xl font-semibold leading-tight text-[#20235A] sm:text-3xl">
                      {activity.title}
                    </h3>

                    {activity.subtitle && (
                      <p className="mt-3 text-sm font-medium leading-6 text-[#1E1917]/55">
                        {activity.subtitle}
                      </p>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            ACTIVITY ARCHIVE
        ========================================================= */}
        <section className="bg-[#F2EFE8] px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8F7746]">
                Activity archive
              </p>

              <h2 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-[-0.025em] text-[#20235A] sm:text-5xl">
                Conversations, competitions and celebrations.
              </h2>

              <p className="mt-6 text-sm leading-7 text-[#1E1917]/60">
                A visual record of technical and co-curricular activities
                conducted by the department.
              </p>
            </div>

            {/* Editorial gallery */}
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-12">
              {activities.slice(2).map((activity, index) => {
                const isLarge = index === 0 || index === 3;

                return (
                  <article
                    key={`${activity.image}-${index}`}
                    className={`group ${
                      isLarge
                        ? "lg:col-span-7"
                        : "lg:col-span-5"
                    }`}
                  >
                    <div
                      className={`relative overflow-hidden bg-[#DDD8CC] ${
                        isLarge
                          ? "aspect-[16/10]"
                          : "aspect-[4/3]"
                      }`}
                    >
                      <Image
                        src={encodeURI(activity.image)}
                        alt={activity.alt}
                        fill
                        sizes={
                          isLarge
                            ? "(min-width: 1024px) 58vw, 100vw"
                            : "(min-width: 1024px) 42vw, 100vw"
                        }
                        className="object-cover transition duration-700 group-hover:scale-[1.04]"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#20235A]/75 via-transparent to-transparent opacity-70 transition duration-500 group-hover:opacity-90" />

                      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
                        <div className="flex items-end justify-between gap-6">
                          <div>
                            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D2B87C]">
                              Activity {String(index + 3).padStart(2, "0")}
                            </span>

                            <h3 className="mt-2 max-w-xl font-display text-xl font-semibold leading-tight text-white sm:text-2xl">
                              {activity.title}
                            </h3>

                            {activity.subtitle && (
                              <p className="mt-2 text-sm text-white/70">
                                {activity.subtitle}
                              </p>
                            )}
                          </div>

                          <span className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/30 text-white transition group-hover:border-[#D2B87C] group-hover:text-[#D2B87C] sm:flex">
                            →
                          </span>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================
            ACTIVITY CATEGORIES
        ========================================================= */}
        <section className="bg-[#20235A] px-6 py-20 text-white sm:px-8 sm:py-24 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
              <div>
                <span className="block h-px w-12 bg-[#D2B87C]" />

                <p className="mt-7 text-xs font-semibold uppercase tracking-[0.25em] text-[#D2B87C]">
                  Beyond the timetable
                </p>

                <h2 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-[-0.025em] sm:text-5xl">
                  Experiences that complement engineering education.
                </h2>
              </div>

              <div className="grid gap-px border-l border-t border-white/10 bg-white/10 sm:grid-cols-2">
                <div className="bg-[#20235A] p-7">
                  <span className="text-xs font-semibold tracking-[0.2em] text-[#D2B87C]">
                    01
                  </span>

                  <h3 className="mt-8 font-display text-2xl font-semibold">
                    Industrial Exposure
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/55">
                    Visits to industrial organizations give students exposure
                    to professional engineering environments.
                  </p>
                </div>

                <div className="bg-[#20235A] p-7">
                  <span className="text-xs font-semibold tracking-[0.2em] text-[#D2B87C]">
                    02
                  </span>

                  <h3 className="mt-8 font-display text-2xl font-semibold">
                    Technical Sessions
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/55">
                    Talks and seminars allow students to explore technical
                    subjects beyond their regular curriculum.
                  </p>
                </div>

                <div className="bg-[#20235A] p-7">
                  <span className="text-xs font-semibold tracking-[0.2em] text-[#D2B87C]">
                    03
                  </span>

                  <h3 className="mt-8 font-display text-2xl font-semibold">
                    Knowledge Exchange
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/55">
                    Webinars and expert sessions create opportunities for
                    students to engage with new perspectives.
                  </p>
                </div>

                <div className="bg-[#20235A] p-7">
                  <span className="text-xs font-semibold tracking-[0.2em] text-[#D2B87C]">
                    04
                  </span>

                  <h3 className="mt-8 font-display text-2xl font-semibold">
                    Student Participation
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/55">
                    Department events encourage participation and broader
                    student involvement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            WOMEN'S DAY FEATURE
        ========================================================= */}
        <section className="bg-[#FAF7F2] px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8F7746]">
                  Featured archive
                </p>

                <h2 className="mt-5 font-display text-4xl font-semibold leading-tight text-[#20235A] sm:text-5xl">
                  Women’s Day Celebration
                  <span className="block text-[#8F7746]">2021–2022</span>
                </h2>

                <p className="mt-7 text-sm leading-7 text-[#1E1917]/60">
                  A visual record from the department activity archive,
                  preserved as part of the Mechanical Engineering department&apos;s
                  events and celebrations.
                </p>

                <div className="mt-8 flex items-center gap-4">
                  <span className="h-px w-12 bg-[#D2B87C]" />

                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                    Activity archive
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={encodeURI(activities[7].image)}
                    alt={activities[7].alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover"
                  />
                </div>

                <div className="mt-10 relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={encodeURI(activities[8].image)}
                    alt={activities[8].alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 ml-auto max-w-[48%] sm:max-w-[40%]">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={encodeURI(activities[9].image)}
                  alt={activities[9].alt}
                  fill
                  sizes="(min-width: 1024px) 30vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            STATEMENT
        ========================================================= */}
        <section className="relative overflow-hidden bg-[#20235A] px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border border-[#D2B87C]/20" />

          <div className="pointer-events-none absolute -right-12 -top-12 h-56 w-56 rounded-full border border-[#D2B87C]/10" />

          <div className="relative mx-auto max-w-5xl text-center">
            <span className="mx-auto block h-px w-12 bg-[#D2B87C]" />

            <p className="mt-8 font-display text-4xl font-semibold leading-tight tracking-[-0.025em] text-white sm:text-5xl lg:text-6xl">
              Engineering education becomes stronger when learning extends
              beyond the classroom.
            </p>

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.25em] text-[#D2B87C]">
              Exposure • Interaction • Experience
            </p>
          </div>
        </section>

        {/* =========================================================
            FINAL CTA
        ========================================================= */}
        <section className="bg-[#FAF7F2] px-6 py-20 sm:px-8 sm:py-24 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col items-start justify-between gap-8 border-t border-[#20235A]/15 pt-10 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8F7746]">
                  Mechanical Engineering
                </p>

                <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold leading-tight text-[#20235A] sm:text-4xl">
                  Explore the facilities and spaces that support department
                  activities.
                </h2>
              </div>

              <Link
                href="/department/mechanical-engineering/facilities"
                className="inline-flex shrink-0 items-center gap-4 border border-[#20235A] px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#20235A] transition hover:bg-[#20235A] hover:text-white"
              >
                Back to Facilities
                <span className="text-lg leading-none">→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}