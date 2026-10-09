"use client";

import { useEffect, useState } from "react";
import type { ElementType } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  Clock,
  Copy,
  CreditCard,
  ExternalLink,
  Globe,
  Landmark,
  Mail,
  Maximize2,
  Phone,
  RotateCcw,
  ShieldCheck,
  X,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import Studentpic from "../../../../public/images/home/studenttwo.jpg";
import StudenImg from "../../../../public/images/home/studentsthree.jpg";

/* ============================================================
   CONSTANTS
============================================================ */

// Adjust these two paths to wherever the files live inside /public
const GRAYQUEST_IMAGE = "/images/Grey Quest Pop-up.webp";
const BANK_DETAILS_IMAGE = "/images/NCERC-Bank-Details.webp";

const HOTLINE_DISPLAY = "+91 9656000005";
const HOTLINE_HREF = "tel:+919656000005";

/* ============================================================
   TYPES
============================================================ */

type MethodKey = "icampuz" | "offline" | "grayquest";

type Method = {
  key: MethodKey;
  label: string;
  tagline: string;
  icon: ElementType;
  summary: string;
  steps: string[];
  ctaLabel: string;
  href: string;
  /** "link" opens the external site, "viewer" opens the image viewer */
  ctaKind: "link" | "viewer";
};

type LightboxImage = { src: string; alt: string };

/* ============================================================
   DATA
============================================================ */

const methods: Method[] = [
  {
    key: "icampuz",
    label: "iCampuz",
    tagline: "Pay online through the portal",
    icon: Globe,
    summary:
      "Pay your fees online through the NGI iCampuz campus management portal.",
    steps: [
      "Open the NGI iCampuz portal.",
      "Log in with your student login.",
      "Complete the payment and keep the confirmation email for reference.",
    ],
    ctaLabel: "Pay Through iCampuz",
    href: "https://app.icampuz.in/ngi",
    ctaKind: "link",
  },
  {
    key: "offline",
    label: "Offline",
    tagline: "Pay using the bank details",
    icon: Landmark,
    summary: "Pay at your bank using the official NCERC bank details.",
    steps: [
      "View the NCERC bank details shown alongside.",
      "Make the payment at your bank.",
      "Note down the reference / transaction details for future reference.",
    ],
    ctaLabel: "View Bank Details",
    href: encodeURI(BANK_DETAILS_IMAGE),
    ctaKind: "viewer",
  },
  {
    key: "grayquest",
    label: "GrayQuest",
    tagline: "Pay through GrayQuest",
    icon: CreditCard,
    summary:
      "Use the GrayQuest fee payment options available for Nehru College of Engineering.",
    steps: [
      "Open the NCERC page on GrayQuest.",
      "Choose the fee payment option that suits you.",
      "Complete the payment and keep the confirmation for reference.",
    ],
    ctaLabel: "Pay Through GrayQuest",
    href: "https://grayquest.com/institute/nehru-college-engineering",
    ctaKind: "link",
  },
];

const quickFacts: {
  icon: ElementType;
  value: string;
  label: string;
  target: "methods" | "guidelines";
}[] = [
  {
    icon: CreditCard,
    value: "3",
    label: "Ways to pay: iCampuz, Offline and GrayQuest",
    target: "methods",
  },
  {
    icon: Mail,
    value: "Email",
    label: "Confirmation sent after a successful payment",
    target: "guidelines",
  },
  {
    icon: Clock,
    value: "3 days",
    label: "Working days to wait before retrying a failed payment",
    target: "guidelines",
  },
];

