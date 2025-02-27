'use client';
import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen relative bg-black text-white">
      {/* Navigation */}
      <div className="absolute top-0 left-8 right-8 p-4 flex justify-between items-center">
        <Link href="/" className="text-white/70 hover:text-white transition-colors text-sm">
          ← Back
        </Link>
        <h1 className="mt-8 text-2xl font-light">
            About<br />Me
          </h1>
      </div>

      {/* Background Circle Grid */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30">
        <div className="w-[800px] h-[800px] border-[0.5px] border-white/30 rounded-full">
          {/* Radial lines */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 w-[1000px] h-[0.5px] bg-white/100 origin-center"
              style={{ transform: `translate(-50%, -50%) rotate(${i * 30}deg)` }}
            />
          ))}
          {/* Concentric circles */}
          {[300, 400, 700, 800, 1000].map((size, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 border-[0.5px] border-white/100 rounded-full"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                transform: 'translate(-50%, -50%)'
              }}
            />
          ))}
          {/* Center black circle */}
          <div 
            className="absolute top-1/2 left-1/2 bg-black rounded-full z-10"
            style={{
              width: '299px',
              height: '299px',
              transform: 'translate(-50%, -50%)'
            }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-2xl mx-auto px-8">
          <div className="space-y-8">
            <p className="text-white/90 leading-relaxed">
              Mel (@waterily-zhou) is a full-stack engineer who enjoys
              building niche and elegant apps that seamlessly solve
              problems. Originally trained in law, she transitioned into
              software engineering through a bootcamp and currently
              working in Web3.
            </p>
            <p className="text-white/90 leading-relaxed">
              In life, she has lived across multiple continents and is now
              based in Lisbon. She practices Vipassana meditation daily
              and connects with Chinese philosophy. This year, she
              follows the motto &quot;潜龙勿用&quot;—approaching work with
              equanimity and a learner&apos;s attitude.
            </p>
          </div>
        </div>

        {/* Decorative Star and Chinese Text */}
        <div className="absolute top-[30%] right-8 text-right">
          <div className="mb-4 relative w-24 h-24">
            {/* Four-pointed star */}
            <div className="absolute inset-0">
              <svg width="100%" height="100%" viewBox="-40 -40 80 80">
                <path
                  d="
                    M0,0 L-2,-2 L0,-30 L2,-2 Z
                    M0,0 L2,-2 L30,0 L2,2 Z
                    M0,0 L2,2 L0,30 L-2,2 Z
                    M0,0 L-2,2 L-30,0 L-2,-2 Z
                  "
                  fill="#FFA500"
                  opacity="0.8"
                  style={{ filter: 'drop-shadow(0 0 4px rgba(255, 165, 0, 0.5))' }}
                />
              </svg>
            </div>
            {/* Center circle with radial gradient */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full"
              style={{
                background: 'radial-gradient(circle at center, white 0%, white 60%, transparent 100%)',
                boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)'
              }}
            />
          </div>
          <div className="writing-vertical-rl text-sm text-white/100">
            关于我的一些事情 ……
          </div>
        </div>
      </div>
    </div>
  );
} 