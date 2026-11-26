import Link from 'next/link';
import { buttonClasses } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center px-6 text-center">
      <p className="font-display text-7xl font-bold text-blueprint">404</p>
      <h1 className="mt-3 text-2xl font-semibold">That page does not exist</h1>
      <p className="mt-2 text-ink-soft">The link may be old, or typed wrongly.</p>
      <Link href="/" className={buttonClasses('primary', 'md', 'mt-6')}>
        Back to the welcome page
      </Link>
    </div>
  );
}
