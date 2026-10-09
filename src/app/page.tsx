"use client";

import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  Play,
  Users,
  Headphones,
  Rotate3D,
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

import collegeHorizontalImage from "../../public/images/college_horizontal.webp";
import highlightsImage from "../../public/images/campus_walk.png";
import ncpirImage from "../../public/images/ncpir_handshake.png";

export default function Home() {
  return (
    <main className="flex flex-col bg-white">
     
      {/* =========================================================
          PREMIUM CINEMATIC HERO
      ========================================================= */}
      <section
        className="
          relative
          isolate
          h-[100svh]
          min-h-[100svh]
          w-full
          overflow-hidden
          bg-black
          md:h-[100dvh]
          md:min-h-[100dvh]
        "
      >
        {/* =====================================================
            VIDEO BACKGROUND

            No overlay is applied over the video.
            The video remains fully visible and natural.
        ===================================================== */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-black">
          <iframe
            src="https://www.youtube.com/embed/liwQav35JRQ?autoplay=1&mute=1&loop=1&playlist=liwQav35JRQ&controls=0&rel=0&modestbranding=1&playsinline=1&start=20&vq=hd1080"
            title="NCERC Campus Video"
            className="
              absolute
              left-1/2
              top-1/2
              h-[100svh]
              min-h-full
              w-[177.78svh]
              min-w-full
              -translate-x-1/2
              -translate-y-1/2
              scale-[1.035]
              border-0
              md:h-[100dvh]
              md:w-[177.78dvh]
            "
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>

        {/* =====================================================
            HEADER
        ===================================================== */}
        <div className="absolute inset-x-0 top-0 z-50">
          <SiteHeader />
        </div>

        {/* =====================================================
            PREMIUM RIGHT ACTION PANEL
        ===================================================== */}
        <div
          className="
            absolute
            right-0
            top-1/2
            z-40
            flex
            -translate-y-1/2
            flex-col
            overflow-hidden
            rounded-l-2xl
            border
            border-white/15
            bg-black/45
            shadow-[0_20px_60px_rgba(0,0,0,0.35)]
            backdrop-blur-xl
          "
        >
          {/* GOLD ACCENT */}
          <div
            className="
              absolute
              inset-y-0
              left-0
              w-px
              bg-gradient-to-b
              from-transparent
              via-[#D2B87C]/80
              to-transparent
            "
          />

          {/* =================================================
              ADMISSION ENQUIRY
          ================================================= */}
          <a
            href="https://admissions.nehrucolleges.com/application-form"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              relative
              flex
              w-[58px]
              flex-col
              items-center
              justify-center
              border-b
              border-white/10
              px-2
              py-5
              text-center
              transition-all
              duration-500
              hover:w-[155px]
              hover:bg-[#D2B87C]
              sm:w-[66px]
              sm:py-6
            "
          >
            <div
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-[#D2B87C]/70
                bg-black/10
                text-[#D2B87C]
                transition-all
                duration-500
                group-hover:border-[#20235A]
                group-hover:bg-[#20235A]
                group-hover:text-white
                group-hover:shadow-[0_0_0_5px_rgba(32,35,90,0.08)]
              "
            >
              <Headphones size={16} strokeWidth={1.6} />
            </div>

            <span
              className="
                mt-2.5
                hidden
                whitespace-nowrap
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.17em]
                text-[#20235A]
                group-hover:block
              "
            >
              Admission Enquiry
            </span>

            <span
              className="
                mt-2
                block
                whitespace-nowrap
                text-[8px]
                font-medium
                uppercase
                tracking-[0.2em]
                text-white/65
                group-hover:hidden
              "
            >
              Enquiry
            </span>
          </a>

          {/* =================================================
              VIEW 360°
          ================================================= */}
          <a
            href="https://ncerc.ac.in/360/"
            className="
              group
              relative
              flex
              w-[58px]
              flex-col
              items-center
              justify-center
              px-2
              py-5
              text-center
              transition-all
              duration-500
              hover:w-[155px]
              hover:bg-white
              sm:w-[66px]
              sm:py-6
            "
          >
            <div
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-white/30
                bg-white/5
                text-white
                transition-all
                duration-500
                group-hover:border-[#20235A]
                group-hover:bg-[#20235A]
                group-hover:text-white
                group-hover:shadow-[0_0_0_5px_rgba(32,35,90,0.08)]
              "
            >
              <Rotate3D size={16} strokeWidth={1.6} />
            </div>

            <span
              className="
                mt-2.5
                hidden
                whitespace-nowrap
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.17em]
                text-[#20235A]
                group-hover:block
              "
            >
              View 360°
            </span>

            <span
              className="
                mt-2
                block
                whitespace-nowrap
                text-[8px]
                font-medium
                uppercase
                tracking-[0.2em]
                text-white/65
                group-hover:hidden
              "
            >
              360°
            </span>
          </a>
        </div>

        {/* =====================================================
            PREMIUM BOTTOM ACTION AREA
        ===================================================== */}
        <div
          className="
            absolute
            inset-x-0
            bottom-0
            z-30
            px-3
            pb-5
            sm:px-6
            sm:pb-8
            lg:px-10
            lg:pb-10
          "
        >
          <div className="mx-auto flex max-w-6xl flex-col items-center">
          
            <div
              className="
                relative
                w-full
                overflow-hidden
                rounded-2xl
                border
                border-white/15
                bg-black/45
                shadow-[0_25px_80px_rgba(0,0,0,0.4)]
                backdrop-blur-2xl
              "
            >
          
              <div
                className="
                  absolute
                  inset-x-0
                  top-0
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  via-[#D2B87C]/80
                  to-transparent
                "
              />

              <div className="grid grid-cols-2 md:grid-cols-4">
              
                <a
                  href="https://admissions.nehrucolleges.com/application-form"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    relative
                    flex
                    min-h-[76px]
                    items-center
                    justify-center
                    gap-2
                    border-b
                    border-r
                    border-white/10
                    px-3
                    py-3
                    transition-all
                    duration-500
                    hover:bg-[#D2B87C]
                    sm:min-h-[88px]
                    sm:gap-3
                    sm:px-5
                    sm:py-4
                    md:border-b-0
                  "
                >
                  <div
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#D2B87C]/60
                      bg-white/[0.03]
                      text-[#D2B87C]
                      transition-all
                      duration-500
                      group-hover:border-[#20235A]
                      group-hover:bg-[#20235A]
                      group-hover:text-white
                    "
                  >
                    <GraduationCap size={17} strokeWidth={1.6} />
                  </div>

                  <div className="min-w-0 text-left">
                    <p
                      className="
                        text-[8px]
                        font-medium
                        uppercase
                        tracking-[0.15em]
                        text-white/50
                        transition-colors
                        duration-500
                        group-hover:text-[#20235A]/60
                        sm:text-[10px]
                        sm:tracking-[0.18em]
                      "
                    >
                      Start Your Journey
                    </p>

                    <p
                      className="
                        mt-1
                        text-[11px]
                        font-semibold
                        text-white
                        transition-colors
                        duration-500
                        group-hover:text-[#20235A]
                        sm:text-sm
                      "
                    >
                      Admissions Open
                    </p>
                  </div>

                  <ArrowRight
                    size={16}
                    className="
                      ml-auto
                      hidden
                      text-[#D2B87C]
                      transition-all
                      duration-500
                      group-hover:translate-x-1
                      group-hover:text-[#20235A]
                      sm:block
                    "
                  />
                </a>

            
                <a
                  href="#programs"
                  className="
                    group
                    relative
                    flex
                    min-h-[76px]
                    items-center
                    justify-center
                    gap-2
                    border-b
                    border-white/10
                    px-3
                    py-3
                    transition-all
                    duration-500
                    hover:bg-white
                    sm:min-h-[88px]
                    sm:gap-3
                    sm:px-5
                    sm:py-4
                    md:border-b-0
                    md:border-r
                  "
                >
                  <div
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/20
                      bg-white/[0.03]
                      text-white/80
                      transition-all
                      duration-500
                      group-hover:border-[#20235A]
                      group-hover:bg-[#20235A]
                      group-hover:text-white
                    "
                  >
                    <BookOpen size={16} strokeWidth={1.6} />
                  </div>

                  <div className="min-w-0 text-left">
                    <p
                      className="
                        text-[8px]
                        font-medium
                        uppercase
                        tracking-[0.15em]
                        text-white/50
                        transition-colors
                        duration-500
                        group-hover:text-[#20235A]/55
                        sm:text-[10px]
                        sm:tracking-[0.18em]
                      "
                    >
                      Academic Excellence
                    </p>

                    <p
                      className="
                        mt-1
                        text-[11px]
                        font-semibold
                        text-white
                        transition-colors
                        duration-500
                        group-hover:text-[#20235A]
                        sm:text-sm
                      "
                    >
                      Explore Programs
                    </p>
                  </div>

                  <ArrowRight
                    size={16}
                    className="
                      ml-auto
                      hidden
                      text-white/60
                      transition-all
                      duration-500
                      group-hover:translate-x-1
                      group-hover:text-[#20235A]
                      sm:block
                    "
                  />
                </a>

             
                <a
                  href="#campus"
                  className="
                    group
                    relative
                    flex
                    min-h-[76px]
                    items-center
                    justify-center
                    gap-2
                    border-r
                    border-white/10
                    px-3
                    py-3
                    transition-all
                    duration-500
                    hover:bg-white
                    sm:min-h-[88px]
                    sm:gap-3
                    sm:px-5
                    sm:py-4
                  "
                >
                  <div
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/20
                      bg-white/[0.03]
                      text-white/80
                      transition-all
                      duration-500
                      group-hover:border-[#20235A]
                      group-hover:bg-[#20235A]
                      group-hover:text-white
                    "
                  >
                    <Users size={16} strokeWidth={1.6} />
                  </div>

                  <div className="min-w-0 text-left">
                    <p
                      className="
                        text-[8px]
                        font-medium
                        uppercase
                        tracking-[0.15em]
                        text-white/50
                        transition-colors
                        duration-500
                        group-hover:text-[#20235A]/55
                        sm:text-[10px]
                        sm:tracking-[0.18em]
                      "
                    >
                      Experience NCERC
                    </p>

                    <p
                      className="
                        mt-1
                        text-[11px]
                        font-semibold
                        text-white
                        transition-colors
                        duration-500
                        group-hover:text-[#20235A]
                        sm:text-sm
                      "
                    >
                      Campus Life
                    </p>
                  </div>

                  <ArrowRight
                    size={16}
                    className="
                      ml-auto
                      hidden
                      text-white/60
                      transition-all
                      duration-500
                      group-hover:translate-x-1
                      group-hover:text-[#20235A]
                      sm:block
                    "
                  />
                </a>

                
                <a
                  href="#placements"
                  className="
                    group
                    relative
                    flex
                    min-h-[76px]
                    items-center
                    justify-center
                    gap-2
                    px-3
                    py-3
                    transition-all
                    duration-500
                    hover:bg-[#D2B87C]
                    sm:min-h-[88px]
                    sm:gap-3
                    sm:px-5
                    sm:py-4
                  "
                >
                  <div
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#D2B87C]/60
                      bg-white/[0.03]
                      text-[#D2B87C]
                      transition-all
                      duration-500
                      group-hover:border-[#20235A]
                      group-hover:bg-[#20235A]
                      group-hover:text-white
                    "
                  >
                    <Play size={15} strokeWidth={1.6} />
                  </div>

                  <div className="min-w-0 text-left">
                    <p
                      className="
                        text-[8px]
                        font-medium
                        uppercase
                        tracking-[0.15em]
                        text-white/50
                        transition-colors
                        duration-500
                        group-hover:text-[#20235A]/60
                        sm:text-[10px]
                        sm:tracking-[0.18em]
                      "
                    >
                      Career
                    </p>

                    <p
                      className="
                        mt-1
                        text-[11px]
                        font-semibold
                        text-white
                        transition-colors
                        duration-500
                        group-hover:text-[#20235A]
                        sm:text-sm
                      "
                    >
                      Placements
                    </p>
                  </div>

                  <ArrowRight
                    size={16}
                    className="
                      ml-auto
                      hidden
                      text-[#D2B87C]
                      transition-all
                      duration-500
                      group-hover:translate-x-1
                      group-hover:text-[#20235A]
                      sm:block
                    "
                  />
                </a>
              </div>
            </div>

            {/* =================================================
                PREMIUM SCROLL INDICATOR
            ================================================= */}
            <div className="mt-5 hidden items-center gap-4 md:flex">
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-white/30" />

              <span className="text-[9px] font-medium uppercase tracking-[0.32em] text-white/60">
                Scroll to explore
              </span>

              <span className="h-px w-10 bg-gradient-to-l from-transparent to-white/30" />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ANNOUNCEMENT BAR
      ========================================================= */}
      <div className="w-full">
        <AnnouncementBar />
      </div>

      {/* =========================================================
          PAGE CONTENT SECTIONS
      ========================================================= */}
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