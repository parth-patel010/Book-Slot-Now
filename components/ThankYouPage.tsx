import React, { useEffect } from 'react';
import { CheckCircle2, Calendar, ShieldCheck, ArrowRight } from 'lucide-react';

interface ThankYouPageProps {
  onGoHome: () => void;
}

export const ThankYouPage: React.FC<ThankYouPageProps> = ({ onGoHome }) => {
  useEffect(() => {
    // Fire Meta Pixel Purchase Event on page load
    if (typeof window !== 'undefined' && (window as any).fbq) {
      try {
        (window as any).fbq('track', 'Purchase', {
          value: 499.00,
          currency: 'INR',
          content_name: 'Startup & Business Scaling Session',
          content_type: 'product'
        });
      } catch (err) {
        console.error('Meta Pixel Purchase tracking error:', err);
      }
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-[75vh] flex items-center justify-center py-16 px-4 bg-gray-50">
      <div className="max-w-xl w-full bg-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-gray-200 text-center relative overflow-hidden">
        
        {/* Top celebratory accent */}
        <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-500"></div>

        {/* Checkmark Icon */}
        <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
          <CheckCircle2 size={48} className="animate-pulse" />
        </div>

        <span className="inline-block bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-black uppercase px-3.5 py-1 rounded-full mb-3 tracking-wider">
          Payment Successful • Booking Confirmed
        </span>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
          Thank You For Booking!
        </h1>

        <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
          Aapka <strong>1-on-1 Startup & Business Scaling Session</strong> with PM Web Solutions successfully book ho chuka hai.
        </p>

        {/* Order Details Summary Box */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-left mb-6 space-y-3">
          <div className="flex justify-between items-center text-xs sm:text-sm">
            <span className="text-gray-500 font-medium">Session:</span>
            <span className="font-bold text-slate-900">1-on-1 CTO Scaling Call</span>
          </div>
          <div className="flex justify-between items-center text-xs sm:text-sm">
            <span className="text-gray-500 font-medium">Amount Paid:</span>
            <span className="font-black text-emerald-600">₹499.00 INR</span>
          </div>
          <div className="flex justify-between items-center text-xs sm:text-sm">
            <span className="text-gray-500 font-medium">Status:</span>
            <span className="font-bold text-emerald-700 flex items-center gap-1">
              <ShieldCheck size={16} /> Verified by Razorpay
            </span>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 text-left mb-8">
          <h3 className="text-sm font-bold text-blue-950 flex items-center gap-2 mb-2">
            <Calendar size={18} className="text-blue-600" /> Agle Steps:
          </h3>
          <ul className="text-xs sm:text-sm text-blue-900 space-y-1.5 list-disc list-inside">
            <li>Aapke registered Email aur WhatsApp par calendar invite aur Google Meet link share kiya jayega.</li>
            <li>Apne startup idea aur technical questions ka summary ready rakhein.</li>
          </ul>
        </div>

        <button
          onClick={onGoHome}
          className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-black text-white font-bold py-3.5 px-8 rounded-full shadow-lg transition-all text-sm active:scale-95 cursor-pointer"
        >
          Return to Home <ArrowRight size={16} />
        </button>

      </div>
    </div>
  );
};
