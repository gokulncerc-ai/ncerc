import Image from "next/image";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../../DepartmentNav/page";

// Adjust this base to wherever the lab images live inside /public
const LAB_BASE = "/images/dpt/computer-science-and-engineering/lab";

type Lab = {
  title: string;
  image: string;
  description: React.ReactNode;
};

const labs: Lab[] = [
  {
    title: "Advanced Software Lab",
    image: "Advanced software lab.png",
    description: (
      <>
        <p>Students will be able to do the following:</p>
        <ul className="mt-3 space-y-2">
          <li>
            <span className="mr-2 font-semibold text-red-600">1.</span>
            Identify and apply various Linux commands
          </li>
          <li>
            <span className="mr-2 font-semibold text-red-600">2.</span>
            Develop shell scripts and GUI for specific needs
          </li>
          <li>
            <span className="mr-2 font-semibold text-red-600">3.</span>
            Use tools like GIT
          </li>
          <li>
            <span className="mr-2 font-semibold text-red-600">4.</span>
            Perform basic level application deployment, kernel configuration
            and installation, packet management and installation etc.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Engineering Graphics Lab",
    image: "Engineering Graphics Lab.png",
    description: (
      <p>
        Engineering Graphics Lab is used for creation, modification,
        analysis and optimization of designs for improved engineering
        productivity. One can create a library and use a single drawing, a
        number of times whenever required.
      </p>
    ),
  },
  {
    title: "Cyber Security Lab",
    image: "Cyber Security Lab .png",
    description: (
      <p>
        Students can implement Substitution and Transposition ciphers, Data
        Encryption Algorithms, Advanced Encryption Standards, Message
        Authentication codes, Digital Signature Standard, etc.
      </p>
    ),
  },
  {
    title: "Internet Technologies Lab",
    image: "_Internet Technologies Lab.png",
    description: (
      <p>
        All students and staff of all departments can use this lab for
        Internet access. UG and PG students utilize this lab for their
        literature survey in research work and also for their project and
        seminar.
      </p>
    ),
  },
  {
    title: "Advanced Computing Lab",
    image: "Advanced Computing Lab.png",
    description: (
      <p>
        This lab is used to focus on computing solutions for large-scale
        data-intensive workflows, machine learning, and artificial
        intelligence, or &ldquo;AI&rdquo;. These workflows, which monitor
        the setup and performance of a sequence of tasks, will be geared
        toward direct application to science and national security
        challenges.
      </p>
    ),
  },
  {
    title: "Language Lab",
    image: "Language Lab.png",
    description: (
      <p>
        This language laboratory is utilized for foreign language learning.
        Students access audio or audio-visual materials from the computer
        system.
      </p>
    ),
  },
  {
    title: "CAD/CAM Lab",
    image: "CAD_CAM Lab.png",
    description: (
      <p>
        Computer Aided Lab is used for creation, modification, analysis and
        optimization of designs for improved engineering productivity. One
        can create a library and use a single drawing, a number of times
        whenever required.
      </p>
    ),
  },
  {
    title: "Research Lab",
    image: "Research Lab.png",
    description: (
      <>
        <p>
          <span className="font-semibold text-navy-950">Utilization: </span>
          Our department encourages students to do internal projects by
          utilizing the features available in the laboratory. Faculty
          members motivate the students to do research oriented activities
          and publish papers in various reputed, indexed journals by making
          use of these equipment.
        </p>
        <p className="mt-3">
          UG Students, PG Students and Faculty members utilize Research Lab
          for their Mini Project, Major Project and Research Work
          respectively.
        </p>
        <p className="mt-3">
          <span className="font-semibold text-navy-950">Facilities: </span>
          Xilinx, ORCAD, Lab View, MATLAB, IoT devices like Raspberry Pi 3
          Model B, UNO R3 Arduino Compatible Board, Node MCU with Cable,
          CP2102 USB to TTL Module Sensors.
        </p>
      </>
    ),
  },
];

export default function LabsPage() {
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
            <span className="italic text-[#D2B87C]">Laboratories</span>
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
          <div className="mx-auto max-w-7xl space-y-12 px-6">
            {labs.map((lab) => (
              <div
                key={lab.title}
                className="grid grid-cols-1 gap-8 border-b border-slate-200 pb-12 last:border-b-0 lg:grid-cols-12"
              >
                <div className="lg:col-span-5">
                  <div className="relative h-56 w-full overflow-hidden rounded-2xl border border-slate-100 bg-slate-100 shadow-sm sm:h-64">
                    <Image
                      src={encodeURI(`${LAB_BASE}/${lab.image}`)}
                      alt={lab.title}
                      fill
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <h2 className="font-display text-xl font-bold uppercase text-navy-950">
                    {lab.title}
                  </h2>
                  <div className="mt-4 h-1 w-12 bg-gold-500" />
                  <div className="mt-4 text-justify text-base leading-7 text-slate-600">
                    {lab.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}