
import type { Metadata } from "next";
import {
  ArrowDown,
  ArrowUpRight,
  MessagesSquare,
  Users,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../DepartmentNav/page";
import FAQ from "../FAQ.tsx/page";

export const metadata: Metadata = {
  title: "Activities @ NSM | Nehru School of Management - NCERC",
  description:
    "Follow the activities of Nehru School of Management (NSM), one of the leading MBA colleges in Kerala, on Facebook and Instagram.",
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

function FacebookIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.6-1.5h1.5V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.3H8v3h2.5V21h3z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle
        cx="17.5"
        cy="6.5"
        r="1"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

type SocialLink = {
  name: string;
  href: string;
  handle: string;
  description: string;
  number: string;
  icon: React.ReactNode;
  accent: string;
};

const socialLinks: SocialLink[] = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/nsmncerc",
    handle: "NSM · NCERC",
    description:
      "Connect with the Nehru School of Management community and explore updates, campus moments and institutional activities.",
    number: "01",
    icon: <FacebookIcon />,
    accent: "facebook",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/nsm_mba",
    handle: "@nsm_mba",
    description:
      "Discover snapshots of student life, management activities and memorable moments from the NSM community.",
    number: "02",
    icon: <InstagramIcon />,
    accent: "instagram",
  },
];

