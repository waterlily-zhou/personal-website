import type { Metadata } from "next";
import "./globals.css";
/* import Navigation from "./components/Navigation"; */

export const metadata: Metadata = {
  title: "waterlily-zhou",
  metadataBase: new URL('https://waterlilyzhou.xyz'),
  openGraph: {
    title: 'waterlily-zhou',
    url: 'https://waterlilyzhou.xyz',
    siteName: 'waterlily-zhou',
    images: [
      {
        url: '/images/og-square.png',
        width: 800,
        height: 800,
        alt: 'waterlily-zhou'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'waterlily-zhou',
    creator: '@waterlily-zhou',
    images: ['/images/og-square.png'],
  },
  icons: {
    icon: [
      {
        url: '/images/og-square.png',  // Use OG image as icon for better share previews
        sizes: 'any',
        type: 'image/png'
      },
      {
        url: '/moonOverVenus.ico',  // Keep the original favicon as fallback
        sizes: 'any',
        type: 'image/x-icon'
      }
    ],
    apple: [
      {
        url: '/images/og-square.png',  // Use OG image for Apple devices
        sizes: '800x800',
        type: 'image/png'
      }
    ]
  },
  appleWebApp: {
    capable: true,
    title: 'waterlily-zhou',
    statusBarStyle: 'black-translucent'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link
          rel="preload"
          href="/fonts/NeueMontreal/NeueMontreal-Regular.otf"
          as="font"
          type="font/otf"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/NeueMontreal/NeueMontreal-Bold.otf"
          as="font"
          type="font/otf"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Jedira/jedira-regular.ttf"
          as="font"
          type="font/ttf"
          crossOrigin=""
        />
        <link
          rel="prefetch"
          href="/fonts/Huaying/HuayingMinchoClassic.ttf"
          as="font"
          type="font/ttf"
          crossOrigin=""
        />
      </head>
      <body className="bg-black text-white min-h-screen antialiased">
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
