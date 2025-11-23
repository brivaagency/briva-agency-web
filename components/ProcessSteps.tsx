import React from 'react';
import { MessageSquare, Search, FileText, CheckSquare, Rocket, BarChart2 } from 'lucide-react';

const steps = [
  {
    icon: <MessageSquare size={24} />,
    title: "1. 상담 문의",
    desc: "브랜드 현황 파악 및\n목표 설정"
  },
  {
    icon: <Search size={24} />,
    title: "2. 시장 분석 및 답사",
    desc: "경쟁사/상권 분석 및\n현장 답사·사전 미팅"
  },
  {
    icon: <FileText size={24} />,
    title: "3. 전략 제안",
    desc: "채널별 맞춤 운영\n전략 수립"
  },
  {
    icon: <CheckSquare size={24} />,
    title: "4. 계약 체결",
    desc: "합리적인 견적 및\n계약서 작성"
  },
  {
    icon: <Rocket size={24} />,
    title: "5. 실행 및 운영",
    desc: "콘텐츠 제작 및\n마케팅 채널 가동"
  },
  {
    icon: <BarChart2 size={24} />,
    title: "6. 성과 보고",
    desc: "월별 리포트 제공 및\n인사이트 도출"
  }
];

const ProcessSteps: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-briva-50 border-t border-briva-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal-on-scroll">
          <span className="text-briva-500 font-bold tracking-widest text-xs uppercase mb-4 block">Work Process</span>
          <h2 className="text-3xl md:text-4xl font-black text-briva-900">
            체계적인 <span className="text-briva-600">6단계 프로세스</span>
          </h2>
          <p className="text-briva-600 mt-4">복잡한 마케팅, 브리바가 A부터 Z까지 책임집니다.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {steps.map((step, index) => {
            // Calculate delay based on index for staggered animation
            const delayClass = index === 0 ? '' : index === 1 ? 'delay-100' : index === 2 ? 'delay-200' : index === 3 ? 'delay-300' : index === 4 ? 'delay-400' : 'delay-500';
            
            return (
              <div key={index} className={`relative group reveal-on-scroll ${delayClass}`}>
                <div className="bg-white p-6 rounded-2xl border border-briva-100 shadow-sm h-full flex flex-col items-center text-center transition-all duration-300 hover:shadow-md hover:border-briva-300 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-briva-100 text-briva-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-briva-600 group-hover:text-white transition-colors">
                    {step.icon}
                  </div>
                  <h3 className="font-bold text-briva-900 mb-2">{step.title}</h3>
                  <p className="text-xs text-briva-500 whitespace-pre-line leading-relaxed">{step.desc}</p>
                </div>
                
                {/* Arrow for desktop, hidden on last item */}
                {index !== steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10 text-briva-300">
                    →
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;