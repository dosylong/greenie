import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { SITE_NAME, SITE_DESCRIPTION } from '@/constants/site';
// import ThemeProvider from your UI library or implement a placeholder

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  metadataBase: new URL('https://greenie.com'),
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: 'https://greenie.com',
    siteName: SITE_NAME,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.variable} antialiased bg-gray-50 min-h-screen`}>
        {/* ThemeProvider can be added here if using a UI library */}
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
