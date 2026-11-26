import clsx, { type ClassValue } from 'clsx';

export const cn = (...inputs: ClassValue[]) => clsx(inputs);

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const formatDate = (iso?: string | null, withTime = false): string => {
    if (!iso) return '';
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return '';
    const date = `${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
    return withTime ? `${date}, ${d.toLocaleTimeString('en-IN', { hour: 'numeric', minute: '2-digit' })}` : date;
};

/** For the tear-off date block: { day: "12", month: "Nov" } */
export const dateParts = (iso?: string | null): { day: string; month: string; year: string } | null => {
    if (!iso) return null;
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return null;
    return { day: String(d.getDate()), month: MONTHS[d.getMonth()], year: String(d.getFullYear()) };
};

const pad = (n: number) => String(n).padStart(2, '0');

/** ISO -> value for <input type="datetime-local"> in the user's own time zone. */
export const toLocalInput = (iso?: string | null): string => {
    if (!iso) return '';
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return '';
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
};

export const fromLocalInput = (value: string): string | null => {
    if (!value) return null;
    const d = new Date(value);
    return Number.isNaN(d.getTime()) ? null : d.toISOString();
};

/** ISO -> value for <input type="date"> */
export const toDateInput = (iso?: string | null): string => (iso ? iso.slice(0, 10) : '');

export const initials = (name: string): string =>
    name
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 2)
        .map((p) => p[0]?.toUpperCase())
        .join('');

/** Only allow in-site redirects after login (blocks open-redirect links like ?next=//evil.com). */
export const safeNext = (value: string | null | undefined, fallback = '/dashboard'): string =>
    value && value.startsWith('/') && !value.startsWith('//') ? value : fallback;

export const roleLabel = (role: string): string => (role === 'super_admin' ? 'Super admin' : 'Admin');