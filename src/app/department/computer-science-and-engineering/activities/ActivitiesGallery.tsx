"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Image as ImageIcon,
  X,
  ZoomIn,
} from "lucide-react";

// Adjust this base to wherever the images live inside /public
const IMAGE_BASE = "/images/dpt/computer-science-and-engineering/activities";

interface EventItem {
  title: string;
  /** Cover image path, relative to IMAGE_BASE */
  cover: string;
  /** Optional external link (opens in a new tab) */
  href?: string;
  /** Optional photos shown in the viewer when the card is clicked (paths relative to IMAGE_BASE) */
  images?: string[];
}

interface Activity {
  id: string;
  title: string;
  /** Folder name inside IMAGE_BASE (adjust to match your real folders) */
  folder: string;
  /** Plain photo list (file names inside the folder) */
  images: string[];
  /** Event cards, used instead of a plain photo list */
  events?: EventItem[];
}

interface Photo {
  src: string;
  alt: string;
}

interface LightboxState {
  photos: Photo[];
  index: number;
}

const activities: Activity[] = [
  {
    id: "alumni-interaction",
    title: "Alumni Interaction",
    folder: "Alumni interaction",
    images: [
      "alumni interaction1.png",
      "Alumni interaction3.png",
      "Alumni interaction4.png",
      "Alumni interaction2.png",
    ],
  },
  {
    id: "association-activities",
    title: "Association Activities",
    folder: "Association activities",
    images: [],
    events: [
      {
        title: "POSTER DESIGN COMPETITION",
        cover: "Association activities/poster competetion.jpg",
        // images: ["img/poster-1.jpg", "img/poster-2.jpg"], // add photos to open them in the viewer
      },
      {
        title: "CRACKATHON CODING COMPETITION",
        cover: "Association activities/crack-coding.jpg",
        // images: [],
      },
      {
        title: "ENIGMA 2024",
        cover: "Association activities/enigma.jpg",
        // images: [],
      },
      {
        title: "ENIGMA 2023",
        cover: "Association activities/ENIGMA2023.JPG",
        href: "https://ncerc.ac.in/news/680",
      },
      {
        title: "RUBIX 2K20",
        cover: "Association activities/Enigma 2k20 1.png",
      },
    ],
  },
  {
    id: "fdp-webinar-seminar",
    title: "FDP, Webinar and Seminar",
    folder: "FDP and webinar",
    images: [
      "sem1.jpg",
      "sem2.jpg",
      "FDP1.png",
      "FDP2.png",
      "Webinar broc1.png",
      "Webinar broc2.png",
      "Webinar broc3.png",
      "webinar broc4.png",
    ],
  },
  {
    id: "industrial-visits",
    title: "Industrial Visits",
    folder: "Industrial visits",
    images: [
      "Industrial visit 2019 batch students visiting BSOFT Company (1).png",
      "Industrial visit 2020 batch students visiting UST Global (1).png",
      "Industrial visit 2021 batch students visiting Kaynes Technology (1).png",
      "Industrial visit12018 batch students visiting B-Pixel Company (1).png",
    ],
  },
  {
    id: "workshop",
    title: "Workshop",
    folder: "Workshop",
    images: [
      "Workshop broc.png",
      "Workshop1.png",
      "Workshop2.png",
      "Workshop3.png",
    ],
  },
];

function toSrc(path: string) {
  return encodeURI(`${IMAGE_BASE}/${path}`);
}

function getCount(activity: Activity) {
  return activity.events && activity.events.length > 0
    ? activity.events.length
    : activity.images.length;
}

function toTitleCase(value: string) {
  return value
    .toLowerCase()
    .replace(/\b([a-z])/g, (match) => match.toUpperCase());
}

