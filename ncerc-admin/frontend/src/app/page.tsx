import { Brand } from '@/components/layout/Brand';
import { WelcomeActions } from '@/components/layout/WelcomeActions';
import { DateBlock } from '@/components/events/DateBlock';

/** Sample notices drawn on the board. Purely decorative, not real data. */
const notices = [
  { iso: '2026-11-14T10:00:00', title: 'Campus placement drive', meta: 'Seminar hall, 10:00 am', tone: 'event' },
  { iso: null, title: 'Library timings during the exam fortnight', meta: 'News', tone: 'news' },
  { iso: '2026-12-02T09:30:00', title: 'Annual Day rehearsal', meta: 'Open ground, 9:30 am', tone: 'event' },
] as const;

export default function WelcomePage() {
  return (
    <div className="paper-grid min-h-dvh">
      <div className="mx-auto flex min-h-dvh max-w-6xl flex-col px-6 py-6 sm:px-10">
        <header className="flex items-center justify-between">
          <Brand />
        </header>

        <main className="grid flex-1 items-center gap-14 py-14 lg:grid-cols-[1.05fr_1fr]">
          <div className="max-w-xl">
            <h1 className="text-5xl font-semibold leading-[1.04] sm:text-6xl">Welcome to the NCERC admin panel.</h1>
            <p className="mt-6 text-xl leading-relaxed text-ink-soft">
              This is where staff add, edit and publish the news and events shown on the college website. Super admins create the staff accounts.
            </p>
            <div className="mt-9">
              <WelcomeActions />
            </div>
          </div>

          <div className="board-in blueprint relative rounded-xl border border-blueprint-deep p-6 shadow-[0_24px_60px_-28px_rgba(12,33,96,0.7)] sm:p-8" aria-hidden="true">
            <p className="mb-5 font-display text-lg font-semibold text-white/90">On the website now</p>
            <ul className="space-y-3">
              {notices.map((n, i) => (
                <li key={n.title} className="flex items-center gap-4 rounded-lg bg-sheet p-3.5 shadow-sm" style={{ marginLeft: `${i * 1.25}rem` }}>
                  <DateBlock iso={n.iso} />
                  <div className="min-w-0">
                    <p className="truncate font-semibold text-ink">{n.title}</p>
                    <p className="text-sm text-ink-soft">{n.meta}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}
