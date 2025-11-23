import React, { useId } from 'react';

interface LogoProps {
  className?: string;
  dark?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "h-10", dark = false }) => {
  const uniqueId = useId();
  const clipId = `hexClip-${uniqueId}`;

  // Configuration
  // Using a 0-100 coordinate system
  // A regular hexagon with pointy top fits in a ratio of approx 1:1.15
  // We'll center it in 100x100
  
  const barCount = 9; // Number of bars
  const totalWidth = 86; // Width of the hexagon at widest point
  const barWidth = 5; // Width of each bar
  const gap = (totalWidth - (barCount * barWidth)) / (barCount - 1); // Calculate gap
  
  // Hexagon Path (Pointy Top)
  // Center (50, 50). Radius ~50.
  // Points: (50, 0), (93.3, 25), (93.3, 75), (50, 100), (6.7, 75), (6.7, 25)
  // We apply a small padding to ensure bars don't get cut off by viewbox
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

        {/* 
          Strategy: 
          1. Draw the Hexagon outline (optional, or just use it as clip).
          2. Draw vertical bars.
          3. Clip the bars with the Hexagon path.
          4. Vary bar heights to create the "Wave" effect at the bottom.
        */}
        
        <g clipPath={`url(#${clipId})`}>
          {/* Background fill (optional, if we want solid hex) - currently transparent */}
          
          {Array.from({ length: barCount }).map((_, i) => {
            // Calculate x position to center the group of bars
            // Start X = Center (50) - TotalWidth/2
            // But we want them spread across the hex width (approx 7 to 93)
            const startX = 7; 
            const x = startX + i * (barWidth + gap + 0.5); // 0.5 adjustment for visual spacing
            
            // Wave calculation for height
            // We want the bars to start at y=0 (top) so they are clipped by the chevron top of the hex
            // We want them to end at different heights at the bottom to form a wave
            // Base height + Sine wave
            
            // Progress 0 to 1
            const t = i / (barCount - 1);
            
            // Wave: Starts low, goes high, drops slightly?
            // Let's mimic a rising trend
            const waveHeight = 60 + (35 * Math.sin(t * Math.PI * 0.8)); 

            return (
              <rect
                key={i}
                x={x}
                y={0} // Start from top
                width={barWidth}
                height={waveHeight + 20} // Add extra to ensure it covers the hex bottom if needed, but we want the "cut" look
                fill={dark ? "#0f172a" : "#ffffff"} 
              />
            );
          })}
        </g>
      </svg>
      
      <div className="flex flex-col justify-center">
        <span className={`font-black text-2xl tracking-tighter leading-none ${dark ? 'text-briva-900' : 'text-white'}`}>
          BRIVA
        </span>
        <span className={`text-[0.6rem] font-bold tracking-[0.3em] ml-[2px] mt-1 ${dark ? 'text-briva-500' : 'text-briva-200'}`}>
          AGENCY
        </span>
      </div>
    </div>
  );
};

export default Logo;