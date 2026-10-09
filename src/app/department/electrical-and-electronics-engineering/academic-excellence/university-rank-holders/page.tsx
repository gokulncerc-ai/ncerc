import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../../DepartmentNav/page";

export const metadata = {
  title:
    "Top Engineering Colleges in Thrissur | Electrical and Computer Engineering - NCERC",
  description:
    "Nehru College of Engineering and Research Centre is renowned as one of the leading colleges in Kerala for Electrical and Communication Engineering, offering quality education that prepares students for successful careers in the electrical and communication technology sectors across South India.",
  keywords: [
    "Electrical and Communication Engineering colleges in Kerala",
    "Best Electrical and Communication Engineering colleges in Kerala",
    "Electrical and Communication Engineering in Thrissur",
    "Top Electrical and Communication Engineering colleges in Kerala",
    "Electrical and Communication Engineering admission Kerala",
    "Electrical and Communication Engineering in Palakkad",
    "Electrical and Communication Engineering colleges in South India",
    "Best college for Electrical and Communication Engineering in Kerala",
    "Electrical and Communication",
  ],
  robots: { index: true, follow: true },
};

type Ranker = {
  name: string;
  rank: string;
};

type Batch = {
  years: string;
  rankers: Ranker[];
};

const batches: Batch[] = [
  {
    years: "2014-2018",
    rankers: [
      { name: "Jijithamol", rank: "2nd Rank" },
      { name: "Sanjay Jayan", rank: "12th Rank" },
      { name: "Aneesh L", rank: "18th Rank" },
      { name: "Aravind R Pisharody", rank: "36th Rank" },
    ],
  },
  {
    years: "2013-2017",
    rankers: [
      { name: "Aiswarya. K. P", rank: "9th Rank" },
      { name: "Anagha Radhakrishnan", rank: "11th Rank" },
      { name: "Jijitha. U", rank: "21st Rank" },
      { name: "Noushiya. A", rank: "26th Rank" },
      { name: "Aswathy R", rank: "39th Rank" },
    ],
  },
  {
    years: "2012-2016",
    rankers: [
      { name: "Sreelakshmi S", rank: "1st Rank" },
      { name: "Arjun R", rank: "22nd Rank" },
      { name: "Reshmi Krishnan V", rank: "34th Rank" },
    ],
  },
  {
    years: "2011-2015",
    rankers: [{ name: "Naveen V", rank: "29th Rank" }],
  },
  {
    years: "2010-2014",
    rankers: [
      { name: "Nirsha K I", rank: "4th Rank" },
      { name: "Divya K S", rank: "7th Rank" },
      { name: "Sahana P S", rank: "18th Rank" },
      { name: "Pranitha M P", rank: "19th Rank" },
      { name: "Kripa Nandakumar M", rank: "26th Rank" },
    ],
  },
  {
    years: "2009-2013",
    rankers: [
      { name: "Madhavi K", rank: "1st Rank" },
      { name: "Anildas", rank: "6th Rank" },
      { name: "Sreelekha S", rank: "9th Rank" },
      { name: "Rishana N", rank: "30th Rank" },
      { name: "Ramya Rajeev K", rank: "34th Rank" },
      { name: "Akhil U.K", rank: "40th Rank" },
    ],
  },
  {
    years: "2008-2012",
    rankers: [{ name: "Deepak M", rank: "5th Rank" }],
  },
  {
    years: "2007-2011",
    rankers: [{ name: "Sreerekha Raj", rank: "4th Rank" }],
  },
];

const totalRankers = batches.reduce(
  (total, batch) => total + batch.rankers.length,
  0
);

const firstRankCount = batches.reduce(
  (total, batch) =>
    total +
    batch.rankers.filter((ranker) => ranker.rank === "1st Rank").length,
  0
);

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <div className="mb-5 flex items-center gap-3">
        <span className="h-px w-10 bg-[#D2B87C]" />

        <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
          {eyebrow}
        </p>
      </div>

      <h2 className="font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-sm leading-7 text-[#1E1917]/65 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

