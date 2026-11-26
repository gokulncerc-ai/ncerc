'use client';
import { useEffect, useState } from 'react';
import { fetchAllPublic, fetchPublicEvent, fetchPublicList, type PublicEvent } from './publicApi';

const LIST_ERROR = 'We could not load this right now. Please try again later.';

/** One request. path example: "/events?type=event&when=upcoming&limit=50" */
export function usePublicList(path: string) {
    const [items, setItems] = useState<PublicEvent[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const ctrl = new AbortController();
        setLoading(true);
        setError('');
        fetchPublicList(path, ctrl.signal)
            .then(setItems)
            .catch((e: Error) => {
                if (e.name !== 'AbortError') setError(LIST_ERROR);
            })
            .finally(() => {
                if (!ctrl.signal.aborted) setLoading(false);
            });
        return () => ctrl.abort();
    }, [path]);

    return { items, loading, error };
}

/** Loads EVERY published item (all pages). query example: "" or "type=news". */
export function usePublicAll(query = '') {
    const [items, setItems] = useState<PublicEvent[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const ctrl = new AbortController();
        setLoading(true);
        setError('');
        fetchAllPublic(query, ctrl.signal)
            .then(setItems)
            .catch((e: Error) => {
                if (e.name !== 'AbortError') setError(LIST_ERROR);
            })
            .finally(() => {
                if (!ctrl.signal.aborted) setLoading(false);
            });
        return () => ctrl.abort();
    }, [query]);

    return { items, loading, error };
}

/** One published item by slug. `notFound` is true when the API answers 404. */
export function usePublicEvent(slug: string) {
    const [item, setItem] = useState<PublicEvent | null>(null);
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const ctrl = new AbortController();
        setLoading(true);
        setNotFound(false);
        setError('');
        fetchPublicEvent(slug, ctrl.signal)
            .then(setItem)
            .catch((e: Error & { status?: number }) => {
                if (e.name === 'AbortError') return;
                if (e.status === 404) setNotFound(true);
                else setError(LIST_ERROR);
            })
            .finally(() => {
                if (!ctrl.signal.aborted) setLoading(false);
            });
        return () => ctrl.abort();
    }, [slug]);

    return { item, loading, notFound, error };
}