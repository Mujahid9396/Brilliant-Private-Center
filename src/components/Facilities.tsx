/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Calendar, 
  ClipboardCheck, 
  TrendingUp, 
  BookMarked,
  FileCheck2
} from 'lucide-react';

export default function Facilities() {
  const facilities = [
    {
      title: 'Regular Class Routine',
      desc: 'Never miss a topic. We provide automated physical and digital schedules, keeping both parents and students perfectly aligned on weekly syllabus progression.',
      icon: Calendar,
      tag: 'Strict Commitment'
    },
    {
      title: 'Homework Support Desk',
      desc: 'Our designated support desk is open 1 hour before and after batch timings. Experienced assistant teachers help students solve personal roadblocks and daily homework tasks.',
      icon: ClipboardCheck,
      tag: 'Special Assistance'
    },
    {
      title: 'Model Test Exams',
      desc: 'We replicate accurate exam hall constraints, OMR answer scripts, time pressures, and strict board grading keys so candidates can conquer stress prior to public exams.',
      icon: FileCheck2,
      tag: 'Practice Makes Perfect'
    },
    {
      title: 'Study Materials & Notes',
      desc: 'Premium, simplified lecture sheets, handwritten mathematics shortcut notebooks, and custom subject-wise question banks curated carefully by our academic panel.',
      icon: BookMarked,
      tag: 'High Quality Notes'
    },
    {
      title: 'Progress Tracking System',
      desc: 'Continuous evaluations and weekly score analytics are digitized and stored. We share immediate SMS alerts and progress reports with parents transparently.',
      icon: TrendingUp,
      tag: 'Active Guarding'
    }
  ];

  return (
    <section id="facilities" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold tracking-widest text-indigo-600 uppercase font-mono block mb-2">
            🧑‍🎓 STUDENT EXPERIENCE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight font-sans">
            Premium Facilities & Progress Tracking
          </h2>
          <p id="facilities-intro-text" className="mt-4 text-lg text-gray-500 text-justify">
            We don’t just teach lessons — we construct environments where student growth is supported from home routines to exams. See how our facilities align behind student achievement.
          </p>
        </div>

        {/* Facilities visual cards list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {facilities.map((fac, idx) => {
            const Icon = fac.icon;
            return (
              <div
                key={idx}
                id={`facility-card-${idx}`}
                className="bg-gray-50/50 hover:bg-white border rounded-2xl p-5 hover:shadow-lg transition-all duration-300 border-gray-100 hover:border-gray-200 text-left flex flex-col justify-between"
              >
                <div>
                  <div className="p-2.5 bg-indigo-50 border border-indigo-100 text-indigo-600 rounded-xl inline-block mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm sm:text-base leading-snug mb-2 font-sans">{fac.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed text-justify">{fac.desc}</p>
                </div>
                <div className="mt-5 pt-3 border-t border-gray-100">
                  <span className="text-[10px] font-mono tracking-wider font-bold text-teal-600 uppercase">
                    {fac.tag}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
