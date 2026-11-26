import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Download, FileText } from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";

import AICTEImage from "@/../public/images/aboutus/aicte.png";
import KTUImage from "@/../public/images/aboutus/ktu.png";

type ApprovalDocument = {
  label: string;
  href: string;
  moreHref?: string;
};

const approvalDocs: ApprovalDocument[] = [
  {
    label:
      "All India Council for Technical Educational Approval (AICTE) 2026 - 27",
    href: "/images/aboutus/EOAReport2026-2027NCERC.pdf",
    moreHref: "/about/disclosure/approvals/approval-details",
  },
  {
    label: "Provisional Affiliation Order (KTU) 2026 - 2027",
    href: "/images/aboutus/Provisionalorder_2026_27_ncerc.pdf",
    moreHref: "/about/disclosure/approvals/ktu-details",
  },
  {
    label: "UGC 2F Status",
    href: "/images/aboutus/NCERC2(F)Status.pdf",
  },
  {
    label: "UGC Autonomous",
    href: "/images/aboutus/NCERC-AUTONOMOUS.pdf",
  },
  {
    label: "Autonomous",
    href: "/images/aboutus/Autonmous-Nehrumodified.pdf",
  },
];

// Scoped styles keep this page independent of the site's primary colour.
// The serif stack matches Tailwind's font-serif used in your reference.
const pageStyles = `
  .ncerc-approvals {
    --approval-primary: oklch(from #20235A l c h);
    --approval-gold: oklch(from #D2B87C l c h);
    --approval-accent: oklch(from #8F7746 l c h);
    --approval-background: oklch(from #FAF7F2 l c h);
    --approval-surface: oklch(from #F2EFE8 l c h);
    --approval-paper: oklch(1 0 0);
    --approval-ink: oklch(from #1E1917 l c h);
    --approval-muted: color-mix(in oklab, var(--approval-ink) 70%, transparent);
    --approval-border: color-mix(in oklab, var(--approval-primary) 14%, transparent);
    --approval-on-primary: var(--approval-paper);
    --approval-serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
    --approval-sans: ui-sans-serif, system-ui, sans-serif;
    background: var(--approval-background);
    color: var(--approval-ink);
    font-family: var(--approval-sans);
    letter-spacing: 0;
  }

  .ncerc-approvals .approval-container {
    width: 100%;
    max-width: 1200px;
    margin-inline: auto;
    padding-inline: 20px;
  }

  .ncerc-approvals .approval-banner {
    background: var(--approval-primary);
    color: var(--approval-on-primary);
    border-bottom: 4px solid var(--approval-gold);
    padding-block: 48px;
  }

  .ncerc-approvals .approval-eyebrow {
    display: flex;
    align-items: center;
    gap: 12px;
    margin: 0 0 20px;
    color: var(--approval-accent);
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    line-height: 1.6;
  }

  .ncerc-approvals .approval-eyebrow::before {
    content: "";
    width: 36px;
    height: 1px;
    flex-shrink: 0;
    background: currentColor;
  }

  .ncerc-approvals .approval-banner .approval-eyebrow {
    color: var(--approval-gold);
  }

  .ncerc-approvals .approval-title,
  .ncerc-approvals .approval-heading,
  .ncerc-approvals .approval-card-title {
    margin: 0;
    font-family: var(--approval-serif);
    font-weight: 400;
    letter-spacing: 0;
    overflow-wrap: anywhere;
  }

  .ncerc-approvals .approval-title {
    max-width: 900px;
    font-size: 40px;
    line-height: 1.12;
    color: var(--approval-on-primary);
  }

  .ncerc-approvals .approval-title span {
    color: var(--approval-gold);
    font-style: italic;
  }

  .ncerc-approvals .approval-intro {
    display: grid;
    gap: 32px;
    align-items: center;
    padding-block: 48px;
  }

  .ncerc-approvals .approval-heading {
    color: var(--approval-primary);
    font-size: 32px;
    line-height: 1.18;
  }

  .ncerc-approvals .approval-description {
    margin: 20px 0 0;
    max-width: 740px;
    color: var(--approval-muted);
    font-size: 15px;
    line-height: 2;
  }

  .ncerc-approvals .approval-logos {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 24px;
  }

  .ncerc-approvals .approval-logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    width: 112px;
    margin: 0;
  }

  .ncerc-approvals .approval-logo-image {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 112px;
    height: 112px;
    padding: 12px;
    background: var(--approval-paper);
    border: 1px solid var(--approval-border);
    border-radius: 4px;
  }

  .ncerc-approvals .approval-logo-image img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .ncerc-approvals .approval-logo figcaption {
    color: var(--approval-primary);
    font-size: 12px;
    font-weight: 600;
  }

  .ncerc-approvals .approval-documents {
    padding-block: 48px 64px;
    background: var(--approval-surface);
    border-top: 1px solid var(--approval-border);
  }

  .ncerc-approvals .approval-grid {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: 20px;
    margin: 28px 0 0;
    padding: 0;
    list-style: none;
  }

  .ncerc-approvals .approval-card {
    display: flex;
    flex-direction: column;
    min-width: 0;
    padding: 24px;
    background: var(--approval-background);
    border: 1px solid var(--approval-border);
    border-top: 3px solid var(--approval-gold);
    border-radius: 6px;
    transition: border-color 200ms ease;
  }

  .ncerc-approvals .approval-card:hover {
    border-color: var(--approval-gold);
  }

  .ncerc-approvals .approval-card-header {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    margin-bottom: 28px;
  }

  .ncerc-approvals .approval-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 44px;
    height: 44px;
    background: var(--approval-primary);
    color: var(--approval-gold);
    border-radius: 4px;
  }

  .ncerc-approvals .approval-card-title {
    min-width: 0;
    color: var(--approval-primary);
    font-size: 22px;
    line-height: 1.4;
  }

  .ncerc-approvals .approval-actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 12px;
    margin-top: auto;
    padding-top: 20px;
    border-top: 1px solid var(--approval-border);
  }

  .ncerc-approvals .approval-details,
  .ncerc-approvals .approval-download {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    min-height: 48px;
    padding: 12px 18px;
    border: 1px solid transparent;
    border-radius: 4px;
    font-family: var(--approval-sans);
    font-size: 12px;
    font-weight: 600;
    line-height: 1.5;
    text-decoration: none;
    cursor: pointer;
    transition: background-color 200ms ease, color 200ms ease, border-color 200ms ease;
  }

  .ncerc-approvals .approval-details {
    background: var(--approval-primary);
    color: var(--approval-on-primary);
    border-color: var(--approval-primary);
  }

  .ncerc-approvals .approval-details:hover {
    background: var(--approval-gold);
    color: var(--approval-primary);
    border-color: var(--approval-gold);
  }

  .ncerc-approvals .approval-download {
    color: var(--approval-primary);
    background: transparent;
    border-color: var(--approval-border);
  }

  .ncerc-approvals .approval-download:hover {
    background: var(--approval-paper);
    border-color: var(--approval-accent);
  }

  .ncerc-approvals a:focus-visible {
    outline: 2px solid var(--approval-accent);
    outline-offset: 4px;
  }

  @media (min-width: 640px) {
    .ncerc-approvals .approval-container { padding-inline: 32px; }
    .ncerc-approvals .approval-banner { padding-block: 64px; }
    .ncerc-approvals .approval-title { font-size: 56px; }
    .ncerc-approvals .approval-heading { font-size: 40px; }
    .ncerc-approvals .approval-card { padding: 28px; }
  }

  @media (min-width: 768px) {
    .ncerc-approvals .approval-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (min-width: 1024px) {
    .ncerc-approvals .approval-intro {
      grid-template-columns: minmax(0, 1fr) auto;
      gap: 48px;
      padding-block: 64px;
    }
  }

  @media (max-width: 479px) {
    .ncerc-approvals .approval-actions { flex-direction: column; align-items: stretch; }
    .ncerc-approvals .approval-details,
    .ncerc-approvals .approval-download { width: 100%; }
  }

  @media (prefers-reduced-motion: reduce) {
    .ncerc-approvals .approval-card,
    .ncerc-approvals .approval-details,
    .ncerc-approvals .approval-download { transition: none; }
  }
`;

