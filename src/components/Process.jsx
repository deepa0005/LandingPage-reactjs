import React from 'react';
import { FileText, Search, Lightbulb, Cog, CheckCircle } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: FileText,
      title: "Brief",
      description: "We understand your business goals, target audience, and current challenges",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      icon: Search,
      title: "Research",
      description: "Deep dive into your market, competitors, and customer behavior patterns",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      icon: Lightbulb,
      title: "Ideation",
      description: "Creative strategy development and campaign conceptualization",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      icon: Cog,
      title: "Execution",
      description: "Implementation of campaigns with precision and attention to detail",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      icon: CheckCircle,
      title: "Delivery",
      description: "Ongoing optimization and transparent reporting of results",
      image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=300"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-20 w-40 h-40 bg-purple-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-pink-400 rounded-full animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-indigo-400 rounded-full animate-pulse animation-delay-4000"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Our Proven Process
            </h2>
            <p className="text-lg sm:text-xl text-purple-100 max-w-3xl mx-auto">
              A systematic approach that ensures every project delivers exceptional results
            </p>
          </div>
        </div>

        <div className="relative">
          {/* Timeline Line - Hidden on mobile, visible on large screens */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 transform -translate-y-1/2 rounded-full"></div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center group animate-fade-in-up" style={{animationDelay: `${index * 200}ms`}}>
                {/* Step Number */}
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-lg sm:text-2xl font-bold relative z-10 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {index + 1}
                </div>
                
                {/* Step Image */}
                <div className="mb-4 sm:mb-6">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover mx-auto group-hover:scale-105 transition-transform duration-300 shadow-lg"
                  />
                </div>
                
                {/* Icon */}
                <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-xl mb-4 inline-block group-hover:bg-white/20 transition-all duration-300 border border-white/20">
                  <step.icon className="w-6 h-6 sm:w-8 sm:h-8 text-purple-300 group-hover:text-white transition-colors duration-300" />
                </div>
                
                {/* Content */}
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 group-hover:text-purple-300 transition-colors duration-300">{step.title}</h3>
                <p className="text-sm sm:text-base text-purple-100 group-hover:text-white transition-colors duration-300">{step.description}</p>

                {/* Connecting Line for Mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-1 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;