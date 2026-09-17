import React from 'react';
import { SlideItem } from '../types';
import { 
  Mail, 
  FolderTree, 
  Users, 
  Calendar, 
  CheckCircle, 
  Clock, 
  Wrench, 
  Video, 
  FileText, 
  UserCheck, 
  Sparkles,
  ClipboardList,
  GraduationCap,
  Bot,
  Puzzle,
  Lightbulb,
  Cpu,
  Rocket,
  Search,
  BookOpen,
  Zap,
  Heart,
  Smile,
  Star,
  Flame,
  Target,
  AlertCircle,
  MessageSquare,
  HelpCircle
} from 'lucide-react';
import { SummarySlide } from './SummarySlide';
import { InteractiveQuiz } from './InteractiveQuiz';
import { ProbationSlide } from './ProbationSlide';
import { UnderstandingCheckSlide } from './UnderstandingCheckSlide';
import { LessonPlanPage1Slide } from './LessonPlanPage1Slide';
import { LessonPlanPage2Slide } from './LessonPlanPage2Slide';

interface SlideContentProps {
  slide: SlideItem;
  isDark?: boolean;
}

export const SlideContent: React.FC<SlideContentProps> = ({ slide, isDark = false }) => {
  const cardBorderClass = isDark ? 'border-slate-700' : 'border-slate-200/90';
  const cardBgClass = isDark ? 'bg-slate-900 text-slate-100' : 'bg-slate-50 text-slate-900';
  const innerCardClass = isDark ? 'bg-slate-800/90 border-slate-700 text-slate-200' : 'bg-white border-slate-200 text-slate-700';
  const textMutedClass = isDark ? 'text-slate-300' : 'text-slate-600';
  const textSubClass = isDark ? 'text-slate-400' : 'text-slate-500';

  switch (slide.type) {
    /* -------------------------------------------------------------
       SLIDE 1: Welcome & Day 1 Credentials Setup
    -------------------------------------------------------------- */
    case 'credentials':
      return (
        <div className="h-full w-full flex flex-col justify-center py-1">
          {/* Top Welcome Banner */}
          <div className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-purple-900 text-white rounded-2xl p-4 sm:p-5 flex items-center justify-between shadow-sm mb-4 shrink-0">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-indigo-700/80 border border-indigo-500 flex items-center justify-center shrink-0 shadow-xs">
                <Rocket className="text-amber-400" size={24} />
              </div>
              <div>
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-indigo-300 block mb-0.5">
                  Welcome to The Lab!
                </span>
                <h3 className="text-base sm:text-xl lg:text-2xl font-black text-white leading-snug">
                  We're excited to have you join our mission of inspiring the next generation of creators!
                </h3>
              </div>
            </div>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm rounded-full shadow-xs">
              <Sparkles size={16} className="text-amber-900" />
              <span>Day 1 Launchpad</span>
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 flex-1 min-h-0">
            {/* Card 1: Account Setup */}
            <div className={`border-2 rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all shadow-xs ${cardBgClass} ${cardBorderClass} hover:border-indigo-400`}>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-black text-base">
                    01
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold">Your Work Identity</h3>
                </div>
                <ul className="space-y-4 text-base sm:text-lg leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 mt-2 shrink-0" />
                    <span>
                      Create official work email: <strong className={`font-mono px-2 py-0.5 rounded border ${isDark ? 'bg-indigo-950/80 border-indigo-800 text-indigo-300' : 'bg-indigo-50 border-indigo-100 text-slate-900'}`}>Nama.thelab@gmail.com</strong>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 mt-2 shrink-0" />
                    <span>
                      Register into <strong className={isDark ? 'text-white' : 'text-slate-900'}>Email Kerja All Karyawan.xlsx</strong> to activate accounts.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 mt-2 shrink-0" />
                    <span>
                      Log in to instructor portal at <span className="text-indigo-400 font-mono font-bold">web.thelab.id/login</span>.
                    </span>
                  </li>
                </ul>
              </div>
              <div className={`mt-5 pt-3 border-t text-sm sm:text-base font-bold uppercase tracking-wider flex items-center gap-2 ${isDark ? 'border-slate-800 text-indigo-400' : 'border-slate-200 text-indigo-700'}`}>
                <Mail size={18} />
                <span>Account & Portal Ready</span>
              </div>
            </div>

            {/* Card 2: Shared Resources & Drive */}
            <div className={`border-2 rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all shadow-xs ${cardBgClass} ${cardBorderClass} hover:border-indigo-400`}>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-black text-base">
                    02
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold">Knowledge Hub</h3>
                </div>
                <p className={`text-base sm:text-lg mb-3.5 leading-snug font-medium ${textMutedClass}`}>
                  Access curriculum via <span className="font-mono font-bold text-indigo-400">instructors@thelab.id</span>:
                </p>
                <div className="space-y-2.5 text-base sm:text-lg">
                  <div className={`p-3.5 rounded-xl border flex items-center gap-3 ${innerCardClass}`}>
                    <FolderTree size={20} className="text-indigo-500 shrink-0" />
                    <span className="font-semibold">Kinder & Junior Curriculum Library</span>
                  </div>
                  <div className={`p-3.5 rounded-xl border flex items-center gap-3 ${innerCardClass}`}>
                    <FolderTree size={20} className="text-indigo-500 shrink-0" />
                    <span className="font-semibold">Branch Schedules & Class Folders</span>
                  </div>
                  <div className={`p-3.5 rounded-xl border flex items-center gap-3 ${innerCardClass}`}>
                    <FolderTree size={20} className="text-indigo-500 shrink-0" />
                    <span className="font-semibold">Your Folder: "The Lab Training"</span>
                  </div>
                </div>
              </div>
              <div className={`mt-5 pt-3 border-t text-sm sm:text-base font-bold uppercase tracking-wider flex items-center gap-2 ${isDark ? 'border-slate-800 text-indigo-400' : 'border-slate-200 text-indigo-700'}`}>
                <FolderTree size={18} />
                <span>Drive Storage Setup</span>
              </div>
            </div>

            {/* Card 3: Buddy System & First Day Mission */}
            <div className="bg-gradient-to-br from-indigo-900 to-slate-900 text-white rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-md border-2 border-indigo-800">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-indigo-800 text-white flex items-center justify-center font-black text-base border border-indigo-700">
                    03
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Your Wingman & Team</h3>
                </div>
                <ul className="space-y-3.5 text-indigo-100 text-base sm:text-lg leading-relaxed">
                  <li className="flex items-start gap-3">
                    <Heart className="text-rose-400 mt-1 shrink-0" size={20} />
                    <span>
                      <strong className="text-white">Buddy System:</strong> You're paired with an experienced mentor ready to guide you and answer questions.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users className="text-amber-300 mt-1 shrink-0" size={20} />
                    <span>
                      Meet your branch allies: <strong className="text-white">SPA</strong> (Student Progress) & <strong className="text-white">EC</strong> (Education Consultant).
                    </span>
                  </li>
                  <li className="flex items-start gap-3 bg-indigo-950/80 p-3.5 rounded-xl border border-indigo-800/90">
                    <Sparkles className="text-amber-400 mt-1 shrink-0" size={20} />
                    <span className="text-indigo-200 text-sm sm:text-base leading-snug">
                      <strong className="text-amber-300 font-bold block mb-0.5">Curious Explorer Mindset:</strong>
                      Test tools with your hands first — playful curiosity is the best teacher!
                    </span>
                  </li>
                </ul>
              </div>
              <div className="mt-5 pt-3 border-t border-indigo-800 text-sm sm:text-base text-indigo-300 font-bold uppercase tracking-wider flex items-center gap-2">
                <Users size={18} />
                <span>You're in Good Hands</span>
              </div>
            </div>
          </div>
        </div>
      );

    /* -------------------------------------------------------------
       SLIDE 2: 3-Month Growth Journey & Understanding Check Mini-Test
    -------------------------------------------------------------- */
    case 'probation':
      return <ProbationSlide isDark={isDark} />;

    /* -------------------------------------------------------------
       SLIDE 3: Understanding Check Expectations (The 4 Core Standards)
    -------------------------------------------------------------- */
    case 'understanding-check':
      return <UnderstandingCheckSlide isDark={isDark} />;

    /* -------------------------------------------------------------
       SLIDE 4: Lesson Plan Deep Dive: Page 4 (Video, 6-Item Worksheet, Art Card)
    -------------------------------------------------------------- */
    case 'lesson-plan-page1':
      return <LessonPlanPage1Slide isDark={isDark} />;

    /* -------------------------------------------------------------
       SLIDE 5: Lesson Plan Deep Dive: Page 5 (Snap Circuits & Smart House Challenge)
    -------------------------------------------------------------- */
    case 'lesson-plan-page2':
      return <LessonPlanPage2Slide isDark={isDark} />;

    /* -------------------------------------------------------------
       SLIDE 4: 10-Week Training Roadmap
    -------------------------------------------------------------- */
    case 'roadmap':
      return (
        <div className="h-full w-full flex flex-col justify-center py-1">
          <div className={`border-2 rounded-2xl overflow-hidden shadow-sm ${
            isDark ? 'bg-slate-900 border-slate-700' : 'bg-slate-50 border-slate-200'
          }`}>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-indigo-900 text-white text-sm sm:text-base">
                  <th className="py-3.5 px-5 font-black uppercase tracking-wider w-1/5">
                    Timeline
                  </th>
                  <th className="py-3.5 px-5 font-black uppercase tracking-wider w-3/5">
                    Main Focus & Milestones
                  </th>
                  <th className="py-3.5 px-5 font-black uppercase tracking-wider w-1/5">
                    Trainee Status
                  </th>
                </tr>
              </thead>
              <tbody className={`divide-y text-base sm:text-lg ${
                isDark ? 'divide-slate-800 text-slate-200' : 'divide-slate-200 text-slate-800'
              }`}>
                <tr className={`transition-colors ${isDark ? 'hover:bg-slate-800/60' : 'hover:bg-indigo-50/50'}`}>
                  <td className="py-3.5 px-5 font-bold font-mono text-indigo-400 text-lg sm:text-xl">
                    Weeks 1–2
                  </td>
                  <td className="py-3.5 px-5 leading-relaxed">
                    <strong className={isDark ? 'text-white' : 'text-slate-900'}>Program Track 1 (Terms 1–4):</strong> Try all robots, components & toys in Kinder/Junior. Master "The Lab Way" simple explanations, quizzes, and admin.
                  </td>
                  <td className="py-3.5 px-5">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs sm:text-sm font-bold ${
                      isDark ? 'bg-slate-800 text-slate-300 border border-slate-700' : 'bg-slate-200 text-slate-800'
                    }`}>
                      No solo classes
                    </span>
                  </td>
                </tr>

                <tr className={`transition-colors ${isDark ? 'bg-slate-850/50 hover:bg-slate-800/60' : 'bg-white hover:bg-indigo-50/50'}`}>
                  <td className="py-3.5 px-5 font-bold font-mono text-indigo-400 text-lg sm:text-xl">
                    Week 3
                  </td>
                  <td className="py-3.5 px-5 leading-relaxed">
                    <strong className={isDark ? 'text-white' : 'text-slate-900'}>Foundation 1 & 2:</strong> Advanced builds. Assist and observe live regular classes with same-day senior mentor feedback.
                  </td>
                  <td className="py-3.5 px-5">
                    <span className="inline-block px-3 py-1 rounded-full bg-blue-600 text-white text-xs sm:text-sm font-bold">
                      Assisted & observed
                    </span>
                  </td>
                </tr>

                <tr className={`transition-colors ${isDark ? 'hover:bg-slate-800/60' : 'hover:bg-indigo-50/50'}`}>
                  <td className="py-3.5 px-5 font-bold font-mono text-indigo-400 text-lg sm:text-xl">
                    Week 4
                  </td>
                  <td className="py-3.5 px-5 leading-relaxed">
                    <strong className={isDark ? 'text-white' : 'text-slate-900'}>Roleplay & Media SOP:</strong> Student presentation video production (L9/L10 Junior, L10 Kinder), Progress Update roleplay, and Trial Class simulation.
                  </td>
                  <td className="py-3.5 px-5">
                    <span className="inline-block px-3 py-1 rounded-full bg-amber-500 text-slate-950 text-xs sm:text-sm font-bold">
                      Simulation phase
                    </span>
                  </td>
                </tr>

                <tr className={`transition-colors ${isDark ? 'bg-slate-850/50 hover:bg-slate-800/60' : 'bg-white hover:bg-indigo-50/50'}`}>
                  <td className="py-3.5 px-5 font-bold font-mono text-indigo-400 text-lg sm:text-xl">
                    Weeks 5–8
                  </td>
                  <td className="py-3.5 px-5 leading-relaxed">
                    <strong className={isDark ? 'text-white' : 'text-slate-900'}>Program Track 2 (Junior / Cross-Track):</strong> Repeat the 4-week cycle for the second curriculum track to achieve full dual-program competency.
                  </td>
                  <td className="py-3.5 px-5">
                    <span className="inline-block px-3 py-1 rounded-full bg-indigo-600 text-white text-xs sm:text-sm font-bold">
                      Co-teaching track
                    </span>
                  </td>
                </tr>

                <tr className={`transition-colors ${isDark ? 'hover:bg-slate-800/60' : 'hover:bg-indigo-50/50'}`}>
                  <td className="py-3.5 px-5 font-bold font-mono text-indigo-400 text-lg sm:text-xl">
                    Weeks 9–10
                  </td>
                  <td className="py-3.5 px-5 leading-relaxed">
                    <strong className={isDark ? 'text-white' : 'text-slate-900'}>Autonomous Delivery:</strong> Solo class handling under mentor observation. Fine-tuning delivery, time management, and classroom dynamics.
                  </td>
                  <td className="py-3.5 px-5">
                    <span className="inline-block px-3 py-1 rounded-full bg-emerald-600 text-white text-xs sm:text-sm font-bold">
                      Autonomous stage
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );

    /* -------------------------------------------------------------
       SLIDE 4: Weeks 1 & 2 — Hands-On Playground & The Lab Way
    -------------------------------------------------------------- */
    case 'pacing':
      return (
        <div className="h-full w-full flex flex-col justify-center py-1">
          {/* Top Banner */}
          <div className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-sky-900 text-white rounded-2xl p-4 sm:p-5 flex items-center justify-between shadow-sm mb-4 shrink-0">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-indigo-700/80 border border-indigo-500 flex items-center justify-center shrink-0 shadow-xs">
                <Flame className="text-amber-400" size={24} />
              </div>
              <div>
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-indigo-300 block mb-0.5">
                  Weeks 1 & 2: Hands-On Immersion
                </span>
                <h3 className="text-base sm:text-lg md:text-xl font-black text-white leading-tight">
                  Pacing Goal: 1 Week = 2 Terms (W1: Terms 1 & 2 | W2: Terms 3 & 4) — Explore, Build & Have Fun!
                </h3>
              </div>
            </div>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm rounded-full shadow-xs">
              <Sparkles size={16} className="text-amber-900" />
              <span>Full Tool Literacy</span>
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 flex-1 min-h-0">
            {/* Column 1: Try ALL Robots, Components & Educational Toys */}
            <div className={`border-2 rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-xs ${cardBgClass} ${cardBorderClass} hover:border-indigo-400 transition-all`}>
              <div>
                <div className={`flex items-center gap-3 mb-3 pb-2.5 border-b ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
                  <div className="p-2 rounded-xl bg-indigo-600 text-white">
                    <Bot size={22} />
                  </div>
                  <h4 className="text-lg sm:text-xl md:text-2xl font-bold">
                    Play & Test ALL Robots, Components & Toys
                  </h4>
                </div>

                <p className={`text-sm sm:text-base font-semibold mb-3 leading-relaxed ${isDark ? 'text-indigo-300' : 'text-indigo-900'}`}>
                  Trainees must personally explore, build, and test every single tool across both tracks:
                </p>

                <div className="space-y-3 text-base">
                  <div className={`p-3.5 rounded-xl border shadow-2xs ${innerCardClass}`}>
                    <span className="text-sm font-bold uppercase tracking-wide text-indigo-500 block mb-1 flex items-center gap-2">
                      <Sparkles size={16} className="text-amber-500" />
                      <span>Robots & Electronic Hardware</span>
                    </span>
                    <p className={`text-sm sm:text-base leading-relaxed ${textMutedClass}`}>
                      Build and experiment with all robotics kits and smart hardware used in Kinder & Junior. Learn to troubleshoot firmware, connections, and student errors with ease.
                    </p>
                  </div>

                  <div className={`p-3.5 rounded-xl border shadow-2xs ${innerCardClass}`}>
                    <span className="text-sm font-bold uppercase tracking-wide text-indigo-500 block mb-1 flex items-center gap-2">
                      <Cpu size={16} className="text-indigo-500" />
                      <span>Sensors, Motors & Mechanical Components</span>
                    </span>
                    <p className={`text-sm sm:text-base leading-relaxed ${textMutedClass}`}>
                      Test ultrasonic distance, color sensors, force touch, and multi-speed motors. Know how each responds so you can guide curious kids with complete confidence!
                    </p>
                  </div>

                  <div className={`p-3.5 rounded-xl border shadow-2xs ${innerCardClass}`}>
                    <span className="text-sm font-bold uppercase tracking-wide text-emerald-500 block mb-1 flex items-center gap-2">
                      <Puzzle size={16} className="text-emerald-500" />
                      <span>Educational Toys & Physical STEM Kits</span>
                    </span>
                    <p className={`text-sm sm:text-base leading-relaxed ${textMutedClass}`}>
                      Balance beams, gears, optical kits, Strawbees, circuits, and tactile toys. <em>Even lessons without a robot have hands-on kits you must master firsthand!</em>
                    </p>
                  </div>
                </div>
              </div>

              <div className={`mt-4 pt-3 border-t text-sm font-semibold flex items-center justify-between ${isDark ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-slate-500'}`}>
                <span>Check kits via room Picking List</span>
                <span className="text-indigo-400 font-bold">100% Hands-On Experience</span>
              </div>
            </div>

            {/* Column 2: Explain in "The Lab Way" */}
            <div className={`border-2 rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-xs ${cardBgClass} ${cardBorderClass} hover:border-amber-400 transition-all`}>
              <div>
                <div className={`flex items-center gap-3 mb-3 pb-2.5 border-b ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
                  <div className="p-2 rounded-xl bg-amber-500 text-slate-950">
                    <Lightbulb size={22} />
                  </div>
                  <h4 className="text-lg sm:text-xl md:text-2xl font-bold">
                    Explain in "The Lab Way" (Age Delivery)
                  </h4>
                </div>

                <p className={`text-sm sm:text-base font-semibold mb-3 leading-relaxed ${isDark ? 'text-amber-300' : 'text-amber-900'}`}>
                  Trainees must know how to translate concepts so they click instantly for each age group:
                </p>

                <div className="space-y-3 text-base">
                  {/* Kinder Group */}
                  <div className={`p-3.5 rounded-xl border shadow-2xs ${
                    isDark ? 'bg-slate-800/90 border-amber-800/70' : 'bg-white border-amber-200'
                  }`}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm font-bold uppercase tracking-wide text-amber-500">
                        Kinder Track (Ages 4–6)
                      </span>
                      <span className="px-2.5 py-0.5 bg-amber-500 text-slate-950 text-xs font-bold rounded-md">
                        Concrete & Visual
                      </span>
                    </div>
                    <ul className={`text-sm sm:text-base space-y-1.5 leading-relaxed ${textMutedClass}`}>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0" />
                        <span><strong>Pre-Readers:</strong> Use colors, fun shapes, and numbers instead of heavy text.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0" />
                        <span><strong>Playful Stories:</strong> Explain gears and motors using relatable analogies (e.g., puppy steps).</span>
                      </li>
                    </ul>
                  </div>

                  {/* Junior Group */}
                  <div className={`p-3.5 rounded-xl border shadow-2xs ${
                    isDark ? 'bg-slate-800/90 border-sky-800/70' : 'bg-white border-sky-200'
                  }`}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm font-bold uppercase tracking-wide text-sky-400">
                        Junior Track (Ages 7–12)
                      </span>
                      <span className="px-2.5 py-0.5 bg-sky-600 text-white text-xs font-bold rounded-md">
                        Computational Logic
                      </span>
                    </div>
                    <ul className={`text-sm sm:text-base space-y-1.5 leading-relaxed ${textMutedClass}`}>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-sky-500 mt-2 shrink-0" />
                        <span><strong>Logical Thinking:</strong> Sensor triggers, conditional loops, comparisons (&gt;, &lt;, =).</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-sky-500 mt-2 shrink-0" />
                        <span><strong>Socratic Guiding:</strong> Ask questions that spark their own "Aha!" moment — never build for them.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Encouragement note */}
                  <div className={`p-3 rounded-xl border flex items-center gap-2.5 text-sm sm:text-base ${
                    isDark ? 'bg-indigo-950/60 border-indigo-800 text-indigo-200' : 'bg-indigo-50 border-indigo-100 text-indigo-950'
                  }`}>
                    <Zap size={18} className="text-amber-500 shrink-0" />
                    <span><strong>Pro-Tip:</strong> Use ChatGPT, peer discussions, and books to uncover fresh analogies!</span>
                  </div>
                </div>
              </div>

              <div className={`mt-4 pt-3 border-t text-sm font-bold uppercase tracking-wider ${isDark ? 'border-slate-800 text-indigo-400' : 'border-slate-200 text-indigo-700'}`}>
                Kid-Centered Explanations
              </div>
            </div>
          </div>

          {/* Bottom Encouraging Video Submission Bar */}
          <div className={`mt-3.5 border-2 rounded-2xl p-3.5 sm:p-4 flex items-center justify-between text-sm sm:text-base shadow-2xs ${
            isDark ? 'bg-amber-950/40 border-amber-800 text-amber-200' : 'bg-amber-50 border-amber-200 text-amber-950'
          }`}>
            <div className="flex items-center gap-3">
              <Video className="text-amber-500 shrink-0" size={22} />
              <span>
                <strong>Share Your Wins:</strong> Record short video clips of completed builds &gt; Upload to Drive &gt; Paste into the <em>Instructor Task Submission</em> sheet!
              </span>
            </div>
            <span className="hidden md:inline-flex items-center gap-1.5 font-mono font-bold text-amber-950 text-xs bg-amber-400 px-3 py-1 rounded-lg">
              <CheckCircle size={16} className="text-amber-950" />
              <span>Drive Proof</span>
            </span>
          </div>
        </div>
      );

    /* -------------------------------------------------------------
       SLIDE 5: The 6 Golden Steps: Daily Training Flow & Pro Tips
    -------------------------------------------------------------- */
    case 'training-flow':
      return (
        <div className="h-full w-full flex flex-col justify-center py-1">
          {/* Top Encouragement Banner */}
          <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white rounded-2xl p-4 sm:p-5 flex items-center justify-between shadow-sm mb-3.5 shrink-0">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-white/20 backdrop-blur-xs flex items-center justify-center font-bold text-white shrink-0 shadow-xs">
                <Flame size={24} className="text-yellow-200" />
              </div>
              <div>
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-100 block mb-0.5">
                  Your Daily Success Routine
                </span>
                <h3 className="text-base sm:text-lg md:text-xl font-black text-white leading-tight">
                  Follow these 6 Golden Habits for every single lesson to build unstoppable teaching confidence!
                </h3>
              </div>
            </div>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1 bg-white text-slate-900 font-bold text-xs sm:text-sm rounded-full shadow-xs">
              <Sparkles size={16} className="text-amber-500" />
              <span>The Lab Routine</span>
            </span>
          </div>

          {/* 6 Grid Cards with Big, Readable Fonts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4.5 flex-1 min-h-0">
            {/* Step 1 */}
            <div className={`border-2 rounded-2xl p-4 sm:p-5 flex flex-col justify-between transition-all shadow-2xs ${cardBgClass} ${cardBorderClass} hover:border-indigo-400`}>
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <span className="px-3 py-1 rounded-lg bg-indigo-600 text-white text-xs sm:text-sm font-mono font-bold">
                    STEP 01
                  </span>
                  <BookOpen size={20} className="text-indigo-500" />
                </div>
                <h4 className="text-base sm:text-lg md:text-xl font-bold mb-1.5 leading-snug">
                  Read & Absorb Lesson Plan
                </h4>
                <p className={`text-sm sm:text-base leading-relaxed ${textMutedClass}`}>
                  Understand the mission! Discover core concepts, learning goals, and the engaging storyline or theme we bring to the kids.
                </p>
              </div>
              <div className={`mt-3.5 pt-2 border-t flex items-center gap-2 text-xs sm:text-sm font-bold ${isDark ? 'border-slate-800 text-indigo-400' : 'border-slate-200 text-indigo-700'}`}>
                <span>💡 Pro-Tip:</span>
                <span className={textSubClass}>Know the learning goal inside out</span>
              </div>
            </div>

            {/* Step 2 */}
            <div className={`border-2 rounded-2xl p-4 sm:p-5 flex flex-col justify-between transition-all shadow-2xs ${cardBgClass} ${cardBorderClass} hover:border-sky-400`}>
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <span className="px-3 py-1 rounded-lg bg-sky-600 text-white text-xs sm:text-sm font-mono font-bold">
                    STEP 02
                  </span>
                  <Search size={20} className="text-sky-500" />
                </div>
                <h4 className="text-base sm:text-lg md:text-xl font-bold mb-1.5 leading-snug">
                  Match & Gather Equipment
                </h4>
                <p className={`text-sm sm:text-base leading-relaxed ${textMutedClass}`}>
                  Scavenge the Lab! Identify all required robots, sensors, tablets, and STEM toys in the room before starting so everything is ready.
                </p>
              </div>
              <div className={`mt-3.5 pt-2 border-t flex items-center gap-2 text-xs sm:text-sm font-bold ${isDark ? 'border-slate-800 text-sky-400' : 'border-slate-200 text-sky-700'}`}>
                <span>🎯 Ready Set:</span>
                <span className={textSubClass}>Zero frantic searching during class!</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className={`border-2 rounded-2xl p-4 sm:p-5 flex flex-col justify-between transition-all shadow-2xs ${cardBgClass} ${cardBorderClass} hover:border-emerald-400`}>
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <span className="px-3 py-1 rounded-lg bg-emerald-600 text-white text-xs sm:text-sm font-mono font-bold">
                    STEP 03
                  </span>
                  <ClipboardList size={20} className="text-emerald-500" />
                </div>
                <h4 className="text-base sm:text-lg md:text-xl font-bold mb-1.5 leading-snug">
                  Check Picking List & Parts
                </h4>
                <p className={`text-sm sm:text-base leading-relaxed ${textMutedClass}`}>
                  Find the room's Picking List folder. Check your kit parts, organize trays, and prepare the build without missing components.
                </p>
              </div>
              <div className={`mt-3.5 pt-2 border-t flex items-center gap-2 text-xs sm:text-sm font-bold ${isDark ? 'border-slate-800 text-emerald-400' : 'border-slate-200 text-emerald-700'}`}>
                <span>📋 Neat Station:</span>
                <span className={textSubClass}>A tidy kit equals a smooth build</span>
              </div>
            </div>

            {/* Step 4 */}
            <div className={`border-2 rounded-2xl p-4 sm:p-5 flex flex-col justify-between transition-all shadow-2xs ${
              isDark ? 'bg-amber-950/40 border-amber-800 text-amber-100' : 'bg-amber-50/90 border-amber-300 text-amber-950'
            }`}>
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <span className="px-3 py-1 rounded-lg bg-amber-500 text-slate-950 text-xs sm:text-sm font-mono font-black">
                    STEP 04 (MUST TRY!)
                  </span>
                  <Video size={20} className="text-amber-500" />
                </div>
                <h4 className="text-base sm:text-lg md:text-xl font-black mb-1.5 leading-snug">
                  Build, Challenge & Record!
                </h4>
                <p className="text-sm sm:text-base leading-relaxed opacity-95">
                  Build the model & run all challenges! <strong>Crucial:</strong> Even lessons <em>without</em> a robot have toys/games you <strong>MUST try</strong>. Record a short video & upload link to <em>Task Submission</em>.
                </p>
              </div>
              <div className="mt-3.5 pt-2 border-t border-amber-500/40 flex items-center gap-2 text-xs sm:text-sm font-bold text-amber-400">
                <span>⚡ Golden Rule:</span>
                <span className="font-normal opacity-90">Robot or no robot, test everything!</span>
              </div>
            </div>

            {/* Step 5 */}
            <div className={`border-2 rounded-2xl p-4 sm:p-5 flex flex-col justify-between transition-all shadow-2xs ${cardBgClass} ${cardBorderClass} hover:border-violet-400`}>
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <span className="px-3 py-1 rounded-lg bg-violet-600 text-white text-xs sm:text-sm font-mono font-bold">
                    STEP 05
                  </span>
                  <Zap size={20} className="text-violet-500" />
                </div>
                <h4 className="text-base sm:text-lg md:text-xl font-bold mb-1.5 leading-snug">
                  Leverage AI & Ask Mentors
                </h4>
                <p className={`text-sm sm:text-base leading-relaxed ${textMutedClass}`}>
                  Use ChatGPT for creative analogies, or consult senior mentors. Try independently first, write down questions, and master it 100% before moving forward.
                </p>
              </div>
              <div className={`mt-3.5 pt-2 border-t flex items-center gap-2 text-xs sm:text-sm font-bold ${isDark ? 'border-slate-800 text-violet-400' : 'border-slate-200 text-violet-700'}`}>
                <span>🧠 Curiosity:</span>
                <span className={textSubClass}>Deep clarity beats rushing!</span>
              </div>
            </div>

            {/* Step 6 */}
            <div className="bg-gradient-to-br from-indigo-900 to-slate-900 text-white rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-xs border-2 border-indigo-800">
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <span className="px-3 py-1 rounded-lg bg-indigo-700 text-white text-xs sm:text-sm font-mono font-bold border border-indigo-500">
                    STEP 06
                  </span>
                  <Rocket size={20} className="text-amber-400" />
                </div>
                <h4 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1.5 leading-snug">
                  Be Active & Take Initiative!
                </h4>
                <p className="text-indigo-200 text-sm sm:text-base leading-relaxed">
                  Bring the spark! Don't wait to be told — ask questions proactively, experiment with playful explanations, help teammates, and bring your infectious positive energy!
                </p>
              </div>
              <div className="mt-3.5 pt-2 border-t border-indigo-800 flex items-center gap-2 text-xs sm:text-sm text-indigo-300 font-bold">
                <span>✨ Mindset:</span>
                <span className="text-indigo-200 font-normal">Lead with enthusiasm & heart</span>
              </div>
            </div>
          </div>

          {/* Bottom Encouraging Ribbon */}
          <div className={`mt-3.5 border-2 rounded-2xl px-5 py-3 flex items-center justify-between text-sm sm:text-base shrink-0 shadow-2xs ${
            isDark ? 'bg-emerald-950/40 border-emerald-800 text-emerald-200' : 'bg-emerald-50 border-emerald-200 text-emerald-950'
          }`}>
            <div className="flex items-center gap-3">
              <Smile className="text-emerald-500 shrink-0" size={22} />
              <span>
                <strong>Instructor Mantra:</strong> <em>"A well-prepared instructor creates happy, inspired students."</em> Take your time to enjoy the builds!
              </span>
            </div>
            <span className="hidden md:inline-flex items-center gap-1.5 font-mono font-bold text-xs bg-emerald-600 text-white px-3 py-1 rounded-lg">
              <Star size={16} className="text-amber-300 fill-amber-300" />
              <span>You've Got This!</span>
            </span>
          </div>
        </div>
      );

    /* -------------------------------------------------------------
       SLIDE 6: Week 3 — Assisted Teaching Protocol
    -------------------------------------------------------------- */
    case 'protocol':
      return (
        <div className="h-full w-full flex flex-col justify-center py-1">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 flex-1 min-h-0">
            {/* Card 1: Foundation Builds */}
            <div className={`border-2 rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-sm transition-all ${cardBgClass} ${cardBorderClass} hover:border-indigo-400`}>
              <div>
                <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center mb-4 shadow-xs">
                  <Wrench size={24} />
                </div>
                <div className="text-xs sm:text-sm font-bold text-indigo-500 uppercase tracking-wider mb-1.5">
                  Phase 1
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3">Foundation 1 & 2</h3>
                <p className={`text-base sm:text-lg leading-relaxed ${textMutedClass}`}>
                  Build and test <strong className={isDark ? 'text-white' : 'text-slate-900'}>Foundation 1 & 2</strong> curriculum sets. Master complex structural assemblies and advanced mechanical gearings.
                </p>
              </div>
              <div className={`mt-5 pt-3 border-t text-xs sm:text-sm font-bold uppercase tracking-wider ${isDark ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-slate-500'}`}>
                Technical Verification
              </div>
            </div>

            {/* Card 2: Assisted Teaching */}
            <div className={`border-2 rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-sm transition-all ${cardBgClass} ${cardBorderClass} hover:border-blue-400`}>
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-4 shadow-xs">
                  <Users size={24} />
                </div>
                <div className="text-xs sm:text-sm font-bold text-blue-500 uppercase tracking-wider mb-1.5">
                  Phase 2
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3">Assisted Teaching</h3>
                <p className={`text-base sm:text-lg leading-relaxed ${textMutedClass}`}>
                  Assigned to assist live regular classes under direct observation of a <strong className={isDark ? 'text-white' : 'text-slate-900'}>Senior Instructor</strong>. Observe pacing, tone, and student engagement.
                </p>
              </div>
              <div className={`mt-5 pt-3 border-t text-xs sm:text-sm font-bold uppercase tracking-wider ${isDark ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-slate-500'}`}>
                Live Classroom Delivery
              </div>
            </div>

            {/* Card 3: Same-Day Feedback */}
            <div className={`border-2 rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-sm transition-all ${cardBgClass} ${cardBorderClass} hover:border-emerald-400`}>
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-4 shadow-xs">
                  <ClipboardList size={24} />
                </div>
                <div className="text-xs sm:text-sm font-bold text-emerald-500 uppercase tracking-wider mb-1.5">
                  Phase 3
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3">Same-Day Feedback</h3>
                <p className={`text-base sm:text-lg leading-relaxed ${textMutedClass}`}>
                  Senior mentor fills the <strong className={isDark ? 'text-white' : 'text-slate-900'}>Observation Feedback Form</strong> on the <strong className="text-emerald-500 font-bold">exact same day</strong> of class. Immediate constructive coaching without delay.
                </p>
              </div>
              <div className={`mt-5 pt-3 border-t text-xs sm:text-sm font-bold uppercase tracking-wider ${isDark ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-slate-500'}`}>
                Zero Latency Coaching
              </div>
            </div>
          </div>
        </div>
      );

    /* -------------------------------------------------------------
       SLIDE 7: Week 4 — Roleplay & Presentation Video SOP
    -------------------------------------------------------------- */
    case 'roleplay':
      return (
        <div className="h-full w-full flex flex-col justify-center py-1">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 flex-1 min-h-0">
            {/* Card 1: Presentation Video */}
            <div className={`border-2 rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-sm transition-all ${cardBgClass} ${cardBorderClass} hover:border-indigo-400`}>
              <div>
                <div className="flex items-center gap-3 mb-3.5">
                  <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-sm">
                    01
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold">Presentation Video SOP</h3>
                </div>
                <ul className={`space-y-3 text-base sm:text-lg leading-relaxed ${textMutedClass}`}>
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-indigo-600 mt-2 shrink-0" />
                    <span>L9 & L10 Junior / L10 Kinder final projects.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-indigo-600 mt-2 shrink-0" />
                    <span>Use company phone & external mic for clear audio.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-rose-500 mt-2 shrink-0" />
                    <span className="text-rose-500 font-bold">
                      NO script reading! Conduct as natural interactive Q&A.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-indigo-600 mt-2 shrink-0" />
                    <span>Edit video and submit link until approved by SPA.</span>
                  </li>
                </ul>
              </div>
              <div className={`mt-4 pt-3 border-t text-sm font-bold uppercase tracking-wider flex items-center gap-2 ${isDark ? 'border-slate-800 text-indigo-400' : 'border-slate-200 text-indigo-700'}`}>
                <Video size={18} />
                <span>Media Quality Standard</span>
              </div>
            </div>

            {/* Card 2: Progress Update Roleplay */}
            <div className={`border-2 rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-sm transition-all ${cardBgClass} ${cardBorderClass} hover:border-indigo-400`}>
              <div>
                <div className="flex items-center gap-3 mb-3.5">
                  <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-sm">
                    02
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold">Progress Update Roleplay</h3>
                </div>
                <ul className={`space-y-3 text-base sm:text-lg leading-relaxed ${textMutedClass}`}>
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-indigo-600 mt-2 shrink-0" />
                    <span>
                      Fill <strong>Written Progress Sheet</strong> documenting student strengths & growth areas before simulation.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-indigo-600 mt-2 shrink-0" />
                    <span>
                      Senior trainer picks random students to test instructor's verbal reporting to parents.
                    </span>
                  </li>
                </ul>
              </div>
              <div className={`mt-4 pt-3 border-t text-sm font-bold uppercase tracking-wider flex items-center gap-2 ${isDark ? 'border-slate-800 text-indigo-400' : 'border-slate-200 text-indigo-700'}`}>
                <FileText size={18} />
                <span>Parent Communication</span>
              </div>
            </div>

            {/* Card 3: Trial Class Roleplay */}
            <div className={`border-2 rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-sm transition-all ${cardBgClass} ${cardBorderClass} hover:border-indigo-400`}>
              <div>
                <div className="flex items-center gap-3 mb-3.5">
                  <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-sm">
                    03
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold">Trial Class Simulation</h3>
                </div>
                <ul className={`space-y-3 text-base sm:text-lg leading-relaxed ${textMutedClass}`}>
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-indigo-600 mt-2 shrink-0" />
                    <span>Receive and review trial lesson plan days prior.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-indigo-600 mt-2 shrink-0" />
                    <span>
                      Simulate with 2–3 students (varying ages), Parent, and EC (sales perspective).
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-indigo-600 mt-2 shrink-0" />
                    <span>Deliver accurate level placement assessment.</span>
                  </li>
                </ul>
              </div>
              <div className={`mt-4 pt-3 border-t text-sm font-bold uppercase tracking-wider flex items-center gap-2 ${isDark ? 'border-slate-800 text-indigo-400' : 'border-slate-200 text-indigo-700'}`}>
                <UserCheck size={18} />
                <span>Conversion & Placement</span>
              </div>
            </div>
          </div>
        </div>
      );

    /* -------------------------------------------------------------
       SLIDE 8: Weeks 5 to 10 — Path to Full Independence
    -------------------------------------------------------------- */
    case 'independence':
      return (
        <div className="h-full w-full flex flex-col justify-center py-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-stretch flex-1 min-h-0">
            {/* Left: Weeks 5-8 */}
            <div className={`border-2 rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-sm ${cardBgClass} ${cardBorderClass}`}>
              <div>
                <div className={`flex items-center justify-between mb-3.5 pb-2.5 border-b ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
                  <span className="px-3 py-1 bg-indigo-600 text-white rounded-lg font-mono font-bold text-xs sm:text-sm">
                    Weeks 5–8 (4 Weeks)
                  </span>
                  <span className={`text-xs sm:text-sm font-bold uppercase tracking-wider ${textSubClass}`}>
                    Program Transfer
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3">
                  Second Curriculum Track (Junior Level)
                </h3>
                <p className={`text-base sm:text-lg leading-relaxed mb-4 ${textMutedClass}`}>
                  Apply the exact same 4-week framework to master the Junior program:
                </p>
                <div className={`p-4 rounded-xl border space-y-2.5 text-base sm:text-lg ${innerCardClass}`}>
                  <div className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-indigo-500 shrink-0" />
                    <span>Weeks 5–6: Junior Terms 1–4 curriculum, Spike/Mindstorms tools</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-indigo-500 shrink-0" />
                    <span>Week 7: Junior Foundation 1 & 2 assisted teaching</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-indigo-500 shrink-0" />
                    <span>Week 8: Junior roleplays & presentation video SOP</span>
                  </div>
                </div>
              </div>
              <div className={`mt-4 pt-3 border-t text-sm font-bold uppercase tracking-wider ${isDark ? 'border-slate-800 text-indigo-400' : 'border-slate-200 text-indigo-700'}`}>
                Multi-Program Versatility
              </div>
            </div>

            {/* Right: Weeks 9-10 */}
            <div className="bg-indigo-900 text-white rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-md border-2 border-indigo-800">
              <div>
                <div className="flex items-center justify-between mb-3.5 pb-2.5 border-b border-indigo-800">
                  <span className="px-3 py-1 bg-indigo-800 text-indigo-200 border border-indigo-700 rounded-lg font-mono font-bold text-xs sm:text-sm">
                    Weeks 9–10 (2 Weeks)
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-indigo-300 uppercase tracking-wider">
                    Solo Execution
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  Autonomous Class Delivery Under Observation
                </h3>
                <p className="text-indigo-200 text-base sm:text-lg mb-4">
                  Handle full classes independently while mentor observes for fine-tuning:
                </p>

                <div className="space-y-3 text-base sm:text-lg">
                  <div className="bg-indigo-950/80 p-3.5 rounded-xl border border-indigo-800 flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      1
                    </span>
                    <div>
                      <strong className="text-white block font-semibold">Delivery & Explanation Quality</strong>
                      <span className="text-indigo-200 text-sm sm:text-base">Adapting concepts into fun, memorable analogies for children.</span>
                    </div>
                  </div>

                  <div className="bg-indigo-950/80 p-3.5 rounded-xl border border-indigo-800 flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      2
                    </span>
                    <div>
                      <strong className="text-white block font-semibold">Classroom & Time Management</strong>
                      <span className="text-indigo-200 text-sm sm:text-base">Maintaining student focus, pacing the build, zero dead time.</span>
                    </div>
                  </div>

                  <div className="bg-indigo-950/80 p-3.5 rounded-xl border border-indigo-800 flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      3
                    </span>
                    <div>
                      <strong className="text-white block font-semibold">Material Care & Safety Discipline</strong>
                      <span className="text-indigo-200 text-sm sm:text-base">Caring for hubs, tablets, parts; student physical safety.</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-indigo-800 text-sm font-bold text-indigo-300 uppercase tracking-wider">
                Full Solo Readiness
              </div>
            </div>
          </div>
        </div>
      );

    /* -------------------------------------------------------------
       SLIDE 9: Instructor KPI Framework (Categories 1 & 2)
    -------------------------------------------------------------- */
    case 'kpi-1-2':
      return (
        <div className="h-full w-full flex flex-col justify-center py-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 flex-1 min-h-0">
            {/* Category 1 */}
            <div className={`border-2 rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-sm ${cardBgClass} ${cardBorderClass}`}>
              <div>
                <div className={`flex items-center justify-between pb-3 mb-4 border-b ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
                  <h3 className="text-xl sm:text-2xl font-bold">
                    1. Teaching Quality & Effectiveness
                  </h3>
                  <span className="px-3 py-1 bg-indigo-600 text-white rounded-full font-bold text-xs sm:text-sm">
                    Weight: 35%
                  </span>
                </div>

                <div className="space-y-3">
                  <div className={`p-3.5 rounded-xl border flex items-center justify-between ${innerCardClass}`}>
                    <div>
                      <strong className={`block font-bold text-base sm:text-lg ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        Class Observation Teaching Score
                      </strong>
                      <span className={`text-xs sm:text-sm ${textMutedClass}`}>Delivery, engagement, classroom control</span>
                    </div>
                    <span className="text-base sm:text-xl font-black font-mono text-indigo-500 bg-indigo-500/10 px-3 py-1 rounded-lg border border-indigo-500/20">
                      ≥ 85%
                    </span>
                  </div>

                  <div className={`p-3.5 rounded-xl border flex items-center justify-between ${innerCardClass}`}>
                    <div>
                      <strong className={`block font-bold text-base sm:text-lg ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        Student Engagement Score
                      </strong>
                      <span className={`text-xs sm:text-sm ${textMutedClass}`}>Active participation & excitement</span>
                    </div>
                    <span className="text-base sm:text-xl font-black font-mono text-indigo-500 bg-indigo-500/10 px-3 py-1 rounded-lg border border-indigo-500/20">
                      ≥ 90%
                    </span>
                  </div>

                  <div className={`p-3.5 rounded-xl border flex items-center justify-between ${innerCardClass}`}>
                    <div>
                      <strong className={`block font-bold text-base sm:text-lg ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        Curriculum Alignment
                      </strong>
                      <span className={`text-xs sm:text-sm ${textMutedClass}`}>Adherence to lesson plans & objectives</span>
                    </div>
                    <span className="text-base sm:text-xl font-black font-mono text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-lg border border-emerald-500/20">
                      100%
                    </span>
                  </div>
                </div>
              </div>
              <div className={`mt-4 pt-3 border-t text-sm font-bold uppercase tracking-wider ${isDark ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-slate-500'}`}>
                Pedagogical Benchmark
              </div>
            </div>

            {/* Category 2 */}
            <div className={`border-2 rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-sm ${cardBgClass} ${cardBorderClass}`}>
              <div>
                <div className={`flex items-center justify-between pb-3 mb-4 border-b ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
                  <h3 className="text-xl sm:text-2xl font-bold">
                    2. Discipline & Operations
                  </h3>
                  <span className="px-3 py-1 bg-indigo-600 text-white rounded-full font-bold text-xs sm:text-sm">
                    Weight: 25%
                  </span>
                </div>

                <div className="space-y-3">
                  <div className={`p-3.5 rounded-xl border flex items-center justify-between ${innerCardClass}`}>
                    <div>
                      <strong className={`block font-bold text-base sm:text-lg ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        Attendance & Punctuality
                      </strong>
                      <span className={`text-xs sm:text-sm ${textMutedClass}`}>On time arrival, class prep completed</span>
                    </div>
                    <span className="text-base sm:text-xl font-black font-mono text-indigo-500 bg-indigo-500/10 px-3 py-1 rounded-lg border border-indigo-500/20">
                      ≥ 98%
                    </span>
                  </div>

                  <div className={`p-3.5 rounded-xl border flex items-center justify-between ${innerCardClass}`}>
                    <div>
                      <strong className={`block font-bold text-base sm:text-lg ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        Classroom Readiness
                      </strong>
                      <span className={`text-xs sm:text-sm ${textMutedClass}`}>Kits, robots, and tablets prepped</span>
                    </div>
                    <span className="text-base sm:text-xl font-black font-mono text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-lg border border-emerald-500/20">
                      100%
                    </span>
                  </div>

                  <div className={`p-3.5 rounded-xl border flex items-center justify-between ${innerCardClass}`}>
                    <div>
                      <strong className={`block font-bold text-base sm:text-lg ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        Admin Updates within 24 Hours
                      </strong>
                      <span className={`text-xs sm:text-sm ${textMutedClass}`}>Live progress & coin records submitted</span>
                    </div>
                    <span className="text-base sm:text-xl font-black font-mono text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-lg border border-emerald-500/20">
                      100%
                    </span>
                  </div>

                  <div className={`p-3.5 rounded-xl border flex items-center justify-between ${innerCardClass}`}>
                    <div>
                      <strong className={`block font-bold text-base sm:text-lg ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        Zero Classroom Incidents
                      </strong>
                      <span className={`text-xs sm:text-sm ${textMutedClass}`}>Safety, misconduct, or equipment negligence</span>
                    </div>
                    <span className="text-base sm:text-xl font-black font-mono text-rose-500 bg-rose-500/10 px-3 py-1 rounded-lg border border-rose-500/20">
                      0 Incidents
                    </span>
                  </div>
                </div>
              </div>
              <div className={`mt-4 pt-3 border-t text-sm font-bold uppercase tracking-wider ${isDark ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-slate-500'}`}>
                Operational Compliance
              </div>
            </div>
          </div>
        </div>
      );

    /* -------------------------------------------------------------
       SLIDE 10: Instructor KPI Framework (Categories 3 & 4)
    -------------------------------------------------------------- */
    case 'kpi-3-4':
      return (
        <div className="h-full w-full flex flex-col justify-center py-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 flex-1 min-h-0">
            {/* Category 3 */}
            <div className={`border-2 rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-sm ${cardBgClass} ${cardBorderClass}`}>
              <div>
                <div className={`flex items-center justify-between pb-3 mb-4 border-b ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
                  <h3 className="text-xl sm:text-2xl font-bold">
                    3. Trial Class Management
                  </h3>
                  <span className="px-3 py-1 bg-indigo-600 text-white rounded-full font-bold text-xs sm:text-sm">
                    Weight: 20%
                  </span>
                </div>

                <div className="space-y-3">
                  <div className={`p-3.5 rounded-xl border flex items-center justify-between ${innerCardClass}`}>
                    <div>
                      <strong className={`block font-bold text-base sm:text-lg ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        Trial Delivery Quality Score
                      </strong>
                      <span className={`text-xs sm:text-sm ${textMutedClass}`}>Engaging, structured, inspiring experience</span>
                    </div>
                    <span className="text-base sm:text-xl font-black font-mono text-indigo-500 bg-indigo-500/10 px-3 py-1 rounded-lg border border-indigo-500/20">
                      ≥ 90%
                    </span>
                  </div>

                  <div className={`p-3.5 rounded-xl border flex items-center justify-between ${innerCardClass}`}>
                    <div>
                      <strong className={`block font-bold text-base sm:text-lg ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        Placement Assessment Accuracy
                      </strong>
                      <span className={`text-xs sm:text-sm ${textMutedClass}`}>Proper Kinder / Junior stage assignment</span>
                    </div>
                    <span className="text-base sm:text-xl font-black font-mono text-indigo-500 bg-indigo-500/10 px-3 py-1 rounded-lg border border-indigo-500/20">
                      ≥ 90%
                    </span>
                  </div>

                  <div className={`p-3.5 rounded-xl border flex items-center justify-between ${innerCardClass}`}>
                    <div>
                      <strong className={`block font-bold text-base sm:text-lg ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        Post-Trial Parent Complaints
                      </strong>
                      <span className={`text-xs sm:text-sm ${textMutedClass}`}>Dissatisfaction with instructor handling</span>
                    </div>
                    <span className="text-base sm:text-xl font-black font-mono text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-lg border border-emerald-500/20">
                      0 Complaints
                    </span>
                  </div>
                </div>
              </div>
              <div className={`mt-4 pt-3 border-t text-sm font-bold uppercase tracking-wider ${isDark ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-slate-500'}`}>
                Enrollment & Conversion
              </div>
            </div>

            {/* Category 4 */}
            <div className={`border-2 rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-sm ${cardBgClass} ${cardBorderClass}`}>
              <div>
                <div className={`flex items-center justify-between pb-3 mb-4 border-b ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
                  <h3 className="text-xl sm:text-2xl font-bold">
                    4. Collaboration with SPA & EC
                  </h3>
                  <span className="px-3 py-1 bg-indigo-600 text-white rounded-full font-bold text-xs sm:text-sm">
                    Weight: 20%
                  </span>
                </div>

                <div className="space-y-3">
                  <div className={`p-3.5 rounded-xl border flex items-center justify-between ${innerCardClass}`}>
                    <div>
                      <strong className={`block font-bold text-base sm:text-lg ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        Coordination Responsiveness
                      </strong>
                      <span className={`text-xs sm:text-sm ${textMutedClass}`}>Prompt communication with SPA and EC</span>
                    </div>
                    <span className="text-base sm:text-xl font-black font-mono text-indigo-500 bg-indigo-500/10 px-3 py-1 rounded-lg border border-indigo-500/20">
                      &lt; 24h
                    </span>
                  </div>

                  <div className={`p-3.5 rounded-xl border flex items-center justify-between ${innerCardClass}`}>
                    <div>
                      <strong className={`block font-bold text-base sm:text-lg ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        Progress Report Accuracy
                      </strong>
                      <span className={`text-xs sm:text-sm ${textMutedClass}`}>Accurate written progress & feedback data</span>
                    </div>
                    <span className="text-base sm:text-xl font-black font-mono text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-lg border border-emerald-500/20">
                      100%
                    </span>
                  </div>

                  <div className={`p-3.5 rounded-xl border flex items-center justify-between ${innerCardClass}`}>
                    <div>
                      <strong className={`block font-bold text-base sm:text-lg ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        Evaluation Sync Attendance
                      </strong>
                      <span className={`text-xs sm:text-sm ${textMutedClass}`}>Active presence in weekly training checks</span>
                    </div>
                    <span className="text-base sm:text-xl font-black font-mono text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-lg border border-emerald-500/20">
                      100%
                    </span>
                  </div>
                </div>
              </div>
              <div className={`mt-4 pt-3 border-t text-sm font-bold uppercase tracking-wider ${isDark ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-slate-500'}`}>
                Cross-Functional Teamwork
              </div>
            </div>
          </div>
        </div>
      );

    /* -------------------------------------------------------------
       SLIDE 11: Teaching Standards ("The Lab Way")
    -------------------------------------------------------------- */
    case 'teaching-standards':
      return (
        <div className="h-full w-full flex flex-col justify-center py-1">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-stretch flex-1 min-h-0">
            {/* Left: 2 Principles */}
            <div className="lg:col-span-5 space-y-4 flex flex-col justify-center">
              <div className={`border-2 rounded-2xl p-5 sm:p-6 shadow-sm ${cardBgClass} ${cardBorderClass} hover:border-amber-400 transition-all`}>
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center shrink-0 font-bold">
                    <Lightbulb size={22} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold">Concept Simplification</h3>
                </div>
                <p className={`text-base sm:text-lg leading-relaxed ${textMutedClass}`}>
                  Break down abstract robotics & coding concepts into playful, tangible analogies tailored to young children. Never speak in confusing technical jargon.
                </p>
              </div>

              <div className={`border-2 rounded-2xl p-5 sm:p-6 shadow-sm ${cardBgClass} ${cardBorderClass} hover:border-sky-400 transition-all`}>
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="w-10 h-10 rounded-xl bg-sky-500 text-white flex items-center justify-center shrink-0 font-bold">
                    <Cpu size={22} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold">Independent Building</h3>
                </div>
                <p className={`text-base sm:text-lg leading-relaxed ${textMutedClass}`}>
                  Guide students through questioning techniques rather than building or coding for them. Foster problem-solving confidence so they own their achievements.
                </p>
              </div>
            </div>

            {/* Right: 4 Pillars of Final Project */}
            <div className="lg:col-span-7 bg-indigo-900 text-white rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-md border-2 border-indigo-800">
              <div>
                <div className="flex items-center gap-2 text-indigo-300 text-xs sm:text-sm font-bold uppercase tracking-wider mb-1.5">
                  <Sparkles size={16} className="text-amber-400" />
                  <span>Capstone Standard</span>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white mb-4">
                  The 4 Pillars of Final Projects
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-base">
                  <div className="bg-indigo-950/80 border border-indigo-800 p-4 rounded-xl">
                    <span className="text-xs font-mono font-bold text-amber-400 block mb-1">Pillar 01</span>
                    <strong className="text-white text-base sm:text-lg block font-bold mb-1">Creative Project Idea</strong>
                    <p className="text-indigo-200 text-sm sm:text-base leading-snug">
                      Unique, fun, and independently conceived by the student.
                    </p>
                  </div>

                  <div className="bg-indigo-950/80 border border-indigo-800 p-4 rounded-xl">
                    <span className="text-xs font-mono font-bold text-amber-400 block mb-1">Pillar 02</span>
                    <strong className="text-white text-base sm:text-lg block font-bold mb-1">Independent Coding</strong>
                    <p className="text-indigo-200 text-sm sm:text-base leading-snug">
                      Code arranged with clear understanding of block functions.
                    </p>
                  </div>

                  <div className="bg-indigo-950/80 border border-indigo-800 p-4 rounded-xl">
                    <span className="text-xs font-mono font-bold text-amber-400 block mb-1">Pillar 03</span>
                    <strong className="text-white text-base sm:text-lg block font-bold mb-1">Balanced Robot Design</strong>
                    <p className="text-indigo-200 text-sm sm:text-base leading-snug">
                      Symmetrical, mechanically stable, and creatively customized.
                    </p>
                  </div>

                  <div className="bg-indigo-950/80 border border-indigo-800 p-4 rounded-xl">
                    <span className="text-xs font-mono font-bold text-amber-400 block mb-1">Pillar 04</span>
                    <strong className="text-white text-base sm:text-lg block font-bold mb-1">Clear Q&A Presentation</strong>
                    <p className="text-indigo-200 text-sm sm:text-base leading-snug">
                      Clear voice, confident delivery, and natural answers without script.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-indigo-800 text-xs sm:text-sm text-indigo-300 font-bold uppercase tracking-wider">
                Excellence in Student Showcase
              </div>
            </div>
          </div>
        </div>
      );

    /* -------------------------------------------------------------
       SLIDE 12: Summary: What's Most Important!
    -------------------------------------------------------------- */
    case 'summary':
      return <SummarySlide isDark={isDark} />;

    /* -------------------------------------------------------------
       SLIDE 13: Day 1 Interactive Onboarding Quiz
    -------------------------------------------------------------- */
    case 'quiz':
      return <InteractiveQuiz isDark={isDark} />;

    /* -------------------------------------------------------------
       SLIDE 14: Probation Evaluation & Graduation
    -------------------------------------------------------------- */
    case 'graduation':
      return (
        <div className="h-full w-full flex flex-col justify-center py-1">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 flex-1 min-h-0">
            {/* Card 1: Ongoing Documentation */}
            <div className={`border-2 rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-sm transition-all ${cardBgClass} ${cardBorderClass} hover:border-indigo-400`}>
              <div>
                <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center mb-4 shadow-xs">
                  <FileText size={24} />
                </div>
                <div className="text-xs sm:text-sm font-bold text-indigo-500 uppercase tracking-wider mb-1.5">
                  Continuous Logging
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3">
                  Ongoing Documentation
                </h3>
                <ul className={`space-y-3 text-base sm:text-lg leading-relaxed ${textMutedClass}`}>
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-indigo-600 mt-2 shrink-0" />
                    <span>
                      Trainee updates <strong>Training Record Instructor</strong> weekly.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-indigo-600 mt-2 shrink-0" />
                    <span>
                      Senior mentor files <strong>Mentoring Form</strong> into Coaching Form folder.
                    </span>
                  </li>
                </ul>
              </div>
              <div className={`mt-5 pt-3 border-t text-xs sm:text-sm font-bold uppercase tracking-wider ${isDark ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-slate-500'}`}>
                Continuous Audit Trail
              </div>
            </div>

            {/* Card 2: Month 3 Milestone */}
            <div className={`border-2 rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-sm transition-all ${cardBgClass} ${cardBorderClass} hover:border-blue-400`}>
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-4 shadow-xs">
                  <ClipboardList size={24} />
                </div>
                <div className="text-xs sm:text-sm font-bold text-blue-500 uppercase tracking-wider mb-1.5">
                  Month 3 Milestone
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3">
                  Probation Review
                </h3>
                <ul className={`space-y-3 text-base sm:text-lg leading-relaxed ${textMutedClass}`}>
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-blue-600 mt-2 shrink-0" />
                    <span>
                      Formal review at <strong>Month 3</strong> using official Probation Evaluation Form.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-blue-600 mt-2 shrink-0" />
                    <span>
                      Conducted jointly by <strong>Senior Instructors</strong> & <strong>Lead Instructor</strong>.
                    </span>
                  </li>
                </ul>
              </div>
              <div className={`mt-5 pt-3 border-t text-xs sm:text-sm font-bold uppercase tracking-wider ${isDark ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-slate-500'}`}>
                Formal Leadership Review
              </div>
            </div>

            {/* Card 3: Graduation Criteria */}
            <div className="bg-gradient-to-br from-emerald-900 to-slate-900 text-white rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-md border-2 border-emerald-700">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-700 border border-emerald-600 text-white flex items-center justify-center mb-4 shadow-xs">
                  <GraduationCap size={26} />
                </div>
                <div className="text-xs sm:text-sm font-bold text-emerald-300 uppercase tracking-wider mb-1.5">
                  Final Promotion
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  Graduation Criteria
                </h3>
                <ul className="space-y-3 text-emerald-100 text-base sm:text-lg leading-relaxed">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="text-emerald-400 mt-1 shrink-0" size={20} />
                    <span>
                      Meeting all KPI benchmarks (<strong className="text-white font-bold">≥ 85% teaching score</strong>).
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="text-emerald-400 mt-1 shrink-0" size={20} />
                    <span>
                      <strong className="text-white font-bold">Zero operational incidents</strong> or safety violations.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="text-emerald-400 mt-1 shrink-0" size={20} />
                    <span>
                      Promotion to <strong className="text-white font-black">Full Instructor status</strong>!
                    </span>
                  </li>
                </ul>
              </div>
              <div className="mt-5 pt-3 border-t border-emerald-800 text-xs sm:text-sm text-emerald-300 font-bold uppercase tracking-wider">
                Full Instructor Status Confirmed
              </div>
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
};
