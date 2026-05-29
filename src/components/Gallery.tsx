/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

// Import our generated assets
import imgClassroom from '../assets/images/gallery_classroom_1779472778211.png';
import imgExams from '../assets/images/gallery_exams_1779472795432.png';
import imgAchievements from '../assets/images/gallery_achievements_1779472815378.png';
import imgEvents from '../assets/images/gallery_events_1779472833884.png';

interface GalleryItem {
  id: string;
  category: 'classes' | 'exams' | 'achievements' | 'events';
  title: string;
  description: string;
  src: string;
}

export default function Gallery() {
  const [filter, setFilter] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 'classroom-activities',
      category: 'classes',
      title: 'Classroom Activities',
      description: 'Engaged, high-school coaching sessions featuring peer brainstorm boards, interactive visual learning formats, and collaborative task solutions.',
      src: imgClassroom
    },
    {
      id: 'exam-sessions',
      category: 'exams',
      title: 'Exam Sessions',
      description: 'Strict, test-paper environment mimicking board patterns, preparing SSC candidates with rigorous timing control and high-pressure answer speed drills.',
      src: imgExams
    },
    {
      id: 'student-achievements',
      category: 'achievements',
      title: 'Student Achievements',
      description: 'Smiles of academic victory. Satisfied student scholars celebrating top-bracket grades, GPA 5.0 results, and college credentials.',
      src: imgAchievements
    },
    {
      id: 'coaching-events',
      category: 'events',
      title: 'Coaching Events',
      description: 'Guidance alignment. Active educational seminars, parental orientation boards, and award events conducted with transparency.',
      src: imgEvents
    }
  ];

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex(prev => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex(prev => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="gallery" className="py-16 md:py-24 bg-white text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Gallery Headers */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-sm font-bold tracking-widest text-indigo-600 uppercase font-mono block mb-2">
            🖼️ CAMPUS SNAPSHOTS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Our Gallery & Academic Env
          </h2>
          <p id="gallery-intro-text" className="mt-4 text-base sm:text-lg text-gray-500">
            A window into the lives of student achievers. Explore real classroom dynamics, focused exams, and celebrations of merit.
          </p>
        </div>

        {/* Filter selection buttons */}
        <div className="flex flex-wrap gap-2 justify-center mb-10 max-w-xl mx-auto">
          {['all', 'classes', 'exams', 'achievements', 'events'].map((cat) => (
            <button
              key={cat}
              id={`gallery-filter-${cat}`}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all uppercase tracking-wider cursor-pointer ${
                filter === cat
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-gray-50 hover:bg-gray-100 text-gray-600 border border-gray-200'
              }`}
            >
              {cat === 'all' ? 'All Activities' : cat}
            </button>
          ))}
        </div>

        {/* Photos Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="gallery-grid">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              id={`gallery-item-card-${item.id}`}
              onClick={() => setLightboxIndex(idx)}
              className="group relative bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer aspect-4/3"
            >
              {/* Picture asset */}
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* High Contrast Black Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-left" />

              {/* Text metadata overlaid on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-5 z-10 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                <span className="text-[9px] font-mono font-bold text-teal-400 bg-teal-950/60 border border-teal-500/20 px-2 py-0.5 rounded uppercase">
                  {item.category}
                </span>
                <h3 className="text-sm font-bold text-white mt-1.5">{item.title}</h3>
                <p className="text-[10px] text-gray-300 leading-normal mt-1 truncate">
                  {item.description}
                </p>
              </div>

              {/* Interactive Zoom icon */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-gray-800 p-2 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <Maximize2 className="h-4 w-4" />
              </div>
            </div>
          ))}
        </div>

        {/* Empty status check */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12 text-gray-400 bg-gray-50 rounded-2xl">
            <ImageIcon className="h-10 w-10 mx-auto opacity-30 mb-2" />
            <p>No gallery images found under this filter stream.</p>
          </div>
        )}

        {/* Full-Screen Dark Overlay Lightbox */}
        {lightboxIndex !== null && (
          <div
            id="gallery-lightbox"
            className="fixed inset-0 bg-gray-950/95 z-50 flex items-center justify-center p-4 sm:p-10 select-none animate-fade-in"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Close trigger button */}
            <button
              id="lightbox-close"
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 p-3 rounded-full hover:bg-white/20 transition-all cursor-pointer"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Left selector */}
            <button
              id="lightbox-prev"
              onClick={handlePrev}
              className="absolute left-4 sm:left-10 text-white/70 hover:text-white bg-white/10 p-4 rounded-full hover:bg-white/20 transition-all cursor-pointer"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Slide showcase wrapper */}
            <div
              className="max-w-4xl w-full text-center space-y-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl p-2 inline-block">
                <img
                  src={filteredItems[lightboxIndex].src}
                  alt={filteredItems[lightboxIndex].title}
                  className="max-h-[60vh] sm:max-h-[70vh] object-contain rounded-lg mx-auto"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Info detail banner */}
              <div className="text-center text-white max-w-2xl mx-auto space-y-1 sm:space-y-2">
                <span className="text-[10px] font-mono tracking-widest font-bold text-teal-400 uppercase">
                  {filteredItems[lightboxIndex].category} snapshot
                </span>
                <h4 id="lightbox-title" className="text-lg sm:text-xl font-bold font-sans">
                  {filteredItems[lightboxIndex].title}
                </h4>
                <p id="lightbox-description" className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans px-4">
                  {filteredItems[lightboxIndex].description}
                </p>
                <span className="inline-block text-[10px] text-gray-500 font-mono">
                  IMAGE {lightboxIndex + 1} OF {filteredItems.length}
                </span>
              </div>
            </div>

            {/* Right selector */}
            <button
              id="lightbox-next"
              onClick={handleNext}
              className="absolute right-4 sm:right-10 text-white/70 hover:text-white bg-white/10 p-4 rounded-full hover:bg-white/20 transition-all cursor-pointer"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
