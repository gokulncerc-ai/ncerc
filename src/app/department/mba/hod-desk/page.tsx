import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../DepartmentNav/page";
import FAQ from "../FAQ.tsx/page";

export const metadata: Metadata = {
  title: "MBA HoD Desk | Nehru School of Management, NCERC",
  description:
    "Read the message from Dr Krishna Kumar T P, HoD and Professor at Nehru School of Management, and learn about NSM approach to management education, leadership and professional development.",
  keywords: [
    "Nehru School of Management",
    "MBA HoD message",
    "MBA colleges in Kerala",
    "management education Kerala",
    "NCERC MBA",
    "Dr Krishna Kumar T P",
    "MBA leadership education",
  ],
  robots: {
    index: true,
    follow: true,
  },
};

const hod = {
  name: "Dr Krishna Kumar T P",
  designation: "HoD & Professor",
  photo: "https://ncerc.ac.in/images/dpt/mba/faculty/DR.KRISHNAKUMAR_NSM.jpg",
};

const messageParagraphs: string[] = [
  "In line with our motto of “Moulding True Citizen, NSM, over the years has tried to impart high quality management education through academic rigor as well a sample industry interface.",

  "Our programme is uniquely structured in which core and elective courses dealing with concepts, analytical and quantitative methodologies, functional specializations, industrial and business domains, professional development and industrial/business projects are offered. Our pedagogy is a well balanced mix of lectures, case studies, assignments, simulations, group exercises, seminars, and projects that enables all our students to realize their potential to become excellent managers.",

  "Our faculty members are experts in terms of academic expertise and professional experience. They bring in methodological mastery, intellectual rigor, business perspectives and practical experience into the educational process. The MBA curriculum equips students with tools to lead and manage in today’s ever- changing business landscape. The focus is not just on the underlying theory, but how to apply cutting-edge concepts to real, relevant business problems.",

  "The Business Schools has maintained good results and placement record as a result of our hard working culture, supported by a dynamic management. Today NSM has attained the position of a much sought after Business schools by students all over Kerala as well as nearby states. The program teaches students to not only recognize opportunity, but to create it, an essential ability in a business environment that is constantly evolving both inside and outside of their organizational environment. NSM focuses exclusively on leadership education with focus on education and research in solving the leadership challenges plaguing the organizations of today.",
];

