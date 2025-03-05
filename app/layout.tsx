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
  other: {
    'wechat-enable-sharing': 'true',
    'wechat-image': 'https://waterlilyzhou.xyz/images/og-square.png',
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
        <meta property="wx:title" content="waterlily-zhou" />
        <meta property="wx:description" content="个人网站" />
        <meta property="wx:image" content="https://waterlilyzhou.xyz/images/og-square.png" />
        <meta property="wx:enable_sharing" content="true" />
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
