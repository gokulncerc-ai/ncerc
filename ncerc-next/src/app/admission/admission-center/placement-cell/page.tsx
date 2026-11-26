import Link from "next/link";
import Image from "next/image";
import { Download, ArrowRight, Award, Building2, Briefcase, Users } from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";

// Adjust this base path to wherever you keep the company logos inside /public
const COMPANY_LOGO_BASE = "/images/academics";

const placementData = [
  {
    label: "Placement Status 2022",
    href: "/admission/admission-center/placement-cell/placement-data-2022",
    internal: true,
  },
  {
    label: "2022 Placement Report",
    href: "/images/academics/placement2022.pdf",
  },
  {
    label: "2021 Placement Report",
    href: "/images/academics/Placement_cell_2021.pdf",
  },
  {
    label: "2020 Placement Report",
    href: "/images/academics/Placement_cell_2020.pdf",
  },
  {
    label: "2019 Placement Report",
    href: "/images/academics/Placement_cell_2019.pdf",
  },
  {
    label: "2018 Placement Report",
    href: "/images/academics/Placement_cell_2018.pdf",
  },
];

const companyLogos = [
  { file: "Amazon.png", name: "Amazon" },
  { file: "infosys.png", name: "Infosys" },
  { file: "cognisent.png", name: "Cognizant" },
  { file: "ust.png", name: "UST Global" },
  { file: "wipro.png", name: "Wipro" },
  { file: "BYJUS.png", name: "BYJU'S" },
  { file: "Bosch.png", name: "Bosch" },
  { file: "hgs.png", name: "HGS" },
  { file: "shriram.png", name: "Shriram" },
  { file: "accenta.png", name: "Accenta" },
  { file: "edumatics.png", name: "Edumatics" },
  { file: "iccs.png", name: "ICCS" },
  { file: "karvy.png", name: "Karvy" },
  { file: "mwt.png", name: "MWT" },
  { file: "tcs.png", name: "TCS" },
  { file: "trimed.png", name: "Trimed" },
  { file: "suguna.png", name: "Suguna" },
];

