'use client';
import { useState } from 'react';
import { cn } from '@/lib/utils';

/**
 * Cloudinary can resize on the fly, so lists download a small thumbnail instead of the full photo.
 * Any other URL is used as it is.
 */
const CLOUDINARY_MARKER = '/image/upload/';
const thumbUrl = (url: string): string =>
    url.includes('res.cloudinary.com') && url.includes(CLOUDINARY_MARKER)
        ? url.replace(CLOUDINARY_MARKER, `${CLOUDINARY_MARKER}c_fill,w_192,h_128,q_auto,f_auto/`)
        : url;

const sizes = {
    /** dashboard rows */
    sm: 'h-12 w-[4.5rem]',
    /** events list */
    md: 'h-16 w-24',
} as const;

interface Props {
    url?: string | null;
    title: string;
    size?: keyof typeof sizes;
    className?: string;
}

/** Small cover image box. Renders nothing when there is no image, or when the image cannot be loaded. */
export function CoverThumb({ url, title, size = 'md', className }: Props) {
    const [failedUrl, setFailedUrl] = useState<string | null>(null);

    if (!url || failedUrl === url) return null;

    return (
        <div className={cn('shrink-0 overflow-hidden rounded-md border border-rule bg-blueprint-soft', sizes[size], className)}>
            {/* plain <img> so no remote image domain has to be configured in next.config */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src={thumbUrl(url)}
                alt={`Cover image of ${title}`}
                loading="lazy"
                decoding="async"
                onError={() => setFailedUrl(url)}
                className="h-full w-full object-cover"
            />
        </div>
    );
}