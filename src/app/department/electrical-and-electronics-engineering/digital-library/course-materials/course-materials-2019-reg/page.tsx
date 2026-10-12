import Link from "next/link";
import { Landmark, ExternalLink } from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../../../DepartmentNav/DepartmentNav";

interface SemesterCard {
  title: string;
  href: string;
  external?: boolean;
}

const BASE =
  "/images/dpt/electrical-and-electronics-engineering/scheme_2019";

const semesterCards: SemesterCard[] = [
  { title: "SEMESTER 1", href: "#" },
  {
    title: "SEMESTER 2",
    href: `${BASE}/EST 130 BASICS OF ELECTRICAL ENGINEERING-Course Material.pdf`,
    external: true,
  },
  { title: "SEMESTER 3", href: `${BASE}/course-materials-2019-reg-sem3` },
  { title: "SEMESTER 4", href: `${BASE}/course-materials-2019-reg-sem4` },
  { title: "SEMESTER 5", href: "#" },
  { title: "SEMESTER 6", href: "#" },
  { title: "SEMESTER 7", href: "#" },
  { title: "SEMESTER 8", href: "#" },
];

export default function CourseMaterials2019RegPage() {
  return (
    <>
      <SiteHeader />

      {/* Page Title Banner */}
      <section className="relative isolate overflow-hidden bg-navy-950 py-16 sm:py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/95 to-navy-950/80" />
        <div className="relative mx-auto max-w-7xl px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-400">
            B.Tech. Electrical and Computer Engineering
          </p>
          <h1 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Course Materials 2019 Reg
          </h1>
          <div className="mt-6 h-1 w-16 bg-gold-500" />
        </div>
      </section>

      {/* Page Content */}
      <main className="bg-white">
        {/* Inner Sub-Header Navigation */}
        <InnerHeader />

        <section className="py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-10 border-b border-slate-200 pb-4">
              <h2 className="font-display text-2xl font-bold uppercase text-navy-950 sm:text-3xl">
                Course Materials 2019 Reg
              </h2>
              <div className="mt-3 h-1 w-12 bg-gold-500" />
            </div>

            {/* Semester Cards Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {semesterCards.map((card) => (
                <Link
                  key={card.title}
                  href={card.href}
                  target={card.external ? "_blank" : undefined}
                  rel={card.external ? "noopener noreferrer" : undefined}
                  className="group relative flex flex-col items-center justify-center rounded-2xl border border-slate-100 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold-500 hover:shadow-md"
                >
                  {/* Small external icon badge for PDFs or external links */}
                  {card.external && (
                    <div className="absolute top-4 right-4 text-slate-400 group-hover:text-gold-500">
                      <ExternalLink className="h-4 w-4" />
                    </div>
                  )}

                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-50 transition-colors duration-300 group-hover:bg-gold-500/10">
                    <Landmark className="h-8 w-8 text-gold-500" />
                  </div>
                  <h3 className="mt-4 font-display text-sm font-bold uppercase tracking-wider text-navy-950 transition-colors group-hover:text-gold-600">
                    {card.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}