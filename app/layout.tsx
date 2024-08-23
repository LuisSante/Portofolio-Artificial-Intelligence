import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        {/* {children} */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
