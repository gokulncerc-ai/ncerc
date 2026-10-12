import Image from "next/image";
import Link from "next/link";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../DepartmentNav/page";

export const metadata = {
  title: "Top Engineering Colleges in Thrissur | Mechanical Engineering - NCERC",
  description:
    "Automobile engineering, along with aerospace engineering and marine engineering, is a branch of vehicle engineering, incorporating elements of mechanical, electrical, electronic, software and safety engineering as applied to the design, manufacture and operation of motorcycles, automobiles and trucks and their respective engineering subsystems.",
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
};

type Achievement = {
  id: number;
  title: string;
  description: string;
  image: string | null;
};

type Grant = {
  number: number;
  title: string;
  sanctioned: string;
  received: string;
  agency: string;
  coordinator: string;
  year: string;
};

const ACHIEVEMENT_BASE =
  "/images/dpt/mechanical-engineering/achievements";

const achievementsData: Achievement[] = [
  {
    id: 1,
    title: "Plasma Waste Power Generator",
    description:
      "Ashish D, Amal Kumar T, Aswin Radhakrishnan, and Jishad J (Team Plasma) of III Year Mechanical Engineering, received fund from NCERC for the year 2021-2022, for their innovative project.",
    image: `${ACHIEVEMENT_BASE}/achievements-pic-1.png`,
  },
  {
    id: 2,
    title: "Medical Oxygen Concentrator",
    description:
      "Ashish D, Amal Kumar, Askar Ali, Aswin Radhakrishnan, Subin S, Jishad J and Hareesh M (Team Plasma) of III Year Mechanical Engineering, received fund from NCERC on 11th May 2021, for their innovative project designed to fight against the shortage of Oxygen in hospitals.\n\nWith the rapid increase of coronavirus, consumption of oxygen has increased twice. In some areas, due to insufficient oxygen, deaths are reported. Oxygen concentrators available at markets are high in price and cannot be afforded by an ordinary person or hospitals. So this project provides a cheap alternative that can be used on a large scale and more efficiently to save lives.",
    image: `${ACHIEVEMENT_BASE}/achievements-pic-2.png`,
  },
  {
    id: 3,
    title: "Waste Incinerator Box",
    description:
      "Ashish D, Subin S, Jishad J and Hareesh M (Team Plasma) of III Year Mechanical Engineering, received fund from IMIT on 20th Feb 2021, for their innovative project designed to reduce pollution caused by non-degradable materials.",
    image: `${ACHIEVEMENT_BASE}/achievements-pic-3.png`,
  },
  {
    id: 4,
    title: "Plasma Hybrid Engine",
    description:
      "Ashish D and Team Plasma of III Year Mechanical Engineering, received certificate from IMIT on 20th Feb 2021, for their innovative project designed to run on both air and electrical energy as fuel for automobiles.",
    image: null,
  },
  {
    id: 5,
    title: "Plasma Waste Incinerator",
    description:
      "Ashish D and Team Plasma of III Year Mechanical Engineering, received certificate from INNOVISM on 1st Nov 2020, for their innovative project designed to reduce pollution and generate electrical energy from waste materials.\n\nDue to the increasing population, waste generation is doubling day by day. Tons of non-recyclable waste material pose a major challenge. This product burns waste materials without causing pollution in a closed chamber (pyrolysis) producing flammable gas used to generate Plasma and electric power via Faraday’s law.",
    image: `${ACHIEVEMENT_BASE}/achievements-pic-4.png`,
  },
  {
    id: 6,
    title: "Plasma Waste Incinerator (BRINC)",
    description:
      "Ashish D and Team Plasma of III Year Mechanical Engineering, received certificate from BRINC on Nov 2020 for their innovative project designed to reduce pollution and generate electrical energy from waste materials.",
    image: `${ACHIEVEMENT_BASE}/achievements-pic-5.png`,
  },
  {
    id: 7,
    title: "Mask and Gloves Incinerator",
    description:
      "Ashish D received certificate from Kerala Start-up Mission on 25th July 2020 for the innovative project designed to fight against COVID-19 spreading due to used masks and gloves.\n\nIt incinerates used masks and gloves while reducing pollution through an Electrostatic Precipitator.",
    image: `${ACHIEVEMENT_BASE}/achievements-pic-6.png`,
  },
];

