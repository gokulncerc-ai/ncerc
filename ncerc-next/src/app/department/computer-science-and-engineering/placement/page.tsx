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


      {/* Page title banner */}

      {/* Placements Hero */}

      {/* Placements Hero */}
      <section className="relative isolate overflow-hidden bg-[#20235A]">
        {/* Background Decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#20235A] via-[#20235A] to-[#171A43]" />

        <div className="pointer-events-none absolute -right-24 top-12 h-[430px] w-[430px] rounded-full border border-[#D2B87C]/15" />
        <div className="pointer-events-none absolute -right-10 top-28 h-[290px] w-[290px] rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -left-28 bottom-[-180px] h-[360px] w-[360px] rounded-full border border-[#D2B87C]/10" />

        {/* Hero Content */}
        <div className="relative mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-24 xl:px-20">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#D2B87C]" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D2B87C] sm:text-xs">
                Department of Computer Science and Engineering
              </p>
            </div>

            {/* Heading */}
            <h1 className="mt-7 font-serif text-[42px] font-normal leading-[1.06] tracking-[-0.035em] text-white sm:text-[56px] lg:text-[64px] xl:text-[72px]">
              Placement
            </h1>

            {/* Gold Divider */}
            <div className="mt-7 h-px w-20 bg-[#D2B87C]" />

            {/* Description */}
            <p className="mt-7 max-w-2xl font-sans text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
              Discover the placement highlights and career opportunities of
              the Computer Science and Engineering department at NCERC.
            </p>
          </div>
        </div>

        {/* Bottom Accent */}
        <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[#D2B87C] to-transparent" />
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
