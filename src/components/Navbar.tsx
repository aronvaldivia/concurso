import React from 'react';
import { Menu, X, Guitar } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Guitar className="h-10 w-10 text-red-600" />
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-gray-300 hover:text-red-500 transition-colors px-3 py-2">Home</a>
              <a href="#videos" className="text-gray-300 hover:text-red-500 transition-colors px-3 py-2">Videos</a>
              <a href="#about" className="text-gray-300 hover:text-red-500 transition-colors px-3 py-2">About</a>
              <a href="#contact" className="text-gray-300 hover:text-red-500 transition-colors px-3 py-2">Contact</a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-red-500 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90">
            <a href="#home" className="text-gray-300 hover:text-red-500 block px-3 py-2">Home</a>
            <a href="#videos" className="text-gray-300 hover:text-red-500 block px-3 py-2">Videos</a>
            <a href="#about" className="text-gray-300 hover:text-red-500 block px-3 py-2">About</a>
            <a href="#contact" className="text-gray-300 hover:text-red-500 block px-3 py-2">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}