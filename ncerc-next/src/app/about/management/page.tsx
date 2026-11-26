import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Award,
  CalendarDays,
  Landmark,
  ShieldCheck,
  Users,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";

import Pkdas from "../../../../public/images/management/pkdas.jpg";
import Krishnadas from "../../../../public/images/management/krishnadas.png";
import Krishnakumar from "../../../../public/images/management/krishnakumar.png";

export const metadata = {
  title: "Management | NCERC",
  description:
    "Meet the management and leadership of Nehru College of Engineering and Research Centre.",
};

/* ============================================================
   TYPES
============================================================ */

type Member = {
  name: string;
  role: string;
  image: typeof Pkdas;
  alt: string;
  /** Optional profile lines shown in a card under the portrait */
  profile?: string[];
  paragraphs: string[];
};

type Milestone = {
  icon: typeof Landmark;
  label: string;
  value: string;
};

/* ============================================================
   DATA
============================================================ */

const members: Member[] = [
  {
    name: "Late. P.K. Das",
    role: "Founder Chairman",
    image: Pkdas,
    alt: "Late P.K. Das - Founder Chairman",
    paragraphs: [
      "Late. P.K. Das, founder chairman of the ‘Nehru College of Education and Charitable Trust’, established in 1968, was a man of great vision, commitment, perseverance, dedication and devotion who pioneered revolutionary and innovative thoughts to revamp technical and professional education in the private sector.",
      "He was committed to the cause of the uneducated, the poor and social welfare; and undertook various initiatives such as extending support to the physically challenged, providing free education and medical treatment to the backward class, constituting over a thousand scholarships and awards for the needy children and donating homes for the homeless.",
      "The elegance of work culture and charisma instilled by the chairman still continues to vitalize the synchronized progress of the Nehru group of institutions, making it a prestigious center of learning and research. Let us all be blessed by the might of this great soul, who undoubtedly illuminates our path towards greater glory and success.",
    ],
  },
  {
    name: "Adv. Dr. P. Krishnadas",
    role: "Chairman & Managing Trustee",
    image: Krishnadas,
    alt: "Adv. Dr. P. Krishnadas - Chairman and Managing Trustee",
    profile: [
      "Chancellor, P K Das Deemed-to-be University, Tamilnadu",
      "Honorary Trade Commissioner of Mauritius - India",
      "Chairman & Managing Trustee, Nehru Group of Institutions",
      "Chairman, Chamber of Kerala Colleges",
    ],
    paragraphs: [
      "NCERC, a dream-child of my beloved father Late Shri.P.K.Das, survived many a high tides and turbulent waters in the initial years of its establishment to emerge one among the top rated engineering colleges known for academic excellence, exemplary discipline and fabulous infrastructure.",
      "The college, Re-Accredited by NAAC with A Grade, NBA Accredited programmes and ISO 9001-2015 certified runs a chain of professional courses at B. Tech. and M.Tech. levels and has an excellent infrastructure which includes well-equipped and updated laboratories, a modern library with a rich collection of books, well-furnished classrooms, auditoriums, hostels and subsidized canteens, flawless transportation facilities and Wi-Fi connectivity.",
      "The departments are headed by highly qualified and experienced faculty who are highly professional, devoted and committed. Our focus is on molding academically, morally, ethically, and professionally true citizens who can contribute positively to the process of nation building.",
      "The college regularly holds international seminars, lectures, workshops, technical exhibitions, Motor-expos, N-Site and bloom, the annual cultural fest, NCC and NSS camps for ensuring the academic excellence and overall grooming of the students for attaining personal and professional success.",
    ],
  },
  {
    name: "Dr. P. Krishnakumar",
    role: "CEO & Secretary",
    image: Krishnakumar,
    alt: "Dr. P. Krishnakumar - CEO and Secretary",
    profile: [
      "Pro-Chancellor, P K Das Deemed to be University",
      "CEO & Secretary, NGI",
    ],
    paragraphs: [
      "Education should add value to life, be it knowledge, skill, attitude, behavior, wealth, health or character. NCERC, ever since its inception in 2002, has relentlessly pursued to impart world class education and training to the student fraternity, in order to enhance their academic excellence and professional competency.",
      "Foresight, discipline, intelligent planning and stringent execution of its academic procedures made NCERC one among the top private engineering colleges in the country.",
      "The college is committed to mould employable youth who are personally and professionally successful and can bring about exemplary changes in the modern world. It has entered into a partnership with various industries and organizations to make the student community professionally efficient and highly competitive in diverse fields of engineering, management and Information technology.",
    ],
  },
];

const milestones: Milestone[] = [
  { icon: Landmark, label: "Trust Established", value: "1968" },
  { icon: CalendarDays, label: "NCERC Since", value: "2002" },
  { icon: Award, label: "NAAC Re-Accredited", value: "‘A’ Grade" },
  { icon: ShieldCheck, label: "Certified", value: "ISO 9001:2015" },
];

