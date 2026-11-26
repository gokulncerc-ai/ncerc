
import Image from "next/image";
import { ArrowUpRight, Cpu, CircuitBoard, AudioWaveform, RadioTower, Wrench } from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../../DepartmentNav/DepartmentNav";

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
      <main className="bg-white [&_p]:text-justify">
        {/* Inner Sub-Header Navigation */}
        <InnerHeader />
        {/* Digital Electronics Lab */}
        <section className="bg-[#FAF7F2] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24 xl:px-20">
          <div className="mx-auto max-w-[1440px]">
            <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">

              {/* Content */}
              <div className="order-2 lg:order-1">
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#D2B87C]" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8F7746]">
                    Laboratory Facilities
                  </span>
                </div>

                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                    <Cpu size={21} strokeWidth={1.6} />
                  </span>
                  <span className="text-xs font-semibold tracking-[0.2em] text-[#8F7746]">
                    01 / DIGITAL SYSTEMS
                  </span>
                </div>

                <h2 className="max-w-xl font-serif text-3xl font-medium leading-tight text-[#20235A] sm:text-4xl lg:text-[46px]">
                  Digital Electronics Lab
                </h2>

                <div className="my-7 h-[2px] w-16 bg-[#D2B87C]" />

                <p className="max-w-2xl text-[15px] leading-8 text-[#55545A]">
                  In this laboratory, students deal with digital circuits. A digital circuit is a circuit where the signal must be one of two discrete levels. Each level is interpreted as one of two different states (for example, on/off, 0/1, true/false).
                </p>

                <p className="mt-5 max-w-2xl text-[15px] leading-8 text-[#55545A]">
                  Digital circuits use transistors to create logic gates in order to perform Boolean logic. This logic is the foundation of digital electronics and computer processing. Digital circuits are less susceptible to noise or degradation in quality than analog circuits. It is also easier to perform error detection and correction with digital signals.

                </p>

                <div className="mt-8 inline-flex items-center gap-3 border-l-2 border-[#D2B87C] pl-4">
                  <span className="text-sm font-medium text-[#20235A]">
                    Practical learning through digital circuit design
                  </span>
                  <ArrowUpRight size={17} className="text-[#8F7746]" />
                </div>
              </div>

              {/* Laboratory Image */}
              <div className="order-1 lg:order-2">
                <div className="relative ml-auto w-full max-w-[650px]">
                  <div className="absolute -right-3 -top-3 h-full w-full border border-[#D2B87C]/60 sm:-right-5 sm:-top-5" />

                  <div className="relative aspect-[4/3] overflow-hidden bg-[#E9E5DC]">
                    <Image
                      src="\images\dpt\electronics-and-communication-engineering\facilities\Facilities_Digital_Electronics_lab.webp"
                      alt="Digital Electronics Laboratory"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="absolute -bottom-5 left-5 bg-[#20235A] px-5 py-4 text-white shadow-lg sm:left-8 sm:px-7">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                      ECE Laboratory
                    </p>
                    <p className="mt-1 font-serif text-lg">
                      Digital Electronics
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Electronic Circuits Lab */}
        <section className="bg-[#F2EFE8] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24 xl:px-20">
          <div className="mx-auto max-w-[1440px]">
            <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">

              {/* Laboratory Image - Left */}
              <div className="order-1">
                <div className="relative mr-auto w-full max-w-[650px]">
                  <div className="absolute -left-3 -top-3 h-full w-full border border-[#D2B87C]/60 sm:-left-5 sm:-top-5" />

                  <div className="relative aspect-[4/3] overflow-hidden bg-[#E9E5DC]">
                    <Image
                      src="\images\dpt\electronics-and-communication-engineering\facilities\Facilities_Electronic_Circuit_lab.webp"
                      alt="Electronic Circuits Laboratory"
                      fill
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="absolute -bottom-5 right-5 bg-[#20235A] px-5 py-4 text-white shadow-lg sm:right-8 sm:px-7">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                      ECE Laboratory
                    </p>
                    <p className="mt-1 font-serif text-lg">
                      Electronic Circuits
                    </p>
                  </div>
                </div>
              </div>

              {/* Content - Right */}
              <div className="order-2">
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#D2B87C]" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8F7746]">
                    Laboratory Facilities
                  </span>
                </div>

                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                    <CircuitBoard size={21} strokeWidth={1.6} />
                  </span>
                  <span className="text-xs font-semibold tracking-[0.2em] text-[#8F7746]">
                    02 / CIRCUIT DESIGN
                  </span>
                </div>

                <h2 className="max-w-xl font-serif text-3xl font-medium leading-tight text-[#20235A] sm:text-4xl lg:text-[46px]">
                  Electronic Circuits Lab
                </h2>

                <div className="my-7 h-[2px] w-16 bg-[#D2B87C]" />

                <p className="max-w-2xl text-[15px] leading-8 text-[#55545A]">
                  The Electronic Circuits Lab offers students practical exposure to the principles of analog and digital circuit design. It allows learners to build, test, and analyze various electronic circuits using components such as resistors, capacitors, diodes, transistors, and operational amplifiers.
                </p>

                <p className="mt-5 max-w-2xl text-[15px] leading-8 text-[#55545A]">
                  Through hands-on experiments, students deepen their understanding of circuit behavior, voltage-current relationships, and signal processing. The lab also introduces tools like function generators, oscilloscopes, and simulation software to reinforce theoretical concepts with real-world applications. This lab plays a crucial role in developing technical skills, critical thinking, and a strong foundation in electronics engineering.
                </p>

                <div className="mt-8 inline-flex items-center gap-3 border-l-2 border-[#D2B87C] pl-4">
                  <span className="text-sm font-medium text-[#20235A]">
                    Bridging circuit theory with practical applications
                  </span>
                  <ArrowUpRight size={17} className="text-[#8F7746]" />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Linear Integrated Circuits Lab */}
        <section className="bg-[#FAF7F2] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24 xl:px-20">
          <div className="mx-auto max-w-[1440px]">
            <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">

              {/* Content - Left */}
              <div className="order-2 lg:order-1">
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#D2B87C]" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8F7746]">
                    Laboratory Facilities
                  </span>
                </div>

                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                    <AudioWaveform size={21} strokeWidth={1.6} />
                  </span>
                  <span className="text-xs font-semibold tracking-[0.2em] text-[#8F7746]">
                    03 / ANALOG CIRCUITS
                  </span>
                </div>

                <h2 className="max-w-xl font-serif text-3xl font-medium leading-tight text-[#20235A] sm:text-4xl lg:text-[46px]">
                  Linear Integrated Circuits Lab
                </h2>

                <div className="my-7 h-[2px] w-16 bg-[#D2B87C]" />

                <p className="max-w-2xl text-[15px] leading-8 text-[#55545A]">
                  The Linear Integrated Circuits (LIC) Lab provides hands-on experience in designing and analyzing analog electronic circuits using operational amplifiers and other linear ICs. Students learn to build and test various applications such as amplifiers, filters, oscillators, and voltage regulators.
                </p>

                <p className="mt-5 max-w-2xl text-[15px] leading-8 text-[#55545A]">
                  The lab is equipped with industry-standard equipment including function generators, oscilloscopes, power supplies, and digital mustimeters.

                </p>

                <div className="mt-8 inline-flex items-center gap-3 border-l-2 border-[#D2B87C] pl-4">
                  <span className="text-sm font-medium text-[#20235A]">
                    Exploring analog design through practical experiments
                  </span>
                  <ArrowUpRight size={17} className="text-[#8F7746]" />
                </div>
              </div>

              {/* Laboratory Image - Right */}
              <div className="order-1 lg:order-2">
                <div className="relative ml-auto w-full max-w-[650px]">
                  <div className="absolute -right-3 -top-3 h-full w-full border border-[#D2B87C]/60 sm:-right-5 sm:-top-5" />

                  <div className="relative aspect-[4/3] overflow-hidden bg-[#E9E5DC]">
                    <Image
                      src="\images\dpt\electronics-and-communication-engineering\facilities\Facilities_Linear_Integrated_Circuit_lab.webp"
                      alt="Linear Integrated Circuits Laboratory"
                      fill
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="absolute -bottom-5 left-5 bg-[#20235A] px-5 py-4 text-white shadow-lg sm:left-8 sm:px-7">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                      ECE Laboratory
                    </p>
                    <p className="mt-1 font-serif text-lg">
                      Linear Integrated Circuits
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Communication Lab */}
        <section className="bg-[#F2EFE8] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24 xl:px-20">
          <div className="mx-auto max-w-[1440px]">
            <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">

              {/* Laboratory Image - Left */}
              <div className="order-1">
                <div className="relative mr-auto w-full max-w-[650px]">
                  <div className="absolute -left-3 -top-3 h-full w-full border border-[#D2B87C]/60 sm:-left-5 sm:-top-5" />

                  <div className="relative aspect-[4/3] overflow-hidden bg-[#E9E5DC]">
                    <Image
                      src="\images\dpt\electronics-and-communication-engineering\facilities\Facilities_Communication_lab.webp"
                      alt="Communication Laboratory"
                      fill
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="absolute -bottom-5 right-5 bg-[#20235A] px-5 py-4 text-white shadow-lg sm:right-8 sm:px-7">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                      ECE Laboratory
                    </p>
                    <p className="mt-1 font-serif text-lg">
                      Communication Systems
                    </p>
                  </div>
                </div>
              </div>

              {/* Content - Right */}
              <div className="order-2">
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#D2B87C]" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8F7746]">
                    Laboratory Facilities
                  </span>
                </div>

                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                    <RadioTower size={21} strokeWidth={1.6} />
                  </span>
                  <span className="text-xs font-semibold tracking-[0.2em] text-[#8F7746]">
                    04 / COMMUNICATION SYSTEMS
                  </span>
                </div>

                <h2 className="max-w-xl font-serif text-3xl font-medium leading-tight text-[#20235A] sm:text-4xl lg:text-[46px]">
                  Communication Lab
                </h2>

                <div className="my-7 h-[2px] w-16 bg-[#D2B87C]" />

                <p className="max-w-2xl text-[15px] leading-8 text-[#55545A]">
                  The Communication Lab offers students hands-on experience with a wide range of communication systems, including analog, digital, optical, and microwave communication. The lab focuses on key techniques such as AM, FM, PCM, and digital modulation, helping students understand the fundamentals of signal transmission and reception.
                </p>

                <p className="mt-5 max-w-2xl text-[15px] leading-8 text-[#55545A]">
                  In the optical communication section, students work with fiber optic trainer kits to study light propagation, signal loss, and multiplexing techniques, simulating real-world data transmission over optical fibers. The microwave communication setup enables exploration of high-frequency signal behavior using microwave benches, waveguides, antennas, and components like Gunn diodes and reflex klystrons.

                </p>

                <div className="mt-8 inline-flex items-center gap-3 border-l-2 border-[#D2B87C] pl-4">
                  <span className="text-sm font-medium text-[#20235A]">
                    Understanding the science of signal transmission
                  </span>
                  <ArrowUpRight size={17} className="text-[#8F7746]" />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Microprocessor & Microcontroller Lab */}
        <section className="bg-[#FAF7F2] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24 xl:px-20">
          <div className="mx-auto max-w-[1440px]">
            <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">

              {/* Content - Left */}
              <div className="order-2 lg:order-1">
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#D2B87C]" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8F7746]">
                    Laboratory Facilities
                  </span>
                </div>

                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                    <Cpu size={21} strokeWidth={1.6} />
                  </span>
                  <span className="text-xs font-semibold tracking-[0.2em] text-[#8F7746]">
                    05 / PROCESSOR SYSTEMS
                  </span>
                </div>

                <h2 className="max-w-xl font-serif text-3xl font-medium leading-tight text-[#20235A] sm:text-4xl lg:text-[46px]">
                  Microprocessor &amp; Microcontroller Lab
                </h2>

                <div className="my-7 h-[2px] w-16 bg-[#D2B87C]" />

                <p className="max-w-2xl text-[15px] leading-8 text-[#55545A]">
                  Microprocessor & Micro controller lab helps the students enhance their knowledge about various processors such as 8085, 8086, microcontrollers and also the interfacing of these processors with other equipment’s.
                </p>

                <p className="mt-5 max-w-2xl text-[15px] leading-8 text-[#55545A]">
                  The features and facilities available in this lab will help the students do their projects and enhance their knowledge about the latest trends and technologies.

                </p>

                <div className="mt-8 inline-flex items-center gap-3 border-l-2 border-[#D2B87C] pl-4">
                  <span className="text-sm font-medium text-[#20235A]">
                    Exploring processor technologies through practical learning
                  </span>
                  <ArrowUpRight size={17} className="text-[#8F7746]" />
                </div>
              </div>

              {/* Laboratory Image - Right */}
              <div className="order-1 lg:order-2">
                <div className="relative ml-auto w-full max-w-[650px]">
                  <div className="absolute -right-3 -top-3 h-full w-full border border-[#D2B87C]/60 sm:-right-5 sm:-top-5" />

                  <div className="relative aspect-[4/3] overflow-hidden bg-[#E9E5DC]">
                    <Image
                      src="\images\dpt\electronics-and-communication-engineering\facilities\Facilities_Microprocessor_And_Microcontroller_Lab.webp"
                      alt="Microprocessor and Microcontroller Laboratory"
                      fill
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="absolute -bottom-5 left-5 bg-[#20235A] px-5 py-4 text-white shadow-lg sm:left-8 sm:px-7">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                      ECE Laboratory
                    </p>
                    <p className="mt-1 font-serif text-lg">
                      Processor Systems
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Electronics Engineering Workshop / Project Laboratory */}
        <section className="bg-[#F2EFE8] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24 xl:px-20">
          <div className="mx-auto max-w-[1440px]">
            <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">

              {/* Laboratory Image - Left */}
              <div className="order-1">
                <div className="relative mr-auto w-full max-w-[650px]">
                  <div className="absolute -left-3 -top-3 h-full w-full border border-[#D2B87C]/60 sm:-left-5 sm:-top-5" />

                  <div className="relative aspect-[4/3] overflow-hidden bg-[#E9E5DC]">
                    <Image
                      src="\images\dpt\electronics-and-communication-engineering\facilities\Facilities_Project_Laboratory.webp"
                      alt="Electronics Engineering Workshop and Project Laboratory"
                      fill
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="absolute -bottom-5 right-5 bg-[#20235A] px-5 py-4 text-white shadow-lg sm:right-8 sm:px-7">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                      ECE Laboratory
                    </p>
                    <p className="mt-1 font-serif text-lg">
                      Workshop & Projects
                    </p>
                  </div>
                </div>
              </div>

              {/* Content - Right */}
              <div className="order-2">
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#D2B87C]" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8F7746]">
                    Laboratory Facilities
                  </span>
                </div>

                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                    <Wrench size={21} strokeWidth={1.6} />
                  </span>
                  <span className="text-xs font-semibold tracking-[0.2em] text-[#8F7746]">
                    06 / PRACTICAL INNOVATION
                  </span>
                </div>

                <h2 className="max-w-xl font-serif text-3xl font-medium leading-tight text-[#20235A] sm:text-4xl lg:text-[42px]">
                  Electronics Engineering Workshop / Project Laboratory
                </h2>

                <div className="my-7 h-[2px] w-16 bg-[#D2B87C]" />

                <p className="max-w-2xl text-[15px] leading-8 text-[#55545A]">
                  The Electronics Engineering Workshop provided an engaging and hands-on experience for students to explore fundamental concepts in electronics. The session focused on practical applications of circuit design, soldering techniques and troubleshooting electronic systems. Students gain exposure to essential tools like multimeters, oscilloscopes, breadboards, and soldering stations.
                </p>

                <p className="mt-5 max-w-2xl text-[15px] leading-8 text-[#55545A]">
                  The workshop emphasizes teamwork, problem-solving, and innovation, making it a valuable opportunity for budding engineers to strengthen their technical foundation and spark interest in electronics design and development.
                </p>

                <p className="mt-5 max-w-2xl text-[15px] leading-8 text-[#55545A]">
                  The project lab  help the students to perform in-house project as a part of their academic curriculum. Project laboratories enable students to obtain hands on experience and to realize their project ideas as executable projects which are a part of Sixth semester, Seventh Semester and Eigth semester of the curriculum.

                </p>

                <div className="mt-8 inline-flex items-center gap-3 border-l-2 border-[#D2B87C] pl-4">
                  <span className="text-sm font-medium text-[#20235A]">
                    Turning engineering ideas into practical projects
                  </span>
                  <ArrowUpRight size={17} className="text-[#8F7746]" />
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="bg-[#FAF7F2] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24 xl:px-20">
          <div className="mx-auto max-w-[1440px]">
            <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">

              {/* Content */}
              <div className="order-1">
                <div className="mb-7 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                    <CircuitBoard size={23} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                      07 / VLSI & SIGNAL PROCESSING
                    </p>
                    <p className="mt-1 text-xs tracking-wide text-[#77747A]">
                      Advanced Electronics Laboratory
                    </p>
                  </div>
                </div>

                <h2 className="font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl lg:text-[46px]">
                  Electronic Simulation Lab
                </h2>

                <div className="my-7 h-[2px] w-16 bg-[#D2B87C]" />

                <div className="space-y-5 text-[15px] leading-8 text-[#55545A]">
                  <p>
                    The Electronic Simulation Lab offers students hands-on experience in two vital areas of electronics: Very-Large-Scale Integration (VLSI) and Digital Signal Processing (DSP).
                  </p>

                  <p>
                    In the VLSI section, students design and simulate digital circuits using hardware description languages like VHDL/Verilog and tools such as Xilinx or Cadence. They gain insights into both front-end logic design and basic CMOS layout techniques.
                  </p>

                  <p>
                    In the DSP section, students implement and analyze algorithms like FIR and IIR filtering, FFT, and convolution using platforms such as MATLAB and DSP processors. Practical experiments help bridge the gap between theory and real-time signal processing applications.

                  </p>
                </div>

                <div className="mt-8 flex items-center gap-3 border-l-2 border-[#D2B87C] pl-4">
                  <Cpu size={18} className="text-[#8F7746]" strokeWidth={1.5} />
                  <p className="text-xs font-medium tracking-wide text-[#20235A]">
                    Bridging Circuit Design and Signal Processing
                  </p>
                </div>
              </div>

              {/* Image */}
              <div className="order-2">
                <div className="relative">
                  <div className="absolute -right-3 -top-3 h-full w-full border border-[#D2B87C]" />

                  <div className="relative aspect-[4/3] overflow-hidden bg-[#E9E5DC]">
                    <Image
                      src="\images\dpt\electronics-and-communication-engineering\facilities\Facilities_Electronic_Simulation_Lab.webp"
                      alt="Electronic Simulation Lab"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />

                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#20235A]/90 to-transparent px-6 pb-6 pt-16">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                        ECE Laboratory
                      </p>
                      <h3 className="mt-2 font-serif text-2xl text-white">
                        Electronic Simulation
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>


      </main>

      <FooterSection />
    </>
  );
}