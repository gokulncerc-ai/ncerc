import Image from "next/image";
import { ArrowUpRight, ChevronRight } from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../DepartmentNav/page";

const TLP_BASE = "/images/dpt/mechanical-engineering/tlp";

type Point = {
  label: string;
  text: string;
};

const teachingPoints: Point[] = [
  {
    label: "Class room teaching",
    text: "Class room teaching is initiated by a well-structured lesson plan which is developed by the concerned faculty and is screened by the HOD. All the faculty members are instructed to take up detailed introductory classes with a detailed discussion on course outcomes. Faculty members are also undertaking NPTEL online certification courses for upgrading their class room teaching skills. To further enhance effective learning environment in the class room meditation is practiced for 10 min in the first hour of all working days.",
  },
  {
    label: "Continuous assessment in laboratory",
    text: "Continuous assessment methodology is implemented in all the practical courses, i.e., all the laboratories via daily experimental observations, daily performance and record submission. Viva voce is taken up and design of experiment is demonstrated before the experimentation, to ensure students understanding level on theoretical and practical concepts.",
  },
  {
    label: "Student Counselling",
    text: "Counselling is done in the view of the student’s career, curricular and extracurricular activities. Faculties act as counsellors to guide and motivate student towards their career development.",
  },
  {
    label: "Contents beyond the curriculum",
    text: "To enhance the course outcomes, additional experimentations have been incorporated in the laboratory courses and appropriate concepts in the theory classes have been also covered using several teaching learning methods.",
  },
  {
    label: "Lecture Notes",
    text: "A detailed learning notes for each unit is prepared by respective course faculty according to the prescribed syllabus before the commencement of the individual semester class work.",
  },
  {
    label: "Question Bank",
    text: "Question banks are prepared for each unit in the course based on the course objectives and considering the nature of the university question papers. The previous question papers of University are also maintained in the course files. Question banks are made available in the e-Learning portal and course files.",
  },
  {
    label: "PPTs",
    text: "Power Point Presentations are prepared by the respective course faculty for typical topics for better and easy understanding of the student.",
  },
  {
    label: "Assignments",
    text: "Assignment questions are framed based on the attainment of the Course Outcomes and Program Outcomes such that it reflects the Bloom’s Taxonomy.",
  },
  {
    label: "Tutorials",
    text: "More numerical are practiced in the tutorials to enhance problem solving skills among the students.",
  },
  {
    label: "Remedial Classes",
    text: "After mid-I evaluation, weaker students are identified and remedial classes are conducted to improve their performance.",
  },
  {
    label: "Online Student Feedback",
    text: "Online student feedback is taken after three weeks from the commencement of class work to further improve teaching learning environment within the class room.",
  },
];

const initiatives = [
  "Meditation is practiced daily for 05 min in the first hour on all working days.",
  "Singing of National anthem is also practiced daily at 4.00 pm on all working days.",
];

const interactiveLearning = [
  "Besides traditional classrooms with a blackboard, few of the classrooms in the department are equipped with Interactive panel and internet connectivity.",
  "Faculty regularly uses presentations and videos as teaching tools and encourages interactive learning among the students.",
  "Department also organizes guest lectures for the students as a part of interactive learning.",
];

const collaborativeLearning = [
  "Faculty facilitate discussions on important concepts within the classroom to encourage combined learning.",
  "Faculty regularly organize seminars, group discussions and competitions to encourage collaborative learning among the students.",
];

const identifyStudents = [
  "If the students scored greater than or equal to 60% marks are identified as bright students and the students scored less than 60% marks are identified as weak students based on the performance in the Internal Assessment Tests-I (IAT-I).",
  "Classroom discussion & Questioning ability.",
  "Participation in classroom seminars.",
  "Performance in the co-curricular activities.",
];

const encourageBright = [
  "The bright students are encouraged to organize as well as to participate in symposia, workshops, conference, project and seminars to gain knowledge.",
  "Constant motivation is given to them to prepare for Placement, Competitive Exams and entrepreneurship.",
  "Students are motivated and guided to get University Rank.",
];

