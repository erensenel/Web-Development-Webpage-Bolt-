import React from 'react';
import { ArrowLeft, Clock, CheckCircle, Calendar, Zap } from 'lucide-react';

interface BookingPageProps {
  onBack: () => void;
}

const BookingPage: React.FC<BookingPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onBack}
            className="flex items-center text-green-600 hover:text-green-700 font-medium transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </button>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Information */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Let's Build Your
                  <span className="text-green-600 block">Dream Website</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Book a free 30-minute consultation to discuss your project. 
                  I'll show you exactly how I can transform your business online in just 48 hours.
                </p>
              </div>

              {/* What to Expect */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Clock className="w-6 h-6 text-green-600 mr-3" />
                  What to Expect in Our Call
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Discuss your business goals and website needs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Review examples of similar projects I've completed</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Get a custom quote and timeline for your project</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Learn about my AI-powered design process</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Answer any questions about features and functionality</span>
                  </li>
                </ul>
              </div>

              {/* Why Choose Me */}
              <div className="bg-green-600 rounded-lg p-6 text-white">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Zap className="w-6 h-6 mr-3" />
                  Why Choose Eren?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span>48-hour delivery guaranteed</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span>AI-powered design process</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span>Mobile-first approach</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span>SEO optimization included</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span>No monthly fees</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span>100% satisfaction guarantee</span>
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=60" 
                    alt="Sarah Johnson"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">Sarah Johnson</h4>
                    <p className="text-sm text-gray-600">Green Thumb Landscaping</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "The consultation call was incredibly valuable. Eren understood exactly what we needed 
                  and delivered a website that exceeded our expectations in just 2 days!"
                </p>
              </div>
            </div>

            {/* Right Side - Calendar */}
            <div className="lg:sticky lg:top-24">
              <div className="bg-white rounded-lg shadow-xl p-6">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Schedule Your Free Consultation
                  </h2>
                  <p className="text-gray-600">
                    Pick a time that works best for you
                  </p>
                </div>

                {/* TidyCal Calendar Embed */}
                <div className="calendar-container">
                  <div className="tidycal-embed" data-path="erensenels/30-minute-meeting"></div>
                  <script src="https://asset-tidycal.b-cdn.net/js/embed.js" async></script>
                </div>

                {/* Additional Info */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-center text-sm text-gray-600 mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>30-minute call • Free consultation</span>
                  </div>
                  <p className="text-xs text-gray-500 text-center">
                    Can't find a suitable time? Email me at erensenels@gmail.com and we'll find a time that works.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;