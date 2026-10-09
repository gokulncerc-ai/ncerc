import Image from "next/image";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  Users,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";

export const metadata = {
  title: "Directors & Executive Members | NCERC",
  description:
    "Meet the Directors and Executive Members guiding institutional growth, academic excellence, research and administration at NCERC.",
};

type Director = {
  name: string;
  role: string;
  image: string;
  description: string;
  profile: string;
};

type ExecutiveOfficer = {
  name: string;
  role: string;
  image: string;
};

const directors: Director[] = [
  {
    name: "Dr. H. N. Nagaraja",
    role: "Executive Director, NGI",
    image:
      "https://ncerc.ac.in/images/Directors-Executive-Members/Dr_H_N_Nagaraja.png",
    description:
      "Dr. H. N. Nagaraja, the Executive Director of NGI, is an academician with 37 years of experience as a teacher by choice, administrator and researcher. With his commitment and dedication, he has contributed to institutions achieving NAAC and NBA accreditation. He was also instrumental in helping institutions participate and achieve strong positions in NIRF and QS-I-Gauge at local and global levels. He has published 95+ research papers in reputed national and international journals.",
    profile:
      "https://ncerc.ac.in/documents/Directors-Executive-Members-profile/Prof.%20Dr.%20H.%20N.%20Nagaraja%20Profile.pdf",
  },
  {
    name: "Dr. R. Gowri",
    role: "Director – Research, Accreditation & Ranking",
    image:
      "https://ncerc.ac.in/images/Directors-Executive-Members/dr_Gowri_R.png",
    description:
      "Dr. R. Gowri, Director – Research, Accreditation & Ranking at Nehru Group of Institutions, is a seasoned academician with over 27 years of experience in teaching, research and academic administration. A Ph.D. holder in Microwave Electronics, she has served in senior leadership roles including Pro-Vice Chancellor, Dean Academics, Dean Research and Founder Director at reputed universities. Her expertise includes OBE, NEP implementation, NAAC accreditation and NIRF rankings. She has also led and contributed to multiple AICTE, DRDO, ISRO and DST-funded research projects, including securing a ₹1.3 crore DST-FIST grant for advanced 5G microwave research infrastructure.",
    profile:
      "https://ncerc.ac.in/documents/Directors-Executive-Members-profile/Dr.%20R%20Gowri%20Profile%20for%20Website.pdf",
  },
];

const executiveOfficers: ExecutiveOfficer[] = [
  {
    name: "Mr. M Srinivasan",
    role: "Manager (Administration)",
    image:
      "https://ncerc.ac.in/images/Directors-Executive-Members/M.SRINIVAS.png",
  },
  {
    name: "Mr. R Unnikrishnan",
    role: "Manager Finance & Accounts",
    image:
      "https://ncerc.ac.in/images/Directors-Executive-Members/Unnikrishnan_R.png",
  },
  {
    name: "Mr. Sreekumar Nair",
    role: "HR Manager",
    image:
      "https://ncerc.ac.in/images/Directors-Executive-Members/shrikumar.png",
  },
];