export default function ApprovalsPage() {
  return (
    <>
      <SiteHeader />

      <main className="ncerc-approvals">
        <style>{pageStyles}</style>

        <section className="approval-banner" aria-labelledby="page-title">
          <div className="approval-container">
            <p className="approval-eyebrow">About Us</p>
            <h1 id="page-title" className="approval-title">
              Approvals &amp; <span>Affiliations</span>
            </h1>
          </div>
        </section>

        <section
          className="approval-container approval-intro"
          aria-labelledby="approvals-introduction"
        >
          <div>
            <p className="approval-eyebrow">Recognition &amp; Accreditation</p>
            <h2 id="approvals-introduction" className="approval-heading">
              Our Approvals &amp; Affiliations
            </h2>
            <p className="approval-description">
              Nehru College of Engineering and Research Centre (NCERC) is
              an ISO 9001:2015 certified institution, approved by the All
              India Council for Technical Education (AICTE) and accredited
              by the National Assessment and Accreditation Council (NAAC)
              with an &apos;A&apos; Grade. It is affiliated to APJ Abdul Kalam
              Technological University. The institution has been recognized
              with Advanced Infosys Campus Connect status since 2014.
            </p>
          </div>

          <div className="approval-logos">
            <figure className="approval-logo">
              <div className="approval-logo-image">
                <Image
                  src={AICTEImage}
                  alt="All India Council for Technical Education logo"
                  width={88}
                  height={88}
                  sizes="88px"
                />
              </div>
              <figcaption>AICTE</figcaption>
            </figure>

            <figure className="approval-logo">
              <div className="approval-logo-image">
                <Image
                  src={KTUImage}
                  alt="APJ Abdul Kalam Technological University logo"
                  width={88}
                  height={88}
                  sizes="88px"
                />
              </div>
              <figcaption>KTU</figcaption>
            </figure>
          </div>
        </section>

        <section
          className="approval-documents"
          aria-labelledby="approval-documents-heading"
        >
          <div className="approval-container">
            <p className="approval-eyebrow">Official Documents</p>
            <h2 id="approval-documents-heading" className="approval-heading">
              Approval Documents
            </h2>

            <ul className="approval-grid">
              {approvalDocs.map((doc) => (
                <li key={doc.href} className="approval-card">
                  <div className="approval-card-header">
                    <div className="approval-icon">
                      <FileText size={20} aria-hidden="true" />
                    </div>
                    <h3 className="approval-card-title">{doc.label}</h3>
                  </div>

                  <div className="approval-actions">
                    {doc.moreHref ? (
                      <Link
                        href={doc.moreHref}
                        className="approval-details"
                        aria-label={`View details: ${doc.label}`}
                      >
                        View Details
                        <ArrowRight size={16} aria-hidden="true" />
                      </Link>
                    ) : (
                      <a
                        href={doc.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="approval-details"
                        aria-label={`View details: ${doc.label} (PDF, opens in a new tab)`}
                      >
                        View Details
                        <ArrowRight size={16} aria-hidden="true" />
                      </a>
                    )}

                    <a
                      href={doc.href}
                      download
                      className="approval-download"
                      aria-label={`Download PDF: ${doc.label}`}
                    >
                      <Download size={16} aria-hidden="true" />
                      Download PDF
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}