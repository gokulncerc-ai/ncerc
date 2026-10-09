import type { ReactNode } from "react";

import Image from "next/image";

import {
  ArrowDownRight,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Cog,
  ShieldCheck,
  Wrench,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../../DepartmentNav/page";

export const metadata = {
  title: "Mechanical Engineering Laboratories | NCERC",
  description:
    "Explore the laboratories and practical learning facilities of the Mechanical Engineering Department at Nehru College of Engineering and Research Centre.",
  keywords: [
    "mechanical engineering laboratories",
    "mechanical engineering labs",
    "NCERC mechanical engineering",
    "engineering colleges thrissur",
    "Nehru College of Engineering and Research Centre",
    "mechanical engineering college Kerala",
  ],
  robots: { index: true, follow: true },
};

/* -------------------------------------------------------------------------- */
/* Assets                                                                     */
/* -------------------------------------------------------------------------- */

const LAB_IMAGE_BASE = "/images/dpt/mechanical-engineering/lab";

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

type LabImage = {
  src: string;
  alt: string;
};

type Lab = {
  title: string;
  description: string;
  images: LabImage[];
};

type SectionBlockProps = {
  title: string;
  eyebrow?: string;
  children: ReactNode;
};

/* -------------------------------------------------------------------------- */
/* Content                                                                    */
/* -------------------------------------------------------------------------- */

const maintenancePoints: string[] = [
  "Regular check-up of computers/equipment is carried out as and when required and at the end of every semester.",
  "Maintenance register is maintained in the laboratories.",
  "Each laboratory maintains a stock register detailing the equipment history within it.",
  "As per requirement minor repairs are carried out by the lab assistant.",
  "Major repairs are outsourced.",
  "Dos and don’ts, safety measure rules are displayed in each laboratory.",
  "Well Technical Staff are available for maintenance of Electronic equipment and software.",
  "Department has UPS supply which is used in case of power failure in Laboratories.",
  "One teaching faculty and a lab instructor are in-charge of the overall functioning /maintenance of each lab.",
];

const ambiencePoints: string[] = [
  "All laboratories are equipped with state of art equipment’s to meet the requirements of curriculum.",
  "All laboratories are well furnished.",
  "All labs are supported by uninterrupted power supply which ensures that all laboratory slots are utilized effectively.",
  "Laboratories kept open beyond office hours as per the need.",
  "Sufficient number of windows is available for ventilation and natural light and every lab has one exit.",
  "Lighting system is very effective, along with the natural light in every corner of the rooms.",
  "Conditions of chairs/benches are in good condition. Chair with desk are provided for individual students in Labs.",
  "Each Lab is equipped with white/black board, computer, Internet, and such other amenities.",
  "A project lab has been provided for the students to carry out their mini and major project work.",
  "Cup-boards are available in each lab for students to place their belongings.",
  "Labs are equipped with sufficient hardware and licensed software to run program specific curriculum and off program curriculum.",
  "All labs are open for students and faculties for research.",
  "All the software & research labs are provided with ICT facilities.",
];

const labs: Lab[] = [
  {
    title: "Mechanical Workshop",
    description:
      "The workshop is the introductory space where students learn the fundamentals of fabrication and “hands-on” manufacturing. It typically includes specialized sections for fitting, carpentry, smithy, and welding, allowing students to understand how raw materials are shaped. You’ll find traditional machines like lathes and shapers used to create basic mechanical components. It emphasizes the importance of manual dexterity and safety protocols in a practical environment.",
    images: [
      {
        src: `${LAB_IMAGE_BASE}/me_lab_1.png`,
        alt: "Mechanical Workshop",
      },
      {
        src: `${LAB_IMAGE_BASE}/me_lab_2.png`,
        alt: "Mechanical Workshop",
      },
    ],
  },
  {
    title: "Strength of Materials Lab",
    description:
      "This lab focuses on how solid objects deform and fail under various types of loading. Students use Universal Testing Machines (UTM) to perform tension, compression, and shear tests on materials like steel and aluminium. By measuring stress and strain, the lab helps determine critical properties such as elasticity, hardness, and toughness. These insights are vital for designing safe structures and machine parts.",
    images: [
      {
        src: `${LAB_IMAGE_BASE}/Strength_of_Materials_Lab_1.png`,
        alt: "Strength of Materials Lab",
      },
      {
        src: `${LAB_IMAGE_BASE}/Strength_of_Materials_Lab_2.png`,
        alt: "Strength of Materials Lab",
      },
    ],
  },
  {
    title: "Thermal Lab",
    description:
      "The Thermal lab explores the conversion of energy into work, primarily through the study of internal combustion engines. It features setups for testing the performance of petrol and diesel engines, including multi-cylinder test rigs to calculate thermal efficiency. Students also study the properties of fuels and the behaviour of steam in power cycles. This data is essential for improving engine performance and reducing emissions.",
    images: [
      {
        src: `${LAB_IMAGE_BASE}/Thermal_Lab_1.png`,
        alt: "Thermal Lab",
      },
      {
        src: `${LAB_IMAGE_BASE}/Thermal_Lab_2.png`,
        alt: "Thermal Lab",
      },
    ],
  },
  {
    title: "CNC Lab",
    description:
      "This facility transitions from manual machining to automated, high-precision manufacturing. It houses Computer Numerical Control (CNC) lathes and milling machines that are programmed to execute complex cuts with extreme accuracy. Students learn to write G-code and M-code to automate the production of intricate parts. It represents the modern industrial standard for mass production and precision engineering.",
    images: [
      {
        src: `${LAB_IMAGE_BASE}/cnc_lab_1.png`,
        alt: "CNC Lab Pic1",
      },
      {
        src: `${LAB_IMAGE_BASE}/cnc_lab_2.png`,
        alt: "CNC Lab Pic2",
      },
    ],
  },
  {
    title: "Instrumentation Lab",
    description:
      "The Instrumentation lab is dedicated to the science of measurement and control systems. Students learn to use sensors and transducers to measure physical variables like pressure, temperature, displacement, and vibration. The lab often involves integrating these sensors with data acquisition systems and microcontrollers. Understanding these tools is crucial for monitoring industrial processes and ensuring machine health.",
    images: [
      {
        src: `${LAB_IMAGE_BASE}/Instrumentation_Lab_1.png`,
        alt: "Instrumentation Lab Pic1",
      },
      {
        src: `${LAB_IMAGE_BASE}/Instrumentation_Lab_2.png`,
        alt: "Instrumentation Lab Pic2",
      },
    ],
  },
  {
    title: "Production Lab",
    description:
      "This lab dives deeper into the technical aspects of manufacturing processes and metrology. It focuses on the study of tool geometry, chip formation, and the mechanics of metal cutting. Additionally, it includes precision measurement tools like micrometers, sine bars, and profile projectors to ensure parts meet strict tolerances. It provides the technical foundation for optimizing factory floor operations.",
    images: [
      {
        src: `${LAB_IMAGE_BASE}/Production_Lab_1.png`,
        alt: "Production Lab Pic1",
      },
      {
        src: `${LAB_IMAGE_BASE}/Production_Lab_2.png`,
        alt: "Production Lab Pic2",
      },
    ],
  },
  {
    title: "Fluid Lab",
    description:
      "The Fluid Mechanics lab deals with the behaviour of liquids and gases at rest and in motion. Experimental setups include Bernoulli’s theorem apparatus, Venturi meters, and orifice plates to study flow rates and pressure drops. Students also test the performance of hydraulic machinery like centrifugal pumps and various water turbines (Pelton, Francis, Kaplan). These studies are fundamental to designing piping systems and hydroelectric plants.",
    images: [
      {
        src: `${LAB_IMAGE_BASE}/Fluid_Lab_1.png`,
        alt: "Fluid Lab Pic1",
      },
      {
        src: `${LAB_IMAGE_BASE}/Fluid_Lab_2.png`,
        alt: "Fluid Lab Pic2",
      },
    ],
  },
  {
    title: "Heat Transfer Lab",
    description:
      "This lab investigates the three modes of energy exchange: conduction, convection, and radiation. Experiments often involve measuring the thermal conductivity of solids or observing heat exchange in parallel and counter-flow heat exchangers. Students analyze how different materials and surface geometries affect the rate of cooling or heating. This knowledge is applied directly to the design of radiators, refrigerators, and cooling systems for electronics.",
    images: [
      {
        src: `${LAB_IMAGE_BASE}/Heat_Transfer_Lab_1.png`,
        alt: "Heat Transfer Lab Pic1",
      },
      {
        src: `${LAB_IMAGE_BASE}/Heat_Transfer_Lab_2.png`,
        alt: "Heat Transfer Lab Pic2",
      },
    ],
  },
  {
    title: "CAD Lab",
    description:
      "The Computer - Aided Design (CAD) lab is a digital workspace for modeling and simulating mechanical systems. Using professional software like SolidWorks, AutoCAD, or CATIA, students create 3D representations of complex assemblies. The lab also introduces finite element analysis (FEA) to simulate how these designs would react to real-world forces. It is the primary environment for the conceptual and detail-design phases of engineering.",
    images: [
      {
        src: `${LAB_IMAGE_BASE}/CAD_lab_1.png`,
        alt: "CAD Lab pic",
      },
    ],
  },
  {
    title: "Mechanical Engineering Lab",
    description:
      "Often a “capstone” or comprehensive facility, this lab integrates multiple disciplines to study complex mechanical systems. It focuses on the dynamics of machinery, covering topics like governors, gyroscopes, and balancing of rotating masses. Students observe the effects of vibration and friction on mechanical links and mechanisms. It serves as a final proving ground where various engineering principles converge into a single functional system.",
    images: [
      {
        src: `${LAB_IMAGE_BASE}/Mechanical_Engineering_Lab_1.png`,
        alt: "Mechanical Engineering Lab Pic1",
      },
      {
        src: `${LAB_IMAGE_BASE}/Mechanical_Engineering_Lab_2.png`,
        alt: "Mechanical Engineering Lab Pic2",
      },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/* Small reusable UI pieces                                                   */
/* -------------------------------------------------------------------------- */

function SectionLabel({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8F7746]">
        {eyebrow}
      </p>

      <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      <div className="mt-6 h-px w-20 bg-[#D2B87C]" />
    </div>
  );
}

function SectionBlock({
  title,
  eyebrow,
  children,
}: SectionBlockProps) {
  return (
    <section className="border-t border-[#D8D1C4] pt-12 first:border-t-0 first:pt-0">
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8F7746]">
          {eyebrow}
        </p>
      )}

      <h2 className="mt-2 font-display text-3xl font-semibold leading-tight text-[#20235A] sm:text-4xl">
        {title}
      </h2>

      <div className="mt-5 h-px w-16 bg-[#D2B87C]" />

      <div className="mt-7">{children}</div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-4">
          <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#D2B87C]/70">
            <ChevronRight
              size={13}
              strokeWidth={2.5}
              className="text-[#8F7746]"
            />
          </span>

          <p className="text-[15px] leading-7 text-[#625D58]">{item}</p>
        </li>
      ))}
    </ul>
  );
}

