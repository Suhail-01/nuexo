import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Cpu, Smartphone, Users, Clock, Award } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';

const Services = () => {
  const mainServices = [
    {
      id: 'training',
      icon: Code,
      title: 'Training & Internships',
      description: 'Comprehensive programs in Embedded Systems, IoT, VLSI, Full Stack Development, and Mobile App Development with industry-relevant curriculum and hands-on projects.',
      features: ['Expert Mentorship', 'Live Projects', 'Placement Assistance', 'Flexible Schedules'],
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=500',
      cta: 'Register',
      link: '/register',
    },
    {
      id: 'projects',
      icon: Cpu,
      title: 'Project Assistance & Support',
      description: 'Expert guidance for student projects, final year projects, research initiatives, prototyping, and R&D support across various technology domains.',
      features: ['Technical Guidance', 'Research Support', 'Prototype Development', 'Documentation Help'],
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=500',
      cta: 'Enquire Now',
      link: '/services/projects',
    },
    {
      id: 'development',
      icon: Smartphone,
      title: 'Web & App Development',
      description: 'Professional development services for businesses and startups including responsive websites, mobile applications, and custom software solutions.',
      features: ['Custom Solutions', 'Responsive Design', 'Modern Technologies', 'Ongoing Support'],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=500',
      cta: 'Get Quote',
      link: '/services/development',
    },
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Learn from industry professionals with years of real-world experience.',
    },
    {
      icon: Clock,
      title: 'Flexible Learning',
      description: 'Choose from online, offline, or hybrid modes that suit your schedule.',
    },
    {
      icon: Award,
      title: 'Industry Recognition',
      description: 'Our programs are recognized by leading companies in the tech industry.',
    },
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Comprehensive technology education and professional development services designed to accelerate your career and bring your ideas to life.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#0B3D91] to-[#4BA3FF] rounded-full flex items-center justify-center mr-4">
                      <service.icon size={32} className="text-white" />
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">{service.title}</h2>
                  </div>
                  <p className="text-xl text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Features:</h3>
                    <ul className="grid grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-[#4BA3FF] rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <Button to={service.link} size="lg">
                      {service.cta}
                    </Button>
                    <Link
                      to={`/services/${service.id}`}
                      className="btn-tertiary inline-flex items-center"
                    >
                      Learn More <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <Card className="overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-80 object-cover"
                    />
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Why Choose Our Services?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We provide more than just training and services – we offer a complete ecosystem for your professional growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#0B3D91] to-[#4BA3FF] rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Take the first step towards advancing your career or bringing your project to life. Our team is here to support you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button to="/register" size="lg" className="bg-white text-[#0B3D91] hover:bg-gray-100">
              Start Your Journey
            </Button>
            <Button to="/faq" variant="secondary" size="lg" className="border-white text-white hover:bg-white hover:text-[#0B3D91]">
              Have Questions?
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;