import React from 'react';
import { MessageSquare, Brain, Rocket, CheckCircle, Calendar } from 'lucide-react';

interface ProcessProps {
  onBooking: () => void;
}

const Process: React.FC<ProcessProps> = ({ onBooking }) => {
  const steps = [
    {
      icon: MessageSquare,
      title: "Tell me what you need",
      description: "Share your business goals, style preferences, and any specific features you want."
    },
    {
      icon: Brain,
      title: "I design it using AI + experience",
      description: "I combine cutting-edge AI tools with years of design expertise to create your perfect site."
    },
    {
      icon: Rocket,
      title: "You get a fast, modern site",
      description: "Receive a fully functional, mobile-responsive website optimized for speed and conversions."
    },
    {
      icon: CheckCircle,
      title: "48-hour delivery",
      description: "Your website is ready to launch within 48 hours, complete with hosting setup."
    }
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From concept to launch in just 4 simple steps
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-green-200 transition-colors">
                  <step.icon className="w-8 h-8 text-green-600" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button 
            onClick={onBooking}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg flex items-center mx-auto"
          >
            Let's Talk
            <Calendar className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Process;