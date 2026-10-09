"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";

type ShowcaseItem = {
  title: string;
  image: string;
  alt: string;
};

// Images must be placed in /public/images/dpt/mba/associations/
const IMAGE_PATH = "/images/dpt/mba/img/associations";

const associations: ShowcaseItem[] = [
  {
    title: "NIPM",
    image: `https://ncerc.ac.in/images/dpt/mba/associations/NIPM.jpeg`,
    alt: "NIPM association",
  },
  {
    title: "TMA",
    image: `https://ncerc.ac.in/images/dpt/mba/associations/TMA.jpeg`,
    alt: "TMA association",
  },
];

const mous: ShowcaseItem[] = [
  {
    title: "MOU of NSM with Universitas Muhammadiyah Purworejo, Indonesia",
    image: `https://ncerc.ac.in/images/dpt/mba/associations/MOU-NSM-with-Universitas-Muhammadiyah-Purworejo-Indonesia.png`,
    alt: "MOU of NSM with Universitas Muhammadiyah Purworejo, Indonesia",
  },
  {
    title: "MOU signing with KVVES Kulapully Unit",
    image: `https://ncerc.ac.in/images/dpt/mba/associations/MOU-signing-with-KVVES-Kulapully-Unit.png`,
    alt: "MOU signing with KVVES Kulapully Unit",
  },
  {
    title: "MOU signing with Peringottukurissi panchayat",
    image: `https://ncerc.ac.in/images/dpt/mba/associations/MOU-signing-with-Peringottukurissi-panchayat.png`,
    alt: "MOU signing with Peringottukurissi panchayat",
  },
];

const allItems: ShowcaseItem[] = [...associations, ...mous];

export default function AssociationsShowcase() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);

  const showPrev = useCallback(() => {
    setActiveIndex((current) =>
      current === null
        ? null
        : (current - 1 + allItems.length) % allItems.length
    );
  }, []);

  const showNext = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? null : (current + 1) % allItems.length
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

  const activeItem = activeIndex === null ? null : allItems[activeIndex];

  return (
    <>
      {/* =========================================================
          ASSOCIATIONS
      ========================================================== */}
      <section id="associations" className="bg-[#F2EFE8]">
        <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
          <div className="mb-14 max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#8F7746]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                Associations
              </span>
            </div>

            <h2 className="font-serif text-[40px] leading-[1.06] tracking-[-0.025em] text-[#20235A] sm:text-[52px]">
              Professional bodies we are associated with.
            </h2>

            <p className="mt-6 text-[16px] leading-8 text-[#1E1917]/60">
              Select any image to view it in full size.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:max-w-4xl">
            {associations.map((item, index) => (
              <article
                key={item.title}
                className="group border border-[#20235A]/10 bg-white transition duration-300 hover:-translate-y-1 hover:border-[#20235A]/20"
              >
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`View larger image: ${item.alt}`}
                  className="relative block aspect-[4/3] w-full overflow-hidden border-b border-[#20235A]/10 bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D2B87C]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    className="h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-[1.03]"
                  />

                  <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center bg-[#20235A]/85 text-[#D2B87C] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <ZoomIn className="h-4 w-4" />
                  </span>
                </button>

                <div className="p-7 sm:p-8">
                  <h3 className="font-serif text-[25px] leading-tight text-[#20235A]">
                    {item.title}
                  </h3>

                  <div className="mt-6 h-px w-8 bg-[#D2B87C] transition-all duration-300 group-hover:w-14" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          MOUS
      ========================================================== */}
      <section id="mous">
        <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
          <div className="mb-14 max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#8F7746]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                Memoranda of Understanding
              </span>
            </div>

            <h2 className="font-serif text-[40px] leading-[1.06] tracking-[-0.025em] text-[#20235A] sm:text-[52px]">
              Partnerships that extend learning beyond the classroom.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {mous.map((item, index) => (
              <article
                key={item.title}
                className="group flex flex-col border border-[#20235A]/10 bg-white transition duration-300 hover:-translate-y-1 hover:border-[#20235A]/20"
              >
                <button
                  type="button"
                  onClick={() => setActiveIndex(associations.length + index)}
                  aria-label={`View larger image: ${item.alt}`}
                  className="relative block aspect-[4/3] w-full overflow-hidden border-b border-[#20235A]/10 bg-[#F2EFE8] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D2B87C]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                  />

                  <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center bg-[#20235A]/85 text-[#D2B87C] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <ZoomIn className="h-4 w-4" />
                  </span>
                </button>

                <div className="flex flex-1 flex-col p-7 sm:p-8">
                  <span className="font-serif text-sm text-[#8F7746]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-5 font-serif text-[22px] leading-snug text-[#20235A]">
                    {item.title}
                  </h3>

                  <div className="mt-auto pt-7">
                    <div className="h-px w-8 bg-[#D2B87C] transition-all duration-300 group-hover:w-14" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          LIGHTBOX
      ========================================================== */}
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
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={activeItem.image}
              alt={activeItem.alt}
              className="max-h-[80vh] w-auto max-w-full object-contain"
            />
            <figcaption className="mt-4 max-w-2xl text-center text-sm leading-6 text-white/65">
              {activeItem.title}
              <span className="ml-3 whitespace-nowrap font-serif text-[#D2B87C]">
                {(activeIndex ?? 0) + 1} / {allItems.length}
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