export default function PlacementCellPage() {
  return (
    <>
      <SiteHeader />

      {/* Page Title Banner */}
      <section className="relative isolate overflow-hidden bg-[#20235A] py-16 sm:py-20 lg:py-24">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#20235A] via-[#20235A]/95 to-[#15183f]/90" />

        {/* Subtle decorative circles */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-[#D2B87C]/15" />
        <div className="pointer-events-none absolute -right-8 -top-8 h-56 w-56 rounded-full border border-[#D2B87C]/20" />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#D2B87C]" />
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D2B87C] sm:text-sm">
              Placements
            </p>
          </div>

          <h1 className="mt-4 font-serif text-3xl font-normal leading-tight tracking-[-0.025em] text-white sm:text-4xl lg:text-5xl">
            Placement <span className="italic text-[#D2B87C]">Cell</span>
          </h1>

          <div className="mt-6 h-px w-20 bg-[#D2B87C]" />
        </div>

        {/* Bottom accent bar */}
        <div className="absolute bottom-0 inset-x-0 h-1 bg-[#D2B87C]" />
      </section>

      <main className="bg-slate-50/50">
        {/* Intro Highlight Section */}
        <section className="py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-10 shadow-sm border-l-4 border-l-[#20235A]">
              <div className="flex items-center gap-3 text-[#D2B87C]">
                <Award size={24} />
                <span className="text-xs font-semibold uppercase tracking-widest text-[#20235A]">
                  Corporate Relations & Career Advancement
                </span>
              </div>
              <p className="mt-4 text-justify text-base leading-relaxed text-slate-700 sm:text-lg">
                Nehru Corporate Placements &amp; Industry Relations (NCP &amp; IR)
                has been extending employability for our students at Global
                Level. NCP &amp; IR had made remarkable record placements during
                the academic year 2017-18, 2018-19 &amp; 2019-20. Being the most
                active campus partner with Infosys, the institute has achieved the
                status of Advanced Campus Connect programme honored by INFOSYS.
                In recognition of this NCP &amp; IR got the Remarkable Performance
                Award for the year 2015-16. It is a matter of pride and esteem
                for NCP &amp; IR that a large number of our students got
                placements with a remarkably good salary package in many of the
                reputed companies.
              </p>
            </div>
          </div>
        </section>

        {/* Placement Data Downloads */}
        <section className="bg-white py-14 sm:py-16 lg:py-20 border-y border-slate-200/80">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#D2B87C]">
                Archives & Reports
              </span>
              <h2 className="mt-2 font-serif text-2xl font-normal text-[#20235A] sm:text-3xl">
                Placement <span className="italic text-[#D2B87C]">Data & Records</span>
              </h2>
              <div className="mx-auto mt-3 h-0.5 w-12 bg-[#D2B87C]" />
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {placementData.map((item) =>
                item.internal ? (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-slate-50/50 p-5 shadow-sm transition-all duration-200 hover:border-[#D2B87C] hover:bg-white hover:shadow-md"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#20235A]/5 text-[#20235A] transition-colors group-hover:bg-[#D2B87C]/20 group-hover:text-[#20235A]">
                      <ArrowRight size={20} strokeWidth={2} />
                    </span>
                    <span className="font-serif text-base font-normal text-[#20235A]">
                      {item.label}
                    </span>
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-slate-50/50 p-5 shadow-sm transition-all duration-200 hover:border-[#D2B87C] hover:bg-white hover:shadow-md"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#20235A]/5 text-[#20235A] transition-colors group-hover:bg-[#D2B87C]/20 group-hover:text-[#20235A]">
                      <Download size={20} strokeWidth={2} />
                    </span>
                    <span className="font-serif text-base font-normal text-[#20235A]">
                      {item.label}
                    </span>
                  </a>
                )
              )}
            </div>
          </div>
        </section>

        {/* Detailed Information Blocks */}
        <section className="py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl space-y-8 px-6 sm:px-8 lg:px-12">
            
            {/* Block 1 */}
            <div className="rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3">
                <Briefcase size={22} className="text-[#D2B87C]" />
                <h3 className="font-serif text-xl font-normal text-[#20235A] sm:text-2xl">
                  NCERC <span className="italic text-[#D2B87C]">Placements</span>
                </h3>
              </div>
              <div className="mt-3 h-0.5 w-12 bg-[#D2B87C]" />
              <p className="mt-4 text-justify text-base leading-relaxed text-slate-700">
                Nehru Corporate Placements &amp; Industry Relations (NCP&amp;IR)
                has grown in status keeping in pace with the fast changes in
                the technological world. NCP &amp; IR aims to integrate
                various industry relevant trainings and certifications as a
                part of its technology driven platform &lsquo;Spark.&rsquo; A
                vibrant team of staff and students coordinate the activities
                and events of NCP&amp;IR at NCERC to provide the best
                employment opportunities for our aspiring engineers. It is,
                indeed, a matter of pride and esteem for NCERC that a large
                number of our graduated students got placements with a
                remarkably good salary package in many of the reputed
                companies. Some of our recruiting partners are Wildcraft, Jaro
                Education, HDFC Bank, Idea Cellular, KPMG, ESAF, Naukri.com,
                Amazon, Asian Paints, ICICI Prudential, ICICI Securities, New
                Age Solutions, AIMS, Nestle, Navy, Army, Tata AIG, TCS, IBS,
                KAAR Technologies, VEE Technologies, Solvent India and IVTL
                Infoview Technologies.
              </p>
            </div>

            {/* Block 2 */}
            <div className="rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3">
                <Building2 size={22} className="text-[#D2B87C]" />
                <h3 className="font-serif text-xl font-normal text-[#20235A] sm:text-2xl">
                  Memberships &amp; <span className="italic text-[#D2B87C]">Industry Tie-Ups</span>
                </h3>
              </div>
              <div className="mt-3 h-0.5 w-12 bg-[#D2B87C]" />
              <p className="mt-4 text-justify text-base leading-relaxed text-slate-700">
                NCERC is ever committed to maintain tie ups and memberships
                with various prestigious institutes, academies and industrial
                organizations. Member College-ICT Academy of Kerala delivers
                various employability programs to our students and faculties
                in association with the Government of Kerala &amp; APJ Kalam
                Technological University. The college has association with
                Oracle Academy through ICTAK and FACE for various employability
                enhancement programs. Insight Job Guru- Team IJG rolls out its
                various flagship programs such as ASPIRO and Lakshya for the
                students. The college has signed an MoU with P3 Aerospace for
                comprehensive academic partnership programs in pipeline. NCP
                &amp; IR has been able to place students in Indian Navy, KPMG,
                Speridian Technologies, Tech Mahindra, CSS Corp, P3 Aerospace,
                ZOHO, Syntel, Jaro Education, New Age Sys. solutions, IBS,
                Nestle, KAAR Technologies, ESAF, Accenta, FACE, ICICI
                Prudential, NDOT Technologies and VEE Technologies.
              </p>
            </div>

            {/* Block 3 */}
            <div className="rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3">
                <Users size={22} className="text-[#D2B87C]" />
                <h3 className="font-serif text-xl font-normal text-[#20235A] sm:text-2xl">
                  Defense &amp; <span className="italic text-[#D2B87C]">Premium Recruiters</span>
                </h3>
              </div>
              <div className="mt-3 h-0.5 w-12 bg-[#D2B87C]" />
              <p className="mt-4 text-justify text-base leading-relaxed text-slate-700">
                Our premium client list includes the Indian Navy &amp; Indian Army
                among other esteemed public and private enterprises. NCP &amp; IR is
                looking forward to integrate various industry relevant trainings and
                certifications as part of its technology driven platform Spark,
                making it the most competitive placement cell in the state in years to come.
                A young and dynamic team at NCPIR looks forward to a challenging and
                rewarding year ahead.
              </p>
            </div>

          </div>
        </section>

        {/* Recruiter Logos */}
        <section className="bg-white py-14 sm:py-16 lg:py-20 border-t border-slate-200/80">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#D2B87C]">
                Our Network
              </span>
              <h2 className="mt-2 font-serif text-2xl font-normal text-[#20235A] sm:text-3xl">
                Major <span className="italic text-[#D2B87C]">Recruiters</span>
              </h2>
              <div className="mx-auto mt-3 h-0.5 w-12 bg-[#D2B87C]" />
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {companyLogos.map((logo) => (
                <div
                  key={logo.file}
                  className="flex h-28 items-center justify-center rounded-xl border border-slate-200/80 bg-white p-4 shadow-sm transition-all duration-200 hover:border-[#D2B87C]/50 hover:shadow-md"
                >
                  <Image
                    src={`${COMPANY_LOGO_BASE}/${logo.file}`}
                    alt={logo.name}
                    width={160}
                    height={80}
                    className="h-auto max-h-full w-auto max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-200"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}