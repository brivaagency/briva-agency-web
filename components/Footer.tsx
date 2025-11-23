import React from 'react';
import { Mail, Phone, Lock } from 'lucide-react';

interface FooterProps {
  onOpenAdmin: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenAdmin }) => {
  return (
    <footer className="bg-briva-950 text-briva-200 py-16 px-6 border-t border-briva-900 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        <div>
          <h2 className="text-2xl font-black text-white mb-4 tracking-tight">BRIVA AGENCY</h2>
          <p className="text-briva-400 text-sm max-w-xs leading-relaxed">
            브리바 에이전시는 진정성 있는 소통을 통해<br/>
            브랜드의 가치를 세상에 전달합니다.
          </p>
        </div>
        
        <div className="flex flex-col gap-4 text-sm font-light">
          <div className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-full bg-briva-900 flex items-center justify-center group-hover:bg-briva-800 transition-colors">
              <Phone className="w-4 h-4 text-briva-500" />
            </div>
            <span className="tracking-wide text-lg font-bold text-white">010-6823-4624</span>
          </div>
          <div className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-full bg-briva-900 flex items-center justify-center group-hover:bg-briva-800 transition-colors">
              <Mail className="w-4 h-4 text-briva-500" />
            </div>
            <span className="tracking-wide">ann@brivaagency.com</span>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-briva-900 text-center md:text-left text-xs text-briva-600 flex flex-col md:flex-row justify-between items-center gap-4">
        <span>© 2025 BRIVA AGENCY. All rights reserved.</span>
        <div className="flex items-center gap-4">
          <span className="hover:text-briva-400 cursor-pointer">Privacy Policy</span>
          <span className="hover:text-briva-400 cursor-pointer">Terms of Service</span>
          
          <button 
            onClick={onOpenAdmin}
            className="flex items-center gap-1 opacity-50 hover:opacity-100 hover:text-briva-400 transition-all ml-4"
          >
            <Lock size={10} />
            관리자 로그인
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;