/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Menu, X, Phone, GraduationCap } from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export default function Navbar({ onNavigate, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: 'হোম', id: 'home' },
    { label: 'আমাদের সম্পর্কে', id: 'about' },
    { label: 'কোর্সসমূহ', id: 'courses' },
    { label: 'সুবিধাসমূহ ও অগ্রগতি ট্র্যাকিং', id: 'facilities' },
    { label: 'অনুশীলন কুইজ', id: 'quiz' },
    { label: 'গ্যালারি', id: 'gallery' },
    { label: 'যোগাযোগ', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (id: string) => {
    setIsOpen(false);
    onNavigate(id);
  };

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-3 border-b border-gray-100'
          : 'bg-white/95 backdrop-blur-md py-4 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Brand */}
          <button
            id="brand-logo"
            onClick={() => handleClick('home')}
            className="flex items-center space-x-3 group cursor-pointer focus:outline-none"
          >
            <div className="bg-indigo-600 text-white p-2.5 rounded-xl shadow-lg shadow-indigo-200 transition-all duration-300 group-hover:scale-105 group-hover:bg-indigo-700">
              <GraduationCap className="h-6 w-6" id="brand-icon" />
            </div>
            <div className="text-left">
              <span className="block text-xl font-bold font-sans text-gray-900 tracking-tight group-hover:text-indigo-600 transition-colors">
                Brilliant
              </span>
              <span className="block text-xs font-mono font-bold tracking-wider uppercase text-indigo-500">
                Private Center
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  id={`nav-item-${item.id}`}
                  onClick={() => handleClick(item.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                    activeSection === item.id
                      ? 'text-indigo-600 bg-indigo-50'
                      : 'text-gray-600 hover:text-indigo-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Quick Contact Action Block */}
            <div className="flex items-center space-x-3">
              <a
                href="https://wa.me/8801750091995?text=Hello%20Brilliant%20Private%20Center,%20I%20would%20like%20to%20inquire%20about%20admissions."
                target="_blank"
                rel="noopener noreferrer"
                id="desktop-whatsapp-btn"
                className="flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-xl text-sm font-semibold shadow-lg shadow-emerald-100 hover:shadow-emerald-200 transition-all duration-200 cursor-pointer"
              >
                <svg className="h-4 w-4 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.336 4.993L2 22l5.132-1.347a9.96 9.96 0 004.878 1.277h.005c5.505 0 9.989-4.478 9.99-9.985A9.97 9.97 0 0012.012 2zm5.836 14.124c-.31.875-1.28 1.545-2.14 1.7-.58.1-1.34.19-3.9-1.01-3.26-1.53-5.36-4.83-5.52-5.05-.17-.22-1.31-1.74-1.31-3.32C4.981 6.86 5.86 6.08 6.18 5.75c.26-.27.57-.34.76-.34H8c.2 0 .42.06.6.5.21.52.74 1.8.8 1.92.06.12.1.27.02.43-.08.17-.18.27-.3.4l-.45.54c-.14.16-.29.34-.12.63a8.9 9.9 0 001.62 2c1.37 1.22 2.5 1.6 2.85 1.77.36.17.57.14.78-.1.21-.24.9-1.05 1.14-1.41.24-.36.48-.3.8-.18s2.04 1 2.4.1.42.18.5.34c.08.17.08.97-.22 1.84z"/>
                </svg>
                <span>হোয়াটসঅ্যাপ</span>
              </a>

              <a
                href="tel:01750091995"
                id="desktop-call-btn"
                className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2.5 rounded-xl text-sm font-semibold shadow-lg shadow-indigo-100 hover:shadow-indigo-200 transition-all duration-200 cursor-pointer"
              >
                <Phone className="h-4 w-4 animate-pulse shrink-0" />
                <span>কল করুন</span>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <a
              href="https://wa.me/8801750091995?text=Hello%20Brilliant%20Private%20Center,%20I%20would%20like%20to%20inquire%20about%20admissions."
              target="_blank"
              rel="noopener noreferrer"
              id="mobile-quick-whatsapp"
              className="mr-2 p-2 text-emerald-600 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors cursor-pointer"
              title="Chat with us on WhatsApp"
            >
              <svg className="h-5 w-5 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.336 4.993L2 22l5.132-1.347a9.96 9.96 0 004.878 1.277h.005c5.505 0 9.989-4.478 9.99-9.985A9.97 9.97 0 0012.012 2zm5.836 14.124c-.31.875-1.28 1.545-2.14 1.7-.58.1-1.34.19-3.9-1.01-3.26-1.53-5.36-4.83-5.52-5.05-.17-.22-1.31-1.74-1.31-3.32C4.981 6.86 5.86 6.08 6.18 5.75c.26-.27.57-.34.76-.34H8c.2 0 .42.06.6.5.21.52.74 1.8.8 1.92.06.12.1.27.02.43-.08.17-.18.27-.3.4l-.45.54c-.14.16-.29.34-.12.63a8.9 9.9 0 001.62 2c1.37 1.22 2.5 1.6 2.85 1.77.36.17.57.14.78-.1.21-.24.9-1.05 1.14-1.41.24-.36.48-.3.8-.18s2.04 1 2.4.1.42.18.5.34c.08.17.08.97-.22 1.84z"/>
              </svg>
            </a>
            <a
              href="tel:01750091995"
              id="mobile-quick-call"
              className="mr-3 p-2 text-indigo-600 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors"
              title="Call us"
            >
              <Phone className="h-5 w-5" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              id="mobile-menu-toggle"
              className="p-2 rounded-lg text-gray-600 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        id="mobile-menu"
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100 py-4 bg-white border-b border-gray-100 shadow-inner' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-1 sm:px-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              id={`mobile-nav-item-${item.id}`}
              onClick={() => handleClick(item.id)}
              className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                activeSection === item.id
                  ? 'bg-indigo-50 text-indigo-700'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-indigo-600'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 border-t border-gray-100 flex flex-col space-y-2.5 px-4">
            <a
              href="https://wa.me/8801750091995?text=Hello%20Brilliant%20Private%20Center,%20I%20would%20like%20to%20inquire%20about%20admissions."
              target="_blank"
              rel="noopener noreferrer"
              id="mobile-menu-whatsapp-btn"
              className="flex items-center justify-center space-x-2 w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-4 rounded-xl font-semibold shadow-lg text-center cursor-pointer transition-colors"
            >
              <svg className="h-5 w-5 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.336 4.993L2 22l5.132-1.347a9.96 9.96 0 004.878 1.277h.005c5.505 0 9.989-4.478 9.99-9.985A9.97 9.97 0 0012.012 2zm5.836 14.124c-.31.875-1.28 1.545-2.14 1.7-.58.1-1.34.19-3.9-1.01-3.26-1.53-5.36-4.83-5.52-5.05-.17-.22-1.31-1.74-1.31-3.32C4.981 6.86 5.86 6.08 6.18 5.75c.26-.27.57-.34.76-.34H8c.2 0 .42.06.6.5.21.52.74 1.8.8 1.92.06.12.1.27.02.43-.08.17-.18.27-.3.4l-.45.54c-.14.16-.29.34-.12.63a8.9 9.9 0 001.62 2c1.37 1.22 2.5 1.6 2.85 1.77.36.17.57.14.78-.1.21-.24.9-1.05 1.14-1.41.24-.36.48-.3.8-.18s2.04 1 2.4.1.42.18.5.34c.08.17.08.97-.22 1.84z"/>
              </svg>
              <span>হোয়াটসঅ্যাপে চ্যাট করুন</span>
            </a>
            <a
              href="tel:01750091995"
              id="mobile-call-btn"
              className="flex items-center justify-center space-x-2 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-xl font-semibold shadow-lg text-center transition-colors"
            >
              <Phone className="h-5 w-5 shrink-0" />
              <span>কল করুন: ০১৭৫০০৯১৯৯৫</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
