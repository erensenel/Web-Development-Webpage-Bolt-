import React from 'react';
import { ArrowRight, Zap, Clock, Check, Calendar } from 'lucide-react';

interface HeroProps {
  onBooking: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBooking }) => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-white pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-800 text-sm font-medium mb-6">
            <Zap className="w-4 h-4 mr-2" />
            Lightning-Fast Web Design
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Websites,<br />
            <span className="text-green-600">Fast.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Hi, I'm Eren, a lightning-fast web designer who uses cutting-edge AI tools to build your website quickly, beautifully, and affordably.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button 
              onClick={onBooking}
              className="group bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg flex items-center"
            >
              Book Free Call
              <Calendar className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <div className="flex items-center text-gray-600">
              <Clock className="w-5 h-5 mr-2" />
              <span>48-hour delivery</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center text-gray-600">
              <Check className="w-5 h-5 mr-2 text-green-600" />
              <span>AI-Powered Design</span>
            </div>
            <div className="flex items-center justify-center text-gray-600">
              <Check className="w-5 h-5 mr-2 text-green-600" />
              <span>Mobile Responsive</span>
            </div>
            <div className="flex items-center justify-center text-gray-600">
              <Check className="w-5 h-5 mr-2 text-green-600" />
              <span>SEO Optimized</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;