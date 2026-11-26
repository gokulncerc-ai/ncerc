"use client";

import React, { useState } from "react";
import { FALLBACK_IMAGE, optimizeImage } from "@/lib/publicApi";

interface Props {
    src?: string | null;
    alt: string;
    /** Width requested from Cloudinary. Use about 2x the displayed size. */
    width?: number;
    eager?: boolean;
    className?: string;
}

/** Fills its parent (the parent must be `relative` with a size). Shows the fallback image when there is no image or it fails to load. */
export default function RemoteImage({ src, alt, width = 800, eager = false, className = "" }: Props) {
    const [failedSrc, setFailedSrc] = useState<string | null>(null);
    const useFallback = !src || failedSrc === src;

    return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
            src={useFallback ? FALLBACK_IMAGE : optimizeImage(src!, width)}
            alt={alt}
            loading={eager ? "eager" : "lazy"}
            decoding="async"
            onError={() => setFailedSrc(src ?? null)}
            className={`absolute inset-0 h-full w-full object-cover ${className}`}
        />
    );
}