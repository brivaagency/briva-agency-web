import React from 'react';
import { FileWarning, Copy, TrendingDown, MessageSquareX, UserX, BarChart } from 'lucide-react';

const PainPoints: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-6 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal-on-scroll">
          <span className="text-briva-500 font-bold tracking-widest text-xs uppercase mb-4 block">Reality Check</span>
          <h2 className="text-2xl md:text-5xl font-black text-briva-950 leading-normal mb-6 word-keep-all">
            마케팅 대행사,<br />
            <span className="text-briva-600">믿고 맡겼다가 후회한 적 있으시죠?</span>
          </h2>
          <p className="text-briva-600 text-lg md:text-xl font-light">
            대표님들의 소중한 예산, 더 이상 낭비하지 마세요.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8 relative z-10">
          {[
            {
              icon: <FileWarning className="w-5 h-5 md:w-8 md:h-8" />,
              title: "계약 후 추가 비용과 족쇄",
              desc: "처음엔 저렴해 보였는데,\n추가 결제 요구에 3개월 의무 계약까지?\n효과도 없는데 해지도 못하고 계신가요?"
            },
            {
              icon: <TrendingDown className="w-5 h-5 md:w-8 md:h-8" />,
              title: "의미 없는 숫자 놀이",
              desc: "매출로 이어지지 않는 가짜 유입,\n보여주기식 리포트에 지치셨나요?\n중요한 건 '노출'이 아니라 '전환'입니다."
            },
            {
              icon: <Copy className="w-5 h-5 md:w-8 md:h-8" />,
              title: "다 똑같은 공장형 디자인",
              desc: "우리 브랜드만의 철학은 무시된 채,\n남들과 똑같은 템플릿에 이름만 바꿔서\n브랜드 이미지를 깎아먹고 있진 않나요?"
            },
            {
              icon: <MessageSquareX className="w-5 h-5 md:w-8 md:h-8" />,
              title: "불통의 벽 (연락 두절)",
              desc: "급할 땐 연락이 안 되고,\n피드백 한 번 받으려면 하루 종일?\n'갑'과 '을'이 바뀐 것 같은 답답함."
            },
            {
              icon: <UserX className="w-5 h-5 md:w-8 md:h-8" />,
              title: "전문성 없는 담당자",
              desc: "상담은 대표가, 실무는 알바생이?\n내 브랜드를 이해하지 못하는\n비전문가에게 맡겨지고 있습니다."
            },
            {
              icon: <BarChart className="w-5 h-5 md:w-8 md:h-8" />,
              title: "개선 없는 반복",
              desc: "성과가 안 나오면 원인을 분석해야 하는데,\n기계적으로 똑같은 포스팅만 반복하며\n예산만 태우고 있지 않나요?"
            }
          ].map((item, idx) => (
            <div key={idx} className={`group p-5 md:p-8 rounded-2xl bg-briva-50 border border-briva-100 hover:border-briva-400 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 reveal-on-scroll ${idx % 3 === 0 ? '' : idx % 3 === 1 ? 'delay-100' : 'delay-200'}`}>
              <div className="bg-white w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center text-briva-500 mb-3 md:mb-6 shadow-sm group-hover:bg-briva-500 group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <h3 className="text-sm md:text-xl font-bold text-briva-900 mb-2 md:mb-4 word-keep-all">{item.title}</h3>
              <p className="text-briva-600 whitespace-pre-line leading-relaxed text-xs md:text-sm break-keep">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;