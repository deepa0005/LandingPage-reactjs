import React from 'react';
import { ArrowRight, Play, Sparkles, TrendingUp } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 animate-float">
          <Sparkles className="w-6 h-6 text-purple-300 opacity-60" />
        </div>
        <div className="absolute top-1/3 right-1/3 animate-float animation-delay-1000">
          <Sparkles className="w-4 h-4 text-pink-300 opacity-60" />
        </div>
        <div className="absolute bottom-1/4 left-1/3 animate-float animation-delay-2000">
          <Sparkles className="w-5 h-5 text-indigo-300 opacity-60" />
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center min-h-screen py-12 lg:py-20">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left lg:pr-8 xl:pr-12">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
                Strategic B2B Growth,
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 animate-gradient-x">
                  {" "}Engineered
                </span>
              </h1>
            </div>
            <div className="animate-fade-in-up animation-delay-300">
              <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-purple-100 max-w-2xl mx-auto lg:mx-0">
                Full-stack digital marketing & development agency for business growth
              </p>
            </div>
            <div className="animate-fade-in-up animation-delay-600">
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button 
                  onClick={scrollToContact}
                  className="group bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
                >
                  Schedule a Free Audit
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button 
                  onClick={scrollToContact}
                  className="group border-2 border-white/30 text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 backdrop-blur-sm"
                >
                  <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  Get Started Today
                </button>
              </div>
            </div>
          </div>
          
          {/* Visual Element */}
          <div className="flex-1 mt-12 lg:mt-0 w-full max-w-lg lg:max-w-none relative">
            {/* Main Hero Image */}
            <div className="relative animate-fade-in-up animation-delay-900">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl transform rotate-3 opacity-20 animate-pulse"></div>
              <div className="relative overflow-hidden rounded-3xl border-4 border-white/20 hover:border-white/40 transition-all duration-500 transform hover:scale-105 hover:rotate-1 shadow-2xl hover:shadow-purple-500/25">
                <img 
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Digital Marketing Team"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent to-transparent"></div>
                
                {/* Floating Elements on Image */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg animate-float">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-800">Live Analytics</span>
                  </div>
                </div>
                
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg animate-float animation-delay-1000">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-purple-600" />
                    <span className="text-sm font-medium text-gray-800">+300% Growth</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Stats Card Overlay */}
            <div className="relative animate-fade-in-up animation-delay-900">
              <div className="absolute -bottom-8 -left-4 sm:-left-8 bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-purple/20 hover:border-purple-300 transition-all duration-500 hover:transform hover:scale-105 shadow-xl hover:shadow-2xl z-10">
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  <div className="text-center group">
                    <div className="text-2xl sm:text-3xl font-bold text-purple-600 group-hover:text-purple-700 transition-colors duration-300 animate-count-up">100+</div>
                    <div className="text-xs sm:text-sm text-gray-600">Clients</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-2xl sm:text-3xl font-bold text-purple-600 group-hover:text-purple-700 transition-colors duration-300 animate-count-up animation-delay-200">500+</div>
                    <div className="text-xs sm:text-sm text-gray-600">Projects</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-2xl sm:text-3xl font-bold text-purple-600 group-hover:text-purple-700 transition-colors duration-300 animate-count-up animation-delay-400">10x</div>
                    <div className="text-xs sm:text-sm text-gray-600">ROI</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-2xl sm:text-3xl font-bold text-purple-600 group-hover:text-purple-700 transition-colors duration-300 animate-count-up animation-delay-600">5+</div>
                    <div className="text-xs sm:text-sm text-gray-600">Years</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;