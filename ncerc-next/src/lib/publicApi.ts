export const API_URL = (process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:5000/api').replace(/\/$/, '');

export const FALLBACK_IMAGE = '/images/empty_image.jpg';
export interface PublicEvent {
    id: string;
    title: string;
    slug: string;
    type: 'news' | 'event';
    summary: string;
    description?: string; // detail endpoint only
    coverImage: { url: string } | null;
    gallery?: { url: string }[]; // detail endpoint only
    venue: string | null;
    eventDate: string | null;
    endDate: string | null;
    registrationUrl: string | null;
    isFeatured: boolean;
    publishedAt: string | null;
}

export interface PublicPagination {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
}

async function request(path: string, signal?: AbortSignal) {
    const res = await fetch(`${API_URL}/public${path}`, { signal });
    const json = await res.json().catch(() => null);
    if (!res.ok || !json?.success) {
        const err = new Error(json?.message ?? 'Could not load content.') as Error & { status?: number };
        err.status = res.status;
        throw err;
    }
    return json;
}

/** One page of a list. path example: "/events?type=event&limit=50" */
export async function fetchPublicPage(path: string, signal?: AbortSignal) {
    const json = await request(path, signal);
    return { items: json.data as PublicEvent[], pagination: json.pagination as PublicPagination | undefined };
}

export async function fetchPublicList(path: string, signal?: AbortSignal): Promise<PublicEvent[]> {
    return (await fetchPublicPage(path, signal)).items;
}

/** Every published item, 50 per request (the API maximum). `query` example: "type=news". */
export async function fetchAllPublic(query = '', signal?: AbortSignal): Promise<PublicEvent[]> {
    const all: PublicEvent[] = [];
    let page = 1;
    let totalPages = 1;
    do {
        const q = query ? `${query}&` : '';
        const res = await fetchPublicPage(`/events?${q}limit=50&page=${page}`, signal);
        all.push(...res.items);
        totalPages = res.pagination?.totalPages ?? 1;
        page += 1;
    } while (page <= totalPages && page <= 20); // safety cap: 1000 items
    return all;
}

/** One published item by slug. Backend returns { data: { event } }. */
export async function fetchPublicEvent(slug: string, signal?: AbortSignal): Promise<PublicEvent> {
    const json = await request(`/events/${encodeURIComponent(slug)}`, signal);
    return json.data.event as PublicEvent;
}

const TZ = 'Asia/Kolkata';

/** The date to show for an item: event date for events, published date for news. */
export const displayDate = (e: Pick<PublicEvent, 'eventDate' | 'publishedAt'>) => e.eventDate ?? e.publishedAt;

/** "September 10, 2026" */
export const formatLongDate = (iso?: string | null) =>
    iso ? new Date(iso).toLocaleDateString('en-US', { day: '2-digit', month: 'long', year: 'numeric', timeZone: TZ }) : '';

/** "10" */
export const dayOf = (iso?: string | null) =>
    iso ? new Date(iso).toLocaleDateString('en-GB', { day: '2-digit', timeZone: TZ }) : '--';

/** "SEP 2026" */
export const monthYearOf = (iso?: string | null) =>
    iso ? new Date(iso).toLocaleDateString('en-US', { month: 'short', year: 'numeric', timeZone: TZ }).toUpperCase() : '';

const dayKey = (d: Date) => d.toLocaleDateString('en-CA', { timeZone: TZ }); // "2026-11-21"

/** True when the date falls on tomorrow (India time) or later. Today and past dates are false. */
export const isFromTomorrow = (iso?: string | null) => {
    if (!iso) return false;
    const tomorrow = dayKey(new Date(Date.now() + 24 * 60 * 60 * 1000));
    return dayKey(new Date(iso)) >= tomorrow;
};

/** Cover image, or the first gallery photo when there is no cover. */
export const imageOf = (e: Pick<PublicEvent, 'coverImage' | 'gallery'>): string | null =>
    e.coverImage?.url ?? e.gallery?.[0]?.url ?? null;

/** Asks Cloudinary for a smaller, optimized copy (smaller downloads, fewer credits used). Other URLs stay as they are. */
export const optimizeImage = (url: string, width = 800): string => {
    const marker = '/image/upload/';
    const i = url.indexOf(marker);
    if (!url.includes('res.cloudinary.com') || i === -1) return url;
    const rest = url.slice(i + marker.length);
    if (!/^v\d+\//.test(rest)) return url; // already has a transformation
    return `${url.slice(0, i + marker.length)}f_auto,q_auto,w_${width}/${rest}`;
};