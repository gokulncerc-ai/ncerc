import Image from "next/image";
import { ExternalLink } from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../DepartmentNav/page";

// Adjust these bases to wherever you moved the images inside /public
const LOCAL_BASE = "/images/dpt/electronics-and-communication-engineering/activities";
const ROOT_BASE = "/images/dpt/electronics-and-communication-engineering/activities";

type Activity = {
  image: string;
  title?: string;
  paragraphs: string[];
  meta?: string[];
  link?: { href: string; external: boolean };
};

const activities: Activity[] = [
  {
    image: `${LOCAL_BASE}/IV_keltron.png`,
    title: "Industrial Visit - Keltron",
    paragraphs: [
      "An industrial visit was organized for the students of Electrical & Electronics Engineering (EEE) and Electronics & Communication Engineering (ECE) on November 29. The visit was aimed at providing practical exposure to electronic manufacturing processes, industrial workflows, and real-world applications of transducers used in various sectors.",
    ],
    link: { href: "/images/dpt/electronics-and-communication-engineering/documents/IV-report-to-KELTRON.pdf", external: true },
  },
  {
    image: `${LOCAL_BASE}/tech_talk.png`,
    title: "Tech Talk on Research Opportunities in Space Application",
    paragraphs: [
      "The Department of Electronics and Communication Engineering organized an expert talk on Emerging Trends in Space Technology and Remote Sensing on 10th October 2025. The session was led by Dr. J.K.K., an eminent scientist known for his contributions to space research and education. The objective of this lecture was to expose students to the current developments in satellite technology, miniaturized electronics, GIS, and remote sensing systems that form the foundation of modern communication and geospatial studies.",
    ],
    link: { href: "/images/dpt/electronics-and-communication-engineering/documents/Report on tech-talk.pdf", external: true },
  },
  {
    image: `${LOCAL_BASE}/Inker_IV.png`,
    title: "Industrial Visit - Inker Robotics",
    paragraphs: [
      "The Department of Electronics and Communication Engineering (ECE) of Nehru College of Engineering and Research Centre, Pampady, organized an industrial visit for the third and fourth-year ECE students to Inker Robotics, Thrissur, on 22nd September 2025. The core objective of this visit was to give students practical insights into robotics and emerging futuristic technologies, which would enable them to connect their theoretical knowledge with real-world applications. By participating in such visits, students are better prepared to face the demands of a competitive industry, while also developing a deeper understanding of the scope and potential of their field of study.",
    ],
    link: { href: "/images/dpt/electronics-and-communication-engineering/documents/inker-IV-report.pdf", external: true },
  },
  {
    image: `${LOCAL_BASE}/inaugural_report.png`,
    title: "Inaugural Ceremony",
    paragraphs: [
      "The inaugural ceremony of \u201cFrom Circuits to Cyborgs: How Electronics Engineers Drive the Robotics Revolution\u201d was held on 23rd August 2025 at 9:30 AM in Aryabhatta Hall, NCERC.",
    ],
    link: { href: "/images/dpt/electronics-and-communication-engineering/documents/inaugural report.pdf", external: true },
  },
  {
    image: `${LOCAL_BASE}/bridge-the-gap.png`,
    title: "Bridging the Industrial Gap",
    paragraphs: [
      "An awareness session on \u201cBridging the Industrial Gap\u201d was organized by the Department of Electronics and Communication Engineering to help students understand industry expectations and essential professional skills. Conducted in collaboration with Romid Solutions, the interactive session provided insights into current industrial trends, technical competencies, and soft skills required for career readiness. The event, coordinated by Arjun and team, concluded with an encouraging note from the Head of the Department, motivating students to become industry-ready professionals.",
    ],
    link: { href: "/images/dpt/electronics-and-communication-engineering/documents/bridge-the-gap.pdf", external: true },
  },
  {
    image: `${ROOT_BASE}/atal.jpg`,
    title: "AICTE Training And Learning (ATAL) Academy",
    paragraphs: [
      "AICTE Training And Learning (ATAL) Academy Sponsored 6 Days Online FDP on \u201cIndian Health, Wellness & Psychology (Including Ayurveda)\u201d 20.01.2025 \u2013 25.01.2025 / Time 6:00 PM \u2013 9:00 PM, Organized by the Department of ECE, NCERC.",
    ],
    link: { href: "/media_gallery/news_and_events/events", external: true },
  },
  {
    image: `${ROOT_BASE}/NCETSE_.png`,
    title: "NSITE 2025 - Project",
    paragraphs: [
      "The National Conference on Emerging Trends in Science and Engineering (NCETSE-2025), organized by Nehru College of Engineering and Research Centre (NCERC) in association with IETE Palakkad & Kozhikode Sub-Centres, was successfully held on January 16-17, 2025, as part of Nehru Science Innovation and Technology Expo (NSITE 2025).",
    ],
    link: { href: "https://ncerc.ac.in/news/820", external: true },
  },
  {
    image: `${ROOT_BASE}/roboblitz.png`,
    title: "One Day Hands-on Workshop on Introduction to Robotics",
    paragraphs: [
      "A one day Hands-on workshop on Introduction to Robotics was organized by Association of Department of ECE (ECHOS) and Institution\u2019s Innovative Council (IIC), NCERC, on 17/10/2024 with an objective of making awareness about automation field among students. As an initial procedure we got permission from HoD and Principal. Then we prepared a brochure, which was also approved by HoD and Principal. Later the brochure was forwarded to students with the registration link. 38 students from third semester and 59 students from first semester registered.",
    ],
  },
  {
    image: `${ROOT_BASE}/FDP.jpg`,
    title:
      "Five-Day FDP on Computational Techniques and AI Applications in Signal Processing and Imaging",
    paragraphs: [
      "The Department of Electronics and Communication Engineering, in association with IEEE SB, NCERC, successfully conducted a Five-Day Faculty Development Programme (FDP) on Computational Techniques and AI Applications in Signal Processing and Imaging from September 23 to 27, 2024. The sessions were held online from 7:00 PM to 8:30 PM, providing an engaging and interactive learning experience.",
    ],
  },
  {
    image: `${ROOT_BASE}/latex.jpg`,
    title: "Workshop on \u2018LaTeX for Technical Writing\u2019",
    paragraphs: [
      "An online workshop on \u2018LaTeX for technical writing\u2019 was conducted by the Association of the Department of ECE, ECHOS, on 12/08/24 for S7 ECE students to provide them with a comprehensive introduction to LaTeX, a powerful typesetting system widely used for technical and scientific documentation. The session was handled by resource person Dr. Shilpa Suresh, Assistant Professor, Department of Mechatronics, Manipal Institute of Technology. The workshop focused on document creation, inserting images, equations, figures and tables, and managing bibliographies and citations. It proved to be highly useful, successfully equipping students with essential LaTeX skills for creating professional technical documents. The session was co-ordinated by Dr. Mredhula L, HoD, Department of ECE and ECHOS Faculty coordinator Dr. Keerthana G.",
    ],
  },
  {
    image: `${ROOT_BASE}/empower_edge.png`,
    title: "EmpowerEdge: Mastering Soft Skills for Success",
    paragraphs: [
      "An orientation session on soft skills, \u2018Empower Edge: Mastering Soft Skills for Success\u2019, was organized by the Association of the Department of ECE \u2013 ECHOS. The session was arranged for the S7 ECE students as a part of their placement training.",
      "The session was handled by Dr. Krishna Kumar T P, HOD, Department of MBA, and discussed the process of soft skills that helps individuals develop interpersonal and communication skills, teamwork, problem solving abilities and emotional intelligence.",
    ],
    meta: [
      "Date: 26/10/23",
      "Venue: Kapila Block, NCERC.",
      "Timings: 9:30 am to 4 pm.",
    ],
    link: { href: "https://ncerc.ac.in/news/666", external: true },
  },
  {
    image: `${ROOT_BASE}/ECHOS-26-09-2023.jpg`,
    paragraphs: [
      "The Inaugural Ceremony of the Department of Electronics and Communication Association ECHOS 23-24 was held on 26th September, 2023 at Aryabhatta Seminar Hall.",
    ],
    link: { href: "https://ncerc.ac.in/news/625", external: true },
  },
  {
    image: `${ROOT_BASE}/alumini talkece.jpeg`,
    paragraphs: [
      "An alumni talk was organized by the association of the Department of Electronics & Communication Engineering - ECHOS on 18th September, 2023 at the Aryabhatta Seminar Hall for the ECE students. The session was headed by our alumnus of the 2015-2019 batch, B.Tech ECE, NCERC, Mr. Jyotish K, who is currently working as the Senior Cloud Security Manager (ZCCA-IA, ZCCP-IA, ZTNA, SNSA, SNSP), Zscaler. The talk was about \u2018Recent Trends in Cyber Security\u2019, in which he gave an overview of the concept, shared the job opportunities in the field of Cyber Security, and cleared the doubts of the students related to that field. He also made us familiar with the depth of an interview, what stages are included, what basic questions students as freshers must be familiar with, and much more. The session was interactive and educative. It was later concluded with a vote of thanks by Ms. Sajitha A S, Asst. Professor, Dept. of ECE.",
    ],
    meta: ["Date: 18/09/2023", "Timings: 10:00 AM - 12:00 PM"],
  },
  {
    image: `${ROOT_BASE}/activities-pic1.jpg`,
    title:
      "Department of Electronics and Communication Engineering Online AICTE-ISTE Induction/Refresher Program 2021-22: Emerging Trends in Embedded Systems and Internet of Things (IoT)",
    paragraphs: [
      "AICTE-ISTE had graciously sponsored the Induction/Refresher Programme on \u201cEmerging Trends in Embedded Systems and IoT\u201d, coordinated by Prof. P. Rajkumar, Senior Assistant Professor, ECE Department, Nehru College of Engineering and Research Centre, after his application for the same was approved by AICTE-ISTE.",
    ],
  },
  {
    image: `${ROOT_BASE}/activities-pic2.jpg`,
    paragraphs: [
      "Department of Electronics and Communication Engineering Association ECHOS 2K22 inaugurated by Er. Dijith P, Technical Lead, Embedded Systems, Wipro Technologies, Cochin, on January 27, 2022 at 2:00 PM.",
    ],
  },
  {
    image: `${ROOT_BASE}/activities-pic3.jpg`,
    paragraphs: [
      "Nehru College of Engineering and Research Centre in association with NITK Surathkal organized an introductory webinar about Virtual Labs on 18th March 2022. The resource person was Dr. Sheena, Associate Professor, NITK Surathkal.",
    ],
  },
];

