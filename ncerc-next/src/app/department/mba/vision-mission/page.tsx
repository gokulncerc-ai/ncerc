
import type { Metadata } from "next";
import {
  ArrowDown,
  ArrowUpRight,
  ChevronsRight,
  Compass,
  Eye,
  Lightbulb,
  Users,
  Globe2,
  ShieldCheck,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../DepartmentNav/DepartmentNav";
import FAQ from "../FAQ.tsx/page";

export const metadata: Metadata = {
  title: "MBA Vision & Mission | Nehru School of Management, NCERC",
  description:
    "Explore the vision and mission of Nehru School of Management at NCERC, dedicated to developing visionary, ethical and socially responsible business leaders.",
  keywords: [
    "Nehru School of Management",
    "NSM vision and mission",
    "MBA colleges in Kerala",
    "NCERC MBA programme",
    "management education Kerala",
    "MBA leadership development",
    "ethical business leadership",
  ],
  robots: {
    index: true,
    follow: true,
  },
};

const vision =
  "To be a global catalyst for developing visionary, ethical leaders who create sustainable societal value through innovation and responsible business practices.";

const missionPoints = [
  {
    number: "01",
    title: "Academic Excellence",
    description:
      "Delivering high-quality management education that develops strong business knowledge, analytical thinking, and practical leadership skills.",
    icon: "lightbulb",
  },
  {
    number: "02",
    title: "Ethical Leadership",
    description:
      "Nurturing responsible leaders who demonstrate integrity, professionalism, inclusivity, and sound ethical judgment.",
    icon: "shield",
  },
  {
    number: "03",
    title: "Industry Integration",
    description:
      "Building meaningful connections with industry through practical learning, corporate engagement, consultancy, and collaborative initiatives.",
    icon: "users",
  },
  {
    number: "04",
    title: "Innovation & Research",
    description:
      "Encouraging research, entrepreneurship, creative problem-solving, and the application of emerging business practices.",
    icon: "compass",
  },
  {
    number: "05",
    title: "Global & Social Impact",
    description:
      "Preparing students to address global business challenges and create sustainable value for society and the wider community.",
    icon: "globe",
  },
];

function MissionIcon({ name }: { name: string }) {
  const iconProps = { size: 21, strokeWidth: 1.6 };

  switch (name) {
    case "lightbulb":
      return <Lightbulb {...iconProps} />;
    case "shield":
      return <ShieldCheck {...iconProps} />;
    case "users":
      return <Users {...iconProps} />;
    case "compass":
      return <Compass {...iconProps} />;
    case "globe":
      return <Globe2 {...iconProps} />;
    default:
      return <Lightbulb {...iconProps} />;
  }
}

export default function MBAVisionMissionPage() {
  return (
    <>
      <SiteHeader />

      <main className="overflow-hidden bg-white text-[#1E1917]">
        {/* HERO SECTION */}
        <section className="relative isolate overflow-hidden bg-[#20235A]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#20235A] via-[#20235A] to-[#25285F]" />

            <div
              className="absolute right-0 top-0 hidden h-full w-[48%] opacity-[0.12] lg:block"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(210,184,124,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(210,184,124,0.35) 1px, transparent 1px)",
                backgroundSize: "42px 42px",
              }}
            />

            <div className="absolute -right-40 -top-48 h-[450px] w-[450px] rounded-full border border-[#D2B87C]/15 sm:h-[600px] sm:w-[600px] lg:right-[-5%] lg:top-[-45%] lg:h-[780px] lg:w-[780px]" />

            <div className="absolute -right-24 -top-32 h-[340px] w-[340px] rounded-full border border-white/[0.08] sm:h-[460px] sm:w-[460px] lg:right-[2%] lg:top-[-25%] lg:h-[600px] lg:w-[600px]" />

            <div className="absolute bottom-0 left-0 h-1 w-32 bg-[#D2B87C] sm:w-48" />
          </div>

          <div className="relative mx-auto max-w-[1440px] px-5 py-14 sm:px-10 sm:py-20 lg:px-16 lg:py-20">
            <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
              <div className="relative z-10 max-w-3xl">
                <div className="flex items-center gap-3">
                  <span className="h-px w-9 bg-[#D2B87C]" />
                  <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#D2B87C] sm:text-xs">
                    Nehru School of Management
                  </p>
                </div>

                <h1 className="mt-5 font-serif text-[44px] font-normal leading-[1.04] tracking-[-0.035em] text-white sm:text-6xl lg:text-[72px]">
                  Our vision.
                  <br />
                  <span className="italic text-[#D2B87C]">
                    Our mission.
                  </span>
                </h1>

                <p className="mt-6 max-w-xl text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
                  A shared purpose for shaping ethical,
                  visionary business leaders who create
                  lasting value for organizations, society
                  and the world.
                </p>

                <a
                  href="#vision"
                  className="mt-8 inline-flex items-center gap-3 bg-[#D2B87C] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#20235A] transition-colors duration-300 hover:bg-white"
                >
                  Explore our purpose
                  <ArrowDown size={15} strokeWidth={1.7} />
                </a>
              </div>

              {/* Decorative hero composition */}
              <div
                aria-hidden="true"
                className="relative mx-auto flex aspect-square w-full max-w-[410px] items-center justify-center lg:ml-auto lg:mr-0"
              >
                <div className="absolute inset-[4%] rotate-45 border border-[#D2B87C]/25" />
                <div className="absolute inset-[10%] rounded-full border border-white/10" />
                <div className="absolute inset-[18%] rounded-full border border-[#D2B87C]/35" />
                <div className="absolute inset-[27%] rounded-full border border-white/15" />

                <div className="absolute left-[7%] right-[7%] top-1/2 h-px bg-gradient-to-r from-transparent via-[#D2B87C]/60 to-transparent" />
                <div className="absolute bottom-[7%] left-1/2 top-[7%] w-px bg-gradient-to-b from-transparent via-[#D2B87C]/40 to-transparent" />

                <div className="relative flex h-[54%] w-[54%] flex-col items-center justify-center border border-[#D2B87C]/40 bg-[#20235A]/85">
                  <span className="font-serif text-[68px] leading-none tracking-[-0.08em] text-white sm:text-[78px]">
                    <span className="italic text-[#D2B87C]">V</span>
                    <span>M</span>
                  </span>

                  <span className="mt-4 h-px w-10 bg-[#D2B87C]" />

                  <span className="mt-3 text-center text-[8px] font-medium uppercase tracking-[0.2em] text-white/60">
                    Vision
                    <br />
                    & Mission
                  </span>
                </div>

                <div className="absolute right-0 top-[14%] border border-white/10 bg-[#20235A] px-3 py-2 sm:px-4">
                  <span className="block text-[8px] uppercase tracking-[0.17em] text-[#D2B87C]">
                    Our vision
                  </span>
                  <span className="mt-1 block font-serif text-sm text-white sm:text-base">
                    Think globally.
                  </span>
                </div>

                <div className="absolute bottom-[11%] left-0 border-l-2 border-[#D2B87C] bg-[#20235A] px-3 py-3 sm:px-4">
                  <span className="block text-[8px] uppercase tracking-[0.17em] text-white/45">
                    Our mission
                  </span>
                  <span className="mt-1 block font-serif text-sm text-white sm:text-base">
                    Lead responsibly.
                  </span>
                </div>

                <span className="absolute left-[12%] top-[13%] h-2 w-2 bg-[#D2B87C]" />
                <span className="absolute bottom-[17%] right-[12%] h-2 w-2 bg-[#D2B87C]" />
              </div>
            </div>

            <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-5">
              <span className="text-[9px] uppercase tracking-[0.18em] text-white/35">
                Purpose · Principles · Progress
              </span>
              <span className="font-serif text-sm italic text-white/45">
                NSM / 02
              </span>
            </div>
          </div>
        </section>

        {/* DEPARTMENT NAVIGATION */}
        <div className="relative z-10 border-b border-[#20235A]/10 bg-white">
          <InnerHeader />
        </div>

        {/* VISION AND MISSION INTRODUCTION */}
        <section
          id="vision"
          className="relative overflow-hidden bg-[#FAF7F2] py-16 sm:py-20 lg:py-28"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-28 top-20 h-72 w-72 rounded-full border border-[#20235A]/[0.06] sm:h-96 sm:w-96"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 top-32 h-56 w-56 rounded-full border border-[#D2B87C]/20 sm:h-72 sm:w-72"
          />

          <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="mb-12 grid grid-cols-1 items-start gap-8 lg:mb-20 lg:grid-cols-2 lg:gap-16">
              {/* Left introduction and image */}
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#B99A58]" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8F7746] sm:text-xs">
                    Our Purpose & Direction
                  </span>
                </div>

                <h2 className="max-w-xl font-serif text-4xl font-medium leading-[1.12] tracking-tight text-[#20235A] sm:text-5xl lg:text-6xl">
                  Vision{" "}
                  <span className="italic text-[#B99A58]">&</span>{" "}
                  Mission
                </h2>

                <p className="mt-5 max-w-lg text-sm leading-7 text-[#1E1917]/70 sm:text-base sm:leading-8">
                  Our long-term aspiration guides the direction of
                  our academic community and the impact we strive to
                  create.
                </p>

                <div className="group relative mt-6 max-w-lg overflow-hidden border border-[#20235A]/10">
                  <div
                    role="img"
                    aria-label="Business leaders collaborating and planning a shared vision"
                    className="h-[220px] w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.03] sm:h-[260px] lg:h-[300px]"
                    style={{
                      backgroundImage:
                        "url('https://i.pinimg.com/1200x/7c/78/ef/7c78ef01228525663b9bc032553326fc.jpg')",
                    }}
                  />

                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#20235A]/90 via-[#20235A]/10 to-transparent"
                  />

                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                    <div className="mb-2 flex items-center gap-2">
                      <span className="h-px w-6 bg-[#D2B87C]" />
                      <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-[#D2B87C]">
                        Vision & Mission
                      </span>
                    </div>
                    <p className="font-serif text-xl leading-snug text-white sm:text-2xl">
                      Shaping tomorrow, together.
                    </p>
                  </div>

                  <div
                    aria-hidden="true"
                    className="absolute bottom-0 right-0 h-1 w-1/3 bg-[#D2B87C]"
                  />
                </div>
              </div>

              {/* Vision statement */}
              <div className="relative flex min-h-[320px] flex-col justify-between overflow-hidden bg-[#20235A] p-7 text-white sm:p-10 lg:min-h-[400px] lg:p-12">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full border border-white/10 sm:h-72 sm:w-72"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-5 -top-5 h-40 w-40 rounded-full border border-[#D2B87C]/30 sm:h-52 sm:w-52"
                />

                <div className="relative">
                  <div className="mb-8 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center border border-[#D2B87C]/50 text-[#D2B87C]">
                      <Eye size={22} strokeWidth={1.5} />
                    </div>
                    <span className="font-serif text-5xl text-white/[0.08] sm:text-6xl">
                      01
                    </span>
                  </div>

                  <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C] sm:text-xs">
                    Our Vision
                  </p>

                  <h3 className="max-w-md font-serif text-2xl font-medium leading-snug sm:text-3xl lg:text-4xl">
                    Creating a lasting impact through leadership
                    and innovation.
                  </h3>

                  <div className="my-6 h-px w-16 bg-[#D2B87C]" />

                  <p className="max-w-xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
                    {vision}
                  </p>
                </div>

                <div className="relative mt-8 flex items-center gap-3 border-t border-white/15 pt-5">
                  <span className="text-xs uppercase tracking-[0.16em] text-white/60">
                    Our guiding aspiration
                  </span>
                  <ArrowUpRight
                    size={17}
                    className="ml-auto text-[#D2B87C]"
                  />
                </div>

                <div
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-1 w-24 bg-[#D2B87C]"
                />
              </div>
            </div>

            {/* MISSION CARDS */}
            <div id="mission" className="scroll-mt-24">
              <div className="mb-8 flex flex-col justify-between gap-5 border-b border-[#20235A]/15 pb-6 sm:flex-row sm:items-end">
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <span className="h-px w-8 bg-[#B99A58]" />
                    <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8F7746] sm:text-xs">
                      How We Make It Happen
                    </span>
                  </div>

                  <h3 className="font-serif text-3xl font-medium text-[#20235A] sm:text-4xl lg:text-5xl">
                    Our Mission
                  </h3>
                </div>

                <p className="max-w-md text-sm leading-7 text-[#1E1917]/65 sm:text-base">
                  The commitments that shape our teaching, research,
                  leadership development, and contribution to society.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {missionPoints.map((item) => (
                  <article
                    key={item.number}
                    className="group relative flex min-h-[250px] flex-col overflow-hidden border border-[#20235A]/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#B99A58]/60 hover:shadow-[0_16px_40px_rgba(32,35,90,0.08)] sm:p-7"
                  >
                    <div className="mb-8 flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center bg-[#20235A]/[0.05] text-[#20235A] transition-colors duration-300 group-hover:bg-[#20235A] group-hover:text-[#D2B87C]">
                        <MissionIcon name={item.icon} />
                      </div>

                      <span className="font-serif text-3xl text-[#20235A]/10 transition-colors group-hover:text-[#B99A58]/50">
                        {item.number}
                      </span>
                    </div>

                    <h4 className="mb-3 font-serif text-xl font-medium text-[#20235A] sm:text-2xl">
                      {item.title}
                    </h4>

                    <p className="text-sm leading-7 text-[#1E1917]/65">
                      {item.description}
                    </p>

                    <div className="mt-auto flex justify-end pt-5">
                      <ArrowUpRight
                        size={18}
                        className="text-[#B99A58] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </div>

                    <div
                      aria-hidden="true"
                      className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#D2B87C] transition-all duration-500 group-hover:w-full"
                    />
                  </article>
                ))}
              </div>
            </div>

            {/* CLOSING STATEMENT */}
            <div className="relative mt-12 overflow-hidden bg-[#20235A] px-6 py-8 sm:mt-16 sm:px-10 sm:py-10 lg:px-12">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 -top-20 h-56 w-56 rounded-full border border-white/10"
              />

              <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div className="max-w-2xl">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="h-px w-8 bg-[#D2B87C]" />
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C] sm:text-xs">
                      The NSM Commitment
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl leading-snug text-white sm:text-3xl">
                    Life Transforming Learning Experience
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-7 text-white/70">
                    We strive to create an environment where
                    knowledge, values, and innovation empower
                    students to make a meaningful difference.
                  </p>
                </div>

                <a
                  href="#vision"
                  className="inline-flex w-fit shrink-0 items-center gap-3 border border-[#D2B87C]/60 px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#D2B87C] transition-colors hover:bg-[#D2B87C] hover:text-[#20235A]"
                >
                  Explore Our Purpose
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* MISSION IN ACTION */}
        <section className="border-y border-[#20235A]/10 bg-[#FAF7F2] px-5 py-14 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-[1280px]">
            <div className="grid gap-5 lg:grid-cols-[1fr_0.7fr] lg:items-end lg:gap-12">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-[#D2B87C]" />
                  <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#8F7746]">
                    How we bring it to life
                  </p>
                </div>

                <h2 className="mt-4 font-serif text-[42px] font-normal leading-[1.05] tracking-[-0.035em] text-[#20235A] sm:text-5xl lg:text-[60px]">
                  The mission
                  <br />
                  <span className="italic">in action.</span>
                </h2>
              </div>

              <p className="max-w-lg text-sm leading-7 text-[#1E1917]/60 sm:text-[15px] sm:leading-8 lg:justify-self-end">
                Our mission translates our vision into a
                commitment to meaningful education, responsible
                leadership and sustainable contributions to
                organizations and society.
              </p>
            </div>

            <div className="mt-10 border-t border-[#20235A]/15 sm:mt-14">
              {missionPoints.map((point) => (
                <article
                  key={point.number}
                  className="group grid gap-4 border-b border-[#20235A]/15 py-6 transition-colors duration-300 sm:py-8 lg:grid-cols-[90px_1fr_36px] lg:items-start lg:gap-8"
                >
                  <div className="flex items-center gap-3 lg:block">
                    <span className="font-serif text-3xl italic text-[#D2B87C] sm:text-4xl">
                      {point.number}
                    </span>
                    <span className="h-px w-8 bg-[#20235A]/15 lg:mt-4 lg:block" />
                  </div>

                  <div>
                    <h3 className="mb-2 font-serif text-xl font-medium text-[#20235A] sm:text-2xl">
                      {point.title}
                    </h3>
                    <p className="max-w-4xl text-sm leading-7 text-[#1E1917]/70 transition-colors duration-300 group-hover:text-[#20235A] sm:text-[15px] sm:leading-8">
                      {point.description}
                    </p>
                  </div>

                  <div className="hidden h-9 w-9 items-center justify-center border border-[#20235A]/10 text-[#8F7746] transition-all duration-300 group-hover:border-[#D2B87C] group-hover:bg-white lg:flex">
                    <ChevronsRight
                      size={18}
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 border-l-2 border-[#D2B87C] bg-white px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
              <p className="max-w-2xl font-serif text-lg leading-7 text-[#20235A] sm:text-xl">
                Developing leaders who combine knowledge,
                integrity and a sense of responsibility.
              </p>

              <a
                href="#vision"
                className="inline-flex w-fit shrink-0 items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#8F7746] transition-colors hover:text-[#20235A]"
              >
                Back to vision
                <ArrowUpRight size={15} strokeWidth={1.6} />
              </a>
            </div>
          </div>
        </section>

        {/* CLOSING STRIP */}
        <section className="bg-[#20235A] px-5 py-10 sm:px-10 sm:py-12 lg:px-16">
          <div className="mx-auto flex max-w-[1280px] flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#D2B87C]">
                Nehru School of Management
              </p>

              <h2 className="mt-2 max-w-2xl font-serif text-2xl leading-snug text-white sm:text-3xl">
                A clear purpose. A responsible future.
              </h2>
            </div>

            <a
              href="#mission"
              className="inline-flex w-fit items-center gap-3 border border-white/20 px-5 py-3 text-[9px] font-semibold uppercase tracking-[0.15em] text-white transition-colors duration-300 hover:border-[#D2B87C] hover:bg-white/5"
            >
              Explore our mission
              <ArrowUpRight size={15} strokeWidth={1.5} />
            </a>
          </div>
        </section>
      </main>

      <FAQ />
      <FooterSection />
    </>
  );
}