const guidelines: {
  icon: ElementType;
  title: string;
  items: { label: string; text: string }[];
}[] = [
  {
    icon: Mail,
    title: "Keep a record",
    items: [
      {
        label: "Note the details",
        text: "Please make a note of Reference/Transaction Details in case of Net banking or Card payment.",
      },
      {
        label: "Confirmation email",
        text: "If the payment is successful, you will get a payment confirmation email and the student has to keep the same for reference.",
      },
    ],
  },
  {
    icon: ShieldCheck,
    title: "Privacy & cancellation",
    items: [
      {
        label: "Your data",
        text: "All data shall be kept secure, and shall not be revealed to anyone or utilized for any other purpose. The data provided shall be used in connection with online payments.",
      },
      {
        label: "No cancellation",
        text: "There is no cancellation option for the students / parents.",
      },
    ],
  },
  {
    icon: RotateCcw,
    title: "If something goes wrong",
    items: [
      {
        label: "Failed transaction",
        text: "If the transaction has failed for some reasons, you are requested to wait for three working days before trying for payment again. Please contact the accounts department for any discrepancy of online fee faced by you with reference to any of your transaction.",
      },
      {
        label: "Duplicate payment",
        text: "In case of duplicate payment, the end user can approach the accounts department in the college for clarification or refund with proof of the transaction. Based on submission of proof of transaction, it shall be verified and refunded.",
      },
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

function ImageCard({
  src,
  alt,
  onOpen,
}: {
  src: string;
  alt: string;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Enlarge: ${alt}`}
      className="group relative flex items-center justify-center overflow-hidden rounded-2xl border border-[#E9DFC6] bg-white p-3 shadow-sm transition-shadow duration-200 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D2B87C]"
    >
      <Image
        src={encodeURI(src)}
        alt={alt}
        width={800}
        height={800}
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="h-auto w-full rounded-xl object-contain"
      />

      <span className="absolute bottom-6 right-6 inline-flex items-center gap-2 rounded-full bg-[#20235A]/90 px-3.5 py-2 text-xs font-semibold text-white shadow-lg transition-colors duration-200 group-hover:bg-[#20235A]">
        <Maximize2 size={14} className="text-[#D2B87C]" />
        Click to enlarge
      </span>
    </button>
  );
}

function GuidelineCard({
  icon: Icon,
  title,
  items,
  className = "",
}: {
  icon: ElementType;
  title: string;
  items: { label: string; text: string }[];
  className?: string;
}) {
  return (
    <article
      className={`relative flex flex-col overflow-hidden rounded-2xl border border-[#E9DFC6] bg-[#FAF7F2] p-6 sm:p-7 ${className}`}
    >
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1 bg-[#D2B87C]"
      />

      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#20235A] text-[#D2B87C]">
          <Icon size={20} strokeWidth={1.6} />
        </span>
        <h3 className="m-0 font-serif text-xl font-normal leading-tight text-[#20235A]">
          {title}
        </h3>
      </div>

      <ul className="m-0 mt-5 flex flex-1 list-none flex-col justify-center divide-y divide-[#E9DFC6] p-0">
        {items.map((item) => (
          <li key={item.label} className="py-4 first:pt-0 last:pb-0">
            <p className="m-0 text-xs font-semibold uppercase tracking-[0.16em] text-[#8F7746]">
              {item.label}
            </p>
            <p className="m-0 mt-1.5 text-[15px] leading-relaxed text-slate-700">
              {item.text}
            </p>
          </li>
        ))}
      </ul>
    </article>
  );
}

/* ============================================================
   PAGE
============================================================ */

export default function PayFeesPage() {
  const [activeMethod, setActiveMethod] = useState<MethodKey>("icampuz");
  const [lightbox, setLightbox] = useState<LightboxImage | null>(null);
  const [copied, setCopied] = useState(false);

  const method =
    methods.find((item) => item.key === activeMethod) ?? methods[0];
  const MethodIcon = method.icon;

  function selectMethod(key: MethodKey) {
    setActiveMethod(key);
    scrollToId("methods");
  }

  async function copyNumber() {
    try {
      await navigator.clipboard.writeText(HOTLINE_DISPLAY);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  // Close the viewer with Escape and lock page scroll while it is open
  useEffect(() => {
    if (!lightbox) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setLightbox(null);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [lightbox]);

  return (
    <>
      <style>{`
        @keyframes payFeesFadeUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: none; }
        }
        .payfees-fade { animation: payFeesFadeUp 0.35s ease both; }
        @media (prefers-reduced-motion: reduce) {
          .payfees-fade { animation: none; }
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
                Pay <span className="italic text-[#D2B87C]">Fees</span>
              </h1>

              <div aria-hidden="true" className="mt-6 h-px w-20 bg-[#D2B87C]" />

              <p className="m-0 mt-6 max-w-xl text-base leading-8 text-white/70 sm:text-lg">
                Pay your Nehru College of Engineering and Research Centre
                fees online through iCampuz or GrayQuest, or offline using
                the college bank details.
              </p>

              <div className="mt-8">
                <p className="m-0 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                  Choose a payment method
                </p>

                <div className="mt-3 grid max-w-md grid-cols-3 gap-3">
                  {methods.map((item) => (
                    <button
                      key={item.key}
                      type="button"
                      onClick={() => selectMethod(item.key)}
                      className="rounded-xl border border-[#D2B87C]/50 bg-white/5 px-3 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#D2B87C] hover:text-[#20235A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D2B87C]"
                    >
                      {item.label}
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
            QUICK FACTS (overlaps the hero)
        ========================================================= */}
        <section className="relative z-10 -mt-10 px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <ul className="m-0 grid list-none gap-px overflow-hidden rounded-2xl border border-[#D2B87C]/40 bg-[#D2B87C]/30 p-0 shadow-xl md:grid-cols-3">
              {quickFacts.map(({ icon: Icon, value, label, target }) => (
                <li key={label} className="bg-white">
                  <button
                    type="button"
                    onClick={() => scrollToId(target)}
                    className="group flex h-full w-full items-center gap-4 px-5 py-5 text-left transition-colors duration-200 hover:bg-[#FAF7F2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#D2B87C] sm:px-6"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#20235A] text-[#D2B87C] transition-transform duration-200 group-hover:scale-105">
                      <Icon size={22} strokeWidth={1.6} />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block font-serif text-2xl leading-tight text-[#20235A]">
                        {value}
                      </span>
                      <span className="mt-0.5 block text-sm leading-snug text-slate-600">
                        {label}
                      </span>
                    </span>

                    <ArrowRight
                      size={18}
                      className="shrink-0 text-[#D2B87C] transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* =========================================================
            PAYMENT METHODS
        ========================================================= */}
        <section
          id="methods"
          className="scroll-mt-20 py-12 sm:py-14 lg:py-16"
        >
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <SectionHeading
              eyebrow="Payment methods"
              title="Choose a"
              accent="Payment Method"
            />

            {/* Method selector */}
            <div
              role="tablist"
              aria-label="Payment method"
              className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3"
            >
              {methods.map((item) => {
                const isActive = item.key === activeMethod;
                const Icon = item.icon;

                return (
                  <button
                    key={item.key}
                    type="button"
                    role="tab"
                    id={`method-tab-${item.key}`}
                    aria-selected={isActive}
                    aria-controls="method-panel"
                    onClick={() => setActiveMethod(item.key)}
                    className={`relative flex items-center gap-4 overflow-hidden rounded-2xl border p-4 text-left transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D2B87C] sm:p-5 ${
                      isActive
                        ? "border-[#D2B87C] bg-[#20235A] text-white shadow-lg"
                        : "border-[#E9DFC6] bg-white text-[#20235A] hover:-translate-y-0.5 hover:border-[#D2B87C] hover:shadow-md"
                    }`}
                  >
                    <span
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border ${
                        isActive
                          ? "border-[#D2B87C]/70 text-[#D2B87C]"
                          : "border-[#D2B87C]/60 bg-[#FAF7F2] text-[#8F7746]"
                      }`}
                    >
                      <Icon size={22} strokeWidth={1.5} />
                    </span>

                    <span className="min-w-0">
                      <span className="block font-serif text-xl leading-tight">
                        {item.label}
                      </span>
                      <span
                        className={`mt-0.5 block text-xs leading-snug ${
                          isActive ? "text-white/70" : "text-slate-500"
                        }`}
                      >
                        {item.tagline}
                      </span>
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

            {/* Method panel */}
            <div
              key={method.key}
              id="method-panel"
              role="tabpanel"
              aria-labelledby={`method-tab-${method.key}`}
              className="payfees-fade mt-5 grid items-stretch gap-5 lg:grid-cols-2"
            >
              {/* Info card */}
              <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#E9DFC6] bg-white p-6 shadow-sm sm:p-8">
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1 bg-[#D2B87C]"
                />

                <div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#20235A] text-[#D2B87C]">
                      <MethodIcon size={20} strokeWidth={1.6} />
                    </span>
                    <p className="m-0 text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                      Pay through
                    </p>
                  </div>

                  <h3 className="m-0 mt-4 font-serif text-3xl font-normal leading-tight text-[#20235A]">
                    <span className="italic text-[#D2B87C]">
                      {method.label}
                    </span>
                  </h3>

                  <p className="m-0 mt-3 text-base leading-relaxed text-slate-600">
                    {method.summary}
                  </p>

                  <div
                    aria-hidden="true"
                    className="mt-5 h-px w-full bg-[#E9DFC6]"
                  />

                  <ol className="m-0 mt-5 list-none p-0">
                    {method.steps.map((step, index) => (
                      <li
                        key={step}
                        className="relative flex gap-4 pb-5 last:pb-0"
                      >
                        {index < method.steps.length - 1 && (
                          <span
                            aria-hidden="true"
                            className="absolute bottom-0 left-[15px] top-8 w-px bg-[#D2B87C]/60"
                          />
                        )}

                        <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#20235A] font-serif text-sm text-[#D2B87C]">
                          {index + 1}
                        </span>

                        <p className="m-0 pt-1 text-[15px] leading-relaxed text-slate-700">
                          {step}
                        </p>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  {method.ctaKind === "link" ? (
                    <a
                      href={method.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex flex-1 items-center justify-center gap-3 rounded-xl bg-[#20235A] px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors duration-300 hover:bg-[#15183f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D2B87C]"
                    >
                      <span>{method.ctaLabel}</span>
                      <ExternalLink
                        size={16}
                        className="text-[#D2B87C] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </a>
                  ) : (
                    <>
                      <button
                        type="button"
                        onClick={() =>
                          setLightbox({
                            src: BANK_DETAILS_IMAGE,
                            alt: "NCERC bank details",
                          })
                        }
                        className="group inline-flex flex-1 items-center justify-center gap-3 rounded-xl bg-[#20235A] px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors duration-300 hover:bg-[#15183f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D2B87C]"
                      >
                        <span>{method.ctaLabel}</span>
                        <Maximize2 size={16} className="text-[#D2B87C]" />
                      </button>

                      <a
                        href={method.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#D2B87C] px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-[#20235A] transition-colors duration-300 hover:bg-[#D2B87C]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D2B87C]"
                      >
                        <span>Open image</span>
                        <ExternalLink size={16} className="text-[#8F7746]" />
                      </a>
                    </>
                  )}
                </div>
              </div>

              {/* Visual */}
              {method.key === "icampuz" && (
                <div className="relative min-h-[320px] overflow-hidden rounded-2xl border border-[#D2B87C]/40 bg-[#20235A] shadow-lg">
                  <Image
                    src={Studentpic}
                    alt="Students of Nehru College of Engineering and Research Centre"
                    fill
                    placeholder="blur"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />

                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#20235A]/90 via-transparent to-transparent"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute left-0 top-0 h-16 w-16 border-l-[5px] border-t-[5px] border-[#D2B87C]"
                  />

                  <div className="absolute inset-x-0 bottom-0 border-t-4 border-[#D2B87C] bg-[#20235A] px-6 py-5">
                    <p className="m-0 text-xs font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                      NGI iCampuz
                    </p>
                    <p className="m-0 mt-1 font-serif text-lg leading-snug text-white">
                      Campus management portal for Nehru Group of
                      Institutions
                    </p>
                  </div>
                </div>
              )}

              {method.key === "offline" && (
                <ImageCard
                  src={BANK_DETAILS_IMAGE}
                  alt="NCERC bank details"
                  onOpen={() =>
                    setLightbox({
                      src: BANK_DETAILS_IMAGE,
                      alt: "NCERC bank details",
                    })
                  }
                />
              )}

              {method.key === "grayquest" && (
                <ImageCard
                  src={GRAYQUEST_IMAGE}
                  alt="GrayQuest fee payment options"
                  onOpen={() =>
                    setLightbox({
                      src: GRAYQUEST_IMAGE,
                      alt: "GrayQuest fee payment options",
                    })
                  }
                />
              )}
            </div>

            {/* Hotline band */}
            <div className="relative mt-8 overflow-hidden rounded-2xl bg-[#20235A] shadow-xl">
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1 bg-[#D2B87C]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-[#D2B87C]/20"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full border border-white/5"
              />

              <div className="relative grid items-center gap-6 p-6 sm:p-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-10 lg:p-10">
                <div>
                  <p className="m-0 text-xs font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                    Admission hotline
                  </p>

                  <h3 className="m-0 mt-3 font-serif text-3xl font-normal leading-tight text-white">
                    Need help with{" "}
                    <span className="italic text-[#D2B87C]">payment?</span>
                  </h3>

                  <p className="m-0 mt-3 max-w-md text-sm leading-relaxed text-white/70 sm:text-base">
                    Call the admission hotline for any help with paying your
                    fees.
                  </p>
                </div>

                <div className="flex flex-col gap-4 lg:items-end">
                  <p className="m-0 flex items-center gap-3 font-serif text-3xl leading-none text-[#D2B87C] sm:text-4xl">
                    <Phone size={28} aria-hidden="true" />
                    <span>{HOTLINE_DISPLAY}</span>
                  </p>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <a
                      href={HOTLINE_HREF}
                      className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#D2B87C] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-[#20235A] transition-colors duration-300 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    >
                      <span>Call now</span>
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </a>

                    <button
                      type="button"
                      onClick={copyNumber}
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#D2B87C]/60 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-[#D2B87C] transition-colors duration-300 hover:border-[#D2B87C] hover:bg-[#D2B87C]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D2B87C]"
                    >
                      {copied ? (
                        <>
                          <Check size={16} />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy size={16} />
                          <span>Copy number</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            PAYMENT GUIDELINES
        ========================================================= */}
        <section
          id="guidelines"
          className="scroll-mt-20 bg-white py-12 sm:py-14 lg:py-16"
        >
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <SectionHeading
              eyebrow="Payment guidelines"
              title="Pay with"
              accent="Confidence"
              align="center"
            />

            <div className="mt-8 grid items-stretch gap-6 lg:grid-cols-2">
              <div className="flex flex-col gap-6">
                <GuidelineCard {...guidelines[0]} className="flex-1" />
                <GuidelineCard {...guidelines[1]} className="flex-1" />
              </div>

              <GuidelineCard {...guidelines[2]} className="h-full" />
            </div>
          </div>
        </section>
      </main>

      <FooterSection />

      {/* =========================================================
          IMAGE VIEWER
      ========================================================= */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#15183f]/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.alt}
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            aria-label="Close viewer"
            className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D2B87C]"
          >
            <X size={24} />
          </button>

          <div
            className="max-h-[90vh] w-full max-w-4xl overflow-auto rounded-xl border border-[#D2B87C]/50 bg-white p-2 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={encodeURI(lightbox.src)}
              alt={lightbox.alt}
              width={1400}
              height={1400}
              sizes="100vw"
              className="h-auto w-full"
            />
          </div>
        </div>
      )}
    </>
  );
}