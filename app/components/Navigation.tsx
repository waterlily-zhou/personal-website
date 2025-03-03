'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full p-4 z-50 bg-transparent">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link 
          href="/" 
          className="text-white hover:text-gray-300 transition-colors"
        >
          waterily-zhou
        </Link>
        <div className="space-x-8">
          <Link 
            href="/about"
            className={`${
              pathname === '/about' ? 'text-white' : 'text-gray-400'
            } hover:text-white transition-colors`}
          >
            About
          </Link>
          <Link 
            href="/projects"
            className={`${
              pathname === '/projects' ? 'text-white' : 'text-gray-400'
            } hover:text-white transition-colors`}
          >
            Projects & Writings
          </Link>
        </div>
      </div>
    </nav>
  );
} 