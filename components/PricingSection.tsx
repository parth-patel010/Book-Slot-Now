import React from 'react';
import { Timer } from './ui/Timer';
import { Button } from './ui/Button';

export const PricingSection: React.FC = () => {
  return (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-12">
          <span className="text-red-500 underline decoration-red-200">Scale Your Startup & Business</span> with 1-on-1 CTO Session With Bonuses Worth <span className="text-red-500 line-through">Rs 15,995</span>
        </h2>

        <div className="border-4 border-dashed border-gray-800 rounded-3xl p-6 md:p-10 relative bg-white shadow-2xl">
            
            {/* Tag */}
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-black text-brand-yellow px-6 py-2 rounded-full font-bold uppercase tracking-widest text-sm shadow-lg border border-brand-yellow">
                ♛ One Time Offer
            </div>

            <div className="text-center mt-6">
                <p className="text-orange-500 font-bold text-lg italic mb-2">
                    "Main aapka CTO ban ke guide karunga, idea se launch tak aur launch se scale tak."
                </p>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                    PM Web Solutions already 50+ brands ki business problems solve karke unhe scale karne mein help kar chuka hai. Ab aapki baari hai!
                </p>

                <h3 className="text-3xl font-black text-red-600 mb-2">Total Bonus Value: ₹15,995</h3>
                <p className="text-xl font-bold text-gray-800 mb-4">Regular Session Fee: <span className="line-through">₹4999</span></p>
                
                <h4 className="text-4xl md:text-5xl font-black text-green-600 mb-8">
                    Buy Today for Only ₹499
                </h4>

                <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
                    <Timer initialMinutes={49} className="scale-75 md:scale-100 origin-center" boxClass="bg-black text-white rounded p-3 min-w-[70px] text-center" />
                    {/* Added animate-shake here */}
                    <Button className="w-full md:w-auto text-lg px-8 py-4 shadow-xl animate-shake">
                        Book Session Now Just ₹499/-
                    </Button>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg inline-block text-sm text-gray-700">
                    <span className="text-orange-500 text-lg mr-2">✦</span> 
                    Special Bonus: <strong>Your idea can worth Lakhs or even crore but you need right experience people who can help in technical area</strong>
                </div>
            </div>
        </div>

        {/* Guarantee Seal Area */}
        <div className="mt-16 bg-brand-light border-2 border-brand-yellow rounded-2xl p-8 relative">
            <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-40 h-40 flex-shrink-0 relative">
                     {/* CSS Seal approximation */}
                    <div className="w-full h-full bg-yellow-400 rounded-full flex items-center justify-center shadow-lg border-4 border-yellow-600 border-dashed relative">
                        <div className="text-center font-black text-yellow-900 leading-tight">
                            <span className="block text-sm">100%</span>
                            <span className="block text-2xl uppercase">Clarity</span>
                            <span className="block text-sm">& Value</span>
                            <div className="absolute -bottom-2 -right-2 bg-red-600 text-white text-xs px-2 py-1 rounded">Guaranteed</div>
                        </div>
                    </div>
                </div>
                <div className="text-center md:text-left flex-1">
                    <h3 className="text-3xl font-black text-green-700 mb-2 uppercase italic">Risk-Free! 100% Satisfaction</h3>
                    <p className="text-lg font-bold mb-4">Sirf 499 rupaye mein apna startup aur business scaling session book karo.</p>
                    <p className="flex items-center justify-center md:justify-start gap-2 font-bold text-red-500 mb-6">
                        ⏰ Neeche book karo, abhi! Limited Slots Available ⏰
                    </p>
                    <div className="flex gap-4 opacity-70 grayscale">
                         {/* Bank Logos Mockup */}
                         <div className="font-bold text-blue-800">VISA</div>
                         <div className="font-bold text-blue-400">UPI</div>
                         <div className="font-bold text-indigo-600">Razorpay</div>
                    </div>
                </div>
                <div className="flex-shrink-0 w-full md:w-auto">
                    <Button className="w-full">Book Session In Just ₹499/- <br/><span className="text-xs font-normal">Only</span></Button>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};
