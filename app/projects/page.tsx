'use client';
import Link from 'next/link';

export default function Projects() {
  return (
    <div className="min-h-screen relative text-white">
      {/* Navigation */}
      <div className="absolute top-0 left-8 right-8 p-4 flex justify-between items-center z-50">
        <Link href="/" className="text-white/70 hover:text-white transition-colors text-sm flex items-center gap-1">
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            className="stroke-current"
          >
            <path 
              d="M15 18l-6-6 6-6" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
          Back
        </Link>
        <h1 className="mt-8 text-2xl font-light text-right">
          Projects<br />and<br />Writings
        </h1>
      </div>

      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10">
        {/* Main gradient: black -> blue -> black */}
        <div className="absolute inset-0 min-h-[110vh] bg-gradient-to-b from-black to-blue-600/20" />
      </div>

      {/* Main Content */}
      <div className="pt-32 px-14 max-w-[80%]">

        {/* Red line */}
        <div className="w-full h-[1px] bg-red-500/50 mb-8" />

        {/* Projects Section */}
        <div className="mb-16 flex flex-row items-start md:gap-[10%]">
          <div className="flex items-center gap-4 mb-8 px-4">
            <img 
              src="/halfMoon.svg"
              alt="Half moon"
              className="w-8 h-8"
              style={{ filter: 'drop-shadow(0 0 8px rgba(239, 68, 68, 0.8))' }}
            />
            <h2 className="text-lg">Projects</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Uncommons Website */}
            <div className="border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors">
              <h3 className="text-lg mb-2">Uncommons Website</h3>
              <p className="text-white/70 mb-4">
                An intro page for the Uncommons Community
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="text-xs bg-white/10 text-white/70 px-2 py-1 rounded">Next.js</span>
                <span className="text-xs bg-white/10 text-white/70 px-2 py-1 rounded">Supabase</span>
                <span className="text-xs bg-white/10 text-white/70 px-2 py-1 rounded">Manbox</span>
              </div>
            </div>

            {/* Birdy.ai */}
            <div className="border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors">
              <h3 className="text-lg mb-2">Birdy.ai</h3>
              <p className="text-white/70 mb-4">
                Data dashboard for crypto and topic data on X
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="text-xs bg-white/10 text-white/70 px-2 py-1 rounded">D3.js</span>
                <span className="text-xs bg-white/10 text-white/70 px-2 py-1 rounded">Observable</span>
                <span className="text-xs bg-white/10 text-white/70 px-2 py-1 rounded">API.FY</span>
                <span className="text-xs bg-white/10 text-white/70 px-2 py-1 rounded">OpenAI API</span>
              </div>
            </div>

            {/* Mel's Tarot House */}
            <div className="border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors">
              <h3 className="text-lg mb-2">Mel&apos;s Tarot House</h3>
              <p className="text-white/70 mb-4">
                A 1-1 personal insight consultation service
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="text-xs bg-white/10 text-white/70 px-2 py-1 rounded">Smith-Waite</span>
              </div>
            </div>

            {/* Litentry */}
            <div className="border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors">
              <h3 className="text-lg mb-2">Litentry (employed)</h3>
              <p className="text-white/70 mb-4">
                TEE-based decentralized identity solutions
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="text-xs bg-white/10 text-white/70 px-2 py-1 rounded">DevRel</span>
                <span className="text-xs bg-white/10 text-white/70 px-2 py-1 rounded">Marketing</span>
              </div>
            </div>
          </div>
        </div>

        {/* Red line */}
        <div className="w-full h-[1px] bg-red-500/50 mb-16" />  

        {/* Writings Section */}
        <div className='flex flex-row items-start md:gap-[10%]'>
          <div className="flex items-center gap-4 mb-8 px-4">
            <img 
              src="/halfMoon.svg"
              alt="Half moon"
              className="w-8 h-8"
              style={{ 
                filter: 'drop-shadow(0 0 8px rgba(239, 68, 68, 0.8))',
                transform: 'rotate(180deg)'
              }}
            />
            <h2 className="text-lg">Writings</h2>
          </div>

          <div className="space-y-8 w-full">
            <a href="#" className="block group flex flex-row items-center gap-2">
              <div className="flex items-center gap-2">
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  className="stroke-current"
                >
                  <path 
                    d="M7 17L17 7M17 7H7M17 7V17" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-lg text-white group-hover:text-white transition-colors">Medium</span>
              </div>
              <p className="text-white/70"> - Articles on identity and privacy technologies</p>
            </a>

            {/* Gray line */}
            <div className="w-full h-[1px] bg-gray-500/50 mb-8" />

            <a href="#" className="block group flex flex-row items-center gap-2">
              <div className="flex items-center gap-2">
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  className="stroke-current"
                >
                  <path 
                    d="M7 17L17 7M17 7H7M17 7V17" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-lg text-white group-hover:text-white transition-colors">Foresight News</span>
              </div>
              <p className="text-white/80">- Opinions and analysis on the social impact of Web3</p>
            </a>

            {/* Gray line */}
            <div className="w-full h-[1px] bg-gray-500/50 mb-8" />

            <a href="#" className="block group flex flex-row items-center gap-2">
              <div className="flex items-center gap-2">
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  className="stroke-current"
                >
                  <path 
                    d="M7 17L17 7M17 7H7M17 7V17" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-lg text-white group-hover:text-white transition-colors">微信公众号</span>
              </div>
              <p className="text-white/80">- Reflections on understanding and navigating life</p>
            </a>

            {/* Gray line */}
            <div className="w-full h-[1px] bg-gray-500/50 mb-8" />
          </div>
        </div>

        {/* Decorative Star and Chinese Text */}
        <div className="absolute top-[20%] right-8 flex flex-col items-end gap-2">
          <div className="relative h-30">
            <img 
              src="/orangeStar.svg" 
              alt="Decorative star"
              className="w-full h-full"
              style={{ filter: 'drop-shadow(0 0 10px rgba(255, 165, 0, 0.5))' }}
            />
          </div>
          <div className="writing-vertical-rl text-white h-48 pr-4">
            过往项目与写作
          </div>
        </div>
      </div>
    </div>
  );
} 