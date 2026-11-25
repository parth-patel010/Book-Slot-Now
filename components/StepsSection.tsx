import React from 'react';
import { Download, Monitor, Share2, PenTool } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: "Book Your Session @ ₹499",
    desc: "Sirf 499 rupaye mein apna startup aur business scaling session book karo. Neeche book karo, abhi!",
    icon: Download,
    color: "bg-yellow-100 text-yellow-600"
  },
  {
    id: 2,
    title: "Share Your Idea & Tech Questions",
    desc: "Startup launch karna hai ya business grow karna hai? Website, ads, systems mein jo confusing lagta hai, share karo.",
    icon: PenTool,
    color: "bg-blue-100 text-blue-600"
  },
  {
    id: 3,
    title: "1-on-1 CTO Guidance Call",
    desc: "Main aapka CTO ban ke guide karunga, idea se launch tak aur launch se scale tak har technical step clear karenge.",
    icon: Monitor,
    color: "bg-purple-100 text-purple-600"
  },
  {
    id: 4,
    title: "Execute & Scale Your Business",
    desc: "PM Web Solutions already 50+ brands ki business problems solve kar chuka hai. Ab aapki baari hai scale karne ki.",
    icon: Share2,
    color: "bg-green-100 text-green-600"
  }
];

export const StepsSection: React.FC = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block border border-gray-300 rounded-full px-4 py-1 text-sm font-semibold mb-4 bg-white shadow-sm">
            Idea Se Launch Tak Aur Launch Se Scale Tak
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900">Here's Are The 4 Steps</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="bg-white rounded-xl p-6 shadow-md border border-gray-100 relative overflow-hidden group hover:shadow-lg transition-all">
              <div className="flex gap-4">
                <div className={`w-16 h-16 rounded-xl ${step.color} flex items-center justify-center flex-shrink-0`}>
                  <step.icon size={32} />
                </div>
                <div className="flex-1 z-10">
                  <h3 className="text-red-500 font-bold text-lg mb-2 leading-tight">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              </div>
              <div className="absolute bottom-[-10px] right-2 text-8xl font-black text-gray-100 group-hover:text-gray-200 transition-colors pointer-events-none select-none">
                #{step.id}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
