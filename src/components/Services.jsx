import React from 'react';
import { Target, PenTool, Code, ShoppingCart, Search, Star, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Target,
      title: "Lead Generation",
      description: "Targeted campaigns that deliver qualified B2B prospects ready to convert",
      features: ["B2B Prospecting", "Email Campaigns", "LinkedIn Outreach", "CRM Integration"],
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: PenTool,
      title: "Content Marketing",
      description: "Strategic content that educates prospects and drives engagement",
      features: ["Blog Writing", "White Papers", "Case Studies", "Social Media"],
      image: "https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=400",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Code,
      title: "Website & App Development",
      description: "Modern, conversion-optimized digital experiences",
      features: ["Custom Development", "UI/UX Design", "Mobile Apps", "API Integration"],
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400",
      color: "from-pink-500 to-purple-500"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Complete online stores that drive sales and customer satisfaction",
      features: ["Store Development", "Payment Integration", "Inventory Management", "Analytics"],
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Search,
      title: "SEO / SEM",
      description: "Dominate search results and drive qualified traffic",
      features: ["Technical SEO", "Google Ads", "Keyword Research", "Local SEO"],
      image: "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=400",
      color: "from-indigo-500 to-pink-500"
    },
    {
      icon: Star,
      title: "Reputation Management",
      description: "Build and protect your brand's online reputation",
      features: ["Review Management", "Brand Monitoring", "Crisis Management", "PR Strategy"],
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400",
      color: "from-pink-500 to-indigo-500"
    },
    {
      icon: Users,
      title: "Sales Enablement",
      description: "Empower your sales team with the right tools and processes",
      features: ["Sales Funnels", "CRM Setup", "Training Programs", "Performance Analytics"],
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=400",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Comprehensive Digital Solutions
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              From strategy to execution, we provide everything you need to accelerate your B2B growth
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 transform hover:-translate-y-2 animate-fade-in-up" style={{animationDelay: `${index * 100}ms`}}>
              {/* Service Image */}
              <div className="relative mb-6 overflow-hidden rounded-xl">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-32 sm:h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Icon */}
              <div className={`bg-gradient-to-r ${service.color} p-3 sm:p-4 rounded-xl mb-4 sm:mb-6 inline-block group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">{service.title}</h3>
              <p className="text-gray-600 mb-4 sm:mb-6">{service.description}</p>
              
              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;