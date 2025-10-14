import React from 'react';
import Accordion from '../components/Accordion';
import Button from '../components/Button';

const FAQ = () => {
  const faqSections = [
    {
      title: 'General Questions',
      items: [
        {
          id: 'general-1',
          title: 'What is Nuexo Technologies?',
          content: 'Nuexo Technologies is a leading technology education and services company that provides practical training, project assistance, and professional development services in electronics and software engineering fields.',
        },
        {
          id: 'general-2',
          title: 'Where are you located?',
          content: 'Our main office is located in Bangalore, Karnataka, India. However, we offer online training programs accessible from anywhere in the world.',
        },
        {
          id: 'general-3',
          title: 'How can I contact you for more information?',
          content: 'You can reach us via email at info@nuexotechnologies.com, call us at +91 9876543210, or fill out the contact form on our website. Our team responds within 24 hours.',
        },
        {
          id: 'general-4',
          title: 'Do you offer both online and offline training?',
          content: 'Yes, we offer flexible learning modes including online classes, offline classroom sessions, and hybrid programs that combine both approaches based on your preference.',
        },
      ],
    },
    {
      title: 'Training Programs',
      items: [
        {
          id: 'training-1',
          title: 'What training programs do you offer?',
          content: 'We offer comprehensive training in Embedded Systems, IoT, VLSI Design, Full Stack Development, Mobile App Development, and emerging technologies. Each program includes hands-on projects and industry mentorship.',
        },
        {
          id: 'training-2',
          title: 'What are the prerequisites for joining?',
          content: 'Prerequisites vary by program. For beginner courses, basic programming knowledge is helpful but not mandatory. We provide foundation courses to help you get started. Advanced programs may require specific technical background.',
        },
        {
          id: 'training-3',
          title: 'How long are the training programs?',
          content: 'Program duration varies: IoT Solutions (3 months), Full Stack Development (4 months), Embedded Systems (6 months), and VLSI Design (8 months). We also offer intensive bootcamp versions.',
        },
        {
          id: 'training-4',
          title: 'Do you provide certificates?',
          content: 'Yes, all participants receive industry-recognized certificates upon successful completion of the program, including project work and assessments. Our certificates are valued by leading tech companies.',
        },
        {
          id: 'training-5',
          title: 'What is your placement assistance process?',
          content: 'We offer 100% placement assistance including resume building, interview preparation, mock interviews, and direct referrals to our 50+ industry partners. Our placement rate is 95%.',
        },
      ],
    },
    {
      title: 'Career Services',
      items: [
        {
          id: 'career-1',
          title: 'How does your placement assistance work?',
          content: 'Our placement process includes profile building, skill assessment, resume optimization, interview preparation, mock interviews, and direct referrals to hiring partners. We maintain relationships with 50+ companies.',
        },
        {
          id: 'career-2',
          title: 'What is your job placement rate?',
          content: 'We have a 95% job placement rate for students who complete our programs successfully. Most students receive job offers within 3 months of completing their training.',
        },
        {
          id: 'career-3',
          title: 'Do you help with internships?',
          content: 'Yes, we have partnerships with various companies for internship opportunities. Our internship programs range from 2-6 months and often lead to full-time job offers.',
        },
        {
          id: 'career-4',
          title: 'What kind of companies do you partner with?',
          content: 'We partner with startups, mid-sized companies, and large corporations across various sectors including IT services, product companies, embedded systems firms, and emerging tech startups.',
        },
      ],
    },
    {
      title: 'Project Support',
      items: [
        {
          id: 'project-1',
          title: 'What kind of project assistance do you provide?',
          content: 'We provide end-to-end support for final year projects, research initiatives, prototype development, documentation, testing, and presentation preparation across various technology domains.',
        },
        {
          id: 'project-2',
          title: 'Can you help with research paper publication?',
          content: 'Yes, we provide guidance on research methodology, paper writing, journal selection, and publication process. Our team has experience in getting papers published in reputed conferences and journals.',
        },
        {
          id: 'project-3',
          title: 'Do you assist with patent filing?',
          content: 'We provide initial guidance and support for patent filing processes, including prior art research, documentation preparation, and connecting you with patent attorneys for legal procedures.',
        },
        {
          id: 'project-4',
          title: 'How much does project assistance cost?',
          content: 'Project assistance costs vary based on complexity, duration, and scope. We offer flexible packages starting from ₹15,000 for basic guidance to comprehensive support packages. Contact us for a custom quote.',
        },
      ],
    },
    {
      title: 'Development Services',
      items: [
        {
          id: 'dev-1',
          title: 'What development services do you offer?',
          content: 'We provide custom web development, mobile app development, e-commerce solutions, enterprise software development, API development, and cloud deployment services for businesses and startups.',
        },
        {
          id: 'dev-2',
          title: 'What technologies do you use?',
          content: 'We use modern technologies including React, Angular, Node.js, Python, Java, Flutter, React Native, AWS, Azure, and various databases. We choose the best technology stack based on your project requirements.',
        },
        {
          id: 'dev-3',
          title: 'How long does it take to develop a website or app?',
          content: 'Development timelines vary: Simple websites (4-6 weeks), Complex web applications (8-16 weeks), Mobile apps (8-20 weeks). We provide detailed timelines during the project planning phase.',
        },
        {
          id: 'dev-4',
          title: 'Do you provide ongoing maintenance and support?',
          content: 'Yes, we offer comprehensive maintenance packages including bug fixes, security updates, feature enhancements, performance optimization, and technical support with flexible service level agreements.',
        },
      ],
    },
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Find answers to the most common questions about our services, programs, and processes.
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="space-y-16">
            {faqSections.map((section, index) => (
              <div key={index}>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
                  {section.title}
                </h2>
                <Accordion items={section.items} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Still Have Questions?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Can't find what you're looking for? Our team is here to help you with any specific questions about our programs and services.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button to="/register" size="lg">
              Contact Us
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

export default FAQ;