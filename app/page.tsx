'use client';
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ConstellationScene from "./components/ConstellationScene";
import Image from 'next/image';

export default function Home() {
  const circleRef = useRef(null);
  const blurredRef = useRef(null);
  const contentRef = useRef(null);
  const constellationRef = useRef(null);
  const circleGridRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Content fade out animation
    gsap.to(contentRef.current, {
      scrollTrigger: {
        trigger: ".scroll-section",
        start: "top 80%",
        end: "top 10%",
        scrub: 1,
      },
      opacity: 0,
      y: -50,
    });

    // Constellation fade in/out animation
    gsap.fromTo(
      constellationRef.current,
      { opacity: 0 },
      {
        scrollTrigger: {
          trigger: ".scroll-section",
          start: "top 80%",
          end: "center center",
          scrub: 2,
          pin: false,
        },
        opacity: 1,
      }
    );

/*     // Constellation fade out animation
    gsap.to(constellationRef.current, {
      scrollTrigger: {
        trigger: ".about-section",
        start: "top 80%",
        end: "top 20%",
        scrub: 2,
        pin: false,
      },
      opacity: 0,
    }); */

    // About-me section fade in animation
    gsap.fromTo(
      ".about-section",
      { opacity: 0, y: 50 },
      {
        scrollTrigger: {
          trigger: ".about-section",
          start: "top bottom",
          end: "top center",
          scrub: 3,
        },
        opacity: 1,
        y: 0,
      }
    );

    // Projects section fade in animation
    gsap.fromTo(
      ".projects-section",
      { opacity: 0, y: 50 },
      {
        scrollTrigger: {
          trigger: ".projects-section",
          start: "top bottom",
          end: "top center",
          scrub: 2,
        },
        opacity: 1,
        y: 0,
      }
    );

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".scroll-section",
        start: "top 80%",
        end: "top 20%",
        scrub: 1,
      }
    });

    tl.to(circleRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 1
    });

    tl.to(blurredRef.current, {
      scale: 0.5,
      opacity: 0,
      duration: 1
    }, "<");

    // Circle grid rotation animation
    gsap.to(circleGridRef.current, {
      scrollTrigger: {
        trigger: ".about-section",
        start: "top bottom",
        end: "bottom top",
        scrub: 5,
      },
      rotation: 180,
      ease: "none",
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* First section with content */}
      <section ref={contentRef} className="min-h-screen relative">
        {/* Gradient background */}
        <div className="absolute inset-0 h-[170vh] -z-10">
          {/* Main gradient: black -> blue -> black */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-600/25 to-black" />
          {/* Additional blue glow in the middle */}
         {/*  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-600/20 to-transparent" /> */}
        </div>
        
        {/* Main content */}
        <div className="max-w-[85%] md:max-w-screen mx-0 px-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Name */}
            <div className="space-y-2 border-b border-gray-600 pb-4 md:border-b-0 md:pb-0 md:col-span-2 md:border-r md:border-l md:border-gray-600 md:pl-4 pr-4">
              <h1 className="text-sm text-gray-300">waterlily-zhou</h1>
            </div>
            {/* Introduction */}
            <div className="space-y-2 border-b border-gray-600 pb-4 md:border-b-0 md:pb-0 md:border-r md:border-gray-600 pr-4 md:col-span-3">
              <p className="text-sm leading-relaxed text-gray-300 pr-[20%]">
                A full-stack developer in Web3, focused on building user-friendly and scalable
                applications with high functionality and elegant interface aesthetics.
              </p>
            </div>

            {/* Links */}
            <div className="space-y-2 border-b border-gray-600 pb-4 md:border-b-0 md:pb-0 md:col-span-2 md:border-r md:border-gray-600 pr-4">
              <h2 className="text-sm text-gray-300 font-light mb-4">Links</h2>
              <ul className="text-sm space-y-2">
                <li>
                  <a 
                    href="https://github.com/waterlily-zhou" 
                    className="hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a href="mailto:melzhou1204@gmail.com" className="hover:text-white transition-colors">
                    Email
                  </a>
                </li>
                <li>
                <a 
                    href="https://instagram.com/waterlily_zhou" 
                    className="hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                <a 
                    href="https://x.com/waterlily_zhou" 
                    className="hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    X
                  </a>
                </li>
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="space-y-2 border-b border-gray-600 pb-4 md:border-b-0 md:pb-0 md:col-span-2 md:border-r md:border-gray-600 pr-4">
              <h2 className="text-sm font-light text-gray-300 mb-4">Main Tech Stack</h2>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>Next.js</li>
                <li>React</li>
                <li>Three.js</li>
                <li>TypeScript</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Vertical text on right */}
        <div className="absolute top-1/2 -translate-y-1/2 right-6 md:right-8 writing-vertical-rl text-xs md:text-sm text-gray-300">
          250萬光年之外的螺旋星系，孕育著比銀河更先進的文明。銀河與它，或彼此吞噬、或並行时空。兩者的微妙关系，如同最直接的鏡像，對望——在無數次朝聖中浮游問道。
          {/* <br /> */}
          
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-8 text-sm text-gray-300">
          Scroll<br />
          to view
        </div>
      </section>

      {/* Second section for transition */}
      <section className="min-h-screen relative scroll-section">
        {/* Outer circle stroke */}
        <div 
          ref={circleRef}
          className="absolute top-[10%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full border border-red-500/50 overflow-hidden"
        />

        {/* Blurred center circle */}
        <div 
          ref={blurredRef}
          className="absolute top-[10%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-red-500/90 blur-[80px] overflow-hidden animate-breathe" 
        />
      
        {/* Constellation - moved inside scroll section */}
        <div 
          ref={constellationRef} 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-[100vh]"
        >
          <ConstellationScene />
        </div>
      </section>
      
      {/* About section */}
      <section className="min-h-screen relative text-white about-section mb-80 mt-40">
        {/* Header container */}
        <div className="relative px-8">
          {/* Title and red line */}
          <div className="text-right md:absolute md:top-8 md:right-8">
            <h1 className="text-3xl mb-8" style={{ fontFamily: 'Jedira', letterSpacing: '0.05em' }}>
              About<br />Me
            </h1>
            {/* Red line - mobile only */}
            <div className="h-[1px] bg-red-700/70 mt-8 mb-16 md:hidden" />
          </div>
          
          {/* Decorative elements - desktop only */}
          <div className="absolute flex top-8 right-8 flex-col items-end">
            <div className="relative h-16 md:h-24 mt-32">
              <Image 
                src="/blueStar.svg" 
                alt="Decorative star"
                width={256}
                height={256}
                className="object-contain w-22 h-22"
                priority
                quality={100}
                style={{ 
                  filter: 'drop-shadow(0 0 10px rgba(255, 165, 0, 0.5))',
                  transform: 'translate3d(0, 0, 0)',
                  willChange: 'transform'
                }}
              />
            </div>
            <div className="writing-vertical-rl text-gray-300 md:pr-4">
              關於我的一些事…
            </div>
          </div>
        </div>

        {/* Background Circle Grid */}
        <div className="absolute inset-0 flex justify-center -z-5">
          <div 
            ref={circleGridRef}
            className="w-[1000px] h-[1000px] rounded-full bg-transparent"
          >
            {/* Radial lines */}
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute top-1/2 left-1/2 w-[1200px] h-[0.5px] bg-white/15 origin-center"
                style={{ transform: `translate(-50%, -50%) rotate(${i * 30}deg)` }}
              />
            ))}
            {/* Concentric circles */}
            {[300, 450, 700, 850, 1201].map((size, i) => (
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
        <div className="z-10 min-h-screen flex md:items-center">
          
          <div className="max-w-2xl mx-auto px-8 pr-[20%] md:pr-0">
            <div className="space-y-8">
              <p className="text-white leading-relaxed">
                Mel (@waterlily-zhou) is a full-stack engineer who enjoys
                building niche and elegant apps that seamlessly solve
                problems. Originally trained in law, she transitioned into
                software engineering through a bootcamp and currently
                working in Web3.
              </p>
              <p className="text-white leading-relaxed">
                In life, she has lived across multiple continents and is now
                based in Lisbon. She practices Vipassana meditation daily
                and connects with Chinese philosophy. This year, she
                follows the motto &quot;潜龙勿用&quot;—approaching work with
                equanimity and a learner&apos;s attitude.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gradient transition between About and Projects */}
      <div className="absolute w-full h-[300vh] -z-10" style={{ top: '190vh' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-600/25 to-black" />
      </div>

      {/* Projects section */}
      <section id="projects-section" className="min-h-screen relative text-white projects-section">

        {/* Decorative Star and Chinese Text */}
        <div className="absolute top-8 right-8 flex flex-col items-end">
          <h1 className="text-3xl mb-32 text-right" style={{ fontFamily: 'Jedira', letterSpacing: '0.05em' }}>
            Projects &<br />Writings 
          </h1>
          <div className="relative hidden md:block w-24 h-24">
            <Image 
              src="/orangeStar.svg" 
              alt="Decorative star"
              width={96}
              height={96}
              className="object-contain"
              priority
              style={{ 
                filter: 'drop-shadow(0 0 10px rgba(255, 165, 0, 0.5))',
                transform: 'translate3d(0, 0, 0)',  // Force GPU acceleration
                willChange: 'transform'  // Hint to browser about animation
              }}
            />
          </div>
          <div className="writing-vertical-rl text-gray-300 pr-4 hidden md:block">
            過往項目與文章
          </div>
        </div>

        {/* Main Content */}
        <div className="pt-28 px-8 md:px-14 md:max-w-[85%] relative z-20">
          {/* Red line */}
          <div className="w-full h-[1px] bg-red-700/70 mb-16 mt-8" />

          {/* Projects Section */}
          <div className="mb-20 flex flex-col md:flex-row md:items-start gap-8 lg:gap-16">
            {/* Half moon and project title */}
            <div className="flex items-center -space-x-10 min-w-[150px] relative z-20">
              <h2 className="text-lg relative z-10 text-white font-medium">Projects</h2>
            </div>
            
            {/* Projects Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 relative z-20">
              {/* Uncommons Website */}
              <a href="https://unco-website.vercel.app/" target="_blank" rel="noopener noreferrer">
                <div className="border border-white/30 rounded-lg p-6 hover:border-red-700 hover:bg-red-700 transition-all duration-300">
                  <h3 className="mb-2 font-bold">Uncommons Website</h3>
                  <p className="text-sm text-gray-300 mb-4">
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
                  <p className="text-sm text-gray-300 mb-4">
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
                  <p className="text-sm text-gray-300 mb-4">
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
                  <p className="text-sm text-gray-300 mb-4">
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
          <div className="w-full h-[1px] bg-red-700/70 mb-16" />  

          {/* Writings Section */}
          <div className='flex flex-col md:flex-row md:items-start gap-4 md:gap-8 lg:gap-16 relative z-20'>
            {/* Half moon and writing title*/}
            <div className="flex items-center -space-x-10 min-w-[150px]">
              <h2 className="text-lg relative z-10 text-white font-medium">Writings</h2>
            </div>

            <div className="w-full">
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
                <p className="text-gray-300">Articles on identity and privacy technologies</p>
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
                <p className="text-gray-300">Opinions and analysis on the social impact of Web3</p>
              </a>

              <a href="https://mp.weixin.qq.com/s/VL8auNw4IbvRF-6m3PSq_w" target="_blank" rel="noopener noreferrer" className="block group flex flex-row items-center gap-4 hover:bg-red-700 pt-4 pb-4 border-b border-white/30 hover:border-red-700 transition-all duration-300">
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
                  <span className="text-white transition-colors font-bold min-w-[100px]">微信公众号</span>
                </div>
                <p className="text-gray-300">Reflections on understanding and navigating life</p>
              </a>
            </div>
          </div>
          <div className="md:hidden h-24"></div>
        </div>
      </section>
    </div>
  );
}
