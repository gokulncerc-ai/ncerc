import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ChevronRight,
  UserRound,
  Lightbulb,
  BookOpen,
  GraduationCap,
  Award,
  BriefcaseBusiness,
  Search,
  ExternalLink,

} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../DepartmentNav/DepartmentNav";

export default function FacultyDetailsPage() {


  const qualifications = [
    {
      label: "Postgraduate Qualification",
      degree: "M.E.",
      specialization: "Power Electronics and Drives",
    },
    {
      label: "Undergraduate Qualification",
      degree: "B.E.",
      specialization: "Electrical and Electronics Engineering",
    },
  ];

  const researchInterests = [
    "Power Electronics",
    "Electrical Machines",
    "Electric Drives",
    "DC-DC Converters",
    "Buck-Boost Converters",
    "Renewable Energy",
    "Solar Photovoltaic Systems",
    "Microinverters",
    "Artificial Intelligence in Energy",
    "Induction Motor Drives",
    "Induction Heating",
    "Electric Vehicle Charging",
    "Energy Conversion",
    "Floating Solar Plants",
  ];

  const courses = [
    { year: "2026", stream: "B.Tech", semester: "4", branch: "EEE", subject: "Electrical Machines I" },
    { year: "2026", stream: "B.Tech", semester: "4", branch: "EEE", subject: "Electrical Machines I Lab" },
    { year: "2026", stream: "B.Tech", semester: "2", branch: "ME", subject: "Basics of Electrical Engineering" },
    { year: "2026", stream: "B.Tech", semester: "2", branch: "EEE", subject: "Electrical Workshop" },
    { year: "2025", stream: "B.Tech", semester: "5", branch: "EEE", subject: "Synchronous and Induction Machines" },
    { year: "2025", stream: "B.Tech", semester: "5", branch: "EEE", subject: "Electrical Machines II Lab" },
    { year: "2025", stream: "B.Tech", semester: "7", branch: "EEE", subject: "Electric Drives" },
    { year: "2025", stream: "B.Tech", semester: "1", branch: "ELE", subject: "Basics of Electrical Engineering" },
    { year: "2025", stream: "B.Tech", semester: "1", branch: "ELE", subject: "Electrical Workshop" },
  ];

  const journalArticles = [
    {
      title: "Integrated Buck-Boost Converter",
      journal: "International Journal of Scientific Engineering and Research (IJSER)",
      details: "ISSN (Online): 2347-3878 · Volume 2, Issue 1 · January 2014",
    },
    {
      title: "MATLAB/Simulink Model of PV Integrated DC-DC Converter System",
      journal: "Journal of Emerging Technologies and Innovative Research",
      details: "ISSN: 2349-5162 · Volume 2, Issue 6 · May 2015",
    },
    {
      title: "A Switched Boost Inverter Fed Three Phase Induction Motor Drive",
      journal: "Journal of Emerging Technologies and Innovative Research",
      details: "ISSN: 2349-5162 · Volume 2, Issue 6 · May 2015",
    },
    {
      title: "A Voltage-Fed Full Bridge AC-AC Series Resonant Converter for High Power Induction Heating Applications",
      journal: "International Journal of Advanced Research in Electrical, Electronics and Instrumentation Engineering",
      details: "ISSN: 2320-3765 · Volume 4, Issue 6 · June 2015",
    },
    {
      title: "High Step-Up Flyback Converter with Nondissipative Snubber for Solar Energy Application",
      journal: "International Journal of Advanced Research in Electrical, Electronics and Instrumentation Engineering",
      details: "ISSN: 2320-3765 · Volume 4, Issue 7 · July 2015",
    },
    {
      title: "V/F Control of an Induction Motor Fed by Switched Boost Inverter",
      journal: "International Journal of Advanced Research in Electrical, Electronics and Instrumentation Engineering",
      details: "ISSN: 2320-3765 · Volume 4, Issue 8 · August 2015",
    },
    {
      title: "Artificial Intelligence Controlled Microinverter for PV Applications",
      journal: "International Journal of Innovative Research in Science, Engineering and Technology",
      details: "ISSN: 2347-6710 · Volume 5, Issue 7 · July 2016",
    },
    {
      title: "Soft Switched Flyback Microinverter for Photovoltaic Applications with Artificial Intelligence Control",
      journal: "International Journal of Advanced Research in Electrical and Electronics Engineering",
      details: "ISSN: 2321-4775 · Volume 2, Issue 2 · June 2016",
    },
    {
      title: "A High Efficiency Step-Up DC-DC Converter Combining KY and Multilevel Modular Converter with Low Switching Voltage and Current Stress",
      journal: "Imperial Journal of Interdisciplinary Research (IJIR)",
      details: "ISSN: 2454-1362 · Volume 3, Issue 4 · 2017 · Pages 2016–2021",
    },
    {
      title: "Wireless Charging of Electric Vehicle",
      journal: "Journal of Image Processing and Intelligent Remote Sensing (JIPIRS)",
      details: "Volume 2, Issue 2 · February–March 2022",
    },
    {
      title: "Optimization of Energy Conversion Efficiency of PV System",
      journal: "Journal of Image Processing and Intelligent Remote Sensing (JIPIRS)",
      details: "Volume 2, Issue 2 · February–March 2022",
    },
  ];

  const conferencePapers = [
    {
      title: "Multiple Input DC-DC Boost Converter for Hybrid Photovoltaic Fuel Cell/Battery Power System",
      conference: "International Conference on Emerging Trends in Engineering and Technology (ICETET’14)",
      type: "International",
      date: "07 March 2014",
    },
    {
      title: "Integrated Buck-Boost AC/DC Converter with Zero Voltage Switching",
      conference: "International Conference on Emerging Trends in Engineering and Technology (ICETET’14)",
      type: "International",
      date: "28 March 2014",
    },
    {
      title: "Asymmetrical Duty Cycle Control Series Load Resonant Soft Switching High Frequency Inverter with Switched Capacitor for Induction Heat Application",
      conference: "International Conference on Emerging Trends in Engineering and Technology (ICETET’15)",
      type: "International",
      date: "13 March 2015",
    },
    {
      title: "A Novel Full Bridge Series Resonant Boost Converter for Induction Heating Applications",
      conference: "International Conference on Emerging Trends in Engineering and Technology (ICETET’15)",
      type: "International",
      date: "24 May 2015",
    },
    {
      title: "A Novel Microinverter for PV Applications with Artificial Intelligence Control",
      conference: "International Conference on Innovations in Information, Embedded and Communication Systems (ICIIECS’16)",
      type: "International",
      date: "17 March 2016",
    },
    {
      title: "Wireless Charging of Electric Vehicle",
      conference: "International Conference on Emerging Trends in Signals and Information (ICETSSI-2021)",
      type: "International",
      date: "28 May 2021",
    },
    {
      title: "Performance Comparison of Floating Solar Plant and Ground Mounted Solar Plant in Southern State of India",
      conference: "International Conference on Electrical and Computer Engineering Researches (ICECER 2025)",
      type: "International",
      date: "06–08 December 2025",
    },
  ];



  const rajeeenaResearchInterests = [
    "High Impact Teaching and Learning Skills",
    "Management",
    "Leadership",
  ];

  const rajeeenaKeywords = [
    "Industrial Instrumentation and Automation",
    "Operation Research",
    "Business Analytics",
  ];

  const rajeeenaCourses = [
    {
      year: "2026",
      stream: "B.Tech",
      semester: "8",
      branch: "EEE",
      subject: "Industrial Instrumentation and Automation",
    },
    {
      year: "2026",
      stream: "B.Tech",
      semester: "4",
      branch: "—",
      subject: "Power Plant Engineering",
    },
    {
      year: "2026",
      stream: "B.Tech",
      semester: "2",
      branch: "ELE",
      subject: "Analog Electronics",
    },
    {
      year: "2026",
      stream: "B.Tech",
      semester: "5",
      branch: "EEE",
      subject: "Management for Engineers",
    },
    {
      year: "2026",
      stream: "B.Tech",
      semester: "3",
      branch: "EEE",
      subject: "Engineering Ethics and Sustainable Development",
    },
    {
      year: "2026",
      stream: "M.Tech",
      semester: "2",
      branch: "Energy System",
      subject: "Energy Policies for Sustainable Development",
    },
  ];

  const rajeeenaPublications = [
    {
      year: "August 2025",
      title:
        "A Hybrid Quantum Neural Network and Enhanced Sparrow Search Algorithm for Efficient MPPT in DFIG-Based Wind Energy Conversion Systems",
      details:
        "Published in a Scopus-indexed journal by Wiley Publications.",
    },
    {
      year: "November 2024",
      title: "Advance Weiner Noise Filter With RGB, Gray-Scale Blend",
      details:
        "Informatyka, Automatyka, Pomiary w Gospodarce i Ochronie Środowiska.",
    },
    {
      year: "2022",
      title:
        "A Comparative Study of Different Topologies of Transformerless AC-DC Converters",
      details:
        "Journal of Image Processing and Intelligent Remote Sensing, Volume 2, 2022.",
    },
    {
      year: "2020",
      title:
        "Animal Health Monitoring with Missing and Theft Prevention Device using Wireless Sensor Network and Internet of Things",
      details:
        "International Journal of Advanced Signal Imaging Science, Volume 6, Number 1, 2020.",
    },
    {
      year: "2020",
      title:
        "Hydrogen Production from Solar Tracker with MPPT Technique in Sea Water Electrolysis",
      details:
        "Nectar e-Conference organised by the MCA Department, NCERC.",
    },
    {
      year: "2014",
      title: "Soft Commutated Three Phase DC-DC Converter",
      details:
        "International Journal of Electrical, Electronics and Data Communication (IJEEDC), Volume 2, Issue 8, pages 47–50, August 2014.",
    },
    {
      year: "2012",
      title: "Fuzzy Based Control Using LabVIEW for MISO Temperature Process",
      details:
        "International Journal of Research in Engineering and Technology, Volume 1, Issue 2, October 2012. ISSN: 2319-1163.",
    },
    {
      year: "2012",
      title: "Intelligent Home Heating System",
      details:
        "International Journal of Research in Engineering and Technology, Volume 1, Issue 2, October 2012. ISSN: 2319-1163.",
    },
    {
      year: "2012",
      title: "Fuzzy Based Control Using LabVIEW for MISO Temperature Process",
      details:
        "International Journal of Research in Engineering and Technology, Volume 1, Issue 2, October 2012. ISSN: 2319-1163.",
    },
  ];

  const rajeshPCourses = [
    {
      slNo: "1",
      year: "2026",
      stream: "B. Tech",
      sem: "VIII",
      branch: "EEE",
      subject: "ELECTRICAL SYSTEM DESIGN AND ESTIMATION",
    },
    {
      slNo: "2",
      year: "2026",
      stream: "B. Tech",
      sem: "II",
      branch: "MECHATRONICS",
      subject: "INTRODUCTION TO ELECTRICAL ENGINEERING",
    },
    {
      slNo: "3",
      year: "2026",
      stream: "M. Tech",
      sem: "II",
      branch: "ENERGY SYSTEMS",
      subject: "ENERGY EFFICIENT BUILDINGS",
    },
    {
      slNo: "—",
      year: "2026",
      stream: "M. Tech",
      sem: "IV",
      branch: "ENERGY SYSTEMS",
      subject: "DISSERTATION PROJECT PHASE II",
    },
    {
      slNo: "4",
      year: "2025",
      stream: "B. Tech",
      sem: "I",
      branch: "CSE-A",
      subject: "INTRODUCTION TO ELECTRICAL ENGINEERING",
    },
    {
      slNo: "5",
      year: "2025",
      stream: "B. Tech",
      sem: "IV",
      branch: "EEE",
      subject: "ELECTRICAL CIRCUITS AND NETWORKS",
    },
    {
      slNo: "6",
      year: "2025",
      stream: "M. Tech",
      sem: "I",
      branch: "ENERGY SYSTEMS",
      subject: "RENEWABLE ENERGY TECHNOLOGY",
    },
    {
      slNo: "7",
      year: "2025",
      stream: "B. Tech",
      sem: "IV",
      branch: "EEE",
      subject: "CIRCUITS AND MEASUREMENT LAB",
    },
    {
      slNo: "8",
      year: "2025",
      stream: "M. Tech",
      sem: "III",
      branch: "ENERGY SYSTEMS",
      subject: "DISSERTATION PROJECT PHASE I",
    },
  ];

  const rajeshPPublications = [
    {
      year: "2026",
      title:
        "Performance Comparison of floating Solar Plant and Ground Mounted Solar Plant in Southern State of India",
      event:
        "2025 International Conference on Electrical and Computer Engineering Researches (ICECER)",
    },
    {
      year: "2023",
      title: "SMART ENERGY METER FOR SMART GRID WITH HYBRID SOURCES",
      event:
        "International Journal of Creative Research Thoughts (IJCRT), Volume 11, Issue 5, May 2023, Pages 217–220",
    },
    {
      year: "2022",
      title: "Production and analysis of biogas from kitchen waste",
      event:
        "International Research Journal of Engineering and Technology, Volume 2, Issue 4, Pages 622–632",
    },
  ];

  const rajeshPResearchInterests = [
    "Renewable Energy Technologies",
    "Power Systems Engineering",
    "AI Techniques in Electrical Engineering",
    "Interdisciplinary Energy Research",
  ];

  const rajeshPKeywords = [
    "Power Systems",
    "Renewable Energy",
    "Artificial Intelligence",
    "Electrical Engineering Applications",
  ];

  // ---Saranya Faculty Details-----

  const saranyaNairCourses = [
    {
      sno: 1,
      year: "2026",
      stream: "BTech",
      semester: "S8",
      branch: "EEE",
      subject: "Power Quality",
    },
    {
      sno: 2,
      year: "2026",
      stream: "BTech",
      semester: "S6",
      branch: "EEE",
      subject: "Renewable Energy Systems",
    },
    {
      sno: 3,
      year: "2026",
      stream: "BTech",
      semester: "S8",
      branch: "EEE",
      subject: "Projcet Phase II",
    },
    {
      sno: 4,
      year: "2025",
      stream: "BTech",
      semester: "S7",
      branch: "EEE",
      subject: "Industrial Safety Engineering",
    },
    {
      sno: 5,
      year: "2025",
      stream: "BTech",
      semester: "S3",
      branch: "ECE",
      subject: "Network Theory",
    },
    {
      sno: 6,
      year: "2025",
      stream: "BTech",
      semester: "S1",
      branch: "ECE",
      subject: "Basics of Electrical Engineering",
    },
    {
      sno: 7,
      year: "2025",
      stream: "BTech",
      semester: "S5",
      branch: "EEE",
      subject: "Microprocessors and Microcontrollers Lab",
    },
  ];

  const saranyaNairPublications = [
    {
      year: "2025",
      title:
        "A Review on the Fault-Tolerant Method of PMSM using Finite Element Method by Modifying Phase Angle for EV Applications.",
      publication: "iJRASET",
    },
    {
      year: "2022",
      title: "Wireless Charging of Electric Vehicle",
      publication: "JECNAM",
    },
    {
      year: "2014",
      title:
        "Integrated Double Buck–Boost Converter as a High-Power-Factor Driver for Power-LED Lamps",
      publication: "IJSER",
    },
    {
      year: "2014",
      title:
        "Analysis and Design of the Integrated Double Buck–Boost Converter as a High-Power-Factor Driver for Power-LED Lamps",
      publication:
        "EEM-2014 held at NSS College of Engineering, Palakkad",
    },
    {
      year: "2013",
      title:
        "Design of Integrated Buck-Boost converter with Flyback Converter as a High-Power-Factor Driver for Power-LED Lamps",
      publication:
        "National Conference held at Nehru College of Engineering and Research Centre, Pampady, Thrissur",
    },
  ];

  const saranyaNairResearchInterests = [
    "Power Electronics and Drives",
    "Hybrid Electric Vehicles",
    "Renewable Energy Systems",
  ];

  const saranyaNairKeywords = [
    "Power Electronics and Drives",
    "Network Theory",
  ];


  return (
    <>
      <SiteHeader />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative isolate overflow-hidden bg-[#20235A]">
        {/* Decorative circles */}
        <div className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full border border-[#D2B87C]/20" />
        <div className="pointer-events-none absolute -right-8 -top-16 h-52 w-52 rounded-full border border-[#D2B87C]/10" />

        <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          <div className="max-w-4xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#D2B87C]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D2B87C]">
                Electrical &amp; Electronics Engineering
              </p>
            </div>

            <h1 className="max-w-4xl font-serif text-4xl leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              Faculty shaping
              <span className="block text-[#D2B87C]">
                learning &amp; excellence.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
              Meet the teaching and laboratory faculty who support academic
              learning, practical education and the overall development of
              students in the Electrical and Electronics Engineering
              department at NCERC.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#faculty"
                className="group inline-flex items-center gap-2 rounded-full bg-[#D2B87C] px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#20235A] transition-all duration-300 hover:bg-white"
              >
                Explore Faculty
                <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <Link
                href="/department/electrical-and-electronics-engineering"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:border-[#D2B87C]/60 hover:text-[#D2B87C]"
              >
                Department Overview
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Information Strip */}
        <div className="border-t border-white/10 bg-white/[0.03]">
          <div className="mx-auto grid max-w-[1440px] grid-cols-1 sm:grid-cols-3">
            <div className="border-b border-white/10 px-6 py-5 sm:border-b-0 sm:border-r sm:px-10 lg:px-16">
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                Department
              </p>

              <p className="mt-2 font-serif text-lg text-white">
                Electrical &amp; Electronics
              </p>
            </div>

            <div className="border-b border-white/10 px-6 py-5 sm:border-b-0 sm:border-r sm:px-10 lg:px-16">
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                Faculty
              </p>


            </div>

            <div className="px-6 py-5 sm:px-10 lg:px-16">
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                Academic Team
              </p>

              <p className="mt-2 font-serif text-lg text-white">
                Teaching &amp; Laboratory
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Department Navigation */}
      <InnerHeader />

      {/* FACULTY PROFILE — SINGLE SECTION */}
      <main className="bg-[#FAF7F2] text-[#1e1917]">
        <section
          id="faculty-profile"
          className="px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20 [&_p]:text-justify"
        >
          <div className="mx-auto max-w-[1440px]">
            {/* Profile Header */}
            <div className="relative overflow-hidden bg-[#20235A] p-7 sm:p-10 lg:p-14">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border border-[#D2B87C]/20 sm:h-80 sm:w-80"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-4 -top-8 h-44 w-44 rounded-full border border-[#D2B87C]/15 sm:h-56 sm:w-56"
              />

              <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                <div>
                  <div className="mb-5 flex items-center gap-3">
                    <span className="h-px w-9 bg-[#D2B87C]" />
                    <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                      Faculty Profile
                    </p>
                  </div>

                  <h1 className="font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
                    Ms. Abeena A
                  </h1>

                  <p className="mt-3 text-lg text-[#D2B87C] sm:text-xl">
                    Assistant Professor
                  </p>

                  <p className="mt-2 max-w-2xl text-sm leading-7 text-white/70">
                    Department of Electrical and Electronics Engineering
                  </p>

                  <p className="mt-6 max-w-3xl text-sm leading-7 text-white/75 sm:text-base">
                    An experienced educator with expertise in core electrical
                    engineering subjects, simulation tools, and AI-integrated
                    engineering education, with research interests in electric
                    vehicles, power systems, and renewable energy.
                  </p>
                </div>

                <div className="flex items-center gap-4 border-t border-white/15 pt-5 lg:min-w-[180px] lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#D2B87C]/50 text-[#D2B87C]">
                    <UserRound className="h-6 w-6" strokeWidth={1.4} />
                  </div>
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/50">
                      NCERC Unique ID
                    </p>
                    <p className="mt-1 font-serif text-2xl text-white">4156</p>
                  </div>
                </div>
              </div>

              {/* Academic qualifications */}
              <div className="relative mt-10 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
                <div className="bg-[#20235A] p-5 sm:p-6">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#D2B87C]">
                    Doctoral Studies
                  </p>
                  <p className="mt-2 font-serif text-lg leading-snug text-white">
                    Pursuing PhD
                  </p>
                  <p className="mt-1 text-xs leading-5 text-white/60">
                    Amrita Vishwa Vidyapeetham
                  </p>
                </div>

                <div className="bg-[#20235A] p-5 sm:p-6">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#D2B87C]">
                    Postgraduate
                  </p>
                  <p className="mt-2 font-serif text-lg text-white">
                    M.Tech
                  </p>
                  <p className="mt-1 text-xs leading-5 text-white/60">
                    Power Systems
                  </p>
                </div>

                <div className="bg-[#20235A] p-5 sm:col-span-2 sm:p-6 lg:col-span-1">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#D2B87C]">
                    Undergraduate
                  </p>
                  <p className="mt-2 font-serif text-lg text-white">
                    B.E.
                  </p>
                  <p className="mt-1 text-xs leading-5 text-white/60">
                    Electrical and Electronics Engineering
                  </p>
                </div>
              </div>
            </div>

            {/* About and Research */}
            <div className="mt-10 grid gap-8 lg:grid-cols-2">
              <div className="border border-[#20235A]/10 bg-white p-6 sm:p-8 lg:p-9">
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#8F7746]" />
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                    About
                  </p>
                </div>

                <h2 className="font-serif text-2xl leading-tight text-[#20235A] sm:text-3xl">
                  Teaching, learning &amp; academic excellence
                </h2>

                <p className="mt-5 text-sm leading-7 text-[#1e1917]/75">
                  10 years Experienced Assistant Professor in Electrical and Electronics Engineering with expertise in teaching core subjects, simulation tools, and AI-integrated engineering education. Passionate about student-centric learning, research in electric vehicles, power systems and renewable energy, and academic excellence.
                </p>

                <div className="mt-7 border-l-2 border-[#D2B87C] bg-[#F2EFE8] p-5">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                    Professional Experience
                  </p>
                  <p className="mt-2 font-serif text-xl text-[#20235A]">
                    10 Years
                  </p>
                  <p className="mt-1 text-xs text-[#1e1917]/60">
                    Assistant Professor
                  </p>
                </div>
              </div>

              <div className="border border-[#20235A]/10 bg-[#F2EFE8] p-6 sm:p-8 lg:p-9">
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#8F7746]" />
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                    Research Interests
                  </p>
                </div>

                <h2 className="font-serif text-2xl leading-tight text-[#20235A] sm:text-3xl">
                  Areas of research
                </h2>

                <p className="mt-4 text-sm leading-7 text-[#1e1917]/70">
                  The primary research interest lies in the domain of electric vehicles, power electronics applications, renewable energy systems, electric drives, and simulation-based analysis.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    "Electric Vehicles",
                    "Power Electronics Applications",
                    "Renewable Energy Systems",
                    "Electric Drives",
                    "Simulation-Based Analysis",
                  ].map((interest, index) => (
                    <div
                      key={interest}
                      className={`flex items-start gap-3 border border-[#20235A]/10 bg-[#FAF7F2] p-4 ${index === 4 ? "sm:col-span-2" : ""
                        }`}
                    >
                      <span className="mt-0.5 font-serif text-sm text-[#8F7746]">
                        0{index + 1}
                      </span>
                      <p className="text-sm leading-6 text-[#20235A]">
                        {interest}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-7">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                    Additional Areas of Interest
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {[
                      "Power Systems",
                      "Electric Vehicles",
                      "Artificial Intelligence & Machine Learning",
                    ].map((interest) => (
                      <span
                        key={interest}
                        className="border border-[#20235A]/15 bg-white px-3 py-2 text-xs leading-5 text-[#20235A]"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Keywords */}
            <div className="mt-10 border border-[#20235A]/10 bg-white p-6 sm:p-8 lg:p-9">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-[#8F7746]" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                  Expertise &amp; Keywords
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {[
                  "Academic Mentoring",
                  "Renewable Energy Systems",
                  "MATLAB / Simulink",
                  "Data Analysis",
                  "Engineering Education",
                  "Course Planning & Delivery",
                ].map((keyword) => (
                  <span
                    key={keyword}
                    className="border border-[#20235A]/10 bg-[#FAF7F2] px-4 py-3 text-sm text-[#20235A] transition-colors hover:border-[#D2B87C]"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>

            {/* Researcher Profiles */}
            <div className="mt-10 bg-[#20235A] p-6 sm:p-8 lg:p-10">
              <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <span className="h-px w-8 bg-[#D2B87C]" />
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                      Academic Identity
                    </p>
                  </div>
                  <h2 className="font-serif text-2xl text-white sm:text-3xl">
                    Researcher profiles
                  </h2>
                </div>
                <p className="text-xs leading-6 text-white/55">
                  Open a profile to view its external academic record.
                </p>
              </div>

              <div className="grid gap-3 lg:grid-cols-3">
                {[
                  {
                    label: "Researcher ID",
                    value: "rid147106",
                    href: "https://www.researchid.co/rid147106",
                  },
                  {
                    label: "ORCID Profile",
                    value: "0009-0001-4684-0780",
                    href: "https://orcid.org/orcid-search/search?searchQuery=0009-0001-4684-0780",
                  },
                  {
                    label: "Google Scholar",
                    value: "View Google Scholar Profile",
                    href: "https://scholar.google.com/citations?user=XAPAPiMAAAAJ&hl=en",
                  },
                ].map((profile) => (
                  <a
                    key={profile.label}
                    href={profile.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex min-w-0 items-center justify-between gap-3 border border-white/10 bg-white/[0.04] p-5 transition-colors hover:border-[#D2B87C]/60 hover:bg-white/[0.08]"
                  >
                    <div className="min-w-0">
                      <p className="text-[9px] font-semibold uppercase tracking-[0.17em] text-[#D2B87C]">
                        {profile.label}
                      </p>
                      <p className="mt-2 break-all text-sm leading-6 text-white/80">
                        {profile.value}
                      </p>
                    </div>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-[#D2B87C] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                ))}
              </div>

              <div className="mt-5 border border-white/10 px-5 py-4">
                <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/50">
                  NCERC Unique ID
                </p>
                <p className="mt-1 font-serif text-xl text-[#D2B87C]">4156</p>
              </div>
            </div>

            {/* Courses Handled */}
            <div className="mt-16 sm:mt-20">
              <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <span className="h-px w-8 bg-[#8F7746]" />
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                      Teaching Record
                    </p>
                  </div>
                  <h2 className="font-serif text-3xl text-[#20235A] sm:text-4xl">
                    Courses handled
                  </h2>
                </div>
                <p className="text-xs text-[#1e1917]/55">
                  Academic years 2024–2026 · 9 entries
                </p>
              </div>

              <div className="overflow-hidden border border-[#20235A]/10 bg-white">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[780px] border-collapse text-left">
                    <thead>
                      <tr className="bg-[#20235A]">
                        {[
                          "Sl. No.",
                          "Year",
                          "Stream",
                          "Sem",
                          "Branch",
                          "Subject",
                        ].map((heading) => (
                          <th
                            key={heading}
                            className="px-4 py-4 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#D2B87C] sm:px-5"
                          >
                            {heading}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["1", "2024", "BTech", "6", "EEE", "Power Systems II"],
                        ["2", "2024", "BTech", "4", "ECE", "Constitution of India"],
                        ["3", "2024", "BTech", "5", "EEE", "Power Systems I"],
                        ["4", "2024", "BTech", "1", "EEE & ME", "Algorithmic Thinking with Python"],
                        ["5", "2025", "BTech", "4", "EEE", "Digital Electronics"],
                        ["6", "2025", "BTech", "5", "EEE", "Signals & Systems"],
                        ["7", "2025", "BTech", "3", "EEE & ME", "Introduction to AI & DS"],
                        ["8", "2026", "BTech", "6", "EEE", "Power Electronics"],
                        ["9", "2026", "MTech", "2", "Interdisciplinary", "Reliability Engineering"],
                      ].map((course, index) => (
                        <tr
                          key={course[0]}
                          className={`border-b border-[#20235A]/10 last:border-0 ${index % 2 === 0 ? "bg-white" : "bg-[#FAF7F2]"
                            } hover:bg-[#F2EFE8]`}
                        >
                          {course.map((value, cellIndex) => (
                            <td
                              key={`${course[0]}-${cellIndex}`}
                              className={`px-4 py-4 text-sm sm:px-5 ${cellIndex === 5
                                ? "font-medium text-[#20235A]"
                                : "text-[#1e1917]/70"
                                }`}
                            >
                              {value}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="border-t border-[#20235A]/10 px-5 py-3 text-xs text-[#1e1917]/50">
                  Scroll horizontally within the table on smaller screens to view
                  all columns.
                </p>
              </div>
            </div>

            {/* Publications */}
            <div className="mt-16 sm:mt-20">
              <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <span className="h-px w-8 bg-[#8F7746]" />
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                      Research Output
                    </p>
                  </div>
                  <h2 className="font-serif text-3xl text-[#20235A] sm:text-4xl">
                    Publications &amp; conferences
                  </h2>
                </div>
                <p className="text-xs text-[#1e1917]/55">
                  11 publication entries
                </p>
              </div>

              <div className="overflow-hidden border border-[#20235A]/10 bg-white">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[620px] border-collapse text-left">
                    <thead>
                      <tr className="bg-[#20235A]">
                        <th className="w-24 px-5 py-4 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#D2B87C]">
                          Sl. No.
                        </th>
                        <th className="px-5 py-4 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#D2B87C]">
                          Paper Details
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {[
                        "IEEE Conference ICECER 2025: Performance comparison of floating solar plant and ground mounted solar plant in Southern State of India",
                        "IEEE Xplore: Investigation of Dynamic Eccentricity Fault in IPMSM through FEM and Machine Learning (CISCON 2024)",
                        "IJEAST: Improved current control scheme for three-phase shunt active filters",
                        "IRJET: Converter topology review for MPPT in EV applications",
                        "IJAREEIE: Review on electric motors used in EV applications",
                        "IJARSCT: Z-source based multilevel inverter with reduced components",
                        "IJAERT: Stability enhanced power system using adaptive controller",
                        "IJAEM: Energy management for EV charging and residential loads",
                        "Sepic Converter fed BLDC motor drive” in an International Conference on Sustainable Technology Applications for Green Engineering Solutions 'STAGE 2020' at NSS College of Engineering, Palakkad",
                        "A new stability enhanced power system based on adaptive controller and space vector technique” in an International Conference on Engineering and Technology for Sustainable Development in association with IETE Palakkad Centre at Al Ameen Engineering College, Shornur",
                        "An improved current control strategy for harmonic compensation and reducing power quality issues” in the National Conference on Electronics, Control & power Engineering and Project Expo held at CMS College of Engineering & Technology, Coimbatore",
                      ].map((paper, index) => (
                        <tr
                          key={paper}
                          className={`border-b border-[#20235A]/10 last:border-0 ${index % 2 === 0 ? "bg-white" : "bg-[#FAF7F2]"
                            }`}
                        >
                          <td className="px-5 py-5 align-top font-serif text-sm text-[#8F7746]">
                            {String(index + 1).padStart(2, "0")}
                          </td>
                          <td className="px-5 py-5 text-sm leading-7 text-[#1e1917]/80">
                            {paper}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="border-t border-[#20235A]/10 px-5 py-3 text-xs text-[#1e1917]/50">
                  Scroll horizontally within the table on smaller screens if needed.
                </p>
              </div>
            </div>

            {/* Book Publications */}
            <div className="mt-10 border border-[#20235A]/10 bg-[#F2EFE8] p-6 sm:p-8 lg:p-9">
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                    Book Publications
                  </p>
                  <h2 className="mt-2 font-serif text-2xl text-[#20235A]">
                    Books &amp; academic contributions
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-[#1e1917]/65">
                    No book-publication details were provided for this profile.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* -------Ajeesh Faculty Details Starts-------- */}
        {/* FACULTY PROFILE — MR. AJISH U */}
        <main className="bg-[#FAF7F2] text-[#1e1917] [&_p]:text-justify">
          <section
            id="faculty-profile"
            className="px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20"
          >
            <div className="mx-auto max-w-[1440px]">
              {/* Profile Header */}
              <div className="relative overflow-hidden bg-[#20235A] p-7 sm:p-10 lg:p-14">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border border-[#D2B87C]/20 sm:h-80 sm:w-80"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-4 -top-8 h-44 w-44 rounded-full border border-[#D2B87C]/15 sm:h-56 sm:w-56"
                />

                <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                  <div>
                    <div className="mb-5 flex items-center gap-3">
                      <span className="h-px w-9 bg-[#D2B87C]" />
                      <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                        Faculty Profile
                      </p>
                    </div>

                    <h1 className="font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
                      Mr. Ajish U
                    </h1>

                    <p className="mt-3 text-lg text-[#D2B87C] sm:text-xl">
                      Assistant Professor
                    </p>

                    <p className="mt-2 max-w-2xl text-sm leading-7 text-white/70">
                      Department of Electrical and Electronics Engineering
                    </p>

                    <p className="mt-6 max-w-3xl text-sm leading-7 text-white/75 sm:text-base">
                      Focused on power electronics and electric drives, with additional
                      research interests in fibre-optic sensing technologies and the
                      integration of electronics and embedded systems for hazard
                      detection.
                    </p>
                  </div>

                  <div className="flex items-center gap-4 border-t border-white/15 pt-5 lg:min-w-[180px] lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#D2B87C]/50 text-[#D2B87C]">
                      <UserRound className="h-6 w-6" strokeWidth={1.4} />
                    </div>
                    <div>
                      <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/50">
                        NCERC Unique ID
                      </p>
                      <p className="mt-1 font-serif text-2xl text-white">4561</p>
                    </div>
                  </div>
                </div>

                {/* Academic Qualifications */}
                <div className="relative mt-10 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2">
                  <div className="bg-[#20235A] p-5 sm:p-6">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#D2B87C]">
                      Postgraduate Qualification
                    </p>
                    <p className="mt-2 font-serif text-lg text-white">
                      M.Tech
                    </p>
                    <p className="mt-1 text-xs leading-5 text-white/60">
                      Power Electronics and Drives
                    </p>
                  </div>

                  <div className="bg-[#20235A] p-5 sm:p-6">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#D2B87C]">
                      Undergraduate Qualification
                    </p>
                    <p className="mt-2 font-serif text-lg text-white">
                      B.Tech
                    </p>
                    <p className="mt-1 text-xs leading-5 text-white/60">
                      Electrical and Electronics Engineering
                    </p>
                  </div>
                </div>
              </div>

              {/* About and Research Interests */}
              <div className="mt-10 grid gap-8 lg:grid-cols-2">
                <div className="border border-[#20235A]/10 bg-white p-6 sm:p-8 lg:p-9">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="h-px w-8 bg-[#8F7746]" />
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                      About
                    </p>
                  </div>

                  <h2 className="font-serif text-2xl leading-tight text-[#20235A] sm:text-3xl">
                    Academic profile
                  </h2>

                  <p className="mt-5 text-sm leading-7 text-[#1e1917]/70">
                    Mr. Ajish U is an Assistant Professor in the Department of
                    Electrical and Electronics Engineering. His qualifications are
                    in Electrical and Electronics Engineering and Power Electronics
                    and Drives.
                  </p>

                  <div className="mt-7 border-l-2 border-[#D2B87C] bg-[#F2EFE8] p-5">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                      Designation
                    </p>
                    <p className="mt-2 font-serif text-xl text-[#20235A]">
                      Assistant Professor
                    </p>
                    <p className="mt-1 text-xs leading-5 text-[#1e1917]/60">
                      Electrical and Electronics Engineering
                    </p>
                  </div>
                </div>

                <div className="border border-[#20235A]/10 bg-[#F2EFE8] p-6 sm:p-8 lg:p-9">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="h-px w-8 bg-[#8F7746]" />
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                      Research Interests
                    </p>
                  </div>

                  <h2 className="font-serif text-2xl leading-tight text-[#20235A] sm:text-3xl">
                    Power electronics &amp; sensing technologies
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-[#1e1917]/70">
                    The primary research interest lies in the domain of Power electronics and drives. Also, interested in research in the ﬁeld of Fiber optic sensing technologies, Integration of electronics and embedded systems for hazard detection.
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {[
                      "Power Electronics",
                      "Electric Drives",
                      "Fibre-Optic Sensing Technologies",
                      "Embedded Systems for Hazard Detection",
                    ].map((interest, index) => (
                      <div
                        key={interest}
                        className="flex items-start gap-3 border border-[#20235A]/10 bg-[#FAF7F2] p-4"
                      >
                        <span className="mt-0.5 font-serif text-sm text-[#8F7746]">
                          0{index + 1}
                        </span>
                        <p className="text-sm leading-6 text-[#20235A]">
                          {interest}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Keywords */}
              <div className="mt-10 border border-[#20235A]/10 bg-white p-6 sm:p-8 lg:p-9">
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#8F7746]" />
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                    Expertise &amp; Keywords
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  {[
                    "Power Electronics",
                    "Electric Drives",
                    "Optic Fiber Technology",
                    "Embedded Systems",
                  ].map((keyword) => (
                    <span
                      key={keyword}
                      className="border border-[#20235A]/10 bg-[#FAF7F2] px-4 py-3 text-sm text-[#20235A] transition-colors hover:border-[#D2B87C]"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>

              {/* Academic Identifiers */}
              <div className="mt-10 bg-[#20235A] p-6 sm:p-8 lg:p-10">
                <div className="mb-7">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="h-px w-8 bg-[#D2B87C]" />
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                      Academic Identity
                    </p>
                  </div>

                  <h2 className="font-serif text-2xl text-white sm:text-3xl">
                    Researcher profiles
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-white/60">
                    Researcher ID, ORCID, Google Scholar, and additional areas of
                    interest were not specified in the supplied details.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    "Researcher ID",
                    "ORCID Profile",
                    "Google Scholar Profile",
                  ].map((label) => (
                    <div
                      key={label}
                      className="border border-white/10 bg-white/[0.04] p-5"
                    >
                      <p className="text-[9px] font-semibold uppercase tracking-[0.17em] text-[#D2B87C]">
                        {label}
                      </p>
                      <p className="mt-2 text-sm text-white/45">
                        Not provided
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 border border-white/10 px-5 py-4">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/50">
                    NCERC Unique ID
                  </p>
                  <p className="mt-1 font-serif text-xl text-[#D2B87C]">4561</p>
                </div>
              </div>

              {/* Courses Handled */}
              <div className="mt-16 sm:mt-20">
                <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                  <div>
                    <div className="mb-4 flex items-center gap-3">
                      <span className="h-px w-8 bg-[#8F7746]" />
                      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                        Teaching Record
                      </p>
                    </div>
                    <h2 className="font-serif text-3xl text-[#20235A] sm:text-4xl">
                      Courses handled
                    </h2>
                  </div>
                  <p className="text-xs text-[#1e1917]/55">
                    Academic year 2026 · 6 entries
                  </p>
                </div>

                <div className="overflow-hidden border border-[#20235A]/10 bg-white">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[780px] border-collapse text-left">
                      <thead>
                        <tr className="bg-[#20235A]">
                          {[
                            "Sl. No.",
                            "Year",
                            "Stream",
                            "Sem",
                            "Branch",
                            "Subject",
                          ].map((heading) => (
                            <th
                              key={heading}
                              className="px-4 py-4 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#D2B87C] sm:px-5"
                            >
                              {heading}
                            </th>
                          ))}
                        </tr>
                      </thead>

                      <tbody>
                        {[
                          ["1", "2026", "B. Tech", "IV", "EEE", "Microcontrollers and interfacing Techniques"],
                          ["2", "2026", "B. Tech", "IV", "EEE", "Microcontrollers and interfacing Techniques Lab"],
                          ["3", "2026", "B. Tech", "IV", "MTR", "Economics for Engineers"],
                          ["4", "2026", "B. Tech", "IV", "EEE", "Economics for Engineers"],
                          ["5", "2026", "B. Tech", "II", "ME", "Basic Electronics Engineering"],
                          ["6", "2026", "B. Tech", "II", "ME", "Basic Electronics Engineering Lab"],
                        ].map((course, index) => (
                          <tr
                            key={course[0]}
                            className={`border-b border-[#20235A]/10 last:border-0 ${index % 2 === 0 ? "bg-white" : "bg-[#FAF7F2]"
                              } hover:bg-[#F2EFE8]`}
                          >
                            {course.map((value, cellIndex) => (
                              <td
                                key={`${course[0]}-${cellIndex}`}
                                className={`px-4 py-4 text-sm sm:px-5 ${cellIndex === 5
                                  ? "font-medium text-[#20235A]"
                                  : "text-[#1e1917]/70"
                                  }`}
                              >
                                {value}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p className="border-t border-[#20235A]/10 px-5 py-3 text-xs text-[#1e1917]/50">
                    Scroll horizontally within the table on smaller screens to view
                    all columns.
                  </p>
                </div>
              </div>

              {/* Publications */}
              <div className="mt-16 sm:mt-20">
                <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                  <div>
                    <div className="mb-4 flex items-center gap-3">
                      <span className="h-px w-8 bg-[#8F7746]" />
                      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                        Research Output
                      </p>
                    </div>
                    <h2 className="font-serif text-3xl text-[#20235A] sm:text-4xl">
                      Publications &amp; conferences
                    </h2>
                  </div>
                  <p className="text-xs text-[#1e1917]/55">
                    4 publication entries
                  </p>
                </div>

                <div className="overflow-hidden border border-[#20235A]/10 bg-white">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[600px] border-collapse text-left">
                      <thead>
                        <tr className="bg-[#20235A]">
                          <th className="w-24 px-5 py-4 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#D2B87C]">
                            Year
                          </th>
                          <th className="px-5 py-4 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#D2B87C]">
                            Title of Paper
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        {[
                          {
                            year: "2025",
                            title:
                              "Harnessing fiber Bragg grating sensors for enhanced tsunami monitoring and early warning.",
                            event:
                              "The International Conference on Tsunami Risk Reduction & Resilience (ICTR3), 2024- December",
                          },
                          {
                            year: "2026",
                            title:
                              "Assessing fiber Bragg grating sensors for landslide monitoring: Current trends and future prospects.",
                            event:
                              "The International Conference for Microwave,	Optical	and Communication		Engineering (ICMOCE), IIT Bhubaneswar, India.-2024",
                          },
                          {
                            year: "2018",
                            title:
                              "A new thyristor based DC circuit breaker implemented on a DC application.",
                            event:
                              "International Journal of Creative Research Thoughts (IJCRT), ISSN:2320-2882, Volume.6, Issue 2, pp.887-889, April 2018",
                          },
                          {
                            year: "2018",
                            title:
                              "Thyristor based dc circuit breaker implemented on a dc application.",
                            event:
                              "International Research Journal of Engineering and Technology, 5(3), 123-128.",
                          },
                        ].map((publication, index) => (
                          <tr
                            key={`${publication.year}-${publication.title}`}
                            className={`border-b border-[#20235A]/10 last:border-0 ${index % 2 === 0 ? "bg-white" : "bg-[#FAF7F2]"
                              }`}
                          >
                            <td className="px-5 py-5 align-top">
                              <span className="inline-flex border border-[#D2B87C]/60 px-3 py-2 font-serif text-sm text-[#8F7746]">
                                {publication.year}
                              </span>
                            </td>
                            <td className="px-5 py-5">
                              <p className="text-sm font-medium leading-7 text-[#20235A]">
                                {publication.title}
                              </p>
                              <p className="mt-2 text-xs leading-6 text-[#1e1917]/60">
                                {publication.event}
                              </p>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p className="border-t border-[#20235A]/10 px-5 py-3 text-xs text-[#1e1917]/50">
                    Publication years and conference details are presented as supplied.
                  </p>
                </div>
              </div>

              {/* Book Publications */}
              <div className="mt-10 border border-[#20235A]/10 bg-[#F2EFE8] p-6 sm:p-8 lg:p-9">
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                    <BookOpen className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                      Book Publications
                    </p>
                    <h2 className="mt-2 font-serif text-2xl text-[#20235A]">
                      Books &amp; academic contributions
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-[#1e1917]/65">
                      No book-publication details were provided for this profile.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        {/* ----Johnson Faculty Details----- */}
        <main className="bg-[#FAF7F2] text-[#1e1917] [&_p]:text-justify">
          <section
            id="faculty-profile"
            className="px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20"
          >
            <div className="mx-auto max-w-[1440px]">
              {/* Profile Header */}
              <div className="relative overflow-hidden bg-[#20235A] p-7 sm:p-10 lg:p-14">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border border-[#D2B87C]/20 sm:h-80 sm:w-80"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-4 -top-8 h-44 w-44 rounded-full border border-[#D2B87C]/15 sm:h-56 sm:w-56"
                />

                <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                  <div>
                    <div className="mb-5 flex items-center gap-3">
                      <span className="h-px w-9 bg-[#D2B87C]" />
                      <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                        Faculty Profile
                      </p>
                    </div>

                    <h1 className="font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
                      Dr. Johnson Y
                    </h1>

                    <p className="mt-3 text-lg text-[#D2B87C] sm:text-xl">
                      Professor
                    </p>

                    <p className="mt-2 max-w-2xl text-sm leading-7 text-white/70">
                      Department of Electrical and Electronics Engineering
                    </p>

                    <p className="mt-6 max-w-3xl text-sm leading-7 text-white/75 sm:text-base">
                      An experienced electrical engineering academic and researcher
                      specialising in robust control systems, aerospace applications,
                      stability analysis, renewable energy, and electric vehicles.
                    </p>
                  </div>

                  <div className="flex items-center gap-4 border-t border-white/15 pt-5 lg:min-w-[180px] lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#D2B87C]/50 text-[#D2B87C]">
                      <UserRound className="h-6 w-6" strokeWidth={1.4} />
                    </div>
                    <div>
                      <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/50">
                        NCERC Unique ID
                      </p>
                      <p className="mt-1 font-serif text-2xl text-white">4532</p>
                    </div>
                  </div>
                </div>

                {/* Academic Qualifications */}
                <div className="relative mt-10 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2">
                  <div className="bg-[#20235A] p-5 sm:p-6">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#D2B87C]">
                      Postdoctoral Qualification
                    </p>
                    <p className="mt-2 font-serif text-lg text-white">
                      Postdoc
                    </p>
                    <p className="mt-1 text-xs leading-5 text-white/60">
                      Technology Management
                    </p>
                  </div>

                  <div className="bg-[#20235A] p-5 sm:p-6">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#D2B87C]">
                      Doctoral Qualification
                    </p>
                    <p className="mt-2 font-serif text-lg text-white">PhD</p>
                    <p className="mt-1 text-xs leading-5 text-white/60">
                      Electrical Engineering
                    </p>
                  </div>

                  <div className="bg-[#20235A] p-5 sm:p-6">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#D2B87C]">
                      Postgraduate Qualification
                    </p>
                    <p className="mt-2 font-serif text-lg text-white">M.Tech</p>
                    <p className="mt-1 text-xs leading-5 text-white/60">
                      Industrial Instrumentation and Control
                    </p>
                  </div>

                  <div className="bg-[#20235A] p-5 sm:p-6">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#D2B87C]">
                      Additional Qualification
                    </p>
                    <p className="mt-2 font-serif text-lg text-white">
                      Diploma
                    </p>
                    <p className="mt-1 text-xs leading-5 text-white/60">
                      Management
                    </p>
                  </div>
                </div>
              </div>

              {/* About and Research Interests */}
              <div className="mt-10 grid gap-8 lg:grid-cols-2">
                <div className="border border-[#20235A]/10 bg-white p-6 sm:p-8 lg:p-9">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="h-px w-8 bg-[#8F7746]" />
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                      About
                    </p>
                  </div>

                  <h2 className="font-serif text-2xl leading-tight text-[#20235A] sm:text-3xl">
                    Academic profile
                  </h2>

                  <p className="mt-5 text-sm leading-7 text-[#1e1917]/70">
                    Teacher in Electrical Engineering with research passion in control systems studies. Received Postdoctoral Fellowship in Technology Management from the University of Kerala, India. Received PhD from the University of Kerala in 2019 in Electrical and Electronics Engineering (control system with electrical and aerospace applications). More than 22 years of experience in teaching, research, industry and administration levels. Hold various positions in government and private engineering colleges as Professor/Associate/Assistant/Lecturer with assigned duties of department head/PG coordinator; in public and private industrial sectors as engineer and in government department as system administrator. Recipient of the prestigious Aerospace Engineering Division Prize international award in 2014 from the Institution of Engineers (India). With two patent application publications, more than 20 research articles are published in various international journals and conference proceedings. Worked as resource person and speaker in many conferences and webinars, attended in more than 100 workshops/seminars. Received many funded projects from Govt of India and Kerala. Member of many professional organizations like IE(I), KAS, ECS etc.

                  </p>

                  <div className="mt-7 border-l-2 border-[#D2B87C] bg-[#F2EFE8] p-5">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                      Designation
                    </p>
                    <p className="mt-2 font-serif text-xl text-[#20235A]">
                      Professor
                    </p>
                    <p className="mt-1 text-xs leading-5 text-[#1e1917]/60">
                      Electrical and Electronics Engineering
                    </p>
                  </div>
                </div>

                <div className="border border-[#20235A]/10 bg-[#F2EFE8] p-6 sm:p-8 lg:p-9">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="h-px w-8 bg-[#8F7746]" />
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                      Research Interests
                    </p>
                  </div>

                  <h2 className="font-serif text-2xl leading-tight text-[#20235A] sm:text-3xl">
                    Robust control &amp; aerospace systems
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-[#1e1917]/70">
                    The primary research interest lies in the domain of robust control systems with aerospace applications. Also, interested in research in the field of renewable energy  and its allied areas, electric vehicles, energy audit etc.

                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {[
                      "Robust Control Systems",
                      "Aerospace Applications",
                      "Renewable Energy",
                      "Electric Vehicles",
                      "Energy Audit",
                      "Stability Analysis",
                    ].map((interest, index) => (
                      <div
                        key={interest}
                        className="flex items-start gap-3 border border-[#20235A]/10 bg-[#FAF7F2] p-4"
                      >
                        <span className="mt-0.5 font-serif text-sm text-[#8F7746]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <p className="text-sm leading-6 text-[#20235A]">
                          {interest}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Expertise and Keywords */}
              <div className="mt-10 border border-[#20235A]/10 bg-white p-6 sm:p-8 lg:p-9">
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#8F7746]" />
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                    Expertise &amp; Keywords
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  {[
                    "Robust Control",
                    "Stability Analysis",
                    "UAV",
                    "Electric Vehicles",
                    "Solar Energy",
                  ].map((keyword) => (
                    <span
                      key={keyword}
                      className="border border-[#20235A]/10 bg-[#FAF7F2] px-4 py-3 text-sm text-[#20235A] transition-colors hover:border-[#D2B87C]"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>

              {/* Academic Identifiers */}
              <div className="mt-10 bg-[#20235A] p-6 sm:p-8 lg:p-10">
                <div className="mb-7">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="h-px w-8 bg-[#D2B87C]" />
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                      Academic Identity
                    </p>
                  </div>

                  <h2 className="font-serif text-2xl text-white sm:text-3xl">
                    Researcher profiles
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-white/60">
                    Access the researcher profiles and academic identifiers associated
                    with Dr. Johnson Y.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      label: "Researcher ID",
                      value: "Publons",
                      url: "https://publons.com/a/1422443/",
                    },
                    {
                      label: "Scopus Author ID",
                      value: "56047882600",
                      url: "https://www.scopus.com/authid/detail.uri?authorId=56047882600",
                    },
                    {
                      label: "ResearchGate",
                      value: "View ResearchGate Profile",
                      url: "https://www.researchgate.net/profile/Y_Johnson",
                    },
                    {
                      label: "Web of Science ID",
                      value: "AAK-9763-2021",
                      url: "https://www.webofscience.com/wos/author/record/AAK-9763-2021",
                    },
                    {
                      label: "ORCID",
                      value: "0009-0007-6476-7269",
                      url: "https://orcid.org/0009-0007-6476-7269",
                    },
                    {
                      label: "Google Scholar",
                      value: "View Google Scholar Profile",
                      url: "https://scholar.google.com/citations?user=VVU42tcAAAAJ&hl=en",
                    },
                  ].map((profile) => (
                    <a
                      key={profile.label}
                      href={profile.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex min-w-0 items-start justify-between gap-3 border border-white/10 bg-white/[0.04] p-5 transition-colors hover:border-[#D2B87C]/50 hover:bg-white/[0.08]"
                    >
                      <div className="min-w-0">
                        <p className="text-[9px] font-semibold uppercase tracking-[0.17em] text-[#D2B87C]">
                          {profile.label}
                        </p>
                        <p className="mt-2 break-words text-sm leading-6 text-white/75">
                          {profile.value}
                        </p>
                      </div>
                      <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-[#D2B87C] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  ))}
                </div>

                <div className="mt-5 border border-white/10 px-5 py-4">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/50">
                    NCERC Unique ID
                  </p>
                  <p className="mt-1 font-serif text-xl text-[#D2B87C]">4532</p>
                </div>

                <div className="mt-5 border-l-2 border-[#D2B87C] bg-white/[0.04] p-5">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#D2B87C]">
                    Area of Interest
                  </p>
                  <p className="mt-2 text-sm leading-7 text-white/75">
                    Robust control system design and stability analysis
                  </p>
                </div>
              </div>

              {/* Courses Handled */}
              <div className="mt-16 sm:mt-20">
                <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                  <div>
                    <div className="mb-4 flex items-center gap-3">
                      <span className="h-px w-8 bg-[#8F7746]" />
                      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                        Teaching Record
                      </p>
                    </div>
                    <h2 className="font-serif text-3xl text-[#20235A] sm:text-4xl">
                      Courses handled
                    </h2>
                  </div>
                  <p className="text-xs text-[#1e1917]/55">
                    8 course entries
                  </p>
                </div>

                <div className="overflow-hidden border border-[#20235A]/10 bg-white">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[780px] border-collapse text-left">
                      <thead>
                        <tr className="bg-[#20235A]">
                          {[
                            "Sl. No.",
                            "Year",
                            "Stream",
                            "Sem",
                            "Branch",
                            "Subject",
                          ].map((heading) => (
                            <th
                              key={heading}
                              className="px-4 py-4 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#D2B87C] sm:px-5"
                            >
                              {heading}
                            </th>
                          ))}
                        </tr>
                      </thead>

                      <tbody>
                        {[
                          ["1", "2026", "B. Tech", "IV", "EEE", "Digital Electronics"],
                          ["2", "2025", "B. Tech", "III", "EEE", "Introduction to Artificial Intelligence and Data Science"],
                          ["3", "2023", "B. Tech", "VI", "EEE", "Comprehensive Course Work"],
                          ["4", "2023", "M. Tech", "I", "EEE", "Dynamics of Linear Systems"],
                          ["5", "2022", "B. Tech", "V", "EEE", "Disaster Management"],
                          ["6", "2022", "B. Tech", "VII", "EEE", "Advanced Control Systems"],
                          ["7", "2022", "B. Tech", "VII", "EEE", "Control Systems Lab"],
                          ["8", "2022", "B. Tech", "VII", "EEE", "Seminar"],
                        ].map((course, index) => (
                          <tr
                            key={course[0]}
                            className={`border-b border-[#20235A]/10 last:border-0 ${index % 2 === 0 ? "bg-white" : "bg-[#FAF7F2]"
                              } hover:bg-[#F2EFE8]`}
                          >
                            {course.map((value, cellIndex) => (
                              <td
                                key={`${course[0]}-${cellIndex}`}
                                className={`px-4 py-4 text-sm sm:px-5 ${cellIndex === 5
                                  ? "font-medium text-[#20235A]"
                                  : "text-[#1e1917]/70"
                                  }`}
                              >
                                {value}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p className="border-t border-[#20235A]/10 px-5 py-3 text-xs text-[#1e1917]/50">
                    Scroll horizontally within the table on smaller screens to view
                    all columns.
                  </p>
                </div>
              </div>

              {/* Book Chapter */}
              <div className="mt-10 border border-[#20235A]/10 bg-[#F2EFE8] p-6 sm:p-8 lg:p-9">
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                    <BookOpen className="h-5 w-5" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                      Book Chapter
                    </p>
                    <h2 className="mt-2 font-serif text-2xl text-[#20235A]">
                      Attitude Control of Satellites with Reaction Wheels and Its Formation Keeping
                    </h2>

                    <p className="mt-3 text-sm leading-7 text-[#1e1917]/65">
                      Johnson, Y., Parvathy Thampi, M.S., Das, A., Binz, M. (2024).
                      In: Senjyu, T., So-In, C., Joshi, A. (eds), Smart Trends in
                      Computing and Communications. SmartCom 2024. Lecture Notes in
                      Networks and Systems, vol. 948. Springer, Singapore.
                    </p>

                    <a
                      href="https://doi.org/10.1007/978-981-97-1329-5_22"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#20235A] underline decoration-[#D2B87C] underline-offset-4 transition-colors hover:text-[#8F7746]"
                    >
                      Read publication
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Journal Publications */}
              <div className="mt-16 sm:mt-20">
                <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                  <div>
                    <div className="mb-4 flex items-center gap-3">
                      <span className="h-px w-8 bg-[#8F7746]" />
                      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                        Research Output
                      </p>
                    </div>
                    <h2 className="font-serif text-3xl text-[#20235A] sm:text-4xl">
                      Journal publications
                    </h2>
                  </div>
                  <p className="text-xs text-[#1e1917]/55">
                    5 journal entries
                  </p>
                </div>

                <div className="grid gap-4">
                  {[
                    {
                      year: "2024",
                      title:
                        "Robust PID Control of a Tuned Mass Damper System and Its Stability Analysis Validation by Kharitonov and Edge Theorems",
                      details:
                        "Australian Journal of Multi-Disciplinary Engineering, March 2024, pp. 1–10.",
                      doi: "https://doi.org/10.1080/14488388.2024.2331288",
                    },
                    {
                      year: "2018",
                      title:
                        "Nonlinear Modeling of Leader-follower UAV Close Formation Flight with Dynamic Inversion based Control",
                      details:
                        "Johnson Y & Imthias Ahamed T. P. International Journal of Modeling, Identification and Control (IJMIC), Vol. 30, No. 2, 2018.",
                      doi: "https://doi.org/10.1504/IJMIC.2017.10011686",
                    },
                    {
                      year: "2017",
                      title:
                        "Aerodynamic Stability Analysis of Two Heterogeneous UAVs in Close Formation Flight System",
                      details:
                        "Johnson Yohannan & Imthias Ahamed T. P. Fluid Mechanics, Science Publishing Group, Vol. 3, Issue 3, May 2017, pp. 13–19.",
                      doi: "",
                    },
                    {
                      year: "2017",
                      title:
                        "Robust Analysis with Controller Design of Forward-velocity Dynamics of UAVs in Close Formation Flight",
                      details:
                        "Johnson Y. & Imthias Ahamed T. P. International Journal of Engineering and Advanced Technology, Vol. 6, Issue 4, April 2017.",
                      doi: "",
                    },
                    {
                      year: "2014",
                      title:
                        "Robust Hurwitz Stability and Performance Analysis of H-Infinity Controlled Forward-Velocity Dynamics of UAVs in Close Formation Flight Using Bounded Phase Conditions in a Kharitonov Framework",
                      details:
                        "Y. Johnson & S. Dasgupta. Journal of The Institution of Engineers (India), Springer Publications, Series C, Vol. 95, Issue 3, 2014, pp. 223–231. Awarded the Aerospace Engineering Division Prize in 2014.",
                      doi: "",
                    },
                  ].map((publication) => (
                    <article
                      key={`${publication.year}-${publication.title}`}
                      className="border border-[#20235A]/10 bg-white p-6 sm:p-8"
                    >
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                        <div className="shrink-0">
                          <span className="inline-flex border border-[#D2B87C]/60 px-3 py-2 font-serif text-sm text-[#8F7746]">
                            {publication.year}
                          </span>
                        </div>

                        <div className="min-w-0 flex-1">
                          <h3 className="font-medium text-sm leading-7 text-[#20235A] sm:text-base">
                            {publication.title}
                          </h3>
                          <p className="mt-2 text-sm leading-7 text-[#1e1917]/60">
                            {publication.details}
                          </p>

                          {publication.doi && (
                            <a
                              href={publication.doi}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-3 inline-flex items-center gap-2 text-xs font-medium text-[#20235A] underline decoration-[#D2B87C] underline-offset-4 hover:text-[#8F7746]"
                            >
                              View publication
                              <ArrowUpRight className="h-3.5 w-3.5" />
                            </a>
                          )}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              {/* Conference Publications */}
              <div className="mt-16 sm:mt-20">
                <div className="mb-7">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="h-px w-8 bg-[#8F7746]" />
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                      Conference Proceedings
                    </p>
                  </div>

                  <h2 className="font-serif text-3xl text-[#20235A] sm:text-4xl">
                    Conference publications
                  </h2>
                </div>

                <div className="grid gap-4 lg:grid-cols-2">
                  {[
                    {
                      year: "2024",
                      title:
                        "Leader-Follower UAV Formation Flight Robust Control Stability Validation Profile with Post-Kharitonov Edge Theorem",
                      details:
                        "Johnson Y, Parvathy Thampi M. S. & Binz Shiyas. ICACCES’2024, International Conference on Advanced Computing Communication and Electrical System, February 22–23, 2024, KMEA Engineering College, Kerala, India.",
                    },
                    {
                      year: "2024",
                      title:
                        "Attitude Control of Satellites with Reaction Wheels and Its Formation Keeping",
                      details:
                        "Johnson Y, Parvathy Thampi M. S., Anju Das and Binz Shiyas. Proceedings of SmartCom 2024, Volume 4, pages 279–292. 8th International Conference on Smart Trends in Computing and Communications, January 12–13, 2024, Pune, India.",
                    },
                  ].map((publication) => (
                    <article
                      key={publication.title}
                      className="border border-[#20235A]/10 bg-white p-6 sm:p-8"
                    >
                      <span className="inline-flex border border-[#D2B87C]/60 px-3 py-2 font-serif text-sm text-[#8F7746]">
                        {publication.year}
                      </span>

                      <h3 className="mt-4 font-medium text-sm leading-7 text-[#20235A] sm:text-base">
                        {publication.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-[#1e1917]/60">
                        {publication.details}
                      </p>
                    </article>
                  ))}
                </div>
              </div>

              {/* Footer Note */}
              <div className="mt-16 flex flex-col gap-3 border-t border-[#20235A]/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-[#1e1917]/55">
                  Department of Electrical and Electronics Engineering
                </p>
                <p className="text-xs text-[#1e1917]/55">
                  NCERC Unique ID: 4532
                </p>
              </div>
            </div>
          </section>
        </main>

        {/* ----DR Mobi Mathew Faculty Details---- */}
        <main className="bg-[#FAF7F2] text-[#1e1917] [&_p]:text-justify">
          <section
            id="faculty-profile"
            className="px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20"
          >
            <div className="mx-auto max-w-[1440px]">
              {/* Profile Header */}
              <div className="relative overflow-hidden bg-[#20235A] p-7 sm:p-10 lg:p-14">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border border-[#D2B87C]/20 sm:h-80 sm:w-80"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-4 -top-8 h-44 w-44 rounded-full border border-[#D2B87C]/15 sm:h-56 sm:w-56"
                />

                <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                  <div>
                    <div className="mb-5 flex items-center gap-3">
                      <span className="h-px w-9 bg-[#D2B87C]" />
                      <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                        Faculty Profile
                      </p>
                    </div>

                    <h1 className="font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
                      Dr. Mobi Mathew, C. Eng. (I)
                    </h1>

                    <p className="mt-3 text-lg text-[#D2B87C] sm:text-xl">
                      Assistant Professor
                    </p>

                    <p className="mt-2 max-w-2xl text-sm leading-7 text-white/70">
                      Department of Electrical and Electronics Engineering
                    </p>

                    <p className="mt-6 max-w-3xl text-sm leading-7 text-white/75 sm:text-base">
                      An academic and Chartered Engineer specialising in sustainable
                      energy systems, solar photovoltaics, floating solar technologies,
                      microgrids, energy policy, and circular economy principles.
                      Co-Founder of the Hariterde International Council of Circular
                      Economy Research (HICCER).
                    </p>
                  </div>

                  <div className="flex items-center gap-4 border-t border-white/15 pt-5 lg:min-w-[180px] lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#D2B87C]/50 text-[#D2B87C]">
                      <UserRound className="h-6 w-6" strokeWidth={1.4} />
                    </div>

                    <div>
                      <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/50">
                        NCERC Unique ID
                      </p>
                      <p className="mt-1 font-serif text-2xl text-white">1951</p>
                    </div>
                  </div>
                </div>

                {/* Academic Qualifications */}
                <div className="relative mt-10 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      label: "Doctoral Qualification",
                      degree: "DBA",
                      specialization: "Energy Management",
                    },
                    {
                      label: "Postgraduate Qualification",
                      degree: "M.Tech",
                      specialization: "Energy Management Auditing & Lighting",
                    },
                    {
                      label: "Postgraduate Qualification",
                      degree: "MBA",
                      specialization: "Power Management",
                    },
                    {
                      label: "Postgraduate Diploma",
                      degree: "PG Dip.",
                      specialization: "Renewable Energy",
                    },
                    {
                      label: "Postgraduate Diploma",
                      degree: "PG Dip.",
                      specialization: "Environmental Law",
                    },
                    {
                      label: "Undergraduate Qualification",
                      degree: "B.Tech",
                      specialization: "Electrical and Electronics Engineering",
                    },
                  ].map((qualification) => (
                    <div
                      key={`${qualification.degree}-${qualification.specialization}`}
                      className="bg-[#20235A] p-5 sm:p-6"
                    >
                      <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#D2B87C]">
                        {qualification.label}
                      </p>
                      <p className="mt-2 font-serif text-lg text-white">
                        {qualification.degree}
                      </p>
                      <p className="mt-1 text-xs leading-5 text-white/60">
                        {qualification.specialization}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* About and Research Interests */}
              <div className="mt-10 grid gap-8 lg:grid-cols-2">
                <div className="border border-[#20235A]/10 bg-white p-6 sm:p-8 lg:p-9">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="h-px w-8 bg-[#8F7746]" />
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                      About
                    </p>
                  </div>

                  <h2 className="font-serif text-2xl leading-tight text-[#20235A] sm:text-3xl">
                    Academic profile
                  </h2>

                  <p className="mt-5 text-sm leading-7 text-[#1e1917]/70">
                    Dr. Mobi Mathew is a Chartered Engineer (India) and academic specializing in sustainable energy systems, with a focus on solar photovoltaics, floating solar technologies, microgrids, and energy policy. He currently serves as Assistant Professor in Electrical and Electronics Engineering and is the Co-Founder of the Hariterde International Council of Circular Economy Research (HICCER).
                  </p>

                  <p className="mt-4 text-sm leading-7 text-[#1e1917]/70">
                    With over a decade of experience in teaching and research across institutions including Deakin University (Australia), TERI University, New Delhi, and RGIPT, Bengaluru, his work integrates engineering, economics, and sustainability. He has authored over 50 peer-reviewed publications with nearly 1000 citations and actively contributes as a reviewer for leading journals from Elsevier, IEEE, and Springer.
                  </p>

                  <p className="mt-4 text-sm leading-7 text-[#1e1917]/70">
                    His research emphasizes techno-economic analysis, sustainability assessment, and innovative renewable energy solutions aligned with global decarbonization goals and circular economy principles.
                  </p>

                  <div className="mt-7 border-l-2 border-[#D2B87C] bg-[#F2EFE8] p-5">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                      Designation
                    </p>
                    <p className="mt-2 font-serif text-xl text-[#20235A]">
                      Assistant Professor
                    </p>
                    <p className="mt-1 text-xs leading-5 text-[#1e1917]/60">
                      Electrical and Electronics Engineering
                    </p>
                  </div>

                  <div className="mt-5 border border-[#20235A]/10 p-5">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                      Professional Recognition
                    </p>
                    <p className="mt-2 font-serif text-lg text-[#20235A]">
                      Chartered Engineer (India)
                    </p>
                    <p className="mt-1 text-xs leading-6 text-[#1e1917]/60">
                      Co-Founder, Hariterde International Council of Circular Economy
                      Research (HICCER)
                    </p>
                  </div>
                </div>

                <div className="border border-[#20235A]/10 bg-[#F2EFE8] p-6 sm:p-8 lg:p-9">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="h-px w-8 bg-[#8F7746]" />
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                      Research Interests
                    </p>
                  </div>

                  <h2 className="font-serif text-2xl leading-tight text-[#20235A] sm:text-3xl">
                    Sustainable energy &amp; decarbonization
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-[#1e1917]/70">
                    Research interests span renewable energy technologies, energy
                    management, sustainability assessment, intelligent energy systems,
                    and innovative approaches to the energy–water–climate nexus.
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {[
                      "Floating Solar Photovoltaic (FSPV) Systems ",
                      "Bifacial Solar PV and Albedo Optimization ",
                      "Techno-Economic Analysis of Renewable Energy Systems ",
                      "Energy Policy and Sustainability Assessment ",
                      "Microgrids and Distributed Energy Systems ",
                      "Hydrogen Energy and Energy Storage Technologies ",
                      "AI Applications in Smart Energy Systems",
                      "Energy-Water-Climate Nexus ",
                      "Carbon Emission Mitigation and Lifecycle Assessment ",
                      "Circular Economy in Energy Systems",
                    ].map((interest, index) => (
                      <div
                        key={interest}
                        className="flex items-start gap-3 border border-[#20235A]/10 bg-[#FAF7F2] p-4"
                      >
                        <span className="mt-0.5 font-serif text-sm text-[#8F7746]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <p className="text-sm leading-6 text-[#20235A]">
                          {interest}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Expertise and Keywords */}
              <div className="mt-10 border border-[#20235A]/10 bg-white p-6 sm:p-8 lg:p-9">
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#8F7746]" />
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                    Expertise &amp; Keywords
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  {[
                    "Solar Photovoltaics",
                    "Floating Solar (FSPV)",
                    "Bifacial PV",
                    "Renewable Energy Systems",
                    "Energy Management",
                    "Techno-Economic Analysis",
                    "Albedo Optimization",
                    "Microgrids",
                    "Hydrogen Energy",
                    "Energy Storage",
                    "Sustainability",
                    "Climate Change Mitigation",
                    "Carbon Emissions",
                    "Lifecycle Assessment",
                    "Circular Economy",
                    "Smart Energy Systems",
                    "AI in Energy",
                    "Water–Energy Nexus",
                    "Clean Energy Transition",
                    "Decarbonization",
                  ].map((keyword) => (
                    <span
                      key={keyword}
                      className="border border-[#20235A]/10 bg-[#FAF7F2] px-4 py-3 text-sm text-[#20235A] transition-colors hover:border-[#D2B87C]"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>

              {/* Academic Identity */}
              <div className="mt-10 bg-[#20235A] p-6 sm:p-8 lg:p-10">
                <div className="mb-7">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="h-px w-8 bg-[#D2B87C]" />
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                      Academic Identity
                    </p>
                  </div>

                  <h2 className="font-serif text-2xl text-white sm:text-3xl">
                    Researcher profiles
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-white/60">
                    Access the researcher identifiers and academic profile associated
                    with Dr. Mobi Mathew.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      label: "Researcher ID / ORCID",
                      value: "0000-0002-3664-3257",
                      url: "https://orcid.org/0000-0002-3664-3257",
                    },
                    {
                      label: "ORCID Profile",
                      value: "View ORCID Profile",
                      url: "https://orcid.org/0000-0002-3664-3257",
                    },
                    {
                      label: "Google Scholar",
                      value: "View Google Scholar Profile",
                      url: "https://scholar.google.com/citations?user=Qd8D2joAAAAJ&hl=en",
                    },
                  ].map((profile) => (
                    <a
                      key={profile.label}
                      href={profile.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex min-w-0 items-start justify-between gap-3 border border-white/10 bg-white/[0.04] p-5 transition-colors hover:border-[#D2B87C]/50 hover:bg-white/[0.08]"
                    >
                      <div className="min-w-0">
                        <p className="text-[9px] font-semibold uppercase tracking-[0.17em] text-[#D2B87C]">
                          {profile.label}
                        </p>
                        <p className="mt-2 break-words text-sm leading-6 text-white/75">
                          {profile.value}
                        </p>
                      </div>

                      <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-[#D2B87C] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  ))}
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="border border-white/10 px-5 py-4">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/50">
                      NCERC Unique ID
                    </p>
                    <p className="mt-1 font-serif text-xl text-[#D2B87C]">1951</p>
                  </div>

                  <div className="border border-white/10 px-5 py-4">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/50">
                      Area of Interest
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/75">
                      Energy Management, Energy Optimization, Microgrids, Energy Trilemma
                    </p>
                  </div>
                </div>
              </div>

              {/* Courses Handled */}
              <div className="mt-16 sm:mt-20">
                <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                  <div>
                    <div className="mb-4 flex items-center gap-3">
                      <span className="h-px w-8 bg-[#8F7746]" />
                      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                        Teaching Record
                      </p>
                    </div>

                    <h2 className="font-serif text-3xl text-[#20235A] sm:text-4xl">
                      Courses handled
                    </h2>
                  </div>

                  <p className="text-xs text-[#1e1917]/55">
                    2024–2026 · 10 entries
                  </p>
                </div>

                <div className="overflow-hidden border border-[#20235A]/10 bg-white">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[780px] border-collapse text-left">
                      <thead>
                        <tr className="bg-[#20235A]">
                          {[
                            "Sl. No.",
                            "Year",
                            "Stream",
                            "Sem",
                            "Branch",
                            "Subject",
                          ].map((heading) => (
                            <th
                              key={heading}
                              className="px-4 py-4 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#D2B87C] sm:px-5"
                            >
                              {heading}
                            </th>
                          ))}
                        </tr>
                      </thead>

                      <tbody>
                        {[
                          ["1", "2026", "B. Tech", "VI", "EEE", "POWER SYSTEMS II"],
                          ["2", "2026", "B. Tech", "VI", "EEE", "POWER SYSTEMS LAB"],
                          ["3", "2026", "B. Tech", "VIII", "EEE", "ENERGY MANAGEMENT"],
                          ["4", "2025", "B. Tech", "V", "EEE", "SIGNALS AND SYSTEMS"],
                          ["5", "2025", "M. Tech", "I", "PS", "VOLTAGE STABILITY"],
                          ["6", "2025", "B. Tech", "VIII", "EEE", "ENERGY MANAGEMENT"],
                          ["7", "2025", "B. Tech", "VI", "EEE", "RENEWABLE ENERGY"],
                          ["8", "2025", "B. Tech", "IV", "EEE", "ELECTRICAL MACHINES LAB I"],
                          ["9", "2024", "B. Tech", "VII", "EEE", "SEMINAR"],
                          ["10", "2024", "B. Tech", "IV", "EEE", "ELECTROMAGENTIC THEORY"],
                        ].map((course, index) => (
                          <tr
                            key={course[0]}
                            className={`border-b border-[#20235A]/10 last:border-0 ${index % 2 === 0 ? "bg-white" : "bg-[#FAF7F2]"
                              } hover:bg-[#F2EFE8]`}
                          >
                            {course.map((value, cellIndex) => (
                              <td
                                key={`${course[0]}-${cellIndex}`}
                                className={`px-4 py-4 text-sm sm:px-5 ${cellIndex === 5
                                  ? "font-medium text-[#20235A]"
                                  : "text-[#1e1917]/70"
                                  }`}
                              >
                                {value}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p className="border-t border-[#20235A]/10 px-5 py-3 text-xs text-[#1e1917]/50">
                    Scroll horizontally within the table on smaller screens to view
                    all columns.
                  </p>
                </div>
              </div>

              {/* Journal Publications */}
              <div className="mt-16 sm:mt-20">
                <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                  <div>
                    <div className="mb-4 flex items-center gap-3">
                      <span className="h-px w-8 bg-[#8F7746]" />
                      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                        Research Output
                      </p>
                    </div>

                    <h2 className="font-serif text-3xl text-[#20235A] sm:text-4xl">
                      Journal publications
                    </h2>
                  </div>

                  <p className="text-xs text-[#1e1917]/55">
                    13 journal entries
                  </p>
                </div>

                <div className="grid gap-4">
                  {[
                    {
                      year: "Accepted",
                      title:
                        "Comparative Study of Bifacial and Monofacial Solar PV Modules Across Diverse Albedo Conditions in India's Warm-Humid Tropical Climate",
                      details:
                        "M. Mathew, A. Thomas, J. Manoj, A. Raj. Sustainable Chemistry for Climate Change, Elsevier. Accepted.",
                    },
                    {
                      year: "2026",
                      title:
                        "Performance Modelling and Comparative Analysis of Bifacial and Monofacial Floating Solar PV Systems on the Malampuzha Reservoir in the Indian State of Kerala",
                      details:
                        "M. Mathew. International Journal of Hydrogen Energy, Elsevier, vol. 224, 2026, pp. 1–23.",
                    },
                    {
                      year: "2026",
                      title:
                        "Resilience in Crisis: COVID-19’s Impact on India's Electricity and EV Sectors from a Techno-Managerial Lens",
                      details:
                        "M. Mathew. Next Research, Elsevier, vol. 4, 2026, pp. 1–15.",
                    },
                    {
                      year: "2025",
                      title:
                        "The Role of Natural Dyes in Enhancing DSSC Performance: A Comparative Evaluation",
                      details:
                        "E.J. Joy, E. Mathew, A. Thomas, M. Mathew. Sustainable Chemistry for Climate Change, Elsevier, vol. 7, 2025, pp. 1–10.",
                    },
                    {
                      year: "2022",
                      title:
                        "Analysis of reactive power loadability and management of flexible alternating current transmission system devices in a distribution grid using whale optimization algorithm",
                      details:
                        "H. Baby, J. Jayakumar, M. Mathew, M.G. Hussein, N.M. Kumar. Renewable Power Generation, IET, 2022, pp. 1–15.",
                    },
                    {
                      year: "2021",
                      title:
                        "Sizing Approaches for Solar Photovoltaic-Based Microgrids: A Comprehensive Review",
                      details:
                        "M. Mathew, S. Hossain, S. Saha, S. Mondal, and M. E. Haque. Energy Systems Integration, IET, 2021, pp. 1–27.",
                    },
                    {
                      year: "2020",
                      title:
                        "Exergy analysis of thin-film solar PV module in-ground mount, floating, and submerged installation methods",
                      details:
                        "N.M. Kumar, U. Subramaniam, M. Mathew, A. Ajitha, D. Almakhles. Case Studies in Thermal Engineering, Elsevier, vol. 21, 2020, pp. 1–11.",
                    },
                    {
                      year: "2019",
                      title:
                        "Solar photovoltaic tree and its end-of-life management using thermal and chemical treatments for material recovery",
                      details:
                        "P. Gangwar, N. M. Kumar, A. K. Singh, A. Jayakumar, and M. Mathew. Case Studies in Thermal Engineering, Elsevier, vol. 14, 2019, pp. 1–8.",
                    },
                    {
                      year: "2019",
                      title:
                        "Performance, energy loss, and degradation prediction of roof-integrated crystalline solar photovoltaic system installed in Northern India",
                      details:
                        "N. M. Kumar, R.P. Gupta, M. Mathew, A. Kumar, and N. Singh. Case Studies in Thermal Engineering, Elsevier, vol. 13, 2019, pp. 1–9.",
                    },
                    {
                      year: "2018",
                      title:
                        "Comparative life-cycle cost and GHG emission analysis of five different water heating systems for residential buildings in Australia",
                      details:
                        "N. M. Kumar and M. Mathew. Beni-Suef University Journal of Basic and Applied Sciences, Elsevier, vol. 7, no. 4, 2018, pp. 748–751.",
                    },
                    {
                      year: "2018",
                      title:
                        "Outdoor Measurement of Mono and Poly c-Si Modules and Array Characteristics under Varying Load in Hot–Humid Tropical Climate",
                      details:
                        "M. Mathew, N. M. Kumar, and R. P. Kororth. Materials Today: Proceedings, Elsevier, vol. 5, no. 2, part 1, 2018, pp. 3456–3464.",
                    },
                    {
                      year: "2017",
                      title:
                        "Performance Analysis of 100 kWp Grid Connected Si-poly Photovoltaic System using PVsyst Simulation Tool",
                      details:
                        "N. M. Kumar, M. R. Kumar, P. R. Rejoice, and M. Mathew. Energy Procedia, Elsevier, vol. 117, 2017, pp. 180–189.",
                    },
                    {
                      year: "2017",
                      title:
                        "Design and Computational Analysis of Daylight Integrated Energy Efficient Lighting Scheme",
                      details:
                        "M. Mathew, N. M. Kumar, and M. P. Subeekrishna. International Journal of Earth Sciences and Engineering, vol. 10, no. 1 Special, 2017, pp. 12–17.",
                    },
                  ].map((publication, index) => (
                    <article
                      key={`${publication.year}-${publication.title}`}
                      className="border border-[#20235A]/10 bg-white p-6 sm:p-8"
                    >
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                        <div className="shrink-0">
                          <span className="inline-flex border border-[#D2B87C]/60 px-3 py-2 font-serif text-sm text-[#8F7746]">
                            {publication.year}
                          </span>
                        </div>

                        <div className="min-w-0 flex-1">
                          <h3 className="text-sm font-medium leading-7 text-[#20235A] sm:text-base">
                            {publication.title}
                          </h3>
                          <p className="mt-2 text-sm leading-7 text-[#1e1917]/60">
                            {publication.details}
                          </p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              {/* Book Chapters */}
              <div className="mt-16 sm:mt-20">
                <div className="mb-7">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="h-px w-8 bg-[#8F7746]" />
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                      Academic Contributions
                    </p>
                  </div>

                  <h2 className="font-serif text-3xl text-[#20235A] sm:text-4xl">
                    Book chapters
                  </h2>
                </div>

                <div className="grid gap-4">
                  {[
                    {
                      year: "2026 · Accepted",
                      title:
                        "Energy Management Strategies for Virtual Power Plants: Data-Driven Methods and Operational Frameworks",
                      details:
                        'M. Mathew. In Virtual Power Plants and Distributed Energy Systems: Design, Control, and Optimization for a Decarbonized Grid, Wiley, 2026, pp. 1–26. Accepted.',
                    },
                    {
                      year: "2026 · Accepted",
                      title:
                        "Load Forecasting and Energy Demand: Models, Influencing Factors, and Applications Across Multiple Time Horizons",
                      details:
                        "M. Mathew. In Neural Grid: Artificial Intelligence in Power and Energy Systems, Wiley, 2026, pp. 1–26. Accepted.",
                    },
                    {
                      year: "2026 · Accepted",
                      title:
                        "Artificial Intelligence Applications in Renewable Energy: Forecasting, Optimization, and Smart Grid Integration",
                      details:
                        "M. Mathew and S. Ismail. In Neural Grid: Artificial Intelligence in Power and Energy Systems, Wiley, 2026, pp. 1–24. Accepted.",
                    },
                    {
                      year: "2025 · Accepted",
                      title:
                        "Artificial Intelligence for Sustainable Energy Policy and Decarbonization: Aligning Technology Innovation with Global Development Goals",
                      details:
                        "M. Mathew, P. Darbha, and S. Ismail. In Artificial Intelligence and Machine Learning for Sustainable Power System: Efficiency Decarbonization & Innovation, CRC Press, 2025, pp. 1–31. Accepted.",
                    },
                    {
                      year: "2026",
                      title:
                        "A Comprehensive Evaluation and SWOT Analysis of Hydrogen Production and Infrastructure",
                      details:
                        "P. Darbha, M. Mathew, H. Niyas, and S. Sundaram. In Hydrogen Fuel Cell Electric Vehicles: Fundamentals, Design, Performance, Applications, and AI-Driven Commercialization, Elsevier, 2026, pp. 25–62.",
                    },
                    {
                      year: "2024",
                      title:
                        "Evaluation of the Political, Economic, Social, Technical, Legal, and Environmental (PESTLE) Perspectives of Second Life Electric Vehicle Batteries in India",
                      details:
                        "M. Mathew, S. Sundaram, and H. Niyas. In A Sustainable Future with E-Mobility: Concepts, Challenges, and Implementations, IGI Global, 2024, vol. 2, pp. 1–30. Scopus.",
                    },
                    {
                      year: "2024",
                      title:
                        "A Comprehensive Analysis of Fuel Cell Powered Electric Vehicles Through the PESTLE Framework",
                      details:
                        "K. P. Pillai, M. Mathew, H. Niyas, and S. Sundaram. In A Sustainable Future with E-Mobility: Concepts, Challenges, and Implementations, IGI Global, 2024, vol. 2, pp. 1–30. Scopus.",
                    },
                  ].map((chapter) => (
                    <article
                      key={chapter.title}
                      className="border border-[#20235A]/10 bg-[#F2EFE8] p-6 sm:p-8"
                    >
                      <div className="flex items-start gap-4 sm:gap-6">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                          <BookOpen className="h-5 w-5" />
                        </div>

                        <div className="min-w-0">
                          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                            {chapter.year}
                          </p>

                          <h3 className="mt-2 font-serif text-xl leading-7 text-[#20235A] sm:text-2xl">
                            {chapter.title}
                          </h3>

                          <p className="mt-3 text-sm leading-7 text-[#1e1917]/65">
                            {chapter.details}
                          </p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              {/* Conference Proceedings */}
              <div className="mt-16 sm:mt-20">
                <div className="mb-7">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="h-px w-8 bg-[#8F7746]" />
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                      Research Output
                    </p>
                  </div>

                  <h2 className="font-serif text-3xl text-[#20235A] sm:text-4xl">
                    Conference proceedings
                  </h2>

                  <p className="mt-3 max-w-3xl text-sm leading-7 text-[#1e1917]/60">
                    Conference papers in renewable energy, photovoltaic systems,
                    energy efficiency, smart grids, sustainability, and electrical
                    engineering.
                  </p>
                </div>

                <div className="grid gap-4 lg:grid-cols-2">
                  {[
                    {
                      year: "2018",
                      title:
                        "Evaluating the Life Cycle Cost of LPG Instantaneous, Storage, and Boosted Solar Water Heating Systems in Australia",
                      details:
                        "N. M. Kumar, H. Basha, and M. Mathew. 7th World Conference on Applied Sciences, Engineering, and Management, 2018, pp. 1–3.",
                    },
                    {
                      year: "2018",
                      title:
                        "Performance Analysis of a 48 kWp Grid connected Rooftop Photovoltaic System",
                      details:
                        "K.P. Vasudev, M. Mathew, A. Anand, and J. Hossain. Fourth International Conference for Convergence in Technology, IEEE, 2018, pp. 1–6.",
                    },
                    {
                      year: "2018",
                      title:
                        "Approaches Leading to Different Definitions of Smart Grid: A Review",
                      details:
                        "A. Sharma, M. Mathew, I. Mitra, and N. Anwer. International Conference on Power Energy, Environment and Intelligent Control, IEEE, 2018, pp. 603–609.",
                    },
                    {
                      year: "2018",
                      title:
                        "Comparative Analysis of Green House Gas Emission from Different Vehicular Fuels",
                      details:
                        "H. Kaushik, M. Mathew, and J. Hossain. International Conference on Power Energy, Environment and Intelligent Control, IEEE, 2018, pp. 704–708.",
                    },
                    {
                      year: "2018",
                      title:
                        "Study on Sustainable Transportation Fuels Based on Green House Gas Emission Potential",
                      details:
                        "A. Negi and M. Mathew. International Conference on Power Energy, Environment and Intelligent Control, IEEE, 2018, pp. 421–425.",
                    },
                    {
                      year: "2018",
                      title:
                        "Increase in Power Production of Rooftop Solar Photovoltaic System using Tracking",
                      details:
                        "R. Maity, M. Mathew, and J. Hossain. International Conference on Power Energy, Environment and Intelligent Control, IEEE, 2018, pp. 416–420.",
                    },
                    {
                      year: "2018",
                      title:
                        "Evacuated Tube Solar Cooker with Ethylene Glycol as Sensible Heat Storage Medium",
                      details:
                        "N. Kanetkar, L.K. Sreepathi, and M. Mathew. International Conference on Power Energy, Environment and Intelligent Control, IEEE, 2018, pp. 331–337.",
                    },
                    {
                      year: "2018",
                      title:
                        "Comparative Performance Analysis of Different Silicon-based Photovoltaic Technologies in Nigeria",
                      details:
                        "M. O. Dioha, A. Kumar, M. Mathew, and J. Hossain. International Conference on Power Energy, Environment and Intelligent Control, IEEE, 2018, pp. 581–587.",
                    },
                    {
                      year: "2018",
                      title:
                        "Techno-Economic Feasibility of Domestic Solar Water Heating System in Nigeria",
                      details:
                        "M. O. Dioha, N. V. Emodi, M. Mathew, and E. C. Dioha. International Conference on Power Energy, Environment and Intelligent Control, IEEE, 2018, pp. 54–60.",
                    },
                    {
                      year: "2018",
                      title:
                        "Renewable Energy Capacity Value Estimation using Peak Period Method in Rajasthan",
                      details:
                        "S. Subramaniyan, M. Mathew, and J. Hossain. International Conference for Convergence in Technology, IEEE, 2018, pp. 1–6.",
                    },
                    {
                      year: "2018",
                      title:
                        "Capacity Value Estimation of Renewable Energy in Maharashtra using Peak Period Method",
                      details:
                        "S. Subramaniyan, M. Mathew, J. Hossain, and A. Kumar. International Conference for Convergence in Technology, IEEE, 2018, pp. 1–6.",
                    },
                    {
                      year: "2018",
                      title:
                        "Feasibility Assessment of Small Wind Turbines Based on Wind Energy Density",
                      details:
                        "S. Gayas, M. A. Wagay, and M. Mathew. International Conference for Convergence in Technology, IEEE, 2018, pp. 1–5.",
                    },
                    {
                      year: "2017",
                      title:
                        "Analysis of a Grid Connected Solar Photovoltaic System with Different PV Technologies",
                      details:
                        "M. Mathew and J. Hossain. International Conference on Circuits and Systems, IEEE, 2017, pp. 264–269.",
                    },
                    {
                      year: "2017",
                      title:
                        "Energy Analysis and Load Reduction Strategies for a Low-Rise Building in Composite Climate of India",
                      details:
                        "M. Mathew, S. G. Kini, and E. P. M. Shafeeque. International Conference on Circuits and Systems, IEEE, 2017, pp. 245–250.",
                    },
                    {
                      year: "2017",
                      title:
                        "Development of Permanent Magnet Axial Flux Generator for Small Wind Turbines",
                      details:
                        "S. N. Kumar, M. Mathew, N. Karthikeyan, and J. Hossain. International Conference on Circuits and Systems, IEEE, 2017, pp. 43–48.",
                    },
                    {
                      year: "2017",
                      title:
                        "Daylight Analysis and Enhancing Strategies for a Low-Rise Office Building in Composite Climate of India",
                      details:
                        "M. Mathew and S. G. Kini. International Conference on Circuits and Systems, IEEE, 2017, pp. 21–25.",
                    },
                    {
                      year: "2017",
                      title:
                        "Error Minimization of an Angle Sensor using LabVIEW Based Calibration",
                      details:
                        "V. Muralikrishnan, S. Adarsh, and M. Mathew. International Conference on Intelligent Computing, Instrumentation and Control Technologies, IEEE, 2017, pp. 1308–1311.",
                    },
                    {
                      year: "2017",
                      title:
                        "Enhancement of the Biogas System Application Using Solar Photovoltaic and IoT Based Automation",
                      details:
                        "Y. K. Sharma, M. Mathew, and K. Yanamandram. International Conference on Intelligent Computing, Instrumentation and Control Technologies, IEEE, 2017, pp. 851–855.",
                    },
                    {
                      year: "2017",
                      title:
                        "Design and Analysis of Solar Photovoltaic Based Coal Mine Reclamation in India",
                      details:
                        "M. Mathew, Y. K. Sharma, and M. A. Magry. International Conference on Intelligent Computing, Instrumentation and Control Technologies, IEEE, 2017, pp. 372–375.",
                    },
                    {
                      year: "2017",
                      title:
                        "Energy Efficient Lighting Design for a Food Processing Industry Located at Composite Climate of India",
                      details:
                        "A. M. Johnson, K. R. Shailesh, and M. Mathew. International Conference on Circuits Power and Computing Technologies, IEEE, 2017, pp. 1–5.",
                    },
                    {
                      year: "2017",
                      title:
                        "Economic Analysis of an Energy Efficient LED Based Lighting Scheme for a Pharmaceutical Industry",
                      details:
                        "B. Paul, V. Kamath, and M. Mathew. International Conference on Innovations in Power and Advanced Computing Technologies, IEEE, 2017, pp. 1–7.",
                    },
                    {
                      year: "2017",
                      title:
                        "Power Enhancement of Solar Photovoltaic Module using Micro-climatic Strategies in Warm-Humid Tropical Climate",
                      details:
                        "P. S. Junaidh, A. Vijay, and M. Mathew. International Conference on Innovations in Power and Advanced Computing Technologies, IEEE, 2017, pp. 1–6.",
                    },
                    {
                      year: "2017",
                      title:
                        "Lighting Audit and Energy Efficient LED Based Lighting Scheme for a Pharmaceutical Industry",
                      details:
                        "B. Paul, V. Kamath, and M. Mathew. International Conference on Innovations in Power and Advanced Computing Technologies, IEEE, 2017, pp. 1–5.",
                    },
                    {
                      year: "2017",
                      title:
                        "Occupant Comfort Analysis of an Educational Building Located in Warm-Humid Tropical Climate",
                      details:
                        "M. Mathew, V. P. F. Ali, M. K. Yasir, and K. Shibiyas. International Conference on Innovations in Power and Advanced Computing Technologies, IEEE, 2017, pp. 1–5.",
                    },
                    {
                      year: "2017",
                      title:
                        "Development of an Economical Digital Control Method for a Continuously Running Conveyor Belt",
                      details:
                        "A. Vijay, M. Mathew, and P.K. Rohith. International Conference on Inventive Systems and Control, IEEE, 2017, pp. 711–715.",
                    },
                    {
                      year: "2017",
                      title:
                        "Modelling and Thermal Analysis of Honey Comb Heat Sink for LEDs in Street Lighting Applications",
                      details:
                        "B. Paul, M. Mathew, and S. G. Patil. International Conference on Inventive Systems and Control, IEEE, 2017, pp. 706–710.",
                    },
                    {
                      year: "2016",
                      title:
                        "Daylight Analysis of a Typical Low-Rise Office Building for Different Climate Zones of India",
                      details:
                        "M. Mathew and S. G. Kini. International Conference on Energy Efficiency Technologies for Sustainability, IEEE, 2016, pp. 549–553.",
                    },
                    {
                      year: "2016",
                      title:
                        "Weather Dependency of Electricity Demand: A Case Study in Warm Humid Tropical Climate",
                      details:
                        "D. Jose, M. Mathew, and A. Krishnan. International Conference of Electrical Energy Systems, IEEE, 2016, pp. 102–105.",
                    },
                    {
                      year: "2016",
                      title:
                        "Development of a Small-Scale Power Generation System using Rooftop Ventilator",
                      details:
                        "M. Mathew, F. F. Nellissery, A. Anand, A. Varghese, and S. K. Panoli. Student Conference on Electrical, Electronics and Computer Science, IEEE, 2016, pp. 1–5.",
                    },
                    {
                      year: "2016",
                      title:
                        "Analysis of Outdoor Thermal Comfort in Warm and Humid Tropical Climate",
                      details:
                        "M. Mathew and Siddhartha. International Conference on Emerging Trends in Engineering, Technology, and Science, 2016, pp. 1–6.",
                    },
                    {
                      year: "2016",
                      title:
                        "Seasonal Daylight Analysis of a Mid-Rise Office Building Located in Composite Climate",
                      details:
                        "M. Mathew, S. G. Kini, and A. Gupta. 8th National Conference on Advanced Energy Conversion Technologies (AECT), 2016, pp. 1–4.",
                    },
                  ].map((publication, index) => (
                    <article
                      key={`${publication.year}-${publication.title}`}
                      className="border border-[#20235A]/10 bg-white p-6 sm:p-8"
                    >
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                        <div className="shrink-0">
                          <span className="inline-flex border border-[#D2B87C]/60 px-3 py-2 font-serif text-sm text-[#8F7746]">
                            {publication.year}
                          </span>
                        </div>

                        <div className="min-w-0 flex-1">
                          <h3 className="text-sm font-medium leading-7 text-[#20235A] sm:text-base">
                            {publication.title}
                          </h3>
                          <p className="mt-2 text-sm leading-7 text-[#1e1917]/60">
                            {publication.details}
                          </p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                <p className="mt-5 text-xs leading-6 text-[#1e1917]/50">
                  Publication titles and bibliographic details are presented from the
                  supplied faculty information.
                </p>
              </div>

              {/* Footer Note */}
              <div className="mt-16 flex flex-col gap-3 border-t border-[#20235A]/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-[#1e1917]/55">
                  Department of Electrical and Electronics Engineering
                </p>
                <p className="text-xs text-[#1e1917]/55">
                  NCERC Unique ID: 1951
                </p>
              </div>
            </div>
          </section>
        </main>

        {/* ----Maheswaran Faculty Details------ */}

        <main className="bg-[#FAF7F2] text-[#1e1917] [&_p]:text-justify">
          <section
            id="faculty-profile"
            className="px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20"
          >
            <div className="mx-auto max-w-[1440px]">
              {/* Profile Header */}
              <div className="relative overflow-hidden bg-[#20235A] p-7 sm:p-10 lg:p-14">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border border-[#D2B87C]/20 sm:h-80 sm:w-80"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-4 -top-8 h-44 w-44 rounded-full border border-[#D2B87C]/15 sm:h-56 sm:w-56"
                />

                <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                  <div>
                    <div className="mb-5 flex items-center gap-3">
                      <span className="h-px w-9 bg-[#D2B87C]" />
                      <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                        Faculty Profile
                      </p>
                    </div>

                    <h1 className="font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
                      Maheswaran K
                    </h1>

                    <p className="mt-3 text-lg text-[#D2B87C] sm:text-xl">
                      Assistant Professor
                    </p>

                    <p className="mt-2 max-w-2xl text-sm leading-7 text-white/70">
                      Department of Electrical and Electronics Engineering
                    </p>

                    <p className="mt-6 max-w-3xl text-sm leading-7 text-white/75 sm:text-base">
                      An engineering faculty member with academic interests in
                      electrical engineering, power electronics, electric drives,
                      renewable energy systems, and engineering education.
                    </p>
                  </div>

                  <div className="flex items-center gap-4 border-t border-white/15 pt-5 lg:min-w-[180px] lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#D2B87C]/50 text-[#D2B87C]">
                      <UserRound className="h-6 w-6" strokeWidth={1.4} />
                    </div>
                    <div>
                      <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/50">
                        NCERC Unique ID
                      </p>
                      <p className="mt-1 font-serif text-2xl text-white">
                        E1952
                      </p>
                    </div>
                  </div>
                </div>

                {/* Academic Qualifications */}
                <div className="relative mt-10 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2">
                  {qualifications.map((qualification) => (
                    <div
                      key={qualification.degree}
                      className="bg-[#20235A] p-5 sm:p-6"
                    >
                      <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#D2B87C]">
                        {qualification.label}
                      </p>
                      <p className="mt-2 font-serif text-lg text-white">
                        {qualification.degree}
                      </p>
                      <p className="mt-1 text-xs leading-5 text-white/60">
                        {qualification.specialization}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* About and Research Interests */}
              <div className="mt-10 grid gap-8 lg:grid-cols-2">
                <section className="border border-[#20235A]/10 bg-white p-6 sm:p-8 lg:p-9">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="h-px w-8 bg-[#8F7746]" />
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                      About
                    </p>
                  </div>

                  <h2 className="font-serif text-2xl leading-tight text-[#20235A] sm:text-3xl">
                    Academic profile
                  </h2>

                  <p className="mt-5 text-sm leading-7 text-[#1e1917]/70">
                    I am a dedicated engineering faculty member teaching core subjects such as process design, process control, and optimization. My role focuses on strengthening students’ technical knowledge while developing their analytical and problem-solving skills.
                  </p>

                  <p className="mt-4 text-sm leading-7 text-[#1e1917]/70">
                    I am also actively involved in research within engineering domains, contributing to advancements in process systems and optimization techniques. Additionally, I mentor students in academic and research projects, fostering innovation and critical thinking. I contribute to curriculum development to ensure alignment with current industry practices and emerging technologies.
                  </p>

                  <p className="mt-4 text-sm leading-7 text-[#1e1917]/70">
                    Beyond academics, I serve as an NSS Program Officer, where I organize and coordinate community outreach programs, social awareness campaigns, environmental initiatives, and student volunteer activities that foster civic responsibility, leadership, and teamwork. I also serve as the Sports Co-convener for the college, supporting the planning and conduct of sports events and promoting physical well-being and team spirit among students.
                  </p>

                  <div className="mt-7 border-l-2 border-[#D2B87C] bg-[#F2EFE8] p-5">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                      Designation
                    </p>
                    <p className="mt-2 font-serif text-xl text-[#20235A]">
                      Assistant Professor
                    </p>
                    <p className="mt-1 text-xs leading-5 text-[#1e1917]/60">
                      Electrical and Electronics Engineering
                    </p>
                  </div>
                </section>

                <section className="border border-[#20235A]/10 bg-[#F2EFE8] p-6 sm:p-8 lg:p-9">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="h-px w-8 bg-[#8F7746]" />
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                      Research Interests
                    </p>
                  </div>

                  <h2 className="font-serif text-2xl leading-tight text-[#20235A] sm:text-3xl">
                    Electrical engineering and energy systems
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-[#1e1917]/70">
                    The supplied profile describes teaching and research involving
                    engineering systems, process control, optimization, and
                    electrical engineering. The topics below are drawn from the
                    provided qualifications and publication titles.
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {researchInterests.slice(0, 6).map((interest, index) => (
                      <div
                        key={interest}
                        className="flex items-start gap-3 border border-[#20235A]/10 bg-[#FAF7F2] p-4"
                      >
                        <span className="mt-0.5 font-serif text-sm text-[#8F7746]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <p className="text-sm leading-6 text-[#20235A]">
                          {interest}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* Academic Contributions */}
              <section className="mt-10 grid gap-5 sm:grid-cols-2">
                <div className="border border-[#20235A]/10 bg-white p-6 sm:p-8">
                  <div className="mb-4 flex items-center gap-3">
                    <Award className="h-5 w-5 text-[#8F7746]" />
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                      Student Engagement
                    </p>
                  </div>
                  <h2 className="font-serif text-2xl text-[#20235A]">
                    NSS Program Officer
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-[#1e1917]/70">
                    Coordinates community outreach programs, social awareness
                    campaigns, environmental initiatives, and student volunteer
                    activities that promote civic responsibility and leadership.
                  </p>
                </div>

                <div className="border border-[#20235A]/10 bg-white p-6 sm:p-8">
                  <div className="mb-4 flex items-center gap-3">
                    <GraduationCap className="h-5 w-5 text-[#8F7746]" />
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                      College Activities
                    </p>
                  </div>
                  <h2 className="font-serif text-2xl text-[#20235A]">
                    Sports Co-convener
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-[#1e1917]/70">
                    Supports the planning and conduct of college sports events,
                    promoting physical well-being, teamwork, and student
                    participation.
                  </p>
                </div>
              </section>



              {/* Academic Identifiers */}
              <section className="mt-10 bg-[#20235A] p-6 sm:p-8 lg:p-10">
                <div className="mb-7">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="h-px w-8 bg-[#D2B87C]" />
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                      Academic Identity
                    </p>
                  </div>

                  <h2 className="font-serif text-2xl text-white sm:text-3xl">
                    Researcher profiles
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-white/60">
                    Access the available academic profile and researcher
                    information.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="border border-white/10 bg-white/[0.04] p-5">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.17em] text-[#D2B87C]">
                      NCERC Unique ID
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/75">E1952</p>
                  </div>

                  <div className="border border-white/10 bg-white/[0.04] p-5">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.17em] text-[#D2B87C]">
                      Researcher ID
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/75">
                      Not provided
                    </p>
                  </div>

                  <div className="border border-white/10 bg-white/[0.04] p-5">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.17em] text-[#D2B87C]">
                      ORCID Profile
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/75">
                      Not provided
                    </p>
                  </div>
                </div>

                <a
                  href="https://scholar.google.co.in/citations?user=Hxy2EisAAAAJ&hl=en&citsig=AHomdjW64ndVTKqWcMvdz49TBbIq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-4 flex items-center justify-between gap-4 border border-white/10 bg-white/[0.04] p-5 transition-colors hover:border-[#D2B87C]/50 hover:bg-white/[0.08]"
                >
                  <div className="min-w-0">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.17em] text-[#D2B87C]">
                      Google Scholar
                    </p>
                    <p className="mt-2 break-all text-sm leading-6 text-white/75">
                      View Google Scholar Profile
                    </p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-[#D2B87C] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </section>

              {/* Courses Handled */}
              <section className="mt-16 sm:mt-20">
                <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                  <div>
                    <div className="mb-4 flex items-center gap-3">
                      <span className="h-px w-8 bg-[#8F7746]" />
                      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                        Teaching Record
                      </p>
                    </div>
                    <h2 className="font-serif text-3xl text-[#20235A] sm:text-4xl">
                      Courses handled
                    </h2>
                  </div>
                  <p className="text-xs text-[#1e1917]/55">
                    {courses.length} course entries
                  </p>
                </div>

                <div className="overflow-hidden border border-[#20235A]/10 bg-white">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[780px] border-collapse text-left">
                      <thead>
                        <tr className="bg-[#20235A]">
                          {[
                            "Sl. No.",
                            "Year",
                            "Stream",
                            "Semester",
                            "Branch",
                            "Subject",
                          ].map((heading) => (
                            <th
                              key={heading}
                              className="px-4 py-4 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#D2B87C] sm:px-5"
                            >
                              {heading}
                            </th>
                          ))}
                        </tr>
                      </thead>

                      <tbody>
                        {courses.map((course, index) => (
                          <tr
                            key={`${course.year}-${course.subject}-${index}`}
                            className={`border-b border-[#20235A]/10 last:border-0 ${index % 2 === 0 ? "bg-white" : "bg-[#FAF7F2]"
                              } hover:bg-[#F2EFE8]`}
                          >
                            {[
                              String(index + 1),
                              course.year,
                              course.stream,
                              course.semester,
                              course.branch,
                              course.subject,
                            ].map((value, cellIndex) => (
                              <td
                                key={`${index}-${cellIndex}`}
                                className={`px-4 py-4 text-sm sm:px-5 ${cellIndex === 5
                                  ? "font-medium text-[#20235A]"
                                  : "text-[#1e1917]/70"
                                  }`}
                              >
                                {value}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="border-t border-[#20235A]/10 px-5 py-3 text-xs text-[#1e1917]/50">
                    Scroll horizontally within the table on smaller screens to
                    view all columns.
                  </p>
                </div>
              </section>

              {/* Journal Publications */}
              <section className="mt-16 sm:mt-20">
                <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                  <div>
                    <div className="mb-4 flex items-center gap-3">
                      <span className="h-px w-8 bg-[#8F7746]" />
                      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                        Research Output
                      </p>
                    </div>
                    <h2 className="font-serif text-3xl text-[#20235A] sm:text-4xl">
                      Journal publications
                    </h2>
                  </div>
                  <p className="text-xs text-[#1e1917]/55">
                    {journalArticles.length} journal entries
                  </p>
                </div>

                <div className="grid gap-4">
                  {journalArticles.map((publication, index) => (
                    <article
                      key={publication.title}
                      className="border border-[#20235A]/10 bg-white p-6 sm:p-8"
                    >
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                        <div className="shrink-0">
                          <span className="inline-flex border border-[#D2B87C]/60 px-3 py-2 font-serif text-sm text-[#8F7746]">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>

                        <div className="min-w-0 flex-1">
                          <h3 className="font-medium text-sm leading-7 text-[#20235A] sm:text-base">
                            {publication.title}
                          </h3>
                          <p className="mt-2 text-sm leading-7 text-[#1e1917]/70">
                            {publication.journal}
                          </p>
                          <p className="mt-2 text-xs leading-6 text-[#8F7746]">
                            {publication.details}
                          </p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Conference Publications */}
              <section className="mt-16 sm:mt-20">
                <div className="mb-7">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="h-px w-8 bg-[#8F7746]" />
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                      Conference Proceedings
                    </p>
                  </div>

                  <h2 className="font-serif text-3xl text-[#20235A] sm:text-4xl">
                    Conference publications
                  </h2>
                  <p className="mt-3 text-xs text-[#1e1917]/55">
                    {conferencePapers.length} conference entries
                  </p>
                </div>

                <div className="grid gap-4">
                  {conferencePapers.map((publication, index) => (
                    <article
                      key={publication.title}
                      className="border border-[#20235A]/10 bg-white p-6 sm:p-8"
                    >
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                        <div className="shrink-0">
                          <span className="inline-flex border border-[#D2B87C]/60 px-3 py-2 font-serif text-sm text-[#8F7746]">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>

                        <div className="min-w-0 flex-1">
                          <h3 className="font-medium text-sm leading-7 text-[#20235A] sm:text-base">
                            {publication.title}
                          </h3>
                          <p className="mt-3 text-sm leading-7 text-[#1e1917]/70">
                            {publication.conference}
                          </p>
                          <div className="mt-4 flex flex-wrap gap-2">
                            <span className="border border-[#20235A]/10 bg-[#FAF7F2] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#20235A]">
                              {publication.type}
                            </span>
                            <span className="border border-[#D2B87C]/60 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#8F7746]">
                              {publication.date}
                            </span>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>




              {/* Footer Note */}
              <div className="mt-16 flex flex-col gap-3 border-t border-[#20235A]/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-[#1e1917]/55">
                  Department of Electrical and Electronics Engineering
                </p>
                <p className="text-xs text-[#1e1917]/55">
                  NCERC Unique ID: E1952
                </p>
              </div>
            </div>
          </section>
        </main>

        {/* ------Rajeena Mol Faculty Details------ */}
        <main className="bg-[#FAF7F2] text-[#1e1917] [&_p]:text-justify">
          <section
            id="faculty-profile"
            className="px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20"
          >
            <div className="mx-auto max-w-[1440px]">
              {/* Profile Header */}
              <div className="relative overflow-hidden bg-[#20235A] p-7 sm:p-10 lg:p-14">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border border-[#D2B87C]/20 sm:h-80 sm:w-80"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-4 -top-8 h-44 w-44 rounded-full border border-[#D2B87C]/15 sm:h-56 sm:w-56"
                />

                <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                  <div>
                    <div className="mb-5 flex items-center gap-3">
                      <span className="h-px w-9 bg-[#D2B87C]" />
                      <p className="!m-0 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                        Faculty Profile
                      </p>
                    </div>

                    <h1 className="font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
                      P.T. Rajeeena Mol
                    </h1>

                    <p className="!mb-0 !mt-3 text-lg text-[#D2B87C] sm:text-xl">
                      Assistant Professor
                    </p>

                    <p className="!mb-0 !mt-2 max-w-2xl text-sm leading-7 text-white/70">
                      Department of Electrical and Electronics Engineering
                    </p>

                    <p className="!mb-0 !mt-6 max-w-3xl text-sm leading-7 text-white/75 sm:text-base">
                      Dedicated to teaching process design, process control,
                      optimization, and managerial courses, with teaching and
                      research responsibilities across engineering and management
                      disciplines.
                    </p>
                  </div>

                  <div className="flex items-center gap-4 border-t border-white/15 pt-5 lg:min-w-[180px] lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#D2B87C]/50 text-[#D2B87C]">
                      <UserRound className="h-6 w-6" strokeWidth={1.4} />
                    </div>
                    <div>
                      <p className="!m-0 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/50">
                        NCERC Unique ID
                      </p>
                      <p className="!mb-0 !mt-1 font-serif text-2xl text-white">
                        E3499
                      </p>
                    </div>
                  </div>
                </div>

                {/* Academic Qualifications */}
                <div className="relative mt-10 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2">
                  <div className="bg-[#20235A] p-5 sm:p-6">
                    <p className="!m-0 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#D2B87C]">
                      Postgraduate Qualification
                    </p>
                    <p className="!mb-0 !mt-2 font-serif text-lg text-white">
                      M.E.
                    </p>
                    <p className="!mb-0 !mt-1 text-xs leading-5 text-white/60">
                      Quality Engineering and Management
                    </p>
                  </div>

                  <div className="bg-[#20235A] p-5 sm:p-6">
                    <p className="!m-0 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#D2B87C]">
                      Undergraduate Qualification
                    </p>
                    <p className="!mb-0 !mt-2 font-serif text-lg text-white">
                      B.E.
                    </p>
                    <p className="!mb-0 !mt-1 text-xs leading-5 text-white/60">
                      Instrumentation and Control Engineering
                    </p>
                  </div>
                </div>
              </div>

              {/* About and Research Interests */}
              <div className="mt-10 grid gap-8 lg:grid-cols-2">
                <div className="border border-[#20235A]/10 bg-white p-6 sm:p-8 lg:p-9">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="h-px w-8 bg-[#8F7746]" />
                    <p className="!m-0 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                      About
                    </p>
                  </div>

                  <h2 className="font-serif text-2xl leading-tight text-[#20235A] sm:text-3xl">
                    Academic profile
                  </h2>

                  <p className="!mb-0 !mt-5 text-sm leading-7 text-[#1e1917]/70">
                    I am a dedicated engineering faculty responsible for teaching process design, process control, optimization courses and managerial courses to students pursuing degrees in engineering disciplines. I am also responsible for teaching and conducting research in engineering as well as management disciplines.
                  </p>

                  <div className="mt-7 border-l-2 border-[#D2B87C] bg-[#F2EFE8] p-5">
                    <p className="!m-0 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                      Designation
                    </p>
                    <p className="!mb-0 !mt-2 font-serif text-xl text-[#20235A]">
                      Assistant Professor
                    </p>
                    <p className="!mb-0 !mt-1 text-xs leading-5 text-[#1e1917]/60">
                      Electrical and Electronics Engineering
                    </p>
                  </div>
                </div>

                <div className="border border-[#20235A]/10 bg-[#F2EFE8] p-6 sm:p-8 lg:p-9">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="h-px w-8 bg-[#8F7746]" />
                    <p className="!m-0 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                      Research Interests
                    </p>
                  </div>

                  <h2 className="font-serif text-2xl leading-tight text-[#20235A] sm:text-3xl">
                    Teaching, management &amp; leadership
                  </h2>

                  <p className="!mb-0 !mt-4 text-sm leading-7 text-[#1e1917]/70">
                    Research interests include high-impact teaching and learning
                    skills, management, and leadership.
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {rajeeenaResearchInterests.map((interest, index) => (
                      <div
                        key={interest}
                        className="flex items-start gap-3 border border-[#20235A]/10 bg-[#FAF7F2] p-4"
                      >
                        <span className="mt-0.5 font-serif text-sm text-[#8F7746]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <p className="!m-0 text-sm leading-6 text-[#20235A]">
                          {interest}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Keywords */}
              <div className="mt-10 border border-[#20235A]/10 bg-white p-6 sm:p-8 lg:p-9">
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#8F7746]" />
                  <p className="!m-0 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                    Expertise &amp; Keywords
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  {rajeeenaKeywords.map((keyword) => (
                    <span
                      key={keyword}
                      className="border border-[#20235A]/10 bg-[#FAF7F2] px-4 py-3 text-sm text-[#20235A] transition-colors hover:border-[#D2B87C]"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>

              {/* Academic Identifiers */}
              <div className="mt-10 bg-[#20235A] p-6 sm:p-8 lg:p-10">
                <div className="mb-7">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="h-px w-8 bg-[#D2B87C]" />
                    <p className="!m-0 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                      Academic Identity
                    </p>
                  </div>

                  <h2 className="font-serif text-2xl text-white sm:text-3xl">
                    Researcher profiles
                  </h2>
                  <p className="!mb-0 !mt-3 text-sm leading-7 text-white/60">
                    Access the available researcher profiles and academic
                    identification details.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="border border-white/10 bg-white/[0.04] p-5">
                    <p className="!m-0 text-[9px] font-semibold uppercase tracking-[0.17em] text-[#D2B87C]">
                      Researcher ID
                    </p>
                    {/* <p className="!mb-0 !mt-2 text-sm text-white/45">
                      Not provided
                    </p> */}
                  </div>

                  <a
                    href="https://orcid.org/0009-0004-6291-6054"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group border border-white/10 bg-white/[0.04] p-5 transition-colors hover:bg-white/[0.08]"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="!m-0 text-[9px] font-semibold uppercase tracking-[0.17em] text-[#D2B87C]">
                        ORCID Profile
                      </p>
                      <ExternalLink
                        size={15}
                        className="text-[#D2B87C] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </div>
                    <p className="!mb-0 !mt-2 break-all text-sm leading-6 text-white/75">
                      0009-0004-6291-6054
                    </p>
                  </a>

                  <a
                    href="https://scholar.google.com/citations?hl=en&user=_IWpzmAAAAAJ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group border border-white/10 bg-white/[0.04] p-5 transition-colors hover:bg-white/[0.08]"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="!m-0 text-[9px] font-semibold uppercase tracking-[0.17em] text-[#D2B87C]">
                        Google Scholar
                      </p>
                      <ExternalLink
                        size={15}
                        className="text-[#D2B87C] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </div>
                    <p className="!mb-0 !mt-2 text-sm leading-6 text-white/75">
                      View research profile
                    </p>
                  </a>
                </div>

                <div className="mt-5 grid gap-4 border border-white/10 px-5 py-4 sm:grid-cols-2">
                  <div>
                    <p className="!m-0 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/50">
                      NCERC Unique ID
                    </p>
                    <p className="!mb-0 !mt-1 font-serif text-xl text-[#D2B87C]">
                      E3499
                    </p>
                  </div>
                  {/* <div>
                    <p className="!m-0 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/50">
                      Area of Interest
                    </p>
                    <p className="!mb-0 !mt-1 text-sm text-white/65">
                      Not separately specified
                    </p>
                  </div> */}
                </div>
              </div>

              {/* Courses Handled */}
              <div className="mt-16 sm:mt-20">
                <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                  <div>
                    <div className="mb-4 flex items-center gap-3">
                      <span className="h-px w-8 bg-[#8F7746]" />
                      <p className="!m-0 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                        Teaching Record
                      </p>
                    </div>
                    <h2 className="font-serif text-3xl text-[#20235A] sm:text-4xl">
                      Courses handled
                    </h2>
                  </div>
                  <p className="!m-0 text-xs text-[#1e1917]/55">
                    Academic year 2026 · {rajeeenaCourses.length} entries
                  </p>
                </div>

                <div className="overflow-hidden border border-[#20235A]/10 bg-white">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[780px] border-collapse text-left">
                      <thead>
                        <tr className="bg-[#20235A]">
                          {[
                            "Sl. No.",
                            "Year",
                            "Stream",
                            "Semester",
                            "Branch",
                            "Subject",
                          ].map((heading) => (
                            <th
                              key={heading}
                              className="px-4 py-4 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#D2B87C] sm:px-5"
                            >
                              {heading}
                            </th>
                          ))}
                        </tr>
                      </thead>

                      <tbody>
                        {rajeeenaCourses.map((course, index) => (
                          <tr
                            key={`${course.year}-${course.subject}`}
                            className={`border-b border-[#20235A]/10 last:border-0 ${index % 2 === 0 ? "bg-white" : "bg-[#FAF7F2]"
                              } hover:bg-[#F2EFE8]`}
                          >
                            {[
                              String(index + 1),
                              course.year,
                              course.stream,
                              course.semester,
                              course.branch,
                              course.subject,
                            ].map((value, cellIndex) => (
                              <td
                                key={`${course.subject}-${cellIndex}`}
                                className={`px-4 py-4 text-sm sm:px-5 ${cellIndex === 5
                                  ? "font-medium text-[#20235A]"
                                  : "text-[#1e1917]/70"
                                  }`}
                              >
                                {value}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p className="border-t border-[#20235A]/10 px-5 py-3 text-xs text-[#1e1917]/50">
                    Scroll horizontally within the table on smaller screens to view
                    all columns.
                  </p>
                </div>
              </div>

              {/* Publications */}
              <div className="mt-16 sm:mt-20">
                <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                  <div>
                    <div className="mb-4 flex items-center gap-3">
                      <span className="h-px w-8 bg-[#8F7746]" />
                      <p className="!m-0 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                        Research Output
                      </p>
                    </div>
                    <h2 className="font-serif text-3xl text-[#20235A] sm:text-4xl">
                      Publications &amp; conferences
                    </h2>
                  </div>
                  <p className="!m-0 text-xs text-[#1e1917]/55">
                    {rajeeenaPublications.length} publication entries
                  </p>
                </div>

                <div className="overflow-hidden border border-[#20235A]/10 bg-white">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[600px] border-collapse text-left">
                      <thead>
                        <tr className="bg-[#20235A]">
                          <th className="w-32 px-5 py-4 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#D2B87C]">
                            Year / Date
                          </th>
                          <th className="px-5 py-4 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#D2B87C]">
                            Title of Paper and Publication Details
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        {rajeeenaPublications.map((publication, index) => (
                          <tr
                            key={`${publication.year}-${publication.title}-${index}`}
                            className={`border-b border-[#20235A]/10 last:border-0 ${index % 2 === 0 ? "bg-white" : "bg-[#FAF7F2]"
                              }`}
                          >
                            <td className="px-5 py-5 align-top">
                              <span className="inline-flex border border-[#D2B87C]/60 px-3 py-2 font-serif text-sm text-[#8F7746]">
                                {publication.year}
                              </span>
                            </td>
                            <td className="px-5 py-5">
                              <p className="!m-0 text-sm font-medium leading-7 text-[#20235A]">
                                {publication.title}
                              </p>
                              <p className="!mb-0 !mt-2 text-xs leading-6 text-[#1e1917]/60">
                                {publication.details}
                              </p>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p className="border-t border-[#20235A]/10 px-5 py-3 text-xs text-[#1e1917]/50">
                    Publication dates and details are presented as supplied. The
                    repeated 2012 paper entry has been retained from the original
                    information.
                  </p>
                </div>
              </div>

              {/* Book Publications */}
              {/* <div className="mt-10 border border-[#20235A]/10 bg-[#F2EFE8] p-6 sm:p-8 lg:p-9">
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                    <BookOpen className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="!m-0 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                      Book Publications
                    </p>
                    <h2 className="!mb-0 !mt-2 font-serif text-2xl text-[#20235A]">
                      Books &amp; academic contributions
                    </h2>
                    <p className="!mb-0 !mt-3 text-sm leading-7 text-[#1e1917]/65">
                      No book-publication details were provided for this profile.
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </section>
        </main>

        {/* ----------Rajesh.p----Faculty Details---------- */}
        <main className="bg-[#FAF7F2] text-[#1e1917] [&_p]:text-justify">
          {/* Rajesh P — Faculty Profile */}
          <section
            id="rajeshP-faculty-profile"
            className="px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20"
          >
            <div className="mx-auto max-w-[1440px]">
              {/* Profile Header */}
              <div
                id="rajeshP-profile-header"
                className="relative overflow-hidden bg-[#20235A] p-7 sm:p-10 lg:p-14"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border border-[#D2B87C]/20 sm:h-80 sm:w-80"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-4 -top-8 h-44 w-44 rounded-full border border-[#D2B87C]/15 sm:h-56 sm:w-56"
                />

                <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                  <div>
                    <div className="mb-5 flex items-center gap-3">
                      <span className="h-px w-9 bg-[#D2B87C]" />
                      <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                        Faculty Profile
                      </p>
                    </div>

                    <h1 className="font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
                      Mr. Rajesh P
                    </h1>

                    <p className="mt-3 text-lg text-[#D2B87C] sm:text-xl">
                      Assistant Professor
                    </p>

                    <p className="mt-2 max-w-2xl text-sm leading-7 text-white/70">
                      Department of Electrical and Electronics Engineering
                    </p>

                    <p className="mt-6 max-w-3xl text-sm leading-7 text-white/75 sm:text-base">
                      Focused on renewable energy technologies and power systems
                      engineering, with an interest in integrating artificial
                      intelligence techniques into electrical engineering
                      applications.
                    </p>
                  </div>

                  <div className="flex items-center gap-4 border-t border-white/15 pt-5 lg:min-w-[180px] lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#D2B87C]/50 text-[#D2B87C]">
                      <UserRound className="h-6 w-6" strokeWidth={1.4} />
                    </div>

                    <div>
                      <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/50">
                        NCERC Unique ID
                      </p>
                      <p className="mt-1 font-serif text-2xl text-white">1953</p>
                    </div>
                  </div>
                </div>

                {/* Academic Qualifications */}
                <div
                  id="rajeshP-qualifications"
                  className="relative mt-10 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2"
                >
                  <div className="bg-[#20235A] p-5 sm:p-6">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#D2B87C]">
                      Postgraduate Qualification
                    </p>
                    <p className="mt-2 font-serif text-lg text-white">M. Tech</p>
                    <p className="mt-1 text-xs leading-5 text-white/60">
                      Power Systems
                    </p>
                  </div>

                  <div className="bg-[#20235A] p-5 sm:p-6">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#D2B87C]">
                      Additional Qualification
                    </p>
                    <p className="mt-2 font-serif text-lg text-white">
                      PG Diploma
                    </p>
                    <p className="mt-1 text-xs leading-5 text-white/60">
                      Energy Management
                    </p>
                  </div>
                </div>
              </div>

              {/* About and Research Interests */}
              <div
                id="rajeshP-about-research"
                className="mt-10 grid gap-8 lg:grid-cols-2"
              >
                {/* About */}
                <div
                  id="rajeshP-about"
                  className="border border-[#20235A]/10 bg-white p-6 sm:p-8 lg:p-9"
                >
                  <div className="mb-5 flex items-center gap-3">
                    <span className="h-px w-8 bg-[#8F7746]" />
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                      About
                    </p>
                  </div>
                  {/* 
                  <h2 className="font-serif text-2xl leading-tight text-[#20235A] sm:text-3xl">
                    Academic profile
                  </h2>

                  <p className="mt-5 text-sm leading-7 text-[#1e1917]/70">
                    A biographical description was not included in the supplied
                    faculty details. The available information identifies Mr.
                    Rajesh P as an Assistant Professor in the Department of
                    Electrical and Electronics Engineering, with qualifications
                    in Power Systems and Energy Management.
                  </p> */}

                  <div className="mt-7 border-l-2 border-[#D2B87C] bg-[#F2EFE8] p-5">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                      Designation
                    </p>

                    <p className="mt-2 font-serif text-xl text-[#20235A]">
                      Assistant Professor
                    </p>

                    <p className="mt-1 text-xs leading-5 text-[#1e1917]/60">
                      Electrical and Electronics Engineering
                    </p>
                  </div>
                </div>

                {/* Research Interests */}
                <div
                  id="rajeshP-research-interests"
                  className="border border-[#20235A]/10 bg-[#F2EFE8] p-6 sm:p-8 lg:p-9"
                >
                  <div className="mb-5 flex items-center gap-3">
                    <span className="h-px w-8 bg-[#8F7746]" />
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                      Research Interests
                    </p>
                  </div>

                  <h2 className="font-serif text-2xl leading-tight text-[#20235A] sm:text-3xl">
                    Renewable energy &amp; power systems
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-[#1e1917]/70">
                    The primary research interests encompass renewable energy technologies and power systems engineering, including their associated interdisciplinary areas. There is also a strong interest in exploring the integration of artificial intelligence techniques within electrical engineering applications
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {rajeshPResearchInterests.map((interest, index) => (
                      <div
                        key={`rajeshP-interest-${index}`}
                        className="flex items-start gap-3 border border-[#20235A]/10 bg-[#FAF7F2] p-4"
                      >
                        <span className="mt-0.5 font-serif text-sm text-[#8F7746]">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <p className="text-sm leading-6 text-[#20235A]">
                          {interest}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Keywords */}
              <div
                id="rajeshP-keywords"
                className="mt-10 border border-[#20235A]/10 bg-white p-6 sm:p-8 lg:p-9"
              >
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#8F7746]" />
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                    Expertise &amp; Keywords
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  {rajeshPKeywords.map((keyword) => (
                    <span
                      key={`rajeshP-keyword-${keyword}`}
                      className="border border-[#20235A]/10 bg-[#FAF7F2] px-4 py-3 text-sm text-[#20235A] transition-colors hover:border-[#D2B87C]"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>

                <div className="mt-7 border-t border-[#20235A]/10 pt-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                    Area of Interest
                  </p>

                  <p className="mt-3 text-sm leading-7 text-[#1e1917]/70">
                    Renewable energy integration, power system analysis, and
                    AI/ML applications in electrical engineering.
                  </p>
                </div>
              </div>

              {/* Academic Identifiers */}
              <div
                id="rajeshP-academic-identifiers"
                className="mt-10 bg-[#20235A] p-6 sm:p-8 lg:p-10"
              >
                <div className="mb-7">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="h-px w-8 bg-[#D2B87C]" />
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                      Academic Identity
                    </p>
                  </div>

                  <h2 className="font-serif text-2xl text-white sm:text-3xl">
                    Researcher profiles
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-white/60">
                    Academic identifiers and research profiles supplied for
                    Mr. Rajesh P.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="border border-white/10 bg-white/[0.04] p-5">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.17em] text-[#D2B87C]">
                      Researcher ID
                    </p>
                    <p className="mt-2 break-words text-sm text-white/85">
                      OUH-5816-2025
                    </p>
                  </div>

                  <a
                    href="https://orcid.org/0009-0009-1779-7048"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-white/10 bg-white/[0.04] p-5 transition-colors hover:border-[#D2B87C]/60 hover:bg-white/[0.08]"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-[9px] font-semibold uppercase tracking-[0.17em] text-[#D2B87C]">
                        ORCID Profile
                      </p>
                      <ExternalLink
                        size={15}
                        className="shrink-0 text-[#D2B87C]"
                      />
                    </div>

                    <p className="mt-2 break-all text-sm leading-6 text-white/85">
                      0009-0009-1779-7048
                    </p>

                    <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.15em] text-white/45">
                      View ORCID Profile
                    </p>
                  </a>

                  <a
                    href="https://scholar.google.com/citations?user=XPip-0gAAAAJ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-white/10 bg-white/[0.04] p-5 transition-colors hover:border-[#D2B87C]/60 hover:bg-white/[0.08]"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-[9px] font-semibold uppercase tracking-[0.17em] text-[#D2B87C]">
                        Google Scholar
                      </p>
                      <ExternalLink
                        size={15}
                        className="shrink-0 text-[#D2B87C]"
                      />
                    </div>

                    <p className="mt-2 text-sm leading-6 text-white/85">
                      Research Publications
                    </p>

                    <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.15em] text-white/45">
                      Visit Google Scholar
                    </p>
                  </a>
                </div>

                <div className="mt-5 border border-white/10 px-5 py-4">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/50">
                    NCERC Unique ID
                  </p>
                  <p className="mt-1 font-serif text-xl text-[#D2B87C]">1953</p>
                </div>
              </div>

              {/* Courses Handled */}
              <div
                id="rajeshP-courses"
                className="mt-16 sm:mt-20"
              >
                <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                  <div>
                    <div className="mb-4 flex items-center gap-3">
                      <span className="h-px w-8 bg-[#8F7746]" />
                      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                        Teaching Record
                      </p>
                    </div>

                    <h2 className="font-serif text-3xl text-[#20235A] sm:text-4xl">
                      Courses handled
                    </h2>
                  </div>

                  <p className="text-xs text-[#1e1917]/55">
                    Academic years 2025–2026 · {rajeshPCourses.length} entries
                  </p>
                </div>

                <div className="overflow-hidden border border-[#20235A]/10 bg-white">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[780px] border-collapse text-left">
                      <thead>
                        <tr className="bg-[#20235A]">
                          {[
                            "Sl. No.",
                            "Year",
                            "Stream",
                            "Sem",
                            "Branch",
                            "Subject",
                          ].map((heading) => (
                            <th
                              key={`rajeshP-course-heading-${heading}`}
                              className="px-4 py-4 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#D2B87C] sm:px-5"
                            >
                              {heading}
                            </th>
                          ))}
                        </tr>
                      </thead>

                      <tbody>
                        {rajeshPCourses.map((course, index) => (
                          <tr
                            key={`rajeshP-course-${index}`}
                            className={`border-b border-[#20235A]/10 last:border-0 ${index % 2 === 0 ? "bg-white" : "bg-[#FAF7F2]"
                              } hover:bg-[#F2EFE8]`}
                          >
                            {[
                              course.slNo,
                              course.year,
                              course.stream,
                              course.sem,
                              course.branch,
                              course.subject,
                            ].map((value, cellIndex) => (
                              <td
                                key={`rajeshP-course-${index}-cell-${cellIndex}`}
                                className={`px-4 py-4 text-sm sm:px-5 ${cellIndex === 5
                                  ? "font-medium text-[#20235A]"
                                  : "text-[#1e1917]/70"
                                  }`}
                              >
                                {value}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p className="border-t border-[#20235A]/10 px-5 py-3 text-xs text-[#1e1917]/50">
                    Scroll horizontally within the table on smaller screens to
                    view all columns.
                  </p>
                </div>
              </div>

              {/* Publications */}
              <div
                id="rajeshP-publications"
                className="mt-16 sm:mt-20"
              >
                <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                  <div>
                    <div className="mb-4 flex items-center gap-3">
                      <span className="h-px w-8 bg-[#8F7746]" />
                      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                        Research Output
                      </p>
                    </div>

                    <h2 className="font-serif text-3xl text-[#20235A] sm:text-4xl">
                      Publications &amp; conferences
                    </h2>
                  </div>

                  <p className="text-xs text-[#1e1917]/55">
                    {rajeshPPublications.length} publication entries
                  </p>
                </div>

                <div className="overflow-hidden border border-[#20235A]/10 bg-white">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[600px] border-collapse text-left">
                      <thead>
                        <tr className="bg-[#20235A]">
                          <th className="w-24 px-5 py-4 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#D2B87C]">
                            Year
                          </th>

                          <th className="px-5 py-4 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#D2B87C]">
                            Title of Paper
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        {rajeshPPublications.map((publication, index) => (
                          <tr
                            key={`rajeshP-publication-${index}`}
                            className={`border-b border-[#20235A]/10 last:border-0 ${index % 2 === 0 ? "bg-white" : "bg-[#FAF7F2]"
                              }`}
                          >
                            <td className="px-5 py-5 align-top">
                              <span className="inline-flex border border-[#D2B87C]/60 px-3 py-2 font-serif text-sm text-[#8F7746]">
                                {publication.year}
                              </span>
                            </td>

                            <td className="px-5 py-5">
                              <p className="text-sm font-medium leading-7 text-[#20235A]">
                                {publication.title}
                              </p>

                              <p className="mt-2 text-xs leading-6 text-[#1e1917]/60">
                                {publication.event}
                              </p>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p className="border-t border-[#20235A]/10 px-5 py-3 text-xs text-[#1e1917]/50">
                    Publication years and conference details are presented as
                    supplied.
                  </p>
                </div>
              </div>

              {/* Book Publications */}
              {/* <div
                id="rajeshP-book-publications"
                className="mt-10 border border-[#20235A]/10 bg-[#F2EFE8] p-6 sm:p-8 lg:p-9"
              >
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                    <BookOpen className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                      Book Publications
                    </p>

                    <h2 className="mt-2 font-serif text-2xl text-[#20235A]">
                      Books &amp; academic contributions
                    </h2>

                    <p className="mt-3 text-sm leading-7 text-[#1e1917]/65">
                      No book-publication details were provided for this profile.
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </section>
        </main>

        {/* ----Saranya Nair---- */}
        <main className="bg-[#FAF7F2] text-[#1e1917] [&_p]:text-justify">
          <section
            id="saranyaNair-faculty-profile"
            className="px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20"
          >
            <div className="mx-auto max-w-[1440px]">
              {/* Profile Header */}
              <div className="relative overflow-hidden bg-[#20235A] p-7 sm:p-10 lg:p-14">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border border-[#D2B87C]/20 sm:h-80 sm:w-80"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-4 -top-8 h-44 w-44 rounded-full border border-[#D2B87C]/15 sm:h-56 sm:w-56"
                />

                <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                  <div>
                    <div className="mb-5 flex items-center gap-3">
                      <span className="h-px w-9 bg-[#D2B87C]" />
                      <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                        Faculty Profile
                      </p>
                    </div>

                    <h1 className="font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
                      Saranya Nair
                    </h1>

                    <p className="mt-3 text-lg text-[#D2B87C] sm:text-xl">
                      Assistant Professor
                    </p>

                    <p className="mt-2 max-w-2xl text-sm leading-7 text-white/70">
                      Department of Electrical and Electronics Engineering
                    </p>

                    {/* <p className="mt-6 max-w-3xl text-sm leading-7 text-white/75 sm:text-base">

                      With 11years of experience in teaching and academic mentoring, I am passionate about shaping young minds and creating a positive learning environment. I also encourage students to think independently.

                    </p> */}
                  </div>

                  <div className="flex items-center gap-4 border-t border-white/15 pt-5 lg:min-w-[180px] lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#D2B87C]/50 text-[#D2B87C]">
                      <UserRound className="h-6 w-6" strokeWidth={1.4} />
                    </div>
                    <div>
                      <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/50">
                        NCERC Unique ID
                      </p>
                      <p className="mt-1 font-serif text-2xl text-white">
                        e4281
                      </p>
                    </div>
                  </div>
                </div>

                {/* Academic Qualifications */}
                <div className="relative mt-10 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2">
                  <div className="bg-[#20235A] p-5 sm:p-6">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#D2B87C]">
                      Postgraduate Qualification
                    </p>
                    <p className="mt-2 font-serif text-lg text-white">M.Tech</p>
                    <p className="mt-1 text-xs leading-5 text-white/60">
                      Power Electronics &amp; Drives
                    </p>
                  </div>

                  <div className="bg-[#20235A] p-5 sm:p-6">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#D2B87C]">
                      Undergraduate Qualification
                    </p>
                    <p className="mt-2 font-serif text-lg text-white">B.Tech</p>
                    <p className="mt-1 text-xs leading-5 text-white/60">
                      Electrical and Electronics Engineering
                    </p>
                  </div>
                </div>
              </div>

              {/* About and Research Interests */}
              <div className="mt-10 grid gap-8 lg:grid-cols-2">
                <div className="border border-[#20235A]/10 bg-white p-6 sm:p-8 lg:p-9">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="h-px w-8 bg-[#8F7746]" />
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                      About
                    </p>
                  </div>

                  <h2 className="font-serif text-2xl leading-tight text-[#20235A] sm:text-3xl">
                    Academic profile
                  </h2>

                  <p className="mt-5 text-sm leading-7 text-[#1e1917]/70">

                    With 11years of experience in teaching and academic mentoring, I am passionate about shaping young minds and creating a positive learning environment. I also encourage students to think independently.

                  </p>

                  <div className="mt-7 border-l-2 border-[#D2B87C] bg-[#F2EFE8] p-5">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                      Designation
                    </p>
                    <p className="mt-2 font-serif text-xl text-[#20235A]">
                      Assistant Professor
                    </p>
                    <p className="mt-1 text-xs leading-5 text-[#1e1917]/60">
                      Electrical and Electronics Engineering
                    </p>
                  </div>
                </div>

                <div className="border border-[#20235A]/10 bg-[#F2EFE8] p-6 sm:p-8 lg:p-9">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="h-px w-8 bg-[#8F7746]" />
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                      Research Interests
                    </p>
                  </div>

                  <h2 className="font-serif text-2xl leading-tight text-[#20235A] sm:text-3xl">
                    Power electronics &amp; energy systems
                  </h2>

                  {/* <p className="mt-4 text-sm leading-7 text-[#1e1917]/70">
                    Her research interests include Power Electronics and Drives,
                    Hybrid Electric Vehicles, and Renewable Energy Systems.
                  </p> */}

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {saranyaNairResearchInterests.map((interest, index) => (
                      <div
                        key={interest}
                        className="flex items-start gap-3 border border-[#20235A]/10 bg-[#FAF7F2] p-4"
                      >
                        <span className="mt-0.5 font-serif text-sm text-[#8F7746]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <p className="text-sm leading-6 text-[#20235A]">
                          {interest}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Keywords */}
              <div className="mt-10 border border-[#20235A]/10 bg-white p-6 sm:p-8 lg:p-9">
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#8F7746]" />
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                    Expertise &amp; Keywords
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  {saranyaNairKeywords.map((keyword) => (
                    <span
                      key={keyword}
                      className="border border-[#20235A]/10 bg-[#FAF7F2] px-4 py-3 text-sm text-[#20235A] transition-colors hover:border-[#D2B87C]"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>

              {/* Academic Identifiers */}
              <div className="mt-10 bg-[#20235A] p-6 sm:p-8 lg:p-10">
                <div className="mb-7">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="h-px w-8 bg-[#D2B87C]" />
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                      Academic Identity
                    </p>
                  </div>

                  <h2 className="font-serif text-2xl text-white sm:text-3xl">
                    Researcher profiles
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-white/60">
                    Academic identifiers and researcher profiles, including the
                    available ORCID profile.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="border border-white/10 bg-white/[0.04] p-5">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.17em] text-[#D2B87C]">
                      Researcher ID
                    </p>
                    {/* <p className="mt-2 text-sm text-white/45">Not provided</p> */}
                  </div>

                  <a
                    href="https://orcid.org/0009-0009-9869-9641"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-3 border border-white/10 bg-white/[0.04] p-5 transition-colors hover:border-[#D2B87C]/60"
                  >
                    <div className="min-w-0">
                      <p className="text-[9px] font-semibold uppercase tracking-[0.17em] text-[#D2B87C]">
                        ORCID Profile
                      </p>
                      <p className="mt-2 break-all text-sm leading-6 text-white/80">
                        0009-0009-9869-9641
                      </p>
                    </div>
                    <ExternalLink className="h-4 w-4 shrink-0 text-[#D2B87C] transition-transform group-hover:translate-x-1" />
                  </a>

                  <div className="border border-white/10 bg-white/[0.04] p-5">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.17em] text-[#D2B87C]">
                      Google Scholar Profile
                    </p>
                    {/* <p className="mt-2 text-sm text-white/45">Not provided</p> */}
                  </div>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="border border-white/10 px-5 py-4">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/50">
                      NCERC Unique ID
                    </p>
                    <p className="mt-1 font-serif text-xl text-[#D2B87C]">
                      e4281
                    </p>
                  </div>

                  <div className="border border-white/10 px-5 py-4">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/50">
                      Area of Interest
                    </p>
                    {/* <p className="mt-2 text-sm leading-6 text-white/75">
                      Not separately specified
                    </p> */}
                  </div>
                </div>
              </div>

              {/* Courses Handled */}
              <div className="mt-16 sm:mt-20">
                <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                  <div>
                    <div className="mb-4 flex items-center gap-3">
                      <span className="h-px w-8 bg-[#8F7746]" />
                      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                        Teaching Record
                      </p>
                    </div>

                    <h2 className="font-serif text-3xl text-[#20235A] sm:text-4xl">
                      Courses handled
                    </h2>
                  </div>

                  <p className="text-xs text-[#1e1917]/55">
                    Academic years 2025–2026 · 7 entries
                  </p>
                </div>

                <div className="overflow-hidden border border-[#20235A]/10 bg-white">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[780px] border-collapse text-left">
                      <thead>
                        <tr className="bg-[#20235A]">
                          {[
                            "Sl. No.",
                            "Year",
                            "Stream",
                            "Semester",
                            "Branch",
                            "Subject",
                          ].map((heading) => (
                            <th
                              key={heading}
                              className="px-4 py-4 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#D2B87C] sm:px-5"
                            >
                              {heading}
                            </th>
                          ))}
                        </tr>
                      </thead>

                      <tbody>
                        {saranyaNairCourses.map((course, index) => (
                          <tr
                            key={course.sno}
                            className={`border-b border-[#20235A]/10 last:border-0 ${index % 2 === 0 ? "bg-white" : "bg-[#FAF7F2]"
                              } hover:bg-[#F2EFE8]`}
                          >
                            {[
                              String(course.sno),
                              course.year,
                              course.stream,
                              course.semester,
                              course.branch,
                              course.subject,
                            ].map((value, cellIndex) => (
                              <td
                                key={`${course.sno}-${cellIndex}`}
                                className={`px-4 py-4 text-sm sm:px-5 ${cellIndex === 5
                                  ? "font-medium text-[#20235A]"
                                  : "text-[#1e1917]/70"
                                  }`}
                              >
                                {value}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p className="border-t border-[#20235A]/10 px-5 py-3 text-xs text-[#1e1917]/50">
                    Scroll horizontally within the table on smaller screens to
                    view all columns.
                  </p>
                </div>
              </div>

              {/* Publications */}
              <div className="mt-16 sm:mt-20">
                <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                  <div>
                    <div className="mb-4 flex items-center gap-3">
                      <span className="h-px w-8 bg-[#8F7746]" />
                      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                        Research Output
                      </p>
                    </div>

                    <h2 className="font-serif text-3xl text-[#20235A] sm:text-4xl">
                      Publications &amp; conferences
                    </h2>
                  </div>

                  <p className="text-xs text-[#1e1917]/55">
                    5 publication entries
                  </p>
                </div>

                <div className="overflow-hidden border border-[#20235A]/10 bg-white">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[600px] border-collapse text-left">
                      <thead>
                        <tr className="bg-[#20235A]">
                          <th className="w-24 px-5 py-4 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#D2B87C]">
                            Year
                          </th>
                          <th className="px-5 py-4 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#D2B87C]">
                            Title of Paper — Conference / Journal
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        {saranyaNairPublications.map((publication, index) => (
                          <tr
                            key={`${publication.year}-${index}`}
                            className={`border-b border-[#20235A]/10 last:border-0 ${index % 2 === 0 ? "bg-white" : "bg-[#FAF7F2]"
                              }`}
                          >
                            <td className="px-5 py-5 align-top">
                              <span className="inline-flex border border-[#D2B87C]/60 px-3 py-2 font-serif text-sm text-[#8F7746]">
                                {publication.year}
                              </span>
                            </td>

                            <td className="px-5 py-5">
                              <p className="text-sm font-medium leading-7 text-[#20235A]">
                                {publication.title}
                              </p>
                              <p className="mt-2 text-xs leading-6 text-[#1e1917]/60">
                                {publication.publication}
                              </p>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p className="border-t border-[#20235A]/10 px-5 py-3 text-xs text-[#1e1917]/50">
                    Publication and conference details are presented as supplied.
                  </p>
                </div>
              </div>

              {/* Book Publications */}
              {/* <div className="mt-10 border border-[#20235A]/10 bg-[#F2EFE8] p-6 sm:p-8 lg:p-9">
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                    <BookOpen className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                      Book Publications
                    </p>

                    <h2 className="mt-2 font-serif text-2xl text-[#20235A]">
                      Books &amp; academic contributions
                    </h2>

                    <p className="mt-3 text-sm leading-7 text-[#1e1917]/65">
                      No book-publication details were provided for this profile.
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </section>
        </main>
      </main>

      <FooterSection />
    </>
  );
}







