import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  ChevronRight,
  Cpu,
  Factory,
  Globe2,
  Lightbulb,
  MoveUpRight,
  Settings2,
  Wrench,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../DepartmentNav/page";

type Point = {
  label: string;
  text: string;
};

type Topic = {
  heading: string;
  intro: string;
  points?: Point[];
  icon?: React.ElementType;
};

const benefitTopics: Topic[] = [
  {
    heading: "Transferable Skills",
    icon: Settings2,
    intro:
      "Mechanical engineering skills are transferable, meaning they will be useful across a variety of industries and help you to become more employable. A degree in mechanical engineering will give you a range of skills including:",
    points: [
      {
        label: "Problem solving",
        text: "Engineering is about finding better, more efficient ways of doing things.",
      },
      {
        label: "Teamwork",
        text: "Working in teams means you can share expertise and develop faster and more robust solutions.",
      },
      {
        label: "Advanced technical skills",
        text: "Specialising in mechanical engineering means you will build a strong knowledge of mechanical engineering theory, and how to put it into practise practically.",
      },
      {
        label: "Academic writing",
        text: "You will be able to present your findings and ideas in a compelling way in written reports.",
      },
      {
        label: "Decision making",
        text: "Mechanical engineers have to be willing to take risks and to have confidence in their decisions under pressure.",
      },
    ],
  },
  {
    heading: "Gain a Broad Range of Knowledge",
    icon: Cpu,
    intro:
      "Mechanical engineering is a broad field, which has more impact on people’s daily lives than you may realise, from manufacturing the clothes they wear, to building the apps on their phones. You will study a range of interesting subjects during the course of your degree programme. This may include:",
    points: [
      {
        label: "Computer applications",
        text: "Computer technology continues to evolve at an incredible pace, stretching its impact into almost every part of life.",
      },
      {
        label: "Mathematics and physics",
        text: "Having a good grounding in pure mathematics and physics is vital, as they are the basis of all engineering.",
      },
      {
        label: "Electricity",
        text: "Study the science behind electricity and how it can further change the world.",
      },
      {
        label: "Design and Manufacture",
        text: "Learn how to draw designs digitally and how manufacturing processes work.",
      },
      {
        label: "Robotics and artificial intelligence",
        text: "Study the mechanics of robotics and the influence that this relatively new technology is having across a number of industries.",
      },
    ],
  },
  {
    heading: "A Wide Range of Career Options",
    icon: BriefcaseBusiness,
    intro:
      "Depending on your interests and career ambitions, you can choose from a range of engineering sectors, including:",
    points: [
      {
        label: "Aerospace",
        text: "Help to design the next generation of planes, rockets and satellites.",
      },
      {
        label: "Automotive",
        text: "Work on everything from Formula 1 cars to buses, from their wheels to how they are fuelled.",
      },
      {
        label: "Biomedical",
        text: "Improve lives by designing high-tech medical equipment including artificial limbs and pacemakers.",
      },
      {
        label: "Energy",
        text: "Find greener, more efficient alternatives to power industry and homes.",
      },
      {
        label: "Manufacturing",
        text: "Streamline machines and equipment to create the most efficient manufacturing processes possible.",
      },
    ],
  },
  {
    heading: "Global Opportunities",
    icon: Globe2,
    intro:
      "Every country in the world needs mechanical engineers to create and maintain infrastructure. This means you may have an opportunity to work abroad. You may want to spend some time working in developing countries, where your specialist knowledge could make a real impact.",
  },
  {
    heading: "Graduate Opportunities",
    icon: BriefcaseBusiness,
    intro:
      "Mechanical engineering graduates are always in demand. There is currently a skills gap for trained engineers, and in 2018, 98.35% of mechanical engineers were in employment according to Career smart. If you would like to continue your studies, some masters programmes and PhDs in this field are funded. Whether you want to be an academic, move into a managerial role, or to be as qualified as possible to help you stand out in the workplace, further study could be a rewarding option.",
  },
  {
    heading: "Play a Role in Developing New Technologies",
    icon: Lightbulb,
    intro:
      "Mechanical engineers discovered electricity. They invented the printing press, the train, and the mobile phone. As a mechanical engineer, you could develop new technologies knowing that they will improve lives for years to come. If you work in the rail industry, you will review designs and work on improving lines to make them as reliable and cost-effective as possible. In the marine industry, you could be designing and ensuring the safe running of ships, developing cleaner technologies for the future. Or you might work in power generation and play a part in finding reliable alternatives to fossil fuels.",
  },
  {
    heading: "Top Salaries",
    icon: MoveUpRight,
    intro:
      "Mechanical engineers are highly valued and for that reason, they enjoy good salaries. Starting salaries for mechanical engineers are in the range of £20,000 to £28,000, compared to an average starting salary for UK graduates of £19,900 (UK Government Official Statistics). With experience, you could earn £35-40,000. At a senior level, you could earn £60,000 or more.",
  },
  {
    heading: "Think Creatively",
    icon: Lightbulb,
    intro:
      "Although engineering is a science, it can also require a high level of creativity. As a mechanical engineer, you will learn how not to rely on the way things have been done before, and to think independently so that you can create new solutions to problems. The first wheel, the compass, the aeroplane: all of these were engineering solutions which advanced human progress. A degree in engineering gives you the tools to make a difference.",
  },
];

