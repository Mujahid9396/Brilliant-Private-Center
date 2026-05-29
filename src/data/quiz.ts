/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { QuizQuestion } from '../types';

export const quizData: Record<string, QuizQuestion[]> = {
  mathematics: [
    {
      id: 1,
      question: 'নিচের কোন মানটি x² - 5x + 6 = 0 দ্বিঘাত সমীকরণটিকে সিদ্ধ করে?',
      options: ['x = 1 অথবা x = 6', 'x = 2 অথবা x = 3', 'x = -2 অথবা x = -3', 'x = 0 অথবা x = 5'],
      correctAnswer: 1,
      explanation: 'যেহেতু সমীকরণটিকে উৎপাদকে বিশ্লেষণ করলে পাওয়া যায় (x - 2)(x - 3) = 0, তাই সমীকরণের মূলদ্বয় হলো x = 2 এবং x = 3। যেকোনো একটি মান সমীকরণের বামপক্ষে বসালে ডানপক্ষ শূন্য পাওয়া যায়।'
    },
    {
      id: 2,
      question: 'একটি ত্রিভুজের তিনটি কোণের অনুপাত ১:২:৩ হলে, এর বৃহত্তম কোণটির মান কত ডিগ্রি?',
      options: ['৬০°', '৭৫°', '৯০°', '১২০°'],
      correctAnswer: 2,
      explanation: 'ধরি কোণগুলো হল x, 2x এবং 3x। যেহেতু ত্রিভুজের তিন কোণের সমষ্টি ১৮০°, তাই x + 2x + 3x = ১৮০° -> 6x = ১৮০° -> x = ৩০°। বৃহত্তম কোণটি হলো 3x = ৩ * ৩০° = ৯০°।'
    },
    {
      id: 3,
      question: 'log₂(32) + log₃(27) এর মান কত?',
      options: ['৫', '৮', '১৫', '২'],
      correctAnswer: 1,
      explanation: 'যেহেতু ৩২ = ২⁵, তাই log₂(২⁵) = ৫। আবার ২৭ = ৩³, তাই log₃(৩³) = ৩। অতএব, log₂(32) + log₃(27) = ৫ + ৩ = ৮।'
    }
  ],
  english: [
    {
      id: 1,
      question: 'অতীতের কোনো অসমাপ্ত বা অবাস্তব শর্ত বা ইচ্ছা প্রকাশের জন্য সঠিক বাক্য গঠন কোনটি?',
      options: [
        'If I would have studied, I would pass the test.',
        'If I had studied, I would have passed the test.',
        'If I studied, I would have passed the test.',
        'Had I studied, I will pass the test.'
      ],
      correctAnswer: 1,
      explanation: 'এটি থার্ড কন্ডিশনাল (Third Conditional) বাক্য, যা অতীতে কোনো কিছু ঘটলে কী হতে পারত তা প্রকাশ করে। এর গঠন হলো: If + past perfect, would + have + past participle।'
    },
    {
      id: 2,
      question: '"EXCELLENCE" শব্দটির সঠিক প্রতিশব্দ কোনটি?',
      options: ['Mediocrity', 'Distinction', 'Peculiarity', 'Diligence'],
      correctAnswer: 1,
      explanation: 'EXCELLENCE অর্থ চমৎকার উৎকর্ষ বা শ্রেষ্ঠত্ব, যা "Distinction" (विशेष কৃতিত্ব বা অনন্য যোগ্যতা) কে নির্দেশ করে। Mediocrity অর্থ সাধারণ মানের বা গড়পরতা।'
    },
    {
      id: 3,
      question: 'শূন্যস্থানটি পূরণ করুন: "Neither the teacher nor the students ______ present in the seminar yesterday."',
      options: ['was', 'were', 'is', 'are'],
      correctAnswer: 1,
      explanation: 'নিয়ম অনুযায়ী, যখন "neither... nor" দিয়ে কোনো সাবজেক্ট যুক্ত থাকে, তখন পরবর্তী নিকটবর্তী সাবজেক্ট অনুযায়ী ভার্ব সিলেক্ট করতে হয়। এখানে নিকটবর্তী সাবজেক্ট "students" (প্লুরাল)। যেহেতু গতকালের কথা বলা হয়েছে, তাই সঠিক উত্তর "were"।'
    }
  ],
  science: [
    {
      id: 1,
      question: 'নিউটনের দ্বিতীয় সূত্র অনুযায়ী, যদি কোনো গতিশীল বস্তুর ওপর প্রযুক্ত বল দ্বিগুণ করা হয়, তবে তার ত্বরণ কেমন হবে?',
      options: [
        'অর্ধেক হয়ে যাবে।',
        'একই থাকবে।',
        'দ্বিগুণ হবে।',
        'চার গুণ বৃদ্ধি পাবে।'
      ],
      correctAnswer: 2,
      explanation: "নিউটনের দ্বিতীয় সূত্র (F = ma) অনুযায়ী, ত্বরণ (a) প্রযুক্ত বলের (F) সমানুপাতিক। ভর অপরিবর্তিত থাকলে বল দ্বিগুণ করলে ত্বরণও দ্বিগুণ হবে।"
    },
    {
      id: 2,
      question: 'স্বাভাবিক বায়ুমণ্ডলীয় চাপে পানিকে ঠিক -৫° সেলসিয়াসে ঠান্ডা করলে জলীয় অবস্থা কেমন হবে?',
      options: ['গ্যাসীয়', 'তরল', 'কঠিন (বরফ)', 'প্লাজমা'],
      correctAnswer: 2,
      explanation: 'স্বাভাবিক চাপে পানির হিমাঙ্ক হলো ০° সেলসিয়াস। ০° সেলসিয়াসের নিচে (-৫° সেলসিয়াসে) তরল পানি সম্পূর্ণরূপে কঠিন বরফে রূপান্তরিত হয়।'
    },
    {
      id: 3,
      question: 'উদ্ভিদ বা প্রাণী কোষের শক্তিঘর (Powerhouse) বলা হয় নিচের কোন অঙ্গাণুটিকে?',
      options: ['নিউক্লিয়াস', 'মাইটোকন্ড্রিয়া', 'ক্লোরোপ্লাস্ট', 'রাইবোসোম'],
      correctAnswer: 1,
      explanation: 'মাইটোকন্ড্রিয়া কোষের সকল জৈব রাসায়নিক বিক্রিয়ার জন্য আকর্ষণীয় ও প্রয়োজনীয় শক্তি উৎপাদন করে যা এডেনোসিন ট্রাইফসফেট (ATP) আকারে জমা থাকে।'
    }
  ]
};
