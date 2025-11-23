import React, { useState, useEffect } from 'react';
import { X, Trash2, Calendar, User, Phone, DollarSign, MessageSquare } from 'lucide-react';

interface Inquiry {
  id: number;
  date: string;
  name: string;
  phone: string;
  channels: string[];
  budget: string;
  message: string;
}

interface AdminDashboardProps {
  onClose: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onClose }) => {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);

  useEffect(() => {
    // Load data from local storage on mount
    const data = localStorage.getItem('briva_inquiries');
    if (data) {
      try {
        setInquiries(JSON.parse(data));
      } catch (e) {
        console.error("Failed to parse inquiries", e);
      }
    }
  }, []);

  const handleDelete = (id: number) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      const updated = inquiries.filter(i => i.id !== id);
      setInquiries(updated);
      localStorage.setItem('briva_inquiries', JSON.stringify(updated));
    }
  };

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
          {inquiries.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-briva-400">
              <MessageSquare size={48} className="mb-4 opacity-50" />
              <p className="text-lg">아직 접수된 상담 내역이 없습니다.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {inquiries.map((item) => (
                <div key={item.id} className="bg-white p-6 rounded-xl shadow-sm border border-briva-100 hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
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

                  <div className="grid md:grid-cols-2 gap-6 mb-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-briva-50 flex items-center justify-center text-briva-600 mt-1 shrink-0">
                        <User size={16} />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-briva-400 block mb-1">업체명 / 성함</span>
                        <h3 className="text-lg font-bold text-briva-900">{item.name}</h3>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-briva-50 flex items-center justify-center text-briva-600 mt-1 shrink-0">
                        <Phone size={16} />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-briva-400 block mb-1">연락처</span>
                        <h3 className="text-lg font-bold text-briva-900">{item.phone}</h3>
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
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-briva-50 flex items-center justify-center text-briva-600 mt-1 shrink-0">
                        <MessageSquare size={16} />
                      </div>
                      <div>
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