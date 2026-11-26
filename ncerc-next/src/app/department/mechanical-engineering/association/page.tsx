import Image from "next/image";
import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../DepartmentNav/DepartmentNav";
import { CalendarDays,GraduationCap  } from "lucide-react";
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

      {/* Hero */}

      <section className="relative overflow-hidden bg-[#20235A] text-white">
        <div className="pointer-events-none absolute -right-20 -top-24 h-[340px] w-[340px] rounded-full border border-white/[0.08] sm:h-[480px] sm:w-[480px]" />
        <div className="pointer-events-none absolute -right-8 -top-12 h-[250px] w-[250px] rounded-full border border-[#D2B87C]/20 sm:h-[360px] sm:w-[360px]" />

        <div className="relative mx-auto grid max-w-[1440px] gap-10 px-5 py-14 sm:px-8 sm:py-16 md:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-14 lg:px-16 lg:py-20 xl:px-20 xl:py-24">
          {/* Main heading */}
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C] sm:text-[11px]">
              Mechanical Engineering Department
            </p>

            <h1 className="mt-5 max-w-[850px] font-display text-[43px] font-semibold leading-[0.98] tracking-[-0.035em] text-white sm:text-[55px] lg:text-[67px] xl:text-[75px]">
              Association
              <br />
              <span className="italic font-normal text-[#D2B87C]">
                Connecting Minds.
              </span>
            </h1>

            <p className="mt-7 max-w-[600px] text-[14px] leading-7 text-white/75 sm:text-[15px] sm:leading-8">
              The Mechanical Engineering Association provides a platform for
              interaction, expert knowledge, technical discussions, and meaningful
              academic experiences, connecting students with engineering
              professionals and emerging technologies.
            </p>

          </div>

          {/* Supporting content */}
          <div className="border-t border-white/15 pt-6 lg:ml-auto lg:w-full lg:max-w-[390px]">
            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
              Learning Beyond Lectures
            </p>

            <p className="mt-4 font-display text-[25px] leading-[1.2] text-white sm:text-[29px]">
              Ideas, expertise and experiences that shape future engineers.
            </p>

            <div className="mt-6 flex items-center gap-3 text-[11px] leading-5 text-white/65">
              <span
                aria-hidden="true"
                className="flex h-8 w-8 shrink-0 items-center justify-center border border-[#D2B87C]/50 text-[#D2B87C]"
              >
                01
              </span>
              Technical interaction, expert talks and academic engagement
            </div>
          </div>
        </div>

        <div className="h-1 w-full bg-[#D2B87C]" />
      </section>

      <main className="bg-[#FAF7F2]">
        <InnerHeader />

        {/* Introduction */}
        <section className="border-b border-[#E0D9CF] py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8F7746] sm:text-sm">
                  Department Association
                </p>

                <h2 className="mt-3 max-w-lg font-display text-2xl font-semibold leading-tight text-[#20235A] sm:text-3xl lg:text-4xl">
                  A Space for Engineering Ideas to Meet
                </h2>

                <div className="mt-5 h-px w-14 bg-[#D2B87C]" />
              </div>

              <div className="lg:pt-5">
                <p className="text-sm font-normal leading-7 text-[#5F5A55] sm:text-base sm:leading-7">
                  The Mechanical Engineering Association provides a platform
                  for students and faculty to engage with experts, explore
                  emerging technologies, and participate in meaningful
                  technical activities.
                </p>

                <div className="mt-7 grid gap-6 sm:grid-cols-3">
                  <div className="border-t border-[#D2B87C] pt-3">
                    <p className="font-display text-lg font-semibold text-[#20235A] sm:text-xl">
                      Interaction
                    </p>
                    <p className="mt-2 text-sm font-normal leading-6 text-[#77716A]">
                      Connecting students with engineering professionals.
                    </p>
                  </div>

                  <div className="border-t border-[#D2B87C] pt-3">
                    <p className="font-display text-lg font-semibold text-[#20235A] sm:text-xl">
                      Expertise
                    </p>
                    <p className="mt-2 text-sm font-normal leading-6 text-[#77716A]">
                      Learning through expert talks and discussions.
                    </p>
                  </div>

                  <div className="border-t border-[#D2B87C] pt-3">
                    <p className="font-display text-lg font-semibold text-[#20235A] sm:text-xl">
                      Exposure
                    </p>
                    <p className="mt-2 text-sm font-normal leading-6 text-[#77716A]">
                      Exploring emerging engineering technologies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Association Inauguration 2025–26 */}
        <section
          id="association-inauguration"
          className="border-b border-[#E0D9CF] bg-[#FAF7F2] py-8 sm:py-10 lg:py-12"
        >
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 md:px-10 lg:px-16 xl:px-20">
            {/* Compact section heading */}
            <div className="mb-7 flex flex-col gap-5 border-b border-[#D8D0C3] pb-6 lg:mb-8 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746] sm:text-xs">
                  Association Activities · 2025–26
                </p>

                <h2 className="mt-3 font-display text-2xl font-semibold leading-tight tracking-tight text-[#20235A] sm:text-3xl lg:text-4xl">
                  Association Inauguration
                  <span className="mt-1 block font-normal italic text-[#8F7746]">
                    A New Academic Year Begins.
                  </span>
                </h2>

                <div className="mt-4 h-px w-14 bg-[#D2B87C]" />
              </div>

              <div className="flex flex-wrap gap-x-7 gap-y-3 lg:shrink-0 lg:pb-1">
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.17em] text-[#8F7746]">
                    Date
                  </p>
                  <p className="mt-1 font-display text-base font-semibold text-[#20235A] sm:text-lg">
                    22 September 2025
                  </p>
                </div>

                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.17em] text-[#8F7746]">
                    Venue
                  </p>
                  <p className="mt-1 font-display text-base font-semibold text-[#20235A] sm:text-lg">
                    NCERC Auditorium
                  </p>
                </div>
              </div>
            </div>

            {/* Main content */}
            <div className="grid gap-7 lg:grid-cols-[1fr_0.82fr] lg:items-start lg:gap-10 xl:gap-14">
              {/* Report and schedule */}
              <div className="min-w-0">
                <p className="text-sm leading-7 text-justify text-[#5F5A55] sm:text-[15px] sm:leading-7">
                  The Mechanical Engineering Association Inauguration for the academic year 2025–26 was conducted on 22nd September 2025 in the NCERC Auditorium as per the following schedule:
                </p>

                <div className="mt-6">
                  <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                    Programme Schedule
                  </p>

                  <div className="border-t border-[#D8D0C3]">
                    {[
                      {
                        number: "01",
                        title: "Welcome Address",
                        speaker: "Dr. Benny Paul",
                        role: "Head of the Department, Mechanical Engineering",
                      },
                      {
                        number: "02",
                        title: "Lamp Lighting",
                        speaker: "Er. Jayakumar N",
                        role: "Chief Guest",
                      },
                      {
                        number: "03",
                        title: "Presidential Address",
                        speaker: "Dr. Sudheer S. Marrar",
                        role: "Principal, NCERC",
                      },
                      {
                        number: "04",
                        title: "Inaugural Address",
                        speaker: "Er. Jayakumar N",
                        role: "Instrumentation Ltd., Kanjikode",
                      },
                      {
                        number: "05",
                        title: "Vote of Thanks",
                        speaker: "Student Coordinator",
                        role: "Mechanical Engineering Association",
                      },
                    ].map((item) => (
                      <div
                        key={item.number}
                        className="grid grid-cols-[30px_1fr] gap-3 border-b border-[#D8D0C3] py-3 sm:grid-cols-[36px_1fr] sm:gap-4 sm:py-3.5"
                      >
                        <span className="pt-0.5 font-display text-sm text-[#8F7746]">
                          {item.number}
                        </span>

                        <div>
                          <h3 className="font-display text-base font-semibold leading-6 text-[#20235A] sm:text-lg">
                            {item.title}
                          </h3>

                          <p className="mt-0.5 text-sm font-medium leading-5 text-[#38332F]">
                            {item.speaker}
                          </p>

                          <p className="mt-0.5 text-xs leading-5 text-[#77716A] sm:text-sm">
                            {item.role}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Interactive session */}
                <div className="mt-5 border-l-2 border-[#D2B87C] bg-[#F2EFE8] px-4 py-4 sm:px-5">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                    Beyond the Inauguration
                  </p>

                  <h3 className="mt-1.5 font-display text-lg font-semibold text-[#20235A] sm:text-xl">
                    An Interactive Session
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-justify text-[#5F5A55]">
                    After the official inauguration, the Chief Guest conducted an interactive session with the Mechanical Engineering students, sharing valuable insights on industrial practices and career development.

                  </p>
                </div>
              </div>

              {/* Event photograph */}
              <div className="min-w-0">
                <div className="border border-[#D8D0C3] p-2 sm:p-3">
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#E9E3D8]">
                    <Image
                      src="/images/department/mechanical-engineering/association/association1.webp"
                      alt="Mechanical Engineering Association inauguration for the academic year 2025–26 at NCERC Auditorium"
                      fill
                      sizes="(min-width: 1024px) 44vw, 100vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="flex flex-col gap-2 px-2 py-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#8F7746]">
                        Mechanical Engineering Association
                      </p>
                      <p className="mt-1 font-display text-base font-semibold text-[#20235A] sm:text-lg">
                        Inauguration 2025–26
                      </p>
                    </div>

                    <span className="self-start border border-[#D8D0C3] px-2.5 py-1.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#5F5A55] sm:self-auto">
                      22.09.2025
                    </span>
                  </div>
                </div>

                <p className="mt-3 text-xs leading-5 text-[#77716A]">
                  A gathering dedicated to academic engagement, industry insights
                  and the development of future engineering professionals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Self Charging Hybrid Electric Vehicle Demonstration */}
        <section
          id="hybrid-electric-vehicle"
          className="border-b border-[#E0D9CF] bg-[#FAF7F2] py-8 sm:py-10 lg:py-12"
        >
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 md:px-10 lg:px-16 xl:px-20">
            {/* Section heading */}
            <div className="mb-7 flex flex-col gap-5 border-b border-[#D8D0C3] pb-6 lg:mb-8 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746] sm:text-xs">
                  Mechanical Engineering · Department Activities
                </p>

                <h2 className="mt-3 max-w-3xl font-display text-2xl font-semibold leading-tight tracking-tight text-[#20235A] sm:text-3xl lg:text-4xl">
                  Self Charging Hybrid
                  <span className="mt-1 block font-normal italic text-[#8F7746]">
                    Electric Vehicle Demonstration.
                  </span>
                </h2>

                <div className="mt-4 h-px w-14 bg-[#D2B87C]" />
              </div>

              <div className="flex flex-wrap gap-x-7 gap-y-3 lg:shrink-0 lg:pb-1">
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.17em] text-[#8F7746]">
                    Date
                  </p>
                  <p className="mt-1 font-display text-base font-semibold text-[#20235A] sm:text-lg">
                    17 October 2025
                  </p>
                </div>

                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.17em] text-[#8F7746]">
                    Time
                  </p>
                  <p className="mt-1 font-display text-base font-semibold text-[#20235A] sm:text-lg">
                    11:00 AM
                  </p>
                </div>
              </div>
            </div>

            {/* Programme and image gallery */}
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-10 xl:gap-14">
              {/* Programme schedule */}
              <div className="min-w-0">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                  Programme Schedule
                </p>

                <div className="mt-4 border-t border-[#D8D0C3]">
                  {[
                    {
                      number: "01",
                      title: "Welcome Address",
                      speaker: "Dr. Benny Paul",
                      role: "Professor and Head of Department, Mechanical Engineering",
                    },
                    {
                      number: "02",
                      title: "Inaugural and Presidential Address",
                      speaker: "Dr. Anoop K J",
                      role: "Principal, NCERC",
                    },
                    {
                      number: "03",
                      title: "Felicitation",
                      people: [
                        {
                          name: "Team Lead",
                          role: "Amana Toyota, Mundur",
                        },
                        {
                          name: "Mr. M. Srinivas Nair",
                          role: "Administration Manager / Principal Coordinator, Statutory Works, NCERC",
                        },
                        {
                          name: "Dr. Appadurai",
                          role: "Associate Professor, Mechanical Engineering Department, NCERC",
                        },
                      ],
                    },
                    {
                      number: "04",
                      title: "Vote of Thanks",
                      speaker: "Mr. Ragesh P R",
                      role: "Assistant Professor, Department of Mechanical Engineering",
                    },
                  ].map((item) => (
                    <div
                      key={item.number}
                      className="grid grid-cols-[30px_1fr] gap-3 border-b border-[#D8D0C3] py-4 sm:grid-cols-[36px_1fr] sm:gap-4"
                    >
                      <span className="pt-0.5 font-display text-sm text-[#8F7746]">
                        {item.number}
                      </span>

                      <div className="min-w-0">
                        <h3 className="font-display text-base font-semibold leading-6 text-[#20235A] sm:text-lg">
                          {item.title}
                        </h3>

                        {"people" in item ? (
                          <div className="mt-3 space-y-4">
                            {item.people?.map((person) => (
                              <div key={person.name}>
                                <p className="text-sm font-semibold leading-5 text-[#38332F]">
                                  {person.name}
                                </p>
                                <p className="mt-1 text-xs leading-5 text-[#77716A] sm:text-sm">
                                  {person.role}
                                </p>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <>
                            <p className="mt-1.5 text-sm font-medium leading-5 text-[#38332F]">
                              {item.speaker}
                            </p>
                            <p className="mt-1 text-xs leading-5 text-[#77716A] sm:text-sm">
                              {item.role}
                            </p>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Event details */}
                <div className="mt-5 border-l-2 border-[#D2B87C] bg-[#F2EFE8] px-4 py-4 sm:px-5">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                    Practical Engineering Exposure
                  </p>

                  <h3 className="mt-1.5 font-display text-lg font-semibold text-[#20235A] sm:text-xl">
                    Hybrid Electric Vehicle Demonstration
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#5F5A55]">
                    A departmental programme focused on demonstrating self-charging
                    hybrid electric vehicle technology.
                  </p>
                </div>
              </div>

              {/* Five-image gallery */}
              <div className="min-w-0">
                <div className="mb-4 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                      Event Gallery
                    </p>
                    <h3 className="mt-1.5 font-display text-xl font-semibold text-[#20235A] sm:text-2xl">
                      Moments from the Demonstration
                    </h3>
                  </div>

                  <span className="shrink-0 border border-[#D8D0C3] px-2.5 py-1.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#5F5A55]">
                    05 Photos
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {/* Featured image */}
                  <div className="col-span-2">
                    <div className="relative aspect-[16/9] overflow-hidden bg-[#E9E3D8]">
                      <Image
                        src="/images/department/mechanical-engineering/association/association2.webp"
                        alt="Self charging hybrid electric vehicle demonstration at NCERC"
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover "
                      />
                    </div>
                  </div>

                  {/* Gallery image 2 */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#E9E3D8]">
                    <Image
                      src="/images/department/mechanical-engineering/association/association3.webp"
                      alt="Hybrid electric vehicle demonstration event at NCERC, photograph 2"
                      fill
                      sizes="(min-width: 1024px) 25vw, 50vw"
                      className="object-cover "
                    />
                  </div>

                  {/* Gallery image 3 */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#E9E3D8]">
                    <Image
                      src="/images/department/mechanical-engineering/association/association4.webp"
                      alt="Hybrid electric vehicle demonstration event at NCERC, photograph 3"
                      fill
                      sizes="(min-width: 1024px) 25vw, 50vw"
                      className="object-cover "
                    />
                  </div>

                  {/* Gallery image 4 */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#E9E3D8]">
                    <Image
                      src="/images/department/mechanical-engineering/association/association5.webp"
                      alt="Hybrid electric vehicle demonstration event at NCERC, photograph 4"
                      fill
                      sizes="(min-width: 1024px) 25vw, 50vw"
                      className="object-cover "
                    />
                  </div>

                  {/* Gallery image 5 */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#E9E3D8]">
                    <Image
                      src="/images/department/mechanical-engineering/association/association6.webp"
                      alt="Hybrid electric vehicle demonstration event at NCERC, photograph 5"
                      fill
                      sizes="(min-width: 1024px) 25vw, 50vw"
                      className="object-cover "
                    />
                  </div>
                </div>

                <p className="mt-3 text-xs leading-5 text-[#77716A]">
                  Highlights from the self charging hybrid electric vehicle
                  demonstration programme.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FDP Section */}
        <section
          id="fdp-november-2025"
          className="bg-[#FAF7F2] px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-12"
        >
          <div className="mx-auto max-w-7xl">
            <div className="relative overflow-hidden bg-[#20235A]">
              {/* Decorative accents */}
              <div
                aria-hidden="true"
                className="absolute right-0 top-0 h-28 w-28 border-b border-l border-[#D2B87C]/25 sm:h-40 sm:w-40"
              />

              <div
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-1 w-20 bg-[#D2B87C] sm:w-28"
              />

              <div className="relative z-10 grid grid-cols-1 items-center gap-8 p-6 sm:p-8 md:gap-10 md:p-10 lg:grid-cols-[1fr_0.9fr] lg:gap-12 lg:p-12">
                {/* Left: Event details */}
                <div className="max-w-2xl">
                  <div className="mb-5 flex flex-wrap items-center gap-3">
                    <span className="h-px w-8 bg-[#D2B87C]" />

                    <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C] sm:text-xs">
                      Department of Mechanical Engineering
                    </p>
                  </div>

                  <h2 className="font-display text-2xl font-medium leading-snug text-white sm:text-3xl lg:text-4xl">
                    Faculty Development Programme
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-white/75 sm:text-base">
                    By Dr. Binoy A. Mattamana
                  </p>

                  <div className="mt-6 flex items-center gap-3 border-t border-white/15 pt-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      className="h-5 w-5 shrink-0 text-[#D2B87C]"
                      aria-hidden="true"
                    >
                      <rect x="3" y="5" width="18" height="16" rx="2" />
                      <path d="M16 3v4M8 3v4M3 11h18" />
                    </svg>

                    <p className="text-sm font-medium tracking-wide text-white/90">
                      21 November 2025
                    </p>
                  </div>
                </div>

                {/* Right: Event image */}
                <div className="relative">
                  <div className="relative aspect-[4/3] w-full overflow-hidden border border-white/15 bg-white/5">
                    <Image
                      src="/images/department/mechanical-engineering/association/association7.webp"
                      alt="Faculty Development Programme by Dr. Binoy A. Mattamana"
                      fill
                      sizes="(min-width: 1024px) 42vw, 100vw"
                      className="object-scale-down"
                    />
                  </div>

                  <div
                    aria-hidden="true"
                    className="absolute -bottom-2 -right-2 -z-0 h-16 w-16 border-b-2 border-r-2 border-[#D2B87C]/70"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Talk / FDP Section */}
        <section
          id="tech-talk-november-2025"
          className="bg-[#FAF7F2] px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-12"
        >
          <div className="mx-auto max-w-7xl">
            <div className="overflow-hidden border border-[#E5DED0] bg-white">
              {/* Event Header */}
              <div className="relative overflow-hidden bg-[#20235A] px-6 py-8 sm:px-10 sm:py-10 lg:px-12">
                <div
                  aria-hidden="true"
                  className="absolute right-0 top-0 h-32 w-32 border-b border-l border-[#D2B87C]/25 sm:h-44 sm:w-44"
                />

                <div className="relative z-10 max-w-4xl">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="h-px w-8 bg-[#D2B87C]" />
                    <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C] sm:text-xs">
                      Department of Mechanical Engineering
                    </p>
                  </div>

                  <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-white/60">
                    Event 04
                  </p>

                  <h2 className="font-display text-2xl font-medium leading-snug text-white sm:text-3xl lg:text-4xl">
                    Tech Talk
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-white/75 sm:text-base">
                    By Dr. Binoy A. Mattamana
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/15 pt-5">
                    <div className="flex items-center gap-2.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        className="h-5 w-5 text-[#D2B87C]"
                        aria-hidden="true"
                      >
                        <rect x="3" y="5" width="18" height="16" rx="2" />
                        <path d="M16 3v4M8 3v4M3 11h18" />
                      </svg>
                      <span className="text-sm text-white/90">
                        21–22 November 2025
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Event Details and Image */}
              <div className="grid grid-cols-1 gap-8 p-6 sm:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:p-10">
                {/* Left Column */}
                <div>
                  <div className="mb-6">
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                      Programme details
                    </p>
                    <h3 className="font-display text-xl font-medium text-[#20235A] sm:text-2xl">
                      Sessions & Resource Person
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {/* Session 01 */}
                    <div className="border border-[#E5DED0] bg-[#FAF7F2] p-5 sm:p-6">
                      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8F7746]">
                          Session 01
                        </span>
                        <span className="border border-[#D2B87C]/60 px-3 py-1 text-xs font-medium text-[#20235A]">
                          21 November 2025 · AN
                        </span>
                      </div>

                      <h4 className="font-display text-lg font-medium leading-snug text-[#20235A] sm:text-xl">
                        Bioinspired Building Materials
                      </h4>

                      <div className="mt-4 border-t border-[#E5DED0] pt-4">
                        <p className="text-sm font-semibold text-[#1E1917]">
                          Dr. Binoy Alias Mattamana
                        </p>
                        <p className="mt-1 text-sm leading-6 text-[#6B6255]">
                          Ph.D., IISc Bangalore · Retired Professor, MACE
                        </p>
                      </div>
                    </div>

                    {/* Session 02 */}
                    <div className="border border-[#E5DED0] bg-[#FAF7F2] p-5 sm:p-6">
                      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8F7746]">
                          Session 02
                        </span>
                        <span className="border border-[#D2B87C]/60 px-3 py-1 text-xs font-medium text-[#20235A]">
                          22 November 2025 · FN
                        </span>
                      </div>

                      <h4 className="font-display text-lg font-medium leading-snug text-[#20235A] sm:text-xl">
                        Stress Management for Engineering Students
                      </h4>

                      <div className="mt-4 border-t border-[#E5DED0] pt-4">
                        <p className="text-sm font-semibold text-[#1E1917]">
                          Dr. Binoy Alias Mattamana
                        </p>
                        <p className="mt-1 text-sm leading-6 text-[#6B6255]">
                          Ph.D., IISc Bangalore; Post Graduate Diploma in Psychology
                          and Counselling, Indian Institute of Psychological
                          Counselling, New Delhi · Retired Professor, MACE
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: Image and resource person */}
                <div className="flex flex-col gap-6">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F0ECE3]">
                    <Image
                      src="/images/department/mechanical-engineering/association/association8.webp"
                      alt="Tech Talk by Dr. Binoy Alias Mattamana"
                      fill
                      sizes="(min-width: 1024px) 42vw, 100vw"
                      className="object-contain object-center"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#20235A]/50 to-transparent" />
                  </div>

                  <div className="border-l-2 border-[#D2B87C] pl-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                      Resource Person
                    </p>
                    <h3 className="mt-2 font-display text-xl font-medium text-[#20235A]">
                      Dr. Binoy Alias Mattamana
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[#6B6255]">
                      Ph.D., IISc Bangalore
                    </p>
                    <p className="text-sm leading-6 text-[#6B6255]">
                      Retired Professor, MACE
                    </p>
                  </div>
                </div>
              </div>

              {/* Programme Report */}
              <div className="border-t border-[#E5DED0] px-6 py-8 sm:px-8 lg:px-10 lg:py-9">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-[180px_1fr] md:gap-10">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                      Event Report
                    </p>
                    <h3 className="mt-2 font-display text-xl font-medium text-[#20235A]">
                      About the Programme
                    </h3>
                  </div>

                  <div className="space-y-4 text-sm text-justify leading-7 text-[#514A40] sm:text-base">
                    <p>
                      The Department of Mechanical Engineering (Industry Integrated), Nehru College of Engineering and Research Centre (Autonomous), Pampady, Thiruvilwamala, Thrissur, organised a Faculty Development Programme (FDP) on “Bioinspired Materials” on 21st November 2025 at the Seminar Hall. The programme was conducted with the objective of enhancing faculty awareness and understanding of advanced material systems inspired by natural phenomena.

                    </p>

                    <p>
                      The FDP featured an expert talk by Dr. Binoy Alias Mattamana, Professor (Retd.), M.A. College of Engineering, Kothamangalam, who served as the Chief Guest and resource person. The session began with an introduction to bioinspiration and biomimicry, explaining how nature serves as an efficient model for designing advanced engineering materials. The speaker discussed various examples from nature, such as lotus leaf surfaces, spider silk, and bone structures, and explained how their unique properties can be translated into engineering applications.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom accent */}
              <div className="h-1 w-full bg-[#D2B87C]" />
            </div>
          </div>
        </section>

        {/* NSITE – ME Students' Work */}
        <section
          id="nsite-me-students-work"
          className="bg-[#FAF7F2] px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-12"
        >
          <div className="mx-auto max-w-7xl">
            {/* Section Heading */}
            <div className="mb-7 flex flex-col gap-3 sm:mb-9 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#8F7746]" />
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8F7746] sm:text-xs">
                    Department of Mechanical Engineering
                  </p>
                </div>

                <h2 className="font-display text-2xl font-medium leading-snug text-[#20235A] sm:text-3xl lg:text-4xl">
                  NSITE – ME Students’ Work
                </h2>

                <p className="mt-2 text-sm leading-6 text-[#6B6255] sm:text-base">
                  A before-and-after view of the students’ work.
                </p>
              </div>

              <div className="flex items-center gap-2 self-start sm:self-auto">
                <span className="h-2 w-2 bg-[#D2B87C]" />
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#20235A]">
                  Before & After
                </span>
              </div>
            </div>

            {/* Before / After Comparison */}
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-7">
              {/* Before */}
              <div className="border border-[#E5DED0] bg-white p-3 sm:p-4">
                <div className="mb-4 flex items-center justify-between px-1">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center bg-[#F0ECE3] font-display text-base text-[#20235A]">
                      01
                    </span>

                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#20235A]">
                        Before
                      </h3>
                      <p className="mt-1 text-xs text-[#8A8174]">
                        Original condition
                      </p>
                    </div>
                  </div>

                  <span className="h-px w-8 bg-[#D2B87C]" />
                </div>

                <div className="relative aspect-[4/3] overflow-hidden bg-[#F0ECE3]">
                  <Image
                    src="/images/department/mechanical-engineering/association/association9.webp"
                    alt="NSITE Mechanical Engineering students' work before"
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>

              {/* After */}
              <div className="border border-[#E5DED0] bg-white p-3 sm:p-4">
                <div className="mb-4 flex items-center justify-between px-1">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center bg-[#20235A] font-display text-base text-white">
                      02
                    </span>

                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#20235A]">
                        After
                      </h3>
                      <p className="mt-1 text-xs text-[#8A8174]">
                        Completed work
                      </p>
                    </div>
                  </div>

                  <span className="h-px w-8 bg-[#D2B87C]" />
                </div>

                {/* Two After Images */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative aspect-[3/4] overflow-hidden bg-[#F0ECE3]">
                    <Image
                      src="/images/department/mechanical-engineering/association/association10.webp"
                      alt="NSITE Mechanical Engineering students' work after, view one"
                      fill
                      sizes="(min-width: 1024px) 22vw, 50vw"
                      className="object-cover object-center"
                    />
                  </div>

                  <div className="relative aspect-[3/4] overflow-hidden bg-[#F0ECE3]">
                    <Image
                      src="/images/department/mechanical-engineering/association/association11.webp"
                      alt="NSITE Mechanical Engineering students' work after, view two"
                      fill
                      sizes="(min-width: 1024px) 22vw, 50vw"
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Accent */}
            <div className="mt-6 h-px w-full bg-[#D2B87C]/60" />
          </div>
        </section>

        {/* Embedded Systems with IoT Workshop */}
        <section
          id="embedded-systems-iot-workshop"
          className="bg-[#FAF7F2] px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-12"
        >
          <div className="mx-auto max-w-7xl">
            <div className="overflow-hidden border border-[#E5DED0] bg-white">
              {/* Workshop Header */}
              <div className="relative overflow-hidden bg-[#20235A] px-6 py-8 sm:px-10 sm:py-10 lg:px-12">
                <div
                  aria-hidden="true"
                  className="absolute right-0 top-0 h-28 w-28 border-b border-l border-[#D2B87C]/25 sm:h-40 sm:w-40"
                />

                <div
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-1 w-20 bg-[#D2B87C] sm:w-28"
                />

                <div className="relative z-10 max-w-4xl">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="h-px w-8 bg-[#D2B87C]" />

                    <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C] sm:text-xs">
                      Department of Mechanical Engineering
                    </p>
                  </div>

                  <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-white/60">
                    Workshop 06
                  </p>

                  <h2 className="font-display text-2xl font-medium leading-snug text-white sm:text-3xl lg:text-4xl">
                    Embedded Systems with IoT
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-white/75 sm:text-base">
                    Workshop by Mr. Suresh P
                  </p>

                  <div className="mt-6 flex items-center gap-3 border-t border-white/15 pt-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      className="h-5 w-5 shrink-0 text-[#D2B87C]"
                      aria-hidden="true"
                    >
                      <rect x="3" y="5" width="18" height="16" rx="2" />
                      <path d="M16 3v4M8 3v4M3 11h18" />
                    </svg>

                    <p className="text-sm font-medium tracking-wide text-white/90">
                      6 February 2026
                    </p>
                  </div>
                </div>
              </div>

              {/* Workshop Gallery */}
              <div className="p-5 sm:p-7 lg:p-9">
                <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                      Workshop Gallery
                    </p>

                    <h3 className="mt-2 font-display text-xl font-medium text-[#20235A] sm:text-2xl">
                      Moments from the Workshop
                    </h3>
                  </div>

                  <p className="text-xs text-[#8A8174]">
                    3 photographs
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
                  {/* Photo 1 */}
                  <div className="group relative aspect-[4/3] overflow-hidden bg-[#F0ECE3]">
                    <Image
                      src="/images/department/mechanical-engineering/association/association12.webp"
                      alt="Embedded Systems with IoT workshop at NCERC"
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-contain object-center"
                    />
                  </div>

                  {/* Photo 2 */}
                  <div className="group relative aspect-[4/3] overflow-hidden bg-[#F0ECE3]">
                    <Image
                      src="/images/department/mechanical-engineering/association/association13.webp"
                      alt="Workshop session on Embedded Systems with IoT"
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover object-center "
                    />
                  </div>

                  {/* Photo 3 */}
                  <div className="group relative aspect-[4/3] overflow-hidden bg-[#F0ECE3] sm:col-span-2 sm:aspect-[16/7] lg:col-span-1 lg:aspect-[4/3]">
                    <Image
                      src="/images/department/mechanical-engineering/association/association14.webp"
                      alt="Participants during the Embedded Systems with IoT workshop"
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 100vw, 100vw"
                      className="object-contain object-center"
                    />
                  </div>
                </div>
              </div>

              {/* Bottom Accent */}
              <div className="h-1 w-full bg-[#D2B87C]" />
            </div>
          </div>
        </section>

        {/* SAE Chapter Enrolment Awareness Session */}
        <section
          id="sae-chapter-enrolment"
          className="bg-[#FAF7F2] px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20"
        >
          <div className="mx-auto max-w-7xl">
            {/* Section Heading */}
            <div className="relative overflow-hidden bg-[#20235A] px-6 py-8 sm:px-9 sm:py-10 lg:px-12">
              <div className="absolute left-0 top-0 h-full w-1.5 bg-[#D2B87C]" />

              <div className="relative">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#D2B87C] sm:text-sm">
                  Mechanical Engineering Association
                </p>

                <h2 className="max-w-4xl font-display text-2xl leading-tight text-white sm:text-3xl lg:text-4xl">
                  An Awareness Session on SAE Chapter Enrolment
                </h2>

                <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/80">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 text-[#D2B87C]" />
                    <span>19 February 2026</span>
                  </div>

                  <div className="h-1 w-1 rounded-full bg-[#D2B87C]" />

                  <p>Overview of SAE Activities</p>
                </div>
              </div>
            </div>

            {/* Event Details */}
            <div className="grid gap-8 py-9 sm:py-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                  Awareness Session
                </p>

                <h3 className="font-display text-2xl leading-snug text-[#20235A] sm:text-3xl">
                  Exploring Professional Opportunities Through SAEINDIA
                </h3>

                <div className="mt-5 h-px w-20 bg-[#D2B87C]" />

                <div className="mt-6 space-y-4 text-justify text-sm leading-7 text-[#5F5A52] sm:text-base">
                  <p>
                    The Department of Mechanical Engineering, under the auspices of
                    the Mechanical Association, hosted an awareness session titled
                    <span className="font-semibold text-[#20235A]">
                      {" "}“Overview of SAE Activities”
                    </span>{" "}
                    for Mechanical Engineering and Electrical and Electronics
                    Engineering students on 19 February 2026.
                  </p>

                  <p>
                    The session featured Mr. Koshy P Joseph, Chairman of SAEISS
                    Cochin Division and Assistant Professor at SCMS School of
                    Engineering and Technology.
                  </p>

                  <p>
                    His presentation highlighted the professional advantages of
                    SAEINDIA student membership, including opportunities to develop
                    practical skills through national design competitions,
                    specialized workshops, and direct industry networking through
                    the SAE chapter.
                  </p>
                </div>
              </div>

              {/* Speaker Information */}
              <div className="flex flex-col justify-between border border-[#D9D0BF] bg-white p-6 sm:p-8">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                    Featured Speaker
                  </span>

                  <h3 className="mt-4 font-display text-2xl leading-snug text-[#20235A] sm:text-3xl">
                    Mr. Koshy P Joseph
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#5F5A52] sm:text-base">
                    Chairman, SAEISS Cochin Division
                  </p>

                  <p className="text-sm leading-7 text-[#5F5A52] sm:text-base">
                    Assistant Professor, SCMS School of Engineering and Technology
                  </p>
                </div>

                <div className="mt-7 border-t border-[#E8E0D2] pt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8F7746]">
                    Session Focus
                  </p>

                  <p className="mt-2 font-display text-xl leading-snug text-[#20235A]">
                    Skills, Competitions and Industry Networking
                  </p>
                </div>
              </div>
            </div>

            {/* Five-Image Gallery */}
            <div>
              <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                    Event Highlights
                  </p>

                  <h3 className="mt-2 font-display text-2xl text-[#20235A] sm:text-3xl">
                    Glimpses from the Session
                  </h3>
                </div>

                <p className="max-w-sm text-sm leading-6 text-[#6B6255]">
                  Highlights from the SAE chapter enrolment awareness programme.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
                {/* Image 1 */}
                <div className="group relative aspect-[4/3] overflow-hidden bg-[#F0ECE3] sm:col-span-2 lg:col-span-3 lg:aspect-[16/9]">
                  <Image
                    src="/images/department/mechanical-engineering/association/association15.webp"
                    alt="SAE Chapter Enrolment awareness session"
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                    className="object-contain"
                  />
                </div>

                {/* Image 2 */}
                <div className="group relative aspect-[4/3] overflow-hidden bg-[#F0ECE3] sm:col-span-1 lg:col-span-3 lg:aspect-[16/9]">
                  <Image
                    src="/images/department/mechanical-engineering/association/association16.webp"
                    alt="Speaker presenting during the SAE awareness session"
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                    className="object-cover"
                  />
                </div>

                {/* Image 3 */}
                <div className="group relative aspect-[4/3] overflow-hidden bg-[#F0ECE3] sm:col-span-1 lg:col-span-2">
                  <Image
                    src="/images/department/mechanical-engineering/association/association17.webp"
                    alt="Students attending the SAE chapter enrolment session"
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover "
                  />
                </div>

                {/* Image 4 */}
                <div className="group relative aspect-[4/3] overflow-hidden bg-[#F0ECE3] sm:col-span-1 lg:col-span-2">
                  <Image
                    src="/images/department/mechanical-engineering/association/association18.webp"
                    alt="Highlights from the SAEINDIA student membership presentation"
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover "
                  />
                </div>

                {/* Image 5 */}
                <div className="group relative aspect-[4/3] overflow-hidden bg-[#F0ECE3] sm:col-span-2 lg:col-span-2">
                  <Image
                    src="/images/department/mechanical-engineering/association/association19.webp"
                    alt="Participants at the SAE Chapter Enrolment awareness programme"
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover "
                  />
                </div>
              </div>

              <div className="mt-6 h-1 w-16 bg-[#D2B87C]" />
            </div>
          </div>
        </section>

        {/* MATLAB – Simulink Training */}
        <section
          id="matlab-simulink-training"
          className="bg-[#FAF7F2] px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20"
        >
          <div className="mx-auto max-w-7xl">
            {/* Section Heading */}
            <div className="relative overflow-hidden bg-[#20235A] px-6 py-8 sm:px-9 sm:py-10 lg:px-12">
              <div className="absolute left-0 top-0 h-full w-1.5 bg-[#D2B87C]" />

              <div className="relative">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#D2B87C] sm:text-sm">
                  Department of Mechanical Engineering
                </p>

                <h2 className="font-display text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
                  MATLAB – Simulink Training
                </h2>

                <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-white/80">
                  <CalendarDays className="h-4 w-4 text-[#D2B87C]" />
                  <span>6 November 2025</span>
                  <span className="mx-1 h-1 w-1 rounded-full bg-[#D2B87C]" />
                  <span>First-Year Mechanical Engineering Students</span>
                </div>
              </div>
            </div>

            {/* Training Details */}
            <div className="grid gap-8 py-9 sm:py-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-14">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                  Technical Training Programme
                </p>

                <h3 className="max-w-xl font-display text-2xl leading-snug text-[#20235A] sm:text-3xl">
                  MATLAB and Simulink Training for First-Year Students
                </h3>

                <div className="mt-5 h-px w-20 bg-[#D2B87C]" />

                {/* <p className="mt-6 max-w-2xl text-sm leading-7 text-[#5F5A52] sm:text-base">
                  A MATLAB–Simulink training programme was conducted for first-year
                  Mechanical Engineering students on 6 November 2025, with guidance
                  from faculty members of the Electronics and Communication
                  Engineering and Mechanical Engineering departments.
                </p> */}
              </div>

              {/* Resource Persons */}
              <div className="border border-[#D9D0BF] bg-white p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                  Resource Persons
                </p>

                <div className="mt-6 space-y-6">
                  <div className="border-l-2 border-[#D2B87C] pl-4">
                    <h4 className="font-display text-xl text-[#20235A]">
                      Mr. Vysak Valsan
                    </h4>
                    <p className="mt-1 text-sm leading-6 text-[#6B6255]">
                      Assistant Professor
                    </p>
                    <p className="text-sm leading-6 text-[#6B6255]">
                      Department of Electronics and Communication Engineering
                    </p>
                  </div>

                  <div className="border-l-2 border-[#D2B87C] pl-4">
                    <h4 className="font-display text-xl text-[#20235A]">
                      Mr. Ragesh P R
                    </h4>
                    <p className="mt-1 text-sm leading-6 text-[#6B6255]">
                      Assistant Professor
                    </p>
                    <p className="text-sm leading-6 text-[#6B6255]">
                      Department of Mechanical Engineering
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Training Photo Gallery */}
            <div>
              <div className="mb-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                  Programme Gallery
                </p>

                <h3 className="mt-2 font-display text-2xl text-[#20235A] sm:text-3xl">
                  Glimpses of the Training
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {/* Image 1 */}
                <div className="group relative aspect-[4/3] overflow-hidden bg-[#F0ECE3]">
                  <Image
                    src="/images/department/mechanical-engineering/association/association20.webp"
                    alt="MATLAB and Simulink training for first-year Mechanical Engineering students"
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Image 2 */}
                <div className="group relative aspect-[4/3] overflow-hidden bg-[#F0ECE3]">
                  <Image
                    src="/images/department/mechanical-engineering/association/association21.webp"
                    alt="Students participating in the MATLAB and Simulink training programme"
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="mt-6 h-1 w-16 bg-[#D2B87C]" />
            </div>
          </div>
        </section>

        {/* Alumni Interaction */}
        <section
          id="alumni-interaction"
          className="bg-[#FAF7F2] px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20"
        >
          <div className="mx-auto max-w-7xl">
            {/* Section Heading */}
            <div className="relative overflow-hidden bg-[#20235A] px-6 py-8 sm:px-9 sm:py-10 lg:px-12">
              <div className="absolute left-0 top-0 h-full w-1.5 bg-[#D2B87C]" />

              <div className="relative">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#D2B87C] sm:text-sm">
                  Department of Mechanical Engineering
                </p>

                <h2 className="font-display text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
                  Alumni Interaction
                </h2>

                <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-white/80">
                  <GraduationCap className="h-5 w-5 text-[#D2B87C]" />
                  <span>2007–2011 Batch</span>
                  <span className="mx-1 h-1 w-1 rounded-full bg-[#D2B87C]" />
                  <span>Mechanical Engineering</span>
                </div>
              </div>
            </div>

            {/* Alumni Details and Image */}
            <div className="grid gap-8 py-9 sm:py-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-14">
              {/* Content */}
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                  Connecting Generations
                </p>

                <h3 className="font-display text-2xl leading-snug text-[#20235A] sm:text-3xl">
                  An Interaction with an Alumnus
                </h3>

                <div className="mt-5 h-px w-20 bg-[#D2B87C]" />

                <p className="mt-6 text-sm leading-7 text-[#5F5A52] sm:text-base">
                  Mr. Sanil, an alumnus of the 2007–2011 Mechanical Engineering
                  batch, interacted with S3 Mechanical Engineering students as
                  part of an alumni interaction session organized by the department.
                </p>

                {/* Alumni Information Card */}
                <div className="mt-7 border border-[#D9D0BF] bg-white p-5 sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                    Featured Alumnus
                  </p>

                  <h4 className="mt-3 font-display text-2xl text-[#20235A]">
                    Mr. Sanil
                  </h4>

                  <div className="mt-4 space-y-2 text-sm leading-6 text-[#6B6255]">
                    <p>
                      <span className="font-semibold text-[#20235A]">Batch:</span>{" "}
                      2007–2011
                    </p>

                    <p>
                      <span className="font-semibold text-[#20235A]">
                        Department:
                      </span>{" "}
                      Mechanical Engineering
                    </p>

                    <p>
                      <span className="font-semibold text-[#20235A]">
                        Participants:
                      </span>{" "}
                      S3 Mechanical Engineering students
                    </p>
                  </div>
                </div>
              </div>

              {/* Event Image */}
              <div className="group relative aspect-[4/3] overflow-hidden bg-[#F0ECE3]">
                <Image
                  src="/images/department/mechanical-engineering/association/association22.webp"
                  alt="Mr. Sanil, Mechanical Engineering alumnus from the 2007–2011 batch, interacting with S3 students"
                  fill
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-contain"
                />

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-[#D2B87C]" />
              </div>
            </div>
          </div>
        </section>






      </main>
      <FooterSection />
    </>
  );
}
