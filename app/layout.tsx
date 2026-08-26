import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: "Angie Sun's Portfolio | Industrial Designer",
  description: 'Industrial design, strategy, research, and UI/UX work by Angie Sun.',
  openGraph: {
    title: "Angie Sun's Portfolio | Industrial Designer",
    description: 'Industrial design, strategy, research, and UI/UX work by Angie Sun.',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Angie Sun's Portfolio | Industrial Designer",
    description: 'Industrial design, strategy, research, and UI/UX work by Angie Sun.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
