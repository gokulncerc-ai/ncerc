import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../DepartmentNav/DepartmentNavigation";
import PlacementGallery from "./PlacementGallery/PlacementGallery";

export const metadata = {
title:
"Top Engineering Colleges in Thrissur | Computer Science and Engineering - NCERC",
description:
"Placement highlights of the Department of Computer Science and Engineering at Nehru College of Engineering and Research Centre, Thrissur.",
keywords: [
"engineering colleges thrissur",
"engineering colleges in thrissur",
"private engineering colleges in thrissur",
"top engineering colleges in thrissur",
"computer science engineering thrissur",
"Nehru College of Engineering and Research Centre thrissur",
"NCERC thrissur",
],
robots: { index: true, follow: true },
};

export default function PlacementPage() {
return (
<> <SiteHeader />

```
  {/* Page title banner */}
  <section className="relative isolate overflow-hidden bg-[#20235A]">
    <div className="absolute inset-0 bg-gradient-to-r from-[#15183F] via-[#20235A] to-[#292D69]" />
    <div className="absolute -right-16 -top-24 h-72 w-72 rounded-full border border-white/10" />
    <div className="absolute -right-2 -top-10 h-52 w-52 rounded-full border border-[#D2B87C]/20" />

    <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
      <div className="max-w-3xl">
        <div className="flex items-center gap-3">
          <span className="h-px w-9 bg-[#D2B87C]" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D2B87C] sm:text-sm">
            Department of Computer Science and Engineering
          </p>
        </div>

        <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Placement
        </h1>

        <p className="mt-5 max-w-2xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
          Discover the placement highlights and career opportunities of
          the Computer Science and Engineering department at NCERC.
        </p>

        <div className="mt-7 flex items-center gap-2">
          <span className="h-1 w-12 bg-[#D2B87C]" />
          <span className="h-1 w-2 bg-white/40" />
          <span className="h-1 w-2 bg-white/20" />
        </div>
      </div>
    </div>
  </section>

  {/* Main content */}
  <main className="bg-[#FAF7F2]">
    <InnerHeader />

    <section className="px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-9 flex flex-col gap-4 border-b border-[#D8D1C7] pb-6 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
              Career achievements
            </p>

            <h2 className="font-display text-3xl font-semibold tracking-tight text-[#20235A] sm:text-4xl">
              Placement Gallery
            </h2>

            <div className="mt-4 h-[3px] w-14 bg-[#D2B87C]" />
          </div>

          <p className="max-w-md text-sm leading-7 text-[#6A645D] sm:text-right">
            A glimpse into placement-related activities and milestones
            from the department.
          </p>
        </div>

        {/* Gallery */}
        <PlacementGallery />
      </div>
    </section>
  </main>

  <FooterSection />
</>
);
}
