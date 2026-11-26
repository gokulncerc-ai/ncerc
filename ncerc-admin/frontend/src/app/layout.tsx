import type { Metadata } from 'next';
import '@fontsource-variable/bricolage-grotesque';
import '@fontsource-variable/figtree';
import './globals.css';
import { Providers } from '@/context/Providers';

export const metadata: Metadata = {
  title: { default: 'NCERC Admin', template: '%s | NCERC Admin' },
  description: 'Add and update the news and events shown on the NCERC website.',
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
