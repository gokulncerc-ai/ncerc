"use client";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import {
  ArrowDownRight,
  Wrench,
  ArrowUpRight,
  Factory,
  Gauge,
  Settings2,
  TrainFront,
  CalendarDays,
  MapPin,
  Users,
  BatteryCharging,
  CarFront,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,

} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../DepartmentNav/DepartmentNav";

const machines = [
  {
    number: "01",
    title: "Moulding Machine",
    category: "Foundry Equipment",
    description:
      "A moulding machine is used in foundries to prepare moulds by compacting sand around a pattern. It ensures that the mould cavity is strong, accurate, and capable of withstanding the pouring of molten metal during casting.",
    icon: Settings2,
    imageAlt: "Moulding machine",
    image: "/images/department/mechanical-engineering/activities/activity6.webp",
  },
  {
    number: "02",
    title: "Shot Blasting Machine",
    category: "Surface Treatment",
    description:
      "A shot blasting machine is a surface treatment equipment used in industries to clean, strengthen, and prepare metal surfaces by bombarding them with high-velocity abrasive materials (shots). It removes impurities such as rust, scale, and welding slag, leaving the surface smooth and ready for further processing like painting, coating, or galvanizing.",
    icon: Wrench,
    imageAlt: "Shot blasting machine",
    image: "/images/department/mechanical-engineering/activities/activity7.webp",
  },
  {
    number: "03",
    title: "Induction Furnace",
    category: "Metal Melting",
    description:
      "An induction furnace is an electrical furnace used to melt metals using the principle of electromagnetic induction. It provides a clean, energy- efficient, and controlled method of melting steel and other alloys. In industries like SILK, induction furnaces are used for preparing molten steel for casting and fabrication processes.",
    icon: Factory,
    imageAlt: "Induction furnace",
    image:
      "/images/department/mechanical-engineering/activities/activity3.webp",
  },
];

const castingApplications = [
  {
    number: "01",
    title: "Pump Casings",
    description:
      "Cast components that form the outer body of pumps, enclosing and supporting internal parts used in fluid-handling systems.",
    icon: Gauge,
  },
  {
    number: "02",
    title: "Valves",
    description:
      "Cast valve bodies and components used to regulate, control, and direct the flow of liquids and gases in industrial systems.",
    icon: Settings2,
  },
  {
    number: "03",
    title: "Heavy Machine Bases & Housings",
    description:
      "Robust cast structures that support heavy machinery, provide component housings, and help maintain operational stability.",
    icon: Factory,
  },
  {
    number: "04",
    title: "Power Plants & Railways",
    description:
      "Structural and engineering castings used in power-generation facilities and railway applications.",
    icon: TrainFront,
  },
];

const amanaVisitPoints = [
  {
    number: "01",
    title: "Service & Maintenance",
    description:
      "Service Section & maintenance practices",
    icon: Settings2,
  },
  {
    number: "02",
    title: "Body Shop & Repairs",
    description:
      "Body shop operations and repair works",
    icon: Wrench,
  },
  {
    number: "03",
    title: "Driving School & Simulator",
    description:
      "Driving school & experienced advanced driving simulator",
    icon: CarFront,
  },
  {
    number: "04",
    title: "Battery Electric Vehicles",
    description:
      "An expert session on Battery Electric Vehicles (EV)",
    icon: BatteryCharging,
  },
];

const summitPhotos = [
  {
    src: "/images/department/mechanical-engineering/activities/summit1.webp",
    alt: "Industria Mech Summit 2026 - Photograph 1",
  },
  {
    src: "/images/department/mechanical-engineering/activities/summit2.webp",
    alt: "Industria Mech Summit 2026 - Photograph 2",
  },
  {
    src: "/images/department/mechanical-engineering/activities/summit3.webp",
    alt: "Industria Mech Summit 2026 - Photograph 3",
  },
  {
    src: "/images/department/mechanical-engineering/activities/summit4.webp",
    alt: "Industria Mech Summit 2026 - Photograph 4",
  },
  {
    src: "/images/department/mechanical-engineering/activities/summit5.webp",
    alt: "Industria Mech Summit 2026 - Photograph 5",
  },
  {
    src: "/images/department/mechanical-engineering/activities/summit6.webp",
    alt: "Industria Mech Summit 2026 - Photograph 6",
  },
  {
    src: "/images/department/mechanical-engineering/activities/summit7.webp",
    alt: "Industria Mech Summit 2026 - Photograph 7",
  },
  {
    src: "/images/department/mechanical-engineering/activities/summit8.webp",
    alt: "Industria Mech Summit 2026 - Photograph 8",
  },
  {
    src: "/images/department/mechanical-engineering/activities/summit9.webp",
    alt: "Industria Mech Summit 2026 - Photograph 9",
  },
];