/* -------------------------------------------------------------------------- */
/* Lab section                                                                */
/* -------------------------------------------------------------------------- */

function LabBlock({
  lab,
  index,
}: {
  lab: Lab;
  index: number;
}) {
  const isSingle = lab.images.length === 1;
  const isEven = index % 2 === 1;

  return (
    <section className="relative overflow-hidden border-t border-[#D8D1C4] pt-16 sm:pt-20 lg:pt-24">
      <div className="absolute right-0 top-10 hidden font-display text-[100px] font-semibold leading-none text-[#20235A]/[0.035] sm:block lg:text-[150px]">
        {String(index + 1).padStart(2, "0")}
      </div>

      <div
        className={`grid items-center gap-10 lg:grid-cols-12 lg:gap-16 ${
          isEven ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* Text */}        
        <div className="lg:col-span-5">
          <div className="flex items-center gap-4">
            <span className="font-display text-5xl font-semibold leading-none text-[#D2B87C]/70">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className="h-px w-10 bg-[#D2B87C]" />
          </div>

          <p className="mt-7 text-xs font-semibold uppercase tracking-[0.25em] text-[#8F7746]">
            Mechanical Engineering Laboratory
          </p>

          <h2 className="mt-3 font-display text-3xl font-semibold leading-[1.08] text-[#20235A] sm:text-4xl">
            {lab.title}
          </h2>

          <div className="mt-6 h-px w-16 bg-[#D2B87C]" />

          <p className="mt-7 text-[15px] leading-8 text-[#625D58]">
            {lab.description}
          </p>

          <div className="mt-8 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#20235A]">
            <Cog className="h-4 w-4 text-[#8F7746]" />
            Practical Learning Environment
          </div>
        </div>

        {/* Images */}
        <div className="lg:col-span-7">
          <div
            className={`grid gap-5 ${
              isSingle ? "max-w-2xl" : "sm:grid-cols-2"
            }`}
          >
            {lab.images.map((image, imageIndex) => (
              <div
                key={image.src}
                className={`group relative ${
                  imageIndex === 1 && !isSingle
                    ? "sm:translate-y-10"
                    : ""
                }`}
              >
                {/* Gold offset frame */}
                <div className="absolute inset-0 translate-x-3 translate-y-3 border border-[#D2B87C]" />

                <div className="relative aspect-[4/3] overflow-hidden bg-[#F2EFE8]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes={
                      isSingle
                        ? "(min-width: 1024px) 55vw, 100vw"
                        : "(min-width: 640px) 40vw, 100vw"
                    }
                    className="object-cover transition duration-700 ease-out group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-[#20235A]/0 transition duration-500 group-hover:bg-[#20235A]/10" />

                  <div className="absolute bottom-4 left-4 flex h-9 w-9 items-center justify-center bg-white/95 text-[#20235A] shadow-sm">
                    <ArrowDownRight size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Page                                                                       */
/* -------------------------------------------------------------------------- */

export default function LabsPage() {
  return (
    <>
      <SiteHeader />

      {/* ------------------------------------------------------------------ */}
      {/* Hero                                                                */}
      {/* ------------------------------------------------------------------ */}

      <section className="relative isolate overflow-hidden bg-[#20235A]">
        {/* Decorative circles */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-white/10 sm:h-[420px] sm:w-[420px]" />

        <div className="pointer-events-none absolute -right-12 top-12 h-56 w-56 rounded-full border border-[#D2B87C]/20 sm:h-72 sm:w-72" />

        <div className="pointer-events-none absolute bottom-[-100px] left-[-100px] h-72 w-72 rounded-full border border-white/[0.06]" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24 xl:py-28">
          <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Hero copy */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-4">
                <span className="h-px w-12 bg-[#D2B87C]" />

                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D2B87C]">
                  Mechanical Engineering
                </p>
              </div>

              <h1 className="mt-7 max-w-4xl font-display text-[43px] font-semibold leading-[0.98] tracking-[-0.02em] text-white sm:text-[58px] lg:text-[64px] xl:text-[74px]">
                Laboratories
                <span className="block text-[#D2B87C]">
                  built for practice.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                A practical learning environment where mechanical engineering
                principles move beyond the classroom and into experimentation,
                manufacturing, measurement and design.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#laboratories"
                  className="inline-flex items-center gap-3 bg-[#D2B87C] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#20235A] transition hover:bg-white"
                >
                  Explore laboratories
                  <ArrowRight size={16} />
                </a>

                <a
                  href="#laboratory-environment"
                  className="inline-flex items-center gap-3 border border-white/25 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:border-[#D2B87C] hover:text-[#D2B87C]"
                >
                  Laboratory environment
                </a>
              </div>
            </div>

            {/* Hero side statement */}
            <div className="lg:col-span-5">
              <div className="relative ml-auto max-w-md border-l border-[#D2B87C]/50 pl-7 sm:pl-9">
                <p className="font-display text-2xl leading-snug text-white sm:text-3xl">
                  “Learning becomes engineering when theory meets the real
                  world.”
                </p>

                <div className="mt-7 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#D2B87C]" />

                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">
                    Department Facilities
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
        {/* ---------------------------------------------------------------- */}
        {/* Introduction                                                      */}
        {/* ---------------------------------------------------------------- */}

        <section
          id="laboratory-environment"
          className="relative overflow-hidden border-b border-[#D8D1C4]"
        >
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
              <div className="lg:col-span-5">
                <SectionLabel
                  eyebrow="Laboratory Environment"
                  title="Spaces designed for hands-on engineering."
                />
              </div>

              <div className="lg:col-span-7">
                <p className="text-lg leading-9 text-[#4F4A46]">
                  All labs are well equipped and have continuous power supply
                  which ensures unhindered working of machines. Each laboratory
                  maintains a Stock register detailing the equipment history
                  within it. One Teaching faculty and a Lab instructor will be
                  in charge of the overall functioning/maintenance of each lab.
                </p>

                <div className="mt-10 grid gap-px overflow-hidden border border-[#D8D1C4] bg-[#D8D1C4] sm:grid-cols-3">
                  <div className="bg-white p-6">
                    <Wrench className="h-6 w-6 text-[#8F7746]" />

                    <p className="mt-5 font-display text-xl font-semibold text-[#20235A]">
                      Practical
                    </p>

                    <p className="mt-2 text-sm leading-6 text-[#6C665F]">
                      Hands-on engineering experience.
                    </p>
                  </div>

                  <div className="bg-white p-6">
                    <ShieldCheck className="h-6 w-6 text-[#8F7746]" />

                    <p className="mt-5 font-display text-xl font-semibold text-[#20235A]">
                      Maintained
                    </p>

                    <p className="mt-2 text-sm leading-6 text-[#6C665F]">
                      Structured equipment and safety practices.
                    </p>
                  </div>

                  <div className="bg-white p-6">
                    <Cog className="h-6 w-6 text-[#8F7746]" />

                    <p className="mt-5 font-display text-xl font-semibold text-[#20235A]">
                      Technical
                    </p>

                    <p className="mt-2 text-sm leading-6 text-[#6C665F]">
                      Facilities supporting modern engineering.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Maintenance + Ambience                                           */}
        {/* ---------------------------------------------------------------- */}

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
            <SectionBlock
              eyebrow="Standards & Environment"
              title="Laboratories: Maintenance and Overall Ambiance"
            >
              <div className="grid gap-10 lg:grid-cols-2 lg:gap-px lg:overflow-hidden lg:border lg:border-[#D8D1C4] lg:bg-[#D8D1C4]">
                {/* Maintenance */}
                <div className="bg-[#FAF7F2] p-7 sm:p-9 lg:p-10">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                        01
                      </p>

                      <h3 className="mt-3 font-display text-2xl font-semibold text-[#20235A] sm:text-3xl">
                        Maintenance of Laboratory Equipment
                      </h3>
                    </div>

                    <Wrench className="h-7 w-7 shrink-0 text-[#D2B87C]" />
                  </div>

                  <div className="mt-8">
                    <BulletList items={maintenancePoints} />
                  </div>
                </div>

                {/* Ambience */}
                <div className="bg-white p-7 sm:p-9 lg:p-10">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                        02
                      </p>

                      <h3 className="mt-3 font-display text-2xl font-semibold text-[#20235A] sm:text-3xl">
                        Overall Ambience
                      </h3>
                    </div>

                    <CheckCircle2 className="h-7 w-7 shrink-0 text-[#D2B87C]" />
                  </div>

                  <div className="mt-8">
                    <BulletList items={ambiencePoints} />
                  </div>
                </div>
              </div>
            </SectionBlock>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Labs                                                              */}
        {/* ---------------------------------------------------------------- */}

        <section
          id="laboratories"
          className="bg-[#FAF7F2]"
        >
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-28">
                  <SectionLabel
                    eyebrow="Facilities"
                    title="Explore the laboratories."
                  />

                  <p className="mt-7 max-w-sm text-[15px] leading-8 text-[#6C665F]">
                    From foundational workshop practice to advanced CAD,
                    instrumentation and thermal studies, each laboratory
                    supports a different stage of mechanical engineering
                    education.
                  </p>

                  <div className="mt-8 hidden lg:block">
                    <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#20235A]">
                      <span className="h-px w-8 bg-[#D2B87C]" />
                      {labs.length} Laboratory Spaces
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8">
                <div className="space-y-0">
                  {labs.map((lab, index) => (
                    <LabBlock
                      key={lab.title}
                      lab={lab}
                      index={index}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Closing statement                                                 */}
        {/* ---------------------------------------------------------------- */}

        <section className="relative overflow-hidden bg-[#20235A]">
          <div className="pointer-events-none absolute right-[-120px] top-[-120px] h-80 w-80 rounded-full border border-white/10" />

          <div className="pointer-events-none absolute bottom-[-140px] left-[-100px] h-80 w-80 rounded-full border border-[#D2B87C]/15" />

          <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
            <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-8">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D2B87C]">
                  Beyond the Classroom
                </p>

                <h2 className="mt-5 max-w-4xl font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                  Engineering is learned by understanding, testing and making.
                </h2>
              </div>

              <div className="lg:col-span-4">
                <p className="text-[15px] leading-8 text-white/65">
                  The Mechanical Engineering laboratories provide the practical
                  setting where students can connect engineering theory with
                  machines, materials, measurement and design.
                </p>

                <a
                  href="/department/mechanical-engineering/facilities"
                  className="mt-7 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#D2B87C] transition hover:text-white"
                >
                  View all facilities
                  <ArrowRight size={16} />
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