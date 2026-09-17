import React, { useState } from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Award, 
  ChevronRight, 
  Sparkles, 
  Check, 
  HelpCircle,
  Clock,
  BookOpen
} from 'lucide-react';

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  tag: string;
}

const QUIZ_QUESTIONS: Question[] = [
  {
    id: 1,
    question: 'When preparing for lessons during Weeks 1 & 2, which equipment must you hands-on test?',
    options: [
      'Only the Lego Spike Prime and large programmable smart robots.',
      'Every single robot, sensor, motor, and tactile STEM toy—even in lessons without a robot.',
      'Only tools that you personally feel unfamiliar with after reading the guide.',
      'None; reading the teacher curriculum PDFs carefully is sufficient.',
    ],
    correctIndex: 1,
    explanation: 'Golden Rule! Trainees must personally build and test ALL kits—including balance beams, gears, optics, and snap circuits—even when a lesson has no robot.',
    tag: 'Hands-On Tool Mastery',
  },
  {
    id: 2,
    question: 'What is the required training pacing during Weeks 1 & 2?',
    options: [
      '1 Term completed every 2 weeks.',
      '1 Week = 2 Terms (Week 1 covers Terms 1 & 2; Week 2 covers Terms 3 & 4).',
      'No set pace; take as much time as you need without deadlines.',
      'Only 1 single lesson module per week.',
    ],
    correctIndex: 1,
    explanation: 'Pacing is 1 Week = 2 Terms covered. This focused immersion ensures you achieve full hands-on comfort across both tracks early on.',
    tag: 'Pacing & Roadmap',
  },
  {
    id: 3,
    question: 'What is the core rule of "The Lab Way" when a student gets stuck during a build or code?',
    options: [
      'Grab the mouse or bricks and quickly build it for them to save class time.',
      'Tell the student to copy their classmate’s code block.',
      'Use Socratic questioning: guide them with questions so they discover the solution themselves.',
      'Skip the challenge and give them free coins to keep them happy.',
    ],
    correctIndex: 2,
    explanation: 'Never build for the child! Socratic guidance sparks their own "Aha!" moment, building real problem-solving autonomy, resilience, and pride.',
    tag: 'The Lab Pedagogy',
  },
  {
    id: 4,
    question: 'How do you verify and document your completed hands-on tool challenges?',
    options: [
      'Mention it verbally to your buddy instructor at the end of the shift.',
      'Record short video clips of your build > Upload to Google Drive > Paste link into Instructor Task Submission sheet.',
      'Keep the video clips saved on your personal smartphone gallery.',
      'Take a single photo of the box packaging and send on WhatsApp.',
    ],
    correctIndex: 1,
    explanation: 'Proof of mastery! Every tool build must be video-recorded, stored in your Drive folder, and logged into the official Instructor Task Submission sheet.',
    tag: 'Verification SOP',
  },
  {
    id: 5,
    question: 'Who are your key branch partners and what are their primary roles?',
    options: [
      'Only the building property management team.',
      'SPA (Student Progress Advisory) for videos & reports, and EC (Education Consultant) for trial classes & parent interactions.',
      'Instructors operate completely independently without branch staff support.',
      'Outside technical IT hardware support vendors only.',
    ],
    correctIndex: 1,
    explanation: 'High synergy! Close collaboration with SPA and EC guarantees high student retention, glowing parent feedback, and thriving trial classes.',
    tag: 'Branch Collaboration',
  },
  {
    id: 6,
    question: 'During Week 3 Assisted Teaching, when must your Senior Mentor complete your Observation Feedback Form?',
    options: [
      'At the end of the 3-month probation period.',
      'On the exact same day the class is conducted for immediate, zero-latency coaching.',
      'Whenever the mentor finds free time over the weekend.',
      'Only if the class had a student behavioral incident.',
    ],
    correctIndex: 1,
    explanation: 'Zero-latency feedback! Senior mentors submit the Observation Feedback Form on the same day so insights are fresh and immediately actionable.',
    tag: 'Assisted Teaching SOP',
  },
  {
    id: 7,
    question: 'What is the strict standard for Week 4 Student Presentation Videos (L9/L10)?',
    options: [
      'Have the student memorize and read a written script word-for-word.',
      'Conduct a natural, interactive Q&A using company phone & external mic—NO script reading allowed!',
      'Record without audio; only film the robot moving on the floor.',
      'Allow the parent to speak on camera instead of the student.',
    ],
    correctIndex: 1,
    explanation: 'Natural confidence! Students must present their own work through engaging Q&A with clear audio (external mic), never robotic script reading.',
    tag: 'Video Production Standard',
  },
  {
    id: 8,
    question: 'What is the operational timeline requirement for submitting classroom admin updates and student records?',
    options: [
      'Within 24 hours of class completion (live progress, attendance, and coin records).',
      'Within 7 working days.',
      'At the end of each academic term.',
      'Only when requested by parents.',
    ],
    correctIndex: 0,
    explanation: '100% Operational Compliance: Instructor admin updates, attendance, and coin allocations must be logged within 24 hours without fail.',
    tag: 'Operational Discipline',
  },
  {
    id: 9,
    question: 'How does teaching delivery differ between Kinder (ages 4–6) and Junior (ages 7–12)?',
    options: [
      'There is no difference; teach both groups with identical high-level technical lectures.',
      'Kinder uses sensory colors, tactile stories & physical analogies; Junior focuses on computational logic, flowchart sequences & independent debugging.',
      'Kinder does pure gaming while Junior does exclusively theoretical mathematics.',
      'Kinder builds with real power tools while Junior works only on paper.',
    ],
    correctIndex: 1,
    explanation: 'Developmental tailoring! Pre-readers thrive on storytelling, color associations, and tactile discovery, while older kids build deep algorithmic thinking.',
    tag: 'Age-Appropriate Pedagogy',
  },
  {
    id: 10,
    question: 'During the Week 4 Trial Class Roleplay simulation, what is the instructor’s key deliverable?',
    options: [
      'Offer maximum discounts to parents.',
      'Deliver an inspiring, high-energy session and provide an accurate placement assessment (Kinder or Junior level).',
      'Give the child the hardest test possible to see if they give up.',
      'Let the child play unattended while talking to the Education Consultant.',
    ],
    correctIndex: 1,
    explanation: 'Conversion & Placement Excellence: A warm, encouraging first impression combined with accurate skill placement creates trust and delighted new families!',
    tag: 'Trial Class Simulation',
  },
  {
    id: 11,
    question: 'What are the strict trainee expectations for your weekly 1-on-1 Understanding Check with your Lead or Senior Instructor?',
    options: [
      'It is a casual chat where the mentor teaches you the lessons from scratch while you take notes.',
      'It is a mini-test: you must demonstrate lesson flow, kid-friendly concept explanation (e.g. conductors/insulators & dangers), live worksheet experimentation (Cody kit), activity card usage, and hardware challenge troubleshooting.',
      'You only need to submit written summaries without touching or demonstrating physical builds or kits.',
      'You only need to recite the lesson plan title without knowing how to facilitate when a lesson plan is brief.',
    ],
    correctIndex: 1,
    explanation: 'Demonstrate Mastery! The Understanding Check is a mini-test. You must know how to explain concepts to kids, run the worksheet experiment hands-on (like Cody tester kit), explain activity cards, and solve building challenges with live troubleshooting.',
    tag: 'Understanding Check Mini-Test',
  },
];

