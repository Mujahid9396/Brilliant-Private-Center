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
      title: 'নিয়মিত ক্লাস রুটিন',
      desc: 'কোনো টপিক বাদ পড়ে না। আমরা সুনির্দিষ্ট ক্লাস প্ল্যান প্রদান করি, যা ছাত্র এবং অভিভাবক উভয়কেই প্রতি সপ্তাহের সিলেবাস এগিয়ে যাওয়ার বিষয়ে অবহিত রাখে।',
      icon: Calendar,
      tag: 'দৃঢ় প্রতিশ্রুতি'
    },
    {
      title: 'হোমওয়ার্ক সাপোর্ট ডেস্ক',
      desc: 'আমাদের অভিজ্ঞ শিক্ষকগণ ক্লাসের আগে ও পরে শিক্ষার্থীদের পড়ালেখার যেকোনো সমস্যা ও প্রতিদিনের বাড়ির কাজ সমাধান করতে আন্তরিকভাবে সাহায্য করে থাকেন।',
      icon: ClipboardCheck,
      tag: 'বিশেষ সহায়তা'
    },
    {
      title: 'মডেল টেস্ট পরীক্ষা',
      desc: 'আমরা পরীক্ষার আসল হলের শতভাগ পরিবেশ, ওএমআর শিট এবং বোর্ড স্ট্যান্ডার্ডের উত্তরপত্র মূল্যায়নের মাধ্যমে শিক্ষার্থীদের বোর্ড পরীক্ষার ভয় দূর করি।',
      icon: FileCheck2,
      tag: 'সর্বোত্তম অনুশীলন'
    },
    {
      title: 'স্টাডি ম্যাটেরিয়াল ও অনন্য নোট',
      desc: 'সহজ ভাষায় তৈরি এক্সক্লুসিভ লেকচার শিট, হ্যান্ডনোট এবং অধ্যায়ভিত্তিক বিশেষ প্রশ্নব্যাংক, যা আমাদের অভিজ্ঞ শিক্ষক প্যানেল দ্বারা যত্ন সহকারে প্রস্তুতকৃত।',
      icon: BookMarked,
      tag: 'উচ্চ-মানের নোট'
    },
    {
      title: 'অগ্রগতি ট্র্যাকিং সিস্টেম',
      desc: 'শিক্ষার্থীর নিয়মিত পরীক্ষার ফলাফল ও অগ্রগতি নিখুঁতভাবে ট্র্যাক করা হয়। গুরুত্বপূর্ণ প্রোগ্রেস আপডেট অভিভাবকের সাথে شفافভাবে শেয়ার করা হয়।',
      icon: TrendingUp,
      tag: 'সক্রিয় তদারকি'
    }
  ];

  return (
    <section id="facilities" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold tracking-widest text-indigo-600 uppercase font-mono block mb-2">
            🧑‍🎓 শিক্ষার্থীদের অভিজ্ঞতা ও সুবিধা
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight font-sans">
            সেরা কোর্স সুবিধাসমূহ ও প্রোগ্রেস ট্র্যাকিং
          </h2>
          <p id="facilities-intro-text" className="mt-4 text-lg text-gray-500 text-justify">
            আমরা শুধু ক্লাসে পাঠদানই করি না—বরং এমন একটি নিয়মতান্ত্রিক পরিবেশ তৈরি করি যা শিক্ষার্থীর সার্বিক পড়াশোনার অগ্রগতি নিশ্চিত করে। দেখুন কিভাবে আমাদের সুবিধাসমূহ শিক্ষার্থীদের সেরা ফলাফলে ভূমিকা রাখছে।
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
