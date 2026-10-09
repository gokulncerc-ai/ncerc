import Image from "next/image";
import Link from "next/link";
import { MonitorPlay, Presentation, Wifi, Users } from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../../DepartmentNav/page";

const SMART_ROOM_IMAGE =
  "/images/dpt/mechanical-engineering/facilities/smartclassroom/smartclassroom.png";

const smartRoomPoints = [
  "Besides traditional classrooms with a blackboard, few of the classrooms in the department are equipped with Interactive panel and internet connectivity.",
  "Faculty regularly uses presentations and videos as teaching tools and encourages interactive learning among the students.",
  "Department also organizes guest lectures for the students as a part of interactive learning.",
];

const smartRoomFeatures = [
  {
    number: "01",
    icon: MonitorPlay,
    title: "Interactive Panels",
    description:
      "Selected classrooms are equipped with interactive panels that support a more engaging and technology-enabled teaching environment.",
  },
  {
    number: "02",
    icon: Presentation,
    title: "Visual Learning",
    description:
      "Faculty regularly uses presentations and videos as teaching tools to make classroom learning more interactive.",
  },
  {
    number: "03",
    icon: Wifi,
    title: "Connected Classrooms",
    description:
      "Internet connectivity supports digital teaching resources and enables faculty to integrate online material into classroom sessions.",
  },
  {
    number: "04",
    icon: Users,
    title: "Interactive Learning",
    description:
      "The department encourages interaction among students and supplements classroom learning with guest lectures.",
  },
];

export const metadata = {
  title: "Smart Class Room | Mechanical Engineering | NCERC",
  description:
    "Smart classroom facilities and interactive teaching environment of the Mechanical Engineering department at NCERC.",
};

