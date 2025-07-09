import React, { useState, useEffect } from 'react';
import { Users, FolderOpen, TrendingUp, Award } from 'lucide-react';

const Results = () => {
  const [counts, setCounts] = useState({
    clients: 0,
    projects: 0,
    roi: 0,
    awards: 0
  });

  const finalCounts = {
    clients: 100,
    projects: 500,
    roi: 10,
    awards: 15
  };

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    
    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      setCounts({
        clients: Math.floor((finalCounts.clients * currentStep) / steps),
        projects: Math.floor((finalCounts.projects * currentStep) / steps),
        roi: Math.floor((finalCounts.roi * currentStep) / steps),
        awards: Math.floor((finalCounts.awards * currentStep) / steps)
      });
      
      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, stepDuration);
    
    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      icon: Users,
      number: counts.clients,
      suffix: '+',
      label: 'Happy Clients',
      description: 'Businesses transformed through our strategic approach',
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: FolderOpen,
      number: counts.projects,
      suffix: '+',
      label: 'Projects Delivered',
      description: 'Successful campaigns and digital solutions launched',
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=300",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: TrendingUp,
      number: counts.roi,
      suffix: 'x',
      label: 'Average ROI',
      description: 'Return on investment delivered to our clients',
      image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=300",
      color: "from-pink-500 to-purple-500"
    },
    {
      icon: Award,
      number: counts.awards,
      suffix: '+',
      label: 'Industry Awards',
      description: 'Recognition for excellence in digital marketing',
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=300",
      color: "from-purple-500 to-indigo-500"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Results That Speak Volumes
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Our track record demonstrates consistent delivery of exceptional outcomes for our clients
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group animate-fade-in-up" style={{animationDelay: `${index * 150}ms`}}>
              <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 transform hover:-translate-y-3 relative overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                  <img 
                    src={stat.image} 
                    alt={stat.label}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Icon */}
                <div className={`bg-gradient-to-r ${stat.color} p-3 sm:p-4 rounded-xl mb-4 sm:mb-6 inline-block group-hover:scale-110 transition-transform duration-300 shadow-lg relative z-10`}>
                  <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>

                {/* Number */}
                <div className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2 relative z-10">
                  <span className="group-hover:text-purple-600 transition-colors duration-300">{stat.number}</span>
                  <span className="text-purple-600">{stat.suffix}</span>
                </div>

                {/* Label */}
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 group-hover:text-purple-600 transition-colors duration-300 relative z-10">{stat.label}</h3>
                
                {/* Description */}
                <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-700 transition-colors duration-300 relative z-10">{stat.description}</p>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                <div className="absolute inset-0.5 rounded-2xl bg-white group-hover:bg-white transition-colors duration-300 -z-10"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;