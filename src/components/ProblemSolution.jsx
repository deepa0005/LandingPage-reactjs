import React from 'react';
import { AlertTriangle, Target, TrendingUp, Zap, CheckCircle } from 'lucide-react';

const ProblemSolution = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Low-Quality Leads",
      description: "Struggling to generate leads that convert into paying customers",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      icon: TrendingUp,
      title: "Poor ROI",
      description: "Marketing spend isn't delivering measurable business results",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      icon: Target,
      title: "Outdated Digital Presence",
      description: "Website and digital assets failing to engage modern B2B buyers",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const solutions = [
    {
      icon: Target,
      title: "Precision Targeting",
      description: "AI-powered lead generation that identifies and converts your ideal customers",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      icon: TrendingUp,
      title: "Measurable Growth",
      description: "Data-driven strategies that deliver trackable ROI and business impact",
      image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      icon: Zap,
      title: "Modern Solutions",
      description: "Cutting-edge digital assets that position you ahead of competitors",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              The B2B Growth Challenge
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Most B2B companies struggle with the same fundamental issues. 
              We've engineered solutions that address these challenges head-on.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Problems */}
          <div className="animate-fade-in-left">
            <h3 className="text-2xl sm:text-3xl font-bold text-red-600 mb-6 lg:mb-8 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 sm:w-8 sm:h-8 animate-pulse" />
              Common Problems
            </h3>
            <div className="space-y-4 lg:space-y-6">
              {problems.map((problem, index) => (
                <div key={index} className="group flex flex-col sm:flex-row items-start gap-4 p-4 sm:p-6 bg-white rounded-2xl border border-red-100 hover:border-red-200 transition-all duration-300 hover:shadow-xl hover:shadow-red-100/50 transform hover:-translate-y-1">
                  <div className="flex-shrink-0">
                    <img 
                      src={problem.image} 
                      alt={problem.title}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-red-100 p-2 sm:p-3 rounded-lg group-hover:bg-red-200 transition-colors duration-300">
                        <problem.icon className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                      </div>
                      <h4 className="font-semibold text-gray-900 text-lg">{problem.title}</h4>
                    </div>
                    <p className="text-gray-600">{problem.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div className="animate-fade-in-right">
            <h3 className="text-2xl sm:text-3xl font-bold text-purple-600 mb-6 lg:mb-8 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 animate-pulse" />
              Our Solutions
            </h3>
            <div className="space-y-4 lg:space-y-6">
              {solutions.map((solution, index) => (
                <div key={index} className="group flex flex-col sm:flex-row items-start gap-4 p-4 sm:p-6 bg-white rounded-2xl border border-purple-100 hover:border-purple-200 transition-all duration-300 hover:shadow-xl hover:shadow-purple-100/50 transform hover:-translate-y-1">
                  <div className="flex-shrink-0">
                    <img 
                      src={solution.image} 
                      alt={solution.title}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-purple-100 p-2 sm:p-3 rounded-lg group-hover:bg-purple-200 transition-colors duration-300">
                        <solution.icon className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                      </div>
                      <h4 className="font-semibold text-gray-900 text-lg">{solution.title}</h4>
                    </div>
                    <p className="text-gray-600">{solution.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;