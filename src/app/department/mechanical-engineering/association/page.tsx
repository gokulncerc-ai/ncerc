import Image from "next/image";
import Link from "next/link";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../DepartmentNav/DepartmentNav";

const ASSOCIATION_BASE =
  "/images/dpt/mechanical-engineering/association";

const associationEvents = [
  {
    file: "association-pic-1.png",
    title: "Inaugural Ceremony of Mechanical Association 2022",
    description:
      "The inauguration is done by Dr. P Sridharan (Professor Mechanical Dept. Vimal Jyothi Engineering College, Kannur). Followed by an EXPERT TALK based on MODERN ELECTRIC VEHICLE by Dr. P Sridharan.",
    alt: "Inaugural ceremony of Mechanical Association 2022, photo 1",
  },
  {
    file: "association-pic-2.png",
    title: "Inaugural Ceremony of Mechanical Association 2022",
    description:
      "The inauguration is done by Dr. P Sridharan (Professor Mechanical Dept. Vimal Jyothi Engineering College, Kannur). Followed by an EXPERT TALK based on MODERN ELECTRIC VEHICLE by Dr. P Sridharan.",
    alt: "Inaugural ceremony of Mechanical Association 2022, photo 2",
  },
];

export const metadata = {
  title: "Mechanical Engineering Association | NCERC",
  description:
    "Mechanical Engineering Association activities and events at Nehru College of Engineering and Research Centre.",
  keywords: [
    "Mechanical Engineering Association",
    "NCERC Mechanical Engineering",
    "engineering colleges thrissur",
    "NCERC Thrissur",
    "Nehru College of Engineering",
  ],
};

