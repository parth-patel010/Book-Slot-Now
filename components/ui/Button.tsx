import React from 'react';
import { Send } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
  variant?: 'primary' | 'secondary' | 'warning';
  icon?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  fullWidth = false, 
  variant = 'primary', 
  className = '',
  icon = true,
  ...props 
}) => {
  const baseStyles = "font-bold uppercase tracking-wide transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-xl relative overflow-hidden";
  
  const variants = {
    // Vibrant Pink/Magenta -> Red gradient
    primary: "bg-gradient-to-r from-[#ff0080] to-[#ff0000] text-white border-b-[6px] border-[#990000] rounded-full",
    secondary: "bg-blue-600 hover:bg-blue-700 text-white rounded-lg",
    warning: "bg-yellow-400 hover:bg-yellow-500 text-black border-b-4 border-yellow-600 rounded-lg"
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Track InitiateCheckout event on Meta Pixel
    if (typeof window !== 'undefined' && (window as any).fbq) {
      try {
        (window as any).fbq('track', 'InitiateCheckout', {
          value: 499,
          currency: 'INR',
          content_name: 'Startup & Business Scaling Session'
        });
      } catch (err) {
        console.error('Meta Pixel error:', err);
      }
    }

    // Redirect to the provided Razorpay link
    window.location.href = "https://rzp.io/rzp/rnTdHdsc";
    if (props.onClick) {
      props.onClick(e);
    }
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} py-3 px-8 ${className}`}
      onClick={handleClick}
      {...props}
    >
      {/* Shine Effect Layer - High opacity white for maximum brightness */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/70 to-transparent skew-x-[-20deg] animate-shine pointer-events-none"></div>
      
      {/* Button Content */}
      <span className="relative z-10 flex items-center gap-2">
        {icon && <Send size={20} className="animate-pulse" />}
        {children}
      </span>
    </button>
  );
};