function DirectorProfile({
  director,
  index,
}: {
  director: Director;
  index: number;
}) {
  const isReversed = index % 2 === 1;

  return (
    <article className="border-b border-[#E0D9CF] bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <div
          className={`grid items-center gap-10 lg:grid-cols-[400px_minmax(0,1fr)] lg:gap-16 xl:grid-cols-[430px_minmax(0,1fr)] ${
            isReversed ? "lg:[&>div:first-child]:order-2" : ""
          }`}
        >
          {/* Director Image */}
          <div
            className={`relative ${
              isReversed ? "lg:[&>div]:ml-auto" : ""
            }`}
          >
            <div className="relative mx-auto aspect-[4/5] max-w-[430px] overflow-hidden border border-[#D8D1C7] bg-[#F2EFE8]">
              <Image
                src={director.image}
                alt={director.name}
                fill
                sizes="(max-width: 1023px) 100vw, 430px"
                className="object-cover object-top transition-transform duration-700 hover:scale-[1.025]"
              />

              {/* Gold corner */}
              <div className="pointer-events-none absolute left-0 top-0 h-20 w-20 border-l-[5px] border-t-[5px] border-[#D2B87C]" />

              {/* Navy corner */}
              <div className="pointer-events-none absolute bottom-0 right-0 h-20 w-20 border-b-[5px] border-r-[5px] border-[#20235A]" />

              {/* Number */}
              <div className="absolute bottom-5 left-5 flex h-12 w-12 items-center justify-center border border-white/40 bg-[#20235A]/90">
                <span className="font-display text-lg text-[#D2B87C]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>

          {/* Director Content */}
          <div className={isReversed ? "lg:order-1" : ""}>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#D2B87C]" />

              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                {director.role}
              </span>
            </div>

            <h3 className="mt-5 max-w-3xl font-display text-3xl font-semibold leading-[1.08] tracking-[-0.02em] text-[#20235A] sm:text-4xl lg:text-[44px]">
              {director.name}
            </h3>

            <div className="mt-6 h-px w-16 bg-[#D2B87C]" />

            <p className="mt-7 max-w-3xl text-[15px] leading-8 text-[#5F5A55] sm:text-base">
              {director.description}
            </p>

            <div className="mt-8">
              <a
                href={director.profile}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 border border-[#20235A] px-5 py-3 text-sm font-semibold text-[#20235A] transition-colors duration-300 hover:bg-[#20235A] hover:text-white"
              >
                <span>Read Full Profile</span>

                <ArrowUpRight
                  size={17}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function ExecutiveOfficerCard({
  officer,
  index,
}: {
  officer: ExecutiveOfficer;
  index: number;
}) {
  return (
    <article className="group border border-[#D8D1C7] bg-white transition-colors duration-300 hover:border-[#20235A]">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#F2EFE8]">
        <Image
          src={officer.image}
          alt={officer.name}
          fill
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.025]"
        />

        {/* Image overlay */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#20235A]/55 to-transparent opacity-70" />

        {/* Number */}
        <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center border border-white/50 bg-[#20235A]/90">
          <span className="font-display text-sm text-[#D2B87C]">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-7">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-[#D2B87C]" />

          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
            Executive Officer
          </span>
        </div>

        <h3 className="mt-4 font-display text-2xl font-semibold leading-tight text-[#20235A]">
          {officer.name}
        </h3>

        <p className="mt-2 text-sm leading-6 text-[#6A645D]">
          {officer.role}
        </p>

        <div className="mt-6 flex items-center gap-2 border-t border-[#E0D9CF] pt-5">
          <BriefcaseBusiness
            size={17}
            strokeWidth={1.5}
            className="shrink-0 text-[#8F7746]"
          />

          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#77716A]">
            Institutional Administration
          </span>
        </div>
      </div>
    </article>
  );
}

export default function Page() {
  return (
    <main className="w-full overflow-x-clip bg-white">
      <SiteHeader />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative isolate overflow-hidden bg-[#20235A]">
        {/* Background image */}
        <div className="absolute inset-0 -z-20">
          <Image
            src={directors[0].image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-[0.13] grayscale"
          />
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#20235A]/95 via-[#20235A]/90 to-[#15183f]/95" />

        {/* Decorative circles */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-[460px] w-[460px] rounded-full border border-[#D2B87C]/20" />

        <div className="pointer-events-none absolute right-10 top-24 h-[270px] w-[270px] rounded-full border border-[#D2B87C]/15" />

        <div className="pointer-events-none absolute -bottom-48 -left-24 h-[430px] w-[430px] rounded-full border border-white/5" />

        <div className="mx-auto max-w-[1400px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16">
          <div className="grid items-end gap-12 lg:grid-cols-[1fr_auto]">
            {/* Hero content */}
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#D2B87C]" />

                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D2B87C] sm:text-sm">
                  Leadership &amp; Administration
                </span>
              </div>

              <h1 className="mt-5 max-w-4xl font-display text-[43px] font-semibold leading-[1.03] tracking-[-0.025em] text-white sm:text-[58px] lg:text-[68px] xl:text-[74px]">
                Directors &amp;
                <span className="block text-[#D2B87C]">
                  Executive Members.
                </span>
              </h1>

              <div className="mt-7 h-px w-20 bg-[#D2B87C]" />

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                Meet the leadership team guiding institutional growth,
                academic excellence, research and effective administration at
                NCERC and the Nehru Group of Institutions.
              </p>
            </div>

            {/* Hero stat */}
            <div className="border-l border-white/15 pl-6 lg:min-w-[230px]">
              <p className="font-display text-5xl font-semibold text-[#D2B87C] sm:text-6xl">
                05
              </p>

              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                Leadership Profiles
              </p>

              <p className="mt-4 max-w-[190px] text-sm leading-6 text-white/60">
                Directors and executive officers supporting institutional
                progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRODUCTION
      ========================================================= */}
      <section className="border-b border-[#E0D9CF] bg-[#FAF7F2] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#D2B87C]" />

                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                  Institutional Leadership
                </span>
              </div>

              <h2 className="mt-5 max-w-md font-display text-3xl font-semibold leading-tight text-[#20235A] sm:text-4xl">
                Experience guiding institutional progress.
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-base leading-8 text-[#5F5A55] sm:text-lg">
                NCERC&apos;s leadership brings together academic experience,
                research expertise, accreditation knowledge and administrative
                capabilities to support the institution&apos;s continued
                development.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <div className="border-l-2 border-[#D2B87C] pl-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                    Directors
                  </p>

                  <p className="mt-2 font-display text-2xl font-semibold text-[#20235A]">
                    02
                  </p>
                </div>

                <div className="border-l-2 border-[#D2B87C] pl-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                    Executive Officers
                  </p>

                  <p className="mt-2 font-display text-2xl font-semibold text-[#20235A]">
                    03
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          DIRECTORS
      ========================================================= */}
      <section className="bg-[#FAF7F2]">
        <div className="mx-auto max-w-[1280px] px-6 pt-16 sm:px-8 sm:pt-20 lg:px-12 lg:pt-24">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <div className="flex items-center gap-3">
                <span className="font-display text-sm text-[#8F7746]">
                  01
                </span>

                <span className="h-px w-10 bg-[#D2B87C]" />

                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                  Directors
                </span>
              </div>

              <h2 className="mt-5 max-w-xl font-display text-3xl font-semibold leading-tight text-[#20235A] sm:text-4xl lg:text-[46px]">
                Institutional leadership
                <span className="block text-[#8F7746]">
                  with experience.
                </span>
              </h2>
            </div>

            <div className="lg:pt-8">
              <p className="max-w-2xl text-base leading-8 text-[#5F5A55]">
                Experienced academic and institutional leaders supporting
                strategic growth, research, accreditation and academic
                development.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4">
          {directors.map((director, index) => (
            <DirectorProfile
              key={director.name}
              director={director}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* =========================================================
          LEADERSHIP STATEMENT
      ========================================================= */}
      <section className="relative isolate overflow-hidden bg-[#20235A] py-20 sm:py-24 lg:py-28">
        {/* Decorative circles */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full border border-[#D2B87C]/15" />

        <div className="pointer-events-none absolute right-16 top-24 h-[280px] w-[280px] rounded-full border border-[#D2B87C]/10" />

        <div className="pointer-events-none absolute -bottom-48 -left-32 h-[460px] w-[460px] rounded-full border border-white/5" />

        <div className="relative mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            {/* Statement */}
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#D2B87C]" />

                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                  Institutional Leadership
                </span>
              </div>

              <h2 className="mt-5 max-w-xl font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-[46px]">
                Experience that supports
                <span className="block text-[#D2B87C]">
                  institutional excellence.
                </span>
              </h2>

              <div className="mt-7 h-px w-16 bg-[#D2B87C]" />
            </div>

            <div className="flex items-end">
              <div className="max-w-2xl">
                <Users
                  size={28}
                  strokeWidth={1.4}
                  className="text-[#D2B87C]"
                />

                <p className="mt-6 text-base leading-8 text-white/65 sm:text-lg">
                  NCERC&apos;s leadership brings together academic experience,
                  research expertise, accreditation knowledge and
                  administrative capabilities to support the institution&apos;s
                  continued development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          EXECUTIVE OFFICERS
      ========================================================= */}
      <section className="border-b border-[#E0D9CF] bg-[#FAF7F2] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <div className="flex items-center gap-3">
                <span className="font-display text-sm text-[#8F7746]">
                  02
                </span>

                <span className="h-px w-10 bg-[#D2B87C]" />

                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                  Executive Officers
                </span>
              </div>

              <h2 className="mt-5 max-w-xl font-display text-3xl font-semibold leading-tight text-[#20235A] sm:text-4xl lg:text-[46px]">
                Executive
                <span className="block text-[#8F7746]">
                  administration.
                </span>
              </h2>
            </div>

            <div className="lg:pt-8">
              <p className="max-w-2xl text-base leading-8 text-[#5F5A55]">
                The executive team supports the day-to-day administrative,
                financial and human resource functions of the institution.
              </p>
            </div>
          </div>

          {/* Officers */}
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {executiveOfficers.map((officer, index) => (
              <ExecutiveOfficerCard
                key={officer.name}
                officer={officer}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SUMMARY / STATEMENT
      ========================================================= */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#D2B87C]" />

                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                  Leadership Directory
                </span>
              </div>

              <h2 className="mt-5 max-w-xl font-display text-3xl font-semibold leading-tight text-[#20235A] sm:text-4xl">
                People shaping the
                <span className="block text-[#8F7746]">
                  future of NCERC.
                </span>
              </h2>
            </div>

            <div>
              <div className="grid border border-[#D8D1C7] sm:grid-cols-3">
                <div className="border-b border-[#D8D1C7] p-6 sm:border-b-0 sm:border-r">
                  <p className="font-display text-3xl font-semibold text-[#20235A]">
                    02
                  </p>

                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#77716A]">
                    Directors
                  </p>
                </div>

                <div className="border-b border-[#D8D1C7] p-6 sm:border-b-0 sm:border-r">
                  <p className="font-display text-3xl font-semibold text-[#20235A]">
                    03
                  </p>

                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#77716A]">
                    Executive Officers
                  </p>
                </div>

                <div className="p-6">
                  <p className="font-display text-3xl font-semibold text-[#20235A]">
                    05
                  </p>

                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#77716A]">
                    Leadership Profiles
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-[#D8D1C7] pt-8">
            <div className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                  Nehru College of Engineering &amp; Research Centre
                </p>

                <p className="mt-3 max-w-2xl font-display text-xl font-semibold leading-relaxed text-[#20235A] sm:text-2xl">
                  Leadership with experience, administration with purpose and
                  a continued commitment to institutional excellence.
                </p>
              </div>

              <a
                href="/about"
                className="group inline-flex shrink-0 items-center gap-3 border border-[#20235A] px-5 py-3 text-sm font-semibold text-[#20235A] transition-colors duration-300 hover:bg-[#20235A] hover:text-white"
              >
                <span>Explore About NCERC</span>

                <ArrowUpRight
                  size={17}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}