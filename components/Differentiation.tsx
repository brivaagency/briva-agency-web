import React from 'react';
import { Palette, ShieldCheck, UserCheck, BookOpen, Map, Clock } from 'lucide-react';

const Differentiation: React.FC = () => {
  const items = [
    {
      icon: <ShieldCheck className="w-5 h-5" strokeWidth={2} />,
      title: "위약금 제로",
      desc: "성과로 증명하여 자발적 재계약 유도"
    },
    {
      icon: <Palette className="w-5 h-5" strokeWidth={2} />,
      title: "공장형 NO",
      desc: "브랜드 무드 맞춤 100% 디자인"
    },
    {
      icon: <UserCheck className="w-5 h-5" strokeWidth={2} />,
      title: "1:1 직접 소통",
      desc: "영업사원 없이 마케터 직접 관리"
    },
    {
      icon: <BookOpen className="w-5 h-5" strokeWidth={2} />,
      title: "선행 스터디",
      desc: "업종 트렌드 완벽 학습 후 기획"
    },
    {
      icon: <Map className="w-5 h-5" strokeWidth={2} />,
      title: "현장 답사",
      desc: "매장 분위기와 상권 철저 분석"
    },
    {
      icon: <Clock className="w-5 h-5" strokeWidth={2} />,
      title: "주말 소통",
      desc: "이슈 발생 시 즉각 대응 시스템"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-white relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 md:mb-16 reveal-on-scroll">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="h-px w-8 bg-orange-500"></span>
            <span className="text-orange-600 font-bold tracking-widest text-xs uppercase">Why BRIVA?</span>
            <span className="h-px w-8 bg-orange-500"></span>
          </div>
          <h2 className="text-2xl md:text-5xl font-black text-briva-950 leading-tight">
            브리바는 다릅니다
          </h2>
          <p className="text-briva-600 text-sm md:text-lg mt-3">
            안심할 수 있는 <strong>확실한 안전장치</strong>
          </p>
        </div>

        {/* 
           Mobile: Grid 2 cols -> Drastically reduces height
           Desktop: Grid 3 cols
        */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8">
          {items.map((item, idx) => (
            <div 
              key={idx} 
              className="group reveal-on-scroll"
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              <div className="bg-white p-4 md:p-8 rounded-2xl md:rounded-3xl border border-briva-100 shadow-sm hover:border-orange-200 hover:shadow-lg transition-all duration-300 h-full flex flex-col items-center text-center">
                
                {/* Icon */}
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center shadow-sm mb-3 md:mb-4 group-hover:bg-orange-500 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                  {item.icon}
                </div>

                <h3 className="text-sm md:text-xl font-bold text-briva-900 mb-1 md:mb-2 word-keep-all">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-slate-500 leading-snug md:leading-relaxed word-keep-all break-keep">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentiation;