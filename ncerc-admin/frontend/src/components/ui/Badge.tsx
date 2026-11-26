import { cn } from '@/lib/utils';

export type Tone = 'neutral' | 'blue' | 'amber' | 'green' | 'red';
const tones: Record<Tone, string> = {
  neutral: 'bg-paper text-ink-soft ring-rule',
  blue: 'bg-blueprint-soft text-blueprint ring-blueprint/20',
  amber: 'bg-marker-soft text-[#7a5600] ring-marker/50',
  green: 'bg-ok-soft text-ok ring-ok/20',
  red: 'bg-danger-soft text-danger ring-danger/20',
};

export function Badge({ tone = 'neutral', children, className }: { tone?: Tone; children: React.ReactNode; className?: string }) {
  return <span className={cn('inline-flex items-center rounded px-2 py-0.5 text-xs font-semibold ring-1 ring-inset', tones[tone], className)}>{children}</span>;
}
