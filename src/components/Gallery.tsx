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
      title: 'প্রাণবন্ত ক্লাসরুম কার্যক্রম',
      description: 'আধুনিক ও সহজ ভিজ্যুয়াল পদ্ধতিতে শিক্ষার্থীদের পাঠদান করা হচ্ছে এবং শিক্ষার্থীরা একে অপরকে সহায়তার মাধ্যমে পড়ায় মনোনিবেশ করছে।',
      src: imgClassroom
    },
    {
      id: 'exam-sessions',
      category: 'exams',
      title: 'কুইজ ও বোর্ড-প্যাটার্ন মডেল টেস্ট',
      description: 'বোর্ড পরীক্ষার আদলে তৈরি কঠোর রিয়েল-টাইম পরিবেশে পরীক্ষা গ্রহণের মাধ্যমে শিক্ষার্থীদের ভীতি দূর করে আত্মবিশ্বাসী করে তোলা হয়।',
      src: imgExams
    },
    {
      id: 'student-achievements',
      category: 'achievements',
      title: 'সেরা মেধাবীদের জিপিএ-৫.০০ প্রাপ্তি',
      description: 'সাফল্যের গৌরবোজ্জ্বল হাসি। জিপিএ-৫.০০ অর্জনকারী কৃতী শিক্ষার্থীদের সংবর্ধনা ও তাদের অভিভাবকগণের সাথে আনন্দময় মুহূর্ত।',
      src: imgAchievements
    },
    {
      id: 'coaching-events',
      category: 'events',
      title: 'শিক্ষামূলক সেমিনার ও পুরস্কার বিতরণী',
      description: 'শিক্ষামূলক দিকনির্দেশনা ও পরামর্শ সভা, অভিভাবক মতবিনিময় সেমিনার এবং মেধাবী শিক্ষার্থীদের বিশেষ পুরষ্কার বিতরণী অনুষ্ঠান।',
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

  const getCategoryLabel = (cat: string) => {
    switch (cat) {
      case 'classes': return 'ক্লাস কার্যক্রম';
      case 'exams': return 'পরীক্ষা ও কুইজ';
      case 'achievements': return 'সাফল্য ও মেধা';
      case 'events': return 'বিশেষ সেমিনার';
      default: return 'সব কার্যক্রম';
    }
  };

  return (
    <section id="gallery" className="py-16 md:py-24 bg-white text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Gallery Headers */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-sm font-bold tracking-widest text-indigo-600 uppercase font-mono block mb-2">
            🖼️ ক্যাম্পাসের বাস্তব স্থিরচিত্র
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            ফটো গ্যালারি ও মনোরম পরিবেশ
          </h2>
          <p id="gallery-intro-text" className="mt-4 text-base sm:text-lg text-gray-500">
            আমাদের মেধাবী শিক্ষার্থীদের বর্ণিল সময়ের প্রতিচ্ছবি। এখানে পাবেন শ্রেণীকক্ষের পাঠদান, গুরুত্ব সহকারে পরীক্ষা গ্রহণ এবং কৃতিত্বের স্বীকৃতি উদযাপনের ছবিগুলো।
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
              {cat === 'all' ? 'সব ছবি' : getCategoryLabel(cat)}
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
                <span className="text-[9px] font-mono font-bold text-teal-400 bg-teal-950/60 border border-teal-500/20 px-2 py-0.5 rounded uppercase font-sans">
                  {getCategoryLabel(item.category)}
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
            <p>এই ফিল্টারের আওতায় কোনো ছবি খুঁজে পাওয়া যায়নি।</p>
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
                <span className="text-[10px] font-mono tracking-widest font-bold text-teal-400 uppercase font-sans">
                  {getCategoryLabel(filteredItems[lightboxIndex].category)} স্থিরচিত্র
                </span>
                <h4 id="lightbox-title" className="text-lg sm:text-xl font-bold font-sans">
                  {filteredItems[lightboxIndex].title}
                </h4>
                <p id="lightbox-description" className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans px-4">
                  {filteredItems[lightboxIndex].description}
                </p>
                <span className="inline-block text-[10px] text-gray-500 font-mono">
                  ছবি {lightboxIndex + 1} / {filteredItems.length}
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
