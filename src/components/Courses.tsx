/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { BookOpen, Calendar, HelpCircle, Check, DollarSign, Clock, ListChecks } from 'lucide-react';
import { Course } from '../types';
import { coursesData } from '../data/courses';

interface CoursesProps {
  onSelectCourseForInquiry: (courseId: string) => void;
}

export default function Courses({ onSelectCourseForInquiry }: CoursesProps) {
  const [selectedCourse, setSelectedCourse] = useState<Course>(coursesData[0]);

  const handleInquiryTrigger = (courseId: string) => {
    onSelectCourseForInquiry(courseId);
    // Smooth scroll to contact
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="courses" className="py-16 md:py-24 bg-gray-50/50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold tracking-widest text-indigo-600 uppercase font-mono block mb-2">
            📚 ACADEMIC PROGRAMS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Our Courses & Specialized Curriculums
          </h2>
          <p className="mt-4 text-lg text-gray-500 text-justify">
            We provide targeted, syllabus-correct tutoring designed to raise marks and build long-term confidence. 
            All courses include regular mock examinations at no extra cost.
          </p>
          <div className="mt-6 inline-flex items-center space-x-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold border border-indigo-150">
            <ListChecks className="h-4 w-4 shrink-0 text-indigo-600" />
            <span>📌 Regular chapter tests & physical exam answer script evaluation included.</span>
          </div>
        </div>

        {/* Primary Programs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {coursesData.map((course) => (
            <div
              key={course.id}
              id={`course-card-${course.id}`}
              className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-xl hover:border-gray-200 transition-all duration-300 text-left"
            >
              <div>
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div className="bg-indigo-50 text-indigo-700 px-3.5 py-1.5 rounded-full text-xs font-bold font-mono tracking-wider uppercase">
                    {course.level}
                  </div>
                  <div className="flex items-center space-x-1.5 bg-teal-50 text-teal-800 px-3 py-1 rounded-xl text-xs font-semibold">
                    <DollarSign className="h-3.5 w-3.5 shrink-0" />
                    <span>{course.monthlyFee} BDT / Month</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">{course.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 text-justify">{course.description}</p>

                {/* Bullets */}
                <div className="space-y-3 mb-6 bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <span className="block text-xs font-bold uppercase tracking-wider text-gray-500 font-mono">
                    Program highlights
                  </span>
                  {course.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start space-x-2.5 text-xs sm:text-sm">
                      <Check className="h-4 w-4 text-teal-500 shrink-0 mt-0.5" />
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Course Meta Info row & CTA */}
              <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <div className="space-y-1.5 text-xs text-gray-500">
                  <div className="flex items-center space-x-1.5">
                    <Calendar className="h-3.5 w-3.5 text-indigo-500 shrink-0" />
                    <span>{course.schedule}</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <Clock className="h-3.5 w-3.5 text-indigo-500 shrink-0" />
                    <span>{course.timeSlot}</span>
                  </div>
                </div>

                <button
                  id={`course-inquire-btn-${course.id}`}
                  onClick={() => handleInquiryTrigger(course.id)}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow-md shadow-indigo-100 shrink-0 transition-all hover:-translate-y-0.5 cursor-pointer text-center"
                >
                  Request Information
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Schedule & Fee interactive calculator section */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-indigo-50 text-left">
          <div className="border-b border-gray-100 pb-6 mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-extrabold text-gray-900">
                Interactive Program Explorer
              </h3>
              <p className="text-sm text-gray-500 mt-1 text-justify">
                Select a class stream to compare weekly routines, tuition rates, and testing schedules instantly.
              </p>
            </div>
            <div className="flex items-center space-x-2 text-xs bg-indigo-50 border border-indigo-100 text-indigo-700 px-3 py-1.5 rounded-xl font-semibold">
              <HelpCircle className="h-4 w-4" />
              <span>Need help picking? Call us anytime!</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Swapping Selector list (left 5 spans) */}
            <div className="lg:col-span-4 space-y-2">
              <span className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-500 mb-3">
                SELECT A MODULE
              </span>
              {coursesData.map((course) => (
                <button
                  key={course.id}
                  id={`compare-tab-${course.id}`}
                  onClick={() => setSelectedCourse(course)}
                  className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                    selectedCourse.id === course.id
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-100'
                      : 'bg-gray-50 hover:bg-gray-100 border-gray-150 text-gray-700'
                  }`}
                >
                  <div className="space-y-0.5">
                    <span className="block font-bold text-sm sm:text-base leading-snug">{course.name}</span>
                    <span className={`block text-[10px] font-mono tracking-wider uppercase font-semibold ${
                      selectedCourse.id === course.id ? 'text-indigo-100' : 'text-gray-500'
                    }`}>
                      {course.level}
                    </span>
                  </div>
                  <BookOpen className={`h-4 w-4 shrink-0 transition-transform ${
                    selectedCourse.id === course.id ? 'scale-110 opacity-100' : 'opacity-40'
                  }`} />
                </button>
              ))}
            </div>

            {/* Spec Card result (right 8 spans) */}
            <div className="lg:col-span-8 bg-gray-50/50 rounded-2xl p-6 border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                
                {/* Specifics list block 1 */}
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-semibold text-gray-400 block uppercase font-mono tracking-wider">
                      Target Level & Intended Students
                    </span>
                    <p className="text-base font-bold text-gray-800" id="selected-course-audience">
                      {selectedCourse.targetAudience}
                    </p>
                  </div>

                  <div>
                    <span className="text-xs font-semibold text-gray-400 block uppercase font-mono tracking-wider">
                      Weekly Exam Structure
                    </span>
                    <p className="text-base font-medium text-emerald-700" id="selected-course-exams">
                      {selectedCourse.weeklyTests}
                    </p>
                  </div>

                  <div>
                    <span className="text-xs font-semibold text-gray-400 block uppercase font-mono tracking-wider">
                      Time Block
                    </span>
                    <p className="text-base font-bold text-gray-800" id="selected-course-timeSlot">
                      {selectedCourse.timeSlot}
                    </p>
                  </div>
                </div>

                {/* Specifics list block 2 */}
                <div className="bg-white p-5 rounded-xl border border-gray-150 shadow-sm flex flex-col justify-between">
                  <div className="text-left">
                    <span className="text-xs font-semibold text-gray-400 block uppercase font-mono tracking-wider">
                      Standard Tuition Fee
                    </span>
                    <div className="flex items-baseline space-x-1 mt-1">
                      <span className="text-3xl font-black font-sans text-indigo-600" id="selected-course-fee">
                        {selectedCourse.monthlyFee}
                      </span>
                      <span className="text-sm font-semibold text-gray-500">BDT/month</span>
                    </div>
                    <p className="text-[11px] text-gray-400 mt-2 leading-relaxed text-justify">
                      *Includes all digital note-sheets, printing of weekly tests, model test fees, and doubt clearing desk access.
                    </p>
                  </div>

                  <button
                    id="selected-course-enroll-inquiry"
                    onClick={() => handleInquiryTrigger(selectedCourse.id)}
                    className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 px-4 rounded-xl font-bold text-sm tracking-wide shadow-md shadow-teal-100 hover:shadow-teal-250 transition-all mt-4 cursor-pointer text-center"
                  >
                    Send Enrollment Inquiry For This Program
                  </button>
                </div>

              </div>

              {/* Footnote on syllabus */}
              <div className="pt-4 border-t border-gray-150/50 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-2">
                <span>⚡ Physical seat booking requires booking advance clearance.</span>
                <span className="font-mono text-[10px] text-indigo-500 font-bold uppercase bg-indigo-50 px-2 py-0.5 rounded">
                  Brilliant Private Standard
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
