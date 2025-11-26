import React from 'react';
import { AlertTriangle, Ghost, XCircle, Copy, UserX, MessageSquareWarning } from 'lucide-react';

const PainPoints: React.FC = () => {
  const points = [
    {
      icon: <FileWarningIcon />,
      title: "과도한 위약금",
      desc: "3개월 약정이라는 덫. 해지 시 과도한 위약금을 요구합니다."
    },
    {
      icon: <Ghost className="w-5 h-5" />,
      title: "가짜 성과 보고",
      desc: "매출은 그대로인데 유입만? 봇(Bot)을 이용한 허수입니다."
    },
    {
      icon: <XCircle className="w-5 h-5" />,
      title: "일방적 연락 두절",
      desc: "입금 전엔 간 쓸개 다 줄 듯 하더니, 계약 후엔 묵묵부답."
    },
    {
      icon: <Copy className="w-5 h-5" />,
      title: "공장형 템플릿",
      desc: "우리 브랜드 철학 없이, 남들과 똑같은 디자인을 찍어냅니다."
    },
    {
      icon: <UserX className="w-5 h-5" />,
      title: "비전문가 관리",
      desc: "상담은 대표가, 실무는 알바생이? 브랜드를 모르는 초보."
    },
    {
      icon: <MessageSquareWarning className="w-5 h-5" />,
      title: "기계적 반복",
      desc: "분석도 개선도 없이, 매달 똑같은 포스팅만 반복합니다."
    }
  ];

  return (
    <section className="py-20 px-4 bg-slate-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 reveal-on-scroll">
          <span className="text-red-500 font-bold tracking-widest text-xs uppercase mb-3 block">Reality Check</span>
          <h2 className="text-2xl md:text-4xl font-black text-slate-900 leading-snug word-keep-all">
            마케팅 대행사,<br/>
            <span className="text-slate-400">혹시 이런 경험 있으신가요?</span>
          </h2>
        </div>

        {/* Desktop: Grid / Mobile: Zigzag Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {points.map((item, idx) => {
            // Mobile Zigzag Logic
            const isEven = idx % 2 === 0;
            
            return (
              <div 
                key={idx} 
                className={`
                  flex flex-col 
                  ${/* Mobile alignment */ isEven ? 'items-start' : 'items-end'} 
                  md:items-stretch /* Reset on desktop */
                  reveal-on-scroll
                  ${idx % 3 === 0 ? '' : idx % 3 === 1 ? 'delay-100' : 'delay-200'}
                `}
              >
                <div className={`
                  relative bg-white p-6 rounded-2xl shadow-sm border border-slate-200 
                  w-[90%] md:w-full 
                  hover:border-red-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300
                  group
                `}>
                  {/* Decorative "Message Bubble" Tail for Mobile Reality feel but pro */}
                  <div className={`
                    md:hidden absolute top-6 w-3 h-3 bg-white border-b border-l border-slate-200 transform rotate-45
                    ${isEven ? '-left-[7px]' : '-right-[7px] border-l-0 border-b-0 border-t border-r'}
                  `}></div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-red-50 text-red-500 flex items-center justify-center shrink-0 group-hover:bg-red-500 group-hover:text-white transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 mb-1 text-lg">{item.title}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed word-keep-all">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Helper component for icon
const FileWarningIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M12 13v4"/><path d="M12 17h.01"/></svg>
);

export default PainPoints;