import React from 'react';
import { Box, Film, Edit, Gift, Zap, Layers } from 'lucide-react';
import { FeatureItem } from '../types';
import { Button } from './ui/Button';

const features: FeatureItem[] = [
  {
    id: 1,
    title: "1-on-1 CTO Guidance",
    description: "Main aapka CTO ban ke guide karunga, idea se launch tak aur launch se scale tak. Technical side ki saari confusion dur karenge.",
    icon: Layers
  },
  {
    id: 2,
    title: "Website & Tech Stack Selection",
    description: "Confused ho kaunsi technology choose karein? MERN, Next.js, WordPress ya custom? Aapke budget aur goal ke according best stack finalize karenge.",
    icon: Film
  },
  {
    id: 3,
    title: "High-Converting Ads & Funnels",
    description: "Website banana kaafi nahi hai. Meta ads, Google ads, tracking pixels aur high-converting funnels ka complete architecture.",
    icon: Edit
  },
  {
    id: 4,
    title: "Systems & Backend Automations",
    description: "Daily operations ko automate karein. CRM integration, automated lead capture aur smooth payment gateway workflows.",
    icon: Box
  },
  {
    id: 5,
    title: "Exclusive Valuation Bonus",
    description: "Your idea can worth Lakhs or even crore but you need right experience people who can help in technical area.",
    icon: Gift
  },
  {
    id: 6,
    title: "50+ Brands Proven Framework",
    description: "PM Web Solutions already 50+ brands ki business problems solve karke unhe scale karne mein help kar chuka hai.",
    icon: Zap
  }
];

export const FeaturesSection: React.FC = () => {
  return (
    <div className="bg-brand-light py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Here What You'll Get In This</h2>
          <h3 className="text-2xl md:text-3xl font-extrabold text-red-500 underline decoration-brand-yellow decoration-4 underline-offset-4 uppercase">
            Startup & Business Scaling Session
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature) => (
            <div key={feature.id} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center font-bold text-xl">
                  {feature.id}
                </div>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
            <Button className="mx-auto text-xl px-12 py-4 shadow-pink-500/50 shadow-lg">
                Book Scaling Session In Just ₹499/- Only
            </Button>
            <p className="mt-4 font-semibold italic text-gray-700">
                Book before <span className="text-red-600">Price Increase</span> & unlock bonus: <span className="text-red-600 font-bold">Your idea can worth Lakhs or even crore but you need right experience people who can help in technical area</span>
            </p>
        </div>
      </div>
    </div>
  );
};
