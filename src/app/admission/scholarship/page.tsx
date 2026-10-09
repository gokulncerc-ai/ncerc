import { Fragment } from "react";
import { ExternalLink, Mail } from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";

type Scholarship = {
  no: number;
  title: string;
  href: string;
};

type ScholarshipSection = {
  heading: string | null;
  items: Scholarship[];
};

const sections: ScholarshipSection[] = [
  {
    heading: null,
    items: [
      {
        no: 1,
        title:
          "Central Sector Scheme of Scholarships for College and University Students",
        href: "https://scholarships.gov.in",
      },
      {
        no: 2,
        title: "Post Matric Scholarship for SC/ST Students",
        href: "https://socialjustice.gov.in",
      },
      {
        no: 3,
        title: "INSPIRE SHE Scholarship",
        href: "https://online-inspire.gov.in",
      },
      {
        no: 4,
        title: "AICTE Scholarships Schemes",
        href: "https://www.aicte-india.org",
      },
      {
        no: 5,
        title:
          "Merit Cum Means Scholarship for Professional and Technical Courses (Minorities)",
        href: "https://minorityaffairs.gov.in",
      },
      {
        no: 6,
        title: "Prime Minister's Scholarship Scheme (PMSS)",
        href: "https://www.ksb.gov.in",
      },
    ],
  },
  {
    heading: "UGC Scholarship",
    items: [
      {
        no: 7,
        title: "Post-Matric Scholarships for Minorities",
        href: "https://scholarships.gov.in",
      },
      {
        no: 8,
        title: "National Merit Scholarships",
        href: "https://www.ugc.gov.in",
      },
      {
        no: 9,
        title: "PG Scholarships for University Rank Holders",
        href: "https://www.ugc.gov.in",
      },
    ],
  },
  {
    heading: "Notable Private Philanthropic Scholarships for UG Programs",
    items: [
      {
        no: 10,
        title: "Aditya Birla Group Scholarships",
        href: "https://www.adityabirlascholars.net",
      },
      {
        no: 11,
        title: "L'Oréal India For Young Women in Science Scholarship",
        href: "https://www.loreal.com",
      },
      {
        no: 12,
        title: "Reliance Foundation Scholarships",
        href: "https://www.reliancefoundation.org",
      },
      {
        no: 13,
        title: "Google India Scholarship for Indian Students",
        href: "https://www.google.com",
      },
      {
        no: 14,
        title: "Dr. Ambedkar Scholarship Scheme for SC Students",
        href: "https://socialjustice.gov.in",
      },
      {
        no: 15,
        title: "Tata Scholarship (Cornell University)",
        href: "https://admissions.cornell.edu",
      },
      {
        no: 16,
        title: "Fulbright-Nehru Master's Fellowships",
        href: "https://www.usief.org.in",
      },
      {
        no: 17,
        title: "K.C. Mahindra Scholarships for PG Studies Abroad",
        href: "https://www.kcmet.org",
      },
      {
        no: 18,
        title: "JN Tata Endowment Loan Scholarship",
        href: "https://www.dorabjitatatrust.org",
      },
      {
        no: 19,
        title: "Commonwealth Scholarships",
        href: "https://cscuk.fcdo.gov.uk",
      },
      {
        no: 20,
        title: "Erasmus+ Scholarships",
        href: "https://ec.europa.eu",
      },
      {
        no: 21,
        title: "Narotam Sekhsaria Scholarship",
        href: "https://www.nsscholarship.net",
      },
    ],
  },
  {
    heading: "Scholarships for International Students in India",
    items: [
      {
        no: 22,
        title: "Jawaharlal Nehru Scholarship for International Students",
        href: "https://www.jnmf.in/saform.html",
      },
      {
        no: 23,
        title: "Indian Council for Cultural Relations (ICCR) Scholarships",
        href: "https://www.iccr.gov.in",
      },
      {
        no: 24,
        title: "Study in India (SII) Scholarship",
        href: "https://studyinindia.gov.in",
      },
      {
        no: 25,
        title: "Commonwealth Scholarship and Fellowship Plan (CSFP)",
        href: "https://cscuk.fcdo.gov.uk",
      },
      {
        no: 26,
        title: "SAARC Scholarship Scheme",
        href: "https://www.education.gov.in",
      },
      {
        no: 27,
        title: "Nalanda University Scholarships",
        href: "https://www.nalandauniv.edu.in",
      },
      {
        no: 28,
        title: "Indian Technical and Economic Cooperation (ITEC) Program",
        href: "https://www.tatatrusts.org",
      },
      {
        no: 29,
        title: "Tata Scholarship for International Students",
        href: "https://www.tatatrusts.org",
      },
      {
        no: 30,
        title: "AYUSH Scholarship for Foreign Students",
        href: "https://a2ascholarships.iccr.gov.in",
      },
      {
        no: 31,
        title: "Fulbright-Nehru Master's Fellowships for Indian Institutions",
        href: "https://www.usief.org.in",
      },
      {
        no: 32,
        title: "Erasmus+ Scholarships for India",
        href: "https://ec.europa.eu",
      },
      {
        no: 33,
        title: "Music Fine Arts Scholarship",
        href: "http://www.dcescholarship.kerala.gov.in",
      },
      {
        no: 34,
        title: "Blind/Physically Handicapped Scholarship (BPHFC)",
        href: "http://www.dcescholarship.kerala.gov.in",
      },
      {
        no: 35,
        title: "Sanskrit Scholarship",
        href: "http://www.dcescholarship.kerala.gov.in",
      },
      {
        no: 36,
        title: "Muslim Nadar Girls Scholarship",
        href: "http://www.dcescholarship.kerala.gov.in",
      },
      {
        no: 37,
        title: "Hindi Scholarship",
        href: "http://www.dcescholarship.kerala.gov.in",
      },
      {
        no: 38,
        title: "Merit Scholarship to the Children of School Teachers",
        href: "http://www.dcescholarship.kerala.gov.in",
      },
      {
        no: 39,
        title: "District Merit Scholarship",
        href: "http://www.dcescholarship.kerala.gov.in",
      },
    ],
  },
  {
    heading: "UG Scholarships Provided by Government of Kerala",
    items: [
      {
        no: 40,
        title: "E-Grantz Scholarship",
        href: "https://egrantz.kerala.gov.in",
      },
      {
        no: 41,
        title: "Suvarna Jubilee Merit Scholarship",
        href: "http://www.dcescholarship.kerala.gov.in",
      },
      {
        no: 42,
        title: "C.H. Muhammed Koya Muslim Girls Scholarship",
        href: "http://www.dcescholarship.kerala.gov.in",
      },
      {
        no: 43,
        title: "Post Matric Scholarship",
        href: "https://scholarships.gov.in",
      },
      {
        no: 44,
        title: "Snehapoorvam Scholarship",
        href: "https://www.socialsecuritymission.gov.in",
      },
      {
        no: 45,
        title: "Fisheries Scholarship",
        href: "http://www.fisheries.kerala.gov.in",
      },
      {
        no: 46,
        title: "State Merit Scholarship",
        href: "http://www.dcescholarship.kerala.gov.in",
      },
      {
        no: 47,
        title: "State Scholarship Portal",
        href: "https://www.dcescholarship.kerala.gov.in",
      },
      {
        no: 48,
        title: "National Scholarship Portal",
        href: "https://scholarships.gov.in",
      },
      {
        no: 49,
        title: "Kerala State Higher Education Council (KSHEC) Scholarship",
        href: "mailto:hecscholarship@gmail.com",
      },
      {
        no: 50,
        title: "Vidya Samunnathi Fellowship",
        href: "https://www.schemes.kswcfc.org/",
      },
      {
        no: 51,
        title: "NORKA Roots Scholarship",
        href: "https://norkaroots.org/scholarship",
      },
    ],
  },
];

