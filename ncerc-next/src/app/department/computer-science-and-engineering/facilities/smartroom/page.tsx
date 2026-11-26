import type { ReactNode } from "react";
import Image from "next/image";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import DepartmentNav from "../../DepartmentNav/DepartmentNavigation";

export const metadata = {
  title:
    "Top Engineering Colleges in Thrissur | Computer Science and Engineering - NCERC",
  description:
    "Smart room facilities at the Computer Science and Engineering department of Nehru College of Engineering and Research Centre.",
  keywords: [] as string[],
  robots: { index: true, follow: true },
};

const SMARTROOM_IMAGE_PATH =
  "/images/dpt/computer-science-and-engineering/smartroom/Smart class room with smart board (1).png";

function SectionBlock({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="border-t border-slate-200 pt-12 first:border-t-0 first:pt-0">
      <h2 className="font-display text-2xl font-bold text-navy-950 sm:text-3xl">
        {title}
      </h2>
      <div className="mt-4 h-1 w-12 bg-gold-500" />
      <div className="mt-6">{children}</div>
    </div>
  );
}

export default function SmartRoomPage() {
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
            Smart <span className="italic text-[#D2B87C]">Rooms</span>
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
        <DepartmentNav />

        <section className="py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl space-y-12 px-6">
            {/* Smart Rooms Section */}
            <SectionBlock title="Smart Rooms">
              <div className="space-y-8">
                <p className="text-justify text-base leading-8 text-slate-600">
                  NCERC is equipped with 6 Smart Classrooms that are well
                  furnished with fully functional smart boards, 64MBps internet
                  facility, personal address system &amp; much more. Computer
                  science and engineering programme has a well-equipped and
                  furnished smart room facility with high definition video
                  recording capable Benq smart boards.
                </p>

                {/* Smart Room Image Gallery/Display */}
                <div className="relative h-[320px] w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-2 shadow-sm sm:h-[450px] lg:h-[550px]">
                  <Image
                    src={SMARTROOM_IMAGE_PATH}
                    alt="Smart class room with smart board"
                    fill
                    priority
                    sizes="(min-width: 1280px) 1200px, 100vw"
                    className="object-contain"
                  />
                </div>
              </div>
            </SectionBlock>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}