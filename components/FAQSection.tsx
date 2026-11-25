import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FaqItem } from '../types';

const faqs: FaqItem[] = [
  { question: "Main non-technical background se hu, kya yeh session mere liye useful hai?", answer: "Haan bilkul! Yeh session unhi logon ke liye hai jinhe technical side samajh nahi aa raha aur website, ads, systems confusing lagte hain." },
  { question: "Main aapka CTO ban ke guide karunga ka kya matlab hai?", answer: "Parth (CTO, PM Web Solutions) aapko idea se launch tak aur launch se scale tak har technical decision par guide karenge." },
  { question: "PM Web Solutions ka track record kya hai?", answer: "PM Web Solutions already 50+ brands ki business problems solve karke unhe scale karne mein help kar chuka hai." },
  { question: "Bonus mein kya milega?", answer: "Your idea can worth Lakhs or even crore but you need right experience people who can help in technical area. Hum aapko exact valuation and scalable architecture blueprint provide karenge." },
  { question: "Is this a one-time payment of ₹499?", answer: "Yes, sirf 499 rupaye mein apna startup aur business scaling session book karo. Neeche book karo, abhi!" }
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="py-16 bg-yellow-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Ask Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-brand-dark rounded-lg overflow-hidden shadow-lg">
              <button 
                className="w-full px-6 py-4 flex items-center justify-between text-white font-semibold text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="flex items-center gap-3">
                   <span className="bg-white/10 px-2 py-1 rounded text-xs">?</span>
                   {faq.question}
                </span>
                {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
              </button>
              
              <div 
                className={`bg-white text-gray-800 transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-40 p-6' : 'max-h-0'}`}
              >
                <p className="text-sm leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
