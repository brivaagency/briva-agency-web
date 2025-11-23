
import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

interface ConsultationProps {
  initialMessage?: string;
}

const budgetOptions = [
  "100만원 이하",
  "100~200만원",
  "200~300만원",
  "300~500만원",
  "500~700만원",
  "700~1000만원",
  "1000만원 이상"
];

const Consultation: React.FC<ConsultationProps> = ({ initialMessage }) => {
  const [submitted, setSubmitted] = useState(false);
  
  // Form States
  const [companyName, setCompanyName] = useState(''); 
  const [managerName, setManagerName] = useState(''); // Changed from contactName to managerName
  const [phone, setPhone] = useState('');
  const [channels, setChannels] = useState<string[]>([]);
  const [budget, setBudget] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (initialMessage) {
      setMessage(initialMessage);
    }
  }, [initialMessage]);

  const handleChannelChange = (channel: string) => {
    setChannels(prev => 
      prev.includes(channel) 
        ? prev.filter(c => c !== channel) 
        : [...prev, channel]
    );
  };

  // Auto-hyphenation for phone number
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/[^0-9]/g, '');
    let formattedValue = rawValue;

    if (rawValue.length > 3 && rawValue.length <= 7) {
      formattedValue = `${rawValue.slice(0, 3)}-${rawValue.slice(3)}`;
    } else if (rawValue.length > 7) {
      formattedValue = `${rawValue.slice(0, 3)}-${rawValue.slice(3, 7)}-${rawValue.slice(7, 11)}`;
    }

    // Limit to typical max length (010-1234-5678 is 13 chars)
    if (formattedValue.length <= 13) {
      setPhone(formattedValue);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create inquiry object with timestamp
    const newInquiry = {
      id: Date.now(),
      date: new Date().toLocaleString('ko-KR'),
      companyName,
      managerName, // Saving as managerName
      phone,
      channels,
      budget,
      message
    };

    // Robust Local Storage Saving
    try {
      const existingData = localStorage.getItem('briva_inquiries');
      let inquiries = [];
      if (existingData) {
        try {
          inquiries = JSON.parse(existingData);
          if (!Array.isArray(inquiries)) inquiries = [];
        } catch (e) {
          inquiries = [];
        }
      }
      
      // Add new inquiry to the top
      const updatedInquiries = [newInquiry, ...inquiries];
      localStorage.setItem('briva_inquiries', JSON.stringify(updatedInquiries));
      
      // Show success UI
      setSubmitted(true);
      
    } catch (error) {
      console.error("Failed to save inquiry", error);
      alert("오류가 발생하여 신청이 저장되지 않았습니다. 브라우저 저장 공간을 확인해주세요.");
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setCompanyName('');
    setManagerName('');
    setPhone('');
    setChannels([]);
    setBudget('');
    setMessage('');
  };

  return (
    <section id="contact" className="py-24 px-6 bg-briva-50">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Left: Info */}
          <div className="md:w-2/5 bg-briva-900 text-white p-10 md:p-14 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-briva-600 rounded-full blur-[80px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-black mb-6">무료 상담 신청</h3>
              <p className="text-briva-300 mb-10 leading-relaxed">
                마케팅 방향성을 잡지 못해 고민이신가요? <br/>
                브리바가 명쾌한 해답을 드리겠습니다.
              </p>
            </div>

            <div className="mt-8 relative z-10">
              <div className="p-4 bg-briva-800/50 backdrop-blur-sm rounded-xl border border-briva-700 text-sm text-briva-300 leading-relaxed word-keep-all whitespace-pre-line">
                "망설이는 시간에도 경쟁사는 성장하고 있습니다.<br className="hidden md:block" />
                지금 바로 문의하세요."
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="md:w-3/5 p-10 md:p-14 bg-white">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h4 className="text-2xl font-bold text-briva-900 mb-2">신청이 완료되었습니다!</h4>
                <p className="text-briva-600 mb-8">
                  담당자가 내용을 확인 후<br/>
                  빠른 시간 내에 연락드리겠습니다.
                </p>
                <button 
                  onClick={handleReset}
                  className="text-briva-500 text-sm font-medium underline hover:text-briva-700"
                >
                  다시 작성하기
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-briva-700 mb-2">업체명</label>
                  <input 
                    type="text" 
                    required
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="예) 브리바 컴퍼니"
                    className="w-full px-4 py-3 rounded-lg bg-briva-50 border border-briva-100 focus:border-briva-500 focus:ring-2 focus:ring-briva-200 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-briva-700 mb-2">담당자 성함</label>
                  <input 
                    type="text" 
                    required
                    value={managerName}
                    onChange={(e) => setManagerName(e.target.value)}
                    placeholder="예) 홍길동"
                    className="w-full px-4 py-3 rounded-lg bg-briva-50 border border-briva-100 focus:border-briva-500 focus:ring-2 focus:ring-briva-200 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-briva-700 mb-2">연락처</label>
                  <input 
                    type="tel" 
                    required
                    value={phone}
                    onChange={handlePhoneChange}
                    placeholder="010-0000-0000"
                    maxLength={13}
                    className="w-full px-4 py-3 rounded-lg bg-briva-50 border border-briva-100 focus:border-briva-500 focus:ring-2 focus:ring-briva-200 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-briva-700 mb-2">고민중인 마케팅 채널</label>
                  <div className="grid grid-cols-2 gap-3">
                    {['네이버 블로그', '네이버 플레이스', '인스타그램', '기타'].map((channel) => (
                      <label key={channel} className={`flex items-center gap-2 cursor-pointer p-3 rounded-lg transition-colors border ${channels.includes(channel) ? 'bg-briva-100 border-briva-300' : 'bg-briva-50 border-transparent hover:bg-briva-100'}`}>
                        <input 
                          type="checkbox" 
                          className="w-4 h-4 text-briva-600 rounded border-briva-300 focus:ring-briva-500"
                          checked={channels.includes(channel)}
                          onChange={() => handleChannelChange(channel)}
                        />
                        <span className={`text-sm font-medium ${channels.includes(channel) ? 'text-briva-900' : 'text-briva-800'}`}>{channel}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-briva-700 mb-2">월 마케팅 예산</label>
                  <select 
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-briva-50 border border-briva-100 focus:border-briva-500 focus:ring-2 focus:ring-briva-200 outline-none transition-all text-briva-800"
                  >
                    <option value="">예산 범위를 선택해주세요</option>
                    {budgetOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-briva-700 mb-2">문의 내용</label>
                  <textarea 
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="현재 상황이나 고민을 간단히 적어주세요."
                    className="w-full px-4 py-3 rounded-lg bg-briva-50 border border-briva-100 focus:border-briva-500 focus:ring-2 focus:ring-briva-200 outline-none transition-all resize-none font-sans"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 bg-briva-600 text-white font-bold rounded-xl hover:bg-briva-700 shadow-lg shadow-briva-500/30 transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  원터치 접수 <Send size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consultation;
