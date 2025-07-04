import React, { useState, useMemo } from 'react';
import { ArrowLeft, ExternalLink, Github, Filter, Grid, List, Calendar, Search } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  completionDate: string;
  clientType: string;
}

interface PortfolioPageProps {
  onBack: () => void;
}

const PortfolioPage: React.FC<PortfolioPageProps> = ({ onBack }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedTech, setSelectedTech] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('newest');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const projectsPerPage = 9;

  const projects: Project[] = [
    {
      id: 1,
      title: "Green Cafe",
      category: "Restaurant",
      description: "Modern restaurant website with online ordering system",
      longDescription: "A comprehensive restaurant website featuring an intuitive online ordering system, menu management, and customer reviews. Built with a focus on mobile-first design and fast loading times.",
      image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Tailwind CSS", "Node.js", "Stripe"],
      liveUrl: "https://greencafe-demo.com",
      completionDate: "2024-01-15",
      clientType: "Small Business"
    },
    {
      id: 2,
      title: "TechStart Solutions",
      category: "Technology",
      description: "SaaS landing page with conversion optimization",
      longDescription: "A high-converting SaaS landing page designed to maximize sign-ups. Features include interactive demos, pricing calculators, and A/B tested conversion elements.",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Next.js", "TypeScript", "Framer Motion", "Analytics"],
      liveUrl: "https://techstart-demo.com",
      completionDate: "2024-01-10",
      clientType: "Startup"
    },
    {
      id: 3,
      title: "Bloom Fitness",
      category: "Health & Fitness",
      description: "Fitness studio website with class booking system",
      longDescription: "A dynamic fitness studio website with integrated class scheduling, trainer profiles, and membership management. Optimized for mobile users on-the-go.",
      image: "https://images.pexels.com/photos/1552108/pexels-photo-1552108.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS", "Calendar API"],
      liveUrl: "https://bloomfitness-demo.com",
      completionDate: "2024-01-05",
      clientType: "Small Business"
    },
    {
      id: 4,
      title: "Artisan Bakery",
      category: "Food & Beverage",
      description: "Artisan bakery with online store and delivery tracking",
      longDescription: "An elegant e-commerce solution for an artisan bakery featuring product catalogs, custom cake ordering, and real-time delivery tracking.",
      image: "https://images.pexels.com/photos/1055271/pexels-photo-1055271.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["WordPress", "WooCommerce", "PHP", "Payment Gateway"],
      liveUrl: "https://artisanbakery-demo.com",
      completionDate: "2023-12-28",
      clientType: "Small Business"
    },
    {
      id: 5,
      title: "Digital Marketing Pro",
      category: "Marketing",
      description: "Marketing agency portfolio with case studies",
      longDescription: "A comprehensive marketing agency website showcasing services, case studies, and client testimonials. Features interactive portfolio and lead generation forms.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Gatsby", "GraphQL", "CMS"],
      liveUrl: "https://digitalmarketing-demo.com",
      completionDate: "2023-12-20",
      clientType: "Agency"
    },
    {
      id: 6,
      title: "Urban Architecture",
      category: "Architecture",
      description: "Architecture firm showcase with project galleries",
      longDescription: "A sophisticated architecture firm website featuring project galleries, team profiles, and service descriptions. Emphasizes visual storytelling and portfolio presentation.",
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Three.js", "GSAP", "Lightbox"],
      liveUrl: "https://urbanarch-demo.com",
      completionDate: "2023-12-15",
      clientType: "Professional Services"
    },
    {
      id: 7,
      title: "EcoClean Services",
      category: "Services",
      description: "Eco-friendly cleaning service with booking system",
      longDescription: "A clean, modern website for an eco-friendly cleaning service with online booking, service area maps, and customer testimonials.",
      image: "https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Tailwind CSS", "Booking API", "Maps"],
      liveUrl: "https://ecoclean-demo.com",
      completionDate: "2023-12-10",
      clientType: "Small Business"
    },
    {
      id: 8,
      title: "Fashion Forward",
      category: "E-commerce",
      description: "Fashion e-commerce with AR try-on features",
      longDescription: "A cutting-edge fashion e-commerce platform featuring AR try-on technology, size recommendations, and social shopping features.",
      image: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "AR.js", "Shopify", "AI"],
      liveUrl: "https://fashionforward-demo.com",
      completionDate: "2023-12-05",
      clientType: "E-commerce"
    },
    {
      id: 9,
      title: "Legal Eagles",
      category: "Legal",
      description: "Law firm website with consultation booking",
      longDescription: "A professional law firm website with practice area descriptions, attorney profiles, and secure consultation booking system.",
      image: "https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Next.js", "TypeScript", "Security", "Forms"],
      liveUrl: "https://legaleagles-demo.com",
      completionDate: "2023-11-30",
      clientType: "Professional Services"
    },
    {
      id: 10,
      title: "Pet Paradise",
      category: "Pet Services",
      description: "Pet care service with appointment scheduling",
      longDescription: "A friendly pet care website featuring service descriptions, staff profiles, and easy appointment scheduling for busy pet owners.",
      image: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Vue.js", "Calendar", "Payment", "Mobile"],
      liveUrl: "https://petparadise-demo.com",
      completionDate: "2023-11-25",
      clientType: "Small Business"
    },
    {
      id: 11,
      title: "Mountain Adventures",
      category: "Travel",
      description: "Adventure travel booking with interactive maps",
      longDescription: "An exciting adventure travel website with interactive maps, tour booking, and real-time availability checking for outdoor enthusiasts.",
      image: "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Maps API", "Booking", "Weather API"],
      liveUrl: "https://mountainadv-demo.com",
      completionDate: "2023-11-20",
      clientType: "Travel"
    },
    {
      id: 12,
      title: "Smart Home Hub",
      category: "Technology",
      description: "IoT device management dashboard",
      longDescription: "A sophisticated IoT dashboard for smart home management with device controls, energy monitoring, and automation scheduling.",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "IoT", "Dashboard", "Real-time"],
      liveUrl: "https://smarthome-demo.com",
      completionDate: "2023-11-15",
      clientType: "Technology"
    }
  ];

  // Get unique categories and technologies
  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];
  const technologies = ['All', ...Array.from(new Set(projects.flatMap(p => p.technologies)))];

  // Filter and sort projects
  const filteredAndSortedProjects = useMemo(() => {
    let filtered = projects.filter(project => {
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
      const matchesTech = selectedTech === 'All' || project.technologies.includes(selectedTech);
      const matchesSearch = searchTerm === '' || 
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
      
      return matchesCategory && matchesTech && matchesSearch;
    });

    // Sort projects
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.completionDate).getTime() - new Date(a.completionDate).getTime();
        case 'oldest':
          return new Date(a.completionDate).getTime() - new Date(b.completionDate).getTime();
        case 'alphabetical':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

    return filtered;
  }, [projects, selectedCategory, selectedTech, sortBy, searchTerm]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const paginatedProjects = filteredAndSortedProjects.slice(startIndex, startIndex + projectsPerPage);

  // Reset pagination when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, selectedTech, searchTerm, sortBy]);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
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
          
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-green-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-green-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Title and Description */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            My Portfolio
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive collection of websites I've built for businesses across various industries. 
            Each project showcases modern design, fast performance, and conversion-focused features.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>

            {/* Technology Filter */}
            <select
              value={selectedTech}
              onChange={(e) => setSelectedTech(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {technologies.map(tech => (
                <option key={tech} value={tech}>{tech}</option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="alphabetical">A-Z</option>
            </select>

            {/* Results Count */}
            <div className="flex items-center justify-center bg-gray-100 rounded-lg px-4 py-2">
              <span className="text-gray-600 font-medium">
                {filteredAndSortedProjects.length} Projects
              </span>
            </div>
          </div>
        </div>

        {/* Projects Grid/List */}
        {paginatedProjects.length > 0 ? (
          <div className={viewMode === 'grid' 
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12" 
            : "space-y-6 mb-12"
          }>
            {paginatedProjects.map((project) => (
              <div key={project.id} className={`bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow group ${
                viewMode === 'list' ? 'flex flex-col md:flex-row' : ''
              }`}>
                <div className={`relative overflow-hidden ${
                  viewMode === 'list' ? 'md:w-1/3' : ''
                }`}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className={`w-full object-cover group-hover:scale-105 transition-transform duration-300 ${
                      viewMode === 'list' ? 'h-48 md:h-full' : 'h-64'
                    }`}
                  />
                  <div className="absolute inset-0 bg-green-600 bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white text-green-600 p-2 rounded-full hover:bg-green-600 hover:text-white transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className={`p-6 ${viewMode === 'list' ? 'md:w-2/3 flex flex-col justify-between' : ''}`}>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                      <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">
                      {viewMode === 'list' ? project.longDescription : project.description}
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{project.clientType}</span>
                      <span>{new Date(project.completionDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Filter className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No projects found</h3>
            <p className="text-gray-500">Try adjusting your filters or search terms</p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center space-x-2 mb-12">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-white border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              Previous
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded-lg ${
                  currentPage === page
                    ? 'bg-green-600 text-white'
                    : 'bg-white border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {page}
              </button>
            ))}
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-white border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              Next
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-green-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-6 opacity-90">
            Let's create something amazing together. Your website could be the next success story.
          </p>
          <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center mx-auto">
            Start Your Project
            <Calendar className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;