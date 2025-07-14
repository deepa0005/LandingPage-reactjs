import React, { useState } from 'react';
import axios from 'axios';
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    services: '',
    message: ''
  });

  const [status, setStatus] = useState(null); // For feedback
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     await axios.post('https://landing-page-nodejs-1.onrender.com/api/leads', formData);
  //     setStatus('success');
  //     setFormData({
  //       name: '',
  //       email: '',
  //       company: '',
  //       services: '',
  //       message: ''
  //     });
  //   } catch (error) {
  //     setStatus('error');
  //     console.error('Error submitting form:', error);
  //   }
  // };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  try {
    await axios.post(`${import.meta.env.VITE_API_BASE_URL}/leads`, formData);
    setStatus('success');
    setFormData({ name: '', email: '', company: '', services: '', message: '' });
  } catch (error) {
    setStatus('error');
  } finally {
    setLoading(false);
  }
};
  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Let's Discuss Your Growth Plan
            </h2>
            <p className="text-lg sm:text-xl text-purple-100 max-w-3xl mx-auto">
              Ready to accelerate your B2B growth? Get in touch for a free consultation and custom strategy.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="animate-fade-in-left">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 hover:border-white/40 transition-all duration-500">
              <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-purple-200 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-purple-200 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                      placeholder="john@company.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-purple-200 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="services" className="block text-sm font-medium mb-2">
                    Services Interested In
                  </label>
                  <select
                    id="services"
                    name="services"
                    value={formData.services}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                  >
                    <option value="" className="text-gray-900">Select a service</option>
                    <option value="lead-generation" className="text-gray-900">Lead Generation</option>
                    <option value="content-marketing" className="text-gray-900">Content Marketing</option>
                    <option value="web-development" className="text-gray-900">Website & App Development</option>
                    <option value="ecommerce" className="text-gray-900">E-commerce Solutions</option>
                    <option value="seo-sem" className="text-gray-900">SEO / SEM</option>
                    <option value="reputation-management" className="text-gray-900">Reputation Management</option>
                    <option value="sales-enablement" className="text-gray-900">Sales Enablement</option>
                    <option value="multiple" className="text-gray-900">Multiple Services</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-purple-200 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 resize-none"
                    placeholder="Tell us about your project and goals..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full bg-gradient-to-r from-purple-500 to-pink-500 ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:from-purple-600 hover:to-pink-600'} text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105 shadow-lg hover:shadow-xl`}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                  {!loading && <Send className="w-5 h-5" />}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 lg:space-y-8 animate-fade-in-right">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in touch</h3>
              <p className="text-purple-100 mb-8">
                We're here to help you achieve your B2B growth objectives.
                Reach out to discuss your specific needs and get a custom strategy.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-lg">Our Office</h4>
                  <p className="text-purple-100">
                    123 Business District<br />
                    San Francisco, CA 94105<br />
                    United States
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-lg">Phone</h4>
                  <p className="text-purple-100">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-lg">Email</h4>
                  <p className="text-purple-100">hello@marketingmantra.com</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-purple-300" />
                <h4 className="font-semibold text-lg">Business Hours</h4>
              </div>
              <div className="space-y-2 text-purple-100">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;