const brightImpact = [
  "Confident levels to take part in National and International conferences, Project Presentation, etc. are increased.",
  "Students are placed in good companies and some students become entrepreneurs.",
  "Students got good score in competitive and University exams.",
];

const supportWeak = [
  "Counselling is given to the weak students by subject handling faculty.",
  "A Student Mentor is also appointed for every 15 - 20 students. The Mentor establishes a close relationship with each student, makes them familiar to college practices, follows their progress regularly and guides them to take part in the classroom and co-curricular activities throughout the program.",
  "Students’ performances are intimated to the parents for their better care and attention to improve their ward’s studies and career.",
  "Discussion on important questions and question bank is carried out in the additional / remedial coaching classes.",
];

const weakImpact = [
  "Students are able to participate effectively in class room and co-curricular activities.",
  "Parents support their ward and appreciate their progress.",
  "The additional coaching and remedial classes help them to improve their performance.",
];

const classroomQuality = [
  "Each classroom is spacious and equipped with black board and visual aids to create a better environment for effective teaching and learning.",
  "Academic Calendar, Department Vision, Mission, PEOs, POs & PSOs are displayed in the class room notice board.",
  "The method of lecture is earmarked as introduction, explanation, application and conclusion with real world examples and thought-provoking assignments.",
  "Students are encouraged to be interactive in classroom through discussions by asking questions / doubts.",
  "Content beyond the syllabus is delivered in order to attain a thorough knowledge on the subject.",
  "Performance of the faculty is monitored by HoD / senior faculty members and the quality of teaching with respect to knowledge, presentation, communication skills, etc. are noted.",
  "Class committee meetings are conducted as per the schedule.",
  "A feedback is collected in a semester for all the courses from the students to check the effectiveness of teaching- learning process.",
  "The list of documents maintained in the course folder is given in the following table.",
];

const courseFolderContents = [
  "Institute Vision Mission, Department Vision Mission, PEOs, POs and PSOs",
  "Syllabus",
  "Nominal roll",
  "PPT / video lectures",
  "Class time table & academic calendar",
  "Course data sheet (CO / PO mapping, teaching learning methods, reference books, web reference)",
  "Lesson plan",
  "Internal assessment exam question papers - as per blooms taxonomy",
  "Internal assessment exam answer keys",
  "Tutorial questions with sheets",
  "Internal / University question bank",
  "Lecture notes with teaching aids",
  "Content beyond syllabus",
  "Web based learning materials",
  "Assignment questions",
  "Seminar topics with student name list",
  "Result analysis",
  "Remedial classes-continuous improvement",
  "CO / PO assessment sheet-action plans",
];

function pad(number: number) {
  return String(number).padStart(2, "0");
}

