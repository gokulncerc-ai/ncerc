"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  X,
  ZoomIn,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";

const FACILITIES_BASE = "/images/aboutus/facilities";

type Facility = {
  title: string;
  tagline: string | null;
  description: string;
  image: string;
  href: string;
};

const facilities: Facility[] = [
  {
    title: "Classrooms",
    tagline: "Where Knowledge Meets Innovation – NCERC Classrooms",
    description:
      "The classrooms at NCERC are designed to provide a comfortable and engaging learning environment. Equipped with modern teaching aids, including projectors and smart boards, they enhance interactive learning. Spacious seating arrangements ensure that students can focus without distractions. Proper ventilation and lighting create a conducive atmosphere for academic activities. These classrooms support a student-friendly environment that promotes effective teaching and learning.",
    image: `${FACILITIES_BASE}/08-03-2025/6J1A9702.JPG`,
    href: "/about/facilities/classroom",
  },
  {
    title: "Computer Lab",
    tagline:
      "Forums For Cultivating Team Spirit. Empowering Innovation Through Technology",
    description:
      "The NCERC Computer Lab is equipped with high-speed computers and the latest software to support advanced learning. Students can work on programming, simulations, and research projects in a well-connected digital environment. The lab provides uninterrupted internet access to facilitate seamless learning and innovation. Experienced faculty and lab assistants are available to guide students. It is designed to enhance technical skills and prepare students for industry challenges.",
    image: `${FACILITIES_BASE}/08-03-2025/6J1A9737.jpg`,
    href: "/about/facilities/computer-lab",
  },
  {
    title: "Lab Facilities and Workshops",
    tagline: "Moulding Technocrats – Where Theory Meets Practical Excellence",
    description:
      "NCERC’s labs and workshops are equipped with state-of-the-art machinery and tools to bridge the gap between theory and practice. Students gain hands-on experience in their respective fields through live experiments and practical sessions. Safety measures and guidelines are strictly followed to ensure a secure learning environment. The workshops encourage innovation and problem-solving skills among students. These facilities help students enhance their technical knowledge and industry readiness.",
    image: `${FACILITIES_BASE}/08-03-2025/6J1A0532.jpg`,
    href: "/about/facilities/lab",
  },
  {
    title: "Library",
    tagline: "A Treasure Trove of Knowledge and Wisdom",
    description:
      "The NCERC Library is a hub of knowledge, housing thousands of books, research papers, and digital resources. It provides students with access to academic journals, reference materials, and online databases for in-depth learning. The library offers a peaceful and resourceful environment for focused study and research. Comfortable seating and modern infrastructure enhance the reading experience. Regular updates ensure students have access to the latest academic materials.",
    image: `${FACILITIES_BASE}/08-03-2025/6J1A9797.jpg`,
    href: "/about/facilities/library",
  },
  {
    title: "Cafeteria",
    tagline: "A Perfect Blend of Taste and Relaxation",
    description:
      "The cafeteria at NCERC is a lively space where students can relax and enjoy a variety of snacks and beverages. It serves fresh and hygienic food, catering to different tastes and preferences. The ambiance is designed to provide a comfortable and social environment. Quality ingredients and hygiene standards are maintained to ensure healthy meals. It is a perfect place for students to take a break and recharge.",
    image: `${FACILITIES_BASE}/08-03-2025/1U0A9939 (1).jpg`,
    href: "/about/facilities/cafeteria",
  },
  {
    title: "Canteen",
    tagline: "Nutritious Bites for Energetic Minds",
    description:
      "The NCERC canteen provides nutritious and affordable meals for students and staff. It offers a diverse menu, including both vegetarian and non-vegetarian options. Cleanliness and hygiene are maintained to ensure a healthy dining experience. The canteen serves as a convenient option for students to grab a quick meal between classes. It promotes a balanced diet to keep students energized throughout the day.",
    image: `${FACILITIES_BASE}/08-03-2025/CANTEEN 1.jpg`,
    href: "/about/facilities/canteen",
  },
  {
    title: "Auditorium",
    tagline: "A Grand Stage for Inspiration and Excellence",
    description:
      "The NCERC auditorium is a spacious and well-equipped venue for major events and gatherings. It hosts cultural programs, guest lectures, academic seminars, and official functions. The auditorium features advanced sound and lighting systems for an immersive experience. Comfortable seating ensures a pleasant experience for audiences. It serves as a dynamic platform for showcasing talent and knowledge.",
    image: `${FACILITIES_BASE}/08-03-2025/6J1A0520.jpg`,
    href: "/about/facilities/auditorium",
  },
  {
    title: "Seminar Hall",
    tagline: "Fostering Ideas, Discussions, and Growth",
    description:
      "The seminar hall at NCERC is designed for conferences, presentations, and interactive sessions. Equipped with modern audiovisual aids, it provides a professional setting for academic and technical discussions. Faculty and students use the space for workshops, training, and guest lectures. The hall encourages collaborative learning and knowledge exchange. Its well-organized layout enhances communication and engagement.",
    image: `${FACILITIES_BASE}/08-03-2025/6J1A3648.JPG`,
    href: "/about/facilities/seminar-hall",
  },
  {
    title: "Board Room",
    tagline: "Where Vision Meets Strategy",
    description:
      "The NCERC boardroom is a formal space for faculty meetings, strategic discussions, and decision-making. It is equipped with modern conferencing tools and comfortable seating arrangements. The boardroom fosters a professional atmosphere for administrative planning. It provides a space for brainstorming sessions and institutional improvements. High standards of decorum and confidentiality are maintained.",
    image: `${FACILITIES_BASE}/08-03-2025/6J1A1111.jpg`,
    href: "/about/facilities/boardroom",
  },
  {
    title: "Sports",
    tagline: "Fueling Passion, Strength, and Team Spirit",
    description:
      "NCERC promotes physical fitness and teamwork through excellent sports facilities. The campus includes outdoor fields and indoor courts for various sports like football, cricket, badminton, and basketball. Regular sports events and tournaments encourage student participation and competition. The institution believes in the holistic development of students through physical activities. Dedicated coaches help students enhance their athletic abilities.",
    image: `${FACILITIES_BASE}/08-03-2025/IMG_2210.jpg`,
    href: "/about/facilities/sports",
  },
  {
    title: "Gym",
    tagline: "Stay Fit, Stay Focused",
    description:
      "The NCERC gym is well-equipped with modern fitness machines and training equipment. It provides students with the opportunity to maintain their health and wellness. Professional guidance is available to help students follow structured workout routines. The gym promotes an active lifestyle and helps students manage stress. It is a great facility for those who prioritize fitness alongside academics.",
    image: `${FACILITIES_BASE}/gym.jpg`,
    href: "/about/facilities/gym",
  },
  {
    title: "Hostel",
    tagline: "A Home Away From Home",
    description:
      "The NCERC hostel offers a safe and comfortable living space for students from different regions. It provides well-furnished rooms with Wi-Fi, study areas, and recreational facilities. The hostel ensures a homely atmosphere while maintaining discipline and security. Nutritious meals and hygienic living conditions are prioritized. It helps students focus on their studies while enjoying a balanced social life.",
    image: `${FACILITIES_BASE}/08-03-2025/6J1A1099.jpg`,
    href: "/about/facilities/hostel",
  },
  {
    title: "Transport",
    tagline: "Safe, Reliable, and Hassle-Free Travel",
    description:
      "NCERC provides safe and efficient transportation services for students and faculty. A fleet of well-maintained buses connects the campus to various locations. The transport system ensures punctuality and convenience for daily commuting. Experienced drivers and regular maintenance ensure safety standards are met. The service helps students reach campus comfortably and on time.",
    image: `${FACILITIES_BASE}/08-03-2025/TRANSPORT.jpg`,
    href: "/about/facilities/transport",
  },
  {
    title: "Guest Room",
    tagline: "Stay in comfort. Sleep in style.",
    description:
      "Welcome to our warm and inviting guest room, thoughtfully designed to offer comfort and relaxation. The room features a cozy bed with fresh linens, ample storage space, and soft lighting to create a peaceful atmosphere. Equipped with essential amenities such as a fan/AC, Wi-Fi, and a clean attached bathroom, it provides a homely yet private space for rest. Ideal for travelers, family, or friends, this guest room ensures a pleasant and restful stay.",
    image: `${FACILITIES_BASE}/guest-room/guest_room.jpeg`,
    href: "/about/facilities/guest-room",
  },
  {
    title: "Facilities for Specially Abled Persons",
    tagline: null,
    description:
      "Our college is committed to providing an inclusive environment for students with disabilities. We offer a range of facilities to support differently abled students, including accessible pathways, ramps, dedicated seating and support services designed to ensure equal access to campus life.",
    image: `${FACILITIES_BASE}/specially-abled-persons/specially-abled.jpeg`,
    href: "/about/facilities/specially-abled-persons",
  },
];

