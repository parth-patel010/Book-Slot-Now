import React, { useState, useEffect } from 'react';

interface TimerProps {
  initialMinutes?: number; // Used as the duration for the loop
  className?: string;
  boxClass?: string;
  labelClass?: string;
  numClass?: string;
  showLabels?: boolean;
}

export const Timer: React.FC<TimerProps> = ({ 
  initialMinutes = 49, 
  className = "", 
  boxClass = "", 
  labelClass = "text-sm font-bold mt-1 text-gray-600 uppercase tracking-wider",
  numClass = "",
  showLabels = true
}) => {
  // Function to get the target time from localStorage or create a new one
  const getTargetTime = () => {
    // Unique key based on minutes to ensure config changes reset for users if needed, 
    // or keep it constant if you want to share timer across different durations (unlikely).
    // Using v3 to ensure we reset for the 49min requirement.
    const STORAGE_KEY = `viral_reel_timer_target_v3_${initialMinutes}`; 
    const duration = initialMinutes * 60 * 1000;
    
    // Try to get stored target
    const stored = localStorage.getItem(STORAGE_KEY);
    const now = new Date().getTime();
    
    let target = stored ? parseInt(stored, 10) : 0;

    // If no stored time or stored time is in the past (expired)
    // For logic "starts again", if it's expired, we create a new target from NOW.
    if (!target || target < now) {
      target = now + duration;
      localStorage.setItem(STORAGE_KEY, target.toString());
    }
    
    return target;
  };

  // Calculate seconds remaining based on target
  const calculateSecondsLeft = () => {
    const STORAGE_KEY = `viral_reel_timer_target_v3_${initialMinutes}`; 
    const target = getTargetTime();
    const now = new Date().getTime();
    const diff = Math.max(0, Math.floor((target - now) / 1000));
    
    // If diff is 0, it means we just expired.
    // Immediately reset to loop.
    if (diff === 0) {
       const duration = initialMinutes * 60 * 1000;
       const newTarget = now + duration;
       localStorage.setItem(STORAGE_KEY, newTarget.toString());
       return initialMinutes * 60;
    }
    
    return diff;
  };

  const [timeLeft, setTimeLeft] = useState(calculateSecondsLeft);

  useEffect(() => {
    // Sync immediately
    setTimeLeft(calculateSecondsLeft());

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        // Always recalculate from storage to ensure sync across tabs/components
        return calculateSecondsLeft();
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [initialMinutes]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  // Defaults
  const defaultBoxStyle = "bg-black text-[#ff0000] rounded-xl px-4 py-2 min-w-[90px] text-center border-2 border-white/20 shadow-lg";
  const defaultNumStyle = "text-4xl md:text-5xl font-[800] tracking-tighter leading-none font-sans";

  // Use passed props or defaults
  const finalBoxStyle = boxClass || defaultBoxStyle;
  const finalNumStyle = numClass || defaultNumStyle;

  return (
    <div className={`flex items-start gap-4 ${className}`}>
      {/* Minutes */}
      <div className="flex flex-col items-center">
        <div className={finalBoxStyle}>
          <div className={finalNumStyle}>
            {minutes.toString().padStart(2, '0')}
          </div>
        </div>
        {showLabels && <span className={labelClass}>Minutes</span>}
      </div>

      {/* Seconds */}
      <div className="flex flex-col items-center">
        <div className={finalBoxStyle}>
          <div className={finalNumStyle}>
            {seconds.toString().padStart(2, '0')}
          </div>
        </div>
        {showLabels && <span className={labelClass}>Seconds</span>}
      </div>
    </div>
  );
};