import React from 'react';
import { useParams } from 'react-router-dom';
import { CheckCircle, Clock, Users, Award, ArrowRight } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';
import Accordion from '../components/Accordion';
import { getCourseImage } from '../lib/courseImages';

const ServiceDetail = () => {
  const { serviceId } = useParams();

  const serviceData: Record<string, any> = {
    training: {
      title: 'Training & Internships',
      subtitle: 'Comprehensive Technology Training Programs',
      description: 'Our training programs are designed to bridge the gap between academic learning and industry requirements. With hands-on projects, expert mentorship, and placement support, we ensure you\'re ready for a successful career.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Industry-experienced mentors and trainers',
        'Hands-on projects using real-world scenarios',
        '100% placement assistance with partner companies',
        'Flexible online, offline, and hybrid learning modes',
        'State-of-the-art labs and equipment',
        'Regular assessments and progress tracking',
        'Certification upon successful completion',
        'Alumni network for ongoing support'
      ],
      outcomes: [
        'Land high-paying jobs in top tech companies',
        'Build a strong portfolio with real projects',
        'Develop industry-relevant technical skills',
        'Network with professionals and peers',
        'Gain confidence through practical experience',
        'Access to exclusive job opportunities'
      ],
      process: [
        { title: 'Application', description: 'Submit your application with academic details' },
        { title: 'Assessment', description: 'Complete technical and aptitude assessment' },
        { title: 'Enrollment', description: 'Complete payment and choose your learning mode' },
        { title: 'Training', description: 'Attend classes, complete projects, and assessments' },
        { title: 'Certification', description: 'Receive certification and placement support' },
        { title: 'Career Support', description: 'Ongoing mentorship and career guidance' }
      ],
      programs: [
        {
          title: 'Embedded Systems',
          duration: '6 months',
          level: 'Beginner to Advanced',
          topics: ['C Programming', 'Microcontrollers', 'RTOS', 'Hardware Design'],
          image: getCourseImage('embedded-systems').src,
          alt: getCourseImage('embedded-systems').alt
        },
        {
          title: 'Full Stack Development',
          duration: '4 months',
          level: 'Intermediate',
          topics: ['React/Angular', 'Node.js', 'Databases', 'Cloud Deployment'],
          image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600',
          alt: 'Full stack development code on screen'
        },
        {
          title: 'IoT Solutions',
          duration: '3 months',
          level: 'Beginner',
          topics: ['Sensor Integration', 'Communication Protocols', 'Cloud Platforms', 'Mobile Apps'],
          image: 'https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=600',
          alt: 'IoT network connections'
        },
        {
          title: 'VLSI Design',
          duration: '8 months',
          level: 'Advanced',
          topics: ['Digital Design', 'SystemVerilog', 'Physical Design', 'Verification'],
          image: getCourseImage('vlsi').src,
          alt: getCourseImage('vlsi').alt
        }
      ],
      cta: { text: 'Register Now', link: '/register' }
    },
    projects: {
      title: 'Project Assistance & Support',
      subtitle: 'Expert Guidance for Your Technical Projects',
      description: 'Whether you\'re working on a final year project, research initiative, or startup idea, our experienced team provides comprehensive support from concept to completion.',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'One-on-one mentorship with domain experts',
        'End-to-end project development support',
        'Research paper writing and publication guidance',
        'Prototype development and testing',
        'Documentation and presentation preparation',
        'Patent filing assistance',
        'Industry collaboration opportunities',
        'Ongoing technical support and maintenance'
      ],
      outcomes: [
        'Successfully complete your academic projects',
        'Publish research papers in reputed journals',
        'Develop working prototypes and products',
        'Gain deep technical expertise in your domain',
        'Build connections with industry professionals',
        'Create intellectual property and patents'
      ],
      process: [
        { title: 'Consultation', description: 'Discuss your project idea and requirements' },
        { title: 'Planning', description: 'Create detailed project plan and timeline' },
        { title: 'Development', description: 'Regular guidance and progress reviews' },
        { title: 'Testing', description: 'Thorough testing and optimization' },
        { title: 'Documentation', description: 'Complete documentation and reports' },
        { title: 'Presentation', description: 'Final presentation and demo preparation' }
      ],
      programs: [
        {
          title: 'Academic Projects',
          duration: '3-6 months',
          level: 'All Levels',
          topics: ['Final Year Projects', 'Thesis Work', 'Research Papers', 'Presentations']
        },
        {
          title: 'Prototype Development',
          duration: '2-4 months',
          level: 'Intermediate',
          topics: ['Concept Design', 'Hardware/Software', 'Testing', 'Optimization']
        },
        {
          title: 'R&D Support',
          duration: '6-12 months',
          level: 'Advanced',
          topics: ['Research Methodology', 'Innovation', 'Publication', 'Patents']
        }
      ],
      cta: { text: 'Get Project Support', link: '/register' }
    },
    development: {
      title: 'Web & App Development Services',
      subtitle: 'Professional Development Solutions for Your Business',
      description: 'Transform your business ideas into powerful digital solutions with our comprehensive web and mobile app development services. We create scalable, user-friendly applications that drive business growth.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Custom web and mobile application development',
        'Responsive and mobile-first design approach',
        'Modern technology stack and frameworks',
        'User experience (UX) and interface (UI) design',
        'Database design and optimization',
        'Cloud deployment and hosting solutions',
        'Ongoing maintenance and support',
        'Performance optimization and security'
      ],
      outcomes: [
        'Launch professional websites and applications',
        'Improve customer engagement and conversion',
        'Streamline business processes through automation',
        'Expand your digital presence and reach',
        'Increase revenue through digital channels',
        'Stay competitive in the digital marketplace'
      ],
      process: [
        { title: 'Discovery', description: 'Understand your business requirements and goals' },
        { title: 'Design', description: 'Create wireframes and visual designs' },
        { title: 'Development', description: 'Build the application using modern technologies' },
        { title: 'Testing', description: 'Comprehensive testing across devices and browsers' },
        { title: 'Deployment', description: 'Launch the application on production servers' },
        { title: 'Support', description: 'Ongoing maintenance and feature updates' }
      ],
      programs: [
        {
          title: 'Website Development',
          duration: '4-8 weeks',
          level: 'Business',
          topics: ['Responsive Design', 'CMS Integration', 'SEO Optimization', 'Analytics']
        },
        {
          title: 'Mobile App Development',
          duration: '8-16 weeks',
          level: 'Business',
          topics: ['iOS & Android', 'Cross-platform', 'API Integration', 'App Store Deployment']
        },
        {
          title: 'E-commerce Solutions',
          duration: '6-12 weeks',
          level: 'Business',
          topics: ['Online Store', 'Payment Integration', 'Inventory Management', 'Analytics']
        }
      ],
      cta: { text: 'Request Quote', link: '/register' }
    }
  };

  const service = serviceData[serviceId || ''] || serviceData.training;

  const faqData = [
    {
      id: '1',
      title: 'What are the prerequisites for joining?',
      content: 'Prerequisites vary by program. Generally, basic programming knowledge is helpful but not mandatory for beginner courses. We provide foundation courses to help you get started.'
    },
    {
      id: '2',
      title: 'Do you provide placement assistance?',
      content: 'Yes, we offer 100% placement assistance with our industry partners. This includes resume building, interview preparation, and direct referrals to hiring companies.'
    },
    {
      id: '3',
      title: 'What is the class schedule?',
      content: 'We offer flexible schedules including weekday evening batches, weekend batches, and full-time programs. Online and hybrid options are also available.'
    },
    {
      id: '4',
      title: 'Is there any certification provided?',
      content: 'Yes, all participants receive industry-recognized certificates upon successful completion of the program, including project work and assessments.'
    }
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">{service.title}</h1>
              <p className="text-xl lg:text-2xl text-blue-100 mb-6">{service.subtitle}</p>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">{service.description}</p>
              <Button to={service.cta.link} size="lg" className="bg-white text-[#0B3D91] hover:bg-gray-100">
                {service.cta.text}
                <ArrowRight size={20} className="ml-2" />
              </Button>
            </div>
            <div>
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.features.map((feature: string, index: number) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <CheckCircle size={20} className="text-[#4BA3FF] mt-1 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">Expected Outcomes</h2>
              <div className="space-y-4">
                {service.outcomes.map((outcome: string, index: number) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#0B3D91] to-[#4BA3FF] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{outcome}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Card className="p-8">
                <h3 className="text-xl font-semibold mb-6 text-gray-900">Success Metrics</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Job Placement Rate</span>
                    <span className="text-2xl font-bold text-[#0B3D91]">95%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Student Satisfaction</span>
                    <span className="text-2xl font-bold text-[#0B3D91]">4.8/5</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Industry Partners</span>
                    <span className="text-2xl font-bold text-[#0B3D91]">50+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Successful Projects</span>
                    <span className="text-2xl font-bold text-[#0B3D91]">1000+</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.process.map((step: any, index: number) => (
              <Card key={index} className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#0B3D91] to-[#4BA3FF] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programs/Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">Available Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.programs.map((program: any, index: number) => (
              <Card key={index} className="overflow-hidden">
                {program.image && (
                  <div className="aspect-[16/9] w-full overflow-hidden bg-gray-100">
                    <img
                      src={program.image}
                      alt={program.alt || program.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{program.title}</h3>
                <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1" />
                    {program.duration}
                  </div>
                  <div className="flex items-center">
                    <Users size={16} className="mr-1" />
                    {program.level}
                  </div>
                </div>
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-2">Key Topics:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    {program.topics.map((topic: string, idx: number) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-[#4BA3FF] rounded-full mr-2"></div>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
                  <Button to={service.cta.link} variant="secondary" size="sm" className="w-full">
                    Learn More
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
          <Accordion items={faqData} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Join thousands of successful students and professionals who have transformed their careers with our programs.
          </p>
          <Button to={service.cta.link} size="lg" className="bg-white text-[#0B3D91] hover:bg-gray-100">
            {service.cta.text}
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;