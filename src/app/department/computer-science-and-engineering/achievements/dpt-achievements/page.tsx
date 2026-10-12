import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../../DepartmentNav/DepartmentNavigation";

const DEPARTMENT_PATH = "/department/computer-science-and-engineering";

// Adjust these bases to wherever you moved the images inside /public
const LOCAL_BASE = "/images/dpt/computer-science-and-engineering/achievements";
const ACH_BASE = "/images/dpt/computer-science-and-engineering/achievements";

type ImagePair = { file: string; alt: string };

type AchievementRow = {
  title: string;
  description?: ReactNode;
  objectives?: string[];
  images?: ImagePair[];
  imageGroups?: ImagePair[][];
};

const section2024_25: AchievementRow[] = [
  {
    title: "Semester Toppers S7 CSE 2021-25 with 84% Pass",
    images: [{ file: `${LOCAL_BASE}/topper.jpg`, alt: "Semester toppers" }],
  },
  {
    title: "Congratulations on Getting Placed in Infosys!",
    images: [{ file: `${LOCAL_BASE}/infi_plc.jpg`, alt: "Infosys placement" }],
  },
  {
    title: "Honouring Dr. B Shaji on Achieving PhD",
    images: [{ file: `${LOCAL_BASE}/pic1.jpg`, alt: "Dr. B Shaji felicitation" }],
  },
  {
    title:
      "Congratulations to our cadet Abhinand Mohan! He's selected for NCC Marching Contingent at Kartavyapath for Republic Day parade.",
    images: [{ file: `${LOCAL_BASE}/pic2.jpg`, alt: "NCC cadet selection" }],
  },
];

const section2020_21: AchievementRow[] = [
  {
    title: "Webinar on Big Data",
    description: (
      <p>
        A one-day National Webinar on <strong>Big Data Analytics</strong> was
        organized by the Department of Computer Science and Engineering,
        Nehru College of Engineering and Research Centre, Pampady. The
        webinar session on Big Data Analytics was conducted by{" "}
        <strong>Ms. Anjali Sunil</strong>, Nehru College of Engineering and
        Research Centre.
      </p>
    ),
  },
  {
    title: "Webinar on Machine Learning",
    description: (
      <p>
        A one-day National Webinar on Machine Learning was organized by the
        Department of Computer Science and Engineering, Nehru College of
        Engineering and Research Centre, Pampady. The webinar session on{" "}
        <strong>Machine Learning</strong> was conducted by{" "}
        <strong>Mr. Arun K</strong>, Assistant Professor, Nehru College of
        Engineering and Research Centre.
      </p>
    ),
    images: [
      { file: `${ACH_BASE}/achievements-pic-2.jpg`, alt: "Webinar on Machine Learning" },
    ],
  },
  {
    title: "Webinar on VANET",
    description: (
      <p>
        A one-day National Webinar on VANETs was organized by the Department
        of Computer Science and Engineering, Nehru College of Engineering and
        Research Centre, Pampady. The webinar session was conducted by{" "}
        <strong>Ms. Radhika K Manjusha</strong>, Assistant Professor, Nehru
        College of Engineering and Research Centre.
      </p>
    ),
    images: [
      { file: `${ACH_BASE}/achievements-pic-3.jpg`, alt: "Webinar on VANET" },
    ],
  },
  {
    title: "Webinar on Developing Your Ideas to MVP",
    description: (
      <p>
        A webinar session on Developing your Ideas to a Minimum Viable
        Product was conducted by <strong>Mr. Jithin Rajiv</strong>, Founder
        and CEO, and <strong>Vyshak K</strong>, Co-founder &amp; CMO,
        BrainsPrep. The webinar had a brief discussion on how to develop your
        idea into a viable product and the steps to be taken to make it a
        proper product. It was arranged for all the students of the Computer
        Science and Engineering Department, including the PG and UG
        students. The faculty of the department were also part of the
        session.
      </p>
    ),
    images: [
      {
        file: `${ACH_BASE}/achievements-pic-4.jpg`,
        alt: "Webinar on developing ideas to MVP",
      },
    ],
  },
  {
    title:
      "Faculty Development Program on Security in Global Emergencies, July 13\u201317, 2020. Organised by the Department of Computer Science and Engineering.",
    objectives: [
      "To enable the teachers to guide, motivate and counsel the students towards security aspect in each and every walk of life.",
      "To expose the teachers to the term Global emergencies and the safety of human in various situations during challenging times.",
      "To enhance & develop requisite skills in teachers for inculcating the technological awareness & knowledge of security for helping the society as a whole.",
    ],
    images: [
      { file: `${ACH_BASE}/achievements-pic-5.jpg`, alt: "FDP on security, photo 1" },
      { file: `${ACH_BASE}/achievements-pic-6.jpg`, alt: "FDP on security, photo 2" },
    ],
  },
  {
    title:
      "Faculty Development Program on Creativity, Innovation and New Product Development, June 29th to July 2nd 2020",
    objectives: [
      "To enable the teachers to guide, motivate and counsel the students towards entrepreneurial career.",
      "To expose the teachers to the entrepreneurship development process and equip them to develop Vision, Strategy & Structure for Entrepreneurship Development Activities in their colleges.",
      "Enhance & develop requisite skills in teachers to introduce entrepreneurship oriented courses in their colleges and take up Research & Consultancy in Entrepreneurship.",
    ],
    images: [
      { file: `${ACH_BASE}/achievements-pic-7.jpg`, alt: "FDP on innovation, photo 1" },
    ],
    imageGroups: [
      [
        { file: `${ACH_BASE}/achievements-pic-8.png`, alt: "FDP on innovation, photo 2" },
        { file: `${ACH_BASE}/achievements-pic-9.png`, alt: "FDP on innovation, photo 3" },
      ],
      [
        { file: `${ACH_BASE}/achievements-pic-10.png`, alt: "FDP on innovation, photo 4" },
        { file: `${ACH_BASE}/achievements-pic-11.png`, alt: "FDP on innovation, photo 5" },
      ],
      [
        { file: `${ACH_BASE}/achievements-pic-12.png`, alt: "FDP on innovation, photo 6" },
        { file: `${ACH_BASE}/achievements-pic-13.png`, alt: "FDP on innovation, photo 7" },
      ],
      [
        { file: `${ACH_BASE}/achievements-pic-14.png`, alt: "FDP on innovation, photo 8" },
        { file: `${ACH_BASE}/achievements-pic-15.png`, alt: "FDP on innovation, photo 9" },
      ],
      [{ file: `${ACH_BASE}/achievements-pic-16.png`, alt: "FDP on innovation, photo 10" }],
    ],
  },
  {
    title: "Students Achievements",
    imageGroups: [
      [
        { file: `${ACH_BASE}/student-achievement-pic-1.png`, alt: "Student achievement 1" },
        { file: `${ACH_BASE}/student-achievement-pic-2.png`, alt: "Student achievement 2" },
      ],
      [
        { file: `${ACH_BASE}/student-achievement-pic-3.png`, alt: "Student achievement 3" },
        { file: `${ACH_BASE}/student-achievement-pic-4.png`, alt: "Student achievement 4" },
      ],
      [
        { file: `${ACH_BASE}/student-achievement-pic-5.png`, alt: "Student achievement 5" },
        { file: `${ACH_BASE}/student-achievement-pic-6.png`, alt: "Student achievement 6" },
      ],
      [
        { file: `${ACH_BASE}/student-achievement-pic-7.png`, alt: "Student achievement 7" },
        { file: `${ACH_BASE}/student-achievement-pic-8.png`, alt: "Student achievement 8" },
      ],
      [
        { file: `${ACH_BASE}/student-achievement-pic-9.png`, alt: "Student achievement 9" },
        { file: `${ACH_BASE}/student-achievement-pic-10.png`, alt: "Student achievement 10" },
      ],
      [
        { file: `${ACH_BASE}/student-achievement-pic-11.png`, alt: "Student achievement 11" },
        { file: `${ACH_BASE}/student-achievement-pic-12.png`, alt: "Student achievement 12" },
      ],
      [{ file: `${ACH_BASE}/student-achievement-pic-13.png`, alt: "Student achievement 13" }],
    ],
  },
];

