'use client';
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ConstellationScene from "./components/ConstellationScene";

export default function Home() {
  const circleRef = useRef(null);
  const blurredRef = useRef(null);
  const contentRef = useRef(null);
  const [showConstellation, setShowConstellation] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Content fade out animation
    gsap.to(contentRef.current, {
      scrollTrigger: {
        trigger: ".scroll-section",
        start: "top 80%",
        end: "top 20%",
        scrub: 1,
      },
      opacity: 0,
      y: -50,
    });

    // Circle transition animation
    ScrollTrigger.create({
      trigger: ".scroll-section",
      start: "top 80%",
      onEnter: () => setShowConstellation(true),
      onLeaveBack: () => setShowConstellation(false),
    });

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

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="relative">
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
        <div className="max-w-screen mx-0 px-8 pt-8">
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

        {/* Vertical text on right */}
        <div className="absolute top-1/2 -translate-y-1/2 right-8 writing-vertical-rl text-sm text-gray-400">
          遥远的探测系统，寻找两颗月亮之间的微妙关系。
          <br />
          互相排斥、平行时空？世人尝试解答，利用最先进的观测设备，
          <br />
          在浩瀚宇宙中，寻找两颗月亮之间的微妙关系。
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-8 text-sm text-gray-400">
          Scroll<br />
          to view<br />
          the menu
        </div>
      </section>

      {/* Second section for transition */}
      <section className="min-h-screen relative scroll-section">
        {/* Outer circle stroke */}
        <div 
          ref={circleRef}
          className="absolute top-[10%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full border border-red-500/50"
        />

        {/* Blurred center circle */}
        <div 
          ref={blurredRef}
          className="absolute top-[10%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-red-500/90 blur-[80px]" 
        />
      
      </section>
      
      {/* Constellation */}
      {showConstellation && (
        <div className="fixed inset-0 z-10 pointer-events-auto">
          <ConstellationScene />
        </div>
      )}
    </div>
  );
}
