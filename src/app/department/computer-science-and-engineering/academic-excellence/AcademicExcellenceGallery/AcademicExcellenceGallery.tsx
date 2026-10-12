"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Landmark, Star, Trophy, type LucideIcon } from "lucide-react";

const RANK_HOLDERS_IMAGE_BASE = "/images/dpt/computer-science-and-engineering";
const TOPPERS_IMAGE_BASE =
  "/images/dpt/computer-science-and-engineering/department-toppers";

function toSrc(base: string, path: string) {
  return encodeURI(`${base}/${path}`);
}


type RankBatch = {
  batch: string;
  description?: string;
  image: string;
};

const rankBatches: RankBatch[] = [
  {
    batch: "2016-2020 Batch",
    description:
      "University 10th rank holder in Computer Science and Engineering, 2016-20 batch. CGPA \u2013 9.5. Sneha T.",
    image: "Sneha-T.jpg",
  },
  {
    batch: "2014-2018 Batch",
    image: "university-toppers.jpg",
  },
];

function UniversityRankHoldersContent() {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      {rankBatches.map((item, index) => (
        <article
          key={item.batch}
          className="group flex h-full flex-col border border-[#20235A]/10 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#D2B87C] sm:p-6"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#20235A] text-[10px] font-semibold text-[#D2B87C]">
              {String(index + 1).padStart(2, "0")}
            </div>

            <div className="min-w-0">
              <h3 className="font-serif text-xl leading-snug text-[#20235A] sm:text-2xl">
                {item.batch}
              </h3>

              {item.description && (
                <p className="mt-2 text-sm leading-7 text-[#1E1917]/65 sm:text-[15px]">
                  {item.description}
                </p>
              )}
            </div>
          </div>

          <div className="relative mt-5 h-64 w-full overflow-hidden border border-[#20235A]/10 bg-[#F2EFE8] sm:h-80">
            <Image
              src={toSrc(RANK_HOLDERS_IMAGE_BASE, item.image)}
              alt={item.batch}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-contain p-3"
            />
          </div>

          <div className="mt-6 h-px w-12 bg-[#D2B87C] transition-all duration-300 group-hover:w-full" />
        </article>
      ))}
    </div>
  );
}

/* ---------- Department Toppers ---------- */

type TopperRow = {
  semester: string;
  reg: string;
  name: string;
  sgpa: string;
  cgpa: string;
};

type TopperBatch = { label: string; rows: TopperRow[] };

