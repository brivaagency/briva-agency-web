import React, { useId } from 'react';

interface LogoProps {
  className?: string;
  dark?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "h-10", dark = false }) => {
  const uniqueId = useId();
  const clipId = `hexClip-${uniqueId}`;

  // Configuration
  const barCount = 9;
  const barWidth = 5;
  const gap = 4; // Spacing between bars
  
  // Specific heights for a "designed" wave look (0 to 100 scale)
  const barHeights = [35, 55, 85, 60, 95, 50, 75, 45, 65]; 

  // Hexagon Path (Pointy Top)
  // Center (50, 50). 
  // We use a clip path to ensure the bars are cut perfectly into the hex shape.
  const hexPath = "M50 2 L93 27 V73 L50 98 L7 73 V27 Z";

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <svg 
        viewBox="0 0 100 100" 
        className="h-full w-auto" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id={clipId}>
            <path d={hexPath} />
          </clipPath>
        </defs>

        {/* Draw the Bars clipped by the Hexagon */}
        <g clipPath={`url(#${clipId})`}>
          {barHeights.map((height, i) => {
            // Center the group of bars
            // Total width of bars = (9 * 5) + (8 * 4) = 45 + 32 = 77
            // Start X = (100 - 77) / 2 = 11.5
            const startX = 11.5;
            const x = startX + i * (barWidth + gap);
            
            // Bars grow from the bottom
            const y = 100 - height; 

            return (
              <rect
                key={i}
                x={x}
                y={0} 
                width={barWidth}
                height={100} // Draw full height, but the 'height' variable could be used if we weren't clipping. 
                             // Since we clip, we can draw full bars or variable. 
                             // To match the "Wave" look where bars float or touch bottom:
                             // Let's make them start from various Y positions to create the wave *shape* itself if not clipped?
                             // Actually, typically these logos have bars extending from bottom or centered.
                             // Let's simply draw vertical lines that are clipped.
                             // To give them "length" variation inside the hex, we can just use the hex clip.
                             // BUT to match the specific "File" look, let's vary the rect height explicitly *within* the clip.
                fill={dark ? "#0f172a" : "#ffffff"} 
                style={{
                  transformBox: 'fill-box',
                  transformOrigin: 'bottom',
                  // Optional: animate height for a subtle effect
                  // animation: `barGrow 1s ease-out ${i * 0.1}s backwards` 
                }}
              />
            );
          })}
          
           {/* 
              Alternative: If the bars are supposed to be "floating" inside and varying in length *independently* of the clip:
              We draw them with specific heights.
           */}
           {barHeights.map((h, i) => {
             const startX = 11.5;
             const x = startX + i * (barWidth + gap);
             // Center vertically? or Align Bottom?
             // Let's align bottom for a solid base look, or center for a soundwave look.
             // "Soundwave" usually centers.
             const y = (100 - h) / 2;
             
             return (
               <rect
                 key={`wave-${i}`}
                 x={x}
                 y={y}
                 width={barWidth}
                 height={h}
                 fill={dark ? "#0f172a" : "#ffffff"}
               />
             )
           })}
        </g>
      </svg>
      
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