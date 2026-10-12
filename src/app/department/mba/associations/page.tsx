import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Network,
  Users,
  Globe2,
  Handshake,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import DepartmentNavigation from "../DepartmentNav/page";
import AssociationsShowcase from "./AssociationsShowcase/page";
import FAQ from "../FAQ.tsx/page";

export const metadata: Metadata = {
  title: "Associations | Nehru School of Management - NCERC",
  description:
    "Professional associations and MoUs of Nehru School of Management (NSM), including NIPM, TMA and partnerships with Universitas Muhammadiyah Purworejo, KVVES Kulapully Unit and Peringottukurissi panchayat.",
  keywords: [
    "MBA Colleges in Kerala",
    "MBA College in Palakkad",
    "MBA College in Thrissur",
    "Best MBA Colleges in Kerala",
    "Nehru School of Management",
    "Top MBA College in Kerala",
    "Best MBA in Kerala",
    "MBA in Palakkad",
    "MBA in Kerala",
    "Best college for MBA in Kerala",
  ],
  robots: {
    index: true,
    follow: true,
  },
};
import Image from "next/image";
const HERO_IMAGE =
  "https://i.pinimg.com/736x/5e/4f/4f/5e4f4f30d09ff73035e8c415bc8ed257.jpg";

export default function MBAAssociationsPage() {
  return (
    <>
      <SiteHeader />

      <main className="overflow-hidden bg-[#FAF8F3] text-[#1E1917]">
        {/* HERO */}
        <section className="relative overflow-hidden bg-[#20235A]">
          <div className="pointer-events-none absolute -right-32 -top-36 h-[440px] w-[440px] rounded-full border border-[#D2B87C]/10" />
          <div className="pointer-events-none absolute -right-16 -top-20 h-[310px] w-[310px] rounded-full border border-[#D2B87C]/10" />

          <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-16">
            <div className="grid lg:grid-cols-2">
              {/* Hero copy */}
              <div className="relative z-10 flex flex-col justify-center py-12 sm:py-14 lg:py-16 lg:pr-12 xl:pr-16">
                <div className="mb-6 flex items-center gap-4">
                  <span className="h-px w-10 bg-[#D2B87C]" />
                  <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#D2B87C] sm:text-[11px]">
                    Nehru School of Management
                  </span>
                </div>

                <p className="mb-4 text-[10px] font-normal uppercase tracking-[0.18em] text-white/55 sm:text-[11px]">
                  Collaboration · Professional Growth · Community
                </p>

                <h1 className="max-w-2xl font-serif text-[40px] font-normal leading-[1.04] tracking-[-0.035em] text-white sm:text-[48px] md:text-[54px] lg:text-[56px] xl:text-[62px]">
                  Stronger
                  <span className="mt-1 block font-normal italic text-[#D2B87C]">
                    Together.
                  </span>
                  <span className="mt-2 block font-sans text-[23px] font-medium leading-tight tracking-[-0.025em] text-white/90 sm:text-[26px] lg:text-[28px]">
                    MBA Associations
                  </span>
                </h1>

                <p className="mt-5 max-w-xl text-[14px] font-normal leading-6 text-white/70 sm:mt-6 sm:text-[15px] sm:leading-7">
                  Building meaningful connections between management
                  education, professional bodies, industry partners and the
                  wider community through shared knowledge and collaboration.
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-4 sm:mt-8 sm:gap-5">
                  <a
                    href="#associations"
                    className="group inline-flex min-h-11 items-center gap-3 bg-[#D2B87C] px-5 py-3 text-[11px] font-medium tracking-[0.03em] text-[#20235A] transition-colors duration-300 hover:bg-white sm:px-6 sm:text-xs"
                  >
                    Explore Our Associations
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>

                  <span className="flex items-center gap-2.5 text-[10px] font-normal tracking-[0.04em] text-white/60 sm:text-[11px]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#D2B87C]" />
                    Professional Bodies &amp; MoUs
                  </span>
                </div>

                <div className="mt-8 grid max-w-lg grid-cols-2 border-t border-white/15 pt-5 sm:mt-10 sm:pt-6">
                  <div className="flex items-start gap-3 pr-3 sm:pr-4">
                    <Users className="mt-0.5 h-5 w-5 shrink-0 text-[#D2B87C]" />
                    <div>
                      <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-white/90 sm:text-[11px]">
                        Professional
                      </p>
                      <p className="mt-1 text-[11px] leading-5 text-white/50 sm:text-xs">
                        Industry connections
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 border-l border-white/15 pl-4 sm:pl-5">
                    <Globe2 className="mt-0.5 h-5 w-5 shrink-0 text-[#D2B87C]" />
                    <div>
                      <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-white/90 sm:text-[11px]">
                        Collaborative
                      </p>
                      <p className="mt-1 text-[11px] leading-5 text-white/50 sm:text-xs">
                        Institutional partnerships
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hero visual */}
              <div className="relative -mx-5 min-h-[300px] overflow-hidden sm:-mx-8 sm:min-h-[380px] lg:mx-0 lg:min-h-[540px]">
                <Image
                  src={HERO_IMAGE}
                  alt="Memorandum of understanding signing with KVVES Kulapully Unit"
                  fill
                  sizes="(min-width: 1024px) 330px, 100vw"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#171946]/90 via-[#20235A]/10 to-[#20235A]/5" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#20235A]/40 via-transparent to-transparent lg:from-[#20235A]/35" />

                {/* Image caption */}
                <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-7 lg:bottom-9 lg:left-9 lg:right-9">
                  <div className="border-l border-[#D2B87C] pl-4 sm:pl-5">
                    <span className="text-[9px] font-medium uppercase tracking-[0.22em] text-[#D2B87C] sm:text-[10px]">
                      Partnerships in Practice
                    </span>

                    <p className="mt-2 max-w-md font-serif text-[23px] font-normal leading-[1.2] tracking-[-0.02em] text-white sm:text-[28px]">
                      Connecting ideas, people and possibilities.
                    </p>

                    <p className="mt-2 max-w-sm text-[11px] leading-5 text-white/70 sm:text-xs sm:leading-6">
                      Building relationships that extend learning beyond the
                      classroom.
                    </p>
                  </div>
                </div>

                <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center border border-white/35 bg-[#20235A]/35 backdrop-blur-sm sm:right-6 sm:top-6 sm:h-12 sm:w-12">
                  <Network className="h-5 w-5 text-[#D2B87C]" />
                </div>
              </div>
            </div>
          </div>

          <div className="h-px bg-[#D2B87C]/25" />
        </section>

        {/* DEPARTMENT NAVIGATION */}
        <DepartmentNavigation />

        {/* INTRODUCTION */}
        <section className="relative overflow-hidden bg-[#FAF8F3]">
          <div className="mx-auto max-w-[1440px] px-5 py-10 sm:px-8 sm:py-12 lg:px-16 lg:py-14">
            <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-[#8F7746]" />
                  <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#8F7746]">
                    Our Network
                  </span>
                </div>

                <h2 className="mt-4 max-w-sm font-serif text-[29px] font-normal leading-[1.15] tracking-[-0.035em] text-[#20235A] sm:text-[34px] lg:text-[40px]">
                  Learning grows through meaningful connections.
                </h2>
              </div>

              <div className="lg:pt-5">
                <p className="max-w-3xl text-[14px] font-normal leading-7 text-[#5D5A56] sm:text-[15px] sm:leading-7">
                  Nehru School of Management encourages active engagement with
                  professional associations, educational institutions,
                  businesses and local bodies. These relationships create
                  opportunities for knowledge exchange, industry exposure,
                  professional development and community participation.
                </p>

                <p className="mt-3 max-w-3xl text-[13px] font-normal leading-6 text-[#77716A] sm:text-[14px] sm:leading-7">
                  Through professional memberships and memoranda of
                  understanding, NSM aims to connect management education
                  with practical experience and evolving industry needs.
                </p>

                <div className="mt-5 flex items-center gap-3 border-t border-[#E4DED3] pt-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#D8C69D]">
                    <Handshake className="h-4 w-4 text-[#8F7746]" />
                  </div>
                  <p className="max-w-md text-[11px] leading-5 text-[#625D56] sm:text-xs sm:text-sm">
                    A collaborative approach to professional learning,
                    institutional exchange and social engagement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ASSOCIATIONS AND MoUs */}
        <section
          id="associations"
          className="scroll-mt-20 bg-white [&>*]:my-0"
        >
          <AssociationsShowcase />
        </section>

        {/* CALL TO ACTION */}
        <section className="relative overflow-hidden bg-[#F0EDE5]">
          <div className="pointer-events-none absolute -bottom-36 -right-16 h-80 w-80 rounded-full border border-[#D2B87C]/40" />
          <div className="pointer-events-none absolute -bottom-24 right-8 h-56 w-56 rounded-full border border-[#D2B87C]/35" />

          <div className="relative mx-auto max-w-[1440px] px-5 py-11 sm:px-8 sm:py-14 lg:px-16 lg:py-16">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-10">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-[#8F7746]" />
                  <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#8F7746]">
                    Explore NSM
                  </span>
                </div>

                <h2 className="mt-4 font-serif text-[31px] font-normal leading-[1.12] tracking-[-0.035em] text-[#20235A] sm:text-[38px] lg:text-[46px]">
                  An environment designed
                  <span className="block italic text-[#8F7746]">
                    for growth.
                  </span>
                </h2>

                <p className="mt-4 max-w-2xl text-[13px] leading-6 text-[#6B655D] sm:text-[14px] sm:leading-7">
                  Discover the learning spaces, resources and facilities that
                  support the academic and professional journey at Nehru
                  School of Management.
                </p>
              </div>

              <Link
                href="/department/mba/facilities"
                className="group inline-flex min-h-11 w-fit items-center gap-4 bg-[#20235A] px-5 py-3 text-[11px] font-medium tracking-[0.04em] text-white transition-colors duration-300 hover:bg-[#171946] sm:px-6 sm:text-xs"
              >
                Explore Facilities
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <FAQ />
      <FooterSection />
    </>
  );
}
