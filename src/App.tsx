/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import Facilities from './components/Facilities';
import AssessmentQuiz from './components/AssessmentQuiz';
import Gallery from './components/Gallery';
import ContactInquiry from './components/ContactInquiry';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProgramId, setSelectedProgramId] = useState('class-6');

  // Handle smooth scroll navigation
  const handleNavigation = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Synchronize dynamic pre-selection of program from Courses catalog to Inquiry Form
  const handleSelectCourseForInquiry = (courseId: string) => {
    setSelectedProgramId(courseId);
  };

  // Scrollspy to automatically update navigation tabs during vertical scrolling
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = ['home', 'about', 'courses', 'facilities', 'quiz', 'gallery', 'contact'];
      const scrollPosition = window.scrollY + 120; // offset for sticky navbar

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const offsetTop = el.offsetTop;
          const offsetHeight = el.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy);
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  return (
    <div id="full-site-wrapper" className="min-h-screen bg-white text-gray-800 antialiased selection:bg-indigo-500 selection:text-white">
      {/* Dynamic Header Board */}
      <Navbar
        onNavigate={handleNavigation}
        activeSection={activeSection}
      />

      <main className="relative">
        {/* Hero Section */}
        <Hero
          onExploreCourses={() => handleNavigation('courses')}
          onTakeQuiz={() => handleNavigation('quiz')}
        />

        {/* Content Modules */}
        <div className="space-y-0">
          {/* About us */}
          <About />

          {/* Courses */}
          <Courses
            onSelectCourseForInquiry={handleSelectCourseForInquiry}
          />

          {/* Facilities / Progress Tracker */}
          <Facilities />

          {/* Practice Quiz */}
          <AssessmentQuiz />

          {/* Gallery */}
          <Gallery />

          {/* Contact & Inquiries Center */}
          <ContactInquiry
            selectedProgramId={selectedProgramId}
            onProgramChange={setSelectedProgramId}
          />
        </div>
      </main>

      {/* Footer copyright */}
      <Footer />

      {/* Floating Interactive WhatsApp Action Badge */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3">
        <a
          href="https://wa.me/8801750091995?text=Hello%20Brilliant%20Coaching%20Centre,%20I'd%20like%20to%20inquire%20about%20admissions."
          target="_blank"
          rel="noopener noreferrer"
          title="Chat with us on WhatsApp"
          className="group flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 sm:p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
        >
          {/* Label expanding dynamically on hover */}
          <span className="max-w-0 overflow-hidden group-hover:max-w-[200px] transition-all duration-300 ease-out text-sm font-bold tracking-wide whitespace-nowrap opacity-0 group-hover:opacity-100 pr-0 group-hover:pr-1 font-sans">
            Chat on WhatsApp
          </span>
          <svg className="h-6 w-6 sm:h-7 sm:w-7 fill-current shrink-0" viewBox="0 0 24 24">
            <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.336 4.993L2 22l5.132-1.347a9.96 9.96 0 004.878 1.277h.005c5.505 0 9.989-4.478 9.99-9.985A9.97 9.97 0 0012.012 2zm5.836 14.124c-.31.875-1.28 1.545-2.14 1.7-.58.1-1.34.19-3.9-1.01-3.26-1.53-5.36-4.83-5.52-5.05-.17-.22-1.31-1.74-1.31-3.32C4.981 6.86 5.86 6.08 6.18 5.75c.26-.27.57-.34.76-.34H8c.2 0 .42.06.6.5.21.52.74 1.8.8 1.92.06.12.1.27.02.43-.08.17-.18.27-.3.4l-.45.54c-.14.16-.29.34-.12.63a8.9 9.9 0 001.62 2c1.37 1.22 2.5 1.6 2.85 1.77.36.17.57.14.78-.1.21-.24.9-1.05 1.14-1.41.24-.36.48-.3.8-.18s2.04 1 2.4.1.42.18.5.34c.08.17.08.97-.22 1.84z"/>
          </svg>
        </a>
      </div>
    </div>
  );
}
