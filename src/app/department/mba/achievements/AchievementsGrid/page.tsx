"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import Image from "next/image";
export type Achievement = {
  number: string;
  title?: string;
  text: string;
  image: string;
  alt: string;
};

type AchievementsGridProps = {
  items: Achievement[];
};

export default function AchievementsGrid({ items }: AchievementsGridProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);

  const showPrev = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? null : (current - 1 + items.length) % items.length
    );
  }, [items.length]);

  const showNext = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? null : (current + 1) % items.length
    );
  }, [items.length]);

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

  const activeItem = activeIndex === null ? null : items[activeIndex];

  return (
    <>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <article
            key={item.number}
            className="group flex flex-col border border-[#20235A]/10 bg-white transition duration-300 hover:-translate-y-1 hover:border-[#20235A]/20"
          >
            <button
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`View larger image: ${item.alt}`}
              className="relative block aspect-[4/3] w-full overflow-hidden border-b border-[#20235A]/10 bg-[#F2EFE8] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D2B87C]"
            >
              <Image
                src={item.image}
                alt={item.alt}
                loading="lazy"
                fill
                sizes="(min-width: 1024px) 330px, 100vw"
                className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
              />

              <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center bg-[#20235A]/85 text-[#D2B87C] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <ZoomIn className="h-4 w-4" />
              </span>
            </button>

            <div className="flex flex-1 flex-col p-7 sm:p-8">
              <span className="font-serif text-sm text-[#8F7746]">
                {item.number}
              </span>

              {item.title && (
                <h3 className="mt-5 font-serif text-[25px] leading-tight text-[#20235A]">
                  {item.title}
                </h3>
              )}

              <p
                className={`text-sm leading-7 text-[#1E1917]/60 ${
                  item.title ? "mt-4" : "mt-5"
                }`}
              >
                {item.text}
              </p>

              <div className="mt-auto pt-7">
                <div className="h-px w-8 bg-[#D2B87C] transition-all duration-300 group-hover:w-14" />
              </div>
            </div>
          </article>
        ))}
      </div>

      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.alt}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#20235A]/95 p-4 sm:p-8"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center border border-white/20 text-white transition-colors hover:bg-[#D2B87C] hover:text-[#20235A]"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrev();
            }}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/20 text-white transition-colors hover:bg-[#D2B87C] hover:text-[#20235A] sm:left-6"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <figure
            className="flex max-h-full max-w-5xl flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={activeItem.image}
              alt={activeItem.alt}
              fill
              sizes="(min-width: 1024px) 330px, 100vw"
              className="max-h-[80vh] w-auto max-w-full object-contain"
            />
            <figcaption className="mt-4 max-w-2xl text-center text-sm leading-6 text-white/65">
              {activeItem.text}
              <span className="ml-3 whitespace-nowrap font-serif text-[#D2B87C]">
                {(activeIndex ?? 0) + 1} / {items.length}
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
            className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/20 text-white transition-colors hover:bg-[#D2B87C] hover:text-[#20235A] sm:right-6"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </>
  );
}