import React from 'react';
import { Check, Star, Calendar } from 'lucide-react';

interface PricingProps {
  onBooking: () => void;
}

const Pricing: React.FC<PricingProps> = ({ onBooking }) => {
  const plans = [
    {
      name: "Starter Site",
      price: "$99",
      description: "Perfect for small businesses getting started online",
      features: [
        "Professional 2-page website",
        "Mobile-responsive design",
        "Basic SEO optimization",
        "Contact form",
        "1 round of revisions",
        "48-hour delivery"
      ],
      popular: false,
      cta: "Start Project"
    },
    {
      name: "Business Site",
      price: "$297",
      description: "For businesses that need more pages and features",
      features: [
        "Everything in Starter Site, plus:",
        "Up to 5 pages (vs 2 pages)",
        "Advanced SEO optimization",
        "Social media integration",
        "2 revision rounds (vs 1)",
        "Priority email support"
      ],
      popular: false,
      cta: "Choose Business"
    },
    {
      name: "Business Pro",
      price: "$497",
      description: "For growing businesses that need more control",
      features: [
        "Everything in Business Site, plus:",
        "Up to 10 pages (vs 5 pages)",
        "Built on user-friendly platform",
        "Full admin access for self-editing",
        "3 rounds of revisions (vs 2)",
        "30 days post-launch support"
      ],
      popular: true,
      cta: "Choose Pro"
    },
    {
      name: "Enterprise",
      price: "$1,200",
      description: "Custom solutions for complex business needs",
      features: [
        "Everything in Business Pro, plus:",
        "Unlimited pages (vs 10 pages)",
        "Custom functionality & features",
        "API integrations",
        "Performance optimization",
        "Unlimited revisions (vs 3)",
        "90 days post-launch support (vs 30)"
      ],
      popular: false,
      cta: "Go Enterprise"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            No hidden fees. No monthly payments. Just fast, beautiful websites at fair prices.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`relative bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full ${plan.popular ? 'ring-2 ring-green-500' : 'border border-gray-200'}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="p-6 flex flex-col flex-grow">
                {/* Header Section - Fixed Height */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 h-6">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 h-10 leading-5">{plan.description}</p>
                  
                  {/* Price Section - Fixed Height */}
                  <div className="h-16 flex items-center">
                    <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-2">one-time</span>
                  </div>
                </div>
                
                {/* Features Section - Flexible Height */}
                <div className="flex-grow">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className={`text-sm leading-relaxed ${
                          feature.startsWith('Everything in') 
                            ? 'text-green-700 font-medium' 
                            : 'text-gray-700'
                        }`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* CTA Button - Fixed Position at Bottom */}
                <div className="mt-6 pt-4">
                  <button 
                    onClick={onBooking}
                    className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 flex items-center justify-center text-sm ${
                      plan.popular 
                        ? 'bg-green-600 text-white hover:bg-green-700 shadow-lg' 
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {plan.cta}
                    <Calendar className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Need something custom? Let's talk about your specific needs.
          </p>
          <button 
            onClick={onBooking}
            className="text-green-600 hover:text-green-700 font-semibold text-lg flex items-center mx-auto"
          >
            Book Free Call
            <Calendar className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;