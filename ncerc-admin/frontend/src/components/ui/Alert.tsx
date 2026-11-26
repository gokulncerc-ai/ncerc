import { CheckCircle2, CircleAlert, Info } from 'lucide-react';
import { cn } from '@/lib/utils';

const styles = {
  error: 'border-danger/30 bg-danger-soft text-danger',
  success: 'border-ok/30 bg-ok-soft text-ok',
  info: 'border-blueprint/20 bg-blueprint-soft text-blueprint',
  warning: 'border-marker/60 bg-marker-soft text-[#7a5600]',
};

export function Alert({ tone = 'info', title, children, className }: { tone?: keyof typeof styles; title?: string; children?: React.ReactNode; className?: string }) {
  const Icon = tone === 'success' ? CheckCircle2 : tone === 'info' ? Info : CircleAlert;
  return (
    <div role={tone === 'error' ? 'alert' : 'status'} className={cn('flex gap-3 rounded-md border px-4 py-3 text-sm', styles[tone], className)}>
      <Icon className="mt-0.5 size-4 shrink-0" />
      <div className="space-y-0.5">
        {title && <p className="font-semibold">{title}</p>}
        {children && <div className="leading-relaxed">{children}</div>}
      </div>
    </div>
  );
}
