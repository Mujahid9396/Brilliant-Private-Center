/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GraduationCap, Phone, MapPin, Sparkles, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer-comp" className="bg-slate-900 text-gray-300 pt-16 pb-12 border-t border-slate-800 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Final Message & Call to Action Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-800 items-center">
          
          {/* Tagline Column */}
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center space-x-2 bg-indigo-500/10 text-indigo-400 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="h-3.5 w-3.5" />
              <span>আপনার পড়াশোনার ভিত্তি গড়ুন</span>
            </div>
            
            {/* Final Message Mandatory string */}
            <p id="footer-final-message" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
              "Brilliant Private Center-এ আমরা শুধু পাঠদানই করি না—বরং প্রতিটি শিক্ষার্থীর সাফল্যের ইতিহাস তৈরি করি। আজই আমাদের সাথে যুক্ত হয়ে আপনার সুপ্ত মেধার বিকাশ ঘটান।"
            </p>
          </div>

          {/* Quick Call Column */}
          <div className="lg:col-span-4 bg-slate-800/50 p-6 rounded-2xl border border-slate-750 text-left space-y-4">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-indigo-400 font-bold uppercase block">
                সরাসরি অ্যাডমিশন হেল্পলাইন
              </span>
              <div className="flex items-center space-x-3.5 mt-2">
                <div className="bg-indigo-600 text-white p-2.5 rounded-xl shrink-0">
                  <Phone className="h-5 w-5 animate-pulse" />
                </div>
                <div>
                  <a href="tel:01750091995" className="block text-xl font-bold font-sans text-white hover:underline">
                    01750091995
                  </a>
                  <span className="text-xs text-gray-400 block">যেকোনো সময় পড়াশোনার বিষয়ে কথা বলুন</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-755">
              <span className="text-[10px] font-mono tracking-widest text-emerald-400 font-bold uppercase block">
                হোয়াটসঅ্যাপ চ্যাট ইনকোয়ারি
              </span>
              <div className="flex items-center space-x-3.5 mt-2">
                <div className="bg-emerald-600 text-white p-2.5 rounded-xl shrink-0">
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.336 4.993L2 22l5.132-1.347a9.96 9.96 0 004.878 1.277h.005c5.505 0 9.989-4.478 9.99-9.985A9.97 9.97 0 0012.012 2zm5.836 14.124c-.31.875-1.28 1.545-2.14 1.7-.58.1-1.34.19-3.9-1.01-3.26-1.53-5.36-4.83-5.52-5.05-.17-.22-1.31-1.74-1.31-3.32C4.981 6.86 5.86 6.08 6.18 5.75c.26-.27.57-.34.76-.34H8c.2 0 .42.06.6.5.21.52.74 1.8.8 1.92.06.12.1.27.02.43-.08.17-.18.27-.3.4l-.45.54c-.14.16-.29.34-.12.63a8.9 9.9 0 001.62 2c1.37 1.22 2.5 1.6 2.85 1.77.36.17.57.14.78-.1.21-.24.9-1.05 1.14-1.41.24-.36.48-.3.8-.18s2.04 1 2.4.1.42.18.5.34c.08.17.08.97-.22 1.84z"/>
                  </svg>
                </div>
                <div>
                  <a 
                    href="https://wa.me/8801750091995?text=Hello%20Brilliant%20Private%20Center,%20I'd%20like%20to%20inquire%20about%20admissions." 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block text-xl font-bold font-sans text-white hover:underline cursor-pointer"
                  >
                    01750091995
                  </a>
                  <span className="text-xs text-gray-400 block">তাৎক্ষণিক কন্টাক্ট এবং চ্যাট সমাধান</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Informative directories */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12 text-sm">
          {/* Column 1 - Brand info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-indigo-600 text-white p-1.5 rounded-lg">
                <GraduationCap className="h-5 w-5" />
              </div>
              <span className="font-extrabold text-white text-base tracking-tight font-sans">
                Brilliant Private Center
              </span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed font-sans mt-2">
              পড়াশোনার মান ও বোর্ড পরীক্ষায় জিপিএ-৫.০০ নিশ্চিতকরণের জন্য একটি নির্ভরতা ও বিশ্বস্ততার প্রতীক। আমরা শিক্ষার্থীদের প্রতিটি বিষয়ে গোড়া থেকে বেসিক তৈরি করতে বিশেষ অবদান রাখি।
            </p>
          </div>

          {/* Column 2 - Core Subjects */}
          <div className="space-y-4">
            <h4 className="font-bold text-white uppercase text-xs font-mono tracking-widest text-indigo-400">
              আমাদের একাডেমিক কোর্সসমূহ
            </h4>
            <ul className="space-y-2 text-xs text-gray-400 font-medium">
              <li>৬ষ্ঠ শ্রেণির সাধারণ ব্যাচ</li>
              <li>৭ম শ্রেণির সাধারণ ব্যাচ</li>
              <li>৮ম শ্রেণির সাধারণ ব্যাচ</li>
              <li>৯ম শ্রেণির পূর্ণাঙ্গ কোর্স</li>
              <li>১০ম শ্রেণির বোর্ড সমাপনী ব্যাচ</li>
              <li>এসএসসি (SSC) মডেল টেস্ট ব্যাচ</li>
            </ul>
          </div>

          {/* Column 3 - Student Guides */}
          <div className="space-y-4">
            <h4 className="font-bold text-white uppercase text-xs font-mono tracking-widest text-indigo-400">
              বিশেষ সুবিধাসমূহ
            </h4>
            <ul className="space-y-2 text-xs text-gray-400 font-medium">
              <li>সিলেবাস ট্র্যাকার ও স্টাডি রুটিন</li>
              <li>হোমওয়ার্ক সমাধান ও বিশেষ গাইডলাইন ডেস্ক</li>
              <li>অনলাইন ও অফলাইন সাপ্তাহিক পরীক্ষা</li>
              <li>সহজ ভাষায় তৈরি হ্যান্ডআউট ও লেকচার শিট</li>
              <li>ডিজিটাল SMS ও পারফর্মেন্স রিপোর্ট কার্ড</li>
            </ul>
          </div>

          {/* Column 4 - Address */}
          <div className="space-y-4">
            <h4 className="font-bold text-white uppercase text-xs font-mono tracking-widest text-indigo-400">
              প্রধান ক্যাম্পাস অব রতনপুর
            </h4>
            <div className="space-y-3 text-xs text-gray-400">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4.5 w-4.5 text-indigo-500 shrink-0 mt-0.5" />
                <address className="not-italic leading-relaxed">
                  রতনপুর, পাঁচবিবি, জয়পুরহাট
                </address>
              </div>
              <div className="pt-2">
                <span className="block text-gray-400">ইমেইল করুন: <a href="mailto:mh.mujahid7758@gmail.com" className="text-indigo-400 hover:underline">mh.mujahid7758@gmail.com</a></span>
              </div>
            </div>
          </div>

        </div>

        {/* Lower copyright bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <span>
            © {currentYear} Brilliant Private Center। সর্বস্বত্ব সংরক্ষিত। সকল পাঠ্য ও শিক্ষা উপকরণ কপিরাইট দ্বারা সুরক্ষিত।
          </span>
          <div className="flex items-center space-x-1">
            <span>বাংলাদেশে মেধা বিকাশ ও সফল আগামী গড়ার প্রত্যয়ে সদা নিয়োজিত।</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