function toSlug(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function FacilitiesPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleOpenImage = (index: number) => {
    setActiveIndex(index);
  };

  const handleCloseImage = () => {
    setActiveIndex(null);
  };

  const handlePrevImage = useCallback(() => {
    setActiveIndex((prev) => {
      if (prev === null) return null;

      return prev === 0 ? facilities.length - 1 : prev - 1;
    });
  }, []);

  const handleNextImage = useCallback(() => {
    setActiveIndex((prev) => {
      if (prev === null) return null;

      return prev === facilities.length - 1 ? 0 : prev + 1;
    });
  }, []);

  const isLightboxOpen = activeIndex !== null;

  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        handlePrevImage();
      }

      if (event.key === "ArrowRight") {
        handleNextImage();
      }

      if (event.key === "Escape") {
        setActiveIndex(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isLightboxOpen, handlePrevImage, handleNextImage]);

  const currentFacility =
    activeIndex !== null ? facilities[activeIndex] : null;

  return (
    <>
      <SiteHeader />

      <main className="w-full overflow-x-clip bg-[#FAF7F2] text-[#1E1917]">
        {/* =========================================================
            HERO
        ========================================================= */}
        <section className="relative isolate overflow-hidden bg-[#20235A]">
          <div className="absolute inset-0 -z-20">
            <Image
              src={encodeURI(facilities[0].image)}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-center opacity-[0.12] grayscale"
            />
          </div>

          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#20235A]/95 via-[#20235A]/92 to-[#15183F]/95" />

          <div className="pointer-events-none absolute -right-32 -top-32 h-[460px] w-[460px] rounded-full border border-[#D2B87C]/20" />
          <div className="pointer-events-none absolute right-10 top-24 h-[270px] w-[270px] rounded-full border border-[#D2B87C]/15" />
          <div className="pointer-events-none absolute -bottom-48 -left-24 h-[430px] w-[430px] rounded-full border border-white/5" />

          <div className="relative mx-auto max-w-[1400px] px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#D2B87C]" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D2B87C] sm:text-xs">
                  About NCERC
                </p>
              </div>

              <h1 className="mt-6 font-serif text-[44px] font-normal leading-[1.04] tracking-[-0.03em] text-white sm:text-[58px] lg:text-[68px] xl:text-[74px]">
                Campus
                <span className="block italic text-[#D2B87C]">
                  Facilities.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
                Explore the spaces, resources and support facilities that
                shape everyday learning and campus life at NCERC.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/10 pt-6">
              <div className="flex items-baseline">
                <span className="font-serif text-3xl text-white">
                  {String(facilities.length).padStart(2, "0")}
                </span>

                <span className="ml-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/50">
                  Facilities
                </span>
              </div>

              <div className="hidden h-5 w-px bg-white/15 sm:block" />

              <p className="text-[10px] uppercase tracking-[0.18em] text-white/50">
                Learning · Living · Community
              </p>
            </div>
          </div>

          <div className="h-1 w-full bg-[#D2B87C]" />
        </section>

        {/* =========================================================
            INTRO + JUMP LINKS
        ========================================================= */}
        <section className="border-b border-[#20235A]/10 bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20 xl:px-16">
          <div className="mx-auto max-w-[1280px]">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-9 bg-[#8F7746]" />

                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8F7746] sm:text-xs">
                    The NCERC Campus
                  </p>
                </div>

                <h2 className="font-serif text-4xl font-normal leading-[1.12] tracking-[-0.025em] text-[#20235A] sm:text-5xl">
                  Spaces designed for
                  <br />
                  <span className="italic">learning and growth.</span>
                </h2>
              </div>

              <div className="max-w-3xl">
                <p className="text-justify text-[15px] leading-[2] text-[#1E1917]/75 sm:text-base">
                  From technology-enabled classrooms and laboratories to
                  libraries, sports facilities, accommodation and everyday
                  student services, NCERC provides an environment designed to
                  support a complete campus experience.
                </p>

                <p className="mt-4 text-justify text-[15px] leading-[2] text-[#1E1917]/60 sm:text-base">
                  Browse the facilities below to discover the spaces that
                  contribute to academic excellence, collaboration, wellbeing
                  and student life.
                </p>
              </div>
            </div>

            {/* Jump links */}
            <div className="mt-10 border-t border-[#20235A]/10 pt-8">
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                Jump to a facility
              </p>

              <div className="flex flex-wrap gap-2">
                {facilities.map((facility, index) => (
                  <a
                    key={facility.title}
                    href={`#${toSlug(facility.title)}`}
                    className="group inline-flex items-center gap-2 border border-[#20235A]/15 bg-white px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#20235A] transition-colors duration-300 hover:border-[#20235A] hover:bg-[#20235A] hover:text-[#D2B87C]"
                  >
                    <span className="font-serif text-[11px] normal-case tracking-normal text-[#8F7746] transition-colors group-hover:text-[#D2B87C]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {facility.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            ZIGZAG FACILITY SHOWCASE
        ========================================================= */}
        {facilities.map((facility, index) => {
          const number = String(index + 1).padStart(2, "0");
          const isReversed = index % 2 === 1;
          const background = isReversed ? "bg-[#F2EFE8]" : "bg-[#FAF7F2]";

          return (
            <section
              key={facility.title}
              id={toSlug(facility.title)}
              className={`${background} scroll-mt-24 px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20 xl:px-16`}
            >
              <div className="mx-auto max-w-[1280px]">
                <article className="group grid grid-cols-1 items-center gap-0 lg:grid-cols-12">
                  {/* Image */}
                  <button
                    type="button"
                    onClick={() => handleOpenImage(index)}
                    aria-label={`View ${facility.title} image`}
                    className={`group/image relative block h-[260px] w-full cursor-pointer overflow-hidden bg-[#30336B] text-left sm:h-[360px] lg:row-start-1 lg:h-[480px] lg:col-span-7 ${
                      isReversed ? "lg:col-start-6" : "lg:col-start-1"
                    }`}
                  >
                    <Image
                      src={encodeURI(facility.image)}
                      alt={facility.title}
                      fill
                      sizes="(min-width: 1024px) 58vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover/image:scale-[1.04]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#151638]/50 via-transparent to-transparent" />

                    <div className="absolute inset-0 flex items-center justify-center bg-[#20235A]/0 opacity-0 transition-all duration-500 group-hover/image:bg-[#20235A]/35 group-hover/image:opacity-100">
                      <span className="flex h-14 w-14 items-center justify-center border border-[#D2B87C]/70 bg-[#20235A]/90 text-[#D2B87C]">
                        <ZoomIn size={22} strokeWidth={1.6} />
                      </span>
                    </div>

                    <span className="absolute left-5 top-5 border border-white/30 bg-[#20235A]/85 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                      {number} / {String(facilities.length).padStart(2, "0")}
                    </span>
                  </button>

                  {/* Content card (overlaps the image on large screens) */}
                  <div
                    className={`relative z-10 border border-[#20235A]/10 border-t-2 border-t-[#D2B87C] bg-white p-6 shadow-[0_20px_50px_rgba(32,35,90,0.08)] sm:p-8 lg:row-start-1 lg:col-span-6 lg:p-10 ${
                      isReversed
                        ? "lg:col-start-1 lg:-mr-12"
                        : "lg:col-start-7 lg:-ml-12"
                    } -mt-2 mx-3 sm:mx-6 lg:mx-0 lg:mt-0`}
                  >
                    {/* Watermark number */}
                    <span className="pointer-events-none absolute right-5 top-3 select-none font-serif text-[88px] leading-none text-[#20235A]/[0.05] sm:text-[110px]">
                      {number}
                    </span>

                    <div className="relative">
                      <div className="flex items-center gap-4">
                        <span className="font-serif text-sm text-[#8F7746]">
                          {number}
                        </span>

                        <span className="h-px w-10 bg-[#D2B87C] transition-all duration-500 group-hover:w-20" />
                      </div>

                      <h3 className="mt-4 font-serif text-3xl leading-tight tracking-[-0.02em] text-[#20235A] sm:text-4xl">
                        {facility.title}
                      </h3>

                      {facility.tagline && (
                        <p className="mt-3 text-sm font-medium italic leading-6 text-[#8F7746] sm:text-base">
                          {facility.tagline}
                        </p>
                      )}

                      <p className="mt-5 text-justify text-sm leading-7 text-[#1E1917]/70 sm:text-[15px] sm:leading-8">
                        {facility.description}
                      </p>

                      <div className="mt-7 flex flex-wrap items-center gap-5">
                        <Link
                          href={facility.href}
                          className="group/link inline-flex min-h-12 items-center gap-3 bg-[#20235A] px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:bg-[#D2B87C] hover:text-[#20235A]"
                        >
                          Explore Facility
                          <ArrowUpRight
                            size={16}
                            className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                          />
                        </Link>

                        <button
                          type="button"
                          onClick={() => handleOpenImage(index)}
                          className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746] transition-colors hover:text-[#20235A]"
                        >
                          View Image
                          <ZoomIn size={14} strokeWidth={1.8} />
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </section>
          );
        })}

        {/* =========================================================
            CLOSING STATEMENT + CTA
        ========================================================= */}
        <section className="relative isolate overflow-hidden bg-[#20235A] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16">
          <div className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full border border-[#D2B87C]/15" />
          <div className="pointer-events-none absolute right-16 top-20 h-[220px] w-[220px] rounded-full border border-[#D2B87C]/10" />
          <div className="pointer-events-none absolute -bottom-48 -left-24 h-[440px] w-[440px] rounded-full border border-white/5" />

          <div className="relative mx-auto max-w-[1280px]">
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-9 bg-[#D2B87C]" />

                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D2B87C] sm:text-xs">
                    Beyond the Classroom
                  </p>
                </div>
              </div>

              <div>
                <h2 className="max-w-4xl font-serif text-3xl font-normal leading-tight tracking-[-0.02em] sm:text-4xl lg:text-5xl">
                  An environment where academic ambition meets a{" "}
                  <span className="italic text-[#D2B87C]">
                    complete campus experience.
                  </span>
                </h2>

                <p className="mt-7 max-w-2xl text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
                  NCERC’s facilities are designed to give students the spaces,
                  resources and support they need to learn confidently,
                  collaborate meaningfully and grow beyond academics.
                </p>

                <Link
                  href="/about"
                  className="group mt-9 inline-flex min-h-12 items-center gap-3 border border-[#D2B87C]/60 px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:bg-[#D2B87C] hover:text-[#20235A]"
                >
                  About NCERC
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* =========================================================
          FULLSCREEN LIGHTBOX
      ========================================================= */}
      {activeIndex !== null && currentFacility && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#151638]/95 p-4 backdrop-blur-md"
          onClick={handleCloseImage}
          role="dialog"
          aria-modal="true"
          aria-label={`${currentFacility.title} image viewer`}
        >
          {/* Top information */}
          <div className="absolute left-4 top-4 z-20 flex items-center gap-3 sm:left-8 sm:top-8">
            <div className="border border-[#D2B87C]/40 bg-[#20235A] px-4 py-2">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                {currentFacility.title}
              </span>
            </div>

            <div className="hidden border border-white/15 bg-[#20235A]/60 px-4 py-2 sm:block">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
                {activeIndex + 1} / {facilities.length}
              </span>
            </div>
          </div>

          {/* Close */}
          <button
            type="button"
            onClick={handleCloseImage}
            aria-label="Close full screen view"
            className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center border border-white/20 text-white transition-colors hover:border-[#D2B87C] hover:text-[#D2B87C] sm:right-8 sm:top-8"
          >
            <X size={22} />
          </button>

          {/* Previous */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              handlePrevImage();
            }}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/20 bg-[#20235A]/60 text-white transition-colors hover:border-[#D2B87C] hover:text-[#D2B87C] sm:left-8"
          >
            <ChevronLeft size={28} strokeWidth={1.5} />
          </button>

          {/* Next */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              handleNextImage();
            }}
            aria-label="Next image"
            className="absolute right-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/20 bg-[#20235A]/60 text-white transition-colors hover:border-[#D2B87C] hover:text-[#D2B87C] sm:right-8"
          >
            <ChevronRight size={28} strokeWidth={1.5} />
          </button>

          {/* Image */}
          <div
            className="relative h-[78vh] w-[82vw] max-w-[1400px]"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={encodeURI(currentFacility.image)}
              alt={currentFacility.title}
              fill
              priority
              sizes="90vw"
              className="object-contain"
            />
          </div>

          {/* Bottom link */}
          <Link
            href={currentFacility.href}
            onClick={(event) => event.stopPropagation()}
            className="absolute bottom-4 left-1/2 z-20 inline-flex -translate-x-1/2 items-center gap-3 border border-[#D2B87C]/50 bg-[#20235A] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#D2B87C] transition-colors hover:bg-[#D2B87C] hover:text-[#20235A] sm:bottom-8"
          >
            Explore {currentFacility.title}
            <ArrowUpRight size={14} />
          </Link>
        </div>
      )}

      <FooterSection />
    </>
  );
}