const ngiParagraphs: string[] = [
  "Nehru Group of Institutions (NGI), among the top private engineering colleges in Thrissur and Palakkad-Kerala, intends to be an overall the world prominent academic association empowering splendid engineers! Nehru College of Engineering and Research Centre (NCERC), Thrissur, and Jawaharlal College of Engineering and Technology (JCET) – Palakkad and Nehru Institute of Engineering and Technology-Coimbatore hold the title of best engineering colleges in Kerala and Tamil Nadu because of our perpetual vow to passing on pervasive training. Our instructive plans, imaginative demonstrating techniques, introduction to industry best practices, and experiential learning bases on making our engineering students work arranged! Being one of the top private Mechanical Engineering colleges in Kerala, NGI has been cutting energetic and red hot characters into skilled engineers prepared for working in various parts. Nehru Colleges have set its instructive plans at better principles than ensure that it passes on quality preparing.",

  "Nehru College of Engineering and Research Center (NCERC), Thrissur is the Principal Engineering school in Kerala to offer a Mechanical Engineering course, authorize by NAAC, and it holds the title of the best Engineering school in Kerala due to the association’s perpetual guarantee to passing on common guidance. The Department of Mechanical Engineering has a strong Undergraduate Program in Mechanical Engineering (B.Tech). The primary focus of our curriculum is to impart technical know-how to students, promote their problem-solving skills, innovation of new technologies and etc. Our department has distinguished record in teaching. The department have a group of experienced and enthusiastic teaching faculties and lab facilities with experienced lab staff, which in turn boosts the teaching-learning process. The department has structured an ambience of togetherness and cohesiveness.",

  "The Mechanical engineering course offered to urge spirants to take on troubles in achieving capable turn of events and self-headway and supports the understudies into talented engineers with a bearing towards significance and high good standards, free of the zone they choose to work in both in India or abroad. Known for the significance and carefulness of the program, the instructive arrangement is minded and re-examined periodically to remain relevant and contemporary to deal with the distinctive mechanical movements happening the world over that sway the space of Mechanical engineering. The learnings from NCERC and JCET have additionally inspired a portion of our students to build up their own new businesses! NGI ensure that you get the best from the engineering courses promoted. Besides, being viewed as the top private engineering school in Thrissur and Palakkad, Nehru Group of Institutions has been valuing the credit for being among the overwhelming inventive establishments in Kerala as well.",

  "Thus, go along with us, and learn and develop through the best scholastic program in Mechanical Engineering, and experience your change into a certified proficient of extraordinary aptitude!",
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
      {children}
    </p>
  );
}

