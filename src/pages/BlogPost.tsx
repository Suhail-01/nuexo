import React from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft, Share2 } from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';
import { getCourseImage } from '../lib/courseImages';

const BlogPost = () => {
  const { postId } = useParams();

  // Mock blog post data - in a real app, this would come from an API
  const blogPost = {
    id: postId,
    title: 'The Future of Embedded Systems: IoT Integration and AI',
    content: `
      <p>The world of embedded systems is undergoing a revolutionary transformation. What once were simple, dedicated computing devices are now evolving into intelligent, connected systems that can make autonomous decisions and communicate seamlessly with the broader digital ecosystem.</p>
      
      <h2>The Evolution of Embedded Systems</h2>
      <p>Traditional embedded systems were designed for specific functions with limited computational resources. Today's embedded systems are breaking these boundaries by incorporating advanced microprocessors, sophisticated sensors, and robust connectivity options.</p>
      
      <p>The integration of Internet of Things (IoT) capabilities has been a game-changer. Modern embedded systems can collect, process, and transmit data in real-time, enabling remote monitoring, predictive maintenance, and automated decision-making.</p>
      
      <h2>AI at the Edge</h2>
      <p>One of the most exciting developments is the implementation of artificial intelligence directly on embedded devices. This "edge AI" approach offers several advantages:</p>
      
      <ul>
        <li><strong>Reduced Latency:</strong> Processing data locally eliminates the need to send information to cloud servers, resulting in faster response times.</li>
        <li><strong>Enhanced Privacy:</strong> Sensitive data can be processed locally without leaving the device.</li>
        <li><strong>Lower Bandwidth Usage:</strong> Only relevant insights need to be transmitted, reducing network overhead.</li>
        <li><strong>Improved Reliability:</strong> Systems can function even when connectivity is limited or unavailable.</li>
      </ul>
      
      <h2>Real-World Applications</h2>
      <p>The convergence of embedded systems, IoT, and AI is creating innovative solutions across various industries:</p>
      
      <h3>Smart Manufacturing</h3>
      <p>Industrial IoT sensors monitor equipment health and performance, while embedded AI algorithms predict maintenance needs and optimize production processes. This leads to reduced downtime and improved efficiency.</p>
      
      <h3>Autonomous Vehicles</h3>
      <p>Modern vehicles rely on sophisticated embedded systems that process sensor data in real-time to make split-second decisions. AI algorithms enable features like lane keeping, collision avoidance, and adaptive cruise control.</p>
      
      <h3>Healthcare Monitoring</h3>
      <p>Wearable devices and medical implants use embedded AI to monitor vital signs, detect anomalies, and alert healthcare providers when intervention is needed.</p>
      
      <h2>Technical Challenges and Solutions</h2>
      <p>While the potential is enormous, developers face several challenges when implementing these advanced systems:</p>
      
      <h3>Resource Constraints</h3>
      <p>Embedded systems typically have limited processing power, memory, and energy resources. Optimizing AI algorithms for these constraints requires specialized techniques like model quantization and pruning.</p>
      
      <h3>Security Concerns</h3>
      <p>Connected embedded systems present new attack vectors. Implementing robust security measures, including encryption, secure boot processes, and regular updates, is crucial.</p>
      
      <h3>Development Complexity</h3>
      <p>The integration of multiple technologies increases development complexity. Modern development environments and frameworks are evolving to address these challenges.</p>
      
      <h2>Future Trends</h2>
      <p>Looking ahead, several trends will shape the future of embedded systems:</p>
      
      <ul>
        <li><strong>5G Integration:</strong> Ultra-low latency and high-speed connectivity will enable new applications and improve existing ones.</li>
        <li><strong>Advanced AI Chips:</strong> Specialized processors designed for AI workloads will become more powerful and energy-efficient.</li>
        <li><strong>Digital Twins:</strong> Virtual replicas of physical systems will enable better monitoring and optimization.</li>
        <li><strong>Sustainable Design:</strong> Energy-efficient designs and sustainable materials will become increasingly important.</li>
      </ul>
      
      <h2>Getting Started</h2>
      <p>For engineers and developers looking to enter this exciting field, here are some key areas to focus on:</p>
      
      <ol>
        <li><strong>Programming Languages:</strong> Master C/C++ for embedded development and Python for AI/ML work.</li>
        <li><strong>Hardware Platforms:</strong> Gain hands-on experience with popular development boards like Arduino, Raspberry Pi, and specialized AI chips.</li>
        <li><strong>Networking Protocols:</strong> Understand IoT communication protocols like MQTT, CoAP, and LoRaWAN.</li>
        <li><strong>Machine Learning:</strong> Learn about lightweight ML frameworks suitable for embedded systems.</li>
        <li><strong>Security:</strong> Study embedded security principles and best practices.</li>
      </ol>
      
      <h2>Conclusion</h2>
      <p>The future of embedded systems is bright and full of possibilities. As IoT connectivity becomes ubiquitous and AI algorithms become more efficient, we can expect to see even more innovative applications that improve our daily lives and transform industries.</p>
      
      <p>The key to success in this evolving field is continuous learning and hands-on experimentation. Whether you're a student, professional developer, or entrepreneur, now is the perfect time to dive into the exciting world of intelligent embedded systems.</p>
    `,
    author: 'Dr. Rajesh Kumar',
    date: '2025-01-15',
    readTime: '8 min read',
    category: 'Embedded Systems',
    image: getCourseImage('embedded-systems').src,
  };

  const relatedPosts = [
    {
      id: 'iot-security-best-practices',
      title: 'IoT Security: Best Practices for Developers',
      image: 'https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=300',
      date: '2025-01-10',
    },
    {
      id: 'vlsi-design-career-guide',
      title: 'VLSI Design Career Guide: Skills and Opportunities',
      image: getCourseImage('vlsi').src,
      date: '2025-01-08',
    },
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Header */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Button to="/blog" variant="tertiary" className="mb-6">
            <ArrowLeft size={16} className="mr-2" />
            Back to Blog
          </Button>
          
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
              <span className="bg-[#0B3D91] text-white px-3 py-1 rounded-full font-medium">
                {blogPost.category}
              </span>
              <div className="flex items-center">
                <Calendar size={16} className="mr-1" />
                {new Date(blogPost.date).toLocaleDateString()}
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-1" />
                {blogPost.readTime}
              </div>
            </div>
            
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              {blogPost.title}
            </h1>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#0B3D91] to-[#4BA3FF] rounded-full flex items-center justify-center">
                  <User size={20} className="text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{blogPost.author}</p>
                  <p className="text-sm text-gray-500">Senior Technical Lead</p>
                </div>
              </div>
              
              <button className="flex items-center space-x-2 text-gray-500 hover:text-[#0B3D91] transition-colors duration-300">
                <Share2 size={20} />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Featured Image */}
          <img
            src={blogPost.image}
            alt={blogPost.title}
            className="w-full h-96 object-cover rounded-xl shadow-lg mb-12"
          />
          
          {/* Content */}
          <div 
            className="prose prose-lg max-w-none"
            style={{
              lineHeight: '1.8',
              fontSize: '1.1rem',
            }}
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          />
          
          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-gray-500 mr-4">Tags:</span>
              {['Embedded Systems', 'IoT', 'AI', 'Edge Computing', 'Technology'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors duration-300 cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* Author Bio */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <Card className="p-8">
            <div className="flex items-center space-x-6">
              <div className="w-20 h-20 bg-gradient-to-r from-[#0B3D91] to-[#4BA3FF] rounded-full flex items-center justify-center flex-shrink-0">
                <User size={32} className="text-white" />
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{blogPost.author}</h3>
                <p className="text-gray-600 mb-4">
                  Dr. Rajesh Kumar is the Founder & CEO of Nuexo Technologies with over 15 years of experience in electronics engineering and embedded systems development. He has published numerous research papers and holds several patents in the field of IoT and embedded systems.
                </p>
                <div className="flex space-x-4">
                  <button className="text-[#0B3D91] hover:text-[#4BA3FF] transition-colors duration-300">
                    Follow on LinkedIn
                  </button>
                  <button className="text-[#0B3D91] hover:text-[#4BA3FF] transition-colors duration-300">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden group cursor-pointer">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#0B3D91] transition-colors duration-300">
                    {post.title}
                  </h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Learn More?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive training programs and take your embedded systems skills to the next level.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button to="/services/training" size="lg" className="bg-white text-[#0B3D91] hover:bg-gray-100">
              Explore Training Programs
            </Button>
            <Button to="/blog" variant="secondary" size="lg" className="border-white text-white hover:bg-white hover:text-[#0B3D91]">
              Read More Articles
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;