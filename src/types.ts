/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Course {
  id: string;
  name: string;
  level: string;
  targetAudience: string;
  schedule: string;
  timeSlot: string;
  weeklyTests: string;
  monthlyFee: number;
  description: string;
  highlights: string[];
}

export interface StudentProgress {
  rollNo: string;
  name: string;
  className: string;
  attendanceRate: number;
  homeworkRate: number;
  gpa: number;
  recentExam: string;
  score: string;
  feedback: string;
  scoresHistory: {
    examName: string;
    mathScore: number;
    englishScore: number;
    scienceScore: number;
  }[];
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Inquiry {
  id: string;
  studentName: string;
  parentName: string;
  phone: string;
  programId: string;
  submittedAt: string;
  status: 'Received' | 'Consulting Assigned' | 'Follow Up Scheduled';
  notes: string;
}