function PointList({ points }: { points: Point[] }) {
  return (
    <ul className="mt-7 space-y-4">
      {points.map((point) => (
        <li
          key={point.label}
          className="group flex items-start gap-4 border-b border-[#E7E1D7] pb-4 last:border-b-0"
        >
          <span className="mt-1.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#D2B87C] text-[#8F7746]">
            <ChevronRight size={14} strokeWidth={2.5} />
          </span>

          <p className="text-[15px] leading-7 text-[#514B46]">
            <span className="font-semibold text-[#20235A]">
              {point.label}
            </span>
            <span className="mx-1">—</span>
            {point.text}
          </p>
        </li>
      ))}
    </ul>
  );
}

function TopicCard({ topic }: { topic: Topic }) {
  const Icon = topic.icon ?? Wrench;

  return (
    <article className="group relative overflow-hidden border border-[#E4DED4] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#D2B87C] hover:shadow-[0_18px_45px_rgba(32,35,90,0.08)] sm:p-8">
      <div className="absolute right-0 top-0 h-20 w-20 translate-x-8 -translate-y-8 rounded-full border border-[#D2B87C]/30 transition-transform duration-500 group-hover:scale-150" />

      <div className="relative">
        <div className="mb-6 flex items-start justify-between gap-5">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D2B87C] bg-[#FAF7F2] text-[#8F7746]">
            <Icon size={21} strokeWidth={1.7} />
          </div>

          <span className="font-serif text-4xl leading-none text-[#D2B87C]/35">
            +
          </span>
        </div>

        <h3 className="font-serif text-2xl font-semibold leading-tight text-[#20235A] sm:text-[27px]">
          {topic.heading}
        </h3>

        <div className="mt-5 h-px w-12 bg-[#D2B87C] transition-all duration-300 group-hover:w-20" />

        <p className="mt-5 text-[15px] leading-7 text-[#5A5550]">
          {topic.intro}
        </p>

        {topic.points && <PointList points={topic.points} />}
      </div>
    </article>
  );
}

