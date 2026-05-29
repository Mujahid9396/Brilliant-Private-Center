/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, ArrowRight, Sparkles, BookOpen } from 'lucide-react';
import heroImage from '../assets/images/coaching_hero_banner_1779472757001.png';

interface HeroProps {
  onExploreCourses: () => void;
  onTakeQuiz: () => void;
}

export default function Hero({ onExploreCourses, onTakeQuiz }: HeroProps) {
  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-indigo-50/50 via-white to-white overflow-hidden">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-0 left-1/4 -translate-y-12 w-96 h-96 bg-indigo-200/40 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-teal-100/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text branding */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-left">
            <div className="inline-flex items-center space-x-2 bg-indigo-50 border border-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide">
              <Sparkles className="h-4 w-4 text-indigo-600 animate-spin-slow" />
              <span>Admissions Open for New Term 2026</span>
            </div>

            <h1 id="hero-title" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Empowering Students To Build <span className="text-indigo-600 relative inline-block">
                Success Stories
                <span className="absolute bottom-1.5 left-0 w-full h-2 bg-indigo-100 -z-10 rounded" />
              </span>
            </h1>

            <p id="hero-welcome-text" className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl text-justify">
              Welcome to <strong>Brilliant Private Center</strong>, a trusted place for quality education and academic excellence. 
              We help students achieve success through modern teaching methods, highly experienced teachers, and a supportive, friendly learning environment.
            </p>

            {/* Mission Tagline Highlight */}
            <div className="border-l-4 border-teal-500 bg-teal-50/50 px-5 py-3 rounded-r-xl max-w-xl">
              <span className="block font-mono text-xs uppercase font-bold tracking-widest text-teal-600">Our Mission</span>
              <p id="hero-tagline" className="text-lg font-bold text-teal-800">
                🎯 Your success is our mission.
              </p>
            </div>

            {/* User Interaction Trigger Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                id="hero-explore-btn"
                onClick={onExploreCourses}
                className="flex items-center justify-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-indigo-100 hover:shadow-indigo-200 hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <span>Browse Program List</span>
                <ArrowRight className="h-5 w-5" />
              </button>

              <button
                id="hero-quiz-btn"
                onClick={onTakeQuiz}
                className="flex items-center justify-center space-x-2 bg-white hover:bg-gray-50 border border-gray-200 text-gray-800 px-7 py-4 rounded-xl font-bold shadow-sm hover:border-gray-300 transition-all cursor-pointer"
              >
                <BookOpen className="h-5 w-5 text-indigo-600 animate-pulse" />
                <span>Try a Practice Quiz</span>
              </button>
            </div>

            {/* Fast Stats / Features Row in Hero */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100 max-w-lg">
              <div>
                <span className="block text-2xl sm:text-3xl font-bold text-indigo-600 font-sans">5</span>
                <span className="text-xs text-gray-500 font-medium">Years of Trust</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-bold text-indigo-600 font-sans">98%</span>
                <span className="text-xs text-gray-500 font-medium">Board Success</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-bold text-indigo-600 font-sans">2</span>
                <span className="text-xs text-gray-500 font-medium">Expert Mentors</span>
              </div>
            </div>
          </div>

          {/* Right Column: Beautiful Banner Asset Card */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            {/* Visual Frame */}
            <div className="absolute -inset-1.5 bg-gradient-to-tr from-indigo-500 to-teal-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000" />
            <div id="hero-image-container" className="relative bg-white p-3 rounded-2xl shadow-xl border border-gray-100">
              <img
                src={heroImage}
                alt="Brilliant Private Center Academy Classroom"
                className="w-full h-auto object-cover rounded-xl shadow-inner aspect-[16/10]"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlaid Banner floating box */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-gray-150 flex flex-col space-y-3 max-w-[270px] animate-bounce-slow">
                <div className="flex items-center space-x-3">
                  <div className="bg-indigo-100 text-indigo-700 p-2 rounded-lg shrink-0">
                    <Phone className="h-5 w-5 animate-pulse" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-gray-500 font-bold font-mono tracking-wider uppercase">ADMISSION CALL</span>
                    <a href="tel:01750091995" className="block text-sm font-extrabold text-indigo-600 hover:underline">01750091995</a>
                  </div>
                </div>
                <div className="pt-2 border-t border-gray-100 flex items-center space-x-3">
                  <div className="bg-emerald-150 text-emerald-700 p-2 rounded-lg shrink-0">
                    <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.336 4.993L2 22l5.132-1.347a9.96 9.96 0 004.878 1.277h.005c5.505 0 9.989-4.478 9.99-9.985A9.97 9.97 0 0012.012 2zm5.836 14.124c-.31.875-1.28 1.545-2.14 1.7-.58.1-1.34.19-3.9-1.01-3.26-1.53-5.36-4.83-5.52-5.05-.17-.22-1.31-1.74-1.31-3.32C4.981 6.86 5.86 6.08 6.18 5.75c.26-.27.57-.34.76-.34H8c.2 0 .42.06.6.5.21.52.74 1.8.8 1.92.06.12.1.27.02.43-.08.17-.18.27-.3.4l-.45.54c-.14.16-.29.34-.12.63a8.9 9.9 0 001.62 2c1.37 1.22 2.5 1.6 2.85 1.77.36.17.57.14.78-.1.21-.24.9-1.05 1.14-1.41.24-.36.48-.3.8-.18s2.04 1 2.4.1.42.18.5.34c.08.17.08.97-.22 1.84z"/>
                    </svg>
                  </div>
                  <div>
                    <span className="block text-[10px] text-emerald-600 font-bold font-mono tracking-wider uppercase">WHATSAPP CHAT</span>
                    <a 
                      href="https://wa.me/8801750091995?text=Hello%20Brilliant%20Private%20Center,%20I'd%20like%20to%20inquire%20about%20admissions." 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="block text-sm font-extrabold text-emerald-600 hover:underline cursor-pointer"
                    >
                      01750091995
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
