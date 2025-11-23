import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse position from -1 to 1
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-briva-900 text-briva-50">
      {/* Background Patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>
      
      {/* Interactive Blobs with Parallax */}
      <div 
        className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-briva-600 rounded-full blur-[140px] opacity-20"
        style={{ 
          transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`,
          transition: 'transform 0.2s ease-out'
        }}
      ></div>
      <div 
        className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-briva-400 rounded-full blur-[140px] opacity-20"
        style={{ 
          transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`,
          transition: 'transform 0.2s ease-out'
        }}
      ></div>

      <div className="z-10 text-center px-4 max-w-6xl flex flex-col items-center reveal-on-scroll is-visible">
        <h2 className="text-briva-300 tracking-[0.3em] text-xs md:text-sm font-bold mb-16 uppercase border border-briva-700 inline-block px-4 py-1 rounded-full bg-briva-900/50 backdrop-blur-sm">
          Performance Marketing
        </h2>
        
        {/* Slogan Container with Rectangular Quote Frame */}
        <div className="relative inline-block mx-auto mb-16 p-4 md:p-8">
          {/* Top Left Quote */}
          <span className="absolute -top-6 -left-2 md:-top-12 md:-left-12 text-5xl md:text-8xl text-briva-400 opacity-40 font-serif leading-none select-none">
            ❝
          </span>

          <div className="flex flex-col gap-4 md:gap-6 text-center relative z-10">
            <span className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-[0.1em] md:tracking-[0.15em] whitespace-nowrap drop-shadow-2xl">
              기획은 날카롭게
            </span>
            <span className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-[0.1em] md:tracking-[0.15em] whitespace-nowrap drop-shadow-2xl">
              실행은 거침없이
            </span>
          </div>

          {/* Bottom Right Quote */}
          <span className="absolute -bottom-10 -right-2 md:-bottom-20 md:-right-12 text-5xl md:text-8xl text-briva-400 opacity-40 font-serif leading-none select-none">
            ❞
          </span>
        </div>
        
        <div className="w-20 h-1 bg-briva-500 mx-auto mb-8 rounded-full"></div>

        <p className="text-briva-200 mt-4 text-base md:text-xl font-light opacity-90 max-w-2xl">
          데이터로 증명하는 압도적인 성과, 브리바가 만듭니다.
        </p>
      </div>

      <div className="absolute bottom-10 z-10 animate-bounce text-briva-400">
        <ArrowDown size={32} />
      </div>
    </section>
  );
};

export default Hero;