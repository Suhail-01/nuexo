import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/blog', label: 'Blog' },
    { to: '/faq', label: 'FAQ' },
    { to: '/careers', label: 'Careers' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container" style={{ paddingTop: 'var(--space-12)', paddingBottom: 'var(--space-8)' }}>
        <div className="responsive-grid">
          {/* Company Info */}
          <div>
            <img 
              src="/src/assets/images/image.png" 
              alt="Nuexo Technologies Logo" 
              className="h-10 w-auto mb-4 filter brightness-0 invert"
            />
            <p className="text-gray-300 mb-4 leading-relaxed" style={{ fontSize: 'var(--fs-sm)' }}>
              Empowering students and startups with practical training, project support, and cutting-edge development services in electronics and software technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4" style={{ fontSize: 'var(--fs-lg)' }}>Quick Links</h3>
            <ul className="space-y-fluid-sm">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-300 hover:text-[#4BA3FF] transition-colors duration-300"
                    style={{ fontSize: 'var(--fs-sm)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4" style={{ fontSize: 'var(--fs-lg)' }}>Our Services</h3>
            <ul className="space-y-fluid-sm text-gray-300" style={{ fontSize: 'var(--fs-sm)' }}>
              <li>Training & Internships</li>
              <li>Project Assistance</li>
              <li>Web Development</li>
              <li>App Development</li>
              <li>IoT Solutions</li>
              <li>VLSI Design</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4" style={{ fontSize: 'var(--fs-lg)' }}>Contact Us</h3>
            <div className="space-y-fluid-sm">
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-blue-400 flex-shrink-0" />
                <span className="text-gray-300" style={{ fontSize: 'var(--fs-sm)' }}>info@nuexotechnologies.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-blue-400 flex-shrink-0" />
                <span className="text-gray-300" style={{ fontSize: 'var(--fs-sm)' }}>+91 9876543210</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-blue-400 flex-shrink-0" />
                <span className="text-gray-300" style={{ fontSize: 'var(--fs-sm)' }}>Bangalore, Karnataka, India</span>
              </div>
            </div>
            
            {/* Social Media */}
            <div style={{ marginTop: 'var(--space-5)' }}>
              <h4 className="font-medium mb-3" style={{ fontSize: 'var(--fs-base)' }}>Follow Us</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="p-2 bg-gray-700 hover:bg-blue-600 rounded-lg transition-all duration-300 transform hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12" style={{ paddingTop: 'var(--space-6)' }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mobile-center">
            <p className="text-gray-300" style={{ fontSize: 'var(--fs-sm)' }}>
              © 2025 Nuexo Technologies. All Rights Reserved.
            </p>
            <div className="flex gap-6" style={{ fontSize: 'var(--fs-sm)' }}>
              <Link to="/privacy" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;