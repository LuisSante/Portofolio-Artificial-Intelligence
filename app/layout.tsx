import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  metadataBase: new URL('https://briefcase-eight.vercel.app/'),
  title: 'Portfolio Luis Sante',
  description: 'Welcome to my portfolio!',
  applicationName: 'Luis Sante',
  keywords: ['Luis Sante', 'portfolio', 'personal', 'website', 'developer', 'designer', 'engineer', 'software', 'engineer'],
  openGraph: {
    siteName: 'Luis Sante',
    title: 'Luis Sante',
    description: 'Welcome to my portfolio!',
    type: 'website',
    images: ['/']
  },
  twitter: {
    card: 'summary_large_image',
    site: '@LuisSante',
    title: 'Luis Sante',
    description: 'Welcome to my personal portfolio!',
    images: ['/']
  },
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '192x192',
      url: '/favicon/'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '512x512',
      url: '/favicon/'
    },
    {
      rel: 'apple-touch-icon',
      url: '/favicon/'
    },
    {
      rel: 'icon',
      type: 'image/x-icon',
      url: '/favicon/favicon.ico'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon/'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon/'
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}
