import React from 'react';
import { ExternalLink, TrendingUp, Eye } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "TechFlow Solutions",
      category: "Lead Generation",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
      result: "+300% Lead Quality",
      description: "Complete lead generation overhaul with automated nurturing sequences",
      metrics: ["300% Lead Quality", "150% Conversion Rate", "45% Cost Reduction"]
    },
    {
      title: "GrowthCorp Website",
      category: "Web Development",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      result: "+250% Organic Traffic",
      description: "Modern responsive website with advanced SEO optimization",
      metrics: ["250% Organic Traffic", "180% Page Speed", "65% Bounce Rate Reduction"]
    },
    {
      title: "DataDriven Inc",
      category: "Sales Enablement",
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800",
      result: "+40% Close Rate",
      description: "CRM integration and sales process optimization",
      metrics: ["40% Close Rate", "60% Sales Cycle Reduction", "200% Pipeline Growth"]
    },
    {
      title: "InnovateTech",
      category: "Content Marketing",
      image: "https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=800",
      result: "+180% Engagement",
      description: "Strategic content marketing campaign with thought leadership",
      metrics: ["180% Engagement", "120% Brand Awareness", "90% Lead Quality"]
    },
    {
      title: "ScaleUp Solutions",
      category: "E-commerce",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      result: "+220% Revenue",
      description: "Complete e-commerce platform with advanced analytics",
      metrics: ["220% Revenue", "160% Order Value", "75% Customer Retention"]
    },
    {
      title: "CloudTech Systems",
      category: "SEO/SEM",
      image: "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=800",
      result: "+400% Search Visibility",
      description: "Comprehensive SEO strategy with paid search optimization",
      metrics: ["400% Search Visibility", "280% Organic Traffic", "190% Click-through Rate"]
    }
  ];

  return (
    <section id="portfolio" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Portfolio Highlights
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from real businesses. See how we've helped companies achieve their growth objectives.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 transform hover:-translate-y-2 animate-fade-in-up" style={{animationDelay: `${index * 100}ms`}}>
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                    {project.category}
                  </span>
                </div>

                {/* View Project Button */}
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <button className="w-full bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-white transition-colors duration-300">
                    <Eye className="w-4 h-4" />
                    View Project
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                {/* Result Badge */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">{project.title}</h3>
                  <div className="flex items-center gap-1 text-green-600 font-semibold text-sm bg-green-50 px-2 py-1 rounded-full">
                    <TrendingUp className="w-4 h-4" />
                    {project.result}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{project.description}</p>

                {/* Metrics */}
                <div className="space-y-2">
                  {project.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                      <span className="text-gray-700">{metric}</span>
                    </div>
                  ))}
                </div>

                {/* External Link */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <button className="text-purple-600 hover:text-purple-700 font-medium flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                    View Case Study
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;