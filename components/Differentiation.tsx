import React from 'react';
import { Palette, ShieldCheck, UserCheck, BookOpen, Map, Clock } from 'lucide-react';

const Differentiation: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-6 bg-gradient-to-b from-briva-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between mb-16 gap-8 reveal-on-scroll text-center lg:text-left">
          <div className="w-full lg:w-auto flex flex-col items-center lg:items-start">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
              <span className="h-px w-10 bg-orange-500"></span>
              <span className="text-orange-600 font-bold tracking-widest text-xs uppercase">Why BRIVA?</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-briva-950 leading-tight text-center lg:text-left">
              불안한 마케팅 시장,<br />
              <span className="relative inline-block">
                <span className="relative z-10">브리바는 다릅니다.</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-orange-200/50 -z-0"></span>
              </span>
            </h2>
          </div>
          <p className="text-briva-600 text-lg max-w-md leading-relaxed text-center lg:text-left">
            추상적인 "잘해드리겠습니다"가 아닌,<br/>
            안심할 수 있는 <strong>확실한 안전장치</strong>를 약속합니다.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
          {/* Hook 1: No Lock-in */}
          <div className="group bg-white p-5 md:p-8 rounded-[2rem] shadow-sm border border-briva-100 hover:border-orange-200 transition-all duration-300 hover:-translate-y-1 reveal-on-scroll">
            <div className="w-10 h-10 md:w-14 md:h-14 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-3 md:mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
              <ShieldCheck className="w-5 h-5 md:w-7 md:h-7" strokeWidth={1.5} />
            </div>
            <h3 className="text-sm md:text-xl font-bold text-briva-900 mb-2 md:mb-3 word-keep-all">
              위약금 없는<br/>
              <span className="text-orange-600">단기 계약 원칙</span>
            </h3>
            <p className="text-briva-600 leading-relaxed text-xs md:text-sm break-keep">
              의무 약정 강요 없이, <strong>매달 성과로 증명</strong>하여 자발적인 재계약을 이끌어냅니다.
            </p>
          </div>

          {/* Hook 2: Custom Content */}
          <div className="group bg-white p-5 md:p-8 rounded-[2rem] shadow-sm border border-briva-100 hover:border-orange-200 transition-all duration-300 hover:-translate-y-1 reveal-on-scroll delay-100">
            <div className="w-10 h-10 md:w-14 md:h-14 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-3 md:mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
              <Palette className="w-5 h-5 md:w-7 md:h-7" strokeWidth={1.5} />
            </div>
            <h3 className="text-sm md:text-xl font-bold text-briva-900 mb-2 md:mb-3 word-keep-all">
              공장형<br/>
              <span className="text-orange-600">템플릿 디자인 NO</span>
            </h3>
            <p className="text-briva-600 leading-relaxed text-xs md:text-sm break-keep">
              공장형 디자인이 아닌, 브랜드 무드에 맞춘 <strong>100% 맞춤 기획 콘텐츠</strong>로 가치를 높입니다.
            </p>
          </div>

          {/* Hook 3: Direct Communication */}
          <div className="group bg-white p-5 md:p-8 rounded-[2rem] shadow-sm border border-briva-100 hover:border-orange-200 transition-all duration-300 hover:-translate-y-1 reveal-on-scroll delay-200">
            <div className="w-10 h-10 md:w-14 md:h-14 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-3 md:mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
              <UserCheck className="w-5 h-5 md:w-7 md:h-7" strokeWidth={1.5} />
            </div>
            <h3 className="text-sm md:text-xl font-bold text-briva-900 mb-2 md:mb-3 word-keep-all">
              영업사원 없는<br/>
              <span className="text-orange-600">실무자 1:1 소통</span>
            </h3>
            <p className="text-briva-600 leading-relaxed text-xs md:text-sm break-keep">
              영업사원 없이, 내 브랜드를 기획하는 <strong>전문 마케터가 직접 소통</strong>하고 관리합니다.
            </p>
          </div>

          {/* Hook 4: Industry Study */}
          <div className="group bg-white p-5 md:p-8 rounded-[2rem] shadow-sm border border-briva-100 hover:border-orange-200 transition-all duration-300 hover:-translate-y-1 reveal-on-scroll">
            <div className="w-10 h-10 md:w-14 md:h-14 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-3 md:mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
              <BookOpen className="w-5 h-5 md:w-7 md:h-7" strokeWidth={1.5} />
            </div>
            <h3 className="text-sm md:text-xl font-bold text-briva-900 mb-2 md:mb-3 word-keep-all">
              마케팅 시작 전<br/>
              <span className="text-orange-600">선행 업종 스터디</span>
            </h3>
            <p className="text-briva-600 leading-relaxed text-xs md:text-sm break-keep">
              마케팅 집행 전, 업종 전문 용어와 트렌드를 <strong>완벽히 학습한 후 기획</strong>에 들어갑니다.
            </p>
          </div>

           {/* Hook 5: On-site Visit */}
           <div className="group bg-white p-5 md:p-8 rounded-[2rem] shadow-sm border border-briva-100 hover:border-orange-200 transition-all duration-300 hover:-translate-y-1 reveal-on-scroll delay-100">
            <div className="w-10 h-10 md:w-14 md:h-14 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-3 md:mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
              <Map className="w-5 h-5 md:w-7 md:h-7" strokeWidth={1.5} />
            </div>
            <h3 className="text-sm md:text-xl font-bold text-briva-900 mb-2 md:mb-3 word-keep-all">
              책상 앞이 아닌<br/>
              <span className="text-orange-600">현장 답사 필수</span>
            </h3>
            <p className="text-briva-600 leading-relaxed text-xs md:text-sm break-keep">
              <strong>직접 매장을 방문</strong>하여 분위기와 상권을 분석한 뒤, 생생함이 담긴 콘텐츠를 기획합니다.
            </p>
          </div>

          {/* Hook 6: Weekend Communication */}
          <div className="group bg-white p-5 md:p-8 rounded-[2rem] shadow-sm border border-briva-100 hover:border-orange-200 transition-all duration-300 hover:-translate-y-1 reveal-on-scroll delay-200">
            <div className="w-10 h-10 md:w-14 md:h-14 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-3 md:mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
              <Clock className="w-5 h-5 md:w-7 md:h-7" strokeWidth={1.5} />
            </div>
            <h3 className="text-sm md:text-xl font-bold text-briva-900 mb-2 md:mb-3 word-keep-all">
              답답함 없는<br/>
              <span className="text-orange-600">주말/야간 소통</span>
            </h3>
            <p className="text-briva-600 leading-relaxed text-xs md:text-sm break-keep">
              이슈 발생 시 즉각 대응할 수 있도록, 주말/야간에도 <strong>항시 소통 채널</strong>을 열어둡니다.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Differentiation;