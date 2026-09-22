import Link from "next/link";
import {
  ArrowUpRight,
  ClipboardCheck,
  Download,
  FileText,
  Network,
  ShieldCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import OrganizationalChart from "../../../../public/images/NCERC-OC-chart.jpg";

type DisclosureItem = {
  title: string;
  description: string;
  type: string;
  href: string;
  icon: LucideIcon;
  /** true = internal Next.js route, false = PDF / external URL */
  internal: boolean;
  /** true = trigger browser file download */
  download?: boolean;
};

const disclosures: DisclosureItem[] = [
  {
    title: "Courses Applied for NBA",
    description:
      "List of programmes submitted for accreditation by the National Board of Accreditation (NBA).",
    type: "PDF Document",
    href: "https://ncerc.ac.in/downloads/mandatory-disclosure/Mandatory-disclosure-nba.pdf",
    icon: FileText,
    internal: false,
  },
  {
    title: "Organizational Chart",
    description:
      "The administrative structure of the institution and how its offices and departments are organized.",
    type: "Image File",
    href: OrganizationalChart.src,
    icon: Network,
    internal: false,
    download: true,
  },
  {
    title: "Mandatory Disclosure",
    description:
      "Approvals and statutory information that the institution is required to publish.",
    type: "Approvals",
    href: "https://ncerc.ac.in/approvals",
    icon: ClipboardCheck,
    internal: false,
  },
];

const cardClassName =
  "group relative flex h-full min-w-0 flex-col justify-between gap-8 overflow-hidden rounded-2xl bg-white p-6 shadow-lg shadow-navy-950/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy-950/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500 sm:p-8";

function DisclosureCard({
  item,
  index,
}: {
  item: DisclosureItem;
  index: number;
}) {
  const { icon: Icon, title, description, type, href, internal, download } = item;

  const content = (
    <>
      <span className="pointer-events-none absolute right-6 top-4 font-display text-5xl font-bold text-slate-100 sm:text-6xl">
        0{index + 1}
      </span>

      <div className="relative min-w-0">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy-950 transition-colors duration-300 group-hover:bg-gold-500">
          <Icon
            size={20}
            strokeWidth={1.5}
            className="text-gold-500 transition-colors duration-300 group-hover:text-navy-950"
          />
        </span>

        <span className="mt-6 block text-xs font-semibold uppercase tracking-wide text-gold-500">
          {type}
        </span>

        <h3 className="mt-2 break-words font-display text-xl font-semibold leading-snug text-navy-950 sm:text-2xl">
          {title}
        </h3>

        <p className="mt-3 break-words text-sm leading-relaxed text-slate-600">
          {description}
        </p>
      </div>

      <span className="relative inline-flex w-fit items-center gap-2 text-sm font-semibold uppercase tracking-wide text-navy-950 transition group-hover:text-gold-500">
        {download ? "Download Image" : internal ? "View Page" : "Open"}
        {download ? (
          <Download
            size={16}
            className="shrink-0 transition-transform duration-300 group-hover:translate-y-0.5"
          />
        ) : (
          <ArrowUpRight
            size={16}
            className="shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        )}
      </span>
    </>
  );

  if (internal) {
    return (
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cardClassName}
      >
        {content}
      </Link>
    );
  }

  return (
    <a
      href={href}
      download={download ? "NCERC-Organizational-Chart.jpg" : undefined}
      target={download ? undefined : "_blank"}
      rel={download ? undefined : "noopener noreferrer"}
      className={cardClassName}
    >
      {content}
    </a>
  );
}

export default function DisclosurePage() {
  return (
    <main className="w-full max-w-[100vw] overflow-x-clip bg-white">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-950 py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute right-0 top-10 hidden h-32 w-32 lg:block"
          style={{
            backgroundImage:
              "radial-gradient(currentColor 1.5px, transparent 1.5px)",
            backgroundSize: "14px 14px",
            color: "#d9a441",
            opacity: 0.3,
          }}
        />

        <div className="relative mx-auto flex w-full max-w-8xl flex-col gap-8 px-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 shrink-0 bg-gold-500" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-500">
                Transparency &amp; Compliance
              </span>
            </div>

            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Mandatory
              <br />
              <span className="text-gold-500">Disclosure</span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
              Access the official documents and information that NCERC
              publishes for students, parents, regulators and the public.
            </p>
          </div>

          <div className="flex shrink-0 flex-wrap items-center gap-3">
            <span className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white/60">
              NCERC
            </span>
            <span className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white/60">
              Public Documents
            </span>
          </div>
        </div>
      </section>

      {/* Disclosure links */}
      <section className="w-full overflow-hidden bg-[#faf7f2] py-20">
        <div className="mx-auto w-full max-w-8xl px-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <span className="h-px w-10 shrink-0 bg-gold-500" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-500">
                  Documents
                </span>
              </div>

              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-navy-950 sm:text-4xl">
                Official records,
                <br />
                <span className="text-gold-500">available to everyone.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-relaxed text-slate-600 sm:text-base">
              Select a card below to view or download the relevant document.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {disclosures.map((item, index) => (
              <DisclosureCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Closing statement */}
      <section className="w-full overflow-hidden bg-navy-950 py-16">
        <div className="mx-auto w-full max-w-8xl px-6 text-center">
          <div className="mx-auto max-w-2xl">
            <ShieldCheck
              size={30}
              strokeWidth={1.4}
              className="mx-auto text-gold-500"
            />

            <h2 className="mt-4 font-display text-2xl font-semibold leading-tight text-white sm:text-3xl">
              Open, accountable and
              <br />
              <span className="text-gold-500">committed to quality.</span>
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
              NCERC is an ISO 9001:2015 certified institution, approved by
              AICTE and Re-Accredited by NAAC with an &lsquo;A&rsquo; Grade.
              Publishing this information reflects our commitment to
              transparency.
            </p>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}