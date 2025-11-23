import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Sparkles, Loader2, ArrowRight, MapPin, Briefcase, Store } from 'lucide-react';

interface AiMarketingToolProps {
  onApply: (data: string) => void;
}

const AiMarketingTool: React.FC<AiMarketingToolProps> = ({ onApply }) => {
  const [businessName, setBusinessName] = useState('');
  const [industry, setIndustry] = useState('');
  const [region, setRegion] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{slogan: string, mainKeyword: string, subKeyword: string, rationale: string} | null>(null);
  const [error, setError] = useState<string | null>(null);

  const generatePlan = async () => {
    if (!businessName || !industry || !region) {
      setError("모든 정보를 입력해주세요.");
      return;
    }
    if (!process.env.API_KEY) {
      setError("API Key is missing.");
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const prompt = `
        You are a top-tier SEO marketing strategist at 'BRIVA Agency'.
        Analyze the client info:
        - Name: ${businessName}
        - Industry: ${industry} (User input, e.g., 'Dermatology', 'Chicken Shop')
        - Region: ${region}

        Task:
        1. **Main Keyword Strategy (CRITICAL)**: Identify the keyword with the **HIGHEST probable monthly search volume** on Naver (Korean Search Engine) for this specific location and industry.
           - Logic: Combine Region + Industry/Category.
           - Example 1: If Region is "Daegu" and Industry is "Chicken", the highest volume keyword is likely "대구맛집" (Daegu Tasty Place) or "대구치킨" (Daegu Chicken), NOT just "Chicken".
           - Example 2: If Region is "Gangnam" and Industry is "Dermatology", "강남피부과" (Gangnam Dermatology) is the target.
           - Ensure the keyword is a high-traffic "Head Keyword".
        2. **Sub Keyword Strategy**: Identify a specific, high-conversion niche keyword (e.g., "Gangnam Acne Treatment", "Daegu Old-fashioned Chicken").
        3. **Slogan**: Create 1 catchy, professional slogan.
        4. **Rationale**: Brief explanation (1 sentence) on why this keyword has high volume.

        Return ONLY raw JSON:
        {
          "mainKeyword": "...",
          "subKeyword": "...",
          "slogan": "...",
          "rationale": "..."
        }
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
      });

      const text = response.text;
      if (text) {
        const cleanJson = text.replace(/```json/g, '').replace(/```/g, '').trim();
        const data = JSON.parse(cleanJson);
        setResult(data);
      } else {
        setError("결과를 생성하지 못했습니다.");
      }

    } catch (err) {
      console.error(err);
      setError("AI 분석 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  const handleApplyClick = () => {
    if (result) {
      // Slogan excluded from the message as requested
      const message = `[AI 마케팅 진단 결과]
• 상호명: ${businessName}
• 업종: ${industry} / 지역: ${region}
--------------------------------
• 추천 메인 키워드: ${result.mainKeyword}
• 추천 서브 키워드: ${result.subKeyword}
--------------------------------
위 내용을 바탕으로 상세 상담을 신청합니다.`;
      onApply(message);
    }
  };

  return (
    <section className="w-full py-20 px-4 md:px-10 bg-briva-100">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full shadow-sm border border-briva-200 mb-4">
            <Sparkles className="w-4 h-4 text-briva-500" />
            <span className="text-xs font-bold text-briva-600 tracking-wider">BRIVA AI LAB</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-briva-900 mb-3">AI 맞춤 키워드 & 슬로건 추출기</h2>
          <p className="text-briva-600">
            우리 매장에 딱 맞는 <span className="font-bold text-briva-800">월간 조회수 높은 키워드</span>와 슬로건을 무료로 진단받으세요.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 border border-briva-200">
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-briva-500 flex items-center gap-1"><Store size={14}/> 상호명</label>
              <input
                type="text"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                placeholder="예: 브리바 카페"
                className="w-full px-4 py-3 rounded-lg border border-briva-200 bg-briva-50 focus:ring-2 focus:ring-briva-500 outline-none"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-briva-500 flex items-center gap-1"><Briefcase size={14}/> 업종</label>
              <input
                type="text"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                placeholder="예: 피부과, 치킨집"
                className="w-full px-4 py-3 rounded-lg border border-briva-200 bg-briva-50 focus:ring-2 focus:ring-briva-500 outline-none"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-briva-500 flex items-center gap-1"><MapPin size={14}/> 지역</label>
              <input
                type="text"
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                placeholder="예: 서울 강남구, 충북 청주"
                className="w-full px-4 py-3 rounded-lg border border-briva-200 bg-briva-50 focus:ring-2 focus:ring-briva-500 outline-none"
              />
            </div>
          </div>

          <button
            onClick={generatePlan}
            disabled={loading}
            className="w-full py-4 bg-briva-900 text-white font-bold rounded-xl hover:bg-briva-800 disabled:opacity-50 transition-all flex items-center justify-center gap-2 mb-6"
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <><Sparkles className="w-5 h-5" /> 10초만에 키워드&슬로건 생성하기</>}
          </button>

          {error && <div className="text-red-500 text-center text-sm mb-4">{error}</div>}

          {result && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-gradient-to-br from-briva-50 to-white border border-briva-200 rounded-xl p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Sparkles size={100} />
                </div>
                
                <h3 className="text-lg font-bold text-briva-900 mb-6 border-b border-briva-100 pb-2">
                  🎉 {businessName}님을 위한 맞춤 전략
                </h3>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-briva-100">
                    <span className="text-xs text-briva-500 font-bold block mb-1">🔥 추천 메인 키워드</span>
                    <span className="text-xl font-black text-briva-800">{result.mainKeyword}</span>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-briva-100">
                    <span className="text-xs text-briva-500 font-bold block mb-1">🎯 추천 서브 키워드</span>
                    <span className="text-xl font-black text-briva-800">{result.subKeyword}</span>
                  </div>
                </div>

                <div className="bg-briva-900 text-white p-6 rounded-lg shadow-md mb-6 text-center">
                  <span className="text-xs text-briva-400 block mb-2 uppercase tracking-widest">Recommended Slogan</span>
                  <p className="text-2xl md:text-3xl font-black leading-tight">"{result.slogan}"</p>
                  <p className="text-sm text-briva-300 mt-4 border-t border-briva-700 pt-3">💡 {result.rationale}</p>
                </div>

                <div className="flex justify-center">
                  <button
                    onClick={handleApplyClick}
                    className="flex items-center gap-2 px-8 py-3 bg-briva-600 hover:bg-briva-500 text-white font-bold rounded-full shadow-lg shadow-briva-500/30 transition-all hover:scale-105"
                  >
                    이 내용으로 상담 신청하기 <ArrowRight size={18} />
                  </button>
                </div>
                <p className="text-center text-xs text-briva-400 mt-3">
                  * 위 버튼을 누르면 진단 내용이 상담 신청서에 자동 입력됩니다. (슬로건 제외)
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AiMarketingTool;