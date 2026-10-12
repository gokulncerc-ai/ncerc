"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  X,
  ZoomIn,
} from "lucide-react";

const IMAGE_BASE = "/images/dpt/computer-science-and-engineering/activities";

interface AssociationActivity {
  id: string;
  title: string;
  cover: string;
  date?: string;
  href?: string;
  content?: string[];
  images?: string[];
  externalUrl?: string;
  external?: boolean;
}

interface Photo {
  src: string;
  alt: string;
}

interface LightboxState {
  photos: Photo[];
  index: number;
}

/*
 * Association Activities
 *
 * The five cards work as tabs.
 * Clicking a card does NOT navigate to another page.
 * Its content is displayed below the cards.
 */
const associationActivities: AssociationActivity[] = [
  {
    id: "poster-design",
    title: "POSTER DESIGN COMPETITION",
    cover: "Association activities/poster competetion.jpg",
    date: "March 14, 2025",
    content: [
      "The Poster Design Competition organized by the Department of Computer Science and Engineering at Nehru College of Engineering and Research Centre was held on March 14, Friday, at 11:30 am in the Research Lab, Aryabhatta.",
      "The competition was specifically for the S4 batch. Participants were required to register through the registration link. The event was coordinated by Ms. Betsy Joy, Assistant Professor in the Computer Science and Engineering department.",
      "The competition attracted a significant number of participants, showcasing a variety of creative posters that reflected the students' understanding of computer science concepts. The engagement level was high, with students actively discussing their designs and the ideas behind them.",
      'The theme of the Poster Designing Event was "The Future of Artificial Intelligence".',
    ],
    images: [
      "Association activities/poster competetion.jpg",
      "Association activities/post1.jpg",
      "Association activities/post2.jpg",
      "Association activities/post3.jpg",
      "Association activities/post4.jpg",
      "Association activities/post5.jpg",
    ],
  },

  {
    id: "crackathon",
    title: "CRACKATHON 2024",
    cover: "Association activities/crack-coding.jpg",
    date: "November 06, 2024",
    content: [
      "Crackathon 2024, organized by the Department of Computer Science and Engineering at Nehru College of Engineering and Research Centre, successfully took place on November 6, 2024.",
      "The event was a resounding success, providing a platform for participants to showcase their coding prowess and collaborative skills.",
      "The event was inaugurated by Dr. Justin Jose, the Head of Computer Science and Engineering and organized by Mrs. Betsy, Assistant Professor, Computer Science and Engineering.",
    ],
    images: [
      "Association activities/crack-coding.jpg",
      "Association activities/crck1.jpg",
      "Association activities/crck2.jpg",
      "Association activities/crck3.jpg",
      "Association activities/crck4.jpg",
      "Association activities/crck5.jpg",
      "Association activities/crck6.jpg",
      "Association activities/crck7.jpg",
      "Association activities/crck8.jpg",
    ],
  },
  {
    id: "enigma-2024",
    title: "ENIGMA 2024",
    cover: "Association activities/enigma.jpg",

    content: [
      "Enigma Technical Talk",
      "BY NCERC ON, August 30 2024",
      "The Association Inauguration event was held on the 30th of August, 2024, at the Brahmagupta Auditorium within the premises of Nehru College of Engineering and Research Centre (NCERC). The Presidential Address was delivered by Dr. K G Viswanadhan, the Principal of NCERC. He emphasized the college's commitment to academic excellence and the holistic development of its students. His speech was followed by the Inaugural Address from the Chief Guest, Mr. Liyon C Jose, Assistant Director at EY Technology. Mr. Jose's address was both motivational and insightful, focusing on the evolving landscape of technology and the role of students in shaping the future.",
    ],

    images: [
      "Association activities/enigma.jpg",
      "Association activities/img1.jpg",
      "Association activities/img2.jpg",
      "Association activities/img3.jpg",
      "Association activities/img4.jpg",
    ],
  },
  {
    id: "enigma-2023",
    title: "ENIGMA 2023",
    cover: "Association activities/ENIGMA2023.JPG",
    href: "/media_gallery/news_and_events",
    external: true,
    content: [
      "Enigma 2023",
      "Enigma 2023 is available through the NCERC news page.",
    ],
    images: ["Association activities/ENIGMA2023.JPG"],
  },

  {
    id: "rubix-2k20",
    title: "RUBIX 2K20",
    cover: "Association activities/Enigma 2k20 1.png",

    /*
     * Add the original Rubix 2K20 PHP content here
     * when the source file is available.
     */
    content: [
      "Rubix 2K20",
      "The detailed content for Rubix 2K20 can be added here from the original Rubix 2K20 page.",
    ],

    images: ["Association activities/Enigma 2k20 1.png"],
  },
];

