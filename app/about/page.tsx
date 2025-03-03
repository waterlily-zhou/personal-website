'use client';
import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen relative text-white">
      {/* Navigation */}
      <div className="absolute top-8 left-8 right-8 p-4 flex justify-between items-start z-50">
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
        <h1 className="text-3xl font-light text-right" style={{ fontFamily: 'Jedira', letterSpacing: '0.05em' }}>
            About<br />Me
        </h1>
      </div>

      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10">
        {/* Main gradient: black -> blue -> black */}
        <div className="absolute inset-0 min-h-[110vh] bg-gradient-to-b from-black to-blue-600/25" />
      </div>

      {/* Background Circle Grid */}
      <div className="absolute inset-0 flex items-center justify-center -z-5">
        <div className="w-[800px] h-[800px] rounded-full bg-transparent">
          {/* Radial lines */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 w-[1000px] h-[0.5px] bg-white/15 origin-center"
              style={{ transform: `translate(-50%, -50%) rotate(${i * 30}deg)` }}
            />
          ))}
          {/* Concentric circles */}
          {[300, 400, 700, 800, 1000].map((size, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 border-[0.5px] border-white/25 rounded-full bg-transparent"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                transform: 'translate(-50%, -50%)'
              }}
            />
          ))}
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
        <div className="absolute top-[20%] right-8 flex flex-col items-end gap-2">
          <div className="relative h-30">
            <img 
              src="/blueStar.svg" 
              alt="Decorative star"
              className="w-full h-full"
              style={{ filter: 'drop-shadow(0 0 10px rgba(255, 165, 0, 0.5))' }}
            />
          </div>
          <div className="writing-vertical-rl text-white h-48 pr-4">
            關於我的一些事…
          </div>
        </div>
      </div>
    </div>
  );
} 