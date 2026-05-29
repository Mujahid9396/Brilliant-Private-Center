/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CheckCircle2, HeartHandshake, Eye, ShieldCheck, Star } from 'lucide-react';

export default function About() {
  const beliefs = [
    {
      title: 'প্রত্যেক শিক্ষার্থীর সুপ্ত প্রতিভা',
      desc: 'ভর্তির সময় আমরা কোনো শিক্ষার্থীর পূর্বের ফলাফল দিয়ে তাকে বিচার করি না। আমরা বিশ্বাস করি সঠিক দিকনির্দেশনা ও যত্নে প্রতিটি শিক্ষার্থীই অসাধারণ ফলাফল করতে সক্ষম।',
      icon: Eye,
      color: 'text-indigo-600 bg-indigo-50 border-indigo-100',
    },
    {
      title: 'সঠিক গাইডলাইনই সাফল্যের চাবিকাঠি',
      desc: 'শেখার উপাদান এখন সবখানেই পাওয়া যায়, কিন্তু সঠিক গাইডলাইন পাওয়া বেশ কঠিন। আমাদের শিক্ষকগণ প্রতিটি শিক্ষার্থীকে পরীক্ষার জন্য গোছানো প্রস্তুতি নিতে সাহায্য করেন।',
      icon: ShieldCheck,
      color: 'text-teal-600 bg-teal-50 border-teal-100',
    },
    {
      title: 'অধ্যবসায় ও নিয়মানুবর্তিতা',
      desc: 'নিয়মিত অনুশীলন মেধার চেয়েও বেশি কার্যকরী। আমাদের নিয়মিত হোমওয়ার্ক টাস্ক এবং সাপ্তাহিক মূল্যায়ন পরীক্ষা শিক্ষার্থীদের জড়তা দূর করে আত্মবিশ্বাস বাড়ায়।',
      icon: Star,
      color: 'text-amber-600 bg-amber-50 border-amber-100',
    }
  ];

  const teachingSystems = [
    'অভিজ্ঞ ও দক্ষ শিক্ষক মণ্ডলী',
    'সহজ ও বোধগম্য আধুনিক পাঠদান পদ্ধতি',
    'সাপ্তাহিক পরীক্ষা ও পারফরম্যান্স মূল্যায়ন',
    'পিছিয়ে পড়া শিক্ষার্থীদের জন্য বিশেষ যত্ন',
    'পরীক্ষা-কেন্দ্রিক বিশেষ প্রস্তুতি গাইড'
  ];

  const whyChooseUs = [
    {
      title: 'স্বল্প খরচে মানসম্মত শিক্ষা',
      desc: 'উন্নত ও মানসম্পন্ন লেকচার শীট এবং নোট প্রদান করা হয় যাতে করে কোনো শিক্ষার্থীই অর্থিক কারণে প্রস্তুতি থেকে পিছিয়ে না পড়ে।',
      stat: 'সাশ্রয়ী কোর্স ফি'
    },
    {
      title: 'চমৎকার শিক্ষার পরিবেশ',
      desc: 'প্রশস্ত এবং চমৎকারভাবে আলো-বাতাসপূর্ণ শ্রেণীকক্ষ, যেখানে শিক্ষার্থীরা যেকোনো দ্বিধা ছাড়াই সরাসরি প্রশ্ন করতে পারে।',
      stat: 'নিরাপদ ও বন্ধুত্বপূর্ণ'
    },
    {
      title: 'পরীক্ষা-ভিত্তিক চূড়ান্ত প্রস্তুতি',
      desc: 'বোর্ড প্রশ্ন সমাধান, সৃজনশীল প্রশ্নের উন্নত কাঠামো ও উত্তর লেখার নৈপুণ্য এবং নিয়মিত OMR উত্তরপত্রে পরীক্ষা নেওয়ার সেশন।',
      stat: '৯৮% পাসের হার'
    },
    {
      title: 'প্রতিটি শিক্ষার্থীর জন্য ব্যক্তিগত তদারকি',
      desc: 'সীমিত আসন সংখ্যা নিশ্চিত করে যে আমরা প্রতিটি শিক্ষার্থীর ব্যক্তিগত দুর্বলতা চিহ্নিত করতে পারি এবং তা সমাধান করি।',
      stat: 'ব্যক্তিগত তদারকি'
    },
    {
      title: 'সাফল্য-মুখী সুদৃঢ় শিক্ষা ব্যবস্থা',
      desc: 'পরিকল্পিত পড়ার রুটিন ও নিয়মিত নজরদারির মাধ্যমে শিক্ষার্থীদের একাডেমিক পারফরম্যান্স সপ্তাহের পর সপ্তাহ উন্নত করা হয়।',
      stat: 'জিপিএ-৫ পাওয়ার লক্ষ্য'
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Vision Row */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold tracking-widest text-indigo-600 uppercase font-mono block mb-2">
            📖 আমরা কে
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            মেধা বিকাশ ও অনন্যতা অর্জনের আস্থার প্রতীক
          </h2>
          <p id="about-intro-text" className="mt-4 text-lg text-gray-600 leading-relaxed text-justify">
            <strong>Brilliant Private Center</strong> প্রতিটি বিষয়ের বুনিয়াদ শক্ত করার পাশাপাশি শিক্ষার্থীদের মেধা ও দক্ষতা বাড়াতে প্রতিশ্রুতিবদ্ধ। আমাদের পরম লক্ষ্য হলো শিক্ষার্থীদের একাডেমিক বুনিয়াদ দৃঢ় ও শক্তিশালী করা এবং বোর্ড পরীক্ষা ও ভর্তি পরীক্ষার চ্যালেঞ্জ মোকাবেলায় তাদের সম্পূর্ণ প্রস্তুত করা।
          </p>
        </div>

        {/* Beliefs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {beliefs.map((belief, idx) => {
            const Icon = belief.icon;
            return (
              <div
                key={idx}
                id={`belief-card-${idx}`}
                className="bg-gray-50/50 hover:bg-white border border-gray-100 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:border-gray-200 text-left flex flex-col justify-between"
              >
                <div>
                  <div className={`p-3 rounded-xl inline-block border ${belief.color} mb-5`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{belief.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed text-justify">{belief.desc}</p>
                </div>
                <div className="mt-6 flex items-center text-xs font-mono font-bold text-indigo-600">
                  <span>আমাদের অঙ্গীকার</span>
                  <div className="h-px bg-indigo-100 flex-1 ml-3" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Teaching System Section with interactive check row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-gradient-to-r from-gray-50 to-indigo-50/30 rounded-3xl p-8 sm:p-12 border border-gray-100 mb-20">
          <div className="lg:col-span-5 text-left space-y-6">
            <span className="text-xs font-bold tracking-wider text-teal-600 uppercase font-mono bg-teal-50 px-3 py-1 rounded">
              👨‍🏫 পাঠদান পদ্ধতি
            </span>
            <h3 className="text-3xl font-bold text-gray-900 leading-tight">
              আমাদের পরীক্ষিত শিক্ষাদান পদ্ধতি
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base text-justify">
              <strong>Brilliant Private Center</strong>-এ আমরা বিশ্বাস করি পাঠদান হলো একটি বিজ্ঞান। আমাদের মাল্টিমিডিয়া ও আধুনিক ক্লাসরুম সেশন চমৎকার পাঠদানের মাধ্যমে জটিল টপিকগুলো সহজ করে তোলে।
            </p>
            <div className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-sm inline-flex border border-gray-150">
              <HeartHandshake className="h-6 w-6 text-indigo-600 shrink-0" />
              <div className="text-left text-xs">
                <span className="block font-bold text-gray-900">সাপ্তাহিক প্রোগ্রেস প্রফাইল</span>
                <span className="text-gray-500">নিয়মিত অভিভাবকদের সাথে শেয়ার করা হয়</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {teachingSystems.map((sys, idx) => (
              <div
                key={idx}
                id={`teaching-sys-item-${idx}`}
                className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex items-start space-x-3 text-left hover:-translate-y-0.5 transition-transform"
              >
                <CheckCircle2 className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{sys}</h4>
                  <p className="text-xs text-gray-500 mt-1 leading-snug">
                    এই নিয়মগুলো যথাযথভাবে অনুসরণের মাধ্যমে শিক্ষার্থীরা অল্প সময়ে নিজেদের ভালো ফলাফল নিশ্চিত করতে পারে।
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="border-t border-gray-100 pt-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-sm font-bold tracking-widest text-indigo-600 uppercase font-mono block mb-2">
              🏆 ভর্তির সুবর্ণ সুযোগসমূহ
            </span>
            <h3 className="text-3xl font-extrabold text-gray-900">
              কেন আপনি আমাদের বেছে নিবেন?
            </h3>
            <p className="text-gray-500 mt-2 text-justify">
              জানুন কেন আমাদের প্রাইভেট কেয়ার শিক্ষার্থীদের শিক্ষাদানে সবার চেয়ে এগিয়ে এবং সেরা ফলাফলের স্তম্ভ।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {whyChooseUs.map((item, idx) => (
              <div
                key={idx}
                id={`why-card-${idx}`}
                className="bg-white border hover:bg-indigo-900 hover:text-white transition-all duration-300 border-gray-100 hover:border-indigo-950 rounded-2xl p-6 shadow-sm hover:shadow-xl text-left flex flex-col justify-between group"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-indigo-600 group-hover:text-teal-400">
                    {item.stat}
                  </span>
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-white mt-3 mb-2 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 group-hover:text-indigo-100 text-xs leading-relaxed text-justify">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-6 flex justify-end">
                  <span className="text-3xl font-extrabold text-gray-200 group-hover:text-indigo-800 font-sans transition-colors">
                    0{idx + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
