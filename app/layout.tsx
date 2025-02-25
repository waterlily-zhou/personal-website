import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
/* import Navigation from "./components/Navigation"; */

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Waterily Zhou",
  description: "Full-stack developer focused on building user-friendly and scalable applications",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white min-h-screen`}>
        <main >
          {children}
        </main>
      </body>
    </html>
  );
}
