'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { sections } from '@/lib/content';

export default function Navigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-wrap gap-2 p-4 border-b border-gray-700">
        <Link 
          href="/"
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
            pathname === '/' 
              ? 'bg-terminal-green text-terminal-bg shadow-lg shadow-terminal-green/50' 
              : 'bg-terminal-gray text-gray-300 hover:bg-gray-700 hover:text-terminal-green'
          }`}
        >
          <span className="font-medium">Home</span>
        </Link>
        
        {sections.map((section) => (
          <Link
            key={section.id}
            href={section.path}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
              pathname === section.path
                ? 'bg-terminal-green text-terminal-bg shadow-lg shadow-terminal-green/50'
                : 'bg-terminal-gray text-gray-300 hover:bg-gray-700 hover:text-terminal-green'
            }`}
          >
            {section.icon}
            <span className="font-medium">{section.title}</span>
          </Link>
        ))}
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden border-b border-gray-700">
        {/* Mobile Header */}
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-2">
            <Link 
              href="/"
              className={`px-3 py-1 rounded text-sm transition-all duration-300 ${
                pathname === '/' 
                  ? 'bg-terminal-green text-terminal-bg' 
                  : 'text-gray-300'
              }`}
            >
              Home
            </Link>
          </div>
          
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-lg bg-terminal-gray text-gray-300 hover:bg-gray-700 hover:text-terminal-green transition-all duration-300"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-4 pb-4 space-y-2 bg-terminal-dark/50">
            {sections.map((section) => (
              <Link
                key={section.id}
                href={section.path}
                onClick={closeMobileMenu}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                  pathname === section.path
                    ? 'bg-terminal-green text-terminal-bg shadow-lg shadow-terminal-green/50'
                    : 'bg-terminal-gray text-gray-300 hover:bg-gray-700 hover:text-terminal-green'
                }`}
              >
                {section.icon}
                <span className="font-medium">{section.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Tablet Navigation (horizontal scroll) */}
      <div className="hidden sm:block md:hidden border-b border-gray-700 p-2">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-terminal-green scrollbar-track-terminal-dark">
          <Link 
            href="/"
            className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 whitespace-nowrap ${
              pathname === '/' 
                ? 'bg-terminal-green text-terminal-bg shadow-lg shadow-terminal-green/50' 
                : 'bg-terminal-gray text-gray-300 hover:bg-gray-700 hover:text-terminal-green'
            }`}
          >
            <span className="font-medium text-sm">Home</span>
          </Link>
          
          {sections.map((section) => (
            <Link
              key={section.id}
              href={section.path}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 whitespace-nowrap ${
                pathname === section.path
                  ? 'bg-terminal-green text-terminal-bg shadow-lg shadow-terminal-green/50'
                  : 'bg-terminal-gray text-gray-300 hover:bg-gray-700 hover:text-terminal-green'
              }`}
            >
              {section.icon}
              <span className="font-medium text-sm">{section.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}