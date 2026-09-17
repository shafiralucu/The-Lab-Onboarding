import React from 'react';
import { 
  Calendar, 
  CheckCircle, 
  Clock, 
  Sparkles, 
  Target, 
  AlertCircle, 
  BookOpen, 
  Bot, 
  MessageSquare, 
  ArrowRight,
  Award,
  Users,
  ShieldCheck,
  Zap
} from 'lucide-react';

interface ProbationSlideProps {
  isDark?: boolean;
}

export const ProbationSlide: React.FC<ProbationSlideProps> = ({ isDark = false }) => {
  const cardBorderClass = isDark ? 'border-slate-700' : 'border-slate-200/90';
  const cardBgClass = isDark ? 'bg-slate-900 text-slate-100' : 'bg-slate-50 text-slate-900';
  const innerCardClass = isDark ? 'bg-slate-800/90 border-slate-700 text-slate-200' : 'bg-white border-slate-200 text-slate-700';
  const textMutedClass = isDark ? 'text-slate-300' : 'text-slate-600';

  return (
    <div className="w-full flex flex-col justify-between py-1 gap-3.5">
      {/* Top Banner */}
      <div className={`p-4 sm:p-5 rounded-2xl border shrink-0 flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
        isDark 
          ? 'bg-gradient-to-r from-indigo-950 via-slate-900 to-indigo-900 border-indigo-800 text-slate-100' 
          : 'bg-gradient-to-r from-indigo-50/90 via-sky-50/80 to-purple-50/80 border-indigo-200 text-indigo-950'
      }`}>
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-black shrink-0 shadow-xs">
            <Calendar size={22} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-indigo-600 text-white shadow-2xs">
                3-Month Growth Path
              </span>
              <span className={`text-xs ${isDark ? 'text-indigo-300' : 'text-indigo-700'} font-medium`}>
                Weekly Mini-Tests & Milestone Progression
              </span>
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-black mt-0.5">
              Your Journey from Passionate Trainee to Certified Lead Instructor
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-2 self-end sm:self-auto">
          <span className="px-3 py-1.5 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-700 dark:text-amber-300 text-xs font-bold flex items-center gap-1.5">
            <Sparkles size={14} />
            <span>Structured Mentorship</span>
          </span>
        </div>
      </div>

      {/* Main 2-Column Split: Month 1 Milestones on Left, Weekly Understanding Check on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 sm:gap-4.5 items-stretch flex-1">
        
        {/* Left Column: Month 1 Milestones (5 cols) */}
        <div className={`lg:col-span-5 border-2 rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-xs ${cardBgClass} ${cardBorderClass}`}>
          <div>
            <div className={`flex items-center justify-between pb-2.5 mb-3 border-b ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
              <div className="flex items-center gap-2.5">
                <Award className="text-indigo-500 shrink-0" size={22} />
                <h3 className="text-lg sm:text-xl font-bold">Month 1 Key Milestones</h3>
              </div>
              <span className="px-3 py-0.5 bg-indigo-600 text-white rounded-full font-bold text-xs">
                Month 1 of 3
              </span>
            </div>

            <p className={`text-xs sm:text-sm mb-3 ${textMutedClass}`}>
              During your first month, your primary goal is establishing bulletproof confidence across four core operational pillars:
            </p>

            <div className="space-y-2.5 text-xs sm:text-sm">
              <div className={`p-3 rounded-xl border flex items-start gap-2.5 shadow-2xs ${innerCardClass}`}>
                <CheckCircle className="text-emerald-500 mt-0.5 shrink-0" size={18} />
                <div>
                  <strong className={`block font-bold text-sm mb-0.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    1 Full Program Mastery
                  </strong>
                  <span className={`text-xs leading-snug ${textMutedClass}`}>
                    Master all terms of Kinder OR Junior with 100% hands-on tool build comfort.
                  </span>
                </div>
              </div>

              <div className={`p-3 rounded-xl border flex items-start gap-2.5 shadow-2xs ${innerCardClass}`}>
                <CheckCircle className="text-emerald-500 mt-0.5 shrink-0" size={18} />
                <div>
                  <strong className={`block font-bold text-sm mb-0.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Class Admin SOP
                  </strong>
                  <span className={`text-xs leading-snug ${textMutedClass}`}>
                    Live attendance, student coin rewards, and lesson updates logged within 24h.
                  </span>
                </div>
              </div>

              <div className={`p-3 rounded-xl border flex items-start gap-2.5 shadow-2xs ${innerCardClass}`}>
                <CheckCircle className="text-emerald-500 mt-0.5 shrink-0" size={18} />
                <div>
                  <strong className={`block font-bold text-sm mb-0.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Student Presentation Videos
                  </strong>
                  <span className={`text-xs leading-snug ${textMutedClass}`}>
                    High-quality L9/L10 videos using company phone & external mic (no script reading).
                  </span>
                </div>
              </div>

              <div className={`p-3 rounded-xl border flex items-start gap-2.5 shadow-2xs ${innerCardClass}`}>
                <CheckCircle className="text-emerald-500 mt-0.5 shrink-0" size={18} />
                <div>
                  <strong className={`block font-bold text-sm mb-0.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Trial Class Simulation
                  </strong>
                  <span className={`text-xs leading-snug ${textMutedClass}`}>
                    Delivering an inspiring trial class roleplay & student placement consultation with EC.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className={`mt-3 pt-2.5 border-t text-xs font-semibold flex items-center justify-between ${
            isDark ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-slate-500'
          }`}>
            <span>Evaluated by Lead & Branch Manager</span>
            <span className="text-indigo-400 font-bold">Probation Baseline</span>
          </div>
        </div>

        {/* Right Column: Weekly Understanding Check Mini-Test Concept (7 cols) */}
        <div className={`lg:col-span-7 border-2 rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-xs ${
          isDark 
            ? 'bg-slate-900 border-slate-700 text-slate-100' 
            : 'bg-gradient-to-br from-indigo-50/80 via-sky-50/50 to-emerald-50/60 border-indigo-200 text-slate-900'
        }`}>
          <div>
            {/* Header */}
            <div className={`flex items-center justify-between pb-2.5 mb-2.5 border-b ${
              isDark ? 'border-slate-800' : 'border-indigo-100'
            }`}>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Target size={18} />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold flex items-center gap-2">
                    <span>Weekly Understanding Check: 1-on-1 Mini-Test</span>
                  </h3>
                  <span className={`text-xs font-medium ${isDark ? 'text-indigo-300' : 'text-indigo-700'}`}>
                    Mandatory Oral & Practical Assessment with Senior / Lead Instructor
                  </span>
                </div>
              </div>
              <span className="px-3 py-1 bg-amber-500 text-white rounded-full font-bold text-xs uppercase tracking-wide shrink-0">
                Weekly Check
              </span>
            </div>

            {/* Trainee Expectation Callout */}
            <div className={`p-3 rounded-xl border text-xs sm:text-sm mb-3 shadow-2xs ${
              isDark ? 'bg-indigo-950/50 border-indigo-800/80 text-indigo-200' : 'bg-white/95 border-indigo-200 text-indigo-950'
            }`}>
              <div className="flex items-start gap-2">
                <AlertCircle className="text-indigo-500 mt-0.5 shrink-0" size={17} />
                <div>
                  <strong className="block font-bold text-xs sm:text-sm text-indigo-600 dark:text-indigo-300 mb-0.5">
                    Trainee Expectation: It is a Mini-Test, Not a Casual Study Session!
                  </strong>
                  <p className={`text-xs sm:text-sm leading-relaxed ${textMutedClass}`}>
                    Every week features a structured 1-on-1 mini-test. Your Senior or Lead Instructor will rigorously test your readiness before signing you off to teach independently. Come to <strong>demonstrate mastery</strong>, not to begin learning!
                  </p>
                </div>
              </div>
            </div>

            {/* The 3 Core Knowledge Areas Tested */}
            <div className="space-y-2.5 text-xs sm:text-sm">
              <div className={`p-3 rounded-xl border shadow-2xs ${innerCardClass}`}>
                <div className="flex items-center gap-2 mb-1">
                  <BookOpen size={16} className="text-indigo-500 shrink-0" />
                  <strong className={`font-bold text-sm ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    1. Activity & Lesson Mastery (Curriculum Flow)
                  </strong>
                </div>
                <ul className={`list-disc list-inside space-y-0.5 text-xs sm:text-sm ml-1 ${textMutedClass}`}>
                  <li>
                    <strong>Lesson Objectives & Narrative:</strong> Clearly explain story missions, learning stages, and expected outcomes.
                  </li>
                  <li>
                    <strong>Anticipate Roadblocks:</strong> Identify where students typically get stuck and pre-plan your facilitation tips.
                  </li>
                </ul>
              </div>

              <div className={`p-3 rounded-xl border shadow-2xs ${innerCardClass}`}>
                <div className="flex items-center gap-2 mb-1">
                  <Bot size={16} className="text-indigo-500 shrink-0" />
                  <strong className={`font-bold text-sm ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    2. Robot, Kit & Hardware Mechanics (Live Demo)
                  </strong>
                </div>
                <ul className={`list-disc list-inside space-y-0.5 text-xs sm:text-sm ml-1 ${textMutedClass}`}>
                  <li>
                    <strong>Live Hands-On Run:</strong> Demonstrate the working physical build (gears, motors, snap circuits, sensors).
                  </li>
                  <li>
                    <strong>On-the-Spot Debugging:</strong> Mentor tests your live troubleshooting (loose wires, wrong polarity, code bugs).
                  </li>
                </ul>
              </div>

              <div className={`p-3 rounded-xl border shadow-2xs ${innerCardClass}`}>
                <div className="flex items-center gap-2 mb-1">
                  <MessageSquare size={16} className="text-indigo-500 shrink-0" />
                  <strong className={`font-bold text-sm ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    3. How to Explain to Kids ("The Lab Way" Socratic Pedagogy)
                  </strong>
                </div>
                <ul className={`list-disc list-inside space-y-0.5 text-xs sm:text-sm ml-1 ${textMutedClass}`}>
                  <li>
                    <strong>Age-Appropriate Delivery:</strong> Roleplay explaining concepts (Kinder: tactile analogies; Junior: algorithmic logic).
                  </li>
                  <li>
                    <strong>Strict Socratic Rule:</strong> Guide with questions — <strong>NEVER grab the mouse or build for the child!</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Callout pointing directly to Slide 3 */}
          <div className={`mt-3 pt-2.5 border-t text-xs sm:text-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 ${
            isDark ? 'border-slate-800 text-slate-300' : 'border-indigo-100 text-slate-700'
          }`}>
            <div className="flex items-center gap-1.5">
              <ShieldCheck size={16} className="text-emerald-500 shrink-0" />
              <span className="font-semibold text-xs sm:text-sm">
                Passing your Understanding Check is required before teaching live classes.
              </span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 text-white font-bold text-xs shadow-xs">
              <span>Next: Slide 3 details the 4 Core Standards</span>
              <ArrowRight size={13} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
