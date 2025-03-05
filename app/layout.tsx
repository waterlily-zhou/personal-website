import type { Metadata } from "next";
import "./globals.css";
/* import Navigation from "./components/Navigation"; */

export const metadata: Metadata = {
  title: "waterily-zhou",
  description: "Full-stack developer focused on building user-friendly and scalable Web3 applications",
  metadataBase: new URL('https://waterilyzhou.xyz'),
  openGraph: {
    title: 'Waterily Zhou | Full-stack Developer',
    description: 'Full-stack developer focused on building user-friendly and scalable Web3 applications',
    url: 'https://waterilyzhou.xyz',
    siteName: 'waterily-zhou',
    images: [
      {
        url: '/api/og',
        width: 1200,
        height: 630,
        alt: 'Waterily Zhou'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Waterily Zhou',
    description: 'Full-stack developer focused on building user-friendly and scalable Web3 applications',
    creator: '@waterily-zhou',
    images: ['/api/og'],
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
