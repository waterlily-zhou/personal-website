'use client';
import Link from 'next/link';

export default function Projects() {
  return (
    <div className="min-h-screen relative text-white">
      {/* Navigation */}
      <div className="absolute top-8 left-4 right-4 md:left-8 md:right-8 p-4 flex justify-between items-start z-50">
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
        <h1 className="text-3xl text-right" style={{ fontFamily: 'Jedira', letterSpacing: '0.05em' }}>
          Projects &<br />Writings
        </h1>
      </div>

      {/* Decorative Star and Chinese Text */}
        <div className="absolute pt-16 right-[30%] md:top-[20%] md:right-8 flex flex-col items-end gap-2">
          <div className="relative h-30">
            <img 
              src="/orangeStar.svg" 
              alt="Decorative star"
              className="w-full h-full"
              style={{ filter: 'drop-shadow(0 0 10px rgba(255, 165, 0, 0.5))' }}
            />
          </div>
          <div className="writing-vertical-rl text-white h-48 pr-4 hidden md:block">
            過往項目與文章
          </div>
        </div>

      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10">
        {/* Main gradient: black -> blue -> black */}
        <div className="absolute inset-0 min-h-[100vh] bg-gradient-to-b from-black to-blue-600/25" />
      </div>

      {/* Main Content */}
      <div className="pt-40 px-8 md:pt-32 md:px-14 md:max-w-[85%]">

        {/* Red line */}
        <div className="w-full h-[1px] bg-red-700/70 mb-4" />

        {/* Projects Section */}
        <div className="mb-8 flex flex-col md:flex-row md:items-start gap-8 lg:gap-16">

          {/* Half moon and project title */}
          <div className="flex items-center -space-x-10 min-w-[150px]">
            <img 
              src="/halfMoon.svg"
              alt="Half moon"
              className="w-18 h-24"
              style={{ filter: 'drop-shadow(0 0 8px rgba(239, 68, 68, 0.8))' }}
            />
            <h2 className="text-2xl relative z-10 pt-14">Projects</h2>
          </div>
          
          {/* Projects Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:pt-8">
            {/* Uncommons Website */}
            <a href="https://unco-website.vercel.app/" target="_blank" rel="noopener noreferrer">
              <div className="border border-white/30 rounded-lg p-6 hover:border-red-700 hover:bg-red-700 transition-all duration-300">
                <h3 className="mb-2 font-bold">Uncommons Website</h3>
                <p className="text-sm text-white/70 mb-4">
                An intro page for the Uncommons Community
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs bg-white/20 text-white/70 px-2 py-1 rounded">Next.js</span>
                  <span className="text-xs bg-white/20 text-white/70 px-2 py-1 rounded">Supabase</span>
                  <span className="text-xs bg-white/20 text-white/70 px-2 py-1 rounded">Manbox</span>
                </div>
              </div>
            </a>

            {/* Birdy.ai */}
            <a href="https://github.com/kayyueth/birdy_ai" target="_blank" rel="noopener noreferrer">
              <div className="border border-white/30 rounded-lg p-6 hover:border-red-700 hover:bg-red-700 transition-all duration-300">
                <h3 className="mb-2 font-bold">Birdy.ai</h3>
                <p className="text-sm text-white/70 mb-4">
                  Data dashboard for crypto and topic data on X
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs bg-white/20 text-white/70 px-2 py-1 rounded">D3.js</span>
                  <span className="text-xs bg-white/20 text-white/70 px-2 py-1 rounded">APIFY</span>
                  <span className="text-xs bg-white/20 text-white/70 px-2 py-1 rounded">OpenAI API</span>
                </div>
              </div>
            </a>

            {/* Mel's Tarot House */}
            <a href="https://melmelz.notion.site/KK-all-in-5da6ad0c27b141f3b167afaa5d83a73a?pvs=4" target="_blank" rel="noopener noreferrer">
              <div className="border border-white/30 rounded-lg p-6 hover:border-red-700 hover:bg-red-700 transition-all duration-300">
                <h3 className="mb-2 font-bold">Mel&apos;s Tarot House</h3>
                <p className="text-sm text-white/70 mb-4">
                  A 1-1 personal insight consultation service
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs bg-white/20 text-white/70 px-2 py-1 rounded">Smith-Waite</span>
                </div>
              </div>
            </a>

            {/* Litentry */}
            <a href="https://www.heima.network/rebranding" target="_blank" rel="noopener noreferrer">
            <div className="border border-white/30 rounded-lg p-6 hover:border-red-700 hover:bg-red-700 transition-all duration-300">
              <h3 className="mb-2 font-bold">Litentry (employed)</h3>
              <p className="text-sm text-white/70 mb-4">
                TEE-based decentralized identity solutions
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="text-xs bg-white/20 text-white/70 px-2 py-1 rounded">DevRel</span>
                <span className="text-xs bg-white/20 text-white/70 px-2 py-1 rounded">Marketing</span>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Red line */}
        <div className="w-full h-[1px] bg-red-700/70 mb-8" />  

        {/* Writings Section */}
        <div className='flex flex-col md:flex-row md:items-start gap-4md:gap-8 lg:gap-16'>

          {/* Half moon and writing title*/}
          <div className="flex items-center -space-x-10 min-w-[150px]">
            <img 
              src="/halfMoon.svg"
              alt="Half moon"
              className="w-18 h-24"
              style={{ 
                filter: 'drop-shadow(0 0 8px rgba(239, 68, 68, 0.8))',
                transform: 'rotate(180deg)'
              }}
            />
            <h2 className="text-2xl relative z-10 pt-6">Writings</h2>
          </div>

          <div className="pt-2 md:pt-9 w-full">
            <a href="https://medium.com/@melzhou" target="_blank" rel="noopener noreferrer" className="block group flex flex-row items-center gap-4 hover:bg-red-700 pt-4 pb-4 border-b border-white/30 hover:border-red-700 transition-all duration-300">
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
                <span className="text-white transition-colors font-bold min-w-[100px]">Medium</span>
              </div>
              <p className="text-white/80"> Articles on identity and privacy technologies</p>
            </a>


            <a href="https://foresightnews.pro/column/detail/1154" target="_blank" rel="noopener noreferrer" className="block group flex flex-row items-center gap-4 hover:bg-red-700 pt-4 pb-4 border-b border-white/30 hover:border-red-700 transition-all duration-300">
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
                <span className="text-white transition-colors font-bold min-w-[100px]">Foresight News</span>
              </div>
              <p className="text-white/80">Opinions and analysis on the social impact of Web3</p>
            </a>


            <a href="https://mp.weixin.qq.com/s/VL8auNw4IbvRF-6m3PSq_w" target="_blank" rel="noopener noreferrer"className="block group flex flex-row items-center gap-4 hover:bg-red-700 pt-4 pb-4 border-b border-white/30 hover:border-red-700 transition-all duration-300">
              <div className="flex items-center gap-2 ">
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
                <span className="text-white transition-colors font-bold min-w-[100px]">微信公众号</span>
              </div>
              <p className="text-white/80">Reflections on understanding and navigating life</p>
              {/* QR Code - initially hidden, shows on hover */}
              <div className="absolute right-1/4 md:left-1/3 -translate-y-[70%] md:translate-y-1/2 md:mt-6 hidden group-hover:block rounded shadow-lg">
                <img src="/qrcode.jpg" alt="WeChat QR Code" className="w-32 h-32" />
              </div>
            </a>
          </div>
        </div>
      <div className="md:hidden h-24"></div>
      </div>
    </div>
  );
} 