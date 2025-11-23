import React from 'react';
import { FileWarning, Copy, TrendingDown, MessageSquareX, UserX, BarChart } from 'lucide-react';

const PainPoints: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-6 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal-on-scroll">
          <span className="text-briva-500 font-bold tracking-widest text-xs uppercase mb-4 block">Reality Check</span>
          <h2 className="text-2xl md:text-5xl font-black text-slate-900 leading-normal mb-6 word-keep-all">
            마케팅 대행사,<br />
            <span className="text-briva-600">믿고 맡겼다가 후회한 적 있으시죠?</span>
          </h2>
          <p className="text-slate-500 text-lg md:text-xl font-light">
            대표님들의 소중한 예산, 더 이상 낭비하지 마세요.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 relative z-10">
          {[
            {
              icon: <FileWarning className="w-6 h-6 md:w-8 md:h-8" />,
              title: "과도한 위약금·장기 계약",
              desc: "저렴한 척 유인해 3개월 약정을 걸고,\n해지 시 과도한 위약금을 요구합니다."
            },
            {
              icon: <TrendingDown className="w-6 h-6 md:w-8 md:h-8" />,
              title: "보여주기식 가짜 성과",
              desc: "매출과 무관한 트래픽만 늘리고,\n'노출 잘 되고 있다'며 희망 고문합니다."
            },
            {
              icon: <Copy className="w-6 h-6 md:w-8 md:h-8" />,
              title: "공장형 템플릿 복사",
              desc: "우리 브랜드만의 철학 없이,\n남들과 똑같은 디자인을 찍어냅니다."
            },
            {
              icon: <MessageSquareX className="w-6 h-6 md:w-8 md:h-8" />,
              title: "일방적인 연락 두절",
              desc: "계약 전엔 간 쓸개 다 빼줄 듯하다가,\n입금 후엔 피드백이 하루 종일 걸립니다."
            },
            {
              icon: <UserX className="w-6 h-6 md:w-8 md:h-8" />,
              title: "비전문가(알바) 관리",
              desc: "상담은 대표가, 실무는 알바생이?\n내 브랜드를 이해 못하는 초보가 맡습니다."
            },
            {
              icon: <BarChart className="w-6 h-6 md:w-8 md:h-8" />,
              title: "기계적인 단순 반복",
              desc: "성과 분석이나 개선 제안 없이,\n매달 똑같은 포스팅만 반복합니다."
            }
          ].map((item, idx) => (
            <div key={idx} className={`group p-6 md:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-briva-200 hover:shadow-xl hover:shadow-briva-100/50 transition-all duration-300 hover:-translate-y-2 reveal-on-scroll ${idx % 3 === 0 ? '' : idx % 3 === 1 ? 'delay-100' : 'delay-200'}`}>
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-slate-50 text-slate-400 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-briva-50 group-hover:text-briva-500 transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-base md:text-xl font-bold text-slate-800 mb-2 md:mb-3 word-keep-all group-hover:text-briva-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed break-keep word-keep-all">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;