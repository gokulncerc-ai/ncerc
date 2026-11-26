import type { ReactNode } from "react";

import { ArrowRight, BookOpen, Cpu, GraduationCap, Layers, Wrench } from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";

export const metadata = {
  title: "Top Engineering Colleges in Thrissur | VLSI Design - NCERC",
  description:
    "The M.Tech programme in VLSI Design at Nehru College of Engineering and Research Centre prepares and trains students in VLSI circuit design, digital system design, embedded controllers and fabrication, with hands-on exercises in VLSI Design laboratories.",
  keywords: [
    "engineering colleges thrissur",
    "engineering colleges in thrissur",
    "private engineering colleges in thrissur",
    "top engineering colleges in thrissur",
    "Nehru College of Engineering and Research Centre thrissur",
    "NCERC thrissur",
    "Nehru College thrissur",
    "Nehru College of Engineering thrissur",
  ],
  robots: { index: true, follow: true },
};

const quickHighlights = [
  {
    number: "01",
    title: "IC Design",
    description:
      "Designing integrated circuits and describing the design at different levels.",
    icon: Cpu,
  },
  {
    number: "02",
    title: "Fabrication & Testing",
    description:
      "Understanding the details required for fabrication so that the IC can be tested satisfactorily.",
    icon: Layers,
  },
  {
    number: "03",
    title: "Hands-on Learning",
    description:
      "Laboratory exercises, seminars and minor and major projects applying classroom knowledge.",
    icon: Wrench,
  },
];

const heroTopics: string[] = [
  "VLSI Circuit Design",
  "Digital System Design",
  "Embedded Controllers",
  "Fabrication of VLSI Circuits",
];

const courseTopics: string[] = [
  "Advance Mathematics",
  "Digital Design and optimization",
  "Computer aided Design of VLSI circuits",
  "Fabrication of VLSI Circuits",
  "Embedded controllers",
  "Wavelets",
  "Hexagonal Image Processing",
  "Digital system Design",
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
}) {
  return (
    <div className="mb-10">
      <div className="mb-5 flex items-center gap-3">
        <span className="h-px w-9 bg-[#8F7746]" />

        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8F7746] sm:text-xs">
          {eyebrow}
        </p>
      </div>

      <h2 className="font-serif text-4xl font-normal leading-[1.12] tracking-[-0.025em] text-[#20235A] sm:text-5xl lg:text-[52px]">
        {title}
      </h2>

      {description && (
        <p className="mt-5 max-w-2xl text-sm leading-7 text-[#1E1917]/65 sm:text-base sm:leading-8">
          {description}
        </p>
      )}
    </div>
  );
}

