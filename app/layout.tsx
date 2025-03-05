import type { Metadata } from "next";
import "./globals.css";
/* import Navigation from "./components/Navigation"; */

export const metadata: Metadata = {
  title: "waterlily-zhou",
  metadataBase: new URL('https://waterlilyzhou.xyz'),
  openGraph: {
    title: 'waterlily-zhou',
    url: 'https://waterkilyzhou.xyz',
    siteName: 'waterlily-zhou',
    images: [
      {
        url: '/images/og-square.png',  // 800x800 for WeChat
        width: 800,
        height: 800,
        alt: 'Waterlily Zhou'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Waterlily Zhou',
    creator: '@waterlily-zhou',
    images: [
      {
        url: '/images/og-twitter.png',  // 1200x600 for Twitter
        width: 1200,
        height: 600,
        alt: 'Waterlily Zhou'
      }
    ],
  },
  icons: {
    icon: [
      {
        url: '/moonOverVenus.ico',
        sizes: 'any',
        type: 'image/x-icon'
      }
    ]
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
          href="/fonts/NeueMontreal/NeueMontreal-Light.otf"
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
          rel="preload"
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
