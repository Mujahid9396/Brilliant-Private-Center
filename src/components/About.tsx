/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CheckCircle2, HeartHandshake, Eye, ShieldCheck, Star } from 'lucide-react';

export default function About() {
  const beliefs = [
    {
      title: 'Every student has potential',
      desc: 'We do not distinguish based on entry scores. We believe with customized pacing, every mind can achieve high distinction.',
      icon: Eye,
      color: 'text-indigo-600 bg-indigo-50 border-indigo-100',
    },
    {
      title: 'Proper guidance leads to success',
      desc: 'Information is everywhere, but direction is rare. Our teachers provide the precise navigation map to board excellence.',
      icon: ShieldCheck,
      color: 'text-teal-600 bg-teal-50 border-teal-100',
    },
    {
      title: 'Practice & discipline are the keys',
      desc: 'Consistency beats raw talent. Our homework drills and weekly examinations construct rigid academic muscle memory.',
      icon: Star,
      color: 'text-amber-600 bg-amber-50 border-amber-100',
    }
  ];

  const teachingSystems = [
    'Experienced and qualified teachers',
    'Easy and understandable teaching method',
    'Weekly tests and performance evaluation',
    'Special care for weak students',
    'Exam-focused preparation system'
  ];

  const whyChooseUs = [
    {
      title: 'Quality education at affordable cost',
      desc: 'High standard teaching modules designed competitively so that financial limits do not constrain your growth.',
      stat: 'Affordable Pricing'
    },
    {
      title: 'Friendly learning environment',
      desc: 'Spacious, well-ventilated, and respectful classrooms where students feel relaxed asking doubts anytime.',
      stat: 'Safe & Peer-Led'
    },
    {
      title: 'Exam-oriented preparation',
      desc: 'Solving board papers, creative question (CQ) formats, continuous OMR exam practices, and timing hacks.',
      stat: '98% Pass Success'
    },
    {
      title: 'Personal care for every student',
      desc: 'Small student-teacher ratios ensure we observe individual weaknesses and address them specifically.',
      stat: 'Individual Attention'
    },
    {
      title: 'Strong result-oriented system',
      desc: 'Structured routines and robust monitoring keep student performance rising week over week.',
      stat: 'GPA 5.0 Aim'
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Vision Row */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold tracking-widest text-indigo-600 uppercase font-mono block mb-2">
            📖 WHO WE ARE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Nurturing Minds, Building Excellence
          </h2>
          <p id="about-intro-text" className="mt-4 text-lg text-gray-600 leading-relaxed text-justify">
            Brilliant Private Center is dedicated to providing high-quality education for students of different classes and levels. 
            Our absolute goal is to build a strong academic foundation and help students improve their skills in every subject, 
            equipping them for board examinations and competitive gateways.
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
                  <span>OUR CONVICTION</span>
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
              👨‍🏫 PEDAGOGY MODEL
            </span>
            <h3 className="text-3xl font-bold text-gray-900 leading-tight">
              Our Proved Teaching System
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base text-justify">
              At Brilliant Private Center, we believe instruction is a science. Our classrooms combine modern, easy-to-understand demonstrations with rigid metrics monitoring, turning stress into clarity.
            </p>
            <div className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-sm inline-flex border border-gray-150">
              <HeartHandshake className="h-6 w-6 text-indigo-600 shrink-0" />
              <div className="text-left text-xs">
                <span className="block font-bold text-gray-900">Weekly Progress Report card</span>
                <span className="text-gray-500">Shared directly with guardians</span>
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
                    Strict adherence to this standard ensures weak students secure board confidence inside weeks.
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
              🏆 ADMISSION BENEFITS
            </span>
            <h3 className="text-3xl font-extrabold text-gray-900">
              Why Choose Us?
            </h3>
            <p className="text-gray-500 mt-2 text-justify">
              Discover the pillars that convert classroom coaching into an academic incubator of toppers.
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
