import React, { useState, useEffect, useRef } from 'react';
import { Lightbulb, PenTool, LayoutTemplate, Zap, Radio } from 'lucide-react';
import { ValuePoint, DiagramPosition } from '../types';

const valuePoints: ValuePoint[] = [
  {
    id: '1',
    title: '서비스 (Service)',
    description: '고객의 니즈를 정확히 파악하여 최적화된 마케팅 솔루션을 제공합니다.',
    iconName: 'Radio',
    position: DiagramPosition.TOP
  },
  {
    id: '2',
    title: '디자인 (Design)',
    description: '브랜드의 아이덴티티를 시각적으로 구체화하는 감각적인 크리에이티브.',
    iconName: 'PenTool',
    position: DiagramPosition.RIGHT
  },
  {
    id: '3',
    title: '편리성 (Utility)',
    description: '복잡한 과정을 단순화하여 클라이언트가 본업에 집중하도록 돕습니다.',
    iconName: 'Zap',
    position: DiagramPosition.BOTTOM
  },
  {
    id: '4',
    title: '기획력 (Planning)',
    description: '데이터 기반의 통찰력으로 시장을 선도하는 전략을 수립합니다.',
    iconName: 'LayoutTemplate',
    position: DiagramPosition.LEFT
  }
];

const ValueDiagram: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('1');
  const [isCoreGlowing, setIsCoreGlowing] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isPausedRef = useRef(false);

  const startLoop = () => {
    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      if (isPausedRef.current) return;

      setActiveId((prevId) => {
        const currentIndex = valuePoints.findIndex(p => p.id === prevId);
        
        // Sequence logic: 1 -> 2 -> 3 -> 4 -> Core Glow -> 1
        if (currentIndex === valuePoints.length - 1) {
          // If at the last item (Planning), trigger Core Glow
          setIsCoreGlowing(true);
          
          // Hold the glow for a moment, then reset to 1
          setTimeout(() => {
            setIsCoreGlowing(false);
            setActiveId('1');
          }, 1500); // Glow duration

          return prevId; // Keep showing the last item while glowing
        }

        // Otherwise move to next
        return valuePoints[currentIndex + 1].id;
      });
    }, 2500); // Time per item
  };

  useEffect(() => {
    startLoop();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleManualClick = (id: string) => {
    setActiveId(id);
    setIsCoreGlowing(false);
    
    // Pause auto-loop temporarily
    isPausedRef.current = true;
    if (timerRef.current) clearInterval(timerRef.current);
    
    // Restart after 5 seconds
    setTimeout(() => {
      isPausedRef.current = false;
      startLoop();
    }, 5000);
  };

  const getIcon = (name: string, className: string) => {
    switch (name) {
      case 'Radio': return <Radio className={className} />;
      case 'PenTool': return <PenTool className={className} />;
      case 'Zap': return <Zap className={className} />;
      case 'LayoutTemplate': return <LayoutTemplate className={className} />;
      default: return <Lightbulb className={className} />;
    }
  };

  const activePoint = valuePoints.find(p => p.id === activeId) || valuePoints[0];

  return (
    <section className="w-full py-20 px-4 md:px-10 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 border-b border-briva-200 pb-4 flex justify-between items-end">
          <div>
            <h3 className="text-briva-500 font-bold text-sm tracking-widest mb-2">CORE VALUES</h3>
            <h2 className="text-4xl md:text-5xl font-black text-briva-900">
              BRIVA <span className="text-briva-500">VALUE</span>
            </h2>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* Left Text Area */}
          <div className="w-full lg:w-1/3 space-y-8">
            <div>
              <h4 className="text-2xl font-bold text-briva-800 mb-4 border-l-4 border-briva-500 pl-4">
                압도적 성과 (Overwhelming Performance)
              </h4>
              <ul className="space-y-4 text-briva-600 leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-briva-500 mt-2 shrink-0"></span>
                  <span><strong>데이터 증명</strong> : 감이 아닌 숫자로 증명하는 성과를 만듭니다.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-briva-500 mt-2 shrink-0"></span>
                  <span><strong>맞춤형 전략</strong> : 업종별/지역별 특성에 맞는 필승 공략법을 제안합니다.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-briva-500 mt-2 shrink-0"></span>
                  <span><strong>진정성</strong> : 클라이언트의 성공이 곧 브리바의 성공이라는 마음으로 임합니다.</span>
                </li>
              </ul>
            </div>

            <div className="bg-briva-50 p-6 rounded-xl border border-briva-100 shadow-sm transition-all duration-300">
              <h5 className="text-lg font-bold text-briva-800 mb-2 flex items-center gap-2">
                {getIcon(activePoint.iconName, "w-5 h-5 text-briva-500")}
                {activePoint.title}
              </h5>
              <p className="text-briva-600 text-sm md:text-base">
                {activePoint.description}
              </p>
            </div>
          </div>

          {/* Right Diagram Area */}
          <div className="w-full lg:w-2/3 flex justify-center items-center py-10">
            <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
              
              {/* Outer Dashed Circle */}
              <div className="absolute inset-0 border-2 border-dashed border-briva-200 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-8 border border-briva-100 rounded-full"></div>

              {/* Center Core */}
              <div 
                className={`
                  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                  w-32 h-32 md:w-40 md:h-40 rounded-full flex flex-col justify-center items-center z-20 
                  transition-all duration-700 ease-in-out border
                  ${isCoreGlowing 
                    ? 'bg-white shadow-[0_0_60px_rgba(14,165,233,0.6)] scale-110 border-briva-300 ring-4 ring-briva-100' 
                    : 'bg-gradient-to-br from-white to-briva-50 shadow-[0_0_40px_rgba(14,165,233,0.2)] border-briva-100'
                  }
                `}
              >
                <span className={`text-xs font-bold tracking-widest mb-1 transition-colors ${isCoreGlowing ? 'text-briva-600' : 'text-briva-400'}`}>THE CORE</span>
                <span className={`text-xl md:text-2xl font-black transition-all ${isCoreGlowing ? 'text-briva-600 scale-110' : 'text-briva-800'}`}>BRIVA</span>
                <span className="text-briva-300 text-[10px] mt-1">AGENCY</span>
                
                {/* Glow Burst effect */}
                <div className={`absolute inset-0 rounded-full bg-briva-400 opacity-0 transition-opacity duration-700 ${isCoreGlowing ? 'animate-ping opacity-20' : ''}`}></div>
              </div>

              {/* Connecting Lines (Decorational) */}
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-briva-100 -z-10"></div>
              <div className="absolute left-1/2 top-0 h-full w-[1px] bg-briva-100 -z-10"></div>

              {/* Orbiting Nodes */}
              {valuePoints.map((point) => {
                let positionClasses = '';
                switch (point.position) {
                  case DiagramPosition.TOP:
                    positionClasses = 'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2';
                    break;
                  case DiagramPosition.BOTTOM:
                    positionClasses = 'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2';
                    break;
                  case DiagramPosition.LEFT:
                    positionClasses = 'left-0 top-1/2 -translate-x-1/2 -translate-y-1/2';
                    break;
                  case DiagramPosition.RIGHT:
                    positionClasses = 'right-0 top-1/2 translate-x-1/2 -translate-y-1/2';
                    break;
                }

                const isActive = activeId === point.id;

                return (
                  <button
                    key={point.id}
                    onClick={() => handleManualClick(point.id)}
                    className={`absolute ${positionClasses} group z-30 transition-all duration-500 focus:outline-none`}
                  >
                    <div className={`
                      w-24 h-24 md:w-32 md:h-32 rounded-full flex flex-col items-center justify-center gap-2 shadow-lg transition-all duration-500
                      ${isActive 
                        ? 'bg-briva-600 text-white scale-110 shadow-briva-500/40 ring-4 ring-briva-100' 
                        : 'bg-white text-briva-400 hover:bg-briva-50 hover:text-briva-600 border border-briva-100'}
                    `}>
                      {getIcon(point.iconName, `w-6 h-6 md:w-8 md:h-8 transition-colors duration-300 ${isActive ? 'text-white' : 'text-briva-400 group-hover:text-briva-600'}`)}
                      <span className="font-bold text-sm md:text-base">{point.title.split(' ')[0]}</span>
                    </div>
                    {/* Floating Label for context */}
                    <span className={`
                      absolute whitespace-nowrap text-xs md:text-sm font-medium tracking-wider transition-opacity duration-300
                      ${point.position === DiagramPosition.TOP ? '-top-8 left-1/2 -translate-x-1/2' : ''}
                      ${point.position === DiagramPosition.BOTTOM ? '-bottom-8 left-1/2 -translate-x-1/2' : ''}
                      ${point.position === DiagramPosition.LEFT ? 'top-1/2 -left-4 -translate-x-full -translate-y-1/2' : ''}
                      ${point.position === DiagramPosition.RIGHT ? 'top-1/2 -right-4 translate-x-full -translate-y-1/2' : ''}
                      ${isActive ? 'text-briva-800 opacity-100' : 'text-briva-300 opacity-0'}
                    `}>
                      {point.title.split(' ')[1]?.replace(/[()]/g, '')}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueDiagram;