'use client';
import { useCallback, useEffect, useRef } from 'react';

/**
 * "The newest request wins" for lists that reload when a filter, a page or a search box changes.
 *
 *   const begin = useLatestRequest();
 *   const load = useCallback(async () => {
 *     const isLatest = begin();                 // starts a new request, which makes older ones stale
 *     const data = await api();
 *     if (!isLatest()) return;                  // a newer request started (or the page closed): ignore this answer
 *     setItems(data);
 *   }, [begin]);
 *
 * Why not AbortController? Cancelling a fetch makes the browser report an AbortError, which browser
 * extensions and the Next.js dev overlay show as a console error on every filter change (and twice on
 * every page load in development, because React StrictMode runs effects twice). Ignoring the stale
 * answer gives the same result with nothing to report.
 */
export function useLatestRequest(): () => () => boolean {
    const current = useRef(0);

    // leaving the page makes every request still in flight stale
    useEffect(() => {
        const ref = current;
        return () => {
            ref.current += 1;
        };
    }, []);

    return useCallback(() => {
        const id = ++current.current;
        return () => id === current.current;
    }, []);
}