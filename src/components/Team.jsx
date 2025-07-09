import React from 'react';
import { Linkedin, Mail, Award } from 'lucide-react';

const Team = () => {
  const team = [
    {
      name: "Alex Thompson",
      role: "Founder & CEO",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "15+ years in digital marketing strategy with expertise in B2B growth acceleration",
      linkedin: "#",
      email: "#",
      specialties: ["Strategy", "Leadership", "B2B Growth"]
    },
    {
      name: "Maria Rodriguez",
      role: "Head of Strategy",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Data-driven strategist specializing in conversion optimization and customer journey mapping",
      linkedin: "#",
      email: "#",
      specialties: ["Analytics", "Conversion", "Strategy"]
    },
    {
      name: "David Park",
      role: "Technical Director",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Full-stack developer with 10+ years building scalable web applications and e-commerce solutions",
      linkedin: "#",
      email: "#",
      specialties: ["Development", "Architecture", "E-commerce"]
    },
    {
      name: "Sarah Kim",
      role: "Creative Director",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Award-winning designer focused on creating compelling brand experiences and user interfaces",
      linkedin: "#",
      email: "#",
      specialties: ["Design", "Branding", "UX/UI"]
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              A collective of industry veterans passionate about driving B2B growth through innovative digital strategies
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {team.map((member, index) => (
            <div key={index} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 text-center border border-gray-100 hover:border-purple-200 transform hover:-translate-y-2 animate-fade-in-up" style={{animationDelay: `${index * 150}ms`}}>
              {/* Member Image */}
              <div className="relative mb-6">
                <div className="relative">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover mx-auto group-hover:scale-105 transition-transform duration-300 border-4 border-purple-100 group-hover:border-purple-200"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Award Badge */}
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100">
                  <Award className="w-4 h-4 text-white" />
                </div>
              </div>
              
              {/* Member Info */}
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors duration-300">{member.name}</h3>
              <p className="text-purple-600 font-medium mb-3 text-sm sm:text-base">{member.role}</p>
              <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
              
              {/* Specialties */}
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {member.specialties.map((specialty, specialtyIndex) => (
                  <span key={specialtyIndex} className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium group-hover:bg-purple-200 transition-colors duration-300">
                    {specialty}
                  </span>
                ))}
              </div>
              
              {/* Social Links */}
              <div className="flex justify-center gap-3">
                <a 
                  href={member.linkedin} 
                  className="bg-blue-100 hover:bg-blue-200 p-2 rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                </a>
                <a 
                  href={member.email} 
                  className="bg-gray-100 hover:bg-gray-200 p-2 rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                </a>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;