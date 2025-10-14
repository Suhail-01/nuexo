import React from 'react';

interface AppLayoutProps {
  header: React.ReactNode;
  children: React.ReactNode;
  footer: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ header, children, footer }) => {
  return (
    <div className="min-h-screen grid grid-rows-[auto,1fr,auto] bg-gray-50 text-gray-900">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 safe-top">
        {header}
      </header>
      <main className="w-full">
        {children}
      </main>
      <footer className="border-t border-gray-200 safe-bottom">
        {footer}
      </footer>
    </div>
  );
};

export default AppLayout;