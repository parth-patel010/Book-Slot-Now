import React from 'react';
import { Timer } from './ui/Timer';
import { Button } from './ui/Button';
import { Check, ShieldCheck, CreditCard } from 'lucide-react';
import ideaImg from '../public/idea.png';

export const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-brand-dark text-white pb-16 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-pink-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pt-8 relative z-10">
        {/* Header Titles */}
        <div className="text-center mb-12">
          <span className="inline-block py-1 px-3 rounded-full border border-pink-500 bg-pink-500/10 text-pink-300 text-sm font-semibold mb-4 tracking-wider uppercase">
            PM Web Solutions • Startup & Business Scaling Session
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            Tell your Idea us now
            {/* Animated Underline Container */}
            <span className="relative inline-block mx-2 z-10">
              <span className="relative z-20 text-brand-yellow">and scale it with us now</span>
              {/* Hand-drawn Underline SVG */}
              <svg className="absolute left-0 bottom-0 w-full h-3 md:h-4 -mb-1 md:-mb-2 pointer-events-none z-10" viewBox="0 0 400 20" preserveAspectRatio="none">
                <path
                  d="M5,10 Q200,20 395,10"
                  className="stroke-green-500 stroke-[5px] fill-transparent animate-draw-loop"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <br className="hidden md:block" /> — Idea Se Launch Tak Aur Launch Se Scale Tak
          </h1>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-lg font-semibold text-green-400 mt-6">
            <span className="flex items-center gap-1"><Check className="w-5 h-5 bg-green-500 text-black rounded-full p-1" /> Startup Launch</span>
            <span className="text-gray-500">→</span>
            <span className="flex items-center gap-1"><Check className="w-5 h-5 bg-green-500 text-black rounded-full p-1" /> Website & Ads</span>
            <span className="text-gray-500">→</span>
            <span className="flex items-center gap-1"><Check className="w-5 h-5 bg-green-500 text-black rounded-full p-1" /> Systems & CTO</span>
            <span className="text-gray-500">→</span>
            <span className="flex items-center gap-1"><Check className="w-5 h-5 bg-green-500 text-black rounded-full p-1" /> Scale Business</span>
          </div>
        </div>

        {/* Hero Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

          {/* Left: Product Image */}
          <div className="relative group">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-800 bg-gray-900">
              {/* Product Image */}
              <img
                src={ideaImg}
                alt="Startup & Business Scaling Session"
                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
              />
              {/* Floating Badge */}
              <div className="absolute bottom-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-bounce">
                Only ₹499
              </div>
            </div>
            {/* Background blob for image */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-pink-600 to-purple-600 rounded-full blur-xl opacity-40 group-hover:opacity-75 transition-opacity duration-500 -z-10"></div>
          </div>

          {/* Right: Offer Box */}
          <div className="bg-white text-gray-900 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"></div>

            <h2 className="text-xl md:text-2xl font-bold text-center mb-6 leading-snug">
              Startup launch karna hai ya apne business ko grow karna hai, lekin technical side samajh nahi aa raha? <span className="text-red-600">Website</span>, <span className="text-purple-600">Ads</span>, <span className="text-blue-500">Systems</span>, sab kuch confusing lagta hai? Toh tension mat lo. Main aapka CTO ban ke guide karunga!
            </h2>

            {/* Timer */}
            <div className="flex justify-center mb-6">
              <Timer initialMinutes={49} />
            </div>

            <div className="text-center mb-6">
              <p className="text-gray-700 font-semibold mb-1">Bonus Include: <span className="text-red-600 font-bold">Your idea can worth Lakhs or even crore but you need right experience people who can help in technical area</span></p>
              <div className="flex justify-center items-center gap-4 my-4 opacity-80 grayscale hover:grayscale-0 transition-all">
                {/* Mock payment icons */}
                <div className="flex items-center gap-2 font-bold text-purple-700"><CreditCard size={20} /> PhonePe</div>
                <div className="flex items-center gap-2 font-bold text-blue-700">VISA</div>
                <div className="flex items-center gap-2 font-bold text-blue-400">Paytm</div>
                <div className="flex items-center gap-2 font-bold text-green-600">GPay</div>
              </div>
            </div>

            {/* Animated Button */}
            <Button fullWidth className="text-lg md:text-xl py-4 mb-3">
              Book Scaling Session In Just ₹499/- Only
            </Button>

            <p className="text-center text-xs text-red-500 font-semibold italic">
              🚀 Sirf 499 rupaye mein apna startup aur business scaling session book karo. Neeche book karo, abhi!
            </p>
          </div>

        </div>

        {/* Bottom text */}
        <p className="text-center text-gray-400 italic mt-12 text-sm md:text-base border-t border-gray-800 pt-6">
          "PM Web Solutions already 50+ brands ki business problems solve karke unhe scale karne mein help kar chuka hai. Ab aapki baari hai."
        </p>
      </div>
    </div>
  );
};
