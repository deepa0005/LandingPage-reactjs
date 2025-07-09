import React from 'react';
import { Target, Users, Award, TrendingUp, CheckCircle, Lightbulb } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: '100+', label: 'Happy Clients' },
    { icon: Award, number: '15+', label: 'Industry Awards' },
    { icon: TrendingUp, number: '10x', label: 'Average ROI' },
    { icon: Target, number: '500+', label: 'Projects Delivered' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'Every strategy is designed with measurable outcomes in mind',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We leverage cutting-edge technologies and creative solutions',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your success is our success - we grow together',
      color: 'from-pink-500 to-purple-500'
    },
    {
      icon: CheckCircle,
      title: 'Quality Assured',
      description: 'Rigorous testing and optimization ensure excellence',
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-purple-50/30 to-pink-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              About Marketing Mantra
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              We're a team of passionate digital marketing experts and developers dedicated to transforming B2B businesses through strategic growth solutions.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16">
          {/* Content */}
          <div className="animate-fade-in-left">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Engineered for Growth
            </h3>
            <div className="space-y-4 text-gray-600 mb-8">
              <p className="text-lg leading-relaxed">
                Founded with a vision to bridge the gap between traditional marketing and modern digital solutions, Marketing Mantra has evolved into a full-stack growth partner for ambitious B2B companies.
              </p>
              <p className="text-lg leading-relaxed">
                Our unique approach combines data-driven strategies with creative execution, ensuring every campaign not only looks great but delivers measurable business impact.
              </p>
              <p className="text-lg leading-relaxed">
                From lead generation to complete digital transformation, we've helped over 100 businesses achieve their growth objectives through innovative marketing solutions and cutting-edge technology.
              </p>
            </div>

            {/* Key Points */}
            <div className="space-y-3">
              {[
                'Full-stack digital marketing & development expertise',
                'Proven track record with 100+ successful projects',
                'Data-driven approach with transparent reporting',
                'Dedicated team of industry veterans'
              ].map((point, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                  <span className="text-gray-700">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="animate-fade-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl transform rotate-3 opacity-20"></div>
              <div className="relative overflow-hidden rounded-3xl border-4 border-white shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Marketing Mantra Team"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent to-transparent"></div>
                
                {/* Floating Stats */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                  <div className="text-2xl font-bold text-purple-600">5+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                  <div className="text-2xl font-bold text-purple-600">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group animate-fade-in-up" style={{animationDelay: `${index * 150}ms`}}>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 transform hover:-translate-y-2">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-xl mb-4 inline-block group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Our Core Values</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and drive our commitment to excellence
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="group text-center animate-fade-in-up" style={{animationDelay: `${index * 100}ms`}}>
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 transform hover:-translate-y-2 h-full">
                  <div className={`bg-gradient-to-r ${value.color} p-3 rounded-xl mb-4 inline-block group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;