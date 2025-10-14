import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import AppLayout from './AppLayout';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/services', label: 'Services' },
    { to: '/blog', label: 'Blog' },
    { to: '/careers', label: 'Careers' },
    { to: '/faq', label: 'FAQ' },
  ];

  return (
    <div className="container">
      <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img
              src="/src/assets/images/image.png"
              alt="Nuexo Technologies Logo"
              className="h-16 md:h-20 w-auto transition-transform duration-300 group-hover:scale-105 drop-shadow-md"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-medium transition-colors duration-300 hover:text-blue-600 ${
                  location.pathname === link.to ? 'text-blue-900' : 'text-gray-600'
                }`}
                style={{ fontSize: 'var(--fs-base)' }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center gap-3">
            <Link to="/register" className="btn-primary hidden sm:inline-flex text-sm px-4 py-2">
              Register
            </Link>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
      </nav>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 ${
        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden bg-white border-t border-gray-200`}>
        <nav className="container py-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`block py-3 px-4 rounded-lg font-medium transition-colors duration-300 hover:bg-gray-100 mobile-center ${
                location.pathname === link.to ? 'text-blue-900 bg-blue-50' : 'text-gray-600'
              }`}
              style={{ fontSize: 'var(--fs-base)' }}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/register" className="btn-primary w-full mt-4 mobile-center">
            Register
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;