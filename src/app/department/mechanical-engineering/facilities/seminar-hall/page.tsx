import Image from "next/image";

import {
  ArrowDownRight,
  ArrowRight,
  CheckCircle2,
  Globe2,
  Mic2,
  Presentation,
  Wifi,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../../DepartmentNav/page";

export const metadata = {
  title: "Mechanical Engineering Seminar Halls | NCERC",
  description:
    "Explore the seminar halls and academic event facilities available at the Mechanical Engineering Department of Nehru College of Engineering and Research Centre.",
  keywords: [
    "engineering colleges thrissur",
    "engineering colleges in thrissur",
    "private engineering colleges in thrissur",
    "top engineering colleges in thrissur",
    "Nehru College of Engineering and Research Centre thrissur",
    "NCERC thrissur",
    "Nehru College thrissur",
    "Nehru College of Engineering thrissur",
    "mechanical engineering seminar halls",
  ],
  robots: { index: true, follow: true },
};

const SEMINAR_HALL_IMAGE_BASE =
  "/images/dpt/mechanical-engineering/facilities/seminarhall";

const seminarHallImages = [
  {
    src: `${SEMINAR_HALL_IMAGE_BASE}/seminar-hall-pic-1.png`,
    alt: "Mechanical Engineering seminar hall view 1",
    number: "01",
    label: "Seminar Hall",
  },
  {
    src: `${SEMINAR_HALL_IMAGE_BASE}/seminar-hall-pic-2.png`,
    alt: "Mechanical Engineering seminar hall view 2",
    number: "02",
    label: "Seminar Hall",
  },
];

function FeatureItem({
  icon: Icon,
  number,
  title,
  description,
}: {
  icon: typeof Wifi;
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

        <Icon
          className="h-6 w-6 text-[#8F7746]"
          strokeWidth={1.5}
        />
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

function SeminarImage({
  image,
  large = false,
}: {
  image: (typeof seminarHallImages)[number];
  large?: boolean;
}) {
  return (
    <div className="group relative">
      {/* Gold offset frame */}
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
              ? "(min-width: 1024px) 70vw, 100vw"
              : "(min-width: 640px) 45vw, 100vw"
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

export default function SeminarHallPage() {
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
                Seminar Halls
                <span className="block text-[#D2B87C]">
                  made for exchange.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                Dedicated spaces for conferences, seminars, presentations and
                academic activities that connect students with ideas,
                knowledge and the wider engineering community.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#seminar-halls"
                  className="inline-flex items-center gap-3 bg-[#D2B87C] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#20235A] transition hover:bg-white"
                >
                  Explore seminar halls
                  <ArrowRight size={16} />
                </a>

                <a
                  href="#facilities"
                  className="inline-flex items-center gap-3 border border-white/25 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:border-[#D2B87C] hover:text-[#D2B87C]"
                >
                  Event facilities
                </a>
              </div>
            </div>

            {/* Hero statement */}
            <div className="lg:col-span-5">
              <div className="relative ml-auto max-w-md border-l border-[#D2B87C]/50 pl-7 sm:pl-9">
                <p className="font-display text-2xl leading-snug text-white sm:text-3xl">
                  Spaces where academic knowledge becomes a shared
                  conversation.
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
          id="facilities"
          className="border-b border-[#D8D1C4]"
        >
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
              {/* Heading */}
              <div className="lg:col-span-5">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8F7746]">
                  Academic Events
                </p>

                <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                  Infrastructure for ideas, interaction and progression.
                </h2>

                <div className="mt-6 h-px w-20 bg-[#D2B87C]" />
              </div>

              {/* Content */}
              <div className="lg:col-span-7">
                <p className="text-lg leading-9 text-[#4F4A46]">
                  The Institute has sufficient seminar-halls (6-Nos) with 150
                  MBps internet facility including Wi-Fi, public address
                  system, projector &amp; other essential facilities which
                  facilitates in conducting International &amp; National
                  conferences/seminars &amp; other activities.
                </p>

                <p className="mt-6 text-[15px] leading-8 text-[#6C665F]">
                  All the infrastructure facilities are provided with a vision
                  to help students to develop their academics and career
                  progression skills.
                </p>

                {/* Feature grid */}
                <div className="mt-10 grid gap-px overflow-hidden border border-[#D8D1C4] bg-[#D8D1C4] sm:grid-cols-3">
                  <FeatureItem
                    icon={Wifi}
                    number="01"
                    title="Connected"
                    description="150 MBps internet facility including Wi-Fi connectivity."
                  />

                  <FeatureItem
                    icon={Presentation}
                    number="02"
                    title="Present"
                    description="Projector and presentation facilities for academic activities."
                  />

                  <FeatureItem
                    icon={Mic2}
                    number="03"
                    title="Communicate"
                    description="Public address systems supporting seminars and conferences."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* KEY FACILITIES                                                   */}
        {/* ================================================================ */}

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
              <div className="lg:col-span-7">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8F7746]">
                  Event Infrastructure
                </p>

                <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                  Built for meaningful academic exchange.
                </h2>

                <div className="mt-6 h-px w-20 bg-[#D2B87C]" />
              </div>

              <div className="lg:col-span-5">
                <p className="text-[15px] leading-8 text-[#6C665F]">
                  Seminar halls provide a dedicated setting for students,
                  faculty members and visiting experts to share knowledge,
                  conduct presentations and participate in academic events.
                </p>
              </div>
            </div>

            <div className="mt-14 grid gap-px overflow-hidden border border-[#D8D1C4] bg-[#D8D1C4] sm:grid-cols-2 lg:grid-cols-4">
              <div className="bg-[#FAF7F2] p-7">
                <Globe2
                  className="h-7 w-7 text-[#8F7746]"
                  strokeWidth={1.5}
                />

                <p className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                  01
                </p>

                <h3 className="mt-2 font-display text-xl font-semibold text-[#20235A]">
                  Conferences
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#6C665F]">
                  Suitable infrastructure for national and international
                  academic conferences.
                </p>
              </div>

              <div className="bg-white p-7">
                <Presentation
                  className="h-7 w-7 text-[#8F7746]"
                  strokeWidth={1.5}
                />

                <p className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                  02
                </p>

                <h3 className="mt-2 font-display text-xl font-semibold text-[#20235A]">
                  Seminars
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#6C665F]">
                  Dedicated spaces for seminars, technical sessions and
                  academic programmes.
                </p>
              </div>

              <div className="bg-[#FAF7F2] p-7">
                <Mic2
                  className="h-7 w-7 text-[#8F7746]"
                  strokeWidth={1.5}
                />

                <p className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                  03
                </p>

                <h3 className="mt-2 font-display text-xl font-semibold text-[#20235A]">
                  Presentations
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#6C665F]">
                  Presentation and public address facilities support clear
                  communication.
                </p>
              </div>

              <div className="bg-white p-7">
                <CheckCircle2
                  className="h-7 w-7 text-[#8F7746]"
                  strokeWidth={1.5}
                />

                <p className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                  04
                </p>

                <h3 className="mt-2 font-display text-xl font-semibold text-[#20235A]">
                  Activities
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#6C665F]">
                  Flexible infrastructure supporting a wide range of academic
                  activities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* IMAGE GALLERY                                                    */}
        {/* ================================================================ */}

        <section id="seminar-halls" className="bg-[#FAF7F2]">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
              <div className="lg:col-span-7">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8F7746]">
                  Seminar Hall Gallery
                </p>

                <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                  Spaces ready for the next conversation.
                </h2>

                <div className="mt-6 h-px w-20 bg-[#D2B87C]" />
              </div>

              <div className="lg:col-span-5">
                <p className="text-[15px] leading-8 text-[#6C665F]">
                  Purpose-built spaces provide students and faculty with an
                  environment suitable for presentations, seminars,
                  conferences and collaborative academic activities.
                </p>
              </div>
            </div>

            {/* Images */}
            <div className="mt-14 sm:mt-16">
              {/* Primary image */}
              <div className="mx-auto max-w-5xl">
                <SeminarImage
                  image={seminarHallImages[0]}
                  large
                />
              </div>

              {/* Secondary image */}
              <div className="mt-16 max-w-3xl sm:mt-24 sm:ml-auto">
                <SeminarImage image={seminarHallImages[1]} />
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* DARK STATEMENT                                                   */}
        {/* ================================================================ */}

        <section className="relative overflow-hidden bg-[#20235A]">
          <div className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full border border-white/10" />

          <div className="pointer-events-none absolute bottom-[-140px] left-[-100px] h-80 w-80 rounded-full border border-[#D2B87C]/15" />

          <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
            <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-8">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D2B87C]">
                  Academic &amp; Career Development
                </p>

                <h2 className="mt-5 max-w-4xl font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                  Infrastructure that gives ideas a place to be shared.
                </h2>

                <p className="mt-6 max-w-3xl text-[15px] leading-8 text-white/60">
                  From technical seminars to conferences and other academic
                  activities, the seminar halls create opportunities for
                  students to learn beyond conventional classroom instruction.
                </p>
              </div>

              <div className="lg:col-span-4">
                <div className="border-l border-[#D2B87C]/50 pl-7">
                  <Globe2
                    className="h-7 w-7 text-[#D2B87C]"
                    strokeWidth={1.5}
                  />

                  <p className="mt-5 font-display text-xl leading-snug text-white">
                    Learn.
                    <br />
                    Present.
                    <br />
                    Connect.
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