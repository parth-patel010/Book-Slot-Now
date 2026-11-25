import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-black text-gray-400 py-12 pb-32 text-center text-xs md:text-sm">
      <div className="max-w-4xl mx-auto px-4 mb-8">
         <div className="bg-white p-4 rounded-lg flex flex-wrap justify-center gap-6 items-center mb-8 max-w-2xl mx-auto">
             <div className="font-bold text-gray-800 text-lg">Razorpay</div>
             <div className="font-bold text-gray-800 text-lg">UPI</div>
             <div className="font-bold text-blue-800 text-lg">VISA</div>
             <div className="font-bold text-red-600 text-lg flex items-center gap-1"><div className="w-4 h-4 bg-red-600 rounded-full"></div>Mastercard</div>
             <div className="font-bold text-green-700 text-lg flex items-center gap-1"><ShieldCheck size={16}/> 100% SECURE</div>
         </div>
      </div>

      <div className="space-y-4">
        <p className="font-semibold text-gray-500">Copyright © 2025 PM Web Solutions</p>
        
        <div className="flex flex-wrap justify-center gap-4 text-gray-300">
            <button onClick={() => onNavigate('home')} className="hover:text-white underline hover:text-brand-yellow transition-colors">Home</button>
            <span className="hidden md:inline">|</span>
            <button onClick={() => onNavigate('privacy')} className="hover:text-white underline hover:text-brand-yellow transition-colors">Privacy Policy</button>
            <span className="hidden md:inline">|</span>
            <button onClick={() => onNavigate('terms')} className="hover:text-white underline hover:text-brand-yellow transition-colors">Terms & Conditions</button>
            <span className="hidden md:inline">|</span>
            <button onClick={() => onNavigate('refund')} className="hover:text-white underline hover:text-brand-yellow transition-colors">Refund Policy</button>
            <span className="hidden md:inline">|</span>
            <button onClick={() => onNavigate('about')} className="hover:text-white underline hover:text-brand-yellow transition-colors">About Us</button>
            <span className="hidden md:inline">|</span>
            <button onClick={() => onNavigate('contact')} className="hover:text-white underline hover:text-brand-yellow transition-colors">Contact Us</button>
        </div>

        <p className="max-w-3xl mx-auto mt-4 opacity-50 text-[10px] leading-relaxed px-4">
            This site is not a part of the Facebook™ website or Facebook™ Inc. Additionally, This site is NOT endorsed by Facebook™ in any way. FACEBOOK™ is a trademark of FACEBOOK™, Inc. As stipulated by law, we can not and do not make any guarantees about your ability to get results or earn any money with my ideas, information, tools or strategies. I just want to help you by giving great content, direction and strategies that worked well for me and my students and that I believe can help you move forward.
        </p>
        <p className="mt-4 text-gray-500">Website security powered by <span className="text-brand-yellow font-bold">PM Web Solutions</span></p>
      </div>
    </footer>
  );
};