function SectionBlock({
  number,
  eyebrow,
  title,
  children,
}: {
  number: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-[#D8D1C7] pt-14 first:border-t-0 first:pt-0 sm:pt-16 lg:pt-20">
      <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <div className="flex items-start gap-5">
            <span className="font-display text-5xl font-semibold leading-none text-[#D2B87C]">
              {number}
            </span>

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                {eyebrow}
              </p>

              <h2 className="mt-2 font-display text-2xl font-semibold leading-tight text-[#20235A] sm:text-3xl">
                {title}
              </h2>

              <div className="mt-5 h-px w-12 bg-[#D2B87C]" />
            </div>
          </div>
        </div>

        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mt-12 border-l-2 border-[#D2B87C] pl-4 font-display text-xl font-semibold text-[#20235A] sm:text-2xl">
      {children}
    </h3>
  );
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-5 text-justify text-base leading-8 text-[#5F5A55] sm:text-lg">
      {children}
    </p>
  );
}

function PointList({ points }: { points: Point[] }) {
  return (
    <div className="mt-7 space-y-3">
      {points.map((point, index) => (
        <article
          key={point.label}
          className="group border border-[#D8D1C7] bg-[#FAF7F2] p-5 transition-all duration-300 hover:border-[#20235A] hover:bg-white sm:p-6"
        >
          <div className="flex gap-5">
            <span className="shrink-0 font-display text-xl font-semibold text-[#D2B87C]">
              {pad(index + 1)}
            </span>

            <div>
              <h4 className="font-display text-lg font-semibold text-[#20235A] transition-colors group-hover:text-[#8F7746]">
                {point.label}
              </h4>

              <p className="mt-2 text-justify text-base leading-8 text-[#6A645D]">
                {point.text}
              </p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 space-y-4">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-4">
          <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D2B87C]" />

          <span className="text-justify text-base leading-8 text-[#5F5A55] sm:text-lg">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

function Figure({
  file,
  caption,
}: {
  file: string;
  caption: string;
}) {
  return (
    <figure className="my-10 overflow-hidden border border-[#D8D1C7] bg-[#FAF7F2] p-3 sm:p-5">
      <div className="overflow-hidden bg-white">
        <Image
          src={`${TLP_BASE}/${file}`}
          alt={caption}
          width={1200}
          height={800}
          sizes="(min-width: 1280px) 1100px, 100vw"
          className="h-auto w-full object-contain"
        />
      </div>

      <figcaption className="px-2 pt-4 text-center text-xs font-semibold uppercase tracking-[0.12em] text-[#8F7746] sm:text-sm">
        {caption}
      </figcaption>
    </figure>
  );
}

export default function TlpPage() {
  return (
    <>
      <SiteHeader />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative isolate overflow-hidden bg-[#20235A]">
        {/* Background Image */}
        <div className="absolute inset-0 -z-20">
          <Image
            src="/images/dpt/mechanical-engineering/heroone.jpeg"
            alt="Mechanical Engineering Teaching and Learning"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-20 grayscale"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#20235A]/95 via-[#20235A]/90 to-[#15183f]/95" />

        {/* Decorative Circles */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-[460px] w-[460px] rounded-full border border-[#D2B87C]/20" />

        <div className="pointer-events-none absolute right-10 top-24 h-[270px] w-[270px] rounded-full border border-[#D2B87C]/15" />

        <div className="pointer-events-none absolute -bottom-48 -left-24 h-[430px] w-[430px] rounded-full border border-white/5" />

        <div className="relative mx-auto max-w-[1400px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16">
          <div className="grid items-end gap-12 lg:grid-cols-[1fr_auto] lg:gap-20">
            <div className="max-w-5xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D2B87C] sm:text-sm">
                Mechanical Engineering · Academic Process
              </p>

              <h1 className="mt-5 max-w-5xl font-display text-[43px] font-semibold leading-[1.03] tracking-[-0.025em] text-white sm:text-[58px] lg:text-[64px] xl:text-[74px]">
                Teaching &amp; Learning
                <span className="block text-[#D2B87C]">Process.</span>
              </h1>

              <div className="mt-7 h-px w-20 bg-[#D2B87C]" />

              <p className="mt-7 max-w-3xl text-base leading-8 text-white/70 sm:text-lg">
                A structured academic approach focused on effective teaching,
                continuous assessment, interactive learning, student support,
                and overall technical development.
              </p>
            </div>

            <div className="hidden lg:block">
              <div className="border-l border-[#D2B87C] pl-6">
                <p className="font-display text-5xl font-semibold text-white">
                  02
                </p>

                <p className="mt-2 max-w-[160px] text-xs font-medium uppercase leading-5 tracking-[0.16em] text-white/55">
                  Academic Process
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="bg-[#FAF7F2]">
        <InnerHeader />

        {/* Introduction */}
        <section className="border-b border-[#E0D9CF] bg-[#FAF7F2] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746] sm:text-sm">
                  Department Academic Framework
                </p>

                <h2 className="mt-4 max-w-lg font-display text-3xl font-semibold leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                  Learning designed around student development.
                </h2>

                <div className="mt-6 h-px w-16 bg-[#D2B87C]" />
              </div>

              <div className="max-w-2xl lg:pt-8">
                <p className="text-base leading-8 text-[#5F5A55] sm:text-lg">
                  The Mechanical Engineering department adopts structured
                  pedagogical and instructional approaches to support effective
                  teaching, practical learning, academic development, and
                  continuous improvement among students.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[1280px] space-y-20 px-6 sm:px-8 lg:space-y-28 lg:px-12">

            {/* Section 01 */}
            <SectionBlock
              number="01"
              eyebrow="Teaching Framework"
              title="Teaching & Learning Process"
            >
              <p className="text-justify text-base leading-8 text-[#5F5A55] sm:text-lg">
                Albeit majority of the student community is from the rural
                background, teaching process is adopted in a way that maximum
                attainment of the student is targeted in terms of overall
                technical outcome. Following are the various pedagogical and
                instructional approaches for effective teaching process.
              </p>

              <PointList points={teachingPoints} />

              <Figure
                file="Tlp-Picture1.png"
                caption="Figure. B.2.2.1.d: Teaching and Learning Process Flow Chart"
              />

              <Paragraph>
                To ensure effective teaching learning environment, the
                following are the initiatives taken by the department.
              </Paragraph>

              <BulletList items={initiatives} />

              <Paragraph>
                Following are the various practices/modes that are facilitated
                for enhancing the learning process among the students.
              </Paragraph>

              <SubHeading>Interactive Learning</SubHeading>

              <BulletList items={interactiveLearning} />

              <Figure
                file="Tlp-Picture2.png"
                caption="Figure. B.2.2.1.e: Interactive Teaching using Smart Interactive panel"
              />

              <SubHeading>Collaborative Learning</SubHeading>

              <BulletList items={collaborativeLearning} />

              <SubHeading>Independent Learning</SubHeading>

              <BulletList
                items={[
                  "The central library has a vast collection of books, journals, magazines, e- books, project reports, etc.",
                ]}
              />

              <div className="mt-6 border-l-2 border-[#D2B87C] bg-[#FAF7F2] p-5 sm:p-6">
                <p className="text-base leading-8 text-[#5F5A55]">
                  <span className="font-semibold text-[#20235A]">
                    E-Learning:
                  </span>{" "}
                  The central library has a vast collection of books,
                  journals, magazines, e- books, project reports, etc.
                </p>
              </div>

              <Figure
                file="Tlp-Picture3.png"
                caption="Figure. B.2.2.1.f: Independent Learning using Digital Library"
              />

              <Figure
                file="Tlp-Picture4.png"
                caption="Figure. B.2.2.1.g: Independent Learning using Library"
              />

              <div className="mt-6 border-l-2 border-[#D2B87C] bg-[#FAF7F2] p-5 sm:p-6">
                <p className="text-justify text-base leading-8 text-[#5F5A55]">
                  <span className="font-semibold text-[#20235A]">
                    NPTEL based learning:
                  </span>{" "}
                  NPTEL based online courses are attended by the faculty for
                  enhancing their teaching skills and smooth conduct of the
                  teaching process in the regular class room teaching. Some of
                  the interested faculty are supported to register for the NPTEL
                  program/subject online certification course of their own
                  areas of teaching and research interests. Similarly, students
                  are supported with NPTEL video lectures in the central digital
                  library and a data bank of the CD’s of all the NPTEL courses
                  are made available in the department library. Additionally,
                  interested students are also encouraged to register for NPTEL
                  certification courses for enhancing the potential concepts
                  much effectively.
                </p>
              </div>

              <Figure
                file="Tlp-Picture5.png"
                caption="Figure. B.2.2.1.h: NPTEL online certification"
              />
            </SectionBlock>

            {/* Section 02 */}
            <SectionBlock
              number="02"
              eyebrow="Student Development"
              title="Supporting Weak Students & Encouraging Bright Students"
            >
              <SubHeading>
                Methodology to identify bright &amp; weak students
              </SubHeading>

              <Paragraph>
                The bright and weak students are identified based on their
                active participation in the following factors:
              </Paragraph>

              <BulletList items={identifyStudents} />

              <SubHeading>
                Methodology to encourage bright students
              </SubHeading>

              <BulletList items={encourageBright} />

              <div className="mt-8 border border-[#D8D1C7] bg-[#FAF7F2] p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                  Impact Analysis
                </p>

                <BulletList items={brightImpact} />
              </div>

              <SubHeading>
                Methodologies to support weak students
              </SubHeading>

              <BulletList items={supportWeak} />

              <div className="mt-8 border border-[#D8D1C7] bg-[#FAF7F2] p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                  Impact Analysis
                </p>

                <BulletList items={weakImpact} />
              </div>

              <Paragraph>
                The methodology followed to support weak students and encourage
                bright student to equip their skills is illustrated in Figure
                2.2.1d.
              </Paragraph>

              <Figure
                file="Tlp-Picture6.png"
                caption="Figure. B.2.2.1.i: Methodology to identify bright & weak student flow chart"
              />

              <SubHeading>Quality of Classroom Teaching</SubHeading>

              <BulletList items={classroomQuality} />

              {/* Course Folder Table */}
              <div className="mt-12">
                <div className="mb-6 border-b border-[#D8D1C7] pb-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                    Academic Documentation
                  </p>

                  <h3 className="mt-2 font-display text-2xl font-semibold text-[#20235A] sm:text-3xl">
                    Documents Maintained in the Course Folder
                  </h3>
                </div>

                <div className="overflow-hidden border border-[#D8D1C7]">
                  <div className="hidden grid-cols-[100px_1fr] bg-[#20235A] text-xs font-semibold uppercase tracking-[0.16em] text-white sm:grid">
                    <div className="px-6 py-5 text-[#D2B87C]">
                      SI No
                    </div>

                    <div className="px-6 py-5">
                      Course Folder Content
                    </div>
                  </div>

                  <div className="sm:hidden">
                    {courseFolderContents.map((item, index) => (
                      <div
                        key={item}
                        className="border-t border-[#E2DDD5] bg-[#FAF7F2] p-5 first:border-t-0"
                      >
                        <div className="flex gap-4">
                          <span className="font-display text-xl font-semibold text-[#D2B87C]">
                            {pad(index + 1)}
                          </span>

                          <p className="text-sm leading-7 text-[#5F5A55]">
                            {item}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="hidden sm:block">
                    {courseFolderContents.map((item, index) => (
                      <div
                        key={item}
                        className="group grid grid-cols-[100px_1fr] border-t border-[#E2DDD5] bg-[#FAF7F2] transition-colors duration-300 hover:bg-[#F2EFE8]"
                      >
                        <div className="px-6 py-5 font-display text-lg font-semibold text-[#8F7746]">
                          {pad(index + 1)}
                        </div>

                        <div className="flex items-center px-6 py-5 text-[#5F5A55]">
                          <span className="mr-3 h-1.5 w-1.5 rounded-full bg-[#D2B87C] opacity-0 transition-opacity group-hover:opacity-100" />

                          <span className="transition-all duration-300 group-hover:translate-x-1">
                            {item}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SectionBlock>
          </div>
        </section>

        {/* Statement */}
        <section className="relative isolate overflow-hidden bg-[#20235A] py-20 sm:py-24 lg:py-28">
          <div className="pointer-events-none absolute -right-24 -top-24 h-[380px] w-[380px] rounded-full border border-[#D2B87C]/15" />

          <div className="pointer-events-none absolute right-10 top-12 h-[220px] w-[220px] rounded-full border border-[#D2B87C]/10" />

          <div className="relative mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                  Mechanical Engineering
                </p>

                <div className="mt-6 h-px w-16 bg-[#D2B87C]" />
              </div>

              <h2 className="max-w-4xl font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                Structured learning. Continuous improvement. Practical
                engineering education.
              </h2>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-[#FAF7F2] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
            <div className="border-t border-[#D8D1C7] pt-8">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                    Mechanical Engineering
                  </p>

                  <h2 className="mt-3 max-w-2xl font-display text-2xl font-semibold text-[#20235A] sm:text-3xl">
                    Explore the department and its academic environment.
                  </h2>
                </div>

                <a
                  href="/department/mechanical-engineering"
                  className="inline-flex h-12 items-center justify-center border border-[#20235A] px-7 text-xs font-semibold uppercase tracking-[0.16em] text-[#20235A] transition-colors duration-300 hover:bg-[#20235A] hover:text-white"
                >
                  Department Overview

                  <ArrowUpRight
                    className="ml-3 h-4 w-4"
                    strokeWidth={1.5}
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}