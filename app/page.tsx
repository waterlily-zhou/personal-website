import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-t from-red-600/30 via-transparent to-blue-900/20" />
      
      {/* Main content */}
      <div className="max-w-[1200px] mx-0 px-8 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Name */}
          <div className="space-y-2 md:col-span-2 md:border-r md:border-l md:border-gray-600 pl-4 pr-4">
            <h1 className="text-sm font-light text-gray-300">waterily-zhou</h1>
          </div>
          {/* Introduction */}
          <div className="space-y-2 md:border-r md:border-gray-600 pr-4 md:col-span-3">
            <p className="text-sm leading-relaxed text-gray-300 pr-12">
              A full-stack developer in Web3, focused on building user-friendly and scalable
              applications with high functionality and elegant interface aesthetics.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-2 md:col-span-2 md:border-r md:border-gray-600 pr-4">
            <h2 className="text-sm text-gray-300 font-light mb-4">Links</h2>
            <ul className="text-sm space-y-2">
              <li>
                <a href="https://github.com" className="hover:text-white transition-colors">
                  Github
                </a>
              </li>
              <li>
                <a href="mailto:your-email@example.com" className="hover:text-white transition-colors">
                  Email
                </a>
              </li>
              <li>
                <a href="https://instagram.com" className="hover:text-white transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://x.com" className="hover:text-white transition-colors">
                  X
                </a>
              </li>
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="space-y-2 md:col-span-2 md:border-r md:border-gray-600 pr-4">
            <h2 className="text-sm font-light text-gray-300 mb-4">Languages & Tech Stack</h2>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>Next.js</li>
              <li>React</li>
              <li>Supabase</li>
              <li>D3.js</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-8 text-sm text-gray-400">
        Scroll<br />
        to view<br />
        the menu
      </div>
    </div>
  );
}
