import React, { useState, useEffect } from 'react';
import { X, Trash2, Calendar, User, Phone, DollarSign, MessageSquare, Lock, LogIn, AlertCircle, Copy, Briefcase } from 'lucide-react';

interface Inquiry {
  id: number;
  date: string;
  companyName: string;
  managerName: string; // Changed from contactName to match request
  phone: string;
  channels: string[];
  budget: string;
  message: string;
  // name is removed as requested
}

interface AdminDashboardProps {
  onClose: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onClose }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState('');
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === '0124') {
      setIsLoggedIn(true);
      setLoginError('');
      loadData();
    } else {
      setLoginError('비밀번호가 올바르지 않습니다.');
      setPasswordInput('');
    }
  };

  const loadData = () => {
    const data = localStorage.getItem('briva_inquiries');
    if (data) {
      try {
        setInquiries(JSON.parse(data));
      } catch (e) {
        console.error("Failed to parse inquiries", e);
      }
    }
  };

  // Effect to reload data if needed when login state changes
  useEffect(() => {
    if (isLoggedIn) {
      loadData();
    }
  }, [isLoggedIn]);

  const handleDelete = (id: number) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      const updated = inquiries.filter(i => i.id !== id);
      setInquiries(updated);
      localStorage.setItem('briva_inquiries', JSON.stringify(updated));
    }
  };

  const handleCopyPhone = (phone: string) => {
    navigator.clipboard.writeText(phone).then(() => {
      alert(`연락처가 복사되었습니다: ${phone}`);
    }).catch(err => {
      console.error('복사 실패:', err);
    });
  };

  if (!isLoggedIn) {
    return (
      <div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-200">
        <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl border border-briva-200 p-8 relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-briva-400 hover:text-briva-800 transition-colors"
          >
            <X size={24} />
          </button>
          
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-briva-100 text-briva-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock size={32} />
            </div>
            <h2 className="text-2xl font-bold text-briva-900">관리자 로그인</h2>
            <p className="text-briva-500 text-sm mt-2">상담 내역을 확인하려면 비밀번호를 입력하세요.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="비밀번호 입력"
                className="w-full px-4 py-3 rounded-lg border border-briva-200 bg-briva-50 focus:ring-2 focus:ring-briva-500 outline-none text-center tracking-widest"
                autoFocus
              />
              {loginError && (
                <div className="flex items-center justify-center gap-1 text-red-500 text-xs mt-2">
                  <AlertCircle size={12} />
                  <span>{loginError}</span>
                </div>
              )}
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-briva-900 text-white font-bold rounded-lg hover:bg-briva-800 transition-colors flex items-center justify-center gap-2"
            >
              로그인 <LogIn size={18} />
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-5xl h-[85vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-briva-200">
        {/* Header */}
        <div className="p-6 border-b border-briva-100 flex justify-between items-center bg-briva-900 text-white">
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-bold tracking-tight">상담 신청 관리</h2>
            <span className="bg-briva-700 text-xs px-2 py-1 rounded-full font-medium">
              Total: {inquiries.length}
            </span>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto p-6 bg-briva-50">
          <div className="mb-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-sm text-yellow-800 flex items-start gap-2">
            <AlertCircle size={16} className="shrink-0 mt-0.5" />
            <p>
              <strong>주의:</strong> 현재 내역은 사용 중인 <strong>이 기기(브라우저)</strong>에만 저장됩니다. <br/>
              모바일로 접수된 건은 모바일에서, PC로 접수된 건은 PC에서만 확인 가능합니다. (서버 미연동 상태)
            </p>
          </div>

          {inquiries.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-briva-400 py-10">
              <MessageSquare size={48} className="mb-4 opacity-50" />
              <p className="text-lg">아직 접수된 상담 내역이 없습니다.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {inquiries.map((item) => (
                <div key={item.id} className="bg-white p-6 rounded-xl shadow-sm border border-briva-100 hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4 border-b border-briva-50 pb-4">
                    <div className="flex items-center gap-2 text-sm text-briva-500">
                      <Calendar size={14} />
                      <span className="font-mono">{item.date}</span>
                    </div>
                    <button 
                      onClick={() => handleDelete(item.id)} 
                      className="text-red-400 hover:text-red-600 p-2 hover:bg-red-50 rounded-lg transition-colors flex items-center gap-1 text-xs"
                    >
                      <Trash2 size={14} /> 삭제
                    </button>
                  </div>

                  <div className="grid md:grid-cols-2 gap-y-6 gap-x-8 mb-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-briva-50 flex items-center justify-center text-briva-600 mt-1 shrink-0">
                        <Briefcase size={16} />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-briva-400 block mb-1">업체명</span>
                        <h3 className="text-lg font-bold text-briva-900">
                          {/* Fallback for backward compatibility using type assertion if needed */}
                          {item.companyName || (item as any).name || '-'}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-briva-50 flex items-center justify-center text-briva-600 mt-1 shrink-0">
                        <User size={16} />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-briva-400 block mb-1">담당자</span>
                        <h3 className="text-lg font-bold text-briva-900">
                           {item.managerName || (item as any).contactName || '-'}
                        </h3>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-briva-50 flex items-center justify-center text-briva-600 mt-1 shrink-0">
                        <Phone size={16} />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-briva-400 block mb-1">연락처</span>
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-bold text-briva-900 tracking-wide">{item.phone}</h3>
                          <button 
                            onClick={() => handleCopyPhone(item.phone)}
                            className="text-briva-400 hover:text-briva-600 p-1 hover:bg-briva-50 rounded"
                            title="연락처 복사"
                          >
                            <Copy size={14} />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-briva-50 flex items-center justify-center text-briva-600 mt-1 shrink-0">
                        <DollarSign size={16} />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-briva-400 block mb-1">예산</span>
                        <p className="text-briva-800 font-medium">{item.budget || '미선택'}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 col-span-2">
                      <div className="w-8 h-8 rounded-full bg-briva-50 flex items-center justify-center text-briva-600 mt-1 shrink-0">
                        <MessageSquare size={16} />
                      </div>
                      <div className="w-full">
                        <span className="text-xs font-bold text-briva-400 block mb-1">관심 채널</span>
                        <div className="flex flex-wrap gap-2">
                          {item.channels && item.channels.length > 0 ? (
                            item.channels.map((ch, idx) => (
                              <span key={idx} className="bg-briva-100 text-briva-700 text-xs px-2 py-1 rounded font-medium">
                                {ch}
                              </span>
                            ))
                          ) : (
                            <span className="text-briva-300 text-sm">선택 안함</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {item.message && (
                    <div className="mt-4 bg-briva-50 p-4 rounded-lg border border-briva-100">
                      <span className="text-xs font-bold text-briva-400 block mb-2">문의 내용</span>
                      <p className="text-briva-700 whitespace-pre-wrap text-sm leading-relaxed">
                        {item.message}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;