function SectionEyebrow({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <div
      className={`mb - 4 flex items - center gap - 3 text - [9px] font - semibold uppercase tracking - [0.22em] ${light ? "text-[#D2B87C]" : "text-[#8F7746]"
        } `}
    >
      <span className="h-px w-8 bg-[#D2B87C]" />
      {children}
    </div>
  );
}

function SectionHeading({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <h2
      className={`font - serif text - [36px] leading - [1.05] tracking - [-0.025em] sm: text - [44px] lg: text - [49px] ${light ? "text-white" : "text-[#20235A]"
        } `}
    >
      {children}
    </h2>
  );
}

export default function ActivitiesPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeLightbox = useCallback(() => {
    setActiveIndex(null);
  }, []);

  const showPrevious = useCallback(() => {
    setActiveIndex((current) =>
      current === null
        ? null
        : (current - 1 + summitPhotos.length) % summitPhotos.length
    );
  }, []);
  const showNext = useCallback(() => {
    setActiveIndex((current) =>
      current === null
        ? null
        : (current + 1) % summitPhotos.length
    );
  }, []);
  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [activeIndex, closeLightbox, showNext, showPrevious]);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#FAF7F2] font-sans text-[#1E1917]">
      <SiteHeader />
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#20235A] text-white">
        <div className="pointer-events-none absolute -right-20 -top-24 h-[340px] w-[340px] rounded-full border border-white/[0.08] sm:h-[480px] sm:w-[480px]" />
        <div className="pointer-events-none absolute -right-8 -top-12 h-[250px] w-[250px] rounded-full border border-[#D2B87C]/20 sm:h-[360px] sm:w-[360px]" />

        <div className="relative mx-auto grid max-w-[1440px] gap-10 px-5 py-14 sm:px-8 sm:py-16 md:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-14 lg:px-16 lg:py-20 xl:px-20 xl:py-24">
          <div>
            <SectionEyebrow light>
              Mechanical Engineering Department
            </SectionEyebrow>

            <h1 className="max-w-[850px] font-serif text-[43px] leading-[0.98] tracking-[-0.035em] text-white sm:text-[55px] lg:text-[67px] xl:text-[75px]">
              Learning beyond
              <br />
              <span className="italic text-[#D2B87C]">the classroom.</span>
            </h1>

            <p className="mt-7 max-w-[600px] text-[14px] leading-7 text-white/75 sm:text-[15px] sm:leading-8">
              Industrial visits connect engineering theory with real
              manufacturing environments, helping students explore production
              processes, industrial machinery and emerging technologies.
            </p>

            <a
              href="#industrial-visits"
              className="mt-8 inline-flex items-center gap-4 border border-[#D2B87C] bg-[#D2B87C] px-5 py-4 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#20235A] transition-colors hover:border-white hover:bg-white"
            >
              Explore Industrial Visits
              <ArrowDownRight size={15} />
            </a>
          </div>

          <div className="border-t border-white/15 pt-6 lg:ml-auto lg:w-full lg:max-w-[390px]">
            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
              Practical Engineering Exposure
            </p>
            <p className="mt-4 font-serif text-[25px] leading-[1.2] text-white sm:text-[29px]">
              From foundry operations to modern automotive technology.
            </p>
            <div className="mt-6 flex items-center gap-3 text-[11px] leading-5 text-white/65">
              <Factory size={17} className="shrink-0 text-[#D2B87C]" />
              Manufacturing, maintenance and industrial practice
            </div>
          </div>
        </div>

        <div className="h-1 w-full bg-[#D2B87C]" />
      </section>

      <InnerHeader />

      <section className="bg-[#FAF7F2]">
        <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 sm:py-16 md:px-10 lg:px-16 lg:py-20 xl:px-20">

          {/* Section Heading */}
          <div className="mb-8 flex flex-col justify-between gap-5 sm:mb-10 sm:flex-row sm:items-end">
            <div>
              <div className="mb-4 flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                <span className="h-px w-8 bg-[#D2B87C]" />
                Mechanical Engineering Department
              </div>

              <h2 className="font-serif text-[38px] leading-[1.05] tracking-[-0.03em] text-[#20235A] sm:text-[48px] lg:text-[56px]">
                Industrial <span className="italic text-[#8F7746]">Visits.</span>
              </h2>
            </div>

            <p className="max-w-[350px] text-[13px] leading-7 text-[#1E1917]/65">
              Exploring real-world engineering practices through industry exposure,
              practical observation and technical learning.
            </p>
          </div>

          {/* Photo Gallery */}
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {/* Visit 01 */}
            <a
              href="#visit-01"
              className="group relative block overflow-hidden bg-[#20235A]"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src="/images/department/mechanical-engineering/activities/activity1.webp"
                  alt="Mechanical Engineering students visiting SILK Palappuram"
                  className="h-full w-full object-cover "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#20235A] via-[#20235A]/20 to-transparent" />

                <span className="absolute left-5 top-5 border border-white/40 bg-[#20235A]/50 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
                  19 Nov 2025
                </span>

                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                    Industrial Visit 01
                  </p>

                  <h3 className="font-serif text-[27px] leading-tight text-white sm:text-[30px]">
                    Steel Industrials Kerala Limited
                  </h3>

                </div>
              </div>
            </a>

            {/* Visit 02 */}
            <a
              href="#visit-02"
              className="group relative block overflow-hidden bg-[#20235A]"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src="/images/department/mechanical-engineering/activities/activity2.webp"
                  alt="S1 Mechanical Engineering students on an industrial visit to SILK"
                  className="h-full w-full object-contain "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#20235A] via-[#20235A]/20 to-transparent" />
                <span className="absolute left-5 top-5 border border-white/40 bg-[#20235A]/50 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
                  19 Nov 2025
                </span>
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                    Industrial Visit 02
                  </p>
                  <h3 className="font-serif text-[27px] leading-tight text-white sm:text-[30px]">
                    Learning at SILK
                  </h3>
                  <p className="mt-2 text-[12px] text-white/75">
                    S1 Mechanical Engineering
                  </p>
                </div>
              </div>
            </a>

            {/* Visit 03 */}
            <a
              href="#visit-03"
              className="group relative block overflow-hidden bg-[#20235A] md:col-span-2 lg:col-span-1"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src="/images/department/mechanical-engineering/activities/activity3.webp"
                  alt="Mechanical Engineering students visiting Amana Toyota Mundoor"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#20235A] via-[#20235A]/20 to-transparent" />

                <span className="absolute left-5 top-5 border border-white/40 bg-[#20235A]/50 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
                  19 Nov 2025
                </span>

                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                    Industrial Visit 03
                  </p>

                  <h3 className="font-serif text-[27px] leading-tight text-white sm:text-[30px]">
                    Learning at SILK
                  </h3>


                </div>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* SILK INDUSTRIAL VISIT — INTRODUCTION & ACTIVITIES */}
      <section className="bg-[#FAF7F2]">
        <div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 sm:py-14 md:px-10 lg:px-16 lg:py-16 xl:px-20">

          {/* Compact Hero Image */}
          <div className="relative h-[240px] overflow-hidden bg-[#20235A] sm:h-[320px] lg:h-[400px]">
            <img
              src="/images/department/mechanical-engineering/activities/activity4.webp"
              alt="Industrial visit to Steel Industrials Kerala Limited, Palappuram"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#20235A]/80 via-[#20235A]/15 to-transparent" />

            <div className="absolute bottom-0 left-0 p-5 sm:p-8 lg:p-10">
              <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                Mechanical Engineering Department
              </p>

              <h2 className="max-w-[700px] font-serif text-[32px] leading-[1.05] tracking-[-0.025em] text-white sm:text-[42px] lg:text-[52px]">
                Industrial Visit to
                <br />
                <span className="italic text-[#D2B87C]">
                  Steel Industrials Kerala Ltd.
                </span>
              </h2>

              <p className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px] text-white/80 sm:text-[11px]">
                <span>18 September 2025</span>
                <span className="h-1 w-1 rounded-full bg-[#D2B87C]" />
                <span>Palappuram, Palakkad</span>
              </p>
            </div>
          </div>

          {/* Introduction */}
          {/* Introduction */}
          <div className="grid gap-7 border-b border-[#20235A]/10 py-10 sm:py-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12 lg:py-14">

            {/* Image */}
            <div className="relative min-h-[260px] overflow-hidden bg-[#F2EFE8] sm:min-h-[340px] lg:min-h-full">
              <img
                src="/images/department/mechanical-engineering/activities/activity5.webp"
                alt="Industrial operations at Steel Industrials Kerala Limited"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#20235A]/80 to-transparent p-5 sm:p-6">
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                  Industrial Exposure
                </p>
                <p className="mt-2 font-serif text-[22px] leading-tight text-white sm:text-[26px]">
                  Understanding engineering in action.
                </p>
              </div>
            </div>

            {/* Introduction Content */}
            <div>
              <div className="mb-4 flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                <span className="h-px w-8 bg-[#D2B87C]" />
                01 / Overview
              </div>

              <h3 className="font-serif text-[34px] leading-[1.05] tracking-[-0.025em] text-[#20235A] sm:text-[40px]">
                Introduction
              </h3>

              <div className="mt-5 space-y-4">
                <p className="text-[14px] text-justify leading-7 text-[#1E1917]/75 sm:text-[15px] sm:leading-8">
                  As part of our academic enhancement, we visited Steel Industrials Kerala Ltd (SILK), Palappuram Unit, Palakkad on 18th September 2025, Thursday. The visit was organized to provide us with practical exposure to the operations of a large-scale steel industry and to understand the working of various manufacturing processes.
                </p>

                <p className="text-[14px] text-justify leading-7 text-[#1E1917]/75 sm:text-[15px] sm:leading-8">
                  SILK is a government-owned industrial company in Kerala. Established in the 1960s, it is located in Palappuram (near Ottapalam), Palakkad. It is one of the leading engineering public sector companies in Kerala, engaged in the design, manufacture, and supply of various steel and engineering products. It focuses on metal casting, heavy fabrication, machining, and manufacturing activities.
                </p>
              </div>

              {/* Learning Objectives */}
              <div className="mt-6 border-l-2 border-[#D2B87C] bg-white px-5 py-5 sm:px-6">
                <p className="mb-4 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                  Key Learning Objectives
                </p>

                <ul className="space-y-3">
                  {[
                    "Manufacturing processes involved.",
                    "Different machines, tools, and processes used in the industry.",
                    "Practical aspects of steel product manufacturing",
                  ].map((item, index) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[12px] leading-6 text-[#1E1917]/75 sm:text-[13px]"
                    >
                      <span className="mt-0.5 font-serif text-[15px] text-[#8F7746]">
                        0{index + 1}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Activities During the Visit */}
          <div className="grid gap-8 pt-10 sm:pt-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-14 lg:pt-14">
            <div>
              <div className="mb-4 flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                <span className="h-px w-8 bg-[#D2B87C]" />
                02 / Process
              </div>

              <h3 className="font-serif text-[34px] leading-[1.05] tracking-[-0.025em] text-[#20235A] sm:text-[40px]">
                Activities During
                <br />
                the Visit
              </h3>

              <p className="mt-5 max-w-[340px] text-[13px] text-justify leading-7 text-[#1E1917]/65">
                During the visit, we were guided by the company officials who explained the various processes carried out in the unit. The key processes include
              </p>
            </div>

            <div className="divide-y divide-[#20235A]/10 border-y border-[#20235A]/10">
              {[
                {
                  number: "01",
                  title: "Mixture is formed by combining",
                  description:
                    "Silicate, sand and CO2 which is used in the mould. It forms a hard surface which is breakable when the force is applied. Bentonite is mixed along with the sand to increase the strength of the foundry sand.",
                },
                {
                  number: "02",
                  title: "Moulds are made",
                  description:
                    "using the foundry sand and a pattern is prepared in the mould.",
                },
                {
                  number: "03",
                  title: "Scrap metal pieces",
                  description:
                    "are melted in an induction furnance. Temperature is controlled to ensure proper fluidity of molten metal.",
                },
                {
                  number: "04",
                  title: "The molten metal is poured",
                  description:
                    "into the mould cavity. Proper gating and riser systems are used for smooth metal flow. The molten metal solidifies as it cools inside the mould.",
                },
                {
                  number: "05",
                  title: "The mould is placed over",
                  description:
                    "a rectangular box which shakes out excess sand. Along with sand, there are chances of metal particles falling, which is removed using magnets.",
                },
                {
                  number: "06",
                  title: "After solidification, the mould",
                  description:
                    "is broken, and the casting is taken out. It is then placed inside a shot blasting machine, which removes the dust particles and improves surface finish. Hence, the final product is obtained.",
                },
                {
                  number: "07",
                  title: "Exhaust gas is",
                  description:
                    "released after processing through the furnace.",
                },
              ].map((activity) => (
                <article
                  key={activity.number}
                  className="grid gap-3 py-5 sm:grid-cols-[48px_1fr] sm:gap-5 sm:py-6"
                >
                  <span className="font-serif text-[24px] text-[#8F7746]">
                    {activity.number}
                  </span>

                  <div>
                    <h4 className="font-serif text-[21px] leading-tight text-[#20235A] sm:text-[24px]">
                      {activity.title}
                    </h4>

                    <p className="mt-3 text-[13px] leading-7 text-[#1E1917]/70 sm:text-[14px]">
                      {activity.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#FAF7F2] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          {/* Section heading */}
          <div className="mb-12 max-w-3xl sm:mb-16">
            <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
              <span className="h-px w-9 bg-[#D2B87C]" />
              Industrial Visit / Equipment
            </p>

            <h2 className="font-serif text-3xl font-medium leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
              Machines &amp; Tools
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#625E57] sm:text-base sm:leading-8">
              Students explored the machines and equipment used in foundry
              operations, metal melting and surface treatment at Steel
              Industrials Kerala Limited.
            </p>
          </div>

          {/* Zigzag machine details */}
          <div className="space-y-14 sm:space-y-20 lg:space-y-24">
            {machines.map((machine, index) => {
              const Icon = machine.icon;
              const imageOnRight = index % 2 === 1;

              return (
                <article
                  key={machine.number}
                  className="grid items-center gap-7 sm:gap-10 lg:grid-cols-2 lg:gap-16"
                >
                  {/* Photo placeholder */}
                  {/* Machine image */}
                  <div
                    className={`${imageOnRight ? "lg:order-2" : "lg:order-1"
                      }`}
                  >
                    <div className="relative aspect-[5/3] w-full overflow-hidden bg-[#F0ECE3] sm:aspect-[4/3]">
                      <Image
                        src={machine.image}
                        alt={machine.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 hover:scale-105"
                      />

                      <span className="absolute bottom-0 left-0 z-10 h-1 w-20 bg-[#D2B87C]" />
                    </div>
                  </div>

                  {/* Machine description */}
                  <div
                    className={`${imageOnRight ? "lg:order-1" : "lg:order-2"
                      }`}
                  >
                    <div className="mb-5 flex items-center gap-3">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#D2B87C]/70 text-[#8F7746]">
                        <Icon size={20} strokeWidth={1.5} />
                      </span>

                      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                        {machine.category}
                      </span>
                    </div>

                    <p className="mb-3 text-sm font-medium tracking-[0.16em] text-[#9A968E]">
                      {machine.number} / 03
                    </p>

                    <h3 className="font-serif text-2xl font-medium leading-snug text-[#20235A] sm:text-3xl lg:text-4xl">
                      {machine.title}
                    </h3>

                    <div className="my-5 h-px w-16 bg-[#D2B87C]" />

                    <p className="max-w-xl text-sm  text-justify leading-7 text-[#625E57] sm:text-base sm:leading-8">
                      {machine.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <section className="overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          {/* Section heading */}
          <div className="mb-10 grid gap-5 md:mb-14 md:grid-cols-[1fr_0.8fr] md:items-end">
            <div>
              <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                <span className="h-px w-9 bg-[#D2B87C]" />
                Industrial Applications
              </p>

              <h2 className="font-serif text-3xl font-medium leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                Applications of Castings
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-[#625E57] sm:text-base sm:leading-8 md:justify-self-end">
              Casting plays an important role in manufacturing durable
              components for machinery, fluid-control systems, power
              infrastructure, and railway applications.
            </p>
          </div>

          {/* Application cards */}
          <div className="grid gap-px overflow-hidden border border-[#E5DED1] bg-[#E5DED1] sm:grid-cols-2">
            {castingApplications.map((application) => {
              const Icon = application.icon;

              return (
                <article
                  key={application.number}
                  className="group relative flex min-h-[230px] flex-col bg-[#FAF7F2] p-6 transition-colors duration-300 hover:bg-[#F2EFE8] sm:min-h-[255px] sm:p-8 lg:p-10"
                >
                  <div className="mb-8 flex items-start justify-between">
                    <span className="text-xs font-semibold tracking-[0.18em] text-[#9A968E]">
                      {application.number} / 04
                    </span>

                    <span className="flex h-12 w-12 items-center justify-center border border-[#D2B87C]/70 text-[#8F7746] transition-colors duration-300 group-hover:bg-[#20235A] group-hover:text-white">
                      <Icon size={22} strokeWidth={1.4} />
                    </span>
                  </div>

                  <div className="mt-auto">
                    <h3 className="max-w-md font-serif text-xl font-medium leading-snug text-[#20235A] sm:text-2xl">
                      {application.title}
                    </h3>

                    <p className="mt-3 max-w-lg text-sm leading-7 text-[#625E57]">
                      {application.description}
                    </p>

                    <div className="mt-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#8F7746]">
                      Casting Application
                      <ArrowUpRight
                        size={15}
                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </div>
                  </div>

                  <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#D2B87C] transition-all duration-300 group-hover:w-full" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#FAF7F2] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
            {/* Image - Left */}
            <div className="relative">
              <div className="relative aspect-[5/4] overflow-hidden bg-[#F0ECE3] sm:aspect-[4/3]">
                <Image
                  src="/images/department/mechanical-engineering/activities/activity1.webp"
                  alt="Mechanical engineering students during the industrial visit to SILK, Palappuram"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#20235A]/40 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 sm:bottom-7 sm:left-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                    Mechanical Engineering
                  </p>
                  <p className="mt-1 font-serif text-xl text-white sm:text-2xl">
                    Learning Beyond the Classroom
                  </p>
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute -bottom-2 -left-2 -z-0 h-16 w-16 border-b-2 border-l-2 border-[#D2B87C]" />
            </div>

            {/* Conclusion - Right */}
            <div className="py-3 lg:py-8">
              <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                <span className="h-px w-9 bg-[#D2B87C]" />
                Industrial Visit / Summary
              </p>

              <h2 className="font-serif text-3xl font-medium leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                Conclusion
              </h2>

              <div className="my-6 h-px w-16 bg-[#D2B87C]" />

              <p className="text-sm leading-8 text-[#625E57] sm:text-base text-justify sm:leading-9">
                The industrial visit to Steel Industrials Kerala Ltd, Palappuram, was highly informative and beneficial. It provided us with valuable insights into manufacturing processes and industrial practices. Such visits help us to enhance our practical knowledge and prepare us better for future professional challenges.
              </p>

              <div className="mt-8 flex items-center gap-3 border-l-2 border-[#D2B87C] bg-white/70 px-5 py-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#20235A] text-white">
                  <ArrowUpRight size={19} strokeWidth={1.5} />
                </span>

                <p className="text-sm font-medium leading-6 text-[#20235A]">
                  Bridging theoretical knowledge with real-world industrial
                  experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <main className="bg-[#FAF7F2]">
        {/* Hero Image */}
        <section className="px-4 pt-6 sm:px-6 sm:pt-8 lg:px-10 lg:pt-10">
          <div className="mx-auto max-w-7xl">
            <div className="relative aspect-[4/3] overflow-hidden bg-[#F0ECE3] sm:aspect-[16/8] lg:aspect-[16/7]">
              <Image
                src="/images/department/mechanical-engineering/activities/activity8.webp"
                alt="Mechanical Engineering students visiting Amana Toyota, Mundoor"
                fill
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 94vw, 1280px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </section>

        {/* Visit Introduction */}
        <section className="py-14 sm:py-18 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
              <div>
                <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                  <span className="h-px w-9 bg-[#D2B87C]" />
                  Industrial Exposure Programme · 03
                </p>

                <h1 className="font-serif text-3xl font-medium leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                  Exploring the World of
                  <span className="mt-1 block text-[#8F7746]">
                    Modern Automobiles
                  </span>
                </h1>

                <div className="my-6 h-px w-16 bg-[#D2B87C]" />

                <p className="max-w-2xl text-sm leading-8 text-[#625E57] sm:text-base sm:leading-9">
                  S4, S6 & S8 Mechanical Engineering students and all the faculty members visited Amana Toyota, Mundoor as part of an industrial exposure programme.
                </p>
              </div>

              {/* Visit Information */}
              <div className="self-center border-y border-[#DED6C8]">
                <div className="flex items-start gap-4 border-b border-[#DED6C8] py-5 sm:py-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                    <CalendarDays size={20} strokeWidth={1.5} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8F7746]">
                      Date of Visit
                    </p>
                    <p className="mt-2 text-base font-medium text-[#20235A]">
                      17 February 2026
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 border-b border-[#DED6C8] py-5 sm:py-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                    <MapPin size={20} strokeWidth={1.5} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8F7746]">
                      Location
                    </p>
                    <p className="mt-2 text-base font-medium text-[#20235A]">
                      Amana Toyota, Mundoor
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 py-5 sm:py-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                    <Users size={20} strokeWidth={1.5} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8F7746]">
                      Participants
                    </p>
                    <p className="mt-2 text-base font-medium leading-7 text-[#20235A]">
                      S4, S6 & S8 Mechanical Engineering students and all faculty
                      members
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Learning Areas */}
        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="mb-10 max-w-3xl sm:mb-14">
              <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                <span className="h-px w-9 bg-[#D2B87C]" />
                Learning Outcomes
              </p>

              <h2 className="font-serif text-3xl font-medium leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                Key Areas Explored
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-8 text-[#625E57] sm:text-base sm:leading-9">
                During the visit, students gained first-hand exposure to
                important automotive operations and modern vehicle technologies
                through the following activities.
              </p>
            </div>

            <div className="grid gap-px overflow-hidden border border-[#E7E1D6] bg-[#E7E1D6] sm:grid-cols-2">
              {amanaVisitPoints.map((point) => {
                const Icon = point.icon;

                return (
                  <article
                    key={point.number}
                    className="group flex flex-col bg-[#FAF7F2] p-6 transition-colors duration-300 hover:bg-white sm:p-8 lg:p-10"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-4xl text-[#D2B87C]">
                        {point.number}
                      </span>

                      <div className="flex h-12 w-12 items-center justify-center bg-[#20235A] text-[#D2B87C] transition-colors duration-300 group-hover:bg-[#D2B87C] group-hover:text-[#20235A]">
                        <Icon size={23} strokeWidth={1.5} />
                      </div>
                    </div>

                    <h3 className="mt-7 font-serif text-xl font-medium leading-snug text-[#20235A] sm:text-2xl">
                      {point.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-[#625E57] sm:text-base sm:leading-8">
                      {point.description}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#8F7746]">
                      <span className="h-px w-6 bg-[#D2B87C]" />
                      Learning Experience
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="bg-[#20235A] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="grid gap-8 lg:grid-cols-[auto_1fr] lg:gap-12">
              <div className="hidden w-1 bg-[#D2B87C] sm:block" />

              <div>
                <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                  <span className="h-px w-9 bg-[#D2B87C]" />
                  Visit Summary
                </p>

                <h2 className="max-w-3xl font-serif text-3xl font-medium leading-tight text-white sm:text-4xl lg:text-5xl">
                  An Informative & Enriching Experience
                </h2>

                <p className="mt-6 max-w-4xl text-sm leading-8 text-white/75 sm:text-base sm:leading-9">
                  The visit provided valuable real-time industrial insights and practical understanding of modern automobile technology.
                  Overall, it was a very informative and enriching experience for everyone.

                </p>

                <div className="mt-8 flex items-start gap-4 border-t border-white/15 pt-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#D2B87C] text-[#20235A]">
                    <ArrowUpRight size={21} strokeWidth={1.5} />
                  </span>

                  <p className="max-w-2xl text-sm leading-7 text-white/90 sm:text-base sm:leading-8">
                    Bridging theoretical knowledge with real-world automotive
                    technologies and professional industry practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* --------summit details---------- */}
      <section
        id="industria-mech-summit"
        className="overflow-hidden bg-[#FAF7F2] py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          {/* Section Heading */}
          <div className="mb-9 flex flex-col justify-between gap-6 sm:mb-12 lg:flex-row lg:items-end">
            <div>
              <p className="mb-4 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8F7746] sm:text-xs">
                <span className="h-px w-9 bg-[#D2B87C]" />
                Mechanical Engineering Department
              </p>

              <h2 className="font-serif text-3xl font-medium leading-tight tracking-[-0.025em] text-[#20235A] sm:text-4xl lg:text-5xl">
                Industria Mech{" "}
                <span className="italic text-[#8F7746]">Summit 2026.</span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-justify text-[#625E57] sm:text-base sm:leading-8">
                A glimpse into Industria Mech Summit 2026 through moments
                of participation, collaboration and engineering excellence.
              </p>
            </div>

            {/* Gallery Count */}
            <div className="flex items-center gap-3 border-y border-[#DED6C8] py-4 lg:min-w-[170px] lg:justify-end">
              <span className="font-serif text-3xl text-[#20235A]">
                09
              </span>

              <span className="text-[9px] font-semibold uppercase leading-5 tracking-[0.17em] text-[#8F7746]">
                Photographs
                <br />
                Summit Gallery
              </span>
            </div>
          </div>

          {/* Nine-Image Gallery */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {summitPhotos.map((photo, index) => (
              <button
                key={photo.src}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`View photograph ${index + 1} in full screen`}
                className="group relative block w-full overflow-hidden bg-[#F0ECE3] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#8F7746]"
              >
                <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[5/4]">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Subtle image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#20235A]/65 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-90" />

                  {/* Image Number */}
                  <span className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center border border-white/60 bg-[#20235A]/45 font-serif text-sm text-white backdrop-blur-sm sm:left-5 sm:top-5">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Expand Icon */}
                  <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center border border-white/50 bg-[#20235A]/45 text-white opacity-100 backdrop-blur-sm transition-all duration-300 sm:opacity-0 sm:group-hover:opacity-100">
                    <Maximize2 size={15} strokeWidth={1.5} />
                  </span>

                  {/* Bottom Caption */}
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 sm:p-5">
                    <div>
                      <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                        Industria Mech Summit
                      </p>

                      <p className="mt-1 font-serif text-xl text-white sm:text-2xl">
                        2026
                      </p>
                    </div>

                    <ArrowUpRight
                      size={19}
                      strokeWidth={1.5}
                      className="mb-1 shrink-0 text-[#D2B87C] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </div>

                  {/* Gold Bottom Accent */}
                  <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#D2B87C] transition-all duration-500 group-hover:w-full" />
                </div>
              </button>
            ))}
          </div>

          {/* Gallery Footer */}
          <div className="mt-6 flex flex-col gap-3 border-t border-[#DED6C8] pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs leading-6 text-[#625E57]">
              Explore the moments captured during the summit.
            </p>

            <p className="flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#8F7746]">
              <Maximize2 size={13} />
              Select a photograph to enlarge
            </p>
          </div>
        </div>
      </section>
      {/* Full-Screen Lightbox */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#11121D]/95 p-4 backdrop-blur-md sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Summit photo viewer"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Close photo viewer"
            className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center border border-white/20 bg-white/10 text-white transition-colors hover:bg-[#D2B87C] hover:text-[#20235A] sm:right-7 sm:top-7"
          >
            <X size={22} />
          </button>

          {/* Image Counter */}
          <div className="absolute left-5 top-5 z-20 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70 sm:left-8 sm:top-8">
            INDUSTRIA MECH SUMMIT 2026
            <span className="mt-2 block font-serif text-lg text-[#D2B87C]">
              {String(activeIndex + 1).padStart(2, "0")} / 09
            </span>
          </div>

          {/* Previous Button */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            aria-label="Previous photograph"
            className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/20 bg-white/10 text-white transition-colors hover:bg-[#D2B87C] hover:text-[#20235A] sm:left-7 sm:h-14 sm:w-14"
          >
            <ChevronLeft size={26} strokeWidth={1.5} />
          </button>

          {/* Full-Screen Image */}
          <div
            className="relative h-[65vh] w-full max-w-6xl sm:h-[76vh]"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              key={summitPhotos[activeIndex].src}
              src={summitPhotos[activeIndex].src}
              alt={summitPhotos[activeIndex].alt}
              fill
              priority
              sizes="100vw"
              className="object-contain"
            />
          </div>

          {/* Next Button */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="Next photograph"
            className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/20 bg-white/10 text-white transition-colors hover:bg-[#D2B87C] hover:text-[#20235A] sm:right-7 sm:h-14 sm:w-14"
          >
            <ChevronRight size={26} strokeWidth={1.5} />
          </button>

          {/* Bottom Information */}
          <div className="absolute inset-x-0 bottom-4 text-center sm:bottom-6">
            <p className="font-serif text-lg text-white sm:text-xl">
              Industria Mech Summit 2026
            </p>
            <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-white/50">
              Use arrow keys to navigate · Esc to close
            </p>
          </div>
        </div>
      )}
      <FooterSection />
    </main>
  );
}