function EventCard({
  event,
  onOpenPhotos,
}: {
  event: EventItem;
  onOpenPhotos: (event: EventItem) => void;
}) {
  const hasPhotos = Boolean(event.images && event.images.length > 0);
  const isInteractive = Boolean(event.href) || hasPhotos;

  const content = (
    <>
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F2EFE8]">
        <Image
          src={toSrc(event.cover)}
          alt={event.title}
          fill
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {isInteractive && (
          <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center bg-[#20235A] text-[#D2B87C] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {event.href ? <ArrowUpRight size={16} /> : <ZoomIn size={16} />}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5 text-left sm:p-6">
        <h3 className="flex items-start gap-2 font-serif text-lg leading-snug text-[#20235A] sm:text-xl">
          <span>{toTitleCase(event.title)}</span>
          {event.href && (
            <ExternalLink
              size={14}
              className="mt-1.5 shrink-0 text-[#8F7746]"
            />
          )}
        </h3>

        <div className="mt-auto pt-5">
          <div
            className={`h-px bg-[#D2B87C] transition-all duration-300 ${
              isInteractive ? "w-12 group-hover:w-full" : "w-12"
            }`}
          />
        </div>
      </div>
    </>
  );

  const cardClassName =
    "group flex h-full flex-col overflow-hidden border border-[#20235A]/10 bg-white transition-all duration-300";
  const interactiveClassName = "hover:-translate-y-1 hover:border-[#D2B87C]";

  if (event.href) {
    return (
      <a
        href={event.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${cardClassName} ${interactiveClassName}`}
      >
        {content}
      </a>
    );
  }

  if (hasPhotos) {
    return (
      <button
        type="button"
        onClick={() => onOpenPhotos(event)}
        className={`${cardClassName} ${interactiveClassName}`}
      >
        {content}
      </button>
    );
  }

  return <div className={cardClassName}>{content}</div>;
}

export default function ActivitiesGallery() {
  const [activeId, setActiveId] = useState<string>(activities[0].id);
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  const active = activities.find((a) => a.id === activeId) ?? activities[0];
  const hasEvents = Boolean(active.events && active.events.length > 0);
  const hasImages = active.images.length > 0;

  const isOpen = lightbox !== null;
  const total = lightbox ? lightbox.photos.length : 0;

  function handleSelect(id: string) {
    setActiveId(id);
    setLightbox(null);
    galleryRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function openPhotos(photos: Photo[], index: number) {
    setLightbox({ photos, index });
  }

  function openEventPhotos(event: EventItem) {
    const photos = (event.images ?? []).map((image, index) => ({
      src: toSrc(image),
      alt: `${event.title} - photo ${index + 1}`,
    }));
    if (photos.length > 0) {
      openPhotos(photos, 0);
    }
  }

  function showNext() {
    setLightbox((prev) =>
      prev
        ? { ...prev, index: (prev.index + 1) % prev.photos.length }
        : prev
    );
  }

  function showPrevious() {
    setLightbox((prev) =>
      prev
        ? {
            ...prev,
            index: (prev.index - 1 + prev.photos.length) % prev.photos.length,
          }
        : prev
    );
  }

  const folderPhotos: Photo[] = active.images.map((image, index) => ({
    src: toSrc(`${active.folder}/${image}`),
    alt: `${active.title} - photo ${index + 1}`,
  }));

  // Keyboard controls + scroll lock while the viewer is open
  useEffect(() => {
    if (!isOpen) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setLightbox(null);
      } else if (event.key === "ArrowRight") {
        setLightbox((prev) =>
          prev
            ? { ...prev, index: (prev.index + 1) % prev.photos.length }
            : prev
        );
      } else if (event.key === "ArrowLeft") {
        setLightbox((prev) =>
          prev
            ? {
                ...prev,
                index:
                  (prev.index - 1 + prev.photos.length) % prev.photos.length,
              }
            : prev
        );
      }
    }

    window.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const currentPhoto = lightbox ? lightbox.photos[lightbox.index] : null;
  const activeCount = getCount(active);

  return (
    <>
      {/* Activity Cards (act as tabs) */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {activities.map((activity, index) => {
          const isActive = activity.id === activeId;
          const count = getCount(activity);

          return (
            <button
              key={activity.id}
              type="button"
              onClick={() => handleSelect(activity.id)}
              aria-pressed={isActive}
              className={`group flex h-full flex-col border p-5 text-left transition-all duration-300 hover:-translate-y-1 sm:p-6 ${
                isActive
                  ? "border-[#20235A] bg-[#20235A] text-white"
                  : "border-[#20235A]/10 bg-white hover:border-[#D2B87C]"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div
                  className={`flex h-11 w-11 items-center justify-center transition-colors duration-300 ${
                    isActive
                      ? "bg-white/10 text-[#D2B87C]"
                      : "bg-[#F2EFE8] text-[#8F7746]"
                  }`}
                >
                  <ImageIcon size={21} strokeWidth={1.5} />
                </div>

                <span
                  className={`font-serif text-sm ${
                    isActive ? "text-[#D2B87C]" : "text-[#8F7746]"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3
                className={`mt-6 font-serif text-lg leading-snug sm:text-xl ${
                  isActive ? "text-white" : "text-[#20235A]"
                }`}
              >
                {activity.title}
              </h3>

              <p
                className={`mt-auto pt-4 text-[10px] font-semibold uppercase tracking-[0.18em] ${
                  isActive ? "text-[#D2B87C]" : "text-[#1E1917]/50"
                }`}
              >
                {count > 0
                  ? `${count} ${count === 1 ? "item" : "items"}`
                  : "Coming soon"}
              </p>
            </button>
          );
        })}
      </div>

      {/* Content for the selected activity */}
      <div ref={galleryRef} className="mt-16 scroll-mt-24">
        <div className="mb-10 flex flex-col gap-4 border-b border-[#20235A]/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-9 bg-[#8F7746]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8F7746] sm:text-xs">
                Gallery
              </p>
            </div>

            <h2 className="font-serif text-3xl font-normal leading-[1.12] tracking-[-0.02em] text-[#20235A] sm:text-4xl lg:text-5xl">
              {active.title}
            </h2>
          </div>

          {activeCount > 0 && (
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1E1917]/50">
              {activeCount} {activeCount === 1 ? "item" : "items"}
            </p>
          )}
        </div>

        {hasEvents && active.events ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {active.events.map((event) => (
              <EventCard
                key={event.title}
                event={event}
                onOpenPhotos={openEventPhotos}
              />
            ))}
          </div>
        ) : hasImages ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {folderPhotos.map((photo, index) => (
              <button
                key={photo.src}
                type="button"
                onClick={() => openPhotos(folderPhotos, index)}
                aria-label={`View ${active.title} photo ${index + 1} full size`}
                className="group/photo relative aspect-[4/3] w-full overflow-hidden border border-[#20235A]/10 bg-[#F2EFE8] transition-all duration-300 hover:-translate-y-1 hover:border-[#D2B87C]"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover/photo:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#151638]/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover/photo:opacity-100" />

                <div className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center bg-[#20235A] text-[#D2B87C] opacity-0 transition-opacity duration-300 group-hover/photo:opacity-100">
                  <ZoomIn size={16} />
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="border border-dashed border-[#20235A]/25 bg-white px-6 py-14 text-center">
            <p className="font-serif text-xl text-[#20235A]">
              Photos coming soon
            </p>
            <p className="mt-2 text-sm text-[#1E1917]/55">
              Photos for {active.title} will be added soon.
            </p>
          </div>
        )}
      </div>

      {/* Full-size viewer */}
      {lightbox && currentPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#151638]/95 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${active.title} photo viewer`}
          onClick={() => setLightbox(null)}
        >
          <div className="absolute left-4 top-4 border border-[#D2B87C]/40 bg-[#20235A] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C] sm:left-6 sm:top-6">
            {lightbox.index + 1} / {total}
          </div>

          <button
            type="button"
            onClick={() => setLightbox(null)}
            aria-label="Close viewer"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center border border-white/20 text-white transition-colors hover:border-[#D2B87C] hover:text-[#D2B87C] sm:right-6 sm:top-6"
          >
            <X size={22} />
          </button>

          {total > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showPrevious();
              }}
              aria-label="Previous photo"
              className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/20 bg-[#20235A]/60 text-white transition-colors hover:border-[#D2B87C] hover:text-[#D2B87C] sm:left-6"
            >
              <ChevronLeft size={26} />
            </button>
          )}

          <div
            className="relative h-[80vh] w-full max-w-5xl"
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

          {total > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              aria-label="Next photo"
              className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/20 bg-[#20235A]/60 text-white transition-colors hover:border-[#D2B87C] hover:text-[#D2B87C] sm:right-6"
            >
              <ChevronRight size={26} />
            </button>
          )}
        </div>
      )}
    </>
  );
}