export default function AssociationPage() {
  return (
    <>
      <SiteHeader />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative isolate overflow-hidden bg-[#20235A]">
        {/* Decorative circles */}
        <div className="pointer-events-none absolute -right-28 top-0 h-[460px] w-[460px] rounded-full border border-[#D2B87C]/20" />
        <div className="pointer-events-none absolute -right-4 top-24 h-[290px] w-[290px] rounded-full border border-[#D2B87C]/15" />
        <div className="pointer-events-none absolute -left-32 bottom-[-180px] h-[400px] w-[400px] rounded-full border border-white/5" />

        <div className="relative mx-auto max-w-[1400px] px-6 py-14 sm:px-8 sm:py-18 lg:px-12 lg:py-20 xl:px-16 xl:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-16 xl:gap-20">
            {/* Hero Content */}
            <div className="relative z-10 max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D2B87C] sm:text-sm">
                Mechanical Engineering
              </p>

              <h1 className="mt-5 max-w-2xl font-display text-[43px] font-semibold leading-[1.03] tracking-[-0.025em] text-white sm:text-[58px] lg:text-[64px] xl:text-[74px]">
                Association
                <span className="block text-[#D2B87C]">
                  connecting minds.
                </span>
              </h1>

              <div className="mt-7 h-px w-20 bg-[#D2B87C]" />

              <p className="mt-7 max-w-xl text-base leading-8 text-white/70 sm:text-lg">
                A platform for interaction, expert knowledge, technical
                discussions, and meaningful academic experiences within
                Mechanical Engineering.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-5">
                <div className="border-l border-[#D2B87C] pl-5">
                  <p className="font-display text-3xl font-semibold text-white sm:text-4xl">
                    01
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-white/55">
                    Featured event
                  </p>
                </div>

                <div className="border-l border-[#D2B87C] pl-5">
                  <p className="font-display text-3xl font-semibold text-white sm:text-4xl">
                    02
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-white/55">
                    Event photographs
                  </p>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative mx-auto w-full max-w-[600px] lg:ml-auto">
              {/* Offset gold frame */}
              <div className="absolute -bottom-4 -left-4 h-full w-full border border-[#D2B87C]" />

              <div className="relative aspect-[4/3] overflow-hidden bg-[#F2EFE8]">
                <Image
                  src={`${ASSOCIATION_BASE}/association-pic-1.png`}
                  alt="Inaugural Ceremony of Mechanical Association 2022"
                  fill
                  priority
                  sizes="(min-width: 1280px) 570px, (min-width: 1024px) 45vw, 100vw"
                  className="object-contain p-5 sm:p-8"
                />

                {/* Image caption */}
                <div className="absolute bottom-0 left-0 bg-[#20235A] px-5 py-4 sm:px-7">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                    Mechanical Association
                  </p>

                  <p className="mt-1 font-display text-sm text-white sm:text-base">
                    Inaugural Ceremony 2022
                  </p>
                </div>
              </div>

              <div className="absolute -right-3 -top-3 h-16 w-16 rounded-full border border-[#D2B87C]/50" />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}
      <main className="bg-[#FAF7F2]">
        <InnerHeader />

        {/* Introduction */}
        <section className="border-b border-[#E0D9CF] bg-[#FAF7F2] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746] sm:text-sm">
                  Department Association
                </p>

                <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                  A space for engineering ideas to meet.
                </h2>

                <div className="mt-6 h-px w-16 bg-[#D2B87C]" />
              </div>

              <div className="max-w-2xl lg:pt-8">
                <p className="text-base leading-8 text-[#5F5A55] sm:text-lg">
                  The Mechanical Engineering Association provides a platform
                  for students and faculty to engage with experts, explore
                  emerging technologies, and participate in meaningful
                  technical activities.
                </p>

                <div className="mt-9 grid gap-6 sm:grid-cols-3">
                  <div className="border-t border-[#D2B87C] pt-4">
                    <p className="font-display text-xl font-semibold text-[#20235A]">
                      Interaction
                    </p>

                    <p className="mt-2 text-sm leading-6 text-[#77716A]">
                      Connecting students with engineering professionals.
                    </p>
                  </div>

                  <div className="border-t border-[#D2B87C] pt-4">
                    <p className="font-display text-xl font-semibold text-[#20235A]">
                      Expertise
                    </p>

                    <p className="mt-2 text-sm leading-6 text-[#77716A]">
                      Learning through expert talks and discussions.
                    </p>
                  </div>

                  <div className="border-t border-[#D2B87C] pt-4">
                    <p className="font-display text-xl font-semibold text-[#20235A]">
                      Exposure
                    </p>

                    <p className="mt-2 text-sm leading-6 text-[#77716A]">
                      Exploring emerging engineering technologies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            ASSOCIATION EVENTS
        ========================================================= */}
        <section className="bg-white py-16 sm:py-20 lg:py-28">
          <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
            <div className="flex flex-col gap-6 border-b border-[#DDD7CE] pb-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746] sm:text-sm">
                  Events & Activities
                </p>

                <h2 className="mt-3 font-display text-3xl font-semibold text-[#20235A] sm:text-4xl lg:text-5xl">
                  Association Highlights
                </h2>

                <div className="mt-5 h-px w-16 bg-[#D2B87C]" />
              </div>

              <p className="max-w-md text-sm leading-7 text-[#77716A] lg:text-right">
                Highlights from the Mechanical Engineering Association,
                including its inaugural ceremony and expert interaction.
              </p>
            </div>

            {/* Featured first event */}
            <div className="mt-14 lg:mt-20">
              <article className="grid overflow-hidden border border-[#D8D1C7] bg-[#FAF7F2] lg:grid-cols-[1.1fr_0.9fr]">
                {/* Image */}
                <div className="relative min-h-[330px] bg-[#F2EFE8] sm:min-h-[430px] lg:min-h-[520px]">
                  <div className="absolute inset-5 border border-[#D2B87C]/50 sm:inset-7" />

                  <div className="relative h-full min-h-[330px] p-9 sm:min-h-[430px] sm:p-12 lg:min-h-[520px] lg:p-14">
                    <div className="relative h-full overflow-hidden bg-white">
                      <Image
                        src={`${ASSOCIATION_BASE}/${associationEvents[0].file}`}
                        alt={associationEvents[0].alt}
                        fill
                        sizes="(min-width: 1024px) 55vw, 100vw"
                        className="object-contain p-4 transition-transform duration-700 hover:scale-[1.02] sm:p-7"
                      />
                    </div>
                  </div>

                  <div className="absolute left-5 top-5 bg-[#20235A] px-4 py-2 sm:left-7 sm:top-7">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                      Featured Event
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14 xl:p-16">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                    Mechanical Association · 2022
                  </p>

                  <h3 className="mt-4 font-display text-3xl font-semibold leading-tight text-[#20235A] sm:text-4xl">
                    {associationEvents[0].title}
                  </h3>

                  <div className="mt-6 h-px w-14 bg-[#D2B87C]" />

                  <p className="mt-7 text-base leading-8 text-[#5F5A55]">
                    {associationEvents[0].description}
                  </p>

                  <div className="mt-9 border-l-2 border-[#D2B87C] pl-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                      Expert Talk
                    </p>

                    <p className="mt-2 font-display text-xl font-semibold text-[#20235A]">
                      Modern Electric Vehicle
                    </p>

                    <p className="mt-1 text-sm text-[#77716A]">
                      Dr. P Sridharan
                    </p>
                  </div>
                </div>
              </article>
            </div>

            {/* Second event image */}
            <div className="mt-8 lg:mt-12">
              <article className="grid overflow-hidden border border-[#D8D1C7] bg-white lg:grid-cols-[0.85fr_1.15fr]">
                {/* Content */}
                <div className="order-2 flex flex-col justify-center p-8 sm:p-10 lg:order-1 lg:p-14">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                    Event Documentation
                  </p>

                  <h3 className="mt-4 font-display text-2xl font-semibold leading-tight text-[#20235A] sm:text-3xl">
                    {associationEvents[1].title}
                  </h3>

                  <div className="mt-5 h-px w-12 bg-[#D2B87C]" />

                  <p className="mt-6 text-base leading-8 text-[#5F5A55]">
                    {associationEvents[1].description}
                  </p>

                  <div className="mt-7">
                    <span className="inline-flex border border-[#D2B87C] px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#20235A]">
                      Association Event
                    </span>
                  </div>
                </div>

                {/* Image */}
                <div className="relative order-1 min-h-[300px] bg-[#F2EFE8] sm:min-h-[390px] lg:order-2 lg:min-h-[450px]">
                  <div className="relative h-full min-h-[300px] p-6 sm:min-h-[390px] sm:p-9 lg:min-h-[450px] lg:p-12">
                    <div className="relative h-full overflow-hidden bg-white">
                      <Image
                        src={`${ASSOCIATION_BASE}/${associationEvents[1].file}`}
                        alt={associationEvents[1].alt}
                        fill
                        sizes="(min-width: 1024px) 55vw, 100vw"
                        className="object-contain p-4 transition-transform duration-700 hover:scale-[1.02] sm:p-6"
                      />
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* =========================================================
            DARK STATEMENT
        ========================================================= */}
        <section className="relative isolate overflow-hidden bg-[#20235A] py-20 sm:py-24 lg:py-28">
          <div className="pointer-events-none absolute -right-24 -top-24 h-[380px] w-[380px] rounded-full border border-[#D2B87C]/15" />

          <div className="pointer-events-none absolute right-10 top-12 h-[220px] w-[220px] rounded-full border border-[#D2B87C]/10" />

          <div className="relative mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                  Learning Beyond The Classroom
                </p>

                <div className="mt-6 h-px w-16 bg-[#D2B87C]" />
              </div>

              <div>
                <h2 className="font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                  Technical communities create opportunities to learn,
                  question, and imagine what comes next.
                </h2>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            CLOSING CTA
        ========================================================= */}
        <section className="bg-[#FAF7F2] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
            <div className="relative overflow-hidden bg-white px-7 py-12 ring-1 ring-[#D8D1C7] sm:px-10 sm:py-14 lg:px-16 lg:py-16">
              <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full border border-[#D2B87C]/30" />

              <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div className="max-w-2xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                    Mechanical Engineering
                  </p>

                  <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-[#20235A] sm:text-4xl">
                    Explore the department and its learning environment.
                  </h2>

                  <p className="mt-4 text-base leading-7 text-[#77716A]">
                    Discover the facilities, laboratories, classrooms, and
                    other opportunities that support Mechanical Engineering
                    students at NCERC.
                  </p>
                </div>

                <Link
                  href="/department/mechanical-engineering/facilities"
                  className="inline-flex h-12 items-center justify-center border border-[#20235A] px-7 text-sm font-semibold uppercase tracking-wider text-[#20235A] transition-colors duration-300 hover:bg-[#20235A] hover:text-white"
                >
                  Explore Facilities
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