/* ============================================================
   SMALL SHARED PIECES
============================================================ */

function Eyebrow({
  children,
  light = false,
}: {
  children: string;
  light?: boolean;
}) {
  return (
    <div className="flex items-center gap-3">
      <span aria-hidden="true" className="h-px w-10 bg-[#D2B87C]" />
      <span
        className={`text-xs font-semibold uppercase tracking-[0.24em] ${
          light ? "text-[#D2B87C]" : "text-[#8F7746]"
        }`}
      >
        {children}
      </span>
    </div>
  );
}

function DecorativeCircles() {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-[460px] w-[460px] rounded-full border border-[#D2B87C]/20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-10 top-24 h-[270px] w-[270px] rounded-full border border-[#D2B87C]/15"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -left-24 h-[430px] w-[430px] rounded-full border border-white/5"
      />
    </>
  );
}

/* ============================================================
   MEMBER SECTION
============================================================ */

function MemberSection({ member, index }: { member: Member; index: number }) {
  const isReversed = index % 2 === 1;
  const [leadParagraph, ...restParagraphs] = member.paragraphs;

  return (
    <section
      className={`py-14 sm:py-16 lg:py-20 ${
        index % 2 === 0 ? "bg-[#FAF7F2]" : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <div
          className={`grid items-center gap-10 lg:gap-16 ${
            isReversed
              ? "lg:grid-cols-[minmax(0,1fr)_400px]"
              : "lg:grid-cols-[400px_minmax(0,1fr)]"
          }`}
        >
          {/* Portrait + profile card */}
          <div
            className={`mx-auto w-full max-w-[400px] ${
              isReversed ? "lg:order-2" : ""
            }`}
          >
            <div className="overflow-hidden border border-[#D8D1C7] bg-white shadow-lg">
              <div className="relative aspect-[4/5] w-full bg-[#F2EFE8]">
                <Image
                  src={member.image}
                  alt={member.alt}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 1023px) 100vw, 400px"
                  className="object-cover object-top transition-transform duration-700 hover:scale-[1.025]"
                />

                {/* Gold corner detail */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute left-0 top-0 h-16 w-16 border-l-[5px] border-t-[5px] border-[#D2B87C]"
                />
              </div>

              {member.profile && (
                <div className="border-t-4 border-[#D2B87C] bg-[#20235A] px-6 py-6">
                  <p className="m-0 font-display text-xl font-semibold leading-snug text-white">
                    {member.name}
                  </p>

                  <ul className="m-0 mt-4 list-none space-y-2.5 p-0">
                    {member.profile.map((line) => (
                      <li
                        key={line}
                        className="flex items-start gap-3 text-sm leading-relaxed text-white/80"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[7px] h-1.5 w-1.5 shrink-0 rotate-45 bg-[#D2B87C]"
                        />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Content */}
          <div className={isReversed ? "lg:order-1" : ""}>
            <Eyebrow>{member.role}</Eyebrow>

            <h2 className="m-0 mt-5 max-w-3xl font-display text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-[#20235A] sm:text-4xl lg:text-[44px]">
              {member.name}
            </h2>

            <div aria-hidden="true" className="mt-6 h-px w-16 bg-[#D2B87C]" />

            <div className="mt-7 max-w-3xl space-y-5">
              <p className="m-0 border-l-2 border-[#D2B87C] pl-5 text-base leading-8 text-[#20235A]/85 sm:text-lg">
                {leadParagraph}
              </p>

              {restParagraphs.map((paragraph, paragraphIndex) => (
                <p
                  key={`${member.name}-${paragraphIndex}`}
                  className="m-0 text-[15px] leading-8 text-[#5F5A55] sm:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   MILESTONE CARD
============================================================ */

function MilestoneCard({
  milestone,
  index,
}: {
  milestone: Milestone;
  index: number;
}) {
  const Icon = milestone.icon;

  return (
    <div className="flex min-w-0 flex-col justify-between bg-[#20235A] px-6 py-8">
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#D2B87C]">
          <Icon size={21} strokeWidth={1.5} className="text-[#D2B87C]" />
        </div>

        <span className="font-display text-sm text-[#D2B87C]/80">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="mt-7">
        <p className="m-0 text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
          {milestone.label}
        </p>

        <p className="m-0 mt-2 break-words font-display text-2xl font-semibold leading-tight text-white sm:text-3xl">
          {milestone.value}
        </p>
      </div>
    </div>
  );
}

/* ============================================================
   PAGE
============================================================ */

export default function ManagementPage() {
  return (
    <main className="w-full overflow-x-clip bg-white">
      <SiteHeader />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative isolate overflow-hidden bg-[#20235A]">
        <div className="absolute inset-0 -z-20">
          <Image
            src="/images/management/pkdas.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-[0.13] grayscale"
          />
        </div>

        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#20235A]/95 via-[#20235A]/90 to-[#15183f]/95" />

        <DecorativeCircles />

        <div className="mx-auto max-w-[1280px] px-6 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
          <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16">
            <div>
              <Eyebrow light>Leadership &amp; Governance</Eyebrow>

              <h1 className="m-0 mt-5 max-w-4xl font-display text-[44px] font-semibold leading-[1.03] tracking-[-0.025em] text-white sm:text-[56px] lg:text-[66px]">
                Our
                <span className="block text-[#D2B87C]">Management.</span>
              </h1>

              <div aria-hidden="true" className="mt-6 h-px w-20 bg-[#D2B87C]" />

              <p className="m-0 mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                Meet the visionaries and trustees of the Nehru College of
                Education and Charitable Trust, whose guidance continues to
                shape NCERC and the Nehru Group of Institutions.
              </p>
            </div>

            {/* Hero statement */}
            <div className="max-w-sm border-l-2 border-[#D2B87C] py-2 pl-6">
              <p className="m-0 text-xs font-semibold uppercase tracking-[0.16em] text-[#D2B87C]">
                Our Management
              </p>

              <h2 className="m-0 mt-4 font-serif text-[30px] font-normal leading-tight text-white">
                Vision. Purpose.
                <br />
                <span className="italic text-[#D2B87C]">Progress.</span>
              </h2>

              <p className="m-0 mt-4 max-w-[260px] text-sm leading-[1.9] text-white/70">
                Guided by educational values, driven by innovation, and
                committed to shaping the leaders of tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRODUCTION
      ========================================================= */}
      <section className="bg-[#FAF7F2] py-12 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
          <div className="grid items-center gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <Eyebrow>Institutional Leadership</Eyebrow>

              <h2 className="m-0 mt-5 max-w-md font-display text-3xl font-semibold leading-tight text-[#20235A] sm:text-4xl">
                People behind the vision.
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="m-0 text-base leading-8 text-[#5F5A55] sm:text-lg">
                The leadership of NCERC carries forward a long-standing
                commitment to education, social responsibility, professional
                excellence and the holistic development of students.
              </p>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <div className="border-l-2 border-[#D2B87C] pl-5">
                  <p className="m-0 text-xs font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                    Founded
                  </p>
                  <p className="m-0 mt-2 font-display text-2xl font-semibold text-[#20235A]">
                    1968
                  </p>
                </div>

                <div className="border-l-2 border-[#D2B87C] pl-5">
                  <p className="m-0 text-xs font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                    NCERC Since
                  </p>
                  <p className="m-0 mt-2 font-display text-2xl font-semibold text-[#20235A]">
                    2002
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MEMBERS
      ========================================================= */}
      {members.map((member, index) => (
        <MemberSection key={member.name} member={member} index={index} />
      ))}

      {/* =========================================================
          LEGACY + MILESTONES
      ========================================================= */}
      <section className="relative isolate overflow-hidden bg-[#20235A] py-14 sm:py-16 lg:py-20">
        <DecorativeCircles />

        <div className="relative mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
          <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            {/* Statement */}
            <div>
              <Eyebrow light>Our Legacy</Eyebrow>

              <h2 className="m-0 mt-5 max-w-xl font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-[44px]">
                A vision that continues to guide us.
              </h2>

              <div aria-hidden="true" className="mt-6 h-px w-16 bg-[#D2B87C]" />

              <p className="m-0 mt-6 max-w-lg text-base leading-8 text-white/65">
                Together, the Founder Chairman, Chairman &amp; Managing
                Trustee and CEO &amp; Secretary have built NCERC into a centre
                of learning, research and character building.
              </p>

              <div className="mt-8 flex items-center gap-3">
                <Users
                  size={22}
                  strokeWidth={1.4}
                  className="text-[#D2B87C]"
                />
                <span className="text-sm text-white/55">
                  Leadership • Stewardship • Progress
                </span>
              </div>
            </div>

            {/* Milestones */}
            <div className="grid gap-px overflow-hidden border border-[#D2B87C]/30 bg-[#D2B87C]/25 sm:grid-cols-2">
              {milestones.map((milestone, index) => (
                <MilestoneCard
                  key={milestone.label}
                  milestone={milestone}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CLOSING
      ========================================================= */}
      <section className="bg-[#FAF7F2] py-12 sm:py-14">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="m-0 text-xs font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                Nehru College of Engineering &amp; Research Centre
              </p>

              <h2 className="m-0 mt-3 max-w-2xl font-display text-2xl font-semibold leading-tight text-[#20235A] sm:text-3xl">
                Leadership with purpose, education with a lasting impact.
              </h2>
            </div>

            <Link
              href="/about"
              className="group inline-flex shrink-0 items-center gap-3 border border-[#20235A] px-5 py-3 text-sm font-semibold text-[#20235A] transition-colors duration-300 hover:bg-[#20235A] hover:text-white"
            >
              <span>Explore About NCERC</span>

              <ArrowUpRight
                size={17}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}