import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechFlow Solutions",
      company: "TechFlow Solutions",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "Marketing Mantra transformed our lead generation completely. We saw a 300% increase in qualified leads within the first quarter. Their strategic approach and execution are unmatched.",
      companyLogo: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      name: "Michael Chen",
      position: "Marketing Director, GrowthCorp",
      company: "GrowthCorp",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "The website redesign and SEO optimization delivered incredible results. Our organic traffic increased by 250% and conversion rates doubled. Highly recommended for any B2B company.",
      companyLogo: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      name: "Emily Rodriguez",
      position: "VP Sales, DataDriven Inc",
      company: "DataDriven Inc",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "Their sales enablement program revolutionized our sales process. The CRM integration and training programs resulted in a 40% increase in close rates. Exceptional service and results.",
      companyLogo: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=200"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-36 h-36 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg sm:text-xl text-purple-100 max-w-3xl mx-auto">
              Don't just take our word for it - hear from the businesses we've helped transform
            </p>
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 lg:p-12 relative overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-500">
            {/* Quote Icon */}
            <div className="absolute top-4 sm:top-8 left-4 sm:left-8 opacity-20">
              <Quote className="w-12 h-12 sm:w-16 sm:h-16 text-purple-300" />
            </div>

            {/* Testimonial Content */}
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex justify-center mb-4 sm:mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 fill-current animate-pulse" style={{animationDelay: `${i * 100}ms`}} />
                ))}
              </div>

              {/* Text */}
              <blockquote className="text-lg sm:text-xl lg:text-2xl text-center mb-6 sm:mb-8 leading-relaxed animate-fade-in">
                "{testimonials[currentIndex].text}"
              </blockquote>

              {/* Author */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-4 border-white/20 hover:border-white/40 transition-all duration-300"
                  />
                  <div className="text-center sm:text-left">
                    <div className="font-semibold text-lg sm:text-xl">{testimonials[currentIndex].name}</div>
                    <div className="text-purple-200 text-sm sm:text-base">{testimonials[currentIndex].position}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <img 
                    src={testimonials[currentIndex].companyLogo} 
                    alt={testimonials[currentIndex].company}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg object-cover"
                  />
                  <div className="text-purple-300 text-sm sm:text-base font-medium">{testimonials[currentIndex].company}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <button 
            onClick={goToPrevious}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button 
            onClick={goToNext}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-6 sm:mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;