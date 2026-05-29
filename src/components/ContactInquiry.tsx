/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle, 
  Clock, 
  ListOrdered, 
  Loader2, 
  HeartHandshake,
  AlertCircle,
  HelpCircle,
  Compass
} from 'lucide-react';
import { Inquiry } from '../types';
import { coursesData } from '../data/courses';

interface ContactInquiryProps {
  selectedProgramId: string;
  onProgramChange: (id: string) => void;
}

export default function ContactInquiry({ selectedProgramId, onProgramChange }: ContactInquiryProps) {
  // Local Form state
  const [studentName, setStudentName] = useState('');
  const [parentName, setParentName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  
  // Interaction states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);

  // Inquiries list from localStorage
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);

  // Load inquiries
  useEffect(() => {
    const raw = localStorage.getItem('brilliant_coaching_inquiries');
    if (raw) {
      try {
        setInquiries(JSON.parse(raw));
      } catch (err) {
        console.error(err);
      }
    }
  }, []);

  // Submit Handler
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);
    setSuccessMsg(null);

    // Validate fields
    if (!studentName.trim()) {
      setFormError('Please enter the Student name.');
      return;
    }
    if (!parentName.trim()) {
      setFormError('Please enter the Parent/Guardian name.');
      return;
    }
    if (!phone.trim()) {
      setFormError('Please enter a valid Phone contact number.');
      return;
    }
    if (!/^\d{11,}$/.test(phone.replace(/\D/g, ''))) {
      setFormError('Please enter a valid 11-digit mobile number.');
      return;
    }

    setIsSubmitting(true);

    // Simulate database write
    setTimeout(() => {
      const newInquiry: Inquiry = {
        id: 'BR-' + Math.floor(1000 + Math.random() * 9000),
        studentName: studentName.trim(),
        parentName: parentName.trim(),
        phone: phone.trim(),
        programId: selectedProgramId || 'primary-secondary',
        submittedAt: new Date().toLocaleString(),
        status: 'Received',
        notes: notes.trim() || 'No additional note'
      };

      const updated = [newInquiry, ...inquiries];
      localStorage.setItem('brilliant_coaching_inquiries', JSON.stringify(updated));
      setInquiries(updated);
      
      // Clear Inputs
      setStudentName('');
      setParentName('');
      setPhone('');
      setNotes('');
      setIsSubmitting(false);

      setSuccessMsg(`Success! Inquiry registered. Your reference number is ${newInquiry.id}. Our admission helper will call you at ${newInquiry.phone} within 2 hours.`);
    }, 1200);
  };

  const clearInquiries = () => {
    localStorage.removeItem('brilliant_coaching_inquiries');
    setInquiries([]);
    setSuccessMsg(null);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50/50 border-t border-gray-150 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold tracking-widest text-indigo-600 uppercase font-mono block mb-2">
            📞 CONNECT WITH US
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Schedule an Academic Consultation
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-500 text-justify">
            For admissions, specialized sibling scholarship requests, or routine notes collection, feel free to call us anytime or fill in the short form below.
          </p>
        </div>

        {/* Primary Contact Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          
          {/* Left Block: Traditional Details & Address - 5 cols */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-6 text-left">
              <h3 className="text-xl font-extrabold text-gray-900">Direct Contact Details</h3>
              <p className="text-sm text-gray-500 text-justify">
                Our main office desk stands ready to assist parents and candidates during standard business hours (8:00 AM – 9:00 PM BST).
              </p>

              {/* Phone Line Card */}
              <div className="flex items-start space-x-4">
                <div className="bg-indigo-50 border border-indigo-100 text-indigo-600 p-3.5 rounded-2xl shrink-0 mt-0.5">
                  <Phone className="h-6 w-6 animate-pulse" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-indigo-500 block uppercase tracking-wider">OFFICIAL HELPLINE</span>
                  <a href="tel:01750091995" className="text-2xl font-black text-gray-950 hover:underline">01750091995</a>
                  <span className="text-[11px] text-gray-400 block mt-1">Free counseling callback available anytime.</span>
                </div>
              </div>

              {/* WhatsApp Chat Card */}
              <div className="flex items-start space-x-4 pt-4 border-t border-gray-50">
                <div className="bg-emerald-50 border border-emerald-100 text-emerald-600 p-3.5 rounded-2xl shrink-0 mt-0.5">
                  <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.336 4.993L2 22l5.132-1.347a9.96 9.96 0 004.878 1.277h.005c5.505 0 9.989-4.478 9.99-9.985A9.97 9.97 0 0012.012 2zm5.836 14.124c-.31.875-1.28 1.545-2.14 1.7-.58.1-1.34.19-3.9-1.01-3.26-1.53-5.36-4.83-5.52-5.05-.17-.22-1.31-1.74-1.31-3.32C4.981 6.86 5.86 6.08 6.18 5.75c.26-.27.57-.34.76-.34H8c.2 0 .42.06.6.5.21.52.74 1.8.8 1.92.06.12.1.27.02.43-.08.17-.18.27-.3.4l-.45.54c-.14.16-.29.34-.12.63a8.9 9.9 0 001.62 2c1.37 1.22 2.5 1.6 2.85 1.77.36.17.57.14.78-.1.21-.24.9-1.05 1.14-1.41.24-.36.48-.3.8-.18s2.04 1 2.4.1.42.18.5.34c.08.17.08.97-.22 1.84z"/>
                  </svg>
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-emerald-600 block uppercase tracking-wider">WHATSAPP ADMISSION DESK</span>
                  <a 
                    href="https://wa.me/8801750091995?text=Hello%20Brilliant%20Private%20Center,%20I'd%20like%20to%20inquire%20about%20admissions." 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-2xl font-black text-emerald-600 hover:underline cursor-pointer"
                  >
                    01750091995
                  </a>
                  <span className="text-[11px] text-gray-400 block mt-1">Chat live or drop questions and files instantly.</span>
                </div>
              </div>

              {/* Physical Campus Address Card */}
              <div className="flex items-start space-x-4 pt-4 border-t border-gray-50">
                <div className="bg-teal-50 border border-teal-100 text-teal-600 p-3.5 rounded-2xl shrink-0 mt-0.5">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-teal-600 block uppercase tracking-wider">CAMPUS LOCATION</span>
                  <address className="text-base font-bold text-gray-800 not-italic mt-0.5" id="campus-address">
                    Brilliant Private Center<br />
                    Ratanpur, Panchbibi, Joypurhat
                  </address>
                  <span className="text-[11px] text-gray-400 block mt-1">Visit our coaching campus for classes and enrollment materials.</span>
                </div>
              </div>

            </div>

            {/* Google Map Section */}
            <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm space-y-4 text-left">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="p-1.5 bg-indigo-50 border border-indigo-100 rounded-lg text-indigo-600">
                    <Compass className="h-4 w-4" />
                  </span>
                  <h4 className="text-xs font-bold text-gray-900 font-mono tracking-wide uppercase">Interactive Campus Map</h4>
                </div>
                <a 
                  href="https://maps.app.goo.gl/2XGz67NhhTgVuXoW9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-indigo-600 hover:text-indigo-700 hover:underline flex items-center space-x-1"
                >
                  <span>Expand Map</span>
                  <span>↗</span>
                </a>
              </div>
              
              {/* Google Maps Embed Iframe */}
              <div className="w-full h-56 rounded-2xl overflow-hidden border border-gray-150 shadow-inner relative bg-gray-50">
                <iframe
                  id="google-maps-frame"
                  src="https://maps.google.com/maps?q=Brilliant%20Private%20Center,%20Ratanpur,%20Panchbibi,%20Joypurhat&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-300"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  title="Brilliant Private Center, Joypurhat Location Map"
                ></iframe>
              </div>

              {/* Direct Maps Action Button */}
              <a
                href="https://maps.app.goo.gl/2XGz67NhhTgVuXoW9"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs py-3.5 px-4 rounded-xl transition-all flex items-center justify-center space-x-2 shadow-sm cursor-pointer"
              >
                <MapPin className="h-4 w-4 text-teal-400" />
                <span>Open in Google Maps Navigation</span>
              </a>
            </div>

          </div>

          {/* Right Block: Inquiry Form Card - 7 cols */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-xl text-left">
            <div className="border-b border-gray-100 pb-5 mb-6">
              <h3 id="form-title" className="text-xl sm:text-2xl font-bold text-gray-900">Send an Academic Admission Request</h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-1 text-justify">
                Looking to elevate your GPA? Fill in this file and our student desk will schedule a quick counseling callback.
              </p>
            </div>

            {/* Error alerts inside form */}
            {formError && (
              <div id="form-error-alert" className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl mb-6 text-xs sm:text-sm flex items-start space-x-2.5">
                <AlertCircle className="h-5 w-5 text-red-500 shrink-0" />
                <span>{formError}</span>
              </div>
            )}

            {/* Success alerts inside form */}
            {successMsg && (
              <div id="form-success-alert" className="bg-teal-50 border border-teal-200 text-teal-800 p-4 rounded-xl mb-6 text-xs sm:text-sm flex items-start space-x-2.5">
                <CheckCircle className="h-5.5 w-5.5 text-teal-500 shrink-0" />
                <span className="leading-relaxed">{successMsg}</span>
              </div>
            )}

            {/* Core Form tag */}
            <form onSubmit={handleFormSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Student Name */}
                <div>
                  <label htmlFor="student-name" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5 font-mono">
                    Student Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="student-name"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    placeholder="e.g. Abrar Ahmed"
                    className="w-full bg-gray-50 hover:bg-gray-100/50 focus:bg-white border border-gray-200 rounded-xl py-3 px-4 text-xs sm:text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>

                {/* Parent Name */}
                <div>
                  <label htmlFor="parent-name" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5 font-mono">
                    Parent / Guardian Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="parent-name"
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    placeholder="e.g. Rezwanul Islam"
                    className="w-full bg-gray-50 hover:bg-gray-100/50 focus:bg-white border border-gray-200 rounded-xl py-3 px-4 text-xs sm:text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Parent/Student Mobile Number */}
                <div>
                  <label htmlFor="contact-phone" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5 font-mono">
                    Mobile / Contact Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="contact-phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 017XXXXXXXX"
                    className="w-full bg-gray-50 hover:bg-gray-100/50 focus:bg-white border border-gray-200 rounded-xl py-3 px-4 text-xs sm:text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>

                {/* Desired Program Class Selection */}
                <div>
                  <label htmlFor="desired-program" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5 font-mono">
                    Desired Coaching Program
                  </label>
                  <select
                    id="desired-program"
                    value={selectedProgramId}
                    onChange={(e) => onProgramChange(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-xs sm:text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    {coursesData.map((course) => (
                      <option key={course.id} value={course.id}>
                        {course.name} ({course.level})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Special message note */}
              <div>
                <label htmlFor="inquiry-notes" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5 font-mono">
                  Specific Requirements or Subject Pain-Points
                </label>
                <textarea
                  id="inquiry-notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Tell us about the student's weak subjects, prior scores, custom timing requests, or any special care expectations..."
                  rows={3}
                  className="w-full bg-gray-50 hover:bg-gray-100/50 focus:bg-white border border-gray-200 rounded-xl py-3 px-4 text-xs sm:text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 resize-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
                <button
                  type="submit"
                  id="submit-inquiry-btn"
                  disabled={isSubmitting}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl py-3.5 px-4 font-bold text-sm tracking-wide shadow-lg shadow-indigo-100 hover:shadow-indigo-200 transition-all flex items-center justify-center space-x-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Saving Enquiry...</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle className="h-4 w-4" />
                      <span>Save Locally</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:mh.mujahid7758@gmail.com?subject=Academic Consultation Admission Inquiry&body=Dear Brilliant Private Center Head,%0D%0A%0D%0AI would like to submit an admission request with the following details:%0D%0A%0D%0A- Student Full Name: ${studentName || '[Please Enter Student Name]'}%0D%0A- Parent/Guardian Name: ${parentName || '[Please Enter Parent Name]'}%0D%0A- Contact Number: ${phone || '[Please Enter Phone Number]'}%0D%0A- Desired Program ID: ${selectedProgramId}%0D%0A- Specific Requirements/Notes: ${notes || 'None'}`}
                  id="gmail-direct-link"
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white rounded-xl py-3.5 px-4 font-bold text-sm tracking-wide shadow-lg hover:shadow-teal-200 hover:-translate-y-0.5 transition-all flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <Send className="h-4 w-4" />
                  <span>Send via Gmail</span>
                </a>
              </div>
              <p className="text-[11px] text-gray-500 text-center mt-2 font-medium">
                Clicking <strong className="text-teal-600">Send via Gmail</strong> will pre-fill a school submission to <strong className="text-indigo-600">mh.mujahid7758@gmail.com</strong> on your device.
              </p>

            </form>
          </div>

        </div>

        {/* Live Personal Inquiry Status Lookup Sandbox */}
        {inquiries.length > 0 && (
          <div id="personal-inquiries-dashboard" className="bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-gray-100 text-left">
            <div className="border-b border-gray-100 pb-5 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="bg-indigo-50 text-indigo-700 border border-indigo-150 p-1.5 rounded-lg">
                    <ListOrdered className="h-5 w-5" />
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 font-sans">
                    My Submitted Inquiries Status Center
                  </h3>
                </div>
                <p className="text-xs text-gray-500 mt-1 text-justify">
                  These records are stored locally in your browser cache. You can track progress or reference them when calling our helpline desk.
                </p>
              </div>

              <button
                onClick={clearInquiries}
                id="clear-cache-btn"
                className="text-xs text-red-500 hover:text-red-700 font-bold font-mono py-1.5 px-3 rounded-lg hover:bg-red-50 shrink-0 transition-colors cursor-pointer"
              >
                Clear History
              </button>
            </div>

            {/* Inquiries listings */}
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left text-gray-600 border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100 font-bold uppercase tracking-wider text-gray-500 text-[10px] font-mono">
                    <th className="py-3 px-4">Inquiry Code</th>
                    <th className="py-3 px-4">Student & Parent</th>
                    <th className="py-3 px-4">Course Program</th>
                    <th className="py-3 px-4">Contact Phone</th>
                    <th className="py-3 px-4">Submitted At</th>
                    <th className="py-3 px-4">Staff Action Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {inquiries.map((inq) => {
                    const matchedCourse = coursesData.find(c => c.id === inq.programId);
                    return (
                      <tr key={inq.id} id={`inquiry-row-${inq.id}`} className="hover:bg-gray-50/50 transition-colors">
                        <td className="py-4 px-4 font-mono font-bold text-indigo-600">
                          {inq.id}
                        </td>
                        <td className="py-4 px-4">
                          <span className="block font-bold text-gray-900">{inq.studentName}</span>
                          <span className="block text-gray-400 font-semibold">{inq.parentName} (Parent)</span>
                        </td>
                        <td className="py-4 px-4">
                          <span className="font-semibold text-gray-800">
                            {matchedCourse ? matchedCourse.name : inq.programId}
                          </span>
                        </td>
                        <td className="py-4 px-4 font-mono">
                          {inq.phone}
                        </td>
                        <td className="py-4 px-4 font-mono text-gray-400">
                          {inq.submittedAt}
                        </td>
                        <td className="py-4 px-4">
                          <span className="inline-flex items-center space-x-1.5 bg-emerald-50 text-emerald-800 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide border border-emerald-150">
                            <Clock className="h-3 w-3 shrink-0 text-emerald-600 animate-pulse" />
                            <span>{inq.status} (Call Slated)</span>
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Helpline Advisory note block */}
            <div className="bg-teal-50 border border-teal-100 p-4 rounded-xl mt-6 flex items-start space-x-3 text-xs leading-relaxed text-teal-800 font-medium">
              <HeartHandshake className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
              <div>
                <span>If you require immediate clearance or have not received a counseling call within 2 hours, please feel free to dial <strong>01750091995</strong> with your Inquiry Reference Code. We prioritize every student file.</span>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
