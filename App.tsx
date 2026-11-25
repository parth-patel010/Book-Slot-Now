import React, { useState, useEffect } from 'react';
import { TopBar } from './components/TopBar';
import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { ShowcaseSection } from './components/ShowcaseSection';
import { StepsSection } from './components/StepsSection';
import { PricingSection } from './components/PricingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { StickyFooter } from './components/StickyFooter';
import { Button } from './components/ui/Button';
import { LegalPages } from './components/LegalPages';
import { ThankYouPage } from './components/ThankYouPage';

function App() {
  const [currentView, setCurrentView] = useState('home');

  useEffect(() => {
    // Check URL parameters if user returned from Razorpay redirect
    const urlParams = new URLSearchParams(window.location.search);
    if (
      urlParams.get('payment') === 'success' || 
      urlParams.get('status') === 'success' || 
      window.location.pathname.includes('thank-you')
    ) {
      setCurrentView('thank-you');
    }
  }, []);

  const renderContent = () => {
    if (currentView === 'home') {
      return (
        <>
          <HeroSection />
          
          {/* Floating CTA for Mobile/Desktop midway */}
          <div className="bg-brand-light py-8 text-center border-b">
             <Button className="text-lg animate-pulse mx-auto shadow-xl">
                Book Scaling Session Now In Just ₹499/- Only
             </Button>
             <p className="text-red-500 text-sm mt-2 font-semibold italic">Note- Price Will Increase Soon, Book Your Slot Now</p>
          </div>

          <FeaturesSection />
          <ShowcaseSection />
          <StepsSection />
          
          {/* Mid CTA */}
          <div className="flex justify-center py-10 bg-white">
            <Button className="text-xl px-12 py-4">
                 Book Scaling Session Now In Just ₹499/- Only
            </Button>
          </div>

          <PricingSection />
          <TestimonialsSection />
          <FAQSection />
          
          {/* Bottom CTA before footer */}
          <div className="bg-white py-12 flex justify-center">
             <Button className="text-xl px-12 py-4 shadow-2xl">
                Book Scaling Session Now In Just ₹499/- Only
             </Button>
          </div>
        </>
      );
    } else if (currentView === 'thank-you') {
      return <ThankYouPage onGoHome={() => handleNavigate('home')} />;
    } else {
      return <LegalPages view={currentView} />;
    }
  };

  const handleNavigate = (page: string) => {
    setCurrentView(page);
    window.scrollTo(0, 0);
  };

  return (
    // Added pb-24 to ensure content isn't hidden behind fixed footer
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col relative pb-24">
      <TopBar />
      
      <main className="flex-grow">
        {renderContent()}
      </main>
      
      <Footer onNavigate={handleNavigate} />

      {/* Sticky Footer rendered at root level only for home view */}
      {currentView === 'home' && <StickyFooter />}
    </div>
  );
}

export default App;
