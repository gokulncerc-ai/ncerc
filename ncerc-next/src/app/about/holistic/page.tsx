"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Activity as ActivityIcon,
  ArrowRight,
  ArrowUpRight,
  Brain,
  Heart,
  Lightbulb,
  Quote,
  Sparkles,
  Target,
  Users,
  type LucideIcon,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import Holistic from "@/../public/images/holistic-ncerc.jpg";

/* ============================================================
   DATA
============================================================ */

type Pillar = {
  pillar: string;
  icon: LucideIcon;
  focus: string;
  goals: string;
  activities: string[];
};

const pillars: Pillar[] = [
  {
    pillar: "Cognitive",
    icon: Brain,
    focus:
      "Student must be able to learn how to solve complex tasks in their life \u2013 no matter if they are related to situations at college, work, or in our private life.",
    goals:
      "Concentration, problem solving, working memory and flexible thinking. Learning to tackle complex tasks and building effective strategies to identify solutions.",
    activities: ["IIC", "IEDC", "Karma", "NAppIER"],
  },
  {
    pillar: "Creative",
    icon: Lightbulb,
    focus:
      "Student must come up with new solutions to problems that the world of tomorrow will face. Creative skills support their openness to new experiences and help to transform those ideas in meaningful ways.",
    goals:
      "Coming up with ideas, expressing them and transforming them into reality. Being ok with ambiguity, exploring possibilities, evaluating ideas, identifying the best solution.",
    activities: ["NeCTAR", "StartUp", "TBI", "NSite"],
  },
  {
    pillar: "Physical",
    icon: ActivityIcon,
    focus:
      "Student must have strong physical skills, exercise their minds and bodies to maintain wellbeing towards a successful life.",
    goals:
      "Being active, understanding movement and space through practicing sensory-motor skills. Developing spatial understanding and nurturing an active and healthy body.",
    activities: ["NCC", "Bloom", "Samanwaya"],
  },
  {
    pillar: "Social",
    icon: Users,
    focus:
      "Students are to be empowered as strong collaborators and communicators, to have healthy relationships with family and friends.",
    goals:
      "Collaboration, communication and perspective-taking. Sharing ideas, negotiating rules and building empathy.",
    activities: ["Thirike", "HeliFly", "NSS"],
  },
  {
    pillar: "Emotional",
    icon: Heart,
    focus:
      "Student must process strong emotional balance, be able to tackle challenges in everyday life and relate in important ways to their family and friends.",
    goals:
      "Understand, manage and express emotions by building self-awareness and handling impulses. Staying motivated and confident in the face of difficulties.",
    activities: ["PadhamOnnu", "PKDas Home", "CSR", "Nehru Vigyan award"],
  },
];

const startupCompanies = [
  "Brahmastra Bioenergy",
  "Measurey",
  "Lewenholk Technologies",
  "Furitech Innovations",
  "Orbcrux",
  "Pairme Technologies",
  "Kaliru Technologies",
  "Present The Future",
  "In-Gen Motorcycles",
];

type ActivityDetail = {
  /** Label used in the pillar matrix */
  id: string;
  title: string;
  paragraphs: string[];
  /** Optional list rendered after paragraph at index `listAfter` */
  list?: string[];
  listAfter?: number;
};

