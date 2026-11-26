
import type { Metadata } from "next";
import {
  ArrowDown,
  ArrowUpRight,
  Building2,
  ChevronsRight,
  GraduationCap,
  LibraryBig,
  Mic2,
  UsersRound,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../DepartmentNav/DepartmentNav";
import FacilitiesGallery from "./FacilitiesGallery/FacilitiesGallery";
import FAQ from "../FAQ.tsx/page";

export const metadata: Metadata = {
  title: "Facilities | Nehru School of Management - NCERC",
  description:
    "Explore the student facilities, expert talks, alumni talks and infrastructure at Nehru School of Management (NSM), one of the leading MBA colleges in Kerala.",
  keywords: [
    "engineering colleges thrissur",
    "engineering colleges in thrissur",
    "private engineering colleges in thrissur",
    "top engineering colleges in thrissur",
    "Nehru College of Engineering and Research Centre thrissur",
    "NCERC thrissur",
    "Nehru College thrissur",
    "Nehru College of Engineering thrissur",
  ],
  robots: {
    index: true,
    follow: true,
  },
};

const studentFacilitiesText =
  "Nehru School of Management offers fantastic facilities and services to its students like Assured placements by the leading companies, Village Attachment Programme, Student Mentoring Groups and Activity Based Learning, Value based Education, Meditation and Yoga, Out bond training programmes, Additional training and certifications on courses – For all Domains, Research Projects and Presentation in National and International Conferences, HR Conclave ,National Level management Meets, Highly Qualified and experienced Faculty Member, Best Student Awards, Business Incubation centre, Different Student Clubs, International study Tours, Intercollegiate competitions etc. Students can also enjoy the comfortable and sociable surroundings of their academic environment.";

const expertTalks: string[] = [
  "Mr Santhosh Kumar P – International Life Skill Trainer & Mentor",
  "Mr Sudhir Balachandran – CEO, Subhashika Institute of Advanced Learning",
  "Dr Santhosh Bhaskar – CEO, Orbit Group",
  "Mr Suresh Warrier – Corporate Trainer",
  "Mr Gopan S – Corporate Trainer",
  "Mr Sajeesh K V – CEO, Kay Vee Surgical Instruments & Research Centre",
  "Mr Shahabad Asraf – Head Marketing (North Kerala), KVR Group of Automobiles",
  "Mr Baiju S Nair – Head Marketing & Brand Strategist, Stories Global Home Concepts",
  "Mr Sreekanth C K – Head Marketing & PR, ESAF Bank",
  "Mr Naveen Sreenivasan – Head of Media Solutions, Mathrubhumi Group",
  "Mr Satish Vijayan – Consultant & Digital Strategist, Ministry of MSME",
  "Mr Sudheesh Gopalakrishnan – Brand Manager (India), Malabar Gold & Diamonds",
  "Shri V Hari Prasad – Deputy General Manager, Reserve Bank of India",
  "Ms Durga Nandini B – Assistant Manager, Reserve Bank of India",
  "Shri Guru Kesava Rao – Assistant Manager, Reserve Bank of India",
  "Adv. Ciliya Joji – Legal Associate, NCERC",
  "Mr Sreejith K C – CEO, Growth Catalyst Integrated Business Solution, Kochi",
  "Mr Rajiv V R – Practicing Chartered Accountant, M/s V. Gopinathan & Co.",
  "Shri R Vaidyanathan – IRS, Assistant Commissioner, Central Tax & Central Excise, Palakkad",
  "Shri P K Sasi – KTDC Chairman & Former MLA",
  "R Yasmeen – Entrepreneur (Catering)",
  "Kalki Subramaniam – Entrepreneur, Artist & Fashion Designer",
  "M Nilamma – Entrepreneur, Master Chef & Caterer",
  "Shri S R Nair – Serial Entrepreneur, Author & Business Mentor",
  "Padma Shri M C Dathan – Former Director, VSSC",
  "Ms Lekha Chacko – Disaster Analyst, Kerala Disaster Management Authority",
  "Mr Joju C T – Master Trainer, Snake Rescue Guidelines",
  "Mr Jose Tony – Founder, God’s Grace Wedding & Party Planners",
  "Mr Sudheer Balachandran – CEO, Subiksha Institute of Advanced Learning",
  "Dr Rajeswari R – HR Manager, Technology iHub Foundation, IIT Palakkad",
  "Mr Manoj Kumar – Founder & Executive Director, LifeMithra",
  "Mr Sathish P K – Assistant Excise Commissioner & Vimukthi Manager",
  "Mr Venugopal Rayirath – Finance Trainer, S3 MBA",
  "Mr Ashok P Das – Trainer, S1 MBA",
  "Mr Jhony Joseph – SAP Consultant",
  "Ms Ashashree V S – Founder & Director, Ashachandra Academy & Consultancy",
  "Mr Rathish M – Head HR, Patspin India Ltd (2024–2026)",
  "Mr Shine Antony – International Consultant, Higher Education Trade & Business",
  "R Sunu – Managing Director & Chairman, Pisharody Group",
  "Mr Sumesh – Certified National Trainer, JCI India",
  "Mr Sony Akkara – Executive Director, Eazylink Academy Pvt Ltd",
  "Ms Anu Krishna S S – Deputy Manager, Corporate HR, ESAF Small Finance Bank",
  "Mr Baiju K – Assistant District Industries Officer, Ottapalam",
  "V S Sukumaran – Freelance Consultant",
  "Smt Indira Namboodiripad – Master Trainer & Hon. Secretary, ISTD Kerala Chapter",
  "Dr B Thiagarajan – Joint Registrar, IIT Palakkad",
  "Smt Shubha Varier – Director, Strategic Workforce Solutions, US Tech Solutions (UK)",
  "Mr Ajay Basil Varghese – Serial Entrepreneur & Startup Coach",
  "Mr Vipin Chandra – Director & Chief Trainer, Vista Psycho & Linguistic Training Centre",
  "Mr Krishna Kumar A V – Managing Partner, Shornur Metal Industries LLP",
  "Mr Rajesh Bhaskar – Retired Deputy Manager, New India Assurance Co. Ltd",
  "Mr Anil Augustine – Senior Engagement Officer, CSR Programs, IBM SkillsBuild & CSRBOX",
];

type Alumnus = {
  name: string;
  batch: string;
};

const alumniTalks: Alumnus[] = [
  { name: "Mr Giri Prabhu – CEO, Aiswarya Silks", batch: "2016" },
  { name: "Ms Kashmira Rahman – GM, Empire College of Science, Kerala", batch: "2016" },
  { name: "Mr Suraj R K – Bandhan Bank", batch: "2004" },
  { name: "Mr Arun Kumar P C – Associate Director, People Practice, Happiest Minds Technologies", batch: "2004" },
  { name: "Mrs Praveena O V – Head, Marketing Department, Milma Dairy", batch: "2006" },
  { name: "Mr Sreekanth M S – Head Finance, Kerala Shriram Automall India Ltd", batch: "2006" },
  { name: "Mr Subin A H – Director, Thanima Gold Loan", batch: "2006" },
  { name: "Mrs Praveena Venu K P", batch: "2007" },
  { name: "Mr Pradeep K – Assistant Manager (Sales – Kerala & TN), Sun TV Network Ltd", batch: "2009" },
  { name: "Mr Yoosaf K P – Managing Director, I Can Institutions", batch: "2010" },
  { name: "Ms Sruthi E Sivadas – CRM, NRI Division, ICICI Bank", batch: "2012" },
  { name: "Mr Vivek J Nair – Manager, NRI Relationship, Axis Bank", batch: "2012" },
  { name: "Mr Rejish G – GEM, Nippon Group (Toyota Wing)", batch: "2014" },
  { name: "Mr Krishnapradeep – Head, Department of Finance, Exafluence Inc", batch: "2014" },
  { name: "Mr Giri Prabhu H – Managing Director, RH Weddings & Handlooms", batch: "2016" },
  { name: "Ms Ravitha – Assistant Professor, Saintgits College of Applied Science", batch: "2016" },
  { name: "Mr Sreerag Rayaroth – Co-founder, Nutrichef", batch: "2016" },
  { name: "Ms Kashmeera Rahman – GM Operations, Empire College of Science", batch: "2016" },
  { name: "Ms Shifna – Co-founder, Nutrichef", batch: "2017" },
  { name: "Mr Shahil Shaju P – Senior Associate, Growth & Development, Lakeshore Hospital", batch: "2018" },
  { name: "Adv. Subin Arippara – Director, Thanima Gold Loan", batch: "2006" },
  { name: "Ms Prajitha K Nair – Project Engineer, Dubai", batch: "2020" },
  { name: "Ms Meghna Santhosh – Assistant Professor, P K Das Liberal College of Arts & Science", batch: "2022" },
  { name: "Mr John Fernandez – DVP & State Head (KA & KL), B2B Vertical, Kotak Mahindra Securities", batch: "2005" },
  { name: "Mr Sujish Vattaparambil – MD Sahya Regency; Founder Director, Lement College of Advanced Studies; Director, Smak Cakes & Bakes", batch: "2005" },
  { name: "Mr Sumith P S – Managing Partner, Growvision Enterprise LLP, Thrissur", batch: "2012" },
  { name: "Mr Yoosaf K P – Founder & MD, I Can Institution; MD, London Kids Preschool, Ernakulam", batch: "2010" },
  { name: "Mr V Ram Mohan – Head, Wealth Management & Retail Distribution, Doctor Wealth Financial Services Pvt Ltd", batch: "2007" },
  { name: "Ms Revathi V – Former Deputy Manager, Axis Bank", batch: "2019" },
  { name: "Mrs Sangeetha Lakshman – Assistant Professor, P K Das Liberal College of Arts & Science", batch: "2021" },
  { name: "Mrs Nimna Ayshath M – Assistant Professor, P K Das Liberal College of Arts & Science", batch: "2021" },
];

const infrastructureText =
  "The institution ensures adequate facilities for teaching-learning, augments its infrastructural facilities according to the growing needs of the students and endeavors to upgrade its technological support to create a positive academic atmosphere, the facilities like Digital Library and E-Learning Resources, Air conditioned digital class rooms, IT Labs, Sophisticated library with E-Journal resources, Coffee Corner/Burger Shop/Cafeteria, Transportation Facilities for Day Scholars, Hostels for Boys and Girls, Advanced communication Laboratory/Language lab, Sick rooms, Auditorium, Gymnasium, Air – Conditioned Class Rooms, Transport facility for students, College campus is fully Wi-Fi enabled.";

function SectionHeading({
  eyebrow,
  title,
  description,
  number,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  number: string;
}) {
  return (
    <div className="mb-8 flex flex-col gap-5 border-b border-[#20235A]/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-3xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#8F7746]">
          {eyebrow}
        </p>
        <h2 className="font-serif text-3xl font-medium leading-tight tracking-tight text-[#20235A] sm:text-4xl lg:text-[2.7rem]">
          {title}
        </h2>
        {description && (
          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#625F5B] sm:text-base">
            {description}
          </p>
        )}
      </div>
      <span className="hidden font-serif text-5xl text-[#20235A]/15 sm:block">
        {number}
      </span>
    </div>
  );
}

function FeatureStat({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-4 border-t border-white/15 py-5 sm:border-l sm:border-t-0 sm:px-6 sm:first:border-l-0 sm:first:pl-0">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#D2B87C]/50 text-[#D2B87C]">
        {icon}
      </div>
      <div>
        <p className="font-serif text-2xl text-white sm:text-3xl">{value}</p>
        <p className="mt-1 text-xs uppercase tracking-[0.12em] text-white/60">
          {label}
        </p>
      </div>
    </div>
  );
}

export default function MBAFacilitiesPage() {
  return (
    <>
      <SiteHeader />

      {/* Premium hero */}
      <section
        className="relative isolate overflow-hidden bg-[#20235A] text-white"
        aria-labelledby="facilities-title"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:52px_52px]" />
          <div className="absolute -right-40 -top-52 h-[520px] w-[520px] rounded-full border border-white/[0.09]" />
          <div className="absolute -right-20 -top-32 h-[360px] w-[360px] rounded-full border border-[#D2B87C]/20" />
          <div className="absolute right-20 top-10 h-40 w-40 rounded-full border border-white/[0.08]" />
          <div className="absolute bottom-0 left-0 h-1 w-36 bg-[#D2B87C]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pb-12 pt-16 sm:pb-16 sm:pt-24 lg:px-8 lg:pb-20 lg:pt-28">
          <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
            <div>
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-10 bg-[#D2B87C]" />
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D2B87C] sm:text-sm">
                  Nehru School of Management · NCERC
                </p>
              </div>

              <h1
                id="facilities-title"
                className="max-w-3xl font-serif text-5xl font-medium leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl"
              >
                An environment
                <br />
                <span className="italic text-[#D2B87C]">
                  built for growth.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                Explore the learning resources, industry interactions, alumni
                connections and campus infrastructure that support the NSM
                student experience.
              </p>

              <a
                href="#student-facilities"
                className="group mt-9 inline-flex items-center gap-3 border border-[#D2B87C]/70 px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#D2B87C] hover:text-[#20235A]"
              >
                Explore our facilities
                <ArrowDown
                  size={17}
                  className="transition-transform group-hover:translate-y-1"
                />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-x-5 border-t border-white/15 sm:grid-cols-3 lg:grid-cols-1 lg:gap-x-0">
              <FeatureStat
                icon={<UsersRound size={21} />}
                value="Student"
                label="Centred learning"
              />
              <FeatureStat
                icon={<Mic2 size={21} />}
                value="Industry"
                label="Expert interactions"
              />
              <div className="col-span-2 sm:col-span-1">
                <FeatureStat
                  icon={<GraduationCap size={21} />}
                  value="Alumni"
                  label="Lifelong connections"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department navigation */}
      <div className="border-b border-[#20235A]/10 bg-[#FAF8F3]">
        <InnerHeader />
      </div>

      <main className="overflow-hidden bg-white text-[#1E1917]">
        {/* Student facilities */}
        <section
          id="student-facilities"
          className="scroll-mt-24 bg-white py-16 sm:py-20 lg:py-24"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeading
              eyebrow="01 / The student experience"
              title="Student facilities"
              description="A supportive learning environment that brings together academic development, personal wellbeing, industry exposure and opportunities beyond the classroom."
              number="01"
            />

            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
              <div className="relative">
                <div className="absolute -left-6 top-0 h-24 w-1 bg-[#D2B87C]" />
                <p className="text-justify text-base leading-8 text-[#625F5B] sm:text-lg sm:leading-9">
                  {studentFacilitiesText}
                </p>
                <div className="mt-8 flex items-start gap-3 border-t border-[#20235A]/10 pt-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#20235A]/5 text-[#8F7746]">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-[#20235A]">
                      Learning beyond the classroom
                    </p>
                    <p className="mt-1 text-sm leading-6 text-[#625F5B]">
                      Academic, professional and personal development
                      opportunities form part of the wider student experience.
                    </p>
                  </div>
                </div>
              </div>

              <div className="min-w-0">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8F7746]">
                    Explore the campus experience
                  </p>
                  <span className="h-px flex-1 bg-[#20235A]/10" />
                </div>
                <div className="overflow-hidden rounded-sm border border-[#20235A]/10 bg-[#FAF8F3] p-3 sm:p-5">
                  <FacilitiesGallery />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expert talks */}
        <section
          id="expert-talks"
          className="scroll-mt-24 bg-[#FAF8F3] py-16 sm:py-20 lg:py-24"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeading
              eyebrow="02 / Industry perspectives"
              title="Expert talks"
              description="Professionals, trainers, entrepreneurs and leaders share perspectives from their fields, connecting management education with real-world experience."
              number="02"
            />

            <div className="mb-8 grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-4 border border-[#20235A]/10 bg-white p-5 sm:p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                  <Mic2 size={23} />
                </div>
                <div>
                  <p className="font-serif text-2xl text-[#20235A]">
                    Industry insights
                  </p>
                  <p className="mt-1 text-sm text-[#625F5B]">
                    Learn from professional experience.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 border border-[#20235A]/10 bg-white p-5 sm:p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#D2B87C]/25 text-[#20235A]">
                  <UsersRound size={23} />
                </div>
                <div>
                  <p className="font-serif text-2xl text-[#20235A]">
                    Diverse expertise
                  </p>
                  <p className="mt-1 text-sm text-[#625F5B]">
                    Perspectives from multiple sectors.
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-[#20235A]/10 bg-white p-5 sm:p-8 lg:p-10">
              <div className="mb-7 flex flex-col gap-2 border-b border-[#20235A]/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="font-serif text-2xl text-[#20235A] sm:text-3xl">
                  Guest speakers &amp; mentors
                </h3>
                <p className="text-sm text-[#8F7746]">
                  Professional engagement at NSM
                </p>
              </div>

              <ol className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-2">
                {expertTalks.map((talk, index) => (
                  <li
                    key={`expert-${index}`}
                    className="group flex min-w-0 items-start gap-3 border-b border-[#20235A]/[0.07] py-4 last:border-b-0 sm:even:border-b sm:[&:nth-last-child(2)]:border-b-0"
                  >
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#20235A]/[0.055] font-serif text-xs text-[#8F7746] transition-colors group-hover:bg-[#20235A] group-hover:text-[#D2B87C]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm leading-7 text-[#514D49] sm:text-[15px]">
                        {talk}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Alumni talks */}
        <section
          id="alumni-talks"
          className="scroll-mt-24 bg-white py-16 sm:py-20 lg:py-24"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeading
              eyebrow="03 / The alumni network"
              title="Alumni talks"
              description="Reconnect with the journeys of NSM alumni across business, finance, technology, education, entrepreneurship and other professional fields."
              number="03"
            />

            <div className="mb-7 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
              <div className="max-w-2xl">
                <p className="text-sm leading-7 text-[#625F5B]">
                  The alumni directory below preserves the names, professional
                  designations and batch years provided by NSM.
                </p>
              </div>
              <div className="flex items-center gap-3 border-l-2 border-[#D2B87C] bg-[#FAF8F3] px-4 py-3">
                <GraduationCap size={23} className="text-[#8F7746]" />
                <div>
                  <p className="font-serif text-2xl leading-none text-[#20235A]">
                    {alumniTalks.length}
                  </p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#625F5B]">
                    Alumni entries
                  </p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden border border-[#20235A]/15">
              <div className="flex flex-col gap-3 bg-[#20235A] px-5 py-5 text-white sm:flex-row sm:items-center sm:justify-between sm:px-7">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D2B87C]">
                    NSM · Alumni directory
                  </p>
                  <h3 className="mt-1 font-serif text-xl sm:text-2xl">
                    Alumni &amp; professional designations
                  </h3>
                </div>
                <p className="text-xs text-white/60">
                  Scroll horizontally on smaller screens
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[660px] border-collapse text-left">
                  <thead>
                    <tr className="border-b border-[#20235A]/15 bg-[#F4F1E9] text-[11px] font-bold uppercase tracking-[0.13em] text-[#20235A]">
                      <th scope="col" className="w-20 px-5 py-4 text-center">
                        Sl. No.
                      </th>
                      <th scope="col" className="px-5 py-4">
                        Name &amp; designation
                      </th>
                      <th scope="col" className="w-32 px-5 py-4">
                        Batch
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-[#20235A]/[0.08]">
                    {alumniTalks.map((alumnus, index) => (
                      <tr
                        key={`alumnus-${index}`}
                        className="group transition-colors hover:bg-[#FAF8F3]"
                      >
                        <td className="px-5 py-4 text-center">
                          <span className="font-serif text-sm text-[#8F7746]">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </td>
                        <td className="px-5 py-4">
                          <p className="text-sm leading-6 text-[#514D49] transition-colors group-hover:text-[#20235A] sm:text-[15px]">
                            {alumnus.name}
                          </p>
                        </td>
                        <td className="px-5 py-4">
                          <span className="inline-flex min-w-14 items-center justify-center border border-[#D2B87C]/70 bg-[#D2B87C]/10 px-3 py-1.5 text-sm font-semibold tabular-nums text-[#20235A]">
                            {alumnus.batch}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex flex-col gap-2 border-t border-[#20235A]/10 bg-[#FAF8F3] px-5 py-4 text-xs text-[#625F5B] sm:flex-row sm:items-center sm:justify-between sm:px-7">
                <span>Alumni records supplied by Nehru School of Management.</span>
                <span>{alumniTalks.length} entries listed</span>
              </div>
            </div>
          </div>
        </section>

        {/* Infrastructure */}
        <section
          id="infrastructure"
          className="scroll-mt-24 bg-[#FAF8F3] py-16 sm:py-20 lg:py-24"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeading
              eyebrow="04 / Campus resources"
              title="Infrastructure, physical & academics"
              description="Facilities and technological resources designed to support teaching, learning, research and day-to-day campus life."
              number="04"
            />

            <div className="grid overflow-hidden border border-[#20235A]/10 bg-white lg:grid-cols-[0.7fr_1.3fr]">
              <div className="relative flex min-h-64 flex-col justify-between overflow-hidden bg-[#20235A] p-7 text-white sm:p-10 lg:min-h-full">
                <div
                  aria-hidden="true"
                  className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10"
                />
                <div
                  aria-hidden="true"
                  className="absolute -right-8 -top-8 h-40 w-40 rounded-full border border-[#D2B87C]/30"
                />
                <div className="relative flex h-14 w-14 items-center justify-center border border-[#D2B87C]/50 text-[#D2B87C]">
                  <Building2 size={28} strokeWidth={1.5} />
                </div>
                <div className="relative mt-12">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                    Campus environment
                  </p>
                  <h3 className="mt-3 max-w-sm font-serif text-3xl leading-tight sm:text-4xl">
                    Resources for learning and discovery.
                  </h3>
                  <p className="mt-5 max-w-sm text-sm leading-7 text-white/65">
                    Academic spaces, learning resources and essential campus
                    facilities support the wider student experience.
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-9 lg:p-12">
                <div className="mb-6 flex items-center gap-3">
                  <LibraryBig size={22} className="text-[#8F7746]" />
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8F7746]">
                    Available infrastructure
                  </p>
                </div>

                <p className="text-justify text-base leading-8 text-[#625F5B] sm:text-lg sm:leading-9">
                  {infrastructureText}
                </p>

                <div className="mt-8 border-t border-[#20235A]/10 pt-6">
                  <a
                    href="#student-facilities"
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-[#20235A] transition-colors hover:text-[#8F7746]"
                  >
                    Return to student facilities
                    <ArrowUpRight
                      size={17}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Closing callout */}
        <section className="bg-white px-6 py-14 sm:py-20">
          <div className="relative mx-auto max-w-7xl overflow-hidden bg-[#20235A] px-6 py-10 sm:px-10 sm:py-14 lg:px-14">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full border border-white/10"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-2 -top-10 h-44 w-44 rounded-full border border-[#D2B87C]/25"
            />

            <div className="relative flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                  The NSM experience
                </p>
                <h2 className="mt-4 font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
                  More than a place to learn.
                  <br />
                  <span className="italic text-[#D2B87C]">
                    A place to grow.
                  </span>
                </h2>
                <p className="mt-5 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
                  Discover the academic community, learning opportunities and
                  campus experience at Nehru School of Management.
                </p>
              </div>

              <a
                href="#student-facilities"
                className="group inline-flex w-fit shrink-0 items-center gap-3 border border-[#D2B87C] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#D2B87C] hover:text-[#20235A]"
              >
                Explore facilities
                <ChevronsRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </section>
      </main>

      <FAQ />
      <FooterSection />
    </>
  );
}