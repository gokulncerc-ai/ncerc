import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BookOpen,
  Building2,
  FlaskConical,
  Landmark,
  Monitor,
  Users,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../DepartmentNav/DepartmentNav";

interface FacilityCard {
  title: string;
  description: string;
  href: string;
  icon: React.ElementType;
  number: string;
}

const facilityCards: FacilityCard[] = [
  {
    number: "01",
    title: "Laboratories",
    description:
      "Dedicated practical learning environments where students develop technical skills through experiments, testing and hands-on engineering work.",
    href: "/department/mechanical-engineering/facilities/labs",
    icon: FlaskConical,
  },
  {
    number: "02",
    title: "Class Rooms",
    description:
      "Comfortable academic spaces designed to support focused learning, interaction and effective delivery of mechanical engineering concepts.",
    href: "/department/mechanical-engineering/facilities/class-room",
    icon: Users,
  },
  {
    number: "03",
    title: "Seminar Halls",
    description:
      "Professional spaces for seminars, workshops, technical presentations, expert sessions and collaborative academic activities.",
    href: "/department/mechanical-engineering/facilities/seminar-hall",
    icon: Landmark,
  },
  {
    number: "04",
    title: "Library",
    description:
      "A learning resource environment supporting students with academic references, engineering literature and opportunities for independent study.",
    href: "/department/mechanical-engineering/facilities/library",
    icon: BookOpen,
  },
  {
    number: "05",
    title: "Smart Rooms",
    description:
      "Technology-enabled classrooms that integrate modern teaching tools to create a more engaging and contemporary learning experience.",
    href: "/department/mechanical-engineering/facilities/smart-room",
    icon: Monitor,
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
      {children}
    </p>
  );
}

function FacilityCardItem({ facility }: { facility: FacilityCard }) {
  const Icon = facility.icon;

  return (
    <Link
      href={facility.href}
      className="group relative block overflow-hidden border border-[#E2DCD2] bg-white transition-all duration-500 hover:-translate-y-1 hover:border-[#D2B87C] hover:shadow-[0_20px_50px_rgba(32,35,90,0.09)]"
    >
      {/* Decorative number */}
      <div className="absolute right-5 top-4 font-serif text-5xl leading-none text-[#D2B87C]/20 transition-colors duration-300 group-hover:text-[#D2B87C]/40">
        {facility.number}
      </div>

      <div className="relative p-7 sm:p-8 lg:p-9">
        {/* Icon */}
        <div className="flex h-14 w-14 items-center justify-center border border-[#D2B87C] bg-[#FAF7F2] text-[#8F7746] transition-all duration-300 group-hover:bg-[#20235A] group-hover:text-[#D2B87C]">
          <Icon size={24} strokeWidth={1.6} />
        </div>

        {/* Heading */}
        <h3 className="mt-8 font-serif text-2xl font-semibold text-[#20235A] transition-colors duration-300 group-hover:text-[#8F7746] sm:text-[27px]">
          {facility.title}
        </h3>

        <div className="mt-4 h-px w-12 bg-[#D2B87C] transition-all duration-500 group-hover:w-20" />

        {/* Description */}
        <p className="mt-5 max-w-lg text-[15px] leading-7 text-[#625D57]">
          {facility.description}
        </p>

        {/* Link */}
        <div className="mt-7 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#20235A] transition-colors duration-300 group-hover:text-[#8F7746]">
          Explore facility
          <ArrowRight
            size={16}
            strokeWidth={1.8}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#D2B87C] transition-all duration-500 group-hover:w-full" />
    </Link>
  );
}

