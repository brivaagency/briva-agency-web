import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse position from -1 to 1
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePosition({ x, y });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // 3D Tilt Calculation
  const tiltX = mousePosition.y * 10; // Rotate X axis based on Y position
  const tiltY = mousePosition.x * -10; // Rotate Y axis based on X position

  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-slate-950 text-briva-50 perspective-1000">
      {/* Deep Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-briva-950 to-slate-950 z-0"></div>
      
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 bg-noise opacity-20 z-0 mix-blend-overlay"></div>

      {/* Parallax Background Grid - Moves slower than scroll */}
      <div 
        className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none z-0"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      ></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-briva-400 opacity-0 animate-float-particle blur-[1px]"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: '100%',
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Interactive Blobs with Parallax & Scroll - Moves slightly with scroll */}
      <div 
        className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-briva-600 rounded-full blur-[120px] md:blur-[160px] opacity-20 animate-pulse-slow z-0"
        style={{ 
          transform: `translate(${mousePosition.x * -30}px, ${mousePosition.y * -30 + scrollY * 0.2}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      ></div>
      <div 
        className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-indigo-600 rounded-full blur-[120px] md:blur-[160px] opacity-20 animate-pulse-slow z-0"
        style={{ 
          transform: `translate(${mousePosition.x * 40}px, ${mousePosition.y * 40 + scrollY * 0.1}px)`,
          transition: 'transform 0.1s ease-out',
          animationDelay: '1s'
        }}
      ></div>

      {/* Main Content - Parallax Effect (Opposite direction or faster) */}
      <div 
        className="z-10 text-center px-4 max-w-6xl flex flex-col items-center animate-hero-slide-up"
        style={{ transform: `translateY(${-scrollY * 0.1}px)` }}
      >
        <h2 className="text-briva-300 tracking-[0.3em] text-[10px] md:text-sm font-bold mb-12 md:mb-16 uppercase border border-briva-700/50 inline-block px-4 py-1 rounded-full bg-briva-900/30 backdrop-blur-sm shadow-[0_0_20px_rgba(14,165,233,0.3)]">
          Performance Marketing
        </h2>
        
        {/* Slogan Container with 3D Tilt & Rectangular Quote Frame */}
        <div 
          className="relative inline-block mx-auto mb-12 md:mb-16 p-6 md:p-10 transition-transform duration-100 ease-out"
          style={{
            transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
          }}
        >
          {/* Top Left Quote */}
          <span className="absolute -top-4 -left-2 md:-top-10 md:-left-10 text-5xl md:text-8xl text-briva-500 opacity-50 font-serif leading-none select-none drop-shadow-lg">
            ❝
          </span>

          <div className="flex flex-col gap-3 md:gap-6 text-center relative z-10">
            {/* Shimmering Text Effect */}
            <span className="text-4xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-briva-200 to-white bg-[length:200%_auto] animate-text-shine tracking-widest whitespace-nowrap drop-shadow-2xl">
              기획은 날카롭게
            </span>
            <span className="text-4xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-briva-200 to-white bg-[length:200%_auto] animate-text-shine tracking-widest whitespace-nowrap drop-shadow-2xl">
              실행은 거침없이
            </span>
          </div>

          {/* Bottom Right Quote */}
          <span className="absolute -bottom-8 -right-2 md:-bottom-16 md:-right-10 text-5xl md:text-8xl text-briva-500 opacity-50 font-serif leading-none select-none drop-shadow-lg">
            ❞
          </span>
        </div>
        
        <div className="w-24 h-1.5 bg-gradient-to-r from-transparent via-briva-500 to-transparent mx-auto mb-8 rounded-full opacity-80"></div>

        <p className="text-briva-200 mt-2 text-sm md:text-xl font-light opacity-90 max-w-2xl leading-relaxed drop-shadow-md">
          데이터로 증명하는 <span className="text-white font-semibold">압도적인 성과</span>, 브리바가 만듭니다.
        </p>
      </div>

      <div 
        className="absolute bottom-10 z-10 animate-bounce text-briva-400 opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <ArrowDown size={32} />
      </div>
    </section>
  );
};

export default Hero;