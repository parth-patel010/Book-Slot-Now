import React from 'react';
import { Timer } from './ui/Timer';
import { Button } from './ui/Button';

export const StickyFooter: React.FC = () => {
  return (
    // Fixed position relative to viewport. 
    // z-index 99999 ensures it sits on top of everything.
    // Removed Portal to ensure consistent rendering context with the main app.
    <div className="fixed bottom-0 left-0 right-0 z-[99999] w-full bg-black border-t-2 border-brand-pink shadow-[0_-10px_40px_rgba(0,0,0,0.9)]">
      
      {/* Wrapper with padding-bottom for iPhone Home Indicator (Safe Area) */}
      <div style={{ paddingBottom: 'env(safe-area-inset-bottom)' }} className="w-full bg-black">
        <div className="max-w-7xl mx-auto px-3 py-3 flex items-center justify-between gap-3">
          
          {/* Timer - Left Side - Large and Readable */}
          <div className="flex-shrink-0">
              <Timer 
                initialMinutes={49} 
                className="gap-2"
                boxClass="bg-gray-900 border border-gray-600 rounded-lg px-2 py-1 min-w-[55px] md:min-w-[65px] text-center shadow-inner"
                numClass="text-3xl md:text-4xl font-[900] text-red-500 leading-none font-sans"
                showLabels={true}
                labelClass="text-[9px] md:text-[10px] text-white/70 font-bold uppercase tracking-wider block mt-1"
              />
          </div>

          {/* CTA - Right Side - Optimized for Mobile Width */}
          <div className="flex-grow min-w-0">
              <Button className="w-full text-sm sm:text-base md:text-lg py-3 sm:py-3.5 md:py-4 px-4 md:px-8 animate-pulse shadow-xl border-b-[4px] font-black tracking-tight">
                  {/* Shortened text for mobile to prevent layout breaking, full text for desktop */}
                  <span className="md:hidden">BOOK SESSION @ ₹499</span>
                  <span className="hidden md:inline">BOOK SCALING SESSION IN JUST ₹499/- ONLY</span>
              </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
