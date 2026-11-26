import { Brand } from '@/components/layout/Brand';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid min-h-dvh lg:grid-cols-[5fr_6fr]">
      <aside className="blueprint relative hidden flex-col justify-between overflow-hidden p-10 text-white lg:flex">
        <Brand tone="light" />
        <div className="max-w-sm">
          <h2 className="text-4xl font-semibold leading-[1.1]">Keep the college website current.</h2>
          <p className="mt-4 text-lg text-white/75">Add news, announce events, and publish them when they are ready.</p>
        </div>
        <svg className="pointer-events-none absolute -right-10 bottom-16 w-[26rem] text-white/25" viewBox="0 0 420 220" fill="none" aria-hidden="true">
          <rect x="30" y="30" width="360" height="150" rx="6" stroke="currentColor" strokeWidth="1.5" />
          <path d="M30 205h360M30 195v20M390 195v20" stroke="currentColor" strokeWidth="1.5" />
          <text x="210" y="219" textAnchor="middle" fill="currentColor" fontSize="12">360</text>
          <path d="M60 60h150M60 80h110M60 100h130" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <rect x="260" y="55" width="100" height="95" rx="4" stroke="currentColor" strokeWidth="1.5" />
          <path d="M260 80h100" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </aside>
      <main className="flex flex-col px-6 py-8 sm:px-12">
        <div className="lg:hidden">
          <Brand />
        </div>
        <div className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center py-10">{children}</div>
      </main>
    </div>
  );
}
