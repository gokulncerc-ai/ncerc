import type { ReactNode } from "react";
import Image from "next/image";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import DepartmentNav from "../../DepartmentNav/DepartmentNav";

export const metadata = {
  title:
    "Top Engineering Colleges in Thrissur | Electronics and Communication Engineering - NCERC",
  description:
    "Nehru College of Engineering and Research Centre is renowned as one of the leading colleges in Kerala for Electrical and Communication Engineering, offering quality education that prepares students for successful careers in the electrical and communication technology sectors across South India.",
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
  robots: { index: true, follow: true },
};

// Folder name has a literal space ("academic excellence") - percent-encoded
// below since a raw space in a URL path is unreliable across browsers.
const RANK_HOLDERS_IMAGE_BASE =
  "/images/dpt/electronics-and-communication-engineering/academic%20excellence/rank-holders";

type RankHolder = {
  number: number;
  description: string;
  batch: string;
  images: string[];
};

const rankHolders: RankHolder[] = [
  {
    number: 1,
    description:
      "Proud moment in ECE Department \u2013 Fasna M got First Rank in Electronics and Communication Engineering. Totally 11 ranks were secured by the ECE Department.",
    batch: "2014 to 2018",
    images: [`${RANK_HOLDERS_IMAGE_BASE}/rank-holder-pic-1.png`],
  },
  {
    number: 2,
    description:
      "Proud moment in ECE Department \u2013 Pravitha Velayudhan got First Rank in Electronics and Communication Engineering. Totally 9 ranks were secured by the ECE Department.",
    batch: "2013 to 2017",
    images: [`${RANK_HOLDERS_IMAGE_BASE}/rank-holder-pic-2.png`],
  },
  {
    number: 3,
    description:
      "Proud moment in ECE Department \u2013 Ms. Sharu S got Second Rank in Electronics and Communication Engineering. Totally 11 ranks were secured by the ECE Department.",
    batch: "2012 to 2016",
    images: [
      `${RANK_HOLDERS_IMAGE_BASE}/rank-holder-pic-3.png`,
      `${RANK_HOLDERS_IMAGE_BASE}/rank-holder-pic-3-1.png`,
    ],
  },
  {
    number: 4,
    description:
      "Proud moment in ECE Department \u2013 Anagha P got Third Rank in Electronics and Communication Engineering.",
    batch: "2010 to 2014",
    images: [`${RANK_HOLDERS_IMAGE_BASE}/rank-holder-pic-4.png`],
  },
  {
    number: 5,
    description:
      "Proud moment in ECE Department \u2013 Deepa M (31st) & Aiswarya P (49th) ranks in Electronics and Communication Engineering.",
    batch: "2009 to 2013",
    images: [`${RANK_HOLDERS_IMAGE_BASE}/rank-holder-pic-5.png`],
  },
  {
    number: 6,
    description:
      "Proud moment in ECE Department \u2013 our student Deepika A G got 4th Rank in Electronics and Communication Engineering.",
    batch: "",
    images: [`${RANK_HOLDERS_IMAGE_BASE}/rank-holder-pic-6.png`],
  },
];

function SectionBlock({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="border-t border-slate-200 pt-12 first:border-t-0 first:pt-0">
      <h2 className="font-display text-2xl font-bold text-navy-950 sm:text-3xl">
        {title}
      </h2>
      <div className="mt-4 h-1 w-12 bg-gold-500" />
      <div className="mt-8 space-y-10">{children}</div>
    </div>
  );
}

function RankHolderCard({ holder }: { holder: RankHolder }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
      <div className="p-6 sm:p-8">
        <div className="flex items-start gap-4">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy-950 font-display text-sm font-bold text-gold-400">
            {holder.number}
          </span>

          <div>
            <p className="text-base leading-8 text-slate-600">
              {holder.description}
            </p>
            {holder.batch && (
              <p className="mt-1 text-sm font-semibold text-gold-600">
                Batch: {holder.batch}
              </p>
            )}
          </div>
        </div>

        <div
          className={`mt-6 grid gap-4 ${
            holder.images.length > 1 ? "sm:grid-cols-2" : ""
          }`}
        >
          {holder.images.map((src) => (
            <div
              key={src}
              className="relative h-80 w-full overflow-hidden rounded-xl border border-slate-200 bg-white"
            >
              <Image
                src={src}
                alt={`Rank holder certificate ${holder.number}`}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-contain p-3"
              />
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function UniversityRankHoldersPage() {
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
          {/* Tagline / Department Badge */}
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#D2B87C]" />
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D2B87C] sm:text-sm">
              NBA Accredited
            </p>
          </div>

          {/* Heading with Serif & Italicized Accent Typography */}
          <h1 className="mt-4 font-serif text-3xl font-normal leading-tight tracking-[-0.025em] text-white sm:text-4xl lg:text-5xl">
            Electronics & <span className="italic text-[#D2B87C]">Communication Engineering</span>
          </h1>

          {/* Accent Divider Line */}
          <div className="mt-6 h-px w-20 bg-[#D2B87C]" />
        </div>

        {/* Bottom Accent Bar */}
        <div className="absolute bottom-0 inset-x-0 h-1 bg-[#D2B87C]" />
      </section>

      {/* Page Content */}
      <main className="bg-white">
        {/* Inner Sub-Header Navigation */}
        <DepartmentNav />

        <section className="py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6">
            <SectionBlock title="ECE Department Rank Holders">
              {rankHolders.map((holder) => (
                <RankHolderCard key={holder.number} holder={holder} />
              ))}
            </SectionBlock>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}