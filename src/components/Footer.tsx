import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-indigo-400 mb-2">Portfolio</h2>
            <p className="text-gray-400 max-w-md">
              Building exceptional digital experiences with modern technologies and best practices.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <button 
              onClick={scrollToTop}
              className="mb-4 bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>Designed and built with ❤️ using React and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;