const activityDetails: ActivityDetail[] = [
  {
    id: "IIC",
    title: "IIC",
    paragraphs: [
      "MHRD\u2019s Innovation Cell (MIC) has envisioned \u2018Institution\u2019s Innovation Council (IICs)\u2019 across selected Institutes. Our college is proud to be a HEI, dedicated to promote innovation through multitudinous modes aiming to create an innovation eco-system in the campus. A series of activities including Special Lectures, Webinars, Workshops etc. were executed by NCERC IIC. Four of our Professors were bestowed with MIC Innovation Ambassador status, and further IIC activities are being streamlined through them.",
    ],
  },
  {
    id: "IEDC",
    title: "IEDC",
    paragraphs: [
      "The Innovation & Entrepreneurship Development Cell (IEDC) of NCERC focuses on enabling the students to start their own entrepreneurial ventures. The IEDC coordinator works closely with the University\u2019s Entrepreneurship Development Cell and State Government organizations to promote entrepreneurship. The cell conducts regular workshops & trainings for students on various aspects regarding startups, marketing and preparation of project reports, financial support, mentoring, venture capitals etc. Our project was recently selected for Idea grant, and was funded by Kerala Startup Mission. IEDC organized a Webinar series on Patent Doc preparation, during lockdown. Mr. Rajkumar, our IEDC Coordinator, became a member in Technical Evaluation Panel in the Competition. He received an award of \u2018Confederation of Elite Academicians of IICDC\u2019 by Texas Instruments, DST, AICTE and IIM-Bangalore.",
    ],
  },
  {
    id: "Karma",
    title: "Karma Management Meet",
    paragraphs: [
      "The National Level Management Fest of Nehru School of Management is being conducted since last 12 years. The program has a unique feature; it is being executed in the same mode of a corporate world. Students form a company with key roles like CEO, CFO, and CMO to materialize the Karma activities, focusing on socially relevant themes. Hundreds of students from various colleges participate in management and non-management events which included Best Manager, Management Team, Marketing game, Logistics game, Treasure Hunt, Artistic tracks, Photography etc.",
    ],
  },
  {
    id: "NAppIER",
    title: "NAppIER",
    paragraphs: [
      "Nehru APPlication for IT Enabled Rendering, is the recent project launched for students. This is basically an Android application focusing our Learning Management routines during Covid lockdown. This App was designed by our PG department of Computer Applications, as a light weight component to streamline & systematize the academic information delivery done over various platforms. NAppIER is a OneTouchSolution for effective knowledge support.",
    ],
  },
  {
    id: "NeCTAR",
    title: "NeCTAR",
    paragraphs: [
      "Yet another brainchild of our PG department, NeCTAR is rated as the first of its kind e-Conference being hosted by an Engg. College of Kerala state. NeCTAR2020 is a virtual conference \u2013 an online event that included a series of large sessions run by thought leaders in the industry who presented to and interacted with attendees, replicating a traditional conference in a cyber-environment. The conference was completely free of charge \u2013 both to attend, and for scholars to upload and present their latest work on the conference platform. We could set this trend in March 2020, much before these kind of online programs were a common affair during lockdown. 110 scholars presented their research papers in Kerala\u2019s first Virtual Conference. NGI believes that Lockdowns shouldn\u2019t affect Scholarly activities, and through NeCTAR offered the opportunity to participate in an international, scholarly conference without having the concern on expenditures.",
    ],
  },
  {
    id: "StartUp",
    title: "StartUp Ecosystem",
    paragraphs: [
      "In the motive of Encouraging the Students to be a Job Creator and Not Job seeker, Currently Ten New Start-up Companies are being incubated at Nehru Group-NewGen IEDC, Coimbatore. The Start-up Companies from NCERC Students are listed below:",
      "Each Start-up Company run by the Young Aspiring Team of Students (Selected on competitive basis) from the Colleges under Nehru Group of Institutions, will receive Grant support of Rs. 25 Lakhs (i.e., Rs. 2.5 Lakhs per Team) for the Product development per year from Government of India, New Delhi. For next year, Call for Fifteen Innovative Ideas are Invited from Young Students of Nehru Group of Institutions, who has Out of Box Thinking and Technology Driven Innovation & Creativity to convert their Innovative Idea into a Start-up with Grant Support from Government of India.",
    ],
    list: startupCompanies,
    listAfter: 0,
  },
  {
    id: "TBI",
    title: "Technology Business Incubator",
    paragraphs: [
      "NGI-TBI aims to guide and encourage all the innovative ideas, whether for a product, service, equipment, novel application, business model and technique or tool in the domain of Healthcare and Internet of Things. We provide the breeding ground for the startups by providing spaces, equipment and lab facilities, mentorships from subject matter experts, technology support services and financial assistance via various funding schemes so as to guide a startup company to climb up the ladder. We focus on building sustainable regional platforms for incubating technology-related businesses, and help in utilizing technology as a means for the economic development. The Nehru Group TBI, with its headquarters in our Coimbatore campus, accelerates the development of the NCERC Student entrepreneurial companies from ideation stage to an independent self-sustaining business.",
    ],
  },
  {
    id: "NSite",
    title: "NSite",
    paragraphs: [
      "We conduct an all Kerala SciTech Expo every year, exclusively for students of High School, Degree and Diploma levels across Kerala. By organizing this programme, we intend to inspire the young minds to have a creative attitude and set history with their innovative contributions to the scientific world.",
      "NSITE is the much awaited flagship event of Nehru Group of Institutions with hundreds of participants from various institutes across the state. The Expo offers an unforgettable experience to all the participants. School, College and Polytechnic Institute students register for various events, and it\u2019s indeed a magnificent scene to watch these students showcasing their superior intellectual capabilities. Cash Prizes for Best School Award, High School / Higher Secondary Research Category etc are initiated. Winners from financially poor families are supported for their higher studies through our scholarships. Year after year, NSITE strives to be a phenomenal platform for budding geniuses to flaunt their flair!",
    ],
  },
  {
    id: "NCC",
    title: "NCC",
    paragraphs: [
      "National Cadet Corps (NCC) is a premier youth organization which functions directly under the Ministry of Defense, to train the young boys and girls to be better citizens and future leaders of our country. NCC cadets of Nehru College, Pampady under 23 Kerala Battalion, Thrissur conducted various social awareness programs such as Unity Run, Cycle Rally, Blood Donation Camp, and Tree Plantation in the outskirts of the institution. Our NCC wing is dedicated for \u201cUnity and Discipline\u201d. \u2018Unity\u2019 implies the brotherhood of all the Indian people regardless of their caste, color or creed. And \u2018Discipline\u2019 is the very bedrock on which any nation is founded.",
    ],
  },
  {
    id: "Bloom",
    title: "Bloom",
    paragraphs: [
      "Our College hosts Bloom, South India\u2019s one of the largest cultural extravaganza. The two-day event is staged on a dome like structure resembling Film Award nights. The cultural event feature numerous competitions, including dance, dramatics, film, photography, music, debating, creative writing and more. This year, the inaugural guests were Film stars Renji Paniker, Pearly Many, Ramesh Pisharody & Neha Saxena. And the grand evening events were performed by the popular band Thaikkudam Bridge alongside noted artistes Sooraj Santhosh, Sachin Warrier and Gowri Lekshmi.",
    ],
  },
  {
    id: "Samanwaya",
    title: "Samanwaya",
    paragraphs: [
      "This was a showcasing event for our recent inventions. Our College was on the frontline in the war against Covid19 and our team of Students and Staff came out with some novel ideas/devices which would be of high help to the general public. Automatic Sanitizer dispensing unit, UV powered cleaning device, Incinerator for used Gloves/Masks, Pedal controlled dispenser, and Sanitizing Tunnels were displayed during Samanwaya, attaining wide Media coverage. These devices were supported by our TBI and Patent application is under process.",
    ],
  },
  {
    id: "Thirike",
    title: "Thirike",
    paragraphs: [
      "NEST (Nehru Ex Students Forum) initiates Thirike, an Alumni meet every year, to remember the good olden days. It creates a great opportunity for the old batch mates to interact and refresh their memories. Old students are our laurels, and support us in all aspects. Thirike is a great stage for joy, family get together and charity.",
    ],
  },
  {
    id: "HeliFly",
    title: "HeliFly",
    paragraphs: [
      "Nehru Group of Institutions initiated a Helicopter carnival, through which it made a forum for the general public to have an Aerial view of Vilwadri hills and the holy river Nila. Absorbing the serene beauty of Pampady village, that too through a bird\u2019s eye vision, NGI stayed successful in creating some absolute breath taking moments for all who participated in the Helicopter carnival. The event was organized in association with Chipson Aviation. Celebrity Cine-Director Major Ravi inaugurated the show, and Flying Officer (Indian Air Force) Sri. Akash Kumar was the Chief Guest. Dr. Krishnakumar, CEO-NGI, presided over. The 4 days of helicopter carnival successfully ended up creating awesome feedback from all sectors of the society. An Exhibition organized by various institutes of NGI-Kerala division was yet another attraction, during the show.",
    ],
  },
  {
    id: "NSS",
    title: "NSS",
    paragraphs: [
      "Our NSS unit is ever dedicated in all its activities and was honored as the best in state of Kerala. Whether it is celebration of commemorative days, service for society or fight against communal problems, our NSS wing is all set for the track to act and excel. The National Service Scheme was started to establish a meaningful linkage between the campus and the community. Student youth, teachers and the community are considered the three basic components of the NSS. Our college supports all the activities of its NSS unit, and they have proved their love and affection towards the institution & society in return. The young and energetic faculty coordinators handle the activities of the unit, well supported by the matured and talented student members.",
    ],
  },
  {
    id: "PadhamOnnu",
    title: "Padham Onnu Oru Kai Sahayam",
    paragraphs: [
      "A charity program for poor school students. This program was initiated by our staff club associating with Club FM radio. Club FM is a leading FM radio station for the state of Kerala, owned by the Mathrubhumi News Media. Through this event our staff club SWAN could sponsor the Study materials for many poor students located in various regions. Our faculty team was generous enough to contribute towards this noble event, and we as teachers feel it our duty to support the whole student community, known or unknown.",
    ],
  },
  {
    id: "PKDas Home",
    title: "PKDas Dream Home",
    paragraphs: [
      "In fond memory of our founder Late Sri. PK Das, a well-known philanthropist, the Nehru Group has extended various socially relevant programs. Dream Home is a project which helps the underprivileged sector of people to build their houses. NGI has initiated many such Dream Homes. Recently such a home was constructed in Malesamangalam taluk and the key handing over ceremony of \u2018P K Das Memorial Swapna Bhavanam\u2019 was done, in presence of representatives from Panchayath, Social, Spiritual, Political and Media segments.",
    ],
  },
  {
    id: "CSR",
    title: "CSR Activities",
    paragraphs: [
      "Our College considers it a high priority thing, to support the society. NGI is actively involved in community development as a part of its social responsibility. It includes Kalalayathullikal, Medical Camp, Dhalam, Samanwaya, PK Das Dream Home, Amrutha Surabhi, Sradha and various Social Extension Activities initiated by departments.",
      "Village Attachment and Food for Stray Cattles were noted projects initiated by our B-School students. Sponsoring Computer and UPS for self-help units were initiated by PG students. Establishing a small Library for Sabari asram (established by Gandhiji) was another notable activity.",
    ],
  },
  {
    id: "Nehru Vigyan award",
    title: "Nehru Vigyan Scholarships",
    paragraphs: [
      "Nehru Vigyan is Scholarship initiative of Nehru Group. Students with high merit are provided with financial support to complete their education under our institutions. This year our trust announced of awarding student scholarships worth Rs. 2 Crore on merit basis. Applicants can take their NVS Test being conducted online on June 2020. For Engineering, 90% score will receive 75% scholarship on the tuition fee. Similarly, 80% and 70% score will receive 50% and 25% scholarship on the tuition fees respectively.",
    ],
  },
];

