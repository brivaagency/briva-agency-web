import React from 'react';
import { MessageSquare, Search, FileText, CheckSquare, Rocket, BarChart2, ChevronRight, ArrowDown } from 'lucide-react';

const steps = [
  {
    icon: <MessageSquare className="w-5 h-5 md:w-6 md:h-6" />,
    title: "상담 문의",
    desc: "브랜드 현황 파악\n및 목표 설정"
  },
  {
    icon: <Search className="w-5 h-5 md:w-6 md:h-6" />,
    title: "분석 및 답사",
    desc: "경쟁사·상권 분석\n현장 답사"
  },
  {
    icon: <FileText className="w-5 h-5 md:w-6 md:h-6" />,
    title: "전략 제안",
    desc: "채널별 맞춤\n운영 전략 수립"
  },
  {
    icon: <CheckSquare className="w-5 h-5 md:w-6 md:h-6" />,
    title: "계약 체결",
    desc: "합리적 견적\n계약서 작성"
  },
  {
    icon: <Rocket className="w-5 h-5 md:w-6 md:h-6" />,
    title: "실행 및 운영",
    desc: "콘텐츠 제작\n마케팅 가동"
  },
  {
    icon: <BarChart2 className="w-5 h-5 md:w-6 md:h-6" />,
    title: "성과 보고",
    desc: "월별 리포트\n인사이트 도출"
  }
];

const ProcessSteps: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-briva-50 to-white border-t border-briva-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 reveal-on-scroll">
          <span className="text-briva-500 font-bold tracking-widest text-xs uppercase mb-3 block">Work Process</span>
          <h2 className="text-2xl md:text-4xl font-black text-briva-900">
            체계적인 <span className="text-briva-600">6단계 프로세스</span>
          </h2>
          <p className="text-briva-600 mt-3 text-sm md:text-base">복잡한 마케팅, 브리바가 A부터 Z까지 책임집니다.</p>
        </div>

        {/* Desktop: Horizontal Flex / Mobile: Grid 2 cols */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-8 left-0 w-full h-0.5 bg-briva-100 -z-0 transform translate-y-4"></div>

          <div className="grid grid-cols-2 lg:grid-cols-6 gap-3 md:gap-4 lg:gap-0">
            {steps.map((step, index) => {
              const delayClass = index === 0 ? '' : index === 1 ? 'delay-100' : index === 2 ? 'delay-200' : index === 3 ? 'delay-300' : index === 4 ? 'delay-400' : 'delay-500';
              
              return (
                <div key={index} className={`relative group reveal-on-scroll ${delayClass} flex flex-col items-center`}>
                  
                  {/* Step Circle */}
                  <div className="relative z-10 mb-4 transition-transform duration-300 group-hover:scale-110">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full border-4 border-briva-50 shadow-sm flex items-center justify-center group-hover:border-briva-200 group-hover:shadow-md transition-all">
                       <span className="absolute -top-2 -right-2 w-6 h-6 bg-briva-600 text-white text-[10px] font-bold flex items-center justify-center rounded-full shadow-sm z-20">
                         {index + 1}
                       </span>
                       <div className="text-briva-400 group-hover:text-briva-600 transition-colors">
                         {step.icon}
                       </div>
                    </div>
                    
                    {/* Mobile Arrow (Right for odd, Down for even/end of row logic usually but simpler to just point next) */}
                    {/* We will hide arrows on mobile grid to avoid clutter, focus on numbers */}
                  </div>

                  {/* Desktop Connector Arrow */}
                  {index !== steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 -right-1/2 transform translate-x-1/2 translate-y-2 z-0 text-briva-200">
                      <ChevronRight size={20} />
                    </div>
                  )}

                  {/* Text Content */}
                  <div className="text-center px-1">
                    <h3 className="text-sm md:text-base font-bold text-briva-900 mb-1">{step.title}</h3>
                    <p className="text-[10px] md:text-xs text-briva-500 whitespace-pre-line leading-snug">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;