const grantsData: Grant[] = [
  {
    number: 1,
    title:
      "Modernisation and Removal of Obsolescence (MODROB-ASP) of Advanced Measurements Lab",
    sanctioned: "Rs 12,70,498",
    received: "Rs 10,16,398",
    agency: "AICTE",
    coordinator: "Dr. S. Sankar",
    year: "2021-2022",
  },
  {
    number: 2,
    title: "Seed Fund for Village Survey and Household Survey-Phase-1",
    sanctioned: "Rs 50,000",
    received: "Rs 10,16,398",
    agency: "Unnat Bharat Abhiyan (UBA)",
    coordinator: "Dr. S. Sankar",
    year: "2019-2020",
  },
];

function SectionIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746] sm:text-sm">
        {eyebrow}
      </p>

      <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      <div className="mt-6 h-px w-16 bg-[#D2B87C]" />

      {description && (
        <p className="mt-6 max-w-2xl text-base leading-8 text-[#5F5A55] sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

function AchievementCard({ item }: { item: Achievement }) {
  const paragraphs = item.description.split("\n\n");

  return (
    <article
      className={`group relative overflow-hidden border border-[#DDD7CE] bg-white ${
        item.id % 2 === 0 ? "lg:ml-10" : "lg:mr-10"
      }`}
    >
      <div
        className={`grid ${
          item.image
            ? "lg:grid-cols-[minmax(0,1fr)_360px]"
            : "lg:grid-cols-1"
        }`}
      >
        {/* Content */}
        <div className="p-7 sm:p-9 lg:p-10">
          <div className="flex items-start gap-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#20235A] font-display text-sm font-semibold text-[#D2B87C]">
              {String(item.id).padStart(2, "0")}
            </div>

            <div className="min-w-0">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                Department Achievement
              </p>

              <h3 className="mt-2 font-display text-2xl font-semibold leading-tight text-[#20235A] sm:text-3xl">
                {item.title}
              </h3>
            </div>
          </div>

          <div className="mt-7 space-y-5 pl-0 sm:pl-[4.25rem]">
            {paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-base leading-8 text-[#5F5A55] sm:text-[17px]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Image */}
        {item.image && (
          <div className="relative min-h-[280px] bg-[#F2EFE8] lg:min-h-full">
            <div className="absolute inset-4 border border-[#D2B87C]/50" />

            <div className="relative h-full min-h-[280px] p-8">
              <div className="relative h-full min-h-[240px] overflow-hidden bg-white">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 360px, 100vw"
                  className="object-contain p-4 transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

function GrantCard({ grant }: { grant: Grant }) {
  const rows = [
    { label: "Sanctioned Amount", value: grant.sanctioned },
    { label: "Amount Received", value: grant.received },
    { label: "Funding Agency", value: grant.agency },
    { label: "Coordinator", value: grant.coordinator },
  ];

  return (
    <article className="group relative border border-[#D8D1C7] bg-[#FAF7F2] p-7 transition-colors duration-300 hover:border-[#D2B87C] sm:p-9">
      <div className="flex items-center justify-between gap-4">
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
          Grant {String(grant.number).padStart(2, "0")}
        </span>

        <span className="border border-[#D2B87C] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#20235A]">
          AY {grant.year}
        </span>
      </div>

      <h3 className="mt-6 max-w-xl font-display text-2xl font-semibold leading-tight text-[#20235A]">
        {grant.title}
      </h3>

      <div className="mt-6 h-px w-12 bg-[#D2B87C]" />

      <dl className="mt-5 divide-y divide-[#DED8CF]">
        {rows.map((row) => (
          <div
            key={row.label}
            className="grid grid-cols-[1fr_auto] gap-5 py-4"
          >
            <dt className="text-sm leading-6 text-[#77716A]">
              {row.label}
            </dt>

            <dd className="text-right text-sm font-semibold leading-6 text-[#20235A]">
              {row.value}
            </dd>
          </div>
        ))}
      </dl>
    </article>
  );
}

function StatBlock({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div className="border-l border-[#D2B87C] pl-5">
      <p className="font-display text-3xl font-semibold text-white sm:text-4xl">
        {number}
      </p>
      <p className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-white/60">
        {label}
      </p>
    </div>
  );
}

export default function AchievementsPage() {
  return (
    <>
      <SiteHeader />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[#20235A]">
        {/* Decorative circles */}
        <div className="pointer-events-none absolute -right-24 top-12 h-[430px] w-[430px] rounded-full border border-[#D2B87C]/20" />
        <div className="pointer-events-none absolute -right-10 top-28 h-[290px] w-[290px] rounded-full border border-[#D2B87C]/15" />
        <div className="pointer-events-none absolute -left-28 bottom-[-180px] h-[360px] w-[360px] rounded-full border border-white/5" />

        <div className="mx-auto max-w-[1400px] px-6 py-14 sm:px-8 sm:py-18 lg:px-12 lg:py-20 xl:px-16 xl:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 xl:gap-20">
            {/* Hero copy */}
            <div className="relative z-10 max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D2B87C] sm:text-sm">
                Mechanical Engineering
              </p>

              <h1 className="mt-5 max-w-2xl font-display text-[43px] font-semibold leading-[1.02] tracking-[-0.025em] text-white sm:text-[58px] lg:text-[64px] xl:text-[74px]">
                Achievements
                <span className="block text-[#D2B87C]">
                  that move ideas forward.
                </span>
              </h1>

              <div className="mt-7 h-px w-20 bg-[#D2B87C]" />

              <p className="mt-7 max-w-xl text-base leading-8 text-white/70 sm:text-lg">
                A record of innovative student projects, recognitions,
                certificates, and funded initiatives from the Department of
                Mechanical Engineering.
              </p>

              <div className="mt-9 flex flex-wrap gap-x-8 gap-y-5">
                <StatBlock number="07" label="Project achievements" />
                <StatBlock number="02" label="Funded initiatives" />
              </div>
            </div>

            {/* Hero image */}
            <div className="relative mx-auto w-full max-w-[590px] lg:ml-auto">
              {/* Gold offset frame */}
              <div className="absolute -bottom-4 -left-4 h-full w-full border border-[#D2B87C]" />

              <div className="relative aspect-[4/3] overflow-hidden bg-[#F2EFE8]">
                <Image
                  src={`${ACHIEVEMENT_BASE}/achievements-pic-1.png`}
                  alt="Mechanical Engineering student achievement project"
                  fill
                  priority
                  sizes="(min-width: 1280px) 560px, (min-width: 1024px) 45vw, 100vw"
                  className="object-contain p-5 sm:p-8"
                />

                {/* Image label */}
                <div className="absolute bottom-0 left-0 bg-[#20235A] px-5 py-4 sm:px-7">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                    Student Innovation
                  </p>
                  <p className="mt-1 font-display text-sm text-white sm:text-base">
                    Plasma Waste Power Generator
                  </p>
                </div>
              </div>

              <div className="absolute -right-3 -top-3 h-16 w-16 rounded-full border border-[#D2B87C]/50" />
            </div>
          </div>
        </div>
      </section>

      {/* Department navigation */}
      <main className="bg-[#FAF7F2]">
        <InnerHeader />

        {/* Introduction */}
        <section className="border-b border-[#E0D9CF] bg-[#FAF7F2] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
              <SectionIntro
                eyebrow="Innovation & Recognition"
                title="Engineering knowledge translated into meaningful work."
              />

              <div className="max-w-2xl lg:pt-9">
                <p className="text-base leading-8 text-[#5F5A55] sm:text-lg">
                  The Department of Mechanical Engineering encourages students
                  to move beyond classroom learning through innovative
                  projects, practical experimentation, and problem-solving.
                  These achievements represent projects that received funding,
                  certificates, and recognition from different organizations.
                </p>

                <div className="mt-8 grid gap-6 sm:grid-cols-3">
                  <div className="border-t border-[#D2B87C] pt-4">
                    <p className="font-display text-xl font-semibold text-[#20235A]">
                      Innovation
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[#77716A]">
                      Student-led engineering ideas.
                    </p>
                  </div>

                  <div className="border-t border-[#D2B87C] pt-4">
                    <p className="font-display text-xl font-semibold text-[#20235A]">
                      Recognition
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[#77716A]">
                      Awards, certificates, and support.
                    </p>
                  </div>

                  <div className="border-t border-[#D2B87C] pt-4">
                    <p className="font-display text-xl font-semibold text-[#20235A]">
                      Impact
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[#77716A]">
                      Solutions addressing real challenges.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="bg-white py-16 sm:py-20 lg:py-28">
          <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
            <SectionIntro
              eyebrow="Department Achievements"
              title="Ideas developed into engineering achievements."
              description="Innovative student projects, awards, and recognitions from the Department of Mechanical Engineering."
            />

            <div className="mt-14 space-y-8 sm:mt-16 lg:mt-20">
              {achievementsData.map((item) => (
                <AchievementCard key={item.id} item={item} />
              ))}

              {/* Additional achievement image */}
              <article className="border border-[#D8D1C7] bg-[#FAF7F2] p-5 sm:p-8">
                <div className="relative mx-auto aspect-[16/8] w-full max-w-5xl overflow-hidden bg-white">
                  <Image
                    src={`${ACHIEVEMENT_BASE}/achievements-pic-7.png`}
                    alt="Additional Mechanical Engineering achievement details"
                    fill
                    sizes="(min-width: 1280px) 1024px, 100vw"
                    className="object-contain p-4 sm:p-8"
                  />
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Statement */}
        <section className="relative isolate overflow-hidden bg-[#20235A] py-20 sm:py-24 lg:py-28">
          <div className="pointer-events-none absolute right-[-100px] top-[-120px] h-[380px] w-[380px] rounded-full border border-[#D2B87C]/15" />
          <div className="pointer-events-none absolute right-[-20px] top-[-40px] h-[220px] w-[220px] rounded-full border border-[#D2B87C]/10" />

          <div className="relative mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                  From Ideas to Impact
                </p>

                <div className="mt-6 h-px w-16 bg-[#D2B87C]" />
              </div>

              <div>
                <h2 className="font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                  Innovation becomes meaningful when engineering knowledge
                  meets a real-world challenge.
                </h2>
              </div>
            </div>
          </div>
        </section>

        {/* Grants */}
        <section className="bg-[#F2EFE8] py-16 sm:py-20 lg:py-28">
          <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
              <div>
                <SectionIntro
                  eyebrow="Research & Funding"
                  title="Grants & Funds Received"
                  description="Research grants and project funding awarded to the department."
                />

                <div className="mt-10 hidden lg:block">
                  <div className="border-l-2 border-[#D2B87C] pl-6">
                    <p className="font-display text-2xl font-semibold text-[#20235A]">
                      Supporting practical engineering.
                    </p>
                    <p className="mt-3 text-sm leading-7 text-[#77716A]">
                      Funding supports laboratory modernisation, research
                      activity, and field-oriented initiatives.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {grantsData.map((grant) => (
                  <GrantCard key={grant.number} grant={grant} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
            <div className="relative overflow-hidden bg-[#20235A] px-7 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-16">
              <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full border border-[#D2B87C]/20" />

              <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div className="max-w-2xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                    Mechanical Engineering
                  </p>

                  <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
                    Explore the department beyond its achievements.
                  </h2>

                  <p className="mt-4 max-w-xl text-base leading-7 text-white/65">
                    Discover the facilities, laboratories, classrooms, and
                    academic environment supporting Mechanical Engineering at
                    NCERC.
                  </p>
                </div>

                <Link
                  href="/department/mechanical-engineering/facilities"
                  className="inline-flex h-12 items-center justify-center border border-[#D2B87C] px-7 text-sm font-semibold uppercase tracking-wider text-[#D2B87C] transition-colors duration-300 hover:bg-[#D2B87C] hover:text-[#20235A]"
                >
                  Explore Facilities
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}