export default function MBAActivitiesNsmPage() {
  return (
    <>
      <SiteHeader />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[#20235A] text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />

        <div
          aria-hidden="true"
          className="absolute -right-24 -top-20 h-[360px] w-[360px] rounded-full border border-[#D2B87C]/20 sm:h-[520px] sm:w-[520px]"
        />
        <div
          aria-hidden="true"
          className="absolute -right-8 top-6 h-[270px] w-[270px] rounded-full border border-[#D2B87C]/20 sm:h-[400px] sm:w-[400px]"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#D2B87C]" />
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D2B87C] sm:text-sm">
                Nehru School of Management
              </p>
            </div>

            <h1 className="font-serif text-4xl font-medium leading-[1.12] tracking-tight sm:text-5xl lg:text-7xl">
              Life at NSM.
              <br />
              <span className="italic text-[#D2B87C]">
                Stories beyond the classroom.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              Stay connected with the Nehru School of Management community.
              Follow our social channels to explore campus moments,
              student experiences and updates from the world of management
              education.
            </p>

            <a
              href="#follow-nsm"
              className="mt-8 inline-flex items-center gap-3 border border-[#D2B87C]/60 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#D2B87C] hover:text-[#20235A]"
            >
              Connect with NSM
              <ArrowDown size={17} />
            </a>
          </div>

          {/* Decorative social motif */}
          <div className="relative hidden min-h-[320px] items-center justify-center lg:flex">
            <div className="absolute h-[280px] w-[280px] rounded-full border border-[#D2B87C]/25" />
            <div className="absolute h-[210px] w-[210px] rounded-full border border-[#D2B87C]/25" />
            <div className="absolute h-[140px] w-[140px] rounded-full bg-[#D2B87C]/10" />

            <div className="relative flex h-28 w-28 items-center justify-center border border-[#D2B87C]/50 bg-[#20235A] text-[#D2B87C]">
              <Users size={48} strokeWidth={1.2} />
            </div>

            <div className="absolute right-0 top-5 max-w-[180px] border border-white/15 bg-white/[0.06] p-4 backdrop-blur-sm">
              <MessagesSquare
                size={24}
                className="mb-3 text-[#D2B87C]"
              />
              <p className="text-sm font-semibold">Stay connected</p>
              <p className="mt-1 text-xs leading-5 text-white/60">
                Keep up with the NSM community.
              </p>
            </div>

            <div className="absolute bottom-3 left-0 max-w-[190px] border border-white/15 bg-white/[0.06] p-4 backdrop-blur-sm">
              <p className="font-serif text-2xl text-[#D2B87C]">
                NSM
              </p>
              <p className="mt-1 text-sm font-semibold">
                One community
              </p>
              <p className="mt-1 text-xs leading-5 text-white/60">
                Experiences, ideas and campus life.
              </p>
            </div>
          </div>
        </div>

        <div className="relative border-t border-white/10">
          <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-white/10 px-6 sm:grid-cols-2 sm:divide-x sm:divide-y-0 sm:px-8">
            <div className="flex items-center gap-4 py-5 sm:py-6 sm:pr-8">
              <div className="flex h-11 w-11 items-center justify-center border border-[#D2B87C]/30 text-[#D2B87C]">
                <MessagesSquare size={21} strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-sm font-semibold">Community updates</p>
                <p className="mt-1 text-xs text-white/55">
                  Follow the latest posts from NSM.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 py-5 sm:py-6 sm:pl-8">
              <div className="flex h-11 w-11 items-center justify-center border border-[#D2B87C]/30 text-[#D2B87C]">
                <Users size={21} strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-sm font-semibold">Campus experiences</p>
                <p className="mt-1 text-xs text-white/55">
                  Discover life beyond the classroom.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="bg-[#FAF8F3] text-[#1E1917]">
        <InnerHeader />

        {/* Introduction */}
        <section className="px-6 py-14 sm:px-8 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8F7746]">
                Follow our journey
              </p>
              <h2 className="mt-4 max-w-xl font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                Be part of the NSM story.
              </h2>
            </div>

            <div className="max-w-2xl lg:justify-self-end">
              <p className="text-base leading-8 text-[#5F5A52]">
                Social media offers another way to stay in touch with the
                activities and experiences of the Nehru School of Management.
                Choose a channel below to visit the official NSM profile and
                stay connected with its community.
              </p>
            </div>
          </div>
        </section>

        {/* Social profiles */}
        <section
          id="follow-nsm"
          className="scroll-mt-24 px-6 pb-16 sm:px-8 sm:pb-20"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-9 flex flex-col justify-between gap-4 border-b border-[#20235A]/15 pb-6 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8F7746]">
                  Find us online
                </p>
                <h2 className="mt-2 font-serif text-3xl text-[#20235A] sm:text-4xl">
                  Follow NSM
                </h2>
              </div>
              <p className="text-sm text-[#777066]">
                Official social media channels
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit NSM on ${social.name}`}
                  className="group relative flex min-h-[300px] flex-col overflow-hidden border border-[#E6E0D4] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#D2B87C] hover:shadow-[0_18px_45px_rgba(32,35,90,0.09)] sm:p-9"
                >
                  <span
                    aria-hidden="true"
                    className="absolute -right-12 -top-12 h-44 w-44 rounded-full border border-[#20235A]/[0.06] transition-transform duration-500 group-hover:scale-110"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute -right-4 -top-4 h-28 w-28 rounded-full border border-[#20235A]/[0.06]"
                  />

                  <div className="relative flex items-start justify-between gap-4">
                    <div
                      className={`flex h-16 w-16 items-center justify-center transition-colors ${social.accent === "facebook"
                          ? "bg-[#20235A] text-white group-hover:bg-[#D2B87C] group-hover:text-[#20235A]"
                          : "bg-[#D2B87C]/20 text-[#20235A] group-hover:bg-[#20235A] group-hover:text-[#D2B87C]"
                        }`}
                    >
                      {social.icon}
                    </div>

                    <span className="font-serif text-4xl text-[#20235A]/10">
                      {social.number}
                    </span>
                  </div>

                  <div className="relative mt-8">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8F7746]">
                      {social.handle}
                    </p>
                    <h3 className="mt-2 font-serif text-3xl text-[#20235A] sm:text-4xl">
                      {social.name}
                    </h3>
                    <p className="mt-4 max-w-lg text-sm leading-7 text-[#777066] sm:text-base">
                      {social.description}
                    </p>
                  </div>

                  <div className="relative mt-auto flex items-center justify-between gap-4 border-t border-[#EEE9DF] pt-5 mt-7">
                    <span className="text-sm font-semibold text-[#20235A] transition-colors group-hover:text-[#8F7746]">
                      Visit official profile
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center border border-[#E6E0D4] text-[#20235A] transition-all group-hover:border-[#D2B87C] group-hover:bg-[#20235A] group-hover:text-white">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>
                </a>
              ))}
            </div>

            <p className="mt-5 text-xs leading-6 text-[#888175]">
              Social profiles open in a new tab. Content and updates are
              managed by the respective social media platforms.
            </p>
          </div>
        </section>

        {/* Closing callout */}
        <section className="px-6 pb-14 sm:px-8 sm:pb-20">
          <div className="relative mx-auto max-w-7xl overflow-hidden bg-[#20235A] px-7 py-10 text-white sm:px-12 sm:py-14 lg:px-16">
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-24 h-72 w-72 rounded-full border border-[#D2B87C]/25"
            />

            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D2B87C]">
                  Stay in touch
                </p>
                <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">
                  Every connection
                  <br />
                  <span className="italic text-[#D2B87C]">
                    adds to our story.
                  </span>
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
                  Follow NSM online and keep up with the people, experiences
                  and activities that make our management community unique.
                </p>
              </div>

              <a
                href="https://www.instagram.com/nsm_mba"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center gap-3 border border-[#D2B87C] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#D2B87C] hover:text-[#20235A]"
              >
                Connect with NSM
                <ArrowUpRight size={17} />
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