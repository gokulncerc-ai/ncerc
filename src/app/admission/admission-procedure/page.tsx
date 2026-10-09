"use client";

import { useState } from "react";
import type { ElementType } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  Building2,
  Check,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  Copy,
  Cpu,
  CreditCard,
  FileText,
  FlaskConical,
  Globe,
  GraduationCap,
  Laptop,
  Lock,
  MapPin,
  RotateCcw,
  ShieldAlert,
  Users,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import Studentpic from "../../../../public/images/home/studentspicsone.jpg";
import StudenImg from "../../../../public/images/home/Kerala-engineering.png";

/* ============================================================
   TYPES
============================================================ */

type TabKey = "btech" | "mtech" | "mca" | "mba";
type GuideKey = "procedure" | "documents" | "notes";
type StepTarget = "eligibility" | GuideKey;

type EligibilityItem = { title?: string; text: string };
type Highlight = { value: string; label: string };

type Programme = {
  key: TabKey;
  label: string;
  fullName: string;
  icon: ElementType;
  tagline: string;
  heading: string;
  highlights: Highlight[];
  items: EligibilityItem[];
};

/* ============================================================
   DATA
============================================================ */

const programmes: Programme[] = [
  {
    key: "btech",
    label: "B.Tech",
    fullName: "Bachelor of Technology",
    icon: Cpu,
    tagline: "Management, Government & NRI quota",
    heading: "B.Tech Admission",
    highlights: [
      { value: "55%", label: "Marks in Physics, Chemistry & Mathematics" },
      { value: "KEAM / JEE", label: "Valid entrance score" },
      { value: "15%", label: "Seats in the NRI category" },
    ],
    items: [
      {
        title: "Management Quota",
        text: "Candidates who have passed Higher Secondary Examination, Kerala, or examinations majored in Physics, Chemistry and Mathematics subjects with at least 55% marks put together in the above subjects are eligible for admission with a valid score in JEE/KEAM.",
      },
      {
        title: "Government Quota",
        text: "Candidates should qualify (a minimum of 10 marks each in Paper I and Paper II) in the Engineering Entrance Exam conducted by the Commissioner of Entrance Exams, Govt. of Kerala (KEAM) and should be listed in the KEAM Rank List.",
      },
      {
        title: "NRI Quota",
        text: "The College Authorities are entitled to fill up 15% seats in the NRI category by admitting qualified students.",
      },
    ],
  },
  {
    key: "mtech",
    label: "M.Tech",
    fullName: "Master of Technology",
    icon: FlaskConical,
    tagline: "GATE score based admission",
    heading: "M.Tech Admission",
    highlights: [
      { value: "60%", label: "Aggregate in the Engineering Degree" },
      { value: "GATE", label: "Valid score (relaxed for management quota)" },
      { value: "3 yrs", label: "Professional experience for AMIE / AMIETE" },
    ],
    items: [
      { text: "The candidates shall be an Indian National." },
      {
        text: "The candidates should have studied the Graduate course in an institution approved by the AICTE/Deemed Universities.",
      },
      {
        text: "Candidates should have a minimum of 60% aggregate marks in the Engineering Degree examination. For SC/ST candidates a pass in the Engineering Degree course is sufficient. For SEBC students, a minimum of 54% aggregate marks in the Engineering Degree examination is mandatory.",
      },
      {
        text: "Candidates who have passed AMIE / AMIETE Examinations and satisfying the following conditions are eligible for admission.",
      },
      { text: "They must have a valid GATE score." },
      { text: "A minimum of 55% marks for section B in AMIE/AMIETE examination." },
      {
        text: "Minimum three years of professional experience in the field of specialization after acquiring the qualifying degree.",
      },
      {
        text: "Admission shall normally be restricted to those with a valid GATE score. However, this stipulation is relaxed in the case of management quota candidates.",
      },
      {
        text: "In case seats remain vacant due to lack of candidates with a valid GATE score, candidates without a valid GATE score will be considered against such vacancies.",
      },
    ],
  },
  {
    key: "mca",
    label: "MCA",
    fullName: "Master of Computer Applications",
    icon: Laptop,
    tagline: "Through the LBS entrance examination",
    heading: "MCA Admission",
    highlights: [
      { value: "50%", label: "Aggregate marks in any degree" },
      { value: "Maths", label: "Mathematics in the degree" },
      { value: "LBS", label: "MCA Entrance Examination score" },
    ],
    items: [
      {
        text: "Candidates with 50% marks aggregate in any degree with Mathematics and a valid score in the MCA Entrance Examination conducted by LBS.",
      },
    ],
  },
  {
    key: "mba",
    label: "MBA",
    fullName: "Master of Business Administration",
    icon: Briefcase,
    tagline: "Through a KMAT / CMAT / CAT score",
    heading: "MBA Admission",
    highlights: [
      { value: "50%", label: "Aggregate in any recognized degree" },
      { value: "KMAT · CMAT · CAT", label: "A valid score is a must" },
    ],
    items: [
      {
        text: "Candidates with 50% marks aggregate in any Degree from a recognized University with a valid KMAT/CMAT/CAT score is a must for admission.",
      },
    ],
  },
];

