import React from 'react';

const brandLogos = [
  { name: 'TravelBuddy', src: '/brands/brand-1.png' },
  { name: 'JD Construction', src: '/brands/brand-2.png' },
  { name: 'KGC Vyaparwala', src: '/brands/brand-3.png' },
  { name: 'Rabara Group', src: '/brands/brand-4.png' },
  { name: 'DeviceKart', src: '/brands/brand-5.png' },
  { name: 'eatnsay', src: '/brands/brand-6.png' },
  { name: 'evegah', src: '/brands/brand-7.png' },
  { name: 'Fitness Gym', src: '/brands/brand-8.png' },
  { name: 'Umang Consultancy', src: '/brands/brand-9.png' },
  { name: 'PashuCare', src: '/brands/brand-10.png' },
  { name: 'Swastika Innovation', src: '/brands/swastika.png' },
  { name: 'Netsec Infotech', src: '/brands/netsec.png' },
];

export const ShowcaseSection: React.FC = () => {
  return (
    <div className="py-16 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section 1: Brand Logos & Moving Animation */}
        <div className="text-center mb-12">
           <div className="inline-block bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-xs font-bold mb-4 border border-purple-200">
             🔥 Trusted By 50+ Brands 🔥
           </div>
           <h2 className="text-3xl font-bold mb-4">
             PM Web Solutions already 50+ brands ki business problems solve karke unhe scale karne mein help kar chuka hai
           </h2>
           <p className="text-gray-500 text-sm max-w-2xl mx-auto">
             Proven technical systems, websites, ads architecture, and business automations.
           </p>
        </div>

        {/* Brand Logo Moving Animation Track */}
        <div className="relative w-full overflow-hidden py-4 border-y border-gray-100 mb-8">
          <div className="flex w-max items-center animate-marquee gap-12 sm:gap-16 hover:[animation-play-state:paused]">
            {/* Set 1 */}
            <div className="flex items-center gap-12 sm:gap-16 shrink-0">
              {brandLogos.map((brand, idx) => (
                <div key={`b1-${idx}`} className="flex items-center justify-center shrink-0 h-16 w-36">
                  <img
                    src={brand.src}
                    alt={brand.name}
                    className="max-h-12 max-w-[120px] object-contain grayscale hover:grayscale-0 transition-all opacity-80 hover:opacity-100"
                  />
                </div>
              ))}
            </div>
            {/* Set 2 (for seamless infinite loop) */}
            <div className="flex items-center gap-12 sm:gap-16 shrink-0" aria-hidden="true">
              {brandLogos.map((brand, idx) => (
                <div key={`b2-${idx}`} className="flex items-center justify-center shrink-0 h-16 w-36">
                  <img
                    src={brand.src}
                    alt=""
                    className="max-h-12 max-w-[120px] object-contain grayscale hover:grayscale-0 transition-all opacity-80 hover:opacity-100"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 2: Video Mockups */}
        <div className="mt-20">
             <div className="bg-brand-dark text-white py-12 px-4 rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                
                <div className="text-center relative z-10 mb-10">
                    <h3 className="text-2xl md:text-3xl font-bold">Main aapka CTO ban ke guide karunga, idea se launch tak aur launch se scale tak</h3>
                    <p className="text-red-500 font-bold text-lg sm:text-xl mt-2 uppercase">
                      Bonus: Your idea can worth Lakhs or even crore but you need right experience people who can help in technical area
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-8 relative z-10">
                    {[
                      { title: "Website & Tech Stack", sub: "Clean Architecture" },
                      { title: "Ads & Tracking Setup", sub: "Meta & Google CAPI" },
                      { title: "Scaling & Automations", sub: "CRM & Cloud Systems" }
                    ].map((item, i) => (
                        <div key={i} className="relative w-48 md:w-56 h-96 bg-gray-900 rounded-[2rem] border-8 border-gray-800 shadow-2xl overflow-hidden flex flex-col justify-between p-4 text-center">
                            {/* Camera Notch */}
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-gray-800 rounded-b-xl z-20"></div>
                            
                            <div className="pt-8">
                              <img src="/logo.png" alt="PM Web Solutions" className="h-8 mx-auto object-contain bg-white/90 px-2 py-0.5 rounded mb-3" />
                              <span className="text-xs text-yellow-400 font-bold uppercase tracking-wider block">{item.sub}</span>
                              <h4 className="text-sm font-bold text-white mt-1">{item.title}</h4>
                            </div>
                            
                            {/* Play Button Overlay */}
                            <div className="flex items-center justify-center my-auto">
                                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50">
                                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-[16px] border-l-white border-b-8 border-b-transparent ml-1"></div>
                                </div>
                            </div>
                            
                            {/* UI Overlay Mockup */}
                            <div className="pb-2">
                                <p className="text-[11px] text-gray-400 font-medium">PM Web Solutions • 1-on-1 CTO Guidance</p>
                            </div>
                        </div>
                    ))}
                </div>
             </div>
        </div>

      </div>
    </div>
  );
};