export default function SmartRoomPage() {
  return (
    <>
      <SiteHeader />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative isolate overflow-hidden bg-[#20235A]">
        {/* Decorative circles */}
        <div className="pointer-events-none absolute -right-28 -top-28 h-96 w-96 rounded-full border border-[#D2B87C]/25" />
        <div className="pointer-events-none absolute -right-8 -top-8 h-64 w-64 rounded-full border border-[#D2B87C]/15" />
        <div className="pointer-events-none absolute bottom-[-140px] left-[10%] h-80 w-80 rounded-full border border-white/10" />

        <div className="absolute inset-0 bg-gradient-to-br from-[#20235A] via-[#20235A] to-[#15183f]" />

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
                Smart Class
                <span className="block text-[#D2B87C]">Room.</span>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                Technology-enabled classrooms that bring presentations,
                interactive teaching and digital learning together.
              </p>
            </div>

            {/* Hero visual */}
            <div className="hidden justify-end lg:flex">
              <div className="relative h-64 w-64">
                <div className="absolute inset-0 rounded-full border border-[#D2B87C]/40" />
                <div className="absolute inset-8 rounded-full border border-[#D2B87C]/20" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MonitorPlay
                      size={42}
                      strokeWidth={1.25}
                      className="mx-auto text-[#D2B87C]"
                    />

                    <span className="mt-5 block text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
                      Interactive
                    </span>

                    <span className="mt-1 block text-xs uppercase tracking-[0.22em] text-[#D2B87C]">
                      Learning
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 h-px w-full bg-white/10" />

          <div className="mt-6 flex flex-wrap items-center gap-x-10 gap-y-3 text-sm text-white/60">
            <span>Interactive Teaching</span>
            <span className="h-1 w-1 rounded-full bg-[#D2B87C]" />
            <span>Digital Content</span>
            <span className="h-1 w-1 rounded-full bg-[#D2B87C]" />
            <span>Internet Connectivity</span>
            <span className="h-1 w-1 rounded-full bg-[#D2B87C]" />
            <span>Guest Lectures</span>
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
                  Smart Learning Environment
                </p>

                <h2 className="mt-5 max-w-md font-display text-4xl font-semibold leading-tight tracking-[-0.025em] text-[#20235A] sm:text-5xl">
                  Where technology meets the classroom.
                </h2>

                <div className="mt-8 h-px w-20 bg-[#D2B87C]" />

                <p className="mt-7 max-w-md text-sm leading-7 text-[#1E1917]/60">
                  The department combines traditional classroom teaching with
                  interactive digital tools to create a more engaging learning
                  experience for students.
                </p>
              </div>

              <div className="text-[15px] leading-8 text-[#1E1917]/70">
                {smartRoomPoints.map((point, index) => (
                  <div
                    key={point}
                    className={`flex gap-6 ${
                      index > 0
                        ? "mt-8 border-t border-[#20235A]/10 pt-8"
                        : ""
                    }`}
                  >
                    <span className="shrink-0 pt-1 font-display text-xl font-semibold text-[#8F7746]">
                      0{index + 1}
                    </span>

                    <p>{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            FEATURE IMAGE
        ========================================================= */}
        <section className="bg-white px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
              {/* Image */}
              <div className="relative">
                <div className="absolute -bottom-5 -right-5 h-full w-full border border-[#D2B87C] sm:-bottom-7 sm:-right-7" />

                <div className="relative aspect-[4/3] overflow-hidden bg-[#F2EFE8]">
                  <Image
                    src={SMART_ROOM_IMAGE}
                    alt="Interactive teaching using smart interactive panel"
                    fill
                    sizes="(min-width: 1024px) 60vw, 100vw"
                    className="object-cover transition duration-700 hover:scale-[1.02]"
                  />
                </div>

                <div className="absolute bottom-0 left-0 bg-[#20235A] px-5 py-4 sm:px-7 sm:py-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
                    Smart Interactive Panel
                  </p>
                </div>
              </div>

              {/* Content */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8F7746]">
                  Interactive Teaching
                </p>

                <h2 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-[-0.025em] text-[#20235A] sm:text-5xl">
                  A classroom designed to keep students engaged.
                </h2>

                <p className="mt-7 text-[15px] leading-8 text-[#1E1917]/65">
                  Besides traditional classrooms with a blackboard, few of the
                  classrooms in the department are equipped with Interactive
                  panel and internet connectivity.
                </p>

                <p className="mt-5 text-[15px] leading-8 text-[#1E1917]/65">
                  Faculty regularly uses presentations and videos as teaching
                  tools and encourages interactive learning among the students.
                </p>

                <div className="mt-9 flex items-center gap-4">
                  <span className="h-px w-12 bg-[#D2B87C]" />

                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                    Technology enabled
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            FEATURES
        ========================================================= */}
        <section className="bg-[#F2EFE8] px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8F7746]">
                Learning features
              </p>

              <h2 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-[-0.025em] text-[#20235A] sm:text-5xl">
                Technology that supports teaching.
              </h2>
            </div>

            <div className="mt-14 grid gap-px overflow-hidden border border-[#20235A]/10 bg-[#20235A]/10 sm:grid-cols-2 lg:grid-cols-4">
              {smartRoomFeatures.map((feature) => {
                const Icon = feature.icon;

                return (
                  <article
                    key={feature.number}
                    className="group bg-[#FAF7F2] p-7 transition duration-300 hover:bg-[#20235A]"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold tracking-[0.2em] text-[#8F7746] group-hover:text-[#D2B87C]">
                        {feature.number}
                      </span>

                      <Icon
                        size={22}
                        strokeWidth={1.5}
                        className="text-[#20235A] transition group-hover:text-[#D2B87C]"
                      />
                    </div>

                    <h3 className="mt-10 font-display text-2xl font-semibold text-[#20235A] group-hover:text-white">
                      {feature.title}
                    </h3>

                    <p className="mt-5 text-sm leading-7 text-[#1E1917]/60 group-hover:text-white/65">
                      {feature.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================
            GUEST LECTURES
        ========================================================= */}
        <section className="bg-[#20235A] px-6 py-20 text-white sm:px-8 sm:py-24 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
              <div>
                <span className="block h-px w-12 bg-[#D2B87C]" />

                <p className="mt-7 text-xs font-semibold uppercase tracking-[0.25em] text-[#D2B87C]">
                  Beyond the classroom
                </p>

                <h2 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-[-0.025em] sm:text-5xl">
                  Learning continues through interaction.
                </h2>
              </div>

              <div className="flex items-center">
                <div>
                  <p className="text-base leading-8 text-white/65 sm:text-lg">
                    The department also organizes guest lectures for the
                    students as a part of interactive learning. These
                    activities complement classroom teaching and create
                    opportunities for students to engage with additional
                    perspectives.
                  </p>

                  <div className="mt-9 grid gap-5 sm:grid-cols-2">
                    <div className="border-l border-[#D2B87C]/60 pl-5">
                      <p className="text-sm font-semibold text-white">
                        Guest Lectures
                      </p>
                      <p className="mt-2 text-sm leading-6 text-white/50">
                        Interactive sessions supporting student learning.
                      </p>
                    </div>

                    <div className="border-l border-[#D2B87C]/60 pl-5">
                      <p className="text-sm font-semibold text-white">
                        Student Interaction
                      </p>
                      <p className="mt-2 text-sm leading-6 text-white/50">
                        Opportunities for discussion and engagement.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            IMAGE DETAIL / SECONDARY PRESENTATION
        ========================================================= */}
        <section className="bg-[#FAF7F2] px-6 py-20 sm:px-8 sm:py-24 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-10 border-t border-[#20235A]/15 pt-10 md:grid-cols-[1fr_auto]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8F7746]">
                  Mechanical Engineering Facilities
                </p>

                <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold leading-tight text-[#20235A] sm:text-4xl">
                  An environment where engineering concepts become more
                  visual, interactive and connected.
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