function Thumb({ file, alt }: ImagePair) {
  return (
    <div className="relative h-64 w-full overflow-hidden border border-[#20235A]/10 bg-[#F2EFE8] p-2 sm:h-80">
      <Image
        src={encodeURI(file)}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 560px, (min-width: 640px) 50vw, 100vw"
        className="object-contain"
      />
    </div>
  );
}

function AchievementCard({
  row,
  index,
}: {
  row: AchievementRow;
  index: number;
}) {
  return (
    <article className="group border border-[#20235A]/10 bg-white p-5 transition-all duration-300 hover:border-[#D2B87C] sm:p-8">
      <div className="flex items-start gap-4 sm:gap-5">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#20235A] text-[10px] font-semibold text-[#D2B87C]">
          {String(index + 1).padStart(2, "0")}
        </div>

        <h3 className="min-w-0 font-serif text-xl leading-snug text-[#20235A] sm:text-2xl">
          {row.title}
        </h3>
      </div>

      <div className="mt-5 h-px w-12 bg-[#D2B87C] transition-all duration-300 group-hover:w-full" />

      {row.description && (
        <div className="mt-6 text-justify text-sm leading-7 text-[#1E1917]/70 sm:text-[15px] sm:leading-8 [&_strong]:font-semibold [&_strong]:text-[#20235A]">
          {row.description}
        </div>
      )}

      {row.objectives && (
        <div className="mt-6 border-l-2 border-[#D2B87C] bg-[#FAF7F2] px-5 py-5 sm:px-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746] sm:text-xs">
            Objectives of the Programme
          </p>

          <ul className="mt-4 space-y-3">
            {row.objectives.map((obj, i) => (
              <li key={i} className="flex items-start gap-3">
                <ChevronRight
                  size={18}
                  strokeWidth={2.5}
                  className="mt-1.5 shrink-0 text-[#8F7746]"
                />
                <span className="text-sm leading-7 text-[#1E1917]/70 sm:text-[15px] sm:leading-8">
                  {obj}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {row.images && (
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {row.images.map((img) => (
            <Thumb key={img.file} {...img} />
          ))}
        </div>
      )}

      {row.imageGroups && (
        <div className="mt-4 space-y-4">
          {row.imageGroups.map((group, gi) => (
            <div
              key={gi}
              className={`grid grid-cols-1 gap-4 ${
                group.length > 1 ? "sm:grid-cols-2" : ""
              }`}
            >
              {group.map((img) => (
                <Thumb key={img.file} {...img} />
              ))}
            </div>
          ))}
        </div>
      )}
    </article>
  );
}

function YearSection({
  year,
  rows,
  tone,
}: {
  year: string;
  rows: AchievementRow[];
  tone: "light" | "warm";
}) {
  const background = tone === "warm" ? "bg-[#F2EFE8]" : "bg-[#FAF7F2]";

  return (
    <section
      className={`${background} px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24 xl:px-20`}
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-10">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-9 bg-[#8F7746]" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8F7746] sm:text-xs">
              Academic Year {year}
            </p>
          </div>

          <h2 className="font-serif text-3xl font-normal leading-[1.12] tracking-[-0.025em] text-[#20235A] sm:text-4xl lg:text-5xl">
            CSE Department Events
            <br />
            <span className="italic">and Achievements &ndash; {year}</span>
          </h2>
        </div>

        <div className="space-y-5">
          {rows.map((row, index) => (
            <AchievementCard key={row.title} row={row} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function DptAchievementsPage() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-[#FAF7F2] text-[#1E1917]">
        {/* HERO */}
        <section className="relative overflow-hidden bg-[#20235A] text-white">
          {/* Decorative circles */}
          <div className="pointer-events-none absolute -right-32 -top-36 h-[500px] w-[500px] rounded-full border border-[#D2B87C]/10" />
          <div className="pointer-events-none absolute -right-12 -top-20 h-[340px] w-[340px] rounded-full border border-[#D2B87C]/15" />
          <div className="pointer-events-none absolute bottom-[-180px] left-[-140px] h-[400px] w-[400px] rounded-full border border-white/5" />

          <div className="relative mx-auto max-w-[1440px] px-5 py-14 sm:px-8 sm:py-20 lg:px-14 lg:py-24 xl:px-20">
            <div className="relative z-10 max-w-4xl">
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-10 bg-[#D2B87C]" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D2B87C] sm:text-xs">
                  Computer Science &amp; Engineering
                </p>
              </div>

              <h1 className="font-serif text-[42px] font-normal leading-[1.06] tracking-[-0.035em] sm:text-[56px] lg:text-[64px] xl:text-[72px]">
                Department
                <br />
                <span className="italic text-[#D2B87C]">Achievements</span>
              </h1>

              <p className="mt-7 max-w-2xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
                Events, webinars, faculty development programmes and student
                accomplishments from the Department of Computer Science and
                Engineering.
              </p>

              <div className="mt-12 flex flex-wrap items-center gap-3 text-xs text-white/50">
                <Link
                  href={DEPARTMENT_PATH}
                  className="transition-colors hover:text-white"
                >
                  Departments
                </Link>

                <span className="text-[#D2B87C]">/</span>

                <Link
                  href={DEPARTMENT_PATH}
                  className="transition-colors hover:text-white"
                >
                  Computer Science &amp; Engineering
                </Link>

                <span className="text-[#D2B87C]">/</span>

                <Link
                  href={`${DEPARTMENT_PATH}/achievements`}
                  className="transition-colors hover:text-white"
                >
                  Achievements
                </Link>

                <span className="text-[#D2B87C]">/</span>

                <span className="text-white/80">Department</span>
              </div>
            </div>
          </div>

          <div className="h-1 w-full bg-[#D2B87C]" />
        </section>

        {/* DEPARTMENT NAVIGATION */}
        <InnerHeader activeTab="Achievements" />

        {/* 2024-25 */}
        <YearSection year="2024-25" rows={section2024_25} tone="light" />

        {/* 2020-21 */}
        <YearSection year="2020-21" rows={section2020_21} tone="warm" />

        {/* CLOSING CTA */}
        <section className="bg-[#20235A] px-5 py-14 text-white sm:px-8 sm:py-16 lg:px-14 xl:px-20">
          <div className="mx-auto flex max-w-[1200px] flex-col justify-between gap-7 md:flex-row md:items-center">
            <div>
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D2B87C] sm:text-xs">
                More Achievements
              </p>

              <h2 className="max-w-2xl font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
                Explore the accomplishments of our faculty and students.
              </h2>
            </div>

            <Link
              href={`${DEPARTMENT_PATH}/achievements`}
              className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-3 border border-[#D2B87C]/60 px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:bg-[#D2B87C] hover:text-[#20235A]"
            >
              All Achievements
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