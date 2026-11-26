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
import InnerHeader from "../../DepartmentNav/DepartmentNav";

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
        className={`grid items-center gap-10 lg:grid-cols-12 lg:gap-16 ${isEven ? "lg:[&>*:first-child]:order-2" : ""
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
            className={`grid gap-5 ${isSingle ? "max-w-2xl" : "sm:grid-cols-2"
              }`}
          >
            {lab.images.map((image, imageIndex) => (
              <div
                key={image.src}
                className={`group relative ${imageIndex === 1 && !isSingle
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

      <section className="relative overflow-hidden bg-[#20235A] text-white">
        {/* Decorative circles */}
        <div className="pointer-events-none absolute -right-20 -top-24 h-[340px] w-[340px] rounded-full border border-white/[0.08] sm:h-[480px] sm:w-[480px]" />

        <div className="pointer-events-none absolute -right-8 -top-12 h-[250px] w-[250px] rounded-full border border-[#D2B87C]/20 sm:h-[360px] sm:w-[360px]" />

        <div className="pointer-events-none absolute bottom-[-100px] left-[-100px] h-72 w-72 rounded-full border border-white/[0.06]" />

        <div className="relative mx-auto grid max-w-[1440px] gap-10 px-5 py-14 sm:px-8 sm:py-16 md:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-14 lg:px-16 lg:py-20 xl:px-20 xl:py-24">
          {/* Main heading */}
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C] sm:text-[11px]">
              Mechanical Engineering Department
            </p>

            <h1 className="mt-5 max-w-[850px] font-display text-[43px] font-semibold leading-[0.98] tracking-[-0.035em] text-white sm:text-[55px] lg:text-[67px] xl:text-[75px]">
              Laboratories
              <br />
              <span className="font-normal italic text-[#D2B87C]">
                Built for Practice.
              </span>
            </h1>

            <p className="mt-7 max-w-[600px] text-justify text-[14px] leading-7 text-white/75 sm:text-[15px] sm:leading-8">
              A practical learning environment where mechanical engineering
              principles move beyond the classroom and into experimentation,
              manufacturing, measurement and design.
            </p>

            {/* CTA Buttons */}
            <div className="mt-7 flex flex-wrap gap-3 sm:gap-4">
              <a
                href="#laboratories"
                className="inline-flex items-center gap-3 bg-[#D2B87C] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#20235A] transition-colors hover:bg-white sm:px-6 sm:py-3.5 sm:text-xs"
              >
                Explore Laboratories
                <ArrowRight size={16} />
              </a>

              <a
                href="#laboratory-environment"
                className="inline-flex items-center gap-3 border border-white/25 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:border-[#D2B87C] hover:text-[#D2B87C] sm:px-6 sm:py-3.5 sm:text-xs"
              >
                Laboratory Environment
              </a>
            </div>
          </div>

          {/* Supporting content */}
          <div className="border-t border-white/15 pt-6 lg:ml-auto lg:w-full lg:max-w-[390px]">
            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
              Department Facilities
            </p>

            <p className="mt-4 font-display text-[25px] leading-[1.2] text-white sm:text-[29px]">
              Learning becomes engineering when theory meets the real world.
            </p>

            <div className="mt-6 flex items-center gap-3 text-[11px] leading-5 text-white/65">
              <span
                aria-hidden="true"
                className="flex h-8 w-8 shrink-0 items-center justify-center border border-[#D2B87C]/50 text-[#D2B87C]"
              >
                01
              </span>

              Practical learning, experimentation and engineering applications
            </div>
          </div>
        </div>

        {/* Bottom accent */}
        <div className="h-1 w-full bg-[#D2B87C]" />
      </section>

      {/* Department navigation */}
      <InnerHeader />

      <main className="bg-[#FAF7F2]">
        <section
          id="laboratory-environment"
          className="relative overflow-hidden border-b border-[#D8D1C4] bg-[#FAF7F2]"
        >
          <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 sm:py-16 md:px-10 lg:px-16 lg:py-20 xl:px-20">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
              {/* Section Heading */}
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#8F7746] sm:text-[11px]">
                  Laboratory Environment
                </p>

                <h2 className="mt-5 max-w-[520px] font-display text-[35px] font-semibold leading-[1.05] tracking-[-0.035em] text-[#20235A] sm:text-[43px] lg:text-[50px] xl:text-[56px]">
                  Spaces designed for{" "}
                  <span className="font-normal italic text-[#8F7746]">
                    hands-on engineering.
                  </span>
                </h2>

                <div className="mt-6 h-px w-16 bg-[#D2B87C]" />
              </div>

              {/* Description and Features */}
              <div>
                <p className="text-[14px] text-justify leading-7 text-[#4F4A46] sm:text-[15px] sm:leading-8">
                  All labs are well equipped and have continuous power supply which
                  ensures unhindered working of machines. Each laboratory maintains
                  a Stock register detailing the equipment history within it. One
                  Teaching faculty and a Lab instructor will be in charge of the
                  overall functioning/maintenance of each lab.
                </p>

                {/* Laboratory Features */}
                <div className="mt-8 grid gap-px overflow-hidden border border-[#D8D1C4] bg-[#D8D1C4] sm:grid-cols-3">
                  {/* Practical */}
                  <div className="bg-white p-5 sm:p-6">
                    <Wrench className="h-5 w-5 text-[#8F7746]" />

                    <p className="mt-4 font-display text-xl font-medium leading-tight tracking-[-0.02em] text-[#20235A] sm:text-[22px]">
                      Practical
                    </p>

                    <p className="mt-2 text-[12px] leading-6 text-[#6C665F] sm:text-[13px]">
                      Hands-on engineering experience.
                    </p>
                  </div>

                  {/* Maintained */}
                  <div className="bg-white p-5 sm:p-6">
                    <ShieldCheck className="h-5 w-5 text-[#8F7746]" />

                    <p className="mt-4 font-display text-xl font-medium leading-tight tracking-[-0.02em] text-[#20235A] sm:text-[22px]">
                      Maintained
                    </p>

                    <p className="mt-2 text-[12px] leading-6 text-[#6C665F] sm:text-[13px]">
                      Structured equipment and safety practices.
                    </p>
                  </div>

                  {/* Technical */}
                  <div className="bg-white p-5 sm:p-6">
                    <Cog className="h-5 w-5 text-[#8F7746]" />

                    <p className="mt-4 font-display text-xl font-medium leading-tight tracking-[-0.02em] text-[#20235A] sm:text-[22px]">
                      Technical
                    </p>

                    <p className="mt-2 text-[12px] leading-6 text-[#6C665F] sm:text-[13px]">
                      Facilities supporting modern engineering.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mechanical Workshop */}
        <section
          id="mechanical-workshop"
          className="relative overflow-hidden border-b border-[#D8D1C4] bg-[#FAF7F2]"
        >
          <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 sm:py-16 md:px-10 lg:px-16 lg:py-20 xl:px-20">
            {/* Section Heading */}
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-14">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#8F7746] sm:text-[11px]">
                  Laboratory 01 / Manufacturing Practice
                </p>

                <h2 className="mt-5 max-w-[600px] font-display text-[38px] font-semibold leading-[1.02] tracking-[-0.035em] text-[#20235A] sm:text-[48px] lg:text-[58px]">
                  Mechanical{" "}
                  <span className="font-normal italic text-[#8F7746]">
                    Workshop.
                  </span>
                </h2>

                <div className="mt-6 h-px w-16 bg-[#D2B87C]" />
              </div>

              <div className="lg:pb-1">
                <p className="max-w-2xl text-[14px] text-justify leading-7 text-[#4F4A46] sm:text-[15px] sm:leading-8">
                  The workshop is the introductory space where students learn the
                  fundamentals of fabrication and hands-on manufacturing. It typically
                  includes specialized sections for{" "}
                  <span className="font-semibold text-[#20235A]">
                    fitting, carpentry, smithy, and welding
                  </span>
                  , allowing students to understand how raw materials are shaped.You’ll find traditional machines like lathes and shapers used to create basic mechanical components. It emphasizes the importance of manual dexterity and safety protocols in a practical environment.

                </p>
              </div>
            </div>

            {/* Workshop Image Gallery */}
            <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:mt-14">
              {/* Image 1 */}
              <div className="group relative">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#F0ECE3] sm:aspect-[5/4]">
                  <Image
                    src="\images\dpt\mechanical-engineering\lab\lab19.webp"
                    alt="Mechanical workshop at NCERC"
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#17172D]/45 via-transparent to-transparent" />

                  <div className="absolute bottom-0 left-0 p-5 sm:p-7">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#E8D5A7] sm:text-[10px]">
                      Hands-on Learning
                    </p>

                    <p className="mt-2 font-display text-xl text-white sm:text-2xl">
                      Fabrication & Practice
                    </p>
                  </div>
                </div>
              </div>

              {/* Image 2 */}
              <div className="group relative sm:mt-10">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#F0ECE3] sm:aspect-[5/4]">
                  <Image
                    src="\images\dpt\mechanical-engineering\lab\lab20.webp"
                    alt="Workshop machinery and practical manufacturing facilities"
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#17172D]/45 via-transparent to-transparent" />

                  <div className="absolute bottom-0 left-0 p-5 sm:p-7">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#E8D5A7] sm:text-[10px]">
                      Manufacturing Fundamentals
                    </p>

                    <p className="mt-2 font-display text-xl text-white sm:text-2xl">
                      Tools, Machines & Skills
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Workshop Information */}
            <div className="mt-8 grid gap-6 border-t border-[#D8D1C4] pt-7 sm:mt-10 sm:grid-cols-3 sm:gap-8 sm:pt-8">
              <div>
                <p className="font-display text-lg font-medium text-[#20235A]">
                  Fitting & Carpentry
                </p>

                <p className="mt-2 text-[12px] leading-6 text-[#6C665F] sm:text-[13px]">
                  Introduction to basic fabrication and material-working techniques.
                </p>
              </div>

              <div>
                <p className="font-display text-lg font-medium text-[#20235A]">
                  Smithy & Welding
                </p>

                <p className="mt-2 text-[12px] leading-6 text-[#6C665F] sm:text-[13px]">
                  Exposure to traditional metal shaping and joining processes.
                </p>
              </div>

              <div>
                <p className="font-display text-lg font-medium text-[#20235A]">
                  Machines & Safety
                </p>

                <p className="mt-2 text-[12px] leading-6 text-[#6C665F] sm:text-[13px]">
                  Familiarization with workshop machines, manual skills, and safe
                  working practices.
                </p>
              </div>
            </div>

            {/* Bottom Accent */}
            <div className="mt-8 h-1 w-16 bg-[#D2B87C]" />
          </div>
        </section>

        {/* Strength of Materials Laboratory */}
        <section
          id="strength-of-materials-lab"
          className="relative overflow-hidden border-b border-[#D8D1C4] bg-[#FAF7F2]"
        >
          <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 sm:py-16 md:px-10 lg:px-16 lg:py-20 xl:px-20">
            {/* Section Heading */}
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-14">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#8F7746] sm:text-[11px]">
                  Laboratory 02 / Material Testing
                </p>

                <h2 className="mt-5 max-w-[600px] font-display text-[38px] font-semibold leading-[1.02] tracking-[-0.035em] text-[#20235A] sm:text-[48px] lg:text-[58px]">
                  Strength of{" "}
                  <span className="font-normal italic text-[#8F7746]">
                    Materials Lab.
                  </span>
                </h2>

                <div className="mt-6 h-px w-16 bg-[#D2B87C]" />
              </div>

              {/* Laboratory Description */}
              <div className="lg:pb-1">
                <p className="text-[14px] leading-7 text-justify text-[#4F4A46] sm:text-[15px] sm:leading-8">
                  This lab focuses on how solid objects deform and fail under various
                  types of loading. Students use{" "}
                  <span className="font-semibold text-[#20235A]">
                    Universal Testing Machines (UTM)
                  </span>{" "}
                  to perform tension, compression, and shear tests on materials like
                  steel and aluminium. By measuring stress and strain, the lab helps
                  determine critical properties such as elasticity, hardness, and
                  toughness. These insights are vital for designing safe structures
                  and machine parts.
                </p>
              </div>
            </div>

            {/* Laboratory Image Gallery */}
            <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:mt-14">
              {/* Image 1 */}
              <div className="group relative">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#F0ECE3] sm:aspect-[5/4]">
                  <Image
                    src="\images\dpt\mechanical-engineering\lab\lab25.webp"
                    alt="Strength of Materials laboratory and material testing equipment"
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover "
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#17172D]/45 via-transparent to-transparent" />

                  <div className="absolute bottom-0 left-0 p-5 sm:p-7">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#E8D5A7] sm:text-[10px]">
                      Material Testing
                    </p>

                    <p className="mt-2 font-display text-xl text-white sm:text-2xl">
                      Testing Under Load
                    </p>
                  </div>
                </div>
              </div>

              {/* Image 2 */}
              <div className="group relative sm:mt-10">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#F0ECE3] sm:aspect-[5/4]">
                  <Image
                    src="\images\dpt\mechanical-engineering\lab\lab26.webp"
                    alt="Universal Testing Machine used for mechanical material testing"
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover "
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#17172D]/45 via-transparent to-transparent" />

                  <div className="absolute bottom-0 left-0 p-5 sm:p-7">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#E8D5A7] sm:text-[10px]">
                      Universal Testing Machine
                    </p>

                    <p className="mt-2 font-display text-xl text-white sm:text-2xl">
                      Understanding Material Behaviour
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Learning Areas */}
            <div className="mt-8 grid gap-6 border-t border-[#D8D1C4] pt-7 sm:mt-10 sm:grid-cols-3 sm:gap-8 sm:pt-8">
              <div>
                <p className="font-display text-lg font-medium text-[#20235A]">
                  Mechanical Testing
                </p>

                <p className="mt-2 text-[12px] leading-6 text-[#6C665F] sm:text-[13px]">
                  Tension, compression, and shear testing of materials.
                </p>
              </div>

              <div>
                <p className="font-display text-lg font-medium text-[#20235A]">
                  Material Properties
                </p>

                <p className="mt-2 text-[12px] leading-6 text-[#6C665F] sm:text-[13px]">
                  Understanding stress, strain, elasticity, hardness, and toughness.
                </p>
              </div>

              <div>
                <p className="font-display text-lg font-medium text-[#20235A]">
                  Engineering Applications
                </p>

                <p className="mt-2 text-[12px] leading-6 text-[#6C665F] sm:text-[13px]">
                  Applying material behaviour to the design of safe structures and
                  machine components.
                </p>
              </div>
            </div>

            {/* Bottom Accent */}
            <div className="mt-8 h-1 w-16 bg-[#D2B87C]" />
          </div>
        </section>

        {/* Thermal Laboratory */}
        <section
          id="thermal-lab"
          className="relative overflow-hidden border-b border-[#D8D1C4] bg-[#FAF7F2]"
        >
          <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 sm:py-16 md:px-10 lg:px-16 lg:py-20 xl:px-20">
            {/* Section Heading */}
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-14">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#8F7746] sm:text-[11px]">
                  Laboratory 03 / Thermal Engineering
                </p>

                <h2 className="mt-5 max-w-[600px] font-display text-[38px] font-semibold leading-[1.02] tracking-[-0.035em] text-[#20235A] sm:text-[48px] lg:text-[58px]">
                  Thermal{" "}
                  <span className="font-normal italic text-[#8F7746]">
                    Laboratory.
                  </span>
                </h2>

                <div className="mt-6 h-px w-16 bg-[#D2B87C]" />
              </div>

              {/* Laboratory Description */}
              <div className="lg:pb-1">
                <p className="text-[14px] text-justify leading-7 text-[#4F4A46] sm:text-[15px] sm:leading-8">
                  The Thermal Lab explores the conversion of energy into work,
                  primarily through the study of internal combustion engines. It
                  features setups for testing the performance of{" "}
                  <span className="font-semibold text-[#20235A]">
                    petrol and diesel engines
                  </span>
                  , including multi-cylinder test rigs to calculate thermal
                  efficiency. Students also study the properties of fuels and the
                  behaviour of steam in power cycles. This data is essential for
                  improving engine performance and reducing emissions.
                </p>
              </div>
            </div>

            {/* Laboratory Image Gallery */}
            <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:mt-14">
              {/* Image 1 */}
              <div className="group relative">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#F0ECE3] sm:aspect-[5/4]">
                  <Image
                    src="\images\dpt\mechanical-engineering\lab\lab27.webp"
                    alt="Thermal laboratory equipment for engine performance testing"
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#17172D]/45 via-transparent to-transparent" />

                  <div className="absolute bottom-0 left-0 p-5 sm:p-7">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#E8D5A7] sm:text-[10px]">
                      Engine Testing
                    </p>

                    <p className="mt-2 font-display text-xl text-white sm:text-2xl">
                      Internal Combustion Engines
                    </p>
                  </div>
                </div>
              </div>

              {/* Image 2 */}
              <div className="group relative sm:mt-10">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#F0ECE3] sm:aspect-[5/4]">
                  <Image
                    src="\images\dpt\mechanical-engineering\lab\lab28.webp"
                    alt="Thermal engineering laboratory setup for practical experiments"
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover "
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#17172D]/45 via-transparent to-transparent" />

                  <div className="absolute bottom-0 left-0 p-5 sm:p-7">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#E8D5A7] sm:text-[10px]">
                      Energy & Efficiency
                    </p>

                    <p className="mt-2 font-display text-xl text-white sm:text-2xl">
                      Thermal Performance Studies
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Learning Areas */}
            <div className="mt-8 grid gap-6 border-t border-[#D8D1C4] pt-7 sm:mt-10 sm:grid-cols-3 sm:gap-8 sm:pt-8">
              <div>
                <p className="font-display text-lg font-medium text-[#20235A]">
                  Engine Performance
                </p>

                <p className="mt-2 text-[12px] leading-6 text-[#6C665F] sm:text-[13px]">
                  Testing petrol and diesel engines to understand their performance.
                </p>
              </div>

              <div>
                <p className="font-display text-lg font-medium text-[#20235A]">
                  Thermal Efficiency
                </p>

                <p className="mt-2 text-[12px] leading-6 text-[#6C665F] sm:text-[13px]">
                  Studying multi-cylinder test rigs and energy conversion.
                </p>
              </div>

              <div>
                <p className="font-display text-lg font-medium text-[#20235A]">
                  Fuels & Power Cycles
                </p>

                <p className="mt-2 text-[12px] leading-6 text-[#6C665F] sm:text-[13px]">
                  Exploring fuel properties and steam behaviour in power cycles.
                </p>
              </div>
            </div>

            {/* Bottom Accent */}
            <div className="mt-8 h-1 w-16 bg-[#D2B87C]" />
          </div>
        </section>

        <section
          id="cnc-manufacturing-lab"
          className="relative overflow-hidden border-b border-[#D8D1C4] bg-[#FAF7F2]"
        >
          <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 sm:py-16 md:px-10 lg:px-16 lg:py-20 xl:px-20">
            {/* Section Heading and Description */}
            <div className="grid gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-16">
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#8F7746]" />
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8F7746] sm:text-[11px]">
                    Laboratory 04 / Advanced Manufacturing
                  </p>
                </div>

                <h2 className="max-w-[620px] font-display text-[38px] font-semibold leading-[1.02] tracking-[-0.035em] text-[#20235A] sm:text-[48px] lg:text-[58px]">
                  CNC{" "}
                  <span className="font-normal italic text-[#8F7746]">
                    Manufacturing Lab.
                  </span>
                </h2>

                <div className="mt-6 h-[3px] w-16 bg-[#D2B87C]" />
              </div>

              <div className="max-w-[650px] lg:justify-self-end">
                <p className="text-[14px] text-justify leading-7 text-[#625C55] sm:text-[15px] sm:leading-8">
                  This facility transitions from manual machining to{" "}
                  <span className="font-medium text-[#20235A]">
                    automated, high-precision manufacturing.
                  </span>{" "}
                  It houses Computer Numerical Control (CNC) lathes and milling
                  machines programmed to execute complex cuts with exceptional
                  accuracy. Students learn to write G-code and M-code to automate
                  the production of intricate parts, gaining an understanding of
                  modern industrial standards for mass production and precision
                  engineering.
                </p>
              </div>
            </div>

            {/* Laboratory Image Gallery */}
            <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:mt-16">
              {/* Image 1 */}
              <div className="group">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#F0ECE3] sm:aspect-[5/4]">
                  <Image
                    src="\images\dpt\mechanical-engineering\lab\lab11.webp"
                    alt="CNC lathe machine used for precision manufacturing in the mechanical engineering laboratory"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                    className="object-contain "
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#11162D]/85 via-[#11162D]/10 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 lg:p-8">
                    <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#D2B87C] sm:text-[10px]">
                      Precision Machining
                    </p>
                    <h3 className="font-display text-[25px] font-medium leading-tight text-white sm:text-[30px] lg:text-[34px]">
                      CNC Lathe Operations
                    </h3>
                    <p className="mt-2 text-[12px] leading-5 text-white/75 sm:text-[13px]">
                      Automated Turning & Component Production
                    </p>
                  </div>
                </div>
              </div>

              {/* Image 2 */}
              <div className="group">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#F0ECE3] sm:aspect-[5/4]">
                  <Image
                    src="\images\dpt\mechanical-engineering\lab\lab12.webp"
                    alt="CNC milling machine setup for computer-controlled precision engineering"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                    className="object-contain "
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#11162D]/85 via-[#11162D]/10 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 lg:p-8">
                    <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#D2B87C] sm:text-[10px]">
                      Computer-Controlled Production
                    </p>
                    <h3 className="font-display text-[25px] font-medium leading-tight text-white sm:text-[30px] lg:text-[34px]">
                      CNC Milling
                    </h3>
                    <p className="mt-2 text-[12px] leading-5 text-white/75 sm:text-[13px]">
                      G-code, M-code & Complex Components
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Learning Areas */}
            <div className="mt-10 border-t border-[#D8D1C4] pt-6 sm:mt-12 sm:pt-7 lg:mt-14">
              <div className="grid gap-6 sm:grid-cols-3 sm:gap-5">
                <div className="flex items-start gap-3">
                  <span className="mt-[3px] font-display text-[20px] italic text-[#8F7746]">
                    01
                  </span>
                  <div>
                    <h3 className="text-[12px] font-semibold text-[#20235A] sm:text-[13px]">
                      CNC Programming
                    </h3>
                    <p className="mt-1 text-[12px] leading-5 text-[#756E65]">
                      G-code, M-code & Machine Control
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-[3px] font-display text-[20px] italic text-[#8F7746]">
                    02
                  </span>
                  <div>
                    <h3 className="text-[12px] font-semibold text-[#20235A] sm:text-[13px]">
                      Precision Manufacturing
                    </h3>
                    <p className="mt-1 text-[12px] leading-5 text-[#756E65]">
                      Automated Turning & Milling
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-[3px] font-display text-[20px] italic text-[#8F7746]">
                    03
                  </span>
                  <div>
                    <h3 className="text-[12px] font-semibold text-[#20235A] sm:text-[13px]">
                      Industrial Applications
                    </h3>
                    <p className="mt-1 text-[12px] leading-5 text-[#756E65]">
                      Complex Parts & Mass Production
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Accent */}
          <div className="h-[3px] w-full bg-gradient-to-r from-[#20235A] via-[#D2B87C] to-transparent" />
        </section>
        {/* ------instrumentation lab------- */}


        <section
          id="instrumentation-lab"
          className="relative overflow-hidden border-b border-[#D8D1C4] bg-[#FAF7F2]"
        >
          <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 sm:py-16 md:px-10 lg:px-16 lg:py-20 xl:px-20">
            {/* Section Heading */}
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-14">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#8F7746] sm:text-[11px]">
                  Laboratory 05 / Measurement &amp; Control
                </p>

                <h2 className="mt-5 max-w-[600px] font-display text-[38px] font-semibold leading-[1.02] tracking-[-0.035em] text-[#20235A] sm:text-[48px] lg:text-[58px]">
                  Instrumentation{" "}
                  <span className="font-normal italic text-[#8F7746]">
                    Lab.
                  </span>
                </h2>

                <div className="mt-6 h-px w-16 bg-[#D2B87C]" />
              </div>

              {/* Laboratory Description */}
              <div className="lg:pb-1">
                <p className="text-[14px] text-justify leading-7 text-[#4F4A46] sm:text-[15px] sm:leading-8">
                  The Instrumentation Lab is dedicated to the science of measurement
                  and control systems. Students learn to use sensors and transducers
                  to measure physical variables like{" "}
                  <span className="font-semibold text-[#20235A]">
                    pressure, temperature, displacement, and vibration
                  </span>
                  . The lab also involves integrating these sensors with data
                  acquisition systems and microcontrollers. Understanding these tools
                  is crucial for monitoring industrial processes and ensuring machine
                  health.
                </p>
              </div>
            </div>

            {/* Laboratory Image Gallery */}
            <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:mt-14">
              {/* Image 1 */}
              <div className="group relative">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#F0ECE3] sm:aspect-[5/4]">
                  <Image
                    src="\images\dpt\mechanical-engineering\lab\lab17.webp"
                    alt="Instrumentation laboratory equipment for measuring physical parameters"
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#17172D]/45 via-transparent to-transparent" />

                  <div className="absolute bottom-0 left-0 p-5 sm:p-7">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#E8D5A7] sm:text-[10px]">
                      Sensors &amp; Transducers
                    </p>

                    <p className="mt-2 font-display text-xl text-white sm:text-2xl">
                      Precision Measurement
                    </p>
                  </div>
                </div>
              </div>

              {/* Image 2 — Offset Downward */}
              <div className="group relative sm:mt-10">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#F0ECE3] sm:aspect-[5/4]">
                  <Image
                    src="\images\dpt\mechanical-engineering\lab\lab18.webp"
                    alt="Instrumentation and data acquisition setup for industrial monitoring"
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#17172D]/45 via-transparent to-transparent" />

                  <div className="absolute bottom-0 left-0 p-5 sm:p-7">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#E8D5A7] sm:text-[10px]">
                      Monitoring &amp; Control
                    </p>

                    <p className="mt-2 font-display text-xl text-white sm:text-2xl">
                      Data Acquisition Systems
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Learning Areas */}
            <div className="mt-8 grid gap-6 border-t border-[#D8D1C4] pt-7 sm:mt-10 sm:grid-cols-3 sm:gap-8 sm:pt-8">
              <div>
                <p className="font-display text-lg font-medium text-[#20235A]">
                  Sensor Technology
                </p>

                <p className="mt-2 text-[12px] leading-6 text-[#6C665F] sm:text-[13px]">
                  Understanding sensors and transducers for accurate physical
                  measurements.
                </p>
              </div>

              <div>
                <p className="font-display text-lg font-medium text-[#20235A]">
                  Measurement Systems
                </p>

                <p className="mt-2 text-[12px] leading-6 text-[#6C665F] sm:text-[13px]">
                  Measuring pressure, temperature, displacement, and vibration.
                </p>
              </div>

              <div>
                <p className="font-display text-lg font-medium text-[#20235A]">
                  Industrial Monitoring
                </p>

                <p className="mt-2 text-[12px] leading-6 text-[#6C665F] sm:text-[13px]">
                  Integrating data acquisition systems and microcontrollers to
                  monitor machine health.
                </p>
              </div>
            </div>

            {/* Bottom Accent */}
            <div className="mt-8 h-1 w-16 bg-[#D2B87C]" />
          </div>
        </section>

        {/* --------production lab------- */}
        <section
          id="production-lab"
          className="relative overflow-hidden border-b border-[#D8D1C4] bg-[#FAF7F2]"
        >
          <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 sm:py-16 md:px-10 lg:px-16 lg:py-20 xl:px-20">
            {/* Section Heading */}
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-14">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#8F7746] sm:text-[11px]">
                  Laboratory 06 / Manufacturing &amp; Metrology
                </p>

                <h2 className="mt-5 max-w-[600px] font-display text-[38px] font-semibold leading-[1.02] tracking-[-0.035em] text-[#20235A] sm:text-[48px] lg:text-[58px]">
                  Production{" "}
                  <span className="font-normal italic text-[#8F7746]">
                    Lab.
                  </span>
                </h2>

                <div className="mt-6 h-px w-16 bg-[#D2B87C]" />
              </div>

              {/* Laboratory Description */}
              <div className="lg:pb-1">
                <p className="text-[14px] text-justify leading-7 text-[#4F4A46] sm:text-[15px] sm:leading-8">
                  This lab dives deeper into the technical aspects of manufacturing processes and metrology. It focuses on the study of{" "}
                  <span className="font-semibold text-[#20235A]">
                    tool geometry, chip formation, and the mechanics of metal cutting
                  </span>
                  . Additionally, it includes precision measurement tools like micrometers, sine bars, and profile projectors to ensure parts meet strict tolerances. It provides the technical foundation for optimizing factory floor operations.

                </p>
              </div>
            </div>

            {/* Laboratory Image Gallery */}
            <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:mt-14">
              {/* Image 1 */}
              <div className="group relative">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#F0ECE3] sm:aspect-[5/4]">
                  <Image
                    src="\images\dpt\mechanical-engineering\lab\lab23.webp"
                    alt="Production laboratory equipment for studying metal cutting and manufacturing processes"
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#17172D]/45 via-transparent to-transparent" />

                  <div className="absolute bottom-0 left-0 p-5 sm:p-7">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#E8D5A7] sm:text-[10px]">
                      Manufacturing Processes
                    </p>

                    <p className="mt-2 font-display text-xl text-white sm:text-2xl">
                      Metal Cutting &amp; Tool Geometry
                    </p>
                  </div>
                </div>
              </div>

              {/* Image 2 — Offset Downward */}
              <div className="group relative sm:mt-10">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#F0ECE3] sm:aspect-[5/4]">
                  <Image
                    src="\images\dpt\mechanical-engineering\lab\lab24.webp"
                    alt="Precision measurement instruments used for dimensional inspection in the production laboratory"
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover "
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#17172D]/45 via-transparent to-transparent" />

                  <div className="absolute bottom-0 left-0 p-5 sm:p-7">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#E8D5A7] sm:text-[10px]">
                      Precision Metrology
                    </p>

                    <p className="mt-2 font-display text-xl text-white sm:text-2xl">
                      Measurement &amp; Inspection
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Learning Areas */}
            <div className="mt-8 grid gap-6 border-t border-[#D8D1C4] pt-7 sm:mt-10 sm:grid-cols-3 sm:gap-8 sm:pt-8">
              <div>
                <p className="font-display text-lg font-medium text-[#20235A]">
                  Metal Cutting
                </p>

                <p className="mt-2 text-[12px] leading-6 text-[#6C665F] sm:text-[13px]">
                  Understanding tool geometry, chip formation, and cutting mechanics.
                </p>
              </div>

              <div>
                <p className="font-display text-lg font-medium text-[#20235A]">
                  Precision Metrology
                </p>

                <p className="mt-2 text-[12px] leading-6 text-[#6C665F] sm:text-[13px]">
                  Using micrometers, sine bars, and profile projectors for accurate
                  measurement.
                </p>
              </div>

              <div>
                <p className="font-display text-lg font-medium text-[#20235A]">
                  Manufacturing Quality
                </p>

                <p className="mt-2 text-[12px] leading-6 text-[#6C665F] sm:text-[13px]">
                  Verifying component dimensions and maintaining manufacturing
                  tolerances.
                </p>
              </div>
            </div>

            {/* Bottom Accent */}
            <div className="mt-8 h-1 w-16 bg-[#D2B87C]" />
          </div>
        </section>
        {/* ------fluid lab------- */}
        <section
          id="fluid-lab"
          className="relative overflow-hidden border-b border-[#D8D1C4] bg-[#FAF7F2]"
        >
          <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 sm:py-16 md:px-10 lg:px-16 lg:py-20 xl:px-20">
            {/* Section Heading */}
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-14">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#8F7746] sm:text-[11px]">
                  Laboratory 07 / Fluid Mechanics
                </p>

                <h2 className="mt-5 max-w-[600px] font-display text-[38px] font-semibold leading-[1.02] tracking-[-0.035em] text-[#20235A] sm:text-[48px] lg:text-[58px]">
                  Fluid{" "}
                  <span className="font-normal italic text-[#8F7746]">
                    Lab.
                  </span>
                </h2>

                <div className="mt-6 h-px w-16 bg-[#D2B87C]" />
              </div>

              {/* Laboratory Description */}
              <div className="lg:pb-1">
                <p className="text-[14px] text-justify leading-7 text-[#4F4A46] sm:text-[15px] sm:leading-8">
                  The Fluid Mechanics lab deals with the behaviour of liquids and gases at rest and in motion. Experimental setups include{" "}
                  <span className="font-semibold text-[#20235A]">
                    Bernoulli&apos;s theorem apparatus, Venturi meters, and orifice
                    plates
                  </span>{" "}
                  to study flow rates and pressure drops. Students also test the performance of hydraulic machinery like centrifugal pumps and various water turbines (Pelton, Francis, Kaplan). These studies are fundamental to designing piping systems and hydroelectric plants.

                </p>
              </div>
            </div>

            {/* Laboratory Image Gallery */}
            <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:mt-14">
              {/* Image 1 */}
              <div className="group relative">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#F0ECE3] sm:aspect-[5/4]">
                  <Image
                    src="\images\dpt\mechanical-engineering\lab\lab13.webp"
                    alt="Fluid mechanics laboratory apparatus for studying flow rates and pressure variations"
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover "
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#17172D]/45 via-transparent to-transparent" />

                  <div className="absolute bottom-0 left-0 p-5 sm:p-7">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#E8D5A7] sm:text-[10px]">
                      Flow Measurement
                    </p>

                    <p className="mt-2 font-display text-xl text-white sm:text-2xl">
                      Fluid Flow Experiments
                    </p>
                  </div>
                </div>
              </div>

              {/* Image 2 — Offset Downward */}
              <div className="group relative sm:mt-10">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#F0ECE3] sm:aspect-[5/4]">
                  <Image
                    src="\images\dpt\mechanical-engineering\lab\lab14.webp"
                    alt="Hydraulic machinery used to demonstrate pump and water turbine performance"
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover "
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#17172D]/45 via-transparent to-transparent" />

                  <div className="absolute bottom-0 left-0 p-5 sm:p-7">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#E8D5A7] sm:text-[10px]">
                      Hydraulic Machinery
                    </p>

                    <p className="mt-2 font-display text-xl text-white sm:text-2xl">
                      Pumps &amp; Water Turbines
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Learning Areas */}
            <div className="mt-8 grid gap-6 border-t border-[#D8D1C4] pt-7 sm:mt-10 sm:grid-cols-3 sm:gap-8 sm:pt-8">
              <div>
                <p className="font-display text-lg font-medium text-[#20235A]">
                  Fluid Flow Analysis
                </p>

                <p className="mt-2 text-[12px] leading-6 text-[#6C665F] sm:text-[13px]">
                  Investigating Bernoulli&apos;s theorem, flow rates, and pressure
                  variations using experimental apparatus.
                </p>
              </div>

              <div>
                <p className="font-display text-lg font-medium text-[#20235A]">
                  Hydraulic Machinery
                </p>

                <p className="mt-2 text-[12px] leading-6 text-[#6C665F] sm:text-[13px]">
                  Studying centrifugal pumps and Pelton, Francis, and Kaplan turbines.
                </p>
              </div>

              <div>
                <p className="font-display text-lg font-medium text-[#20235A]">
                  Engineering Applications
                </p>

                <p className="mt-2 text-[12px] leading-6 text-[#6C665F] sm:text-[13px]">
                  Applying fluid mechanics principles to piping systems and
                  hydroelectric power generation.
                </p>
              </div>
            </div>

            {/* Bottom Accent */}
            <div className="mt-8 h-1 w-16 bg-[#D2B87C]" />
          </div>
        </section>

        {/* -------Heat transfer lab------ */}
        <section
          id="heat-transfer-lab"
          className="relative overflow-hidden border-b border-[#D8D1C4] bg-[#FAF7F2]"
        >
          <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 sm:py-16 md:px-10 lg:px-16 lg:py-20 xl:px-20">
            {/* Section Heading */}
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-14">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#8F7746] sm:text-[11px]">
                  Laboratory 08 / Thermal Sciences
                </p>

                <h2 className="mt-5 max-w-[600px] font-display text-[38px] font-semibold leading-[1.02] tracking-[-0.035em] text-[#20235A] sm:text-[48px] lg:text-[58px]">
                  Heat Transfer{" "}
                  <span className="font-normal italic text-[#8F7746]">
                    Lab.
                  </span>
                </h2>

                <div className="mt-6 h-px w-16 bg-[#D2B87C]" />
              </div>

              {/* Laboratory Description */}
              <div className="lg:pb-1">
                <p className="text-[14px] text-justify leading-7 text-[#4F4A46] sm:text-[15px] sm:leading-8">
                  The Heat Transfer Lab investigates the three modes of energy
                  exchange:{" "}
                  <span className="font-semibold text-[#20235A]">
                    conduction, convection, and radiation.
                  </span>{" "}
                  Experiments involve measuring the thermal conductivity of solids
                  and observing heat exchange in parallel-flow and counter-flow heat
                  exchangers. Students analyze how different materials and surface
                  geometries influence heating and cooling rates. This knowledge
                  supports the design of radiators, refrigerators, and electronic
                  cooling systems.
                </p>
              </div>
            </div>

            {/* Laboratory Image Gallery */}
            <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:mt-14">
              {/* Image 1 */}
              <div className="group relative">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#F0ECE3] sm:aspect-[5/4]">
                  <Image
                    src="\images\dpt\mechanical-engineering\lab\lab15.webp"
                    alt="Heat transfer laboratory apparatus for studying thermal conductivity and heat conduction"
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover "
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#17172D]/45 via-transparent to-transparent" />

                  <div className="absolute bottom-0 left-0 p-5 sm:p-7">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#E8D5A7] sm:text-[10px]">
                      Thermal Conduction
                    </p>

                    <p className="mt-2 font-display text-xl text-white sm:text-2xl">
                      Heat Transfer Experiments
                    </p>
                  </div>
                </div>
              </div>

              {/* Image 2 — Offset Downward */}
              <div className="group relative sm:mt-10">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#F0ECE3] sm:aspect-[5/4]">
                  <Image
                    src="\images\dpt\mechanical-engineering\lab\lab16.webp"
                    alt="Heat exchanger apparatus used to study parallel-flow and counter-flow heat transfer"
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover "
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#17172D]/45 via-transparent to-transparent" />

                  <div className="absolute bottom-0 left-0 p-5 sm:p-7">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#E8D5A7] sm:text-[10px]">
                      Heat Exchangers
                    </p>

                    <p className="mt-2 font-display text-xl text-white sm:text-2xl">
                      Thermal System Applications
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Learning Areas */}
            <div className="mt-8 grid gap-6 border-t border-[#D8D1C4] pt-7 sm:mt-10 sm:grid-cols-3 sm:gap-8 sm:pt-8">
              <div>
                <p className="font-display text-lg font-medium text-[#20235A]">
                  Modes of Heat Transfer
                </p>

                <p className="mt-2 text-[12px] leading-6 text-[#6C665F] sm:text-[13px]">
                  Exploring conduction, convection, and radiation through practical
                  experiments.
                </p>
              </div>

              <div>
                <p className="font-display text-lg font-medium text-[#20235A]">
                  Thermal Conductivity
                </p>

                <p className="mt-2 text-[12px] leading-6 text-[#6C665F] sm:text-[13px]">
                  Investigating heat flow through solids and evaluating heat exchanger
                  performance.
                </p>
              </div>

              <div>
                <p className="font-display text-lg font-medium text-[#20235A]">
                  Cooling System Design
                </p>

                <p className="mt-2 text-[12px] leading-6 text-[#6C665F] sm:text-[13px]">
                  Applying heat transfer principles to radiators, refrigeration, and
                  electronic cooling systems.
                </p>
              </div>
            </div>

            {/* Bottom Accent */}
            <div className="mt-8 h-1 w-16 bg-[#D2B87C]" />
          </div>
        </section>

        {/* -cad lab- */}


        <section
          id="cad-lab"
          className="relative overflow-hidden border-b border-[#D8D1C4] bg-[#FAF7F2]"
        >
          <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 sm:py-16 md:px-10 lg:px-16 lg:py-20 xl:px-20">

            {/* Heading and Description */}
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-14">

              {/* Section Heading */}
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-[#D2B87C]" />
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8F7746] sm:text-xs">
                    Laboratory 09 / Computer-Aided Design
                  </p>
                </div>

                <h2 className="mt-5 font-display text-[38px] leading-[1.08] tracking-tight text-[#20235A] sm:text-[48px] lg:text-[58px]">
                  CAD{" "}
                  <span className="font-normal italic text-[#8F7746]">
                    Lab.
                  </span>
                </h2>
              </div>

              {/* Section Description */}
              <div className="lg:pb-1">
                <p className="max-w-2xl text-[14px] text-justify leading-7 text-[#5F5A53] sm:text-[15px] sm:leading-8">
                  The Computer - Aided Design (CAD) lab is a digital workspace for modeling and simulating mechanical systems. Using professional software like SolidWorks, AutoCAD, or CATIA, students create 3D representations of complex assemblies. The lab also introduces finite element analysis (FEA) to simulate how these designs would react to real-world forces. It is the primary environment for the conceptual and detail-design phases of engineering.

                </p>
              </div>
            </div>

            {/* Single CAD Lab Image */}
            <div className="mt-10 sm:mt-12 lg:mt-14">
              <div className="group relative aspect-[4/3] w-full overflow-hidden bg-[#F0ECE3] sm:aspect-[16/7]">

                <Image
                  src="\images\dpt\mechanical-engineering\lab\lab10.webp"
                  alt="Mechanical Engineering CAD laboratory"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1440px"
                  className="object-cover "
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#20235A]/85 via-[#20235A]/20 to-transparent" />

                {/* Image Caption */}
                <div className="absolute bottom-0 left-0 p-5 sm:p-8 lg:p-10">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C] sm:text-xs">
                    Digital Design
                  </p>

                  <h3 className="mt-2 max-w-2xl font-display text-2xl leading-tight text-white sm:text-3xl lg:text-4xl">
                    3D Modeling &amp; Engineering Simulation
                  </h3>
                </div>
              </div>
            </div>

            {/* Key Learning Areas */}
            <div className="mt-8 grid gap-6 border-t border-[#D8D1C4] pt-7 sm:mt-10 sm:grid-cols-3 sm:gap-8 sm:pt-8">

              {/* Learning Area 01 */}
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                  01 / Design
                </p>

                <h3 className="mt-3 font-display text-xl text-[#20235A] sm:text-2xl">
                  3D Modeling &amp; Design
                </h3>

                <p className="mt-2 text-sm leading-7 text-[#6C665F]">
                  Develop three-dimensional models and detailed mechanical
                  components using industry-standard CAD software.
                </p>
              </div>

              {/* Learning Area 02 */}
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                  02 / Simulation
                </p>

                <h3 className="mt-3 font-display text-xl text-[#20235A] sm:text-2xl">
                  Engineering Simulation
                </h3>

                <p className="mt-2 text-sm leading-7 text-[#6C665F]">
                  Explore finite element analysis to understand how mechanical
                  components respond to forces and operating conditions.
                </p>
              </div>

              {/* Learning Area 03 */}
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                  03 / Development
                </p>

                <h3 className="mt-3 font-display text-xl text-[#20235A] sm:text-2xl">
                  Product Development
                </h3>

                <p className="mt-2 text-sm leading-7 text-[#6C665F]">
                  Apply digital design techniques to develop, refine, and
                  communicate engineering concepts before manufacturing.
                </p>
              </div>
            </div>

            {/* Bottom Accent */}
            <div className="mt-8 h-1 w-16 bg-[#D2B87C]" />

          </div>
        </section>

        {/* ------mechanical engineering lab-------- */}


        <section
          id="mechanical-engineering-lab"
          className="relative overflow-hidden border-b border-[#D8D1C4] bg-[#FAF7F2]"
        >
          <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 sm:py-16 md:px-10 lg:px-16 lg:py-20 xl:px-20">

            {/* Heading and Description */}
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-14">

              {/* Section Heading */}
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-[#D2B87C]" />
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8F7746] sm:text-xs">
                    Laboratory 10 / Integrated Mechanical Systems
                  </p>
                </div>

                <h2 className="mt-5 font-display text-[38px] leading-[1.08] tracking-tight text-[#20235A] sm:text-[48px] lg:text-[58px]">
                  Mechanical Engineering{" "}
                  <span className="font-normal italic text-[#8F7746]">
                    Lab.
                  </span>
                </h2>
              </div>

              {/* Section Description */}
              <div className="lg:pb-1">
                <p className="max-w-2xl text-[14px] text-justify leading-7 text-[#5F5A53] sm:text-[15px] sm:leading-8">
                  Often a &quot;capstone&quot; or comprehensive facility, this lab integrates multiple disciplines to study complex mechanical systems. It focuses on the dynamics of machinery, covering topics like governors, gyroscopes, and balancing of rotating masses. Students observe the effects of vibration and friction on mechanical links and mechanisms. It serves as a final proving ground where various engineering principles converge into a single functional system.
                </p>
              </div>
            </div>

            {/* Two-Image Gallery */}
            <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:mt-14">

              {/* Image One */}
              <div className="group relative aspect-[4/3] w-full overflow-hidden bg-[#F0ECE3] sm:aspect-[5/4]">
                <Image
                  src="\images\dpt\mechanical-engineering\lab\lab21.webp"
                  alt="Mechanical Engineering laboratory equipment and experimental setups"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 650px"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#20235A]/85 via-[#20235A]/15 to-transparent" />

                <div className="absolute bottom-0 left-0 p-5 sm:p-7 lg:p-8">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C] sm:text-xs">
                    Experimental Learning
                  </p>

                  <h3 className="mt-2 font-display text-2xl leading-tight text-white sm:text-3xl">
                    Mechanical Systems
                  </h3>
                </div>
              </div>

              {/* Image Two — Offset Gallery */}
              <div className="group relative aspect-[4/3] w-full overflow-hidden bg-[#F0ECE3] sm:mt-10 sm:aspect-[5/4]">
                <Image
                  src="\images\dpt\mechanical-engineering\lab\lab22.webp"
                  alt="Students studying mechanical dynamics and machinery experiments"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 650px"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#20235A]/85 via-[#20235A]/15 to-transparent" />

                <div className="absolute bottom-0 left-0 p-5 sm:p-7 lg:p-8">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C] sm:text-xs">
                    Applied Mechanics
                  </p>

                  <h3 className="mt-2 font-display text-2xl leading-tight text-white sm:text-3xl">
                    Dynamics &amp; Motion
                  </h3>
                </div>
              </div>
            </div>

            {/* Key Learning Areas */}
            <div className="mt-8 grid gap-6 border-t border-[#D8D1C4] pt-7 sm:mt-10 sm:grid-cols-3 sm:gap-8 sm:pt-8">

              {/* Learning Area 01 */}
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                  01 / Dynamics
                </p>

                <h3 className="mt-3 font-display text-xl text-[#20235A] sm:text-2xl">
                  Machinery Dynamics
                </h3>

                <p className="mt-2 text-sm leading-7 text-[#6C665F]">
                  Study governors, gyroscopes, and rotating-mass balancing to
                  understand the behaviour of moving mechanical systems.
                </p>
              </div>

              {/* Learning Area 02 */}
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                  02 / Analysis
                </p>

                <h3 className="mt-3 font-display text-xl text-[#20235A] sm:text-2xl">
                  Vibration &amp; Friction
                </h3>

                <p className="mt-2 text-sm leading-7 text-[#6C665F]">
                  Observe vibration, friction, and motion in mechanical links and
                  mechanisms through practical experiments.
                </p>
              </div>

              {/* Learning Area 03 */}
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                  03 / Integration
                </p>

                <h3 className="mt-3 font-display text-xl text-[#20235A] sm:text-2xl">
                  Integrated Systems
                </h3>

                <p className="mt-2 text-sm leading-7 text-[#6C665F]">
                  Connect engineering principles through experiments involving
                  complete mechanical systems and functional mechanisms.
                </p>
              </div>
            </div>

            {/* Bottom Accent */}
            <div className="mt-8 h-1 w-16 bg-[#D2B87C]" />

          </div>
        </section>




      </main>

      <FooterSection />
    </>
  );
}