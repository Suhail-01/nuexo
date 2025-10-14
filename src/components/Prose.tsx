import React from 'react';

interface ProseProps {
  children: React.ReactNode;
  size?: 'sm' | 'base' | 'lg';
  className?: string;
}

export const Prose: React.FC<ProseProps> = ({ children, size = 'base', className = '' }) => {
  const sizeClasses = {
    sm: 'prose-sm',
    base: 'prose',
    lg: 'prose-lg'
  };

  return (
    <article 
      className={`
        ${sizeClasses[size]} 
        max-w-none 
        prose-headings:text-gray-900 
        prose-headings:font-semibold
        prose-p:text-gray-700 
        prose-p:leading-relaxed
        prose-a:text-blue-600 
        prose-a:no-underline 
        hover:prose-a:underline
        prose-strong:text-gray-900
        prose-ul:text-gray-700
        prose-ol:text-gray-700
        prose-li:text-gray-700
        prose-blockquote:text-gray-700
        prose-blockquote:border-blue-200
        prose-code:text-blue-600
        prose-code:bg-blue-50
        prose-code:px-1
        prose-code:py-0.5
        prose-code:rounded
        prose-pre:bg-gray-900
        prose-pre:text-gray-100
        prose-img:rounded-lg
        prose-img:shadow-md
        ${className}
      `}
      style={{
        '--tw-prose-body': 'var(--fs-base)',
        '--tw-prose-headings': 'var(--fs-xl)',
        '--tw-prose-lead': 'var(--fs-lg)',
        '--tw-prose-links': 'var(--primary-light)',
        '--tw-prose-bold': 'var(--dark)',
        '--tw-prose-counters': 'var(--gray)',
        '--tw-prose-bullets': 'var(--gray)',
        '--tw-prose-hr': 'var(--gray-light)',
        '--tw-prose-quotes': 'var(--gray-dark)',
        '--tw-prose-quote-borders': 'var(--primary-light)',
        '--tw-prose-captions': 'var(--gray)',
        '--tw-prose-code': 'var(--primary-dark)',
        '--tw-prose-pre-code': 'var(--gray-lighter)',
        '--tw-prose-pre-bg': 'var(--dark)',
        '--tw-prose-th-borders': 'var(--gray)',
        '--tw-prose-td-borders': 'var(--gray-light)',
      } as React.CSSProperties}
    >
      {children}
    </article>
  );
};