export default function VlsiDesignPage() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-[#FAF7F2] text-[#1E1917]">
        {/* HERO */}
        <section className="relative overflow-hidden bg-[#20235A] text-white">
          {/* Decorative circles */}
          <div className="pointer-events-none absolute -right-32 -top-36 h-[500px] w-[500px] rounded-full border border-[#D2B87C]/10" />
          <div className="pointer-events-none absolute -right-12 -top-20 h-[340px] w-[340px] rounded-full border border-[#D2B87C]/15" />
          <div className="pointer-events-none absolute bottom-[-180px] left-[-140px] h-[400px] w-[400px] rounded-full border border-white/5" />

          <div className="relative mx-auto max-w-[1440px] px-5 py-14 sm:px-8 sm:py-20 lg:px-14 lg:py-24 xl:px-20">
            <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
              {/* Hero Content */}
              <div className="relative z-10">
                <div className="mb-7 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#D2B87C]" />

                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D2B87C] sm:text-xs">
                    M.Tech.
                  </p>
                </div>

                <h1 className="max-w-4xl font-serif text-[42px] font-normal leading-[1.06] tracking-[-0.035em] sm:text-[56px] lg:text-[64px] xl:text-[72px]">
                  VLSI
                  <br />
                  <span className="italic text-[#D2B87C]">Design</span>
                </h1>

                <p className="mt-7 max-w-2xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
                  A postgraduate programme that prepares and trains students in
                  VLSI circuit design, digital system design, embedded
                  controllers and fabrication.
                </p>

                <div className="mt-9 flex flex-wrap gap-4">
                  <a
                    href="#about"
                    className="group inline-flex min-h-12 items-center gap-3 bg-[#D2B87C] px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#20235A] transition-colors duration-300 hover:bg-white"
                  >
                    Explore Programme

                    <ArrowRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>

                  <a
                    href="#programme"
                    className="inline-flex min-h-12 items-center gap-3 border border-white/25 px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:border-[#D2B87C] hover:text-[#D2B87C]"
                  >
                    Course Topics
                  </a>
                </div>

                <div className="mt-12 flex items-center gap-3 text-xs text-white/50">
                  <span>M.Tech.</span>

                  <span className="text-[#D2B87C]">/</span>

                  <span className="text-white/80">VLSI Design</span>
                </div>
              </div>

              {/* Hero Panel */}
              <div className="relative mx-auto w-full max-w-[470px] lg:ml-auto">
                <div className="absolute -bottom-4 -left-4 right-4 top-4 border border-[#D2B87C]/60 sm:-bottom-5 sm:-left-5 sm:right-5 sm:top-5" />

                <div className="relative overflow-hidden bg-[#30336B] p-8 sm:p-10">
                  <div className="flex h-14 w-14 items-center justify-center border border-[#D2B87C]/40 text-[#D2B87C]">
                    <Cpu size={24} strokeWidth={1.5} />
                  </div>

                  <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C] sm:text-xs">
                    Programme Focus
                  </p>

                  <h2 className="mt-3 font-serif text-3xl leading-tight text-white sm:text-4xl">
                    From circuit design to fabrication.
                  </h2>

                  <ul className="mt-8 space-y-4 border-t border-white/10 pt-7">
                    {heroTopics.map((topic) => (
                      <li key={topic} className="flex items-center gap-3">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#D2B87C]" />

                        <span className="text-sm text-white/75">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Floating badge */}
                <div className="absolute -right-2 top-8 hidden border border-[#D2B87C]/60 bg-[#20235A] px-4 py-3 sm:-right-4 sm:block sm:px-5 sm:py-4">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-[#D2B87C]">
                    M.Tech.
                  </p>

                  <p className="mt-1 font-serif text-lg text-white">
                    VLSI Design
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-1 w-full bg-[#D2B87C]" />
        </section>

        {/* QUICK HIGHLIGHTS */}
        <section className="border-b border-[#20235A]/10 bg-white">
          <div className="mx-auto grid max-w-[1440px] grid-cols-1 px-5 sm:px-8 md:grid-cols-3 lg:px-14 xl:px-20">
            {quickHighlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className={`flex items-start gap-4 py-7 md:py-8 ${
                    index !== quickHighlights.length - 1
                      ? "border-b border-[#20235A]/10 md:border-b-0 md:border-r"
                      : ""
                  } ${
                    index === 1
                      ? "md:px-8"
                      : index === 2
                        ? "md:pl-8"
                        : "md:pr-8"
                  }`}
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#F2EFE8] text-[#8F7746]">
                    <Icon size={21} strokeWidth={1.5} />
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                      {item.number}
                    </p>

                    <p className="mt-1 font-serif text-lg text-[#20235A]">
                      {item.title}
                    </p>

                    <p className="mt-1 text-xs leading-5 text-[#1E1917]/55">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ABOUT */}
        <section
          id="about"
          className="scroll-mt-24 bg-[#FAF7F2] px-5 py-16 sm:px-8 sm:py-24 lg:px-14 lg:py-28 xl:px-20"
        >
          <div className="mx-auto max-w-[1200px]">
            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
                <SectionHeading
                  eyebrow="About"
                  title={
                    <>
                      A career that is
                      <br />
                      <span className="italic">rewarding and challenging.</span>
                    </>
                  }
                />
              </div>

              <div className="relative">
                <div className="mb-7 flex items-center gap-3">
                  <BookOpen
                    size={20}
                    strokeWidth={1.5}
                    className="text-[#8F7746]"
                  />

                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                    M.Tech. VLSI Design
                  </p>
                </div>

                <div className="space-y-6">
                  <p className="text-justify text-[15px] leading-[2] text-[#1E1917]/75 sm:text-base sm:leading-[2.05]">
                    <strong className="font-semibold text-[#20235A]">
                      VLSI Integrated circuit (IC)
                    </strong>{" "}
                    with the latest technology can have a million or more
                    components in it. Designing the IC, describing the design
                    at different levels and the details required for
                    fabrication so that the IC can be tested satisfactorily
                    are all challenging tasks considering the size and
                    complexity of ICs at this level. The complexity implies
                    challenges that demand talent. A career in VLSI is
                    rewarding as well as challenging.
                  </p>

                  <p className="text-justify text-[15px] leading-[2] text-[#1E1917]/75 sm:text-base sm:leading-[2.05]">
                    A VLSI expert wears many a hat. The Job demands sound
                    footing in basic electronics and digital electronics,
                    familiarity with different processor architecture,
                    capability of carving architectures and realizing them
                    through functional blocks. The M.Tech program in VLSI
                    Design prepares and trains the students for the above
                    requirements.
                  </p>
                </div>

                <div className="mt-9 border-l-2 border-[#D2B87C] bg-white px-5 py-5 sm:px-6">
                  <p className="font-serif text-xl leading-8 text-[#20235A] sm:text-2xl">
                    Preparing and training students for the demands of VLSI
                    design.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROGRAMME */}
        <section
          id="programme"
          className="scroll-mt-24 bg-[#F2EFE8] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24 xl:px-20"
        >
          <div className="mx-auto max-w-[1200px]">
            <SectionHeading
              eyebrow="Programme"
              title={
                <>
                  Courses, electives
                  <br />
                  <span className="italic">and projects.</span>
                </>
              }
            />

            <div className="mb-8 flex items-center gap-3 border-b border-[#20235A]/10 pb-5">
              <GraduationCap
                size={20}
                strokeWidth={1.5}
                className="text-[#8F7746]"
              />

              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                Programme Structure
              </p>
            </div>

            <p className="max-w-4xl text-justify text-[15px] leading-[2] text-[#1E1917]/75 sm:text-base sm:leading-[2.05]">
              The Program contains a number of courses and electives. Course
              comprises of topics like Advance Mathematics, Digital Design and
              optimization, Computer aided Design of VLSI circuits, and
              fabrication of VLSI Circuits, embedded controllers, Wavelets,
              Hexagonal Image Processing, Digital system Design etc., and
              hands-on exercises in VLSI Design Laboratories will be an
              essential part of the program. Students also will present
              seminars and work on minor and major projects, where they will
              apply the knowledge gained in class rooms and laboratories to
              solve problems.
            </p>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {courseTopics.map((topic, index) => (
                <article
                  key={topic}
                  className="group border border-[#20235A]/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D2B87C]"
                >
                  <span className="font-serif text-sm text-[#8F7746]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-5 font-serif text-xl leading-snug text-[#20235A]">
                    {topic}
                  </h3>

                  <div className="mt-6 h-px w-12 bg-[#D2B87C] transition-all duration-300 group-hover:w-full" />
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  );
}