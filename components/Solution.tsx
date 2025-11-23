import React from 'react';
import { Search, Instagram, Plus, Megaphone, Map, MessageSquare, ShieldCheck, TrendingUp } from 'lucide-react';

const Solution: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-briva-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-briva-600 rounded-full blur-[120px] opacity-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-briva-400 rounded-full blur-[100px] opacity-10 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20 reveal-on-scroll">
          <span className="text-briva-400 font-bold tracking-widest text-xs uppercase mb-4 block">Our Solution</span>
          <h2 className="text-3xl md:text-5xl font-black leading-tight mb-8">
            단순 노출이 아닌,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-briva-200 to-briva-400">
              '살아있는 브랜드'
            </span>를 만듭니다.
          </h2>
          <p className="text-briva-200 text-lg max-w-2xl mx-auto font-light mb-6">
            브리바는 마케팅의 본질에 집중합니다. <br/>
            고객이 당신의 브랜드를 기억하고, 찾아오게 만드는 <strong>네이버 & 인스타그램 올인원 브랜딩</strong>.
          </p>
          <div className="inline-block bg-briva-800/80 border border-briva-500 px-6 py-2 rounded-full text-sm text-briva-100 animate-pulse">
            💡 예산에 맞게 <strong>개별 서비스만 선택</strong>하여 진행 가능합니다.
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Naver Section */}
          <div className="relative group rounded-3xl overflow-hidden bg-briva-800 border border-briva-700 hover:border-briva-500 transition-all duration-500 reveal-on-scroll">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="p-10 md:p-14">
              <div className="w-14 h-14 bg-[#03C75A] text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-green-900/50">
                <Search size={32} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">네이버 토탈 브랜딩</h3>
              <p className="text-briva-300 mb-8 leading-relaxed">
                한국인이 가장 많이 쓰는 검색엔진, 네이버.<br/>
                검색부터 구매 결정까지 이어지는 완벽한 동선을 설계합니다.
              </p>
              <ul className="space-y-6 text-sm text-briva-100">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#03C75A]/20 text-[#03C75A] flex items-center justify-center text-xs font-bold shrink-0">01</span>
                  <div>
                    <strong className="block text-white mb-1">브랜드 블로그 운영</strong>
                    <span className="text-briva-400">단순 상위노출이 아닌, 신뢰도를 높여 문의를 부르는 기획형 원고 작성</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#03C75A]/20 text-[#03C75A] flex items-center justify-center text-xs font-bold shrink-0">02</span>
                  <div>
                    <strong className="block text-white mb-1">플레이스 최적화 (SEO)</strong>
                    <span className="text-briva-400">우리 매장이 지역 맛집/명소로 검색되도록 지도 순위 및 정보 최적화</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#03C75A]/20 text-[#03C75A] flex items-center justify-center text-xs font-bold shrink-0">03</span>
                  <div>
                    <strong className="block text-white mb-1">프리미엄 체험단</strong>
                    <span className="text-briva-400">단순 배포가 아닌, 구매 전환율이 높은 인플루언서 매칭 및 가이드</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#03C75A]/20 text-[#03C75A] flex items-center justify-center text-xs font-bold shrink-0">04</span>
                  <div>
                    <strong className="block text-white mb-1">소통 및 평판 관리</strong>
                    <span className="text-briva-400">리뷰 답글 관리 및 악성 리뷰 전문 대응을 통한 평점 및 브랜드 이미지 관리</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Instagram Section */}
          <div className="relative group rounded-3xl overflow-hidden bg-briva-800 border border-briva-700 hover:border-briva-500 transition-all duration-500 reveal-on-scroll delay-200">
             <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="p-10 md:p-14">
              <div className="w-14 h-14 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-pink-900/50">
                <Instagram size={32} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">인스타그램 브랜딩</h3>
              <p className="text-briva-300 mb-8 leading-relaxed">
                브랜드의 감성과 매력을 시각적으로 전달합니다.<br/>
                잠재 고객의 마음을 사로잡는 트렌디한 콘텐츠를 기획합니다.
              </p>
              <ul className="space-y-6 text-sm text-briva-100">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-pink-500/20 text-pink-500 flex items-center justify-center text-xs font-bold shrink-0">01</span>
                  <div>
                    <strong className="block text-white mb-1">브랜드 공식 계정 운영</strong>
                    <span className="text-briva-400">브랜드 무드에 맞는 톤앤매너 디자인 및 피드 구성</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-pink-500/20 text-pink-500 flex items-center justify-center text-xs font-bold shrink-0">02</span>
                  <div>
                    <strong className="block text-white mb-1">계정 최적화</strong>
                    <span className="text-briva-400">탐색 탭 노출 및 타겟 고객 도달률을 높이는 알고리즘 최적화</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-pink-500/20 text-pink-500 flex items-center justify-center text-xs font-bold shrink-0">03</span>
                  <div>
                    <strong className="block text-white mb-1">숏폼(릴스) 기획/제작</strong>
                    <span className="text-briva-400">폭발적인 도달을 위한 숏폼 트렌드 분석 및 바이럴 영상 기획</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-pink-500/20 text-pink-500 flex items-center justify-center text-xs font-bold shrink-0">04</span>
                  <div>
                    <strong className="block text-white mb-1">인기게시물 상위노출</strong>
                    <span className="text-briva-400">주요 타겟 해시태그 검색 시 인기게시물 탭 상위 점유로 유입 극대화</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Optional Services - Growth Booster */}
        <div className="border-t border-briva-800 pt-16 reveal-on-scroll">
          <div className="flex items-center gap-2 mb-8 justify-center md:justify-start">
            <Plus className="text-briva-500" size={20} />
            <h4 className="text-xl font-bold tracking-tight">Growth Boosters (Option)</h4>
            <span className="text-xs text-briva-400 bg-briva-800 px-2 py-1 rounded ml-2">필요 시 추가 제안</span>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-briva-800/50 p-6 rounded-xl border border-briva-700/50 text-center hover:bg-briva-800 transition-colors">
              <MessageSquare className="w-8 h-8 text-briva-400 mx-auto mb-3" />
              <h5 className="font-bold mb-1">지역 카페 바이럴</h5>
              <p className="text-xs text-briva-500">지역 커뮤니티 침투 마케팅</p>
            </div>
            <div className="bg-briva-800/50 p-6 rounded-xl border border-briva-700/50 text-center hover:bg-briva-800 transition-colors">
              <Megaphone className="w-8 h-8 text-briva-400 mx-auto mb-3" />
              <h5 className="font-bold mb-1">언론 기사 배포</h5>
              <p className="text-xs text-briva-500">공신력 확보 및 브랜드 이슈화</p>
            </div>
            <div className="bg-briva-800/50 p-6 rounded-xl border border-briva-700/50 text-center hover:bg-briva-800 transition-colors">
              <Search className="w-8 h-8 text-briva-400 mx-auto mb-3" />
              <h5 className="font-bold mb-1">최적화 블로그 배포</h5>
              <p className="text-xs text-briva-500">대량 키워드 장악</p>
            </div>
            <div className="bg-briva-800/50 p-6 rounded-xl border border-briva-700/50 text-center hover:bg-briva-800 transition-colors">
              <Map className="w-8 h-8 text-briva-400 mx-auto mb-3" />
              <h5 className="font-bold mb-1">카카오 채널</h5>
              <p className="text-xs text-briva-500">CRM 마케팅 및 재구매 유도</p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center reveal-on-scroll">
          <p className="text-xl font-bold mb-6">"기획은 날카롭게. 실행은 거침없이."</p>
        </div>
      </div>
    </section>
  );
};

export default Solution;