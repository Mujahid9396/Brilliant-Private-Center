/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { QuizQuestion } from '../types';

export const quizData: Record<string, QuizQuestion[]> = {
  mathematics: [
    {
      id: 1,
      question: 'Which of the following values satisfies the quadratic equation: x² - 5x + 6 = 0?',
      options: ['x = 1 or x = 6', 'x = 2 or x = 3', 'x = -2 or x = -3', 'x = 0 or x = 5'],
      correctAnswer: 1,
      explanation: 'Since the equation can be factored as (x - 2)(x - 3) = 0, the roots of the equation are indeed x = 2 and x = 3. Substituting either into x² - 5x + 6 returns zero.'
    },
    {
      id: 2,
      question: 'The ratio of the angles of a triangle is 1:2:3. What is the measure of the largest angle in degrees?',
      options: ['60°', '75°', '90°', '120°'],
      correctAnswer: 2,
      explanation: 'Let the angles be x, 2x, and 3x. Since the sum of angles is 180°, x + 2x + 3x = 180° -> 6x = 180° -> x = 30°. The largest angle is 3x = 3 * 30° = 90°.'
    },
    {
      id: 3,
      question: 'Find the value of log₂(32) + log₃(27).',
      options: ['5', '8', '15', '2'],
      correctAnswer: 1,
      explanation: 'Since 32 = 2⁵, log₂(2⁵) = 5. Since 27 = 3³, log₃(3³) = 3. Therefore, log₂(32) + log₃(27) = 5 + 3 = 8.'
    }
  ],
  english: [
    {
      id: 1,
      question: 'Identify the correct sentence structure for expressing a condition in the past that did not happen:',
      options: [
        'If I would have studied, I would pass the test.',
        'If I had studied, I would have passed the test.',
        'If I studied, I would have passed the test.',
        'Had I studied, I will pass the test.'
      ],
      correctAnswer: 1,
      explanation: 'This is the Third Conditional, which is used to express past unreal situations. The format is: If + past perfect, would + have + past participle.'
    },
    {
      id: 2,
      question: 'Choose the correct synonym for the word "EXCELLENCE":',
      options: ['Mediocrity', 'Distinction', 'Peculiarity', 'Diligence'],
      correctAnswer: 1,
      explanation: 'Excellent, quality performance represents distinction and top-tier achievement. Mediocrity is the opposite, peculiarity means uniqueness/oddness, and diligence refers to hard work.'
    },
    {
      id: 3,
      question: 'Fill in the blank: "Neither the teacher nor the students ______ present in the seminar yesterday."',
      options: ['was', 'were', 'is', 'are'],
      correctAnswer: 1,
      explanation: 'According to the rule of proximity, when subject parts are joined by "neither... nor", the verb agrees with the closer subject ("the students", which is plural). Since the tense is past, "were" is correct.'
    }
  ],
  science: [
    {
      id: 1,
      question: 'If the net force acting on a moving object is doubled, what happens to its acceleration according to Newton’s Second Law?',
      options: [
        'It is cut in half.',
        'It remains the same.',
        'It doubles.',
        'It increases fourfold.'
      ],
      correctAnswer: 2,
      explanation: "According to Newton's Second Law, F = ma, which means acceleration (a) is directly proportional to force (F). If force is doubled while mass is constant, acceleration also doubles."
    },
    {
      id: 2,
      question: 'What is the physical state of water at standard atmospheric pressure when cooled to exactly -5°C?',
      options: ['Gas', 'Liquid', 'Solid', 'Amorphous plasma'],
      correctAnswer: 2,
      explanation: 'The freezing point of water is 0°C under standard atmospheric pressure. At -5°C, water is completely crystallized into solid state (ice).'
    },
    {
      id: 3,
      question: 'Which of the following organelles is known as the "Powerhouse" of a vegetable or animal cell?',
      options: ['Nucleus', 'Mitochondria', 'Chloroplast', 'Ribosome'],
      correctAnswer: 1,
      explanation: 'Mitochondria generate most of the chemical energy needed to power the cell’s biochemical reactions, stored in adenosine triphosphate (ATP).'
    }
  ]
};
