import React from 'react';
import { Users, Target, Eye, Award } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission',
      description: 'To bridge the gap between academic learning and industry requirements by providing practical, hands-on training in emerging technologies.',
    },
    {
      icon: Eye,
      title: 'Vision',
      description: 'To become the leading platform for electronics and software education, empowering the next generation of innovators and entrepreneurs.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from curriculum design to student support, ensuring the highest quality learning experience.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a strong community of learners, mentors, and industry professionals working together towards technological advancement.',
    },
  ];

  const team = [
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Ph.D. in Electronics Engineering with 15+ years of industry experience.',
    },
    {
      name: 'Priya Sharma',
      role: 'Head of Training',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'M.Tech in Computer Science, Former Senior Software Engineer at top MNC.',
    },
    {
      name: 'Amit Patel',
      role: 'Technical Director',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Expert in IoT and Embedded Systems with 12+ years of R&D experience.',
    },
    {
      name: 'Sneha Reddy',
      role: 'Head of Operations',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'MBA with specialization in Operations Management and startup experience.',
    },
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">About Nuexo Technologies</h1>
            <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
              Empowering the next generation of engineers and developers through practical education, innovative projects, and industry partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Founded in 2020, Nuexo Technologies emerged from a simple observation: there was a significant gap between what students learned in universities and what the industry actually needed. Our founders, experienced professionals from both academia and industry, decided to bridge this gap.
                </p>
                <p>
                  Starting with a small team of passionate educators and engineers, we began offering specialized training programs in embedded systems and IoT. The response was overwhelming, with students praising our hands-on approach and practical curriculum.
                </p>
                <p>
                  Today, we've expanded our offerings to include full-stack development, mobile app development, VLSI design, and comprehensive project assistance. We've helped over 2,000 students launch successful careers and supported numerous startups in bringing their innovative ideas to life.
                </p>
                <p>
                  Our commitment remains unchanged: providing world-class education that prepares students for real-world challenges while fostering innovation and entrepreneurship in the technology sector.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=300"
                alt="Students in lab"
                className="rounded-lg shadow-lg"
              />
              <img
                src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=300"
                alt="Coding session"
                className="rounded-lg shadow-lg mt-8"
              />
              <img
                src="https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=300"
                alt="Electronics lab"
                className="rounded-lg shadow-lg -mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              These core values guide everything we do at Nuexo Technologies, from curriculum development to student support.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-8 text-center h-full">
                <div className="w-16 h-16 bg-gradient-to-r from-[#0B3D91] to-[#4BA3FF] rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our experienced team of educators, engineers, and industry professionals are dedicated to your success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{member.name}</h3>
                  <p className="text-[#0B3D91] font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Be part of our journey to transform technology education and create the next generation of innovators.
          </p>
          <Button to="/services" size="lg" className="bg-white text-[#0B3D91] hover:bg-gray-100">
            Explore Our Services
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;