interface InteractiveQuizProps {
  isDark?: boolean;
}

export const InteractiveQuiz: React.FC<InteractiveQuizProps> = ({ isDark = false }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
    Array(QUIZ_QUESTIONS.length).fill(null)
  );
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQ = QUIZ_QUESTIONS[currentIdx];
  const selectedOption = selectedAnswers[currentIdx];
  const hasAnsweredCurrent = selectedOption !== null;
  const isCorrect = selectedOption === currentQ.correctIndex;

  const handleSelectOption = (idx: number) => {
    if (hasAnsweredCurrent) return;
    const newAnswers = [...selectedAnswers];
    newAnswers[currentIdx] = idx;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentIdx < QUIZ_QUESTIONS.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleReset = () => {
    setSelectedAnswers(Array(QUIZ_QUESTIONS.length).fill(null));
    setCurrentIdx(0);
    setIsCompleted(false);
  };

  const totalAnswered = selectedAnswers.filter((a) => a !== null).length;
  const score = selectedAnswers.reduce<number>((acc, ans, i) => {
    return ans === QUIZ_QUESTIONS[i].correctIndex ? acc + 1 : acc;
  }, 0);

  if (isCompleted) {
    const percentage = Math.round((score / QUIZ_QUESTIONS.length) * 100);
    const isPassing = percentage >= 80;

    return (
      <div className="h-full w-full flex flex-col justify-center items-center py-2 px-2">
        <div className={`border-2 rounded-3xl p-6 sm:p-10 max-w-3xl w-full text-center shadow-xl transition-colors ${
          isDark 
            ? 'bg-slate-900 border-slate-700 text-slate-100' 
            : 'bg-gradient-to-br from-indigo-50/70 via-white to-purple-50/70 border-indigo-200 text-slate-900'
        }`}>
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-tr from-amber-400 to-yellow-300 text-slate-950 flex items-center justify-center mx-auto mb-5 shadow-lg">
            <Award size={48} className="text-amber-950" />
          </div>

          <span className={`px-4 py-1.5 rounded-full text-sm sm:text-base font-black uppercase tracking-wider inline-block mb-3 ${
            isDark ? 'bg-indigo-900/70 text-indigo-300 border border-indigo-700' : 'bg-indigo-100 text-indigo-800'
          }`}>
            Day 1 Onboarding Quiz Results
          </span>

          <h3 className="text-2xl sm:text-4xl font-black mb-3">
            {isPassing ? 'Outstanding Job, Rockstar! 🎉' : 'Great Effort! Keep Exploring! 💪'}
          </h3>

          <p className={`text-base sm:text-xl max-w-xl mx-auto mb-7 leading-relaxed font-medium ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            {isPassing
              ? 'You scored above 80%! You have demonstrated an excellent grasp of The Lab’s tools, pacing, and student-first philosophy.'
              : 'Review the slides and try again to cement all key concepts into your daily teaching habits.'}
          </p>

          {/* Score Badge */}
          <div className="flex items-center justify-center gap-4 sm:gap-8 mb-8">
            <div className={`px-7 py-4 rounded-2xl border shadow-sm ${
              isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'
            }`}>
              <span className={`text-xs sm:text-sm font-bold uppercase block mb-1 ${
                isDark ? 'text-slate-400' : 'text-slate-500'
              }`}>
                Your Score
              </span>
              <span className="text-4xl sm:text-5xl font-black text-indigo-500">
                {score} <span className="text-xl sm:text-2xl text-slate-400 font-bold">/ {QUIZ_QUESTIONS.length}</span>
              </span>
            </div>
            <div className={`px-7 py-4 rounded-2xl border shadow-sm ${
              isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'
            }`}>
              <span className={`text-xs sm:text-sm font-bold uppercase block mb-1 ${
                isDark ? 'text-slate-400' : 'text-slate-500'
              }`}>
                Accuracy
              </span>
              <span className={`text-4xl sm:text-5xl font-black ${isPassing ? 'text-emerald-500' : 'text-amber-500'}`}>
                {percentage}%
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={handleReset}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-base sm:text-lg transition-all shadow-md hover:shadow-indigo-400/40 cursor-pointer"
            >
              <RotateCcw size={20} />
              <span>Retake Quiz</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full w-full flex flex-col justify-between py-1">
      {/* Top Quiz Header & Question Navigation Chips */}
      <div className={`flex items-center justify-between gap-3 pb-2.5 border-b shrink-0 ${
        isDark ? 'border-slate-800' : 'border-slate-200'
      }`}>
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-xl bg-indigo-600 text-white font-black text-sm sm:text-base">
            Q{currentIdx + 1} of {QUIZ_QUESTIONS.length}
          </span>
          <span className={`text-sm sm:text-base font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
            Topic: <strong className={isDark ? 'text-indigo-400' : 'text-indigo-900'}>{currentQ.tag}</strong>
          </span>
        </div>

        {/* 10 Step Indicator Badges */}
        <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto py-1">
          {QUIZ_QUESTIONS.map((q, idx) => {
            const ans = selectedAnswers[idx];
            const isAns = ans !== null;
            const isRight = isAns && ans === q.correctIndex;
            return (
              <button
                key={q.id}
                onClick={() => setCurrentIdx(idx)}
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg text-xs sm:text-sm font-bold flex items-center justify-center transition-all cursor-pointer ${
                  idx === currentIdx
                    ? 'ring-2 ring-indigo-500 ring-offset-1 bg-indigo-600 text-white font-black'
                    : isAns
                    ? isRight
                      ? 'bg-emerald-500/20 text-emerald-600 border border-emerald-500/40 font-bold'
                      : 'bg-rose-500/20 text-rose-600 border border-rose-500/40 font-bold'
                    : isDark
                    ? 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                    : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                }`}
                title={`Question ${idx + 1}`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Question Card with Big, Highly Visible Fonts */}
      <div className="my-auto py-2 flex-1 flex flex-col justify-center">
        <h3 className={`text-lg sm:text-2xl md:text-3xl font-black mb-4 leading-tight ${
          isDark ? 'text-slate-50' : 'text-slate-900'
        }`}>
          {currentQ.question}
        </h3>

        {/* 4 Options Grid with Large Text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-4">
          {currentQ.options.map((opt, oIdx) => {
            const isSelected = selectedOption === oIdx;
            const isCorrectOption = oIdx === currentQ.correctIndex;

            let btnStyle = isDark
              ? 'bg-slate-800/90 border-slate-700 hover:border-indigo-400 text-slate-100 hover:bg-slate-800'
              : 'bg-slate-50 hover:bg-slate-100/90 border-slate-200 hover:border-indigo-400 text-slate-900';

            if (hasAnsweredCurrent) {
              if (isCorrectOption) {
                btnStyle = isDark
                  ? 'bg-emerald-950/70 border-emerald-500 text-emerald-200 font-bold ring-2 ring-emerald-500'
                  : 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold ring-2 ring-emerald-400';
              } else if (isSelected) {
                btnStyle = isDark
                  ? 'bg-rose-950/70 border-rose-500 text-rose-200 font-bold ring-2 ring-rose-500'
                  : 'bg-rose-50 border-rose-400 text-rose-950 font-bold ring-2 ring-rose-400';
              } else {
                btnStyle = isDark
                  ? 'bg-slate-900/40 border-slate-800 text-slate-500 opacity-50'
                  : 'bg-slate-50/50 border-slate-200 text-slate-400 opacity-50';
              }
            }

            return (
              <button
                key={oIdx}
                disabled={hasAnsweredCurrent}
                onClick={() => handleSelectOption(oIdx)}
                className={`text-left p-4 sm:p-5 rounded-2xl border-2 transition-all flex items-start gap-3 sm:gap-4 text-base sm:text-lg lg:text-xl shadow-xs cursor-pointer ${btnStyle}`}
              >
                <div
                  className={`w-8 h-8 rounded-xl shrink-0 flex items-center justify-center font-black text-sm sm:text-base ${
                    hasAnsweredCurrent
                      ? isCorrectOption
                        ? 'bg-emerald-600 text-white'
                        : isSelected
                        ? 'bg-rose-600 text-white'
                        : isDark ? 'bg-slate-800 text-slate-400' : 'bg-slate-200 text-slate-600'
                      : 'bg-indigo-600 text-white'
                  }`}
                >
                  {String.fromCharCode(65 + oIdx)}
                </div>
                <span className="flex-1 leading-relaxed font-medium">{opt}</span>
              </button>
            );
          })}
        </div>

        {/* Immediate Feedback Explanation Box */}
        {hasAnsweredCurrent && (
          <div
            className={`p-4 sm:p-5 rounded-2xl border-2 transition-all flex items-start gap-3 text-base sm:text-lg ${
              isCorrect
                ? isDark 
                  ? 'bg-emerald-950/60 border-emerald-500/80 text-emerald-200' 
                  : 'bg-emerald-50 border-emerald-400 text-emerald-950'
                : isDark 
                  ? 'bg-rose-950/60 border-rose-500/80 text-rose-200' 
                  : 'bg-rose-50 border-rose-400 text-rose-950'
            }`}
          >
            {isCorrect ? (
              <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={24} />
            ) : (
              <XCircle className="text-rose-500 shrink-0 mt-0.5" size={24} />
            )}
            <div className="flex-1">
              <strong className="block font-black mb-1 text-base sm:text-lg">
                {isCorrect ? 'Correct! 🌟' : 'Not quite right — Here is why:'}
              </strong>
              <p className="text-sm sm:text-base leading-relaxed opacity-95">
                {currentQ.explanation}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Action Footer */}
      <div className={`pt-2.5 border-t flex items-center justify-between shrink-0 ${
        isDark ? 'border-slate-800' : 'border-slate-200'
      }`}>
        <div className={`text-sm sm:text-base font-semibold ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          Completed: <strong className={isDark ? 'text-slate-100' : 'text-slate-900'}>{totalAnswered}</strong> / {QUIZ_QUESTIONS.length}
        </div>

        {hasAnsweredCurrent && (
          <button
            onClick={handleNext}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm sm:text-base transition-all shadow-md cursor-pointer"
          >
            <span>{currentIdx === QUIZ_QUESTIONS.length - 1 ? 'See Final Score 🏆' : 'Next Question'}</span>
            <ChevronRight size={18} />
          </button>
        )}
      </div>
    </div>
  );
};