export default function ActivitiesPage() {
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
            <span className="italic text-[#D2B87C]">Activities</span>
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
          <div className="mx-auto max-w-7xl space-y-10 px-6">
            {activities.map((activity, index) => (
              <div
                key={`${activity.image}-${index}`}
                className="grid grid-cols-1 gap-8 border-b border-slate-200 pb-10 last:border-b-0 lg:grid-cols-12"
              >
                <div className="lg:col-span-4">
                  <div className="relative h-56 w-full overflow-hidden rounded-2xl border border-slate-100 bg-slate-100 p-2 shadow-sm sm:h-64">
                    <Image
                      src={encodeURI(activity.image)}
                      alt={activity.title ?? "Department activity"}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="lg:col-span-8">
                  {activity.title && (
                    <h3 className="font-display text-lg font-semibold text-navy-950">
                      {activity.title}
                    </h3>
                  )}

                  <div className="mt-3 space-y-3">
                    {activity.paragraphs.map((p, i) => (
                      <p
                        key={i}
                        className="text-justify text-base leading-7 text-slate-600"
                      >
                        {p}
                      </p>
                    ))}
                  </div>

                  {activity.meta && (
                    <p className="mt-3 text-sm font-semibold text-navy-950">
                      {activity.meta.map((line, i) => (
                        <span key={i} className="block">
                          {line}
                        </span>
                      ))}
                    </p>
                  )}

                  {activity.link && (
                    <a
                      href={
                        activity.link.href.startsWith("http")
                          ? activity.link.href
                          : encodeURI(activity.link.href)
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold-600 transition hover:text-gold-700"
                    >
                      <ExternalLink size={16} />
                      View Details
                    </a>
                  )}
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