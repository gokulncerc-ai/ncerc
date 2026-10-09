import Link from "next/link";
import { Landmark } from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../../DepartmentNav/page";

interface RegCard {
  title: string;
  href: string;
}

const BASE =
  "/department/electrical-and-electronics-engineering/digital-library/course-materials";

const regCards: RegCard[] = [
  {
    title: "2019 REG",
    href: `${BASE}/course-materials-2019-reg`,
  },
  {
    title: "2021 REG",
    href: `${BASE}/course-materials-2021-reg`,
  },
];

export default function CourseMaterialsPage() {
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
            Course Materials
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
                Course Materials
              </h2>
              <div className="mt-3 h-1 w-12 bg-gold-500" />
            </div>

            {/* Regulation Cards Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {regCards.map((card) => (
                <Link
                  key={card.title}
                  href={card.href}
                  className="group flex flex-col items-center justify-center rounded-2xl border border-slate-100 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold-500 hover:shadow-md"
                >
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