export default function ScholarshipPage() {
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
              Admissions
            </p>
          </div>

          <h1 className="mt-4 font-serif text-3xl font-normal leading-tight tracking-[-0.025em] text-white sm:text-4xl lg:text-5xl">
            Scholarship <span className="italic text-[#D2B87C]">Details</span>
          </h1>

          <div className="mt-6 h-px w-20 bg-[#D2B87C]" />
        </div>

        {/* Bottom accent bar */}
        <div className="absolute bottom-0 inset-x-0 h-1 bg-[#D2B87C]" />
      </section>

      {/* Page Content */}
      <main className="bg-white">
        <section className="py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full min-w-[640px] border-collapse text-left text-sm sm:text-base">
              <thead>
                  <tr className="bg-[#20235A] text-white">
                    <th className="w-20 px-4 py-3 font-serif text-base font-normal tracking-wide">
                      SI No
                    </th>
                    <th className="px-4 py-3 font-serif text-base font-normal tracking-wide">
                      Scholarship Details
                    </th>
                    <th className="w-40 px-4 py-3 font-serif text-base font-normal tracking-wide">
                      URL
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {sections.map((section, sectionIndex) => (
                    <Fragment key={section.heading ?? `section-${sectionIndex}`}>
                      {section.heading && (
                        <tr className="bg-gold-500/10">
                          <td
                            colSpan={3}
                            className="border-t border-slate-200 px-4 py-3 text-center text-sm font-bold uppercase tracking-wide text-navy-950"
                          >
                            {section.heading}
                          </td>
                        </tr>
                      )}

                      {section.items.map((item) => {
                        const isMail = item.href.startsWith("mailto:");

                        return (
                          <tr
                            key={item.no}
                            className={
                              item.no % 2 === 0 ? "bg-slate-50" : "bg-white"
                            }
                          >
                            <td className="border-t border-slate-200 px-4 py-3 align-top font-semibold text-navy-950">
                              {item.no}
                            </td>
                            <td className="border-t border-slate-200 px-4 py-3 align-top text-slate-700">
                              {item.title}
                            </td>
                            <td className="border-t border-slate-200 px-4 py-3 align-top">
                              <a
                                href={item.href}
                                {...(isMail
                                  ? {}
                                  : {
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                    })}
                                className="inline-flex items-center gap-1.5 font-semibold text-navy-950 transition hover:text-gold-600"
                              >
                                {isMail ? (
                                  <Mail size={15} />
                                ) : (
                                  <ExternalLink size={15} />
                                )}
                                Click Here
                              </a>
                            </td>
                          </tr>
                        );
                      })}
                    </Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}