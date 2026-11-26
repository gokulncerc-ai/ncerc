"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type Facility = {
  src: string;
  label: string;
};
import Image from "next/image";
const facilities: Facility[] = [
  { src: `https://ncerc.ac.in/images/dpt/mba/facilities/board-room.png`, label: "Board Room" },
  { src: `https://ncerc.ac.in/images/dpt/mba/facilities/canteen2.png`, label: "Canteen" },
  { src: `https://ncerc.ac.in/images/dpt/mba/facilities/g-hostel-2.jpeg`, label: "Girl's Hostel" },
  { src: `https://ncerc.ac.in/images/dpt/mba/facilities/gym.jpeg`, label: "Gym" },
  { src: `https://ncerc.ac.in/images/dpt/mba/facilities/indoor.jpeg`, label: "Indoor Games" },
  { src: `https://ncerc.ac.in/images/dpt/mba/facilities/outdoor.png`, label: "Outdoor Games" },
  { src: `https://ncerc.ac.in/images/dpt/mba/facilities/management.png`, label: "Management Games" },
  { src: `https://ncerc.ac.in/images/dpt/mba/facilities/placement-cell.jpeg`, label: "Placement Cell" },
  { src: `https://ncerc.ac.in/images/dpt/mba/facilities/Principal-room-1.jpeg`, label: "Principal Room" },
  { src: `https://ncerc.ac.in/images/dpt/mba/facilities/pre_sports_room.jpeg`, label: "Sports Room" },
  { src: `https://ncerc.ac.in/images/dpt/mba/facilities/pre_yoga.jpeg`, label: "Yoga Room" },
  { src: `https://ncerc.ac.in/images/dpt/mba/facilities/TRANSPORT-(2).jpeg`, label: "Transport" },
];

export default function FacilitiesGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);

  const showPrev = useCallback(() => {
    setActiveIndex((current) =>
      current === null
        ? null
        : (current - 1 + facilities.length) % facilities.length
    );
  }, []);

  const showNext = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? null : (current + 1) % facilities.length
    );
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, close, showPrev, showNext]);

  const activeItem = activeIndex === null ? null : facilities[activeIndex];

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {facilities.map((item, index) => (
          <button
            key={item.label}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`View ${item.label}`}
            className="group relative block aspect-[16/9] overflow-hidden border border-slate-200 bg-slate-100 shadow-sm transition-shadow hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
          >
            <Image
              src={encodeURI(item.src)}
              alt={item.label}
              fill
              sizes="(min-width: 1024px) 330px, 100vw"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-x-0 bottom-0 border-t-4 border-gold-500 bg-navy-950/85 px-4 py-3 text-left font-display text-base font-bold uppercase text-white">
              {item.label}
            </span>
          </button>
        ))}
      </div>

      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.label}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-950/95 p-4 sm:p-8"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center bg-white/10 text-white transition-colors hover:bg-gold-500 hover:text-navy-950"
          >
            <X size={22} />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrev();
            }}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center bg-white/10 text-white transition-colors hover:bg-gold-500 hover:text-navy-950 sm:left-6"
          >
            <ChevronLeft size={26} />
          </button>

          <figure
            className="flex max-h-full max-w-5xl flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={encodeURI(activeItem.src)}
              alt={activeItem.label}
              fill
              sizes="(min-width: 1024px) 330px, 100vw"
              className="max-h-[80vh] w-auto max-w-full object-contain"
            />
            <figcaption className="mt-3 text-center text-sm text-slate-300">
              {activeItem.label}
              <span className="ml-3 text-gold-400">
                {(activeIndex ?? 0) + 1} / {facilities.length}
              </span>
            </figcaption>
          </figure>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="Next image"
            className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center bg-white/10 text-white transition-colors hover:bg-gold-500 hover:text-navy-950 sm:right-6"
          >
            <ChevronRight size={26} />
          </button>
        </div>
      )}
    </>
  );
}