export default function FacilitiesPage() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-[#FAF7F2] text-[#1E1917]">
        {/* =========================================================
            HERO
        ========================================================= */}
        <section className="relative isolate overflow-hidden bg-[#20235A]">
          {/* Decorative circles */}
          <div className="absolute -right-32 -top-32 h-[430px] w-[430px] rounded-full border border-[#D2B87C]/15" />
          <div className="absolute -right-16 top-12 h-[300px] w-[300px] rounded-full border border-[#D2B87C]/10" />
          <div className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full border border-white/5" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-14 sm:px-8 sm:py-16 lg:grid-cols-[1fr_0.85fr] lg:gap-16 lg:px-10 lg:py-20 xl:py-24">
            {/* Hero text */}
            <div className="relative z-10 max-w-2xl">
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-10 bg-[#D2B87C]" />

                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D2B87C]">
                  Mechanical Engineering
                </p>
              </div>

              <h1 className="font-serif text-[43px] font-medium leading-[1.04] tracking-[-0.025em] text-white sm:text-[58px] lg:text-[64px] xl:text-[74px]">
                Facilities
                <br />
                <span className="italic text-[#D2B87C]">
                  that enable.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-8 text-white/70 sm:text-[17px]">
                Explore the academic spaces, practical laboratories and
                technology-enabled environments that support learning in the
                Department of Mechanical Engineering.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  href="#facilities"
                  className="inline-flex h-12 items-center gap-3 bg-[#D2B87C] px-6 text-sm font-semibold text-[#20235A] transition-all duration-300 hover:bg-white"
                >
                  Explore Facilities
                  <ArrowRight size={17} />
                </Link>

                <Link
                  href="#department-environment"
                  className="inline-flex h-12 items-center gap-2 border border-white/25 px-6 text-sm font-medium text-white transition-all duration-300 hover:border-[#D2B87C] hover:text-[#D2B87C]"
                >
                  Our Learning Environment
                </Link>
              </div>
            </div>

            {/* Hero image */}
            <div className="relative mx-auto w-full max-w-[560px] lg:ml-auto">
              {/* Gold offset frame */}
              <div className="absolute -bottom-5 -left-5 h-full w-full border border-[#D2B87C]/60" />

              <div className="relative aspect-[4/4.2] overflow-hidden bg-[#F2EFE8]">
                <Image
                  src="/images/dpt/mechanical-engineering/facilities/smartclassroom/smartclassroom.png"
                  alt="Mechanical Engineering facilities at NCERC"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#20235A]/60 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                    NCERC
                  </p>

                  <p className="mt-1 font-serif text-xl text-white sm:text-2xl">
                    Mechanical Engineering
                  </p>
                </div>
              </div>

              {/* Floating label */}
              <div className="absolute -right-4 top-8 hidden border border-[#D2B87C]/50 bg-[#20235A] px-5 py-4 sm:block">
                <Building2
                  size={20}
                  strokeWidth={1.5}
                  className="text-[#D2B87C]"
                />

                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/50">
                  Learning Spaces
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Department navigation */}
        <InnerHeader />

        {/* =========================================================
            INTRODUCTION
        ========================================================= */}
        <section
          id="department-environment"
          className="border-b border-[#E5DED3] bg-white"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20 lg:px-10 lg:py-24">
            {/* Left */}
            <div>
              <SectionLabel>Department Environment</SectionLabel>

              <h2 className="max-w-md font-serif text-3xl font-semibold leading-tight text-[#20235A] sm:text-4xl lg:text-[45px]">
                Spaces designed for
                <span className="italic text-[#8F7746]">
                  {" "}
                  learning.
                </span>
              </h2>
            </div>

            {/* Right */}
            <div className="max-w-3xl">
              <div className="mb-7 h-px w-16 bg-[#D2B87C]" />

              <p className="text-[16px] leading-8 text-[#514B46] sm:text-[17px]">
                The Department of Mechanical Engineering provides a range of
                academic and supporting facilities designed to complement
                classroom learning with practical exposure, collaboration and
                technology-enabled education.
              </p>

              <p className="mt-5 text-[16px] leading-8 text-[#514B46] sm:text-[17px]">
                From laboratories and smart classrooms to seminar halls and
                library resources, each facility contributes to a learning
                environment where students can develop their technical
                knowledge and engineering capabilities.
              </p>

              <div className="mt-9 grid gap-5 sm:grid-cols-3">
                <div className="border-l-2 border-[#D2B87C] pl-4">
                  <FlaskConical
                    size={20}
                    strokeWidth={1.6}
                    className="text-[#8F7746]"
                  />

                  <p className="mt-3 font-serif text-lg text-[#20235A]">
                    Practical
                  </p>

                  <p className="mt-1 text-sm leading-6 text-[#716B65]">
                    Hands-on engineering learning
                  </p>
                </div>

                <div className="border-l-2 border-[#D2B87C] pl-4">
                  <Monitor
                    size={20}
                    strokeWidth={1.6}
                    className="text-[#8F7746]"
                  />

                  <p className="mt-3 font-serif text-lg text-[#20235A]">
                    Connected
                  </p>

                  <p className="mt-1 text-sm leading-6 text-[#716B65]">
                    Technology-enabled spaces
                  </p>
                </div>

                <div className="border-l-2 border-[#D2B87C] pl-4">
                  <BookOpen
                    size={20}
                    strokeWidth={1.6}
                    className="text-[#8F7746]"
                  />

                  <p className="mt-3 font-serif text-lg text-[#20235A]">
                    Academic
                  </p>

                  <p className="mt-1 text-sm leading-6 text-[#716B65]">
                    Resources for continuous learning
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            FACILITIES GRID
        ========================================================= */}
        <section
          id="facilities"
          className="bg-[#FAF7F2] px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24"
        >
          <div className="mx-auto max-w-7xl">
            {/* Section heading */}
            <div className="mb-14 flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
              <div>
                <SectionLabel>Explore Our Facilities</SectionLabel>

                <h2 className="font-serif text-3xl font-semibold leading-tight text-[#20235A] sm:text-4xl lg:text-[46px]">
                  Infrastructure for
                  <br />
                  <span className="italic text-[#8F7746]">
                    engineering education.
                  </span>
                </h2>
              </div>

              <div className="max-w-sm">
                <p className="text-sm leading-7 text-[#716B65]">
                  Select a facility to explore its dedicated page and discover
                  how it supports the academic experience of Mechanical
                  Engineering students.
                </p>
              </div>
            </div>

            {/* Asymmetric grid */}
            <div className="grid gap-5 lg:grid-cols-2">
              {facilityCards.map((facility, index) => (
                <div
                  key={facility.title}
                  className={
                    index === 4
                      ? "lg:col-span-2 lg:max-w-[calc(50%-10px)]"
                      : ""
                  }
                >
                  <FacilityCardItem facility={facility} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            DARK STATEMENT SECTION
        ========================================================= */}
        <section className="relative overflow-hidden bg-[#20235A] px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="absolute -right-28 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full border border-[#D2B87C]/15" />
          <div className="absolute -right-5 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full border border-[#D2B87C]/10" />
          <div className="absolute -bottom-32 -left-20 h-64 w-64 rounded-full border border-white/5" />

          <div className="relative mx-auto max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div>
                <SectionLabel>Beyond the Classroom</SectionLabel>

                <h2 className="font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-[48px]">
                  Learn by
                  <span className="italic text-[#D2B87C]">
                    {" "}
                    doing.
                  </span>
                </h2>
              </div>

              <div className="max-w-3xl">
                <p className="text-base leading-8 text-white/70 sm:text-lg">
                  Engineering education becomes meaningful when theoretical
                  concepts can be explored through practical experience.
                  NCERC&apos;s facilities provide spaces where students can
                  interact with equipment, technology, learning resources and
                  peers as they develop into confident engineers.
                </p>

                <div className="mt-8 flex items-center gap-4">
                  <span className="h-px w-16 bg-[#D2B87C]" />
                  <span className="text-xs uppercase tracking-[0.18em] text-white/40">
                    Mechanical Engineering
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            CLOSING CTA
        ========================================================= */}
        <section className="bg-[#F2EFE8] px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="relative overflow-hidden bg-white px-7 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-16">
              <div className="absolute right-[-70px] top-[-70px] h-52 w-52 rounded-full border border-[#D2B87C]/30" />
              <div className="absolute bottom-[-100px] left-[-60px] h-52 w-52 rounded-full border border-[#20235A]/5" />

              <div className="relative flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
                <div className="max-w-2xl">
                  <SectionLabel>Mechanical Engineering</SectionLabel>

                  <h2 className="font-serif text-3xl font-semibold leading-tight text-[#20235A] sm:text-4xl lg:text-[45px]">
                    Discover the spaces
                    <br />
                    behind the
                    <span className="italic text-[#8F7746]">
                      {" "}
                      experience.
                    </span>
                  </h2>

                  <p className="mt-5 max-w-xl text-sm leading-7 text-[#716B65] sm:text-base">
                    Explore the Mechanical Engineering department and discover
                    its academic programmes, faculty, activities and learning
                    opportunities.
                  </p>
                </div>

                <Link
                  href="/department/mechanical-engineering"
                  className="inline-flex h-12 shrink-0 items-center justify-center gap-3 bg-[#20235A] px-6 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#D2B87C] hover:text-[#20235A]"
                >
                  Explore Department
                  <ArrowRight size={17} />
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