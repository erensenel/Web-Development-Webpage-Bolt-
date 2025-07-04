import React from 'react';
import { Menu, X, Calendar } from 'lucide-react';

interface HeaderProps {
  onBooking: () => void;
}

const Header: React.FC<HeaderProps> = ({ onBooking }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="font-bold text-xl text-gray-900">
            Eren<span className="text-green-600">.</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#work" className="text-gray-600 hover:text-green-600 transition-colors">Work</a>
            <a href="#process" className="text-gray-600 hover:text-green-600 transition-colors">Process</a>
            <a href="#pricing" className="text-gray-600 hover:text-green-600 transition-colors">Pricing</a>
            <a href="#contact" className="text-gray-600 hover:text-green-600 transition-colors">Contact</a>
            
            <button 
              onClick={onBooking}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center"
            >
              Start Today
              <Calendar className="w-4 h-4 ml-2" />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <a href="#work" className="text-gray-600 hover:text-green-600 transition-colors">Work</a>
              <a href="#process" className="text-gray-600 hover:text-green-600 transition-colors">Process</a>
              <a href="#pricing" className="text-gray-600 hover:text-green-600 transition-colors">Pricing</a>
              <a href="#contact" className="text-gray-600 hover:text-green-600 transition-colors">Contact</a>
              
              <button 
                onClick={onBooking}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center mt-4"
              >
                Start Today
                <Calendar className="w-4 h-4 ml-2" />
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;