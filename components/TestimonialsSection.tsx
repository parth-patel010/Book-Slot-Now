import React from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/Button';

const testimonials = [
  {
    name: "Sachin Biradar",
    role: "Verified Business Client",
    text: "Great IT consultancy and web solutions. Extremely prompt responses and top-notch code quality. Parth and PM Web Solutions guided our technical roadmap flawlessly.",
    rating: 5,
    bundle: "Top-Notch CTO"
  },
  {
    name: "Samarth Bagewadi",
    role: "Startup Founder",
    text: "Excellent support and seamless service. Parth and the team took care of all technical details with great professionalism. Solved our website and ads confusion completely!",
    rating: 5,
    bundle: "50+ Brands Scaled"
  }
];

export const TestimonialsSection: React.FC = () => {
  return (
    <div className="bg-brand-dark py-16 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-3xl font-bold mb-12">Listen From Founders Guided By PM Web Solutions</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
             {/* Navigation Mock */}
             <button className="absolute left-0 top-1/2 -translate-x-2 md:-translate-x-12 transform -translate-y-1/2 text-gray-500 hover:text-white hidden md:block">
                <ChevronLeft size={48} />
             </button>
             <button className="absolute right-0 top-1/2 translate-x-2 md:translate-x-12 transform -translate-y-1/2 text-gray-500 hover:text-white hidden md:block">
                <ChevronRight size={48} />
             </button>

             {testimonials.map((t, i) => (
               <div key={i} className="bg-white text-gray-900 p-6 rounded-lg shadow-lg relative">
                 <div className="absolute -top-3 left-6 bg-yellow-400 text-xs font-bold px-2 py-1 rounded">
                   {t.bundle}
                 </div>
                 <div className="flex gap-1 text-yellow-500 mb-3 mt-2">
                   {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                 </div>
                 <p className="text-sm text-gray-600 mb-6 italic">"{t.text}"</p>
                 <div className="border-t pt-4 flex items-center justify-between">
                   <div>
                     <h4 className="font-bold text-sm">{t.name}</h4>
                     <p className="text-xs text-gray-500">{t.role}</p>
                   </div>
                   <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                     <img src={`https://picsum.photos/50/50?random=${i+30}`} alt="user" />
                   </div>
                 </div>
               </div>
             ))}
        </div>

        <div className="text-center mt-12">
            <Button className="mx-auto text-xl px-12 py-4">
                Book Scaling Session In Just ₹499/- Only
            </Button>
            {/* Payment Icons Footer */}
            <div className="flex justify-center items-center gap-6 mt-6 bg-white py-3 px-8 rounded-full inline-flex mx-auto max-w-full overflow-hidden">
                 <span className="font-bold text-purple-600 text-xl">PhonePe</span>
                 <span className="font-bold text-blue-700 text-xl">VISA</span>
                 <span className="font-bold text-blue-400 text-xl">Paytm</span>
                 <span className="font-bold text-yellow-600 text-xl">UPI</span>
                 <span className="font-bold text-green-600 text-xl">GPay</span>
            </div>
        </div>

      </div>
    </div>
  );
};
