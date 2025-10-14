import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  disabled = false,
  type = 'button',
  children,
  className = '',
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium tracking-wide rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-sm hover:shadow focus:ring-blue-400',
    secondary: 'border border-white/90 text-white backdrop-blur-sm hover:bg-white/10 hover:border-white focus:ring-white/50',
    tertiary: 'text-blue-600 hover:text-blue-700 hover:bg-blue-50 focus:ring-blue-400',
  };

  const sizeClasses = {
    sm: 'h-9 px-4 text-sm md:h-10 md:px-5',
    md: 'h-10 px-5 text-sm md:h-11 md:px-6',
    lg: 'h-11 px-6 text-base md:h-12 md:px-8',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
};

export default Button;