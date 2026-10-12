import Image from "next/image";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../../DepartmentNav/DepartmentNav";

export const metadata = {
  title:
    "Top Engineering Colleges in Thrissur | Electronics and Communication Engineering - NCERC",
  description:
    "Nehru College of Engineering and Research Centre is renowned as one of the leading colleges in Kerala for Electrical and Communication Engineering, offering quality education that prepares students for successful careers in the electrical and communication technology sectors across South India.",
  keywords: [
    "engineering colleges thrissur",
    "engineering colleges in thrissur",
    "private engineering colleges in thrissur",
    "top engineering colleges in thrissur",
    "Nehru College of Engineering and Research Centre thrissur",
    "NCERC thrissur",
    "Nehru College thrissur",
    "Nehru College of Engineering thrissur",
  ],
  robots: { index: true, follow: true },
};

const IMAGE_BASE =
  "/images/dpt/electronics-and-communication-engineering/facilities";

interface Lab {
  title: string;
  description: string;
  images: string[];
}

const labs: Lab[] = [
  {
    title: "DIGITAL ELECTRONICS LAB",
    description:
      "Digital electronics is a field of electronics involving the study of digital signals and the engineering of devices that use or produce them. This laboratory will enable the undergraduate students to learn the basic concepts and techniques in digital electronic circuits and systems",
    images: ["DIGITAL-ELECTRONICS-LAB.jpg", "DIGITAL-ELECTRONICS-LAB2.jpg"],
  },
  {
    title: "COMMUNICATION LAB",
    description:
      "Communication lab gives students deep knowledge in analog and digital communication systems at the practical level so that students can understand the logical, analytical, and mathematical background of the communication system. This lab focuses on understanding the fundamental concepts of signal flow in analog and digital communication",
    images: ["COMMUNICATION-LAB.jpg"],
  },
  {
    title: "MICROPROCESSOR & MICROCONTROLLER LAB",
    description:
      "The microprocessor and microcontroller laboratory help the basic operation of microprocessor and microcontroller along with fundamental programming skills in assembly language and embedded c programming",
    images: ["MICROPROCESSOR-&MICROCONTROLLER-LAB.jpg"],
  },
  {
    title: "LINEAR INTEGRATED CIRCUITS LAB",
    description:
      "Linear integrated circuits lab is guide the students in ways in understanding the context of analog and digital electronics. With the help of timer and amplifier experiments the importance analog circuitries can be realized. The students able to understand the basic knowledge about operational amplifiers linear and nonlinear applications",
    images: ["LINEAR-INTEGRATED-CIRCUITS-LAB.jpg"],
  },
  {
    title: "ELECTRONIC DEVICES AND CIRCUITS LAB",
    description:
      "The Electronic Circuits Lab is a series of breadboard stations where students build various electronic circuits to study the theory behind the fundamental building blocks of electronic systems, such as resistors, capacitors, inductors, etc. The basic objective is to give hands-on experience in the design and implementation of analog and mixed-signal circuits.",
    images: ["electronic-devices-circuits-lab.png"],
  },
  {
    title: "VLSI DESIGN LAB",
    description:
      "The Vlsi Design Laboratory Is Established With The Aim Of Conducting Research In Various Aspects Of The Ever Growing Field Of Very Large Scale Integration (VlSI) And Establishing Links Between Industrial Companies. This Lab Provides Basic and Advanced Facilities For UG And PG Coursework Related Experiments",
    images: ["VLSI-DESIGN-LAB.jpg", "VLSI-DESIGN-LAB2.jpg"],
  },
];

const projectImages: string[] = [
  "STUDENTS-PROJECTS-1.jpg",
  "STUDENTS-PROJECTS-2.jpg",
  "STUDENTS-PROJECTS-3.jpg",
  "STUDENTS-PROJECTS-4.jpg",
  "STUDENTS-PROJECTS-5.jpg",
  "STUDENTS-PROJECTS-6.jpg",
];

function SectionHeading({ title }: { title: string }) {
  return (
    <>
      <h2 className="font-display text-2xl font-bold uppercase text-navy-950 sm:text-3xl">
        {title}
      </h2>
      <div className="mt-4 h-1 w-12 bg-gold-500" />
    </>
  );
}

function ImageGrid({ images, alt }: { images: string[]; alt: string }) {
  const isSingle = images.length === 1;

  return (
    <div
      className={
        isSingle
          ? "mx-auto grid max-w-2xl grid-cols-1 gap-6"
          : "grid grid-cols-1 gap-6 sm:grid-cols-2"
      }
    >
      {images.map((image, index) => (
        <div
          key={image}
          className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-sm"
        >
          <Image
            src={`${IMAGE_BASE}/${image}`}
            alt={`${alt} - photo ${index + 1}`}
            fill
            sizes={
              isSingle
                ? "(min-width: 768px) 672px, 100vw"
                : "(min-width: 1280px) 600px, (min-width: 640px) 50vw, 100vw"
            }
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}

export default function LabsPage() {
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
            <span className="italic text-[#D2B87C]">Laboratories</span>
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
          <div className="mx-auto max-w-7xl space-y-12 px-6">
            {labs.map((lab) => (
              <div
                key={lab.title}
                className="border-t border-slate-200 pt-12 first:border-t-0 first:pt-0"
              >
                <SectionHeading title={lab.title} />
                <p className="mt-6 text-justify text-base leading-8 text-slate-600">
                  {lab.description}
                </p>
                <div className="mt-8">
                  <ImageGrid images={lab.images} alt={lab.title} />
                </div>
              </div>
            ))}

            {/* Student Projects */}
            <div className="border-t border-slate-200 pt-12">
              <SectionHeading title="GLIMPSES OF STUDENTS PROJECTS" />
              <div className="mt-8">
                <ImageGrid images={projectImages} alt="Student project" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}