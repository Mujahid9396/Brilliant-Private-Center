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
  Compass,
  Settings,
  LogOut,
  FileText,
  Globe
} from 'lucide-react';
import { Inquiry } from '../types';
import { coursesData } from '../data/courses';
import {
  initiateGoogleAuth,
  handleOAuthCallback,
  getAccessToken,
  logoutGoogle,
  getOrCreateDocId,
  appendToGoogleDoc,
  getClientId,
  saveCustomClientId
} from '../utils/googleDocs';

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

  // Google Docs Sync States
  const [googleToken, setGoogleToken] = useState<string | null>(null);
  const [googleDocId, setGoogleDocId] = useState<string | null>(null);
  const [customClientId, setCustomClientId] = useState('');
  const [showDocsConfig, setShowDocsConfig] = useState(false);
  const [googleSyncStatus, setGoogleSyncStatus] = useState<'idle' | 'saving' | 'success' | 'error'>('idle');
  const [googleSyncError, setGoogleSyncError] = useState<string | null>(null);

  // Load inquiries & check Google configuration
  useEffect(() => {
    // 1. Retrieve local inquiries
    const raw = localStorage.getItem('brilliant_coaching_inquiries');
    if (raw) {
      try {
        setInquiries(JSON.parse(raw));
      } catch (err) {
        console.error(err);
      }
    }

    // 2. Handle Google OAuth redirect callback URL (hash fragment)
    const tokenFromHash = handleOAuthCallback();
    const token = tokenFromHash || getAccessToken();
    if (token) {
      setGoogleToken(token);
      const savedDocId = localStorage.getItem('brilliant_google_doc_id');
      if (savedDocId) {
        setGoogleDocId(savedDocId);
      }
    }

    // 3. Set custom Client ID configuration
    setCustomClientId(getClientId());
  }, []);

  // Submit Handler
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);
    setSuccessMsg(null);
    setGoogleSyncStatus('idle');
    setGoogleSyncError(null);

    // Validate fields
    if (!studentName.trim()) {
      setFormError('অনুগ্রহ করে শিক্ষার্থীর নাম প্রবেশ করান।');
      return;
    }
    if (!parentName.trim()) {
      setFormError('অনুগ্রহ করে পিতা / মাতার নাম প্রবেশ করান।');
      return;
    }
    if (!phone.trim()) {
      setFormError('অনুগ্রহ করে একটি সচল মোবাইল নম্বর দিন।');
      return;
    }
    if (!/^\d{11,}$/.test(phone.replace(/\D/g, ''))) {
      setFormError('১১ ডিজিটের সঠিক মোবাইল নম্বর দিন।');
      return;
    }

    setIsSubmitting(true);

    const newInquiry: Inquiry = {
      id: 'BR-' + Math.floor(1000 + Math.random() * 9000),
      studentName: studentName.trim(),
      parentName: parentName.trim(),
      phone: phone.trim(),
      programId: selectedProgramId || 'primary-secondary',
      submittedAt: new Date().toLocaleString(),
      status: 'Received',
      notes: notes.trim() || 'কোনো অতিরিক্ত তথ্য নেই'
    };

    // 1. Save to browser memories (guarantees local access)
    const updated = [newInquiry, ...inquiries];
    localStorage.setItem('brilliant_coaching_inquiries', JSON.stringify(updated));
    setInquiries(updated);

    // 2. Submit form database row directly to user's Google Apps Script Web App (Spreadsheet backend)
    let appsScriptSuccess = false;
    try {
      const matchedCourse = coursesData.find(c => c.id === selectedProgramId);
      const courseName = matchedCourse ? `${matchedCourse.name} (${matchedCourse.level})` : selectedProgramId;

      await fetch('https://script.google.com/macros/s/AKfycbwvM4tHuT4JGxShf_XUVItkFWutfKqcQNBOv_zlU7vD7V6PTcRniv7vfYEnNqBOQgfM/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          referenceCode: newInquiry.id,
          studentName: studentName.trim(),
          parentName: parentName.trim(),
          phoneNumber: phone.trim(),
          coachingProgram: courseName,
          specialNeeds: notes.trim() || 'কোনো অতিরিক্ত তথ্য নেই'
        })
      });
      appsScriptSuccess = true;
    } catch (err) {
      console.error('Google Apps Script Submission Error:', err);
    }

    let docSaveSuccess = false;
    let actualDocId = googleDocId;

    // 3. Attempt to save to Google Docs if Google account is connected
    if (googleToken) {
      setGoogleSyncStatus('saving');
      try {
        // Retrieve or dynamically create Google Document
        const activeDocId = await getOrCreateDocId(googleToken);
        actualDocId = activeDocId;
        setGoogleDocId(activeDocId);

        // Render matching values
        const matchedCourse = coursesData.find(c => c.id === selectedProgramId);
        const courseName = matchedCourse ? `${matchedCourse.name} (${matchedCourse.level})` : selectedProgramId;
        
        // Structure content with human readability directly appended
        const timestamp = new Date().toLocaleString('bn-BD', { timeZone: 'Asia/Dhaka' });
        const formatContent = `\n=========================================\nআবেদন রেফারেন্স আইডি: ${newInquiry.id}\nদাখিলের সময় (ঢাকা): ${timestamp}\nশিক্ষার্থীর নাম: ${newInquiry.studentName}\nপিতা/মাতার নাম: ${newInquiry.parentName}\nমোবাইল নম্বর: ${newInquiry.phone}\nকোচিং প্রোগ্রাম: ${courseName}\nবিশেষ চাহিদা / নোট: ${newInquiry.notes}\n=========================================\n`;

        await appendToGoogleDoc(googleToken, activeDocId, formatContent);
        setGoogleSyncStatus('success');
        docSaveSuccess = true;
      } catch (err: any) {
        console.error('Google Docs Sync Failure:', err);
        setGoogleSyncStatus('error');
        setGoogleSyncError(err.message || 'গুগল ডকসে লেখা যুক্ত করতে ব্যর্থ হয়েছে।');
      }
    }

    // Clear Form Fields
    setStudentName('');
    setParentName('');
    setPhone('');
    setNotes('');
    setIsSubmitting(false);

    // Build success toast text
    const feedback = `অভিনন্দন! ভর্তি আবেদন সফলভাবে সাবমিট হয়েছে। আপনার রেফারেন্স কোড হচ্ছে ${newInquiry.id}। আমাদের অ্যাডমিশন টিম আগামী ২ ঘণ্টার মধ্যে আপনার প্রদত্ত ${newInquiry.phone} নম্বরে সরাসরি কাউন্সেলিংয়ের জন্য কল করবে।`;
    setSuccessMsg(feedback);
  };

  const handleConnectGoogle = () => {
    initiateGoogleAuth();
  };

  const handleDisconnectGoogle = () => {
    logoutGoogle();
    setGoogleToken(null);
    setGoogleDocId(null);
    setGoogleSyncStatus('idle');
  };

  const handleSaveClientId = (e: React.FormEvent) => {
    e.preventDefault();
    saveCustomClientId(customClientId);
    alert('অভিনন্দন! আপনার কাস্টম ক্লায়েন্ট আইডি ব্রাউজারে সফলভাবে সংরক্ষণ করা হয়েছে। আপনার জিমেইল কানেক্ট করতে Connect বাটনে ক্লিক করুন।');
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
            📞 আমাদের সাথে যোগাযোগ করুন
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            হোম রুটিন বা ভর্তি নিয়ে কথা বলুন
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-500 text-justify">
            ভর্তি, বিশেষ ছাড়ের আবেদন, স্কলারশিপ বা ক্লাসের সাধারণ রুটিন সংক্রান্ত যেকোনো বিষয়ে কথা বলতে সরাসর কল করুন অথবা নিচের সংক্ষিপ্ত ফর্মটি পূরণ করুন।
          </p>
        </div>

        {/* Primary Contact Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          
          {/* Left Block: Traditional Details & Address - 5 cols */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-6 text-left">
              <h3 className="text-xl font-extrabold text-gray-900">সরাসরি যোগাযোগের মাধ্যম</h3>
              <p className="text-sm text-gray-500 text-justify">
                আমাদের অফিসিয়াল হেল্পডেস্ক অভিভাবক এবং শিক্ষার্থীদের একাডেমিক তথ্যের উত্তর প্রদানে সকাল ৮:০০ থেকে রাত ৯:০০ টা পর্যন্ত অবিরত প্রস্তুত রয়েছে।
              </p>

              {/* Phone Line Card */}
              <div className="flex items-start space-x-4">
                <div className="bg-indigo-50 border border-indigo-100 text-indigo-600 p-3.5 rounded-2xl shrink-0 mt-0.5">
                  <Phone className="h-6 w-6 animate-pulse" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-indigo-500 block uppercase tracking-wider">অফিসিয়াল হেল্পলাইন</span>
                  <a href="tel:01750091995" className="text-2xl font-black text-gray-950 hover:underline">01750091995</a>
                  <span className="text-[11px] text-gray-400 block mt-1">যেকোনো সময় পরামর্শ বা কলব্যাকের ব্যবস্থা রয়েছে।</span>
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
                  <span className="text-xs font-mono font-bold text-emerald-600 block uppercase tracking-wider">হোয়াটসঅ্যাপ অ্যাডমিশন ডেস্ক</span>
                  <a 
                    href="https://wa.me/8801750091995?text=Hello%20Brilliant%20Private%20Center,%20I'd%20like%20to%20inquire%20about%20admissions." 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-2xl font-black text-emerald-600 hover:underline cursor-pointer"
                  >
                    01750091995
                  </a>
                  <span className="text-[11px] text-gray-400 block mt-1">সরাসরি লিংকটিতে ক্লিক করে আমাদের সাথে চ্যাট শুরু করুন।</span>
                </div>
              </div>

              {/* Physical Campus Address Card */}
              <div className="flex items-start space-x-4 pt-4 border-t border-gray-50">
                <div className="bg-teal-50 border border-teal-100 text-teal-600 p-3.5 rounded-2xl shrink-0 mt-0.5">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-teal-600 block uppercase tracking-wider">ক্যাম্পাসের ঠিকানা</span>
                  <address className="text-base font-bold text-gray-800 not-italic mt-0.5" id="campus-address">
                    Brilliant Private Center<br />
                    রতনপুর, পাঁচবিবি, জয়পুরহাট
                  </address>
                  <span className="text-[11px] text-gray-400 block mt-1">সরাসরি পরিদর্শন করে ক্লাসরুম এবং শিক্ষা কার্যক্রম দেখার আমন্ত্রণ রইল।</span>
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
                  <h4 className="text-xs font-bold text-gray-900 font-mono tracking-wide uppercase">ইন্টারেক্টিভ ক্যাম্পাসের গুগল ম্যাপ</h4>
                </div>
                <a 
                  href="https://maps.app.goo.gl/2XGz67NhhTgVuXoW9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-indigo-600 hover:text-indigo-700 hover:underline flex items-center space-x-1"
                >
                  <span>ম্যাপ বড় করুন</span>
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
                <span>গুগল ম্যাপস নেভিগেশন চালু করুন</span>
              </a>
            </div>

          </div>

          {/* Right Block: Inquiry Form Card - 7 cols */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-xl text-left">
            <div className="border-b border-gray-100 pb-5 mb-6">
              <h3 id="form-title" className="text-xl sm:text-2xl font-bold text-gray-900">ভর্তির অগ্রিম আবেদন ফরম পূরণ করুন</h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-1 text-justify">
                ভালো ফলাফল এবং জিপিএ-৫.০০ নিশ্চিত করতে চান? এই সংক্ষিপ্ত ফর্মটি পূরণ করুন এবং আমাদের পক্ষ থেকে ২ ঘণ্টার মধ্যে কল করে কাউন্সেলিং দেওয়া হবে।
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
                    শিক্ষার্থীর পূর্ণ নাম <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="student-name"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    placeholder="যেমন: আবরার আহমেদ"
                    className="w-full bg-gray-50 hover:bg-gray-100/50 focus:bg-white border border-gray-200 rounded-xl py-3 px-4 text-xs sm:text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>

                {/* Parent Name */}
                <div>
                  <label htmlFor="parent-name" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5 font-mono">
                    পিতা / মাতার নাম <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="parent-name"
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    placeholder="যেমন: রেজওয়ানুল ইসলাম"
                    className="w-full bg-gray-50 hover:bg-gray-100/50 focus:bg-white border border-gray-200 rounded-xl py-3 px-4 text-xs sm:text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Parent/Student Mobile Number */}
                <div>
                  <label htmlFor="contact-phone" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5 font-mono">
                    মোবাইল নম্বর <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="contact-phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="যেমন: ০১৭XXXXXXXX"
                    className="w-full bg-gray-50 hover:bg-gray-100/50 focus:bg-white border border-gray-200 rounded-xl py-3 px-4 text-xs sm:text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>

                {/* Desired Program Class Selection */}
                <div>
                  <label htmlFor="desired-program" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5 font-mono">
                    কাঙ্ক্ষিত কোচিং প্রোগ্রাম
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
                  বিশেষ কোনো চাহিদা বা দুর্বল বিষয়ে অতিরিক্ত ক্লাসের অনুরোধ
                </label>
                <textarea
                  id="inquiry-notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="শিক্ষার্থী কোন কোন বিষয়ে দুর্বল, পূর্বের ক্লাসের পরীক্ষার ফলাফল কেমন ছিল বা বিশেষ কোনো কেয়ার প্রত্যাশা করছেন কিনা সে সম্পর্কে বিস্তারিত জানান..."
                  rows={3}
                  className="w-full bg-gray-50 hover:bg-gray-100/50 focus:bg-white border border-gray-200 rounded-xl py-3 px-4 text-xs sm:text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 resize-none"
                />
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  id="submit-inquiry-btn"
                  disabled={isSubmitting}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl py-3.5 px-4 font-bold text-sm tracking-wide shadow-lg shadow-indigo-100 hover:shadow-indigo-200 transition-all flex items-center justify-center space-x-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>তথ্য সাবমিট করা হচ্ছে...</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle className="h-4 w-4" />
                      <span>তথ্য সাবমিট করুন</span>
                    </>
                  )}
                </button>
              </div>

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
                    আমার ভর্তি আবেদনের বর্তমান আপডেট ও স্ট্যাটাস
                  </h3>
                </div>
                <p className="text-xs text-gray-500 mt-1 text-justify">
                  এই তথ্যগুলো সম্পূর্ণ সুরক্ষিতভাবে আপনার ব্রাউজার মেমোরিতে সেভ রয়েছে। সরাসরি আমাদের সাথে ফোন কলে তথ্য বিস্তারিত ঝালাই করতে রেফারেন্স কোড কাজ দেবে।
                </p>
              </div>

              <button
                onClick={clearInquiries}
                id="clear-cache-btn"
                className="text-xs text-red-500 hover:text-red-700 font-bold font-mono py-1.5 px-3 rounded-lg hover:bg-red-50 shrink-0 transition-colors cursor-pointer"
              >
                ইতিহাস বা ক্যাশ মুছুন
              </button>
            </div>

            {/* Inquiries listings */}
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left text-gray-600 border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100 font-bold uppercase tracking-wider text-gray-500 text-[10px] font-mono">
                    <th className="py-3 px-4">আবেদন কোড</th>
                    <th className="py-3 px-4">শিক্ষার্থী ও অভিভাবক</th>
                    <th className="py-3 px-4">কোচিং প্রোগ্রাম</th>
                    <th className="py-3 px-4">সরাসরি ফোন</th>
                    <th className="py-3 px-4">দাখিলের সময়</th>
                    <th className="py-3 px-4">আবেদনের বর্তমান অবস্থা</th>
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
                          <span className="block text-gray-400 font-semibold">{inq.parentName} (অভিভাবক)</span>
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
                            <span>{inq.status} (কল দেওয়া হবে)</span>
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
                <span>জরুরি ভর্তি বা ২ ঘণ্টার মধ্যে কোনো ফিরতি কল না পেলে অনুগ্রহ করে রেফারেন্স কোডটি উল্লেখ করে সরাসরি আমাদের অফিশিয়াল নম্বরে (০১৭৫০০৯১৯৯৫) কল দিন। আমাদের কাছে প্রতিটি শিক্ষার্থীর ভবিষ্যৎ অত্যন্ত মূল্যবান।</span>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
