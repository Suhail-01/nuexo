import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Award, Clock, Globe, Code, Cpu, Smartphone } from 'lucide-react';
import { ResponsiveGrid } from '../components/ResponsiveGrid';
import { MediaCard } from '../components/MediaCard';
import Button from '../components/Button';
import { getCourseImage } from '../lib/courseImages';
import heroImage from '../assets/images/hero-image.png';

const Home = () => {
  const features = [
    {
      icon: Users,
      title: 'Expert Mentors',
      description: 'Learn from industry professionals with years of experience in electronics and software development.',
    },
    {
      icon: Award,
      title: 'Hands-on Projects',
      description: 'Work on real-world projects that enhance your skills and build an impressive portfolio.',
    },
    {
      icon: Clock,
      title: 'Flexible Learning',
      description: 'Choose from online, offline, or hybrid modes that fit your schedule and learning preferences.',
    },
    {
      icon: Globe,
      title: 'Placement Support',
      description: 'Get career guidance and placement assistance to kickstart your professional journey.',
    },
  ];

  const services = [
    {
      icon: Code,
      title: 'Training & Internships',
      description: 'Comprehensive programs in Embedded Systems, IoT, VLSI, Fullstack, and App Development.',
      link: '/services/training',
    },
    {
      icon: Cpu,
      title: 'Project Assistance',
      description: 'Expert support for student projects, prototyping, and R&D initiatives.',
      link: '/services/projects',
    },
    {
      icon: Smartphone,
      title: 'Development Services',
      description: 'Professional web and mobile app development services for businesses and startups.',
      link: '/services/development',
    },
  ];

  const programs = [
    {
      title: 'Embedded Systems',
      duration: '6 months',
      level: 'Beginner to Advanced',
      image: getCourseImage('embedded-systems').src,
      alt: getCourseImage('embedded-systems').alt,
    },
    {
      title: 'Full Stack Development',
      duration: '4 months',
      level: 'Intermediate',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400',
      alt: 'Full stack development with code on screen',
    },
    {
      title: 'IoT Solutions',
      duration: '3 months',
      level: 'Beginner',
      image: 'https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=400',
      alt: 'IoT network cables and connections',
    },
    {
      title: 'VLSI Design',
      duration: '8 months',
      level: 'Advanced',
      image: getCourseImage('vlsi').src,
      alt: getCourseImage('vlsi').alt,
    },
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      course: 'Full Stack Development',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      text: 'The hands-on approach at Nuexo helped me land my dream job. The mentors are amazing and the projects are industry-relevant.',
    },
    {
      name: 'Rahul Kumar',
      course: 'Embedded Systems',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      text: 'Excellent training program! The practical knowledge I gained here has been invaluable in my engineering career.',
    },
    {
      name: 'Anjali Patel',
      course: 'IoT Solutions',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      text: 'Nuexo provides the perfect blend of theoretical knowledge and practical implementation. Highly recommended!',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-bg text-white" style={{ padding: 'var(--space-16) 0' }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="fade-in">
              <h1 className="font-bold mb-6 leading-tight mobile-center" style={{ fontSize: 'var(--fs-4xl)' }}>
                Practical Training & Project Support for 
                <span className="text-blue-300"> Electronics & Software</span>
              </h1>
              <p className="mb-8 text-blue-100 leading-relaxed mobile-center" style={{ fontSize: 'var(--fs-xl)' }}>
                Empowering students and startups with hands-on learning, expert mentorship, and industry-relevant skills in cutting-edge technologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mobile-center">
                <Button to="/register" size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                  Register for Training
                  <ArrowRight size={18} />
                </Button>
                <Button to="/services" variant="secondary" size="lg">
                  Enquire Now
                </Button>
              </div>
            </div>
            <div className="slide-up">
              <div className="w-full md:w-[480px] h-[320px] overflow-hidden rounded-xl shadow-md flex items-center justify-center bg-white mx-auto">
                <img
                  src={heroImage}
                  alt="Relaxed developer working on tasks"
                  className="w-full h-full object-contain p-4"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Nuexo */}
      <section className="bg-gray-50" style={{ padding: 'var(--space-16) 0' }}>
        <div className="container">
          <div className="text-center mb-12 mobile-center">
            <h2 className="font-bold text-gray-900 mb-6" style={{ fontSize: 'var(--fs-3xl)' }}>
              Why Choose <span className="text-gradient">Nuexo?</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed" style={{ fontSize: 'var(--fs-lg)' }}>
              We're committed to providing the best learning experience with practical knowledge, industry connections, and career support.
            </p>
          </div>
          <ResponsiveGrid minWidth="250px">
            {features.map((feature, index) => (
              <div key={index} className="card text-center" style={{ padding: 'var(--space-6)' }}>
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon size={32} className="text-white" />
                </div>
                <h3 className="font-semibold mb-4 text-gray-900" style={{ fontSize: 'var(--fs-xl)' }}>{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed" style={{ fontSize: 'var(--fs-base)' }}>{feature.description}</p>
              </div>
            ))}
          </ResponsiveGrid>
        </div>
      </section>

      {/* Services Overview */}
      <section style={{ padding: 'var(--space-16) 0' }}>
        <div className="container">
          <div className="text-center mb-12 mobile-center">
            <h2 className="font-bold text-gray-900 mb-6" style={{ fontSize: 'var(--fs-3xl)' }}>Our Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed" style={{ fontSize: 'var(--fs-lg)' }}>
              From comprehensive training programs to professional development services, we've got you covered.
            </p>
          </div>
          <ResponsiveGrid minWidth="300px">
            {services.map((service, index) => (
              <div key={index} className="card h-full flex flex-col" style={{ padding: 'var(--space-6)' }}>
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mb-6">
                  <service.icon size={32} className="text-white" />
                </div>
                <h3 className="font-semibold mb-4 text-gray-900" style={{ fontSize: 'var(--fs-2xl)' }}>{service.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow leading-relaxed" style={{ fontSize: 'var(--fs-base)' }}>{service.description}</p>
                <Link
                  to={service.link}
                  className="btn-tertiary"
                >
                  Learn More <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            ))}
          </ResponsiveGrid>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="bg-gray-50" style={{ padding: 'var(--space-16) 0' }}>
        <div className="container">
          <div className="text-center mb-12 mobile-center">
            <h2 className="font-bold text-gray-900 mb-6" style={{ fontSize: 'var(--fs-3xl)' }}>Featured Programs</h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed" style={{ fontSize: 'var(--fs-lg)' }}>
              Discover our most popular training programs designed to meet industry demands.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <MediaCard
                key={index}
                src={program.image}
                title={program.title}
                meta={`Duration: ${program.duration} • Level: ${program.level}`}
              >
                <Button to="/register" variant="primary" size="sm" className="w-full">
                  Enroll Now
                </Button>
              </MediaCard>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: 'var(--space-16) 0' }}>
        <div className="container">
          <div className="text-center mb-12 mobile-center">
            <h2 className="font-bold text-gray-900 mb-6" style={{ fontSize: 'var(--fs-3xl)' }}>What Our Students Say</h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed" style={{ fontSize: 'var(--fs-lg)' }}>
              Hear from our successful graduates who have transformed their careers with our programs.
            </p>
          </div>
          <ResponsiveGrid minWidth="300px">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card text-center" style={{ padding: 'var(--space-6)' }}>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full mx-auto mb-6 object-cover"
                  loading="lazy"
                />
                <p className="text-gray-600 mb-6 italic leading-relaxed" style={{ fontSize: 'var(--fs-base)' }}>"{testimonial.text}"</p>
                <h4 className="font-semibold text-gray-900 mb-1" style={{ fontSize: 'var(--fs-lg)' }}>{testimonial.name}</h4>
                <p className="text-gray-500" style={{ fontSize: 'var(--fs-sm)' }}>{testimonial.course}</p>
              </div>
            ))}
          </ResponsiveGrid>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-bg text-white" style={{ padding: 'var(--space-16) 0' }}>
        <div className="container text-center mobile-center">
          <h2 className="font-bold mb-6" style={{ fontSize: 'var(--fs-3xl)' }}>Ready to Start Your Journey?</h2>
          <p className="mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed" style={{ fontSize: 'var(--fs-lg)' }}>
            Join thousands of students who have launched successful careers in electronics and software development with Nuexo Technologies.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Button to="/register" size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
              Register Now
            </Button>
            <Button to="/services" variant="secondary" size="lg">
              Explore Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;