const topperBatches: TopperBatch[] = [
  {
    label: "2015-2019 Batch",
    rows: [
      { semester: "S1", reg: "NCE15CS079", name: "Nair Thushara Thulasidas", sgpa: "9.33", cgpa: "9.33" },
      { semester: "S2", reg: "NCE15CS079", name: "Nair Thushara Thulasidas", sgpa: "9.52", cgpa: "9.43" },
      { semester: "S3", reg: "NCE15CS079", name: "Nair Thushara Thulasidas", sgpa: "9.08", cgpa: "9.31" },
      { semester: "S4", reg: "NCE15CS079", name: "Nair Thushara Thulasidas", sgpa: "8.87", cgpa: "9.2" },
      { semester: "S5", reg: "NCE15CS079", name: "Nair Thushara Thulasidas", sgpa: "8.83", cgpa: "9.13" },
      { semester: "S6", reg: "NCE15CS079", name: "Nair Thushara Thulasidas", sgpa: "8.85", cgpa: "9.08" },
      { semester: "S7", reg: "NCE15CS079", name: "Nair Thushara Thulasidas", sgpa: "9.18", cgpa: "9.1" },
      { semester: "S8", reg: "NCE15CS079", name: "Nair Thushara Thulasidas", sgpa: "9.33", cgpa: "9.12" },
    ],
  },
  {
    label: "2016-2020 Batch",
    rows: [
      { semester: "S1", reg: "NCE16CS108", name: "Sreelakshmi Girisan", sgpa: "9.63", cgpa: "9.63" },
      { semester: "S2", reg: "NCE16CS108", name: "Sreelakshmi Girisan", sgpa: "9.54", cgpa: "9.59" },
      { semester: "S3", reg: "NCE16CS108", name: "Sreelakshmi Girisan", sgpa: "9.25", cgpa: "9.47" },
      { semester: "S4", reg: "NCE16CS104", name: "Sneha T", sgpa: "9.22", cgpa: "9.28" },
      { semester: "S5", reg: "NCE16CS104", name: "Sneha T", sgpa: "9.87", cgpa: "9.40" },
      { semester: "S6", reg: "NCE16CS104", name: "Sneha T", sgpa: "9.52", cgpa: "9.42" },
      { semester: "S7", reg: "NCE16CS104", name: "Sneha T", sgpa: "9.59", cgpa: "9.59" },
      { semester: "S8", reg: "NCE16CS104", name: "Sneha T", sgpa: "10", cgpa: "9.5" },
    ],
  },
  {
    label: "2017-2021 Batch",
    rows: [
      { semester: "S1", reg: "NCE17CS016", name: "Leenu Mathew", sgpa: "8.94", cgpa: "8.94" },
      { semester: "S2", reg: "NCE17CS016", name: "Leenu Mathew", sgpa: "9.37", cgpa: "9.15" },
      { semester: "S3", reg: "NCE17CS016", name: "Leenu Mathew", sgpa: "9.83", cgpa: "9.38" },
      { semester: "S4", reg: "NCE17CS016", name: "Leenu Mathew", sgpa: "9.3", cgpa: "9.36" },
      { semester: "S5", reg: "NCE17CS016", name: "Leenu Mathew", sgpa: "9.26", cgpa: "9.34" },
      { semester: "S6", reg: "NCE17CS016", name: "Leenu Mathew", sgpa: "10", cgpa: "9.45" },
      { semester: "S7", reg: "NCE17CS016", name: "Leenu Mathew", sgpa: "9.86", cgpa: "9.51" },
      { semester: "S8", reg: "NCE17CS016", name: "Leenu Mathew", sgpa: "10", cgpa: "9.56" },
    ],
  },
  {
    label: "2018-2022 Batch",
    rows: [
      { semester: "S1", reg: "NCE18CS030", name: "Manasa K S", sgpa: "9.41", cgpa: "9.41" },
      { semester: "S2", reg: "NCE18CS027", name: "K Praveena", sgpa: "8.94", cgpa: "9" },
      { semester: "S3", reg: "NCE18CS030", name: "Manasa K S", sgpa: "8.5", cgpa: "8.92" },
      { semester: "S4", reg: "NCE18CS030", name: "Manasa K S", sgpa: "9.87", cgpa: "9.15" },
      { semester: "S5", reg: "NCE18CS007", name: "Aiswarya V Nair", sgpa: "9.74", cgpa: "8.42" },
      { semester: "S6", reg: "NCE18CS030", name: "Manasa K S", sgpa: "9.24", cgpa: "9.23" },
    ],
  },
  {
    label: "2019-2023 Batch",
    rows: [
      { semester: "S1", reg: "NCE19CS057", name: "P Syamala Krishna Priya", sgpa: "9.18", cgpa: "9.18" },
      { semester: "S2", reg: "NCE19CS057", name: "P Syamala Krishna Priya", sgpa: "10", cgpa: "9.63" },
      { semester: "S3", reg: "NCE19CS057", name: "P Syamala Krishna Priya", sgpa: "10", cgpa: "9.16" },
    ],
  },
  {
    label: "2020-2024 Batch",
    rows: [
      { semester: "S1", reg: "NCE20CS076", name: "Shafrin Fathima H S", sgpa: "9.71", cgpa: "9.71" },
    ],
  },
];

