import React from 'react';

const Tools = () => {
  const tools = [
    {
      name: "PHP",
      category: "Backend",
      image: "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=200",
      color: "from-purple-500 to-indigo-500"
    },
    {
      name: "Laravel",
      category: "Framework",
      image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=200",
      color: "from-red-500 to-pink-500"
    },
    {
      name: "WordPress",
      category: "CMS",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=200",
      color: "from-blue-500 to-purple-500"
    },
    {
      name: "React",
      category: "Frontend",
      image: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=200",
      color: "from-cyan-500 to-blue-500"
    },
    {
      name: "SEMrush",
      category: "SEO",
      image: "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=200",
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Google Ads",
      category: "PPC",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=200",
      color: "from-green-500 to-teal-500"
    },
    {
      name: "HubSpot",
      category: "CRM",
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=200",
      color: "from-orange-500 to-pink-500"
    },
    {
      name: "Salesforce",
      category: "Sales",
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=200",
      color: "from-blue-500 to-indigo-500"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Tools & Technologies
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage the latest technologies and industry-leading tools to deliver exceptional results
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6">
          {tools.map((tool, index) => (
            <div key={index} className="group text-center animate-fade-in-up" style={{animationDelay: `${index * 100}ms`}}>
              <div className="bg-gray-50 hover:bg-white p-4 sm:p-6 rounded-2xl transition-all duration-300 group-hover:shadow-xl border border-gray-100 hover:border-purple-200 transform hover:-translate-y-2">
                {/* Tool Image */}
                <div className="relative mb-3 sm:mb-4 overflow-hidden rounded-xl">
                  <img 
                    src={tool.image} 
                    alt={tool.name}
                    className="w-12 h-12 sm:w-16 sm:h-16 mx-auto object-cover rounded-xl group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                </div>

                {/* Tool Icon/Logo Placeholder */}
                <div className={`w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-2 sm:mb-3 bg-gradient-to-r ${tool.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <div className="w-4 h-4 sm:w-5 sm:h-5 bg-white rounded opacity-90"></div>
                </div>

                {/* Tool Info */}
                <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base group-hover:text-purple-600 transition-colors duration-300">{tool.name}</h3>
                <p className="text-xs text-gray-500 group-hover:text-gray-600 transition-colors duration-300">{tool.category}</p>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">And many more cutting-edge tools to power your growth</p>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
            View Full Tech Stack
          </button>
        </div>
      </div>
    </section>
  );
};

export default Tools;