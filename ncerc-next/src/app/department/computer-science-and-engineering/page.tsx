import Image from "next/image";

import {
  ArrowRight,
  BadgeCheck,
  Target,
  Quote,
  Sparkles,
  Eye,
  BookOpen,
  Code2,
  BrainCircuit,
  Search,
  Lightbulb,
  FlaskConical,
  Wrench,
  Scale,
  Leaf,
  ShieldCheck,
  Users,
  MessageSquare,
  GraduationCap,
  ArrowUpRight,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "./DepartmentNav/DepartmentNavigation";

const hero = { image: "/images/dpt/computer-science-and-engineering/hero.jpg" }

const quickHighlights = [
  {
    number: "01",
    title: "Established 2002",
    description:
      "Started with a single B.Tech batch of 60 students and grown to an intake of 120 since 2014.",
    icon: Code2,
  },
  {
    number: "02",
    title: "NBA Accredited",
    description:
      "The department has been accredited by NBA since 2022.",
    icon: BadgeCheck,
  },
  {
    number: "03",
    title: "Inclusive Education",
    description:
      "Educating students from all over India, including rural areas, to build better futures.",
    icon: Users,
  },
];

// ---------HOD MESSAGE COMPONENT
const deanMessage = [
  {
    text: "It gives me immense pleasure to welcome you to the Department of Computer Science and Engineering at our Esteemed Institution Nehru College of Engineering and Research Centre (NCERC), Pampady, Trissur.",
  },
  {
    text: "Education is the foundation upon which dreams are built. It empowers individuals to become not only skilled professionals but the engineers of a better society. At NCERC, we believe that education is the key to achieving the aspirations of both students and their parents, fostering noble citizens who are equipped to shape the world around them.",
  },
  {
    text: "Since our inception in 2002, the CSE department has always remained committed to maintaining the legacy of excellence with high academic standards. We provide cutting-edge infrastructure designed to ensure that our students and faculty experience excellence in every aspect of their journey.",
  },
  {
    text: "Our curriculum is meticulously designed to align with Industry 4.0 standards. Our dedicated team of faculty members are more than educators; they are mentors dedicated to moulding students into efficient professionals. By combining technical proficiency with ethical devotion, we ensure our graduates are not just job-seekers, but job-creators and innovators.",
  },
  {
    text: "Beyond the classroom, our vibrant campus life fosters talent through diverse co-curricular and extra-curricular activities, preparing our students for leadership in an ever-evolving digital world.",
  },
  {
    text: "On behalf of the NCERC CSE family, I invite you to join our promising and dynamic community. We are privileged to offer you an enriching environment, exceptional opportunities and memories that will last a lifetime.",
  },
  {
    text: "Feel free to reach out to our department office for a Campus Tour. Explore our campus facilities online too.",
  },
  {
    text: "Wishing you a transformative journey and delightful career ahead...",
  },
];

const peos = [
  {
    id: "PEO 01",
    icon: BookOpen,
    title: "Lifelong Learning",
    description:
      "Graduates will be able to Work and Contribute in the domains of Computer Science  and Engineering through lifelong learning.",
  },
  {
    id: "PEO 02",
    icon: Code2,
    title: "Software Development",
    description:
      "Graduates will be able to analyze, design and development of novel Software Packages, Web Services, System Tools and Components as per needs and specifications.",
  },
  {
    id: "PEO 03",
    icon: Lightbulb,
    title: "Technological Adaptability",
    description:
      "Graduates will be able to demonstrate their ability to adapt to a rapidly changing environment by learning and applying new technologies.",
  },
  {
    id: "PEO 04",
    icon: Users,
    title: "Professional & Ethical Values",
    description:
      "Graduates will be able to adopt ethical attitudes, exhibit effective communication skills, Team work and leadership qualities.",
  },
];

const programmeOutcomes = [
  {
    number: "01",
    title: "Engineering Knowledge",
    description:
      "Apply knowledge of mathematics, science, engineering fundamentals, and specialization.",
    icon: BrainCircuit,
  },
  {
    number: "02",
    title: "Problem Analysis",
    description:
      "Identify, formulate, and analyze complex problems using first principles.",
    icon: Search,
  },
  {
    number: "03",
    title: "Design / Development of Solutions",
    description:
      "Design solutions for complex engineering problems.",
    icon: Lightbulb,
  },
  {
    number: "04",
    title: "Conduct Investigations of Complex Problems",
    description:
      "Use research-based methods to reach conclusions.",
    icon: FlaskConical,
  },
  {
    number: "05",
    title: "Engineering Tool Usage",
    description:
      "Apply modern tools, techniques, and IT tools.",
    icon: Wrench,
  },
  {
    number: "06",
    title: "The Engineer and Society",
    description:
      "Apply reasoning to address societal, health, safety, legal, and cultural issues.",
    icon: Scale,
  },
  {
    number: "07",
    title: "Environment and Sustainability",
    description:
      "Understand the impact of professional solutions on the environment.",
    icon: Leaf,
  },
  {
    number: "08",
    title: "Ethics",
    description:
      "Apply ethical principles and commit to professional ethics.",
    icon: ShieldCheck,
  },
  {
    number: "09",
    title: "Individual and Teamwork",
    description:
      "Function effectively as an individual or in teams.",
    icon: Users,
  },
  {
    number: "10",
    title: "Communication",
    description:
      "Communicate effectively on complex activities.",
    icon: MessageSquare,
  },
  {
    number: "11",
    title: "Life-long Learning",
    description:
      "Engage in independent and life-long learning in the context of technological change.",
    icon: GraduationCap,
  },
];

const visionMissionItems = [
  {
    number: "01",
    icon: Code2,
    title: "Technical Excellence",
    description:
      "Developing competent professionals with strong foundations in Computer Science and Engineering.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Encouraging innovative thinking to contribute to continuous technological advancement.",
  },
  {
    number: "03",
    icon: Target,
    title: "Ethical Responsibility",
    description:
      "Promoting ethical values and professional responsibility in the computing domain.",
  },
];


export default function ComputerScienceAndEngineeringPage() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-[#FAF7F2] text-[#1E1917]">
        {/* HERO */}

        <section className="relative overflow-hidden bg-[#20235A]">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
            <div className="grid min-h-[720px] items-stretch lg:grid-cols-[1fr_0.82fr]">

              {/* Hero Content */}
              <div className="flex flex-col justify-center py-20 lg:py-28 lg:pr-16">
                <div className="mb-8 flex flex-wrap items-center gap-4">
                  <span className="h-px w-12 bg-[#D2B87C]" />

                  <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D2B87C]">
                    NBA Accredited Department
                  </span>
                </div>

                <h1 className="max-w-4xl font-serif text-[46px] leading-[0.97] tracking-[-0.035em] text-white sm:text-[60px] lg:text-[70px] xl:text-[78px]">
                  Computer Science
                  <span className="block text-[#D2B87C]">
                    &amp; Engineering
                  </span>
                </h1>

                <p className="mt-5 max-w-xl text-[14px] font-semibold uppercase tracking-[0.14em] text-white/50">
                  Computing • Software • Emerging Technologies
                </p>

                <p className="mt-8 max-w-2xl text-[16px] leading-8 text-white/70 sm:text-[17px]">
                  Producing competent, innovative and ethical computer
                  professionals for software, web services, data analytics and
                  emerging technologies.
                </p>

                <div className="mt-10 flex flex-wrap items-center gap-5">
                  <a
                    href="#about"
                    className="group inline-flex items-center gap-3 bg-[#D2B87C] px-6 py-4 text-sm font-semibold text-[#20235A] transition hover:bg-white"
                  >
                    Explore Department

                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>

                  <a
                    href="#hod-message"
                    className="flex items-center gap-3 text-sm text-white/55 transition-colors duration-300 hover:text-[#D2B87C]"
                  >
                    <span className="h-2 w-2 rounded-full bg-[#D2B87C]" />
                    HOD&apos;s Message
                  </a>
                </div>

                {/* Department Highlight */}
                <div className="mt-12 flex items-center gap-4 border-t border-white/10 pt-7">
                  <div className="flex h-12 w-12 items-center justify-center border border-[#D2B87C]/40">
                    <Code2 className="h-5 w-5 text-[#D2B87C]" />
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                      Department Focus
                    </p>

                    <p className="mt-1 text-sm text-white/55">
                      Software development, computing and emerging technologies
                    </p>
                  </div>
                </div>
              </div>

              {/* Hero Image */}
              <div className="relative min-h-[450px] overflow-hidden lg:min-h-full">
                <Image
                  src={hero.image}
                  alt="Computer Science and Engineering Department"
                  fill
                  priority
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-[#20235A] via-[#20235A]/20 to-transparent" />

                <div className="absolute inset-0 bg-gradient-to-t from-[#20235A]/80 via-transparent to-transparent" />

                {/* Floating Information Panel */}
                <div className="absolute bottom-8 left-8 right-8 border border-white/20 bg-[#20235A]/75 p-6 backdrop-blur-md sm:left-10 sm:right-10 sm:p-7">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                        Computer Science + Engineering
                      </span>

                      <p className="mt-3 max-w-sm font-serif text-[23px] leading-tight text-white">
                        Advancing digital innovation, building intelligent
                        solutions and shaping the future of technology.
                      </p>
                    </div>

                    <Code2 className="mt-1 h-6 w-6 shrink-0 text-[#D2B87C]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-px bg-[#D2B87C]/20" />
        </section>


        {/* DEPARTMENT NAVIGATION */}
        <InnerHeader activeTab="About" />

        {/* QUICK HIGHLIGHTS */}
        <section className="border-b border-[#20235A]/10 bg-white">
          <div className="mx-auto grid max-w-[1440px] grid-cols-1 px-5 sm:px-8 md:grid-cols-3 lg:px-14 xl:px-20">
            {quickHighlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className={`flex items-start gap-4 py-7 md:py-8 ${index !== quickHighlights.length - 1
                    ? "border-b border-[#20235A]/10 md:border-b-0 md:border-r"
                    : ""
                    } ${index === 1
                      ? "md:px-8"
                      : index === 2
                        ? "md:pl-8"
                        : "md:pr-8"
                    }`}
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#F2EFE8] text-[#8F7746]">
                    <Icon size={21} strokeWidth={1.5} />
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                      {item.number}
                    </p>

                    <p className="mt-1 font-serif text-lg text-[#20235A]">
                      {item.title}
                    </p>

                    <p className="mt-1 text-xs leading-5 text-[#1E1917]/55">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section
          id="deans-message"
          className="relative overflow-hidden bg-[#FAF7F2] px-5 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-16"
        >
          {/* Background accents */}
          <div className="pointer-events-none absolute -right-32 top-20 h-[420px] w-[420px] rounded-full border border-[#D2B87C]/15" />
          <div className="pointer-events-none absolute -right-12 top-40 h-[300px] w-[300px] rounded-full border border-[#D2B87C]/10" />

          <div className="relative mx-auto max-w-[1440px]">
            {/* Section heading */}
            <div className="mb-8 max-w-3xl lg:mb-10">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#927B4D]" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#927B4D] sm:text-xs">
                  Leadership & Vision
                </span>
              </div>

              <h2 className="max-w-xl font-serif text-[38px] leading-[1.08] tracking-[-0.03em] text-[#20235A] sm:text-[48px] lg:text-[56px]">
                A Message from
                <span className="block italic text-[#927B4D]">
                  the Dean
                </span>
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-8 text-[#66636A] sm:text-base">
                Inspiring academic excellence, nurturing innovation and
                preparing the next generation of computer science professionals.
              </p>
            </div>

            {/* Main content */}
            <div className="grid items-start gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-10">

              {/* Dean Profile */}
              <div className="lg:sticky lg:top-28">
                <div className="relative mx-auto max-w-[430px] lg:mx-0">
                  {/* Image frame */}
                  <div className="absolute -bottom-4 -left-4 right-4 top-4 border border-[#D2B87C] sm:-bottom-5 sm:-left-5 sm:right-5 sm:top-5" />

                  <div className="relative aspect-[4/5] overflow-hidden bg-[#20235A]">
                    <Image
                      src="\images\dpt\computer-science-and-engineering\img\Dr-Ramani.webp"
                      alt="Dr. Ramani K, Dean of Computer Science and Engineering"
                      fill
                      priority
                      sizes="(min-width: 1024px) 430px, 100vw"
                      className="object-cover object-top"
                    />

                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#20235A]/80 to-transparent" />
                  </div>

                  {/* Profile details */}
                  <div className="relative mt-7 border-l-2 border-[#D2B87C] pl-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#927B4D]">
                      Dean – CSE
                    </p>

                    <h3 className="mt-2 font-serif text-2xl text-[#20235A] sm:text-3xl">
                      Dr. Ramani K
                    </h3>

                    <p className="mt-2 text-sm text-[#77747A]">
                      Department of Computer Science and Engineering
                    </p>
                  </div>

                  {/* Academic highlight */}
                  <div className="mt-8 flex items-center gap-4 border border-[#E8E2D6] bg-white p-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#F2EFE8] text-[#927B4D]">
                      <GraduationCap className="h-6 w-6" />
                    </div>

                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#927B4D]">
                        Academic Foundation
                      </p>
                      <p className="mt-1 text-sm font-medium text-[#20235A]">
                        Excellence Since 2002
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dean's Message */}
              <div className="min-w-0">

                {/* Welcome message */}
                <div className="border-b border-[#DDD5C7] pb-9">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="h-px w-8 bg-[#D2B87C]" />
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#927B4D]">
                      Welcome Address
                    </p>
                  </div>

                  <h3 className="font-serif text-2xl leading-snug text-[#20235A] sm:text-3xl">
                    Greetings and Welcome to NCERC CSE Community,
                  </h3>

                  <p className="mt-5 text-sm leading-8 text-[#66636A] sm:text-[15px] sm:leading-9">
                    {deanMessage[0].text}
                  </p>
                </div>

                {/* First quotation */}
                <div className="relative my-6 overflow-hidden bg-[#20235A] px-6 py-6 sm:px-8 sm:py-7">
                  <Quote className="absolute -right-3 -top-3 h-24 w-24 text-white/[0.05]" />

                  <div className="relative">
                    <Quote className="mb-5 h-7 w-7 text-[#D2B87C]" />

                    <p className="max-w-2xl font-serif text-xl leading-relaxed text-white sm:text-2xl">
                      "Education is the passport to the future today" -
                      Malcolm X tomorrow belongs to those who prepare for it
                    </p>

                    <div className="mt-6 h-px w-12 bg-[#D2B87C]" />
                  </div>
                </div>

                {/* Message paragraphs */}
                <div className="space-y-5">
                  {deanMessage.slice(1, 3).map((item, index) => (
                    <p
                      key={index}
                      className="text-justify text-sm leading-8 text-[#66636A] sm:text-[15px] sm:leading-9"
                    >
                      {item.text}
                    </p>
                  ))}
                </div>

                {/* Second quotation */}
                <div className="my-6 border-l-[3px] border-[#D2B87C] bg-[#F2EFE8] px-6 py-5 sm:px-8">
                  <Quote className="mb-4 h-6 w-6 text-[#927B4D]" />

                  <p className="font-serif text-xl italic leading-relaxed text-[#20235A] sm:text-2xl">
                    "Success is the sum of small efforts, repeated day-in
                    and day-out"
                  </p>

                  <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#927B4D]">
                    Robert Collier
                  </p>
                </div>

                {/* Remaining message */}
                <div className="space-y-5">
                  {deanMessage.slice(3).map((item, index) => (
                    <p
                      key={index}
                      className="text-justify text-sm leading-8 text-[#66636A] sm:text-[15px] sm:leading-9"
                    >
                      {item.text}
                    </p>
                  ))}
                </div>

                {/* Closing signature */}
                <div className="mt-8 border-t border-[#DDD5C7] pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                      <Sparkles className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="font-serif text-2xl text-[#20235A]">
                        Dr. Ramani K
                      </p>

                      <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#927B4D]">
                        Dean – CSE
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* mission and vision */}
        <section
          id="vision-mission"
          className="relative overflow-hidden bg-[#20235A] px-6 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-16"
        >
          {/* Background Decorations */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-[#D2B87C]/10" />
          <div className="pointer-events-none absolute -right-12 -top-12 h-56 w-56 rounded-full border border-[#D2B87C]/10" />
          <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-[#D2B87C]/[0.05] blur-3xl" />

          <div className="relative mx-auto max-w-[1440px]">
            {/* Main Heading */}
            <div className="mb-8 max-w-3xl lg:mb-10">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#D2B87C]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                  Our Purpose & Direction
                </span>
              </div>

              <h2 className="font-serif text-[38px] leading-[1.08] tracking-[-0.03em] text-[#FAF7F2] sm:text-[48px] lg:text-[56px]">
                Vision
                <span className="text-[#D2B87C]"> & </span>
                Mission
              </h2>

              <p className="mt-5 max-w-2xl text-[15px] leading-8 text-white/65 sm:text-[16px]">
                Guided by a clear vision and a commitment to meaningful action,
                the Department of Computer Science and Engineering strives to
                shape responsible professionals and contribute to technological
                progress.
              </p>
            </div>

            {/* Vision Panel */}
            <div className="relative border border-[#D2B87C]/25 bg-white/[0.035] p-6 sm:p-8 lg:p-10">
              <div className="grid gap-6 lg:grid-cols-[0.2fr_1fr] lg:gap-10">
                {/* Vision Label */}
                <div>
                  <div className="flex h-12 w-12 items-center justify-center border border-[#D2B87C]/40 bg-[#D2B87C]/10">
                    <Eye size={22} className="text-[#D2B87C]" />
                  </div>

                  <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#D2B87C]">
                    01 — Vision
                  </p>
                </div>

                {/* Vision Statement */}
                <div>
                  <Code2
                    size={28}
                    strokeWidth={1.3}
                    className="mb-7 text-[#D2B87C]"
                  />

                  <h3 className="max-w-5xl font-serif text-3xl font-normal leading-[1.4] tracking-tight text-[#FAF7F2] sm:text-4xl lg:text-[48px] lg:leading-[1.35]">
                    Producing{" "}
                    <span className="text-[#D2B87C]">
                      Highly Competent, Innovative and Ethical
                    </span>{" "}
                    Computer Science and Engineering Professionals to facilitate
                    continuous technological advancement.
                  </h3>

                  <div className="mt-9 flex items-center gap-3">
                    <span className="h-px w-12 bg-[#D2B87C]" />
                    <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/50">
                      Department of Computer Science & Engineering
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission Panel */}
            <div className="mt-4 grid gap-6 border border-white/10 bg-[#FAF7F2] p-6 sm:p-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-10 lg:p-9">
              {/* Mission Introduction */}
              <div className="flex flex-col">
                <div className="flex h-12 w-12 items-center justify-center border border-[#D2B87C]/60 bg-[#D2B87C]/15">
                  <Target size={22} className="text-[#8F7746]" />
                </div>

                <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8F7746]">
                  02 — Mission
                </p>

                <h3 className="mt-3 font-serif text-[34px] leading-tight text-[#20235A] sm:text-[42px]">
                  Our Mission
                </h3>

                <p className="mt-5 max-w-sm text-[15px] leading-8 text-[#1E1917]/70 sm:text-[16px]">
                  Our mission is to translate our vision into meaningful
                  educational experiences and professional outcomes.
                </p>

                <div className="mt-auto hidden items-center gap-2 pt-10 text-[#8F7746] lg:flex">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">
                    Our Commitment
                  </span>
                  <ArrowUpRight size={15} />
                </div>
              </div>

              {/* Mission Statements */}
              <div className="space-y-0">
                {visionMissionItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.number}
                      className="group grid gap-3 border-b border-[#20235A]/10 py-4 first:pt-0 last:border-b-0 last:pb-0 sm:grid-cols-[48px_1fr] sm:gap-5"
                    >
                      <div className="flex items-center gap-3 sm:block">
                        <span className="font-serif text-[24px] text-[#B6A47B]">
                          {item.number}
                        </span>

                        <div className="flex h-9 w-9 items-center justify-center bg-[#F2EFE8] sm:mt-3">
                          <Icon
                            size={18}
                            strokeWidth={1.5}
                            className="text-[#8F7746]"
                          />
                        </div>
                      </div>

                      <div>
                        <h4 className="font-serif text-[22px] leading-tight text-[#20235A] sm:text-[24px]">
                          {item.title}
                        </h4>

                        <p className="mt-3 text-[14px] leading-7 text-[#1E1917]/75 sm:text-[15px] sm:leading-8">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Accent */}
            <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs tracking-wide text-white/40">
                Excellence • Innovation • Integrity
              </p>

              <div className="flex items-center gap-2 text-[#D2B87C]">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">
                  CSE Department
                </span>
                <ArrowUpRight size={15} />
              </div>
            </div>
          </div>
        </section>

        <section
          id="peos"
          className="bg-[#FAF7F2] px-6 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-16"
        >
          <div className="mx-auto max-w-[1440px]">
            {/* Section Heading */}
            <div className="mb-8 grid gap-5 lg:mb-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-10">
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#D2B87C]" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                    Academic Framework
                  </span>
                </div>

                <h2 className="max-w-xl font-serif text-[38px] leading-[1.08] tracking-[-0.03em] text-[#20235A] sm:text-[48px] lg:text-[56px]">
                  Programme Educational
                  <span className="block text-[#8F7746]">
                    Objectives
                  </span>
                </h2>
              </div>

              <div className="lg:pb-2">
                <p className="max-w-2xl text-[15px] leading-8 text-[#1E1917]/75 sm:text-[16px]">
                  The Programme Educational Objectives define the professional
                  capabilities, technical expertise and personal qualities that
                  the Department aims to develop in its graduates.
                </p>
              </div>
            </div>

            {/* PEO Cards */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {peos.map((peo, index) => {
                const Icon = peo.icon;

                return (
                  <article
                    key={peo.id}
                    className="group relative flex min-h-[300px] flex-col overflow-hidden border border-[#20235A]/10 bg-white/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#D2B87C] hover:bg-white sm:p-6 [&_p]:text-justify"
                  >
                    {/* Card Top */}
                    <div className="flex items-start justify-between">
                      <span className="font-serif text-[38px] leading-none text-[#B6A47B] transition-colors duration-300 group-hover:text-[#20235A]">
                        0{index + 1}
                      </span>

                      <div className="flex h-11 w-11 items-center justify-center border border-[#D2B87C]/50 bg-[#F2EFE8] transition-colors duration-300 group-hover:border-[#20235A] group-hover:bg-[#20235A]">
                        <Icon
                          size={20}
                          strokeWidth={1.5}
                          className="text-[#8F7746] transition-colors duration-300 group-hover:text-[#D2B87C]"
                        />
                      </div>
                    </div>

                    {/* Objective Details */}
                    <div className="mt-6">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                        {peo.id}
                      </p>

                      <h3 className="mt-3 font-serif text-[24px] leading-tight text-[#20235A] sm:text-[26px]">
                        {peo.title}
                      </h3>

                      <p className="mt-4 text-[14px] leading-7 text-[#1E1917]/75 sm:text-[15px] sm:leading-8 ">
                        {peo.description}
                      </p>
                    </div>

                    {/* Bottom Accent */}
                    <div className="mt-auto flex items-center justify-between pt-8">
                      <span className="h-px w-10 bg-[#D2B87C] transition-all duration-300 group-hover:w-16" />

                      <ArrowUpRight
                        size={17}
                        strokeWidth={1.5}
                        className="text-[#8F7746] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                      />
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Bottom Information */}
            <div className="mt-8 flex flex-col gap-3 border-t border-[#20235A]/15 pt-5 sm:mt-10 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                Department of Computer Science & Engineering
              </p>

              <p className="text-[13px] leading-7 text-[#1E1917]/60">
                Learn · Innovate · Adapt · Lead
              </p>
            </div>
          </div>
        </section>

        <section
          id="pos"
          className="bg-white px-6 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-16"
        >
          <div className="mx-auto max-w-[1440px]">
            {/* Section Heading */}
            <div className="mb-8 grid gap-5 lg:mb-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-10">
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#D2B87C]" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                    Graduate Attributes
                  </span>
                </div>

                <h2 className="max-w-xl font-serif text-[38px] leading-[1.08] tracking-[-0.03em] text-[#20235A] sm:text-[48px] lg:text-[56px]">
                  Programme
                  <span className="block text-[#8F7746]">
                    Outcomes
                  </span>
                </h2>
              </div>

              {/* <div className="lg:pb-2">
                <p className="max-w-2xl text-[15px] leading-8 text-[#1E1917]/75 sm:text-[16px]">
                  Engineering Graduates will be able to:
                </p>
              </div> */}
            </div>

            {/* PO Cards */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {programmeOutcomes.map((po) => {
                const Icon = po.icon;

                return (
                  <article
                    key={po.number}
                    className="group flex min-h-[220px] flex-col border border-[#20235A]/10 bg-[#FAF7F2] p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#D2B87C] hover:bg-white hover:shadow-[0_16px_40px_rgba(32,35,90,0.06)] sm:p-6 [&_p]:text-justify"
                  >
                    {/* Card Header */}
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-[32px] leading-none text-[#B6A47B] transition-colors duration-300 group-hover:text-[#20235A]">
                        {po.number}
                      </span>

                      <div className="flex h-10 w-10 items-center justify-center border border-[#D2B87C]/50 bg-white transition-colors duration-300 group-hover:border-[#20235A] group-hover:bg-[#20235A]">
                        <Icon
                          size={19}
                          strokeWidth={1.5}
                          className="text-[#8F7746] transition-colors duration-300 group-hover:text-[#D2B87C]"
                        />
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="mt-5">
                      <h3 className="font-serif text-[22px] leading-tight text-[#20235A] sm:text-[24px]">
                        {po.title}
                      </h3>

                      <p className="mt-3 text-[14px] leading-7 text-[#1E1917]/75 sm:text-[15px] sm:leading-8">
                        {po.description}
                      </p>
                    </div>

                    {/* Bottom Accent */}
                    <div className="mt-auto flex items-center justify-between pt-5">
                      <span className="h-px w-10 bg-[#D2B87C] transition-all duration-300 group-hover:w-16" />

                      <ArrowUpRight
                        size={17}
                        strokeWidth={1.5}
                        className="text-[#8F7746] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                      />
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Bottom Information */}
            <div className="mt-8 flex flex-col gap-3 border-t border-[#20235A]/15 pt-5 sm:mt-10 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                Department of Computer Science & Engineering
              </p>

              <p className="text-[13px] leading-7 text-[#1E1917]/60">
                Knowledge · Innovation · Responsibility
              </p>
            </div>
          </div>
        </section>


      </main>

      <FooterSection />
    </>
  );
}