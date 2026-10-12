import { ChevronRight } from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../DepartmentNav/DepartmentNavigation";

const careerOptions = [
  "Software Developer",
  "Database Administrator",
  "Data Scientist",
  "AI Developer",
  "Computer Hardware Engineer",
  "Computer Network Architect",
  "IT Consultant",
  "Cyber-security Consultant",
  "Information Security Analyst",
  "Multimedia Programmer",
  "Web Developer",
  "Computer and Information Research Scientists",
  "Computer Systems Analyst",
  "Computer and Information Systems Managers",
  "Games Developer/App Developer",
  "IT Project Manager",
  "Technical Writer",
];

export default function CareerScopePage() {
  return (
    <>
      <SiteHeader />

{/* Page Title Banner */}
<section className="relative isolate overflow-hidden bg-[#20235A] py-16 sm:py-20 lg:py-24">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#20235A] via-[#20235A]/95 to-[#15183f]/90" />

        {/* Geometric circular overlays */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-[#D2B87C]/15" />
        <div className="pointer-events-none absolute -right-8 -top-8 h-56 w-56 rounded-full border border-[#D2B87C]/20" />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          {/* Badge / Department Tagline */}
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#D2B87C]" />
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D2B87C] sm:text-sm">
              Computer Science and Engineering
            </p>
          </div>

          {/* Heading with Serif & Italicized Accent Typography */}
          <h1 className="mt-4 font-serif text-3xl font-normal leading-tight tracking-[-0.025em] text-white sm:text-4xl lg:text-5xl">
            Career <span className="italic text-[#D2B87C]">Scope</span>
          </h1>

          {/* Divider Line */}
          <div className="mt-6 h-px w-20 bg-[#D2B87C]" />
        </div>

        {/* Bottom Accent Bar */}
        <div className="absolute bottom-0 inset-x-0 h-1 bg-[#D2B87C]" />
      </section>

      {/* Page Content */}
      <main className="bg-white">
        {/* Inner Sub-Header Navigation */}
        <InnerHeader />

        <section className="py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-10 border-b border-slate-200 pb-4">
              <h2 className="font-display text-2xl font-bold uppercase text-navy-950 sm:text-3xl">
                Career Scope
              </h2>
              <div className="mt-3 h-1 w-12 bg-gold-500" />
            </div>

            <div className="space-y-5 text-justify text-base leading-8 text-slate-600">
              <p>
                Computer science is inseparable in the day to day life of all
                people living in this world. The field of computer science
                is typically associated with the development of computer
                programs. Computer programs enable companies to conduct
                their business efficiently and easily. Program improvements
                can have a very important influence over the ability of
                businesses to be efficient and successful.
              </p>
              <p>
                However, the field of computer science is not limited to
                programming. Networks, security protocols, AI, Data Analysis
                etc., are all created by computer science professionals.
                Furthermore, individuals with advanced computer science
                degrees may also go on to instruct the next generation of
                degree majors. In essence, individuals who earn computer
                science degrees can develop skills that enable them to
                develop new products capable of revolutionizing the world.
              </p>
              <p>
                The economic significance of computer science is illustrated
                by the wide range of career opportunities. B.Tech Computer
                Science is a very versatile degree. Individuals with
                computer science degrees can be found working in both the
                public and the private sectors. They work in a wide range of
                industries, such as technology, finance and security. In
                addition, the government is an important employer of
                individuals with computer science degrees. DRDO, DST, NIC
                and other high profile agencies like ISRO also have
                opportunities for CS and IT professionals.
              </p>
              <p>
                Students who are studying Computer Science and Engineering
                can take a career path according to their interest. The
                partial list is shown here:
              </p>
            </div>

            <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              {careerOptions.map((option) => (
                <li key={option} className="flex items-start gap-3">
                  <ChevronRight
                    size={18}
                    strokeWidth={2.5}
                    className="mt-1 shrink-0 text-gold-500"
                  />
                  <span className="text-base font-semibold text-navy-950">
                    {option}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}