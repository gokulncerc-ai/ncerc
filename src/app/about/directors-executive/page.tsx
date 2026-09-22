import Image from "next/image";
import { ArrowUpRight, BriefcaseBusiness, Building2, Users } from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";

const directors = [
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
    role: "Director \u2013 Research, Accreditation & Ranking",
    image: "https://ncerc.ac.in/images/Directors-Executive-Members/dr_Gowri_R.png",
    description:
      "Dr. R. Gowri, Director \u2013 Research, Accreditation & Ranking at Nehru Group of Institutions, is a seasoned academician with over 27 years of experience in teaching, research and academic administration. A Ph.D. holder in Microwave Electronics, she has served in senior leadership roles including Pro-Vice Chancellor, Dean Academics, Dean Research and Founder Director at reputed universities. Her expertise includes OBE, NEP implementation, NAAC accreditation and NIRF rankings. She has also led and contributed to multiple AICTE, DRDO, ISRO and DST-funded research projects, including securing a \u20b91.3 crore DST-FIST grant for advanced 5G microwave research infrastructure.",
    profile:
      "https://ncerc.ac.in/documents/Directors-Executive-Members-profile/Dr.%20R%20Gowri%20Profile%20for%20Website.pdf",
  },
];

const executiveOfficers = [
  {
    name: "Mr. M Srinivasan",
    role: "Manager (Administration)",
    image: "https://ncerc.ac.in/images/Directors-Executive-Members/M.SRINIVAS.png",
  },
  {
    name: "Mr. R Unnikrishnan",
    role: "Manager Finance & Accounts",
    image: "https://ncerc.ac.in/images/Directors-Executive-Members/Unnikrishnan_R.png",
  },
  {
    name: "Mr. Sreekumar Nair",
    role: "HR Manager",
    image: "https://ncerc.ac.in/images/Directors-Executive-Members/shrikumar.png",
  },
];

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="w-full overflow-x-clip bg-white">
        {/* Hero */}
        <section className="relative overflow-hidden bg-navy-950 py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute right-0 top-10 hidden h-32 w-32 lg:block"
            style={{
              backgroundImage: "radial-gradient(currentColor 1.5px, transparent 1.5px)",
              backgroundSize: "14px 14px",
              color: "#d9a441",
              opacity: 0.3,
            }}
          />

          <div className="relative mx-auto flex max-w-8xl flex-col gap-8 px-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 shrink-0 bg-gold-500" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-500">
                  Leadership &amp; Administration
                </span>
              </div>

              <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
                Directors &amp;
                <br />
                <span className="text-gold-500">Executive Members</span>
              </h1>

              <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
                Meet the leadership team guiding institutional growth,
                academic excellence, research and effective administration
                at NCERC and the Nehru Group of Institutions.
              </p>
            </div>

            <div className="flex shrink-0 flex-wrap items-center gap-3">
              <span className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white/60">
                NCERC
              </span>
              <span className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white/60">
                Leadership Directory
              </span>
            </div>
          </div>
        </section>

        {/* Directors */}
        <section className="bg-[#faf7f2] py-20">
          <div className="mx-auto max-w-8xl px-6">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="min-w-0 flex-1">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-500">
                  01 &mdash; Directors
                </span>

                <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-navy-950 sm:text-4xl">
                  Institutional leadership
                  <br />
                  <span className="text-gold-500">with experience.</span>
                </h2>
              </div>

              <p className="max-w-md text-sm leading-relaxed text-slate-600 sm:text-base">
                Experienced academic and institutional leaders supporting
                strategic growth, research, accreditation and academic
                development.
              </p>
            </div>

            <div className="mt-14 space-y-10">
              {directors.map((director, index) => (
                <article
                  key={director.name}
                  className="relative grid grid-cols-1 gap-8 overflow-hidden rounded-2xl bg-white p-6 shadow-lg shadow-navy-950/5 sm:p-8 lg:grid-cols-[minmax(0,280px)_minmax(0,1fr)]"
                >
                  <span className="pointer-events-none absolute right-6 top-6 font-display text-5xl font-bold text-slate-100 sm:text-6xl">
                    0{index + 1}
                  </span>

                  <div className="relative h-64 w-full overflow-hidden rounded-xl sm:h-72 lg:h-80">
                    <Image
                      src={director.image}
                      alt={director.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 280px"
                      className="object-cover"
                    />
                  </div>

                  <div className="relative flex min-w-0 flex-col justify-between">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wide text-gold-500">
                        {director.role}
                      </span>

                      <h3 className="mt-2 font-display text-2xl font-semibold text-navy-950">
                        {director.name}
                      </h3>

                      <p className="mt-3 text-sm leading-relaxed text-slate-600">
                        {director.description}
                      </p>
                    </div>

                    <a
                      href={director.profile}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold uppercase tracking-wide text-navy-950 transition hover:text-gold-500"
                    >
                      Read Full Profile
                      <ArrowUpRight size={16} className="shrink-0" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership statement */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-8xl px-6">
            <div className="flex flex-col items-start gap-6 rounded-2xl bg-slate-50 p-8 sm:p-10 lg:flex-row lg:items-center lg:gap-10">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-navy-950">
                <Users size={22} strokeWidth={1.5} className="text-gold-500" />
              </span>

              <div className="min-w-0 flex-1">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-500">
                  Institutional Leadership
                </span>

                <h2 className="mt-2 font-display text-2xl font-semibold leading-tight text-navy-950 sm:text-3xl">
                  Experience that supports{" "}
                  <span className="text-gold-500">institutional excellence.</span>
                </h2>
              </div>

              <p className="max-w-sm text-sm leading-relaxed text-slate-600">
                NCERC&rsquo;s leadership brings together academic experience,
                research expertise, accreditation knowledge and
                administrative capabilities to support the institution&rsquo;s
                continued development.
              </p>
            </div>
          </div>
        </section>

        {/* Executive Officers */}
        <section className="bg-[#faf7f2] py-20">
          <div className="mx-auto max-w-8xl px-6">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="min-w-0 flex-1">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-500">
                  02 &mdash; Executive Officers
                </span>

                <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-navy-950 sm:text-4xl">
                  Executive
                  <br />
                  <span className="text-gold-500">administration.</span>
                </h2>
              </div>

              <p className="max-w-md text-sm leading-relaxed text-slate-600 sm:text-base">
                The executive team supports the day-to-day administrative,
                financial and human resource functions of the institution.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-[repeat(3,minmax(0,1fr))]">
              {executiveOfficers.map((officer, index) => (
                <article
                  key={officer.name}
                  className="overflow-hidden rounded-2xl bg-white shadow-lg shadow-navy-950/5"
                >
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={officer.image}
                      alt={officer.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />

                    <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-navy-950/80 text-sm font-bold text-gold-500 backdrop-blur">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="p-6">
                    <span className="text-xs font-semibold uppercase tracking-wide text-gold-500">
                      {officer.role}
                    </span>

                    <h3 className="mt-1 font-display text-lg font-semibold text-navy-950">
                      {officer.name}
                    </h3>

                    <div className="mt-3 flex items-center gap-2 text-sm text-slate-600">
                      <BriefcaseBusiness size={16} className="shrink-0 text-gold-500" />
                      <span>Executive Officer</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-navy-950 py-16">
          <div className="mx-auto max-w-8xl px-6 text-center">
            <div className="mx-auto max-w-2xl">
              <Building2 size={30} strokeWidth={1.4} className="mx-auto text-gold-500" />

              <h2 className="mt-4 font-display text-2xl font-semibold leading-tight text-white sm:text-3xl">
                Leadership that shapes
                <br />
                <span className="text-gold-500">the future of NCERC.</span>
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
                Together, the Directors and Executive Officers contribute to
                the academic, administrative and institutional journey of
                the Nehru Group of Institutions.
              </p>
            </div>
          </div>
        </section>
        <FooterSection />
      </main>
    </>
  );
}