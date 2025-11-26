import React from 'react';

interface LogoProps {
  className?: string;
  dark?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "h-10", dark = false }) => {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* 
        [알림] 로고 이미지를 적용하려면:
        프로젝트 루트(또는 public 폴더)에 'logo.png' 파일을 업로드해주세요.
      */}
      <img 
        src="/logo.png" 
        alt="BRIVA Logo" 
        className="h-full w-auto object-contain rounded-full"
        onError={(e) => {
          // 이미지가 없을 경우 임시 텍스트 아이콘으로 대체
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          
          // 이미지가 로드되지 않았을 때 보여줄 대체 요소가 필요하다면 아래 주석을 해제하여 사용하세요.
          // target.parentElement?.insertAdjacentHTML('afterbegin', '<div class="w-10 h-10 bg-briva-500 rounded-full flex items-center justify-center text-white font-bold">B</div>');
        }}
      />
      
      <div className="flex flex-col justify-center items-start">
        <span className={`font-black text-2xl tracking-tighter leading-none ${dark ? 'text-briva-900' : 'text-white'}`}>
          BRIVA
        </span>
        <span className={`text-[0.6rem] font-bold tracking-[0.34em] ml-[2px] mt-1 ${dark ? 'text-briva-500' : 'text-briva-200'}`}>
          AGENCY
        </span>
      </div>
    </div>
  );
};

export default Logo;