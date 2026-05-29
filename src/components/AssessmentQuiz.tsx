/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Sparkles, Trophy, RotateCcw, CheckCircle, XCircle, ArrowRight, BookOpen } from 'lucide-react';
import { QuizQuestion } from '../types';
import { quizData } from '../data/quiz';

export default function AssessmentQuiz() {
  const [activeCategory, setActiveCategory] = useState<string>('mathematics');
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [quizFinished, setQuizFinished] = useState<boolean>(false);

  const questions: QuizQuestion[] = quizData[activeCategory] || [];
  const currentQuestion = questions[currentIdx];

  const handleOptionClick = (optionIdx: number) => {
    if (isAnswered) return;
    setSelectedOption(optionIdx);
    setIsAnswered(true);
    
    if (optionIdx === currentQuestion.correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx + 1 < questions.length) {
      setCurrentIdx(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setQuizFinished(true);
    }
  };

  const handleReset = (category?: string) => {
    if (category) {
      setActiveCategory(category);
    }
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setQuizFinished(false);
  };

  const categoryLabels: Record<string, string> = {
    mathematics: '📐 Mathematics Challenge',
    english: '✍ English Grammar Proficiency',
    science: '🧪 General Science Essentials'
  };

  return (
    <section id="quiz" className="py-16 md:py-24 bg-gray-50/50 border-b border-gray-100 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-sm font-bold tracking-widest text-indigo-600 uppercase font-mono block mb-2">
            ✍ ACADEMIC TESTING
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Try a Live Mini-Assessment Challenge
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-500">
            Practice our high-school curriculum evaluation. Choose a subject pathway below to test your conceptual skills in real-time.
          </p>
        </div>

        {/* Categories Tab Selectors */}
        <div className="flex flex-wrap gap-2 justify-center mb-10 max-w-2xl mx-auto">
          {Object.keys(quizData).map((cat) => (
            <button
              key={cat}
              id={`quiz-cat-tab-${cat}`}
              onClick={() => handleReset(cat)}
              className={`p-3 sm:px-5 sm:py-3.5 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-100'
                  : 'bg-white hover:bg-gray-50 text-gray-700 border-gray-250'
              }`}
            >
              {categoryLabels[cat]}
            </button>
          ))}
        </div>

        {/* Active Quiz Card Board */}
        <div className="max-w-3xl mx-auto bg-white border border-gray-100 rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-36 h-36 bg-indigo-50/60 rounded-full blur-2xl pointer-events-none" />

          {!quizFinished ? (
            <div id="quiz-question-board" className="space-y-6">
              
              {/* Question Header Status */}
              <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                <span className="text-xs font-mono font-bold tracking-wider text-teal-600 uppercase bg-teal-50 px-2.5 py-1 rounded">
                  {categoryLabels[activeCategory].split(' ')[1]}
                </span>
                <span id="quiz-progress-indicator" className="text-xs font-mono text-gray-400 font-bold">
                  QUESTION {currentIdx + 1} OF {questions.length}
                </span>
              </div>

              {/* Progress Bar inside quiz */}
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="bg-indigo-600 h-full transition-all duration-300"
                  style={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }}
                />
              </div>

              {/* Question Text prompt */}
              <h3 id="quiz-question-text" className="text-lg sm:text-xl font-bold font-sans text-gray-900 leading-snug">
                {currentQuestion.question}
              </h3>

              {/* Options lists */}
              <div className="grid grid-cols-1 gap-3 pt-2">
                {currentQuestion.options.map((option, optIdx) => {
                  
                  // Decide option color classes dynamically based on answer status
                  let optionStyle = 'border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50 text-gray-800';
                  
                  if (isAnswered) {
                    if (optIdx === currentQuestion.correctAnswer) {
                      // Correct option is always green highlighted
                      optionStyle = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-semibold';
                    } else if (selectedOption === optIdx) {
                      // Selected incorrect option is highlighted red
                      optionStyle = 'border-red-400 bg-red-50 text-red-900';
                    } else {
                      // Other incorrect options disabled/muted
                      optionStyle = 'border-gray-150 bg-gray-50/50 text-gray-400 cursor-not-allowed';
                    }
                  }

                  return (
                    <button
                      key={optIdx}
                      id={`quiz-option-${optIdx}`}
                      onClick={() => handleOptionClick(optIdx)}
                      disabled={isAnswered}
                      className={`w-full text-left p-4 rounded-xl border flex items-center justify-between transition-all text-xs sm:text-sm ${optionStyle} ${
                        !isAnswered ? 'cursor-pointer' : ''
                      }`}
                    >
                      <div className="flex items-center space-x-3 pr-4">
                        <span className="font-mono font-bold text-indigo-400 shrink-0 select-none">
                          {String.fromCharCode(65 + optIdx)}.
                        </span>
                        <span>{option}</span>
                      </div>
                      
                      {/* Interactive checkmark / cross indicators */}
                      {isAnswered && optIdx === currentQuestion.correctAnswer && (
                        <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0" />
                      )}
                      {isAnswered && selectedOption === optIdx && optIdx !== currentQuestion.correctAnswer && (
                        <XCircle className="h-5 w-5 text-red-500 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Explanation block */}
              {isAnswered && (
                <div id="quiz-explanation-box" className="p-5 bg-indigo-50/40 rounded-2xl border border-indigo-100 mt-6 animate-fade-in text-left">
                  <div className="flex items-center space-x-2 text-indigo-800 font-bold mb-1.5 text-xs sm:text-sm">
                    <BookOpen className="h-4.5 w-4.5" />
                    <span>Academic Concept Breakdown</span>
                  </div>
                  <p id="quiz-explanation-text" className="text-gray-700 text-xs sm:text-sm leading-relaxed font-sans">
                    {currentQuestion.explanation}
                  </p>
                </div>
              )}

              {/* Action controller footer inside quiz */}
              {isAnswered && (
                <div className="flex justify-end pt-4 border-t border-gray-100">
                  <button
                    id="quiz-next-btn"
                    onClick={handleNext}
                    className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-bold text-xs sm:text-sm shadow-md cursor-pointer transition-all"
                  >
                    <span>
                      {currentIdx + 1 === questions.length ? 'Evaluate Result' : 'Next Question'}
                    </span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              )}

            </div>
          ) : (
            
            // Score feedback state representing excellence
            <div id="quiz-scorecard" className="text-center py-6 space-y-6">
              <div className="inline-flex p-4 bg-amber-50 text-amber-500 rounded-full border border-amber-100 mb-2">
                <Trophy className="h-12 w-12 animate-pulse" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold tracking-widest text-indigo-600 uppercase font-mono block">
                  CONGRATULATIONS ON COMPLETING
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                  Your Assessment Score Card
                </h3>
              </div>

              {/* Giant Scoring Circle */}
              <div className="inline-flex flex-col justify-center items-center h-32 w-32 bg-indigo-50 border-4 border-indigo-500 rounded-full select-none">
                <span id="quiz-final-score" className="text-4xl font-extrabold text-indigo-700 font-mono">
                  {score}/{questions.length}
                </span>
                <span className="text-[10px] text-indigo-500 font-bold font-mono tracking-wide mt-1 uppercase">
                  CORRECT
                </span>
              </div>

              {/* Score Feedback Label */}
              <div className="max-w-md mx-auto bg-gray-50 border border-gray-150 p-4 rounded-xl">
                <p id="quiz-verdict" className="text-gray-700 font-sans text-xs sm:text-sm leading-relaxed">
                  {score === questions.length ? (
                    <strong>✨ Absolute Distinction! Excellence is in your DNA. Keep up the brilliant streak!</strong>
                  ) : score >= 2 ? (
                    <strong>👍 Good Academic Base! With simple discipline and structured guidance, you can secure board-level GPA 5.00 easily.</strong>
                  ) : (
                    <strong>📖 Growth Opportunity! Our special care system dedicates attention specifically to building up core understanding in these modules.</strong>
                  )}
                </p>
              </div>

              {/* Footnote call to action */}
              <div className="bg-indigo-950 text-indigo-50 p-5 rounded-2xl border border-indigo-800 text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-left space-y-1">
                  <span className="block text-teal-300 font-mono text-[10px] uppercase font-bold tracking-widest">
                    Want regular exams evaluation?
                  </span>
                  <p className="text-xs text-indigo-200">
                    We host physical weekly exams & board-mock series with immediate feedback guides to build final prep.
                  </p>
                </div>
                <a
                  href="#contact"
                  id="quiz-cta-contact"
                  onClick={() => {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-teal-500 hover:bg-teal-600 text-white text-xs font-bold font-mono px-4 py-2.5 rounded-xl shadow-md uppercase transition-all tracking-wider text-center shrink-0 cursor-pointer"
                >
                  Join Brilliant Today
                </a>
              </div>

              {/* Action buttons inside scorecard */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                <button
                  id="quiz-retry-btn"
                  onClick={() => handleReset()}
                  className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm cursor-pointer transition-all"
                >
                  <RotateCcw className="h-4 w-4 text-gray-500" />
                  <span>Try Again</span>
                </button>

                <div className="flex items-center text-xs text-gray-400 font-medium">
                  <span>Or switch subject above</span>
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
