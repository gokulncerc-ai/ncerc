"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
X,
ChevronLeft,
ChevronRight,
Expand,
Images,
} from "lucide-react";

const IMAGE_BASE =
"/images/dpt/computer-science-and-engineering/img/placement";

const images: string[] = ["VDSVD.jpeg", "placement-2.jpeg"];

function toSrc(image: string) {
return encodeURI(`${IMAGE_BASE}/${image}`);
}

export default function PlacementGallery() {
const [openIndex, setOpenIndex] = useState<number | null>(null);

const isOpen = openIndex !== null;
const total = images.length;

useEffect(() => {
if (!isOpen) return;
function onKeyDown(event: KeyboardEvent) {
  if (event.key === "Escape") {
    setOpenIndex(null);
  } else if (event.key === "ArrowRight") {
    setOpenIndex((index) =>
      index === null ? index : (index + 1) % total
    );
  } else if (event.key === "ArrowLeft") {
    setOpenIndex((index) =>
      index === null ? index : (index - 1 + total) % total
    );
  }
}

const previousOverflow = document.body.style.overflow;
document.body.style.overflow = "hidden";
window.addEventListener("keydown", onKeyDown);

return () => {
  window.removeEventListener("keydown", onKeyDown);
  document.body.style.overflow = previousOverflow;
};

}, [isOpen, total]);

return (
<>
{/* Gallery introduction */} <div className="mb-7 flex items-center justify-between gap-4"> <div className="flex items-center gap-3"> <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#D8D1C7] bg-white text-[#20235A]"> <Images size={19} strokeWidth={1.7} /> </span>

      <div>
        <p className="text-sm font-semibold text-[#20235A]">
          Department Highlights
        </p>
        <p className="mt-1 text-xs text-[#77716A]">
          Select an image to view it in full size
        </p>
      </div>
    </div>

    <span className="shrink-0 border border-[#D8D1C7] bg-white px-3 py-2 text-xs font-medium tracking-wide text-[#6A645D]">
      {String(total).padStart(2, "0")} PHOTOS
    </span>
  </div>

  {/* Image cards */}
  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
    {images.map((image, index) => (
      <button
        key={image}
        type="button"
        onClick={() => setOpenIndex(index)}
        aria-label={`View placement photo ${index + 1} full size`}
        className="group relative w-full overflow-hidden border border-[#D8D1C7] bg-white text-left shadow-[0_4px_18px_rgba(32,35,90,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#B7A16E] hover:shadow-[0_14px_35px_rgba(32,35,90,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#20235A] focus-visible:ring-offset-4"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-[#F2EFE8]">
          <Image
            src={toSrc(image)}
            alt={`Computer Science and Engineering placement photo ${index + 1}`}
            fill
            sizes="(min-width: 1024px) 560px, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#15183F]/75 via-transparent to-[#15183F]/10 opacity-80 transition-opacity duration-300 group-hover:opacity-100" />

          <span className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center border border-white/40 bg-[#20235A]/85 text-xs font-semibold text-white backdrop-blur-sm">
            {String(index + 1).padStart(2, "0")}
          </span>

          <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center border border-white/40 bg-[#20235A]/85 text-white transition-colors duration-300 group-hover:bg-[#D2B87C] group-hover:text-[#15183F]">
            <Expand size={17} strokeWidth={1.8} />
          </span>
        </div>

        <div className="flex items-center justify-between gap-3 px-5 py-4 sm:px-6">
          <div>
            <p className="font-display text-lg font-semibold text-[#20235A]">
              Placement Highlight
            </p>
            <p className="mt-1 text-xs text-[#77716A]">
              Computer Science and Engineering
            </p>
          </div>

          <span className="h-7 w-[3px] shrink-0 bg-[#D2B87C]" />
        </div>
      </button>
    ))}
  </div>

  {/* Full-screen image viewer */}
  {openIndex !== null && (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#10122F]/95 p-4 backdrop-blur-sm sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label="Placement photo viewer"
      onClick={() => setOpenIndex(null)}
    >
      {/* Viewer header */}
      <div className="absolute left-0 right-0 top-0 flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-8">
        <div className="flex items-center gap-3">
          <span className="h-8 w-1 bg-[#D2B87C]" />

          <div>
            <p className="text-sm font-semibold text-white">
              Placement Gallery
            </p>
            <p className="mt-1 text-xs text-white/55">
              Computer Science and Engineering
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setOpenIndex(null)}
          aria-label="Close viewer"
          className="flex h-10 w-10 items-center justify-center border border-white/20 text-white transition-colors hover:border-[#D2B87C] hover:bg-[#D2B87C] hover:text-[#15183F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D2B87C]"
        >
          <X size={21} />
        </button>
      </div>

      {/* Previous image */}
      {total > 1 && (
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            setOpenIndex((openIndex - 1 + total) % total);
          }}
          aria-label="Previous photo"
          className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/20 bg-white/5 text-white transition-colors hover:border-[#D2B87C] hover:bg-[#D2B87C] hover:text-[#15183F] sm:left-6 sm:h-12 sm:w-12"
        >
          <ChevronLeft size={25} />
        </button>
      )}

      {/* Main image */}
      <div
        className="relative mt-12 h-[65vh] w-full max-w-6xl sm:h-[72vh] lg:h-[76vh]"
        onClick={(event) => event.stopPropagation()}
      >
        <Image
          src={toSrc(images[openIndex])}
          alt={`Placement photo ${openIndex + 1}`}
          fill
          priority
          sizes="100vw"
          className="object-contain"
        />
      </div>

      {/* Next image */}
      {total > 1 && (
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            setOpenIndex((openIndex + 1) % total);
          }}
          aria-label="Next photo"
          className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/20 bg-white/5 text-white transition-colors hover:border-[#D2B87C] hover:bg-[#D2B87C] hover:text-[#15183F] sm:right-6 sm:h-12 sm:w-12"
        >
          <ChevronRight size={25} />
        </button>
      )}

      {/* Viewer footer */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between border-t border-white/10 px-5 py-4 sm:px-8">
        <p className="text-xs tracking-wide text-white/65">
          PHOTO{" "}
          <span className="font-semibold text-[#D2B87C]">
            {String(openIndex + 1).padStart(2, "0")}
          </span>{" "}
          / {String(total).padStart(2, "0")}
        </p>

        <div className="flex gap-1.5">
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              aria-label={`View photo ${index + 1}`}
              aria-current={openIndex === index ? "true" : undefined}
              onClick={(event) => {
                event.stopPropagation();
                setOpenIndex(index);
              }}
              className={`h-1.5 transition-all duration-300 ${
                openIndex === index
                  ? "w-8 bg-[#D2B87C]"
                  : "w-3 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )}
</>
);
}
