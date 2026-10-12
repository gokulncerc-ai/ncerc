"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type TourImage = {
  src: string;
  caption: string;
};
const tourImages: TourImage[] = [
  {
    src: `https://ncerc.ac.in/images/dpt/mba/iv-img/IV-NT-batch-2023-2025_img3.png`,
    caption: "Industrial Visit & National Tour (Batch:2024-2026)",
  },
  {
    src: `https://ncerc.ac.in/images/dpt/mba/iv-img/IV-NT-batch-2023-2025_img4.png`,
    caption: "Industrial Visit & National Tour (Batch:2024-2026)",
  },
  {
    src: `https://ncerc.ac.in/images/dpt/mba/iv-img/IV-NT-batch-2023-2025_img1.png`,
    caption: "Industrial Visit & National Tour (Batch:2023-2025)",
  },
  {
    src: `https://ncerc.ac.in/images/dpt/mba/iv-img/IV-NT-batch-2023-2025_img2.png`,
    caption: "Industrial Visit & National Tour (Batch:2023-2025)",
  },
  {
    src: `https://ncerc.ac.in/images/dpt/mba/iv-img/IV-NT-batch-2022-2024_img1.png`,
    caption: "Industrial Visit & National Tour (Batch:2022-2024)",
  },
  {
    src: `https://ncerc.ac.in/images/dpt/mba/iv-img/IV-NT-batch-2022-2024_img2.png`,
    caption: "Industrial Visit & National Tour (Batch:2022-2024)",
  },
];

export default function TourGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);

  const showPrev = useCallback(() => {
    setActiveIndex((current) =>
      current === null
        ? null
        : (current - 1 + tourImages.length) % tourImages.length
    );
  }, []);

  const showNext = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? null : (current + 1) % tourImages.length
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

  const activeItem = activeIndex === null ? null : tourImages[activeIndex];

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tourImages.map((item, index) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`View ${item.caption}`}
            className="group block border border-slate-200 bg-white text-left shadow-sm transition-shadow hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
          >
            <span className="block border-b-4 border-gold-500 bg-navy-950 px-4 py-3 text-sm font-semibold text-white">
              {item.caption}
            </span>
            <span className="relative block aspect-[4/3] overflow-hidden bg-slate-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.src}
                alt={item.caption}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </span>
          </button>
        ))}
      </div>

      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.caption}
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
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={activeItem.src}
              alt={activeItem.caption}
              className="max-h-[80vh] w-auto max-w-full object-contain"
            />
            <figcaption className="mt-3 text-center text-sm text-slate-300">
              {activeItem.caption}
              <span className="ml-3 text-gold-400">
                {(activeIndex ?? 0) + 1} / {tourImages.length}
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