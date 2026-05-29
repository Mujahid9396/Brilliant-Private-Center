/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { StudentProgress } from '../types';

export const studentsData: StudentProgress[] = [
  {
    rollNo: '2026101',
    name: 'Abrar Chowdhury',
    className: 'Class 10 (SSC Campaign)',
    attendanceRate: 98,
    homeworkRate: 94,
    gpa: 4.92,
    recentExam: 'Model pre-test #3',
    score: 'A+ (92 / 100)',
    feedback: 'Excellent dedication! Abrar is highly consistent, particularly in Mathematics. Needs to focus slightly more on quick spelling in English creative writing to avoid minor mark deductions.',
    scoresHistory: [
      { examName: 'Week 1', mathScore: 85, englishScore: 88, scienceScore: 82 },
      { examName: 'Week 2', mathScore: 92, englishScore: 90, scienceScore: 89 },
      { examName: 'Week 3', mathScore: 95, englishScore: 92, scienceScore: 91 },
      { examName: 'Week 4', mathScore: 98, englishScore: 91, scienceScore: 94 }
    ]
  },
  {
    rollNo: '2026102',
    name: 'Sadia Jahan Islam',
    className: 'Class 10 (SSC Campaign)',
    attendanceRate: 94,
    homeworkRate: 100,
    gpa: 4.88,
    recentExam: 'Chemistry Term Test',
    score: 'A (86 / 100)',
    feedback: 'Amazing neatness in her homework scripts. Sadia has mastered chemical equation balancing. She is encouraged to participate more actively in classroom discussions and speed math drills.',
    scoresHistory: [
      { examName: 'Week 1', mathScore: 78, englishScore: 85, scienceScore: 82 },
      { examName: 'Week 2', mathScore: 80, englishScore: 87, scienceScore: 85 },
      { examName: 'Week 3', mathScore: 84, englishScore: 89, scienceScore: 88 },
      { examName: 'Week 4', mathScore: 85, englishScore: 92, scienceScore: 90 }
    ]
  },
  {
    rollNo: '2026093',
    name: 'Zayan Rezwan',
    className: 'Class 9',
    attendanceRate: 88,
    homeworkRate: 75,
    gpa: 4.15,
    recentExam: 'General Science Quiz',
    score: 'B (72 / 100)',
    feedback: 'Zayan is quick at logical understanding but sometimes rushes his assignments and misses homework deadlines. With slightly more discipline in daily practice, his scores will easily rise to A+.',
    scoresHistory: [
      { examName: 'Week 1', mathScore: 65, englishScore: 78, scienceScore: 70 },
      { examName: 'Week 2', mathScore: 70, englishScore: 76, scienceScore: 72 },
      { examName: 'Week 3', mathScore: 71, englishScore: 80, scienceScore: 75 },
      { examName: 'Week 4', mathScore: 75, englishScore: 82, scienceScore: 78 }
    ]
  },
  {
    rollNo: '2026084',
    name: 'Taskeen Ahmed',
    className: 'Class 8 (Junior Academy)',
    attendanceRate: 96,
    homeworkRate: 92,
    gpa: 4.75,
    recentExam: 'Math Board-Pattern Test',
    score: 'A+ (89 / 100)',
    feedback: 'Taskeen is demonstrating incredible progress in English literature and composition. His algebraic skills are steadily improving under our specialized care program.',
    scoresHistory: [
      { examName: 'Week 1', mathScore: 72, englishScore: 80, scienceScore: 76 },
      { examName: 'Week 2', mathScore: 78, englishScore: 84, scienceScore: 80 },
      { examName: 'Week 3', mathScore: 82, englishScore: 88, scienceScore: 84 },
      { examName: 'Week 4', mathScore: 86, englishScore: 90, scienceScore: 88 }
    ]
  }
];
