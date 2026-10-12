import Image from "next/image";
import { ChevronRight } from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../DepartmentNav/DepartmentNavigation";

export const metadata = {
  title:
    "Top Engineering Colleges in Thrissur | Computer Science and Engineering - NCERC",
  description:
    "Teaching and learning process of the Department of Computer Science and Engineering at Nehru College of Engineering and Research Centre, Thrissur: technology-enhanced learning, software facilities, outcome based learning, value added courses and more.",
  keywords: [
    "engineering colleges thrissur",
    "engineering colleges in thrissur",
    "private engineering colleges in thrissur",
    "top engineering colleges in thrissur",
    "computer science engineering thrissur",
    "Nehru College of Engineering and Research Centre thrissur",
    "NCERC thrissur",
  ],
  robots: { index: true, follow: true },
};

// Adjust this base to wherever the TLP images live inside /public
const IMAGE_BASE = "/images/dpt/computer-science-and-engineering/tlp";

type RichText = (string | { bold: string })[];

type Block =
  | { kind: "point"; text: RichText }
  | { kind: "link"; label: string; href: string }
  | { kind: "image"; file: string; alt: string; caption?: string };

interface TlpRow {
  method: string;
  blocks: Block[];
}

const tlpRows: TlpRow[] = [
  {
    method: "Technology - Enhanced Learning",
    blocks: [
      {
        kind: "point",
        text: [
          "With Technology-Enhanced learning, students are no longer limited to the textbooks that their syllabus provides. In order to achieve this, faculty can use ICT enabled classes and smart class rooms for enhance the visualization of various concepts of theories and problems.",
        ],
      },
      {
        kind: "image",
        file: "tlp-picture1.png",
        alt: "Technology enhanced learning - ICT enabled classroom",
      },
      {
        kind: "image",
        file: "tlp-picture2.png",
        alt: "Technology enhanced learning - smart classroom",
      },
      {
        kind: "point",
        text: [
          "Faculty can use different materials for this learning includes - PPTs, PDF and Word Documents (Subject wise course materials prepared by each faculty), Video Lectures from NPTEL and other resources.",
        ],
      },
      {
        kind: "point",
        text: [
          "Students are encouraged to attend MOOC courses - NPTEL and STANFORD etc.,",
        ],
      },
      {
        kind: "image",
        file: "tlp-picture3.png",
        alt: "Students attending MOOC courses",
      },
    ],
  },
  {
    method: "Software Facilities",
    blocks: [
      {
        kind: "link",
        label: "www.icampuz.in/ngi/index.php",
        href: "https://www.icampuz.in/ngi/index.php",
      },
      {
        kind: "point",
        text: [
          "icampuz is an advanced web based campus management system offering attendance management system including daily massage system for parents about each students attendance, students and faculty information system, students academic details, course materials etc., Students can easy to access icampuz through their login.",
        ],
      },
      {
        kind: "image",
        file: "tlp-picture4.png",
        alt: "icampuz campus management system",
      },
      {
        kind: "link",
        label: "www.ngientranceexam.in",
        href: "http://www.ngientranceexam.in/",
      },
      {
        kind: "point",
        text: [
          "NGI Online Exam Portal is a web based online exam portal. The teachers can conduct and evaluate exams for subjects, laboratories, gate model exams etc., Students can easy access this exam portal through their login.",
        ],
      },
      {
        kind: "image",
        file: "tlp-picture5.png",
        alt: "NGI online exam portal - screen 1",
      },
      {
        kind: "image",
        file: "tlp-picture6.png",
        alt: "NGI online exam portal - screen 2",
      },
    ],
  },
  {
    method: "Faculty Course Materials",
    blocks: [
      {
        kind: "point",
        text: [
          "Course Materials are prepared by each faculty and share the materials among students via Google classroom, icampuz, and websites. Course Materials includes Lecture Notes, Previous Year Question Papers, Question Banks, PPT's, Lecture Videos, Lab Manuals etc.,",
        ],
      },
      {
        kind: "image",
        file: "tlp-picture7.png",
        alt: "Faculty course materials - screen 1",
      },
      {
        kind: "image",
        file: "tlp-picture8.png",
        alt: "Faculty course materials - screen 2",
      },
    ],
  },
  {
    method: "Outcome Based Learning",
    blocks: [
      {
        kind: "point",
        text: [
          "Teaching-learning process is a crucial part of outcome based education. It implements/employs as the set of activities engaging with student's to enable them to acquire knowledge, skills and attitudes.",
        ],
      },
      {
        kind: "point",
        text: [
          "Curriculum compliance is systematic analysis of curriculum, prescribed by University, to identify the degree of competency of syllabi and its contents for attaining the Program Outcomes and Program Specific Outcomes.",
        ],
      },
      {
        kind: "point",
        text: [
          "For each course, the knowledge level of course contents is identified using revised Bloom's taxonomy and corresponding course outcomes are formulated. Curriculum compliance may be verified by organizing the information into a matrix (course-PO matrix) which maps each one to the other.",
        ],
      },
      {
        kind: "point",
        text: [
          "Mapping not only provides the information of whether curriculum meets the academic and/or professional benchmark requirements (POs), but also manifests the way and possible level of attaining the POs by curriculum.",
        ],
      },
    ],
  },
  {
    method: "Conceptual Implementation in Practice",
    blocks: [
      {
        kind: "point",
        text: [
          "Students can implement ",
          { bold: "mini/design and main projects" },
          " during their last 2 years of study. The faculty can chose project groups based on their area of specialization, and then the faculty can help to students in better understanding of new technologies, modern tools and complexities of their project related topics. Also encouraged them to participate in various project exhibitions and hackathons.",
        ],
      },
      {
        kind: "image",
        file: "tlp-picture9.png",
        alt: "Smart India Hackathon 2020 participation",
        caption:
          "Students from sixth semester have participated in Smart India Hackathon 2020 and they are shortlisted to final round",
      },
      {
        kind: "point",
        text: [
          { bold: "Industrial Visits and training" },
          " are organized for students to bridge the gap between theoretical and practical training in real- life environment. Students understand the industrial practices and organizational hierarchy during industrial visits. Industrial Visits provide opportunities for active/interactive learning experiences outside classroom environment in addition to usual classroom learning.",
        ],
      },
      {
        kind: "image",
        file: "tlp-picture11.png",
        alt: "Industrial visit",
      },
      {
        kind: "point",
        text: [
          "Department of CSE is supporting students to increase levels of awareness and responsibility to achieve ",
          { bold: "Environmental Sustainability." },
        ],
      },
      {
        kind: "image",
        file: "tlp-picture10.png",
        alt: "Environmental sustainability activity",
      },
    ],
  },
  {
    method: "Technical Advancement",
    blocks: [
      {
        kind: "point",
        text: [
          "Department of CSE is organizing workshops, seminars and Technical festivals for students to improve their knowledge about the new trends and innovations in the field of computer science.",
        ],
      },
      {
        kind: "image",
        file: "tlp-picture12.png",
        alt: "Workshops, seminars and technical festivals",
      },
    ],
  },
  {
    method: "Collaboration with Infosys - Campuz Connect / InfiTq",
    blocks: [
      {
        kind: "point",
        text: [
          "Campus Connect / InfiTQ is a unique academia-industry initiative to align engineering student competencies with industry needs and thus increase the employability of the students. Teaching staff are trained by Infosys through Faculty Enablement Program. Students undergo Foundation Program (FP) training through these trained faculty members and is very useful for students to brush up their skills.",
        ],
      },
      {
        kind: "image",
        file: "tlp-picture13.png",
        alt: "FDP conducted by Infosys Campus Connect on InfyTQ",
        caption:
          "Mr. Arun K and Ms. Baby V, Asst. Professors attended FDP conducted by Infosys Campus Connect on InfyTQ based at Vidya College of Engineering",
      },
      {
        kind: "image",
        file: "tlp-picture14.png",
        alt: "Silver Partner Recognition by Infosys Campuz Connect",
        caption: "Silver Partner Recognition by Infosys Campuz Connect.",
      },
    ],
  },
  {
    method: "Value Added Courses",
    blocks: [
      {
        kind: "point",
        text: [
          "CSE Department is conducting Value Added Courses during each semester to improve students' knowledge regarding new technologies and content beyond syllabus. For that a minimum of 30 hours classes are conducted and also certificate will be provided as per the performance in examination.",
        ],
      },
    ],
  },
  {
    method: "Assignments / Tutorials",
    blocks: [
      {
        kind: "point",
        text: [
          "Assignments and Tutorials are provided by the Department as per Syllabus. The students are expected to gain knowledge on their own while preparing Assignment from various resources for a particular topic.",
        ],
      },
      {
        kind: "point",
        text: [
          "Tutorial classes are facilitated by a tutor and are run in smaller groups of max 30 students. Tutorials allow group discussion of lecture content and assessment, problem solving etc.",
        ],
      },
    ],
  },
  {
    method: "Remedial Classes",
    blocks: [
      {
        kind: "point",
        text: [
          "Remedial teaching is identifying slow learners and providing them with the necessary help and guidance to help them overcome their problems, after identifying their areas of difficulty",
        ],
      },
    ],
  },
];