function SummaryCard({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-3xl border border-[#1E1917]/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D2B87C]/70 hover:shadow-[0_16px_40px_rgba(32,35,90,0.08)]">
      <p className="font-serif text-3xl text-[#20235A] sm:text-4xl">
        {value}
      </p>

      <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
        {label}
      </p>
    </div>
  );
}

function BatchTable({ batch }: { batch: Batch }) {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-[#1E1917]/10 bg-white shadow-[0_10px_35px_rgba(32,35,90,0.05)]">
      {/* Batch Header */}
      <div className="flex flex-col gap-4 bg-[#20235A] px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
            University Rank Holders
          </p>

          <h3 className="mt-2 font-serif text-2xl text-white sm:text-3xl">
            {batch.years}
          </h3>
        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D2B87C]/30 text-[#D2B87C]">
          <span className="font-serif text-lg">{batch.rankers.length}</span>
        </div>
      </div>

      {/* Desktop Table */}
      <div className="hidden overflow-x-auto md:block">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-[#1E1917]/10 bg-[#F2EFE8]">
              <th className="w-24 px-8 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                S.No.
              </th>

              <th className="px-8 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                Name
              </th>

              <th className="px-8 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                University Rank
              </th>
            </tr>
          </thead>

          <tbody>
            {batch.rankers.map((ranker, index) => (
              <tr
                key={ranker.name}
                className="border-b border-[#1E1917]/8 last:border-b-0 transition-colors duration-200 hover:bg-[#FAF7F2]"
              >
                <td className="px-8 py-5">
                  <span className="text-[10px] font-semibold tracking-[0.18em] text-[#8F7746]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </td>

                <td className="px-8 py-5">
                  <p className="font-serif text-lg text-[#20235A]">
                    {ranker.name}
                  </p>
                </td>

                <td className="px-8 py-5">
                  <span className="inline-flex rounded-full border border-[#D2B87C]/50 bg-[#D2B87C]/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8F7746]">
                    {ranker.rank}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="divide-y divide-[#1E1917]/8 md:hidden">
        {batch.rankers.map((ranker, index) => (
          <div
            key={ranker.name}
            className="flex items-center gap-4 px-6 py-5"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F2EFE8] text-[10px] font-semibold tracking-[0.12em] text-[#8F7746]">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className="min-w-0 flex-1">
              <p className="font-serif text-lg text-[#20235A]">
                {ranker.name}
              </p>

              <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8F7746]">
                {ranker.rank}
              </p>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

export default function UniversityRankHoldersPage() {
  return (
    <>
      <SiteHeader />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[#20235A]">
        <div className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full border border-[#D2B87C]/20" />
        <div className="pointer-events-none absolute -right-8 -top-16 h-52 w-52 rounded-full border border-[#D2B87C]/10" />
        <div className="pointer-events-none absolute bottom-[-180px] left-[-120px] h-96 w-96 rounded-full border border-white/5" />

        <div className="relative mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          <div className="max-w-4xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#D2B87C]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D2B87C]">
                Academic Excellence
              </p>
            </div>

            <h1 className="max-w-4xl font-serif text-4xl leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              University rank holders,
              <span className="block text-[#D2B87C]">
                excellence recognised.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
              Celebrating students of the Electrical and Electronics
              Engineering department who have achieved outstanding positions
              in university examinations.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#rank-holders"
                className="group inline-flex items-center gap-2 rounded-full bg-[#D2B87C] px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#20235A] transition-all duration-300 hover:bg-white"
              >
                View Rank Holders
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#overview"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:border-[#D2B87C]/60 hover:text-[#D2B87C]"
              >
                Academic Excellence
              </a>
            </div>
          </div>
        </div>

        {/* Hero Information Strip */}
        <div className="border-t border-white/10 bg-white/[0.03]">
          <div className="mx-auto grid max-w-[1440px] grid-cols-1 sm:grid-cols-3">
            <div className="border-b border-white/10 px-6 py-5 sm:border-b-0 sm:border-r sm:px-10 lg:px-16">
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                Recognition
              </p>

              <p className="mt-2 font-serif text-lg text-white">
                University Ranks
              </p>
            </div>

            <div className="border-b border-white/10 px-6 py-5 sm:border-b-0 sm:border-r sm:px-10 lg:px-16">
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                Batches
              </p>

              <p className="mt-2 font-serif text-lg text-white">
                {batches.length} Academic Batches
              </p>
            </div>

            <div className="px-6 py-5 sm:px-10 lg:px-16">
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                Records
              </p>

              <p className="mt-2 font-serif text-lg text-white">
                {totalRankers} Rank Holders
              </p>
            </div>
          </div>
        </div>
      </section>

      <InnerHeader />

      <main className="bg-[#FAF7F2]">
        {/* Introduction */}
        <section id="overview" className="border-b border-[#1E1917]/10">
          <div className="mx-auto grid max-w-[1440px] gap-10 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-[1fr_0.8fr] lg:gap-20 lg:px-16 lg:py-24">
            <SectionHeading
              eyebrow="University Recognition"
              title="A record of academic distinction."
              description="University rank holders represent the dedication, discipline and academic commitment of students who have excelled in their university examinations."
            />

            <div className="flex items-end">
              <div className="w-full rounded-[2rem] border border-[#1E1917]/10 bg-white p-7 sm:p-8">
                <div className="flex items-start gap-4">
                  <span className="mt-1 h-10 w-1 shrink-0 bg-[#D2B87C]" />

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                      Electrical &amp; Electronics Engineering
                    </p>

                    <p className="mt-4 font-serif text-2xl leading-snug text-[#20235A]">
                      Excellence built through consistent academic performance.
                    </p>

                    <p className="mt-4 text-sm leading-6 text-[#1E1917]/60">
                      These university rankings reflect the department&apos;s
                      commitment to academic quality and the achievements of
                      its students across multiple graduating batches.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
              <SectionHeading
                eyebrow="Academic Snapshot"
                title="A legacy of university achievement."
                description="The rank-holder records highlight academic accomplishments across successive batches of the department."
              />

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <SummaryCard
                  value={String(batches.length)}
                  label="Batches represented"
                />

                <SummaryCard
                  value={String(totalRankers)}
                  label="University rank holders"
                />

                <SummaryCard
                  value={String(firstRankCount)}
                  label="First rank holders"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Rank Holder Records */}
        <section id="rank-holders" className="bg-[#F2EFE8]">
          <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <SectionHeading
                eyebrow="Rank Holder Records"
                title="University rank holders by batch."
                description="Explore the recorded university rank holders from the Electrical and Electronics Engineering department across different academic batches."
              />

              <div className="hidden shrink-0 lg:block">
                <p className="text-right text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                  2007 — 2018
                </p>
              </div>
            </div>

            <div className="mt-12 grid gap-6">
              {batches.map((batch) => (
                <BatchTable key={batch.years} batch={batch} />
              ))}
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="bg-[#20235A]">
          <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="max-w-3xl">
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#D2B87C]" />

                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                    Academic Excellence
                  </p>
                </div>

                <h2 className="font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
                  Achievement today.
                  <span className="block text-[#D2B87C]">
                    Inspiration for tomorrow.
                  </span>
                </h2>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
                  University rank holders continue to represent the culture of
                  academic excellence fostered by the Electrical and
                  Electronics Engineering department.
                </p>
              </div>

              <a
                href="#rank-holders"
                className="group inline-flex w-fit items-center gap-3 rounded-full bg-[#D2B87C] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#20235A] transition-all duration-300 hover:bg-white"
              >
                View Rank Records

                <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}