const detailById = new Map(activityDetails.map((item) => [item.id, item]));

const pillarByActivity = new Map<string, string>(
  pillars.flatMap((pillar) =>
    pillar.activities.map((activity) => [activity, pillar.pillar] as const),
  ),
);

function excerpt(text: string, max = 150) {
  if (text.length <= max) return text;
  return `${text.slice(0, max).replace(/\s+\S*$/, "")}…`;
}

/* ============================================================
   PAGE
============================================================ */

export default function HolisticPage() {
  const [activePillarIndex, setActivePillarIndex] = useState(0);
  const [activeActivityId, setActiveActivityId] = useState(
    pillars[0].activities[0],
  );
  const explorerRef = useRef<HTMLDivElement>(null);

  const pillar = pillars[activePillarIndex];
  const PillarIcon = pillar.icon;
  const detail = detailById.get(activeActivityId) ?? activityDetails[0];

  function selectPillar(index: number) {
    setActivePillarIndex(index);
    setActiveActivityId(pillars[index].activities[0]);
  }

  function openActivity(activityId: string) {
    const pillarIndex = pillars.findIndex((item) =>
      item.activities.includes(activityId),
    );

    if (pillarIndex >= 0) {
      setActivePillarIndex(pillarIndex);
    }

    setActiveActivityId(activityId);

    window.setTimeout(() => {
      explorerRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  }

  return (
    <>
      <SiteHeader />

      <main className="w-full overflow-x-clip bg-[#FAF7F2] text-[#1E1917]">
        {/* ======================================================
            HERO
        ====================================================== */}
        <section className="relative isolate overflow-hidden bg-[#20235A] py-16 sm:py-20 lg:py-24">
          <div className="absolute inset-0 bg-gradient-to-r from-[#20235A] via-[#20235A]/95 to-[#15183f]/90" />

          {/* Decorative circles */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-[#D2B87C]/15" />
          <div className="pointer-events-none absolute -right-8 -top-8 h-56 w-56 rounded-full border border-[#D2B87C]/20" />
          <div className="pointer-events-none absolute bottom-[-180px] left-[-140px] h-[400px] w-[400px] rounded-full border border-white/5" />

          <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#D2B87C]" />

              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D2B87C] sm:text-sm">
                About Us
              </p>
            </div>

            <h1 className="mt-4 font-serif text-3xl font-normal leading-tight tracking-[-0.025em] text-white sm:text-4xl lg:text-5xl">
              Holistic <span className="italic text-[#D2B87C]">Model</span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
              Not just certified professionals, but complete citizens, built
              through five pillars of student development.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#pillars"
                className="group inline-flex min-h-12 items-center gap-3 bg-[#D2B87C] px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#20235A] transition-colors duration-300 hover:bg-white"
              >
                Explore the Pillars
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#programmes"
                className="inline-flex min-h-12 items-center gap-3 border border-white/25 px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:border-[#D2B87C] hover:text-[#D2B87C]"
              >
                All Programmes
              </a>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 h-1 bg-[#D2B87C]" />
        </section>

        {/* ======================================================
            PILLAR STRIP
        ====================================================== */}
        <section className="border-b border-[#20235A]/10 bg-white">
          <div className="mx-auto grid max-w-7xl grid-cols-2 px-6 sm:px-8 md:grid-cols-5 lg:px-12">
            {pillars.map((item, index) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.pillar}
                  href="#pillars"
                  onClick={() => selectPillar(index)}
                  className={`group flex items-center gap-3 py-5 transition-colors sm:py-6 ${
                    index !== pillars.length - 1
                      ? "md:border-r md:border-[#20235A]/10"
                      : ""
                  } ${index > 0 ? "md:pl-5" : ""} ${
                    index % 2 === 0 ? "pr-3" : "pl-3 md:pl-5"
                  }`}
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#F2EFE8] text-[#8F7746] transition-colors duration-300 group-hover:bg-[#20235A] group-hover:text-[#D2B87C]">
                    <Icon size={19} strokeWidth={1.5} />
                  </span>

                  <span>
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="block font-serif text-lg leading-tight text-[#20235A]">
                      {item.pillar}
                    </span>
                  </span>
                </a>
              );
            })}
          </div>
        </section>

        {/* ======================================================
            INTRODUCTION
        ====================================================== */}
        <section className="bg-[#FAF7F2] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-9 bg-[#8F7746]" />

                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8F7746] sm:text-xs">
                    Student Development
                  </p>
                </div>

                <h2 className="font-serif text-4xl font-normal leading-[1.12] tracking-[-0.025em] text-[#20235A] sm:text-5xl">
                  NCERC&rsquo;s holistic model for
                  <br />
                  <span className="italic">student development.</span>
                </h2>
              </div>

              <div>
                <div className="space-y-5 text-justify text-[15px] leading-[2] text-[#1E1917]/75 sm:text-base">
                  <p>
                    The motto of NGI is <em>Molding True Citizens.</em> Our
                    college has always followed a principle, not producing
                    mere Certified Techies/Scientists/Managers, but of
                    creating Complete Citizens, who would pragmatically excel
                    in all strata of Professional, Personal and Social life.
                    We accomplish a Holistic approach for Student
                    Development.
                  </p>

                  <p>
                    Academic excellence alone cannot assure success and
                    happiness in life or career. Holistic development refers
                    to the overall development of Cognitive, Creative,
                    Physical, Emotional and Social abilities in a student so
                    that he/she is capable of facing the demands and
                    challenges of everyday life.
                  </p>
                </div>

                <div className="mt-8 flex items-start gap-4 border-l-2 border-[#D2B87C] bg-white px-5 py-5 sm:px-6">
                  <Quote
                    size={22}
                    strokeWidth={1.5}
                    className="mt-1 shrink-0 text-[#8F7746]"
                  />

                  <p className="font-serif text-xl leading-8 text-[#20235A] sm:text-2xl">
                    Molding True Citizens.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================
            MODEL IMAGE + VISION
        ====================================================== */}
        <section className="bg-[#F2EFE8] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div className="relative">
              <div className="absolute -bottom-4 -left-4 right-4 top-4 border border-[#D2B87C]/70 sm:-bottom-5 sm:-left-5 sm:right-5 sm:top-5" />

              <div className="relative h-80 w-full overflow-hidden border border-[#20235A]/10 bg-white sm:h-[28rem] lg:h-[34rem]">
                <Image
                  src={Holistic}
                  alt="NCERC Holistic Model for Student Development"
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-contain p-3"
                  priority
                />
              </div>
            </div>

            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-9 bg-[#8F7746]" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8F7746] sm:text-xs">
                  Our Vision
                </p>
              </div>

              <h2 className="font-serif text-3xl font-normal leading-[1.15] tracking-[-0.02em] text-[#20235A] sm:text-4xl">
                Education that goes
                <br />
                <span className="italic">beyond academics.</span>
              </h2>

              <div className="mt-6 space-y-4 text-justify text-sm leading-7 text-[#1E1917]/72 sm:text-[15px] sm:leading-8">
                <p>
                  We envision an education system that would help our
                  students to learn academics, to know oneself, to build
                  healthy relationships, to develop resilience and to work in
                  a team.
                </p>

                <p>
                  Equally important is to experience transcendence and be
                  existent to the activities in the society and its culture.
                  Nehru Group visualizes, Holistic Education system would
                  boost the morale of a student to achieve greater heights in
                  their careers, lead a quality life and grow up to be good
                  citizens of the society.
                </p>

                <p>
                  NCERC approach for Holistic Education system has FIVE core
                  pillars. And we design a set of Activities/Projects/Events
                  to be included in each of these pillars. Through
                  participation of these programs, our student community
                  would automatically involve into the Holistic tracks, and
                  mold themself into True Citizens. The explorer below
                  provides an Activity Matrix view, for the summary of its
                  key undertakings.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================
            PILLAR EXPLORER (interactive activity matrix)
        ====================================================== */}
        <section
          id="pillars"
          className="relative scroll-mt-24 overflow-hidden bg-[#20235A] px-6 py-16 text-white sm:px-8 sm:py-20 lg:px-12 lg:py-24"
        >
          <div className="pointer-events-none absolute -right-32 -top-36 h-[500px] w-[500px] rounded-full border border-[#D2B87C]/10" />
          <div className="pointer-events-none absolute bottom-[-180px] left-[-140px] h-[400px] w-[400px] rounded-full border border-white/5" />

          <div ref={explorerRef} className="relative mx-auto max-w-7xl scroll-mt-24">
            <div className="mb-10">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-9 bg-[#D2B87C]" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D2B87C] sm:text-xs">
                  Activity Matrix
                </p>
              </div>

              <h2 className="font-serif text-4xl font-normal leading-[1.12] tracking-[-0.025em] sm:text-5xl">
                Five pillars,
                <br />
                <span className="italic text-[#D2B87C]">one citizen.</span>
              </h2>
            </div>

            {/* Pillar tabs */}
            <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
              {pillars.map((item, index) => {
                const Icon = item.icon;
                const isActive = index === activePillarIndex;

                return (
                  <button
                    key={item.pillar}
                    type="button"
                    onClick={() => selectPillar(index)}
                    aria-pressed={isActive}
                    className={`group flex flex-col items-start border p-4 text-left transition-all duration-300 hover:-translate-y-0.5 sm:p-5 ${
                      isActive
                        ? "border-[#D2B87C] bg-[#D2B87C] text-[#20235A]"
                        : "border-white/15 bg-white/[0.04] text-white hover:border-[#D2B87C]/70"
                    } ${index === 4 ? "col-span-2 md:col-span-1" : ""}`}
                  >
                    <span className="flex w-full items-center justify-between">
                      <Icon
                        size={22}
                        strokeWidth={1.5}
                        className={isActive ? "text-[#20235A]" : "text-[#D2B87C]"}
                      />

                      <span
                        className={`font-serif text-sm ${
                          isActive ? "text-[#20235A]/70" : "text-white/40"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </span>

                    <span className="mt-5 font-serif text-xl leading-tight">
                      {item.pillar}
                    </span>

                    <span
                      className={`mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${
                        isActive ? "text-[#20235A]/70" : "text-white/45"
                      }`}
                    >
                      {item.activities.length} programmes
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Selected pillar */}
            <div className="mt-6 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">
              {/* Focus & goals */}
              <div className="space-y-4">
                <div className="border border-white/15 bg-white/[0.05] p-6 sm:p-7">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center border border-[#D2B87C]/50 text-[#D2B87C]">
                      <PillarIcon size={19} strokeWidth={1.5} />
                    </span>

                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                      {pillar.pillar} &middot; Focus Area
                    </p>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-white/80 sm:text-[15px] sm:leading-8">
                    {pillar.focus}
                  </p>
                </div>

                <div className="border border-white/15 bg-white/[0.05] p-6 sm:p-7">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center border border-[#D2B87C]/50 text-[#D2B87C]">
                      <Target size={19} strokeWidth={1.5} />
                    </span>

                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                      Goals / Expectations
                    </p>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-white/80 sm:text-[15px] sm:leading-8">
                    {pillar.goals}
                  </p>
                </div>
              </div>

              {/* Activities + detail */}
              <div className="flex flex-col border border-[#20235A]/10 bg-white text-[#1E1917]">
                <div className="flex flex-wrap gap-2 border-b border-[#20235A]/10 bg-[#F2EFE8] p-4 sm:p-5">
                  <span className="mr-1 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                    <Sparkles size={14} />
                    Events / Activities
                  </span>

                  {pillar.activities.map((activityId) => {
                    const isActive = activityId === activeActivityId;

                    return (
                      <button
                        key={activityId}
                        type="button"
                        onClick={() => setActiveActivityId(activityId)}
                        aria-pressed={isActive}
                        className={`border px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors duration-300 ${
                          isActive
                            ? "border-[#20235A] bg-[#20235A] text-[#D2B87C]"
                            : "border-[#20235A]/20 bg-white text-[#20235A] hover:border-[#D2B87C]"
                        }`}
                      >
                        {activityId}
                      </button>
                    );
                  })}
                </div>

                <div className="flex-1 p-6 sm:p-8">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                    {pillar.pillar}
                  </p>

                  <h3 className="mt-2 font-serif text-2xl leading-tight text-[#20235A] sm:text-3xl">
                    {detail.title}
                  </h3>

                  <div className="mt-4 h-px w-12 bg-[#D2B87C]" />

                  <div className="mt-6 space-y-4">
                    {detail.paragraphs.map((paragraph, index) => (
                      <div key={index}>
                        <p className="text-justify text-sm leading-7 text-[#1E1917]/72 sm:text-[15px] sm:leading-8">
                          {paragraph}
                        </p>

                        {detail.list && detail.listAfter === index && (
                          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                            {detail.list.map((item) => (
                              <li
                                key={item}
                                className="flex items-center gap-3 border border-[#20235A]/10 bg-[#FAF7F2] px-4 py-3 text-sm text-[#20235A]"
                              >
                                <span className="h-1.5 w-1.5 shrink-0 bg-[#D2B87C]" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================
            ALL PROGRAMMES
        ====================================================== */}
        <section
          id="programmes"
          className="scroll-mt-24 bg-[#FAF7F2] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-9 bg-[#8F7746]" />

                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8F7746] sm:text-xs">
                    Programmes &amp; Events
                  </p>
                </div>

                <h2 className="font-serif text-4xl font-normal leading-[1.12] tracking-[-0.025em] text-[#20235A] sm:text-5xl">
                  Where the pillars
                  <br />
                  <span className="italic">come alive.</span>
                </h2>
              </div>

              <p className="max-w-sm text-sm leading-7 text-[#1E1917]/60">
                Select any programme to read its full story in the pillar
                explorer.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {activityDetails.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => openActivity(item.id)}
                  className="group flex h-full flex-col border border-[#20235A]/10 bg-white p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#D2B87C] sm:p-6"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="bg-[#20235A] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#D2B87C]">
                      {pillarByActivity.get(item.id)}
                    </span>

                    <span className="font-serif text-sm text-[#8F7746]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-5 font-serif text-xl leading-snug text-[#20235A] sm:text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-7 text-[#1E1917]/62">
                    {excerpt(item.paragraphs[0])}
                  </p>

                  <div className="mt-5 flex items-center justify-between gap-4">
                    <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746] transition-colors duration-300 group-hover:text-[#20235A]">
                      Read more
                      <ArrowUpRight
                        size={14}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </span>
                  </div>

                  <div className="mt-5 h-px w-12 bg-[#D2B87C] transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================================
            CLOSING CTA
        ====================================================== */}
        <section className="relative overflow-hidden bg-[#20235A] px-6 py-14 text-white sm:px-8 sm:py-16 lg:px-12">
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-[#D2B87C]/15" />

          <div className="relative mx-auto flex max-w-7xl flex-col justify-between gap-7 md:flex-row md:items-center">
            <div>
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D2B87C] sm:text-xs">
                Molding True Citizens
              </p>

              <h2 className="max-w-2xl font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
                Discover more about life and learning at NCERC.
              </h2>
            </div>

            <Link
              href="/about"
              className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-3 border border-[#D2B87C]/60 px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:bg-[#D2B87C] hover:text-[#20235A]"
            >
              About NCERC
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}