function TopperTable({ batch }: { batch: TopperBatch }) {
  return (
    <div className="overflow-hidden border border-[#20235A]/10 bg-white">
      <div className="flex items-center justify-between gap-4 bg-[#20235A] px-5 py-4 sm:px-6">
        <h3 className="font-serif text-lg text-white sm:text-xl">
          {batch.label}
        </h3>

        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
          {batch.rows.length} {batch.rows.length === 1 ? "semester" : "semesters"}
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-left text-sm">
          <thead>
            <tr className="bg-[#F2EFE8] text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
              <th className="w-24 px-5 py-3 sm:px-6">Semester</th>
              <th className="px-5 py-3 sm:px-6">Reg. Number</th>
              <th className="px-5 py-3 sm:px-6">Name</th>
              <th className="px-5 py-3 sm:px-6">SGPA</th>
              <th className="px-5 py-3 sm:px-6">CGPA</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#20235A]/10">
            {batch.rows.map((row) => (
              <tr
                key={`${batch.label}-${row.semester}`}
                className="bg-white transition-colors duration-200 hover:bg-[#FAF7F2]"
              >
                <td className="px-5 py-3 font-semibold text-[#20235A] sm:px-6">
                  {row.semester}
                </td>
                <td className="px-5 py-3 text-[#1E1917]/65 sm:px-6">
                  {row.reg}
                </td>
                <td className="px-5 py-3 text-[#1E1917]/80 sm:px-6">
                  {row.name}
                </td>
                <td className="px-5 py-3 text-[#1E1917]/65 sm:px-6">
                  {row.sgpa}
                </td>
                <td className="px-5 py-3 font-semibold text-[#8F7746] sm:px-6">
                  {row.cgpa}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function DepartmentToppersContent() {
  return (
    <div>
      {/* Image Container */}
      <div className="relative mb-12 flex h-72 w-full max-w-3xl items-center justify-center overflow-hidden border border-[#20235A]/10 bg-[#F2EFE8] sm:h-[26rem] lg:h-[30rem]">
        <Image
          src={toSrc(TOPPERS_IMAGE_BASE, "CSE Toppers S7.jpeg")}
          alt="S7 department toppers"
          fill
          sizes="(min-width: 768px) 768px, 100vw"
          className="object-contain"
          priority
        />
      </div>

      <div className="mb-6 flex items-center gap-3">
        <span className="h-px w-9 bg-[#8F7746]" />

        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8F7746] sm:text-xs">
          Semester Wise Toppers
        </p>
      </div>

      <div className="space-y-8">
        {topperBatches.map((batch) => (
          <TopperTable key={batch.label} batch={batch} />
        ))}
      </div>
    </div>
  );
}

type Achievement = {
  label: string;
  paragraphs: string[];
  images: string[];
};

const otherAchievements: Achievement[] = [
  {
    label: "Special Achievements 2016-2020",
    paragraphs: [
      "Mr. Sivarajan won the second prize in the quiz competition conducted by \u2018Vimukthi\u2019, Kerala State Mission for Drug De-addiction, for the students of schools and colleges.",
    ],
    images: ["sivarajan.png"],
  },
  {
    label: "Smart India Hackathon 2020",
    paragraphs: [
      "Students from the sixth semester, 2017-21 batch, participated in Smart India Hackathon 2020 and were shortlisted to the final round. They presented their innovative idea to build a highly secured database with the simplest user interface. The user interface was made simple so the public can use it with ease. It promotes state culture, tourism and agriculture, with an announcement section that gives people the latest information regarding the state.",
    ],
    images: ["Smart India Hackathon 2020.png"],
  },
  {
    label: "Professional Student Summit",
    paragraphs: [
      "Ms. Leenu Mathew, S6 CSE 2017-21 batch, participated in Professional Student Summit 2K20 at CUSAT Kalamassery.",
    ],
    images: ["leenu-mathew.png"],
  },
  {
    label: "Student's Achievements",
    paragraphs: [],
    images: ["otherachievement-pic1.png"],
  },
  {
    label: "2018-22 Batch",
    paragraphs: [
      "Vishnu Mohanan of S6 CSE B and his team, named Alpha Technologies, developed a low-cost sanitizer dispenser.",
    ],
    images: ["vishnu-mohan.png"],
  },
  {
    label: "2014-18 Batch",
    paragraphs: [
      "World Record Achiever Award \u2013 Wikitechy.com & Microsoft Research Community Group, Chennai, organized (HACK GEEKS), the world's biggest international hands-on Ethical Hacking workshop.",
      "Sreeraj Thampan, III Year (CSE B), B.Tech Computer Science & Engineering.",
      "Microsoft Research Foundation conducted a workshop on Ethical Hacking held on 02.10.2016, in which Mr. Sreeraj Thampan was declared a World Record Achiever in Ethical Hacking.",
    ],
    images: ["otherachievement-pic2.png"],
  },
  {
    label: "2020-24 Batch",
    paragraphs: [
      "A click-jacking vulnerability spotted in the edistrict.kerala website was reported by S1 CSE student Anand M.",
      "Anand M, S1 CSE 2020-24 batch.",
    ],
    images: ["otherachievement-pic3.png", "anand-m.png"],
  },
];

function OtherAchievementsContent() {
  return (
    <div className="space-y-5">
      {otherAchievements.map((item, index) => (
        <article
          key={item.label}
          className="group border border-[#20235A]/10 bg-white p-5 transition-all duration-300 hover:border-[#D2B87C] sm:p-8"
        >
          <div className="flex items-start gap-4 sm:gap-5">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#20235A] text-[10px] font-semibold text-[#D2B87C]">
              {String(index + 1).padStart(2, "0")}
            </div>

            <h3 className="min-w-0 font-serif text-xl leading-snug text-[#20235A] sm:text-2xl">
              {item.label}
            </h3>
          </div>

          <div className="mt-5 h-px w-12 bg-[#D2B87C] transition-all duration-300 group-hover:w-full" />

          {item.paragraphs.map((paragraph, pIndex) => (
            <p
              key={pIndex}
              className="mt-4 text-justify text-sm leading-7 text-[#1E1917]/70 first:mt-6 sm:text-[15px] sm:leading-8"
            >
              {paragraph}
            </p>
          ))}

          {item.images.length > 0 && (
            <div
              className={`mt-6 grid gap-4 ${
                item.images.length > 1 ? "sm:grid-cols-2" : ""
              }`}
            >
              {item.images.map((image) => (
                <div
                  key={image}
                  className="relative h-64 w-full overflow-hidden border border-[#20235A]/10 bg-[#F2EFE8] sm:h-80"
                >
                  <Image
                    src={toSrc(TOPPERS_IMAGE_BASE, image)}
                    alt={item.label}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-contain p-3"
                  />
                </div>
              ))}
            </div>
          )}
        </article>
      ))}
    </div>
  );
}

/* ---------- Tab cards + switcher ---------- */

type SectionId =
  | "university-rank-holders"
  | "department-toppers"
  | "other-achievements";

const sections: {
  id: SectionId;
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    id: "university-rank-holders",
    title: "University Rank Holders",
    description: "Students who earned university ranks.",
    icon: Landmark,
  },
  {
    id: "department-toppers",
    title: "Department Toppers",
    description: "Semester-wise toppers by batch.",
    icon: Trophy,
  },
  {
    id: "other-achievements",
    title: "Other Achievements",
    description: "Hackathons, awards and special recognitions.",
    icon: Star,
  },
];

export default function AcademicExcellenceGallery() {
  const [activeId, setActiveId] = useState<SectionId>("university-rank-holders");
  const contentRef = useRef<HTMLDivElement>(null);

  const active = sections.find((s) => s.id === activeId) ?? sections[0];

  function handleSelect(id: SectionId) {
    setActiveId(id);
    contentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      {/* Cards (act as tabs, no navigation) */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {sections.map((section, index) => {
          const Icon = section.icon;
          const isActive = section.id === activeId;

          return (
            <button
              key={section.id}
              type="button"
              onClick={() => handleSelect(section.id)}
              aria-pressed={isActive}
              className={`group flex h-full flex-col border p-5 text-left transition-all duration-300 hover:-translate-y-1 sm:p-6 ${
                isActive
                  ? "border-[#20235A] bg-[#20235A] text-white"
                  : "border-[#20235A]/10 bg-white hover:border-[#D2B87C]"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <span
                  className={`flex h-11 w-11 items-center justify-center transition-colors duration-300 ${
                    isActive
                      ? "bg-white/10 text-[#D2B87C]"
                      : "bg-[#F2EFE8] text-[#8F7746]"
                  }`}
                >
                  <Icon size={21} strokeWidth={1.5} />
                </span>

                <span
                  className={`font-serif text-sm ${
                    isActive ? "text-[#D2B87C]" : "text-[#8F7746]"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3
                className={`mt-6 font-serif text-xl leading-snug sm:text-2xl ${
                  isActive ? "text-white" : "text-[#20235A]"
                }`}
              >
                {section.title}
              </h3>

              <p
                className={`mt-2 text-xs leading-6 ${
                  isActive ? "text-white/65" : "text-[#1E1917]/55"
                }`}
              >
                {section.description}
              </p>
            </button>
          );
        })}
      </div>

      {/* Content for the selected card */}
      <div ref={contentRef} className="mt-16 scroll-mt-24">
        <div className="mb-10 border-b border-[#20235A]/10 pb-6">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-9 bg-[#8F7746]" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8F7746] sm:text-xs">
              Academic Excellence
            </p>
          </div>

          <h2 className="font-serif text-3xl font-normal leading-[1.12] tracking-[-0.02em] text-[#20235A] sm:text-4xl lg:text-5xl">
            {active.title}
          </h2>
        </div>

        {activeId === "university-rank-holders" && (
          <UniversityRankHoldersContent />
        )}
        {activeId === "department-toppers" && <DepartmentToppersContent />}
        {activeId === "other-achievements" && <OtherAchievementsContent />}
      </div>
    </>
  );
}