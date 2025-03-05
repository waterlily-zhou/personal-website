import type { Metadata } from "next";
import "./globals.css";
/* import Navigation from "./components/Navigation"; */

export const metadata: Metadata = {
  title: "Waterily Zhou",
  description: "Full-stack developer focused on building user-friendly and scalable applications",
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
      </head>
      <body className="bg-black text-white min-h-screen antialiased">
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