export default function MBAHodDeskPage() {
  return (
    <>
      <SiteHeader />

      <main className="overflow-hidden bg-white text-[#1E1917]">
        {/* =========================================
                    PAGE HERO
                ========================================== */}
        <section className="relative isolate overflow-hidden bg-[#20235A]">
          {/* Background design */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#20235A] via-[#20235A] to-[#25285F]" />

            {/* Subtle right-side grid */}
            <div
              className="absolute right-0 top-0 hidden h-full w-[48%] opacity-[0.12] lg:block"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(210,184,124,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(210,184,124,0.35) 1px, transparent 1px)",
                backgroundSize: "42px 42px",
              }}
            />

            {/* Decorative circles */}
            <div className="absolute -right-32 -top-48 h-[450px] w-[450px] rounded-full border border-[#D2B87C]/15 sm:h-[600px] sm:w-[600px] lg:right-[-5%] lg:top-[-48%] lg:h-[780px] lg:w-[780px]" />

            <div className="absolute -right-20 -top-32 h-[340px] w-[340px] rounded-full border border-white/[0.08] sm:h-[460px] sm:w-[460px] lg:right-[1%] lg:top-[-30%] lg:h-[600px] lg:w-[600px]" />

            <div className="absolute right-[-5%] top-[15%] hidden h-[350px] w-[350px] rounded-full border border-[#D2B87C]/20 lg:block" />

            {/* Gold accent */}
            <div className="absolute bottom-0 left-0 h-1 w-32 bg-[#D2B87C] sm:w-48" />
            <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#D2B87C]/30 to-transparent" />
          </div>

          <div className="relative mx-auto max-w-[1440px] px-5 py-14 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
            <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">

              {/* LEFT: Hero content */}
              <div className="relative z-10 max-w-3xl">
                <div className="flex items-center gap-3">
                  <span className="h-px w-9 bg-[#D2B87C]" />

                  <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#D2B87C] sm:text-xs">
                    Nehru School of Management
                  </p>
                </div>

                <h1 className="mt-5 font-serif text-[42px] font-normal leading-[1.05] tracking-[-0.035em] text-white sm:text-6xl lg:text-[70px]">
                  A message from
                  <br />
                  <span className="italic text-[#D2B87C]">
                    our leadership.
                  </span>
                </h1>

                <p className="mt-6 max-w-xl text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
                  Discover the vision behind management education
                  at NSM, where academic rigour, professional
                  experience and leadership development come
                  together.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                  <a
                    href="#hod-message"
                    className="inline-flex items-center gap-3 bg-[#D2B87C] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#20235A] transition-colors duration-300 hover:bg-white"
                  >
                    Read the message
                    <span aria-hidden="true">↘</span>
                  </a>

                  <span className="text-[10px] uppercase tracking-[0.15em] text-white/45">
                    Leadership · Learning · Excellence
                  </span>
                </div>
              </div>

              {/* RIGHT: Decorative NSM composition */}
              <div
                aria-hidden="true"
                className="relative mx-auto flex aspect-square w-full max-w-[460px] items-center justify-center lg:ml-auto lg:mr-0"
              >
                {/* Outer frame */}
                <div className="absolute inset-[4%] rotate-45 border border-[#D2B87C]/25" />

                {/* Concentric rings */}
                <div className="absolute inset-[10%] rounded-full border border-white/10" />
                <div className="absolute inset-[17%] rounded-full border border-[#D2B87C]/40" />
                <div className="absolute inset-[25%] rounded-full border border-white/15" />

                {/* Orbital lines */}
                <div className="absolute left-[8%] right-[8%] top-1/2 h-px bg-gradient-to-r from-transparent via-[#D2B87C]/60 to-transparent" />
                <div className="absolute bottom-[8%] top-[8%] left-1/2 w-px bg-gradient-to-b from-transparent via-[#D2B87C]/40 to-transparent" />

                {/* Main monogram */}
                <div className="relative flex h-[52%] w-[52%] flex-col items-center justify-center border border-[#D2B87C]/40 bg-[#20235A]/75 shadow-[0_0_70px_rgba(210,184,124,0.08)]">
                  <span className="font-serif text-[76px] leading-none tracking-[-0.08em] text-white sm:text-[90px]">
                    N<span className="italic text-[#D2B87C]">S</span>M
                  </span>

                  <span className="mt-4 h-px w-12 bg-[#D2B87C]" />

                  <span className="mt-3 text-center text-[8px] font-medium uppercase tracking-[0.23em] text-white/60 sm:text-[9px]">
                    Leadership
                    <br />
                    Through Learning
                  </span>
                </div>

                {/* Floating top label */}
                <div className="absolute right-[2%] top-[15%] border border-white/10 bg-[#20235A] px-3 py-2 sm:px-4">
                  <span className="block text-[8px] uppercase tracking-[0.18em] text-[#D2B87C]">
                    Established vision
                  </span>
                  <span className="mt-1 block font-serif text-sm text-white sm:text-base">
                    Think forward.
                  </span>
                </div>

                {/* Floating lower label */}
                <div className="absolute bottom-[12%] left-0 border-l-2 border-[#D2B87C] bg-[#20235A]/95 px-4 py-3 sm:px-5">
                  <span className="block text-[8px] uppercase tracking-[0.18em] text-white/45">
                    The NSM approach
                  </span>
                  <span className="mt-1 block font-serif text-base text-white sm:text-lg">
                    Knowledge into action.
                  </span>
                </div>

                {/* Corner markers */}
                <span className="absolute left-[12%] top-[13%] h-2 w-2 bg-[#D2B87C]" />
                <span className="absolute bottom-[17%] right-[12%] h-2 w-2 bg-[#D2B87C]" />
              </div>
            </div>

            {/* Bottom decorative index */}
            <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-5 lg:absolute lg:bottom-8 lg:left-16 lg:right-16 lg:mt-0 lg:border-0 lg:pt-0">
              <span className="text-[9px] uppercase tracking-[0.18em] text-white/35">
                Nehru School of Management
              </span>

              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#D2B87C]/60" />
                <span className="font-serif text-sm italic text-white/45">
                  NSM / 01
                </span>
              </div>
            </div>
          </div>
        </section>


        {/* =========================================
                    DEPARTMENT NAVIGATION
                ========================================== */}
        <div className="relative z-10 border-b border-[#20235A]/10 bg-white">
          <InnerHeader />
        </div>

        {/* =========================================
                    HOD MESSAGE SECTION
                ========================================== */}
        <section
          id="hod-message"
          className="scroll-mt-24 px-5 py-14 sm:px-10 sm:py-20 lg:px-16 lg:py-24"
        >
          <div className="mx-auto max-w-[1280px]">
            {/* Section introduction */}
            <div className="mb-10 grid gap-5 border-b border-[#20235A]/10 pb-7 sm:mb-14 sm:pb-9 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-12">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-[#D2B87C]" />

                  <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#8F7746]">
                    From the HoD&apos;s Desk
                  </span>
                </div>

                <h2 className="mt-4 font-serif text-4xl font-normal leading-[1.08] tracking-[-0.03em] text-[#20235A] sm:text-5xl lg:text-[56px]">
                  Guiding the
                  <br />
                  <span className="italic">
                    next generation.
                  </span>
                </h2>
              </div>

              <p className="max-w-2xl text-sm leading-7 text-[#1E1917]/60 sm:text-[15px] sm:leading-8 lg:justify-self-end">
                Management education is more than acquiring
                knowledge. It is about developing sound
                judgement, understanding people, recognising
                opportunities and preparing to lead in a
                constantly changing business environment.
              </p>
            </div>

            {/* Profile and message */}
            <div className="grid items-start gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
              {/* LEFT: HOD profile */}
              <aside className="mx-auto w-full max-w-sm lg:mx-0 lg:max-w-none">
                <div className="group relative">
                  {/* Portrait */}
                  <div className="relative overflow-hidden bg-[#F2EFE8]">
                    <Image
                      src={hod.photo}
                      alt={hod.name}
                      fill
                      sizes="(min-width: 1024px) 330px, 100vw"
                      className="aspect-[4/4.5] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                    />

                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#171A48]/30 via-transparent to-transparent"
                    />

                    <div
                      aria-hidden="true"
                      className="absolute bottom-0 left-0 h-1 w-1/3 bg-[#D2B87C]"
                    />
                  </div>

                  {/* Profile details */}
                  <div className="border-x border-b border-[#20235A]/10 bg-white px-5 py-6 sm:px-6">
                    <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#8F7746]">
                      Head of the Department
                    </p>

                    <h3 className="mt-3 font-serif text-[26px] leading-tight tracking-[-0.02em] text-[#20235A] sm:text-[29px]">
                      {hod.name}
                    </h3>

                    <p className="mt-2 text-xs font-medium uppercase tracking-[0.13em] text-[#1E1917]/50">
                      {hod.designation}
                    </p>

                    <div className="mt-5 border-t border-[#20235A]/10 pt-4">
                      <div className="flex items-center gap-3">
                        <span className="h-2 w-2 bg-[#D2B87C]" />

                        <span className="text-[9px] font-medium uppercase tracking-[0.16em] text-[#8F7746]">
                          Nehru School of Management
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Profile note */}
                <div className="mt-5 flex items-start gap-3 border-l-2 border-[#D2B87C] bg-[#FAF7F2] px-4 py-4">
                  <span className="font-serif text-2xl leading-none text-[#8F7746]">
                    “
                  </span>

                  <p className="font-serif text-sm italic leading-6 text-[#20235A]/80">
                    Moulding true citizens through quality
                    management education.
                  </p>
                </div>
              </aside>

              {/* RIGHT: Message content */}
              <div className="min-w-0">
                {/* Message header */}
                <div className="mb-7 flex items-center gap-3 border-b border-[#20235A]/10 pb-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#D2B87C]/70 bg-[#FAF7F2]">
                    <span className="font-serif text-xl italic text-[#8F7746]">
                      “
                    </span>
                  </div>

                  <div>
                    <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#8F7746]">
                      A note on our vision
                    </p>

                    <h3 className="mt-1 font-serif text-xl text-[#20235A] sm:text-2xl">
                      Message from the HoD
                    </h3>
                  </div>
                </div>

                {/* Original message paragraphs */}
                <div className="space-y-5">
                  {messageParagraphs.map(
                    (paragraph, index) => (
                      <p
                        key={`message - ${index} `}
                        className="text-justify text-[13px] leading-[1.95] text-[#1E1917]/70 sm:text-[14px] sm:leading-[2]"
                      >
                        {paragraph}
                      </p>
                    )
                  )}
                </div>

                {/* Closing invitation */}
                <div className="relative mt-9 overflow-hidden bg-[#20235A] px-5 py-6 sm:px-8 sm:py-8">
                  <div
                    aria-hidden="true"
                    className="absolute right-0 top-0 h-full w-1 bg-[#D2B87C]"
                  />

                  <p className="mb-3 text-[9px] font-medium uppercase tracking-[0.2em] text-[#D2B87C]">
                    An invitation
                  </p>

                  <p className="max-w-2xl font-serif text-[23px] leading-[1.45] text-white sm:text-[28px]">
                    It is my pleasure to invite you to be a
                    part of this{" "}
                    <span className="italic text-[#D2B87C]">
                      “Life Transforming Learning
                      Experience”.
                    </span>
                  </p>

                  <div className="mt-6 flex items-center gap-3">
                    <span className="h-px w-8 bg-[#D2B87C]" />

                    <span className="text-[9px] font-medium uppercase tracking-[0.16em] text-white/50">
                      Dr Krishna Kumar T P
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
                    CLOSING STRIP
                ========================================== */}
        <section className="border-y border-[#20235A]/10 bg-[#FAF7F2]">
          <div className="mx-auto flex max-w-[1280px] flex-col gap-4 px-5 py-7 sm:px-10 sm:py-8 md:flex-row md:items-center md:justify-between lg:px-16">
            <div>
              <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#8F7746]">
                Nehru School of Management
              </p>

              <p className="mt-2 font-serif text-xl text-[#20235A] sm:text-2xl">
                Preparing leaders for a changing world.
              </p>
            </div>

            <a
              href="#hod-message"
              className="inline-flex w-fit items-center gap-3 border border-[#20235A]/15 px-4 py-3 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#20235A] transition-colors hover:border-[#D2B87C] hover:bg-white"
            >
              Back to message
              <span aria-hidden="true">↑</span>
            </a>
          </div>
        </section>
      </main>

      {/* FAQ */}
      <FAQ />

      {/* Shared site footer */}
      <FooterSection />
    </>
  );
}
