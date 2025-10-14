import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import Form from '../components/Form';
import Card from '../components/Card';

const Register = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formFields = [
    {
      id: 'firstName',
      label: 'First Name',
      type: 'text' as const,
      required: true,
      placeholder: 'Enter your first name',
    },
    {
      id: 'lastName',
      label: 'Last Name',
      type: 'text' as const,
      required: true,
      placeholder: 'Enter your last name',
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
      id: 'domain',
      label: 'Domain of Interest',
      type: 'select' as const,
      required: true,
      options: [
        'Embedded Systems',
        'IoT Solutions',
        'VLSI Design',
        'Full Stack Development',
        'Mobile App Development',
        'Project Assistance',
        'Web Development Services',
        'Other'
      ],
    },
    {
      id: 'message',
      label: 'Additional Message',
      type: 'textarea' as const,
      placeholder: 'Tell us about your background, goals, or any specific requirements (optional)',
    },
  ];

  const handleSubmit = async (data: Record<string, string | File>) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitted(true);
    console.log('Form submitted:', data);
  };

  if (isSubmitted) {
    return (
      <div className="pt-16 lg:pt-20 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-2xl mx-auto p-12 text-center">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle size={48} className="text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Registration Successful!</h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Thank you for registering with Nuexo Technologies. Our team will contact you within 24 hours to discuss your requirements and guide you through the next steps.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-gray-900 mb-3">What happens next?</h3>
              <ul className="text-left text-gray-700 space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#4BA3FF] rounded-full mr-3"></div>
                  Our counselor will call you to understand your background and goals
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#4BA3FF] rounded-full mr-3"></div>
                  We'll recommend the best program or service for your needs
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#4BA3FF] rounded-full mr-3"></div>
                  You'll receive detailed information about curriculum and schedules
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#4BA3FF] rounded-full mr-3"></div>
                  We'll assist you with enrollment and payment process
                </li>
              </ul>
            </div>
            <p className="text-gray-600 mb-6">
              In case of any urgent queries, feel free to reach out to us at{' '}
              <a href="mailto:info@nuexotechnologies.com" className="text-[#0B3D91] hover:text-[#4BA3FF]">
                info@nuexotechnologies.com
              </a>{' '}
              or call{' '}
              <a href="tel:+919876543210" className="text-[#0B3D91] hover:text-[#4BA3FF]">
                +91 9876543210
              </a>
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={() => setIsSubmitted(false)}
                className="btn-secondary"
              >
                Register Another Person
              </button>
              <a href="/" className="btn-primary">
                Back to Home
              </a>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Register Now</h1>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Take the first step towards transforming your career with our industry-leading training programs and professional services.
          </p>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Registration Form</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and our team will contact you within 24 hours to discuss your requirements and guide you through the enrollment process.
                </p>
                <Form 
                  fields={formFields}
                  onSubmit={handleSubmit}
                  submitLabel="Submit Registration"
                />
              </Card>
            </div>

            {/* Info Sidebar */}
            <div className="space-y-8">
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Register with Us?</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-600 mr-3" />
                    Industry-expert mentors
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-600 mr-3" />
                    Hands-on project experience
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-600 mr-3" />
                    100% placement assistance
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-600 mr-3" />
                    Flexible learning modes
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-600 mr-3" />
                    Industry-recognized certification
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Popular Programs</h3>
                <div className="space-y-3">
                  <div className="border-l-4 border-[#4BA3FF] pl-4">
                    <h4 className="font-medium">Embedded Systems</h4>
                    <p className="text-sm text-gray-600">6 months • Beginner to Advanced</p>
                  </div>
                  <div className="border-l-4 border-[#4BA3FF] pl-4">
                    <h4 className="font-medium">Full Stack Development</h4>
                    <p className="text-sm text-gray-600">4 months • Intermediate</p>
                  </div>
                  <div className="border-l-4 border-[#4BA3FF] pl-4">
                    <h4 className="font-medium">IoT Solutions</h4>
                    <p className="text-sm text-gray-600">3 months • Beginner</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 gradient-bg text-white">
                <h3 className="text-xl font-semibold mb-4">Need Help?</h3>
                <p className="text-blue-100 mb-4">
                  Have questions about our programs or need guidance on choosing the right course?
                </p>
                <div className="space-y-2 text-sm text-blue-100">
                  <p>📞 +91 9876543210</p>
                  <p>✉️ info@nuexotechnologies.com</p>
                  <p>🕒 Mon-Fri: 9 AM - 7 PM</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;