const steps: {
  icon: ElementType;
  title: string;
  text: string;
  target: StepTarget;
}[] = [
  {
    icon: GraduationCap,
    title: "Choose your programme",
    text: "Check the eligibility criteria for B.Tech, M.Tech, MCA or MBA.",
    target: "eligibility",
  },
  {
    icon: ClipboardList,
    title: "Apply with documents",
    text: "Submit the application form with attested copies of your certificates.",
    target: "documents",
  },
  {
    icon: BadgeCheck,
    title: "Verify & confirm",
    text: "Admission is confirmed after verification of originals and payment of fees.",
    target: "notes",
  },
];

const requiredDocuments = [
  "S.S.L.C Certificate and Mark List",
  "+2 Certificate and Mark List",
  "UG Degree Mark Lists, Provisional and Certificate (for PG admission)",
  "Transfer Certificate",
  "Conduct Certificate",
  "Migration Certificate",
  "LBS Score Card (for MCA admission)",
  "KEAM / JEE Score Card (for Engineering admission)",
  "NATA / JEE Score Card (for B.Arch admission)",
  "KMAT/CAT/CMAT Score Card (for MBA admission)",
  "Medical Fitness Certificate from a Registered Medical Practitioner",
  "Copy of Aadhaar Card",
  "Passport size photos – 5 Nos. (Colour photos only)",
  "Stamp size photos – 5 Nos.",
  "Parent's Photo – 1 Each",
  "Parent's Aadhaar Card copy – 1 Each",
];

const guideTabs: {
  key: GuideKey;
  label: string;
  hint: string;
  icon: ElementType;
}[] = [
  {
    key: "procedure",
    label: "Admission Procedure",
    hint: "How to apply",
    icon: FileText,
  },
  {
    key: "documents",
    label: "Documents Required",
    hint: `${requiredDocuments.length} documents checklist`,
    icon: CheckCircle2,
  },
  {
    key: "notes",
    label: "Important Notes",
    hint: "Please read before applying",
    icon: ShieldAlert,
  },
];

const applySteps = [
  {
    title: "Obtain the application form",
    text: "Collect the prescribed form from the college / admission office by remitting its cost in cash / DD.",
  },
  {
    title: "Fill in and attach copies",
    text: "Complete the form and attach the attested copies of your certificates.",
  },
  {
    title: "Submit or send it to the Principal",
    text: "Submit the duly filled application at the office or send it to the address shown.",
  },
];

const addressLines = [
  "The Principal",
  "Nehru College of Engineering and Research Centre",
  "Nila Gardens, Pampady, Near Lakkidi Railway Station,",
  "Thiruvilwamala, Thrissur Dt – 680 588 Kerala, India.",
];

const notes: {
  icon: ElementType;
  title: string;
  text: string;
  highlight?: boolean;
}[] = [
  {
    icon: BadgeCheck,
    title: "Confirmation of admission",
    text: "Admission will be confirmed after verification of original certificates and the payment of prescribed fees.",
  },
  {
    icon: ShieldAlert,
    title: "Right to cancel",
    text: "The College Authorities have the right to cancel the admission, if any of the certificates submitted is found false or tampered with, or the eligibility of the candidate is not approved by the University.",
  },
  {
    icon: Building2,
    title: "Visit us for guidance",
    text: "For information regarding admission procedures you can visit our office / college, and our staff will happily guide you to select the suitable course as per your interest (for address, visit our Contact page).",
    highlight: true,
  },
  {
    icon: Globe,
    title: "Online admission portal",
    text: "The online admission portal is open throughout the official admission window.",
  },
  {
    icon: Users,
    title: "Admission Information Centers",
    text: "NGI officials are available at your nearest region. Nehru Group of Institutions has setup Admission Information Centers for the benefit of admission seekers to provide comprehensive guidance regarding course selection and enrollment.",
  },
];

