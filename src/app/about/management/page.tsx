import Image from "next/image";
import {
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

const members = [
  {
    name: "Late. P.K. Das",
    role: "Founder Chairman",
    image: Pkdas,
    alt: "Late P.K. Das - Founder Chairman",
    paragraphs: [
      "Late. P.K. Das, founder chairman of the \u2018Nehru College of Education and Charitable Trust\u2019, established in 1968, was a man of great vision, commitment, perseverance, dedication and devotion who pioneered revolutionary and innovative thoughts to revamp technical and professional education in the private sector.",
      "He was committed to the cause of the uneducated, the poor and social welfare; and undertook various initiatives such as extending support to the physically challenged, providing free education and medical treatment to the backward class, constituting over a thousand scholarships and awards for the needy children and donating homes for the homeless.",
      "The elegance of work culture and charisma instilled by the chairman still continues to vitalize the synchronized progress of the Nehru group of institutions, making it a prestigious center of learning and research. Let us all be blessed by the might of this great soul, who undoubtedly illuminates our path towards greater glory and success.",
    ],
  },
  {
    name: "Adv. Dr. P. Krishnadas",
    role: "Chairman & Managing Trustee",
    image: Krishnadas,
    alt: "Adv. Dr. P. Krishnadas - Chairman and Managing Trustee",
    paragraphs: [
      "NCERC, a dream-child of my beloved father Late Shri.P.K.Das, survived many a high tides and turbulent waters in the initial years of its establishment to emerge one among the top rated engineering colleges known for academic excellence, exemplary discipline and fabulous infrastructure.",
      "The college, Re-Accredited by NAAC with A Grade, NBA Accredited programmes and ISO 9001-2015 certified runs a chain of professional courses at B. Tech. and M.Tech. levels and has an excellent infrastructure which includes well-equipped and updated laboratories, a modern library with a rich collection of books, well-furnished classrooms, auditoriums, hostels and subsidized canteens, flawless transportation facilities and Wi-Fi connectivity.",
      "The departments are headed by highly qualified and experienced faculty who are highly professional, devoted and committed. Our focus is on molding academically, morally, ethically, and professionally true citizens who can contribute positively to the process of nation building.",
      "The college regularly holds international seminars, lectures, workshops, technical exhibitions, Motor-expos, N-Site and bloom, the annual cultural fest, NCC and NSS camps for ensuring the academic excellence and overall grooming of the students for attaining personal and professional success.",
    ],
  },
  {
    name: "Dr. P Krishnakumar",
    role: "CEO & Secretary",
    image: Krishnakumar,
    alt: "Dr. P. Krishnakumar - CEO and Secretary",
    paragraphs: [
      "Education should add value to life, be it knowledge, skill, attitude, behavior, wealth, health or character. NCERC, ever since its inception in 2002, has relentlessly pursued to impart world class education and training to the student fraternity, in order to enhance their academic excellence and professional competency.",
      "Foresight, discipline, intelligent planning and stringent execution of its academic procedures made NCERC one among the top private engineering colleges in the country.",
      "The college is committed to mould employable youth who are personally and professionally successful and can bring about exemplary changes in the modern world. It has entered into a partnership with various industries and organizations to make the student community professionally efficient and highly competitive in diverse fields of engineering, management and Information technology.",
    ],
  },
];

const milestones = [
  { icon: Landmark, label: "Trust Established", value: "1968" },
  { icon: CalendarDays, label: "NCERC Since", value: "2002" },
  { icon: Award, label: "NAAC Re-Accredited", value: "\u2018A\u2019 Grade" },
  { icon: ShieldCheck, label: "Certified", value: "ISO 9001:2015" },
];

export default function ManagementPage() {
  return (
    <main className="w-full max-w-[100vw] overflow-x-clip bg-white">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-950 py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute right-0 top-10 hidden h-32 w-32 lg:block"
          style={{
            backgroundImage:
              "radial-gradient(currentColor 1.5px, transparent 1.5px)",
            backgroundSize: "14px 14px",
            color: "#d9a441",
            opacity: 0.3,
          }}
        />

        <div className="relative mx-auto flex w-full max-w-8xl flex-col gap-8 px-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 shrink-0 bg-gold-500" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-500">
                Leadership &amp; Governance
              </span>
            </div>

            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Our
              <br />
              <span className="text-gold-500">Management</span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
              Meet the visionaries and trustees of the Nehru College of
              Education and Charitable Trust, whose guidance continues to
              shape NCERC and the Nehru Group of Institutions.
            </p>
          </div>

          <div className="flex shrink-0 flex-wrap items-center gap-3">
            <span className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white/60">
              NCERC
            </span>
            <span className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white/60">
              Management Trust
            </span>
          </div>
        </div>
      </section>

      {/* Management members */}
{/* Management members */}
{members.map((member, index) => {
  const isReversed = index % 2 === 1;
  const isCream = index % 2 === 0;
  const isKrishnadas = member.name === "Adv. Dr. P. Krishnadas";

  return (
    <section
      key={member.name}
      className={`w-full overflow-hidden py-16 sm:py-20 lg:py-24 ${
        isCream ? "bg-[#faf7f2]" : "bg-white"
      }`}
    >
      <div
        className={`
          mx-auto
          grid
          w-full
          max-w-8xl
          min-w-0
          grid-cols-1
          items-center
          gap-10
          px-6
          lg:gap-14
          ${
            isKrishnadas
              ? "lg:grid-cols-[minmax(0,1fr)_460px]"
              : "lg:grid-cols-[380px_minmax(0,1fr)]"
          }
        `}
      >
        {/* IMAGE */}
        <div
          className={`
            relative
            min-w-0
            w-full
            ${
              isKrishnadas
                ? "mx-auto max-w-[460px] lg:order-2"
                : "lg:order-1"
            }
          `}
        >
          {isKrishnadas ? (
            /* Horizontal Krishnadas image */
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[14px] bg-[#f5f2eb] shadow-sm">
              <Image
                src={member.image}
                alt={member.alt}
                fill
                sizes="(max-width: 1023px) 100vw, 460px"
                className="object-cover object-top"
              />
            </div>
          ) : (
            /* Normal vertical management images */
            <div className="relative h-80 w-full overflow-hidden sm:h-96 lg:h-[30rem]">
              <div
                aria-hidden
                className="absolute inset-0 bg-gold-500"
                style={{
                  clipPath: "polygon(0 0, 13% 0, 0 13%)",
                }}
              />

              <div
                aria-hidden
                className="absolute inset-0 bg-navy-950"
                style={{
                  clipPath: "polygon(100% 100%, 87% 100%, 100% 87%)",
                }}
              />

              <div
                className="absolute inset-0 overflow-hidden bg-slate-100"
                style={{
                  clipPath:
                    "polygon(13% 0, 100% 0, 100% 87%, 87% 100%, 0 100%, 0 13%)",
                }}
              >
                <Image
                  src={member.image}
                  alt={member.alt}
                  fill
                  sizes="(min-width: 1024px) 380px, 100vw"
                  className="object-cover object-top"
                  priority={index === 0}
                />
              </div>
            </div>
          )}
        </div>

        {/* CONTENT */}
        <div
          className={`
            min-w-0
            ${
              isReversed
                ? "lg:order-1"
                : "lg:order-2"
            }
          `}
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="h-px w-10 shrink-0 bg-gold-500" />

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-500">
              {member.role}
            </span>
          </div>

          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-navy-950 sm:text-4xl">
            {member.name}
          </h2>

          <span className="mt-5 block h-0.5 w-10 bg-gold-500" />

          <div className="mt-6 space-y-4">
            {member.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="
                  break-words
                  text-sm
                  leading-relaxed
                  text-slate-600
                  sm:text-base
                "
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
})}

      {/* Legacy band */}
      <section className="w-full overflow-hidden bg-navy-950 py-16">
        <div className="mx-auto w-full max-w-8xl px-6 text-center">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="h-px w-10 shrink-0 bg-gold-500" />

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-500">
              Our Legacy
            </span>

            <span className="h-px w-10 shrink-0 bg-gold-500" />
          </div>

          <h2 className="mt-3 font-display text-2xl font-semibold text-white sm:text-3xl">
            A Vision That Continues to Guide Us
          </h2>

          <div className="mt-10 grid grid-cols-2 gap-y-10 lg:grid-cols-4 lg:divide-x lg:divide-white/15">
            {milestones.map(({ icon: Icon, label, value }) => (
              <div key={label} className="min-w-0 px-4">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold-500">
                  <Icon
                    size={24}
                    strokeWidth={1.5}
                    className="text-navy-950"
                  />
                </span>

                <p className="mt-3 text-sm font-medium text-white/80">
                  {label}
                </p>

                <p className="mt-1 break-words font-display text-2xl font-bold text-white sm:text-3xl">
                  {value}
                </p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-12 flex max-w-2xl flex-col items-center gap-4">
            <Users
              size={28}
              strokeWidth={1.4}
              className="text-gold-500"
            />

            <p className="text-sm leading-relaxed text-white/70 sm:text-base">
              Together, the Founder Chairman, Chairman &amp; Managing Trustee
              and CEO &amp; Secretary have built NCERC into a centre of
              learning, research and character building.
            </p>
          </div>
        </div>
      </section>
      <FooterSection />
    </main>
  );
}