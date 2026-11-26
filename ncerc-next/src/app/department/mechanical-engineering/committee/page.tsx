import Image from "next/image";
import { ArrowUpRight, BriefcaseBusiness, Users } from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../DepartmentNav/DepartmentNav";

type Member = {
  name: string;
  detail?: string;
};

const internalMembers: Member[] = [
  {
    name: "Dr. George Job. K",
    detail:
      "Professor & Head, Department of Mechanical Engineering, NCERC",
  },
  {
    name: "Dr. S. Sankar",
    detail:
      "Professor, Department of Mechanical Engineering, NCERC",
  },
  {
    name: "Lt. Sanoj. T",
    detail:
      "Associate NCC Officer cum Asst. Professor, Department of Mechanical Engineering, NCERC",
  },
  {
    name: "Prof. Rahul. R",
    detail:
      "Asst. Professor, Department of Mechanical Engineering, NCERC",
  },
];

const externalMembers: Member[] = [
  {
    name: "Dr. Vinod. V (Representing Academia)",
    detail:
      "Professor, Department of Mechanical Engineering, NSS College of Engineering, Palakkad, Kerala",
  },
  {
    name: "Er. S. Palanivelayutham (Representing Industrialist)",
    detail:
      "Founder & Chairman, M/s P. V. Gear Designers, SF No 69/1 3rd Street, AKG Nagar, Varatharajapuram, Uppilipalayam, Coimbatore-641015, Tamil Nadu",
  },
  {
    name: "Er. Athul Aravind (Representing Alumni)",
    detail:
      "2016-2020 Batch, Senior Engineer, Associated Cement Company, Thondebhavi Cement Works, Karnataka",
  },
];

export const metadata = {
  title: "Department Advisory Committee | Mechanical Engineering | NCERC",
  description:
    "Department Advisory Committee members of the Mechanical Engineering department at Nehru College of Engineering and Research Centre.",
};

