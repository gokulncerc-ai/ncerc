"use client";
import Image from "next/image";

import {
  Award,
  ArrowRight,
  GraduationCap,
  MailCheck,
  Users,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import AboutSection from "@/components/home/AboutSection";
import ExploreCampus from "@/components/home/ExploreCampus";
import CourseSection from "@/components/home/CourseSection";
import HighlightsSection from "@/components/home/HighlightsSection";
import NcpirSection from "@/components/home/NcpirSection";
import NewsEventsSection from "@/components/home/NewsEventsSection";
import UpcomingEventsSection from "@/components/home/UpcomingEventsSection";
import FaqSection from "@/components/home/FaqSection";
import PlacementSection from "@/components/home/PlacementSection";
import CampusFacilitieSection from "@/components/home/CampusFacilitieSection";
import CommunitySection from "@/components/home/CommunitySection";
import AnnouncementBar from "@/components/header/AnnouncementBar";
import AluminiSection from "@/components/home/AluminiSection";
import CollegeInteractionSection from "@/components/home/CollegeInteractionSection";
import FooterSection from "@/components/home/FooterSection";

import collegeImage from "../../public/images/collegeone.jpg";
import collegeHorizontalImage from "../../public/images/college_horizontal.webp";
import highlightsImage from "../../public/images/campus_walk.png";
import ncpirImage from "../../public/images/ncpir_handshake.png";

const stats = [
  { icon: Award, value: "20+", label: "Years of Excellence" },
  { icon: GraduationCap, value: "50+", label: "Programs & Specializations" },
  { icon: Users, value: "1000+", label: "Students On Campus" },
  { icon: MailCheck, value: "90%+", label: "Placement Success" },
];

export default function Home() {
  return (
    <main className="flex flex-col bg-white">
      {/* 
        Hero Section (h-dvh)
        The header floats absolutely over the top edge of the photo.
      */}
      <section className="relative isolate h-dvh w-full overflow-hidden">
        <Image
          src={collegeImage}
          alt="NCERC campus"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/75 to-transparent lg:via-white/60" />

        {/* Header Overlay */}
        <div className="absolute inset-x-0 top-0 z-50">
          <SiteHeader />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto flex h-full max-w-8xl flex-col justify-start px-6 pt-32 sm:pt-36 lg:pt-48">
          <div className="max-w-xl">
            <h1 className="font-display text-2xl font-bold leading-tight text-navy-950 sm:text-3xl lg:text-4xl">
              Engineering the Future.
              <br />
              <span className="text-gold-500">
                Inspiring Innovation.
              </span>
            </h1>

            <div className="my-6 h-1 w-16 bg-gold-500" />

            <p className="max-w-md text-base text-slate-600">
              Empowering the next generation of engineers, innovators and
              technology leaders through excellence in education, research and
              industry.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="https://admissions.nehrucolleges.com/application-form"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-navy-950/40 bg-white/40 px-6 py-3 text-sm font-semibold text-navy-950 backdrop-blur transition hover:bg-white"
              >
                Admissions 2026
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Floating Stats Panel */}
        <div className="absolute bottom-6 left-6 right-6 z-10 sm:bottom-8 sm:left-10 sm:right-auto sm:max-w-xl">
          <div className="rounded-2xl border border-white/10 bg-black/60 p-3.5 shadow-2xl backdrop-blur-2xl">
            <div className="grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-4 sm:divide-x sm:divide-white/10">
              {stats.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2.5 sm:pl-4 sm:first:pl-0"
                >
                  <Icon
                    size={22}
                    className="shrink-0 text-gold-400"
                    strokeWidth={1.5}
                  />

                  <div>
                    <p className="text-base font-bold leading-none text-white drop-shadow-sm">
                      {value}
                    </p>

                    <p className="mt-1 text-[11px] font-medium leading-tight text-white/70">
                      {label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Announcement Bar */}
      <div className="w-full">
        <AnnouncementBar />
      </div>

      {/* Page Content Sections */}
      <div className="flex flex-col">
        <AboutSection image={collegeHorizontalImage} />
        <ExploreCampus />
        <CourseSection />
        <HighlightsSection image={highlightsImage} />
        <NcpirSection image={ncpirImage} />
        <NewsEventsSection />
        <UpcomingEventsSection />
        <PlacementSection />
        <CampusFacilitieSection />
        <CommunitySection />
        <AluminiSection />
        <CollegeInteractionSection />
        <FaqSection />
        <FooterSection />
      </div>
    </main>
  );
}