function toSrc(path: string) {
  return encodeURI(`${IMAGE_BASE}/${path}`);
}

function toTitleCase(value: string) {
  return value
    .toLowerCase()
    .replace(/\b([a-z])/g, (match) => match.toUpperCase());
}

export default function AssociationActivitiesGallery() {
  const [activeId, setActiveId] = useState(associationActivities[0].id);

  const [lightbox, setLightbox] = useState<LightboxState | null>(null);

  const contentRef = useRef<HTMLDivElement>(null);

  const active =
    associationActivities.find((activity) => activity.id === activeId) ??
    associationActivities[0];

  const photos: Photo[] = (active.images ?? []).map((image, index) => ({
    src: toSrc(image),
    alt: `${active.title} - photo ${index + 1}`,
  }));

  const currentPhoto = lightbox ? lightbox.photos[lightbox.index] : null;

  const total = lightbox?.photos.length ?? 0;

  // Link shown next to the heading (external URL, or the news page for Enigma 2023)
  const newsLink =
    active.externalUrl ?? (active.external ? active.href : undefined);

  function handleSelect(id: string) {
    setActiveId(id);
    setLightbox(null);

    window.setTimeout(() => {
      contentRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  }

  function openPhotos(index: number) {
    if (photos.length === 0) {
      return;
    }

    setLightbox({
      photos,
      index,
    });
  }

  function showNext() {
    setLightbox((previous) => {
      if (!previous) {
        return null;
      }

      return {
        ...previous,
        index: (previous.index + 1) % previous.photos.length,
      };
    });
  }

  function showPrevious() {
    setLightbox((previous) => {
      if (!previous) {
        return null;
      }

      return {
        ...previous,
        index:
          (previous.index - 1 + previous.photos.length) %
          previous.photos.length,
      };
    });
  }

  useEffect(() => {
    if (!lightbox) {
      return;
    }

    function handleKeyboard(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setLightbox(null);
        return;
      }

      if (event.key === "ArrowRight") {
        showNext();
        return;
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }
    }

    window.addEventListener("keydown", handleKeyboard);

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyboard);

      document.body.style.overflow = previousOverflow;
    };
  }, [lightbox]);

  return (
    <>
      {/* =========================================================
          ASSOCIATION ACTIVITY CARDS
          ========================================================= */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {associationActivities.map((activity, index) => {
          const isActive = activity.id === activeId;

          return (
            <button
              key={activity.id}
              type="button"
              onClick={() => handleSelect(activity.id)}
              aria-pressed={isActive}
              className={`group flex h-full flex-col overflow-hidden border text-left transition-all duration-300 hover:-translate-y-1 ${
                isActive
                  ? "border-[#20235A] bg-[#20235A]"
                  : "border-[#20235A]/10 bg-white hover:border-[#D2B87C]"
              }`}
            >
              {/* Image */}
              <div className="relative aspect-[3/2] overflow-hidden bg-[#F2EFE8]">
                <Image
                  src={toSrc(activity.cover)}
                  alt={activity.title}
                  fill
                  sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#151638]/60 via-transparent to-transparent" />

                <span className="absolute left-4 top-4 bg-[#20235A] px-3 py-1.5 font-serif text-xs text-[#D2B87C]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {isActive && (
                  <span className="absolute right-4 top-4 bg-[#D2B87C] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#20235A]">
                    Selected
                  </span>
                )}
              </div>

              {/* Card title */}
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3
                  className={`font-serif text-lg leading-snug sm:text-xl ${
                    isActive ? "text-white" : "text-[#20235A]"
                  }`}
                >
                  {toTitleCase(activity.title)}
                </h3>

                <div
                  className={`mt-auto inline-flex items-center gap-2 pt-5 text-[10px] font-semibold uppercase tracking-[0.18em] ${
                    isActive
                      ? "text-[#D2B87C]"
                      : "text-[#8F7746] group-hover:text-[#20235A]"
                  }`}
                >
                  View Details
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* =========================================================
          SELECTED ACTIVITY CONTENT
          ========================================================= */}
      <section ref={contentRef} className="mt-16 scroll-mt-24">
        <div className="mb-10 border-b border-[#20235A]/10 pb-6">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-9 bg-[#8F7746]" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8F7746] sm:text-xs">
                  CSE Association
                </p>
              </div>

              <h2 className="font-serif text-3xl font-normal leading-[1.12] tracking-[-0.02em] text-[#20235A] sm:text-4xl lg:text-5xl">
                {toTitleCase(active.title)}
              </h2>
            </div>

            {newsLink && (
              <a
                href={newsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 self-start border border-[#20235A]/20 bg-white px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#20235A] transition-colors hover:border-[#D2B87C] hover:text-[#8F7746] sm:self-auto"
              >
                Visit NCERC News
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>

        {/* Article */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
          {/* Main cover image */}
          <div>
            <div className="relative">
              <div className="absolute -bottom-3 -left-3 right-3 top-3 border border-[#D2B87C]/70" />

              <div className="relative aspect-[4/3] overflow-hidden bg-[#F2EFE8]">
                <Image
                  src={toSrc(active.cover)}
                  alt={active.title}
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>

            {active.date && (
              <div className="mt-8 flex items-center gap-4 border border-[#20235A]/10 bg-white px-5 py-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#F2EFE8] text-[#8F7746]">
                  <CalendarDays size={21} strokeWidth={1.5} />
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                    Event Date
                  </p>

                  <p className="mt-1 font-serif text-lg text-[#20235A]">
                    {active.date}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Text Content */}
          <div className="flex flex-col justify-center border-l-2 border-[#D2B87C] bg-white px-6 py-7 sm:px-8 sm:py-9">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746] sm:text-xs">
              Department of Computer Science and Engineering
            </p>

            <h3 className="mt-3 font-serif text-2xl leading-snug text-[#20235A] sm:text-3xl">
              {toTitleCase(active.title)}
            </h3>

            <div className="mt-5 h-px w-12 bg-[#D2B87C]" />

            <div className="mt-6 space-y-4">
              {(active.content ?? []).map((paragraph, index) => (
                <p
                  key={`${active.id}-content-${index}`}
                  className={`text-sm leading-7 sm:text-[15px] sm:leading-8 ${
                    index === 0 && active.id === "poster-design"
                      ? "font-medium text-[#1E1917]/85"
                      : "text-[#1E1917]/70"
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* =======================================================
            PHOTO GALLERY
            ======================================================= */}
        {photos.length > 0 && (
          <div className="mt-16">
            <div className="mb-8 flex items-end justify-between gap-4 border-b border-[#20235A]/10 pb-5">
              <div>
                <div className="mb-3 flex items-center gap-3">
                  <span className="h-px w-9 bg-[#8F7746]" />

                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8F7746] sm:text-xs">
                    Photos
                  </p>
                </div>

                <h3 className="font-serif text-2xl text-[#20235A] sm:text-3xl">
                  Event Gallery
                </h3>
              </div>

              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1E1917]/50">
                {photos.length} {photos.length === 1 ? "photo" : "photos"}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {photos.map((photo, index) => (
                <button
                  key={photo.src}
                  type="button"
                  onClick={() => openPhotos(index)}
                  aria-label={`View ${active.title} photo ${index + 1}`}
                  className="group relative aspect-[4/3] overflow-hidden border border-[#20235A]/10 bg-[#F2EFE8] transition-all duration-300 hover:-translate-y-1 hover:border-[#D2B87C]"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#151638]/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center bg-[#20235A] text-[#D2B87C] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <ZoomIn size={16} />
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* =========================================================
          FULL SCREEN IMAGE VIEWER
          ========================================================= */}
      {lightbox && currentPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#151638]/95 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${active.title} photo viewer`}
          onClick={() => setLightbox(null)}
        >
          {/* Counter */}
          <div className="absolute left-4 top-4 z-10 border border-[#D2B87C]/40 bg-[#20235A] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C] sm:left-6 sm:top-6">
            {lightbox.index + 1} / {total}
          </div>

          {/* Close */}
          <button
            type="button"
            onClick={() => setLightbox(null)}
            aria-label="Close image viewer"
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center border border-white/20 text-white transition-colors hover:border-[#D2B87C] hover:text-[#D2B87C] sm:right-6 sm:top-6"
          >
            <X size={22} />
          </button>

          {/* Previous */}
          {total > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showPrevious();
              }}
              aria-label="Previous photo"
              className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/20 bg-[#20235A]/60 text-white transition-colors hover:border-[#D2B87C] hover:text-[#D2B87C] sm:left-6"
            >
              <ChevronLeft size={26} />
            </button>
          )}

          {/* Image */}
          <div
            className="relative h-[80vh] w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={currentPhoto.src}
              alt={currentPhoto.alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>

          {/* Next */}
          {total > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              aria-label="Next photo"
              className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/20 bg-[#20235A]/60 text-white transition-colors hover:border-[#D2B87C] hover:text-[#D2B87C] sm:right-6"
            >
              <ChevronRight size={26} />
            </button>
          )}
        </div>
      )}
    </>
  );
}