import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-12 sm:pt-16 pb-6 sm:pb-8 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 sm:mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Marketing Mantra
            </h3>
            <p className="text-gray-300 mb-6 text-sm sm:text-base">
              Strategic B2B growth engineered through innovative digital marketing solutions and cutting-edge technology.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a href="#" className="group bg-gray-800 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 p-2 sm:p-3 rounded-lg transition-all duration-300 transform hover:scale-110">
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5 group-hover:text-white transition-colors duration-300" />
              </a>
              <a href="#" className="group bg-gray-800 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 p-2 sm:p-3 rounded-lg transition-all duration-300 transform hover:scale-110">
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5 group-hover:text-white transition-colors duration-300" />
              </a>
              <a href="#" className="group bg-gray-800 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 p-2 sm:p-3 rounded-lg transition-all duration-300 transform hover:scale-110">
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 group-hover:text-white transition-colors duration-300" />
              </a>
              <a href="#" className="group bg-gray-800 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 p-2 sm:p-3 rounded-lg transition-all duration-300 transform hover:scale-110">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5 group-hover:text-white transition-colors duration-300" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-300">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Portfolio', 'Blog', 'Contact'].map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm sm:text-base hover:translate-x-1 transform inline-block">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-300">Services</h4>
            <ul className="space-y-2">
              {[
                'Lead Generation',
                'Content Marketing', 
                'Web Development',
                'E-commerce',
                'SEO / SEM',
                'Reputation Management'
              ].map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm sm:text-base hover:translate-x-1 transform inline-block">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-300">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 group">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 mt-1 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <p className="text-gray-300 text-sm sm:text-base">123 Business District</p>
                  <p className="text-gray-300 text-sm sm:text-base">San Francisco, CA 94105</p>
                </div>
              </div>
              <div className="flex items-center gap-3 group">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-gray-300 text-sm sm:text-base">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center gap-3 group">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-gray-300 text-sm sm:text-base">hello@marketingmantra.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm flex items-center gap-2">
              © {currentYear} Marketing Mantra. Made with 
              <Heart className="w-4 h-4 text-red-500 animate-pulse" /> 
              for your growth.
            </p>
            <div className="flex flex-wrap gap-4 sm:gap-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link, index) => (
                <a key={index} href="#" className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-300">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;