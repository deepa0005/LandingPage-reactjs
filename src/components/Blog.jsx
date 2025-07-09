import React from 'react';
import { Calendar, ArrowRight, User, Clock } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      title: "The Ultimate Guide to B2B Lead Generation in 2024",
      excerpt: "Discover the latest strategies and techniques for generating high-quality B2B leads that convert into paying customers.",
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Alex Thompson",
      date: "Mar 15, 2024",
      readTime: "8 min read",
      category: "Lead Generation",
      categoryColor: "from-purple-500 to-pink-500"
    },
    {
      title: "Why Your B2B Website Isn't Converting (And How to Fix It)",
      excerpt: "Learn the common conversion killers on B2B websites and proven strategies to transform visitors into qualified leads.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Maria Rodriguez",
      date: "Mar 10, 2024",
      readTime: "6 min read",
      category: "Web Development",
      categoryColor: "from-indigo-500 to-purple-500"
    },
    {
      title: "The ROI of Content Marketing: Measuring What Matters",
      excerpt: "A comprehensive guide to measuring content marketing ROI and demonstrating value to stakeholders.",
      image: "https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "David Park",
      date: "Mar 5, 2024",
      readTime: "10 min read",
      category: "Content Marketing",
      categoryColor: "from-pink-500 to-purple-500"
    }
  ];

  return (
    <section id="blog" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-purple-50/30 to-pink-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Latest Insights
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Stay ahead of the curve with our latest thoughts on B2B marketing trends and strategies
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {posts.map((post, index) => (
            <article key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 transform hover:-translate-y-2 animate-fade-in-up" style={{animationDelay: `${index * 150}ms`}}>
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`bg-gradient-to-r ${post.categoryColor} text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg`}>
                    {post.category}
                  </span>
                </div>

                {/* Read Time */}
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </div>
              </div>
              
              <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>
                
                {/* Excerpt */}
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                
                {/* Read More Button */}
                <button className="text-purple-600 hover:text-purple-700 font-medium flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </article>
          ))}
        </div>

        {/* View All Posts Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            View All Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;