function RichLine({ text }: { text: RichText }) {
  return (
    <>
      {text.map((part, index) =>
        typeof part === "string" ? (
          <span key={index}>{part}</span>
        ) : (
          <strong key={index} className="font-semibold text-navy-950">
            {part.bold}
          </strong>
        )
      )}
    </>
  );
}

function BlockView({ block }: { block: Block }) {
  if (block.kind === "point") {
    return (
      <div className="flex items-start gap-3">
        <ChevronRight
          size={18}
          strokeWidth={2.5}
          className="mt-1.5 shrink-0 text-gold-500"
        />
        <p className="text-base leading-8 text-slate-600">
          <RichLine text={block.text} />
        </p>
      </div>
    );
  }

  if (block.kind === "link") {
    return (
      <a
        href={block.href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block break-all font-semibold text-gold-600 transition-colors hover:text-gold-500 hover:underline"
      >
        {block.label}
      </a>
    );
  }

  return (
    <figure className="mx-auto w-full max-w-3xl">
      <div className="relative h-56 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50 sm:h-72">
        <Image
          src={`${IMAGE_BASE}/${block.file}`}
          alt={block.alt}
          fill
          sizes="(min-width: 1024px) 768px, 100vw"
          className="object-contain"
        />
      </div>
      {block.caption && (
        <figcaption className="mt-3 text-center text-sm font-semibold text-slate-600">
          {block.caption}
        </figcaption>
      )}
    </figure>
  );
}

export default function TlpPage() {
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
            Teaching &amp; Learning <span className="italic text-[#D2B87C]">Process</span>
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
                Teaching &amp; Learning Process
              </h2>
              <div className="mt-3 h-1 w-12 bg-gold-500" />
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
              {/* Header row */}
              <div className="hidden bg-navy-950 text-white md:grid md:grid-cols-[260px_1fr]">
                <div className="px-5 py-3 font-semibold uppercase tracking-wide">
                  Teaching Methods
                </div>
                <div className="px-5 py-3 font-semibold uppercase tracking-wide">
                  Description
                </div>
              </div>

              {/* Body rows */}
              {tlpRows.map((row, index) => (
                <div
                  key={row.method}
                  className={`grid grid-cols-1 border-t border-slate-200 first:border-t-0 md:grid-cols-[260px_1fr] md:border-t ${
                    index % 2 === 0 ? "bg-white" : "bg-slate-50"
                  }`}
                >
                  <div className="bg-gold-500/10 px-5 py-4 font-display text-base font-bold text-navy-950 md:bg-transparent md:py-6">
                    {row.method}
                  </div>
                  <div className="space-y-5 px-5 py-5 md:py-6">
                    {row.blocks.map((block, blockIndex) => (
                      <BlockView key={blockIndex} block={block} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  );
}