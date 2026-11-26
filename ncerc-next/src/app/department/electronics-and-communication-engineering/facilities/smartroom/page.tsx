import Image from "next/image";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../../DepartmentNav/DepartmentNav";

// Adjust this to wherever the image lives inside /public
const SMART_ROOM_IMAGE =
  "/images/dpt/electronics-and-communication-engineering/facilities/smart room/smart-room.png";

export default function SmartRoomPage() {
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
              Electronics and Communication Engineering (NBA Accredited)
            </p>
          </div>

          <h1 className="mt-4 font-serif text-3xl font-normal leading-tight tracking-[-0.025em] text-white sm:text-4xl lg:text-5xl">
            Smart <span className="italic text-[#D2B87C]">Rooms</span>
          </h1>

          <div className="mt-6 h-px w-20 bg-[#D2B87C]" />
        </div>

        {/* Bottom accent bar */}
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
                Smart Rooms
              </h2>
              <div className="mt-3 h-1 w-12 bg-gold-500" />
            </div>

            <p className="text-justify text-base leading-8 text-slate-600">
              NCERC is equipped with 6 Smart Classrooms that are well
              furnished with fully functional smart boards, 64 MBps internet
              facility, personal address system &amp; much more. Electronics
              and Communication Engineering programme has a well-equipped
              and furnished smart room facility with high definition video
              recording capable Benq smart boards.
            </p>

            {/* Image */}
            <figure className="mt-10 max-w-3xl overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
              <div className="relative h-64 w-full sm:h-96">
                <Image
                  src={encodeURI(SMART_ROOM_IMAGE)}
                  alt="Smart Room"
                  fill
                  sizes="(min-width: 1024px) 768px, 100vw"
                  className="object-cover"
                />
              </div>
            </figure>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}