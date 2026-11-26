'use client';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const initialsOf = (name?: string) =>
    (name ?? '?')
        .split(' ')
        .filter(Boolean)
        .slice(0, 2)
        .map((p) => p[0]!.toUpperCase())
        .join('') || '?';

/** Round profile picture, or the person's initials when there is none (or it cannot be loaded). */
export function UserAvatar({ name, src, className }: { name?: string; src?: string; className?: string }) {
    const [failedSrc, setFailedSrc] = useState<string | null>(null);
    const showImage = !!src && failedSrc !== src;

    return showImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
            src={src}
            alt=""
            referrerPolicy="no-referrer" // Google/Facebook avatar URLs can refuse requests that send a referrer
            onError={() => setFailedSrc(src!)}
            className={cn('shrink-0 rounded-full border border-rule object-cover', className)}
        />
    ) : (
        <span
            aria-hidden="true"
            className={cn('flex shrink-0 items-center justify-center rounded-full bg-blueprint font-semibold text-white', className)}
        >
            {initialsOf(name)}
        </span>
    );
}