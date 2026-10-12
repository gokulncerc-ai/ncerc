import Image from "next/image";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../../DepartmentNav/DepartmentNavigation";

// Adjust these bases to wherever the images live inside /public
const CSE_BASE = "/images/dpt/computer-science-and-engineering/classroom";

const classroomImages = [
  {
    file: `${CSE_BASE}/CLASS-ROOMS1.jpg`,
    caption: "Aryabhatta Block",
  },
  {
    file: `${CSE_BASE}/CLASS-ROOMS2.jpg`,
    caption: "Bhaskara Block",
  },
  {
    file: `${CSE_BASE}/Smart class room with smart board.png`,
    caption: "Class Rooms",
  },
];

export default function ClassroomPage() {
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
            Class <span className="italic text-[#D2B87C]">Rooms</span>
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
                Class Rooms
              </h2>
              <div className="mt-3 h-1 w-12 bg-gold-500" />
            </div>

            <div className="space-y-5 text-justify text-base leading-8 text-slate-600">
              <p>
                Nehru College of Engineering and Research Centre follows the
                norms laid down by AICTE and APJ Abdul Kalam Technological
                University for creating and enhancing the infrastructure
                facilities for effective teaching and learning. The Computer
                Science and Engineering programme has sufficient classrooms
                (4 Nos), seminar halls (1 No), various laboratories, library
                with ILMS, and 64 MBps internet facility including Wi-Fi.
                The entire ambience of the college is clean and fresh. All
                the infrastructure facilities are provided with a vision to
                help students to develop their academics and career
                progression skills. The Institute&rsquo;s policy consists of
                ensuring optimum utilization of the space and
                infrastructures to achieve best outcome. Total area of our
                institution is 26228 Sq. Mts. The available physical
                infrastructure is optimally utilized beyond regular college
                hours, to conduct certificate courses, co-curricular
                activities/extra-curricular activities, parent&rsquo;s
                teachers meeting, Campus Recruitment training classes,
                campus recruitments, seminars, conferences etc.
              </p>
              <p>
                The Academic Blocks (Aryabhatta &amp; Bhaskara block) of
                NCERC provides requirements of lecture rooms, tutorial
                rooms, staff offices and offices for the head of the
                departments. The Academic Block consists of Lecture
                theatres, Tutorial rooms and separate cabins for each
                faculty. In addition to existing Power Generator, Institute
                purchased one more Gen Set with the capacity of 200 KVA at
                the cost of 11 Lakhs to provide uninterrupted Power Supply.
              </p>
            </div>

            {/* Gallery */}
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {classroomImages.map(({ file, caption }) => (
                <figure
                  key={file}
                  className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm"
                >
                  <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={encodeURI(file)}
                      alt={caption}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="py-3 text-center text-sm font-semibold text-navy-950">
                    {caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}