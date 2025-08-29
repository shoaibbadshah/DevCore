import type { Metadata } from 'next';
import { Work_Sans, Teko } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';

const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans',
});

const teko = Teko({
  subsets: ['latin'],
  variable: '--font-teko',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'DevCore',
  description: 'Invest in Dubai, Invest in the Future',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('min-h-screen bg-background font-sans antialiased', workSans.variable, teko.variable)}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
