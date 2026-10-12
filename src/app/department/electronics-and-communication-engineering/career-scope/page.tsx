import Link from "next/link";

import { ArrowRight, Briefcase } from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../DepartmentNav/DepartmentNav";

export const metadata = {
  title:
    "Top Engineering Colleges in Thrissur | Electronics and Communication Engineering - NCERC",
  description:
    "Nehru College of Engineering and Research Centre is renowned as one of the leading colleges in Kerala for Electrical and Communication Engineering, offering quality education that prepares students for successful careers in the electrical and communication technology sectors across South India.",
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

const DEPARTMENT_PATH = "/department/electronics-and-communication-engineering";

type CareerPoint = {
  title: string;
  text: string;
};

const introParagraph =
  "Electronics and Communication Engineering (ECE) is one of the much sought after Engineering disciplines, as the modern 21st century technocrats create and assimilate several prototypes of the Electronics related and Communication related aspects for a wide variety of Industries, such as Telecommunications, Microwave, Embedded systems, VLSI, Biomedical engineering and so on.";

const careerPoints: CareerPoint[] = [
  {
    title: "VLSI & HDL Programming",
    text: "Students attain precious skills related to HDL programming for VLSI exclusive for ECE stream, which is a prerequisite for entry into Multinational VLSI companies such as Intel, Cadence, Motorola, Texas Instruments, Sun Microsystems and Qualcomm.",
  },
  {
    title: "Microwave Engineering & Antennas",
    text: "In addition, skills in Microwave Engineering and Antennas are paramount to a career in Cellular communications, especially with the revolution of 5G around the corner.",
  },
  {
    title: "Biomedical Engineering & Instrumentation",
    text: "Biomedical Engineering and Instrumentation are very much in vogue today and a career in these areas can easily be attained.",
  },
  {
    title: "Embedded Systems & IoT",
    text: "Embedded Systems and Internet of Things (IoT) are core areas dealt with in all alacrity in the ECE curriculum, which favours the ECE graduates, in their quest for related job areas.",
  },
  {
    title: "Nano & Microelectronics",
    text: "Additionally, Nano electronics and Microelectronics are leading areas that inject a host of concepts, ideology, engineering skills and inferencing capability that are much sought after in any major Electronic industry.",
  },
];

export default function CareerScopePage() {
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
            <div className="relative z-10 max-w-4xl">
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-10 bg-[#D2B87C]" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D2B87C] sm:text-xs">
                  Electronics &amp; Communication Engineering &middot; NBA
                  Accredited
                </p>
              </div>

              <h1 className="font-serif text-[42px] font-normal leading-[1.06] tracking-[-0.035em] sm:text-[56px] lg:text-[64px] xl:text-[72px]">
                Career
                <br />
                <span className="italic text-[#D2B87C]">Scope</span>
              </h1>

              <p className="mt-7 max-w-2xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
                Explore the industries and career paths open to Electronics and
                Communication Engineering graduates, from VLSI and
                telecommunications to embedded systems and biomedical
                engineering.
              </p>

              <div className="mt-12 flex flex-wrap items-center gap-3 text-xs text-white/50">
                <Link
                  href={DEPARTMENT_PATH}
                  className="transition-colors hover:text-white"
                >
                  Departments
                </Link>

                <span className="text-[#D2B87C]">/</span>

                <Link
                  href={DEPARTMENT_PATH}
                  className="transition-colors hover:text-white"
                >
                  Electronics &amp; Communication Engineering
                </Link>

                <span className="text-[#D2B87C]">/</span>

                <span className="text-white/80">Career Scope</span>
              </div>
            </div>
          </div>

          <div className="h-1 w-full bg-[#D2B87C]" />
        </section>

        {/* DEPARTMENT NAVIGATION */}
        <InnerHeader activeTab="Career Scope" />

        {/* INTRO */}
        <section className="scroll-mt-24 bg-[#FAF7F2] px-5 py-16 sm:px-8 sm:py-24 lg:px-14 lg:py-28 xl:px-20">
          <div className="mx-auto max-w-[1200px]">
            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
                <div className="mb-10">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="h-px w-9 bg-[#8F7746]" />

                    <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8F7746] sm:text-xs">
                      Career Scope
                    </p>
                  </div>

                  <h2 className="font-serif text-4xl font-normal leading-[1.12] tracking-[-0.025em] text-[#20235A] sm:text-5xl lg:text-[52px]">
                    Where ECE
                    <br />
                    <span className="italic">can take you.</span>
                  </h2>
                </div>
              </div>

              <div className="relative">
                <div className="mb-7 flex items-center gap-3">
                  <Briefcase
                    size={20}
                    strokeWidth={1.5}
                    className="text-[#8F7746]"
                  />

                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                    Electronics &amp; Communication Engineering
                  </p>
                </div>

                <p className="text-justify text-[15px] leading-[2] text-[#1E1917]/75 sm:text-base sm:leading-[2.05]">
                  {introParagraph}
                </p>

                <div className="mt-9 border-l-2 border-[#D2B87C] bg-white px-5 py-5 sm:px-6">
                  <p className="font-serif text-xl leading-8 text-[#20235A] sm:text-2xl">
                    A discipline that powers telecommunications, embedded
                    systems, VLSI and biomedical technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CAREER AREAS */}
        <section className="bg-[#F2EFE8] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24 xl:px-20">
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-10">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-9 bg-[#8F7746]" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8F7746] sm:text-xs">
                  Opportunities
                </p>
              </div>

              <h2 className="font-serif text-4xl font-normal leading-[1.12] tracking-[-0.025em] text-[#20235A] sm:text-5xl lg:text-[52px]">
                Key areas of
                <br />
                <span className="italic">career growth.</span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#1E1917]/65 sm:text-base sm:leading-8">
                Skills built in the ECE curriculum open doors across some of
                the most in-demand technology sectors.
              </p>
            </div>

            <div className="space-y-3">
              {careerPoints.map((point, index) => (
                <article
                  key={point.title}
                  className="group border border-[#20235A]/10 bg-[#FAF7F2] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D2B87C] sm:p-6"
                >
                  <div className="flex items-start gap-4 sm:gap-5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#20235A] text-[10px] font-semibold text-[#D2B87C]">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="min-w-0">
                      <h3 className="font-serif text-lg leading-tight text-[#20235A] sm:text-xl">
                        {point.title}
                      </h3>

                      <p className="mt-2 text-justify text-sm leading-7 text-[#1E1917]/65 sm:text-[15px] sm:leading-8">
                        {point.text}
                      </p>

                      <div className="mt-5 h-px w-12 bg-[#D2B87C] transition-all duration-300 group-hover:w-full" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CLOSING CTA */}
        <section className="bg-[#20235A] px-5 py-14 text-white sm:px-8 sm:py-16 lg:px-14 xl:px-20">
          <div className="mx-auto flex max-w-[1200px] flex-col justify-between gap-7 md:flex-row md:items-center">
            <div>
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D2B87C] sm:text-xs">
                Explore Electronics &amp; Communication
              </p>

              <h2 className="max-w-2xl font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
                Discover the people, facilities and opportunities behind our
                department.
              </h2>
            </div>

            <Link
              href={DEPARTMENT_PATH}
              className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-3 border border-[#D2B87C]/60 px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:bg-[#D2B87C] hover:text-[#20235A]"
            >
              About the Department
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}