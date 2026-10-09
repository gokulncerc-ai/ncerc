import Image from "next/image";

import {
  ArrowDownRight,
  ArrowRight,
  CheckCircle2,
  Monitor,
  Wifi,
  Zap,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../../DepartmentNav/page";

export const metadata = {
  title: "Mechanical Engineering Class Rooms | NCERC",
  description:
    "Explore the fully furnished and ICT-enabled classrooms of the Mechanical Engineering Department at Nehru College of Engineering and Research Centre.",
  keywords: [
    "engineering colleges thrissur",
    "engineering colleges in thrissur",
    "private engineering colleges in thrissur",
    "top engineering colleges in thrissur",
    "Nehru College of Engineering and Research Centre thrissur",
    "NCERC thrissur",
    "Nehru College thrissur",
    "Nehru College of Engineering thrissur",
    "mechanical engineering classrooms",
  ],
  robots: { index: true, follow: true },
};

const CLASSROOM_IMAGE_BASE =
  "/images/dpt/mechanical-engineering/class-rooms";

const classroomImages = [
  {
    src: `${CLASSROOM_IMAGE_BASE}/201P.jpg`,
    alt: "Mechanical Engineering classroom 201",
    number: "01",
    label: "Classroom 201",
  },
  {
    src: `${CLASSROOM_IMAGE_BASE}/202P.jpg`,
    alt: "Mechanical Engineering classroom 202",
    number: "02",
    label: "Classroom 202",
  },
  {
    src: `${CLASSROOM_IMAGE_BASE}/203P.jpg`,
    alt: "Mechanical Engineering classroom 203",
    number: "03",
    label: "Classroom 203",
  },
  {
    src: `${CLASSROOM_IMAGE_BASE}/216P.jpg`,
    alt: "Mechanical Engineering classroom 216",
    number: "04",
    label: "Classroom 216",
  },
  {
    src: `${CLASSROOM_IMAGE_BASE}/228P.jpg`,
    alt: "Mechanical Engineering classroom 228",
    number: "05",
    label: "Classroom 228",
  },
];

function FeatureItem({
  icon: Icon,
  number,
  title,
  description,
}: {
  icon: typeof Monitor;
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white p-6 sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <span className="font-display text-3xl font-semibold text-[#D2B87C]">
          {number}
        </span>

        <Icon className="h-6 w-6 text-[#8F7746]" strokeWidth={1.5} />
      </div>

      <h3 className="mt-7 font-display text-xl font-semibold text-[#20235A]">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-[#6C665F]">
        {description}
      </p>
    </div>
  );
}

function ClassroomImage({
  image,
  large = false,
}: {
  image: (typeof classroomImages)[number];
  large?: boolean;
}) {
  return (
    <div className="group relative">
      {/* Offset gold frame */}
      <div className="absolute inset-0 translate-x-3 translate-y-3 border border-[#D2B87C]" />

      <div
        className={`relative overflow-hidden bg-[#F2EFE8] ${
          large ? "aspect-[16/10]" : "aspect-[4/3]"
        }`}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={
            large
              ? "(min-width: 1024px) 65vw, 100vw"
              : "(min-width: 640px) 40vw, 100vw"
          }
          className="object-cover transition duration-700 ease-out group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-[#20235A]/0 transition duration-500 group-hover:bg-[#20235A]/10" />

        <div className="absolute bottom-4 left-4 flex items-center gap-3 bg-white/95 px-4 py-3 shadow-sm">
          <span className="font-display text-sm font-semibold text-[#8F7746]">
            {image.number}
          </span>

          <span className="h-4 w-px bg-[#D8D1C4]" />

          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#20235A]">
            {image.label}
          </span>
        </div>

        <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center bg-[#20235A]/90 text-white opacity-0 transition duration-300 group-hover:opacity-100">
          <ArrowDownRight size={16} />
        </div>
      </div>
    </div>
  );
}

export default function ClassRoomPage() {
  return (
    <>
      <SiteHeader />

      {/* ================================================================ */}
      {/* HERO                                                             */}
      {/* ================================================================ */}

      <section className="relative isolate overflow-hidden bg-[#20235A]">
        {/* Decorative circles */}
        <div className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full border border-white/10 sm:h-[430px] sm:w-[430px]" />

        <div className="pointer-events-none absolute -right-8 top-16 h-56 w-56 rounded-full border border-[#D2B87C]/20 sm:h-72 sm:w-72" />

        <div className="pointer-events-none absolute bottom-[-120px] left-[-100px] h-72 w-72 rounded-full border border-white/[0.06]" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24 xl:py-28">
          <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Hero text */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-4">
                <span className="h-px w-12 bg-[#D2B87C]" />

                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D2B87C]">
                  Mechanical Engineering
                </p>
              </div>

              <h1 className="mt-7 max-w-4xl font-display text-[43px] font-semibold leading-[0.98] tracking-[-0.02em] text-white sm:text-[58px] lg:text-[64px] xl:text-[74px]">
                Classrooms
                <span className="block text-[#D2B87C]">
                  designed to engage.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                Fully furnished, ICT-enabled learning spaces that support
                focused teaching, collaborative learning and modern
                engineering education.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#classrooms"
                  className="inline-flex items-center gap-3 bg-[#D2B87C] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#20235A] transition hover:bg-white"
                >
                  Explore classrooms
                  <ArrowRight size={16} />
                </a>

                <a
                  href="#learning-environment"
                  className="inline-flex items-center gap-3 border border-white/25 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:border-[#D2B87C] hover:text-[#D2B87C]"
                >
                  Learning environment
                </a>
              </div>
            </div>

            {/* Hero statement */}
            <div className="lg:col-span-5">
              <div className="relative ml-auto max-w-md border-l border-[#D2B87C]/50 pl-7 sm:pl-9">
                <p className="font-display text-2xl leading-snug text-white sm:text-3xl">
                  A positive classroom creates the foundation for meaningful
                  learning.
                </p>

                <div className="mt-7 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#D2B87C]" />

                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">
                    Industry Integrated
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department navigation */}
      <InnerHeader />

      <main className="bg-[#FAF7F2]">
        {/* ================================================================ */}
        {/* INTRODUCTION                                                     */}
        {/* ================================================================ */}

        <section
          id="learning-environment"
          className="border-b border-[#D8D1C4]"
        >
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
              {/* Section heading */}
              <div className="lg:col-span-5">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8F7746]">
                  Learning Environment
                </p>

                <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                  Spaces where engineering education comes alive.
                </h2>

                <div className="mt-6 h-px w-20 bg-[#D2B87C]" />
              </div>

              {/* Content */}
              <div className="lg:col-span-7">
                <p className="text-lg leading-9 text-[#4F4A46]">
                  The ideal classroom is a positive place where a student can
                  come to work toward specific goals set before them in the
                  class objectives. The teacher is to be positive, organized,
                  outgoing, confident, and compassionate. The instructor often
                  sets the tone for the entire classroom.
                </p>

                <p className="mt-6 text-[15px] leading-8 text-[#6C665F]">
                  Department of Mechanical Engineering is well equipped with
                  fully furnished ICT enabled classrooms. Each classroom is
                  having WiFi &amp; LAN internet access. Every class is
                  provided with unlimited power supply with a fully functional
                  generator in the college.
                </p>

                {/* Feature grid */}
                <div className="mt-10 grid gap-px overflow-hidden border border-[#D8D1C4] bg-[#D8D1C4] sm:grid-cols-3">
                  <FeatureItem
                    icon={Monitor}
                    number="01"
                    title="ICT Enabled"
                    description="Fully furnished classrooms supported by modern ICT facilities."
                  />

                  <FeatureItem
                    icon={Wifi}
                    number="02"
                    title="Connected"
                    description="WiFi and LAN internet access supports connected learning."
                  />

                  <FeatureItem
                    icon={Zap}
                    number="03"
                    title="Uninterrupted"
                    description="Unlimited power supply with generator support for learning continuity."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* CLASSROOM GALLERY                                                */}
        {/* ================================================================ */}

        <section id="classrooms" className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
            {/* Section heading */}
            <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
              <div className="lg:col-span-7">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8F7746]">
                  Classroom Gallery
                </p>

                <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                  Designed for focused learning.
                </h2>

                <div className="mt-6 h-px w-20 bg-[#D2B87C]" />
              </div>

              <div className="lg:col-span-5">
                <p className="text-[15px] leading-8 text-[#6C665F]">
                  The Mechanical Engineering department provides dedicated
                  classrooms designed to support academic instruction,
                  technology-enabled teaching and student interaction.
                </p>
              </div>
            </div>

            {/* Gallery */}
            <div className="mt-14 sm:mt-16">
              {/* First large image */}
              <div className="mx-auto max-w-5xl">
                <ClassroomImage image={classroomImages[0]} large />
              </div>

              {/* Remaining images */}
              <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:mt-24">
                {classroomImages.slice(1).map((image, index) => (
                  <div
                    key={image.src}
                    className={
                      index === 1
                        ? "sm:translate-y-12"
                        : ""
                    }
                  >
                    <ClassroomImage image={image} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* LEARNING STATEMENT                                               */}
        {/* ================================================================ */}

        <section className="relative overflow-hidden bg-[#20235A]">
          <div className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full border border-white/10" />

          <div className="pointer-events-none absolute bottom-[-140px] left-[-100px] h-80 w-80 rounded-full border border-[#D2B87C]/15" />

          <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
            <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-8">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D2B87C]">
                  The Learning Experience
                </p>

                <h2 className="mt-5 max-w-4xl font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                  A classroom should do more than hold a class.
                </h2>

                <p className="mt-6 max-w-3xl text-[15px] leading-8 text-white/60">
                  It should create an environment where students can engage
                  with their instructors, access technology, collaborate with
                  peers and build the knowledge required for their engineering
                  journey.
                </p>
              </div>

              <div className="lg:col-span-4">
                <div className="border-l border-[#D2B87C]/50 pl-7">
                  <CheckCircle2
                    className="h-7 w-7 text-[#D2B87C]"
                    strokeWidth={1.5}
                  />

                  <p className="mt-5 font-display text-xl leading-snug text-white">
                    Fully furnished.
                    <br />
                    ICT enabled.
                    <br />
                    Connected.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* CLOSING CTA                                                      */}
        {/* ================================================================ */}

        <section className="bg-[#F2EFE8]">
          <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 sm:py-18 lg:px-10 lg:py-20">
            <div className="flex flex-col gap-7 border-t border-[#CFC7B8] pt-8 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8F7746]">
                  Mechanical Engineering Facilities
                </p>

                <h2 className="mt-2 font-display text-2xl font-semibold text-[#20235A] sm:text-3xl">
                  Explore more learning spaces.
                </h2>
              </div>

              <a
                href="/department/mechanical-engineering/facilities"
                className="inline-flex w-fit items-center gap-3 border border-[#20235A] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#20235A] transition hover:bg-[#20235A] hover:text-white"
              >
                All facilities
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}