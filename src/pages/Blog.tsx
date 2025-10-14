import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';
import { getCourseImage } from '../lib/courseImages';

const Blog = () => {
  const blogPosts = [
    {
      id: 'future-embedded-systems',
      title: 'The Future of Embedded Systems: IoT Integration and AI',
      excerpt: 'Explore how embedded systems are evolving with IoT connectivity and AI capabilities, creating smarter and more efficient solutions for tomorrow.',
      image: getCourseImage('embedded-systems').src,
      author: 'Dr. Rajesh Kumar',
      date: '2025-01-15',
      readTime: '8 min read',
      category: 'Embedded Systems',
      featured: true,
    },
    {
      id: 'fullstack-trends-2025',
      title: 'Full Stack Development Trends to Watch in 2025',
      excerpt: 'Discover the latest technologies and frameworks that are shaping the future of full stack development this year.',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=500',
      author: 'Priya Sharma',
      date: '2025-01-12',
      readTime: '6 min read',
      category: 'Web Development',
      featured: false,
    },
    {
      id: 'iot-security-best-practices',
      title: 'IoT Security: Best Practices for Developers',
      excerpt: 'Learn essential security measures every IoT developer should implement to protect connected devices and user data.',
      image: 'https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=500',
      author: 'Amit Patel',
      date: '2025-01-10',
      readTime: '10 min read',
      category: 'IoT',
      featured: true,
    },
    {
      id: 'vlsi-design-career-guide',
      title: 'VLSI Design Career Guide: Skills and Opportunities',
      excerpt: 'A comprehensive guide to building a successful career in VLSI design, including required skills and industry opportunities.',
      image: getCourseImage('vlsi').src,
      author: 'Dr. Rajesh Kumar',
      date: '2025-01-08',
      readTime: '12 min read',
      category: 'VLSI',
      featured: false,
    },
    {
      id: 'mobile-app-development-guide',
      title: 'Mobile App Development: Native vs Cross-Platform',
      excerpt: 'Compare native and cross-platform development approaches to choose the best strategy for your mobile app project.',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=500',
      author: 'Sneha Reddy',
      date: '2025-01-05',
      readTime: '7 min read',
      category: 'Mobile Development',
      featured: false,
    },
    {
      id: 'student-project-success-tips',
      title: '10 Tips for Successful Engineering Projects',
      excerpt: 'Essential tips and strategies for students to execute successful engineering projects and impress their mentors.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=500',
      author: 'Priya Sharma',
      date: '2025-01-03',
      readTime: '5 min read',
      category: 'Education',
      featured: false,
    },
  ];

  const categories = ['All', 'Embedded Systems', 'Web Development', 'IoT', 'VLSI', 'Mobile Development', 'Education'];

  const featuredPost = blogPosts.find(post => post.featured) || blogPosts[0];
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Technology Insights</h1>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Stay updated with the latest trends, tutorials, and insights in technology and engineering.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Featured Article</h2>
            <p className="text-xl text-gray-600">Our latest and most popular content</p>
          </div>
          
          <Card className="overflow-hidden max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-80 lg:h-full object-cover"
              />
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                  <span className="bg-[#0B3D91] text-white px-3 py-1 rounded-full text-xs font-medium">
                    {featuredPost.category}
                  </span>
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    {new Date(featuredPost.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1" />
                    {featuredPost.readTime}
                  </div>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <User size={16} className="mr-2" />
                    {featuredPost.author}
                  </div>
                  <Button to={`/blog/${featuredPost.id}`} variant="tertiary">
                    Read More <ArrowRight size={16} className="ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Latest Articles</h2>
            <p className="text-xl text-gray-600">Explore our collection of technical articles and tutorials</p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full border-2 border-[#4BA3FF] text-[#0B3D91] hover:bg-[#4BA3FF] hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#4BA3FF] focus:ring-offset-2"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden h-full flex flex-col">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center space-x-4 mb-3 text-xs text-gray-500">
                    <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-grow leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center text-sm text-gray-500">
                      <User size={14} className="mr-1" />
                      {post.author}
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="btn-tertiary text-sm"
                    >
                      Read More <ArrowRight size={14} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Subscribe to our newsletter to get the latest articles, tutorials, and industry insights delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#4BA3FF]"
            />
            <Button className="bg-white text-[#0B3D91] hover:bg-gray-100 whitespace-nowrap">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;