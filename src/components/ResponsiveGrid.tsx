import React from 'react';

interface ResponsiveGridProps {
  children: React.ReactNode;
  minWidth?: string;
  gap?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const ResponsiveGrid: React.FC<ResponsiveGridProps> = ({ 
  children, 
  minWidth = '280px',
  gap = 'md',
  className = '' 
}) => {
  const gapClasses = {
    sm: 'gap-3',
    md: 'gap-4 md:gap-6',
    lg: 'gap-6 md:gap-8'
  };

  return (
    <div
      className={`grid ${gapClasses[gap]} ${className}`}
      style={{
        gridTemplateColumns: `repeat(auto-fit, minmax(min(${minWidth}, 100%), 1fr))`
      }}
    >
      {children}
    </div>
  );
};

interface FlexGridProps {
  children: React.ReactNode;
  minWidth?: string;
  gap?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const FlexGrid: React.FC<FlexGridProps> = ({ 
  children, 
  minWidth = '280px',
  gap = 'md',
  className = '' 
}) => {
  const gapClasses = {
    sm: 'gap-3',
    md: 'gap-4 md:gap-6', 
    lg: 'gap-6 md:gap-8'
  };

  return (
    <div className={`flex flex-wrap ${gapClasses[gap]} ${className}`}>
      {React.Children.map(children, (child) => (
        <div 
          className="flex-1"
          style={{ minWidth: `min(${minWidth}, 100%)` }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};