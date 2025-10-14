import React, { useState } from 'react';
import { MapPin, Clock, Users, Briefcase, CheckCircle } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';
import Form from '../components/Form';

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const jobOpenings = [
    {
      id: 'embedded-trainer',
      title: 'Embedded Systems Trainer',
      department: 'Training',
      type: 'Full-time',
      location: 'Bangalore, Karnataka',
      experience: '3-5 years',
      description: 'We are looking for an experienced Embedded Systems professional to join our training team and mentor the next generation of engineers.',
      requirements: [
        'B.Tech/M.Tech in Electronics/Electrical/Computer Engineering',
        '3+ years of experience in embedded systems development',
        'Strong knowledge of C/C++ programming and microcontrollers',
        'Experience with RTOS, communication protocols, and hardware design',
        'Excellent communication and presentation skills',
        'Previous teaching or training experience preferred',
      ],
      responsibilities: [
        'Conduct training sessions on embedded systems topics',
        'Develop curriculum and training materials',
        'Mentor students through hands-on projects',
        'Assess student progress and provide feedback',
        'Stay updated with latest industry trends and technologies',
        'Collaborate with industry partners for practical insights',
      ],
      benefits: [
        'Competitive salary with performance bonuses',
        'Professional development opportunities',
        'Flexible working hours',
        'Health insurance and wellness benefits',
        'Annual training budget for skill development',
        'Opportunity to work with cutting-edge technologies',
      ],
    },
    {
      id: 'frontend-developer-intern',
      title: 'Frontend Developer (Intern)',
      department: 'Development',
      type: 'Internship',
      location: 'Bangalore, Karnataka (Hybrid)',
      experience: '0-1 years',
      description: 'Join our development team as a frontend developer intern and gain hands-on experience building modern web applications.',
      requirements: [
        'Currently pursuing or recently completed B.Tech/BCA/MCA',
        'Strong foundation in HTML, CSS, and JavaScript',
        'Knowledge of React.js or similar modern frameworks',
        'Understanding of responsive web design principles',
        'Familiarity with Git version control',
        'Enthusiasm to learn and adapt to new technologies',
      ],
      responsibilities: [
        'Develop user interfaces for web applications',
        'Collaborate with designers to implement UI/UX designs',
        'Write clean, maintainable, and efficient code',
        'Participate in code reviews and team meetings',
        'Learn and apply best practices in web development',
        'Assist in testing and debugging applications',
      ],
      benefits: [
        'Competitive internship stipend',
        'Mentorship from experienced developers',
        'Exposure to real-world projects',
        'Opportunity for full-time conversion',
        'Flexible work arrangements',
        'Learning and development support',
      ],
    },
  ];

  const companyPerks = [
    {
      icon: Users,
      title: 'Collaborative Environment',
      description: 'Work with passionate professionals who share your love for technology and innovation.',
    },
    {
      icon: Briefcase,
      title: 'Career Growth',
      description: 'Clear career progression paths with opportunities to take on leadership roles.',
    },
    {
      icon: Clock,
      title: 'Work-Life Balance',
      description: 'Flexible working hours and remote work options to maintain a healthy work-life balance.',
    },
  ];

  const applicationFields = [
    {
      id: 'name',
      label: 'Full Name',
      type: 'text' as const,
      required: true,
      placeholder: 'Enter your full name',
    },
    {
      id: 'email',
      label: 'Email Address',
      type: 'email' as const,
      required: true,
      placeholder: 'Enter your email address',
    },
    {
      id: 'mobile',
      label: 'Mobile Number',
      type: 'tel' as const,
      required: true,
      placeholder: 'Enter your mobile number',
    },
    {
      id: 'position',
      label: 'Position Applied For',
      type: 'select' as const,
      required: true,
      options: jobOpenings.map(job => job.title),
    },
    {
      id: 'resume',
      label: 'Resume/CV',
      type: 'file' as const,
      required: true,
    },
    {
      id: 'coverLetter',
      label: 'Cover Letter',
      type: 'textarea' as const,
      placeholder: 'Tell us why you are interested in this position and what makes you a good fit (optional)',
    },
  ];

  const handleApplyNow = (jobId: string) => {
    setSelectedJob(jobId);
    setShowApplicationForm(true);
  };

  const handleApplicationSubmit = async (data: Record<string, string | File>) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitted(true);
    console.log('Application submitted:', data);
  };

  if (isSubmitted) {
    return (
      <div className="pt-16 lg:pt-20 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-2xl mx-auto p-12 text-center">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle size={48} className="text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Application Submitted!</h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Thank you for applying to Nuexo Technologies. We have received your application and our HR team will review it carefully.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-gray-900 mb-3">What's next?</h3>
              <ul className="text-left text-gray-700 space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#4BA3FF] rounded-full mr-3"></div>
                  Our team will review your application within 5-7 business days
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#4BA3FF] rounded-full mr-3"></div>
                  If shortlisted, we'll contact you for an initial screening call
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#4BA3FF] rounded-full mr-3"></div>
                  Technical interview and final selection process will follow
                </li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button onClick={() => {setIsSubmitted(false); setShowApplicationForm(false);}}>
                Apply for Another Position
              </Button>
              <Button to="/" variant="secondary">
                Back to Home
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  if (showApplicationForm) {
    return (
      <div className="pt-16 lg:pt-20">
        <section className="py-20 bg-gray-50 min-h-screen">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <Button 
                onClick={() => setShowApplicationForm(false)}
                variant="tertiary" 
                className="mb-6"
              >
                ← Back to Job Listings
              </Button>
              
              <Card className="p-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Apply for Position</h1>
                <p className="text-gray-600 mb-8">
                  Fill out the form below to apply for the selected position. We'll get back to you soon!
                </p>
                
                <Form 
                  fields={applicationFields}
                  onSubmit={handleApplicationSubmit}
                  submitLabel="Submit Application"
                />
              </Card>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Build the future of technology education with us. We're looking for passionate professionals who want to make a difference.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Why Work at Nuexo?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join a company that values innovation, growth, and making a positive impact on the technology education landscape.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {companyPerks.map((perk, index) => (
              <Card key={index} className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#0B3D91] to-[#4BA3FF] rounded-full flex items-center justify-center mx-auto mb-6">
                  <perk.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{perk.title}</h3>
                <p className="text-gray-600 leading-relaxed">{perk.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Open Positions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our current job openings and find the perfect role for your skills and interests.
            </p>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {jobOpenings.map((job) => (
              <Card key={job.id} className="p-8">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                      <span className="bg-[#0B3D91] text-white px-3 py-1 rounded-full">
                        {job.department}
                      </span>
                      <div className="flex items-center">
                        <Clock size={16} className="mr-1" />
                        {job.type}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-1" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Briefcase size={16} className="mr-1" />
                        {job.experience}
                      </div>
                    </div>
                  </div>
                  <Button 
                    onClick={() => handleApplyNow(job.id)}
                    size="lg"
                    className="mt-4 lg:mt-0"
                  >
                    Apply Now
                  </Button>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">{job.description}</p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {job.requirements.slice(0, 3).map((req, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-[#4BA3FF] rounded-full mt-2 mr-2 flex-shrink-0"></div>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Responsibilities:</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {job.responsibilities.slice(0, 3).map((resp, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-[#4BA3FF] rounded-full mt-2 mr-2 flex-shrink-0"></div>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {job.benefits.slice(0, 3).map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-[#4BA3FF] rounded-full mt-2 mr-2 flex-shrink-0"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our Culture</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  At Nuexo Technologies, we believe that great work comes from great people working in a supportive and inspiring environment. Our culture is built on collaboration, innovation, and continuous learning.
                </p>
                <p>
                  We encourage our team members to take initiative, share ideas, and contribute to both technical and strategic decisions. Everyone's voice matters, and we foster an inclusive environment where diverse perspectives are valued.
                </p>
                <p>
                  Professional development is a priority for us. We provide regular training opportunities, conference attendance, and support for certifications to help our team stay at the forefront of technology.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=300"
                alt="Team collaboration"
                className="rounded-lg shadow-lg"
              />
              <img
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=300"
                alt="Training session"
                className="rounded-lg shadow-lg mt-8"
              />
              <img
                src="https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=300"
                alt="Office environment"
                className="rounded-lg shadow-lg -mt-8"
              />
              <img
                src="https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=300"
                alt="Team meeting"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Join Our Team?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Don't see a position that fits? We're always looking for talented individuals. Send us your resume and tell us how you can contribute to our mission.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button 
              onClick={() => setShowApplicationForm(true)}
              size="lg" 
              className="bg-white text-[#0B3D91] hover:bg-gray-100"
            >
              Apply Now
            </Button>
            <Button to="/about" variant="secondary" size="lg" className="border-white text-white hover:bg-white hover:text-[#0B3D91]">
              Learn More About Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;