export default function CareerScopePage() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-[#FAF7F2] text-[#1E1917]">
        {/* Hero */}
        <section className="relative isolate overflow-hidden bg-[#20235A]">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border border-[#D2B87C]/20" />
            <div className="absolute -right-10 top-16 h-64 w-64 rounded-full border border-[#D2B87C]/10" />
            <div className="absolute bottom-[-150px] left-[-80px] h-80 w-80 rounded-full border border-white/5" />
          </div>

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-14 sm:px-8 sm:py-16 lg:grid-cols-[1fr_0.9fr] lg:gap-16 lg:px-10 lg:py-20 xl:py-24">
            {/* Hero content */}
            <div className="relative z-10 max-w-2xl">
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-10 bg-[#D2B87C]" />

                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D2B87C]">
                  Mechanical Engineering
                </p>
              </div>

              <h1 className="font-serif text-[43px] font-medium leading-[1.04] tracking-[-0.025em] text-white sm:text-[58px] lg:text-[64px] xl:text-[74px]">
                Career
                <br />
                <span className="italic text-[#D2B87C]">Scope.</span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-8 text-white/70 sm:text-[17px]">
                Explore the opportunities, skills, industries and future
                pathways available to graduates of Mechanical Engineering at
                NCERC.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  href="#career-opportunities"
                  className="inline-flex h-12 items-center gap-3 bg-[#D2B87C] px-6 text-sm font-semibold text-[#20235A] transition-all duration-300 hover:bg-white"
                >
                  Explore Career Scope
                  <ArrowRight size={17} />
                </Link>

                <Link
                  href="#why-mechanical"
                  className="inline-flex h-12 items-center gap-2 border border-white/25 px-6 text-sm font-medium text-white transition-all duration-300 hover:border-[#D2B87C] hover:text-[#D2B87C]"
                >
                  Why Mechanical?
                </Link>
              </div>

              <div className="mt-10 flex items-center gap-4 text-xs uppercase tracking-[0.18em] text-white/45">
                <span>NCERC</span>
                <span className="h-px w-8 bg-white/20" />
                <span>Engineering Futures</span>
              </div>
            </div>

            {/* Hero image */}
            <div className="relative mx-auto w-full max-w-[570px] lg:ml-auto">
              <div className="absolute -bottom-5 -left-5 h-full w-full border border-[#D2B87C]/60" />

              <div className="relative aspect-[4/4.5] overflow-hidden bg-[#F2EFE8]">
                <Image
                  src="/images/dpt/mechanical-engineering/hero.jpg"
                  alt="Mechanical Engineering career opportunities"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#20235A]/55 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                      Department
                    </p>
                    <p className="mt-1 font-serif text-xl text-white">
                      Mechanical Engineering
                    </p>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#D2B87C] text-[#20235A]">
                    <Wrench size={19} strokeWidth={1.8} />
                  </div>
                </div>
              </div>

              <div className="absolute -right-4 top-8 hidden border border-[#D2B87C]/50 bg-[#20235A] px-5 py-4 sm:block">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#D2B87C]">
                  Future
                </p>
                <p className="mt-1 font-serif text-lg text-white">
                  Build. Create. Innovate.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Department navigation */}
        <InnerHeader />

        {/* Intro */}
        <section
          id="why-mechanical"
          className="border-b border-[#E5DED3] bg-white"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20 lg:px-10 lg:py-24">
            <div>
              <SectionLabel>Career Perspective</SectionLabel>

              <h2 className="max-w-md font-serif text-3xl font-semibold leading-tight text-[#20235A] sm:text-4xl lg:text-[45px]">
                Why choose to study{" "}
                <span className="italic text-[#8F7746]">
                  Mechanical Engineering?
                </span>
              </h2>
            </div>

            <div className="max-w-3xl">
              <div className="mb-7 h-px w-16 bg-[#D2B87C]" />

              <p className="text-[16px] leading-8 text-[#514B46] sm:text-[17px]">
                Mechanical engineers design and build solutions to a range of
                problems, improving efficiency across a wide range of
                industries. By studying mechanical engineering, you can look
                forward to good job prospects, high salaries, and varied work.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="border-l-2 border-[#D2B87C] pl-4">
                  <Factory
                    size={20}
                    strokeWidth={1.6}
                    className="text-[#8F7746]"
                  />
                  <p className="mt-3 font-serif text-lg text-[#20235A]">
                    Industry
                  </p>
                  <p className="mt-1 text-sm leading-6 text-[#716B65]">
                    Diverse engineering sectors
                  </p>
                </div>

                <div className="border-l-2 border-[#D2B87C] pl-4">
                  <Lightbulb
                    size={20}
                    strokeWidth={1.6}
                    className="text-[#8F7746]"
                  />
                  <p className="mt-3 font-serif text-lg text-[#20235A]">
                    Innovation
                  </p>
                  <p className="mt-1 text-sm leading-6 text-[#716B65]">
                    Technology-driven careers
                  </p>
                </div>

                <div className="border-l-2 border-[#D2B87C] pl-4">
                  <Globe2
                    size={20}
                    strokeWidth={1.6}
                    className="text-[#8F7746]"
                  />
                  <p className="mt-3 font-serif text-lg text-[#20235A]">
                    Global
                  </p>
                  <p className="mt-1 text-sm leading-6 text-[#716B65]">
                    Opportunities worldwide
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Career opportunities */}
        <section
          id="career-opportunities"
          className="bg-[#FAF7F2] px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 max-w-3xl">
              <SectionLabel>Professional Advantage</SectionLabel>

              <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
                <div>
                  <h2 className="font-serif text-3xl font-semibold leading-tight text-[#20235A] sm:text-4xl lg:text-[46px]">
                    Benefits of Studying
                    <br />
                    <span className="italic text-[#8F7746]">
                      Mechanical Engineering
                    </span>
                  </h2>
                </div>

                <div className="max-w-xs">
                  <p className="text-sm leading-6 text-[#716B65]">
                    Build technical knowledge, creative thinking and
                    transferable skills for an evolving engineering world.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              {benefitTopics.map((topic, index) => (
                <div
                  key={topic.heading}
                  className={
                    index === 2
                      ? "lg:col-span-2 lg:max-w-[calc(50%-10px)]"
                      : ""
                  }
                >
                  <TopicCard topic={topic} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Career journey statement */}
        <section className="relative overflow-hidden bg-[#20235A] px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="absolute -right-20 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full border border-[#D2B87C]/15" />
          <div className="absolute -right-4 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full border border-[#D2B87C]/10" />

          <div className="relative mx-auto max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div>
                <SectionLabel>Future Engineers</SectionLabel>

                <h2 className="font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-[48px]">
                  Shape the future through
                  <span className="italic text-[#D2B87C]">
                    {" "}
                    engineering.
                  </span>
                </h2>
              </div>

              <div className="max-w-3xl">
                <p className="text-base leading-8 text-white/70 sm:text-lg">
                  Mechanical engineers have an opportunity to contribute to
                  new technologies, improve existing systems and solve
                  challenges that affect everyday life. From transportation
                  and manufacturing to marine systems, energy and emerging
                  technologies, the discipline opens doors to a wide range of
                  professional possibilities.
                </p>

                <div className="mt-8 h-px w-20 bg-[#D2B87C]" />
              </div>
            </div>
          </div>
        </section>

        {/* NGI section */}
        <section className="bg-white px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
              <div className="lg:sticky lg:top-28 lg:self-start">
                <SectionLabel>About NGI</SectionLabel>

                <h2 className="font-serif text-3xl font-semibold leading-tight text-[#20235A] sm:text-4xl lg:text-[45px]">
                  Nehru Group of
                  <span className="italic text-[#8F7746]">
                    {" "}
                    Institutions
                  </span>
                </h2>

                <div className="mt-7 h-px w-16 bg-[#D2B87C]" />

                <p className="mt-6 max-w-sm text-sm leading-7 text-[#716B65]">
                  A learning environment focused on engineering education,
                  practical exposure, innovation and professional growth.
                </p>
              </div>

              <div className="space-y-0">
                {ngiParagraphs.map((paragraph, index) => (
                  <div
                    key={index}
                    className="border-t border-[#E4DED4] py-8 first:border-t-0 first:pt-0 last:pb-0"
                  >
                    <div className="grid gap-5 sm:grid-cols-[60px_1fr]">
                      <span className="font-serif text-3xl text-[#D2B87C]">
                        0{index + 1}
                      </span>

                      <p className="text-[15px] leading-8 text-[#514B46] sm:text-base">
                        {paragraph}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="bg-[#F2EFE8] px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="relative overflow-hidden bg-[#20235A] px-7 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-16">
              <div className="absolute right-[-70px] top-[-70px] h-52 w-52 rounded-full border border-[#D2B87C]/20" />
              <div className="absolute bottom-[-100px] left-[-60px] h-52 w-52 rounded-full border border-white/5" />

              <div className="relative flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
                <div className="max-w-2xl">
                  <SectionLabel>Mechanical Engineering</SectionLabel>

                  <h2 className="font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-[45px]">
                    Build your skills.
                    <br />
                    <span className="italic text-[#D2B87C]">
                      Shape your career.
                    </span>
                  </h2>

                  <p className="mt-5 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
                    Discover the academic and professional opportunities
                    available through Mechanical Engineering at NCERC.
                  </p>
                </div>

                <Link
                  href="/department/mechanical-engineering"
                  className="inline-flex h-12 shrink-0 items-center justify-center gap-3 border border-[#D2B87C] px-6 text-sm font-semibold text-[#D2B87C] transition-all duration-300 hover:bg-[#D2B87C] hover:text-[#20235A]"
                >
                  Explore the Department
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}