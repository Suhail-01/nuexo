import React from 'react';

interface MediaCardProps {
  src: string;
  title: string;
  meta?: string;
  description?: string;
  href?: string;
  aspectRatio?: '16/9' | '4/3' | '1/1' | '3/2';
  className?: string;
  children?: React.ReactNode;
}

export const MediaCard: React.FC<MediaCardProps> = ({
  src,
  title,
  meta,
  description,
  href,
  aspectRatio = '16/9',
  className = '',
  children
}) => {
  const aspectClasses = {
    '16/9': 'aspect-video',
    '4/3': 'aspect-[4/3]',
    '1/1': 'aspect-square',
    '3/2': 'aspect-[3/2]'
  };

  const CardContent = () => (
    <article className={`card overflow-hidden bg-white flex flex-col h-full ${className}`}>
      <div className="h-48 w-full overflow-hidden bg-gray-100">
        <img
          src={src}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">
          {title}
        </h3>
        {meta && (
          <p className="text-gray-600 text-sm mb-3">
            {meta}
          </p>
        )}
        {description && (
          <p className="text-gray-600 text-sm line-clamp-3 mb-3">
            {description}
          </p>
        )}
        {children && (
          <div className="mt-auto">
            {children}
          </div>
        )}
      </div>
    </article>
  );

  if (href) {
    return (
      <a href={href} className="block group">
        <CardContent />
      </a>
    );
  }

  return <CardContent />;
};