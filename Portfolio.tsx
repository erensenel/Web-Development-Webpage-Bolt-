import React from 'react';
import { ExternalLink, ArrowRight, Calendar } from 'lucide-react';

interface PortfolioProps {
  onViewAll: () => void;
  onBooking: () => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ onViewAll, onBooking }) => {
  const projects = [
    {
      title: "Green Cafe",
      category: "Restaurant",
      description: "Modern restaurant website with online ordering",
      image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=500",
      tags: ["React", "Tailwind", "E-commerce"]
    },
    {
      title: "TechStart Solutions",
      category: "Technology",
      description: "SaaS landing page with conversion optimization",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=500",
      tags: ["Next.js", "Animation", "SEO"]
    },
    {
      title: "Bloom Fitness",
      category: "Health & Fitness",
      description: "Fitness studio website with class booking",
      image: "https://images.pexels.com/photos/1552108/pexels-photo-1552108.jpeg?auto=compress&cs=tinysrgb&w=500",
      tags: ["Vue.js", "Booking", "Mobile"]
    },
    {
      title: "Artisan Bakery",
      category: "Food & Beverage",
      description: "Artisan bakery with online store and delivery",
      image: "https://images.pexels.com/photos/1055271/pexels-photo-1055271.jpeg?auto=compress&cs=tinysrgb&w=500",
      tags: ["WordPress", "WooCommerce", "Delivery"]
    }
  ];

  return (
    <section id="work" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Recent Work
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Beautiful, fast-loading websites that convert visitors into customers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-green-600 bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 flex items-center justify-center">
                  <ExternalLink className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                  <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-gray-600 mb-6">Ready to see your business online?</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={onViewAll}
              className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200 transition-colors font-medium"
            >
              View All Projects
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
            <button 
              onClick={onBooking}
              className="inline-flex items-center px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold text-lg"
            >
              Chat Now
              <Calendar className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;