export default function CommitteePage() {
  return (
    <>
      <SiteHeader />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[#20235A]">
        <div className="absolute inset-0 -z-20">
          <Image
            src="/images/dpt/mechanical-engineering/heroone.jpeg"
            alt="Mechanical Engineering Department Advisory Committee"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-20 filter contrast-125 grayscale"
          />
        </div>

        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#20235A]/95 via-[#20235A]/90 to-[#15183f]/95" />

        <div className="pointer-events-none absolute -right-32 -top-32 h-[460px] w-[460px] rounded-full border border-[#D2B87C]/20" />

        <div className="pointer-events-none absolute right-10 top-24 h-[270px] w-[270px] rounded-full border border-[#D2B87C]/15" />

        <div className="pointer-events-none absolute -bottom-48 -left-24 h-[430px] w-[430px] rounded-full border border-white/5" />

        <div className="relative mx-auto max-w-[1400px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16">
          <div className="grid items-end gap-12 lg:grid-cols-[1fr_auto] lg:gap-20">
            <div className="max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D2B87C] sm:text-sm">
                Mechanical Engineering · Governance
              </p>

              <h1 className="mt-5 max-w-4xl font-display text-[43px] font-semibold leading-[1.03] tracking-[-0.025em] text-white sm:text-[58px] lg:text-[64px] xl:text-[74px]">
                Department Advisory
                <span className="block text-[#D2B87C]">Committee.</span>
              </h1>

              <div className="mt-7 h-px w-20 bg-[#D2B87C]" />

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                Academic guidance, professional insight, and institutional
                support from distinguished members representing academia,
                industry, alumni, and the department.
              </p>
            </div>

            <div className="hidden lg:block">
              <div className="border-l border-[#D2B87C] pl-6">
                <p className="font-display text-5xl font-semibold text-white">
                  07
                </p>

                <p className="mt-2 max-w-[150px] text-xs font-medium uppercase leading-5 tracking-[0.16em] text-white/55">
                  Committee Members
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="bg-[#FAF7F2]">
        <InnerHeader />

        {/* Introduction */}
        <section className="border-b border-[#E0D9CF] bg-[#FAF7F2] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746] sm:text-sm">
                  Department Advisory Committee
                </p>

                <h2 className="mt-4 max-w-md font-display text-3xl font-semibold leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                  Guidance for academic and professional development.
                </h2>

                <div className="mt-6 h-px w-16 bg-[#D2B87C]" />

                <div className="mt-7 inline-flex items-center border border-[#D8D1C7] bg-white px-4 py-3">
                  <span className="mr-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                    Academic Year
                  </span>

                  <span className="font-display text-lg font-semibold text-[#20235A]">
                    2021–2022
                  </span>
                </div>
              </div>

              <div className="max-w-2xl lg:pt-8">
                <p className="text-base leading-8 text-[#5F5A55] sm:text-lg">
                  The Advisory Committee of the Department of Mechanical
                  Engineering, NCERC comprises of Educationist, Industrialist
                  and several distinguished persons, all proven achievers in
                  their own domains. They constantly support and guide with
                  the end aim being overall development of the students.
                </p>

                <p className="mt-6 text-base leading-8 text-[#5F5A55] sm:text-lg">
                  The faculty of the Department of Mechanical Engineering,
                  NCERC is dedicated in its task of imparting knowledge and
                  playing the role of wise mentors to the students.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Committee Directory */}
        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
            <div className="flex flex-col gap-6 border-b border-[#DDD7CE] pb-8 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746] sm:text-sm">
                  Committee Directory
                </p>

                <h2 className="mt-3 font-display text-3xl font-semibold text-[#20235A] sm:text-4xl lg:text-5xl">
                  Committee Members
                </h2>

                <div className="mt-5 h-px w-16 bg-[#D2B87C]" />
              </div>

              <p className="max-w-xs text-sm leading-6 text-[#77716A]">
                Faculty, academic, industry, and alumni representatives
                supporting the department.
              </p>
            </div>

            {/* Internal Members */}
            <div className="mt-12 lg:mt-16">
              <CommitteeGroup
                eyebrow="Department Representation"
                title="Internal Members"
                members={internalMembers}
                icon={<Users className="h-5 w-5" strokeWidth={1.5} />}
              />
            </div>

            {/* External Members */}
            <div className="mt-20 border-t border-[#E0D9CF] pt-16">
              <CommitteeGroup
                eyebrow="Professional Representation"
                title="External Members"
                members={externalMembers}
                icon={
                  <BriefcaseBusiness
                    className="h-5 w-5"
                    strokeWidth={1.5}
                  />
                }
              />
            </div>
          </div>
        </section>

        {/* Committee Summary */}
        <section className="border-t border-[#E0D9CF] bg-[#FAF7F2] py-14 sm:py-16">
          <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
            <div className="grid border border-[#D8D1C7] sm:grid-cols-3">
              <CommitteeStat
                number="07"
                label="Committee Members"
                border
              />

              <CommitteeStat
                number="04"
                label="Internal Members"
                border
              />

              <CommitteeStat
                number="03"
                label="External Members"
              />
            </div>
          </div>
        </section>

        {/* Statement */}
        <section className="relative isolate overflow-hidden bg-[#20235A] py-20 sm:py-24 lg:py-28">
          <div className="pointer-events-none absolute -right-24 -top-24 h-[380px] w-[380px] rounded-full border border-[#D2B87C]/15" />

          <div className="pointer-events-none absolute right-10 top-12 h-[220px] w-[220px] rounded-full border border-[#D2B87C]/10" />

          <div className="relative mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                  Mechanical Engineering
                </p>

                <div className="mt-6 h-px w-16 bg-[#D2B87C]" />
              </div>

              <h2 className="max-w-4xl font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                Academic guidance strengthened through collaboration,
                experience, and professional perspective.
              </h2>
            </div>
          </div>
        </section>

        {/* Bottom Navigation */}
        <section className="bg-[#FAF7F2] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
            <div className="border-t border-[#D8D1C7] pt-8">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                    Mechanical Engineering
                  </p>

                  <h2 className="mt-3 max-w-2xl font-display text-2xl font-semibold text-[#20235A] sm:text-3xl">
                    Continue exploring the Mechanical Engineering department.
                  </h2>
                </div>

                <a
                  href="/department/mechanical-engineering"
                  className="inline-flex h-12 items-center justify-center border border-[#20235A] px-7 text-xs font-semibold uppercase tracking-[0.16em] text-[#20235A] transition-colors duration-300 hover:bg-[#20235A] hover:text-white"
                >
                  Department Home

                  <ArrowUpRight
                    className="ml-3 h-4 w-4"
                    strokeWidth={1.5}
                  />
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

function CommitteeGroup({
  eyebrow,
  title,
  members,
  icon,
}: {
  eyebrow: string;
  title: string;
  members: Member[];
  icon: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#D2B87C] text-[#20235A]">
          {icon}
        </div>

        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
            {eyebrow}
          </p>

          <h3 className="mt-1 font-display text-2xl font-semibold text-[#20235A] sm:text-3xl">
            {title}
          </h3>
        </div>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {members.map((member, index) => (
          <article
            key={member.name}
            className="group relative border border-[#D8D1C7] bg-[#FAF7F2] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#20235A] hover:bg-white sm:p-8"
          >
            <div className="flex items-start justify-between gap-6">
              <span className="font-display text-4xl font-semibold text-[#D2B87C]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="h-px w-10 bg-[#D2B87C] transition-all duration-300 group-hover:w-16" />
            </div>

            <h4 className="mt-8 font-display text-xl font-semibold leading-snug text-[#20235A] transition-colors duration-300 group-hover:text-[#8F7746] sm:text-2xl">
              {member.name}
            </h4>

            {member.detail && (
              <p className="mt-4 text-sm leading-7 text-[#6A645D]">
                {member.detail}
              </p>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}

function CommitteeStat({
  number,
  label,
  border = false,
}: {
  number: string;
  label: string;
  border?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-5 px-6 py-7 sm:px-8 ${
        border
          ? "border-b border-[#D8D1C7] sm:border-b-0 sm:border-r"
          : ""
      }`}
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#D2B87C] text-[#20235A]">
        <Users className="h-6 w-6" strokeWidth={1.5} />
      </div>

      <div>
        <p className="font-display text-3xl font-semibold text-[#20235A]">
          {number}
        </p>

        <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8F7746]">
          {label}
        </p>
      </div>
    </div>
  );
}