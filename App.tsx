import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Differentiation from './components/Differentiation';
import Solution from './components/Solution';
import ValueDiagram from './components/ValueDiagram';
import ProcessSteps from './components/ProcessSteps';
import AiMarketingTool from './components/AiMarketingTool';
import Consultation from './components/Consultation';
import Footer from './components/Footer';
import Logo from './components/Logo';
import AdminDashboard from './components/AdminDashboard';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [consultationMessage, setConsultationMessage] = useState('');
  const [showAdmin, setShowAdmin] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Global Scroll Reveal Observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); // Trigger only once
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []); // Run once on mount

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAiApply = (data: string) => {
    setConsultationMessage(data);
    scrollToContact();
  };

  const handleOpenAdmin = () => {
    // No longer asking for password here via prompt.
    // Directly open the modal, which handles its own secure login.
    setShowAdmin(true);
  };

  return (
    <div className="min-h-screen bg-briva-50 font-sans relative">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            {/* Logo is kept here */}
            <Logo className="h-8 md:h-10" dark={scrolled} />
          </div>
          <div className="hidden md:flex gap-8">
            <button 
              onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
              className={`text-sm font-medium hover:text-briva-400 transition-colors ${scrolled ? 'text-briva-800' : 'text-briva-100'}`}
            >
              Home
            </button>
            <button 
              onClick={() => document.getElementById('solution')?.scrollIntoView({behavior: 'smooth'})}
              className={`text-sm font-medium hover:text-briva-400 transition-colors ${scrolled ? 'text-briva-800' : 'text-briva-100'}`}
            >
              Solution
            </button>
            <button 
              onClick={() => document.getElementById('ailab')?.scrollIntoView({behavior: 'smooth'})}
              className={`text-sm font-medium hover:text-briva-400 transition-colors ${scrolled ? 'text-briva-800' : 'text-briva-100'}`}
            >
              AI Lab
            </button>
          </div>
          <button 
            onClick={scrollToContact}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${scrolled ? 'bg-briva-600 text-white hover:bg-briva-700' : 'bg-white text-briva-900 hover:bg-briva-100'}`}
          >
            상담 문의
          </button>
        </div>
      </nav>

      <main>
        <Hero />
        
        {/* 1. Empathy / Pain Points */}
        <PainPoints />

        {/* 2. Differentiation / Hook (Why Briva) */}
        <Differentiation />

        {/* 3. Solution: Naver & Instagram Branding */}
        <div id="solution">
          <Solution />
        </div>

        {/* 4. Process Steps */}
        <ProcessSteps />

        {/* 5. Core Values */}
        <div className="reveal-on-scroll">
          <ValueDiagram />
        </div>
        
        {/* 6. AI Tool */}
        <div id="ailab" className="reveal-on-scroll">
          <AiMarketingTool onApply={handleAiApply} />
        </div>

        {/* 7. Consultation */}
        <div className="reveal-on-scroll">
          <Consultation initialMessage={consultationMessage} />
        </div>
      </main>

      <Footer onOpenAdmin={handleOpenAdmin} />

      {/* Floating Kakao Button */}
      <a 
        href="http://pf.kakao.com/_yYYHn" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center bg-[#FAE100] text-[#3C1E1E] w-14 h-14 md:w-auto md:h-auto md:px-5 md:py-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 font-bold gap-2 group border-2 border-white"
      >
        <MessageCircle className="w-6 h-6" fill="#3C1E1E" />
        <span className="hidden md:inline text-sm">간편 문의</span>
        <div className="absolute right-0 -top-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></div>
      </a>

      {/* Admin Dashboard Modal */}
      {showAdmin && <AdminDashboard onClose={() => setShowAdmin(false)} />}
    </div>
  );
};

export default App;