const policies: {
  icon: ElementType;
  title: string;
  accent: string;
  items: string[];
}[] = [
  {
    icon: CreditCard,
    title: "Terms and",
    accent: "Conditions",
    items: [
      "If the payment is successful, you will get a payment confirmation email and the student has to keep the same for reference.",
      "If the transaction has failed for some reasons, you are requested to wait for three working days before trying for payment again. Please contact the accounts department for any discrepancy of online fee faced by you with reference to any of your transaction.",
      "Please make a note of Reference/Transaction Details in case of Net banking or Card payment.",
    ],
  },
  {
    icon: Lock,
    title: "Privacy",
    accent: "Policy",
    items: [
      "All data shall be kept secure, and shall not be revealed to anyone or utilized for any other purpose. The data provided shall be used in connection with online payments.",
    ],
  },
  {
    icon: RotateCcw,
    title: "Cancellation &",
    accent: "Refund Policy",
    items: [
      "There is no cancellation option for the students / parents. In case of duplicate payment, the end user can approach the accounts department in the college for clarification or refund with proof of the transaction. Based on submission of proof of transaction, it shall be verified and refunded.",
    ],
  },
];

/* ============================================================
   HELPERS
============================================================ */

function scrollToId(id: string) {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* ============================================================
   SMALL SHARED PIECES
============================================================ */

function SectionHeading({
  eyebrow,
  title,
  accent,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  accent: string;
  align?: "left" | "center";
}) {
  const centered = align === "center";

  return (
    <div className={centered ? "text-center" : ""}>
      <div
        className={`flex items-center gap-3 ${
          centered ? "justify-center" : ""
        }`}
      >
        <span aria-hidden="true" className="h-px w-8 bg-[#D2B87C]" />
        <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
          {eyebrow}
        </span>
        {centered && (
          <span aria-hidden="true" className="h-px w-8 bg-[#D2B87C]" />
        )}
      </div>

      <h2 className="m-0 mt-3 font-serif text-2xl font-normal leading-tight text-[#20235A] sm:text-3xl">
        {title} <span className="italic text-[#D2B87C]">{accent}</span>
      </h2>

      <div
        aria-hidden="true"
        className={`mt-4 h-0.5 w-12 bg-[#D2B87C] ${
          centered ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}

function PointList({
  items,
  fill = false,
}: {
  items: EligibilityItem[];
  fill?: boolean;
}) {
  return (
    <ul
      className={`m-0 flex list-none flex-col gap-3 p-0 ${
        fill ? "flex-1" : ""
      }`}
    >
      {items.map((item, index) => (
        <li
          key={index}
          className={`flex gap-3 rounded-xl border border-[#E9DFC6] bg-[#FAF7F2] p-4 transition-colors hover:border-[#D2B87C] hover:bg-white ${
            fill ? "flex-1 items-center" : "items-start"
          }`}
        >
          <ChevronRight
            size={18}
            strokeWidth={2.5}
            className="mt-0.5 shrink-0 text-[#D2B87C]"
          />
          <p className="m-0 text-[15px] leading-relaxed text-slate-700">
            {item.title && (
              <span className="mr-1.5 font-semibold text-[#20235A]">
                {item.title}:
              </span>
            )}
            {item.text}
          </p>
        </li>
      ))}
    </ul>
  );
}

/* ============================================================
   PAGE
============================================================ */

export default function AdmissionProcedurePage() {
  const [activeTab, setActiveTab] = useState<TabKey>("btech");
  const [guideTab, setGuideTab] = useState<GuideKey>("procedure");
  const [checkedDocs, setCheckedDocs] = useState<number[]>([]);
  const [copied, setCopied] = useState(false);

  const activeProgramme =
    programmes.find((programme) => programme.key === activeTab) ??
    programmes[0];

  const totalDocs = requiredDocuments.length;
  const readyDocs = checkedDocs.length;
  const progress = Math.round((readyDocs / totalDocs) * 100);

  function openGuide(key: GuideKey) {
    setGuideTab(key);
    scrollToId("guide");
  }

  function handleStep(target: StepTarget) {
    if (target === "eligibility") {
      scrollToId("eligibility");
    } else {
      openGuide(target);
    }
  }

  function selectProgramme(key: TabKey) {
    setActiveTab(key);
    scrollToId("eligibility");
  }

  function toggleDoc(index: number) {
    setCheckedDocs((previous) =>
      previous.includes(index)
        ? previous.filter((value) => value !== index)
        : [...previous, index]
    );
  }

  async function copyAddress() {
    try {
      await navigator.clipboard.writeText(addressLines.join(", "));
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <>
      <style>{`
        @keyframes admissionFadeUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: none; }
        }
        .admission-fade { animation: admissionFadeUp 0.35s ease both; }
        @media (prefers-reduced-motion: reduce) {
          .admission-fade { animation: none; }
        }
      `}</style>

      <SiteHeader />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative isolate overflow-hidden bg-[#20235A]">
        <div className="absolute inset-0 -z-20">
          <Image
            src={Studentpic}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-[0.12] grayscale"
          />
        </div>

        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#20235A]/95 via-[#20235A]/92 to-[#15183f]/95" />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-28 -top-28 h-[420px] w-[420px] rounded-full border border-[#D2B87C]/20"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 -left-24 h-[380px] w-[380px] rounded-full border border-white/5"
        />

        <div className="mx-auto max-w-7xl px-6 pb-20 pt-12 sm:px-8 sm:pb-24 sm:pt-14 lg:px-12 lg:pb-24 lg:pt-16">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-14">
            {/* Text */}
            <div>
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="h-px w-10 bg-[#D2B87C]" />
                <p className="m-0 text-xs font-semibold uppercase tracking-[0.28em] text-[#D2B87C] sm:text-sm">
                  Admissions
                </p>
              </div>

              <h1 className="m-0 mt-4 font-serif text-4xl font-normal leading-[1.08] tracking-[-0.025em] text-white sm:text-5xl lg:text-6xl">
                Admission{" "}
                <span className="italic text-[#D2B87C]">Procedure</span>
              </h1>

              <div aria-hidden="true" className="mt-6 h-px w-20 bg-[#D2B87C]" />

              <p className="m-0 mt-6 max-w-xl text-base leading-8 text-white/70 sm:text-lg">
                Everything you need to apply to Nehru College of Engineering
                and Research Centre: eligibility, required documents and the
                steps to confirm your seat.
              </p>

              <div className="mt-8">
                <p className="m-0 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                  Check eligibility for
                </p>

                <div className="mt-3 grid max-w-md grid-cols-2 gap-3 sm:grid-cols-4">
                  {programmes.map((programme) => (
                    <button
                      key={programme.key}
                      type="button"
                      onClick={() => selectProgramme(programme.key)}
                      className="rounded-xl border border-[#D2B87C]/50 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#D2B87C] hover:text-[#20235A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D2B87C]"
                    >
                      {programme.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Image card */}
            <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
              <div className="relative aspect-[16/11] overflow-hidden rounded-2xl border border-[#D2B87C]/40 bg-[#15183f] shadow-2xl">
                <Image
                  src={StudenImg}
                  alt="Nehru College of Engineering and Research Centre students"
                  fill
                  priority
                  placeholder="blur"
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute left-0 top-0 h-16 w-16 border-l-[5px] border-t-[5px] border-[#D2B87C]"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#20235A]/95 to-transparent px-5 pb-4 pt-12">
                  <p className="m-0 text-xs font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                    NCERC
                  </p>
                  <p className="m-0 mt-1 font-serif text-lg leading-snug text-white">
                    Nehru College of Engineering &amp; Research Centre
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-1 bg-[#D2B87C]"
        />
      </section>

      <main className="bg-[#FAF7F2]">
        {/* =========================================================
            STEPS STRIP (overlaps the hero, clickable)
        ========================================================= */}
        <section className="relative z-10 -mt-10 px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <ol className="m-0 grid list-none gap-px overflow-hidden rounded-2xl border border-[#D2B87C]/40 bg-[#D2B87C]/30 p-0 shadow-xl md:grid-cols-3">
              {steps.map(({ icon: Icon, title, text, target }, index) => (
                <li key={title} className="bg-white">
                  <button
                    type="button"
                    onClick={() => handleStep(target)}
                    className="group flex h-full w-full items-start gap-4 px-5 py-5 text-left transition-colors duration-200 hover:bg-[#FAF7F2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#D2B87C] sm:px-6"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#20235A] text-[#D2B87C] transition-transform duration-200 group-hover:scale-105">
                      <Icon size={20} strokeWidth={1.6} />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                        Step {index + 1}
                      </span>
                      <span className="mt-1 block font-serif text-lg leading-tight text-[#20235A]">
                        {title}
                      </span>
                      <span className="mt-1.5 block text-sm leading-relaxed text-slate-600">
                        {text}
                      </span>
                    </span>

                    <ArrowRight
                      size={18}
                      className="mt-1 shrink-0 text-[#D2B87C] transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </button>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* =========================================================
            ELIGIBILITY
        ========================================================= */}
        <section
          id="eligibility"
          className="scroll-mt-20 py-12 sm:py-14 lg:py-16"
        >
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <SectionHeading
              eyebrow="Requirements"
              title="Program"
              accent="Eligibility Criteria"
            />

            {/* Programme selector */}
            <div
              role="tablist"
              aria-label="Programme"
              className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
            >
              {programmes.map((programme) => {
                const isActive = programme.key === activeTab;
                const Icon = programme.icon;

                return (
                  <button
                    key={programme.key}
                    type="button"
                    role="tab"
                    id={`tab-${programme.key}`}
                    aria-selected={isActive}
                    aria-controls="eligibility-panel"
                    onClick={() => setActiveTab(programme.key)}
                    className={`relative overflow-hidden rounded-2xl border p-4 text-left transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D2B87C] sm:p-5 ${
                      isActive
                        ? "border-[#D2B87C] bg-[#20235A] text-white shadow-lg"
                        : "border-[#E9DFC6] bg-white text-[#20235A] hover:-translate-y-0.5 hover:border-[#D2B87C] hover:shadow-md"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${
                          isActive
                            ? "border-[#D2B87C]/70 text-[#D2B87C]"
                            : "border-[#D2B87C]/60 bg-[#FAF7F2] text-[#8F7746]"
                        }`}
                      >
                        <Icon size={22} strokeWidth={1.5} />
                      </span>

                      <span className="min-w-0">
                        <span className="block font-serif text-xl leading-tight">
                          {programme.label}
                        </span>
                        <span
                          className={`mt-0.5 block text-xs leading-snug ${
                            isActive ? "text-white/70" : "text-slate-500"
                          }`}
                        >
                          {programme.fullName}
                        </span>
                      </span>
                    </span>

                    <span
                      className={`mt-3 block text-xs font-semibold uppercase tracking-[0.14em] ${
                        isActive ? "text-[#D2B87C]" : "text-[#8F7746]"
                      }`}
                    >
                      {programme.tagline}
                    </span>

                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-0 bottom-0 h-1 bg-[#D2B87C] transition-opacity duration-200 ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Panel */}
            <div
              key={activeProgramme.key}
              id="eligibility-panel"
              role="tabpanel"
              aria-labelledby={`tab-${activeProgramme.key}`}
              className="admission-fade mt-5 grid items-stretch gap-5 lg:grid-cols-[340px_minmax(0,1fr)]"
            >
              {/* Key facts card */}
              <div className="relative flex min-h-[320px] flex-col justify-between overflow-hidden rounded-2xl bg-[#20235A] p-6 text-white shadow-lg sm:p-7">
                <Image
                  src={Studentpic}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 340px, 100vw"
                  className="object-cover opacity-[0.12] grayscale"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-br from-[#20235A]/95 to-[#15183f]/95"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1 bg-[#D2B87C]"
                />

                <div className="relative">
                  <p className="m-0 text-xs font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                    Key facts
                  </p>
                  <h3 className="m-0 mt-3 font-serif text-2xl font-normal leading-tight text-white">
                    {activeProgramme.fullName}
                  </h3>
                </div>

                <div className="relative mt-8 divide-y divide-[#D2B87C]/25">
                  {activeProgramme.highlights.map((highlight) => (
                    <div
                      key={highlight.label}
                      className="py-4 first:pt-0 last:pb-0"
                    >
                      <p className="m-0 font-serif text-3xl leading-tight text-[#D2B87C]">
                        {highlight.value}
                      </p>
                      <p className="m-0 mt-1 text-sm leading-snug text-white/70">
                        {highlight.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Criteria card */}
              <div className="flex flex-col rounded-2xl border border-[#E9DFC6] bg-white p-5 shadow-sm sm:p-7">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="m-0 font-serif text-xl font-normal text-[#20235A] sm:text-2xl">
                    Eligibility for{" "}
                    <span className="italic text-[#D2B87C]">
                      {activeProgramme.heading}
                    </span>
                  </h3>

                  <span className="hidden shrink-0 rounded-full border border-[#D2B87C]/60 bg-[#FAF7F2] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#8F7746] sm:inline-block">
                    {activeProgramme.items.length}{" "}
                    {activeProgramme.items.length === 1
                      ? "criterion"
                      : "criteria"}
                  </span>
                </div>

                <div
                  aria-hidden="true"
                  className="mt-3 h-0.5 w-12 bg-[#D2B87C]"
                />

                <div className="mt-5 flex flex-1 flex-col">
                  {activeProgramme.items.length === 1 ? (
                    <div className="relative flex flex-1 items-center rounded-xl border border-[#D2B87C]/50 bg-[#FAF7F2] p-6 sm:p-8">
                      <span
                        aria-hidden="true"
                        className="absolute inset-y-0 left-0 w-1.5 rounded-l-xl bg-[#D2B87C]"
                      />
                      <p className="m-0 pl-3 font-serif text-lg leading-relaxed text-[#20235A] sm:text-2xl">
                        {activeProgramme.items[0].text}
                      </p>
                    </div>
                  ) : (
                    <PointList items={activeProgramme.items} fill />
                  )}
                </div>

                <div className="mt-6 flex flex-col gap-3 border-t border-[#E9DFC6] pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <p className="m-0 text-sm text-slate-600">
                    Ready to apply? See the documents you will need.
                  </p>

                  <button
                    type="button"
                    onClick={() => openGuide("documents")}
                    className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#20235A] px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#15183f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D2B87C]"
                  >
                    <span>Documents required</span>
                    <ArrowRight
                      size={16}
                      className="text-[#D2B87C] transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            APPLICATION GUIDE
        ========================================================= */}
        <section
          id="guide"
          className="scroll-mt-20 bg-white py-12 sm:py-14 lg:py-16"
        >
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <SectionHeading
              eyebrow="Process & Submission"
              title="Application"
              accent="Guide"
            />

            {/* Guide tabs */}
            <div
              role="tablist"
              aria-label="Application guide"
              className="mt-7 grid gap-3 sm:grid-cols-3"
            >
              {guideTabs.map((tab) => {
                const isActive = tab.key === guideTab;
                const Icon = tab.icon;

                return (
                  <button
                    key={tab.key}
                    type="button"
                    role="tab"
                    id={`guide-tab-${tab.key}`}
                    aria-selected={isActive}
                    aria-controls="guide-panel"
                    onClick={() => setGuideTab(tab.key)}
                    className={`flex items-center gap-4 rounded-xl border px-5 py-4 text-left transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D2B87C] ${
                      isActive
                        ? "border-[#D2B87C] bg-[#20235A] text-white shadow-md"
                        : "border-[#E9DFC6] bg-[#FAF7F2] text-[#20235A] hover:border-[#D2B87C] hover:bg-white"
                    }`}
                  >
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border ${
                        isActive
                          ? "border-[#D2B87C]/70 text-[#D2B87C]"
                          : "border-[#D2B87C]/60 bg-white text-[#8F7746]"
                      }`}
                    >
                      <Icon size={19} />
                    </span>

                    <span className="min-w-0">
                      <span className="block font-serif text-lg leading-tight">
                        {tab.label}
                      </span>
                      <span
                        className={`mt-0.5 block text-xs ${
                          isActive ? "text-white/70" : "text-slate-500"
                        }`}
                      >
                        {tab.hint}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Guide panel */}
            <div
              key={guideTab}
              id="guide-panel"
              role="tabpanel"
              aria-labelledby={`guide-tab-${guideTab}`}
              className="admission-fade mt-5 rounded-2xl border border-[#E9DFC6] bg-[#FAF7F2] p-4 sm:p-6"
            >
              {/* Procedure */}
              {guideTab === "procedure" && (
                <div className="grid items-stretch gap-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
                  <div className="flex flex-col justify-between rounded-xl border border-[#E9DFC6] bg-white p-5 sm:p-6">
                    <p className="m-0 text-[15px] leading-relaxed text-slate-700">
                      You can obtain the prescribed application form of the
                      college / admission office by remitting the cost of it
                      in cash/DD. Submit / send the duly filled up
                      application along with the attested copies of
                      certificates to the address given.
                    </p>

                    <ol className="m-0 mt-6 list-none p-0">
                      {applySteps.map((step, index) => (
                        <li
                          key={step.title}
                          className="relative flex gap-4 pb-6 last:pb-0"
                        >
                          {index < applySteps.length - 1 && (
                            <span
                              aria-hidden="true"
                              className="absolute bottom-0 left-[19px] top-10 w-px bg-[#D2B87C]/60"
                            />
                          )}

                          <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#20235A] font-serif text-lg text-[#D2B87C]">
                            {index + 1}
                          </span>

                          <div>
                            <p className="m-0 font-serif text-lg leading-tight text-[#20235A]">
                              {step.title}
                            </p>
                            <p className="m-0 mt-1 text-sm leading-relaxed text-slate-600">
                              {step.text}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div className="relative flex flex-col justify-between overflow-hidden rounded-xl bg-[#20235A] p-6 text-white sm:p-7">
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full border border-[#D2B87C]/20"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -bottom-20 -left-16 h-48 w-48 rounded-full border border-white/5"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 top-0 h-1 bg-[#D2B87C]"
                    />

                    <div className="relative">
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#D2B87C]/60 text-[#D2B87C]">
                        <MapPin size={22} strokeWidth={1.5} />
                      </span>

                      <p className="m-0 mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                        Postal Address
                      </p>

                      <address className="m-0 mt-3 font-serif text-lg not-italic leading-relaxed text-white">
                        {addressLines.map((line) => (
                          <span key={line} className="block">
                            {line}
                          </span>
                        ))}
                      </address>
                    </div>

                    <button
                      type="button"
                      onClick={copyAddress}
                      className="relative mt-6 inline-flex items-center justify-center gap-2 rounded-xl border border-[#D2B87C] px-5 py-2.5 text-sm font-semibold text-[#D2B87C] transition-colors duration-200 hover:bg-[#D2B87C] hover:text-[#20235A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    >
                      {copied ? (
                        <>
                          <Check size={16} />
                          <span>Address copied</span>
                        </>
                      ) : (
                        <>
                          <Copy size={16} />
                          <span>Copy address</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}

              {/* Documents */}
              {guideTab === "documents" && (
                <div>
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <h3 className="m-0 font-serif text-xl font-normal text-[#20235A] sm:text-2xl">
                        Apply online with the following{" "}
                        <span className="italic text-[#D2B87C]">
                          required documents
                        </span>
                      </h3>
                      <p className="m-0 mt-1 text-sm text-slate-600">
                        Tick each document as you gather it to track your
                        progress.
                      </p>
                    </div>

                    <div className="w-full sm:w-64 sm:shrink-0">
                      <div className="flex items-center justify-between text-xs font-semibold text-[#8F7746]">
                        <span>
                          {readyDocs} of {totalDocs} ready
                        </span>
                        <button
                          type="button"
                          onClick={() => setCheckedDocs([])}
                          disabled={readyDocs === 0}
                          className="uppercase tracking-wider transition-colors hover:text-[#20235A] disabled:cursor-not-allowed disabled:opacity-40"
                        >
                          Reset
                        </button>
                      </div>

                      <div className="mt-2 h-2 overflow-hidden rounded-full bg-[#E9DFC6]">
                        <div
                          className="h-full rounded-full bg-[#D2B87C] transition-all duration-300"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  <ul className="m-0 mt-5 grid list-none gap-3 p-0 sm:grid-cols-2 lg:grid-cols-3">
                    {requiredDocuments.map((document, index) => {
                      const checked = checkedDocs.includes(index);

                      return (
                        <li key={document}>
                          <button
                            type="button"
                            role="checkbox"
                            aria-checked={checked}
                            onClick={() => toggleDoc(index)}
                            className={`flex h-full w-full items-start gap-3 rounded-xl border bg-white p-3.5 text-left transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D2B87C] ${
                              checked
                                ? "border-[#D2B87C] shadow-sm"
                                : "border-[#E9DFC6] hover:border-[#D2B87C]/70"
                            }`}
                          >
                            <span
                              className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-colors duration-200 ${
                                checked
                                  ? "border-[#20235A] bg-[#20235A] text-[#D2B87C]"
                                  : "border-[#D2B87C]/70 bg-white text-transparent"
                              }`}
                            >
                              <Check size={13} strokeWidth={3} />
                            </span>

                            <span
                              className={`text-sm leading-snug ${
                                checked
                                  ? "text-[#20235A]"
                                  : "text-slate-700"
                              }`}
                            >
                              {document}
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>

                  <div className="mt-5 flex items-start gap-3 rounded-xl border border-[#D2B87C]/50 bg-white p-4">
                    <ShieldAlert
                      size={20}
                      className="mt-0.5 shrink-0 text-[#8F7746]"
                    />
                    <p className="m-0 text-sm font-semibold leading-relaxed text-[#20235A]">
                      Note: Original Certificate + 3 sets of self-attested
                      copies are mandatory during physical verification.
                    </p>
                  </div>
                </div>
              )}

              {/* Notes */}
              {guideTab === "notes" && (
                <div className="grid gap-4 md:grid-cols-2">
                  {notes.map(({ icon: Icon, title, text, highlight }, index) => {
                    const spansFull =
                      index === notes.length - 1 && notes.length % 2 === 1;

                    return (
                      <article
                        key={title}
                        className={`flex items-start gap-4 rounded-xl border p-5 sm:p-6 ${
                          highlight
                            ? "border-[#D2B87C] bg-[#20235A] text-white"
                            : "border-[#E9DFC6] bg-white text-slate-700"
                        } ${spansFull ? "md:col-span-2" : ""}`}
                      >
                        <span
                          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${
                            highlight
                              ? "border-[#D2B87C]/70 text-[#D2B87C]"
                              : "border-[#D2B87C]/60 bg-[#FAF7F2] text-[#8F7746]"
                          }`}
                        >
                          <Icon size={20} strokeWidth={1.6} />
                        </span>

                        <div>
                          <h3
                            className={`m-0 font-serif text-lg font-normal leading-tight ${
                              highlight ? "text-white" : "text-[#20235A]"
                            }`}
                          >
                            {title}
                          </h3>
                          <p
                            className={`m-0 mt-2 text-[15px] leading-relaxed ${
                              highlight ? "text-white/75" : "text-slate-600"
                            }`}
                          >
                            {text}
                          </p>
                        </div>
                      </article>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Guidance band */}
            <div className="relative mt-8 grid overflow-hidden rounded-2xl bg-[#20235A] shadow-xl md:grid-cols-2">
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 z-10 h-1 bg-[#D2B87C]"
              />

              <div className="relative z-10 flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                <p className="m-0 text-xs font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                  Admission support
                </p>

                <h3 className="m-0 mt-3 font-serif text-3xl font-normal leading-tight text-white">
                  Need{" "}
                  <span className="italic text-[#D2B87C]">guidance?</span>
                </h3>

                <p className="m-0 mt-3 max-w-md text-sm leading-relaxed text-white/70 sm:text-base">
                  Visit our office or college and our staff will happily help
                  you choose the course that suits your interest. NGI
                  officials are also available at Admission Information
                  Centers in your region.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#D2B87C] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-[#20235A] transition-colors duration-300 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    <span>Contact Us</span>
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>

                  <button
                    type="button"
                    onClick={() => scrollToId("eligibility")}
                    className="inline-flex items-center justify-center rounded-xl border border-[#D2B87C]/60 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-[#D2B87C] transition-colors duration-300 hover:border-[#D2B87C] hover:bg-[#D2B87C]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D2B87C]"
                  >
                    Check eligibility
                  </button>
                </div>
              </div>

              <div className="relative min-h-[220px] md:min-h-full">
                <Image
                  src={StudenImg}
                  alt="Students at Nehru College of Engineering and Research Centre"
                  fill
                  placeholder="blur"
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-b from-[#20235A] via-[#20235A]/20 to-transparent md:bg-gradient-to-r"
                />
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            POLICIES
        ========================================================= */}
        <section className="py-12 sm:py-14 lg:py-16">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <SectionHeading
              eyebrow="Payments"
              title="Policies &"
              accent="Terms"
              align="center"
            />

            <div className="mt-8 overflow-hidden rounded-2xl border border-[#E9DFC6] bg-white shadow-sm">
              {policies.map(({ icon: Icon, title, accent, items }, index) => (
                <article
                  key={title}
                  className={`grid md:grid-cols-[260px_minmax(0,1fr)] ${
                    index > 0 ? "border-t border-[#E9DFC6]" : ""
                  }`}
                >
                  <div className="flex items-center gap-3 bg-[#20235A] px-5 py-5 sm:px-6">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#D2B87C]/60 text-[#D2B87C]">
                      <Icon size={20} strokeWidth={1.6} />
                    </span>

                    <h3 className="m-0 font-serif text-xl font-normal leading-tight text-white">
                      {title}{" "}
                      <span className="italic text-[#D2B87C]">{accent}</span>
                    </h3>
                  </div>

                  <ul className="m-0 flex list-none flex-col justify-center gap-3 p-5 sm:p-6">
                    {items.map((text) => (
                      <li key={text} className="flex items-start gap-3">
                        <span
                          aria-hidden="true"
                          className="mt-[9px] h-1.5 w-1.5 shrink-0 rotate-45 bg-[#D2B87C]"
                        />
                        <p className="m-0 text-[15px] leading-7 text-slate-700">
                          {text}
                        </p>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}