import React from 'react';
import { ArrowUp, Calendar, Mail, Phone } from 'lucide-react';

interface FooterProps {
  onBooking: () => void;
}

const Footer: React.FC<FooterProps> = ({ onBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        {/* Calendar Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Launch Your Website?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Don't wait weeks for your website. Get online in 48 hours with a design that converts.
            Schedule your free consultation now.
          </p>
          
          {/* TidyCal Calendar Embed */}
          <div className="max-w-2xl mx-auto bg-white rounded-lg p-6 mb-8">
            <div className="calendar-container">
              <div className="tidycal-embed" data-path="erensenels/30-minute-meeting"></div>
              <script src="https://asset-tidycal.b-cdn.net/js/embed.js" async></script>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-md mx-auto mb-8">
            <div className="flex items-center justify-center text-gray-300">
              <Mail className="w-5 h-5 mr-3 text-green-500" />
              <div className="text-left">
                <p className="text-white font-semibold">Email</p>
                <p className="text-sm">erensenels@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center text-gray-300">
              <Phone className="w-5 h-5 mr-3 text-green-500" />
              <div className="text-left">
                <p className="text-white font-semibold">Phone</p>
                <p className="text-sm">+905074334030</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-800 pt-8">
          <div className="mb-4 md:mb-0">
            <div className="font-bold text-2xl text-white mb-2">
              Eren<span className="text-green-500">.</span>
            </div>
            <p className="text-gray-400">
              Lightning-fast web design for modern businesses
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="#work" className="text-gray-400 hover:text-white transition-colors">Work</a>
            <a href="#process" className="text-gray-400 hover:text-white transition-colors">Process</a>
            <a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            
            <button
              onClick={scrollToTop}
              className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-full transition-colors"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Eren Design. All rights reserved. Built with passion and AI.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;